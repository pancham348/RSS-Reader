NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: 'api/feeds',
  model: NewsReader.Models.Feed,
  
  getOrFetch:function(id){
    var model = this.get(id)
    if(model) {
      return model;
    } else {
      model = new NewsReader.Models.Feed({id: id});
      return model;
    }
    
  },
});


NewsReader.Collections.feeds = new NewsReader.Collections.Feeds();