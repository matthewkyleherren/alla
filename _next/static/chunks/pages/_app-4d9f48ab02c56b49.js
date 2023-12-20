(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    26: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return h;
        },
      });
      var n = r(5893),
        i = r(5675),
        s = r.n(i);
      let o = (t) => t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`),
        a = (t, e) => {
          let r = new URL(t);
          for (let t in e) {
            let n = o(t),
              i = e[t];
            void 0 === i
              ? r.searchParams.delete(n)
              : Array.isArray(i)
              ? r.searchParams.set(n, i.join(","))
              : r.searchParams.set(n, `${i}`);
          }
          let n = r.searchParams.get("s");
          return (
            n && (r.searchParams.delete("s"), r.searchParams.append("s", n)),
            r.toString()
          );
        },
        u = (t) => {
          let e = new URL(t.src),
            r = {
              fit: e.searchParams.get("fit") || "max",
              w: t.width,
              h: void 0,
            };
          return t.quality && (r.q = t.quality), a(t.src, r);
        };
      var l = r(5118);
      let c = (t) => {
          if ("number" == typeof t || void 0 === t) return t;
          {
            let e = Number.parseInt(t);
            if (Number.isNaN(e)) return;
            return e;
          }
        },
        h = ({
          field: t,
          imgixParams: e = {},
          alt: r,
          fallbackAlt: i,
          fill: o,
          width: h,
          height: f,
          fallback: d = null,
          ...p
        }) => {
          if (!(0, l.S)(t)) return (0, n.jsx)(n.Fragment, { children: d });
          {
            for (let t in e) null === e[t] && (e[t] = void 0);
            let l = a(t.url, e),
              d = t.dimensions.width / t.dimensions.height,
              m = c(h),
              g = c(f),
              _ = m ?? t.dimensions.width,
              v = g ?? t.dimensions.height;
            null != m && null == g
              ? (v = m / d)
              : null == m && null != g && (_ = g * d);
            let y = r ?? (t.alt || i),
              w = s();
            return (
              "default" in w && (w = w.default),
              (0, n.jsx)(w, {
                src: l,
                width: o ? void 0 : _,
                height: o ? void 0 : v,
                alt: y,
                fill: o,
                loader: u,
                ...p,
              })
            );
          }
        };
    },
    3470: function (t, e, r) {
      "use strict";
      r.d(e, {
        f: function () {
          return d;
        },
      });
      var n = r(5893),
        i = r(7294),
        s = r(1664),
        o = r.n(s);
      let a = (t) => {
          let e = /^(\/(?!\/)|#)/.test(t),
            r = !e && !/^https?:\/\//.test(t);
          return e && !r;
        },
        u = { Any: "Any", Document: "Document", Media: "Media", Web: "Web" },
        l = (t) => {
          var e;
          return {
            link_type: u.Document,
            id: t.id,
            uid: t.uid || void 0,
            type: t.type,
            tags: t.tags,
            lang: t.lang,
            url: null == t.url ? void 0 : t.url,
            slug: null == (e = t.slugs) ? void 0 : e[0],
            ...(t.data && Object.keys(t.data).length > 0
              ? { data: t.data }
              : {}),
          };
        },
        c = (t, ...e) => {
          let r;
          if (!t) return null;
          let n = "link_type" in t ? t : l(t),
            [i] = e;
          switch (
            ((r =
              "function" == typeof i || null == i
                ? { linkResolver: i }
                : { ...i }),
            n.link_type)
          ) {
            case u.Media:
            case u.Web:
              return "url" in n ? n.url : null;
            case u.Document:
              if ("id" in n && r.linkResolver) {
                let t = r.linkResolver(n);
                if (null != t) return t;
              }
              if ("url" in n && n.url) return n.url;
              return null;
            case u.Any:
            default:
              return null;
          }
        };
      var h = r(5118);
      let f = (t, e = {}) => {
          if (t && ("link_type" in t ? (0, h.p)(t) : t)) {
            let r = "target" in t ? t.target : void 0,
              n = c(t, e.linkResolver),
              i = null == n ? void 0 : n,
              s = "string" == typeof i && !a(i),
              o = e.rel
                ? e.rel({ href: i, isExternal: s, target: r })
                : s
                ? "noreferrer"
                : void 0;
            return { href: i, target: r, rel: null == o ? void 0 : o };
          }
          return {};
        },
        d = i.forwardRef(function (
          { field: t, document: e, linkResolver: r, ...i },
          s
        ) {
          let {
              href: a,
              rel: u,
              ...l
            } = f(t ?? e, {
              linkResolver: r,
              rel: "function" == typeof i.rel ? i.rel : void 0,
            }),
            c = ("href" in i ? i.href : a) || "",
            h = u;
          return (
            "rel" in i && "function" != typeof i.rel && (h = i.rel),
            (0, n.jsx)(o(), { ref: s, ...l, ...i, href: c, rel: h })
          );
        });
    },
    5118: function (t, e, r) {
      "use strict";
      r.d(e, {
        S: function () {
          return i;
        },
        p: function () {
          return s;
        },
      });
      let n = (t) => null != t,
        i = (t) => n(t) && !!t.url,
        s = (t) => n(t) && ("id" in t || "url" in t);
    },
    172: function (t, e, r) {
      "use strict";
      r.d(e, {
        p: function () {
          return o;
        },
      });
      var n = r(5893);
      let i = (t) => {
        let e = t.replace(/(?:-|_)(\w)/g, (t, e) => (e ? e.toUpperCase() : ""));
        return e[0].toUpperCase() + e.slice(1);
      };
      r(3454);
      let s = ({ slice: t }) => null;
      function o({
        slices: t = [],
        components: e = {},
        resolver: r,
        defaultComponent: o = s,
        context: a = {},
      }) {
        let u = t.map((s, u) => {
          let l = "slice_type" in s ? s.slice_type : s.type,
            c = e[l] || o;
          if (r) {
            let t = r({ slice: s, sliceName: i(l), i: u });
            t && (c = t);
          }
          let h = "id" in s && s.id ? s.id : `${u}-${JSON.stringify(s)}`;
          if (!s.__mapped)
            return (0, n.jsx)(
              c,
              { slice: s, index: u, slices: t, context: a },
              h
            );
          {
            let { __mapped: t, ...e } = s;
            return (0, n.jsx)(c, { ...e }, h);
          }
        });
        return (0, n.jsx)(n.Fragment, { children: u });
      }
    },
    4347: function (t, e) {
      var r, n, i, s, o, a, u, l, c, h, f, d, p, m, g, _, v, y, w;
      (r = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi),
        (n = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi),
        (i = Math.PI / 180),
        (s = Math.sin),
        (o = Math.cos),
        (a = Math.abs),
        (u = Math.sqrt),
        (l = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        }),
        (f = function () {
          return (
            c ||
            ("undefined" != typeof window &&
              (c = window.gsap) &&
              c.registerPlugin &&
              c)
          );
        }),
        (d = function () {
          (c = f())
            ? (c.registerEase("_CE", w.create), (h = 1))
            : console.warn("Please gsap.registerPlugin(CustomEase)");
        }),
        (p = function (t) {
          return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
        }),
        (m = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi),
        (g = /[cLlsSaAhHvVtTqQ]/g),
        (_ = function (t) {
          var e,
            r = t.length,
            n = 1e20;
          for (e = 1; e < r; e += 6) +t[e] < n && (n = +t[e]);
          return n;
        }),
        (v = function (t, e, r) {
          r || 0 === r || (r = Math.max(+t[t.length - 1], +t[1]));
          var n,
            i = -1 * +t[0],
            s = -r,
            o = t.length,
            a = 1 / (+t[o - 2] + i),
            u =
              -e ||
              (Math.abs(+t[o - 1] - +t[1]) < 0.01 * (+t[o - 2] - +t[0])
                ? _(t) + s
                : +t[o - 1] + s);
          for (n = 0, u = u ? 1 / u : -a; n < o; n += 2)
            (t[n] = (+t[n] + i) * a), (t[n + 1] = (+t[n + 1] + s) * u);
        }),
        (y = function t(e, r, n, i, s, o, a, u, l, c, h) {
          var f,
            d = (e + n) / 2,
            p = (r + i) / 2,
            m = (n + s) / 2,
            g = (i + o) / 2,
            _ = (s + a) / 2,
            v = (o + u) / 2,
            y = (d + m) / 2,
            w = (p + g) / 2,
            b = (m + _) / 2,
            x = (g + v) / 2,
            T = (y + b) / 2,
            E = (w + x) / 2,
            k = a - e,
            C = u - r,
            S = Math.abs((n - a) * C - (i - u) * k),
            O = Math.abs((s - a) * C - (o - u) * k);
          return (
            c ||
              ((c = [
                { x: e, y: r },
                { x: a, y: u },
              ]),
              (h = 1)),
            c.splice(h || c.length - 1, 0, { x: T, y: E }),
            (S + O) * (S + O) > l * (k * k + C * C) &&
              ((f = c.length),
              t(e, r, d, p, y, w, T, E, l, c, h),
              t(T, E, b, x, _, v, a, u, l, c, h + 1 + (c.length - f))),
            c
          );
        }),
        (w = (function () {
          function t(t, e, r) {
            h || d(), (this.id = t), this.setData(e, r);
          }
          var e = t.prototype;
          return (
            (e.setData = function (t, e) {
              e = e || {};
              var l,
                h,
                f,
                d,
                p,
                _,
                w,
                b,
                x,
                T = (t = t || "0,0,1,1").match(m),
                E = 1,
                k = [],
                C = [],
                S = e.precision || 1,
                O = S <= 1;
              if (
                ((this.data = t),
                (g.test(t) || (~t.indexOf("M") && 0 > t.indexOf("C"))) &&
                  (T = (function (t) {
                    var e,
                      l,
                      c,
                      h,
                      f,
                      d,
                      p,
                      m,
                      g,
                      _,
                      v,
                      y,
                      w,
                      b,
                      x,
                      T =
                        (t + "")
                          .replace(n, function (t) {
                            var e = +t;
                            return e < 1e-4 && e > -0.0001 ? 0 : e;
                          })
                          .match(r) || [],
                      E = [],
                      k = 0,
                      C = 0,
                      S = 2 / 3,
                      O = T.length,
                      M = 0,
                      R = "ERROR: malformed path: " + t,
                      P = function (t, e, r, n) {
                        (_ = (r - t) / 3),
                          (v = (n - e) / 3),
                          p.push(t + _, e + v, r - _, n - v, r, n);
                      };
                    if (!t || !isNaN(T[0]) || isNaN(T[1]))
                      return console.log(R), E;
                    for (e = 0; e < O; e++)
                      if (
                        ((w = f),
                        isNaN(T[e])
                          ? (d = (f = T[e].toUpperCase()) !== T[e])
                          : e--,
                        (c = +T[e + 1]),
                        (h = +T[e + 2]),
                        d && ((c += k), (h += C)),
                        e || ((m = c), (g = h)),
                        "M" === f)
                      )
                        p && (p.length < 8 ? (E.length -= 1) : (M += p.length)),
                          (k = m = c),
                          (C = g = h),
                          (p = [c, h]),
                          E.push(p),
                          (e += 2),
                          (f = "L");
                      else if ("C" === f)
                        p || (p = [0, 0]),
                          d || (k = C = 0),
                          p.push(
                            c,
                            h,
                            k + 1 * T[e + 3],
                            C + 1 * T[e + 4],
                            (k += 1 * T[e + 5]),
                            (C += 1 * T[e + 6])
                          ),
                          (e += 6);
                      else if ("S" === f)
                        (_ = k),
                          (v = C),
                          ("C" === w || "S" === w) &&
                            ((_ += k - p[p.length - 4]),
                            (v += C - p[p.length - 3])),
                          d || (k = C = 0),
                          p.push(
                            _,
                            v,
                            c,
                            h,
                            (k += 1 * T[e + 3]),
                            (C += 1 * T[e + 4])
                          ),
                          (e += 4);
                      else if ("Q" === f)
                        (_ = k + (c - k) * S),
                          (v = C + (h - C) * S),
                          d || (k = C = 0),
                          (k += 1 * T[e + 3]),
                          (C += 1 * T[e + 4]),
                          p.push(_, v, k + (c - k) * S, C + (h - C) * S, k, C),
                          (e += 4);
                      else if ("T" === f)
                        (_ = k - p[p.length - 4]),
                          (v = C - p[p.length - 3]),
                          p.push(
                            k + _,
                            C + v,
                            c + (k + 1.5 * _ - c) * S,
                            h + (C + 1.5 * v - h) * S,
                            (k = c),
                            (C = h)
                          ),
                          (e += 2);
                      else if ("H" === f) P(k, C, (k = c), C), (e += 1);
                      else if ("V" === f)
                        P(k, C, k, (C = c + (d ? C - k : 0))), (e += 1);
                      else if ("L" === f || "Z" === f)
                        "Z" === f && ((c = m), (h = g), (p.closed = !0)),
                          ("L" === f || a(k - c) > 0.5 || a(C - h) > 0.5) &&
                            (P(k, C, c, h), "L" === f && (e += 2)),
                          (k = c),
                          (C = h);
                      else if ("A" === f) {
                        if (
                          ((b = T[e + 4]),
                          (x = T[e + 5]),
                          (_ = T[e + 6]),
                          (v = T[e + 7]),
                          (l = 7),
                          b.length > 1 &&
                            (b.length < 3
                              ? ((v = _), (_ = x), l--)
                              : ((v = x), (_ = b.substr(2)), (l -= 2)),
                            (x = b.charAt(1)),
                            (b = b.charAt(0))),
                          (y = (function (t, e, r, n, l, c, h, f, d) {
                            if (t !== f || e !== d) {
                              (r = a(r)), (n = a(n));
                              var p = (l % 360) * i,
                                m = o(p),
                                g = s(p),
                                _ = Math.PI,
                                v = 2 * _,
                                y = (t - f) / 2,
                                w = (e - d) / 2,
                                b = m * y + g * w,
                                x = -g * y + m * w,
                                T = b * b,
                                E = x * x,
                                k = T / (r * r) + E / (n * n);
                              k > 1 && ((r = u(k) * r), (n = u(k) * n));
                              var C = r * r,
                                S = n * n,
                                O = (C * S - C * E - S * T) / (C * E + S * T);
                              O < 0 && (O = 0);
                              var M = (c === h ? -1 : 1) * u(O),
                                R = M * ((r * x) / n),
                                P = -(M * ((n * b) / r)),
                                A = (t + f) / 2 + (m * R - g * P),
                                j = (e + d) / 2 + (g * R + m * P),
                                L = (b - R) / r,
                                D = (x - P) / n,
                                z = (-b - R) / r,
                                N = (-x - P) / n,
                                I = L * L + D * D,
                                F = (D < 0 ? -1 : 1) * Math.acos(L / u(I)),
                                B =
                                  (L * N - D * z < 0 ? -1 : 1) *
                                  Math.acos(
                                    (L * z + D * N) / u(I * (z * z + N * N))
                                  );
                              isNaN(B) && (B = _),
                                !h && B > 0 ? (B -= v) : h && B < 0 && (B += v),
                                (F %= v);
                              var V,
                                Y = Math.ceil(a((B %= v)) / (v / 4)),
                                H = [],
                                W = B / Y,
                                q = ((4 / 3) * s(W / 2)) / (1 + o(W / 2)),
                                U = m * r,
                                X = g * r,
                                G = -(g * n),
                                Z = m * n;
                              for (V = 0; V < Y; V++)
                                (b = o((l = F + V * W))),
                                  (x = s(l)),
                                  (L = o((l += W))),
                                  (D = s(l)),
                                  H.push(
                                    b - q * x,
                                    x + q * b,
                                    L + q * D,
                                    D - q * L,
                                    L,
                                    D
                                  );
                              for (V = 0; V < H.length; V += 2)
                                (b = H[V]),
                                  (x = H[V + 1]),
                                  (H[V] = b * U + x * G + A),
                                  (H[V + 1] = b * X + x * Z + j);
                              return (H[V - 2] = f), (H[V - 1] = d), H;
                            }
                          })(
                            k,
                            C,
                            +T[e + 1],
                            +T[e + 2],
                            +T[e + 3],
                            +b,
                            +x,
                            (d ? k : 0) + 1 * _,
                            (d ? C : 0) + 1 * v
                          )),
                          (e += l),
                          y)
                        )
                          for (l = 0; l < y.length; l++) p.push(y[l]);
                        (k = p[p.length - 2]), (C = p[p.length - 1]);
                      } else console.log(R);
                    return (
                      (e = p.length) < 6
                        ? (E.pop(), (e = 0))
                        : p[0] === p[e - 2] &&
                          p[1] === p[e - 1] &&
                          (p.closed = !0),
                      (E.totalPoints = M + e),
                      E
                    );
                  })(t)[0]),
                4 === (l = T.length))
              )
                T.unshift(0, 0), T.push(1, 1), (l = 8);
              else if ((l - 2) % 6) throw "Invalid CustomEase";
              for (
                (0 != +T[0] || 1 != +T[l - 2]) && v(T, e.height, e.originY),
                  this.segment = T,
                  d = 2;
                d < l;
                d += 6
              )
                (h = { x: +T[d - 2], y: +T[d - 1] }),
                  (f = { x: +T[d + 4], y: +T[d + 5] }),
                  k.push(h, f),
                  y(
                    h.x,
                    h.y,
                    +T[d],
                    +T[d + 1],
                    +T[d + 2],
                    +T[d + 3],
                    f.x,
                    f.y,
                    1 / (2e5 * S),
                    k,
                    k.length - 1
                  );
              for (d = 0, l = k.length; d < l; d++)
                (w = k[d]),
                  (b = k[d - 1] || w),
                  (w.x > b.x || (b.y !== w.y && b.x === w.x) || w === b) &&
                  w.x <= 1
                    ? ((b.cx = w.x - b.x),
                      (b.cy = w.y - b.y),
                      (b.n = w),
                      (b.nx = w.x),
                      O &&
                        d > 1 &&
                        Math.abs(b.cy / b.cx - k[d - 2].cy / k[d - 2].cx) > 2 &&
                        (O = 0),
                      b.cx < E &&
                        (b.cx
                          ? (E = b.cx)
                          : ((b.cx = 0.001),
                            d === l - 1 &&
                              ((b.x -= 0.001),
                              (E = Math.min(E, 0.001)),
                              (O = 0)))))
                    : (k.splice(d--, 1), l--);
              if (((p = 1 / (l = (1 / E + 1) | 0)), (_ = 0), (w = k[0]), O)) {
                for (d = 0; d < l; d++)
                  (x = d * p),
                    w.nx < x && (w = k[++_]),
                    (h = w.y + ((x - w.x) / w.cx) * w.cy),
                    (C[d] = { x: x, cx: p, y: h, cy: 0, nx: 9 }),
                    d && (C[d - 1].cy = h - C[d - 1].y);
                C[l - 1].cy = k[k.length - 1].y - h;
              } else {
                for (d = 0; d < l; d++)
                  w.nx < d * p && (w = k[++_]), (C[d] = w);
                _ < k.length - 1 && (C[d - 1] = k[k.length - 2]);
              }
              return (
                (this.ease = function (t) {
                  var e = C[(t * l) | 0] || C[l - 1];
                  return e.nx < t && (e = e.n), e.y + ((t - e.x) / e.cx) * e.cy;
                }),
                (this.ease.custom = this),
                this.id && c && c.registerEase(this.id, this.ease),
                this
              );
            }),
            (e.getSVGData = function (e) {
              return t.getSVGData(this, e);
            }),
            (t.create = function (e, r, n) {
              return new t(e, r, n).ease;
            }),
            (t.register = function (t) {
              (c = t), d();
            }),
            (t.get = function (t) {
              return c.parseEase(t);
            }),
            (t.getSVGData = function (e, r) {
              var n,
                i,
                s,
                o,
                a,
                u,
                h,
                f,
                d,
                m,
                g = (r = r || {}).width || 100,
                _ = r.height || 100,
                v = r.x || 0,
                y = (r.y || 0) + _,
                w = c.utils.toArray(r.path)[0];
              if (
                (r.invert && ((_ = -_), (y = 0)),
                "string" == typeof e && (e = c.parseEase(e)),
                e.custom && (e = e.custom),
                e instanceof t)
              )
                n = (function (t) {
                  "number" == typeof t[0] && (t = [t]);
                  var e,
                    r,
                    n,
                    i,
                    s = "",
                    o = t.length;
                  for (r = 0; r < o; r++) {
                    for (
                      s += "M" + l((i = t[r])[0]) + "," + l(i[1]) + " C",
                        e = i.length,
                        n = 2;
                      n < e;
                      n++
                    )
                      s +=
                        l(i[n++]) +
                        "," +
                        l(i[n++]) +
                        " " +
                        l(i[n++]) +
                        "," +
                        l(i[n++]) +
                        " " +
                        l(i[n++]) +
                        "," +
                        l(i[n]) +
                        " ";
                    i.closed && (s += "z");
                  }
                  return s;
                })(
                  (function (t, e, r, n, i, s, o) {
                    for (var a, u, l, c, h, f = t.length; --f > -1; )
                      for (l = 0, u = (a = t[f]).length; l < u; l += 2)
                        (c = a[l]),
                          (h = a[l + 1]),
                          (a[l] = c * e + 0 * h + s),
                          (a[l + 1] = 0 * c + h * i + o);
                    return (t._dirty = 1), t;
                  })([e.segment], g, 0, 0, -_, v, y)
                );
              else {
                for (
                  n = [v, y],
                    o = 1 / (h = Math.max(5, 200 * (r.precision || 1))),
                    h += 2,
                    f = 5 / h,
                    d = p(v + o * g),
                    i = ((m = p(y + -(e(o) * _))) - y) / (d - v),
                    s = 2;
                  s < h;
                  s++
                )
                  (a = p(v + s * o * g)),
                    (Math.abs(
                      ((u = p(y + -(e(s * o) * _))) - m) / (a - d) - i
                    ) > f ||
                      s === h - 1) &&
                      (n.push(d, m), (i = (u - m) / (a - d))),
                    (d = a),
                    (m = u);
                n = "M" + n.join(",");
              }
              return w && w.setAttribute("d", n), n;
            }),
            t
          );
        })()),
        f() && c.registerPlugin(w),
        (w.version = "3.12.2"),
        (e.CustomEase = w),
        (e.default = w),
        Object.defineProperty(e, "__esModule", { value: !0 });
    },
    6546: function (t, e) {
      !(function (t) {
        "use strict";
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        /*!
         * Observer 3.12.2
         * https://greensock.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var r,
          n,
          i,
          s,
          o,
          a,
          u,
          l,
          c,
          h,
          f,
          d,
          p,
          m = function () {
            return (
              r ||
              ("undefined" != typeof window &&
                (r = window.gsap) &&
                r.registerPlugin &&
                r)
            );
          },
          g = 1,
          _ = [],
          v = [],
          y = [],
          w = Date.now,
          b = function (t, e) {
            return e;
          },
          x = function () {
            var t = c.core,
              e = t.bridge || {},
              r = t._scrollers,
              n = t._proxies;
            r.push.apply(r, v),
              n.push.apply(n, y),
              (v = r),
              (y = n),
              (b = function (t, r) {
                return e[t](r);
              });
          },
          T = function (t, e) {
            return ~y.indexOf(t) && y[y.indexOf(t) + 1][e];
          },
          E = function (t) {
            return !!~h.indexOf(t);
          },
          k = function (t, e, r, n, i) {
            return t.addEventListener(e, r, { passive: !n, capture: !!i });
          },
          C = function (t, e, r, n) {
            return t.removeEventListener(e, r, !!n);
          },
          S = "scrollLeft",
          O = "scrollTop",
          M = function () {
            return (f && f.isPressed) || v.cache++;
          },
          R = function (t, e) {
            var r = function r(n) {
              if (n || 0 === n) {
                g && (i.history.scrollRestoration = "manual");
                var s = f && f.isPressed;
                (n = r.v = Math.round(n) || (f && f.iOS ? 1 : 0)),
                  t(n),
                  (r.cacheID = v.cache),
                  s && b("ss", n);
              } else
                (e || v.cache !== r.cacheID || b("ref")) &&
                  ((r.cacheID = v.cache), (r.v = t()));
              return r.v + r.offset;
            };
            return (r.offset = 0), t && r;
          },
          P = {
            s: S,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: R(function (t) {
              return arguments.length
                ? i.scrollTo(t, A.sc())
                : i.pageXOffset || s[S] || o[S] || a[S] || 0;
            }),
          },
          A = {
            s: O,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: P,
            sc: R(function (t) {
              return arguments.length
                ? i.scrollTo(P.sc(), t)
                : i.pageYOffset || s[O] || o[O] || a[O] || 0;
            }),
          },
          j = function (t, e) {
            return (
              ((e && e._ctx && e._ctx.selector) || r.utils.toArray)(t)[0] ||
              ("string" == typeof t && !1 !== r.config().nullTargetWarn
                ? console.warn("Element not found:", t)
                : null)
            );
          },
          L = function (t, e) {
            var n = e.s,
              i = e.sc;
            E(t) && (t = s.scrollingElement || o);
            var a = v.indexOf(t),
              u = i === A.sc ? 1 : 2;
            ~a || (a = v.push(t) - 1), v[a + u] || k(t, "scroll", M);
            var l = v[a + u],
              c =
                l ||
                (v[a + u] =
                  R(T(t, n), !0) ||
                  (E(t)
                    ? i
                    : R(function (e) {
                        return arguments.length ? (t[n] = e) : t[n];
                      })));
            return (
              (c.target = t),
              l || (c.smooth = "smooth" === r.getProperty(t, "scrollBehavior")),
              c
            );
          },
          D = function (t, e, r) {
            var n = t,
              i = t,
              s = w(),
              o = s,
              a = e || 50,
              u = Math.max(500, 3 * a),
              l = function (t, e) {
                var u = w();
                e || u - s > a
                  ? ((i = n), (n = t), (o = s), (s = u))
                  : r
                  ? (n += t)
                  : (n = i + ((t - i) / (u - o)) * (s - o));
              };
            return {
              update: l,
              reset: function () {
                (i = n = r ? 0 : n), (o = s = 0);
              },
              getVelocity: function (t) {
                var e = o,
                  a = i,
                  c = w();
                return (
                  (t || 0 === t) && t !== n && l(t),
                  s === o || c - o > u
                    ? 0
                    : ((n + (r ? a : -a)) / ((r ? c : s) - e)) * 1e3
                );
              },
            };
          },
          z = function (t, e) {
            return (
              e && !t._gsapAllow && t.preventDefault(),
              t.changedTouches ? t.changedTouches[0] : t
            );
          },
          N = function (t) {
            var e = Math.max.apply(Math, t),
              r = Math.min.apply(Math, t);
            return Math.abs(e) >= Math.abs(r) ? e : r;
          },
          I = function () {
            (c = r.core.globals().ScrollTrigger) && c.core && x();
          },
          F = function (t) {
            return (
              (r = t || m()) &&
                "undefined" != typeof document &&
                document.body &&
                ((i = window),
                (o = (s = document).documentElement),
                (a = s.body),
                (h = [i, s, o, a]),
                r.utils.clamp,
                (p = r.core.context || function () {}),
                (l = "onpointerenter" in a ? "pointer" : "mouse"),
                (u = B.isTouch =
                  i.matchMedia &&
                  i.matchMedia("(hover: none), (pointer: coarse)").matches
                    ? 1
                    : "ontouchstart" in i ||
                      navigator.maxTouchPoints > 0 ||
                      navigator.msMaxTouchPoints > 0
                    ? 2
                    : 0),
                (d = B.eventTypes =
                  (
                    "ontouchstart" in o
                      ? "touchstart,touchmove,touchcancel,touchend"
                      : "onpointerdown" in o
                      ? "pointerdown,pointermove,pointercancel,pointerup"
                      : "mousedown,mousemove,mouseup,mouseup"
                  ).split(",")),
                setTimeout(function () {
                  return (g = 0);
                }, 500),
                I(),
                (n = 1)),
              n
            );
          };
        (P.op = A), (v.cache = 0);
        var B = (function () {
          var t;
          function h(t) {
            this.init(t);
          }
          return (
            (h.prototype.init = function (t) {
              n || F(r) || console.warn("Please gsap.registerPlugin(Observer)"),
                c || I();
              var e = t.tolerance,
                h = t.dragMinimum,
                m = t.type,
                g = t.target,
                v = t.lineHeight,
                y = t.debounce,
                b = t.preventDefault,
                x = t.onStop,
                T = t.onStopDelay,
                S = t.ignore,
                O = t.wheelSpeed,
                R = t.event,
                B = t.onDragStart,
                V = t.onDragEnd,
                Y = t.onDrag,
                H = t.onPress,
                W = t.onRelease,
                q = t.onRight,
                U = t.onLeft,
                X = t.onUp,
                G = t.onDown,
                Z = t.onChangeX,
                $ = t.onChangeY,
                Q = t.onChange,
                J = t.onToggleX,
                K = t.onToggleY,
                tt = t.onHover,
                te = t.onHoverEnd,
                tr = t.onMove,
                tn = t.ignoreCheck,
                ti = t.isNormalizer,
                ts = t.onGestureStart,
                to = t.onGestureEnd,
                ta = t.onWheel,
                tu = t.onEnable,
                tl = t.onDisable,
                tc = t.onClick,
                th = t.scrollSpeed,
                tf = t.capture,
                td = t.allowClicks,
                tp = t.lockAxis,
                tm = t.onLockAxis;
              (this.target = g = j(g) || o),
                (this.vars = t),
                S && (S = r.utils.toArray(S)),
                (e = e || 1e-9),
                (h = h || 0),
                (O = O || 1),
                (th = th || 1),
                (m = m || "wheel,touch,pointer"),
                (y = !1 !== y),
                v || (v = parseFloat(i.getComputedStyle(a).lineHeight) || 22);
              var tg,
                t_,
                tv,
                ty,
                tw,
                tb,
                tx,
                tT = this,
                tE = 0,
                tk = 0,
                tC = L(g, P),
                tS = L(g, A),
                tO = tC(),
                tM = tS(),
                tR =
                  ~m.indexOf("touch") &&
                  !~m.indexOf("pointer") &&
                  "pointerdown" === d[0],
                tP = E(g),
                tA = g.ownerDocument || s,
                tj = [0, 0, 0],
                tL = [0, 0, 0],
                tD = 0,
                tz = function () {
                  return (tD = w());
                },
                tN = function (t, e) {
                  return (
                    ((tT.event = t) && S && ~S.indexOf(t.target)) ||
                    (e && tR && "touch" !== t.pointerType) ||
                    (tn && tn(t, e))
                  );
                },
                tI = function () {
                  var t = (tT.deltaX = N(tj)),
                    r = (tT.deltaY = N(tL)),
                    n = Math.abs(t) >= e,
                    i = Math.abs(r) >= e;
                  Q && (n || i) && Q(tT, t, r, tj, tL),
                    n &&
                      (q && tT.deltaX > 0 && q(tT),
                      U && tT.deltaX < 0 && U(tT),
                      Z && Z(tT),
                      J && tT.deltaX < 0 != tE < 0 && J(tT),
                      (tE = tT.deltaX),
                      (tj[0] = tj[1] = tj[2] = 0)),
                    i &&
                      (G && tT.deltaY > 0 && G(tT),
                      X && tT.deltaY < 0 && X(tT),
                      $ && $(tT),
                      K && tT.deltaY < 0 != tk < 0 && K(tT),
                      (tk = tT.deltaY),
                      (tL[0] = tL[1] = tL[2] = 0)),
                    (ty || tv) &&
                      (tr && tr(tT), tv && (Y(tT), (tv = !1)), (ty = !1)),
                    tb && ((tb = !1), 1) && tm && tm(tT),
                    tw && (ta(tT), (tw = !1)),
                    (tg = 0);
                },
                tF = function (t, e, r) {
                  (tj[r] += t),
                    (tL[r] += e),
                    tT._vx.update(t),
                    tT._vy.update(e),
                    y ? tg || (tg = requestAnimationFrame(tI)) : tI();
                },
                tB = function (t, e) {
                  tp &&
                    !tx &&
                    ((tT.axis = tx = Math.abs(t) > Math.abs(e) ? "x" : "y"),
                    (tb = !0)),
                    "y" !== tx && ((tj[2] += t), tT._vx.update(t, !0)),
                    "x" !== tx && ((tL[2] += e), tT._vy.update(e, !0)),
                    y ? tg || (tg = requestAnimationFrame(tI)) : tI();
                },
                tV = function (t) {
                  if (!tN(t, 1)) {
                    var e = (t = z(t, b)).clientX,
                      r = t.clientY,
                      n = e - tT.x,
                      i = r - tT.y,
                      s = tT.isDragging;
                    (tT.x = e),
                      (tT.y = r),
                      (s ||
                        Math.abs(tT.startX - e) >= h ||
                        Math.abs(tT.startY - r) >= h) &&
                        (Y && (tv = !0),
                        s || (tT.isDragging = !0),
                        tB(n, i),
                        s || (B && B(tT)));
                  }
                },
                tY = (tT.onPress = function (t) {
                  tN(t, 1) ||
                    (t && t.button) ||
                    ((tT.axis = tx = null),
                    t_.pause(),
                    (tT.isPressed = !0),
                    (t = z(t)),
                    (tE = tk = 0),
                    (tT.startX = tT.x = t.clientX),
                    (tT.startY = tT.y = t.clientY),
                    tT._vx.reset(),
                    tT._vy.reset(),
                    k(ti ? g : tA, d[1], tV, b, !0),
                    (tT.deltaX = tT.deltaY = 0),
                    H && H(tT));
                }),
                tH = (tT.onRelease = function (t) {
                  if (!tN(t, 1)) {
                    C(ti ? g : tA, d[1], tV, !0);
                    var e = !isNaN(tT.y - tT.startY),
                      n =
                        tT.isDragging &&
                        (Math.abs(tT.x - tT.startX) > 3 ||
                          Math.abs(tT.y - tT.startY) > 3),
                      s = z(t);
                    !n &&
                      e &&
                      (tT._vx.reset(),
                      tT._vy.reset(),
                      b &&
                        td &&
                        r.delayedCall(0.08, function () {
                          if (w() - tD > 300 && !t.defaultPrevented) {
                            if (t.target.click) t.target.click();
                            else if (tA.createEvent) {
                              var e = tA.createEvent("MouseEvents");
                              e.initMouseEvent(
                                "click",
                                !0,
                                !0,
                                i,
                                1,
                                s.screenX,
                                s.screenY,
                                s.clientX,
                                s.clientY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null
                              ),
                                t.target.dispatchEvent(e);
                            }
                          }
                        })),
                      (tT.isDragging = tT.isGesturing = tT.isPressed = !1),
                      x && !ti && t_.restart(!0),
                      V && n && V(tT),
                      W && W(tT, n);
                  }
                }),
                tW = function (t) {
                  return (
                    t.touches &&
                    t.touches.length > 1 &&
                    (tT.isGesturing = !0) &&
                    ts(t, tT.isDragging)
                  );
                },
                tq = function () {
                  return (tT.isGesturing = !1), to(tT);
                },
                tU = function (t) {
                  if (!tN(t)) {
                    var e = tC(),
                      r = tS();
                    tF((e - tO) * th, (r - tM) * th, 1),
                      (tO = e),
                      (tM = r),
                      x && t_.restart(!0);
                  }
                },
                tX = function (t) {
                  if (!tN(t)) {
                    (t = z(t, b)), ta && (tw = !0);
                    var e =
                      (1 === t.deltaMode
                        ? v
                        : 2 === t.deltaMode
                        ? i.innerHeight
                        : 1) * O;
                    tF(t.deltaX * e, t.deltaY * e, 0),
                      x && !ti && t_.restart(!0);
                  }
                },
                tG = function (t) {
                  if (!tN(t)) {
                    var e = t.clientX,
                      r = t.clientY,
                      n = e - tT.x,
                      i = r - tT.y;
                    (tT.x = e), (tT.y = r), (ty = !0), (n || i) && tB(n, i);
                  }
                },
                tZ = function (t) {
                  (tT.event = t), tt(tT);
                },
                t$ = function (t) {
                  (tT.event = t), te(tT);
                },
                tQ = function (t) {
                  return tN(t) || (z(t, b) && tc(tT));
                };
              (t_ = tT._dc =
                r
                  .delayedCall(T || 0.25, function () {
                    tT._vx.reset(), tT._vy.reset(), t_.pause(), x && x(tT);
                  })
                  .pause()),
                (tT.deltaX = tT.deltaY = 0),
                (tT._vx = D(0, 50, !0)),
                (tT._vy = D(0, 50, !0)),
                (tT.scrollX = tC),
                (tT.scrollY = tS),
                (tT.isDragging = tT.isGesturing = tT.isPressed = !1),
                p(this),
                (tT.enable = function (t) {
                  return (
                    !tT.isEnabled &&
                      (k(tP ? tA : g, "scroll", M),
                      m.indexOf("scroll") >= 0 &&
                        k(tP ? tA : g, "scroll", tU, b, tf),
                      m.indexOf("wheel") >= 0 && k(g, "wheel", tX, b, tf),
                      ((m.indexOf("touch") >= 0 && u) ||
                        m.indexOf("pointer") >= 0) &&
                        (k(g, d[0], tY, b, tf),
                        k(tA, d[2], tH),
                        k(tA, d[3], tH),
                        td && k(g, "click", tz, !1, !0),
                        tc && k(g, "click", tQ),
                        ts && k(tA, "gesturestart", tW),
                        to && k(tA, "gestureend", tq),
                        tt && k(g, l + "enter", tZ),
                        te && k(g, l + "leave", t$),
                        tr && k(g, l + "move", tG)),
                      (tT.isEnabled = !0),
                      t && t.type && tY(t),
                      tu && tu(tT)),
                    tT
                  );
                }),
                (tT.disable = function () {
                  tT.isEnabled &&
                    (_.filter(function (t) {
                      return t !== tT && E(t.target);
                    }).length || C(tP ? tA : g, "scroll", M),
                    tT.isPressed &&
                      (tT._vx.reset(),
                      tT._vy.reset(),
                      C(ti ? g : tA, d[1], tV, !0)),
                    C(tP ? tA : g, "scroll", tU, tf),
                    C(g, "wheel", tX, tf),
                    C(g, d[0], tY, tf),
                    C(tA, d[2], tH),
                    C(tA, d[3], tH),
                    C(g, "click", tz, !0),
                    C(g, "click", tQ),
                    C(tA, "gesturestart", tW),
                    C(tA, "gestureend", tq),
                    C(g, l + "enter", tZ),
                    C(g, l + "leave", t$),
                    C(g, l + "move", tG),
                    (tT.isEnabled = tT.isPressed = tT.isDragging = !1),
                    tl && tl(tT));
                }),
                (tT.kill = tT.revert =
                  function () {
                    tT.disable();
                    var t = _.indexOf(tT);
                    t >= 0 && _.splice(t, 1), f === tT && (f = 0);
                  }),
                _.push(tT),
                ti && E(g) && (f = tT),
                tT.enable(R);
            }),
            e(h.prototype, [
              {
                key: "velocityX",
                get: function () {
                  return this._vx.getVelocity();
                },
              },
              {
                key: "velocityY",
                get: function () {
                  return this._vy.getVelocity();
                },
              },
            ]),
            t && e(h, t),
            h
          );
        })();
        (B.version = "3.12.2"),
          (B.create = function (t) {
            return new B(t);
          }),
          (B.register = F),
          (B.getAll = function () {
            return _.slice();
          }),
          (B.getById = function (t) {
            return _.filter(function (e) {
              return e.vars.id === t;
            })[0];
          }),
          m() && r.registerPlugin(B);
        /*!
         * ScrollTrigger 3.12.2
         * https://greensock.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var V,
          Y,
          H,
          W,
          q,
          U,
          X,
          G,
          Z,
          $,
          Q,
          J,
          K,
          tt,
          te,
          tr,
          tn,
          ti,
          ts,
          to,
          ta,
          tu,
          tl,
          tc,
          th,
          tf,
          td,
          tp,
          tm,
          tg,
          t_,
          tv,
          ty,
          tw,
          tb,
          tx,
          tT = 1,
          tE = Date.now,
          tk = tE(),
          tC = 0,
          tS = 0,
          tO = function (t, e, r) {
            var n =
              tY(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
            return (
              (r["_" + e + "Clamp"] = n), n ? t.substr(6, t.length - 7) : t
            );
          },
          tM = function (t, e) {
            return e && (!tY(t) || "clamp(" !== t.substr(0, 6))
              ? "clamp(" + t + ")"
              : t;
          },
          tR = function () {
            return (tt = 1);
          },
          tP = function () {
            return (tt = 0);
          },
          tA = function (t) {
            return t;
          },
          tj = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          tL = function () {
            return "undefined" != typeof window;
          },
          tD = function () {
            return V || (tL() && (V = window.gsap) && V.registerPlugin && V);
          },
          tz = function (t) {
            return !!~X.indexOf(t);
          },
          tN = function (t) {
            return (
              ("Height" === t ? t_ : H["inner" + t]) ||
              q["client" + t] ||
              U["client" + t]
            );
          },
          tI = function (t) {
            return (
              T(t, "getBoundingClientRect") ||
              (tz(t)
                ? function () {
                    return (eH.width = H.innerWidth), (eH.height = t_), eH;
                  }
                : function () {
                    return et(t);
                  })
            );
          },
          tF = function (t, e, r) {
            var n = r.d,
              i = r.d2,
              s = r.a;
            return (s = T(t, "getBoundingClientRect"))
              ? function () {
                  return s()[n];
                }
              : function () {
                  return (e ? tN(i) : t["client" + i]) || 0;
                };
          },
          tB = function (t, e) {
            var r = e.s,
              n = e.d2,
              i = e.d,
              s = e.a;
            return Math.max(
              0,
              (s = T(t, (r = "scroll" + n)))
                ? s() - tI(t)()[i]
                : tz(t)
                ? (q[r] || U[r]) - tN(n)
                : t[r] - t["offset" + n]
            );
          },
          tV = function (t, e) {
            for (var r = 0; r < ts.length; r += 3)
              (!e || ~e.indexOf(ts[r + 1])) && t(ts[r], ts[r + 1], ts[r + 2]);
          },
          tY = function (t) {
            return "string" == typeof t;
          },
          tH = function (t) {
            return "function" == typeof t;
          },
          tW = function (t) {
            return "number" == typeof t;
          },
          tq = function (t) {
            return "object" == typeof t;
          },
          tU = function (t, e, r) {
            return t && t.progress(e ? 0 : 1) && r && t.pause();
          },
          tX = function (t, e) {
            if (t.enabled) {
              var r = e(t);
              r && r.totalTime && (t.callbackAnimation = r);
            }
          },
          tG = Math.abs,
          tZ = "left",
          t$ = "right",
          tQ = "bottom",
          tJ = "width",
          tK = "height",
          t0 = "Right",
          t1 = "Left",
          t2 = "Bottom",
          t5 = "padding",
          t3 = "margin",
          t8 = "Width",
          t4 = "Height",
          t6 = function (t) {
            return H.getComputedStyle(t);
          },
          t9 = function (t) {
            var e = t6(t).position;
            t.style.position =
              "absolute" === e || "fixed" === e ? e : "relative";
          },
          t7 = function (t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t;
          },
          et = function (t, e) {
            var r =
                e &&
                "matrix(1, 0, 0, 1, 0, 0)" !== t6(t)[te] &&
                V.to(t, {
                  x: 0,
                  y: 0,
                  xPercent: 0,
                  yPercent: 0,
                  rotation: 0,
                  rotationX: 0,
                  rotationY: 0,
                  scale: 1,
                  skewX: 0,
                  skewY: 0,
                }).progress(1),
              n = t.getBoundingClientRect();
            return r && r.progress(0).kill(), n;
          },
          ee = function (t, e) {
            var r = e.d2;
            return t["offset" + r] || t["client" + r] || 0;
          },
          er = function (t) {
            var e,
              r = [],
              n = t.labels,
              i = t.duration();
            for (e in n) r.push(n[e] / i);
            return r;
          },
          en = function (t) {
            var e = V.utils.snap(t),
              r =
                Array.isArray(t) &&
                t.slice(0).sort(function (t, e) {
                  return t - e;
                });
            return r
              ? function (t, n, i) {
                  var s;
                  if ((void 0 === i && (i = 0.001), !n)) return e(t);
                  if (n > 0) {
                    for (t -= i, s = 0; s < r.length; s++)
                      if (r[s] >= t) return r[s];
                    return r[s - 1];
                  }
                  for (s = r.length, t += i; s--; ) if (r[s] <= t) return r[s];
                  return r[0];
                }
              : function (r, n, i) {
                  void 0 === i && (i = 0.001);
                  var s = e(r);
                  return !n || Math.abs(s - r) < i || s - r < 0 == n < 0
                    ? s
                    : e(n < 0 ? r - t : r + t);
                };
          },
          ei = function (t, e, r, n) {
            return r.split(",").forEach(function (r) {
              return t(e, r, n);
            });
          },
          es = function (t, e, r, n, i) {
            return t.addEventListener(e, r, { passive: !n, capture: !!i });
          },
          eo = function (t, e, r, n) {
            return t.removeEventListener(e, r, !!n);
          },
          ea = function (t, e, r) {
            (r = r && r.wheelHandler) &&
              (t(e, "wheel", r), t(e, "touchmove", r));
          },
          eu = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal",
          },
          el = { toggleActions: "play", anticipatePin: 0 },
          ec = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
          eh = function (t, e) {
            if (tY(t)) {
              var r = t.indexOf("="),
                n = ~r
                  ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1))
                  : 0;
              ~r &&
                (t.indexOf("%") > r && (n *= e / 100),
                (t = t.substr(0, r - 1))),
                (t =
                  n +
                  (t in ec
                    ? ec[t] * e
                    : ~t.indexOf("%")
                    ? (parseFloat(t) * e) / 100
                    : parseFloat(t) || 0));
            }
            return t;
          },
          ef = function (t, e, r, n, i, s, o, a) {
            var u = i.startColor,
              l = i.endColor,
              c = i.fontSize,
              h = i.indent,
              f = i.fontWeight,
              d = W.createElement("div"),
              p = tz(r) || "fixed" === T(r, "pinType"),
              m = -1 !== t.indexOf("scroller"),
              g = p ? U : r,
              _ = -1 !== t.indexOf("start"),
              v = _ ? u : l,
              y =
                "border-color:" +
                v +
                ";font-size:" +
                c +
                ";color:" +
                v +
                ";font-weight:" +
                f +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
              (y += "position:" + ((m || a) && p ? "fixed;" : "absolute;")),
              (m || a || !p) &&
                (y += (n === A ? t$ : tQ) + ":" + (s + parseFloat(h)) + "px;"),
              o &&
                (y +=
                  "box-sizing:border-box;text-align:left;width:" +
                  o.offsetWidth +
                  "px;"),
              (d._isStart = _),
              d.setAttribute(
                "class",
                "gsap-marker-" + t + (e ? " marker-" + e : "")
              ),
              (d.style.cssText = y),
              (d.innerText = e || 0 === e ? t + "-" + e : t),
              g.children[0]
                ? g.insertBefore(d, g.children[0])
                : g.appendChild(d),
              (d._offset = d["offset" + n.op.d2]),
              ed(d, 0, n, _),
              d
            );
          },
          ed = function (t, e, r, n) {
            var i = { display: "block" },
              s = r[n ? "os2" : "p2"],
              o = r[n ? "p2" : "os2"];
            (t._isFlipped = n),
              (i[r.a + "Percent"] = n ? -100 : 0),
              (i[r.a] = n ? "1px" : 0),
              (i["border" + s + t8] = 1),
              (i["border" + o + t8] = 0),
              (i[r.p] = e + "px"),
              V.set(t, i);
          },
          ep = [],
          em = {},
          eg = function () {
            return tE() - tC > 34 && (ty || (ty = requestAnimationFrame(eL)));
          },
          e_ = function () {
            (tl && tl.isPressed && !(tl.startX > U.clientWidth)) ||
              (v.cache++,
              tl ? ty || (ty = requestAnimationFrame(eL)) : eL(),
              tC || eT("scrollStart"),
              (tC = tE()));
          },
          ev = function () {
            (tf = H.innerWidth), (th = H.innerHeight);
          },
          ey = function () {
            v.cache++,
              !(
                !K &&
                !tu &&
                !W.fullscreenElement &&
                !W.webkitFullscreenElement &&
                (!tc ||
                  tf !== H.innerWidth ||
                  Math.abs(H.innerHeight - th) > 0.25 * H.innerHeight)
              ) || G.restart(!0);
          },
          ew = {},
          eb = [],
          ex = function t() {
            return eo(e$, "scrollEnd", t) || eP(!0);
          },
          eT = function (t) {
            return (
              (ew[t] &&
                ew[t].map(function (t) {
                  return t();
                })) ||
              eb
            );
          },
          eE = [],
          ek = function (t) {
            for (var e = 0; e < eE.length; e += 5)
              (!t || (eE[e + 4] && eE[e + 4].query === t)) &&
                ((eE[e].style.cssText = eE[e + 1]),
                eE[e].getBBox &&
                  eE[e].setAttribute("transform", eE[e + 2] || ""),
                (eE[e + 3].uncache = 1));
          },
          eC = function (t, e) {
            var r;
            for (tr = 0; tr < ep.length; tr++)
              (r = ep[tr]) &&
                (!e || r._ctx === e) &&
                (t ? r.kill(1) : r.revert(!0, !0));
            e && ek(e), e || eT("revert");
          },
          eS = function (t, e) {
            v.cache++,
              (e || !tw) &&
                v.forEach(function (t) {
                  return tH(t) && t.cacheID++ && (t.rec = 0);
                }),
              tY(t) && (H.history.scrollRestoration = tm = t);
          },
          eO = 0,
          eM = function () {
            if (tb !== eO) {
              var t = (tb = eO);
              requestAnimationFrame(function () {
                return t === eO && eP(!0);
              });
            }
          },
          eR = function () {
            U.appendChild(tg),
              (t_ = tg.offsetHeight || H.innerHeight),
              U.removeChild(tg);
          },
          eP = function (t, e) {
            if (tC && !t) {
              es(e$, "scrollEnd", ex);
              return;
            }
            eR(),
              (tw = e$.isRefreshing = !0),
              v.forEach(function (t) {
                return tH(t) && ++t.cacheID && (t.rec = t());
              });
            var r = eT("refreshInit");
            to && e$.sort(),
              e || eC(),
              v.forEach(function (t) {
                tH(t) &&
                  (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0));
              }),
              ep.slice(0).forEach(function (t) {
                return t.refresh();
              }),
              ep.forEach(function (t, e) {
                if (t._subPinOffset && t.pin) {
                  var r = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    n = t.pin[r];
                  t.revert(!0, 1),
                    t.adjustPinSpacing(t.pin[r] - n),
                    t.refresh();
                }
              }),
              ep.forEach(function (t) {
                var e = tB(t.scroller, t._dir);
                ("max" === t.vars.end || (t._endClamp && t.end > e)) &&
                  t.setPositions(t.start, Math.max(t.start + 1, e), !0);
              }),
              r.forEach(function (t) {
                return t && t.render && t.render(-1);
              }),
              v.forEach(function (t) {
                tH(t) &&
                  (t.smooth &&
                    requestAnimationFrame(function () {
                      return (t.target.style.scrollBehavior = "smooth");
                    }),
                  t.rec && t(t.rec));
              }),
              eS(tm, 1),
              G.pause(),
              eO++,
              (tw = 2),
              eL(2),
              ep.forEach(function (t) {
                return tH(t.vars.onRefresh) && t.vars.onRefresh(t);
              }),
              (tw = e$.isRefreshing = !1),
              eT("refresh");
          },
          eA = 0,
          ej = 1,
          eL = function (t) {
            if (!tw || 2 === t) {
              (e$.isUpdating = !0), tx && tx.update(0);
              var e = ep.length,
                r = tE(),
                n = r - tk >= 50,
                i = e && ep[0].scroll();
              if (
                ((ej = eA > i ? -1 : 1),
                tw || (eA = i),
                n &&
                  (tC && !tt && r - tC > 200 && ((tC = 0), eT("scrollEnd")),
                  (Q = tk),
                  (tk = r)),
                ej < 0)
              ) {
                for (tr = e; tr-- > 0; ) ep[tr] && ep[tr].update(0, n);
                ej = 1;
              } else for (tr = 0; tr < e; tr++) ep[tr] && ep[tr].update(0, n);
              e$.isUpdating = !1;
            }
            ty = 0;
          },
          eD = [
            tZ,
            "top",
            tQ,
            t$,
            t3 + t2,
            t3 + t0,
            t3 + "Top",
            t3 + t1,
            "display",
            "flexShrink",
            "float",
            "zIndex",
            "gridColumnStart",
            "gridColumnEnd",
            "gridRowStart",
            "gridRowEnd",
            "gridArea",
            "justifySelf",
            "alignSelf",
            "placeSelf",
            "order",
          ],
          ez = eD.concat([
            tJ,
            tK,
            "boxSizing",
            "max" + t8,
            "max" + t4,
            "position",
            t3,
            t5,
            t5 + "Top",
            t5 + t0,
            t5 + t2,
            t5 + t1,
          ]),
          eN = function (t, e, r) {
            eB(r);
            var n = t._gsap;
            if (n.spacerIsNative) eB(n.spacerState);
            else if (t._gsap.swappedIn) {
              var i = e.parentNode;
              i && (i.insertBefore(t, e), i.removeChild(e));
            }
            t._gsap.swappedIn = !1;
          },
          eI = function (t, e, r, n) {
            if (!t._gsap.swappedIn) {
              for (var i, s = eD.length, o = e.style, a = t.style; s--; )
                o[(i = eD[s])] = r[i];
              (o.position =
                "absolute" === r.position ? "absolute" : "relative"),
                "inline" === r.display && (o.display = "inline-block"),
                (a[tQ] = a[t$] = "auto"),
                (o.flexBasis = r.flexBasis || "auto"),
                (o.overflow = "visible"),
                (o.boxSizing = "border-box"),
                (o[tJ] = ee(t, P) + "px"),
                (o[tK] = ee(t, A) + "px"),
                (o[t5] = a[t3] = a.top = a[tZ] = "0"),
                eB(n),
                (a[tJ] = a["max" + t8] = r[tJ]),
                (a[tK] = a["max" + t4] = r[tK]),
                (a[t5] = r[t5]),
                t.parentNode !== e &&
                  (t.parentNode.insertBefore(e, t), e.appendChild(t)),
                (t._gsap.swappedIn = !0);
            }
          },
          eF = /([A-Z])/g,
          eB = function (t) {
            if (t) {
              var e,
                r,
                n = t.t.style,
                i = t.length,
                s = 0;
              for (
                (t.t._gsap || V.core.getCache(t.t)).uncache = 1;
                s < i;
                s += 2
              )
                (r = t[s + 1]),
                  (e = t[s]),
                  r
                    ? (n[e] = r)
                    : n[e] &&
                      n.removeProperty(e.replace(eF, "-$1").toLowerCase());
            }
          },
          eV = function (t) {
            for (var e = ez.length, r = t.style, n = [], i = 0; i < e; i++)
              n.push(ez[i], r[ez[i]]);
            return (n.t = t), n;
          },
          eY = function (t, e, r) {
            for (var n, i = [], s = t.length, o = r ? 8 : 0; o < s; o += 2)
              (n = t[o]), i.push(n, n in e ? e[n] : t[o + 1]);
            return (i.t = t.t), i;
          },
          eH = { left: 0, top: 0 },
          eW = function (t, e, r, n, i, s, o, a, u, l, c, h, f, d) {
            tH(t) && (t = t(a)),
              tY(t) &&
                "max" === t.substr(0, 3) &&
                (t = h + ("=" === t.charAt(4) ? eh("0" + t.substr(3), r) : 0));
            var p,
              m,
              g,
              _ = f ? f.time() : 0;
            if ((f && f.seek(0), isNaN(t) || (t = +t), tW(t)))
              f &&
                (t = V.utils.mapRange(
                  f.scrollTrigger.start,
                  f.scrollTrigger.end,
                  0,
                  h,
                  t
                )),
                o && ed(o, r, n, !0);
            else {
              tH(e) && (e = e(a));
              var v,
                y,
                w,
                b,
                x = (t || "0").split(" ");
              (v = et((g = j(e, a) || U)) || {}).left ||
                v.top ||
                "none" !== t6(g).display ||
                ((b = g.style.display),
                (g.style.display = "block"),
                (v = et(g)),
                b ? (g.style.display = b) : g.style.removeProperty("display")),
                (y = eh(x[0], v[n.d])),
                (w = eh(x[1] || "0", r)),
                (t = v[n.p] - u[n.p] - l + y + i - w),
                o && ed(o, w, n, r - w < 20 || (o._isStart && w > 20)),
                (r -= r - w);
            }
            if ((d && ((a[d] = t || -0.001), t < 0 && (t = 0)), s)) {
              var T = t + r,
                E = s._isStart;
              (p = "scroll" + n.d2),
                ed(
                  s,
                  T,
                  n,
                  (E && T > 20) ||
                    (!E &&
                      (c ? Math.max(U[p], q[p]) : s.parentNode[p]) <= T + 1)
                ),
                c &&
                  ((u = et(o)),
                  c &&
                    (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + "px"));
            }
            return (
              f &&
                g &&
                ((p = et(g)),
                f.seek(h),
                (m = et(g)),
                (f._caScrollDist = p[n.p] - m[n.p]),
                (t = (t / f._caScrollDist) * h)),
              f && f.seek(_),
              f ? t : Math.round(t)
            );
          },
          eq = /(webkit|moz|length|cssText|inset)/i,
          eU = function (t, e, r, n) {
            if (t.parentNode !== e) {
              var i,
                s,
                o = t.style;
              if (e === U) {
                for (i in ((t._stOrig = o.cssText), (s = t6(t))))
                  +i ||
                    eq.test(i) ||
                    !s[i] ||
                    "string" != typeof o[i] ||
                    "0" === i ||
                    (o[i] = s[i]);
                (o.top = r), (o.left = n);
              } else o.cssText = t._stOrig;
              (V.core.getCache(t).uncache = 1), e.appendChild(t);
            }
          },
          eX = function (t, e, r) {
            var n = e,
              i = n;
            return function (e) {
              var s = Math.round(t());
              return (
                s !== n &&
                  s !== i &&
                  Math.abs(s - n) > 3 &&
                  Math.abs(s - i) > 3 &&
                  ((e = s), r && r()),
                (i = n),
                (n = e),
                e
              );
            };
          },
          eG = function (t, e, r) {
            var n = {};
            (n[e.p] = "+=" + r), V.set(t, n);
          },
          eZ = function (t, e) {
            var r = L(t, e),
              n = "_scroll" + e.p2,
              i = function e(i, s, o, a, u) {
                var l = e.tween,
                  c = s.onComplete,
                  h = {};
                o = o || r();
                var f = eX(r, o, function () {
                  l.kill(), (e.tween = 0);
                });
                return (
                  (u = (a && u) || 0),
                  (a = a || i - o),
                  l && l.kill(),
                  (s[n] = i),
                  (s.modifiers = h),
                  (h[n] = function () {
                    return f(o + a * l.ratio + u * l.ratio * l.ratio);
                  }),
                  (s.onUpdate = function () {
                    v.cache++, eL();
                  }),
                  (s.onComplete = function () {
                    (e.tween = 0), c && c.call(l);
                  }),
                  (l = e.tween = V.to(t, s))
                );
              };
            return (
              (t[n] = r),
              (r.wheelHandler = function () {
                return i.tween && i.tween.kill() && (i.tween = 0);
              }),
              es(t, "wheel", r.wheelHandler),
              e$.isTouch && es(t, "touchmove", r.wheelHandler),
              i
            );
          },
          e$ = (function () {
            function t(e, r) {
              Y ||
                t.register(V) ||
                console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                tp(this),
                this.init(e, r);
            }
            return (
              (t.prototype.init = function (e, r) {
                if (
                  ((this.progress = this.start = 0),
                  this.vars && this.kill(!0, !0),
                  !tS)
                ) {
                  this.update = this.refresh = this.kill = tA;
                  return;
                }
                var n,
                  i,
                  s,
                  o,
                  a,
                  u,
                  l,
                  c,
                  h,
                  f,
                  d,
                  p,
                  m,
                  g,
                  _,
                  w,
                  b,
                  x,
                  E,
                  k,
                  C,
                  S,
                  O,
                  M,
                  R,
                  D,
                  z,
                  N,
                  I,
                  F,
                  B,
                  Y,
                  X,
                  G,
                  J,
                  te,
                  tn,
                  ti,
                  ts,
                  tu,
                  tl,
                  tc = (e = t7(
                    tY(e) || tW(e) || e.nodeType ? { trigger: e } : e,
                    el
                  )),
                  th = tc.onUpdate,
                  tf = tc.toggleClass,
                  td = tc.id,
                  tp = tc.onToggle,
                  tm = tc.onRefresh,
                  tg = tc.scrub,
                  t_ = tc.trigger,
                  ty = tc.pin,
                  tb = tc.pinSpacing,
                  tk = tc.invalidateOnRefresh,
                  tR = tc.anticipatePin,
                  tP = tc.onScrubComplete,
                  tL = tc.onSnapComplete,
                  tD = tc.once,
                  tN = tc.snap,
                  tV = tc.pinReparent,
                  tZ = tc.pinSpacer,
                  t$ = tc.containerAnimation,
                  tQ = tc.fastScrollEnd,
                  ei = tc.preventOverlaps,
                  ea =
                    e.horizontal ||
                    (e.containerAnimation && !1 !== e.horizontal)
                      ? P
                      : A,
                  ec = !tg && 0 !== tg,
                  ed = j(e.scroller || H),
                  eg = V.core.getCache(ed),
                  ev = tz(ed),
                  ew =
                    ("pinType" in e
                      ? e.pinType
                      : T(ed, "pinType") || (ev && "fixed")) === "fixed",
                  eb = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                  eT = ec && e.toggleActions.split(" "),
                  eE = "markers" in e ? e.markers : el.markers,
                  ek = ev ? 0 : parseFloat(t6(ed)["border" + ea.p2 + t8]) || 0,
                  eC = this,
                  eS =
                    e.onRefreshInit &&
                    function () {
                      return e.onRefreshInit(eC);
                    },
                  eO = tF(ed, ev, ea),
                  eR =
                    !ev || ~y.indexOf(ed)
                      ? tI(ed)
                      : function () {
                          return eH;
                        },
                  eP = 0,
                  eA = 0,
                  eL = 0,
                  eD = L(ed, ea);
                if (
                  ((eC._startClamp = eC._endClamp = !1),
                  (eC._dir = ea),
                  (tR *= 45),
                  (eC.scroller = ed),
                  (eC.scroll = t$ ? t$.time.bind(t$) : eD),
                  (u = eD()),
                  (eC.vars = e),
                  (r = r || e.animation),
                  "refreshPriority" in e &&
                    ((to = 1), -9999 === e.refreshPriority && (tx = eC)),
                  (eg.tweenScroll = eg.tweenScroll || {
                    top: eZ(ed, A),
                    left: eZ(ed, P),
                  }),
                  (eC.tweenTo = s = eg.tweenScroll[ea.p]),
                  (eC.scrubDuration = function (t) {
                    (J = tW(t) && t)
                      ? G
                        ? G.duration(t)
                        : (G = V.to(r, {
                            ease: "expo",
                            totalProgress: "+=0",
                            duration: J,
                            paused: !0,
                            onComplete: function () {
                              return tP && tP(eC);
                            },
                          }))
                      : (G && G.progress(1).kill(), (G = 0));
                  }),
                  r &&
                    ((r.vars.lazy = !1),
                    (r._initted && !eC.isReverted) ||
                      (!1 !== r.vars.immediateRender &&
                        !1 !== e.immediateRender &&
                        r.duration() &&
                        r.render(0, !0, !0)),
                    (eC.animation = r.pause()),
                    (r.scrollTrigger = eC),
                    eC.scrubDuration(tg),
                    (Y = 0),
                    td || (td = r.vars.id)),
                  tN &&
                    ((!tq(tN) || tN.push) && (tN = { snapTo: tN }),
                    "scrollBehavior" in U.style &&
                      V.set(ev ? [U, q] : ed, { scrollBehavior: "auto" }),
                    v.forEach(function (t) {
                      return (
                        tH(t) &&
                        t.target === (ev ? W.scrollingElement || q : ed) &&
                        (t.smooth = !1)
                      );
                    }),
                    (a = tH(tN.snapTo)
                      ? tN.snapTo
                      : "labels" === tN.snapTo
                      ? ((n = r),
                        function (t) {
                          return V.utils.snap(er(n), t);
                        })
                      : "labelsDirectional" === tN.snapTo
                      ? ((i = r),
                        function (t, e) {
                          return en(er(i))(t, e.direction);
                        })
                      : !1 !== tN.directional
                      ? function (t, e) {
                          return en(tN.snapTo)(
                            t,
                            tE() - eA < 500 ? 0 : e.direction
                          );
                        }
                      : V.utils.snap(tN.snapTo)),
                    (te = tq((te = tN.duration || { min: 0.1, max: 2 }))
                      ? $(te.min, te.max)
                      : $(te, te)),
                    (tn = V.delayedCall(tN.delay || J / 2 || 0.1, function () {
                      var t = eD(),
                        e = tE() - eA < 500,
                        n = s.tween;
                      if (
                        (e || 10 > Math.abs(eC.getVelocity())) &&
                        !n &&
                        !tt &&
                        eP !== t
                      ) {
                        var i = (t - c) / w,
                          o = r && !ec ? r.totalProgress() : i,
                          u = e ? 0 : ((o - X) / (tE() - Q)) * 1e3 || 0,
                          l = V.utils.clamp(-i, 1 - i, (tG(u / 2) * u) / 0.185),
                          f = i + (!1 === tN.inertia ? 0 : l),
                          d = $(0, 1, a(f, eC)),
                          p = Math.round(c + d * w),
                          m = tN,
                          g = m.onStart,
                          _ = m.onInterrupt,
                          v = m.onComplete;
                        if (t <= h && t >= c && p !== t) {
                          if (n && !n._initted && n.data <= tG(p - t)) return;
                          !1 === tN.inertia && (l = d - i),
                            s(
                              p,
                              {
                                duration: te(
                                  tG(
                                    (0.185 * Math.max(tG(f - o), tG(d - o))) /
                                      u /
                                      0.05 || 0
                                  )
                                ),
                                ease: tN.ease || "power3",
                                data: tG(p - t),
                                onInterrupt: function () {
                                  return tn.restart(!0) && _ && _(eC);
                                },
                                onComplete: function () {
                                  eC.update(),
                                    (eP = eD()),
                                    (Y = X =
                                      r && !ec
                                        ? r.totalProgress()
                                        : eC.progress),
                                    tL && tL(eC),
                                    v && v(eC);
                                },
                              },
                              t,
                              l * w,
                              p - t - l * w
                            ),
                            g && g(eC, s.tween);
                        }
                      } else eC.isActive && eP !== t && tn.restart(!0);
                    }).pause())),
                  td && (em[td] = eC),
                  (tl =
                    (t_ = eC.trigger = j(t_ || (!0 !== ty && ty))) &&
                    t_._gsap &&
                    t_._gsap.stRevert) && (tl = tl(eC)),
                  (ty = !0 === ty ? t_ : j(ty)),
                  tY(tf) && (tf = { targets: t_, className: tf }),
                  ty &&
                    (!1 === tb ||
                      tb === t3 ||
                      (tb =
                        (!!tb ||
                          !ty.parentNode ||
                          !ty.parentNode.style ||
                          "flex" !== t6(ty.parentNode).display) &&
                        t5),
                    (eC.pin = ty),
                    (o = V.core.getCache(ty)).spacer
                      ? (b = o.pinState)
                      : (tZ &&
                          ((tZ = j(tZ)) &&
                            !tZ.nodeType &&
                            (tZ = tZ.current || tZ.nativeElement),
                          (o.spacerIsNative = !!tZ),
                          tZ && (o.spacerState = eV(tZ))),
                        (o.spacer = k = tZ || W.createElement("div")),
                        k.classList.add("pin-spacer"),
                        td && k.classList.add("pin-spacer-" + td),
                        (o.pinState = b = eV(ty))),
                    !1 !== e.force3D && V.set(ty, { force3D: !0 }),
                    (eC.spacer = k = o.spacer),
                    (D = (B = t6(ty))[tb + ea.os2]),
                    (S = V.getProperty(ty)),
                    (O = V.quickSetter(ty, ea.a, "px")),
                    eI(ty, k, B),
                    (E = eV(ty))),
                  eE)
                ) {
                  (p = ef(
                    "scroller-start",
                    td,
                    ed,
                    ea,
                    (g = tq(eE) ? t7(eE, eu) : eu),
                    0
                  )),
                    (m = ef("scroller-end", td, ed, ea, g, 0, p)),
                    (C = p["offset" + ea.op.d2]);
                  var ez = j(T(ed, "content") || ed);
                  (f = this.markerStart = ef("start", td, ez, ea, g, C, 0, t$)),
                    (d = this.markerEnd = ef("end", td, ez, ea, g, C, 0, t$)),
                    t$ && (tu = V.quickSetter([f, d], ea.a, "px")),
                    ew ||
                      (y.length && !0 === T(ed, "fixedMarkers")) ||
                      (t9(ev ? U : ed),
                      V.set([p, m], { force3D: !0 }),
                      (N = V.quickSetter(p, ea.a, "px")),
                      (F = V.quickSetter(m, ea.a, "px")));
                }
                if (t$) {
                  var eF = t$.vars.onUpdate,
                    eq = t$.vars.onUpdateParams;
                  t$.eventCallback("onUpdate", function () {
                    eC.update(0, 0, 1), eF && eF.apply(t$, eq || []);
                  });
                }
                if (
                  ((eC.previous = function () {
                    return ep[ep.indexOf(eC) - 1];
                  }),
                  (eC.next = function () {
                    return ep[ep.indexOf(eC) + 1];
                  }),
                  (eC.revert = function (t, e) {
                    if (!e) return eC.kill(!0);
                    var n = !1 !== t || !eC.enabled,
                      i = K;
                    n !== eC.isReverted &&
                      (n &&
                        ((ti = Math.max(eD(), eC.scroll.rec || 0)),
                        (eL = eC.progress),
                        (ts = r && r.progress())),
                      f &&
                        [f, d, p, m].forEach(function (t) {
                          return (t.style.display = n ? "none" : "block");
                        }),
                      n && ((K = eC), eC.update(n)),
                      !ty ||
                        (tV && eC.isActive) ||
                        (n ? eN(ty, k, b) : eI(ty, k, t6(ty), z)),
                      n || eC.update(n),
                      (K = i),
                      (eC.isReverted = n));
                  }),
                  (eC.refresh = function (n, i, o, a) {
                    if ((!K && eC.enabled) || i) {
                      if (ty && n && tC) {
                        es(t, "scrollEnd", ex);
                        return;
                      }
                      !tw && eS && eS(eC),
                        (K = eC),
                        s.tween && !o && (s.tween.kill(), (s.tween = 0)),
                        G && G.pause(),
                        tk && r && r.revert({ kill: !1 }).invalidate(),
                        eC.isReverted || eC.revert(!0, !0),
                        (eC._subPinOffset = !1);
                      var g,
                        v,
                        y,
                        T,
                        C,
                        O,
                        D,
                        N,
                        F,
                        B,
                        Y,
                        H,
                        X,
                        Z = eO(),
                        $ = eR(),
                        Q = t$ ? t$.duration() : tB(ed, ea),
                        J = w <= 0.01,
                        tt = 0,
                        te = a || 0,
                        tr = tq(o) ? o.end : e.end,
                        to = e.endTrigger || t_,
                        tu = tq(o)
                          ? o.start
                          : e.start ||
                            (0 !== e.start && t_ ? (ty ? "0 0" : "0 100%") : 0),
                        tl = (eC.pinnedContainer =
                          e.pinnedContainer && j(e.pinnedContainer, eC)),
                        tc = (t_ && Math.max(0, ep.indexOf(eC))) || 0,
                        th = tc;
                      for (
                        eE &&
                        tq(o) &&
                        ((H = V.getProperty(p, ea.p)),
                        (X = V.getProperty(m, ea.p)));
                        th--;

                      )
                        (O = ep[th]).end || O.refresh(0, 1) || (K = eC),
                          (D = O.pin) &&
                            (D === t_ || D === ty || D === tl) &&
                            !O.isReverted &&
                            (B || (B = []), B.unshift(O), O.revert(!0, !0)),
                          O !== ep[th] && (tc--, th--);
                      for (
                        tH(tu) && (tu = tu(eC)),
                          tu = tO(tu, "start", eC),
                          c =
                            eW(
                              tu,
                              t_,
                              Z,
                              ea,
                              eD(),
                              f,
                              p,
                              eC,
                              $,
                              ek,
                              ew,
                              Q,
                              t$,
                              eC._startClamp && "_startClamp"
                            ) || (ty ? -0.001 : 0),
                          tH(tr) && (tr = tr(eC)),
                          tY(tr) &&
                            !tr.indexOf("+=") &&
                            (~tr.indexOf(" ")
                              ? (tr = (tY(tu) ? tu.split(" ")[0] : "") + tr)
                              : ((tt = eh(tr.substr(2), Z)),
                                (tr = tY(tu)
                                  ? tu
                                  : (t$
                                      ? V.utils.mapRange(
                                          0,
                                          t$.duration(),
                                          t$.scrollTrigger.start,
                                          t$.scrollTrigger.end,
                                          c
                                        )
                                      : c) + tt),
                                (to = t_))),
                          tr = tO(tr, "end", eC),
                          h =
                            Math.max(
                              c,
                              eW(
                                tr || (to ? "100% 0" : Q),
                                to,
                                Z,
                                ea,
                                eD() + tt,
                                d,
                                m,
                                eC,
                                $,
                                ek,
                                ew,
                                Q,
                                t$,
                                eC._endClamp && "_endClamp"
                              )
                            ) || -0.001,
                          tt = 0,
                          th = tc;
                        th--;

                      )
                        (D = (O = ep[th]).pin) &&
                          O.start - O._pinPush <= c &&
                          !t$ &&
                          O.end > 0 &&
                          ((g =
                            O.end -
                            (eC._startClamp ? Math.max(0, O.start) : O.start)),
                          ((D === t_ && O.start - O._pinPush < c) ||
                            D === tl) &&
                            isNaN(tu) &&
                            (tt += g * (1 - O.progress)),
                          D === ty && (te += g));
                      if (
                        ((c += tt),
                        (h += tt),
                        eC._startClamp && (eC._startClamp += tt),
                        eC._endClamp &&
                          !tw &&
                          ((eC._endClamp = h || -0.001),
                          (h = Math.min(h, tB(ed, ea)))),
                        (w = h - c || ((c -= 0.01) && 0.001)),
                        J &&
                          (eL = V.utils.clamp(
                            0,
                            1,
                            V.utils.normalize(c, h, ti)
                          )),
                        (eC._pinPush = te),
                        f &&
                          tt &&
                          (((g = {})[ea.a] = "+=" + tt),
                          tl && (g[ea.p] = "-=" + eD()),
                          V.set([f, d], g)),
                        ty)
                      )
                        (g = t6(ty)),
                          (T = ea === A),
                          (y = eD()),
                          (M = parseFloat(S(ea.a)) + te),
                          !Q &&
                            h > 1 &&
                            ((Y = {
                              style: (Y = (ev ? W.scrollingElement || q : ed)
                                .style),
                              value: Y["overflow" + ea.a.toUpperCase()],
                            }),
                            ev &&
                              "scroll" !==
                                t6(U)["overflow" + ea.a.toUpperCase()] &&
                              (Y.style["overflow" + ea.a.toUpperCase()] =
                                "scroll")),
                          eI(ty, k, g),
                          (E = eV(ty)),
                          (v = et(ty, !0)),
                          (N = ew && L(ed, T ? P : A)()),
                          tb &&
                            (((z = [tb + ea.os2, w + te + "px"]).t = k),
                            (th = tb === t5 ? ee(ty, ea) + w + te : 0) &&
                              z.push(ea.d, th + "px"),
                            eB(z),
                            tl &&
                              ep.forEach(function (t) {
                                t.pin === tl &&
                                  !1 !== t.vars.pinSpacing &&
                                  (t._subPinOffset = !0);
                              }),
                            ew && eD(ti)),
                          ew &&
                            (((C = {
                              top: v.top + (T ? y - c : N) + "px",
                              left: v.left + (T ? N : y - c) + "px",
                              boxSizing: "border-box",
                              position: "fixed",
                            })[tJ] = C["max" + t8] =
                              Math.ceil(v.width) + "px"),
                            (C[tK] = C["max" + t4] =
                              Math.ceil(v.height) + "px"),
                            (C[t3] =
                              C[t3 + "Top"] =
                              C[t3 + t0] =
                              C[t3 + t2] =
                              C[t3 + t1] =
                                "0"),
                            (C[t5] = g[t5]),
                            (C[t5 + "Top"] = g[t5 + "Top"]),
                            (C[t5 + t0] = g[t5 + t0]),
                            (C[t5 + t2] = g[t5 + t2]),
                            (C[t5 + t1] = g[t5 + t1]),
                            (x = eY(b, C, tV)),
                            tw && eD(0)),
                          r
                            ? ((F = r._initted),
                              ta(1),
                              r.render(r.duration(), !0, !0),
                              (R = S(ea.a) - M + w + te),
                              (I = Math.abs(w - R) > 1),
                              ew && I && x.splice(x.length - 2, 2),
                              r.render(0, !0, !0),
                              F || r.invalidate(!0),
                              r.parent || r.totalTime(r.totalTime()),
                              ta(0))
                            : (R = w),
                          Y &&
                            (Y.value
                              ? (Y.style["overflow" + ea.a.toUpperCase()] =
                                  Y.value)
                              : Y.style.removeProperty("overflow-" + ea.a));
                      else if (t_ && eD() && !t$)
                        for (v = t_.parentNode; v && v !== U; )
                          v._pinOffset &&
                            ((c -= v._pinOffset), (h -= v._pinOffset)),
                            (v = v.parentNode);
                      B &&
                        B.forEach(function (t) {
                          return t.revert(!1, !0);
                        }),
                        (eC.start = c),
                        (eC.end = h),
                        (u = l = tw ? ti : eD()),
                        t$ || tw || (u < ti && eD(ti), (eC.scroll.rec = 0)),
                        eC.revert(!1, !0),
                        (eA = tE()),
                        tn && ((eP = -1), tn.restart(!0)),
                        (K = 0),
                        r &&
                          ec &&
                          (r._initted || ts) &&
                          r.progress() !== ts &&
                          r.progress(ts || 0, !0).render(r.time(), !0, !0),
                        (J || eL !== eC.progress || t$) &&
                          (r &&
                            !ec &&
                            r.totalProgress(
                              t$ && c < -0.001 && !eL
                                ? V.utils.normalize(c, h, 0)
                                : eL,
                              !0
                            ),
                          (eC.progress = J || (u - c) / w === eL ? 0 : eL)),
                        ty &&
                          tb &&
                          (k._pinOffset = Math.round(eC.progress * R)),
                        G && G.invalidate(),
                        isNaN(H) ||
                          ((H -= V.getProperty(p, ea.p)),
                          (X -= V.getProperty(m, ea.p)),
                          eG(p, ea, H),
                          eG(f, ea, H - (a || 0)),
                          eG(m, ea, X),
                          eG(d, ea, X - (a || 0))),
                        J && !tw && eC.update(),
                        !tm || tw || _ || ((_ = !0), tm(eC), (_ = !1));
                    }
                  }),
                  (eC.getVelocity = function () {
                    return ((eD() - l) / (tE() - Q)) * 1e3 || 0;
                  }),
                  (eC.endAnimation = function () {
                    tU(eC.callbackAnimation),
                      r &&
                        (G
                          ? G.progress(1)
                          : r.paused()
                          ? ec || tU(r, eC.direction < 0, 1)
                          : tU(r, r.reversed()));
                  }),
                  (eC.labelToScroll = function (t) {
                    return (
                      (r &&
                        r.labels &&
                        (c || eC.refresh() || c) +
                          (r.labels[t] / r.duration()) * w) ||
                      0
                    );
                  }),
                  (eC.getTrailing = function (t) {
                    var e = ep.indexOf(eC),
                      r =
                        eC.direction > 0
                          ? ep.slice(0, e).reverse()
                          : ep.slice(e + 1);
                    return (
                      tY(t)
                        ? r.filter(function (e) {
                            return e.vars.preventOverlaps === t;
                          })
                        : r
                    ).filter(function (t) {
                      return eC.direction > 0 ? t.end <= c : t.start >= h;
                    });
                  }),
                  (eC.update = function (t, e, n) {
                    if (!t$ || n || t) {
                      var i,
                        o,
                        a,
                        f,
                        d,
                        m,
                        g,
                        _ = !0 === tw ? ti : eC.scroll(),
                        v = t ? 0 : (_ - c) / w,
                        y = v < 0 ? 0 : v > 1 ? 1 : v || 0,
                        b = eC.progress;
                      if (
                        (e &&
                          ((l = u),
                          (u = t$ ? eD() : _),
                          tN &&
                            ((X = Y), (Y = r && !ec ? r.totalProgress() : y))),
                        tR &&
                          !y &&
                          ty &&
                          !K &&
                          !tT &&
                          tC &&
                          c < _ + ((_ - l) / (tE() - Q)) * tR &&
                          (y = 1e-4),
                        y !== b && eC.enabled)
                      ) {
                        if (
                          ((f =
                            (d =
                              (i = eC.isActive = !!y && y < 1) !=
                              (!!b && b < 1)) || !!y != !!b),
                          (eC.direction = y > b ? 1 : -1),
                          (eC.progress = y),
                          f &&
                            !K &&
                            ((o = y && !b ? 0 : 1 === y ? 1 : 1 === b ? 2 : 3),
                            ec &&
                              ((a =
                                (!d && "none" !== eT[o + 1] && eT[o + 1]) ||
                                eT[o]),
                              (g =
                                r &&
                                ("complete" === a ||
                                  "reset" === a ||
                                  a in r)))),
                          ei &&
                            (d || g) &&
                            (g || tg || !r) &&
                            (tH(ei)
                              ? ei(eC)
                              : eC.getTrailing(ei).forEach(function (t) {
                                  return t.endAnimation();
                                })),
                          !ec &&
                            (!G || K || tT
                              ? r && r.totalProgress(y, !!(K && (eA || t)))
                              : (G._dp._time - G._start !== G._time &&
                                  G.render(G._dp._time - G._start),
                                G.resetTo
                                  ? G.resetTo(
                                      "totalProgress",
                                      y,
                                      r._tTime / r._tDur
                                    )
                                  : ((G.vars.totalProgress = y),
                                    G.invalidate().restart()))),
                          ty)
                        ) {
                          if ((t && tb && (k.style[tb + ea.os2] = D), ew)) {
                            if (f) {
                              if (
                                ((m =
                                  !t &&
                                  y > b &&
                                  h + 1 > _ &&
                                  _ + 1 >= tB(ed, ea)),
                                tV)
                              ) {
                                if (!t && (i || m)) {
                                  var T = et(ty, !0),
                                    C = _ - c;
                                  eU(
                                    ty,
                                    U,
                                    T.top + (ea === A ? C : 0) + "px",
                                    T.left + (ea === A ? 0 : C) + "px"
                                  );
                                } else eU(ty, k);
                              }
                              eB(i || m ? x : E),
                                (I && y < 1 && i) ||
                                  O(M + (1 !== y || m ? 0 : R));
                            }
                          } else O(tj(M + R * y));
                        }
                        !tN || s.tween || K || tT || tn.restart(!0),
                          tf &&
                            (d || (tD && y && (y < 1 || !tv))) &&
                            Z(tf.targets).forEach(function (t) {
                              return t.classList[i || tD ? "add" : "remove"](
                                tf.className
                              );
                            }),
                          !th || ec || t || th(eC),
                          f && !K
                            ? (ec &&
                                (g &&
                                  ("complete" === a
                                    ? r.pause().totalProgress(1)
                                    : "reset" === a
                                    ? r.restart(!0).pause()
                                    : "restart" === a
                                    ? r.restart(!0)
                                    : r[a]()),
                                th && th(eC)),
                              (d || !tv) &&
                                (tp && d && tX(eC, tp),
                                eb[o] && tX(eC, eb[o]),
                                tD && (1 === y ? eC.kill(!1, 1) : (eb[o] = 0)),
                                !d &&
                                  eb[(o = 1 === y ? 1 : 3)] &&
                                  tX(eC, eb[o])),
                              tQ &&
                                !i &&
                                Math.abs(eC.getVelocity()) >
                                  (tW(tQ) ? tQ : 2500) &&
                                (tU(eC.callbackAnimation),
                                G
                                  ? G.progress(1)
                                  : tU(r, "reverse" === a ? 1 : !y, 1)))
                            : ec && th && !K && th(eC);
                      }
                      if (F) {
                        var S = t$
                          ? (_ / t$.duration()) * (t$._caScrollDist || 0)
                          : _;
                        N(S + (p._isFlipped ? 1 : 0)), F(S);
                      }
                      tu && tu((-_ / t$.duration()) * (t$._caScrollDist || 0));
                    }
                  }),
                  (eC.enable = function (e, r) {
                    eC.enabled ||
                      ((eC.enabled = !0),
                      es(ed, "resize", ey),
                      ev || es(ed, "scroll", e_),
                      eS && es(t, "refreshInit", eS),
                      !1 !== e && ((eC.progress = eL = 0), (u = l = eP = eD())),
                      !1 !== r && eC.refresh());
                  }),
                  (eC.getTween = function (t) {
                    return t && s ? s.tween : G;
                  }),
                  (eC.setPositions = function (t, e, r, n) {
                    if (t$) {
                      var i = t$.scrollTrigger,
                        s = t$.duration(),
                        o = i.end - i.start;
                      (t = i.start + (o * t) / s), (e = i.start + (o * e) / s);
                    }
                    eC.refresh(
                      !1,
                      !1,
                      {
                        start: tM(t, r && !!eC._startClamp),
                        end: tM(e, r && !!eC._endClamp),
                      },
                      n
                    ),
                      eC.update();
                  }),
                  (eC.adjustPinSpacing = function (t) {
                    if (z && t) {
                      var e = z.indexOf(ea.d) + 1;
                      (z[e] = parseFloat(z[e]) + t + "px"),
                        (z[1] = parseFloat(z[1]) + t + "px"),
                        eB(z);
                    }
                  }),
                  (eC.disable = function (e, r) {
                    if (
                      eC.enabled &&
                      (!1 !== e && eC.revert(!0, !0),
                      (eC.enabled = eC.isActive = !1),
                      r || (G && G.pause()),
                      (ti = 0),
                      o && (o.uncache = 1),
                      eS && eo(t, "refreshInit", eS),
                      tn &&
                        (tn.pause(),
                        s.tween && s.tween.kill() && (s.tween = 0)),
                      !ev)
                    ) {
                      for (var n = ep.length; n--; )
                        if (ep[n].scroller === ed && ep[n] !== eC) return;
                      eo(ed, "resize", ey), ev || eo(ed, "scroll", e_);
                    }
                  }),
                  (eC.kill = function (t, n) {
                    eC.disable(t, n), G && !n && G.kill(), td && delete em[td];
                    var i = ep.indexOf(eC);
                    i >= 0 && ep.splice(i, 1),
                      i === tr && ej > 0 && tr--,
                      (i = 0),
                      ep.forEach(function (t) {
                        return t.scroller === eC.scroller && (i = 1);
                      }),
                      i || tw || (eC.scroll.rec = 0),
                      r &&
                        ((r.scrollTrigger = null),
                        t && r.revert({ kill: !1 }),
                        n || r.kill()),
                      f &&
                        [f, d, p, m].forEach(function (t) {
                          return t.parentNode && t.parentNode.removeChild(t);
                        }),
                      tx === eC && (tx = 0),
                      ty &&
                        (o && (o.uncache = 1),
                        (i = 0),
                        ep.forEach(function (t) {
                          return t.pin === ty && i++;
                        }),
                        i || (o.spacer = 0)),
                      e.onKill && e.onKill(eC);
                  }),
                  ep.push(eC),
                  eC.enable(!1, !1),
                  tl && tl(eC),
                  r && r.add && !w)
                ) {
                  var eX = eC.update;
                  (eC.update = function () {
                    (eC.update = eX), c || h || eC.refresh();
                  }),
                    V.delayedCall(0.01, eC.update),
                    (w = 0.01),
                    (c = h = 0);
                } else eC.refresh();
                ty && eM();
              }),
              (t.register = function (e) {
                return (
                  Y ||
                    ((V = e || tD()),
                    tL() && window.document && t.enable(),
                    (Y = tS)),
                  Y
                );
              }),
              (t.defaults = function (t) {
                if (t) for (var e in t) el[e] = t[e];
                return el;
              }),
              (t.disable = function (t, e) {
                (tS = 0),
                  ep.forEach(function (r) {
                    return r[e ? "kill" : "disable"](t);
                  }),
                  eo(H, "wheel", e_),
                  eo(W, "scroll", e_),
                  clearInterval(J),
                  eo(W, "touchcancel", tA),
                  eo(U, "touchstart", tA),
                  ei(eo, W, "pointerdown,touchstart,mousedown", tR),
                  ei(eo, W, "pointerup,touchend,mouseup", tP),
                  G.kill(),
                  tV(eo);
                for (var r = 0; r < v.length; r += 3)
                  ea(eo, v[r], v[r + 1]), ea(eo, v[r], v[r + 2]);
              }),
              (t.enable = function () {
                if (
                  ((H = window),
                  (q = (W = document).documentElement),
                  (U = W.body),
                  V &&
                    ((Z = V.utils.toArray),
                    ($ = V.utils.clamp),
                    (tp = V.core.context || tA),
                    (ta = V.core.suppressOverwrites || tA),
                    (tm = H.history.scrollRestoration || "auto"),
                    (eA = H.pageYOffset),
                    V.core.globals("ScrollTrigger", t),
                    U))
                ) {
                  (tS = 1),
                    ((tg = document.createElement("div")).style.height =
                      "100vh"),
                    (tg.style.position = "absolute"),
                    eR(),
                    (function t() {
                      return tS && requestAnimationFrame(t);
                    })(),
                    B.register(V),
                    (t.isTouch = B.isTouch),
                    (td =
                      B.isTouch &&
                      /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                    es(H, "wheel", e_),
                    (X = [H, W, q, U]),
                    V.matchMedia
                      ? ((t.matchMedia = function (t) {
                          var e,
                            r = V.matchMedia();
                          for (e in t) r.add(e, t[e]);
                          return r;
                        }),
                        V.addEventListener("matchMediaInit", function () {
                          return eC();
                        }),
                        V.addEventListener("matchMediaRevert", function () {
                          return ek();
                        }),
                        V.addEventListener("matchMedia", function () {
                          eP(0, 1), eT("matchMedia");
                        }),
                        V.matchMedia("(orientation: portrait)", function () {
                          return ev(), ev;
                        }))
                      : console.warn("Requires GSAP 3.11.0 or later"),
                    ev(),
                    es(W, "scroll", e_);
                  var e,
                    r,
                    n = U.style,
                    i = n.borderTopStyle,
                    s = V.core.Animation.prototype;
                  for (
                    s.revert ||
                      Object.defineProperty(s, "revert", {
                        value: function () {
                          return this.time(-0.01, !0);
                        },
                      }),
                      n.borderTopStyle = "solid",
                      e = et(U),
                      A.m = Math.round(e.top + A.sc()) || 0,
                      P.m = Math.round(e.left + P.sc()) || 0,
                      i
                        ? (n.borderTopStyle = i)
                        : n.removeProperty("border-top-style"),
                      J = setInterval(eg, 250),
                      V.delayedCall(0.5, function () {
                        return (tT = 0);
                      }),
                      es(W, "touchcancel", tA),
                      es(U, "touchstart", tA),
                      ei(es, W, "pointerdown,touchstart,mousedown", tR),
                      ei(es, W, "pointerup,touchend,mouseup", tP),
                      te = V.utils.checkPrefix("transform"),
                      ez.push(te),
                      Y = tE(),
                      G = V.delayedCall(0.2, eP).pause(),
                      ts = [
                        W,
                        "visibilitychange",
                        function () {
                          var t = H.innerWidth,
                            e = H.innerHeight;
                          W.hidden
                            ? ((tn = t), (ti = e))
                            : (tn !== t || ti !== e) && ey();
                        },
                        W,
                        "DOMContentLoaded",
                        eP,
                        H,
                        "load",
                        eP,
                        H,
                        "resize",
                        ey,
                      ],
                      tV(es),
                      ep.forEach(function (t) {
                        return t.enable(0, 1);
                      }),
                      r = 0;
                    r < v.length;
                    r += 3
                  )
                    ea(eo, v[r], v[r + 1]), ea(eo, v[r], v[r + 2]);
                }
              }),
              (t.config = function (e) {
                "limitCallbacks" in e && (tv = !!e.limitCallbacks);
                var r = e.syncInterval;
                (r && clearInterval(J)) || ((J = r) && setInterval(eg, r)),
                  "ignoreMobileResize" in e &&
                    (tc = 1 === t.isTouch && e.ignoreMobileResize),
                  "autoRefreshEvents" in e &&
                    (tV(eo) || tV(es, e.autoRefreshEvents || "none"),
                    (tu = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
              }),
              (t.scrollerProxy = function (t, e) {
                var r = j(t),
                  n = v.indexOf(r),
                  i = tz(r);
                ~n && v.splice(n, i ? 6 : 2),
                  e && (i ? y.unshift(H, e, U, e, q, e) : y.unshift(r, e));
              }),
              (t.clearMatchMedia = function (t) {
                ep.forEach(function (e) {
                  return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
                });
              }),
              (t.isInViewport = function (t, e, r) {
                var n = (tY(t) ? j(t) : t).getBoundingClientRect(),
                  i = n[r ? tJ : tK] * e || 0;
                return r
                  ? n.right - i > 0 && n.left + i < H.innerWidth
                  : n.bottom - i > 0 && n.top + i < H.innerHeight;
              }),
              (t.positionInViewport = function (t, e, r) {
                tY(t) && (t = j(t));
                var n = t.getBoundingClientRect(),
                  i = n[r ? tJ : tK],
                  s =
                    null == e
                      ? i / 2
                      : e in ec
                      ? ec[e] * i
                      : ~e.indexOf("%")
                      ? (parseFloat(e) * i) / 100
                      : parseFloat(e) || 0;
                return r
                  ? (n.left + s) / H.innerWidth
                  : (n.top + s) / H.innerHeight;
              }),
              (t.killAll = function (t) {
                if (
                  (ep.slice(0).forEach(function (t) {
                    return "ScrollSmoother" !== t.vars.id && t.kill();
                  }),
                  !0 !== t)
                ) {
                  var e = ew.killAll || [];
                  (ew = {}),
                    e.forEach(function (t) {
                      return t();
                    });
                }
              }),
              t
            );
          })();
        (e$.version = "3.12.2"),
          (e$.saveStyles = function (t) {
            return t
              ? Z(t).forEach(function (t) {
                  if (t && t.style) {
                    var e = eE.indexOf(t);
                    e >= 0 && eE.splice(e, 5),
                      eE.push(
                        t,
                        t.style.cssText,
                        t.getBBox && t.getAttribute("transform"),
                        V.core.getCache(t),
                        tp()
                      );
                  }
                })
              : eE;
          }),
          (e$.revert = function (t, e) {
            return eC(!t, e);
          }),
          (e$.create = function (t, e) {
            return new e$(t, e);
          }),
          (e$.refresh = function (t) {
            return t ? ey() : (Y || e$.register()) && eP(!0);
          }),
          (e$.update = function (t) {
            return ++v.cache && eL(!0 === t ? 2 : 0);
          }),
          (e$.clearScrollMemory = eS),
          (e$.maxScroll = function (t, e) {
            return tB(t, e ? P : A);
          }),
          (e$.getScrollFunc = function (t, e) {
            return L(j(t), e ? P : A);
          }),
          (e$.getById = function (t) {
            return em[t];
          }),
          (e$.getAll = function () {
            return ep.filter(function (t) {
              return "ScrollSmoother" !== t.vars.id;
            });
          }),
          (e$.isScrolling = function () {
            return !!tC;
          }),
          (e$.snapDirectional = en),
          (e$.addEventListener = function (t, e) {
            var r = ew[t] || (ew[t] = []);
            ~r.indexOf(e) || r.push(e);
          }),
          (e$.removeEventListener = function (t, e) {
            var r = ew[t],
              n = r && r.indexOf(e);
            n >= 0 && r.splice(n, 1);
          }),
          (e$.batch = function (t, e) {
            var r,
              n = [],
              i = {},
              s = e.interval || 0.016,
              o = e.batchMax || 1e9,
              a = function (t, e) {
                var r = [],
                  n = [],
                  i = V.delayedCall(s, function () {
                    e(r, n), (r = []), (n = []);
                  }).pause();
                return function (t) {
                  r.length || i.restart(!0),
                    r.push(t.trigger),
                    n.push(t),
                    o <= r.length && i.progress(1);
                };
              };
            for (r in e)
              i[r] =
                "on" === r.substr(0, 2) && tH(e[r]) && "onRefreshInit" !== r
                  ? a(r, e[r])
                  : e[r];
            return (
              tH(o) &&
                ((o = o()),
                es(e$, "refresh", function () {
                  return (o = e.batchMax());
                })),
              Z(t).forEach(function (t) {
                var e = {};
                for (r in i) e[r] = i[r];
                (e.trigger = t), n.push(e$.create(e));
              }),
              n
            );
          });
        var eQ,
          eJ = function (t, e, r, n) {
            return (
              e > n ? t(n) : e < 0 && t(0),
              r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
            );
          },
          eK = function t(e, r) {
            !0 === r
              ? e.style.removeProperty("touch-action")
              : (e.style.touchAction =
                  !0 === r
                    ? "auto"
                    : r
                    ? "pan-" + r + (B.isTouch ? " pinch-zoom" : "")
                    : "none"),
              e === q && t(U, r);
          },
          e0 = { auto: 1, scroll: 1 },
          e1 = function (t) {
            var e,
              r = t.event,
              n = t.target,
              i = t.axis,
              s = (r.changedTouches ? r.changedTouches[0] : r).target,
              o = s._gsap || V.core.getCache(s),
              a = tE();
            if (!o._isScrollT || a - o._isScrollT > 2e3) {
              for (
                ;
                s &&
                s !== U &&
                ((s.scrollHeight <= s.clientHeight &&
                  s.scrollWidth <= s.clientWidth) ||
                  !(e0[(e = t6(s)).overflowY] || e0[e.overflowX]));

              )
                s = s.parentNode;
              (o._isScroll =
                s &&
                s !== n &&
                !tz(s) &&
                (e0[(e = t6(s)).overflowY] || e0[e.overflowX])),
                (o._isScrollT = a);
            }
            (o._isScroll || "x" === i) &&
              (r.stopPropagation(), (r._gsapAllow = !0));
          },
          e2 = function (t, e, r, n) {
            return B.create({
              target: t,
              capture: !0,
              debounce: !1,
              lockAxis: !0,
              type: e,
              onWheel: (n = n && e1),
              onPress: n,
              onDrag: n,
              onScroll: n,
              onEnable: function () {
                return r && es(W, B.eventTypes[0], e3, !1, !0);
              },
              onDisable: function () {
                return eo(W, B.eventTypes[0], e3, !0);
              },
            });
          },
          e5 = /(input|label|select|textarea)/i,
          e3 = function (t) {
            var e = e5.test(t.target.tagName);
            (e || eQ) && ((t._gsapAllow = !0), (eQ = e));
          },
          e8 = function (t) {
            tq(t) || (t = {}),
              (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
              t.type || (t.type = "wheel,touch"),
              (t.debounce = !!t.debounce),
              (t.id = t.id || "normalizer");
            var e,
              r,
              n,
              i,
              s,
              o,
              a,
              u,
              l = t,
              c = l.normalizeScrollX,
              h = l.momentum,
              f = l.allowNestedScroll,
              d = l.onRelease,
              p = j(t.target) || q,
              m = V.core.globals().ScrollSmoother,
              g = m && m.get(),
              _ =
                td &&
                ((t.content && j(t.content)) ||
                  (g && !1 !== t.content && !g.smooth() && g.content())),
              y = L(p, A),
              w = L(p, P),
              b = 1,
              x =
                (B.isTouch && H.visualViewport
                  ? H.visualViewport.scale * H.visualViewport.width
                  : H.outerWidth) / H.innerWidth,
              T = 0,
              E = tH(h)
                ? function () {
                    return h(e);
                  }
                : function () {
                    return h || 2.8;
                  },
              k = e2(p, t.type, !0, f),
              C = function () {
                return (i = !1);
              },
              S = tA,
              O = tA,
              M = function () {
                (O = $(td ? 1 : 0, (r = tB(p, A)))),
                  c && (S = $(0, tB(p, P))),
                  (n = eO);
              },
              R = function () {
                (_._gsap.y = tj(parseFloat(_._gsap.y) + y.offset) + "px"),
                  (_.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    parseFloat(_._gsap.y) +
                    ", 0, 1)"),
                  (y.offset = y.cacheID = 0);
              },
              D = function () {
                if (i) {
                  requestAnimationFrame(C);
                  var t = tj(e.deltaY / 2),
                    r = O(y.v - t);
                  if (_ && r !== y.v + y.offset) {
                    y.offset = r - y.v;
                    var n = tj((parseFloat(_ && _._gsap.y) || 0) - y.offset);
                    (_.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      n +
                      ", 0, 1)"),
                      (_._gsap.y = n + "px"),
                      (y.cacheID = v.cache),
                      eL();
                  }
                  return !0;
                }
                y.offset && R(), (i = !0);
              },
              z = function () {
                M(),
                  s.isActive() &&
                    s.vars.scrollY > r &&
                    (y() > r ? s.progress(1) && y(r) : s.resetTo("scrollY", r));
              };
            return (
              _ && V.set(_, { y: "+=0" }),
              (t.ignoreCheck = function (t) {
                return (
                  (td && "touchmove" === t.type && D()) ||
                  (b > 1.05 && "touchstart" !== t.type) ||
                  e.isGesturing ||
                  (t.touches && t.touches.length > 1)
                );
              }),
              (t.onPress = function () {
                i = !1;
                var t = b;
                (b = tj(
                  ((H.visualViewport && H.visualViewport.scale) || 1) / x
                )),
                  s.pause(),
                  t !== b && eK(p, b > 1.01 || (!c && "x")),
                  (o = w()),
                  (a = y()),
                  M(),
                  (n = eO);
              }),
              (t.onRelease = t.onGestureStart =
                function (t, e) {
                  if ((y.offset && R(), e)) {
                    v.cache++;
                    var n,
                      i,
                      o = E();
                    c &&
                      ((i = (n = w()) + -(0.05 * o * t.velocityX) / 0.227),
                      (o *= eJ(w, n, i, tB(p, P))),
                      (s.vars.scrollX = S(i))),
                      (i = (n = y()) + -(0.05 * o * t.velocityY) / 0.227),
                      (o *= eJ(y, n, i, tB(p, A))),
                      (s.vars.scrollY = O(i)),
                      s.invalidate().duration(o).play(0.01),
                      ((td && s.vars.scrollY >= r) || n >= r - 1) &&
                        V.to({}, { onUpdate: z, duration: o });
                  } else u.restart(!0);
                  d && d(t);
                }),
              (t.onWheel = function () {
                s._ts && s.pause(), tE() - T > 1e3 && ((n = 0), (T = tE()));
              }),
              (t.onChange = function (t, e, r, i, s) {
                if (
                  (eO !== n && M(),
                  e &&
                    c &&
                    w(S(i[2] === e ? o + (t.startX - t.x) : w() + e - i[1])),
                  r)
                ) {
                  y.offset && R();
                  var u = s[2] === r,
                    l = u ? a + t.startY - t.y : y() + r - s[1],
                    h = O(l);
                  u && l !== h && (a += h - l), y(h);
                }
                (r || e) && eL();
              }),
              (t.onEnable = function () {
                eK(p, !c && "x"),
                  e$.addEventListener("refresh", z),
                  es(H, "resize", z),
                  y.smooth &&
                    ((y.target.style.scrollBehavior = "auto"),
                    (y.smooth = w.smooth = !1)),
                  k.enable();
              }),
              (t.onDisable = function () {
                eK(p, !0),
                  eo(H, "resize", z),
                  e$.removeEventListener("refresh", z),
                  k.kill();
              }),
              (t.lockAxis = !1 !== t.lockAxis),
              ((e = new B(t)).iOS = td),
              td && !y() && y(1),
              td && V.ticker.add(tA),
              (u = e._dc),
              (s = V.to(e, {
                ease: "power4",
                paused: !0,
                scrollX: c ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                  scrollY: eX(y, y(), function () {
                    return s.pause();
                  }),
                },
                onUpdate: eL,
                onComplete: u.vars.onComplete,
              })),
              e
            );
          };
        (e$.sort = function (t) {
          return ep.sort(
            t ||
              function (t, e) {
                return (
                  -1e6 * (t.vars.refreshPriority || 0) +
                  t.start -
                  (e.start + -1e6 * (e.vars.refreshPriority || 0))
                );
              }
          );
        }),
          (e$.observe = function (t) {
            return new B(t);
          }),
          (e$.normalizeScroll = function (t) {
            if (void 0 === t) return tl;
            if (!0 === t && tl) return tl.enable();
            if (!1 === t) return tl && tl.kill();
            var e = t instanceof B ? t : e8(t);
            return (
              tl && tl.target === e.target && tl.kill(),
              tz(e.target) && (tl = e),
              e
            );
          }),
          (e$.core = {
            _getVelocityProp: D,
            _inputObserver: e2,
            _scrollers: v,
            _proxies: y,
            bridge: {
              ss: function () {
                tC || eT("scrollStart"), (tC = tE());
              },
              ref: function () {
                return K;
              },
            },
          }),
          tD() && V.registerPlugin(e$),
          (t.ScrollTrigger = e$),
          (t.default = e$),
          "undefined" == typeof window || window !== t
            ? Object.defineProperty(t, "__esModule", { value: !0 })
            : delete window.default;
      })(e);
    },
    9521: function (t, e) {
      !(function (t) {
        "use strict";
        function e(t, e) {
          (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e);
        }
        function r(t) {
          if (void 0 === t)
            throw ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        /*!
         * GSAP 3.12.2
         * https://greensock.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var n,
          i,
          s,
          o,
          a,
          u,
          l,
          c,
          h,
          f,
          d,
          p,
          m,
          g,
          _,
          v,
          y,
          w,
          b,
          x,
          T,
          E,
          k,
          C,
          S,
          O,
          M,
          R,
          P,
          A = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: { lineHeight: "" },
          },
          j = { duration: 0.5, overwrite: !1, delay: 0 },
          L = 2 * Math.PI,
          D = L / 4,
          z = 0,
          N = Math.sqrt,
          I = Math.cos,
          F = Math.sin,
          B = function (t) {
            return "string" == typeof t;
          },
          V = function (t) {
            return "function" == typeof t;
          },
          Y = function (t) {
            return "number" == typeof t;
          },
          H = function (t) {
            return void 0 === t;
          },
          W = function (t) {
            return "object" == typeof t;
          },
          q = function (t) {
            return !1 !== t;
          },
          U = function () {
            return "undefined" != typeof window;
          },
          X = function (t) {
            return V(t) || B(t);
          },
          G =
            ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
            function () {},
          Z = Array.isArray,
          $ = /(?:-?\.?\d|\.)+/gi,
          Q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
          J = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
          K = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
          tt = /[+-]=-?[.\d]+/,
          te = /[^,'"\[\]\s]+/gi,
          tr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
          tn = {},
          ti = {},
          ts = function (t) {
            return (ti = tL(t, tn)) && rC;
          },
          to = function (t, e) {
            return console.warn(
              "Invalid property",
              t,
              "set to",
              e,
              "Missing plugin? gsap.registerPlugin()"
            );
          },
          ta = function (t, e) {
            return !e && console.warn(t);
          },
          tu = function (t, e) {
            return (t && (tn[t] = e) && ti && (ti[t] = e)) || tn;
          },
          tl = function () {
            return 0;
          },
          tc = { suppressEvents: !0, isStart: !0, kill: !1 },
          th = { suppressEvents: !0, kill: !1 },
          tf = { suppressEvents: !0 },
          td = {},
          tp = [],
          tm = {},
          tg = {},
          t_ = {},
          tv = 30,
          ty = [],
          tw = "",
          tb = function (t) {
            var e,
              r,
              n = t[0];
            if ((W(n) || V(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
              for (r = ty.length; r-- && !ty[r].targetTest(n); );
              e = ty[r];
            }
            for (r = t.length; r--; )
              (t[r] && (t[r]._gsap || (t[r]._gsap = new eY(t[r], e)))) ||
                t.splice(r, 1);
            return t;
          },
          tx = function (t) {
            return t._gsap || tb(ei(t))[0]._gsap;
          },
          tT = function (t, e, r) {
            return (r = t[e]) && V(r)
              ? t[e]()
              : (H(r) && t.getAttribute && t.getAttribute(e)) || r;
          },
          tE = function (t, e) {
            return (t = t.split(",")).forEach(e) || t;
          },
          tk = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          tC = function (t) {
            return Math.round(1e7 * t) / 1e7 || 0;
          },
          tS = function (t, e) {
            var r = e.charAt(0),
              n = parseFloat(e.substr(2));
            return (
              (t = parseFloat(t)),
              "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
            );
          },
          tO = function (t, e) {
            for (var r = e.length, n = 0; 0 > t.indexOf(e[n]) && ++n < r; );
            return n < r;
          },
          tM = function () {
            var t,
              e,
              r = tp.length,
              n = tp.slice(0);
            for (t = 0, tm = {}, tp.length = 0; t < r; t++)
              (e = n[t]) &&
                e._lazy &&
                (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
          },
          tR = function (t, e, r, n) {
            tp.length && !x && tM(),
              t.render(e, r, n || (x && e < 0 && (t._initted || t._startAt))),
              tp.length && !x && tM();
          },
          tP = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(te).length < 2
              ? e
              : B(t)
              ? t.trim()
              : t;
          },
          tA = function (t) {
            return t;
          },
          tj = function (t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t;
          },
          tL = function (t, e) {
            for (var r in e) t[r] = e[r];
            return t;
          },
          tD = function t(e, r) {
            for (var n in r)
              "__proto__" !== n &&
                "constructor" !== n &&
                "prototype" !== n &&
                (e[n] = W(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
            return e;
          },
          tz = function (t, e) {
            var r,
              n = {};
            for (r in t) r in e || (n[r] = t[r]);
            return n;
          },
          tN = function (t) {
            var e,
              r = t.parent || E,
              n = t.keyframes
                ? ((e = Z(t.keyframes)),
                  function (t, r) {
                    for (var n in r)
                      n in t ||
                        ("duration" === n && e) ||
                        "ease" === n ||
                        (t[n] = r[n]);
                  })
                : tj;
            if (q(t.inherit))
              for (; r; ) n(t, r.vars.defaults), (r = r.parent || r._dp);
            return t;
          },
          tI = function (t, e) {
            for (
              var r = t.length, n = r === e.length;
              n && r-- && t[r] === e[r];

            );
            return r < 0;
          },
          tF = function (t, e, r, n, i) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var s,
              o = t[n];
            if (i) for (s = e[i]; o && o[i] > s; ) o = o._prev;
            return (
              o
                ? ((e._next = o._next), (o._next = e))
                : ((e._next = t[r]), (t[r] = e)),
              e._next ? (e._next._prev = e) : (t[n] = e),
              (e._prev = o),
              (e.parent = e._dp = t),
              e
            );
          },
          tB = function (t, e, r, n) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var i = e._prev,
              s = e._next;
            i ? (i._next = s) : t[r] === e && (t[r] = s),
              s ? (s._prev = i) : t[n] === e && (t[n] = i),
              (e._next = e._prev = e.parent = null);
          },
          tV = function (t, e) {
            t.parent &&
              (!e || t.parent.autoRemoveChildren) &&
              t.parent.remove &&
              t.parent.remove(t),
              (t._act = 0);
          },
          tY = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
              for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
            return t;
          },
          tH = function (t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          },
          tW = function (t, e, r, n) {
            return (
              t._startAt &&
              (x
                ? t._startAt.revert(th)
                : (t.vars.immediateRender && !t.vars.autoRevert) ||
                  t._startAt.render(e, !0, n))
            );
          },
          tq = function (t) {
            return t._repeat
              ? tU(t._tTime, (t = t.duration() + t._rDelay)) * t
              : 0;
          },
          tU = function (t, e) {
            var r = Math.floor((t /= e));
            return t && r === t ? r - 1 : r;
          },
          tX = function (t, e) {
            return (
              (t - e._start) * e._ts +
              (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            );
          },
          tG = function (t) {
            return (t._end = tC(
              t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
            ));
          },
          tZ = function (t, e) {
            var r = t._dp;
            return (
              r &&
                r.smoothChildTiming &&
                t._ts &&
                ((t._start = tC(
                  r._time -
                    (t._ts > 0
                      ? e / t._ts
                      : -(
                          ((t._dirty ? t.totalDuration() : t._tDur) - e) /
                          t._ts
                        ))
                )),
                tG(t),
                r._dirty || tY(r, t)),
              t
            );
          },
          t$ = function (t, e) {
            var r;
            if (
              ((e._time ||
                (!e._dur && e._initted) ||
                (e._start < t._time && (e._dur || !e.add))) &&
                ((r = tX(t.rawTime(), e)),
                (!e._dur || et(0, e.totalDuration(), r) - e._tTime > 1e-8) &&
                  e.render(r, !0)),
              tY(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
            ) {
              if (t._dur < t.duration())
                for (r = t; r._dp; )
                  r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
              t._zTime = -0.00000001;
            }
          },
          tQ = function (t, e, r, n) {
            return (
              e.parent && tV(e),
              (e._start = tC(
                (Y(r) ? r : r || t !== E ? t6(t, r, e) : t._time) + e._delay
              )),
              (e._end = tC(
                e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
              )),
              tF(t, e, "_first", "_last", t._sort ? "_start" : 0),
              t1(e) || (t._recent = e),
              n || t$(t, e),
              t._ts < 0 && tZ(t, t._tTime),
              t
            );
          },
          tJ = function (t, e) {
            return (
              (tn.ScrollTrigger || to("scrollTrigger", e)) &&
              tn.ScrollTrigger.create(e, t)
            );
          },
          tK = function (t, e, r, n, i) {
            return (e1(t, e, i), t._initted)
              ? !r &&
                t._pt &&
                !x &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                M !== eS.frame
                ? (tp.push(t), (t._lazy = [i, n]), 1)
                : void 0
              : 1;
          },
          t0 = function t(e) {
            var r = e.parent;
            return (
              r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || t(r))
            );
          },
          t1 = function (t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e;
          },
          t2 = function (t, e, r, n) {
            var i,
              s,
              o,
              a = t.ratio,
              u =
                e < 0 ||
                (!e &&
                  ((!t._start && t0(t) && !(!t._initted && t1(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !t1(t))))
                  ? 0
                  : 1,
              l = t._rDelay,
              c = 0;
            if (
              (l &&
                t._repeat &&
                ((s = tU((c = et(0, t._tDur, e)), l)),
                t._yoyo && 1 & s && (u = 1 - u),
                s !== tU(t._tTime, l) &&
                  ((a = 1 - u),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              u !== a || x || n || 1e-8 === t._zTime || (!e && t._zTime))
            ) {
              if (!t._initted && tK(t, e, n, r, c)) return;
              for (
                o = t._zTime,
                  t._zTime = e || (r ? 1e-8 : 0),
                  r || (r = e && !o),
                  t.ratio = u,
                  t._from && (u = 1 - u),
                  t._time = 0,
                  t._tTime = c,
                  i = t._pt;
                i;

              )
                i.r(u, i.d), (i = i._next);
              e < 0 && tW(t, e, r, !0),
                t._onUpdate && !r && em(t, "onUpdate"),
                c && t._repeat && !r && t.parent && em(t, "onRepeat"),
                (e >= t._tDur || e < 0) &&
                  t.ratio === u &&
                  (u && tV(t, 1),
                  r ||
                    x ||
                    (em(t, u ? "onComplete" : "onReverseComplete", !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          },
          t5 = function (t, e, r) {
            var n;
            if (r > e)
              for (n = t._first; n && n._start <= r; ) {
                if ("isPause" === n.data && n._start > e) return n;
                n = n._next;
              }
            else
              for (n = t._last; n && n._start >= r; ) {
                if ("isPause" === n.data && n._start < e) return n;
                n = n._prev;
              }
          },
          t3 = function (t, e, r, n) {
            var i = t._repeat,
              s = tC(e) || 0,
              o = t._tTime / t._tDur;
            return (
              o && !n && (t._time *= s / t._dur),
              (t._dur = s),
              (t._tDur = i
                ? i < 0
                  ? 1e10
                  : tC(s * (i + 1) + t._rDelay * i)
                : s),
              o > 0 && !n && tZ(t, (t._tTime = t._tDur * o)),
              t.parent && tG(t),
              r || tY(t.parent, t),
              t
            );
          },
          t8 = function (t) {
            return t instanceof eW ? tY(t) : t3(t, t._dur);
          },
          t4 = { _start: 0, endTime: tl, totalDuration: tl },
          t6 = function t(e, r, n) {
            var i,
              s,
              o,
              a = e.labels,
              u = e._recent || t4,
              l = e.duration() >= 1e8 ? u.endTime(!1) : e._dur;
            return B(r) && (isNaN(r) || r in a)
              ? ((s = r.charAt(0)),
                (o = "%" === r.substr(-1)),
                (i = r.indexOf("=")),
                "<" === s || ">" === s)
                ? (i >= 0 && (r = r.replace(/=/, "")),
                  ("<" === s ? u._start : u.endTime(u._repeat >= 0)) +
                    (parseFloat(r.substr(1)) || 0) *
                      (o ? (i < 0 ? u : n).totalDuration() / 100 : 1))
                : i < 0
                ? (r in a || (a[r] = l), a[r])
                : ((s = parseFloat(r.charAt(i - 1) + r.substr(i + 1))),
                  o && n && (s = (s / 100) * (Z(n) ? n[0] : n).totalDuration()),
                  i > 1 ? t(e, r.substr(0, i - 1), n) + s : l + s)
              : null == r
              ? l
              : +r;
          },
          t9 = function (t, e, r) {
            var n,
              i,
              s = Y(e[1]),
              o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
              a = e[o];
            if ((s && (a.duration = e[1]), (a.parent = r), t)) {
              for (n = a, i = r; i && !("immediateRender" in n); )
                (n = i.vars.defaults || {}),
                  (i = q(i.vars.inherit) && i.parent);
              (a.immediateRender = q(n.immediateRender)),
                t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]);
            }
            return new e9(e[0], a, e[o + 1]);
          },
          t7 = function (t, e) {
            return t || 0 === t ? e(t) : e;
          },
          et = function (t, e, r) {
            return r < t ? t : r > e ? e : r;
          },
          ee = function (t, e) {
            return B(t) && (e = tr.exec(t)) ? e[1] : "";
          },
          er = [].slice,
          en = function (t, e) {
            return (
              t &&
              W(t) &&
              "length" in t &&
              ((!e && !t.length) || (t.length - 1 in t && W(t[0]))) &&
              !t.nodeType &&
              t !== k
            );
          },
          ei = function (t, e, r) {
            var n;
            return T && !e && T.selector
              ? T.selector(t)
              : B(t) && !r && (C || !eO())
              ? er.call((e || S).querySelectorAll(t), 0)
              : Z(t)
              ? (void 0 === n && (n = []),
                t.forEach(function (t) {
                  var e;
                  return (B(t) && !r) || en(t, 1)
                    ? (e = n).push.apply(e, ei(t))
                    : n.push(t);
                }) || n)
              : en(t)
              ? er.call(t, 0)
              : t
              ? [t]
              : [];
          },
          es = function (t) {
            return (
              (t = ei(t)[0] || ta("Invalid scope") || {}),
              function (e) {
                var r = t.current || t.nativeElement || t;
                return ei(
                  e,
                  r.querySelectorAll
                    ? r
                    : r === t
                    ? ta("Invalid scope") || S.createElement("div")
                    : t
                );
              }
            );
          },
          eo = function (t) {
            return t.sort(function () {
              return 0.5 - Math.random();
            });
          },
          ea = function (t) {
            if (V(t)) return t;
            var e = W(t) ? t : { each: t },
              r = eN(e.ease),
              n = e.from || 0,
              i = parseFloat(e.base) || 0,
              s = {},
              o = n > 0 && n < 1,
              a = isNaN(n) || o,
              u = e.axis,
              l = n,
              c = n;
            return (
              B(n)
                ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
                : !o && a && ((l = n[0]), (c = n[1])),
              function (t, o, h) {
                var f,
                  d,
                  p,
                  m,
                  g,
                  _,
                  v,
                  y,
                  w,
                  b = (h || e).length,
                  x = s[b];
                if (!x) {
                  if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                    for (
                      v = -1e8;
                      v < (v = h[w++].getBoundingClientRect().left) && w < b;

                    );
                    w--;
                  }
                  for (
                    _ = 0,
                      x = s[b] = [],
                      f = a ? Math.min(w, b) * l - 0.5 : n % w,
                      d = 1e8 === w ? 0 : a ? (b * c) / w - 0.5 : (n / w) | 0,
                      v = 0,
                      y = 1e8;
                    _ < b;
                    _++
                  )
                    (p = (_ % w) - f),
                      (m = d - ((_ / w) | 0)),
                      (x[_] = g =
                        u ? Math.abs("y" === u ? m : p) : N(p * p + m * m)),
                      g > v && (v = g),
                      g < y && (y = g);
                  "random" === n && eo(x),
                    (x.max = v - y),
                    (x.min = y),
                    (x.v = b =
                      (parseFloat(e.amount) ||
                        parseFloat(e.each) *
                          (w > b
                            ? b - 1
                            : u
                            ? "y" === u
                              ? b / w
                              : w
                            : Math.max(w, b / w)) ||
                        0) * ("edges" === n ? -1 : 1)),
                    (x.b = b < 0 ? i - b : i),
                    (x.u = ee(e.amount || e.each) || 0),
                    (r = r && b < 0 ? eD(r) : r);
                }
                return (
                  (b = (x[t] - x.min) / x.max || 0),
                  tC(x.b + (r ? r(b) : b) * x.v) + x.u
                );
              }
            );
          },
          eu = function (t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function (r) {
              var n = tC(Math.round(parseFloat(r) / t) * t * e);
              return (n - (n % 1)) / e + (Y(r) ? 0 : ee(r));
            };
          },
          el = function (t, e) {
            var r,
              n,
              i = Z(t);
            return (
              !i &&
                W(t) &&
                ((r = i = t.radius || 1e8),
                t.values
                  ? (n = !Y((t = ei(t.values))[0])) && (r *= r)
                  : (t = eu(t.increment))),
              t7(
                e,
                i
                  ? V(t)
                    ? function (e) {
                        return Math.abs((n = t(e)) - e) <= r ? n : e;
                      }
                    : function (e) {
                        for (
                          var i,
                            s,
                            o = parseFloat(n ? e.x : e),
                            a = parseFloat(n ? e.y : 0),
                            u = 1e8,
                            l = 0,
                            c = t.length;
                          c--;

                        )
                          (i = n
                            ? (i = t[c].x - o) * i + (s = t[c].y - a) * s
                            : Math.abs(t[c] - o)) < u && ((u = i), (l = c));
                        return (
                          (l = !r || u <= r ? t[l] : e),
                          n || l === e || Y(e) ? l : l + ee(e)
                        );
                      }
                  : eu(t)
              )
            );
          },
          ec = function (t, e, r, n) {
            return t7(Z(t) ? !e : !0 === r ? ((r = 0), !1) : !n, function () {
              return Z(t)
                ? t[~~(Math.random() * t.length)]
                : (n =
                    (r = r || 1e-5) < 1
                      ? Math.pow(10, (r + "").length - 2)
                      : 1) &&
                    Math.floor(
                      Math.round(
                        (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                      ) *
                        r *
                        n
                    ) / n;
            });
          },
          eh = function (t, e, r) {
            return t7(r, function (r) {
              return t[~~e(r)];
            });
          },
          ef = function (t) {
            for (
              var e, r, n, i, s = 0, o = "";
              ~(e = t.indexOf("random(", s));

            )
              (n = t.indexOf(")", e)),
                (i = "[" === t.charAt(e + 7)),
                (r = t.substr(e + 7, n - e - 7).match(i ? te : $)),
                (o +=
                  t.substr(s, e - s) +
                  ec(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
                (s = n + 1);
            return o + t.substr(s, t.length - s);
          },
          ed = function (t, e, r, n, i) {
            var s = e - t,
              o = n - r;
            return t7(i, function (e) {
              return r + (((e - t) / s) * o || 0);
            });
          },
          ep = function (t, e, r) {
            var n,
              i,
              s,
              o = t.labels,
              a = 1e8;
            for (n in o)
              (i = o[n] - e) < 0 == !!r &&
                i &&
                a > (i = Math.abs(i)) &&
                ((s = n), (a = i));
            return s;
          },
          em = function (t, e, r) {
            var n,
              i,
              s,
              o = t.vars,
              a = o[e],
              u = T,
              l = t._ctx;
            if (a)
              return (
                (n = o[e + "Params"]),
                (i = o.callbackScope || t),
                r && tp.length && tM(),
                l && (T = l),
                (s = n ? a.apply(i, n) : a.call(i)),
                (T = u),
                s
              );
          },
          eg = function (t) {
            return (
              tV(t),
              t.scrollTrigger && t.scrollTrigger.kill(!!x),
              1 > t.progress() && em(t, "onInterrupt"),
              t
            );
          },
          e_ = [],
          ev = function (t) {
            if (U() && t) {
              var e = (t = (!t.name && t.default) || t).name,
                r = V(t),
                n =
                  e && !r && t.init
                    ? function () {
                        this._props = [];
                      }
                    : t,
                i = {
                  init: tl,
                  render: ra,
                  add: eJ,
                  kill: rl,
                  modifier: ru,
                  rawVars: 0,
                },
                s = {
                  targetTest: 0,
                  get: 0,
                  getSetter: rn,
                  aliases: {},
                  register: 0,
                };
              if ((eO(), t !== n)) {
                if (tg[e]) return;
                tj(n, tj(tz(t, i), s)),
                  tL(n.prototype, tL(i, tz(t, s))),
                  (tg[(n.prop = e)] = n),
                  t.targetTest && (ty.push(n), (td[e] = 1)),
                  (e =
                    ("css" === e
                      ? "CSS"
                      : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
              }
              tu(e, n), t.register && t.register(rC, n, rf);
            } else t && e_.push(t);
          },
          ey = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          ew = function (t, e, r) {
            return (
              ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
                ? e + (r - e) * t * 6
                : t < 0.5
                ? r
                : 3 * t < 2
                ? e + (r - e) * (2 / 3 - t) * 6
                : e) *
                255 +
                0.5) |
              0
            );
          },
          eb = function (t, e, r) {
            var n,
              i,
              s,
              o,
              a,
              u,
              l,
              c,
              h,
              f,
              d = t
                ? Y(t)
                  ? [t >> 16, (t >> 8) & 255, 255 & t]
                  : 0
                : ey.black;
            if (!d) {
              if (
                ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ey[t])
              )
                d = ey[t];
              else if ("#" === t.charAt(0)) {
                if (
                  (t.length < 6 &&
                    (t =
                      "#" +
                      (n = t.charAt(1)) +
                      n +
                      (i = t.charAt(2)) +
                      i +
                      (s = t.charAt(3)) +
                      s +
                      (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                  9 === t.length)
                )
                  return [
                    (d = parseInt(t.substr(1, 6), 16)) >> 16,
                    (d >> 8) & 255,
                    255 & d,
                    parseInt(t.substr(7), 16) / 255,
                  ];
                d = [
                  (t = parseInt(t.substr(1), 16)) >> 16,
                  (t >> 8) & 255,
                  255 & t,
                ];
              } else if ("hsl" === t.substr(0, 3)) {
                if (((d = f = t.match($)), e)) {
                  if (~t.indexOf("="))
                    return (d = t.match(Q)), r && d.length < 4 && (d[3] = 1), d;
                } else
                  (o = (+d[0] % 360) / 360),
                    (a = +d[1] / 100),
                    (i =
                      (u = +d[2] / 100) <= 0.5 ? u * (a + 1) : u + a - u * a),
                    (n = 2 * u - i),
                    d.length > 3 && (d[3] *= 1),
                    (d[0] = ew(o + 1 / 3, n, i)),
                    (d[1] = ew(o, n, i)),
                    (d[2] = ew(o - 1 / 3, n, i));
              } else d = t.match($) || ey.transparent;
              d = d.map(Number);
            }
            return (
              e &&
                !f &&
                ((n = d[0] / 255),
                (i = d[1] / 255),
                (s = d[2] / 255),
                (u = ((l = Math.max(n, i, s)) + (c = Math.min(n, i, s))) / 2),
                l === c
                  ? (o = a = 0)
                  : ((h = l - c),
                    (a = u > 0.5 ? h / (2 - l - c) : h / (l + c)),
                    (o =
                      (l === n
                        ? (i - s) / h + (i < s ? 6 : 0)
                        : l === i
                        ? (s - n) / h + 2
                        : (n - i) / h + 4) * 60)),
                (d[0] = ~~(o + 0.5)),
                (d[1] = ~~(100 * a + 0.5)),
                (d[2] = ~~(100 * u + 0.5))),
              r && d.length < 4 && (d[3] = 1),
              d
            );
          },
          ex = function (t) {
            var e = [],
              r = [],
              n = -1;
            return (
              t.split(eE).forEach(function (t) {
                var i = t.match(J) || [];
                e.push.apply(e, i), r.push((n += i.length + 1));
              }),
              (e.c = r),
              e
            );
          },
          eT = function (t, e, r) {
            var n,
              i,
              s,
              o,
              a = "",
              u = (t + a).match(eE),
              l = e ? "hsla(" : "rgba(",
              c = 0;
            if (!u) return t;
            if (
              ((u = u.map(function (t) {
                return (
                  (t = eb(t, e, 1)) &&
                  l +
                    (e
                      ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                      : t.join(",")) +
                    ")"
                );
              })),
              r && ((s = ex(t)), (n = r.c).join(a) !== s.c.join(a)))
            )
              for (o = (i = t.replace(eE, "1").split(J)).length - 1; c < o; c++)
                a +=
                  i[c] +
                  (~n.indexOf(c)
                    ? u.shift() || l + "0,0,0,0)"
                    : (s.length ? s : u.length ? u : r).shift());
            if (!i)
              for (o = (i = t.split(eE)).length - 1; c < o; c++)
                a += i[c] + u[c];
            return a + i[o];
          },
          eE = (function () {
            var t,
              e =
                "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in ey) e += "|" + t + "\\b";
            return RegExp(e + ")", "gi");
          })(),
          ek = /hsl[a]?\(/,
          eC = function (t) {
            var e,
              r = t.join(" ");
            if (((eE.lastIndex = 0), eE.test(r)))
              return (
                (e = ek.test(r)),
                (t[1] = eT(t[1], e)),
                (t[0] = eT(t[0], e, ex(t[1]))),
                !0
              );
          },
          eS =
            ((d = 500),
            (p = 33),
            (g = m = (f = Date.now)()),
            (_ = 1e3 / 240),
            (v = 1e3 / 240),
            (y = []),
            (w = function t(e) {
              var r,
                n,
                i,
                s,
                u = f() - g,
                w = !0 === e;
              if (
                (u > d && (m += u - p),
                (g += u),
                ((r = (i = g - m) - v) > 0 || w) &&
                  ((s = ++l.frame),
                  (c = i - 1e3 * l.time),
                  (l.time = i /= 1e3),
                  (v += r + (r >= _ ? 4 : _ - r)),
                  (n = 1)),
                w || (o = a(t)),
                n)
              )
                for (h = 0; h < y.length; h++) y[h](i, c, s, e);
            }),
            (l = {
              time: 0,
              frame: 0,
              tick: function () {
                w(!0);
              },
              deltaRatio: function (t) {
                return c / (1e3 / (t || 60));
              },
              wake: function () {
                O &&
                  (!C &&
                    U() &&
                    ((S = (k = C = window).document || {}),
                    (tn.gsap = rC),
                    (k.gsapVersions || (k.gsapVersions = [])).push(rC.version),
                    ts(ti || k.GreenSockGlobals || (!k.gsap && k) || {}),
                    (u = k.requestAnimationFrame),
                    e_.forEach(ev)),
                  o && l.sleep(),
                  (a =
                    u ||
                    function (t) {
                      return setTimeout(t, (v - 1e3 * l.time + 1) | 0);
                    }),
                  (P = 1),
                  w(2));
              },
              sleep: function () {
                (u ? k.cancelAnimationFrame : clearTimeout)(o),
                  (P = 0),
                  (a = tl);
              },
              lagSmoothing: function (t, e) {
                p = Math.min(e || 33, (d = t || 1 / 0));
              },
              fps: function (t) {
                (_ = 1e3 / (t || 240)), (v = 1e3 * l.time + _);
              },
              add: function (t, e, r) {
                var n = e
                  ? function (e, r, i, s) {
                      t(e, r, i, s), l.remove(n);
                    }
                  : t;
                return l.remove(t), y[r ? "unshift" : "push"](n), eO(), n;
              },
              remove: function (t, e) {
                ~(e = y.indexOf(t)) && y.splice(e, 1) && h >= e && h--;
              },
              _listeners: y,
            })),
          eO = function () {
            return !P && eS.wake();
          },
          eM = {},
          eR = /^[\d.\-M][\d.\-,\s]/,
          eP = /["']/g,
          eA = function (t) {
            for (
              var e,
                r,
                n,
                i = {},
                s = t.substr(1, t.length - 3).split(":"),
                o = s[0],
                a = 1,
                u = s.length;
              a < u;
              a++
            )
              (r = s[a]),
                (e = a !== u - 1 ? r.lastIndexOf(",") : r.length),
                (n = r.substr(0, e)),
                (i[o] = isNaN(n) ? n.replace(eP, "").trim() : +n),
                (o = r.substr(e + 1).trim());
            return i;
          },
          ej = function (t) {
            var e = t.indexOf("(") + 1,
              r = t.indexOf(")"),
              n = t.indexOf("(", e);
            return t.substring(e, ~n && n < r ? t.indexOf(")", r + 1) : r);
          },
          eL = function (t) {
            var e = (t + "").split("("),
              r = eM[e[0]];
            return r && e.length > 1 && r.config
              ? r.config.apply(
                  null,
                  ~t.indexOf("{") ? [eA(e[1])] : ej(t).split(",").map(tP)
                )
              : eM._CE && eR.test(t)
              ? eM._CE("", t)
              : r;
          },
          eD = function (t) {
            return function (e) {
              return 1 - t(1 - e);
            };
          },
          ez = function t(e, r) {
            for (var n, i = e._first; i; )
              i instanceof eW
                ? t(i, r)
                : !i.vars.yoyoEase ||
                  (i._yoyo && i._repeat) ||
                  i._yoyo === r ||
                  (i.timeline
                    ? t(i.timeline, r)
                    : ((n = i._ease),
                      (i._ease = i._yEase),
                      (i._yEase = n),
                      (i._yoyo = r))),
                (i = i._next);
          },
          eN = function (t, e) {
            return (t && (V(t) ? t : eM[t] || eL(t))) || e;
          },
          eI = function (t, e, r, n) {
            void 0 === r &&
              (r = function (t) {
                return 1 - e(1 - t);
              }),
              void 0 === n &&
                (n = function (t) {
                  return t < 0.5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2;
                });
            var i,
              s = { easeIn: e, easeOut: r, easeInOut: n };
            return (
              tE(t, function (t) {
                for (var e in ((eM[t] = tn[t] = s),
                (eM[(i = t.toLowerCase())] = r),
                s))
                  eM[
                    i +
                      ("easeIn" === e
                        ? ".in"
                        : "easeOut" === e
                        ? ".out"
                        : ".inOut")
                  ] = eM[t + "." + e] = s[e];
              }),
              s
            );
          },
          eF = function (t) {
            return function (e) {
              return e < 0.5
                ? (1 - t(1 - 2 * e)) / 2
                : 0.5 + t((e - 0.5) * 2) / 2;
            };
          },
          eB = function t(e, r, n) {
            var i = r >= 1 ? r : 1,
              s = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
              o = (s / L) * (Math.asin(1 / i) || 0),
              a = function (t) {
                return 1 === t
                  ? 1
                  : i * Math.pow(2, -10 * t) * F((t - o) * s) + 1;
              },
              u =
                "out" === e
                  ? a
                  : "in" === e
                  ? function (t) {
                      return 1 - a(1 - t);
                    }
                  : eF(a);
            return (
              (s = L / s),
              (u.config = function (r, n) {
                return t(e, r, n);
              }),
              u
            );
          },
          eV = function t(e, r) {
            void 0 === r && (r = 1.70158);
            var n = function (t) {
                return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
              },
              i =
                "out" === e
                  ? n
                  : "in" === e
                  ? function (t) {
                      return 1 - n(1 - t);
                    }
                  : eF(n);
            return (
              (i.config = function (r) {
                return t(e, r);
              }),
              i
            );
          };
        tE("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
          var r = e < 5 ? e + 1 : e;
          eI(
            t + ",Power" + (r - 1),
            e
              ? function (t) {
                  return Math.pow(t, r);
                }
              : function (t) {
                  return t;
                },
            function (t) {
              return 1 - Math.pow(1 - t, r);
            },
            function (t) {
              return t < 0.5
                ? Math.pow(2 * t, r) / 2
                : 1 - Math.pow((1 - t) * 2, r) / 2;
            }
          );
        }),
          (eM.Linear.easeNone = eM.none = eM.Linear.easeIn),
          eI("Elastic", eB("in"), eB("out"), eB()),
          (eU = 2 * (eq = 1 / 2.75)),
          (eX = 2.5 * eq),
          eI(
            "Bounce",
            function (t) {
              return 1 - eG(1 - t);
            },
            (eG = function (t) {
              return t < eq
                ? 7.5625 * t * t
                : t < eU
                ? 7.5625 * Math.pow(t - 1.5 / 2.75, 2) + 0.75
                : t < eX
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
            })
          ),
          eI("Expo", function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0;
          }),
          eI("Circ", function (t) {
            return -(N(1 - t * t) - 1);
          }),
          eI("Sine", function (t) {
            return 1 === t ? 1 : -I(t * D) + 1;
          }),
          eI("Back", eV("in"), eV("out"), eV()),
          (eM.SteppedEase =
            eM.steps =
            tn.SteppedEase =
              {
                config: function (t, e) {
                  void 0 === t && (t = 1);
                  var r = 1 / t,
                    n = t + (e ? 0 : 1),
                    i = e ? 1 : 0;
                  return function (t) {
                    return (((n * et(0, 0.99999999, t)) | 0) + i) * r;
                  };
                },
              }),
          (j.ease = eM["quad.out"]),
          tE(
            "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
            function (t) {
              return (tw += t + "," + t + "Params,");
            }
          );
        var eY = function (t, e) {
            (this.id = z++),
              (t._gsap = this),
              (this.target = t),
              (this.harness = e),
              (this.get = e ? e.get : tT),
              (this.set = e ? e.getSetter : rn);
          },
          eH = (function () {
            function t(t) {
              (this.vars = t),
                (this._delay = +t.delay || 0),
                (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                  ((this._rDelay = t.repeatDelay || 0),
                  (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                (this._ts = 1),
                t3(this, +t.duration, 1, 1),
                (this.data = t.data),
                T && ((this._ctx = T), T.data.push(this)),
                P || eS.wake();
            }
            var e = t.prototype;
            return (
              (e.delay = function (t) {
                return t || 0 === t
                  ? (this.parent &&
                      this.parent.smoothChildTiming &&
                      this.startTime(this._start + t - this._delay),
                    (this._delay = t),
                    this)
                  : this._delay;
              }),
              (e.duration = function (t) {
                return arguments.length
                  ? this.totalDuration(
                      this._repeat > 0
                        ? t + (t + this._rDelay) * this._repeat
                        : t
                    )
                  : this.totalDuration() && this._dur;
              }),
              (e.totalDuration = function (t) {
                return arguments.length
                  ? ((this._dirty = 0),
                    t3(
                      this,
                      this._repeat < 0
                        ? t
                        : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                    ))
                  : this._tDur;
              }),
              (e.totalTime = function (t, e) {
                if ((eO(), !arguments.length)) return this._tTime;
                var r = this._dp;
                if (r && r.smoothChildTiming && this._ts) {
                  for (
                    tZ(this, t), !r._dp || r.parent || t$(r, this);
                    r && r.parent;

                  )
                    r.parent._time !==
                      r._start +
                        (r._ts >= 0
                          ? r._tTime / r._ts
                          : -((r.totalDuration() - r._tTime) / r._ts)) &&
                      r.totalTime(r._tTime, !0),
                      (r = r.parent);
                  !this.parent &&
                    this._dp.autoRemoveChildren &&
                    ((this._ts > 0 && t < this._tDur) ||
                      (this._ts < 0 && t > 0) ||
                      (!this._tDur && !t)) &&
                    tQ(this._dp, this, this._start - this._delay);
                }
                return (
                  (this._tTime === t &&
                    (this._dur || e) &&
                    (!this._initted || 1e-8 !== Math.abs(this._zTime)) &&
                    (t || this._initted || (!this.add && !this._ptLookup))) ||
                    (this._ts || (this._pTime = t), tR(this, t, e)),
                  this
                );
              }),
              (e.time = function (t, e) {
                return arguments.length
                  ? this.totalTime(
                      Math.min(this.totalDuration(), t + tq(this)) %
                        (this._dur + this._rDelay) || (t ? this._dur : 0),
                      e
                    )
                  : this._time;
              }),
              (e.totalProgress = function (t, e) {
                return arguments.length
                  ? this.totalTime(this.totalDuration() * t, e)
                  : this.totalDuration()
                  ? Math.min(1, this._tTime / this._tDur)
                  : this.ratio;
              }),
              (e.progress = function (t, e) {
                return arguments.length
                  ? this.totalTime(
                      this.duration() *
                        (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) +
                        tq(this),
                      e
                    )
                  : this.duration()
                  ? Math.min(1, this._time / this._dur)
                  : this.ratio;
              }),
              (e.iteration = function (t, e) {
                var r = this.duration() + this._rDelay;
                return arguments.length
                  ? this.totalTime(this._time + (t - 1) * r, e)
                  : this._repeat
                  ? tU(this._tTime, r) + 1
                  : 1;
              }),
              (e.timeScale = function (t) {
                if (!arguments.length)
                  return -0.00000001 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var e =
                  this.parent && this._ts
                    ? tX(this.parent._time, this)
                    : this._tTime;
                return (
                  (this._rts = +t || 0),
                  (this._ts = this._ps || -0.00000001 === t ? 0 : this._rts),
                  this.totalTime(et(-Math.abs(this._delay), this._tDur, e), !0),
                  tG(this),
                  tH(this)
                );
              }),
              (e.paused = function (t) {
                return arguments.length
                  ? (this._ps !== t &&
                      ((this._ps = t),
                      t
                        ? ((this._pTime =
                            this._tTime ||
                            Math.max(-this._delay, this.rawTime())),
                          (this._ts = this._act = 0))
                        : (eO(),
                          (this._ts = this._rts),
                          this.totalTime(
                            this.parent && !this.parent.smoothChildTiming
                              ? this.rawTime()
                              : this._tTime || this._pTime,
                            1 === this.progress() &&
                              1e-8 !== Math.abs(this._zTime) &&
                              (this._tTime -= 1e-8)
                          ))),
                    this)
                  : this._ps;
              }),
              (e.startTime = function (t) {
                if (arguments.length) {
                  this._start = t;
                  var e = this.parent || this._dp;
                  return (
                    e &&
                      (e._sort || !this.parent) &&
                      tQ(e, this, t - this._delay),
                    this
                  );
                }
                return this._start;
              }),
              (e.endTime = function (t) {
                return (
                  this._start +
                  (q(t) ? this.totalDuration() : this.duration()) /
                    Math.abs(this._ts || 1)
                );
              }),
              (e.rawTime = function (t) {
                var e = this.parent || this._dp;
                return e
                  ? t &&
                    (!this._ts ||
                      (this._repeat && this._time && 1 > this.totalProgress()))
                    ? this._tTime % (this._dur + this._rDelay)
                    : this._ts
                    ? tX(e.rawTime(t), this)
                    : this._tTime
                  : this._tTime;
              }),
              (e.revert = function (t) {
                void 0 === t && (t = tf);
                var e = x;
                return (
                  (x = t),
                  (this._initted || this._startAt) &&
                    (this.timeline && this.timeline.revert(t),
                    this.totalTime(-0.01, t.suppressEvents)),
                  "nested" !== this.data && !1 !== t.kill && this.kill(),
                  (x = e),
                  this
                );
              }),
              (e.globalTime = function (t) {
                for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                  (r = e._start + r / (e._ts || 1)), (e = e._dp);
                return !this.parent && this._sat
                  ? this._sat.vars.immediateRender
                    ? -1 / 0
                    : this._sat.globalTime(t)
                  : r;
              }),
              (e.repeat = function (t) {
                return arguments.length
                  ? ((this._repeat = t === 1 / 0 ? -2 : t), t8(this))
                  : -2 === this._repeat
                  ? 1 / 0
                  : this._repeat;
              }),
              (e.repeatDelay = function (t) {
                if (arguments.length) {
                  var e = this._time;
                  return (this._rDelay = t), t8(this), e ? this.time(e) : this;
                }
                return this._rDelay;
              }),
              (e.yoyo = function (t) {
                return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
              }),
              (e.seek = function (t, e) {
                return this.totalTime(t6(this, t), q(e));
              }),
              (e.restart = function (t, e) {
                return this.play().totalTime(t ? -this._delay : 0, q(e));
              }),
              (e.play = function (t, e) {
                return (
                  null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                );
              }),
              (e.reverse = function (t, e) {
                return (
                  null != t && this.seek(t || this.totalDuration(), e),
                  this.reversed(!0).paused(!1)
                );
              }),
              (e.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0);
              }),
              (e.resume = function () {
                return this.paused(!1);
              }),
              (e.reversed = function (t) {
                return arguments.length
                  ? (!!t !== this.reversed() &&
                      this.timeScale(-this._rts || (t ? -0.00000001 : 0)),
                    this)
                  : this._rts < 0;
              }),
              (e.invalidate = function () {
                return (
                  (this._initted = this._act = 0),
                  (this._zTime = -0.00000001),
                  this
                );
              }),
              (e.isActive = function () {
                var t,
                  e = this.parent || this._dp,
                  r = this._start;
                return !!(
                  !e ||
                  (this._ts &&
                    this._initted &&
                    e.isActive() &&
                    (t = e.rawTime(!0)) >= r &&
                    t < this.endTime(!0) - 1e-8)
                );
              }),
              (e.eventCallback = function (t, e, r) {
                var n = this.vars;
                return arguments.length > 1
                  ? (e
                      ? ((n[t] = e),
                        r && (n[t + "Params"] = r),
                        "onUpdate" === t && (this._onUpdate = e))
                      : delete n[t],
                    this)
                  : n[t];
              }),
              (e.then = function (t) {
                var e = this;
                return new Promise(function (r) {
                  var n = V(t) ? t : tA,
                    i = function () {
                      var t = e.then;
                      (e.then = null),
                        V(n) &&
                          (n = n(e)) &&
                          (n.then || n === e) &&
                          (e.then = t),
                        r(n),
                        (e.then = t);
                    };
                  (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                  (!e._tTime && e._ts < 0)
                    ? i()
                    : (e._prom = i);
                });
              }),
              (e.kill = function () {
                eg(this);
              }),
              t
            );
          })();
        tj(eH.prototype, {
          _time: 0,
          _start: 0,
          _end: 0,
          _tTime: 0,
          _tDur: 0,
          _dirty: 0,
          _repeat: 0,
          _yoyo: !1,
          parent: null,
          _initted: !1,
          _rDelay: 0,
          _ts: 1,
          _dp: 0,
          ratio: 0,
          _zTime: -0.00000001,
          _prom: 0,
          _ps: !1,
          _rts: 1,
        });
        var eW = (function (t) {
          function n(e, n) {
            var i;
            return (
              void 0 === e && (e = {}),
              ((i = t.call(this, e) || this).labels = {}),
              (i.smoothChildTiming = !!e.smoothChildTiming),
              (i.autoRemoveChildren = !!e.autoRemoveChildren),
              (i._sort = q(e.sortChildren)),
              E && tQ(e.parent || E, r(i), n),
              e.reversed && i.reverse(),
              e.paused && i.paused(!0),
              e.scrollTrigger && tJ(r(i), e.scrollTrigger),
              i
            );
          }
          e(n, t);
          var i = n.prototype;
          return (
            (i.to = function (t, e, r) {
              return t9(0, arguments, this), this;
            }),
            (i.from = function (t, e, r) {
              return t9(1, arguments, this), this;
            }),
            (i.fromTo = function (t, e, r, n) {
              return t9(2, arguments, this), this;
            }),
            (i.set = function (t, e, r) {
              return (
                (e.duration = 0),
                (e.parent = this),
                tN(e).repeatDelay || (e.repeat = 0),
                (e.immediateRender = !!e.immediateRender),
                new e9(t, e, t6(this, r), 1),
                this
              );
            }),
            (i.call = function (t, e, r) {
              return tQ(this, e9.delayedCall(0, t, e), r);
            }),
            (i.staggerTo = function (t, e, r, n, i, s, o) {
              return (
                (r.duration = e),
                (r.stagger = r.stagger || n),
                (r.onComplete = s),
                (r.onCompleteParams = o),
                (r.parent = this),
                new e9(t, r, t6(this, i)),
                this
              );
            }),
            (i.staggerFrom = function (t, e, r, n, i, s, o) {
              return (
                (r.runBackwards = 1),
                (tN(r).immediateRender = q(r.immediateRender)),
                this.staggerTo(t, e, r, n, i, s, o)
              );
            }),
            (i.staggerFromTo = function (t, e, r, n, i, s, o, a) {
              return (
                (n.startAt = r),
                (tN(n).immediateRender = q(n.immediateRender)),
                this.staggerTo(t, e, n, i, s, o, a)
              );
            }),
            (i.render = function (t, e, r) {
              var n,
                i,
                s,
                o,
                a,
                u,
                l,
                c,
                h,
                f,
                d,
                p,
                m = this._time,
                g = this._dirty ? this.totalDuration() : this._tDur,
                _ = this._dur,
                v = t <= 0 ? 0 : tC(t),
                y = this._zTime < 0 != t < 0 && (this._initted || !_);
              if (
                (this !== E && v > g && t >= 0 && (v = g),
                v !== this._tTime || r || y)
              ) {
                if (
                  (m !== this._time &&
                    _ &&
                    ((v += this._time - m), (t += this._time - m)),
                  (n = v),
                  (h = this._start),
                  (u = !(c = this._ts)),
                  y && (_ || (m = this._zTime), (t || !e) && (this._zTime = t)),
                  this._repeat)
                ) {
                  if (
                    ((d = this._yoyo),
                    (a = _ + this._rDelay),
                    this._repeat < -1 && t < 0)
                  )
                    return this.totalTime(100 * a + t, e, r);
                  if (
                    ((n = tC(v % a)),
                    v === g
                      ? ((o = this._repeat), (n = _))
                      : ((o = ~~(v / a)) && o === v / a && ((n = _), o--),
                        n > _ && (n = _)),
                    (f = tU(this._tTime, a)),
                    !m &&
                      this._tTime &&
                      f !== o &&
                      this._tTime - f * a - this._dur <= 0 &&
                      (f = o),
                    d && 1 & o && ((n = _ - n), (p = 1)),
                    o !== f && !this._lock)
                  ) {
                    var w = d && 1 & f,
                      b = w === (d && 1 & o);
                    if (
                      (o < f && (w = !w),
                      (m = w ? 0 : v % _ ? _ : v),
                      (this._lock = 1),
                      (this.render(m || (p ? 0 : tC(o * a)), e, !_)._lock = 0),
                      (this._tTime = v),
                      !e && this.parent && em(this, "onRepeat"),
                      this.vars.repeatRefresh &&
                        !p &&
                        (this.invalidate()._lock = 1),
                      (m && m !== this._time) ||
                        !this._ts !== u ||
                        (this.vars.onRepeat && !this.parent && !this._act) ||
                        ((_ = this._dur),
                        (g = this._tDur),
                        b &&
                          ((this._lock = 2),
                          (m = w ? _ : -0.0001),
                          this.render(m, !0),
                          this.vars.repeatRefresh && !p && this.invalidate()),
                        (this._lock = 0),
                        !this._ts && !u))
                    )
                      return this;
                    ez(this, p);
                  }
                }
                if (
                  (this._hasPause &&
                    !this._forcing &&
                    this._lock < 2 &&
                    (l = t5(this, tC(m), tC(n))) &&
                    (v -= n - (n = l._start)),
                  (this._tTime = v),
                  (this._time = n),
                  (this._act = !c),
                  this._initted ||
                    ((this._onUpdate = this.vars.onUpdate),
                    (this._initted = 1),
                    (this._zTime = t),
                    (m = 0)),
                  !m &&
                    n &&
                    !e &&
                    !o &&
                    (em(this, "onStart"), this._tTime !== v))
                )
                  return this;
                if (n >= m && t >= 0)
                  for (i = this._first; i; ) {
                    if (
                      ((s = i._next),
                      (i._act || n >= i._start) && i._ts && l !== i)
                    ) {
                      if (i.parent !== this) return this.render(t, e, r);
                      if (
                        (i.render(
                          i._ts > 0
                            ? (n - i._start) * i._ts
                            : (i._dirty ? i.totalDuration() : i._tDur) +
                                (n - i._start) * i._ts,
                          e,
                          r
                        ),
                        n !== this._time || (!this._ts && !u))
                      ) {
                        (l = 0), s && (v += this._zTime = -0.00000001);
                        break;
                      }
                    }
                    i = s;
                  }
                else {
                  i = this._last;
                  for (var T = t < 0 ? t : n; i; ) {
                    if (
                      ((s = i._prev),
                      (i._act || T <= i._end) && i._ts && l !== i)
                    ) {
                      if (i.parent !== this) return this.render(t, e, r);
                      if (
                        (i.render(
                          i._ts > 0
                            ? (T - i._start) * i._ts
                            : (i._dirty ? i.totalDuration() : i._tDur) +
                                (T - i._start) * i._ts,
                          e,
                          r || (x && (i._initted || i._startAt))
                        ),
                        n !== this._time || (!this._ts && !u))
                      ) {
                        (l = 0),
                          s && (v += this._zTime = T ? -0.00000001 : 1e-8);
                        break;
                      }
                    }
                    i = s;
                  }
                }
                if (
                  l &&
                  !e &&
                  (this.pause(),
                  (l.render(n >= m ? 0 : -0.00000001)._zTime = n >= m ? 1 : -1),
                  this._ts)
                )
                  return (this._start = h), tG(this), this.render(t, e, r);
                this._onUpdate && !e && em(this, "onUpdate", !0),
                  ((v === g && this._tTime >= this.totalDuration()) ||
                    (!v && m)) &&
                    (h === this._start || Math.abs(c) !== Math.abs(this._ts)) &&
                    !this._lock &&
                    ((t || !_) &&
                      ((v === g && this._ts > 0) || (!v && this._ts < 0)) &&
                      tV(this, 1),
                    e ||
                      (t < 0 && !m) ||
                      (!v && !m && g) ||
                      (em(
                        this,
                        v === g && t >= 0 ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(v < g && this.timeScale() > 0) &&
                        this._prom()));
              }
              return this;
            }),
            (i.add = function (t, e) {
              var r = this;
              if ((Y(e) || (e = t6(this, e, t)), !(t instanceof eH))) {
                if (Z(t))
                  return (
                    t.forEach(function (t) {
                      return r.add(t, e);
                    }),
                    this
                  );
                if (B(t)) return this.addLabel(t, e);
                if (!V(t)) return this;
                t = e9.delayedCall(0, t);
              }
              return this !== t ? tQ(this, t, e) : this;
            }),
            (i.getChildren = function (t, e, r, n) {
              void 0 === t && (t = !0),
                void 0 === e && (e = !0),
                void 0 === r && (r = !0),
                void 0 === n && (n = -1e8);
              for (var i = [], s = this._first; s; )
                s._start >= n &&
                  (s instanceof e9
                    ? e && i.push(s)
                    : (r && i.push(s),
                      t && i.push.apply(i, s.getChildren(!0, e, r)))),
                  (s = s._next);
              return i;
            }),
            (i.getById = function (t) {
              for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                if (e[r].vars.id === t) return e[r];
            }),
            (i.remove = function (t) {
              return B(t)
                ? this.removeLabel(t)
                : V(t)
                ? this.killTweensOf(t)
                : (tB(this, t),
                  t === this._recent && (this._recent = this._last),
                  tY(this));
            }),
            (i.totalTime = function (e, r) {
              return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                    this._ts &&
                    (this._start = tC(
                      eS.time -
                        (this._ts > 0
                          ? e / this._ts
                          : -((this.totalDuration() - e) / this._ts))
                    )),
                  t.prototype.totalTime.call(this, e, r),
                  (this._forcing = 0),
                  this)
                : this._tTime;
            }),
            (i.addLabel = function (t, e) {
              return (this.labels[t] = t6(this, e)), this;
            }),
            (i.removeLabel = function (t) {
              return delete this.labels[t], this;
            }),
            (i.addPause = function (t, e, r) {
              var n = e9.delayedCall(0, e || tl, r);
              return (
                (n.data = "isPause"),
                (this._hasPause = 1),
                tQ(this, n, t6(this, t))
              );
            }),
            (i.removePause = function (t) {
              var e = this._first;
              for (t = t6(this, t); e; )
                e._start === t && "isPause" === e.data && tV(e), (e = e._next);
            }),
            (i.killTweensOf = function (t, e, r) {
              for (var n = this.getTweensOf(t, r), i = n.length; i--; )
                eZ !== n[i] && n[i].kill(t, e);
              return this;
            }),
            (i.getTweensOf = function (t, e) {
              for (var r, n = [], i = ei(t), s = this._first, o = Y(e); s; )
                s instanceof e9
                  ? tO(s._targets, i) &&
                    (o
                      ? (!eZ || (s._initted && s._ts)) &&
                        s.globalTime(0) <= e &&
                        s.globalTime(s.totalDuration()) > e
                      : !e || s.isActive()) &&
                    n.push(s)
                  : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r),
                  (s = s._next);
              return n;
            }),
            (i.tweenTo = function (t, e) {
              e = e || {};
              var r,
                n = this,
                i = t6(n, t),
                s = e,
                o = s.startAt,
                a = s.onStart,
                u = s.onStartParams,
                l = s.immediateRender,
                c = e9.to(
                  n,
                  tj(
                    {
                      ease: e.ease || "none",
                      lazy: !1,
                      immediateRender: !1,
                      time: i,
                      overwrite: "auto",
                      duration:
                        e.duration ||
                        Math.abs(
                          (i - (o && "time" in o ? o.time : n._time)) /
                            n.timeScale()
                        ) ||
                        1e-8,
                      onStart: function () {
                        if ((n.pause(), !r)) {
                          var t =
                            e.duration ||
                            Math.abs(
                              (i - (o && "time" in o ? o.time : n._time)) /
                                n.timeScale()
                            );
                          c._dur !== t &&
                            t3(c, t, 0, 1).render(c._time, !0, !0),
                            (r = 1);
                        }
                        a && a.apply(c, u || []);
                      },
                    },
                    e
                  )
                );
              return l ? c.render(0) : c;
            }),
            (i.tweenFromTo = function (t, e, r) {
              return this.tweenTo(e, tj({ startAt: { time: t6(this, t) } }, r));
            }),
            (i.recent = function () {
              return this._recent;
            }),
            (i.nextLabel = function (t) {
              return void 0 === t && (t = this._time), ep(this, t6(this, t));
            }),
            (i.previousLabel = function (t) {
              return void 0 === t && (t = this._time), ep(this, t6(this, t), 1);
            }),
            (i.currentLabel = function (t) {
              return arguments.length
                ? this.seek(t, !0)
                : this.previousLabel(this._time + 1e-8);
            }),
            (i.shiftChildren = function (t, e, r) {
              void 0 === r && (r = 0);
              for (var n, i = this._first, s = this.labels; i; )
                i._start >= r && ((i._start += t), (i._end += t)),
                  (i = i._next);
              if (e) for (n in s) s[n] >= r && (s[n] += t);
              return tY(this);
            }),
            (i.invalidate = function (e) {
              var r = this._first;
              for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
              return t.prototype.invalidate.call(this, e);
            }),
            (i.clear = function (t) {
              void 0 === t && (t = !0);
              for (var e, r = this._first; r; )
                (e = r._next), this.remove(r), (r = e);
              return (
                this._dp && (this._time = this._tTime = this._pTime = 0),
                t && (this.labels = {}),
                tY(this)
              );
            }),
            (i.totalDuration = function (t) {
              var e,
                r,
                n,
                i = 0,
                s = this._last,
                o = 1e8;
              if (arguments.length)
                return this.timeScale(
                  (this._repeat < 0 ? this.duration() : this.totalDuration()) /
                    (this.reversed() ? -t : t)
                );
              if (this._dirty) {
                for (n = this.parent; s; )
                  (e = s._prev),
                    s._dirty && s.totalDuration(),
                    (r = s._start) > o && this._sort && s._ts && !this._lock
                      ? ((this._lock = 1),
                        (tQ(this, s, r - s._delay, 1)._lock = 0))
                      : (o = r),
                    r < 0 &&
                      s._ts &&
                      ((i -= r),
                      ((!n && !this._dp) || (n && n.smoothChildTiming)) &&
                        ((this._start += r / this._ts),
                        (this._time -= r),
                        (this._tTime -= r)),
                      this.shiftChildren(-r, !1, -Infinity),
                      (o = 0)),
                    s._end > i && s._ts && (i = s._end),
                    (s = e);
                t3(this, this === E && this._time > i ? this._time : i, 1, 1),
                  (this._dirty = 0);
              }
              return this._tDur;
            }),
            (n.updateRoot = function (t) {
              if (
                (E._ts && (tR(E, tX(t, E)), (M = eS.frame)), eS.frame >= tv)
              ) {
                tv += A.autoSleep || 120;
                var e = E._first;
                if ((!e || !e._ts) && A.autoSleep && eS._listeners.length < 2) {
                  for (; e && !e._ts; ) e = e._next;
                  e || eS.sleep();
                }
              }
            }),
            n
          );
        })(eH);
        tj(eW.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var eq,
          eU,
          eX,
          eG,
          eZ,
          e$,
          eQ = function (t, e, r, n, i, s, o) {
            var a,
              u,
              l,
              c,
              h,
              f,
              d,
              p,
              m = new rf(this._pt, t, e, 0, 1, ro, null, i),
              g = 0,
              _ = 0;
            for (
              m.b = r,
                m.e = n,
                r += "",
                n += "",
                (d = ~n.indexOf("random(")) && (n = ef(n)),
                s && (s((p = [r, n]), t, e), (r = p[0]), (n = p[1])),
                u = r.match(K) || [];
              (a = K.exec(n));

            )
              (c = a[0]),
                (h = n.substring(g, a.index)),
                l ? (l = (l + 1) % 5) : "rgba(" === h.substr(-5) && (l = 1),
                c !== u[_++] &&
                  ((f = parseFloat(u[_ - 1]) || 0),
                  (m._pt = {
                    _next: m._pt,
                    p: h || 1 === _ ? h : ",",
                    s: f,
                    c: "=" === c.charAt(1) ? tS(f, c) - f : parseFloat(c) - f,
                    m: l && l < 4 ? Math.round : 0,
                  }),
                  (g = K.lastIndex));
            return (
              (m.c = g < n.length ? n.substring(g, n.length) : ""),
              (m.fp = o),
              (tt.test(n) || d) && (m.e = 0),
              (this._pt = m),
              m
            );
          },
          eJ = function (t, e, r, n, i, s, o, a, u, l) {
            V(n) && (n = n(i || 0, t, s));
            var c,
              h = t[e],
              f =
                "get" !== r
                  ? r
                  : V(h)
                  ? u
                    ? t[
                        e.indexOf("set") || !V(t["get" + e.substr(3)])
                          ? e
                          : "get" + e.substr(3)
                      ](u)
                    : t[e]()
                  : h,
              d = V(h) ? (u ? re : rt) : e7;
            if (
              (B(n) &&
                (~n.indexOf("random(") && (n = ef(n)),
                "=" === n.charAt(1) &&
                  ((c = tS(f, n) + (ee(f) || 0)) || 0 === c) &&
                  (n = c)),
              !l || f !== n || e$)
            )
              return isNaN(f * n) || "" === n
                ? (h || e in t || to(e, n),
                  eQ.call(this, t, e, f, n, d, a || A.stringFilter, u))
                : ((c = new rf(
                    this._pt,
                    t,
                    e,
                    +f || 0,
                    n - (f || 0),
                    "boolean" == typeof h ? rs : ri,
                    0,
                    d
                  )),
                  u && (c.fp = u),
                  o && c.modifier(o, this, t),
                  (this._pt = c));
          },
          eK = function (t, e, r, n, i) {
            if (
              (V(t) && (t = e8(t, i, e, r, n)),
              !W(t) || (t.style && t.nodeType) || Z(t) || G(t))
            )
              return B(t) ? e8(t, i, e, r, n) : t;
            var s,
              o = {};
            for (s in t) o[s] = e8(t[s], i, e, r, n);
            return o;
          },
          e0 = function (t, e, r, n, i, s) {
            var o, a, u, l;
            if (
              tg[t] &&
              !1 !==
                (o = new tg[t]()).init(
                  i,
                  o.rawVars ? e[t] : eK(e[t], n, i, s, r),
                  r,
                  n,
                  s
                ) &&
              ((r._pt = a =
                new rf(r._pt, i, t, 0, 1, o.render, o, 0, o.priority)),
              r !== R)
            )
              for (
                u = r._ptLookup[r._targets.indexOf(i)], l = o._props.length;
                l--;

              )
                u[o._props[l]] = a;
            return o;
          },
          e1 = function t(e, r, n) {
            var i,
              s,
              o,
              a,
              u,
              l,
              c,
              h,
              f,
              d,
              p,
              m,
              g,
              _ = e.vars,
              v = _.ease,
              y = _.startAt,
              w = _.immediateRender,
              T = _.lazy,
              k = _.onUpdate,
              C = _.onUpdateParams,
              S = _.callbackScope,
              O = _.runBackwards,
              M = _.yoyoEase,
              R = _.keyframes,
              P = _.autoRevert,
              A = e._dur,
              L = e._startAt,
              D = e._targets,
              z = e.parent,
              N = z && "nested" === z.data ? z.vars.targets : D,
              I = "auto" === e._overwrite && !b,
              F = e.timeline;
            if (
              (!F || (R && v) || (v = "none"),
              (e._ease = eN(v, j.ease)),
              (e._yEase = M ? eD(eN(!0 === M ? v : M, j.ease)) : 0),
              M &&
                e._yoyo &&
                !e._repeat &&
                ((M = e._yEase), (e._yEase = e._ease), (e._ease = M)),
              (e._from = !F && !!_.runBackwards),
              !F || (R && !_.stagger))
            ) {
              if (
                ((m = (h = D[0] ? tx(D[0]).harness : 0) && _[h.prop]),
                (i = tz(_, td)),
                L &&
                  (L._zTime < 0 && L.progress(1),
                  r < 0 && O && w && !P
                    ? L.render(-1, !0)
                    : L.revert(O && A ? th : tc),
                  (L._lazy = 0)),
                y)
              ) {
                if (
                  (tV(
                    (e._startAt = e9.set(
                      D,
                      tj(
                        {
                          data: "isStart",
                          overwrite: !1,
                          parent: z,
                          immediateRender: !0,
                          lazy: !L && q(T),
                          startAt: null,
                          delay: 0,
                          onUpdate: k,
                          onUpdateParams: C,
                          callbackScope: S,
                          stagger: 0,
                        },
                        y
                      )
                    ))
                  ),
                  (e._startAt._dp = 0),
                  (e._startAt._sat = e),
                  r < 0 && (x || (!w && !P)) && e._startAt.revert(th),
                  w && A && r <= 0 && n <= 0)
                ) {
                  r && (e._zTime = r);
                  return;
                }
              } else if (O && A && !L) {
                if (
                  (r && (w = !1),
                  (o = tj(
                    {
                      overwrite: !1,
                      data: "isFromStart",
                      lazy: w && !L && q(T),
                      immediateRender: w,
                      stagger: 0,
                      parent: z,
                    },
                    i
                  )),
                  m && (o[h.prop] = m),
                  tV((e._startAt = e9.set(D, o))),
                  (e._startAt._dp = 0),
                  (e._startAt._sat = e),
                  r < 0 &&
                    (x ? e._startAt.revert(th) : e._startAt.render(-1, !0)),
                  (e._zTime = r),
                  w)
                ) {
                  if (!r) return;
                } else t(e._startAt, 1e-8, 1e-8);
              }
              for (
                s = 0, e._pt = e._ptCache = 0, T = (A && q(T)) || (T && !A);
                s < D.length;
                s++
              ) {
                if (
                  ((c = (u = D[s])._gsap || tb(D)[s]._gsap),
                  (e._ptLookup[s] = d = {}),
                  tm[c.id] && tp.length && tM(),
                  (p = N === D ? s : N.indexOf(u)),
                  h &&
                    !1 !== (f = new h()).init(u, m || i, e, p, N) &&
                    ((e._pt = a =
                      new rf(
                        e._pt,
                        u,
                        f.name,
                        0,
                        1,
                        f.render,
                        f,
                        0,
                        f.priority
                      )),
                    f._props.forEach(function (t) {
                      d[t] = a;
                    }),
                    f.priority && (l = 1)),
                  !h || m)
                )
                  for (o in i)
                    tg[o] && (f = e0(o, i, e, p, u, N))
                      ? f.priority && (l = 1)
                      : (d[o] = a =
                          eJ.call(
                            e,
                            u,
                            o,
                            "get",
                            i[o],
                            p,
                            N,
                            0,
                            _.stringFilter
                          ));
                e._op && e._op[s] && e.kill(u, e._op[s]),
                  I &&
                    e._pt &&
                    ((eZ = e),
                    E.killTweensOf(u, d, e.globalTime(r)),
                    (g = !e.parent),
                    (eZ = 0)),
                  e._pt && T && (tm[c.id] = 1);
              }
              l && rh(e), e._onInit && e._onInit(e);
            }
            (e._onUpdate = k),
              (e._initted = (!e._op || e._pt) && !g),
              R && r <= 0 && F.render(1e8, !0, !0);
          },
          e2 = function (t, e, r, n, i, s, o) {
            var a,
              u,
              l,
              c,
              h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!h)
              for (
                h = t._ptCache[e] = [], l = t._ptLookup, c = t._targets.length;
                c--;

              ) {
                if ((a = l[c][e]) && a.d && a.d._pt)
                  for (a = a.d._pt; a && a.p !== e && a.fp !== e; ) a = a._next;
                if (!a)
                  return (e$ = 1), (t.vars[e] = "+=0"), e1(t, o), (e$ = 0), 1;
                h.push(a);
              }
            for (c = h.length; c--; )
              ((a = (u = h[c])._pt || u).s =
                (n || 0 === n) && !i ? n : a.s + (n || 0) + s * a.c),
                (a.c = r - a.s),
                u.e && (u.e = tk(r) + ee(u.e)),
                u.b && (u.b = a.s + ee(u.b));
          },
          e5 = function (t, e) {
            var r,
              n,
              i,
              s,
              o = t[0] ? tx(t[0]).harness : 0,
              a = o && o.aliases;
            if (!a) return e;
            for (n in ((r = tL({}, e)), a))
              if (n in r)
                for (i = (s = a[n].split(",")).length; i--; ) r[s[i]] = r[n];
            return r;
          },
          e3 = function (t, e, r, n) {
            var i,
              s,
              o = e.ease || n || "power1.inOut";
            if (Z(e))
              (s = r[t] || (r[t] = [])),
                e.forEach(function (t, r) {
                  return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: o });
                });
            else
              for (i in e)
                (s = r[i] || (r[i] = [])),
                  "ease" === i || s.push({ t: parseFloat(t), v: e[i], e: o });
          },
          e8 = function (t, e, r, n, i) {
            return V(t)
              ? t.call(e, r, n, i)
              : B(t) && ~t.indexOf("random(")
              ? ef(t)
              : t;
          },
          e4 = tw + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
          e6 = {};
        tE(
          e4 + ",id,stagger,delay,duration,paused,scrollTrigger",
          function (t) {
            return (e6[t] = 1);
          }
        );
        var e9 = (function (t) {
          function n(e, n, i, s) {
            "number" == typeof n && ((i.duration = n), (n = i), (i = null));
            var o,
              a,
              u,
              l,
              c,
              h,
              f,
              d,
              p,
              m = (o = t.call(this, s ? n : tN(n)) || this).vars,
              g = m.duration,
              _ = m.delay,
              v = m.immediateRender,
              y = m.stagger,
              w = m.overwrite,
              x = m.keyframes,
              T = m.defaults,
              k = m.scrollTrigger,
              C = m.yoyoEase,
              S = n.parent || E,
              O = (Z(e) || G(e) ? Y(e[0]) : "length" in n) ? [e] : ei(e);
            if (
              ((o._targets = O.length
                ? tb(O)
                : ta(
                    "GSAP target " + e + " not found. https://greensock.com",
                    !A.nullTargetWarn
                  ) || []),
              (o._ptLookup = []),
              (o._overwrite = w),
              x || y || X(g) || X(_))
            ) {
              if (
                ((n = o.vars),
                (a = o.timeline =
                  new eW({
                    data: "nested",
                    defaults: T || {},
                    targets: S && "nested" === S.data ? S.vars.targets : O,
                  })).kill(),
                (a.parent = a._dp = r(o)),
                (a._start = 0),
                y || X(g) || X(_))
              ) {
                if (((c = O.length), (d = y && ea(y)), W(y)))
                  for (h in y) ~e4.indexOf(h) && (p || (p = {}), (p[h] = y[h]));
                for (u = 0; u < c; u++)
                  ((l = tz(n, e6)).stagger = 0),
                    C && (l.yoyoEase = C),
                    p && tL(l, p),
                    (f = O[u]),
                    (l.duration = +e8(g, r(o), u, f, O)),
                    (l.delay = (+e8(_, r(o), u, f, O) || 0) - o._delay),
                    !y &&
                      1 === c &&
                      l.delay &&
                      ((o._delay = _ = l.delay),
                      (o._start += _),
                      (l.delay = 0)),
                    a.to(f, l, d ? d(u, f, O) : 0),
                    (a._ease = eM.none);
                a.duration() ? (g = _ = 0) : (o.timeline = 0);
              } else if (x) {
                tN(tj(a.vars.defaults, { ease: "none" })),
                  (a._ease = eN(x.ease || n.ease || "none"));
                var M,
                  R,
                  P,
                  j = 0;
                if (Z(x))
                  x.forEach(function (t) {
                    return a.to(O, t, ">");
                  }),
                    a.duration();
                else {
                  for (h in ((l = {}), x))
                    "ease" === h ||
                      "easeEach" === h ||
                      e3(h, x[h], l, x.easeEach);
                  for (h in l)
                    for (
                      u = 0,
                        M = l[h].sort(function (t, e) {
                          return t.t - e.t;
                        }),
                        j = 0;
                      u < M.length;
                      u++
                    )
                      ((P = {
                        ease: (R = M[u]).e,
                        duration: ((R.t - (u ? M[u - 1].t : 0)) / 100) * g,
                      })[h] = R.v),
                        a.to(O, P, j),
                        (j += P.duration);
                  a.duration() < g && a.to({}, { duration: g - a.duration() });
                }
              }
              g || o.duration((g = a.duration()));
            } else o.timeline = 0;
            return (
              !0 !== w || b || ((eZ = r(o)), E.killTweensOf(O), (eZ = 0)),
              tQ(S, r(o), i),
              n.reversed && o.reverse(),
              n.paused && o.paused(!0),
              (v ||
                (!g &&
                  !x &&
                  o._start === tC(S._time) &&
                  q(v) &&
                  (function t(e) {
                    return !e || (e._ts && t(e.parent));
                  })(r(o)) &&
                  "nested" !== S.data)) &&
                ((o._tTime = -0.00000001), o.render(Math.max(0, -_) || 0)),
              k && tJ(r(o), k),
              o
            );
          }
          e(n, t);
          var i = n.prototype;
          return (
            (i.render = function (t, e, r) {
              var n,
                i,
                s,
                o,
                a,
                u,
                l,
                c,
                h,
                f = this._time,
                d = this._tDur,
                p = this._dur,
                m = t < 0,
                g = t > d - 1e-8 && !m ? d : t < 1e-8 ? 0 : t;
              if (p) {
                if (
                  g !== this._tTime ||
                  !t ||
                  r ||
                  (!this._initted && this._tTime) ||
                  (this._startAt && this._zTime < 0 !== m)
                ) {
                  if (((n = g), (c = this.timeline), this._repeat)) {
                    if (((o = p + this._rDelay), this._repeat < -1 && m))
                      return this.totalTime(100 * o + t, e, r);
                    if (
                      ((n = tC(g % o)),
                      g === d
                        ? ((s = this._repeat), (n = p))
                        : ((s = ~~(g / o)) && s === g / o && ((n = p), s--),
                          n > p && (n = p)),
                      (u = this._yoyo && 1 & s) &&
                        ((h = this._yEase), (n = p - n)),
                      (a = tU(this._tTime, o)),
                      n === f && !r && this._initted)
                    )
                      return (this._tTime = g), this;
                    s === a ||
                      (c && this._yEase && ez(c, u),
                      !this.vars.repeatRefresh ||
                        u ||
                        this._lock ||
                        ((this._lock = r = 1),
                        (this.render(tC(o * s), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (tK(this, m ? t : n, r, e, g))
                      return (this._tTime = 0), this;
                    if (f !== this._time) return this;
                    if (p !== this._dur) return this.render(t, e, r);
                  }
                  if (
                    ((this._tTime = g),
                    (this._time = n),
                    !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                    (this.ratio = l = (h || this._ease)(n / p)),
                    this._from && (this.ratio = l = 1 - l),
                    n &&
                      !f &&
                      !e &&
                      !s &&
                      (em(this, "onStart"), this._tTime !== g))
                  )
                    return this;
                  for (i = this._pt; i; ) i.r(l, i.d), (i = i._next);
                  (c &&
                    c.render(
                      t < 0
                        ? t
                        : !n && u
                        ? -0.00000001
                        : c._dur * c._ease(n / this._dur),
                      e,
                      r
                    )) ||
                    (this._startAt && (this._zTime = t)),
                    this._onUpdate &&
                      !e &&
                      (m && tW(this, t, e, r), em(this, "onUpdate")),
                    this._repeat &&
                      s !== a &&
                      this.vars.onRepeat &&
                      !e &&
                      this.parent &&
                      em(this, "onRepeat"),
                    (g === this._tDur || !g) &&
                      this._tTime === g &&
                      (m && !this._onUpdate && tW(this, t, !0, !0),
                      (t || !p) &&
                        ((g === this._tDur && this._ts > 0) ||
                          (!g && this._ts < 0)) &&
                        tV(this, 1),
                      !e &&
                        !(m && !f) &&
                        (g || f || u) &&
                        (em(
                          this,
                          g === d ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(g < d && this.timeScale() > 0) &&
                          this._prom()));
                }
              } else t2(this, t, e, r);
              return this;
            }),
            (i.targets = function () {
              return this._targets;
            }),
            (i.invalidate = function (e) {
              return (
                (e && this.vars.runBackwards) || (this._startAt = 0),
                (this._pt =
                  this._op =
                  this._onUpdate =
                  this._lazy =
                  this.ratio =
                    0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(e),
                t.prototype.invalidate.call(this, e)
              );
            }),
            (i.resetTo = function (t, e, r, n) {
              P || eS.wake(), this._ts || this.play();
              var i = Math.min(
                this._dur,
                (this._dp._time - this._start) * this._ts
              );
              return (this._initted || e1(this, i),
              e2(this, t, e, r, n, this._ease(i / this._dur), i))
                ? this.resetTo(t, e, r, n)
                : (tZ(this, 0),
                  this.parent ||
                    tF(
                      this._dp,
                      this,
                      "_first",
                      "_last",
                      this._dp._sort ? "_start" : 0
                    ),
                  this.render(0));
            }),
            (i.kill = function (t, e) {
              if ((void 0 === e && (e = "all"), !t && (!e || "all" === e)))
                return (
                  (this._lazy = this._pt = 0), this.parent ? eg(this) : this
                );
              if (this.timeline) {
                var r = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(
                    t,
                    e,
                    eZ && !0 !== eZ.vars.overwrite
                  )._first || eg(this),
                  this.parent &&
                    r !== this.timeline.totalDuration() &&
                    t3(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                  this
                );
              }
              var n,
                i,
                s,
                o,
                a,
                u,
                l,
                c = this._targets,
                h = t ? ei(t) : c,
                f = this._ptLookup,
                d = this._pt;
              if ((!e || "all" === e) && tI(c, h))
                return "all" === e && (this._pt = 0), eg(this);
              for (
                n = this._op = this._op || [],
                  "all" !== e &&
                    (B(e) &&
                      ((a = {}),
                      tE(e, function (t) {
                        return (a[t] = 1);
                      }),
                      (e = a)),
                    (e = e5(c, e))),
                  l = c.length;
                l--;

              )
                if (~h.indexOf(c[l]))
                  for (a in ((i = f[l]),
                  "all" === e
                    ? ((n[l] = e), (o = i), (s = {}))
                    : ((s = n[l] = n[l] || {}), (o = e)),
                  o))
                    (u = i && i[a]) &&
                      (("kill" in u.d && !0 !== u.d.kill(a)) ||
                        tB(this, u, "_pt"),
                      delete i[a]),
                      "all" !== s && (s[a] = 1);
              return this._initted && !this._pt && d && eg(this), this;
            }),
            (n.to = function (t, e) {
              return new n(t, e, arguments[2]);
            }),
            (n.from = function (t, e) {
              return t9(1, arguments);
            }),
            (n.delayedCall = function (t, e, r, i) {
              return new n(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i,
              });
            }),
            (n.fromTo = function (t, e, r) {
              return t9(2, arguments);
            }),
            (n.set = function (t, e) {
              return (
                (e.duration = 0), e.repeatDelay || (e.repeat = 0), new n(t, e)
              );
            }),
            (n.killTweensOf = function (t, e, r) {
              return E.killTweensOf(t, e, r);
            }),
            n
          );
        })(eH);
        tj(e9.prototype, {
          _targets: [],
          _lazy: 0,
          _startAt: 0,
          _op: 0,
          _onInit: 0,
        }),
          tE("staggerTo,staggerFrom,staggerFromTo", function (t) {
            e9[t] = function () {
              var e = new eW(),
                r = er.call(arguments, 0);
              return (
                r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
              );
            };
          });
        var e7 = function (t, e, r) {
            return (t[e] = r);
          },
          rt = function (t, e, r) {
            return t[e](r);
          },
          re = function (t, e, r, n) {
            return t[e](n.fp, r);
          },
          rr = function (t, e, r) {
            return t.setAttribute(e, r);
          },
          rn = function (t, e) {
            return V(t[e]) ? rt : H(t[e]) && t.setAttribute ? rr : e7;
          },
          ri = function (t, e) {
            return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
          },
          rs = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
          },
          ro = function (t, e) {
            var r = e._pt,
              n = "";
            if (!t && e.b) n = e.b;
            else if (1 === t && e.e) n = e.e;
            else {
              for (; r; )
                (n =
                  r.p +
                  (r.m
                    ? r.m(r.s + r.c * t)
                    : Math.round((r.s + r.c * t) * 1e4) / 1e4) +
                  n),
                  (r = r._next);
              n += e.c;
            }
            e.set(e.t, e.p, n, e);
          },
          ra = function (t, e) {
            for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
          },
          ru = function (t, e, r, n) {
            for (var i, s = this._pt; s; )
              (i = s._next), s.p === n && s.modifier(t, e, r), (s = i);
          },
          rl = function (t) {
            for (var e, r, n = this._pt; n; )
              (r = n._next),
                (n.p !== t || n.op) && n.op !== t
                  ? n.dep || (e = 1)
                  : tB(this, n, "_pt"),
                (n = r);
            return !e;
          },
          rc = function (t, e, r, n) {
            n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
          },
          rh = function (t) {
            for (var e, r, n, i, s = t._pt; s; ) {
              for (e = s._next, r = n; r && r.pr > s.pr; ) r = r._next;
              (s._prev = r ? r._prev : i) ? (s._prev._next = s) : (n = s),
                (s._next = r) ? (r._prev = s) : (i = s),
                (s = e);
            }
            t._pt = n;
          },
          rf = (function () {
            function t(t, e, r, n, i, s, o, a, u) {
              (this.t = e),
                (this.s = n),
                (this.c = i),
                (this.p = r),
                (this.r = s || ri),
                (this.d = o || this),
                (this.set = a || e7),
                (this.pr = u || 0),
                (this._next = t),
                t && (t._prev = this);
            }
            return (
              (t.prototype.modifier = function (t, e, r) {
                (this.mSet = this.mSet || this.set),
                  (this.set = rc),
                  (this.m = t),
                  (this.mt = r),
                  (this.tween = e);
              }),
              t
            );
          })();
        tE(
          tw +
            "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
          function (t) {
            return (td[t] = 1);
          }
        ),
          (tn.TweenMax = tn.TweenLite = e9),
          (tn.TimelineLite = tn.TimelineMax = eW),
          (E = new eW({
            sortChildren: !1,
            defaults: j,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0,
          })),
          (A.stringFilter = eC);
        var rd = [],
          rp = {},
          rm = [],
          rg = 0,
          r_ = 0,
          rv = function (t) {
            return (rp[t] || rm).map(function (t) {
              return t();
            });
          },
          ry = function () {
            var t = Date.now(),
              e = [];
            t - rg > 2 &&
              (rv("matchMediaInit"),
              rd.forEach(function (t) {
                var r,
                  n,
                  i,
                  s,
                  o = t.queries,
                  a = t.conditions;
                for (n in o)
                  (r = k.matchMedia(o[n]).matches) && (i = 1),
                    r !== a[n] && ((a[n] = r), (s = 1));
                s && (t.revert(), i && e.push(t));
              }),
              rv("matchMediaRevert"),
              e.forEach(function (t) {
                return t.onMatch(t);
              }),
              (rg = t),
              rv("matchMedia"));
          },
          rw = (function () {
            function t(t, e) {
              (this.selector = e && es(e)),
                (this.data = []),
                (this._r = []),
                (this.isReverted = !1),
                (this.id = r_++),
                t && this.add(t);
            }
            var e = t.prototype;
            return (
              (e.add = function (t, e, r) {
                V(t) && ((r = e), (e = t), (t = V));
                var n = this,
                  i = function () {
                    var t,
                      i = T,
                      s = n.selector;
                    return (
                      i && i !== n && i.data.push(n),
                      r && (n.selector = es(r)),
                      (T = n),
                      (t = e.apply(n, arguments)),
                      V(t) && n._r.push(t),
                      (T = i),
                      (n.selector = s),
                      (n.isReverted = !1),
                      t
                    );
                  };
                return (n.last = i), t === V ? i(n) : t ? (n[t] = i) : i;
              }),
              (e.ignore = function (t) {
                var e = T;
                (T = null), t(this), (T = e);
              }),
              (e.getTweens = function () {
                var e = [];
                return (
                  this.data.forEach(function (r) {
                    return r instanceof t
                      ? e.push.apply(e, r.getTweens())
                      : r instanceof e9 &&
                          !(r.parent && "nested" === r.parent.data) &&
                          e.push(r);
                  }),
                  e
                );
              }),
              (e.clear = function () {
                this._r.length = this.data.length = 0;
              }),
              (e.kill = function (t, e) {
                var r = this;
                if (t) {
                  var n = this.getTweens();
                  this.data.forEach(function (t) {
                    "isFlip" === t.data &&
                      (t.revert(),
                      t.getChildren(!0, !0, !1).forEach(function (t) {
                        return n.splice(n.indexOf(t), 1);
                      }));
                  }),
                    n
                      .map(function (t) {
                        return { g: t.globalTime(0), t: t };
                      })
                      .sort(function (t, e) {
                        return e.g - t.g || -1 / 0;
                      })
                      .forEach(function (e) {
                        return e.t.revert(t);
                      }),
                    this.data.forEach(function (e) {
                      return !(e instanceof e9) && e.revert && e.revert(t);
                    }),
                    this._r.forEach(function (e) {
                      return e(t, r);
                    }),
                    (this.isReverted = !0);
                } else
                  this.data.forEach(function (t) {
                    return t.kill && t.kill();
                  });
                if ((this.clear(), e))
                  for (var i = rd.length; i--; )
                    rd[i].id === this.id && rd.splice(i, 1);
              }),
              (e.revert = function (t) {
                this.kill(t || {});
              }),
              t
            );
          })(),
          rb = (function () {
            function t(t) {
              (this.contexts = []), (this.scope = t);
            }
            var e = t.prototype;
            return (
              (e.add = function (t, e, r) {
                W(t) || (t = { matches: t });
                var n,
                  i,
                  s,
                  o = new rw(0, r || this.scope),
                  a = (o.conditions = {});
                for (i in (T && !o.selector && (o.selector = T.selector),
                this.contexts.push(o),
                (e = o.add("onMatch", e)),
                (o.queries = t),
                t))
                  "all" === i
                    ? (s = 1)
                    : (n = k.matchMedia(t[i])) &&
                      (0 > rd.indexOf(o) && rd.push(o),
                      (a[i] = n.matches) && (s = 1),
                      n.addListener
                        ? n.addListener(ry)
                        : n.addEventListener("change", ry));
                return s && e(o), this;
              }),
              (e.revert = function (t) {
                this.kill(t || {});
              }),
              (e.kill = function (t) {
                this.contexts.forEach(function (e) {
                  return e.kill(t, !0);
                });
              }),
              t
            );
          })(),
          rx = {
            registerPlugin: function () {
              for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
              e.forEach(function (t) {
                return ev(t);
              });
            },
            timeline: function (t) {
              return new eW(t);
            },
            getTweensOf: function (t, e) {
              return E.getTweensOf(t, e);
            },
            getProperty: function (t, e, r, n) {
              B(t) && (t = ei(t)[0]);
              var i = tx(t || {}).get,
                s = r ? tA : tP;
              return (
                "native" === r && (r = ""),
                t
                  ? e
                    ? s(((tg[e] && tg[e].get) || i)(t, e, r, n))
                    : function (e, r, n) {
                        return s(((tg[e] && tg[e].get) || i)(t, e, r, n));
                      }
                  : t
              );
            },
            quickSetter: function (t, e, r) {
              if ((t = ei(t)).length > 1) {
                var n = t.map(function (t) {
                    return rC.quickSetter(t, e, r);
                  }),
                  i = n.length;
                return function (t) {
                  for (var e = i; e--; ) n[e](t);
                };
              }
              t = t[0] || {};
              var s = tg[e],
                o = tx(t),
                a = (o.harness && (o.harness.aliases || {})[e]) || e,
                u = s
                  ? function (e) {
                      var n = new s();
                      (R._pt = 0),
                        n.init(t, r ? e + r : e, R, 0, [t]),
                        n.render(1, n),
                        R._pt && ra(1, R);
                    }
                  : o.set(t, a);
              return s
                ? u
                : function (e) {
                    return u(t, a, r ? e + r : e, o, 1);
                  };
            },
            quickTo: function (t, e, r) {
              var n,
                i = rC.to(
                  t,
                  tL((((n = {})[e] = "+=0.1"), (n.paused = !0), n), r || {})
                ),
                s = function (t, r, n) {
                  return i.resetTo(e, t, r, n);
                };
              return (s.tween = i), s;
            },
            isTweening: function (t) {
              return E.getTweensOf(t, !0).length > 0;
            },
            defaults: function (t) {
              return (
                t && t.ease && (t.ease = eN(t.ease, j.ease)), tD(j, t || {})
              );
            },
            config: function (t) {
              return tD(A, t || {});
            },
            registerEffect: function (t) {
              var e = t.name,
                r = t.effect,
                n = t.plugins,
                i = t.defaults,
                s = t.extendTimeline;
              (n || "").split(",").forEach(function (t) {
                return (
                  t &&
                  !tg[t] &&
                  !tn[t] &&
                  ta(e + " effect requires " + t + " plugin.")
                );
              }),
                (t_[e] = function (t, e, n) {
                  return r(ei(t), tj(e || {}, i), n);
                }),
                s &&
                  (eW.prototype[e] = function (t, r, n) {
                    return this.add(
                      t_[e](t, W(r) ? r : (n = r) && {}, this),
                      n
                    );
                  });
            },
            registerEase: function (t, e) {
              eM[t] = eN(e);
            },
            parseEase: function (t, e) {
              return arguments.length ? eN(t, e) : eM;
            },
            getById: function (t) {
              return E.getById(t);
            },
            exportRoot: function (t, e) {
              void 0 === t && (t = {});
              var r,
                n,
                i = new eW(t);
              for (
                i.smoothChildTiming = q(t.smoothChildTiming),
                  E.remove(i),
                  i._dp = 0,
                  i._time = i._tTime = E._time,
                  r = E._first;
                r;

              )
                (n = r._next),
                  (e ||
                    !(
                      !r._dur &&
                      r instanceof e9 &&
                      r.vars.onComplete === r._targets[0]
                    )) &&
                    tQ(i, r, r._start - r._delay),
                  (r = n);
              return tQ(E, i, 0), i;
            },
            context: function (t, e) {
              return t ? new rw(t, e) : T;
            },
            matchMedia: function (t) {
              return new rb(t);
            },
            matchMediaRefresh: function () {
              return (
                rd.forEach(function (t) {
                  var e,
                    r,
                    n = t.conditions;
                  for (r in n) n[r] && ((n[r] = !1), (e = 1));
                  e && t.revert();
                }) || ry()
              );
            },
            addEventListener: function (t, e) {
              var r = rp[t] || (rp[t] = []);
              ~r.indexOf(e) || r.push(e);
            },
            removeEventListener: function (t, e) {
              var r = rp[t],
                n = r && r.indexOf(e);
              n >= 0 && r.splice(n, 1);
            },
            utils: {
              wrap: function t(e, r, n) {
                var i = r - e;
                return Z(e)
                  ? eh(e, t(0, e.length), r)
                  : t7(n, function (t) {
                      return ((i + ((t - e) % i)) % i) + e;
                    });
              },
              wrapYoyo: function t(e, r, n) {
                var i = r - e,
                  s = 2 * i;
                return Z(e)
                  ? eh(e, t(0, e.length - 1), r)
                  : t7(n, function (t) {
                      return (
                        (t = (s + ((t - e) % s)) % s || 0),
                        e + (t > i ? s - t : t)
                      );
                    });
              },
              distribute: ea,
              random: ec,
              snap: el,
              normalize: function (t, e, r) {
                return ed(t, e, 0, 1, r);
              },
              getUnit: ee,
              clamp: function (t, e, r) {
                return t7(r, function (r) {
                  return et(t, e, r);
                });
              },
              splitColor: eb,
              toArray: ei,
              selector: es,
              mapRange: ed,
              pipe: function () {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                  e[r] = arguments[r];
                return function (t) {
                  return e.reduce(function (t, e) {
                    return e(t);
                  }, t);
                };
              },
              unitize: function (t, e) {
                return function (r) {
                  return t(parseFloat(r)) + (e || ee(r));
                };
              },
              interpolate: function t(e, r, n, i) {
                var s = isNaN(e + r)
                  ? 0
                  : function (t) {
                      return (1 - t) * e + t * r;
                    };
                if (!s) {
                  var o,
                    a,
                    u,
                    l,
                    c,
                    h = B(e),
                    f = {};
                  if ((!0 === n && (i = 1) && (n = null), h))
                    (e = { p: e }), (r = { p: r });
                  else if (Z(e) && !Z(r)) {
                    for (a = 1, u = [], c = (l = e.length) - 2; a < l; a++)
                      u.push(t(e[a - 1], e[a]));
                    l--,
                      (s = function (t) {
                        var e = Math.min(c, ~~(t *= l));
                        return u[e](t - e);
                      }),
                      (n = r);
                  } else i || (e = tL(Z(e) ? [] : {}, e));
                  if (!u) {
                    for (o in r) eJ.call(f, e, o, "get", r[o]);
                    s = function (t) {
                      return ra(t, f) || (h ? e.p : e);
                    };
                  }
                }
                return t7(n, s);
              },
              shuffle: eo,
            },
            install: ts,
            effects: t_,
            ticker: eS,
            updateRoot: eW.updateRoot,
            plugins: tg,
            globalTimeline: E,
            core: {
              PropTween: rf,
              globals: tu,
              Tween: e9,
              Timeline: eW,
              Animation: eH,
              getCache: tx,
              _removeLinkedListItem: tB,
              reverting: function () {
                return x;
              },
              context: function (t) {
                return t && T && (T.data.push(t), (t._ctx = T)), T;
              },
              suppressOverwrites: function (t) {
                return (b = t);
              },
            },
          };
        tE("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
          return (rx[t] = e9[t]);
        }),
          eS.add(eW.updateRoot),
          (R = rx.to({}, { duration: 0 }));
        var rT = function (t, e) {
            for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
              r = r._next;
            return r;
          },
          rE = function (t, e) {
            var r,
              n,
              i,
              s = t._targets;
            for (r in e)
              for (n = s.length; n--; )
                (i = t._ptLookup[n][r]) &&
                  (i = i.d) &&
                  (i._pt && (i = rT(i, r)),
                  i && i.modifier && i.modifier(e[r], t, s[n], r));
          },
          rk = function (t, e) {
            return {
              name: t,
              rawVars: 1,
              init: function (t, r, n) {
                n._onInit = function (t) {
                  var n, i;
                  if (
                    (B(r) &&
                      ((n = {}),
                      tE(r, function (t) {
                        return (n[t] = 1);
                      }),
                      (r = n)),
                    e)
                  ) {
                    for (i in ((n = {}), r)) n[i] = e(r[i]);
                    r = n;
                  }
                  rE(t, r);
                };
              },
            };
          },
          rC =
            rx.registerPlugin(
              {
                name: "attr",
                init: function (t, e, r, n, i) {
                  var s, o, a;
                  for (s in ((this.tween = r), e))
                    (a = t.getAttribute(s) || ""),
                      ((o = this.add(
                        t,
                        "setAttribute",
                        (a || 0) + "",
                        e[s],
                        n,
                        i,
                        0,
                        0,
                        s
                      )).op = s),
                      (o.b = a),
                      this._props.push(s);
                },
                render: function (t, e) {
                  for (var r = e._pt; r; )
                    x ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
                },
              },
              {
                name: "endArray",
                init: function (t, e) {
                  for (var r = e.length; r--; )
                    this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
                },
              },
              rk("roundProps", eu),
              rk("modifiers"),
              rk("snap", el)
            ) || rx;
        (e9.version = eW.version = rC.version = "3.12.2"), (O = 1), U() && eO();
        var rS,
          rO,
          rM,
          rR,
          rP,
          rA,
          rj,
          rL = eM.Power0,
          rD = eM.Power1,
          rz = eM.Power2,
          rN = eM.Power3,
          rI = eM.Power4,
          rF = eM.Linear,
          rB = eM.Quad,
          rV = eM.Cubic,
          rY = eM.Quart,
          rH = eM.Quint,
          rW = eM.Strong,
          rq = eM.Elastic,
          rU = eM.Back,
          rX = eM.SteppedEase,
          rG = eM.Bounce,
          rZ = eM.Sine,
          r$ = eM.Expo,
          rQ = eM.Circ,
          rJ = {},
          rK = 180 / Math.PI,
          r0 = Math.PI / 180,
          r1 = Math.atan2,
          r2 = /([A-Z])/g,
          r5 = /(left|right|width|margin|padding|x)/i,
          r3 = /[\s,\(]\S/,
          r8 = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity",
          },
          r4 = function (t, e) {
            return e.set(
              e.t,
              e.p,
              Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
              e
            );
          },
          r6 = function (t, e) {
            return e.set(
              e.t,
              e.p,
              1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
              e
            );
          },
          r9 = function (t, e) {
            return e.set(
              e.t,
              e.p,
              t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
              e
            );
          },
          r7 = function (t, e) {
            var r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
          },
          nt = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e);
          },
          ne = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
          },
          nr = function (t, e, r) {
            return (t.style[e] = r);
          },
          nn = function (t, e, r) {
            return t.style.setProperty(e, r);
          },
          ni = function (t, e, r) {
            return (t._gsap[e] = r);
          },
          ns = function (t, e, r) {
            return (t._gsap.scaleX = t._gsap.scaleY = r);
          },
          no = function (t, e, r, n, i) {
            var s = t._gsap;
            (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
          },
          na = function (t, e, r, n, i) {
            var s = t._gsap;
            (s[e] = r), s.renderTransform(i, s);
          },
          nu = "transform",
          nl = nu + "Origin",
          nc = function t(e, r) {
            var n = this,
              i = this.target,
              s = i.style;
            if (e in rJ && s) {
              if (((this.tfm = this.tfm || {}), "transform" === e))
                return r8.transform.split(",").forEach(function (e) {
                  return t.call(n, e, r);
                });
              if (
                (~(e = r8[e] || e).indexOf(",")
                  ? e.split(",").forEach(function (t) {
                      return (n.tfm[t] = nO(i, t));
                    })
                  : (this.tfm[e] = i._gsap.x ? i._gsap[e] : nO(i, e)),
                this.props.indexOf(nu) >= 0)
              )
                return;
              i._gsap.svg &&
                ((this.svgo = i.getAttribute("data-svg-origin")),
                this.props.push(nl, r, "")),
                (e = nu);
            }
            (s || r) && this.props.push(e, r, s[e]);
          },
          nh = function (t) {
            t.translate &&
              (t.removeProperty("translate"),
              t.removeProperty("scale"),
              t.removeProperty("rotate"));
          },
          nf = function () {
            var t,
              e,
              r = this.props,
              n = this.target,
              i = n.style,
              s = n._gsap;
            for (t = 0; t < r.length; t += 3)
              r[t + 1]
                ? (n[r[t]] = r[t + 2])
                : r[t + 2]
                ? (i[r[t]] = r[t + 2])
                : i.removeProperty(
                    "--" === r[t].substr(0, 2)
                      ? r[t]
                      : r[t].replace(r2, "-$1").toLowerCase()
                  );
            if (this.tfm) {
              for (e in this.tfm) s[e] = this.tfm[e];
              s.svg &&
                (s.renderTransform(),
                n.setAttribute("data-svg-origin", this.svgo || "")),
                ((t = rA()) && t.isStart) || i[nu] || (nh(i), (s.uncache = 1));
            }
          },
          nd = function (t, e) {
            var r = { target: t, props: [], revert: nf, save: nc };
            return (
              t._gsap || rC.core.getCache(t),
              e &&
                e.split(",").forEach(function (t) {
                  return r.save(t);
                }),
              r
            );
          },
          np = function (t, e) {
            var r = rS.createElementNS
              ? rS.createElementNS(
                  (e || "http://www.w3.org/1999/xhtml").replace(
                    /^https/,
                    "http"
                  ),
                  t
                )
              : rS.createElement(t);
            return r.style ? r : rS.createElement(t);
          },
          nm = function t(e, r, n) {
            var i = getComputedStyle(e);
            return (
              i[r] ||
              i.getPropertyValue(r.replace(r2, "-$1").toLowerCase()) ||
              i.getPropertyValue(r) ||
              (!n && t(e, n_(r) || r, 1)) ||
              ""
            );
          },
          ng = "O,Moz,ms,Ms,Webkit".split(","),
          n_ = function (t, e, r) {
            var n = (e || rR).style,
              i = 5;
            if (t in n && !r) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1);
              i-- && !(ng[i] + t in n);

            );
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? ng[i] : "") + t;
          },
          nv = function () {
            "undefined" != typeof window &&
              window.document &&
              ((rO = (rS = window.document).documentElement),
              (rR = np("div") || { style: {} }),
              np("div"),
              (nl = (nu = n_(nu)) + "Origin"),
              (rR.style.cssText =
                "border-width:0;line-height:0;position:absolute;padding:0"),
              (rj = !!n_("perspective")),
              (rA = rC.core.reverting),
              (rM = 1));
          },
          ny = function t(e) {
            var r,
              n = np(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              i = this.parentNode,
              s = this.nextSibling,
              o = this.style.cssText;
            if (
              (rO.appendChild(n),
              n.appendChild(this),
              (this.style.display = "block"),
              e)
            )
              try {
                (r = this.getBBox()),
                  (this._gsapBBox = this.getBBox),
                  (this.getBBox = t);
              } catch (t) {}
            else this._gsapBBox && (r = this._gsapBBox());
            return (
              i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
              rO.removeChild(n),
              (this.style.cssText = o),
              r
            );
          },
          nw = function (t, e) {
            for (var r = e.length; r--; )
              if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
          },
          nb = function (t) {
            var e;
            try {
              e = t.getBBox();
            } catch (r) {
              e = ny.call(t, !0);
            }
            return (
              (e && (e.width || e.height)) ||
                t.getBBox === ny ||
                (e = ny.call(t, !0)),
              !e || e.width || e.x || e.y
                ? e
                : {
                    x: +nw(t, ["x", "cx", "x1"]) || 0,
                    y: +nw(t, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0,
                  }
            );
          },
          nx = function (t) {
            return !!(
              t.getCTM &&
              (!t.parentNode || t.ownerSVGElement) &&
              nb(t)
            );
          },
          nT = function (t, e) {
            if (e) {
              var r = t.style;
              e in rJ && e !== nl && (e = nu),
                r.removeProperty
                  ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) &&
                      (e = "-" + e),
                    r.removeProperty(e.replace(r2, "-$1").toLowerCase()))
                  : r.removeAttribute(e);
            }
          },
          nE = function (t, e, r, n, i, s) {
            var o = new rf(t._pt, e, r, 0, 1, s ? ne : nt);
            return (t._pt = o), (o.b = n), (o.e = i), t._props.push(r), o;
          },
          nk = { deg: 1, rad: 1, turn: 1 },
          nC = { grid: 1, flex: 1 },
          nS = function t(e, r, n, i) {
            var s,
              o,
              a,
              u,
              l = parseFloat(n) || 0,
              c = (n + "").trim().substr((l + "").length) || "px",
              h = rR.style,
              f = r5.test(r),
              d = "svg" === e.tagName.toLowerCase(),
              p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
              m = "px" === i,
              g = "%" === i;
            return i === c || !l || nk[i] || nk[c]
              ? l
              : ("px" === c || m || (l = t(e, r, n, "px")),
                (u = e.getCTM && nx(e)),
                (g || "%" === c) && (rJ[r] || ~r.indexOf("adius")))
              ? ((s = u ? e.getBBox()[f ? "width" : "height"] : e[p]),
                tk(g ? (l / s) * 100 : (l / 100) * s))
              : ((h[f ? "width" : "height"] = 100 + (m ? c : i)),
                (o =
                  ~r.indexOf("adius") || ("em" === i && e.appendChild && !d)
                    ? e
                    : e.parentNode),
                u && (o = (e.ownerSVGElement || {}).parentNode),
                (o && o !== rS && o.appendChild) || (o = rS.body),
                (a = o._gsap) &&
                  g &&
                  a.width &&
                  f &&
                  a.time === eS.time &&
                  !a.uncache)
              ? tk((l / a.width) * 100)
              : ((g || "%" === c) &&
                  !nC[nm(o, "display")] &&
                  (h.position = nm(e, "position")),
                o === e && (h.position = "static"),
                o.appendChild(rR),
                (s = rR[p]),
                o.removeChild(rR),
                (h.position = "absolute"),
                f && g && (((a = tx(o)).time = eS.time), (a.width = o[p])),
                tk(m ? (s * l) / 100 : s && l ? (100 / s) * l : 0));
          },
          nO = function (t, e, r, n) {
            var i;
            return (
              rM || nv(),
              e in r8 &&
                "transform" !== e &&
                ~(e = r8[e]).indexOf(",") &&
                (e = e.split(",")[0]),
              rJ[e] && "transform" !== e
                ? ((i = nB(t, n)),
                  (i =
                    "transformOrigin" !== e
                      ? i[e]
                      : i.svg
                      ? i.origin
                      : nV(nm(t, nl)) + " " + i.zOrigin + "px"))
                : (!(i = t.style[e]) ||
                    "auto" === i ||
                    n ||
                    ~(i + "").indexOf("calc(")) &&
                  (i =
                    (nj[e] && nj[e](t, e, r)) ||
                    nm(t, e) ||
                    tT(t, e) ||
                    ("opacity" === e ? 1 : 0)),
              r && !~(i + "").trim().indexOf(" ") ? nS(t, e, i, r) + r : i
            );
          },
          nM = function (t, e, r, n) {
            if (!r || "none" === r) {
              var i = n_(e, t, 1),
                s = i && nm(t, i, 1);
              s && s !== r
                ? ((e = i), (r = s))
                : "borderColor" === e && (r = nm(t, "borderTopColor"));
            }
            var o,
              a,
              u,
              l,
              c,
              h,
              f,
              d,
              p,
              m,
              g,
              _ = new rf(this._pt, t.style, e, 0, 1, ro),
              v = 0,
              y = 0;
            if (
              ((_.b = r),
              (_.e = n),
              (r += ""),
              "auto" == (n += "") &&
                ((t.style[e] = n), (n = nm(t, e) || n), (t.style[e] = r)),
              eC((o = [r, n])),
              (r = o[0]),
              (n = o[1]),
              (u = r.match(J) || []),
              (n.match(J) || []).length)
            ) {
              for (; (a = J.exec(n)); )
                (f = a[0]),
                  (p = n.substring(v, a.index)),
                  c
                    ? (c = (c + 1) % 5)
                    : ("rgba(" === p.substr(-5) || "hsla(" === p.substr(-5)) &&
                      (c = 1),
                  f !== (h = u[y++] || "") &&
                    ((l = parseFloat(h) || 0),
                    (g = h.substr((l + "").length)),
                    "=" === f.charAt(1) && (f = tS(l, f) + g),
                    (d = parseFloat(f)),
                    (m = f.substr((d + "").length)),
                    (v = J.lastIndex - m.length),
                    m ||
                      ((m = m || A.units[e] || g),
                      v !== n.length || ((n += m), (_.e += m))),
                    g !== m && (l = nS(t, e, h, m) || 0),
                    (_._pt = {
                      _next: _._pt,
                      p: p || 1 === y ? p : ",",
                      s: l,
                      c: d - l,
                      m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
                    }));
              _.c = v < n.length ? n.substring(v, n.length) : "";
            } else _.r = "display" === e && "none" === n ? ne : nt;
            return tt.test(n) && (_.e = 0), (this._pt = _), _;
          },
          nR = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%",
          },
          nP = function (t) {
            var e = t.split(" "),
              r = e[0],
              n = e[1] || "50%";
            return (
              ("top" === r ||
                "bottom" === r ||
                "left" === n ||
                "right" === n) &&
                ((t = r), (r = n), (n = t)),
              (e[0] = nR[r] || r),
              (e[1] = nR[n] || n),
              e.join(" ")
            );
          },
          nA = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
              var r,
                n,
                i,
                s = e.t,
                o = s.style,
                a = e.u,
                u = s._gsap;
              if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
              else
                for (i = (a = a.split(",")).length; --i > -1; )
                  rJ[(r = a[i])] &&
                    ((n = 1), (r = "transformOrigin" === r ? nl : nu)),
                    nT(s, r);
              n &&
                (nT(s, nu),
                u &&
                  (u.svg && s.removeAttribute("transform"),
                  nB(s, 1),
                  (u.uncache = 1),
                  nh(o)));
            }
          },
          nj = {
            clearProps: function (t, e, r, n, i) {
              if ("isFromStart" !== i.data) {
                var s = (t._pt = new rf(t._pt, e, r, 0, 0, nA));
                return (
                  (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1
                );
              }
            },
          },
          nL = [1, 0, 0, 1, 0, 0],
          nD = {},
          nz = function (t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
          },
          nN = function (t) {
            var e = nm(t, nu);
            return nz(e) ? nL : e.substr(7).match(Q).map(tk);
          },
          nI = function (t, e) {
            var r,
              n,
              i,
              s,
              o = t._gsap || tx(t),
              a = t.style,
              u = nN(t);
            return o.svg && t.getAttribute("transform")
              ? "1,0,0,1,0,0" ===
                (u = [
                  (i = t.transform.baseVal.consolidate().matrix).a,
                  i.b,
                  i.c,
                  i.d,
                  i.e,
                  i.f,
                ]).join(",")
                ? nL
                : u
              : (u !== nL ||
                  t.offsetParent ||
                  t === rO ||
                  o.svg ||
                  ((i = a.display),
                  (a.display = "block"),
                  ((r = t.parentNode) && t.offsetParent) ||
                    ((s = 1), (n = t.nextElementSibling), rO.appendChild(t)),
                  (u = nN(t)),
                  i ? (a.display = i) : nT(t, "display"),
                  s &&
                    (n
                      ? r.insertBefore(t, n)
                      : r
                      ? r.appendChild(t)
                      : rO.removeChild(t))),
                e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
          },
          nF = function (t, e, r, n, i, s) {
            var o,
              a,
              u,
              l,
              c = t._gsap,
              h = i || nI(t, !0),
              f = c.xOrigin || 0,
              d = c.yOrigin || 0,
              p = c.xOffset || 0,
              m = c.yOffset || 0,
              g = h[0],
              _ = h[1],
              v = h[2],
              y = h[3],
              w = h[4],
              b = h[5],
              x = e.split(" "),
              T = parseFloat(x[0]) || 0,
              E = parseFloat(x[1]) || 0;
            r
              ? h !== nL &&
                (a = g * y - _ * v) &&
                ((u = T * (y / a) + E * (-v / a) + (v * b - y * w) / a),
                (l = T * (-_ / a) + E * (g / a) - (g * b - _ * w) / a),
                (T = u),
                (E = l))
              : ((T =
                  (o = nb(t)).x +
                  (~x[0].indexOf("%") ? (T / 100) * o.width : T)),
                (E =
                  o.y +
                  (~(x[1] || x[0]).indexOf("%") ? (E / 100) * o.height : E))),
              n || (!1 !== n && c.smooth)
                ? ((w = T - f),
                  (b = E - d),
                  (c.xOffset = p + (w * g + b * v) - w),
                  (c.yOffset = m + (w * _ + b * y) - b))
                : (c.xOffset = c.yOffset = 0),
              (c.xOrigin = T),
              (c.yOrigin = E),
              (c.smooth = !!n),
              (c.origin = e),
              (c.originIsAbsolute = !!r),
              (t.style[nl] = "0px 0px"),
              s &&
                (nE(s, c, "xOrigin", f, T),
                nE(s, c, "yOrigin", d, E),
                nE(s, c, "xOffset", p, c.xOffset),
                nE(s, c, "yOffset", m, c.yOffset)),
              t.setAttribute("data-svg-origin", T + " " + E);
          },
          nB = function (t, e) {
            var r = t._gsap || new eY(t);
            if ("x" in r && !e && !r.uncache) return r;
            var n,
              i,
              s,
              o,
              a,
              u,
              l,
              c,
              h,
              f,
              d,
              p,
              m,
              g,
              _,
              v,
              y,
              w,
              b,
              x,
              T,
              E,
              k,
              C,
              S,
              O,
              M,
              R,
              P,
              j,
              L,
              D,
              z = t.style,
              N = r.scaleX < 0,
              I = getComputedStyle(t),
              F = nm(t, nl) || "0";
            return (
              (n = i = s = u = l = c = h = f = d = 0),
              (o = a = 1),
              (r.svg = !!(t.getCTM && nx(t))),
              I.translate &&
                (("none" !== I.translate ||
                  "none" !== I.scale ||
                  "none" !== I.rotate) &&
                  (z[nu] =
                    ("none" !== I.translate
                      ? "translate3d(" +
                        (I.translate + " 0 0")
                          .split(" ")
                          .slice(0, 3)
                          .join(", ") +
                        ") "
                      : "") +
                    ("none" !== I.rotate ? "rotate(" + I.rotate + ") " : "") +
                    ("none" !== I.scale
                      ? "scale(" + I.scale.split(" ").join(",") + ") "
                      : "") +
                    ("none" !== I[nu] ? I[nu] : "")),
                (z.scale = z.rotate = z.translate = "none")),
              (g = nI(t, r.svg)),
              r.svg &&
                (r.uncache
                  ? ((S = t.getBBox()),
                    (F = r.xOrigin - S.x + "px " + (r.yOrigin - S.y) + "px"),
                    (C = ""))
                  : (C = !e && t.getAttribute("data-svg-origin")),
                nF(t, C || F, !!C || r.originIsAbsolute, !1 !== r.smooth, g)),
              (p = r.xOrigin || 0),
              (m = r.yOrigin || 0),
              g !== nL &&
                ((w = g[0]),
                (b = g[1]),
                (x = g[2]),
                (T = g[3]),
                (n = E = g[4]),
                (i = k = g[5]),
                6 === g.length
                  ? ((o = Math.sqrt(w * w + b * b)),
                    (a = Math.sqrt(T * T + x * x)),
                    (u = w || b ? r1(b, w) * rK : 0),
                    (h = x || T ? r1(x, T) * rK + u : 0) &&
                      (a *= Math.abs(Math.cos(h * r0))),
                    r.svg &&
                      ((n -= p - (p * w + m * x)), (i -= m - (p * b + m * T))))
                  : ((D = g[6]),
                    (j = g[7]),
                    (M = g[8]),
                    (R = g[9]),
                    (P = g[10]),
                    (L = g[11]),
                    (n = g[12]),
                    (i = g[13]),
                    (s = g[14]),
                    (l = (_ = r1(D, P)) * rK),
                    _ &&
                      ((C = E * (v = Math.cos(-_)) + M * (y = Math.sin(-_))),
                      (S = k * v + R * y),
                      (O = D * v + P * y),
                      (M = -(E * y) + M * v),
                      (R = -(k * y) + R * v),
                      (P = -(D * y) + P * v),
                      (L = -(j * y) + L * v),
                      (E = C),
                      (k = S),
                      (D = O)),
                    (c = (_ = r1(-x, P)) * rK),
                    _ &&
                      ((C = w * (v = Math.cos(-_)) - M * (y = Math.sin(-_))),
                      (S = b * v - R * y),
                      (O = x * v - P * y),
                      (L = T * y + L * v),
                      (w = C),
                      (b = S),
                      (x = O)),
                    (u = (_ = r1(b, w)) * rK),
                    _ &&
                      ((v = Math.cos(_)),
                      (y = Math.sin(_)),
                      (C = w * v + b * y),
                      (S = E * v + k * y),
                      (b = b * v - w * y),
                      (k = k * v - E * y),
                      (w = C),
                      (E = S)),
                    l &&
                      Math.abs(l) + Math.abs(u) > 359.9 &&
                      ((l = u = 0), (c = 180 - c)),
                    (o = tk(Math.sqrt(w * w + b * b + x * x))),
                    (a = tk(Math.sqrt(k * k + D * D))),
                    (h = Math.abs((_ = r1(E, k))) > 2e-4 ? _ * rK : 0),
                    (d = L ? 1 / (L < 0 ? -L : L) : 0)),
                r.svg &&
                  ((C = t.getAttribute("transform")),
                  (r.forceCSS =
                    t.setAttribute("transform", "") || !nz(nm(t, nu))),
                  C && t.setAttribute("transform", C))),
              Math.abs(h) > 90 &&
                270 > Math.abs(h) &&
                (N
                  ? ((o *= -1),
                    (h += u <= 0 ? 180 : -180),
                    (u += u <= 0 ? 180 : -180))
                  : ((a *= -1), (h += h <= 0 ? 180 : -180))),
              (e = e || r.uncache),
              (r.x =
                n -
                ((r.xPercent =
                  n &&
                  ((!e && r.xPercent) ||
                    (Math.round(t.offsetWidth / 2) === Math.round(-n)
                      ? -50
                      : 0)))
                  ? (t.offsetWidth * r.xPercent) / 100
                  : 0) +
                "px"),
              (r.y =
                i -
                ((r.yPercent =
                  i &&
                  ((!e && r.yPercent) ||
                    (Math.round(t.offsetHeight / 2) === Math.round(-i)
                      ? -50
                      : 0)))
                  ? (t.offsetHeight * r.yPercent) / 100
                  : 0) +
                "px"),
              (r.z = s + "px"),
              (r.scaleX = tk(o)),
              (r.scaleY = tk(a)),
              (r.rotation = tk(u) + "deg"),
              (r.rotationX = tk(l) + "deg"),
              (r.rotationY = tk(c) + "deg"),
              (r.skewX = h + "deg"),
              (r.skewY = f + "deg"),
              (r.transformPerspective = d + "px"),
              (r.zOrigin = parseFloat(F.split(" ")[2]) || 0) && (z[nl] = nV(F)),
              (r.xOffset = r.yOffset = 0),
              (r.force3D = A.force3D),
              (r.renderTransform = r.svg ? nU : rj ? nq : nH),
              (r.uncache = 0),
              r
            );
          },
          nV = function (t) {
            return (t = t.split(" "))[0] + " " + t[1];
          },
          nY = function (t, e, r) {
            var n = ee(e);
            return tk(parseFloat(e) + parseFloat(nS(t, "x", r + "px", n))) + n;
          },
          nH = function (t, e) {
            (e.z = "0px"),
              (e.rotationY = e.rotationX = "0deg"),
              (e.force3D = 0),
              nq(t, e);
          },
          nW = "0deg",
          nq = function (t, e) {
            var r = e || this,
              n = r.xPercent,
              i = r.yPercent,
              s = r.x,
              o = r.y,
              a = r.z,
              u = r.rotation,
              l = r.rotationY,
              c = r.rotationX,
              h = r.skewX,
              f = r.skewY,
              d = r.scaleX,
              p = r.scaleY,
              m = r.transformPerspective,
              g = r.force3D,
              _ = r.target,
              v = r.zOrigin,
              y = "",
              w = ("auto" === g && t && 1 !== t) || !0 === g;
            if (v && (c !== nW || l !== nW)) {
              var b,
                x = parseFloat(l) * r0,
                T = Math.sin(x),
                E = Math.cos(x);
              (s = nY(
                _,
                s,
                -(T * (b = Math.cos((x = parseFloat(c) * r0))) * v)
              )),
                (o = nY(_, o, -(-Math.sin(x) * v))),
                (a = nY(_, a, -(E * b * v) + v));
            }
            "0px" !== m && (y += "perspective(" + m + ") "),
              (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
              (w || "0px" !== s || "0px" !== o || "0px" !== a) &&
                (y +=
                  "0px" !== a || w
                    ? "translate3d(" + s + ", " + o + ", " + a + ") "
                    : "translate(" + s + ", " + o + ") "),
              u !== nW && (y += "rotate(" + u + ") "),
              l !== nW && (y += "rotateY(" + l + ") "),
              c !== nW && (y += "rotateX(" + c + ") "),
              (h !== nW || f !== nW) && (y += "skew(" + h + ", " + f + ") "),
              (1 !== d || 1 !== p) && (y += "scale(" + d + ", " + p + ") "),
              (_.style[nu] = y || "translate(0, 0)");
          },
          nU = function (t, e) {
            var r,
              n,
              i,
              s,
              o,
              a = e || this,
              u = a.xPercent,
              l = a.yPercent,
              c = a.x,
              h = a.y,
              f = a.rotation,
              d = a.skewX,
              p = a.skewY,
              m = a.scaleX,
              g = a.scaleY,
              _ = a.target,
              v = a.xOrigin,
              y = a.yOrigin,
              w = a.xOffset,
              b = a.yOffset,
              x = a.forceCSS,
              T = parseFloat(c),
              E = parseFloat(h);
            (f = parseFloat(f)),
              (d = parseFloat(d)),
              (p = parseFloat(p)) && ((d += p = parseFloat(p)), (f += p)),
              f || d
                ? ((f *= r0),
                  (d *= r0),
                  (r = Math.cos(f) * m),
                  (n = Math.sin(f) * m),
                  (i = -(Math.sin(f - d) * g)),
                  (s = Math.cos(f - d) * g),
                  d &&
                    ((p *= r0),
                    (i *= o = Math.sqrt(1 + (o = Math.tan(d - p)) * o)),
                    (s *= o),
                    p &&
                      ((r *= o = Math.sqrt(1 + (o = Math.tan(p)) * o)),
                      (n *= o))),
                  (r = tk(r)),
                  (n = tk(n)),
                  (i = tk(i)),
                  (s = tk(s)))
                : ((r = m), (s = g), (n = i = 0)),
              ((T && !~(c + "").indexOf("px")) ||
                (E && !~(h + "").indexOf("px"))) &&
                ((T = nS(_, "x", c, "px")), (E = nS(_, "y", h, "px"))),
              (v || y || w || b) &&
                ((T = tk(T + v - (v * r + y * i) + w)),
                (E = tk(E + y - (v * n + y * s) + b))),
              (u || l) &&
                ((T = tk(T + (u / 100) * (o = _.getBBox()).width)),
                (E = tk(E + (l / 100) * o.height))),
              (o =
                "matrix(" +
                r +
                "," +
                n +
                "," +
                i +
                "," +
                s +
                "," +
                T +
                "," +
                E +
                ")"),
              _.setAttribute("transform", o),
              x && (_.style[nu] = o);
          },
          nX = function (t, e, r, n, i) {
            var s,
              o,
              a = B(i),
              u = parseFloat(i) * (a && ~i.indexOf("rad") ? rK : 1) - n,
              l = n + u + "deg";
            return (
              a &&
                ("short" === (s = i.split("_")[1]) &&
                  (u %= 360) != u % 180 &&
                  (u += u < 0 ? 360 : -360),
                "cw" === s && u < 0
                  ? (u = ((u + 36e9) % 360) - 360 * ~~(u / 360))
                  : "ccw" === s &&
                    u > 0 &&
                    (u = ((u - 36e9) % 360) - 360 * ~~(u / 360))),
              (t._pt = o = new rf(t._pt, e, r, n, u, r6)),
              (o.e = l),
              (o.u = "deg"),
              t._props.push(r),
              o
            );
          },
          nG = function (t, e) {
            for (var r in e) t[r] = e[r];
            return t;
          },
          nZ = function (t, e, r) {
            var n,
              i,
              s,
              o,
              a,
              u,
              l,
              c = nG({}, r._gsap),
              h = r.style;
            for (i in (c.svg
              ? ((s = r.getAttribute("transform")),
                r.setAttribute("transform", ""),
                (h[nu] = e),
                (n = nB(r, 1)),
                nT(r, nu),
                r.setAttribute("transform", s))
              : ((s = getComputedStyle(r)[nu]),
                (h[nu] = e),
                (n = nB(r, 1)),
                (h[nu] = s)),
            rJ))
              (s = c[i]) !== (o = n[i]) &&
                0 >
                  "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) &&
                ((a = ee(s) !== (l = ee(o)) ? nS(r, i, s, l) : parseFloat(s)),
                (u = parseFloat(o)),
                (t._pt = new rf(t._pt, n, i, a, u - a, r4)),
                (t._pt.u = l || 0),
                t._props.push(i));
            nG(n, c);
          };
        tE("padding,margin,Width,Radius", function (t, e) {
          var r = "Right",
            n = "Bottom",
            i = "Left",
            s = (
              e < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]
            ).map(function (r) {
              return e < 2 ? t + r : "border" + r + t;
            });
          nj[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
            var o, a;
            if (arguments.length < 4)
              return 5 ===
                (a = (o = s.map(function (e) {
                  return nO(t, e, r);
                })).join(" ")).split(o[0]).length
                ? o[0]
                : a;
            (o = (n + "").split(" ")),
              (a = {}),
              s.forEach(function (t, e) {
                return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
              }),
              t.init(e, a, i);
          };
        });
        var n$ = {
          name: "css",
          register: nv,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, r, n, i) {
            var s,
              o,
              a,
              u,
              l,
              c,
              h,
              f,
              d,
              p,
              m,
              g,
              _,
              v,
              y,
              w,
              b = this._props,
              x = t.style,
              T = r.vars.startAt;
            for (h in (rM || nv(),
            (this.styles = this.styles || nd(t)),
            (w = this.styles.props),
            (this.tween = r),
            e))
              if (
                "autoRound" !== h &&
                ((o = e[h]), !(tg[h] && e0(h, e, r, n, t, i)))
              ) {
                if (
                  ((l = typeof o),
                  (c = nj[h]),
                  "function" === l && (l = typeof (o = o.call(r, n, t, i))),
                  "string" === l && ~o.indexOf("random(") && (o = ef(o)),
                  c)
                )
                  c(this, t, h, o, r) && (y = 1);
                else if ("--" === h.substr(0, 2))
                  (s = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
                    (o += ""),
                    (eE.lastIndex = 0),
                    eE.test(s) || ((f = ee(s)), (d = ee(o))),
                    d ? f !== d && (s = nS(t, h, s, d) + d) : f && (o += f),
                    this.add(x, "setProperty", s, o, n, i, 0, 0, h),
                    b.push(h),
                    w.push(h, 0, x[h]);
                else if ("undefined" !== l) {
                  if (
                    (T && h in T
                      ? (B(
                          (s =
                            "function" == typeof T[h]
                              ? T[h].call(r, n, t, i)
                              : T[h])
                        ) &&
                          ~s.indexOf("random(") &&
                          (s = ef(s)),
                        ee(s + "") || (s += A.units[h] || ee(nO(t, h)) || ""),
                        "=" === (s + "").charAt(1) && (s = nO(t, h)))
                      : (s = nO(t, h)),
                    (u = parseFloat(s)),
                    (p =
                      "string" === l &&
                      "=" === o.charAt(1) &&
                      o.substr(0, 2)) && (o = o.substr(2)),
                    (a = parseFloat(o)),
                    h in r8 &&
                      ("autoAlpha" === h &&
                        (1 === u &&
                          "hidden" === nO(t, "visibility") &&
                          a &&
                          (u = 0),
                        w.push("visibility", 0, x.visibility),
                        nE(
                          this,
                          x,
                          "visibility",
                          u ? "inherit" : "hidden",
                          a ? "inherit" : "hidden",
                          !a
                        )),
                      "scale" !== h &&
                        "transform" !== h &&
                        ~(h = r8[h]).indexOf(",") &&
                        (h = h.split(",")[0])),
                    (m = h in rJ))
                  ) {
                    if (
                      (this.styles.save(h),
                      g ||
                        (((_ = t._gsap).renderTransform && !e.parseTransform) ||
                          nB(t, e.parseTransform),
                        (v = !1 !== e.smoothOrigin && _.smooth),
                        ((g = this._pt =
                          new rf(
                            this._pt,
                            x,
                            nu,
                            0,
                            1,
                            _.renderTransform,
                            _,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === h)
                    )
                      (this._pt = new rf(
                        this._pt,
                        _,
                        "scaleY",
                        _.scaleY,
                        (p ? tS(_.scaleY, p + a) : a) - _.scaleY || 0,
                        r4
                      )),
                        (this._pt.u = 0),
                        b.push("scaleY", h),
                        (h += "X");
                    else if ("transformOrigin" === h) {
                      w.push(nl, 0, x[nl]),
                        (o = nP(o)),
                        _.svg
                          ? nF(t, o, 0, v, 0, this)
                          : ((d = parseFloat(o.split(" ")[2]) || 0) !==
                              _.zOrigin && nE(this, _, "zOrigin", _.zOrigin, d),
                            nE(this, x, h, nV(s), nV(o)));
                      continue;
                    } else if ("svgOrigin" === h) {
                      nF(t, o, 1, v, 0, this);
                      continue;
                    } else if (h in nD) {
                      nX(this, _, h, u, p ? tS(u, p + o) : o);
                      continue;
                    } else if ("smoothOrigin" === h) {
                      nE(this, _, "smooth", _.smooth, o);
                      continue;
                    } else if ("force3D" === h) {
                      _[h] = o;
                      continue;
                    } else if ("transform" === h) {
                      nZ(this, o, t);
                      continue;
                    }
                  } else h in x || (h = n_(h) || h);
                  if (
                    m ||
                    ((a || 0 === a) && (u || 0 === u) && !r3.test(o) && h in x)
                  )
                    (f = (s + "").substr((u + "").length)),
                      a || (a = 0),
                      (d = ee(o) || (h in A.units ? A.units[h] : f)),
                      f !== d && (u = nS(t, h, s, d)),
                      (this._pt = new rf(
                        this._pt,
                        m ? _ : x,
                        h,
                        u,
                        (p ? tS(u, p + a) : a) - u,
                        m ||
                        ("px" !== d && "zIndex" !== h) ||
                        !1 === e.autoRound
                          ? r4
                          : r7
                      )),
                      (this._pt.u = d || 0),
                      f !== d &&
                        "%" !== d &&
                        ((this._pt.b = s), (this._pt.r = r9));
                  else if (h in x) nM.call(this, t, h, s, p ? p + o : o);
                  else if (h in t)
                    this.add(t, h, s || t[h], p ? p + o : o, n, i);
                  else if ("parseTransform" !== h) {
                    to(h, o);
                    continue;
                  }
                  m || (h in x ? w.push(h, 0, x[h]) : w.push(h, 1, s || t[h])),
                    b.push(h);
                }
              }
            y && rh(this);
          },
          render: function (t, e) {
            if (e.tween._time || !rA())
              for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
            else e.styles.revert();
          },
          get: nO,
          aliases: r8,
          getSetter: function (t, e, r) {
            var n = r8[e];
            return (
              n && 0 > n.indexOf(",") && (e = n),
              e in rJ && e !== nl && (t._gsap.x || nO(t, "x"))
                ? r && rP === r
                  ? "scale" === e
                    ? ns
                    : ni
                  : ((rP = r || {}), "scale" === e ? no : na)
                : t.style && !H(t.style[e])
                ? nr
                : ~e.indexOf("-")
                ? nn
                : rn(t, e)
            );
          },
          core: { _removeProperty: nT, _getMatrix: nI },
        };
        (rC.utils.checkPrefix = n_),
          (rC.core.getStyleSaver = nd),
          (s = tE(
            (n = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
              "," +
              (i = "rotation,rotationX,rotationY,skewX,skewY") +
              ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
            function (t) {
              rJ[t] = 1;
            }
          )),
          tE(i, function (t) {
            (A.units[t] = "deg"), (nD[t] = 1);
          }),
          (r8[s[13]] = n + "," + i),
          tE(
            "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
            function (t) {
              var e = t.split(":");
              r8[e[1]] = s[e[0]];
            }
          ),
          tE(
            "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
            function (t) {
              A.units[t] = "px";
            }
          ),
          rC.registerPlugin(n$);
        var nQ = rC.registerPlugin(n$) || rC,
          nJ = nQ.core.Tween;
        (t.Back = rU),
          (t.Bounce = rG),
          (t.CSSPlugin = n$),
          (t.Circ = rQ),
          (t.Cubic = rV),
          (t.Elastic = rq),
          (t.Expo = r$),
          (t.Linear = rF),
          (t.Power0 = rL),
          (t.Power1 = rD),
          (t.Power2 = rz),
          (t.Power3 = rN),
          (t.Power4 = rI),
          (t.Quad = rB),
          (t.Quart = rY),
          (t.Quint = rH),
          (t.Sine = rZ),
          (t.SteppedEase = rX),
          (t.Strong = rW),
          (t.TimelineLite = eW),
          (t.TimelineMax = eW),
          (t.TweenLite = e9),
          (t.TweenMax = nJ),
          (t.default = nQ),
          (t.gsap = nQ),
          "undefined" == typeof window || window !== t
            ? Object.defineProperty(t, "__esModule", { value: !0 })
            : delete window.default;
      })(e);
    },
    6038: function (t, e, r) {
      "use strict";
      function n(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function i(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      r.d(e, {
        ZP: function () {
          return nD;
        },
        p8: function () {
          return nD;
        },
      });
      /*!
       * GSAP 3.12.2
       * https://greensock.com
       *
       * @license Copyright 2008-2023, GreenSock. All rights reserved.
       * Subject to the terms at https://greensock.com/standard-license or for
       * Club GreenSock members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ var s,
        o,
        a,
        u,
        l,
        c,
        h,
        f,
        d,
        p,
        m,
        g,
        _,
        v,
        y,
        w,
        b,
        x,
        T,
        E,
        k,
        C,
        S,
        O,
        M,
        R,
        P,
        A,
        j,
        L = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        D = { duration: 0.5, overwrite: !1, delay: 0 },
        z = 2 * Math.PI,
        N = z / 4,
        I = 0,
        F = Math.sqrt,
        B = Math.cos,
        V = Math.sin,
        Y = function (t) {
          return "string" == typeof t;
        },
        H = function (t) {
          return "function" == typeof t;
        },
        W = function (t) {
          return "number" == typeof t;
        },
        q = function (t) {
          return void 0 === t;
        },
        U = function (t) {
          return "object" == typeof t;
        },
        X = function (t) {
          return !1 !== t;
        },
        G = function () {
          return "undefined" != typeof window;
        },
        Z = function (t) {
          return H(t) || Y(t);
        },
        $ =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        Q = Array.isArray,
        J = /(?:-?\.?\d|\.)+/gi,
        K = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        te = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        tr = /[+-]=-?[.\d]+/,
        tn = /[^,'"\[\]\s]+/gi,
        ti = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        ts = {},
        to = {},
        ta = function (t) {
          return (to = tz(t, ts)) && rO;
        },
        tu = function (t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        tl = function (t, e) {
          return !e && console.warn(t);
        },
        tc = function (t, e) {
          return (t && (ts[t] = e) && to && (to[t] = e)) || ts;
        },
        th = function () {
          return 0;
        },
        tf = { suppressEvents: !0, isStart: !0, kill: !1 },
        td = { suppressEvents: !0, kill: !1 },
        tp = { suppressEvents: !0 },
        tm = {},
        tg = [],
        t_ = {},
        tv = {},
        ty = {},
        tw = 30,
        tb = [],
        tx = "",
        tT = function (t) {
          var e,
            r,
            n = t[0];
          if ((U(n) || H(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
            for (r = tb.length; r-- && !tb[r].targetTest(n); );
            e = tb[r];
          }
          for (r = t.length; r--; )
            (t[r] && (t[r]._gsap || (t[r]._gsap = new eW(t[r], e)))) ||
              t.splice(r, 1);
          return t;
        },
        tE = function (t) {
          return t._gsap || tT(eo(t))[0]._gsap;
        },
        tk = function (t, e, r) {
          return (r = t[e]) && H(r)
            ? t[e]()
            : (q(r) && t.getAttribute && t.getAttribute(e)) || r;
        },
        tC = function (t, e) {
          return (t = t.split(",")).forEach(e) || t;
        },
        tS = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        tO = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0;
        },
        tM = function (t, e) {
          var r = e.charAt(0),
            n = parseFloat(e.substr(2));
          return (
            (t = parseFloat(t)),
            "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
          );
        },
        tR = function (t, e) {
          for (var r = e.length, n = 0; 0 > t.indexOf(e[n]) && ++n < r; );
          return n < r;
        },
        tP = function () {
          var t,
            e,
            r = tg.length,
            n = tg.slice(0);
          for (t = 0, t_ = {}, tg.length = 0; t < r; t++)
            (e = n[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        tA = function (t, e, r, n) {
          tg.length && !E && tP(),
            t.render(e, r, n || (E && e < 0 && (t._initted || t._startAt))),
            tg.length && !E && tP();
        },
        tj = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(tn).length < 2
            ? e
            : Y(t)
            ? t.trim()
            : t;
        },
        tL = function (t) {
          return t;
        },
        tD = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t;
        },
        tz = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        tN = function t(e, r) {
          for (var n in r)
            "__proto__" !== n &&
              "constructor" !== n &&
              "prototype" !== n &&
              (e[n] = U(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
          return e;
        },
        tI = function (t, e) {
          var r,
            n = {};
          for (r in t) r in e || (n[r] = t[r]);
          return n;
        },
        tF = function (t) {
          var e,
            r = t.parent || C,
            n = t.keyframes
              ? ((e = Q(t.keyframes)),
                function (t, r) {
                  for (var n in r)
                    n in t ||
                      ("duration" === n && e) ||
                      "ease" === n ||
                      (t[n] = r[n]);
                })
              : tD;
          if (X(t.inherit))
            for (; r; ) n(t, r.vars.defaults), (r = r.parent || r._dp);
          return t;
        },
        tB = function (t, e) {
          for (
            var r = t.length, n = r === e.length;
            n && r-- && t[r] === e[r];

          );
          return r < 0;
        },
        tV = function (t, e, r, n, i) {
          void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
          var s,
            o = t[n];
          if (i) for (s = e[i]; o && o[i] > s; ) o = o._prev;
          return (
            o
              ? ((e._next = o._next), (o._next = e))
              : ((e._next = t[r]), (t[r] = e)),
            e._next ? (e._next._prev = e) : (t[n] = e),
            (e._prev = o),
            (e.parent = e._dp = t),
            e
          );
        },
        tY = function (t, e, r, n) {
          void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
          var i = e._prev,
            s = e._next;
          i ? (i._next = s) : t[r] === e && (t[r] = s),
            s ? (s._prev = i) : t[n] === e && (t[n] = i),
            (e._next = e._prev = e.parent = null);
        },
        tH = function (t, e) {
          t.parent &&
            (!e || t.parent.autoRemoveChildren) &&
            t.parent.remove &&
            t.parent.remove(t),
            (t._act = 0);
        },
        tW = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
          return t;
        },
        tq = function (t) {
          for (var e = t.parent; e && e.parent; )
            (e._dirty = 1), e.totalDuration(), (e = e.parent);
          return t;
        },
        tU = function (t, e, r, n) {
          return (
            t._startAt &&
            (E
              ? t._startAt.revert(td)
              : (t.vars.immediateRender && !t.vars.autoRevert) ||
                t._startAt.render(e, !0, n))
          );
        },
        tX = function (t) {
          return t._repeat
            ? tG(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        tG = function (t, e) {
          var r = Math.floor((t /= e));
          return t && r === t ? r - 1 : r;
        },
        tZ = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        t$ = function (t) {
          return (t._end = tO(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
          ));
        },
        tQ = function (t, e) {
          var r = t._dp;
          return (
            r &&
              r.smoothChildTiming &&
              t._ts &&
              ((t._start = tO(
                r._time -
                  (t._ts > 0
                    ? e / t._ts
                    : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts))
              )),
              t$(t),
              r._dirty || tW(r, t)),
            t
          );
        },
        tJ = function (t, e) {
          var r;
          if (
            ((e._time ||
              (!e._dur && e._initted) ||
              (e._start < t._time && (e._dur || !e.add))) &&
              ((r = tZ(t.rawTime(), e)),
              (!e._dur || er(0, e.totalDuration(), r) - e._tTime > 1e-8) &&
                e.render(r, !0)),
            tW(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (r = t; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
            t._zTime = -0.00000001;
          }
        },
        tK = function (t, e, r, n) {
          return (
            e.parent && tH(e),
            (e._start = tO(
              (W(r) ? r : r || t !== C ? t7(t, r, e) : t._time) + e._delay
            )),
            (e._end = tO(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            tV(t, e, "_first", "_last", t._sort ? "_start" : 0),
            t5(e) || (t._recent = e),
            n || tJ(t, e),
            t._ts < 0 && tQ(t, t._tTime),
            t
          );
        },
        t0 = function (t, e) {
          return (
            (ts.ScrollTrigger || tu("scrollTrigger", e)) &&
            ts.ScrollTrigger.create(e, t)
          );
        },
        t1 = function (t, e, r, n, i) {
          return (e5(t, e, i), t._initted)
            ? !r &&
              t._pt &&
              !E &&
              ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
              P !== eM.frame
              ? (tg.push(t), (t._lazy = [i, n]), 1)
              : void 0
            : 1;
        },
        t2 = function t(e) {
          var r = e.parent;
          return (
            r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || t(r))
          );
        },
        t5 = function (t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e;
        },
        t3 = function (t, e, r, n) {
          var i,
            s,
            o,
            a = t.ratio,
            u =
              e < 0 ||
              (!e &&
                ((!t._start && t2(t) && !(!t._initted && t5(t))) ||
                  ((t._ts < 0 || t._dp._ts < 0) && !t5(t))))
                ? 0
                : 1,
            l = t._rDelay,
            c = 0;
          if (
            (l &&
              t._repeat &&
              ((s = tG((c = er(0, t._tDur, e)), l)),
              t._yoyo && 1 & s && (u = 1 - u),
              s !== tG(t._tTime, l) &&
                ((a = 1 - u),
                t.vars.repeatRefresh && t._initted && t.invalidate())),
            u !== a || E || n || 1e-8 === t._zTime || (!e && t._zTime))
          ) {
            if (!t._initted && t1(t, e, n, r, c)) return;
            for (
              o = t._zTime,
                t._zTime = e || (r ? 1e-8 : 0),
                r || (r = e && !o),
                t.ratio = u,
                t._from && (u = 1 - u),
                t._time = 0,
                t._tTime = c,
                i = t._pt;
              i;

            )
              i.r(u, i.d), (i = i._next);
            e < 0 && tU(t, e, r, !0),
              t._onUpdate && !r && e_(t, "onUpdate"),
              c && t._repeat && !r && t.parent && e_(t, "onRepeat"),
              (e >= t._tDur || e < 0) &&
                t.ratio === u &&
                (u && tH(t, 1),
                r ||
                  E ||
                  (e_(t, u ? "onComplete" : "onReverseComplete", !0),
                  t._prom && t._prom()));
          } else t._zTime || (t._zTime = e);
        },
        t8 = function (t, e, r) {
          var n;
          if (r > e)
            for (n = t._first; n && n._start <= r; ) {
              if ("isPause" === n.data && n._start > e) return n;
              n = n._next;
            }
          else
            for (n = t._last; n && n._start >= r; ) {
              if ("isPause" === n.data && n._start < e) return n;
              n = n._prev;
            }
        },
        t4 = function (t, e, r, n) {
          var i = t._repeat,
            s = tO(e) || 0,
            o = t._tTime / t._tDur;
          return (
            o && !n && (t._time *= s / t._dur),
            (t._dur = s),
            (t._tDur = i
              ? i < 0
                ? 1e10
                : tO(s * (i + 1) + t._rDelay * i)
              : s),
            o > 0 && !n && tQ(t, (t._tTime = t._tDur * o)),
            t.parent && t$(t),
            r || tW(t.parent, t),
            t
          );
        },
        t6 = function (t) {
          return t instanceof eU ? tW(t) : t4(t, t._dur);
        },
        t9 = { _start: 0, endTime: th, totalDuration: th },
        t7 = function t(e, r, n) {
          var i,
            s,
            o,
            a = e.labels,
            u = e._recent || t9,
            l = e.duration() >= 1e8 ? u.endTime(!1) : e._dur;
          return Y(r) && (isNaN(r) || r in a)
            ? ((s = r.charAt(0)),
              (o = "%" === r.substr(-1)),
              (i = r.indexOf("=")),
              "<" === s || ">" === s)
              ? (i >= 0 && (r = r.replace(/=/, "")),
                ("<" === s ? u._start : u.endTime(u._repeat >= 0)) +
                  (parseFloat(r.substr(1)) || 0) *
                    (o ? (i < 0 ? u : n).totalDuration() / 100 : 1))
              : i < 0
              ? (r in a || (a[r] = l), a[r])
              : ((s = parseFloat(r.charAt(i - 1) + r.substr(i + 1))),
                o && n && (s = (s / 100) * (Q(n) ? n[0] : n).totalDuration()),
                i > 1 ? t(e, r.substr(0, i - 1), n) + s : l + s)
            : null == r
            ? l
            : +r;
        },
        et = function (t, e, r) {
          var n,
            i,
            s = W(e[1]),
            o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            a = e[o];
          if ((s && (a.duration = e[1]), (a.parent = r), t)) {
            for (n = a, i = r; i && !("immediateRender" in n); )
              (n = i.vars.defaults || {}), (i = X(i.vars.inherit) && i.parent);
            (a.immediateRender = X(n.immediateRender)),
              t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]);
          }
          return new rt(e[0], a, e[o + 1]);
        },
        ee = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        er = function (t, e, r) {
          return r < t ? t : r > e ? e : r;
        },
        en = function (t, e) {
          return Y(t) && (e = ti.exec(t)) ? e[1] : "";
        },
        ei = [].slice,
        es = function (t, e) {
          return (
            t &&
            U(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && U(t[0]))) &&
            !t.nodeType &&
            t !== S
          );
        },
        eo = function (t, e, r) {
          var n;
          return k && !e && k.selector
            ? k.selector(t)
            : Y(t) && !r && (O || !eR())
            ? ei.call((e || M).querySelectorAll(t), 0)
            : Q(t)
            ? (void 0 === n && (n = []),
              t.forEach(function (t) {
                var e;
                return (Y(t) && !r) || es(t, 1)
                  ? (e = n).push.apply(e, eo(t))
                  : n.push(t);
              }) || n)
            : es(t)
            ? ei.call(t, 0)
            : t
            ? [t]
            : [];
        },
        ea = function (t) {
          return (
            (t = eo(t)[0] || tl("Invalid scope") || {}),
            function (e) {
              var r = t.current || t.nativeElement || t;
              return eo(
                e,
                r.querySelectorAll
                  ? r
                  : r === t
                  ? tl("Invalid scope") || M.createElement("div")
                  : t
              );
            }
          );
        },
        eu = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        el = function (t) {
          if (H(t)) return t;
          var e = U(t) ? t : { each: t },
            r = eF(e.ease),
            n = e.from || 0,
            i = parseFloat(e.base) || 0,
            s = {},
            o = n > 0 && n < 1,
            a = isNaN(n) || o,
            u = e.axis,
            l = n,
            c = n;
          return (
            Y(n)
              ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
              : !o && a && ((l = n[0]), (c = n[1])),
            function (t, o, h) {
              var f,
                d,
                p,
                m,
                g,
                _,
                v,
                y,
                w,
                b = (h || e).length,
                x = s[b];
              if (!x) {
                if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                  for (
                    v = -1e8;
                    v < (v = h[w++].getBoundingClientRect().left) && w < b;

                  );
                  w--;
                }
                for (
                  _ = 0,
                    x = s[b] = [],
                    f = a ? Math.min(w, b) * l - 0.5 : n % w,
                    d = 1e8 === w ? 0 : a ? (b * c) / w - 0.5 : (n / w) | 0,
                    v = 0,
                    y = 1e8;
                  _ < b;
                  _++
                )
                  (p = (_ % w) - f),
                    (m = d - ((_ / w) | 0)),
                    (x[_] = g =
                      u ? Math.abs("y" === u ? m : p) : F(p * p + m * m)),
                    g > v && (v = g),
                    g < y && (y = g);
                "random" === n && eu(x),
                  (x.max = v - y),
                  (x.min = y),
                  (x.v = b =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (w > b
                          ? b - 1
                          : u
                          ? "y" === u
                            ? b / w
                            : w
                          : Math.max(w, b / w)) ||
                      0) * ("edges" === n ? -1 : 1)),
                  (x.b = b < 0 ? i - b : i),
                  (x.u = en(e.amount || e.each) || 0),
                  (r = r && b < 0 ? eN(r) : r);
              }
              return (
                (b = (x[t] - x.min) / x.max || 0),
                tO(x.b + (r ? r(b) : b) * x.v) + x.u
              );
            }
          );
        },
        ec = function (t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function (r) {
            var n = tO(Math.round(parseFloat(r) / t) * t * e);
            return (n - (n % 1)) / e + (W(r) ? 0 : en(r));
          };
        },
        eh = function (t, e) {
          var r,
            n,
            i = Q(t);
          return (
            !i &&
              U(t) &&
              ((r = i = t.radius || 1e8),
              t.values
                ? (n = !W((t = eo(t.values))[0])) && (r *= r)
                : (t = ec(t.increment))),
            ee(
              e,
              i
                ? H(t)
                  ? function (e) {
                      return Math.abs((n = t(e)) - e) <= r ? n : e;
                    }
                  : function (e) {
                      for (
                        var i,
                          s,
                          o = parseFloat(n ? e.x : e),
                          a = parseFloat(n ? e.y : 0),
                          u = 1e8,
                          l = 0,
                          c = t.length;
                        c--;

                      )
                        (i = n
                          ? (i = t[c].x - o) * i + (s = t[c].y - a) * s
                          : Math.abs(t[c] - o)) < u && ((u = i), (l = c));
                      return (
                        (l = !r || u <= r ? t[l] : e),
                        n || l === e || W(e) ? l : l + en(e)
                      );
                    }
                : ec(t)
            )
          );
        },
        ef = function (t, e, r, n) {
          return ee(Q(t) ? !e : !0 === r ? ((r = 0), !1) : !n, function () {
            return Q(t)
              ? t[~~(Math.random() * t.length)]
              : (n =
                  (r = r || 1e-5) < 1
                    ? Math.pow(10, (r + "").length - 2)
                    : 1) &&
                  Math.floor(
                    Math.round(
                      (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                    ) *
                      r *
                      n
                  ) / n;
          });
        },
        ed = function (t, e, r) {
          return ee(r, function (r) {
            return t[~~e(r)];
          });
        },
        ep = function (t) {
          for (var e, r, n, i, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
            (n = t.indexOf(")", e)),
              (i = "[" === t.charAt(e + 7)),
              (r = t.substr(e + 7, n - e - 7).match(i ? tn : J)),
              (o +=
                t.substr(s, e - s) +
                ef(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
              (s = n + 1);
          return o + t.substr(s, t.length - s);
        },
        em = function (t, e, r, n, i) {
          var s = e - t,
            o = n - r;
          return ee(i, function (e) {
            return r + (((e - t) / s) * o || 0);
          });
        },
        eg = function (t, e, r) {
          var n,
            i,
            s,
            o = t.labels,
            a = 1e8;
          for (n in o)
            (i = o[n] - e) < 0 == !!r &&
              i &&
              a > (i = Math.abs(i)) &&
              ((s = n), (a = i));
          return s;
        },
        e_ = function (t, e, r) {
          var n,
            i,
            s,
            o = t.vars,
            a = o[e],
            u = k,
            l = t._ctx;
          if (a)
            return (
              (n = o[e + "Params"]),
              (i = o.callbackScope || t),
              r && tg.length && tP(),
              l && (k = l),
              (s = n ? a.apply(i, n) : a.call(i)),
              (k = u),
              s
            );
        },
        ev = function (t) {
          return (
            tH(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!E),
            1 > t.progress() && e_(t, "onInterrupt"),
            t
          );
        },
        ey = [],
        ew = function (t) {
          if (G() && t) {
            var e = (t = (!t.name && t.default) || t).name,
              r = H(t),
              n =
                e && !r && t.init
                  ? function () {
                      this._props = [];
                    }
                  : t,
              i = {
                init: th,
                render: rl,
                add: e0,
                kill: rh,
                modifier: rc,
                rawVars: 0,
              },
              s = {
                targetTest: 0,
                get: 0,
                getSetter: rs,
                aliases: {},
                register: 0,
              };
            if ((eR(), t !== n)) {
              if (tv[e]) return;
              tD(n, tD(tI(t, i), s)),
                tz(n.prototype, tz(i, tI(t, s))),
                (tv[(n.prop = e)] = n),
                t.targetTest && (tb.push(n), (tm[e] = 1)),
                (e =
                  ("css" === e
                    ? "CSS"
                    : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
            }
            tc(e, n), t.register && t.register(rO, n, rp);
          } else t && ey.push(t);
        },
        eb = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0],
        },
        ex = function (t, e, r) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (r - e) * t * 6
              : t < 0.5
              ? r
              : 3 * t < 2
              ? e + (r - e) * (2 / 3 - t) * 6
              : e) *
              255 +
              0.5) |
            0
          );
        },
        eT = function (t, e, r) {
          var n,
            i,
            s,
            o,
            a,
            u,
            l,
            c,
            h,
            f,
            d = t ? (W(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : eb.black;
          if (!d) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), eb[t])
            )
              d = eb[t];
            else if ("#" === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  (t =
                    "#" +
                    (n = t.charAt(1)) +
                    n +
                    (i = t.charAt(2)) +
                    i +
                    (s = t.charAt(3)) +
                    s +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                9 === t.length)
              )
                return [
                  (d = parseInt(t.substr(1, 6), 16)) >> 16,
                  (d >> 8) & 255,
                  255 & d,
                  parseInt(t.substr(7), 16) / 255,
                ];
              d = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & 255,
                255 & t,
              ];
            } else if ("hsl" === t.substr(0, 3)) {
              if (((d = f = t.match(J)), e)) {
                if (~t.indexOf("="))
                  return (d = t.match(K)), r && d.length < 4 && (d[3] = 1), d;
              } else
                (o = (+d[0] % 360) / 360),
                  (a = +d[1] / 100),
                  (i = (u = +d[2] / 100) <= 0.5 ? u * (a + 1) : u + a - u * a),
                  (n = 2 * u - i),
                  d.length > 3 && (d[3] *= 1),
                  (d[0] = ex(o + 1 / 3, n, i)),
                  (d[1] = ex(o, n, i)),
                  (d[2] = ex(o - 1 / 3, n, i));
            } else d = t.match(J) || eb.transparent;
            d = d.map(Number);
          }
          return (
            e &&
              !f &&
              ((n = d[0] / 255),
              (i = d[1] / 255),
              (s = d[2] / 255),
              (u = ((l = Math.max(n, i, s)) + (c = Math.min(n, i, s))) / 2),
              l === c
                ? (o = a = 0)
                : ((h = l - c),
                  (a = u > 0.5 ? h / (2 - l - c) : h / (l + c)),
                  (o =
                    (l === n
                      ? (i - s) / h + (i < s ? 6 : 0)
                      : l === i
                      ? (s - n) / h + 2
                      : (n - i) / h + 4) * 60)),
              (d[0] = ~~(o + 0.5)),
              (d[1] = ~~(100 * a + 0.5)),
              (d[2] = ~~(100 * u + 0.5))),
            r && d.length < 4 && (d[3] = 1),
            d
          );
        },
        eE = function (t) {
          var e = [],
            r = [],
            n = -1;
          return (
            t.split(eC).forEach(function (t) {
              var i = t.match(tt) || [];
              e.push.apply(e, i), r.push((n += i.length + 1));
            }),
            (e.c = r),
            e
          );
        },
        ek = function (t, e, r) {
          var n,
            i,
            s,
            o,
            a = "",
            u = (t + a).match(eC),
            l = e ? "hsla(" : "rgba(",
            c = 0;
          if (!u) return t;
          if (
            ((u = u.map(function (t) {
              return (
                (t = eT(t, e, 1)) &&
                l +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            r && ((s = eE(t)), (n = r.c).join(a) !== s.c.join(a)))
          )
            for (o = (i = t.replace(eC, "1").split(tt)).length - 1; c < o; c++)
              a +=
                i[c] +
                (~n.indexOf(c)
                  ? u.shift() || l + "0,0,0,0)"
                  : (s.length ? s : u.length ? u : r).shift());
          if (!i)
            for (o = (i = t.split(eC)).length - 1; c < o; c++) a += i[c] + u[c];
          return a + i[o];
        },
        eC = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in eb) e += "|" + t + "\\b";
          return RegExp(e + ")", "gi");
        })(),
        eS = /hsl[a]?\(/,
        eO = function (t) {
          var e,
            r = t.join(" ");
          if (((eC.lastIndex = 0), eC.test(r)))
            return (
              (e = eS.test(r)),
              (t[1] = ek(t[1], e)),
              (t[0] = ek(t[0], e, eE(t[1]))),
              !0
            );
        },
        eM =
          ((m = 500),
          (g = 33),
          (v = _ = (p = Date.now)()),
          (y = 1e3 / 240),
          (w = 1e3 / 240),
          (b = []),
          (x = function t(e) {
            var r,
              n,
              i,
              s,
              o = p() - v,
              a = !0 === e;
            if (
              (o > m && (_ += o - g),
              (v += o),
              ((r = (i = v - _) - w) > 0 || a) &&
                ((s = ++h.frame),
                (f = i - 1e3 * h.time),
                (h.time = i /= 1e3),
                (w += r + (r >= y ? 4 : y - r)),
                (n = 1)),
              a || (u = l(t)),
              n)
            )
              for (d = 0; d < b.length; d++) b[d](i, f, s, e);
          }),
          (h = {
            time: 0,
            frame: 0,
            tick: function () {
              x(!0);
            },
            deltaRatio: function (t) {
              return f / (1e3 / (t || 60));
            },
            wake: function () {
              R &&
                (!O &&
                  G() &&
                  ((M = (S = O = window).document || {}),
                  (ts.gsap = rO),
                  (S.gsapVersions || (S.gsapVersions = [])).push(rO.version),
                  ta(to || S.GreenSockGlobals || (!S.gsap && S) || {}),
                  (c = S.requestAnimationFrame),
                  ey.forEach(ew)),
                u && h.sleep(),
                (l =
                  c ||
                  function (t) {
                    return setTimeout(t, (w - 1e3 * h.time + 1) | 0);
                  }),
                (j = 1),
                x(2));
            },
            sleep: function () {
              (c ? S.cancelAnimationFrame : clearTimeout)(u), (j = 0), (l = th);
            },
            lagSmoothing: function (t, e) {
              g = Math.min(e || 33, (m = t || 1 / 0));
            },
            fps: function (t) {
              (y = 1e3 / (t || 240)), (w = 1e3 * h.time + y);
            },
            add: function (t, e, r) {
              var n = e
                ? function (e, r, i, s) {
                    t(e, r, i, s), h.remove(n);
                  }
                : t;
              return h.remove(t), b[r ? "unshift" : "push"](n), eR(), n;
            },
            remove: function (t, e) {
              ~(e = b.indexOf(t)) && b.splice(e, 1) && d >= e && d--;
            },
            _listeners: b,
          })),
        eR = function () {
          return !j && eM.wake();
        },
        eP = {},
        eA = /^[\d.\-M][\d.\-,\s]/,
        ej = /["']/g,
        eL = function (t) {
          for (
            var e,
              r,
              n,
              i = {},
              s = t.substr(1, t.length - 3).split(":"),
              o = s[0],
              a = 1,
              u = s.length;
            a < u;
            a++
          )
            (r = s[a]),
              (e = a !== u - 1 ? r.lastIndexOf(",") : r.length),
              (n = r.substr(0, e)),
              (i[o] = isNaN(n) ? n.replace(ej, "").trim() : +n),
              (o = r.substr(e + 1).trim());
          return i;
        },
        eD = function (t) {
          var e = t.indexOf("(") + 1,
            r = t.indexOf(")"),
            n = t.indexOf("(", e);
          return t.substring(e, ~n && n < r ? t.indexOf(")", r + 1) : r);
        },
        ez = function (t) {
          var e = (t + "").split("("),
            r = eP[e[0]];
          return r && e.length > 1 && r.config
            ? r.config.apply(
                null,
                ~t.indexOf("{") ? [eL(e[1])] : eD(t).split(",").map(tj)
              )
            : eP._CE && eA.test(t)
            ? eP._CE("", t)
            : r;
        },
        eN = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        eI = function t(e, r) {
          for (var n, i = e._first; i; )
            i instanceof eU
              ? t(i, r)
              : !i.vars.yoyoEase ||
                (i._yoyo && i._repeat) ||
                i._yoyo === r ||
                (i.timeline
                  ? t(i.timeline, r)
                  : ((n = i._ease),
                    (i._ease = i._yEase),
                    (i._yEase = n),
                    (i._yoyo = r))),
              (i = i._next);
        },
        eF = function (t, e) {
          return (t && (H(t) ? t : eP[t] || ez(t))) || e;
        },
        eB = function (t, e, r, n) {
          void 0 === r &&
            (r = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === n &&
              (n = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2;
              });
          var i,
            s = { easeIn: e, easeOut: r, easeInOut: n };
          return (
            tC(t, function (t) {
              for (var e in ((eP[t] = ts[t] = s),
              (eP[(i = t.toLowerCase())] = r),
              s))
                eP[
                  i +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                      ? ".out"
                      : ".inOut")
                ] = eP[t + "." + e] = s[e];
            }),
            s
          );
        },
        eV = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t((e - 0.5) * 2) / 2;
          };
        },
        eY = function t(e, r, n) {
          var i = r >= 1 ? r : 1,
            s = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
            o = (s / z) * (Math.asin(1 / i) || 0),
            a = function (t) {
              return 1 === t
                ? 1
                : i * Math.pow(2, -10 * t) * V((t - o) * s) + 1;
            },
            u =
              "out" === e
                ? a
                : "in" === e
                ? function (t) {
                    return 1 - a(1 - t);
                  }
                : eV(a);
          return (
            (s = z / s),
            (u.config = function (r, n) {
              return t(e, r, n);
            }),
            u
          );
        },
        eH = function t(e, r) {
          void 0 === r && (r = 1.70158);
          var n = function (t) {
              return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
            },
            i =
              "out" === e
                ? n
                : "in" === e
                ? function (t) {
                    return 1 - n(1 - t);
                  }
                : eV(n);
          return (
            (i.config = function (r) {
              return t(e, r);
            }),
            i
          );
        };
      tC("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var r = e < 5 ? e + 1 : e;
        eB(
          t + ",Power" + (r - 1),
          e
            ? function (t) {
                return Math.pow(t, r);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, r);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, r) / 2
              : 1 - Math.pow((1 - t) * 2, r) / 2;
          }
        );
      }),
        (eP.Linear.easeNone = eP.none = eP.Linear.easeIn),
        eB("Elastic", eY("in"), eY("out"), eY()),
        (eG = 2 * (eX = 1 / 2.75)),
        (eZ = 2.5 * eX),
        eB(
          "Bounce",
          function (t) {
            return 1 - e$(1 - t);
          },
          (e$ = function (t) {
            return t < eX
              ? 7.5625 * t * t
              : t < eG
              ? 7.5625 * Math.pow(t - 1.5 / 2.75, 2) + 0.75
              : t < eZ
              ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
              : 7.5625 * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
          })
        ),
        eB("Expo", function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        eB("Circ", function (t) {
          return -(F(1 - t * t) - 1);
        }),
        eB("Sine", function (t) {
          return 1 === t ? 1 : -B(t * N) + 1;
        }),
        eB("Back", eH("in"), eH("out"), eH()),
        (eP.SteppedEase =
          eP.steps =
          ts.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var r = 1 / t,
                  n = t + (e ? 0 : 1),
                  i = e ? 1 : 0;
                return function (t) {
                  return (((n * er(0, 0.99999999, t)) | 0) + i) * r;
                };
              },
            }),
        (D.ease = eP["quad.out"]),
        tC(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (tx += t + "," + t + "Params,");
          }
        );
      var eW = function (t, e) {
          (this.id = I++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : tk),
            (this.set = e ? e.getSetter : rs);
        },
        eq = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              t4(this, +t.duration, 1, 1),
              (this.data = t.data),
              k && ((this._ctx = k), k.data.push(this)),
              j || eM.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  t4(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((eR(), !arguments.length)) return this._tTime;
              var r = this._dp;
              if (r && r.smoothChildTiming && this._ts) {
                for (
                  tQ(this, t), !r._dp || r.parent || tJ(r, this);
                  r && r.parent;

                )
                  r.parent._time !==
                    r._start +
                      (r._ts >= 0
                        ? r._tTime / r._ts
                        : -((r.totalDuration() - r._tTime) / r._ts)) &&
                    r.totalTime(r._tTime, !0),
                    (r = r.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  tK(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime === t &&
                  (this._dur || e) &&
                  (!this._initted || 1e-8 !== Math.abs(this._zTime)) &&
                  (t || this._initted || (!this.add && !this._ptLookup))) ||
                  (this._ts || (this._pTime = t), tA(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + tX(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) +
                      tX(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (e.iteration = function (t, e) {
              var r = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * r, e)
                : this._repeat
                ? tG(this._tTime, r) + 1
                : 1;
            }),
            (e.timeScale = function (t) {
              if (!arguments.length)
                return -0.00000001 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var e =
                this.parent && this._ts
                  ? tZ(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -0.00000001 === t ? 0 : this._rts),
                this.totalTime(er(-Math.abs(this._delay), this._tDur, e), !0),
                t$(this),
                tq(this)
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (eR(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            1e-8 !== Math.abs(this._zTime) &&
                            (this._tTime -= 1e-8)
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    tK(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (X(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && 1 > this.totalProgress()))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? tZ(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.revert = function (t) {
              void 0 === t && (t = tp);
              var e = E;
              return (
                (E = t),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t),
                  this.totalTime(-0.01, t.suppressEvents)),
                "nested" !== this.data && !1 !== t.kill && this.kill(),
                (E = e),
                this
              );
            }),
            (e.globalTime = function (t) {
              for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                (r = e._start + r / (e._ts || 1)), (e = e._dp);
              return !this.parent && this._sat
                ? this._sat.vars.immediateRender
                  ? -1 / 0
                  : this._sat.globalTime(t)
                : r;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), t6(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), t6(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(t7(this, t), X(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, X(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -0.00000001 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0),
                (this._zTime = -0.00000001),
                this
              );
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                r = this._start;
              return !!(
                !e ||
                (this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= r &&
                  t < this.endTime(!0) - 1e-8)
              );
            }),
            (e.eventCallback = function (t, e, r) {
              var n = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((n[t] = e),
                      r && (n[t + "Params"] = r),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete n[t],
                  this)
                : n[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (r) {
                var n = H(t) ? t : tL,
                  i = function () {
                    var t = e.then;
                    (e.then = null),
                      H(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                      r(n),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? i()
                  : (e._prom = i);
              });
            }),
            (e.kill = function () {
              ev(this);
            }),
            t
          );
        })();
      tD(eq.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -0.00000001,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var eU = (function (t) {
        function e(e, r) {
          var i;
          return (
            void 0 === e && (e = {}),
            ((i = t.call(this, e) || this).labels = {}),
            (i.smoothChildTiming = !!e.smoothChildTiming),
            (i.autoRemoveChildren = !!e.autoRemoveChildren),
            (i._sort = X(e.sortChildren)),
            C && tK(e.parent || C, n(i), r),
            e.reversed && i.reverse(),
            e.paused && i.paused(!0),
            e.scrollTrigger && t0(n(i), e.scrollTrigger),
            i
          );
        }
        i(e, t);
        var r = e.prototype;
        return (
          (r.to = function (t, e, r) {
            return et(0, arguments, this), this;
          }),
          (r.from = function (t, e, r) {
            return et(1, arguments, this), this;
          }),
          (r.fromTo = function (t, e, r, n) {
            return et(2, arguments, this), this;
          }),
          (r.set = function (t, e, r) {
            return (
              (e.duration = 0),
              (e.parent = this),
              tF(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new rt(t, e, t7(this, r), 1),
              this
            );
          }),
          (r.call = function (t, e, r) {
            return tK(this, rt.delayedCall(0, t, e), r);
          }),
          (r.staggerTo = function (t, e, r, n, i, s, o) {
            return (
              (r.duration = e),
              (r.stagger = r.stagger || n),
              (r.onComplete = s),
              (r.onCompleteParams = o),
              (r.parent = this),
              new rt(t, r, t7(this, i)),
              this
            );
          }),
          (r.staggerFrom = function (t, e, r, n, i, s, o) {
            return (
              (r.runBackwards = 1),
              (tF(r).immediateRender = X(r.immediateRender)),
              this.staggerTo(t, e, r, n, i, s, o)
            );
          }),
          (r.staggerFromTo = function (t, e, r, n, i, s, o, a) {
            return (
              (n.startAt = r),
              (tF(n).immediateRender = X(n.immediateRender)),
              this.staggerTo(t, e, n, i, s, o, a)
            );
          }),
          (r.render = function (t, e, r) {
            var n,
              i,
              s,
              o,
              a,
              u,
              l,
              c,
              h,
              f,
              d,
              p,
              m = this._time,
              g = this._dirty ? this.totalDuration() : this._tDur,
              _ = this._dur,
              v = t <= 0 ? 0 : tO(t),
              y = this._zTime < 0 != t < 0 && (this._initted || !_);
            if (
              (this !== C && v > g && t >= 0 && (v = g),
              v !== this._tTime || r || y)
            ) {
              if (
                (m !== this._time &&
                  _ &&
                  ((v += this._time - m), (t += this._time - m)),
                (n = v),
                (h = this._start),
                (u = !(c = this._ts)),
                y && (_ || (m = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((d = this._yoyo),
                  (a = _ + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * a + t, e, r);
                if (
                  ((n = tO(v % a)),
                  v === g
                    ? ((o = this._repeat), (n = _))
                    : ((o = ~~(v / a)) && o === v / a && ((n = _), o--),
                      n > _ && (n = _)),
                  (f = tG(this._tTime, a)),
                  !m &&
                    this._tTime &&
                    f !== o &&
                    this._tTime - f * a - this._dur <= 0 &&
                    (f = o),
                  d && 1 & o && ((n = _ - n), (p = 1)),
                  o !== f && !this._lock)
                ) {
                  var w = d && 1 & f,
                    b = w === (d && 1 & o);
                  if (
                    (o < f && (w = !w),
                    (m = w ? 0 : v % _ ? _ : v),
                    (this._lock = 1),
                    (this.render(m || (p ? 0 : tO(o * a)), e, !_)._lock = 0),
                    (this._tTime = v),
                    !e && this.parent && e_(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !p &&
                      (this.invalidate()._lock = 1),
                    (m && m !== this._time) ||
                      !this._ts !== u ||
                      (this.vars.onRepeat && !this.parent && !this._act) ||
                      ((_ = this._dur),
                      (g = this._tDur),
                      b &&
                        ((this._lock = 2),
                        (m = w ? _ : -0.0001),
                        this.render(m, !0),
                        this.vars.repeatRefresh && !p && this.invalidate()),
                      (this._lock = 0),
                      !this._ts && !u))
                  )
                    return this;
                  eI(this, p);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  (l = t8(this, tO(m), tO(n))) &&
                  (v -= n - (n = l._start)),
                (this._tTime = v),
                (this._time = n),
                (this._act = !c),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (m = 0)),
                !m && n && !e && !o && (e_(this, "onStart"), this._tTime !== v))
              )
                return this;
              if (n >= m && t >= 0)
                for (i = this._first; i; ) {
                  if (
                    ((s = i._next),
                    (i._act || n >= i._start) && i._ts && l !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, r);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (n - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (n - i._start) * i._ts,
                        e,
                        r
                      ),
                      n !== this._time || (!this._ts && !u))
                    ) {
                      (l = 0), s && (v += this._zTime = -0.00000001);
                      break;
                    }
                  }
                  i = s;
                }
              else {
                i = this._last;
                for (var x = t < 0 ? t : n; i; ) {
                  if (
                    ((s = i._prev), (i._act || x <= i._end) && i._ts && l !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, r);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (x - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (x - i._start) * i._ts,
                        e,
                        r || (E && (i._initted || i._startAt))
                      ),
                      n !== this._time || (!this._ts && !u))
                    ) {
                      (l = 0), s && (v += this._zTime = x ? -0.00000001 : 1e-8);
                      break;
                    }
                  }
                  i = s;
                }
              }
              if (
                l &&
                !e &&
                (this.pause(),
                (l.render(n >= m ? 0 : -0.00000001)._zTime = n >= m ? 1 : -1),
                this._ts)
              )
                return (this._start = h), t$(this), this.render(t, e, r);
              this._onUpdate && !e && e_(this, "onUpdate", !0),
                ((v === g && this._tTime >= this.totalDuration()) ||
                  (!v && m)) &&
                  (h === this._start || Math.abs(c) !== Math.abs(this._ts)) &&
                  !this._lock &&
                  ((t || !_) &&
                    ((v === g && this._ts > 0) || (!v && this._ts < 0)) &&
                    tH(this, 1),
                  e ||
                    (t < 0 && !m) ||
                    (!v && !m && g) ||
                    (e_(
                      this,
                      v === g && t >= 0 ? "onComplete" : "onReverseComplete",
                      !0
                    ),
                    this._prom &&
                      !(v < g && this.timeScale() > 0) &&
                      this._prom()));
            }
            return this;
          }),
          (r.add = function (t, e) {
            var r = this;
            if ((W(e) || (e = t7(this, e, t)), !(t instanceof eq))) {
              if (Q(t))
                return (
                  t.forEach(function (t) {
                    return r.add(t, e);
                  }),
                  this
                );
              if (Y(t)) return this.addLabel(t, e);
              if (!H(t)) return this;
              t = rt.delayedCall(0, t);
            }
            return this !== t ? tK(this, t, e) : this;
          }),
          (r.getChildren = function (t, e, r, n) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === r && (r = !0),
              void 0 === n && (n = -1e8);
            for (var i = [], s = this._first; s; )
              s._start >= n &&
                (s instanceof rt
                  ? e && i.push(s)
                  : (r && i.push(s),
                    t && i.push.apply(i, s.getChildren(!0, e, r)))),
                (s = s._next);
            return i;
          }),
          (r.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
              if (e[r].vars.id === t) return e[r];
          }),
          (r.remove = function (t) {
            return Y(t)
              ? this.removeLabel(t)
              : H(t)
              ? this.killTweensOf(t)
              : (tY(this, t),
                t === this._recent && (this._recent = this._last),
                tW(this));
          }),
          (r.totalTime = function (e, r) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = tO(
                    eM.time -
                      (this._ts > 0
                        ? e / this._ts
                        : -((this.totalDuration() - e) / this._ts))
                  )),
                t.prototype.totalTime.call(this, e, r),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (r.addLabel = function (t, e) {
            return (this.labels[t] = t7(this, e)), this;
          }),
          (r.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (r.addPause = function (t, e, r) {
            var n = rt.delayedCall(0, e || th, r);
            return (
              (n.data = "isPause"),
              (this._hasPause = 1),
              tK(this, n, t7(this, t))
            );
          }),
          (r.removePause = function (t) {
            var e = this._first;
            for (t = t7(this, t); e; )
              e._start === t && "isPause" === e.data && tH(e), (e = e._next);
          }),
          (r.killTweensOf = function (t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--; )
              eQ !== n[i] && n[i].kill(t, e);
            return this;
          }),
          (r.getTweensOf = function (t, e) {
            for (var r, n = [], i = eo(t), s = this._first, o = W(e); s; )
              s instanceof rt
                ? tR(s._targets, i) &&
                  (o
                    ? (!eQ || (s._initted && s._ts)) &&
                      s.globalTime(0) <= e &&
                      s.globalTime(s.totalDuration()) > e
                    : !e || s.isActive()) &&
                  n.push(s)
                : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r),
                (s = s._next);
            return n;
          }),
          (r.tweenTo = function (t, e) {
            e = e || {};
            var r,
              n = this,
              i = t7(n, t),
              s = e,
              o = s.startAt,
              a = s.onStart,
              u = s.onStartParams,
              l = s.immediateRender,
              c = rt.to(
                n,
                tD(
                  {
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration:
                      e.duration ||
                      Math.abs(
                        (i - (o && "time" in o ? o.time : n._time)) /
                          n.timeScale()
                      ) ||
                      1e-8,
                    onStart: function () {
                      if ((n.pause(), !r)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (i - (o && "time" in o ? o.time : n._time)) /
                              n.timeScale()
                          );
                        c._dur !== t && t4(c, t, 0, 1).render(c._time, !0, !0),
                          (r = 1);
                      }
                      a && a.apply(c, u || []);
                    },
                  },
                  e
                )
              );
            return l ? c.render(0) : c;
          }),
          (r.tweenFromTo = function (t, e, r) {
            return this.tweenTo(e, tD({ startAt: { time: t7(this, t) } }, r));
          }),
          (r.recent = function () {
            return this._recent;
          }),
          (r.nextLabel = function (t) {
            return void 0 === t && (t = this._time), eg(this, t7(this, t));
          }),
          (r.previousLabel = function (t) {
            return void 0 === t && (t = this._time), eg(this, t7(this, t), 1);
          }),
          (r.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + 1e-8);
          }),
          (r.shiftChildren = function (t, e, r) {
            void 0 === r && (r = 0);
            for (var n, i = this._first, s = this.labels; i; )
              i._start >= r && ((i._start += t), (i._end += t)), (i = i._next);
            if (e) for (n in s) s[n] >= r && (s[n] += t);
            return tW(this);
          }),
          (r.invalidate = function (e) {
            var r = this._first;
            for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
            return t.prototype.invalidate.call(this, e);
          }),
          (r.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
              (e = r._next), this.remove(r), (r = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              tW(this)
            );
          }),
          (r.totalDuration = function (t) {
            var e,
              r,
              n,
              i = 0,
              s = this._last,
              o = 1e8;
            if (arguments.length)
              return this.timeScale(
                (this._repeat < 0 ? this.duration() : this.totalDuration()) /
                  (this.reversed() ? -t : t)
              );
            if (this._dirty) {
              for (n = this.parent; s; )
                (e = s._prev),
                  s._dirty && s.totalDuration(),
                  (r = s._start) > o && this._sort && s._ts && !this._lock
                    ? ((this._lock = 1),
                      (tK(this, s, r - s._delay, 1)._lock = 0))
                    : (o = r),
                  r < 0 &&
                    s._ts &&
                    ((i -= r),
                    ((!n && !this._dp) || (n && n.smoothChildTiming)) &&
                      ((this._start += r / this._ts),
                      (this._time -= r),
                      (this._tTime -= r)),
                    this.shiftChildren(-r, !1, -Infinity),
                    (o = 0)),
                  s._end > i && s._ts && (i = s._end),
                  (s = e);
              t4(this, this === C && this._time > i ? this._time : i, 1, 1),
                (this._dirty = 0);
            }
            return this._tDur;
          }),
          (e.updateRoot = function (t) {
            if ((C._ts && (tA(C, tZ(t, C)), (P = eM.frame)), eM.frame >= tw)) {
              tw += L.autoSleep || 120;
              var e = C._first;
              if ((!e || !e._ts) && L.autoSleep && eM._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || eM.sleep();
              }
            }
          }),
          e
        );
      })(eq);
      tD(eU.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var eX,
        eG,
        eZ,
        e$,
        eQ,
        eJ,
        eK = function (t, e, r, n, i, s, o) {
          var a,
            u,
            l,
            c,
            h,
            f,
            d,
            p,
            m = new rp(this._pt, t, e, 0, 1, ru, null, i),
            g = 0,
            _ = 0;
          for (
            m.b = r,
              m.e = n,
              r += "",
              n += "",
              (d = ~n.indexOf("random(")) && (n = ep(n)),
              s && (s((p = [r, n]), t, e), (r = p[0]), (n = p[1])),
              u = r.match(te) || [];
            (a = te.exec(n));

          )
            (c = a[0]),
              (h = n.substring(g, a.index)),
              l ? (l = (l + 1) % 5) : "rgba(" === h.substr(-5) && (l = 1),
              c !== u[_++] &&
                ((f = parseFloat(u[_ - 1]) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: h || 1 === _ ? h : ",",
                  s: f,
                  c: "=" === c.charAt(1) ? tM(f, c) - f : parseFloat(c) - f,
                  m: l && l < 4 ? Math.round : 0,
                }),
                (g = te.lastIndex));
          return (
            (m.c = g < n.length ? n.substring(g, n.length) : ""),
            (m.fp = o),
            (tr.test(n) || d) && (m.e = 0),
            (this._pt = m),
            m
          );
        },
        e0 = function (t, e, r, n, i, s, o, a, u, l) {
          H(n) && (n = n(i || 0, t, s));
          var c,
            h = t[e],
            f =
              "get" !== r
                ? r
                : H(h)
                ? u
                  ? t[
                      e.indexOf("set") || !H(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](u)
                  : t[e]()
                : h,
            d = H(h) ? (u ? rn : rr) : re;
          if (
            (Y(n) &&
              (~n.indexOf("random(") && (n = ep(n)),
              "=" === n.charAt(1) &&
                ((c = tM(f, n) + (en(f) || 0)) || 0 === c) &&
                (n = c)),
            !l || f !== n || eJ)
          )
            return isNaN(f * n) || "" === n
              ? (h || e in t || tu(e, n),
                eK.call(this, t, e, f, n, d, a || L.stringFilter, u))
              : ((c = new rp(
                  this._pt,
                  t,
                  e,
                  +f || 0,
                  n - (f || 0),
                  "boolean" == typeof h ? ra : ro,
                  0,
                  d
                )),
                u && (c.fp = u),
                o && c.modifier(o, this, t),
                (this._pt = c));
        },
        e1 = function (t, e, r, n, i) {
          if (
            (H(t) && (t = e6(t, i, e, r, n)),
            !U(t) || (t.style && t.nodeType) || Q(t) || $(t))
          )
            return Y(t) ? e6(t, i, e, r, n) : t;
          var s,
            o = {};
          for (s in t) o[s] = e6(t[s], i, e, r, n);
          return o;
        },
        e2 = function (t, e, r, n, i, s) {
          var o, a, u, l;
          if (
            tv[t] &&
            !1 !==
              (o = new tv[t]()).init(
                i,
                o.rawVars ? e[t] : e1(e[t], n, i, s, r),
                r,
                n,
                s
              ) &&
            ((r._pt = a =
              new rp(r._pt, i, t, 0, 1, o.render, o, 0, o.priority)),
            r !== A)
          )
            for (
              u = r._ptLookup[r._targets.indexOf(i)], l = o._props.length;
              l--;

            )
              u[o._props[l]] = a;
          return o;
        },
        e5 = function t(e, r, n) {
          var i,
            s,
            o,
            a,
            u,
            l,
            c,
            h,
            f,
            d,
            p,
            m,
            g,
            _ = e.vars,
            v = _.ease,
            y = _.startAt,
            w = _.immediateRender,
            b = _.lazy,
            x = _.onUpdate,
            k = _.onUpdateParams,
            S = _.callbackScope,
            O = _.runBackwards,
            M = _.yoyoEase,
            R = _.keyframes,
            P = _.autoRevert,
            A = e._dur,
            j = e._startAt,
            L = e._targets,
            z = e.parent,
            N = z && "nested" === z.data ? z.vars.targets : L,
            I = "auto" === e._overwrite && !T,
            F = e.timeline;
          if (
            (!F || (R && v) || (v = "none"),
            (e._ease = eF(v, D.ease)),
            (e._yEase = M ? eN(eF(!0 === M ? v : M, D.ease)) : 0),
            M &&
              e._yoyo &&
              !e._repeat &&
              ((M = e._yEase), (e._yEase = e._ease), (e._ease = M)),
            (e._from = !F && !!_.runBackwards),
            !F || (R && !_.stagger))
          ) {
            if (
              ((m = (h = L[0] ? tE(L[0]).harness : 0) && _[h.prop]),
              (i = tI(_, tm)),
              j &&
                (j._zTime < 0 && j.progress(1),
                r < 0 && O && w && !P
                  ? j.render(-1, !0)
                  : j.revert(O && A ? td : tf),
                (j._lazy = 0)),
              y)
            ) {
              if (
                (tH(
                  (e._startAt = rt.set(
                    L,
                    tD(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: z,
                        immediateRender: !0,
                        lazy: !j && X(b),
                        startAt: null,
                        delay: 0,
                        onUpdate: x,
                        onUpdateParams: k,
                        callbackScope: S,
                        stagger: 0,
                      },
                      y
                    )
                  ))
                ),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                r < 0 && (E || (!w && !P)) && e._startAt.revert(td),
                w && A && r <= 0 && n <= 0)
              ) {
                r && (e._zTime = r);
                return;
              }
            } else if (O && A && !j) {
              if (
                (r && (w = !1),
                (o = tD(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: w && !j && X(b),
                    immediateRender: w,
                    stagger: 0,
                    parent: z,
                  },
                  i
                )),
                m && (o[h.prop] = m),
                tH((e._startAt = rt.set(L, o))),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                r < 0 &&
                  (E ? e._startAt.revert(td) : e._startAt.render(-1, !0)),
                (e._zTime = r),
                w)
              ) {
                if (!r) return;
              } else t(e._startAt, 1e-8, 1e-8);
            }
            for (
              s = 0, e._pt = e._ptCache = 0, b = (A && X(b)) || (b && !A);
              s < L.length;
              s++
            ) {
              if (
                ((c = (u = L[s])._gsap || tT(L)[s]._gsap),
                (e._ptLookup[s] = d = {}),
                t_[c.id] && tg.length && tP(),
                (p = N === L ? s : N.indexOf(u)),
                h &&
                  !1 !== (f = new h()).init(u, m || i, e, p, N) &&
                  ((e._pt = a =
                    new rp(e._pt, u, f.name, 0, 1, f.render, f, 0, f.priority)),
                  f._props.forEach(function (t) {
                    d[t] = a;
                  }),
                  f.priority && (l = 1)),
                !h || m)
              )
                for (o in i)
                  tv[o] && (f = e2(o, i, e, p, u, N))
                    ? f.priority && (l = 1)
                    : (d[o] = a =
                        e0.call(e, u, o, "get", i[o], p, N, 0, _.stringFilter));
              e._op && e._op[s] && e.kill(u, e._op[s]),
                I &&
                  e._pt &&
                  ((eQ = e),
                  C.killTweensOf(u, d, e.globalTime(r)),
                  (g = !e.parent),
                  (eQ = 0)),
                e._pt && b && (t_[c.id] = 1);
            }
            l && rd(e), e._onInit && e._onInit(e);
          }
          (e._onUpdate = x),
            (e._initted = (!e._op || e._pt) && !g),
            R && r <= 0 && F.render(1e8, !0, !0);
        },
        e3 = function (t, e, r, n, i, s, o) {
          var a,
            u,
            l,
            c,
            h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
          if (!h)
            for (
              h = t._ptCache[e] = [], l = t._ptLookup, c = t._targets.length;
              c--;

            ) {
              if ((a = l[c][e]) && a.d && a.d._pt)
                for (a = a.d._pt; a && a.p !== e && a.fp !== e; ) a = a._next;
              if (!a)
                return (eJ = 1), (t.vars[e] = "+=0"), e5(t, o), (eJ = 0), 1;
              h.push(a);
            }
          for (c = h.length; c--; )
            ((a = (u = h[c])._pt || u).s =
              (n || 0 === n) && !i ? n : a.s + (n || 0) + s * a.c),
              (a.c = r - a.s),
              u.e && (u.e = tS(r) + en(u.e)),
              u.b && (u.b = a.s + en(u.b));
        },
        e8 = function (t, e) {
          var r,
            n,
            i,
            s,
            o = t[0] ? tE(t[0]).harness : 0,
            a = o && o.aliases;
          if (!a) return e;
          for (n in ((r = tz({}, e)), a))
            if (n in r)
              for (i = (s = a[n].split(",")).length; i--; ) r[s[i]] = r[n];
          return r;
        },
        e4 = function (t, e, r, n) {
          var i,
            s,
            o = e.ease || n || "power1.inOut";
          if (Q(e))
            (s = r[t] || (r[t] = [])),
              e.forEach(function (t, r) {
                return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: o });
              });
          else
            for (i in e)
              (s = r[i] || (r[i] = [])),
                "ease" === i || s.push({ t: parseFloat(t), v: e[i], e: o });
        },
        e6 = function (t, e, r, n, i) {
          return H(t)
            ? t.call(e, r, n, i)
            : Y(t) && ~t.indexOf("random(")
            ? ep(t)
            : t;
        },
        e9 = tx + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        e7 = {};
      tC(e9 + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return (e7[t] = 1);
      });
      var rt = (function (t) {
        function e(e, r, i, s) {
          "number" == typeof r && ((i.duration = r), (r = i), (i = null));
          var o,
            a,
            u,
            l,
            c,
            h,
            f,
            d,
            p,
            m = (o = t.call(this, s ? r : tF(r)) || this).vars,
            g = m.duration,
            _ = m.delay,
            v = m.immediateRender,
            y = m.stagger,
            w = m.overwrite,
            b = m.keyframes,
            x = m.defaults,
            E = m.scrollTrigger,
            k = m.yoyoEase,
            S = r.parent || C,
            O = (Q(e) || $(e) ? W(e[0]) : "length" in r) ? [e] : eo(e);
          if (
            ((o._targets = O.length
              ? tT(O)
              : tl(
                  "GSAP target " + e + " not found. https://greensock.com",
                  !L.nullTargetWarn
                ) || []),
            (o._ptLookup = []),
            (o._overwrite = w),
            b || y || Z(g) || Z(_))
          ) {
            if (
              ((r = o.vars),
              (a = o.timeline =
                new eU({
                  data: "nested",
                  defaults: x || {},
                  targets: S && "nested" === S.data ? S.vars.targets : O,
                })).kill(),
              (a.parent = a._dp = n(o)),
              (a._start = 0),
              y || Z(g) || Z(_))
            ) {
              if (((c = O.length), (d = y && el(y)), U(y)))
                for (h in y) ~e9.indexOf(h) && (p || (p = {}), (p[h] = y[h]));
              for (u = 0; u < c; u++)
                ((l = tI(r, e7)).stagger = 0),
                  k && (l.yoyoEase = k),
                  p && tz(l, p),
                  (f = O[u]),
                  (l.duration = +e6(g, n(o), u, f, O)),
                  (l.delay = (+e6(_, n(o), u, f, O) || 0) - o._delay),
                  !y &&
                    1 === c &&
                    l.delay &&
                    ((o._delay = _ = l.delay), (o._start += _), (l.delay = 0)),
                  a.to(f, l, d ? d(u, f, O) : 0),
                  (a._ease = eP.none);
              a.duration() ? (g = _ = 0) : (o.timeline = 0);
            } else if (b) {
              tF(tD(a.vars.defaults, { ease: "none" })),
                (a._ease = eF(b.ease || r.ease || "none"));
              var M,
                R,
                P,
                A = 0;
              if (Q(b))
                b.forEach(function (t) {
                  return a.to(O, t, ">");
                }),
                  a.duration();
              else {
                for (h in ((l = {}), b))
                  "ease" === h ||
                    "easeEach" === h ||
                    e4(h, b[h], l, b.easeEach);
                for (h in l)
                  for (
                    u = 0,
                      M = l[h].sort(function (t, e) {
                        return t.t - e.t;
                      }),
                      A = 0;
                    u < M.length;
                    u++
                  )
                    ((P = {
                      ease: (R = M[u]).e,
                      duration: ((R.t - (u ? M[u - 1].t : 0)) / 100) * g,
                    })[h] = R.v),
                      a.to(O, P, A),
                      (A += P.duration);
                a.duration() < g && a.to({}, { duration: g - a.duration() });
              }
            }
            g || o.duration((g = a.duration()));
          } else o.timeline = 0;
          return (
            !0 !== w || T || ((eQ = n(o)), C.killTweensOf(O), (eQ = 0)),
            tK(S, n(o), i),
            r.reversed && o.reverse(),
            r.paused && o.paused(!0),
            (v ||
              (!g &&
                !b &&
                o._start === tO(S._time) &&
                X(v) &&
                (function t(e) {
                  return !e || (e._ts && t(e.parent));
                })(n(o)) &&
                "nested" !== S.data)) &&
              ((o._tTime = -0.00000001), o.render(Math.max(0, -_) || 0)),
            E && t0(n(o), E),
            o
          );
        }
        i(e, t);
        var r = e.prototype;
        return (
          (r.render = function (t, e, r) {
            var n,
              i,
              s,
              o,
              a,
              u,
              l,
              c,
              h,
              f = this._time,
              d = this._tDur,
              p = this._dur,
              m = t < 0,
              g = t > d - 1e-8 && !m ? d : t < 1e-8 ? 0 : t;
            if (p) {
              if (
                g !== this._tTime ||
                !t ||
                r ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== m)
              ) {
                if (((n = g), (c = this.timeline), this._repeat)) {
                  if (((o = p + this._rDelay), this._repeat < -1 && m))
                    return this.totalTime(100 * o + t, e, r);
                  if (
                    ((n = tO(g % o)),
                    g === d
                      ? ((s = this._repeat), (n = p))
                      : ((s = ~~(g / o)) && s === g / o && ((n = p), s--),
                        n > p && (n = p)),
                    (u = this._yoyo && 1 & s) &&
                      ((h = this._yEase), (n = p - n)),
                    (a = tG(this._tTime, o)),
                    n === f && !r && this._initted)
                  )
                    return (this._tTime = g), this;
                  s === a ||
                    (c && this._yEase && eI(c, u),
                    !this.vars.repeatRefresh ||
                      u ||
                      this._lock ||
                      ((this._lock = r = 1),
                      (this.render(tO(o * s), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (t1(this, m ? t : n, r, e, g))
                    return (this._tTime = 0), this;
                  if (f !== this._time) return this;
                  if (p !== this._dur) return this.render(t, e, r);
                }
                if (
                  ((this._tTime = g),
                  (this._time = n),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = l = (h || this._ease)(n / p)),
                  this._from && (this.ratio = l = 1 - l),
                  n &&
                    !f &&
                    !e &&
                    !s &&
                    (e_(this, "onStart"), this._tTime !== g))
                )
                  return this;
                for (i = this._pt; i; ) i.r(l, i.d), (i = i._next);
                (c &&
                  c.render(
                    t < 0
                      ? t
                      : !n && u
                      ? -0.00000001
                      : c._dur * c._ease(n / this._dur),
                    e,
                    r
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (m && tU(this, t, e, r), e_(this, "onUpdate")),
                  this._repeat &&
                    s !== a &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    e_(this, "onRepeat"),
                  (g === this._tDur || !g) &&
                    this._tTime === g &&
                    (m && !this._onUpdate && tU(this, t, !0, !0),
                    (t || !p) &&
                      ((g === this._tDur && this._ts > 0) ||
                        (!g && this._ts < 0)) &&
                      tH(this, 1),
                    !e &&
                      !(m && !f) &&
                      (g || f || u) &&
                      (e_(
                        this,
                        g === d ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(g < d && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else t3(this, t, e, r);
            return this;
          }),
          (r.targets = function () {
            return this._targets;
          }),
          (r.invalidate = function (e) {
            return (
              (e && this.vars.runBackwards) || (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(e),
              t.prototype.invalidate.call(this, e)
            );
          }),
          (r.resetTo = function (t, e, r, n) {
            j || eM.wake(), this._ts || this.play();
            var i = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            );
            return (this._initted || e5(this, i),
            e3(this, t, e, r, n, this._ease(i / this._dur), i))
              ? this.resetTo(t, e, r, n)
              : (tQ(this, 0),
                this.parent ||
                  tV(
                    this._dp,
                    this,
                    "_first",
                    "_last",
                    this._dp._sort ? "_start" : 0
                  ),
                this.render(0));
          }),
          (r.kill = function (t, e) {
            if ((void 0 === e && (e = "all"), !t && (!e || "all" === e)))
              return (this._lazy = this._pt = 0), this.parent ? ev(this) : this;
            if (this.timeline) {
              var r = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, eQ && !0 !== eQ.vars.overwrite)
                  ._first || ev(this),
                this.parent &&
                  r !== this.timeline.totalDuration() &&
                  t4(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                this
              );
            }
            var n,
              i,
              s,
              o,
              a,
              u,
              l,
              c = this._targets,
              h = t ? eo(t) : c,
              f = this._ptLookup,
              d = this._pt;
            if ((!e || "all" === e) && tB(c, h))
              return "all" === e && (this._pt = 0), ev(this);
            for (
              n = this._op = this._op || [],
                "all" !== e &&
                  (Y(e) &&
                    ((a = {}),
                    tC(e, function (t) {
                      return (a[t] = 1);
                    }),
                    (e = a)),
                  (e = e8(c, e))),
                l = c.length;
              l--;

            )
              if (~h.indexOf(c[l]))
                for (a in ((i = f[l]),
                "all" === e
                  ? ((n[l] = e), (o = i), (s = {}))
                  : ((s = n[l] = n[l] || {}), (o = e)),
                o))
                  (u = i && i[a]) &&
                    (("kill" in u.d && !0 !== u.d.kill(a)) ||
                      tY(this, u, "_pt"),
                    delete i[a]),
                    "all" !== s && (s[a] = 1);
            return this._initted && !this._pt && d && ev(this), this;
          }),
          (e.to = function (t, r) {
            return new e(t, r, arguments[2]);
          }),
          (e.from = function (t, e) {
            return et(1, arguments);
          }),
          (e.delayedCall = function (t, r, n, i) {
            return new e(r, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: r,
              onReverseComplete: r,
              onCompleteParams: n,
              onReverseCompleteParams: n,
              callbackScope: i,
            });
          }),
          (e.fromTo = function (t, e, r) {
            return et(2, arguments);
          }),
          (e.set = function (t, r) {
            return (
              (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r)
            );
          }),
          (e.killTweensOf = function (t, e, r) {
            return C.killTweensOf(t, e, r);
          }),
          e
        );
      })(eq);
      tD(rt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        tC("staggerTo,staggerFrom,staggerFromTo", function (t) {
          rt[t] = function () {
            var e = new eU(),
              r = ei.call(arguments, 0);
            return (
              r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
            );
          };
        });
      var re = function (t, e, r) {
          return (t[e] = r);
        },
        rr = function (t, e, r) {
          return t[e](r);
        },
        rn = function (t, e, r, n) {
          return t[e](n.fp, r);
        },
        ri = function (t, e, r) {
          return t.setAttribute(e, r);
        },
        rs = function (t, e) {
          return H(t[e]) ? rr : q(t[e]) && t.setAttribute ? ri : re;
        },
        ro = function (t, e) {
          return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
        },
        ra = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        ru = function (t, e) {
          var r = e._pt,
            n = "";
          if (!t && e.b) n = e.b;
          else if (1 === t && e.e) n = e.e;
          else {
            for (; r; )
              (n =
                r.p +
                (r.m
                  ? r.m(r.s + r.c * t)
                  : Math.round((r.s + r.c * t) * 1e4) / 1e4) +
                n),
                (r = r._next);
            n += e.c;
          }
          e.set(e.t, e.p, n, e);
        },
        rl = function (t, e) {
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        },
        rc = function (t, e, r, n) {
          for (var i, s = this._pt; s; )
            (i = s._next), s.p === n && s.modifier(t, e, r), (s = i);
        },
        rh = function (t) {
          for (var e, r, n = this._pt; n; )
            (r = n._next),
              (n.p !== t || n.op) && n.op !== t
                ? n.dep || (e = 1)
                : tY(this, n, "_pt"),
              (n = r);
          return !e;
        },
        rf = function (t, e, r, n) {
          n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
        },
        rd = function (t) {
          for (var e, r, n, i, s = t._pt; s; ) {
            for (e = s._next, r = n; r && r.pr > s.pr; ) r = r._next;
            (s._prev = r ? r._prev : i) ? (s._prev._next = s) : (n = s),
              (s._next = r) ? (r._prev = s) : (i = s),
              (s = e);
          }
          t._pt = n;
        },
        rp = (function () {
          function t(t, e, r, n, i, s, o, a, u) {
            (this.t = e),
              (this.s = n),
              (this.c = i),
              (this.p = r),
              (this.r = s || ro),
              (this.d = o || this),
              (this.set = a || re),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, r) {
              (this.mSet = this.mSet || this.set),
                (this.set = rf),
                (this.m = t),
                (this.mt = r),
                (this.tween = e);
            }),
            t
          );
        })();
      tC(
        tx +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
          return (tm[t] = 1);
        }
      ),
        (ts.TweenMax = ts.TweenLite = rt),
        (ts.TimelineLite = ts.TimelineMax = eU),
        (C = new eU({
          sortChildren: !1,
          defaults: D,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (L.stringFilter = eO);
      var rm = [],
        rg = {},
        r_ = [],
        rv = 0,
        ry = 0,
        rw = function (t) {
          return (rg[t] || r_).map(function (t) {
            return t();
          });
        },
        rb = function () {
          var t = Date.now(),
            e = [];
          t - rv > 2 &&
            (rw("matchMediaInit"),
            rm.forEach(function (t) {
              var r,
                n,
                i,
                s,
                o = t.queries,
                a = t.conditions;
              for (n in o)
                (r = S.matchMedia(o[n]).matches) && (i = 1),
                  r !== a[n] && ((a[n] = r), (s = 1));
              s && (t.revert(), i && e.push(t));
            }),
            rw("matchMediaRevert"),
            e.forEach(function (t) {
              return t.onMatch(t);
            }),
            (rv = t),
            rw("matchMedia"));
        },
        rx = (function () {
          function t(t, e) {
            (this.selector = e && ea(e)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              (this.id = ry++),
              t && this.add(t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, r) {
              H(t) && ((r = e), (e = t), (t = H));
              var n = this,
                i = function () {
                  var t,
                    i = k,
                    s = n.selector;
                  return (
                    i && i !== n && i.data.push(n),
                    r && (n.selector = ea(r)),
                    (k = n),
                    (t = e.apply(n, arguments)),
                    H(t) && n._r.push(t),
                    (k = i),
                    (n.selector = s),
                    (n.isReverted = !1),
                    t
                  );
                };
              return (n.last = i), t === H ? i(n) : t ? (n[t] = i) : i;
            }),
            (e.ignore = function (t) {
              var e = k;
              (k = null), t(this), (k = e);
            }),
            (e.getTweens = function () {
              var e = [];
              return (
                this.data.forEach(function (r) {
                  return r instanceof t
                    ? e.push.apply(e, r.getTweens())
                    : r instanceof rt &&
                        !(r.parent && "nested" === r.parent.data) &&
                        e.push(r);
                }),
                e
              );
            }),
            (e.clear = function () {
              this._r.length = this.data.length = 0;
            }),
            (e.kill = function (t, e) {
              var r = this;
              if (t) {
                var n = this.getTweens();
                this.data.forEach(function (t) {
                  "isFlip" === t.data &&
                    (t.revert(),
                    t.getChildren(!0, !0, !1).forEach(function (t) {
                      return n.splice(n.indexOf(t), 1);
                    }));
                }),
                  n
                    .map(function (t) {
                      return { g: t.globalTime(0), t: t };
                    })
                    .sort(function (t, e) {
                      return e.g - t.g || -1 / 0;
                    })
                    .forEach(function (e) {
                      return e.t.revert(t);
                    }),
                  this.data.forEach(function (e) {
                    return !(e instanceof rt) && e.revert && e.revert(t);
                  }),
                  this._r.forEach(function (e) {
                    return e(t, r);
                  }),
                  (this.isReverted = !0);
              } else
                this.data.forEach(function (t) {
                  return t.kill && t.kill();
                });
              if ((this.clear(), e))
                for (var i = rm.length; i--; )
                  rm[i].id === this.id && rm.splice(i, 1);
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            t
          );
        })(),
        rT = (function () {
          function t(t) {
            (this.contexts = []), (this.scope = t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, r) {
              U(t) || (t = { matches: t });
              var n,
                i,
                s,
                o = new rx(0, r || this.scope),
                a = (o.conditions = {});
              for (i in (k && !o.selector && (o.selector = k.selector),
              this.contexts.push(o),
              (e = o.add("onMatch", e)),
              (o.queries = t),
              t))
                "all" === i
                  ? (s = 1)
                  : (n = S.matchMedia(t[i])) &&
                    (0 > rm.indexOf(o) && rm.push(o),
                    (a[i] = n.matches) && (s = 1),
                    n.addListener
                      ? n.addListener(rb)
                      : n.addEventListener("change", rb));
              return s && e(o), this;
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            (e.kill = function (t) {
              this.contexts.forEach(function (e) {
                return e.kill(t, !0);
              });
            }),
            t
          );
        })(),
        rE = {
          registerPlugin: function () {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            e.forEach(function (t) {
              return ew(t);
            });
          },
          timeline: function (t) {
            return new eU(t);
          },
          getTweensOf: function (t, e) {
            return C.getTweensOf(t, e);
          },
          getProperty: function (t, e, r, n) {
            Y(t) && (t = eo(t)[0]);
            var i = tE(t || {}).get,
              s = r ? tL : tj;
            return (
              "native" === r && (r = ""),
              t
                ? e
                  ? s(((tv[e] && tv[e].get) || i)(t, e, r, n))
                  : function (e, r, n) {
                      return s(((tv[e] && tv[e].get) || i)(t, e, r, n));
                    }
                : t
            );
          },
          quickSetter: function (t, e, r) {
            if ((t = eo(t)).length > 1) {
              var n = t.map(function (t) {
                  return rO.quickSetter(t, e, r);
                }),
                i = n.length;
              return function (t) {
                for (var e = i; e--; ) n[e](t);
              };
            }
            t = t[0] || {};
            var s = tv[e],
              o = tE(t),
              a = (o.harness && (o.harness.aliases || {})[e]) || e,
              u = s
                ? function (e) {
                    var n = new s();
                    (A._pt = 0),
                      n.init(t, r ? e + r : e, A, 0, [t]),
                      n.render(1, n),
                      A._pt && rl(1, A);
                  }
                : o.set(t, a);
            return s
              ? u
              : function (e) {
                  return u(t, a, r ? e + r : e, o, 1);
                };
          },
          quickTo: function (t, e, r) {
            var n,
              i = rO.to(
                t,
                tz((((n = {})[e] = "+=0.1"), (n.paused = !0), n), r || {})
              ),
              s = function (t, r, n) {
                return i.resetTo(e, t, r, n);
              };
            return (s.tween = i), s;
          },
          isTweening: function (t) {
            return C.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = eF(t.ease, D.ease)), tN(D, t || {});
          },
          config: function (t) {
            return tN(L, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              r = t.effect,
              n = t.plugins,
              i = t.defaults,
              s = t.extendTimeline;
            (n || "").split(",").forEach(function (t) {
              return (
                t &&
                !tv[t] &&
                !ts[t] &&
                tl(e + " effect requires " + t + " plugin.")
              );
            }),
              (ty[e] = function (t, e, n) {
                return r(eo(t), tD(e || {}, i), n);
              }),
              s &&
                (eU.prototype[e] = function (t, r, n) {
                  return this.add(ty[e](t, U(r) ? r : (n = r) && {}, this), n);
                });
          },
          registerEase: function (t, e) {
            eP[t] = eF(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? eF(t, e) : eP;
          },
          getById: function (t) {
            return C.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var r,
              n,
              i = new eU(t);
            for (
              i.smoothChildTiming = X(t.smoothChildTiming),
                C.remove(i),
                i._dp = 0,
                i._time = i._tTime = C._time,
                r = C._first;
              r;

            )
              (n = r._next),
                (e ||
                  !(
                    !r._dur &&
                    r instanceof rt &&
                    r.vars.onComplete === r._targets[0]
                  )) &&
                  tK(i, r, r._start - r._delay),
                (r = n);
            return tK(C, i, 0), i;
          },
          context: function (t, e) {
            return t ? new rx(t, e) : k;
          },
          matchMedia: function (t) {
            return new rT(t);
          },
          matchMediaRefresh: function () {
            return (
              rm.forEach(function (t) {
                var e,
                  r,
                  n = t.conditions;
                for (r in n) n[r] && ((n[r] = !1), (e = 1));
                e && t.revert();
              }) || rb()
            );
          },
          addEventListener: function (t, e) {
            var r = rg[t] || (rg[t] = []);
            ~r.indexOf(e) || r.push(e);
          },
          removeEventListener: function (t, e) {
            var r = rg[t],
              n = r && r.indexOf(e);
            n >= 0 && r.splice(n, 1);
          },
          utils: {
            wrap: function t(e, r, n) {
              var i = r - e;
              return Q(e)
                ? ed(e, t(0, e.length), r)
                : ee(n, function (t) {
                    return ((i + ((t - e) % i)) % i) + e;
                  });
            },
            wrapYoyo: function t(e, r, n) {
              var i = r - e,
                s = 2 * i;
              return Q(e)
                ? ed(e, t(0, e.length - 1), r)
                : ee(n, function (t) {
                    return (
                      (t = (s + ((t - e) % s)) % s || 0),
                      e + (t > i ? s - t : t)
                    );
                  });
            },
            distribute: el,
            random: ef,
            snap: eh,
            normalize: function (t, e, r) {
              return em(t, e, 0, 1, r);
            },
            getUnit: en,
            clamp: function (t, e, r) {
              return ee(r, function (r) {
                return er(t, e, r);
              });
            },
            splitColor: eT,
            toArray: eo,
            selector: ea,
            mapRange: em,
            pipe: function () {
              for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t);
                }, t);
              };
            },
            unitize: function (t, e) {
              return function (r) {
                return t(parseFloat(r)) + (e || en(r));
              };
            },
            interpolate: function t(e, r, n, i) {
              var s = isNaN(e + r)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * r;
                  };
              if (!s) {
                var o,
                  a,
                  u,
                  l,
                  c,
                  h = Y(e),
                  f = {};
                if ((!0 === n && (i = 1) && (n = null), h))
                  (e = { p: e }), (r = { p: r });
                else if (Q(e) && !Q(r)) {
                  for (a = 1, u = [], c = (l = e.length) - 2; a < l; a++)
                    u.push(t(e[a - 1], e[a]));
                  l--,
                    (s = function (t) {
                      var e = Math.min(c, ~~(t *= l));
                      return u[e](t - e);
                    }),
                    (n = r);
                } else i || (e = tz(Q(e) ? [] : {}, e));
                if (!u) {
                  for (o in r) e0.call(f, e, o, "get", r[o]);
                  s = function (t) {
                    return rl(t, f) || (h ? e.p : e);
                  };
                }
              }
              return ee(n, s);
            },
            shuffle: eu,
          },
          install: ta,
          effects: ty,
          ticker: eM,
          updateRoot: eU.updateRoot,
          plugins: tv,
          globalTimeline: C,
          core: {
            PropTween: rp,
            globals: tc,
            Tween: rt,
            Timeline: eU,
            Animation: eq,
            getCache: tE,
            _removeLinkedListItem: tY,
            reverting: function () {
              return E;
            },
            context: function (t) {
              return t && k && (k.data.push(t), (t._ctx = k)), k;
            },
            suppressOverwrites: function (t) {
              return (T = t);
            },
          },
        };
      tC("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (rE[t] = rt[t]);
      }),
        eM.add(eU.updateRoot),
        (A = rE.to({}, { duration: 0 }));
      var rk = function (t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
          return r;
        },
        rC = function (t, e) {
          var r,
            n,
            i,
            s = t._targets;
          for (r in e)
            for (n = s.length; n--; )
              (i = t._ptLookup[n][r]) &&
                (i = i.d) &&
                (i._pt && (i = rk(i, r)),
                i && i.modifier && i.modifier(e[r], t, s[n], r));
        },
        rS = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, r, n) {
              n._onInit = function (t) {
                var n, i;
                if (
                  (Y(r) &&
                    ((n = {}),
                    tC(r, function (t) {
                      return (n[t] = 1);
                    }),
                    (r = n)),
                  e)
                ) {
                  for (i in ((n = {}), r)) n[i] = e(r[i]);
                  r = n;
                }
                rC(t, r);
              };
            },
          };
        },
        rO =
          rE.registerPlugin(
            {
              name: "attr",
              init: function (t, e, r, n, i) {
                var s, o, a;
                for (s in ((this.tween = r), e))
                  (a = t.getAttribute(s) || ""),
                    ((o = this.add(
                      t,
                      "setAttribute",
                      (a || 0) + "",
                      e[s],
                      n,
                      i,
                      0,
                      0,
                      s
                    )).op = s),
                    (o.b = a),
                    this._props.push(s);
              },
              render: function (t, e) {
                for (var r = e._pt; r; )
                  E ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var r = e.length; r--; )
                  this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
              },
            },
            rS("roundProps", ec),
            rS("modifiers"),
            rS("snap", eh)
          ) || rE;
      (rt.version = eU.version = rO.version = "3.12.2"),
        (R = 1),
        G() && eR(),
        eP.Power0,
        eP.Power1,
        eP.Power2,
        eP.Power3,
        eP.Power4,
        eP.Linear,
        eP.Quad,
        eP.Cubic,
        eP.Quart,
        eP.Quint,
        eP.Strong,
        eP.Elastic,
        eP.Back,
        eP.SteppedEase,
        eP.Bounce,
        eP.Sine,
        eP.Expo,
        eP.Circ;
      /*!
       * CSSPlugin 3.12.2
       * https://greensock.com
       *
       * Copyright 2008-2023, GreenSock. All rights reserved.
       * Subject to the terms at https://greensock.com/standard-license or for
       * Club GreenSock members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ var rM,
        rR,
        rP,
        rA,
        rj,
        rL,
        rD,
        rz = {},
        rN = 180 / Math.PI,
        rI = Math.PI / 180,
        rF = Math.atan2,
        rB = /([A-Z])/g,
        rV = /(left|right|width|margin|padding|x)/i,
        rY = /[\s,\(]\S/,
        rH = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        rW = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
            e
          );
        },
        rq = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
            e
          );
        },
        rU = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
            e
          );
        },
        rX = function (t, e) {
          var r = e.s + e.c * t;
          e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        rG = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        rZ = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        r$ = function (t, e, r) {
          return (t.style[e] = r);
        },
        rQ = function (t, e, r) {
          return t.style.setProperty(e, r);
        },
        rJ = function (t, e, r) {
          return (t._gsap[e] = r);
        },
        rK = function (t, e, r) {
          return (t._gsap.scaleX = t._gsap.scaleY = r);
        },
        r0 = function (t, e, r, n, i) {
          var s = t._gsap;
          (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
        },
        r1 = function (t, e, r, n, i) {
          var s = t._gsap;
          (s[e] = r), s.renderTransform(i, s);
        },
        r2 = "transform",
        r5 = r2 + "Origin",
        r3 = function t(e, r) {
          var n = this,
            i = this.target,
            s = i.style;
          if (e in rz && s) {
            if (((this.tfm = this.tfm || {}), "transform" === e))
              return rH.transform.split(",").forEach(function (e) {
                return t.call(n, e, r);
              });
            if (
              (~(e = rH[e] || e).indexOf(",")
                ? e.split(",").forEach(function (t) {
                    return (n.tfm[t] = nf(i, t));
                  })
                : (this.tfm[e] = i._gsap.x ? i._gsap[e] : nf(i, e)),
              this.props.indexOf(r2) >= 0)
            )
              return;
            i._gsap.svg &&
              ((this.svgo = i.getAttribute("data-svg-origin")),
              this.props.push(r5, r, "")),
              (e = r2);
          }
          (s || r) && this.props.push(e, r, s[e]);
        },
        r8 = function (t) {
          t.translate &&
            (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"));
        },
        r4 = function () {
          var t,
            e,
            r = this.props,
            n = this.target,
            i = n.style,
            s = n._gsap;
          for (t = 0; t < r.length; t += 3)
            r[t + 1]
              ? (n[r[t]] = r[t + 2])
              : r[t + 2]
              ? (i[r[t]] = r[t + 2])
              : i.removeProperty(
                  "--" === r[t].substr(0, 2)
                    ? r[t]
                    : r[t].replace(rB, "-$1").toLowerCase()
                );
          if (this.tfm) {
            for (e in this.tfm) s[e] = this.tfm[e];
            s.svg &&
              (s.renderTransform(),
              n.setAttribute("data-svg-origin", this.svgo || "")),
              ((t = rL()) && t.isStart) || i[r2] || (r8(i), (s.uncache = 1));
          }
        },
        r6 = function (t, e) {
          var r = { target: t, props: [], revert: r4, save: r3 };
          return (
            t._gsap || rO.core.getCache(t),
            e &&
              e.split(",").forEach(function (t) {
                return r.save(t);
              }),
            r
          );
        },
        r9 = function (t, e) {
          var r = rM.createElementNS
            ? rM.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t
              )
            : rM.createElement(t);
          return r.style ? r : rM.createElement(t);
        },
        r7 = function t(e, r, n) {
          var i = getComputedStyle(e);
          return (
            i[r] ||
            i.getPropertyValue(r.replace(rB, "-$1").toLowerCase()) ||
            i.getPropertyValue(r) ||
            (!n && t(e, ne(r) || r, 1)) ||
            ""
          );
        },
        nt = "O,Moz,ms,Ms,Webkit".split(","),
        ne = function (t, e, r) {
          var n = (e || rA).style,
            i = 5;
          if (t in n && !r) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            i-- && !(nt[i] + t in n);

          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? nt[i] : "") + t;
        },
        nr = function () {
          "undefined" != typeof window &&
            window.document &&
            ((rR = (rM = window.document).documentElement),
            (rA = r9("div") || { style: {} }),
            r9("div"),
            (r5 = (r2 = ne(r2)) + "Origin"),
            (rA.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (rD = !!ne("perspective")),
            (rL = rO.core.reverting),
            (rP = 1));
        },
        nn = function t(e) {
          var r,
            n = r9(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            i = this.parentNode,
            s = this.nextSibling,
            o = this.style.cssText;
          if (
            (rR.appendChild(n),
            n.appendChild(this),
            (this.style.display = "block"),
            e)
          )
            try {
              (r = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (t) {}
          else this._gsapBBox && (r = this._gsapBBox());
          return (
            i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
            rR.removeChild(n),
            (this.style.cssText = o),
            r
          );
        },
        ni = function (t, e) {
          for (var r = e.length; r--; )
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
        },
        ns = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (r) {
            e = nn.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === nn ||
              (e = nn.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +ni(t, ["x", "cx", "x1"]) || 0,
                  y: +ni(t, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        no = function (t) {
          return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && ns(t));
        },
        na = function (t, e) {
          if (e) {
            var r = t.style;
            e in rz && e !== r5 && (e = r2),
              r.removeProperty
                ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) &&
                    (e = "-" + e),
                  r.removeProperty(e.replace(rB, "-$1").toLowerCase()))
                : r.removeAttribute(e);
          }
        },
        nu = function (t, e, r, n, i, s) {
          var o = new rp(t._pt, e, r, 0, 1, s ? rZ : rG);
          return (t._pt = o), (o.b = n), (o.e = i), t._props.push(r), o;
        },
        nl = { deg: 1, rad: 1, turn: 1 },
        nc = { grid: 1, flex: 1 },
        nh = function t(e, r, n, i) {
          var s,
            o,
            a,
            u,
            l = parseFloat(n) || 0,
            c = (n + "").trim().substr((l + "").length) || "px",
            h = rA.style,
            f = rV.test(r),
            d = "svg" === e.tagName.toLowerCase(),
            p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            m = "px" === i,
            g = "%" === i;
          return i === c || !l || nl[i] || nl[c]
            ? l
            : ("px" === c || m || (l = t(e, r, n, "px")),
              (u = e.getCTM && no(e)),
              (g || "%" === c) && (rz[r] || ~r.indexOf("adius")))
            ? ((s = u ? e.getBBox()[f ? "width" : "height"] : e[p]),
              tS(g ? (l / s) * 100 : (l / 100) * s))
            : ((h[f ? "width" : "height"] = 100 + (m ? c : i)),
              (o =
                ~r.indexOf("adius") || ("em" === i && e.appendChild && !d)
                  ? e
                  : e.parentNode),
              u && (o = (e.ownerSVGElement || {}).parentNode),
              (o && o !== rM && o.appendChild) || (o = rM.body),
              (a = o._gsap) &&
                g &&
                a.width &&
                f &&
                a.time === eM.time &&
                !a.uncache)
            ? tS((l / a.width) * 100)
            : ((g || "%" === c) &&
                !nc[r7(o, "display")] &&
                (h.position = r7(e, "position")),
              o === e && (h.position = "static"),
              o.appendChild(rA),
              (s = rA[p]),
              o.removeChild(rA),
              (h.position = "absolute"),
              f && g && (((a = tE(o)).time = eM.time), (a.width = o[p])),
              tS(m ? (s * l) / 100 : s && l ? (100 / s) * l : 0));
        },
        nf = function (t, e, r, n) {
          var i;
          return (
            rP || nr(),
            e in rH &&
              "transform" !== e &&
              ~(e = rH[e]).indexOf(",") &&
              (e = e.split(",")[0]),
            rz[e] && "transform" !== e
              ? ((i = nE(t, n)),
                (i =
                  "transformOrigin" !== e
                    ? i[e]
                    : i.svg
                    ? i.origin
                    : nk(r7(t, r5)) + " " + i.zOrigin + "px"))
              : (!(i = t.style[e]) ||
                  "auto" === i ||
                  n ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (n_[e] && n_[e](t, e, r)) ||
                  r7(t, e) ||
                  tk(t, e) ||
                  ("opacity" === e ? 1 : 0)),
            r && !~(i + "").trim().indexOf(" ") ? nh(t, e, i, r) + r : i
          );
        },
        nd = function (t, e, r, n) {
          if (!r || "none" === r) {
            var i = ne(e, t, 1),
              s = i && r7(t, i, 1);
            s && s !== r
              ? ((e = i), (r = s))
              : "borderColor" === e && (r = r7(t, "borderTopColor"));
          }
          var o,
            a,
            u,
            l,
            c,
            h,
            f,
            d,
            p,
            m,
            g,
            _ = new rp(this._pt, t.style, e, 0, 1, ru),
            v = 0,
            y = 0;
          if (
            ((_.b = r),
            (_.e = n),
            (r += ""),
            "auto" == (n += "") &&
              ((t.style[e] = n), (n = r7(t, e) || n), (t.style[e] = r)),
            eO((o = [r, n])),
            (r = o[0]),
            (n = o[1]),
            (u = r.match(tt) || []),
            (n.match(tt) || []).length)
          ) {
            for (; (a = tt.exec(n)); )
              (f = a[0]),
                (p = n.substring(v, a.index)),
                c
                  ? (c = (c + 1) % 5)
                  : ("rgba(" === p.substr(-5) || "hsla(" === p.substr(-5)) &&
                    (c = 1),
                f !== (h = u[y++] || "") &&
                  ((l = parseFloat(h) || 0),
                  (g = h.substr((l + "").length)),
                  "=" === f.charAt(1) && (f = tM(l, f) + g),
                  (d = parseFloat(f)),
                  (m = f.substr((d + "").length)),
                  (v = tt.lastIndex - m.length),
                  m ||
                    ((m = m || L.units[e] || g),
                    v !== n.length || ((n += m), (_.e += m))),
                  g !== m && (l = nh(t, e, h, m) || 0),
                  (_._pt = {
                    _next: _._pt,
                    p: p || 1 === y ? p : ",",
                    s: l,
                    c: d - l,
                    m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
                  }));
            _.c = v < n.length ? n.substring(v, n.length) : "";
          } else _.r = "display" === e && "none" === n ? rZ : rG;
          return tr.test(n) && (_.e = 0), (this._pt = _), _;
        },
        np = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        nm = function (t) {
          var e = t.split(" "),
            r = e[0],
            n = e[1] || "50%";
          return (
            ("top" === r || "bottom" === r || "left" === n || "right" === n) &&
              ((t = r), (r = n), (n = t)),
            (e[0] = np[r] || r),
            (e[1] = np[n] || n),
            e.join(" ")
          );
        },
        ng = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var r,
              n,
              i,
              s = e.t,
              o = s.style,
              a = e.u,
              u = s._gsap;
            if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
            else
              for (i = (a = a.split(",")).length; --i > -1; )
                rz[(r = a[i])] &&
                  ((n = 1), (r = "transformOrigin" === r ? r5 : r2)),
                  na(s, r);
            n &&
              (na(s, r2),
              u &&
                (u.svg && s.removeAttribute("transform"),
                nE(s, 1),
                (u.uncache = 1),
                r8(o)));
          }
        },
        n_ = {
          clearProps: function (t, e, r, n, i) {
            if ("isFromStart" !== i.data) {
              var s = (t._pt = new rp(t._pt, e, r, 0, 0, ng));
              return (
                (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1
              );
            }
          },
        },
        nv = [1, 0, 0, 1, 0, 0],
        ny = {},
        nw = function (t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        nb = function (t) {
          var e = r7(t, r2);
          return nw(e) ? nv : e.substr(7).match(K).map(tS);
        },
        nx = function (t, e) {
          var r,
            n,
            i,
            s,
            o = t._gsap || tE(t),
            a = t.style,
            u = nb(t);
          return o.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (u = [
                (i = t.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(",")
              ? nv
              : u
            : (u !== nv ||
                t.offsetParent ||
                t === rR ||
                o.svg ||
                ((i = a.display),
                (a.display = "block"),
                ((r = t.parentNode) && t.offsetParent) ||
                  ((s = 1), (n = t.nextElementSibling), rR.appendChild(t)),
                (u = nb(t)),
                i ? (a.display = i) : na(t, "display"),
                s &&
                  (n
                    ? r.insertBefore(t, n)
                    : r
                    ? r.appendChild(t)
                    : rR.removeChild(t))),
              e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        },
        nT = function (t, e, r, n, i, s) {
          var o,
            a,
            u,
            l,
            c = t._gsap,
            h = i || nx(t, !0),
            f = c.xOrigin || 0,
            d = c.yOrigin || 0,
            p = c.xOffset || 0,
            m = c.yOffset || 0,
            g = h[0],
            _ = h[1],
            v = h[2],
            y = h[3],
            w = h[4],
            b = h[5],
            x = e.split(" "),
            T = parseFloat(x[0]) || 0,
            E = parseFloat(x[1]) || 0;
          r
            ? h !== nv &&
              (a = g * y - _ * v) &&
              ((u = T * (y / a) + E * (-v / a) + (v * b - y * w) / a),
              (l = T * (-_ / a) + E * (g / a) - (g * b - _ * w) / a),
              (T = u),
              (E = l))
            : ((T =
                (o = ns(t)).x + (~x[0].indexOf("%") ? (T / 100) * o.width : T)),
              (E =
                o.y +
                (~(x[1] || x[0]).indexOf("%") ? (E / 100) * o.height : E))),
            n || (!1 !== n && c.smooth)
              ? ((w = T - f),
                (b = E - d),
                (c.xOffset = p + (w * g + b * v) - w),
                (c.yOffset = m + (w * _ + b * y) - b))
              : (c.xOffset = c.yOffset = 0),
            (c.xOrigin = T),
            (c.yOrigin = E),
            (c.smooth = !!n),
            (c.origin = e),
            (c.originIsAbsolute = !!r),
            (t.style[r5] = "0px 0px"),
            s &&
              (nu(s, c, "xOrigin", f, T),
              nu(s, c, "yOrigin", d, E),
              nu(s, c, "xOffset", p, c.xOffset),
              nu(s, c, "yOffset", m, c.yOffset)),
            t.setAttribute("data-svg-origin", T + " " + E);
        },
        nE = function (t, e) {
          var r = t._gsap || new eW(t);
          if ("x" in r && !e && !r.uncache) return r;
          var n,
            i,
            s,
            o,
            a,
            u,
            l,
            c,
            h,
            f,
            d,
            p,
            m,
            g,
            _,
            v,
            y,
            w,
            b,
            x,
            T,
            E,
            k,
            C,
            S,
            O,
            M,
            R,
            P,
            A,
            j,
            D,
            z = t.style,
            N = r.scaleX < 0,
            I = getComputedStyle(t),
            F = r7(t, r5) || "0";
          return (
            (n = i = s = u = l = c = h = f = d = 0),
            (o = a = 1),
            (r.svg = !!(t.getCTM && no(t))),
            I.translate &&
              (("none" !== I.translate ||
                "none" !== I.scale ||
                "none" !== I.rotate) &&
                (z[r2] =
                  ("none" !== I.translate
                    ? "translate3d(" +
                      (I.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== I.rotate ? "rotate(" + I.rotate + ") " : "") +
                  ("none" !== I.scale
                    ? "scale(" + I.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== I[r2] ? I[r2] : "")),
              (z.scale = z.rotate = z.translate = "none")),
            (g = nx(t, r.svg)),
            r.svg &&
              (r.uncache
                ? ((S = t.getBBox()),
                  (F = r.xOrigin - S.x + "px " + (r.yOrigin - S.y) + "px"),
                  (C = ""))
                : (C = !e && t.getAttribute("data-svg-origin")),
              nT(t, C || F, !!C || r.originIsAbsolute, !1 !== r.smooth, g)),
            (p = r.xOrigin || 0),
            (m = r.yOrigin || 0),
            g !== nv &&
              ((w = g[0]),
              (b = g[1]),
              (x = g[2]),
              (T = g[3]),
              (n = E = g[4]),
              (i = k = g[5]),
              6 === g.length
                ? ((o = Math.sqrt(w * w + b * b)),
                  (a = Math.sqrt(T * T + x * x)),
                  (u = w || b ? rF(b, w) * rN : 0),
                  (h = x || T ? rF(x, T) * rN + u : 0) &&
                    (a *= Math.abs(Math.cos(h * rI))),
                  r.svg &&
                    ((n -= p - (p * w + m * x)), (i -= m - (p * b + m * T))))
                : ((D = g[6]),
                  (A = g[7]),
                  (M = g[8]),
                  (R = g[9]),
                  (P = g[10]),
                  (j = g[11]),
                  (n = g[12]),
                  (i = g[13]),
                  (s = g[14]),
                  (l = (_ = rF(D, P)) * rN),
                  _ &&
                    ((C = E * (v = Math.cos(-_)) + M * (y = Math.sin(-_))),
                    (S = k * v + R * y),
                    (O = D * v + P * y),
                    (M = -(E * y) + M * v),
                    (R = -(k * y) + R * v),
                    (P = -(D * y) + P * v),
                    (j = -(A * y) + j * v),
                    (E = C),
                    (k = S),
                    (D = O)),
                  (c = (_ = rF(-x, P)) * rN),
                  _ &&
                    ((C = w * (v = Math.cos(-_)) - M * (y = Math.sin(-_))),
                    (S = b * v - R * y),
                    (O = x * v - P * y),
                    (j = T * y + j * v),
                    (w = C),
                    (b = S),
                    (x = O)),
                  (u = (_ = rF(b, w)) * rN),
                  _ &&
                    ((v = Math.cos(_)),
                    (y = Math.sin(_)),
                    (C = w * v + b * y),
                    (S = E * v + k * y),
                    (b = b * v - w * y),
                    (k = k * v - E * y),
                    (w = C),
                    (E = S)),
                  l &&
                    Math.abs(l) + Math.abs(u) > 359.9 &&
                    ((l = u = 0), (c = 180 - c)),
                  (o = tS(Math.sqrt(w * w + b * b + x * x))),
                  (a = tS(Math.sqrt(k * k + D * D))),
                  (h = Math.abs((_ = rF(E, k))) > 2e-4 ? _ * rN : 0),
                  (d = j ? 1 / (j < 0 ? -j : j) : 0)),
              r.svg &&
                ((C = t.getAttribute("transform")),
                (r.forceCSS =
                  t.setAttribute("transform", "") || !nw(r7(t, r2))),
                C && t.setAttribute("transform", C))),
            Math.abs(h) > 90 &&
              270 > Math.abs(h) &&
              (N
                ? ((o *= -1),
                  (h += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((a *= -1), (h += h <= 0 ? 180 : -180))),
            (e = e || r.uncache),
            (r.x =
              n -
              ((r.xPercent =
                n &&
                ((!e && r.xPercent) ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                ? (t.offsetWidth * r.xPercent) / 100
                : 0) +
              "px"),
            (r.y =
              i -
              ((r.yPercent =
                i &&
                ((!e && r.yPercent) ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * r.yPercent) / 100
                : 0) +
              "px"),
            (r.z = s + "px"),
            (r.scaleX = tS(o)),
            (r.scaleY = tS(a)),
            (r.rotation = tS(u) + "deg"),
            (r.rotationX = tS(l) + "deg"),
            (r.rotationY = tS(c) + "deg"),
            (r.skewX = h + "deg"),
            (r.skewY = f + "deg"),
            (r.transformPerspective = d + "px"),
            (r.zOrigin = parseFloat(F.split(" ")[2]) || 0) && (z[r5] = nk(F)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = L.force3D),
            (r.renderTransform = r.svg ? nR : rD ? nM : nS),
            (r.uncache = 0),
            r
          );
        },
        nk = function (t) {
          return (t = t.split(" "))[0] + " " + t[1];
        },
        nC = function (t, e, r) {
          var n = en(e);
          return tS(parseFloat(e) + parseFloat(nh(t, "x", r + "px", n))) + n;
        },
        nS = function (t, e) {
          (e.z = "0px"),
            (e.rotationY = e.rotationX = "0deg"),
            (e.force3D = 0),
            nM(t, e);
        },
        nO = "0deg",
        nM = function (t, e) {
          var r = e || this,
            n = r.xPercent,
            i = r.yPercent,
            s = r.x,
            o = r.y,
            a = r.z,
            u = r.rotation,
            l = r.rotationY,
            c = r.rotationX,
            h = r.skewX,
            f = r.skewY,
            d = r.scaleX,
            p = r.scaleY,
            m = r.transformPerspective,
            g = r.force3D,
            _ = r.target,
            v = r.zOrigin,
            y = "",
            w = ("auto" === g && t && 1 !== t) || !0 === g;
          if (v && (c !== nO || l !== nO)) {
            var b,
              x = parseFloat(l) * rI,
              T = Math.sin(x),
              E = Math.cos(x);
            (s = nC(_, s, -(T * (b = Math.cos((x = parseFloat(c) * rI))) * v))),
              (o = nC(_, o, -(-Math.sin(x) * v))),
              (a = nC(_, a, -(E * b * v) + v));
          }
          "0px" !== m && (y += "perspective(" + m + ") "),
            (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
            (w || "0px" !== s || "0px" !== o || "0px" !== a) &&
              (y +=
                "0px" !== a || w
                  ? "translate3d(" + s + ", " + o + ", " + a + ") "
                  : "translate(" + s + ", " + o + ") "),
            u !== nO && (y += "rotate(" + u + ") "),
            l !== nO && (y += "rotateY(" + l + ") "),
            c !== nO && (y += "rotateX(" + c + ") "),
            (h !== nO || f !== nO) && (y += "skew(" + h + ", " + f + ") "),
            (1 !== d || 1 !== p) && (y += "scale(" + d + ", " + p + ") "),
            (_.style[r2] = y || "translate(0, 0)");
        },
        nR = function (t, e) {
          var r,
            n,
            i,
            s,
            o,
            a = e || this,
            u = a.xPercent,
            l = a.yPercent,
            c = a.x,
            h = a.y,
            f = a.rotation,
            d = a.skewX,
            p = a.skewY,
            m = a.scaleX,
            g = a.scaleY,
            _ = a.target,
            v = a.xOrigin,
            y = a.yOrigin,
            w = a.xOffset,
            b = a.yOffset,
            x = a.forceCSS,
            T = parseFloat(c),
            E = parseFloat(h);
          (f = parseFloat(f)),
            (d = parseFloat(d)),
            (p = parseFloat(p)) && ((d += p = parseFloat(p)), (f += p)),
            f || d
              ? ((f *= rI),
                (d *= rI),
                (r = Math.cos(f) * m),
                (n = Math.sin(f) * m),
                (i = -(Math.sin(f - d) * g)),
                (s = Math.cos(f - d) * g),
                d &&
                  ((p *= rI),
                  (i *= o = Math.sqrt(1 + (o = Math.tan(d - p)) * o)),
                  (s *= o),
                  p &&
                    ((r *= o = Math.sqrt(1 + (o = Math.tan(p)) * o)),
                    (n *= o))),
                (r = tS(r)),
                (n = tS(n)),
                (i = tS(i)),
                (s = tS(s)))
              : ((r = m), (s = g), (n = i = 0)),
            ((T && !~(c + "").indexOf("px")) ||
              (E && !~(h + "").indexOf("px"))) &&
              ((T = nh(_, "x", c, "px")), (E = nh(_, "y", h, "px"))),
            (v || y || w || b) &&
              ((T = tS(T + v - (v * r + y * i) + w)),
              (E = tS(E + y - (v * n + y * s) + b))),
            (u || l) &&
              ((T = tS(T + (u / 100) * (o = _.getBBox()).width)),
              (E = tS(E + (l / 100) * o.height))),
            (o =
              "matrix(" +
              r +
              "," +
              n +
              "," +
              i +
              "," +
              s +
              "," +
              T +
              "," +
              E +
              ")"),
            _.setAttribute("transform", o),
            x && (_.style[r2] = o);
        },
        nP = function (t, e, r, n, i) {
          var s,
            o,
            a = Y(i),
            u = parseFloat(i) * (a && ~i.indexOf("rad") ? rN : 1) - n,
            l = n + u + "deg";
          return (
            a &&
              ("short" === (s = i.split("_")[1]) &&
                (u %= 360) != u % 180 &&
                (u += u < 0 ? 360 : -360),
              "cw" === s && u < 0
                ? (u = ((u + 36e9) % 360) - 360 * ~~(u / 360))
                : "ccw" === s &&
                  u > 0 &&
                  (u = ((u - 36e9) % 360) - 360 * ~~(u / 360))),
            (t._pt = o = new rp(t._pt, e, r, n, u, rq)),
            (o.e = l),
            (o.u = "deg"),
            t._props.push(r),
            o
          );
        },
        nA = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        nj = function (t, e, r) {
          var n,
            i,
            s,
            o,
            a,
            u,
            l,
            c = nA({}, r._gsap),
            h = r.style;
          for (i in (c.svg
            ? ((s = r.getAttribute("transform")),
              r.setAttribute("transform", ""),
              (h[r2] = e),
              (n = nE(r, 1)),
              na(r, r2),
              r.setAttribute("transform", s))
            : ((s = getComputedStyle(r)[r2]),
              (h[r2] = e),
              (n = nE(r, 1)),
              (h[r2] = s)),
          rz))
            (s = c[i]) !== (o = n[i]) &&
              0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) &&
              ((a = en(s) !== (l = en(o)) ? nh(r, i, s, l) : parseFloat(s)),
              (u = parseFloat(o)),
              (t._pt = new rp(t._pt, n, i, a, u - a, rW)),
              (t._pt.u = l || 0),
              t._props.push(i));
          nA(n, c);
        };
      tC("padding,margin,Width,Radius", function (t, e) {
        var r = "Right",
          n = "Bottom",
          i = "Left",
          s = (
            e < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]
          ).map(function (r) {
            return e < 2 ? t + r : "border" + r + t;
          });
        n_[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
          var o, a;
          if (arguments.length < 4)
            return 5 ===
              (a = (o = s.map(function (e) {
                return nf(t, e, r);
              })).join(" ")).split(o[0]).length
              ? o[0]
              : a;
          (o = (n + "").split(" ")),
            (a = {}),
            s.forEach(function (t, e) {
              return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
            }),
            t.init(e, a, i);
        };
      });
      var nL = {
        name: "css",
        register: nr,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, r, n, i) {
          var s,
            o,
            a,
            u,
            l,
            c,
            h,
            f,
            d,
            p,
            m,
            g,
            _,
            v,
            y,
            w,
            b = this._props,
            x = t.style,
            T = r.vars.startAt;
          for (h in (rP || nr(),
          (this.styles = this.styles || r6(t)),
          (w = this.styles.props),
          (this.tween = r),
          e))
            if (
              "autoRound" !== h &&
              ((o = e[h]), !(tv[h] && e2(h, e, r, n, t, i)))
            ) {
              if (
                ((l = typeof o),
                (c = n_[h]),
                "function" === l && (l = typeof (o = o.call(r, n, t, i))),
                "string" === l && ~o.indexOf("random(") && (o = ep(o)),
                c)
              )
                c(this, t, h, o, r) && (y = 1);
              else if ("--" === h.substr(0, 2))
                (s = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
                  (o += ""),
                  (eC.lastIndex = 0),
                  eC.test(s) || ((f = en(s)), (d = en(o))),
                  d ? f !== d && (s = nh(t, h, s, d) + d) : f && (o += f),
                  this.add(x, "setProperty", s, o, n, i, 0, 0, h),
                  b.push(h),
                  w.push(h, 0, x[h]);
              else if ("undefined" !== l) {
                if (
                  (T && h in T
                    ? (Y(
                        (s =
                          "function" == typeof T[h]
                            ? T[h].call(r, n, t, i)
                            : T[h])
                      ) &&
                        ~s.indexOf("random(") &&
                        (s = ep(s)),
                      en(s + "") || (s += L.units[h] || en(nf(t, h)) || ""),
                      "=" === (s + "").charAt(1) && (s = nf(t, h)))
                    : (s = nf(t, h)),
                  (u = parseFloat(s)),
                  (p =
                    "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) &&
                    (o = o.substr(2)),
                  (a = parseFloat(o)),
                  h in rH &&
                    ("autoAlpha" === h &&
                      (1 === u &&
                        "hidden" === nf(t, "visibility") &&
                        a &&
                        (u = 0),
                      w.push("visibility", 0, x.visibility),
                      nu(
                        this,
                        x,
                        "visibility",
                        u ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a
                      )),
                    "scale" !== h &&
                      "transform" !== h &&
                      ~(h = rH[h]).indexOf(",") &&
                      (h = h.split(",")[0])),
                  (m = h in rz))
                ) {
                  if (
                    (this.styles.save(h),
                    g ||
                      (((_ = t._gsap).renderTransform && !e.parseTransform) ||
                        nE(t, e.parseTransform),
                      (v = !1 !== e.smoothOrigin && _.smooth),
                      ((g = this._pt =
                        new rp(
                          this._pt,
                          x,
                          r2,
                          0,
                          1,
                          _.renderTransform,
                          _,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === h)
                  )
                    (this._pt = new rp(
                      this._pt,
                      _,
                      "scaleY",
                      _.scaleY,
                      (p ? tM(_.scaleY, p + a) : a) - _.scaleY || 0,
                      rW
                    )),
                      (this._pt.u = 0),
                      b.push("scaleY", h),
                      (h += "X");
                  else if ("transformOrigin" === h) {
                    w.push(r5, 0, x[r5]),
                      (o = nm(o)),
                      _.svg
                        ? nT(t, o, 0, v, 0, this)
                        : ((d = parseFloat(o.split(" ")[2]) || 0) !==
                            _.zOrigin && nu(this, _, "zOrigin", _.zOrigin, d),
                          nu(this, x, h, nk(s), nk(o)));
                    continue;
                  } else if ("svgOrigin" === h) {
                    nT(t, o, 1, v, 0, this);
                    continue;
                  } else if (h in ny) {
                    nP(this, _, h, u, p ? tM(u, p + o) : o);
                    continue;
                  } else if ("smoothOrigin" === h) {
                    nu(this, _, "smooth", _.smooth, o);
                    continue;
                  } else if ("force3D" === h) {
                    _[h] = o;
                    continue;
                  } else if ("transform" === h) {
                    nj(this, o, t);
                    continue;
                  }
                } else h in x || (h = ne(h) || h);
                if (
                  m ||
                  ((a || 0 === a) && (u || 0 === u) && !rY.test(o) && h in x)
                )
                  (f = (s + "").substr((u + "").length)),
                    a || (a = 0),
                    (d = en(o) || (h in L.units ? L.units[h] : f)),
                    f !== d && (u = nh(t, h, s, d)),
                    (this._pt = new rp(
                      this._pt,
                      m ? _ : x,
                      h,
                      u,
                      (p ? tM(u, p + a) : a) - u,
                      m || ("px" !== d && "zIndex" !== h) || !1 === e.autoRound
                        ? rW
                        : rX
                    )),
                    (this._pt.u = d || 0),
                    f !== d &&
                      "%" !== d &&
                      ((this._pt.b = s), (this._pt.r = rU));
                else if (h in x) nd.call(this, t, h, s, p ? p + o : o);
                else if (h in t) this.add(t, h, s || t[h], p ? p + o : o, n, i);
                else if ("parseTransform" !== h) {
                  tu(h, o);
                  continue;
                }
                m || (h in x ? w.push(h, 0, x[h]) : w.push(h, 1, s || t[h])),
                  b.push(h);
              }
            }
          y && rd(this);
        },
        render: function (t, e) {
          if (e.tween._time || !rL())
            for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
          else e.styles.revert();
        },
        get: nf,
        aliases: rH,
        getSetter: function (t, e, r) {
          var n = rH[e];
          return (
            n && 0 > n.indexOf(",") && (e = n),
            e in rz && e !== r5 && (t._gsap.x || nf(t, "x"))
              ? r && rj === r
                ? "scale" === e
                  ? rK
                  : rJ
                : ((rj = r || {}), "scale" === e ? r0 : r1)
              : t.style && !q(t.style[e])
              ? r$
              : ~e.indexOf("-")
              ? rQ
              : rs(t, e)
          );
        },
        core: { _removeProperty: na, _getMatrix: nx },
      };
      (rO.utils.checkPrefix = ne),
        (rO.core.getStyleSaver = r6),
        (a = tC(
          (s = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
            "," +
            (o = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (t) {
            rz[t] = 1;
          }
        )),
        tC(o, function (t) {
          (L.units[t] = "deg"), (ny[t] = 1);
        }),
        (rH[a[13]] = s + "," + o),
        tC(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (t) {
            var e = t.split(":");
            rH[e[1]] = a[e[0]];
          }
        ),
        tC(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (t) {
            L.units[t] = "px";
          }
        ),
        rO.registerPlugin(nL);
      var nD = rO.registerPlugin(nL) || rO;
      nD.core.Tween;
    },
    3454: function (t, e, r) {
      "use strict";
      var n, i;
      t.exports =
        (null == (n = r.g.process) ? void 0 : n.env) &&
        "object" == typeof (null == (i = r.g.process) ? void 0 : i.env)
          ? r.g.process
          : r(7663);
    },
    1118: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(9018);
        },
      ]);
    },
    3991: function (t, e) {
      "use strict";
      var r, n;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          PrefetchKind: function () {
            return r;
          },
          ACTION_REFRESH: function () {
            return i;
          },
          ACTION_NAVIGATE: function () {
            return s;
          },
          ACTION_RESTORE: function () {
            return o;
          },
          ACTION_SERVER_PATCH: function () {
            return a;
          },
          ACTION_PREFETCH: function () {
            return u;
          },
          ACTION_FAST_REFRESH: function () {
            return l;
          },
          ACTION_SERVER_ACTION: function () {
            return c;
          },
        });
      let i = "refresh",
        s = "navigate",
        o = "restore",
        a = "server-patch",
        u = "prefetch",
        l = "fast-refresh",
        c = "server-action";
      ((n = r || (r = {})).AUTO = "auto"),
        (n.FULL = "full"),
        (n.TEMPORARY = "temporary"),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    1516: function (t, e, r) {
      "use strict";
      function n(t, e, r, n) {
        return !1;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(2387),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    8872: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let n = r(8754),
        i = r(1757),
        s = i._(r(7294)),
        o = r(3935),
        a = n._(r(2636)),
        u = r(5471),
        l = r(3735),
        c = r(3341);
      r(4210);
      let h = r(9955),
        f = n._(r(7746)),
        d = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function p(t, e, r, n, i, s) {
        let o = null == t ? void 0 : t.src;
        if (!t || t["data-loaded-src"] === o) return;
        t["data-loaded-src"] = o;
        let a = "decode" in t ? t.decode() : Promise.resolve();
        a.catch(() => {}).then(() => {
          if (t.parentElement && t.isConnected) {
            if (("blur" === e && i(!0), null == r ? void 0 : r.current)) {
              let e = new Event("load");
              Object.defineProperty(e, "target", { writable: !1, value: t });
              let n = !1,
                i = !1;
              r.current({
                ...e,
                nativeEvent: e,
                currentTarget: t,
                target: t,
                isDefaultPrevented: () => n,
                isPropagationStopped: () => i,
                persist: () => {},
                preventDefault: () => {
                  (n = !0), e.preventDefault();
                },
                stopPropagation: () => {
                  (i = !0), e.stopPropagation();
                },
              });
            }
            (null == n ? void 0 : n.current) && n.current(t);
          }
        });
      }
      function m(t) {
        let [e, r] = s.version.split("."),
          n = parseInt(e, 10),
          i = parseInt(r, 10);
        return n > 18 || (18 === n && i >= 3)
          ? { fetchPriority: t }
          : { fetchpriority: t };
      }
      let g = (0, s.forwardRef)((t, e) => {
        let {
          src: r,
          srcSet: n,
          sizes: i,
          height: o,
          width: a,
          decoding: u,
          className: l,
          style: c,
          fetchPriority: h,
          placeholder: f,
          loading: d,
          unoptimized: g,
          fill: _,
          onLoadRef: v,
          onLoadingCompleteRef: y,
          setBlurComplete: w,
          setShowAltText: b,
          onLoad: x,
          onError: T,
          ...E
        } = t;
        return s.default.createElement("img", {
          ...E,
          ...m(h),
          loading: d,
          width: a,
          height: o,
          decoding: u,
          "data-nimg": _ ? "fill" : "1",
          className: l,
          style: c,
          sizes: i,
          srcSet: n,
          src: r,
          ref: (0, s.useCallback)(
            (t) => {
              e &&
                ("function" == typeof e
                  ? e(t)
                  : "object" == typeof e && (e.current = t)),
                t && (T && (t.src = t.src), t.complete && p(t, f, v, y, w, g));
            },
            [r, f, v, y, w, T, g, e]
          ),
          onLoad: (t) => {
            let e = t.currentTarget;
            p(e, f, v, y, w, g);
          },
          onError: (t) => {
            b(!0), "blur" === f && w(!0), T && T(t);
          },
        });
      });
      function _(t) {
        let { isAppRouter: e, imgAttributes: r } = t,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...m(r.fetchPriority),
          };
        return e
          ? ((0, o.preload)(r.src, n), null)
          : s.default.createElement(
              a.default,
              null,
              s.default.createElement("link", {
                key: "__nimg-" + r.src + r.srcSet + r.sizes,
                rel: "preload",
                href: r.srcSet ? void 0 : r.src,
                ...n,
              })
            );
      }
      let v = (0, s.forwardRef)((t, e) => {
        let r = (0, s.useContext)(h.RouterContext),
          n = (0, s.useContext)(c.ImageConfigContext),
          i = (0, s.useMemo)(() => {
            let t = d || n || l.imageConfigDefault,
              e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
              r = t.deviceSizes.sort((t, e) => t - e);
            return { ...t, allSizes: e, deviceSizes: r };
          }, [n]),
          { onLoad: o, onLoadingComplete: a } = t,
          p = (0, s.useRef)(o);
        (0, s.useEffect)(() => {
          p.current = o;
        }, [o]);
        let m = (0, s.useRef)(a);
        (0, s.useEffect)(() => {
          m.current = a;
        }, [a]);
        let [v, y] = (0, s.useState)(!1),
          [w, b] = (0, s.useState)(!1),
          { props: x, meta: T } = (0, u.getImgProps)(t, {
            defaultLoader: f.default,
            imgConf: i,
            blurComplete: v,
            showAltText: w,
          });
        return s.default.createElement(
          s.default.Fragment,
          null,
          s.default.createElement(g, {
            ...x,
            unoptimized: T.unoptimized,
            placeholder: T.placeholder,
            fill: T.fill,
            onLoadRef: p,
            onLoadingCompleteRef: m,
            setBlurComplete: y,
            setShowAltText: b,
            ref: e,
          }),
          T.priority
            ? s.default.createElement(_, { isAppRouter: !r, imgAttributes: x })
            : null
        );
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5569: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let n = r(8754),
        i = n._(r(7294)),
        s = r(4532),
        o = r(3353),
        a = r(1410),
        u = r(9064),
        l = r(370),
        c = r(9955),
        h = r(4224),
        f = r(508),
        d = r(1516),
        p = r(4266),
        m = r(3991),
        g = new Set();
      function _(t, e, r, n, i, s) {
        if (!s && !(0, o.isLocalURL)(e)) return;
        if (!n.bypassPrefetchedCheck) {
          let i =
              void 0 !== n.locale
                ? n.locale
                : "locale" in t
                ? t.locale
                : void 0,
            s = e + "%" + r + "%" + i;
          if (g.has(s)) return;
          g.add(s);
        }
        let a = s ? t.prefetch(e, i) : t.prefetch(e, r, n);
        Promise.resolve(a).catch((t) => {});
      }
      function v(t) {
        return "string" == typeof t ? t : (0, a.formatUrl)(t);
      }
      let y = i.default.forwardRef(function (t, e) {
          let r, n;
          let {
            href: a,
            as: g,
            children: y,
            prefetch: w = null,
            passHref: b,
            replace: x,
            shallow: T,
            scroll: E,
            locale: k,
            onClick: C,
            onMouseEnter: S,
            onTouchStart: O,
            legacyBehavior: M = !1,
            ...R
          } = t;
          (r = y),
            M &&
              ("string" == typeof r || "number" == typeof r) &&
              (r = i.default.createElement("a", null, r));
          let P = i.default.useContext(c.RouterContext),
            A = i.default.useContext(h.AppRouterContext),
            j = null != P ? P : A,
            L = !P,
            D = !1 !== w,
            z = null === w ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL,
            { href: N, as: I } = i.default.useMemo(() => {
              if (!P) {
                let t = v(a);
                return { href: t, as: g ? v(g) : t };
              }
              let [t, e] = (0, s.resolveHref)(P, a, !0);
              return { href: t, as: g ? (0, s.resolveHref)(P, g) : e || t };
            }, [P, a, g]),
            F = i.default.useRef(N),
            B = i.default.useRef(I);
          M && (n = i.default.Children.only(r));
          let V = M ? n && "object" == typeof n && n.ref : e,
            [Y, H, W] = (0, f.useIntersection)({ rootMargin: "200px" }),
            q = i.default.useCallback(
              (t) => {
                (B.current !== I || F.current !== N) &&
                  (W(), (B.current = I), (F.current = N)),
                  Y(t),
                  V &&
                    ("function" == typeof V
                      ? V(t)
                      : "object" == typeof V && (V.current = t));
              },
              [I, V, N, W, Y]
            );
          i.default.useEffect(() => {
            j && H && D && _(j, N, I, { locale: k }, { kind: z }, L);
          }, [I, N, H, k, D, null == P ? void 0 : P.locale, j, L, z]);
          let U = {
            ref: q,
            onClick(t) {
              M || "function" != typeof C || C(t),
                M &&
                  n.props &&
                  "function" == typeof n.props.onClick &&
                  n.props.onClick(t),
                j &&
                  !t.defaultPrevented &&
                  (function (t, e, r, n, s, a, u, l, c, h) {
                    let { nodeName: f } = t.currentTarget,
                      d = "A" === f.toUpperCase();
                    if (
                      d &&
                      ((function (t) {
                        let e = t.currentTarget,
                          r = e.getAttribute("target");
                        return (
                          (r && "_self" !== r) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which)
                        );
                      })(t) ||
                        (!c && !(0, o.isLocalURL)(r)))
                    )
                      return;
                    t.preventDefault();
                    let p = () => {
                      let t = null == u || u;
                      "beforePopState" in e
                        ? e[s ? "replace" : "push"](r, n, {
                            shallow: a,
                            locale: l,
                            scroll: t,
                          })
                        : e[s ? "replace" : "push"](n || r, {
                            forceOptimisticNavigation: !h,
                            scroll: t,
                          });
                    };
                    c ? i.default.startTransition(p) : p();
                  })(t, j, N, I, x, T, E, k, L, D);
            },
            onMouseEnter(t) {
              M || "function" != typeof S || S(t),
                M &&
                  n.props &&
                  "function" == typeof n.props.onMouseEnter &&
                  n.props.onMouseEnter(t),
                j &&
                  (D || !L) &&
                  _(
                    j,
                    N,
                    I,
                    { locale: k, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: z },
                    L
                  );
            },
            onTouchStart(t) {
              M || "function" != typeof O || O(t),
                M &&
                  n.props &&
                  "function" == typeof n.props.onTouchStart &&
                  n.props.onTouchStart(t),
                j &&
                  (D || !L) &&
                  _(
                    j,
                    N,
                    I,
                    { locale: k, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: z },
                    L
                  );
            },
          };
          if ((0, u.isAbsoluteUrl)(I)) U.href = I;
          else if (!M || b || ("a" === n.type && !("href" in n.props))) {
            let t = void 0 !== k ? k : null == P ? void 0 : P.locale,
              e =
                (null == P ? void 0 : P.isLocaleDomain) &&
                (0, d.getDomainLocale)(
                  I,
                  t,
                  null == P ? void 0 : P.locales,
                  null == P ? void 0 : P.domainLocales
                );
            U.href =
              e ||
              (0, p.addBasePath)(
                (0, l.addLocale)(I, t, null == P ? void 0 : P.defaultLocale)
              );
          }
          return M
            ? i.default.cloneElement(n, U)
            : i.default.createElement("a", { ...R, ...U }, r);
        }),
        w = y;
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    508: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useIntersection", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = r(7294),
        i = r(29),
        s = "function" == typeof IntersectionObserver,
        o = new Map(),
        a = [];
      function u(t) {
        let { rootRef: e, rootMargin: r, disabled: u } = t,
          l = u || !s,
          [c, h] = (0, n.useState)(!1),
          f = (0, n.useRef)(null),
          d = (0, n.useCallback)((t) => {
            f.current = t;
          }, []);
        (0, n.useEffect)(() => {
          if (s) {
            if (l || c) return;
            let t = f.current;
            if (t && t.tagName) {
              let n = (function (t, e, r) {
                let {
                  id: n,
                  observer: i,
                  elements: s,
                } = (function (t) {
                  let e;
                  let r = { root: t.root || null, margin: t.rootMargin || "" },
                    n = a.find(
                      (t) => t.root === r.root && t.margin === r.margin
                    );
                  if (n && (e = o.get(n))) return e;
                  let i = new Map(),
                    s = new IntersectionObserver((t) => {
                      t.forEach((t) => {
                        let e = i.get(t.target),
                          r = t.isIntersecting || t.intersectionRatio > 0;
                        e && r && e(r);
                      });
                    }, t);
                  return (
                    (e = { id: r, observer: s, elements: i }),
                    a.push(r),
                    o.set(r, e),
                    e
                  );
                })(r);
                return (
                  s.set(t, e),
                  i.observe(t),
                  function () {
                    if ((s.delete(t), i.unobserve(t), 0 === s.size)) {
                      i.disconnect(), o.delete(n);
                      let t = a.findIndex(
                        (t) => t.root === n.root && t.margin === n.margin
                      );
                      t > -1 && a.splice(t, 1);
                    }
                  }
                );
              })(t, (t) => t && h(t), {
                root: null == e ? void 0 : e.current,
                rootMargin: r,
              });
              return n;
            }
          } else if (!c) {
            let t = (0, i.requestIdleCallback)(() => h(!0));
            return () => (0, i.cancelIdleCallback)(t);
          }
        }, [l, r, e, c, f.current]);
        let p = (0, n.useCallback)(() => {
          h(!1);
        }, []);
        return [d, c, p];
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5677: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          noSSR: function () {
            return o;
          },
          default: function () {
            return a;
          },
        });
      let n = r(8754),
        i = (r(7294), n._(r(8976)));
      function s(t) {
        return { default: (null == t ? void 0 : t.default) || t };
      }
      function o(t, e) {
        return delete e.webpack, delete e.modules, t(e);
      }
      function a(t, e) {
        let r = i.default,
          n = {
            loading: (t) => {
              let { error: e, isLoading: r, pastDelay: n } = t;
              return null;
            },
          };
        t instanceof Promise
          ? (n.loader = () => t)
          : "function" == typeof t
          ? (n.loader = t)
          : "object" == typeof t && (n = { ...n, ...t }),
          (n = { ...n, ...e });
        let a = n.loader;
        return (n.loadableGenerated &&
          ((n = { ...n, ...n.loadableGenerated }), delete n.loadableGenerated),
        "boolean" != typeof n.ssr || n.ssr)
          ? r({
              ...n,
              loader: () =>
                null != a ? a().then(s) : Promise.resolve(s(() => null)),
            })
          : (delete n.webpack, delete n.modules, o(r, n));
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5471: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        r(4210);
      let n = r(7757),
        i = r(3735);
      function s(t) {
        return void 0 !== t.default;
      }
      function o(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function a(t, e) {
        var r;
        let a,
          u,
          l,
          {
            src: c,
            sizes: h,
            unoptimized: f = !1,
            priority: d = !1,
            loading: p,
            className: m,
            quality: g,
            width: _,
            height: v,
            fill: y = !1,
            style: w,
            onLoad: b,
            onLoadingComplete: x,
            placeholder: T = "empty",
            blurDataURL: E,
            fetchPriority: k,
            layout: C,
            objectFit: S,
            objectPosition: O,
            lazyBoundary: M,
            lazyRoot: R,
            ...P
          } = t,
          { imgConf: A, showAltText: j, blurComplete: L, defaultLoader: D } = e,
          z = A || i.imageConfigDefault;
        if ("allSizes" in z) a = z;
        else {
          let t = [...z.deviceSizes, ...z.imageSizes].sort((t, e) => t - e),
            e = z.deviceSizes.sort((t, e) => t - e);
          a = { ...z, allSizes: t, deviceSizes: e };
        }
        let N = P.loader || D;
        delete P.loader, delete P.srcSet;
        let I = "__next_img_default" in N;
        if (I) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let t = N;
          N = (e) => {
            let { config: r, ...n } = e;
            return t(n);
          };
        }
        if (C) {
          "fill" === C && (y = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[C];
          t && (w = { ...w, ...t });
          let e = { responsive: "100vw", fill: "100vw" }[C];
          e && !h && (h = e);
        }
        let F = "",
          B = o(_),
          V = o(v);
        if ("object" == typeof (r = c) && (s(r) || void 0 !== r.src)) {
          let t = s(c) ? c.default : c;
          if (!t.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(t)
            );
          if (!t.height || !t.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(t)
            );
          if (
            ((u = t.blurWidth),
            (l = t.blurHeight),
            (E = E || t.blurDataURL),
            (F = t.src),
            !y)
          ) {
            if (B || V) {
              if (B && !V) {
                let e = B / t.width;
                V = Math.round(t.height * e);
              } else if (!B && V) {
                let e = V / t.height;
                B = Math.round(t.width * e);
              }
            } else (B = t.width), (V = t.height);
          }
        }
        let Y = !d && ("lazy" === p || void 0 === p);
        (!(c = "string" == typeof c ? c : F) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((f = !0), (Y = !1)),
          a.unoptimized && (f = !0),
          I && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (f = !0),
          d && (k = "high");
        let H = o(g),
          W = Object.assign(
            y
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: S,
                  objectPosition: O,
                }
              : {},
            j ? {} : { color: "transparent" },
            w
          ),
          q =
            "blur" === T && E && !L
              ? {
                  backgroundSize: W.objectFit || "cover",
                  backgroundPosition: W.objectPosition || "50% 50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    'url("data:image/svg+xml;charset=utf-8,' +
                    (0, n.getImageBlurSvg)({
                      widthInt: B,
                      heightInt: V,
                      blurWidth: u,
                      blurHeight: l,
                      blurDataURL: E,
                      objectFit: W.objectFit,
                    }) +
                    '")',
                }
              : {},
          U = (function (t) {
            let {
              config: e,
              src: r,
              unoptimized: n,
              width: i,
              quality: s,
              sizes: o,
              loader: a,
            } = t;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: u, kind: l } = (function (t, e, r) {
                let { deviceSizes: n, allSizes: i } = t;
                if (r) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let n; (n = t.exec(r)); n) e.push(parseInt(n[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: i.filter((e) => e >= n[0] * t),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                if ("number" != typeof e) return { widths: n, kind: "w" };
                let s = [
                  ...new Set(
                    [e, 2 * e].map(
                      (t) => i.find((e) => e >= t) || i[i.length - 1]
                    )
                  ),
                ];
                return { widths: s, kind: "x" };
              })(e, i, o),
              c = u.length - 1;
            return {
              sizes: o || "w" !== l ? o : "100vw",
              srcSet: u
                .map(
                  (t, n) =>
                    a({ config: e, src: r, quality: s, width: t }) +
                    " " +
                    ("w" === l ? t : n + 1) +
                    l
                )
                .join(", "),
              src: a({ config: e, src: r, quality: s, width: u[c] }),
            };
          })({
            config: a,
            src: c,
            unoptimized: f,
            width: B,
            quality: H,
            sizes: h,
            loader: N,
          }),
          X = {
            ...P,
            loading: Y ? "lazy" : p,
            fetchPriority: k,
            width: B,
            height: V,
            decoding: "async",
            className: m,
            style: { ...W, ...q },
            sizes: U.sizes,
            srcSet: U.srcSet,
            src: U.src,
          },
          G = { unoptimized: f, priority: d, placeholder: T, fill: y };
        return { props: X, meta: G };
      }
    },
    7757: function (t, e) {
      "use strict";
      function r(t) {
        let {
            widthInt: e,
            heightInt: r,
            blurWidth: n,
            blurHeight: i,
            blurDataURL: s,
            objectFit: o,
          } = t,
          a = n ? 40 * n : e,
          u = i ? 40 * i : r,
          l = a && u ? "viewBox='0 0 " + a + " " + u + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          l +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (l
            ? "none"
            : "contain" === o
            ? "xMidYMid"
            : "cover" === o
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          s +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    2555: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          default: function () {
            return l;
          },
          unstable_getImgProps: function () {
            return u;
          },
        });
      let n = r(8754),
        i = r(5471),
        s = r(4210),
        o = r(8872),
        a = n._(r(7746)),
        u = (t) => {
          (0, s.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          let { props: e } = (0, i.getImgProps)(t, {
            defaultLoader: a.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [t, r] of Object.entries(e)) void 0 === r && delete e[t];
          return { props: e };
        },
        l = o.Image;
    },
    7746: function (t, e) {
      "use strict";
      function r(t) {
        let { config: e, src: r, width: n, quality: i } = t;
        return (
          e.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          n +
          "&q=" +
          (i || 75)
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    2254: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "LoadableContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(8754),
        i = n._(r(7294)),
        s = i.default.createContext(null);
    },
    8976: function (t, e, r) {
      "use strict";
      /**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/ Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let n = r(8754),
        i = n._(r(7294)),
        s = r(2254),
        o = [],
        a = [],
        u = !1;
      function l(t) {
        let e = t(),
          r = { loading: !0, loaded: null, error: null };
        return (
          (r.promise = e
            .then((t) => ((r.loading = !1), (r.loaded = t), t))
            .catch((t) => {
              throw ((r.loading = !1), (r.error = t), t);
            })),
          r
        );
      }
      class c {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 });
          let { _res: t, _opts: e } = this;
          t.loading &&
            ("number" == typeof e.delay &&
              (0 === e.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, e.delay))),
            "number" == typeof e.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, e.timeout))),
            this._res.promise
              .then(() => {
                this._update({}), this._clearTimeouts();
              })
              .catch((t) => {
                this._update({}), this._clearTimeouts();
              }),
            this._update({});
        }
        _update(t) {
          (this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...t,
          }),
            this._callbacks.forEach((t) => t());
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout);
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(t) {
          return (
            this._callbacks.add(t),
            () => {
              this._callbacks.delete(t);
            }
          );
        }
        constructor(t, e) {
          (this._loadFn = t),
            (this._opts = e),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
      }
      function h(t) {
        return (function (t, e) {
          let r = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              e
            ),
            n = null;
          function o() {
            if (!n) {
              let e = new c(t, r);
              n = {
                getCurrentValue: e.getCurrentValue.bind(e),
                subscribe: e.subscribe.bind(e),
                retry: e.retry.bind(e),
                promise: e.promise.bind(e),
              };
            }
            return n.promise();
          }
          if (!u) {
            let t = r.webpack ? r.webpack() : r.modules;
            t &&
              a.push((e) => {
                for (let r of t) if (e.includes(r)) return o();
              });
          }
          function l(t, e) {
            !(function () {
              o();
              let t = i.default.useContext(s.LoadableContext);
              t &&
                Array.isArray(r.modules) &&
                r.modules.forEach((e) => {
                  t(e);
                });
            })();
            let a = i.default.useSyncExternalStore(
              n.subscribe,
              n.getCurrentValue,
              n.getCurrentValue
            );
            return (
              i.default.useImperativeHandle(e, () => ({ retry: n.retry }), []),
              i.default.useMemo(() => {
                var e;
                return a.loading || a.error
                  ? i.default.createElement(r.loading, {
                      isLoading: a.loading,
                      pastDelay: a.pastDelay,
                      timedOut: a.timedOut,
                      error: a.error,
                      retry: n.retry,
                    })
                  : a.loaded
                  ? i.default.createElement(
                      (e = a.loaded) && e.default ? e.default : e,
                      t
                    )
                  : null;
              }, [t, a])
            );
          }
          return (
            (l.preload = () => o()),
            (l.displayName = "LoadableComponent"),
            i.default.forwardRef(l)
          );
        })(l, t);
      }
      function f(t, e) {
        let r = [];
        for (; t.length; ) {
          let n = t.pop();
          r.push(n(e));
        }
        return Promise.all(r).then(() => {
          if (t.length) return f(t, e);
        });
      }
      (h.preloadAll = () =>
        new Promise((t, e) => {
          f(o).then(t, e);
        })),
        (h.preloadReady = (t) => (
          void 0 === t && (t = []),
          new Promise((e) => {
            let r = () => ((u = !0), e());
            f(a, t).then(r, r);
          })
        )),
        (window.__NEXT_PRELOADREADY = h.preloadReady);
      let d = h;
    },
    352: function (t, e, r) {
      "use strict";
      var n = r(5893),
        i = r(1831);
      e.Z = (t) => {
        let { mode: e = "light" } = t;
        return (0, n.jsxs)("div", {
          className:
            "w-full h-[0.7rem] relative flex items-center line-separator",
          children: [
            (0, n.jsx)("div", {
              className:
                "absolute z-1 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.7rem] h-full svg-wrapper",
              children: (0, n.jsx)(i.Z, {
                color: "light" === e ? "#fff" : "#575349",
              }),
            }),
            (0, n.jsx)("div", {
              className: "w-full h-px ".concat(
                "light" === e ? "bg-light_beige" : "bg-dark_grey",
                " opacity-10"
              ),
            }),
          ],
        });
      };
    },
    4179: function (t, e, r) {
      "use strict";
      var n = r(5893),
        i = r(3470);
      r(7294);
      var s = r(8266);
      e.Z = (t) => {
        let { children: e, field: r, popup: o = !1, ...a } = t,
          u = (0, s.o)((t) => t.setCurrentTransition);
        return (0, n.jsx)(i.f, {
          onClick: () => {
            u(o ? "popup" : "fade");
          },
          field: r,
          ...a,
          scroll: !1,
          ...((null == r ? void 0 : r.link_type) !== "Web" &&
            o && { prefetch: !1 }),
          children: e,
        });
      };
    },
    5600: function (t, e, r) {
      "use strict";
      var n = r(5893),
        i = r(7294),
        s = r(9010),
        o = r(6038),
        a = r(8266),
        u = r(2099);
      e.Z = (t) => {
        let {
            size: e = "small",
            children: r,
            name: l,
            background: c = !0,
            customLoading: h = null,
            wrapperClass: f = null,
            keepContent: d = !1,
          } = t,
          p = (0, i.useRef)(!1),
          m = (0, i.useRef)(!1),
          g = (0, i.useRef)(!1),
          _ = (0, i.useRef)(!1),
          v = (0, i.useRef)(!1),
          y = (0, i.useRef)(!1),
          w = (0, i.useRef)(!1),
          [b, x] = (0, i.useState)(!0),
          T = (0, a.o)((t) => t.setHeaderVisible),
          E = (0, i.useRef)(null),
          k = (0, i.useRef)(null),
          [C, S] = (0, i.useState)(0),
          O = (t) => {
            w.current && "Escape" === t.key && P();
          },
          M = () => {
            x(!1),
              T(!1),
              (0, u.RE)(k.current),
              (E.current = o.p8.timeline({
                onStart: () => {
                  (w.current = !0),
                    (document.body.style.overflow = "hidden"),
                    g && (g.current.style.pointerEvents = "all"),
                    window.dispatchEvent(new CustomEvent("stop-scroll")),
                    window.dispatchEvent(new CustomEvent("popup-opened"));
                },
              })),
              E.current.to(p.current, {
                x: 0,
                ease: "expo.out",
                duration: 0.8,
              }),
              E.current.to(
                m.current,
                { autoAlpha: 0.95, ease: "power3.out", duration: 0.8 },
                0
              ),
              E.current.fromTo(
                v.current,
                { x: y.current },
                { x: 0, delay: 0.2, duration: 0.6, ease: "expo.out" },
                0
              );
          },
          R = (t) => {
            t.detail.name === l && (null === h || h) && M();
          },
          P = function () {
            let t =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0];
            w.current &&
              ((0, u.RE)(E.current),
              (k.current = o.p8.timeline({
                onStart: () => {
                  (w.current = !1),
                    (document.body.style.overflow = "auto"),
                    g.current && (g.current.style.pointerEvents = "none"),
                    window.dispatchEvent(new CustomEvent("start-scroll")),
                    t && window.dispatchEvent(new CustomEvent("popup-closed"));
                },
                onComplete: () => {
                  x(!0);
                },
              })),
              p.current &&
                k.current.to(p.current, {
                  x: "100%",
                  ease: "expo.out",
                  duration: 0.8,
                }),
              m.current &&
                k.current.to(
                  m.current,
                  { autoAlpha: 0, ease: "power3.out", duration: 0.8 },
                  0
                ),
              v.current &&
                k.current.to(
                  v.current,
                  {
                    x: null == y ? void 0 : y.current,
                    duration: 0.6,
                    ease: "expo.out",
                  },
                  0
                ),
              k.current.call(
                () => {
                  T(!0);
                },
                [],
                0.4
              ));
          },
          A = () => {
            y.current =
              window.innerWidth - _.current.getBoundingClientRect().left;
            let t = w.current ? 0 : y.current;
            o.p8.set(v.current, { x: t }), S(window.innerHeight);
          };
        return (
          (0, i.useEffect)(() => {
            y.current =
              window.innerWidth - _.current.getBoundingClientRect().left;
            let t = w.current ? 0 : y.current;
            o.p8.set(v.current, { x: t });
          }, []),
          (0, i.useEffect)(() => {
            window.addEventListener("back-close-popup", () => {
              P(!1);
            });
          }, []),
          (0, i.useEffect)(
            () => (
              _.current.addEventListener("click", P),
              m.current.addEventListener("click", P),
              window.addEventListener("open-popup", R),
              document.addEventListener("keydown", O),
              window.addEventListener("resize", A),
              () => {
                window.removeEventListener("open-popup", R),
                  _.current && _.current.removeEventListener("click", P),
                  m.current && m.current.removeEventListener("click", P),
                  window.removeEventListener("resize", A),
                  document.removeEventListener("keydown", O);
              }
            ),
            [C]
          ),
          (0, i.useEffect)(() => {
            h && M();
          }, [h]),
          (0, n.jsxs)("div", {
            ref: g,
            className:
              "fixed top-0 left-0 w-full z-11 pointer-events-none h-screen-mobile overflow-hidden popup ".concat(
                f && f + "-wrapper"
              ),
            "data-lenis-prevent": !0,
            onWheel: (t) => t.stopPropagation(),
            children: [
              (0, n.jsx)("div", {
                ref: m,
                className:
                  "cursor-pointer sticky left-0 top-0 w-full h-full opacity-0 bg-[#B8B0A5]/[0.8] backdrop-blur-[100px]",
              }),
              (0, n.jsx)("div", {
                ref: _,
                className: "group fixed ".concat(
                  "large" === e
                    ? "right-[1.2rem] md:right-[calc(80%+2rem)] lg:right-[calc(65%+2rem)] top-[1.2rem] md:top-[50vh]"
                    : "right-[1.2rem] md:right-[calc(80%+2rem)] lg:right-[calc(45.5%+2rem)] top-[1.6rem] md:top-1/2",
                  " w-[5.6rem] h-[5.6rem] md:w-[6.6rem] md:h-[6.6rem] md:-translate-y-1/2 cursor-pointer transition-transform duration-300 ease-out z-1 md:z-0 xl:hover:scale-[1.05]"
                ),
                children: (0, n.jsx)("div", {
                  ref: v,
                  className:
                    "flex justify-center items-center w-full h-full bg-white rounded-12",
                  children: (0, n.jsx)("div", {
                    className: "svg-wrapper w-[1.2rem]",
                    children: (0, n.jsx)(s.Z, {}),
                  }),
                }),
              }),
              (0, n.jsx)("div", {
                ref: p,
                className:
                  "absolute right-0 top-0 w-[calc(100vw_-_0.6rem)] h-full md:w-[80%] ".concat(
                    "large" === e ? "xl:w-[65%]" : "xl:w-[45.5%]",
                    " ml-auto translate-x-[100%] pr-[0.6rem] pt-[0.6rem] pb-[0.6rem] md:pr-10 md:pt-10 md:pb-10 overflow-auto overflow-x-hidden"
                  ),
                children: (0, n.jsxs)("div", {
                  className: "relative w-full min-h-full pb-20 ".concat(
                    c ? "bg-white" : "",
                    " rounded-18 overflow-hidden"
                  ),
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "absolute left-0 top-0 w-full h-full bg-dots bg-size-dots bg-repeat opacity-40 pointer-events-none",
                    }),
                    (0, n.jsx)("div", {
                      className: "relative z-1",
                      children: d ? r : !b && r,
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
    284: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return _;
        },
      });
      var n = r(5893),
        i = r(7294),
        s = () =>
          (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            children: (0, n.jsx)("path", {
              d: "M15.9817 8.2379C15.9817 4.05121 12.5877 0.657227 8.40098 0.657227C4.21429 0.657227 0.820312 4.05121 0.820312 8.2379C0.820312 12.0216 3.59244 15.1578 7.2165 15.7265V10.4292H5.29172V8.2379H7.2165V6.56778C7.2165 4.66788 8.34827 3.61843 10.0798 3.61843C10.909 3.61843 11.7767 3.76649 11.7767 3.76649V5.63204H10.8209C9.87921 5.63204 9.58546 6.21643 9.58546 6.81652V8.2379H11.6879L11.3518 10.4292H9.58546V15.7265C13.2095 15.1578 15.9817 12.0216 15.9817 8.2379Z",
              fill: "#575349",
            }),
          }),
        o = () =>
          (0, n.jsx)("svg", {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              d: "M0.763704 0.830078L6.02668 8.13753L0.730469 14.0788H1.92243L6.55926 8.87712L10.3057 14.0788H14.362L8.80289 6.36031L13.7326 0.830078H12.5406L8.27031 5.62071L4.82 0.830078H0.763704ZM2.51658 1.74181H4.38005L12.6088 13.1669H10.7454L2.51658 1.74181Z",
              fill: "#575349",
            }),
          }),
        a = r(2802),
        u = () =>
          (0, n.jsxs)("svg", {
            width: "14",
            height: "10",
            viewBox: "0 0 14 10",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "M1.23633 8.34153V1.8916C1.23633 1.33932 1.68404 0.891602 2.23633 0.891602H7.25906H12.2818C12.8341 0.891602 13.2818 1.33932 13.2818 1.8916V8.34153C13.2818 8.89382 12.8341 9.34153 12.2818 9.34153H2.23633C1.68404 9.34153 1.23633 8.89382 1.23633 8.34153Z",
                stroke: "#575349",
                strokeLinecap: "round",
              }),
              (0, n.jsx)("path", {
                d: "M1.48633 1.3418L6.841 4.99705C7.20028 5.24231 7.67691 5.22716 8.01989 4.95958L12.6572 1.3418",
                stroke: "#575349",
                strokeLinecap: "round",
              }),
            ],
          }),
        l = () =>
          (0, n.jsxs)("svg", {
            width: "14",
            height: "15",
            viewBox: "0 0 14 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "M4.29249 5.93798L2.68543 7.54504C1.44286 8.78761 1.44285 10.8022 2.68543 12.0448V12.0448C3.92801 13.2874 5.94263 13.2874 7.1852 12.0448L8.79226 10.4377",
                stroke: "#575349",
                strokeLinecap: "round",
              }),
              (0, n.jsx)("path", {
                d: "M10.0786 9.15187L11.6857 7.54481C12.9282 6.30223 12.9282 4.28761 11.6857 3.04504V3.04504C10.4431 1.80246 8.42847 1.80246 7.18589 3.04504L5.57883 4.6521",
                stroke: "#575349",
                strokeLinecap: "round",
              }),
              (0, n.jsx)("line", {
                x1: "6.2207",
                y1: "8.44426",
                x2: "8.08489",
                y2: "6.58007",
                stroke: "#575349",
                strokeLinecap: "round",
              }),
            ],
          }),
        c = r(26),
        h = r(352),
        f = r(8266),
        d = r(6038),
        p = r(2099),
        m = r(5591);
      let g = function () {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return fetch(...e).then((t) => t.json());
      };
      var _ = (t) => {
        let { page: e, tags: _ } = t,
          v = (0, f.o)((t) => t.windowWidth),
          [y, w] = (0, i.useState)(!1),
          [b, x] = (0, i.useState)(0),
          T = (0, i.useRef)([]),
          E = (0, i.useRef)([]),
          k = (0, i.useRef)(!1),
          C = (0, i.useRef)(!1),
          S = (0, i.useRef)(!1),
          O = (0, i.useRef)(!1),
          M = (0, i.useRef)(!1),
          R = (0, i.useRef)(!1),
          { data: P } = (0, m.ZP)("api/get-settings", g),
          A = (0, i.useCallback)(() => {
            d.ZP.set(E.current, { pointerEvents: "none" }),
              d.ZP.set(T.current, { alpha: 0 }),
              M.current || (M.current = r(8041)),
              R.current ||
                (R.current = M.current({ target: O.current, by: "chars" })[0]),
              d.ZP.set(R.current.chars, { alpha: 0 }),
              (k.current = !0);
          }, [v]),
          j = (t) => {
            navigator.clipboard.writeText(t),
              d.ZP.to(R.current.chars, {
                alpha: 1,
                onStart: () => {
                  d.ZP.effects.blink(R.current.chars);
                },
                ease: "none ",
              }),
              d.ZP.to(R.current.chars, {
                delay: 1.5,
                alpha: 0,
                stagger: 0.045,
                ease: "none",
                duration: 0,
              });
          };
        return (
          (0, i.useEffect)(() => {
            w(window.location.pathname);
          }),
          (0, i.useEffect)(() => {
            A();
          }, [v]),
          (0, n.jsxs)("section", {
            className: "flex items-center flex-col relative z-1 post-cover",
            children: [
              (0, n.jsx)("div", {
                className: "w-full p-[0.2rem]",
                children: (0, n.jsx)("div", {
                  className:
                    "relative w-full h-0 pb-[77%] lg:pb-[55%] overflow-hidden rounded-16",
                  onMouseEnter: () => x(1),
                  onMouseLeave: () => x(0),
                  children: (0, n.jsx)(c.Z, {
                    field: null == e ? void 0 : e.data.main_image,
                    className:
                      "absolute top-0 left-0 w-full h-full object-cover",
                    sizes: "(max-width: 768px) 96vw, 65vw",
                    fallbackAlt: "",
                    loading: "eager",
                    priority: !0,
                  }),
                }),
              }),
              (0, n.jsx)("h1", {
                className:
                  "w-full lg:w-[63%] pt-[5.6rem] lg:pt-[11.2rem] pb-[4rem] lg:pb-[10.9rem] px-container lg:px-0 font-headings text-32 lg:text-44 text-dark_grey leading-[94%] lg:leading-[86%] font-medium text-center -tracking-0.04",
                children: null == e ? void 0 : e.data.title,
              }),
              (0, n.jsxs)("div", {
                className:
                  "flex items-center justify-between w-full mb-[0.5rem] px-container",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "flex flex-wrap flex-[1] gap-x-[0.6rem] items-center",
                    children: [
                      (0, n.jsx)("span", {
                        className:
                          "font-body-mono text-10 text-dark_grey leading-[180%] uppercase tracking-0.05",
                        children: null == e ? void 0 : e.data.author,
                      }),
                      (0, n.jsx)("span", {
                        className:
                          "w-[0.2rem] h-[0.2rem] bg-dark_grey rounded-full",
                      }),
                      _ &&
                        _.map((t, e) =>
                          (0, n.jsx)(
                            "span",
                            {
                              className:
                                "font-body-mono text-10 text-dark_grey leading-[180%] uppercase tracking-0.05",
                              children: t,
                            },
                            "tag-".concat(e)
                          )
                        ),
                      (0, n.jsx)("span", {
                        className:
                          "w-[0.2rem] h-[0.2rem] bg-dark_grey rounded-full",
                      }),
                      (0, n.jsx)("span", {
                        className:
                          "font-body-mono text-10 text-dark_grey leading-[180%] uppercase tracking-0.05",
                        children: new Date(
                          null == e ? void 0 : e.data.date
                        ).toLocaleDateString("en", {
                          month: "long",
                          year: "2-digit",
                          day: "2-digit",
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "relative flex items-center gap-x-[0.4rem]",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "absolute right-full top-0 flex flex-grow-0 gap-x-[0.4rem] pr-[0.4rem]",
                        ref: E,
                        children: [
                          (0, n.jsx)("a", {
                            href: "https://www.facebook.com/sharer.php?u="
                              .concat("https://pebblelife.com")
                              .concat(y),
                            className: "cursor-pointer svg-wrapper share-link",
                            ref: (t) => (T.current[0] = t),
                            children: (0, n.jsx)(s, {}),
                          }),
                          " ",
                          (0, n.jsx)("a", {
                            href: "https://twitter.com/intent/tweet?url="
                              .concat("https://pebblelife.com")
                              .concat(y),
                            className: "cursor-pointer svg-wrapper share-link",
                            ref: (t) => (T.current[1] = t),
                            children: (0, n.jsx)(o, {}),
                          }),
                          (0, n.jsx)("a", {
                            href: "https://www.linkedin.com/shareArticle?mini=true&url="
                              .concat("https://pebblelife.com")
                              .concat(y),
                            className: "cursor-pointer svg-wrapper share-link",
                            ref: (t) => (T.current[2] = t),
                            children: (0, n.jsx)(a.Z, {}),
                          }),
                          " ",
                          (0, n.jsx)("a", {
                            href: "mailto:?subject=Apt 24® - "
                              .concat(
                                null == e ? void 0 : e.data.title,
                                "&body="
                              )
                              .concat(
                                (null == P
                                  ? void 0
                                  : P.settings.data.email_sharing_text) ||
                                  "This article can interest you !",
                                " "
                              )
                              .concat("https://pebblelife.com")
                              .concat(y),
                            className: "cursor-pointer svg-wrapper share-link",
                            ref: (t) => (T.current[3] = t),
                            children: (0, n.jsx)(u, {}),
                          }),
                          (0, n.jsxs)("span", {
                            className:
                              "relative cursor-pointer svg-wrapper share-link",
                            onClick: () => j("https://pebblelife.com" + y),
                            ref: (t) => (T.current[4] = t),
                            children: [
                              (0, n.jsx)(l, {}),
                              (0, n.jsx)("span", {
                                className:
                                  "absolute -top-20 left-1/2 -translate-x-1/2 text-10 text-dark_grey font-body-mono leading-[180%] tracking-0.05 uppercase",
                                ref: O,
                                children: "Copied",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "flex items-center justify-center h-40 px-[1.4rem] rounded-[0.8rem] bg-light_beige font-body-mono text-10 leading-[180%] tracking-0.05 uppercase text-dark_grey text-center cursor-pointer",
                        onClick: () => {
                          (!(v <= 1024) || k) &&
                            (S.current && (0, p.RE)(S.current),
                            (S.current = d.ZP.timeline()),
                            C.current
                              ? ((C.current = !C.current),
                                S.current.set(E.current, {
                                  pointerEvents: "none",
                                }),
                                S.current.fromTo(
                                  T.current,
                                  { alpha: 1 },
                                  {
                                    alpha: 0,
                                    stagger: 0.03,
                                    duration: 0.5,
                                    ease: "power2.out",
                                  }
                                ))
                              : ((C.current = !C.current),
                                S.current.set(E.current, {
                                  pointerEvents: "auto",
                                }),
                                S.current.fromTo(
                                  T.current,
                                  { alpha: 0 },
                                  {
                                    alpha: 1,
                                    stagger: -0.07,
                                    duration: 0.8,
                                    ease: "power2.out",
                                  }
                                )));
                        },
                        children: "Share",
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "w-full px-container",
                children: (0, n.jsx)(h.Z, { mode: "dark" }),
              }),
            ],
          })
        );
      };
    },
    9010: function (t, e, r) {
      "use strict";
      var n = r(5893);
      e.Z = (t) => {
        let { stroke: e = "#575349" } = t;
        return (0, n.jsxs)("svg", {
          width: "9",
          height: "9",
          viewBox: "0 0 9 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, n.jsx)("line", {
              x1: "0.553993",
              y1: "0.646447",
              x2: "8.55399",
              y2: "8.64645",
              stroke: e,
            }),
            (0, n.jsx)("line", {
              y1: "-0.5",
              x2: "11.3137",
              y2: "-0.5",
              transform: "matrix(-0.707107 0.707107 0.707107 0.707107 9 1)",
              stroke: e,
            }),
          ],
        });
      };
    },
    1831: function (t, e, r) {
      "use strict";
      var n = r(5893);
      e.Z = (t) => {
        let { color: e = "#575349" } = t;
        return (0, n.jsxs)("svg", {
          width: "7",
          height: "7",
          viewBox: "0 0 7 7",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, n.jsx)("rect", { x: "3", width: "1", height: "7", fill: e }),
            (0, n.jsx)("rect", {
              x: "7",
              y: "3",
              width: "1",
              height: "7",
              transform: "rotate(90 7 3)",
              fill: e,
            }),
          ],
        });
      };
    },
    2802: function (t, e, r) {
      "use strict";
      var n = r(5893);
      e.Z = () =>
        (0, n.jsx)("svg", {
          width: "15",
          height: "16",
          viewBox: "0 0 15 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, n.jsx)("path", {
            d: "M13.8878 0.500977H1.10728C0.495053 0.500977 0 0.984312 0 1.58189V14.4152C0 15.0128 0.495053 15.499 1.10728 15.499H13.8878C14.5001 15.499 14.998 15.0128 14.998 14.4181V1.58189C14.998 0.984312 14.5001 0.500977 13.8878 0.500977ZM4.44962 13.2815H2.22334V6.12231H4.44962V13.2815ZM3.33648 5.14686C2.62173 5.14686 2.04466 4.56978 2.04466 3.85796C2.04466 3.14614 2.62173 2.56907 3.33648 2.56907C4.0483 2.56907 4.62537 3.14614 4.62537 3.85796C4.62537 4.56685 4.0483 5.14686 3.33648 5.14686ZM12.7806 13.2815H10.5572V9.80152C10.5572 8.97253 10.5426 7.90333 9.40014 7.90333C8.24307 7.90333 8.06731 8.80849 8.06731 9.74294V13.2815H5.8469V6.12231H7.97943V7.1007H8.00872C8.30458 6.53828 9.03105 5.94363 10.112 5.94363C12.3646 5.94363 12.7806 7.42586 12.7806 9.35334V13.2815Z",
            fill: "#575349",
          }),
        });
    },
    3297: function (t, e, r) {
      "use strict";
      var n = r(5893);
      e.Z = (t) => {
        let { fill: e = "#A39B8B" } = t;
        return (0, n.jsxs)("svg", {
          width: "56",
          height: "50",
          viewBox: "0 0 56 50",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, n.jsx)("path", {
              d: "M24.2053 18.8094L12.0537 23.2537C11.8635 23.3231 11.7014 23.4386 11.5876 23.586C11.4737 23.7333 11.413 23.9059 11.413 24.0824V49.9042H0V0H24.2053V18.8094Z",
              fill: e,
            }),
            (0, n.jsx)("path", {
              d: "M25.7002 20.2247L32.1673 17.8601V49.9042H13.5269V24.6773L25.6588 20.242L25.7002 20.2247Z",
              fill: e,
            }),
            (0, n.jsx)("path", {
              d: "M49.2149 49.9042H34.2812V17.9375L49.2149 24.171V49.9042Z",
              fill: e,
            }),
            (0, n.jsx)("path", {
            d: "M53.0471 47.5507H53.5327C53.6902 47.5507 53.8192 47.5307 53.9199 47.4908C54.0205 47.4509 54.0708 47.3551 54.0708 47.2034C54.0708 47.1355 54.0533 47.0816 54.0183 47.0417C53.9833 47.0018 53.9373 46.9718 53.8805 46.9519C53.828 46.9279 53.7667 46.9119 53.6967 46.9039C53.6311 46.896 53.5677 46.892 53.5064 46.892H53.0471V47.5507ZM52.5025 46.5027H53.5393C53.8849 46.5027 54.1495 46.5586 54.3333 46.6704C54.5214 46.7822 54.6154 46.9738 54.6154 47.2453C54.6154 47.3611 54.5957 47.4609 54.5564 47.5447C54.5214 47.6246 54.4711 47.6904 54.4054 47.7423C54.3398 47.7942 54.2633 47.8342 54.1758 47.8621C54.0883 47.89 53.9942 47.908 53.8936 47.916L54.6285 49.0119H54.0577L53.3883 47.94H53.0471V49.0119H52.5025V46.5027ZM51.6297 47.7603C51.6297 48.0158 51.6778 48.2514 51.7741 48.4669C51.8703 48.6825 52.0016 48.8702 52.1678 49.0299C52.334 49.1856 52.5287 49.3073 52.7518 49.3952C52.9793 49.483 53.2221 49.5269 53.4802 49.5269C53.7339 49.5269 53.9723 49.483 54.1955 49.3952C54.4229 49.3073 54.6198 49.1856 54.786 49.0299C54.9523 48.8702 55.0835 48.6825 55.1798 48.4669C55.2804 48.2514 55.3307 48.0158 55.3307 47.7603C55.3307 47.5048 55.2804 47.2712 55.1798 47.0596C55.0835 46.8441 54.9523 46.6584 54.786 46.5027C54.6198 46.347 54.4229 46.2252 54.1955 46.1374C53.9723 46.0496 53.7339 46.0057 53.4802 46.0057C53.2221 46.0057 52.9793 46.0496 52.7518 46.1374C52.5287 46.2252 52.334 46.347 52.1678 46.5027C52.0016 46.6584 51.8703 46.8441 51.7741 47.0596C51.6778 47.2712 51.6297 47.5048 51.6297 47.7603ZM50.9604 47.7603C50.9604 47.421 51.0282 47.1135 51.1638 46.8381C51.3038 46.5626 51.4897 46.329 51.7216 46.1374C51.9534 45.9418 52.2203 45.7921 52.5221 45.6883C52.8284 45.5805 53.1477 45.5266 53.4802 45.5266C53.8127 45.5266 54.1298 45.5805 54.4317 45.6883C54.7379 45.7921 55.007 45.9418 55.2388 46.1374C55.4707 46.329 55.6544 46.5626 55.79 46.8381C55.93 47.1135 56 47.421 56 47.7603C56 48.1036 55.93 48.413 55.79 48.6885C55.6544 48.964 55.4707 49.1995 55.2388 49.3952C55.007 49.5908 54.7379 49.7405 54.4317 49.8443C54.1298 49.9481 53.8127 50 53.4802 50C53.1477 50 52.8284 49.9481 52.5221 49.8443C52.2203 49.7405 51.9534 49.5908 51.7216 49.3952C51.4897 49.1995 51.3038 48.964 51.1638 48.6885C51.0282 48.413 50.9604 48.1036 50.9604 47.7603Z",
              fill: e,
            }),
          ],
        });
      };
    },
    2099: function (t, e, r) {
      "use strict";
      function n(t) {
        t && (t.pause(), t.invalidate(), t.kill());
      }
      function i(t) {
        let e = 1440;
        return (
          window.innerWidth < 1024 && window.innerWidth >= 768
            ? (e = 600)
            : window.innerWidth < 768 && (e = 375),
          t * (window.innerWidth / e)
        );
      }
      function s(t) {
        return String(t)
          .normalize("NFKD")
          .replace(/[\u0300-\u036f]/g, "")
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9 -]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-");
      }
      r.d(e, {
        RE: function () {
          return n;
        },
        lV: function () {
          return s;
        },
        z6: function () {
          return i;
        },
      });
    },
    9018: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return tt;
          },
        });
      var n,
        i,
        s = r(5893);
      r(7952);
      var o = r(9521),
        a = r.n(o),
        u = r(4347),
        l = r.n(u),
        c = r(6546),
        h = r.n(c);
      function f(t, e) {
        return (f = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function d(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          f(t, e);
      }
      var p = r(7294),
        m = r(3935),
        g = { disabled: !1 },
        _ = p.createContext(null),
        v = "unmounted",
        y = "exited",
        w = "entering",
        b = "entered",
        x = "exiting",
        T = (function (t) {
          function e(e, r) {
            n = t.call(this, e, r) || this;
            var n,
              i,
              s = r && !r.isMounting ? e.enter : e.appear;
            return (
              (n.appearStatus = null),
              e.in
                ? s
                  ? ((i = y), (n.appearStatus = w))
                  : (i = b)
                : (i = e.unmountOnExit || e.mountOnEnter ? v : y),
              (n.state = { status: i }),
              (n.nextCallback = null),
              n
            );
          }
          d(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              return t.in && e.status === v ? { status: y } : null;
            });
          var r = e.prototype;
          return (
            (r.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (r.componentDidUpdate = function (t) {
              var e = null;
              if (t !== this.props) {
                var r = this.state.status;
                this.props.in
                  ? r !== w && r !== b && (e = w)
                  : (r === w || r === b) && (e = x);
              }
              this.updateStatus(!1, e);
            }),
            (r.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (r.getTimeouts = function () {
              var t,
                e,
                r,
                n = this.props.timeout;
              return (
                (t = e = r = n),
                null != n &&
                  "number" != typeof n &&
                  ((t = n.exit),
                  (e = n.enter),
                  (r = void 0 !== n.appear ? n.appear : e)),
                { exit: t, enter: e, appear: r }
              );
            }),
            (r.updateStatus = function (t, e) {
              if ((void 0 === t && (t = !1), null !== e)) {
                if ((this.cancelNextCallback(), e === w)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var r = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : m.findDOMNode(this);
                    r && r.scrollTop;
                  }
                  this.performEnter(t);
                } else this.performExit();
              } else
                this.props.unmountOnExit &&
                  this.state.status === y &&
                  this.setState({ status: v });
            }),
            (r.performEnter = function (t) {
              var e = this,
                r = this.props.enter,
                n = this.context ? this.context.isMounting : t,
                i = this.props.nodeRef ? [n] : [m.findDOMNode(this), n],
                s = i[0],
                o = i[1],
                a = this.getTimeouts(),
                u = n ? a.appear : a.enter;
              if ((!t && !r) || g.disabled) {
                this.safeSetState({ status: b }, function () {
                  e.props.onEntered(s);
                });
                return;
              }
              this.props.onEnter(s, o),
                this.safeSetState({ status: w }, function () {
                  e.props.onEntering(s, o),
                    e.onTransitionEnd(u, function () {
                      e.safeSetState({ status: b }, function () {
                        e.props.onEntered(s, o);
                      });
                    });
                });
            }),
            (r.performExit = function () {
              var t = this,
                e = this.props.exit,
                r = this.getTimeouts(),
                n = this.props.nodeRef ? void 0 : m.findDOMNode(this);
              if (!e || g.disabled) {
                this.safeSetState({ status: y }, function () {
                  t.props.onExited(n);
                });
                return;
              }
              this.props.onExit(n),
                this.safeSetState({ status: x }, function () {
                  t.props.onExiting(n),
                    t.onTransitionEnd(r.exit, function () {
                      t.safeSetState({ status: y }, function () {
                        t.props.onExited(n);
                      });
                    });
                });
            }),
            (r.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (r.safeSetState = function (t, e) {
              (e = this.setNextCallback(e)), this.setState(t, e);
            }),
            (r.setNextCallback = function (t) {
              var e = this,
                r = !0;
              return (
                (this.nextCallback = function (n) {
                  r && ((r = !1), (e.nextCallback = null), t(n));
                }),
                (this.nextCallback.cancel = function () {
                  r = !1;
                }),
                this.nextCallback
              );
            }),
            (r.onTransitionEnd = function (t, e) {
              this.setNextCallback(e);
              var r = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : m.findDOMNode(this),
                n = null == t && !this.props.addEndListener;
              if (!r || n) {
                setTimeout(this.nextCallback, 0);
                return;
              }
              if (this.props.addEndListener) {
                var i = this.props.nodeRef
                    ? [this.nextCallback]
                    : [r, this.nextCallback],
                  s = i[0],
                  o = i[1];
                this.props.addEndListener(s, o);
              }
              null != t && setTimeout(this.nextCallback, t);
            }),
            (r.render = function () {
              var t = this.state.status;
              if (t === v) return null;
              var e = this.props,
                r = e.children,
                n =
                  (e.in,
                  e.mountOnEnter,
                  e.unmountOnExit,
                  e.appear,
                  e.enter,
                  e.exit,
                  e.timeout,
                  e.addEndListener,
                  e.onEnter,
                  e.onEntering,
                  e.onEntered,
                  e.onExit,
                  e.onExiting,
                  e.onExited,
                  e.nodeRef,
                  (function (t, e) {
                    if (null == t) return {};
                    var r,
                      n,
                      i = {},
                      s = Object.keys(t);
                    for (n = 0; n < s.length; n++)
                      e.indexOf((r = s[n])) >= 0 || (i[r] = t[r]);
                    return i;
                  })(e, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return p.createElement(
                _.Provider,
                { value: null },
                "function" == typeof r
                  ? r(t, n)
                  : p.cloneElement(p.Children.only(r), n)
              );
            }),
            e
          );
        })(p.Component);
      function E() {}
      (T.contextType = _),
        (T.propTypes = {}),
        (T.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: E,
          onEntering: E,
          onEntered: E,
          onExit: E,
          onExiting: E,
          onExited: E,
        }),
        (T.UNMOUNTED = v),
        (T.EXITED = y),
        (T.ENTERING = w),
        (T.ENTERED = b),
        (T.EXITING = x);
      var k = { out: "out-in", in: "in-out" },
        C = function (t, e, r) {
          return function () {
            var n;
            t.props[e] && (n = t.props)[e].apply(n, arguments), r();
          };
        },
        S =
          (((n = {})[k.out] = function (t) {
            var e = t.current,
              r = t.changeState;
            return p.cloneElement(e, {
              in: !1,
              onExited: C(e, "onExited", function () {
                r(w, null);
              }),
            });
          }),
          (n[k.in] = function (t) {
            var e = t.current,
              r = t.changeState,
              n = t.children;
            return [
              e,
              p.cloneElement(n, {
                in: !0,
                onEntered: C(n, "onEntered", function () {
                  r(w);
                }),
              }),
            ];
          }),
          n),
        O =
          (((i = {})[k.out] = function (t) {
            var e = t.children,
              r = t.changeState;
            return p.cloneElement(e, {
              in: !0,
              onEntered: C(e, "onEntered", function () {
                r(b, p.cloneElement(e, { in: !0 }));
              }),
            });
          }),
          (i[k.in] = function (t) {
            var e = t.current,
              r = t.children,
              n = t.changeState;
            return [
              p.cloneElement(e, {
                in: !1,
                onExited: C(e, "onExited", function () {
                  n(b, p.cloneElement(r, { in: !0 }));
                }),
              }),
              p.cloneElement(r, { in: !0 }),
            ];
          }),
          i),
        M = (function (t) {
          function e() {
            for (var e, r = arguments.length, n = Array(r), i = 0; i < r; i++)
              n[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(n)) || this).state = {
                status: b,
                current: null,
              }),
              (e.appeared = !1),
              (e.changeState = function (t, r) {
                void 0 === r && (r = e.state.current),
                  e.setState({ status: t, current: r });
              }),
              e
            );
          }
          d(e, t);
          var r = e.prototype;
          return (
            (r.componentDidMount = function () {
              this.appeared = !0;
            }),
            (e.getDerivedStateFromProps = function (t, e) {
              var r, n;
              return null == t.children
                ? { current: null }
                : e.status === w && t.mode === k.in
                ? { status: w }
                : e.current &&
                  !(
                    (r = e.current) === (n = t.children) ||
                    (p.isValidElement(r) &&
                      p.isValidElement(n) &&
                      null != r.key &&
                      r.key === n.key)
                  )
                ? { status: x }
                : { current: p.cloneElement(t.children, { in: !0 }) };
            }),
            (r.render = function () {
              var t,
                e = this.props,
                r = e.children,
                n = e.mode,
                i = this.state,
                s = i.status,
                o = i.current,
                a = {
                  children: r,
                  current: o,
                  changeState: this.changeState,
                  status: s,
                };
              switch (s) {
                case w:
                  t = O[n](a);
                  break;
                case x:
                  t = S[n](a);
                  break;
                case b:
                  t = o;
              }
              return p.createElement(
                _.Provider,
                { value: { isMounting: !this.appeared } },
                t
              );
            }),
            e
          );
        })(p.Component);
      (M.propTypes = {}), (M.defaultProps = { mode: k.out });
      var R = r(4508),
        P = r(6038),
        A = r(1163),
        j = r(8266);
      r(9010);
      var L = (t) => {
          let { children: e } = t,
            r = (0, p.useRef)(),
            n = (0, p.useRef)(!1),
            i = (0, p.useRef)(!1),
            o = (0, A.useRouter)(),
            a = (0, R.LZ)(),
            u = (0, j.o)((t) => t.setIsAppear),
            l = (0, j.o)((t) => t.animationContext),
            c = (0, j.o)((t) => t.currentTransition),
            f = (0, j.o)((t) => t.setStartTransition),
            d = () =>
              new Promise((t) => {
                t();
              }),
            m = () => {
              u(!1);
              let t = P.p8.timeline({
                defaults: { ease: "beaucoup.alpha", duration: 0.4 },
                onComplete: () => {
                  f(!0);
                },
              });
              l.kill(), l.clear(), t.to(r.current, { autoAlpha: 1 }, 0);
            };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                ref: n,
                children: (0, s.jsx)(M, {
                  children: (0, s.jsx)(
                    T,
                    {
                      timeout:
                        "popup" === c
                          ? { enter: 500, exit: 0 }
                          : "popup-reverse" === c
                          ? { enter: 0, exit: 500 }
                          : { enter: 300, exit: 350 },
                      onExit: () => {
                        a && a.stop(), m();
                      },
                      onEnter: () => {
                        h().killAll(),
                          a && a.scrollTo(0, { immediate: !0, force: !0 }),
                          d();
                      },
                      children: (0, s.jsx)("div", {
                        ref: i,
                        className: "page-wrapper",
                        children: e,
                      }),
                    },
                    o.asPath
                  ),
                }),
              }),
              (0, s.jsx)("div", {
                ref: r,
                className:
                  "fade fixed top-0 left-0 w-full h-screen bg-white pointer-events-none opacity-0 z-transition",
              }),
            ],
          });
        },
        D = () =>
          (0, s.jsx)("div", {
            className:
              "lg:hidden portrait:hidden font-body-mono text-10 leading-[1.8] tracking-0.05 uppercase bg-white text-black flex flex-col gap- items-center justify-center fixed top-0 text-center left-0 h-screen w-screen pointer-events-none z-[999]",
            children: (0, s.jsxs)("div", {
              children: [
                "Please rotate your device ",
                (0, s.jsx)("br", {}),
                " to portrait mode",
              ],
            }),
          }),
        z = (t) => {
          let { children: e } = t,
            r = (0, R.LZ)(),
            n = (0, A.useRouter)(),
            i = (0, p.useRef)(null),
            o = (0, p.useRef)([]),
            a = (0, p.useRef)(!1),
            u = (0, p.useRef)(n.pathname);
          (0, p.useEffect)(() => {
            window.scrollTo(0, 0);
          }, []),
            (0, p.useEffect)(
              () => (
                window.addEventListener("start-scroll", l),
                window.addEventListener("stop-scroll", h),
                () => {
                  window.removeEventListener("start-scroll", l),
                    window.removeEventListener("stop-scroll", h);
                }
              )
            );
          let l = () => {
              r.start();
            },
            h = () => {
              r && r.stop();
            },
            f = () => {
              let t = n.pathname;
              (u.current = t), (o.current[t] = window.scrollY);
            },
            d = () => {
              a.current &&
                window.scroll({
                  top: o.current[u.current],
                  behavior: "instant",
                }),
                (a.current = !1);
            };
          return (
            (0, p.useEffect)(() => {
              function t(t) {
                i.current && i.current.raf(1e3 * t);
              }
              return (
                i.current && i.current.on("scroll", c.ScrollTrigger.update),
                P.p8.ticker.add(t),
                () => {
                  P.p8.ticker.remove(t);
                }
              );
            }),
            (0, p.useEffect)(
              () => (
                n.beforePopState(() => ((a.current = !0), !0)),
                n.events.on("routeChangeStart", f),
                n.events.on("routeChangeComplete", d),
                () => {
                  n.events.off("routeChangeStart", f),
                    n.events.off("routeChangeComplete", d);
                }
              ),
              [n]
            ),
            (0, s.jsx)(R.Ei, {
              ref: i,
              autoRaf: !1,
              root: !0,
              options: {
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              },
              children: e,
            })
          );
        },
        N = r(3297);
      P.p8.registerEffect({
        name: "blink",
        effect: (t, e) => {
          let r = P.p8.timeline({ delay: e.duration });
          return (
            t.forEach((t, n) => {
              r.to(t, {
                alpha: Math.round((n % Math.random()) * 3),
                duration: e.duration,
              }),
                r.set(t, { alpha: 1 });
            }),
            r
          );
        },
        defaults: { delay: 0, duration: 0.07 },
        extendTimeline: !0,
      });
      var I = r(4179),
        F = r(2099),
        B = () => {
          let t = (0, p.useRef)(!1),
            e = (0, p.useRef)(!1),
            n = (0, p.useRef)(0),
            i = (0, p.useRef)(!1),
            o = (0, p.useRef)(!1),
            a = (0, p.useRef)(!1),
            u = (0, p.useRef)(!1),
            l = (0, p.useRef)(!1),
            c = (0, p.useRef)([]),
            h = (0, p.useRef)([]),
            f = (0, p.useRef)(),
            d = (0, p.useRef)(),
            m = (0, p.useRef)(),
            g = (0, p.useRef)(),
            _ = (0, p.useRef)([]),
            v = (0, p.useRef)([]),
            y = (0, p.useRef)([]),
            w = (0, p.useRef)(),
            b = (0, p.useRef)(0),
            x = (0, p.useRef)(0),
            T = (0, p.useRef)(!1),
            E = (0, p.useRef)(!1),
            k = (0, p.useRef)(!1),
            C = (0, p.useRef)(!1),
            S = (0, p.useRef)(!1),
            O = (0, p.useRef)(!1),
            M = (0, p.useRef)(!1),
            R = (0, p.useRef)(!1),
            L = (0, p.useRef)(!1),
            D = (0, p.useRef)(null),
            [z, B] = (0, p.useState)(!1),
            V = (0, A.useRouter)(),
            [Y, H] = (0, p.useState)(),
            [W, q] = (0, p.useState)(!0),
            U = (0, j.o)((t) => t.isAppear),
            X = (0, j.o)((t) => t.isFirstLoaded),
            G = (0, j.o)((t) => t.windowWidth),
            Z = (0, j.o)((t) => t.headerVisible),
            $ = (0, j.o)((t) => t.headerDark),
            Q = (0, j.o)((t) => t.reduceHeaderSize),
            J = (0, j.o)((t) => t.setHeaderLoaded),
            K = () => {
              P.p8.to(t.current, { delay: 1.5, alpha: 1, duration: 0.2 });
            },
            tt = () => {
              requestAnimationFrame(tt),
                (x.current += (b.current - x.current) * 0.13),
                (i.current.style.transform = "rotate(".concat(
                  x.current,
                  "deg)"
                ));
            },
            te = () => {
              n.current = window.scrollY;
              let t = n.current / E.current;
              b.current = 1800 * t;
            },
            tr = (t) => {
              P.p8.effects.blink(R.current[t].chars);
            },
            tn = (0, p.useCallback)(() => {
              G <= 1200
                ? (P.p8.set(g.current, { height: "5.6rem" }),
                  P.p8.set(_.current, { alpha: 0 }),
                  P.p8.set(v.current, { pointerEvents: "none" }))
                : (L.current || (L.current = r(8041)),
                  (M.current = L.current({ target: l.current, by: "chars" })),
                  (R.current = L.current({ target: c.current, by: "chars" })),
                  P.p8.set(u.current, {
                    x: u.current.getBoundingClientRect().width - (0, F.z6)(66),
                  }),
                  R.current.forEach((t) => {
                    P.p8.set(t.chars, { autoAlpha: 0 });
                  })),
                (S.current = !0);
            }, [G]),
            ti = () => {
              let t = w.current.querySelectorAll(":scope>span"),
                r = m.current.querySelector("a"),
                n = P.p8.timeline({ defaults: { ease: "power3.out" } });
              n.to(
                e.current,
                { autoAlpha: 0, ease: "power2.out", duration: 0.4 },
                0
              ),
                n.to(
                  g.current,
                  { height: "5.6rem", scale: 1, duration: 0.8 },
                  0.02
                ),
                n.to(
                  y.current,
                  { scaleX: 0, transformOrigin: "right", stagger: 0.1 },
                  0
                ),
                n.to(
                  t,
                  { scaleX: 1, transformOrigin: "left", stagger: 0.1 },
                  0.2
                ),
                n.set(v.current, { pointerEvents: "none" }, 0),
                n.to(_.current, { alpha: 0, stagger: -0.02, duration: 0.4 }, 0),
                n.to(d.current, { backgroundColor: "#F2EFE9" }, 0),
                n.to(r, { backgroundColor: "#d7d1c6" }, 0);
            },
            ts = () => {
              let t = w.current.querySelectorAll(":scope>span"),
                r = m.current.querySelector("a"),
                n = P.p8.timeline({ defaults: { ease: "power3.out" } });
              n.to(
                e.current,
                { autoAlpha: 0.6, ease: "power2.out", duration: 0.4 },
                0
              ),
                n.to(
                  g.current,
                  { height: "100%", scaleX: 1.06, scaleY: 1.04, duration: 0.8 },
                  0
                ),
                n.to(
                  y.current,
                  { scaleX: 1, transformOrigin: "left", stagger: 0.1 },
                  0.2
                ),
                n.to(
                  t,
                  { scaleX: 0, transformOrigin: "right", stagger: 0.1 },
                  0
                ),
                n.set(v.current, { pointerEvents: "auto" }, 0),
                n.to(_.current, { alpha: 1, stagger: 0.05, duration: 0.5 }, 0),
                n.to(d.current, { backgroundColor: "#d7d1c6" }, 0),
                n.to(r, { backgroundColor: "#F2EFE9" }, 0);
            },
            to = () => {
              window.innerWidth < 1200
                ? P.p8.set(v.current, { autoAlpha: 1, y: 0 })
                : P.p8.set(a.current, { autoAlpha: 1, y: 0 });
            };
          return (
            (0, p.useEffect)(
              () => (
                fetch("/api/header")
                  .then((t) => t.json())
                  .then((t) => {
                    H(t), q(!1);
                  }),
                W ||
                  (document.fonts.ready.then(() => {
                    B(!0);
                  }),
                  z &&
                    ((n.current = window.scrollY),
                    window.addEventListener("scroll", te),
                    window.addEventListener("loader-ready", K),
                    window.addEventListener("resize", to),
                    (E.current =
                      document.body.offsetHeight - window.innerHeight)),
                  T.current || (T.current = requestAnimationFrame(tt))),
                () => {
                  window.removeEventListener("resize", to),
                    window.removeEventListener("loader-ready", K),
                    window.removeEventListener("scroll", te);
                }
              ),
              [z, W]
            ),
            (0, p.useEffect)(() => {
              !1 === W &&
                ((n.current = window.scrollY),
                (E.current = document.body.offsetHeight - window.innerHeight),
                tn(),
                J(!0));
            }, [G, W]),
            (0, p.useEffect)(() => {
              O.current && ti();
            }, [V.asPath]),
            (0, p.useEffect)(() => {
              (0, F.RE)(D.current),
                t.current &&
                  (D.current = P.p8.to(t.current, {
                    autoAlpha: Z ? 1 : 0,
                    duration: 0.4,
                    ease: "power2.out",
                  }));
            }, [Z, W]),
            (0, p.useEffect)(() => {
              if (U && Z && !W) {
                let e = P.p8.timeline();
                e
                  .set([o.current, a.current, t.current, v.current], {
                    autoAlpha: 1,
                  })
                  .fromTo(
                    o.current,
                    { y: "-8.6rem" },
                    { y: 0, ease: "expo.out", duration: 1.5 },
                    0.7
                  ),
                  window.innerWidth < 1200
                    ? e.fromTo(
                        v.current,
                        { y: "-8.6rem" },
                        { y: 0, ease: "expo.out", duration: 1.5 },
                        0.825
                      )
                    : e.fromTo(
                        a.current,
                        { y: "-8.6rem" },
                        { y: 0, ease: "expo.out", duration: 1.5 },
                        0.825
                      );
              } else
                X &&
                  P.p8.to([o.current, a.current, v.current], {
                    autoAlpha: 0,
                    duration: 0.4,
                    ease: "power2.out",
                  });
            }, [U, W]),
            (0, p.useEffect)(() => {
              W || o.current.classList.toggle("a", $);
            }, [$]),
            (0, p.useEffect)(() => {
              W ||
                P.p8.set([o.current, a.current, v.current], { y: "-8.6rem" });
            }, [W]),
            !1 === W &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("div", {
                    ref: e,
                    className:
                      "fixed top-0 left-0 w-screen h-screen backdrop-blur-[100px] bg-[rgba(184,176,165,0.80)] z-headerOverlay pointer-events-none opacity-0 xl:hidden",
                  }),
                  (0, s.jsxs)("header", {
                    ref: t,
                    className:
                      "header flex justify-between items-start fixed top-container-mobile md:top-container w-full px-container-mobile md:px-container pointer-events-none z-header",
                    children: [
                      (0, s.jsx)("div", {
                        ref: o,
                        className:
                          "header-logo relative rounded-12 pointer-events-auto overflow-hidden transition-bg duration-global ease-out opacity-0 ".concat(
                            Q
                              ? "bg-light_beige h-[5.2rem] lg:h-[6.2rem] ml-[0.2rem] mt-[0.2rem] w-[5.2rem] lg:w-[6.2rem]"
                              : "bg-white h-[5.6rem] lg:h-[6.6rem] w-[5.6rem] lg:w-[6.6rem]",
                            " "
                          ),
                        children: (0, s.jsx)(I.Z, {
                          href: "/",
                          className:
                            "flex items-center justify-center w-full h-full",
                          children: (0, s.jsx)("div", {
                            ref: i,
                            className: "w-[1.8rem] lg:w-[2.3rem] svg-wrapper",
                            children: (0, s.jsx)(N.Z, { fill: "#575349" }),
                          }),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        ref: a,
                        className:
                          "hidden xl:flex items-center lg:h-[6.6rem] opacity-0",
                        onMouseLeave: () => {
                          if (G <= 1024) return;
                          k.current && (0, F.RE)(k.current);
                          for (let t = 0; t < h.current.length; t++)
                            h.current[t].classList.add("pointer-events-none");
                          a.current.classList.remove("pointer-events-auto"),
                            (C.current = P.p8.timeline());
                          let t = f.current.querySelectorAll("span");
                          C.current.to(
                            u.current,
                            {
                              x:
                                u.current.getBoundingClientRect().width -
                                (0, F.z6)(66),
                              duration: 1.2,
                              ease: "expo.inOut",
                            },
                            0
                          ),
                            R.current.forEach((t) => {
                              C.current.to(
                                t.chars,
                                {
                                  autoAlpha: 0,
                                  stagger: 0.045,
                                  ease: "none",
                                  duration: 0,
                                },
                                0.25
                              );
                            }),
                            C.current.to(
                              t,
                              {
                                scaleX: 1,
                                stagger: -0.08,
                                duration: 0.35,
                                ease: "power3.out",
                              },
                              ">-=0.02"
                            ),
                            C.current.set(
                              f.current,
                              { pointerEvents: "auto" },
                              0
                            );
                        },
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "flex justify-center items-center gap-x-16 relative h-full p-[2.4rem] overflow-hidden",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "absolute top-0 left-0 w-full h-full bg-white rounded-s-12 rounded-e-none -z-1 pointer-events-auto",
                                ref: u,
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "absolute right-0 top-1/2 -translate-y-1/2 w-[6.2rem] h-full flex justify-center items-center cursor-pointer pointer-events-auto",
                                onMouseEnter: () => {
                                  if (!S.current || G <= 1024) return;
                                  C.current && (0, F.RE)(C.current);
                                  for (let t = 0; t < h.current.length; t++)
                                    h.current[t].classList.remove(
                                      "pointer-events-none"
                                    );
                                  a.current.classList.add(
                                    "pointer-events-auto"
                                  ),
                                    (k.current = P.p8.timeline());
                                  let t = f.current.querySelectorAll("span");
                                  k.current.to(
                                    u.current,
                                    { x: 0, duration: 1.1, ease: "power2.out" },
                                    0
                                  ),
                                    k.current.set(
                                      f.current,
                                      { pointerEvents: "none" },
                                      0
                                    ),
                                    k.current.to(
                                      t,
                                      {
                                        scaleX: 0,
                                        stagger: 0.05,
                                        duration: 0.3,
                                        ease: "power3.out",
                                      },
                                      0
                                    );
                                  let e = [...R.current].reverse();
                                  e.forEach((t, e) => {
                                    k.current.to(
                                      t.chars,
                                      {
                                        autoAlpha: 1,
                                        stagger: 0.05,
                                        ease: "none",
                                        duration: 0,
                                        onStart: () => {
                                          P.p8.effects.blink(t.chars, {
                                            delay: 0.2,
                                            duration: 0.07,
                                          });
                                        },
                                      },
                                      0 === e ? 0 : ">-=38%"
                                    );
                                  });
                                },
                                ref: f,
                                children: (0, s.jsxs)("div", {
                                  className:
                                    "w-10 h-10 flex flex-col justify-center gap-y-[0.3rem]",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "h-[1px] bg-dark_grey w-full origin-left",
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "h-[1px] bg-dark_grey w-full origin-left",
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "h-[1px] bg-dark_grey w-full origin-left",
                                    }),
                                  ],
                                }),
                              }),
                              Y.data.navigation_links.map((t, e) =>
                                (0, s.jsx)(
                                  "div",
                                  {
                                    ref: (t) => (h.current[e] = t),
                                    className: "pointer-events-none",
                                    children: (0, s.jsx)(I.Z, {
                                      field: t.link,
                                      className:
                                        "body-mono-10 tracking-0.05 text-dark_grey",
                                      children: (0, s.jsx)("span", {
                                        onMouseEnter: () => tr(e),
                                        ref: (t) => (c.current[e] = t),
                                        children: t.link_title,
                                      }),
                                    }),
                                  },
                                  "navigation-burger_link-".concat(e)
                                )
                              ),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "p-[0.2rem] bg-orange h-full rounded-e-12 rounded-s-none pointer-events-auto",
                            ref: l,
                            children: (0, s.jsx)(I.Z, {
                              href: "/underconstruction",
                              onMouseEnter: () => {
                                P.p8.effects.blink(M.current[0].chars);
                              },
                              onClick: () => {
                                void 0 !== window.gtag &&
                                  window.gtag("event", "Pre-Order CTA"),
                                  void 0 !== window.fbq &&
                                    fbq("trackCustom", "Pre-Order CTA"),
                                  void 0 !== window.rdt &&
                                    rdt("track", "Custom", {
                                      customEventName: "Pre-Order CTA",
                                    });
                              },
                              className:
                                "bg-orange flex justify-center items-center h-full rounded-10 px-20 body-mono-10 tracking-0.05 text-dark_grey",
                              children: Y.data.cta_text,
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex flex-col gap-y-[2.7rem] xl:hidden items-center relative pointer-events-none z-1",
                        ref: v,
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "block xl:hidden absolute top-0 left-0 w-full h-full rounded-13 overflow-hidden bg-white pointer-events-none",
                            ref: g,
                            children: (0, s.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full bg-dots bg-size-dots bg-repeat opacity-40",
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "flex items-center bg-white rounded-10 z-1 pointer-events-auto",
                            ref: d,
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "flex flex-col items-center justify-center gap-y-[0.3rem] relative w-[5.6rem] h-[5.6rem]",
                                ref: w,
                                onClick: () => {
                                  O.current ? ti() : ts(),
                                    (O.current = !O.current);
                                },
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "w-10 h-[0.1rem] bg-dark_grey",
                                  }),
                                  (0, s.jsx)("span", {
                                    className: "w-10 h-[0.1rem] bg-dark_grey",
                                  }),
                                  (0, s.jsx)("span", {
                                    className: "w-10 h-[0.1rem] bg-dark_grey",
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center rotate-45",
                                    children: (0, s.jsx)("span", {
                                      className:
                                        "block h-[1px] w-[1.2rem] bg-dark_grey scale-x-0",
                                      ref: (t) => (y.current[0] = t),
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center -rotate-45",
                                    children: (0, s.jsx)("span", {
                                      className:
                                        "block h-[1px] w-[1.2rem] bg-dark_grey scale-x-0",
                                      ref: (t) => (y.current[1] = t),
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className: "p-[0.2rem] pl-0",
                                children: (0, s.jsx)("div", {
                                  ref: m,
                                  className:
                                    "body-mono-10 tracking-0.05 text-dark_grey",
                                  children: (0, s.jsx)(I.Z, {
                                    className:
                                      "flex items-center px-10 py-15 bg-orange rounded-[0.8rem] h-[5.2rem] lg:h-full",
                                    href: "/explore",
                                    children: Y.data.cta_text,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: "flex w-full h-full xl:hidden",
                            children: (0, s.jsx)("div", {
                              className:
                                "flex flex-col justify-end items-center gap-y-10 relative w-full h-full px-[0.6rem] pb-[3.4rem]",
                              children: Y.data.navigation_links.map((t, e) =>
                                (0, s.jsx)(
                                  "div",
                                  {
                                    ref: (t) => (_.current[e] = t),
                                    children: (0, s.jsx)(I.Z, {
                                      field: t.link,
                                      className:
                                        "body-mono-10 tracking-0.05 text-dark_grey",
                                      children: (0, s.jsx)("span", {
                                        children: t.link_title,
                                      }),
                                    }),
                                  },
                                  "navigation-burger_link-mobile-".concat(e)
                                )
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
          );
        },
        V = () => {
          let t = (0, p.useRef)(null),
            e = (0, j.o)((t) => t.setLoaded),
            r = (0, j.o)((t) => t.setIsFirstLoaded);
          return (
            (0, p.useEffect)(() => {
              setTimeout(() => {
                window.dispatchEvent(new CustomEvent("loader-ready")),
                  e(!0),
                  setTimeout(() => {
                    let e = document.querySelector(
                      ".transition-path, .simple-transition-path"
                    );
                    r(!0),
                      e ||
                        P.p8.to(t.current, {
                          autoAlpha: 0,
                          ease: "power2.out",
                          duration: 0.8,
                          delay: 0.5,
                        });
                  }, 100);
              }, 100);
            }, []),
            (0, s.jsx)("div", {
              ref: t,
              className:
                "loader fixed top-0 left-0 w-full h-screen bg-white z-loader",
            })
          );
        },
        Y = r(7312),
        H = r(172),
        W = r(5591),
        q = r(1753);
      let U = q.w6
          ? (t) => {
              t();
            }
          : p.startTransition,
        X = (t) => {
          let [, e] = (0, p.useState)({}),
            r = (0, p.useRef)(!1),
            n = (0, p.useRef)(t),
            i = (0, p.useRef)({ data: !1, error: !1, isValidating: !1 }),
            s = (0, p.useCallback)((t) => {
              let s = !1,
                o = n.current;
              for (let e in t)
                o[e] !== t[e] && ((o[e] = t[e]), i.current[e] && (s = !0));
              s && !r.current && e({});
            }, []);
          return (
            (0, q.LI)(
              () => (
                (r.current = !1),
                () => {
                  r.current = !0;
                }
              )
            ),
            [n, i.current, s]
          );
        },
        G = (0, q.xD)(W.ZP, () => (t, e, r = {}) => {
          let { mutate: n } = (0, W.kY)(),
            i = (0, p.useRef)(t),
            s = (0, p.useRef)(e),
            o = (0, p.useRef)(r),
            a = (0, p.useRef)(0),
            [u, l, c] = X({ data: q.i_, error: q.i_, isMutating: !1 }),
            h = u.current,
            f = (0, p.useCallback)(async (t, e) => {
              var r, u;
              let [l, h] = (0, q.qC)(i.current);
              if (!s.current)
                throw Error("Can’t trigger the mutation: missing fetcher.");
              if (!l) throw Error("Can’t trigger the mutation: missing key.");
              let f = (0, q.PM)(
                  (0, q.PM)({ populateCache: !1, throwOnError: !0 }, o.current),
                  e
                ),
                d = (0, q.u3)();
              (a.current = d), c({ isMutating: !0 });
              try {
                let e = await n(
                  l,
                  s.current(h, { arg: t }),
                  (0, q.PM)(f, { throwOnError: !0 })
                );
                return (
                  a.current <= d &&
                    (U(() => c({ data: e, isMutating: !1, error: void 0 })),
                    null == (r = f.onSuccess) || r.call(f, e, l, f)),
                  e
                );
              } catch (t) {
                if (
                  a.current <= d &&
                  (U(() => c({ error: t, isMutating: !1 })),
                  null == (u = f.onError) || u.call(f, t, l, f),
                  f.throwOnError)
                )
                  throw t;
              }
            }, []),
            d = (0, p.useCallback)(() => {
              (a.current = (0, q.u3)()),
                c({ data: q.i_, error: q.i_, isMutating: !1 });
            }, []);
          return (
            (0, q.LI)(() => {
              (i.current = t), (s.current = e), (o.current = r);
            }),
            {
              trigger: f,
              reset: d,
              get data() {
                return (l.data = !0), h.data;
              },
              get error() {
                return (l.error = !0), h.error;
              },
              get isMutating() {
                return (l.isMutating = !0), h.isMutating;
              },
            }
          );
        });
      var Z = r(284),
        $ = r(5600),
        Q = () => {
          let { data: t, trigger: e, isMutating: r } = G("/api/popup-data", y),
            [n, i] = (0, p.useState)(!1),
            [o, a] = (0, p.useState)(),
            [u, l] = (0, p.useState)(),
            c = (0, p.useRef)(null),
            h = (0, p.useRef)(!1),
            f = (0, p.useRef)(!1),
            d = (0, p.useRef)(!1),
            m = (0, p.useRef)(!1),
            g = (0, p.useRef)([]),
            _ = (0, p.useRef)(!1),
            v = (0, j.o)((t) => t.pagePopupPathnames);
          async function y(t, e) {
            let { arg: r } = e;
            return await fetch(t, {
              method: "post",
              body: JSON.stringify(r),
            }).then((t) => t.json());
          }
          (0, p.useEffect)(
            () => (
              (g.current = v),
              g.current.push("/post/", "/team"),
              () => {
                g.current = [];
              }
            ),
            [v]
          );
          let w = (t) => {
            "global" === t.detail.name &&
              (t.detail.uid !== c.current
                ? (a(t.detail.uid), l(t.detail.type))
                : (i(!0), (f.current = !0)));
          };
          (0, p.useEffect)(() => {
            !d.current &&
              n &&
              window.history.pushState({}, null, "".concat(m.current)),
              (d.current = !1);
          }, [n]),
            (0, p.useEffect)(() => {
              (u || o) &&
                (window.dispatchEvent(
                  new CustomEvent("page-popup-fetching", { detail: { uid: o } })
                ),
                e({ type: u, uid: o }),
                (_.current = !0));
            }, [u, o]),
            (0, p.useEffect)(() => {
              c.current = o;
            }, [o]),
            (0, p.useEffect)(() => {
              _.current &&
                !r &&
                ((m.current = t.response.url),
                i(!0),
                (f.current = !0),
                (_.current = !1),
                window.dispatchEvent(
                  new CustomEvent("page-popup-fetched", { detail: { uid: o } })
                ));
            }, [r, _.current]);
          let b = () => {
              f.current &&
                ((h.current = !0), window.history.back(), (h.current = !1));
            },
            x = (t) => {
              let e = !1;
              g.current.forEach((t) => {
                window.location.href.includes(window.location.origin + t) &&
                  (e = !0);
              }),
                e
                  ? ((d.current = !0),
                    window.dispatchEvent(
                      new CustomEvent("open-popup", {
                        detail: {
                          name: "global",
                          type: "post",
                          uid: c.current,
                        },
                      })
                    ))
                  : f.current &&
                    !h.current &&
                    (i(!1),
                    (f.current = !1),
                    window.dispatchEvent(new CustomEvent("back-close-popup")));
            };
          return (
            (0, p.useEffect)(
              () => (
                window.addEventListener("open-popup", w),
                window.addEventListener("popup-closed", b),
                window.addEventListener("popstate", x),
                () => {
                  window.removeEventListener("open-popup", w),
                    window.removeEventListener("popup-closed", b),
                    window.removeEventListener("popstate", x);
                }
              ),
              []
            ),
            (0, s.jsxs)($.Z, {
              name: "global",
              size: "large",
              background: "team" !== o,
              customLoading: n,
              wrapperClass: u,
              children: [
                "post" === u &&
                  (0, s.jsx)(Z.Z, {
                    page: null == t ? void 0 : t.response,
                    tags: null == t ? void 0 : t.tags,
                    popup: !0,
                  }),
                (0, s.jsx)(H.p, {
                  slices: null == t ? void 0 : t.response.data.slices,
                  components: Y.w,
                  context: { popup: !0 },
                }),
              ],
            })
          );
        },
        J = r(4298),
        K = r.n(J);
      function tt(t) {
        let { Component: e, pageProps: r } = t,
          n = (0, j.o)((t) => t.setWindowWidth),
          i = (0, A.useRouter)();
        (0, p.useEffect)(() => {
          let t = () => {
            o();
          };
          return (
            o(),
            i.events.on("routeChangeComplete", t),
            () => {
              i.events.off("routeChangeComplete", t);
            }
          );
        }, []),
          (0, p.useEffect)(
            () => (
              window.addEventListener("resize", a),
              n(window.innerWidth),
              document.documentElement.style.setProperty(
                "--wh",
                window.innerHeight / 100 + "px"
              ),
              () => {
                window.removeEventListener("resize", a);
              }
            ),
            []
          );
        let o = () => {
            void 0 !== window.gtag &&
              window.gtag(
                "event",
                "PageView - ".concat(
                  window.location.pathname.substring(1) || "home"
                ),
                {
                  page_path: window.location.pathname,
                  page_title: document.title,
                  page_location: window.location.href,
                }
              ),
              void 0 !== window.fbq &&
                (fbq("track", "PageView"),
                fbq(
                  "trackCustom",
                  "PageView - ".concat(
                    window.location.pathname.substring(1) || "home"
                  ),
                  {
                    page_path: window.location.pathname,
                    page_title: document.title,
                    page_location: window.location.href,
                  }
                )),
              void 0 !== window.rdt && rdt("track", "PageVisit");
          },
          a = () => {
            n(window.innerWidth),
              document.documentElement.style.setProperty(
                "--wh",
                window.innerHeight / 100 + "px"
              );
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(K(), {
                  id: "google-tag-manager",
                  src: "https://www.googletagmanager.com/gtag/js?id=".concat(
                    "G-PRSB9NGYMD"
                  ),
                }),
                (0, s.jsx)(K(), {
                  id: "google-config",
                  children:
                    "\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', '"
                      .concat(
                        "AW-11206996922",
                        "');\n              gtag('config', '"
                      )
                      .concat(
                        "G-PRSB9NGYMD",
                        "', {\n                page_path: window.location.pathname,\n                page_title: document.title,\n                page_location: window.location.href,\n              });\n          "
                      ),
                }),
              ],
            }),
            (0, s.jsx)(K(), {
              id: "meta",
              children:
                "\n            !function(f,b,e,v,n,t,s)\n            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n            n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n            n.queue=[];t=b.createElement(e);t.async=!0;\n            t.src=v;s=b.getElementsByTagName(e)[0];\n            s.parentNode.insertBefore(t,s)}(window, document,'script',\n            'https://connect.facebook.net/en_US/fbevents.js');\n            fbq('init', '".concat(
                  "199311119754135",
                  "');\n          "
                ),
            }),
            (0, s.jsx)(K(), {
              id: "hotjar",
              children:
                "\n            (function(h,o,t,j,a,r){\n                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n                h._hjSettings={hjid:".concat(
                  "3523515",
                  ",hjsv:6};\n                a=o.getElementsByTagName('head')[0];\n                r=o.createElement('script');r.async=1;\n                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n                a.appendChild(r);\n            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');          \n          "
                ),
            }),
            (0, s.jsx)(K(), {
              id: "reddit",
              children:
                '\n            !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)}\n            p.callQueue=[];\n            var t=d.createElement("script");\n            t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;\n            var s=d.getElementsByTagName("script")[0];\n            s.parentNode.insertBefore(t,s)}}(window,document);\n            rdt(\'init\',\''.concat(
                  "a2_dpsmrk2bn8pu",
                  '\', {"optOut":false,"useDecimalCurrencyValues":true,"aaid":"<AAID-HERE>","email":"<EMAIL-HERE>","externalId":"<EXTERNAL-ID-HERE>","idfa":"<IDFA-HERE>"});\n          '
                ),
            }),
            (0, s.jsx)(V, {}),
            (0, s.jsx)(B, {}),
            (0, s.jsx)(z, {
              children: (0, s.jsxs)(L, {
                children: [(0, s.jsx)(e, { ...r }), (0, s.jsx)(Q, {})],
              }),
            }),
            (0, s.jsx)(D, {}),
          ],
        });
      }
      a().registerPlugin(l()),
        a().registerPlugin(h()),
        l().create("beaucoup.alpha", ".25, .46, .45, .9"),
        l().create("beaucoup.inOut", "0.77, 0, 0.175, 1"),
        l().create("beaucoup.out", "0.19, 1, 0.22, 1");
    },
    7312: function (t, e, r) {
      "use strict";
      r.d(e, {
        w: function () {
          return s;
        },
      });
      var n = r(5152),
        i = r.n(n);
      let s = {
        alternated_content: i()(() => r.e(865).then(r.bind(r, 8865)), {
          loadableGenerated: { webpack: () => [8865] },
        }),
        anchors: i()(() => r.e(440).then(r.bind(r, 8440)), {
          loadableGenerated: { webpack: () => [8440] },
        }),
        call_to_action: i()(() => r.e(82).then(r.bind(r, 8082)), {
          loadableGenerated: { webpack: () => [8082] },
        }),
        content: i()(() => r.e(402).then(r.bind(r, 2402)), {
          loadableGenerated: { webpack: () => [2402] },
        }),
        content_slider: i()(() => r.e(141).then(r.bind(r, 2141)), {
          loadableGenerated: { webpack: () => [2141] },
        }),
        cover: i()(
          () => Promise.all([r.e(959), r.e(658)]).then(r.bind(r, 8658)),
          { loadableGenerated: { webpack: () => [8658] } }
        ),
        dropdown: i()(() => r.e(578).then(r.bind(r, 578)), {
          loadableGenerated: { webpack: () => [578] },
        }),
        feature_focus: i()(
          () => Promise.all([r.e(89), r.e(74), r.e(189)]).then(r.bind(r, 3189)),
          { loadableGenerated: { webpack: () => [3189] } }
        ),
        focus_article: i()(() => r.e(158).then(r.bind(r, 7158)), {
          loadableGenerated: { webpack: () => [7158] },
        }),
        focus_points: i()(
          () => Promise.all([r.e(89), r.e(74), r.e(227)]).then(r.bind(r, 9227)),
          { loadableGenerated: { webpack: () => [9227] } }
        ),
        fullscreen_slider: i()(() => r.e(63).then(r.bind(r, 6063)), {
          loadableGenerated: { webpack: () => [6063] },
        }),
        hero: i()(() => r.e(512).then(r.bind(r, 2512)), {
          loadableGenerated: { webpack: () => [2512] },
        }),
        image_content: i()(
          () => Promise.all([r.e(89), r.e(74), r.e(386)]).then(r.bind(r, 1386)),
          { loadableGenerated: { webpack: () => [1386] } }
        ),
        image_number_content: i()(() => r.e(288).then(r.bind(r, 1288)), {
          loadableGenerated: { webpack: () => [1288] },
        }),
        large_cover: i()(
          () => Promise.all([r.e(143), r.e(19)]).then(r.bind(r, 1019)),
          { loadableGenerated: { webpack: () => [1019] } }
        ),
        on_off_grid_images_reveal: i()(() => r.e(445).then(r.bind(r, 6445)), {
          loadableGenerated: { webpack: () => [6445] },
        }),
        post_video: i()(() => r.e(498).then(r.bind(r, 8498)), {
          loadableGenerated: { webpack: () => [8498] },
        }),
        posts: i()(() => r.e(793).then(r.bind(r, 6793)), {
          loadableGenerated: { webpack: () => [6793] },
        }),
        pre_footer: i()(() => r.e(183).then(r.bind(r, 1183)), {
          loadableGenerated: { webpack: () => [1183] },
        }),
        quote: i()(() => r.e(284).then(r.bind(r, 6284)), {
          loadableGenerated: { webpack: () => [6284] },
        }),
        simple_content: i()(() => r.e(966).then(r.bind(r, 6966)), {
          loadableGenerated: { webpack: () => [6966] },
        }),
        slider: i()(() => r.e(555).then(r.bind(r, 555)), {
          loadableGenerated: { webpack: () => [555] },
        }),
        sticky_slider: i()(() => r.e(198).then(r.bind(r, 3198)), {
          loadableGenerated: { webpack: () => [3198] },
        }),
        team: i()(() => r.e(525).then(r.bind(r, 4525)), {
          loadableGenerated: { webpack: () => [4525] },
        }),
        title_cover: i()(() => r.e(307).then(r.bind(r, 8307)), {
          loadableGenerated: { webpack: () => [8307] },
        }),
      };
    },
    8266: function (t, e, r) {
      "use strict";
      r.d(e, {
        o: function () {
          return f;
        },
      });
      var n = r(6038),
        i = r(4529);
      let s = (t) => ({
          isPopupOpen: !1,
          setPopupOpen: (e) => t((t) => ({ isPopupOpen: e })),
          pagePopupPathnames: [],
          setPagePopupPathnames: (e) => t((t) => ({ pagePopupPathnames: e })),
        }),
        o = (t) => ({
          isFirstLoaded: !1,
          isLoaded: !1,
          setLoaded: (e) => t((t) => ({ isLoaded: e })),
          setIsFirstLoaded: (e) => t((t) => ({ isFirstLoaded: e })),
        }),
        a = (t) => ({
          isAppear: !1,
          isAppeared: !1,
          currentTransition: "fade",
          startTransition: !1,
          setStartTransition: (e) => t((t) => ({ startTransition: e })),
          setIsAppear: (e) => t((t) => ({ isAppear: e })),
          setIsAppeared: (e) => t((t) => ({ isAppeared: e })),
          setCurrentTransition: (e) => t((t) => ({ currentTransition: e })),
        }),
        u = (t) => ({
          animationContext: n.p8.context(() => {}),
          killAnimationContext: () => t((t) => t.animationContext.kill()),
        }),
        l = (t) => ({
          windowWidth: 0,
          setWindowWidth: (e) => t(() => ({ windowWidth: e })),
        }),
        c = (t) => ({
          currentStep: 1,
          setCurrentStep: (e) => t(() => ({ currentStep: e })),
          isSubmitting: !1,
          setSubmitting: (e) => t(() => ({ isSubmitting: e })),
          isLoading: !1,
          setIsLoading: (e) => t(() => ({ isLoading: e })),
          stepStart: !1,
          setStepStart: (e) => t(() => ({ stepStart: e })),
        }),
        h = (t) => ({
          headerVisible: !0,
          setHeaderVisible: (e) => t(() => ({ headerVisible: e })),
          headerDark: !1,
          setHeaderDark: (e) => t(() => ({ headerDark: e })),
          headerLoaded: !1,
          setHeaderLoaded: (e) => t(() => ({ headerLoaded: e })),
          reduceHeaderSize: !1,
          setReduceHeaderSize: (e) => t(() => ({ reduceHeaderSize: e })),
        }),
        f = (0, i.Ue)(function () {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          return {
            ...s(...e),
            ...o(...e),
            ...a(...e),
            ...u(...e),
            ...l(...e),
            ...c(...e),
            ...h(...e),
          };
        });
    },
    7952: function () {},
    7663: function (t) {
      !(function () {
        var e = {
            229: function (t) {
              var e,
                r,
                n,
                i = (t.exports = {});
              function s() {
                throw Error("setTimeout has not been defined");
              }
              function o() {
                throw Error("clearTimeout has not been defined");
              }
              function a(t) {
                if (e === setTimeout) return setTimeout(t, 0);
                if ((e === s || !e) && setTimeout)
                  return (e = setTimeout), setTimeout(t, 0);
                try {
                  return e(t, 0);
                } catch (r) {
                  try {
                    return e.call(null, t, 0);
                  } catch (r) {
                    return e.call(this, t, 0);
                  }
                }
              }
              !(function () {
                try {
                  e = "function" == typeof setTimeout ? setTimeout : s;
                } catch (t) {
                  e = s;
                }
                try {
                  r = "function" == typeof clearTimeout ? clearTimeout : o;
                } catch (t) {
                  r = o;
                }
              })();
              var u = [],
                l = !1,
                c = -1;
              function h() {
                l &&
                  n &&
                  ((l = !1),
                  n.length ? (u = n.concat(u)) : (c = -1),
                  u.length && f());
              }
              function f() {
                if (!l) {
                  var t = a(h);
                  l = !0;
                  for (var e = u.length; e; ) {
                    for (n = u, u = []; ++c < e; ) n && n[c].run();
                    (c = -1), (e = u.length);
                  }
                  (n = null),
                    (l = !1),
                    (function (t) {
                      if (r === clearTimeout) return clearTimeout(t);
                      if ((r === o || !r) && clearTimeout)
                        return (r = clearTimeout), clearTimeout(t);
                      try {
                        r(t);
                      } catch (e) {
                        try {
                          return r.call(null, t);
                        } catch (e) {
                          return r.call(this, t);
                        }
                      }
                    })(t);
                }
              }
              function d(t, e) {
                (this.fun = t), (this.array = e);
              }
              function p() {}
              (i.nextTick = function (t) {
                var e = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    e[r - 1] = arguments[r];
                u.push(new d(t, e)), 1 !== u.length || l || a(f);
              }),
                (d.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (i.title = "browser"),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ""),
                (i.versions = {}),
                (i.on = p),
                (i.addListener = p),
                (i.once = p),
                (i.off = p),
                (i.removeListener = p),
                (i.removeAllListeners = p),
                (i.emit = p),
                (i.prependListener = p),
                (i.prependOnceListener = p),
                (i.listeners = function (t) {
                  return [];
                }),
                (i.binding = function (t) {
                  throw Error("process.binding is not supported");
                }),
                (i.cwd = function () {
                  return "/";
                }),
                (i.chdir = function (t) {
                  throw Error("process.chdir is not supported");
                }),
                (i.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function n(t) {
          var i = r[t];
          if (void 0 !== i) return i.exports;
          var s = (r[t] = { exports: {} }),
            o = !0;
          try {
            e[t](s, s.exports, n), (o = !1);
          } finally {
            o && delete r[t];
          }
          return s.exports;
        }
        n.ab = "//";
        var i = n(229);
        t.exports = i;
      })();
    },
    5152: function (t, e, r) {
      t.exports = r(5677);
    },
    5675: function (t, e, r) {
      t.exports = r(2555);
    },
    1664: function (t, e, r) {
      t.exports = r(5569);
    },
    1163: function (t, e, r) {
      t.exports = r(6885);
    },
    4298: function (t, e, r) {
      t.exports = r(5442);
    },
    2703: function (t, e, r) {
      "use strict";
      var n = r(414);
      function i() {}
      function s() {}
      (s.resetWarningCache = i),
        (t.exports = function () {
          function t(t, e, r, i, s, o) {
            if (o !== n) {
              var a = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var r = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: s,
            resetWarningCache: i,
          };
          return (r.PropTypes = r), r;
        });
    },
    5697: function (t, e, r) {
      t.exports = r(2703)();
    },
    414: function (t) {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    8041: function (t) {
      t.exports = (function () {
        "use strict";
        var t = document,
          e = t.createTextNode.bind(t);
        function r(t, e, r) {
          t.style.setProperty(e, r);
        }
        function n(t, e) {
          return t.appendChild(e);
        }
        function i(e, r, i, s) {
          var o = t.createElement("span");
          return (
            r && (o.className = r),
            i && (s || o.setAttribute("data-" + r, i), (o.textContent = i)),
            (e && n(e, o)) || o
          );
        }
        function s(t, e) {
          return t.getAttribute("data-" + e);
        }
        function o(e, r) {
          return e && 0 != e.length
            ? e.nodeName
              ? [e]
              : [].slice.call(e[0].nodeName ? e : (r || t).querySelectorAll(e))
            : [];
        }
        function a(t) {
          for (var e = []; t--; ) e[t] = [];
          return e;
        }
        function u(t, e) {
          t && t.some(e);
        }
        function l(t) {
          return function (e) {
            return t[e];
          };
        }
        var c = {};
        function h(t, e, r, n) {
          return { by: t, depends: e, key: r, split: n };
        }
        function f(t) {
          c[t.by] = t;
        }
        function d(t, r, s, a, l) {
          t.normalize();
          var c = [],
            h = document.createDocumentFragment();
          a && c.push(t.previousSibling);
          var f = [];
          return (
            o(t.childNodes).some(function (t) {
              if (t.tagName && !t.hasChildNodes()) {
                f.push(t);
                return;
              }
              if (t.childNodes && t.childNodes.length) {
                f.push(t), c.push.apply(c, d(t, r, s, a, l));
                return;
              }
              var n = t.wholeText || "",
                o = n.trim();
              o.length &&
                (" " === n[0] && f.push(e(" ")),
                u(o.split(s), function (t, e) {
                  e && l && f.push(i(h, "whitespace", " ", l));
                  var n = i(h, r, t);
                  c.push(n), f.push(n);
                }),
                " " === n[n.length - 1] && f.push(e(" ")));
            }),
            u(f, function (t) {
              n(h, t);
            }),
            (t.innerHTML = ""),
            n(t, h),
            c
          );
        }
        var p = "words",
          m = h(p, 0, "word", function (t) {
            return d(t, "word", /\s+/, 0, 1);
          }),
          g = "chars",
          _ = h(g, [p], "char", function (t, e, r) {
            var n = [];
            return (
              u(r[p], function (t, r) {
                n.push.apply(n, d(t, "char", "", e.whitespace && r));
              }),
              n
            );
          });
        function v(t) {
          var e = (t = t || {}).key;
          return o(t.target || "[data-splitting]").map(function (n) {
            var i = n["\uD83C\uDF4C"];
            if (!t.force && i) return i;
            i = n["\uD83C\uDF4C"] = { el: n };
            var o = (function t(e, r, n) {
                var i = n.indexOf(e);
                if (-1 == i)
                  n.unshift(e),
                    u(c[e].depends, function (r) {
                      t(r, e, n);
                    });
                else {
                  var s = n.indexOf(r);
                  n.splice(i, 1), n.splice(s, 0, e);
                }
                return n;
              })(t.by || s(n, "splitting") || g, 0, []).map(l(c)),
              a = (function (t, e) {
                for (var r in e) t[r] = e[r];
                return t;
              })({}, t);
            return (
              u(o, function (t) {
                if (t.split) {
                  var s,
                    o,
                    l = t.by,
                    c = (e ? "-" + e : "") + t.key,
                    h = t.split(n, a, i);
                  c &&
                    ((o = (s = "--" + c) + "-index"),
                    u(h, function (t, e) {
                      Array.isArray(t)
                        ? u(t, function (t) {
                            r(t, o, e);
                          })
                        : r(t, o, e);
                    }),
                    r(n, s + "-total", h.length)),
                    (i[l] = h),
                    n.classList.add(l);
                }
              }),
              n.classList.add("splitting"),
              i
            );
          });
        }
        function y(t, e, r) {
          var n = o(e.matching || t.children, t),
            i = {};
          return (
            u(n, function (t) {
              var e = Math.round(t[r]);
              (i[e] || (i[e] = [])).push(t);
            }),
            Object.keys(i).map(Number).sort(w).map(l(i))
          );
        }
        function w(t, e) {
          return t - e;
        }
        (v.html = function (t) {
          var e = ((t = t || {}).target = i());
          return (e.innerHTML = t.content), v(t), e.outerHTML;
        }),
          (v.add = f);
        var b = h("lines", [p], "line", function (t, e, r) {
            return y(t, { matching: r[p] }, "offsetTop");
          }),
          x = h("items", 0, "item", function (t, e) {
            return o(e.matching || t.children, t);
          }),
          T = h("rows", 0, "row", function (t, e) {
            return y(t, e, "offsetTop");
          }),
          E = h("cols", 0, "col", function (t, e) {
            return y(t, e, "offsetLeft");
          }),
          k = h("grid", ["rows", "cols"]),
          C = "layout",
          S = h(C, 0, 0, function (t, e) {
            var a = (e.rows = +(e.rows || s(t, "rows") || 1)),
              u = (e.columns = +(e.columns || s(t, "columns") || 1));
            if (
              ((e.image = e.image || s(t, "image") || t.currentSrc || t.src),
              e.image)
            ) {
              var l = o("img", t)[0];
              e.image = l && (l.currentSrc || l.src);
            }
            e.image && r(t, "background-image", "url(" + e.image + ")");
            for (var c = a * u, h = [], f = i(0, "cell-grid"); c--; ) {
              var d = i(f, "cell");
              i(d, "cell-inner"), h.push(d);
            }
            return n(t, f), h;
          }),
          O = h("cellRows", [C], "row", function (t, e, r) {
            var n = e.rows,
              i = a(n);
            return (
              u(r[C], function (t, e, r) {
                i[Math.floor(e / (r.length / n))].push(t);
              }),
              i
            );
          }),
          M = h("cellColumns", [C], "col", function (t, e, r) {
            var n = e.columns,
              i = a(n);
            return (
              u(r[C], function (t, e) {
                i[e % n].push(t);
              }),
              i
            );
          }),
          R = h(
            "cells",
            ["cellRows", "cellColumns"],
            "cell",
            function (t, e, r) {
              return r[C];
            }
          );
        return (
          f(m), f(_), f(b), f(x), f(T), f(E), f(k), f(S), f(O), f(M), f(R), v
        );
      })();
    },
    3250: function (t, e, r) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(7294),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        s = n.useState,
        o = n.useEffect,
        a = n.useLayoutEffect,
        u = n.useDebugValue;
      function l(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
          var r = e();
          return !i(t, r);
        } catch (t) {
          return !0;
        }
      }
      var c =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (t, e) {
              return e();
            }
          : function (t, e) {
              var r = e(),
                n = s({ inst: { value: r, getSnapshot: e } }),
                i = n[0].inst,
                c = n[1];
              return (
                a(
                  function () {
                    (i.value = r), (i.getSnapshot = e), l(i) && c({ inst: i });
                  },
                  [t, r, e]
                ),
                o(
                  function () {
                    return (
                      l(i) && c({ inst: i }),
                      t(function () {
                        l(i) && c({ inst: i });
                      })
                    );
                  },
                  [t]
                ),
                u(r),
                r
              );
            };
      e.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
    },
    139: function (t, e, r) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(7294),
        i = r(1688),
        s =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        o = i.useSyncExternalStore,
        a = n.useRef,
        u = n.useEffect,
        l = n.useMemo,
        c = n.useDebugValue;
      e.useSyncExternalStoreWithSelector = function (t, e, r, n, i) {
        var h = a(null);
        if (null === h.current) {
          var f = { hasValue: !1, value: null };
          h.current = f;
        } else f = h.current;
        h = l(
          function () {
            function t(t) {
              if (!u) {
                if (
                  ((u = !0), (o = t), (t = n(t)), void 0 !== i && f.hasValue)
                ) {
                  var e = f.value;
                  if (i(e, t)) return (a = e);
                }
                return (a = t);
              }
              if (((e = a), s(o, t))) return e;
              var r = n(t);
              return void 0 !== i && i(e, r) ? e : ((o = t), (a = r));
            }
            var o,
              a,
              u = !1,
              l = void 0 === r ? null : r;
            return [
              function () {
                return t(e());
              },
              null === l
                ? void 0
                : function () {
                    return t(l());
                  },
            ];
          },
          [e, r, n, i]
        );
        var d = o(t, h[0], h[1]);
        return (
          u(
            function () {
              (f.hasValue = !0), (f.value = d);
            },
            [d]
          ),
          c(d),
          d
        );
      };
    },
    1688: function (t, e, r) {
      "use strict";
      t.exports = r(3250);
    },
    2798: function (t, e, r) {
      "use strict";
      t.exports = r(139);
    },
    4508: function (t, e, r) {
      "use strict";
      r.d(e, {
        Ei: function () {
          return y;
        },
        LZ: function () {
          return v;
        },
      });
      var n = r(7294),
        i = r(8430);
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function o(t, e, r) {
        return Math.max(t, Math.min(e, r));
      }
      class a {
        advance(t) {
          var e, r, n, i;
          if (!this.isRunning) return;
          let s = !1;
          if (this.lerp)
            (this.value =
              ((r = this.value),
              (n = this.to),
              (1 - (i = 1 - Math.exp(-60 * this.lerp * t))) * r + i * n)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (s = !0));
          else {
            this.currentTime += t;
            let e = o(0, this.currentTime / this.duration, 1);
            s = e >= 1;
            let r = s ? 1 : this.easing(e);
            this.value = this.from + (this.to - this.from) * r;
          }
          null == (e = this.onUpdate) ||
            e.call(this, this.value, { completed: s }),
            s && this.stop();
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          t,
          e,
          { lerp: r = 0.1, duration: n = 1, easing: i = (t) => t, onUpdate: s }
        ) {
          (this.from = this.value = t),
            (this.to = e),
            (this.lerp = r),
            (this.duration = n),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            (this.onUpdate = s);
        }
      }
      class u {
        constructor({ wrapper: t, content: e, autoResize: r = !0 } = {}) {
          if (
            ((this.resize = () => {
              this.onWrapperResize(), this.onContentResize();
            }),
            (this.onWrapperResize = () => {
              this.wrapper === window
                ? ((this.width = window.innerWidth),
                  (this.height = window.innerHeight))
                : ((this.width = this.wrapper.clientWidth),
                  (this.height = this.wrapper.clientHeight));
            }),
            (this.onContentResize = () => {
              (this.scrollHeight = this.content.scrollHeight),
                (this.scrollWidth = this.content.scrollWidth);
            }),
            (this.wrapper = t),
            (this.content = e),
            r)
          ) {
            var n;
            let t;
            let e =
              ((n = this.resize),
              function () {
                let e = arguments,
                  r = this;
                clearTimeout(t),
                  (t = setTimeout(function () {
                    n.apply(r, e);
                  }, 250));
              });
            this.wrapper !== window &&
              ((this.wrapperResizeObserver = new ResizeObserver(e)),
              this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(e)),
              this.contentResizeObserver.observe(this.content);
          }
          this.resize();
        }
        destroy() {
          var t, e;
          null == (t = this.wrapperResizeObserver) || t.disconnect(),
            null == (e = this.contentResizeObserver) || e.disconnect();
        }
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      }
      class l {
        constructor() {
          this.events = {};
        }
        emit(t, ...e) {
          let r = this.events[t] || [];
          for (let t = 0, n = r.length; t < n; t++) r[t](...e);
        }
        on(t, e) {
          var r;
          return (
            (null == (r = this.events[t]) ? void 0 : r.push(e)) ||
              (this.events[t] = [e]),
            () => {
              var r;
              this.events[t] =
                null == (r = this.events[t])
                  ? void 0
                  : r.filter((t) => e !== t);
            }
          );
        }
        destroy() {
          this.events = {};
        }
      }
      class c {
        constructor(
          t,
          {
            wheelMultiplier: e = 1,
            touchMultiplier: r = 2,
            normalizeWheel: n = !1,
          }
        ) {
          (this.onTouchStart = (t) => {
            let { clientX: e, clientY: r } = t.targetTouches
              ? t.targetTouches[0]
              : t;
            (this.touchStart.x = e),
              (this.touchStart.y = r),
              (this.lastDelta = { x: 0, y: 0 });
          }),
            (this.onTouchMove = (t) => {
              let { clientX: e, clientY: r } = t.targetTouches
                  ? t.targetTouches[0]
                  : t,
                n = -(e - this.touchStart.x) * this.touchMultiplier,
                i = -(r - this.touchStart.y) * this.touchMultiplier;
              (this.touchStart.x = e),
                (this.touchStart.y = r),
                (this.lastDelta = { x: n, y: i }),
                this.emitter.emit("scroll", {
                  type: "touch",
                  deltaX: n,
                  deltaY: i,
                  event: t,
                });
            }),
            (this.onTouchEnd = (t) => {
              this.emitter.emit("scroll", {
                type: "touch",
                inertia: !0,
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: t,
              });
            }),
            (this.onWheel = (t) => {
              let { deltaX: e, deltaY: r } = t;
              this.normalizeWheel &&
                ((e = o(-100, e, 100)), (r = o(-100, r, 100))),
                (e *= this.wheelMultiplier),
                (r *= this.wheelMultiplier),
                this.emitter.emit("scroll", {
                  type: "wheel",
                  deltaX: e,
                  deltaY: r,
                  event: t,
                });
            }),
            (this.element = t),
            (this.wheelMultiplier = e),
            (this.touchMultiplier = r),
            (this.normalizeWheel = n),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new l()),
            this.element.addEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.addEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.addEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.addEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
        on(t, e) {
          return this.emitter.on(t, e);
        }
        destroy() {
          this.emitter.destroy(),
            this.element.removeEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.removeEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.removeEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.removeEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
      }
      class h {
        constructor({
          wrapper: t = window,
          content: e = document.documentElement,
          wheelEventsTarget: r = t,
          smoothWheel: n = !0,
          smoothTouch: i = !1,
          syncTouch: o = !1,
          syncTouchLerp: h = 0.1,
          __iosNoInertiaSyncTouchLerp: f = 0.4,
          touchInertiaMultiplier: d = 35,
          duration: p,
          easing: m = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          lerp: g = p && 0.1,
          infinite: _ = !1,
          orientation: v = "vertical",
          gestureOrientation: y = "vertical",
          touchMultiplier: w = 1,
          wheelMultiplier: b = 1,
          normalizeWheel: x = !1,
          autoResize: T = !0,
        } = {}) {
          (this.onVirtualScroll = ({
            type: t,
            inertia: e,
            deltaX: r,
            deltaY: n,
            event: i,
          }) => {
            if (i.ctrlKey) return;
            let o = "touch" === t,
              a = "wheel" === t;
            if (
              ("vertical" === this.options.gestureOrientation && 0 === n) ||
              ("horizontal" === this.options.gestureOrientation && 0 === r) ||
              (o &&
                "vertical" === this.options.gestureOrientation &&
                0 === this.scroll &&
                !this.options.infinite &&
                n <= 0) ||
              i
                .composedPath()
                .find(
                  (t) =>
                    (null == t || null == t.hasAttribute
                      ? void 0
                      : t.hasAttribute("data-lenis-prevent")) ||
                    (o &&
                      (null == t || null == t.hasAttribute
                        ? void 0
                        : t.hasAttribute("data-lenis-prevent-touch"))) ||
                    (a &&
                      (null == t || null == t.hasAttribute
                        ? void 0
                        : t.hasAttribute("data-lenis-prevent-wheel")))
                )
            )
              return;
            if (this.isStopped || this.isLocked) return void i.preventDefault();
            if (
              ((this.isSmooth =
                ((this.options.smoothTouch || this.options.syncTouch) && o) ||
                (this.options.smoothWheel && a)),
              !this.isSmooth)
            )
              return (this.isScrolling = !1), void this.animate.stop();
            i.preventDefault();
            let u = n;
            "both" === this.options.gestureOrientation
              ? (u = Math.abs(n) > Math.abs(r) ? n : r)
              : "horizontal" === this.options.gestureOrientation && (u = r);
            let l = o && this.options.syncTouch,
              c = o && e && Math.abs(u) > 1;
            c && (u = this.velocity * this.options.touchInertiaMultiplier),
              this.scrollTo(
                this.targetScroll + u,
                s(
                  { programmatic: !1 },
                  l && {
                    lerp: c
                      ? this.syncTouchLerp
                      : this.options.__iosNoInertiaSyncTouchLerp,
                  }
                )
              );
          }),
            (this.onScroll = () => {
              if (!this.isScrolling) {
                let t = this.animatedScroll;
                (this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.velocity = 0),
                  (this.direction = Math.sign(this.animatedScroll - t)),
                  this.emit();
              }
            }),
            (window.lenisVersion = "1.0.19"),
            (t !== document.documentElement && t !== document.body) ||
              (t = window),
            (this.options = {
              wrapper: t,
              content: e,
              wheelEventsTarget: r,
              smoothWheel: n,
              smoothTouch: i,
              syncTouch: o,
              syncTouchLerp: h,
              __iosNoInertiaSyncTouchLerp: f,
              touchInertiaMultiplier: d,
              duration: p,
              easing: m,
              lerp: g,
              infinite: _,
              gestureOrientation: y,
              orientation: v,
              touchMultiplier: w,
              wheelMultiplier: b,
              normalizeWheel: x,
              autoResize: T,
            }),
            (this.dimensions = new u({
              wrapper: t,
              content: e,
              autoResize: T,
            })),
            this.rootElement.classList.add("lenis"),
            (this.velocity = 0),
            (this.isStopped = !1),
            (this.isSmooth = n || i),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            (this.animate = new a()),
            (this.emitter = new l()),
            this.options.wrapper.addEventListener("scroll", this.onScroll, {
              passive: !1,
            }),
            (this.virtualScroll = new c(r, {
              touchMultiplier: w,
              wheelMultiplier: b,
              normalizeWheel: x,
            })),
            this.virtualScroll.on("scroll", this.onVirtualScroll);
        }
        destroy() {
          this.emitter.destroy(),
            this.options.wrapper.removeEventListener("scroll", this.onScroll, {
              passive: !1,
            }),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.rootElement.classList.remove("lenis"),
            this.rootElement.classList.remove("lenis-smooth"),
            this.rootElement.classList.remove("lenis-scrolling"),
            this.rootElement.classList.remove("lenis-stopped");
        }
        on(t, e) {
          return this.emitter.on(t, e);
        }
        off(t, e) {
          var r;
          this.emitter.events[t] =
            null == (r = this.emitter.events[t])
              ? void 0
              : r.filter((t) => e !== t);
        }
        setScroll(t) {
          this.isHorizontal
            ? (this.rootElement.scrollLeft = t)
            : (this.rootElement.scrollTop = t);
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit("scroll", this);
        }
        reset() {
          (this.isLocked = !1),
            (this.isScrolling = !1),
            (this.velocity = 0),
            this.animate.stop();
        }
        start() {
          (this.isStopped = !1), this.reset();
        }
        stop() {
          (this.isStopped = !0), this.animate.stop(), this.reset();
        }
        raf(t) {
          let e = t - (this.time || t);
          (this.time = t), this.animate.advance(0.001 * e);
        }
        scrollTo(
          t,
          {
            offset: e = 0,
            immediate: r = !1,
            lock: n = !1,
            duration: i = this.options.duration,
            easing: s = this.options.easing,
            lerp: a = !i && this.options.lerp,
            onComplete: u = null,
            force: l = !1,
            programmatic: c = !0,
          } = {}
        ) {
          if (!this.isStopped || l) {
            if (["top", "left", "start"].includes(t)) t = 0;
            else if (["bottom", "right", "end"].includes(t)) t = this.limit;
            else {
              var h;
              let r;
              if (
                ("string" == typeof t
                  ? (r = document.querySelector(t))
                  : null != (h = t) && h.nodeType && (r = t),
                r)
              ) {
                if (this.options.wrapper !== window) {
                  let t = this.options.wrapper.getBoundingClientRect();
                  e -= this.isHorizontal ? t.left : t.top;
                }
                let n = r.getBoundingClientRect();
                t = (this.isHorizontal ? n.left : n.top) + this.animatedScroll;
              }
            }
            if ("number" == typeof t) {
              if (
                ((t += e),
                (t = Math.round(t)),
                this.options.infinite
                  ? c && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (t = o(0, t, this.limit)),
                r)
              )
                return (
                  (this.animatedScroll = this.targetScroll = t),
                  this.setScroll(this.scroll),
                  this.reset(),
                  this.emit(),
                  void (null == u || u())
                );
              if (!c) {
                if (t === this.targetScroll) return;
                this.targetScroll = t;
              }
              this.animate.fromTo(this.animatedScroll, t, {
                duration: i,
                easing: s,
                lerp: a,
                onUpdate: (t, { completed: e }) => {
                  n && (this.isLocked = !0),
                    (this.isScrolling = !0),
                    (this.velocity = t - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = t),
                    this.setScroll(this.scroll),
                    c && (this.targetScroll = t),
                    e &&
                      (n && (this.isLocked = !1),
                      requestAnimationFrame(() => {
                        this.isScrolling = !1;
                      }),
                      (this.velocity = 0),
                      null == u || u()),
                    this.emit();
                },
              });
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === window
            ? this.options.content
            : this.options.wrapper;
        }
        get limit() {
          return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
        get isHorizontal() {
          return "horizontal" === this.options.orientation;
        }
        get actualScroll() {
          return this.isHorizontal
            ? this.rootElement.scrollLeft
            : this.rootElement.scrollTop;
        }
        get scroll() {
          var t;
          return this.options.infinite
            ? ((this.animatedScroll % (t = this.limit)) + t) % t
            : this.animatedScroll;
        }
        get progress() {
          return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isSmooth() {
          return this.__isSmooth;
        }
        set isSmooth(t) {
          this.__isSmooth !== t &&
            (this.rootElement.classList.toggle("lenis-smooth", t),
            (this.__isSmooth = t));
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(t) {
          this.__isScrolling !== t &&
            (this.rootElement.classList.toggle("lenis-scrolling", t),
            (this.__isScrolling = t));
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(t) {
          this.__isStopped !== t &&
            (this.rootElement.classList.toggle("lenis-stopped", t),
            (this.__isStopped = t));
        }
      }
      var f = r(5697),
        d = r(4529);
      function p() {
        return (p = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      let m = ["children", "root", "options", "autoRaf", "rafPriority"],
        g = (0, n.createContext)(),
        _ = (0, d.Ue)(() => ({}));
      function v(t, e = [], r = 0) {
        let {
          lenis: i,
          addCallback: s,
          removeCallback: o,
        } = (function () {
          let t = (0, n.useContext)(g),
            e = _();
          return null != t ? t : e;
        })();
        return (
          (0, n.useEffect)(() => {
            if (t && s && o && i)
              return (
                s(t, r),
                t(i),
                () => {
                  o(t);
                }
              );
          }, [i, s, o, r, ...e]),
          i
        );
      }
      let y = (0, n.forwardRef)((t, e) => {
        let {
            children: r,
            root: s = !1,
            options: o = {},
            autoRaf: a = !0,
            rafPriority: u = 0,
          } = t,
          l = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              s = Object.keys(t);
            for (n = 0; n < s.length; n++)
              e.indexOf((r = s[n])) >= 0 || (i[r] = t[r]);
            return i;
          })(t, m),
          c = (0, n.useRef)(),
          f = (0, n.useRef)(),
          [d, v] = (0, n.useState)(),
          y = (0, n.useRef)([]),
          w = (0, n.useCallback)((t, e) => {
            y.current.push({ callback: t, priority: e }),
              y.current.sort((t, e) => t.priority - e.priority);
          }, []),
          b = (0, n.useCallback)((t) => {
            y.current = y.current.filter((e) => e.callback !== t);
          }, []);
        (0, n.useImperativeHandle)(e, () => d, [d]),
          (0, n.useEffect)(() => {
            let t = new h(
              p({}, o, !s && { wrapper: c.current, content: f.current })
            );
            return (
              v(t),
              () => {
                t.destroy(), v(void 0);
              }
            );
          }, [s, JSON.stringify(o)]),
          (function (t, e = 0) {
            (0, n.useEffect)(() => {
              if (t) return i.Z.add(t, e), () => i.Z.remove(t);
            }, [t, e]);
          })((t) => {
            a && (null == d || d.raf(t));
          }, u),
          (0, n.useEffect)(() => {
            s &&
              d &&
              _.setState({ lenis: d, addCallback: w, removeCallback: b });
          }, [s, d, w, b]);
        let x = (0, n.useCallback)((t) => {
          for (let e = 0; e < y.current.length; e++) y.current[e].callback(t);
        }, []);
        return (
          (0, n.useEffect)(() => {
            if (d)
              return (
                d.on("scroll", x),
                () => {
                  d.off("scroll", x);
                }
              );
          }, [d, x]),
          n.createElement(
            g.Provider,
            { value: { lenis: d, addCallback: w, removeCallback: b } },
            s
              ? r
              : n.createElement(
                  "div",
                  p({ ref: c }, l),
                  n.createElement("div", { ref: f }, r)
                )
          )
        );
      });
      (y.displayName = "ReactLenis"),
        (y.propTypes = {
          children: f.node,
          root: f.bool,
          options: f.object,
          autoRaf: f.bool,
          rafPriority: f.number,
        });
    },
    8430: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return n;
        },
      });
      var n =
        "undefined" != typeof window &&
        new (class {
          constructor() {
            (this.raf = (t) => {
              requestAnimationFrame(this.raf);
              let e = t - this.now;
              this.now = t;
              for (let r = 0; r < this.callbacks.length; r++)
                this.callbacks[r].callback(t, e);
            }),
              (this.callbacks = []),
              (this.now = performance.now()),
              requestAnimationFrame(this.raf);
          }
          add(t, e = 0) {
            return (
              this.callbacks.push({ callback: t, priority: e }),
              this.callbacks.sort((t, e) => t.priority - e.priority),
              () => this.remove(t)
            );
          }
          remove(t) {
            this.callbacks = this.callbacks.filter(
              ({ callback: e }) => t !== e
            );
          }
        })();
    },
    1753: function (t, e, r) {
      "use strict";
      r.d(e, {
        $l: function () {
          return o;
        },
        BN: function () {
          return z;
        },
        DY: function () {
          return p;
        },
        J$: function () {
          return W;
        },
        JN: function () {
          return b;
        },
        LI: function () {
          return M;
        },
        PM: function () {
          return l;
        },
        W6: function () {
          return S;
        },
        i_: function () {
          return s;
        },
        kY: function () {
          return G;
        },
        ko: function () {
          return Q;
        },
        kw: function () {
          return O;
        },
        mf: function () {
          return u;
        },
        o8: function () {
          return a;
        },
        qC: function () {
          return A;
        },
        s6: function () {
          return $;
        },
        sj: function () {
          return D;
        },
        u3: function () {
          return L;
        },
        u_: function () {
          return V;
        },
        w6: function () {
          return C;
        },
        xD: function () {
          return J;
        },
      });
      var n = r(7294);
      let i = () => {},
        s = i(),
        o = Object,
        a = (t) => t === s,
        u = (t) => "function" == typeof t,
        l = (t, e) => ({ ...t, ...e }),
        c = (t) => u(t.then),
        h = new WeakMap(),
        f = 0,
        d = (t) => {
          let e, r;
          let n = typeof t,
            i = t && t.constructor,
            s = i == Date;
          if (o(t) !== t || s || i == RegExp)
            e = s
              ? t.toJSON()
              : "symbol" == n
              ? t.toString()
              : "string" == n
              ? JSON.stringify(t)
              : "" + t;
          else {
            if ((e = h.get(t))) return e;
            if (((e = ++f + "~"), h.set(t, e), i == Array)) {
              for (r = 0, e = "@"; r < t.length; r++) e += d(t[r]) + ",";
              h.set(t, e);
            }
            if (i == o) {
              e = "#";
              let n = o.keys(t).sort();
              for (; !a((r = n.pop())); )
                a(t[r]) || (e += r + ":" + d(t[r]) + ",");
              h.set(t, e);
            }
          }
          return e;
        },
        p = new WeakMap(),
        m = {},
        g = {},
        _ = "undefined",
        v = typeof window != _,
        y = typeof document != _,
        w = () => v && typeof window.requestAnimationFrame != _,
        b = (t, e) => {
          let r = p.get(t);
          return [
            () => (!a(e) && t.get(e)) || m,
            (n) => {
              if (!a(e)) {
                let i = t.get(e);
                e in g || (g[e] = i), r[5](e, l(i, n), i || m);
              }
            },
            r[6],
            () => (!a(e) && e in g ? g[e] : (!a(e) && t.get(e)) || m),
          ];
        },
        x = !0,
        [T, E] =
          v && window.addEventListener
            ? [
                window.addEventListener.bind(window),
                window.removeEventListener.bind(window),
              ]
            : [i, i],
        k = {
          initFocus: (t) => (
            y && document.addEventListener("visibilitychange", t),
            T("focus", t),
            () => {
              y && document.removeEventListener("visibilitychange", t),
                E("focus", t);
            }
          ),
          initReconnect: (t) => {
            let e = () => {
                (x = !0), t();
              },
              r = () => {
                x = !1;
              };
            return (
              T("online", e),
              T("offline", r),
              () => {
                E("online", e), E("offline", r);
              }
            );
          },
        },
        C = !n.useId,
        S = !v || "Deno" in window,
        O = (t) => (w() ? window.requestAnimationFrame(t) : setTimeout(t, 1)),
        M = S ? n.useEffect : n.useLayoutEffect,
        R = "undefined" != typeof navigator && navigator.connection,
        P =
          !S &&
          R &&
          (["slow-2g", "2g"].includes(R.effectiveType) || R.saveData),
        A = (t) => {
          if (u(t))
            try {
              t = t();
            } catch (e) {
              t = "";
            }
          let e = t;
          return [
            (t =
              "string" == typeof t
                ? t
                : (Array.isArray(t) ? t.length : t)
                ? d(t)
                : ""),
            e,
          ];
        },
        j = 0,
        L = () => ++j;
      var D = {
        __proto__: null,
        ERROR_REVALIDATE_EVENT: 3,
        FOCUS_EVENT: 0,
        MUTATE_EVENT: 2,
        RECONNECT_EVENT: 1,
      };
      async function z(...t) {
        let [e, r, n, i] = t,
          o = l(
            { populateCache: !0, throwOnError: !0 },
            "boolean" == typeof i ? { revalidate: i } : i || {}
          ),
          h = o.populateCache,
          f = o.rollbackOnError,
          d = o.optimisticData,
          m = !1 !== o.revalidate,
          g = (t) => ("function" == typeof f ? f(t) : !1 !== f),
          _ = o.throwOnError;
        if (u(r)) {
          let t = [],
            n = e.keys();
          for (let i of n)
            !/^\$(inf|sub)\$/.test(i) && r(e.get(i)._k) && t.push(i);
          return Promise.all(t.map(v));
        }
        return v(r);
        async function v(r) {
          let i;
          let [o] = A(r);
          if (!o) return;
          let [l, f] = b(e, o),
            [v, y, w, x] = p.get(e),
            T = () => {
              let t = v[o];
              return m && (delete w[o], delete x[o], t && t[0])
                ? t[0](2).then(() => l().data)
                : l().data;
            };
          if (t.length < 3) return T();
          let E = n,
            k = L();
          y[o] = [k, 0];
          let C = !a(d),
            S = l(),
            O = S.data,
            M = S._c,
            R = a(M) ? O : M;
          if ((C && f({ data: (d = u(d) ? d(R, O) : d), _c: R }), u(E)))
            try {
              E = E(R);
            } catch (t) {
              i = t;
            }
          if (E && c(E)) {
            if (
              ((E = await E.catch((t) => {
                i = t;
              })),
              k !== y[o][0])
            ) {
              if (i) throw i;
              return E;
            }
            i && C && g(i) && ((h = !0), f({ data: R, _c: s }));
          }
          if (h && !i) {
            if (u(h)) {
              let t = h(E, R);
              f({ data: t, error: s, _c: s });
            } else f({ data: E, error: s, _c: s });
          }
          if (
            ((y[o][1] = L()),
            Promise.resolve(T()).then(() => {
              f({ _c: s });
            }),
            i)
          ) {
            if (_) throw i;
            return;
          }
          return E;
        }
      }
      let N = (t, e) => {
          for (let r in t) t[r][0] && t[r][0](e);
        },
        I = (t, e) => {
          if (!p.has(t)) {
            let r = l(k, e),
              n = {},
              o = z.bind(s, t),
              a = i,
              u = {},
              c = (t, e) => {
                let r = u[t] || [];
                return (u[t] = r), r.push(e), () => r.splice(r.indexOf(e), 1);
              },
              h = (e, r, n) => {
                t.set(e, r);
                let i = u[e];
                if (i) for (let t of i) t(r, n);
              },
              f = () => {
                if (!p.has(t) && (p.set(t, [n, {}, {}, {}, o, h, c]), !S)) {
                  let e = r.initFocus(setTimeout.bind(s, N.bind(s, n, 0))),
                    i = r.initReconnect(setTimeout.bind(s, N.bind(s, n, 1)));
                  a = () => {
                    e && e(), i && i(), p.delete(t);
                  };
                }
              };
            return f(), [t, o, f, a];
          }
          return [t, p.get(t)[4]];
        },
        [F, B] = I(new Map()),
        V = l(
          {
            onLoadingSlow: i,
            onSuccess: i,
            onError: i,
            onErrorRetry: (t, e, r, n, i) => {
              let s = r.errorRetryCount,
                o = i.retryCount,
                u =
                  ~~((Math.random() + 0.5) * (1 << (o < 8 ? o : 8))) *
                  r.errorRetryInterval;
              (a(s) || !(o > s)) && setTimeout(n, u, i);
            },
            onDiscarded: i,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: P ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: P ? 5e3 : 3e3,
            compare: (t, e) => d(t) == d(e),
            isPaused: () => !1,
            cache: F,
            mutate: B,
            fallback: {},
          },
          {
            isOnline: () => x,
            isVisible: () => {
              let t = y && document.visibilityState;
              return a(t) || "hidden" !== t;
            },
          }
        ),
        Y = (t, e) => {
          let r = l(t, e);
          if (e) {
            let { use: n, fallback: i } = t,
              { use: s, fallback: o } = e;
            n && s && (r.use = n.concat(s)), i && o && (r.fallback = l(i, o));
          }
          return r;
        },
        H = (0, n.createContext)({}),
        W = (t) => {
          let { value: e } = t,
            r = (0, n.useContext)(H),
            i = u(e),
            o = (0, n.useMemo)(() => (i ? e(r) : e), [i, r, e]),
            a = (0, n.useMemo)(() => (i ? o : Y(r, o)), [i, r, o]),
            c = o && o.provider,
            h = (0, n.useRef)(s);
          c && !h.current && (h.current = I(c(a.cache || F), o));
          let f = h.current;
          return (
            f && ((a.cache = f[0]), (a.mutate = f[1])),
            M(() => {
              if (f) return f[2] && f[2](), f[3];
            }, []),
            (0, n.createElement)(H.Provider, l(t, { value: a }))
          );
        },
        q = v && window.__SWR_DEVTOOLS_USE__,
        U = q ? window.__SWR_DEVTOOLS_USE__ : [],
        X = (t) =>
          u(t[1])
            ? [t[0], t[1], t[2] || {}]
            : [t[0], null, (null === t[1] ? t[2] : t[1]) || {}],
        G = () => l(V, (0, n.useContext)(H)),
        Z = U.concat((t) => (e, r, n) => {
          let i =
            r &&
            ((...t) => {
              let [n] = A(e),
                [, , , i] = p.get(F);
              if (n.startsWith("$inf$")) return r(...t);
              let s = i[n];
              return a(s) ? r(...t) : (delete i[n], s);
            });
          return t(e, i, n);
        }),
        $ = (t) =>
          function (...e) {
            let r = G(),
              [n, i, s] = X(e),
              o = Y(r, s),
              a = t,
              { use: u } = o,
              l = (u || []).concat(Z);
            for (let t = l.length; t--; ) a = l[t](a);
            return a(n, i || o.fetcher || null, o);
          },
        Q = (t, e, r) => {
          let n = e[t] || (e[t] = []);
          return (
            n.push(r),
            () => {
              let t = n.indexOf(r);
              t >= 0 && ((n[t] = n[n.length - 1]), n.pop());
            }
          );
        },
        J =
          (t, e) =>
          (...r) => {
            let [n, i, s] = X(r),
              o = (s.use || []).concat(e);
            return t(n, i, { ...s, use: o });
          };
      q && (window.__SWR_DEVTOOLS_REACT__ = n);
    },
    5591: function (t, e, r) {
      "use strict";
      r.d(e, {
        ZP: function () {
          return u;
        },
        kY: function () {
          return s.kY;
        },
      });
      var n = r(7294),
        i = r(1688),
        s = r(1753);
      let o =
          n.use ||
          ((t) => {
            if ("pending" === t.status) throw t;
            if ("fulfilled" === t.status) return t.value;
            if ("rejected" === t.status) throw t.reason;
            throw (
              ((t.status = "pending"),
              t.then(
                (e) => {
                  (t.status = "fulfilled"), (t.value = e);
                },
                (e) => {
                  (t.status = "rejected"), (t.reason = e);
                }
              ),
              t)
            );
          }),
        a = { dedupe: !0 };
      s.$l.defineProperty(s.J$, "defaultValue", { value: s.u_ });
      let u = (0, s.s6)((t, e, r) => {
        let {
            cache: u,
            compare: l,
            suspense: c,
            fallbackData: h,
            revalidateOnMount: f,
            revalidateIfStale: d,
            refreshInterval: p,
            refreshWhenHidden: m,
            refreshWhenOffline: g,
            keepPreviousData: _,
          } = r,
          [v, y, w, b] = s.DY.get(u),
          [x, T] = (0, s.qC)(t),
          E = (0, n.useRef)(!1),
          k = (0, n.useRef)(!1),
          C = (0, n.useRef)(x),
          S = (0, n.useRef)(e),
          O = (0, n.useRef)(r),
          M = () => O.current,
          R = () => M().isVisible() && M().isOnline(),
          [P, A, j, L] = (0, s.JN)(u, x),
          D = (0, n.useRef)({}).current,
          z = (0, s.o8)(h) ? r.fallback[x] : h,
          N = (t, e) => {
            for (let r in D)
              if ("data" === r) {
                if (!l(t[r], e[r]) && (!(0, s.o8)(t[r]) || !l(U, e[r])))
                  return !1;
              } else if (e[r] !== t[r]) return !1;
            return !0;
          },
          I = (0, n.useMemo)(() => {
            let t =
                !!x &&
                !!e &&
                ((0, s.o8)(f)
                  ? !M().isPaused() && !c && (!!(0, s.o8)(d) || d)
                  : f),
              r = (e) => {
                let r = (0, s.PM)(e);
                return (delete r._k, t)
                  ? { isValidating: !0, isLoading: !0, ...r }
                  : r;
              },
              n = P(),
              i = L(),
              o = r(n),
              a = n === i ? o : r(i),
              u = o;
            return [
              () => {
                let t = r(P()),
                  e = N(t, u);
                return e
                  ? ((u.data = t.data),
                    (u.isLoading = t.isLoading),
                    (u.isValidating = t.isValidating),
                    (u.error = t.error),
                    u)
                  : ((u = t), t);
              },
              () => a,
            ];
          }, [u, x]),
          F = (0, i.useSyncExternalStore)(
            (0, n.useCallback)(
              (t) =>
                j(x, (e, r) => {
                  N(r, e) || t();
                }),
              [u, x]
            ),
            I[0],
            I[1]
          ),
          B = !E.current,
          V = v[x] && v[x].length > 0,
          Y = F.data,
          H = (0, s.o8)(Y) ? z : Y,
          W = F.error,
          q = (0, n.useRef)(H),
          U = _ ? ((0, s.o8)(Y) ? q.current : Y) : H,
          X =
            (!V || !!(0, s.o8)(W)) &&
            (B && !(0, s.o8)(f)
              ? f
              : !M().isPaused() &&
                (c ? !(0, s.o8)(H) && d : (0, s.o8)(H) || d)),
          G = !!(x && e && B && X),
          Z = (0, s.o8)(F.isValidating) ? G : F.isValidating,
          $ = (0, s.o8)(F.isLoading) ? G : F.isLoading,
          Q = (0, n.useCallback)(
            async (t) => {
              let e, n;
              let i = S.current;
              if (!x || !i || k.current || M().isPaused()) return !1;
              let o = !0,
                a = t || {},
                u = !w[x] || !a.dedupe,
                c = () =>
                  s.w6
                    ? !k.current && x === C.current && E.current
                    : x === C.current,
                h = { isValidating: !1, isLoading: !1 },
                f = () => {
                  A(h);
                },
                d = () => {
                  let t = w[x];
                  t && t[1] === n && delete w[x];
                },
                p = { isValidating: !0 };
              (0, s.o8)(P().data) && (p.isLoading = !0);
              try {
                if (
                  (u &&
                    (A(p),
                    r.loadingTimeout &&
                      (0, s.o8)(P().data) &&
                      setTimeout(() => {
                        o && c() && M().onLoadingSlow(x, r);
                      }, r.loadingTimeout),
                    (w[x] = [i(T), (0, s.u3)()])),
                  ([e, n] = w[x]),
                  (e = await e),
                  u && setTimeout(d, r.dedupingInterval),
                  !w[x] || w[x][1] !== n)
                )
                  return u && c() && M().onDiscarded(x), !1;
                h.error = s.i_;
                let t = y[x];
                if (!(0, s.o8)(t) && (n <= t[0] || n <= t[1] || 0 === t[1]))
                  return f(), u && c() && M().onDiscarded(x), !1;
                let a = P().data;
                (h.data = l(a, e) ? a : e), u && c() && M().onSuccess(e, x, r);
              } catch (r) {
                d();
                let t = M(),
                  { shouldRetryOnError: e } = t;
                !t.isPaused() &&
                  ((h.error = r),
                  u &&
                    c() &&
                    (t.onError(r, x, t),
                    (!0 === e || ((0, s.mf)(e) && e(r))) &&
                      R() &&
                      t.onErrorRetry(
                        r,
                        x,
                        t,
                        (t) => {
                          let e = v[x];
                          e && e[0] && e[0](s.sj.ERROR_REVALIDATE_EVENT, t);
                        },
                        { retryCount: (a.retryCount || 0) + 1, dedupe: !0 }
                      )));
              }
              return (o = !1), f(), !0;
            },
            [x, u]
          ),
          J = (0, n.useCallback)((...t) => (0, s.BN)(u, C.current, ...t), []);
        if (
          ((0, s.LI)(() => {
            (S.current = e), (O.current = r), (0, s.o8)(Y) || (q.current = Y);
          }),
          (0, s.LI)(() => {
            if (!x) return;
            let t = Q.bind(s.i_, a),
              e = 0,
              r = (0, s.ko)(x, v, (r, n = {}) => {
                if (r == s.sj.FOCUS_EVENT) {
                  let r = Date.now();
                  M().revalidateOnFocus &&
                    r > e &&
                    R() &&
                    ((e = r + M().focusThrottleInterval), t());
                } else if (r == s.sj.RECONNECT_EVENT)
                  M().revalidateOnReconnect && R() && t();
                else if (r == s.sj.MUTATE_EVENT) return Q();
                else if (r == s.sj.ERROR_REVALIDATE_EVENT) return Q(n);
              });
            return (
              (k.current = !1),
              (C.current = x),
              (E.current = !0),
              A({ _k: T }),
              X && ((0, s.o8)(H) || s.W6 ? t() : (0, s.kw)(t)),
              () => {
                (k.current = !0), r();
              }
            );
          }, [x]),
          (0, s.LI)(() => {
            let t;
            function e() {
              let e = (0, s.mf)(p) ? p(P().data) : p;
              e && -1 !== t && (t = setTimeout(r, e));
            }
            function r() {
              !P().error && (m || M().isVisible()) && (g || M().isOnline())
                ? Q(a).then(e)
                : e();
            }
            return (
              e(),
              () => {
                t && (clearTimeout(t), (t = -1));
              }
            );
          }, [p, m, g, x]),
          (0, n.useDebugValue)(U),
          c && (0, s.o8)(H) && x)
        ) {
          if (!s.w6 && s.W6)
            throw Error(
              "Fallback data is required when using suspense in SSR."
            );
          (S.current = e), (O.current = r), (k.current = !1);
          let t = b[x];
          if (!(0, s.o8)(t)) {
            let e = J(t);
            o(e);
          }
          if ((0, s.o8)(W)) {
            let t = Q(a);
            (0, s.o8)(U) || ((t.status = "fulfilled"), (t.value = !0)), o(t);
          } else throw W;
        }
        return {
          mutate: J,
          get data() {
            return (D.data = !0), U;
          },
          get error() {
            return (D.error = !0), W;
          },
          get isValidating() {
            return (D.isValidating = !0), Z;
          },
          get isLoading() {
            return (D.isLoading = !0), $;
          },
        };
      });
    },
    4529: function (t, e, r) {
      "use strict";
      r.d(e, {
        Ue: function () {
          return c;
        },
      });
      let n = (t) => {
          let e;
          let r = new Set(),
            n = (t, n) => {
              let i = "function" == typeof t ? t(e) : t;
              if (!Object.is(i, e)) {
                let t = e;
                (e = (null != n ? n : "object" != typeof i)
                  ? i
                  : Object.assign({}, e, i)),
                  r.forEach((r) => r(e, t));
              }
            },
            i = () => e,
            s = {
              setState: n,
              getState: i,
              subscribe: (t) => (r.add(t), () => r.delete(t)),
              destroy: () => {
                console.warn(
                  "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
                ),
                  r.clear();
              },
            };
          return (e = t(n, i, s)), s;
        },
        i = (t) => (t ? n(t) : n);
      var s = r(7294),
        o = r(2798);
      let { useSyncExternalStoreWithSelector: a } = o,
        u = !1,
        l = (t) => {
          "function" != typeof t &&
            console.warn(
              "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
            );
          let e = "function" == typeof t ? i(t) : t,
            r = (t, r) =>
              (function (t, e = t.getState, r) {
                r &&
                  !u &&
                  (console.warn(
                    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
                  ),
                  (u = !0));
                let n = a(
                  t.subscribe,
                  t.getState,
                  t.getServerState || t.getState,
                  e,
                  r
                );
                return (0, s.useDebugValue)(n), n;
              })(e, t, r);
          return Object.assign(r, e), r;
        },
        c = (t) => (t ? l(t) : l);
    },
  },
  function (t) {
    var e = function (e) {
      return t((t.s = e));
    };
    t.O(0, [774, 179], function () {
      return e(1118), e(6885);
    }),
      (_N_E = t.O());
  },
]);
