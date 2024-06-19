const bcrypt = require('bcryptjs/dist/bcrypt')
const auth = require("../utils/auth");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()


exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.users.findUnique({
            where: {
                email: email
            }
        })

        if (user) {
            let checkPassword = bcrypt.compareSync(password, user.password);

            if (checkPassword) {
                const token = auth.getToken({ id: user.id, name: user.name });
                res.status(200).json({ name: user.name, token: token });
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

        const user = await prisma.users.create({
            data: {
                email: email,
                password: bcrypt.hashSync(password, 8),
                name: name,
                isAdmin: isAdmin
            },
        })

        res.status(201).json({ message: "ok" });


    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}