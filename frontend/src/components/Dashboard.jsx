
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Globe, 
  Award, 
  Clock,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const metrics = [
    {
      title: 'Total Candidates',
      value: '12,847',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Jobs',
      value: '1,234',
      change: '+8%',
      trend: 'up',
      icon: Briefcase,
      color: 'green'
    },
    {
      title: 'Placements',
      value: '856',
      change: '+15%',
      trend: 'up',
      icon: Award,
      color: 'purple'
    },
    {
      title: 'Avg. Time to Hire',
      value: '18 days',
      change: '-5%',
      trend: 'down',
      icon: Clock,
      color: 'orange'
    }
  ];

  const chartData = [
    { month: 'Jan', candidates: 400, placements: 240 },
    { month: 'Feb', candidates: 300, placements: 139 },
    { month: 'Mar', candidates: 200, placements: 980 },
    { month: 'Apr', candidates: 278, placements: 390 },
    { month: 'May', candidates: 189, placements: 480 },
    { month: 'Jun', candidates: 239, placements: 380 },
  ];

  const skillsData = [
    { name: 'JavaScript', value: 400, color: '#3b82f6' }, // primary
    { name: 'Python', value: 300, color: '#8b5cf6' }, // a purple shade
    { name: 'React', value: 300, color: '#06b6d4' }, // a cyan shade
    { name: 'Node.js', value: 200, color: '#10b981' }, // a green shade
  ];

  const regionData = [
    { region: 'N. America', candidates: 4500 },
    { region: 'Europe', candidates: 3200 },
    { region: 'Asia Pac.', candidates: 2800 },
    { region: 'LatAm', candidates: 1500 },
    { region: 'Mid. East', candidates: 800 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-4 md:p-6 space-y-6"
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-100 mb-2">Dashboard Overview</h1>
        <p className="text-gray-300">Welcome to your TalentHuntPro analytics dashboard</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
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
                      <div className="flex items-center mt-2">
                        {metric.trend === 'up' ? (
                          <ArrowUp className="w-4 h-4 text-green-400" />
                        ) : (
                          <ArrowDown className="w-4 h-4 text-red-400" />
                        )}
                        <span className={`text-sm font-medium ml-1 ${
                          metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {metric.change}
                        </span>
                      </div>
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

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Candidates vs Placements Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-gray-800/70 border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100">Candidates vs Placements</CardTitle>
              <CardDescription className="text-gray-400">Monthly comparison of candidate pool and successful placements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="chart-container bg-gray-800 border border-gray-700">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData} margin={{ top: 5, right: 20, left: -25, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                    <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}
                      labelStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Bar dataKey="candidates" fill="hsl(var(--primary))" name="Candidates" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="placements" fill="#8b5cf6" name="Placements" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-gray-800/70 border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100">Top Skills Distribution</CardTitle>
              <CardDescription className="text-gray-400">Most in-demand skills in our talent pool</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="chart-container bg-gray-800 border border-gray-700">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={skillsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      stroke="hsl(var(--background))"
                    >
                      {skillsData.map((entry, index) => (
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

      {/* Regional Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="bg-gray-800/70 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Global Talent Distribution</CardTitle>
            <CardDescription className="text-gray-400">Candidate distribution across different regions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="chart-container bg-gray-800 border border-gray-700">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={regionData} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis dataKey="region" type="category" width={80} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Bar dataKey="candidates" fill="#06b6d4" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Card className="bg-gray-800/70 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Recent Activity</CardTitle>
            <CardDescription className="text-gray-400">Latest updates and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: 'New candidate registered: Alex Doe', time: '2 minutes ago', type: 'candidate' },
                { action: 'Job posting "Senior AI Engineer" approved', time: '15 minutes ago', type: 'job' },
                { action: 'Placement completed for Jane Smith at TechCorp', time: '1 hour ago', type: 'placement' },
                { action: 'Market report Q2 2025 generated', time: '3 hours ago', type: 'report' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'candidate' ? 'bg-blue-400' :
                    activity.type === 'job' ? 'bg-green-400' :
                    activity.type === 'placement' ? 'bg-purple-400' : 'bg-orange-400'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-200">{activity.action}</p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
