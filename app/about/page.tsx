```tsx
export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="font-display text-5xl md:text-7xl text-white text-center mb-12">
          About Mystic Vault
        </h1>
        <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 space-y-6 text-lg text-gray-300">
          <p>
            Mystic Vault was born from a passion for both brain-teasing puzzles and the high-stakes, replayable nature of roguelite games. Developed by a small, dedicated team of indie developers at Mystic Games, our goal was to create an experience that is both intellectually stimulating and viscerally satisfying.
          </p>
          <p>
            We've poured countless hours into perfecting the combo mechanics, designing a progression system that feels rewarding, and crafting a magical, atmospheric world that players can get lost in. The shifting biomes of the vault are designed to keep you on your toes, ensuring no two runs are ever the same.
          </p>
          <p>
            Our community is at the heart of our development process. We invite you to join our Discord, share your feedback, and become part of the Mystic Vault legend. Thank you for your support, and we'll see you in the dungeon!
          </p>
        </div>
      </div>
    </div>
  );
}
```