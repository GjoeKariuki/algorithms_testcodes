function generateMatrix(r,c){
    const matrix = []
    for (let i = 0; i< r; i++){
        matrix[i] = []
        for(let j=0; j<c; j++){
            matrix[i][j] = 0
        }
    }
    let value = 1
    let increment = 1
    let row = 0
    let col = 0

    while(value <= r*c){
        // right direction
        for(let i =col; i<c -col;i++){
            matrix[row][i] = value
            value++
        }
        // down direction
        for(let i = row+1; i<r-row; i++){
            matrix[i][c-col-1] = value
            value++
        }
        // left direction
        for(let i=c-col-2; i>=col; i--){
            matrix[r-row-1][i] = value
            value++
        }
        // up direction
        for(let i=r-row-2; i> row; i--){
            matrix[i][col] = value
            value++
        }

        row++
        col++
        increment += 2

    }
    return matrix
}

console.log(generateMatrix(3,4))