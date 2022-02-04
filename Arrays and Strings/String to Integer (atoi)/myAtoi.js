/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    
    let negativeConverter  = 1;
    let currentParseNumber = 0;
    let readStarted = false;
    let range = [-2147483648, 2147483647]
    
    let numbers = [0,1,2,3,4,5,6,7,8,9];
    
    for(let i=0; i < s.length; i++){
        
        if(!readStarted && s[i] === ' ' ){
          continue;   
         }
         else if(numbers[s[i]] != undefined){
            readStarted = true;
            currentParseNumber = currentParseNumber*(10) + numbers[s[i]];
        }else if(readStarted){
            break;
        }
        else if(s[i] === '-' ){
            readStarted = true;
            negativeConverter = -1;
        }else if(s[i] === '+' ){
            readStarted = true;
            negativeConverter = 1;
        }else {
            break;
        }
        
    }
    
    currentParseNumber = currentParseNumber*negativeConverter
    if(currentParseNumber < range[0]) return range[0];
    if(currentParseNumber> range[1]) return range[1];
    
    return currentParseNumber;

};

module.exports = myAtoi;