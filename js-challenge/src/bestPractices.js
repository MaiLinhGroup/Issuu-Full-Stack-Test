/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

module.exports = {
    globals : function() {
        /**
         * Automatically Global: If you assign a value to a variable 
         * that has not been declared, it will automatically 
         * become a GLOBAL variable. Therefore, combine assign a value
         * to a variable when declaring it.
         */
        const myObject = {
            name : 'Jory'
        };

        return myObject;
    },

    functions : function(flag) {
        if (flag) {
            function getValue() { return 'a'; }
        } else {
            function getValue() { return 'b'; }
        }

        return getValue();
    },

    parseInt : function(num) {
        /**
         * If radix is not specified, parseInt() assumes radix to be 16 when
         * input starts with '0x' or '0X', 10 otherwise. Because of this, it's 
         * better to specify radix explicitly when using parseInt() with different
         * numeral systems to avoid unexpected results like '0x12' being parsed to 18
         * in hexadecimal system but parsed to 0 in decimal system because parseInt()
         * ignores 'x' and all succeeding characters as 'x' is not a numeral in the
         * decimal system.
         */
        const radix = 10
        return parseInt(num, radix);
    },

    identity : function(val1, val2) {
        /**
         * Different than the '==' operator, the
         * strictly equal operator '===' does not
         * attempt to convert the operands of different types
         * to the same type before comparing them but instead
         * regards them as different and always returns false.
         */
        return val1 === val2;
    }
};
