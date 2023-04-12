var app = angular.module('MyApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'home.html',
        controller: 'homeController'
    })
    .when('/cart', {
        templateUrl: 'cart.html',
        controller: 'cartController'
    })
    .when('/gall', {
        templateUrl: 'gallery.html',
        controller: 'gallController'
    })
    .when('/shop', {
        templateUrl: 'shop.html',
        controller: 'shopController'
    })
    .when('/brand', {
        templateUrl: 'brand.html',
        controller: 'brndController'
    })
    .when('/about', {
        templateUrl: 'about.html',
        controller: 'aboutController'
    })
    .when('/cont', {
        templateUrl: 'contact.html',
        controller: 'contController'
    })
    .when('/women', {
        templateUrl: 'women.html',
        controller: 'wmenController'
    })
    .when('/men', {
        templateUrl: 'men.html',
        controller: 'menController'
    })
    .when('/desrip', {
        templateUrl: 'description.html',
        controller: 'descriptController'
    })
})