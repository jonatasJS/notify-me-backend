import * as express from 'express';
import * as cors from 'cors';

const app = express();
const port = 3000;
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// variavel onde salva o tempo de inicio do servidor
const start = Date.now();

app.get('/', (req, res) => {
  // retorna o tempo de execução do servidor em horas minutos e segundos
  const uptime = new Date(Date.now() - start);
  const hours = uptime.getUTCHours();
  const minutes = uptime.getUTCMinutes();
  const seconds = uptime.getUTCSeconds();

  res.json({
    message: 'PC is running',
    uptime: `${hours}h ${minutes}m ${seconds}s`,

  }).status(200);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
