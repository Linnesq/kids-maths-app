const { getSimpleAddition,
    getSimpleMultiplication,
    getSimpleDivision,
    getSimpleSubtraction } = require('./sums');
let mockMath;

describe('sums module', () => {

    beforeEach(() => mockMath = jest
        .spyOn(global.Math, 'random')
        .mockReturnValue(0.2));

    afterEach(() => mockMath.mockRestore());

    it('getSimpleAddition should return an expected object', () => {
        expect(getSimpleAddition()).toMatchObject({
            left: 3,
            right: 3,
            answer: 6,
            operator: '+'
        });
    });

    it('getSimpleMultiplication should return an expected object', () => {
        expect(getSimpleMultiplication()).toMatchObject({
            left: 3,
            right: 3,
            answer: 9,
            operator: '×'
        });
    });

    it('getSimpleDivision should return an expected object', () => {
        expect(getSimpleDivision()).toMatchObject({
            left: 9,
            right: 3,
            answer: 3,
            operator: '÷'
        });
    });

    it('getSimpleSubtraction should return an expected object', () => {
        expect(getSimpleSubtraction()).toMatchObject({
            left: 5,
            right: 0,
            answer: 5,
            operator: '−'
        });
    });
});