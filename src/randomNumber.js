const getRandomInt = (max) => {
  const randomInt = Math.floor(Math.random() * max);
  return randomInt;
};
export default getRandomInt;

const getRandomNum = (min, max) => {
  const randomNum = Math.floor(
    Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)
  );
  return randomNum;
};
export { getRandomNum };
