const generateRandomArray = (length) => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomArray = [];

  for (let i = 0; i < length; i++) {
    const randomLength = Math.floor(Math.random() * 5) + 1;
    let randomString = "";
    for (let j = 0; j < randomLength; j++) {
      const randomChar =
        characters[Math.floor(Math.random() * characters.length)];
      randomString += randomChar;
    }
    randomArray.push(randomString);
  }

  return randomArray;
};

export default generateRandomArray;
