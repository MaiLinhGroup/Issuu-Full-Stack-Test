module.exports = {
    or : function(a, b) {
        /**
         * If the || operator is used with non-Boolean values, 
         * it will return a non-Boolean value.
         */
        return a || b;
    },

    and : function(a, b) {
        /**
         * The && operator preserves non-Boolean values 
         * and returns them as they are. It returns the first
         * falsy operand it encounters. If all are truthy, it returns
         * the last truthy operand.
         */
        return a && b;
    }
};

