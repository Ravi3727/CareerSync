// const Username = require("../models/Username");
exports.setUserName = async (req, res) => {
    try {
        const { username } = req.body;
        if (!username) {
            res.status(404).json({
                success: false,
                message: "Please enter username"
            })
        }
        // const response = await Username.create({ username });
        res.status(200).json({
            success: true,
            // data: response,
            message: "Username set successfully"
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            data: "error changing",
            message: err.message
        });
    }
}