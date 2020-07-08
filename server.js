const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = ('path')

const app = express();
app.use(bodyParser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
    next();
});
const db = require('./config/keys').mongoURI
mongoose.connect(db, {
    useNewURLParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('mongodb connected')).catch(err => console.log(err))
app.use('/api/forms', require('.routes/api/forms'))

// PRODUCTION ONLY
/*app.use(express.static(path.join(__dirname, 'client/build')));
// PRODUCTION ONLY
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});*/

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`))