(function ($) {
    "use strict";
    
    $(function () {
       $('.test-trigger').each(function (i, elem) {
           $(elem).on('click', function (event) {
               event.preventDefault()
             
               var testInstance = new TestComp({

               }),
               mountPoint = document.createElement('div');
               document.body.appendChild(mountPoint);
               testInstance.$mount(mountPoint);
           })
       })
   })
})(jQuery)