const getRandomNumber = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  const randomInt = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return randomInt;
};
export default getRandomNumber;
