define(function(){
    
    var coreModule = angular.module('themeModule',[]);
        
    coreModule.run(['$log',function($log){
            $log.info('Initialized the themeModule');
    }]);    
        

        
});