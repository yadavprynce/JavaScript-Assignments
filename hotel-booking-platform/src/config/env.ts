import dotenv from 'dotenv'
dotenv.config()

interface Env {
    PORT:string,
    DATABASE_URI:string,
    JWT_SECRET:string
}

const ENV:Env = {
    PORT:process.env.PORT!,
    DATABASE_URI:process.env.DATABASE_URI!,
    JWT_SECRET:process.env.JWT_SECRET!

}

export default ENV
