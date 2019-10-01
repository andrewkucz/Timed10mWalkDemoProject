
var express = require('express'),
    router = express.Router();

const ctrl = require('../controllers/record.controller');
// BASE = /api/events

router.route('/')
  .get(ctrl.list)

router.route('/add')
  .post(ctrl.create)

router.route('/:id')
  .get(ctrl.read)

router.route('/update/:id')
  .post(ctrl.update)

router.route('/delete/:id')
  .post(ctrl.delete)

module.exports = router;
