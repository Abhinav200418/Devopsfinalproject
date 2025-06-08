import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const CandidateFilters = ({ filters, setFilters, clearFilters, hasActiveFilters }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div>
        <Label htmlFor="filter-experience" className="text-gray-300">Experience</Label>
        <Input
          id="filter-experience"
          placeholder="e.g., 5 years"
          value={filters.experience}
          onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
          className="form-input bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
        />
      </div>
      <div>
        <Label htmlFor="filter-location" className="text-gray-300">Location</Label>
        <Input
          id="filter-location"
          placeholder="e.g., San Francisco"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="form-input bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
        />
      </div>
      <div>
        <Label htmlFor="filter-skills" className="text-gray-300">Skills</Label>
        <Input
          id="filter-skills"
          placeholder="e.g., React, Node.js"
          value={filters.skills}
          onChange={(e) => setFilters({ ...filters, skills: e.target.value })}
          className="form-input bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
        />
      </div>
      <div className="flex items-end">
        {hasActiveFilters && (
          <Button
            onClick={clearFilters}
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary/10"
          >
            <X className="w-4 h-4 mr-2" />
            Clear Filters
          </Button>
        )}
      </div>
    </div>
  );
};

export default CandidateFilters;