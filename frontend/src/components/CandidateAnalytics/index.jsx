import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CandidateFilters from '@/components/CandidateAnalytics/CandidateFilters';
import CandidateCard from '@/components/CandidateAnalytics/CandidateCard';
import AddCandidateDialog from '@/components/CandidateAnalytics/AddCandidateDialog';
import { Button } from '@/components/ui/button'; 
import { toast } from '@/components/ui/use-toast';

const CandidateAnalytics = () => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    experience: '',
    location: '',
    skills: '',
  });
  
  useEffect(() => {
    const sampleCandidates = [
      { id: 1, name: 'Sarah Johnson', email: 'sarah.johnson@email.com', phone: '+1 (555) 123-4567', role: 'Senior Frontend Developer', experience: '5 years', location: 'San Francisco, CA', skills: 'React, JavaScript, TypeScript, CSS', salary: '$120,000', rating: 4.8, avatar: 'SJ' },
      { id: 2, name: 'Michael Chen', email: 'michael.chen@email.com', phone: '+1 (555) 234-5678', role: 'Full Stack Engineer', experience: '7 years', location: 'New York, NY', skills: 'Node.js, Python, React, MongoDB', salary: '$140,000', rating: 4.9, avatar: 'MC' },
      { id: 3, name: 'Emily Rodriguez', email: 'emily.rodriguez@email.com', phone: '+1 (555) 345-6789', role: 'UX Designer', experience: '4 years', location: 'Austin, TX', skills: 'Figma, Adobe XD, User Research, Prototyping', salary: '$95,000', rating: 4.7, avatar: 'ER' },
      { id: 4, name: 'David Kim', email: 'david.kim@email.com', phone: '+1 (555) 456-7890', role: 'Data Scientist', experience: '6 years', location: 'Seattle, WA', skills: 'Python, Machine Learning, SQL, TensorFlow', salary: '$130,000', rating: 4.6, avatar: 'DK' },
    ];

    const storedCandidates = JSON.parse(localStorage.getItem('candidates') || '[]');
    const allCandidates = storedCandidates.length > 0 ? storedCandidates : sampleCandidates;
    
    setCandidates(allCandidates);
    if (storedCandidates.length === 0) {
      localStorage.setItem('candidates', JSON.stringify(sampleCandidates));
    }
  }, []);

  useEffect(() => {
    let currentFiltered = [...candidates];

    if (searchTerm) {
      currentFiltered = currentFiltered.filter(candidate =>
        candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.skills.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.experience) {
      currentFiltered = currentFiltered.filter(candidate =>
        candidate.experience.toLowerCase().includes(filters.experience.toLowerCase())
      );
    }
    if (filters.location) {
      currentFiltered = currentFiltered.filter(candidate =>
        candidate.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    if (filters.skills) {
      const skillsFilterArray = filters.skills.toLowerCase().split(',').map(s => s.trim()).filter(s => s);
      if (skillsFilterArray.length > 0) {
        currentFiltered = currentFiltered.filter(candidate => 
          skillsFilterArray.every(skillFilter => 
            candidate.skills.toLowerCase().split(',').map(s => s.trim()).includes(skillFilter)
          )
        );
      }
    }
    setFilteredCandidates(currentFiltered);
  }, [searchTerm, filters, candidates]);

  const handleAddCandidate = (newCandidateData) => {
    const newId = candidates.length > 0 ? Math.max(...candidates.map(c => c.id)) + 1 : 1;
    const candidateWithId = { ...newCandidateData, id: newId };
    const updatedCandidates = [...candidates, candidateWithId];
    setCandidates(updatedCandidates);
    localStorage.setItem('candidates', JSON.stringify(updatedCandidates));
    toast({
      title: "Candidate Added",
      description: `${newCandidateData.name} has been successfully added.`,
      className: "bg-gray-800 text-white border-gray-700",
    });
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setFilters({ experience: '', location: '', skills: '' });
  };

  const hasActiveFilters = searchTerm || Object.values(filters).some(f => f);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-4 md:p-6 space-y-6"
    >
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-100">Candidate Analytics</h1>
          <p className="text-gray-300">Manage and analyze your talent pool effectively.</p>
        </div>
        <AddCandidateDialog onAddCandidate={handleAddCandidate} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-gray-800/70 border-gray-700 home-section-card">
          <CardHeader>
            <CardTitle className="text-gray-100">Filter & Search Candidates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search by name, role, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 form-input bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              />
            </div>
            <CandidateFilters
              filters={filters}
              setFilters={setFilters}
              clearFilters={clearAllFilters}
              hasActiveFilters={hasActiveFilters}
            />
          </CardContent>
        </Card>
      </motion.div>

      <motion.p variants={itemVariants} className="text-gray-300">
        Showing {filteredCandidates.length} of {candidates.length} candidates.
      </motion.p>

      {filteredCandidates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCandidates.map((candidate, index) => (
            <CandidateCard key={candidate.id} candidate={candidate} index={index} />
          ))}
        </div>
      ) : (
        <motion.div variants={itemVariants} className="text-center py-12">
          <User className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-200 mb-2">No Candidates Found</h3>
          <p className="text-gray-400 mb-4">
            {hasActiveFilters ? "Try adjusting your search or filters." : "Add new candidates to get started."}
          </p>
          {hasActiveFilters && (
             <Button onClick={clearAllFilters} variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Clear All Filters
            </Button>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default CandidateAnalytics;