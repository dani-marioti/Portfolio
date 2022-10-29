import express, { urlencoded, json } from 'express'
import routes from './routes'
import db from './db';

const app = express();

// Middleware
app.use(urlencoded({extended: true}));
app.use(json());

// Rotas
for(const route of routes) {
  app.use(route.path, route.router)
}

// Inicialização do servidor
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`)
})

const closeServer = async () => {
  console.info('💿 Closing database connection');
  await db.$disconnect()

  console.info('💻 Shutting server off');
  server.close()
  process.exit(0)
}

process.on('SIGINT', closeServer)
process.on('SIGTERM', closeServer)