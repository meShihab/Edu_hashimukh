const mongoose = require('mongoose');
// creating a database
mongoose
  .connect('mongodb+srv://donate:donate23@cluster0.zx3rixq.mongodb.net/donate?retryWrites=true&w=majority', {
    // useCreateIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connection successful');
  })
  .catch((error) => {
    console.log(error);
  });
