var TestComp = (function ($){
  "use strict";
  return Vue.component('test-modal', {
    template: '#app',
    data: function () {
      return {
        count: 0,
        compId:null
      }
    },
    
    computed:{
      modalId: function(){
        return 'test-modal' + this.compId
      }
    },
  
    methods:{
      addPointToArray(p) {
        this.recommendationPoints.push(p);
        console.log(this.recommendationPoints)
      }
  
    },
    beforeMount: function () {
      this.compId = Math.floor(Math.random() * 10000)
    },
    mounted: function() {
      $('#' + this.modalId).modal({ backdrop: 'static', keyboard: false })
      $('#' + this.modalId).modal('show')
    }
  } );
} )
