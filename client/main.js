Router.route('/', function () {
  this.render('Home');
});

Router.route('/:page', {
  name: 'page',
  data: function () { return {page: this.params.page}; },
  onRun: function(){
    console.log('onRun!');
    this.next();
  }
});