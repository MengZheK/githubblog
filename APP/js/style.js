var YUEWEN = function(e, t, a) {
  var n = "active",
  r = "reverse",
  exports = {
    el: {},
    load: function(t, a) {
      var n = this;
      a = a ||
      function() {};
      var r = document.createElement("script");
      r.onload = function() {
        r.isInited || (r.isInited = !0, a.call(n))
      },
      r.onreadystatechange = function() { ! r.isInited && /^loaded|complete$/.test(r.readyState) && (r.isInited = !0, a.call(n))
      },
      r.src = t,
      e.getElementsByTagName("head")[0].appendChild(r)
    },
    scrollLoading: function(a) {
      var n = [];
      if (a && a.length) {
        a.each(function() {
          e.querySelector && (this.src = "data:image/gif;base64,R0lGODlhCgAKAIAAAP///wAAACH5BAEAAAAALAAAAAAKAAoAAAIIhI+py+0PYysAOw=="),
          n.push({
            obj: this,
            src: $(this).attr("data-src")
          })
        });
        var r = function() {
          var e = $(t).height(),
          a = $(t).width();
          $.each(n,
          function(t, n) {
            var r = n.obj;
            if (r) {
              var i = r.getBoundingClientRect();
              if (0 != i.left || 0 != i.top) {
                var s = r.clientWidth,
                o = r.clientHeight,
                l = !1;
                i.top + o >= 0 && i.top < e && (l = !0);
                var c = !1;
                i.left + s >= 0 && i.left < a && (c = !0),
                l && c && (r.src = n.src, r.removeAttribute("data-src"), n.obj = null)
              }
            }
          })
        };
        this.el.container.on("scroll", r),
        this.el.container.on("resize", r),
        r()
      }
    },
    swipe: function(e, t, a) {
      var n = this;
      if (0 == $.isFunction(a)) return n;
      var r = {
        x: 0,
        y: 0
      },
      i = {},
      s = {
        start: function(e) {
          var t = e.touches[0];
          r = {
            x: t.pageX,
            y: t.pageY,
            time: +new Date
          }
        },
        move: function(e) {
          if (! (e.touches.length > 1 || e.scale && 1 !== e.scale)) {
            var t = e.touches[0];
            i = {
              x: t.pageX - r.x,
              y: t.pageY - r.y
            }
          }
        },
        end: function(n) {
          var o = +new Date - r.time,
          l = Number(o) < 500;
          if (l) {
            var c = Math.abs(i.x),
            d = Math.abs(i.y);
            c > 20 && d < c && (i.x < 0 && "left" == t || i.x > 0 && "right" == t) && a.call(e[0], s),
            d > 20 && c < d && (i.y < 0 && "top" == t || i.y > 0 && "bottom" == t) && a.call(e[0], s)
          }
          r = {},
          i = {}
        }
      };
      return e.on("touchstart", s.start),
      e.on("touchmove", s.move),
      e.on("touchend", s.end),
      n
    },
    slide: function(e, t) {
      var a = this;
      if ("string" == typeof e && (e = $(e)), e && e.length) {
        var r = 0,
        i = $.map(e,
        function(e, t) {
          var a = "";
          return e = $(e),
          e.hasClass(n) ? r = t: (a = e.attr("data-hash")) && location.hash.replace("#", "") == a && (r = t),
          $("#" + e.data("index", t).attr("data-rel"))
        });
        e.eq(r).addClass(n),
        e.on("click",
        function() {
          var e = $(this),
          t = +e.data("index");
          0 == e.hasClass(n) && s(t)
        });
        var s = function(s) {
          e.eq(r).removeClass(n),
          e.eq(s).addClass(n),
          $(i[r]).removeClass(n),
          $(i[s]).addClass(n),
          $.isFunction(t) && t.call(a, e.eq(s), i[s], e.eq(r), i[r]),
          r = s
        }
      }
      return this
    },
    slidePreload: function() {
      var e = this;
      return e.isPreload = !0,
      e
    },
    slideHomeApp: function() {
      var e = this,
      a = e.el.tabApp = $("#tabApp"),
      r = e.el.tabLine = $("#tabLine"),
      i = a.find("a"),
      s = function(i) {
        var s = a.find("." + n),
        o = 0;
        if (s.length && (o = s.position().left, r.css({
          width: s.width()
        }), history.pushState ? r.css({
          webkitTransform: "translateX(" + o + "px)",
          transform: "translateX(" + o + "px)"
        }) : r.css({
          left: s.position().left
        })), t.FN_hash && i !== !0) {
          var l = s.attr("data-hash");
          location.replace(location.href.split("#")[0] + "#" + l),
          FN_hash(),
          e.el.container.trigger("scroll")
        }
      };
      if (e.slide(i, s), s(!0), "S" == t.SIZE) {
        var o = $("#mobile ul");
        e.swipe(o, "left",
        function() {
          var e = 1 * a.find("." + n).data("index");
          e++,
          e > i.length - 1 && (e = 0),
          i.eq(e).trigger("click")
        }),
        e.swipe(o, "right",
        function() {
          var e = 1 * a.find("." + n).data("index");
          e--,
          e < 0 && (e = i.length - 1),
          i.eq(e).trigger("click")
        }),
        $("#mobile a").removeAttr("target"),
        $(".mNoBlank").removeAttr("target")
      }
      return e
    },
    slideBrand: function() {
      var e, t, a = this,
      i = a.el.brandDescX = $("#brandDescX"),
      s = a.el.brandNavX = $("#brandNavX");
      return i.length && s.length && (e = i.find("li"), t = s.find("a"), t.each(function(t) {
        $(this).data("index", t).on("mouseenter",
        function() {
          var t = $(this),
          i = null,
          o = -1,
          l = t.data("index");
          clearTimeout(a.timerNavHover),
          a.timerNavHover = setTimeout(function() {
            if (t.hasClass(n) === !1) {
              i = s.find("." + n),
              1 == i.length && (o = i.data("index"), i.removeClass(n)),
              t.addClass(n);
              var a = !1;
              l < o && (a = !0);
              var c = e.eq(o);
              c.length && (c.removeClass("in").removeClass(r).addClass("out"), a && c.addClass(r)),
              e.eq(l).addClass("in").removeClass(r).removeClass("out"),
              a && e.eq(l).addClass(r)
            }
          },
          225)
        })
      }), s.on("mouseleave",
      function() {
        clearTimeout(a.timerNavHover)
      })),
      a
    },
    slideHomeHeader: function() {
      var a = this,
      r = a.el.header,
      i = a.el.dots;
      if (r.length) {
        var s = function() {
          a.timerSlide || (a.timerSlide = setInterval(function() {
            var e = 1 * $("#hdDotX ." + n).data("index") + 1;
            i[e] || (e = 0),
            i.eq(e).trigger("click")
          },
          5e3))
        };
        "S" !== t.SIZE ? (r.on("mouseenter",
        function() {
          clearInterval(a.timerSlide),
          a.timerSlide = null
        }).on("mouseleave",
        function() {
          s()
        }), $(e).on("mouseover",
        function() {
          a.isPreload || (setTimeout(function() {
            a.isPreload || a.slidePreload()
          },
          4e3), setTimeout(function() {
            s()
          },
          5e3))
        })) : (a.swipe(r, "left",
        function() {
          var e = 1 * $("#hdDotX ." + n).data("index");
          e++,
          e > i.length - 1 && (e = 0),
          i.eq(e).trigger("click")
        }), a.swipe(r, "right",
        function() {
          var e = 1 * $("#hdDotX ." + n).data("index");
          e--,
          e < 0 && (e = i.length - 1),
          i.eq(e).trigger("click")
        }))
      }
      return this
    },
    scrollBarFixed: function() {
      var a = this,
      r = a.el.header,
      i = a.el.container;
      a.el.hdBar = $("#ywHdBar");
      var s, o = $("#ywMnavBtn"),
      l = $("#ywMnavName");
      a.el.barNav = o;
      var c = 0,
      d = [],
      h = $("#ywMnav > a").each(function(e) {
        var t = this.getAttribute("href");
        /^#/.test(t) && d.push($(t));
        var a = location.hash.replace("&", "");
        a == t && (c = e)
      });
      if (r.length) if ("S" == t.SIZE) s = a.el.hdBar,
      i.on("scroll",
      function(e) {
        var t = $(this).scrollTop();
        t <= 0 ? (s.removeClass("fixed"), s.css("opacity", 1)) : (s.addClass("fixed"), s.css("opacity", Math.min(t, 30) / 30));
        var a = $.map(d,
        function(module) {
          return module[0].getBoundingClientRect().top
        }),
        r = $.map(a,
        function(e) {
          return Math.abs(e)
        }),
        i = Math.min.apply(null, r);
        $.each(a,
        function(e, t) { (0 == e && t > 0 || e == a.length - 1 && t < 0 || Math.abs(t) == i) && (h.removeClass(n), l.html(h.eq(e).addClass(n).html()), c = e)
        })
      }),
      o.on("touchstart",
      function() {
        $(this).toggleClass(n)
      });
      else if (!t.APP) {
        if (s = $("#ywBarX"), 0 == s.length) return a;
        a.el.barX = s;
        var u = s[0].className.split(" ")[0] + "-fixed",
        f = function(e, t) {
          h.removeClass(n),
          h.eq(e).addClass(n);
          var a = h.eq(e).attr("href");
          /#/.test(a) && location.replace("#&" + a.split("#")[1]),
          c = e
        };
        a.el.container.on("scroll",
        function() {
          var t = $(this).scrollTop();
          return t <= 0 ? (s.removeClass(u), s.css("opacity", 1)) : (s.addClass(u), s.css("opacity", Math.min(t, 50) / 50)),
          a.triggerScroll ? void $.each(d,
          function(e, t) {
            t[0] == a.triggerScroll && (c = e)
          }) : t == e.documentElement.scrollHeight - e.documentElement.clientHeight ? (c = d.length - 1, void f(c, !0)) : void $.each(d,
          function(e, module) {
            var t = module[0];
            c !== e && Math.abs(t.getBoundingClientRect().top) <= 75 && f(e, !0)
          })
        }),
        0 != c && f(c),
        a.el.container.trigger("scroll")
      }
      return a
    },
    tapHomeCopy: function() {
      var a = this;
      a.el.copy = $("#ywCopyX");
      var r = null,
      i = null,
      s = a.el.copy;
      if (s.length && "S" == t.SIZE) {
        var o = Math.round((s[0].scrollWidth - s.width()) / 2);
        s.scrollLeft(o),
        s.on("scroll",
        function() {
          a.el.container.trigger("scroll"),
          this.scrollEd || s.scrollLeft() === o || ($("#copyright svg").hide(), this.scrollEd = !0)
        });
        var l = {
          x: 0,
          y: 0
        };
        s.find("li > div").on({
          touchstart: function(e) {
            var t = e.touches[0] || e;
            l = {
              x: t.pageX,
              y: t.pageY
            };
            var a = this;
            i = a,
            r = setTimeout(function() {
              i == a && $(a).addClass(n)
            },
            500)
          }
        }),
        $(e).on("touchend",
        function() {
          clearTimeout(r),
          i = null,
          s.find("." + n).removeClass(n)
        }).on("touchmove",
        function(e) {
          var t = e.touches[0] || e; (Math.abs(t.pageX - l.x) > 5 || Math.abs(t.pageY - l.y) > 5) && clearTimeout(r)
        })
      } else if (s.length) {
        var c = s.find("ul"),
        d = parseInt(c.css("marginLeft"));
        c.find("li").on("mouseenter",
        function() {
          var e = this.getBoundingClientRect(),
          a = 0,
          n = $(t).width(); (e.left < 0 || e.right > n) && (a = e.left < 0 ? Math.floor( - 1 * e.left) : Math.ceil(n - e.right), [].map ? c.css({
            msTransform: "translateX(" + a + "px)",
            transform: "translateX(" + a + "px)"
          }) : c.css("marginLeft", d + a))
        }).on("mouseleave",
        function() { [].map ? c.css({
            msTransform: "none",
            transform: "none"
          }) : c.css("marginLeft", d)
        })
      }
      return a
    },
    getNews: function() {
      var a = this,
      n = a.urlNewsList,
      r = $("#tempNews"),
      i = r.parent(),
      s = $("#newsLoading"),
      o = r.html();
      $.template = function(e, t) {
        return e.replace(/\$\w+\$/gi,
        function(e) {
          var a = t[e.replace(/\$/g, "")];
          return a + "" == "undefined" ? "": a
        })
      };
      var l = function(e) {
        return $.map(e,
        function(e) {
          return $.each(e,
          function(t, a) {
            e[t] = a.replace(/<|&|>/g,
            function(e) {
              return {
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;"
              } [e]
            }),
            "created_at" == t ? e[t] = e[t].split(" ")[0] : "desc" == t && (e[t] = e[t].replace(/\r|\n/g, "<br>"))
          }),
          $.template(o, e)
        }).join("")
      },
      c = $("#ywNewslay"),
      d = c.children("div");
      c.delegate(".jsShut", "click",
      function() {
        c.hide(),
        "S" != t.SIZE && (e.documentElement.style.overflow = "", $(e.body).css("border-right", "0"))
      });
      var h = function(e) {
        return '<p class="yw-news-fn">' + e + "</p>"
      },
      u = h("已全部加载完毕");
      if (c.delegate(".jsLayMore", "click",
      function() {
        var e = $(this),
        t = e.attr("data-page");
        e.html("加载中..."),
        $.ajax({
          url: n,
          dataType: "json",
          data: {
            more: 1,
            page: t
          },
          success: function(t) {
            var a = t.data && t.data.listInfo,
            n = t.data && t.data.pageInfo;
            if (0 == t.code && a && a.length > 0 && n) {
              var r = l(a);
              return e.before(r),
              void(n.pageIndex >= n.pageMax ? e.before(u).remove() : e.attr("data-page", n.pageIndex + 1))
            }
            e.before(u).remove()
          },
          complete: function() {
            e.html("查看更多")
          },
          error: function() {
            e.before(h("网络异常，没有加载成功")).remove()
          }
        })
      }), i.delegate("a[data-page]", "click",
      function() {
        var r = {
          more: 1,
          page: $(this).attr("data-page")
        };
        if (c.show(), "S" != t.SIZE) {
          var i = 17;
          "number" == typeof t.innerWidth && (i = t.innerWidth - e.documentElement.clientWidth),
          e.documentElement.style.overflow = "hidden",
          $(e.body).css("border-right", i + "px solid transparent")
        }
        var s = "yw-news-lay";
        d.hasClass(s) || $.ajax({
          url: n,
          dataType: "json",
          data: r,
          success: function(e) {
            if (0 == e.code) {
              var n = "",
              r = [];
              if (e.data && e.data.listInfo) {
                r = e.data.listInfo;
                var i = e.data.pageInfo || {
                  totalCount: 0,
                  pageIndex: 1,
                  pageNum: 2,
                  pageMax: 1
                };
                n = l(r),
                i.pageIndex < i.pageMax ? n = n + '<a href="javascript:" class="yw-btn-blue jsLayMore" data-page="' + (i.pageIndex + 1) + '">查看更多</a>': n += u
              } else n = l(a.jsonNews);
              d.addClass(s),
              "S" == t.SIZE ? d.css({
                width: window.innerWidth - 20,
                height: window.innerHeight - 20
              }) : d.css({
                width: 960,
                height: "90%"
              }),
              n = '<a href="javascript:" class="' + s + '-shut jsShut">×</a><div class="' + s + '-x">' + n + "</div>",
              history.pushState ? setTimeout(function() {
                d.html(n)
              },
              250) : d.html(n)
            } else d.html('<div class="error">' + (e.msg || "网络异常，稍后重试") + "</div>")
          },
          error: function() {
            d.html('<div class="error">网络异常，稍后重试</div>')
          }
        })
      }), n) {
        var f = "新闻内容没能获取成功，" + ([].map ? '<a href="javascript:" onclick="$(this).parent().empty();YUEWEN.getNews();" style="color:#019EE4;">点击这里</a>重试。': '<a href="">刷新</a>重试。');
        $.ajax({
          url: n,
          dataType: "json",
          success: function(e) {
            0 == e.code ? e.data && e.data.length ? (i.html(l(e.data) + '<a href="javascript:" class="yw-btn-blue" data-page="1">查看更多 &gt;</a>'), a.jsonNews = e.data) : s.html("新闻已下架，编辑正在更新内容，请稍等...") : s.html(e.msg || f)
          },
          error: function() {
            s.html(f)
          }
        })
      }
      return a
    },
    showImage: function(e) {
      var t = this,
      a = t.el.overlay;
      if (a) {
        if (a.data("lasturl") === e) return void a.addClass(n).show();
        a.html(a.data("origin"))
      } else a = $("#ywOverlay"),
      a.data("origin", a.html()).on("click",
      function() {
        $(this).removeClass(n).hide()
      }),
      t.el.overlay = a;
      var r = a.children("div").removeAttr("style");
      a.show();
      var i = new Image;
      return i.onload = function() {
        var t = this.width,
        n = this.height;
        setTimeout(function() {
          r.css({
            width: t,
            height: n
          }).html('<img src="' + e + '">'),
          a.data("lasturl", e)
        },
        200)
      },
      i.onerror = function() {
        r.html('<div class="error">图片显示异常，请重试</div>')
      },
      i.src = e,
      this
    },
    scrollIntoView: function(e, a, n) {
      var r = this,
      i = r.el.container;
      n = n || "top";
      var s = "scroll" + n.slice(0, 1).toUpperCase() + n.slice(1, n.length);
      if (e && e.length) {
        clearTimeout(r.timerScroll);
        var o = i[s](),
        l = e.offset()[n] + o;
        "S" == t.SIZE ? l -= 50 : t.APP || (l = e.offset()[n] - 74);
        var c = 10,
        d = o,
        h = function() {
          var t = (l - d) / c;
          Math.abs(t) < 1 / c ? (i[s](l), $.isFunction(a) && a.call(e[0])) : (d += t, i[s](d), r.timerScroll = setTimeout(h, 20))
        };
        h()
      }
      return r
    },
    eventsGlobal: function() {
      var a = this;
      return $(e).delegate("a", "click",
      function(e) {
        var r = this.getAttribute("href");
        this.href;
        /^#/.test(r) ? (a.scrollIntoView($(r),
        function() {
          "S" != t.SIZE && (location.replace("#&" + r.split("#")[1]), a.triggerScroll = null)
        }), "S" == t.SIZE || /nav/.test(this.className) && (a.triggerScroll = this, $(this).addClass(n).siblings("a").removeClass(n)), e.preventDefault()) : /\.(?:png|jpg)$/.test(r) ? (a.showImage(r), e.preventDefault()) : /#/.test(r) && ($(this).parent().find("." + n).removeClass(n), $(this).addClass(n))
      }),
      this.scrollLoading($("img[data-src]")),
      a
    },
    eventsHome: function() {
      var e = this;
      e.slideHomeHeader(),
      e.scrollBarFixed(),
      e.slideHomeApp(),
      e.slideBrand(),
      e.tapHomeCopy();
      var a;
      return "S" == t.SIZE && (a = e.el.barNav || $("#ywMnavBtn"), $("#ywMnav").click(function() {
        a.removeClass(n)
      })),
      e.getNews(),
      e
    },
    eventsApp: function() {
      var e = this,
      a = /Android/i,
      n = a.test(navigator.userAgent);
      "S" == t.SIZE && $("a[data-href]").each(function() {
        $(this).attr("href", $(this).attr("data-href")).removeAttr("data-href")
      }),
      $(".dlBtn").each(function() {
        var e = this,
        t = e.getAttribute("href");
        "" == t && $(e).siblings("a").each(function() {
          var t = this.innerHTML;
          n && a.test(t) ? e.href = this.href: 0 == n && /ios/i.test(t) && (e.href = this.href)
        })
      }),
      e.scrollBarFixed(),
      e.slideHomeApp();
      var r = 1; ! [].map && (r = $(t).width() / 1440) > 1 && e.el.header.css("overflow", "hidden").find("s").each(function() {
        var e = $(this);
        e.css("zoom", r).css("left", -.5 * $(t).width() * (r - 1))
      });
      var i = e.el.tabApp;
      return i && i.find("a").on({
        mouseenter: function() {
          var e = this,
          t = $(e),
          a = -1,
          n = "";
          e.isPreload || (a = +t.data("index") + 1, n = $("#hdAPP" + a).find("s").css("background-image"), n && (n = n.split('"')[1], n && ((new Image).src = n))),
          e.isPreload = !0
        }
      }),
      e
    },
    init: function() {
      var e = this;
      return e.el.container = "S" == t.SIZE ? $("#ywPage") : $(t),
      e.el.header = $("#ywHeader"),
      e.el.dots = $("#hdDotX a"),
      t.APP ? e.eventsApp() : e.eventsHome(),
      e.eventsGlobal(),
      e
    }
  };
  return exports
} (document, window);