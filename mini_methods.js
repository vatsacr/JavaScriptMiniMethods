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
