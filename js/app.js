angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
              })

            .state('packages' ,{
                    url:'/packages',
                    templateUrl:'../views/packages.html',
                    controller: 'packagesCtrl'
                })
            .state('locations' , {
                    url:'/locations',
                    templateUrl:'../views/locations.html',
                    controller: 'locationsCtrl'
                })
            .state('book', {
                    url:'/booked/:id',
                    templateUrl:'../views/booked.html',
                    controller: 'bookedCtrl'
                })
            .state('about' , {
                    url:'/about',
                    templateUrl:'../views/about.html'

                })
            .state('contact' , {
                    url:'/contact',
                    templateUrl:'../views/contact.html'
                });


        $urlRouterProvider
            .otherwise('/');
    });
