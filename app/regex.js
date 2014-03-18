if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var reg = new RegExp("([0-9])");
        return reg.test(str);
    },

    containsRepeatingLetter : function(str) {
        var reg = new RegExp('([a-zA-Z])\1+$');
        return reg.test(str);
    },

    endsWithVowel : function(str) {

    },

    captureThreeNumbers : function(str) {

    },

    matchesPattern : function(str) {

    },
    isUSD : function(str) {

    }
  };
});
