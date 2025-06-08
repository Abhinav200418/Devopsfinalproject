
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Briefcase, Users, CheckCircle, BarChart3, Globe, TrendingUp } from 'lucide-react';

const HomePage = () => {
  const services = [
    { title: 'Executive Search', description: 'Finding top-tier leadership talent to drive your organization forward.', icon: Users, color: 'text-blue-400' },
    { title: 'Talent Mapping', description: 'Strategic insights into talent landscapes to inform your hiring decisions.', icon: Globe, color: 'text-green-400' },
    { title: 'Market Intelligence', description: 'Comprehensive analysis of market trends, compensation, and competitor strategies.', icon: BarChart3, color: 'text-purple-400' },
    { title: 'Recruitment Process Outsourcing', description: 'End-to-end management of your recruitment lifecycle for efficiency and scale.', icon: Briefcase, color: 'text-yellow-400' },
  ];

  const whyChooseUs = [
    { title: 'Data-Driven Insights', description: 'Leveraging advanced analytics for precise talent matching.', icon: TrendingUp, color: 'text-pink-400' },
    { title: 'Global Network', description: 'Access to a vast, curated pool of international talent.', icon: Globe, color: 'text-teal-400' },
    { title: 'Proven Track Record', description: 'Years of success in placing high-impact professionals.', icon: CheckCircle, color: 'text-orange-400' },
    { title: 'Personalized Approach', description: 'Tailored solutions to meet your unique organizational needs.', icon: Users, color: 'text-indigo-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen text-gray-100"
    >
      {/* Hero Section */}
      <motion.section
        variants={itemVariants}
        className="home-hero py-20 md:py-32 text-center relative"
      >
        <div className="container mx-auto px-6">
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-6xl font-bold mb-6 text-white shadow-text"
          >
            Unlock Your Organization's Potential
          </motion.h1>
          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200"
          >
            TalentHuntPro connects visionary companies with exceptional talent, driving growth and innovation through strategic HR solutions.
          </motion.p>
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-3">
                Explore Dashboard
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section variants={itemVariants} className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="home-section-card p-8 rounded-xl shadow-2xl border-gray-700">
              <div className="flex items-center mb-4">
                <Target className="w-12 h-12 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-gray-100">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To empower organizations by identifying and attracting premier talent, fostering innovation, and driving sustainable growth through strategic human capital solutions. We are committed to delivering excellence and building long-term partnerships.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="home-section-card p-8 rounded-xl shadow-2xl border-gray-700">
              <div className="flex items-center mb-4">
                <Eye className="w-12 h-12 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-gray-100">Our Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To be the leading global talent intelligence platform, recognized for our innovative approach, deep market insights, and unwavering commitment to client success. We aspire to shape the future of talent acquisition worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Provided Section */}
      <motion.section variants={itemVariants} className="py-16 md:py-24 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-100">Our Services</h2>
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div variants={itemVariants} key={service.title}>
                  <Card className="home-section-card h-full hover:shadow-primary/30 transition-shadow duration-300 border-gray-700">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <Icon className={`w-16 h-16 ${service.color}`} />
                      </div>
                      <CardTitle className="text-xl font-semibold text-center text-gray-100">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-center text-sm leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section variants={itemVariants} className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-100">Why Choose TalentHuntPro?</h2>
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((reason) => {
              const Icon = reason.icon;
              return (
                <motion.div variants={itemVariants} key={reason.title}>
                  <div className="home-section-card p-6 rounded-xl text-center h-full hover:shadow-primary/30 transition-shadow duration-300 border-gray-700">
                    <div className="flex justify-center mb-4">
                      <Icon className={`w-12 h-12 ${reason.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-100">{reason.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section variants={itemVariants} className="py-16 md:py-24 bg-gradient-to-r from-primary to-blue-700 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Elevate Your Talent Strategy?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Partner with TalentHuntPro and gain a competitive edge in the global talent market.
          </p>
          <div className="space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/about">
                <Button size="lg" variant="secondary" className="font-semibold text-lg px-8 py-3 bg-white text-primary hover:bg-gray-100">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-3">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;
