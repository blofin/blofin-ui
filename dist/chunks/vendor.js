import Hr from "react";
var Sr = { exports: {} }, nr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr;
function Pe() {
  if (Yr)
    return nr;
  Yr = 1;
  var e = Hr, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(s, f, p) {
    var v, b = {}, y = null, S = null;
    p !== void 0 && (y = "" + p), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (S = f.ref);
    for (v in f)
      a.call(f, v) && !u.hasOwnProperty(v) && (b[v] = f[v]);
    if (s && s.defaultProps)
      for (v in f = s.defaultProps, f)
        b[v] === void 0 && (b[v] = f[v]);
    return { $$typeof: t, type: s, key: y, ref: S, props: b, _owner: c.current };
  }
  return nr.Fragment = o, nr.jsx = l, nr.jsxs = l, nr;
}
var or = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur;
function Oe() {
  return Ur || (Ur = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Hr, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), P = Symbol.iterator, k = "@@iterator";
    function T(r) {
      if (r === null || typeof r != "object")
        return null;
      var n = P && r[P] || r[k];
      return typeof n == "function" ? n : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(r) {
      {
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), d = 1; d < n; d++)
          i[d - 1] = arguments[d];
        sr("error", r, i);
      }
    }
    function sr(r, n, i) {
      {
        var d = O.ReactDebugCurrentFrame, h = d.getStackAddendum();
        h !== "" && (n += "%s", i = i.concat([h]));
        var w = i.map(function(m) {
          return String(m);
        });
        w.unshift("Warning: " + n), Function.prototype.apply.call(console[r], console, w);
      }
    }
    var X = !1, lr = !1, ur = !1, cr = !1, dr = !1, B;
    B = Symbol.for("react.module.reference");
    function H(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === a || r === u || dr || r === c || r === p || r === v || cr || r === S || X || lr || ur || typeof r == "object" && r !== null && (r.$$typeof === y || r.$$typeof === b || r.$$typeof === l || r.$$typeof === s || r.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === B || r.getModuleId !== void 0));
    }
    function Z(r, n, i) {
      var d = r.displayName;
      if (d)
        return d;
      var h = n.displayName || n.name || "";
      return h !== "" ? i + "(" + h + ")" : i;
    }
    function Q(r) {
      return r.displayName || "Context";
    }
    function I(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case a:
          return "Fragment";
        case o:
          return "Portal";
        case u:
          return "Profiler";
        case c:
          return "StrictMode";
        case p:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case s:
            var n = r;
            return Q(n) + ".Consumer";
          case l:
            var i = r;
            return Q(i._context) + ".Provider";
          case f:
            return Z(r, r.render, "ForwardRef");
          case b:
            var d = r.displayName || null;
            return d !== null ? d : I(r.type) || "Memo";
          case y: {
            var h = r, w = h._payload, m = h._init;
            try {
              return I(m(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, F = 0, rr, q, N, er, $, D, A;
    function Pr() {
    }
    Pr.__reactDisabledLog = !0;
    function oe() {
      {
        if (F === 0) {
          rr = console.log, q = console.info, N = console.warn, er = console.error, $ = console.group, D = console.groupCollapsed, A = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Pr,
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
    function ae() {
      {
        if (F--, F === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, r, {
              value: rr
            }),
            info: G({}, r, {
              value: q
            }),
            warn: G({}, r, {
              value: N
            }),
            error: G({}, r, {
              value: er
            }),
            group: G({}, r, {
              value: $
            }),
            groupCollapsed: G({}, r, {
              value: D
            }),
            groupEnd: G({}, r, {
              value: A
            })
          });
        }
        F < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var hr = O.ReactCurrentDispatcher, yr;
    function fr(r, n, i) {
      {
        if (yr === void 0)
          try {
            throw Error();
          } catch (h) {
            var d = h.stack.trim().match(/\n( *(at )?)/);
            yr = d && d[1] || "";
          }
        return `
` + yr + r;
      }
    }
    var wr = !1, pr;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      pr = new ie();
    }
    function Or(r, n) {
      if (!r || wr)
        return "";
      {
        var i = pr.get(r);
        if (i !== void 0)
          return i;
      }
      var d;
      wr = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = hr.current, hr.current = null, oe();
      try {
        if (n) {
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
              d = W;
            }
            Reflect.construct(r, [], m);
          } else {
            try {
              m.call();
            } catch (W) {
              d = W;
            }
            r.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            d = W;
          }
          r();
        }
      } catch (W) {
        if (W && d && typeof W.stack == "string") {
          for (var g = W.stack.split(`
`), j = d.stack.split(`
`), E = g.length - 1, _ = j.length - 1; E >= 1 && _ >= 0 && g[E] !== j[_]; )
            _--;
          for (; E >= 1 && _ >= 0; E--, _--)
            if (g[E] !== j[_]) {
              if (E !== 1 || _ !== 1)
                do
                  if (E--, _--, _ < 0 || g[E] !== j[_]) {
                    var M = `
` + g[E].replace(" at new ", " at ");
                    return r.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", r.displayName)), typeof r == "function" && pr.set(r, M), M;
                  }
                while (E >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        wr = !1, hr.current = w, ae(), Error.prepareStackTrace = h;
      }
      var K = r ? r.displayName || r.name : "", Dr = K ? fr(K) : "";
      return typeof r == "function" && pr.set(r, Dr), Dr;
    }
    function se(r, n, i) {
      return Or(r, !1);
    }
    function le(r) {
      var n = r.prototype;
      return !!(n && n.isReactComponent);
    }
    function vr(r, n, i) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Or(r, le(r));
      if (typeof r == "string")
        return fr(r);
      switch (r) {
        case p:
          return fr("Suspense");
        case v:
          return fr("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case f:
            return se(r.render);
          case b:
            return vr(r.type, n, i);
          case y: {
            var d = r, h = d._payload, w = d._init;
            try {
              return vr(w(h), n, i);
            } catch {
            }
          }
        }
      return "";
    }
    var br = Object.prototype.hasOwnProperty, Ar = {}, jr = O.ReactDebugCurrentFrame;
    function gr(r) {
      if (r) {
        var n = r._owner, i = vr(r.type, r._source, n ? n.type : null);
        jr.setExtraStackFrame(i);
      } else
        jr.setExtraStackFrame(null);
    }
    function ue(r, n, i, d, h) {
      {
        var w = Function.call.bind(br);
        for (var m in r)
          if (w(r, m)) {
            var g = void 0;
            try {
              if (typeof r[m] != "function") {
                var j = Error((d || "React class") + ": " + i + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              g = r[m](n, m, d, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              g = E;
            }
            g && !(g instanceof Error) && (gr(h), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", i, m, typeof g), gr(null)), g instanceof Error && !(g.message in Ar) && (Ar[g.message] = !0, gr(h), x("Failed %s type: %s", i, g.message), gr(null));
          }
      }
    }
    var ce = Array.isArray;
    function xr(r) {
      return ce(r);
    }
    function de(r) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return i;
      }
    }
    function fe(r) {
      try {
        return Ir(r), !1;
      } catch {
        return !0;
      }
    }
    function Ir(r) {
      return "" + r;
    }
    function Mr(r) {
      if (fe(r))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", de(r)), Ir(r);
    }
    var tr = O.ReactCurrentOwner, pe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, zr, Gr, Rr;
    Rr = {};
    function ve(r) {
      if (br.call(r, "ref")) {
        var n = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function be(r) {
      if (br.call(r, "key")) {
        var n = Object.getOwnPropertyDescriptor(r, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function ge(r, n) {
      if (typeof r.ref == "string" && tr.current && n && tr.current.stateNode !== n) {
        var i = I(tr.current.type);
        Rr[i] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(tr.current.type), r.ref), Rr[i] = !0);
      }
    }
    function me(r, n) {
      {
        var i = function() {
          zr || (zr = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function he(r, n) {
      {
        var i = function() {
          Gr || (Gr = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var ye = function(r, n, i, d, h, w, m) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: n,
        ref: i,
        props: m,
        // Record the component responsible for creating this element.
        _owner: w
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function we(r, n, i, d, h) {
      {
        var w, m = {}, g = null, j = null;
        i !== void 0 && (Mr(i), g = "" + i), be(n) && (Mr(n.key), g = "" + n.key), ve(n) && (j = n.ref, ge(n, h));
        for (w in n)
          br.call(n, w) && !pe.hasOwnProperty(w) && (m[w] = n[w]);
        if (r && r.defaultProps) {
          var E = r.defaultProps;
          for (w in E)
            m[w] === void 0 && (m[w] = E[w]);
        }
        if (g || j) {
          var _ = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          g && me(m, _), j && he(m, _);
        }
        return ye(r, g, j, h, d, tr.current, m);
      }
    }
    var Er = O.ReactCurrentOwner, Fr = O.ReactDebugCurrentFrame;
    function J(r) {
      if (r) {
        var n = r._owner, i = vr(r.type, r._source, n ? n.type : null);
        Fr.setExtraStackFrame(i);
      } else
        Fr.setExtraStackFrame(null);
    }
    var Cr;
    Cr = !1;
    function _r(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function Wr() {
      {
        if (Er.current) {
          var r = I(Er.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function xe(r) {
      {
        if (r !== void 0) {
          var n = r.fileName.replace(/^.*[\\\/]/, ""), i = r.lineNumber;
          return `

Check your code at ` + n + ":" + i + ".";
        }
        return "";
      }
    }
    var Nr = {};
    function Re(r) {
      {
        var n = Wr();
        if (!n) {
          var i = typeof r == "string" ? r : r.displayName || r.name;
          i && (n = `

Check the top-level render call using <` + i + ">.");
        }
        return n;
      }
    }
    function $r(r, n) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var i = Re(n);
        if (Nr[i])
          return;
        Nr[i] = !0;
        var d = "";
        r && r._owner && r._owner !== Er.current && (d = " It was passed a child from " + I(r._owner.type) + "."), J(r), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, d), J(null);
      }
    }
    function Lr(r, n) {
      {
        if (typeof r != "object")
          return;
        if (xr(r))
          for (var i = 0; i < r.length; i++) {
            var d = r[i];
            _r(d) && $r(d, n);
          }
        else if (_r(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var h = T(r);
          if (typeof h == "function" && h !== r.entries)
            for (var w = h.call(r), m; !(m = w.next()).done; )
              _r(m.value) && $r(m.value, n);
        }
      }
    }
    function Ee(r) {
      {
        var n = r.type;
        if (n == null || typeof n == "string")
          return;
        var i;
        if (typeof n == "function")
          i = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === b))
          i = n.propTypes;
        else
          return;
        if (i) {
          var d = I(n);
          ue(i, r.props, "prop", d, r);
        } else if (n.PropTypes !== void 0 && !Cr) {
          Cr = !0;
          var h = I(n);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ce(r) {
      {
        for (var n = Object.keys(r.props), i = 0; i < n.length; i++) {
          var d = n[i];
          if (d !== "children" && d !== "key") {
            J(r), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), J(null);
            break;
          }
        }
        r.ref !== null && (J(r), x("Invalid attribute `ref` supplied to `React.Fragment`."), J(null));
      }
    }
    function Vr(r, n, i, d, h, w) {
      {
        var m = H(r);
        if (!m) {
          var g = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = xe(h);
          j ? g += j : g += Wr();
          var E;
          r === null ? E = "null" : xr(r) ? E = "array" : r !== void 0 && r.$$typeof === t ? (E = "<" + (I(r.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : E = typeof r, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, g);
        }
        var _ = we(r, n, i, h, w);
        if (_ == null)
          return _;
        if (m) {
          var M = n.children;
          if (M !== void 0)
            if (d)
              if (xr(M)) {
                for (var K = 0; K < M.length; K++)
                  Lr(M[K], r);
                Object.freeze && Object.freeze(M);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Lr(M, r);
        }
        return r === a ? Ce(_) : Ee(_), _;
      }
    }
    function _e(r, n, i) {
      return Vr(r, n, i, !0);
    }
    function Se(r, n, i) {
      return Vr(r, n, i, !1);
    }
    var ke = Se, Te = _e;
    or.Fragment = a, or.jsx = ke, or.jsxs = Te;
  }()), or;
}
process.env.NODE_ENV === "production" ? Sr.exports = Pe() : Sr.exports = Oe();
var it = Sr.exports;
function Zr(e) {
  var t, o, a = "";
  if (typeof e == "string" || typeof e == "number")
    a += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (o = Zr(e[t])) && (a && (a += " "), a += o);
    else
      for (t in e)
        e[t] && (a && (a += " "), a += t);
  return a;
}
function Ae() {
  for (var e, t, o = 0, a = ""; o < arguments.length; )
    (e = arguments[o++]) && (t = Zr(e)) && (a && (a += " "), a += t);
  return a;
}
function je() {
  for (var e = 0, t, o, a = ""; e < arguments.length; )
    (t = arguments[e++]) && (o = Qr(t)) && (a && (a += " "), a += o);
  return a;
}
function Qr(e) {
  if (typeof e == "string")
    return e;
  for (var t, o = "", a = 0; a < e.length; a++)
    e[a] && (t = Qr(e[a])) && (o && (o += " "), o += t);
  return o;
}
var Tr = "-";
function Ie(e) {
  var t = ze(e), o = e.conflictingClassGroups, a = e.conflictingClassGroupModifiers, c = a === void 0 ? {} : a;
  function u(s) {
    var f = s.split(Tr);
    return f[0] === "" && f.length !== 1 && f.shift(), re(f, t) || Me(s);
  }
  function l(s, f) {
    var p = o[s] || [];
    return f && c[s] ? [].concat(p, c[s]) : p;
  }
  return {
    getClassGroupId: u,
    getConflictingClassGroupIds: l
  };
}
function re(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  var o = e[0], a = t.nextPart.get(o), c = a ? re(e.slice(1), a) : void 0;
  if (c)
    return c;
  if (t.validators.length !== 0) {
    var u = e.join(Tr);
    return (l = t.validators.find(function(s) {
      var f = s.validator;
      return f(u);
    })) == null ? void 0 : l.classGroupId;
  }
}
var Br = /^\[(.+)\]$/;
function Me(e) {
  if (Br.test(e)) {
    var t = Br.exec(e)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}
function ze(e) {
  var t = e.theme, o = e.prefix, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, c = Fe(Object.entries(e.classGroups), o);
  return c.forEach(function(u) {
    var l = u[0], s = u[1];
    kr(s, a, l, t);
  }), a;
}
function kr(e, t, o, a) {
  e.forEach(function(c) {
    if (typeof c == "string") {
      var u = c === "" ? t : qr(t, c);
      u.classGroupId = o;
      return;
    }
    if (typeof c == "function") {
      if (Ge(c)) {
        kr(c(a), t, o, a);
        return;
      }
      t.validators.push({
        validator: c,
        classGroupId: o
      });
      return;
    }
    Object.entries(c).forEach(function(l) {
      var s = l[0], f = l[1];
      kr(f, qr(t, s), o, a);
    });
  });
}
function qr(e, t) {
  var o = e;
  return t.split(Tr).forEach(function(a) {
    o.nextPart.has(a) || o.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(a);
  }), o;
}
function Ge(e) {
  return e.isThemeGetter;
}
function Fe(e, t) {
  return t ? e.map(function(o) {
    var a = o[0], c = o[1], u = c.map(function(l) {
      return typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(function(s) {
        var f = s[0], p = s[1];
        return [t + f, p];
      })) : l;
    });
    return [a, u];
  }) : e;
}
function We(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  function c(u, l) {
    o.set(u, l), t++, t > e && (t = 0, a = o, o = /* @__PURE__ */ new Map());
  }
  return {
    get: function(l) {
      var s = o.get(l);
      if (s !== void 0)
        return s;
      if ((s = a.get(l)) !== void 0)
        return c(l, s), s;
    },
    set: function(l, s) {
      o.has(l) ? o.set(l, s) : c(l, s);
    }
  };
}
var ee = "!";
function Ne(e) {
  var t = e.separator || ":", o = t.length === 1, a = t[0], c = t.length;
  return function(l) {
    for (var s = [], f = 0, p = 0, v, b = 0; b < l.length; b++) {
      var y = l[b];
      if (f === 0) {
        if (y === a && (o || l.slice(b, b + c) === t)) {
          s.push(l.slice(p, b)), p = b + c;
          continue;
        }
        if (y === "/") {
          v = b;
          continue;
        }
      }
      y === "[" ? f++ : y === "]" && f--;
    }
    var S = s.length === 0 ? l : l.substring(p), P = S.startsWith(ee), k = P ? S.substring(1) : S, T = v && v > p ? v - p : void 0;
    return {
      modifiers: s,
      hasImportantModifier: P,
      baseClassName: k,
      maybePostfixModifierPosition: T
    };
  };
}
function $e(e) {
  if (e.length <= 1)
    return e;
  var t = [], o = [];
  return e.forEach(function(a) {
    var c = a[0] === "[";
    c ? (t.push.apply(t, o.sort().concat([a])), o = []) : o.push(a);
  }), t.push.apply(t, o.sort()), t;
}
function Le(e) {
  return {
    cache: We(e.cacheSize),
    splitModifiers: Ne(e),
    ...Ie(e)
  };
}
var Ve = /\s+/;
function De(e, t) {
  var o = t.splitModifiers, a = t.getClassGroupId, c = t.getConflictingClassGroupIds, u = /* @__PURE__ */ new Set();
  return e.trim().split(Ve).map(function(l) {
    var s = o(l), f = s.modifiers, p = s.hasImportantModifier, v = s.baseClassName, b = s.maybePostfixModifierPosition, y = a(b ? v.substring(0, b) : v), S = !!b;
    if (!y) {
      if (!b)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      if (y = a(v), !y)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      S = !1;
    }
    var P = $e(f).join(":"), k = p ? P + ee : P;
    return {
      isTailwindClass: !0,
      modifierId: k,
      classGroupId: y,
      originalClassName: l,
      hasPostfixModifier: S
    };
  }).reverse().filter(function(l) {
    if (!l.isTailwindClass)
      return !0;
    var s = l.modifierId, f = l.classGroupId, p = l.hasPostfixModifier, v = s + f;
    return u.has(v) ? !1 : (u.add(v), c(f, p).forEach(function(b) {
      return u.add(s + b);
    }), !0);
  }).reverse().map(function(l) {
    return l.originalClassName;
  }).join(" ");
}
function Ye() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  var a, c, u, l = s;
  function s(p) {
    var v = t[0], b = t.slice(1), y = b.reduce(function(S, P) {
      return P(S);
    }, v());
    return a = Le(y), c = a.cache.get, u = a.cache.set, l = f, f(p);
  }
  function f(p) {
    var v = c(p);
    if (v)
      return v;
    var b = De(p, a);
    return u(p, b), b;
  }
  return function() {
    return l(je.apply(null, arguments));
  };
}
function R(e) {
  var t = function(a) {
    return a[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var te = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ue = /^\d+\/\d+$/, Be = /* @__PURE__ */ new Set(["px", "full", "screen"]), qe = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Je = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/, Ke = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function z(e) {
  return Y(e) || Be.has(e) || Ue.test(e) || V(e);
}
function V(e) {
  return U(e, "length", et);
}
function Xe(e) {
  return U(e, "size", ne);
}
function He(e) {
  return U(e, "position", ne);
}
function Ze(e) {
  return U(e, "url", tt);
}
function mr(e) {
  return U(e, "number", Y);
}
function Y(e) {
  return !Number.isNaN(Number(e));
}
function Qe(e) {
  return e.endsWith("%") && Y(e.slice(0, -1));
}
function ar(e) {
  return Jr(e) || U(e, "number", Jr);
}
function C(e) {
  return te.test(e);
}
function ir() {
  return !0;
}
function L(e) {
  return qe.test(e);
}
function rt(e) {
  return U(e, "", nt);
}
function U(e, t, o) {
  var a = te.exec(e);
  return a ? a[1] ? a[1] === t : o(a[2]) : !1;
}
function et(e) {
  return Je.test(e);
}
function ne() {
  return !1;
}
function tt(e) {
  return e.startsWith("url(");
}
function Jr(e) {
  return Number.isInteger(Number(e));
}
function nt(e) {
  return Ke.test(e);
}
function ot() {
  var e = R("colors"), t = R("spacing"), o = R("blur"), a = R("brightness"), c = R("borderColor"), u = R("borderRadius"), l = R("borderSpacing"), s = R("borderWidth"), f = R("contrast"), p = R("grayscale"), v = R("hueRotate"), b = R("invert"), y = R("gap"), S = R("gradientColorStops"), P = R("gradientColorStopPositions"), k = R("inset"), T = R("margin"), O = R("opacity"), x = R("padding"), sr = R("saturate"), X = R("scale"), lr = R("sepia"), ur = R("skew"), cr = R("space"), dr = R("translate"), B = function() {
    return ["auto", "contain", "none"];
  }, H = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, Z = function() {
    return ["auto", t];
  }, Q = function() {
    return ["", z];
  }, I = function() {
    return ["auto", Y, C];
  }, G = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, F = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, rr = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, q = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, N = function() {
    return ["", "0", C];
  }, er = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, $ = function() {
    return [Y, mr];
  }, D = function() {
    return [Y, C];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [ir],
      spacing: [z],
      blur: ["none", "", L, V],
      brightness: $(),
      borderColor: [e],
      borderRadius: ["none", "", "full", L, V],
      borderSpacing: [t],
      borderWidth: Q(),
      contrast: $(),
      grayscale: N(),
      hueRotate: D(),
      invert: N(),
      gap: [t],
      gradientColorStops: [e],
      gradientColorStopPositions: [Qe, V],
      inset: Z(),
      margin: Z(),
      opacity: $(),
      padding: [t],
      saturate: $(),
      scale: $(),
      sepia: N(),
      skew: D(),
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
        aspect: ["auto", "square", "video", C]
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
        columns: [L]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": er()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": er()
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
        object: [].concat(G(), [C])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: H()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": H()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": H()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: B()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": B()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": B()
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
        inset: [k]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [k]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [k]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [k]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [k]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [k]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [k]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [k]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [k]
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
        z: ["auto", ar]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Z()
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
        flex: ["1", "auto", "initial", "none", C]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: N()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: N()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ar]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ir]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: [ar]
        }, C]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ir]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ar]
        }, C]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
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
        "auto-cols": ["auto", "min", "max", "fr", C]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", C]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [y]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [y]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [y]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(q())
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
        content: ["normal"].concat(q(), ["baseline"])
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
        "place-content": [].concat(q(), ["baseline"])
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
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
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
        "space-x": [cr]
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
        "space-y": [cr]
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
        "min-w": ["min", "max", "fit", z]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [L]
        }, L, V]
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
        "min-h": ["min", "max", "fit", z]
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
        text: ["base", L, V]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", mr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ir]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", V]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Y, mr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", z]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", C]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", C]
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
        decoration: ["auto", "from-font", z]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", z]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V]
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
        content: ["none", C]
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
        bg: [].concat(G(), [He])
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
        bg: ["auto", "cover", "contain", Xe]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ze]
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
        rounded: [u]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [u]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [u]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [u]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [u]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [u]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [u]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [u]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [u]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [u]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [u]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [u]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [u]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [u]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [u]
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
        border: [c]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [c]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [c]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [c]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [c]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [c]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [c]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [c]
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
        "outline-offset": [z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [z]
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
        ring: Q()
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
        "ring-offset": [z]
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
        shadow: ["", "inner", "none", L, rt]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ir]
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
        "mix-blend": rr()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": rr()
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
        blur: [o]
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
        contrast: [f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", L, C]
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
        "hue-rotate": [v]
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
        saturate: [sr]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [lr]
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
        "backdrop-blur": [o]
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
        "backdrop-contrast": [f]
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
        "backdrop-hue-rotate": [v]
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
        "backdrop-saturate": [sr]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [lr]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", C]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: D()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", C]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: D()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", C]
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
        scale: [X]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [X]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [X]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ar, C]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [dr]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [dr]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ur]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ur]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", C]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", C]
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
        "will-change": ["auto", "scroll", "contents", "transform", C]
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
        stroke: [z, mr]
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
var st = /* @__PURE__ */ Ye(ot);
const Kr = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Xr = Ae, lt = (e, t) => (o) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null)
    return Xr(e, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  const { variants: c, defaultVariants: u } = t, l = Object.keys(c).map((p) => {
    const v = o == null ? void 0 : o[p], b = u == null ? void 0 : u[p];
    if (v === null)
      return null;
    const y = Kr(v) || Kr(b);
    return c[p][y];
  }), s = o && Object.entries(o).reduce((p, v) => {
    let [b, y] = v;
    return y === void 0 || (p[b] = y), p;
  }, {}), f = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((p, v) => {
    let { class: b, className: y, ...S } = v;
    return Object.entries(S).every((P) => {
      let [k, T] = P;
      return Array.isArray(T) ? T.includes({
        ...u,
        ...s
      }[k]) : {
        ...u,
        ...s
      }[k] === T;
    }) ? [
      ...p,
      b,
      y
    ] : p;
  }, []);
  return Xr(e, l, f, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
};
export {
  Ae as a,
  lt as c,
  it as j,
  st as t
};
