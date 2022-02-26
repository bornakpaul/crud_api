import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [ ];

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

export default router;