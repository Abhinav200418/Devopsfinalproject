
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Users, TrendingUp, Globe, Shield, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const LoginPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      if (onLogin(formData)) {
        toast({
          title: "Welcome back!",
          description: "Successfully logged in to TalentHuntPro.",
          className: "bg-gray-800 text-white border-gray-700",
        });
      } else {
        toast({
          title: "Login failed",
          description: "Invalid credentials. Please try again.",
          variant: "destructive",
        });
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Password mismatch",
          description: "Passwords do not match.",
          variant: "destructive",
        });
        return;
      }

      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find(u => u.email === formData.email);
      
      if (existingUser) {
        toast({
          title: "User exists",
          description: "An account with this email already exists.",
          variant: "destructive",
        });
        return;
      }

      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password, 
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      toast({
        title: "Account created!",
        description: "Your account has been created successfully. Please log in.",
        className: "bg-gray-800 text-white border-gray-700",
      });
      
      setIsLogin(true);
      setFormData({ email: formData.email, password: '', confirmPassword: '', name: '' });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 minimal-pattern opacity-10"></div>
      
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full floating-animation"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full floating-animation"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gray-100 space-y-8"
        >
          <div>
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                TalentHuntPro
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl text-gray-300 mb-8"
            >
              Global HR Consulting & Talent Intelligence Platform
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Users, text: 'Global Talent Pool', delay: 0.5, color: 'text-blue-400' },
              { icon: TrendingUp, text: 'Market Analytics', delay: 0.6, color: 'text-green-400' },
              { icon: Globe, text: 'Global Reach', delay: 0.7, color: 'text-purple-400' },
              { icon: Shield, text: 'Secure Platform', delay: 0.8, color: 'text-red-400' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: item.delay, duration: 0.4, type: "spring", stiffness: 150 }}
                  className="p-6 text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg hover:border-primary transition-all"
                >
                  <Icon className={`w-12 h-12 ${item.color} mx-auto mb-4`} />
                  <span className="text-gray-200 font-semibold">{item.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md mx-auto"
        >
          <Card className="login-card bg-gray-800/70 border-gray-700 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-100">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {isLogin 
                  ? 'Sign in to access your TalentHuntPro dashboard' 
                  : 'Join TalentHuntPro to unlock global talent insights'
                }
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                      required
                    />
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="form-input bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-gray-300">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="form-input bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                      required
                    />
                  </div>
                )}
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-blue-700 hover:from-primary/90 hover:to-blue-700/90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform"
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </Button>
                </motion.div>
              </form>
              
              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  {isLogin 
                    ? "Don't have an account? Sign up" 
                    : "Already have an account? Sign in"
                  }
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
