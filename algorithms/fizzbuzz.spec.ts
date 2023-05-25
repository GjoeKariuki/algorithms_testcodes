import {FizzBuzz} from './fizzbuzz'
import {expect, test, describe,vi, it, expectTypeOf} from 'vitest'



const outtest = FizzBuzz(0,6)
const expectOutput = {
    '0': 'fizzbuzz',
    '1': 'not divisible', 
    '2': 'not divisible',
    '3': 'fizz',
    '4': 'not divisible', 
    '5': 'buzz', 
    '6': 'fizz',
  }


describe("FizzBuzz algorith tests", () => {
    
    test("Check if its a function", ()=> {
        expect(FizzBuzz).toBeTypeOf('function')
    })
    test("Check if function returns something", ()=> {
        expect(FizzBuzz).toBeDefined()
    })
    test("Check if functions objects are true", () => {
        expect(outtest).toMatchObject(expectOutput)
    })
    it("Check if output contains 'fizzbuzz' at key index", () =>{
        expect(FizzBuzz(0,3)).toHaveProperty('0','fizzbuzz')
    })
    test("Check if output contains 'fizz' at key index", () =>{
        expect(FizzBuzz(3,5)).toHaveProperty('3','fizz')
    })
    test("Check if output contains 'buzz' at key index", () =>{
        expect(FizzBuzz(5,6)).toHaveProperty('5','buzz')
    })
    test("Check if input properties are trully numbers", () => {
        let a = 5
        let b = 29       
        expect(a).toBeTypeOf('number')
        expect(b).toBeTypeOf('number')
        expect(FizzBuzz(a,b))
    })
    test("Check if function is empty when called with strings", () => {
        let a = 'a'
        let b = 'b'       
        expect(FizzBuzz(parseInt(a),parseInt(b))).toMatchObject({})
    })
    test("Check if function is not callable", ()=>{
        const asdf = vi.fn(FizzBuzz)
        expect(asdf).not.toHaveReturned()
    })

    test("Check if function is callable", ()=>{
        const asdf = vi.fn(FizzBuzz)
        const spied = asdf(0,3)
        const vart = {
            '0': 'fizzbuzz',
            '1': 'not divisible',
            '2': 'not divisible',
            '3': 'fizz'
          }
        expect(spied).toStrictEqual(vart)
        expect(asdf).toHaveReturned()
    })
    test("Check for deep equality of output", () => {
        const spied = FizzBuzz(0,3)
        const vart = {
            '0': 'fizzbuzz',
            '1': 'not divisible',
            '2': 'not divisible',
            '3': 'fizz'
          }
        expect(spied).toStrictEqual(vart)
    })
    test("Check if the function returns an object", () => {
        expectTypeOf(FizzBuzz(2,3)).returns.toBeObject()
    })
    
    
})
