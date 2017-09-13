angular.module("MiSegundaApp", [])
    .controller("SegundoControlador", function($scope,$http){
        $scope.posts = [];
        $http.get("http://jsonplaceholder.typicode.com/posts")
           .success(function(data){
            console.log(data);
            $scope.posts = data;
        })
            .error(function(err){
                
    });
});    