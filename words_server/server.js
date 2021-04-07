const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const appPort = 4004;
const mongoUrl =
	'mongodb+srv://admin:admin12345@cluster0.ackfr.mongodb.net/<words>?retryWrites=true&w=majority';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//model
const WordsSchema = new mongoose.Schema({
	text: String,
	tags: Array,
	pre: String,
	post: String,
});

mongoose.model('Words', WordsSchema);

const Words = mongoose.model('Words');

//controller

const getAll = (req, res) => {
	Words.find()
		.exec()
		.then((words) => res.json(words))
		.catch((err) => res.status(500).json(err));
};

const create = (req, res) => {
	Words.create(req.body)
		.then((createWords) => res.json(createWords))
		.catch((err) => res.status(500).json(err));
};

const update = (req, res) => {
	Words.updateOne({ _id: req.params.id }, { $set: req.body })
		.exec()
		.then((word) => req.json(word))
		.catch((err) => res.status(500).json(err));
};

const remove = (req, res) => {
	Words.deleteOne({ _id: req.params.id })
		.exec()
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(500).json(err));
};

//Routers

app.get('/words', cors(corsOptions), getAll);
app.post('/words/', cors(corsOptions), create);
app.put('/words/:id', cors(corsOptions), update);
app.delete('/words/:id', cors(corsOptions), remove);

mongoose
	.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(appPort, () => console.log(`listening on port ${appPort} ...`)))
	.catch((err) => console.error(`Error connecting to mongo: ${mongoUrl}`, err));
