'use strict'

angular
   .module('app')
   .component({
      templateUrl: 'app/hamburger/hamburger.template.html',
      controller: function() {
         const activeClassName = 'is-active',
         menuEl = document.querySelector('div.show-for-small')
         let isActive = false

         this.className = '';

         this.changeState = function() {
            if (isActive) {
               this.className = '';
               menuEl.classList.remove('expanded');
            } else {
               this.className = activeClassName;
               menuEl.classList.add('expanded');
            }
            isActive = !isActive
         }
      }
   })
