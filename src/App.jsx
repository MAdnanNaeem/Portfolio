import React, { useState, useEffect } from 'react'
import profileImage from './AdnanImage.jpeg'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Layout, 
  Smartphone, 
  Database,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Moon,
  Sun,
  ArrowUp
} from 'lucide-react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScrollTo = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    const homeSection = document.querySelector('#home')
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 backdrop-blur-md z-50 border-b transition-colors ${isDarkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className={`text-xl font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Adnan Naeem
            </a>
            <div className="flex items-center space-x-6">
              <a href="#about" onClick={(e) => smoothScrollTo(e, '#about')} className={`transition-colors hover:scale-110 transform ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>About</a>
              <a href="#skills" onClick={(e) => smoothScrollTo(e, '#skills')} className={`transition-colors hover:scale-110 transform ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Skills</a>
              <a href="#portfolio" onClick={(e) => smoothScrollTo(e, '#portfolio')} className={`transition-colors hover:scale-110 transform ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Portfolio</a>
              <a href="#services" onClick={(e) => smoothScrollTo(e, '#services')} className={`transition-colors hover:scale-110 transform ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Services</a>
              <a href="#contact" onClick={(e) => smoothScrollTo(e, '#contact')} className={`transition-colors hover:scale-110 transform ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Contact</a>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-all hover:scale-110 transform ${isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-colors ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-block mb-6">
              <img 
                src={profileImage} 
                alt="Adnan Naeem" 
                className="w-48 h-48 mx-auto rounded-full object-contain shadow-lg border-4 border-white bg-gray-200"
              />
            </div>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Available for Hire
            </div>
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Hi, I'm <span className="text-blue-600">Adnan Naeem</span>
            </h1>
            <p className={`text-xl sm:text-2xl mb-8 max-w-3xl mx-auto transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Professional Full-Stack Developer specializing in web development, creating modern and efficient solutions for clients worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                onClick={(e) => smoothScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:scale-105 transform"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://www.upwork.com/freelancers/~018b51cc99d6a5ca68" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-8 py-3 border-2 rounded-lg font-medium transition-all hover:scale-105 transform ${isDarkMode ? 'border-gray-600 text-gray-300 hover:border-gray-500' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Upwork Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl sm:text-4xl font-bold mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                About Me
              </h2>
              <p className={`text-lg mb-6 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a passionate full-stack developer with 4 years of professional development experience working with 10+ clients globally. 
                I specialize in building scalable web applications, multi-tenant SaaS products, and modern digital solutions 
                that help businesses grow and succeed.
              </p>
              <p className={`text-lg mb-6 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                My approach combines technical excellence with clear communication, ensuring that 
                every project not only meets but exceeds expectations. I believe in building 
                long-term relationships with clients based on trust and quality work.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/MAdnanNaeem" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg transition-all hover:scale-110 transform ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/madnannaeem?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg transition-all hover:scale-110 transform ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=madnannaeem55@gmail.com&tf=cm" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg transition-all hover:scale-110 transform ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  <Mail className="h-6 w-6" />
                </a>
                <a href="https://wa.me/923008826610" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg transition-all hover:scale-110 transform ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Work With Me?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span>100% Client Satisfaction Rate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Fast Response Time & Clear Communication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span>High-Quality, Clean Code</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span>On-Time Delivery Every Time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              My Skills
            </h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Technologies and tools I use to deliver exceptional results
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`p-6 rounded-xl transition-all hover:scale-105 transform ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-md'}`}>
              <Code2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className={`text-xl font-semibold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Frontend Development</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>React, Angular, HTML, CSS, Bootstrap, JavaScript, TypeScript</p>
            </div>
            <div className={`p-6 rounded-xl transition-all hover:scale-105 transform ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-md'}`}>
              <Layout className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className={`text-xl font-semibold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Backend Development</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>.NET Core, Node.js, Laravel, PHP, REST APIs, SOAP APIs</p>
            </div>
            <div className={`p-6 rounded-xl transition-all hover:scale-105 transform ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-md'}`}>
              <Database className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className={`text-xl font-semibold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Database</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>SQL Server, MySQL, MongoDB, PostgreSQL</p>
            </div>
            <div className={`p-6 rounded-xl transition-all hover:scale-105 transform ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-md'}`}>
              <Layout className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className={`text-xl font-semibold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>API Integration</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>REST APIs, SOAP APIs, Third-party Integrations, Postman</p>
            </div>
            <div className={`p-6 rounded-xl transition-all hover:scale-105 transform ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-md'}`}>
              <Layout className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className={`text-xl font-semibold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>DevOps & Cloud</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Azure CI/CD, AWS, Docker, Git, Version Control</p>
            </div>
            <div className={`p-6 rounded-xl transition-all hover:scale-105 transform ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-md'}`}>
              <Layout className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className={`text-xl font-semibold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Project Management</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Jira, Agile Methodologies, Team Collaboration</p>
            </div>
            <div className={`p-6 rounded-xl transition-all hover:scale-105 transform ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-md'}`}>
              <Layout className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className={`text-xl font-semibold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Specialized Solutions</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Multi-tenant Applications, SaaS Products, Cloud Architecture</p>
            </div>
            <div className={`p-6 rounded-xl transition-all hover:scale-105 transform ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:shadow-md'}`}>
              <Code2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className={`text-xl font-semibold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Web Development</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Full-Stack Web Apps, E-commerce, Custom Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              My Portfolio
            </h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Featured projects showcasing my expertise and technical skills
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: Stripe and PayPal Integration */}
            <div className={`rounded-xl shadow-lg overflow-hidden transition-all hover:scale-105 transform ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="h-56 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="text-center text-white relative z-10 px-4">
                  <Database className="h-20 w-20 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold">Payment Integration</h3>
                  <p className="text-sm opacity-90 mt-2">E-commerce Payment Solution</p>
                </div>
              </div>
              <div className="p-6">
                {/* Project Image */}
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop" 
                    alt="Stripe PayPal Integration Dashboard" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Stripe & PayPal Integration
                </h3>
                <p className={`mb-4 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Implemented secure payment gateway integration using Stripe and PayPal APIs for an e-commerce platform. Built a robust payment processing system with support for multiple payment methods, subscription billing, and real-time transaction monitoring.
                </p>
                
                <div className={`mb-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-600' : 'bg-gray-50'}`}>
                  <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Work Completed:</h4>
                  <ul className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                      Integrated Stripe API for credit card payments with 3D Secure authentication
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                      Implemented PayPal Express Checkout for seamless user experience
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                      Built subscription billing system with recurring payment management
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                      Created real-time transaction monitoring dashboard with analytics
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                      Implemented webhook handling for payment status updates
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Stripe API</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">PayPal API</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">.NET Core</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">SQL Server</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span className="font-semibold">Key Features:</span>
                    <span className="ml-2">Multi-payment support, Secure transactions, Real-time monitoring</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: .NET Core and Angular New Feature */}
            <div className={`rounded-xl shadow-lg overflow-hidden transition-all hover:scale-105 transform ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="h-56 bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="text-center text-white relative z-10 px-4">
                  <Code2 className="h-20 w-20 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold">Enterprise Application</h3>
                  <p className="text-sm opacity-90 mt-2">Feature Enhancement Project</p>
                </div>
              </div>
              <div className="p-6">
                {/* Project Image */}
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" 
                    alt=".NET Core Angular Enterprise Application" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  .NET Core & Angular New Features
                </h3>
                <p className={`mb-4 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Developed and deployed new features for an existing enterprise application using .NET Core backend and Angular frontend. Enhanced system functionality with improved performance, user experience, and business logic implementation.
                </p>
                
                <div className={`mb-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-600' : 'bg-gray-50'}`}>
                  <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Work Completed:</h4>
                  <ul className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                      Developed advanced reporting module with data visualization charts
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                      Implemented role-based access control (RBAC) for enhanced security
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                      Created real-time notification system using SignalR
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                      Optimized database queries reducing load time by 40%
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                      Built responsive Angular components with improved UX/UI
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">.NET Core</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Angular</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">TypeScript</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Entity Framework</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">REST API</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span className="font-semibold">Key Features:</span>
                    <span className="ml-2">Feature enhancement, Performance optimization, UX improvements</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: Sticky Tasks - Laravel & React */}
            <div className={`rounded-xl shadow-lg overflow-hidden transition-all hover:scale-105 transform ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="h-56 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="text-center text-white relative z-10 px-4">
                  <Layout className="h-20 w-20 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold">Task Management</h3>
                  <p className="text-sm opacity-90 mt-2">Productivity Solution</p>
                </div>
              </div>
              <div className="p-6">
                {/* Project Image */}
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop" 
                    alt="Sticky Tasks Task Management Dashboard" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Sticky Tasks - Laravel & React
                </h3>
                <p className={`mb-4 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Sticky Tasks is a comprehensive web portal designed to streamline task management, time tracking, and cardboard management processes with seamless integration of React on the front-end and Laravel on the back-end.
                </p>
                
                <div className={`mb-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-600' : 'bg-gray-50'}`}>
                  <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Work Completed:</h4>
                  <ul className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                      Built comprehensive task management system with drag-and-drop functionality
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                      Implemented time tracking features with automated reporting
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                      Created cardboard management for visual project organization
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                      Developed RESTful APIs using Laravel for backend operations
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                      Built responsive React frontend with real-time updates
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Laravel</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">PHP</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">MySQL</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">REST API</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span className="font-semibold">Key Features:</span>
                    <span className="ml-2">Task management, Time tracking, Cardboard organization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Services I Offer
            </h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`border rounded-xl p-8 transition-all hover:scale-105 transform ${isDarkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-200 hover:border-blue-300'}`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-100'}`}>
                <Code2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Web Development
              </h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                Custom websites and web applications built with modern technologies 
                and best practices for performance and scalability.
              </p>
            </div>
            <div className={`border rounded-xl p-8 transition-all hover:scale-105 transform ${isDarkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-200 hover:border-blue-300'}`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-100'}`}>
                <Layout className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                SaaS Products
              </h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                Multi-tenant SaaS applications with scalable architecture, 
                user management, and subscription billing systems.
              </p>
            </div>
            <div className={`border rounded-xl p-8 transition-all hover:scale-105 transform ${isDarkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-200 hover:border-blue-300'}`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-100'}`}>
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                API Development
              </h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                Robust and secure APIs that power your applications with seamless 
                data integration and third-party service connections.
              </p>
            </div>
            <div className={`border rounded-xl p-8 transition-all hover:scale-105 transform ${isDarkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-200 hover:border-blue-300'}`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-100'}`}>
                <Smartphone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Mobile Development
              </h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                Cross-platform mobile applications using React Native and Flutter 
                for iOS and Android devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Get In Touch
            </h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Ready to start your project? Get in touch through any platform or send me a direct message
            </p>
          </div>
          <div className={`rounded-2xl shadow-sm p-8 sm:p-12 transition-colors ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-xl font-semibold mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a 
                    href="https://mail.google.com/mail/u/0/?fs=1&to=madnannaeem55@gmail.com&tf=cm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center transition-colors hover:scale-105 transform ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    madnannaeem55@gmail.com
                  </a>
                  <a 
                    href="https://wa.me/923008826610" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center transition-colors hover:scale-105 transform ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    <MessageCircle className="h-5 w-5 mr-3" />
                    WhatsApp: +92 300 8826610
                  </a>
                  <a 
                    href="https://www.upwork.com/freelancers/~018b51cc99d6a5ca68" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center transition-colors hover:scale-105 transform ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    <ExternalLink className="h-5 w-5 mr-3" />
                    Upwork Profile
                  </a>
                  <a 
                    href="https://github.com/MAdnanNaeem" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center transition-colors hover:scale-105 transform ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    <Github className="h-5 w-5 mr-3" />
                    GitHub Profile
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/madnannaeem?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center transition-colors hover:scale-105 transform ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    <Linkedin className="h-5 w-5 mr-3" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Availability
                </h3>
                <div className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>Available for new projects</p>
                  <p>Flexible timezone - work with clients globally</p>
                  <p className="text-sm mt-4">
                    Quick response time guaranteed
                  </p>
                </div>
              </div>
            </div>
            <div className={`mt-8 pt-8 border-t text-center ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.upwork.com/freelancers/~018b51cc99d6a5ca68" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:scale-105 transform"
                >
                  Hire Me on Upwork
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="https://wa.me/923008826610" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all hover:scale-105 transform"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
              <p className={`text-sm mt-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Also available via direct email</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 lg:px-8 transition-colors ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className={`text-center sm:text-left mb-4 sm:mb-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>
              © 2024 Adnan Naeem. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/MAdnanNaeem" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-110 transform">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/madnannaeem?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-110 transform">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=madnannaeem55@gmail.com&tf=cm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-110 transform">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://wa.me/923008826610" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-110 transform">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg transition-all hover:scale-110 transform z-50 ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}

export default App
