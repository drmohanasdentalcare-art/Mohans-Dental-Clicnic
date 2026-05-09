import React, { useState } from 'react';
import { motion } from 'motion/react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
  subtitle?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ 
  beforeImage, 
  afterImage,
  title,
  subtitle
}) => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <div className="w-full space-y-6">
      {(title || subtitle) && (
        <div className="text-center md:text-left">
          {title && <h3 className="font-serif text-2xl text-white italic">{title}</h3>}
          {subtitle && <p className="text-brand-cream/60 text-xs uppercase tracking-widest mt-1">{subtitle}</p>}
        </div>
      )}
      
      <div className="relative aspect-[4/3] rounded-none overflow-hidden glass-panel group cursor-ew-resize border border-white/10">
        {/* After Image (Background) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${afterImage})` }}
        />

        {/* Before Image (Overlayed) */}
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.6]"
          style={{ 
            backgroundImage: `url(${beforeImage})`,
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
          }}
        />

        {/* Labels */}
        <div className="absolute inset-x-6 top-6 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="px-3 py-1 bg-brand-bg/80 text-[8px] uppercase tracking-[0.2em] text-white border border-white/10">Clinical Reality</span>
          <span className="px-3 py-1 bg-brand-accent text-[8px] uppercase tracking-[0.2em] text-brand-bg font-bold">Structural Finale</span>
        </div>

        {/* Slider Controls */}
        <div 
          className="absolute inset-y-0 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute inset-y-0 w-px bg-brand-accent/50 shadow-[0_0_15px_rgba(197,164,126,0.3)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/10 bg-brand-bg/40 backdrop-blur-md flex items-center justify-center">
            <div className="flex gap-1.5">
              <div className="w-px h-4 bg-brand-accent/40" />
              <div className="w-px h-4 bg-brand-accent/40" />
            </div>
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={handleMove}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
        />
      </div>
    </div>
  );
};
