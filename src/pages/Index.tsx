import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Menu, 
  X, 
  ChevronRight,
  ArrowUpRight,
  Play,
  Users,
  BarChart3,
  Shield,
  Zap,
  MessageSquare,
  AlertTriangle
} from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function that will trigger an unhandled promise rejection
  const triggerUnhandledRejection = () => {
    // This creates a promise that will be rejected but not caught
    new Promise((resolve, reject) => {
      // Reject the promise with an error
      reject(new Error("This is an intentional unhandled promise rejection for testing"));
    });
    
    // We're not using .catch() here intentionally to create the unhandled rejection
    console.log("Triggered unhandled promise rejection");
  };

  // Handle scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Testimonial auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Intuitive Dashboard",
      description: "Get a bird's-eye view of your progress with our easy-to-use dashboard.",
      icon: <BarChart3 className="h-6 w-6 text-violet-600" />
    },
    {
      title: "Smart Automation",
      description: "Save time with intelligent automation that handles repetitive tasks.",
      icon: <Zap className="h-6 w-6 text-violet-600" />
    },
    {
      title: "Real-time Collaboration",
      description: "Work seamlessly with your team in real-time, no matter where they are.",
      icon: <Users className="h-6 w-6 text-violet-600" />
    },
    {
      title: "Advanced Analytics",
      description: "Make data-driven decisions with comprehensive analytics and insights.",
      icon: <BarChart3 className="h-6 w-6 text-violet-600" />
    },
    {
      title: "Secure Storage",
      description: "Keep your data safe with enterprise-grade security and encryption.",
      icon: <Shield className="h-6 w-6 text-violet-600" />
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our round-the-clock support team.",
      icon: <MessageSquare className="h-6 w-6 text-violet-600" />
    }
  ];

  const testimonials = [
    {
      quote: "This platform has completely transformed how our team works. We've seen a 40% increase in productivity since we started using it.",
      author: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      company: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    },
    {
      quote: "The intuitive interface and powerful features make this a must-have tool for any serious business. Best investment we've made this year.",
      author: "Michael Chen",
      role: "CEO, Innovate Inc",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      company: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
      quote: "Customer support is outstanding. Any time we've had an issue, the team has been quick to respond and resolve it.",
      author: "Emily Rodriguez",
      role: "Operations Director, GrowFast",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      company: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "24-hour support response time",
        "1GB storage"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      description: "Ideal for growing teams and businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "4-hour support response time",
        "10GB storage",
        "Team collaboration tools",
        "Custom integrations"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For large organizations with complex needs",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "1-hour support response time",
        "Unlimited storage",
        "Advanced security features",
        "Custom reporting"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gradient">Horizon</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-700 hover:text-violet-600 transition-colors text-sm font-medium">Features</a>
              <a href="#testimonials" className="text-slate-700 hover:text-violet-600 transition-colors text-sm font-medium">Testimonials</a>
              <a href="/pricing" className="text-slate-700 hover:text-violet-600 transition-colors text-sm font-medium">Pricing</a>
              <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white">
                Log in
              </Button>
              <Button className="bg-violet-600 hover:bg-violet-700">Get Started</Button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg absolute left-4 right-4 z-50">
              <div className="flex flex-col space-y-4 px-4">
                <a href="#features" className="text-slate-700 hover:text-violet-600 transition-colors py-2 text-sm font-medium">Features</a>
                <a href="#testimonials" className="text-slate-700 hover:text-violet-600 transition-colors py-2 text-sm font-medium">Testimonials</a>
                <a href="/pricing" className="text-slate-700 hover:text-violet-600 transition-colors py-2 text-sm font-medium">Pricing</a>
                <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white w-full">
                  Log in
                </Button>
                <Button className="bg-violet-600 hover:bg-violet-700 w-full">Get Started</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 bg-gradient-to-b from-violet-100/40 to-transparent w-1/3 h-1/2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-blue-100/40 to-transparent w-1/3 h-1/2 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-block px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-medium mb-6">
                New Features Available
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Elevate Your <span className="text-gradient">Digital Experience</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg">
                Transform the way you work with our intuitive platform. Streamline workflows, boost productivity, and achieve more with less effort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-violet-600 hover:bg-violet-700 group">
                  Get Started Free
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 flex items-center gap-2">
                  <Play className="h-4 w-4 text-violet-600" />
                  Watch Demo
                </Button>
                
                {/* Test Button for Unhandled Promise Rejection */}
                <Button 
                  variant="destructive" 
                  className="flex items-center gap-2" 
                  onClick={triggerUnhandledRejection}
                >
                  <AlertTriangle className="h-4 w-4" />
                  Test Error
                </Button>
              </div>
              
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${20 + i}.jpg`}
                      alt={`User ${i}`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600">Trusted by 10,000+ customers</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-violet-100 rounded-full blur-3xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-70"></div>
              
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-slate-100 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Dashboard Preview" 
                  className="rounded-xl w-full object-cover"
                />
                
                {/* Floating stats card */}
                <div className="absolute -right-10 top-1/4 bg-white rounded-lg shadow-lg p-4 animate-float" style={{animationDelay: '0.5s'}}>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <BarChart3 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Conversion Rate</p>
                      <p className="text-lg font-bold text-green-600">+24.5%</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating users card */}
                <div className="absolute -left-10 bottom-1/4 bg-white rounded-lg shadow-lg p-4 animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center gap-3">
                    <div className="bg-violet-100 p-2 rounded-full">
                      <Users className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Active Users</p>
                      <p className="text-lg font-bold text-violet-600">10.2k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trusted by logos */}
          <div className="mt-20">
            <p className="text-center text-sm text-slate-500 mb-6">TRUSTED BY INDUSTRY LEADERS</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {['https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', 
                'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
                'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
                'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
                'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'].map((logo, index) => (
                <img 
                  key={index}
                  src={logo}
                  alt={`Company logo ${index}`}
                  className="h-6 md:h-8 opacity-60 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-100 to-white"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-medium mb-4">
              Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our platform provides all the tools you need to streamline your workflow and boost productivity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="bg-violet-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-violet-600 transition-colors">
                    <div className="group-hover:text-white transition-colors">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                  <div className="mt-4 flex items-center text-violet-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Feature highlight */}
          <div className="mt-24 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="inline-block px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-medium mb-4">
                  Advanced Analytics
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Make Data-Driven Decisions</h3>
                <p className="text-slate-600 mb-6">
                  Our powerful analytics dashboard gives you real-time insights into your performance metrics, helping you make informed decisions.
                </p>
                <ul className="space-y-3 mb-6">
                  {['Customizable dashboards', 'Real-time data visualization', 'Automated reporting', 'Predictive analytics'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-violet-600 hover:bg-violet-700 group">
                  Explore Analytics
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Analytics Dashboard" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-50 relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-slate-50"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-medium mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied customers
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-violet-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.13456 9H5.37877C5.17229 9 5 9.17229 5 9.37877V13.1346C5 13.341 5.17229 13.5133 5.37877 13.5133H7.18978C7.39626 13.5133 7.56855 13.6856 7.56855 13.8921V15.6213C7.56855 15.8278 7.39626 16 7.18978 16H5.37877C5.17229 16 5 15.8278 5 15.6213V13.8921" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.1346 9H14.3788C14.1723 9 14 9.17229 14 9.37877V13.1346C14 13.341 14.1723 13.5133 14.3788 13.5133H16.1898C16.3963 13.5133 16.5686 13.6856 16.5686 13.8921V15.6213C16.5686 15.8278 16.3963 16 16.1898 16H14.3788C14.1723 16 14 15.8278 14 15.6213V13.8921" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="mb-8 text-center">
                  <p className="text-xl md:text-2xl text-slate-700 italic mb-6">"{testimonials[activeTestimonial].quote}"</p>
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <img 
                    src={testimonials[activeTestimonial].avatar} 
                    alt={testimonials[activeTestimonial].author} 
                    className="h-16 w-16 rounded-full border-4 border-white shadow-md mb-4"
                  />
                  <h4 className="font-semibold text-slate-900 text-lg">{testimonials[activeTestimonial].author}</h4>
                  <p className="text-slate-600 mb-4">{testimonials[activeTestimonial].role}</p>
                  <img 
                    src={testimonials[activeTestimonial].company} 
                    alt="Company logo" 
                    className="h-6 opacity-70"
                  />
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full mx-1 ${activeTestimonial === index ? 'bg-violet-600' : 'bg-slate-300'}`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-white"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-medium mb-4">
              Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the plan that works best for you and your team
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`border-none ${plan.popular ? 'ring-2 ring-violet-600 shadow-xl' : 'shadow-lg'} relative hover:-translate-y-1 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-violet-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600">/month</span>
                  </div>
                  <p className="text-slate-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-violet-600 hover:bg-violet-700' : 'bg-slate-800 hover:bg-slate-900'}`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-2">Need a custom plan for your enterprise?</p>
            <a href="#" className="text-violet-600 font-medium hover:text-violet-700 inline-flex items-center">
              Contact our sales team
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          </svg>
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Workflow?</h2>
            <p className="text-lg text-violet-100 mb-8">
              Join thousands of satisfied customers who are already using our platform to boost their productivity
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 flex-1"
                />
                <Button className="bg-white text-violet-600 hover:bg-violet-100 h-12 whitespace-nowrap">
                  Get Started Free <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <p className="text-violet-200 text-sm mt-4">
                Free 14-day trial. No credit card required.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Active Users', value: '10,000+' },
                { label: 'Data Processed', value: '500TB+' },
                { label: 'Uptime', value: '99.99%' },
                { label: 'Customer Rating', value: '4.9/5' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-white text-2xl md:text-3xl font-bold">{stat.value}</p>
                  <p className="text-violet-200 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold text-white">Horizon</span>
              <p className="mt-2">© 2023 Horizon. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V15.6213C1.63 15.8278 1.458 16 1.251 16H-.749C-.957 16-1.13 15.8278-1.13 15.6213V13.8921C-1.13 13.6856-1.252 13.5133-1.459 13.5133H-.248C-.051 13.5133 0 13.341 0 13.1346 0 12.928 0.172 12.756 0.378 12.756h1.811c0.206 0 0.378 0.172 0.378 0.378 0 0.206-0.172 0.378-0.378 0.378H0.378v1.811c0 0.206 0.172 0.378 0.378 0.378 0.206 0 0.378-0.172 0.378-0.378v-1.455c2.782 0.605 3.369-1.343 3.369-1.343.454-1.158 1.11-1.466 1.11-1.466.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.522 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.482 8.482 0 01-2.19-5.705z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.522 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 01-3.655 5.715 8.468 8.468 0 01-3.341.684z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.522 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152-.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.482 8.482 0 01-2.19-5.705z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.522 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.482 8.482 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.522 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;