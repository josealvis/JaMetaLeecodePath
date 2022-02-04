var romanToInt  = require('./romanToInt')

describe('romanToInt', () => {
    it('"III"', () => {
        expect(romanToInt("III")).toBe(3);
    })

    it('"IV"', () => {
        expect(romanToInt("IV")).toBe(4);
    })
    it('"IX"', () => {
        expect(romanToInt("IX")).toBe(9);
    })

    it('"XLIX"', () => {
        expect(romanToInt("XLIX")).toBe(49);
    })

    it('"XXIV"', () => {
        expect(romanToInt("XXIV")).toBe(24);
    })

    it('"X"', () => {
        expect(romanToInt("X")).toBe(10);
    })
    it('"MCMXCIV"', () => {
        expect(romanToInt("MCMXCIV")).toBe(1994);
    })
    it('"LVIII"', () => {
        expect(romanToInt("LVIII")).toBe(58);
    })
    it('"D"', () => {
        expect(romanToInt("D")).toBe(500);
    })
})