import Hr from "react";
var _r = { exports: {} }, nr = {};
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
function Oe() {
  if (Yr)
    return nr;
  Yr = 1;
  var e = Hr, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(s, f, p) {
    var g, v = {}, y = null, _ = null;
    p !== void 0 && (y = "" + p), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (_ = f.ref);
    for (g in f)
      a.call(f, g) && !u.hasOwnProperty(g) && (v[g] = f[g]);
    if (s && s.defaultProps)
      for (g in f = s.defaultProps, f)
        v[g] === void 0 && (v[g] = f[g]);
    return { $$typeof: t, type: s, key: y, ref: _, props: v, _owner: c.current };
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
function je() {
  return Ur || (Ur = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Hr, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), P = Symbol.iterator, S = "@@iterator";
    function T(r) {
      if (r === null || typeof r != "object")
        return null;
      var n = P && r[P] || r[S];
      return typeof n == "function" ? n : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(r) {
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
        var x = i.map(function(m) {
          return String(m);
        });
        x.unshift("Warning: " + n), Function.prototype.apply.call(console[r], console, x);
      }
    }
    var X = !1, lr = !1, ur = !1, cr = !1, dr = !1, B;
    B = Symbol.for("react.module.reference");
    function H(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === a || r === u || dr || r === c || r === p || r === g || cr || r === _ || X || lr || ur || typeof r == "object" && r !== null && (r.$$typeof === y || r.$$typeof === v || r.$$typeof === l || r.$$typeof === s || r.$$typeof === f || // This needs to include all possible module reference object
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
      if (typeof r.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
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
        case g:
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
          case v:
            var d = r.displayName || null;
            return d !== null ? d : I(r.type) || "Memo";
          case y: {
            var h = r, x = h._payload, m = h._init;
            try {
              return I(m(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, F = 0, rr, q, N, er, V, D, j;
    function Pr() {
    }
    Pr.__reactDisabledLog = !0;
    function ae() {
      {
        if (F === 0) {
          rr = console.log, q = console.info, N = console.warn, er = console.error, V = console.group, D = console.groupCollapsed, j = console.groupEnd;
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
    function ie() {
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
              value: V
            }),
            groupCollapsed: G({}, r, {
              value: D
            }),
            groupEnd: G({}, r, {
              value: j
            })
          });
        }
        F < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
    var xr = !1, pr;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      pr = new se();
    }
    function Or(r, n) {
      if (!r || xr)
        return "";
      {
        var i = pr.get(r);
        if (i !== void 0)
          return i;
      }
      var d;
      xr = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = hr.current, hr.current = null, ae();
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
          for (var b = W.stack.split(`
`), A = d.stack.split(`
`), E = b.length - 1, k = A.length - 1; E >= 1 && k >= 0 && b[E] !== A[k]; )
            k--;
          for (; E >= 1 && k >= 0; E--, k--)
            if (b[E] !== A[k]) {
              if (E !== 1 || k !== 1)
                do
                  if (E--, k--, k < 0 || b[E] !== A[k]) {
                    var M = `
` + b[E].replace(" at new ", " at ");
                    return r.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", r.displayName)), typeof r == "function" && pr.set(r, M), M;
                  }
                while (E >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        xr = !1, hr.current = x, ie(), Error.prepareStackTrace = h;
      }
      var K = r ? r.displayName || r.name : "", Dr = K ? fr(K) : "";
      return typeof r == "function" && pr.set(r, Dr), Dr;
    }
    function le(r, n, i) {
      return Or(r, !1);
    }
    function ue(r) {
      var n = r.prototype;
      return !!(n && n.isReactComponent);
    }
    function gr(r, n, i) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Or(r, ue(r));
      if (typeof r == "string")
        return fr(r);
      switch (r) {
        case p:
          return fr("Suspense");
        case g:
          return fr("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case f:
            return le(r.render);
          case v:
            return gr(r.type, n, i);
          case y: {
            var d = r, h = d._payload, x = d._init;
            try {
              return gr(x(h), n, i);
            } catch {
            }
          }
        }
      return "";
    }
    var vr = Object.prototype.hasOwnProperty, jr = {}, Ar = O.ReactDebugCurrentFrame;
    function br(r) {
      if (r) {
        var n = r._owner, i = gr(r.type, r._source, n ? n.type : null);
        Ar.setExtraStackFrame(i);
      } else
        Ar.setExtraStackFrame(null);
    }
    function ce(r, n, i, d, h) {
      {
        var x = Function.call.bind(vr);
        for (var m in r)
          if (x(r, m)) {
            var b = void 0;
            try {
              if (typeof r[m] != "function") {
                var A = Error((d || "React class") + ": " + i + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              b = r[m](n, m, d, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              b = E;
            }
            b && !(b instanceof Error) && (br(h), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", i, m, typeof b), br(null)), b instanceof Error && !(b.message in jr) && (jr[b.message] = !0, br(h), w("Failed %s type: %s", i, b.message), br(null));
          }
      }
    }
    var de = Array.isArray;
    function wr(r) {
      return de(r);
    }
    function fe(r) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return i;
      }
    }
    function pe(r) {
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
      if (pe(r))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fe(r)), Ir(r);
    }
    var tr = O.ReactCurrentOwner, ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, zr, Gr, Rr;
    Rr = {};
    function ve(r) {
      if (vr.call(r, "ref")) {
        var n = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function be(r) {
      if (vr.call(r, "key")) {
        var n = Object.getOwnPropertyDescriptor(r, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function me(r, n) {
      if (typeof r.ref == "string" && tr.current && n && tr.current.stateNode !== n) {
        var i = I(tr.current.type);
        Rr[i] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(tr.current.type), r.ref), Rr[i] = !0);
      }
    }
    function he(r, n) {
      {
        var i = function() {
          zr || (zr = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function ye(r, n) {
      {
        var i = function() {
          Gr || (Gr = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var xe = function(r, n, i, d, h, x, m) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: n,
        ref: i,
        props: m,
        // Record the component responsible for creating this element.
        _owner: x
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function we(r, n, i, d, h) {
      {
        var x, m = {}, b = null, A = null;
        i !== void 0 && (Mr(i), b = "" + i), be(n) && (Mr(n.key), b = "" + n.key), ve(n) && (A = n.ref, me(n, h));
        for (x in n)
          vr.call(n, x) && !ge.hasOwnProperty(x) && (m[x] = n[x]);
        if (r && r.defaultProps) {
          var E = r.defaultProps;
          for (x in E)
            m[x] === void 0 && (m[x] = E[x]);
        }
        if (b || A) {
          var k = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          b && he(m, k), A && ye(m, k);
        }
        return xe(r, b, A, h, d, tr.current, m);
      }
    }
    var Er = O.ReactCurrentOwner, Fr = O.ReactDebugCurrentFrame;
    function J(r) {
      if (r) {
        var n = r._owner, i = gr(r.type, r._source, n ? n.type : null);
        Fr.setExtraStackFrame(i);
      } else
        Fr.setExtraStackFrame(null);
    }
    var Cr;
    Cr = !1;
    function kr(r) {
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
    function Re(r) {
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
    function Ee(r) {
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
    function Vr(r, n) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var i = Ee(n);
        if (Nr[i])
          return;
        Nr[i] = !0;
        var d = "";
        r && r._owner && r._owner !== Er.current && (d = " It was passed a child from " + I(r._owner.type) + "."), J(r), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, d), J(null);
      }
    }
    function $r(r, n) {
      {
        if (typeof r != "object")
          return;
        if (wr(r))
          for (var i = 0; i < r.length; i++) {
            var d = r[i];
            kr(d) && Vr(d, n);
          }
        else if (kr(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var h = T(r);
          if (typeof h == "function" && h !== r.entries)
            for (var x = h.call(r), m; !(m = x.next()).done; )
              kr(m.value) && Vr(m.value, n);
        }
      }
    }
    function Ce(r) {
      {
        var n = r.type;
        if (n == null || typeof n == "string")
          return;
        var i;
        if (typeof n == "function")
          i = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === v))
          i = n.propTypes;
        else
          return;
        if (i) {
          var d = I(n);
          ce(i, r.props, "prop", d, r);
        } else if (n.PropTypes !== void 0 && !Cr) {
          Cr = !0;
          var h = I(n);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ke(r) {
      {
        for (var n = Object.keys(r.props), i = 0; i < n.length; i++) {
          var d = n[i];
          if (d !== "children" && d !== "key") {
            J(r), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), J(null);
            break;
          }
        }
        r.ref !== null && (J(r), w("Invalid attribute `ref` supplied to `React.Fragment`."), J(null));
      }
    }
    function Lr(r, n, i, d, h, x) {
      {
        var m = H(r);
        if (!m) {
          var b = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = Re(h);
          A ? b += A : b += Wr();
          var E;
          r === null ? E = "null" : wr(r) ? E = "array" : r !== void 0 && r.$$typeof === t ? (E = "<" + (I(r.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : E = typeof r, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, b);
        }
        var k = we(r, n, i, h, x);
        if (k == null)
          return k;
        if (m) {
          var M = n.children;
          if (M !== void 0)
            if (d)
              if (wr(M)) {
                for (var K = 0; K < M.length; K++)
                  $r(M[K], r);
                Object.freeze && Object.freeze(M);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $r(M, r);
        }
        return r === a ? ke(k) : Ce(k), k;
      }
    }
    function _e(r, n, i) {
      return Lr(r, n, i, !0);
    }
    function Se(r, n, i) {
      return Lr(r, n, i, !1);
    }
    var Te = Se, Pe = _e;
    or.Fragment = a, or.jsx = Te, or.jsxs = Pe;
  }()), or;
}
process.env.NODE_ENV === "production" ? _r.exports = Oe() : _r.exports = je();
var Ae = _r.exports;
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
function Qr() {
  for (var e, t, o = 0, a = ""; o < arguments.length; )
    (e = arguments[o++]) && (t = Zr(e)) && (a && (a += " "), a += t);
  return a;
}
function Ie() {
  for (var e = 0, t, o, a = ""; e < arguments.length; )
    (t = arguments[e++]) && (o = re(t)) && (a && (a += " "), a += o);
  return a;
}
function re(e) {
  if (typeof e == "string")
    return e;
  for (var t, o = "", a = 0; a < e.length; a++)
    e[a] && (t = re(e[a])) && (o && (o += " "), o += t);
  return o;
}
var Tr = "-";
function Me(e) {
  var t = Ge(e), o = e.conflictingClassGroups, a = e.conflictingClassGroupModifiers, c = a === void 0 ? {} : a;
  function u(s) {
    var f = s.split(Tr);
    return f[0] === "" && f.length !== 1 && f.shift(), ee(f, t) || ze(s);
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
function ee(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  var o = e[0], a = t.nextPart.get(o), c = a ? ee(e.slice(1), a) : void 0;
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
function ze(e) {
  if (Br.test(e)) {
    var t = Br.exec(e)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}
function Ge(e) {
  var t = e.theme, o = e.prefix, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, c = We(Object.entries(e.classGroups), o);
  return c.forEach(function(u) {
    var l = u[0], s = u[1];
    Sr(s, a, l, t);
  }), a;
}
function Sr(e, t, o, a) {
  e.forEach(function(c) {
    if (typeof c == "string") {
      var u = c === "" ? t : qr(t, c);
      u.classGroupId = o;
      return;
    }
    if (typeof c == "function") {
      if (Fe(c)) {
        Sr(c(a), t, o, a);
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
      Sr(f, qr(t, s), o, a);
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
function Fe(e) {
  return e.isThemeGetter;
}
function We(e, t) {
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
function Ne(e) {
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
var te = "!";
function Ve(e) {
  var t = e.separator || ":", o = t.length === 1, a = t[0], c = t.length;
  return function(l) {
    for (var s = [], f = 0, p = 0, g, v = 0; v < l.length; v++) {
      var y = l[v];
      if (f === 0) {
        if (y === a && (o || l.slice(v, v + c) === t)) {
          s.push(l.slice(p, v)), p = v + c;
          continue;
        }
        if (y === "/") {
          g = v;
          continue;
        }
      }
      y === "[" ? f++ : y === "]" && f--;
    }
    var _ = s.length === 0 ? l : l.substring(p), P = _.startsWith(te), S = P ? _.substring(1) : _, T = g && g > p ? g - p : void 0;
    return {
      modifiers: s,
      hasImportantModifier: P,
      baseClassName: S,
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
    cache: Ne(e.cacheSize),
    splitModifiers: Ve(e),
    ...Me(e)
  };
}
var De = /\s+/;
function Ye(e, t) {
  var o = t.splitModifiers, a = t.getClassGroupId, c = t.getConflictingClassGroupIds, u = /* @__PURE__ */ new Set();
  return e.trim().split(De).map(function(l) {
    var s = o(l), f = s.modifiers, p = s.hasImportantModifier, g = s.baseClassName, v = s.maybePostfixModifierPosition, y = a(v ? g.substring(0, v) : g), _ = !!v;
    if (!y) {
      if (!v)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      if (y = a(g), !y)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      _ = !1;
    }
    var P = $e(f).join(":"), S = p ? P + te : P;
    return {
      isTailwindClass: !0,
      modifierId: S,
      classGroupId: y,
      originalClassName: l,
      hasPostfixModifier: _
    };
  }).reverse().filter(function(l) {
    if (!l.isTailwindClass)
      return !0;
    var s = l.modifierId, f = l.classGroupId, p = l.hasPostfixModifier, g = s + f;
    return u.has(g) ? !1 : (u.add(g), c(f, p).forEach(function(v) {
      return u.add(s + v);
    }), !0);
  }).reverse().map(function(l) {
    return l.originalClassName;
  }).join(" ");
}
function Ue() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  var a, c, u, l = s;
  function s(p) {
    var g = t[0], v = t.slice(1), y = v.reduce(function(_, P) {
      return P(_);
    }, g());
    return a = Le(y), c = a.cache.get, u = a.cache.set, l = f, f(p);
  }
  function f(p) {
    var g = c(p);
    if (g)
      return g;
    var v = Ye(p, a);
    return u(p, v), v;
  }
  return function() {
    return l(Ie.apply(null, arguments));
  };
}
function R(e) {
  var t = function(a) {
    return a[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var ne = /^\[(?:([a-z-]+):)?(.+)\]$/i, Be = /^\d+\/\d+$/, qe = /* @__PURE__ */ new Set(["px", "full", "screen"]), Je = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ke = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/, Xe = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function z(e) {
  return Y(e) || qe.has(e) || Be.test(e) || L(e);
}
function L(e) {
  return U(e, "length", tt);
}
function He(e) {
  return U(e, "size", oe);
}
function Ze(e) {
  return U(e, "position", oe);
}
function Qe(e) {
  return U(e, "url", nt);
}
function mr(e) {
  return U(e, "number", Y);
}
function Y(e) {
  return !Number.isNaN(Number(e));
}
function rt(e) {
  return e.endsWith("%") && Y(e.slice(0, -1));
}
function ar(e) {
  return Jr(e) || U(e, "number", Jr);
}
function C(e) {
  return ne.test(e);
}
function ir() {
  return !0;
}
function $(e) {
  return Je.test(e);
}
function et(e) {
  return U(e, "", ot);
}
function U(e, t, o) {
  var a = ne.exec(e);
  return a ? a[1] ? a[1] === t : o(a[2]) : !1;
}
function tt(e) {
  return Ke.test(e);
}
function oe() {
  return !1;
}
function nt(e) {
  return e.startsWith("url(");
}
function Jr(e) {
  return Number.isInteger(Number(e));
}
function ot(e) {
  return Xe.test(e);
}
function at() {
  var e = R("colors"), t = R("spacing"), o = R("blur"), a = R("brightness"), c = R("borderColor"), u = R("borderRadius"), l = R("borderSpacing"), s = R("borderWidth"), f = R("contrast"), p = R("grayscale"), g = R("hueRotate"), v = R("invert"), y = R("gap"), _ = R("gradientColorStops"), P = R("gradientColorStopPositions"), S = R("inset"), T = R("margin"), O = R("opacity"), w = R("padding"), sr = R("saturate"), X = R("scale"), lr = R("sepia"), ur = R("skew"), cr = R("space"), dr = R("translate"), B = function() {
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
  }, V = function() {
    return [Y, mr];
  }, D = function() {
    return [Y, C];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [ir],
      spacing: [z],
      blur: ["none", "", $, L],
      brightness: V(),
      borderColor: [e],
      borderRadius: ["none", "", "full", $, L],
      borderSpacing: [t],
      borderWidth: Q(),
      contrast: V(),
      grayscale: N(),
      hueRotate: D(),
      invert: N(),
      gap: [t],
      gradientColorStops: [e],
      gradientColorStopPositions: [rt, L],
      inset: Z(),
      margin: Z(),
      opacity: V(),
      padding: [t],
      saturate: V(),
      scale: V(),
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
        columns: [$]
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
        inset: [S]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [S]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [S]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [S]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [S]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [S]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [S]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [S]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [S]
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
          screen: [$]
        }, $, L]
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
        text: ["base", $, L]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", L]
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
        bg: [].concat(G(), [Ze])
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
        bg: ["auto", "cover", "contain", He]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Qe]
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
        from: [_]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [_]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [_]
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
        shadow: ["", "inner", "none", $, et]
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
        "drop-shadow": ["", "none", $, C]
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
        invert: [v]
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
        "backdrop-hue-rotate": [g]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [v]
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
var it = /* @__PURE__ */ Ue(at);
function st(...e) {
  return it(Qr(e));
}
const Kr = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Xr = Qr, lt = (e, t) => (o) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null)
    return Xr(e, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  const { variants: c, defaultVariants: u } = t, l = Object.keys(c).map((p) => {
    const g = o == null ? void 0 : o[p], v = u == null ? void 0 : u[p];
    if (g === null)
      return null;
    const y = Kr(g) || Kr(v);
    return c[p][y];
  }), s = o && Object.entries(o).reduce((p, g) => {
    let [v, y] = g;
    return y === void 0 || (p[v] = y), p;
  }, {}), f = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((p, g) => {
    let { class: v, className: y, ..._ } = g;
    return Object.entries(_).every((P) => {
      let [S, T] = P;
      return Array.isArray(T) ? T.includes({
        ...u,
        ...s
      }[S]) : {
        ...u,
        ...s
      }[S] === T;
    }) ? [
      ...p,
      v,
      y
    ] : p;
  }, []);
  return Xr(e, l, f, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
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
  }, { theme: o = "light" } = e;
  return lt("rounded px-[10px] py-[5px] text-[12px]", {
    variants: {
      color: {
        primary: t[o].primary,
        secondary: t[o].secondary,
        danger: t[o].danger,
        success: t[o].success,
        warning: t[o].warning,
        info: t[o].info
      }
    },
    defaultVariants: {
      color: "primary"
    }
  })(e);
}, dt = ({
  theme: e = "light",
  color: t = "primary",
  decoration: o = !0,
  label: a
}) => /* @__PURE__ */ Ae.jsxs("span", { className: `${st(ut({ theme: e, color: t }))}`, children: [
  o && "• ",
  a
] });
export {
  dt as B,
  st as a,
  lt as c,
  Ae as j
};
