// Accepts alphanumeric characters with special symbols but ignores the symbols
var isPalindrome = function(s) {
    if(s==''){
        return true;
    }
    return s.toLowerCase().replace((/[^a-zA-Z0-9]+/g),"") === s.toLowerCase().replace((/[^a-zA-Z0-9]+/g),"").split("").reverse().join("");
};

// Accepts two strings and checks whehter they are an anagram or not
var isAnagram = function(s, t) {
    return s.toLowerCase().split("").sort().join("") == t.toLowerCase().split("").sort().join("");
};

// Accepts a string that returns the index f the first found unique character
var firstUniqChar = function(s) {
    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (s.indexOf(c) == i && s.indexOf(c, i + 1) == -1) {
            return s.indexOf(c);
        }
    }
    return -1;
};

// Reverses an integer that also accepts negative values
var reverse = function(x) {
    const reversedNumber = Math.sign(x)*parseInt(x.toString().split("").reverse().join(""));
    if(reversedNumber > 2147483648 || reversedNumber< -2147483648){
        return 0;
    } else {
        return reversedNumber;
    }
    
};

/**Accepts both strings and array of strings and returns an object whose key is the character and the value is the number of times the key has been repeated in the string or array of strings
 * @param {str[] or string} str
 * @return {Object}
*/
var findRepeatedStrings = function(str){
    repeatedObject = {};
    sampleString = '';
    typeof(str)== Array ?sampleString = str.join(""):sampleString = str;
    for(var i=0;i<str.length;i++){
    repeatedObject[str[i]] = sampleString.split(str[i]).length-1;
    }
    return repeatedObject;
};

/** Accepts tow strings and returnds the index of the second string in the first string else returns -1
 * @param {haystack,needle} string
 * @return {Number}
*/
var findNeedle = function(haystack,needle){
    return needle?haystack.indexOf(needle):0;
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var count = 0;
    var incrementer = 0;
    var length = nums.length;
    while(incrementer<length){
        if(nums[incrementer] === 0){
            nums.splice(incrementer,1);
            nums.push(0);
            length--;
        } else {
            incrementer++;
        }
    }
};

/**
 * @param {String} str
 * @return {number} Return the least lenngth to contain all the characters
 */
var smallestString=function(str){
    var set2 = new Set(str);
    var uniqueArr = [...set2];
    var mainArr = str.split('');
    var uniqueStr = [...set2].join('');
    var resultArray = [];
    var counter= set2.size;
    for(var i=0;i<mainArr.length;i++){
        resultArray.push(mainArr[i]);
        for(var j=0;j<uniqueArr.length;j++){
            if(resultArray[i] == uniqueArr[j]){
                counter--;
                uniqueArr.splice(j,1);
                if(counter===0){
                    return resultArray.length;
                }
            }
        }
    }
}
