export interface Animal {
  id: string;
  name: string;
  emoji: string;
  facts: string[];
}

export const animals: Animal[] = [
  {
    id: "elephant",
    name: "Elephant",
    emoji: "🐘",
    facts: [
      "Elephants are the only animals that can't jump!",
      "An elephant's trunk has over 40,000 muscles.",
      "Elephants can recognize themselves in mirrors.",
      "They mourn their dead and can cry real tears.",
    ],
  },
  {
    id: "octopus",
    name: "Octopus",
    emoji: "🐙",
    facts: [
      "Octopuses have three hearts and blue blood!",
      "They can taste with their suckers.",
      "An octopus can squeeze through any hole larger than its beak.",
      "They've been observed using tools like coconut shells for shelter.",
    ],
  },
  {
    id: "penguin",
    name: "Penguin",
    emoji: "🐧",
    facts: [
      "Penguins propose to their mates with pebbles!",
      "They can drink salt water because they filter out the salt.",
      "Emperor penguins can dive up to 1,800 feet deep.",
      "Some penguins live in tropical climates, not just cold ones.",
    ],
  },
  {
    id: "dolphin",
    name: "Dolphin",
    emoji: "🐬",
    facts: [
      "Dolphins sleep with one eye open!",
      "They give each other unique names using whistles.",
      "Dolphins can hold their breath for up to 8 minutes.",
      "They're one of the few animals that can recognize themselves in mirrors.",
    ],
  },
  {
    id: "koala",
    name: "Koala",
    emoji: "🐨",
    facts: [
      "Koalas sleep up to 22 hours a day!",
      "Their fingerprints are nearly identical to human fingerprints.",
      "Baby koalas are called 'joeys' and are the size of a jellybean at birth.",
      "They have two opposable thumbs on each hand.",
    ],
  },
  {
    id: "owl",
    name: "Owl",
    emoji: "🦉",
    facts: [
      "Owls can rotate their heads 270 degrees!",
      "A group of owls is called a 'parliament'.",
      "They can't move their eyeballs - that's why they turn their heads.",
      "Some owl species hunt other owls.",
    ],
  },
  {
    id: "fox",
    name: "Fox",
    emoji: "🦊",
    facts: [
      "Foxes use Earth's magnetic field to hunt!",
      "They have whiskers on their legs to help navigate.",
      "A fox's tail is called a 'brush' and helps them balance.",
      "Foxes can make over 40 different sounds.",
    ],
  },
  {
    id: "bee",
    name: "Bee",
    emoji: "🐝",
    facts: [
      "Bees can recognize human faces!",
      "A single bee produces only 1/12 teaspoon of honey in its lifetime.",
      "They communicate through 'waggle dances'.",
      "Honey never spoils - edible honey was found in Egyptian tombs.",
    ],
  },
  {
    id: "sloth",
    name: "Sloth",
    emoji: "🦥",
    facts: [
      "Sloths can hold their breath longer than dolphins - up to 40 minutes!",
      "They only poop once a week.",
      "Algae grows on their fur, providing camouflage.",
      "Sloths are surprisingly good swimmers.",
    ],
  },
  {
    id: "butterfly",
    name: "Butterfly",
    emoji: "🦋",
    facts: [
      "Butterflies taste with their feet!",
      "They can see colors we can't, including ultraviolet.",
      "Monarch butterflies migrate up to 3,000 miles.",
      "A butterfly's wings are actually transparent - colors come from tiny scales.",
    ],
  },
];

export function getRandomFact(animal: Animal): string {
  const randomIndex = Math.floor(Math.random() * animal.facts.length);
  return animal.facts[randomIndex];
}
