NewsReader.Views.NewFeedForm = Backbone.View.extend({
  initialize: function() {
  },
  
  events: {
    "click .new-feed-button" : "submitForm"
  },
  
  template: JST['feeds/feed_form'],
  
  render: function(){
    console.log('rendering form');
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  
  submitForm: function(event){
    event.preventDefault();
    var formData = $("#new-form").serializeJSON();
    // debugger
    if(formData.feed.url.substring(0, 4) != "http") {
      alert("invalid")
      return
    }
    var model = new NewsReader.Models.Feed(formData);

    model.save({
      success: function(){
        alert("successs");
      },
      errors: function(){
        alert("error, error, error");
      }
    });
  }

});
