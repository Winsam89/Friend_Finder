const friends = require('../data/friends')

module.exports = function (app) {
   
  
app.get('freinds', function (req, res) {
    res.json(friends)
    })