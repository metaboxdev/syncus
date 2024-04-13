(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[547], {
  51770: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    let r = n(57437)
      , o = n(2265);
    t.default = function ({ html: e, height: t = null, width: n = null, children: i, dataNtpc: a = "" }) {
      return (0,
        o.useEffect)(() => {
          a && performance.mark("mark_feature_usage", {
            detail: {
              feature: `next-third-parties-${a}`
            }
          })
        }
          , [a]),
        (0,
          r.jsxs)(r.Fragment, {
            children: [i, e ? (0,
              r.jsx)("div", {
                style: {
                  height: null != t ? `${t}px` : "auto",
                  width: null != n ? `${n}px` : "auto"
                },
                "data-ntpc": a,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              }) : null]
          })
    }
  },
  58325: function (e, t, n) {
    "use strict";
    let r;
    var o = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
      ;
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.sendGAEvent = t.GoogleAnalytics = void 0;
    let i = n(57437)
      , a = n(2265)
      , l = o(n(48475));
    t.GoogleAnalytics = function (e) {
      let { gaId: t, dataLayerName: n = "dataLayer" } = e;
      return void 0 === r && (r = n),
        (0,
          a.useEffect)(() => {
            performance.mark("mark_feature_usage", {
              detail: {
                feature: "next-third-parties-ga"
              }
            })
          }
            , []),
        (0,
          i.jsxs)(i.Fragment, {
            children: [(0,
              i.jsx)(l.default, {
                id: "_next-ga-init",
                dangerouslySetInnerHTML: {
                  __html: `
          window['${n}'] = window['${n}'] || [];
          function gtag(){window['${n}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}');`
                }
              }), (0,
                i.jsx)(l.default, {
                  id: "_next-ga",
                  src: `https://www.googletagmanager.com/gtag/js?id=${t}`
                })]
          })
    }
      ,
      t.sendGAEvent = (...e) => {
        if (void 0 === r) {
          console.warn("@next/third-parties: GA has not been initialized");
          return
        }
        window[r] ? window[r].push(...e) : console.warn(`@next/third-parties: GA dataLayer ${r} does not exist`)
      }
  },
  66927: function (e, t, n) {
    "use strict";
    let r;
    var o = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
      ;
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.sendGTMEvent = t.GoogleTagManager = void 0;
    let i = n(57437)
      , a = n(2265)
      , l = o(n(48475));
    t.GoogleTagManager = function (e) {
      let { gtmId: t, dataLayerName: n = "dataLayer", auth: o, preview: u, dataLayer: s } = e;
      void 0 === r && (r = n);
      let c = "dataLayer" !== n ? `$l=${n}` : ""
        , f = o ? `&gtm_auth=${o}` : ""
        , d = u ? `&gtm_preview=${u}&gtm_cookies_win=x` : "";
      return (0,
        a.useEffect)(() => {
          performance.mark("mark_feature_usage", {
            detail: {
              feature: "next-third-parties-gtm"
            }
          })
        }
          , []),
        (0,
          i.jsxs)(i.Fragment, {
            children: [(0,
              i.jsx)(l.default, {
                id: "_next-gtm-init",
                dangerouslySetInnerHTML: {
                  __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${s ? `w[l].push(${JSON.stringify(s)})` : ""}
      })(window,'${n}');`
                }
              }), (0,
                i.jsx)(l.default, {
                  id: "_next-gtm",
                  "data-ntpc": "GTM",
                  src: `https://www.googletagmanager.com/gtm.js?id=${t}${c}${f}${d}`
                })]
          })
    }
      ,
      t.sendGTMEvent = e => {
        if (void 0 === r) {
          console.warn("@next/third-parties: GTM has not been initialized");
          return
        }
        window[r] ? window[r].push(e) : console.warn(`@next/third-parties: GTM dataLayer ${r} does not exist`)
      }
  },
  19524: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      Object.defineProperty(t, "addLocale", {
        enumerable: !0,
        get: function () {
          return r
        }
      }),
      n(43997);
    let r = function (e) {
      for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
      return e
    };
    ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: !0
    }),
      Object.assign(t.default, t),
      e.exports = t.default)
  },
  64549: function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      return !1
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      Object.defineProperty(t, "getDomainLocale", {
        enumerable: !0,
        get: function () {
          return r
        }
      }),
      n(43997),
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }),
        Object.assign(t.default, t),
        e.exports = t.default)
  },
  40863: function (e, t) {
    "use strict";
    let n;
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
          })
      }(t, {
        DOMAttributeNames: function () {
          return r
        },
        isEqualNode: function () {
          return i
        },
        default: function () {
          return a
        }
      });
    let r = {
      acceptCharset: "accept-charset",
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv",
      noModule: "noModule"
    };
    function o(e) {
      let { type: t, props: n } = e
        , o = document.createElement(t);
      for (let e in n) {
        if (!n.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === n[e])
          continue;
        let i = r[e] || e.toLowerCase();
        "script" === t && ("async" === i || "defer" === i || "noModule" === i) ? o[i] = !!n[e] : o.setAttribute(i, n[e])
      }
      let { children: i, dangerouslySetInnerHTML: a } = n;
      return a ? o.innerHTML = a.__html || "" : i && (o.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : ""),
        o
    }
    function i(e, t) {
      if (e instanceof HTMLElement && t instanceof HTMLElement) {
        let n = t.getAttribute("nonce");
        if (n && !e.getAttribute("nonce")) {
          let r = t.cloneNode(!0);
          return r.setAttribute("nonce", ""),
            r.nonce = n,
            n === e.nonce && e.isEqualNode(r)
        }
      }
      return e.isEqualNode(t)
    }
    function a() {
      return {
        mountedInstances: new Set,
        updateHead: e => {
          let t = {};
          e.forEach(e => {
            if ("link" === e.type && e.props["data-optimized-fonts"]) {
              if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]'))
                return;
              e.props.href = e.props["data-href"],
                e.props["data-href"] = void 0
            }
            let n = t[e.type] || [];
            n.push(e),
              t[e.type] = n
          }
          );
          let r = t.title ? t.title[0] : null
            , o = "";
          if (r) {
            let { children: e } = r.props;
            o = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
          }
          o !== document.title && (document.title = o),
            ["meta", "base", "link", "style", "script"].forEach(e => {
              n(e, t[e] || [])
            }
            )
        }
      }
    }
    n = (e, t) => {
      let n = document.getElementsByTagName("head")[0]
        , r = n.querySelector("meta[name=next-head-count]")
        , a = Number(r.content)
        , l = [];
      for (let t = 0, n = r.previousElementSibling; t < a; t++,
        n = (null == n ? void 0 : n.previousElementSibling) || null) {
        var u;
        (null == n ? void 0 : null == (u = n.tagName) ? void 0 : u.toLowerCase()) === e && l.push(n)
      }
      let s = t.map(o).filter(e => {
        for (let t = 0, n = l.length; t < n; t++)
          if (i(l[t], e))
            return l.splice(t, 1),
              !1;
        return !0
      }
      );
      l.forEach(e => {
        var t;
        return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
      }
      ),
        s.forEach(e => n.insertBefore(e, r)),
        r.content = (a - l.length + s.length).toString()
    }
      ,
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }),
        Object.assign(t.default, t),
        e.exports = t.default)
  },
  68326: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return b
        }
      });
    let r = n(21024)._(n(2265))
      , o = n(99121)
      , i = n(68664)
      , a = n(98130)
      , l = n(36681)
      , u = n(19524)
      , s = n(36304)
      , c = n(76313)
      , f = n(71581)
      , d = n(64549)
      , p = n(89872)
      , h = n(49706)
      , g = new Set;
    function m(e, t, n, r, o, a) {
      if (a || (0,
        i.isLocalURL)(t)) {
        if (!r.bypassPrefetchedCheck) {
          let o = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0);
          if (g.has(o))
            return;
          g.add(o)
        }
        Promise.resolve(a ? e.prefetch(t, o) : e.prefetch(t, n, r)).catch(e => { }
        )
      }
    }
    function y(e) {
      return "string" == typeof e ? e : (0,
        a.formatUrl)(e)
    }
    let b = r.default.forwardRef(function (e, t) {
      let n, a;
      let { href: g, as: b, children: _, prefetch: v = null, passHref: w, replace: E, shallow: j, scroll: P, locale: O, onClick: x, onMouseEnter: M, onTouchStart: S, legacyBehavior: R = !1, ...N } = e;
      n = _,
        R && ("string" == typeof n || "number" == typeof n) && (n = r.default.createElement("a", null, n));
      let I = r.default.useContext(s.RouterContext)
        , L = r.default.useContext(c.AppRouterContext)
        , C = null != I ? I : L
        , k = !I
        , T = !1 !== v
        , A = null === v ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL
        , { href: U, as: $ } = r.default.useMemo(() => {
          if (!I) {
            let e = y(g);
            return {
              href: e,
              as: b ? y(b) : e
            }
          }
          let [e, t] = (0,
            o.resolveHref)(I, g, !0);
          return {
            href: e,
            as: b ? (0,
              o.resolveHref)(I, b) : t || e
          }
        }
          , [I, g, b])
        , W = r.default.useRef(U)
        , q = r.default.useRef($);
      R && (a = r.default.Children.only(n));
      let D = R ? a && "object" == typeof a && a.ref : t
        , [H, z, G] = (0,
          f.useIntersection)({
            rootMargin: "200px"
          })
        , F = r.default.useCallback(e => {
          (q.current !== $ || W.current !== U) && (G(),
            q.current = $,
            W.current = U),
            H(e),
            D && ("function" == typeof D ? D(e) : "object" == typeof D && (D.current = e))
        }
          , [$, D, U, G, H]);
      r.default.useEffect(() => {
        C && z && T && m(C, U, $, {
          locale: O
        }, {
          kind: A
        }, k)
      }
        , [$, U, z, O, T, null == I ? void 0 : I.locale, C, k, A]);
      let K = {
        ref: F,
        onClick(e) {
          R || "function" != typeof x || x(e),
            R && a.props && "function" == typeof a.props.onClick && a.props.onClick(e),
            C && !e.defaultPrevented && function (e, t, n, o, a, l, u, s, c) {
              let { nodeName: f } = e.currentTarget;
              if ("A" === f.toUpperCase() && (function (e) {
                let t = e.currentTarget.getAttribute("target");
                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
              }(e) || !c && !(0,
                i.isLocalURL)(n)))
                return;
              e.preventDefault();
              let d = () => {
                let e = null == u || u;
                "beforePopState" in t ? t[a ? "replace" : "push"](n, o, {
                  shallow: l,
                  locale: s,
                  scroll: e
                }) : t[a ? "replace" : "push"](o || n, {
                  scroll: e
                })
              }
                ;
              c ? r.default.startTransition(d) : d()
            }(e, C, U, $, E, j, P, O, k)
        },
        onMouseEnter(e) {
          R || "function" != typeof M || M(e),
            R && a.props && "function" == typeof a.props.onMouseEnter && a.props.onMouseEnter(e),
            C && (T || !k) && m(C, U, $, {
              locale: O,
              priority: !0,
              bypassPrefetchedCheck: !0
            }, {
              kind: A
            }, k)
        },
        onTouchStart(e) {
          R || "function" != typeof S || S(e),
            R && a.props && "function" == typeof a.props.onTouchStart && a.props.onTouchStart(e),
            C && (T || !k) && m(C, U, $, {
              locale: O,
              priority: !0,
              bypassPrefetchedCheck: !0
            }, {
              kind: A
            }, k)
        }
      };
      if ((0,
        l.isAbsoluteUrl)($))
        K.href = $;
      else if (!R || w || "a" === a.type && !("href" in a.props)) {
        let e = void 0 !== O ? O : null == I ? void 0 : I.locale
          , t = (null == I ? void 0 : I.isLocaleDomain) && (0,
            d.getDomainLocale)($, e, null == I ? void 0 : I.locales, null == I ? void 0 : I.domainLocales);
        K.href = t || (0,
          p.addBasePath)((0,
            u.addLocale)($, e, null == I ? void 0 : I.defaultLocale))
      }
      return R ? r.default.cloneElement(a, K) : r.default.createElement("a", {
        ...N,
        ...K
      }, n)
    });
    ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: !0
    }),
      Object.assign(t.default, t),
      e.exports = t.default)
  },
  62389: function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
          })
      }(t, {
        requestIdleCallback: function () {
          return n
        },
        cancelIdleCallback: function () {
          return r
        }
      });
    let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (e) {
      let t = Date.now();
      return self.setTimeout(function () {
        e({
          didTimeout: !1,
          timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - t))
          }
        })
      }, 1)
    }
      , r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (e) {
        return clearTimeout(e)
      }
      ;
    ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: !0
    }),
      Object.assign(t.default, t),
      e.exports = t.default)
  },
  99121: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      Object.defineProperty(t, "resolveHref", {
        enumerable: !0,
        get: function () {
          return f
        }
      });
    let r = n(55991)
      , o = n(98130)
      , i = n(58137)
      , a = n(36681)
      , l = n(43997)
      , u = n(68664)
      , s = n(29289)
      , c = n(20948);
    function f(e, t, n) {
      let f;
      let d = "string" == typeof t ? t : (0,
        o.formatWithValidation)(t)
        , p = d.match(/^[a-zA-Z]{1,}:\/\//)
        , h = p ? d.slice(p[0].length) : d;
      if ((h.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + d + "' passed to next/router in page: '" + e.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        let t = (0,
          a.normalizeRepeatedSlashes)(h);
        d = (p ? p[0] : "") + t
      }
      if (!(0,
        u.isLocalURL)(d))
        return n ? [d] : d;
      try {
        f = new URL(d.startsWith("#") ? e.asPath : e.pathname, "http://n")
      } catch (e) {
        f = new URL("/", "http://n")
      }
      try {
        let e = new URL(d, f);
        e.pathname = (0,
          l.normalizePathTrailingSlash)(e.pathname);
        let t = "";
        if ((0,
          s.isDynamicRoute)(e.pathname) && e.searchParams && n) {
          let n = (0,
            r.searchParamsToUrlQuery)(e.searchParams)
            , { result: a, params: l } = (0,
              c.interpolateAs)(e.pathname, e.pathname, n);
          a && (t = (0,
            o.formatWithValidation)({
              pathname: a,
              hash: e.hash,
              query: (0,
                i.omit)(n, l)
            }))
        }
        let a = e.origin === f.origin ? e.href.slice(e.origin.length) : e.href;
        return n ? [a, t || a] : a
      } catch (e) {
        return n ? [d] : d
      }
    }
    ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: !0
    }),
      Object.assign(t.default, t),
      e.exports = t.default)
  },
  73994: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
          })
      }(t, {
        handleClientScriptLoad: function () {
          return g
        },
        initScriptLoader: function () {
          return m
        },
        default: function () {
          return b
        }
      });
    let r = n(21024)
      , o = n(68533)
      , i = r._(n(54887))
      , a = o._(n(2265))
      , l = n(61852)
      , u = n(40863)
      , s = n(62389)
      , c = new Map
      , f = new Set
      , d = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"]
      , p = e => {
        if (i.default.preinit) {
          e.forEach(e => {
            i.default.preinit(e, {
              as: "style"
            })
          }
          );
          return
        }
        {
          let t = document.head;
          e.forEach(e => {
            let n = document.createElement("link");
            n.type = "text/css",
              n.rel = "stylesheet",
              n.href = e,
              t.appendChild(n)
          }
          )
        }
      }
      , h = e => {
        let { src: t, id: n, onLoad: r = () => { }
          , onReady: o = null, dangerouslySetInnerHTML: i, children: a = "", strategy: l = "afterInteractive", onError: s, stylesheets: h } = e
          , g = n || t;
        if (g && f.has(g))
          return;
        if (c.has(t)) {
          f.add(g),
            c.get(t).then(r, s);
          return
        }
        let m = () => {
          o && o(),
            f.add(g)
        }
          , y = document.createElement("script")
          , b = new Promise((e, t) => {
            y.addEventListener("load", function (t) {
              e(),
                r && r.call(this, t),
                m()
            }),
              y.addEventListener("error", function (e) {
                t(e)
              })
          }
          ).catch(function (e) {
            s && s(e)
          });
        for (let [n, r] of (i ? (y.innerHTML = i.__html || "",
          m()) : a ? (y.textContent = "string" == typeof a ? a : Array.isArray(a) ? a.join("") : "",
            m()) : t && (y.src = t,
              c.set(t, b)),
          Object.entries(e))) {
          if (void 0 === r || d.includes(n))
            continue;
          let e = u.DOMAttributeNames[n] || n.toLowerCase();
          y.setAttribute(e, r)
        }
        "worker" === l && y.setAttribute("type", "text/partytown"),
          y.setAttribute("data-nscript", l),
          h && p(h),
          document.body.appendChild(y)
      }
      ;
    function g(e) {
      let { strategy: t = "afterInteractive" } = e;
      "lazyOnload" === t ? window.addEventListener("load", () => {
        (0,
          s.requestIdleCallback)(() => h(e))
      }
      ) : h(e)
    }
    function m(e) {
      e.forEach(g),
        [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
          let t = e.id || e.getAttribute("src");
          f.add(t)
        }
        )
    }
    function y(e) {
      let { id: t, src: n = "", onLoad: r = () => { }
        , onReady: o = null, strategy: u = "afterInteractive", onError: c, stylesheets: d, ...p } = e
        , { updateScripts: g, scripts: m, getIsSsr: y, appDir: b, nonce: _ } = (0,
          a.useContext)(l.HeadManagerContext)
        , v = (0,
          a.useRef)(!1);
      (0,
        a.useEffect)(() => {
          let e = t || n;
          v.current || (o && e && f.has(e) && o(),
            v.current = !0)
        }
          , [o, t, n]);
      let w = (0,
        a.useRef)(!1);
      if ((0,
        a.useEffect)(() => {
          !w.current && ("afterInteractive" === u ? h(e) : "lazyOnload" === u && ("complete" === document.readyState ? (0,
            s.requestIdleCallback)(() => h(e)) : window.addEventListener("load", () => {
              (0,
                s.requestIdleCallback)(() => h(e))
            }
            )),
            w.current = !0)
        }
          , [e, u]),
        ("beforeInteractive" === u || "worker" === u) && (g ? (m[u] = (m[u] || []).concat([{
          id: t,
          src: n,
          onLoad: r,
          onReady: o,
          onError: c,
          ...p
        }]),
          g(m)) : y && y() ? f.add(t || n) : y && !y() && h(e)),
        b) {
        if (d && d.forEach(e => {
          i.default.preinit(e, {
            as: "style"
          })
        }
        ),
          "beforeInteractive" === u)
          return n ? (i.default.preload(n, p.integrity ? {
            as: "script",
            integrity: p.integrity
          } : {
            as: "script"
          }),
            a.default.createElement("script", {
              nonce: _,
              dangerouslySetInnerHTML: {
                __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n]) + ")"
              }
            })) : (p.dangerouslySetInnerHTML && (p.children = p.dangerouslySetInnerHTML.__html,
              delete p.dangerouslySetInnerHTML),
              a.default.createElement("script", {
                nonce: _,
                dangerouslySetInnerHTML: {
                  __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, {
                    ...p
                  }]) + ")"
                }
              }));
        "afterInteractive" === u && n && i.default.preload(n, p.integrity ? {
          as: "script",
          integrity: p.integrity
        } : {
          as: "script"
        })
      }
      return null
    }
    Object.defineProperty(y, "__nextScript", {
      value: !0
    });
    let b = y;
    ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: !0
    }),
      Object.assign(t.default, t),
      e.exports = t.default)
  },
  71581: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      Object.defineProperty(t, "useIntersection", {
        enumerable: !0,
        get: function () {
          return u
        }
      });
    let r = n(2265)
      , o = n(62389)
      , i = "function" == typeof IntersectionObserver
      , a = new Map
      , l = [];
    function u(e) {
      let { rootRef: t, rootMargin: n, disabled: u } = e
        , s = u || !i
        , [c, f] = (0,
          r.useState)(!1)
        , d = (0,
          r.useRef)(null)
        , p = (0,
          r.useCallback)(e => {
            d.current = e
          }
            , []);
      return (0,
        r.useEffect)(() => {
          if (i) {
            if (s || c)
              return;
            let e = d.current;
            if (e && e.tagName)
              return function (e, t, n) {
                let { id: r, observer: o, elements: i } = function (e) {
                  let t;
                  let n = {
                    root: e.root || null,
                    margin: e.rootMargin || ""
                  }
                    , r = l.find(e => e.root === n.root && e.margin === n.margin);
                  if (r && (t = a.get(r)))
                    return t;
                  let o = new Map;
                  return t = {
                    id: n,
                    observer: new IntersectionObserver(e => {
                      e.forEach(e => {
                        let t = o.get(e.target)
                          , n = e.isIntersecting || e.intersectionRatio > 0;
                        t && n && t(n)
                      }
                      )
                    }
                      , e),
                    elements: o
                  },
                    l.push(n),
                    a.set(n, t),
                    t
                }(n);
                return i.set(e, t),
                  o.observe(e),
                  function () {
                    if (i.delete(e),
                      o.unobserve(e),
                      0 === i.size) {
                      o.disconnect(),
                        a.delete(r);
                      let e = l.findIndex(e => e.root === r.root && e.margin === r.margin);
                      e > -1 && l.splice(e, 1)
                    }
                  }
              }(e, e => e && f(e), {
                root: null == t ? void 0 : t.current,
                rootMargin: n
              })
          } else if (!c) {
            let e = (0,
              o.requestIdleCallback)(() => f(!0));
            return () => (0,
              o.cancelIdleCallback)(e)
          }
        }
          , [s, n, t, c, d.current]),
        [p, c, (0,
          r.useCallback)(() => {
            f(!1)
          }
            , [])]
    }
    ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: !0
    }),
      Object.assign(t.default, t),
      e.exports = t.default)
  },
  24910: function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      Object.defineProperty(t, "escapeStringRegexp", {
        enumerable: !0,
        get: function () {
          return o
        }
      });
    let n = /[|\\{}()[\]^$+*?.-]/
      , r = /[|\\{}()[\]^$+*?.-]/g;
    function o(e) {
      return n.test(e) ? e.replace(r, "\\$&") : e
    }
  },
  98130: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
          })
      }(t, {
        formatUrl: function () {
          return i
        },
        urlObjectKeys: function () {
          return a
        },
        formatWithValidation: function () {
          return l
        }
      });
    let r = n(68533)._(n(55991))
      , o = /https?|ftp|gopher|file/;
    function i(e) {
      let { auth: t, hostname: n } = e
        , i = e.protocol || ""
        , a = e.pathname || ""
        , l = e.hash || ""
        , u = e.query || ""
        , s = !1;
      t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "",
        e.host ? s = t + e.host : n && (s = t + (~n.indexOf(":") ? "[" + n + "]" : n),
          e.port && (s += ":" + e.port)),
        u && "object" == typeof u && (u = String(r.urlQueryToSearchParams(u)));
      let c = e.search || u && "?" + u || "";
      return i && !i.endsWith(":") && (i += ":"),
        e.slashes || (!i || o.test(i)) && !1 !== s ? (s = "//" + (s || ""),
          a && "/" !== a[0] && (a = "/" + a)) : s || (s = ""),
        l && "#" !== l[0] && (l = "#" + l),
        c && "?" !== c[0] && (c = "?" + c),
        "" + i + s + (a = a.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace("#", "%23")) + l
    }
    let a = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
    function l(e) {
      return i(e)
    }
  },
  29289: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
          })
      }(t, {
        getSortedRoutes: function () {
          return r.getSortedRoutes
        },
        isDynamicRoute: function () {
          return o.isDynamicRoute
        }
      });
    let r = n(39255)
      , o = n(55321)
  },
  20948: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      Object.defineProperty(t, "interpolateAs", {
        enumerable: !0,
        get: function () {
          return i
        }
      });
    let r = n(21670)
      , o = n(44586);
    function i(e, t, n) {
      let i = ""
        , a = (0,
          o.getRouteRegex)(e)
        , l = a.groups
        , u = (t !== e ? (0,
          r.getRouteMatcher)(a)(t) : "") || n;
      i = e;
      let s = Object.keys(l);
      return s.every(e => {
        let t = u[e] || ""
          , { repeat: n, optional: r } = l[e]
          , o = "[" + (n ? "..." : "") + e + "]";
        return r && (o = (t ? "" : "/") + "[" + o + "]"),
          n && !Array.isArray(t) && (t = [t]),
          (r || e in u) && (i = i.replace(o, n ? t.map(e => encodeURIComponent(e)).join("/") : encodeURIComponent(t)) || "/")
      }
      ) || (i = ""),
      {
        params: s,
        result: i
      }
    }
  },
  55321: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      Object.defineProperty(t, "isDynamicRoute", {
        enumerable: !0,
        get: function () {
          return i
        }
      });
    let r = n(84507)
      , o = /\/\[[^/]+?\](?=\/|$)/;
    function i(e) {
      return (0,
        r.isInterceptionRouteAppPath)(e) && (e = (0,
          r.extractInterceptionRouteInformation)(e).interceptedRoute),
        o.test(e)
    }
  },
  68664: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      Object.defineProperty(t, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return i
        }
      });
    let r = n(36681)
      , o = n(26746);
    function i(e) {
      if (!(0,
        r.isAbsoluteUrl)(e))
        return !0;
      try {
        let t = (0,
          r.getLocationOrigin)()
          , n = new URL(e, t);
        return n.origin === t && (0,
          o.hasBasePath)(n.pathname)
      } catch (e) {
        return !1
      }
    }
  },
  58137: function (e, t) {
    "use strict";
    function n(e, t) {
      let n = {};
      return Object.keys(e).forEach(r => {
        t.includes(r) || (n[r] = e[r])
      }
      ),
        n
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      Object.defineProperty(t, "omit", {
        enumerable: !0,
        get: function () {
          return n
        }
      })
  },
  55991: function (e, t) {
    "use strict";
    function n(e) {
      let t = {};
      return e.forEach((e, n) => {
        void 0 === t[n] ? t[n] = e : Array.isArray(t[n]) ? t[n].push(e) : t[n] = [t[n], e]
      }
      ),
        t
    }
    function r(e) {
      return "string" != typeof e && ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }
    function o(e) {
      let t = new URLSearchParams;
      return Object.entries(e).forEach(e => {
        let [n, o] = e;
        Array.isArray(o) ? o.forEach(e => t.append(n, r(e))) : t.set(n, r(o))
      }
      ),
        t
    }
    function i(e) {
      for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
      return n.forEach(t => {
        Array.from(t.keys()).forEach(t => e.delete(t)),
          t.forEach((t, n) => e.append(n, t))
      }
      ),
        e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
          })
      }(t, {
        searchParamsToUrlQuery: function () {
          return n
        },
        urlQueryToSearchParams: function () {
          return o
        },
        assign: function () {
          return i
        }
      })
  },
  21670: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      Object.defineProperty(t, "getRouteMatcher", {
        enumerable: !0,
        get: function () {
          return o
        }
      });
    let r = n(36681);
    function o(e) {
      let { re: t, groups: n } = e;
      return e => {
        let o = t.exec(e);
        if (!o)
          return !1;
        let i = e => {
          try {
            return decodeURIComponent(e)
          } catch (e) {
            throw new r.DecodeError("failed to decode param")
          }
        }
          , a = {};
        return Object.keys(n).forEach(e => {
          let t = n[e]
            , r = o[t.pos];
          void 0 !== r && (a[e] = ~r.indexOf("/") ? r.split("/").map(e => i(e)) : t.repeat ? [i(r)] : i(r))
        }
        ),
          a
      }
    }
  },
  44586: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
          })
      }(t, {
        getRouteRegex: function () {
          return u
        },
        getNamedRouteRegex: function () {
          return f
        },
        getNamedMiddlewareRegex: function () {
          return d
        }
      });
    let r = n(84507)
      , o = n(24910)
      , i = n(39006);
    function a(e) {
      let t = e.startsWith("[") && e.endsWith("]");
      t && (e = e.slice(1, -1));
      let n = e.startsWith("...");
      return n && (e = e.slice(3)),
      {
        key: e,
        repeat: n,
        optional: t
      }
    }
    function l(e) {
      let t = (0,
        i.removeTrailingSlash)(e).slice(1).split("/")
        , n = {}
        , l = 1;
      return {
        parameterizedRoute: t.map(e => {
          let t = r.INTERCEPTION_ROUTE_MARKERS.find(t => e.startsWith(t))
            , i = e.match(/\[((?:\[.*\])|.+)\]/);
          if (t && i) {
            let { key: e, optional: r, repeat: u } = a(i[1]);
            return n[e] = {
              pos: l++,
              repeat: u,
              optional: r
            },
              "/" + (0,
                o.escapeStringRegexp)(t) + "([^/]+?)"
          }
          if (!i)
            return "/" + (0,
              o.escapeStringRegexp)(e);
          {
            let { key: e, repeat: t, optional: r } = a(i[1]);
            return n[e] = {
              pos: l++,
              repeat: t,
              optional: r
            },
              t ? r ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
          }
        }
        ).join(""),
        groups: n
      }
    }
    function u(e) {
      let { parameterizedRoute: t, groups: n } = l(e);
      return {
        re: RegExp("^" + t + "(?:/)?$"),
        groups: n
      }
    }
    function s(e) {
      let { interceptionMarker: t, getSafeRouteKey: n, segment: r, routeKeys: i, keyPrefix: l } = e
        , { key: u, optional: s, repeat: c } = a(r)
        , f = u.replace(/\W/g, "");
      l && (f = "" + l + f);
      let d = !1;
      (0 === f.length || f.length > 30) && (d = !0),
        isNaN(parseInt(f.slice(0, 1))) || (d = !0),
        d && (f = n()),
        l ? i[f] = "" + l + u : i[f] = u;
      let p = t ? (0,
        o.escapeStringRegexp)(t) : "";
      return c ? s ? "(?:/" + p + "(?<" + f + ">.+?))?" : "/" + p + "(?<" + f + ">.+?)" : "/" + p + "(?<" + f + ">[^/]+?)"
    }
    function c(e, t) {
      let n;
      let a = (0,
        i.removeTrailingSlash)(e).slice(1).split("/")
        , l = (n = 0,
          () => {
            let e = ""
              , t = ++n;
            for (; t > 0;)
              e += String.fromCharCode(97 + (t - 1) % 26),
                t = Math.floor((t - 1) / 26);
            return e
          }
        )
        , u = {};
      return {
        namedParameterizedRoute: a.map(e => {
          let n = r.INTERCEPTION_ROUTE_MARKERS.some(t => e.startsWith(t))
            , i = e.match(/\[((?:\[.*\])|.+)\]/);
          if (n && i) {
            let [n] = e.split(i[0]);
            return s({
              getSafeRouteKey: l,
              interceptionMarker: n,
              segment: i[1],
              routeKeys: u,
              keyPrefix: t ? "nxtI" : void 0
            })
          }
          return i ? s({
            getSafeRouteKey: l,
            segment: i[1],
            routeKeys: u,
            keyPrefix: t ? "nxtP" : void 0
          }) : "/" + (0,
            o.escapeStringRegexp)(e)
        }
        ).join(""),
        routeKeys: u
      }
    }
    function f(e, t) {
      let n = c(e, t);
      return {
        ...u(e),
        namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
        routeKeys: n.routeKeys
      }
    }
    function d(e, t) {
      let { parameterizedRoute: n } = l(e)
        , { catchAll: r = !0 } = t;
      if ("/" === n)
        return {
          namedRegex: "^/" + (r ? ".*" : "") + "$"
        };
      let { namedParameterizedRoute: o } = c(e, !1);
      return {
        namedRegex: "^" + o + (r ? "(?:(/.*)?)" : "") + "$"
      }
    }
  },
  39255: function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      Object.defineProperty(t, "getSortedRoutes", {
        enumerable: !0,
        get: function () {
          return r
        }
      });
    class n {
      insert(e) {
        this._insert(e.split("/").filter(Boolean), [], !1)
      }
      smoosh() {
        return this._smoosh()
      }
      _smoosh(e) {
        void 0 === e && (e = "/");
        let t = [...this.children.keys()].sort();
        null !== this.slugName && t.splice(t.indexOf("[]"), 1),
          null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
          null !== this.optionalRestSlugName && t.splice(t.indexOf("[[...]]"), 1);
        let n = t.map(t => this.children.get(t)._smoosh("" + e + t + "/")).reduce((e, t) => [...e, ...t], []);
        if (null !== this.slugName && n.push(...this.children.get("[]")._smoosh(e + "[" + this.slugName + "]/")),
          !this.placeholder) {
          let t = "/" === e ? "/" : e.slice(0, -1);
          if (null != this.optionalRestSlugName)
            throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + t + '" and "' + t + "[[..." + this.optionalRestSlugName + ']]").');
          n.unshift(t)
        }
        return null !== this.restSlugName && n.push(...this.children.get("[...]")._smoosh(e + "[..." + this.restSlugName + "]/")),
          null !== this.optionalRestSlugName && n.push(...this.children.get("[[...]]")._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")),
          n
      }
      _insert(e, t, r) {
        if (0 === e.length) {
          this.placeholder = !1;
          return
        }
        if (r)
          throw Error("Catch-all must be the last part of the URL.");
        let o = e[0];
        if (o.startsWith("[") && o.endsWith("]")) {
          let n = o.slice(1, -1)
            , a = !1;
          if (n.startsWith("[") && n.endsWith("]") && (n = n.slice(1, -1),
            a = !0),
            n.startsWith("...") && (n = n.substring(3),
              r = !0),
            n.startsWith("[") || n.endsWith("]"))
            throw Error("Segment names may not start or end with extra brackets ('" + n + "').");
          if (n.startsWith("."))
            throw Error("Segment names may not start with erroneous periods ('" + n + "').");
          function i(e, n) {
            if (null !== e && e !== n)
              throw Error("You cannot use different slug names for the same dynamic path ('" + e + "' !== '" + n + "').");
            t.forEach(e => {
              if (e === n)
                throw Error('You cannot have the same slug name "' + n + '" repeat within a single dynamic path');
              if (e.replace(/\W/g, "") === o.replace(/\W/g, ""))
                throw Error('You cannot have the slug names "' + e + '" and "' + n + '" differ only by non-word symbols within a single dynamic path')
            }
            ),
              t.push(n)
          }
          if (r) {
            if (a) {
              if (null != this.restSlugName)
                throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + e[0] + '" ).');
              i(this.optionalRestSlugName, n),
                this.optionalRestSlugName = n,
                o = "[[...]]"
            } else {
              if (null != this.optionalRestSlugName)
                throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + e[0] + '").');
              i(this.restSlugName, n),
                this.restSlugName = n,
                o = "[...]"
            }
          } else {
            if (a)
              throw Error('Optional route parameters are not yet supported ("' + e[0] + '").');
            i(this.slugName, n),
              this.slugName = n,
              o = "[]"
          }
        }
        this.children.has(o) || this.children.set(o, new n),
          this.children.get(o)._insert(e.slice(1), t, r)
      }
      constructor() {
        this.placeholder = !0,
          this.children = new Map,
          this.slugName = null,
          this.restSlugName = null,
          this.optionalRestSlugName = null
      }
    }
    function r(e) {
      let t = new n;
      return e.forEach(e => t.insert(e)),
        t.smoosh()
    }
  },
  36681: function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
          })
      }(t, {
        WEB_VITALS: function () {
          return n
        },
        execOnce: function () {
          return r
        },
        isAbsoluteUrl: function () {
          return i
        },
        getLocationOrigin: function () {
          return a
        },
        getURL: function () {
          return l
        },
        getDisplayName: function () {
          return u
        },
        isResSent: function () {
          return s
        },
        normalizeRepeatedSlashes: function () {
          return c
        },
        loadGetInitialProps: function () {
          return f
        },
        SP: function () {
          return d
        },
        ST: function () {
          return p
        },
        DecodeError: function () {
          return h
        },
        NormalizeError: function () {
          return g
        },
        PageNotFoundError: function () {
          return m
        },
        MissingStaticPage: function () {
          return y
        },
        MiddlewareNotFoundError: function () {
          return b
        },
        stringifyError: function () {
          return _
        }
      });
    let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function r(e) {
      let t, n = !1;
      return function () {
        for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
          o[i] = arguments[i];
        return n || (n = !0,
          t = e(...o)),
          t
      }
    }
    let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
      , i = e => o.test(e);
    function a() {
      let { protocol: e, hostname: t, port: n } = window.location;
      return e + "//" + t + (n ? ":" + n : "")
    }
    function l() {
      let { href: e } = window.location
        , t = a();
      return e.substring(t.length)
    }
    function u(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }
    function s(e) {
      return e.finished || e.headersSent
    }
    function c(e) {
      let t = e.split("?");
      return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "")
    }
    async function f(e, t) {
      let n = t.res || t.ctx && t.ctx.res;
      if (!e.getInitialProps)
        return t.ctx && t.Component ? {
          pageProps: await f(t.Component, t.ctx)
        } : {};
      let r = await e.getInitialProps(t);
      if (n && s(n))
        return r;
      if (!r)
        throw Error('"' + u(e) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.');
      return r
    }
    let d = "undefined" != typeof performance
      , p = d && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class h extends Error {
    }
    class g extends Error {
    }
    class m extends Error {
      constructor(e) {
        super(),
          this.code = "ENOENT",
          this.name = "PageNotFoundError",
          this.message = "Cannot find module for page: " + e
      }
    }
    class y extends Error {
      constructor(e, t) {
        super(),
          this.message = "Failed to load static file for page: " + e + " " + t
      }
    }
    class b extends Error {
      constructor() {
        super(),
          this.code = "ENOENT",
          this.message = "Cannot find the middleware module"
      }
    }
    function _(e) {
      return JSON.stringify({
        message: e.message,
        stack: e.stack
      })
    }
  },
  53978: function () { },
  61396: function (e, t, n) {
    e.exports = n(68326)
  },
  24033: function (e, t, n) {
    e.exports = n(50094)
  },
  48475: function (e, t, n) {
    e.exports = n(73994)
  }
}]);
