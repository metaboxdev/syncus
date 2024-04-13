(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[758], {
	42744: function (e, t) {
		var o;
		/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
		!function () {
			"use strict";
			var n = {}.hasOwnProperty;
			function l() {
				for (var e = "", t = 0; t < arguments.length; t++) {
					var o = arguments[t];
					o && (e = r(e, function (e) {
						if ("string" == typeof e || "number" == typeof e)
							return e;
						if ("object" != typeof e)
							return "";
						if (Array.isArray(e))
							return l.apply(null, e);
						if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]"))
							return e.toString();
						var t = "";
						for (var o in e)
							n.call(e, o) && e[o] && (t = r(t, o));
						return t
					}(o)))
				}
				return e
			}
			function r(e, t) {
				return t ? e ? e + " " + t : e + t : e
			}
			e.exports ? (l.default = l,
				e.exports = l) : void 0 !== (o = (function () {
					return l
				}
				).apply(t, [])) && (e.exports = o)
		}()
	},
	21758: function (e, t, o) {
		"use strict";
		o.d(t, {
			u: function () {
				return ex
			}
		});
		var n = o(2265);
		let l = Math.min
			, r = Math.max
			, i = Math.round
			, c = Math.floor
			, s = e => ({
				x: e,
				y: e
			})
			, a = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			}
			, u = {
				start: "end",
				end: "start"
			};
		function d(e, t) {
			return "function" == typeof e ? e(t) : e
		}
		function f(e) {
			return e.split("-")[0]
		}
		function p(e) {
			return e.split("-")[1]
		}
		function m(e) {
			return "x" === e ? "y" : "x"
		}
		function v(e) {
			return "y" === e ? "height" : "width"
		}
		function h(e) {
			return ["top", "bottom"].includes(f(e)) ? "y" : "x"
		}
		function y(e) {
			return e.replace(/start|end/g, e => u[e])
		}
		function w(e) {
			return e.replace(/left|right|bottom|top/g, e => a[e])
		}
		function g(e) {
			return "number" != typeof e ? {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				...e
			} : {
				top: e,
				right: e,
				bottom: e,
				left: e
			}
		}
		function b(e) {
			return {
				...e,
				top: e.y,
				left: e.x,
				right: e.x + e.width,
				bottom: e.y + e.height
			}
		}
		function _(e, t, o) {
			let n, { reference: l, floating: r } = e, i = h(t), c = m(h(t)), s = v(c), a = f(t), u = "y" === i, d = l.x + l.width / 2 - r.width / 2, y = l.y + l.height / 2 - r.height / 2, w = l[s] / 2 - r[s] / 2;
			switch (a) {
				case "top":
					n = {
						x: d,
						y: l.y - r.height
					};
					break;
				case "bottom":
					n = {
						x: d,
						y: l.y + l.height
					};
					break;
				case "right":
					n = {
						x: l.x + l.width,
						y: y
					};
					break;
				case "left":
					n = {
						x: l.x - r.width,
						y: y
					};
					break;
				default:
					n = {
						x: l.x,
						y: l.y
					}
			}
			switch (p(t)) {
				case "start":
					n[c] -= w * (o && u ? -1 : 1);
					break;
				case "end":
					n[c] += w * (o && u ? -1 : 1)
			}
			return n
		}
		let E = async (e, t, o) => {
			let { placement: n = "bottom", strategy: l = "absolute", middleware: r = [], platform: i } = o
				, c = r.filter(Boolean)
				, s = await (null == i.isRTL ? void 0 : i.isRTL(t))
				, a = await i.getElementRects({
					reference: e,
					floating: t,
					strategy: l
				})
				, { x: u, y: d } = _(a, n, s)
				, f = n
				, p = {}
				, m = 0;
			for (let o = 0; o < c.length; o++) {
				let { name: r, fn: v } = c[o]
					, { x: h, y: y, data: w, reset: g } = await v({
						x: u,
						y: d,
						initialPlacement: n,
						placement: f,
						strategy: l,
						middlewareData: p,
						rects: a,
						platform: i,
						elements: {
							reference: e,
							floating: t
						}
					});
				u = null != h ? h : u,
					d = null != y ? y : d,
					p = {
						...p,
						[r]: {
							...p[r],
							...w
						}
					},
					g && m <= 50 && (m++,
						"object" == typeof g && (g.placement && (f = g.placement),
							g.rects && (a = !0 === g.rects ? await i.getElementRects({
								reference: e,
								floating: t,
								strategy: l
							}) : g.rects),
							{ x: u, y: d } = _(a, f, s)),
						o = -1)
			}
			return {
				x: u,
				y: d,
				placement: f,
				strategy: l,
				middlewareData: p
			}
		}
			;
		async function x(e, t) {
			var o;
			void 0 === t && (t = {});
			let { x: n, y: l, platform: r, rects: i, elements: c, strategy: s } = e
				, { boundary: a = "clippingAncestors", rootBoundary: u = "viewport", elementContext: f = "floating", altBoundary: p = !1, padding: m = 0 } = d(t, e)
				, v = g(m)
				, h = c[p ? "floating" === f ? "reference" : "floating" : f]
				, y = b(await r.getClippingRect({
					element: null == (o = await (null == r.isElement ? void 0 : r.isElement(h))) || o ? h : h.contextElement || await (null == r.getDocumentElement ? void 0 : r.getDocumentElement(c.floating)),
					boundary: a,
					rootBoundary: u,
					strategy: s
				}))
				, w = "floating" === f ? {
					...i.floating,
					x: n,
					y: l
				} : i.reference
				, _ = await (null == r.getOffsetParent ? void 0 : r.getOffsetParent(c.floating))
				, E = await (null == r.isElement ? void 0 : r.isElement(_)) && await (null == r.getScale ? void 0 : r.getScale(_)) || {
					x: 1,
					y: 1
				}
				, x = b(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
					elements: c,
					rect: w,
					offsetParent: _,
					strategy: s
				}) : w);
			return {
				top: (y.top - x.top + v.top) / E.y,
				bottom: (x.bottom - y.bottom + v.bottom) / E.y,
				left: (y.left - x.left + v.left) / E.x,
				right: (x.right - y.right + v.right) / E.x
			}
		}
		async function S(e, t) {
			let { placement: o, platform: n, elements: l } = e
				, r = await (null == n.isRTL ? void 0 : n.isRTL(l.floating))
				, i = f(o)
				, c = p(o)
				, s = "y" === h(o)
				, a = ["left", "top"].includes(i) ? -1 : 1
				, u = r && s ? -1 : 1
				, m = d(t, e)
				, { mainAxis: v, crossAxis: y, alignmentAxis: w } = "number" == typeof m ? {
					mainAxis: m,
					crossAxis: 0,
					alignmentAxis: null
				} : {
					mainAxis: 0,
					crossAxis: 0,
					alignmentAxis: null,
					...m
				};
			return c && "number" == typeof w && (y = "end" === c ? -1 * w : w),
				s ? {
					x: y * u,
					y: v * a
				} : {
					x: v * a,
					y: y * u
				}
		}
		let T = function (e) {
			return void 0 === e && (e = 0),
			{
				name: "offset",
				options: e,
				async fn(t) {
					var o, n;
					let { x: l, y: r, placement: i, middlewareData: c } = t
						, s = await S(t, e);
					return i === (null == (o = c.offset) ? void 0 : o.placement) && null != (n = c.arrow) && n.alignmentOffset ? {} : {
						x: l + s.x,
						y: r + s.y,
						data: {
							...s,
							placement: i
						}
					}
				}
			}
		};
		function R(e) {
			return k(e) ? (e.nodeName || "").toLowerCase() : "#document"
		}
		function A(e) {
			var t;
			return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
		}
		function O(e) {
			var t;
			return null == (t = (k(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
		}
		function k(e) {
			return e instanceof Node || e instanceof A(e).Node
		}
		function L(e) {
			return e instanceof Element || e instanceof A(e).Element
		}
		function C(e) {
			return e instanceof HTMLElement || e instanceof A(e).HTMLElement
		}
		function N(e) {
			return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof A(e).ShadowRoot)
		}
		function D(e) {
			let { overflow: t, overflowX: o, overflowY: n, display: l } = W(e);
			return /auto|scroll|overlay|hidden|clip/.test(t + n + o) && !["inline", "contents"].includes(l)
		}
		function $(e) {
			let t = I()
				, o = W(e);
			return "none" !== o.transform || "none" !== o.perspective || !!o.containerType && "normal" !== o.containerType || !t && !!o.backdropFilter && "none" !== o.backdropFilter || !t && !!o.filter && "none" !== o.filter || ["transform", "perspective", "filter"].some(e => (o.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (o.contain || "").includes(e))
		}
		function j(e) {
			let t = M(e);
			for (; C(t) && !H(t);) {
				if ($(t))
					return t;
				t = M(t)
			}
			return null
		}
		function I() {
			return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
		}
		function H(e) {
			return ["html", "body", "#document"].includes(R(e))
		}
		function W(e) {
			return A(e).getComputedStyle(e)
		}
		function B(e) {
			return L(e) ? {
				scrollLeft: e.scrollLeft,
				scrollTop: e.scrollTop
			} : {
				scrollLeft: e.pageXOffset,
				scrollTop: e.pageYOffset
			}
		}
		function M(e) {
			if ("html" === R(e))
				return e;
			let t = e.assignedSlot || e.parentNode || N(e) && e.host || O(e);
			return N(t) ? t.host : t
		}
		function z(e, t, o) {
			var n;
			void 0 === t && (t = []),
				void 0 === o && (o = !0);
			let l = function e(t) {
				let o = M(t);
				return H(o) ? t.ownerDocument ? t.ownerDocument.body : t.body : C(o) && D(o) ? o : e(o)
			}(e)
				, r = l === (null == (n = e.ownerDocument) ? void 0 : n.body)
				, i = A(l);
			return r ? t.concat(i, i.visualViewport || [], D(l) ? l : [], i.frameElement && o ? z(i.frameElement) : []) : t.concat(l, z(l, [], o))
		}
		function F(e) {
			let t = W(e)
				, o = parseFloat(t.width) || 0
				, n = parseFloat(t.height) || 0
				, l = C(e)
				, r = l ? e.offsetWidth : o
				, c = l ? e.offsetHeight : n
				, s = i(o) !== r || i(n) !== c;
			return s && (o = r,
				n = c),
			{
				width: o,
				height: n,
				$: s
			}
		}
		function P(e) {
			return L(e) ? e : e.contextElement
		}
		function V(e) {
			let t = P(e);
			if (!C(t))
				return s(1);
			let o = t.getBoundingClientRect()
				, { width: n, height: l, $: r } = F(t)
				, c = (r ? i(o.width) : o.width) / n
				, a = (r ? i(o.height) : o.height) / l;
			return c && Number.isFinite(c) || (c = 1),
				a && Number.isFinite(a) || (a = 1),
			{
				x: c,
				y: a
			}
		}
		let q = s(0);
		function K(e) {
			let t = A(e);
			return I() && t.visualViewport ? {
				x: t.visualViewport.offsetLeft,
				y: t.visualViewport.offsetTop
			} : q
		}
		function X(e, t, o, n) {
			var l;
			void 0 === t && (t = !1),
				void 0 === o && (o = !1);
			let r = e.getBoundingClientRect()
				, i = P(e)
				, c = s(1);
			t && (n ? L(n) && (c = V(n)) : c = V(e));
			let a = (void 0 === (l = o) && (l = !1),
				n && (!l || n === A(i)) && l) ? K(i) : s(0)
				, u = (r.left + a.x) / c.x
				, d = (r.top + a.y) / c.y
				, f = r.width / c.x
				, p = r.height / c.y;
			if (i) {
				let e = A(i)
					, t = n && L(n) ? A(n) : n
					, o = e.frameElement;
				for (; o && n && t !== e;) {
					let e = V(o)
						, t = o.getBoundingClientRect()
						, n = W(o)
						, l = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x
						, r = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
					u *= e.x,
						d *= e.y,
						f *= e.x,
						p *= e.y,
						u += l,
						d += r,
						o = A(o).frameElement
				}
			}
			return b({
				width: f,
				height: p,
				x: u,
				y: d
			})
		}
		let Y = [":popover-open", ":modal"];
		function Z(e) {
			let t = !1
				, o = 0
				, n = 0;
			if (Y.forEach(o => {
				!function (o) {
					try {
						t = t || e.matches(o)
					} catch (e) { }
				}(o)
			}
			),
				t) {
				let t = j(e);
				if (t) {
					let e = t.getBoundingClientRect();
					o = e.x,
						n = e.y
				}
			}
			return [t, o, n]
		}
		function G(e) {
			return X(O(e)).left + B(e).scrollLeft
		}
		function U(e, t, o) {
			let n;
			if ("viewport" === t)
				n = function (e, t) {
					let o = A(e)
						, n = O(e)
						, l = o.visualViewport
						, r = n.clientWidth
						, i = n.clientHeight
						, c = 0
						, s = 0;
					if (l) {
						r = l.width,
							i = l.height;
						let e = I();
						(!e || e && "fixed" === t) && (c = l.offsetLeft,
							s = l.offsetTop)
					}
					return {
						width: r,
						height: i,
						x: c,
						y: s
					}
				}(e, o);
			else if ("document" === t)
				n = function (e) {
					let t = O(e)
						, o = B(e)
						, n = e.ownerDocument.body
						, l = r(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth)
						, i = r(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight)
						, c = -o.scrollLeft + G(e)
						, s = -o.scrollTop;
					return "rtl" === W(n).direction && (c += r(t.clientWidth, n.clientWidth) - l),
					{
						width: l,
						height: i,
						x: c,
						y: s
					}
				}(O(e));
			else if (L(t))
				n = function (e, t) {
					let o = X(e, !0, "fixed" === t)
						, n = o.top + e.clientTop
						, l = o.left + e.clientLeft
						, r = C(e) ? V(e) : s(1)
						, i = e.clientWidth * r.x;
					return {
						width: i,
						height: e.clientHeight * r.y,
						x: l * r.x,
						y: n * r.y
					}
				}(t, o);
			else {
				let o = K(e);
				n = {
					...t,
					x: t.x - o.x,
					y: t.y - o.y
				}
			}
			return b(n)
		}
		function J(e, t) {
			return C(e) && "fixed" !== W(e).position ? t ? t(e) : e.offsetParent : null
		}
		function Q(e, t) {
			let o = A(e);
			if (!C(e))
				return o;
			let n = J(e, t);
			for (; n && ["table", "td", "th"].includes(R(n)) && "static" === W(n).position;)
				n = J(n, t);
			return n && ("html" === R(n) || "body" === R(n) && "static" === W(n).position && !$(n)) ? o : n || j(e) || o
		}
		let ee = async function (e) {
			let t = this.getOffsetParent || Q
				, o = this.getDimensions;
			return {
				reference: function (e, t, o, n) {
					let l = C(t)
						, r = O(t)
						, i = "fixed" === o
						, c = X(e, !0, i, t)
						, a = {
							scrollLeft: 0,
							scrollTop: 0
						}
						, u = s(0);
					if (l || !l && !i) {
						if (("body" !== R(t) || D(r)) && (a = B(t)),
							l) {
							let e = X(t, !0, i, t);
							u.x = e.x + t.clientLeft,
								u.y = e.y + t.clientTop
						} else
							r && (u.x = G(r))
					}
					let d = c.left + a.scrollLeft - u.x
						, f = c.top + a.scrollTop - u.y
						, [p, m, v] = Z(n);
					return p && (d += m,
						f += v,
						l && (d += t.clientLeft,
							f += t.clientTop)),
					{
						x: d,
						y: f,
						width: c.width,
						height: c.height
					}
				}(e.reference, await t(e.floating), e.strategy, e.floating),
				floating: {
					x: 0,
					y: 0,
					...await o(e.floating)
				}
			}
		}
			, et = {
				convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
					let { elements: t, rect: o, offsetParent: n, strategy: l } = e
						, r = O(n)
						, [i] = t ? Z(t.floating) : [!1];
					if (n === r || i)
						return o;
					let c = {
						scrollLeft: 0,
						scrollTop: 0
					}
						, a = s(1)
						, u = s(0)
						, d = C(n);
					if ((d || !d && "fixed" !== l) && (("body" !== R(n) || D(r)) && (c = B(n)),
						C(n))) {
						let e = X(n);
						a = V(n),
							u.x = e.x + n.clientLeft,
							u.y = e.y + n.clientTop
					}
					return {
						width: o.width * a.x,
						height: o.height * a.y,
						x: o.x * a.x - c.scrollLeft * a.x + u.x,
						y: o.y * a.y - c.scrollTop * a.y + u.y
					}
				},
				getDocumentElement: O,
				getClippingRect: function (e) {
					let { element: t, boundary: o, rootBoundary: n, strategy: i } = e
						, c = [..."clippingAncestors" === o ? function (e, t) {
							let o = t.get(e);
							if (o)
								return o;
							let n = z(e, [], !1).filter(e => L(e) && "body" !== R(e))
								, l = null
								, r = "fixed" === W(e).position
								, i = r ? M(e) : e;
							for (; L(i) && !H(i);) {
								let t = W(i)
									, o = $(i);
								o || "fixed" !== t.position || (l = null),
									(r ? !o && !l : !o && "static" === t.position && !!l && ["absolute", "fixed"].includes(l.position) || D(i) && !o && function e(t, o) {
										let n = M(t);
										return !(n === o || !L(n) || H(n)) && ("fixed" === W(n).position || e(n, o))
									}(e, i)) ? n = n.filter(e => e !== i) : l = t,
									i = M(i)
							}
							return t.set(e, n),
								n
						}(t, this._c) : [].concat(o), n]
						, s = c[0]
						, a = c.reduce((e, o) => {
							let n = U(t, o, i);
							return e.top = r(n.top, e.top),
								e.right = l(n.right, e.right),
								e.bottom = l(n.bottom, e.bottom),
								e.left = r(n.left, e.left),
								e
						}
							, U(t, s, i));
					return {
						width: a.right - a.left,
						height: a.bottom - a.top,
						x: a.left,
						y: a.top
					}
				},
				getOffsetParent: Q,
				getElementRects: ee,
				getClientRects: function (e) {
					return Array.from(e.getClientRects())
				},
				getDimensions: function (e) {
					let { width: t, height: o } = F(e);
					return {
						width: t,
						height: o
					}
				},
				getScale: V,
				isElement: L,
				isRTL: function (e) {
					return "rtl" === W(e).direction
				}
			}
			, eo = function (e) {
				return void 0 === e && (e = {}),
				{
					name: "shift",
					options: e,
					async fn(t) {
						let { x: o, y: n, placement: i } = t
							, { mainAxis: c = !0, crossAxis: s = !1, limiter: a = {
								fn: e => {
									let { x: t, y: o } = e;
									return {
										x: t,
										y: o
									}
								}
							}, ...u } = d(e, t)
							, p = {
								x: o,
								y: n
							}
							, v = await x(t, u)
							, y = h(f(i))
							, w = m(y)
							, g = p[w]
							, b = p[y];
						if (c) {
							let e = "y" === w ? "top" : "left"
								, t = "y" === w ? "bottom" : "right"
								, o = g + v[e]
								, n = g - v[t];
							g = r(o, l(g, n))
						}
						if (s) {
							let e = "y" === y ? "top" : "left"
								, t = "y" === y ? "bottom" : "right"
								, o = b + v[e]
								, n = b - v[t];
							b = r(o, l(b, n))
						}
						let _ = a.fn({
							...t,
							[w]: g,
							[y]: b
						});
						return {
							..._,
							data: {
								x: _.x - o,
								y: _.y - n
							}
						}
					}
				}
			}
			, en = function (e) {
				return void 0 === e && (e = {}),
				{
					name: "flip",
					options: e,
					async fn(t) {
						var o, n, l, r, i;
						let { placement: c, middlewareData: s, rects: a, initialPlacement: u, platform: g, elements: b } = t
							, { mainAxis: _ = !0, crossAxis: E = !0, fallbackPlacements: S, fallbackStrategy: T = "bestFit", fallbackAxisSideDirection: R = "none", flipAlignment: A = !0, ...O } = d(e, t);
						if (null != (o = s.arrow) && o.alignmentOffset)
							return {};
						let k = f(c)
							, L = f(u) === u
							, C = await (null == g.isRTL ? void 0 : g.isRTL(b.floating))
							, N = S || (L || !A ? [w(u)] : function (e) {
								let t = w(e);
								return [y(e), t, y(t)]
							}(u));
						S || "none" === R || N.push(...function (e, t, o, n) {
							let l = p(e)
								, r = function (e, t, o) {
									let n = ["left", "right"]
										, l = ["right", "left"];
									switch (e) {
										case "top":
										case "bottom":
											if (o)
												return t ? l : n;
											return t ? n : l;
										case "left":
										case "right":
											return t ? ["top", "bottom"] : ["bottom", "top"];
										default:
											return []
									}
								}(f(e), "start" === o, n);
							return l && (r = r.map(e => e + "-" + l),
								t && (r = r.concat(r.map(y)))),
								r
						}(u, A, R, C));
						let D = [u, ...N]
							, $ = await x(t, O)
							, j = []
							, I = (null == (n = s.flip) ? void 0 : n.overflows) || [];
						if (_ && j.push($[k]),
							E) {
							let e = function (e, t, o) {
								void 0 === o && (o = !1);
								let n = p(e)
									, l = m(h(e))
									, r = v(l)
									, i = "x" === l ? n === (o ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
								return t.reference[r] > t.floating[r] && (i = w(i)),
									[i, w(i)]
							}(c, a, C);
							j.push($[e[0]], $[e[1]])
						}
						if (I = [...I, {
							placement: c,
							overflows: j
						}],
							!j.every(e => e <= 0)) {
							let e = ((null == (l = s.flip) ? void 0 : l.index) || 0) + 1
								, t = D[e];
							if (t)
								return {
									data: {
										index: e,
										overflows: I
									},
									reset: {
										placement: t
									}
								};
							let o = null == (r = I.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : r.placement;
							if (!o)
								switch (T) {
									case "bestFit":
										{
											let e = null == (i = I.map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : i[0];
											e && (o = e);
											break
										}
									case "initialPlacement":
										o = u
								}
							if (c !== o)
								return {
									reset: {
										placement: o
									}
								}
						}
						return {}
					}
				}
			}
			, el = e => ({
				name: "arrow",
				options: e,
				async fn(t) {
					let { x: o, y: n, placement: i, rects: c, platform: s, elements: a, middlewareData: u } = t
						, { element: f, padding: y = 0 } = d(e, t) || {};
					if (null == f)
						return {};
					let w = g(y)
						, b = {
							x: o,
							y: n
						}
						, _ = m(h(i))
						, E = v(_)
						, x = await s.getDimensions(f)
						, S = "y" === _
						, T = S ? "clientHeight" : "clientWidth"
						, R = c.reference[E] + c.reference[_] - b[_] - c.floating[E]
						, A = b[_] - c.reference[_]
						, O = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(f))
						, k = O ? O[T] : 0;
					k && await (null == s.isElement ? void 0 : s.isElement(O)) || (k = a.floating[T] || c.floating[E]);
					let L = k / 2 - x[E] / 2 - 1
						, C = l(w[S ? "top" : "left"], L)
						, N = l(w[S ? "bottom" : "right"], L)
						, D = k - x[E] - N
						, $ = k / 2 - x[E] / 2 + (R / 2 - A / 2)
						, j = r(C, l($, D))
						, I = !u.arrow && null != p(i) && $ !== j && c.reference[E] / 2 - ($ < C ? C : N) - x[E] / 2 < 0
						, H = I ? $ < C ? $ - C : $ - D : 0;
					return {
						[_]: b[_] + H,
						data: {
							[_]: j,
							centerOffset: $ - j - H,
							...I && {
								alignmentOffset: H
							}
						},
						reset: I
					}
				}
			})
			, er = (e, t, o) => {
				let n = new Map
					, l = {
						platform: et,
						...o
					}
					, r = {
						...l.platform,
						_c: n
					};
				return E(e, t, {
					...l,
					platform: r
				})
			}
			;
		var ei = o(42744)
			, ec = o(25566);
		/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
		let es = {
			core: !1,
			base: !1
		};
		function ea({ css: e, id: t = "react-tooltip-base-styles", type: o = "base", ref: n }) {
			var l, r;
			if (!e || "undefined" == typeof document || es[o] || "core" === o && void 0 !== ec && (null === (l = null == ec ? void 0 : ec.env) || void 0 === l ? void 0 : l.REACT_TOOLTIP_DISABLE_CORE_STYLES) || "base" !== o && void 0 !== ec && (null === (r = null == ec ? void 0 : ec.env) || void 0 === r ? void 0 : r.REACT_TOOLTIP_DISABLE_BASE_STYLES))
				return;
			"core" === o && (t = "react-tooltip-core-styles"),
				n || (n = {});
			let { insertAt: i } = n;
			if (document.getElementById(t))
				return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);
			let c = document.head || document.getElementsByTagName("head")[0]
				, s = document.createElement("style");
			s.id = t,
				s.type = "text/css",
				"top" === i && c.firstChild ? c.insertBefore(s, c.firstChild) : c.appendChild(s),
				s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(document.createTextNode(e)),
				es[o] = !0
		}
		let eu = (e, t, o) => {
			let n = null
				, l = function (...l) {
					let r = () => {
						n = null,
							o || e.apply(this, l)
					}
						;
					o && !n && (e.apply(this, l),
						n = setTimeout(r, t)),
						o || (n && clearTimeout(n),
							n = setTimeout(r, t))
				};
			return l.cancel = () => {
				n && (clearTimeout(n),
					n = null)
			}
				,
				l
		}
			, ed = {
				anchorRefs: new Set,
				activeAnchor: {
					current: null
				},
				attach: () => { }
				,
				detach: () => { }
				,
				setActiveAnchor: () => { }
			}
			, ef = (0,
				n.createContext)({
					getTooltipData: () => ed
				});
		function ep(e = "DEFAULT_TOOLTIP_ID") {
			return (0,
				n.useContext)(ef).getTooltipData(e)
		}
		let em = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect
			, ev = e => {
				if (!(e instanceof HTMLElement || e instanceof SVGElement))
					return !1;
				let t = getComputedStyle(e);
				return ["overflow", "overflow-x", "overflow-y"].some(e => {
					let o = t.getPropertyValue(e);
					return "auto" === o || "scroll" === o
				}
				)
			}
			, eh = e => {
				if (!e)
					return null;
				let t = e.parentElement;
				for (; t;) {
					if (ev(t))
						return t;
					t = t.parentElement
				}
				return document.scrollingElement || document.documentElement
			}
			, ey = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: o = null, place: n = "top", offset: l = 10, strategy: r = "absolute", middlewares: i = [T(Number(l)), en({
				fallbackAxisSideDirection: "start"
			}), eo({
				padding: 5
			})], border: c }) => e && null !== t ? o ? (i.push(el({
				element: o,
				padding: 5
			})),
				er(e, t, {
					placement: n,
					strategy: r,
					middleware: i
				}).then(({ x: e, y: t, placement: o, middlewareData: n }) => {
					var l, r;
					let i = {
						left: `${e}px`,
						top: `${t}px`,
						border: c
					}
						, { x: s, y: a } = null !== (l = n.arrow) && void 0 !== l ? l : {
							x: 0,
							y: 0
						}
						, u = null !== (r = ({
							top: "bottom",
							right: "left",
							bottom: "top",
							left: "right"
						})[o.split("-")[0]]) && void 0 !== r ? r : "bottom"
						, d = 0;
					if (c) {
						let e = `${c}`.match(/(\d+)px/);
						d = (null == e ? void 0 : e[1]) ? Number(e[1]) : 1
					}
					return {
						tooltipStyles: i,
						tooltipArrowStyles: {
							left: null != s ? `${s}px` : "",
							top: null != a ? `${a}px` : "",
							right: "",
							bottom: "",
							...c && {
								borderBottom: c,
								borderRight: c
							},
							[u]: `-${4 + d}px`
						},
						place: o
					}
				}
				)) : er(e, t, {
					placement: "bottom",
					strategy: r,
					middleware: i
				}).then(({ x: e, y: t, placement: o }) => ({
					tooltipStyles: {
						left: `${e}px`,
						top: `${t}px`
					},
					tooltipArrowStyles: {},
					place: o
				})) : {
					tooltipStyles: {},
					tooltipArrowStyles: {},
					place: n
				};
		var ew = {
			tooltip: "core-styles-module_tooltip__3vRRp",
			fixed: "core-styles-module_fixed__pcSol",
			arrow: "core-styles-module_arrow__cvMwQ",
			noArrow: "core-styles-module_noArrow__xock6",
			clickable: "core-styles-module_clickable__ZuTTB",
			show: "core-styles-module_show__Nt9eE",
			closing: "core-styles-module_closing__sGnxF"
		}
			, eg = {
				tooltip: "styles-module_tooltip__mnnfp",
				arrow: "styles-module_arrow__K0L3T",
				dark: "styles-module_dark__xNqje",
				light: "styles-module_light__Z6W-X",
				success: "styles-module_success__A2AKt",
				warning: "styles-module_warning__SCK0X",
				error: "styles-module_error__JvumD",
				info: "styles-module_info__BWdHW"
			};
		let eb = ({ forwardRef: e, id: t, className: o, classNameArrow: i, variant: s = "dark", anchorId: a, anchorSelect: u, place: d = "top", offset: f = 10, events: p = ["hover"], openOnClick: m = !1, positionStrategy: v = "absolute", middlewares: h, wrapper: y, delayShow: w = 0, delayHide: g = 0, float: b = !1, hidden: _ = !1, noArrow: E = !1, clickable: x = !1, closeOnEsc: S = !1, closeOnScroll: T = !1, closeOnResize: R = !1, openEvents: A, closeEvents: k, globalCloseEvents: L, imperativeModeOnly: C, style: N, position: D, afterShow: $, afterHide: j, content: I, contentWrapperRef: H, isOpen: W, defaultIsOpen: B = !1, setIsOpen: M, activeAnchor: F, setActiveAnchor: V, border: q, opacity: K, arrowColor: Y, role: Z = "tooltip" }) => {
			var G;
			let U = (0,
				n.useRef)(null)
				, J = (0,
					n.useRef)(null)
				, Q = (0,
					n.useRef)(null)
				, ee = (0,
					n.useRef)(null)
				, et = (0,
					n.useRef)(null)
				, [eo, en] = (0,
					n.useState)(d)
				, [el, er] = (0,
					n.useState)({})
				, [ec, es] = (0,
					n.useState)({})
				, [ea, ed] = (0,
					n.useState)(!1)
				, [ef, ev] = (0,
					n.useState)(!1)
				, [eb, e_] = (0,
					n.useState)(null)
				, eE = (0,
					n.useRef)(!1)
				, ex = (0,
					n.useRef)(null)
				, { anchorRefs: eS, setActiveAnchor: eT } = ep(t)
				, eR = (0,
					n.useRef)(!1)
				, [eA, eO] = (0,
					n.useState)([])
				, ek = (0,
					n.useRef)(!1)
				, eL = m || p.includes("click")
				, eC = eL || (null == A ? void 0 : A.click) || (null == A ? void 0 : A.dblclick) || (null == A ? void 0 : A.mousedown)
				, eN = A ? {
					...A
				} : {
					mouseenter: !0,
					focus: !0,
					click: !1,
					dblclick: !1,
					mousedown: !1
				};
			!A && eL && Object.assign(eN, {
				mouseenter: !1,
				focus: !1,
				click: !0
			});
			let eD = k ? {
				...k
			} : {
				mouseleave: !0,
				blur: !0,
				click: !1,
				dblclick: !1,
				mouseup: !1
			};
			!k && eL && Object.assign(eD, {
				mouseleave: !1,
				blur: !1
			});
			let e$ = L ? {
				...L
			} : {
				escape: S || !1,
				scroll: T || !1,
				resize: R || !1,
				clickOutsideAnchor: eC || !1
			};
			C && (Object.assign(eN, {
				mouseenter: !1,
				focus: !1,
				click: !1,
				dblclick: !1,
				mousedown: !1
			}),
				Object.assign(eD, {
					mouseleave: !1,
					blur: !1,
					click: !1,
					dblclick: !1,
					mouseup: !1
				}),
				Object.assign(e$, {
					escape: !1,
					scroll: !1,
					resize: !1,
					clickOutsideAnchor: !1
				})),
				em(() => (ek.current = !0,
					() => {
						ek.current = !1
					}
				), []);
			let ej = e => {
				ek.current && (e && ev(!0),
					setTimeout(() => {
						ek.current && (null == M || M(e),
							void 0 === W && ed(e))
					}
						, 10))
			}
				;
			(0,
				n.useEffect)(() => {
					if (void 0 === W)
						return () => null;
					W && ev(!0);
					let e = setTimeout(() => {
						ed(W)
					}
						, 10);
					return () => {
						clearTimeout(e)
					}
				}
					, [W]),
				(0,
					n.useEffect)(() => {
						if (ea !== eE.current) {
							if (et.current && clearTimeout(et.current),
								eE.current = ea,
								ea)
								null == $ || $();
							else {
								let e = (e => {
									let t = e.match(/^([\d.]+)(m?s?)$/);
									if (!t)
										return 0;
									let [, o, n] = t;
									return "s" !== n && "ms" !== n ? 0 : Number(o) * ("ms" === n ? 1 : 1e3)
								}
								)(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
								et.current = setTimeout(() => {
									ev(!1),
										e_(null),
										null == j || j()
								}
									, e + 25)
							}
						}
					}
						, [ea]);
			let eI = (e = w) => {
				Q.current && clearTimeout(Q.current),
					Q.current = setTimeout(() => {
						ej(!0)
					}
						, e)
			}
				, eH = (e = g) => {
					ee.current && clearTimeout(ee.current),
						ee.current = setTimeout(() => {
							eR.current || ej(!1)
						}
							, e)
				}
				, eW = e => {
					var t;
					if (!e)
						return;
					let o = null !== (t = e.currentTarget) && void 0 !== t ? t : e.target;
					if (!(null == o ? void 0 : o.isConnected))
						return V(null),
							void eT({
								current: null
							});
					w ? eI() : ej(!0),
						V(o),
						eT({
							current: o
						}),
						ee.current && clearTimeout(ee.current)
				}
				, eB = () => {
					x ? eH(g || 100) : g ? eH() : ej(!1),
						Q.current && clearTimeout(Q.current)
				}
				, eM = ({ x: e, y: t }) => {
					var o;
					ey({
						place: null !== (o = null == eb ? void 0 : eb.place) && void 0 !== o ? o : d,
						offset: f,
						elementReference: {
							getBoundingClientRect: () => ({
								x: e,
								y: t,
								width: 0,
								height: 0,
								top: t,
								left: e,
								right: e,
								bottom: t
							})
						},
						tooltipReference: U.current,
						tooltipArrowReference: J.current,
						strategy: v,
						middlewares: h,
						border: q
					}).then(e => {
						Object.keys(e.tooltipStyles).length && er(e.tooltipStyles),
							Object.keys(e.tooltipArrowStyles).length && es(e.tooltipArrowStyles),
							en(e.place)
					}
					)
				}
				, ez = e => {
					if (!e)
						return;
					let t = {
						x: e.clientX,
						y: e.clientY
					};
					eM(t),
						ex.current = t
				}
				, eF = e => {
					var t;
					if (!ea)
						return;
					let o = e.target;
					(null === (t = U.current) || void 0 === t || !t.contains(o)) && ([document.querySelector(`[id='${a}']`), ...eA].some(e => null == e ? void 0 : e.contains(o)) || (ej(!1),
						Q.current && clearTimeout(Q.current)))
				}
				, eP = eu(eW, 50, !0)
				, eV = eu(eB, 50, !0)
				, eq = e => {
					eV.cancel(),
						eP(e)
				}
				, eK = () => {
					eP.cancel(),
						eV()
				}
				, eX = (0,
					n.useCallback)(() => {
						var e, t;
						let o = null !== (e = null == eb ? void 0 : eb.position) && void 0 !== e ? e : D;
						o ? eM(o) : b ? ex.current && eM(ex.current) : (null == F ? void 0 : F.isConnected) && ey({
							place: null !== (t = null == eb ? void 0 : eb.place) && void 0 !== t ? t : d,
							offset: f,
							elementReference: F,
							tooltipReference: U.current,
							tooltipArrowReference: J.current,
							strategy: v,
							middlewares: h,
							border: q
						}).then(e => {
							ek.current && (Object.keys(e.tooltipStyles).length && er(e.tooltipStyles),
								Object.keys(e.tooltipArrowStyles).length && es(e.tooltipArrowStyles),
								en(e.place))
						}
						)
					}
						, [ea, F, I, N, d, null == eb ? void 0 : eb.place, f, v, D, null == eb ? void 0 : eb.position, b]);
			(0,
				n.useEffect)(() => {
					var e, t;
					let o = new Set(eS);
					eA.forEach(e => {
						o.add({
							current: e
						})
					}
					);
					let n = document.querySelector(`[id='${a}']`);
					n && o.add({
						current: n
					});
					let i = () => {
						ej(!1)
					}
						, s = eh(F)
						, u = eh(U.current);
					e$.scroll && (window.addEventListener("scroll", i),
						null == s || s.addEventListener("scroll", i),
						null == u || u.addEventListener("scroll", i));
					let d = null;
					e$.resize ? window.addEventListener("resize", i) : F && U.current && (d = function (e, t, o, n) {
						let i;
						void 0 === n && (n = {});
						let { ancestorScroll: s = !0, ancestorResize: a = !0, elementResize: u = "function" == typeof ResizeObserver, layoutShift: d = "function" == typeof IntersectionObserver, animationFrame: f = !1 } = n
							, p = P(e)
							, m = s || a ? [...p ? z(p) : [], ...z(t)] : [];
						m.forEach(e => {
							s && e.addEventListener("scroll", o, {
								passive: !0
							}),
								a && e.addEventListener("resize", o)
						}
						);
						let v = p && d ? function (e, t) {
							let o, n = null, i = O(e);
							function s() {
								var e;
								clearTimeout(o),
									null == (e = n) || e.disconnect(),
									n = null
							}
							return function a(u, d) {
								void 0 === u && (u = !1),
									void 0 === d && (d = 1),
									s();
								let { left: f, top: p, width: m, height: v } = e.getBoundingClientRect();
								if (u || t(),
									!m || !v)
									return;
								let h = c(p)
									, y = c(i.clientWidth - (f + m))
									, w = {
										rootMargin: -h + "px " + -y + "px " + -c(i.clientHeight - (p + v)) + "px " + -c(f) + "px",
										threshold: r(0, l(1, d)) || 1
									}
									, g = !0;
								function b(e) {
									let t = e[0].intersectionRatio;
									if (t !== d) {
										if (!g)
											return a();
										t ? a(!1, t) : o = setTimeout(() => {
											a(!1, 1e-7)
										}
											, 100)
									}
									g = !1
								}
								try {
									n = new IntersectionObserver(b, {
										...w,
										root: i.ownerDocument
									})
								} catch (e) {
									n = new IntersectionObserver(b, w)
								}
								n.observe(e)
							}(!0),
								s
						}(p, o) : null
							, h = -1
							, y = null;
						u && (y = new ResizeObserver(e => {
							let [n] = e;
							n && n.target === p && y && (y.unobserve(t),
								cancelAnimationFrame(h),
								h = requestAnimationFrame(() => {
									var e;
									null == (e = y) || e.observe(t)
								}
								)),
								o()
						}
						),
							p && !f && y.observe(p),
							y.observe(t));
						let w = f ? X(e) : null;
						return f && function t() {
							let n = X(e);
							w && (n.x !== w.x || n.y !== w.y || n.width !== w.width || n.height !== w.height) && o(),
								w = n,
								i = requestAnimationFrame(t)
						}(),
							o(),
							() => {
								var e;
								m.forEach(e => {
									s && e.removeEventListener("scroll", o),
										a && e.removeEventListener("resize", o)
								}
								),
									null == v || v(),
									null == (e = y) || e.disconnect(),
									y = null,
									f && cancelAnimationFrame(i)
							}
					}(F, U.current, eX, {
						ancestorResize: !0,
						elementResize: !0,
						layoutShift: !0
					}));
					let f = e => {
						"Escape" === e.key && ej(!1)
					}
						;
					e$.escape && window.addEventListener("keydown", f),
						e$.clickOutsideAnchor && window.addEventListener("click", eF);
					let p = []
						, m = e => {
							ea && (null == e ? void 0 : e.target) === F || eW(e)
						}
						, v = e => {
							ea && (null == e ? void 0 : e.target) === F && eB()
						}
						, h = ["mouseenter", "mouseleave", "focus", "blur"]
						, y = ["click", "dblclick", "mousedown", "mouseup"];
					Object.entries(eN).forEach(([e, t]) => {
						t && (h.includes(e) ? p.push({
							event: e,
							listener: eq
						}) : y.includes(e) && p.push({
							event: e,
							listener: m
						}))
					}
					),
						Object.entries(eD).forEach(([e, t]) => {
							t && (h.includes(e) ? p.push({
								event: e,
								listener: eK
							}) : y.includes(e) && p.push({
								event: e,
								listener: v
							}))
						}
						),
						b && p.push({
							event: "pointermove",
							listener: ez
						});
					let w = () => {
						eR.current = !0
					}
						, g = () => {
							eR.current = !1,
								eB()
						}
						;
					return x && !eC && (null === (e = U.current) || void 0 === e || e.addEventListener("mouseenter", w),
						null === (t = U.current) || void 0 === t || t.addEventListener("mouseleave", g)),
						p.forEach(({ event: e, listener: t }) => {
							o.forEach(o => {
								var n;
								null === (n = o.current) || void 0 === n || n.addEventListener(e, t)
							}
							)
						}
						),
						() => {
							var e, t;
							e$.scroll && (window.removeEventListener("scroll", i),
								null == s || s.removeEventListener("scroll", i),
								null == u || u.removeEventListener("scroll", i)),
								e$.resize ? window.removeEventListener("resize", i) : null == d || d(),
								e$.clickOutsideAnchor && window.removeEventListener("click", eF),
								e$.escape && window.removeEventListener("keydown", f),
								x && !eC && (null === (e = U.current) || void 0 === e || e.removeEventListener("mouseenter", w),
									null === (t = U.current) || void 0 === t || t.removeEventListener("mouseleave", g)),
								p.forEach(({ event: e, listener: t }) => {
									o.forEach(o => {
										var n;
										null === (n = o.current) || void 0 === n || n.removeEventListener(e, t)
									}
									)
								}
								)
						}
				}
					, [F, eX, ef, eS, eA, A, k, L, eL]),
				(0,
					n.useEffect)(() => {
						var e, o;
						let n = null !== (o = null !== (e = null == eb ? void 0 : eb.anchorSelect) && void 0 !== e ? e : u) && void 0 !== o ? o : "";
						!n && t && (n = `[data-tooltip-id='${t}']`);
						let l = new MutationObserver(e => {
							let o = []
								, l = [];
							e.forEach(e => {
								if ("attributes" === e.type && "data-tooltip-id" === e.attributeName && (e.target.getAttribute("data-tooltip-id") === t ? o.push(e.target) : e.oldValue === t && l.push(e.target)),
									"childList" === e.type) {
									if (F) {
										let t = [...e.removedNodes].filter(e => 1 === e.nodeType);
										if (n)
											try {
												l.push(...t.filter(e => e.matches(n))),
													l.push(...t.flatMap(e => [...e.querySelectorAll(n)]))
											} catch (e) { }
										t.some(e => {
											var t;
											return !!(null === (t = null == e ? void 0 : e.contains) || void 0 === t ? void 0 : t.call(e, F)) && (ev(!1),
												ej(!1),
												V(null),
												Q.current && clearTimeout(Q.current),
												ee.current && clearTimeout(ee.current),
												!0)
										}
										)
									}
									if (n)
										try {
											let t = [...e.addedNodes].filter(e => 1 === e.nodeType);
											o.push(...t.filter(e => e.matches(n))),
												o.push(...t.flatMap(e => [...e.querySelectorAll(n)]))
										} catch (e) { }
								}
							}
							),
								(o.length || l.length) && eO(e => [...e.filter(e => !l.includes(e)), ...o])
						}
						);
						return l.observe(document.body, {
							childList: !0,
							subtree: !0,
							attributes: !0,
							attributeFilter: ["data-tooltip-id"],
							attributeOldValue: !0
						}),
							() => {
								l.disconnect()
							}
					}
						, [t, u, null == eb ? void 0 : eb.anchorSelect, F]),
				(0,
					n.useEffect)(() => {
						eX()
					}
						, [eX]),
				(0,
					n.useEffect)(() => {
						if (!(null == H ? void 0 : H.current))
							return () => null;
						let e = new ResizeObserver(() => {
							setTimeout(() => eX())
						}
						);
						return e.observe(H.current),
							() => {
								e.disconnect()
							}
					}
						, [I, null == H ? void 0 : H.current]),
				(0,
					n.useEffect)(() => {
						var e;
						let t = document.querySelector(`[id='${a}']`)
							, o = [...eA, t];
						F && o.includes(F) || V(null !== (e = eA[0]) && void 0 !== e ? e : t)
					}
						, [a, eA, F]),
				(0,
					n.useEffect)(() => (B && ej(!0),
						() => {
							Q.current && clearTimeout(Q.current),
								ee.current && clearTimeout(ee.current)
						}
					), []),
				(0,
					n.useEffect)(() => {
						var e;
						let o = null !== (e = null == eb ? void 0 : eb.anchorSelect) && void 0 !== e ? e : u;
						if (!o && t && (o = `[data-tooltip-id='${t}']`),
							o)
							try {
								let e = Array.from(document.querySelectorAll(o));
								eO(e)
							} catch (e) {
								eO([])
							}
					}
						, [t, u, null == eb ? void 0 : eb.anchorSelect]);
			let eY = null !== (G = null == eb ? void 0 : eb.content) && void 0 !== G ? G : I
				, eZ = ea && Object.keys(el).length > 0;
			return (0,
				n.useImperativeHandle)(e, () => ({
					open: e => {
						if (null == e ? void 0 : e.anchorSelect)
							try {
								document.querySelector(e.anchorSelect)
							} catch (t) {
								return void console.warn(`[react-tooltip] "${e.anchorSelect}" is not a valid CSS selector`)
							}
						e_(null != e ? e : null),
							(null == e ? void 0 : e.delay) ? eI(e.delay) : ej(!0)
					}
					,
					close: e => {
						(null == e ? void 0 : e.delay) ? eH(e.delay) : ej(!1)
					}
					,
					activeAnchor: F,
					place: eo,
					isOpen: !!(ef && !_ && eY && eZ)
				})),
				ef && !_ && eY ? n.createElement(y, {
					id: t,
					role: Z,
					className: ei("react-tooltip", ew.tooltip, eg.tooltip, eg[s], o, `react-tooltip__place-${eo}`, ew[eZ ? "show" : "closing"], eZ ? "react-tooltip__show" : "react-tooltip__closing", "fixed" === v && ew.fixed, x && ew.clickable),
					onTransitionEnd: e => {
						et.current && clearTimeout(et.current),
							ea || "opacity" !== e.propertyName || (ev(!1),
								e_(null),
								null == j || j())
					}
					,
					style: {
						...N,
						...el,
						opacity: void 0 !== K && eZ ? K : void 0
					},
					ref: U
				}, eY, n.createElement(y, {
					className: ei("react-tooltip-arrow", ew.arrow, eg.arrow, i, E && ew.noArrow),
					style: {
						...ec,
						background: Y ? `linear-gradient(to right bottom, transparent 50%, ${Y} 50%)` : void 0
					},
					ref: J
				})) : null
		}
			, e_ = ({ content: e }) => n.createElement("span", {
				dangerouslySetInnerHTML: {
					__html: e
				}
			})
			, eE = (e, t) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(e, t)
			, ex = n.forwardRef(({ id: e, anchorId: t, anchorSelect: o, content: l, html: r, render: i, className: c, classNameArrow: s, variant: a = "dark", place: u = "top", offset: d = 10, wrapper: f = "div", children: p = null, events: m = ["hover"], openOnClick: v = !1, positionStrategy: h = "absolute", middlewares: y, delayShow: w = 0, delayHide: g = 0, float: b = !1, hidden: _ = !1, noArrow: E = !1, clickable: x = !1, closeOnEsc: S = !1, closeOnScroll: T = !1, closeOnResize: R = !1, openEvents: A, closeEvents: O, globalCloseEvents: k, imperativeModeOnly: L = !1, style: C, position: N, isOpen: D, defaultIsOpen: $ = !1, disableStyleInjection: j = !1, border: I, opacity: H, arrowColor: W, setIsOpen: B, afterShow: M, afterHide: z, role: F = "tooltip" }, P) => {
				let [V, q] = (0,
					n.useState)(l)
					, [K, X] = (0,
						n.useState)(r)
					, [Y, Z] = (0,
						n.useState)(u)
					, [G, U] = (0,
						n.useState)(a)
					, [J, Q] = (0,
						n.useState)(d)
					, [ee, et] = (0,
						n.useState)(w)
					, [eo, en] = (0,
						n.useState)(g)
					, [el, er] = (0,
						n.useState)(b)
					, [ec, es] = (0,
						n.useState)(_)
					, [ea, eu] = (0,
						n.useState)(f)
					, [ed, ef] = (0,
						n.useState)(m)
					, [em, ev] = (0,
						n.useState)(h)
					, [eh, ey] = (0,
						n.useState)(null)
					, [ew, eg] = (0,
						n.useState)(null)
					, ex = (0,
						n.useRef)(j)
					, { anchorRefs: eS, activeAnchor: eT } = ep(e)
					, eR = e => null == e ? void 0 : e.getAttributeNames().reduce((t, o) => {
						var n;
						return o.startsWith("data-tooltip-") && (t[o.replace(/^data-tooltip-/, "")] = null !== (n = null == e ? void 0 : e.getAttribute(o)) && void 0 !== n ? n : null),
							t
					}
						, {})
					, eA = e => {
						let t = {
							place: e => {
								Z(null != e ? e : u)
							}
							,
							content: e => {
								q(null != e ? e : l)
							}
							,
							html: e => {
								X(null != e ? e : r)
							}
							,
							variant: e => {
								U(null != e ? e : a)
							}
							,
							offset: e => {
								Q(null === e ? d : Number(e))
							}
							,
							wrapper: e => {
								eu(null != e ? e : f)
							}
							,
							events: e => {
								let t = null == e ? void 0 : e.split(" ");
								ef(null != t ? t : m)
							}
							,
							"position-strategy": e => {
								ev(null != e ? e : h)
							}
							,
							"delay-show": e => {
								et(null === e ? w : Number(e))
							}
							,
							"delay-hide": e => {
								en(null === e ? g : Number(e))
							}
							,
							float: e => {
								er(null === e ? b : "true" === e)
							}
							,
							hidden: e => {
								es(null === e ? _ : "true" === e)
							}
							,
							"class-name": e => {
								ey(e)
							}
						};
						Object.values(t).forEach(e => e(null)),
							Object.entries(e).forEach(([e, o]) => {
								var n;
								null === (n = t[e]) || void 0 === n || n.call(t, o)
							}
							)
					}
					;
				(0,
					n.useEffect)(() => {
						q(l)
					}
						, [l]),
					(0,
						n.useEffect)(() => {
							X(r)
						}
							, [r]),
					(0,
						n.useEffect)(() => {
							Z(u)
						}
							, [u]),
					(0,
						n.useEffect)(() => {
							U(a)
						}
							, [a]),
					(0,
						n.useEffect)(() => {
							Q(d)
						}
							, [d]),
					(0,
						n.useEffect)(() => {
							et(w)
						}
							, [w]),
					(0,
						n.useEffect)(() => {
							en(g)
						}
							, [g]),
					(0,
						n.useEffect)(() => {
							er(b)
						}
							, [b]),
					(0,
						n.useEffect)(() => {
							es(_)
						}
							, [_]),
					(0,
						n.useEffect)(() => {
							ev(h)
						}
							, [h]),
					(0,
						n.useEffect)(() => {
							ex.current !== j && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")
						}
							, [j]),
					(0,
						n.useEffect)(() => {
							"undefined" != typeof window && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", {
								detail: {
									disableCore: "core" === j,
									disableBase: j
								}
							}))
						}
							, []),
					(0,
						n.useEffect)(() => {
							var n;
							let l = new Set(eS)
								, r = o;
							if (!r && e && (r = `[data-tooltip-id='${e}']`),
								r)
								try {
									document.querySelectorAll(r).forEach(e => {
										l.add({
											current: e
										})
									}
									)
								} catch (e) {
									console.warn(`[react-tooltip] "${r}" is not a valid CSS selector`)
								}
							let i = document.querySelector(`[id='${t}']`);
							if (i && l.add({
								current: i
							}),
								!l.size)
								return () => null;
							let c = null !== (n = null != ew ? ew : i) && void 0 !== n ? n : eT.current
								, s = new MutationObserver(e => {
									e.forEach(e => {
										var t;
										c && "attributes" === e.type && (null === (t = e.attributeName) || void 0 === t ? void 0 : t.startsWith("data-tooltip-")) && eA(eR(c))
									}
									)
								}
								);
							return c && (eA(eR(c)),
								s.observe(c, {
									attributes: !0,
									childList: !1,
									subtree: !1
								})),
								() => {
									s.disconnect()
								}
						}
							, [eS, eT, ew, t, o]),
					(0,
						n.useEffect)(() => {
							(null == C ? void 0 : C.border) && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),
								I && !eE("border", `${I}`) && console.warn(`[react-tooltip] "${I}" is not a valid \`border\`.`),
								(null == C ? void 0 : C.opacity) && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),
								H && !eE("opacity", `${H}`) && console.warn(`[react-tooltip] "${H}" is not a valid \`opacity\`.`)
						}
							, []);
				let eO = p
					, ek = (0,
						n.useRef)(null);
				if (i) {
					let e = i({
						content: null != V ? V : null,
						activeAnchor: ew
					});
					eO = e ? n.createElement("div", {
						ref: ek,
						className: "react-tooltip-content-wrapper"
					}, e) : null
				} else
					V && (eO = V);
				K && (eO = n.createElement(e_, {
					content: K
				}));
				let eL = {
					forwardRef: P,
					id: e,
					anchorId: t,
					anchorSelect: o,
					className: ei(c, eh),
					classNameArrow: s,
					content: eO,
					contentWrapperRef: ek,
					place: Y,
					variant: G,
					offset: J,
					wrapper: ea,
					events: ed,
					openOnClick: v,
					positionStrategy: em,
					middlewares: y,
					delayShow: ee,
					delayHide: eo,
					float: el,
					hidden: ec,
					noArrow: E,
					clickable: x,
					closeOnEsc: S,
					closeOnScroll: T,
					closeOnResize: R,
					openEvents: A,
					closeEvents: O,
					globalCloseEvents: k,
					imperativeModeOnly: L,
					style: C,
					position: N,
					isOpen: D,
					defaultIsOpen: $,
					border: I,
					opacity: H,
					arrowColor: W,
					setIsOpen: B,
					afterShow: M,
					afterHide: z,
					activeAnchor: ew,
					setActiveAnchor: e => eg(e),
					role: F
				};
				return n.createElement(eb, {
					...eL
				})
			}
			);
		"undefined" != typeof window && window.addEventListener("react-tooltip-inject-styles", e => {
			e.detail.disableCore || ea({
				css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",
				type: "core"
			}),
				e.detail.disableBase || ea({
					css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,
					type: "base"
				})
		}
		)
	}
}]);
