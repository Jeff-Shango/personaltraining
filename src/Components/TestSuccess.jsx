import React from 'react';

const TestSuccess = () => {
  const handleOnClick = () => {
    window.location.href = 'http://localhost:3000';
  };

  return (
    <div className='succesfulContainer'>
      <h2>Thanks for buying a session, See you soon!</h2>
      <button id="successfulButton" onClick={handleOnClick}>
        Go back home!
      </button>
    </div>
  );
};

export default TestSuccess;
