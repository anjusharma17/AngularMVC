studentApp.controller("StudentController", function ($scope, studentService) {

    getStudents();
    function getStudents() {
        studentService.getStudents().then(function (response) {
            {
                $scope.students = response;
               // console.log($scope.students);
            }
        });
        //.then(function success(studs) {
        //    $scope.students = studs;
        //    console.log($scope.students);
        //})
        //.error(function (error) {
        //    $scope.status = "Unable to load customer data: " + error.message;
        //    console.log($scope.status);
        //});
    }
});