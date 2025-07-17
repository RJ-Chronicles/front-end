
import useStopwatchLogic from "./index.logic";

const Stopwatch = () => {  
    // Using the custom hook for stopwatch logic
    const { seconds, miliseconds, isRunning, startStopwatch, stopStopwatch, clearStopwatch } = useStopwatchLogic();
    return (
        <div>
            <h2>Stopwatch</h2>
            <p>Time: {seconds} seconds and {miliseconds} milliseconds</p>
            <button onClick={startStopwatch} disabled={isRunning}>{seconds > 0 || miliseconds > 0 ? 'Restart Stopwatch' : 'Start Stopwatch'}</button>
            <button onClick={stopStopwatch} disabled={!isRunning}>Stop Stopwatch</button>
            <button onClick={clearStopwatch}>Reset Stopwatch</button>
        </div>
    )
}

export default Stopwatch;