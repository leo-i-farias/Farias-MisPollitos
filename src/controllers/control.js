const renderHome = (req, res) =>{
    return res.render('index');   
}
const renderCart = (req, res) =>{
    return res.render('cart');
}

const renderDetailProduct = (req, res) =>{
    return res.render('detail_product');
}

const renderLogIn = (req, res) =>{
    return res.render('login');
}

const renderRegister = (req, res) =>{
    return res.render('register');
}

module.exports = {
    renderHome,
    renderCart,
    renderDetailProduct,
    renderLogIn,
    renderRegister
};