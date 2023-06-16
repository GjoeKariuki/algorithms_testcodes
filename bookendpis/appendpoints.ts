import express, {Response,Request,json} from 'express'

// db app
const app = express()
app.use(json())




// book model
interface Book{
    id:number
    title:string
    description:string
}

// book holder
let books:Book[] = []


// gets all books
app.get('/books', (req:Request, res:Response) => {
    return res.status(200).json(books)
})

// get book by id
app.get('/books/:id', (req:Request<{id:string}>, res:Response) => {
    const id = +req.params.id
    let book = books.find(x=>x.id == id)
    if(!book){
        return res.status(404).json({message:"Book not found"})
    }
    return res.status(200).json(book)
})

// create book
app.post('/books', (req:Request, res:Response) => {
    const {title,description} = req.body
    books.push({id:books.length+1, title, description})
    return res.status(201).json({message:"Book added"})
})

// update book
app.put('/books/:id', (req:Request<{id:string}>,res:Response) => {
    const id = +req.params.id
    const {title, description} = req.body
    const index = books.findIndex(x=> x.id===id)
    if(index>=0){
        books[index]= {id,title,description}
        return res.status(200).json({message:"Book updated"})
    }
    return res.status(404).json({message:"Book not found"})
})


app.delete('/books/:id', (req:Request, res:Response) => {
    const id = +req.params.id
    const index = books.findIndex(x=> x.id===id)
    if(index>= 0){
        books.splice(index,1)
        return res.status(200).json({message:"Book deleted"})
    }
    return res.status(404).json({message:"Book not found"})
})


app.listen(4000)
export default app




