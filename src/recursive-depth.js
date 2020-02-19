module.exports = class DepthCalculator {
    calculateDepth(arr, count = 1, result = []) {
        //let result = [];
        //console.log(count);
        result.push(count);
        for(let item of arr){
            if(Array.isArray(item))  this.calculateDepth(item, count + 1,result);
        }
        return Math.max(...result);
        //console.log(result);
    }
};