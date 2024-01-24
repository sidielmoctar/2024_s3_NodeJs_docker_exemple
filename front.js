const axios = require('axios');

axios.get('http://localhost:3000/').then(resp => {
    console.log(resp.data);
});