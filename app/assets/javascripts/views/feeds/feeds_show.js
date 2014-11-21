NewsReader.Views.FeedsShow = Backbone.View.extend({
  
  initialize: function() {
    //this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, "add", this.addSubview)
    this.subviews = [];
    var that = this;
    this.model.fetch({
      success: function() {
      that.model.entries().each(function(entry){
          that.addSubview(entry)
        }.bind(this));
        this.addSubviews().bind(this);
      }
    })
  },
  
  addSubview: function(entry){
    var entryView = new NewsReader.Views.EntryShow({
      model: entry
    });
    this.subviews.push(entryView.render());
    this.attachSubView(entryView);
  },
  
  attachSubView: function(subview){
    this.$('.entry-list').append(subview.$el);
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
