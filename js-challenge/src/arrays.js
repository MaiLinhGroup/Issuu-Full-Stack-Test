
module.exports = {
    indexOf : function(arr, item) {
        /**
         * The indexOf() method returns the 
         * first index at which a given element 
         * can be found in the array, or -1 if it is not present.
         */
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce((prev, curr) => prev + curr, 0);
    },

    remove : function(arr, item) {
        return arr.filter(x => x !== item);
    },

    removeWithoutCopy : function(arr, item) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                // It's important to decrement because
                // splice() modifies the length of arr
                i--;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        arr1.push(...arr2);
        return arr1;
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {
        return arr.filter(x => x === item).length;
    },

    duplicates : function(arr) {
        // key: element in arr, value: occurence in arr
        const occurences = new Map();
        arr.forEach(e => {
            if (occurences.has(e)) {
                const count = occurences.get(e);
                occurences.set(e, count+1 );
            }
            else {
                occurences.set(e,1);
            }
        })
        const duplicates = [];
        occurences.forEach((value,key) => {
            if(value>1){
                duplicates.push(key);
            }
        })
        return duplicates;
    },

    square : function(arr) {
        return arr.map(x=> x*x);
    },

    findAllOccurrences : function(arr, target) {
        const indeces = [];
        for (let i=0; i<arr.length; i++) {
            if(arr[i] === target){
                indeces.push(i);
            }
        }
        return indeces;
    }
};