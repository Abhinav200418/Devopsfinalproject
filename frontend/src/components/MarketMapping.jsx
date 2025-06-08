import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, Users, DollarSign, MapPin, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, ScatterChart, Scatter } from 'recharts';

const MarketMapping = () => {
  const [selectedRegion, setSelectedRegion] = useState('global');

  const globalData = [
    { region: 'North America', demand: 85, supply: 70, avgSalary: 120000, growth: 12 },
    { region: 'Europe', demand: 78, supply: 82, avgSalary: 95000, growth: 8 },
    { region: 'Asia Pacific', demand: 92, supply: 65, avgSalary: 75000, growth: 18 },
    { region: 'Latin America', demand: 65, supply: 75, avgSalary: 45000, growth: 15 },
    { region: 'Middle East', demand: 70, supply: 60, avgSalary: 85000, growth: 10 },
  ];

  const trendData = [
    { month: 'Jan', demand: 65, supply: 70 },
    { month: 'Feb', demand: 68, supply: 72 },
    { month: 'Mar', demand: 72, supply: 75 },
    { month: 'Apr', demand: 75, supply: 73 },
    { month: 'May', demand: 78, supply: 76 },
    { month: 'Jun', demand: 82, supply: 78 },
  ];

  const skillsData = [
    { skill: 'JavaScript', demand: 95, supply: 80, gap: 15 },
    { skill: 'Python', demand: 88, supply: 75, gap: 13 },
    { skill: 'React', demand: 85, supply: 70, gap: 15 },
    { skill: 'Node.js', demand: 78, supply: 65, gap: 13 },
    { skill: 'AWS', demand: 82, supply: 60, gap: 22 },
    { skill: 'DevOps', demand: 75, supply: 55, gap: 20 },
  ];

  const salaryTrends = [
    { role: 'Frontend Dev', junior: 65000, mid: 95000, senior: 130000 },
    { role: 'Backend Dev', junior: 70000, mid: 100000, senior: 140000 },
    { role: 'Full Stack', junior: 68000, mid: 98000, senior: 135000 },
    { role: 'DevOps', junior: 75000, mid: 110000, senior: 150000 },
    { role: 'Data Scientist', junior: 80000, mid: 120000, senior: 160000 },
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
        <h1 className="text-3xl font-bold text-gray-100 mb-2">Market Mapping</h1>
        <p className="text-gray-300">Global talent supply and demand analysis</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Global Demand Index', value: '82%', change: '+5%', icon: TrendingUp, color: 'blue' },
          { title: 'Supply Availability', value: '74%', change: '+2%', icon: Users, color: 'green' },
          { title: 'Avg. Market Salary', value: '$95K', change: '+8%', icon: DollarSign, color: 'purple' },
          { title: 'Active Markets', value: '45', change: '+3', icon: Globe, color: 'orange' },
        ].map((metric, index) => {
          const Icon = metric.icon;
          const iconColorClass = 
            metric.color === 'blue' ? 'text-blue-400 bg-blue-400/20' :
            metric.color === 'green' ? 'text-green-400 bg-green-400/20' :
            metric.color === 'purple' ? 'text-purple-400 bg-purple-400/20' :
            'text-orange-400 bg-orange-400/20';
          return (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="metric-card bg-gray-800/70 border-gray-700 hover:border-primary">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-400">{metric.title}</p>
                      <p className="text-2xl font-bold text-gray-100">{metric.value}</p>
                      <p className="text-sm text-green-400 font-medium">{metric.change}</p>
                    </div>
                    <div className={`p-3 rounded-full ${iconColorClass}`}>
                      <Icon className={`w-6 h-6`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Regional Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-gray-800/70 border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100">Regional Supply vs Demand</CardTitle>
              <CardDescription className="text-gray-400">Talent market balance across different regions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="chart-container bg-gray-800 border border-gray-700">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={globalData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="region" angle={-45} textAnchor="end" height={80} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                    <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}
                      labelStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Bar dataKey="demand" fill="hsl(var(--primary))" name="Demand" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="supply" fill="#10b981" name="Supply" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-gray-800/70 border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100">Market Trends</CardTitle>
              <CardDescription className="text-gray-400">6-month supply and demand trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="chart-container bg-gray-800 border border-gray-700">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                    <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}
                      labelStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Line type="monotone" dataKey="demand" stroke="hsl(var(--primary))" strokeWidth={3} name="Demand" />
                    <Line type="monotone" dataKey="supply" stroke="#10b981" strokeWidth={3} name="Supply" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Skills Gap Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="bg-gray-800/70 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Skills Gap Analysis</CardTitle>
            <CardDescription className="text-gray-400">Most in-demand skills with supply-demand gaps</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container bg-gray-800 border border-gray-700">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={skillsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="skill" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Bar dataKey="demand" fill="hsl(var(--primary))" name="Demand" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="supply" fill="#10b981" name="Supply" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="gap" fill="#ef4444" name="Gap" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Salary Benchmarks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Card className="bg-gray-800/70 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Salary Benchmarks by Role</CardTitle>
            <CardDescription className="text-gray-400">Average compensation across experience levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container bg-gray-800 border border-gray-700">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={salaryTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="role" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip 
                    formatter={(value) => [`$${value.toLocaleString()}`, '']} 
                    contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Bar dataKey="junior" fill="#93c5fd" name="Junior" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="mid" fill="hsl(var(--primary))" name="Mid-level" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="senior" fill="#1e40af" name="Senior" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Regional Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="bg-gray-800/70 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Regional Market Insights</CardTitle>
            <CardDescription className="text-gray-400">Key insights and opportunities by region</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {globalData.map((region, index) => (
                <motion.div
                  key={region.region}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="p-4 border border-gray-700 rounded-lg hover:shadow-primary/20 transition-shadow bg-gray-800"
                >
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    <h3 className="font-semibold text-gray-100">{region.region}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Demand:</span>
                      <span className="text-sm font-medium text-gray-200">{region.demand}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Supply:</span>
                      <span className="text-sm font-medium text-gray-200">{region.supply}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Avg. Salary:</span>
                      <span className="text-sm font-medium text-gray-200">${region.avgSalary.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Growth:</span>
                      <span className="text-sm font-medium text-green-400">+{region.growth}%</span>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(region.demand / 100) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Market Activity</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default MarketMapping;