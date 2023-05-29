const mongoose = require('mongoose');
mongoose.connect('mongodb://ramdhan29:ramdhan29@cluster0-shard-00-00.ykiy5.mongodb.net:27017,cluster0-shard-00-01.ykiy5.mongodb.net:27017,cluster0-shard-00-02.ykiy5.mongodb.net:27017/?ssl=true&replicaSet=atlas-7n4kh0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Jawaban = mongoose.model('answer', {
    answer: {
        type: String,
        required: true
    },
});

module.exports = Jawaban;