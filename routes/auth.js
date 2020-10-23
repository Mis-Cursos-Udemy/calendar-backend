/** 
 * Rutas de Usuarios / Auth
 * host + /api/auth 
 **/

const express = require('express');
const router = express.Router();

router.post('/new', (req, res) => {    
    res.json({
        ok: true
    })
});

module.exports = router;