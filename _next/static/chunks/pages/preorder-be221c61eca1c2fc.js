(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [851],
  {
    7246: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/underconstruction",
        function () {
          return r(7345);
        },
      ]);
    },
    6132: function (e, t, r) {
      "use strict";
      var s = r(5893),
        a = r(9008),
        n = r.n(a);
      t.Z = (e) => {
        let { data: t } = e,
          r = t.meta_title
            ? t.meta_title
            : t.title
            ? "Apt 24® | ".concat(t.title)
            : "Apt 24® Mobility";
        return (0, s.jsxs)(n(), {
          children: [
            (0, s.jsx)("title", { children: r }),
            (0, s.jsx)("meta", { property: "og:title", content: r }, "title"),
            t.meta_description &&
              (0, s.jsx)("meta", {
                name: "description",
                content: t.meta_description,
              }),
            t.meta_image &&
              t.meta_image.url &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("meta", {
                    property: "og:image",
                    content: t.meta_image.url,
                  }),
                  (0, s.jsx)("meta", {
                    property: "og:image:type",
                    content: "image/jpg",
                  }),
                  (0, s.jsx)("meta", {
                    property: "og:image:width",
                    content: t.meta_image.dimensions.width,
                  }),
                  (0, s.jsx)("meta", {
                    property: "og:image:height",
                    content: t.meta_image.dimensions.height,
                  }),
                ],
              }),
            (0, s.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, s.jsx)("meta", { name: "theme-color", content: "#d7d1c6" }),
            (0, s.jsx)("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1, maximum-scale=1",
            }),
          ],
        });
      };
    },
    6009: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return m;
        },
      });
      var s = r(5893),
        a = r(8266),
        n = r(7294),
        l = r(6038),
        i = r(1831),
        d = () =>
          (0, s.jsxs)("svg", {
            width: "286",
            height: "286",
            viewBox: "0 0 286 286",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, s.jsxs)("g", {
                clipPath: "url(#clip0_4489_62323)",
                children: [
                  (0, s.jsxs)("mask", {
                    id: "mask0_4489_62323",
                    style: { maskType: "alpha" },
                    maskUnits: "userSpaceOnUse",
                    x: "18",
                    y: "-49",
                    width: "271",
                    height: "203",
                    children: [
                      (0, s.jsx)("rect", {
                        x: "224",
                        y: "14.5488",
                        width: "194.476",
                        height: "73.7032",
                        transform: "rotate(149.564 224 14.5488)",
                        fill: "url(#paint0_linear_4489_62323)",
                      }),
                      (0, s.jsx)("rect", {
                        x: "167",
                        y: "-19",
                        width: "122",
                        height: "173",
                        fill: "#D9D9D9",
                      }),
                    ],
                  }),
                  (0, s.jsx)("g", {
                    mask: "url(#mask0_4489_62323)",
                    children: (0, s.jsx)("path", {
                      opacity: "0.15",
                      d: "M20.6185 72.2329C36.1479 45.2009 60.1697 24.0541 88.9524 12.0774C117.735 0.100734 149.667 -2.0354 179.789 6.00087C209.91 14.0371 236.535 31.7959 255.526 56.5185C274.518 81.2412 284.813 111.544 284.813 142.719",
                      stroke: "#575349",
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("defs", {
                children: [
                  (0, s.jsxs)("linearGradient", {
                    id: "paint0_linear_4489_62323",
                    x1: "418.476",
                    y1: "88.252",
                    x2: "224",
                    y2: "88.252",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, s.jsx)("stop", {
                        stopColor: "#F2EFE9",
                        stopOpacity: "0",
                      }),
                      (0, s.jsx)("stop", { offset: "1", stopColor: "#F2EFE9" }),
                    ],
                  }),
                  (0, s.jsx)("clipPath", {
                    id: "clip0_4489_62323",
                    children: (0, s.jsx)("rect", {
                      width: "286",
                      height: "286",
                      fill: "white",
                    }),
                  }),
                ],
              }),
            ],
          }),
        o = r(4319),
        c = r(6546),
        u = r(4508),
        m = (e) => {
          let {
              index: t,
              slicesLength: r = 1,
              simple: m = !1,
              children: h,
            } = e,
            x = (0, n.useRef)(),
            p = (0, n.useRef)(),
            f = (0, n.useRef)(),
            g = (0, n.useRef)(),
            w = (0, n.useRef)(),
            j = (0, n.useRef)(),
            v = (0, n.useRef)(),
            b = (0, n.useRef)(),
            y = (0, n.useRef)(),
            _ = (0, n.useRef)(),
            N = (0, n.useRef)(0),
            C = (0, u.LZ)(),
            k = (0, a.o)((e) => e.startTransition),
            P = (0, a.o)((e) => e.setIsAppear),
            E = (0, a.o)((e) => e.isLoaded),
            S = (0, a.o)((e) => e.isFirstLoaded),
            A = () => {
              b.current &&
                l.p8.set(b.current, {
                  x: window.innerWidth / 2 - 42 - 5,
                  y: window.innerHeight / 2 - 40.5,
                  transformOrigin: "center",
                  rotate: 180,
                  scale: 0,
                });
            },
            R = function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = document.querySelector(".fade");
              t.classList.remove("opacity-0");
              let r = l.p8.timeline({
                delay: e ? 0.5 : 0.2,
                onStart: () => {
                  if (e) {
                    let e = document.querySelector(".loader");
                    e && l.p8.set(e, { autoAlpha: 0 });
                  }
                },
                onComplete: () => {
                  window.dispatchEvent(new CustomEvent("is-appeared")),
                    C && C.start(),
                    c.ScrollTrigger.refresh();
                },
              });
              r.fromTo(
                t,
                { autoAlpha: 1 },
                { autoAlpha: 0, duration: 0.4, ease: "power2.out" },
                0
              ).call(
                () => {
                  P(!0);
                },
                [],
                0
              );
            },
            L = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              A();
              let t = document.querySelector(".fade"),
                r = document.querySelector(".loader");
              v.current.classList.remove("hidden");
              let s = window.innerWidth / 83,
                a = window.innerHeight / 80,
                n = f.current.querySelectorAll("path"),
                i = l.p8.timeline({
                  delay: 0.1,
                  onStart: () => {
                    l.p8.set([t, r], { autoAlpha: 0 });
                  },
                  onComplete: () => {
                    window.dispatchEvent(new CustomEvent("is-appeared")),
                      C && C.start(),
                      c.ScrollTrigger.refresh(),
                      e &&
                        window.dispatchEvent(
                          new CustomEvent("introduction-complete")
                        ),
                      p.current && (p.current.style.clipPath = null),
                      v.current.classList.add("hidden"),
                      y.current.classList.add("hidden");
                  },
                });
              i.addLabel("start", e ? 0.8 : 0),
                e &&
                  i.fromTo(
                    N,
                    { current: 0 },
                    {
                      current: 100,
                      ease: "linear",
                      duration: 2.3,
                      onUpdate: () => {
                        _.current.innerHTML =
                          N.current < 100
                            ? "0" + Math.round(N.current)
                            : Math.round(N.current);
                      },
                    },
                    0
                  ),
                i
                  .fromTo(
                    f.current,
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
                    n,
                    { scale: 0.1 },
                    { scale: 1, ease: "expo.out", duration: 0.95 },
                    "start+=0.12"
                  )
                  .fromTo(
                    g.current,
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
                    w.current,
                    { rotate: -100 },
                    { rotate: 350, ease: "slow(0.1, 0.7)", duration: 1.9 },
                    "start+=0.2"
                  )
                  .fromTo(
                    j.current,
                    { rotate: -150 },
                    { rotate: 110, ease: "slow(0.2, 0.6)", duration: 1.7 },
                    "start+=0.3"
                  )
                  .fromTo(
                    b.current,
                    { rotate: 180, scale: 0 },
                    {
                      scale: (s > a ? s : a) + 6,
                      rotate: "+=130",
                      duration: 1.8,
                      ease: "expo.inOut",
                    },
                    "start+=1.2"
                  )
                  .to(
                    [g.current, f.current],
                    { autoAlpha: 0, ease: "power2.out", duration: 0.4 },
                    "<30%"
                  )
                  .call(
                    () => {
                      P(!0);
                    },
                    [],
                    "start+=1.65"
                  );
            };
          return (
            (0, n.useEffect)(() => {
              l.p8.registerPlugin(o.SlowMo),
                S && y.current && y.current.classList.add("hidden");
            }, []),
            (0, n.useEffect)(() => {
              E && !S ? (C && C.stop(), x.current ? R(!0) : L(!0)) : E || A();
            }, [E, S]),
            (0, n.useEffect)(() => {
              if (x.current) {
                R();
                return;
              }
              k && L();
            }, [k]),
            0 !== t || m
              ? (0, s.jsx)("div", {
                  ref: x,
                  className: "simple-transition-path",
                  children: h,
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                      children: (0, s.jsx)("div", {
                        ref: f,
                        className: "svg-wrapper w-[4.267rem]",
                        children: (0, s.jsxs)("svg", {
                          width: "56",
                          height: "50",
                          viewBox: "0 0 56 50",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, s.jsx)("path", {
                              d: "M40.565 15.0573C36.9268 17.6142 32.6423 19.102 28.1985 19.3514H27.9062C23.4275 19.0849 19.1111 17.5827 15.4385 15.0125C12.5943 13.1513 8.90682 10.3484 9.23285 6.43554C9.45769 3.74473 12.3919 2.42176 14.5842 1.74906C15.506 1.46877 16.4391 1.23332 17.3722 1.04272C24.0175 -0.257846 30.8455 -0.333841 37.5183 0.818491H37.6082C38.6313 1.00909 39.6543 1.23332 40.6886 1.5024L41.543 1.74906C43.7353 2.42176 46.6695 3.74473 46.8943 6.43554C47.2316 10.3484 43.3305 13.1626 40.4862 15.0573H40.565Z",
                              fill: "#D7D1C6",
                            }),
                            (0, s.jsx)("path", {
                              d: "M12.5493 17.6362C16.7717 19.4085 20.4376 22.2821 23.162 25.9552L23.2407 26.0674L23.3306 26.2019C25.6353 29.8457 26.2311 34.4761 26.2536 38.8263C26.2536 42.2458 25.6353 47.1453 22.5661 48.7822C20.194 50.0267 17.5071 48.3113 15.7533 46.8202C15.0226 46.2035 14.3143 45.5421 13.6398 44.8581C8.91013 39.9371 5.10259 34.2109 2.39755 27.9509V27.8724C1.99283 26.9082 1.61059 25.9216 1.27333 24.9013C1.18339 24.621 1.09347 24.3296 1.01478 24.0381C0.362728 21.7957 -0.109461 18.6228 1.94787 16.9523C5.00576 14.5193 9.50266 16.2571 12.6055 17.6362H12.5493Z",
                              fill: "#D7D1C6",
                            }),
                            (0, s.jsx)("path", {
                              d: "M43.6228 17.6362C39.3954 19.4053 35.725 22.2794 32.9988 25.9552L32.9202 26.0674L32.8302 26.2019C30.5256 29.8457 29.9297 34.4761 29.9072 38.8263C29.9072 42.2458 30.5255 47.1453 33.5947 48.7822C35.9668 50.0267 38.6537 48.3113 40.4075 46.8202C41.1382 46.2035 41.8465 45.5421 42.521 44.8581C47.2549 39.9404 51.0629 34.2135 53.7633 27.9509V27.8724C54.168 26.9082 54.5502 25.9216 54.8875 24.9013L55.1573 24.0381C55.8094 21.7957 56.2815 18.6228 54.213 16.9523C51.1551 14.5193 46.6582 16.2571 43.5666 17.6362H43.6228Z",
                              fill: "#D7D1C6",
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      ref: g,
                      className:
                        "absolute top-1/2 left-1/2 w-[28.4rem] h-[28.4rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "absolute w-full h-full",
                          ref: w,
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                              children: (0, s.jsx)(i.Z, { color: "#A39B8B" }),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                              children: (0, s.jsx)(d, {}),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "absolute w-full h-full rounded-full",
                          ref: j,
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                              children: (0, s.jsx)(i.Z, { color: "#A39B8B" }),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                              children: (0, s.jsx)(d, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      ref: y,
                      className:
                        "absolute left-1/2 bottom-[3.5rem] -translate-x-1/2 text-10 leading-[1.8rem] tracking-[0.05rem] font-body-mono",
                      children: [
                        (0, s.jsx)("span", { ref: _, children: "000" }),
                        (0, s.jsx)("span", { children: "/" }),
                        (0, s.jsx)("span", { children: "100" }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      style: {
                        clipPath: "url(#svgPath)",
                        backfaceVisibility: "hidden",
                        transform: "translate3d(0, 0, 0)",
                        zIndex: r - t,
                      },
                      ref: p,
                      className: "transition-path relative",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "absolute top-0 left-0 w-full h-screen pointer-events-none",
                          children: (0, s.jsx)("div", {
                            ref: v,
                            className:
                              "absolute top-0 left-0 w-full h-full hidden z-1",
                            children: (0, s.jsx)("svg", {
                              width: "84",
                              height: "81",
                              className: "w-full h-full",
                              children: (0, s.jsx)("defs", {
                                children: (0, s.jsx)("clipPath", {
                                  id: "svgPath",
                                  children: (0, s.jsx)("path", {
                                    ref: b,
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
    9293: function (e, t, r) {
      "use strict";
      var s = r(5893);
      t.Z = (e) => {
        let { stroke: t = "#575349" } = e;
        return (0, s.jsx)("svg", {
          width: "11",
          height: "9",
          viewBox: "0 0 11 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, s.jsx)("path", {
            id: "Vector 201",
            d: "M0 4.5H9.5M9.5 4.5L5.9 1M9.5 4.5L5.9 8",
            stroke: t,
          }),
        });
      };
    },
    7345: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return k;
          },
          default: function () {
            return P;
          },
        });
      var s = r(5893),
        a = r(4465),
        n = r(6664),
        l = r(7294),
        i = r(8266),
        d = (e) => {
          let { isSubmit: t, addressRef: r } = e,
            a = (0, n.useStripe)(),
            d = (0, n.useElements)(),
            [o, c] = (0, l.useState)(null),
            u = (0, i.o)((e) => e.setIsLoading),
            m = (0, i.o)((e) => e.setSubmitting),
            h = async () => {
              if (!a || !d) return;
              u(!0);
              let { error: e } = await a.confirmPayment({
                elements: d,
                confirmParams: {
                  payment_method_data: { billing_details: r.billing_details },
                  return_url: "https://pebblelife.com/thank-you",
                  receipt_email: t,
                },
              });
              "card_error" === e.type || "validation_error" === e.type
                ? c(e.message)
                : c("An unexpected error occurred."),
                m(!1),
                u(!1);
            };
          return (
            (0, l.useEffect)(() => {
              t && h();
            }, [t]),
            (0, s.jsxs)("div", {
              className: "relative",
              children: [
                (0, s.jsx)("div", {
                  children: (0, s.jsx)(n.PaymentElement, {
                    id: "payment-element",
                    options: {
                      layout: "tabs",
                      fields: { billingDetails: "never" },
                    },
                  }),
                }),
                o && (0, s.jsx)("div", { id: "payment-message", children: o }),
              ],
            })
          );
        },
        o = r(26),
        c = r(3297),
        u = r(9293),
        m = r(1831),
        h = r(187),
        x = r(4179);
      let p = {
        hyperlink: (e) => {
          let { children: t, node: r } = e;
          return (0, s.jsx)(x.Z, { field: r.data, children: t });
        },
      };
      function f(e) {
        let { components: t, ...r } = e;
        return (0, s.jsx)(h.v, { components: { ...p, ...t }, ...r });
      }
      var g = r(9010),
        w = r(6038),
        j = (e) => {
          let { children: t, toggle: r, hidden: a, index: n } = e,
            i = (0, l.useRef)(null),
            d = (0, l.useRef)(null),
            o = (0, l.useRef)(!0);
          return (
            (0, l.useEffect)(() => {
              w.ZP.set(i.current, { opacity: 0 });
            }, []),
            (0, l.useEffect)(() => {
              a && i.current.classList.add("hidden");
            }, [a]),
            (0, l.useEffect)(() => {
              if (o.current && !r && n > 1) {
                o.current = !1;
                return;
              }
              d.current = w.ZP.to(i.current, {
                opacity: r ? 1 : 0,
                delay: r ? 0.35 : 0,
                duration: 0.35,
                ease: "power2.out",
                onStart: () => {
                  r && i.current.classList.remove("hidden", "h-0");
                },
                onComplete: () => {
                  r || i.current.classList.add("hidden");
                },
              });
            }, [r]),
            (0, s.jsx)("div", {
              ref: i,
              className: "relative w-full opacity-0",
              children: t,
            })
          );
        },
        v = r(2099),
        b = () =>
          (0, s.jsx)("svg", {
            width: "10",
            height: "8",
            viewBox: "0 0 10 8",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
              id: "Vector 207",
              d: "M1 4.34045L3.66016 7.00159L9.40784 1.25391",
              stroke: "#575349",
            }),
          });
      let y = (0, l.forwardRef)((e, t) => {
        let r = (0, n.useElements)(),
          a = (0, l.useRef)({}),
          i = (0, l.useRef)({}),
          d = (0, l.useRef)(!1),
          o = (0, l.useRef)(!1),
          [c, u] = (0, l.useState)("");
        (0, l.useImperativeHandle)(t, () => ({
          domElt: t,
          billing_details: { ...a.current, email: i.current },
          validate: m,
        }));
        let m = () =>
          new Promise((e) => {
            let t = r.getElement("address");
            d.current || i.current || u("Your email address is invalid."),
              t.getValue().then((t) => {
                (a.current = t.value), e(t.complete && d.current);
              });
          });
        return (0, s.jsxs)("div", {
          ref: t,
          children: [
            (0, s.jsx)(n.LinkAuthenticationElement, {
              onFocus: () => {
                u("");
              },
              onChange: (e) => {
                (d.current = e.complete), (i.current = e.value.email);
              },
              id: "link-authentication-element",
            }),
            (0, s.jsx)("div", {
              ref: o,
              className:
                "message mt-[2.5px] text-[#df1b41] text-[13px] font-['Arial']",
              children: c,
            }),
            (0, s.jsx)(n.AddressElement, {
              options: {
                mode: "shipping",
                fields: { phone: "always" },
                allowedCountries: ["US"],
                validation: { phone: { required: "always" } },
              },
            }),
          ],
        });
      });
      y.displayName = "AddressElementObject";
      var _ = r(6009),
        N = r(6132);
      let C = (0, a.J)(
        "pk_live_51NxzwrBgcFARCOz6AYyp2prrpl4hapuxXbQzERJNLisEiOPMuEATuIWk2D0Kwtd4AmSOpRbI1aQsUefAR9qPIWwI00iBPGE6QO"
      );
      var k = !0;
      function P(e) {
        let { page: t } = e,
          [r, a] = (0, l.useState)(),
          [h, p] = (0, l.useState)(""),
          k = (0, i.o)((e) => e.setHeaderVisible),
          P = (0, l.useRef)(null),
          E = (0, l.useRef)(null),
          [S, A] = (0, l.useState)(!1),
          R = (0, l.useRef)(!1),
          L = (0, l.useRef)(null),
          Z = (0, l.useRef)(null),
          T = (0, l.useRef)(null),
          O = (0, l.useRef)(null),
          q = (0, l.useRef)(null),
          I = (0, l.useRef)(null),
          B = (0, l.useRef)(null),
          [D, M] = (0, l.useState)(!0),
          [F, H] = (0, l.useState)(!1),
          [z, U] = (0, l.useState)(!1),
          V = (0, i.o)((e) => e.currentStep),
          J = (0, i.o)((e) => e.setCurrentStep),
          G = (0, i.o)((e) => e.isSubmitting),
          W = (0, i.o)((e) => e.setSubmitting),
          Q = (0, i.o)((e) => e.isLoading);
        (0, l.useEffect)(() => {
          L.current &&
            (1 === V
              ? (M(!0),
                H(!1),
                Z.current.classList.remove("hidden"),
                T.current.classList.add("hidden"))
              : 2 === V &&
                (H(!0),
                U(!1),
                T.current.classList.remove("hidden"),
                O.current.classList.add("hidden"))),
            X(V),
            1 !== V
              ? ((0, v.RE)(E.current),
                (E.current = w.ZP.to(q.current, {
                  autoAlpha: 1,
                  ease: "power2.out",
                  duration: 0.4,
                })))
              : ((0, v.RE)(E.current),
                (E.current = w.ZP.to(q.current, {
                  autoAlpha: 0,
                  ease: "power2.out",
                  duration: 0.4,
                })));
        }, [V]),
          (0, l.useEffect)(
            () => (
              w.ZP.set(q.current, { autoAlpha: 0 }),
              k(!1),
              fetch("/api/get-price", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  items: [{ id: "prod_OqB1qreekZEncw" }],
                }),
              })
                .then((e) => e.json())
                .then((e) => {
                  p("$" + e.price / 100);
                }),
              () => {
                k(!0);
              }
            ),
            []
          );
        let X = (e) => {
          switch (e) {
            case 2:
              void 0 !== window.gtag &&
                window.gtag("event", "Preorder Continue"),
                void 0 !== window.fbq &&
                  fbq("trackCustom", "Preorder Continue"),
                void 0 !== window.rdt &&
                  rdt("track", "Custom", {
                    customEventName: "Preorder Continue",
                  });
              break;
            case 3:
              void 0 !== window.gtag &&
                window.gtag("event", "Preorder Add Personal Details"),
                void 0 !== window.fbq &&
                  fbq("trackCustom", "Preorder Add Personal Details"),
                void 0 !== window.rdt &&
                  rdt("track", "Custom", {
                    customEventName: "Preorder Add Personal Details",
                  });
          }
        };
        return (
          (0, l.useEffect)(() => {
            L.current ||
              2 !== V ||
              fetch("/api/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  items: [{ id: "prod_OqB1qreekZEncw" }],
                }),
              })
                .then((e) => e.json())
                .then((e) => {
                  a(e.clientSecret),
                    setTimeout(() => {
                      (0, v.RE)(P.current),
                        (P.current = w.ZP.to(I.current, {
                          autoAlpha: 0,
                          ease: "power2.out",
                          duration: 0.3,
                        })),
                        M(!1),
                        H(!0),
                        setTimeout(() => {
                          A(!0);
                        }, 1500),
                        Z.current.classList.add("hidden"),
                        T.current.classList.remove("hidden");
                    }, 500);
                });
          }, [V]),
          (0, s.jsxs)(_.Z, {
            index: 0,
            children: [
              (0, s.jsx)(N.Z, { data: t.data }),
              (0, s.jsxs)("div", {
                className:
                  "pre-order p-half-container flex gap-x-[0.4rem] min-h-screen xl:min-h-[650px] xl:h-screen bg-light_beige",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "relative flex-1 bg-white rounded-18 overflow-hidden hidden xl:block",
                    children: [
                      (0, s.jsx)(o.Z, {
                        field: t.data.image,
                        fallbackAlt: "",
                        sizes: "(max-width: 768px) 63.5vw, 63.5vw",
                        loading: "eager",
                        priority: !0,
                        className: "w-full h-full object-cover",
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "absolute bottom-[5rem] left-0 w-full flex justify-center items-center text-center gap-x-[8rem] body-mono-12 text-white",
                        children: [
                          t.data.text_image_left &&
                            (0, s.jsxs)("div", {
                              className: "flex flex-col items-center",
                              children: [
                                (0, s.jsx)(f, {
                                  field: t.data.text_image_left,
                                }),
                                t.data.icon_left &&
                                  (0, s.jsx)("div", {
                                    className: "mt-[1.3rem]",
                                    children: (0, s.jsx)(o.Z, {
                                      field: t.data.icon_left,
                                      fallbackAlt: "",
                                      className: "w-full h-auto",
                                    }),
                                  }),
                              ],
                            }),
                          t.data.text_image_right &&
                            (0, s.jsxs)("div", {
                              className: "flex flex-col items-center",
                              children: [
                                (0, s.jsx)(f, {
                                  field: t.data.text_image_right,
                                }),
                                t.data.icon_right &&
                                  (0, s.jsx)("div", {
                                    className: "mt-[1.3rem]",
                                    children: (0, s.jsx)(o.Z, {
                                      field: t.data.icon_right,
                                      fallbackAlt: "",
                                      className: "w-full h-auto",
                                    }),
                                  }),
                              ],
                            }),
                        ],
                      }),
                      (0, s.jsx)(x.Z, {
                        href: "/",
                        className:
                          "justify-center items-center absolute top-1/2 -translate-y-1/2 right-[1rem] hidden xl:flex w-[6.6rem] h-[6.6rem] rounded-12 cursor-pointer bg-white transition-transform duration-global ease-out xl:hover:scale-[1.05]",
                        children: (0, s.jsx)("div", {
                          className: "svg-wrapper w-[1rem]",
                          children: (0, s.jsx)("span", {
                            className: "block w-full h-full",
                            children: (0, s.jsx)(g.Z, {}),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("form", {
                    id: "payment-form",
                    onSubmit: (e) => {
                      e.preventDefault(),
                        void 0 !== window.gtag &&
                          window.gtag(
                            "event",
                            "Preorder API (Add Payment Info)"
                          ),
                        void 0 !== window.fbq &&
                          fbq("trackCustom", "Preorder API (Add Payment Info)"),
                        void 0 !== window.rdt &&
                          rdt("track", "Custom", {
                            customEventName: "Preorder API (Add Payment Info)",
                          }),
                        R.current &&
                          R.current.checked &&
                          fetch("/api/subscribe", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              items: [
                                { mail: B.current.billing_details.email },
                              ],
                            }),
                          }),
                        W(B.current.billing_details.email);
                    },
                    className:
                      "relative w-full xl:w-[36.5%] min-h-[calc(100vh_-_2rem)] h-full rounded-18 bg-white flex flex-col items-center",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "absolute top-0 right-0 w-full h-full bg-dots bg-size-dots bg-repeat opacity-40 pointer-events-none",
                      }),
                      (0, s.jsx)("div", {
                        onClick: () => {
                          (L.current = !0), J(V - 1);
                        },
                        ref: q,
                        className:
                          "flex justify-center items-center absolute top-[0.6rem] left-[0.6rem] xl:top-[3rem] xl:left-[3rem] w-[5.6rem] h-[5.6rem] xl:w-[4rem] xl:h-[4rem] border-px border-light_beige rounded-12 cursor-pointer transition-transform duration-global ease-out xl:hover:scale-[1.05]",
                        children: (0, s.jsx)("div", {
                          className: "svg-wrapper w-[1.5rem] xl:w-[1.3rem]",
                          children: (0, s.jsx)("span", {
                            className: "block w-full h-full rotate-180",
                            children: (0, s.jsx)(u.Z, {}),
                          }),
                        }),
                      }),
                      (0, s.jsx)(x.Z, {
                        href: "/",
                        className:
                          "flex justify-center items-center absolute top-[0.6rem] right-[0.6rem] xl:hidden w-[5.6rem] h-[5.6rem] rounded-12 cursor-pointer bg-light_beige",
                        children: (0, s.jsx)("div", {
                          className: "svg-wrapper w-[1rem]",
                          children: (0, s.jsx)("span", {
                            className: "block w-full h-full",
                            children: (0, s.jsx)(g.Z, {}),
                          }),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex flex-col items-center px-[1.7rem] md:px-30 pt-[8rem] md:pt-[10.4rem] pb-[2.1rem]",
                        children: [
                          (0, s.jsx)("span", {
                            className: "svg-wrapper w-[3.14rem]",
                            children: (0, s.jsx)(c.Z, { fill: "#575349" }),
                          }),
                          (0, s.jsx)("h1", {
                            className:
                              "heading-44 text-dark_grey font-medium mt-[1.23rem]",
                            children: t.data.title,
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "w-full flex-1 xl:overflow-y-scroll u-nsb px-[1.7rem] md:px-30 pt-[6rem] md:pt-[7.2rem] pb-[4.8rem] md:pb-[7.5rem]",
                        "data-lenis-prevent": !0,
                        children: [
                          (0, s.jsxs)(j, {
                            toggle: D,
                            index: 1,
                            children: [
                              (0, s.jsx)("div", {
                                ref: I,
                                className:
                                  "absolute top-0 left-0 w-full h-full bg-white opacity-0 pointer-events-none z-1",
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "bg-light_beige px-20 py-[3.2rem] md:py-40 rounded-12",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex flex-col md:flex-row items-start md:justify-between md:items-center",
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className:
                                          "flex items-center text-20 leading-[96%] -tracking-[0.02rem] font-headings text-dark_grey",
                                        children: [
                                          (0, s.jsx)("span", {
                                            children: t.data.product_title,
                                          }),
                                          t.data.price &&
                                            (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                (0, s.jsx)("span", {
                                                  className:
                                                    "inline-block w-[0.4rem] h-[0.4rem] rounded-full bg-dark_grey mx-[0.6rem]",
                                                }),
                                                (0, s.jsx)("span", {
                                                  children: t.data.price,
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "text-14 leading-[2rem] tracking-[0.014rem] text-dark_grey mt-12 md:ml-[3.5rem] md:mt-0",
                                        children: t.data.informative_text,
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "w-full h-px bg-dark_grey opacity-10 my-[2.4rem]",
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "text-14 text-dark_grey",
                                    children: (0, s.jsx)(f, {
                                      field: t.data.product_description,
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "mt-10 rounded-12 border-px border-light_beige px-20 py-[2.4rem] md:py-40 flex flex-col md:flex-row items-start md:items-center md:justify-between text-14 leading-[2rem] tracking-[0.014rem] text-dark_grey",
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "",
                                    children: t.data.delivery_time,
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "mt-8 md:mt-0",
                                    children: t.data.availability_text,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r &&
                            (0, s.jsxs)(n.Elements, {
                              options: {
                                clientSecret: r,
                                appearance: {
                                  labels: "floating",
                                  variables: {
                                    fontFamily: "Youth, sans-serif",
                                    fontSizeBase: "14px",
                                    colorText: "#575349",
                                    spacingGridRow: "2rem",
                                  },
                                  rules: {
                                    ".Label--resting": {
                                      transform: "translate(1rem, 0)",
                                    },
                                    ".Input": {
                                      backgroundColor: "transparent",
                                      boxShadow: "none",
                                      borderRadius: 0,
                                      border: "none",
                                      color: "var(--colorText)",
                                      borderBottom:
                                        "1px solid rgba(87, 83, 73, 0.15)",
                                      padding: "1rem 0",
                                      outline: "none",
                                    },
                                    ".Input--invalid": { boxShadow: "none" },
                                    ".Input:focus": {
                                      boxShadow: "none",
                                      outline: "none",
                                      border: "none",
                                      borderBottom:
                                        "1px solid rgba(87, 83, 73, 0.15)",
                                    },
                                  },
                                },
                              },
                              stripe: C,
                              children: [
                                (0, s.jsxs)(j, {
                                  toggle: F,
                                  index: 2,
                                  children: [
                                    (0, s.jsx)(y, { ref: B }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "flex items-center mt-[5.6rem] body-14 text-dark_grey",
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className:
                                            "relative w-[2.4rem] h-[2.4rem]",
                                          children: [
                                            (0, s.jsx)("input", {
                                              ref: R,
                                              className:
                                                "newsletter-checkbox w-full h-full bg-transparent border-px border-dark_grey/[0.15] rounded-[0.4rem] appearance-none cursor-pointer",
                                              type: "checkbox",
                                              id: "newsletter",
                                              name: "newsletter",
                                            }),
                                            (0, s.jsx)("div", {
                                              className:
                                                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1rem] svg-wrapper opacity-0",
                                              children: (0, s.jsx)(b, {}),
                                            }),
                                          ],
                                        }),
                                        (0, s.jsx)("label", {
                                          htmlFor: "newsletter",
                                          className:
                                            "ml-[1.25rem] cursor-pointer",
                                          children: t.data.newsletter_text,
                                        }),
                                      ],
                                    }),
                                    (0, s.jsx)("div", {}),
                                    (0, s.jsx)("div", {}),
                                    (0, s.jsx)("div", {
                                      className:
                                        "text-10 leading-[1.5rem] text-dark_grey mt-[5.8rem]",
                                      children: (0, s.jsx)(f, {
                                        field: t.data.terms_text,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)(j, {
                                  toggle: z,
                                  hidden: S,
                                  index: 3,
                                  children: [
                                    (0, s.jsx)(d, {
                                      addressRef: B.current,
                                      data: t.data,
                                      price: h,
                                      clientSecret: r,
                                      isSubmit: G,
                                    }),
                                    (0, s.jsx)("div", {
                                      className:
                                        "text-10 leading-[1.5rem] text-dark_grey mt-[5.8rem]",
                                      children: (0, s.jsx)(f, {
                                        field: t.data.terms_text,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "w-full px-[1.7rem] md:px-30 pb-[2.1rem] md:pb-30",
                        children: (0, s.jsxs)("div", {
                          className:
                            "relative w-full flex flex-col border-x-px border-light_beige",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "relative flex justify-between font-headings text-dark_grey text-20 px-[0.6rem] py-20 border-b-px border-light_beige",
                              children: [
                                (0, s.jsx)("span", {
                                  children: t.data.due_today_text,
                                }),
                                (0, s.jsx)("span", { children: h }),
                                (0, s.jsx)("div", {
                                  className:
                                    "svg-wrapper absolute bottom-0 left-0 w-[0.8rem] -translate-x-[0.45rem] translate-y-[0.55rem]",
                                  children: (0, s.jsx)(m.Z, {}),
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "svg-wrapper absolute bottom-0 right-0 w-[0.8rem] translate-x-[0.45rem] translate-y-[0.55rem]",
                                  children: (0, s.jsx)(m.Z, {}),
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "relative w-full px-[0.6rem] mt-[0.6rem]",
                              children: (0, s.jsxs)("div", {
                                className: "relative",
                                children: [
                                  (0, s.jsx)("div", {
                                    ref: Z,
                                    onClick: () => {
                                      (L.current = !1),
                                        J(2),
                                        (P.current = w.ZP.to(I.current, {
                                          autoAlpha: 0.7,
                                          ease: "power2.out",
                                          duration: 0.3,
                                        }));
                                    },
                                    className:
                                      "w-full rounded-10 py-[2rem] bg-dark_beige text-white text-center font-body-mono uppercase cursor-pointer hover:bg-dark_beige/[0.85] transition-bg duration-global ease-out",
                                    children: (0, s.jsx)("span", {
                                      id: "button-text",
                                      children: t.data.step_one_button_title,
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    ref: T,
                                    onClick: () => {
                                      (L.current = !1),
                                        B.current.validate().then((e) => {
                                          e &&
                                            (J(3),
                                            T.current.classList.add("hidden"),
                                            O.current.classList.remove(
                                              "hidden"
                                            ),
                                            H(!1),
                                            U(!0));
                                        });
                                    },
                                    className:
                                      "w-full rounded-10 py-[2rem] bg-dark_beige text-white text-center font-body-mono uppercase cursor-pointer hidden hover:bg-dark_beige/[0.85] transition-bg duration-global ease-out",
                                    children: (0, s.jsx)("span", {
                                      id: "button-text",
                                      children: t.data.step_two_button_title,
                                    }),
                                  }),
                                  (0, s.jsx)("button", {
                                    ref: O,
                                    className:
                                      "rounded-10 w-full py-[2rem] bg-dark_beige text-white font-body-mono uppercase hidden hover:bg-dark_beige/[0.85] transition-bg duration-global ease-out",
                                    id: "submit",
                                    children: (0, s.jsx)("span", {
                                      id: "button-text",
                                      children: Q
                                        ? "Loading"
                                        : t.data.step_three_button_title,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [310, 774, 888, 179], function () {
      return e((e.s = 7246));
    }),
      (_N_E = e.O());
  },
]);
