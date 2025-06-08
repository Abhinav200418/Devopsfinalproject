import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Users, DollarSign, Clock, MapPin, Star, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const JobRoleIntelligence = () => {
  const [selectedRole, setSelectedRole] = useState('frontend');
  const [searchTerm, setSearchTerm] = useState('');

  const jobRoles = [
    {
      id: 'frontend',
      title: 'Frontend Developer',
      demand: 92,
      supply: 78,
      avgSalary: 95000,
      growth: 15,
      timeToHire: 18,
      openings: 1247,
      color: '#3b82f6'
    },
    {
      id: 'backend',
      title: 'Backend Developer',
      demand: 88,
      supply: 72,
      avgSalary: 105000,
      growth: 12,
      timeToHire: 22,
      openings: 1156,
      color: '#10b981'
    },
    {
      id: 'fullstack',
      title: 'Full Stack Developer',
      demand: 95,
      supply: 65,
      avgSalary: 110000,
      growth: 18,
      timeToHire: 25,
      openings: 1389,
      color: '#8b5cf6'
    },
    {
      id: 'devops',
      title: 'DevOps Engineer',
      demand: 85,
      supply: 55,
      avgSalary: 125000,
      growth: 22,
      timeToHire: 28,
      openings: 892,
      color: '#f59e0b'
    },
    {
      id: 'datascientist',
      title: 'Data Scientist',
      demand: 90,
      supply: 60,
      avgSalary: 130000,
      growth: 25,
      timeToHire: 30,
      openings: 756,
      color: '#ef4444'
    },
    {
      id: 'uxdesigner',
      title: 'UX Designer',
      demand: 78,
      supply: 82,
      avgSalary: 85000,
      growth: 10,
      timeToHire: 20,
      openings: 634,
      color: '#06b6d4'
    }
  ];

  const skillsData = {
    frontend: [
      { skill: 'React', demand: 95, supply: 80 },
      { skill: 'JavaScript', demand: 98, supply: 85 },
      { skill: 'TypeScript', demand: 85, supply: 70 },
      { skill: 'CSS/SCSS', demand: 90, supply: 88 },
      { skill: 'Vue.js', demand: 75, supply: 65 }
    ],
    backend: [
      { skill: 'Node.js', demand: 90, supply: 75 },
      { skill: 'Python', demand: 88, supply: 80 },
      { skill: 'Java', demand: 85, supply: 82 },
      { skill: 'SQL', demand: 95, supply: 85 },
      { skill: 'AWS', demand: 82, supply: 65 }
    ],
    fullstack: [
      { skill: 'JavaScript', demand: 98, supply: 85 },
      { skill: 'React', demand: 92, supply: 78 },
      { skill: 'Node.js', demand: 88, supply: 72 },
      { skill: 'MongoDB', demand: 80, supply: 70 },
      { skill: 'Docker', demand: 75, supply: 60 }
    ],
    devops: [
      { skill: 'AWS', demand: 95, supply: 70 },
      { skill: 'Kubernetes', demand: 90, supply: 60 },
      { skill: 'Docker', demand: 88, supply: 75 },
      { skill: 'Terraform', demand: 85, supply: 65 },
      { skill: 'CI/CD', demand: 92, supply: 80 }
    ],
    datascientist: [
      { skill: 'Python', demand: 98, supply: 80 },
      { skill: 'Machine Learning', demand: 95, supply: 70 },
      { skill: 'SQL', demand: 90, supply: 85 },
      { skill: 'TensorFlow', demand: 85, supply: 60 },
      { skill: 'Statistics', demand: 88, supply: 75 }
    ],
    uxdesigner: [
      { skill: 'Figma', demand: 95, supply: 85 },
      { skill: 'User Research', demand: 90, supply: 78 },
      { skill: 'Prototyping', demand: 88, supply: 80 },
      { skill: 'Adobe XD', demand: 82, supply: 75 },
      { skill: 'UI Design', demand: 92, supply: 82 }
    ]
  };

  const salaryTrends = [
    { month: 'Jan', frontend: 92000, backend: 98000, fullstack: 105000, devops: 118000 },
    { month: 'Feb', frontend: 93000, backend: 99000, fullstack: 106000, devops: 120000 },
    { month: 'Mar', frontend: 94000, backend: 101000, fullstack: 108000, devops: 122000 },
    { month: 'Apr', frontend: 95000, backend: 103000, fullstack: 109000, devops: 124000 },
    { month: 'May', frontend: 95000, backend: 105000, fullstack: 110000, devops: 125000 },
    { month: 'Jun', frontend: 96000, backend: 106000, fullstack: 112000, devops: 127000 },
  ];

  const regionData = [
    { region: 'San Francisco', frontend: 125000, backend: 135000, fullstack: 140000 },
    { region: 'New York', frontend: 115000, backend: 125000, fullstack: 130000 },
    { region: 'Seattle', frontend: 110000, backend: 120000, fullstack: 125000 },
    { region: 'Austin', frontend: 95000, backend: 105000, fullstack: 110000 },
    { region: 'Remote', frontend: 90000, backend: 100000, fullstack: 105000 },
  ];

  const experienceBreakdown = [
    { level: 'Junior (0-2 years)', value: 35, color: '#93c5fd' },
    { level: 'Mid (3-5 years)', value: 40, color: '#3b82f6' },
    { level: 'Senior (6+ years)', value: 25, color: '#1e40af' },
  ];

  const selectedRoleData = jobRoles.find(role => role.id === selectedRole) || jobRoles[0];
  const currentSkillsData = skillsData[selectedRole] || skillsData.frontend;

  const filteredRoles = jobRoles.filter(role =>
    role.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 space-y-6"
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-100 mb-2">Job Role Intelligence</h1>
        <p className="text-gray-300">Deep insights into specific roles and market demands</p>
      </div>

      {/* Search and Role Selection */}
      <Card className="bg-gray-800/70 border-gray-700">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search job roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 form-input bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {filteredRoles.map((role) => (
                <Button
                  key={role.id}
                  variant={selectedRole === role.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedRole(role.id)}
                  className={`text-xs ${selectedRole === role.id ? 'bg-primary text-primary-foreground' : 'border-gray-600 text-gray-300 hover:bg-gray-700'}`}
                >
                  {role.title}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Role Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Market Demand', value: `${selectedRoleData.demand}%`, icon: TrendingUp, color: 'blue' },
          { title: 'Talent Supply', value: `${selectedRoleData.supply}%`, icon: Users, color: 'green' },
          { title: 'Avg. Salary', value: `$${(selectedRoleData.avgSalary / 1000).toFixed(0)}K`, icon: DollarSign, color: 'purple' },
          { title: 'Time to Hire', value: `${selectedRoleData.timeToHire} days`, icon: Clock, color: 'orange' },
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
                      <p className="text-sm text-green-400 font-medium">+{selectedRoleData.growth}% growth</p>
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

      {/* Skills Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-gray-800/70 border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100">Required Skills for {selectedRoleData.title}</CardTitle>
              <CardDescription className="text-gray-400">Demand vs supply for key skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="chart-container bg-gray-800 border border-gray-700">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={currentSkillsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="skill" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
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
              <CardTitle className="text-gray-100">Experience Level Distribution</CardTitle>
              <CardDescription className="text-gray-400">Breakdown of candidates by experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="chart-container bg-gray-800 border border-gray-700">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={experienceBreakdown}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ level, percent }) => `${level.split(' ')[0]} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      stroke="hsl(var(--background))"
                    >
                      {experienceBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}
                      labelStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Salary Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="bg-gray-800/70 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Salary Trends Comparison</CardTitle>
            <CardDescription className="text-gray-400">6-month salary evolution across different roles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container bg-gray-800 border border-gray-700">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={salaryTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip 
                    formatter={(value) => [`$${value.toLocaleString()}`, '']} 
                    contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Line type="monotone" dataKey="frontend" stroke="#3b82f6" strokeWidth={3} name="Frontend" />
                  <Line type="monotone" dataKey="backend" stroke="#10b981" strokeWidth={3} name="Backend" />
                  <Line type="monotone" dataKey="fullstack" stroke="#8b5cf6" strokeWidth={3} name="Full Stack" />
                  <Line type="monotone" dataKey="devops" stroke="#f59e0b" strokeWidth={3} name="DevOps" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Regional Salary Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Card className="bg-gray-800/70 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Regional Salary Comparison</CardTitle>
            <CardDescription className="text-gray-400">Average salaries across different locations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container bg-gray-800 border border-gray-700">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={regionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="region" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip 
                    formatter={(value) => [`$${value.toLocaleString()}`, '']} 
                    contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Bar dataKey="frontend" fill="#3b82f6" name="Frontend" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="backend" fill="#10b981" name="Backend" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="fullstack" fill="#8b5cf6" name="Full Stack" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Role Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="bg-gray-800/70 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Role-Specific Insights</CardTitle>
            <CardDescription className="text-gray-400">Key trends and recommendations for {selectedRoleData.title}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-800">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-5 h-5 text-primary mr-2" />
                  <h3 className="font-semibold text-gray-100">Market Trends</h3>
                </div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• High demand, limited supply</li>
                  <li>• Remote work increasing</li>
                  <li>• Salary growth accelerating</li>
                </ul>
              </div>
              
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-800">
                <div className="flex items-center mb-3">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <h3 className="font-semibold text-gray-100">Top Skills</h3>
                </div>
                <ul className="text-sm text-gray-300 space-y-1">
                  {currentSkillsData.slice(0, 3).map((skill, index) => (
                    <li key={index}>• {skill.skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-800">
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-purple-400 mr-2" />
                  <h3 className="font-semibold text-gray-100">Best Locations</h3>
                </div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• San Francisco Bay Area</li>
                  <li>• New York City</li>
                  <li>• Remote opportunities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default JobRoleIntelligence;