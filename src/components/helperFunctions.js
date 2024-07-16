const monthsEnglish = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const secondsToMins = (duration) => {
  const minutes = Math.floor(duration / 60);
  //const secs = duration % 60;
  return `${minutes} minutes`;
};

const getDate = (date) => {
  const dateObj = new Date(date);
  const finalDate = `${monthsEnglish[dateObj.getMonth()].substring(
    0,
    3
  )} ${dateObj.getUTCDate()}, ${dateObj.getFullYear()}`;
  return finalDate;
};

export { secondsToMins, getDate };
