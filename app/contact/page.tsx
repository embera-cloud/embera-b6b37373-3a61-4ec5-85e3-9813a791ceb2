```tsx
export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="font-display text-5xl md:text-7xl text-white text-center mb-12">
          Get In Touch
        </h1>
        <div className="max-w-2xl mx-auto glass-card p-8 md:p-12">
          <p className="text-center text-gray-300 mb-8">
            Have a question, a business inquiry, or just want to say hello? Drop us a line below. For support, please join our official Discord server for the fastest response.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input type="text" id="name" className="w-full bg-primary-light border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent-purple" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input type="email" id="email" className="w-full bg-primary-light border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent-purple" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea id="message" rows={5} className="w-full bg-primary-light border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent-purple"></textarea>
            </div>
            <button type="submit" className="w-full px-8 py-3 bg-accent-purple text-white font-bold rounded-lg shadow-glow-purple hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
```