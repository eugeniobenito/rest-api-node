 const userRepository = require("../repositories/userRepository");
 const roleService = require("../services/roleService");
 const setCategory = require("../utils/category.handle");
 const { encrypt, compare } = require("../utils/password.handle");

 const getUsers = async () => {
    const users = await userRepository.getUsers();
    return users;
} 

 const getUser = async (user_email) => {
    console.log(`desde SERVICE ${user_email}`);
    const user = await userRepository.getUser(user_email);
    console.log(`desde SERVICE con USER ${user}`);    
    return user;
 }

 const createUser = async (user) => {
    let final_user = {
        "name": user.name,
        "email": user.email,
        "age": user.age,
        "category": setCategory(user.age),
        "password": await encrypt(user.password)
    };
    const new_user = await userRepository.createUser(final_user);

    const role = await roleService.addRole(
      {
         "user_email": user.email,
         "role": "user"
      }
    );

    const data = {
      user: new_user,
      role: role.role
    }

    console.log(data);

    return data;
 } 

 const updateUser = async () => {

 } 

 const deleteUser = async (id) => {
   await userRepository.deleteUser(id);
 }

 module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
 }