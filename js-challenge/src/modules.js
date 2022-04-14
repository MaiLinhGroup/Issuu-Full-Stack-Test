module.exports = {
    createModule : function(str1, str2) {
        return module.exports = {
            name: str2,
            greeting: str1,
            sayIt: () => module.exports.greeting.concat(', ', module.exports.name)
        }
    }
};

