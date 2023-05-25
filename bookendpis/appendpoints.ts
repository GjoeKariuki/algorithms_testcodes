import express, {Response,Request,json} from 'express'
const app = express()
app.use(json())
interface Book{
    id:number
    title:string
    description:string
}

let books:Book[] = []


app.get('/books', (req:Request, res:Response) => {
    return res.status(200).json(books)
})
app.get('/books/:id', (req:Request<{id:string}>, res:Response) => {
    const id = +req.params.id
    let book = books.find(x=>x.id == id)
    if(!book){
        return res.status(404).json({message:"Book not found"})
    }
    return res.status(200).json(books)
})

app.post('/books', (req:Request, res:Response) => {
    const {title,description} = req.body
    books.push({id:books.length+1, title, description})
    return res.status(201).json({message:"Book added"})
})

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


app.delete('/books', (req:Request, res:Response) => {
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