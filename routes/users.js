import express from 'express';

const router = express.Router();

const users = [
    {
        firstName : "Bornak",
        lastName : "Paul",
        age : 21,
        designation : "Software Development Engineer"
    },
    {
        firstName : "Bonney",
        lastName : "Paul",
        age : 28,
        designation : "Freelancer/Fitness Instructor"
    }
];

//* all routes are stating with /users here.
router.get('/', (req, res)=>{  
    res.send(users);
});

router.post('/', (req, res)=>{
    //console.log(req.body);
    //res.send("POST ROUTE REACHED");
    const user = req.body;
    users.push(user);
    res.send(`User with the name ${user.firstName} added to the database.`);
});

export default router;