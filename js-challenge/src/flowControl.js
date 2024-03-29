module.exports = {
    fizzBuzz : function(num) {
        // write a function that receives a number as its argument;
        // if the number is divisible by 3, the function should return 'fizz';
        if ( num%3===0 && !( num%5===0 )) {
            return 'fizz';
        }
        // if the number is divisible by 5, the function should return 'buzz';
        if ( num%5===0 && !( num%3===0 )) {
            return 'buzz';
        }
        // if the number is divisible by 3 and 5, the function should return
        // 'fizzbuzz';
        if ( num%3===0 && num%5===0 ) {
            return 'fizzbuzz';
        }
        // otherwise the function should return the number, or false if no number
        // was provided or the value provided is not a number
        return Number.isFinite(num) ? num : false;
    }
};
