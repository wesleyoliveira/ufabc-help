angular.module('UFABCHelp', [
    'ngMaterial',
    'ngAnimate',
  	'ui.router',
    'ngFx',
])

.config(function($mdThemingProvider){
  $mdThemingProvider.theme('default')
    .primaryPalette('grey', {
      'default': '900'
    })
    .accentPalette('gray', {
      'default': '500'
    })
})

//Routing initial config
// .config( function ($stateProvider, $urlRouterProvider) {
//
//   // Setup routes
//   $stateProvider
// 	.state('xxx', {
// 		url: '/xxx',
// 		templateUrl: '/views/xxx.html',
// 		controller: 'xxxCtrl',
// 	})
//
// 	$urlRouterProvider.otherwise('/');
// })

//Main Contorller initial config
.controller('MainCtrl', function ($rootScope, $state) {
  //TO-DO
})
