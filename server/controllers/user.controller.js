const register = (req, res) => {
    res.json({message: "Controller registration is working"});
}

const login = (req, res) => {
    res.json({message: "Controller login is working"});
}

//exporting both register and login 
export { register, login};