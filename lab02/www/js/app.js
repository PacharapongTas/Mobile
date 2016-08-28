// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('index',{
      url: '/',
      templateUrl: 'home.html'
    })
    .state('music',{
      url: '/second',
      templateUrl: 'second.html'
    })

    .state('movie',{
      url: '/thrid',
      templateUrl: 'thrid.html'
    })

    $urlRouterProvider.otherwise('/');
  })

.factory('UserData', function(){
  userdata = {};
  userdata.firstname = '';
  userdata.lastname = '';
  userdata.sex = '';
  return userdata;
})

.controller('FormCtrl',['$scope','UserData',function($scope,UserData){
    $scope.input = UserData;
}])

.controller('ShowCtrl',['$scope','UserData',function($scope,UserData){
    $scope.output = UserData;
}])

.controller('MoviesController',['$scope',function($scope){
    $scope.movies = [
      {title: 'Another', year:'2014', thumbnail:'img/pic1.jpg'},
      {title: 'AmagamiSS', year:'2013', thumbnail:'img/pic2.jpg'},
      {title: 'CodeGeass', year:'2013', thumbnail:'img/pic3.jpg'},
      {title: 'SwordArtOnline', year:'2014', thumbnail:'img/pic4.jpg'}
    ]
}])
