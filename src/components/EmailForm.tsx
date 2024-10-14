import React, { useState } from 'react';
import axios from 'axios';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setIsError(false);

    try {
      const response = await axios.post('/.netlify/functions/subscribe', { email });
      setMessage(response.data.message);
      setEmail('');
    } catch (error) {
      setIsError(true);
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data.error || 'An error occurred. Please try again.');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center">
      <input
        className="w-full sm:w-auto flex-grow px-4 py-2 text-black rounded-l-md focus:outline-none"
        type="email"
        placeholder="Enter your email"
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        className="w-full sm:w-auto mt-2 sm:mt-0 px-6 py-2 bg-green-500 text-white font-semibold rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Subscribing...' : 'Notify Me →'}
      </button>
      {message && (
        <p className={`mt-2 ${isError ? 'text-red-400' : 'text-green-400'}`}>
          {message}
        </p>
      )}
    </form>
  );
};

export default EmailForm;