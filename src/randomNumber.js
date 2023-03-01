const getRandomInt = (min, max) => {
  const randomInt = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
  return randomInt;
};
export default getRandomInt;
