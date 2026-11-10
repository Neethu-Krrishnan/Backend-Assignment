const express = require ('express');
const app = express();
const inventoryRoutes = require('./routes/inventoryRoutes');
app.use(express.json());


app.use('/inventories',inventoryRoutes)

const port = 3000
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
})
