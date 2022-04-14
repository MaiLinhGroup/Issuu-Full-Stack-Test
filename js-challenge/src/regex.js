module.exports = {
    containsNumber : function(str) {
        const regex = /\d/;
        return regex.test(str);
    },

    containsRepeatingLetter : function(str) {
        const regex = /(\D)\1+/;
        return regex.test(str);
    },

    endsWithVowel : function(str) {
        const regex = /[aeiou]$/i;
        return regex.test(str);
    },

    captureThreeNumbers : function(str) {
        const regex = /\d{3}/;
        return regex.test(str) ? str.match(regex)[0] : false;
    },

    matchesPattern : function(str) {
        const regex = /^\d{3}\-\d{3}\-\d{4}$/;
        return regex.test(str);
    },
    isUSD : function(str) {
        const regex = /^\$(0|[1-9][0-9]{0,2})(,\d{3})*(\.\d{2})?$/;
        return regex.test(str);
    }
};
