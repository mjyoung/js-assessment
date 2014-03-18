if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i,1);
                i = 0;
            }
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i,1);
                i = 0;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.splice(-1,1);
        return arr;
    },

    prepend : function(arr, item) {
        arr.splice(0,0,item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0,1);
        return arr;
    },

    concat : function(arr1, arr2) {
        var concat = arr1.concat(arr2);
        return concat;
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                count += 1;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        var duplicates = [];
        arr = arr.sort();
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i+1] && duplicates.indexOf(arr[i]) === -1) {
                duplicates.push(arr[i]);
            }
        }
        return duplicates;
    },

    square : function(arr) {
        var square = [];
        for (var i = 0; i < arr.length; i++) {
            square[i] = arr[i] * arr[i];
        }
        return square;
    },

    findAllOccurrences : function(arr, target) {
        var occurs = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                occurs.push(i);
            }
        }
        return occurs;
    }
  };
});
