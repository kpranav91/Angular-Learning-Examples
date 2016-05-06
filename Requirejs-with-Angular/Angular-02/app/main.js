require.config({
    paths:{
        'jquery': '../libs/jquery/dist/jquery',
        'angular':'../libs/angular/angular',
        //load the modules
        
        'coreModule':'/app/modules/core/coreModule',
        'themeModule':'/app/modules/theme/themeModule'
    },
    shim:{
        'angular':{
                deps : ['jquery']
            },
        'coreModule':{
               deps : ['angular','themeModule']
        },
        'themeModule':{
               deps : ['angular']
        }
    }
});

require(['coreModule'],function(){
    
});