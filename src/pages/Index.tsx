import { useState } from "react";
import { AnimalSelector } from "@/components/AnimalSelector";
import { FactCard } from "@/components/FactCard";
import { FloatingEmoji } from "@/components/FloatingEmoji";
import { Animal, getRandomFact } from "@/data/animalFacts";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [currentFact, setCurrentFact] = useState<string>("");
  const [factKey, setFactKey] = useState(0);

  const handleAnimalSelect = (animal: Animal) => {
    setSelectedAnimal(animal);
    setCurrentFact(getRandomFact(animal));
    setFactKey((prev) => prev + 1);
  };

  const handleNewFact = () => {
    if (selectedAnimal) {
      setCurrentFact(getRandomFact(selectedAnimal));
      setFactKey((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating background emojis */}
      <FloatingEmoji emoji="🌿" className="top-[10%] left-[5%]" delay="0s" />
      <FloatingEmoji emoji="🌸" className="top-[20%] right-[10%]" delay="0.5s" />
      <FloatingEmoji emoji="🍃" className="top-[60%] left-[8%]" delay="1s" />
      <FloatingEmoji emoji="🌺" className="top-[70%] right-[5%]" delay="1.5s" />
      <FloatingEmoji emoji="🦎" className="bottom-[15%] left-[15%]" delay="2s" />
      <FloatingEmoji emoji="🌻" className="top-[40%] right-[15%]" delay="0.8s" />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            Animal Facts
            <span className="inline-block ml-3 animate-bounce-soft">🐾</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Discover amazing fun facts about your favorite animals!
          </p>
        </div>

        {/* Selector */}
        <div className="mb-8 w-full flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <AnimalSelector onSelect={handleAnimalSelect} selectedAnimal={selectedAnimal} />
        </div>

        {/* Fact display */}
        {selectedAnimal && currentFact && (
          <div className="flex flex-col items-center gap-6" key={factKey}>
            <FactCard animal={selectedAnimal} fact={currentFact} />
            
            <Button 
              onClick={handleNewFact}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-soft hover:shadow-card transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Another Fact!
            </Button>
          </div>
        )}

        {/* Empty state */}
        {!selectedAnimal && (
          <div className="text-center text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-6xl mb-4">👆</p>
            <p className="font-medium">Select an animal to discover a fun fact!</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
