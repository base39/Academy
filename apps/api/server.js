/* eslint-disable no-console */
const app = require('./config/express')(),
port = app.get('port');

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
