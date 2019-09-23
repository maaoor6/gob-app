const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Gob = new Schema({
    gob_description: {
        type: String
    },
    gob_responsible: {
        type: String
    },
    gob_priority: {
        type: String
    },
});

const gobsTable = mongoose.model('Gob', Gob);


getGobsList = () => {
    return p = new Promise((resolve, reject) => {
        gobsTable.find({})
            .then((gob) => {
                return resolve(gob);
            })
            .catch((err) => {
                return reject(err)
            })
    })
}

AddGob = (data) => {

   return p = new Promise((resolve, reject) => {
        gobsTable.findOne({_id: data._id })
            .then((gob) => {
                if (gob) reject("gob exisit");
                else {
                    let gobObj = gobsTable({
                       gob_description :data.gob_description,
                       gob_responsible :data.gob_responsible,
                       gob_priority :data.gob_priority,
                    });
                    gobObj.save();
                    resolve(gobObj);
                }
            })

    })
}



module.exports ={
    gobsTable:gobsTable,
    getGobsList:getGobsList,
    AddGob:AddGob,

}