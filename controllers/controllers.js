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
        res.status(400).json({ success: false });
    }
}
