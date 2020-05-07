const getRandomInt = (min, max) => {
    // FIX getRandomInt(0, 2) will only return 0 or 1, not 0, 1, 2
    return Math.floor(Math.random() * max) + min;
};

const getSimpleAddition = (userFills = 'right') => {
    const left = getRandomInt(1, 12);
    const right = getRandomInt(1, 12);
    const answer = left + right;
    const operator = "+";
    userFills = userFills === 'random' ? getUserFills() : userFills;

    return { left, right, answer, operator, userFills };
};

const getSimpleMultiplication = (userFills='right') => {
    const left = getRandomInt(1, 12);
    const right = getRandomInt(1, 12);
    const answer = left * right;
    const operator = "×";

    userFills = userFills === 'random' ? getUserFills() : userFills;

    return { left, right, answer, operator, userFills };
};

const getSimpleDivision = (userFills='right') => {
    const values = [getRandomInt(1, 10), getRandomInt(1, 10)];
    const left = values.reduce((acc, cur) => acc * cur);
    const right = Math.max(...values);
    const answer = Math.min(...values);
    const operator = '÷';

    userFills = userFills === 'random' ? getUserFills() : userFills;

    return { left, right, answer, operator, userFills };
};

const getDivision = (userFills = 'answer', range = 10, factor = 2) => {
    const answer = getRandomInt(1, range);
    const randomUserFills = ['left', 'answer'][getRandomInt(0, 2)];

    return {
        left: factor * answer,
        right: factor,
        answer,
        operator: '÷',
        userFills: userFills === 'random' ? randomUserFills : userFills,
    };
};

const getSimpleSubtraction = (userFills='right') => {
    const values = [getRandomInt(1, 20), getRandomInt(1, 20)];
    const left = Math.max(...values);
    const answer = Math.min(...values); 
    const right = left - answer;
    const operator = "−";

    userFills = userFills === 'random' ? getUserFills() : userFills;

    return { left, right, answer, operator, userFills };
};

const getTimesTable = (userFills = 'answer', range = 10, factor = 2) => {
    const right = getRandomInt(1, range);
    // todo userfills can be right or answer if left is always the multiplier
    const randomUserFills = ['right', 'answer'][getRandomInt(0, 2)];
    return {
        left: factor,
        right: right,
        answer: factor * right,
        operator: '×',
        userFills: userFills === 'random' ? randomUserFills : userFills,
    };
};

const getUserFills = () => {
    return ['left', 'right', 'answer'][getRandomInt(1, 3) - 1];
};

export { 
    getSimpleAddition, 
    getSimpleMultiplication, 
    getSimpleDivision, 
    getSimpleSubtraction, 
    getTimesTable,
    getDivision
 };