import express, { urlencoded, json } from 'express'
import routes from './routes'

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
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`)
})