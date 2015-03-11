export default ['$http', function ($http) {
    this.get = function () {
        return $http.get('http://jsonplaceholder.typicode.com/comments').then(function (response) {
            return response.data;
        });
    }
}];