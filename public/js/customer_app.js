window.app = window.app || {};

app.helpers = {
  clear: function(){
    $('.main').html('');
  }
}

app.cache = {};
app.orders = 1;

$(document).ready(function(){

  var routes = {
    '/': function(){
      app.helpers.clear();
      var template = Handlebars.compile($('.script-main-page').html());
      var view = template();
      $('.main').append(view);

      var menu = new app.view.MenuItems;

      setTimeout(function(){
        new app.view.Menu({
          items: [
          {
            item_id: 1,
            name: 'Spicy Veggy Pizza',
            tags: ['veg', 'italian'],
            price: 500
          },
          {
            item_id: 2,
            name: 'Veg burrito',
            tags: ['veg', 'mexican'],
            price: 150
          },
          {
            item_id: 3,
            name: 'Chicken Pizza',
            tags: ['non-veg', 'italian'],
            price: 600
          },
          {
            item_id: 4,
            name: 'Dimsums',
            tags: ['veg', 'chinese'],
            price: 200
          }
          ]
        })
      }, 1000);
    },
  };

  app.router = Router(routes);
  app.router.init();

  if(window.location.hash == ''){
    window.location.hash = '/';
  }


});