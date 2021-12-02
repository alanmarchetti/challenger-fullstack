import axios from 'axios';

export const loadAllUsers = async () => {
    const response = await axios.post("http://localhost:4444/api/user/");
    return response.data.users;
}
    

