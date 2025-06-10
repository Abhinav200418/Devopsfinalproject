
// === FRONTEND (React) ===
// File: AddCandidateForm.jsx

import React, { useState } from 'react';

const AddCandidateForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', location: '',
    currentRole: '', experience: '', expectedSalary: '',
    skills: [''], education: '', linkedinUrl: '',
    portfolioUrl: '', availability: 'immediate', notes: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const candidateData = {
      ...formData,
      skills: formData.skills.filter(skill => skill.trim()),
      dateAdded: new Date().toISOString(),
      status: 'active'
    };

    try {
      const response = await fetch('http://3.110.136.152:5000/api/add-candidate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(candidateData)
      });
      const result = await response.json();
      if (response.ok) {
        alert('Candidate added successfully');
        setFormData({
          name: '', email: '', phone: '', location: '',
          currentRole: '', experience: '', expectedSalary: '',
          skills: [''], education: '', linkedinUrl: '',
          portfolioUrl: '', availability: 'immediate', notes: ''
        });
      } else {
        alert('Error: ' + result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} required /><br />
      <input type="email" placeholder="Email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} required /><br />
      <input type="text" placeholder="Phone" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} required /><br />
      <input type="text" placeholder="Location" value={formData.location} onChange={(e) => handleChange('location', e.target.value)} required /><br />
      <input type="text" placeholder="Current Role" value={formData.currentRole} onChange={(e) => handleChange('currentRole', e.target.value)} required /><br />
      <input type="text" placeholder="Experience" value={formData.experience} onChange={(e) => handleChange('experience', e.target.value)} required /><br />
      <input type="text" placeholder="Expected Salary" value={formData.expectedSalary} onChange={(e) => handleChange('expectedSalary', e.target.value)} required /><br />
      <input type="text" placeholder="Education" value={formData.education} onChange={(e) => handleChange('education', e.target.value)} /><br />
      <input type="text" placeholder="LinkedIn URL" value={formData.linkedinUrl} onChange={(e) => handleChange('linkedinUrl', e.target.value)} /><br />
      <input type="text" placeholder="Portfolio URL" value={formData.portfolioUrl} onChange={(e) => handleChange('portfolioUrl', e.target.value)} /><br />
      <select value={formData.availability} onChange={(e) => handleChange('availability', e.target.value)}>
        <option value="immediate">Immediate</option>
        <option value="2weeks">2 Weeks</option>
        <option value="1month">1 Month</option>
      </select><br />
      <textarea placeholder="Notes" value={formData.notes} onChange={(e) => handleChange('notes', e.target.value)}></textarea><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddCandidateForm;


