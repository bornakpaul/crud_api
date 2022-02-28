import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [ ];

//* all routes are stating with /users here.
router.get('/', (req, res)=>{  
    res.send(users);
});

router.post('/', (req, res)=>{
    //console.log(req.body);
    //res.send("POST ROUTE REACHED");
    const user = req.body;
    
    users.push({  ...user, id: uuidv4()});
    res.send(`User with the name ${user.firstName} added to the database.`);
});

router.get('/:id', (req, res)=>{
    const { id }= req.params;
    const founduser = users.find((user) => user.id == id);
    res.send(founduser);
});


router.delete('/:id', (req, res) => {
    const { id }= req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User with the id ${id} deleted from the database`);
});


router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age, designation } = req.body;
    const user = users.find((user) => user.id == id);

    if(firstName) user.firstName = firstName;
    
    if(lastName)  user.lastName = lastName;
    
    if(age)  user.age = age;
    
    if(designation)  user.designation = designation;

    res.send(`User with the ID ${id} has been updated.`)
    
});

export default router;