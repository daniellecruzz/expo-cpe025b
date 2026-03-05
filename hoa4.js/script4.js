let images = {
  data: [],

  add: function(title, artist, year) {
    this.data.push({ title: title, artist: artist, year: year });
  },

  edit: function(title, artist, newYear) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].title === title) {
        this.data[i].artist = artist;
        this.data[i].year = newYear;
      }
    }
  },

  delete: function(title) {
    this.data = this.data.filter(img => img.title !== title);
  },

  show: function() {
    for (let i = 0; i < this.data.length; i++) {
      let img = this.data[i];
      console.log(img.title + " (" + img.artist + ", " + img.year + ")");
    }
  }
};

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);

images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');

images.show();