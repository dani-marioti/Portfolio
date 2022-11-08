import axios from 'axios';

let apiIdeas = {}

apiIdeas.sendIdea = async (idea) => {
    console.log(idea);
    axios.post(`http://192.168.1.40:3000/idea`, idea, null)
    .then(res => {
        console.log(res.data)
        // 
        return res.data;
    })
    .catch(error => {
        console.log(error) // tratar erro
    });
}


apiIdeas.getIdeas = async () => {
    let data = await axios.get(`http://192.168.1.40:3000/idea`)
    // .then(res => {
    //     console.log(res.data)
    //     // 
    //     return res.data;
    // })
    // .catch(error => {
    //     console.log(error) // tratar erro
    // });
    return data;
}

export default apiIdeas;