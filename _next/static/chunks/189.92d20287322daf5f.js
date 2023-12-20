"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [189],
  {
    226: function (e, r, t) {
      var n = t(5893),
        l = t(7294),
        i = t(4179),
        s = t(9293);
      r.Z = (e) => {
        let { field: r, title: t, mode: a, popup: c = !1 } = e;
        (0, l.useEffect)(() => {}, []);
        let o = () => {
          window.dispatchEvent(
            new CustomEvent("open-popup", {
              detail: { name: "global", type: r.type, uid: r.uid },
            })
          );
        };
        return c
          ? "team" === r.uid
            ? (0, n.jsxs)("div", {
                onClick: o,
                className:
                  "group inline-flex justify-start items-center cursor-pointer",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "flex justify-center items-center w-[3.6rem] h-[3.6rem] ".concat(
                        "white" === a ? "bg-white" : "bg-light_beige",
                        " rounded-10 mr-[0.9rem] transition-transform duration-global ease-out group-hover:scale-105"
                      ),
                    children: (0, n.jsx)("div", {
                      className: "svg-wrapper w-[1.1rem] h-[0.85rem]",
                      children: (0, n.jsx)(s.Z, {}),
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "body-mono-10 transition-opacity duration-global ease-out group-hover:opacity-50 ".concat(
                        "white" === a ? "text-white" : "text-black"
                      ),
                    children: t,
                  }),
                ],
              })
            : (0, n.jsxs)(i.Z, {
                onClick: o,
                href: r.url,
                className:
                  "group inline-flex justify-start items-center cursor-pointer",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "flex justify-center items-center w-[3.6rem] h-[3.6rem] ".concat(
                        "white" === a ? "bg-white" : "bg-light_beige",
                        " rounded-10 mr-[0.9rem] transition-transform duration-global ease-out group-hover:scale-105"
                      ),
                    children: (0, n.jsx)("div", {
                      className: "svg-wrapper w-[1.1rem] h-[0.85rem]",
                      children: (0, n.jsx)(s.Z, {}),
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "body-mono-10 transition-opacity duration-global ease-out group-hover:opacity-50 ".concat(
                        "white" === a ? "text-white" : "text-black"
                      ),
                    children: t,
                  }),
                ],
              })
          : (0, n.jsxs)(i.Z, {
              field: r,
              className: "group inline-flex justify-start items-center",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "flex justify-center items-center w-[3.6rem] h-[3.6rem] ".concat(
                      "white" === a ? "bg-white" : "bg-light_beige",
                      " rounded-10 mr-[0.9rem] transition-transform duration-global ease-out group-hover:scale-105"
                    ),
                  children: (0, n.jsx)("div", {
                    className: "svg-wrapper w-[1.1rem] h-[0.85rem]",
                    children: (0, n.jsx)(s.Z, {}),
                  }),
                }),
                (0, n.jsx)("div", {
                  className:
                    "font-body-mono text-10 leading-[180%] tracking-[0.05rem] uppercase transition-opacity duration-global ease-out group-hover:opacity-50 ".concat(
                      "white" === a ? "text-white" : "text-dark_grey"
                    ),
                  children: t,
                }),
              ],
            });
      };
    },
    7771: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return m;
        },
      });
      var n = t(5893),
        l = t(7294),
        i = t(6038),
        s = class {
          populateSpans() {
            this.spans.push(this.firstSpan);
            let e = this.firstSpan.innerHTML,
              r = this.firstSpan.offsetWidth,
              t = this.titleWrapper.offsetWidth,
              n = Math.ceil(t / r);
            for (let r = 0; r < n; r++) {
              let r = document.createElement("span");
              (r.innerHTML = e),
                r.classList.add("clone", "px-[0.5rem]"),
                this.spans.push(r),
                this.firstSpan.parentElement.appendChild(r);
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
              i.p8.set(this.title, { x: 0 }),
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
              r = this.title.offsetWidth;
            (this.title.style.display = "block"),
              (this.distance = (r * e) / 100),
              (this.duration = this.distance / this.speed);
          }
          initAnimation() {
            (this.animation = i.p8.timeline({
              onComplete: () => this.animation.play(0),
            })),
              this.animation.to(this.title, {
                x: -this.distance,
                duration: this.duration,
                ease: "none",
              }),
              this.animation.set(this.title, { x: 0 });
          }
          constructor({ titleWrapper: e, title: r, firstSpan: t, speed: n }) {
            (this.titleWrapper = e),
              (this.title = r),
              (this.firstSpan = t),
              (this.speed = n),
              (this.spans = []),
              (this.duration = 0),
              (this.distance = 0),
              (this.animation = null);
          }
        },
        a = (e) => {
          let { text: r, windowWidth: t } = e,
            [i, a] = (0, l.useState)(!1),
            c = (0, l.useRef)(!1),
            o = (0, l.useRef)(!1),
            u = (0, l.useRef)(!1),
            d = (0, l.useRef)(!1);
          return (
            (0, l.useEffect)(() => {
              document.fonts.ready.then(() => {
                a(!0);
              }),
                c.current
                  ? c.current.resize()
                  : ((c.current = new s({
                      titleWrapper: o.current,
                      title: u.current,
                      firstSpan: d.current,
                      speed: 65,
                    })),
                    c.current.start());
            }, [i, t, r]),
            (0, n.jsx)("div", {
              ref: o,
              className: "infinite-text w-full overflow-hidden",
              children: (0, n.jsx)("div", {
                ref: u,
                className: "whitespace-nowrap body-mono-12 text-white",
                children: (0, n.jsx)("span", {
                  ref: d,
                  className: "inline px-[0.5rem]",
                  children: r,
                }),
              }),
            })
          );
        },
        c = t(9362),
        o = t(8266),
        u = t(8430);
      let d = (0, l.forwardRef)((e, r) => {
        let { text: t, showBlogFromParent: s, addScroll: d = !1 } = e,
          [m, f] = (0, l.useState)(!1),
          h = (0, l.useRef)(!0),
          p = (0, l.useRef)(!0),
          w = (0, l.useRef)(0),
          v = (0, l.useRef)(null),
          x = (0, l.useRef)(!1),
          g = (0, l.useRef)(null),
          y = (0, l.useRef)({ x: 0, y: 0 }),
          j = (0, l.useRef)({ x: 0, y: 0 }),
          b = (0, l.useRef)(!1),
          N = (0, l.useRef)(!1),
          R = (0, l.useRef)(1),
          _ = (0, l.useRef)(null),
          k = (0, l.useRef)(),
          C = (0, l.useRef)(0),
          E = (0, l.useRef)(0),
          z = (0, l.useRef)(!1),
          T = (0, c.a)("(max-width: 1024px)"),
          Z = (0, o.o)((e) => e.windowWidth);
        (0, l.useImperativeHandle)(r, () => ({
          ref: v.current,
          addScrollValue: L,
        }));
        let H = [
          "M82.5482 82.1766C61.8974 101.682 5.00837 86.2123 0.520907 56.8302C-2.6135 36.3074 12.7095 0.968449 52.346 0.870053C82.734 0.794616 101.441 64.331 82.5482 82.1766Z",
          "M89.3968 66.851C83.1811 90.6927 6.68285 102.054 1.91761 71.5306C-1.41082 50.2108 -3.37542 0.108923 38.7297 0.00439838C71.0103 -0.0757369 95.6125 43.0093 89.3968 66.851Z",
          "M90.5887 37.5486C79.4974 61.3619 54.2093 99.0929 26.7038 88.7037C4.52198 80.3253 -16.3638 0.603904 22.7124 0.506899C52.6709 0.432529 94.5818 14.1764 90.5887 37.5486Z",
          "M86 79C72.5 99.5 23 93 6.99999 75C-8.753 57.2778 6.42374 0.597002 45.5 0.499997C75.4584 0.425626 101.835 54.9535 86 79Z",
        ];
        (0, l.useEffect)(() => {
          _.current =
            Date.now().toString(36) + Math.random().toString(36).substring(2);
        }, []),
          (0, l.useEffect)(() => {
            if (
              (document.fonts.ready.then(() => {
                f(!0);
              }),
              T)
            )
              g.current.style.transform = "translate(0, 0)";
            else {
              Y();
              let e = v.current.getBoundingClientRect();
              (w.current = e.top + window.scrollY),
                window.addEventListener("introduction-complete", S),
                window.addEventListener("mousemove", M),
                d && window.addEventListener("scroll", P),
                k.current || (k.current = u.Z.add(A, 0)),
                O();
            }
            return () => {
              window.removeEventListener("introduction-complete", S),
                window.removeEventListener("mousemove", M),
                d && window.removeEventListener("scroll", P),
                k.current && k.current(),
                (k.current = null);
            };
          }, [Z, m, T]),
          (0, l.useEffect)(() => {
            T ||
              (s
                ? i.p8.to(g.current, {
                    alpha: 1,
                    duration: 0.3,
                    ease: "power2.out",
                  })
                : i.p8.to(g.current, {
                    alpha: 0,
                    duration: 0.3,
                    ease: "power2.out",
                  }));
          }, [s]),
          (0, l.useEffect)(() => {
            W();
          }, [Z, T]);
        let S = () => {
            T && returno,
              Z < 1024 &&
                setTimeout(() => {
                  O();
                }, 1e3);
          },
          W = () => {
            if (T) {
              let e = g.current.getBoundingClientRect().height;
              (R.current = (e - 4) / 90),
                i.p8.set(b.current, { scale: R.current });
            } else
              B(),
                O(),
                Z < 1024 &&
                  ((j.current = { x: 0, y: 0 }), (y.current = j.current));
          },
          L = (e) => {
            if (!h.current || Z < 1024 || !z.current) return;
            let r = C.current;
            (C.current = window.scrollY - e),
              p.current || ((E.current += -(r - C.current)), M(z.current));
          },
          P = () => {
            if (!h.current || Z < 1024) return;
            let e = C.current;
            (C.current = window.scrollY),
              p.current ||
                M({
                  clientX: j.current.x,
                  clientY:
                    j.current.y + w.current - (e - C.current) - window.scrollY,
                });
          },
          M = (e) => {
            h.current &&
              !(Z < 1024) &&
              ((j.current = {
                x: e.clientX,
                y: d
                  ? e.clientY + window.scrollY - w.current
                  : E.current + e.clientY,
              }),
              p.current && ((y.current = j.current), (p.current = !1)),
              (z.current = e));
          },
          A = () => {
            h.current &&
              ((y.current.x += (j.current.x - y.current.x) * 0.13),
              (y.current.y += (j.current.y - y.current.y) * 0.13),
              g.current &&
                !T &&
                (g.current.style.transform = "translate3d("
                  .concat(y.current.x.toFixed(0), "px, ")
                  .concat(y.current.y, "px, 0)")));
          },
          O = () => {
            T ||
              N.current ||
              ((N.current = !0),
              i.p8.to(b.current, {
                scale: R.current,
                delay: 0.1,
                duration: 0.8,
                ease: "power3.inOut",
              }));
          },
          B = () => {
            !T &&
              ((N.current = !1),
              b.current && i.p8.set(b.current, { scale: 0 }));
          },
          Y = () => {
            if (T) return;
            x.current && (x.current.kill(), (x.current = null));
            let e = g.current.getBoundingClientRect().height;
            (R.current = (e - 4) / 90),
              i.p8.set(b.current, {
                scale: 0,
                transformOrigin: "center",
                x: (e - 90) / 2,
                y: (e - 90) / 2,
              }),
              (x.current = i.p8.timeline({ repeat: -1, yoyo: !0 }));
            for (let e = 0; e < H.length; e++)
              x.current.to(b.current, {
                attr: { d: H[e] },
                duration: 3,
                ease: "none",
              });
          };
        return (0, n.jsx)(n.Fragment, {
          children: T
            ? (0, n.jsx)("div", {
                ref: v,
                className:
                  "cursor relative w-[73px] h-[73px] md:w-[100px] md:h-[100px] lg:w-[14rem] lg:h-[14rem] xl:w-[8rem] xl:h-[8rem] overflow-hidden z-2",
                children: (0, n.jsxs)("div", {
                  ref: g,
                  className: "svg-wrapper w-full h-full bg-orange",
                  style: { clipPath: "url(#".concat(_.current, ")") },
                  children: [
                    (0, n.jsx)("svg", {
                      className: "w-full h-full",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, n.jsx)("defs", {
                        children: (0, n.jsx)("clipPath", {
                          id: _.current,
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
                      children: (0, n.jsx)(a, { text: t, windowWidth: Z }),
                    }),
                  ],
                }),
              })
            : (0, n.jsx)("div", {
                ref: v,
                className:
                  "cursor absolute left-0 top-0 w-full h-full overflow-hidden",
                style: { clipPath: "inset(0 0 0 0)" },
                children: (0, n.jsx)("div", {
                  ref: g,
                  className:
                    "absolute right-container lg:right-[initial] bottom-[13rem] lg:bottom-[initial] xl:fixed xl:top-0 xl:left-0 z-5 w-[80px] h-[80px] md:w-[140px] md:h-[140px] lg:w-[8rem] lg:h-[8rem] pointer-events-none",
                  children: (0, n.jsxs)("div", {
                    className: "w-full h-full bg-orange overflow-hidden",
                    style: { clipPath: "url(#".concat(_.current, ")") },
                    children: [
                      (0, n.jsx)("svg", {
                        className: "absolute",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("defs", {
                          children: (0, n.jsx)("clipPath", {
                            id: _.current,
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
                        children: (0, n.jsx)(a, { text: t, windowWidth: Z }),
                      }),
                    ],
                  }),
                }),
              }),
        });
      });
      d.displayName = "Cursor";
      var m = d;
    },
    9362: function (e, r, t) {
      t.d(r, {
        a: function () {
          return l;
        },
      });
      var n = t(7294);
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "(max-width: 1024px)",
          r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          [t, l] = (0, n.useState)(r);
        return (
          (0, n.useEffect)(() => {
            let r = window.matchMedia(e);
            function t() {
              l(r.matches);
            }
            return (
              r.addEventListener("change", t, !1),
              t(),
              () => r.removeEventListener("change", t, !1)
            );
          }, [e]),
          t
        );
      }
    },
    9293: function (e, r, t) {
      var n = t(5893);
      r.Z = (e) => {
        let { stroke: r = "#575349" } = e;
        return (0, n.jsx)("svg", {
          width: "11",
          height: "9",
          viewBox: "0 0 11 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, n.jsx)("path", {
            id: "Vector 201",
            d: "M0 4.5H9.5M9.5 4.5L5.9 1M9.5 4.5L5.9 8",
            stroke: r,
          }),
        });
      };
    },
    3189: function (e, r, t) {
      t.r(r),
        t.d(r, {
          default: function () {
            return p;
          },
        });
      var n = t(5893),
        l = t(26),
        i = t(7294),
        s = t(6546),
        a = t(6038),
        c = t(2099),
        o = t(226),
        u = (e) => {
          let { title: r, icon: t, progress: s } = e,
            a = (0, i.useRef)(null),
            [c, o] = (0, i.useState)(0);
          return (
            (0, i.useEffect)(() => {
              o(100 * s);
            }, [s]),
            (0, n.jsxs)("div", {
              ref: a,
              className:
                "relative flex items-center bg-white rounded-12 border-white border-[0.2rem] uppercase",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "absolute top-0 left-0 h-full bg-light_beige rounded-10",
                  style: { width: c + "%" },
                }),
                (0, n.jsxs)("div", {
                  className:
                    "relative ml-[1.6rem] mr-[3.1rzm] my-15 body-mono-10 text-black z-1",
                  children: [
                    (0, n.jsx)("div", { className: "", children: r }),
                    (0, n.jsxs)("div", {
                      className: "-mt-[0.5rem] opacity-50",
                      children: [
                        (0, n.jsx)("span", { children: "On:" }),
                        (0, n.jsxs)("span", { children: [c, "%"] }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className:
                    "relative w-[1.4rem] ml-[3.1rem] mr-[2.4rem] svg-wrapper z-1",
                  children: (0, n.jsx)(l.Z, {
                    field: t,
                    fallbackAlt: "",
                    className: "w-full h-auto",
                  }),
                }),
              ],
            })
          );
        },
        d = t(7771),
        m = t(9362),
        f = (e) => {
          let { slice: r } = e,
            f = (0, i.useRef)(null),
            h = (0, i.useRef)(null),
            p = (0, i.useRef)(null),
            w = (0, i.useRef)(null),
            v = (0, i.useRef)(null),
            x = (0, i.useRef)(null),
            g = (0, i.useRef)(null),
            y = (0, i.useRef)(null),
            j = (0, i.useRef)(null),
            b = (0, i.useRef)(null),
            N = (0, i.useRef)(null),
            R = (0, i.useRef)(null),
            _ = (0, i.useRef)(null),
            k = (0, i.useRef)(null),
            C = (0, i.useRef)(null),
            E = (0, i.useRef)(null),
            z = (0, i.useRef)(null),
            T = (0, i.useRef)(null),
            Z = (0, i.useRef)(null),
            H = (0, i.useRef)(null),
            S = (0, i.useRef)(null),
            W = (0, i.useRef)(null),
            L = (0, i.useRef)(null),
            P = (0, i.useRef)(null),
            M = (0, i.useRef)(null),
            A = (0, i.useRef)(null),
            [O, B] = (0, i.useState)(!1),
            [Y, F] = (0, i.useState)(0),
            [I, D] = (0, i.useState)(0),
            [V, X] = (0, i.useState)(1),
            K = (0, m.a)();
          (0, i.useEffect)(() => {
            if (!O) {
              let e = t(9074);
              b.current.load(),
                (M.current = new e.default({
                  src: b.current.dataset.src,
                  scrollyVideoContainer: A.current,
                  frameThreshold: 0.6,
                  sticky: !1,
                  trackScroll: !1,
                }));
              return;
            }
          }, [O]),
            (0, i.useEffect)(() => {
              b.current &&
                ((b.current.src = b.current.dataset.src), b.current.load()),
                a.p8.set(C.current, { yPercent: 110 });
              let e = window.innerWidth - (0, c.z6)(25) - 5,
                r = window.innerHeight - (0, c.z6)(15),
                t =
                  window.innerWidth < window.innerHeight
                    ? v.current.offsetWidth / e
                    : v.current.offsetHeight / r;
              y.current.style.setProperty("--progress", 0),
                F(v.current.offsetWidth / e),
                D(v.current.offsetHeight / r),
                a.p8.set(j.current, { scale: t + 0.05 });
              let n = a.p8.timeline({ defaults: { ease: "none" } });
              n
                .fromTo(
                  p.current,
                  {
                    y:
                      window.innerWidth < 768
                        ? 0.4 * window.innerHeight
                        : 1.1 * window.innerHeight,
                  },
                  { y: 0 },
                  0
                )
                .fromTo(
                  h.current,
                  {
                    y:
                      window.innerWidth < 768
                        ? 0.45 * window.innerHeight
                        : 1.35 * window.innerHeight,
                  },
                  { y: 0 },
                  0
                )
                .fromTo(
                  v.current,
                  {
                    y:
                      window.innerWidth < 768
                        ? 0.55 * window.innerHeight
                        : 1.75 * window.innerHeight,
                  },
                  { y: 0 },
                  0
                )
                .fromTo(
                  x.current,
                  {
                    y:
                      window.innerWidth < 768
                        ? 0.6 * window.innerHeight
                        : 2.25 * window.innerHeight,
                  },
                  { y: 0 },
                  0
                ),
                s.ScrollTrigger.create({
                  trigger: f.current,
                  start: "top bottom",
                  end: "+=150%",
                  animation: n,
                  scrub: !0,
                });
              let l = a.p8.timeline({ defaults: { ease: "none" } }),
                i = a.p8.timeline({ defaults: { ease: "none" } });
              i.fromTo(N.current, { yPercent: 0 }, { yPercent: 120 }, 0),
                l
                  .fromTo(
                    h.current,
                    { y: 0 },
                    {
                      y: () =>
                        -(
                          window.innerHeight -
                          v.current.offsetHeight -
                          (0, c.z6)(80)
                        ) /
                          2 -
                        10,
                    },
                    0
                  )
                  .fromTo(
                    x.current,
                    { y: 0 },
                    {
                      y: () =>
                        (window.innerHeight -
                          v.current.offsetHeight -
                          (0, c.z6)(80)) /
                          2 +
                        10,
                    },
                    0
                  )
                  .to(w.current, { y: "4rem" }, 0)
                  .to(g.current, { y: "-4rem" }, 0)
                  .fromTo(
                    j.current,
                    {
                      scale: () => {
                        let t =
                          window.innerWidth < window.innerHeight
                            ? v.current.offsetWidth / e
                            : v.current.offsetHeight / r;
                        return t + 0.05;
                      },
                    },
                    {
                      scale: 1,
                      onUpdate: function () {
                        if (Z.current && b.current) {
                          let e = Z.current.progress;
                          M.current.setTargetTimePercent(e);
                        }
                        L.current &&
                          y.current &&
                          y.current.style.setProperty(
                            "--progress",
                            Z.current && 0 === Z.current.progress
                              ? 0
                              : this.progress()
                          );
                      },
                    },
                    0
                  );
              let o = a.p8.timeline({ paused: !0 });
              o
                .fromTo(
                  C.current,
                  { yPercent: 110 },
                  { yPercent: 0, ease: "power2.inOut", duration: 0.9 },
                  0
                )
                .fromTo(
                  E.current,
                  { yPercent: 60 },
                  { yPercent: 0, ease: "power3.out", duration: 0.9 },
                  0.3
                )
                .to(
                  z.current,
                  { xPercent: -50, ease: "power3.inOut", duration: 0.9 },
                  "<50%"
                )
                .to(
                  T.current,
                  { xPercent: 30, ease: "power3.inOut", duration: 0.9 },
                  "<"
                )
                .fromTo(
                  [R.current, _.current],
                  { opacity: 0 },
                  { opacity: 1, ease: "power3.out", duration: 0.9 },
                  ">-=40%"
                ),
                k.current &&
                  o.fromTo(
                    k.current,
                    { yPercent: 70, opacity: 0 },
                    {
                      yPercent: 0,
                      opacity: 1,
                      ease: "power3.out",
                      duration: 0.7,
                    },
                    "<-=10%"
                  );
              let u = a.p8.timeline({ paused: !0 });
              u.to(
                C.current,
                { yPercent: 110, ease: "power2.inOut", duration: 0.6 },
                0
              ),
                (W.current = s.ScrollTrigger.create({
                  trigger: f.current,
                  start: "top top-=45%",
                  end: "52% bottom",
                  animation: i,
                  invalidateOnRefresh: !1,
                  scrub: !0,
                })),
                (Z.current = s.ScrollTrigger.create({
                  trigger: f.current,
                  start: "top top-=58%",
                  end: "85% bottom",
                  animation: l,
                  invalidateOnRefresh: !1,
                  scrub: !0,
                  onLeave: () => {
                    o.restart();
                  },
                  onEnterBack: () => {
                    u.restart();
                  },
                }));
              let d = a.p8.to(j.current, {
                y: window.innerWidth / 20,
                ease: "none",
              });
              return (
                (H.current = s.ScrollTrigger.create({
                  once: !0,
                  trigger: f.current,
                  onEnter: () => {
                    if (((L.current = !0), !P.current)) {
                      let e = window.innerHeight - (0, c.z6)(15);
                      D(v.current.offsetHeight / e), (P.current = !0);
                    }
                  },
                })),
                (S.current = s.ScrollTrigger.create({
                  trigger: f.current,
                  start: "bottom 100%",
                  end: "bottom top",
                  invalidateOnRefresh: !1,
                  animation: d,
                  scrub: !0,
                })),
                window.addEventListener("resize", U),
                () => {
                  window.removeEventListener("resize", U),
                    W.current.kill(),
                    H.current.kill(),
                    S.current.kill(),
                    Z.current.kill(),
                    (W.current = null),
                    (H.current = null),
                    (S.current = null),
                    (Z.current = null);
                }
              );
            }, []);
          let U = () => {
            let e = window.innerWidth - (0, c.z6)(25) - 5,
              r = window.innerHeight - (0, c.z6)(15);
            window.innerWidth < 768
              ? F(0.97)
              : (F(v.current.offsetWidth / e), D(v.current.offsetHeight / r));
          };
          return (0, n.jsxs)("div", {
            ref: f,
            className: "relative h-[300vh] bg-light_beige dnone",
            children: [
              (0, n.jsx)("div", {
                className:
                  "absolute left-0 top-0 w-full h-[calc(100%_-_0.75rem)] hidden xl:block xl:pointer-events-none xl:z-2",
                children: (0, n.jsx)(d.Z, {
                  showBlogFromParent: V,
                  text: "Keep going \xb7 Scroll down \xb7",
                }),
              }),
              (0, n.jsxs)("div", {
                className:
                  "sticky top-0 px-container grid grid-cols-6 lg:grid-cols-12 h-screen content-center overflow-hidden",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "col-span-full md:col-start-2 md:col-end-6 lg:col-start-2 lg:col-end-12 xl:col-start-4 xl:col-end-10 xl:px-30 h-full",
                    children: (0, n.jsxs)("div", {
                      className: "relative grid gap-y-[4rem]",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "absolute top-0 left-0 -translate-y-[calc(100%_+_4rem)] w-full pt-[66.4%]",
                          children: (0, n.jsx)("div", {
                            ref: p,
                            className:
                              "absolute top-0 left-0 w-full h-full rounded-[1.3rem] md:rounded-[1.8rem] overflow-hidden",
                            children: (0, n.jsx)("div", {
                              ref: g,
                              className: "w-full h-full",
                              children: (0, n.jsx)(l.Z, {
                                field: r.primary.image_bottom,
                                sizes: "(max-width: 768px) 100vw, 30vw",
                                fallbackAlt: "",
                                className: "w-full h-full object-cover",
                              }),
                            }),
                          }),
                        }),
                        (0, n.jsx)("div", {
                          ref: h,
                          className:
                            "relative w-full pt-[66.4%] rounded-[1.8rem] overflow-hidden",
                          children: (0, n.jsx)("div", {
                            ref: w,
                            className: "absolute top-0 left-0 w-full h-full",
                            children: (0, n.jsx)(l.Z, {
                              field: r.primary.image_top,
                              sizes: "(max-width: 768px) 100vw, 30vw",
                              fallbackAlt: "",
                              className: "w-full h-full object-cover",
                            }),
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          ref: v,
                          className: "relative w-full pt-[66.4%]",
                          children: [
                            (0, n.jsxs)("div", {
                              ref: y,
                              className:
                                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw_-_2.5rem_-_5px)] h-[calc(100vh_-_1.5rem)]",
                              style: {
                                clipPath: "inset(calc("
                                  .concat(
                                    ((1 - I) / 2) * 100,
                                    "% * (1 - var(--progress))) calc("
                                  )
                                  .concat(
                                    ((1 - Y) / 2) * 100,
                                    "% * (1 - var(--progress))) round 1.8rem)"
                                  ),
                              },
                              children: [
                                (0, n.jsx)("div", {
                                  ref: j,
                                  className:
                                    "relative w-full h-full overflow-hidden",
                                  children: K
                                    ? (0, n.jsx)(l.Z, {
                                        field: r.primary.image_main,
                                        sizes:
                                          "(max-width: 768px) 100vw, 100vw",
                                        fallbackAlt: "",
                                        className: "w-full h-full object-cover",
                                      })
                                    : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                          r.primary.image_main.url &&
                                            (0, n.jsx)(l.Z, {
                                              field: r.primary.image_main,
                                              sizes:
                                                "(max-width: 768px) 100vw, 100vw",
                                              fallbackAlt: "",
                                              loading: "eager",
                                              priority: !0,
                                              className:
                                                "absolute top-0 left-0 w-full h-full object-cover",
                                            }),
                                          (0, n.jsx)("video", {
                                            onLoadedMetadata: () => {
                                              B(!0);
                                            },
                                            type: "video/mp4",
                                            ref: b,
                                            "data-src": r.primary.video.url,
                                            className:
                                              "w-full h-full object-cover hidden",
                                            muted: !0,
                                            playsInline: !0,
                                            preload: "auto",
                                            tabIndex: 0,
                                          }),
                                          (0, n.jsx)("div", {
                                            className: "scrolly-wrapper",
                                            ref: A,
                                          }),
                                        ],
                                      }),
                                }),
                                (0, n.jsxs)("div", {
                                  ref: C,
                                  onMouseEnter: () => X(0),
                                  onMouseLeave: () => X(1),
                                  className:
                                    "absolute bottom-[0.6rem] right-[0.6rem] md:bottom-[1.25rem] md:right-[1.25rem] w-[calc(100%_-_1.2rem)] md:w-[39rem] lg:w-[59rem] xl:w-[39rem] flex items-center bg-white p-[0.2rem] rounded-12 pointer-events-auto",
                                  children: [
                                    (0, n.jsx)("div", {
                                      ref: E,
                                      className:
                                        "relative w-[11.5rem] lg:w-[16rem] xl:w-[11rem] z-1",
                                      children: (0, n.jsx)("div", {
                                        className:
                                          "relative w-[200%] h-0 pt-[219%] rounded-10 overflow-hidden pointer-events-none",
                                        children: (0, n.jsx)("div", {
                                          ref: z,
                                          className:
                                            "absolute top-0 left-0 w-full h-full rounded-10 overflow-hidden",
                                          children: (0, n.jsx)("div", {
                                            ref: T,
                                            className:
                                              "absolute top-0 left-0 w-full h-full",
                                            children: (0, n.jsx)(l.Z, {
                                              field: r.primary.preview_image,
                                              sizes:
                                                "(max-width: 768px) 100vw, 20vw",
                                              fallbackAlt: "",
                                              className:
                                                "absolute top-0 left-0 w-full h-full object-cover",
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    (0, n.jsxs)("div", {
                                      className:
                                        "flex-1 pl-[1.2rem] md:pl-20 pr-20 md:pr-[3.4rem] py-[1.8rem] md:py-10",
                                      children: [
                                        r.primary.preview_suptitle &&
                                          (0, n.jsx)("div", {
                                            ref: R,
                                            className:
                                              "body-mono-10 mb-8 md:mb-12 text-dark_beige",
                                            children:
                                              r.primary.preview_suptitle,
                                          }),
                                        r.primary.preview_title &&
                                          (0, n.jsx)("div", {
                                            ref: _,
                                            className:
                                              "body-15 leading-[146%] -tracking-[0.015rem] md:text-16 md:leading-[150%] md:-tracking-[0.016rem] text-dark_grey",
                                            children: r.primary.preview_title,
                                          }),
                                        r.primary.preview_link &&
                                          (0, n.jsx)("div", {
                                            className:
                                              "mt-[3.2rem] md:mt-[5.5rem]",
                                            ref: k,
                                            children: (0, n.jsx)(o.Z, {
                                              field: r.primary.preview_link,
                                              title:
                                                r.primary.preview_link_title,
                                            }),
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full overflow-hidden",
                              children: (0, n.jsx)("div", {
                                ref: N,
                                className: "absolute bottom-10 left-10",
                                children: (0, n.jsx)(u, {
                                  title: r.primary.feature_name,
                                  icon: r.primary.feature_icon,
                                  progress: 0.5,
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          ref: x,
                          className:
                            "relative w-full pt-[66.4%] rounded-[1.8rem] overflow-hidden",
                          children: (0, n.jsx)("div", {
                            ref: g,
                            className: "absolute top-0 left-0 w-full h-full",
                            children: (0, n.jsx)(l.Z, {
                              field: r.primary.image_bottom,
                              sizes: "(max-width: 768px) 100vw, 30vw",
                              fallbackAlt: "",
                              className: "w-full h-full object-cover",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "absolute left-[1.25rem] top-[1.25rem] right-[1.25rem] bottom-[1.25rem] overflow-hidden rounded-[1.8rem] pointer-events-none",
                  }),
                ],
              }),
            ],
          });
        },
        h = (e) => {
          let { slice: r } = e,
            t = (0, i.useRef)(null),
            u = (0, i.useRef)(null),
            d = (0, i.useRef)(null),
            m = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(
              () => (
                window.innerWidth < 768 &&
                  a.p8.set(t.current, {
                    height: window.innerHeight - (0, c.z6)(16),
                  }),
                d.current &&
                  (d.current.addEventListener(
                    "play",
                    () => {
                      u.current && u.current.classList.add("opacity-0");
                    },
                    { once: !0 }
                  ),
                  (m.current = s.ScrollTrigger.create({
                    trigger: t.current,
                    onEnter: () => {
                      (d.current.currentTime = 0),
                        d.current.paused && d.current.play();
                    },
                    onLeave: () => {
                      d.current.paused || d.current.pause();
                    },
                    onLeaveBack: () => {
                      (d.current.currentTime = 0),
                        d.current.paused || d.current.pause();
                    },
                  }))),
                () => {
                  m.current && (m.current.kill(), (m.current = null));
                }
              ),
              []
            ),
            (0, n.jsx)("div", {
              className: "bg-dark_beige px-[0.6rem] py-[0.8rem]",
              children: (0, n.jsxs)("div", {
                ref: t,
                className:
                  "relative h-[100vw] rounded-13 overflow-hidden bg-light_beige dnone",
                children: [
                  (0, n.jsx)("div", {
                    className: "w-full h-full",
                    children: r.primary.video.url
                      ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              ref: u,
                              className:
                                "absolute left-0 top-0 w-full h-full z-1 transition-opacity duration-global ease-out",
                              children: (0, n.jsx)(l.Z, {
                                field: r.primary.image_main,
                                fallbackAlt: "",
                                className: "w-full h-full object-cover",
                                sizes: "96vw",
                              }),
                            }),
                            (0, n.jsx)("video", {
                              type: "video/mp4",
                              ref: d,
                              preload: "none",
                              src: r.primary.video.url,
                              className: "w-full h-full object-cover",
                              muted: !0,
                              playsInline: !0,
                            }),
                          ],
                        })
                      : (0, n.jsx)(l.Z, {
                          field: r.primary.image_main,
                          sizes: "(max-width: 768px) 100vw, 100vw",
                          fallbackAlt: "",
                          className: "w-full h-full object-cover",
                        }),
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "absolute bottom-[0.6rem] right-[0.6rem] md:bottom-[1.25rem] md:right-[1.25rem] w-[calc(100%_-_1.2rem)] md:w-[39rem] lg:w-[59rem] xl:w-[39rem] flex items-center bg-white p-[0.2rem] rounded-10 pointer-events-auto z-2",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "relative w-[11.5rem] lg:w-[16rem] xl:w-[11rem] z-1",
                        children: (0, n.jsx)("div", {
                          className:
                            "relative w-full h-0 pt-[168%] md:pt-[219%] pointer-events-none",
                          children: (0, n.jsx)(l.Z, {
                            field: r.primary.preview_image,
                            sizes: "(max-width: 768px) 100vw, 20vw",
                            fallbackAlt: "",
                            className:
                              "absolute top-0 left-0 w-full h-full object-cover rounded-[0.8rem]",
                          }),
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex-1 pl-[1.2rem] md:pl-20 pr-20 md:pr-[3.4rem] py-[1.8rem] md:py-10",
                        children: [
                          r.primary.preview_suptitle &&
                            (0, n.jsx)("div", {
                              className:
                                "font-body-mono text-10 leading-[180%] tracking-[0.05rem] uppercase mb-8 md:mb-12 text-dark_beige",
                              children: r.primary.preview_suptitle,
                            }),
                          r.primary.preview_title &&
                            (0, n.jsx)("div", {
                              className:
                                "body-15 leading-[146%] -tracking-[0.015rem] md:text-16 md:leading-[150%] md:-tracking-[0.016rem] text-dark_grey",
                              children: r.primary.preview_title,
                            }),
                          r.primary.preview_link &&
                            (0, n.jsx)("div", {
                              className: "mt-[3.2rem] md:mt-[5.5rem]",
                              children: (0, n.jsx)(o.Z, {
                                field: r.primary.preview_link,
                                title: r.primary.preview_link_title,
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        p = (e) => {
          let { slice: r, slices: t, index: l } = e,
            i = (0, m.a)("(max-width: 1200px)", !0);
          return (0, n.jsx)("section", {
            style: { zIndex: t.length - l },
            className: "relative",
            children: i
              ? (0, n.jsx)(h, { slice: r })
              : (0, n.jsx)(f, { slice: r }),
          });
        };
    },
  },
]);
