'use strict';

// Declare app level module which depends on filters, and services

var app = angular.module('decrypterApp', []);


function AppController($rootScope, $scope, $http) {
  $scope.newText = "";
  $scope.message = "";
  $scope.messages = [];
  $scope.decrypt = function(message){
      var textLines = message.split("\n");
      $scope.upToDown(textLines, 0, textLines.length);
      $scope.downToTop(textLines, textLines.length-2, 0);        
      $scope.messageSelected = message;
      $scope.messageBinary = $scope.convertToBinary(message);
      $scope.messageDecrypted = $scope.message;
      $scope.message = "";
  }
  $scope.upToDown = function(textLines, firstIndex, lastIndex){
      for (var i = firstIndex; i < lastIndex; i++) {
        var line = textLines[i];
        var firstCharacter = line[0];
        firstCharacter = firstCharacter==","|| firstCharacter=="." ? " ":firstCharacter;
        if(firstCharacter == firstCharacter.toUpperCase() && i !=firstIndex){
          $scope.message+= " ";
        }
        $scope.message+= firstCharacter;
      };
  }
  $scope.downToTop = function(textLines, firstIndex, lastIndex){
      for (var i = firstIndex; i >=lastIndex; i--) {
        var line = textLines[i];
        var firstCharacter = line[line.length-1];
        firstCharacter = firstCharacter==","|| firstCharacter=="."? " ":firstCharacter;
        if(firstCharacter == firstCharacter.toUpperCase() && i!=firstIndex){
          $scope.message+= " ";
        }
        $scope.message+= firstCharacter;
      };
  }

  $scope.convertToBinary = function convert(message) {
    var messageToBinary = [];
    for (var i=0; i < message.length; i++) {
        var bin = message[i].charCodeAt(0).toString(2);
        messageToBinary.push(Array(8-bin.length+1).join("0") + bin);

    }
    return messageToBinary.join(" ");
  }

  $scope.saveToDataBase = function(message){
    $http.post('/messages', {msg_cifrado:message}).
        success(function(data) {
            console.log("posted successfully");
            $scope.getMessages();
        }).error(function(data) {
            console.error("error in posting");
        });

  }

  $scope.delete = function(id){
    $http.post('/delete',{id:id}).
        success(function(id) {
            console.log("deleted successfully");
            $scope.getMessages();
        }).error(function(data) {
            console.error("error in posting");
        })
  }

  $scope.getMessages = function(){
    $http.get('/messages').
        success(function(data) {
            console.log("get successfully"+data);
            $scope.messages = data;
        }).error(function(data) {
            console.error("error in posting");
        })
  }
  $scope.getMessages();

 }

/**Initializing app**/
app.controller('AppController', AppController);