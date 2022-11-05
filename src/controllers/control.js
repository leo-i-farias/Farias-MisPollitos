const readProductsDataBase = () =>{
    const products = JSON.parse(file.readFileSync(path.join(__dirname, '/database.json'), 'utf-8'));
    return products;
}
const readUsersDataBase = () =>{
    const users = JSON.parse(file.readFileSync(path.join(__dirname, '/users.json'), 'utf-8'));
    return users;
}
const writeUsersDataBase = (data) =>{
    file.writeFileSync(path.join(__dirname, '/users.json'), JSON.stringify(data));
}
const hashPassword = (password) =>{
    const password_hashed = bcrypt.hashSync(password, 10);
    return password_hashed;
}
const validatePassword = (password, user) =>{
    const value = bcrypt.compareSync(password, user.password);
    return value;
}
const viewProduct = (req, res) =>{
    const products = readProductsDataBase();
    const product_id = req.params.id;
    const product = products.filter(i => i.id == product_id);
    const producto = product[0];
    res.render('detail_product', {producto});
}
const login = (req, res) =>{
    const users = readUsersDataBase();
    const {email, password} = req.body;
    const user_login = users[0];
    const password_valid = validatePassword(password, user_login);
    if(user_login.email == email && password_valid){
        req.session.user_login = user_login;
        res.redirect('/');
    }
}
const logout = (req, res) =>{
    req.session.destroy();
    res.redirect('/login');
}
const newUser = (req, res) =>{
    const users = readUsersDataBase();
    const {name, last_name, email, date_birth, password} = req.body;
    const password_hash = hashPassword(password);
    const new_user = {
        name: name,
        last_name: last_name,
        birth_date: date_birth,
        password: password_hash
    };
    users.push(new_user);
    writeUsersDataBase(users);
}
module.exports = {
    viewProduct,
    login,
    logout,
    newUser
};