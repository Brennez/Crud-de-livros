# Rotas para acessar a aplicacão

###Create Livro
 (http://localhost:3000/livro)

###Exemplo:
- Body da requisição
~~~JSON
{
"titulo": "Branca de neve",
"autor": "Disney",
"qtdPagina": "100",
"anoDePublicacao": "2009"
}
~~~


###List livros
(http://localhost:3000/livros)

###Update Livros
(http://localhost:3000/livro/{id})

#Exemplo:
-body da requisição
~~~JSON
{
"titulo": "Flash",
"autor": "Dc Comics",
"qtdPagina": "200",
"anoDePublicacao": "2010"
}
~~~

###Deleta livro
(http://localhost:3000/livro/{id})
