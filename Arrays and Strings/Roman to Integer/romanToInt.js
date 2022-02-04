/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    let romanMap = {'I':1, 'V':5, 'X':10, "L":50, "C":100, "D": 500, "M":1000};
    
    if(s.length === 1) return romanMap[s];
    
    let convertedInt = 0;
    
    //O(n)
    for(let i = 0; i < s.length; i++){
        const currenDigit= romanMap[s[i]];
        const nextDigit = i+1 < s.length? romanMap[s[i+1]]: 0;
        
        if(currenDigit >= nextDigit){
           convertedInt = convertedInt+currenDigit;
        }else{
           convertedInt = convertedInt-currenDigit; 
        }
        
    }
    
    return convertedInt;
    
    
};

module.exports = romanToInt;