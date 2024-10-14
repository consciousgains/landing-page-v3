import React from 'react';
import { Dumbbell, LineChart, Handshake } from 'lucide-react';
import EmailForm from './components/EmailForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex flex-col items-center justify-center text-white p-4">
      <header className="mb-8 text-center">
        <img src="/avatar.svg" alt="Avatar" className="w-24 h-24 mx-auto mb-4" />
        <div className="flex items-center justify-center">
          <img src="/logo.svg" alt="Logo" className="w-12 h-12 mr-2" />
          <h1 className="text-3xl font-bold">Conscious Gains</h1>
        </div>
      </header>
      
      <main className="text-center max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">Your Personal AI Fitness Coach</h2>
        <p className="text-xl mb-8">Get ready to transform your fitness journey with personalized AI-powered coaching. Launching soon!</p>
        
        <div className="mb-8 w-full max-w-md mx-auto">
          <EmailForm />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <Dumbbell className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Personalized Workouts</h3>
            <p>Tailored exercise plans based on your goals and fitness level</p>
          </div>
          <div>
            <LineChart className="w-12 h-12 mx-auto mb-4 text-green-400" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
            <p>Get data-driven recommendations to optimize your performance</p>
          </div>
          <div>
            <Handshake className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p>Access your virtual coach anytime, anywhere</p>
          </div>
        </div>
      </main>
      
      <footer className="mt-12 text-sm opacity-75">
        <p>&copy; 2024 Conscious Gains. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;