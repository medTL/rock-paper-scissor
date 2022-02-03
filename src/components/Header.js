import React from 'react';

function Header({score}) {
  return (
      <div className='header-wrapper'>
          <div className='header-text'>
              <ul>
                  <li>ROCK</li>
                  <li>PAPER</li>
                  <li>SCISSORS</li>
              </ul>
          </div>
          <div className='header-score'>
              <span>SCORE</span>
              <p className='app-score'>{score}</p>
          </div>
      </div>
  );
}

export default Header;
