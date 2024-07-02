import userModel from '../model/userModel.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secretKey = 'Rashi34#sd';

export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword
        });

        const token = jwt.sign({ email: newUser.email, id: newUser._id }, secretKey);
        res.status(200).json({ user: newUser, token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email: email });
        if (!existingUser) {
            return res.status(400).json({ message: "User doesn't match" });
        }

        const matchedPwd = await bcrypt.compare(password, existingUser.password);
        if (!matchedPwd) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secretKey);
        res.status(200).json({ user: existingUser, token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}
