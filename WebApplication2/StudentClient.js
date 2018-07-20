studentApp.factory("studentService", ["$http", function ($http) {
    var studentService = {};
    studentService.getStudents = function () {

        return $http.post("/Home/GetSchoolPersonDetails");

    };
    return studentService;
}]);  