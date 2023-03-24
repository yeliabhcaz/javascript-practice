// given a string find the first non-repeating character. 
// If a character doesn't exist return -1
// edge cases, could have no unique characters
// assumptions, the string will only contain valid characters

// loop over string adding characters to a hash table with number of occurrences
// loop back over the string checking each character for uniqueness
// first character that has only one occurence is returned as first unique character

const firstUniqueChar = function(string) {
    let hash = {}
    // create hash table
    for (char of string) {
        hash[char] ? 
        hash[char] += 1 :
        hash[char] = 1;
    }
    // find the first unique character and return it's index
    for (char in string) {
        if (hash[string[char]] === 1) return char
    }
    // if no unique characters are found, return -1
    return -1;
}

console.log(firstUniqueChar('aaron'))

// cleaner, slower solution
// nesting indexOf and lastIndexOf creates quadratic time complexity O(n^2)
// Two for loops that aren't nested creates linear time complexity O(n)

const firstUniqueChar2 = function(string) {
    for (char of string) {
        if (string.indexOf(char) === string.lastIndexOf(char)) return string.indexOf(char)
    }
    return -1;
}

console.log(firstUniqueChar2('aaron'))


// is anagram, return an array of strings separated by anagrams and non-anagrams
// input: array of strings
// output: array of arrays of strings
// edge cases: no anagrams exist or all inputs are anagrams, empty array
// assumptions: all entries will contain valid characters

// create 3 arrays, return array, anagram array, non-anagram array
// loop over input adding entries to anagram and non-anagram arrays
// push both arrays to the return array 

const isAnagram = function(array) {
    // declare empty arrays
    let anagrams = [];
    let nonAnagrams = []
    for (string of array) {
        // if string and reversed string are equal, add to anagram arr
        // else add to the non-anagram array
        string === string.split('').reverse().join('') 
        ? anagrams.push(string)
        : nonAnagrams.push(string)
    }
    // return an array containing both arrays
    return [anagrams, nonAnagrams]
}

console.log(isAnagram(['racecar', 'oreo', 'aba', 'abb']))

// group anagrams together

const isAnagram2 = function(array) {
    const ht = {};
    for (string of array) {
        // sort the string so anagrams are equaivalent
        let sorted = string.split('').sort().join('');
        // if the string value is already in the hash table, push the anagram's pair
        // else create new entry with string as value
        ht[sorted] ?
        ht[sorted].push(string)
        : ht[sorted] = [string]
    }
    return Object.values(ht)
}

console.log(isAnagram2(["eat","tea","tan","ate","nat","bat"]))

// given a string determine if it's a valid palindrome
// input: string
// output: bool
// edge cases: special characters and spaces 
// assumptions: we will have to clean data before testing equality

const isPalindrome = function(string) {
    // remove all non-alphabet characters
    let cleanString = string.toLowerCase().match(/[A-Z]/gi)
    if (cleanString) {
        let reverseString = cleanString.reverse().join('');
        // return whether string and reversed string are equal
        console.log(cleanString.join(''), reverseString)
        return cleanString.join('') === reverseString 
    }
    return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))