define(function(){
    
    var coreModule = angular.module('coreModule',['themeModule']);
    
    coreModule.controller('mainController',function($scope)         {
            $scope.title = "Hello World";        
        });
    
    coreModule.run(['$log',function($log){
            $log.info('Initialized the coreModule');
    }]);    
        
    setTimeout(function(){
        angular.bootstrap(document,['coreModule']);
    },0);
        
});