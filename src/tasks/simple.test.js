const each = require('jest-each').default
const { 
    getSimpleTasks,
    getTimesTablesTask,
    getDivisionTasks,
 } = require('./simple.js');

 const functionsToTest = [getSimpleTasks, getTimesTablesTask, getDivisionTasks];

 each([
     [getSimpleTasks()], [getTimesTablesTask()], [getDivisionTasks()]
    ])
    .test('tasks should not contain tasks with no function to generate them', (underTest) => {
        const mappedTaskTypes = Object.keys(underTest.taskFunctions);
        const controlTaskTypes = new Set(underTest.controls.map(control => control.taskType));
        const mappedTaskTypesInControlTaskTypes = mappedTaskTypes.filter( item => controlTaskTypes.has(item));
        
        expect(mappedTaskTypes.length).toEqual(mappedTaskTypesInControlTaskTypes.length);
});