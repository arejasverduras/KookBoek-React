export const randomIndex = (arr: {}[]):number => {
    return Math.floor(Math.random() * arr.length)
}

export const capitalize =(word:string):string => {
    let newString;
        let stringArray = word.split('');
        stringArray[0] = stringArray[0].toUpperCase();
    newString = stringArray.join('');

    return newString;
}