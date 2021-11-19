import {json, Router} from 'express'
import BookDatabase from '../database/bookDatabase'


const bookRoutes = Router()
const bookDatabase = new BookDatabase()
bookRoutes.use(json())

bookRoutes.get("/", (req, res)=>{
  res.json({"message": "ok"})
})

//cria livro
bookRoutes.post("/livro", (req, res)=>{
  const {titulo, autor, qtdPagina, anoDePublicacao } = req.body
  const book = bookDatabase.createBook({titulo, autor, qtdPagina, anoDePublicacao})
  if(book){
    return res.json({"Message": "Livro adicionado com sucesso :)"})
  }else{
    return res.json({"Message": "Algo deu errado :/"})
  }
})

//lista os livros adicionados
bookRoutes.get("/livros", (req, res)=>{
  return res.json({Books: bookDatabase.list()})
})

//retorna livro de acordo com o id
bookRoutes.get("/livro/:id", (req, res) => {
  const {id} = req.params
  // console.log(id)
  const livroExiste = bookDatabase.bookById(id)
  if(livroExiste){
    res.json({Livro: livroExiste})
  }else{
    res.json({"Erro": "Livro não encontrado :/"})
  }
})

//Atualiza as informações do livro
bookRoutes.put("/livro/:id", (req, res) => {
  const {id} = req.params
  // console.log(id)
  const {titulo, autor, qtdPagina, anoDePublicacao } = req.body
  const livro = bookDatabase.updateBook(id)

  if(livro){
    livro.titulo = titulo
    livro.autor = autor
    livro.qtdPagina = qtdPagina
    livro.anoDePublicacao = anoDePublicacao
    res.json(bookDatabase.list())
  }else{
    res.json({"Erro": "Livro não encontrado :/"})
  }
})

//Deleta um livro
bookRoutes.delete("/livro/:id", (req, res)=>{
  const {id} = req.params
  const index = bookDatabase.deleteBook(id)
  console.log(index)
  if(index){
    bookDatabase.Books.splice(index, 1)
    return res.json({"Message": "Livro deletado com sucesso :)"})
  }
  if(index == 0){
    bookDatabase.Books.splice(0, 1)
    return res.json({"Message": "Livro deletado com sucesso :)"})
  }
  else{
    return res.json({"Message": "Livro não encontrado :/"})
  }
})

export default bookRoutes