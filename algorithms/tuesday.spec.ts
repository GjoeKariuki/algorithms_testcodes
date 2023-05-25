import {expect, test, describe, it} from 'vitest'
import  {reverseNumber} from  './tuesday'

describe("Reverse number algorithm tests", () => {

    test('test if reveseNumber() is function', () => {
        expect(reverseNumber).toBeTypeOf('function')
    })

    test('test if function returns something', () => {
        expect(reverseNumber).toBeDefined()
    })

    test("check if input is a number", () => {
        const input = 2
        expect(reverseNumber(input)).toBeTruthy()
        expect(input).toBeTypeOf("number")        
    })
        
    it('reverses a positive number', () => {
        let input = 342
        let result = reverseNumber(input)
        expect(result).toBe(243)
    })
    test('reverses negative Number', () => {
        let input = -342
        let result = reverseNumber(input)
        expect(result).toBe(-243)
    })
    
})


// // import {} from 'jest'


// // describe("reverse string text",)

// // test('should have a function reversestring defined', () => {
// //     expect (reverstring).toBeDefined()
// // })

// // test ("should always return a string",() => {
// //     let input = "hello"
// //     let result = reverstring(input)
// //     expect(typeof result).toBe('string')
// // })
// // test ("should always return a string",() => {
// //     let input = "hello"
// //     let result = reverstring(input)
// //     expect(result).toBeDefined()
// // })

// // test ("should return 'olleh' given hello",() => {
// //     let input = "hello"
// //     let result = reverstring(input)
// //     expect(typeof result).toBe('olleh')
// // })


// // describe('concat string test', () => {
// //     test("should have function named concatstring", () => {
// //         expect(typeof concatstring).toEqual('function')
// //     })
// //     test("should concat string", () => {
// //         let b = 'a'
// //         let c = 'm'
// //         let result = concatstring(b,c)
// //         expect(result).toBe('am')
// //     })
// // })

