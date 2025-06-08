import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, Target, Award, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line } from 'recharts';

const CompetitorAnalysis = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState('all');

  const competitors = [
    {
      id: 'techcorp',
      name: 'TechCorp Solutions',
      logo: 'TC',
      hiringRate: 85,
      avgSalary: 125000,
      retention: 92,
      marketShare: 15,
      growth: 12,
      color: '#3b82f6'
    },
    {
      id: 'innovate',
      name: 'Innovate Labs',
      logo: 'IL',
      hiringRate: 78,
      avgSalary: 118000,
      retention: 88,
      marketShare: 12,
      growth: 18,
      color: '#10b981'
    },
    {
      id: 'digital',
      name: 'Digital Dynamics',
      logo: 'DD',
      hiringRate: 72,
      avgSalary: 115000,
      retention: 85,
      marketShare: 10,
      growth: 8,
      color: '#8b5cf6'
    },
    {
      id: 'future',
      name: 'Future Systems',
      logo: 'FS',
      hiringRate: 68,
      avgSalary: 110000,
      retention: 90,
      marketShare: 8,
      growth: 15,
      color: '#f59e0b'
    }
  ];

  const hiringTrends = [
    { month: 'Jan', TechCorp: 45, Innovate: 38, Digital: 32, Future: 28 },
    { month: 'Feb', TechCorp: 52, Innovate: 42, Digital: 35, Future: 30 },
    { month: 'Mar', TechCorp: 48, Innovate: 45, Digital: 38, Future: 32 },
    { month: 'Apr', TechCorp: 55, Innovate: 48, Digital: 40, Future: 35 },
    { month: 'May', TechCorp: 58, Innovate: 52, Digital: 42, Future: 38 },
    { month: 'Jun', TechCorp: 62, Innovate: 55, Digital: 45, Future: 40 },
  ];

  const skillsComparison = [
    { skill: 'JavaScript', TechCorp: 95, Innovate: 88, Digital: 82, Future: 78 },
    { skill: 'Python', TechCorp: 88, Innovate: 92, Digital: 85, Future: 80 },
    { skill: 'React', TechCorp: 92, Innovate: 85, Digital: 88, Future: 75 },
    { skill: 'AWS', TechCorp: 85, Innovate: 90, Digital: 78, Future: 82 },
    { skill: 'DevOps', TechCorp: 78, Innovate: 82, Digital: 75, Future: 85 },
  ];

  const radarData = [
    { subject: 'Hiring Speed', A: 85, B: 78, C: 72, D: 68, fullMark: 100 },
    { subject: 'Salary Competitiveness', A: 88, B: 82, C: 78, D: 75, fullMark: 100 },
    { subject: 'Retention Rate', A: 92, B: 88, C: 85, D: 90, fullMark: 100 },
    { subject: 'Market Presence', A: 90, B: 85, C: 75, D: 70, fullMark: 100 },
    { subject: 'Growth Rate', A: 75, B: 90, C: 65, D: 85, fullMark: 100 },
    { subject: 'Innovation', A: 88, B: 95, C: 80, D: 82, fullMark: 100 },
  ];

  const benchmarkData = [
    { metric: 'Time to Hire', industry: 25, us: 18, best: 12, unit: 'days' },
    { metric: 'Cost per Hire', industry: 4500, us: 3200, best: 2800, unit: '$' },
    { metric: 'Offer Acceptance', industry: 75, us: 85, best: 92, unit: '%' },
    { metric: 'Employee Satisfaction', industry: 72, us: 88, best: 95, unit: '%' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 space-y-6"
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-100 mb-2">Competitor Analysis</h1>
        <p className="text-gray-300">Analyze hiring patterns and strategies of key competitors</p>
      </div>

      {/* Competitor Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {competitors.map((competitor, index) => (
          <motion.div
            key={competitor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="metric-card bg-gray-800/70 border-gray-700 hover:border-primary cursor-pointer" onClick={() => setSelectedCompetitor(competitor.id)}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: competitor.color }}
                  >
                    {competitor.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-100 text-sm">{competitor.name}</h3>
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Market Share:</span>
                        <span className="font-medium text-gray-200">{competitor.marketShare}%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Growth:</span>
                        <span className="font-medium text-green-400">+{competitor.growth}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Hiring Trends Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-gray-800/70 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Hiring Trends Comparison</CardTitle>
            <CardDescription className="text-gray-400">Monthly hiring activity across competitors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container bg-gray-800 border border-gray-700">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={hiringTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Line type="monotone" dataKey="TechCorp" stroke="#3b82f6" strokeWidth={3} />
                  <Line type="monotone" dataKey="Innovate" stroke="#10b981" strokeWidth={3} />
                  <Line type="monotone" dataKey="Digital" stroke="#8b5cf6" strokeWidth={3} />
                  <Line type="monotone" dataKey="Future" stroke="#f59e0b" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Skills Demand Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="bg-gray-800/70 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Skills Demand Comparison</CardTitle>
            <CardDescription className="text-gray-400">Top skills being hired by each competitor</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container bg-gray-800 border border-gray-700">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={skillsComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="skill" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Bar dataKey="TechCorp" fill="#3b82f6" name="TechCorp" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Innovate" fill="#10b981" name="Innovate Labs" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Digital" fill="#8b5cf6" name="Digital Dynamics" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Future" fill="#f59e0b" name="Future Systems" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Competitive Radar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-gray-800/70 border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100">Competitive Positioning</CardTitle>
              <CardDescription className="text-gray-400">Multi-dimensional competitor comparison</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="chart-container bg-gray-800 border border-gray-700">
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                    <Radar name="TechCorp" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
                    <Radar name="Innovate" dataKey="B" stroke="#10b981" fill="#10b981" fillOpacity={0.1} />
                    <Radar name="Digital" dataKey="C" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.1} />
                    <Radar name="Future" dataKey="D" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.1} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}
                      labelStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Benchmark Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="bg-gray-800/70 border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100">Industry Benchmarks</CardTitle>
              <CardDescription className="text-gray-400">How we compare to industry standards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {benchmarkData.map((benchmark, index) => (
                  <div key={benchmark.metric} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-200">{benchmark.metric}</span>
                      <span className="text-sm text-gray-300">
                        {benchmark.unit === '$' ? '$' : ''}{benchmark.us}{benchmark.unit !== '$' ? benchmark.unit : ''}
                      </span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full relative" 
                          style={{ 
                            width: `${(benchmark.us / Math.max(benchmark.industry, benchmark.best)) * 100}%` 
                          }}
                        >
                          <div className="absolute -top-6 right-0 text-xs text-primary font-medium">
                            Us
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between mt-1 text-xs text-gray-500">
                        <span>Industry: {benchmark.unit === '$' ? '$' : ''}{benchmark.industry}{benchmark.unit !== '$' ? benchmark.unit : ''}</span>
                        <span>Best: {benchmark.unit === '$' ? '$' : ''}{benchmark.best}{benchmark.unit !== '$' ? benchmark.unit : ''}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Competitive Intelligence */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="bg-gray-800/70 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Competitive Intelligence</CardTitle>
            <CardDescription className="text-gray-400">Key insights and strategic recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-800">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-primary mr-2" />
                  <h3 className="font-semibold text-gray-100">Market Opportunities</h3>
                </div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• DevOps talent gap in market</li>
                  <li>• Remote work preferences rising</li>
                  <li>• AI/ML skills in high demand</li>
                </ul>
              </div>
              
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-800">
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-green-400 mr-2" />
                  <h3 className="font-semibold text-gray-100">Competitive Advantages</h3>
                </div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Faster hiring process</li>
                  <li>• Higher retention rates</li>
                  <li>• Better candidate experience</li>
                </ul>
              </div>
              
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-800">
                <div className="flex items-center mb-3">
                  <Eye className="w-5 h-5 text-orange-400 mr-2" />
                  <h3 className="font-semibold text-gray-100">Areas to Watch</h3>
                </div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Innovate Labs' growth rate</li>
                  <li>• Salary inflation trends</li>
                  <li>• New market entrants</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default CompetitorAnalysis;