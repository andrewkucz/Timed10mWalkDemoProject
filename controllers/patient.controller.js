var Patient = require('../models/patient.model');

// GET '/api/patients'
exports.list = function(req, res) {
    Patient.find(function(err, objs) {
        if (err) {
            console.log(err);
        } else {
            res.json(objs);
        }
    });
}

// POST '/api/patients/add'
exports.create = function(req, res) {
    let obj = new Patient(req.body);
    obj.save()
        .then(obj => {
            res.status(200).json(obj);
        })
        .catch(err => {
            res.status(400).send('Error adding patient');
        });
}

// GET '/api/patients/:id'
exports.read = function(req, res) {
    let id = req.params.id;
    Patient.findById(id, function(err, obj) {
        res.json(obj);
    });
}

// POST '/api/patients/update/:id'
exports.update = function(req, res) {
    Patient.findById(req.params.id, function(err, obj) {
        if (!obj)
            res.status(404).send("data is not found");
        else

            // Updating fields
            var fields = ['name'];
            fields.forEach(f => {
                obj[f] = req.body[f];
            });

            obj.save().then(obj => {
                res.status(200).send('Patient updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
}

// DELETE '/api/patients/delete/:id'
exports.delete = function(req, res) {
    Patient.findById(req.params.id, function(err, obj) {
        if (!obj)
            res.status(404).send("data is not found");
        else
            obj.remove().then(obj => {
                res.status(200).send('Deleted successfully');
            })
            .catch(err => {
                res.status(400).send("Error with deletion");
            });
    });
}
