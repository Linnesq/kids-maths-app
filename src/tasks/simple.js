const {
    getSimpleAddition,
    getSimpleMultiplication,
    getSimpleDivision,
    getSimpleSubtraction,
    getTimesTable,
    getDivision,
} = require('../utils/math-tasks');

const SYMBOLS = {
    ADD: "+",
    SUB: "−",
    MULT: "×",
    DIV: "÷",
};

const USERFILLS = {
    LEFT: 'left',
    RIGHT: 'right',
    RANDOM: 'random',
};

const getSimpleTasks = () => {
    return {
    "description": "Multi-choice arithemetic",
    "controls": [
        { "displayText": SYMBOLS.ADD, "taskType": "addition" },
        { "displayText": SYMBOLS.MULT, "taskType": "multiplication" },
        { "displayText": SYMBOLS.DIV, "taskType": "division" },
        { "displayText": SYMBOLS.SUB, "taskType": "subtraction" },
    ],
    "taskFunctions": {
        "addition": getSimpleAddition,
        "multiplication": getSimpleMultiplication,
        "division": getSimpleDivision,
        "subtraction" : getSimpleSubtraction,
    },
    "display": {
        "userFills": USERFILLS.RANDOM,
    },
};
};

const getTimesTablesTask = () => {
    return {
        "description": "times tables",
        "controls": [
            { "displayText": "2X", "taskType" : "multiplication", "range": 12, "factor": 2 },
            { "displayText": "3X", "taskType" : "multiplication", "range": 12, "factor": 3 },
            { "displayText": "4X", "taskType" : "multiplication", "range": 12, "factor": 4 },
            { "displayText": "5X", "taskType" : "multiplication", "range": 12, "factor": 5 },
            { "displayText": "10X", "taskType" : "multiplication", "range": 12, "factor": 10 },
        ],
        "taskFunctions": {
            "multiplication": getTimesTable,
        },
        "display": {
            "userFills": USERFILLS.RANDOM,
        },
    };
};

const getDivisionTasks = () => {
    const division = 'division';

    return {
        "description": division,
        controls: [
            { displayText: "÷2", taskType: division, range: 12, factor: 2 },
            { displayText: "÷3", taskType: division, range: 12, factor: 3 },
            { displayText: "÷4", taskType: division, range: 12, factor: 4 },
            { displayText: "÷5", taskType: division, range: 12, factor: 5 },
        ],
        taskFunctions: {
            [division]: getDivision,

        },
        display: {
            userFills: USERFILLS.RANDOM,
        },
    };
};

export { getSimpleTasks, getTimesTablesTask, getDivisionTasks };