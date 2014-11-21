NewsReader.Collections.Entries = Backbone.Collection.extend({
  urlRoot: function() {
    return this.feed.url() + "/entries"
  },
  
  model: NewsReader.Models.Entry

});
