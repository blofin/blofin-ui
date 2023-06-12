import ee from "react";
var Pr = { exports: {} }, ir = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr;
function Ie() {
  if (Jr)
    return ir;
  Jr = 1;
  var e = ee, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, u = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(s, d, p) {
    var g, b = {}, h = null, S = null;
    p !== void 0 && (h = "" + p), d.key !== void 0 && (h = "" + d.key), d.ref !== void 0 && (S = d.ref);
    for (g in d)
      a.call(d, g) && !c.hasOwnProperty(g) && (b[g] = d[g]);
    if (s && s.defaultProps)
      for (g in d = s.defaultProps, d)
        b[g] === void 0 && (b[g] = d[g]);
    return { $$typeof: t, type: s, key: h, ref: S, props: b, _owner: u.current };
  }
  return ir.Fragment = n, ir.jsx = l, ir.jsxs = l, ir;
}
var sr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function ze() {
  return Kr || (Kr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ee, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), P = Symbol.iterator, _ = "@@iterator";
    function T(r) {
      if (r === null || typeof r != "object")
        return null;
      var o = P && r[P] || r[_];
      return typeof o == "function" ? o : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(r) {
      {
        for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), f = 1; f < o; f++)
          i[f - 1] = arguments[f];
        ur("error", r, i);
      }
    }
    function ur(r, o, i) {
      {
        var f = O.ReactDebugCurrentFrame, y = f.getStackAddendum();
        y !== "" && (o += "%s", i = i.concat([y]));
        var x = i.map(function(m) {
          return String(m);
        });
        x.unshift("Warning: " + o), Function.prototype.apply.call(console[r], console, x);
      }
    }
    var Q = !1, dr = !1, fr = !1, pr = !1, gr = !1, J;
    J = Symbol.for("react.module.reference");
    function rr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === a || r === c || gr || r === u || r === p || r === g || pr || r === S || Q || dr || fr || typeof r == "object" && r !== null && (r.$$typeof === h || r.$$typeof === b || r.$$typeof === l || r.$$typeof === s || r.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === J || r.getModuleId !== void 0));
    }
    function er(r, o, i) {
      var f = r.displayName;
      if (f)
        return f;
      var y = o.displayName || o.name || "";
      return y !== "" ? i + "(" + y + ")" : i;
    }
    function tr(r) {
      return r.displayName || "Context";
    }
    function M(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case c:
          return "Profiler";
        case u:
          return "StrictMode";
        case p:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case s:
            var o = r;
            return tr(o) + ".Consumer";
          case l:
            var i = r;
            return tr(i._context) + ".Provider";
          case d:
            return er(r, r.render, "ForwardRef");
          case b:
            var f = r.displayName || null;
            return f !== null ? f : M(r.type) || "Memo";
          case h: {
            var y = r, x = y._payload, m = y._init;
            try {
              return M(m(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, F = 0, nr, K, $, or, V, U, j;
    function Mr() {
    }
    Mr.__reactDisabledLog = !0;
    function ce() {
      {
        if (F === 0) {
          nr = console.log, K = console.info, $ = console.warn, or = console.error, V = console.group, U = console.groupCollapsed, j = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Mr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        F++;
      }
    }
    function ue() {
      {
        if (F--, F === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, r, {
              value: nr
            }),
            info: N({}, r, {
              value: K
            }),
            warn: N({}, r, {
              value: $
            }),
            error: N({}, r, {
              value: or
            }),
            group: N({}, r, {
              value: V
            }),
            groupCollapsed: N({}, r, {
              value: U
            }),
            groupEnd: N({}, r, {
              value: j
            })
          });
        }
        F < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wr = O.ReactCurrentDispatcher, kr;
    function br(r, o, i) {
      {
        if (kr === void 0)
          try {
            throw Error();
          } catch (y) {
            var f = y.stack.trim().match(/\n( *(at )?)/);
            kr = f && f[1] || "";
          }
        return `
` + kr + r;
      }
    }
    var Rr = !1, vr;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      vr = new de();
    }
    function Ir(r, o) {
      if (!r || Rr)
        return "";
      {
        var i = vr.get(r);
        if (i !== void 0)
          return i;
      }
      var f;
      Rr = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = wr.current, wr.current = null, ce();
      try {
        if (o) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (W) {
              f = W;
            }
            Reflect.construct(r, [], m);
          } else {
            try {
              m.call();
            } catch (W) {
              f = W;
            }
            r.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            f = W;
          }
          r();
        }
      } catch (W) {
        if (W && f && typeof W.stack == "string") {
          for (var v = W.stack.split(`
`), A = f.stack.split(`
`), R = v.length - 1, C = A.length - 1; R >= 1 && C >= 0 && v[R] !== A[C]; )
            C--;
          for (; R >= 1 && C >= 0; R--, C--)
            if (v[R] !== A[C]) {
              if (R !== 1 || C !== 1)
                do
                  if (R--, C--, C < 0 || v[R] !== A[C]) {
                    var z = `
` + v[R].replace(" at new ", " at ");
                    return r.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", r.displayName)), typeof r == "function" && vr.set(r, z), z;
                  }
                while (R >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        Rr = !1, wr.current = x, ue(), Error.prepareStackTrace = y;
      }
      var X = r ? r.displayName || r.name : "", qr = X ? br(X) : "";
      return typeof r == "function" && vr.set(r, qr), qr;
    }
    function fe(r, o, i) {
      return Ir(r, !1);
    }
    function pe(r) {
      var o = r.prototype;
      return !!(o && o.isReactComponent);
    }
    function mr(r, o, i) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Ir(r, pe(r));
      if (typeof r == "string")
        return br(r);
      switch (r) {
        case p:
          return br("Suspense");
        case g:
          return br("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            return fe(r.render);
          case b:
            return mr(r.type, o, i);
          case h: {
            var f = r, y = f._payload, x = f._init;
            try {
              return mr(x(y), o, i);
            } catch {
            }
          }
        }
      return "";
    }
    var hr = Object.prototype.hasOwnProperty, zr = {}, Gr = O.ReactDebugCurrentFrame;
    function yr(r) {
      if (r) {
        var o = r._owner, i = mr(r.type, r._source, o ? o.type : null);
        Gr.setExtraStackFrame(i);
      } else
        Gr.setExtraStackFrame(null);
    }
    function ge(r, o, i, f, y) {
      {
        var x = Function.call.bind(hr);
        for (var m in r)
          if (x(r, m)) {
            var v = void 0;
            try {
              if (typeof r[m] != "function") {
                var A = Error((f || "React class") + ": " + i + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              v = r[m](o, m, f, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              v = R;
            }
            v && !(v instanceof Error) && (yr(y), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", i, m, typeof v), yr(null)), v instanceof Error && !(v.message in zr) && (zr[v.message] = !0, yr(y), w("Failed %s type: %s", i, v.message), yr(null));
          }
      }
    }
    var be = Array.isArray;
    function Er(r) {
      return be(r);
    }
    function ve(r) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, i = o && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return i;
      }
    }
    function me(r) {
      try {
        return Nr(r), !1;
      } catch {
        return !0;
      }
    }
    function Nr(r) {
      return "" + r;
    }
    function Fr(r) {
      if (me(r))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ve(r)), Nr(r);
    }
    var ar = O.ReactCurrentOwner, he = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Wr, $r, Cr;
    Cr = {};
    function ye(r) {
      if (hr.call(r, "ref")) {
        var o = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function xe(r) {
      if (hr.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function we(r, o) {
      if (typeof r.ref == "string" && ar.current && o && ar.current.stateNode !== o) {
        var i = M(ar.current.type);
        Cr[i] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(ar.current.type), r.ref), Cr[i] = !0);
      }
    }
    function ke(r, o) {
      {
        var i = function() {
          Wr || (Wr = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Re(r, o) {
      {
        var i = function() {
          $r || ($r = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Ee = function(r, o, i, f, y, x, m) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: o,
        ref: i,
        props: m,
        // Record the component responsible for creating this element.
        _owner: x
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function Ce(r, o, i, f, y) {
      {
        var x, m = {}, v = null, A = null;
        i !== void 0 && (Fr(i), v = "" + i), xe(o) && (Fr(o.key), v = "" + o.key), ye(o) && (A = o.ref, we(o, y));
        for (x in o)
          hr.call(o, x) && !he.hasOwnProperty(x) && (m[x] = o[x]);
        if (r && r.defaultProps) {
          var R = r.defaultProps;
          for (x in R)
            m[x] === void 0 && (m[x] = R[x]);
        }
        if (v || A) {
          var C = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          v && ke(m, C), A && Re(m, C);
        }
        return Ee(r, v, A, y, f, ar.current, m);
      }
    }
    var Sr = O.ReactCurrentOwner, Vr = O.ReactDebugCurrentFrame;
    function H(r) {
      if (r) {
        var o = r._owner, i = mr(r.type, r._source, o ? o.type : null);
        Vr.setExtraStackFrame(i);
      } else
        Vr.setExtraStackFrame(null);
    }
    var _r;
    _r = !1;
    function Tr(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function Dr() {
      {
        if (Sr.current) {
          var r = M(Sr.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Se(r) {
      {
        if (r !== void 0) {
          var o = r.fileName.replace(/^.*[\\\/]/, ""), i = r.lineNumber;
          return `

Check your code at ` + o + ":" + i + ".";
        }
        return "";
      }
    }
    var Lr = {};
    function _e(r) {
      {
        var o = Dr();
        if (!o) {
          var i = typeof r == "string" ? r : r.displayName || r.name;
          i && (o = `

Check the top-level render call using <` + i + ">.");
        }
        return o;
      }
    }
    function Yr(r, o) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var i = _e(o);
        if (Lr[i])
          return;
        Lr[i] = !0;
        var f = "";
        r && r._owner && r._owner !== Sr.current && (f = " It was passed a child from " + M(r._owner.type) + "."), H(r), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, f), H(null);
      }
    }
    function Ur(r, o) {
      {
        if (typeof r != "object")
          return;
        if (Er(r))
          for (var i = 0; i < r.length; i++) {
            var f = r[i];
            Tr(f) && Yr(f, o);
          }
        else if (Tr(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var y = T(r);
          if (typeof y == "function" && y !== r.entries)
            for (var x = y.call(r), m; !(m = x.next()).done; )
              Tr(m.value) && Yr(m.value, o);
        }
      }
    }
    function Te(r) {
      {
        var o = r.type;
        if (o == null || typeof o == "string")
          return;
        var i;
        if (typeof o == "function")
          i = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === b))
          i = o.propTypes;
        else
          return;
        if (i) {
          var f = M(o);
          ge(i, r.props, "prop", f, r);
        } else if (o.PropTypes !== void 0 && !_r) {
          _r = !0;
          var y = M(o);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pe(r) {
      {
        for (var o = Object.keys(r.props), i = 0; i < o.length; i++) {
          var f = o[i];
          if (f !== "children" && f !== "key") {
            H(r), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), H(null);
            break;
          }
        }
        r.ref !== null && (H(r), w("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    function Br(r, o, i, f, y, x) {
      {
        var m = rr(r);
        if (!m) {
          var v = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = Se(y);
          A ? v += A : v += Dr();
          var R;
          r === null ? R = "null" : Er(r) ? R = "array" : r !== void 0 && r.$$typeof === t ? (R = "<" + (M(r.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : R = typeof r, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, v);
        }
        var C = Ce(r, o, i, y, x);
        if (C == null)
          return C;
        if (m) {
          var z = o.children;
          if (z !== void 0)
            if (f)
              if (Er(z)) {
                for (var X = 0; X < z.length; X++)
                  Ur(z[X], r);
                Object.freeze && Object.freeze(z);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ur(z, r);
        }
        return r === a ? Pe(C) : Te(C), C;
      }
    }
    function Oe(r, o, i) {
      return Br(r, o, i, !0);
    }
    function je(r, o, i) {
      return Br(r, o, i, !1);
    }
    var Ae = je, Me = Oe;
    sr.Fragment = a, sr.jsx = Ae, sr.jsxs = Me;
  }()), sr;
}
process.env.NODE_ENV === "production" ? Pr.exports = Ie() : Pr.exports = ze();
var Y = Pr.exports;
function te(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number")
    a += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = te(e[t])) && (a && (a += " "), a += n);
    else
      for (t in e)
        e[t] && (a && (a += " "), a += t);
  return a;
}
function ne() {
  for (var e, t, n = 0, a = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = te(e)) && (a && (a += " "), a += t);
  return a;
}
function Ge() {
  for (var e = 0, t, n, a = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = oe(t)) && (a && (a += " "), a += n);
  return a;
}
function oe(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", a = 0; a < e.length; a++)
    e[a] && (t = oe(e[a])) && (n && (n += " "), n += t);
  return n;
}
var jr = "-";
function Ne(e) {
  var t = We(e), n = e.conflictingClassGroups, a = e.conflictingClassGroupModifiers, u = a === void 0 ? {} : a;
  function c(s) {
    var d = s.split(jr);
    return d[0] === "" && d.length !== 1 && d.shift(), ae(d, t) || Fe(s);
  }
  function l(s, d) {
    var p = n[s] || [];
    return d && u[s] ? [].concat(p, u[s]) : p;
  }
  return {
    getClassGroupId: c,
    getConflictingClassGroupIds: l
  };
}
function ae(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], a = t.nextPart.get(n), u = a ? ae(e.slice(1), a) : void 0;
  if (u)
    return u;
  if (t.validators.length !== 0) {
    var c = e.join(jr);
    return (l = t.validators.find(function(s) {
      var d = s.validator;
      return d(c);
    })) == null ? void 0 : l.classGroupId;
  }
}
var Hr = /^\[(.+)\]$/;
function Fe(e) {
  if (Hr.test(e)) {
    var t = Hr.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function We(e) {
  var t = e.theme, n = e.prefix, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, u = Ve(Object.entries(e.classGroups), n);
  return u.forEach(function(c) {
    var l = c[0], s = c[1];
    Or(s, a, l, t);
  }), a;
}
function Or(e, t, n, a) {
  e.forEach(function(u) {
    if (typeof u == "string") {
      var c = u === "" ? t : Xr(t, u);
      c.classGroupId = n;
      return;
    }
    if (typeof u == "function") {
      if ($e(u)) {
        Or(u(a), t, n, a);
        return;
      }
      t.validators.push({
        validator: u,
        classGroupId: n
      });
      return;
    }
    Object.entries(u).forEach(function(l) {
      var s = l[0], d = l[1];
      Or(d, Xr(t, s), n, a);
    });
  });
}
function Xr(e, t) {
  var n = e;
  return t.split(jr).forEach(function(a) {
    n.nextPart.has(a) || n.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(a);
  }), n;
}
function $e(e) {
  return e.isThemeGetter;
}
function Ve(e, t) {
  return t ? e.map(function(n) {
    var a = n[0], u = n[1], c = u.map(function(l) {
      return typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(function(s) {
        var d = s[0], p = s[1];
        return [t + d, p];
      })) : l;
    });
    return [a, c];
  }) : e;
}
function De(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  function u(c, l) {
    n.set(c, l), t++, t > e && (t = 0, a = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(l) {
      var s = n.get(l);
      if (s !== void 0)
        return s;
      if ((s = a.get(l)) !== void 0)
        return u(l, s), s;
    },
    set: function(l, s) {
      n.has(l) ? n.set(l, s) : u(l, s);
    }
  };
}
var ie = "!";
function Le(e) {
  var t = e.separator || ":", n = t.length === 1, a = t[0], u = t.length;
  return function(l) {
    for (var s = [], d = 0, p = 0, g, b = 0; b < l.length; b++) {
      var h = l[b];
      if (d === 0) {
        if (h === a && (n || l.slice(b, b + u) === t)) {
          s.push(l.slice(p, b)), p = b + u;
          continue;
        }
        if (h === "/") {
          g = b;
          continue;
        }
      }
      h === "[" ? d++ : h === "]" && d--;
    }
    var S = s.length === 0 ? l : l.substring(p), P = S.startsWith(ie), _ = P ? S.substring(1) : S, T = g && g > p ? g - p : void 0;
    return {
      modifiers: s,
      hasImportantModifier: P,
      baseClassName: _,
      maybePostfixModifierPosition: T
    };
  };
}
function Ye(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(a) {
    var u = a[0] === "[";
    u ? (t.push.apply(t, n.sort().concat([a])), n = []) : n.push(a);
  }), t.push.apply(t, n.sort()), t;
}
function Ue(e) {
  return {
    cache: De(e.cacheSize),
    splitModifiers: Le(e),
    ...Ne(e)
  };
}
var Be = /\s+/;
function qe(e, t) {
  var n = t.splitModifiers, a = t.getClassGroupId, u = t.getConflictingClassGroupIds, c = /* @__PURE__ */ new Set();
  return e.trim().split(Be).map(function(l) {
    var s = n(l), d = s.modifiers, p = s.hasImportantModifier, g = s.baseClassName, b = s.maybePostfixModifierPosition, h = a(b ? g.substring(0, b) : g), S = !!b;
    if (!h) {
      if (!b)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      if (h = a(g), !h)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      S = !1;
    }
    var P = Ye(d).join(":"), _ = p ? P + ie : P;
    return {
      isTailwindClass: !0,
      modifierId: _,
      classGroupId: h,
      originalClassName: l,
      hasPostfixModifier: S
    };
  }).reverse().filter(function(l) {
    if (!l.isTailwindClass)
      return !0;
    var s = l.modifierId, d = l.classGroupId, p = l.hasPostfixModifier, g = s + d;
    return c.has(g) ? !1 : (c.add(g), u(d, p).forEach(function(b) {
      return c.add(s + b);
    }), !0);
  }).reverse().map(function(l) {
    return l.originalClassName;
  }).join(" ");
}
function Je() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var a, u, c, l = s;
  function s(p) {
    var g = t[0], b = t.slice(1), h = b.reduce(function(S, P) {
      return P(S);
    }, g());
    return a = Ue(h), u = a.cache.get, c = a.cache.set, l = d, d(p);
  }
  function d(p) {
    var g = u(p);
    if (g)
      return g;
    var b = qe(p, a);
    return c(p, b), b;
  }
  return function() {
    return l(Ge.apply(null, arguments));
  };
}
function k(e) {
  var t = function(a) {
    return a[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var se = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ke = /^\d+\/\d+$/, He = /* @__PURE__ */ new Set(["px", "full", "screen"]), Xe = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ze = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/, Qe = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function G(e) {
  return B(e) || He.has(e) || Ke.test(e) || L(e);
}
function L(e) {
  return q(e, "length", at);
}
function rt(e) {
  return q(e, "size", le);
}
function et(e) {
  return q(e, "position", le);
}
function tt(e) {
  return q(e, "url", it);
}
function xr(e) {
  return q(e, "number", B);
}
function B(e) {
  return !Number.isNaN(Number(e));
}
function nt(e) {
  return e.endsWith("%") && B(e.slice(0, -1));
}
function lr(e) {
  return Zr(e) || q(e, "number", Zr);
}
function E(e) {
  return se.test(e);
}
function cr() {
  return !0;
}
function D(e) {
  return Xe.test(e);
}
function ot(e) {
  return q(e, "", st);
}
function q(e, t, n) {
  var a = se.exec(e);
  return a ? a[1] ? a[1] === t : n(a[2]) : !1;
}
function at(e) {
  return Ze.test(e);
}
function le() {
  return !1;
}
function it(e) {
  return e.startsWith("url(");
}
function Zr(e) {
  return Number.isInteger(Number(e));
}
function st(e) {
  return Qe.test(e);
}
function lt() {
  var e = k("colors"), t = k("spacing"), n = k("blur"), a = k("brightness"), u = k("borderColor"), c = k("borderRadius"), l = k("borderSpacing"), s = k("borderWidth"), d = k("contrast"), p = k("grayscale"), g = k("hueRotate"), b = k("invert"), h = k("gap"), S = k("gradientColorStops"), P = k("gradientColorStopPositions"), _ = k("inset"), T = k("margin"), O = k("opacity"), w = k("padding"), ur = k("saturate"), Q = k("scale"), dr = k("sepia"), fr = k("skew"), pr = k("space"), gr = k("translate"), J = function() {
    return ["auto", "contain", "none"];
  }, rr = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, er = function() {
    return ["auto", t];
  }, tr = function() {
    return ["", G];
  }, M = function() {
    return ["auto", B, E];
  }, N = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, F = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, nr = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, K = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, $ = function() {
    return ["", "0", E];
  }, or = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, V = function() {
    return [B, xr];
  }, U = function() {
    return [B, E];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [cr],
      spacing: [G],
      blur: ["none", "", D, L],
      brightness: V(),
      borderColor: [e],
      borderRadius: ["none", "", "full", D, L],
      borderSpacing: [t],
      borderWidth: tr(),
      contrast: V(),
      grayscale: $(),
      hueRotate: U(),
      invert: $(),
      gap: [t],
      gradientColorStops: [e],
      gradientColorStopPositions: [nt, L],
      inset: er(),
      margin: er(),
      opacity: V(),
      padding: [t],
      saturate: V(),
      scale: V(),
      sepia: $(),
      skew: U(),
      space: [t],
      translate: [t]
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", E]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [D]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": or()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": or()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(N(), [E])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: rr()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": rr()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": rr()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: J()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": J()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": J()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [_]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [_]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [_]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [_]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [_]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [_]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [_]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [_]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [_]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", lr]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: er()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", E]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: $()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: $()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", lr]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [cr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: [lr]
        }, E]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": M()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": M()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [cr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [lr]
        }, E]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": M()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": M()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", E]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", E]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(K())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(K(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(K(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [T]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [T]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [T]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [T]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [T]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [T]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [T]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [T]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [T]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [pr]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [pr]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", G]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [D]
        }, D, L]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", G]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", D, L]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", xr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [cr]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", L]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", B, xr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", G]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", E]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", E]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [O]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [O]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(F(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", G]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", G]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: [t]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", L]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", E]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [O]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(N(), [et])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", rt]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, tt]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [P]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [P]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [P]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [S]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [S]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [S]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [c]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [c]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [c]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [c]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [c]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [c]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [c]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [c]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [c]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [c]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [c]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [c]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [c]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [c]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [c]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [O]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(F(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [O]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: F()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [u]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [u]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [u]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [u]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [u]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [u]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [u]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [u]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(F())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [G]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [G]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: tr()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [O]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [G]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", D, ot]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [cr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [O]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": nr()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": nr()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", D, E]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [p]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [g]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [b]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ur]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [dr]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [p]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [g]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [b]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [O]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ur]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [dr]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", E]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: U()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", E]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: U()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", E]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [Q]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [Q]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [Q]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [lr, E]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [gr]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [gr]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [fr]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [fr]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", E]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", E]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": [t]
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": [t]
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": [t]
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": [t]
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": [t]
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": [t]
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": [t]
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": [t]
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": [t]
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": [t]
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": [t]
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": [t]
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": [t]
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": [t]
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": [t]
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": [t]
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": [t]
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": [t]
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", E]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [G, xr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var ct = /* @__PURE__ */ Je(lt);
function Ar(...e) {
  return ct(ne(e));
}
const Qr = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, re = ne, I = (e, t) => (n) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null)
    return re(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: u, defaultVariants: c } = t, l = Object.keys(u).map((p) => {
    const g = n == null ? void 0 : n[p], b = c == null ? void 0 : c[p];
    if (g === null)
      return null;
    const h = Qr(g) || Qr(b);
    return u[p][h];
  }), s = n && Object.entries(n).reduce((p, g) => {
    let [b, h] = g;
    return h === void 0 || (p[b] = h), p;
  }, {}), d = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((p, g) => {
    let { class: b, className: h, ...S } = g;
    return Object.entries(S).every((P) => {
      let [_, T] = P;
      return Array.isArray(T) ? T.includes({
        ...c,
        ...s
      }[_]) : {
        ...c,
        ...s
      }[_] === T;
    }) ? [
      ...p,
      b,
      h
    ] : p;
  }, []);
  return re(e, l, d, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, ut = (e) => {
  const t = {
    dark: {
      primary: "bg-dark-badge-primary-bg text-dark-primary",
      secondary: "bg-dark-badge-secondary-bg text-dark-secondary",
      danger: "bg-dark-badge-danger-bg text-dark-danger",
      success: "bg-dark-badge-success-bg text-dark-success",
      warning: "bg-dark-badge-warning-bg text-dark-warning",
      info: "bg-dark-badge-info-bg text-dark-label-tertiary"
    },
    light: {
      primary: "bg-light-badge-primary-bg text-light-primary",
      secondary: "bg-light-badge-secondary-bg text-light-secondary",
      danger: "bg-light-badge-danger-bg text-light-danger",
      success: "bg-light-badge-success-bg text-light-success",
      warning: "bg-light-badge-warning-bg text-light-warning",
      info: "bg-light-badge-info-bg text-light-label-tertiary"
    }
  }, { theme: n = "light" } = e;
  return I("rounded px-[10px] py-[5px] text-[12px]", {
    variants: {
      color: {
        primary: t[n].primary,
        secondary: t[n].secondary,
        danger: t[n].danger,
        success: t[n].success,
        warning: t[n].warning,
        info: t[n].info
      }
    },
    defaultVariants: {
      color: "primary"
    }
  })(e);
}, Ct = ({
  theme: e = "light",
  color: t = "primary",
  decoration: n = !0,
  label: a
}) => /* @__PURE__ */ Y.jsxs("span", { className: `${Ar(ut({ theme: e, color: t }))}`, children: [
  n && "• ",
  a
] }), dt = I("text-white", {
  variants: {
    theme: {
      light: ["bg-light-primary", "hover:bg-light-hover-primary"],
      dark: ["bg-dark-primary", "hover:bg-dark-hover-primary"]
    }
  }
}), ft = I("text-white", {
  variants: {
    theme: {
      light: ["bg-light-primary-40", "hover:bg-light-primary-40"],
      dark: ["bg-dark-primary-40", "hover:bg-dark-primary-40"]
    }
  }
}), pt = I("", {
  variants: {
    theme: {
      light: [
        "bg-light-primary-14",
        "hover:bg-light-hover-primary-10",
        "text-light-primary"
      ],
      dark: [
        "bg-dark-primary-14",
        "hover:bg-dark-hover-primary-10",
        "text-dark-primary"
      ]
    }
  }
}), gt = I("", {
  variants: {
    theme: {
      light: [
        "bg-light-primary-14",
        "hover:bg-light-primary-14",
        "text-light-primary-60"
      ],
      dark: [
        "bg-dark-primary-14",
        "hover:bg-dark-primary-14",
        "text-dark-primary-60"
      ]
    }
  }
}), bt = I("", {
  variants: {
    theme: {
      light: [
        "bg-light-fill-primary",
        "hover:bg-light-hover-fill-primary",
        "text-light-label-70"
      ],
      dark: [
        "bg-dark-fill-primary",
        "hover:bg-dark-hover-fill-primary",
        "text-dark-label-70"
      ]
    }
  }
}), vt = I("", {
  variants: {
    theme: {
      light: [
        "bg-light-fill-primary",
        "hover:bg-light-fill-primary",
        "text-light-label-40"
      ],
      dark: [
        "bg-dark-fill-primary",
        "hover:bg-dark-fill-primary",
        "text-dark-label-70"
      ]
    }
  }
}), mt = I("", {
  variants: {
    theme: {
      light: ["text-light-label", "hover:text-light-primary"],
      dark: ["text-dark-label", "hover:text-dark-primary"]
    }
  }
}), ht = I("", {
  variants: {
    theme: {
      light: ["text-light-label-40", "hover:text-light-label-40"],
      dark: ["text-dark-label-40", "hover:text-dark-label-40"]
    }
  }
}), yt = I("", {
  variants: {
    theme: {
      light: [
        "text-light-primary",
        "hover:text-light-hover-primary",
        "border",
        "border-solid",
        "border-light-primary",
        "hover:bg-light-primary-10"
      ],
      dark: [
        "text-dark-primary",
        "hover:text-dark-hover-primary",
        "border",
        "border-solid",
        "border-dark-primary",
        "hover:bg-dark-primary-10"
      ]
    }
  }
}), xt = I("text-white", {
  variants: {
    theme: {
      light: [
        "text-light-primary-60",
        "hover:text-light-primary-60",
        "border",
        "border-solid",
        "border-light-primary-60",
        "hover:bg-transparent"
      ],
      dark: [
        "text-dark-primary-60",
        "hover:text-dark-primary-60",
        "border",
        "border-solid",
        "border-dark-primary-60",
        "hover:bg-transparent"
      ]
    }
  }
}), Z = {
  primary: {
    variant: dt,
    disabled: ft
  },
  secondary: {
    variant: pt,
    disabled: gt
  },
  tertiary: {
    variant: bt,
    disabled: vt
  },
  text: {
    variant: mt,
    disabled: ht
  },
  ghost: {
    variant: yt,
    disabled: xt
  }
}, wt = (e) => {
  const { theme: t, variant: n } = e;
  return I(
    "rounded-[5px] box-border inline-flex items-center justify-center",
    {
      variants: {
        variant: {
          primary: Z[n].variant({ theme: t }),
          secondary: Z[n].variant({ theme: t }),
          tertiary: Z[n].variant({ theme: t }),
          text: Z[n].variant({ theme: t }),
          ghost: Z[n].variant({ theme: t })
        },
        size: {
          small: "px-[12px]  text-[14px] leading-[24px] h-[30px] min-w-[30px]",
          medium: "px-[16px] text-[14px] leading-[24px] h-[40px] min-w-[40px]",
          large: "px-[24px] text-[16px] leading-[28px] h-[48px] min-w-[48px]",
          max: "px-[24px] text-[18px] leading-[30px] h-[56px] min-w-[56px]"
        },
        shape: {
          normal: "",
          circle: "rounded-[50%] px-[0px] py-[0px]"
        },
        disabled: {
          true: Z[n].disabled({ theme: t })
        }
      }
    }
  )(e);
}, St = ({
  size: e = "large",
  disabled: t = !1,
  variant: n = "primary",
  theme: a = "light",
  label: u,
  startIcon: c,
  endIcon: l,
  icon: s,
  onClick: d,
  shape: p = "normal",
  className: g = "",
  ...b
}) => {
  const h = () => {
    d && d();
  };
  return /* @__PURE__ */ Y.jsxs(
    "button",
    {
      type: "button",
      onClick: h,
      className: `${Ar(
        wt({ variant: n, size: e, theme: a, shape: p, disabled: t })
      )} ${g}`,
      disabled: t,
      ...b,
      children: [
        c && /* @__PURE__ */ Y.jsx("span", { className: "mr-[9.5px]", children: c }),
        u,
        l && /* @__PURE__ */ Y.jsx("span", { className: "ml-[9.5px]", children: l }),
        s
      ]
    }
  );
};
const _t = ({ label: e, content: t }) => /* @__PURE__ */ Y.jsxs("div", { className: "popover-container relative max-w-fit", children: [
  /* @__PURE__ */ Y.jsx("label", { children: e }),
  /* @__PURE__ */ Y.jsx("div", { className: "popover hidden absolute top-6 left-0 z-10 shadow", children: t })
] }), kt = (e) => I("text-black dark:text-white", {
  variants: {
    variant: {
      h1: "text-9xl",
      h2: "text-8xl",
      h3: "text-7xl",
      h4: "text-6xl",
      h5: "text-5xl",
      h6: "text-4xl",
      subtitle1: "text-3xl",
      subtitle2: "text-2xl",
      body1: "text-xl",
      body2: "text-lg",
      body3: "text-base",
      body4: "text-sm"
    },
    weight: {
      bold: "font-bold",
      medium: "font-medium",
      regular: "font-normal"
    }
  },
  defaultVariants: {
    variant: "body3",
    weight: "regular"
  }
})(e), Rt = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "p",
  subtitle2: "p",
  body1: "p",
  body2: "p",
  body3: "p",
  body4: "p"
}, Tt = ({
  variant: e = "body3",
  weight: t = "regular",
  className: n = "",
  children: a,
  ...u
}) => {
  const c = Rt[e];
  return /* @__PURE__ */ Y.jsx(
    c,
    {
      className: `${Ar(kt({ variant: e, weight: t }))} ${n}`,
      ...u,
      children: a
    }
  );
};
export {
  Ct as Badge,
  St as Button,
  _t as Popover,
  Tt as Typography
};
