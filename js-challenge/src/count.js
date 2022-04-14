
module.exports = {
    count : function (start, end) {
        // keep track of all scheduled timeouts
        const timeouts = [];

        // (end - start) === number of steps between
        // start number and end number that is the
        // number of iteration for the loop.
        for(let i=0; i<=(end - start); i++) {
            timeouts.push(
                setTimeout(()=>{
                    console.log(start+i);
                },i*100)
            );
        }

        return {
            cancel: ()=>{
                // iterative cancelling all scheduled timeouts
                timeouts.forEach(timeout => clearTimeout(timeout))
            }
        }
    }
};