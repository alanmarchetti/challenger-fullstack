import axios from 'axios';

export const loadAllUsers = async () => {
    const response = await axios.get("http://localhost:4444/api/user/all");
    return response.data.users;
}
    

