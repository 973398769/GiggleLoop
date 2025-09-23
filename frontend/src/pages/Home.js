import React, { useState } from 'react';
import Header from '../components/Header';
import Generator from '../components/Generator';
import Preview from '../components/Preview';

const Home = () => {
  const [generatedUrl, setGeneratedUrl] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Turn Your Ideas into <span className="text-indigo-600">Giggles</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Describe your funny GIF idea and watch it come to life in seconds!
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-12">
          <Generator onGenerate={setGeneratedUrl} />
          <Preview url={generatedUrl} />
        </div>
      </main>
      
      <footer className="mt-16 py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} GiggleLoop. All giggles reserved.</p>
      </footer>
    </div>
  );
};

export default Home;