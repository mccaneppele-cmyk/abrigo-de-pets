//inicio

import express from 'express'
const app = express();

app.use(express.json());

// dados dos pets



let pets = [

   {
    idPet: 1,
    dsNome: "Bell",
    dsEspecie: "cachorro",
    nuIdade: 2,
    fgAdotado: false
},
    
{
    idPet: 2,
    dsNome: "John",
    dsEspecie: "cachorro",
    nuIdade: 2 ,
    fgAdotado: false
},

{
    idPet: 3,
    dsNome: "Tob",
    dsEspecie: "cachorro",
    nuIdade: 1 ,
    fgAdotado: false
}
]
let ultimoId = (3)

console.log(pets)

// funções

function buscarPets() { // buscar todos
    return pets;
}

function buscarPet(id) { //buscar pelo ID
    return pets.find((pet) => pet.idPet === id);

function criarPet(dados) { // criar pets seguindo o ultimo id
    ultimoId = ultimoId + 1;

const novoPet = {
    idPet: ultimoId,
    dsNome: dados.nome,
    dsEspecie: dados.especie,
    nuIdade: dados.idade,
    fgAdotado: false
    };

    pets.push(novoPet);

    return novoPet;
}

}

// rotas

app.get("/pets", (req, res) => {
    res.status(200).json(buscarPets());
});









app.listen(3000, () => {
    console.log("Server rodando");});