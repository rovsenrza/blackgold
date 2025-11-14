function vd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const l = t[n];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const s in l)
        if (s !== "default" && !(s in e)) {
          const i = Object.getOwnPropertyDescriptor(l, s);
          i &&
            Object.defineProperty(
              e,
              s,
              i.get ? i : { enumerable: !0, get: () => l[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && l(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function l(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function yd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Io = { exports: {} },
  kr = {},
  Do = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cl = Symbol.for("react.element"),
  jd = Symbol.for("react.portal"),
  Nd = Symbol.for("react.fragment"),
  wd = Symbol.for("react.strict_mode"),
  kd = Symbol.for("react.profiler"),
  Sd = Symbol.for("react.provider"),
  bd = Symbol.for("react.context"),
  Cd = Symbol.for("react.forward_ref"),
  Ed = Symbol.for("react.suspense"),
  Pd = Symbol.for("react.memo"),
  Md = Symbol.for("react.lazy"),
  ma = Symbol.iterator;
function zd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ma && e[ma]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $o = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Fo = Object.assign,
  Bo = {};
function xn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bo),
    (this.updater = n || $o);
}
xn.prototype.isReactComponent = {};
xn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Uo() {}
Uo.prototype = xn.prototype;
function pi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bo),
    (this.updater = n || $o);
}
var hi = (pi.prototype = new Uo());
hi.constructor = pi;
Fo(hi, xn.prototype);
hi.isPureReactComponent = !0;
var fa = Array.isArray,
  Vo = Object.prototype.hasOwnProperty,
  xi = { current: null },
  Wo = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ho(e, t, n) {
  var l,
    s = {},
    i = null,
    a = null;
  if (t != null)
    for (l in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Vo.call(t, l) && !Wo.hasOwnProperty(l) && (s[l] = t[l]);
  var o = arguments.length - 2;
  if (o === 1) s.children = n;
  else if (1 < o) {
    for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
    s.children = c;
  }
  if (e && e.defaultProps)
    for (l in ((o = e.defaultProps), o)) s[l] === void 0 && (s[l] = o[l]);
  return {
    $$typeof: cl,
    type: e,
    key: i,
    ref: a,
    props: s,
    _owner: xi.current,
  };
}
function Td(e, t) {
  return {
    $$typeof: cl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function gi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cl;
}
function Ld(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var pa = /\/+/g;
function Wr(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ld("" + e.key)
    : t.toString(36);
}
function Ol(e, t, n, l, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case cl:
          case jd:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (s = s(a)),
      (e = l === "" ? "." + Wr(a, 0) : l),
      fa(s)
        ? ((n = ""),
          e != null && (n = e.replace(pa, "$&/") + "/"),
          Ol(s, t, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (gi(s) &&
            (s = Td(
              s,
              n +
                (!s.key || (a && a.key === s.key)
                  ? ""
                  : ("" + s.key).replace(pa, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((a = 0), (l = l === "" ? "." : l + ":"), fa(e)))
    for (var o = 0; o < e.length; o++) {
      i = e[o];
      var c = l + Wr(i, o);
      a += Ol(i, t, n, c, s);
    }
  else if (((c = zd(e)), typeof c == "function"))
    for (e = c.call(e), o = 0; !(i = e.next()).done; )
      (i = i.value), (c = l + Wr(i, o++)), (a += Ol(i, t, n, c, s));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function yl(e, t, n) {
  if (e == null) return e;
  var l = [],
    s = 0;
  return (
    Ol(e, l, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    l
  );
}
function _d(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var me = { current: null },
  Il = { transition: null },
  Ad = {
    ReactCurrentDispatcher: me,
    ReactCurrentBatchConfig: Il,
    ReactCurrentOwner: xi,
  };
function Go() {
  throw Error("act(...) is not supported in production builds of React.");
}
R.Children = {
  map: yl,
  forEach: function (e, t, n) {
    yl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      yl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      yl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!gi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
R.Component = xn;
R.Fragment = Nd;
R.Profiler = kd;
R.PureComponent = pi;
R.StrictMode = wd;
R.Suspense = Ed;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ad;
R.act = Go;
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var l = Fo({}, e.props),
    s = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = xi.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (c in t)
      Vo.call(t, c) &&
        !Wo.hasOwnProperty(c) &&
        (l[c] = t[c] === void 0 && o !== void 0 ? o[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) l.children = n;
  else if (1 < c) {
    o = Array(c);
    for (var u = 0; u < c; u++) o[u] = arguments[u + 2];
    l.children = o;
  }
  return { $$typeof: cl, type: e.type, key: s, ref: i, props: l, _owner: a };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: bd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Sd, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = Ho;
R.createFactory = function (e) {
  var t = Ho.bind(null, e);
  return (t.type = e), t;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: Cd, render: e };
};
R.isValidElement = gi;
R.lazy = function (e) {
  return { $$typeof: Md, _payload: { _status: -1, _result: e }, _init: _d };
};
R.memo = function (e, t) {
  return { $$typeof: Pd, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
  var t = Il.transition;
  Il.transition = {};
  try {
    e();
  } finally {
    Il.transition = t;
  }
};
R.unstable_act = Go;
R.useCallback = function (e, t) {
  return me.current.useCallback(e, t);
};
R.useContext = function (e) {
  return me.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return me.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
  return me.current.useEffect(e, t);
};
R.useId = function () {
  return me.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
  return me.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
  return me.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
  return me.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
  return me.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
  return me.current.useReducer(e, t, n);
};
R.useRef = function (e) {
  return me.current.useRef(e);
};
R.useState = function (e) {
  return me.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
  return me.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
  return me.current.useTransition();
};
R.version = "18.3.1";
Do.exports = R;
var N = Do.exports;
const Rd = yd(N),
  Od = vd({ __proto__: null, default: Rd }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Id = N,
  Dd = Symbol.for("react.element"),
  $d = Symbol.for("react.fragment"),
  Fd = Object.prototype.hasOwnProperty,
  Bd = Id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ud = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qo(e, t, n) {
  var l,
    s = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (l in t) Fd.call(t, l) && !Ud.hasOwnProperty(l) && (s[l] = t[l]);
  if (e && e.defaultProps)
    for (l in ((t = e.defaultProps), t)) s[l] === void 0 && (s[l] = t[l]);
  return {
    $$typeof: Dd,
    type: e,
    key: i,
    ref: a,
    props: s,
    _owner: Bd.current,
  };
}
kr.Fragment = $d;
kr.jsx = Qo;
kr.jsxs = Qo;
Io.exports = kr;
var r = Io.exports,
  Ko = { exports: {} },
  ke = {},
  Xo = { exports: {} },
  Yo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, _) {
    var A = C.length;
    C.push(_);
    e: for (; 0 < A; ) {
      var K = (A - 1) >>> 1,
        ee = C[K];
      if (0 < s(ee, _)) (C[K] = _), (C[A] = ee), (A = K);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function l(C) {
    if (C.length === 0) return null;
    var _ = C[0],
      A = C.pop();
    if (A !== _) {
      C[0] = A;
      e: for (var K = 0, ee = C.length, gl = ee >>> 1; K < gl; ) {
        var St = 2 * (K + 1) - 1,
          Vr = C[St],
          bt = St + 1,
          vl = C[bt];
        if (0 > s(Vr, A))
          bt < ee && 0 > s(vl, Vr)
            ? ((C[K] = vl), (C[bt] = A), (K = bt))
            : ((C[K] = Vr), (C[St] = A), (K = St));
        else if (bt < ee && 0 > s(vl, A)) (C[K] = vl), (C[bt] = A), (K = bt);
        else break e;
      }
    }
    return _;
  }
  function s(C, _) {
    var A = C.sortIndex - _.sortIndex;
    return A !== 0 ? A : C.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      o = a.now();
    e.unstable_now = function () {
      return a.now() - o;
    };
  }
  var c = [],
    u = [],
    p = 1,
    d = null,
    g = 3,
    x = !1,
    v = !1,
    y = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(C) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) l(u);
      else if (_.startTime <= C)
        l(u), (_.sortIndex = _.expirationTime), t(c, _);
      else break;
      _ = n(u);
    }
  }
  function j(C) {
    if (((y = !1), m(C), !v))
      if (n(c) !== null) (v = !0), Br(S);
      else {
        var _ = n(u);
        _ !== null && Ur(j, _.startTime - C);
      }
  }
  function S(C, _) {
    (v = !1), y && ((y = !1), h(T), (T = -1)), (x = !0);
    var A = g;
    try {
      for (
        m(_), d = n(c);
        d !== null && (!(d.expirationTime > _) || (C && !Te()));

      ) {
        var K = d.callback;
        if (typeof K == "function") {
          (d.callback = null), (g = d.priorityLevel);
          var ee = K(d.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof ee == "function" ? (d.callback = ee) : d === n(c) && l(c),
            m(_);
        } else l(c);
        d = n(c);
      }
      if (d !== null) var gl = !0;
      else {
        var St = n(u);
        St !== null && Ur(j, St.startTime - _), (gl = !1);
      }
      return gl;
    } finally {
      (d = null), (g = A), (x = !1);
    }
  }
  var E = !1,
    P = null,
    T = -1,
    Q = 5,
    O = -1;
  function Te() {
    return !(e.unstable_now() - O < Q);
  }
  function jn() {
    if (P !== null) {
      var C = e.unstable_now();
      O = C;
      var _ = !0;
      try {
        _ = P(!0, C);
      } finally {
        _ ? Nn() : ((E = !1), (P = null));
      }
    } else E = !1;
  }
  var Nn;
  if (typeof f == "function")
    Nn = function () {
      f(jn);
    };
  else if (typeof MessageChannel < "u") {
    var da = new MessageChannel(),
      gd = da.port2;
    (da.port1.onmessage = jn),
      (Nn = function () {
        gd.postMessage(null);
      });
  } else
    Nn = function () {
      k(jn, 0);
    };
  function Br(C) {
    (P = C), E || ((E = !0), Nn());
  }
  function Ur(C, _) {
    T = k(function () {
      C(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || x || ((v = !0), Br(S));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Q = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (C) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = g;
      }
      var A = g;
      g = _;
      try {
        return C();
      } finally {
        g = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, _) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var A = g;
      g = C;
      try {
        return _();
      } finally {
        g = A;
      }
    }),
    (e.unstable_scheduleCallback = function (C, _, A) {
      var K = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? K + A : K))
          : (A = K),
        C)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = A + ee),
        (C = {
          id: p++,
          callback: _,
          priorityLevel: C,
          startTime: A,
          expirationTime: ee,
          sortIndex: -1,
        }),
        A > K
          ? ((C.sortIndex = A),
            t(u, C),
            n(c) === null &&
              C === n(u) &&
              (y ? (h(T), (T = -1)) : (y = !0), Ur(j, A - K)))
          : ((C.sortIndex = ee), t(c, C), v || x || ((v = !0), Br(S))),
        C
      );
    }),
    (e.unstable_shouldYield = Te),
    (e.unstable_wrapCallback = function (C) {
      var _ = g;
      return function () {
        var A = g;
        g = _;
        try {
          return C.apply(this, arguments);
        } finally {
          g = A;
        }
      };
    });
})(Yo);
Xo.exports = Yo;
var Vd = Xo.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wd = N,
  we = Vd;
function w(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Zo = new Set(),
  Vn = {};
function $t(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Vn[e] = t, e = 0; e < t.length; e++) Zo.add(t[e]);
}
var Ye = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  gs = Object.prototype.hasOwnProperty,
  Hd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ha = {},
  xa = {};
function Gd(e) {
  return gs.call(xa, e)
    ? !0
    : gs.call(ha, e)
    ? !1
    : Hd.test(e)
    ? (xa[e] = !0)
    : ((ha[e] = !0), !1);
}
function Qd(e, t, n, l) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return l
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Kd(e, t, n, l) {
  if (t === null || typeof t > "u" || Qd(e, t, n, l)) return !0;
  if (l) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function fe(e, t, n, l, s, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = l),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    se[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  se[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  se[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  se[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    se[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  se[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  se[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  se[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  se[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vi = /[\-:]([a-z])/g;
function yi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vi, yi);
    se[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vi, yi);
    se[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(vi, yi);
  se[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  se[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
se.xlinkHref = new fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  se[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ji(e, t, n, l) {
  var s = se.hasOwnProperty(t) ? se[t] : null;
  (s !== null
    ? s.type !== 0
    : l ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Kd(t, n, s, l) && (n = null),
    l || s === null
      ? Gd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
      ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
      : ((t = s.attributeName),
        (l = s.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((s = s.type),
            (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
            l ? e.setAttributeNS(l, t, n) : e.setAttribute(t, n))));
}
var tt = Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  jl = Symbol.for("react.element"),
  Wt = Symbol.for("react.portal"),
  Ht = Symbol.for("react.fragment"),
  Ni = Symbol.for("react.strict_mode"),
  vs = Symbol.for("react.profiler"),
  qo = Symbol.for("react.provider"),
  Jo = Symbol.for("react.context"),
  wi = Symbol.for("react.forward_ref"),
  ys = Symbol.for("react.suspense"),
  js = Symbol.for("react.suspense_list"),
  ki = Symbol.for("react.memo"),
  lt = Symbol.for("react.lazy"),
  ec = Symbol.for("react.offscreen"),
  ga = Symbol.iterator;
function wn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ga && e[ga]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  Hr;
function zn(e) {
  if (Hr === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hr = (t && t[1]) || "";
    }
  return (
    `
` +
    Hr +
    e
  );
}
var Gr = !1;
function Qr(e, t) {
  if (!e || Gr) return "";
  Gr = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var l = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          l = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        l = u;
      }
      e();
    }
  } catch (u) {
    if (u && l && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          i = l.stack.split(`
`),
          a = s.length - 1,
          o = i.length - 1;
        1 <= a && 0 <= o && s[a] !== i[o];

      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (s[a] !== i[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || s[a] !== i[o])) {
                var c =
                  `
` + s[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    (Gr = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? zn(e) : "";
}
function Xd(e) {
  switch (e.tag) {
    case 5:
      return zn(e.type);
    case 16:
      return zn("Lazy");
    case 13:
      return zn("Suspense");
    case 19:
      return zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Qr(e.type, !1)), e;
    case 11:
      return (e = Qr(e.type.render, !1)), e;
    case 1:
      return (e = Qr(e.type, !0)), e;
    default:
      return "";
  }
}
function Ns(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ht:
      return "Fragment";
    case Wt:
      return "Portal";
    case vs:
      return "Profiler";
    case Ni:
      return "StrictMode";
    case ys:
      return "Suspense";
    case js:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Jo:
        return (e.displayName || "Context") + ".Consumer";
      case qo:
        return (e._context.displayName || "Context") + ".Provider";
      case wi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ki:
        return (
          (t = e.displayName || null), t !== null ? t : Ns(e.type) || "Memo"
        );
      case lt:
        (t = e._payload), (e = e._init);
        try {
          return Ns(e(t));
        } catch {}
    }
  return null;
}
function Yd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ns(t);
    case 8:
      return t === Ni ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function yt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function tc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Zd(e) {
  var t = tc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    l = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (a) {
          (l = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return l;
        },
        setValue: function (a) {
          l = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Nl(e) {
  e._valueTracker || (e._valueTracker = Zd(e));
}
function nc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    l = "";
  return (
    e && (l = tc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = l),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Kl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ws(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function va(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    l = t.checked != null ? t.checked : t.defaultChecked;
  (n = yt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: l,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function lc(e, t) {
  (t = t.checked), t != null && ji(e, "checked", t, !1);
}
function ks(e, t) {
  lc(e, t);
  var n = yt(t.value),
    l = t.type;
  if (n != null)
    l === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (l === "submit" || l === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ss(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ss(e, t.type, yt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ya(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var l = t.type;
    if (
      !(
        (l !== "submit" && l !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ss(e, t, n) {
  (t !== "number" || Kl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Tn = Array.isArray;
function nn(e, t, n, l) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && l && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + yt(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), l && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function bs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ja(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (Tn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: yt(n) };
}
function rc(e, t) {
  var n = yt(t.value),
    l = yt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    l != null && (e.defaultValue = "" + l);
}
function Na(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function sc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Cs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? sc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wl,
  ic = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, l, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, l, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        wl = wl || document.createElement("div"),
          wl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var An = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  qd = ["Webkit", "ms", "Moz", "O"];
Object.keys(An).forEach(function (e) {
  qd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (An[t] = An[e]);
  });
});
function ac(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (An.hasOwnProperty(e) && An[e])
    ? ("" + t).trim()
    : t + "px";
}
function oc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var l = n.indexOf("--") === 0,
        s = ac(n, t[n], l);
      n === "float" && (n = "cssFloat"), l ? e.setProperty(n, s) : (e[n] = s);
    }
}
var Jd = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Es(e, t) {
  if (t) {
    if (Jd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function Ps(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ms = null;
function Si(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var zs = null,
  ln = null,
  rn = null;
function wa(e) {
  if ((e = ml(e))) {
    if (typeof zs != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = Pr(t)), zs(e.stateNode, e.type, t));
  }
}
function cc(e) {
  ln ? (rn ? rn.push(e) : (rn = [e])) : (ln = e);
}
function uc() {
  if (ln) {
    var e = ln,
      t = rn;
    if (((rn = ln = null), wa(e), t)) for (e = 0; e < t.length; e++) wa(t[e]);
  }
}
function dc(e, t) {
  return e(t);
}
function mc() {}
var Kr = !1;
function fc(e, t, n) {
  if (Kr) return e(t, n);
  Kr = !0;
  try {
    return dc(e, t, n);
  } finally {
    (Kr = !1), (ln !== null || rn !== null) && (mc(), uc());
  }
}
function Hn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var l = Pr(n);
  if (l === null) return null;
  n = l[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (l = !l.disabled) ||
        ((e = e.type),
        (l = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !l);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var Ts = !1;
if (Ye)
  try {
    var kn = {};
    Object.defineProperty(kn, "passive", {
      get: function () {
        Ts = !0;
      },
    }),
      window.addEventListener("test", kn, kn),
      window.removeEventListener("test", kn, kn);
  } catch {
    Ts = !1;
  }
function em(e, t, n, l, s, i, a, o, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var Rn = !1,
  Xl = null,
  Yl = !1,
  Ls = null,
  tm = {
    onError: function (e) {
      (Rn = !0), (Xl = e);
    },
  };
function nm(e, t, n, l, s, i, a, o, c) {
  (Rn = !1), (Xl = null), em.apply(tm, arguments);
}
function lm(e, t, n, l, s, i, a, o, c) {
  if ((nm.apply(this, arguments), Rn)) {
    if (Rn) {
      var u = Xl;
      (Rn = !1), (Xl = null);
    } else throw Error(w(198));
    Yl || ((Yl = !0), (Ls = u));
  }
}
function Ft(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function pc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ka(e) {
  if (Ft(e) !== e) throw Error(w(188));
}
function rm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ft(e)), t === null)) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, l = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((l = s.return), l !== null)) {
        n = l;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return ka(s), e;
        if (i === l) return ka(s), t;
        i = i.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== l.return) (n = s), (l = i);
    else {
      for (var a = !1, o = s.child; o; ) {
        if (o === n) {
          (a = !0), (n = s), (l = i);
          break;
        }
        if (o === l) {
          (a = !0), (l = s), (n = i);
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = i.child; o; ) {
          if (o === n) {
            (a = !0), (n = i), (l = s);
            break;
          }
          if (o === l) {
            (a = !0), (l = i), (n = s);
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(w(189));
      }
    }
    if (n.alternate !== l) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function hc(e) {
  return (e = rm(e)), e !== null ? xc(e) : null;
}
function xc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = xc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gc = we.unstable_scheduleCallback,
  Sa = we.unstable_cancelCallback,
  sm = we.unstable_shouldYield,
  im = we.unstable_requestPaint,
  X = we.unstable_now,
  am = we.unstable_getCurrentPriorityLevel,
  bi = we.unstable_ImmediatePriority,
  vc = we.unstable_UserBlockingPriority,
  Zl = we.unstable_NormalPriority,
  om = we.unstable_LowPriority,
  yc = we.unstable_IdlePriority,
  Sr = null,
  Ve = null;
function cm(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function")
    try {
      Ve.onCommitFiberRoot(Sr, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : mm,
  um = Math.log,
  dm = Math.LN2;
function mm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((um(e) / dm) | 0)) | 0;
}
var kl = 64,
  Sl = 4194304;
function Ln(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var l = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var o = a & ~s;
    o !== 0 ? (l = Ln(o)) : ((i &= a), i !== 0 && (l = Ln(i)));
  } else (a = n & ~s), a !== 0 ? (l = Ln(a)) : i !== 0 && (l = Ln(i));
  if (l === 0) return 0;
  if (
    t !== 0 &&
    t !== l &&
    !(t & s) &&
    ((s = l & -l), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((l & 4 && (l |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= l; 0 < t; )
      (n = 31 - Oe(t)), (s = 1 << n), (l |= e[n]), (t &= ~s);
  return l;
}
function fm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function pm(e, t) {
  for (
    var n = e.suspendedLanes,
      l = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Oe(i),
      o = 1 << a,
      c = s[a];
    c === -1
      ? (!(o & n) || o & l) && (s[a] = fm(o, t))
      : c <= t && (e.expiredLanes |= o),
      (i &= ~o);
  }
}
function _s(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function jc() {
  var e = kl;
  return (kl <<= 1), !(kl & 4194240) && (kl = 64), e;
}
function Xr(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ul(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function hm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var l = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - Oe(n),
      i = 1 << s;
    (t[s] = 0), (l[s] = -1), (e[s] = -1), (n &= ~i);
  }
}
function Ci(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var l = 31 - Oe(n),
      s = 1 << l;
    (s & t) | (e[l] & t) && (e[l] |= t), (n &= ~s);
  }
}
var D = 0;
function Nc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var wc,
  Ei,
  kc,
  Sc,
  bc,
  As = !1,
  bl = [],
  ut = null,
  dt = null,
  mt = null,
  Gn = new Map(),
  Qn = new Map(),
  st = [],
  xm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ba(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ut = null;
      break;
    case "dragenter":
    case "dragleave":
      dt = null;
      break;
    case "mouseover":
    case "mouseout":
      mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Gn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qn.delete(t.pointerId);
  }
}
function Sn(e, t, n, l, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: l,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = ml(t)), t !== null && Ei(t)),
      e)
    : ((e.eventSystemFlags |= l),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function gm(e, t, n, l, s) {
  switch (t) {
    case "focusin":
      return (ut = Sn(ut, e, t, n, l, s)), !0;
    case "dragenter":
      return (dt = Sn(dt, e, t, n, l, s)), !0;
    case "mouseover":
      return (mt = Sn(mt, e, t, n, l, s)), !0;
    case "pointerover":
      var i = s.pointerId;
      return Gn.set(i, Sn(Gn.get(i) || null, e, t, n, l, s)), !0;
    case "gotpointercapture":
      return (
        (i = s.pointerId), Qn.set(i, Sn(Qn.get(i) || null, e, t, n, l, s)), !0
      );
  }
  return !1;
}
function Cc(e) {
  var t = Pt(e.target);
  if (t !== null) {
    var n = Ft(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = pc(n)), t !== null)) {
          (e.blockedOn = t),
            bc(e.priority, function () {
              kc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Dl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Rs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var l = new n.constructor(n.type, n);
      (Ms = l), n.target.dispatchEvent(l), (Ms = null);
    } else return (t = ml(n)), t !== null && Ei(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ca(e, t, n) {
  Dl(e) && n.delete(t);
}
function vm() {
  (As = !1),
    ut !== null && Dl(ut) && (ut = null),
    dt !== null && Dl(dt) && (dt = null),
    mt !== null && Dl(mt) && (mt = null),
    Gn.forEach(Ca),
    Qn.forEach(Ca);
}
function bn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    As ||
      ((As = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, vm)));
}
function Kn(e) {
  function t(s) {
    return bn(s, e);
  }
  if (0 < bl.length) {
    bn(bl[0], e);
    for (var n = 1; n < bl.length; n++) {
      var l = bl[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
  }
  for (
    ut !== null && bn(ut, e),
      dt !== null && bn(dt, e),
      mt !== null && bn(mt, e),
      Gn.forEach(t),
      Qn.forEach(t),
      n = 0;
    n < st.length;
    n++
  )
    (l = st[n]), l.blockedOn === e && (l.blockedOn = null);
  for (; 0 < st.length && ((n = st[0]), n.blockedOn === null); )
    Cc(n), n.blockedOn === null && st.shift();
}
var sn = tt.ReactCurrentBatchConfig,
  Jl = !0;
function ym(e, t, n, l) {
  var s = D,
    i = sn.transition;
  sn.transition = null;
  try {
    (D = 1), Pi(e, t, n, l);
  } finally {
    (D = s), (sn.transition = i);
  }
}
function jm(e, t, n, l) {
  var s = D,
    i = sn.transition;
  sn.transition = null;
  try {
    (D = 4), Pi(e, t, n, l);
  } finally {
    (D = s), (sn.transition = i);
  }
}
function Pi(e, t, n, l) {
  if (Jl) {
    var s = Rs(e, t, n, l);
    if (s === null) ss(e, t, l, er, n), ba(e, l);
    else if (gm(s, e, t, n, l)) l.stopPropagation();
    else if ((ba(e, l), t & 4 && -1 < xm.indexOf(e))) {
      for (; s !== null; ) {
        var i = ml(s);
        if (
          (i !== null && wc(i),
          (i = Rs(e, t, n, l)),
          i === null && ss(e, t, l, er, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && l.stopPropagation();
    } else ss(e, t, l, null, n);
  }
}
var er = null;
function Rs(e, t, n, l) {
  if (((er = null), (e = Si(l)), (e = Pt(e)), e !== null))
    if (((t = Ft(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = pc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (er = e), null;
}
function Ec(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (am()) {
        case bi:
          return 1;
        case vc:
          return 4;
        case Zl:
        case om:
          return 16;
        case yc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var at = null,
  Mi = null,
  $l = null;
function Pc() {
  if ($l) return $l;
  var e,
    t = Mi,
    n = t.length,
    l,
    s = "value" in at ? at.value : at.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var a = n - e;
  for (l = 1; l <= a && t[n - l] === s[i - l]; l++);
  return ($l = s.slice(e, 1 < l ? 1 - l : void 0));
}
function Fl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Cl() {
  return !0;
}
function Ea() {
  return !1;
}
function Se(e) {
  function t(n, l, s, i, a) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = l),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Cl
        : Ea),
      (this.isPropagationStopped = Ea),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Cl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Cl));
      },
      persist: function () {},
      isPersistent: Cl,
    }),
    t
  );
}
var gn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zi = Se(gn),
  dl = H({}, gn, { view: 0, detail: 0 }),
  Nm = Se(dl),
  Yr,
  Zr,
  Cn,
  br = H({}, dl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ti,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Cn &&
            (Cn && e.type === "mousemove"
              ? ((Yr = e.screenX - Cn.screenX), (Zr = e.screenY - Cn.screenY))
              : (Zr = Yr = 0),
            (Cn = e)),
          Yr);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zr;
    },
  }),
  Pa = Se(br),
  wm = H({}, br, { dataTransfer: 0 }),
  km = Se(wm),
  Sm = H({}, dl, { relatedTarget: 0 }),
  qr = Se(Sm),
  bm = H({}, gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cm = Se(bm),
  Em = H({}, gn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Pm = Se(Em),
  Mm = H({}, gn, { data: 0 }),
  Ma = Se(Mm),
  zm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Tm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Lm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _m(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Lm[e]) ? !!t[e] : !1;
}
function Ti() {
  return _m;
}
var Am = H({}, dl, {
    key: function (e) {
      if (e.key) {
        var t = zm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Tm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ti,
    charCode: function (e) {
      return e.type === "keypress" ? Fl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Rm = Se(Am),
  Om = H({}, br, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  za = Se(Om),
  Im = H({}, dl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ti,
  }),
  Dm = Se(Im),
  $m = H({}, gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fm = Se($m),
  Bm = H({}, br, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Um = Se(Bm),
  Vm = [9, 13, 27, 32],
  Li = Ye && "CompositionEvent" in window,
  On = null;
Ye && "documentMode" in document && (On = document.documentMode);
var Wm = Ye && "TextEvent" in window && !On,
  Mc = Ye && (!Li || (On && 8 < On && 11 >= On)),
  Ta = " ",
  La = !1;
function zc(e, t) {
  switch (e) {
    case "keyup":
      return Vm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Tc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Gt = !1;
function Hm(e, t) {
  switch (e) {
    case "compositionend":
      return Tc(t);
    case "keypress":
      return t.which !== 32 ? null : ((La = !0), Ta);
    case "textInput":
      return (e = t.data), e === Ta && La ? null : e;
    default:
      return null;
  }
}
function Gm(e, t) {
  if (Gt)
    return e === "compositionend" || (!Li && zc(e, t))
      ? ((e = Pc()), ($l = Mi = at = null), (Gt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Mc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function _a(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qm[e.type] : t === "textarea";
}
function Lc(e, t, n, l) {
  cc(l),
    (t = tr(t, "onChange")),
    0 < t.length &&
      ((n = new zi("onChange", "change", null, n, l)),
      e.push({ event: n, listeners: t }));
}
var In = null,
  Xn = null;
function Km(e) {
  Vc(e, 0);
}
function Cr(e) {
  var t = Xt(e);
  if (nc(t)) return e;
}
function Xm(e, t) {
  if (e === "change") return t;
}
var _c = !1;
if (Ye) {
  var Jr;
  if (Ye) {
    var es = "oninput" in document;
    if (!es) {
      var Aa = document.createElement("div");
      Aa.setAttribute("oninput", "return;"),
        (es = typeof Aa.oninput == "function");
    }
    Jr = es;
  } else Jr = !1;
  _c = Jr && (!document.documentMode || 9 < document.documentMode);
}
function Ra() {
  In && (In.detachEvent("onpropertychange", Ac), (Xn = In = null));
}
function Ac(e) {
  if (e.propertyName === "value" && Cr(Xn)) {
    var t = [];
    Lc(t, Xn, e, Si(e)), fc(Km, t);
  }
}
function Ym(e, t, n) {
  e === "focusin"
    ? (Ra(), (In = t), (Xn = n), In.attachEvent("onpropertychange", Ac))
    : e === "focusout" && Ra();
}
function Zm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Cr(Xn);
}
function qm(e, t) {
  if (e === "click") return Cr(t);
}
function Jm(e, t) {
  if (e === "input" || e === "change") return Cr(t);
}
function ef(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : ef;
function Yn(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    l = Object.keys(t);
  if (n.length !== l.length) return !1;
  for (l = 0; l < n.length; l++) {
    var s = n[l];
    if (!gs.call(t, s) || !De(e[s], t[s])) return !1;
  }
  return !0;
}
function Oa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ia(e, t) {
  var n = Oa(e);
  e = 0;
  for (var l; n; ) {
    if (n.nodeType === 3) {
      if (((l = e + n.textContent.length), e <= t && l >= t))
        return { node: n, offset: t - e };
      e = l;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Oa(n);
  }
}
function Rc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Rc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Oc() {
  for (var e = window, t = Kl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Kl(e.document);
  }
  return t;
}
function _i(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function tf(e) {
  var t = Oc(),
    n = e.focusedElem,
    l = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Rc(n.ownerDocument.documentElement, n)
  ) {
    if (l !== null && _i(n)) {
      if (
        ((t = l.start),
        (e = l.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(l.start, s);
        (l = l.end === void 0 ? i : Math.min(l.end, s)),
          !e.extend && i > l && ((s = l), (l = i), (i = s)),
          (s = Ia(n, i));
        var a = Ia(n, l);
        s &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > l
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var nf = Ye && "documentMode" in document && 11 >= document.documentMode,
  Qt = null,
  Os = null,
  Dn = null,
  Is = !1;
function Da(e, t, n) {
  var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Is ||
    Qt == null ||
    Qt !== Kl(l) ||
    ((l = Qt),
    "selectionStart" in l && _i(l)
      ? (l = { start: l.selectionStart, end: l.selectionEnd })
      : ((l = (
          (l.ownerDocument && l.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (l = {
          anchorNode: l.anchorNode,
          anchorOffset: l.anchorOffset,
          focusNode: l.focusNode,
          focusOffset: l.focusOffset,
        })),
    (Dn && Yn(Dn, l)) ||
      ((Dn = l),
      (l = tr(Os, "onSelect")),
      0 < l.length &&
        ((t = new zi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: l }),
        (t.target = Qt))));
}
function El(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Kt = {
    animationend: El("Animation", "AnimationEnd"),
    animationiteration: El("Animation", "AnimationIteration"),
    animationstart: El("Animation", "AnimationStart"),
    transitionend: El("Transition", "TransitionEnd"),
  },
  ts = {},
  Ic = {};
Ye &&
  ((Ic = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Kt.animationend.animation,
    delete Kt.animationiteration.animation,
    delete Kt.animationstart.animation),
  "TransitionEvent" in window || delete Kt.transitionend.transition);
function Er(e) {
  if (ts[e]) return ts[e];
  if (!Kt[e]) return e;
  var t = Kt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ic) return (ts[e] = t[n]);
  return e;
}
var Dc = Er("animationend"),
  $c = Er("animationiteration"),
  Fc = Er("animationstart"),
  Bc = Er("transitionend"),
  Uc = new Map(),
  $a =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Nt(e, t) {
  Uc.set(e, t), $t(t, [e]);
}
for (var ns = 0; ns < $a.length; ns++) {
  var ls = $a[ns],
    lf = ls.toLowerCase(),
    rf = ls[0].toUpperCase() + ls.slice(1);
  Nt(lf, "on" + rf);
}
Nt(Dc, "onAnimationEnd");
Nt($c, "onAnimationIteration");
Nt(Fc, "onAnimationStart");
Nt("dblclick", "onDoubleClick");
Nt("focusin", "onFocus");
Nt("focusout", "onBlur");
Nt(Bc, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
$t(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
$t(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
$t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$t(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
$t(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
$t(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var _n =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  sf = new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));
function Fa(e, t, n) {
  var l = e.type || "unknown-event";
  (e.currentTarget = n), lm(l, t, void 0, e), (e.currentTarget = null);
}
function Vc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var l = e[n],
      s = l.event;
    l = l.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = l.length - 1; 0 <= a; a--) {
          var o = l[a],
            c = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), c !== i && s.isPropagationStopped())) break e;
          Fa(s, o, u), (i = c);
        }
      else
        for (a = 0; a < l.length; a++) {
          if (
            ((o = l[a]),
            (c = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            c !== i && s.isPropagationStopped())
          )
            break e;
          Fa(s, o, u), (i = c);
        }
    }
  }
  if (Yl) throw ((e = Ls), (Yl = !1), (Ls = null), e);
}
function F(e, t) {
  var n = t[Us];
  n === void 0 && (n = t[Us] = new Set());
  var l = e + "__bubble";
  n.has(l) || (Wc(t, e, 2, !1), n.add(l));
}
function rs(e, t, n) {
  var l = 0;
  t && (l |= 4), Wc(n, e, l, t);
}
var Pl = "_reactListening" + Math.random().toString(36).slice(2);
function Zn(e) {
  if (!e[Pl]) {
    (e[Pl] = !0),
      Zo.forEach(function (n) {
        n !== "selectionchange" && (sf.has(n) || rs(n, !1, e), rs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pl] || ((t[Pl] = !0), rs("selectionchange", !1, t));
  }
}
function Wc(e, t, n, l) {
  switch (Ec(t)) {
    case 1:
      var s = ym;
      break;
    case 4:
      s = jm;
      break;
    default:
      s = Pi;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !Ts ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    l
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
      ? e.addEventListener(t, n, { passive: s })
      : e.addEventListener(t, n, !1);
}
function ss(e, t, n, l, s) {
  var i = l;
  if (!(t & 1) && !(t & 2) && l !== null)
    e: for (;;) {
      if (l === null) return;
      var a = l.tag;
      if (a === 3 || a === 4) {
        var o = l.stateNode.containerInfo;
        if (o === s || (o.nodeType === 8 && o.parentNode === s)) break;
        if (a === 4)
          for (a = l.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === s || (c.nodeType === 8 && c.parentNode === s))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = Pt(o)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            l = i = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      l = l.return;
    }
  fc(function () {
    var u = i,
      p = Si(n),
      d = [];
    e: {
      var g = Uc.get(e);
      if (g !== void 0) {
        var x = zi,
          v = e;
        switch (e) {
          case "keypress":
            if (Fl(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Rm;
            break;
          case "focusin":
            (v = "focus"), (x = qr);
            break;
          case "focusout":
            (v = "blur"), (x = qr);
            break;
          case "beforeblur":
          case "afterblur":
            x = qr;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Pa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = km;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Dm;
            break;
          case Dc:
          case $c:
          case Fc:
            x = Cm;
            break;
          case Bc:
            x = Fm;
            break;
          case "scroll":
            x = Nm;
            break;
          case "wheel":
            x = Um;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Pm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = za;
        }
        var y = (t & 4) !== 0,
          k = !y && e === "scroll",
          h = y ? (g !== null ? g + "Capture" : null) : g;
        y = [];
        for (var f = u, m; f !== null; ) {
          m = f;
          var j = m.stateNode;
          if (
            (m.tag === 5 &&
              j !== null &&
              ((m = j),
              h !== null && ((j = Hn(f, h)), j != null && y.push(qn(f, j, m)))),
            k)
          )
            break;
          f = f.return;
        }
        0 < y.length &&
          ((g = new x(g, v, null, n, p)), d.push({ event: g, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Ms &&
            (v = n.relatedTarget || n.fromElement) &&
            (Pt(v) || v[Ze]))
        )
          break e;
        if (
          (x || g) &&
          ((g =
            p.window === p
              ? p
              : (g = p.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          x
            ? ((v = n.relatedTarget || n.toElement),
              (x = u),
              (v = v ? Pt(v) : null),
              v !== null &&
                ((k = Ft(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((x = null), (v = u)),
          x !== v)
        ) {
          if (
            ((y = Pa),
            (j = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = za),
              (j = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (k = x == null ? g : Xt(x)),
            (m = v == null ? g : Xt(v)),
            (g = new y(j, f + "leave", x, n, p)),
            (g.target = k),
            (g.relatedTarget = m),
            (j = null),
            Pt(p) === u &&
              ((y = new y(h, f + "enter", v, n, p)),
              (y.target = m),
              (y.relatedTarget = k),
              (j = y)),
            (k = j),
            x && v)
          )
            t: {
              for (y = x, h = v, f = 0, m = y; m; m = Vt(m)) f++;
              for (m = 0, j = h; j; j = Vt(j)) m++;
              for (; 0 < f - m; ) (y = Vt(y)), f--;
              for (; 0 < m - f; ) (h = Vt(h)), m--;
              for (; f--; ) {
                if (y === h || (h !== null && y === h.alternate)) break t;
                (y = Vt(y)), (h = Vt(h));
              }
              y = null;
            }
          else y = null;
          x !== null && Ba(d, g, x, y, !1),
            v !== null && k !== null && Ba(d, k, v, y, !0);
        }
      }
      e: {
        if (
          ((g = u ? Xt(u) : window),
          (x = g.nodeName && g.nodeName.toLowerCase()),
          x === "select" || (x === "input" && g.type === "file"))
        )
          var S = Xm;
        else if (_a(g))
          if (_c) S = Jm;
          else {
            S = Zm;
            var E = Ym;
          }
        else
          (x = g.nodeName) &&
            x.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (S = qm);
        if (S && (S = S(e, u))) {
          Lc(d, S, n, p);
          break e;
        }
        E && E(e, g, u),
          e === "focusout" &&
            (E = g._wrapperState) &&
            E.controlled &&
            g.type === "number" &&
            Ss(g, "number", g.value);
      }
      switch (((E = u ? Xt(u) : window), e)) {
        case "focusin":
          (_a(E) || E.contentEditable === "true") &&
            ((Qt = E), (Os = u), (Dn = null));
          break;
        case "focusout":
          Dn = Os = Qt = null;
          break;
        case "mousedown":
          Is = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Is = !1), Da(d, n, p);
          break;
        case "selectionchange":
          if (nf) break;
        case "keydown":
        case "keyup":
          Da(d, n, p);
      }
      var P;
      if (Li)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Gt
          ? zc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Mc &&
          n.locale !== "ko" &&
          (Gt || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Gt && (P = Pc())
            : ((at = p),
              (Mi = "value" in at ? at.value : at.textContent),
              (Gt = !0))),
        (E = tr(u, T)),
        0 < E.length &&
          ((T = new Ma(T, e, null, n, p)),
          d.push({ event: T, listeners: E }),
          P ? (T.data = P) : ((P = Tc(n)), P !== null && (T.data = P)))),
        (P = Wm ? Hm(e, n) : Gm(e, n)) &&
          ((u = tr(u, "onBeforeInput")),
          0 < u.length &&
            ((p = new Ma("onBeforeInput", "beforeinput", null, n, p)),
            d.push({ event: p, listeners: u }),
            (p.data = P)));
    }
    Vc(d, t);
  });
}
function qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function tr(e, t) {
  for (var n = t + "Capture", l = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Hn(e, n)),
      i != null && l.unshift(qn(e, i, s)),
      (i = Hn(e, t)),
      i != null && l.push(qn(e, i, s))),
      (e = e.return);
  }
  return l;
}
function Vt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ba(e, t, n, l, s) {
  for (var i = t._reactName, a = []; n !== null && n !== l; ) {
    var o = n,
      c = o.alternate,
      u = o.stateNode;
    if (c !== null && c === l) break;
    o.tag === 5 &&
      u !== null &&
      ((o = u),
      s
        ? ((c = Hn(n, i)), c != null && a.unshift(qn(n, c, o)))
        : s || ((c = Hn(n, i)), c != null && a.push(qn(n, c, o)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var af = /\r\n?/g,
  of = /\u0000|\uFFFD/g;
function Ua(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      af,
      `
`
    )
    .replace(of, "");
}
function Ml(e, t, n) {
  if (((t = Ua(t)), Ua(e) !== t && n)) throw Error(w(425));
}
function nr() {}
var Ds = null,
  $s = null;
function Fs(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Bs = typeof setTimeout == "function" ? setTimeout : void 0,
  cf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Va = typeof Promise == "function" ? Promise : void 0,
  uf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Va < "u"
      ? function (e) {
          return Va.resolve(null).then(e).catch(df);
        }
      : Bs;
function df(e) {
  setTimeout(function () {
    throw e;
  });
}
function is(e, t) {
  var n = t,
    l = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (l === 0) {
          e.removeChild(s), Kn(t);
          return;
        }
        l--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || l++;
    n = s;
  } while (n);
  Kn(t);
}
function ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Wa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var vn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + vn,
  Jn = "__reactProps$" + vn,
  Ze = "__reactContainer$" + vn,
  Us = "__reactEvents$" + vn,
  mf = "__reactListeners$" + vn,
  ff = "__reactHandles$" + vn;
function Pt(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ze] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Wa(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Wa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ml(e) {
  return (
    (e = e[Ue] || e[Ze]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function Pr(e) {
  return e[Jn] || null;
}
var Vs = [],
  Yt = -1;
function wt(e) {
  return { current: e };
}
function B(e) {
  0 > Yt || ((e.current = Vs[Yt]), (Vs[Yt] = null), Yt--);
}
function $(e, t) {
  Yt++, (Vs[Yt] = e.current), (e.current = t);
}
var jt = {},
  ce = wt(jt),
  xe = wt(!1),
  At = jt;
function un(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jt;
  var l = e.stateNode;
  if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
    return l.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    l &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function lr() {
  B(xe), B(ce);
}
function Ha(e, t, n) {
  if (ce.current !== jt) throw Error(w(168));
  $(ce, t), $(xe, n);
}
function Hc(e, t, n) {
  var l = e.stateNode;
  if (((t = t.childContextTypes), typeof l.getChildContext != "function"))
    return n;
  l = l.getChildContext();
  for (var s in l) if (!(s in t)) throw Error(w(108, Yd(e) || "Unknown", s));
  return H({}, n, l);
}
function rr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jt),
    (At = ce.current),
    $(ce, e),
    $(xe, xe.current),
    !0
  );
}
function Ga(e, t, n) {
  var l = e.stateNode;
  if (!l) throw Error(w(169));
  n
    ? ((e = Hc(e, t, At)),
      (l.__reactInternalMemoizedMergedChildContext = e),
      B(xe),
      B(ce),
      $(ce, e))
    : B(xe),
    $(xe, n);
}
var Ge = null,
  Mr = !1,
  as = !1;
function Gc(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
function pf(e) {
  (Mr = !0), Gc(e);
}
function kt() {
  if (!as && Ge !== null) {
    as = !0;
    var e = 0,
      t = D;
    try {
      var n = Ge;
      for (D = 1; e < n.length; e++) {
        var l = n[e];
        do l = l(!0);
        while (l !== null);
      }
      (Ge = null), (Mr = !1);
    } catch (s) {
      throw (Ge !== null && (Ge = Ge.slice(e + 1)), gc(bi, kt), s);
    } finally {
      (D = t), (as = !1);
    }
  }
  return null;
}
var Zt = [],
  qt = 0,
  sr = null,
  ir = 0,
  be = [],
  Ce = 0,
  Rt = null,
  Qe = 1,
  Ke = "";
function Ct(e, t) {
  (Zt[qt++] = ir), (Zt[qt++] = sr), (sr = e), (ir = t);
}
function Qc(e, t, n) {
  (be[Ce++] = Qe), (be[Ce++] = Ke), (be[Ce++] = Rt), (Rt = e);
  var l = Qe;
  e = Ke;
  var s = 32 - Oe(l) - 1;
  (l &= ~(1 << s)), (n += 1);
  var i = 32 - Oe(t) + s;
  if (30 < i) {
    var a = s - (s % 5);
    (i = (l & ((1 << a) - 1)).toString(32)),
      (l >>= a),
      (s -= a),
      (Qe = (1 << (32 - Oe(t) + s)) | (n << s) | l),
      (Ke = i + e);
  } else (Qe = (1 << i) | (n << s) | l), (Ke = e);
}
function Ai(e) {
  e.return !== null && (Ct(e, 1), Qc(e, 1, 0));
}
function Ri(e) {
  for (; e === sr; )
    (sr = Zt[--qt]), (Zt[qt] = null), (ir = Zt[--qt]), (Zt[qt] = null);
  for (; e === Rt; )
    (Rt = be[--Ce]),
      (be[Ce] = null),
      (Ke = be[--Ce]),
      (be[Ce] = null),
      (Qe = be[--Ce]),
      (be[Ce] = null);
}
var Ne = null,
  je = null,
  U = !1,
  Re = null;
function Kc(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ne = e), (je = ft(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ne = e), (je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Rt !== null ? { id: Qe, overflow: Ke } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ne = e),
            (je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ws(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Hs(e) {
  if (U) {
    var t = je;
    if (t) {
      var n = t;
      if (!Qa(e, t)) {
        if (Ws(e)) throw Error(w(418));
        t = ft(n.nextSibling);
        var l = Ne;
        t && Qa(e, t)
          ? Kc(l, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (Ne = e));
      }
    } else {
      if (Ws(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (Ne = e);
    }
  }
}
function Ka(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ne = e;
}
function zl(e) {
  if (e !== Ne) return !1;
  if (!U) return Ka(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Fs(e.type, e.memoizedProps))),
    t && (t = je))
  ) {
    if (Ws(e)) throw (Xc(), Error(w(418)));
    for (; t; ) Kc(e, t), (t = ft(t.nextSibling));
  }
  if ((Ka(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              je = ft(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      je = null;
    }
  } else je = Ne ? ft(e.stateNode.nextSibling) : null;
  return !0;
}
function Xc() {
  for (var e = je; e; ) e = ft(e.nextSibling);
}
function dn() {
  (je = Ne = null), (U = !1);
}
function Oi(e) {
  Re === null ? (Re = [e]) : Re.push(e);
}
var hf = tt.ReactCurrentBatchConfig;
function En(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var l = n.stateNode;
      }
      if (!l) throw Error(w(147, e));
      var s = l,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var o = s.refs;
            a === null ? delete o[i] : (o[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Tl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Xa(e) {
  var t = e._init;
  return t(e._payload);
}
function Yc(e) {
  function t(h, f) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [f]), (h.flags |= 16)) : m.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function l(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function s(h, f) {
    return (h = gt(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, f, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((h.flags |= 2), f) : m)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function o(h, f, m, j) {
    return f === null || f.tag !== 6
      ? ((f = ps(m, h.mode, j)), (f.return = h), f)
      : ((f = s(f, m)), (f.return = h), f);
  }
  function c(h, f, m, j) {
    var S = m.type;
    return S === Ht
      ? p(h, f, m.props.children, j, m.key)
      : f !== null &&
        (f.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === lt &&
            Xa(S) === f.type))
      ? ((j = s(f, m.props)), (j.ref = En(h, f, m)), (j.return = h), j)
      : ((j = Ql(m.type, m.key, m.props, null, h.mode, j)),
        (j.ref = En(h, f, m)),
        (j.return = h),
        j);
  }
  function u(h, f, m, j) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = hs(m, h.mode, j)), (f.return = h), f)
      : ((f = s(f, m.children || [])), (f.return = h), f);
  }
  function p(h, f, m, j, S) {
    return f === null || f.tag !== 7
      ? ((f = Lt(m, h.mode, j, S)), (f.return = h), f)
      : ((f = s(f, m)), (f.return = h), f);
  }
  function d(h, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = ps("" + f, h.mode, m)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case jl:
          return (
            (m = Ql(f.type, f.key, f.props, null, h.mode, m)),
            (m.ref = En(h, null, f)),
            (m.return = h),
            m
          );
        case Wt:
          return (f = hs(f, h.mode, m)), (f.return = h), f;
        case lt:
          var j = f._init;
          return d(h, j(f._payload), m);
      }
      if (Tn(f) || wn(f))
        return (f = Lt(f, h.mode, m, null)), (f.return = h), f;
      Tl(h, f);
    }
    return null;
  }
  function g(h, f, m, j) {
    var S = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return S !== null ? null : o(h, f, "" + m, j);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case jl:
          return m.key === S ? c(h, f, m, j) : null;
        case Wt:
          return m.key === S ? u(h, f, m, j) : null;
        case lt:
          return (S = m._init), g(h, f, S(m._payload), j);
      }
      if (Tn(m) || wn(m)) return S !== null ? null : p(h, f, m, j, null);
      Tl(h, m);
    }
    return null;
  }
  function x(h, f, m, j, S) {
    if ((typeof j == "string" && j !== "") || typeof j == "number")
      return (h = h.get(m) || null), o(f, h, "" + j, S);
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case jl:
          return (h = h.get(j.key === null ? m : j.key) || null), c(f, h, j, S);
        case Wt:
          return (h = h.get(j.key === null ? m : j.key) || null), u(f, h, j, S);
        case lt:
          var E = j._init;
          return x(h, f, m, E(j._payload), S);
      }
      if (Tn(j) || wn(j)) return (h = h.get(m) || null), p(f, h, j, S, null);
      Tl(f, j);
    }
    return null;
  }
  function v(h, f, m, j) {
    for (
      var S = null, E = null, P = f, T = (f = 0), Q = null;
      P !== null && T < m.length;
      T++
    ) {
      P.index > T ? ((Q = P), (P = null)) : (Q = P.sibling);
      var O = g(h, P, m[T], j);
      if (O === null) {
        P === null && (P = Q);
        break;
      }
      e && P && O.alternate === null && t(h, P),
        (f = i(O, f, T)),
        E === null ? (S = O) : (E.sibling = O),
        (E = O),
        (P = Q);
    }
    if (T === m.length) return n(h, P), U && Ct(h, T), S;
    if (P === null) {
      for (; T < m.length; T++)
        (P = d(h, m[T], j)),
          P !== null &&
            ((f = i(P, f, T)), E === null ? (S = P) : (E.sibling = P), (E = P));
      return U && Ct(h, T), S;
    }
    for (P = l(h, P); T < m.length; T++)
      (Q = x(P, h, T, m[T], j)),
        Q !== null &&
          (e && Q.alternate !== null && P.delete(Q.key === null ? T : Q.key),
          (f = i(Q, f, T)),
          E === null ? (S = Q) : (E.sibling = Q),
          (E = Q));
    return (
      e &&
        P.forEach(function (Te) {
          return t(h, Te);
        }),
      U && Ct(h, T),
      S
    );
  }
  function y(h, f, m, j) {
    var S = wn(m);
    if (typeof S != "function") throw Error(w(150));
    if (((m = S.call(m)), m == null)) throw Error(w(151));
    for (
      var E = (S = null), P = f, T = (f = 0), Q = null, O = m.next();
      P !== null && !O.done;
      T++, O = m.next()
    ) {
      P.index > T ? ((Q = P), (P = null)) : (Q = P.sibling);
      var Te = g(h, P, O.value, j);
      if (Te === null) {
        P === null && (P = Q);
        break;
      }
      e && P && Te.alternate === null && t(h, P),
        (f = i(Te, f, T)),
        E === null ? (S = Te) : (E.sibling = Te),
        (E = Te),
        (P = Q);
    }
    if (O.done) return n(h, P), U && Ct(h, T), S;
    if (P === null) {
      for (; !O.done; T++, O = m.next())
        (O = d(h, O.value, j)),
          O !== null &&
            ((f = i(O, f, T)), E === null ? (S = O) : (E.sibling = O), (E = O));
      return U && Ct(h, T), S;
    }
    for (P = l(h, P); !O.done; T++, O = m.next())
      (O = x(P, h, T, O.value, j)),
        O !== null &&
          (e && O.alternate !== null && P.delete(O.key === null ? T : O.key),
          (f = i(O, f, T)),
          E === null ? (S = O) : (E.sibling = O),
          (E = O));
    return (
      e &&
        P.forEach(function (jn) {
          return t(h, jn);
        }),
      U && Ct(h, T),
      S
    );
  }
  function k(h, f, m, j) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Ht &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case jl:
          e: {
            for (var S = m.key, E = f; E !== null; ) {
              if (E.key === S) {
                if (((S = m.type), S === Ht)) {
                  if (E.tag === 7) {
                    n(h, E.sibling),
                      (f = s(E, m.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === lt &&
                    Xa(S) === E.type)
                ) {
                  n(h, E.sibling),
                    (f = s(E, m.props)),
                    (f.ref = En(h, E, m)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            m.type === Ht
              ? ((f = Lt(m.props.children, h.mode, j, m.key)),
                (f.return = h),
                (h = f))
              : ((j = Ql(m.type, m.key, m.props, null, h.mode, j)),
                (j.ref = En(h, f, m)),
                (j.return = h),
                (h = j));
          }
          return a(h);
        case Wt:
          e: {
            for (E = m.key; f !== null; ) {
              if (f.key === E)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(h, f.sibling),
                    (f = s(f, m.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = hs(m, h.mode, j)), (f.return = h), (h = f);
          }
          return a(h);
        case lt:
          return (E = m._init), k(h, f, E(m._payload), j);
      }
      if (Tn(m)) return v(h, f, m, j);
      if (wn(m)) return y(h, f, m, j);
      Tl(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = s(f, m)), (f.return = h), (h = f))
          : (n(h, f), (f = ps(m, h.mode, j)), (f.return = h), (h = f)),
        a(h))
      : n(h, f);
  }
  return k;
}
var mn = Yc(!0),
  Zc = Yc(!1),
  ar = wt(null),
  or = null,
  Jt = null,
  Ii = null;
function Di() {
  Ii = Jt = or = null;
}
function $i(e) {
  var t = ar.current;
  B(ar), (e._currentValue = t);
}
function Gs(e, t, n) {
  for (; e !== null; ) {
    var l = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
        : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function an(e, t) {
  (or = e),
    (Ii = Jt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null));
}
function Me(e) {
  var t = e._currentValue;
  if (Ii !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jt === null)) {
      if (or === null) throw Error(w(308));
      (Jt = e), (or.dependencies = { lanes: 0, firstContext: e });
    } else Jt = Jt.next = e;
  return t;
}
var Mt = null;
function Fi(e) {
  Mt === null ? (Mt = [e]) : Mt.push(e);
}
function qc(e, t, n, l) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Fi(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    qe(e, l)
  );
}
function qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var rt = !1;
function Bi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Jc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Xe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function pt(e, t, n) {
  var l = e.updateQueue;
  if (l === null) return null;
  if (((l = l.shared), I & 2)) {
    var s = l.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (l.pending = t),
      qe(e, n)
    );
  }
  return (
    (s = l.interleaved),
    s === null ? ((t.next = t), Fi(l)) : ((t.next = s.next), (s.next = t)),
    (l.interleaved = t),
    qe(e, n)
  );
}
function Bl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var l = t.lanes;
    (l &= e.pendingLanes), (n |= l), (t.lanes = n), Ci(e, n);
  }
}
function Ya(e, t) {
  var n = e.updateQueue,
    l = e.alternate;
  if (l !== null && ((l = l.updateQueue), n === l)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (s = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    (n = {
      baseState: l.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: l.shared,
      effects: l.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function cr(e, t, n, l) {
  var s = e.updateQueue;
  rt = !1;
  var i = s.firstBaseUpdate,
    a = s.lastBaseUpdate,
    o = s.shared.pending;
  if (o !== null) {
    s.shared.pending = null;
    var c = o,
      u = c.next;
    (c.next = null), a === null ? (i = u) : (a.next = u), (a = c);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (o = p.lastBaseUpdate),
      o !== a &&
        (o === null ? (p.firstBaseUpdate = u) : (o.next = u),
        (p.lastBaseUpdate = c)));
  }
  if (i !== null) {
    var d = s.baseState;
    (a = 0), (p = u = c = null), (o = i);
    do {
      var g = o.lane,
        x = o.eventTime;
      if ((l & g) === g) {
        p !== null &&
          (p = p.next =
            {
              eventTime: x,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var v = e,
            y = o;
          switch (((g = t), (x = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                d = v.call(x, d, g);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (g = typeof v == "function" ? v.call(x, d, g) : v),
                g == null)
              )
                break e;
              d = H({}, d, g);
              break e;
            case 2:
              rt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (g = s.effects),
          g === null ? (s.effects = [o]) : g.push(o));
      } else
        (x = {
          eventTime: x,
          lane: g,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          p === null ? ((u = p = x), (c = d)) : (p = p.next = x),
          (a |= g);
      if (((o = o.next), o === null)) {
        if (((o = s.shared.pending), o === null)) break;
        (g = o),
          (o = g.next),
          (g.next = null),
          (s.lastBaseUpdate = g),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (c = d),
      (s.baseState = c),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = p),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (a |= s.lane), (s = s.next);
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    (It |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function Za(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var l = e[t],
        s = l.callback;
      if (s !== null) {
        if (((l.callback = null), (l = n), typeof s != "function"))
          throw Error(w(191, s));
        s.call(l);
      }
    }
}
var fl = {},
  We = wt(fl),
  el = wt(fl),
  tl = wt(fl);
function zt(e) {
  if (e === fl) throw Error(w(174));
  return e;
}
function Ui(e, t) {
  switch (($(tl, t), $(el, e), $(We, fl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Cs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Cs(t, e));
  }
  B(We), $(We, t);
}
function fn() {
  B(We), B(el), B(tl);
}
function eu(e) {
  zt(tl.current);
  var t = zt(We.current),
    n = Cs(t, e.type);
  t !== n && ($(el, e), $(We, n));
}
function Vi(e) {
  el.current === e && (B(We), B(el));
}
var V = wt(0);
function ur(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var os = [];
function Wi() {
  for (var e = 0; e < os.length; e++)
    os[e]._workInProgressVersionPrimary = null;
  os.length = 0;
}
var Ul = tt.ReactCurrentDispatcher,
  cs = tt.ReactCurrentBatchConfig,
  Ot = 0,
  W = null,
  q = null,
  te = null,
  dr = !1,
  $n = !1,
  nl = 0,
  xf = 0;
function ie() {
  throw Error(w(321));
}
function Hi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1;
  return !0;
}
function Gi(e, t, n, l, s, i) {
  if (
    ((Ot = i),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ul.current = e === null || e.memoizedState === null ? jf : Nf),
    (e = n(l, s)),
    $n)
  ) {
    i = 0;
    do {
      if ((($n = !1), (nl = 0), 25 <= i)) throw Error(w(301));
      (i += 1),
        (te = q = null),
        (t.updateQueue = null),
        (Ul.current = wf),
        (e = n(l, s));
    } while ($n);
  }
  if (
    ((Ul.current = mr),
    (t = q !== null && q.next !== null),
    (Ot = 0),
    (te = q = W = null),
    (dr = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function Qi() {
  var e = nl !== 0;
  return (nl = 0), e;
}
function Be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return te === null ? (W.memoizedState = te = e) : (te = te.next = e), te;
}
function ze() {
  if (q === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = te === null ? W.memoizedState : te.next;
  if (t !== null) (te = t), (q = e);
  else {
    if (e === null) throw Error(w(310));
    (q = e),
      (e = {
        memoizedState: q.memoizedState,
        baseState: q.baseState,
        baseQueue: q.baseQueue,
        queue: q.queue,
        next: null,
      }),
      te === null ? (W.memoizedState = te = e) : (te = te.next = e);
  }
  return te;
}
function ll(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function us(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var l = q,
    s = l.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var a = s.next;
      (s.next = i.next), (i.next = a);
    }
    (l.baseQueue = s = i), (n.pending = null);
  }
  if (s !== null) {
    (i = s.next), (l = l.baseState);
    var o = (a = null),
      c = null,
      u = i;
    do {
      var p = u.lane;
      if ((Ot & p) === p)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (l = u.hasEagerState ? u.eagerState : e(l, u.action));
      else {
        var d = {
          lane: p,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        c === null ? ((o = c = d), (a = l)) : (c = c.next = d),
          (W.lanes |= p),
          (It |= p);
      }
      u = u.next;
    } while (u !== null && u !== i);
    c === null ? (a = l) : (c.next = o),
      De(l, t.memoizedState) || (he = !0),
      (t.memoizedState = l),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = l);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (i = s.lane), (W.lanes |= i), (It |= i), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ds(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var l = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var a = (s = s.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== s);
    De(i, t.memoizedState) || (he = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, l];
}
function tu() {}
function nu(e, t) {
  var n = W,
    l = ze(),
    s = t(),
    i = !De(l.memoizedState, s);
  if (
    (i && ((l.memoizedState = s), (he = !0)),
    (l = l.queue),
    Ki(su.bind(null, n, l, e), [e]),
    l.getSnapshot !== t || i || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      rl(9, ru.bind(null, n, l, s, t), void 0, null),
      ne === null)
    )
      throw Error(w(349));
    Ot & 30 || lu(n, t, s);
  }
  return s;
}
function lu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ru(e, t, n, l) {
  (t.value = n), (t.getSnapshot = l), iu(t) && au(e);
}
function su(e, t, n) {
  return n(function () {
    iu(t) && au(e);
  });
}
function iu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function au(e) {
  var t = qe(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function qa(e) {
  var t = Be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ll,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = yf.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function rl(e, t, n, l) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: l, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e))),
    e
  );
}
function ou() {
  return ze().memoizedState;
}
function Vl(e, t, n, l) {
  var s = Be();
  (W.flags |= e),
    (s.memoizedState = rl(1 | t, n, void 0, l === void 0 ? null : l));
}
function zr(e, t, n, l) {
  var s = ze();
  l = l === void 0 ? null : l;
  var i = void 0;
  if (q !== null) {
    var a = q.memoizedState;
    if (((i = a.destroy), l !== null && Hi(l, a.deps))) {
      s.memoizedState = rl(t, n, i, l);
      return;
    }
  }
  (W.flags |= e), (s.memoizedState = rl(1 | t, n, i, l));
}
function Ja(e, t) {
  return Vl(8390656, 8, e, t);
}
function Ki(e, t) {
  return zr(2048, 8, e, t);
}
function cu(e, t) {
  return zr(4, 2, e, t);
}
function uu(e, t) {
  return zr(4, 4, e, t);
}
function du(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function mu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), zr(4, 4, du.bind(null, t, e), n)
  );
}
function Xi() {}
function fu(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var l = n.memoizedState;
  return l !== null && t !== null && Hi(t, l[1])
    ? l[0]
    : ((n.memoizedState = [e, t]), e);
}
function pu(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var l = n.memoizedState;
  return l !== null && t !== null && Hi(t, l[1])
    ? l[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function hu(e, t, n) {
  return Ot & 21
    ? (De(n, t) || ((n = jc()), (W.lanes |= n), (It |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function gf(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var l = cs.transition;
  cs.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (cs.transition = l);
  }
}
function xu() {
  return ze().memoizedState;
}
function vf(e, t, n) {
  var l = xt(e);
  if (
    ((n = {
      lane: l,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    gu(e))
  )
    vu(t, n);
  else if (((n = qc(e, t, n, l)), n !== null)) {
    var s = de();
    Ie(n, e, l, s), yu(n, t, l);
  }
}
function yf(e, t, n) {
  var l = xt(e),
    s = { lane: l, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gu(e)) vu(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          o = i(a, n);
        if (((s.hasEagerState = !0), (s.eagerState = o), De(o, a))) {
          var c = t.interleaved;
          c === null
            ? ((s.next = s), Fi(t))
            : ((s.next = c.next), (c.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = qc(e, t, s, l)),
      n !== null && ((s = de()), Ie(n, e, l, s), yu(n, t, l));
  }
}
function gu(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function vu(e, t) {
  $n = dr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function yu(e, t, n) {
  if (n & 4194240) {
    var l = t.lanes;
    (l &= e.pendingLanes), (n |= l), (t.lanes = n), Ci(e, n);
  }
}
var mr = {
    readContext: Me,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  jf = {
    readContext: Me,
    useCallback: function (e, t) {
      return (Be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Me,
    useEffect: Ja,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Vl(4194308, 4, du.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Vl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Vl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var l = Be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (l.memoizedState = l.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (l.queue = e),
        (e = e.dispatch = vf.bind(null, W, e)),
        [l.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: qa,
    useDebugValue: Xi,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = qa(!1),
        t = e[0];
      return (e = gf.bind(null, e[1])), (Be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var l = W,
        s = Be();
      if (U) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(w(349));
        Ot & 30 || lu(l, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        Ja(su.bind(null, l, i, e), [e]),
        (l.flags |= 2048),
        rl(9, ru.bind(null, l, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Be(),
        t = ne.identifierPrefix;
      if (U) {
        var n = Ke,
          l = Qe;
        (n = (l & ~(1 << (32 - Oe(l) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = nl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = xf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Nf = {
    readContext: Me,
    useCallback: fu,
    useContext: Me,
    useEffect: Ki,
    useImperativeHandle: mu,
    useInsertionEffect: cu,
    useLayoutEffect: uu,
    useMemo: pu,
    useReducer: us,
    useRef: ou,
    useState: function () {
      return us(ll);
    },
    useDebugValue: Xi,
    useDeferredValue: function (e) {
      var t = ze();
      return hu(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = us(ll)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: tu,
    useSyncExternalStore: nu,
    useId: xu,
    unstable_isNewReconciler: !1,
  },
  wf = {
    readContext: Me,
    useCallback: fu,
    useContext: Me,
    useEffect: Ki,
    useImperativeHandle: mu,
    useInsertionEffect: cu,
    useLayoutEffect: uu,
    useMemo: pu,
    useReducer: ds,
    useRef: ou,
    useState: function () {
      return ds(ll);
    },
    useDebugValue: Xi,
    useDeferredValue: function (e) {
      var t = ze();
      return q === null ? (t.memoizedState = e) : hu(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = ds(ll)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: tu,
    useSyncExternalStore: nu,
    useId: xu,
    unstable_isNewReconciler: !1,
  };
function _e(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Qs(e, t, n, l) {
  (t = e.memoizedState),
    (n = n(l, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Tr = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ft(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var l = de(),
      s = xt(e),
      i = Xe(l, s);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = pt(e, i, s)),
      t !== null && (Ie(t, e, s, l), Bl(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var l = de(),
      s = xt(e),
      i = Xe(l, s);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = pt(e, i, s)),
      t !== null && (Ie(t, e, s, l), Bl(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      l = xt(e),
      s = Xe(n, l);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = pt(e, s, l)),
      t !== null && (Ie(t, e, l, n), Bl(t, e, l));
  },
};
function eo(e, t, n, l, s, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(l, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Yn(n, l) || !Yn(s, i)
      : !0
  );
}
function ju(e, t, n) {
  var l = !1,
    s = jt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Me(i))
      : ((s = ge(t) ? At : ce.current),
        (l = t.contextTypes),
        (i = (l = l != null) ? un(e, s) : jt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Tr),
    (e.stateNode = t),
    (t._reactInternals = e),
    l &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function to(e, t, n, l) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, l),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, l),
    t.state !== e && Tr.enqueueReplaceState(t, t.state, null);
}
function Ks(e, t, n, l) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = {}), Bi(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (s.context = Me(i))
    : ((i = ge(t) ? At : ce.current), (s.context = un(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Qs(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Tr.enqueueReplaceState(s, s.state, null),
      cr(e, n, s, l),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function pn(e, t) {
  try {
    var n = "",
      l = t;
    do (n += Xd(l)), (l = l.return);
    while (l);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function ms(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var kf = typeof WeakMap == "function" ? WeakMap : Map;
function Nu(e, t, n) {
  (n = Xe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var l = t.value;
  return (
    (n.callback = function () {
      pr || ((pr = !0), (si = l)), Xs(e, t);
    }),
    n
  );
}
function wu(e, t, n) {
  (n = Xe(-1, n)), (n.tag = 3);
  var l = e.type.getDerivedStateFromError;
  if (typeof l == "function") {
    var s = t.value;
    (n.payload = function () {
      return l(s);
    }),
      (n.callback = function () {
        Xs(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Xs(e, t),
          typeof l != "function" &&
            (ht === null ? (ht = new Set([this])) : ht.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function no(e, t, n) {
  var l = e.pingCache;
  if (l === null) {
    l = e.pingCache = new kf();
    var s = new Set();
    l.set(t, s);
  } else (s = l.get(t)), s === void 0 && ((s = new Set()), l.set(t, s));
  s.has(n) || (s.add(n), (e = If.bind(null, e, t, n)), t.then(e, e));
}
function lo(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ro(e, t, n, l, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Xe(-1, 1)), (t.tag = 2), pt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Sf = tt.ReactCurrentOwner,
  he = !1;
function ue(e, t, n, l) {
  t.child = e === null ? Zc(t, null, n, l) : mn(t, e.child, n, l);
}
function so(e, t, n, l, s) {
  n = n.render;
  var i = t.ref;
  return (
    an(t, s),
    (l = Gi(e, t, n, l, i, s)),
    (n = Qi()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Je(e, t, s))
      : (U && n && Ai(t), (t.flags |= 1), ue(e, t, l, s), t.child)
  );
}
function io(e, t, n, l, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !la(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ku(e, t, i, l, s))
      : ((e = Ql(n.type, null, l, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Yn), n(a, l) && e.ref === t.ref)
    )
      return Je(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = gt(i, l)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ku(e, t, n, l, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Yn(i, l) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = l = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (he = !0);
      else return (t.lanes = e.lanes), Je(e, t, s);
  }
  return Ys(e, t, n, l, s);
}
function Su(e, t, n) {
  var l = t.pendingProps,
    s = l.children,
    i = e !== null ? e.memoizedState : null;
  if (l.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $(tn, ye),
        (ye |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          $(tn, ye),
          (ye |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (l = i !== null ? i.baseLanes : n),
        $(tn, ye),
        (ye |= l);
    }
  else
    i !== null ? ((l = i.baseLanes | n), (t.memoizedState = null)) : (l = n),
      $(tn, ye),
      (ye |= l);
  return ue(e, t, s, n), t.child;
}
function bu(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ys(e, t, n, l, s) {
  var i = ge(n) ? At : ce.current;
  return (
    (i = un(t, i)),
    an(t, s),
    (n = Gi(e, t, n, l, i, s)),
    (l = Qi()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Je(e, t, s))
      : (U && l && Ai(t), (t.flags |= 1), ue(e, t, n, s), t.child)
  );
}
function ao(e, t, n, l, s) {
  if (ge(n)) {
    var i = !0;
    rr(t);
  } else i = !1;
  if ((an(t, s), t.stateNode === null))
    Wl(e, t), ju(t, n, l), Ks(t, n, l, s), (l = !0);
  else if (e === null) {
    var a = t.stateNode,
      o = t.memoizedProps;
    a.props = o;
    var c = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Me(u))
      : ((u = ge(n) ? At : ce.current), (u = un(t, u)));
    var p = n.getDerivedStateFromProps,
      d =
        typeof p == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== l || c !== u) && to(t, a, l, u)),
      (rt = !1);
    var g = t.memoizedState;
    (a.state = g),
      cr(t, l, a, s),
      (c = t.memoizedState),
      o !== l || g !== c || xe.current || rt
        ? (typeof p == "function" && (Qs(t, n, p, l), (c = t.memoizedState)),
          (o = rt || eo(t, n, o, l, g, c, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = l),
              (t.memoizedState = c)),
          (a.props = l),
          (a.state = c),
          (a.context = u),
          (l = o))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (l = !1));
  } else {
    (a = t.stateNode),
      Jc(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : _e(t.type, o)),
      (a.props = u),
      (d = t.pendingProps),
      (g = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Me(c))
        : ((c = ge(n) ? At : ce.current), (c = un(t, c)));
    var x = n.getDerivedStateFromProps;
    (p =
      typeof x == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== d || g !== c) && to(t, a, l, c)),
      (rt = !1),
      (g = t.memoizedState),
      (a.state = g),
      cr(t, l, a, s);
    var v = t.memoizedState;
    o !== d || g !== v || xe.current || rt
      ? (typeof x == "function" && (Qs(t, n, x, l), (v = t.memoizedState)),
        (u = rt || eo(t, n, u, l, g, v, c) || !1)
          ? (p ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(l, v, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(l, v, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (o === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = l),
            (t.memoizedState = v)),
        (a.props = l),
        (a.state = v),
        (a.context = c),
        (l = u))
      : (typeof a.componentDidUpdate != "function" ||
          (o === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (l = !1));
  }
  return Zs(e, t, n, l, i, s);
}
function Zs(e, t, n, l, s, i) {
  bu(e, t);
  var a = (t.flags & 128) !== 0;
  if (!l && !a) return s && Ga(t, n, !1), Je(e, t, i);
  (l = t.stateNode), (Sf.current = t);
  var o =
    a && typeof n.getDerivedStateFromError != "function" ? null : l.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = mn(t, e.child, null, i)), (t.child = mn(t, null, o, i)))
      : ue(e, t, o, i),
    (t.memoizedState = l.state),
    s && Ga(t, n, !0),
    t.child
  );
}
function Cu(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ha(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ha(e, t.context, !1),
    Ui(e, t.containerInfo);
}
function oo(e, t, n, l, s) {
  return dn(), Oi(s), (t.flags |= 256), ue(e, t, n, l), t.child;
}
var qs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Js(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Eu(e, t, n) {
  var l = t.pendingProps,
    s = V.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    o;
  if (
    ((o = a) ||
      (o = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    o
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    $(V, s & 1),
    e === null)
  )
    return (
      Hs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = l.children),
          (e = l.fallback),
          i
            ? ((l = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(l & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Ar(a, l, 0, null)),
              (e = Lt(e, l, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Js(n)),
              (t.memoizedState = qs),
              e)
            : Yi(t, a))
    );
  if (((s = e.memoizedState), s !== null && ((o = s.dehydrated), o !== null)))
    return bf(e, t, a, l, o, s, n);
  if (i) {
    (i = l.fallback), (a = t.mode), (s = e.child), (o = s.sibling);
    var c = { mode: "hidden", children: l.children };
    return (
      !(a & 1) && t.child !== s
        ? ((l = t.child),
          (l.childLanes = 0),
          (l.pendingProps = c),
          (t.deletions = null))
        : ((l = gt(s, c)), (l.subtreeFlags = s.subtreeFlags & 14680064)),
      o !== null ? (i = gt(o, i)) : ((i = Lt(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (l.return = t),
      (l.sibling = i),
      (t.child = l),
      (l = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Js(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = qs),
      l
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (l = gt(i, { mode: "visible", children: l.children })),
    !(t.mode & 1) && (l.lanes = n),
    (l.return = t),
    (l.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = l),
    (t.memoizedState = null),
    l
  );
}
function Yi(e, t) {
  return (
    (t = Ar({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ll(e, t, n, l) {
  return (
    l !== null && Oi(l),
    mn(t, e.child, null, n),
    (e = Yi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function bf(e, t, n, l, s, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (l = ms(Error(w(422)))), Ll(e, t, a, l))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = l.fallback),
        (s = t.mode),
        (l = Ar({ mode: "visible", children: l.children }, s, 0, null)),
        (i = Lt(i, s, a, null)),
        (i.flags |= 2),
        (l.return = t),
        (i.return = t),
        (l.sibling = i),
        (t.child = l),
        t.mode & 1 && mn(t, e.child, null, a),
        (t.child.memoizedState = Js(a)),
        (t.memoizedState = qs),
        i);
  if (!(t.mode & 1)) return Ll(e, t, a, null);
  if (s.data === "$!") {
    if (((l = s.nextSibling && s.nextSibling.dataset), l)) var o = l.dgst;
    return (l = o), (i = Error(w(419))), (l = ms(i, l, void 0)), Ll(e, t, a, l);
  }
  if (((o = (a & e.childLanes) !== 0), he || o)) {
    if (((l = ne), l !== null)) {
      switch (a & -a) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (l.suspendedLanes | a) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), qe(e, s), Ie(l, e, s, -1));
    }
    return na(), (l = ms(Error(w(421)))), Ll(e, t, a, l);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Df.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (je = ft(s.nextSibling)),
      (Ne = t),
      (U = !0),
      (Re = null),
      e !== null &&
        ((be[Ce++] = Qe),
        (be[Ce++] = Ke),
        (be[Ce++] = Rt),
        (Qe = e.id),
        (Ke = e.overflow),
        (Rt = t)),
      (t = Yi(t, l.children)),
      (t.flags |= 4096),
      t);
}
function co(e, t, n) {
  e.lanes |= t;
  var l = e.alternate;
  l !== null && (l.lanes |= t), Gs(e.return, t, n);
}
function fs(e, t, n, l, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = l),
      (i.tail = n),
      (i.tailMode = s));
}
function Pu(e, t, n) {
  var l = t.pendingProps,
    s = l.revealOrder,
    i = l.tail;
  if ((ue(e, t, l.children, n), (l = V.current), l & 2))
    (l = (l & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && co(e, n, t);
        else if (e.tag === 19) co(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    l &= 1;
  }
  if (($(V, l), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && ur(e) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          fs(t, !1, s, n, i);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && ur(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        fs(t, !0, n, null, i);
        break;
      case "together":
        fs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Je(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (It |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = gt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = gt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Cf(e, t, n) {
  switch (t.tag) {
    case 3:
      Cu(t), dn();
      break;
    case 5:
      eu(t);
      break;
    case 1:
      ge(t.type) && rr(t);
      break;
    case 4:
      Ui(t, t.stateNode.containerInfo);
      break;
    case 10:
      var l = t.type._context,
        s = t.memoizedProps.value;
      $(ar, l._currentValue), (l._currentValue = s);
      break;
    case 13:
      if (((l = t.memoizedState), l !== null))
        return l.dehydrated !== null
          ? ($(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Eu(e, t, n)
          : ($(V, V.current & 1),
            (e = Je(e, t, n)),
            e !== null ? e.sibling : null);
      $(V, V.current & 1);
      break;
    case 19:
      if (((l = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (l) return Pu(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        $(V, V.current),
        l)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Su(e, t, n);
  }
  return Je(e, t, n);
}
var Mu, ei, zu, Tu;
Mu = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ei = function () {};
zu = function (e, t, n, l) {
  var s = e.memoizedProps;
  if (s !== l) {
    (e = t.stateNode), zt(We.current);
    var i = null;
    switch (n) {
      case "input":
        (s = ws(e, s)), (l = ws(e, l)), (i = []);
        break;
      case "select":
        (s = H({}, s, { value: void 0 })),
          (l = H({}, l, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (s = bs(e, s)), (l = bs(e, l)), (i = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof l.onClick == "function" &&
          (e.onclick = nr);
    }
    Es(n, l);
    var a;
    n = null;
    for (u in s)
      if (!l.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var o = s[u];
          for (a in o) o.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Vn.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in l) {
      var c = l[u];
      if (
        ((o = s != null ? s[u] : void 0),
        l.hasOwnProperty(u) && c !== o && (c != null || o != null))
      )
        if (u === "style")
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                o[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = c);
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (o = o ? o.__html : void 0),
              c != null && o !== c && (i = i || []).push(u, c))
            : u === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (i = i || []).push(u, "" + c)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Vn.hasOwnProperty(u)
                ? (c != null && u === "onScroll" && F("scroll", e),
                  i || o === c || (i = []))
                : (i = i || []).push(u, c));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Tu = function (e, t, n, l) {
  n !== l && (t.flags |= 4);
};
function Pn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var l = null; n !== null; )
          n.alternate !== null && (l = n), (n = n.sibling);
        l === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (l.sibling = null);
    }
}
function ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    l = 0;
  if (t)
    for (var s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (l |= s.subtreeFlags & 14680064),
        (l |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling);
  else
    for (s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (l |= s.subtreeFlags),
        (l |= s.flags),
        (s.return = e),
        (s = s.sibling);
  return (e.subtreeFlags |= l), (e.childLanes = n), t;
}
function Ef(e, t, n) {
  var l = t.pendingProps;
  switch ((Ri(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ae(t), null;
    case 1:
      return ge(t.type) && lr(), ae(t), null;
    case 3:
      return (
        (l = t.stateNode),
        fn(),
        B(xe),
        B(ce),
        Wi(),
        l.pendingContext &&
          ((l.context = l.pendingContext), (l.pendingContext = null)),
        (e === null || e.child === null) &&
          (zl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Re !== null && (oi(Re), (Re = null)))),
        ei(e, t),
        ae(t),
        null
      );
    case 5:
      Vi(t);
      var s = zt(tl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        zu(e, t, n, l, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!l) {
          if (t.stateNode === null) throw Error(w(166));
          return ae(t), null;
        }
        if (((e = zt(We.current)), zl(t))) {
          (l = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((l[Ue] = t), (l[Jn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", l), F("close", l);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", l);
              break;
            case "video":
            case "audio":
              for (s = 0; s < _n.length; s++) F(_n[s], l);
              break;
            case "source":
              F("error", l);
              break;
            case "img":
            case "image":
            case "link":
              F("error", l), F("load", l);
              break;
            case "details":
              F("toggle", l);
              break;
            case "input":
              va(l, i), F("invalid", l);
              break;
            case "select":
              (l._wrapperState = { wasMultiple: !!i.multiple }),
                F("invalid", l);
              break;
            case "textarea":
              ja(l, i), F("invalid", l);
          }
          Es(n, i), (s = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var o = i[a];
              a === "children"
                ? typeof o == "string"
                  ? l.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ml(l.textContent, o, e),
                    (s = ["children", o]))
                  : typeof o == "number" &&
                    l.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ml(l.textContent, o, e),
                    (s = ["children", "" + o]))
                : Vn.hasOwnProperty(a) &&
                  o != null &&
                  a === "onScroll" &&
                  F("scroll", l);
            }
          switch (n) {
            case "input":
              Nl(l), ya(l, i, !0);
              break;
            case "textarea":
              Nl(l), Na(l);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (l.onclick = nr);
          }
          (l = s), (t.updateQueue = l), l !== null && (t.flags |= 4);
        } else {
          (a = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = sc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof l.is == "string"
                ? (e = a.createElement(n, { is: l.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    l.multiple
                      ? (a.multiple = !0)
                      : l.size && (a.size = l.size)))
              : (e = a.createElementNS(e, n)),
            (e[Ue] = t),
            (e[Jn] = l),
            Mu(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Ps(n, l)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (s = l);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (s = l);
                break;
              case "video":
              case "audio":
                for (s = 0; s < _n.length; s++) F(_n[s], e);
                s = l;
                break;
              case "source":
                F("error", e), (s = l);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (s = l);
                break;
              case "details":
                F("toggle", e), (s = l);
                break;
              case "input":
                va(e, l), (s = ws(e, l)), F("invalid", e);
                break;
              case "option":
                s = l;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!l.multiple }),
                  (s = H({}, l, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                ja(e, l), (s = bs(e, l)), F("invalid", e);
                break;
              default:
                s = l;
            }
            Es(n, s), (o = s);
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var c = o[i];
                i === "style"
                  ? oc(e, c)
                  : i === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && ic(e, c))
                  : i === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && Wn(e, c)
                    : typeof c == "number" && Wn(e, "" + c)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Vn.hasOwnProperty(i)
                      ? c != null && i === "onScroll" && F("scroll", e)
                      : c != null && ji(e, i, c, a));
              }
            switch (n) {
              case "input":
                Nl(e), ya(e, l, !1);
                break;
              case "textarea":
                Nl(e), Na(e);
                break;
              case "option":
                l.value != null && e.setAttribute("value", "" + yt(l.value));
                break;
              case "select":
                (e.multiple = !!l.multiple),
                  (i = l.value),
                  i != null
                    ? nn(e, !!l.multiple, i, !1)
                    : l.defaultValue != null &&
                      nn(e, !!l.multiple, l.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = nr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
          }
          l && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ae(t), null;
    case 6:
      if (e && t.stateNode != null) Tu(e, t, e.memoizedProps, l);
      else {
        if (typeof l != "string" && t.stateNode === null) throw Error(w(166));
        if (((n = zt(tl.current)), zt(We.current), zl(t))) {
          if (
            ((l = t.stateNode),
            (n = t.memoizedProps),
            (l[Ue] = t),
            (i = l.nodeValue !== n) && ((e = Ne), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ml(l.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ml(l.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (l = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(l)),
            (l[Ue] = t),
            (t.stateNode = l);
      }
      return ae(t), null;
    case 13:
      if (
        (B(V),
        (l = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && je !== null && t.mode & 1 && !(t.flags & 128))
          Xc(), dn(), (t.flags |= 98560), (i = !1);
        else if (((i = zl(t)), l !== null && l.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(w(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(w(317));
            i[Ue] = t;
          } else
            dn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ae(t), (i = !1);
        } else Re !== null && (oi(Re), (Re = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((l = l !== null),
          l !== (e !== null && e.memoizedState !== null) &&
            l &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || V.current & 1 ? J === 0 && (J = 3) : na())),
          t.updateQueue !== null && (t.flags |= 4),
          ae(t),
          null);
    case 4:
      return (
        fn(), ei(e, t), e === null && Zn(t.stateNode.containerInfo), ae(t), null
      );
    case 10:
      return $i(t.type._context), ae(t), null;
    case 17:
      return ge(t.type) && lr(), ae(t), null;
    case 19:
      if ((B(V), (i = t.memoizedState), i === null)) return ae(t), null;
      if (((l = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (l) Pn(i, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = ur(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Pn(i, !1),
                    l = a.updateQueue,
                    l !== null && ((t.updateQueue = l), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    l = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = l),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return $(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            X() > hn &&
            ((t.flags |= 128), (l = !0), Pn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!l)
          if (((e = ur(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (l = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !U)
            )
              return ae(t), null;
          } else
            2 * X() - i.renderingStartTime > hn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (l = !0), Pn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = X()),
          (t.sibling = null),
          (n = V.current),
          $(V, l ? (n & 1) | 2 : n & 1),
          t)
        : (ae(t), null);
    case 22:
    case 23:
      return (
        ta(),
        (l = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== l && (t.flags |= 8192),
        l && t.mode & 1
          ? ye & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function Pf(e, t) {
  switch ((Ri(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && lr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        fn(),
        B(xe),
        B(ce),
        Wi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Vi(t), null;
    case 13:
      if ((B(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        dn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(V), null;
    case 4:
      return fn(), null;
    case 10:
      return $i(t.type._context), null;
    case 22:
    case 23:
      return ta(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _l = !1,
  oe = !1,
  Mf = typeof WeakSet == "function" ? WeakSet : Set,
  b = null;
function en(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (l) {
        G(e, t, l);
      }
    else n.current = null;
}
function ti(e, t, n) {
  try {
    n();
  } catch (l) {
    G(e, t, l);
  }
}
var uo = !1;
function zf(e, t) {
  if (((Ds = Jl), (e = Oc()), _i(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var l = n.getSelection && n.getSelection();
        if (l && l.rangeCount !== 0) {
          n = l.anchorNode;
          var s = l.anchorOffset,
            i = l.focusNode;
          l = l.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            o = -1,
            c = -1,
            u = 0,
            p = 0,
            d = e,
            g = null;
          t: for (;;) {
            for (
              var x;
              d !== n || (s !== 0 && d.nodeType !== 3) || (o = a + s),
                d !== i || (l !== 0 && d.nodeType !== 3) || (c = a + l),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (x = d.firstChild) !== null;

            )
              (g = d), (d = x);
            for (;;) {
              if (d === e) break t;
              if (
                (g === n && ++u === s && (o = a),
                g === i && ++p === l && (c = a),
                (x = d.nextSibling) !== null)
              )
                break;
              (d = g), (g = d.parentNode);
            }
            d = x;
          }
          n = o === -1 || c === -1 ? null : { start: o, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($s = { focusedElem: e, selectionRange: n }, Jl = !1, b = t; b !== null; )
    if (((t = b), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (b = e);
    else
      for (; b !== null; ) {
        t = b;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    k = v.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : _e(t.type, y),
                      k
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (j) {
          G(t, t.return, j);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (b = e);
          break;
        }
        b = t.return;
      }
  return (v = uo), (uo = !1), v;
}
function Fn(e, t, n) {
  var l = t.updateQueue;
  if (((l = l !== null ? l.lastEffect : null), l !== null)) {
    var s = (l = l.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        (s.destroy = void 0), i !== void 0 && ti(t, n, i);
      }
      s = s.next;
    } while (s !== l);
  }
}
function Lr(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var l = n.create;
        n.destroy = l();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ni(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Lu(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Lu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Jn], delete t[Us], delete t[mf], delete t[ff])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function _u(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function mo(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _u(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function li(e, t, n) {
  var l = e.tag;
  if (l === 5 || l === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = nr));
  else if (l !== 4 && ((e = e.child), e !== null))
    for (li(e, t, n), e = e.sibling; e !== null; ) li(e, t, n), (e = e.sibling);
}
function ri(e, t, n) {
  var l = e.tag;
  if (l === 5 || l === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (l !== 4 && ((e = e.child), e !== null))
    for (ri(e, t, n), e = e.sibling; e !== null; ) ri(e, t, n), (e = e.sibling);
}
var le = null,
  Ae = !1;
function nt(e, t, n) {
  for (n = n.child; n !== null; ) Au(e, t, n), (n = n.sibling);
}
function Au(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function")
    try {
      Ve.onCommitFiberUnmount(Sr, n);
    } catch {}
  switch (n.tag) {
    case 5:
      oe || en(n, t);
    case 6:
      var l = le,
        s = Ae;
      (le = null),
        nt(e, t, n),
        (le = l),
        (Ae = s),
        le !== null &&
          (Ae
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (Ae
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? is(e.parentNode, n)
              : e.nodeType === 1 && is(e, n),
            Kn(e))
          : is(le, n.stateNode));
      break;
    case 4:
      (l = le),
        (s = Ae),
        (le = n.stateNode.containerInfo),
        (Ae = !0),
        nt(e, t, n),
        (le = l),
        (Ae = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !oe &&
        ((l = n.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
      ) {
        s = l = l.next;
        do {
          var i = s,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && ti(n, t, a),
            (s = s.next);
        } while (s !== l);
      }
      nt(e, t, n);
      break;
    case 1:
      if (
        !oe &&
        (en(n, t),
        (l = n.stateNode),
        typeof l.componentWillUnmount == "function")
      )
        try {
          (l.props = n.memoizedProps),
            (l.state = n.memoizedState),
            l.componentWillUnmount();
        } catch (o) {
          G(n, t, o);
        }
      nt(e, t, n);
      break;
    case 21:
      nt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((oe = (l = oe) || n.memoizedState !== null), nt(e, t, n), (oe = l))
        : nt(e, t, n);
      break;
    default:
      nt(e, t, n);
  }
}
function fo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Mf()),
      t.forEach(function (l) {
        var s = $f.bind(null, e, l);
        n.has(l) || (n.add(l), l.then(s, s));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var l = 0; l < n.length; l++) {
      var s = n[l];
      try {
        var i = e,
          a = t,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (le = o.stateNode), (Ae = !1);
              break e;
            case 3:
              (le = o.stateNode.containerInfo), (Ae = !0);
              break e;
            case 4:
              (le = o.stateNode.containerInfo), (Ae = !0);
              break e;
          }
          o = o.return;
        }
        if (le === null) throw Error(w(160));
        Au(i, a, s), (le = null), (Ae = !1);
        var c = s.alternate;
        c !== null && (c.return = null), (s.return = null);
      } catch (u) {
        G(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ru(t, e), (t = t.sibling);
}
function Ru(e, t) {
  var n = e.alternate,
    l = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), $e(e), l & 4)) {
        try {
          Fn(3, e, e.return), Lr(3, e);
        } catch (y) {
          G(e, e.return, y);
        }
        try {
          Fn(5, e, e.return);
        } catch (y) {
          G(e, e.return, y);
        }
      }
      break;
    case 1:
      Le(t, e), $e(e), l & 512 && n !== null && en(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        $e(e),
        l & 512 && n !== null && en(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Wn(s, "");
        } catch (y) {
          G(e, e.return, y);
        }
      }
      if (l & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          o = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            o === "input" && i.type === "radio" && i.name != null && lc(s, i),
              Ps(o, a);
            var u = Ps(o, i);
            for (a = 0; a < c.length; a += 2) {
              var p = c[a],
                d = c[a + 1];
              p === "style"
                ? oc(s, d)
                : p === "dangerouslySetInnerHTML"
                ? ic(s, d)
                : p === "children"
                ? Wn(s, d)
                : ji(s, p, d, u);
            }
            switch (o) {
              case "input":
                ks(s, i);
                break;
              case "textarea":
                rc(s, i);
                break;
              case "select":
                var g = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? nn(s, !!i.multiple, x, !1)
                  : g !== !!i.multiple &&
                    (i.defaultValue != null
                      ? nn(s, !!i.multiple, i.defaultValue, !0)
                      : nn(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[Jn] = i;
          } catch (y) {
            G(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Le(t, e), $e(e), l & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (s = e.stateNode), (i = e.memoizedProps);
        try {
          s.nodeValue = i;
        } catch (y) {
          G(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), $e(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Kn(t.containerInfo);
        } catch (y) {
          G(e, e.return, y);
        }
      break;
    case 4:
      Le(t, e), $e(e);
      break;
    case 13:
      Le(t, e),
        $e(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Ji = X())),
        l & 4 && fo(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((oe = (u = oe) || p), Le(t, e), (oe = u)) : Le(t, e),
        $e(e),
        l & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !p && e.mode & 1)
        )
          for (b = e, p = e.child; p !== null; ) {
            for (d = b = p; b !== null; ) {
              switch (((g = b), (x = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fn(4, g, g.return);
                  break;
                case 1:
                  en(g, g.return);
                  var v = g.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (l = g), (n = g.return);
                    try {
                      (t = l),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      G(l, n, y);
                    }
                  }
                  break;
                case 5:
                  en(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    ho(d);
                    continue;
                  }
              }
              x !== null ? ((x.return = g), (b = x)) : ho(d);
            }
            p = p.sibling;
          }
        e: for (p = null, d = e; ; ) {
          if (d.tag === 5) {
            if (p === null) {
              p = d;
              try {
                (s = d.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = d.stateNode),
                      (c = d.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (o.style.display = ac("display", a)));
              } catch (y) {
                G(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (p === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (y) {
                G(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            p === d && (p = null), (d = d.return);
          }
          p === d && (p = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Le(t, e), $e(e), l & 4 && fo(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), $e(e);
  }
}
function $e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_u(n)) {
            var l = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (l.tag) {
        case 5:
          var s = l.stateNode;
          l.flags & 32 && (Wn(s, ""), (l.flags &= -33));
          var i = mo(e);
          ri(e, i, s);
          break;
        case 3:
        case 4:
          var a = l.stateNode.containerInfo,
            o = mo(e);
          li(e, o, a);
          break;
        default:
          throw Error(w(161));
      }
    } catch (c) {
      G(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Tf(e, t, n) {
  (b = e), Ou(e);
}
function Ou(e, t, n) {
  for (var l = (e.mode & 1) !== 0; b !== null; ) {
    var s = b,
      i = s.child;
    if (s.tag === 22 && l) {
      var a = s.memoizedState !== null || _l;
      if (!a) {
        var o = s.alternate,
          c = (o !== null && o.memoizedState !== null) || oe;
        o = _l;
        var u = oe;
        if (((_l = a), (oe = c) && !u))
          for (b = s; b !== null; )
            (a = b),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? xo(s)
                : c !== null
                ? ((c.return = a), (b = c))
                : xo(s);
        for (; i !== null; ) (b = i), Ou(i), (i = i.sibling);
        (b = s), (_l = o), (oe = u);
      }
      po(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (b = i)) : po(e);
  }
}
function po(e) {
  for (; b !== null; ) {
    var t = b;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              oe || Lr(5, t);
              break;
            case 1:
              var l = t.stateNode;
              if (t.flags & 4 && !oe)
                if (n === null) l.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : _e(t.type, n.memoizedProps);
                  l.componentDidUpdate(
                    s,
                    n.memoizedState,
                    l.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Za(t, i, l);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Za(t, a, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var p = u.memoizedState;
                  if (p !== null) {
                    var d = p.dehydrated;
                    d !== null && Kn(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(w(163));
          }
        oe || (t.flags & 512 && ni(t));
      } catch (g) {
        G(t, t.return, g);
      }
    }
    if (t === e) {
      b = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (b = n);
      break;
    }
    b = t.return;
  }
}
function ho(e) {
  for (; b !== null; ) {
    var t = b;
    if (t === e) {
      b = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (b = n);
      break;
    }
    b = t.return;
  }
}
function xo(e) {
  for (; b !== null; ) {
    var t = b;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Lr(4, t);
          } catch (c) {
            G(t, n, c);
          }
          break;
        case 1:
          var l = t.stateNode;
          if (typeof l.componentDidMount == "function") {
            var s = t.return;
            try {
              l.componentDidMount();
            } catch (c) {
              G(t, s, c);
            }
          }
          var i = t.return;
          try {
            ni(t);
          } catch (c) {
            G(t, i, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            ni(t);
          } catch (c) {
            G(t, a, c);
          }
      }
    } catch (c) {
      G(t, t.return, c);
    }
    if (t === e) {
      b = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (b = o);
      break;
    }
    b = t.return;
  }
}
var Lf = Math.ceil,
  fr = tt.ReactCurrentDispatcher,
  Zi = tt.ReactCurrentOwner,
  Pe = tt.ReactCurrentBatchConfig,
  I = 0,
  ne = null,
  Y = null,
  re = 0,
  ye = 0,
  tn = wt(0),
  J = 0,
  sl = null,
  It = 0,
  _r = 0,
  qi = 0,
  Bn = null,
  pe = null,
  Ji = 0,
  hn = 1 / 0,
  He = null,
  pr = !1,
  si = null,
  ht = null,
  Al = !1,
  ot = null,
  hr = 0,
  Un = 0,
  ii = null,
  Hl = -1,
  Gl = 0;
function de() {
  return I & 6 ? X() : Hl !== -1 ? Hl : (Hl = X());
}
function xt(e) {
  return e.mode & 1
    ? I & 2 && re !== 0
      ? re & -re
      : hf.transition !== null
      ? (Gl === 0 && (Gl = jc()), Gl)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ec(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, l) {
  if (50 < Un) throw ((Un = 0), (ii = null), Error(w(185)));
  ul(e, n, l),
    (!(I & 2) || e !== ne) &&
      (e === ne && (!(I & 2) && (_r |= n), J === 4 && it(e, re)),
      ve(e, l),
      n === 1 && I === 0 && !(t.mode & 1) && ((hn = X() + 500), Mr && kt()));
}
function ve(e, t) {
  var n = e.callbackNode;
  pm(e, t);
  var l = ql(e, e === ne ? re : 0);
  if (l === 0)
    n !== null && Sa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = l & -l), e.callbackPriority !== t)) {
    if ((n != null && Sa(n), t === 1))
      e.tag === 0 ? pf(go.bind(null, e)) : Gc(go.bind(null, e)),
        uf(function () {
          !(I & 6) && kt();
        }),
        (n = null);
    else {
      switch (Nc(l)) {
        case 1:
          n = bi;
          break;
        case 4:
          n = vc;
          break;
        case 16:
          n = Zl;
          break;
        case 536870912:
          n = yc;
          break;
        default:
          n = Zl;
      }
      n = Wu(n, Iu.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Iu(e, t) {
  if (((Hl = -1), (Gl = 0), I & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (on() && e.callbackNode !== n) return null;
  var l = ql(e, e === ne ? re : 0);
  if (l === 0) return null;
  if (l & 30 || l & e.expiredLanes || t) t = xr(e, l);
  else {
    t = l;
    var s = I;
    I |= 2;
    var i = $u();
    (ne !== e || re !== t) && ((He = null), (hn = X() + 500), Tt(e, t));
    do
      try {
        Rf();
        break;
      } catch (o) {
        Du(e, o);
      }
    while (!0);
    Di(),
      (fr.current = i),
      (I = s),
      Y !== null ? (t = 0) : ((ne = null), (re = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = _s(e)), s !== 0 && ((l = s), (t = ai(e, s)))), t === 1)
    )
      throw ((n = sl), Tt(e, 0), it(e, l), ve(e, X()), n);
    if (t === 6) it(e, l);
    else {
      if (
        ((s = e.current.alternate),
        !(l & 30) &&
          !_f(s) &&
          ((t = xr(e, l)),
          t === 2 && ((i = _s(e)), i !== 0 && ((l = i), (t = ai(e, i)))),
          t === 1))
      )
        throw ((n = sl), Tt(e, 0), it(e, l), ve(e, X()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = l), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Et(e, pe, He);
          break;
        case 3:
          if (
            (it(e, l), (l & 130023424) === l && ((t = Ji + 500 - X()), 10 < t))
          ) {
            if (ql(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & l) !== l)) {
              de(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = Bs(Et.bind(null, e, pe, He), t);
            break;
          }
          Et(e, pe, He);
          break;
        case 4:
          if ((it(e, l), (l & 4194240) === l)) break;
          for (t = e.eventTimes, s = -1; 0 < l; ) {
            var a = 31 - Oe(l);
            (i = 1 << a), (a = t[a]), a > s && (s = a), (l &= ~i);
          }
          if (
            ((l = s),
            (l = X() - l),
            (l =
              (120 > l
                ? 120
                : 480 > l
                ? 480
                : 1080 > l
                ? 1080
                : 1920 > l
                ? 1920
                : 3e3 > l
                ? 3e3
                : 4320 > l
                ? 4320
                : 1960 * Lf(l / 1960)) - l),
            10 < l)
          ) {
            e.timeoutHandle = Bs(Et.bind(null, e, pe, He), l);
            break;
          }
          Et(e, pe, He);
          break;
        case 5:
          Et(e, pe, He);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return ve(e, X()), e.callbackNode === n ? Iu.bind(null, e) : null;
}
function ai(e, t) {
  var n = Bn;
  return (
    e.current.memoizedState.isDehydrated && (Tt(e, t).flags |= 256),
    (e = xr(e, t)),
    e !== 2 && ((t = pe), (pe = n), t !== null && oi(t)),
    e
  );
}
function oi(e) {
  pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function _f(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var l = 0; l < n.length; l++) {
          var s = n[l],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!De(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function it(e, t) {
  for (
    t &= ~qi,
      t &= ~_r,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      l = 1 << n;
    (e[n] = -1), (t &= ~l);
  }
}
function go(e) {
  if (I & 6) throw Error(w(327));
  on();
  var t = ql(e, 0);
  if (!(t & 1)) return ve(e, X()), null;
  var n = xr(e, t);
  if (e.tag !== 0 && n === 2) {
    var l = _s(e);
    l !== 0 && ((t = l), (n = ai(e, l)));
  }
  if (n === 1) throw ((n = sl), Tt(e, 0), it(e, t), ve(e, X()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Et(e, pe, He),
    ve(e, X()),
    null
  );
}
function ea(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((hn = X() + 500), Mr && kt());
  }
}
function Dt(e) {
  ot !== null && ot.tag === 0 && !(I & 6) && on();
  var t = I;
  I |= 1;
  var n = Pe.transition,
    l = D;
  try {
    if (((Pe.transition = null), (D = 1), e)) return e();
  } finally {
    (D = l), (Pe.transition = n), (I = t), !(I & 6) && kt();
  }
}
function ta() {
  (ye = tn.current), B(tn);
}
function Tt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), cf(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var l = n;
      switch ((Ri(l), l.tag)) {
        case 1:
          (l = l.type.childContextTypes), l != null && lr();
          break;
        case 3:
          fn(), B(xe), B(ce), Wi();
          break;
        case 5:
          Vi(l);
          break;
        case 4:
          fn();
          break;
        case 13:
          B(V);
          break;
        case 19:
          B(V);
          break;
        case 10:
          $i(l.type._context);
          break;
        case 22:
        case 23:
          ta();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (Y = e = gt(e.current, null)),
    (re = ye = t),
    (J = 0),
    (sl = null),
    (qi = _r = It = 0),
    (pe = Bn = null),
    Mt !== null)
  ) {
    for (t = 0; t < Mt.length; t++)
      if (((n = Mt[t]), (l = n.interleaved), l !== null)) {
        n.interleaved = null;
        var s = l.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = s), (l.next = a);
        }
        n.pending = l;
      }
    Mt = null;
  }
  return e;
}
function Du(e, t) {
  do {
    var n = Y;
    try {
      if ((Di(), (Ul.current = mr), dr)) {
        for (var l = W.memoizedState; l !== null; ) {
          var s = l.queue;
          s !== null && (s.pending = null), (l = l.next);
        }
        dr = !1;
      }
      if (
        ((Ot = 0),
        (te = q = W = null),
        ($n = !1),
        (nl = 0),
        (Zi.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (sl = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          o = n,
          c = t;
        if (
          ((t = re),
          (o.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            p = o,
            d = p.tag;
          if (!(p.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var g = p.alternate;
            g
              ? ((p.updateQueue = g.updateQueue),
                (p.memoizedState = g.memoizedState),
                (p.lanes = g.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var x = lo(a);
          if (x !== null) {
            (x.flags &= -257),
              ro(x, a, o, i, t),
              x.mode & 1 && no(i, u, t),
              (t = x),
              (c = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(c), (t.updateQueue = y);
            } else v.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              no(i, u, t), na();
              break e;
            }
            c = Error(w(426));
          }
        } else if (U && o.mode & 1) {
          var k = lo(a);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              ro(k, a, o, i, t),
              Oi(pn(c, o));
            break e;
          }
        }
        (i = c = pn(c, o)),
          J !== 4 && (J = 2),
          Bn === null ? (Bn = [i]) : Bn.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = Nu(i, c, t);
              Ya(i, h);
              break e;
            case 1:
              o = c;
              var f = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (ht === null || !ht.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var j = wu(i, o, t);
                Ya(i, j);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Bu(n);
    } catch (S) {
      (t = S), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function $u() {
  var e = fr.current;
  return (fr.current = mr), e === null ? mr : e;
}
function na() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    ne === null || (!(It & 268435455) && !(_r & 268435455)) || it(ne, re);
}
function xr(e, t) {
  var n = I;
  I |= 2;
  var l = $u();
  (ne !== e || re !== t) && ((He = null), Tt(e, t));
  do
    try {
      Af();
      break;
    } catch (s) {
      Du(e, s);
    }
  while (!0);
  if ((Di(), (I = n), (fr.current = l), Y !== null)) throw Error(w(261));
  return (ne = null), (re = 0), J;
}
function Af() {
  for (; Y !== null; ) Fu(Y);
}
function Rf() {
  for (; Y !== null && !sm(); ) Fu(Y);
}
function Fu(e) {
  var t = Vu(e.alternate, e, ye);
  (e.memoizedProps = e.pendingProps),
    t === null ? Bu(e) : (Y = t),
    (Zi.current = null);
}
function Bu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Pf(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (Y = null);
        return;
      }
    } else if (((n = Ef(n, t, ye)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function Et(e, t, n) {
  var l = D,
    s = Pe.transition;
  try {
    (Pe.transition = null), (D = 1), Of(e, t, n, l);
  } finally {
    (Pe.transition = s), (D = l);
  }
  return null;
}
function Of(e, t, n, l) {
  do on();
  while (ot !== null);
  if (I & 6) throw Error(w(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (hm(e, i),
    e === ne && ((Y = ne = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Al ||
      ((Al = !0),
      Wu(Zl, function () {
        return on(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Pe.transition), (Pe.transition = null);
    var a = D;
    D = 1;
    var o = I;
    (I |= 4),
      (Zi.current = null),
      zf(e, n),
      Ru(n, e),
      tf($s),
      (Jl = !!Ds),
      ($s = Ds = null),
      (e.current = n),
      Tf(n),
      im(),
      (I = o),
      (D = a),
      (Pe.transition = i);
  } else e.current = n;
  if (
    (Al && ((Al = !1), (ot = e), (hr = s)),
    (i = e.pendingLanes),
    i === 0 && (ht = null),
    cm(n.stateNode),
    ve(e, X()),
    t !== null)
  )
    for (l = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), l(s.value, { componentStack: s.stack, digest: s.digest });
  if (pr) throw ((pr = !1), (e = si), (si = null), e);
  return (
    hr & 1 && e.tag !== 0 && on(),
    (i = e.pendingLanes),
    i & 1 ? (e === ii ? Un++ : ((Un = 0), (ii = e))) : (Un = 0),
    kt(),
    null
  );
}
function on() {
  if (ot !== null) {
    var e = Nc(hr),
      t = Pe.transition,
      n = D;
    try {
      if (((Pe.transition = null), (D = 16 > e ? 16 : e), ot === null))
        var l = !1;
      else {
        if (((e = ot), (ot = null), (hr = 0), I & 6)) throw Error(w(331));
        var s = I;
        for (I |= 4, b = e.current; b !== null; ) {
          var i = b,
            a = i.child;
          if (b.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var c = 0; c < o.length; c++) {
                var u = o[c];
                for (b = u; b !== null; ) {
                  var p = b;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fn(8, p, i);
                  }
                  var d = p.child;
                  if (d !== null) (d.return = p), (b = d);
                  else
                    for (; b !== null; ) {
                      p = b;
                      var g = p.sibling,
                        x = p.return;
                      if ((Lu(p), p === u)) {
                        b = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = x), (b = g);
                        break;
                      }
                      b = x;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var k = y.sibling;
                    (y.sibling = null), (y = k);
                  } while (y !== null);
                }
              }
              b = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (b = a);
          else
            e: for (; b !== null; ) {
              if (((i = b), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fn(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (b = h);
                break e;
              }
              b = i.return;
            }
        }
        var f = e.current;
        for (b = f; b !== null; ) {
          a = b;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (b = m);
          else
            e: for (a = f; b !== null; ) {
              if (((o = b), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lr(9, o);
                  }
                } catch (S) {
                  G(o, o.return, S);
                }
              if (o === a) {
                b = null;
                break e;
              }
              var j = o.sibling;
              if (j !== null) {
                (j.return = o.return), (b = j);
                break e;
              }
              b = o.return;
            }
        }
        if (
          ((I = s), kt(), Ve && typeof Ve.onPostCommitFiberRoot == "function")
        )
          try {
            Ve.onPostCommitFiberRoot(Sr, e);
          } catch {}
        l = !0;
      }
      return l;
    } finally {
      (D = n), (Pe.transition = t);
    }
  }
  return !1;
}
function vo(e, t, n) {
  (t = pn(n, t)),
    (t = Nu(e, t, 1)),
    (e = pt(e, t, 1)),
    (t = de()),
    e !== null && (ul(e, 1, t), ve(e, t));
}
function G(e, t, n) {
  if (e.tag === 3) vo(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vo(t, e, n);
        break;
      } else if (t.tag === 1) {
        var l = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof l.componentDidCatch == "function" &&
            (ht === null || !ht.has(l)))
        ) {
          (e = pn(n, e)),
            (e = wu(t, e, 1)),
            (t = pt(t, e, 1)),
            (e = de()),
            t !== null && (ul(t, 1, e), ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function If(e, t, n) {
  var l = e.pingCache;
  l !== null && l.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (re & n) === n &&
      (J === 4 || (J === 3 && (re & 130023424) === re && 500 > X() - Ji)
        ? Tt(e, 0)
        : (qi |= n)),
    ve(e, t);
}
function Uu(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Sl), (Sl <<= 1), !(Sl & 130023424) && (Sl = 4194304))
      : (t = 1));
  var n = de();
  (e = qe(e, t)), e !== null && (ul(e, t, n), ve(e, n));
}
function Df(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Uu(e, n);
}
function $f(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var l = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      l = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  l !== null && l.delete(t), Uu(e, n);
}
var Vu;
Vu = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xe.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (he = !1), Cf(e, t, n);
      he = !!(e.flags & 131072);
    }
  else (he = !1), U && t.flags & 1048576 && Qc(t, ir, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var l = t.type;
      Wl(e, t), (e = t.pendingProps);
      var s = un(t, ce.current);
      an(t, n), (s = Gi(null, t, l, e, s, n));
      var i = Qi();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(l) ? ((i = !0), rr(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Bi(t),
            (s.updater = Tr),
            (t.stateNode = s),
            (s._reactInternals = t),
            Ks(t, l, e, n),
            (t = Zs(null, t, l, !0, i, n)))
          : ((t.tag = 0), U && i && Ai(t), ue(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      l = t.elementType;
      e: {
        switch (
          (Wl(e, t),
          (e = t.pendingProps),
          (s = l._init),
          (l = s(l._payload)),
          (t.type = l),
          (s = t.tag = Bf(l)),
          (e = _e(l, e)),
          s)
        ) {
          case 0:
            t = Ys(null, t, l, e, n);
            break e;
          case 1:
            t = ao(null, t, l, e, n);
            break e;
          case 11:
            t = so(null, t, l, e, n);
            break e;
          case 14:
            t = io(null, t, l, _e(l.type, e), n);
            break e;
        }
        throw Error(w(306, l, ""));
      }
      return t;
    case 0:
      return (
        (l = t.type),
        (s = t.pendingProps),
        (s = t.elementType === l ? s : _e(l, s)),
        Ys(e, t, l, s, n)
      );
    case 1:
      return (
        (l = t.type),
        (s = t.pendingProps),
        (s = t.elementType === l ? s : _e(l, s)),
        ao(e, t, l, s, n)
      );
    case 3:
      e: {
        if ((Cu(t), e === null)) throw Error(w(387));
        (l = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          Jc(e, t),
          cr(t, l, null, n);
        var a = t.memoizedState;
        if (((l = a.element), i.isDehydrated))
          if (
            ((i = {
              element: l,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (s = pn(Error(w(423)), t)), (t = oo(e, t, l, n, s));
            break e;
          } else if (l !== s) {
            (s = pn(Error(w(424)), t)), (t = oo(e, t, l, n, s));
            break e;
          } else
            for (
              je = ft(t.stateNode.containerInfo.firstChild),
                Ne = t,
                U = !0,
                Re = null,
                n = Zc(t, null, l, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((dn(), l === s)) {
            t = Je(e, t, n);
            break e;
          }
          ue(e, t, l, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        eu(t),
        e === null && Hs(t),
        (l = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = s.children),
        Fs(l, s) ? (a = null) : i !== null && Fs(l, i) && (t.flags |= 32),
        bu(e, t),
        ue(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Hs(t), null;
    case 13:
      return Eu(e, t, n);
    case 4:
      return (
        Ui(t, t.stateNode.containerInfo),
        (l = t.pendingProps),
        e === null ? (t.child = mn(t, null, l, n)) : ue(e, t, l, n),
        t.child
      );
    case 11:
      return (
        (l = t.type),
        (s = t.pendingProps),
        (s = t.elementType === l ? s : _e(l, s)),
        so(e, t, l, s, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((l = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (a = s.value),
          $(ar, l._currentValue),
          (l._currentValue = a),
          i !== null)
        )
          if (De(i.value, a)) {
            if (i.children === s.children && !xe.current) {
              t = Je(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                a = i.child;
                for (var c = o.firstContext; c !== null; ) {
                  if (c.context === l) {
                    if (i.tag === 1) {
                      (c = Xe(-1, n & -n)), (c.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var p = u.pending;
                        p === null
                          ? (c.next = c)
                          : ((c.next = p.next), (p.next = c)),
                          (u.pending = c);
                      }
                    }
                    (i.lanes |= n),
                      (c = i.alternate),
                      c !== null && (c.lanes |= n),
                      Gs(i.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(w(341));
                (a.lanes |= n),
                  (o = a.alternate),
                  o !== null && (o.lanes |= n),
                  Gs(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        ue(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (l = t.pendingProps.children),
        an(t, n),
        (s = Me(s)),
        (l = l(s)),
        (t.flags |= 1),
        ue(e, t, l, n),
        t.child
      );
    case 14:
      return (
        (l = t.type),
        (s = _e(l, t.pendingProps)),
        (s = _e(l.type, s)),
        io(e, t, l, s, n)
      );
    case 15:
      return ku(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (l = t.type),
        (s = t.pendingProps),
        (s = t.elementType === l ? s : _e(l, s)),
        Wl(e, t),
        (t.tag = 1),
        ge(l) ? ((e = !0), rr(t)) : (e = !1),
        an(t, n),
        ju(t, l, s),
        Ks(t, l, s, n),
        Zs(null, t, l, !0, e, n)
      );
    case 19:
      return Pu(e, t, n);
    case 22:
      return Su(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function Wu(e, t) {
  return gc(e, t);
}
function Ff(e, t, n, l) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = l),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, t, n, l) {
  return new Ff(e, t, n, l);
}
function la(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Bf(e) {
  if (typeof e == "function") return la(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wi)) return 11;
    if (e === ki) return 14;
  }
  return 2;
}
function gt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ql(e, t, n, l, s, i) {
  var a = 2;
  if (((l = e), typeof e == "function")) la(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Ht:
        return Lt(n.children, s, i, t);
      case Ni:
        (a = 8), (s |= 8);
        break;
      case vs:
        return (
          (e = Ee(12, n, t, s | 2)), (e.elementType = vs), (e.lanes = i), e
        );
      case ys:
        return (e = Ee(13, n, t, s)), (e.elementType = ys), (e.lanes = i), e;
      case js:
        return (e = Ee(19, n, t, s)), (e.elementType = js), (e.lanes = i), e;
      case ec:
        return Ar(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case qo:
              a = 10;
              break e;
            case Jo:
              a = 9;
              break e;
            case wi:
              a = 11;
              break e;
            case ki:
              a = 14;
              break e;
            case lt:
              (a = 16), (l = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ee(a, n, t, s)), (t.elementType = e), (t.type = l), (t.lanes = i), t
  );
}
function Lt(e, t, n, l) {
  return (e = Ee(7, e, l, t)), (e.lanes = n), e;
}
function Ar(e, t, n, l) {
  return (
    (e = Ee(22, e, l, t)),
    (e.elementType = ec),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ps(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function hs(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Uf(e, t, n, l, s) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Xr(0)),
    (this.expirationTimes = Xr(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xr(0)),
    (this.identifierPrefix = l),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function ra(e, t, n, l, s, i, a, o, c) {
  return (
    (e = new Uf(e, t, n, o, c)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ee(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bi(i),
    e
  );
}
function Vf(e, t, n) {
  var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wt,
    key: l == null ? null : "" + l,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Hu(e) {
  if (!e) return jt;
  e = e._reactInternals;
  e: {
    if (Ft(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return Hc(e, n, t);
  }
  return t;
}
function Gu(e, t, n, l, s, i, a, o, c) {
  return (
    (e = ra(n, l, !0, e, s, i, a, o, c)),
    (e.context = Hu(null)),
    (n = e.current),
    (l = de()),
    (s = xt(n)),
    (i = Xe(l, s)),
    (i.callback = t ?? null),
    pt(n, i, s),
    (e.current.lanes = s),
    ul(e, s, l),
    ve(e, l),
    e
  );
}
function Rr(e, t, n, l) {
  var s = t.current,
    i = de(),
    a = xt(s);
  return (
    (n = Hu(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Xe(i, a)),
    (t.payload = { element: e }),
    (l = l === void 0 ? null : l),
    l !== null && (t.callback = l),
    (e = pt(s, t, a)),
    e !== null && (Ie(e, s, a, i), Bl(e, s, a)),
    a
  );
}
function gr(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function yo(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function sa(e, t) {
  yo(e, t), (e = e.alternate) && yo(e, t);
}
function Wf() {
  return null;
}
var Qu =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ia(e) {
  this._internalRoot = e;
}
Or.prototype.render = ia.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  Rr(e, t, null, null);
};
Or.prototype.unmount = ia.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Dt(function () {
      Rr(null, e, null, null);
    }),
      (t[Ze] = null);
  }
};
function Or(e) {
  this._internalRoot = e;
}
Or.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < st.length && t !== 0 && t < st[n].priority; n++);
    st.splice(n, 0, e), n === 0 && Cc(e);
  }
};
function aa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ir(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function jo() {}
function Hf(e, t, n, l, s) {
  if (s) {
    if (typeof l == "function") {
      var i = l;
      l = function () {
        var u = gr(a);
        i.call(u);
      };
    }
    var a = Gu(t, l, e, 0, null, !1, !1, "", jo);
    return (
      (e._reactRootContainer = a),
      (e[Ze] = a.current),
      Zn(e.nodeType === 8 ? e.parentNode : e),
      Dt(),
      a
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof l == "function") {
    var o = l;
    l = function () {
      var u = gr(c);
      o.call(u);
    };
  }
  var c = ra(e, 0, !1, null, null, !1, !1, "", jo);
  return (
    (e._reactRootContainer = c),
    (e[Ze] = c.current),
    Zn(e.nodeType === 8 ? e.parentNode : e),
    Dt(function () {
      Rr(t, c, n, l);
    }),
    c
  );
}
function Dr(e, t, n, l, s) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof s == "function") {
      var o = s;
      s = function () {
        var c = gr(a);
        o.call(c);
      };
    }
    Rr(t, a, e, s);
  } else a = Hf(n, t, e, s, l);
  return gr(a);
}
wc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 &&
          (Ci(t, n | 1), ve(t, X()), !(I & 6) && ((hn = X() + 500), kt()));
      }
      break;
    case 13:
      Dt(function () {
        var l = qe(e, 1);
        if (l !== null) {
          var s = de();
          Ie(l, e, 1, s);
        }
      }),
        sa(e, 1);
  }
};
Ei = function (e) {
  if (e.tag === 13) {
    var t = qe(e, 134217728);
    if (t !== null) {
      var n = de();
      Ie(t, e, 134217728, n);
    }
    sa(e, 134217728);
  }
};
kc = function (e) {
  if (e.tag === 13) {
    var t = xt(e),
      n = qe(e, t);
    if (n !== null) {
      var l = de();
      Ie(n, e, t, l);
    }
    sa(e, t);
  }
};
Sc = function () {
  return D;
};
bc = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
zs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ks(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var l = n[t];
          if (l !== e && l.form === e.form) {
            var s = Pr(l);
            if (!s) throw Error(w(90));
            nc(l), ks(l, s);
          }
        }
      }
      break;
    case "textarea":
      rc(e, n);
      break;
    case "select":
      (t = n.value), t != null && nn(e, !!n.multiple, t, !1);
  }
};
dc = ea;
mc = Dt;
var Gf = { usingClientEntryPoint: !1, Events: [ml, Xt, Pr, cc, uc, ea] },
  Mn = {
    findFiberByHostInstance: Pt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Qf = {
    bundleType: Mn.bundleType,
    version: Mn.version,
    rendererPackageName: Mn.rendererPackageName,
    rendererConfig: Mn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = hc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Mn.findFiberByHostInstance || Wf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Rl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rl.isDisabled && Rl.supportsFiber)
    try {
      (Sr = Rl.inject(Qf)), (Ve = Rl);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gf;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!aa(t)) throw Error(w(200));
  return Vf(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!aa(e)) throw Error(w(299));
  var n = !1,
    l = "",
    s = Qu;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = ra(e, 1, !1, null, null, n, !1, l, s)),
    (e[Ze] = t.current),
    Zn(e.nodeType === 8 ? e.parentNode : e),
    new ia(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(w(188))
      : ((e = Object.keys(e).join(",")), Error(w(268, e)));
  return (e = hc(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return Dt(e);
};
ke.hydrate = function (e, t, n) {
  if (!Ir(t)) throw Error(w(200));
  return Dr(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!aa(e)) throw Error(w(405));
  var l = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    a = Qu;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Gu(t, null, e, 1, n ?? null, s, !1, i, a)),
    (e[Ze] = t.current),
    Zn(e),
    l)
  )
    for (e = 0; e < l.length; e++)
      (n = l[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new Or(t);
};
ke.render = function (e, t, n) {
  if (!Ir(t)) throw Error(w(200));
  return Dr(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!Ir(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (Dt(function () {
        Dr(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ze] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = ea;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, l) {
  if (!Ir(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Dr(e, t, n, !1, l);
};
ke.version = "18.3.1-next-f1338f8080-20240426";
function Ku() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ku);
    } catch (e) {
      console.error(e);
    }
}
Ku(), (Ko.exports = ke);
var Kf = Ko.exports,
  Xu,
  No = Kf;
(Xu = No.createRoot), No.hydrateRoot;
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function il() {
  return (
    (il = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
          }
          return e;
        }),
    il.apply(this, arguments)
  );
}
var ct;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ct || (ct = {}));
const wo = "popstate";
function Xf(e) {
  e === void 0 && (e = {});
  function t(l, s) {
    let { pathname: i, search: a, hash: o } = l.location;
    return ci(
      "",
      { pathname: i, search: a, hash: o },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function n(l, s) {
    return typeof s == "string" ? s : vr(s);
  }
  return Zf(t, n, null, e);
}
function Z(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Yu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Yf() {
  return Math.random().toString(36).substr(2, 8);
}
function ko(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ci(e, t, n, l) {
  return (
    n === void 0 && (n = null),
    il(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? yn(t) : t,
      { state: n, key: (t && t.key) || l || Yf() }
    )
  );
}
function vr(e) {
  let { pathname: t = "/", search: n = "", hash: l = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    l && l !== "#" && (t += l.charAt(0) === "#" ? l : "#" + l),
    t
  );
}
function yn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let l = e.indexOf("?");
    l >= 0 && ((t.search = e.substr(l)), (e = e.substr(0, l))),
      e && (t.pathname = e);
  }
  return t;
}
function Zf(e, t, n, l) {
  l === void 0 && (l = {});
  let { window: s = document.defaultView, v5Compat: i = !1 } = l,
    a = s.history,
    o = ct.Pop,
    c = null,
    u = p();
  u == null && ((u = 0), a.replaceState(il({}, a.state, { idx: u }), ""));
  function p() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    o = ct.Pop;
    let k = p(),
      h = k == null ? null : k - u;
    (u = k), c && c({ action: o, location: y.location, delta: h });
  }
  function g(k, h) {
    o = ct.Push;
    let f = ci(y.location, k, h);
    u = p() + 1;
    let m = ko(f, u),
      j = y.createHref(f);
    try {
      a.pushState(m, "", j);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      s.location.assign(j);
    }
    i && c && c({ action: o, location: y.location, delta: 1 });
  }
  function x(k, h) {
    o = ct.Replace;
    let f = ci(y.location, k, h);
    u = p();
    let m = ko(f, u),
      j = y.createHref(f);
    a.replaceState(m, "", j),
      i && c && c({ action: o, location: y.location, delta: 0 });
  }
  function v(k) {
    let h = s.location.origin !== "null" ? s.location.origin : s.location.href,
      f = typeof k == "string" ? k : vr(k);
    return (
      (f = f.replace(/ $/, "%20")),
      Z(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, h)
    );
  }
  let y = {
    get action() {
      return o;
    },
    get location() {
      return e(s, a);
    },
    listen(k) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(wo, d),
        (c = k),
        () => {
          s.removeEventListener(wo, d), (c = null);
        }
      );
    },
    createHref(k) {
      return t(s, k);
    },
    createURL: v,
    encodeLocation(k) {
      let h = v(k);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: g,
    replace: x,
    go(k) {
      return a.go(k);
    },
  };
  return y;
}
var So;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(So || (So = {}));
function qf(e, t, n) {
  return n === void 0 && (n = "/"), Jf(e, t, n, !1);
}
function Jf(e, t, n, l) {
  let s = typeof t == "string" ? yn(t) : t,
    i = oa(s.pathname || "/", n);
  if (i == null) return null;
  let a = Zu(e);
  e0(a);
  let o = null;
  for (let c = 0; o == null && c < a.length; ++c) {
    let u = d0(i);
    o = c0(a[c], u, l);
  }
  return o;
}
function Zu(e, t, n, l) {
  t === void 0 && (t = []), n === void 0 && (n = []), l === void 0 && (l = "");
  let s = (i, a, o) => {
    let c = {
      relativePath: o === void 0 ? i.path || "" : o,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    c.relativePath.startsWith("/") &&
      (Z(
        c.relativePath.startsWith(l),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + l + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (c.relativePath = c.relativePath.slice(l.length)));
    let u = vt([l, c.relativePath]),
      p = n.concat(c);
    i.children &&
      i.children.length > 0 &&
      (Z(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Zu(i.children, t, p, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: a0(u, i.index), routesMeta: p });
  };
  return (
    e.forEach((i, a) => {
      var o;
      if (i.path === "" || !((o = i.path) != null && o.includes("?"))) s(i, a);
      else for (let c of qu(i.path)) s(i, a, c);
    }),
    t
  );
}
function qu(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...l] = t,
    s = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (l.length === 0) return s ? [i, ""] : [i];
  let a = qu(l.join("/")),
    o = [];
  return (
    o.push(...a.map((c) => (c === "" ? i : [i, c].join("/")))),
    s && o.push(...a),
    o.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function e0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : o0(
          t.routesMeta.map((l) => l.childrenIndex),
          n.routesMeta.map((l) => l.childrenIndex)
        )
  );
}
const t0 = /^:[\w-]+$/,
  n0 = 3,
  l0 = 2,
  r0 = 1,
  s0 = 10,
  i0 = -2,
  bo = (e) => e === "*";
function a0(e, t) {
  let n = e.split("/"),
    l = n.length;
  return (
    n.some(bo) && (l += i0),
    t && (l += l0),
    n
      .filter((s) => !bo(s))
      .reduce((s, i) => s + (t0.test(i) ? n0 : i === "" ? r0 : s0), l)
  );
}
function o0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((l, s) => l === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function c0(e, t, n) {
  let { routesMeta: l } = e,
    s = {},
    i = "/",
    a = [];
  for (let o = 0; o < l.length; ++o) {
    let c = l[o],
      u = o === l.length - 1,
      p = i === "/" ? t : t.slice(i.length) || "/",
      d = Co(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: u },
        p
      ),
      g = c.route;
    if (
      (!d &&
        u &&
        n &&
        !l[l.length - 1].route.index &&
        (d = Co(
          { path: c.relativePath, caseSensitive: c.caseSensitive, end: !1 },
          p
        )),
      !d)
    )
      return null;
    Object.assign(s, d.params),
      a.push({
        params: s,
        pathname: vt([i, d.pathname]),
        pathnameBase: h0(vt([i, d.pathnameBase])),
        route: g,
      }),
      d.pathnameBase !== "/" && (i = vt([i, d.pathnameBase]));
  }
  return a;
}
function Co(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, l] = u0(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let i = s[0],
    a = i.replace(/(.)\/+$/, "$1"),
    o = s.slice(1);
  return {
    params: l.reduce((u, p, d) => {
      let { paramName: g, isOptional: x } = p;
      if (g === "*") {
        let y = o[d] || "";
        a = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const v = o[d];
      return (
        x && !v ? (u[g] = void 0) : (u[g] = (v || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function u0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Yu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let l = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, o, c) => (
            l.push({ paramName: o, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (l.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (s += "\\/*$")
      : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), l]
  );
}
function d0(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Yu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function oa(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    l = e.charAt(n);
  return l && l !== "/" ? null : e.slice(n) || "/";
}
function m0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: l = "",
    hash: s = "",
  } = typeof e == "string" ? yn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : f0(n, t)) : t,
    search: x0(l),
    hash: g0(s),
  };
}
function f0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function xs(e, t, n, l) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(l) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function p0(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Ju(e, t) {
  let n = p0(e);
  return t
    ? n.map((l, s) => (s === n.length - 1 ? l.pathname : l.pathnameBase))
    : n.map((l) => l.pathnameBase);
}
function ed(e, t, n, l) {
  l === void 0 && (l = !1);
  let s;
  typeof e == "string"
    ? (s = yn(e))
    : ((s = il({}, e)),
      Z(
        !s.pathname || !s.pathname.includes("?"),
        xs("?", "pathname", "search", s)
      ),
      Z(
        !s.pathname || !s.pathname.includes("#"),
        xs("#", "pathname", "hash", s)
      ),
      Z(!s.search || !s.search.includes("#"), xs("#", "search", "hash", s)));
  let i = e === "" || s.pathname === "",
    a = i ? "/" : s.pathname,
    o;
  if (a == null) o = n;
  else {
    let d = t.length - 1;
    if (!l && a.startsWith("..")) {
      let g = a.split("/");
      for (; g[0] === ".."; ) g.shift(), (d -= 1);
      s.pathname = g.join("/");
    }
    o = d >= 0 ? t[d] : "/";
  }
  let c = m0(s, o),
    u = a && a !== "/" && a.endsWith("/"),
    p = (i || a === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || p) && (c.pathname += "/"), c;
}
const vt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  h0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  x0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  g0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function v0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const td = ["post", "put", "patch", "delete"];
new Set(td);
const y0 = ["get", ...td];
new Set(y0);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function al() {
  return (
    (al = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
          }
          return e;
        }),
    al.apply(this, arguments)
  );
}
const ca = N.createContext(null),
  j0 = N.createContext(null),
  Bt = N.createContext(null),
  $r = N.createContext(null),
  Ut = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  nd = N.createContext(null);
function N0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  pl() || Z(!1);
  let { basename: l, navigator: s } = N.useContext(Bt),
    { hash: i, pathname: a, search: o } = rd(e, { relative: n }),
    c = a;
  return (
    l !== "/" && (c = a === "/" ? l : vt([l, a])),
    s.createHref({ pathname: c, search: o, hash: i })
  );
}
function pl() {
  return N.useContext($r) != null;
}
function hl() {
  return pl() || Z(!1), N.useContext($r).location;
}
function ld(e) {
  N.useContext(Bt).static || N.useLayoutEffect(e);
}
function w0() {
  let { isDataRoute: e } = N.useContext(Ut);
  return e ? R0() : k0();
}
function k0() {
  pl() || Z(!1);
  let e = N.useContext(ca),
    { basename: t, future: n, navigator: l } = N.useContext(Bt),
    { matches: s } = N.useContext(Ut),
    { pathname: i } = hl(),
    a = JSON.stringify(Ju(s, n.v7_relativeSplatPath)),
    o = N.useRef(!1);
  return (
    ld(() => {
      o.current = !0;
    }),
    N.useCallback(
      function (u, p) {
        if ((p === void 0 && (p = {}), !o.current)) return;
        if (typeof u == "number") {
          l.go(u);
          return;
        }
        let d = ed(u, JSON.parse(a), i, p.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : vt([t, d.pathname])),
          (p.replace ? l.replace : l.push)(d, p.state, p);
      },
      [t, l, a, i, e]
    )
  );
}
function rd(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: l } = N.useContext(Bt),
    { matches: s } = N.useContext(Ut),
    { pathname: i } = hl(),
    a = JSON.stringify(Ju(s, l.v7_relativeSplatPath));
  return N.useMemo(() => ed(e, JSON.parse(a), i, n === "path"), [e, a, i, n]);
}
function S0(e, t) {
  return b0(e, t);
}
function b0(e, t, n, l) {
  pl() || Z(!1);
  let { navigator: s } = N.useContext(Bt),
    { matches: i } = N.useContext(Ut),
    a = i[i.length - 1],
    o = a ? a.params : {};
  a && a.pathname;
  let c = a ? a.pathnameBase : "/";
  a && a.route;
  let u = hl(),
    p;
  if (t) {
    var d;
    let k = typeof t == "string" ? yn(t) : t;
    c === "/" || ((d = k.pathname) != null && d.startsWith(c)) || Z(!1),
      (p = k);
  } else p = u;
  let g = p.pathname || "/",
    x = g;
  if (c !== "/") {
    let k = c.replace(/^\//, "").split("/");
    x = "/" + g.replace(/^\//, "").split("/").slice(k.length).join("/");
  }
  let v = qf(e, { pathname: x }),
    y = z0(
      v &&
        v.map((k) =>
          Object.assign({}, k, {
            params: Object.assign({}, o, k.params),
            pathname: vt([
              c,
              s.encodeLocation
                ? s.encodeLocation(k.pathname).pathname
                : k.pathname,
            ]),
            pathnameBase:
              k.pathnameBase === "/"
                ? c
                : vt([
                    c,
                    s.encodeLocation
                      ? s.encodeLocation(k.pathnameBase).pathname
                      : k.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      l
    );
  return t && y
    ? N.createElement(
        $r.Provider,
        {
          value: {
            location: al(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              p
            ),
            navigationType: ct.Pop,
          },
        },
        y
      )
    : y;
}
function C0() {
  let e = A0(),
    t = v0(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? N.createElement("pre", { style: s }, n) : null,
    null
  );
}
const E0 = N.createElement(C0, null);
class P0 extends N.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? N.createElement(
          Ut.Provider,
          { value: this.props.routeContext },
          N.createElement(nd.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function M0(e) {
  let { routeContext: t, match: n, children: l } = e,
    s = N.useContext(ca);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(Ut.Provider, { value: t }, l)
  );
}
function z0(e, t, n, l) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    l === void 0 && (l = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = l) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let a = e,
    o = (s = n) == null ? void 0 : s.errors;
  if (o != null) {
    let p = a.findIndex(
      (d) => d.route.id && (o == null ? void 0 : o[d.route.id]) !== void 0
    );
    p >= 0 || Z(!1), (a = a.slice(0, Math.min(a.length, p + 1)));
  }
  let c = !1,
    u = -1;
  if (n && l && l.v7_partialHydration)
    for (let p = 0; p < a.length; p++) {
      let d = a[p];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = p),
        d.route.id)
      ) {
        let { loaderData: g, errors: x } = n,
          v =
            d.route.loader &&
            g[d.route.id] === void 0 &&
            (!x || x[d.route.id] === void 0);
        if (d.route.lazy || v) {
          (c = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((p, d, g) => {
    let x,
      v = !1,
      y = null,
      k = null;
    n &&
      ((x = o && d.route.id ? o[d.route.id] : void 0),
      (y = d.route.errorElement || E0),
      c &&
        (u < 0 && g === 0
          ? ((v = !0), (k = null))
          : u === g &&
            ((v = !0), (k = d.route.hydrateFallbackElement || null))));
    let h = t.concat(a.slice(0, g + 1)),
      f = () => {
        let m;
        return (
          x
            ? (m = y)
            : v
            ? (m = k)
            : d.route.Component
            ? (m = N.createElement(d.route.Component, null))
            : d.route.element
            ? (m = d.route.element)
            : (m = p),
          N.createElement(M0, {
            match: d,
            routeContext: { outlet: p, matches: h, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || g === 0)
      ? N.createElement(P0, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: x,
          children: f(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var sd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(sd || {}),
  yr = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(yr || {});
function T0(e) {
  let t = N.useContext(ca);
  return t || Z(!1), t;
}
function L0(e) {
  let t = N.useContext(j0);
  return t || Z(!1), t;
}
function _0(e) {
  let t = N.useContext(Ut);
  return t || Z(!1), t;
}
function id(e) {
  let t = _0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Z(!1), n.route.id;
}
function A0() {
  var e;
  let t = N.useContext(nd),
    n = L0(yr.UseRouteError),
    l = id(yr.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[l];
}
function R0() {
  let { router: e } = T0(sd.UseNavigateStable),
    t = id(yr.UseNavigateStable),
    n = N.useRef(!1);
  return (
    ld(() => {
      n.current = !0;
    }),
    N.useCallback(
      function (s, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, al({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function O0(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Fe(e) {
  Z(!1);
}
function I0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: l,
    navigationType: s = ct.Pop,
    navigator: i,
    static: a = !1,
    future: o,
  } = e;
  pl() && Z(!1);
  let c = t.replace(/^\/*/, "/"),
    u = N.useMemo(
      () => ({
        basename: c,
        navigator: i,
        static: a,
        future: al({ v7_relativeSplatPath: !1 }, o),
      }),
      [c, o, i, a]
    );
  typeof l == "string" && (l = yn(l));
  let {
      pathname: p = "/",
      search: d = "",
      hash: g = "",
      state: x = null,
      key: v = "default",
    } = l,
    y = N.useMemo(() => {
      let k = oa(p, c);
      return k == null
        ? null
        : {
            location: { pathname: k, search: d, hash: g, state: x, key: v },
            navigationType: s,
          };
    }, [c, p, d, g, x, v, s]);
  return y == null
    ? null
    : N.createElement(
        Bt.Provider,
        { value: u },
        N.createElement($r.Provider, { children: n, value: y })
      );
}
function D0(e) {
  let { children: t, location: n } = e;
  return S0(ui(t), n);
}
new Promise(() => {});
function ui(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    N.Children.forEach(e, (l, s) => {
      if (!N.isValidElement(l)) return;
      let i = [...t, s];
      if (l.type === N.Fragment) {
        n.push.apply(n, ui(l.props.children, i));
        return;
      }
      l.type !== Fe && Z(!1), !l.props.index || !l.props.children || Z(!1);
      let a = {
        id: l.props.id || i.join("-"),
        caseSensitive: l.props.caseSensitive,
        element: l.props.element,
        Component: l.props.Component,
        index: l.props.index,
        path: l.props.path,
        loader: l.props.loader,
        action: l.props.action,
        errorElement: l.props.errorElement,
        ErrorBoundary: l.props.ErrorBoundary,
        hasErrorBoundary:
          l.props.ErrorBoundary != null || l.props.errorElement != null,
        shouldRevalidate: l.props.shouldRevalidate,
        handle: l.props.handle,
        lazy: l.props.lazy,
      };
      l.props.children && (a.children = ui(l.props.children, i)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function di() {
  return (
    (di = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
          }
          return e;
        }),
    di.apply(this, arguments)
  );
}
function $0(e, t) {
  if (e == null) return {};
  var n = {},
    l = Object.keys(e),
    s,
    i;
  for (i = 0; i < l.length; i++)
    (s = l[i]), !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
function F0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function B0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !F0(e);
}
const U0 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  V0 = "6";
try {
  window.__reactRouterVersion = V0;
} catch {}
const W0 = "startTransition",
  Eo = Od[W0];
function H0(e) {
  let { basename: t, children: n, future: l, window: s } = e,
    i = N.useRef();
  i.current == null && (i.current = Xf({ window: s, v5Compat: !0 }));
  let a = i.current,
    [o, c] = N.useState({ action: a.action, location: a.location }),
    { v7_startTransition: u } = l || {},
    p = N.useCallback(
      (d) => {
        u && Eo ? Eo(() => c(d)) : c(d);
      },
      [c, u]
    );
  return (
    N.useLayoutEffect(() => a.listen(p), [a, p]),
    N.useEffect(() => O0(l), [l]),
    N.createElement(I0, {
      basename: t,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: a,
      future: l,
    })
  );
}
const G0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Q0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Po = N.forwardRef(function (t, n) {
    let {
        onClick: l,
        relative: s,
        reloadDocument: i,
        replace: a,
        state: o,
        target: c,
        to: u,
        preventScrollReset: p,
        viewTransition: d,
      } = t,
      g = $0(t, U0),
      { basename: x } = N.useContext(Bt),
      v,
      y = !1;
    if (typeof u == "string" && Q0.test(u) && ((v = u), G0))
      try {
        let m = new URL(window.location.href),
          j = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
          S = oa(j.pathname, x);
        j.origin === m.origin && S != null
          ? (u = S + j.search + j.hash)
          : (y = !0);
      } catch {}
    let k = N0(u, { relative: s }),
      h = K0(u, {
        replace: a,
        state: o,
        target: c,
        preventScrollReset: p,
        relative: s,
        viewTransition: d,
      });
    function f(m) {
      l && l(m), m.defaultPrevented || h(m);
    }
    return N.createElement(
      "a",
      di({}, g, { href: v || k, onClick: y || i ? l : f, ref: n, target: c })
    );
  });
var Mo;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Mo || (Mo = {}));
var zo;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(zo || (zo = {}));
function K0(e, t) {
  let {
      target: n,
      replace: l,
      state: s,
      preventScrollReset: i,
      relative: a,
      viewTransition: o,
    } = t === void 0 ? {} : t,
    c = w0(),
    u = hl(),
    p = rd(e, { relative: a });
  return N.useCallback(
    (d) => {
      if (B0(d, n)) {
        d.preventDefault();
        let g = l !== void 0 ? l : vr(u) === vr(p);
        c(e, {
          replace: g,
          state: s,
          preventScrollReset: i,
          relative: a,
          viewTransition: o,
        });
      }
    },
    [u, c, p, l, s, n, e, i, a, o]
  );
}
const ad = N.createContext(void 0),
  X0 = ({ children: e }) => {
    const [t, n] = N.useState({
        user: {
          name: "Rashad Mammadov",
          balance: 15420.5,
          stakedTokens: 8500,
          country: "Azerbaijan",
          phone: "+994 55 552 57 47",
        },
        selectedLanguage: "en",
        theme: "dark",
        notifications: !0,
      }),
      l = (o) => {
        n((c) => ({ ...c, user: { ...c.user, ...o } }));
      },
      s = (o) => {
        n((c) => ({ ...c, selectedLanguage: o }));
      },
      i = () => {
        n((o) => ({ ...o, theme: o.theme === "dark" ? "light" : "dark" }));
      },
      a = () => {
        n((o) => ({ ...o, notifications: !o.notifications }));
      };
    return r.jsx(ad.Provider, {
      value: {
        state: t,
        updateUser: l,
        setLanguage: s,
        toggleTheme: i,
        toggleNotifications: a,
      },
      children: e,
    });
  },
  xl = () => {
    const e = N.useContext(ad);
    if (!e) throw new Error("useApp must be used within AppProvider");
    return e;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Y0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z0 = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  z = (e, t) => {
    const n = N.forwardRef(
      (
        {
          color: l = "currentColor",
          size: s = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: a,
          className: o = "",
          children: c,
          ...u
        },
        p
      ) =>
        N.createElement(
          "svg",
          {
            ref: p,
            ...Y0,
            width: s,
            height: s,
            stroke: l,
            strokeWidth: a ? (Number(i) * 24) / Number(s) : i,
            className: ["lucide", `lucide-${Z0(e)}`, o].join(" "),
            ...u,
          },
          [
            ...t.map(([d, g]) => N.createElement(d, g)),
            ...(Array.isArray(c) ? c : [c]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q0 = z("Activity", [
  ["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J0 = z("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ep = z("Award", [
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jr = z("BarChart3", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tp = z("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const np = z("Bitcoin", [
  [
    "path",
    {
      d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",
      key: "yr8idg",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const To = z("Brain", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja",
    },
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r",
    },
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lo = z("Briefcase", [
  [
    "rect",
    {
      width: "20",
      height: "14",
      x: "2",
      y: "7",
      rx: "2",
      ry: "2",
      key: "eto64e",
    },
  ],
  ["path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "zwj3tp" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lp = z("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const od = z("Building", [
  [
    "rect",
    {
      width: "16",
      height: "20",
      x: "4",
      y: "2",
      rx: "2",
      ry: "2",
      key: "76otgf",
    },
  ],
  ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rp = z("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sp = z("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ip = z("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ap = z("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _o = z("Coins", [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mi = z("CreditCard", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
  ],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const op = z("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  [
    "path",
    { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cp = z("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const up = z("Filter", [
  [
    "polygon",
    { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cd = z("Fuel", [
  ["line", { x1: "3", x2: "15", y1: "22", y2: "22", key: "xegly4" }],
  ["line", { x1: "4", x2: "14", y1: "9", y2: "9", key: "xcnuvu" }],
  ["path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18", key: "16j0yd" }],
  [
    "path",
    {
      d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
      key: "8ur5zv",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fr = z("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dp = z("HelpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mp = z("History", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ud = z("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fp = z("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pp = z("Key", [
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["path", { d: "m15.5 7.5 3 3L22 7l-3-3", key: "1rn1fs" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dd = z("Leaf", [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3",
    },
  ],
  [
    "path",
    { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fi = z("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const md = z("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hp = z("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xp = z("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gp = z("Newspaper", [
  [
    "path",
    {
      d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
      key: "7pis2x",
    },
  ],
  ["path", { d: "M18 14h-8", key: "sponae" }],
  ["path", { d: "M15 18h-5", key: "95g1m2" }],
  ["path", { d: "M10 6h8v4h-8V6Z", key: "smlsk5" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fd = z("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ao = z("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vp = z("QrCode", [
  ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
  [
    "rect",
    { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" },
  ],
  [
    "rect",
    { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" },
  ],
  ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
  ["path", { d: "M21 21v.01", key: "ents32" }],
  ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M12 3h.01", key: "n36tog" }],
  ["path", { d: "M12 16v.01", key: "133mhm" }],
  ["path", { d: "M16 12h1", key: "1slzba" }],
  ["path", { d: "M21 12v.01", key: "1lwtk9" }],
  ["path", { d: "M12 21v-1", key: "1880an" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yp = z("Satellite", [
  ["path", { d: "M13 7 9 3 5 7l4 4", key: "vyckw6" }],
  ["path", { d: "m17 11 4 4-4 4-4-4", key: "rchckc" }],
  ["path", { d: "m8 12 4 4 6-6-4-4Z", key: "1sshf7" }],
  ["path", { d: "m16 8 3-3", key: "x428zp" }],
  ["path", { d: "M9 21a6 6 0 0 0-6-6", key: "1iajcf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jp = z("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Np = z("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wp = z("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kp = z("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sp = z("Smartphone", [
  [
    "rect",
    {
      width: "14",
      height: "20",
      x: "5",
      y: "2",
      rx: "2",
      ry: "2",
      key: "1yt0o3",
    },
  ],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ro = z("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ua = z("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nr = z("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bp = z("Trees", [
  [
    "path",
    {
      d: "M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",
      key: "yh07w9",
    },
  ],
  ["path", { d: "M7 16v6", key: "1a82de" }],
  ["path", { d: "M13 19v3", key: "13sx9i" }],
  [
    "path",
    {
      d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
      key: "1sj9kv",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oo = z("TrendingDown", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const et = z("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pd = z("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wr = z("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cp = z("Waves", [
  [
    "path",
    {
      d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "knzxuh",
    },
  ],
  [
    "path",
    {
      d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "2jd2cc",
    },
  ],
  [
    "path",
    {
      d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "rd2r6e",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hd = z("Wind", [
  ["path", { d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2", key: "1k4u03" }],
  ["path", { d: "M9.6 4.6A2 2 0 1 1 11 8H2", key: "b7d0fd" }],
  ["path", { d: "M12.6 19.4A2 2 0 1 0 14 16H2", key: "1p5cb3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xd = z("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ep = z("Youtube", [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4",
    },
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ol = z("Zap", [
    [
      "polygon",
      { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" },
    ],
  ]),
  Pp = () => {
    const { state: e, setLanguage: t } = xl(),
      [n, l] = N.useState(!1),
      s = [
        { code: "en", name: "English", flag: "🇺🇸" },
        { code: "az", name: "Azərbaycan", flag: "🇦🇿" },
        { code: "tr", name: "Türkçe", flag: "🇹🇷" },
        { code: "ru", name: "Русский", flag: "🇷🇺" },
        { code: "ar", name: "العربية", flag: "🇸🇦" },
        { code: "fr", name: "Français", flag: "🇫🇷" },
        { code: "de", name: "Deutsch", flag: "🇩🇪" },
        { code: "es", name: "Español", flag: "🇪🇸" },
      ],
      i = s.find((a) => a.code === e.selectedLanguage) || s[0];
    return r.jsxs("div", {
      className: "relative",
      children: [
        r.jsxs("button", {
          onClick: () => l(!n),
          className:
            "flex items-center space-x-2 px-3 py-2 bg-gold-600/10 hover:bg-gold-600/20 rounded-lg border border-gold-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold-600/20",
          children: [
            r.jsx(Fr, { size: 16, className: "text-gold-400" }),
            r.jsxs("span", {
              className: "text-gold-400 text-sm font-medium",
              children: [i.flag, " ", i.code.toUpperCase()],
            }),
            r.jsx(sp, {
              size: 14,
              className: `text-gold-400 transition-transform ${
                n ? "rotate-180" : ""
              }`,
            }),
          ],
        }),
        n &&
          r.jsx("div", {
            className:
              "absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-gold-600/30 rounded-lg shadow-xl shadow-gold-600/10 z-50 max-h-64 overflow-y-auto",
            children: s.map((a) =>
              r.jsxs(
                "button",
                {
                  onClick: () => {
                    t(a.code), l(!1);
                  },
                  className: `w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gold-600/10 transition-colors ${
                    a.code === e.selectedLanguage
                      ? "bg-gold-600/20 text-gold-400"
                      : "text-gold-600"
                  }`,
                  children: [
                    r.jsx("span", { className: "text-lg", children: a.flag }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: a.name,
                    }),
                  ],
                },
                a.code
              )
            ),
          }),
        n &&
          r.jsx("div", {
            className: "fixed inset-0 z-40",
            onClick: () => l(!1),
          }),
      ],
    });
  },
  Mp = () =>
    r.jsxs("div", {
      className: "flex items-center space-x-3",
      children: [
        r.jsxs("div", {
          className: "relative",
          children: [
            r.jsx("div", {
              className:
                "w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-lg shadow-gold-600/30",
              children: r.jsx(cd, { className: "text-black w-6 h-6" }),
            }),
            r.jsx("div", {
              className:
                "absolute -bottom-1 -right-1 w-3 h-3 bg-gold-400 rounded-full animate-pulse",
            }),
          ],
        }),
        r.jsxs("div", {
          children: [
            r.jsx("h1", {
              className: "text-gold-400 font-bold text-xl tracking-wide",
              children: "BLACK GOLD",
            }),
            r.jsx("p", {
              className: "text-gold-600 text-xs",
              children: "Powered by Nature, Backed by Industry",
            }),
          ],
        }),
      ],
    }),
  zp = () => {
    const { state: e } = xl();
    return r.jsx("header", {
      className:
        "sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold-600/20",
      children: r.jsx("div", {
        className: "container mx-auto px-4 py-4",
        children: r.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            r.jsx(Mp, {}),
            r.jsxs("div", {
              className: "flex items-center space-x-6",
              children: [
                r.jsxs("div", {
                  className:
                    "hidden md:flex items-center space-x-4 text-gold-400",
                  children: [
                    r.jsxs("span", {
                      className: "text-sm",
                      children: ["Welcome, ", e.user.name],
                    }),
                    r.jsxs("span", {
                      className: "text-sm font-semibold",
                      children: [e.user.balance.toFixed(2), " BGC"],
                    }),
                  ],
                }),
                r.jsx(Pp, {}),
                r.jsx("div", {
                  className: "hidden lg:flex items-center",
                  children: r.jsx("img", {
                    src: "/white_circle_360x360.png",
                    alt: "Powered by Bolt.new",
                    className:
                      "w-12 h-12 opacity-80 hover:opacity-100 transition-opacity cursor-pointer",
                    title: "This project was built for the Bolt Hackathon",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Tp = () => {
    const e = hl(),
      [t, n] = N.useState(!1),
      l = [
        { path: "/", label: "Dashboard", icon: jr },
        { path: "/ecology", label: "Ecology & Projects", icon: dd },
        { path: "/bank", label: "Bank & Cards", icon: mi },
        { path: "/trading", label: "Trading & Marketplace", icon: et },
        { path: "/energy", label: "Energy Resources & Staking", icon: ol },
        { path: "/shares", label: "Company Shares", icon: od },
        { path: "/forecast", label: "Oil Price Forecast", icon: q0 },
        { path: "/profile", label: "Profile & Settings", icon: pd },
        { path: "/info", label: "Info & Contact", icon: ud },
      ],
      s = () => {
        n(!t);
      };
    return r.jsx("nav", {
      className:
        "bg-black/90 backdrop-blur-sm border-b border-gold-600/20 sticky top-[88px] z-40",
      children: r.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          r.jsx("div", {
            className:
              "hidden lg:flex items-center justify-between py-4 overflow-x-auto",
            children: l.map((i) => {
              const a = i.icon,
                o = e.pathname === i.path;
              return r.jsxs(
                Po,
                {
                  to: i.path,
                  className: `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gold-600/10 hover:shadow-lg hover:shadow-gold-600/20 whitespace-nowrap ${
                    o
                      ? "bg-gold-600/20 text-gold-400 shadow-lg shadow-gold-600/30"
                      : "text-gold-600 hover:text-gold-400"
                  }`,
                  children: [
                    r.jsx(a, { size: 18, className: o ? "animate-pulse" : "" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: i.label,
                    }),
                  ],
                },
                i.path
              );
            }),
          }),
          r.jsxs("div", {
            className: "lg:hidden py-4",
            children: [
              r.jsxs("button", {
                onClick: s,
                className:
                  "flex items-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors",
                children: [
                  t ? r.jsx(xd, { size: 24 }) : r.jsx(hp, { size: 24 }),
                  r.jsx("span", { className: "font-medium", children: "Menu" }),
                ],
              }),
              t &&
                r.jsx("div", {
                  className:
                    "absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gold-600/20 py-4",
                  children: r.jsx("div", {
                    className: "container mx-auto px-4 grid gap-2",
                    children: l.map((i) => {
                      const a = i.icon,
                        o = e.pathname === i.path;
                      return r.jsxs(
                        Po,
                        {
                          to: i.path,
                          onClick: () => n(!1),
                          className: `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                            o
                              ? "bg-gold-600/20 text-gold-400"
                              : "text-gold-600 hover:bg-gold-600/10 hover:text-gold-400"
                          }`,
                          children: [
                            r.jsx(a, { size: 20 }),
                            r.jsx("span", {
                              className: "font-medium",
                              children: i.label,
                            }),
                          ],
                        },
                        i.path
                      );
                    }),
                  }),
                }),
            ],
          }),
        ],
      }),
    });
  },
  Lp = () =>
    r.jsx("footer", {
      className: "bg-black/95 border-t border-gold-600/20 mt-16",
      children: r.jsxs("div", {
        className: "container mx-auto px-4 py-12",
        children: [
          r.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
            children: [
              r.jsxs("div", {
                children: [
                  r.jsx("h3", {
                    className: "text-gold-400 font-semibold text-lg mb-4",
                    children: "Contact Us",
                  }),
                  r.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      r.jsxs("div", {
                        className: "flex items-center space-x-3 text-gold-600",
                        children: [
                          r.jsx(fd, { size: 16 }),
                          r.jsx("span", { children: "+994 55 552 57 47" }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "flex items-center space-x-3 text-gold-600",
                        children: [
                          r.jsx(fi, { size: 16 }),
                          r.jsx("span", {
                            children: "blackgoldcoinoffice@gmail.com",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              r.jsxs("div", {
                children: [
                  r.jsx("h3", {
                    className: "text-gold-400 font-semibold text-lg mb-4",
                    children: "Follow Us",
                  }),
                  r.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      r.jsxs("a", {
                        href: "https://www.instagram.com/bgorium",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center space-x-3 text-gold-600 hover:text-gold-400 transition-colors",
                        children: [
                          r.jsx(fp, { size: 16 }),
                          r.jsx("span", { children: "@bgorium" }),
                        ],
                      }),
                      r.jsxs("a", {
                        href: "https://youtube.com/@blackgoldcoin?si=c7P3x1CfcVVIn-N4",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center space-x-3 text-gold-600 hover:text-gold-400 transition-colors",
                        children: [
                          r.jsx(Ep, { size: 16 }),
                          r.jsx("span", { children: "@blackgoldcoin" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              r.jsxs("div", {
                children: [
                  r.jsx("h3", {
                    className: "text-gold-400 font-semibold text-lg mb-4",
                    children: "BLACK GOLD",
                  }),
                  r.jsx("p", {
                    className: "text-gold-600 text-sm leading-relaxed",
                    children:
                      "Powered by Nature, Backed by Industry. The premier platform for energy trading, ecological investments, and digital asset management.",
                  }),
                ],
              }),
            ],
          }),
          r.jsxs("div", {
            className: "border-t border-gold-600/20 mt-8 pt-8 text-center",
            children: [
              r.jsx("p", {
                className: "text-gold-600 text-sm",
                children:
                  "© 2025 BLACK GOLD Platform. All rights reserved. Licensed financial technology provider.",
              }),
              r.jsxs("div", {
                className: "mt-6",
                children: [
                  r.jsx("img", {
                    src: "/black_circle_360x360.png",
                    alt: "Powered by Bolt.new",
                    className:
                      "w-24 mx-auto mb-2 opacity-80 hover:opacity-100 transition-opacity",
                  }),
                  r.jsx("p", {
                    className: "text-gold-600 text-sm",
                    children: "This project was built for Bolt Hackathon",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  _p = () => {
    const [e, t] = N.useState([
      { symbol: "BGC", price: 0.845, change: 0.023, changePercent: 2.8 },
      { symbol: "OIL", price: 82.45, change: -1.23, changePercent: -1.47 },
      { symbol: "GOLD", price: 2045.3, change: 12.5, changePercent: 0.61 },
      { symbol: "BTC", price: 43245.67, change: 1234.5, changePercent: 2.94 },
      { symbol: "ETH", price: 2567.89, change: -45.23, changePercent: -1.73 },
      { symbol: "SOLAR", price: 156.78, change: 3.45, changePercent: 2.25 },
      { symbol: "WIND", price: 89.45, change: 1.23, changePercent: 1.39 },
    ]);
    return (
      N.useEffect(() => {
        const n = setInterval(() => {
          t((l) =>
            l.map((s) => ({
              ...s,
              price: s.price + (Math.random() - 0.5) * (s.price * 0.01),
              change: (Math.random() - 0.5) * (s.price * 0.02),
              changePercent: (Math.random() - 0.5) * 5,
            }))
          );
        }, 3e3);
        return () => clearInterval(n);
      }, []),
      r.jsx("div", {
        className: "bg-black/90 border-b border-gold-600/20 overflow-hidden",
        children: r.jsx("div", {
          className: "animate-scroll whitespace-nowrap py-3",
          children: r.jsxs("div", {
            className: "inline-flex space-x-8",
            children: [
              e.map((n, l) =>
                r.jsxs(
                  "div",
                  {
                    className: "inline-flex items-center space-x-2 text-sm",
                    children: [
                      r.jsx("span", {
                        className: "text-gold-400 font-semibold",
                        children: n.symbol,
                      }),
                      r.jsxs("span", {
                        className: "text-gold-600",
                        children: ["$", n.price.toFixed(2)],
                      }),
                      r.jsxs("div", {
                        className: `flex items-center space-x-1 ${
                          n.change >= 0 ? "text-green-400" : "text-red-400"
                        }`,
                        children: [
                          n.change >= 0
                            ? r.jsx(et, { size: 12 })
                            : r.jsx(Oo, { size: 12 }),
                          r.jsxs("span", {
                            children: [
                              n.changePercent >= 0 ? "+" : "",
                              n.changePercent.toFixed(2),
                              "%",
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  l
                )
              ),
              e.map((n, l) =>
                r.jsxs(
                  "div",
                  {
                    className: "inline-flex items-center space-x-2 text-sm",
                    children: [
                      r.jsx("span", {
                        className: "text-gold-400 font-semibold",
                        children: n.symbol,
                      }),
                      r.jsxs("span", {
                        className: "text-gold-600",
                        children: ["$", n.price.toFixed(2)],
                      }),
                      r.jsxs("div", {
                        className: `flex items-center space-x-1 ${
                          n.change >= 0 ? "text-green-400" : "text-red-400"
                        }`,
                        children: [
                          n.change >= 0
                            ? r.jsx(et, { size: 12 })
                            : r.jsx(Oo, { size: 12 }),
                          r.jsxs("span", {
                            children: [
                              n.changePercent >= 0 ? "+" : "",
                              n.changePercent.toFixed(2),
                              "%",
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  `duplicate-${l}`
                )
              ),
            ],
          }),
        }),
      })
    );
  },
  Ap = () =>
    r.jsxs("div", {
      className: "absolute inset-0 z-0",
      children: [
        r.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black",
        }),
        r.jsx("div", {
          className: "absolute inset-0",
          children: [...Array(20)].map((e, t) =>
            r.jsx(
              "div",
              {
                className:
                  "absolute w-2 h-2 bg-gold-400/20 rounded-full animate-float",
                style: {
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${10 + Math.random() * 20}s`,
                },
              },
              t
            )
          ),
        }),
        r.jsxs("div", {
          className: "absolute inset-0 opacity-10",
          children: [
            r.jsx("div", {
              className:
                "absolute top-1/4 left-1/4 w-64 h-64 bg-gold-400/5 rounded-full animate-pulse blur-xl",
            }),
            r.jsx("div", {
              className:
                "absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-600/5 rounded-full animate-pulse blur-2xl",
            }),
            r.jsx("div", {
              className:
                "absolute top-3/4 left-1/2 w-48 h-48 bg-gold-500/5 rounded-full animate-pulse blur-lg",
            }),
          ],
        }),
      ],
    }),
  Rp = ({ children: e }) =>
    r.jsxs("div", {
      className: "min-h-screen bg-black relative overflow-hidden",
      children: [
        r.jsx(Ap, {}),
        r.jsxs("div", {
          className: "relative z-10",
          children: [
            r.jsx(zp, {}),
            r.jsx(_p, {}),
            r.jsx(Tp, {}),
            r.jsx("main", {
              className: "container mx-auto px-4 py-8",
              children: e,
            }),
            r.jsx(Lp, {}),
          ],
        }),
      ],
    }),
  L = ({ children: e, className: t = "", hover: n = !0, glow: l = !1 }) =>
    r.jsx("div", {
      className: `
      bg-black/60 backdrop-blur-sm border border-gold-600/30 rounded-xl p-6
      ${
        n
          ? "hover:bg-black/70 hover:border-gold-500/50 transition-all duration-300"
          : ""
      }
      ${
        l
          ? "shadow-lg shadow-gold-600/20 hover:shadow-xl hover:shadow-gold-600/30"
          : ""
      }
      ${t}
    `,
      children: e,
    }),
  M = ({
    children: e,
    onClick: t,
    variant: n = "primary",
    size: l = "md",
    disabled: s = !1,
    className: i = "",
  }) => {
    const a =
        "font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50",
      o = {
        primary:
          "bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-black hover:shadow-lg hover:shadow-gold-600/30",
        secondary:
          "bg-gold-600/20 hover:bg-gold-600/30 text-gold-400 border border-gold-600/30 hover:border-gold-500/50",
        outline:
          "border border-gold-600 text-gold-400 hover:bg-gold-600/10 hover:border-gold-500",
      },
      c = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
      },
      u = s ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
    return r.jsx("button", {
      onClick: t,
      disabled: s,
      className: `${a} ${o[n]} ${c[l]} ${u} ${i}`,
      children: e,
    });
  },
  Op = () => {
    const { state: e } = xl(),
      [t, n] = N.useState("global"),
      l = [
        {
          title: "Total BGC in Circulation",
          value: "2,450,000",
          change: "+5.2%",
          icon: _o,
          color: "text-gold-400",
        },
        {
          title: "Your Staked Tokens",
          value: e.user.stakedTokens.toLocaleString(),
          change: "+12.8%",
          icon: ol,
          color: "text-green-400",
        },
        {
          title: "Live Oil Price",
          value: "$82.45",
          change: "-1.47%",
          icon: et,
          color: "text-orange-400",
        },
        {
          title: "Market Cap",
          value: "$125.8M",
          change: "+8.9%",
          icon: jr,
          color: "text-blue-400",
        },
      ],
      s = {
        global: [
          {
            title: "Global Oil Reserves Reach New Highs",
            time: "2 hours ago",
            source: "Energy Weekly",
          },
          {
            title: "Renewable Energy Investments Surge 25%",
            time: "4 hours ago",
            source: "GreenTech",
          },
          {
            title: "Cryptocurrency Market Shows Strong Recovery",
            time: "6 hours ago",
            source: "CryptoNews",
          },
        ],
        energy: [
          {
            title: "Solar Panel Efficiency Breaks New Records",
            time: "1 hour ago",
            source: "Solar Today",
          },
          {
            title: "Wind Energy Capacity Doubles in Azerbaijan",
            time: "3 hours ago",
            source: "Wind Power",
          },
          {
            title: "Hydroelectric Projects Get Green Light",
            time: "5 hours ago",
            source: "Energy Report",
          },
        ],
        crypto: [
          {
            title: "BGC Token Gains 15% in Weekly Trading",
            time: "30 minutes ago",
            source: "TokenWatch",
          },
          {
            title: "DeFi Protocols Show Increased Activity",
            time: "2 hours ago",
            source: "DeFi Pulse",
          },
          {
            title: "Institutional Crypto Adoption Accelerates",
            time: "4 hours ago",
            source: "Crypto Insider",
          },
        ],
        regional: [
          {
            title: "Azerbaijan Announces New Energy Strategy",
            time: "1 hour ago",
            source: "AzerNews",
          },
          {
            title: "Caspian Sea Oil Exploration Expands",
            time: "3 hours ago",
            source: "Regional Energy",
          },
          {
            title: "Black Gold Platform Partnerships Grow",
            time: "5 hours ago",
            source: "Business Today",
          },
        ],
      },
      i = [
        { key: "global", label: "Global", icon: Fr },
        { key: "energy", label: "Energy", icon: ol },
        { key: "crypto", label: "Crypto", icon: _o },
        { key: "regional", label: "Regional", icon: jr },
      ];
    return r.jsxs("div", {
      className: "space-y-8",
      children: [
        r.jsxs("div", {
          className: "text-center py-8",
          children: [
            r.jsx("h1", {
              className: "text-4xl font-bold text-gold-400 mb-4",
              children: "Welcome to BLACK GOLD Dashboard",
            }),
            r.jsx("p", {
              className: "text-gold-600 text-lg",
              children:
                "Monitor your investments, track energy markets, and manage your portfolio",
            }),
          ],
        }),
        r.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
          children: l.map((a, o) => {
            const c = a.icon;
            return r.jsxs(
              L,
              {
                glow: !0,
                className: "text-center",
                children: [
                  r.jsx(c, { className: `w-8 h-8 mx-auto mb-4 ${a.color}` }),
                  r.jsx("h3", {
                    className: "text-gold-600 text-sm font-medium mb-2",
                    children: a.title,
                  }),
                  r.jsx("p", {
                    className: "text-2xl font-bold text-gold-400 mb-2",
                    children: a.value,
                  }),
                  r.jsx("span", {
                    className: `text-sm ${
                      a.change.startsWith("+")
                        ? "text-green-400"
                        : "text-red-400"
                    }`,
                    children: a.change,
                  }),
                ],
              },
              o
            );
          }),
        }),
        r.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
          children: [
            r.jsxs(L, {
              glow: !0,
              children: [
                r.jsxs("div", {
                  className: "flex items-center justify-between mb-6",
                  children: [
                    r.jsx("h2", {
                      className: "text-xl font-semibold text-gold-400",
                      children: "AI Price Forecast",
                    }),
                    r.jsx(M, {
                      variant: "outline",
                      size: "sm",
                      children: "View Details",
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    r.jsxs("div", {
                      className: "bg-gold-600/10 rounded-lg p-4",
                      children: [
                        r.jsxs("div", {
                          className: "flex justify-between items-center mb-2",
                          children: [
                            r.jsx("span", {
                              className: "text-gold-600",
                              children: "BGC Token",
                            }),
                            r.jsx("span", {
                              className: "text-green-400",
                              children: "+8.5% (7 days)",
                            }),
                          ],
                        }),
                        r.jsx("div", {
                          className: "w-full bg-black/50 rounded-full h-2",
                          children: r.jsx("div", {
                            className:
                              "bg-gradient-to-r from-gold-600 to-gold-400 h-2 rounded-full w-3/4",
                          }),
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "bg-gold-600/10 rounded-lg p-4",
                      children: [
                        r.jsxs("div", {
                          className: "flex justify-between items-center mb-2",
                          children: [
                            r.jsx("span", {
                              className: "text-gold-600",
                              children: "Oil Price",
                            }),
                            r.jsx("span", {
                              className: "text-green-400",
                              children: "+3.2% (7 days)",
                            }),
                          ],
                        }),
                        r.jsx("div", {
                          className: "w-full bg-black/50 rounded-full h-2",
                          children: r.jsx("div", {
                            className:
                              "bg-gradient-to-r from-orange-600 to-orange-400 h-2 rounded-full w-1/2",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            r.jsxs(L, {
              glow: !0,
              children: [
                r.jsx("h2", {
                  className: "text-xl font-semibold text-gold-400 mb-6",
                  children: "Your Portfolio",
                }),
                r.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    r.jsxs("div", {
                      className: "flex justify-between items-center",
                      children: [
                        r.jsx("span", {
                          className: "text-gold-600",
                          children: "Total Balance",
                        }),
                        r.jsxs("span", {
                          className: "text-xl font-bold text-gold-400",
                          children: ["$", e.user.balance.toFixed(2)],
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "flex justify-between items-center",
                      children: [
                        r.jsx("span", {
                          className: "text-gold-600",
                          children: "Staked Tokens",
                        }),
                        r.jsxs("span", {
                          className: "text-lg font-semibold text-green-400",
                          children: [
                            e.user.stakedTokens.toLocaleString(),
                            " BGC",
                          ],
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "flex justify-between items-center",
                      children: [
                        r.jsx("span", {
                          className: "text-gold-600",
                          children: "Available for Trading",
                        }),
                        r.jsxs("span", {
                          className: "text-lg font-semibold text-blue-400",
                          children: ["$", (e.user.balance * 0.3).toFixed(2)],
                        }),
                      ],
                    }),
                    r.jsx(M, {
                      className: "w-full mt-4",
                      children: "Manage Portfolio",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        r.jsxs(L, {
          glow: !0,
          children: [
            r.jsxs("div", {
              className: "flex items-center justify-between mb-6",
              children: [
                r.jsx("h2", {
                  className: "text-xl font-semibold text-gold-400",
                  children: "Live Borsa Xəbərləri",
                }),
                r.jsx(gp, { className: "text-gold-600 w-6 h-6" }),
              ],
            }),
            r.jsx("div", {
              className: "flex space-x-1 mb-6 bg-black/50 rounded-lg p-1",
              children: i.map((a) => {
                const o = a.icon;
                return r.jsxs(
                  "button",
                  {
                    onClick: () => n(a.key),
                    className: `flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                      t === a.key
                        ? "bg-gold-600/20 text-gold-400"
                        : "text-gold-600 hover:text-gold-400 hover:bg-gold-600/10"
                    }`,
                    children: [
                      r.jsx(o, { size: 16 }),
                      r.jsx("span", {
                        className: "text-sm font-medium",
                        children: a.label,
                      }),
                    ],
                  },
                  a.key
                );
              }),
            }),
            r.jsx("div", {
              className: "space-y-3 max-h-64 overflow-y-auto",
              children: s[t].map((a, o) =>
                r.jsxs(
                  "div",
                  {
                    className:
                      "flex items-center justify-between p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors cursor-pointer",
                    children: [
                      r.jsxs("div", {
                        className: "flex-1",
                        children: [
                          r.jsx("h3", {
                            className: "text-gold-400 font-medium text-sm mb-1",
                            children: a.title,
                          }),
                          r.jsxs("div", {
                            className:
                              "flex items-center space-x-2 text-xs text-gold-600",
                            children: [
                              r.jsx("span", { children: a.source }),
                              r.jsx("span", { children: "•" }),
                              r.jsx("span", { children: a.time }),
                            ],
                          }),
                        ],
                      }),
                      r.jsx(ip, { className: "text-gold-600 w-4 h-4" }),
                    ],
                  },
                  o
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  _t = ({ isOpen: e, onClose: t, title: n, children: l }) =>
    e
      ? r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center p-4",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/80 backdrop-blur-sm",
              onClick: t,
            }),
            r.jsxs("div", {
              className:
                "relative bg-black/95 border border-gold-600/30 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between p-6 border-b border-gold-600/20",
                  children: [
                    r.jsx("h2", {
                      className: "text-xl font-semibold text-gold-400",
                      children: n,
                    }),
                    r.jsx("button", {
                      onClick: t,
                      className:
                        "text-gold-600 hover:text-gold-400 transition-colors",
                      children: r.jsx(xd, { size: 24 }),
                    }),
                  ],
                }),
                r.jsx("div", { className: "p-6", children: l }),
              ],
            }),
          ],
        })
      : null,
  Ip = () => {
    const [e, t] = N.useState(null),
      [n, l] = N.useState(!1),
      s = [
        {
          id: 1,
          title: "Solar Farm Initiative",
          description: "Large-scale solar panel installation across Azerbaijan",
          icon: ua,
          progress: 75,
          target: "$2.5M",
          raised: "$1.875M",
          participants: 1247,
          deadline: "2025-06-30",
          details:
            "This ambitious solar farm project aims to install 50,000 solar panels across 500 hectares in the Gobustan region. The project will generate clean energy for over 25,000 households while creating 200+ permanent jobs.",
          impact: "150,000 tons CO2 reduction annually",
          location: "Gobustan, Azerbaijan",
        },
        {
          id: 2,
          title: "Wind Energy Expansion",
          description: "Modern wind turbines for sustainable energy generation",
          icon: hd,
          progress: 60,
          target: "$3.2M",
          raised: "$1.92M",
          participants: 892,
          deadline: "2025-09-15",
          details:
            "Installation of 25 advanced wind turbines along the Caspian Sea coast. Each turbine can generate 3MW of clean energy, contributing significantly to Azerbaijan's renewable energy goals.",
          impact: "200,000 tons CO2 reduction annually",
          location: "Caspian Sea Coast",
        },
        {
          id: 3,
          title: "Forest Preservation",
          description: "Protecting ancient forests and biodiversity",
          icon: bp,
          progress: 45,
          target: "$1.8M",
          raised: "$810K",
          participants: 2156,
          deadline: "2025-12-31",
          details:
            "Conservation of 10,000 hectares of ancient forest in the Greater Caucasus region. Includes wildlife protection, reforestation efforts, and sustainable tourism development.",
          impact: "Protecting 500+ species, 80,000 tons CO2 storage",
          location: "Greater Caucasus Mountains",
        },
        {
          id: 4,
          title: "Carbon Offsetting Program",
          description: "Advanced carbon capture and storage technology",
          icon: dd,
          progress: 30,
          target: "$4.5M",
          raised: "$1.35M",
          participants: 567,
          deadline: "2026-03-20",
          details:
            "Deployment of cutting-edge carbon capture technology across industrial zones. This program will capture and store CO2 emissions from major industrial facilities.",
          impact: "500,000 tons CO2 captured annually",
          location: "Industrial zones nationwide",
        },
        {
          id: 5,
          title: "Ocean Cleanup Initiative",
          description: "Cleaning and protecting Caspian Sea waters",
          icon: Cp,
          progress: 55,
          target: "$2.1M",
          raised: "$1.155M",
          participants: 1834,
          deadline: "2025-08-10",
          details:
            "Comprehensive cleanup of Caspian Sea waters using advanced filtration systems and marine waste collection. Includes marine life protection and water quality monitoring.",
          impact: "Clean 1000 km² of water, protect marine life",
          location: "Caspian Sea",
        },
      ],
      i = (o) => {
        t(o), l(!0);
      },
      a = () => {
        l(!1), t(null);
      };
    return r.jsxs("div", {
      className: "space-y-8",
      children: [
        r.jsxs("div", {
          className: "text-center py-8",
          children: [
            r.jsx("h1", {
              className: "text-4xl font-bold text-gold-400 mb-4",
              children: "Ecology & Environmental Projects",
            }),
            r.jsx("p", {
              className: "text-gold-600 text-lg max-w-3xl mx-auto",
              children:
                "Join our mission to create a sustainable future. Invest in renewable energy, conservation, and environmental protection projects that make a real difference.",
            }),
          ],
        }),
        r.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: s.map((o) => {
            const c = o.icon;
            return r.jsxs(
              L,
              {
                glow: !0,
                className: "h-full flex flex-col",
                children: [
                  r.jsxs("div", {
                    className: "flex items-center space-x-3 mb-4",
                    children: [
                      r.jsx("div", {
                        className:
                          "w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center",
                        children: r.jsx(c, {
                          className: "text-green-400 w-6 h-6",
                        }),
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-semibold text-gold-400",
                            children: o.title,
                          }),
                          r.jsx("p", {
                            className: "text-sm text-gold-600",
                            children: o.location,
                          }),
                        ],
                      }),
                    ],
                  }),
                  r.jsx("p", {
                    className: "text-gold-600 text-sm mb-4 flex-1",
                    children: o.description,
                  }),
                  r.jsxs("div", {
                    className: "mb-4",
                    children: [
                      r.jsxs("div", {
                        className:
                          "flex justify-between text-sm text-gold-600 mb-2",
                        children: [
                          r.jsx("span", { children: "Progress" }),
                          r.jsxs("span", { children: [o.progress, "%"] }),
                        ],
                      }),
                      r.jsx("div", {
                        className: "w-full bg-black/50 rounded-full h-3",
                        children: r.jsx("div", {
                          className:
                            "bg-gradient-to-r from-green-600 to-green-400 h-3 rounded-full transition-all duration-300",
                          style: { width: `${o.progress}%` },
                        }),
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    className: "grid grid-cols-2 gap-4 mb-4",
                    children: [
                      r.jsxs("div", {
                        className: "text-center",
                        children: [
                          r.jsxs("div", {
                            className:
                              "flex items-center justify-center space-x-1 text-gold-400 mb-1",
                            children: [
                              r.jsx(Nr, { size: 14 }),
                              r.jsx("span", {
                                className: "text-xs",
                                children: "Target",
                              }),
                            ],
                          }),
                          r.jsx("p", {
                            className: "text-sm font-semibold text-gold-600",
                            children: o.target,
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "text-center",
                        children: [
                          r.jsxs("div", {
                            className:
                              "flex items-center justify-center space-x-1 text-gold-400 mb-1",
                            children: [
                              r.jsx(wr, { size: 14 }),
                              r.jsx("span", {
                                className: "text-xs",
                                children: "Investors",
                              }),
                            ],
                          }),
                          r.jsx("p", {
                            className: "text-sm font-semibold text-gold-600",
                            children: o.participants,
                          }),
                        ],
                      }),
                    ],
                  }),
                  r.jsx("div", {
                    className:
                      "flex items-center justify-between text-sm text-gold-600 mb-4",
                    children: r.jsxs("div", {
                      className: "flex items-center space-x-1",
                      children: [
                        r.jsx(rp, { size: 14 }),
                        r.jsxs("span", {
                          children: [
                            "Deadline: ",
                            new Date(o.deadline).toLocaleDateString(),
                          ],
                        }),
                      ],
                    }),
                  }),
                  r.jsx(M, {
                    onClick: () => i(o),
                    className: "w-full",
                    children: "Join Project",
                  }),
                ],
              },
              o.id
            );
          }),
        }),
        r.jsx(_t, {
          isOpen: n,
          onClose: a,
          title: (e == null ? void 0 : e.title) || "",
          children:
            e &&
            r.jsxs("div", {
              className: "space-y-6",
              children: [
                r.jsxs("div", {
                  className: "flex items-center space-x-3",
                  children: [
                    r.jsx("div", {
                      className:
                        "w-16 h-16 bg-green-600/20 rounded-lg flex items-center justify-center",
                      children: r.jsx(e.icon, {
                        className: "text-green-400 w-8 h-8",
                      }),
                    }),
                    r.jsxs("div", {
                      children: [
                        r.jsx("h3", {
                          className: "text-xl font-semibold text-gold-400",
                          children: e.title,
                        }),
                        r.jsx("p", {
                          className: "text-gold-600",
                          children: e.location,
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "bg-gold-600/10 rounded-lg p-4",
                  children: [
                    r.jsx("h4", {
                      className: "text-gold-400 font-semibold mb-2",
                      children: "Environmental Impact",
                    }),
                    r.jsx("p", {
                      className: "text-gold-600",
                      children: e.impact,
                    }),
                  ],
                }),
                r.jsxs("div", {
                  children: [
                    r.jsx("h4", {
                      className: "text-gold-400 font-semibold mb-2",
                      children: "Project Details",
                    }),
                    r.jsx("p", {
                      className: "text-gold-600 text-sm leading-relaxed",
                      children: e.details,
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "grid grid-cols-3 gap-4 text-center",
                  children: [
                    r.jsxs("div", {
                      className: "bg-black/30 rounded-lg p-3",
                      children: [
                        r.jsx("p", {
                          className: "text-gold-400 font-semibold",
                          children: e.raised,
                        }),
                        r.jsx("p", {
                          className: "text-gold-600 text-xs",
                          children: "Raised",
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "bg-black/30 rounded-lg p-3",
                      children: [
                        r.jsx("p", {
                          className: "text-gold-400 font-semibold",
                          children: e.participants,
                        }),
                        r.jsx("p", {
                          className: "text-gold-600 text-xs",
                          children: "Investors",
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "bg-black/30 rounded-lg p-3",
                      children: [
                        r.jsxs("p", {
                          className: "text-gold-400 font-semibold",
                          children: [e.progress, "%"],
                        }),
                        r.jsx("p", {
                          className: "text-gold-600 text-xs",
                          children: "Complete",
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    r.jsx("h4", {
                      className: "text-gold-400 font-semibold",
                      children: "Investment Options",
                    }),
                    r.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                      children: [
                        r.jsx(M, {
                          variant: "outline",
                          size: "sm",
                          children: "$100",
                        }),
                        r.jsx(M, {
                          variant: "outline",
                          size: "sm",
                          children: "$500",
                        }),
                        r.jsx(M, {
                          variant: "outline",
                          size: "sm",
                          children: "$1,000",
                        }),
                      ],
                    }),
                    r.jsx(M, { className: "w-full", children: "Invest Now" }),
                  ],
                }),
              ],
            }),
        }),
      ],
    });
  },
  Dp = () => {
    var h, f;
    const [e, t] = N.useState("accounts"),
      [n, l] = N.useState(!1),
      [s, i] = N.useState(!1),
      [a, o] = N.useState(!1),
      [c, u] = N.useState("classic"),
      [p, d] = N.useState({
        name: "",
        phone: "",
        address: "",
        cardType: "classic",
      }),
      g = [
        {
          bank: "International Bank of Azerbaijan",
          logo: "🏦",
          iban: "AZ21NABZ00000000137010001944",
          balance: 15420.5,
          type: "Current Account",
        },
        {
          bank: "Kapital Bank",
          logo: "💳",
          iban: "AZ64AIIB37190000010000000001",
          balance: 8750.25,
          type: "Savings Account",
        },
      ],
      x = [
        {
          bank: "International Bank of Azerbaijan",
          amount: 25e3,
          interest: 12.5,
          duration: "36 months",
          monthlyPayment: 832.67,
          status: "Active",
        },
        {
          bank: "Kapital Bank",
          amount: 15e3,
          interest: 14.2,
          duration: "24 months",
          monthlyPayment: 722.45,
          status: "Completed",
        },
      ],
      v = [
        {
          type: "classic",
          name: "Classic Card",
          design: "Black background, gold text, barcode",
          features: [
            "Normal bank interest and commissions",
            "Barcode scanning support",
            "Cardholder Name + Phone Number",
            "Local bank recognition",
          ],
          recognition: "Local banks only",
          price: "Free",
        },
        {
          type: "world",
          name: "World Card",
          design: "Black + dark gold tones, barcode",
          features: [
            "Lower fees, higher limits",
            "International transaction support",
            "Cardholder Name + Phone Number",
            "Enhanced security features",
          ],
          recognition: "Local + integrated international banks",
          price: "$25 annually",
        },
        {
          type: "premium",
          name: "World Premium Card",
          design: "Matte black, gold border, barcode",
          features: [
            "Premium banking privileges",
            "Solar-powered GPS tracking chip",
            "Track card via Black Gold App",
            "Cardholder Name + Phone Number",
            "Concierge services",
          ],
          recognition: "Local + international integrated banks",
          price: "$100 annually",
        },
      ],
      y = () => {
        o(!0);
      },
      k = () => {
        console.log("Card order submitted:", p),
          o(!1),
          d({ name: "", phone: "", address: "", cardType: "classic" });
      };
    return r.jsxs("div", {
      className: "space-y-8",
      children: [
        r.jsxs("div", {
          className: "text-center py-8",
          children: [
            r.jsx("h1", {
              className: "text-4xl font-bold text-gold-400 mb-4",
              children: "Banking & Payment Cards",
            }),
            r.jsx("p", {
              className: "text-gold-600 text-lg max-w-3xl mx-auto",
              children:
                "Manage your bank accounts, apply for loans, and order premium BLACK GOLD cards with advanced features and global recognition.",
            }),
          ],
        }),
        r.jsx("div", {
          className:
            "flex space-x-1 bg-black/50 rounded-lg p-1 max-w-md mx-auto",
          children: [
            { key: "accounts", label: "Bank Accounts", icon: lp },
            { key: "loans", label: "Loans", icon: op },
            { key: "cards", label: "Cards", icon: mi },
          ].map((m) => {
            const j = m.icon;
            return r.jsxs(
              "button",
              {
                onClick: () => t(m.key),
                className: `flex items-center space-x-2 px-4 py-2 rounded-md transition-all flex-1 justify-center ${
                  e === m.key
                    ? "bg-gold-600/20 text-gold-400"
                    : "text-gold-600 hover:text-gold-400 hover:bg-gold-600/10"
                }`,
                children: [
                  r.jsx(j, { size: 16 }),
                  r.jsx("span", {
                    className: "text-sm font-medium",
                    children: m.label,
                  }),
                ],
              },
              m.key
            );
          }),
        }),
        e === "accounts" &&
          r.jsxs("div", {
            className: "space-y-6",
            children: [
              r.jsxs("div", {
                className: "flex justify-between items-center",
                children: [
                  r.jsx("h2", {
                    className: "text-2xl font-semibold text-gold-400",
                    children: "Your Bank Accounts",
                  }),
                  r.jsxs(M, {
                    onClick: () => l(!0),
                    children: [
                      r.jsx(Ao, { size: 16, className: "mr-2" }),
                      "Add Account",
                    ],
                  }),
                ],
              }),
              r.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: g.map((m, j) =>
                  r.jsxs(
                    L,
                    {
                      glow: !0,
                      children: [
                        r.jsxs("div", {
                          className: "flex items-center space-x-4 mb-4",
                          children: [
                            r.jsx("div", {
                              className: "text-3xl",
                              children: m.logo,
                            }),
                            r.jsxs("div", {
                              children: [
                                r.jsx("h3", {
                                  className:
                                    "text-lg font-semibold text-gold-400",
                                  children: m.bank,
                                }),
                                r.jsx("p", {
                                  className: "text-sm text-gold-600",
                                  children: m.type,
                                }),
                              ],
                            }),
                          ],
                        }),
                        r.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            r.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                r.jsx("span", {
                                  className: "text-gold-600",
                                  children: "IBAN:",
                                }),
                                r.jsx("span", {
                                  className: "text-gold-400 font-mono text-sm",
                                  children: m.iban,
                                }),
                              ],
                            }),
                            r.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                r.jsx("span", {
                                  className: "text-gold-600",
                                  children: "Balance:",
                                }),
                                r.jsxs("span", {
                                  className: "text-gold-400 font-semibold",
                                  children: ["$", m.balance.toFixed(2)],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    j
                  )
                ),
              }),
            ],
          }),
        e === "loans" &&
          r.jsxs("div", {
            className: "space-y-6",
            children: [
              r.jsxs("div", {
                className: "flex justify-between items-center",
                children: [
                  r.jsx("h2", {
                    className: "text-2xl font-semibold text-gold-400",
                    children: "Your Loans",
                  }),
                  r.jsxs(M, {
                    onClick: () => i(!0),
                    children: [
                      r.jsx(Ao, { size: 16, className: "mr-2" }),
                      "Apply for Loan",
                    ],
                  }),
                ],
              }),
              r.jsx("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: x.map((m, j) =>
                  r.jsxs(
                    L,
                    {
                      glow: !0,
                      children: [
                        r.jsxs("div", {
                          className: "flex justify-between items-start mb-4",
                          children: [
                            r.jsx("h3", {
                              className: "text-lg font-semibold text-gold-400",
                              children: m.bank,
                            }),
                            r.jsx("span", {
                              className: `px-2 py-1 rounded text-xs font-medium ${
                                m.status === "Active"
                                  ? "bg-green-600/20 text-green-400"
                                  : "bg-gray-600/20 text-gray-400"
                              }`,
                              children: m.status,
                            }),
                          ],
                        }),
                        r.jsxs("div", {
                          className: "grid grid-cols-2 gap-4 text-sm",
                          children: [
                            r.jsxs("div", {
                              children: [
                                r.jsx("span", {
                                  className: "text-gold-600",
                                  children: "Amount:",
                                }),
                                r.jsxs("p", {
                                  className: "text-gold-400 font-semibold",
                                  children: ["$", m.amount.toLocaleString()],
                                }),
                              ],
                            }),
                            r.jsxs("div", {
                              children: [
                                r.jsx("span", {
                                  className: "text-gold-600",
                                  children: "Interest:",
                                }),
                                r.jsxs("p", {
                                  className: "text-gold-400 font-semibold",
                                  children: [m.interest, "%"],
                                }),
                              ],
                            }),
                            r.jsxs("div", {
                              children: [
                                r.jsx("span", {
                                  className: "text-gold-600",
                                  children: "Duration:",
                                }),
                                r.jsx("p", {
                                  className: "text-gold-400 font-semibold",
                                  children: m.duration,
                                }),
                              ],
                            }),
                            r.jsxs("div", {
                              children: [
                                r.jsx("span", {
                                  className: "text-gold-600",
                                  children: "Monthly:",
                                }),
                                r.jsxs("p", {
                                  className: "text-gold-400 font-semibold",
                                  children: ["$", m.monthlyPayment],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    j
                  )
                ),
              }),
            ],
          }),
        e === "cards" &&
          r.jsxs("div", {
            className: "space-y-8",
            children: [
              r.jsxs("div", {
                className: "text-center",
                children: [
                  r.jsx("h2", {
                    className: "text-2xl font-semibold text-gold-400 mb-4",
                    children: "BLACK GOLD Premium Cards",
                  }),
                  r.jsx("p", {
                    className: "text-gold-600",
                    children:
                      "Choose from our exclusive card collection with advanced features",
                  }),
                ],
              }),
              r.jsx("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: v.map((m) =>
                  r.jsxs(
                    L,
                    {
                      glow: !0,
                      className: `relative ${
                        c === m.type ? "ring-2 ring-gold-400" : ""
                      }`,
                      children: [
                        r.jsxs("div", {
                          className: "text-center mb-6",
                          children: [
                            r.jsxs("div", {
                              className:
                                "w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold-600 to-gold-400 rounded-lg flex items-center justify-center",
                              children: [
                                m.type === "classic" &&
                                  r.jsx(mi, {
                                    className: "text-black w-8 h-8",
                                  }),
                                m.type === "world" &&
                                  r.jsx(Fr, {
                                    className: "text-black w-8 h-8",
                                  }),
                                m.type === "premium" &&
                                  r.jsx(yp, {
                                    className: "text-black w-8 h-8",
                                  }),
                              ],
                            }),
                            r.jsx("h3", {
                              className:
                                "text-xl font-semibold text-gold-400 mb-2",
                              children: m.name,
                            }),
                            r.jsx("p", {
                              className: "text-gold-600 text-sm mb-4",
                              children: m.design,
                            }),
                            r.jsx("p", {
                              className: "text-gold-400 font-semibold",
                              children: m.price,
                            }),
                          ],
                        }),
                        r.jsxs("div", {
                          className: "space-y-3 mb-6",
                          children: [
                            r.jsx("h4", {
                              className: "text-gold-400 font-medium",
                              children: "Features:",
                            }),
                            r.jsx("ul", {
                              className: "space-y-2",
                              children: m.features.map((j, S) =>
                                r.jsxs(
                                  "li",
                                  {
                                    className:
                                      "text-gold-600 text-sm flex items-start space-x-2",
                                    children: [
                                      r.jsx("span", {
                                        className: "text-gold-400 mt-1",
                                        children: "•",
                                      }),
                                      r.jsx("span", { children: j }),
                                    ],
                                  },
                                  S
                                )
                              ),
                            }),
                          ],
                        }),
                        r.jsxs("div", {
                          className: "mb-6",
                          children: [
                            r.jsx("h4", {
                              className: "text-gold-400 font-medium mb-2",
                              children: "Recognition:",
                            }),
                            r.jsx("p", {
                              className: "text-gold-600 text-sm",
                              children: m.recognition,
                            }),
                          ],
                        }),
                        r.jsxs(M, {
                          onClick: () => {
                            u(m.type), d({ ...p, cardType: m.type }), y();
                          },
                          className: "w-full",
                          variant: c === m.type ? "primary" : "secondary",
                          children: ["Order ", m.name],
                        }),
                        m.type === "premium" &&
                          r.jsx("div", {
                            className: "mt-4 p-3 bg-gold-600/10 rounded-lg",
                            children: r.jsxs("div", {
                              className:
                                "flex items-center space-x-2 text-gold-400 text-sm",
                              children: [
                                r.jsx(md, { size: 14 }),
                                r.jsx("span", {
                                  children: "GPS Tracking Available",
                                }),
                              ],
                            }),
                          }),
                      ],
                    },
                    m.type
                  )
                ),
              }),
            ],
          }),
        r.jsx(_t, {
          isOpen: n,
          onClose: () => l(!1),
          title: "Add New Bank Account",
          children: r.jsxs("div", {
            className: "space-y-4",
            children: [
              r.jsxs("div", {
                children: [
                  r.jsx("label", {
                    className: "block text-gold-400 text-sm font-medium mb-2",
                    children: "Bank Name",
                  }),
                  r.jsx("input", {
                    type: "text",
                    className:
                      "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                    placeholder: "Enter bank name",
                  }),
                ],
              }),
              r.jsxs("div", {
                children: [
                  r.jsx("label", {
                    className: "block text-gold-400 text-sm font-medium mb-2",
                    children: "IBAN",
                  }),
                  r.jsx("input", {
                    type: "text",
                    className:
                      "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                    placeholder: "AZ21NABZ00000000137010001944",
                  }),
                ],
              }),
              r.jsxs("div", {
                children: [
                  r.jsx("label", {
                    className: "block text-gold-400 text-sm font-medium mb-2",
                    children: "Account Type",
                  }),
                  r.jsxs("select", {
                    className:
                      "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                    children: [
                      r.jsx("option", {
                        value: "current",
                        children: "Current Account",
                      }),
                      r.jsx("option", {
                        value: "savings",
                        children: "Savings Account",
                      }),
                      r.jsx("option", {
                        value: "business",
                        children: "Business Account",
                      }),
                    ],
                  }),
                ],
              }),
              r.jsx(M, { className: "w-full", children: "Add Account" }),
            ],
          }),
        }),
        r.jsx(_t, {
          isOpen: s,
          onClose: () => i(!1),
          title: "Apply for Loan",
          children: r.jsxs("div", {
            className: "space-y-4",
            children: [
              r.jsxs("div", {
                children: [
                  r.jsx("label", {
                    className: "block text-gold-400 text-sm font-medium mb-2",
                    children: "Loan Amount",
                  }),
                  r.jsx("input", {
                    type: "number",
                    className:
                      "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                    placeholder: "25000",
                  }),
                ],
              }),
              r.jsxs("div", {
                children: [
                  r.jsx("label", {
                    className: "block text-gold-400 text-sm font-medium mb-2",
                    children: "Purpose",
                  }),
                  r.jsxs("select", {
                    className:
                      "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                    children: [
                      r.jsx("option", {
                        value: "business",
                        children: "Business Investment",
                      }),
                      r.jsx("option", {
                        value: "personal",
                        children: "Personal Use",
                      }),
                      r.jsx("option", {
                        value: "property",
                        children: "Property Purchase",
                      }),
                      r.jsx("option", {
                        value: "education",
                        children: "Education",
                      }),
                    ],
                  }),
                ],
              }),
              r.jsxs("div", {
                children: [
                  r.jsx("label", {
                    className: "block text-gold-400 text-sm font-medium mb-2",
                    children: "Loan Term",
                  }),
                  r.jsxs("select", {
                    className:
                      "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                    children: [
                      r.jsx("option", { value: "12", children: "12 months" }),
                      r.jsx("option", { value: "24", children: "24 months" }),
                      r.jsx("option", { value: "36", children: "36 months" }),
                      r.jsx("option", { value: "48", children: "48 months" }),
                    ],
                  }),
                ],
              }),
              r.jsx("div", {
                className: "bg-gold-600/10 rounded-lg p-4",
                children: r.jsxs("p", {
                  className: "text-gold-400 text-sm",
                  children: [
                    r.jsx("strong", { children: "Estimated Interest:" }),
                    " 12.5% APR",
                    r.jsx("br", {}),
                    r.jsx("strong", { children: "Monthly Payment:" }),
                    " ~$832.67",
                    r.jsx("br", {}),
                    r.jsx("strong", { children: "Total Cost:" }),
                    " ~$29,976",
                  ],
                }),
              }),
              r.jsx(M, { className: "w-full", children: "Submit Application" }),
            ],
          }),
        }),
        r.jsx(_t, {
          isOpen: a,
          onClose: () => o(!1),
          title: `Order ${
            (h = v.find((m) => m.type === c)) == null ? void 0 : h.name
          }`,
          children: r.jsxs("div", {
            className: "space-y-6",
            children: [
              r.jsxs("div", {
                className:
                  "bg-gradient-to-r from-black to-gray-900 rounded-xl p-6 border border-gold-600/30",
                children: [
                  r.jsxs("div", {
                    className: "flex justify-between items-start mb-4",
                    children: [
                      r.jsxs("div", {
                        children: [
                          r.jsx("h3", {
                            className: "text-gold-400 font-bold text-lg",
                            children: "BLACK GOLD",
                          }),
                          r.jsx("p", {
                            className: "text-gold-600 text-sm",
                            children:
                              (f = v.find((m) => m.type === c)) == null
                                ? void 0
                                : f.name,
                          }),
                        ],
                      }),
                      r.jsx(vp, { className: "text-gold-400 w-8 h-8" }),
                    ],
                  }),
                  r.jsxs("div", {
                    className: "space-y-2 mb-4",
                    children: [
                      r.jsx("p", {
                        className: "text-gold-400 font-mono",
                        children: "**** **** **** 1234",
                      }),
                      r.jsxs("div", {
                        className: "flex justify-between text-sm",
                        children: [
                          r.jsx("span", {
                            className: "text-gold-600",
                            children: "VALID THRU",
                          }),
                          r.jsx("span", {
                            className: "text-gold-400",
                            children: "12/28",
                          }),
                        ],
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    className: "border-t border-gold-600/20 pt-4",
                    children: [
                      r.jsx("p", {
                        className: "text-gold-400 text-sm",
                        children: p.name || "CARD HOLDER NAME",
                      }),
                      r.jsx("p", {
                        className: "text-gold-600 text-xs",
                        children: p.phone || "+994 XX XXX XX XX",
                      }),
                    ],
                  }),
                ],
              }),
              r.jsxs("div", {
                className: "space-y-4",
                children: [
                  r.jsxs("div", {
                    children: [
                      r.jsx("label", {
                        className:
                          "block text-gold-400 text-sm font-medium mb-2",
                        children: "Full Name",
                      }),
                      r.jsx("input", {
                        type: "text",
                        value: p.name,
                        onChange: (m) => d({ ...p, name: m.target.value }),
                        className:
                          "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                        placeholder: "Enter your full name",
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    children: [
                      r.jsx("label", {
                        className:
                          "block text-gold-400 text-sm font-medium mb-2",
                        children: "Phone Number",
                      }),
                      r.jsx("input", {
                        type: "tel",
                        value: p.phone,
                        onChange: (m) => d({ ...p, phone: m.target.value }),
                        className:
                          "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                        placeholder: "+994 XX XXX XX XX",
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    children: [
                      r.jsx("label", {
                        className:
                          "block text-gold-400 text-sm font-medium mb-2",
                        children: "Delivery Address",
                      }),
                      r.jsx("textarea", {
                        value: p.address,
                        onChange: (m) => d({ ...p, address: m.target.value }),
                        className:
                          "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none h-20",
                        placeholder:
                          "Enter your full address for card delivery",
                      }),
                    ],
                  }),
                ],
              }),
              r.jsxs("div", {
                className: "flex space-x-4",
                children: [
                  r.jsx(M, {
                    variant: "outline",
                    onClick: () => o(!1),
                    className: "flex-1",
                    children: "Cancel",
                  }),
                  r.jsx(M, {
                    onClick: k,
                    className: "flex-1",
                    children: "Order Card",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  $p = () => {
    var g;
    const [e, t] = N.useState("crypto"),
      [n, l] = N.useState(!1),
      [s, i] = N.useState(null),
      [a, o] = N.useState("buy"),
      c = [
        {
          symbol: "BGC",
          name: "Black Gold Coin",
          price: 0.845,
          change: 2.8,
          volume: "2.5M",
        },
        {
          symbol: "BTC",
          name: "Bitcoin",
          price: 43245.67,
          change: -1.2,
          volume: "28.5B",
        },
        {
          symbol: "ETH",
          name: "Ethereum",
          price: 2567.89,
          change: 3.4,
          volume: "15.2B",
        },
        {
          symbol: "ADA",
          name: "Cardano",
          price: 0.48,
          change: 5.1,
          volume: "890M",
        },
        {
          symbol: "SOL",
          name: "Solana",
          price: 98.45,
          change: -2.3,
          volume: "2.1B",
        },
      ],
      u = [
        {
          id: 1,
          seller: "EnergyTrader_AZ",
          asset: "BGC",
          amount: 5e3,
          price: 0.85,
          total: 4250,
          rating: 4.8,
          trades: 156,
          method: "Bank Transfer",
        },
        {
          id: 2,
          seller: "CryptoKing92",
          asset: "BTC",
          amount: 0.5,
          price: 43100,
          total: 21550,
          rating: 4.9,
          trades: 89,
          method: "Cash",
        },
        {
          id: 3,
          seller: "GoldMiner_Baku",
          asset: "ETH",
          amount: 10,
          price: 2580,
          total: 25800,
          rating: 4.7,
          trades: 234,
          method: "Bank Transfer",
        },
      ],
      p = [
        {
          symbol: "TSLA",
          name: "Tesla Inc.",
          price: 248.5,
          change: 1.8,
          sector: "Automotive",
        },
        {
          symbol: "AAPL",
          name: "Apple Inc.",
          price: 192.75,
          change: -0.5,
          sector: "Technology",
        },
        {
          symbol: "SHEL",
          name: "Shell PLC",
          price: 58.9,
          change: 2.1,
          sector: "Energy",
        },
        {
          symbol: "MSFT",
          name: "Microsoft Corp.",
          price: 378.25,
          change: 0.8,
          sector: "Technology",
        },
      ],
      d = (x, v) => {
        i(x), o(v), l(!0);
      };
    return r.jsxs("div", {
      className: "space-y-8",
      children: [
        r.jsxs("div", {
          className: "text-center py-8",
          children: [
            r.jsx("h1", {
              className: "text-4xl font-bold text-gold-400 mb-4",
              children: "Trading & Marketplace",
            }),
            r.jsx("p", {
              className: "text-gold-600 text-lg max-w-3xl mx-auto",
              children:
                "Trade cryptocurrencies, tokenized stocks, and energy assets. Connect with other traders in our P2P marketplace.",
            }),
          ],
        }),
        r.jsx("div", {
          className:
            "flex space-x-1 bg-black/50 rounded-lg p-1 max-w-lg mx-auto",
          children: [
            { key: "crypto", label: "Cryptocurrency", icon: np },
            { key: "p2p", label: "P2P Market", icon: wr },
            { key: "stocks", label: "Tokenized Stocks", icon: et },
          ].map((x) => {
            const v = x.icon;
            return r.jsxs(
              "button",
              {
                onClick: () => t(x.key),
                className: `flex items-center space-x-2 px-4 py-2 rounded-md transition-all flex-1 justify-center ${
                  e === x.key
                    ? "bg-gold-600/20 text-gold-400"
                    : "text-gold-600 hover:text-gold-400 hover:bg-gold-600/10"
                }`,
                children: [
                  r.jsx(v, { size: 16 }),
                  r.jsx("span", {
                    className: "text-sm font-medium",
                    children: x.label,
                  }),
                ],
              },
              x.key
            );
          }),
        }),
        e === "crypto" &&
          r.jsxs("div", {
            className: "space-y-6",
            children: [
              r.jsxs("div", {
                className: "flex justify-between items-center",
                children: [
                  r.jsx("h2", {
                    className: "text-2xl font-semibold text-gold-400",
                    children: "Cryptocurrency Markets",
                  }),
                  r.jsxs("div", {
                    className: "flex space-x-2",
                    children: [
                      r.jsxs(M, {
                        variant: "outline",
                        size: "sm",
                        children: [
                          r.jsx(up, { size: 16, className: "mr-2" }),
                          "Filter",
                        ],
                      }),
                      r.jsxs(M, {
                        variant: "outline",
                        size: "sm",
                        children: [
                          r.jsx(jp, { size: 16, className: "mr-2" }),
                          "Search",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              r.jsx(L, {
                glow: !0,
                children: r.jsx("div", {
                  className: "overflow-x-auto",
                  children: r.jsxs("table", {
                    className: "w-full",
                    children: [
                      r.jsx("thead", {
                        children: r.jsxs("tr", {
                          className: "border-b border-gold-600/20",
                          children: [
                            r.jsx("th", {
                              className: "text-left py-3 text-gold-400",
                              children: "Asset",
                            }),
                            r.jsx("th", {
                              className: "text-right py-3 text-gold-400",
                              children: "Price",
                            }),
                            r.jsx("th", {
                              className: "text-right py-3 text-gold-400",
                              children: "24h Change",
                            }),
                            r.jsx("th", {
                              className: "text-right py-3 text-gold-400",
                              children: "Volume",
                            }),
                            r.jsx("th", {
                              className: "text-right py-3 text-gold-400",
                              children: "Actions",
                            }),
                          ],
                        }),
                      }),
                      r.jsx("tbody", {
                        children: c.map((x) =>
                          r.jsxs(
                            "tr",
                            {
                              className:
                                "border-b border-gold-600/10 hover:bg-gold-600/5",
                              children: [
                                r.jsx("td", {
                                  className: "py-4",
                                  children: r.jsxs("div", {
                                    children: [
                                      r.jsx("div", {
                                        className:
                                          "font-semibold text-gold-400",
                                        children: x.symbol,
                                      }),
                                      r.jsx("div", {
                                        className: "text-sm text-gold-600",
                                        children: x.name,
                                      }),
                                    ],
                                  }),
                                }),
                                r.jsxs("td", {
                                  className:
                                    "text-right py-4 text-gold-400 font-semibold",
                                  children: [
                                    "$",
                                    x.price.toFixed(x.price < 1 ? 3 : 2),
                                  ],
                                }),
                                r.jsxs("td", {
                                  className: `text-right py-4 font-semibold ${
                                    x.change >= 0
                                      ? "text-green-400"
                                      : "text-red-400"
                                  }`,
                                  children: [
                                    x.change >= 0 ? "+" : "",
                                    x.change,
                                    "%",
                                  ],
                                }),
                                r.jsx("td", {
                                  className: "text-right py-4 text-gold-600",
                                  children: x.volume,
                                }),
                                r.jsx("td", {
                                  className: "text-right py-4",
                                  children: r.jsxs("div", {
                                    className: "flex space-x-2 justify-end",
                                    children: [
                                      r.jsx(M, {
                                        size: "sm",
                                        variant: "outline",
                                        onClick: () => d(x, "buy"),
                                        children: "Buy",
                                      }),
                                      r.jsx(M, {
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: () => d(x, "sell"),
                                        children: "Sell",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            x.symbol
                          )
                        ),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        e === "p2p" &&
          r.jsxs("div", {
            className: "space-y-6",
            children: [
              r.jsxs("div", {
                className: "flex justify-between items-center",
                children: [
                  r.jsx("h2", {
                    className: "text-2xl font-semibold text-gold-400",
                    children: "P2P Marketplace",
                  }),
                  r.jsx(M, { children: "Create Listing" }),
                ],
              }),
              r.jsx("div", {
                className: "grid gap-6",
                children: u.map((x) =>
                  r.jsx(
                    L,
                    {
                      glow: !0,
                      children: r.jsxs("div", {
                        className: "flex justify-between items-start",
                        children: [
                          r.jsxs("div", {
                            className: "flex-1",
                            children: [
                              r.jsx("div", {
                                className: "flex items-center space-x-4 mb-4",
                                children: r.jsxs("div", {
                                  children: [
                                    r.jsx("h3", {
                                      className:
                                        "text-lg font-semibold text-gold-400",
                                      children: x.seller,
                                    }),
                                    r.jsxs("div", {
                                      className:
                                        "flex items-center space-x-2 text-sm text-gold-600",
                                      children: [
                                        r.jsxs("span", {
                                          children: ["⭐ ", x.rating],
                                        }),
                                        r.jsx("span", { children: "•" }),
                                        r.jsxs("span", {
                                          children: [x.trades, " trades"],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              r.jsxs("div", {
                                className:
                                  "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",
                                children: [
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className: "text-gold-600",
                                        children: "Asset:",
                                      }),
                                      r.jsx("p", {
                                        className:
                                          "text-gold-400 font-semibold",
                                        children: x.asset,
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className: "text-gold-600",
                                        children: "Amount:",
                                      }),
                                      r.jsx("p", {
                                        className:
                                          "text-gold-400 font-semibold",
                                        children: x.amount.toLocaleString(),
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className: "text-gold-600",
                                        children: "Price:",
                                      }),
                                      r.jsxs("p", {
                                        className:
                                          "text-gold-400 font-semibold",
                                        children: ["$", x.price],
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className: "text-gold-600",
                                        children: "Payment:",
                                      }),
                                      r.jsx("p", {
                                        className:
                                          "text-gold-400 font-semibold",
                                        children: x.method,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "text-right",
                            children: [
                              r.jsxs("p", {
                                className:
                                  "text-2xl font-bold text-gold-400 mb-2",
                                children: ["$", x.total.toLocaleString()],
                              }),
                              r.jsx(M, { size: "sm", children: "Trade Now" }),
                            ],
                          }),
                        ],
                      }),
                    },
                    x.id
                  )
                ),
              }),
            ],
          }),
        e === "stocks" &&
          r.jsxs("div", {
            className: "space-y-6",
            children: [
              r.jsxs("div", {
                className: "flex justify-between items-center",
                children: [
                  r.jsx("h2", {
                    className: "text-2xl font-semibold text-gold-400",
                    children: "Tokenized Stocks",
                  }),
                  r.jsx(M, {
                    variant: "outline",
                    size: "sm",
                    children: "View All Markets",
                  }),
                ],
              }),
              r.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: p.map((x) =>
                  r.jsxs(
                    L,
                    {
                      glow: !0,
                      children: [
                        r.jsxs("div", {
                          className: "flex justify-between items-start mb-4",
                          children: [
                            r.jsxs("div", {
                              children: [
                                r.jsx("h3", {
                                  className:
                                    "text-lg font-semibold text-gold-400",
                                  children: x.symbol,
                                }),
                                r.jsx("p", {
                                  className: "text-gold-600 text-sm",
                                  children: x.name,
                                }),
                                r.jsx("span", {
                                  className:
                                    "inline-block px-2 py-1 bg-gold-600/20 text-gold-400 text-xs rounded mt-2",
                                  children: x.sector,
                                }),
                              ],
                            }),
                            r.jsxs("div", {
                              className: "text-right",
                              children: [
                                r.jsxs("p", {
                                  className: "text-xl font-bold text-gold-400",
                                  children: ["$", x.price],
                                }),
                                r.jsxs("p", {
                                  className: `text-sm font-semibold ${
                                    x.change >= 0
                                      ? "text-green-400"
                                      : "text-red-400"
                                  }`,
                                  children: [
                                    x.change >= 0 ? "+" : "",
                                    x.change,
                                    "%",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        r.jsxs("div", {
                          className: "flex space-x-2",
                          children: [
                            r.jsx(M, {
                              size: "sm",
                              className: "flex-1",
                              onClick: () => d(x, "buy"),
                              children: "Buy Tokens",
                            }),
                            r.jsx(M, {
                              size: "sm",
                              variant: "outline",
                              className: "flex-1",
                              onClick: () => d(x, "sell"),
                              children: "Sell Tokens",
                            }),
                          ],
                        }),
                      ],
                    },
                    x.symbol
                  )
                ),
              }),
            ],
          }),
        r.jsx(_t, {
          isOpen: n,
          onClose: () => l(!1),
          title: `${a === "buy" ? "Buy" : "Sell"} ${
            (s == null ? void 0 : s.symbol) || (s == null ? void 0 : s.name)
          }`,
          children:
            s &&
            r.jsxs("div", {
              className: "space-y-6",
              children: [
                r.jsx("div", {
                  className: "bg-gold-600/10 rounded-lg p-4",
                  children: r.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [
                      r.jsx("span", {
                        className: "text-gold-600",
                        children: "Current Price:",
                      }),
                      r.jsxs("span", {
                        className: "text-xl font-bold text-gold-400",
                        children: [
                          "$",
                          (g = s.price) == null
                            ? void 0
                            : g.toFixed(s.price < 1 ? 3 : 2),
                        ],
                      }),
                    ],
                  }),
                }),
                r.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    r.jsxs("div", {
                      children: [
                        r.jsxs("label", {
                          className:
                            "block text-gold-400 text-sm font-medium mb-2",
                          children: ["Amount to ", a],
                        }),
                        r.jsx("input", {
                          type: "number",
                          className:
                            "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                          placeholder: "0.00",
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      children: [
                        r.jsx("label", {
                          className:
                            "block text-gold-400 text-sm font-medium mb-2",
                          children: "Order Type",
                        }),
                        r.jsxs("select", {
                          className:
                            "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                          children: [
                            r.jsx("option", {
                              value: "market",
                              children: "Market Order",
                            }),
                            r.jsx("option", {
                              value: "limit",
                              children: "Limit Order",
                            }),
                            r.jsx("option", {
                              value: "stop",
                              children: "Stop Order",
                            }),
                          ],
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "bg-black/30 rounded-lg p-4 space-y-2",
                      children: [
                        r.jsxs("div", {
                          className: "flex justify-between text-sm",
                          children: [
                            r.jsx("span", {
                              className: "text-gold-600",
                              children: "Estimated Total:",
                            }),
                            r.jsx("span", {
                              className: "text-gold-400",
                              children: "$0.00",
                            }),
                          ],
                        }),
                        r.jsxs("div", {
                          className: "flex justify-between text-sm",
                          children: [
                            r.jsx("span", {
                              className: "text-gold-600",
                              children: "Trading Fee:",
                            }),
                            r.jsx("span", {
                              className: "text-gold-400",
                              children: "0.1%",
                            }),
                          ],
                        }),
                        r.jsxs("div", {
                          className:
                            "flex justify-between text-sm font-semibold",
                          children: [
                            r.jsx("span", {
                              className: "text-gold-400",
                              children: "Final Amount:",
                            }),
                            r.jsx("span", {
                              className: "text-gold-400",
                              children: "$0.00",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "flex space-x-4",
                  children: [
                    r.jsx(M, {
                      variant: "outline",
                      onClick: () => l(!1),
                      className: "flex-1",
                      children: "Cancel",
                    }),
                    r.jsxs(M, {
                      className: "flex-1",
                      children: [
                        a === "buy" ? "Buy" : "Sell",
                        " ",
                        s.symbol || s.name,
                      ],
                    }),
                  ],
                }),
              ],
            }),
        }),
      ],
    });
  },
  Fp = () => {
    const { state: e } = xl(),
      [t, n] = N.useState(!1),
      [l, s] = N.useState(null),
      [i, a] = N.useState(""),
      o = [
        {
          name: "Oil Futures",
          symbol: "OIL",
          price: 82.45,
          change: -1.47,
          apy: 8.5,
          description:
            "Stake in global oil futures and earn returns from price movements",
          icon: cd,
          color: "orange",
          minStake: 100,
          lockPeriod: "30 days",
        },
        {
          name: "Solar Energy",
          symbol: "SOLAR",
          price: 156.78,
          change: 2.25,
          apy: 12.3,
          description:
            "Invest in solar energy projects and earn from clean energy production",
          icon: ua,
          color: "yellow",
          minStake: 50,
          lockPeriod: "90 days",
        },
        {
          name: "Wind Power",
          symbol: "WIND",
          price: 89.45,
          change: 1.39,
          apy: 10.7,
          description:
            "Stake in wind energy infrastructure and benefit from renewable power",
          icon: hd,
          color: "blue",
          minStake: 75,
          lockPeriod: "60 days",
        },
        {
          name: "Energy Grid",
          symbol: "GRID",
          price: 245.6,
          change: 3.82,
          apy: 15.2,
          description:
            "Participate in smart grid development and modernization",
          icon: ol,
          color: "purple",
          minStake: 200,
          lockPeriod: "180 days",
        },
      ],
      c = [
        {
          name: "Starter Plan",
          duration: "30 days",
          apy: 8,
          minAmount: 100,
          features: ["Daily rewards", "Early withdrawal", "Basic support"],
        },
        {
          name: "Growth Plan",
          duration: "90 days",
          apy: 12.5,
          minAmount: 500,
          features: [
            "Daily rewards",
            "Compound interest",
            "Priority support",
            "Bonus rewards",
          ],
        },
        {
          name: "Premium Plan",
          duration: "180 days",
          apy: 18,
          minAmount: 1e3,
          features: [
            "Daily rewards",
            "Compound interest",
            "VIP support",
            "Exclusive access",
            "Insurance",
          ],
        },
      ],
      u = [
        {
          resource: "Solar Energy",
          amount: 2500,
          apy: 12.3,
          startDate: "2024-12-01",
          endDate: "2025-03-01",
          earned: 156.25,
          status: "Active",
        },
        {
          resource: "Wind Power",
          amount: 1800,
          apy: 10.7,
          startDate: "2024-11-15",
          endDate: "2025-01-15",
          earned: 89.4,
          status: "Active",
        },
        {
          resource: "Oil Futures",
          amount: 5e3,
          apy: 8.5,
          startDate: "2024-10-01",
          endDate: "2024-11-01",
          earned: 354.17,
          status: "Completed",
        },
      ],
      p = (x) => {
        s(x), n(!0);
      },
      d = () => {
        console.log("Staking:", i, "in", l == null ? void 0 : l.name),
          n(!1),
          a("");
      },
      g = (x) =>
        ({
          orange: "text-orange-400 bg-orange-600/20",
          yellow: "text-yellow-400 bg-yellow-600/20",
          blue: "text-blue-400 bg-blue-600/20",
          purple: "text-purple-400 bg-purple-600/20",
        }[x] || "text-gold-400 bg-gold-600/20");
    return r.jsxs("div", {
      className: "space-y-8",
      children: [
        r.jsxs("div", {
          className: "text-center py-8",
          children: [
            r.jsx("h1", {
              className: "text-4xl font-bold text-gold-400 mb-4",
              children: "Energy Resources & Staking",
            }),
            r.jsx("p", {
              className: "text-gold-600 text-lg max-w-3xl mx-auto",
              children:
                "Stake your tokens in energy resources and renewable projects. Earn rewards while contributing to sustainable energy development.",
            }),
          ],
        }),
        r.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6",
          children: [
            r.jsxs(L, {
              glow: !0,
              className: "text-center",
              children: [
                r.jsx(ol, { className: "w-8 h-8 text-gold-400 mx-auto mb-4" }),
                r.jsx("h3", {
                  className: "text-gold-600 text-sm font-medium mb-2",
                  children: "Total Staked",
                }),
                r.jsxs("p", {
                  className: "text-2xl font-bold text-gold-400",
                  children: [e.user.stakedTokens.toLocaleString(), " BGC"],
                }),
              ],
            }),
            r.jsxs(L, {
              glow: !0,
              className: "text-center",
              children: [
                r.jsx(et, { className: "w-8 h-8 text-green-400 mx-auto mb-4" }),
                r.jsx("h3", {
                  className: "text-gold-600 text-sm font-medium mb-2",
                  children: "Total Rewards",
                }),
                r.jsx("p", {
                  className: "text-2xl font-bold text-green-400",
                  children: "599.82 BGC",
                }),
              ],
            }),
            r.jsxs(L, {
              glow: !0,
              className: "text-center",
              children: [
                r.jsx(ep, { className: "w-8 h-8 text-blue-400 mx-auto mb-4" }),
                r.jsx("h3", {
                  className: "text-gold-600 text-sm font-medium mb-2",
                  children: "Average APY",
                }),
                r.jsx("p", {
                  className: "text-2xl font-bold text-blue-400",
                  children: "12.8%",
                }),
              ],
            }),
          ],
        }),
        r.jsxs("div", {
          className: "space-y-6",
          children: [
            r.jsx("h2", {
              className: "text-2xl font-semibold text-gold-400",
              children: "Available Energy Resources",
            }),
            r.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: o.map((x) => {
                const v = x.icon,
                  y = g(x.color);
                return r.jsxs(
                  L,
                  {
                    glow: !0,
                    children: [
                      r.jsxs("div", {
                        className: "flex items-start justify-between mb-4",
                        children: [
                          r.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [
                              r.jsx("div", {
                                className: `w-12 h-12 rounded-lg flex items-center justify-center ${y}`,
                                children: r.jsx(v, { className: "w-6 h-6" }),
                              }),
                              r.jsxs("div", {
                                children: [
                                  r.jsx("h3", {
                                    className:
                                      "text-lg font-semibold text-gold-400",
                                    children: x.name,
                                  }),
                                  r.jsx("p", {
                                    className: "text-sm text-gold-600",
                                    children: x.symbol,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "text-right",
                            children: [
                              r.jsxs("p", {
                                className: "text-lg font-bold text-gold-400",
                                children: ["$", x.price],
                              }),
                              r.jsxs("p", {
                                className: `text-sm font-semibold ${
                                  x.change >= 0
                                    ? "text-green-400"
                                    : "text-red-400"
                                }`,
                                children: [
                                  x.change >= 0 ? "+" : "",
                                  x.change,
                                  "%",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      r.jsx("p", {
                        className: "text-gold-600 text-sm mb-4",
                        children: x.description,
                      }),
                      r.jsxs("div", {
                        className: "grid grid-cols-3 gap-4 mb-4 text-sm",
                        children: [
                          r.jsxs("div", {
                            className: "text-center",
                            children: [
                              r.jsx("p", {
                                className: "text-gold-600",
                                children: "APY",
                              }),
                              r.jsxs("p", {
                                className: "text-gold-400 font-semibold",
                                children: [x.apy, "%"],
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "text-center",
                            children: [
                              r.jsx("p", {
                                className: "text-gold-600",
                                children: "Min Stake",
                              }),
                              r.jsxs("p", {
                                className: "text-gold-400 font-semibold",
                                children: ["$", x.minStake],
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "text-center",
                            children: [
                              r.jsx("p", {
                                className: "text-gold-600",
                                children: "Lock Period",
                              }),
                              r.jsx("p", {
                                className: "text-gold-400 font-semibold",
                                children: x.lockPeriod,
                              }),
                            ],
                          }),
                        ],
                      }),
                      r.jsx(M, {
                        onClick: () => p(x),
                        className: "w-full",
                        children: "Stake Now",
                      }),
                    ],
                  },
                  x.symbol
                );
              }),
            }),
          ],
        }),
        r.jsxs("div", {
          className: "space-y-6",
          children: [
            r.jsx("h2", {
              className: "text-2xl font-semibold text-gold-400",
              children: "Staking Plans",
            }),
            r.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-6",
              children: c.map((x, v) =>
                r.jsxs(
                  L,
                  {
                    glow: !0,
                    className: v === 1 ? "ring-2 ring-gold-400" : "",
                    children: [
                      v === 1 &&
                        r.jsx("div", {
                          className: "text-center mb-4",
                          children: r.jsx("span", {
                            className:
                              "bg-gold-400 text-black px-3 py-1 rounded-full text-sm font-semibold",
                            children: "MOST POPULAR",
                          }),
                        }),
                      r.jsxs("div", {
                        className: "text-center mb-6",
                        children: [
                          r.jsx("h3", {
                            className:
                              "text-xl font-semibold text-gold-400 mb-2",
                            children: x.name,
                          }),
                          r.jsxs("div", {
                            className:
                              "flex items-center justify-center space-x-1",
                            children: [
                              r.jsxs("span", {
                                className: "text-3xl font-bold text-gold-400",
                                children: [x.apy, "%"],
                              }),
                              r.jsx("span", {
                                className: "text-gold-600",
                                children: "APY",
                              }),
                            ],
                          }),
                          r.jsxs("p", {
                            className: "text-gold-600 text-sm mt-2",
                            children: [x.duration, " lock period"],
                          }),
                        ],
                      }),
                      r.jsx("div", {
                        className: "space-y-3 mb-6",
                        children: x.features.map((y, k) =>
                          r.jsxs(
                            "div",
                            {
                              className: "flex items-center space-x-2",
                              children: [
                                r.jsx("span", {
                                  className: "text-green-400",
                                  children: "✓",
                                }),
                                r.jsx("span", {
                                  className: "text-gold-600 text-sm",
                                  children: y,
                                }),
                              ],
                            },
                            k
                          )
                        ),
                      }),
                      r.jsxs("div", {
                        className: "text-center mb-4",
                        children: [
                          r.jsx("p", {
                            className: "text-gold-600 text-sm",
                            children: "Minimum stake",
                          }),
                          r.jsxs("p", {
                            className: "text-gold-400 font-semibold",
                            children: ["$", x.minAmount],
                          }),
                        ],
                      }),
                      r.jsx(M, {
                        variant: v === 1 ? "primary" : "secondary",
                        className: "w-full",
                        children: "Choose Plan",
                      }),
                    ],
                  },
                  v
                )
              ),
            }),
          ],
        }),
        r.jsxs("div", {
          className: "space-y-6",
          children: [
            r.jsxs("div", {
              className: "flex justify-between items-center",
              children: [
                r.jsx("h2", {
                  className: "text-2xl font-semibold text-gold-400",
                  children: "Your Stakes",
                }),
                r.jsx(M, {
                  variant: "outline",
                  size: "sm",
                  children: "Claim All Rewards",
                }),
              ],
            }),
            r.jsx(L, {
              glow: !0,
              children: r.jsx("div", {
                className: "overflow-x-auto",
                children: r.jsxs("table", {
                  className: "w-full",
                  children: [
                    r.jsx("thead", {
                      children: r.jsxs("tr", {
                        className: "border-b border-gold-600/20",
                        children: [
                          r.jsx("th", {
                            className: "text-left py-3 text-gold-400",
                            children: "Resource",
                          }),
                          r.jsx("th", {
                            className: "text-right py-3 text-gold-400",
                            children: "Amount",
                          }),
                          r.jsx("th", {
                            className: "text-right py-3 text-gold-400",
                            children: "APY",
                          }),
                          r.jsx("th", {
                            className: "text-right py-3 text-gold-400",
                            children: "Earned",
                          }),
                          r.jsx("th", {
                            className: "text-center py-3 text-gold-400",
                            children: "Status",
                          }),
                          r.jsx("th", {
                            className: "text-right py-3 text-gold-400",
                            children: "Actions",
                          }),
                        ],
                      }),
                    }),
                    r.jsx("tbody", {
                      children: u.map((x, v) =>
                        r.jsxs(
                          "tr",
                          {
                            className:
                              "border-b border-gold-600/10 hover:bg-gold-600/5",
                            children: [
                              r.jsx("td", {
                                className: "py-4",
                                children: r.jsxs("div", {
                                  children: [
                                    r.jsx("div", {
                                      className: "font-semibold text-gold-400",
                                      children: x.resource,
                                    }),
                                    r.jsxs("div", {
                                      className:
                                        "text-sm text-gold-600 flex items-center space-x-1",
                                      children: [
                                        r.jsx(ap, { size: 12 }),
                                        r.jsxs("span", {
                                          children: [
                                            x.startDate,
                                            " - ",
                                            x.endDate,
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              r.jsxs("td", {
                                className:
                                  "text-right py-4 text-gold-400 font-semibold",
                                children: [x.amount.toLocaleString(), " BGC"],
                              }),
                              r.jsxs("td", {
                                className:
                                  "text-right py-4 text-green-400 font-semibold",
                                children: [x.apy, "%"],
                              }),
                              r.jsxs("td", {
                                className:
                                  "text-right py-4 text-blue-400 font-semibold",
                                children: [x.earned, " BGC"],
                              }),
                              r.jsx("td", {
                                className: "text-center py-4",
                                children: r.jsx("span", {
                                  className: `px-2 py-1 rounded text-xs font-medium ${
                                    x.status === "Active"
                                      ? "bg-green-600/20 text-green-400"
                                      : "bg-gray-600/20 text-gray-400"
                                  }`,
                                  children: x.status,
                                }),
                              }),
                              r.jsx("td", {
                                className: "text-right py-4",
                                children: r.jsx("div", {
                                  className: "flex space-x-2 justify-end",
                                  children:
                                    x.status === "Active"
                                      ? r.jsxs(r.Fragment, {
                                          children: [
                                            r.jsx(M, {
                                              size: "sm",
                                              variant: "outline",
                                              children: "Claim",
                                            }),
                                            r.jsx(M, {
                                              size: "sm",
                                              variant: "secondary",
                                              children: "Unstake",
                                            }),
                                          ],
                                        })
                                      : r.jsx(M, {
                                          size: "sm",
                                          variant: "outline",
                                          children: "View",
                                        }),
                                }),
                              }),
                            ],
                          },
                          v
                        )
                      ),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        r.jsx(_t, {
          isOpen: t,
          onClose: () => n(!1),
          title: `Stake in ${l == null ? void 0 : l.name}`,
          children:
            l &&
            r.jsxs("div", {
              className: "space-y-6",
              children: [
                r.jsxs("div", {
                  className: "bg-gold-600/10 rounded-lg p-4",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center justify-between mb-2",
                      children: [
                        r.jsx("span", {
                          className: "text-gold-600",
                          children: "Current Price:",
                        }),
                        r.jsxs("span", {
                          className: "text-xl font-bold text-gold-400",
                          children: ["$", l.price],
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "flex items-center justify-between mb-2",
                      children: [
                        r.jsx("span", {
                          className: "text-gold-600",
                          children: "APY:",
                        }),
                        r.jsxs("span", {
                          className: "text-lg font-semibold text-green-400",
                          children: [l.apy, "%"],
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        r.jsx("span", {
                          className: "text-gold-600",
                          children: "Lock Period:",
                        }),
                        r.jsx("span", {
                          className: "text-gold-400",
                          children: l.lockPeriod,
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    r.jsxs("div", {
                      children: [
                        r.jsx("label", {
                          className:
                            "block text-gold-400 text-sm font-medium mb-2",
                          children: "Amount to Stake (BGC)",
                        }),
                        r.jsx("input", {
                          type: "number",
                          value: i,
                          onChange: (x) => a(x.target.value),
                          className:
                            "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                          placeholder: `Minimum: ${l.minStake} BGC`,
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "bg-black/30 rounded-lg p-4 space-y-2",
                      children: [
                        r.jsxs("div", {
                          className: "flex justify-between text-sm",
                          children: [
                            r.jsx("span", {
                              className: "text-gold-600",
                              children: "Estimated Annual Rewards:",
                            }),
                            r.jsxs("span", {
                              className: "text-gold-400",
                              children: [
                                i
                                  ? ((parseFloat(i) * l.apy) / 100).toFixed(2)
                                  : "0.00",
                                " BGC",
                              ],
                            }),
                          ],
                        }),
                        r.jsxs("div", {
                          className: "flex justify-between text-sm",
                          children: [
                            r.jsx("span", {
                              className: "text-gold-600",
                              children: "Daily Rewards:",
                            }),
                            r.jsxs("span", {
                              className: "text-gold-400",
                              children: [
                                i
                                  ? (
                                      (parseFloat(i) * l.apy) /
                                      100 /
                                      365
                                    ).toFixed(4)
                                  : "0.0000",
                                " BGC",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "flex space-x-4",
                  children: [
                    r.jsx(M, {
                      variant: "outline",
                      onClick: () => n(!1),
                      className: "flex-1",
                      children: "Cancel",
                    }),
                    r.jsx(M, {
                      onClick: d,
                      className: "flex-1",
                      children: "Stake Now",
                    }),
                  ],
                }),
              ],
            }),
        }),
      ],
    });
  },
  Bp = () => {
    const [e, t] = N.useState(!1),
      [n, l] = N.useState(null),
      [s, i] = N.useState(["TSLA", "AAPL"]),
      a = [
        {
          symbol: "TSLA",
          name: "Tesla, Inc.",
          price: 248.5,
          change: 4.25,
          changePercent: 1.74,
          marketCap: "789.2B",
          volume: "45.2M",
          description:
            "Electric vehicles, energy storage, and solar panel manufacturing",
          sector: "Automotive",
          logo: "🚗",
        },
        {
          symbol: "AAPL",
          name: "Apple Inc.",
          price: 192.75,
          change: -0.95,
          changePercent: -0.49,
          marketCap: "2.9T",
          volume: "52.8M",
          description: "Consumer electronics, software, and digital services",
          sector: "Technology",
          logo: "🍎",
        },
        {
          symbol: "SHEL",
          name: "Shell PLC",
          price: 58.9,
          change: 1.2,
          changePercent: 2.08,
          marketCap: "186.4B",
          volume: "15.7M",
          description:
            "Integrated oil and gas company with renewable energy investments",
          sector: "Energy",
          logo: "🛢️",
        },
        {
          symbol: "MSFT",
          name: "Microsoft Corporation",
          price: 378.25,
          change: 2.85,
          changePercent: 0.76,
          marketCap: "2.8T",
          volume: "28.4M",
          description:
            "Cloud computing, productivity software, and AI services",
          sector: "Technology",
          logo: "💻",
        },
        {
          symbol: "NVDA",
          name: "NVIDIA Corporation",
          price: 481.6,
          change: -8.45,
          changePercent: -1.72,
          marketCap: "1.2T",
          volume: "67.3M",
          description: "Graphics processing units and AI computing platforms",
          sector: "Technology",
          logo: "🎮",
        },
        {
          symbol: "XOM",
          name: "Exxon Mobil Corporation",
          price: 104.25,
          change: 3.15,
          changePercent: 3.12,
          marketCap: "425.8B",
          volume: "18.9M",
          description: "Integrated oil and gas company with global operations",
          sector: "Energy",
          logo: "⛽",
        },
      ],
      o = [
        { symbol: "TSLA", shares: 25, avgPrice: 235.4, currentValue: 6212.5 },
        { symbol: "AAPL", shares: 50, avgPrice: 185.2, currentValue: 9637.5 },
        { symbol: "SHEL", shares: 100, avgPrice: 55.8, currentValue: 5890 },
      ],
      c = (d) => {
        l(d), t(!0);
      },
      u = (d) => {
        i((g) => (g.includes(d) ? g.filter((x) => x !== d) : [...g, d]));
      },
      p = (d) =>
        ({
          Technology: "text-blue-400 bg-blue-600/20",
          Energy: "text-orange-400 bg-orange-600/20",
          Automotive: "text-green-400 bg-green-600/20",
        }[d] || "text-gold-400 bg-gold-600/20");
    return r.jsxs("div", {
      className: "space-y-8",
      children: [
        r.jsxs("div", {
          className: "text-center py-8",
          children: [
            r.jsx("h1", {
              className: "text-4xl font-bold text-gold-400 mb-4",
              children: "Company Shares & Tokenized Assets",
            }),
            r.jsx("p", {
              className: "text-gold-600 text-lg max-w-3xl mx-auto",
              children:
                "Trade tokenized shares of leading companies. Own fractional shares with the security of blockchain technology and 24/7 trading availability.",
            }),
          ],
        }),
        r.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6",
          children: [
            r.jsxs(L, {
              glow: !0,
              className: "text-center",
              children: [
                r.jsx(od, { className: "w-8 h-8 text-gold-400 mx-auto mb-4" }),
                r.jsx("h3", {
                  className: "text-gold-600 text-sm font-medium mb-2",
                  children: "Portfolio Value",
                }),
                r.jsx("p", {
                  className: "text-2xl font-bold text-gold-400",
                  children: "$21,740.00",
                }),
                r.jsx("p", {
                  className: "text-green-400 text-sm mt-1",
                  children: "+5.8% (24h)",
                }),
              ],
            }),
            r.jsxs(L, {
              glow: !0,
              className: "text-center",
              children: [
                r.jsx(et, { className: "w-8 h-8 text-green-400 mx-auto mb-4" }),
                r.jsx("h3", {
                  className: "text-gold-600 text-sm font-medium mb-2",
                  children: "Total Shares",
                }),
                r.jsx("p", {
                  className: "text-2xl font-bold text-green-400",
                  children: "175",
                }),
                r.jsx("p", {
                  className: "text-gold-600 text-sm mt-1",
                  children: "3 companies",
                }),
              ],
            }),
            r.jsxs(L, {
              glow: !0,
              className: "text-center",
              children: [
                r.jsx(Ro, { className: "w-8 h-8 text-blue-400 mx-auto mb-4" }),
                r.jsx("h3", {
                  className: "text-gold-600 text-sm font-medium mb-2",
                  children: "Watchlist",
                }),
                r.jsx("p", {
                  className: "text-2xl font-bold text-blue-400",
                  children: s.length,
                }),
                r.jsx("p", {
                  className: "text-gold-600 text-sm mt-1",
                  children: "tracked stocks",
                }),
              ],
            }),
          ],
        }),
        r.jsxs("div", {
          className: "space-y-6",
          children: [
            r.jsx("h2", {
              className: "text-2xl font-semibold text-gold-400",
              children: "My Portfolio",
            }),
            r.jsx(L, {
              glow: !0,
              children: r.jsx("div", {
                className: "overflow-x-auto",
                children: r.jsxs("table", {
                  className: "w-full",
                  children: [
                    r.jsx("thead", {
                      children: r.jsxs("tr", {
                        className: "border-b border-gold-600/20",
                        children: [
                          r.jsx("th", {
                            className: "text-left py-3 text-gold-400",
                            children: "Stock",
                          }),
                          r.jsx("th", {
                            className: "text-right py-3 text-gold-400",
                            children: "Shares",
                          }),
                          r.jsx("th", {
                            className: "text-right py-3 text-gold-400",
                            children: "Avg Price",
                          }),
                          r.jsx("th", {
                            className: "text-right py-3 text-gold-400",
                            children: "Current Value",
                          }),
                          r.jsx("th", {
                            className: "text-right py-3 text-gold-400",
                            children: "P&L",
                          }),
                        ],
                      }),
                    }),
                    r.jsx("tbody", {
                      children: o.map((d) => {
                        const g = a.find((y) => y.symbol === d.symbol),
                          x = d.currentValue - d.shares * d.avgPrice,
                          v = (x / (d.shares * d.avgPrice)) * 100;
                        return r.jsxs(
                          "tr",
                          {
                            className:
                              "border-b border-gold-600/10 hover:bg-gold-600/5",
                            children: [
                              r.jsx("td", {
                                className: "py-4",
                                children: r.jsxs("div", {
                                  className: "flex items-center space-x-3",
                                  children: [
                                    r.jsx("span", {
                                      className: "text-2xl",
                                      children: g == null ? void 0 : g.logo,
                                    }),
                                    r.jsxs("div", {
                                      children: [
                                        r.jsx("div", {
                                          className:
                                            "font-semibold text-gold-400",
                                          children: d.symbol,
                                        }),
                                        r.jsx("div", {
                                          className: "text-sm text-gold-600",
                                          children: g == null ? void 0 : g.name,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              r.jsx("td", {
                                className:
                                  "text-right py-4 text-gold-400 font-semibold",
                                children: d.shares,
                              }),
                              r.jsxs("td", {
                                className: "text-right py-4 text-gold-600",
                                children: ["$", d.avgPrice.toFixed(2)],
                              }),
                              r.jsxs("td", {
                                className:
                                  "text-right py-4 text-gold-400 font-semibold",
                                children: ["$", d.currentValue.toFixed(2)],
                              }),
                              r.jsxs("td", {
                                className: `text-right py-4 font-semibold ${
                                  x >= 0 ? "text-green-400" : "text-red-400"
                                }`,
                                children: [
                                  x >= 0 ? "+" : "",
                                  "$",
                                  x.toFixed(2),
                                  " (",
                                  v.toFixed(2),
                                  "%)",
                                ],
                              }),
                            ],
                          },
                          d.symbol
                        );
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        r.jsxs("div", {
          className: "space-y-6",
          children: [
            r.jsxs("div", {
              className: "flex justify-between items-center",
              children: [
                r.jsx("h2", {
                  className: "text-2xl font-semibold text-gold-400",
                  children: "Available Stocks",
                }),
                r.jsxs("div", {
                  className: "flex space-x-2",
                  children: [
                    r.jsx(M, {
                      variant: "outline",
                      size: "sm",
                      children: "Filter by Sector",
                    }),
                    r.jsx(M, {
                      variant: "outline",
                      size: "sm",
                      children: "Sort by Performance",
                    }),
                  ],
                }),
              ],
            }),
            r.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
              children: a.map((d) =>
                r.jsxs(
                  L,
                  {
                    glow: !0,
                    children: [
                      r.jsxs("div", {
                        className: "flex items-start justify-between mb-4",
                        children: [
                          r.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [
                              r.jsx("span", {
                                className: "text-3xl",
                                children: d.logo,
                              }),
                              r.jsxs("div", {
                                children: [
                                  r.jsx("h3", {
                                    className:
                                      "text-lg font-semibold text-gold-400",
                                    children: d.symbol,
                                  }),
                                  r.jsx("p", {
                                    className: "text-gold-600 text-sm",
                                    children: d.name,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r.jsx("button", {
                            onClick: () => u(d.symbol),
                            className: `p-1 rounded ${
                              s.includes(d.symbol)
                                ? "text-gold-400 bg-gold-600/20"
                                : "text-gold-600 hover:text-gold-400"
                            }`,
                            children: r.jsx(Ro, {
                              size: 16,
                              fill: s.includes(d.symbol)
                                ? "currentColor"
                                : "none",
                            }),
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "mb-4",
                        children: [
                          r.jsxs("div", {
                            className: "flex justify-between items-center mb-2",
                            children: [
                              r.jsxs("span", {
                                className: "text-2xl font-bold text-gold-400",
                                children: ["$", d.price],
                              }),
                              r.jsxs("span", {
                                className: `flex items-center space-x-1 text-sm font-semibold ${
                                  d.change >= 0
                                    ? "text-green-400"
                                    : "text-red-400"
                                }`,
                                children: [
                                  r.jsx(et, {
                                    size: 12,
                                    className: d.change < 0 ? "rotate-180" : "",
                                  }),
                                  r.jsxs("span", {
                                    children: [
                                      d.change >= 0 ? "+" : "",
                                      "$",
                                      d.change,
                                      " (",
                                      d.changePercent >= 0 ? "+" : "",
                                      d.changePercent,
                                      "%)",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r.jsx("span", {
                            className: `inline-block px-2 py-1 rounded text-xs font-medium ${p(
                              d.sector
                            )}`,
                            children: d.sector,
                          }),
                        ],
                      }),
                      r.jsx("p", {
                        className: "text-gold-600 text-sm mb-4 line-clamp-2",
                        children: d.description,
                      }),
                      r.jsxs("div", {
                        className:
                          "grid grid-cols-2 gap-2 text-xs text-gold-600 mb-4",
                        children: [
                          r.jsxs("div", {
                            children: [
                              r.jsx("span", {
                                className: "block",
                                children: "Market Cap",
                              }),
                              r.jsx("span", {
                                className: "text-gold-400 font-semibold",
                                children: d.marketCap,
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            children: [
                              r.jsx("span", {
                                className: "block",
                                children: "Volume",
                              }),
                              r.jsx("span", {
                                className: "text-gold-400 font-semibold",
                                children: d.volume,
                              }),
                            ],
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "flex space-x-2",
                        children: [
                          r.jsx(M, {
                            size: "sm",
                            className: "flex-1",
                            onClick: () => c(d),
                            children: "Trade",
                          }),
                          r.jsx(M, {
                            size: "sm",
                            variant: "outline",
                            onClick: () => c(d),
                            children: r.jsx(cp, { size: 14 }),
                          }),
                        ],
                      }),
                    ],
                  },
                  d.symbol
                )
              ),
            }),
          ],
        }),
        r.jsx(_t, {
          isOpen: e,
          onClose: () => t(!1),
          title: n ? `${n.symbol} - ${n.name}` : "",
          children:
            n &&
            r.jsxs("div", {
              className: "space-y-6",
              children: [
                r.jsxs("div", {
                  className: "flex items-center space-x-4",
                  children: [
                    r.jsx("span", { className: "text-4xl", children: n.logo }),
                    r.jsxs("div", {
                      children: [
                        r.jsx("h3", {
                          className: "text-2xl font-bold text-gold-400",
                          children: n.symbol,
                        }),
                        r.jsx("p", {
                          className: "text-gold-600",
                          children: n.name,
                        }),
                        r.jsx("span", {
                          className: `inline-block px-2 py-1 rounded text-xs font-medium mt-2 ${p(
                            n.sector
                          )}`,
                          children: n.sector,
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "bg-gold-600/10 rounded-lg p-4",
                  children: [
                    r.jsxs("div", {
                      className: "flex justify-between items-center mb-2",
                      children: [
                        r.jsx("span", {
                          className: "text-gold-600",
                          children: "Current Price:",
                        }),
                        r.jsxs("span", {
                          className: "text-2xl font-bold text-gold-400",
                          children: ["$", n.price],
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "flex justify-between items-center",
                      children: [
                        r.jsx("span", {
                          className: "text-gold-600",
                          children: "24h Change:",
                        }),
                        r.jsxs("span", {
                          className: `font-semibold ${
                            n.change >= 0 ? "text-green-400" : "text-red-400"
                          }`,
                          children: [
                            n.change >= 0 ? "+" : "",
                            "$",
                            n.change,
                            " (",
                            n.changePercent >= 0 ? "+" : "",
                            n.changePercent,
                            "%)",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs("div", {
                  children: [
                    r.jsx("h4", {
                      className: "text-gold-400 font-semibold mb-2",
                      children: "Company Description",
                    }),
                    r.jsx("p", {
                      className: "text-gold-600 text-sm leading-relaxed",
                      children: n.description,
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    r.jsxs("div", {
                      className: "bg-black/30 rounded-lg p-3",
                      children: [
                        r.jsx("p", {
                          className: "text-gold-600 text-sm",
                          children: "Market Cap",
                        }),
                        r.jsx("p", {
                          className: "text-gold-400 font-semibold",
                          children: n.marketCap,
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "bg-black/30 rounded-lg p-3",
                      children: [
                        r.jsx("p", {
                          className: "text-gold-600 text-sm",
                          children: "Volume (24h)",
                        }),
                        r.jsx("p", {
                          className: "text-gold-400 font-semibold",
                          children: n.volume,
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    r.jsx("h4", {
                      className: "text-gold-400 font-semibold",
                      children: "Trade Options",
                    }),
                    r.jsxs("div", {
                      children: [
                        r.jsx("label", {
                          className:
                            "block text-gold-400 text-sm font-medium mb-2",
                          children: "Number of Shares",
                        }),
                        r.jsx("input", {
                          type: "number",
                          className:
                            "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                          placeholder: "0",
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "flex space-x-2",
                      children: [
                        r.jsx(M, {
                          className: "flex-1",
                          children: "Buy Shares",
                        }),
                        r.jsx(M, {
                          variant: "secondary",
                          className: "flex-1",
                          children: "Sell Shares",
                        }),
                      ],
                    }),
                    r.jsxs(M, {
                      variant: "outline",
                      className: "w-full",
                      onClick: () => u(n.symbol),
                      children: [
                        s.includes(n.symbol) ? "Remove from" : "Add to",
                        " Watchlist",
                      ],
                    }),
                  ],
                }),
              ],
            }),
        }),
      ],
    });
  },
  Up = () => {
    const [e, t] = N.useState(7),
      [n, l] = N.useState(82.45),
      [s, i] = N.useState(!1),
      [a, o] = N.useState({
        predicted_price: 85.2,
        confidence: 78,
        trend: "bullish",
        factors: [
          "OPEC+ production cuts",
          "Increased global demand",
          "Geopolitical tensions",
          "Seasonal consumption patterns",
        ],
      }),
      c = [
        { date: "2025-01-01", price: 78.3 },
        { date: "2025-01-02", price: 79.15 },
        { date: "2025-01-03", price: 80.45 },
        { date: "2025-01-04", price: 81.2 },
        { date: "2025-01-05", price: 82.45 },
      ],
      u = [
        { days: 7, label: "1 Week", accuracy: 85 },
        { days: 14, label: "2 Weeks", accuracy: 78 },
        { days: 30, label: "1 Month", accuracy: 72 },
        { days: 90, label: "3 Months", accuracy: 65 },
      ],
      p = [
        {
          factor: "Supply & Demand",
          impact: "High",
          current: "Balanced",
          trend: "stable",
          description:
            "Global oil supply meets current demand with slight surplus",
        },
        {
          factor: "OPEC+ Decisions",
          impact: "Very High",
          current: "Production Cuts",
          trend: "bullish",
          description: "Recent production cuts supporting higher prices",
        },
        {
          factor: "Economic Growth",
          impact: "High",
          current: "Moderate",
          trend: "bullish",
          description: "Global economic recovery driving energy demand",
        },
        {
          factor: "Geopolitical Events",
          impact: "Medium",
          current: "Tensions",
          trend: "volatile",
          description: "Regional conflicts affecting supply chain stability",
        },
      ],
      d = () => {
        i(!0),
          setTimeout(() => {
            const v = n,
              y = 0.05,
              k = Math.random() > 0.5 ? 1 : -1,
              h = e / 7,
              f = v + v * y * k * h,
              m = Math.max(50, 90 - (e / 7) * 5);
            o({
              predicted_price: f,
              confidence: Math.round(m),
              trend: f > v ? "bullish" : "bearish",
              factors: [
                "OPEC+ production decisions",
                "Global economic indicators",
                "Seasonal demand patterns",
                "Inventory level changes",
                "Currency fluctuations",
                "Renewable energy adoption",
              ].slice(0, 4),
            }),
              i(!1);
          }, 2e3);
      };
    N.useEffect(() => {
      d();
    }, [e]);
    const g = (v) => {
        switch (v) {
          case "bullish":
            return "text-green-400";
          case "bearish":
            return "text-red-400";
          case "volatile":
            return "text-orange-400";
          default:
            return "text-gold-400";
        }
      },
      x = (v) => {
        switch (v) {
          case "Very High":
            return "text-red-400 bg-red-600/20";
          case "High":
            return "text-orange-400 bg-orange-600/20";
          case "Medium":
            return "text-yellow-400 bg-yellow-600/20";
          default:
            return "text-green-400 bg-green-600/20";
        }
      };
    return r.jsxs("div", {
      className: "space-y-8",
      children: [
        r.jsxs("div", {
          className: "text-center py-8",
          children: [
            r.jsx("h1", {
              className: "text-4xl font-bold text-gold-400 mb-4",
              children: "AI-Powered Oil Price Forecast",
            }),
            r.jsx("p", {
              className: "text-gold-600 text-lg max-w-3xl mx-auto",
              children:
                "Advanced machine learning algorithms analyze market data, geopolitical events, and economic indicators to predict oil price movements with high accuracy.",
            }),
          ],
        }),
        r.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-4 gap-6",
          children: [
            r.jsxs(L, {
              glow: !0,
              className: "text-center",
              children: [
                r.jsx(jr, { className: "w-8 h-8 text-gold-400 mx-auto mb-4" }),
                r.jsx("h3", {
                  className: "text-gold-600 text-sm font-medium mb-2",
                  children: "Current Price",
                }),
                r.jsxs("p", {
                  className: "text-2xl font-bold text-gold-400",
                  children: ["$", n],
                }),
                r.jsx("p", {
                  className: "text-green-400 text-sm mt-1",
                  children: "+1.8% (24h)",
                }),
              ],
            }),
            r.jsxs(L, {
              glow: !0,
              className: "text-center",
              children: [
                r.jsx(Nr, { className: "w-8 h-8 text-blue-400 mx-auto mb-4" }),
                r.jsx("h3", {
                  className: "text-gold-600 text-sm font-medium mb-2",
                  children: "Predicted Price",
                }),
                r.jsxs("p", {
                  className: "text-2xl font-bold text-blue-400",
                  children: ["$", s ? "..." : a.predicted_price.toFixed(2)],
                }),
                r.jsxs("p", {
                  className: `text-sm mt-1 ${g(a.trend)}`,
                  children: [a.trend, " trend"],
                }),
              ],
            }),
            r.jsxs(L, {
              glow: !0,
              className: "text-center",
              children: [
                r.jsx(To, {
                  className: "w-8 h-8 text-purple-400 mx-auto mb-4",
                }),
                r.jsx("h3", {
                  className: "text-gold-600 text-sm font-medium mb-2",
                  children: "AI Confidence",
                }),
                r.jsxs("p", {
                  className: "text-2xl font-bold text-purple-400",
                  children: [s ? "..." : a.confidence, "%"],
                }),
                r.jsxs("p", {
                  className: "text-gold-600 text-sm mt-1",
                  children: [e, " day forecast"],
                }),
              ],
            }),
            r.jsxs(L, {
              glow: !0,
              className: "text-center",
              children: [
                r.jsx(et, { className: "w-8 h-8 text-green-400 mx-auto mb-4" }),
                r.jsx("h3", {
                  className: "text-gold-600 text-sm font-medium mb-2",
                  children: "Price Change",
                }),
                r.jsx("p", {
                  className: `text-2xl font-bold ${
                    s
                      ? "text-gold-400"
                      : a.predicted_price > n
                      ? "text-green-400"
                      : "text-red-400"
                  }`,
                  children: s
                    ? "..."
                    : `${a.predicted_price > n ? "+" : ""}${(
                        ((a.predicted_price - n) / n) *
                        100
                      ).toFixed(2)}%`,
                }),
                r.jsx("p", {
                  className: "text-gold-600 text-sm mt-1",
                  children: "vs current",
                }),
              ],
            }),
          ],
        }),
        r.jsx(L, {
          glow: !0,
          children: r.jsxs("div", {
            className:
              "flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0",
            children: [
              r.jsxs("div", {
                children: [
                  r.jsx("h2", {
                    className: "text-xl font-semibold text-gold-400 mb-2",
                    children: "Forecast Settings",
                  }),
                  r.jsx("p", {
                    className: "text-gold-600 text-sm",
                    children: "Select prediction timeframe for AI analysis",
                  }),
                ],
              }),
              r.jsx("div", {
                className: "flex flex-wrap gap-2",
                children: u.map((v) =>
                  r.jsxs(
                    M,
                    {
                      variant: e === v.days ? "primary" : "outline",
                      size: "sm",
                      onClick: () => t(v.days),
                      children: [
                        v.label,
                        r.jsxs("span", {
                          className: "ml-2 text-xs opacity-75",
                          children: ["(", v.accuracy, "%)"],
                        }),
                      ],
                    },
                    v.days
                  )
                ),
              }),
            ],
          }),
        }),
        r.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
          children: [
            r.jsxs(L, {
              glow: !0,
              children: [
                r.jsxs("div", {
                  className: "flex items-center justify-between mb-6",
                  children: [
                    r.jsx("h2", {
                      className: "text-xl font-semibold text-gold-400",
                      children: "Price Prediction Chart",
                    }),
                    r.jsx(M, {
                      variant: "outline",
                      size: "sm",
                      onClick: d,
                      children: "Refresh Forecast",
                    }),
                  ],
                }),
                s
                  ? r.jsx("div", {
                      className: "flex items-center justify-center h-64",
                      children: r.jsxs("div", {
                        className: "text-center",
                        children: [
                          r.jsx("div", {
                            className:
                              "animate-spin w-8 h-8 border-2 border-gold-400 border-t-transparent rounded-full mx-auto mb-4",
                          }),
                          r.jsx("p", {
                            className: "text-gold-600",
                            children: "AI analyzing market data...",
                          }),
                        ],
                      }),
                    })
                  : r.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        r.jsx("div", {
                          className:
                            "bg-black/30 rounded-lg p-4 h-48 flex items-end justify-between",
                          children: [...Array(e)].map((v, y) => {
                            const k = 30 + Math.random() * 70,
                              h = y === 0,
                              f = y > 4;
                            return r.jsxs(
                              "div",
                              {
                                className:
                                  "flex flex-col items-center space-y-2",
                                children: [
                                  r.jsx("div", {
                                    className: `w-6 rounded-t ${
                                      h
                                        ? "bg-gold-400"
                                        : f
                                        ? "bg-blue-400/70"
                                        : "bg-gold-600/70"
                                    }`,
                                    style: { height: `${k}%` },
                                  }),
                                  r.jsx("span", {
                                    className: "text-xs text-gold-600",
                                    children: y === 0 ? "Now" : `+${y}d`,
                                  }),
                                ],
                              },
                              y
                            );
                          }),
                        }),
                        r.jsxs("div", {
                          className:
                            "flex items-center justify-between text-sm",
                          children: [
                            r.jsxs("div", {
                              className: "flex items-center space-x-4",
                              children: [
                                r.jsxs("div", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    r.jsx("div", {
                                      className: "w-3 h-3 bg-gold-400 rounded",
                                    }),
                                    r.jsx("span", {
                                      className: "text-gold-600",
                                      children: "Historical",
                                    }),
                                  ],
                                }),
                                r.jsxs("div", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    r.jsx("div", {
                                      className: "w-3 h-3 bg-blue-400 rounded",
                                    }),
                                    r.jsx("span", {
                                      className: "text-gold-600",
                                      children: "Predicted",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            r.jsx("span", {
                              className: "text-gold-600",
                              children: "Price Range: $75-$90",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
            r.jsxs(L, {
              glow: !0,
              children: [
                r.jsx("h2", {
                  className: "text-xl font-semibold text-gold-400 mb-6",
                  children: "AI Market Analysis",
                }),
                r.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    r.jsxs("div", {
                      className: "bg-gold-600/10 rounded-lg p-4",
                      children: [
                        r.jsxs("div", {
                          className: "flex items-center space-x-2 mb-2",
                          children: [
                            r.jsx(To, { className: "text-purple-400 w-5 h-5" }),
                            r.jsx("span", {
                              className: "text-gold-400 font-semibold",
                              children: "Key Prediction Factors",
                            }),
                          ],
                        }),
                        r.jsx("ul", {
                          className: "space-y-2",
                          children: a.factors.map((v, y) =>
                            r.jsxs(
                              "li",
                              {
                                className:
                                  "text-gold-600 text-sm flex items-center space-x-2",
                                children: [
                                  r.jsx("span", {
                                    className: "text-gold-400",
                                    children: "•",
                                  }),
                                  r.jsx("span", { children: v }),
                                ],
                              },
                              y
                            )
                          ),
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "bg-black/30 rounded-lg p-4",
                      children: [
                        r.jsx("h3", {
                          className: "text-gold-400 font-semibold mb-3",
                          children: "Model Performance",
                        }),
                        r.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            r.jsxs("div", {
                              className: "flex justify-between items-center",
                              children: [
                                r.jsx("span", {
                                  className: "text-gold-600 text-sm",
                                  children: "7-day accuracy",
                                }),
                                r.jsx("span", {
                                  className: "text-green-400 font-semibold",
                                  children: "85%",
                                }),
                              ],
                            }),
                            r.jsxs("div", {
                              className: "flex justify-between items-center",
                              children: [
                                r.jsx("span", {
                                  className: "text-gold-600 text-sm",
                                  children: "30-day accuracy",
                                }),
                                r.jsx("span", {
                                  className: "text-yellow-400 font-semibold",
                                  children: "72%",
                                }),
                              ],
                            }),
                            r.jsxs("div", {
                              className: "flex justify-between items-center",
                              children: [
                                r.jsx("span", {
                                  className: "text-gold-600 text-sm",
                                  children: "Data points analyzed",
                                }),
                                r.jsx("span", {
                                  className: "text-blue-400 font-semibold",
                                  children: "10,000+",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "bg-orange-600/10 rounded-lg p-4",
                      children: [
                        r.jsxs("div", {
                          className: "flex items-center space-x-2 mb-2",
                          children: [
                            r.jsx(J0, { className: "text-orange-400 w-5 h-5" }),
                            r.jsx("span", {
                              className: "text-orange-400 font-semibold",
                              children: "Risk Assessment",
                            }),
                          ],
                        }),
                        r.jsx("p", {
                          className: "text-gold-600 text-sm",
                          children:
                            "Medium volatility expected due to ongoing geopolitical tensions and OPEC+ policy decisions. Consider position sizing accordingly.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        r.jsxs(L, {
          glow: !0,
          children: [
            r.jsx("h2", {
              className: "text-xl font-semibold text-gold-400 mb-6",
              children: "Market Factors Analysis",
            }),
            r.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: p.map((v, y) =>
                r.jsxs(
                  "div",
                  {
                    className: "bg-black/30 rounded-lg p-4",
                    children: [
                      r.jsxs("div", {
                        className: "flex justify-between items-start mb-3",
                        children: [
                          r.jsx("h3", {
                            className: "text-gold-400 font-semibold",
                            children: v.factor,
                          }),
                          r.jsx("span", {
                            className: `px-2 py-1 rounded text-xs font-medium ${x(
                              v.impact
                            )}`,
                            children: v.impact,
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "space-y-2 mb-3",
                        children: [
                          r.jsxs("div", {
                            className: "flex justify-between text-sm",
                            children: [
                              r.jsx("span", {
                                className: "text-gold-600",
                                children: "Current Status:",
                              }),
                              r.jsx("span", {
                                className: "text-gold-400",
                                children: v.current,
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "flex justify-between text-sm",
                            children: [
                              r.jsx("span", {
                                className: "text-gold-600",
                                children: "Trend:",
                              }),
                              r.jsx("span", {
                                className: g(v.trend),
                                children: v.trend,
                              }),
                            ],
                          }),
                        ],
                      }),
                      r.jsx("p", {
                        className: "text-gold-600 text-sm",
                        children: v.description,
                      }),
                    ],
                  },
                  y
                )
              ),
            }),
          ],
        }),
        r.jsxs(L, {
          glow: !0,
          children: [
            r.jsx("h2", {
              className: "text-xl font-semibold text-gold-400 mb-6",
              children: "Recent Price History",
            }),
            r.jsx("div", {
              className: "overflow-x-auto",
              children: r.jsxs("table", {
                className: "w-full",
                children: [
                  r.jsx("thead", {
                    children: r.jsxs("tr", {
                      className: "border-b border-gold-600/20",
                      children: [
                        r.jsx("th", {
                          className: "text-left py-3 text-gold-400",
                          children: "Date",
                        }),
                        r.jsx("th", {
                          className: "text-right py-3 text-gold-400",
                          children: "Price",
                        }),
                        r.jsx("th", {
                          className: "text-right py-3 text-gold-400",
                          children: "Change",
                        }),
                        r.jsx("th", {
                          className: "text-right py-3 text-gold-400",
                          children: "Volume",
                        }),
                      ],
                    }),
                  }),
                  r.jsx("tbody", {
                    children: c.map((v, y) => {
                      const k = y > 0 ? c[y - 1].price : v.price,
                        h = v.price - k,
                        f = (h / k) * 100;
                      return r.jsxs(
                        "tr",
                        {
                          className:
                            "border-b border-gold-600/10 hover:bg-gold-600/5",
                          children: [
                            r.jsx("td", {
                              className: "py-3 text-gold-400",
                              children: v.date,
                            }),
                            r.jsxs("td", {
                              className:
                                "text-right py-3 text-gold-400 font-semibold",
                              children: ["$", v.price],
                            }),
                            r.jsx("td", {
                              className: `text-right py-3 font-semibold ${
                                h >= 0 ? "text-green-400" : "text-red-400"
                              }`,
                              children:
                                y === 0
                                  ? "-"
                                  : `${h >= 0 ? "+" : ""}$${h.toFixed(
                                      2
                                    )} (${f.toFixed(2)}%)`,
                            }),
                            r.jsxs("td", {
                              className: "text-right py-3 text-gold-600",
                              children: [
                                (Math.random() * 50 + 20).toFixed(1),
                                "M",
                              ],
                            }),
                          ],
                        },
                        v.date
                      );
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  Vp = () => {
    const {
        state: e,
        updateUser: t,
        setLanguage: n,
        toggleTheme: l,
        toggleNotifications: s,
      } = xl(),
      [i, a] = N.useState("profile"),
      [o, c] = N.useState(!1),
      [u, p] = N.useState({
        name: e.user.name,
        phone: e.user.phone,
        country: e.user.country,
      }),
      d = () => {
        t(u), c(!1);
      },
      g = [
        {
          date: "2025-01-05 14:30",
          action: "Login",
          device: "Chrome on Windows",
          location: "Baku, Azerbaijan",
        },
        {
          date: "2025-01-04 09:15",
          action: "Password Changed",
          device: "Mobile App",
          location: "Baku, Azerbaijan",
        },
        {
          date: "2025-01-03 16:45",
          action: "Login",
          device: "Safari on iPhone",
          location: "Baku, Azerbaijan",
        },
        {
          date: "2025-01-02 11:20",
          action: "2FA Enabled",
          device: "Chrome on Windows",
          location: "Baku, Azerbaijan",
        },
      ],
      x = [
        { key: "profile", label: "Profile", icon: pd },
        { key: "settings", label: "Settings", icon: wp },
        { key: "security", label: "Security", icon: kp },
      ];
    return r.jsxs("div", {
      className: "space-y-8",
      children: [
        r.jsxs("div", {
          className: "text-center py-8",
          children: [
            r.jsx("h1", {
              className: "text-4xl font-bold text-gold-400 mb-4",
              children: "Profile & Settings",
            }),
            r.jsx("p", {
              className: "text-gold-600 text-lg max-w-3xl mx-auto",
              children:
                "Manage your account information, preferences, and security settings.",
            }),
          ],
        }),
        r.jsx("div", {
          className:
            "flex space-x-1 bg-black/50 rounded-lg p-1 max-w-md mx-auto",
          children: x.map((v) => {
            const y = v.icon;
            return r.jsxs(
              "button",
              {
                onClick: () => a(v.key),
                className: `flex items-center space-x-2 px-4 py-2 rounded-md transition-all flex-1 justify-center ${
                  i === v.key
                    ? "bg-gold-600/20 text-gold-400"
                    : "text-gold-600 hover:text-gold-400 hover:bg-gold-600/10"
                }`,
                children: [
                  r.jsx(y, { size: 16 }),
                  r.jsx("span", {
                    className: "text-sm font-medium",
                    children: v.label,
                  }),
                ],
              },
              v.key
            );
          }),
        }),
        i === "profile" &&
          r.jsxs("div", {
            className: "max-w-2xl mx-auto space-y-6",
            children: [
              r.jsxs(L, {
                glow: !0,
                children: [
                  r.jsxs("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                      r.jsx("h2", {
                        className: "text-xl font-semibold text-gold-400",
                        children: "Personal Information",
                      }),
                      r.jsx(M, {
                        variant: "outline",
                        size: "sm",
                        onClick: () => c(!o),
                        children: o ? "Cancel" : "Edit",
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-gold-400 text-sm font-medium mb-2",
                            children: "Full Name",
                          }),
                          o
                            ? r.jsx("input", {
                                type: "text",
                                value: u.name,
                                onChange: (v) =>
                                  p({ ...u, name: v.target.value }),
                                className:
                                  "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                              })
                            : r.jsx("p", {
                                className:
                                  "text-gold-600 bg-black/30 rounded-lg px-4 py-2",
                                children: e.user.name,
                              }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-gold-400 text-sm font-medium mb-2",
                            children: "Phone Number",
                          }),
                          o
                            ? r.jsx("input", {
                                type: "tel",
                                value: u.phone,
                                onChange: (v) =>
                                  p({ ...u, phone: v.target.value }),
                                className:
                                  "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                              })
                            : r.jsx("p", {
                                className:
                                  "text-gold-600 bg-black/30 rounded-lg px-4 py-2",
                                children: e.user.phone,
                              }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-gold-400 text-sm font-medium mb-2",
                            children: "Country",
                          }),
                          o
                            ? r.jsxs("select", {
                                value: u.country,
                                onChange: (v) =>
                                  p({ ...u, country: v.target.value }),
                                className:
                                  "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                                children: [
                                  r.jsx("option", {
                                    value: "Azerbaijan",
                                    children: "Azerbaijan",
                                  }),
                                  r.jsx("option", {
                                    value: "Turkey",
                                    children: "Turkey",
                                  }),
                                  r.jsx("option", {
                                    value: "Georgia",
                                    children: "Georgia",
                                  }),
                                  r.jsx("option", {
                                    value: "Russia",
                                    children: "Russia",
                                  }),
                                ],
                              })
                            : r.jsx("p", {
                                className:
                                  "text-gold-600 bg-black/30 rounded-lg px-4 py-2",
                                children: e.user.country,
                              }),
                        ],
                      }),
                      o &&
                        r.jsx(M, {
                          onClick: d,
                          className: "w-full",
                          children: "Save Changes",
                        }),
                    ],
                  }),
                ],
              }),
              r.jsxs(L, {
                glow: !0,
                children: [
                  r.jsx("h2", {
                    className: "text-xl font-semibold text-gold-400 mb-6",
                    children: "Account Overview",
                  }),
                  r.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [
                      r.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          r.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              r.jsx("span", {
                                className: "text-gold-600",
                                children: "Account Balance:",
                              }),
                              r.jsxs("span", {
                                className: "text-gold-400 font-semibold",
                                children: ["$", e.user.balance.toFixed(2)],
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              r.jsx("span", {
                                className: "text-gold-600",
                                children: "Staked Tokens:",
                              }),
                              r.jsxs("span", {
                                className: "text-green-400 font-semibold",
                                children: [
                                  e.user.stakedTokens.toLocaleString(),
                                  " BGC",
                                ],
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              r.jsx("span", {
                                className: "text-gold-600",
                                children: "Account Type:",
                              }),
                              r.jsx("span", {
                                className: "text-blue-400 font-semibold",
                                children: "Premium",
                              }),
                            ],
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          r.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              r.jsx("span", {
                                className: "text-gold-600",
                                children: "Member Since:",
                              }),
                              r.jsx("span", {
                                className: "text-gold-400",
                                children: "January 2024",
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              r.jsx("span", {
                                className: "text-gold-600",
                                children: "Total Trades:",
                              }),
                              r.jsx("span", {
                                className: "text-gold-400",
                                children: "156",
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              r.jsx("span", {
                                className: "text-gold-600",
                                children: "Verification:",
                              }),
                              r.jsx("span", {
                                className: "text-green-400",
                                children: "✓ Verified",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        i === "settings" &&
          r.jsxs("div", {
            className: "max-w-2xl mx-auto space-y-6",
            children: [
              r.jsxs(L, {
                glow: !0,
                children: [
                  r.jsx("h2", {
                    className: "text-xl font-semibold text-gold-400 mb-6",
                    children: "Preferences",
                  }),
                  r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      r.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          r.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [
                              r.jsx(Fr, { className: "text-gold-400 w-5 h-5" }),
                              r.jsxs("div", {
                                children: [
                                  r.jsx("h3", {
                                    className: "text-gold-400 font-medium",
                                    children: "Language",
                                  }),
                                  r.jsx("p", {
                                    className: "text-gold-600 text-sm",
                                    children: "Choose your preferred language",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r.jsxs("select", {
                            value: e.selectedLanguage,
                            onChange: (v) => n(v.target.value),
                            className:
                              "bg-black/50 border border-gold-600/30 rounded-lg px-3 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                            children: [
                              r.jsx("option", {
                                value: "en",
                                children: "English",
                              }),
                              r.jsx("option", {
                                value: "az",
                                children: "Azərbaycan",
                              }),
                              r.jsx("option", {
                                value: "tr",
                                children: "Türkçe",
                              }),
                              r.jsx("option", {
                                value: "ru",
                                children: "Русский",
                              }),
                            ],
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          r.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [
                              e.theme === "dark"
                                ? r.jsx(xp, {
                                    className: "text-gold-400 w-5 h-5",
                                  })
                                : r.jsx(ua, {
                                    className: "text-gold-400 w-5 h-5",
                                  }),
                              r.jsxs("div", {
                                children: [
                                  r.jsx("h3", {
                                    className: "text-gold-400 font-medium",
                                    children: "Theme",
                                  }),
                                  r.jsx("p", {
                                    className: "text-gold-600 text-sm",
                                    children:
                                      "Switch between light and dark mode",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r.jsxs(M, {
                            variant: "outline",
                            size: "sm",
                            onClick: l,
                            children: [
                              e.theme === "dark" ? "Dark" : "Light",
                              " Mode",
                            ],
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          r.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [
                              r.jsx(tp, { className: "text-gold-400 w-5 h-5" }),
                              r.jsxs("div", {
                                children: [
                                  r.jsx("h3", {
                                    className: "text-gold-400 font-medium",
                                    children: "Notifications",
                                  }),
                                  r.jsx("p", {
                                    className: "text-gold-600 text-sm",
                                    children: "Receive alerts and updates",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r.jsx(M, {
                            variant: e.notifications ? "primary" : "outline",
                            size: "sm",
                            onClick: s,
                            children: e.notifications ? "Enabled" : "Disabled",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              r.jsxs(L, {
                glow: !0,
                children: [
                  r.jsx("h2", {
                    className: "text-xl font-semibold text-gold-400 mb-6",
                    children: "Notification Preferences",
                  }),
                  r.jsx("div", {
                    className: "space-y-4",
                    children: [
                      {
                        label: "Price Alerts",
                        description:
                          "Get notified when prices reach your targets",
                      },
                      {
                        label: "Trade Confirmations",
                        description: "Receive confirmations for all trades",
                      },
                      {
                        label: "Market News",
                        description: "Stay updated with market developments",
                      },
                      {
                        label: "Account Security",
                        description: "Security alerts and login notifications",
                      },
                    ].map((v, y) =>
                      r.jsxs(
                        "div",
                        {
                          className: "flex items-center justify-between",
                          children: [
                            r.jsxs("div", {
                              children: [
                                r.jsx("h3", {
                                  className: "text-gold-400 font-medium",
                                  children: v.label,
                                }),
                                r.jsx("p", {
                                  className: "text-gold-600 text-sm",
                                  children: v.description,
                                }),
                              ],
                            }),
                            r.jsx("input", {
                              type: "checkbox",
                              defaultChecked: y < 2,
                              className:
                                "w-4 h-4 text-gold-400 bg-black border-gold-600 rounded focus:ring-gold-400",
                            }),
                          ],
                        },
                        y
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        i === "security" &&
          r.jsxs("div", {
            className: "max-w-2xl mx-auto space-y-6",
            children: [
              r.jsxs(L, {
                glow: !0,
                children: [
                  r.jsx("h2", {
                    className: "text-xl font-semibold text-gold-400 mb-6",
                    children: "Security Settings",
                  }),
                  r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      r.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          r.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [
                              r.jsx(Sp, {
                                className: "text-green-400 w-5 h-5",
                              }),
                              r.jsxs("div", {
                                children: [
                                  r.jsx("h3", {
                                    className: "text-gold-400 font-medium",
                                    children: "Two-Factor Authentication",
                                  }),
                                  r.jsx("p", {
                                    className: "text-gold-600 text-sm",
                                    children:
                                      "Add an extra layer of security to your account",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r.jsx("span", {
                            className:
                              "px-3 py-1 bg-green-600/20 text-green-400 rounded text-sm font-medium",
                            children: "Enabled",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          r.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [
                              r.jsx(pp, { className: "text-gold-400 w-5 h-5" }),
                              r.jsxs("div", {
                                children: [
                                  r.jsx("h3", {
                                    className: "text-gold-400 font-medium",
                                    children: "Password",
                                  }),
                                  r.jsx("p", {
                                    className: "text-gold-600 text-sm",
                                    children: "Last changed 30 days ago",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r.jsx(M, {
                            variant: "outline",
                            size: "sm",
                            children: "Change Password",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          r.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [
                              r.jsx(mp, { className: "text-gold-400 w-5 h-5" }),
                              r.jsxs("div", {
                                children: [
                                  r.jsx("h3", {
                                    className: "text-gold-400 font-medium",
                                    children: "Active Sessions",
                                  }),
                                  r.jsx("p", {
                                    className: "text-gold-600 text-sm",
                                    children:
                                      "Manage your active login sessions",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r.jsx(M, {
                            variant: "outline",
                            size: "sm",
                            children: "View Sessions",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              r.jsxs(L, {
                glow: !0,
                children: [
                  r.jsx("h2", {
                    className: "text-xl font-semibold text-gold-400 mb-6",
                    children: "Recent Security Activity",
                  }),
                  r.jsx("div", {
                    className: "space-y-3",
                    children: g.map((v, y) =>
                      r.jsxs(
                        "div",
                        {
                          className:
                            "flex items-center justify-between p-3 bg-black/30 rounded-lg",
                          children: [
                            r.jsxs("div", {
                              children: [
                                r.jsxs("div", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    r.jsx("span", {
                                      className: "text-gold-400 font-medium",
                                      children: v.action,
                                    }),
                                    r.jsx("span", {
                                      className: "text-gold-600 text-sm",
                                      children: "•",
                                    }),
                                    r.jsx("span", {
                                      className: "text-gold-600 text-sm",
                                      children: v.device,
                                    }),
                                  ],
                                }),
                                r.jsxs("div", {
                                  className:
                                    "flex items-center space-x-2 text-xs text-gold-600 mt-1",
                                  children: [
                                    r.jsx("span", { children: v.date }),
                                    r.jsx("span", { children: "•" }),
                                    r.jsx("span", { children: v.location }),
                                  ],
                                }),
                              ],
                            }),
                            r.jsx("div", {
                              className: "w-2 h-2 bg-green-400 rounded-full",
                            }),
                          ],
                        },
                        y
                      )
                    ),
                  }),
                ],
              }),
              r.jsxs(L, {
                glow: !0,
                children: [
                  r.jsx("h2", {
                    className: "text-xl font-semibold text-gold-400 mb-6",
                    children: "Account Actions",
                  }),
                  r.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      r.jsx(M, {
                        variant: "outline",
                        className: "w-full",
                        children: "Download Account Data",
                      }),
                      r.jsx(M, {
                        variant: "outline",
                        className: "w-full",
                        children: "Export Transaction History",
                      }),
                      r.jsx(M, {
                        variant: "secondary",
                        className:
                          "w-full text-red-400 border-red-600/30 hover:bg-red-600/10",
                        children: "Deactivate Account",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  Wp = () => {
    const [e, t] = N.useState("about"),
      [n, l] = N.useState({ name: "", email: "", subject: "", message: "" }),
      s = [
        { key: "about", label: "About Us", icon: ud },
        { key: "services", label: "Services", icon: Nr },
        { key: "projects", label: "Projects", icon: Lo },
        { key: "careers", label: "Careers", icon: wr },
        { key: "support", label: "Support", icon: dp },
        { key: "contact", label: "Contact", icon: fi },
      ],
      i = [
        {
          title: "Energy Trading Platform",
          description:
            "Advanced trading platform for oil, renewable energy, and tokenized assets with real-time market data.",
          features: [
            "Real-time pricing",
            "Advanced charts",
            "Risk management",
            "Mobile trading",
          ],
        },
        {
          title: "Staking & Investment",
          description:
            "Earn passive income by staking tokens in energy projects and renewable infrastructure.",
          features: [
            "High APY returns",
            "Flexible terms",
            "Compound interest",
            "Risk diversification",
          ],
        },
        {
          title: "Premium Banking Cards",
          description:
            "Exclusive BLACK GOLD cards with GPS tracking, global recognition, and premium benefits.",
          features: [
            "GPS tracking",
            "Global acceptance",
            "Premium support",
            "Exclusive rewards",
          ],
        },
        {
          title: "AI Market Analysis",
          description:
            "Cutting-edge AI algorithms provide accurate price predictions and market insights.",
          features: [
            "Price forecasting",
            "Risk assessment",
            "Market trends",
            "Investment signals",
          ],
        },
      ],
      a = [
        {
          title: "Caspian Solar Initiative",
          status: "Active",
          investment: "$2.5M",
          description:
            "Large-scale solar farm development along the Caspian Sea coast.",
          completion: 75,
        },
        {
          title: "Wind Energy Expansion",
          status: "Active",
          investment: "$3.2M",
          description:
            "Installation of modern wind turbines for sustainable energy generation.",
          completion: 60,
        },
        {
          title: "Smart Grid Infrastructure",
          status: "Planning",
          investment: "$5.8M",
          description:
            "Development of intelligent energy distribution networks.",
          completion: 25,
        },
        {
          title: "Carbon Capture Technology",
          status: "Research",
          investment: "$4.5M",
          description:
            "Advanced carbon capture and storage solutions for industrial applications.",
          completion: 15,
        },
      ],
      o = [
        {
          title: "Senior Blockchain Developer",
          department: "Technology",
          location: "Baku, Azerbaijan",
          type: "Full-time",
          experience: "5+ years",
        },
        {
          title: "Energy Market Analyst",
          department: "Research",
          location: "Remote",
          type: "Full-time",
          experience: "3+ years",
        },
        {
          title: "UI/UX Designer",
          department: "Design",
          location: "Baku, Azerbaijan",
          type: "Full-time",
          experience: "2+ years",
        },
        {
          title: "Customer Success Manager",
          department: "Support",
          location: "Hybrid",
          type: "Full-time",
          experience: "2+ years",
        },
      ],
      c = [
        {
          question: "What is BLACK GOLD Platform?",
          answer:
            "BLACK GOLD is a comprehensive financial platform focused on energy trading, renewable investments, and digital asset management. We combine traditional energy markets with modern blockchain technology.",
        },
        {
          question: "How do I start trading on the platform?",
          answer:
            "Simply create an account, complete the verification process, deposit funds, and start trading. Our platform supports cryptocurrency, tokenized stocks, and energy assets.",
        },
        {
          question: "What are the staking rewards?",
          answer:
            "Staking rewards vary by asset and duration. Our energy staking plans offer APY rates from 8% to 18%, depending on the lock period and investment amount.",
        },
        {
          question: "How secure is my investment?",
          answer:
            "We use bank-level security, including 2FA, cold storage for digital assets, and comprehensive insurance coverage. All transactions are secured by blockchain technology.",
        },
        {
          question: "Can I withdraw my funds anytime?",
          answer:
            "Yes, you can withdraw available funds anytime. Staked tokens have specific lock periods, but you can unstake after the commitment period ends.",
        },
      ],
      u = (p) => {
        p.preventDefault(),
          console.log("Contact form submitted:", n),
          l({ name: "", email: "", subject: "", message: "" });
      };
    return r.jsxs("div", {
      className: "space-y-8",
      children: [
        r.jsxs("div", {
          className: "text-center py-8",
          children: [
            r.jsx("h1", {
              className: "text-4xl font-bold text-gold-400 mb-4",
              children: "Information & Contact",
            }),
            r.jsx("p", {
              className: "text-gold-600 text-lg max-w-3xl mx-auto",
              children:
                "Learn more about BLACK GOLD Platform, our services, ongoing projects, and how to get in touch with our team.",
            }),
          ],
        }),
        r.jsx("div", {
          className:
            "flex flex-wrap justify-center gap-2 bg-black/50 rounded-lg p-2",
          children: s.map((p) => {
            const d = p.icon;
            return r.jsxs(
              "button",
              {
                onClick: () => t(p.key),
                className: `flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                  e === p.key
                    ? "bg-gold-600/20 text-gold-400"
                    : "text-gold-600 hover:text-gold-400 hover:bg-gold-600/10"
                }`,
                children: [
                  r.jsx(d, { size: 16 }),
                  r.jsx("span", {
                    className: "text-sm font-medium",
                    children: p.label,
                  }),
                ],
              },
              p.key
            );
          }),
        }),
        e === "about" &&
          r.jsxs("div", {
            className: "space-y-8",
            children: [
              r.jsxs(L, {
                glow: !0,
                children: [
                  r.jsx("h2", {
                    className: "text-2xl font-semibold text-gold-400 mb-6",
                    children: "About BLACK GOLD Platform",
                  }),
                  r.jsxs("div", {
                    className: "space-y-4 text-gold-600",
                    children: [
                      r.jsx("p", {
                        className: "leading-relaxed",
                        children:
                          "BLACK GOLD Platform represents the future of energy trading and sustainable investment. Founded with the vision of bridging traditional energy markets with cutting-edge blockchain technology, we provide a comprehensive ecosystem for traders, investors, and institutions.",
                      }),
                      r.jsx("p", {
                        className: "leading-relaxed",
                        children:
                          "Our platform combines the stability of energy commodities with the innovation of digital assets, offering unique opportunities in oil futures, renewable energy projects, and tokenized investments. We are committed to supporting the global transition to sustainable energy while providing exceptional returns for our community.",
                      }),
                    ],
                  }),
                ],
              }),
              r.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: [
                  r.jsxs(L, {
                    glow: !0,
                    className: "text-center",
                    children: [
                      r.jsx(Nr, {
                        className: "w-12 h-12 text-gold-400 mx-auto mb-4",
                      }),
                      r.jsx("h3", {
                        className: "text-xl font-semibold text-gold-400 mb-3",
                        children: "Our Mission",
                      }),
                      r.jsx("p", {
                        className: "text-gold-600 text-sm",
                        children:
                          "To democratize energy trading and accelerate the adoption of renewable energy through innovative financial technology.",
                      }),
                    ],
                  }),
                  r.jsxs(L, {
                    glow: !0,
                    className: "text-center",
                    children: [
                      r.jsx(wr, {
                        className: "w-12 h-12 text-blue-400 mx-auto mb-4",
                      }),
                      r.jsx("h3", {
                        className: "text-xl font-semibold text-gold-400 mb-3",
                        children: "Our Vision",
                      }),
                      r.jsx("p", {
                        className: "text-gold-600 text-sm",
                        children:
                          "To become the leading global platform for sustainable energy investments and digital asset management.",
                      }),
                    ],
                  }),
                  r.jsxs(L, {
                    glow: !0,
                    className: "text-center",
                    children: [
                      r.jsx(Lo, {
                        className: "w-12 h-12 text-green-400 mx-auto mb-4",
                      }),
                      r.jsx("h3", {
                        className: "text-xl font-semibold text-gold-400 mb-3",
                        children: "Our Values",
                      }),
                      r.jsx("p", {
                        className: "text-gold-600 text-sm",
                        children:
                          "Transparency, innovation, sustainability, and community-driven growth guide everything we do.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        e === "services" &&
          r.jsxs("div", {
            className: "space-y-6",
            children: [
              r.jsx("h2", {
                className: "text-2xl font-semibold text-gold-400 text-center",
                children: "Our Services",
              }),
              r.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: i.map((p, d) =>
                  r.jsxs(
                    L,
                    {
                      glow: !0,
                      children: [
                        r.jsx("h3", {
                          className: "text-xl font-semibold text-gold-400 mb-4",
                          children: p.title,
                        }),
                        r.jsx("p", {
                          className: "text-gold-600 mb-4",
                          children: p.description,
                        }),
                        r.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            r.jsx("h4", {
                              className: "text-gold-400 font-medium",
                              children: "Key Features:",
                            }),
                            r.jsx("ul", {
                              className: "space-y-1",
                              children: p.features.map((g, x) =>
                                r.jsxs(
                                  "li",
                                  {
                                    className:
                                      "text-gold-600 text-sm flex items-center space-x-2",
                                    children: [
                                      r.jsx("span", {
                                        className: "text-gold-400",
                                        children: "•",
                                      }),
                                      r.jsx("span", { children: g }),
                                    ],
                                  },
                                  x
                                )
                              ),
                            }),
                          ],
                        }),
                      ],
                    },
                    d
                  )
                ),
              }),
            ],
          }),
        e === "projects" &&
          r.jsxs("div", {
            className: "space-y-6",
            children: [
              r.jsx("h2", {
                className: "text-2xl font-semibold text-gold-400 text-center",
                children: "Our Projects",
              }),
              r.jsx("div", {
                className: "space-y-6",
                children: a.map((p, d) =>
                  r.jsxs(
                    L,
                    {
                      glow: !0,
                      children: [
                        r.jsxs("div", {
                          className: "flex justify-between items-start mb-4",
                          children: [
                            r.jsxs("div", {
                              children: [
                                r.jsx("h3", {
                                  className:
                                    "text-xl font-semibold text-gold-400",
                                  children: p.title,
                                }),
                                r.jsxs("p", {
                                  className: "text-gold-600 text-sm",
                                  children: ["Investment: ", p.investment],
                                }),
                              ],
                            }),
                            r.jsx("span", {
                              className: `px-3 py-1 rounded text-sm font-medium ${
                                p.status === "Active"
                                  ? "bg-green-600/20 text-green-400"
                                  : p.status === "Planning"
                                  ? "bg-blue-600/20 text-blue-400"
                                  : "bg-orange-600/20 text-orange-400"
                              }`,
                              children: p.status,
                            }),
                          ],
                        }),
                        r.jsx("p", {
                          className: "text-gold-600 mb-4",
                          children: p.description,
                        }),
                        r.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            r.jsxs("div", {
                              className: "flex justify-between text-sm",
                              children: [
                                r.jsx("span", {
                                  className: "text-gold-600",
                                  children: "Progress",
                                }),
                                r.jsxs("span", {
                                  className: "text-gold-400",
                                  children: [p.completion, "%"],
                                }),
                              ],
                            }),
                            r.jsx("div", {
                              className: "w-full bg-black/50 rounded-full h-2",
                              children: r.jsx("div", {
                                className:
                                  "bg-gradient-to-r from-gold-600 to-gold-400 h-2 rounded-full transition-all duration-300",
                                style: { width: `${p.completion}%` },
                              }),
                            }),
                          ],
                        }),
                      ],
                    },
                    d
                  )
                ),
              }),
            ],
          }),
        e === "careers" &&
          r.jsxs("div", {
            className: "space-y-6",
            children: [
              r.jsxs("div", {
                className: "text-center",
                children: [
                  r.jsx("h2", {
                    className: "text-2xl font-semibold text-gold-400 mb-4",
                    children: "Join Our Team",
                  }),
                  r.jsx("p", {
                    className: "text-gold-600 max-w-2xl mx-auto",
                    children:
                      "We're looking for talented individuals who share our passion for innovation, sustainability, and financial technology. Join us in shaping the future of energy trading.",
                  }),
                ],
              }),
              r.jsx("div", {
                className: "space-y-4",
                children: o.map((p, d) =>
                  r.jsx(
                    L,
                    {
                      glow: !0,
                      children: r.jsxs("div", {
                        className: "flex justify-between items-start",
                        children: [
                          r.jsxs("div", {
                            className: "flex-1",
                            children: [
                              r.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-gold-400 mb-2",
                                children: p.title,
                              }),
                              r.jsxs("div", {
                                className:
                                  "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gold-600",
                                children: [
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className: "block text-gold-400",
                                        children: "Department",
                                      }),
                                      r.jsx("span", { children: p.department }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className: "block text-gold-400",
                                        children: "Location",
                                      }),
                                      r.jsx("span", { children: p.location }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className: "block text-gold-400",
                                        children: "Type",
                                      }),
                                      r.jsx("span", { children: p.type }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className: "block text-gold-400",
                                        children: "Experience",
                                      }),
                                      r.jsx("span", { children: p.experience }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r.jsx(M, {
                            size: "sm",
                            className: "ml-4",
                            children: "Apply Now",
                          }),
                        ],
                      }),
                    },
                    d
                  )
                ),
              }),
            ],
          }),
        e === "support" &&
          r.jsxs("div", {
            className: "space-y-6",
            children: [
              r.jsx("h2", {
                className: "text-2xl font-semibold text-gold-400 text-center",
                children: "Frequently Asked Questions",
              }),
              r.jsx("div", {
                className: "space-y-4",
                children: c.map((p, d) =>
                  r.jsxs(
                    L,
                    {
                      glow: !0,
                      children: [
                        r.jsx("h3", {
                          className: "text-lg font-semibold text-gold-400 mb-3",
                          children: p.question,
                        }),
                        r.jsx("p", {
                          className: "text-gold-600 leading-relaxed",
                          children: p.answer,
                        }),
                      ],
                    },
                    d
                  )
                ),
              }),
              r.jsxs(L, {
                glow: !0,
                className: "text-center",
                children: [
                  r.jsx("h3", {
                    className: "text-xl font-semibold text-gold-400 mb-4",
                    children: "Need More Help?",
                  }),
                  r.jsx("p", {
                    className: "text-gold-600 mb-6",
                    children:
                      "Can't find what you're looking for? Our support team is here to help you 24/7.",
                  }),
                  r.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                    children: [
                      r.jsx(M, { children: "Live Chat Support" }),
                      r.jsx(M, {
                        variant: "outline",
                        children: "Email Support",
                      }),
                      r.jsx(M, {
                        variant: "outline",
                        children: "Call Support",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        e === "contact" &&
          r.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
            children: [
              r.jsxs(L, {
                glow: !0,
                children: [
                  r.jsx("h2", {
                    className: "text-xl font-semibold text-gold-400 mb-6",
                    children: "Get in Touch",
                  }),
                  r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      r.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [
                          r.jsx(fd, { className: "text-gold-400 w-6 h-6" }),
                          r.jsxs("div", {
                            children: [
                              r.jsx("h3", {
                                className: "text-gold-400 font-medium",
                                children: "Phone",
                              }),
                              r.jsx("p", {
                                className: "text-gold-600",
                                children: "+994 55 552 57 47",
                              }),
                            ],
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [
                          r.jsx(fi, { className: "text-gold-400 w-6 h-6" }),
                          r.jsxs("div", {
                            children: [
                              r.jsx("h3", {
                                className: "text-gold-400 font-medium",
                                children: "Email",
                              }),
                              r.jsx("p", {
                                className: "text-gold-600",
                                children: "blackgoldcoinoffice@gmail.com",
                              }),
                            ],
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [
                          r.jsx(md, { className: "text-gold-400 w-6 h-6" }),
                          r.jsxs("div", {
                            children: [
                              r.jsx("h3", {
                                className: "text-gold-400 font-medium",
                                children: "Address",
                              }),
                              r.jsxs("p", {
                                className: "text-gold-600",
                                children: [
                                  "Baku, Azerbaijan",
                                  r.jsx("br", {}),
                                  "Financial District",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    className: "mt-8",
                    children: [
                      r.jsx("h3", {
                        className: "text-gold-400 font-medium mb-4",
                        children: "Business Hours",
                      }),
                      r.jsxs("div", {
                        className: "space-y-2 text-sm text-gold-600",
                        children: [
                          r.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              r.jsx("span", { children: "Monday - Friday" }),
                              r.jsx("span", { children: "9:00 AM - 6:00 PM" }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              r.jsx("span", { children: "Saturday" }),
                              r.jsx("span", { children: "10:00 AM - 4:00 PM" }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              r.jsx("span", { children: "Sunday" }),
                              r.jsx("span", { children: "Closed" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              r.jsxs(L, {
                glow: !0,
                children: [
                  r.jsx("h2", {
                    className: "text-xl font-semibold text-gold-400 mb-6",
                    children: "Send us a Message",
                  }),
                  r.jsxs("form", {
                    onSubmit: u,
                    className: "space-y-4",
                    children: [
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-gold-400 text-sm font-medium mb-2",
                            children: "Name",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: n.name,
                            onChange: (p) => l({ ...n, name: p.target.value }),
                            className:
                              "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                            placeholder: "Your full name",
                            required: !0,
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-gold-400 text-sm font-medium mb-2",
                            children: "Email",
                          }),
                          r.jsx("input", {
                            type: "email",
                            value: n.email,
                            onChange: (p) => l({ ...n, email: p.target.value }),
                            className:
                              "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                            placeholder: "your.email@example.com",
                            required: !0,
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-gold-400 text-sm font-medium mb-2",
                            children: "Subject",
                          }),
                          r.jsxs("select", {
                            value: n.subject,
                            onChange: (p) =>
                              l({ ...n, subject: p.target.value }),
                            className:
                              "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none",
                            required: !0,
                            children: [
                              r.jsx("option", {
                                value: "",
                                children: "Select a subject",
                              }),
                              r.jsx("option", {
                                value: "general",
                                children: "General Inquiry",
                              }),
                              r.jsx("option", {
                                value: "support",
                                children: "Technical Support",
                              }),
                              r.jsx("option", {
                                value: "partnership",
                                children: "Partnership",
                              }),
                              r.jsx("option", {
                                value: "investment",
                                children: "Investment Opportunity",
                              }),
                              r.jsx("option", {
                                value: "media",
                                children: "Media Inquiry",
                              }),
                            ],
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-gold-400 text-sm font-medium mb-2",
                            children: "Message",
                          }),
                          r.jsx("textarea", {
                            value: n.message,
                            onChange: (p) =>
                              l({ ...n, message: p.target.value }),
                            className:
                              "w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none h-32",
                            placeholder: "Tell us how we can help you...",
                            required: !0,
                          }),
                        ],
                      }),
                      r.jsxs(M, {
                        type: "submit",
                        className: "w-full",
                        children: [
                          r.jsx(Np, { size: 16, className: "mr-2" }),
                          "Send Message",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  };
function Hp() {
  return r.jsx(X0, {
    children: r.jsx(H0, {
      children: r.jsx("div", {
        className: "min-h-screen bg-black text-gold-400",
        children: r.jsx(Rp, {
          children: r.jsxs(D0, {
            children: [
              r.jsx(Fe, { path: "/", element: r.jsx(Op, {}) }),
              r.jsx(Fe, { path: "/ecology", element: r.jsx(Ip, {}) }),
              r.jsx(Fe, { path: "/bank", element: r.jsx(Dp, {}) }),
              r.jsx(Fe, { path: "/trading", element: r.jsx($p, {}) }),
              r.jsx(Fe, { path: "/energy", element: r.jsx(Fp, {}) }),
              r.jsx(Fe, { path: "/shares", element: r.jsx(Bp, {}) }),
              r.jsx(Fe, { path: "/forecast", element: r.jsx(Up, {}) }),
              r.jsx(Fe, { path: "/profile", element: r.jsx(Vp, {}) }),
              r.jsx(Fe, { path: "/info", element: r.jsx(Wp, {}) }),
            ],
          }),
        }),
      }),
    }),
  });
}
Xu(document.getElementById("root")).render(
  r.jsx(N.StrictMode, { children: r.jsx(Hp, {}) })
);
