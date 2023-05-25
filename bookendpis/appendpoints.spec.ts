import request from 'supertest'
import {describe,test,it,expect} from 'vitest'
import app from './appendpoints'



describe("Book Tests Endpoints", () => {
    test("Should add a new book", ()=>{
        return request(app).post('/books')
        .expect('Content-Type', /json/)
        .expect(201)        
        .send({
            title:"My Life in Crime",
            description: "A robbery story"
        })
        .then((response:request.Response) => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    message:expect.stringMatching("Book added")
                })
            )
        })
        
    })

    it("Should get book", ()=>{
        return request(app).get('/books')
        .expect('Content-Type', /json/)
        .expect(200)        
        .then((response:request.Response) => {
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        id:expect.any(Number),
                        title:expect.any(String),
                        description:expect.any(String)
                    })
                    
                ])
            )
        })        
    })
    
    test("Should return a single book", ()=>{
        return request(app).get('/books/1')
        .expect('Content-Type', /json/)
        .expect(200)        
        .then((response:request.Response) => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    id:expect.any(Number),
                    title:expect.any(String),
                    description:expect.any(String)
                })
            )
        })
        
    })

    it("Should not return a book without id", ()=>{
        return request(app).get('/books/11')
        .expect('Content-Type', /json/)
        .expect(404)        
        .then((response:request.Response) => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    message:expect.stringContaining("Book not found")
                })
            )
        })
        
    })

    test("Should update a book", ()=>{
        return request(app).put('/books/1')
        .expect('Content-Type', /json/)
        .expect(200)        
        .send({
            title:"My Life in Crime 2",
            description: "More robbery story"
        })
        .then((response:request.Response) => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    message:expect.stringMatching("Book added")
                })
            )
        })
        
    })

    it("Should not update a non existing book", ()=>{
        return request(app).put('/books/10')
        .expect('Content-Type', /json/)
        .expect(404)        
        .send({
            title:"My Life in Crime 2",
            description: "More robbery story"
        })
        .then((response:request.Response) => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    message:expect.stringMatching("Book not found")
                })
            )
        })
        
    })

    it("Should not delete a non-existing book", ()=>{
        return request(app).delete('/books/13')
        .expect('Content-Type', /json/)
        .expect(404)        
        .then((response:request.Response) => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    message:expect.stringMatching("Book not found")
                })
            )
        })        
    })

    test("Should delete a book", ()=>{
        return request(app).delete('/books/1')
        .expect('Content-Type', /json/)
        .expect(200)        
        .then((response:request.Response) => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    message:expect.stringMatching("Book deleted")
                })
            )
        })        
    })
})