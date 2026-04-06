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


updatePatch(id, nome) {
        const index = filmes.findIndex((f)=>f.id === parseInt(id));
        if(index === -1) return null;
        if(nome){
            filmes[index].nome =nome;
        
        }
        return filmes[index]
    }

    updatePut(id,newData) {
          const index = filmes.findIndex((f)=>f.id === parseInt(id));
        if(index === -1) return null;
        const updatedFilmes = { id: parseInt(id), ...newData };

        filmes[index] = updatedFilmes;

        return updatedFilmes;
    }

}

export const filmesService = new FilmesService();