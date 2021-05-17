var TestComp = (function ($){
  "use strict";
  return new Vue({
    template: '#app',
    data: function () {
      return {
        count: 0,
        compId:null,
        recommendationPoints:[],
        step: 1,
        totalSum:0
      }
    },
    
    computed:{
      modalId: function(){
        return 'test-modal' + this.compId
      }
    },
  
    methods:{

      next(){
        this.step++
      },

      toStep: function (stepNum) {
        this.step = stepNum;
       
    },

      addPointToArray(p) {
        this.recommendationPoints.push(p);

        console.log(this.recommendationPoints)
        this.next();
      },
      sumUp(){
        console.log(this.recommendationPoints.reduce((a,b) => a + b, 0))
        this.totalSum = this.recommendationPoints.reduce((a,b) => a + b, 0);
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
