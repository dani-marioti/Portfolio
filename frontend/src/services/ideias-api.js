import axios from 'axios';

let apiIdeas = {}

apiIdeas.sendIdea = async (idea) => {
    axios.post(`http://192.168.5.53:3000/idea`, idea, null)
    .then(res => {
        return res.data;
    })
    .catch(error => {
        console.log(error) // tratar erro
    });
}


apiIdeas.getIdeas = async () => {
    let data = await axios.get(`http://192.168.5.53:3000/idea`)
    return data;
}

apiIdeas.updateIdea = async (update, id) => {
    let data = await axios.put(`http://192.168.5.53:3000/idea/`+id, update, null)
    return data;
}

export default apiIdeas;