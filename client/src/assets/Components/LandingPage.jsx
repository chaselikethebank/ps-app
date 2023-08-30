import React from 'react';
import '../style/landing.css';

const LandingPage = ({ loggedIn, setLoggedIn }) => {
  const questionText = "When do I water my lawn?";
  const answerText = "Before it dies... and for 18 minutes, 3 times a week";

  const handleLoginClick = () => {
    setLoggedIn(true);
  };

  return (
    <div>
        {/* <div className='triangle'></div> */}
      <div className="landing-content">
        <div className="text-container">
          <h1 className="question">{questionText}</h1>
          <h2 className="answer">{answerText}</h2>
       
        
      </div>
      <div className="start-side">

        <h2>Get Started</h2>
        <div className='btn-container'>
          <button className="get-started" onClick={handleLoginClick}>
            Login
          </button>
          <button className="get-started" onClick={handleLoginClick}>Sign up</button>
          </div>
      <div className="footer">
        <p className="footer-text">
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
        </p>
      </div>
      </div>

      </div>
    </div>
  );
};

export default LandingPage;
