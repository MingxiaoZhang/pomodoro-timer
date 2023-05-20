import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
    const [time, setTime] = useState(1500); // 1500 seconds = 25 minutes
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                if (time > 0) {
                    setTime(time - 1);
                } else {
                    // Timer is finished
                    clearInterval(interval);
                    setIsRunning(false);
                    alert('Timer has finished!'); // Display an alert message
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning, time]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setTime(1500); // Reset back to 25 minutes
        setIsRunning(false);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    };

    return (
        <div className="p-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Pomodoro Timer</h1>
            <div className="text-6xl mb-6">{formatTime(time)}</div>
            <div className="space-x-4">
                {!isRunning && (
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={startTimer}
                    >
                        Start
                    </button>
                )}
                {isRunning && (
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded"
                        onClick={stopTimer}
                    >
                        Stop
                    </button>
                )}
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={resetTimer}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default PomodoroTimer;
