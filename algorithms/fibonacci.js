function findFibonnaci(num){
    if(num < 2){
        return num
    }
    else {
        return findFibonnaci(num -1) + findFibonnaci(num -2)
    }
}

const nterms = 6
const oute = []
if(nterms <= 0){
    console.log('positive')
}
else {
  
    for(let i =0; i<nterms; i++){
        oute.push(findFibonnaci(i))
    }
}
console.log(oute)