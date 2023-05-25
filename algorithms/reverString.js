function reverstring(str) {
    return str.split('').reduce((prev,curr) => curr+prev, '')
}

console.log(reverstring('racecar'))
