let images = {
  data: [],

  add: function(title, artist, year) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].title === title) {
        return;
      }
    }
    this.data.push({ title, artist, year });
  },

  show: function() {
    for (let i = 0; i < this.data.length; i++) {
      let img = this.data[i];
      console.log(img.title + " (" + img.artist + ", " + img.year + ")");
    }
  },

  clear: function() {
    this.data = [];
  }
};

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503); // duplicate ignored

images.show();

images.clear();
images.show();