export default ['$http', function ($http) {
    this.get = function () {
        return $http.get('http://jsonplaceholder.typicode.com/users').then(function (response) {
            return response.data;
        });
    }
}];