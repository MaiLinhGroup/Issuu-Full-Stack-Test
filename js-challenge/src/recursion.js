module.exports = {
    listFiles: function(data, dirName) {
        function getFiles(data) {
            if (data.hasOwnProperty('files')) {
                return data.files.flatMap(file => {
                    if(typeof(file) === 'object') {
                        return getFiles(file);
                    } else {
                        return file;
                    }
                })
            } else {
                return [];
            }
        }

        function getFilesSubDir(data, dirName) {
            if(dirName !== undefined){
                if (data.hasOwnProperty('files') && data.hasOwnProperty('dir')) { 
                    if (data.dir === dirName) {
                        return getFiles(data);
                    } else {
                        return data.files.flatMap(file => {
                            if (typeof(file) === 'object' && file.hasOwnProperty('dir')) {
                                return getFilesSubDir(file, dirName);
                            }
                        }).filter(Boolean)
                    }
                }
            } else {
                return getFiles(data);
            }
        }
        return getFilesSubDir(data, dirName);
    },

    permute: function(arr) {

    },

    fibonacci: function(n) {

    },

    validParentheses: function(n) {

    }
};
