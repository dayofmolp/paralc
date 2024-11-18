import { useState, useEffect } from "react";
import {
  Code, Globe, Laptop, ShoppingBag, Zap, Users, ChevronUp, Menu, X, Mail, Phone, MapPin, Clock
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/Card';

const projectData = [
  { month: 'Jan', completedProjects: 12 },
  { month: 'Feb', completedProjects: 15 },
  { month: 'Mar', completedProjects: 18 },
  { month: 'Apr', completedProjects: 22 },
  { month: 'May', completedProjects: 25 },
  { month: 'Jun', completedProjects: 30 }
];

const solutionCards = [
  {
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    description: "Build and scale your online store",
    items: ["Custom E-commerce Platforms", "Payment Integration", "Inventory Management"]
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Professional websites that drive growth",
    items: ["Responsive Design", "CMS Development", "SEO Optimization"]
  },
  {
    icon: Laptop,
    title: "Digital Services",
    description: "Comprehensive online solutions",
    items: ["Digital Marketing", "Cloud Solutions", "API Integration"]
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('solutions');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold">Paral</span>
              <span className="text-blue-400 ml-1">CT</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['solutions', 'portfolio', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`transition-colors duration-200 ${activeTab === tab ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['solutions', 'portfolio', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Sections */}
      {/* Add your sections here as in the code you provided */}
    </div>
  );
}
