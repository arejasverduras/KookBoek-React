import { capitalize, randomIndex } from "./recipehFeatures";

test('should convert a lowercase string to a capitalized string', ()=>{
    //arrange
    const input = "bladie";
    const expected = "Bladie";

    //act
    const actual = capitalize(input);

    //assert
    expect(actual).toBe(expected);
});

test('should convert a mixedCase string to a capitalized string', ()=>{
    //arrange
    const input = "blAdie";
    const expected = "Bladie";

    //act
    const actual = capitalize(input);

    //assert
    expect(actual).toBe(expected);
});

test('should return an empty sting if an empy imput is provided', ()=> {
        //arrange
        const input = "";
        const expected = "";
    
        //act
        const actual = capitalize(input);
    
        //assert
        expect(actual).toBe(expected);
})

//test randomIndex

test ('should return a random number between 0 & the length of the input array', ()=>{
    const input = [{},{},{},{},{}]
    const inputLength = input.length;
    // console.log(inputLength);
    
    //act
    const actual = randomIndex(input);
    // console.log(actual); 

    //assert
    expect(actual).toBeLessThanOrEqual(inputLength);
    expect(actual).toBeGreaterThanOrEqual(0);
})