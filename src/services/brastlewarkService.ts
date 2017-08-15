export const getGnomes = app => {
    app.service('getGnomes', function($http) {
        return $http.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json");
    });
};