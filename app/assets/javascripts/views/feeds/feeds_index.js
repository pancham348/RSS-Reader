NewsReader.Views.FeedsIndex = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync remove", this.render)
  },
  
  events: {
  "click .delete" : "deleteFeed"   
  },
  
  template: JST['feeds/index'],
  render: function(){
    console.log('rendering index');
    var content = this.template({feeds: this.collection});
    this.$el.html(content);
    return this;
  },
  
  deleteFeed: function(event){
    var $target = $(event.currentTarget);
    var id = $target.data("id");
    var feed = this.collection.get(id);
    feed.destroy();
  },
  

});
