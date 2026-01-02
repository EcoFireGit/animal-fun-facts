import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { animals, Animal } from "@/data/animalFacts";

interface AnimalSelectorProps {
  onSelect: (animal: Animal) => void;
  selectedAnimal: Animal | null;
}

export function AnimalSelector({ onSelect, selectedAnimal }: AnimalSelectorProps) {
  const handleSelect = (id: string) => {
    const animal = animals.find((a) => a.id === id);
    if (animal) {
      onSelect(animal);
    }
  };

  return (
    <Select onValueChange={handleSelect} value={selectedAnimal?.id}>
      <SelectTrigger className="w-full max-w-sm h-14 text-lg font-medium bg-card border-2 border-primary/20 hover:border-primary/40 shadow-soft transition-all duration-300 focus:ring-primary/30 focus:ring-offset-2">
        <SelectValue placeholder="🔍 Choose an animal..." />
      </SelectTrigger>
      <SelectContent className="bg-card border-2 border-primary/20 shadow-card">
        {animals.map((animal) => (
          <SelectItem
            key={animal.id}
            value={animal.id}
            className="text-lg py-3 cursor-pointer hover:bg-primary/10 focus:bg-primary/10 transition-colors"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">{animal.emoji}</span>
              <span className="font-medium">{animal.name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
