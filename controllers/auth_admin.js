const bcrypt = require('bcryptjs/dist/bcrypt')
const auth = require("../utils/auth");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()


exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admins = await prisma.admins.findUnique({
            where: {
                email: email
            }
        })

        if (admins) {
            let checkPassword = bcrypt.compareSync(password, admins.password);

            if (checkPassword) {
                const token = auth.getToken({ id: admins.id, name: admins.name });
                res.status(200).json({ name: admins.name, token: token });
                return;
            }
        }

        res.status(401).json({ message: "invalid login" });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

exports.signup = async (req, res) => {
    try {
        const { email, password, name } = req.body;

        const admins = await prisma.admins.create({
            data: {
                email: email,
                password: bcrypt.hashSync(password, 8),
                name: name,
                isAdmin: true
            },
        })

        res.status(201).json({ message: "ok" });


    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}