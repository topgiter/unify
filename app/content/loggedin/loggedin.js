unifyApp.controller('LoggedInCtrl',
    ['$scope', '$rootScope', function($scope, $rootScope) {
        $rootScope.signed_user = true;
        $scope.myval = "xxx";
    }]);
