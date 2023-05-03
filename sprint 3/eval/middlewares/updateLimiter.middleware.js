// updateLimiter: This middleware will only allow the updating the document if it is mutable, which can be deduced from the document itself.

const updateLimiter = (req, res, next) => {
    const player = req.body;
    if (!player.mutable) {
        return res.status(400).json({
            err: "Cannot update this player as it is not mutable"
        })

        next();
    }
}

module.exports = {
    updateLimiter
}