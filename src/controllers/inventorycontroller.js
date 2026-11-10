
const inventories = [];
let currentId = 1;

exports.createInventory = (req, res) => {
    const { name, category, quantity, price } = req.body;
    const inventory = { id: currentId++, name, category, quantity, price };
    inventories.push(inventory);
    res.status(201).json(inventory)
}

exports.getAllProducts = (req, res) => {
    const { search } = req.query;
    if (search) {
        console.log(search)
        const filteredInventory = inventories.filter(inventory =>
            inventory.name.toLowerCase().includes(search.toLowerCase()) ||
            inventory.category.toLowerCase().includes(search.toLowerCase())
        );
        return res.json(filteredInventory);
    }
    res.json(inventories)
}


exports.updateProductById = (req, res) => {
    const inventory = inventories.find((b) => {
        return b.id === parseInt(req.params.id)
    });
    if (!inventory) return res.status(404).send('Product not find');

    const { name, category, quantity, price } = req.body;

    if (name) {
        inventory.name = name;
    }
    if (category) {
        inventory.category = category;
    }
    if (quantity) {
        inventory.quantity = quantity;
    }
    if (price) {
        inventory.price = price
    }
    res.json(inventory);
};


exports.deleteProductById = (req, res) => {
    const index = inventories.findIndex((b) => {
        return b.id === parseInt(req.params.id)
    })
    if (index === -1) {
        return res.status(404).send('Product not find');
    }

    inventories.splice(index, 1);
    res.status(204).send();
}

