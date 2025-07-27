import React, { useEffect, useRef } from 'react';

const CodeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Код для анимации
    const codeLines = [
      'import tensorflow as tf',
      'from transformers import GPT2LMHeadModel',
      'class NeuralNetwork:',
      '    def __init__(self, layers):',
      '        self.layers = layers',
      '        self.weights = []',
      '    def forward(self, x):',
      '        for layer in self.layers:',
      '            x = layer.forward(x)',
      '        return x',
      'model = GPT2LMHeadModel.from_pretrained("gpt2")',
      'optimizer = torch.optim.Adam(model.parameters())',
      'def train_step(batch):',
      '    loss = model(batch)',
      '    loss.backward()',
      '    optimizer.step()',
      'for epoch in range(1000):',
      '    train_step(data_batch)',
      'print("Training complete")',
      'async function generateResponse(prompt) {',
      '  const response = await fetch("/api/chat", {',
      '    method: "POST",',
      '    headers: { "Content-Type": "application/json" },',
      '    body: JSON.stringify({ prompt })',
      '  });',
      '  return response.json();',
      '}',
      'const ai = new AIModel({',
      '  temperature: 0.7,',
      '  maxTokens: 2048,',
      '  topP: 0.9',
      '});'
    ];

    interface CodeParticle {
      x: number;
      y: number;
      text: string;
      opacity: number;
      speed: number;
      fontSize: number;
      color: string;
    }

    const particles: CodeParticle[] = [];

    // Создаем частицы кода
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: codeLines[Math.floor(Math.random() * codeLines.length)],
        opacity: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 0.5 + 0.2,
        fontSize: Math.random() * 8 + 10,
        color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Рисуем градиентный фон
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
      gradient.addColorStop(0.3, 'rgba(5, 5, 20, 0.9)');
      gradient.addColorStop(0.7, 'rgba(10, 10, 30, 0.9)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Анимируем частицы кода
      particles.forEach(particle => {
        particle.y -= particle.speed;
        
        if (particle.y < -50) {
          particle.y = canvas.height + 50;
          particle.x = Math.random() * canvas.width;
          particle.text = codeLines[Math.floor(Math.random() * codeLines.length)];
        }

        ctx.font = `${particle.fontSize}px 'Fira Code', monospace`;
        ctx.fillStyle = particle.color.replace('60%)', `${particle.opacity * 60}%)`);
        ctx.fillText(particle.text, particle.x, particle.y);

        // Добавляем эффект свечения
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.fillText(particle.text, particle.x, particle.y);
        ctx.shadowBlur = 0;
      });

      // Добавляем сетку
      ctx.strokeStyle = 'rgba(0, 150, 255, 0.1)';
      ctx.lineWidth = 1;
      
      for (let x = 0; x < canvas.width; x += 100) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += 100) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default CodeBackground;