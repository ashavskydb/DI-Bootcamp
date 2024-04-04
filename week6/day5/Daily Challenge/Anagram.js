function isAnagram(str1, str2) {   //Function 'isAnagram' takes two strings, 'str1' and 'str2', as arguments 

    str1 = str1.toLowerCase(); // first converts both strings to lowercase using the toLowerCase() method
    str2 = str2.toLowerCase(); 

    if (str1.length !== str2.length) { //and returns a boolean value of 'true'if these strings are anagrams 
        return false                   // Then it checks if the strings have the same length.
    }

    const sortedStr1 = str1.split('').sort().join('');  //The function will compare the sorted versions of the strings if the lengths of the strings are equal.
    const sortedStr2 = str2.split('').sort().join(''); // It breaks down a string into individual letters, arranges them in order, and then puts them back together as a sorted string.
    
    

    return sortedStr1 === sortedStr2; // It then compares the sorted strings against each other and returns the result of the comparison.

}