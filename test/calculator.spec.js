import Calculator from '../src/calculator';

describe('Calculator', () => {

    describe('add', () => {

        it('should perform addtion', () => {
            const result = Calculator.add(1, 1);

            expect(result).toEqual(2);
        });
    });
});
