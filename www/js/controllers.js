angular.module('starter.controllers', ['ionic', 'ngCordova'])



.controller('DashCtrl', function($scope) {

$scope.$on('$ionicView.loaded', function() {
  ionic.Platform.ready( function() {
    if(navigator && navigator.splashscreen) navigator.splashscreen.hide();
  });
})


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.chats = Chats.all(); //not using this for now
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
 

})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})


.controller("DashCtrl", function($scope, $cordovaSocialSharing) {
 
    $scope.shareAnywhere = function() {
        $cordovaSocialSharing.share("This is your message", "This is your subject", null, "http://www.cameroonhymnal.com");
    };
 
})




