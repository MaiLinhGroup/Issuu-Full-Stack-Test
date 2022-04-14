module.exports = {
    alterContext : function(fn, obj) {
        const newA = {
            name: obj.name,
            greeting: obj.greeting,
            sayIt: fn
        }
        return newA.sayIt();
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        return Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
    }
};
