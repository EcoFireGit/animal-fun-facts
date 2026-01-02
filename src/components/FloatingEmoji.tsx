interface FloatingEmojiProps {
  emoji: string;
  className?: string;
  delay?: string;
}

export function FloatingEmoji({ emoji, className = "", delay = "0s" }: FloatingEmojiProps) {
  return (
    <span 
      className={`absolute text-4xl opacity-20 animate-float pointer-events-none select-none ${className}`}
      style={{ animationDelay: delay }}
    >
      {emoji}
    </span>
  );
}
