```tsx
'use client';

import { useState } from 'react';
import { Swords, Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#editions', label: 'Editions' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Swords className="h-8 w-8 text-accent-purple" />
          <h1 className="text-2xl font-display text-white tracking-widest">
            MYSTIC VAULT
          </h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
             <Link key={link.href} href={link.href} className="text-gray-300 hover:text-accent-gold transition-colors duration-300">
                {link.label}
             </Link>
          ))}
        </nav>
        
        <div className="hidden md:block">
            <button className="px-5 py-2 bg-accent-purple text-white font-bold rounded-lg shadow-glow-purple hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
                Wishlist Now
            </button>
        </div>

        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav border-t-0">
          <div className="px-6 pt-2 pb-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
             <Link key={link.href} href={link.href} className="text-gray-300 hover:text-accent-gold transition-colors duration-300 text-center py-2" onClick={() => setIsOpen(false)}>
                {link.label}
             </Link>
            ))}
            <button className="mt-4 w-full px-5 py-2 bg-accent-purple text-white font-bold rounded-lg shadow-glow-purple hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
                Wishlist Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
```