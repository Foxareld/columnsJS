;(function($){
  "use strict";

  function Columns(element, options) {
    var _ = this;

    _.wrapper,
    _.numOfCol, //number of columns
    _.menuTag, //list tag for new element creation
    _.newCol,
    _.itemsPerColumn,
    _.element = $(element);

    _.defaults = {
      columns: 2, //number of columns
      breakAt: 0, //create columns if more than 'breakAt' number of items
      itemsInColumn: false, //if true, 'columns' becomes number of items in each column
      addWrapper: false,
      wrapper: "<div class='col-wrap' />"
    };

    _.settings = $.extend({}, _.defaults, options);

    _.init();
  }

  Columns.prototype = {
    init: function() {
      var _ = this;

      _.items = _.element.children(),
      _.classList = _.element.attr("class") ? _.element.attr("class") : "",
      _.elementTag = _.element.prop("tagName").toLowerCase()
      ;

      //don't create columns if # of items is less than breakAt
      if(_.items.length < _.settings.breakAt) {
        return;
      }
      else {
        _.columnPrep();
        _.createColumns();
        _.distributeItems();
      }
    },

    columnPrep: function() {
      var _ = this;

      _.element.addClass("menu-col column-1");

      //create wrapper, insert it, add element
      if(_.settings.addWrapper) {
        _.wrapper = $(_.settings.wrapper);
        _.wrapper.insertBefore(_.element);
        _.element.appendTo(_.wrapper);
      }

      //how many items per column
      if(_.settings.itemsInColumn) {
        _.itemsPerColumn = _.settings.columns;
      }
      else {
        _.itemsPerColumn = Math.ceil(_.items.length/_.settings.columns);
      }

      //number of columns to create
      _.numOfCol = Math.ceil(_.items.length/_.itemsPerColumn);
    },

    createColumns: function() {
      var _ = this;

      for(var x = _.numOfCol; x > 1; x--) {
        _.newCol = $("<" + _.elementTag +">", {
           "class": _.classList + " menu-col column-" + x
        });


        _.newCol.insertAfter(_.element);
      }
    },

    distributeItems: function() {
      var _ = this,
      inc = 1,
      curr
      ;

      $.each(_.items, function(i) {
        if((i+1) > _.itemsPerColumn) { //start on item for 2nd column, i.e. item 6 on a 3 column list with 5 items per column

          //loop through items, when remainder is 1 move to next column, i.e. move to 3rd column on item 11 of a 3 column list with 5 items per column
          if((i+1) % _.itemsPerColumn == 1) {
            inc++;

            if(_.settings.addWrapper) {
              curr = _.wrapper.find(".column-"+inc);
            }
            else {
              curr = _.element.siblings(".column-"+inc);
            }
          }

          $(this).appendTo(curr);
        }

      });
    }
  };

  $.fn.columns = function(options) {
    this.each(function() {
      new Columns(this, options);
    });
  }

}(jQuery));
