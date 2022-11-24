import axios from 'axios';

let apiLogin = {}

apiLogin.login = async (login) => {
    console.log(login);
    const data = await axios.post(`http://192.168.5.53:3000/user/`, login, { validateStatus: false });
    console.log("DATA: ", data);
    return data;
}


export default apiLogin;