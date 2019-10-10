// Accepts alphanumeric characters with special symbols but ignores the symbols
var isPalindrome = function(s) {
    if(s==''){
        return true;
    }
    return s.toLowerCase().replace((/[^a-zA-Z0-9]+/g),"") === s.toLowerCase().replace((/[^a-zA-Z0-9]+/g),"").split("").reverse().join("");
};

//
