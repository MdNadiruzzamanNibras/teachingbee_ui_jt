import { useEffect, useState } from 'react';

const CountDown = () => {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const targetDate = new Date('2023-11-09T13:59:59')
     useEffect(() => {
    const updateCountdown = () => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;
      
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(updateCountdown, 1000);

    updateCountdown(); 

    return () => clearInterval(intervalId);
  }, [targetDate]);
    return (
        <div className='container mx-auto px-1'>
            <div className='pb-6 pt-2'>
                <p className='text-center my-2 text-lg'>Special Offer: Get additional <span className='font-bold'>20% Off</span> on Lifetime and Yearly subscription. Use coupon code <span className='font-bold'>DG20</span> at checkout.</p>
                <div className='flex justify-center items-center my-4 uppercase'>
                 
                <div className='mr-4 text-center'>
                    <p className='text-2xl font-bold'>{countdown.days}:</p>
                    <p className='text-sm'>days</p>
                </div>
                <div className='mr-4 text-center'>
                    <p className='text-2xl font-bold'>{countdown.hours}:</p>
                    <p className='text-sm'>Hours</p>
                </div>
                <div className='mr-4 text-center'>
                    <p className='text-2xl font-bold'>{countdown.minutes}:</p>
                    <p className='text-sm'>Minutes</p>
                </div>
                <div className='mr-4 text-center'>
                    <p className='text-2xl font-bold'>{countdown.seconds}</p>
                    <p className='text-sm'>Seconds</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CountDown;