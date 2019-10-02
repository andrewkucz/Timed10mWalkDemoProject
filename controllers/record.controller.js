var Record = require('../models/record.model');

// GET '/api/records'
exports.list = function(req, res) {

    Record.find().populate('patient').exec(function (err, objs) {
        if (err) {
            res.status(400).send('Error getting records');
        } else {
            res.json(objs);
        }
    });
}

// POST '/api/records/add'
exports.create = function(req, res) {
    let obj = new Record(req.body);
    obj.save()
        .then(obj => {
            res.status(200).json(obj);
        })
        .catch(err => {
            console.log(err);
            res.status(400).send('adding new event failed');
        });
}

// GET '/api/records/:id'
exports.read = function(req, res) {
    let id = req.params.id;
    Record.findById(id, function(err, obj) {
        res.json(obj);
    });
}

// POST '/api/records/update/:id'
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

// DELETE '/api/records/delete/:id'
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

// /api/records/bypatient/:patientid
exports.findByPatientId = function(req, res) {
    Record.find({patient: req.params.patientid},function (err, obj) {
        if(err)
        {
            res.status(400).send("Error finding records by patient");
        }
        else
        {
            res.json(obj);
        }
    });
}
