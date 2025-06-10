
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Plus,
  MapPin,
  Briefcase,
  DollarSign,
  Star,
  X,
  User,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';

const CandidateAnalytics = () => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    experience: '',
    location: '',
    skills: '',
    salary: ''
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCandidate, setNewCandidate] = useState({
    name: '', email: '', phone: '', role: '',
    experience: '', location: '', skills: '',
    salary: '', rating: 5
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/get-candidates')
      .then(response => response.json())
      .then(data => {
        setCandidates(data);
        setFilteredCandidates(data);
      })
      .catch(error => {
        console.error('Error fetching candidates:', error);
      });
  }, []);

  useEffect(() => {
    let filtered = candidates;
    if (searchTerm) {
      filtered = filtered.filter(candidate =>
        candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.skills.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (filters.experience) {
      filtered = filtered.filter(candidate =>
        candidate.experience.toLowerCase().includes(filters.experience.toLowerCase())
      );
    }
    if (filters.location) {
      filtered = filtered.filter(candidate =>
        candidate.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    if (filters.skills) {
      filtered = filtered.filter(candidate =>
        candidate.skills.toLowerCase().includes(filters.skills.toLowerCase())
      );
    }
    setFilteredCandidates(filtered);
  }, [searchTerm, filters, candidates]);

  const handleAddCandidate = (e) => {
    e.preventDefault();
    const candidate = {
      ...newCandidate,
      id: Date.now(),
      avatar: newCandidate.name.split(' ').map(n => n[0]).join('').toUpperCase(),
      rating: parseFloat(newCandidate.rating)
    };

    fetch('http://3.110.136.152:5000/api/add-candidate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(candidate)
    })
      .then(res => res.json())
      .then(data => {
        setCandidates(prev => [...prev, candidate]);
        setFilteredCandidates(prev => [...prev, candidate]);
        toast({ title: "Candidate added!", description: data.message });
      })
      .catch(err => console.error('Error adding candidate:', err));

    setNewCandidate({
      name: '', email: '', phone: '', role: '',
      experience: '', location: '', skills: '',
      salary: '', rating: 5
    });
    setShowAddForm(false);
  };

  const clearFilters = () => {
    setFilters({ experience: '', location: '', skills: '', salary: '' });
    setSearchTerm('');
  };

  const hasActiveFilters = searchTerm || Object.values(filters).some(filter => filter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 space-y-6"
    >
     { /* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">Candidate Analytics</h1>
            <p className="text-gray-200">Manage and analyze your talent pool</p>
          </div>
          
          <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
            <DialogTrigger asChild>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Candidate
          </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-white">Add New Candidate</DialogTitle>
            <DialogDescription className="text-gray-200">
              Enter candidate information to add them to your talent pool.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleAddCandidate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Full Name</Label>
            <Input
              id="name"
              value={newCandidate.name}
              onChange={(e) => setNewCandidate({...newCandidate, name: e.target.value})}
              placeholder="Enter full name"
               
              required
            />
              </div>
              
              <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              value={newCandidate.email}
              onChange={(e) => setNewCandidate({...newCandidate, email: e.target.value})}
              placeholder="Enter email address"
              required
            />
              </div>
              
              <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">Phone</Label>
            <Input
              id="phone"
              value={newCandidate.phone}
              onChange={(e) => setNewCandidate({...newCandidate, phone: e.target.value})}
              placeholder="Enter phone number"
              required
            />
              </div>
              
              <div className="space-y-2">
            <Label htmlFor="role" className="text-white">Role</Label>
            <Input
              id="role"
              value={newCandidate.role}
              onChange={(e) => setNewCandidate({...newCandidate, role: e.target.value})}
              placeholder="Enter job role"
              required
            />
              </div>
              
              <div className="space-y-2">
            <Label htmlFor="experience" className="text-white">Experience</Label>
            <Input
              id="experience"
              value={newCandidate.experience}
              onChange={(e) => setNewCandidate({...newCandidate, experience: e.target.value})}
              placeholder="e.g., 5 years"
              required
            />
              </div>
              
              <div className="space-y-2">
            <Label htmlFor="location" className="text-white">Location</Label>
            <Input
              id="location"
              value={newCandidate.location}
              onChange={(e) => setNewCandidate({...newCandidate, location: e.target.value})}
              placeholder="Enter location"
              required
            />
              </div>
              
              <div className="space-y-2">
            <Label htmlFor="salary" className="text-white">Expected Salary</Label>
            <Input
              id="salary"
              value={newCandidate.salary}
              onChange={(e) => setNewCandidate({...newCandidate, salary: e.target.value})}
              placeholder="e.g., $120,000"
              required
            />
              </div>
              
              <div className="space-y-2">
            <Label htmlFor="rating" className="text-white">Rating (1-5)</Label>
            <Input
              id="rating"
              type="number"
              min="1"
              max="5"
              step="0.1"
              value={newCandidate.rating}
              onChange={(e) => setNewCandidate({...newCandidate, rating: e.target.value})}
              required
            />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="skills" className="text-white">Skills</Label>
              <Input
            id="skills"
            value={newCandidate.skills}
            onChange={(e) => setNewCandidate({...newCandidate, skills: e.target.value})}
            placeholder="Enter skills separated by commas"
            required
              />
            </div>
            
            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
            Cancel
              </Button>
              <Button type="submit">Add Candidate</Button>
            </div>
          </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by name, role, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label>Experience</Label>
                <Input
                  placeholder="Filter by experience"
                  value={filters.experience}
                  onChange={(e) => setFilters({...filters, experience: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Location</Label>
                <Input
                  placeholder="Filter by location"
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Skills</Label>
                <Input
                  placeholder="Filter by skills"
                  value={filters.skills}
                  onChange={(e) => setFilters({...filters, skills: e.target.value})}
                />
              </div>
              
              <div className="flex items-end">
                {hasActiveFilters && (
                  <Button
                    onClick={clearFilters}
                    variant="outline"
                    className="w-full"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
        <div className="flex items-center justify-between">
          <p className="text-gray-600" style={{ color: 'white' }}>
            Showing {filteredCandidates.length} of {candidates.length} candidates
          </p>
        </div>

       { /* Candidates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCandidates.map((candidate, index) => (
              <motion.div
            key={candidate.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
              >
            <Card className="candidate-card h-full">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                {candidate.avatar}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white truncate">
                  {candidate.name}
                </h3>
                <p className="text-sm text-gray-200 mb-2">{candidate.role}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span className="truncate">{candidate.email}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>{candidate.phone}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{candidate.location}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-300">
                <Briefcase className="w-4 h-4 mr-2" />
                <span>{candidate.experience}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-300">
                <DollarSign className="w-4 h-4 mr-2" />
                <span>{candidate.salary}</span>
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white">Rating</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-white ml-1">{candidate.rating}</span>
                </div>
                  </div>
                </div>
                
                <div className="mt-3">
                  <p className="text-sm text-white font-medium mb-1">Skills:</p>
                  <div className="flex flex-wrap gap-1">
                {candidate.skills.split(', ').slice(0, 3).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
                {candidate.skills.split(', ').length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{candidate.skills.split(', ').length - 3} more
                  </span>
                )}
                  </div>
                </div>
              </div>
                </div>
              </CardContent>
            </Card>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
      {filteredCandidates.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No candidates found</h3>
          <p className="text-gray-600 mb-4">
            {hasActiveFilters 
              ? "Try adjusting your search criteria or filters"
              : "Get started by adding your first candidate"
            }
          </p>
          {hasActiveFilters && (
            <Button onClick={clearFilters} variant="outline">
              Clear all filters
            </Button>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default CandidateAnalytics;
