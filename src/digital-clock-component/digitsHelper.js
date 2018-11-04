


const digitsToSegment = [{
        "a": true,
        "b": true,
        "c": true, //0
        "d": true,
        "e": true,
        "f": true,
        "g": false
    },
    {
        "a": false,
        "b": true,
        "c": true, //1
        "d": false,
        "e": false,
        "f": false,
        "g": false
    },
    {
        "a": true,
        "b": true,
        "c": false, //2
        "d": true,
        "e": true,
        "f": false,
        "g": true
    },
    {
        "a": true,
        "b": true,
        "c": true,
        "d": true, //3
        "e": false,
        "f": false,
        "g": true
    },
    {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false, //4
        "f": true,
        "g": true
    },
    {
        "a": true,
        "b": false,
        "c": true,
        "d": true, //5
        "e": false,
        "f": true,
        "g": true
    },
    {
        "a": true,
        "b": false,
        "c": true, //6
        "d": true,
        "e": true,
        "f": true,
        "g": true
    },
    {

        "a": true,
        "b": true,
        "c": true, //7
        "d": false,
        "e": false,
        "f": false,
        "g": false
    },
    {

        "a": true,
        "b": true,
        "c": true, //8
        "d": true,
        "e": true,
        "f": true,
        "g": true
    },
    {
        "a": true,
        "b": true,
        "c": true, //9
        "d": true,
        "e": false,
        "f": true,
        "g": true
    }

]


export const convertDigitsToSegment = number => {
   
    if (number < 0 || number > 9)
        throw new Error('Invalid')
    return digitsToSegment[number];
}