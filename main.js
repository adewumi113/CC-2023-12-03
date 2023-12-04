
// https://www.codewars.com/kata/5822d89270ca28c85c0000f3

// DESCRIPTION:
// Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.
// Ex:
// scramble('abcd', [0,3,1,2]) -> 'acdb'
// The string that you will be returning back will have: 'a' at index 0, 'b' at index 3, 'c' at index 1, 'd' at index 2, because the order of those characters maps to their corresponding numbers in the index array.
// In other words, put the first character in the string at the index described by the first element of the array
// You can assume that you will be given a string and array of equal length and both containing valid characters (A-Z, a-z, or 0-9).

// scramble('abcd', [0,3,1,2]) -> 'acdb' --> acdb


function scramble (str, arr) {
    //create an empty array
    let newArray = [];
    //loop through the string 
    for(i=0; i<str.length;i++){
        //to get new array, put the character at the current position of str and set the value equal to the index of the newArray at that position  
        newArray[arr[i]] = str[i]
    }
    //use join() to convert newArray to string
    return newArray.join('')
}
scramble('abcd', [0,3,1,2]) //acdb