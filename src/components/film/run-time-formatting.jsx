const formatRunTime = (timeInMinutes) => {
  let runTimeInText = `${timeInMinutes} + m`;
  if (timeInMinutes > 60) {
    runTimeInText = `${Math.floor(timeInMinutes / 60)}h ${timeInMinutes % 60}m`;
  } else {
    runTimeInText = `${timeInMinutes % 60}m`;
  }
  return runTimeInText;
};

export default formatRunTime;
