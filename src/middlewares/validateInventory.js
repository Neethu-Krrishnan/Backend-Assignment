const validateInventory = (req,res,next)=>{
    const {name,category,quantity,price}= req.body;
    if (!name||!category||!quantity||!price){
        return res.status(400).send('name,category,quantity,price are required')
    }
    next()
};

module.exports = validateInventory;