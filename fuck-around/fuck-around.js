let str = '';

// input: a string
// output: an index
// edge cases: no single characters, 
// assumptions: input will be a valid string

// loop over string
// create a hash table with the counts of each char
// loop back over the string checking each letter in the hash table
// when the first entry with a value of 1 is found, return that index

function findFirstSingleChar(str) {
    for (char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) return str.indexOf(char)
    }
    return -1;
}

console.log(findFirstSingleChar(str))

// input: an array
// output: an array
// edge cases: 
// assumptions: input will be a valid array

let strs = ["eat","tea","tan","ate","nat","bat"];

function anagrams(strs) {
    let hash = {};
    for (let anagram of strs) {
        hash[anagram.split('').sort().join('')] 
            ? hash[anagram.split('').sort().join('')].push(anagram) 
            : hash[anagram.split('').sort().join('')] = [anagram];
    }
    return Object.values(hash);
}

console.log(anagrams(strs))

// input: a string
// output: bool
// edge cases: handling special chars and chars with varying case
// assumptions: input will be a valid string


let palindrome = 'radar';
let notPalindrome = 'oreo';
let fuckedUpPalindrome = 'Racecar.'

let isPalindrome = function(s) {
    // remove all special characters and normalize to lowercase
    let sanS = s.replace(/[^\w]/gi, '').toLowerCase()
    
    // set init vals for left and right pointer
    let leftInd = 0;
    let rightInd = sanS.length - 1;

    // create a counting while loop that exists when left index crosses the right
    while (leftInd++ < rightInd--) {
        if (sanS[leftInd] !== sanS[rightInd]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(palindrome))
console.log(isPalindrome(notPalindrome))
console.log(isPalindrome(fuckedUpPalindrome))

let arr = [3,4,8,2];
let target = 6;

let twoSum = function(arr, target) {
    const ht = {}
    for (let i = 0; i < arr.length; i++) {
        let desired = target - arr[i];
        if (desired in ht) {
            return [ht[desired], i]
        } else {
            ht[arr[i]] = +i;
            console.log(ht)
        }
    }
}

console.log(twoSum(arr,target))

// loop over array
// subtract elem from target to get desired
// use .some to find if desired exists
// if it does, return the index of elem of desired

let nums = [-1, 0, 1, 2, -1, 4];

// loop over array 
// add each element to the first element in the array
// add the next element and see if all 3 equal 0
// if they do equal 0 check if the combination is already in the arr
// if it's not, add it to the arr and keep going
// once you've found all possible combinations, return your arr

let threeSum = function(nums) {
    let output =  [];
    nums.sort((a,b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        if (i > 0 && nums[i] === nums[i - 1]) continue
        while (left < right) {
            let total = nums[i] + nums[left] + nums[right];
            if (total === 0) {
                output.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[right] === nums[right - 1]) {
                    right--
                }
                while (left < right && nums[left] === nums[left + 1]) {
                    left++
                }
                right--
                left++
            } else if (total > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return output
}

console.log(threeSum(nums))

function strCount(str, letter){  
    console.log(str.split(letter))
}

console.log(strCount('hello', 'o'))


function xor(a, b) {
    return a !== b;
}
 console.log(xor(true, true))

 let matrix = [ [1,2,3],
                [4,5,6],
                [7,8,9] ]

console.log(matrix)

const rotateImage = function(matrix) {
    matrix = matrix.reverse()
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
                let oldVal = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = oldVal;
        }
    }
    console.log(matrix)
}

rotateImage(matrix)

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let removeNthFromEnd = function(head, n) {
    let on = head;
    let length = 1;
    while(on) {
        length++
        on = on.next;
    }
    on = head;
    let leftIndex = length - n - 1;
    if (leftIndex === 0) {
        return on.next
    }
    while(leftIndex-- > 1) {
        on = on.next;
    }
    on.next = on.next.next
    return head;
}

let reverseLinkedList = function(on, prev = null) {
    if (!on) return prev;
    let temp = on.next;
    on.next = prev;
    reverseLinkedList(temp, on)
}

console.log(reverseLinkedList(head))

// loop over list adding elements to a set
// whnever a new element is added ot the set, increment a length counter
// if the set length is equal to the counter the value was already present and we've found a loop

let detectLinkedListCycle = function(head) {
    const elems = new Set()
    let length = 0;
    while(head) {
        elems.add(head)
        if (length === elems.size) return true;
        length = elems.size
        head = head.next
    }
    return false;
}