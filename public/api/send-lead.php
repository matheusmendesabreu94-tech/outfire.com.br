<?php
// CORS & Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Método não permitido"]);
    exit();
}

$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Dados inválidos"]);
    exit();
}

$to = "contato@outfire.com.br";
$nome = htmlspecialchars($data['nome'] ?? 'Não informado');
$empresa = htmlspecialchars($data['empresa'] ?? 'Não informada');
$telefone = htmlspecialchars($data['telefone'] ?? 'Não informado');
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$cidade = htmlspecialchars($data['cidade'] ?? 'Não informada');
$origem = htmlspecialchars($data['origem'] ?? 'Site Outfire');
$detalhes = htmlspecialchars($data['detalhes'] ?? '');
$totalPedido = isset($data['totalPedido']) ? number_format((float)$data['totalPedido'], 2, ',', '.') : null;
$customMessage = htmlspecialchars($data['customMessage'] ?? '');

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
            <p style='color: #94a3b8; margin: 6px 0 0 0; font-size: 13px;'>Novo Lead Captado no Site Oficial</p>
        </div>
        <div style='padding: 24px;'>
            <table style='width: 100%; border-collapse: collapse; font-size: 14px;'>
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b; width: 40%;'><strong>Nome do Responsável:</strong></td>
                    <td style='padding: 10px; color: #ffffff; border-bottom: 1px solid #1e293b; font-weight: bold;'>$nome</td>
                </tr>
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b;'><strong>Restaurante / Empresa:</strong></td>
                    <td style='padding: 10px; color: #ffffff; border-bottom: 1px solid #1e293b; font-weight: bold;'>$empresa</td>
                </tr>
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b;'><strong>WhatsApp:</strong></td>
                    <td style='padding: 10px; color: #10b981; border-bottom: 1px solid #1e293b; font-weight: bold;'>$telefone</td>
                </tr>
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b;'><strong>E-mail:</strong></td>
                    <td style='padding: 10px; color: #ffffff; border-bottom: 1px solid #1e293b;'><a href='mailto:$email' style='color: #38bdf8; text-decoration: none;'>$email</a></td>
                </tr>
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b;'><strong>Cidade / UF:</strong></td>
                    <td style='padding: 10px; color: #ffffff; border-bottom: 1px solid #1e293b;'>$cidade</td>
                </tr>
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b;'><strong>Origem do Lead:</strong></td>
                    <td style='padding: 10px; color: #f59e0b; border-bottom: 1px solid #1e293b;'>$origem</td>
                </tr>";

if ($totalPedido) {
    $message .= "
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b;'><strong>Valor Total Estimado:</strong></td>
                    <td style='padding: 10px; color: #d4af37; border-bottom: 1px solid #1e293b; font-size: 16px; font-weight: bold;'>R$ $totalPedido</td>
                </tr>";
}

if ($detalhes) {
    $message .= "
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b;'><strong>Detalhes / Itens:</strong></td>
                    <td style='padding: 10px; color: #cbd5e1; border-bottom: 1px solid #1e293b;'>$detalhes</td>
                </tr>";
}

if ($customMessage) {
    $message .= "
                <tr>
                    <td style='padding: 10px; color: #94a3b8; border-bottom: 1px solid #1e293b;'><strong>Mensagem:</strong></td>
                    <td style='padding: 10px; color: #cbd5e1; border-bottom: 1px solid #1e293b;'>$customMessage</td>
                </tr>";
}

$cleanPhone = preg_replace('/[^0-9]/', '', $telefone);
if (strlen($cleanPhone) >= 10 && substr($cleanPhone, 0, 2) !== '55') {
    $cleanPhone = '55' . $cleanPhone;
}

$message .= "
            </table>

            <div style='margin-top: 24px; text-align: center;'>
                <a href='https://wa.me/$cleanPhone' style='display: inline-block; background: #10b981; color: #ffffff; text-decoration: none; font-weight: bold; padding: 12px 24px; border-radius: 10px; font-size: 14px;'>Chamar Cliente no WhatsApp</a>
            </div>
        </div>
        <div style='background: #0a0c10; padding: 16px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #1e293b;'>
            Este e-mail foi gerado automaticamente pelo site oficial outfire.com.br em " . date('d/m/Y H:i:s') . ".
        </div>
    </div>
</body>
</html>";

// Headers
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: Outfire Leads <noreply@outfire.com.br>',
    'Reply-To: ' . ($email ?: 'contato@outfire.com.br'),
    'X-Mailer: PHP/' . phpversion()
];

$sent = @mail($to, $subject, $message, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(["status" => "success", "message" => "Lead enviado para $to com sucesso"]);
} else {
    echo json_encode(["status" => "warning", "message" => "Processado, mas mail() local retornou falso"]);
}
