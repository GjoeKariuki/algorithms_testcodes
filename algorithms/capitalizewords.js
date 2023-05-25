
function capitalizeWord(str){
    if(typeof(str) == 'string'){
        outArray = []
        for(let i of str.split(' ')){
            outArray.push(i.charAt(0).toLocaleUpperCase() + i.slice(1))        
        }
       
        return outArray.join(' ')
    }
    return "not a string"
}

console.log(capitalizeWord("chcdsc svjnsdc sdjsndc ada"))