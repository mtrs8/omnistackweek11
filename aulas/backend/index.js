const express = require('express');
const app = express();
/**
 * Rota / Recurso
 */ 
/**
 * Métodos HTTP:
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */ 

/**
 * Tipos de parametros:
 * Query Params: Parametros nomeados enviados na rota após o simblo de "?"
 * Utilização: Filtros, paginação
 * 
 * Route params: Utilizados para identificar recursos
 * 
 */  
app.get('/users/:id', (request, response) => {
    const params = request.params;
    console.log(params);
    response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Matheus Rodrigues'
    })
});

app.listen(3333);