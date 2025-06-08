
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'; 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      className="border-b border-gray-700"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 px-6 text-left text-lg font-medium text-gray-100 hover:bg-gray-700/50 transition-colors duration-200 faq-accordion-trigger"
        whileTap={{ scale: 0.98 }}
      >
        {question}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden faq-accordion-content"
      >
        <div className="py-5 px-6 text-gray-300 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userQuestion, setUserQuestion] = useState('');

  const faqs = [
    {
      question: "What is TalentHuntPro?",
      answer: "TalentHuntPro is a comprehensive HR consulting and talent intelligence platform designed to help organizations find, attract, and retain top talent globally. We offer data-driven insights and strategic solutions for workforce planning."
    },
    {
      question: "How can TalentHuntPro help my company?",
      answer: "Our platform provides tools for candidate analytics, market mapping, competitor analysis, and job role intelligence. This helps you make informed hiring decisions, understand market trends, and build a stronger workforce."
    },
    {
      question: "Is my data secure on TalentHuntPro?",
      answer: "Yes, data security is our top priority. We use industry-standard encryption and security protocols to protect your information. For production environments, we recommend Supabase for robust data management."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer comprehensive support through various channels. You can submit your questions through the form on this page, or contact our dedicated support team for more complex issues."
    },
    {
      question: "Can I integrate TalentHuntPro with my existing HR systems?",
      answer: "While the current version focuses on standalone capabilities, we are actively working on API integrations for seamless connection with popular HR management systems. Stay tuned for updates!"
    }
  ];

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (!userEmail.trim() || !userQuestion.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide both your email and your question.",
        variant: "destructive",
      });
      return;
    }

    const newFaqSubmission = {
      email: userEmail,
      question: userQuestion,
      submittedAt: new Date().toISOString()
    };

    const existingSubmissions = JSON.parse(localStorage.getItem('faqSubmissions') || '[]');
    existingSubmissions.push(newFaqSubmission);
    localStorage.setItem('faqSubmissions', JSON.stringify(existingSubmissions));

    toast({
      title: "Question Submitted!",
      description: "Thank you for your question. We'll get back to you shortly.",
      className: "bg-gray-800 text-white border-gray-700",
    });
    setUserEmail('');
    setUserQuestion('');
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };


  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen py-12 px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <HelpCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-300">Find answers to common questions about TalentHuntPro.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-gray-800/70 rounded-xl shadow-2xl overflow-hidden faq-accordion-item mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-gray-800/70 home-section-card border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-gray-100">Still Have Questions?</CardTitle>
              <p className="text-center text-gray-300">Submit your query, and we'll get back to you as soon as possible.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleQuestionSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Your Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="form-input bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="question" className="block text-sm font-medium text-gray-200 mb-1">Your Question</Label>
                  <Textarea
                    id="question"
                    value={userQuestion}
                    onChange={(e) => setUserQuestion(e.target.value)}
                    placeholder="Type your question here..."
                    rows={5}
                    className="form-input bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                    required
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
                    <Send className="w-5 h-5 mr-2" />
                    Submit Question
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQPage;
