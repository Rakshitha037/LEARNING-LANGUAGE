const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect('mongodb+srv://rakshitharakshitha6242:raksh@cluster0.rdl2otz.mongodb.net/biggdata', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

const grammerSchema = new mongoose.Schema({
    language: String,
    topic: String,
    content: String
});

const Grammer = mongoose.model('Grammer', grammerSchema);

const vocabularySchema = new mongoose.Schema({
    language: String,
    topic: String,
    content: String
});

const Vocabulary = mongoose.model('Vocabulary', vocabularySchema);

const exerciseSchema = new mongoose.Schema({
    language: String,
    topic: String,
    question: String,
    options: [String],
    answer: String
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

const videoSchema = new mongoose.Schema({
    language: String,
    title: String,
    url: String
});

const Video = mongoose.model('Video', videoSchema);

// Grammar Routes
app.get('/api/grammer/:language', async (req, res) => {
    try {
        const grammer = await Grammer.find({ language: req.params.language });
        res.json(grammer);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.post('/api/grammer', async (req, res) => {
    try {
        const newGrammer = new Grammer(req.body);
        const savedGrammer = await newGrammer.save();
        res.json(savedGrammer);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.put('/api/grammer/:id', async (req, res) => {
    try {
        const updatedGrammer = await Grammer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedGrammer);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.delete('/api/grammer/:id', async (req, res) => {
    try {
        await Grammer.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Grammer deleted' });
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// Vocabulary Routes
app.get('/api/vocabulary/:language', async (req, res) => {
    try {
        const vocabulary = await Vocabulary.find({ language: req.params.language });
        res.json(vocabulary);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.post('/api/vocabulary', async (req, res) => {
    try {
        const newVocabulary = new Vocabulary(req.body);
        const savedVocabulary = await newVocabulary.save();
        res.json(savedVocabulary);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.put('/api/vocabulary/:id', async (req, res) => {
    try {
        const updatedVocabulary = await Vocabulary.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedVocabulary);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.delete('/api/vocabulary/:id', async (req, res) => {
    try {
        await Vocabulary.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Vocabulary deleted' });
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// Exercise Routes
app.get('/api/exercises/:language', async (req, res) => {
    try {
        const exercises = await Exercise.find({ language: req.params.language });
        res.json(exercises);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.post('/api/exercises', async (req, res) => {
    try {
        const newExercise = new Exercise(req.body);
        const savedExercise = await newExercise.save();
        res.json(savedExercise);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.put('/api/exercises/:id', async (req, res) => {
    try {
        const updatedExercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedExercise);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.delete('/api/exercises/:id', async (req, res) => {
    try {
        await Exercise.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Exercise deleted' });
    } catch (error) {
        res.status(500).send('Server Error');
    }
});
// Video Routes
app.get('/api/videos/:language', async (req, res) => {
    try {
        const videos = await Video.find({ language: req.params.language });
        res.json(videos);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.post('/api/videos', async (req, res) => {
    try {
        const newVideo = new Video(req.body);
        const savedVideo = await newVideo.save();
        res.json(savedVideo);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.put('/api/videos/:id', async (req, res) => {
    try {
        const updatedVideo = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedVideo);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.delete('/api/videos/:id', async (req, res) => {
    try {
        await Video.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Video deleted' });
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
