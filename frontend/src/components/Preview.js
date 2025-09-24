import React from 'react';

const Preview = ({ url }) => {
  if (!url) {
    return (
      <div className="flex items-center justify-center w-full h-64 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
        <div className="text-gray-500 text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="mt-2">Your GIF will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg w-full max-w-md">
        <img 
          src={url} 
          alt="Generated GIF" 
          className="w-full h-auto"
        />
      </div>
      
      <div className="mt-4 flex space-x-3">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Download
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
          Share
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
          Regenerate
        </button>
      </div>
    </div>
  );
};

export default Preview;