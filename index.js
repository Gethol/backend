const express = require('express');
const app = express();
const port = 3001;
const birds = require("./routes/birds.js");
const cats = require("./routes/cat.routes.js");

app.use('/cats', cats);
app.use('/birds', birds);




// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//     res.send('Got a Post Request')
// })
// app.all('/secret', (req, res, next) => {
//     console.log('Accessing the secret section...')
//     next()
// })

// app.get('/random.text', (req, res) => {
//     res.send('random.text')
//   })

// app.get('/users/:userId/books/:bookId', (req, res) => {
//     res.send(req.params)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})