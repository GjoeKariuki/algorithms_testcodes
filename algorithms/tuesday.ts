export function reverseNumber(namba:number) {    
    let outa = parseInt((namba.toString()).split('').reduce((prev,curr) => curr+prev, ''))
    return namba < 0 ? -outa:outa
}

console.log(reverseNumber(12))
