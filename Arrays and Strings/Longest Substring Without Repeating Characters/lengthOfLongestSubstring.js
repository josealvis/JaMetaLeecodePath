/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {

    if(s.length < 1) return 0;

    let logestSubstring = 1;
    let seenChars =  new Map();
    let subStringStartingIndex =  0;
    
    for(let i = 0 ; i < s.length; i++){
        const currentChar = s[i];
        if(seenChars.has(currentChar)){
            const seenCharIndex =  seenChars.get(currentChar);
            subStringStartingIndex = Math.max(subStringStartingIndex, seenCharIndex+1);
            seenChars.set(currentChar, i);
        }else{
            seenChars.set(currentChar, i);
        }

        const currentSubstring = s.substring(subStringStartingIndex,i+1);
        logestSubstring = Math.max(logestSubstring,currentSubstring.length);
    }

    return logestSubstring;

    
};

//optimaze by lettcode 
//Sliding Window Optimized
var lengthOfLongestSubstring = function(s) {

    if(s.length < 1) return 0;

    let logestSubstring = 1;
    let seenChars =  new Map();
    let subStringStartingIndex =  0;
    
    for(let i = 0 ; i < s.length; i++){
        const currentChar = s[i];
        if(seenChars.has(currentChar)){
            const seenCharIndex =  seenChars.get(currentChar);
            subStringStartingIndex = Math.max(subStringStartingIndex, seenCharIndex+1);
            seenChars.set(currentChar, i);
        }else{
            seenChars.set(currentChar, i);
        }

        const currentSubstring = s.substring(subStringStartingIndex,i+1);
        logestSubstring = Math.max(logestSubstring,currentSubstring.length);
    }

    return logestSubstring;

    
};


module.exports = lengthOfLongestSubstring ;