export const FizzBuzz = (alpha:number, omega:number) => {
    const basket:any = {}
    
    for(let n=alpha; n<=omega; n++){
    
        if(n%5===0 && n%3===0){
            basket[n] = "fizzbuzz"
        }
        else if(n%5===0){
            // basket.push('buzz')
            basket[n] = 'buzz'
        }
        else if(n%3 === 0){
            basket[n] = 'fizz'
        }
        else {
            basket[n] = 'not divisible'
        }  
       
    }
    return basket
}

console.log(FizzBuzz(0,3))
