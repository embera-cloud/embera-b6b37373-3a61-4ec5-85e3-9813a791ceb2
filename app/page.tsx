```tsx
import { Gem, Swords, BrainCircuit, Repeat, Award, Crown, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
        <div className="container mx-auto px-6 z-10 animate-fade-in-up">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-[0_5px_15px_rgba(138,43,226,0.4)]">
            Mystic Vault
          </h1>
          <p className="mt-4 mb-8 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Delve into the Vault. Master the Combo. Survive the Dungeon.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-accent-purple text-white font-bold rounded-lg shadow-glow-purple hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 animate-subtle-pulse">
              Buy on Steam
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-accent-gold text-accent-gold font-bold rounded-lg shadow-glow-gold hover:bg-accent-gold hover:text-background transition-all duration-300 transform hover:scale-105">
              Get on App Store
            </button>
          </div>
        </div>
      </section>

      {/* Gameplay Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
            <div className="relative inline-block p-2 border-2 border-accent-blue/50 rounded-2xl shadow-[0_0_30px] shadow-accent-blue/30">
                <img src="https://placehold.co/1200x675/030014/8A2BE2?text=Epic+Gameplay+Trailer" alt="Mystic Vault Gameplay" className="rounded-xl" />
                <div className="absolute inset-0 border-4 border-transparent hover:border-accent-blue rounded-2xl transition-all duration-300"></div>
            </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-center font-display text-4xl md:text-5xl text-white mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BrainCircuit size={40} className="text-accent-purple" />}
              title="Tactical Puzzles"
              description="Master deep combo mechanics to outsmart enemies and solve intricate environmental puzzles."
            />
            <FeatureCard
              icon={<Swords size={40} className="text-accent-gold" />}
              title="Roguelite Progression"
              description="Choose your class, unlock powerful upgrades, and amass a fortune in a robust gold economy."
            />
            <FeatureCard
              icon={<Repeat size={40} className="text-accent-blue" />}
              title="Endless Replayability"
              description="Face daily bounties, climb leaderboards, and survive ever-shifting traps in a new dungeon every run."
            />
          </div>
        </div>
      </section>

      {/* Purchase / Editions Section */}
      <section id="editions" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-center font-display text-4xl md:text-5xl text-white mb-12">Choose Your Edition</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <EditionCard 
              title="Standard Edition"
              price="$19.99"
              features={["Full Game Access", "Class Progression System", "Daily Bounties & Leaderboards"]}
              cta="Buy Standard"
              glowColor="purple"
            />
            <EditionCard 
              title="Supporter Edition"
              price="$29.99"
              features={["Everything in Standard", "Exclusive Hero Icons", "Official Ambient Soundtrack", "Digital Artbook"]}
              cta="Buy Supporter"
              glowColor="gold"
              isPopular
            />
          </div>
        </div>
      </section>
    </>
  );
}

// Sub-components for the page
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="glass-card p-8 group transition-all duration-300 hover:border-white/30 hover:-translate-y-2">
    <div className="mb-4">{icon}</div>
    <h3 className="font-display text-2xl text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const EditionCard = ({ title, price, features, cta, glowColor, isPopular = false }: { title: string, price: string, features: string[], cta: string, glowColor: 'purple' | 'gold', isPopular?: boolean }) => {
  const glowClass = glowColor === 'purple' ? 'shadow-glow-purple border-accent-purple' : 'shadow-glow-gold border-accent-gold';
  const buttonClass = glowColor === 'purple' 
    ? 'bg-accent-purple hover:bg-purple-700 shadow-glow-purple'
    : 'bg-accent-gold hover:bg-yellow-500 shadow-glow-gold text-background';

  return (
    <div className={`relative glass-card p-8 border-2 border-transparent transition-all duration-300 hover:${glowClass} flex flex-col`}>
      {isPopular && <div className="absolute top-0 right-8 -translate-y-1/2 bg-accent-gold text-background px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>}
      <h3 className="font-display text-3xl text-white mb-2">{title}</h3>
      <p className="text-5xl font-bold text-white mb-6">{price}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <Star className={`h-5 w-5 ${glowColor === 'purple' ? 'text-accent-purple' : 'text-accent-gold'}`} />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-auto px-8 py-3 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 ${buttonClass}`}>
        {cta}
      </button>
    </div>
  );
};
```