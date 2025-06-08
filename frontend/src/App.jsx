
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import LoginPage from '@/components/LoginPage';
import HomePage from '@/components/HomePage';
import Dashboard from '@/components/Dashboard';
import CandidateAnalytics from '@/components/CandidateAnalytics';
import MarketMapping from '@/components/MarketMapping';
import CompetitorAnalysis from '@/components/CompetitorAnalysis';
import JobRoleIntelligence from '@/components/JobRoleIntelligence';
import AboutUs from '@/components/AboutUs';
import FAQPage from '@/components/FAQPage';
import Navbar from '@/components/Navbar';

const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
    document.documentElement.classList.add('dark');
  }, []);

  const handleLogin = (credentials) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === credentials.email && u.password === credentials.password);
    
    if (user) {
      localStorage.setItem('authToken', 'authenticated');
      localStorage.setItem('currentUser', JSON.stringify(user));
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100 app-background">
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        <main className={isAuthenticated ? "pt-16" : ""}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/login" 
                element={
                  isAuthenticated ? <Navigate to="/" /> : 
                  <PageTransitionWrapper><LoginPage onLogin={handleLogin} /></PageTransitionWrapper>
                } 
              />
              <Route 
                path="/" 
                element={
                  isAuthenticated ? <PageTransitionWrapper><HomePage /></PageTransitionWrapper> : 
                  <Navigate to="/login" />
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  isAuthenticated ? <PageTransitionWrapper><Dashboard /></PageTransitionWrapper> : 
                  <Navigate to="/login" />
                } 
              />
              <Route 
                path="/candidates" 
                element={
                  isAuthenticated ? <PageTransitionWrapper><CandidateAnalytics /></PageTransitionWrapper> : 
                  <Navigate to="/login" />
                } 
              />
              <Route 
                path="/market-mapping" 
                element={
                  isAuthenticated ? <PageTransitionWrapper><MarketMapping /></PageTransitionWrapper> : 
                  <Navigate to="/login" />
                } 
              />
              <Route 
                path="/competitor-analysis" 
                element={
                  isAuthenticated ? <PageTransitionWrapper><CompetitorAnalysis /></PageTransitionWrapper> : 
                  <Navigate to="/login" />
                } 
              />
              <Route 
                path="/job-intelligence" 
                element={
                  isAuthenticated ? <PageTransitionWrapper><JobRoleIntelligence /></PageTransitionWrapper> : 
                  <Navigate to="/login" />
                } 
              />
              <Route 
                path="/about" 
                element={
                  isAuthenticated ? <PageTransitionWrapper><AboutUs /></PageTransitionWrapper> : 
                  <Navigate to="/login" />
                } 
              />
              <Route 
                path="/faq" 
                element={
                  isAuthenticated ? <PageTransitionWrapper><FAQPage /></PageTransitionWrapper> : 
                  <Navigate to="/login" />
                } 
              />
              <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
