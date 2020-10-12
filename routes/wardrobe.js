import express from 'express';
import mongoose from 'mongoose';
import Wardrobe from '../WardrobeModel.js';

const router = express.Router();

// find all the articles in the wardrobe
router.get('/wardrobe', async (req, res) => {
    console.log(res)
    try {
        const wardrobe = await Wardrobe.find()
        console.log(wardrobe, 'show all')
        res.json(wardrobe)
    } catch (err) {
        res.send(err)
    }
})

// find one of the articles in the wardrobe
router.get('/wardrobe', async (req, res) => {
    console.log(req, 'request for an article')
    try {
        const wardrobe = await Wardrobe.findById(req.params.id)
        res.json(wardrobe)
    } catch (err) {
        res.send(err)
    }
})

// add a new category in the wardrobe
router.post('/addCategory', async (req, res) => {
    try {
        const wardrobe = await Wardrobe.insert(req.data.addValue)
        const savior = await req.data.addValue.save()
        res.json(wardrobe)
    } catch (err) {
        res.send(err)
    }
})

//adds a new article to the wardrobe
router.post('/newArticle', async (req, res) => {
    console.log(req, "this is an addition request")
    const article = new Wardrobe({ 
        name: req.data.name, 
        type: req.data.type, 
        rating: req.data.rating 
    })

    try {
        const savior = await article.save()
        res.json(savior)
    } catch(err){
        res.send(err)
    }
});

// update the articles in the wardrobe
// router.post('/updateArticle', async (req, res) => {
//     console.log(req)
//     try {
//         const article = await Wardrobe.updateOne(req.data.id)
//         article.name = req.body.name
//         const savior = await article.save()
//         res.send(wardrobe)
//     } catch (err) {
//         res.send(err)
//     }
// })

router.post('/updateArticle', (req, res) => {
    console.log(req.data.id, "this is an update request")  
    const articleUpdate = {}  
    if (req.data.name !== '') articleUpdate.name = req.data.name
    if (req.data.rating !== '') articleUpdate.rating = req.data.rating  
    const updates = {
      $set: articleUpdate
    }  
    
    Jacket.updateOne({ _id: req.data.id }, updates, (err, article) => {
      if (err) return res.status(500).send(err)
      console.log('article updated')
      Jacket.findOne({ _id: req.data.id }, (err, article) => {
        if (err) return res.status(500).send(err)
        res.send(articleUpdate)
      })
    })
  })

// delete the articles in the wardrobe
router.post('/deleteArticle', async (req, res) => {
    console.log(req.body, "this is a deletion request")
    try {
        await Wardrobe.findByIdAndDelete(req.body.id)
        await article.save()
        // const deleteSuccess = await Wardrobe.find()
        // console.log(deleteSuccess, 'delete successful!')
        // res.send(deleteSuccess)
    } catch (err) {
        res.send(err)
    }
})

// Wardrobe.create({name: 'Tanktop', type: 'Light Outerwear', rating: 'cool'}, (err, res) => res.save())

// Wardrobe.deleteMany({}, (err, res) => console.log(res))
// Wardrobe.find({}, (error, res) => console.log(res, 'haaaallo'))
// Wardrobe.save();
// Wardrobe.find()
// console.log(Wardrobe);

export default router; 