import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata";

AppDataSource.initialize().then(()=> {
    console.info("database connection stablished")
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);    
    })
})
    .catch((error) => {
        console.error(error);
    })