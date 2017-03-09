'use strict';

/**
 * @ngdoc function
 * @name hmappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hmappApp
 */
angular.module('hmappApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.numberofclicks=0;
    this.incrementclicks = function(){
      this.numberofclicks=this.numberofclicks + 1;
    };
  }
  );
