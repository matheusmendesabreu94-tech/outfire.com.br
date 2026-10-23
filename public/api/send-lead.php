<?php
// Strict Security Headers & Origin Validation
$allowedOrigins = ['https://outfire.com.br', 'https://www.outfire.com.br', 'http://localhost:5173'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header("Access-Control-Allow-Origin: https://outfire.com.br");
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: SAMEORIGIN");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Método não permitido"]);
    exit();
}

// Basic Rate Limiting per IP (max 5 requests per minute)
$clientIp = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateLimitFile = sys_get_temp_dir() . '/outfire_rl_' . md5($clientIp);
$currentTime = time();

if (file_exists($rateLimitFile)) {
    $rateData = json_decode(file_get_contents($rateLimitFile), true);
    if ($rateData && ($currentTime - $rateData['time']) < 60) {
        if ($rateData['count'] >= 5) {
            http_response_code(429);
            echo json_encode(["status" => "error", "message" => "Limite de requisições excedido. Tente novamente em alguns instantes."]);
            exit();
        }
        $rateData['count']++;
    } else {
        $rateData = ['time' => $currentTime, 'count' => 1];
    }
} else {
    $rateData = ['time' => $currentTime, 'count' => 1];
}
@file_put_contents($rateLimitFile, json_encode($rateData));

$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Dados inválidos"]);
    exit();
}

$to = "contato@outfire.com.br";
$nome = htmlspecialchars(trim($data['nome'] ?? 'Não informado'), ENT_QUOTES, 'UTF-8');
$empresa = htmlspecialchars(trim($data['empresa'] ?? 'Não informada'), ENT_QUOTES, 'UTF-8');
$telefone = htmlspecialchars(trim($data['telefone'] ?? 'Não informado'), ENT_QUOTES, 'UTF-8');

// Strict email sanitation & validation
$rawEmail = str_replace(["\r", "\n", "%0a", "%0d"], '', trim($data['email'] ?? ''));
$email = filter_var($rawEmail, FILTER_VALIDATE_EMAIL) ? $rawEmail : '';

$cidade = htmlspecialchars(trim($data['cidade'] ?? 'Não informada'), ENT_QUOTES, 'UTF-8');
$origem = htmlspecialchars(trim($data['origem'] ?? 'Site Outfire'), ENT_QUOTES, 'UTF-8');
$detalhes = htmlspecialchars(trim($data['detalhes'] ?? ''), ENT_QUOTES, 'UTF-8');
$totalPedido = isset($data['totalPedido']) ? number_format((float)$data['totalPedido'], 2, ',', '.') : null;
$customMessage = htmlspecialchars(trim($data['customMessage'] ?? ''), ENT_QUOTES, 'UTF-8');

$subject = "=?UTF-8?B?" . base64_encode("🔥 Novo Lead Outfire: $nome ($empresa)") . "?=";

// HTML Message
$message = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <title>Novo Lead Outfire</title>
</head>
<body style='font-family: Arial, sans-serif; background-color: #0b0d12; color: #e2e8f0; margin: 0; padding: 24px;'>
    <div style='max-width: 600px; margin: 0 auto; background: #131722; border: 1px solid #d4af37; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);'>
        <div style='background: linear-gradient(135deg, #1f1b13, #0a0c10); padding: 24px; text-align: center; border-bottom: 2px solid #d4af37;'>
            <h1 style='color: #d4af37; margin: 0; font-size: 24px; letter-spacing: 1px;'>OUTFIRE SISTEMAS</h1>
            <p style='color: #94a3b8; margin: 6px 0 0 0; font-size: 13px;'>Novo Lead Captado com Segurança no Site Oficial</p>
        </div>
        <div style='padding: 24px;'>
            <table style='width: 100%; border-collapse: collapse; font-size: 14px;'>
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b; width: 40%;'><strong>Nome do Responsável:</strong></td>
                    <td style='padding: 10px; color: #ffffff; border-bottom: 1px solid #1e293b; font-weight: bold;'>$nome</td>
                </tr>
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b;'><strong>Empresa / Restaurante:</strong></td>
                    <td style='padding: 10px; color: #ffffff; border-bottom: 1px solid #1e293b; font-weight: bold;'>$empresa</td>
                </tr>
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b;'><strong>WhatsApp:</strong></td>
                    <td style='padding: 10px; color: #38bdf8; border-bottom: 1px solid #1e293b; font-weight: bold;'><a href='https://wa.me/55" . preg_replace('/\D/', '', $telefone) . "' style='color: #38bdf8; text-decoration: none;'>$telefone</a></td>
                </tr>
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b;'><strong>E-mail:</strong></td>
                    <td style='padding: 10px; color: #ffffff; border-bottom: 1px solid #1e293b;'>" . ($email ?: 'Não informado') . "</td>
                </tr>
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b;'><strong>Cidade / UF:</strong></td>
                    <td style='padding: 10px; color: #ffffff; border-bottom: 1px solid #1e293b;'>$cidade</td>
                </tr>
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b;'><strong>Origem do Lead:</strong></td>
                    <td style='padding: 10px; color: #d4af37; border-bottom: 1px solid #1e293b;'>$origem</td>
                </tr>";

if ($totalPedido) {
    $message .= "
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b;'><strong>Valor Total Estimado:</strong></td>
                    <td style='padding: 10px; color: #4ade80; border-bottom: 1px solid #1e293b; font-weight: bold;'>R$ $totalPedido</td>
                </tr>";
}

if ($detalhes) {
    $message .= "
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b;'><strong>Itens / Detalhes:</strong></td>
                    <td style='padding: 10px; color: #e2e8f0; border-bottom: 1px solid #1e293b;'>" . nl2br($detalhes) . "</td>
                </tr>";
}

if ($customMessage) {
    $message .= "
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b;'><strong>Mensagem do Cliente:</strong></td>
                    <td style='padding: 10px; color: #e2e8f0; border-bottom: 1px solid #1e293b;'>" . nl2br($customMessage) . "</td>
                </tr>";
}

$message .= "
            </table>
        </div>
        <div style='background: #0d1017; padding: 16px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #1e293b;'>
            Este e-mail foi gerado automaticamente pelo portal outfire.com.br com sanitização e proteção LGPD.
        </div>
    </div>
</body>
</html>";

// Headers with safe Reply-To
$replyTo = $email ?: 'contato@outfire.com.br';
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: Outfire Leads <noreply@outfire.com.br>',
    'Reply-To: ' . $replyTo,
    'X-Mailer: PHP/' . phpversion()
];

$sent = @mail($to, $subject, $message, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(["status" => "success", "message" => "Lead enviado com sucesso"]);
} else {
    echo json_encode(["status" => "warning", "message" => "Processado localmente"]);
}
