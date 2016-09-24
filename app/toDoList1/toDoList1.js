(function() {
  'use strict';

  /**
   * Our app
   */

  angular.module('toDoList1', [
    'ngRoute'
  ]);

  /**
   * Our app config
   */

  angular
    .module('toDoList1')
    .config(config);

  function config($routeProvider) {
    $routeProvider.when('/toDoList1', {
    templateUrl: 'toDoList1/toDoList1.html',
    controller: 'toDoList1Controller',
    controllerAs: 'vm'
  });
  }

  /**
   * Our app controller
   */

  angular
    .module('toDoList1')
    .controller('toDoList1Controller', toDoList1Controller);

  function toDoList1Controller() {
    var vm = this;

    vm.toDoList = [
      {task: 'steal his time machine', done: false},
      {task: 'ruin the science fair', done: false},
      {task: 'pass off his invention as my own', done: false},
      {task: 'get that boy', done: false}
    ];

    vm.addToDo = function() {
      vm.toDoList.push({task: vm.newToDo, done: false});
      vm.newToDo = '';
    }

    vm.removeToDo = function(index) {
      vm.toDoList.splice(index, 1);
    }

    vm.countToDoRemaining = function() {
      var toDoRemaining = 0; 
      for(var i in vm.toDoList) {
        if(!vm.toDoList[i].done) {
          toDoRemaining ++;
        }
      }
      return toDoRemaining;
    }
  }
})();