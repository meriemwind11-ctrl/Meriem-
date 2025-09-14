
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'Question', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
    setFormState({ name: '', email: '', subject: 'Question', message: '' });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Contactez-nous</h1>
      <div className="p-8 bg-white dark:bg-dark-secondary rounded-xl shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Nom</label>
            <input type="text" name="name" id="name" value={formState.name} onChange={handleChange} required className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-transparent" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input type="email" name="email" id="email" value={formState.email} onChange={handleChange} required className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-transparent" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">Sujet</label>
            <select name="subject" id="subject" value={formState.subject} onChange={handleChange} className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-dark-secondary">
              <option>Question</option>
              <option>Réclamation</option>
              <option>Collaboration</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea name="message" id="message" rows={4} value={formState.message} onChange={handleChange} required className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-transparent" />
          </div>
          <button type="submit" className="w-full py-3 px-4 bg-accent text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Envoyer
          </button>
        </form>
      </div>
      {isSent && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-success text-white py-2 px-6 rounded-full shadow-lg">
          Votre message a été envoyé ! Nous vous répondrons sous 48h.
        </div>
      )}
    </div>
  );
};

export default ContactPage;
