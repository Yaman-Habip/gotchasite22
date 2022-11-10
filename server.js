
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 5003;

app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    res.render('index')
});

app.get('/login', (req,res)=>{
    res.render('login');
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
