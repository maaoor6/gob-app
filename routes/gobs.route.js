const express = require('express');
const router = express.Router();
const gobsModel = require('../models/gobs.model')

router.get('',(req,res)=>{
    gobsModel.getGobsList()
    .then((gob)=>{
        return res.status(200).json({sucsses:gob})
    })
    .catch((err)=>{
        return res.status(207).json({err:err})
    })

})
router.route('/:id').get((req, res) =>{
    let id = req.params.id;
    gobsModel.gobsTable.findById(id, (err, gob)=> {
        res.json(gob);
    });
});

router.post('/addGob',(req,res)=>{
    let obj = {
        _id:req.body._id,
        gob_description: req.body.gob_description,
        gob_responsible :req.body.gob_responsible,
        gob_priority :req.body.gob_priority,
    };
    
    gobsModel.AddGob(obj)
    .then((data)=>{
        console.log(data)
        return res.status(200).json({success :"Gob added successfully'",})
    })
    .catch((err)=>{
        console.log(err)
        return res.status(207).json({err :"adding new Gob failed"})
    })

})


router.route('/update/:id').post((req, res) =>{
    gobsModel.gobsTable.findById(req.params.id, (err, gob) =>{
        if (!gob)
            res.status(404).send("data is not found");
        else
            gob.gob_description = req.body.gob_description;
            gob.gob_responsible = req.body.gob_responsible;
            gob.gob_priority = req.body.gob_priority;
            gob.save().then(gob => {
                res.json('gob updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

router.route('/delete/:id').get( (req, res) =>{
    gobsModel.gobsTable.findByIdAndRemove({_id: req.params.id}, function(err, gob){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});



module.exports = router;