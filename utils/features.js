import jwt from "jsonwebtoken";

const sendCookie = (user, res, message, statusCode = 200) => {
    
    const token = jwt.sign({ _id: user._id }, process.env.jwt_secret);
    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
        samesite:process.env.node_env==="Development"?"lax":"none",
        secure:process.env.node_env==="Development"?false:true
    })
        .json({
            success: true,
            message,
        })
}
export default sendCookie;