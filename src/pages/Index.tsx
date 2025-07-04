import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowDown, Star, Zap, Shield, Users, Rocket, Target, BookOpen } from "lucide-react";

const Index = () => {
  const features = [
    {
      title: "Save Big",
      icon: <Zap className="w-8 h-8 text-white" />,
      description: "No need for a dev team. Use AI no-code tools like Bolt.new, Lovable.dev, and Replit to build fast and smart."
    },
    {
      title: "Move Fast",
      icon: <Rocket className="w-8 h-8 text-white" />,
      description: "Go from idea to prototype in days. Validate before you waste time and money."
    },
    {
      title: "Build Secure",
      icon: <Shield className="w-8 h-8 text-white" />,
      description: "Learn to build growth-ready apps that don't fall apart or get hacked."
    },
    {
      title: "Build with Others",
      icon: <Users className="w-8 h-8 text-white" />,
      description: "Join a founder-friendly, fluff-free community of dreamers and doers."
    },
    {
      title: "Launch Smart",
      icon: <Target className="w-8 h-8 text-white" />,
      description: "Map your go-to-market strategy + create content with AI to reach real users."
    },
    {
      title: "Scale Right",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      description: "Build foundations that grow with you—no technical debt, no shortcuts."
    }
  ];

  const modules = [
    {
      title: "Ideation Station",
      description: "Use AI tools to validate ideas before wasting time.",
      benefit: "Build what people actually want.",
      chapter: "CHAPTER 1",
      videos: "12 VIDEOS",
      hours: "8 HOURS"
    },
    {
      title: "Build Like a Pro",
      description: "Design and build functional apps with no-code tools.",
      benefit: "Launch clean, smart products—fast.",
      chapter: "CHAPTER 2", 
      videos: "18 VIDEOS",
      hours: "12 HOURS"
    },
    {
      title: "Fort Knox Your App",
      description: "Prompt AI to build secure, reliable apps that scale.",
      benefit: "Avoid the \"Oops we got hacked\" story.",
      chapter: "CHAPTER 3",
      videos: "15 VIDEOS", 
      hours: "10 HOURS"
    },
    {
      title: "Launch to the Stars",
      description: "Map your go-to-market strategy + create content with AI.",
      benefit: "Get real users, test, and grow.",
      chapter: "CHAPTER 4",
      videos: "20 VIDEOS",
      hours: "14 HOURS"
    }
  ];

  const faqItems = [
    {
      question: "What types of apps can I build with no-code tools?",
      answer: "You can build web applications, SaaS products, marketplaces, social platforms, and more using AI-powered no-code tools like Bolt.new, Lovable.dev, and Replit."
    },
    {
      question: "How does the mentorship feature work?",
      answer: "In the Collaborate plan, you get weekly live check-ins with Ifunanya, personalized MVP feedback, and access to private Slack for 1-on-1 support throughout your journey."
    },
    {
      question: "What AI tools are covered in the courses?",
      answer: "We cover Bolt.new, Lovable.dev, Replit, Cursor.com, V0, and other cutting-edge AI development tools to help you build without traditional coding."
    },
    {
      question: "Do I need prior experience to join these courses?",
      answer: "No prior coding experience required! This course is designed for founders and entrepreneurs who want to build their ideas without learning traditional programming."
    },
    {
      question: "Can I access course materials at any time?",
      answer: "Yes! You get lifetime access to all video lessons, templates, and build guides. Learn at your own pace and revisit materials whenever needed."
    },
    {
      question: "Will I get a certificate after completing the course?",
      answer: "Yes, you'll receive a completion certificate and join our exclusive founder community where you can continue building and collaborating."
    },
    {
      question: "Is there support outside of the live sessions?",
      answer: "Absolutely! DIY plan includes access to our private founder community, while Collaborate plan adds private Slack access for direct support."
    },
    {
      question: "Are there any resources to help build a portfolio?",
      answer: "Yes! You'll build a fully functional MVP during the course, plus get templates and guides to showcase your work to potential users and investors."
    },
    {
      question: "Can I get a refund if I'm not satisfied with the course?",
      answer: "We stand behind our course quality. Contact us within 14 days if you're not satisfied, and we'll work with you to make it right."
    },
    {
      question: "How often are new lessons or updates added?",
      answer: "We regularly update course content to reflect the latest AI tools and no-code developments. All updates are included with your lifetime access."
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

      {/* Problem Section - Updated to match image 1 */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Discover <span className="text-orange-400">the art of</span><br />
              <span className="text-orange-400">no-code development</span> with us
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content Card */}
            <div className="bg-white rounded-3xl p-12 text-black">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  At Off-Record Academy, we offer comprehensive no-code development courses designed for all major AI tools – from Bolt.new to Lovable.dev to Replit. Master the skills to create stunning applications, regardless of the tools you use.
                </p>
                
                <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
                  JOIN NOW
                </button>
              </div>
            </div>

            {/* Right Side - Founder Section */}
            <div className="space-y-6">
              <div className="text-sm text-apple-gray-400 uppercase tracking-wider">FOUNDER</div>
              
              {/* Profile Image Placeholder */}
              <div className="w-full h-96 bg-gradient-to-br from-apple-gray-700 to-apple-gray-800 rounded-2xl overflow-hidden mb-6">
                <div className="w-full h-full bg-apple-gray-600 flex items-center justify-center text-apple-gray-400">
                  <span className="text-lg">Founder Photo</span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-apple-gray-300 leading-relaxed">
                "Building apps isn't just technical, it's creative. Our courses empower you to tell impactful stories through any no-code platform."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Benefits */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-sm text-apple-gray-400 uppercase tracking-wider mb-4">Benefits</div>
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-white leading-tight">
              Subscription benefits
            </h2>
            <p className="text-lg text-apple-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore the Advantages of Subscribing. Elevate Your Experience<br />
              with Exclusive Benefits and Perks!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="apple-card group cursor-pointer border-apple-gray-800 bg-apple-gray-900/50">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-apple-gray-300 leading-relaxed text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
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

      {/* Curriculum Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-sm text-apple-gray-400 uppercase tracking-wider mb-4">Curriculum</div>
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-white leading-tight">
              Complete no-code development<br />
              curriculum to <span className="text-orange-400">build skills</span> and<br />
              <span className="text-orange-400">launch your career</span>
            </h2>
          </div>

          <div className="space-y-8">
            {modules.map((module, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center py-8 border-b border-apple-gray-800 last:border-b-0">
                <div className="space-y-4">
                  <div className="text-sm text-apple-gray-400 uppercase tracking-wider">
                    {module.chapter} | {module.videos} | {module.hours}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-light text-white mb-4">
                    {module.title}
                  </h3>
                  <p className="text-apple-gray-300 leading-relaxed">
                    {module.description}
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="w-80 h-48 bg-gradient-to-br from-apple-gray-800 to-apple-gray-900 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-apple-gray-700 flex items-center justify-center text-apple-gray-400">
                      <span className="text-sm">Course Preview {index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Does It Work Section */}
      <section className="px-6 py-20 bg-black">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-16">
            <h3 className="text-lg text-apple-gray-400 mb-8">how does it work?</h3>
            <h2 className="text-4xl lg:text-6xl font-light text-white mb-8 leading-tight">
              every week, we have<br />
              1 lecture, 1 talk and<br />
              1 weekly update.
            </h2>
            <p className="text-lg text-apple-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              you're in control of your journey. choose your project, build with purpose, and ship 
              something lovable. we'll be alongside you with guidance, feedback, and a supportive 
              community of builders making progress together.
            </p>
            <div className="mb-16">
              <span className="text-apple-gray-400">have questions? </span>
              <a href="#" className="text-white underline">explore our faqs</a>
            </div>
          </div>

          {/* Weekly Timeline */}
          <div className="flex justify-center items-center space-x-8 lg:space-x-16">
            <div className="text-center">
              <div className="text-sm text-apple-gray-400 mb-2">week 1</div>
              <div className="text-xl text-white font-light">ideate</div>
              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-4"></div>
            </div>
            <div className="text-center">
              <div className="text-sm text-apple-gray-400 mb-2">week 2</div>
              <div className="text-xl text-white font-light">build</div>
              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-4"></div>
            </div>
            <div className="text-center">
              <div className="text-sm text-apple-gray-400 mb-2">week 3</div>
              <div className="text-xl text-white font-light">feedback</div>
              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-4"></div>
            </div>
            <div className="text-center">
              <div className="text-sm text-apple-gray-400 mb-2">week 4</div>
              <div className="text-xl text-white font-light">iterate</div>
              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-4"></div>
            </div>
            <div className="text-center">
              <div className="text-sm text-apple-gray-400 mb-2">week 5</div>
              <div className="text-xl text-white font-light">launch</div>
              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-4"></div>
            </div>
            <div className="text-center">
              <div className="text-sm text-apple-gray-400 mb-2">week 6</div>
              <div className="text-xl text-white font-light">showcase</div>
              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-4"></div>
            </div>
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

      {/* Pricing Section - Replacing CTA */}
      <section className="px-6 py-20 bg-black">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">
              Course <span className="text-orange-400">Fee</span>
            </h2>
            <p className="text-lg text-apple-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your learning style and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* DIY Plan */}
            <div className="bg-white rounded-3xl p-8 text-black relative">
              <div className="absolute top-8 right-8">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Do-It-Yourself</h3>
              <div className="text-4xl font-bold mb-6">
                ₦200,000
                <span className="text-lg font-normal text-gray-600 ml-2">/ $499</span>
              </div>
              
              <ul className="space-y-4 mb-8 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Full access to 6-week course
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Lifetime access to video lessons
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Weekly templates and build guides
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Access to private founder community
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  AI tool tutorials (Bolt.new, Replit, etc.)
                </li>
              </ul>
              
              <p className="text-sm text-gray-600 mb-8 italic">
                Perfect if you love to learn solo and build at your pace.
              </p>
              
              <button className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Choose DIY
              </button>
            </div>

            {/* Collaborate Plan */}
            <div className="bg-white rounded-3xl p-8 text-black relative border-4 border-orange-400">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-orange-400 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  RECOMMENDED
                </div>
              </div>
              
              <div className="absolute top-8 right-8">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Collaborate</h3>
              <div className="text-4xl font-bold mb-6">
                ₦350,000
                <span className="text-lg font-normal text-gray-600 ml-2">/ $749</span>
              </div>
              
              <ul className="space-y-4 mb-8 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Everything in DIY <strong>plus:</strong>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Weekly live check-ins with Ifunanya
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Personalized MVP feedback
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  One collaborative co-building session
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Access to private Slack for 1-on-1 support
                </li>
              </ul>
              
              <p className="text-sm text-gray-600 mb-8 italic">
                Ideal if you want expert guidance and accountability.
              </p>
              
              <button className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Choose Collaborate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* FAQ Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="text-sm text-apple-gray-400 uppercase tracking-wider mb-4">FAQ</div>
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              Frequently asked <span className="text-orange-400">questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.slice(0, 5).map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-apple-gray-800">
                  <AccordionTrigger className="text-left text-white hover:text-apple-gray-300 hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-apple-gray-300 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.slice(5).map((item, index) => (
                <AccordionItem key={index + 5} value={`item-${index + 5}`} className="border-b border-apple-gray-800">
                  <AccordionTrigger className="text-left text-white hover:text-apple-gray-300 hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-apple-gray-300 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section - Updated to match the image design */}
      <section className="px-6 py-20 bg-black">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl lg:text-6xl font-light text-white mb-6 leading-tight">
            stop stalling. start shipping.
          </h2>
          <p className="text-lg text-apple-gray-400 mb-12 max-w-3xl mx-auto">
            applications for season 1 are now open. space is limited, so apply early.
          </p>
          <button className="border border-apple-gray-600 text-white px-8 py-3 rounded-md hover:bg-apple-gray-800 transition-colors">
            apply now →
          </button>
        </div>
      </section>

      {/* Footer - Updated to match image 2 */}
      <footer className="relative overflow-hidden bg-background border-t border-apple-gray-800">
        {/* Scrolling Text Animation */}
        <div className="py-12">
          <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite]">
            <div className="flex items-center space-x-8 text-6xl lg:text-8xl font-bold text-white">
              <span className="flex items-center space-x-8">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span>Get started</span>
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span>Get started</span>
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span>Get started</span>
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span>Get started</span>
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span>Get started</span>
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span>Get started</span>
              </span>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="px-6 py-8 border-t border-apple-gray-800">
          <div className="mx-auto max-w-7xl flex justify-between items-center">
            <div className="flex space-x-8 text-sm text-apple-gray-400">
              <a href="#" className="hover:text-white transition-colors">Twitter / X</a>
              <a href="#" className="hover:text-white transition-colors">hello@offrecord.com</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                Get it for $499
              </button>
              <div className="text-xs text-apple-gray-500">
                Made in Lovable
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;