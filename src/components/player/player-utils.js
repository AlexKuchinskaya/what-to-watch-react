const O_TIME = 0;
const O_TIME_STRING = `0`;
const HOUR_IN_SECONDS = 3600;
const MINUTES_IN_HOUR = 60;
const INITIAL_PLAYER_VALUE = `00:00:00`;
export const setTime = (time) => {
  if (time === O_TIME) {
    return INITIAL_PLAYER_VALUE;
  }
  let videoTime;
  let hours = Math.floor(time / HOUR_IN_SECONDS);
  let minutes = Math.floor((time - hours * HOUR_IN_SECONDS) / MINUTES_IN_HOUR);
  let seconds = Math.floor(time - hours * HOUR_IN_SECONDS - minutes * MINUTES_IN_HOUR);
  let hourValue = hours;
  let minuteValue;
  let secondValue;

  if (minutes < 10) {
    minuteValue = `${O_TIME_STRING}${minutes}`;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = `${O_TIME_STRING}${seconds}`;
  } else {
    secondValue = seconds;
  }

  videoTime = `${hourValue}:${minuteValue}:${secondValue}`;
  return videoTime;
};
