module.exports = {
    valueAtBit: function(num, bit) {
        return Number(num.toString(2).split("").reverse().join("")[bit-1]);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        const n = num.toString(2);
        return "00000000".substr(n.length) + n;
    },

    multiply: function(a, b) {
        const countDecimals = function (value) {
            if(Math.floor(value) === value) return 0;
            return value.toString().split(".")[1].length || 0; 
        };
        const f = a * b;
        const precision = countDecimals(b);
        return Number(f.toFixed(precision));
    }
};
