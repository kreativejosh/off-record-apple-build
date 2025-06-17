
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, Star } from "lucide-react";

const Index = () => {
  const features = [
    {
      title: "Save Big",
      icon: "💸",
      description: "No need for a dev team. Use AI no-code tools like Bolt.new, Lovable.dev, and Replit to build fast and smart."
    },
    {
      title: "Move Fast",
      icon: "⚡",
      description: "Go from idea to prototype in days. Validate before you waste time and money."
    },
    {
      title: "Build Secure",
      icon: "🛡️",
      description: "Learn to build growth-ready apps that don't fall apart or get hacked."
    },
    {
      title: "Build with Others",
      icon: "🤝",
      description: "Join a founder-friendly, fluff-free community of dreamers and doers."
    }
  ];

  const modules = [
    {
      title: "Ideation Station",
      description: "Use AI tools to validate ideas before wasting time.",
      benefit: "Build what people actually want."
    },
    {
      title: "Build Like a Pro",
      description: "Design and build functional apps with no-code tools.",
      benefit: "Launch clean, smart products—fast."
    },
    {
      title: "Fort Knox Your App",
      description: "Prompt AI to build secure, reliable apps that scale.",
      benefit: "Avoid the \"Oops we got hacked\" story."
    },
    {
      title: "Launch to the Stars",
      description: "Map your go-to-market strategy + create content with AI.",
      benefit: "Get real users, test, and grow."
    }
  ];

  const testimonials = [
    {
      quote: "I've tried building apps before, but Off-Record gave me the tools and clarity I needed to finally launch something real. The pace, the vibe, the results—it just works.",
      author: "Chidera O.",
      role: "First-Time Founder"
    },
    {
      quote: "I built my MVP in 4 weeks, pitched it to a fintech accelerator, and they loved it. The AI tools made everything 10x faster.",
      author: "Samuel A.",
      role: "SaaS Entrepreneur"
    },
    {
      quote: "Ifunanya doesn't just teach—she helps you think like a builder. My app's now live, and I'm testing with real users.",
      author: "Lara O.",
      role: "Solo Founder & Designer"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="px-6 py-6">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <div className="text-xl font-medium text-white">
            Off-Record Academy
          </div>
          <div className="hidden md:flex space-x-8 text-sm text-apple-gray-300">
            <a href="#" className="hover:text-white transition-colors">Projects</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">News</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Services</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 min-h-[90vh] flex items-center">
        <div className="mx-auto max-w-7xl w-full relative">
          {/* Circular Arrow - Right Side */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="w-16 h-16 border border-apple-gray-600 rounded-full flex items-center justify-center">
              <ArrowDown className="w-6 h-6 text-apple-gray-400" />
            </div>
          </div>

          {/* Main Content - Center Left */}
          <div className="max-w-4xl -mt-20">
            <h1 className="text-6xl lg:text-8xl font-light tracking-tight text-white mb-8 leading-none">
              The zero to one<br />
              hundred studio.
            </h1>
            <div className="w-full h-px bg-apple-gray-600 mb-8"></div>
            <p className="text-xl lg:text-2xl text-apple-gray-300 font-light leading-relaxed max-w-3xl mb-[200px]">
              Strategic branding, <span className="underline">websites</span>, <span className="underline">digital products</span> and growth<br />
              for forward-thinking brands.
            </p>

            {/* Tool Logos - Under Supporting Text */}
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <div className="text-sm text-apple-gray-400 opacity-60">Framer</div>
              <div className="text-sm text-apple-gray-400 opacity-60">Webflow</div>
              <div className="text-sm text-apple-gray-400 opacity-60">WordPress</div>
              <div className="text-sm text-apple-gray-400 opacity-60">Lovable.dev</div>
              <div className="text-sm text-apple-gray-400 opacity-60">Bolt.new</div>
              <div className="text-sm text-apple-gray-400 opacity-60">Cursor.com</div>
              <div className="text-sm text-apple-gray-400 opacity-60">Replit.com</div>
              <div className="text-sm text-apple-gray-400 opacity-60">V0</div>
            </div>
          </div>

          {/* Bottom Status Bar */}
          <div className="absolute bottom-8 right-8 flex items-center space-x-4 text-sm text-apple-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Let's dive in</span>
            </div>
            <div className="bg-apple-gray-800 px-3 py-1 rounded text-xs">
              Now booking 2024 projects ↗
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="apple-card animate-scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
              💥 The Problem
            </h2>
            <div className="space-y-4 text-lg text-apple-gray-300 leading-relaxed">
              <p>You've got the idea, but launching feels like climbing Everest.</p>
              <p>Hiring devs? Expensive. Learning to code? Time-consuming.</p>
              <p>And let's not talk about those failed half-baked prototypes sitting in your Google Drive.</p>
              <p className="text-xl font-semibold text-white mt-8">
                <strong>Truth is:</strong> Building your MVP shouldn't be a drama series.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ✅ The Off-Record Solution
            </h2>
            <p className="text-lg lg:text-xl text-apple-gray-300 max-w-4xl mx-auto leading-relaxed">
              <strong>Off-Record Academy</strong> is your fast lane from "napkin sketch" to "real product"—even if you're not a techie.
              Over 6 weeks, you'll ideate, build, and launch a secure, functional MVP using powerful AI tools—all without writing a single line of code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="apple-card group cursor-pointer">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-apple-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section - Matching Image 2 Layout */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
                  Hey, I'm Ifunanya,<br />
                  I've been there too.
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-apple-gray-300 leading-relaxed">
                <p>
                  I know exactly how it feels to stare at your inbox, wondering when the next client will show up. 
                  To feel like no matter how hard you work on your app idea, you're stuck in the same cycle — 
                  complicated development, endless costs, and questioning if your idea will ever see the light of day.
                </p>
                
                <p className="text-white">It didn't...</p>
                
                <p>
                  ...until I figured out how to <strong className="text-white">position myself as the go-to 
                  founder for AI-powered no-code solutions</strong>.
                </p>
                
                <p>
                  Since then, I've helped hundreds of founders like you escape the complex development trap, 
                  launch MVPs in weeks, and build businesses they're proud of.
                </p>
              </div>

              {/* Rating Section */}
              <div className="flex items-center space-x-4 pt-8">
                <div className="flex items-center space-x-6">
                  <div className="flex space-x-1">
                    <div className="w-8 h-8 rounded-full bg-apple-gray-700 border border-apple-gray-600"></div>
                    <div className="w-8 h-8 rounded-full bg-apple-gray-700 border border-apple-gray-600 -ml-2"></div>
                    <div className="w-8 h-8 rounded-full bg-apple-gray-700 border border-apple-gray-600 -ml-2"></div>
                    <div className="w-8 h-8 rounded-full bg-apple-gray-700 border border-apple-gray-600 -ml-2"></div>
                    <div className="w-8 h-8 rounded-full bg-apple-gray-700 border border-apple-gray-600 -ml-2"></div>
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center space-x-1 mb-1">
                      <span className="text-white">Rated</span>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-white">by</span>
                    </div>
                    <div className="text-apple-gray-300">50+ founders.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-apple-gray-700 to-apple-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-apple-gray-600 flex items-center justify-center text-apple-gray-400">
                    <span className="text-lg">Instructor Photo</span>
                  </div>
                </div>
                {/* Bottom CTA */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="bg-apple-gray-800 border border-apple-gray-700 rounded-full px-6 py-3 text-sm text-apple-gray-300 hover:bg-apple-gray-700 transition-colors cursor-pointer">
                    → Now it's your turn. Let's talk.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            📚 What You'll Learn
          </h2>
          <div className="grid gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="apple-card">
                <CardContent className="p-8 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="md:flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white">{module.title}</h3>
                    <p className="text-apple-gray-300 mb-4 md:mb-0">{module.description}</p>
                  </div>
                  <div className="md:flex-1 md:text-right">
                    <p className="text-apple-blue-500 font-medium">{module.benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="apple-card text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              🎯 By Week 6, You'll Walk Away With:
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4 text-lg text-apple-gray-300">
                <p>• A fully functional MVP</p>
                <p>• A battle-ready go-to-market plan</p>
              </div>
              <div className="space-y-4 text-lg text-apple-gray-300">
                <p>• A creator community you can build with</p>
                <p>• Proof you can launch—again and again</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            💳 Course Plans
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="apple-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Do-It-Yourself</h3>
                <div className="text-3xl font-bold mb-6 text-apple-blue-500">
                  ₦200,000 / $499
                </div>
                <ul className="space-y-3 text-apple-gray-300 mb-8">
                  <li>• Full access to 6-week course</li>
                  <li>• Lifetime access to video lessons</li>
                  <li>• Weekly templates and build guides</li>
                  <li>• Access to private founder community</li>
                  <li>• AI tool tutorials (Bolt.new, Replit, etc.)</li>
                </ul>
                <p className="text-sm text-apple-gray-400 mb-6">
                  Perfect if you love to learn solo and build at your pace.
                </p>
                <button className="apple-button w-full">
                  Choose DIY
                </button>
              </CardContent>
            </Card>

            <Card className="apple-card border-apple-blue-500/50 apple-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Collaborate</h3>
                <div className="text-3xl font-bold mb-6 text-apple-blue-500">
                  ₦350,000 / $749
                </div>
                <ul className="space-y-3 text-apple-gray-300 mb-8">
                  <li>• Everything in DIY <strong>plus:</strong></li>
                  <li>• Weekly live check-ins with Ifunanya</li>
                  <li>• Personalized MVP feedback</li>
                  <li>• One collaborative co-building session</li>
                  <li>• Access to private Slack for 1-on-1 support</li>
                </ul>
                <p className="text-sm text-apple-gray-400 mb-6">
                  Ideal if you want expert guidance and accountability.
                </p>
                <button className="apple-button w-full">
                  Choose Collaborate
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials - Matching Image 1 Layout */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-16 leading-tight">
            50+ founders trust me to<br />
            help them launch their apps.
          </h2>
          
          {/* Star Rating */}
          <div className="flex justify-center items-center space-x-1 mb-12">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Main Testimonial */}
          <div className="mb-12">
            <blockquote className="text-xl lg:text-2xl text-apple-gray-300 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
              "I didn't realize how much I was leaving on the table until I learned how to properly position myself. Huge difference!"
            </blockquote>
            
            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-apple-gray-600 border-2 border-apple-gray-500"></div>
              <div className="text-left">
                <p className="text-white font-medium">Chidera O.</p>
                <p className="text-apple-gray-400 text-sm">First-Time Founder</p>
              </div>
            </div>
          </div>

          {/* Avatar Grid */}
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="flex space-x-2">
              <div className="w-10 h-10 rounded-full bg-apple-gray-600 border border-apple-gray-500"></div>
              <div className="w-10 h-10 rounded-full bg-apple-gray-600 border border-apple-gray-500"></div>
              <div className="w-10 h-10 rounded-full bg-apple-gray-600 border border-apple-gray-500"></div>
              <div className="w-10 h-10 rounded-full bg-apple-gray-600 border border-apple-gray-500"></div>
              <div className="w-10 h-10 rounded-full bg-apple-gray-600 border border-apple-gray-500"></div>
              <div className="w-10 h-10 rounded-full bg-apple-gray-600 border border-apple-gray-500"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-apple-gray-700 border border-apple-gray-600 flex items-center justify-center">
              <ArrowDown className="w-4 h-4 text-apple-gray-400 rotate-180" />
            </div>
            <div className="w-10 h-10 rounded-full bg-apple-gray-600 border border-apple-gray-500"></div>
          </div>

          {/* Second Row of Avatars */}
          <div className="flex justify-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-apple-gray-600 border border-apple-gray-500"></div>
            <div className="w-10 h-10 rounded-full bg-apple-gray-600 border border-apple-gray-500"></div>
            <div className="w-10 h-10 rounded-full bg-apple-gray-600 border border-apple-gray-500"></div>
            <div className="w-10 h-10 rounded-full bg-apple-gray-600 border border-apple-gray-500"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="apple-card text-center apple-glow">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              👇 Ready to Launch <em>Your</em> App?
            </h2>
            <p className="text-lg text-apple-gray-300 mb-4">
              Your idea deserves to live outside your head.
            </p>
            <p className="text-lg text-apple-gray-300 mb-8">
              Join <strong>Off-Record Academy</strong> and bring it to life—faster, smarter, and on your own terms.
            </p>
            <p className="text-xl font-semibold text-apple-blue-500 mb-8">
              🚀 Limited spots. Enroll now before it fills up.
            </p>
            <button className="apple-button text-xl px-12 py-6">
              👉 Join the Academy
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-apple-gray-800">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-apple-gray-500">
            © 2024 Off-Record Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
