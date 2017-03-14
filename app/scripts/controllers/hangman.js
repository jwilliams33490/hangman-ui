'use strict';

/**
 * @ngdoc function
 * @name hmappApp.controller:HangmanCtrl
 * @description
 * # HangmanCtrl
 * Controller of the hmappApp
 */
angular.module('hmappApp')
  .controller('HangmanCtrl', function ($log,HangmanSvc) {
  this.log = $log;  
  this.HangmanSvc = HangmanSvc;  
  // this.targetWord = 'popcorn';
  // this.incorrectLetters = [];
  // this.correctLetters = [];
  // this.hangManScore = 0;
  // this.isGameOver = false;
  // this.isGameWon = false;
  this.guess = '';
  this.gameState = {};
  
  this.submitguess = function(){
      var self = this;
      self.HangmanSvc.postGuess({guess:  this.guess}, function(response){
       self.gameState = response;
       self.guess = '';     
      }, function(response){
            self.log.error(response);
      });
  };

   this.newgame = function(){
      var self = this;
      self.HangmanSvc.putAdmin(null, function(response){
       self.gameState = response;     
      }, function(response){
            self.log.error(response);
      });
  };
});
