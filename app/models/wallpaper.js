var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WallpaperSchema = new Schema ({
  name: String
});

module.exports = mongoose.model('Wallpaper', WallpaperSchema);