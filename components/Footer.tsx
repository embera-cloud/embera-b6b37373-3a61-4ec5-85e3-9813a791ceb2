```tsx
import { Swords, Twitter, Twitch, Youtube, Disc } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { Icon: Twitter, href: "#" },
  { Icon: Twitch, href: "#" },
  { Icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark/50 border-t border-white/10 mt-20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Socials */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Swords className="h-8 w-8 text-accent-purple" />
              <h1 className="text-2xl font-display text-white tracking-widest">
                MYSTIC VAULT
              </h1>
            </Link>
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Mystic Games. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(({ Icon, href }, index) => (
                <Link key={index} href={href} className="text-gray-400 hover:text-accent-blue transition-colors">
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-bold text-lg text-white mb-4">Quick Links</h3>
            <Link href="/press-kit" className="text-gray-400 hover:text-accent-gold mb-2 transition-colors">Press Kit</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-accent-gold mb-2 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-accent-gold transition-colors">Terms of Service</Link>
          </div>
          
          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start">
             <h3 className="font-bold text-lg text-white mb-4">Join Our Quest</h3>
             <p className="text-gray-400 text-sm mb-4 text-center md:text-left">Get the latest development updates and exclusive content.</p>
             <form className="w-full max-w-sm flex">
                <input type="email" placeholder="your.email@domain.com" className="w-full bg-primary-light border border-white/20 rounded-l-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent-purple" />
                <button type="submit" className="bg-accent-purple text-white font-bold px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors">
                    Sign Up
                </button>
             </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
```