import bcrypt from 'bcrypt';
import Register from '../model/model.js';

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).send({ message: 'All fields are required!' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedpsw = await bcrypt.hash(password, salt);

        const reactRegister = new Register({
            name: name,
            email: email,
            password: hashedpsw
        });

        const result = await reactRegister.save();
        res.send({ message: "Signup successfully", result: result });
    } catch (err) {
        res.status(400).send({ message: 'Email id already exists', error: err.message });
    }
};

export { signup };
