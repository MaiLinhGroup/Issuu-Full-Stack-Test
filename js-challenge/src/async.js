module.exports = {
    async : function(value) {
        return new Promise((resolve, reject) => {
            if (value === true || value === 'success') {
                resolve(value);
            } else {
                reject(value);
            }
        });
    },

    manipulateRemoteData : function(url) {
        const fetch = require('node-fetch');

        return fetch(url)
        .then(response => response.json())
        .then(data => data.people.map(person => person.name).sort());
    }
};