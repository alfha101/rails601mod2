(function() {
    'use strict';

    //  Module
    angular
        .module('spa-demo.cities')
        .directive('sdCities', CitiesDirective);
        //sd-cities

    CitiesDirective.$inject = ["spa-demo.APP_CONFIG"];

    //  directive directive
    function CitiesDirective(APP_CONFIG) {
        var directive = {
            templateUrl     : APP_CONFIG.cities_html,
            replace: true,
            bindToController: true,
            controller      : "spa-demo.cities.CitiesController",
            controllerAs    : 'citiesVM',
            restrict        : "E",
            scope           : {},
            link            : link
        };
        return directive;

        ////////
        function link(scope, element, attrs) {
          console.log("CitiesDirective", scope);
        }
    }

})();
