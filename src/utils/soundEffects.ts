// Web Audio API Native Sound Synthesizer for Outfire 3D Simulation
// 100% Client-side, zero external MP3 dependencies, zero latency, ultra-lightweight.

class SoundEffectsController {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private activeNodes: { stop: () => void }[] = [];

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.stopAll();
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public stopAll() {
    this.activeNodes.forEach(node => {
      try {
        node.stop();
      } catch {
        // ignore
      }
    });
    this.activeNodes = [];
  }

  // 1. Alarme Intermitente da Central (Beep Duplo de 880Hz / 440Hz)
  public playAlarmBeeps(durationSec: number = 11): () => void {
    if (this.isMuted) return () => {};
    const ctx = this.getContext();
    if (!ctx) return () => {};

    let isRunning = true;
    const interval = 0.4; // cada ciclo de beep
    let nextTime = ctx.currentTime + 0.05;
    const endTime = ctx.currentTime + durationSec;

    const scheduleBeep = () => {
      if (!isRunning || !this.ctx || this.ctx.currentTime >= endTime) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.setValueAtTime(440, this.ctx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime);
      osc.stop(this.ctx.currentTime + 0.28);
    };

    const timer = setInterval(() => {
      if (!isRunning || (ctx && ctx.currentTime >= endTime)) {
        clearInterval(timer);
        return;
      }
      scheduleBeep();
    }, interval * 1000);

    scheduleBeep();

    const stopFn = () => {
      isRunning = false;
      clearInterval(timer);
    };

    this.activeNodes.push({ stop: stopFn });
    return stopFn;
  }

  // 2. Sirene de Evacuação (Modulação Contínua de 600Hz a 1200Hz por ~5s)
  public playEvacuationSiren(durationSec: number = 5): () => void {
    if (this.isMuted) return () => {};
    const ctx = this.getContext();
    if (!ctx) return () => {};

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(850, ctx.currentTime);

    // LFO modula o tom de subida e descida da sirene (1.5 Hz)
    lfo.type = 'triangle';
    lfo.frequency.setValueAtTime(1.5, ctx.currentTime);
    lfoGain.gain.setValueAtTime(350, ctx.currentTime); // modulação +/- 350Hz

    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);

    gain.gain.setValueAtTime(0.01, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.12, ctx.currentTime + durationSec - 0.5);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + durationSec);

    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    lfo.start(now);
    osc.start(now);
    lfo.stop(now + durationSec);
    osc.stop(now + durationSec);

    const stopFn = () => {
      try {
        osc.stop();
        lfo.stop();
      } catch {
        // ignore
      }
    };

    this.activeNodes.push({ stop: stopFn });
    return stopFn;
  }

  // 3. Impacto Metálico / Louça na Botoeira (CLACK!)
  public playClackImpact() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    // Ruído percussivo rápido
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.13);
  }

  // 4. Som de Aborto / Confirmação de Sucesso (Dois tons harmônicos de alívio)
  public playSuccessChime() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const playTone = (freq: number, delay: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);

      gain.gain.setValueAtTime(0.15, ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.55);
    };

    playTone(784, 0);     // G5
    playTone(1046.5, 0.12); // C6
  }

  // 5. Corte de Gás (Swoosh suave de corte de fluxo de pressão)
  public playGasCutoff() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.2);

    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.22);
  }

  // 6. Supressão / Descarga de Agente Químico (Chiado de alta pressão de saponificante e CO2)
  public playSuppressionHiss(durationSec: number = 3.5): () => void {
    if (this.isMuted) return () => {};
    const ctx = this.getContext();
    if (!ctx) return () => {};

    // Ruído branco gerado dinamicamente para simular spray sob alta pressão
    const bufferSize = ctx.sampleRate * Math.min(durationSec, 5);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime);
    filter.Q.setValueAtTime(1.2, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.01, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.18, ctx.currentTime + durationSec - 0.4);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + durationSec);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(ctx.currentTime);
    noise.stop(ctx.currentTime + durationSec);

    const stopFn = () => {
      try {
        noise.stop();
      } catch {}
    };

    this.activeNodes.push({ stop: stopFn });
    return stopFn;
  }

  // 7. Desarme de Solenoide & Fechamento do Damper Corta-Fogo (Impacto mecânico metálico de alta pressão: THWACK / CLANG)
  public playDamperSnap() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    // 1. Pulso percussivo de mola solenoide (grave e rápido)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(320, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.16);

    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.17);

    // 2. Ruído metálico de travamento da lâmina em 90 graus
    const bufferSize = Math.floor(ctx.sampleRate * 0.12);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(800, ctx.currentTime);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.22, ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noise.start(ctx.currentTime);
    noise.stop(ctx.currentTime + 0.13);
  }

  // 8. Som de Advertência / Ação Proibida (Buzzer duplo grave)
  public playBuzzError() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const playBeep = (delay: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, ctx.currentTime + delay);
      gain.gain.setValueAtTime(0.22, ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.16);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.18);
    };

    playBeep(0);
    playBeep(0.12);
  }
}

export const soundEffects = new SoundEffectsController();
