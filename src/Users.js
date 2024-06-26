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
        <Box
            sx={{
                width: 'calc(100% -100px)',
                margin: 'auto',
                marginTop: '100px',
                paddingLeft: '2%',
                paddingRight: '2%',
            }}
        >
            <UserForm />
            <UsersTable rows={users} />
        </Box>
        
    );
    
}

export default Users;