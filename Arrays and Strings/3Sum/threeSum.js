/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {

  //time O(n log n),
    nums.sort((a,b)=> a-b);
    let triples = new Map();
    if(nums.length < 3 ) return [];

    let hashmap =  new Map();

    //time O(n), space O(n)
    nums.forEach(n=>{
        if(hashmap.has(n)){
            hashmap.set(n, hashmap.get(n)+1);
        }else{
            hashmap.set(n,1); 
        }
    })


    for(let  i = 0; i < nums.length-1; i++){
        const currentNumber = nums[i];
        const nextNumber = nums[i+1];
        const complement   =  (currentNumber + nextNumber) != 0? (currentNumber + nextNumber)*-1:0;
        let quantityNeeded =  complement === currentNumber || complement === nextNumber? 2: 1;
        console.log(hashmap)
        if(currentNumber === nextNumber && complement === nextNumber)  quantityNeeded = 3

        if(hashmap.has(complement) && hashmap.get(complement) >= quantityNeeded){

            let triple  = [];

            if(nextNumber < complement) triple  = [currentNumber,nextNumber,complement];
            else if(currentNumber < complement) triple  = [currentNumber,complement,nextNumber];
            else triple  = [complement,currentNumber,nextNumber];

            const tripleKey = triple.toString();
            triples.set(tripleKey,triple);
        }

    }

    return [...triples.values()];
};


module.exports = threeSum;