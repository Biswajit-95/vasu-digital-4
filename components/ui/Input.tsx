
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  isTextArea?: boolean;
  maxLength?: number;
  currentLength?: number;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  className = '', 
  isTextArea = false, 
  maxLength,
  currentLength,
  ...props 
}) => {
  const inputClasses = `w-full px-4 py-3 rounded-xl border bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 transition-all font-light placeholder:text-gray-300
    ${error 
      ? 'border-rich-crimson focus:border-rich-crimson focus:ring-rich-crimson/10' 
      : 'border-earth-beige focus:border-aura-gold focus:ring-aura-gold/10'
    } ${className}`;

  return (
    <div className="space-y-2 w-full">
      <div className="flex justify-between items-center">
        <label className="text-[10px] font-bold uppercase text-slate-600 tracking-[0.2em] block">
          {label}
        </label>
        {maxLength && currentLength !== undefined && (
          <span className={`text-[10px] font-bold ${currentLength >= maxLength ? 'text-rich-crimson' : 'text-slate-400'}`}>
            {currentLength}/{maxLength}
          </span>
        )}
      </div>
      
      {isTextArea ? (
        <textarea 
          className={`${inputClasses} resize-none min-h-[120px]`}
          maxLength={maxLength}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input 
          className={inputClasses}
          maxLength={maxLength}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      
      {error && (
        <p className="text-rich-crimson text-[10px] font-bold uppercase tracking-widest mt-1 animate-pulse">{error}</p>
      )}
    </div>
  );
};

export default Input;
