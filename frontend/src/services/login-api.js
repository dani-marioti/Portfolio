import axios from 'axios';

let apiLogin = {}

apiLogin.login = async (login) => {
    const data = await axios.post(`http://192.168.5.53:3000/user/`, login, { validateStatus: false });
    return data;
}


export default apiLogin;