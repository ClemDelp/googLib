/////////////////////////////////////////////////
var googStream = {
  // Classes
  Collections: {},
  Models: {},
  Views: {},
  // Instances
  collections: {},
  models: {},
  views: {},
  init: function(json) {
    main = new googStream.Views.Main({
      el         : json.el,
      term       : json.term,
      mode       : json.mode,
      type       : json.type,
      perpage    : json.perpage,
      moreButton : json.moreButton,
      width      : json.width,
    });
    main.render(); 
  }
};
/////////////////////////////////////////////////
// MAIN
/////////////////////////////////////////////////
googStream.Views.Main = Backbone.View.extend({
    initialize : function(json) {
        _.bindAll(this, 'render');
        ////////////////////////////
        this.mode       = json.mode;
        this.term       = json.term;
        this.childViews = [];
        this.type       = json.type;
        this.perpage    = json.perpage;
        this.moreButton = json.moreButton;
        this.width      = json.width;
        // Settings
        this.settings = {
          term        : this.term, // the term what you want to looking for
          siteURL     : 'creaktive.fr',   // Change this to your site
          searchSite  : false,    // filter search on the site or not
          type        : this.type,// images / news / video / web
          append      : false,   // append new element to el
          perPage     : this.perpage,    // A maximum of 8 is allowed by Google
          page        : 0,    // The start page
          protocol    : 'http', // http or https 
          more        : this.moreButton, // display or not the more button
          width       : this.width, // display or not the more button
        }
        // Events

        // Templates
        ////////////////////////////:
    },
    events : {},
    render : function(){        
        ///////////////////////
        // init
        $(this.el).empty();
        googLib.googleSearch(this.settings,$(this.el));
        return this;
    }
});
/////////////////////////////////////////////////
