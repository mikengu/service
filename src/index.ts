import { validateEnv } from './utils/validateEnv'
import { createConnection } from 'typeorm'
import { config } from './ormconfig'
import App from './app'
import 'dotenv/config'

validateEnv();

(async () => {
  try {
    const connection = await createConnection(config)
  } catch (err) {
    console.log('Error connecting to database', err)
    return err
  }

  const app = new App()
  app.listen()
})()
