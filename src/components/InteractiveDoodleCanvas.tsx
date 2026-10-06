import React, { useRef, useState, useEffect } from 'react';
import { PenTool, Eraser, Trash2, Download, RotateCcw, Palette } from 'lucide-react';

export const InteractiveDoodleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#22d3ee'); // Default cyan
  const [brushSize, setBrushSize] = useState(3);
  const [isEraser, setIsEraser] = useState(false);

  const colors = [
    { name: 'Sian', hex: '#22d3ee' },
    { name: 'Binafsha', hex: '#a855f7' },
    { name: 'Pushti', hex: '#f43f5e' },
    { name: 'Zumrad', hex: '#10b981' },
    { name: 'Sariq', hex: '#fbbf24' },
    { name: 'Oq', hex: '#ffffff' },
  ];

  // Initialize canvas with a clean dark background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set display resolution
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Initial background
    ctx.fillStyle = '#0b0f19';
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Draw initial sample doodle note
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 2;
    ctx.font = '14px Plus Jakarta Sans, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText("🎨 Bu yerda siz ham rasm chizishingiz yoki Shirin uchun tilak yozishingiz mumkin!", 20, 35);
  }, []);

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    if ('touches' in e) {
      const touch = e.touches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    setIsDrawing(true);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = brushSize;
    ctx.strokeStyle = isEraser ? '#0b0f19' : color;
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = '#0b0f19';
    ctx.fillRect(0, 0, rect.width, rect.height);
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'shirin-portfolio-eskiz.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-6 backdrop-blur-md">
      {/* Canvas Controls Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
            Interaktiv Eskiz Doskasi (Doodle Canvas)
          </span>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Colors */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            {colors.map((c) => (
              <button
                key={c.hex}
                onClick={() => {
                  setColor(c.hex);
                  setIsEraser(false);
                }}
                className={`w-5 h-5 rounded-md transition-transform ${
                  color === c.hex && !isEraser ? 'scale-125 ring-2 ring-white/60' : 'hover:scale-110'
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>

          {/* Eraser */}
          <button
            onClick={() => setIsEraser(!isEraser)}
            className={`p-1.5 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1 ${
              isEraser
                ? 'bg-purple-600 text-white border-purple-500'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
            title="O'chirg'ich"
          >
            <Eraser className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">O'chirish</span>
          </button>

          {/* Brush Size */}
          <select
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
            className="bg-slate-900 border border-slate-800 text-slate-300 text-xs rounded-lg px-2 py-1.5 focus:outline-none"
          >
            <option value={2}>Yupqa (2px)</option>
            <option value={4}>O'rtacha (4px)</option>
            <option value={8}>Qalin (8px)</option>
          </select>

          {/* Clear */}
          <button
            onClick={clearCanvas}
            className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-rose-400 border border-slate-800 hover:border-rose-900/50 transition-colors"
            title="Tozalash"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>

          {/* Download */}
          <button
            onClick={downloadCanvas}
            className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors flex items-center gap-1 text-xs"
            title="Rasmni yuklab olish"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Yuklab olish</span>
          </button>
        </div>
      </div>

      {/* Canvas element */}
      <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-800/80 cursor-crosshair">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-full block touch-none"
        />
      </div>

      <div className="mt-2 text-right">
        <span className="text-[11px] text-slate-500">
          Ushbu interaktiv doskaga sichqoncha yoki sensorli ekran orqali o'z eskizingizni chizishingiz mumkin.
        </span>
      </div>
    </div>
  );
};
