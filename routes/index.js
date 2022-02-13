const express = require('express');
const storeRoute = require('../controller/store.controller');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ massage: 'Hello World' });
});

router.get('/store', storeRoute.listStore);
router.post('/store', storeRoute.insertStore);
router.put('/store/:id', storeRoute.updateStore);
router.delete('/store/:id', storeRoute.deleteStore);

module.exports = router;
