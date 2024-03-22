const mongoose = require('mongoose');
const mongoDBURL = process.env.MONGODB_URL;
mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;
