

const protect = (req, res, next) => {
    req.body = {resp: "it is what it is"}
    next()
}

module.exports = protect