import axios from 'axios';

let apiIdeas = {}

apiIdeas.sendIdea = async (idea) => {
    console.log(idea);
    axios.post(`http://172.19.0.1:3000/idea`, idea, null)
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
    let data = await axios.get(`http://172.19.0.1:3000/idea`)
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