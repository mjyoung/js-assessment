if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        var total = str + ', ';
        return function(str) {
            total += str;
            return total;
        }
    },

    makeClosures : function(arr, fn) {
        // var newArr = [];

        // for (var i = 0; i < arr.length; i ++) {
        //     newArr.push(fn(arr[i]));
        // }
        // console.log(newArr);
        // return newArr;
    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
