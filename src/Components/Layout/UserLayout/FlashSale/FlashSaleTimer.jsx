import { useState } from "react";
import PropTypes from 'prop-types';
const FlashSaleTimer = ({ targetData }) => {
    const calculateTimeLeft = () => {
        const deference = targetData.getTime() - new Date().getTime();
        let timeLeft = {};
        if (deference > 0) {
            timeLeft = {
                days: Math.floor(deference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((deference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((deference / (1000 / 60)) % 60),
                second: Math.floor((deference / 1000) / 60)
            };
        }
        return timeLeft;
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const formatTime = (value) => {
        return value < 10 ? `0${value}` : value;
    }
    setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
    }, 1000);
    return (
        <div>
          <div>
          <div>
                <h2>One Sale Now</h2>
            </div>
            <div>
                <div>
                    <h3>Ending in</h3>
                </div>
                <div>
                    {timeLeft.days} days {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                </div>
            </div>
          </div>
        </div>
    );
};
FlashSaleTimer.propTypes = {
    targetData: PropTypes.targetData.object
}
export default FlashSaleTimer;