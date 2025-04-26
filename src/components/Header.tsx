
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex h-12 w-full items-center justify-end px-4">
      <div className="flex items-center">
        <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
          alt="Profile"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
