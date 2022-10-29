import axios from 'axios';

let apiIdeas = {}

apiIdeas.sendIdea = async (idea) => {
    let data = await axios.post("http://localhost:3000/idea/", { body: { idea: idea } })
    console.log(data);
    return data;
}

export default apiIdeas;