const getRandomInt = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  const randomInt = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  return randomInt;
};
export default getRandomInt;
