import React from 'react';
import Countdown from 'react-countdown';
import rupee from '../assets/ruppee.png'
const App: React.FC = () => {
  const countdownRenderer = ({ days, hours, minutes, seconds }: any) => {
    return (
      <span>
        {days} days {hours}:{minutes}:{seconds}
      </span>
    );
  };

  return (
    <div className='bg-gray-100 dark:bg-inherit min-h-10 min-w-full mt-8 flex flex-col items-center justify-center sm:flex-row sm:justify-between py-24 px-8 m-10 mb-32'>
      <div className="countdown flex flex-col items-center justify-center flex-1">
        <span>
        <h1 className='text-3xl font-extrabold'>Cash Prize up to ₹10 lakhs</h1>
        <p className='text-gray-400'>Hackathon starts in:</p>
        </span>
        <span className='bg-green-200 text-3xl font-bold my-5 dark:bg-green-600 p-5 rounded-sm'>
        <Countdown 
          date={new Date('2024-07-27T12:00:00')}
          renderer={countdownRenderer}
        />
        </span>
      </div>
      <div className="image flex-1">
        <img className='' src={rupee} alt="" />
      </div>
    </div>
  );
};

export default App;
