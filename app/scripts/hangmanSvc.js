'use strict';

angular.module('hmappApp')
  .service('HangmanSvc', function ($resource) {
    this.$resource = $resource;
    const res = $resource('http://localhost:3000', {

    },{
        getAdmin:{url:'http://localhost:3000/admin',method:'GET'},
        putAdmin:{url:'http://localhost:3000/admin',method:'PUT'},
        postGuess:{url:'http://localhost:3000/guess',method:'POST'}
    });
    return res;

  //   $resource('/users/:names', {}, {
  //   names: { params: {names: 'names'}, method: 'GET', isArray: true }
  // })
  });
