
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

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

      {/* Instructor Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="apple-card text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              🧠 Meet Your Instructor
            </h2>
            <h3 className="text-2xl font-semibold mb-8 text-apple-blue-500">
              Ifunanya "KreativeJosh" Onwughalu
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4 text-apple-gray-300">
                <p>• 2x founder.</p>
                <p>• Raised funding to build B2B lending infra in Africa (EnvoyX).</p>
                <p>• UI/UX, frontend, product strategy expert.</p>
              </div>
              <div className="space-y-4 text-apple-gray-300">
                <p>• Competed in the World's Largest Hackathon (Bolt.new).</p>
                <p>• Mentor to founders at Techstars Startup Weekend & Designlab.</p>
                <p>• Builder of real apps using Bolt.new, Lovable.dev, Replit, Cursor.</p>
              </div>
            </div>
            <p className="text-xl font-semibold text-white mt-8">
              Ifunanya doesn't just teach—<strong>she ships</strong>.
            </p>
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

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            🙌 What Others Are Saying
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="apple-card">
                <CardContent className="p-8">
                  <blockquote className="text-apple-gray-300 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-apple-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
