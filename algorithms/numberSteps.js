function numberSteps(value){    
    steps_shape = []
    step = ''
    if(typeof(value) == 'number'){
        if(Math.sign(value) == 1){
            if(value == 1){
                steps_shape.push('#')
            }
            else {
                for(let i=1;i<=value;i++){
                    // add # and space if required
                    step = '#'.repeat(i) + ' '.repeat(value-i)
                    steps_shape.push(step)
                }
                
            }
            return steps_shape
            
        }
        else if(Math.sign(value) == -1){
            console.log(value + " not a positive number")
        } 
    }
    else {
        console.log(value + " is not a number",)
    }

}
rrtn = numberSteps('sd')
console.log(rrtn)

// function steps(n, row = 0, stair = '') {

//     if (n === row) {

//         return

//     }

//     if (n === stair.length) {

//         console.log(stair);

//         return steps(n, row + 1)

//     }

//     stair.length <= row ? stair += '#' : stair += ' '

//     steps(n, row, stair)

// }

// console.log(steps(5))