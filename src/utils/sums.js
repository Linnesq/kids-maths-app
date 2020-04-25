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
    const operator = "×";

    return { left, right, answer, operator };
};

const getSimpleDivision = () => {
    const values = [getRandomInt(10), getRandomInt(10)];
    const left = values.reduce((acc, cur) => acc * cur);
    const right = Math.max(...values);
    const answer = Math.min(...values);
    const operator = '÷';

    return { left, right, answer, operator };
};

const getSimpleSubtraction = () => {
    const values = [getRandomInt(20), getRandomInt(20)];
    const left = Math.max(...values);
    const answer = Math.min(...values); 
    const right = left - answer;
    const operator = "−"

    return { left, right, answer, operator };
};


export { getSimpleAddition, getSimpleMultiplication, getSimpleDivision, getSimpleSubtraction };