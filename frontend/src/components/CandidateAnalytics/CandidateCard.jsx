import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Briefcase, DollarSign, Star } from 'lucide-react';

const CandidateCard = ({ candidate, index }) => {
  return (
    <motion.div
      key={candidate.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="h-full"
    >
      <Card className="candidate-card h-full bg-gray-800/70 border-gray-700 hover:border-primary">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg">
              {candidate.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-100 truncate">
                {candidate.name}
              </h3>
              <p className="text-sm text-primary mb-2">{candidate.role}</p>
              
              <div className="space-y-1.5 text-sm text-gray-400">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{candidate.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{candidate.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{candidate.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{candidate.experience}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{candidate.salary}</span>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-700">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-300">Rating</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300 ml-1">{candidate.rating}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-300 font-medium mb-1">Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {candidate.skills.split(',').map(s => s.trim()).slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {candidate.skills.split(',').length > 3 && (
                      <span className="px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded-full">
                        +{candidate.skills.split(',').length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CandidateCard;