



const login = async (req, res) => {
    res.send('Untrue Login/Regisetr/ignup Route')
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: `Hello, Iykeslim`, secret: `Here is your authorized data, your lucky nimber is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}