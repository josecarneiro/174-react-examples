'use strict';

const { Router } = require('express');
const router = new Router();

const Note = require('./../../models/note');

/*
router.get('/list', (req, res, next) => {
  Note.find()
    .then(notes => {
      res.json({ notes });
    })
    .catch(error => {
      next(error);
    });
});
*/

router.get('/list', async (req, res, next) => {
  try {
    const notes = await Note.find().exec();
    res.json({ notes });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id).exec();
    res.json({ note });
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  const { title, content } = req.body;
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, {
      ...(title && { title }),
      ...(content ? { content } : {})
    }).exec();
    res.json({ note });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Note.findByIdAndRemove(req.params.id).exec();
    res.json({});
  } catch (error) {
    next(error);
  }
});

const multerMiddleware = require('./../../middleware/multer-configuration');

router.post('/create', multerMiddleware.single('image'), async (req, res, next) => {
  console.log(req.body);
  console.log(req.file);
  // const { title, body } = req.body;
  const title = req.body.title;
  const content = req.body.content;
  try {
    // const note = await Note.create({ title, body }).exec();
    const data = {
      title: title,
      content: content,
      image: req.file.url
    };
    const note = await Note.create(data);
    res.json({ note });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
