var Record = require('../models/record.model');

// GET '/api/events'
exports.list = function(req, res) {

    let q = req.query.type ? { event_type: req.query.type } : {};

    Record.find(q, function (err, objs) {
        if (err) {
            res.status(400).send('Error getting events');
            console.log(err);
        } else {
            res.json(objs);
        }
    });
}

// POST '/api/events/add'
exports.create = function(req, res) {
    let obj = new Record(req.body);
    obj.save()
        .then(obj => {
            res.status(200).json({'event': 'event added successfully'});
        })
        .catch(err => {
            console.log(err);
            res.status(400).send('adding new event failed');
        });
}

// GET '/api/events/:id'
exports.read = function(req, res) {
    let id = req.params.id;
    Record.findById(id, function(err, obj) {
        res.json(obj);
    });
}

// POST '/api/events/update/:id'
exports.update = function(req, res) {
    Record.findById(req.params.id, function(err, obj) {
        if (!obj)
            res.status(404).send("data is not found");
        else

            // Updating fields
            var fields = ['patient','duration','date','note'];
            fields.forEach(f => {
                obj[f] = req.body[f];
            });

            obj.save().then(obj => {
                res.json('Model updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
}

// DELETE '/api/events/delete/:id'
exports.delete = function(req, res) {
    Record.findById(req.params.id, function(err, obj) {
        if (!obj)
            res.status(404).send("data is not found");
        else
            obj.remove().then(obj => {
                res.json('Deleted successfully');
            })
            .catch(err => {
                res.status(400).send("Error with deletion");
            });
    });
}

