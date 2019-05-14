var friends = require('../data/friends')


app.get('/', function (req, res) {
    res.send(friends) 
  })

