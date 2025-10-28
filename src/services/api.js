//esse arquivo aq vai auxiliar a conexão
import axios from 'axios';

//axios.create criar conexão com servidor
const api = axios.create({
    //endereço da minha API
    baseURL: 'http://localhost:3000'
})

export default api;