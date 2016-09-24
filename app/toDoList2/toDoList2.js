(function() {
  'use strict';

  /**
   * Our app
   */

  angular.module('toDoList2', [
    'ngRoute'
  ]);

  /**
   * Our app config
   */

  angular
    .module('toDoList2')
    .config(config);

  function config($routeProvider) {
    $routeProvider.when('/toDoList2', {
    templateUrl: 'toDoList2/toDoList2.html',
    controller: 'toDoList2Controller',
    controllerAs: 'vm'
  });
  }

  /**
   * Our app controller
   */

  angular
    .module('toDoList2')
    .controller('toDoList2Controller', toDoList2Controller);

  function toDoList2Controller() {
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
        if(vm.toDoList[i].done) {
          toDoRemaining ++;
        }
      }
      return (toDoRemaining / vm.toDoList.length) * 100;
    }
  }
})();