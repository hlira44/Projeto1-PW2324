const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//return all cars
exports.getAll = async (req, res) => {
    try {
        //read all cars from database
        const response = await prisma.Carros.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

exports.getByBrand = async (req, res) => {
    //get student id requested
    const brand = req.params.brand;
    try {
        //finds cars by his id (number)
        const response = await prisma.Carros.findMany({
            where: {
                Marca: brand,
            },
        })
        //return student
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

//return cars by his id (student number)
exports.getById = async (req, res) => {
    //get student id requested
    const id = req.params.id;
    try {
        //finds cars by his id (number)
        const response = await prisma.Carros.findUnique({
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

//creates cars
exports.create = async (req, res) => {
    //get requested cars properties
    const { marca, detalhes, foto } = req.body;

    console.log(marca);
    try {
        //creates new student
        const student = await prisma.Carros.create({
            data: {
                Marca: marca,
                Detalhes: detalhes,
                Foto: foto,
            },
        })
        //return car created
        res.status(201).json(student)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//updates student
exports.update = async (req, res) => {
    const { id, marca, detalhes, foto } = req.body;

    try {
        //find student to update their data
        const student = await prisma.Carros.update({
            where: {
                id: Number(id),
            },
            data: {
                Marca: marca,
                Detalhes: detalhes,
                Foto: foto,
            },
        })
        //return car updated
        res.status(200).json(student)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//delete carro
exports.delete = async (req, res) => {
    //get student number requested
    const id = req.params.id;
    try {
        //delete student
        await prisma.Carros.delete({
            where: {
                id: Number(id),
            },
        })
        //just return ok
        res.status(200).send("Carro eliminado!");
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


