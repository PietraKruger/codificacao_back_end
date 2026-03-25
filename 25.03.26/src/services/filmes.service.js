const filmes = [
    {id: 1, nome:"Pecadores"},
    {id: 2, nome:"Homem Aranha Longe de Casa"},
    {id: 3, nome:"Hamlet"}
]

class FilmesService {
    getAll(){
        return filmes;
    }

    getById(id){
        return filmes.find((filmes) => filmes.id === id)
    }
}

export const filmesService = new FilmesService();