import User from "../models/user.js";
import bcrypt from "bcrypt";
import sendCookie from "../utils/features.js";


export const register = async (req, res) => {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
        return res.status(404).json({
            success: false,
            message: "User already exist"
        })
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    user = await User.create({
        name,
        email,
        password: hashedpassword
    })
    sendCookie(user, res, "Registered successfully", 201);

}
export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "Invalid credentials"
        })
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(404).json({
            success: false,
            message: "Invalid credentials"
        })
    }
    sendCookie(user, res, "login successful", 200);
}

export const getme = (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user
    })
}

export const logout = async (req, res) => {
    res.status(200)
        .cookie("token", "", {
            expires: new Date(Date.now()),
            samesite: process.env.node_env === "Development" ? "lax" : "none",
            secure: process.env.node_env === "Development" ? false : true
        })
        .json({
            success: true,
            message: "Logged out successfully",
            user: req.user
        })
}
