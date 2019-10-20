const express = require('express'); 
const cors = require('cors');


const app = express(); 

app.use(cors());
var json = {
    a:'cv1',
    b:'cv2',
    c:'cv3',
    d:'cv4',
    e:'cv5'
}
app.get('/', (req, res) => {
     res.json(json);
});

app.listen(3000, () => {
    console.log(`Server started on port`);
});