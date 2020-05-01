const {getSimpleTasks} = require('./simple.js');

test('tasks should not contain tasks with no function to generate them', () => {
    const simpleTasks = getSimpleTasks();
    const mappedTaskTypes = Object.keys(simpleTasks.taskFunctions);
    const controlTaskTypes = new Set(simpleTasks.controls.map(control => control.taskType));
    const mappedTaskTypesInControlTaskTypes = mappedTaskTypes.filter( item => controlTaskTypes.has(item));

    expect(mappedTaskTypes.length).toEqual(mappedTaskTypesInControlTaskTypes.length);
});