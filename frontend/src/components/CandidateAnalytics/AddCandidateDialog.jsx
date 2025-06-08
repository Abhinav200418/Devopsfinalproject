import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const AddCandidateDialog = ({ onAddCandidate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newCandidate, setNewCandidate] = useState({
    name: '', email: '', phone: '', role: '', experience: '',
    location: '', skills: '', salary: '', rating: 5
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCandidate(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const candidateData = {
      ...newCandidate,
      id: Date.now(),
      avatar: newCandidate.name.split(' ').map(n => n[0]).join('').toUpperCase(),
      rating: parseFloat(newCandidate.rating)
    };
    onAddCandidate(candidateData);
    setNewCandidate({
      name: '', email: '', phone: '', role: '', experience: '',
      location: '', skills: '', salary: '', rating: 5
    });
    setIsOpen(false);
    toast({
      title: "Candidate added!",
      description: "New candidate has been successfully added.",
      className: "bg-gray-800 text-white border-gray-700",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add Candidate
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-gray-800 border-gray-700 text-gray-100">
        <DialogHeader>
          <DialogTitle className="text-gray-100">Add New Candidate</DialogTitle>
          <DialogDescription className="text-gray-400">
            Enter candidate information to add them to your talent pool.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Enter full name' },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter email address' },
              { label: 'Phone', name: 'phone', type: 'tel', placeholder: 'Enter phone number' },
              { label: 'Role', name: 'role', type: 'text', placeholder: 'Enter job role' },
              { label: 'Experience', name: 'experience', type: 'text', placeholder: 'e.g., 5 years' },
              { label: 'Location', name: 'location', type: 'text', placeholder: 'Enter location' },
              { label: 'Expected Salary', name: 'salary', type: 'text', placeholder: 'e.g., $120,000' },
              { label: 'Rating (1-5)', name: 'rating', type: 'number', min: 1, max: 5, step: 0.1 },
            ].map(field => (
              <div key={field.name} className="space-y-1">
                <Label htmlFor={field.name} className="text-gray-300">{field.label}</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={newCandidate[field.name]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  min={field.min} max={field.max} step={field.step}
                  className="form-input bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                  required
                />
              </div>
            ))}
          </div>
          <div className="space-y-1">
            <Label htmlFor="skills" className="text-gray-300">Skills (comma-separated)</Label>
            <Input
              id="skills"
              name="skills"
              value={newCandidate.skills}
              onChange={handleInputChange}
              placeholder="e.g., React, Node.js, Python"
              className="form-input bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              required
            />
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="border-gray-600 text-gray-300 hover:bg-gray-700">
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">Add Candidate</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCandidateDialog;