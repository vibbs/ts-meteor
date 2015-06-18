Media = new FS.Collection("media", {
  stores: [new FS.Store.FileSystem("media", {path: "~/uploads/mediaFiles"})]
});

 Media.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  download: function () {
    return true;
  }
});