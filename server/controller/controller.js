const Router = require('express');
const router = new Router();

const UsersService = require('../services/users.service');

router.get('', (req, res) => {
    res.send(UsersService.massive());
});

router.get('/get/:id', (req, res) => {
    res.send(UsersService.getItem(req.param("id"))).status(200);
});


module.exports = router;