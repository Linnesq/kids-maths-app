const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

const getSimpleAddition = () => {
    const left = getRandomInt(12);
    const right = getRandomInt(12);
    const answer = left + right;
    const operator = "+";

    return { left, right, answer, operator};
};

const getSimpleMultiplication = () => {
    const left = getRandomInt(12);
    const right = getRandomInt(12);
    const answer = left * right;
    const operator = "x";

    return { left, right, answer, operator};
};


export { getSimpleAddition, getSimpleMultiplication };