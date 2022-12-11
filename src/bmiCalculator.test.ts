import {bmiCalculator} from './bmiCalculator';

test('1+1 = 2',()=>expect(1+1).toBe(2));

describe('bmiCalculator',()=>{
    test('calculateBmi should be a function',()=>
    //bmiCalculator();
    expect(typeof bmiCalculator).toBe('function'))
});
