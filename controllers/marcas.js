const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()


//retornar todas as marcas
exports.getAll = async (req, res) => {
    try {
        //read all cars from database
        const response = await prisma.marcas.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//retornar marca por id
exports.getById = async (req, res) => {
    //get student id requested
    const id = req.params.id;
    try {
        //finds cars by his id (number)
        const response = await prisma.marcas.findUnique({
            where: {
                id: Number(id),
            },
        })
        //return student
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

//Criar Marca
exports.create = async (req, res) => {
    //get requested cars properties
    const { nome, modelo, logo  } = req.body;

    try {
        //creates new student
        const novamarca = await prisma.marcas.create({
            data: {
                Nome: nome,
                Modelo: modelo,
                Logo: logo,
            },
        })
        //return car created
        res.status(201).json(novamarca)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//atualiza a marca selecionada
exports.update = async (req, res) => {
    const { id, nome, modelo, logo } = req.body;

    try {
        //find student to update their data
        const student = await prisma.marcas.update({
            where: {
                id: Number(id),
            },
            data: {
                Nome: nome,
                Modelo: modelo,
                Logo: logo,
            },
        })
        //return car updated
        res.status(200).json(student)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//apagar marca
exports.delete = async (req, res) => {
    //get student number requested
    const id = req.params.id;
    try {
        //delete student
        await prisma.marcas.delete({
            where: {
                id: Number(id),
            },
        })
        //just return ok
        res.status(200).send("Marca eliminada!");
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}




