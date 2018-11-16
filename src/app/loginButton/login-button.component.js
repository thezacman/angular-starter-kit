'use strict'

angular
   .module('app')
   .component({
      templateUrl: 'app/loginButton/login-button.template.html',
      controller: function() {
         const texts = ['Login', 'Logout']
         let isLoggedIn = false

         this.text = texts[0]

         this.changeState = function() {
            isLoggedIn = !isLoggedIn
            this.text = texts[Number(isLoggedIn)]
         }
      }
   })
