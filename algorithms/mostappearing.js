function mostAppearing(value){
    arrayed = value.toString().split('')
    eleCount = {}
    n = 0
    word_freq = ''
    for(let i of arrayed){
        eleCount[i] = eleCount[i.toLowerCase()]+1 || 1
    }
    for (let key in eleCount){
        if(eleCount[key] > n){
            n = eleCount[key]
            word_freq = key
        }
        
    }
    return word_freq
}


console.log(mostAppearing('GeorRRRRRRRgeEEEEEEEEEEEEEEeee'))