import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'nika';

export function authMiddleware(req, res, next) {
    const token = req.headers['authorization'] || "";

    try {
        const decoded = jwt.verify(token, jwtSecret);

        if (typeof decoded === 'object' && 'email' in decoded) {
            req.email = decoded.email;
            next();
        } else {
            res.status(403).json({ msg: "User not Authorized" });
        }

    } catch (e) {
        res.status(403).json({ success: false, message: "User not Authorized" });
    }
}
