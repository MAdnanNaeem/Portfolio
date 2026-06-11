import React from 'react'
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
  ArrowRight
} from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-xl font-bold text-gray-900">
              Adnan Naeem
            </a>
            <div className="flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Available for Hire on Upwork
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Adnan Naeem</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional Freelancer specializing in web development, creating modern and efficient solutions for clients worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://www.upwork.com/freelancers/~018b51cc99d6a5ca68" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Upwork Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate freelancer with expertise in web development and digital solutions. 
                With years of experience working on Upwork, I've helped numerous clients bring their 
                ideas to life through clean, efficient, and scalable code.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                My approach combines technical excellence with clear communication, ensuring that 
                every project not only meets but exceeds expectations. I believe in building 
                long-term relationships with clients based on trust and quality work.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/MAdnanNaeem" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Github className="h-6 w-6 text-gray-700" />
                </a>
                <a href="https://www.linkedin.com/in/madnannaeem?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Linkedin className="h-6 w-6 text-gray-700" />
                </a>
                <a href="mailto:madnannaeem55@gmail.com" className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Mail className="h-6 w-6 text-gray-700" />
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Work With Me?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span>100% Client Satisfaction Rate on Upwork</span>
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
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              My Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to deliver exceptional results
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Code2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Frontend Development</h3>
              <p className="text-gray-600">React, Vue.js, HTML, CSS, JavaScript, TypeScript</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Layout className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Backend Development</h3>
              <p className="text-gray-600">Node.js, Python, PHP, REST APIs, GraphQL</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Smartphone className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Development</h3>
              <p className="text-gray-600">React Native, Flutter, Responsive Design</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Database className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Database & Tools</h3>
              <p className="text-gray-600">MySQL, MongoDB, Git, Docker, AWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Services I Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Code2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Web Development
              </h3>
              <p className="text-gray-600">
                Custom websites and web applications built with modern technologies 
                and best practices for performance and scalability.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Layout className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                UI/UX Design
              </h3>
              <p className="text-gray-600">
                Beautiful, intuitive interfaces that provide excellent user experiences 
                and drive engagement with your digital products.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                API Development
              </h3>
              <p className="text-gray-600">
                Robust and secure APIs that power your applications with seamless 
                data integration and third-party service connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your project? Contact me through Upwork or send me a message directly
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:madnannaeem55@gmail.com" 
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    madnannaeem55@gmail.com
                  </a>
                  <a 
                    href="https://www.upwork.com/freelancers/~018b51cc99d6a5ca68" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-3" />
                    Upwork Profile
                  </a>
                  <a 
                    href="https://github.com/MAdnanNaeem" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-3" />
                    GitHub Profile
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/madnannaeem?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 mr-3" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Working Hours
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="text-sm mt-4">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <a 
                href="https://www.upwork.com/freelancers/~018b51cc99d6a5ca68" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Hire Me on Upwork
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-center sm:text-left mb-4 sm:mb-0">
              © 2024 Adnan Naeem. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/MAdnanNaeem" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/madnannaeem?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:madnannaeem55@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
