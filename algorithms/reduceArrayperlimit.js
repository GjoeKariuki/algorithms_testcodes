function reduceArr(array, limit){
    let returned = []
    for (let i = 0; i<array.length; i=i+limit){
        returned.push(array.slice(i,i+limit))
    }
    return returned
}

console.log(reduceArr([1,2,3,4,5,6,7,8,9],1))