//pega as informações do arquivo de configuração(GET)
const Store = require('../models/store');

exports.getStores = async (req, res, next) => {
    try {
        const stores = await Store.find();
        res.status(200).json({
            success: true,
            count: stores.length,
            data: stores
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: "Server error" });
    }
}

//create a new store(POST)
exports.addStore = async (req, res, next) => {
    try {
        const store = await Store.create(req.body);
        res.status(201).json({
            success: true,
            data: store
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: "Server error" });
    }
}