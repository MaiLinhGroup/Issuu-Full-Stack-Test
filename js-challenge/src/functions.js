module.exports = {
    argsAsArray : function(fn, arr) {
        return fn(...arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return (str2) => {
            return str.concat(', ', str2);
        }
    },

    makeClosures : function(arr, fn) {
        return arr.map(x => () => fn(x));
    },

    partial : function(fn, str1, str2) {
        const prefilledFn = fn.bind(null, str1, str2);
        return (x) => prefilledFn(x);
    },

    useArguments : function() {
        let args = [...arguments];
        return args.reduce((prev, curr) => prev + curr);
    },

    callIt : function(fn) {
        const args = Array.prototype.slice.call(arguments, 1); // starts at arguments[1] to skip 'fn'
        fn(...args);
    },

    partialUsingArguments : function(fn) {
        const args = Array.prototype.slice.call(arguments, 1); // starts at arguments[1] to skip 'fn'
        // destructuring assignment to unpack values from array into function parameters
        const prefilledFn = fn.bind(null, ...args);
        // rest parameter to receive a variable number
        return (...x) => prefilledFn(...x);
    },

    curryIt : function(fn) {
        return (a) => (b) => (c) => fn(a,b,c);
    }
};

