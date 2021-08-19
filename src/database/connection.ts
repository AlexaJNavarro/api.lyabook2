import mongoose from 'mongoose'

export class DB{
    public static Connection(){
        try {
            if(typeof process.env.MONGO_URI !== 'undefined'){
                mongoose.connect(process.env.MONGO_URI,{
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
                console.log("Base de datos conectada exitosamente")
            }else{
                throw new Error("No se logro conectar la BD")
            }
            
        } catch (error) {
            throw error
        }
    }
}