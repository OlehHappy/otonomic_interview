angular.module('app', [])
  .controller('Controller', ['$scope', function($scope) {
  }])
  .directive('stepIndicator', function() {
    return {
      restirct: 'E',
      transclude: true,
      scope: {
        step: '=step',
        totalsteps: '=totalsteps'
      },
      template:
        '<div ng-repeat="i in first">' +
          '<i class="fa fa-circle">first</i>' +
        '</div>' +
        '<div ng-repeat="i in second">' +
          '<i class="fa fa-circle-thin">second</i>' +
        '</div>',
      link: function(scope) {
          var arr = [];
          for (var i = 0; i < scope.step; i++) {
              arr.push(i);
          }
          scope.first = arr;
          var arr2 = [];
          for (var i= 0; i < scope.totalsteps - scope.step; i++) {
              arr2.push(i);
          }
          scope.second = arr2;
      }
    };
  });
