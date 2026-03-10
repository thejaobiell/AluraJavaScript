import "dotenv/config";
import app from './source/app.js'

const PORT = 3000;

// Criando o 'listener' para o servidor, que irá "escutar" as requisições na porta 3000
app.listen(PORT, () => {
    console.log('Servidor rodando na porta 3000');
});
