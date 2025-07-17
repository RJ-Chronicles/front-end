import { useState } from "react";

const useStopwatchLogic = ()=> {
    const [seconds, setSeconds] = useState(0);
    const [miliseconds, setMilliseconds] = useState(0); 
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);

    const startStopwatch = () => {
        if (isRunning) {
            console.log('Stopwatch is already running');
            return;
        }
        console.log('Starting stopwatch');
        setIsRunning(true);
        const id = setInterval(() => {
            setMilliseconds(prev => {
                if (prev >= 900) {
                    setSeconds(prevSec => prevSec + 1);
                    return 0;
                }
                return prev + 100;
            });
        }, 100);
        setIntervalId(id);
    }

    const stopStopwatch = () => {
        if (!isRunning) {
            console.log('Stopwatch is not running');
            return;
        }
        console.log('Stopping stopwatch');
        setIsRunning(false);
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }   

    const clearStopwatch = () => {
        console.log('Resetting stopwatch');
        setSeconds(0);
        setMilliseconds(0);
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
        setIsRunning(false);
    }

    //this code is unwanted, but to insure that husky hooks does not fail

    return {
        seconds,
        miliseconds,
        isRunning,
        startStopwatch,
        stopStopwatch,
        clearStopwatch
    };
}

export default useStopwatchLogic;