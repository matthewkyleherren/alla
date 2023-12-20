(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [512],
  {
    4319: function (e, t) {
      !(function (e) {
        "use strict";
        /*!
         * EasePack 3.12.2
         * https://greensock.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var t,
          r,
          n = function () {
            return (
              t ||
              ("undefined" != typeof window &&
                (t = window.gsap) &&
                t.registerPlugin &&
                t)
            );
          },
          s = function (e, t) {
            return !!(void 0 === e ? t : e && !~(e + "").indexOf("false"));
          },
          l = function (e) {
            if ((t = e || n())) {
              r = t.registerEase;
              var s,
                l = t.parseEase(),
                i = function (e) {
                  return function (t) {
                    var r = 0.5 + t / 2;
                    e.config = function (t) {
                      return e(2 * (1 - t) * t * r + t * t);
                    };
                  };
                };
              for (s in l) l[s].config || i(l[s]);
              for (s in (r("slow", u), r("expoScale", d), r("rough", f), h))
                "version" !== s && t.core.globals(s, h[s]);
            }
          },
          i = function (e, t, r) {
            var n =
                (e = Math.min(1, e || 0.7)) < 1 ? (t || 0 === t ? t : 0.7) : 0,
              l = (1 - e) / 2,
              i = l + e,
              a = s(r);
            return function (e) {
              var t = e + (0.5 - e) * n;
              return e < l
                ? a
                  ? 1 - (e = 1 - e / l) * e
                  : t - (e = 1 - e / l) * e * e * e * t
                : e > i
                ? a
                  ? 1 === e
                    ? 0
                    : 1 - (e = (e - i) / l) * e
                  : t + (e - t) * (e = (e - i) / l) * e * e * e
                : a
                ? 1
                : t;
            };
          },
          a = function (e, r, n) {
            var s = Math.log(r / e),
              l = r - e;
            return (
              n && (n = t.parseEase(n)),
              function (t) {
                return (e * Math.exp(s * (n ? n(t) : t)) - e) / l;
              }
            );
          },
          o = function (e, t, r) {
            (this.t = e),
              (this.v = t),
              r &&
                ((this.next = r),
                (r.prev = this),
                (this.c = r.v - t),
                (this.gap = r.t - e));
          },
          c = function (e) {
            "object" != typeof e && (e = { points: +e || 20 });
            for (
              var r,
                n,
                l,
                i,
                a,
                c,
                u,
                d = e.taper || "none",
                f = [],
                h = 0,
                p = 0 | (+e.points || 20),
                m = p,
                x = s(e.randomize, !0),
                w = s(e.clamp),
                v = t ? t.parseEase(e.template) : 0,
                g = 0.4 * (+e.strength || 1);
              --m > -1;

            )
              (r = x ? Math.random() : (1 / p) * m),
                (n = v ? v(r) : r),
                (l =
                  "none" === d
                    ? g
                    : "out" === d
                    ? (i = 1 - r) * i * g
                    : "in" === d
                    ? r * r * g
                    : r < 0.5
                    ? (i = 2 * r) * i * 0.5 * g
                    : (i = (1 - r) * 2) * i * 0.5 * g),
                x
                  ? (n += Math.random() * l - 0.5 * l)
                  : m % 2
                  ? (n += 0.5 * l)
                  : (n -= 0.5 * l),
                w && (n > 1 ? (n = 1) : n < 0 && (n = 0)),
                (f[h++] = { x: r, y: n });
            for (
              f.sort(function (e, t) {
                return e.x - t.x;
              }),
                c = new o(1, 1, null),
                m = p;
              m--;

            )
              (a = f[m]), (c = new o(a.x, a.y, c));
            return (
              (u = new o(0, 0, c.t ? c : c.next)),
              function (e) {
                var t = u;
                if (e > t.t) {
                  for (; t.next && e >= t.t; ) t = t.next;
                  t = t.prev;
                } else for (; t.prev && e <= t.t; ) t = t.prev;
                return (u = t), t.v + ((e - t.t) / t.gap) * t.c;
              }
            );
          },
          u = i(0.7);
        (u.ease = u), (u.config = i);
        var d = a(1, 2);
        d.config = a;
        var f = c();
        (f.ease = f), (f.config = c);
        var h = { SlowMo: u, RoughEase: f, ExpoScaleEase: d };
        for (var p in h) (h[p].register = l), (h[p].version = "3.12.2");
        n() && t.registerPlugin(u),
          (e.EasePack = h),
          (e.ExpoScaleEase = d),
          (e.RoughEase = f),
          (e.SlowMo = u),
          (e.default = h),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t);
    },
    7771: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var n = r(5893),
        s = r(7294),
        l = r(6038),
        i = class {
          populateSpans() {
            this.spans.push(this.firstSpan);
            let e = this.firstSpan.innerHTML,
              t = this.firstSpan.offsetWidth,
              r = this.titleWrapper.offsetWidth,
              n = Math.ceil(r / t);
            for (let t = 0; t < n; t++) {
              let t = document.createElement("span");
              (t.innerHTML = e),
                t.classList.add("clone", "px-[0.5rem]"),
                this.spans.push(t),
                this.firstSpan.parentElement.appendChild(t);
            }
          }
          start() {
            (this.title.style.willChange = "transform"),
              this.populateSpans(),
              this.getDistanceToBrowse(),
              this.initAnimation();
          }
          resize() {
            this.animation && this.animation.kill(),
              (this.animation = null),
              l.p8.set(this.title, { x: 0 }),
              this.removeClones(),
              this.start();
          }
          removeClones() {
            this.spans.forEach(
              (e) => e.classList.contains("clone") && e.remove()
            ),
              (this.spans = []);
          }
          getDistanceToBrowse() {
            this.title.style.display = "initial";
            let e = 100 / this.spans.length,
              t = this.title.offsetWidth;
            (this.title.style.display = "block"),
              (this.distance = (t * e) / 100),
              (this.duration = this.distance / this.speed);
          }
          initAnimation() {
            (this.animation = l.p8.timeline({
              onComplete: () => this.animation.play(0),
            })),
              this.animation.to(this.title, {
                x: -this.distance,
                duration: this.duration,
                ease: "none",
              }),
              this.animation.set(this.title, { x: 0 });
          }
          constructor({ titleWrapper: e, title: t, firstSpan: r, speed: n }) {
            (this.titleWrapper = e),
              (this.title = t),
              (this.firstSpan = r),
              (this.speed = n),
              (this.spans = []),
              (this.duration = 0),
              (this.distance = 0),
              (this.animation = null);
          }
        },
        a = (e) => {
          let { text: t, windowWidth: r } = e,
            [l, a] = (0, s.useState)(!1),
            o = (0, s.useRef)(!1),
            c = (0, s.useRef)(!1),
            u = (0, s.useRef)(!1),
            d = (0, s.useRef)(!1);
          return (
            (0, s.useEffect)(() => {
              document.fonts.ready.then(() => {
                a(!0);
              }),
                o.current
                  ? o.current.resize()
                  : ((o.current = new i({
                      titleWrapper: c.current,
                      title: u.current,
                      firstSpan: d.current,
                      speed: 65,
                    })),
                    o.current.start());
            }, [l, r, t]),
            (0, n.jsx)("div", {
              ref: c,
              className: "infinite-text w-full overflow-hidden",
              children: (0, n.jsx)("div", {
                ref: u,
                className: "whitespace-nowrap body-mono-12 text-white",
                children: (0, n.jsx)("span", {
                  ref: d,
                  className: "inline px-[0.5rem]",
                  children: t,
                }),
              }),
            })
          );
        },
        o = r(9362),
        c = r(8266),
        u = r(8430);
      let d = (0, s.forwardRef)((e, t) => {
        let { text: r, showBlogFromParent: i, addScroll: d = !1 } = e,
          [f, h] = (0, s.useState)(!1),
          p = (0, s.useRef)(!0),
          m = (0, s.useRef)(!0),
          x = (0, s.useRef)(0),
          w = (0, s.useRef)(null),
          v = (0, s.useRef)(!1),
          g = (0, s.useRef)(null),
          j = (0, s.useRef)({ x: 0, y: 0 }),
          y = (0, s.useRef)({ x: 0, y: 0 }),
          b = (0, s.useRef)(!1),
          C = (0, s.useRef)(!1),
          R = (0, s.useRef)(1),
          N = (0, s.useRef)(null),
          E = (0, s.useRef)(),
          L = (0, s.useRef)(0),
          k = (0, s.useRef)(0),
          _ = (0, s.useRef)(!1),
          S = (0, o.a)("(max-width: 1024px)"),
          M = (0, c.o)((e) => e.windowWidth);
        (0, s.useImperativeHandle)(t, () => ({
          ref: w.current,
          addScrollValue: z,
        }));
        let Z = [
          "M82.5482 82.1766C61.8974 101.682 5.00837 86.2123 0.520907 56.8302C-2.6135 36.3074 12.7095 0.968449 52.346 0.870053C82.734 0.794616 101.441 64.331 82.5482 82.1766Z",
          "M89.3968 66.851C83.1811 90.6927 6.68285 102.054 1.91761 71.5306C-1.41082 50.2108 -3.37542 0.108923 38.7297 0.00439838C71.0103 -0.0757369 95.6125 43.0093 89.3968 66.851Z",
          "M90.5887 37.5486C79.4974 61.3619 54.2093 99.0929 26.7038 88.7037C4.52198 80.3253 -16.3638 0.603904 22.7124 0.506899C52.6709 0.432529 94.5818 14.1764 90.5887 37.5486Z",
          "M86 79C72.5 99.5 23 93 6.99999 75C-8.753 57.2778 6.42374 0.597002 45.5 0.499997C75.4584 0.425626 101.835 54.9535 86 79Z",
        ];
        (0, s.useEffect)(() => {
          N.current =
            Date.now().toString(36) + Math.random().toString(36).substring(2);
        }, []),
          (0, s.useEffect)(() => {
            if (
              (document.fonts.ready.then(() => {
                h(!0);
              }),
              S)
            )
              g.current.style.transform = "translate(0, 0)";
            else {
              O();
              let e = w.current.getBoundingClientRect();
              (x.current = e.top + window.scrollY),
                window.addEventListener("introduction-complete", F),
                window.addEventListener("mousemove", B),
                d && window.addEventListener("scroll", P),
                E.current || (E.current = u.Z.add(H, 0)),
                W();
            }
            return () => {
              window.removeEventListener("introduction-complete", F),
                window.removeEventListener("mousemove", B),
                d && window.removeEventListener("scroll", P),
                E.current && E.current(),
                (E.current = null);
            };
          }, [M, f, S]),
          (0, s.useEffect)(() => {
            S ||
              (i
                ? l.p8.to(g.current, {
                    alpha: 1,
                    duration: 0.3,
                    ease: "power2.out",
                  })
                : l.p8.to(g.current, {
                    alpha: 0,
                    duration: 0.3,
                    ease: "power2.out",
                  }));
          }, [i]),
          (0, s.useEffect)(() => {
            T();
          }, [M, S]);
        let F = () => {
            S && returno,
              M < 1024 &&
                setTimeout(() => {
                  W();
                }, 1e3);
          },
          T = () => {
            if (S) {
              let e = g.current.getBoundingClientRect().height;
              (R.current = (e - 4) / 90),
                l.p8.set(b.current, { scale: R.current });
            } else
              A(),
                W(),
                M < 1024 &&
                  ((y.current = { x: 0, y: 0 }), (j.current = y.current));
          },
          z = (e) => {
            if (!p.current || M < 1024 || !_.current) return;
            let t = L.current;
            (L.current = window.scrollY - e),
              m.current || ((k.current += -(t - L.current)), B(_.current));
          },
          P = () => {
            if (!p.current || M < 1024) return;
            let e = L.current;
            (L.current = window.scrollY),
              m.current ||
                B({
                  clientX: y.current.x,
                  clientY:
                    y.current.y + x.current - (e - L.current) - window.scrollY,
                });
          },
          B = (e) => {
            p.current &&
              !(M < 1024) &&
              ((y.current = {
                x: e.clientX,
                y: d
                  ? e.clientY + window.scrollY - x.current
                  : k.current + e.clientY,
              }),
              m.current && ((j.current = y.current), (m.current = !1)),
              (_.current = e));
          },
          H = () => {
            p.current &&
              ((j.current.x += (y.current.x - j.current.x) * 0.13),
              (j.current.y += (y.current.y - j.current.y) * 0.13),
              g.current &&
                !S &&
                (g.current.style.transform = "translate3d("
                  .concat(j.current.x.toFixed(0), "px, ")
                  .concat(j.current.y, "px, 0)")));
          },
          W = () => {
            S ||
              C.current ||
              ((C.current = !0),
              l.p8.to(b.current, {
                scale: R.current,
                delay: 0.1,
                duration: 0.8,
                ease: "power3.inOut",
              }));
          },
          A = () => {
            !S &&
              ((C.current = !1),
              b.current && l.p8.set(b.current, { scale: 0 }));
          },
          O = () => {
            if (S) return;
            v.current && (v.current.kill(), (v.current = null));
            let e = g.current.getBoundingClientRect().height;
            (R.current = (e - 4) / 90),
              l.p8.set(b.current, {
                scale: 0,
                transformOrigin: "center",
                x: (e - 90) / 2,
                y: (e - 90) / 2,
              }),
              (v.current = l.p8.timeline({ repeat: -1, yoyo: !0 }));
            for (let e = 0; e < Z.length; e++)
              v.current.to(b.current, {
                attr: { d: Z[e] },
                duration: 3,
                ease: "none",
              });
          };
        return (0, n.jsx)(n.Fragment, {
          children: S
            ? (0, n.jsx)("div", {
                ref: w,
                className:
                  "cursor relative w-[73px] h-[73px] md:w-[100px] md:h-[100px] lg:w-[14rem] lg:h-[14rem] xl:w-[8rem] xl:h-[8rem] overflow-hidden z-2",
                children: (0, n.jsxs)("div", {
                  ref: g,
                  className: "svg-wrapper w-full h-full bg-orange",
                  style: { clipPath: "url(#".concat(N.current, ")") },
                  children: [
                    (0, n.jsx)("svg", {
                      className: "w-full h-full",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, n.jsx)("defs", {
                        children: (0, n.jsx)("clipPath", {
                          id: N.current,
                          children: (0, n.jsx)("path", {
                            ref: b,
                            d: "M86 79C72.5 99.5 23 93 6.99999 75C-8.753 57.2778 6.42374 0.597002 45.5 0.499997C75.4584 0.425626 101.835 54.9535 86 79Z",
                          }),
                        }),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "absolute w-full left-0 top-1/2 -translate-y-1/2",
                      children: (0, n.jsx)(a, { text: r, windowWidth: M }),
                    }),
                  ],
                }),
              })
            : (0, n.jsx)("div", {
                ref: w,
                className:
                  "cursor absolute left-0 top-0 w-full h-full overflow-hidden",
                style: { clipPath: "inset(0 0 0 0)" },
                children: (0, n.jsx)("div", {
                  ref: g,
                  className:
                    "absolute right-container lg:right-[initial] bottom-[13rem] lg:bottom-[initial] xl:fixed xl:top-0 xl:left-0 z-5 w-[80px] h-[80px] md:w-[140px] md:h-[140px] lg:w-[8rem] lg:h-[8rem] pointer-events-none",
                  children: (0, n.jsxs)("div", {
                    className: "w-full h-full bg-orange overflow-hidden",
                    style: { clipPath: "url(#".concat(N.current, ")") },
                    children: [
                      (0, n.jsx)("svg", {
                        className: "absolute",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("defs", {
                          children: (0, n.jsx)("clipPath", {
                            id: N.current,
                            children: (0, n.jsx)("path", {
                              ref: b,
                              d: "M86 79C72.5 99.5 23 93 6.99999 75C-8.753 57.2778 6.42374 0.597002 45.5 0.499997C75.4584 0.425626 101.835 54.9535 86 79Z",
                            }),
                          }),
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "absolute w-full left-0 top-1/2 -translate-y-1/2",
                        children: (0, n.jsx)(a, { text: r, windowWidth: M }),
                      }),
                    ],
                  }),
                }),
              }),
        });
      });
      d.displayName = "Cursor";
      var f = d;
    },
    6009: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var n = r(5893),
        s = r(8266),
        l = r(7294),
        i = r(6038),
        a = r(1831),
        o = () =>
          (0, n.jsxs)("svg", {
            width: "286",
            height: "286",
            viewBox: "0 0 286 286",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsxs)("g", {
                clipPath: "url(#clip0_4489_62323)",
                children: [
                  (0, n.jsxs)("mask", {
                    id: "mask0_4489_62323",
                    style: { maskType: "alpha" },
                    maskUnits: "userSpaceOnUse",
                    x: "18",
                    y: "-49",
                    width: "271",
                    height: "203",
                    children: [
                      (0, n.jsx)("rect", {
                        x: "224",
                        y: "14.5488",
                        width: "194.476",
                        height: "73.7032",
                        transform: "rotate(149.564 224 14.5488)",
                        fill: "url(#paint0_linear_4489_62323)",
                      }),
                      (0, n.jsx)("rect", {
                        x: "167",
                        y: "-19",
                        width: "122",
                        height: "173",
                        fill: "#D9D9D9",
                      }),
                    ],
                  }),
                  (0, n.jsx)("g", {
                    mask: "url(#mask0_4489_62323)",
                    children: (0, n.jsx)("path", {
                      opacity: "0.15",
                      d: "M20.6185 72.2329C36.1479 45.2009 60.1697 24.0541 88.9524 12.0774C117.735 0.100734 149.667 -2.0354 179.789 6.00087C209.91 14.0371 236.535 31.7959 255.526 56.5185C274.518 81.2412 284.813 111.544 284.813 142.719",
                      stroke: "#575349",
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)("defs", {
                children: [
                  (0, n.jsxs)("linearGradient", {
                    id: "paint0_linear_4489_62323",
                    x1: "418.476",
                    y1: "88.252",
                    x2: "224",
                    y2: "88.252",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, n.jsx)("stop", {
                        stopColor: "#F2EFE9",
                        stopOpacity: "0",
                      }),
                      (0, n.jsx)("stop", { offset: "1", stopColor: "#F2EFE9" }),
                    ],
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip0_4489_62323",
                    children: (0, n.jsx)("rect", {
                      width: "286",
                      height: "286",
                      fill: "white",
                    }),
                  }),
                ],
              }),
            ],
          }),
        c = r(4319),
        u = r(6546),
        d = r(4508),
        f = (e) => {
          let {
              index: t,
              slicesLength: r = 1,
              simple: f = !1,
              children: h,
            } = e,
            p = (0, l.useRef)(),
            m = (0, l.useRef)(),
            x = (0, l.useRef)(),
            w = (0, l.useRef)(),
            v = (0, l.useRef)(),
            g = (0, l.useRef)(),
            j = (0, l.useRef)(),
            y = (0, l.useRef)(),
            b = (0, l.useRef)(),
            C = (0, l.useRef)(),
            R = (0, l.useRef)(0),
            N = (0, d.LZ)(),
            E = (0, s.o)((e) => e.startTransition),
            L = (0, s.o)((e) => e.setIsAppear),
            k = (0, s.o)((e) => e.isLoaded),
            _ = (0, s.o)((e) => e.isFirstLoaded),
            S = () => {
              y.current &&
                i.p8.set(y.current, {
                  x: window.innerWidth / 2 - 42 - 5,
                  y: window.innerHeight / 2 - 40.5,
                  transformOrigin: "center",
                  rotate: 180,
                  scale: 0,
                });
            },
            M = function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = document.querySelector(".fade");
              t.classList.remove("opacity-0");
              let r = i.p8.timeline({
                delay: e ? 0.5 : 0.2,
                onStart: () => {
                  if (e) {
                    let e = document.querySelector(".loader");
                    e && i.p8.set(e, { autoAlpha: 0 });
                  }
                },
                onComplete: () => {
                  window.dispatchEvent(new CustomEvent("is-appeared")),
                    N && N.start(),
                    u.ScrollTrigger.refresh();
                },
              });
              r.fromTo(
                t,
                { autoAlpha: 1 },
                { autoAlpha: 0, duration: 0.4, ease: "power2.out" },
                0
              ).call(
                () => {
                  L(!0);
                },
                [],
                0
              );
            },
            Z = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              S();
              let t = document.querySelector(".fade"),
                r = document.querySelector(".loader");
              j.current.classList.remove("hidden");
              let n = window.innerWidth / 83,
                s = window.innerHeight / 80,
                l = x.current.querySelectorAll("path"),
                a = i.p8.timeline({
                  delay: 0.1,
                  onStart: () => {
                    i.p8.set([t, r], { autoAlpha: 0 });
                  },
                  onComplete: () => {
                    window.dispatchEvent(new CustomEvent("is-appeared")),
                      N && N.start(),
                      u.ScrollTrigger.refresh(),
                      e &&
                        window.dispatchEvent(
                          new CustomEvent("introduction-complete")
                        ),
                      m.current && (m.current.style.clipPath = null),
                      j.current.classList.add("hidden"),
                      b.current.classList.add("hidden");
                  },
                });
              a.addLabel("start", e ? 0.8 : 0),
                e &&
                  a.fromTo(
                    R,
                    { current: 0 },
                    {
                      current: 100,
                      ease: "linear",
                      duration: 2.3,
                      onUpdate: () => {
                        C.current.innerHTML =
                          R.current < 100
                            ? "0" + Math.round(R.current)
                            : Math.round(R.current);
                      },
                    },
                    0
                  ),
                a
                  .fromTo(
                    x.current,
                    { rotate: 120, autoAlpha: 0, scale: 0.2 },
                    {
                      rotate: 0,
                      scale: 1,
                      autoAlpha: 1,
                      ease: "expo.out",
                      duration: 1.9,
                    },
                    "start"
                  )
                  .fromTo(
                    l,
                    { scale: 0.1 },
                    { scale: 1, ease: "expo.out", duration: 0.95 },
                    "start+=0.12"
                  )
                  .fromTo(
                    w.current,
                    { scale: 0.45, autoAlpha: 0 },
                    {
                      scale: 1,
                      autoAlpha: 1,
                      ease: "power2.out",
                      duration: 1.75,
                    },
                    "start+=0.08"
                  )
                  .fromTo(
                    v.current,
                    { rotate: -100 },
                    { rotate: 350, ease: "slow(0.1, 0.7)", duration: 1.9 },
                    "start+=0.2"
                  )
                  .fromTo(
                    g.current,
                    { rotate: -150 },
                    { rotate: 110, ease: "slow(0.2, 0.6)", duration: 1.7 },
                    "start+=0.3"
                  )
                  .fromTo(
                    y.current,
                    { rotate: 180, scale: 0 },
                    {
                      scale: (n > s ? n : s) + 6,
                      rotate: "+=130",
                      duration: 1.8,
                      ease: "expo.inOut",
                    },
                    "start+=1.2"
                  )
                  .to(
                    [w.current, x.current],
                    { autoAlpha: 0, ease: "power2.out", duration: 0.4 },
                    "<30%"
                  )
                  .call(
                    () => {
                      L(!0);
                    },
                    [],
                    "start+=1.65"
                  );
            };
          return (
            (0, l.useEffect)(() => {
              i.p8.registerPlugin(c.SlowMo),
                _ && b.current && b.current.classList.add("hidden");
            }, []),
            (0, l.useEffect)(() => {
              k && !_ ? (N && N.stop(), p.current ? M(!0) : Z(!0)) : k || S();
            }, [k, _]),
            (0, l.useEffect)(() => {
              if (p.current) {
                M();
                return;
              }
              E && Z();
            }, [E]),
            0 !== t || f
              ? (0, n.jsx)("div", {
                  ref: p,
                  className: "simple-transition-path",
                  children: h,
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                      children: (0, n.jsx)("div", {
                        ref: x,
                        className: "svg-wrapper w-[4.267rem]",
                        children: (0, n.jsxs)("svg", {
                          width: "56",
                          height: "50",
                          viewBox: "0 0 56 50",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, n.jsx)("path", {
								d: "M24.2053 18.8094L12.0537 23.2537C11.8635 23.3231 11.7014 23.4386 11.5876 23.586C11.4737 23.7333 11.413 23.9059 11.413 24.0824V49.9042H0V0H24.2053V18.8094Z",
								fill: "#D7D1C6",
                            }),
							(0, n.jsx)("path", {
								d: "M25.7002 20.2247L32.1673 17.8601V49.9042H13.5269V24.6773L25.6588 20.242L25.7002 20.2247Z",
								fill: "#D7D1C6",
                            }),
                            (0, n.jsx)("path", {
								d: "M49.2149 49.9042H34.2812V17.9375L49.2149 24.171V49.9042Z",
								fill: "#D7D1C6",
                            }),
                            (0, n.jsx)("path", {
                              d: "M53.0471 47.5507H53.5327C53.6902 47.5507 53.8192 47.5307 53.9199 47.4908C54.0205 47.4509 54.0708 47.3551 54.0708 47.2034C54.0708 47.1355 54.0533 47.0816 54.0183 47.0417C53.9833 47.0018 53.9373 46.9718 53.8805 46.9519C53.828 46.9279 53.7667 46.9119 53.6967 46.9039C53.6311 46.896 53.5677 46.892 53.5064 46.892H53.0471V47.5507ZM52.5025 46.5027H53.5393C53.8849 46.5027 54.1495 46.5586 54.3333 46.6704C54.5214 46.7822 54.6154 46.9738 54.6154 47.2453C54.6154 47.3611 54.5957 47.4609 54.5564 47.5447C54.5214 47.6246 54.4711 47.6904 54.4054 47.7423C54.3398 47.7942 54.2633 47.8342 54.1758 47.8621C54.0883 47.89 53.9942 47.908 53.8936 47.916L54.6285 49.0119H54.0577L53.3883 47.94H53.0471V49.0119H52.5025V46.5027ZM51.6297 47.7603C51.6297 48.0158 51.6778 48.2514 51.7741 48.4669C51.8703 48.6825 52.0016 48.8702 52.1678 49.0299C52.334 49.1856 52.5287 49.3073 52.7518 49.3952C52.9793 49.483 53.2221 49.5269 53.4802 49.5269C53.7339 49.5269 53.9723 49.483 54.1955 49.3952C54.4229 49.3073 54.6198 49.1856 54.786 49.0299C54.9523 48.8702 55.0835 48.6825 55.1798 48.4669C55.2804 48.2514 55.3307 48.0158 55.3307 47.7603C55.3307 47.5048 55.2804 47.2712 55.1798 47.0596C55.0835 46.8441 54.9523 46.6584 54.786 46.5027C54.6198 46.347 54.4229 46.2252 54.1955 46.1374C53.9723 46.0496 53.7339 46.0057 53.4802 46.0057C53.2221 46.0057 52.9793 46.0496 52.7518 46.1374C52.5287 46.2252 52.334 46.347 52.1678 46.5027C52.0016 46.6584 51.8703 46.8441 51.7741 47.0596C51.6778 47.2712 51.6297 47.5048 51.6297 47.7603ZM50.9604 47.7603C50.9604 47.421 51.0282 47.1135 51.1638 46.8381C51.3038 46.5626 51.4897 46.329 51.7216 46.1374C51.9534 45.9418 52.2203 45.7921 52.5221 45.6883C52.8284 45.5805 53.1477 45.5266 53.4802 45.5266C53.8127 45.5266 54.1298 45.5805 54.4317 45.6883C54.7379 45.7921 55.007 45.9418 55.2388 46.1374C55.4707 46.329 55.6544 46.5626 55.79 46.8381C55.93 47.1135 56 47.421 56 47.7603C56 48.1036 55.93 48.413 55.79 48.6885C55.6544 48.964 55.4707 49.1995 55.2388 49.3952C55.007 49.5908 54.7379 49.7405 54.4317 49.8443C54.1298 49.9481 53.8127 50 53.4802 50C53.1477 50 52.8284 49.9481 52.5221 49.8443C52.2203 49.7405 51.9534 49.5908 51.7216 49.3952C51.4897 49.1995 51.3038 48.964 51.1638 48.6885C51.0282 48.413 50.9604 48.1036 50.9604 47.7603Z",
                              fill: "#D7D1C6",
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      ref: w,
                      className:
                        "absolute top-1/2 left-1/2 w-[28.4rem] h-[28.4rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "absolute w-full h-full",
                          ref: v,
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                              children: (0, n.jsx)(a.Z, { color: "#A39B8B" }),
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                              children: (0, n.jsx)(o, {}),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "absolute w-full h-full rounded-full",
                          ref: g,
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                              children: (0, n.jsx)(a.Z, { color: "#A39B8B" }),
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                              children: (0, n.jsx)(o, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      ref: b,
                      className:
                        "absolute left-1/2 bottom-[3.5rem] -translate-x-1/2 text-10 leading-[1.8rem] tracking-[0.05rem] font-body-mono",
                      children: [
                        (0, n.jsx)("span", { ref: C, children: "000" }),
                        (0, n.jsx)("span", { children: "/" }),
                        (0, n.jsx)("span", { children: "100" }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      style: {
                        clipPath: "url(#svgPath)",
                        backfaceVisibility: "hidden",
                        transform: "translate3d(0, 0, 0)",
                        zIndex: r - t,
                      },
                      ref: m,
                      className: "transition-path relative",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "absolute top-0 left-0 w-full h-screen pointer-events-none",
                          children: (0, n.jsx)("div", {
                            ref: j,
                            className:
                              "absolute top-0 left-0 w-full h-full hidden z-1",
                            children: (0, n.jsx)("svg", {
                              width: "84",
                              height: "81",
                              className: "w-full h-full",
                              children: (0, n.jsx)("defs", {
                                children: (0, n.jsx)("clipPath", {
                                  id: "svgPath",
                                  children: (0, n.jsx)("path", {
                                    ref: y,
                                    d: "M71.6638 76.6744C50.3357 91.0443 -1.13729 65.4997 0.440132 40.5884C1.710243 19.4787 23.2703 -6.18393 58.4749 2.13813C85.0859 8.42874 91.6761 63.191 71.6638 76.6744Z",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        h,
                      ],
                    }),
                  ],
                })
          );
        };
    },
    9362: function (e, t, r) {
      "use strict";
      r.d(t, {
        a: function () {
          return s;
        },
      });
      var n = r(7294);
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "(max-width: 1024px)",
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          [r, s] = (0, n.useState)(t);
        return (
          (0, n.useEffect)(() => {
            let t = window.matchMedia(e);
            function r() {
              s(t.matches);
            }
            return (
              t.addEventListener("change", r, !1),
              r(),
              () => t.removeEventListener("change", r, !1)
            );
          }, [e]),
          r
        );
      }
    },
    1167: function (e, t, r) {
      "use strict";
      var n = r(5893);
      t.Z = () =>
        (0, n.jsxs)("svg", {
          width: "12",
          height: "12",
          viewBox: "0 0 12 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, n.jsx)("circle", { cx: "6", cy: "6", r: "2", fill: "#FE814B" }),
            (0, n.jsx)("circle", {
              cx: "6",
              cy: "6",
              r: "5",
              stroke: "#FE814B",
              strokeDasharray: "1 1",
            }),
          ],
        });
    },
    4936: function (e, t, r) {
      "use strict";
      var n = r(5893);
      t.Z = (e) =>
        (0, n.jsx)("svg", {
          width: "4",
          height: "5",
          viewBox: "0 0 4 5",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, n.jsx)("path", {
            d: "M0 5V0L4 2.69231L0 5Z",
            fill: e.fill || "#575349",
          }),
        });
    },
    2512: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return R;
          },
        });
      var n = r(5893),
        s = r(6038),
        l = r(6546),
        i = r(7294),
        a = r(7771),
        o = r(26),
        c = r(4508),
        u = r(8266),
        d = r(8430),
        f = r(9010),
        h = r(4936),
        p = (e) => {
          let { fill: t = "#F2EFE9" } = e;
          return (0, n.jsx)("svg", {
            width: "48",
            height: "46",
            viewBox: "0 0 48 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              d: "M39.1332 42.3703C26.6704 50.793 0.0514704 38.5932 0.982129 24.005C1.77076 11.6431 14.3345 -3.39248 34.894 1.46762C50.4349 5.14135 50.8273 34.4672 39.1332 42.3703Z",
              fill: t,
            }),
          });
        },
        m = () =>
          (0, n.jsxs)("svg", {
            width: "5",
            height: "7",
            viewBox: "0 0 5 7",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1 0.501953C1.27614 0.501953 1.5 0.725811 1.5 1.00195L1.5 6.00195C1.5 6.2781 1.27614 6.50195 1 6.50195C0.723857 6.50195 0.5 6.2781 0.5 6.00195L0.5 1.00195C0.5 0.725811 0.723858 0.501953 1 0.501953Z",
                fill: "#575349",
              }),
              (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4 0.501953C4.27614 0.501953 4.5 0.725811 4.5 1.00195L4.5 6.00195C4.5 6.2781 4.27614 6.50195 4 6.50195C3.72386 6.50195 3.5 6.2781 3.5 6.00195L3.5 1.00195C3.5 0.725811 3.72386 0.501953 4 0.501953Z",
                fill: "#575349",
              }),
            ],
          }),
        x = () =>
          (0, n.jsxs)("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 13 13",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("line", {
                x1: "12.5",
                y1: "2.18557e-08",
                x2: "12.5",
                y2: "13",
                stroke: "#F2EFE9",
              }),
              (0, n.jsx)("line", {
                x1: "8.5",
                y1: "6",
                x2: "8.5",
                y2: "13",
                stroke: "#F2EFE9",
              }),
              (0, n.jsx)("line", {
                x1: "4.5",
                y1: "3",
                x2: "4.5",
                y2: "13",
                stroke: "#F2EFE9",
              }),
              (0, n.jsx)("line", {
                x1: "0.5",
                y1: "8",
                x2: "0.5",
                y2: "13",
                stroke: "#F2EFE9",
              }),
            ],
          }),
        w = () =>
          (0, n.jsxs)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", { d: "M8.5 1H13V5.5", stroke: "#F2EFE9" }),
              (0, n.jsx)("path", { d: "M5.5 1H1V5.5", stroke: "#F2EFE9" }),
              (0, n.jsx)("path", { d: "M8.5 13H13V8.5", stroke: "#F2EFE9" }),
              (0, n.jsx)("path", { d: "M5.5 13H1V8.5", stroke: "#F2EFE9" }),
            ],
          }),
        v = r(2099),
        g = r(9362),
        j = (e) => {
          let { loop: t, src: r } = e,
            l = (0, i.useRef)(null),
            a = (0, i.useRef)(null),
            o = (0, i.useRef)(),
            j = (0, i.useRef)(),
            y = (0, i.useRef)(),
            b = (0, i.useRef)(),
            C = (0, i.useRef)(),
            R = (0, i.useRef)(),
            N = (0, i.useRef)(),
            E = (0, i.useRef)(),
            L = (0, i.useRef)(),
            k = (0, i.useRef)(!1),
            _ = (0, i.useRef)(),
            S = (0, i.useRef)(!1),
            M = (0, i.useRef)(),
            Z = (0, i.useRef)(),
            F = (0, i.useRef)(),
            T = (0, i.useRef)(),
            z = (0, i.useRef)(!1),
            P = (0, i.useRef)(!1),
            B = (0, i.useRef)(!1),
            H = (0, i.useRef)(!1),
            W = (0, i.useRef)(!1),
            A = (0, i.useRef)(!1),
            O = (0, i.useRef)(!1),
            q = (0, i.useRef)(!1),
            D = (0, c.LZ)(),
            Y = (0, g.a)("(max-width: 1024px)"),
            V = (0, u.o)((e) => e.isPopupOpen),
            I = (0, u.o)((e) => e.setPopupOpen),
            X = (0, u.o)((e) => e.setHeaderVisible);
          (0, u.o)((e) => e.isAppear), (S.current = V);
          let U = () => {
              S.current
                ? (s.p8.set([B.current, H.current], {
                    width: "calc(".concat(
                      document.documentElement.offsetWidth,
                      "px - 2rem)"
                    ),
                    height: "calc(".concat(window.innerHeight, "px - 2rem)"),
                    x: "1rem",
                    y: "1rem",
                  }),
                  setTimeout(() => {
                    s.p8.set(C.current, {
                      x: -(
                        window.innerWidth / 2 -
                        C.current.offsetWidth / 2 -
                        b.current.getBoundingClientRect().left
                      ),
                      y:
                        window.innerHeight / 2 +
                        C.current.offsetHeight / 2 -
                        (window.innerHeight -
                          b.current.getBoundingClientRect().top -
                          window.scrollY),
                    });
                  }, 0))
                : ((q.current =
                    O.current.getBoundingClientRect().top -
                    z.current.getBoundingClientRect().top +
                    O.current.offsetHeight),
                  s.p8.set(A.current, { y: q.current }));
            },
            G = () => {
              !document.fullscreenElement && a.current && a.current.pause();
            };
          (0, i.useEffect)(
            () => (
              (q.current =
                O.current.getBoundingClientRect().top -
                z.current.getBoundingClientRect().top +
                O.current.offsetHeight),
              s.p8.set(A.current, { y: q.current }),
              K(),
              window.addEventListener("keydown", es),
              window.addEventListener("resize", U),
              a.current.addEventListener("waiting", () => {
                (_.current = !0), j.current.classList.remove("opacity-0");
              }),
              a.current.addEventListener("playing", () => {
                _.current &&
                  ((_.current = !1), j.current.classList.add("opacity-0"));
              }),
              a.current.addEventListener("seeked", () => {
                j.current.classList.add("opacity-0");
              }),
              a.current.addEventListener("seeking", () => {
                j.current.classList.remove("opacity-0");
              }),
              () => {
                window.removeEventListener("resize", U),
                  window.removeEventListener("keydown", es),
                  a.current &&
                    a.current.removeEventListener("fullscreenchange", G);
              }
            ),
            []
          ),
            (0, i.useEffect)(
              () => (
                V
                  ? ((T.current = d.Z.add(ei, 0)),
                    k.current ? er() : ((k.current = !0), J().then(() => er())))
                  : en(),
                () => {
                  V && T.current && T.current();
                }
              ),
              [V]
            );
          let K = () => {
              (F.current = s.p8.timeline({ paused: !0 })),
                F.current.fromTo(
                  L.current,
                  { scaleX: 0 },
                  { scaleX: 1, ease: "linear" }
                );
            },
            J = () =>
              new Promise((e) => {
                (a.current.src = r),
                  a.current.load(),
                  a.current.addEventListener("loadeddata", () => {
                    e();
                  }),
                  a.current.addEventListener("fullscreenchange", G);
              }),
            Q = () => {
              Y || (a.current.paused ? ee() : et());
            },
            $ = () => {
              let e =
                a.current.requestFullscreen ||
                a.current.msRequestFullscreen ||
                a.current.mozRequestFullScreen ||
                a.current.webkitRequestFullscreen;
              e && e.call(a.current);
            },
            ee = () => {
              C.current.classList.add("a"), a.current.play();
            },
            et = () => {
              C.current.classList.remove("a"), a.current.pause();
            },
            er = () => {
              if (Y) {
                $(), a.current.play();
                return;
              }
              D && D.stop(),
                D && D.scrollTo(0, { force: !0 }),
                X(!1),
                (a.current.currentTime = 0),
                l.current.classList.add("a"),
                z.current.classList.remove("group"),
                z.current.classList.add("pointer-events-none"),
                y.current.classList.remove("pointer-events-none"),
                ee(),
                (0, v.RE)(Z.current),
                (M.current = s.p8.timeline({
                  defaults: { ease: "expo.out", duration: 1.2 },
                })),
                M.current.addLabel("start", 0),
                M.current
                  .to(
                    [B.current, H.current],
                    {
                      width: "calc(".concat(
                        document.documentElement.offsetWidth,
                        "px - 2rem)"
                      ),
                      height: "calc(".concat(window.innerHeight, "px - 2rem)"),
                      x: "1rem",
                      y: "1rem",
                      stagger: 0.03,
                    },
                    "start"
                  )
                  .to(
                    P.current,
                    { opacity: 1, ease: "power2.out", duration: 0.9 },
                    "start"
                  )
                  .to(
                    C.current,
                    {
                      x: -(
                        window.innerWidth / 2 -
                        C.current.offsetWidth / 2 -
                        b.current.getBoundingClientRect().left
                      ),
                      y:
                        window.innerHeight / 2 +
                        C.current.offsetHeight / 2 -
                        (window.innerHeight -
                          b.current.getBoundingClientRect().top -
                          window.scrollY),
                      duration: 1.4,
                    },
                    "start"
                  )
                  .to(y.current, { opacity: 1, ease: "power2.out" }, "start")
                  .fromTo(
                    E.current,
                    { scaleX: 0 },
                    { scaleX: 1 },
                    "start+=0.12"
                  )
                  .to(A.current, { y: 0 }, "start+=0.1")
                  .to(
                    a.current,
                    { opacity: 1, ease: "power2.out", duration: 0.4 },
                    0.6
                  );
            },
            en = () => {
              Y ||
                (X(!0),
                D && D.start(),
                l.current.classList.remove("a"),
                z.current.classList.add("group"),
                z.current.classList.remove("pointer-events-none"),
                y.current.classList.add("pointer-events-none"),
                et(),
                (0, v.RE)(M.current),
                (Z.current = s.p8.timeline({
                  defaults: { ease: "expo.out", duration: 0.9 },
                })),
                Z.current
                  .to(
                    [B.current, H.current],
                    {
                      width: "100%",
                      height: "100%",
                      x: "0",
                      y: "0",
                      stagger: -0.03,
                    },
                    0
                  )
                  .to(
                    P.current,
                    { opacity: 0, ease: "power2.out", duration: 0.8 },
                    0
                  )
                  .to(C.current, { x: 0, y: 0 }, 0)
                  .to(
                    y.current,
                    { opacity: 0, ease: "power2.out", duration: 0.3 },
                    0
                  )
                  .to(E.current, { scaleX: 0 }, 0)
                  .to(A.current, { y: q.current }, 0)
                  .to(
                    a.current,
                    { opacity: 0, ease: "power2.out", duration: 0.4 },
                    0
                  ));
            },
            es = (e) => {
              "Escape" === e.key && S.current && I(!1);
            },
            el = () => {
              S.current && !Y && Q();
            },
            ei = () => {
              a.current &&
                !a.current.paused &&
                F.current.progress(a.current.currentTime / a.current.duration);
            };
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                ref: z,
                onClick: () => {
                  Y
                    ? k.current
                      ? er()
                      : ((k.current = !0), J().then(() => er()))
                    : V || I(!0);
                },
                className:
                  "group relative w-full h-0 pt-[71.51%] md:pt-[67.46%] cursor-pointer",
                children: [
                  (0, n.jsx)("div", {
                    ref: P,
                    className:
                      "fixed top-0 left-0 w-full h-full pointer-events-none bg-light_beige opacity-0",
                  }),
                  (0, n.jsx)("div", {
                    ref: B,
                    className:
                      "absolute bottom-0 right-0 w-full h-full bg-white rounded-[1.2rem]",
                  }),
                  (0, n.jsx)("div", {
                    ref: H,
                    className:
                      "absolute bottom-0 right-0 w-full h-full bg-white rounded-[1.2rem] overflow-hidden",
                    children: (0, n.jsx)("div", {
                      ref: W,
                      className:
                        "absolute bottom-0 right-0 w-full h-full bg-white rounded-[1rem] p-[0.2rem] overflow-hidden",
                      children: (0, n.jsxs)("div", {
                        className:
                          "relative w-full h-full rounded-[1rem] overflow-hidden",
                        children: [
                          (0, n.jsx)("video", {
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            autoPlay: !0,
                            className: "relative w-full h-full object-cover",
                            children: (0, n.jsx)("source", {
                              type: "video/mp4",
                              src: t,
                            }),
                          }),
                          (0, n.jsx)("video", {
                            ref: a,
                            onClick: Q,
                            onEnded: () => {
                              C.current.classList.remove("a");
                            },
                            disablePictureInPicture: !0,
                            controlsList: "nodownload noplaybackrate",
                            className:
                              "absolute top-0 left-0 w-full h-full object-contain rounded-[1rem] bg-black opacity-0 pointer-events-auto xl:object-cover",
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3.6rem] h-[3.6rem] md:w-[6.5rem] md:h-[6.5rem] lg:w-[9.5rem] lg:h-[9.5rem] xl:w-[5.5rem] xl:h-[5.5rem] pointer-events-none",
                            children: (0, n.jsx)("div", {
                              ref: C,
                              onClick: () => el(),
                              className:
                                "group w-full h-full pointer-events-auto",
                              children: (0, n.jsxs)("div", {
                                className:
                                  "relative w-full h-full transition-transform ease-out duration-500 xl:group-hover:scale-[1.2] xl:hover:scale-[1.2]",
                                children: [
                                  (0, n.jsx)("div", {
                                    className:
                                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3.6rem] h-[3.6rem] md:w-[5.5rem] md:h-[5.5rem] lg:w-[8.5rem] lg:h-[8.5rem] xl:w-[4.5rem] xl:h-[4.5rem] svg-wrapper",
                                    children: (0, n.jsx)(p, {}),
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.415rem] h-[0.5rem] md:w-[0.6rem] md:h-[0.7rem] lg:w-[1rem] lg:h-[1.1rem] xl:w-[0.6rem] xl:h-[0.7rem] svg-wrapper group-[.a]:opacity-0",
                                    children: (0, n.jsx)(h.Z, {}),
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.415rem] h-[0.5rem] md:w-[0.6rem] md:h-[0.7rem] lg:w-[1rem] lg:h-[1.1rem] xl:w-[0.6rem] xl:h-[0.7rem] svg-wrapper opacity-0 group-[.a]:opacity-100",
                                    children: (0, n.jsx)(m, {}),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, n.jsx)("div", {
                            ref: O,
                            className:
                              "pointer-events-none absolute top-[7rem] right-[0.8rem] md:top-1/2 md:-translate-y-1/2 md:right-[0.8rem]",
                            children: (0, n.jsx)("div", {
                              ref: A,
                              onClick: () => {
                                I(!1);
                              },
                              className: "pointer-events-auto",
                              children: (0, n.jsx)("div", {
                                className:
                                  "flex items-center justify-center w-[6.6rem] h-[6.6rem] bg-white rounded-12 cursor-pointer transition-transform ease-out duration-500 xl:hover:scale-[1.05]",
                                children: (0, n.jsx)("div", {
                                  className:
                                    "w-[1rem] h-[1rem] svg-wrapper text-dark_grey",
                                  children: (0, n.jsx)(f.Z, {}),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                ref: l,
                className:
                  "group fixed top-0 left-0 w-full h-screen-mobile px-[1rem] py-[1.3rem] z-popup pointer-events-none",
                children: (0, n.jsxs)("div", {
                  className: "relative w-full h-full",
                  children: [
                    (0, n.jsx)("div", {
                      ref: j,
                      className:
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white uppercase opacity-0",
                      children: "Loading",
                    }),
                    (0, n.jsxs)("div", {
                      ref: y,
                      className:
                        "absolute left-0 bottom-0 w-full flex items-center px-25 md:px-36 pb-30 text-white cursor-pointer pointer-events-none opacity-0",
                      children: [
                        (0, n.jsx)("div", {
                          ref: o,
                          onClick: Q,
                          className:
                            "relative mr-16 w-[6.5rem] h-[6.5rem] lg:w-[9.5rem] lg:h-[9.5rem] xl:w-[5.5rem] xl:h-[5.5rem]",
                          children: (0, n.jsx)("div", {
                            ref: b,
                            className:
                              "play-button-w absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full",
                          }),
                        }),
                        (0, n.jsx)("div", {
                          ref: E,
                          onClick: (e) => {
                            let t = E.current.getBoundingClientRect(),
                              r =
                                Math.round(
                                  100 *
                                    s.p8.utils.clamp(
                                      0,
                                      1,
                                      s.p8.utils.mapRange(
                                        t.left,
                                        t.right,
                                        0,
                                        1,
                                        e.clientX
                                      )
                                    )
                                ) / 100;
                            (a.current.currentTime = a.current.duration * r),
                              a.current.paused &&
                                s.p8.to(F.current, {
                                  progress: r,
                                  duration: 0.9,
                                  ease: "expo.out",
                                });
                          },
                          className:
                            "group-[.a]:pointer-events-auto relative flex-1 py-10 origin-right",
                          children: (0, n.jsxs)("div", {
                            className: "relative w-full",
                            children: [
                              (0, n.jsx)("div", {
                                className: "w-full h-px bg-white opacity-25",
                              }),
                              (0, n.jsx)("div", {
                                ref: L,
                                className:
                                  "absolute left-0 top-0 w-full h-px bg-white origin-left",
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "relative flex items-center gap-x-container ml-16 uppercase group-[.a]:pointer-events-auto",
                          children: [
                            (0, n.jsx)("div", {
                              className: "w-[1.3rem] h-[1.3rem] svg-wrapper",
                              onClick: () => {
                                a.current.muted
                                  ? (s.p8.to(
                                      R.current.querySelectorAll(
                                        "svg > line"
                                      )[0],
                                      {
                                        attr: { y1: 218557e-13 },
                                        ease: "expo.out",
                                      }
                                    ),
                                    s.p8.to(
                                      R.current.querySelectorAll(
                                        "svg > line"
                                      )[1],
                                      { attr: { y1: 6 }, ease: "expo.out" }
                                    ),
                                    s.p8.to(
                                      R.current.querySelectorAll(
                                        "svg > line"
                                      )[2],
                                      { attr: { y1: 3 }, ease: "expo.out" }
                                    ),
                                    s.p8.to(
                                      R.current.querySelectorAll(
                                        "svg > line"
                                      )[3],
                                      { attr: { y1: 8 }, ease: "expo.out" }
                                    ))
                                  : s.p8.to(
                                      R.current.querySelectorAll("svg > line"),
                                      { attr: { y1: 11 }, ease: "expo.out" }
                                    ),
                                  (a.current.muted = !a.current.muted);
                              },
                              ref: R,
                              children: (0, n.jsx)(x, {}),
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "w-[1.2rem] h-[1.2rem] origin-center hover:scale-125 transition-transform ease-out duration-300 svg-wrapper",
                              onClick: $,
                              ref: N,
                              children: (0, n.jsx)(w, {}),
                            }),
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
        y = r(1167),
        b = r(4179),
        C = r(6009),
        R = (e) => {
          let { slice: t, slices: r, index: c } = e,
            d = (0, i.useRef)(null),
            f = (0, i.useRef)(null),
            h = (0, i.useRef)(!1),
            p = (0, i.useRef)(!1),
            m = (0, i.useRef)([]),
            x = (0, i.useRef)([]),
            w = (0, i.useRef)([]),
            v = (0, i.useRef)([]),
            R = (0, i.useRef)(!1),
            N = (0, i.useRef)(!1),
            E = (0, i.useRef)(!1),
            L = (0, i.useRef)(!1),
            k = (0, i.useRef)(!1),
            _ = (0, i.useRef)(null),
            S = (0, i.useRef)(!1),
            M = (0, g.a)("(max-width: 1024px)", !0),
            [Z, F] = (0, i.useState)(0),
            [T, z] = (0, i.useState)(1),
            P = (0, u.o)((e) => e.isPopupOpen),
            B = (0, u.o)((e) => e.isLoaded),
            H = (0, u.o)((e) => e.isFirstLoaded),
            W = (0, u.o)((e) => e.isAppear),
            A = (0, u.o)((e) => e.animationContext),
            O = () => {
              N && N.current.classList.add("hidden");
            },
            q = () => {
              F(window.innerWidth);
            },
            D = (e) => {
              z(e);
            },
            Y = () => {
              let e = window.innerWidth >= 1024 ? m.current[0] : x.current[0],
                t = window.innerWidth >= 1024 ? w.current[0] : v.current[0],
                r = window.innerWidth >= 1024 ? m.current[1] : x.current[1],
                n = window.innerWidth >= 1024 ? w.current[1] : v.current[1],
                l = s.p8.timeline();
              return (
                l
                  .fromTo(
                    e,
                    { yPercent: 200 },
                    { yPercent: 100, duration: 1.2, ease: "power4.inOut" },
                    0
                  )
                  .fromTo(
                    t,
                    { letterSpacing: "-0.15em" },
                    {
                      duration: 1.2,
                      letterSpacing: "-0.04em",
                      ease: "power4.inOut",
                    },
                    "<"
                  )
                  .fromTo(
                    t,
                    { yPercent: 0 },
                    { yPercent: -100, duration: 1.4, ease: "power4.inOut" },
                    "-=0.6"
                  )
                  .fromTo(
                    r,
                    { yPercent: 100 },
                    { yPercent: 0, duration: 1.4, ease: "power4.inOut" },
                    "<"
                  )
                  .fromTo(
                    n,
                    { letterSpacing: "-0.15em" },
                    {
                      duration: 1.4,
                      letterSpacing: "-0.04em",
                      ease: "power4.inOut",
                    },
                    "-=1.4"
                  ),
                (_.current = l),
                l
              );
            },
            V = () => {
              R.current && R.current.play(),
                window.innerWidth,
                window.innerHeight;
              let e = s.p8.timeline(),
                t = Y();
              e.add(t, "-=0.7");
            },
            I = () => {
              let e = window.innerWidth >= 1024 ? m.current[0] : x.current[0],
                t = window.innerWidth >= 1024 ? m.current[1] : x.current[1],
                r = window.innerWidth >= 1024 ? w.current : v.current;
              s.p8.set(e, { yPercent: 200 }),
                s.p8.set(t, { yPercent: 100 }),
                s.p8.set(r, { letterSpacing: "-0.15em" });
            },
            X = () => {
              d.current && (d.current.kill(), (d.current = null)),
                f.current && (f.current.kill(), (f.current = null)),
                A.add(() => {
                  let e = s.p8.fromTo(
                      [E.current, L.current, k.current],
                      { y: 0 },
                      { y: window.innerWidth / 15, ease: "none" },
                      0
                    ),
                    t = s.p8.fromTo(
                      p.current,
                      { scale: 1, borderRadius: 0 },
                      {
                        scale: window.innerWidth < 768 ? 0.965 : 0.972,
                        borderRadius: 0,
                      },
                      0
                    );
                  l.ScrollTrigger.create({
                    trigger: p.current,
                    start: "top 10",
                    animation: e,
                    scrub: !0,
                    onEnter: () => {
                      R.current && R.current.play();
                    },
                    onEnterBack: () => {
                      R.current && R.current.play();
                    },
                    onLeave: () => {
                      R.current && R.current.pause();
                    },
                  }),
                    l.ScrollTrigger.create({
                      trigger: p.current,
                      start: "top 10",
                      end: "+=".concat(0.5 * p.current.clientHeight),
                      animation: t,
                      scrub: !0,
                    });
                });
            };
          return (
            (0, i.useEffect)(() => {
              p.current.style.height = "".concat(window.innerHeight, "px");
            }, [Z]),
            (0, i.useEffect)(() => {
              W && (I(), Y());
            }, [W]),
            (0, i.useEffect)(
              () => (
                F(window.innerWidth),
                X(),
                I(),
                R.current && R.current.addEventListener("play", O),
                (h.current.style.zIndex = 10),
                window.addEventListener("resize", q),
                () => {
                  _.current && (_.current.kill(), (_.current = null)),
                    window.removeEventListener("resize", q);
                }
              ),
              []
            ),
            (0, i.useEffect)(() => {
              D(!P);
            }, [P]),
            (0, i.useEffect)(() => {
              B && !H && V();
            }, [B, H]),
            (0, n.jsx)(C.Z, {
              index: c,
              slicesLength: r.length,
              children: (0, n.jsxs)("section", {
                ref: h,
                className: "relative bg-white",
                onMouseEnter: () => z(1),
                onMouseLeave: () => z(0),
                "data-slice-type": t.slice_type,
                "data-slice-variation": t.variation,
                style: { zIndex: r.length - c },
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "absolute left-0 top-0 w-full h-full bg-dots bg-size-dots bg-repeat z-0 opacity-40",
                  }),
                  (0, n.jsx)("div", {
                    className: "relative bg-light_beige z-1",
                    children: (0, n.jsxs)("div", {
                      ref: p,
                      className:
                        "relative overflow-hidden h-screen min-h-[600px] landscape:min-h-[800px] lg:!min-h-[600px]",
                      children: [
                        (0, n.jsx)("div", {
                          className: "".concat(
                            t.primary.live_event && "hidden md:block",
                            " absolute left-[2rem] bottom-[1.2rem] md:left-[2.5rem] md:bottom-[2.5rem] lg:left-[2rem] lg:bottom-[2rem] xl:fixed xl:left-0 xl:top-0 xl:w-full xl:h-full pointer-events-none z-5"
                          ),
                          children: (0, n.jsx)(a.Z, {
                            showBlogFromParent: T,
                            text: "Keep going \xb7 Scroll down \xb7",
                            addScroll: !0,
                          }),
                        }),
                        (0, n.jsx)("div", {
                          ref: E,
                          className:
                            "absolute left-0 top-0 w-full h-full z-1 pointer-events-none",
                          children:
                            t.primary.background_image.url &&
                            (0, n.jsx)("div", {
                              className:
                                "absolute left-0 top-0 w-full h-full z-1 pointer-events-none",
                              children: M
                                ? (0, n.jsx)(o.Z, {
                                    loading: "eager",
                                    priority: !0,
                                    sizes: "100vw",
                                    fallbackAlt: "",
                                    field: t.primary.background_image_mobile,
                                    className: "w-full h-full object-cover",
                                  })
                                : (0, n.jsx)(o.Z, {
                                    loading: "eager",
                                    priority: !0,
                                    sizes: "100vw",
                                    fallbackAlt: "",
                                    field: t.primary.background_image,
                                    className: "w-full h-full object-cover",
                                  }),
                            }),
                        }),
                        (0, n.jsx)("div", {
                          ref: L,
                          className:
                            "absolute left-0 top-0 w-full h-full z-3 pointer-events-none",
                          children:
                            t.primary.middle_image.url &&
                            (0, n.jsx)("div", {
                              className:
                                "absolute left-0 top-0 w-full h-full z-3 pointer-events-none",
                              children: M
                                ? (0, n.jsx)(o.Z, {
                                    loading: "eager",
                                    priority: !0,
                                    sizes: "100vw",
                                    fallbackAlt: "",
                                    field: t.primary.middle_image_mobile,
                                    className:
                                      "w-full h-full object-cover object-[80%_center] xl:object-center",
                                  })
                                : (0, n.jsx)(o.Z, {
                                    loading: "eager",
                                    priority: !0,
                                    sizes: "100vw",
                                    fallbackAlt: "",
                                    field: t.primary.middle_image,
                                    className:
                                      "w-full h-full object-cover object-[80%_center] xl:object-center",
                                  }),
                            }),
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "absolute px-container top-container w-full grid grid-cols-6 lg:grid-cols-12 mt-[6rem] xl:mt-0 z-2",
                          children: (0, n.jsxs)("div", {
                            className:
                              "col-start-1 col-end-7 lg:col-start-2 lg:col-end-12",
                            children: [
                              (0, n.jsx)("div", {
                                className:
                                  "lg:hidden text-white text-center overflow-hidden w-[110%] -ml-[5%] pb-[10px] padtop-40",
                                children: t.primary.title.map((e, t) =>
                                  (0, n.jsx)(
                                    "span",
                                    {
                                      className:
                                        "block " + (t > 0 ? "lg:-mt-8" : ""),
                                      ref: (e) => (x.current[t] = e),
                                      children: (0, n.jsx)("span", {
                                        className: "block heading-223",
                                        ref: (e) => (v.current[t] = e),
                                        children: e.text,
                                      }),
                                    },
                                    t
                                  )
                                ),
                              }),
                              (0, n.jsx)("div", {
                                className:
                                  "hidden lg:block text-white text-center overflow-hidden padtop-40",
                                children: t.primary.title.map((e, t) =>
                                  (0, n.jsx)(
                                    "span",
                                    {
                                      className:
                                        "block " +
                                        (t > 0 ? "lg:-mt-8 pb-[2rem]" : ""),
                                      ref: (e) => (m.current[t] = e),
                                      children: (0, n.jsx)("span", {
                                        className: "block heading-223",
                                        ref: (e) => (w.current[t] = e),
                                        children: e.text,
                                      }),
                                    },
                                    t
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          ref: k,
                          className:
                            "hidden absolute left-0 top-0 w-full h-full z-4 pointer-events-none flex items-end dnone",
                          children: [
                            (0, n.jsxs)("video", {
                              ref: R,
                              className:
                                "w-full h-[70%] xl:h-full z-3 pointer-events-none object-cover object-[90%_center] xl:object-[bottom_center]",
                              loop: !0,
                              muted: !0,
                              playsInline: !0,
                              children: [
                                t.primary.foreground_video_mov &&
                                  (0, n.jsx)("source", {
                                    type: "video/mp4;codecs=hvc1",
                                    src: t.primary.foreground_video_mov.url,
                                  }),
                                t.primary.foreground_video_webm &&
                                  (0, n.jsx)("source", {
                                    type: "video/webm",
                                    src: t.primary.foreground_video_webm.url,
                                  }),
                              ],
                            }),
                            t.primary.foreground_image.url &&
                              (0, n.jsx)("div", {
                                ref: N,
                                className:
                                  "absolute left-0 bottom-0 w-full h-[70%] xl:h-full",
                                children: (0, n.jsx)(o.Z, {
                                  loading: "eager",
                                  priority: !0,
                                  sizes: "100vw",
                                  className:
                                    "w-full h-full object-cover object-[90%_center] xl:object-center",
                                  field: t.primary.foreground_image,
                                  fallbackAlt: "",
                                }),
                              }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "absolute left-0 bottom-[1.3rem] md:bottom-[2rem] w-full px-container flex justify-end grid-cols-12 z-5 dnone",
                          children: [
                            t.primary.live_event &&
                              (0, n.jsx)("div", {
                                className:
                                  "flex justify-end col-start-1 col-end-5 md:col-start-5 md:col-end-7 lg:col-start-6 lg:col-end-8 xl:col-start-8 xl:col-end-10 ".concat(
                                    t.primary.video.url &&
                                      t.primary.video_preview.url
                                      ? "mr-[0.3rem] md:mr-[0.4rem]"
                                      : "h-[14rem] md:h-[22.8rem] lg:h-[35rem] xl:h-[22.8rem]"
                                  ),
                                children: (0, n.jsxs)(b.Z, {
                                  field: t.primary.live_event_link,
                                  className:
                                    "group flex flex-col w-[9.8rem] md:w-[11rem] lg:w-[20rem] xl:w-[12rem] h-full bg-white rounded-12 p-[0.2rem]",
                                  onMouseEnter: () => D(!1),
                                  onMouseLeave: () => D(!0),
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "relative w-full h-0 pt-[77.69%] md:pt-[100%] rounded-10 overflow-hidden",
                                      children: (0, n.jsx)("div", {
                                        className:
                                          "absolute w-full h-full top-0 left-0 transition-transform ease-out duration-500 xl:group-hover:scale-[1.1]",
                                        children: (0, n.jsx)(o.Z, {
                                          loading: "eager",
                                          priority: !0,
                                          fallbackAlt: "",
                                          field: t.primary.live_event_image,
                                          sizes: "12rem",
                                          className:
                                            "w-full h-full object-cover",
                                        }),
                                      }),
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "flex-1 flex justify-center items-center",
                                      children: (0, n.jsxs)("div", {
                                        className:
                                          "flex items-center body-mono-10 text-orange uppercase",
                                        children: [
                                          (0, n.jsx)("span", {
                                            className:
                                              "mt-[0.1rem] mr-[0.6rem] md:mr-[0.8rem]",
                                            children: (0, n.jsx)(y.Z, {}),
                                          }),
                                          (0, n.jsx)("span", {
                                            className: "tracking-[0.05rem]",
                                            children: "Live event",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            t.primary.video.url &&
                              t.primary.video_preview.url &&
                              (0, n.jsx)("div", {
                                className:
                                  "relative w-[15.8rem] md:w-[28rem] lg:w-[45rem] xl:w-[33.6rem]",
                                onMouseEnter: () => D(!1),
                                onMouseLeave: () => !P && D(!0),
                                children: (0, n.jsx)(j, {
                                  loop: t.primary.video_preview.url,
                                  src: t.primary.video.url,
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)("div", { ref: S, className: "hidden" }),
                ],
              }),
            })
          );
        };
    },
  },
]);
