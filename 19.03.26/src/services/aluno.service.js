const alunos = [
    {id: 1, nome:"Pietra", idade: "16", matricula: "12345"},
    {id: 2, nome:"Alex", idade: "16", matricula: "678910"},
    {id: 3, nome:"Richard", idade: "16", matricula: "1112131415"}
]

class AlunoService {
    getAll(){
        return alunos;
    }
}

export const alunoService = new AlunoService();