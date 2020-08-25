import express from 'express'
import bodyParser from 'body-parser'

class App {
  private app: express.Application

  constructor() {
    this.app = express()
    this.initializeMiddlewares()
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`)
    })
  }

  public initializeMiddlewares() {
    this.app.use(bodyParser.json())
  }
}

export default App