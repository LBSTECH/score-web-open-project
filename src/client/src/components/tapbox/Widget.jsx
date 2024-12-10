import React from 'react';

const Widget = ({ title, score, content }) => {
  return (
    <div className="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{title}</h5>
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{score}</span>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {/* Map through content to display list items */}
          {content.map((item, index) => (
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {/* Insert image or icon here */}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {item}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Widget;
