import axios from 'axios';

class Api{
   
    static async getAddress(cep){
       const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

       console.log('Resposta: ', response.data);
    }
}

Api.getAddress('78195000');