import { v4 as uuidv4 } from 'uuid';

let users = [ ];
export const allUsers = (req, res)=>{  
    res.send(users);
}

export const createUser = (req, res)=>{
    const user = req.body; 
    users.push({  ...user, id: uuidv4()});
    res.send(`User with the name ${user.firstName} added to the database.`);
};

export const userDetail = (req, res)=>{
    const { id }= req.params;
    const founduser = users.find((user) => user.id == id);
    res.send(founduser);
};

export const deleteUser = (req, res) => {
    const { id }= req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User with the id ${id} deleted from the database`);
};

export const editUserDetails = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age, designation } = req.body;
    const user = users.find((user) => user.id == id);
    if(firstName) user.firstName = firstName;   
    if(lastName)  user.lastName = lastName;   
    if(age)  user.age = age;  
    if(designation)  user.designation = designation;
    res.send(`User with the ID ${id} has been updated.`)
    
};