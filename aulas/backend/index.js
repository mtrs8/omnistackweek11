const express = require('express');
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
const app = express();
app.get('/users', (request, response) => {
    response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Matheus Rodrigues'
    })
});

app.listen(3333);