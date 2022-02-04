
let lengthOfLongestSubstring = require('./lengthOfLongestSubstring');


describe('lengthOfLongestSubstring', () => {
    it('"abcabcbb"', () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    })
    it('"bbbbb"', () => {
        expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    })
    it('"pwwkew"', () => {
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    })

    it('""', () => {
        expect(lengthOfLongestSubstring("")).toBe(0);
    })
    it('"a"', () => {
        expect(lengthOfLongestSubstring("a")).toBe(1);
    })

    it('"aaaaaaaaaabc"', () => {
        expect(lengthOfLongestSubstring("aaaaaaaaaabc")).toBe(3);
    })
    it('"abcaaaaaaaaaa"', () => {
        expect(lengthOfLongestSubstring("abcaaaaaaaaaa")).toBe(3);
    })
    it('"aaaaabcaaaaa"', () => {
        expect(lengthOfLongestSubstring("aaaaabcaaaaa")).toBe(3);
    })
    it('""dvdf""', () => {
        expect(lengthOfLongestSubstring("dvdf")).toBe(3);
    })
    it('""abba""', () => {
        expect(lengthOfLongestSubstring("abba")).toBe(2);
    })
})