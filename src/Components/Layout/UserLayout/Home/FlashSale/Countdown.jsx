import { useState } from "react";
import FlashSale from "./FlashSale";


const CountDown = () => {
    const [endDate, setEndDate] = useState(new Date());
    const [countdownEndDate, setCountdownEndDate] = useState(new Date());
  
    const handleDateChange = (event) => {
      setEndDate(new Date(event.target.value));
    };
  
    const startCountdown = () => {
      setCountdownEndDate(endDate);
    };
    const cancelCountdown = () => {
      setCountdownEndDate(null);
    };
    // const onCountdownEnd = () => {
    //   // Action to be triggered when countdown ends
    //   alert('Countdown has ended!');
    // };
    return (
        <div>
             <div>
      <h1>Countdown Clock</h1>
      <div>
        <input type="datetime-local" value={endDate.toISOString().slice(0, 16)} onChange={handleDateChange} />
        <button onClick={startCountdown}>Start Countdown</button>
        <button onClick={cancelCountdown}>Cancel Countdown</button>
      </div>
      {countdownEndDate && <FlashSale targetDate={countdownEndDate} />}
    </div>
        </div>
    );
};

export default CountDown;