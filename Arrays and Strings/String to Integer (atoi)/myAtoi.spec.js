let myAtoi = require('./myAtoi');


describe('myAtoi', () => {
    it('"42"', () => {
        expect(myAtoi("42")).toBe(42);
    })
    it('"   42"', () => {
        expect(myAtoi("   42")).toBe(42);
    })
    it('"   -429999"', () => {
        expect(myAtoi("   -429999")).toBe(-429999);
    })
    it('"   +429999"', () => {
        expect(myAtoi("   +429999")).toBe(429999);
    })

    it('"   -+429999"', () => {
        expect(myAtoi("   +-429999")).toBe(0);
    })
    it('"   -429999 sdsdsdsd"', () => {
        expect(myAtoi("   -429999 sdsdsdsd")).toBe(-429999);
    })
    it('" s  -429999 sdsdsdsd"', () => {
        expect(myAtoi("s   -429999 sdsdsdsd")).toBe(0);
    })
})