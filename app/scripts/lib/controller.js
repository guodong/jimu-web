var controllerModule = angular.module("ctrl.select.cascade", []);  
  
var firCtrl = [ '$scope', 'glo_cate', function( $scope, glo_cate ) {  
      $scope.cate = glo_cate;
      // 更换上一级下拉框时去除下级的选项，代码写得渣不要怪我
      $scope.$watch('cate.fir', function() {  
        $scope.cate.sec = null;  
        $scope.cate.thi = null;  
        $scope.cate.four = null;  
        $scope.cate.fif= null;  
        $scope.cate.six = null;  
      });  
      $scope.$watch('cate.sec', function() {  
        $scope.cate.thi = null;  
        $scope.cate.four = null; 
        $scope.cate.fif= null;  
        $scope.cate.six = null;  
      });
      $scope.$watch('cate.thi', function() {  
        $scope.cate.four = null; 
        $scope.cate.fif= null;  
        $scope.cate.six = null;  
      });
      $scope.$watch('cate.four', function() {  
        $scope.cate.fif= null;  
        $scope.cate.six = null;  
      });
      $scope.$watch('cate.fif', function() {  
        $scope.cate.six = null;  
      });
}];  


var secCtrl = [ '$scope', 'glo_country', function( $scope, glo_country ) {  
      $scope.country = glo_country;
      //$scope.province = glo_province;
      // 更换上一级下拉框时去除下级的选项，代码写得渣不要怪我
      $scope.$watch('mcountry', function() {  
        $scope.mprovince = null;  
        $scope.mcity = null;  
      });  
}];

  
controllerModule.controller( "cateController", firCtrl );
controllerModule.controller( "locController", secCtrl );

// var loginModule = angular.module("login.vali",[]);
// loginModule.controller('loginController', function ($scope) {
//        $scope.createCode= createCode;
//        $scope.validate= validate;
//     });

