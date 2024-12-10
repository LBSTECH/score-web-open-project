import React from 'react';

const Logo = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="absolute z-50 left-4 top-4 p-4 ">
      <img className=' w-64' src="/images/logo-road-score.png" alt="Logo" onClick={refreshPage} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default Logo;
