import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
                days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        } else {
            timeLeft = {
                months: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatTime = (value) => {
        return String(value).padStart(2, '0');
    };

    return (
        <div className="countdown d-flex flex-wrap justify-content-center align-items-center gap-3 mt-5 font">
            <div><span className='text-danger'>{formatTime(timeLeft.months)}&nbsp;</span>months </div>
            <div><span className='text-danger'>{formatTime(timeLeft.days)}&nbsp;</span>days </div>
            <div><span className='text-danger'>{formatTime(timeLeft.hours)}&nbsp;</span>hours </div>
            <div><span className='text-danger'>{formatTime(timeLeft.minutes)}&nbsp;</span>minutes </div>
            <div><span className='text-danger'>{formatTime(timeLeft.seconds)}&nbsp;</span>seconds</div>
        </div>
    );
};

export default Countdown;
