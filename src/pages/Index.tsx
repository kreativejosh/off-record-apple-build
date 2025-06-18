import React from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="text-center py-36">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 apple-text-gradient">
          Master AI Development
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          The only AI course you need to become an AI-first developer
        </p>
        <Button size="lg">Get Started</Button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="apple-card">
            <h3 className="text-2xl font-semibold mb-2">
              Learn AI Fundamentals
            </h3>
            <p className="text-muted-foreground">
              Understand the core concepts of AI and machine learning.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="apple-card">
            <h3 className="text-2xl font-semibold mb-2">
              Build Real-World Projects
            </h3>
            <p className="text-muted-foreground">
              Apply your knowledge by building practical AI applications.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="apple-card">
            <h3 className="text-2xl font-semibold mb-2">
              Get Mentorship from Experts
            </h3>
            <p className="text-muted-foreground">
              Learn from experienced AI professionals and get personalized
              guidance.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="apple-card">
            <h3 className="text-2xl font-semibold mb-2">
              Join a Thriving Community
            </h3>
            <p className="text-muted-foreground">
              Connect with like-minded developers and collaborate on AI
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 apple-text-gradient">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "What experience level is required?",
                answer: "Our course is designed for beginners to intermediate developers. No prior AI experience needed."
              },
              {
                question: "How long does the course take to complete?",
                answer: "The course can be completed in 8-12 weeks with 5-10 hours of study per week."
              },
              {
                question: "Do I get lifetime access?",
                answer: "Yes, you get lifetime access to all course materials and future updates."
              },
              {
                question: "Is there a money-back guarantee?",
                answer: "We offer a 30-day money-back guarantee if you're not satisfied with the course."
              },
              {
                question: "Can I get help if I'm stuck?",
                answer: "Yes, you'll have access to our community forum and weekly Q&A sessions with instructors."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Fee Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Course Fee
            </h2>
            <p className="text-xl text-muted-foreground">
              Invest in your future with our comprehensive AI development program
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg border">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-black mb-2">$497</div>
                <div className="text-gray-600 text-lg">One-time payment</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Lifetime access to all course materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Real-world project portfolio</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Expert mentorship and guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Community access</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">30-day money-back guarantee</span>
                </div>
              </div>
              
              <Button size="lg" className="w-full">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-gray-400">Plans &</span><br />
              <span className="text-black">Pricing</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* A La Carte Plan */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium">A La Carte</span>
                <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">
                  Fully booked until September 3rd
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">5 spots monthly.</h3>
              <p className="text-gray-600 mb-6">First come, first serve.</p>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">$6,000</span>
                <span className="text-gray-500">/mo</span>
              </div>
              
              <Button variant="default" size="lg" className="w-full mb-6">
                Reserve for Sep. →
              </Button>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Solid Bitcoin</span>
                <span className="text-xs text-gray-400 ml-auto">*Real new brand is absolutely fine.</span>
              </div>
              
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Full-service creative</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Async + Slack</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Monthly consulting call</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Updates every 2 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Simple monthly subscription</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Scales with your needs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>50 design hours per month</span>
                </div>
              </div>
            </div>

            {/* Prix Fixe Plan */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium">Prix Fixe</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                  Limited availability
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">For brands ready to go</h3>
              <p className="text-gray-300 mb-6">zero to one & beyond.</p>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">$15,000</span>
                <span className="text-gray-400">/mo</span>
              </div>
              
              <Button variant="outline" size="lg" className="w-full mb-6 bg-transparent border-gray-600 text-white hover:bg-gray-800">
                Book an Intro Call
              </Button>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                <span className="text-sm">Ashton Wilson, CCO</span>
                <span className="text-xs text-gray-400 ml-auto">"Your top-shelf design and brand."</span>
              </div>
              
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Fully managed project</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Access our entire team</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Creative Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Updates every 2 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Weekly Consulting Call</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Everything included</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sprints Section */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">Sprints</span>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                2 week turn-around
              </span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-4xl font-bold mb-2">
                  <span className="text-gray-400">Great for those who</span><br />
                  <span className="text-black">want quality + speed.</span>
                </h3>
              </div>
              
              <div className="text-right">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold">$10,000</span>
                  <span className="text-gray-500">one-time fee</span>
                </div>
                <Button variant="default" size="lg">
                  Reserve for September →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have already mastered AI development and are building the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Start Learning Today
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              View Course Curriculum
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">5,000+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">95%</div>
              <div className="text-gray-600">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            stop stalling. start shipping.
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            applications for season 1 are now open. space is limited, so apply early.
          </p>
          <Button variant="cta" size="lg" className="text-lg">
            apply now →
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 overflow-hidden">
        <div className="px-4">
          <div className="animate-scroll whitespace-nowrap text-6xl md:text-8xl font-bold text-gray-800 mb-8">
            Get started · Get started · Get started · Get started · Get started · Get started · Get started · Get started ·
          </div>
          
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Ready to transform your AI skills?</h3>
              <p className="text-gray-400">Join thousands of developers mastering AI development</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
