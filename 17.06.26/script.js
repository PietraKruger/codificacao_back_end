fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
    })