const { 
    getSimpleAddition,
    getSimpleMultiplication,
    getSimpleDivision,
    getSimpleSubtraction
 } = require('./math-tasks.js');
let mockMath;

describe('MathTasks module', () => {

    beforeEach(() => mockMath = jest
        .spyOn(global.Math, 'random')
        .mockReturnValue(0.2));

    afterEach(() => mockMath.mockRestore());

    it('getSimpleAddition should return an expected object', () => {
        expect(getSimpleAddition()).toMatchSnapshot();
    });

    it('userFills random, getSimpleAddition should return an expected object', () => {
        expect(getSimpleAddition('random')).toMatchSnapshot();
    });

    it('getSimpleMultiplication should return an expected object', () => {
        expect(getSimpleMultiplication()).toMatchSnapshot();
    });

    it('getSimpleDivision should return an expected object', () => {
        expect(getSimpleDivision()).toMatchSnapshot();
    });

    it('getSimpleSubtraction should return an expected object', () => {
        expect(getSimpleSubtraction()).toMatchSnapshot();
    });
});