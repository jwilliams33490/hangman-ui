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
      this.log.log('Hi');
      var self = this;
      var guessCharacter = this.guess;
      this.HangmanSvc.getAdmin(null, function(response){
          self.log.log('Hi22' + self.targetWord + '+' + guessCharacter + '+' + JSON.stringify(response));
          self.HangmanSvc.postGuess({guess: guessCharacter}, function(response){
            self.log.log('Hi10' + JSON.stringify(response));
            self.gameState = response;
            self.log.log('Hi10' + JSON.stringify(self.gameState));
          });
      }, function(response){
          self.log.log('err Hi22' + self.targetWord + '+' + guessCharacter + '+' + JSON.stringify(response));
          self.HangmanSvc.postGuess({guess: guessCharacter}, function(response){
            self.log.log('err Hi10' + JSON.stringify(response));
            self.gameState = response;
            self.log.log('err Hi10' + JSON.stringify(self.gameState));
          });
      });


      // this.HangmanSvc.getAdmin(null, successFunction(response){/* do stuff*/}, errorFunction(response){/* do stuff*/});
      
//       var user = User.get({userId:123}, function() {
//   user.abc = true;
//   user.$save();
// });
      //this.correctLetters.push(this.guess);
      this.guess = '';
  };
  });
