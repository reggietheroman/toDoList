(function() {
  'use strict';

  /**
   * Our app
   */

  angular.module('toDoList3', [
    'ngRoute'
  ]);

  /**
   * Our app config
   */

  angular
    .module('toDoList3')
    .config(config);

  function config($routeProvider) {
    $routeProvider.when('/toDoList3', {
    templateUrl: 'toDoList3/toDoList3.html',
    controller: 'toDoList3Controller',
    controllerAs: 'vm'
  });
  }

  /**
   * Our app controller
   */

  angular
    .module('toDoList3')
    .controller('toDoList3Controller', toDoList3Controller);

  function toDoList3Controller() {
    var vm = this;

    vm.toDoList = [
      {task: 'ruin the science fair', done: false},
      {task: 'pass off his invention as my own', done: false},
      {task: 'get that boy', done: false}
    ];
    vm.doneList = [
      {task: 'steal his time machine', done: true}
    ];

    vm.addToDo = function() {
      vm.toDoList.push({task: vm.newToDo, done: false});
      vm.newToDo = '';
    }

    vm.removeToDo = function(index) {
      vm.toDoList.splice(index, 1);
    }

    vm.countToDoRemaining = function() {
      var totalTasks = vm.toDoList.length + vm.doneList.length;
      return (vm.doneList.length / totalTasks) * 100;
    }

    vm.markDone = function(index) {
      vm.doneList.push(vm.toDoList[index]);
      vm.toDoList.splice(index, 1);
    }

    vm.markToDo = function(index) {
      vm.toDoList.push(vm.doneList[index]);
      vm.doneList.splice(index, 1);
    }
 }
})();