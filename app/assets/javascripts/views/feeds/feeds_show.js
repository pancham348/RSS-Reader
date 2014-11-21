NewsReader.Views.FeedsShow = Backbone.View.extend({
  
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },
  
  template: JST['feeds/show'],
  
  events: {
    "click .refresh-feed": "reload"
  },
  
  reload: function(){
    this.model.fetch();
  },
  
  render: function(){
    console.log('rendering show');
    var content = this.template({feed: this.model.entries() });
    this.$el.html(content);
    return this;
  },
  
});
