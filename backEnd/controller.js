const users = [
    {
        id: 1,
        name: 'thisal',
    },
    {
        id: 2,
        name: 'isuru',
    },
    {
        id: 3,
        name: 'Karunarathna'
    },
];

const getUsers = (cb) => {
    cb(users);
}

const getUserById = (id, cb)=>{
    const user= users.find(user => user.id == id);
    cb(user);
}

exports.getUsers = getUsers;
exports.getUserById = getUserById;