import { Animal } from "@/data/animalFacts";

interface FactCardProps {
  animal: Animal;
  fact: string;
}

export function FactCard({ animal, fact }: FactCardProps) {
  return (
    <div className="animate-scale-in w-full max-w-lg">
      <div className="relative bg-card rounded-2xl p-8 shadow-card border-2 border-primary/10 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        {/* Content */}
        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl animate-bounce-soft">{animal.emoji}</span>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                {animal.name}
              </h2>
              <p className="text-muted-foreground text-sm font-medium">Fun Fact</p>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
            <p className="text-lg leading-relaxed text-foreground/90 font-medium">
              {fact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
