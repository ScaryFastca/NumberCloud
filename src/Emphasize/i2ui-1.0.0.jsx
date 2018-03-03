﻿var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  var p = {};p.zeroFill = function (D, z) {
    if (s.isNumeric(z)) {
      if (z < 0) {
        z = 0;
      }
    } else {
      z = 0;
    }var y = D < 0;var A = Math.abs(D);var B = A.toString();var C = "";for (var x = 0; x < z; x++) {
      if (x < B.length) {
        C += B.charAt ? B.charAt(x) : B[x];
      } else {
        C = "0" + C;
      }
    }return (y ? "-" : "") + C;
  };p.inRange = function (A, x, B) {
    if (s.isNumeric(x) && s.isNumeric(B)) {
      var z = x < B ? x : B;var y = x > B ? x : B;return A >= z && A <= y;
    }return false;
  };p.inValues = function (x, y) {
    if (s.isArray(y)) {
      return h.any(y, function (z) {
        return x == z;
      });
    }return false;
  };p.hasDecimal = function (x) {
    return x - Math.floor(x) > 0;
  };p.roundDecimal = function (A, x) {
    var y = A;if (!x) {
      x = 0;
    }if (p.hasDecimal(y)) {
      var z = Math.pow(10, x);return Math.round(A * z) / z;
    }return y;
  };p.fixRange = function (B, x, C) {
    var A = B;var z = x < C ? x : C;var y = x > C ? x : C;if (this < z) {
      return z;
    } else {
      if (this > y) {
        return y;
      }
    }return A;
  };var q = {};q.random = function (x, y) {
    return Math.floor(Math.random() * x + y);
  };q.randomFloat = function (x, A) {
    var z = x < A ? x : A;var y = x > A ? x : A;return (y - z) * Math.random() + z;
  };if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (x) {
      var z = this.length >>> 0;var y = Number(arguments[1]) || 0;y = y < 0 ? Math.ceil(y) : Math.floor(y);if (y < 0) {
        y += z;
      }for (; y < z; y++) {
        if (y in this && this[y] === x) {
          return y;
        }
      }return -1;
    };
  }var t = {};t.contains = function (z, B, x) {
    var y = false;if (s.isString(B)) {
      var A = z;if (x == true) {
        B = B.toString().toLowerCase();A = A.toLowerCase();
      }y = A.indexOf(B) != -1;
    }return y;
  };t.startsWith = function (z, B, x) {
    var y = false;if (s.isString(B)) {
      var A = z;if (x == true) {
        B = B.toString().toLowerCase();A = A.toLowerCase();
      }y = A.indexOf(B) == 0;
    }return y;
  };t.endsWith = function (z, B, x) {
    var y = false;if (s.isString(B)) {
      var A = z;if (x == true) {
        B = B.toString().toLowerCase();A = A.toLowerCase();
      }y = A.length >= B.length && A.indexOf(B) == A.length - B.length;
    }return y;
  };t.replaceAll = function (A, z, y) {
    var B = A;var x = B.indexOf(z);while (x != -1) {
      B = B.replace(z, y);x = B.indexOf(z);
    }return B;
  };t.maxLength = function (z, x) {
    z = z.toString();var y = z;if (z.length > x) {
      y = z.substr(0, x);
    }return y;
  };t.toInt = function (z, x) {
    if (x == undefined) {
      x = 0;
    }var y = parseInt(z, 10);return isNaN(y) ? x : y;
  };t.toFloat = function (z, x) {
    if (x == undefined) {
      x = 0;
    }var y = parseFloat(z);return isNaN(y) ? x : y;
  };t.hexToInt = function (z, x) {
    if (x == undefined) {
      x = 0;
    }var y = parseInt(z, 16);return isNaN(y) ? x : y;
  };t.trim = function (y) {
    var x = arguments.length > 1 ? arguments[1] : undefined;return t.trimEnd(t.trimBegin(y, x), x);
  };t.trimEnd = function (x) {
    if (arguments.length > 1 && arguments[1] != undefined) {
      var y = u.toSafeString(arguments[1]);if (x.lastIndexOf(y) == x.length - y.length) {
        return x.substring(0, x.length - y.length);
      } else {
        return x.toString();
      }
    } else {
      return x.replace(/\s+$/g, u.empty);
    }
  };t.trimBegin = function (x) {
    if (arguments.length > 1 && arguments[1] != undefined) {
      var y = arguments[1];if (x.indexOf(y) == 0) {
        return x.substring(y.length, x.length);
      } else {
        return x.toString();
      }
    } else {
      return x.replace(/^\s+/g, u.empty);
    }
  };t.splitKeep = function (H, I, x) {
    function y(M) {
      var L = M[0] == "0" ? "1" : "0";var K = "";for (var J = 0; J < M.length; J++) {
        K += L;
      }return K;
    }var G = [];if (I != "") {
      var C = [];var F;if (I instanceof RegExp) {
        F = H.replace(I, function (L, K, J) {
          C.push({ value: L, index: K });return y(L);
        });
      } else {
        F = t.replaceAll(H, I, function (L, K, J) {
          C.push({ value: L, index: K });return y(L);
        });
      }var A = 0;for (var z = 0; z < C.length; z++) {
        var B = C[z];var D = x == true ? B.index : B.index + B.value.length;if (D != A) {
          var E = H.substring(A, D);G.push(E);A = D;
        }
      }if (A < H.length) {
        var E = H.substring(A, H.length);G.push(E);
      }
    } else {
      h.add(G, H);
    }return G;
  };t.subUpper = function (A) {
    var z = A.toString();var B = 0;var x = 1;if (arguments.length > 1) {
      B = arguments[1];if (B < A.length) {
        if (arguments.length > 2) {
          x = arguments[2];
        }if (B + x > A.length) {
          x = A.length - B;
        }var C = B + x;var y = B > 0 ? A.substr(0, B) : u.empty;var D = A.substr(B, x);var E = A.substr(C, A.length - C);z = y + D.toUpperCase() + E;
      }
    }return z;
  };var u = {};u.isEmpty = function (x) {
    if (s.isString(x)) {
      return x == "";
    } else {
      if (!s.isNullOrUndefined(x) && s.isFunction(x.toString)) {
        return x.toString() == "";
      } else {
        return true;
      }
    }
  };u.toSafeString = function (x) {
    var y = u.empty;if (s.isString(x)) {
      y = x;
    } else {
      if (!s.isNullOrUndefined(x) && s.isFunction(x.toString)) {
        y = x.toString();
      }
    }return y;
  };u.isEqual = function (z, A, x) {
    var y = false;if (s.isString(z) && s.isString(A)) {
      if (x == true) {
        y = z.toLowerCase() == A.toLowerCase();
      } else {
        y = z == A;
      }
    }return y;
  };u.empty = "";var h = {};h.add = function (y, x) {
    y.push(x);
  };h.addArray = function (y, x) {
    if (s.isArray(x)) {
      h.each(x, function (z) {
        h.add(y, z);
      });
    } else {
      h.add(y, x);
    }
  };h.insert = function (z, x, y) {
    z.splice(x, 0, y);
  };h.remove = function (y, x) {
    y.splice(x, 1);
  };h.clear = function (x) {
    x.splice(0, x.length);
  };h.at = function (y, x) {
    return 0 <= x && x < y.length ? y[x] : null;
  };h.each = function (z, x) {
    for (var y = 0; y < z.length; y++) {
      if (s.isFunction(x)) {
        x(z[y], y);
      }
    }
  };h.eachReverse = function (z, x) {
    for (var y = z.length - 1; y >= 0; y--) {
      if (s.isFunction(x)) {
        x(z[y], y);
      }
    }
  };h.sum = function (y) {
    var x = 0;h.each(y, function (A, z) {
      if (s.isNumeric(A)) {
        x += A;
      } else {
        if (s.isString(A)) {
          x += t.toInt(A);
        }
      }
    });return x;
  };h.select = function (B, x) {
    var z = [];for (var y = 0; y < B.length; y++) {
      if (s.isFunction(x)) {
        var A = x(B[y], y);h.add(z, A);
      }
    }return z;
  };h.selectMany = function (B, x) {
    var z = [];for (var y = 0; y < B.length; y++) {
      if (s.isFunction(x)) {
        var A = x(B[y], y);if (s.isArray(A)) {
          h.addArray(z, A);
        } else {
          h.add(z, A);
        }
      }
    }return z;
  };h.where = function (z, x) {
    var y = [];if (s.isFunction(x)) {
      h.each(z, function (B, A) {
        if (x(B, A) == true) {
          h.add(y, B);
        }
      });
    }return y;
  };h.any = function (B, y) {
    var A = false;if (s.isFunction(y)) {
      for (var z = 0; z < B.length; z++) {
        var C = B[z];if (y(C, z) == true) {
          A = true;break;
        }
      }
    } else {
      A = B.length > 0;
    }return A;
  };h.all = function (B, y) {
    var A = true;if (s.isFunction(y)) {
      for (var z = 0; z < B.length; z++) {
        var C = B[z];if (y(C, z) == false) {
          A = false;break;
        }
      }
    }return A;
  };h.count = function (z, x) {
    var y = z.length;if (s.isFunction(x)) {
      return h.where(z, x).length;
    }return y;
  };h.first = function (C) {
    var y;var B = null;for (var z = 1; z < arguments.length; z++) {
      var x = arguments[z];if (z == 1) {
        if (x instanceof Function) {
          y = x;
        } else {
          B = x;
        }
      } else {
        if (z == 1) {
          B = x;
        }
      }
    }if (y) {
      for (var z = 0; z < C.length; z++) {
        var A = C[z];if (y(A) == true) {
          B = A;break;
        }
      }
    } else {
      B = C.length > 0 ? C[0] : B;
    }return B;
  };h.last = function (C) {
    var y;var B = null;for (var z = 1; z < arguments.length; z++) {
      var x = arguments[z];if (z == 1) {
        if (x instanceof Function) {
          y = x;
        } else {
          B = x;
        }
      } else {
        if (z == 1) {
          B = x;
        }
      }
    }if (y) {
      for (var z = C.length - 1; z >= 0; z--) {
        var A = C[z];if (y(A) == true) {
          B = A;break;
        }
      }
    } else {
      B = C.length > 0 ? C[C.length - 1] : B;
    }return B;
  };h.take = function (B, z) {
    var A = [];var y = z < B.length ? z : B.length;for (var x = 0; x < y; x++) {
      h.add(A, B[x]);
    }return A;
  };h.order = function (y) {
    var x = arguments.length > 1 ? arguments[1] : null;if (s.isFunction(x)) {
      return y.sort(function (z, A) {
        return x(z) > x(A) ? 1 : -1;
      });
    } else {
      return y.sort();
    }
  };h.contains = function (y, x) {
    return y.any(function (A, z) {
      return A == x;
    });
  };h.min = function (z) {
    var x = arguments.length > 1 ? arguments[1] : null;var y = s.isFunction(x) ? function (A) {
      return x(A);
    } : function (A) {
      return A;
    };return a.findUniqe(z, function (A, B) {
      return y(A) < y(B);
    });
  };h.max = function (z) {
    var x = arguments.length > 1 ? arguments[1] : null;var y = s.isFunction(x) ? function (A) {
      return x(A);
    } : function (A) {
      return A;
    };return a.findUniqe(z, function (A, B) {
      return y(A) > y(B);
    });
  };var a = new function () {
    var x = this;x.findUniqe = function (y, z) {
      var C = h.first(y);for (var A = 0; A < y.length; A++) {
        var B = y[A];if (z(B, C) == true) {
          C = B;
        }
      }return C;
    };
  }();var i = {};i.each = function (x, y) {
    if (s.isNumeric(x) && s.isFunction(y)) {
      for (var z = 0; z < x; z++) {
        y(z);
      }
    }
  };var r = {};r.clone = function (A) {
    if (s.isObject(A)) {
      if (A instanceof Date) {
        return new Date(A.getTime());
      } else {
        if (A instanceof Array) {
          var x = [];for (var y = 0, z = A.length; y < z; y++) {
            x[y] = r.clone(A[y]);
          }return x;
        } else {
          if (A instanceof Object) {
            var x = {};for (var y in A) {
              x[y] = r.clone(A[y]);
            }return x;
          }
        }
      }
    } else {
      if (s.isFunction(A)) {
        var x = function B() {
          return A.apply(this, arguments);
        };for (y in A) {
          x[y] = A[y];
        }return x;
      } else {
        return A;
      }
    }
  };var s = {};s.getKeys = function (y) {
    var z = [];if (s.isObject(y)) {
      for (var x in y) {
        h.add(z, x);
      }
    }return z;
  };s.hasKey = function (z, x) {
    if (s.isObject(z)) {
      for (var y in z) {
        if (y == x) {
          return true;
        }
      }
    }return false;
  };s.getProperties = function (x) {
    return s.getKeys(x).select(function (y) {
      return x[y];
    });
  };s.isString = function (x) {
    return typeof x == "string";
  };s.isNumeric = function (x) {
    return typeof x == "number" && isFinite(x) || (x >= 0 || x < 0) && u.toSafeString(x) == t.toFloat(u.toSafeString(x)).toString();
  };s.isBoolean = function (x) {
    return typeof x == "boolean";
  };s.isObject = function (x) {
    return (typeof x === "undefined" ? "undefined" : _typeof(x)) == "object";
  };s.isUndefined = function (x) {
    return typeof x == "undefined";
  };s.isNull = function (x) {
    return x == null;
  };s.isNullOrUndefined = function (x) {
    return x == null || x == undefined;
  };s.isFunction = function (x) {
    return typeof x == "function";
  };s.isArray = function (x) {
    return x instanceof Array;
  };s.isDate = function (x) {
    return x instanceof Date;
  };s.isRegExp = function (x) {
    return x instanceof RegExp;
  };s.isTypeOf = function (x, y) {
    return false;
  };var o = new function () {
    var z = this;function x(A, C) {
      var B;if (s.isFunction(A) && !s.isNullOrUndefined(C)) {
        B = A(C);
      }return B;
    }function y(A) {
      var B = this;B.value;if (A && A.value) {
        B.value = A.value;
      }B.on = function (C) {
        return new y({ value: x(C, B.value) });
      };B.get = function (D, C) {
        var E = x(D, B.value);return s.isNullOrUndefined(E) ? C : E;
      };B.act = function (C) {
        x(C, B.value);
      };
    }z.on = function (B, A) {
      return new y({ value: x(A, B) });
    };z.get = function (C, B, A) {
      var D = x(B, C);return s.isNullOrUndefined(D) ? A : D;
    };z.act = function (B, A) {
      if (!s.isNullOrUndefined(B) && s.isFunction(A)) {
        A(B);
      }
    };
  }();function l() {
    var y = this;var x = [];y.add = function (z, A) {
      if (y.keyExists(z)) {
        y.remove(z);
      }h.add(x, { key: z, value: A });
    };y.get = function (A) {
      var z = h.first(x, function (B) {
        return B.key === A;
      });if (z) {
        return z.value;
      }
    };y.keyExists = function (z) {
      return h.any(x, function (A) {
        return A.key === z;
      });
    };y.remove = function (B) {
      var z = -1;var A = h.first(x, function (C) {
        z++;return C.key === B;
      });if (A) {
        h.remove(x, z);
      }
    };y.count = function () {
      return h.count(x);
    };y.any = function () {
      return h.any(x);
    };
  }function m() {
    var y = this;var x = new l();y.add = function (A, z) {
      if (!x.keyExists(A)) {
        x.add(A, []);
      }var B = x.get(A);if (s.isArray(z)) {
        h.each(z, function (C) {
          h.add(B, C);
        });
      } else {
        h.add(B, z);
      }
    };y.remove = function (z) {
      x.remove(z);
    };y.call = function (A) {
      var B = [];for (var z = 1; z < arguments.length; z++) {
        h.add(B, arguments[z]);
      }y.callParams(A, B);
    };y.callParams = function (z, A) {
      if (x.keyExists(z)) {
        var B = x.get(z);if (s.isArray(B)) {
          h.each(B, function (E, C) {
            if (s.isFunction(E)) {
              var D = s.isArray(A) ? A : [A];E.apply(null, D);
            }
          });
        }
      }
    };
  }var c = new function () {
    var D = this;var A = "\\d+(\\.\\d+)?";var y = "#[a-f\\d]{6}";var z = y + "|#[a-f\\d]{3}";var C = "rgb\\((\\s*\\d+\\s*,\\s*){2}\\d+\\s*\\)";var B = "rgba\\((\\s*\\d+\\s*,\\s*){3}\\d+(\\.\\d+)?\\s*\\)";function x(E) {
      return new RegExp(E, "gi");
    }D.Number = x(A);D.Hex = x(z);D.Hex6 = x(y);D.Rgb = x(C);D.Rgba = x(B);
  }();var b = new function () {
    var y = this;y.test = function (B) {
      B = u.toSafeString(B);var A = [c.Hex, c.Rgb, c.Rgba];for (var z = 0; z < A.length; z++) {
        if (B.match(A[z])) {
          return A[z];
        }
      }return null;
    };y.parse = function (B) {
      var A;var C = { r: 0, g: 0, b: 0, a: 1 };var D = y.test(B);if (D == c.Rgb) {
        var z = B.match(c.Number);C.r = y.getSubColor(z[0]);C.g = y.getSubColor(z[1]);C.b = y.getSubColor(z[2]);A = true;
      } else {
        if (D == c.Rgba) {
          var z = B.match(c.Number);C.r = y.getSubColor(z[0]);C.g = y.getSubColor(z[1]);C.b = y.getSubColor(z[2]);C.a = y.getA(z[3]);A = true;
        } else {
          if (D == c.Hex) {
            C = x(B);A = true;
          }
        }
      }return A ? C : null;
    };function x(z) {
      var D = {};var B = z.match(c.Hex);var A = z.match(c.Hex6) ? true : false;var C = t.trimBegin(B[0], "#");if (A) {
        D.r = y.getSubColor(t.hexToInt(C.substr(0, 2)));D.g = y.getSubColor(t.hexToInt(C.substr(2, 2)));D.b = y.getSubColor(t.hexToInt(C.substr(4, 2)));
      } else {
        D.r = y.getSubColor(t.hexToInt(C.charAt(0) + C.charAt(0)));D.g = y.getSubColor(t.hexToInt(C.charAt(1) + C.charAt(1)));D.b = y.getSubColor(t.hexToInt(C.charAt(2) + C.charAt(2)));
      }return D;
    }y.getSubColor = function (z) {
      return p.fixRange(t.toInt(u.toSafeString(z)), 0, 255);
    };y.getA = function (z) {
      return p.fixRange(t.toFloat(u.toSafeString(z)), 0, 1);
    };y.getHue = function (z) {
      return p.fixRange(t.toInt(z), 0, 360);
    };y.getPercent = function (z) {
      return p.fixRange(t.toInt(z), 0, 100);
    };y.getSubColorFromString = function (B) {
      var A = 0;var z = B.match(/\d+/gi);if (z) {
        A = y.getSubColor(z[0]);
      }return A;
    };
  }();function k() {
    var C = this;var B = 0;var A = 0;var z = 0;var y = 1;if (arguments.length == 1) {
      var x = b.parse(arguments[0]);if (x) {
        B = x.r;A = x.g;z = x.b;y = x.a;
      }
    } else {
      if (arguments.length >= 3) {
        B = b.getSubColor(arguments[0]);A = b.getSubColor(arguments[1]);z = b.getSubColor(arguments[2]);if (arguments.length >= 4) {
          y = b.getA(arguments[3]);
        }
      }
    }C.r = function () {
      if (arguments.length > 0) {
        B = b.getSubColor(arguments[0]);
      } else {
        return B;
      }
    };C.g = function () {
      if (arguments.length > 0) {
        A = b.getSubColor(arguments[0]);
      } else {
        return A;
      }
    };C.b = function () {
      if (arguments.length > 0) {
        z = b.getSubColor(arguments[0]);
      } else {
        return z;
      }
    };C.a = function () {
      if (arguments.length > 0) {
        y = b.getA(arguments[0]);
      } else {
        return y;
      }
    };C.toRgbString = function () {
      return "rgb(" + B + "," + A + "," + z + ")";
    };C.toRgbaString = function () {
      return "rgba(" + B + "," + A + "," + z + "," + y + ")";
    };C.toHexString = function () {
      function D(F) {
        var E = F.toString(16);if (E.length < 2) {
          E = "0" + E;
        }return E;
      }return "#" + D(B) + D(A) + D(z);
    };C.clone = function () {
      return new Color(B, A, z);
    };C.toString = function () {
      var D = C.toHexString();return D;
    };
  }k.parse = function () {
    var y = null;if (arguments.length > 0) {
      var x = b.parse(arguments[0]);if (x) {
        y = new k(x.r, x.g, x.b);
      }
    }return y;
  };k.test = function (x) {
    return b.test(x) != null;
  };var j = new function () {
    var y = this;var x = navigator.userAgent.toLowerCase();if (x.indexOf("msie") != -1) {
      y.ie = { version: t.toFloat(x.split("msie")[1]) };
    }
  }();function f(D) {
    var C = new RegExp("^" + t.trim(D) + "$", "gi");var G = document.styleSheets;var A = 0;for (var y = 0; y < G.length; y++) {
      var F = G[y];var B = F.cssRules == undefined ? F.rules : F.cssRules;if (B) {
        for (var x = 0; x < B.length; x++) {
          var z = B[x];var E = z.selectorText;if (E.match(C)) {
            return z.style.cssText;
          }
        }
      }
    }return null;
  }function g(x) {
    x = x.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");var z = "[\\?&]" + x + "=([^&#]*)";var y = new RegExp(z);var A = y.exec(window.location.href);if (A == null) {
      return null;
    } else {
      return A[1];
    }
  }function w() {
    window.location = window.location;
  }function v(y, x) {
    window.open(y, "_blank");if (x == true) {
      window.focus();
    }
  }if (arguments[0] == true) {
    var d = function d(A, z, y) {
      var x = z[y];if (typeof x == "function") {
        A.prototype[y] = function () {
          var B = [this];for (var C = 0; C < arguments.length; C++) {
            B.push(arguments[C]);
          }return z[y].apply(this, B);
        };
      }
    };

    var e = function e(A, y, z) {
      for (var x in y) {
        d(A, y, x);
      }for (var x in z) {
        A[x] = z[x];
      }
    };

    e(Number, p, q);e(String, t, u);e(Array, h, i);e(Object, {}, s);window.JMaybe = o;window.JDictionary = l;window.JEventTarget = m;window.JColor = k;window.getCssText = f;
  } else {
    var n = {};if (window.__jneratorExtantions) {
      n = window.__jneratorExtantions;
    }n.JNumber = p;n.JNumberStatic = q;n.JString = t;n.JStringStatic = u;n.JArray = h;n.JArrayStatic = i;n.JObject = {};n.JObject = r;n.JObjectStatic = s;n.JMaybe = o;n.JDictionary = l;n.JEventTarget = m;n.JColor = k;n.JBrowser = j;n.getCssText = f;n.getParameter = g;n.reload = w;n.openNewTab = v;window.__jneratorExtantions = n;
  }
})(false);(function () {
  window.i2 = new function () {
    var JNumber = window.__jneratorExtantions.JNumber;var JNumberStatic = window.__jneratorExtantions.JNumberStatic;var JString = window.__jneratorExtantions.JString;var JStringStatic = window.__jneratorExtantions.JStringStatic;var JArray = window.__jneratorExtantions.JArray;var JArrayStatic = window.__jneratorExtantions.JArrayStatic;var JObject = window.__jneratorExtantions.JObject;var JObjectStatic = window.__jneratorExtantions.JObjectStatic;var JMaybe = window.__jneratorExtantions.JMaybe;var JDictionary = window.__jneratorExtantions.JDictionary;var JEventTarget = window.__jneratorExtantions.JEventTarget;var JColor = window.__jneratorExtantions.JColor;var JBrowser = window.__jneratorExtantions.JBrowser;var getCssText = window.__jneratorExtantions.getCssText;var rootSelf = this;var testObject = {};var et = new JEventTarget();rootSelf.onEmph = function (f) {
      et.add("emph", f);
    };rootSelf.emph = function () {
      Selector.setParentElement(arguments.length > 0 ? arguments[0] : null);var groups = [];var paragraphs = [];var allVelems = [];var attrName = Options.i2Attr.name;var keyKey = Options.key.key;var setKey = Options.set.key;var elements = Selector.getElementsByAttr(attrName);JArray.each(elements, function (element) {
        var attrValue = Selector.getAttr(element, attrName);var data = Parser.parse(attrValue);if (OptionUtil.getMainKinds(data).isGroup) {
          OptionUtil.updateData(data);if (EmphUtil.hasDataSets(data)) {
            var dataSets = EmphUtil.getDataSets(data);JArray.each(dataSets, function (d) {
              JArray.add(allVelems, new Velem(element, d));
            });
          } else {
            JArray.add(allVelems, new Velem(element, data));
          }
        } else {
          JArray.add(allVelems, new Velem(element, data));
        }
      });var keyVelems = [];var velems = [];JArray.each(allVelems, function (v) {
        if (v.hasKey) {
          JArray.add(keyVelems, v);
        } else {
          JArray.add(velems, v);
        }
      });if (JArray.any(keyVelems)) {
        var keys = [];JArray.each(keyVelems, function (v) {
          var key = v.data[keyKey];if (!JArray.any(keys, function (k) {
            return k == key;
          })) {
            JArray.add(keys, key);
          }
        });JArray.each(keys, function (k) {
          var kGroups = [];var kItems = [];var kPhrases = [];JArray.each(keyVelems, function (v) {
            if (v.data[keyKey] == k) {
              if (v.isGroup) {
                JArray.add(kGroups, v);
              }if (v.isItem) {
                JArray.add(kItems, v);
              }if (v.isPhrase) {
                JArray.add(kPhrases, v);
              }
            }
          });JArray.each(kGroups, function (g) {
            var gSet = JStringStatic.toSafeString(g.data[setKey]);var gItems = JArray.where(kItems, function (x) {
              return JStringStatic.toSafeString(x.data[setKey]) == gSet;
            });var gPhrases = JArray.where(kPhrases, function (x) {
              return JStringStatic.toSafeString(x.data[setKey]) == gSet;
            });if (JArray.any(gItems)) {
              JArray.addArray(g.items, gItems);JArray.add(groups, new Group(g.element, g.data, g.items));
            }if (JArray.any(gPhrases)) {
              JArray.addArray(g.phrases, gPhrases);JArray.add(paragraphs, new Paragraph(g.element, g.data, g.phrases));
            }
          });
        });
      }if (JArray.any(velems)) {
        var vGroups = [];var vItems = [];var vPhrases = [];var tempAttr = Options.tempGroupAttr.name;JArray.each(velems, function (v) {
          if (v.isGroup) {
            JArray.add(vGroups, v);Selector.setAttr(v.element, tempAttr, "1");
          }if (v.isItem) {
            JArray.add(vItems, v);
          }if (v.isPhrase) {
            JArray.add(vPhrases, v);
          }
        });JArray.each(vItems, function (v) {
          v.groupElement = Selector.getCurrentOrParentElement(v.element, tempAttr);
        });JArray.each(vPhrases, function (v) {
          v.groupElement = Selector.getCurrentOrParentElement(v.element, tempAttr);
        });JArray.each(vGroups, function (v) {
          var gSet = JStringStatic.toSafeString(v.data[setKey]);var gItems = JArray.where(vItems, function (i) {
            return i.groupElement == v.element && JStringStatic.toSafeString(i.data[setKey]) == gSet;
          });var gPhrases = JArray.where(vPhrases, function (ph) {
            return ph.groupElement == v.element && JStringStatic.toSafeString(ph.data[setKey]) == gSet;
          });JArray.addArray(v.items, gItems);JArray.addArray(v.phrases, gPhrases);Selector.removeAttr(v.element, tempAttr);if (JArray.any(v.items)) {
            JArray.add(groups, new Group(v.element, v.data, v.items));
          }if (JArray.any(v.phrases)) {
            JArray.add(paragraphs, new Paragraph(v.element, v.data, v.phrases));
          }
        });JArray.each(vItems, function (v) {
          delete v.groupElement;
        });JArray.each(vPhrases, function (v) {
          delete v.groupElement;
        });
      }JArray.each(groups, function (x) {
        x.emphasize();
      });JArray.each(paragraphs, function (x) {
        x.emphasize();
      });if (_testMode) {
        testObject.lastGroups = groups;testObject.lastParagraphs = paragraphs;
      }et.call("emph");
    };rootSelf.option = function () {
      if (arguments.length > 0) {
        var obj = arguments[0];if (JObjectStatic.isString(obj)) {
          return OptionUtil.getOption(obj);
        } else {
          if (JObjectStatic.isObject(obj)) {
            OptionUtil.changeOption(obj);
          }
        }
      }
    };rootSelf.emphasizers = new function () {
      var self = this;self.css = function () {
        var it = this;it.init = function (value) {
          if (EmphUtil.is2StringArray(value) || EmphUtil.is2PropArray(value)) {
            it.cssBlock = new CssBlockCombiner(value[0], value[1]);
          } else {
            if (EmphUtil.is2Classes(value)) {
              var splits = value.split(",");it.cssBlock = new CssBlockCombiner("." + JString.trim(splits[0], "."), "." + JString.trim(splits[1], "."));
            } else {
              exception(ResourceStrings.InvalidParameterForEmphasizer + "css");
            }
          }
        };it.emphasize = function (element, currentRate, minRate, maxRate) {
          EmphUtil.emphasize(it.cssBlock, element, currentRate, minRate, maxRate);
        };
      };self.fontSize = function () {
        var it = this;it.init = function (value) {
          var r = EmphUtil.getDimentionRange(value);if (r) {
            it.cssBlock = new CssBlockCombiner({ fontSize: r.from }, { fontSize: r.to });
          } else {
            exception(ResourceStrings.InvalidParameterForEmphasizer + "fontSize");
          }
        };it.emphasize = function (element, currentRate, minRate, maxRate) {
          EmphUtil.emphasize(it.cssBlock, element, currentRate, minRate, maxRate);
        };
      };self.width = function () {
        var it = this;it.init = function (value) {
          var r = EmphUtil.getDimentionRange(value);if (r) {
            it.cssBlock = new CssBlockCombiner({ width: r.from }, { width: r.to });
          } else {
            exception(ResourceStrings.InvalidParameterForEmphasizer + "width");
          }
        };it.emphasize = function (element, currentRate, minRate, maxRate) {
          EmphUtil.emphasize(it.cssBlock, element, currentRate, minRate, maxRate);
        };
      };self.height = function () {
        var it = this;it.init = function (value) {
          var r = EmphUtil.getDimentionRange(value);if (r) {
            it.cssBlock = new CssBlockCombiner({ height: r.from }, { height: r.to });
          } else {
            EmphUtil.exception(ResourceStrings.InvalidParameterForEmphasizer + "height");
          }
        };it.emphasize = function (element, currentRate, minRate, maxRate) {
          EmphUtil.emphasize(it.cssBlock, element, currentRate, minRate, maxRate);
        };
      };self.color = function () {
        var it = this;it.init = function (value) {
          var r = EmphUtil.getColorRange(value);if (r) {
            it.cssBlock = new CssBlockCombiner({ color: r.from }, { color: r.to });
          } else {
            EmphUtil.exception(ResourceStrings.InvalidParameterForEmphasizer + "color");
          }
        };it.emphasize = function (element, currentRate, minRate, maxRate) {
          EmphUtil.emphasize(it.cssBlock, element, currentRate, minRate, maxRate);
        };
      };self.opacity = function () {
        var it = this;it.init = function (value) {
          var r = EmphUtil.getNumberRange(value);if (r) {
            it.cssBlock = new CssBlockCombiner({ opacity: r.from, filter: "alpha(opacity=" + r.from * 100 + ")" }, { opacity: r.to, filter: "alpha(opacity=" + r.to * 100 + ")" });
          } else {
            EmphUtil.exception(ResourceStrings.InvalidParameterForEmphasizer + "color");
          }
        };it.emphasize = function (element, currentRate, minRate, maxRate) {
          EmphUtil.emphasize(it.cssBlock, element, currentRate, minRate, maxRate);
        };
      };
    }();var EmphUtil = new function () {
      var self = this;var styleClassPattern = "[\\-.]?[_a-z]+[_a-z0-9\\-]*";var styleClassesRegex = new RegExp("^\\s*" + styleClassPattern + "\\s*,\\s*" + styleClassPattern + "\\s*$", "gi");self.is2StringArray = function (value) {
        return JObjectStatic.isArray(value) && value.length >= 2 && JObjectStatic.isString(value[0]) && JObjectStatic.isString(value[1]);
      };self.is2Classes = function (value) {
        return JObjectStatic.isString(value) && JStringStatic.toSafeString(value).match(styleClassesRegex);
      };self.is2PropArray = function (value) {
        var result = JObjectStatic.isArray(value) && value.length >= 2;for (var i = 0; i < 2; i++) {
          if (!self.isProp(value[i])) {
            return false;
          }
        }return result;
      };self.isProp = function (obj) {
        var result = false;if (JObjectStatic.isObject(obj)) {
          for (var i in obj) {
            result = true;if (!JObjectStatic.isString(obj[i]) && !JObjectStatic.isNumeric(obj[i])) {
              return false;
            }
          }
        }return result;
      };self.hasDataSets = function (data) {
        var result = false;var css = JMaybe.get(data[Options.emph.key], function (x) {
          return x[Options.css.key];
        });if (JObjectStatic.isObject(css)) {
          for (var i in css) {
            result = self.is2StringArray(css[i]) || self.is2PropArray(css[i]) || self.is2Classes(css[i]);if (!result) {
              break;
            }
          }
        }return result;
      };self.getDataSets = function (data) {
        var result = [];var emphKey = Options.emph.key;var cssKey = Options.css.key;var setKey = Options.set.key;var css = JMaybe.get(data[emphKey], function (x) {
          return x[cssKey];
        });for (var set in css) {
          var cloneData = JObject.clone(data);cloneData[setKey] = set;cloneData[emphKey][cssKey] = css[set];JArray.add(result, cloneData);
        }return result;
      };self.emphasize = function (cssBlock, element, currentRate, minRate, maxRate) {
        if (cssBlock instanceof CssBlockCombiner) {
          var props = cssBlock.calc(currentRate, minRate, maxRate);JArray.each(props, function (p) {
            var style = element.style;if (!JObjectStatic.isFunction(style[p.name])) {
              if (style[p.name] != undefined) {
                style[p.name] = p.value;
              } else {
                var set = false;if (JBrowser.ie && JBrowser.ie.version < 9) {
                  var propName = p.name.toLowerCase();for (var key in style) {
                    if (propName == key.toLowerCase() && !JObjectStatic.isFunction(style[key])) {
                      style[key] = p.value;set = true;
                    }
                  }
                }if (!set) {
                  style[p.name] = p.value;
                }
              }
            }
          });
        }
      };self.getDimentionRange = function (value) {
        if (JObjectStatic.isArray(value) && value.length >= 2) {
          var from = StyleUtils.toDimention(value[0]);var to = StyleUtils.toDimention(value[1]);if (!JStringStatic.isEmpty(from) && !JStringStatic.isEmpty(to)) {
            return { from: from, to: to };
          }
        }
      };self.getColorRange = function (value) {
        if (JObjectStatic.isArray(value) && value.length >= 2) {
          var from = value[0];var to = value[1];if (JColor.test(from) && JColor.test(to)) {
            return { from: from, to: to };
          }
        }
      };self.getNumberRange = function (value) {
        if (JObjectStatic.isArray(value) && value.length >= 2) {
          var from = value[0];var to = value[1];if (!JStringStatic.isEmpty(from) && !JStringStatic.isEmpty(to)) {
            return { from: JString.toFloat(from), to: JString.toFloat(to) };
          }
        }
      };
    }();var ResourceStrings = { CannotParseAttr: "Cannot parce attribute: ", InvalidParameterForEmphasizer: "Invalid parameter for emphasizer: ", InvalidAttributeContent: "Invalid attribute content: " };function getEmphasizers(emphData) {
      var result = [];for (var dataName in emphData) {
        for (var emphName in rootSelf.emphasizers) {
          if (dataName == emphName) {
            var emphasizer = new rootSelf.emphasizers[emphName]();if (emphasizer.init && JObjectStatic.isFunction(emphasizer.init)) {
              emphasizer.init(emphData[dataName]);
            }JArray.add(result, emphasizer);
          }
        }
      }return result;
    }function exception(error) {
      throw error;
    }var OptionTypes = { String: 1, Array: 2 };var PropKinds = { None: 0, Group: 1, Item: 2, Phrase: 3, Any: 4 };var PropBelongs = { None: 0, Emph: 1, Option: 3 };function BaseProp(key) {
      var self = this;self.toUniqueKey = function (key) {
        return JStringStatic.toSafeString(key).toLowerCase();
      };self.init = function (key) {
        self.key = key;self.ukey = self.toUniqueKey(key);
      };self.init(key);
    }function PropAttr(key, name) {
      var self = this;BaseProp.call(self, key);self.name = self.toUniqueKey(name);
    }function PropMain(key, kind, belong) {
      var self = this;BaseProp.call(self, key);self.kind = kind ? kind : PropKinds.None;self.belong = belong ? belong : PropBelongs.None;
    }function PropOption(key, type, defaultValue) {
      var self = this;PropMain.call(self, key, PropKinds.Any, PropBelongs.Option);self.type = type;self.defaultValue = defaultValue;
    }var OptionValues = new function () {
      var self = this;self.Auto = "auto";self.isAuto = function (intance) {
        return JStringStatic.toSafeString(intance).toLowerCase() == self.Auto;
      };self.isTrue = function (instance) {
        return JStringStatic.toSafeString(instance).toLowerCase() == "true";
      };
    }();var Options = new function () {
      var self = this;self.emph = new PropMain("emph", PropKinds.Group);self.css = new PropMain("css", PropKinds.Group, PropBelongs.Emph);self.fontSize = new PropMain("fontSize", PropKinds.Group, PropBelongs.Emph);self.width = new PropMain("width", PropKinds.Group, PropBelongs.Emph);self.height = new PropMain("height", PropKinds.Group, PropBelongs.Emph);self.color = new PropMain("color", PropKinds.Group, PropBelongs.Emph);self.opacity = new PropMain("opacity", PropKinds.Group, PropBelongs.Emph);self.rate = new PropMain("rate", PropKinds.Item);self.number = new PropMain("number", PropKinds.Phrase);self.string = new PropMain("string", PropKinds.Phrase);self.key = new PropMain("key", PropKinds.None);self.set = new PropMain("set", PropKinds.None);self.option = new PropMain("option", PropKinds.Any);self.rates = new PropOption("rates", OptionTypes.Array, []);self.reverse = new PropOption("reverse", OptionTypes.String, false);self.prefix = new PropOption("prefix", OptionTypes.String, JStringStatic.empty);self.suffix = new PropOption("suffix", OptionTypes.String, JStringStatic.empty);self.separator = new PropOption("separator", OptionTypes.Array, [" "]);self.groupSize = new PropOption("groupSize", OptionTypes.String, 3);self.groupSeparator = new PropOption("groupSeparator", OptionTypes.String, ",");self.decimalDigits = new PropOption("decimalDigits", OptionTypes.String, OptionValues.Auto);self.decimalSeparator = new PropOption("decimalSeparator", OptionTypes.String, ".");self.negativeSing = new PropOption("negativeSing", OptionTypes.String, "-");self.i2Attr = new PropAttr("i2Attr", "data-i2");self.tempGroupAttr = new PropAttr("tempGroupAttr", "data-i2-temp-group");
    }();var OptionUtil = new function () {
      var self = this;var props = [];var groups = [];var emphs = [];var options = [];for (var i in Options) {
        var p = Options[i];if (p instanceof PropMain || p instanceof PropOption) {
          if (p.kind == PropKinds.Group) {
            JArray.add(groups, p);
          }if (p.belong == PropBelongs.Emph) {
            JArray.add(emphs, p);
          } else {
            if (p.belong == PropBelongs.Option) {
              JArray.add(options, p);
            }
          }JArray.add(props, p);
        }
      }self.getMainKinds = function (obj) {
        var result = { isGroup: false, isItem: false, isPhrase: false };for (var i in obj) {
          JArray.each(props, function (p) {
            if (i == p.key) {
              if (p.kind == PropKinds.Group) {
                result.isGroup = true;
              } else {
                if (p.kind == PropKinds.Item) {
                  result.isItem = true;
                } else {
                  if (p.kind == PropKinds.Phrase) {
                    result.isPhrase = true;
                  }
                }
              }
            }
          });
        }return result;
      };self.updateData = function (data) {
        var emphKey = Options.emph.key;var optionKey = Options.option.key;if (!data[emphKey]) {
          data[emphKey] = {};
        }if (!data[optionKey]) {
          data[optionKey] = {};
        }for (var i in data) {
          if (JArray.any(emphs, function (p) {
            return p.key == i;
          })) {
            data[emphKey][i] = data[i];delete data[i];
          } else {
            if (JArray.any(options, function (p) {
              return p.key == i;
            })) {
              data[optionKey][i] = data[i];delete data[i];
            }
          }
        }
      };self.getDefaultValues = function (data) {
        var result = data;for (var k in Options) {
          var o = Options[k];if (o instanceof PropOption) {
            var value = data[o.key];if (value != undefined) {
              result[o.key] = value;
            } else {
              if (o.defaultValue != undefined) {
                result[o.key] = o.defaultValue;
              }
            }
          }
        }return result;
      };self.getOption = function (key) {
        var option = Options[key];if (option instanceof PropAttr) {
          return option.name;
        } else {
          if (option instanceof PropOption) {
            return option.defaultValue;
          }
        }
      };self.changeOption = function (obj) {
        if (JObjectStatic.isObject(obj)) {
          for (var i in obj) {
            var option = Options[i];if (option instanceof PropAttr) {
              option.name = obj[i];
            } else {
              if (option instanceof PropOption) {
                option.defaultValue = obj[i];
              }
            }
          }
        }
      };
    }();var Parser = new function () {
      var self = this;self.parse = function (raw) {
        try {
          var data = eval("({" + raw + "})");return data;
        } catch (err) {
          exception(ResourceStrings.InvalidAttributeContent + Options.i2Attr.name);
        }
      };
    }();function getCssProperties(selector) {
      var cssText = getCssText(selector);var result = [];var itemSplits = JStringStatic.toSafeString(cssText).split(";");for (var i = 0; i < itemSplits.length; i++) {
        var itemSplit = itemSplits[i];if (JString.contains(itemSplit, ":")) {
          var pairSplits = itemSplit.split(":");if (pairSplits.length >= 2) {
            JArray.add(result, new CssProperty(JString.trim(pairSplits[0]), JString.trim(pairSplits[1])));
          }
        }
      }return result;
    }function CssProperty() {
      var self = this;self.name;self.value;if (arguments.length >= 2) {
        self.name = StyleUtils.getStyleName(arguments[0]);self.value = arguments[1];
      }
    }function CssPropertyCombiner(name, firstValue) {
      var self = this;self.name = name;var firstValue = firstValue;var secondValue;self.combine = function (value) {
        secondValue = value;
      };self.isCombined = function () {
        return secondValue != undefined;
      };self.getValue = function (currentRate, minRate, maxRate) {
        if (self.isCombined()) {
          return StyleUtils.calc(firstValue, secondValue, currentRate, minRate, maxRate);
        } else {
          return firstValue;
        }
      };self.toTestString = function () {
        return name + ":(" + firstValue + (self.isCombined() ? "," + secondValue : JStringStatic.empty) + ")";
      };
    }function CssBlockCombiner(fromSelector, toSelector) {
      var self = this;self.properties = [];var fromProps = [];var toProps = [];if (JObjectStatic.isString(fromSelector) && JObjectStatic.isString(toSelector)) {
        var fps = getCssProperties(fromSelector);JArray.addArray(fromProps, fps);var tps = getCssProperties(toSelector);JArray.addArray(toProps, tps);if (isLog()) {
          log("getCssProperties. from:'" + fromSelector + "'; to: '" + toSelector + "'", true);
        }
      } else {
        for (var i in fromSelector) {
          JArray.add(fromProps, new CssProperty(i, fromSelector[i]));
        }for (var i in toSelector) {
          JArray.add(toProps, new CssProperty(i, toSelector[i]));
        }
      }for (var i = 0; i < fromProps.length; i++) {
        var prop = fromProps[i];JArray.add(self.properties, new CssPropertyCombiner(prop.name, prop.value));
      }for (var i = 0; i < toProps.length; i++) {
        var prop = toProps[i];var pc = JArray.first(self.properties, function (x) {
          return !x.isCombined() && x.name == prop.name;
        });if (pc) {
          pc.combine(prop.value);
        } else {
          JArray.add(self.properties, new CssPropertyCombiner(prop.name, prop.value));
        }
      }if (isLog()) {
        log("From props (" + fromProps.length + "): " + JArray.select(fromProps, function (p) {
          return p.name + "=" + p.value;
        }));log("To props (" + toProps.length + "): " + JArray.select(toProps, function (p) {
          return p.name + "=" + p.value;
        }));log("Combined props (" + self.properties.length + "): " + JArray.select(self.properties, function (p) {
          return p.name;
        }));
      }self.calc = function (currentRate, minRate, maxRate) {
        return JArray.select(self.properties, function (x) {
          return new CssProperty(x.name, x.getValue(currentRate, minRate, maxRate));
        });
      };
    }var StyleUtils = new function () {
      var self = this;var spacePattern = "\\s+";var numberPattern = "\\-?\\d+(\\.\\d+)?";var dimensionPattern = numberPattern + "[a-z%]+";var rgbPattern = "rgb\\((\\s*\\d+\\s*,\\s*){2}\\d+\\s*\\)";var rgbaPattern = "rgba\\((\\s*\\d+\\s*,\\s*){3}\\d+(\\.\\d+)?\\s*\\)";var hexPattern = "(#[a-f\\d]{6})|(#[a-f\\d]{3})";var splitChar = ";";var numberRegex = new RegExp(numberPattern, "gi");var dimensionRegex = new RegExp(dimensionPattern, "gi");var fullNumberRegex = new RegExp("^" + numberPattern + "$", "gi");var fullDimentionRegex = new RegExp("^" + dimensionPattern + "$", "gi");var rectRegex = new RegExp("^" + dimensionPattern + "((\\s+)" + dimensionPattern + "){1,3}$", "gi");var cssValueRegex = new RegExp([spacePattern, numberPattern, rgbPattern, rgbaPattern, hexPattern].join("|"), "gi");self.getStyleName = function (cssName) {
        var result = JStringStatic.empty;var splits = JStringStatic.toSafeString(cssName).split("-");JArray.each(splits, function (s, i) {
          if (!JStringStatic.isEmpty(s)) {
            result += JStringStatic.isEmpty(result) ? s : JString.subUpper(s, 0);
          }
        });return result;
      };self.setStyleNames = function (obj) {
        for (var i in obj) {
          var sn = self.getStyleName(i);if (sn != i) {
            obj[sn] = obj[i];delete obj[i];
          }
        }
      };self.toDimention = function (v) {
        var v = JString.trim(JStringStatic.toSafeString(v));if (v.match(fullDimentionRegex)) {
          return v;
        } else {
          if (v.match(fullNumberRegex)) {
            return v + "px";
          } else {
            return JStringStatic.empty;
          }
        }
      };var CssValueTypes = { Unknown: 0, Number: 1, Color: 3 };function getRectUnits(rectValue) {
        var result = [];var ms = rectValue.match(unitRegex);if (ms.length == 2) {
          result = [ms[0], ms[1], ms[0], ms[1]];
        } else {
          if (ms.length == 3) {
            result = [ms[0], ms[1], ms[2], ms[1]];
          } else {
            if (ms.length > 3) {
              result = [ms[0], ms[1], ms[2], ms[3]];
            }
          }
        }return result;
      }function CssSubvalue(rawString) {
        var self = this;self.value = JStringStatic.empty;self.type = CssValueTypes.Unknown;rawString = JStringStatic.toSafeString(rawString);if (rawString.match(fullNumberRegex)) {
          self.type = CssValueTypes.Number;self.value = JString.toFloat(rawString);
        } else {
          if (JColor.test(rawString)) {
            self.type = CssValueTypes.Color;self.value = JColor.parse(rawString);
          } else {
            self.value = rawString;
          }
        }self.toString = function () {
          return self.value;
        };self.isSimilar = function (cssSubvalue) {
          var result = false;if (cssSubvalue instanceof CssSubvalue && cssSubvalue.type == self.type) {
            if (self.type == CssValueTypes.Unknown) {
              result = cssSubvalue.value == self.value;
            } else {
              result = true;
            }
          }return result;
        };self.calc = function (cssSubvalue, rate, min, max) {
          var result = new CssSubvalue(cssSubvalue.toString());if (self.type == CssValueTypes.Number) {
            result.value = Formulas.linear(self.value, cssSubvalue.value, rate, min, max);
          } else {
            if (self.type == CssValueTypes.Color) {
              result.value = Formulas.linearColor(self.value, cssSubvalue.value, rate, min, max);
            }
          }return result;
        };
      }function CssValue(raw) {
        var self = this;self.subvalues = [];raw = JStringStatic.toSafeString(raw);raw = raw.replace(cssValueRegex, function (m, i) {
          return splitChar + m.replace(/\s+/gi, " ") + splitChar;
        });var splits = JArray.where(raw.split(splitChar), function (x) {
          return !JStringStatic.isEmpty(x);
        });JArray.each(splits, function (x, i) {
          JArray.add(self.subvalues, new CssSubvalue(x));
        });self.isSimilar = function (cssValue) {
          var result = false;var subLength = self.subvalues.length;if (cssValue instanceof CssValue && cssValue.subvalues.length == subLength) {
            var allSimilar = true;for (var i = 0; i < subLength; i++) {
              if (!self.subvalues[i].isSimilar(cssValue.subvalues[i])) {
                allSimilar = false;break;
              }
            }result = allSimilar;
          }return result;
        };self.toString = function () {
          var result = JArray.select(self.subvalues, function (x) {
            return x.toString();
          }).join("");return result;
        };self.calc = function (cssValue, rate, min, max) {
          var result = new CssValue();for (var i = 0; i < self.subvalues.length; i++) {
            JArray.add(result.subvalues, self.subvalues[i].calc(cssValue.subvalues[i], rate, min, max));
          }return result;
        };
      }self.calc = function (fromValue, toValue, currentRate, minRate, maxRate) {
        var fromCssValue = new CssValue(fromValue);var toCssValue = new CssValue(toValue);var result = toCssValue;if (fromCssValue.isSimilar(toCssValue)) {
          result = fromCssValue.calc(toCssValue, currentRate, minRate, maxRate);
        }return result.toString();
      };
    }();function Velem(element, data) {
      var self = this;self.element = element;self.data = data;var keyKey = Options.key.key;var setKey = Options.set.key;var kinds = OptionUtil.getMainKinds(self.data);self.isGroup = kinds.isGroup;self.isItem = kinds.isItem;self.isPhrase = kinds.isPhrase;self.hasKey = !JStringStatic.isEmpty(self.data[keyKey]);self.hasSet = !JStringStatic.isEmpty(self.data[setKey]);self.items = [];self.phrases = [];
    }var groupIndex = 0;function Group(element, data, items) {
      var self = this;self.emphasizers = [];self.items = items;self.index = ++groupIndex;var rates = JArray.select(self.items, function (x) {
        return x.data.rate;
      });var minRate = JArray.min(rates);var maxRate = JArray.max(rates);JArray.addArray(self.emphasizers, getEmphasizers(data[Options.emph.key]));if (isLog()) {
        log("Group" + self.index + " created. Items: " + items.length + ". Emphasizers: " + self.emphasizers.length + ".");
      }self.emphasize = function () {
        if (isLog()) {
          log("Group" + self.index + ": emphasize", true);
        }JArray.each(self.emphasizers, function (e) {
          JArray.each(self.items, function (i) {
            e.emphasize(i.element, i.data.rate, minRate, maxRate);
          });
        });
      };
    }var ParagraphSplitter = new function () {
      var self = this;var SplitModes = { None: 0, Number: 2, String: 3 };self.split = function (options, phrases) {
        var numberKey = Options.number.key;var stringKey = Options.string.key;JArray.each(phrases, function (ph) {
          ph.mode = SplitModes.None;ph.value = undefined;if (!JStringStatic.isEmpty(ph.data[numberKey])) {
            ph.mode = SplitModes.Number;ph.value = ph.data[numberKey];
          } else {
            if (!JStringStatic.isEmpty(ph.data[stringKey])) {
              ph.mode = SplitModes.String;ph.value = ph.data[stringKey];
            }
          }ph.accents = splitPhrase(options, ph);
        });updateRelations(options, phrases);updateAffixes(options, phrases);updateRates(options, phrases);
      };function splitPhrase(options, phrase) {
        switch (phrase.mode) {case SplitModes.Number:
            return splitNumber(options, phrase.value);case SplitModes.String:
            return splitString(options, phrase.value);}return [];
      }function updateRelations(options, phrases) {
        if (JArray.all(phrases, function (ph) {
          return ph.mode == SplitModes.Number;
        })) {
          updateNumberRelations(options, phrases);
        }
      }function updateAffixes(options, phrases) {
        var prefix = options[Options.prefix.key];var suffix = options[Options.suffix.key];if (!JStringStatic.isEmpty(prefix)) {
          JArray.each(phrases, function (ph) {
            JArray.insert(ph.accents, 0, { value: prefix, isPrefix: true });
          });
        }if (!JStringStatic.isEmpty(suffix)) {
          JArray.each(phrases, function (ph) {
            JArray.add(ph.accents, { value: suffix, isSuffix: true });
          });
        }
      }function updateRates(options, phrases) {
        if (JArray.any(phrases) && JArray.all(phrases, function (ph) {
          return ph.mode == SplitModes.Number;
        })) {
          if (hasRates(options)) {
            var maxCount = JArray.max(JArray.select(phrases, function (x) {
              return JArray.count(x.accents);
            }));var rates = getRates(options, maxCount);JArray.each(phrases, function (ph) {
              setNumberRates(ph.accents, rates);
            });
          } else {
            var maxCount = JArray.max(JArray.select(phrases, function (x) {
              return JArray.count(JArray.where(x.accents, isNotAccentAffix));
            }));var rates = getRates(options, maxCount);JArray.each(phrases, function (ph) {
              var accents = ph.accents;setNumberRates(JArray.where(accents, isNotAccentAffix), rates);JMaybe.act(JArray.first(accents, function (a) {
                return a.isPrefix;
              }), function (a) {
                a.rate = accents[1].rate;
              });JMaybe.act(JArray.first(accents, function (a) {
                return a.isSuffix;
              }), function (a) {
                a.rate = accents[accents.length - 2].rate;
              });
            });
          }
        } else {
          if (hasRates(options)) {
            JArray.each(phrases, function (ph) {
              JArray.each(ph.accents, function (a) {
                a[Options.rate.key] = 0;
              });setRates(options, ph.accents);
            });
          } else {
            var maxCount = JArray.max(JArray.select(phrases, function (x) {
              return JArray.count(x.accents);
            }));var rates = getRates(options, maxCount);rates.reverse();JArray.each(phrases, function (ph) {
              JArray.each(ph.accents, function (a, i) {
                a.rate = rates[i];
              });
            });
          }
        }
      }function hasRates(options) {
        var rates = options[Options.rates.key];return JObjectStatic.isArray(rates) && rates.length > 0;
      }function setRates(options, accents) {
        if (hasRates(options)) {
          var ratesKey = Options.rates.key;var reverse = OptionValues.isTrue(options.reverse);var minLength = Math.min(accents.length, options[ratesKey].length);for (var i = 0; i < minLength; i++) {
            var index = reverse ? accents.length - i - 1 : i;accents[index].rate = options[ratesKey][i];
          }
        }
      }function getRates(options, maxCount) {
        var result = [];if (hasRates(options)) {
          var optionRates = options[Options.rates.key];var rateCount = optionRates.length;for (var i = 0; i < Math.max(rateCount, maxCount); i++) {
            JArray.add(result, i < rateCount ? optionRates[i] : 0);
          }if (options[Options.reverse.key] == true) {
            result.reverse();
          }if (maxCount < rateCount) {
            result = JArray.take(result, maxCount);
          }
        } else {
          for (var i = 0; i < maxCount; i++) {
            JArray.add(result, maxCount - i);
          }if (options[Options.reverse.key] == true) {
            result.reverse();
          }
        }return result;
      }function setNumberRates(accents, rates) {
        var accentCount = JArray.count(accents);var rateCount = JArray.count(rates);for (var i = 0; i < accentCount; i++) {
          accents[accentCount - i - 1].rate = rates[rateCount - i - 1];
        }
      }function isNotAccentAffix(accent) {
        return accent.isPrefix != true && accent.isSuffix != true;
      }function splitString(options, instance) {
        var result = [];instance = JStringStatic.toSafeString(instance);var splitter = options.separator;if (JObjectStatic.isArray(splitter)) {
          JArray.add(result, instance);for (var i = 0; i < splitter.length; i++) {
            var temp = [];JArray.addArray(temp, result);JArray.clear(result);JArray.each(splitStrings(temp, splitter[i]), function (x) {
              JArray.add(result, x);
            });
          }
        } else {
          result = JString.splitKeep(instance, splitter);
        }result = JArray.select(result, function (x) {
          return { value: x };
        });return result;
      }function splitStrings(values, separator) {
        var subStrings = [];for (var i = 0; i < values.length; i++) {
          JArray.each(JString.splitKeep(values[i], separator), function (x) {
            JArray.add(subStrings, x);
          });
        }return subStrings;
      }function splitNumber(options, value) {
        var n = JString.toFloat(JStringStatic.toSafeString(value));var integral = "";var decimal = "";var isNegative = n < 0;if (isNegative) {
          n *= -1;
        }var parts = n.toString().split(".");var decimalDigits = 0;if (parts.length > 0) {
          integral = parts[0];if (OptionValues.isAuto(options.decimalDigits)) {
            if (parts.length > 1) {
              decimal = parts[1];decimalDigits = decimal.length;
            }
          } else {
            decimalDigits = JString.toInt(JStringStatic.toSafeString(options.decimalDigits));if (parts.length > 1) {
              decimal = parts[1].substr(0, decimalDigits);
            } else {
              if (decimalDigits > 0) {
                decimal = "0";
              }
            }if (decimal.length > 0) {
              for (var i = decimal.length; i < decimalDigits; i++) {
                decimal += "0";
              }
            }
          }
        }var result = [];var integralSplits = splitIntegral(options, integral);if (JArray.any(integralSplits)) {
          if (isNegative) {
            integralSplits[0] = options.negativeSing + integralSplits[0];
          }
        }JArray.each(integralSplits, function (x) {
          JArray.add(result, { value: x });
        });if (decimal.length > 0) {
          var decimalValue = options.decimalSeparator + decimal;JArray.add(result, { value: decimalValue, isDecimal: true, decimalDigits: decimalDigits });
        }return result;
      }function splitIntegral(options, value) {
        var result = [];var groupSize = JString.toInt(JStringStatic.toSafeString(options.groupSize));if (groupSize > 0) {
          var prefixLength = value.length % groupSize;if (prefixLength > 0) {
            var prefix = value.substr(0, prefixLength);JArray.add(result, prefix);
          }var groupsString = value.substr(prefixLength, value.length - prefixLength);for (var i = 0; i < groupsString.length / groupSize; i++) {
            var group = groupsString.substr(i * groupSize, groupSize);JArray.add(result, group);
          }for (var i = 1; i < result.length; i++) {
            result[i] = options.groupSeparator + result[i];
          }
        } else {
          JArray.add(result, value);
        }return result;
      }function updateNumberRelations(options, phrases) {
        var decimalDigits = [];var hasIntegral = false;JArray.each(phrases, function (ph) {
          var decimalAccent = JArray.first(ph.accents, function (s) {
            return s.isDecimal == true;
          });if (decimalAccent) {
            JArray.add(decimalDigits, decimalAccent.decimalDigits);
          } else {
            hasIntegral = true;
          }
        });if (JArray.any(decimalDigits)) {
          var max = JArray.max(decimalDigits);var separator = options.decimalSeparator;JArray.each(phrases, function (ph) {
            var decimalAccent = JArray.first(ph.accents, function (s) {
              return s.isDecimal == true;
            });if (!decimalAccent) {
              decimalAccent = { value: separator, isDecimal: true, decimalDigits: 0 };JArray.add(ph.accents, decimalAccent);
            }for (var i = decimalAccent.decimalDigits; i < max; i++) {
              decimalAccent.value += "0";
            }decimalAccent.decimalDigits = max;
          });
        }
      }
    }();var paragraphIndex = 0;function Paragraph(element, data, phrases) {
      var self = this;self.emphasizers = [];self.phrases = phrases;self.index = ++paragraphIndex;var option = OptionUtil.getDefaultValues(data.option);ParagraphSplitter.split(option, self.phrases);JArray.each(self.phrases, function (ph) {
        Selector.clear(ph.element);JArray.each(ph.accents, function (a) {
          var accentElement = document.createElement("span");Selector.appendChild(ph.element, accentElement);Selector.appendText(accentElement, a.value);a.element = accentElement;
        });
      });var accents = JArray.selectMany(phrases, function (ph) {
        return ph.accents;
      });var minRate = 0;var maxRate = 0;if (JArray.any(accents)) {
        minRate = JArray.min(accents, function (x) {
          return x.rate;
        }).rate;maxRate = JArray.max(accents, function (x) {
          return x.rate;
        }).rate;
      }JArray.addArray(self.emphasizers, getEmphasizers(data[Options.emph.key]));if (isLog()) {
        log("Paragraph" + self.index + " created. Phrases: " + phrases.length + ". Emphasizers: " + self.emphasizers.length + ".");
      }self.emphasize = function () {
        if (isLog()) {
          log("Paragraph" + self.index + ": emphasize", true);
        }JArray.each(self.emphasizers, function (e) {
          JArray.each(accents, function (a) {
            e.emphasize(a.element, a.rate, minRate, maxRate);
          });
        });
      };
    }var Formulas = new function () {
      var self = this;self.linear = function (from, to, currentRate, minRate, maxRate) {
        var result = to;if (minRate != maxRate && from != to) {
          var fraction = getCurrentFraction(currentRate, minRate, maxRate);var segment = fraction * (to - from);result = from + segment;
        }return parseFloat(JNumber.roundDecimal(result, 2));
      };self.linearColor = function (from, to, currentRate, minRate, maxRate) {
        if (minRate == maxRate || isColorsEquals(from, to)) {
          return to;
        } else {
          var r = self.linear(from.r(), to.r(), currentRate, minRate, maxRate);var g = self.linear(from.g(), to.g(), currentRate, minRate, maxRate);var b = self.linear(from.b(), to.b(), currentRate, minRate, maxRate);var a = self.linear(from.a(), to.a(), currentRate, minRate, maxRate);return new JColor(r, g, b, a);
        }
      };function isColorsEquals(c1, c2) {
        return c1 instanceof JColor && c2 instanceof JColor && c1.toRgbaString() == c2.toRgbaString();
      }function getCurrentFraction(currentRate, minRate, maxRate) {
        return (currentRate - minRate) / (maxRate - minRate);
      }
    }();var Selector = new function () {
      var self = this;var Mode = { Default: 0, Jquery: 1, QuerySelector: 2 };var currentMode = Mode.Default;var modes = [currentMode];var parentElement = null;if (JObjectStatic.isFunction(window.$)) {
        modes.push(Mode.Jquery);currentMode = Mode.Jquery;
      }if (JObjectStatic.isFunction(document.querySelectorAll)) {
        modes.push(Mode.QuerySelector);currentMode = Mode.QuerySelector;
      }self.getElementsByAttr = function (name) {
        return selectByAttr(name, parentElement);
      };self.getAttr = function (element, attrName) {
        var result = element.getAttribute && element.getAttribute(attrName) || null;if (!result && element.attributes) {
          for (var i = 0; i < element.attributes.length; i++) {
            if (element.attributes[i].nodeName === attrName) {
              result = element.attributes[i].nodeValue;break;
            }
          }
        }return result;
      };self.setAttr = function (element, attrName, attrValue) {
        element.setAttribute(attrName, attrValue);
      };self.removeAttr = function (element, attrName) {
        element.removeAttribute(attrName);
      };self.getCurrentOrParentElement = function (element, attrName) {
        if (element != document && !JStringStatic.isEmpty(self.getAttr(element, attrName))) {
          return element;
        } else {
          if (element.parentNode) {
            return self.getCurrentOrParentElement(element.parentNode, attrName);
          } else {
            return null;
          }
        }
      };self.clear = function (element) {
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
      };self.appendChild = function (element, child) {
        element.appendChild(child);
      };self.appendText = function (element, text) {
        element.innerHTML = text;
      };self.getModes = function () {
        return modes;
      };self.setMode = function (mode) {
        currentMode = mode;
      };self.setParentElement = function (e) {
        parentElement = e;
      };function selectByAttr(attrName, element) {
        return select("[" + attrName + "]", function (x) {
          return self.getAttr(x, attrName);
        }, element);
      }function select(selector, simpleFilter, element) {
        var result = [];if (currentMode == Mode.Jquery) {
          var jResult = element ? $(element).find(selector) : $(selector);JArray.each(jResult, function (x) {
            JArray.add(result, $(x)[0]);
          });
        } else {
          if (currentMode == Mode.QuerySelector) {
            var elements = (element ? element : document).querySelectorAll(selector);for (var i = 0; i < elements.length; i++) {
              JArray.add(result, elements[i]);
            }
          } else {
            var allElements = (element ? element : document).getElementsByTagName("*");for (var i = 0; i < allElements.length; i++) {
              var el = allElements[i];if (simpleFilter(el)) {
                JArray.add(result, el);
              }
            }
          }
        }return result;
      }
    }();var logElement;function setLogElement() {
      if (arguments.length > 0) {
        logElement = arguments[0];
      }
    }function log(text, bold) {
      if (isLog()) {
        var textElement = document.createElement("span");var brElement = document.createElement("br");Selector.appendText(textElement, text);if (bold) {
          var boldElement = document.createElement("b");Selector.appendChild(boldElement, textElement);Selector.appendChild(logElement, boldElement);
        } else {
          Selector.appendChild(logElement, textElement);
        }Selector.appendChild(logElement, brElement);
      }
    }function isLog() {
      return logElement;
    }_testMode = undefined;rootSelf.__setTestMode = function () {
      _testMode = true;rootSelf.objects = {};rootSelf.classes = {};rootSelf.functions = {};rootSelf.objects.testObject = testObject;rootSelf.objects.Parser = Parser;rootSelf.objects.OptionTypes = OptionTypes;rootSelf.objects.Options = Options;rootSelf.objects.ResourceStrings = ResourceStrings;rootSelf.objects.ParagraphSplitter = ParagraphSplitter;rootSelf.objects.Formulas = Formulas;rootSelf.objects.StyleUtils = StyleUtils;rootSelf.objects.Selector = Selector;rootSelf.objects.OptionUtil = OptionUtil;rootSelf.classes.BaseProp = BaseProp;rootSelf.classes.PropAttr = PropAttr;rootSelf.classes.PropOption = PropOption;rootSelf.classes.Group = Group;rootSelf.classes.Paragraph = Paragraph;rootSelf.classes.CssProperty = CssProperty;rootSelf.classes.CssPropertyCombiner = CssPropertyCombiner;rootSelf.classes.CssBlockCombiner = CssBlockCombiner;rootSelf.functions.getEmphasizers = getEmphasizers;rootSelf.functions.getCssProperties = getCssProperties;rootSelf.setLogElement = setLogElement;
    };
  }();
})();