
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Heart, Lightbulb, Shield, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every talent solution we deliver, ensuring the highest quality outcomes for our clients.',
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Trust and transparency form the foundation of all our relationships with clients and candidates.',
      color: 'red'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology and data-driven insights to revolutionize talent acquisition.',
      color: 'yellow'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our worldwide network enables us to connect talent across borders and time zones seamlessly.',
      color: 'green'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Successful Placements', icon: Users },
    { number: '500+', label: 'Global Clients', icon: Globe },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '95%', label: 'Client Satisfaction', icon: TrendingUp }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'Former VP of Talent at Fortune 500 companies with 20+ years in executive search.',
      imageAlt: 'Professional woman in business attire leading a team meeting'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      description: 'Tech visionary with expertise in AI-driven talent matching and data analytics.',
      imageAlt: 'Asian man in casual business attire working on technology solutions'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Global Operations',
      description: 'International business expert managing our worldwide talent acquisition network.',
      imageAlt: 'Hispanic woman presenting global business strategies'
    },
    {
      name: 'David Thompson',
      role: 'Director of Client Success',
      description: 'Relationship specialist ensuring exceptional client experiences and outcomes.',
      imageAlt: 'Professional man in suit discussing client solutions'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen text-gray-100"
    >
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-100"
          >
            About TalentHuntPro
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-300"
          >
            Revolutionizing talent acquisition through intelligent data-driven solutions and global expertise
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <img  className="rounded-lg shadow-2xl max-w-4xl w-full object-cover h-64 md:h-96" alt="Modern office with diverse team collaborating" src="https://images.unsplash.com/photo-1681184025442-1517cb9319c1" />
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* Mission Statement */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-8">Our Mission</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              At TalentHuntPro, we bridge the gap between exceptional talent and visionary organizations. 
              Our mission is to transform the way companies discover, evaluate, and acquire top-tier professionals 
              through innovative technology, deep market insights, and personalized consulting services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-100 mb-2">Trusted Partner</h3>
                <p className="text-gray-400">Building long-term relationships based on trust, reliability, and consistent results.</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-100 mb-2">Precision Matching</h3>
                <p className="text-gray-400">Leveraging advanced algorithms to ensure perfect candidate-role alignment.</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-100 mb-2">Global Network</h3>
                <p className="text-gray-400">Connecting talent across continents with opportunities that match their aspirations.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Company Stats */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-12 text-white"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                  <div className="text-4xl font-bold mb-2 text-gray-100">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-primary/30 transition-shadow duration-300 bg-gray-800 border-gray-700">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center`}>
                        <Icon className={`w-8 h-8 text-primary`} />
                      </div>
                      <CardTitle className="text-xl text-gray-100">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-center">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Leadership Team */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-primary/30 transition-shadow duration-300 bg-gray-800 border-gray-700">
                  <CardContent className="p-6 text-center">
                    <div className="mb-6">
                       <img  className="w-32 h-32 rounded-full mx-auto object-cover" alt={member.imageAlt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">{member.name}</h3>
                    <p className="text-primary font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Company Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="bg-gray-800/70 rounded-2xl p-12"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-100 mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Founded in 2009 by a team of seasoned HR professionals and technology innovators, 
                TalentHuntPro emerged from a simple yet powerful vision: to make talent acquisition 
                more intelligent, efficient, and human-centered.
              </p>
              <p>
                What started as a boutique consulting firm has evolved into a global leader in 
                talent intelligence, serving Fortune 500 companies and innovative startups alike. 
                Our proprietary platform combines artificial intelligence with human expertise to 
                deliver unparalleled insights into talent markets worldwide.
              </p>
              <p>
                Today, we're proud to have facilitated over 10,000 successful placements, 
                helping organizations build teams that drive innovation and growth. Our commitment 
                to excellence and continuous innovation keeps us at the forefront of the evolving 
                talent landscape.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
          className="text-center bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-12 text-white"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-100">Ready to Transform Your Talent Strategy?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Join hundreds of leading organizations who trust TalentHuntPro to find and secure top talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default AboutUs;
