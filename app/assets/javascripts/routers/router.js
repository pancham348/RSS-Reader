NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "":"feedsIndex",
    "feeds/:id":"feedsShow"
  },
  
  feedsIndex: function(){
    var indexDiv =  $("#sidebar");
    var newIndex = new NewsReader.Views.FeedsIndex({collection: NewsReader.Collections.feeds});
    NewsReader.Collections.feeds.fetch();
    indexDiv.html(newIndex.render().$el);
  },
  
  feedsShow: function(id) {
    var showDiv =  $("#sidebar");
    var showModel = NewsReader.Collections.feeds.getOrFetch(id);
    var newShow = new NewsReader.Views.FeedsShow({
      model: showModel
    });
    showModel.fetch();
    
    showDiv.html(newShow.render().$el);
  },
  
});
