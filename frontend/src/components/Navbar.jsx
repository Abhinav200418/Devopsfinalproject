// === FRONTEND NAVBAR ===
// File: Navbar.jsx

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home,
  BarChart3, 
  Users, 
  Globe, 
  TrendingUp, 
  Briefcase, 
  Info,
  HelpCircle,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = ({ onLogout }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { path: '/candidates', label: 'Candidates', icon: Users },
    { path: '/market-mapping', label: 'Market Mapping', icon: Globe },
    { path: '/competitor-analysis', label: 'Competitors', icon: TrendingUp },
    { path: '/job-intelligence', label: 'Job Intelligence', icon: Briefcase },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/faq', label: 'FAQ', icon: HelpCircle },
  ];

  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700 shadow-lg">
      <div className="w-full px-6 sm:px-8 lg:px-10">
        <div className="flex items-center h-16">

          {/* Left: Logo */}
          <div className="flex items-center space-x-2 mr-10">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 15 }}
                className="w-10 h-10 bg-gradient-to-r from-primary to-blue-700 rounded-lg flex items-center justify-center shadow-md"
              >
                <BarChart3 className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                TalentHuntPro
              </span>
            </Link>
          </div>

          {/* Center: Navigation */}
          <div className="hidden md:flex items-center space-x-6 flex-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    isActive 
                      ? 'text-primary bg-primary/10' 
                      : 'text-gray-300 hover:text-primary hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right: User Info */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-sm text-gray-300 whitespace-nowrap">
              Welcome, <span className="font-medium text-primary">{currentUser.name || 'User'}</span>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={onLogout}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 border-primary text-primary hover:bg-primary/10"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-primary hover:bg-gray-800"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-900/95 border-t border-gray-700"
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'text-primary bg-primary/10' 
                      : 'text-gray-300 hover:text-primary hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <div className="border-t border-gray-700 pt-2 mt-2">
              <div className="px-4 py-2 text-sm text-gray-300">
                Welcome, <span className="font-medium text-primary">{currentUser.name || 'User'}</span>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onLogout();
                }}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/20 w-full"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
