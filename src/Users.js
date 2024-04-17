import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [
    {
        id: 1,
        name: 'Thisal',
    },
    {
        id: 2,
        name: 'Isuru',
    }
];


const Users = () => {
    return (
        <Box>
            <UserForm />
            <UsersTable rows={users} />
        </Box>
        
    );
    
}

export default Users;