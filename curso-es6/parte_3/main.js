import Axios from "axios";

// const minhaPromise = () => new Promise((resolve, reject)=>{
//     setTimeout(()=>{resolve("ok")}, 1000);
// });

// minhaPromise().then((resolve =>{
//     console.log(resolve)
// })).catch(error =>{
//     console.log(error)
// });

// // nova sintaxe

// async function executarPromise(){
//     const response = await minhaPromise() // aqui pode está esperando uma resposta da API
    
//     console.log(response)
// }
// executarPromise();

// const minhaOutraFunctionAsync = async () => {
//     // as chamandas só serão executadas após o retorno da anterior
//     console.log(await minhaPromise())
//     console.log(await minhaPromise())
//     console.log(await minhaPromise())
// };

// minhaOutraFunctionAsync();

import axios from 'axios';

class Api{
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response);
        }catch(err){
            console.log(`Erro na API ${err}`)
        }
    }
}

Api.getUserInfo("damyaoferreyra");