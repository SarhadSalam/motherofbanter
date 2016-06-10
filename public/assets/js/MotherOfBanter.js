/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/


/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = a.document,
        m = "2.1.4",
        n = function (a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function () {
            return d.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a, b) {
            return n.each(this, a, b)
        },
        map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {
        },
        isFunction: function (a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function (a) {
            return null != a && a === a.window
        },
        isNumeric: function (a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function (a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function (a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        },
        merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function (a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            aa = /[+~]/,
            ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            da = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ea = function () {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                    return p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {
            }
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function (a) {
                    return a = a.replace(ca, da),
                        function (b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function (a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
                        function (b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === o
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !d.pseudos.empty(a)
                },
                header: function (a) {
                    return Z.test(a.nodeName)
                },
                input: function (a) {
                    return Y.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: oa(function () {
                    return [0]
                }),
                last: oa(function (a, b) {
                    return [b - 1]
                }),
                eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);

        function qa() {
        }

        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                return a === b
            }, h, !0), l = sa(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                                value: " " === a[i - 2].type ? "*" : ""
                            })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                    }
                    m.push(c)
                }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = F.call(i));
                            s = va(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ia(f) : f
        }

        return h = ga.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c
        })
    }

    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function (a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function (a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = n.fn.init = function (a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function (a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function (a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }

    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function (a) {
            return D(a, "nextSibling")
        },
        prev: function (a) {
            return D(a, "previousSibling")
        },
        nextAll: function (a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return n.sibling(a.firstChild)
        },
        contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    n.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function (l) {
                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
            },
            k = {
                add: function () {
                    if (h) {
                        var c = h.length;
                        !function g(b) {
                            n.each(b, function (b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                            })
                        }(arguments), d ? f = h.length : b && (e = c, j(b))
                    }
                    return this
                },
                remove: function () {
                    return h && n.each(arguments, function (a, b) {
                        var c;
                        while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                    }), this
                },
                has: function (a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function () {
                    return h = [], f = 0, this
                },
                disable: function () {
                    return h = i = b = void 0, this
                },
                disabled: function () {
                    return !h
                },
                lock: function () {
                    return i = void 0, b || k.disable(), this
                },
                locked: function () {
                    return !i
                },
                fireWith: function (a, b) {
                    return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
                },
                fire: function () {
                    return k.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!c
                }
            };
        return k
    }, n.extend({
        Deferred: function (a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });

    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }

    n.ready.promise = function (b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(n(a), c)
            })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }

    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function (a) {
            if (!K.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function (a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function (a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--) delete g[d[c]]
            }
        },
        hasData: function (a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K,
        M = new K,
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {
                }
                M.set(a, b, c)
            } else c = void 0;
        return c
    }

    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function (a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function (a, b) {
            M.remove(a, b)
        },
        _data: function (a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function (a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                M.set(this, a)
            }) : J(this, function (b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c
                } else this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function (a) {
            return this.each(function () {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function () {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                    empty: n.Callbacks("once memory").add(function () {
                        L.remove(a, [b + "queue", c])
                    })
                })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function (a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        },
        T = /^(?:checkbox|radio)$/i;
    !function () {
        var a = l.createDocumentFragment(),
            b = a.appendChild(l.createElement("div")),
            c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
        W = /^(?:mouse|pointer|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {
        }
    }

    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l],
                q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (L.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
            else if (!d) return this;
            return 1 === e && (f = d, d = function (a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ba = /<([\w:]+)/,
        ca = /<|&#?\w+;/,
        da = /<(?:script|style|link)/i,
        ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fa = /^$|\/(?:java|ecma)script/i,
        ga = /^true\/(.*)/,
        ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ia = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);
                else na(a, h);
            return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
                    else if (ca.test(e)) {
                        f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
                        while (j--) f = f.lastChild;
                        n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                    } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++])
                if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                    j = 0;
                    while (e = f[j++]) fa.test(e.type || "") && c.push(e)
                }
            return k
        },
        cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        },
        html: function (a) {
            return J(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                m = this,
                o = l - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qa, ra = {};

    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function ta(a) {
        var b = l,
            c = ra[a];
        return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
    }

    var ua = /^margin/,
        va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wa = function (b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };

    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function ya(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    !function () {
        var b, c, d = l.documentElement,
            e = l.createElement("div"),
            f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }

            a.getComputedStyle && n.extend(k, {
                pixelPosition: function () {
                    return g(), b
                },
                boxSizingReliable: function () {
                    return null == c && g(), c
                },
                reliableMarginRight: function () {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
                }
            })
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var za = /^(none|table(?!-c[ea]).+)/,
        Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
        Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
        Ca = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Da = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ea = ["Webkit", "O", "Moz", "ms"];

    function Fa(a, b) {
        if (b in a) return b;
        var c = b[0].toUpperCase() + b.slice(1),
            d = b,
            e = Ea.length;
        while (e--)
            if (b = Ea[e] + c, b in a) return b;
        return d
    }

    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ia(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = wa(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
                    return Ia(a, b, d)
                }) : Ia(a, b, d) : void 0
            },
            set: function (a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xa, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ua.test(a) || (n.cssHooks[a + b].set = Ga)
    }), n.fn.extend({
        css: function (a, b) {
            return J(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function () {
            return Ja(this, !0)
        },
        hide: function () {
            return Ja(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e)
    }

    n.Tween = Ka, Ka.prototype = {
        constructor: Ka,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/,
        Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pa = /queueHooks$/,
        Qa = [Va],
        Ra = {
            "*": [function (a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = Oa.exec(b),
                    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function Sa() {
        return setTimeout(function () {
            La = void 0
        }), La = n.now()
    }

    function Ta(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && S(a),
            q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Na.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide()
            }), l.done(function () {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function Xa(a, b, c) {
        var d, e, f = 0,
            g = Qa.length,
            h = n.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: La || Sa(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++)
            if (d = Qa[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    n.Animation = n.extend(Xa, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
        },
        prefilter: function (a, b) {
            b ? Qa.unshift(a) : Qa.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a),
                f = n.speed(b, c, d),
                g = function () {
                    var b = Xa(this, n.extend({}, a), f);
                    (e || L.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = n.timers,
                    g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        },
        finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = L.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = n.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0,
            c = n.timers;
        for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), La = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        clearInterval(Ma), Ma = null
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    },
        function () {
            var a = l.createElement("input"),
                b = l.createElement("select"),
                c = b.appendChild(l.createElement("option"));
            a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
        }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Za = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function (a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
        }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0,
                        e = n(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function (a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cb = n.now(),
        db = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, n.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var eb = /#.*$/,
        fb = /([?&])_=[^&]*/,
        gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ib = /^(?:GET|HEAD)$/,
        jb = /^\/\//,
        kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        lb = {},
        mb = {},
        nb = "*/".concat("*"),
        ob = a.location.href,
        pb = kb.exec(ob.toLowerCase()) || [];

    function qb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function rb(a, b, c, d) {
        var e = {},
            f = a === mb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function tb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else try {
                            b = g(b)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: g ? l : "No conversion from " + i + " to " + f
                            }
                        }
                }
        return {
            state: "success",
            data: b
        }
    }

    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2]
                            }
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? e : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            }) v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function (a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b))
            } : function () {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var vb = /%20/g,
        wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function (b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }

    n.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) Ab(c, a[c], b, e);
        return d.join("&").replace(vb, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Bb = 0,
        Cb = {},
        Db = {
            0: 200,
            1223: 204
        },
        Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Cb) Cb[a]()
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(),
                    g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function () {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                },
                abort: function () {
                    c && c()
                }
            }
        }
    });
    var Fb = [],
        Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hb = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Ib = a.document.documentElement;

    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function () {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || Ib;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ib
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var Kb = a.jQuery,
        Lb = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

!function (a) {
    "use strict";
    var b = a.HTMLCanvasElement && a.HTMLCanvasElement.prototype,
        c = a.Blob && function () {
                try {
                    return Boolean(new Blob)
                } catch (a) {
                    return !1
                }
            }(),
        d = c && a.Uint8Array && function () {
                try {
                    return 100 === new Blob([new Uint8Array(100)]).size
                } catch (a) {
                    return !1
                }
            }(),
        e = a.BlobBuilder || a.WebKitBlobBuilder || a.MozBlobBuilder || a.MSBlobBuilder,
        f = (c || e) && a.atob && a.ArrayBuffer && a.Uint8Array && function (a) {
                var b, f, g, h, i, j;
                for (b = a.split(",")[0].indexOf("base64") >= 0 ? atob(a.split(",")[1]) : decodeURIComponent(a.split(",")[1]), f = new ArrayBuffer(b.length), g = new Uint8Array(f), h = 0; h < b.length; h += 1) g[h] = b.charCodeAt(h);
                return i = a.split(",")[0].split(":")[1].split(";")[0], c ? new Blob([d ? g : f], {
                    type: i
                }) : (j = new e, j.append(f), j.getBlob(i))
            };
    a.HTMLCanvasElement && !b.toBlob && (b.mozGetAsFile ? b.toBlob = function (a, c, d) {
        a(d && b.toDataURL && f ? f(this.toDataURL(c, d)) : this.mozGetAsFile("blob", c))
    } : b.toDataURL && f && (b.toBlob = function (a, b, c) {
        a(f(this.toDataURL(b, c)))
    })), "function" == typeof define && define.amd ? define(function () {
        return f
    }) : a.dataURLtoBlob = f
}(window);
/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2015
 * @version 4.2.8
 *
 * File input styled for Bootstrap 3.0 that utilizes HTML5 File Input's advanced 
 * features including the FileReader API. 
 * 
 * The plugin drastically enhances the HTML file input to preview multiple files on the client before
 * upload. In addition it provides the ability to preview content of images, text, videos, audio, html, 
 * flash and other objects. It also offers the ability to upload and delete files using AJAX, and add 
 * files in batches (i.e. preview, append, or remove before upload).
 * 
 * Author: Kartik Visweswaran
 * Copyright: 2015, Kartik Visweswaran, Krajee.com
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */
!function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(window.jQuery)
}(function (e) {
    "use strict";
    e.fn.fileinputLocales = {};
    var i, t, a, r, n, l, o, s, d, c, p, u, f, v, g, m, h, w, b, C, x, y, T, F, I, E, k, S, $, P, D, U, A, j, L, z, O, R, M, B, N, Z, H, W, q, _, V, K, X, J, Q, Y;
    i = function (e) {
        if ("Microsoft Internet Explorer" !== navigator.appName) return !1;
        if (10 === e) return new RegExp("msie\\s" + e, "i").test(navigator.userAgent);
        var i, t = document.createElement("div");
        return t.innerHTML = "<!--[if IE " + e + "]> <i></i> <![endif]-->", i = t.getElementsByTagName("i").length, document.body.appendChild(t), t.parentNode.removeChild(t), i
    }, t = function () {
        return new RegExp("Edge/[0-9]+", "i").test(navigator.userAgent)
    }, a = function (e, i, t, a) {
        var r = a ? i : i + ".fileinput";
        e.off(r).on(r, t)
    }, r = {
        data: {},
        init: function (e) {
            var i = e.initialPreview,
                t = e.id;
            i.length > 0 && !q(i) && (i = i.split(e.initialPreviewDelimiter)), r.data[t] = {
                content: i,
                config: e.initialPreviewConfig,
                tags: e.initialPreviewThumbTags,
                delimiter: e.initialPreviewDelimiter,
                template: e.previewGenericTemplate,
                msg: function (i) {
                    return e.getMsgSelected(i)
                },
                initId: e.previewInitId,
                footer: e.getLayoutTemplate("footer").replace(/\{progress}/g, e.renderThumbProgress()),
                isDelete: e.initialPreviewShowDelete,
                caption: e.initialCaption,
                actions: function (i, t, a, r, n) {
                    return e.renderFileActions(i, t, a, r, n)
                }
            }
        },
        fetch: function (e) {
            return r.data[e].content.filter(function (e) {
                return null !== e
            })
        },
        count: function (e, i) {
            return r.data[e] && r.data[e].content ? i ? r.data[e].content.length : r.fetch(e).length : 0
        },
        get: function (i, t, a) {
            var n, l, o = "init_" + t,
                s = r.data[i],
                d = s.config[t],
                c = s.initId + "-" + o,
                p = " file-preview-initial";
            return a = void 0 === a ? !0 : a, null === s.content[t] ? "" : (W(d) || W(d.frameClass) || (p += " " + d.frameClass), n = s.template.replace(/\{previewId}/g, c).replace(/\{frameClass}/g, p).replace(/\{fileindex}/g, o).replace(/\{content}/g, s.content[t]).replace(/\{footer}/g, r.footer(i, t, a)), s.tags.length && s.tags[t] && (n = J(n, s.tags[t])), W(d) || W(d.frameAttr) || (l = e(document.createElement("div")).html(n), l.find(".file-preview-initial").attr(d.frameAttr), n = l.html(), l.remove()), n)
        },
        add: function (i, t, a, n, l) {
            var o, s = e.extend(!0, {}, r.data[i]);
            return q(t) || (t = t.split(s.delimiter)), l ? (o = s.content.push(t) - 1, s.config[o] = a, s.tags[o] = n) : (o = t.length, s.content = t, s.config = a, s.tags = n), r.data[i] = s, o
        },
        set: function (i, t, a, n, l) {
            var o, s, d = e.extend(!0, {}, r.data[i]);
            if (t && t.length && (q(t) || (t = t.split(d.delimiter)), s = t.filter(function (e) {
                    return null !== e
                }), s.length)) {
                if (void 0 === d.content && (d.content = []), void 0 === d.config && (d.config = []), void 0 === d.tags && (d.tags = []), l) {
                    for (o = 0; o < t.length; o++) t[o] && d.content.push(t[o]);
                    for (o = 0; o < a.length; o++) a[o] && d.config.push(a[o]);
                    for (o = 0; o < n.length; o++) n[o] && d.tags.push(n[o])
                } else d.content = t, d.config = a, d.tags = n;
                r.data[i] = d
            }
        },
        unset: function (e, i) {
            var t = r.count(e);
            if (t) {
                if (1 === t) return r.data[e].content = [], void(r.data[e].config = []);
                r.data[e].content[i] = null, r.data[e].config[i] = null
            }
        },
        out: function (e) {
            var i, t = "",
                a = r.data[e],
                n = r.count(e, !0);
            if (0 === n) return {
                content: "",
                caption: ""
            };
            for (var l = 0; n > l; l++) t += r.get(e, l);
            return i = a.msg(r.count(e)), {
                content: t,
                caption: i
            }
        },
        footer: function (e, i, t) {
            var a = r.data[e];
            if (t = void 0 === t ? !0 : t, 0 === a.config.length || W(a.config[i])) return "";
            var n = a.config[i],
                l = _("caption", n) ? n.caption : "",
                o = _("width", n) ? n.width : "auto",
                s = _("url", n) ? n.url : !1,
                d = _("key", n) ? n.key : null,
                c = s === !1 && t,
                p = a.isDelete ? a.actions(!1, !0, c, s, d) : "",
                u = a.footer.replace(/\{actions}/g, p);
            return u.replace(/\{caption}/g, l).replace(/\{width}/g, o).replace(/\{indicator}/g, "").replace(/\{indicatorTitle}/g, "")
        }
    }, n = function (e, i) {
        return i = i || 0, "number" == typeof e ? e : ("string" == typeof e && (e = parseFloat(e)), isNaN(e) ? i : e)
    }, l = function () {
        return window.File && window.FileReader
    }, o = function () {
        var e = document.createElement("div");
        return !i(9) && !t() && (void 0 !== e.draggable || void 0 !== e.ondragstart && void 0 !== e.ondrop)
    }, s = function () {
        return l() && window.FormData
    }, d = function (e, i) {
        e.removeClass(i).addClass(i)
    }, c = 'style="width:{width};height:{height};"', p = '      <param name="controller" value="true" />\n      <param name="allowFullScreen" value="true" />\n      <param name="allowScriptAccess" value="always" />\n      <param name="autoPlay" value="false" />\n      <param name="autoStart" value="false" />\n      <param name="quality" value="high" />\n', u = '<div class="file-preview-other">\n   <span class="{previewFileIconClass}">{previewFileIcon}</span>\n</div>', f = {
        removeIcon: '<i class="glyphicon glyphicon-trash text-danger"></i>',
        removeClass: "btn btn-xs btn-default",
        removeTitle: "Remove file",
        uploadIcon: '<i class="glyphicon glyphicon-upload text-info"></i>',
        uploadClass: "btn btn-xs btn-default",
        uploadTitle: "Upload file",
        indicatorNew: '<i class="glyphicon glyphicon-hand-down text-warning"></i>',
        indicatorSuccess: '<i class="glyphicon glyphicon-ok-sign text-success"></i>',
        indicatorError: '<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',
        indicatorLoading: '<i class="glyphicon glyphicon-hand-up text-muted"></i>',
        indicatorNewTitle: "Not uploaded yet",
        indicatorSuccessTitle: "Uploaded",
        indicatorErrorTitle: "Upload Error",
        indicatorLoadingTitle: "Uploading ..."
    }, v = '{preview}\n<div class="kv-upload-progress hide"></div>\n<div class="input-group {class}">\n   {caption}\n   <div class="input-group-btn">\n       {remove}\n       {cancel}\n       {upload}\n       {browse}\n   </div>\n</div>', g = '{preview}\n<div class="kv-upload-progress hide"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n', m = '<div class="file-preview {class}">\n    {close}    <div class="{dropClass}">\n    <div class="file-preview-thumbnails">\n    </div>\n    <div class="clearfix"></div>    <div class="file-preview-status text-center text-success"></div>\n    <div class="kv-fileinput-error"></div>\n    </div>\n</div>', w = '<div class="close fileinput-remove">&times;</div>\n', h = '<span class="glyphicon glyphicon-file kv-caption-icon"></span>', b = '<div tabindex="500" class="form-control file-caption {class}">\n   <div class="file-caption-name"></div>\n</div>\n', C = '<button type="{type}" tabindex="500" title="{title}" class="{css}" {status}>{icon}{label}</button>', x = '<a href="{href}" tabindex="500" title="{title}" class="{css}" {status}>{icon}{label}</a>', y = '<div tabindex="500" class="{css}" {status}>{icon}{label}</div>', T = '<div id="{id}" class="file-preview-detail-modal modal fade" tabindex="-1">\n  <div class="modal-dialog modal-lg">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n        <h3 class="modal-title">{heading} <small>{title}</small></h3>\n      </div>\n      <div class="modal-body">\n           <pre>{body}</pre>\n      </div>\n    </div>\n  </div>\n</div>', F = '<div class="progress">\n    <div class="{class}" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n        {percent}%\n     </div>\n</div>', I = '<div class="file-thumbnail-footer">\n    <div class="file-footer-caption" title="{caption}">{caption}</div>\n    {progress} {actions}\n</div>', E = '<div class="file-actions">\n    <div class="file-footer-buttons">\n        {upload}{delete}{other}    </div>\n    <div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>\n    <div class="clearfix"></div>\n</div>', k = '<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}"{dataUrl}{dataKey}>{removeIcon}</button>\n', S = '<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">   {uploadIcon}\n</button>\n', $ = '<button type="button" class="btn btn-default btn-xs btn-block" title="{zoomTitle}: {caption}" onclick="{dialog}">\n   {zoomInd}\n</button>\n', P = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n   {content}\n   {footer}\n</div>\n', D = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n    <object class="file-object" data="{data}" type="{type}" width="{width}" height="{height}">\n       ' + u + "\n    </object>\n   {footer}\n</div>", U = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n   <img src="{data}" class="file-preview-image" title="{caption}" alt="{caption}" ' + c + ">\n   {footer}\n</div>\n", A = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n   <pre class="file-preview-text" title="{caption}" ' + c + ">{data}</pre>\n   {zoom}\n   {footer}\n</div>", j = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" ' + c + '>\n   <video width="{width}" height="{height}" controls>\n       <source src="{data}" type="{type}">\n       ' + u + "\n   </video>\n   {footer}\n</div>\n", L = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" ' + c + '>\n   <audio controls>\n       <source src="{data}" type="{type}">\n       ' + u + "\n   </audio>\n   {footer}\n</div>", z = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" ' + c + '>\n   <object class="file-object" type="application/x-shockwave-flash" width="{width}" height="{height}" data="{data}">\n' + p + "       " + u + "\n   </object>\n   {footer}\n</div>\n", O = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" ' + c + '>\n   <object class="file-object" data="{data}" type="{type}" width="{width}" height="{height}">\n       <param name="movie" value="{caption}" />\n' + p + "         " + u + "\n   </object>\n   {footer}\n</div>", R = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" ' + c + '>\n   <div class="file-preview-other-frame">\n   ' + u + '\n   </div>\n   <div class="file-preview-other-footer">{footer}</div>\n</div>', M = {
        main1: v,
        main2: g,
        preview: m,
        close: w,
        zoom: $,
        icon: h,
        caption: b,
        modal: T,
        progress: F,
        footer: I,
        actions: E,
        actionDelete: k,
        actionUpload: S,
        btnDefault: C,
        btnLink: x,
        btnBrowse: y
    }, B = {
        generic: P,
        html: D,
        image: U,
        text: A,
        video: j,
        audio: L,
        flash: z,
        object: O,
        other: R
    }, N = ["image", "html", "text", "video", "audio", "flash", "object"], Z = {
        image: {
            width: "auto",
            height: "160px"
        },
        html: {
            width: "213px",
            height: "160px"
        },
        text: {
            width: "160px",
            height: "136px"
        },
        video: {
            width: "213px",
            height: "160px"
        },
        audio: {
            width: "213px",
            height: "80px"
        },
        flash: {
            width: "213px",
            height: "160px"
        },
        object: {
            width: "160px",
            height: "160px"
        },
        other: {
            width: "160px",
            height: "160px"
        }
    }, H = {
        image: function (e, i) {
            return void 0 !== e ? e.match("image.*") : i.match(/\.(gif|png|jpe?g)$/i)
        },
        html: function (e, i) {
            return void 0 !== e ? "text/html" === e : i.match(/\.(htm|html)$/i)
        },
        text: function (e, i) {
            return void 0 !== e && e.match("text.*") || i.match(/\.(txt|md|csv|nfo|ini|json|php|js|css)$/i)
        },
        video: function (e, i) {
            return void 0 !== e && e.match(/\.video\/(ogg|mp4|webm|3gp)$/i) || i.match(/\.(og?|mp4|webm|3gp)$/i)
        },
        audio: function (e, i) {
            return void 0 !== e && e.match(/\.audio\/(ogg|mp3|wav)$/i) || i.match(/\.(ogg|mp3|wav)$/i)
        },
        flash: function (e, i) {
            return void 0 !== e && "application/x-shockwave-flash" === e || i.match(/\.(swf)$/i)
        },
        object: function () {
            return !0
        },
        other: function () {
            return !0
        }
    }, W = function (i, t) {
        return void 0 === i || null === i || 0 === i.length || t && "" === e.trim(i)
    }, q = function (e) {
        return Array.isArray(e) || "[object Array]" === Object.prototype.toString.call(e)
    }, _ = function (e, i) {
        return "object" == typeof i && e in i
    }, V = function (i, t, a) {
        return W(i) || W(i[t]) ? a : e(i[t])
    }, K = function () {
        return Math.round((new Date).getTime() + 100 * Math.random())
    }, X = function (e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }, J = function (i, t) {
        var a = i;
        return t ? (e.each(t, function (e, i) {
            "function" == typeof i && (i = i()), a = a.split(e).join(i)
        }), a) : a
    }, Q = window.URL || window.webkitURL, Y = function (t, a) {
        var r = this;
        r.$element = e(t), r.validate() && (r.isPreviewable = l(), r.isIE9 = i(9), r.isIE10 = i(10), r.isPreviewable || r.isIE9 ? (r.init(a), r.listen()) : r.$element.removeClass("file-loading"))
    }, Y.prototype = {
        constructor: Y,
        validate: function () {
            var e, i = this;
            return "file" === i.$element.attr("type") ? !0 : (e = '<div class="help-block alert alert-warning"><h4>Invalid Input Type</h4>You must set an input <code>type = file</code> for <b>bootstrap-fileinput</b> plugin to initialize.</div>', i.$element.after(e), !1)
        },
        init: function (i) {
            var t, a = this,
                l = a.$element;
            e.each(i, function (e, i) {
                switch (e) {
                    case "minFileCount":
                    case "maxFileCount":
                    case "maxFileSize":
                        a[e] = n(i);
                        break;
                    default:
                        a[e] = i
                }
            }), a.fileInputCleared = !1, a.fileBatchCompleted = !0, a.isPreviewable || (a.showPreview = !1), a.uploadFileAttr = W(l.attr("name")) ? "file_data" : l.attr("name"), a.reader = null, a.formdata = {}, a.clearStack(), a.uploadCount = 0, a.uploadStatus = {}, a.uploadLog = [], a.uploadAsyncCount = 0, a.loadedImages = [], a.totalImagesCount = 0, a.ajaxRequests = [], a.isError = !1, a.ajaxAborted = !1, a.cancelling = !1, t = a.getLayoutTemplate("progress"), a.progressTemplate = t.replace("{class}", a.progressClass), a.progressCompleteTemplate = t.replace("{class}", a.progressCompleteClass), a.dropZoneEnabled = o() && a.dropZoneEnabled, a.isDisabled = a.$element.attr("disabled") || a.$element.attr("readonly"), a.isUploadable = s() && !W(a.uploadUrl), a.slug = "function" == typeof i.slugCallback ? i.slugCallback : a.slugDefault, a.mainTemplate = a.getLayoutTemplate(a.showCaption ? "main1" : "main2"), a.captionTemplate = a.getLayoutTemplate("caption"), a.previewGenericTemplate = a.getPreviewTemplate("generic"), a.resizeImage && (a.maxImageWidth || a.maxImageHeight) && (a.imageCanvas = document.createElement("canvas"), a.imageCanvasContext = a.imageCanvas.getContext("2d")), W(a.$element.attr("id")) && a.$element.attr("id", K()), void 0 === a.$container ? a.$container = a.createContainer() : a.refreshContainer(), a.$progress = a.$container.find(".kv-upload-progress"), a.$btnUpload = a.$container.find(".fileinput-upload"), a.$captionContainer = V(i, "elCaptionContainer", a.$container.find(".file-caption")), a.$caption = V(i, "elCaptionText", a.$container.find(".file-caption-name")), a.$previewContainer = V(i, "elPreviewContainer", a.$container.find(".file-preview")), a.$preview = V(i, "elPreviewImage", a.$container.find(".file-preview-thumbnails")), a.$previewStatus = V(i, "elPreviewStatus", a.$container.find(".file-preview-status")), a.$errorContainer = V(i, "elErrorContainer", a.$previewContainer.find(".kv-fileinput-error")), W(a.msgErrorClass) || d(a.$errorContainer, a.msgErrorClass), a.$errorContainer.hide(), a.fileActionSettings = e.extend(f, i.fileActionSettings), a.previewInitId = "preview-" + K(), a.id = a.$element.attr("id"), r.init(a), a.initPreview(!0), a.initPreviewDeletes(), a.options = i, a.setFileDropZoneTitle(), a.$element.removeClass("file-loading"), a.$element.attr("disabled") && a.disable()
        },
        parseError: function (i, t, a) {
            var r = this,
                n = e.trim(t + ""),
                l = "." === n.slice(-1) ? "" : ".",
                o = void 0 !== i.responseJSON && void 0 !== i.responseJSON.error ? i.responseJSON.error : i.responseText;
            return r.cancelling && r.msgUploadAborted && (n = r.msgUploadAborted), r.showAjaxErrorDetails && o ? (o = e.trim(o.replace(/\n\s*\n/g, "\n")), o = o.length > 0 ? "<pre>" + o + "</pre>" : "", n += l + o) : n += l, r.cancelling = !1, a ? "<b>" + a + ": </b>" + n : n
        },
        raise: function (i, t) {
            var a = this,
                r = e.Event(i);
            if (void 0 !== t ? a.$element.trigger(r, t) : a.$element.trigger(r), r.isDefaultPrevented()) return !1;
            if (!r.result) return r.result;
            switch (i) {
                case "filebatchuploadcomplete":
                case "filebatchuploadsuccess":
                case "fileuploaded":
                case "fileclear":
                case "filecleared":
                case "filereset":
                case "fileerror":
                case "filefoldererror":
                case "fileuploaderror":
                case "filebatchuploaderror":
                case "filedeleteerror":
                case "filecustomerror":
                case "filesuccessremove":
                    break;
                default:
                    a.ajaxAborted = r.result
            }
            return !0
        },
        getLayoutTemplate: function (e) {
            var i = this,
                t = _(e, i.layoutTemplates) ? i.layoutTemplates[e] : M[e];
            return W(i.customLayoutTags) ? t : J(t, i.customLayoutTags)
        },
        getPreviewTemplate: function (e) {
            var i = this,
                t = _(e, i.previewTemplates) ? i.previewTemplates[e] : B[e];
            return W(i.customPreviewTags) ? t : J(t, i.customPreviewTags)
        },
        parseFilePreviewIcon: function (i, t) {
            var a, r = this,
                n = r.previewFileIcon;
            return t && t.indexOf(".") > -1 && (a = t.split(".").pop(), r.previewFileIconSettings && r.previewFileIconSettings[a] && (n = r.previewFileIconSettings[a]), r.previewFileExtSettings && e.each(r.previewFileExtSettings, function (e, i) {
                r.previewFileIconSettings[e] && i(a) && (n = r.previewFileIconSettings[e])
            })), i.indexOf("{previewFileIcon}") > -1 ? i.replace(/\{previewFileIconClass}/g, r.previewFileIconClass).replace(/\{previewFileIcon}/g, n) : i
        },
        getOutData: function (e, i, t) {
            var a = this;
            return e = e || {}, i = i || {}, t = t || a.filestack.slice(0) || {}, {
                form: a.formdata,
                files: t,
                filenames: a.filenames,
                extra: a.getExtraData(),
                response: i,
                reader: a.reader,
                jqXHR: e
            }
        },
        listen: function () {
            var i = this,
                t = i.$element,
                r = i.$captionContainer,
                n = i.$btnFile,
                l = t.closest("form"),
                o = i.$container;
            a(t, "change", e.proxy(i.change, i)), a(n, "click", function () {
                i.raise("filebrowse"), i.isError && !i.isUploadable && i.clear(), r.focus()
            }), a(l, "reset", e.proxy(i.reset, i)), a(o.find(".fileinput-remove:not([disabled])"), "click", e.proxy(i.clear, i)), a(o.find(".fileinput-cancel"), "click", e.proxy(i.cancel, i)), i.isUploadable && i.dropZoneEnabled && i.showPreview && i.initDragDrop(), i.isUploadable || a(l, "submit", e.proxy(i.submitForm, i)), a(i.$container.find(".fileinput-upload"), "click", function (t) {
                var a, r = e(this),
                    n = !r.hasClass("disabled") && W(r.attr("disabled"));
                return i.isUploadable ? (t.preventDefault(), void(n && i.upload())) : void(n && "submit" !== r.attr("type") && (a = r.closest("form"), a.length && a.trigger("submit"), t.preventDefault()))
            })
        },
        submitForm: function () {
            var e = this,
                i = e.$element,
                t = i.get(0).files;
            return t && e.minFileCount > 0 && e.getFileCount(t.length) < e.minFileCount ? (e.noFilesError({}), !1) : !e.abort({})
        },
        abort: function (i) {
            var t, a = this;
            return a.ajaxAborted && "object" == typeof a.ajaxAborted && void 0 !== a.ajaxAborted.message ? (t = e.extend(a.getOutData(), i), t.abortData = a.ajaxAborted.data || {}, t.abortMessage = a.ajaxAborted.message, a.cancel(), a.setProgress(100), a.showUploadError(a.ajaxAborted.message, t, "filecustomerror"), !0) : !1
        },
        noFilesError: function (e) {
            var i = this,
                t = i.minFileCount > 1 ? i.filePlural : i.fileSingle,
                a = i.msgFilesTooLess.replace("{n}", i.minFileCount).replace("{files}", t),
                r = i.$errorContainer;
            i.addError(a), i.isError = !0, i.updateFileDetails(0), r.fadeIn(800), i.raise("fileerror", [e]), i.clearFileInput(), d(i.$container, "has-error")
        },
        setProgress: function (e, i) {
            var t = this,
                a = Math.min(e, 100),
                r = 100 > a ? t.progressTemplate : t.progressCompleteTemplate;
            i = i || t.$progress, W(r) || i.html(r.replace(/\{percent}/g, a))
        },
        lock: function () {
            var e = this;
            e.resetErrors(), e.disable(), e.showRemove && d(e.$container.find(".fileinput-remove"), "hide"), e.showCancel && e.$container.find(".fileinput-cancel").removeClass("hide"), e.raise("filelock", [e.filestack, e.getExtraData()])
        },
        unlock: function (e) {
            var i = this;
            void 0 === e && (e = !0), i.enable(), i.showCancel && d(i.$container.find(".fileinput-cancel"), "hide"), i.showRemove && i.$container.find(".fileinput-remove").removeClass("hide"), e && i.resetFileStack(), i.raise("fileunlock", [i.filestack, i.getExtraData()])
        },
        resetFileStack: function () {
            var i = this,
                t = 0,
                a = [],
                r = [];
            i.getThumbs().each(function () {
                var n = e(this),
                    l = n.attr("data-fileindex"),
                    o = i.filestack[l];
                -1 !== l && (void 0 !== o ? (a[t] = o, r[t] = i.getFileName(o), n.attr({
                    id: i.previewInitId + "-" + t,
                    "data-fileindex": t
                }), t++) : n.attr({
                    id: "uploaded-" + K(),
                    "data-fileindex": "-1"
                }))
            }), i.filestack = a, i.filenames = r
        },
        destroy: function () {
            var e = this,
                i = e.$container;
            i.find(".file-drop-zone").off(), e.$element.insertBefore(i).off(".fileinput").removeData(), i.off().remove()
        },
        refresh: function (i) {
            var t = this,
                a = t.$element;
            i = i ? e.extend(t.options, i) : t.options, t.destroy(), a.fileinput(i), a.val() && a.trigger("change.fileinput")
        },
        initDragDrop: function () {
            var i = this,
                t = i.$container.find(".file-drop-zone"),
                r = "dragenter.fileinput dragover.fileinput drop.fileinput";
            a(t, "dragenter.fileinput dragover.fileinput", function (t) {
                var a = e.inArray("Files", t.originalEvent.dataTransfer.types) > -1;
                return t.stopPropagation(), t.preventDefault(), i.isDisabled || !a ? (t.originalEvent.dataTransfer.effectAllowed = "none", void(t.originalEvent.dataTransfer.dropEffect = "none")) : void d(e(this), "file-highlighted")
            }, !0), a(t, "dragleave", function (t) {
                t.stopPropagation(), t.preventDefault(), i.isDisabled || e(this).removeClass("file-highlighted")
            }), a(t, "drop", function (t) {
                t.preventDefault(), i.isDisabled || W(t.originalEvent.dataTransfer.files) || (i.change(t, "dragdrop"), e(this).removeClass("file-highlighted"))
            }), a(e(document), r, function (e) {
                e.stopPropagation(), e.preventDefault()
            }, !0)
        },
        setFileDropZoneTitle: function () {
            var e = this,
                i = e.$container.find(".file-drop-zone");
            i.find("." + e.dropZoneTitleClass).remove(), e.isUploadable && e.showPreview && 0 !== i.length && !(e.getFileStack().length > 0) && e.dropZoneEnabled && (0 === i.find(".file-preview-frame").length && W(e.defaultPreviewContent) && i.prepend('<div class="' + e.dropZoneTitleClass + '">' + e.dropZoneTitle + "</div>"), e.$container.removeClass("file-input-new"), d(e.$container, "file-input-ajax-new"))
        },
        errorsExist: function () {
            var i, t = this;
            return t.$errorContainer.find("li").length ? !0 : (i = e(document.createElement("div")).html(t.$errorContainer.html()), i.find("span.kv-error-close").remove(), i.find("ul").remove(), e.trim(i.text()).length ? !0 : !1)
        },
        getMsgSelected: function (e) {
            var i = this,
                t = 1 === e ? i.fileSingle : i.filePlural;
            return i.msgSelected.replace("{n}", e).replace("{files}", t)
        },
        renderThumbProgress: function () {
            return '<div class="file-thumb-progress hide">' + this.progressTemplate.replace(/\{percent}/g, "0") + "</div>"
        },
        renderFileFooter: function (e, i) {
            var t, a, r = this,
                n = r.fileActionSettings,
                l = r.getLayoutTemplate("footer");
            return r.isUploadable ? (t = l.replace(/\{actions}/g, r.renderFileActions(!0, !0, !1, !1, !1)), a = t.replace(/\{caption}/g, e).replace(/\{width}/g, i).replace(/\{progress}/g, r.renderThumbProgress()).replace(/\{indicator}/g, n.indicatorNew).replace(/\{indicatorTitle}/g, n.indicatorNewTitle)) : a = l.replace(/\{actions}/g, "").replace(/\{caption}/g, e).replace(/\{progress}/g, "").replace(/\{width}/g, i).replace(/\{indicator}/g, "").replace(/\{indicatorTitle}/g, ""), a = J(a, r.previewThumbTags)
        },
        renderFileActions: function (e, i, t, a, r) {
            if (!e && !i) return "";
            var n = this,
                l = a === !1 ? "" : ' data-url="' + a + '"',
                o = r === !1 ? "" : ' data-key="' + r + '"',
                s = n.getLayoutTemplate("actionDelete"),
                d = "",
                c = n.getLayoutTemplate("actions"),
                p = n.otherActionButtons.replace(/\{dataKey}/g, o),
                u = n.fileActionSettings,
                f = t ? u.removeClass + " disabled" : u.removeClass;
            return s = s.replace(/\{removeClass}/g, f).replace(/\{removeIcon}/g, u.removeIcon).replace(/\{removeTitle}/g, u.removeTitle).replace(/\{dataUrl}/g, l).replace(/\{dataKey}/g, o), e && (d = n.getLayoutTemplate("actionUpload").replace(/\{uploadClass}/g, u.uploadClass).replace(/\{uploadIcon}/g, u.uploadIcon).replace(/\{uploadTitle}/g, u.uploadTitle)), c.replace(/\{delete}/g, s).replace(/\{upload}/g, d).replace(/\{other}/g, p)
        },
        setThumbStatus: function (e, i) {
            var t = this;
            if (t.showPreview) {
                var a = "indicator" + i,
                    r = a + "Title",
                    n = "file-preview-" + i.toLowerCase(),
                    l = e.find(".file-upload-indicator"),
                    o = t.fileActionSettings;
                e.removeClass("file-preview-success file-preview-error file-preview-loading"), "Error" === i && e.find(".kv-file-upload").attr("disabled", !0), l.html(o[a]), l.attr("title", o[r]), e.addClass(n)
            }
        },
        clearPreview: function () {
            var e = this,
                i = e.$preview.find(e.showUploadedThumbs ? ".file-preview-frame:not(.file-preview-success)" : ".file-preview-frame");
            i.remove(), e.$preview.find(".file-preview-frame").length && e.showPreview || e.resetUpload(), e.validateDefaultPreview()
        },
        initPreview: function (e) {
            var i, t = this,
                a = t.initialCaption || "";
            return r.count(t.id) ? (i = r.out(t.id), a = e && t.initialCaption ? t.initialCaption : i.caption, t.$preview.html(i.content), t.setCaption(a), void(W(i.content) || t.$container.removeClass("file-input-new"))) : (t.clearPreview(), void(e ? t.setCaption(a) : t.initCaption()))
        },
        initPreviewDeletes: function () {
            var i = this,
                t = i.deleteExtraData || {},
                n = function () {
                    var e = i.isUploadable ? r.count(i.id) : i.$element.get(0).files.length;
                    0 !== i.$preview.find(".kv-file-remove").length || e || (i.reset(), i.initialCaption = "")
                };
            i.$preview.find(".kv-file-remove").each(function () {
                var l = e(this),
                    o = l.data("url") || i.deleteUrl,
                    s = l.data("key");
                if (!W(o) && void 0 !== s) {
                    var c, p, u, f, v = l.closest(".file-preview-frame"),
                        g = r.data[i.id],
                        m = v.data("fileindex");
                    m = parseInt(m.replace("init_", "")), u = W(g.config) && W(g.config[m]) ? null : g.config[m], f = W(u) || W(u.extra) ? t : u.extra, "function" == typeof f && (f = f()), p = {
                        id: l.attr("id"),
                        key: s,
                        extra: f
                    }, c = e.extend({
                        url: o,
                        type: "POST",
                        dataType: "json",
                        data: e.extend({
                            key: s
                        }, f),
                        beforeSend: function (e) {
                            i.ajaxAborted = !1, i.raise("filepredelete", [s, e, f]), i.ajaxAborted ? e.abort() : (d(v, "file-uploading"), d(l, "disabled"))
                        },
                        success: function (e, t, a) {
                            var o, d;
                            return W(e) || W(e.error) ? (r.unset(i.id, m), o = r.count(i.id), d = o > 0 ? i.getMsgSelected(o) : "", i.raise("filedeleted", [s, a, f]), i.setCaption(d), v.removeClass("file-uploading").addClass("file-deleted"), void v.fadeOut("slow", function () {
                                i.clearObjects(v), v.remove(), n(), o || 0 !== i.getFileStack().length || (i.setCaption(""), i.reset())
                            })) : (p.jqXHR = a, p.response = e, i.showError(e.error, p, "filedeleteerror"), v.removeClass("file-uploading"), l.removeClass("disabled"), void n())
                        },
                        error: function (e, t, a) {
                            var r = i.parseError(e, a);
                            p.jqXHR = e, p.response = {}, i.showError(r, p, "filedeleteerror"), v.removeClass("file-uploading"), n()
                        }
                    }, i.ajaxDeleteSettings), a(l, "click", function () {
                        return i.validateMinCount() ? void e.ajax(c) : !1
                    })
                }
            })
        },
        clearObjects: function (i) {
            i.find("video audio").each(function () {
                this.pause(), e(this).remove()
            }), i.find("img object div").each(function () {
                e(this).remove()
            })
        },
        clearFileInput: function () {
            var i, t, a, r = this,
                n = r.$element;
            W(n.val()) || (r.isIE9 || r.isIE10 ? (i = n.closest("form"), t = e(document.createElement("form")), a = e(document.createElement("div")), n.before(a), i.length ? i.after(t) : a.after(t), t.append(n).trigger("reset"), a.before(n).remove(), t.remove()) : n.val(""), r.fileInputCleared = !0)
        },
        resetUpload: function () {
            var e = this;
            e.uploadCache = {
                content: [],
                config: [],
                tags: [],
                append: !0
            }, e.uploadCount = 0, e.uploadStatus = {}, e.uploadLog = [], e.uploadAsyncCount = 0, e.loadedImages = [], e.totalImagesCount = 0, e.$btnUpload.removeAttr("disabled"), e.setProgress(0), d(e.$progress, "hide"), e.resetErrors(!1), e.ajaxAborted = !1, e.ajaxRequests = [], e.resetCanvas()
        },
        resetCanvas: function () {
            var e = this;
            e.canvas && e.imageCanvasContext && e.imageCanvasContext.clearRect(0, 0, e.canvas.width, e.canvas.height)
        },
        cancel: function () {
            var i, t = this,
                a = t.ajaxRequests,
                r = a.length;
            if (r > 0)
                for (i = 0; r > i; i += 1) t.cancelling = !0, a[i].abort();
            t.getThumbs().each(function () {
                var i = e(this),
                    a = i.attr("data-fileindex");
                i.removeClass("file-uploading"), void 0 !== t.filestack[a] && (i.find(".kv-file-upload").removeClass("disabled").removeAttr("disabled"), i.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled")), t.unlock()
            })
        },
        cleanMemory: function (e) {
            var i = e.is("img") ? e.attr("src") : e.find("source").attr("src");
            Q.revokeObjectURL(i)
        },
        hasInitialPreview: function () {
            var e = this;
            return !e.overwriteInitial && r.count(e.id)
        },
        clear: function () {
            var i, t = this;
            t.$btnUpload.removeAttr("disabled"), t.getThumbs().find("video,audio,img").each(function () {
                t.cleanMemory(e(this))
            }), t.resetUpload(), t.clearStack(), t.clearFileInput(), t.resetErrors(!0), t.raise("fileclear"), t.hasInitialPreview() ? (t.showFileIcon(), t.resetPreview(), t.initPreviewDeletes(), t.$container.removeClass("file-input-new")) : (t.getThumbs().each(function () {
                t.clearObjects(e(this))
            }), t.isUploadable && (r.data[t.id] = {}), t.$preview.html(""), i = !t.overwriteInitial && t.initialCaption.length > 0 ? t.initialCaption : "", t.setCaption(i), t.$caption.attr("title", ""), d(t.$container, "file-input-new"), t.validateDefaultPreview()), 0 === t.$container.find(".file-preview-frame").length && (t.initCaption() || t.$captionContainer.find(".kv-caption-icon").hide()), t.hideFileIcon(), t.raise("filecleared"), t.$captionContainer.focus(), t.setFileDropZoneTitle()
        },
        resetPreview: function () {
            var e, i, t = this;
            r.count(t.id) ? (e = r.out(t.id), t.$preview.html(e.content), i = t.initialCaption ? t.initialCaption : e.caption, t.setCaption(i)) : (t.clearPreview(), t.initCaption())
        },
        clearDefaultPreview: function () {
            var e = this;
            e.$preview.find(".file-default-preview").remove()
        },
        validateDefaultPreview: function () {
            var e = this;
            e.showPreview && !W(e.defaultPreviewContent) && (e.$preview.html('<div class="file-default-preview">' + e.defaultPreviewContent + "</div>"), e.$container.removeClass("file-input-new"))
        },
        resetPreviewThumbs: function (e) {
            var i, t = this;
            return e ? (t.clearPreview(), void t.clearStack()) : void(t.hasInitialPreview() ? (i = r.out(t.id), t.$preview.html(i.content), t.setCaption(i.caption), t.initPreviewDeletes()) : t.clearPreview())
        },
        reset: function () {
            var e = this;
            e.resetPreview(), e.$container.find(".fileinput-filename").text(""), e.raise("filereset"), d(e.$container, "file-input-new"), (e.$preview.find(".file-preview-frame").length || e.isUploadable && e.dropZoneEnabled) && e.$container.removeClass("file-input-new"), e.setFileDropZoneTitle(), e.clearStack(), e.formdata = {}
        },
        disable: function () {
            var e = this;
            e.isDisabled = !0, e.raise("filedisabled"), e.$element.attr("disabled", "disabled"), e.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled"), e.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").attr("disabled", !0), e.initDragDrop()
        },
        enable: function () {
            var e = this;
            e.isDisabled = !1, e.raise("fileenabled"), e.$element.removeAttr("disabled"), e.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled"), e.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").removeAttr("disabled"), e.initDragDrop()
        },
        getThumbs: function (e) {
            return e = e || "", this.$preview.find(".file-preview-frame:not(.file-preview-initial)" + e)
        },
        getExtraData: function (e, i) {
            var t = this,
                a = t.uploadExtraData;
            return "function" == typeof t.uploadExtraData && (a = t.uploadExtraData(e, i)), a
        },
        uploadExtra: function (i, t) {
            var a = this,
                r = a.getExtraData(i, t);
            0 !== r.length && e.each(r, function (e, i) {
                a.formdata.append(e, i)
            })
        },
        setAsyncUploadStatus: function (i, t, a) {
            var r = this,
                n = 0;
            r.setProgress(t, e("#" + i).find(".file-thumb-progress")), r.uploadStatus[i] = t, e.each(r.uploadStatus, function (e, i) {
                n += i
            }), r.setProgress(Math.ceil(n / a))
        },
        initXhr: function (e, i, t) {
            var a = this;
            return e.upload && e.upload.addEventListener("progress", function (e) {
                var r = 0,
                    n = e.loaded || e.position,
                    l = e.total;
                e.lengthComputable && (r = Math.ceil(n / l * 100)), i ? a.setAsyncUploadStatus(i, r, t) : a.setProgress(Math.ceil(r))
            }, !1), e
        },
        ajaxSubmit: function (i, t, a, r, n, l) {
            var o, s = this;
            s.raise("filepreajax", [n, l]), s.uploadExtra(n, l), o = e.extend({
                xhr: function () {
                    var i = e.ajaxSettings.xhr();
                    return s.initXhr(i, n, s.getFileStack().length)
                },
                url: s.uploadUrl,
                type: "POST",
                dataType: "json",
                data: s.formdata,
                cache: !1,
                processData: !1,
                contentType: !1,
                beforeSend: i,
                success: t,
                complete: a,
                error: r
            }, s.ajaxSettings), s.ajaxRequests.push(e.ajax(o))
        },
        initUploadSuccess: function (i, t, a) {
            var n, l, o, s, d, c, p, u, f = this;
            f.showPreview && "object" == typeof i && !e.isEmptyObject(i) && void 0 !== i.initialPreview && i.initialPreview.length > 0 && (f.hasInitData = !0, d = i.initialPreview || [], c = i.initialPreviewConfig || [], p = i.initialPreviewThumbTags || [], n = void 0 === i.append || i.append ? !0 : !1, f.overwriteInitial = !1, void 0 !== t ? a ? (u = t.attr("data-fileindex"), f.uploadCache.content[u] = d[0], f.uploadCache.config[u] = c[0], f.uploadCache.tags[u] = p[0], f.uploadCache.append = n) : (o = r.add(f.id, d, c[0], p[0], n), l = r.get(f.id, o, !1), s = e(l).hide(), t.after(s).fadeOut("slow", function () {
                s.fadeIn("slow").css("display:inline-block"), f.initPreviewDeletes(), f.clearFileInput(), t.remove()
            })) : (r.set(f.id, d, c, p, n), f.initPreview(), f.initPreviewDeletes()))
        },
        initSuccessThumbs: function () {
            var i = this;
            i.showPreview && i.getThumbs(".file-preview-success").each(function () {
                var t = e(this),
                    r = t.find(".kv-file-remove");
                r.removeAttr("disabled"), a(r, "click", function () {
                    var e = i.raise("filesuccessremove", [t.attr("id"), t.data("fileindex")]);
                    i.cleanMemory(t), e !== !1 && t.fadeOut("slow", function () {
                        t.remove(), i.$preview.find(".file-preview-frame").length || i.reset()
                    })
                })
            })
        },
        checkAsyncComplete: function () {
            var i, t, a = this;
            for (t = 0; t < a.filestack.length; t++)
                if (a.filestack[t] && (i = a.previewInitId + "-" + t, -1 === e.inArray(i, a.uploadLog))) return !1;
            return a.uploadAsyncCount === a.uploadLog.length
        },
        uploadSingle: function (i, t, a) {
            var n, l, o, s, c, p, u, f, v, g, m = this,
                h = m.getFileStack().length,
                w = new FormData,
                b = m.previewInitId + "-" + i,
                C = m.filestack.length > 0 || !e.isEmptyObject(m.uploadExtraData),
                x = {
                    id: b,
                    index: i
                };
            m.formdata = w, m.showPreview && (l = e("#" + b + ":not(.file-preview-initial)"), s = l.find(".kv-file-upload"), c = l.find(".kv-file-remove"), e("#" + b).find(".file-thumb-progress").removeClass("hide")), 0 === h || !C || s && s.hasClass("disabled") || m.abort(x) || (g = function (e, i) {
                m.updateStack(e, void 0), m.uploadLog.push(i), m.checkAsyncComplete() && (m.fileBatchCompleted = !0)
            }, o = function () {
                m.fileBatchCompleted && setTimeout(function () {
                    m.showPreview && (r.set(m.id, m.uploadCache.content, m.uploadCache.config, m.uploadCache.tags, m.uploadCache.append), m.hasInitData && (m.initPreview(), m.initPreviewDeletes())), m.unlock(), m.clearFileInput(), m.raise("filebatchuploadcomplete", [m.filestack, m.getExtraData()]), m.uploadCount = 0, m.uploadStatus = {}, m.uploadLog = [], m.setProgress(100)
                }, 100)
            }, p = function (t) {
                n = m.getOutData(t), m.fileBatchCompleted = !1, m.showPreview && (l.hasClass("file-preview-success") || (m.setThumbStatus(l, "Loading"), d(l, "file-uploading")), s.attr("disabled", !0), c.attr("disabled", !0)), a || m.lock(), m.raise("filepreupload", [n, b, i]), x = e.extend(x, n), m.abort(x) && (t.abort(), m.setProgress(100))
            }, u = function (t, r, o) {
                n = m.getOutData(o, t), x = e.extend(x, n), setTimeout(function () {
                    W(t) || W(t.error) ? (m.showPreview && (m.setThumbStatus(l, "Success"), s.hide(), m.initUploadSuccess(t, l, a)), m.raise("fileuploaded", [n, b, i]), a ? g(i, b) : m.updateStack(i, void 0)) : (m.setThumbStatus(l, "Error"), m.showUploadError(t.error, x), a && g(i, b))
                }, 100)
            }, f = function () {
                setTimeout(function () {
                    m.showPreview && (s.removeAttr("disabled"), c.removeAttr("disabled"), l.removeClass("file-uploading")), a ? o() : (m.unlock(!1), m.clearFileInput()), m.initSuccessThumbs()
                }, 100)
            }, v = function (r, n, o) {
                var s = m.parseError(r, o, a ? t[i].name : null);
                setTimeout(function () {
                    a && g(i, b), m.uploadStatus[b] = 100, m.setThumbStatus(l, "Error"), x = e.extend(x, m.getOutData(r)), m.showUploadError(s, x)
                }, 100)
            }, w.append(m.uploadFileAttr, t[i], m.filenames[i]), w.append("file_id", i), m.ajaxSubmit(p, u, f, v, b, i))
        },
        uploadBatch: function () {
            var i, t, a, r, n, l = this,
                o = l.filestack,
                s = o.length,
                c = {},
                p = l.filestack.length > 0 || !e.isEmptyObject(l.uploadExtraData);
            l.formdata = new FormData, 0 !== s && p && !l.abort(c) && (i = function () {
                e.each(o, function (e) {
                    l.updateStack(e, void 0)
                }), l.clearFileInput()
            }, t = function (i) {
                l.lock();
                var t = l.getOutData(i);
                l.showPreview && l.getThumbs().each(function () {
                    var i = e(this),
                        t = i.find(".kv-file-upload"),
                        a = i.find(".kv-file-remove");
                    i.hasClass("file-preview-success") || (l.setThumbStatus(i, "Loading"), d(i, "file-uploading")), t.attr("disabled", !0), a.attr("disabled", !0)
                }), l.raise("filebatchpreupload", [t]), l.abort(t) && (i.abort(), l.setProgress(100))
            }, a = function (t, a, r) {
                var n = l.getOutData(r, t),
                    o = l.getThumbs(),
                    s = 0,
                    d = W(t) || W(t.errorkeys) ? [] : t.errorkeys;
                W(t) || W(t.error) ? (l.raise("filebatchuploadsuccess", [n]), i(), l.showPreview ? (o.each(function () {
                    var i = e(this),
                        t = i.find(".kv-file-upload");
                    i.find(".kv-file-upload").hide(), l.setThumbStatus(i, "Success"), i.removeClass("file-uploading"), t.removeAttr("disabled")
                }), l.initUploadSuccess(t)) : l.reset()) : (l.showPreview && (o.each(function () {
                    var i = e(this),
                        t = i.find(".kv-file-remove"),
                        a = i.find(".kv-file-upload");
                    return i.removeClass("file-uploading"), a.removeAttr("disabled"), t.removeAttr("disabled"), 0 === d.length ? void l.setThumbStatus(i, "Error") : (-1 !== e.inArray(s, d) ? l.setThumbStatus(i, "Error") : (i.find(".kv-file-upload").hide(), l.setThumbStatus(i, "Success"), l.updateStack(s, void 0)), void s++)
                }), l.initUploadSuccess(t)), l.showUploadError(t.error, n, "filebatchuploaderror"))
            }, r = function () {
                l.setProgress(100), l.unlock(), l.initSuccessThumbs(), l.clearFileInput(), l.raise("filebatchuploadcomplete", [l.filestack, l.getExtraData()])
            }, n = function (i, t, a) {
                var r = l.getOutData(i),
                    n = l.parseError(i, a);
                l.showUploadError(n, r, "filebatchuploaderror"), l.uploadFileCount = s - 1, l.showPreview && (l.getThumbs().each(function () {
                    var i = e(this),
                        t = i.attr("data-fileindex");
                    i.removeClass("file-uploading"), void 0 !== l.filestack[t] && l.setThumbStatus(i, "Error")
                }), l.getThumbs().removeClass("file-uploading"), l.getThumbs(" .kv-file-upload").removeAttr("disabled"), l.getThumbs(" .kv-file-delete").removeAttr("disabled"))
            }, e.each(o, function (e, i) {
                W(o[e]) || l.formdata.append(l.uploadFileAttr, i, l.filenames[e])
            }), l.ajaxSubmit(t, a, r, n))
        },
        uploadExtraOnly: function () {
            var e, i, t, a, r = this,
                n = {};
            r.formdata = new FormData, r.abort(n) || (e = function (e) {
                r.lock();
                var i = r.getOutData(e);
                r.raise("filebatchpreupload", [i]), r.setProgress(50), n.data = i, n.xhr = e, r.abort(n) && (e.abort(), r.setProgress(100))
            }, i = function (e, i, t) {
                var a = r.getOutData(t, e);
                W(e) || W(e.error) ? (r.raise("filebatchuploadsuccess", [a]), r.clearFileInput(), r.initUploadSuccess(e)) : r.showUploadError(e.error, a, "filebatchuploaderror")
            }, t = function () {
                r.setProgress(100), r.unlock(), r.clearFileInput(), r.raise("filebatchuploadcomplete", [r.filestack, r.getExtraData()])
            }, a = function (e, i, t) {
                var a = r.getOutData(e),
                    l = r.parseError(e, t);
                n.data = a, r.showUploadError(l, a, "filebatchuploaderror")
            }, r.ajaxSubmit(e, i, t, a))
        },
        upload: function () {
            var i, t, a, r = this,
                n = r.getFileStack().length,
                l = {},
                o = !e.isEmptyObject(r.getExtraData());
            if (r.minFileCount > 0 && r.getFileCount(n) < r.minFileCount) return void r.noFilesError(l);
            if (r.isUploadable && !r.isDisabled && (0 !== n || o)) {
                if (r.resetUpload(), r.$progress.removeClass("hide"), r.uploadCount = 0, r.uploadStatus = {}, r.uploadLog = [], r.lock(), r.setProgress(2), 0 === n && o) return void r.uploadExtraOnly();
                if (a = r.filestack.length, r.hasInitData = !1, r.uploadAsync) {
                    for (t = r.getOutData(), r.raise("filebatchpreupload", [t]), r.fileBatchCompleted = !1, r.uploadCache = {
                        content: [],
                        config: [],
                        tags: [],
                        append: !0
                    }, r.uploadAsyncCount = r.getFileStack().length, i = 0; a > i; i++) r.uploadCache.content[i] = null, r.uploadCache.config[i] = null, r.uploadCache.tags[i] = null;
                    for (i = 0; a > i; i++) void 0 !== r.filestack[i] && r.uploadSingle(i, r.filestack, !0)
                } else r.uploadBatch()
            }
        },
        initFileActions: function () {
            var i = this;
            i.showPreview && (i.$preview.find(".kv-file-remove").each(function () {
                var t, n, l, o, s = e(this),
                    d = s.closest(".file-preview-frame"),
                    c = d.attr("id"),
                    p = d.attr("data-fileindex");
                a(s, "click", function () {
                    return o = i.raise("filepreremove", [c, p]), o !== !1 && i.validateMinCount() ? (t = d.hasClass("file-preview-error"), i.cleanMemory(d), void d.fadeOut("slow", function () {
                        i.updateStack(p, void 0), i.clearObjects(d), d.remove(), c && t && i.$errorContainer.find('li[data-file-id="' + c + '"]').fadeOut("fast", function () {
                            e(this).remove(), i.errorsExist() || i.resetErrors()
                        });
                        var a = i.getFileStack(!0),
                            o = a.length,
                            s = r.count(i.id),
                            u = i.showPreview && i.$preview.find(".file-preview-frame").length;
                        i.clearFileInput(), 0 !== o || 0 !== s || u ? (n = s + o, l = n > 1 ? i.getMsgSelected(n) : a[0] ? i.getFileNames()[0] : "", i.setCaption(l)) : i.reset(), i.raise("fileremoved", [c, p])
                    })) : !1
                })
            }), i.$preview.find(".kv-file-upload").each(function () {
                var t = e(this);
                a(t, "click", function () {
                    var e = t.closest(".file-preview-frame"),
                        a = e.attr("data-fileindex");
                    e.hasClass("file-preview-error") || i.uploadSingle(a, i.filestack, !1)
                })
            }))
        },
        hideFileIcon: function () {
            this.overwriteInitial && this.$captionContainer.find(".kv-caption-icon").hide()
        },
        showFileIcon: function () {
            this.$captionContainer.find(".kv-caption-icon").show()
        },
        addError: function (e) {
            var i = this,
                t = i.$errorContainer;
            e && t.length && (t.html(i.errorCloseButton + e), t.find(".kv-error-close").off("click").on("click", function () {
                t.fadeOut("slow")
            }))
        },
        resetErrors: function (e) {
            var i = this,
                t = i.$errorContainer;
            i.isError = !1, i.$container.removeClass("has-error"), t.html(""), e ? t.fadeOut("slow") : t.hide()
        },
        showFolderError: function (e) {
            var i = this,
                t = i.$errorContainer;
            e && (i.addError(i.msgFoldersNotAllowed.replace(/\{n}/g, e)), t.fadeIn(800), d(i.$container, "has-error"), i.raise("filefoldererror", [e]))
        },
        showUploadError: function (e, i, t) {
            var a = this,
                r = a.$errorContainer,
                n = t || "fileuploaderror",
                l = i && i.id ? '<li data-file-id="' + i.id + '">' + e + "</li>" : "<li>" + e + "</li>";
            return 0 === r.find("ul").length ? a.addError("<ul>" + l + "</ul>") : r.find("ul").append(l), r.fadeIn(800), a.raise(n, [i]), a.$container.removeClass("file-input-new"), d(a.$container, "has-error"), !0
        },
        showError: function (e, i, t) {
            var a = this,
                r = a.$errorContainer,
                n = t || "fileerror";
            return i = i || {}, i.reader = a.reader, a.addError(e), r.fadeIn(800), a.raise(n, [i]), a.isUploadable || a.clearFileInput(), a.$container.removeClass("file-input-new"), d(a.$container, "has-error"), a.$btnUpload.attr("disabled", !0), !0
        },
        errorHandler: function (e, i) {
            var t = this,
                a = e.target.error;
            t.showError(a.code === a.NOT_FOUND_ERR ? t.msgFileNotFound.replace("{name}", i) : a.code === a.SECURITY_ERR ? t.msgFileSecured.replace("{name}", i) : a.code === a.NOT_READABLE_ERR ? t.msgFileNotReadable.replace("{name}", i) : a.code === a.ABORT_ERR ? t.msgFilePreviewAborted.replace("{name}", i) : t.msgFilePreviewError.replace("{name}", i))
        },
        parseFileType: function (e) {
            var i, t, a, r, n = this;
            for (r = 0; r < N.length; r += 1)
                if (a = N[r], i = _(a, n.fileTypeSettings) ? n.fileTypeSettings[a] : H[a], t = i(e.type, e.name) ? a : "", !W(t)) return t;
            return "other"
        },
        previewDefault: function (i, t, a) {
            if (this.showPreview) {
                var r = this,
                    n = "",
                    l = i ? i.name : "",
                    o = Q.createObjectURL(i),
                    s = t.slice(t.lastIndexOf("-") + 1),
                    d = r.previewSettings.other || Z.other,
                    c = r.renderFileFooter(i.name, d.width),
                    p = r.parseFilePreviewIcon(r.getPreviewTemplate("other"), l);
                a === !0 && (r.isUploadable || (c += '<div class="file-other-error" title="' + r.fileActionSettings.indicatorErrorTitle + '">' + r.fileActionSettings.indicatorError + "</div>")), r.clearDefaultPreview(), r.$preview.append("\n" + p.replace(/\{previewId}/g, t).replace(/\{frameClass}/g, n).replace(/\{fileindex}/g, s).replace(/\{caption}/g, r.slug(i.name)).replace(/\{width}/g, d.width).replace(/\{height}/g, d.height).replace(/\{type}/g, i.type).replace(/\{data}/g, o).replace(/\{footer}/g, c)), a === !0 && r.isUploadable && r.setThumbStatus(e("#" + t), "Error")
            }
        },
        previewFile: function (e, i, t, a, r) {
            if (this.showPreview) {
                var n, l, o, s = this,
                    d = s.parseFileType(i),
                    c = i ? i.name : "",
                    p = s.slug(c),
                    u = s.allowedPreviewTypes,
                    f = s.allowedPreviewMimeTypes,
                    v = s.getPreviewTemplate(d),
                    g = u && u.indexOf(d) >= 0,
                    m = _(d, s.previewSettings) ? s.previewSettings[d] : Z[d],
                    h = f && -1 !== f.indexOf(i.type),
                    w = s.renderFileFooter(p, m.width),
                    b = "",
                    C = a.slice(a.lastIndexOf("-") + 1);
                g || h ? (v = s.parseFilePreviewIcon(v, c.split(".").pop()), "text" === d ? (l = X(t.target.result), o = "text-" + K(), n = v.replace(/\{zoom}/g, s.getLayoutTemplate("zoom")), b = s.getLayoutTemplate("modal").replace("{id}", o).replace(/\{title}/g, p).replace(/\{body}/g, l).replace(/\{heading}/g, s.msgZoomModalHeading), n = n.replace(/\{previewId}/g, a).replace(/\{caption}/g, p).replace(/\{width}/g, m.width).replace(/\{height}/g, m.height).replace(/\{frameClass}/g, "").replace(/\{zoomInd}/g, s.zoomIndicator).replace(/\{footer}/g, w).replace(/\{fileindex}/g, C).replace(/\{type}/g, i.type).replace(/\{zoomTitle}/g, s.msgZoomTitle).replace(/\{dialog}/g, "$('#" + o + "').modal('show')").replace(/\{data}/g, l) + b) : n = v.replace(/\{previewId}/g, a).replace(/\{caption}/g, p).replace(/\{frameClass}/g, "").replace(/\{type}/g, i.type).replace(/\{fileindex}/g, C).replace(/\{width}/g, m.width).replace(/\{height}/g, m.height).replace(/\{footer}/g, w).replace(/\{data}/g, r), s.clearDefaultPreview(), s.$preview.append("\n" + n), s.validateImage(e, a, p, i.type)) : s.previewDefault(i, a)
            }
        },
        slugDefault: function (e) {
            return W(e) ? "" : e.split(/(\\|\/)/g).pop().replace(/[^\w\u00C0-\u017F\-.\\\/ ]+/g, "")
        },
        readFiles: function (i) {
            this.reader = new FileReader;
            var t, a = this,
                r = a.$element,
                n = a.$preview,
                l = a.reader,
                o = a.$previewContainer,
                s = a.$previewStatus,
                d = a.msgLoading,
                c = a.msgProgress,
                p = a.previewInitId,
                u = i.length,
                f = a.fileTypeSettings,
                v = a.filestack.length,
                g = function (r, n, l, o) {
                    var s = e.extend(a.getOutData({}, {}, i), {
                            id: l,
                            index: o
                        }),
                        d = {
                            id: l,
                            index: o,
                            file: n,
                            files: i
                        };
                    return a.previewDefault(n, l, !0), a.isUploadable && a.pushStack(void 0), setTimeout(t(o + 1), 100), a.initFileActions(), a.isUploadable ? a.showUploadError(r, s) : a.showError(r, d)
                };
            a.loadedImages = [], a.totalImagesCount = 0, e.each(i, function (e, i) {
                var t = "image",
                    r = _(t, a.fileTypeSettings) ? a.fileTypeSettings[t] : H[t];
                r && r(i.type) && a.totalImagesCount++
            }), t = function (e) {
                if (W(r.attr("multiple")) && (u = 1), e >= u) return a.isUploadable && a.filestack.length > 0 ? a.raise("filebatchselected", [a.getFileStack()]) : a.raise("filebatchselected", [i]), o.removeClass("file-thumb-loading"), void s.html("");
                var m, h, w, b, C, x, y = v + e,
                    T = p + "-" + y,
                    F = i[e],
                    I = a.slug(F.name),
                    E = (F.size || 0) / 1e3,
                    k = "",
                    S = Q.createObjectURL(F),
                    $ = 0,
                    P = a.allowedFileTypes,
                    D = W(P) ? "" : P.join(", "),
                    U = a.allowedFileExtensions,
                    A = W(U) ? "" : U.join(", ");
                if (W(U) || (k = new RegExp("\\.(" + U.join("|") + ")$", "i")), E = E.toFixed(2), a.maxFileSize > 0 && E > a.maxFileSize) return b = a.msgSizeTooLarge.replace("{name}", I).replace("{size}", E).replace("{maxSize}", a.maxFileSize), void(a.isError = g(b, F, T, e));
                if (!W(P) && q(P)) {
                    for (w = 0; w < P.length; w += 1) C = P[w], h = f[C], x = void 0 !== h && h(F.type, I), $ += W(x) ? 0 : x.length;
                    if (0 === $) return b = a.msgInvalidFileType.replace("{name}", I).replace("{types}", D), void(a.isError = g(b, F, T, e))
                }
                return 0 !== $ || W(U) || !q(U) || W(k) || (x = I.match(k), $ += W(x) ? 0 : x.length, 0 !== $) ? a.showPreview ? (n.length > 0 && void 0 !== FileReader ? (s.html(d.replace("{index}", e + 1).replace("{files}", u)), o.addClass("file-thumb-loading"), l.onerror = function (e) {
                    a.errorHandler(e, I)
                }, l.onload = function (i) {
                    a.previewFile(e, F, i, T, S), a.initFileActions()
                }, l.onloadend = function () {
                    b = c.replace("{index}", e + 1).replace("{files}", u).replace("{percent}", 50).replace("{name}", I), setTimeout(function () {
                        s.html(b), a.updateFileDetails(u), t(e + 1)
                    }, 100), a.raise("fileloaded", [F, T, e, l])
                }, l.onprogress = function (i) {
                    if (i.lengthComputable) {
                        var t = i.loaded / i.total * 100,
                            a = Math.ceil(t);
                        b = c.replace("{index}", e + 1).replace("{files}", u).replace("{percent}", a).replace("{name}", I), setTimeout(function () {
                            s.html(b)
                        }, 100)
                    }
                }, m = _("text", f) ? f.text : H.text, m(F.type, I) ? l.readAsText(F, a.textEncoding) : l.readAsArrayBuffer(F)) : (a.previewDefault(F, T), setTimeout(function () {
                    t(e + 1), a.updateFileDetails(u)
                }, 100), a.raise("fileloaded", [F, T, e, l])), void a.pushStack(F)) : (a.pushStack(F), setTimeout(t(e + 1), 100), void a.raise("fileloaded", [F, T, e, l])) : (b = a.msgInvalidFileExtension.replace("{name}", I).replace("{extensions}", A), void(a.isError = g(b, F, T, e)))
            }, t(0), a.updateFileDetails(u, !1)
        },
        updateFileDetails: function (e) {
            var i = this,
                t = i.$element,
                a = i.getFileStack(),
                n = t.val() || a.length && a[0].name || "",
                l = i.slug(n),
                o = i.isUploadable ? a.length : e,
                s = r.count(i.id) + o,
                d = o > 1 ? i.getMsgSelected(s) : l;
            i.isError ? (i.$previewContainer.removeClass("file-thumb-loading"), i.$previewStatus.html(""), i.$captionContainer.find(".kv-caption-icon").hide()) : i.showFileIcon(), i.setCaption(d, i.isError), i.$container.removeClass("file-input-new file-input-ajax-new"), 1 === arguments.length && i.raise("fileselect", [e, l]), r.count(i.id) && i.initPreviewDeletes()
        },
        validateMinCount: function () {
            var e = this,
                i = e.isUploadable ? e.getFileStack().length : e.$element.get(0).files.length;
            return e.validateInitialCount && e.minFileCount > 0 && e.getFileCount(i - 1) < e.minFileCount ? (e.noFilesError({}), !1) : !0
        },
        getFileCount: function (e) {
            var i = this,
                t = 0;
            return i.validateInitialCount && !i.overwriteInitial && (t = r.count(i.id), e += t), e
        },
        change: function (i) {
            var t = this,
                a = t.$element;
            if (!t.isUploadable && W(a.val()) && t.fileInputCleared) return void(t.fileInputCleared = !1);
            t.fileInputCleared = !1;
            var n, l, o, s, d, c, p = arguments.length > 1,
                u = p ? i.originalEvent.dataTransfer.files : a.get(0).files,
                f = W(a.attr("multiple")),
                v = 0,
                g = 0,
                m = t.filestack.length,
                h = t.isUploadable,
                w = f && m > 0,
                b = function (i, a, r, n) {
                    var l = e.extend(t.getOutData({}, {}, u), {
                            id: r,
                            index: n
                        }),
                        o = {
                            id: r,
                            index: n,
                            file: a,
                            files: u
                        };
                    return t.isUploadable ? t.showUploadError(i, l) : t.showError(i, o)
                };
            if (t.reader = null, t.resetUpload(), t.hideFileIcon(), t.isUploadable && t.$container.find(".file-drop-zone ." + t.dropZoneTitleClass).remove(), p)
                for (n = []; u[v];) s = u[v], s.type || s.size % 4096 !== 0 ? n.push(s) : g++, v++;
            else n = void 0 === i.target.files ? i.target && i.target.value ? [{
                name: i.target.value.replace(/^.+\\/, "")
            }] : [] : i.target.files;
            if (W(n) || 0 === n.length) return h || t.clear(), t.showFolderError(g), void t.raise("fileselectnone");
            if (t.resetErrors(), c = n.length, o = t.isUploadable ? t.getFileStack().length + c : c, o = t.getFileCount(o), t.maxFileCount > 0 && o > t.maxFileCount) {
                if (!t.autoReplace || c > t.maxFileCount) return d = t.autoReplace && c > t.maxFileCount ? c : o, l = t.msgFilesTooMany.replace("{m}", t.maxFileCount).replace("{n}", d), t.isError = b(l, null, null, null), t.$captionContainer.find(".kv-caption-icon").hide(), t.setCaption("", !0), void t.$container.removeClass("file-input-new file-input-ajax-new");
                o > t.maxFileCount && t.resetPreviewThumbs(h)
            } else !h || w ? (t.resetPreviewThumbs(!1), w && t.clearStack()) : !h || 0 !== m || r.count(t.id) && !t.overwriteInitial || t.resetPreviewThumbs(!0);
            t.isPreviewable ? t.readFiles(n) : t.updateFileDetails(1), t.showFolderError(g)
        },
        getFileName: function (e) {
            return e && e.name ? this.slug(e.name) : void 0
        },
        getFileNames: function (e) {
            var i = this;
            return i.filenames.filter(function (i) {
                return e ? void 0 !== i : void 0 !== i && null !== i
            })
        },
        getFileStack: function (e) {
            var i = this;
            return i.filestack.filter(function (i) {
                return e ? void 0 !== i : void 0 !== i && null !== i
            })
        },
        clearStack: function () {
            var e = this;
            e.filestack = [], e.filenames = []
        },
        updateStack: function (e, i) {
            var t = this;
            t.filestack[e] = i, t.filenames[e] = t.getFileName(i)
        },
        pushStack: function (e) {
            var i = this;
            i.filestack.push(e), i.filenames.push(i.getFileName(e))
        },
        checkDimensions: function (e, i, t, a, r, n, l) {
            var o, s, d, c, p = this,
                u = "Small" === i ? "min" : "max",
                f = p[u + "Image" + n];
            !W(f) && t.length && (d = t[0], s = "Width" === n ? d.naturalWidth || d.width : d.naturalHeight || d.height, c = "Small" === i ? s >= f : f >= s, c || (o = p["msgImage" + n + i].replace("{name}", r).replace("{size}", f), p.showUploadError(o, l), p.setThumbStatus(a, "Error"), p.updateStack(e, null)))
        },
        validateImage: function (e, i, t, r) {
            var n, l, o, s = this,
                d = s.$preview,
                c = d.find("#" + i),
                p = c.find("img");
            t = t || "Untitled", p.length && a(p, "load", function () {
                l = c.width(), o = d.width(), l > o && (p.css("width", "100%"), c.css("width", "97%")), n = {
                    ind: e,
                    id: i
                }, s.checkDimensions(e, "Small", p, c, t, "Width", n), s.checkDimensions(e, "Small", p, c, t, "Height", n), s.resizeImage || (s.checkDimensions(e, "Large", p, c, t, "Width", n), s.checkDimensions(e, "Large", p, c, t, "Height", n)), s.raise("fileimageloaded", [i]), s.loadedImages.push({
                    ind: e,
                    img: p,
                    thumb: c,
                    pid: i,
                    typ: r
                }), s.validateAllImages(), Q.revokeObjectURL(p.attr("src"))
            })
        },
        validateAllImages: function () {
            var e, i, t, a, r, n, l, o = this,
                s = {};
            if (o.loadedImages.length === o.totalImagesCount && (o.raise("fileimagesloaded"), o.resizeImage)) {
                for (l = o.isUploadable ? o.showUploadError : o.showError, e = 0; e < o.loadedImages.length; e++) i = o.loadedImages[e], t = i.img, a = i.thumb, r = i.pid, n = i.ind, s = {
                    id: r,
                    index: n
                }, o.getResizedImage(t[0], i.typ, r, n) || (l(o.msgImageResizeError, s, "fileimageresizeerror"), o.setThumbStatus(a, "Error"), o.updateStack(n, void 0));
                o.raise("fileimagesresized")
            }
        },
        getResizedImage: function (e, i, t, a) {
            var r, n, l = this,
                o = e.naturalWidth,
                s = e.naturalHeight,
                d = 1,
                c = l.maxImageWidth || o,
                p = l.maxImageHeight || s,
                u = o && s,
                f = l.imageCanvas,
                v = l.imageCanvasContext;
            if (!u) return !1;
            if (o === c && s === p) return !0;
            i = i || l.resizeDefaultImageType, r = o > c, n = s > p, d = "width" === l.resizePreference ? r ? c / o : n ? p / s : 1 : n ? p / s : r ? c / o : 1, l.resetCanvas(), o *= d, s *= d, f.width = o, f.height = s;
            try {
                return v.drawImage(e, 0, 0, o, s), f.toBlob(function (e) {
                    l.raise("fileimageresized", [t, a]), l.filestack[a] = e
                }, i, l.resizeQuality), !0
            } catch (g) {
                return !1
            }
        },
        initCaption: function () {
            var e = this,
                i = e.initialCaption || "";
            return e.overwriteInitial || W(i) ? (e.$caption.html(""), !1) : (e.setCaption(i), !0)
        },
        setCaption: function (i, t) {
            var a, r, n = this;
            if (t) a = e("<div>" + n.msgValidationError + "</div>").text(), r = '<span class="' + n.msgValidationErrorClass + '">' + n.msgValidationErrorIcon + a + "</span>";
            else {
                if (W(i) || 0 === n.$caption.length) return;
                a = e("<div>" + i + "</div>").text(), r = n.getLayoutTemplate("icon") + a
            }
            n.$caption.html(r), n.$caption.attr("title", a), n.$captionContainer.find(".file-caption-ellipsis").attr("title", a)
        },
        initBrowse: function (e) {
            var i = this;
            i.$btnFile = e.find(".btn-file"), i.$btnFile.append(i.$element)
        },
        createContainer: function () {
            var i = this,
                t = e(document.createElement("div")).attr({
                    "class": "file-input file-input-new"
                }).html(i.renderMain());
            return i.$element.before(t), i.initBrowse(t), t
        },
        refreshContainer: function () {
            var e = this,
                i = e.$container;
            i.before(e.$element), i.html(e.renderMain()), e.initBrowse(i)
        },
        renderMain: function () {
            var e = this,
                i = e.isUploadable && e.dropZoneEnabled ? " file-drop-zone" : "file-drop-disabled",
                t = e.showClose ? e.getLayoutTemplate("close") : "",
                a = e.showPreview ? e.getLayoutTemplate("preview").replace(/\{class}/g, e.previewClass).replace(/\{dropClass}/g, i) : "",
                r = e.isDisabled ? e.captionClass + " file-caption-disabled" : e.captionClass,
                n = e.captionTemplate.replace(/\{class}/g, r + " kv-fileinput-caption");
            return e.mainTemplate.replace(/\{class}/g, e.mainClass).replace(/\{preview}/g, a).replace(/\{close}/g, t).replace(/\{caption}/g, n).replace(/\{upload}/g, e.renderButton("upload")).replace(/\{remove}/g, e.renderButton("remove")).replace(/\{cancel}/g, e.renderButton("cancel")).replace(/\{browse}/g, e.renderButton("browse"))
        },
        renderButton: function (e) {
            var i = this,
                t = i.getLayoutTemplate("btnDefault"),
                a = i[e + "Class"],
                r = i[e + "Title"],
                n = i[e + "Icon"],
                l = i[e + "Label"],
                o = i.isDisabled ? " disabled" : "",
                s = "button";
            switch (e) {
                case "remove":
                    if (!i.showRemove) return "";
                    break;
                case "cancel":
                    if (!i.showCancel) return "";
                    a += " hide";
                    break;
                case "upload":
                    if (!i.showUpload) return "";
                    i.isUploadable && !i.isDisabled ? t = i.getLayoutTemplate("btnLink").replace("{href}", i.uploadUrl) : s = "submit";
                    break;
                case "browse":
                    t = i.getLayoutTemplate("btnBrowse");
                    break;
                default:
                    return ""
            }
            return a += "browse" === e ? " btn-file" : " fileinput-" + e + " fileinput-" + e + "-button", W(l) || (l = ' <span class="' + i.buttonLabelClass + '">' + l + "</span>"), t.replace("{type}", s).replace("{css}", a).replace("{title}", r).replace("{status}", o).replace("{icon}", n).replace("{label}", l)
        }
    }, e.fn.fileinput = function (t) {
        if (l() || i(9)) {
            var a = Array.apply(null, arguments),
                r = [];
            switch (a.shift(), this.each(function () {
                var i, n = e(this),
                    l = n.data("fileinput"),
                    o = "object" == typeof t && t,
                    s = o.language || n.data("language") || "en";
                l || (i = e.extend({}, e.fn.fileinput.defaults), "en" === s || W(e.fn.fileinputLocales[s]) || (i = e.extend(i, e.fn.fileinputLocales[s])), l = new Y(this, e.extend(i, o, n.data())), n.data("fileinput", l)), "string" == typeof t && r.push(l[t].apply(l, a))
            }), r.length) {
                case 0:
                    return this;
                case 1:
                    return r[0];
                default:
                    return r
            }
        }
    }, e.fn.fileinput.defaults = {
        language: "en",
        showCaption: !0,
        showPreview: !0,
        showRemove: !0,
        showUpload: !0,
        showCancel: !0,
        showClose: !0,
        showUploadedThumbs: !0,
        autoReplace: !1,
        mainClass: "",
        previewClass: "",
        captionClass: "",
        mainTemplate: null,
        initialCaption: "",
        initialPreview: [],
        initialPreviewDelimiter: "*$$*",
        initialPreviewConfig: [],
        initialPreviewThumbTags: [],
        previewThumbTags: {},
        initialPreviewShowDelete: !0,
        deleteUrl: "",
        deleteExtraData: {},
        overwriteInitial: !0,
        layoutTemplates: M,
        previewTemplates: B,
        allowedPreviewTypes: N,
        allowedPreviewMimeTypes: null,
        allowedFileTypes: null,
        allowedFileExtensions: null,
        defaultPreviewContent: null,
        customLayoutTags: {},
        customPreviewTags: {},
        previewSettings: Z,
        fileTypeSettings: H,
        previewFileIcon: '<i class="glyphicon glyphicon-file"></i>',
        previewFileIconClass: "file-icon-4x",
        previewFileIconSettings: {},
        previewFileExtSettings: {},
        buttonLabelClass: "hidden-xs",
        browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
        browseClass: "btn btn-primary",
        removeIcon: '<i class="glyphicon glyphicon-trash"></i>',
        removeClass: "btn btn-default",
        cancelIcon: '<i class="glyphicon glyphicon-ban-circle"></i>',
        cancelClass: "btn btn-default",
        uploadIcon: '<i class="glyphicon glyphicon-upload"></i>',
        uploadClass: "btn btn-default",
        uploadUrl: null,
        uploadAsync: !0,
        uploadExtraData: {},
        minImageWidth: null,
        minImageHeight: null,
        maxImageWidth: null,
        maxImageHeight: null,
        resizeImage: !1,
        resizePreference: "width",
        resizeQuality: .92,
        resizeDefaultImageType: "image/jpeg",
        maxFileSize: 0,
        minFileCount: 0,
        maxFileCount: 0,
        validateInitialCount: !1,
        msgValidationErrorClass: "text-danger",
        msgValidationErrorIcon: '<i class="glyphicon glyphicon-exclamation-sign"></i> ',
        msgErrorClass: "file-error-message",
        progressThumbClass: "progress-bar progress-bar-success progress-bar-striped active",
        progressClass: "progress-bar progress-bar-success progress-bar-striped active",
        progressCompleteClass: "progress-bar progress-bar-success",
        previewFileType: "image",
        zoomIndicator: '<i class="glyphicon glyphicon-zoom-in"></i>',
        elCaptionContainer: null,
        elCaptionText: null,
        elPreviewContainer: null,
        elPreviewImage: null,
        elPreviewStatus: null,
        elErrorContainer: null,
        errorCloseButton: '<span class="close kv-error-close">&times;</span>',
        slugCallback: null,
        dropZoneEnabled: !0,
        dropZoneTitleClass: "file-drop-zone-title",
        fileActionSettings: {},
        otherActionButtons: "",
        textEncoding: "UTF-8",
        ajaxSettings: {},
        ajaxDeleteSettings: {},
        showAjaxErrorDetails: !0
    }, e.fn.fileinputLocales.en = {
        fileSingle: "file",
        filePlural: "files",
        browseLabel: "Browse &hellip;",
        removeLabel: "Remove",
        removeTitle: "Clear selected files",
        cancelLabel: "Cancel",
        cancelTitle: "Abort ongoing upload",
        uploadLabel: "Upload",
        uploadTitle: "Upload selected files",
        msgZoomTitle: "View details",
        msgZoomModalHeading: "Detailed Preview",
        msgSizeTooLarge: 'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',
        msgFilesTooLess: "You must select at least <b>{n}</b> {files} to upload.",
        msgFilesTooMany: "Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.",
        msgFileNotFound: 'File "{name}" not found!',
        msgFileSecured: 'Security restrictions prevent reading the file "{name}".',
        msgFileNotReadable: 'File "{name}" is not readable.',
        msgFilePreviewAborted: 'File preview aborted for "{name}".',
        msgFilePreviewError: 'An error occurred while reading the file "{name}".',
        msgInvalidFileType: 'Invalid type for file "{name}". Only "{types}" files are supported.',
        msgInvalidFileExtension: 'Invalid extension for file "{name}". Only "{extensions}" files are supported.',
        msgUploadAborted: "The file upload was aborted",
        msgValidationError: "File Upload Error",
        msgLoading: "Loading file {index} of {files} &hellip;",
        msgProgress: "Loading file {index} of {files} - {name} - {percent}% completed.",
        msgSelected: "{n} {files} selected",
        msgFoldersNotAllowed: "Drag & drop files only! {n} folder(s) dropped were skipped.",
        msgImageWidthSmall: 'Width of image file "{name}" must be at least {size} px.',
        msgImageHeightSmall: 'Height of image file "{name}" must be at least {size} px.',
        msgImageWidthLarge: 'Width of image file "{name}" cannot exceed {size} px.',
        msgImageHeightLarge: 'Height of image file "{name}" cannot exceed {size} px.',
        msgImageResizeError: "Could not get the image dimensions to resize.",
        msgImageResizeException: "Error while resizing the image.<pre>{errors}</pre>",
        dropZoneTitle: "Drag & drop files here &hellip;"
    }, e.extend(e.fn.fileinput.defaults, e.fn.fileinputLocales.en), e.fn.fileinput.Constructor = Y, e(document).ready(function () {
        var i = e("input.file[type=file]");
        i.length && i.fileinput()
    })
});
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/
/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=af58b70039a5ad40f868)
 * Config saved to config.json and https://gist.github.com/af58b70039a5ad40f868
 */
if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
}
+function ($) {
    'use strict';
    var version = $.fn.jquery.split(' ')[0].split('.')
    if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 2)) {
        throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3')
    }
}(jQuery);
/* ========================================================================
 * Bootstrap: alert.js v3.3.6
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
    'use strict';
    // ALERT CLASS DEFINITION
    // ======================
    var dismiss = '[data-dismiss="alert"]'
    var Alert = function (el) {
        $(el).on('click', dismiss, this.close)
    }
    Alert.VERSION = '3.3.6'
    Alert.TRANSITION_DURATION = 150
    Alert.prototype.close = function (e) {
        var $this = $(this)
        var selector = $this.attr('data-target')
        if (!selector) {
            selector = $this.attr('href')
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }
        var $parent = $(selector)
        if (e) e.preventDefault()
        if (!$parent.length) {
            $parent = $this.closest('.alert')
        }
        $parent.trigger(e = $.Event('close.bs.alert'))
        if (e.isDefaultPrevented()) return
        $parent.removeClass('in')

        function removeElement() {
            // detach from parent, fire event then clean up data
            $parent.detach().trigger('closed.bs.alert').remove()
        }

        $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement()
    }
    // ALERT PLUGIN DEFINITION
    // =======================
    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.alert')
            if (!data) $this.data('bs.alert', (data = new Alert(this)))
            if (typeof option == 'string') data[option].call($this)
        })
    }

    var old = $.fn.alert
    $.fn.alert = Plugin
    $.fn.alert.Constructor = Alert
    // ALERT NO CONFLICT
    // =================
    $.fn.alert.noConflict = function () {
        $.fn.alert = old
        return this
    }
    // ALERT DATA-API
    // ==============
    $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)
}(jQuery);
/* ========================================================================
 * Bootstrap: button.js v3.3.6
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
    'use strict';
    // BUTTON PUBLIC CLASS DEFINITION
    // ==============================
    var Button = function (element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Button.DEFAULTS, options)
        this.isLoading = false
    }
    Button.VERSION = '3.3.6'
    Button.DEFAULTS = {
        loadingText: 'loading...'
    }
    Button.prototype.setState = function (state) {
        var d = 'disabled'
        var $el = this.$element
        var val = $el.is('input') ? 'val' : 'html'
        var data = $el.data()
        state += 'Text'
        if (data.resetText == null) $el.data('resetText', $el[val]())
        // push to event loop to allow forms to submit
        setTimeout($.proxy(function () {
            $el[val](data[state] == null ? this.options[state] : data[state])
            if (state == 'loadingText') {
                this.isLoading = true
                $el.addClass(d).attr(d, d)
            } else if (this.isLoading) {
                this.isLoading = false
                $el.removeClass(d).removeAttr(d)
            }
        }, this), 0)
    }
    Button.prototype.toggle = function () {
        var changed = true
        var $parent = this.$element.closest('[data-toggle="buttons"]')
        if ($parent.length) {
            var $input = this.$element.find('input')
            if ($input.prop('type') == 'radio') {
                if ($input.prop('checked')) changed = false
                $parent.find('.active').removeClass('active')
                this.$element.addClass('active')
            } else if ($input.prop('type') == 'checkbox') {
                if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
                this.$element.toggleClass('active')
            }
            $input.prop('checked', this.$element.hasClass('active'))
            if (changed) $input.trigger('change')
        } else {
            this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
            this.$element.toggleClass('active')
        }
    }
    // BUTTON PLUGIN DEFINITION
    // ========================
    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.button')
            var options = typeof option == 'object' && option
            if (!data) $this.data('bs.button', (data = new Button(this, options)))
            if (option == 'toggle') data.toggle()
            else if (option) data.setState(option)
        })
    }

    var old = $.fn.button
    $.fn.button = Plugin
    $.fn.button.Constructor = Button
    // BUTTON NO CONFLICT
    // ==================
    $.fn.button.noConflict = function () {
        $.fn.button = old
        return this
    }
    // BUTTON DATA-API
    // ===============
    $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
        var $btn = $(e.target)
        if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
        Plugin.call($btn, 'toggle')
        if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
        $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })
}(jQuery);
/* ========================================================================
 * Bootstrap: dropdown.js v3.3.6
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
    'use strict';
    // DROPDOWN CLASS DEFINITION
    // =========================
    var backdrop = '.dropdown-backdrop'
    var toggle = '[data-toggle="dropdown"]'
    var Dropdown = function (element) {
        $(element).on('click.bs.dropdown', this.toggle)
    }
    Dropdown.VERSION = '3.3.6'

    function getParent($this) {
        var selector = $this.attr('data-target')
        if (!selector) {
            selector = $this.attr('href')
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }
        var $parent = selector && $(selector)
        return $parent && $parent.length ? $parent : $this.parent()
    }

    function clearMenus(e) {
        if (e && e.which === 3) return
        $(backdrop).remove()
        $(toggle).each(function () {
            var $this = $(this)
            var $parent = getParent($this)
            var relatedTarget = {
                relatedTarget: this
            }
            if (!$parent.hasClass('open')) return
            if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return
            $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
            if (e.isDefaultPrevented()) return
            $this.attr('aria-expanded', 'false')
            $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
        })
    }

    Dropdown.prototype.toggle = function (e) {
        var $this = $(this)
        if ($this.is('.disabled, :disabled')) return
        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')
        clearMenus()
        if (!isActive) {
            if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
                // if mobile we use a backdrop because click events don't delegate
                $(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click', clearMenus)
            }
            var relatedTarget = {
                relatedTarget: this
            }
            $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))
            if (e.isDefaultPrevented()) return
            $this.trigger('focus').attr('aria-expanded', 'true')
            $parent.toggleClass('open').trigger($.Event('shown.bs.dropdown', relatedTarget))
        }
        return false
    }
    Dropdown.prototype.keydown = function (e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return
        var $this = $(this)
        e.preventDefault()
        e.stopPropagation()
        if ($this.is('.disabled, :disabled')) return
        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')
        if (!isActive && e.which != 27 || isActive && e.which == 27) {
            if (e.which == 27) $parent.find(toggle).trigger('focus')
            return $this.trigger('click')
        }
        var desc = ' li:not(.disabled):visible a'
        var $items = $parent.find('.dropdown-menus' + desc)
        if (!$items.length) return
        var index = $items.index(e.target)
        if (e.which == 38 && index > 0) index-- // up
        if (e.which == 40 && index < $items.length - 1) index++ // down
        if (!~index) index = 0
        $items.eq(index).trigger('focus')
    }
    // DROPDOWN PLUGIN DEFINITION
    // ==========================
    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.dropdown')
            if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
            if (typeof option == 'string') data[option].call($this)
        })
    }

    var old = $.fn.dropdown
    $.fn.dropdown = Plugin
    $.fn.dropdown.Constructor = Dropdown
    // DROPDOWN NO CONFLICT
    // ====================
    $.fn.dropdown.noConflict = function () {
        $.fn.dropdown = old
        return this
    }
    // APPLY TO STANDARD DROPDOWN ELEMENTS
    // ===================================
    $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
        e.stopPropagation()
    }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '.dropdown-menus', Dropdown.prototype.keydown)
}(jQuery);
/* ========================================================================
 * Bootstrap: modal.js v3.3.6
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
    'use strict';
    // MODAL CLASS DEFINITION
    // ======================
    var Modal = function (element, options) {
        this.options = options
        this.$body = $(document.body)
        this.$element = $(element)
        this.$dialog = this.$element.find('.modal-dialog')
        this.$backdrop = null
        this.isShown = null
        this.originalBodyPad = null
        this.scrollbarWidth = 0
        this.ignoreBackdropClick = false
        if (this.options.remote) {
            this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
                this.$element.trigger('loaded.bs.modal')
            }, this))
        }
    }
    Modal.VERSION = '3.3.6'
    Modal.TRANSITION_DURATION = 300
    Modal.BACKDROP_TRANSITION_DURATION = 150
    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    }
    Modal.prototype.toggle = function (_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget)
    }
    Modal.prototype.show = function (_relatedTarget) {
        var that = this
        var e = $.Event('show.bs.modal', {
            relatedTarget: _relatedTarget
        })
        this.$element.trigger(e)
        if (this.isShown || e.isDefaultPrevented()) return
        this.isShown = true
        this.checkScrollbar()
        this.setScrollbar()
        this.$body.addClass('modal-open')
        this.escape()
        this.resize()
        this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
        this.$dialog.on('mousedown.dismiss.bs.modal', function () {
            that.$element.one('mouseup.dismiss.bs.modal', function (e) {
                if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
            })
        })
        this.backdrop(function () {
            var transition = $.support.transition && that.$element.hasClass('fade')
            if (!that.$element.parent().length) {
                that.$element.appendTo(that.$body) // don't move modals dom position
            }
            that.$element.show().scrollTop(0)
            that.adjustDialog()
            if (transition) {
                that.$element[0].offsetWidth // force reflow
            }
            that.$element.addClass('in')
            that.enforceFocus()
            var e = $.Event('shown.bs.modal', {
                relatedTarget: _relatedTarget
            })
            transition ? that.$dialog // wait for modal to slide in
                .one('bsTransitionEnd', function () {
                    that.$element.trigger('focus').trigger(e)
                }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e)
        })
    }
    Modal.prototype.hide = function (e) {
        if (e) e.preventDefault()
        e = $.Event('hide.bs.modal')
        this.$element.trigger(e)
        if (!this.isShown || e.isDefaultPrevented()) return
        this.isShown = false
        this.escape()
        this.resize()
        $(document).off('focusin.bs.modal')
        this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal')
        this.$dialog.off('mousedown.dismiss.bs.modal')
        $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal()
    }
    Modal.prototype.enforceFocus = function () {
        $(document).off('focusin.bs.modal') // guard against infinite focus loop
            .on('focusin.bs.modal', $.proxy(function (e) {
                if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                    this.$element.trigger('focus')
                }
            }, this))
    }
    Modal.prototype.escape = function () {
        if (this.isShown && this.options.keyboard) {
            this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
                e.which == 27 && this.hide()
            }, this))
        } else if (!this.isShown) {
            this.$element.off('keydown.dismiss.bs.modal')
        }
    }
    Modal.prototype.resize = function () {
        if (this.isShown) {
            $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
        } else {
            $(window).off('resize.bs.modal')
        }
    }
    Modal.prototype.hideModal = function () {
        var that = this
        this.$element.hide()
        this.backdrop(function () {
            that.$body.removeClass('modal-open')
            that.resetAdjustments()
            that.resetScrollbar()
            that.$element.trigger('hidden.bs.modal')
        })
    }
    Modal.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
    }
    Modal.prototype.backdrop = function (callback) {
        var that = this
        var animate = this.$element.hasClass('fade') ? 'fade' : ''
        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate
            this.$backdrop = $(document.createElement('div')).addClass('modal-backdrop ' + animate).appendTo(this.$body)
            this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = false
                    return
                }
                if (e.target !== e.currentTarget) return
                this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide()
            }, this))
            if (doAnimate) this.$backdrop[0].offsetWidth // force reflow
            this.$backdrop.addClass('in')
            if (!callback) return
            doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in')
            var callbackRemove = function () {
                that.removeBackdrop()
                callback && callback()
            }
            $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove()
        } else if (callback) {
            callback()
        }
    }
    // these following methods are used to handle overflowing modals
    Modal.prototype.handleUpdate = function () {
        this.adjustDialog()
    }
    Modal.prototype.adjustDialog = function () {
        var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
            paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
        })
    }
    Modal.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: '',
            paddingRight: ''
        })
    }
    Modal.prototype.checkScrollbar = function () {
        var fullWindowWidth = window.innerWidth
        if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
            var documentElementRect = document.documentElement.getBoundingClientRect()
            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
        this.scrollbarWidth = this.measureScrollbar()
    }
    Modal.prototype.setScrollbar = function () {
        var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
        this.originalBodyPad = document.body.style.paddingRight || ''
        if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
    }
    Modal.prototype.resetScrollbar = function () {
        this.$body.css('padding-right', this.originalBodyPad)
    }
    Modal.prototype.measureScrollbar = function () { // thx walsh
        var scrollDiv = document.createElement('div')
        scrollDiv.className = 'modal-scrollbar-measure'
        this.$body.append(scrollDiv)
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
        this.$body[0].removeChild(scrollDiv)
        return scrollbarWidth
    }
    // MODAL PLUGIN DEFINITION
    // =======================
    function Plugin(option, _relatedTarget) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.modal')
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)
            if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
            if (typeof option == 'string') data[option](_relatedTarget)
            else if (options.show) data.show(_relatedTarget)
        })
    }

    var old = $.fn.modal
    $.fn.modal = Plugin
    $.fn.modal.Constructor = Modal
    // MODAL NO CONFLICT
    // =================
    $.fn.modal.noConflict = function () {
        $.fn.modal = old
        return this
    }
    // MODAL DATA-API
    // ==============
    $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
        var $this = $(this)
        var href = $this.attr('href')
        var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
        var option = $target.data('bs.modal') ? 'toggle' : $.extend({
            remote: !/#/.test(href) && href
        }, $target.data(), $this.data())
        if ($this.is('a')) e.preventDefault()
        $target.one('show.bs.modal', function (showEvent) {
            if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
            $target.one('hidden.bs.modal', function () {
                $this.is(':visible') && $this.trigger('focus')
            })
        })
        Plugin.call($target, option, this)
    })
}(jQuery);
/* ========================================================================
 * Bootstrap: tooltip.js v3.3.6
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
    'use strict';
    // TOOLTIP PUBLIC CLASS DEFINITION
    // ===============================
    var Tooltip = function (element, options) {
        this.type = null
        this.options = null
        this.enabled = null
        this.timeout = null
        this.hoverState = null
        this.$element = null
        this.inState = null
        this.init('tooltip', element, options)
    }
    Tooltip.VERSION = '3.3.6'
    Tooltip.TRANSITION_DURATION = 150
    Tooltip.DEFAULTS = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        container: false,
        viewport: {
            selector: 'body',
            padding: 0
        }
    }
    Tooltip.prototype.init = function (type, element, options) {
        this.enabled = true
        this.type = type
        this.$element = $(element)
        this.options = this.getOptions(options)
        this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
        this.inState = {
            click: false,
            hover: false,
            focus: false
        }
        if (this.$element[0] instanceof document.constructor && !this.options.selector) {
            throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
        }
        var triggers = this.options.trigger.split(' ')
        for (var i = triggers.length; i--;) {
            var trigger = triggers[i]
            if (trigger == 'click') {
                this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
            } else if (trigger != 'manual') {
                var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin'
                var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'
                this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
                this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
            }
        }
        this.options.selector ? (this._options = $.extend({}, this.options, {
            trigger: 'manual',
            selector: ''
        })) : this.fixTitle()
    }
    Tooltip.prototype.getDefaults = function () {
        return Tooltip.DEFAULTS
    }
    Tooltip.prototype.getOptions = function (options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options)
        if (options.delay && typeof options.delay == 'number') {
            options.delay = {
                show: options.delay,
                hide: options.delay
            }
        }
        return options
    }
    Tooltip.prototype.getDelegateOptions = function () {
        var options = {}
        var defaults = this.getDefaults()
        this._options && $.each(this._options, function (key, value) {
            if (defaults[key] != value) options[key] = value
        })
        return options
    }
    Tooltip.prototype.enter = function (obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type)
        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
            $(obj.currentTarget).data('bs.' + this.type, self)
        }
        if (obj instanceof $.Event) {
            self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
        }
        if (self.tip().hasClass('in') || self.hoverState == 'in') {
            self.hoverState = 'in'
            return
        }
        clearTimeout(self.timeout)
        self.hoverState = 'in'
        if (!self.options.delay || !self.options.delay.show) return self.show()
        self.timeout = setTimeout(function () {
            if (self.hoverState == 'in') self.show()
        }, self.options.delay.show)
    }
    Tooltip.prototype.isInStateTrue = function () {
        for (var key in this.inState) {
            if (this.inState[key]) return true
        }
        return false
    }
    Tooltip.prototype.leave = function (obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type)
        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
            $(obj.currentTarget).data('bs.' + this.type, self)
        }
        if (obj instanceof $.Event) {
            self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
        }
        if (self.isInStateTrue()) return
        clearTimeout(self.timeout)
        self.hoverState = 'out'
        if (!self.options.delay || !self.options.delay.hide) return self.hide()
        self.timeout = setTimeout(function () {
            if (self.hoverState == 'out') self.hide()
        }, self.options.delay.hide)
    }
    Tooltip.prototype.show = function () {
        var e = $.Event('show.bs.' + this.type)
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e)
            var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
            if (e.isDefaultPrevented() || !inDom) return
            var that = this
            var $tip = this.tip()
            var tipId = this.getUID(this.type)
            this.setContent()
            $tip.attr('id', tipId)
            this.$element.attr('aria-describedby', tipId)
            if (this.options.animation) $tip.addClass('fade')
            var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement
            var autoToken = /\s?auto?\s?/i
            var autoPlace = autoToken.test(placement)
            if (autoPlace) placement = placement.replace(autoToken, '') || 'top'
            $tip.detach().css({
                top: 0,
                left: 0,
                display: 'block'
            }).addClass(placement).data('bs.' + this.type, this)
            this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
            this.$element.trigger('inserted.bs.' + this.type)
            var pos = this.getPosition()
            var actualWidth = $tip[0].offsetWidth
            var actualHeight = $tip[0].offsetHeight
            if (autoPlace) {
                var orgPlacement = placement
                var viewportDim = this.getPosition(this.$viewport)
                placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top' : placement == 'top' && pos.top - actualHeight < viewportDim.top ? 'bottom' : placement == 'right' && pos.right + actualWidth > viewportDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < viewportDim.left ? 'right' : placement
                $tip.removeClass(orgPlacement).addClass(placement)
            }
            var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)
            this.applyPlacement(calculatedOffset, placement)
            var complete = function () {
                var prevHoverState = that.hoverState
                that.$element.trigger('shown.bs.' + that.type)
                that.hoverState = null
                if (prevHoverState == 'out') that.leave(that)
            }
            $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete()
        }
    }
    Tooltip.prototype.applyPlacement = function (offset, placement) {
        var $tip = this.tip()
        var width = $tip[0].offsetWidth
        var height = $tip[0].offsetHeight
        // manually read margins because getBoundingClientRect includes difference
        var marginTop = parseInt($tip.css('margin-top'), 10)
        var marginLeft = parseInt($tip.css('margin-left'), 10)
        // we must check for NaN for ie 8/9
        if (isNaN(marginTop)) marginTop = 0
        if (isNaN(marginLeft)) marginLeft = 0
        offset.top += marginTop
        offset.left += marginLeft
        // $.fn.offset doesn't round pixel values
        // so we use setOffset directly with our own function B-0
        $.offset.setOffset($tip[0], $.extend({
            using: function (props) {
                $tip.css({
                    top: Math.round(props.top),
                    left: Math.round(props.left)
                })
            }
        }, offset), 0)
        $tip.addClass('in')
        // check to see if placing tip in new offset caused the tip to resize itself
        var actualWidth = $tip[0].offsetWidth
        var actualHeight = $tip[0].offsetHeight
        if (placement == 'top' && actualHeight != height) {
            offset.top = offset.top + height - actualHeight
        }
        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)
        if (delta.left) offset.left += delta.left
        else offset.top += delta.top
        var isVertical = /top|bottom/.test(placement)
        var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
        var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'
        $tip.offset(offset)
        this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
    }
    Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
        this.arrow().css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%').css(isVertical ? 'top' : 'left', '')
    }
    Tooltip.prototype.setContent = function () {
        var $tip = this.tip()
        var title = this.getTitle()
        $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
        $tip.removeClass('fade in top bottom left right')
    }
    Tooltip.prototype.hide = function (callback) {
        var that = this
        var $tip = $(this.$tip)
        var e = $.Event('hide.bs.' + this.type)

        function complete() {
            if (that.hoverState != 'in') $tip.detach()
            that.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + that.type)
            callback && callback()
        }

        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $tip.removeClass('in')
        $.support.transition && $tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete()
        this.hoverState = null
        return this
    }
    Tooltip.prototype.fixTitle = function () {
        var $e = this.$element
        if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
            $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
        }
    }
    Tooltip.prototype.hasContent = function () {
        return this.getTitle()
    }
    Tooltip.prototype.getPosition = function ($element) {
        $element = $element || this.$element
        var el = $element[0]
        var isBody = el.tagName == 'BODY'
        var elRect = el.getBoundingClientRect()
        if (elRect.width == null) {
            // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
            elRect = $.extend({}, elRect, {
                width: elRect.right - elRect.left,
                height: elRect.bottom - elRect.top
            })
        }
        var elOffset = isBody ? {
            top: 0,
            left: 0
        } : $element.offset()
        var scroll = {
            scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
        }
        var outerDims = isBody ? {
            width: $(window).width(),
            height: $(window).height()
        } : null
        return $.extend({}, elRect, scroll, outerDims, elOffset)
    }
    Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
        return placement == 'bottom' ? {
            top: pos.top + pos.height,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == 'top' ? {
            top: pos.top - actualHeight,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == 'left' ? {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left - actualWidth
        } :
            /* placement == 'right' */
        {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left + pos.width
        }
    }
    Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
        var delta = {
            top: 0,
            left: 0
        }
        if (!this.$viewport) return delta
        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
        var viewportDimensions = this.getPosition(this.$viewport)
        if (/right|left/.test(placement)) {
            var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll
            var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
            if (topEdgeOffset < viewportDimensions.top) { // top overflow
                delta.top = viewportDimensions.top - topEdgeOffset
            } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
                delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
            }
        } else {
            var leftEdgeOffset = pos.left - viewportPadding
            var rightEdgeOffset = pos.left + viewportPadding + actualWidth
            if (leftEdgeOffset < viewportDimensions.left) { // left overflow
                delta.left = viewportDimensions.left - leftEdgeOffset
            } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
                delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
            }
        }
        return delta
    }
    Tooltip.prototype.getTitle = function () {
        var title
        var $e = this.$element
        var o = this.options
        title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title)
        return title
    }
    Tooltip.prototype.getUID = function (prefix) {
        do prefix += ~~(Math.random() * 1000000)
        while (document.getElementById(prefix))
        return prefix
    }
    Tooltip.prototype.tip = function () {
        if (!this.$tip) {
            this.$tip = $(this.options.template)
            if (this.$tip.length != 1) {
                throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
            }
        }
        return this.$tip
    }
    Tooltip.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
    }
    Tooltip.prototype.enable = function () {
        this.enabled = true
    }
    Tooltip.prototype.disable = function () {
        this.enabled = false
    }
    Tooltip.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }
    Tooltip.prototype.toggle = function (e) {
        var self = this
        if (e) {
            self = $(e.currentTarget).data('bs.' + this.type)
            if (!self) {
                self = new this.constructor(e.currentTarget, this.getDelegateOptions())
                $(e.currentTarget).data('bs.' + this.type, self)
            }
        }
        if (e) {
            self.inState.click = !self.inState.click
            if (self.isInStateTrue()) self.enter(self)
            else self.leave(self)
        } else {
            self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
        }
    }
    Tooltip.prototype.destroy = function () {
        var that = this
        clearTimeout(this.timeout)
        this.hide(function () {
            that.$element.off('.' + that.type).removeData('bs.' + that.type)
            if (that.$tip) {
                that.$tip.detach()
            }
            that.$tip = null
            that.$arrow = null
            that.$viewport = null
        })
    }
    // TOOLTIP PLUGIN DEFINITION
    // =========================
    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.tooltip')
            var options = typeof option == 'object' && option
            if (!data && /destroy|hide/.test(option)) return
            if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.tooltip
    $.fn.tooltip = Plugin
    $.fn.tooltip.Constructor = Tooltip
    // TOOLTIP NO CONFLICT
    // ===================
    $.fn.tooltip.noConflict = function () {
        $.fn.tooltip = old
        return this
    }
}(jQuery);
/* ========================================================================
 * Bootstrap: popover.js v3.3.6
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
    'use strict';
    // POPOVER PUBLIC CLASS DEFINITION
    // ===============================
    var Popover = function (element, options) {
        this.init('popover', element, options)
    }
    if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')
    Popover.VERSION = '3.3.6'
    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    })
    // NOTE: POPOVER EXTENDS tooltip.js
    // ================================
    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)
    Popover.prototype.constructor = Popover
    Popover.prototype.getDefaults = function () {
        return Popover.DEFAULTS
    }
    Popover.prototype.setContent = function () {
        var $tip = this.tip()
        var title = this.getTitle()
        var content = this.getContent()
        $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
        $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
            this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'](content)
        $tip.removeClass('fade top bottom left right in')
        // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
        // this manually by checking the contents.
        if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
    }
    Popover.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }
    Popover.prototype.getContent = function () {
        var $e = this.$element
        var o = this.options
        return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content)
    }
    Popover.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
    }
    // POPOVER PLUGIN DEFINITION
    // =========================
    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.popover')
            var options = typeof option == 'object' && option
            if (!data && /destroy|hide/.test(option)) return
            if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.popover
    $.fn.popover = Plugin
    $.fn.popover.Constructor = Popover
    // POPOVER NO CONFLICT
    // ===================
    $.fn.popover.noConflict = function () {
        $.fn.popover = old
        return this
    }
}(jQuery);
/* ========================================================================
 * Bootstrap: tab.js v3.3.6
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
    'use strict';
    // TAB CLASS DEFINITION
    // ====================
    var Tab = function (element) {
        // jscs:disable requireDollarBeforejQueryAssignment
        this.element = $(element)
        // jscs:enable requireDollarBeforejQueryAssignment
    }
    Tab.VERSION = '3.3.6'
    Tab.TRANSITION_DURATION = 150
    Tab.prototype.show = function () {
        var $this = this.element
        var $ul = $this.closest('ul:not(.dropdown-menus)')
        var selector = $this.data('target')
        if (!selector) {
            selector = $this.attr('href')
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }
        if ($this.parent('li').hasClass('active')) return
        var $previous = $ul.find('.active:last a')
        var hideEvent = $.Event('hide.bs.tab', {
            relatedTarget: $this[0]
        })
        var showEvent = $.Event('show.bs.tab', {
            relatedTarget: $previous[0]
        })
        $previous.trigger(hideEvent)
        $this.trigger(showEvent)
        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return
        var $target = $(selector)
        this.activate($this.closest('li'), $ul)
        this.activate($target, $target.parent(), function () {
            $previous.trigger({
                type: 'hidden.bs.tab',
                relatedTarget: $this[0]
            })
            $this.trigger({
                type: 'shown.bs.tab',
                relatedTarget: $previous[0]
            })
        })
    }
    Tab.prototype.activate = function (element, container, callback) {
        var $active = container.find('> .active')
        var transition = callback && $.support.transition && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

        function next() {
            $active.removeClass('active').find('> .dropdown-menus > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', false)
            element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', true)
            if (transition) {
                element[0].offsetWidth // reflow for transition
                element.addClass('in')
            } else {
                element.removeClass('fade')
            }
            if (element.parent('.dropdown-menus').length) {
                element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', true)
            }
            callback && callback()
        }

        $active.length && transition ? $active.one('bsTransitionEnd', next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next()
        $active.removeClass('in')
    }
    // TAB PLUGIN DEFINITION
    // =====================
    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.tab')
            if (!data) $this.data('bs.tab', (data = new Tab(this)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.tab
    $.fn.tab = Plugin
    $.fn.tab.Constructor = Tab
    // TAB NO CONFLICT
    // ===============
    $.fn.tab.noConflict = function () {
        $.fn.tab = old
        return this
    }
    // TAB DATA-API
    // ============
    var clickHandler = function (e) {
        e.preventDefault()
        Plugin.call($(this), 'show')
    }
    $(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler).on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)
}(jQuery);
/* ========================================================================
 * Bootstrap: affix.js v3.3.6
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
    'use strict';
    // AFFIX CLASS DEFINITION
    // ======================
    var Affix = function (element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options)
        this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this))
        this.$element = $(element)
        this.affixed = null
        this.unpin = null
        this.pinnedOffset = null
        this.checkPosition()
    }
    Affix.VERSION = '3.3.6'
    Affix.RESET = 'affix affix-top affix-bottom'
    Affix.DEFAULTS = {
        offset: 0,
        target: window
    }
    Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
        var scrollTop = this.$target.scrollTop()
        var position = this.$element.offset()
        var targetHeight = this.$target.height()
        if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false
        if (this.affixed == 'bottom') {
            if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
            return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
        }
        var initializing = this.affixed == null
        var colliderTop = initializing ? scrollTop : position.top
        var colliderHeight = initializing ? targetHeight : height
        if (offsetTop != null && scrollTop <= offsetTop) return 'top'
        if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'
        return false
    }
    Affix.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset
        this.$element.removeClass(Affix.RESET).addClass('affix')
        var scrollTop = this.$target.scrollTop()
        var position = this.$element.offset()
        return (this.pinnedOffset = position.top - scrollTop)
    }
    Affix.prototype.checkPositionWithEventLoop = function () {
        setTimeout($.proxy(this.checkPosition, this), 1)
    }
    Affix.prototype.checkPosition = function () {
        if (!this.$element.is(':visible')) return
        var height = this.$element.height()
        var offset = this.options.offset
        var offsetTop = offset.top
        var offsetBottom = offset.bottom
        var scrollHeight = Math.max($(document).height(), $(document.body).height())
        if (typeof offset != 'object') offsetBottom = offsetTop = offset
        if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element)
        if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)
        var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)
        if (this.affixed != affix) {
            if (this.unpin != null) this.$element.css('top', '')
            var affixType = 'affix' + (affix ? '-' + affix : '')
            var e = $.Event(affixType + '.bs.affix')
            this.$element.trigger(e)
            if (e.isDefaultPrevented()) return
            this.affixed = affix
            this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null
            this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
        }
        if (affix == 'bottom') {
            this.$element.offset({
                top: scrollHeight - height - offsetBottom
            })
        }
    }
    // AFFIX PLUGIN DEFINITION
    // =======================
    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.affix')
            var options = typeof option == 'object' && option
            if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.affix
    $.fn.affix = Plugin
    $.fn.affix.Constructor = Affix
    // AFFIX NO CONFLICT
    // =================
    $.fn.affix.noConflict = function () {
        $.fn.affix = old
        return this
    }
    // AFFIX DATA-API
    // ==============
    $(window).on('load', function () {
        $('[data-spy="affix"]').each(function () {
            var $spy = $(this)
            var data = $spy.data()
            data.offset = data.offset || {}
            if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
            if (data.offsetTop != null) data.offset.top = data.offsetTop
            Plugin.call($spy, data)
        })
    })
}(jQuery);
/* ========================================================================
 * Bootstrap: collapse.js v3.3.6
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
    'use strict';
    // COLLAPSE PUBLIC CLASS DEFINITION
    // ================================
    var Collapse = function (element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Collapse.DEFAULTS, options)
        this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]')
        this.transitioning = null
        if (this.options.parent) {
            this.$parent = this.getParent()
        } else {
            this.addAriaAndCollapsedClass(this.$element, this.$trigger)
        }
        if (this.options.toggle) this.toggle()
    }
    Collapse.VERSION = '3.3.6'
    Collapse.TRANSITION_DURATION = 350
    Collapse.DEFAULTS = {
        toggle: true
    }
    Collapse.prototype.dimension = function () {
        var hasWidth = this.$element.hasClass('width')
        return hasWidth ? 'width' : 'height'
    }
    Collapse.prototype.show = function () {
        if (this.transitioning || this.$element.hasClass('in')) return
        var activesData
        var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')
        if (actives && actives.length) {
            activesData = actives.data('bs.collapse')
            if (activesData && activesData.transitioning) return
        }
        var startEvent = $.Event('show.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented()) return
        if (actives && actives.length) {
            Plugin.call(actives, 'hide')
            activesData || actives.data('bs.collapse', null)
        }
        var dimension = this.dimension()
        this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true)
        this.$trigger.removeClass('collapsed').attr('aria-expanded', true)
        this.transitioning = 1
        var complete = function () {
            this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
            this.transitioning = 0
            this.$element.trigger('shown.bs.collapse')
        }
        if (!$.support.transition) return complete.call(this)
        var scrollSize = $.camelCase(['scroll', dimension].join('-'))
        this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
    }
    Collapse.prototype.hide = function () {
        if (this.transitioning || !this.$element.hasClass('in')) return
        var startEvent = $.Event('hide.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented()) return
        var dimension = this.dimension()
        this.$element[dimension](this.$element[dimension]())[0].offsetHeight
        this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false)
        this.$trigger.addClass('collapsed').attr('aria-expanded', false)
        this.transitioning = 1
        var complete = function () {
            this.transitioning = 0
            this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')
        }
        if (!$.support.transition) return complete.call(this)
        this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)
    }
    Collapse.prototype.toggle = function () {
        this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }
    Collapse.prototype.getParent = function () {
        return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
            var $element = $(element)
            this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
        }, this)).end()
    }
    Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
        var isOpen = $element.hasClass('in')
        $element.attr('aria-expanded', isOpen)
        $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen)
    }

    function getTargetFromTrigger($trigger) {
        var href
        var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
        return $(target)
    }

    // COLLAPSE PLUGIN DEFINITION
    // ==========================
    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.collapse')
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)
            if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
            if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.collapse
    $.fn.collapse = Plugin
    $.fn.collapse.Constructor = Collapse
    // COLLAPSE NO CONFLICT
    // ====================
    $.fn.collapse.noConflict = function () {
        $.fn.collapse = old
        return this
    }
    // COLLAPSE DATA-API
    // =================
    $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
        var $this = $(this)
        if (!$this.attr('data-target')) e.preventDefault()
        var $target = getTargetFromTrigger($this)
        var data = $target.data('bs.collapse')
        var option = data ? 'toggle' : $this.data()
        Plugin.call($target, option)
    })
}(jQuery);
/* ========================================================================
 * Bootstrap: transition.js v3.3.6
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function ($) {
    'use strict';
    // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
    // ============================================================
    function transitionEnd() {
        var el = document.createElement('bootstrap')
        var transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        }
        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {
                    end: transEndEventNames[name]
                }
            }
        }
        return false // explicit for ie8 (  ._.)
    }

    // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function (duration) {
        var called = false
        var $el = this
        $(this).one('bsTransitionEnd', function () {
            called = true
        })
        var callback = function () {
            if (!called) $($el).trigger($.support.transition.end)
        }
        setTimeout(callback, duration)
        return this
    }
    $(function () {
        $.support.transition = transitionEnd()
        if (!$.support.transition) return
        $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function (e) {
                if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        }
    })
}(jQuery);
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

// Navbar
//Check whether it's a mobile or not
function mobilecheck() {
    var check = false;
    (function (a) {
        if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}
var outClick = "1";
//Check whether it's a mobile or not, and enables hover.
if (mobilecheck() !== true) {
    $(function () {
        $('.trigger').hover(function () {
            hoverNav();
        });
    });

    function hoverNav() {
        if ($('.menuWrapper').hasClass('openPart')) {
            $('.menuWrapper').removeClass('openPart');
        } else {
            $('.menuWrapper').addClass('openPart');
        }
    }

    // Experimental
    $(function () {
        $('nav').hover(function () {
            if ($('.menuWrapper').hasClass('openAll')) {
                // $('.menuWrapper').removeClass('openAll');
                // $('.icon-menu').removeClass('selected');
                // $('.menuWrapper').removeClass('openPart');
            } else {
                $('.menuWrapper').addClass('openPart');
                $('.menuWrapper').addClass('openAll');
                $('.icon-menu').addClass('selected');
                // outClick = "0";
            }
        });
    });
    //Detect a click and open navbar
    $(function () {
        $('a.icon-menu').click(function (e) {
            toggleNav();
            return false; // prevent default click action from happening!
            e.preventDefault(); // same thing as above
            outClick = "0";
        });
    });

    function toggleNav() {
        if ($('.menuWrapper').hasClass('openAll')) {
            $('.menuWrapper').removeClass('openAll');
            // $('.menuWrapper').removeClass('openPart');
            $('.icon-menu').removeClass('selected');
        } else {
            // $('.menuWrapper').addClass('openPart');
            $('.menuWrapper').addClass('openAll');
            $('.icon-menu').addClass('selected');
        }
    }
} else {
    //Detect a click and open navbar
    $(function () {
        $('a.icon-menu').click(function (e) {
            toggleNav();
            return false; // prevent default click action from happening!
            e.preventDefault(); // same thing as above
            outClick = "0";
        });
    });

    function toggleNav() {
        if ($('.menuWrapper').hasClass('openAll')) {
            $('.menuWrapper').removeClass('openAll');
            // $('.menuWrapper').removeClass('openPart');
            $('.icon-menu').removeClass('selected');
        } else {
            // $('.menuWrapper').addClass('openPart');
            $('.menuWrapper').addClass('openAll');
            $('.icon-menu').addClass('selected');
        }
    }
}
//Exit functions.
//Exit the navbar when esc is hit
$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        if ($('.menuWrapper').hasClass('openAll')) {
            toggleNav();
        }
    }
});
//This hides the menu on a click
$(function () {
    $('.container').click(function () {
        if (outClick != "0") {
            //Hide the menus if visible
            $('.menuWrapper').removeClass('openPart');
            $('.menuWrapper').removeClass('openAll');
            $('.icon-menu').removeClass('selected');
        } else {
            outClick = "1";
        }
    });
});
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

// Modals File
(function ($) {
    "use strict";

    function centerModal() {
        $(this).css('display', 'block');
        var $dialog = $(this).find(".modal-dialog"),
            offset = ($(window).height() - $dialog.height()) / 2,
            bottomMargin = parseInt($dialog.css('marginBottom'), 10);
        // Make sure you don't hide the top part of the modal w/ a negative margin if it's longer than the screen height, and keep the margin equal to the bottom margin of the modal
        if (offset < bottomMargin) offset = bottomMargin;
        $dialog.css("margin-top", offset);
    }

    $(document).on('show.bs.modal', '.modal', centerModal);
    $(window).on("resize", function () {
        $('.modal:visible').each(centerModal);
    });
}(jQuery));
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

// AutoClose Alerts
$(".alert-info").alert();
window.setTimeout(function () {
    $(".alert-info").alert('close');
}, 7000);
$(".tempsuccess").alert();
window.setTimeout(function () {
    $(".alert-success").alert('close');
}, 4000);
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

$(document).on('ready', function () {
    $("#input-4").fileinput({
        allowedFileExtensions: ["jpg", "png", "gif"],
        previewFileType: "image",
        showCaption: false,
        showUpload: false,
        browseClass: "btn btn-primary",
        browseIcon: "<i class=\"icon icon-image\"></i> ",
        removeClass: "btn btn-danger",
        removeLabel: "Delete",
        removeIcon: "<i class=\"icon icon-trash\"></i> ",
    });
});
$(document).on('ready', function () {
    $("#input-2").fileinput({
        allowedFileExtensions: ["jpg", "png", "gif"],
        previewFileType: "image",
        showCaption: false,
        showUpload: false,
        browseClass: "btn btn-primary",
        browseIcon: "<i class=\"icon icon-image\"></i> ",
        removeClass: "btn btn-danger",
        removeLabel: "Delete",
        removeIcon: "<i class=\"icon icon-trash\"></i> ",
    });
});
$(document).on('ready', function () {
    $("#input-3").fileinput({
        allowedFileExtensions: ["jpg", "png", "gif"],
        previewFileType: "image",
        showCaption: false,
        showUpload: false,
        browseClass: "btn btn-danger",
        browseIcon: "<i class=\"icon icon-image\"></i> ",
        removeClass: "btn btn-danger",
        removeLabel: "Delete",
        removeIcon: "<i class=\"icon icon-trash\"></i> ",
    });
});

$(document).ready(function () {
    var textCounter = "#text_counter";
    var overlimit = "#overlimit",
        overlimitText  = "#overlimitText";
    var left = 2000;
    $(textCounter).text(left);
    $('#status').keyup(function () {
        left = 2000 - $(this).val().length;
        if (left < 0) {
            $(textCounter).addClass(overlimit);
            $('#status').addClass(overlimitText);
            $('#posting').attr("disabled", true);
        } else {
            $(textCounter).removeClass(overlimit);
            $('#status').removeClass("overlimitText");
            $('#posting').attr("disabled", false);
        }
        $(textCounter).text(left);
    });
});
$(function () {
    $('[data-toggle="post"]').tooltip()
});
$(document).ready(function () {
    $(".emojiArea").textcomplete([{
        match: /\B:([\-+\w]*)$/,
        search: function (term, callback) {
            var results = [];
            var results2 = [];
            var results3 = [];
            $.each(emojiStrategy, function (shortname, data) {
                if (shortname.indexOf(term) > -1) {
                    results.push(shortname);
                }
                else {
                    if ((data.aliases !== null) && (data.aliases.indexOf(term) > -1)) {
                        results2.push(shortname);
                    }
                    else if ((data.keywords !== null) && (data.keywords.indexOf(term) > -1)) {
                        results3.push(shortname);
                    }
                }
            });
            if (term.length >= 3) {
                results.sort(function (a, b) {
                    return (a.length > b.length);
                });
                results2.sort(function (a, b) {
                    return (a.length > b.length);
                });
                results3.sort();
            }
            var newResults = results.concat(results2).concat(results3);

            callback(newResults);
        },
        template: function (shortname) {
            return '<img class="emojione" src="//cdn.jsdelivr.net/emojione/assets/png/' + emojiStrategy[shortname].unicode + '.png"> :' + shortname + ':';
        },
        replace: function (shortname) {
            return ':' + shortname + ': ';
        },
        index: 1,
        maxCount: 10
    }
    ], {
        footer: '<a href="http://www.emoji.codes" target="_blank">Browse All<span class="arrow">»</span></a>'
    });
});
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/
(function ($) {
    'use strict';
    // Define the jscroll namespace and default settings
    $.jscroll = {
        defaults: {
            debug: false,
            autoTrigger: true,
            autoTriggerUntil: false,
            loadingHtml: '<small>Loading...</small>',
            padding: 400,
            nextSelector: 'a:last',
            contentSelector: '',
            pagingSelector: '',
            callback: false
        }
    };
    // Constructor
    var jScroll = function ($e, options) {
        // Private vars and methods
        var _data = $e.data('jscroll'),
            _userOptions = (typeof options === 'function') ? {
                callback: options
            } : options,
            _options = $.extend({}, $.jscroll.defaults, _userOptions, _data || {}),
            _isWindow = ($e.css('overflow-y') === 'visible'),
            _$next = $e.find(_options.nextSelector).first(),
            _$window = $(window),
            _$body = $('body'),
            _$scroll = _isWindow ? _$window : $e,
            _nextHref = $.trim(_$next.attr('href') + ' ' + _options.contentSelector),
        // Check if a loading image is defined and preload
            _preloadImage = function () {
                var src = $(_options.loadingHtml).filter('img').attr('src');
                if (src) {
                    var image = new Image();
                    image.src = src;
                }
            },
        // Wrap inner content, if it isn't already
            _wrapInnerContent = function () {
                if (!$e.find('.jscroll-inner').length) {
                    $e.contents().wrapAll('<div class="jscroll-inner" />');
                }
            },
        // Find the next link's parent, or add one, and hide it
            _nextWrap = function ($next) {
                var $parent;
                if (_options.pagingSelector) {
                    $next.closest(_options.pagingSelector).hide();
                } else {
                    $parent = $next.parent().not('.jscroll-inner,.jscroll-added').addClass('jscroll-next-parent').hide();
                    if (!$parent.length) {
                        $next.wrap('<div class="jscroll-next-parent" />').parent().hide();
                    }
                }
            },
        // Remove the jscroll behavior and data from an element
            _destroy = function () {
                return _$scroll.unbind('.jscroll').removeData('jscroll').find('.jscroll-inner').children().unwrap().filter('.jscroll-added').children().unwrap();
            },
        // Observe the scroll event for when to trigger the next load
            _observe = function () {
                _wrapInnerContent();
                var $inner = $e.find('div.jscroll-inner').first(),
                    data = $e.data('jscroll'),
                    borderTopWidth = parseInt($e.css('borderTopWidth'), 10),
                    borderTopWidthInt = isNaN(borderTopWidth) ? 0 : borderTopWidth,
                    iContainerTop = parseInt($e.css('paddingTop'), 10) + borderTopWidthInt,
                    iTopHeight = _isWindow ? _$scroll.scrollTop() : $e.offset().top,
                    innerTop = $inner.length ? $inner.offset().top : 0,
                    iTotalHeight = Math.ceil(iTopHeight - innerTop + _$scroll.height() + iContainerTop);
                if (!data.waiting && iTotalHeight + _options.padding >= $inner.outerHeight()) {
                    //data.nextHref = $.trim(data.nextHref + ' ' + _options.contentSelector);
                    _debug('info', 'jScroll:', $inner.outerHeight() - iTotalHeight, 'from bottom. Loading next request...');
                    return _load();
                }
            },
        // Check if the href for the next set of content has been set
            _checkNextHref = function (data) {
                data = data || $e.data('jscroll');
                if (!data || !data.nextHref) {
                    _debug('warn', 'jScroll: nextSelector not found - destroying');
                    _destroy();
                    return false;
                } else {
                    _setBindings();
                    return true;
                }
            },
            _setBindings = function () {
                var $next = $e.find(_options.nextSelector).first();
                if (!$next.length) {
                    return;
                }
                if (_options.autoTrigger && (_options.autoTriggerUntil === false || _options.autoTriggerUntil > 0)) {
                    _nextWrap($next);
                    if (_$body.height() <= _$window.height()) {
                        _observe();
                    }
                    _$scroll.unbind('.jscroll').bind('scroll.jscroll', function () {
                        return _observe();
                    });
                    if (_options.autoTriggerUntil > 0) {
                        _options.autoTriggerUntil--;
                    }
                } else {
                    _$scroll.unbind('.jscroll');
                    $next.bind('click.jscroll', function () {
                        _nextWrap($next);
                        _load();
                        return false;
                    });
                }
            },
        // Load the next set of content, if available
            _load = function () {
                var $inner = $e.find('div.jscroll-inner').first(),
                    data = $e.data('jscroll');
                data.waiting = true;
                $inner.append('<div class="jscroll-added" />').children('.jscroll-added').last().html('<div class="jscroll-loading">' + _options.loadingHtml + '</div>');
                return $e.animate({
                    scrollTop: $inner.outerHeight()
                }, 0, function () {
                    $inner.find('div.jscroll-added').last().load(data.nextHref, function (r, status) {
                        if (status === 'error') {
                            return _destroy();
                        }
                        var $next = $(this).find(_options.nextSelector).first();
                        data.waiting = false;
                        data.nextHref = $next.attr('href') ? $.trim($next.attr('href') + ' ' + _options.contentSelector) : false;
                        $('.jscroll-next-parent', $e).remove(); // Remove the previous next link now that we have a new one
                        _checkNextHref();
                        if (_options.callback) {
                            _options.callback.call(this);
                        }
                        _debug('dir', data);
                    });
                });
            },
        // Safe console debug - http://klauzinski.com/javascript/safe-firebug-console-in-javascript
            _debug = function (m) {
                if (_options.debug && typeof console === 'object' && (typeof m === 'object' || typeof console[m] === 'function')) {
                    if (typeof m === 'object') {
                        var args = [];
                        for (var sMethod in m) {
                            if (typeof console[sMethod] === 'function') {
                                args = (m[sMethod].length) ? m[sMethod] : [m[sMethod]];
                                console[sMethod].apply(console, args);
                            } else {
                                console.log.apply(console, args);
                            }
                        }
                    } else {
                        console[m].apply(console, Array.prototype.slice.call(arguments, 1));
                    }
                }
            };
        // Initialization
        $e.data('jscroll', $.extend({}, _data, {
            initialized: true,
            waiting: false,
            nextHref: _nextHref
        }));
        _wrapInnerContent();
        _preloadImage();
        _setBindings();
        // Expose API methods via the jQuery.jscroll namespace, e.g. $('sel').jscroll.method()
        $.extend($e.jscroll, {
            destroy: _destroy
        });
        return $e;
    };
    // Define the jscroll plugin method and loop
    $.fn.jscroll = function (m) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('jscroll'),
                jscroll;
            // Instantiate jScroll on this element if it hasn't been already
            if (data && data.initialized) {
                return;
            }
            jscroll = new jScroll($this, m);
        });
    };
})(jQuery);
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === "object" && module.exports) {
        var $ = require('jquery');
        module.exports = factory($);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function (jQuery) {
    /*!
     * jQuery.textcomplete
     *
     * Repository: https://github.com/yuku-t/jquery-textcomplete
     * License:    MIT (https://github.com/yuku-t/jquery-textcomplete/blob/master/LICENSE)
     * Author:     Yuku Takahashi
     */
    if (typeof jQuery === 'undefined') {
        throw new Error('jQuery.textcomplete requires jQuery');
    }
    +function ($) {
        'use strict';
        var warn = function (message) {
            if (console.warn) {
                console.warn(message);
            }
        };
        var id = 1;
        $.fn.textcomplete = function (strategies, option) {
            var args = Array.prototype.slice.call(arguments);
            return this.each(function () {
                var self = this;
                var $this = $(this);
                var completer = $this.data('textComplete');
                if (!completer) {
                    option || (option = {});
                    option._oid = id++; // unique object id
                    completer = new $.fn.textcomplete.Completer(this, option);
                    $this.data('textComplete', completer);
                }
                if (typeof strategies === 'string') {
                    if (!completer) return;
                    args.shift()
                    completer[strategies].apply(completer, args);
                    if (strategies === 'destroy') {
                        $this.removeData('textComplete');
                    }
                } else {
                    // For backward compatibility.
                    // TODO: Remove at v0.4
                    $.each(strategies, function (obj) {
                        $.each(['header', 'footer', 'placement', 'maxCount'], function (name) {
                            if (obj[name]) {
                                completer.option[name] = obj[name];
                                warn(name + 'as a strategy param is deprecated. Use option.');
                                delete obj[name];
                            }
                        });
                    });
                    completer.register($.fn.textcomplete.Strategy.parse(strategies, {
                        el: self,
                        $el: $this
                    }));
                }
            });
        };
    }(jQuery);
    +function ($) {
        'use strict';
        // Exclusive execution control utility.
        //
        // func - The function to be locked. It is executed with a function named
        //        `free` as the first argument. Once it is called, additional
        //        execution are ignored until the free is invoked. Then the last
        //        ignored execution will be replayed immediately.
        //
        // Examples
        //
        //   var lockedFunc = lock(function (free) {
        //     setTimeout(function { free(); }, 1000); // It will be free in 1 sec.
        //     console.log('Hello, world');
        //   });
        //   lockedFunc();  // => 'Hello, world'
        //   lockedFunc();  // none
        //   lockedFunc();  // none
        //   // 1 sec past then
        //   // => 'Hello, world'
        //   lockedFunc();  // => 'Hello, world'
        //   lockedFunc();  // none
        //
        // Returns a wrapped function.
        var lock = function (func) {
            var locked, queuedArgsToReplay;
            return function () {
                // Convert arguments into a real array.
                var args = Array.prototype.slice.call(arguments);
                if (locked) {
                    // Keep a copy of this argument list to replay later.
                    // OK to overwrite a previous value because we only replay
                    // the last one.
                    queuedArgsToReplay = args;
                    return;
                }
                locked = true;
                var self = this;
                args.unshift(function replayOrFree() {
                    if (queuedArgsToReplay) {
                        // Other request(s) arrived while we were locked.
                        // Now that the lock is becoming available, replay
                        // the latest such request, then call back here to
                        // unlock (or replay another request that arrived
                        // while this one was in flight).
                        var replayArgs = queuedArgsToReplay;
                        queuedArgsToReplay = undefined;
                        replayArgs.unshift(replayOrFree);
                        func.apply(self, replayArgs);
                    } else {
                        locked = false;
                    }
                });
                func.apply(this, args);
            };
        };
        var isString = function (obj) {
            return Object.prototype.toString.call(obj) === '[object String]';
        };
        var isFunction = function (obj) {
            return Object.prototype.toString.call(obj) === '[object Function]';
        };
        var uniqueId = 0;

        function Completer(element, option) {
            this.$el = $(element);
            this.id = 'textcomplete' + uniqueId++;
            this.strategies = [];
            this.views = [];
            this.option = $.extend({}, Completer._getDefaults(), option);
            if (!this.$el.is('input[type=text]') && !this.$el.is('textarea') && !element.isContentEditable && element.contentEditable != 'true') {
                throw new Error('textcomplete must be called on a Textarea or a ContentEditable.');
            }
            if (element === document.activeElement) {
                // element has already been focused. Initialize view objects immediately.
                this.initialize()
            } else {
                // Initialize view objects lazily.
                var self = this;
                this.$el.one('focus.' + this.id, function () {
                    self.initialize();
                });
            }
        }

        Completer._getDefaults = function () {
            if (!Completer.DEFAULTS) {
                Completer.DEFAULTS = {
                    appendTo: $('body'),
                    zIndex: '100'
                };
            }
            return Completer.DEFAULTS;
        }
        $.extend(Completer.prototype, {
            // Public properties
            // -----------------
            id: null,
            option: null,
            strategies: null,
            adapter: null,
            dropdown: null,
            $el: null,
            // Public methods
            // --------------
            initialize: function () {
                var element = this.$el.get(0);
                // Initialize view objects.
                this.dropdown = new $.fn.textcomplete.Dropdown(element, this, this.option);
                var Adapter, viewName;
                if (this.option.adapter) {
                    Adapter = this.option.adapter;
                } else {
                    if (this.$el.is('textarea') || this.$el.is('input[type=text]')) {
                        viewName = typeof element.selectionEnd === 'number' ? 'Textarea' : 'IETextarea';
                    } else {
                        viewName = 'ContentEditable';
                    }
                    Adapter = $.fn.textcomplete[viewName];
                }
                this.adapter = new Adapter(element, this, this.option);
            },
            destroy: function () {
                this.$el.off('.' + this.id);
                if (this.adapter) {
                    this.adapter.destroy();
                }
                if (this.dropdown) {
                    this.dropdown.destroy();
                }
                this.$el = this.adapter = this.dropdown = null;
            },
            // Invoke textcomplete.
            trigger: function (text, skipUnchangedTerm) {
                if (!this.dropdown) {
                    this.initialize();
                }
                text != null || (text = this.adapter.getTextFromHeadToCaret());
                var searchQuery = this._extractSearchQuery(text);
                if (searchQuery.length) {
                    var term = searchQuery[1];
                    // Ignore shift-key, ctrl-key and so on.
                    if (skipUnchangedTerm && this._term === term) {
                        return;
                    }
                    this._term = term;
                    this._search.apply(this, searchQuery);
                } else {
                    this._term = null;
                    this.dropdown.deactivate();
                }
            },
            fire: function (eventName) {
                var args = Array.prototype.slice.call(arguments, 1);
                this.$el.trigger(eventName, args);
                return this;
            },
            register: function (strategies) {
                Array.prototype.push.apply(this.strategies, strategies);
            },
            // Insert the value into adapter view. It is called when the dropdown is clicked
            // or selected.
            //
            // value    - The selected element of the array callbacked from search func.
            // strategy - The Strategy object.
            // e        - Click or keydown event object.
            select: function (value, strategy, e) {
                this._term = null;
                this.adapter.select(value, strategy, e);
                this.fire('change').fire('textComplete:select', value, strategy);
                this.adapter.focus();
            },
            // Private properties
            // ------------------
            _clearAtNext: true,
            _term: null,
            // Private methods
            // ---------------
            // Parse the given text and extract the first matching strategy.
            //
            // Returns an array including the strategy, the query term and the match
            // object if the text matches an strategy; otherwise returns an empty array.
            _extractSearchQuery: function (text) {
                for (var i = 0; i < this.strategies.length; i++) {
                    var strategy = this.strategies[i];
                    var context = strategy.context(text);
                    if (context || context === '') {
                        var matchRegexp = isFunction(strategy.match) ? strategy.match(text) : strategy.match;
                        if (isString(context)) {
                            text = context;
                        }
                        var match = text.match(matchRegexp);
                        if (match) {
                            return [strategy, match[strategy.index], match];
                        }
                    }
                }
                return []
            },
            // Call the search method of selected strategy..
            _search: lock(function (free, strategy, term, match) {
                var self = this;
                strategy.search(term, function (data, stillSearching) {
                    if (!self.dropdown.shown) {
                        self.dropdown.activate();
                    }
                    if (self._clearAtNext) {
                        // The first callback in the current lock.
                        self.dropdown.clear();
                        self._clearAtNext = false;
                    }
                    self.dropdown.setPosition(self.adapter.getCaretPosition());
                    self.dropdown.render(self._zip(data, strategy, term));
                    if (!stillSearching) {
                        // The last callback in the current lock.
                        free();
                        self._clearAtNext = true; // Call dropdown.clear at the next time.
                    }
                }, match);
            }),
            // Build a parameter for Dropdown#render.
            //
            // Examples
            //
            //  this._zip(['a', 'b'], 's');
            //  //=> [{ value: 'a', strategy: 's' }, { value: 'b', strategy: 's' }]
            _zip: function (data, strategy, term) {
                return $.map(data, function (value) {
                    return {
                        value: value,
                        strategy: strategy,
                        term: term
                    };
                });
            }
        });
        $.fn.textcomplete.Completer = Completer;
    }(jQuery);
    +function ($) {
        'use strict';
        var $window = $(window);
        var include = function (zippedData, datum) {
            var i, elem;
            var idProperty = datum.strategy.idProperty
            for (i = 0; i < zippedData.length; i++) {
                elem = zippedData[i];
                if (elem.strategy !== datum.strategy) continue;
                if (idProperty) {
                    if (elem.value[idProperty] === datum.value[idProperty]) return true;
                } else {
                    if (elem.value === datum.value) return true;
                }
            }
            return false;
        };
        var dropdownViews = {};
        $(document).on('click', function (e) {
            var id = e.originalEvent && e.originalEvent.keepTextCompleteDropdown;
            $.each(dropdownViews, function (key, view) {
                if (key !== id) {
                    view.deactivate();
                }
            });
        });
        var commands = {
            SKIP_DEFAULT: 0,
            KEY_UP: 1,
            KEY_DOWN: 2,
            KEY_ENTER: 3,
            KEY_PAGEUP: 4,
            KEY_PAGEDOWN: 5,
            KEY_ESCAPE: 6
        };
        // Dropdown view
        // =============
        // Construct Dropdown object.
        //
        // element - Textarea or contenteditable element.
        function Dropdown(element, completer, option) {
            this.$el = Dropdown.createElement(option);
            this.completer = completer;
            this.id = completer.id + 'dropdown';
            this._data = []; // zipped data.
            this.$inputEl = $(element);
            this.option = option;
            // Override setPosition method.
            if (option.listPosition) {
                this.setPosition = option.listPosition;
            }
            if (option.height) {
                this.$el.height(option.height);
            }
            var self = this;
            $.each(['maxCount', 'placement', 'footer', 'header', 'noResultsMessage', 'className'], function (_i, name) {
                if (option[name] != null) {
                    self[name] = option[name];
                }
            });
            this._bindEvents(element);
            dropdownViews[this.id] = this;
        }

        $.extend(Dropdown, {
            // Class methods
            // -------------
            createElement: function (option) {
                var $parent = option.appendTo;
                if (!($parent instanceof $)) {
                    $parent = $($parent);
                }
                var $el = $('<ul></ul>').addClass('dropdown-menu textcomplete-dropdown').attr('id', 'textcomplete-dropdown-' + option._oid).css({
                    display: 'none',
                    left: 0,
                    position: 'relative',
                    zIndex: 1050,
                }).appendTo($parent);
                return $el;
            }
        });
        $.extend(Dropdown.prototype, {
            // Public properties
            // -----------------
            $el: null, // jQuery object of ul.dropdown-menu element.
            $inputEl: null, // jQuery object of target textarea.
            completer: null,
            footer: null,
            header: null,
            id: null,
            maxCount: 10,
            placement: '',
            shown: false,
            data: [], // Shown zipped data.
            className: '',
            // Public methods
            // --------------
            destroy: function () {
                // Don't remove $el because it may be shared by several textcompletes.
                this.deactivate();
                this.$el.off('.' + this.id);
                this.$inputEl.off('.' + this.id);
                this.clear();
                this.$el = this.$inputEl = this.completer = null;
                delete dropdownViews[this.id]
            },
            render: function (zippedData) {
                var contentsHtml = this._buildContents(zippedData);
                var unzippedData = $.map(this.data, function (d) {
                    return d.value;
                });
                if (this.data.length) {
                    this._renderHeader(unzippedData);
                    this._renderFooter(unzippedData);
                    if (contentsHtml) {
                        this._renderContents(contentsHtml);
                        this._fitToBottom();
                        this._activateIndexedItem();
                    }
                    this._setScroll();
                } else if (this.noResultsMessage) {
                    this._renderNoResultsMessage(unzippedData);
                } else if (this.shown) {
                    this.deactivate();
                }
            },
            setPosition: function (pos) {
                this.$el.css(this._applyPlacement(pos));
                // Make the dropdown fixed if the input is also fixed
                // This can't be done during init, as textcomplete may be used on multiple elements on the same page
                // Because the same dropdown is reused behind the scenes, we need to recheck every time the dropdown is showed
                var position = 'absolute';
                // Check if input or one of its parents has positioning we need to care about
                this.$inputEl.add(this.$inputEl.parents()).each(function () {
                    if ($(this).css('position') === 'absolute') // The element has absolute positioning, so it's all OK
                        return false;
                    if ($(this).css('position') === 'fixed') {
                        position = 'fixed';
                        return false;
                    }
                });
                this.$el.css({
                    position: position
                }); // Update positioning
                return this;
            },
            clear: function () {
                this.$el.html('');
                this.data = [];
                this._index = 0;
                this._$header = this._$footer = this._$noResultsMessage = null;
            },
            activate: function () {
                if (!this.shown) {
                    this.clear();
                    this.$el.show();
                    if (this.className) {
                        this.$el.addClass(this.className);
                    }
                    this.completer.fire('textComplete:show');
                    this.shown = true;
                }
                return this;
            },
            deactivate: function () {
                if (this.shown) {
                    this.$el.hide();
                    if (this.className) {
                        this.$el.removeClass(this.className);
                    }
                    this.completer.fire('textComplete:hide');
                    this.shown = false;
                }
                return this;
            },
            isUp: function (e) {
                return e.keyCode === 38 || (e.ctrlKey && e.keyCode === 80); // UP, Ctrl-P
            },
            isDown: function (e) {
                return e.keyCode === 40 || (e.ctrlKey && e.keyCode === 78); // DOWN, Ctrl-N
            },
            isEnter: function (e) {
                var modifiers = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey;
                return !modifiers && (e.keyCode === 13 || e.keyCode === 9 || (this.option.completeOnSpace === true && e.keyCode === 32)) // ENTER, TAB
            },
            isPageup: function (e) {
                return e.keyCode === 33; // PAGEUP
            },
            isPagedown: function (e) {
                return e.keyCode === 34; // PAGEDOWN
            },
            isEscape: function (e) {
                return e.keyCode === 27; // ESCAPE
            },
            // Private properties
            // ------------------
            _data: null, // Currently shown zipped data.
            _index: null,
            _$header: null,
            _$noResultsMessage: null,
            _$footer: null,
            // Private methods
            // ---------------
            _bindEvents: function () {
                this.$el.on('mousedown.' + this.id, '.textcomplete-item', $.proxy(this._onClick, this));
                this.$el.on('touchstart.' + this.id, '.textcomplete-item', $.proxy(this._onClick, this));
                this.$el.on('mouseover.' + this.id, '.textcomplete-item', $.proxy(this._onMouseover, this));
                this.$inputEl.on('keydown.' + this.id, $.proxy(this._onKeydown, this));
            },
            _onClick: function (e) {
                var $el = $(e.target);
                e.preventDefault();
                e.originalEvent.keepTextCompleteDropdown = this.id;
                if (!$el.hasClass('textcomplete-item')) {
                    $el = $el.closest('.textcomplete-item');
                }
                var datum = this.data[parseInt($el.data('index'), 10)];
                this.completer.select(datum.value, datum.strategy, e);
                var self = this;
                // Deactive at next tick to allow other event handlers to know whether
                // the dropdown has been shown or not.
                setTimeout(function () {
                    self.deactivate();
                    if (e.type === 'touchstart') {
                        self.$inputEl.focus();
                    }
                }, 0);
            },
            // Activate hovered item.
            _onMouseover: function (e) {
                var $el = $(e.target);
                e.preventDefault();
                if (!$el.hasClass('textcomplete-item')) {
                    $el = $el.closest('.textcomplete-item');
                }
                this._index = parseInt($el.data('index'), 10);
                this._activateIndexedItem();
            },
            _onKeydown: function (e) {
                if (!this.shown) {
                    return;
                }
                var command;
                if ($.isFunction(this.option.onKeydown)) {
                    command = this.option.onKeydown(e, commands);
                }
                if (command == null) {
                    command = this._defaultKeydown(e);
                }
                switch (command) {
                    case commands.KEY_UP:
                        e.preventDefault();
                        this._up();
                        break;
                    case commands.KEY_DOWN:
                        e.preventDefault();
                        this._down();
                        break;
                    case commands.KEY_ENTER:
                        e.preventDefault();
                        this._enter(e);
                        break;
                    case commands.KEY_PAGEUP:
                        e.preventDefault();
                        this._pageup();
                        break;
                    case commands.KEY_PAGEDOWN:
                        e.preventDefault();
                        this._pagedown();
                        break;
                    case commands.KEY_ESCAPE:
                        e.preventDefault();
                        this.deactivate();
                        break;
                }
            },
            _defaultKeydown: function (e) {
                if (this.isUp(e)) {
                    return commands.KEY_UP;
                } else if (this.isDown(e)) {
                    return commands.KEY_DOWN;
                } else if (this.isEnter(e)) {
                    return commands.KEY_ENTER;
                } else if (this.isPageup(e)) {
                    return commands.KEY_PAGEUP;
                } else if (this.isPagedown(e)) {
                    return commands.KEY_PAGEDOWN;
                } else if (this.isEscape(e)) {
                    return commands.KEY_ESCAPE;
                }
            },
            _up: function () {
                if (this._index === 0) {
                    this._index = this.data.length - 1;
                } else {
                    this._index -= 1;
                }
                this._activateIndexedItem();
                this._setScroll();
            },
            _down: function () {
                if (this._index === this.data.length - 1) {
                    this._index = 0;
                } else {
                    this._index += 1;
                }
                this._activateIndexedItem();
                this._setScroll();
            },
            _enter: function (e) {
                var datum = this.data[parseInt(this._getActiveElement().data('index'), 10)];
                this.completer.select(datum.value, datum.strategy, e);
                this.deactivate();
            },
            _pageup: function () {
                var target = 0;
                var threshold = this._getActiveElement().position().top - this.$el.innerHeight();
                this.$el.children().each(function (i) {
                    if ($(this).position().top + $(this).outerHeight() > threshold) {
                        target = i;
                        return false;
                    }
                });
                this._index = target;
                this._activateIndexedItem();
                this._setScroll();
            },
            _pagedown: function () {
                var target = this.data.length - 1;
                var threshold = this._getActiveElement().position().top + this.$el.innerHeight();
                this.$el.children().each(function (i) {
                    if ($(this).position().top > threshold) {
                        target = i;
                        return false
                    }
                });
                this._index = target;
                this._activateIndexedItem();
                this._setScroll();
            },
            _activateIndexedItem: function () {
                this.$el.find('.textcomplete-item.active').removeClass('active');
                this._getActiveElement().addClass('active');
            },
            _getActiveElement: function () {
                return this.$el.children('.textcomplete-item:nth(' + this._index + ')');
            },
            _setScroll: function () {
                var $activeEl = this._getActiveElement();
                var itemTop = $activeEl.position().top;
                var itemHeight = $activeEl.outerHeight();
                var visibleHeight = this.$el.innerHeight();
                var visibleTop = this.$el.scrollTop();
                if (this._index === 0 || this._index == this.data.length - 1 || itemTop < 0) {
                    this.$el.scrollTop(itemTop + visibleTop);
                } else if (itemTop + itemHeight > visibleHeight) {
                    this.$el.scrollTop(itemTop + itemHeight + visibleTop - visibleHeight);
                }
            },
            _buildContents: function (zippedData) {
                var datum, i, index;
                var html = '';
                for (i = 0; i < zippedData.length; i++) {
                    if (this.data.length === this.maxCount) break;
                    datum = zippedData[i];
                    if (include(this.data, datum)) {
                        continue;
                    }
                    index = this.data.length;
                    this.data.push(datum);
                    html += '<li class="textcomplete-item" data-index="' + index + '"><a>';
                    html += datum.strategy.template(datum.value, datum.term);
                    html += '</a></li>';
                }
                return html;
            },
            _renderHeader: function (unzippedData) {
                if (this.header) {
                    if (!this._$header) {
                        this._$header = $('<li class="textcomplete-header"></li>').prependTo(this.$el);
                    }
                    var html = $.isFunction(this.header) ? this.header(unzippedData) : this.header;
                    this._$header.html(html);
                }
            },
            _renderFooter: function (unzippedData) {
                if (this.footer) {
                    if (!this._$footer) {
                        this._$footer = $('<li class="textcomplete-footer"></li>').appendTo(this.$el);
                    }
                    var html = $.isFunction(this.footer) ? this.footer(unzippedData) : this.footer;
                    this._$footer.html(html);
                }
            },
            _renderNoResultsMessage: function (unzippedData) {
                if (this.noResultsMessage) {
                    if (!this._$noResultsMessage) {
                        this._$noResultsMessage = $('<li class="textcomplete-no-results-message"></li>').appendTo(this.$el);
                    }
                    var html = $.isFunction(this.noResultsMessage) ? this.noResultsMessage(unzippedData) : this.noResultsMessage;
                    this._$noResultsMessage.html(html);
                }
            },
            _renderContents: function (html) {
                if (this._$footer) {
                    this._$footer.before(html);
                } else {
                    this.$el.append(html);
                }
            },
            _fitToBottom: function () {
                var windowScrollBottom = $window.scrollTop() + $window.height();
                var height = this.$el.height();
                if ((this.$el.position().top + height) > windowScrollBottom) {
                    this.$el.offset({
                        top: windowScrollBottom - height
                    });
                }
            },
            _applyPlacement: function (position) {
                // If the 'placement' option set to 'top', move the position above the element.
                if (this.placement.indexOf('top') !== -1) {
                    // Overwrite the position object to set the 'bottom' property instead of the top.
                    position = {
                        top: 'auto',
                        bottom: this.$el.parent().height() - position.top + position.lineHeight,
                        left: position.left
                    };
                } else {
                    position.bottom = 'auto';
                    delete position.lineHeight;
                }
                if (this.placement.indexOf('absleft') !== -1) {
                    position.left = 0;
                } else if (this.placement.indexOf('absright') !== -1) {
                    position.right = 0;
                    position.left = 'auto';
                }
                return position;
            }
        });
        $.fn.textcomplete.Dropdown = Dropdown;
        $.extend($.fn.textcomplete, commands);
    }(jQuery);
    +function ($) {
        'use strict';
        // Memoize a search function.
        var memoize = function (func) {
            var memo = {};
            return function (term, callback) {
                if (memo[term]) {
                    callback(memo[term]);
                } else {
                    func.call(this, term, function (data) {
                        memo[term] = (memo[term] || []).concat(data);
                        callback.apply(null, arguments);
                    });
                }
            };
        };

        function Strategy(options) {
            $.extend(this, options);
            if (this.cache) {
                this.search = memoize(this.search);
            }
        }

        Strategy.parse = function (strategiesArray, params) {
            return $.map(strategiesArray, function (strategy) {
                var strategyObj = new Strategy(strategy);
                strategyObj.el = params.el;
                strategyObj.$el = params.$el;
                return strategyObj;
            });
        };
        $.extend(Strategy.prototype, {
            // Public properties
            // -----------------
            // Required
            match: null,
            replace: null,
            search: null,
            // Optional
            cache: false,
            context: function () {
                return true;
            },
            index: 2,
            template: function (obj) {
                return obj;
            },
            idProperty: null
        });
        $.fn.textcomplete.Strategy = Strategy;
    }(jQuery);
    +function ($) {
        'use strict';
        var now = Date.now || function () {
                return new Date().getTime();
            };
        // Returns a function, that, as long as it continues to be invoked, will not
        // be triggered. The function will be called after it stops being called for
        // `wait` msec.
        //
        // This utility function was originally implemented at Underscore.js.
        var debounce = function (func, wait) {
            var timeout, args, context, timestamp, result;
            var later = function () {
                var last = now() - timestamp;
                if (last < wait) {
                    timeout = setTimeout(later, wait - last);
                } else {
                    timeout = null;
                    result = func.apply(context, args);
                    context = args = null;
                }
            };
            return function () {
                context = this;
                args = arguments;
                timestamp = now();
                if (!timeout) {
                    timeout = setTimeout(later, wait);
                }
                return result;
            };
        };

        function Adapter() {
        }

        $.extend(Adapter.prototype, {
            // Public properties
            // -----------------
            id: null, // Identity.
            completer: null, // Completer object which creates it.
            el: null, // Textarea element.
            $el: null, // jQuery object of the textarea.
            option: null,
            // Public methods
            // --------------
            initialize: function (element, completer, option) {
                this.el = element;
                this.$el = $(element);
                this.id = completer.id + this.constructor.name;
                this.completer = completer;
                this.option = option;
                if (this.option.debounce) {
                    this._onKeyup = debounce(this._onKeyup, this.option.debounce);
                }
                this._bindEvents();
            },
            destroy: function () {
                this.$el.off('.' + this.id); // Remove all event handlers.
                this.$el = this.el = this.completer = null;
            },
            // Update the element with the given value and strategy.
            //
            // value    - The selected object. It is one of the item of the array
            //            which was callbacked from the search function.
            // strategy - The Strategy associated with the selected value.
            select: function (/* value, strategy */) {
                throw new Error('Not implemented');
            },
            // Returns the caret's relative coordinates from body's left top corner.
            //
            // FIXME: Calculate the left top corner of `this.option.appendTo` element.
            getCaretPosition: function () {
                var position = this._getCaretRelativePosition();
                var offset = this.$el.offset();
                position.top += offset.top;
                position.left += offset.left;
                return position;
            },
            // Focus on the element.
            focus: function () {
                this.$el.focus();
            },
            // Private methods
            // ---------------
            _bindEvents: function () {
                this.$el.on('keyup.' + this.id, $.proxy(this._onKeyup, this));
            },
            _onKeyup: function (e) {
                if (this._skipSearch(e)) {
                    return;
                }
                this.completer.trigger(this.getTextFromHeadToCaret(), true);
            },
            // Suppress searching if it returns true.
            _skipSearch: function (clickEvent) {
                switch (clickEvent.keyCode) {
                    case 13: // ENTER
                    case 40: // DOWN
                    case 38: // UP
                        return true;
                }
                if (clickEvent.ctrlKey) switch (clickEvent.keyCode) {
                    case 78: // Ctrl-N
                    case 80: // Ctrl-P
                        return true;
                }
            }
        });
        $.fn.textcomplete.Adapter = Adapter;
    }(jQuery);
    +function ($) {
        'use strict';
        // Textarea adapter
        // ================
        //
        // Managing a textarea. It doesn't know a Dropdown.
        function Textarea(element, completer, option) {
            this.initialize(element, completer, option);
        }

        Textarea.DIV_PROPERTIES = {
            left: -9999,
            position: 'absolute',
            top: 0,
            whiteSpace: 'pre-wrap'
        }
        Textarea.COPY_PROPERTIES = ['border-width', 'font-family', 'font-size', 'font-style', 'font-variant', 'font-weight', 'height', 'letter-spacing', 'word-spacing', 'line-height', 'text-decoration', 'text-align', 'width', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'border-style', 'box-sizing', 'tab-size'];
        $.extend(Textarea.prototype, $.fn.textcomplete.Adapter.prototype, {
            // Public methods
            // --------------
            // Update the textarea with the given value and strategy.
            select: function (value, strategy, e) {
                var pre = this.getTextFromHeadToCaret();
                var post = this.el.value.substring(this.el.selectionEnd);
                var newSubstr = strategy.replace(value, e);
                if (typeof newSubstr !== 'undefined') {
                    if ($.isArray(newSubstr)) {
                        post = newSubstr[1] + post;
                        newSubstr = newSubstr[0];
                    }
                    pre = pre.replace(strategy.match, newSubstr);
                    this.$el.val(pre + post);
                    this.el.selectionStart = this.el.selectionEnd = pre.length;
                }
            },
            // Private methods
            // ---------------
            // Returns the caret's relative coordinates from textarea's left top corner.
            //
            // Browser native API does not provide the way to know the position of
            // caret in pixels, so that here we use a kind of hack to accomplish
            // the aim. First of all it puts a dummy div element and completely copies
            // the textarea's style to the element, then it inserts the text and a
            // span element into the textarea.
            // Consequently, the span element's position is the thing what we want.
            _getCaretRelativePosition: function () {
                var dummyDiv = $('<div></div>').css(this._copyCss()).text(this.getTextFromHeadToCaret());
                var span = $('<span></span>').text('.').appendTo(dummyDiv);
                this.$el.before(dummyDiv);
                var position = span.position();
                position.top += span.height() - this.$el.scrollTop();
                position.lineHeight = span.height();
                dummyDiv.remove();
                return position;
            },
            _copyCss: function () {
                return $.extend({
                    // Set 'scroll' if a scrollbar is being shown; otherwise 'auto'.
                    overflow: this.el.scrollHeight > this.el.offsetHeight ? 'scroll' : 'auto'
                }, Textarea.DIV_PROPERTIES, this._getStyles());
            },
            _getStyles: (function ($) {
                var color = $('<div></div>').css(['color']).color;
                if (typeof color !== 'undefined') {
                    return function () {
                        return this.$el.css(Textarea.COPY_PROPERTIES);
                    };
                } else { // jQuery < 1.8
                    return function () {
                        var $el = this.$el;
                        var styles = {};
                        $.each(Textarea.COPY_PROPERTIES, function (i, property) {
                            styles[property] = $el.css(property);
                        });
                        return styles;
                    };
                }
            })($),
            getTextFromHeadToCaret: function () {
                return this.el.value.substring(0, this.el.selectionEnd);
            }
        });
        $.fn.textcomplete.Textarea = Textarea;
    }(jQuery);
    +function ($) {
        'use strict';
        var sentinelChar = '吶';

        function IETextarea(element, completer, option) {
            this.initialize(element, completer, option);
            $('<span>' + sentinelChar + '</span>').css({
                position: 'absolute',
                top: -9999,
                left: -9999
            }).insertBefore(element);
        }

        $.extend(IETextarea.prototype, $.fn.textcomplete.Textarea.prototype, {
            // Public methods
            // --------------
            select: function (value, strategy, e) {
                var pre = this.getTextFromHeadToCaret();
                var post = this.el.value.substring(pre.length);
                var newSubstr = strategy.replace(value, e);
                if (typeof newSubstr !== 'undefined') {
                    if ($.isArray(newSubstr)) {
                        post = newSubstr[1] + post;
                        newSubstr = newSubstr[0];
                    }
                    pre = pre.replace(strategy.match, newSubstr);
                    this.$el.val(pre + post);
                    this.el.focus();
                    var range = this.el.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', pre.length);
                    range.moveStart('character', pre.length);
                    range.select();
                }
            },
            getTextFromHeadToCaret: function () {
                this.el.focus();
                var range = document.selection.createRange();
                range.moveStart('character', -this.el.value.length);
                var arr = range.text.split(sentinelChar)
                return arr.length === 1 ? arr[0] : arr[1];
            }
        });
        $.fn.textcomplete.IETextarea = IETextarea;
    }(jQuery);
    // NOTE: TextComplete plugin has contenteditable support but it does not work
    //       fine especially on old IEs.
    //       Any pull requests are REALLY welcome.
    +function ($) {
        'use strict';
        // ContentEditable adapter
        // =======================
        //
        // Adapter for contenteditable elements.
        function ContentEditable(element, completer, option) {
            this.initialize(element, completer, option);
        }

        $.extend(ContentEditable.prototype, $.fn.textcomplete.Adapter.prototype, {
            // Public methods
            // --------------
            // Update the content with the given value and strategy.
            // When an dropdown item is selected, it is executed.
            select: function (value, strategy, e) {
                var pre = this.getTextFromHeadToCaret();
                var sel = window.getSelection()
                var range = sel.getRangeAt(0);
                var selection = range.cloneRange();
                selection.selectNodeContents(range.startContainer);
                var content = selection.toString();
                var post = content.substring(range.startOffset);
                var newSubstr = strategy.replace(value, e);
                if (typeof newSubstr !== 'undefined') {
                    if ($.isArray(newSubstr)) {
                        post = newSubstr[1] + post;
                        newSubstr = newSubstr[0];
                    }
                    pre = pre.replace(strategy.match, newSubstr);
                    range.selectNodeContents(range.startContainer);
                    range.deleteContents();
                    var node = document.createTextNode(pre + post);
                    range.insertNode(node);
                    range.setStart(node, pre.length);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            },
            // Private methods
            // ---------------
            // Returns the caret's relative position from the contenteditable's
            // left top corner.
            //
            // Examples
            //
            //   this._getCaretRelativePosition()
            //   //=> { top: 18, left: 200, lineHeight: 16 }
            //
            // Dropdown's position will be decided using the result.
            _getCaretRelativePosition: function () {
                var range = window.getSelection().getRangeAt(0).cloneRange();
                var node = document.createElement('span');
                range.insertNode(node);
                range.selectNodeContents(node);
                range.deleteContents();
                var $node = $(node);
                var position = $node.offset();
                position.left -= this.$el.offset().left;
                position.top += $node.height() - this.$el.offset().top;
                position.lineHeight = $node.height();
                $node.remove();
                return position;
            },
            // Returns the string between the first character and the caret.
            // Completer will be triggered with the result for start autocompleting.
            //
            // Example
            //
            //   // Suppose the html is '<b>hello</b> wor|ld' and | is the caret.
            //   this.getTextFromHeadToCaret()
            //   // => ' wor'  // not '<b>hello</b> wor'
            getTextFromHeadToCaret: function () {
                var range = window.getSelection().getRangeAt(0);
                var selection = range.cloneRange();
                selection.selectNodeContents(range.startContainer);
                return selection.toString().substring(0, range.startOffset);
            }
        });
        $.fn.textcomplete.ContentEditable = ContentEditable;
    }(jQuery);
    return jQuery;
}));
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

/* jshint maxerr: 10000 */
/* jslint unused: true */
/* jshint shadow: true */
/* jshint -W075 */
(function (ns) {
    // this list must be ordered from largest length of the value array, index 0, to the shortest
    ns.emojioneList = {
        ':kiss_ww:': ["1f469-200d-2764-fe0f-200d-1f48b-200d-1f469", "1f469-2764-1f48b-1f469"],
        ':couplekiss_ww:': ["1f469-2764-1f48b-1f469"],
        ':kiss_mm:': ["1f468-200d-2764-fe0f-200d-1f48b-200d-1f468", "1f468-2764-1f48b-1f468"],
        ':couplekiss_mm:': ["1f468-2764-1f48b-1f468"],
        ':family_mmbb:': ["1f468-200d-1f468-200d-1f466-200d-1f466", "1f468-1f468-1f466-1f466"],
        ':family_mmgb:': ["1f468-200d-1f468-200d-1f467-200d-1f466", "1f468-1f468-1f467-1f466"],
        ':family_mmgg:': ["1f468-200d-1f468-200d-1f467-200d-1f467", "1f468-1f468-1f467-1f467"],
        ':family_mwbb:': ["1f468-200d-1f469-200d-1f466-200d-1f466", "1f468-1f469-1f466-1f466"],
        ':family_mwgb:': ["1f468-200d-1f469-200d-1f467-200d-1f466", "1f468-1f469-1f467-1f466"],
        ':family_mwgg:': ["1f468-200d-1f469-200d-1f467-200d-1f467", "1f468-1f469-1f467-1f467"],
        ':family_wwbb:': ["1f469-200d-1f469-200d-1f466-200d-1f466", "1f469-1f469-1f466-1f466"],
        ':family_wwgb:': ["1f469-200d-1f469-200d-1f467-200d-1f466", "1f469-1f469-1f467-1f466"],
        ':family_wwgg:': ["1f469-200d-1f469-200d-1f467-200d-1f467", "1f469-1f469-1f467-1f467"],
        ':couple_ww:': ["1f469-200d-2764-fe0f-200d-1f469", "1f469-2764-1f469"],
        ':couple_with_heart_ww:': ["1f469-2764-1f469"],
        ':couple_mm:': ["1f468-200d-2764-fe0f-200d-1f468", "1f468-2764-1f468"],
        ':couple_with_heart_mm:': ["1f468-2764-1f468"],
        ':family_mmb:': ["1f468-200d-1f468-200d-1f466", "1f468-1f468-1f466"],
        ':family_mmg:': ["1f468-200d-1f468-200d-1f467", "1f468-1f468-1f467"],
        ':family_mwg:': ["1f468-200d-1f469-200d-1f467", "1f468-1f469-1f467"],
        ':family_wwb:': ["1f469-200d-1f469-200d-1f466", "1f469-1f469-1f466"],
        ':family_wwg:': ["1f469-200d-1f469-200d-1f467", "1f469-1f469-1f467"],
        ':hash:': ["0023-fe0f-20e3", "0023-20e3"],
        ':zero:': ["0030-fe0f-20e3", "0030-20e3"],
        ':one:': ["0031-fe0f-20e3", "0031-20e3"],
        ':two:': ["0032-fe0f-20e3", "0032-20e3"],
        ':three:': ["0033-fe0f-20e3", "0033-20e3"],
        ':four:': ["0034-fe0f-20e3", "0034-20e3"],
        ':five:': ["0035-fe0f-20e3", "0035-20e3"],
        ':six:': ["0036-fe0f-20e3", "0036-20e3"],
        ':seven:': ["0037-fe0f-20e3", "0037-20e3"],
        ':eight:': ["0038-fe0f-20e3", "0038-20e3"],
        ':nine:': ["0039-fe0f-20e3", "0039-20e3"],
        ':flag_ac:': ["1f1e6-1f1e8"],
        ':ac:': ["1f1e6-1f1e8"],
        ':flag_ad:': ["1f1e6-1f1e9"],
        ':ad:': ["1f1e6-1f1e9"],
        ':flag_ae:': ["1f1e6-1f1ea"],
        ':ae:': ["1f1e6-1f1ea"],
        ':flag_af:': ["1f1e6-1f1eb"],
        ':af:': ["1f1e6-1f1eb"],
        ':flag_ag:': ["1f1e6-1f1ec"],
        ':ag:': ["1f1e6-1f1ec"],
        ':flag_ai:': ["1f1e6-1f1ee"],
        ':ai:': ["1f1e6-1f1ee"],
        ':flag_al:': ["1f1e6-1f1f1"],
        ':al:': ["1f1e6-1f1f1"],
        ':flag_am:': ["1f1e6-1f1f2"],
        ':am:': ["1f1e6-1f1f2"],
        ':flag_ao:': ["1f1e6-1f1f4"],
        ':ao:': ["1f1e6-1f1f4"],
        ':flag_ar:': ["1f1e6-1f1f7"],
        ':ar:': ["1f1e6-1f1f7"],
        ':flag_at:': ["1f1e6-1f1f9"],
        ':at:': ["1f1e6-1f1f9"],
        ':flag_au:': ["1f1e6-1f1fa"],
        ':au:': ["1f1e6-1f1fa"],
        ':flag_aw:': ["1f1e6-1f1fc"],
        ':aw:': ["1f1e6-1f1fc"],
        ':flag_az:': ["1f1e6-1f1ff"],
        ':az:': ["1f1e6-1f1ff"],
        ':flag_ba:': ["1f1e7-1f1e6"],
        ':ba:': ["1f1e7-1f1e6"],
        ':flag_bb:': ["1f1e7-1f1e7"],
        ':bb:': ["1f1e7-1f1e7"],
        ':flag_bd:': ["1f1e7-1f1e9"],
        ':bd:': ["1f1e7-1f1e9"],
        ':flag_be:': ["1f1e7-1f1ea"],
        ':be:': ["1f1e7-1f1ea"],
        ':flag_bf:': ["1f1e7-1f1eb"],
        ':bf:': ["1f1e7-1f1eb"],
        ':flag_bg:': ["1f1e7-1f1ec"],
        ':bg:': ["1f1e7-1f1ec"],
        ':flag_bh:': ["1f1e7-1f1ed"],
        ':bh:': ["1f1e7-1f1ed"],
        ':flag_bi:': ["1f1e7-1f1ee"],
        ':bi:': ["1f1e7-1f1ee"],
        ':flag_bj:': ["1f1e7-1f1ef"],
        ':bj:': ["1f1e7-1f1ef"],
        ':flag_bm:': ["1f1e7-1f1f2"],
        ':bm:': ["1f1e7-1f1f2"],
        ':flag_bn:': ["1f1e7-1f1f3"],
        ':bn:': ["1f1e7-1f1f3"],
        ':flag_bo:': ["1f1e7-1f1f4"],
        ':bo:': ["1f1e7-1f1f4"],
        ':flag_br:': ["1f1e7-1f1f7"],
        ':br:': ["1f1e7-1f1f7"],
        ':flag_bs:': ["1f1e7-1f1f8"],
        ':bs:': ["1f1e7-1f1f8"],
        ':flag_bt:': ["1f1e7-1f1f9"],
        ':bt:': ["1f1e7-1f1f9"],
        ':flag_bw:': ["1f1e7-1f1fc"],
        ':bw:': ["1f1e7-1f1fc"],
        ':flag_by:': ["1f1e7-1f1fe"],
        ':by:': ["1f1e7-1f1fe"],
        ':flag_bz:': ["1f1e7-1f1ff"],
        ':bz:': ["1f1e7-1f1ff"],
        ':flag_ca:': ["1f1e8-1f1e6"],
        ':ca:': ["1f1e8-1f1e6"],
        ':flag_cd:': ["1f1e8-1f1e9"],
        ':congo:': ["1f1e8-1f1e9"],
        ':flag_cf:': ["1f1e8-1f1eb"],
        ':cf:': ["1f1e8-1f1eb"],
        ':flag_cg:': ["1f1e8-1f1ec"],
        ':cg:': ["1f1e8-1f1ec"],
        ':flag_ch:': ["1f1e8-1f1ed"],
        ':ch:': ["1f1e8-1f1ed"],
        ':flag_ci:': ["1f1e8-1f1ee"],
        ':ci:': ["1f1e8-1f1ee"],
        ':flag_cl:': ["1f1e8-1f1f1"],
        ':chile:': ["1f1e8-1f1f1"],
        ':flag_cm:': ["1f1e8-1f1f2"],
        ':cm:': ["1f1e8-1f1f2"],
        ':flag_cn:': ["1f1e8-1f1f3"],
        ':cn:': ["1f1e8-1f1f3"],
        ':flag_co:': ["1f1e8-1f1f4"],
        ':co:': ["1f1e8-1f1f4"],
        ':flag_cr:': ["1f1e8-1f1f7"],
        ':cr:': ["1f1e8-1f1f7"],
        ':flag_cu:': ["1f1e8-1f1fa"],
        ':cu:': ["1f1e8-1f1fa"],
        ':flag_cv:': ["1f1e8-1f1fb"],
        ':cv:': ["1f1e8-1f1fb"],
        ':flag_cy:': ["1f1e8-1f1fe"],
        ':cy:': ["1f1e8-1f1fe"],
        ':flag_cz:': ["1f1e8-1f1ff"],
        ':cz:': ["1f1e8-1f1ff"],
        ':flag_de:': ["1f1e9-1f1ea"],
        ':de:': ["1f1e9-1f1ea"],
        ':flag_dj:': ["1f1e9-1f1ef"],
        ':dj:': ["1f1e9-1f1ef"],
        ':flag_dk:': ["1f1e9-1f1f0"],
        ':dk:': ["1f1e9-1f1f0"],
        ':flag_dm:': ["1f1e9-1f1f2"],
        ':dm:': ["1f1e9-1f1f2"],
        ':flag_do:': ["1f1e9-1f1f4"],
        ':do:': ["1f1e9-1f1f4"],
        ':flag_dz:': ["1f1e9-1f1ff"],
        ':dz:': ["1f1e9-1f1ff"],
        ':flag_ec:': ["1f1ea-1f1e8"],
        ':ec:': ["1f1ea-1f1e8"],
        ':flag_ee:': ["1f1ea-1f1ea"],
        ':ee:': ["1f1ea-1f1ea"],
        ':flag_eg:': ["1f1ea-1f1ec"],
        ':eg:': ["1f1ea-1f1ec"],
        ':flag_eh:': ["1f1ea-1f1ed"],
        ':eh:': ["1f1ea-1f1ed"],
        ':flag_er:': ["1f1ea-1f1f7"],
        ':er:': ["1f1ea-1f1f7"],
        ':flag_es:': ["1f1ea-1f1f8"],
        ':es:': ["1f1ea-1f1f8"],
        ':flag_et:': ["1f1ea-1f1f9"],
        ':et:': ["1f1ea-1f1f9"],
        ':flag_fi:': ["1f1eb-1f1ee"],
        ':fi:': ["1f1eb-1f1ee"],
        ':flag_fj:': ["1f1eb-1f1ef"],
        ':fj:': ["1f1eb-1f1ef"],
        ':flag_fk:': ["1f1eb-1f1f0"],
        ':fk:': ["1f1eb-1f1f0"],
        ':flag_fm:': ["1f1eb-1f1f2"],
        ':fm:': ["1f1eb-1f1f2"],
        ':flag_fo:': ["1f1eb-1f1f4"],
        ':fo:': ["1f1eb-1f1f4"],
        ':flag_fr:': ["1f1eb-1f1f7"],
        ':fr:': ["1f1eb-1f1f7"],
        ':flag_ga:': ["1f1ec-1f1e6"],
        ':ga:': ["1f1ec-1f1e6"],
        ':flag_gb:': ["1f1ec-1f1e7"],
        ':gb:': ["1f1ec-1f1e7"],
        ':flag_gd:': ["1f1ec-1f1e9"],
        ':gd:': ["1f1ec-1f1e9"],
        ':flag_ge:': ["1f1ec-1f1ea"],
        ':ge:': ["1f1ec-1f1ea"],
        ':flag_gh:': ["1f1ec-1f1ed"],
        ':gh:': ["1f1ec-1f1ed"],
        ':flag_gi:': ["1f1ec-1f1ee"],
        ':gi:': ["1f1ec-1f1ee"],
        ':flag_gl:': ["1f1ec-1f1f1"],
        ':gl:': ["1f1ec-1f1f1"],
        ':flag_gm:': ["1f1ec-1f1f2"],
        ':gm:': ["1f1ec-1f1f2"],
        ':flag_gn:': ["1f1ec-1f1f3"],
        ':gn:': ["1f1ec-1f1f3"],
        ':flag_gq:': ["1f1ec-1f1f6"],
        ':gq:': ["1f1ec-1f1f6"],
        ':flag_gr:': ["1f1ec-1f1f7"],
        ':gr:': ["1f1ec-1f1f7"],
        ':flag_gt:': ["1f1ec-1f1f9"],
        ':gt:': ["1f1ec-1f1f9"],
        ':flag_gu:': ["1f1ec-1f1fa"],
        ':gu:': ["1f1ec-1f1fa"],
        ':flag_gw:': ["1f1ec-1f1fc"],
        ':gw:': ["1f1ec-1f1fc"],
        ':flag_gy:': ["1f1ec-1f1fe"],
        ':gy:': ["1f1ec-1f1fe"],
        ':flag_hk:': ["1f1ed-1f1f0"],
        ':hk:': ["1f1ed-1f1f0"],
        ':flag_hn:': ["1f1ed-1f1f3"],
        ':hn:': ["1f1ed-1f1f3"],
        ':flag_hr:': ["1f1ed-1f1f7"],
        ':hr:': ["1f1ed-1f1f7"],
        ':flag_ht:': ["1f1ed-1f1f9"],
        ':ht:': ["1f1ed-1f1f9"],
        ':flag_hu:': ["1f1ed-1f1fa"],
        ':hu:': ["1f1ed-1f1fa"],
        ':flag_id:': ["1f1ee-1f1e9"],
        ':indonesia:': ["1f1ee-1f1e9"],
        ':flag_ie:': ["1f1ee-1f1ea"],
        ':ie:': ["1f1ee-1f1ea"],
        ':flag_il:': ["1f1ee-1f1f1"],
        ':il:': ["1f1ee-1f1f1"],
        ':flag_in:': ["1f1ee-1f1f3"],
        ':in:': ["1f1ee-1f1f3"],
        ':flag_iq:': ["1f1ee-1f1f6"],
        ':iq:': ["1f1ee-1f1f6"],
        ':flag_ir:': ["1f1ee-1f1f7"],
        ':ir:': ["1f1ee-1f1f7"],
        ':flag_is:': ["1f1ee-1f1f8"],
        ':is:': ["1f1ee-1f1f8"],
        ':flag_it:': ["1f1ee-1f1f9"],
        ':it:': ["1f1ee-1f1f9"],
        ':flag_je:': ["1f1ef-1f1ea"],
        ':je:': ["1f1ef-1f1ea"],
        ':flag_jm:': ["1f1ef-1f1f2"],
        ':jm:': ["1f1ef-1f1f2"],
        ':flag_jo:': ["1f1ef-1f1f4"],
        ':jo:': ["1f1ef-1f1f4"],
        ':flag_jp:': ["1f1ef-1f1f5"],
        ':jp:': ["1f1ef-1f1f5"],
        ':flag_ke:': ["1f1f0-1f1ea"],
        ':ke:': ["1f1f0-1f1ea"],
        ':flag_kg:': ["1f1f0-1f1ec"],
        ':kg:': ["1f1f0-1f1ec"],
        ':flag_kh:': ["1f1f0-1f1ed"],
        ':kh:': ["1f1f0-1f1ed"],
        ':flag_ki:': ["1f1f0-1f1ee"],
        ':ki:': ["1f1f0-1f1ee"],
        ':flag_km:': ["1f1f0-1f1f2"],
        ':km:': ["1f1f0-1f1f2"],
        ':flag_kn:': ["1f1f0-1f1f3"],
        ':kn:': ["1f1f0-1f1f3"],
        ':flag_kp:': ["1f1f0-1f1f5"],
        ':kp:': ["1f1f0-1f1f5"],
        ':flag_kr:': ["1f1f0-1f1f7"],
        ':kr:': ["1f1f0-1f1f7"],
        ':flag_kw:': ["1f1f0-1f1fc"],
        ':kw:': ["1f1f0-1f1fc"],
        ':flag_ky:': ["1f1f0-1f1fe"],
        ':ky:': ["1f1f0-1f1fe"],
        ':flag_kz:': ["1f1f0-1f1ff"],
        ':kz:': ["1f1f0-1f1ff"],
        ':flag_la:': ["1f1f1-1f1e6"],
        ':la:': ["1f1f1-1f1e6"],
        ':flag_lb:': ["1f1f1-1f1e7"],
        ':lb:': ["1f1f1-1f1e7"],
        ':flag_lc:': ["1f1f1-1f1e8"],
        ':lc:': ["1f1f1-1f1e8"],
        ':flag_li:': ["1f1f1-1f1ee"],
        ':li:': ["1f1f1-1f1ee"],
        ':flag_lk:': ["1f1f1-1f1f0"],
        ':lk:': ["1f1f1-1f1f0"],
        ':flag_lr:': ["1f1f1-1f1f7"],
        ':lr:': ["1f1f1-1f1f7"],
        ':flag_ls:': ["1f1f1-1f1f8"],
        ':ls:': ["1f1f1-1f1f8"],
        ':flag_lt:': ["1f1f1-1f1f9"],
        ':lt:': ["1f1f1-1f1f9"],
        ':flag_lu:': ["1f1f1-1f1fa"],
        ':lu:': ["1f1f1-1f1fa"],
        ':flag_lv:': ["1f1f1-1f1fb"],
        ':lv:': ["1f1f1-1f1fb"],
        ':flag_ly:': ["1f1f1-1f1fe"],
        ':ly:': ["1f1f1-1f1fe"],
        ':flag_ma:': ["1f1f2-1f1e6"],
        ':ma:': ["1f1f2-1f1e6"],
        ':flag_mc:': ["1f1f2-1f1e8"],
        ':mc:': ["1f1f2-1f1e8"],
        ':flag_md:': ["1f1f2-1f1e9"],
        ':md:': ["1f1f2-1f1e9"],
        ':flag_me:': ["1f1f2-1f1ea"],
        ':me:': ["1f1f2-1f1ea"],
        ':flag_mg:': ["1f1f2-1f1ec"],
        ':mg:': ["1f1f2-1f1ec"],
        ':flag_mh:': ["1f1f2-1f1ed"],
        ':mh:': ["1f1f2-1f1ed"],
        ':flag_mk:': ["1f1f2-1f1f0"],
        ':mk:': ["1f1f2-1f1f0"],
        ':flag_ml:': ["1f1f2-1f1f1"],
        ':ml:': ["1f1f2-1f1f1"],
        ':flag_mm:': ["1f1f2-1f1f2"],
        ':mm:': ["1f1f2-1f1f2"],
        ':flag_mn:': ["1f1f2-1f1f3"],
        ':mn:': ["1f1f2-1f1f3"],
        ':flag_mo:': ["1f1f2-1f1f4"],
        ':mo:': ["1f1f2-1f1f4"],
        ':flag_mr:': ["1f1f2-1f1f7"],
        ':mr:': ["1f1f2-1f1f7"],
        ':flag_ms:': ["1f1f2-1f1f8"],
        ':ms:': ["1f1f2-1f1f8"],
        ':flag_mt:': ["1f1f2-1f1f9"],
        ':mt:': ["1f1f2-1f1f9"],
        ':flag_mu:': ["1f1f2-1f1fa"],
        ':mu:': ["1f1f2-1f1fa"],
        ':flag_mv:': ["1f1f2-1f1fb"],
        ':mv:': ["1f1f2-1f1fb"],
        ':flag_mw:': ["1f1f2-1f1fc"],
        ':mw:': ["1f1f2-1f1fc"],
        ':flag_mx:': ["1f1f2-1f1fd"],
        ':mx:': ["1f1f2-1f1fd"],
        ':flag_my:': ["1f1f2-1f1fe"],
        ':my:': ["1f1f2-1f1fe"],
        ':flag_mz:': ["1f1f2-1f1ff"],
        ':mz:': ["1f1f2-1f1ff"],
        ':flag_na:': ["1f1f3-1f1e6"],
        ':na:': ["1f1f3-1f1e6"],
        ':flag_nc:': ["1f1f3-1f1e8"],
        ':nc:': ["1f1f3-1f1e8"],
        ':flag_ne:': ["1f1f3-1f1ea"],
        ':ne:': ["1f1f3-1f1ea"],
        ':flag_ng:': ["1f1f3-1f1ec"],
        ':nigeria:': ["1f1f3-1f1ec"],
        ':flag_ni:': ["1f1f3-1f1ee"],
        ':ni:': ["1f1f3-1f1ee"],
        ':flag_nl:': ["1f1f3-1f1f1"],
        ':nl:': ["1f1f3-1f1f1"],
        ':flag_no:': ["1f1f3-1f1f4"],
        ':no:': ["1f1f3-1f1f4"],
        ':flag_np:': ["1f1f3-1f1f5"],
        ':np:': ["1f1f3-1f1f5"],
        ':flag_nr:': ["1f1f3-1f1f7"],
        ':nr:': ["1f1f3-1f1f7"],
        ':flag_nu:': ["1f1f3-1f1fa"],
        ':nu:': ["1f1f3-1f1fa"],
        ':flag_nz:': ["1f1f3-1f1ff"],
        ':nz:': ["1f1f3-1f1ff"],
        ':flag_om:': ["1f1f4-1f1f2"],
        ':om:': ["1f1f4-1f1f2"],
        ':flag_pa:': ["1f1f5-1f1e6"],
        ':pa:': ["1f1f5-1f1e6"],
        ':flag_pe:': ["1f1f5-1f1ea"],
        ':pe:': ["1f1f5-1f1ea"],
        ':flag_pf:': ["1f1f5-1f1eb"],
        ':pf:': ["1f1f5-1f1eb"],
        ':flag_pg:': ["1f1f5-1f1ec"],
        ':pg:': ["1f1f5-1f1ec"],
        ':flag_ph:': ["1f1f5-1f1ed"],
        ':ph:': ["1f1f5-1f1ed"],
        ':flag_pk:': ["1f1f5-1f1f0"],
        ':pk:': ["1f1f5-1f1f0"],
        ':flag_pl:': ["1f1f5-1f1f1"],
        ':pl:': ["1f1f5-1f1f1"],
        ':flag_pr:': ["1f1f5-1f1f7"],
        ':pr:': ["1f1f5-1f1f7"],
        ':flag_ps:': ["1f1f5-1f1f8"],
        ':ps:': ["1f1f5-1f1f8"],
        ':flag_pt:': ["1f1f5-1f1f9"],
        ':pt:': ["1f1f5-1f1f9"],
        ':flag_pw:': ["1f1f5-1f1fc"],
        ':pw:': ["1f1f5-1f1fc"],
        ':flag_py:': ["1f1f5-1f1fe"],
        ':py:': ["1f1f5-1f1fe"],
        ':flag_qa:': ["1f1f6-1f1e6"],
        ':qa:': ["1f1f6-1f1e6"],
        ':flag_ro:': ["1f1f7-1f1f4"],
        ':ro:': ["1f1f7-1f1f4"],
        ':flag_rs:': ["1f1f7-1f1f8"],
        ':rs:': ["1f1f7-1f1f8"],
        ':flag_ru:': ["1f1f7-1f1fa"],
        ':ru:': ["1f1f7-1f1fa"],
        ':flag_rw:': ["1f1f7-1f1fc"],
        ':rw:': ["1f1f7-1f1fc"],
        ':flag_sa:': ["1f1f8-1f1e6"],
        ':saudiarabia:': ["1f1f8-1f1e6"],
        ':saudi:': ["1f1f8-1f1e6"],
        ':flag_sb:': ["1f1f8-1f1e7"],
        ':sb:': ["1f1f8-1f1e7"],
        ':flag_sc:': ["1f1f8-1f1e8"],
        ':sc:': ["1f1f8-1f1e8"],
        ':flag_sd:': ["1f1f8-1f1e9"],
        ':sd:': ["1f1f8-1f1e9"],
        ':flag_se:': ["1f1f8-1f1ea"],
        ':se:': ["1f1f8-1f1ea"],
        ':flag_sg:': ["1f1f8-1f1ec"],
        ':sg:': ["1f1f8-1f1ec"],
        ':flag_sh:': ["1f1f8-1f1ed"],
        ':sh:': ["1f1f8-1f1ed"],
        ':flag_si:': ["1f1f8-1f1ee"],
        ':si:': ["1f1f8-1f1ee"],
        ':flag_sk:': ["1f1f8-1f1f0"],
        ':sk:': ["1f1f8-1f1f0"],
        ':flag_sl:': ["1f1f8-1f1f1"],
        ':sl:': ["1f1f8-1f1f1"],
        ':flag_sm:': ["1f1f8-1f1f2"],
        ':sm:': ["1f1f8-1f1f2"],
        ':flag_sn:': ["1f1f8-1f1f3"],
        ':sn:': ["1f1f8-1f1f3"],
        ':flag_so:': ["1f1f8-1f1f4"],
        ':so:': ["1f1f8-1f1f4"],
        ':flag_sr:': ["1f1f8-1f1f7"],
        ':sr:': ["1f1f8-1f1f7"],
        ':flag_st:': ["1f1f8-1f1f9"],
        ':st:': ["1f1f8-1f1f9"],
        ':flag_sv:': ["1f1f8-1f1fb"],
        ':sv:': ["1f1f8-1f1fb"],
        ':flag_sy:': ["1f1f8-1f1fe"],
        ':sy:': ["1f1f8-1f1fe"],
        ':flag_sz:': ["1f1f8-1f1ff"],
        ':sz:': ["1f1f8-1f1ff"],
        ':flag_td:': ["1f1f9-1f1e9"],
        ':td:': ["1f1f9-1f1e9"],
        ':flag_tg:': ["1f1f9-1f1ec"],
        ':tg:': ["1f1f9-1f1ec"],
        ':flag_th:': ["1f1f9-1f1ed"],
        ':th:': ["1f1f9-1f1ed"],
        ':flag_tj:': ["1f1f9-1f1ef"],
        ':tj:': ["1f1f9-1f1ef"],
        ':flag_tl:': ["1f1f9-1f1f1"],
        ':tl:': ["1f1f9-1f1f1"],
        ':flag_tm:': ["1f1f9-1f1f2"],
        ':turkmenistan:': ["1f1f9-1f1f2"],
        ':flag_tn:': ["1f1f9-1f1f3"],
        ':tn:': ["1f1f9-1f1f3"],
        ':flag_to:': ["1f1f9-1f1f4"],
        ':to:': ["1f1f9-1f1f4"],
        ':flag_tr:': ["1f1f9-1f1f7"],
        ':tr:': ["1f1f9-1f1f7"],
        ':flag_tt:': ["1f1f9-1f1f9"],
        ':tt:': ["1f1f9-1f1f9"],
        ':flag_tv:': ["1f1f9-1f1fb"],
        ':tuvalu:': ["1f1f9-1f1fb"],
        ':flag_tw:': ["1f1f9-1f1fc"],
        ':tw:': ["1f1f9-1f1fc"],
        ':flag_tz:': ["1f1f9-1f1ff"],
        ':tz:': ["1f1f9-1f1ff"],
        ':flag_ua:': ["1f1fa-1f1e6"],
        ':ua:': ["1f1fa-1f1e6"],
        ':flag_ug:': ["1f1fa-1f1ec"],
        ':ug:': ["1f1fa-1f1ec"],
        ':flag_us:': ["1f1fa-1f1f8"],
        ':us:': ["1f1fa-1f1f8"],
        ':flag_uy:': ["1f1fa-1f1fe"],
        ':uy:': ["1f1fa-1f1fe"],
        ':flag_uz:': ["1f1fa-1f1ff"],
        ':uz:': ["1f1fa-1f1ff"],
        ':flag_va:': ["1f1fb-1f1e6"],
        ':va:': ["1f1fb-1f1e6"],
        ':flag_vc:': ["1f1fb-1f1e8"],
        ':vc:': ["1f1fb-1f1e8"],
        ':flag_ve:': ["1f1fb-1f1ea"],
        ':ve:': ["1f1fb-1f1ea"],
        ':flag_vi:': ["1f1fb-1f1ee"],
        ':vi:': ["1f1fb-1f1ee"],
        ':flag_vn:': ["1f1fb-1f1f3"],
        ':vn:': ["1f1fb-1f1f3"],
        ':flag_vu:': ["1f1fb-1f1fa"],
        ':vu:': ["1f1fb-1f1fa"],
        ':flag_wf:': ["1f1fc-1f1eb"],
        ':wf:': ["1f1fc-1f1eb"],
        ':flag_ws:': ["1f1fc-1f1f8"],
        ':ws:': ["1f1fc-1f1f8"],
        ':flag_xk:': ["1f1fd-1f1f0"],
        ':xk:': ["1f1fd-1f1f0"],
        ':flag_ye:': ["1f1fe-1f1ea"],
        ':ye:': ["1f1fe-1f1ea"],
        ':flag_za:': ["1f1ff-1f1e6"],
        ':za:': ["1f1ff-1f1e6"],
        ':flag_zm:': ["1f1ff-1f1f2"],
        ':zm:': ["1f1ff-1f1f2"],
        ':flag_zw:': ["1f1ff-1f1fc"],
        ':zw:': ["1f1ff-1f1fc"],
        ':copyright:': ["00a9-fe0f", "00a9"],
        ':registered:': ["00ae-fe0f", "00ae"],
        ':mahjong:': ["1f004-fe0f", "1f004"],
        ':black_joker:': ["1f0cf"],
        ':a:': ["1f170"],
        ':b:': ["1f171"],
        ':o2:': ["1f17e"],
        ':parking:': ["1f17f-fe0f", "1f17f"],
        ':ab:': ["1f18e"],
        ':cl:': ["1f191"],
        ':cool:': ["1f192"],
        ':free:': ["1f193"],
        ':id:': ["1f194"],
        ':new:': ["1f195"],
        ':ng:': ["1f196"],
        ':ok:': ["1f197"],
        ':sos:': ["1f198"],
        ':up:': ["1f199"],
        ':vs:': ["1f19a"],
        ':koko:': ["1f201"],
        ':sa:': ["1f202"],
        ':u7121:': ["1f21a-fe0f", "1f21a"],
        ':u6307:': ["1f22f-fe0f", "1f22f"],
        ':u7981:': ["1f232"],
        ':u7a7a:': ["1f233"],
        ':u5408:': ["1f234"],
        ':u6e80:': ["1f235"],
        ':u6709:': ["1f236"],
        ':u6708:': ["1f237"],
        ':u7533:': ["1f238"],
        ':u5272:': ["1f239"],
        ':u55b6:': ["1f23a"],
        ':ideograph_advantage:': ["1f250"],
        ':accept:': ["1f251"],
        ':cyclone:': ["1f300"],
        ':foggy:': ["1f301"],
        ':closed_umbrella:': ["1f302"],
        ':night_with_stars:': ["1f303"],
        ':sunrise_over_mountains:': ["1f304"],
        ':sunrise:': ["1f305"],
        ':city_dusk:': ["1f306"],
        ':city_sunset:': ["1f307"],
        ':city_sunrise:': ["1f307"],
        ':rainbow:': ["1f308"],
        ':bridge_at_night:': ["1f309"],
        ':ocean:': ["1f30a"],
        ':volcano:': ["1f30b"],
        ':milky_way:': ["1f30c"],
        ':earth_africa:': ["1f30d"],
        ':earth_americas:': ["1f30e"],
        ':earth_asia:': ["1f30f"],
        ':globe_with_meridians:': ["1f310"],
        ':new_moon:': ["1f311"],
        ':waxing_crescent_moon:': ["1f312"],
        ':first_quarter_moon:': ["1f313"],
        ':waxing_gibbous_moon:': ["1f314"],
        ':full_moon:': ["1f315"],
        ':waning_gibbous_moon:': ["1f316"],
        ':last_quarter_moon:': ["1f317"],
        ':waning_crescent_moon:': ["1f318"],
        ':crescent_moon:': ["1f319"],
        ':new_moon_with_face:': ["1f31a"],
        ':first_quarter_moon_with_face:': ["1f31b"],
        ':last_quarter_moon_with_face:': ["1f31c"],
        ':full_moon_with_face:': ["1f31d"],
        ':sun_with_face:': ["1f31e"],
        ':star2:': ["1f31f"],
        ':stars:': ["1f320"],
        ':thermometer:': ["1f321"],
        ':cloud_rain:': ["1f327"],
        ':cloud_with_rain:': ["1f327"],
        ':cloud_snow:': ["1f328"],
        ':cloud_with_snow:': ["1f328"],
        ':cloud_lightning:': ["1f329"],
        ':cloud_with_lightning:': ["1f329"],
        ':cloud_tornado:': ["1f32a"],
        ':cloud_with_tornado:': ["1f32a"],
        ':fog:': ["1f32b"],
        ':wind_blowing_face:': ["1f32c"],
        ':chestnut:': ["1f330"],
        ':seedling:': ["1f331"],
        ':evergreen_tree:': ["1f332"],
        ':deciduous_tree:': ["1f333"],
        ':palm_tree:': ["1f334"],
        ':cactus:': ["1f335"],
        ':hot_pepper:': ["1f336"],
        ':tulip:': ["1f337"],
        ':cherry_blossom:': ["1f338"],
        ':rose:': ["1f339"],
        ':hibiscus:': ["1f33a"],
        ':sunflower:': ["1f33b"],
        ':blossom:': ["1f33c"],
        ':corn:': ["1f33d"],
        ':ear_of_rice:': ["1f33e"],
        ':herb:': ["1f33f"],
        ':four_leaf_clover:': ["1f340"],
        ':maple_leaf:': ["1f341"],
        ':fallen_leaf:': ["1f342"],
        ':leaves:': ["1f343"],
        ':mushroom:': ["1f344"],
        ':tomato:': ["1f345"],
        ':eggplant:': ["1f346"],
        ':grapes:': ["1f347"],
        ':melon:': ["1f348"],
        ':watermelon:': ["1f349"],
        ':tangerine:': ["1f34a"],
        ':lemon:': ["1f34b"],
        ':banana:': ["1f34c"],
        ':pineapple:': ["1f34d"],
        ':apple:': ["1f34e"],
        ':green_apple:': ["1f34f"],
        ':pear:': ["1f350"],
        ':peach:': ["1f351"],
        ':cherries:': ["1f352"],
        ':strawberry:': ["1f353"],
        ':hamburger:': ["1f354"],
        ':pizza:': ["1f355"],
        ':meat_on_bone:': ["1f356"],
        ':poultry_leg:': ["1f357"],
        ':rice_cracker:': ["1f358"],
        ':rice_ball:': ["1f359"],
        ':rice:': ["1f35a"],
        ':curry:': ["1f35b"],
        ':ramen:': ["1f35c"],
        ':spaghetti:': ["1f35d"],
        ':bread:': ["1f35e"],
        ':fries:': ["1f35f"],
        ':sweet_potato:': ["1f360"],
        ':dango:': ["1f361"],
        ':oden:': ["1f362"],
        ':sushi:': ["1f363"],
        ':fried_shrimp:': ["1f364"],
        ':fish_cake:': ["1f365"],
        ':icecream:': ["1f366"],
        ':shaved_ice:': ["1f367"],
        ':ice_cream:': ["1f368"],
        ':doughnut:': ["1f369"],
        ':cookie:': ["1f36a"],
        ':chocolate_bar:': ["1f36b"],
        ':candy:': ["1f36c"],
        ':lollipop:': ["1f36d"],
        ':custard:': ["1f36e"],
        ':honey_pot:': ["1f36f"],
        ':cake:': ["1f370"],
        ':bento:': ["1f371"],
        ':stew:': ["1f372"],
        ':egg:': ["1f373"],
        ':fork_and_knife:': ["1f374"],
        ':tea:': ["1f375"],
        ':sake:': ["1f376"],
        ':wine_glass:': ["1f377"],
        ':cocktail:': ["1f378"],
        ':tropical_drink:': ["1f379"],
        ':beer:': ["1f37a"],
        ':beers:': ["1f37b"],
        ':baby_bottle:': ["1f37c"],
        ':fork_knife_plate:': ["1f37d"],
        ':fork_and_knife_with_plate:': ["1f37d"],
        ':ribbon:': ["1f380"],
        ':gift:': ["1f381"],
        ':birthday:': ["1f382"],
        ':jack_o_lantern:': ["1f383"],
        ':christmas_tree:': ["1f384"],
        ':santa:': ["1f385"],
        ':fireworks:': ["1f386"],
        ':sparkler:': ["1f387"],
        ':balloon:': ["1f388"],
        ':tada:': ["1f389"],
        ':confetti_ball:': ["1f38a"],
        ':tanabata_tree:': ["1f38b"],
        ':crossed_flags:': ["1f38c"],
        ':bamboo:': ["1f38d"],
        ':dolls:': ["1f38e"],
        ':flags:': ["1f38f"],
        ':wind_chime:': ["1f390"],
        ':rice_scene:': ["1f391"],
        ':school_satchel:': ["1f392"],
        ':mortar_board:': ["1f393"],
        ':military_medal:': ["1f396"],
        ':reminder_ribbon:': ["1f397"],
        ':microphone2:': ["1f399"],
        ':studio_microphone:': ["1f399"],
        ':level_slider:': ["1f39a"],
        ':control_knobs:': ["1f39b"],
        ':film_frames:': ["1f39e"],
        ':tickets:': ["1f39f"],
        ':admission_tickets:': ["1f39f"],
        ':carousel_horse:': ["1f3a0"],
        ':ferris_wheel:': ["1f3a1"],
        ':roller_coaster:': ["1f3a2"],
        ':fishing_pole_and_fish:': ["1f3a3"],
        ':microphone:': ["1f3a4"],
        ':movie_camera:': ["1f3a5"],
        ':cinema:': ["1f3a6"],
        ':headphones:': ["1f3a7"],
        ':art:': ["1f3a8"],
        ':tophat:': ["1f3a9"],
        ':circus_tent:': ["1f3aa"],
        ':ticket:': ["1f3ab"],
        ':clapper:': ["1f3ac"],
        ':performing_arts:': ["1f3ad"],
        ':video_game:': ["1f3ae"],
        ':dart:': ["1f3af"],
        ':slot_machine:': ["1f3b0"],
        ':8ball:': ["1f3b1"],
        ':game_die:': ["1f3b2"],
        ':bowling:': ["1f3b3"],
        ':flower_playing_cards:': ["1f3b4"],
        ':musical_note:': ["1f3b5"],
        ':notes:': ["1f3b6"],
        ':saxophone:': ["1f3b7"],
        ':guitar:': ["1f3b8"],
        ':musical_keyboard:': ["1f3b9"],
        ':trumpet:': ["1f3ba"],
        ':violin:': ["1f3bb"],
        ':musical_score:': ["1f3bc"],
        ':running_shirt_with_sash:': ["1f3bd"],
        ':tennis:': ["1f3be"],
        ':ski:': ["1f3bf"],
        ':basketball:': ["1f3c0"],
        ':checkered_flag:': ["1f3c1"],
        ':snowboarder:': ["1f3c2"],
        ':runner:': ["1f3c3"],
        ':surfer:': ["1f3c4"],
        ':medal:': ["1f3c5"],
        ':sports_medal:': ["1f3c5"],
        ':trophy:': ["1f3c6"],
        ':horse_racing:': ["1f3c7"],
        ':football:': ["1f3c8"],
        ':rugby_football:': ["1f3c9"],
        ':swimmer:': ["1f3ca"],
        ':lifter:': ["1f3cb"],
        ':weight_lifter:': ["1f3cb"],
        ':golfer:': ["1f3cc"],
        ':motorcycle:': ["1f3cd"],
        ':racing_motorcycle:': ["1f3cd"],
        ':race_car:': ["1f3ce"],
        ':racing_car:': ["1f3ce"],
        ':mountain_snow:': ["1f3d4"],
        ':snow_capped_mountain:': ["1f3d4"],
        ':camping:': ["1f3d5"],
        ':beach:': ["1f3d6"],
        ':beach_with_umbrella:': ["1f3d6"],
        ':construction_site:': ["1f3d7"],
        ':building_construction:': ["1f3d7"],
        ':homes:': ["1f3d8"],
        ':house_buildings:': ["1f3d8"],
        ':cityscape:': ["1f3d9"],
        ':house_abandoned:': ["1f3da"],
        ':derelict_house_building:': ["1f3da"],
        ':classical_building:': ["1f3db"],
        ':desert:': ["1f3dc"],
        ':island:': ["1f3dd"],
        ':desert_island:': ["1f3dd"],
        ':park:': ["1f3de"],
        ':national_park:': ["1f3de"],
        ':stadium:': ["1f3df"],
        ':house:': ["1f3e0"],
        ':house_with_garden:': ["1f3e1"],
        ':office:': ["1f3e2"],
        ':post_office:': ["1f3e3"],
        ':european_post_office:': ["1f3e4"],
        ':hospital:': ["1f3e5"],
        ':bank:': ["1f3e6"],
        ':atm:': ["1f3e7"],
        ':hotel:': ["1f3e8"],
        ':love_hotel:': ["1f3e9"],
        ':convenience_store:': ["1f3ea"],
        ':school:': ["1f3eb"],
        ':department_store:': ["1f3ec"],
        ':factory:': ["1f3ed"],
        ':izakaya_lantern:': ["1f3ee"],
        ':japanese_castle:': ["1f3ef"],
        ':european_castle:': ["1f3f0"],
        ':flag_white:': ["1f3f3"],
        ':waving_white_flag:': ["1f3f3"],
        ':flag_black:': ["1f3f4"],
        ':waving_black_flag:': ["1f3f4"],
        ':rosette:': ["1f3f5"],
        ':label:': ["1f3f7"],
        ':rat:': ["1f400"],
        ':mouse2:': ["1f401"],
        ':ox:': ["1f402"],
        ':water_buffalo:': ["1f403"],
        ':cow2:': ["1f404"],
        ':tiger2:': ["1f405"],
        ':leopard:': ["1f406"],
        ':rabbit2:': ["1f407"],
        ':cat2:': ["1f408"],
        ':dragon:': ["1f409"],
        ':crocodile:': ["1f40a"],
        ':whale2:': ["1f40b"],
        ':snail:': ["1f40c"],
        ':snake:': ["1f40d"],
        ':racehorse:': ["1f40e"],
        ':ram:': ["1f40f"],
        ':goat:': ["1f410"],
        ':sheep:': ["1f411"],
        ':monkey:': ["1f412"],
        ':rooster:': ["1f413"],
        ':chicken:': ["1f414"],
        ':dog2:': ["1f415"],
        ':pig2:': ["1f416"],
        ':boar:': ["1f417"],
        ':elephant:': ["1f418"],
        ':octopus:': ["1f419"],
        ':shell:': ["1f41a"],
        ':bug:': ["1f41b"],
        ':ant:': ["1f41c"],
        ':bee:': ["1f41d"],
        ':beetle:': ["1f41e"],
        ':fish:': ["1f41f"],
        ':tropical_fish:': ["1f420"],
        ':blowfish:': ["1f421"],
        ':turtle:': ["1f422"],
        ':hatching_chick:': ["1f423"],
        ':baby_chick:': ["1f424"],
        ':hatched_chick:': ["1f425"],
        ':bird:': ["1f426"],
        ':penguin:': ["1f427"],
        ':koala:': ["1f428"],
        ':poodle:': ["1f429"],
        ':dromedary_camel:': ["1f42a"],
        ':camel:': ["1f42b"],
        ':dolphin:': ["1f42c"],
        ':mouse:': ["1f42d"],
        ':cow:': ["1f42e"],
        ':tiger:': ["1f42f"],
        ':rabbit:': ["1f430"],
        ':cat:': ["1f431"],
        ':dragon_face:': ["1f432"],
        ':whale:': ["1f433"],
        ':horse:': ["1f434"],
        ':monkey_face:': ["1f435"],
        ':dog:': ["1f436"],
        ':pig:': ["1f437"],
        ':frog:': ["1f438"],
        ':hamster:': ["1f439"],
        ':wolf:': ["1f43a"],
        ':bear:': ["1f43b"],
        ':panda_face:': ["1f43c"],
        ':pig_nose:': ["1f43d"],
        ':feet:': ["1f43e"],
        ':chipmunk:': ["1f43f"],
        ':eyes:': ["1f440"],
        ':eye:': ["1f441"],
        ':ear:': ["1f442"],
        ':nose:': ["1f443"],
        ':lips:': ["1f444"],
        ':tongue:': ["1f445"],
        ':point_up_2:': ["1f446"],
        ':point_down:': ["1f447"],
        ':point_left:': ["1f448"],
        ':point_right:': ["1f449"],
        ':punch:': ["1f44a"],
        ':wave:': ["1f44b"],
        ':ok_hand:': ["1f44c"],
        ':thumbsup:': ["1f44d"],
        ':+1:': ["1f44d"],
        ':thumbsdown:': ["1f44e"],
        ':-1:': ["1f44e"],
        ':clap:': ["1f44f"],
        ':open_hands:': ["1f450"],
        ':crown:': ["1f451"],
        ':womans_hat:': ["1f452"],
        ':eyeglasses:': ["1f453"],
        ':necktie:': ["1f454"],
        ':shirt:': ["1f455"],
        ':jeans:': ["1f456"],
        ':dress:': ["1f457"],
        ':kimono:': ["1f458"],
        ':bikini:': ["1f459"],
        ':womans_clothes:': ["1f45a"],
        ':purse:': ["1f45b"],
        ':handbag:': ["1f45c"],
        ':pouch:': ["1f45d"],
        ':mans_shoe:': ["1f45e"],
        ':athletic_shoe:': ["1f45f"],
        ':high_heel:': ["1f460"],
        ':sandal:': ["1f461"],
        ':boot:': ["1f462"],
        ':footprints:': ["1f463"],
        ':bust_in_silhouette:': ["1f464"],
        ':busts_in_silhouette:': ["1f465"],
        ':boy:': ["1f466"],
        ':girl:': ["1f467"],
        ':man:': ["1f468"],
        ':woman:': ["1f469"],
        ':family:': ["1f46a"],
        ':couple:': ["1f46b"],
        ':two_men_holding_hands:': ["1f46c"],
        ':two_women_holding_hands:': ["1f46d"],
        ':cop:': ["1f46e"],
        ':dancers:': ["1f46f"],
        ':bride_with_veil:': ["1f470"],
        ':person_with_blond_hair:': ["1f471"],
        ':man_with_gua_pi_mao:': ["1f472"],
        ':man_with_turban:': ["1f473"],
        ':older_man:': ["1f474"],
        ':older_woman:': ["1f475"],
        ':grandma:': ["1f475"],
        ':baby:': ["1f476"],
        ':construction_worker:': ["1f477"],
        ':princess:': ["1f478"],
        ':japanese_ogre:': ["1f479"],
        ':japanese_goblin:': ["1f47a"],
        ':ghost:': ["1f47b"],
        ':angel:': ["1f47c"],
        ':alien:': ["1f47d"],
        ':space_invader:': ["1f47e"],
        ':imp:': ["1f47f"],
        ':skull:': ["1f480"],
        ':skeleton:': ["1f480"],
        ':information_desk_person:': ["1f481"],
        ':guardsman:': ["1f482"],
        ':dancer:': ["1f483"],
        ':lipstick:': ["1f484"],
        ':nail_care:': ["1f485"],
        ':massage:': ["1f486"],
        ':haircut:': ["1f487"],
        ':barber:': ["1f488"],
        ':syringe:': ["1f489"],
        ':pill:': ["1f48a"],
        ':kiss:': ["1f48b"],
        ':love_letter:': ["1f48c"],
        ':ring:': ["1f48d"],
        ':gem:': ["1f48e"],
        ':couplekiss:': ["1f48f"],
        ':bouquet:': ["1f490"],
        ':couple_with_heart:': ["1f491"],
        ':wedding:': ["1f492"],
        ':heartbeat:': ["1f493"],
        ':broken_heart:': ["1f494"],
        ':two_hearts:': ["1f495"],
        ':sparkling_heart:': ["1f496"],
        ':heartpulse:': ["1f497"],
        ':cupid:': ["1f498"],
        ':blue_heart:': ["1f499"],
        ':green_heart:': ["1f49a"],
        ':yellow_heart:': ["1f49b"],
        ':purple_heart:': ["1f49c"],
        ':gift_heart:': ["1f49d"],
        ':revolving_hearts:': ["1f49e"],
        ':heart_decoration:': ["1f49f"],
        ':diamond_shape_with_a_dot_inside:': ["1f4a0"],
        ':bulb:': ["1f4a1"],
        ':anger:': ["1f4a2"],
        ':bomb:': ["1f4a3"],
        ':zzz:': ["1f4a4"],
        ':boom:': ["1f4a5"],
        ':sweat_drops:': ["1f4a6"],
        ':droplet:': ["1f4a7"],
        ':dash:': ["1f4a8"],
        ':poop:': ["1f4a9"],
        ':shit:': ["1f4a9"],
        ':hankey:': ["1f4a9"],
        ':poo:': ["1f4a9"],
        ':muscle:': ["1f4aa"],
        ':dizzy:': ["1f4ab"],
        ':speech_balloon:': ["1f4ac"],
        ':thought_balloon:': ["1f4ad"],
        ':white_flower:': ["1f4ae"],
        ':100:': ["1f4af"],
        ':moneybag:': ["1f4b0"],
        ':currency_exchange:': ["1f4b1"],
        ':heavy_dollar_sign:': ["1f4b2"],
        ':credit_card:': ["1f4b3"],
        ':yen:': ["1f4b4"],
        ':dollar:': ["1f4b5"],
        ':euro:': ["1f4b6"],
        ':pound:': ["1f4b7"],
        ':money_with_wings:': ["1f4b8"],
        ':chart:': ["1f4b9"],
        ':seat:': ["1f4ba"],
        ':computer:': ["1f4bb"],
        ':briefcase:': ["1f4bc"],
        ':minidisc:': ["1f4bd"],
        ':floppy_disk:': ["1f4be"],
        ':cd:': ["1f4bf"],
        ':dvd:': ["1f4c0"],
        ':file_folder:': ["1f4c1"],
        ':open_file_folder:': ["1f4c2"],
        ':page_with_curl:': ["1f4c3"],
        ':page_facing_up:': ["1f4c4"],
        ':date:': ["1f4c5"],
        ':calendar:': ["1f4c6"],
        ':card_index:': ["1f4c7"],
        ':chart_with_upwards_trend:': ["1f4c8"],
        ':chart_with_downwards_trend:': ["1f4c9"],
        ':bar_chart:': ["1f4ca"],
        ':clipboard:': ["1f4cb"],
        ':pushpin:': ["1f4cc"],
        ':round_pushpin:': ["1f4cd"],
        ':paperclip:': ["1f4ce"],
        ':straight_ruler:': ["1f4cf"],
        ':triangular_ruler:': ["1f4d0"],
        ':bookmark_tabs:': ["1f4d1"],
        ':ledger:': ["1f4d2"],
        ':notebook:': ["1f4d3"],
        ':notebook_with_decorative_cover:': ["1f4d4"],
        ':closed_book:': ["1f4d5"],
        ':book:': ["1f4d6"],
        ':green_book:': ["1f4d7"],
        ':blue_book:': ["1f4d8"],
        ':orange_book:': ["1f4d9"],
        ':books:': ["1f4da"],
        ':name_badge:': ["1f4db"],
        ':scroll:': ["1f4dc"],
        ':pencil:': ["1f4dd"],
        ':telephone_receiver:': ["1f4de"],
        ':pager:': ["1f4df"],
        ':fax:': ["1f4e0"],
        ':satellite:': ["1f4e1"],
        ':loudspeaker:': ["1f4e2"],
        ':mega:': ["1f4e3"],
        ':outbox_tray:': ["1f4e4"],
        ':inbox_tray:': ["1f4e5"],
        ':package:': ["1f4e6"],
        ':e-mail:': ["1f4e7"],
        ':email:': ["1f4e7"],
        ':incoming_envelope:': ["1f4e8"],
        ':envelope_with_arrow:': ["1f4e9"],
        ':mailbox_closed:': ["1f4ea"],
        ':mailbox:': ["1f4eb"],
        ':mailbox_with_mail:': ["1f4ec"],
        ':mailbox_with_no_mail:': ["1f4ed"],
        ':postbox:': ["1f4ee"],
        ':postal_horn:': ["1f4ef"],
        ':newspaper:': ["1f4f0"],
        ':iphone:': ["1f4f1"],
        ':calling:': ["1f4f2"],
        ':vibration_mode:': ["1f4f3"],
        ':mobile_phone_off:': ["1f4f4"],
        ':no_mobile_phones:': ["1f4f5"],
        ':signal_strength:': ["1f4f6"],
        ':camera:': ["1f4f7"],
        ':camera_with_flash:': ["1f4f8"],
        ':video_camera:': ["1f4f9"],
        ':tv:': ["1f4fa"],
        ':radio:': ["1f4fb"],
        ':vhs:': ["1f4fc"],
        ':projector:': ["1f4fd"],
        ':film_projector:': ["1f4fd"],
        ':twisted_rightwards_arrows:': ["1f500"],
        ':repeat:': ["1f501"],
        ':repeat_one:': ["1f502"],
        ':arrows_clockwise:': ["1f503"],
        ':arrows_counterclockwise:': ["1f504"],
        ':low_brightness:': ["1f505"],
        ':high_brightness:': ["1f506"],
        ':mute:': ["1f507"],
        ':speaker:': ["1f508"],
        ':sound:': ["1f509"],
        ':loud_sound:': ["1f50a"],
        ':battery:': ["1f50b"],
        ':electric_plug:': ["1f50c"],
        ':mag:': ["1f50d"],
        ':mag_right:': ["1f50e"],
        ':lock_with_ink_pen:': ["1f50f"],
        ':closed_lock_with_key:': ["1f510"],
        ':key:': ["1f511"],
        ':lock:': ["1f512"],
        ':unlock:': ["1f513"],
        ':bell:': ["1f514"],
        ':no_bell:': ["1f515"],
        ':bookmark:': ["1f516"],
        ':link:': ["1f517"],
        ':radio_button:': ["1f518"],
        ':back:': ["1f519"],
        ':end:': ["1f51a"],
        ':on:': ["1f51b"],
        ':soon:': ["1f51c"],
        ':top:': ["1f51d"],
        ':underage:': ["1f51e"],
        ':keycap_ten:': ["1f51f"],
        ':capital_abcd:': ["1f520"],
        ':abcd:': ["1f521"],
        ':1234:': ["1f522"],
        ':symbols:': ["1f523"],
        ':abc:': ["1f524"],
        ':fire:': ["1f525"],
        ':flame:': ["1f525"],
        ':flashlight:': ["1f526"],
        ':wrench:': ["1f527"],
        ':hammer:': ["1f528"],
        ':nut_and_bolt:': ["1f529"],
        ':knife:': ["1f52a"],
        ':gun:': ["1f52b"],
        ':microscope:': ["1f52c"],
        ':telescope:': ["1f52d"],
        ':crystal_ball:': ["1f52e"],
        ':six_pointed_star:': ["1f52f"],
        ':beginner:': ["1f530"],
        ':trident:': ["1f531"],
        ':black_square_button:': ["1f532"],
        ':white_square_button:': ["1f533"],
        ':red_circle:': ["1f534"],
        ':large_blue_circle:': ["1f535"],
        ':large_orange_diamond:': ["1f536"],
        ':large_blue_diamond:': ["1f537"],
        ':small_orange_diamond:': ["1f538"],
        ':small_blue_diamond:': ["1f539"],
        ':small_red_triangle:': ["1f53a"],
        ':small_red_triangle_down:': ["1f53b"],
        ':arrow_up_small:': ["1f53c"],
        ':arrow_down_small:': ["1f53d"],
        ':cross_heavy:': ["1f547"],
        ':heavy_latin_cross:': ["1f547"],
        ':om_symbol:': ["1f549"],
        ':dove:': ["1f54a"],
        ':dove_of_peace:': ["1f54a"],
        ':clock1:': ["1f550"],
        ':clock2:': ["1f551"],
        ':clock3:': ["1f552"],
        ':clock4:': ["1f553"],
        ':clock5:': ["1f554"],
        ':clock6:': ["1f555"],
        ':clock7:': ["1f556"],
        ':clock8:': ["1f557"],
        ':clock9:': ["1f558"],
        ':clock10:': ["1f559"],
        ':clock11:': ["1f55a"],
        ':clock12:': ["1f55b"],
        ':clock130:': ["1f55c"],
        ':clock230:': ["1f55d"],
        ':clock330:': ["1f55e"],
        ':clock430:': ["1f55f"],
        ':clock530:': ["1f560"],
        ':clock630:': ["1f561"],
        ':clock730:': ["1f562"],
        ':clock830:': ["1f563"],
        ':clock930:': ["1f564"],
        ':clock1030:': ["1f565"],
        ':clock1130:': ["1f566"],
        ':clock1230:': ["1f567"],
        ':candle:': ["1f56f"],
        ':clock:': ["1f570"],
        ':mantlepiece_clock:': ["1f570"],
        ':hole:': ["1f573"],
        ':levitate:': ["1f574"],
        ':man_in_business_suit_levitating:': ["1f574"],
        ':spy:': ["1f575"],
        ':sleuth_or_spy:': ["1f575"],
        ':dark_sunglasses:': ["1f576"],
        ':spider:': ["1f577"],
        ':spider_web:': ["1f578"],
        ':joystick:': ["1f579"],
        ':paperclips:': ["1f587"],
        ':linked_paperclips:': ["1f587"],
        ':pen_ballpoint:': ["1f58a"],
        ':lower_left_ballpoint_pen:': ["1f58a"],
        ':pen_fountain:': ["1f58b"],
        ':lower_left_fountain_pen:': ["1f58b"],
        ':paintbrush:': ["1f58c"],
        ':lower_left_paintbrush:': ["1f58c"],
        ':crayon:': ["1f58d"],
        ':lower_left_crayon:': ["1f58d"],
        ':writing_hand:': ["1f58e"],
        ':left_writing_hand:': ["1f58e"],
        ':hand_splayed:': ["1f590"],
        ':raised_hand_with_fingers_splayed:': ["1f590"],
        ':middle_finger:': ["1f595"],
        ':reversed_hand_with_middle_finger_extended:': ["1f595"],
        ':vulcan:': ["1f596"],
        ':raised_hand_with_part_between_middle_and_ring_fingers:': ["1f596"],
        ':desktop:': ["1f5a5"],
        ':desktop_computer:': ["1f5a5"],
        ':printer:': ["1f5a8"],
        ':keyboard:': ["1f5ae"],
        ':wired_keyboard:': ["1f5ae"],
        ':trackball:': ["1f5b2"],
        ':frame_photo:': ["1f5bc"],
        ':frame_with_picture:': ["1f5bc"],
        ':dividers:': ["1f5c2"],
        ':card_index_dividers:': ["1f5c2"],
        ':card_box:': ["1f5c3"],
        ':card_file_box:': ["1f5c3"],
        ':file_cabinet:': ["1f5c4"],
        ':wastebasket:': ["1f5d1"],
        ':notepad_spiral:': ["1f5d2"],
        ':spiral_note_pad:': ["1f5d2"],
        ':calendar_spiral:': ["1f5d3"],
        ':spiral_calendar_pad:': ["1f5d3"],
        ':compression:': ["1f5dc"],
        ':key2:': ["1f5dd"],
        ':old_key:': ["1f5dd"],
        ':newspaper2:': ["1f5de"],
        ':rolled_up_newspaper:': ["1f5de"],
        ':dagger:': ["1f5e1"],
        ':dagger_knife:': ["1f5e1"],
        ':speaking_head:': ["1f5e3"],
        ':speaking_head_in_silhouette:': ["1f5e3"],
        ':anger_right:': ["1f5ef"],
        ':right_anger_bubble:': ["1f5ef"],
        ':ballot_box:': ["1f5f3"],
        ':ballot_box_with_ballot:': ["1f5f3"],
        ':map:': ["1f5fa"],
        ':world_map:': ["1f5fa"],
        ':mount_fuji:': ["1f5fb"],
        ':tokyo_tower:': ["1f5fc"],
        ':statue_of_liberty:': ["1f5fd"],
        ':japan:': ["1f5fe"],
        ':moyai:': ["1f5ff"],
        ':grinning:': ["1f600"],
        ':grin:': ["1f601"],
        ':joy:': ["1f602"],
        ':smiley:': ["1f603"],
        ':smile:': ["1f604"],
        ':sweat_smile:': ["1f605"],
        ':laughing:': ["1f606"],
        ':satisfied:': ["1f606"],
        ':innocent:': ["1f607"],
        ':smiling_imp:': ["1f608"],
        ':wink:': ["1f609"],
        ':blush:': ["1f60a"],
        ':yum:': ["1f60b"],
        ':relieved:': ["1f60c"],
        ':heart_eyes:': ["1f60d"],
        ':sunglasses:': ["1f60e"],
        ':smirk:': ["1f60f"],
        ':neutral_face:': ["1f610"],
        ':expressionless:': ["1f611"],
        ':unamused:': ["1f612"],
        ':sweat:': ["1f613"],
        ':pensive:': ["1f614"],
        ':confused:': ["1f615"],
        ':confounded:': ["1f616"],
        ':kissing:': ["1f617"],
        ':kissing_heart:': ["1f618"],
        ':kissing_smiling_eyes:': ["1f619"],
        ':kissing_closed_eyes:': ["1f61a"],
        ':stuck_out_tongue:': ["1f61b"],
        ':stuck_out_tongue_winking_eye:': ["1f61c"],
        ':stuck_out_tongue_closed_eyes:': ["1f61d"],
        ':disappointed:': ["1f61e"],
        ':worried:': ["1f61f"],
        ':angry:': ["1f620"],
        ':rage:': ["1f621"],
        ':cry:': ["1f622"],
        ':persevere:': ["1f623"],
        ':triumph:': ["1f624"],
        ':disappointed_relieved:': ["1f625"],
        ':frowning:': ["1f626"],
        ':anguished:': ["1f627"],
        ':fearful:': ["1f628"],
        ':weary:': ["1f629"],
        ':sleepy:': ["1f62a"],
        ':tired_face:': ["1f62b"],
        ':grimacing:': ["1f62c"],
        ':sob:': ["1f62d"],
        ':open_mouth:': ["1f62e"],
        ':hushed:': ["1f62f"],
        ':cold_sweat:': ["1f630"],
        ':scream:': ["1f631"],
        ':astonished:': ["1f632"],
        ':flushed:': ["1f633"],
        ':sleeping:': ["1f634"],
        ':dizzy_face:': ["1f635"],
        ':no_mouth:': ["1f636"],
        ':mask:': ["1f637"],
        ':smile_cat:': ["1f638"],
        ':joy_cat:': ["1f639"],
        ':smiley_cat:': ["1f63a"],
        ':heart_eyes_cat:': ["1f63b"],
        ':smirk_cat:': ["1f63c"],
        ':kissing_cat:': ["1f63d"],
        ':pouting_cat:': ["1f63e"],
        ':crying_cat_face:': ["1f63f"],
        ':scream_cat:': ["1f640"],
        ':slight_frown:': ["1f641"],
        ':slightly_frowning_face:': ["1f641"],
        ':slight_smile:': ["1f642"],
        ':slightly_smiling_face:': ["1f642"],
        ':no_good:': ["1f645"],
        ':ok_woman:': ["1f646"],
        ':bow:': ["1f647"],
        ':see_no_evil:': ["1f648"],
        ':hear_no_evil:': ["1f649"],
        ':speak_no_evil:': ["1f64a"],
        ':raising_hand:': ["1f64b"],
        ':raised_hands:': ["1f64c"],
        ':person_frowning:': ["1f64d"],
        ':person_with_pouting_face:': ["1f64e"],
        ':pray:': ["1f64f"],
        ':rocket:': ["1f680"],
        ':helicopter:': ["1f681"],
        ':steam_locomotive:': ["1f682"],
        ':railway_car:': ["1f683"],
        ':bullettrain_side:': ["1f684"],
        ':bullettrain_front:': ["1f685"],
        ':train2:': ["1f686"],
        ':metro:': ["1f687"],
        ':light_rail:': ["1f688"],
        ':station:': ["1f689"],
        ':tram:': ["1f68a"],
        ':train:': ["1f68b"],
        ':bus:': ["1f68c"],
        ':oncoming_bus:': ["1f68d"],
        ':trolleybus:': ["1f68e"],
        ':busstop:': ["1f68f"],
        ':minibus:': ["1f690"],
        ':ambulance:': ["1f691"],
        ':fire_engine:': ["1f692"],
        ':police_car:': ["1f693"],
        ':oncoming_police_car:': ["1f694"],
        ':taxi:': ["1f695"],
        ':oncoming_taxi:': ["1f696"],
        ':red_car:': ["1f697"],
        ':oncoming_automobile:': ["1f698"],
        ':blue_car:': ["1f699"],
        ':truck:': ["1f69a"],
        ':articulated_lorry:': ["1f69b"],
        ':tractor:': ["1f69c"],
        ':monorail:': ["1f69d"],
        ':mountain_railway:': ["1f69e"],
        ':suspension_railway:': ["1f69f"],
        ':mountain_cableway:': ["1f6a0"],
        ':aerial_tramway:': ["1f6a1"],
        ':ship:': ["1f6a2"],
        ':rowboat:': ["1f6a3"],
        ':speedboat:': ["1f6a4"],
        ':traffic_light:': ["1f6a5"],
        ':vertical_traffic_light:': ["1f6a6"],
        ':construction:': ["1f6a7"],
        ':rotating_light:': ["1f6a8"],
        ':triangular_flag_on_post:': ["1f6a9"],
        ':door:': ["1f6aa"],
        ':no_entry_sign:': ["1f6ab"],
        ':smoking:': ["1f6ac"],
        ':no_smoking:': ["1f6ad"],
        ':put_litter_in_its_place:': ["1f6ae"],
        ':do_not_litter:': ["1f6af"],
        ':potable_water:': ["1f6b0"],
        ':non-potable_water:': ["1f6b1"],
        ':bike:': ["1f6b2"],
        ':no_bicycles:': ["1f6b3"],
        ':bicyclist:': ["1f6b4"],
        ':mountain_bicyclist:': ["1f6b5"],
        ':walking:': ["1f6b6"],
        ':no_pedestrians:': ["1f6b7"],
        ':children_crossing:': ["1f6b8"],
        ':mens:': ["1f6b9"],
        ':womens:': ["1f6ba"],
        ':restroom:': ["1f6bb"],
        ':baby_symbol:': ["1f6bc"],
        ':toilet:': ["1f6bd"],
        ':wc:': ["1f6be"],
        ':shower:': ["1f6bf"],
        ':bath:': ["1f6c0"],
        ':bathtub:': ["1f6c1"],
        ':passport_control:': ["1f6c2"],
        ':customs:': ["1f6c3"],
        ':baggage_claim:': ["1f6c4"],
        ':left_luggage:': ["1f6c5"],
        ':couch:': ["1f6cb"],
        ':couch_and_lamp:': ["1f6cb"],
        ':sleeping_accommodation:': ["1f6cc"],
        ':shopping_bags:': ["1f6cd"],
        ':bellhop:': ["1f6ce"],
        ':bellhop_bell:': ["1f6ce"],
        ':bed:': ["1f6cf"],
        ':tools:': ["1f6e0"],
        ':hammer_and_wrench:': ["1f6e0"],
        ':shield:': ["1f6e1"],
        ':oil:': ["1f6e2"],
        ':oil_drum:': ["1f6e2"],
        ':motorway:': ["1f6e3"],
        ':railway_track:': ["1f6e4"],
        ':railroad_track:': ["1f6e4"],
        ':motorboat:': ["1f6e5"],
        ':airplane_small:': ["1f6e9"],
        ':small_airplane:': ["1f6e9"],
        ':airplane_departure:': ["1f6eb"],
        ':airplane_arriving:': ["1f6ec"],
        ':satellite_orbital:': ["1f6f0"],
        ':cruise_ship:': ["1f6f3"],
        ':passenger_ship:': ["1f6f3"],
        ':bangbang:': ["203c-fe0f", "203c"],
        ':interrobang:': ["2049-fe0f", "2049"],
        ':tm:': ["2122-fe0f", "2122"],
        ':information_source:': ["2139-fe0f", "2139"],
        ':left_right_arrow:': ["2194-fe0f", "2194"],
        ':arrow_up_down:': ["2195-fe0f", "2195"],
        ':arrow_upper_left:': ["2196-fe0f", "2196"],
        ':arrow_upper_right:': ["2197-fe0f", "2197"],
        ':arrow_lower_right:': ["2198-fe0f", "2198"],
        ':arrow_lower_left:': ["2199-fe0f", "2199"],
        ':leftwards_arrow_with_hook:': ["21a9-fe0f", "21a9"],
        ':arrow_right_hook:': ["21aa-fe0f", "21aa"],
        ':watch:': ["231a-fe0f", "231a"],
        ':hourglass:': ["231b-fe0f", "231b"],
        ':fast_forward:': ["23e9"],
        ':rewind:': ["23ea"],
        ':arrow_double_up:': ["23eb"],
        ':arrow_double_down:': ["23ec"],
        ':alarm_clock:': ["23f0"],
        ':hourglass_flowing_sand:': ["23f3"],
        ':m:': ["24c2-fe0f", "24c2"],
        ':black_small_square:': ["25aa-fe0f", "25aa"],
        ':white_small_square:': ["25ab-fe0f", "25ab"],
        ':arrow_forward:': ["25b6-fe0f", "25b6"],
        ':arrow_backward:': ["25c0-fe0f", "25c0"],
        ':white_medium_square:': ["25fb-fe0f", "25fb"],
        ':black_medium_square:': ["25fc-fe0f", "25fc"],
        ':white_medium_small_square:': ["25fd-fe0f", "25fd"],
        ':black_medium_small_square:': ["25fe-fe0f", "25fe"],
        ':sunny:': ["2600-fe0f", "2600"],
        ':cloud:': ["2601-fe0f", "2601"],
        ':telephone:': ["260e-fe0f", "260e"],
        ':ballot_box_with_check:': ["2611-fe0f", "2611"],
        ':umbrella:': ["2614-fe0f", "2614"],
        ':coffee:': ["2615-fe0f", "2615"],
        ':point_up:': ["261d-fe0f", "261d"],
        ':relaxed:': ["263a-fe0f", "263a"],
        ':aries:': ["2648-fe0f", "2648"],
        ':taurus:': ["2649-fe0f", "2649"],
        ':gemini:': ["264a-fe0f", "264a"],
        ':cancer:': ["264b-fe0f", "264b"],
        ':leo:': ["264c-fe0f", "264c"],
        ':virgo:': ["264d-fe0f", "264d"],
        ':libra:': ["264e-fe0f", "264e"],
        ':scorpius:': ["264f-fe0f", "264f"],
        ':sagittarius:': ["2650-fe0f", "2650"],
        ':capricorn:': ["2651-fe0f", "2651"],
        ':aquarius:': ["2652-fe0f", "2652"],
        ':pisces:': ["2653-fe0f", "2653"],
        ':spades:': ["2660-fe0f", "2660"],
        ':clubs:': ["2663-fe0f", "2663"],
        ':hearts:': ["2665-fe0f", "2665"],
        ':diamonds:': ["2666-fe0f", "2666"],
        ':hotsprings:': ["2668-fe0f", "2668"],
        ':recycle:': ["267b-fe0f", "267b"],
        ':wheelchair:': ["267f-fe0f", "267f"],
        ':anchor:': ["2693-fe0f", "2693"],
        ':warning:': ["26a0-fe0f", "26a0"],
        ':zap:': ["26a1-fe0f", "26a1"],
        ':white_circle:': ["26aa-fe0f", "26aa"],
        ':black_circle:': ["26ab-fe0f", "26ab"],
        ':soccer:': ["26bd-fe0f", "26bd"],
        ':baseball:': ["26be-fe0f", "26be"],
        ':snowman:': ["26c4-fe0f", "26c4"],
        ':partly_sunny:': ["26c5-fe0f", "26c5"],
        ':ophiuchus:': ["26ce"],
        ':no_entry:': ["26d4-fe0f", "26d4"],
        ':church:': ["26ea-fe0f", "26ea"],
        ':fountain:': ["26f2-fe0f", "26f2"],
        ':golf:': ["26f3-fe0f", "26f3"],
        ':sailboat:': ["26f5-fe0f", "26f5"],
        ':tent:': ["26fa-fe0f", "26fa"],
        ':fuelpump:': ["26fd-fe0f", "26fd"],
        ':scissors:': ["2702-fe0f", "2702"],
        ':white_check_mark:': ["2705"],
        ':airplane:': ["2708-fe0f", "2708"],
        ':envelope:': ["2709-fe0f", "2709"],
        ':fist:': ["270a"],
        ':raised_hand:': ["270b"],
        ':v:': ["270c-fe0f", "270c"],
        ':pencil2:': ["270f-fe0f", "270f"],
        ':black_nib:': ["2712-fe0f", "2712"],
        ':heavy_check_mark:': ["2714-fe0f", "2714"],
        ':heavy_multiplication_x:': ["2716-fe0f", "2716"],
        ':sparkles:': ["2728"],
        ':eight_spoked_asterisk:': ["2733-fe0f", "2733"],
        ':eight_pointed_black_star:': ["2734-fe0f", "2734"],
        ':snowflake:': ["2744-fe0f", "2744"],
        ':sparkle:': ["2747-fe0f", "2747"],
        ':x:': ["274c"],
        ':negative_squared_cross_mark:': ["274e"],
        ':question:': ["2753"],
        ':grey_question:': ["2754"],
        ':grey_exclamation:': ["2755"],
        ':exclamation:': ["2757-fe0f", "2757"],
        ':heart:': ["2764-fe0f", "2764"],
        ':heavy_plus_sign:': ["2795"],
        ':heavy_minus_sign:': ["2796"],
        ':heavy_division_sign:': ["2797"],
        ':arrow_right:': ["27a1-fe0f", "27a1"],
        ':curly_loop:': ["27b0"],
        ':loop:': ["27bf"],
        ':arrow_heading_up:': ["2934-fe0f", "2934"],
        ':arrow_heading_down:': ["2935-fe0f", "2935"],
        ':arrow_left:': ["2b05-fe0f", "2b05"],
        ':arrow_up:': ["2b06-fe0f", "2b06"],
        ':arrow_down:': ["2b07-fe0f", "2b07"],
        ':black_large_square:': ["2b1b-fe0f", "2b1b"],
        ':white_large_square:': ["2b1c-fe0f", "2b1c"],
        ':star:': ["2b50-fe0f", "2b50"],
        ':o:': ["2b55-fe0f", "2b55"],
        ':wavy_dash:': ["3030"],
        ':part_alternation_mark:': ["303d-fe0f", "303d"],
        ':congratulations:': ["3297-fe0f", "3297"],
        ':secret:': ["3299-fe0f", "3299"]
    };
    var tmpShortNames = [],
        emoji;
    for (emoji in ns.emojioneList) {
        if (!ns.emojioneList.hasOwnProperty(emoji)) continue;
        tmpShortNames.push(emoji.replace(/[+]/g, "\\$&"));
    }
    ns.shortnames = tmpShortNames.join('|');
    ns.asciiList = {
        '<3': '2764',
        '</3': '1f494',
        ':\')': '1f602',
        ':\'-)': '1f602',
        ':D': '1f603',
        ':-D': '1f603',
        '=D': '1f603',
        ':)': '1f604',
        ':-)': '1f604',
        '=]': '1f604',
        '=)': '1f604',
        ':]': '1f604',
        '\':)': '1f605',
        '\':-)': '1f605',
        '\'=)': '1f605',
        '\':D': '1f605',
        '\':-D': '1f605',
        '\'=D': '1f605',
        '>:)': '1f606',
        '>;)': '1f606',
        '>:-)': '1f606',
        '>=)': '1f606',
        ';)': '1f609',
        ';-)': '1f609',
        '*-)': '1f609',
        '*)': '1f609',
        ';-]': '1f609',
        ';]': '1f609',
        ';D': '1f609',
        ';^)': '1f609',
        '\':(': '1f613',
        '\':-(': '1f613',
        '\'=(': '1f613',
        ':*': '1f618',
        ':-*': '1f618',
        '=*': '1f618',
        ':^*': '1f618',
        '>:P': '1f61c',
        'X-P': '1f61c',
        'x-p': '1f61c',
        '>:[': '1f61e',
        ':-(': '1f61e',
        ':(': '1f61e',
        ':-[': '1f61e',
        ':[': '1f61e',
        '=(': '1f61e',
        '>:(': '1f620',
        '>:-(': '1f620',
        ':@': '1f620',
        ':\'(': '1f622',
        ':\'-(': '1f622',
        ';(': '1f622',
        ';-(': '1f622',
        '>.<': '1f623',
        'D:': '1f628',
        ':$': '1f633',
        '=$': '1f633',
        '#-)': '1f635',
        '#)': '1f635',
        '%-)': '1f635',
        '%)': '1f635',
        'X)': '1f635',
        'X-)': '1f635',
        '*\\0/*': '1f646',
        '\\0/': '1f646',
        '*\\O/*': '1f646',
        '\\O/': '1f646',
        'O:-)': '1f607',
        '0:-3': '1f607',
        '0:3': '1f607',
        '0:-)': '1f607',
        '0:)': '1f607',
        '0;^)': '1f607',
        'O:)': '1f607',
        'O;-)': '1f607',
        'O=)': '1f607',
        '0;-)': '1f607',
        'O:-3': '1f607',
        'O:3': '1f607',
        'B-)': '1f60e',
        'B)': '1f60e',
        '8)': '1f60e',
        '8-)': '1f60e',
        'B-D': '1f60e',
        '8-D': '1f60e',
        '-_-': '1f611',
        '-__-': '1f611',
        '-___-': '1f611',
        '>:\\': '1f615',
        '>:/': '1f615',
        ':-/': '1f615',
        ':-.': '1f615',
        ':/': '1f615',
        ':\\': '1f615',
        '=/': '1f615',
        '=\\': '1f615',
        ':L': '1f615',
        '=L': '1f615',
        ':P': '1f61b',
        ':-P': '1f61b',
        '=P': '1f61b',
        ':-p': '1f61b',
        ':p': '1f61b',
        '=p': '1f61b',
        ':-Þ': '1f61b',
        ':Þ': '1f61b',
        ':þ': '1f61b',
        ':-þ': '1f61b',
        ':-b': '1f61b',
        ':b': '1f61b',
        'd:': '1f61b',
        ':-O': '1f62e',
        ':O': '1f62e',
        ':-o': '1f62e',
        ':o': '1f62e',
        'O_O': '1f62e',
        '>:O': '1f62e',
        ':-X': '1f636',
        ':X': '1f636',
        ':-#': '1f636',
        ':#': '1f636',
        '=X': '1f636',
        '=x': '1f636',
        ':x': '1f636',
        ':-x': '1f636',
        '=#': '1f636'
    };
    ns.asciiRegexp = '(\\<3|&lt;3|\\<\\/3|&lt;\\/3|\\:\'\\)|\\:\'\\-\\)|\\:D|\\:\\-D|\\=D|\\:\\)|\\:\\-\\)|\\=\\]|\\=\\)|\\:\\]|\'\\:\\)|\'\\:\\-\\)|\'\\=\\)|\'\\:D|\'\\:\\-D|\'\\=D|\\>\\:\\)|&gt;\\:\\)|\\>;\\)|&gt;;\\)|\\>\\:\\-\\)|&gt;\\:\\-\\)|\\>\\=\\)|&gt;\\=\\)|;\\)|;\\-\\)|\\*\\-\\)|\\*\\)|;\\-\\]|;\\]|;D|;\\^\\)|\'\\:\\(|\'\\:\\-\\(|\'\\=\\(|\\:\\*|\\:\\-\\*|\\=\\*|\\:\\^\\*|\\>\\:P|&gt;\\:P|X\\-P|x\\-p|\\>\\:\\[|&gt;\\:\\[|\\:\\-\\(|\\:\\(|\\:\\-\\[|\\:\\[|\\=\\(|\\>\\:\\(|&gt;\\:\\(|\\>\\:\\-\\(|&gt;\\:\\-\\(|\\:@|\\:\'\\(|\\:\'\\-\\(|;\\(|;\\-\\(|\\>\\.\\<|&gt;\\.&lt;|D\\:|\\:\\$|\\=\\$|#\\-\\)|#\\)|%\\-\\)|%\\)|X\\)|X\\-\\)|\\*\\\\0\\/\\*|\\\\0\\/|\\*\\\\O\\/\\*|\\\\O\\/|O\\:\\-\\)|0\\:\\-3|0\\:3|0\\:\\-\\)|0\\:\\)|0;\\^\\)|O\\:\\-\\)|O\\:\\)|O;\\-\\)|O\\=\\)|0;\\-\\)|O\\:\\-3|O\\:3|B\\-\\)|B\\)|8\\)|8\\-\\)|B\\-D|8\\-D|\\-_\\-|\\-__\\-|\\-___\\-|\\>\\:\\\\|&gt;\\:\\\\|\\>\\:\\/|&gt;\\:\\/|\\:\\-\\/|\\:\\-\\.|\\:\\/|\\:\\\\|\\=\\/|\\=\\\\|\\:L|\\=L|\\:P|\\:\\-P|\\=P|\\:\\-p|\\:p|\\=p|\\:\\-Þ|\\:\\-&THORN;|\\:Þ|\\:&THORN;|\\:þ|\\:&thorn;|\\:\\-þ|\\:\\-&thorn;|\\:\\-b|\\:b|d\\:|\\:\\-O|\\:O|\\:\\-o|\\:o|O_O|\\>\\:O|&gt;\\:O|\\:\\-X|\\:X|\\:\\-#|\\:#|\\=X|\\=x|\\:x|\\:\\-x|\\=#)';
    // javascript escapes here must be ordered from largest length to shortest
    ns.unicodeRegexp = '(\\uD83D\\uDC69\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC8B\\u200D\\uD83D\\uDC69|\\uD83D\\uDC68\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC8B\\u200D\\uD83D\\uDC68|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\\uD83D\\uDC69\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC69|\\uD83D\\uDC68\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC68|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67|#\\uFE0F\\u20E3|0\\uFE0F\\u20E3|1\\uFE0F\\u20E3|2\\uFE0F\\u20E3|3\\uFE0F\\u20E3|4\\uFE0F\\u20E3|5\\uFE0F\\u20E3|6\\uFE0F\\u20E3|7\\uFE0F\\u20E3|8\\uFE0F\\u20E3|9\\uFE0F\\u20E3|\\uD83C\\uDDE6\\uD83C\\uDDE8|\\uD83C\\uDDE6\\uD83C\\uDDE9|\\uD83C\\uDDE6\\uD83C\\uDDEA|\\uD83C\\uDDE6\\uD83C\\uDDEB|\\uD83C\\uDDE6\\uD83C\\uDDEC|\\uD83C\\uDDE6\\uD83C\\uDDEE|\\uD83C\\uDDE6\\uD83C\\uDDF1|\\uD83C\\uDDE6\\uD83C\\uDDF2|\\uD83C\\uDDE6\\uD83C\\uDDF4|\\uD83C\\uDDE6\\uD83C\\uDDF7|\\uD83C\\uDDE6\\uD83C\\uDDF9|\\uD83C\\uDDE6\\uD83C\\uDDFA|\\uD83C\\uDDE6\\uD83C\\uDDFC|\\uD83C\\uDDE6\\uD83C\\uDDFF|\\uD83C\\uDDE7\\uD83C\\uDDE6|\\uD83C\\uDDE7\\uD83C\\uDDE7|\\uD83C\\uDDE7\\uD83C\\uDDE9|\\uD83C\\uDDE7\\uD83C\\uDDEA|\\uD83C\\uDDE7\\uD83C\\uDDEB|\\uD83C\\uDDE7\\uD83C\\uDDEC|\\uD83C\\uDDE7\\uD83C\\uDDED|\\uD83C\\uDDE7\\uD83C\\uDDEE|\\uD83C\\uDDE7\\uD83C\\uDDEF|\\uD83C\\uDDE7\\uD83C\\uDDF2|\\uD83C\\uDDE7\\uD83C\\uDDF3|\\uD83C\\uDDE7\\uD83C\\uDDF4|\\uD83C\\uDDE7\\uD83C\\uDDF7|\\uD83C\\uDDE7\\uD83C\\uDDF8|\\uD83C\\uDDE7\\uD83C\\uDDF9|\\uD83C\\uDDE7\\uD83C\\uDDFC|\\uD83C\\uDDE7\\uD83C\\uDDFE|\\uD83C\\uDDE7\\uD83C\\uDDFF|\\uD83C\\uDDE8\\uD83C\\uDDE6|\\uD83C\\uDDE8\\uD83C\\uDDE9|\\uD83C\\uDDE8\\uD83C\\uDDEB|\\uD83C\\uDDE8\\uD83C\\uDDEC|\\uD83C\\uDDE8\\uD83C\\uDDED|\\uD83C\\uDDE8\\uD83C\\uDDEE|\\uD83C\\uDDE8\\uD83C\\uDDF1|\\uD83C\\uDDE8\\uD83C\\uDDF2|\\uD83C\\uDDE8\\uD83C\\uDDF3|\\uD83C\\uDDE8\\uD83C\\uDDF4|\\uD83C\\uDDE8\\uD83C\\uDDF7|\\uD83C\\uDDE8\\uD83C\\uDDFA|\\uD83C\\uDDE8\\uD83C\\uDDFB|\\uD83C\\uDDE8\\uD83C\\uDDFE|\\uD83C\\uDDE8\\uD83C\\uDDFF|\\uD83C\\uDDE9\\uD83C\\uDDEA|\\uD83C\\uDDE9\\uD83C\\uDDEF|\\uD83C\\uDDE9\\uD83C\\uDDF0|\\uD83C\\uDDE9\\uD83C\\uDDF2|\\uD83C\\uDDE9\\uD83C\\uDDF4|\\uD83C\\uDDE9\\uD83C\\uDDFF|\\uD83C\\uDDEA\\uD83C\\uDDE8|\\uD83C\\uDDEA\\uD83C\\uDDEA|\\uD83C\\uDDEA\\uD83C\\uDDEC|\\uD83C\\uDDEA\\uD83C\\uDDED|\\uD83C\\uDDEA\\uD83C\\uDDF7|\\uD83C\\uDDEA\\uD83C\\uDDF8|\\uD83C\\uDDEA\\uD83C\\uDDF9|\\uD83C\\uDDEB\\uD83C\\uDDEE|\\uD83C\\uDDEB\\uD83C\\uDDEF|\\uD83C\\uDDEB\\uD83C\\uDDF0|\\uD83C\\uDDEB\\uD83C\\uDDF2|\\uD83C\\uDDEB\\uD83C\\uDDF4|\\uD83C\\uDDEB\\uD83C\\uDDF7|\\uD83C\\uDDEC\\uD83C\\uDDE6|\\uD83C\\uDDEC\\uD83C\\uDDE7|\\uD83C\\uDDEC\\uD83C\\uDDE9|\\uD83C\\uDDEC\\uD83C\\uDDEA|\\uD83C\\uDDEC\\uD83C\\uDDED|\\uD83C\\uDDEC\\uD83C\\uDDEE|\\uD83C\\uDDEC\\uD83C\\uDDF1|\\uD83C\\uDDEC\\uD83C\\uDDF2|\\uD83C\\uDDEC\\uD83C\\uDDF3|\\uD83C\\uDDEC\\uD83C\\uDDF6|\\uD83C\\uDDEC\\uD83C\\uDDF7|\\uD83C\\uDDEC\\uD83C\\uDDF9|\\uD83C\\uDDEC\\uD83C\\uDDFA|\\uD83C\\uDDEC\\uD83C\\uDDFC|\\uD83C\\uDDEC\\uD83C\\uDDFE|\\uD83C\\uDDED\\uD83C\\uDDF0|\\uD83C\\uDDED\\uD83C\\uDDF3|\\uD83C\\uDDED\\uD83C\\uDDF7|\\uD83C\\uDDED\\uD83C\\uDDF9|\\uD83C\\uDDED\\uD83C\\uDDFA|\\uD83C\\uDDEE\\uD83C\\uDDE9|\\uD83C\\uDDEE\\uD83C\\uDDEA|\\uD83C\\uDDEE\\uD83C\\uDDF1|\\uD83C\\uDDEE\\uD83C\\uDDF3|\\uD83C\\uDDEE\\uD83C\\uDDF6|\\uD83C\\uDDEE\\uD83C\\uDDF7|\\uD83C\\uDDEE\\uD83C\\uDDF8|\\uD83C\\uDDEE\\uD83C\\uDDF9|\\uD83C\\uDDEF\\uD83C\\uDDEA|\\uD83C\\uDDEF\\uD83C\\uDDF2|\\uD83C\\uDDEF\\uD83C\\uDDF4|\\uD83C\\uDDEF\\uD83C\\uDDF5|\\uD83C\\uDDF0\\uD83C\\uDDEA|\\uD83C\\uDDF0\\uD83C\\uDDEC|\\uD83C\\uDDF0\\uD83C\\uDDED|\\uD83C\\uDDF0\\uD83C\\uDDEE|\\uD83C\\uDDF0\\uD83C\\uDDF2|\\uD83C\\uDDF0\\uD83C\\uDDF3|\\uD83C\\uDDF0\\uD83C\\uDDF5|\\uD83C\\uDDF0\\uD83C\\uDDF7|\\uD83C\\uDDF0\\uD83C\\uDDFC|\\uD83C\\uDDF0\\uD83C\\uDDFE|\\uD83C\\uDDF0\\uD83C\\uDDFF|\\uD83C\\uDDF1\\uD83C\\uDDE6|\\uD83C\\uDDF1\\uD83C\\uDDE7|\\uD83C\\uDDF1\\uD83C\\uDDE8|\\uD83C\\uDDF1\\uD83C\\uDDEE|\\uD83C\\uDDF1\\uD83C\\uDDF0|\\uD83C\\uDDF1\\uD83C\\uDDF7|\\uD83C\\uDDF1\\uD83C\\uDDF8|\\uD83C\\uDDF1\\uD83C\\uDDF9|\\uD83C\\uDDF1\\uD83C\\uDDFA|\\uD83C\\uDDF1\\uD83C\\uDDFB|\\uD83C\\uDDF1\\uD83C\\uDDFE|\\uD83C\\uDDF2\\uD83C\\uDDE6|\\uD83C\\uDDF2\\uD83C\\uDDE8|\\uD83C\\uDDF2\\uD83C\\uDDE9|\\uD83C\\uDDF2\\uD83C\\uDDEA|\\uD83C\\uDDF2\\uD83C\\uDDEC|\\uD83C\\uDDF2\\uD83C\\uDDED|\\uD83C\\uDDF2\\uD83C\\uDDF0|\\uD83C\\uDDF2\\uD83C\\uDDF1|\\uD83C\\uDDF2\\uD83C\\uDDF2|\\uD83C\\uDDF2\\uD83C\\uDDF3|\\uD83C\\uDDF2\\uD83C\\uDDF4|\\uD83C\\uDDF2\\uD83C\\uDDF7|\\uD83C\\uDDF2\\uD83C\\uDDF8|\\uD83C\\uDDF2\\uD83C\\uDDF9|\\uD83C\\uDDF2\\uD83C\\uDDFA|\\uD83C\\uDDF2\\uD83C\\uDDFB|\\uD83C\\uDDF2\\uD83C\\uDDFC|\\uD83C\\uDDF2\\uD83C\\uDDFD|\\uD83C\\uDDF2\\uD83C\\uDDFE|\\uD83C\\uDDF2\\uD83C\\uDDFF|\\uD83C\\uDDF3\\uD83C\\uDDE6|\\uD83C\\uDDF3\\uD83C\\uDDE8|\\uD83C\\uDDF3\\uD83C\\uDDEA|\\uD83C\\uDDF3\\uD83C\\uDDEC|\\uD83C\\uDDF3\\uD83C\\uDDEE|\\uD83C\\uDDF3\\uD83C\\uDDF1|\\uD83C\\uDDF3\\uD83C\\uDDF4|\\uD83C\\uDDF3\\uD83C\\uDDF5|\\uD83C\\uDDF3\\uD83C\\uDDF7|\\uD83C\\uDDF3\\uD83C\\uDDFA|\\uD83C\\uDDF3\\uD83C\\uDDFF|\\uD83C\\uDDF4\\uD83C\\uDDF2|\\uD83C\\uDDF5\\uD83C\\uDDE6|\\uD83C\\uDDF5\\uD83C\\uDDEA|\\uD83C\\uDDF5\\uD83C\\uDDEB|\\uD83C\\uDDF5\\uD83C\\uDDEC|\\uD83C\\uDDF5\\uD83C\\uDDED|\\uD83C\\uDDF5\\uD83C\\uDDF0|\\uD83C\\uDDF5\\uD83C\\uDDF1|\\uD83C\\uDDF5\\uD83C\\uDDF7|\\uD83C\\uDDF5\\uD83C\\uDDF8|\\uD83C\\uDDF5\\uD83C\\uDDF9|\\uD83C\\uDDF5\\uD83C\\uDDFC|\\uD83C\\uDDF5\\uD83C\\uDDFE|\\uD83C\\uDDF6\\uD83C\\uDDE6|\\uD83C\\uDDF7\\uD83C\\uDDF4|\\uD83C\\uDDF7\\uD83C\\uDDF8|\\uD83C\\uDDF7\\uD83C\\uDDFA|\\uD83C\\uDDF7\\uD83C\\uDDFC|\\uD83C\\uDDF8\\uD83C\\uDDE6|\\uD83C\\uDDF8\\uD83C\\uDDE7|\\uD83C\\uDDF8\\uD83C\\uDDE8|\\uD83C\\uDDF8\\uD83C\\uDDE9|\\uD83C\\uDDF8\\uD83C\\uDDEA|\\uD83C\\uDDF8\\uD83C\\uDDEC|\\uD83C\\uDDF8\\uD83C\\uDDED|\\uD83C\\uDDF8\\uD83C\\uDDEE|\\uD83C\\uDDF8\\uD83C\\uDDF0|\\uD83C\\uDDF8\\uD83C\\uDDF1|\\uD83C\\uDDF8\\uD83C\\uDDF2|\\uD83C\\uDDF8\\uD83C\\uDDF3|\\uD83C\\uDDF8\\uD83C\\uDDF4|\\uD83C\\uDDF8\\uD83C\\uDDF7|\\uD83C\\uDDF8\\uD83C\\uDDF9|\\uD83C\\uDDF8\\uD83C\\uDDFB|\\uD83C\\uDDF8\\uD83C\\uDDFE|\\uD83C\\uDDF8\\uD83C\\uDDFF|\\uD83C\\uDDF9\\uD83C\\uDDE9|\\uD83C\\uDDF9\\uD83C\\uDDEC|\\uD83C\\uDDF9\\uD83C\\uDDED|\\uD83C\\uDDF9\\uD83C\\uDDEF|\\uD83C\\uDDF9\\uD83C\\uDDF1|\\uD83C\\uDDF9\\uD83C\\uDDF2|\\uD83C\\uDDF9\\uD83C\\uDDF3|\\uD83C\\uDDF9\\uD83C\\uDDF4|\\uD83C\\uDDF9\\uD83C\\uDDF7|\\uD83C\\uDDF9\\uD83C\\uDDF9|\\uD83C\\uDDF9\\uD83C\\uDDFB|\\uD83C\\uDDF9\\uD83C\\uDDFC|\\uD83C\\uDDF9\\uD83C\\uDDFF|\\uD83C\\uDDFA\\uD83C\\uDDE6|\\uD83C\\uDDFA\\uD83C\\uDDEC|\\uD83C\\uDDFA\\uD83C\\uDDF8|\\uD83C\\uDDFA\\uD83C\\uDDFE|\\uD83C\\uDDFA\\uD83C\\uDDFF|\\uD83C\\uDDFB\\uD83C\\uDDE6|\\uD83C\\uDDFB\\uD83C\\uDDE8|\\uD83C\\uDDFB\\uD83C\\uDDEA|\\uD83C\\uDDFB\\uD83C\\uDDEE|\\uD83C\\uDDFB\\uD83C\\uDDF3|\\uD83C\\uDDFB\\uD83C\\uDDFA|\\uD83C\\uDDFC\\uD83C\\uDDEB|\\uD83C\\uDDFC\\uD83C\\uDDF8|\\uD83C\\uDDFD\\uD83C\\uDDF0|\\uD83C\\uDDFE\\uD83C\\uDDEA|\\uD83C\\uDDFF\\uD83C\\uDDE6|\\uD83C\\uDDFF\\uD83C\\uDDF2|\\uD83C\\uDDFF\\uD83C\\uDDFC|\\u00A9\\uFE0F|\\u00AE\\uFE0F|\\uD83C\\uDC04\\uFE0F|\\uD83C\\uDCCF|\\uD83C\\uDD70|\\uD83C\\uDD71|\\uD83C\\uDD7E|\\uD83C\\uDD7F\\uFE0F|\\uD83C\\uDD8E|\\uD83C\\uDD91|\\uD83C\\uDD92|\\uD83C\\uDD93|\\uD83C\\uDD94|\\uD83C\\uDD95|\\uD83C\\uDD96|\\uD83C\\uDD97|\\uD83C\\uDD98|\\uD83C\\uDD99|\\uD83C\\uDD9A|\\uD83C\\uDE01|\\uD83C\\uDE02|\\uD83C\\uDE1A\\uFE0F|\\uD83C\\uDE2F\\uFE0F|\\uD83C\\uDE32|\\uD83C\\uDE33|\\uD83C\\uDE34|\\uD83C\\uDE35|\\uD83C\\uDE36|\\uD83C\\uDE37|\\uD83C\\uDE38|\\uD83C\\uDE39|\\uD83C\\uDE3A|\\uD83C\\uDE50|\\uD83C\\uDE51|\\uD83C\\uDF00|\\uD83C\\uDF01|\\uD83C\\uDF02|\\uD83C\\uDF03|\\uD83C\\uDF04|\\uD83C\\uDF05|\\uD83C\\uDF06|\\uD83C\\uDF07|\\uD83C\\uDF08|\\uD83C\\uDF09|\\uD83C\\uDF0A|\\uD83C\\uDF0B|\\uD83C\\uDF0C|\\uD83C\\uDF0D|\\uD83C\\uDF0E|\\uD83C\\uDF0F|\\uD83C\\uDF10|\\uD83C\\uDF11|\\uD83C\\uDF12|\\uD83C\\uDF13|\\uD83C\\uDF14|\\uD83C\\uDF15|\\uD83C\\uDF16|\\uD83C\\uDF17|\\uD83C\\uDF18|\\uD83C\\uDF19|\\uD83C\\uDF1A|\\uD83C\\uDF1B|\\uD83C\\uDF1C|\\uD83C\\uDF1D|\\uD83C\\uDF1E|\\uD83C\\uDF1F|\\uD83C\\uDF20|\\uD83C\\uDF21|\\uD83C\\uDF27|\\uD83C\\uDF28|\\uD83C\\uDF29|\\uD83C\\uDF2A|\\uD83C\\uDF2B|\\uD83C\\uDF2C|\\uD83C\\uDF30|\\uD83C\\uDF31|\\uD83C\\uDF32|\\uD83C\\uDF33|\\uD83C\\uDF34|\\uD83C\\uDF35|\\uD83C\\uDF36|\\uD83C\\uDF37|\\uD83C\\uDF38|\\uD83C\\uDF39|\\uD83C\\uDF3A|\\uD83C\\uDF3B|\\uD83C\\uDF3C|\\uD83C\\uDF3D|\\uD83C\\uDF3E|\\uD83C\\uDF3F|\\uD83C\\uDF40|\\uD83C\\uDF41|\\uD83C\\uDF42|\\uD83C\\uDF43|\\uD83C\\uDF44|\\uD83C\\uDF45|\\uD83C\\uDF46|\\uD83C\\uDF47|\\uD83C\\uDF48|\\uD83C\\uDF49|\\uD83C\\uDF4A|\\uD83C\\uDF4B|\\uD83C\\uDF4C|\\uD83C\\uDF4D|\\uD83C\\uDF4E|\\uD83C\\uDF4F|\\uD83C\\uDF50|\\uD83C\\uDF51|\\uD83C\\uDF52|\\uD83C\\uDF53|\\uD83C\\uDF54|\\uD83C\\uDF55|\\uD83C\\uDF56|\\uD83C\\uDF57|\\uD83C\\uDF58|\\uD83C\\uDF59|\\uD83C\\uDF5A|\\uD83C\\uDF5B|\\uD83C\\uDF5C|\\uD83C\\uDF5D|\\uD83C\\uDF5E|\\uD83C\\uDF5F|\\uD83C\\uDF60|\\uD83C\\uDF61|\\uD83C\\uDF62|\\uD83C\\uDF63|\\uD83C\\uDF64|\\uD83C\\uDF65|\\uD83C\\uDF66|\\uD83C\\uDF67|\\uD83C\\uDF68|\\uD83C\\uDF69|\\uD83C\\uDF6A|\\uD83C\\uDF6B|\\uD83C\\uDF6C|\\uD83C\\uDF6D|\\uD83C\\uDF6E|\\uD83C\\uDF6F|\\uD83C\\uDF70|\\uD83C\\uDF71|\\uD83C\\uDF72|\\uD83C\\uDF73|\\uD83C\\uDF74|\\uD83C\\uDF75|\\uD83C\\uDF76|\\uD83C\\uDF77|\\uD83C\\uDF78|\\uD83C\\uDF79|\\uD83C\\uDF7A|\\uD83C\\uDF7B|\\uD83C\\uDF7C|\\uD83C\\uDF7D|\\uD83C\\uDF80|\\uD83C\\uDF81|\\uD83C\\uDF82|\\uD83C\\uDF83|\\uD83C\\uDF84|\\uD83C\\uDF85|\\uD83C\\uDF86|\\uD83C\\uDF87|\\uD83C\\uDF88|\\uD83C\\uDF89|\\uD83C\\uDF8A|\\uD83C\\uDF8B|\\uD83C\\uDF8C|\\uD83C\\uDF8D|\\uD83C\\uDF8E|\\uD83C\\uDF8F|\\uD83C\\uDF90|\\uD83C\\uDF91|\\uD83C\\uDF92|\\uD83C\\uDF93|\\uD83C\\uDF96|\\uD83C\\uDF97|\\uD83C\\uDF99|\\uD83C\\uDF9A|\\uD83C\\uDF9B|\\uD83C\\uDF9E|\\uD83C\\uDF9F|\\uD83C\\uDFA0|\\uD83C\\uDFA1|\\uD83C\\uDFA2|\\uD83C\\uDFA3|\\uD83C\\uDFA4|\\uD83C\\uDFA5|\\uD83C\\uDFA6|\\uD83C\\uDFA7|\\uD83C\\uDFA8|\\uD83C\\uDFA9|\\uD83C\\uDFAA|\\uD83C\\uDFAB|\\uD83C\\uDFAC|\\uD83C\\uDFAD|\\uD83C\\uDFAE|\\uD83C\\uDFAF|\\uD83C\\uDFB0|\\uD83C\\uDFB1|\\uD83C\\uDFB2|\\uD83C\\uDFB3|\\uD83C\\uDFB4|\\uD83C\\uDFB5|\\uD83C\\uDFB6|\\uD83C\\uDFB7|\\uD83C\\uDFB8|\\uD83C\\uDFB9|\\uD83C\\uDFBA|\\uD83C\\uDFBB|\\uD83C\\uDFBC|\\uD83C\\uDFBD|\\uD83C\\uDFBE|\\uD83C\\uDFBF|\\uD83C\\uDFC0|\\uD83C\\uDFC1|\\uD83C\\uDFC2|\\uD83C\\uDFC3|\\uD83C\\uDFC4|\\uD83C\\uDFC5|\\uD83C\\uDFC6|\\uD83C\\uDFC7|\\uD83C\\uDFC8|\\uD83C\\uDFC9|\\uD83C\\uDFCA|\\uD83C\\uDFCB|\\uD83C\\uDFCC|\\uD83C\\uDFCD|\\uD83C\\uDFCE|\\uD83C\\uDFD4|\\uD83C\\uDFD5|\\uD83C\\uDFD6|\\uD83C\\uDFD7|\\uD83C\\uDFD8|\\uD83C\\uDFD9|\\uD83C\\uDFDA|\\uD83C\\uDFDB|\\uD83C\\uDFDC|\\uD83C\\uDFDD|\\uD83C\\uDFDE|\\uD83C\\uDFDF|\\uD83C\\uDFE0|\\uD83C\\uDFE1|\\uD83C\\uDFE2|\\uD83C\\uDFE3|\\uD83C\\uDFE4|\\uD83C\\uDFE5|\\uD83C\\uDFE6|\\uD83C\\uDFE7|\\uD83C\\uDFE8|\\uD83C\\uDFE9|\\uD83C\\uDFEA|\\uD83C\\uDFEB|\\uD83C\\uDFEC|\\uD83C\\uDFED|\\uD83C\\uDFEE|\\uD83C\\uDFEF|\\uD83C\\uDFF0|\\uD83C\\uDFF3|\\uD83C\\uDFF4|\\uD83C\\uDFF5|\\uD83C\\uDFF7|\\uD83D\\uDC00|\\uD83D\\uDC01|\\uD83D\\uDC02|\\uD83D\\uDC03|\\uD83D\\uDC04|\\uD83D\\uDC05|\\uD83D\\uDC06|\\uD83D\\uDC07|\\uD83D\\uDC08|\\uD83D\\uDC09|\\uD83D\\uDC0A|\\uD83D\\uDC0B|\\uD83D\\uDC0C|\\uD83D\\uDC0D|\\uD83D\\uDC0E|\\uD83D\\uDC0F|\\uD83D\\uDC10|\\uD83D\\uDC11|\\uD83D\\uDC12|\\uD83D\\uDC13|\\uD83D\\uDC14|\\uD83D\\uDC15|\\uD83D\\uDC16|\\uD83D\\uDC17|\\uD83D\\uDC18|\\uD83D\\uDC19|\\uD83D\\uDC1A|\\uD83D\\uDC1B|\\uD83D\\uDC1C|\\uD83D\\uDC1D|\\uD83D\\uDC1E|\\uD83D\\uDC1F|\\uD83D\\uDC20|\\uD83D\\uDC21|\\uD83D\\uDC22|\\uD83D\\uDC23|\\uD83D\\uDC24|\\uD83D\\uDC25|\\uD83D\\uDC26|\\uD83D\\uDC27|\\uD83D\\uDC28|\\uD83D\\uDC29|\\uD83D\\uDC2A|\\uD83D\\uDC2B|\\uD83D\\uDC2C|\\uD83D\\uDC2D|\\uD83D\\uDC2E|\\uD83D\\uDC2F|\\uD83D\\uDC30|\\uD83D\\uDC31|\\uD83D\\uDC32|\\uD83D\\uDC33|\\uD83D\\uDC34|\\uD83D\\uDC35|\\uD83D\\uDC36|\\uD83D\\uDC37|\\uD83D\\uDC38|\\uD83D\\uDC39|\\uD83D\\uDC3A|\\uD83D\\uDC3B|\\uD83D\\uDC3C|\\uD83D\\uDC3D|\\uD83D\\uDC3E|\\uD83D\\uDC3F|\\uD83D\\uDC40|\\uD83D\\uDC41|\\uD83D\\uDC42|\\uD83D\\uDC43|\\uD83D\\uDC44|\\uD83D\\uDC45|\\uD83D\\uDC46|\\uD83D\\uDC47|\\uD83D\\uDC48|\\uD83D\\uDC49|\\uD83D\\uDC4A|\\uD83D\\uDC4B|\\uD83D\\uDC4C|\\uD83D\\uDC4D|\\uD83D\\uDC4E|\\uD83D\\uDC4F|\\uD83D\\uDC50|\\uD83D\\uDC51|\\uD83D\\uDC52|\\uD83D\\uDC53|\\uD83D\\uDC54|\\uD83D\\uDC55|\\uD83D\\uDC56|\\uD83D\\uDC57|\\uD83D\\uDC58|\\uD83D\\uDC59|\\uD83D\\uDC5A|\\uD83D\\uDC5B|\\uD83D\\uDC5C|\\uD83D\\uDC5D|\\uD83D\\uDC5E|\\uD83D\\uDC5F|\\uD83D\\uDC60|\\uD83D\\uDC61|\\uD83D\\uDC62|\\uD83D\\uDC63|\\uD83D\\uDC64|\\uD83D\\uDC65|\\uD83D\\uDC66|\\uD83D\\uDC67|\\uD83D\\uDC68|\\uD83D\\uDC69|\\uD83D\\uDC6A|\\uD83D\\uDC6B|\\uD83D\\uDC6C|\\uD83D\\uDC6D|\\uD83D\\uDC6E|\\uD83D\\uDC6F|\\uD83D\\uDC70|\\uD83D\\uDC71|\\uD83D\\uDC72|\\uD83D\\uDC73|\\uD83D\\uDC74|\\uD83D\\uDC75|\\uD83D\\uDC76|\\uD83D\\uDC77|\\uD83D\\uDC78|\\uD83D\\uDC79|\\uD83D\\uDC7A|\\uD83D\\uDC7B|\\uD83D\\uDC7C|\\uD83D\\uDC7D|\\uD83D\\uDC7E|\\uD83D\\uDC7F|\\uD83D\\uDC80|\\uD83D\\uDC81|\\uD83D\\uDC82|\\uD83D\\uDC83|\\uD83D\\uDC84|\\uD83D\\uDC85|\\uD83D\\uDC86|\\uD83D\\uDC87|\\uD83D\\uDC88|\\uD83D\\uDC89|\\uD83D\\uDC8A|\\uD83D\\uDC8B|\\uD83D\\uDC8C|\\uD83D\\uDC8D|\\uD83D\\uDC8E|\\uD83D\\uDC8F|\\uD83D\\uDC90|\\uD83D\\uDC91|\\uD83D\\uDC92|\\uD83D\\uDC93|\\uD83D\\uDC94|\\uD83D\\uDC95|\\uD83D\\uDC96|\\uD83D\\uDC97|\\uD83D\\uDC98|\\uD83D\\uDC99|\\uD83D\\uDC9A|\\uD83D\\uDC9B|\\uD83D\\uDC9C|\\uD83D\\uDC9D|\\uD83D\\uDC9E|\\uD83D\\uDC9F|\\uD83D\\uDCA0|\\uD83D\\uDCA1|\\uD83D\\uDCA2|\\uD83D\\uDCA3|\\uD83D\\uDCA4|\\uD83D\\uDCA5|\\uD83D\\uDCA6|\\uD83D\\uDCA7|\\uD83D\\uDCA8|\\uD83D\\uDCA9|\\uD83D\\uDCAA|\\uD83D\\uDCAB|\\uD83D\\uDCAC|\\uD83D\\uDCAD|\\uD83D\\uDCAE|\\uD83D\\uDCAF|\\uD83D\\uDCB0|\\uD83D\\uDCB1|\\uD83D\\uDCB2|\\uD83D\\uDCB3|\\uD83D\\uDCB4|\\uD83D\\uDCB5|\\uD83D\\uDCB6|\\uD83D\\uDCB7|\\uD83D\\uDCB8|\\uD83D\\uDCB9|\\uD83D\\uDCBA|\\uD83D\\uDCBB|\\uD83D\\uDCBC|\\uD83D\\uDCBD|\\uD83D\\uDCBE|\\uD83D\\uDCBF|\\uD83D\\uDCC0|\\uD83D\\uDCC1|\\uD83D\\uDCC2|\\uD83D\\uDCC3|\\uD83D\\uDCC4|\\uD83D\\uDCC5|\\uD83D\\uDCC6|\\uD83D\\uDCC7|\\uD83D\\uDCC8|\\uD83D\\uDCC9|\\uD83D\\uDCCA|\\uD83D\\uDCCB|\\uD83D\\uDCCC|\\uD83D\\uDCCD|\\uD83D\\uDCCE|\\uD83D\\uDCCF|\\uD83D\\uDCD0|\\uD83D\\uDCD1|\\uD83D\\uDCD2|\\uD83D\\uDCD3|\\uD83D\\uDCD4|\\uD83D\\uDCD5|\\uD83D\\uDCD6|\\uD83D\\uDCD7|\\uD83D\\uDCD8|\\uD83D\\uDCD9|\\uD83D\\uDCDA|\\uD83D\\uDCDB|\\uD83D\\uDCDC|\\uD83D\\uDCDD|\\uD83D\\uDCDE|\\uD83D\\uDCDF|\\uD83D\\uDCE0|\\uD83D\\uDCE1|\\uD83D\\uDCE2|\\uD83D\\uDCE3|\\uD83D\\uDCE4|\\uD83D\\uDCE5|\\uD83D\\uDCE6|\\uD83D\\uDCE7|\\uD83D\\uDCE8|\\uD83D\\uDCE9|\\uD83D\\uDCEA|\\uD83D\\uDCEB|\\uD83D\\uDCEC|\\uD83D\\uDCED|\\uD83D\\uDCEE|\\uD83D\\uDCEF|\\uD83D\\uDCF0|\\uD83D\\uDCF1|\\uD83D\\uDCF2|\\uD83D\\uDCF3|\\uD83D\\uDCF4|\\uD83D\\uDCF5|\\uD83D\\uDCF6|\\uD83D\\uDCF7|\\uD83D\\uDCF8|\\uD83D\\uDCF9|\\uD83D\\uDCFA|\\uD83D\\uDCFB|\\uD83D\\uDCFC|\\uD83D\\uDCFD|\\uD83D\\uDD00|\\uD83D\\uDD01|\\uD83D\\uDD02|\\uD83D\\uDD03|\\uD83D\\uDD04|\\uD83D\\uDD05|\\uD83D\\uDD06|\\uD83D\\uDD07|\\uD83D\\uDD08|\\uD83D\\uDD09|\\uD83D\\uDD0A|\\uD83D\\uDD0B|\\uD83D\\uDD0C|\\uD83D\\uDD0D|\\uD83D\\uDD0E|\\uD83D\\uDD0F|\\uD83D\\uDD10|\\uD83D\\uDD11|\\uD83D\\uDD12|\\uD83D\\uDD13|\\uD83D\\uDD14|\\uD83D\\uDD15|\\uD83D\\uDD16|\\uD83D\\uDD17|\\uD83D\\uDD18|\\uD83D\\uDD19|\\uD83D\\uDD1A|\\uD83D\\uDD1B|\\uD83D\\uDD1C|\\uD83D\\uDD1D|\\uD83D\\uDD1E|\\uD83D\\uDD1F|\\uD83D\\uDD20|\\uD83D\\uDD21|\\uD83D\\uDD22|\\uD83D\\uDD23|\\uD83D\\uDD24|\\uD83D\\uDD25|\\uD83D\\uDD26|\\uD83D\\uDD27|\\uD83D\\uDD28|\\uD83D\\uDD29|\\uD83D\\uDD2A|\\uD83D\\uDD2B|\\uD83D\\uDD2C|\\uD83D\\uDD2D|\\uD83D\\uDD2E|\\uD83D\\uDD2F|\\uD83D\\uDD30|\\uD83D\\uDD31|\\uD83D\\uDD32|\\uD83D\\uDD33|\\uD83D\\uDD34|\\uD83D\\uDD35|\\uD83D\\uDD36|\\uD83D\\uDD37|\\uD83D\\uDD38|\\uD83D\\uDD39|\\uD83D\\uDD3A|\\uD83D\\uDD3B|\\uD83D\\uDD3C|\\uD83D\\uDD3D|\\uD83D\\uDD47|\\uD83D\\uDD49|\\uD83D\\uDD4A|\\uD83D\\uDD50|\\uD83D\\uDD51|\\uD83D\\uDD52|\\uD83D\\uDD53|\\uD83D\\uDD54|\\uD83D\\uDD55|\\uD83D\\uDD56|\\uD83D\\uDD57|\\uD83D\\uDD58|\\uD83D\\uDD59|\\uD83D\\uDD5A|\\uD83D\\uDD5B|\\uD83D\\uDD5C|\\uD83D\\uDD5D|\\uD83D\\uDD5E|\\uD83D\\uDD5F|\\uD83D\\uDD60|\\uD83D\\uDD61|\\uD83D\\uDD62|\\uD83D\\uDD63|\\uD83D\\uDD64|\\uD83D\\uDD65|\\uD83D\\uDD66|\\uD83D\\uDD67|\\uD83D\\uDD6F|\\uD83D\\uDD70|\\uD83D\\uDD73|\\uD83D\\uDD74|\\uD83D\\uDD75|\\uD83D\\uDD76|\\uD83D\\uDD77|\\uD83D\\uDD78|\\uD83D\\uDD79|\\uD83D\\uDD87|\\uD83D\\uDD8A|\\uD83D\\uDD8B|\\uD83D\\uDD8C|\\uD83D\\uDD8D|\\uD83D\\uDD8E|\\uD83D\\uDD90|\\uD83D\\uDD95|\\uD83D\\uDD96|\\uD83D\\uDDA5|\\uD83D\\uDDA8|\\uD83D\\uDDAE|\\uD83D\\uDDB2|\\uD83D\\uDDBC|\\uD83D\\uDDC2|\\uD83D\\uDDC3|\\uD83D\\uDDC4|\\uD83D\\uDDD1|\\uD83D\\uDDD2|\\uD83D\\uDDD3|\\uD83D\\uDDDC|\\uD83D\\uDDDD|\\uD83D\\uDDDE|\\uD83D\\uDDE1|\\uD83D\\uDDE3|\\uD83D\\uDDEF|\\uD83D\\uDDF3|\\uD83D\\uDDFA|\\uD83D\\uDDFB|\\uD83D\\uDDFC|\\uD83D\\uDDFD|\\uD83D\\uDDFE|\\uD83D\\uDDFF|\\uD83D\\uDE00|\\uD83D\\uDE01|\\uD83D\\uDE02|\\uD83D\\uDE03|\\uD83D\\uDE04|\\uD83D\\uDE05|\\uD83D\\uDE06|\\uD83D\\uDE07|\\uD83D\\uDE08|\\uD83D\\uDE09|\\uD83D\\uDE0A|\\uD83D\\uDE0B|\\uD83D\\uDE0C|\\uD83D\\uDE0D|\\uD83D\\uDE0E|\\uD83D\\uDE0F|\\uD83D\\uDE10|\\uD83D\\uDE11|\\uD83D\\uDE12|\\uD83D\\uDE13|\\uD83D\\uDE14|\\uD83D\\uDE15|\\uD83D\\uDE16|\\uD83D\\uDE17|\\uD83D\\uDE18|\\uD83D\\uDE19|\\uD83D\\uDE1A|\\uD83D\\uDE1B|\\uD83D\\uDE1C|\\uD83D\\uDE1D|\\uD83D\\uDE1E|\\uD83D\\uDE1F|\\uD83D\\uDE20|\\uD83D\\uDE21|\\uD83D\\uDE22|\\uD83D\\uDE23|\\uD83D\\uDE24|\\uD83D\\uDE25|\\uD83D\\uDE26|\\uD83D\\uDE27|\\uD83D\\uDE28|\\uD83D\\uDE29|\\uD83D\\uDE2A|\\uD83D\\uDE2B|\\uD83D\\uDE2C|\\uD83D\\uDE2D|\\uD83D\\uDE2E|\\uD83D\\uDE2F|\\uD83D\\uDE30|\\uD83D\\uDE31|\\uD83D\\uDE32|\\uD83D\\uDE33|\\uD83D\\uDE34|\\uD83D\\uDE35|\\uD83D\\uDE36|\\uD83D\\uDE37|\\uD83D\\uDE38|\\uD83D\\uDE39|\\uD83D\\uDE3A|\\uD83D\\uDE3B|\\uD83D\\uDE3C|\\uD83D\\uDE3D|\\uD83D\\uDE3E|\\uD83D\\uDE3F|\\uD83D\\uDE40|\\uD83D\\uDE41|\\uD83D\\uDE42|\\uD83D\\uDE45|\\uD83D\\uDE46|\\uD83D\\uDE47|\\uD83D\\uDE48|\\uD83D\\uDE49|\\uD83D\\uDE4A|\\uD83D\\uDE4B|\\uD83D\\uDE4C|\\uD83D\\uDE4D|\\uD83D\\uDE4E|\\uD83D\\uDE4F|\\uD83D\\uDE80|\\uD83D\\uDE81|\\uD83D\\uDE82|\\uD83D\\uDE83|\\uD83D\\uDE84|\\uD83D\\uDE85|\\uD83D\\uDE86|\\uD83D\\uDE87|\\uD83D\\uDE88|\\uD83D\\uDE89|\\uD83D\\uDE8A|\\uD83D\\uDE8B|\\uD83D\\uDE8C|\\uD83D\\uDE8D|\\uD83D\\uDE8E|\\uD83D\\uDE8F|\\uD83D\\uDE90|\\uD83D\\uDE91|\\uD83D\\uDE92|\\uD83D\\uDE93|\\uD83D\\uDE94|\\uD83D\\uDE95|\\uD83D\\uDE96|\\uD83D\\uDE97|\\uD83D\\uDE98|\\uD83D\\uDE99|\\uD83D\\uDE9A|\\uD83D\\uDE9B|\\uD83D\\uDE9C|\\uD83D\\uDE9D|\\uD83D\\uDE9E|\\uD83D\\uDE9F|\\uD83D\\uDEA0|\\uD83D\\uDEA1|\\uD83D\\uDEA2|\\uD83D\\uDEA3|\\uD83D\\uDEA4|\\uD83D\\uDEA5|\\uD83D\\uDEA6|\\uD83D\\uDEA7|\\uD83D\\uDEA8|\\uD83D\\uDEA9|\\uD83D\\uDEAA|\\uD83D\\uDEAB|\\uD83D\\uDEAC|\\uD83D\\uDEAD|\\uD83D\\uDEAE|\\uD83D\\uDEAF|\\uD83D\\uDEB0|\\uD83D\\uDEB1|\\uD83D\\uDEB2|\\uD83D\\uDEB3|\\uD83D\\uDEB4|\\uD83D\\uDEB5|\\uD83D\\uDEB6|\\uD83D\\uDEB7|\\uD83D\\uDEB8|\\uD83D\\uDEB9|\\uD83D\\uDEBA|\\uD83D\\uDEBB|\\uD83D\\uDEBC|\\uD83D\\uDEBD|\\uD83D\\uDEBE|\\uD83D\\uDEBF|\\uD83D\\uDEC0|\\uD83D\\uDEC1|\\uD83D\\uDEC2|\\uD83D\\uDEC3|\\uD83D\\uDEC4|\\uD83D\\uDEC5|\\uD83D\\uDECB|\\uD83D\\uDECC|\\uD83D\\uDECD|\\uD83D\\uDECE|\\uD83D\\uDECF|\\uD83D\\uDEE0|\\uD83D\\uDEE1|\\uD83D\\uDEE2|\\uD83D\\uDEE3|\\uD83D\\uDEE4|\\uD83D\\uDEE5|\\uD83D\\uDEE9|\\uD83D\\uDEEB|\\uD83D\\uDEEC|\\uD83D\\uDEF0|\\uD83D\\uDEF3|\\u203C\\uFE0F|\\u2049\\uFE0F|\\u2122\\uFE0F|\\u2139\\uFE0F|\\u2194\\uFE0F|\\u2195\\uFE0F|\\u2196\\uFE0F|\\u2197\\uFE0F|\\u2198\\uFE0F|\\u2199\\uFE0F|\\u21A9\\uFE0F|\\u21AA\\uFE0F|\\u231A\\uFE0F|\\u231B\\uFE0F|\\u23E9|\\u23EA|\\u23EB|\\u23EC|\\u23F0|\\u23F3|\\u24C2\\uFE0F|\\u25AA\\uFE0F|\\u25AB\\uFE0F|\\u25B6\\uFE0F|\\u25C0\\uFE0F|\\u25FB\\uFE0F|\\u25FC\\uFE0F|\\u25FD\\uFE0F|\\u25FE\\uFE0F|\\u2600\\uFE0F|\\u2601\\uFE0F|\\u260E\\uFE0F|\\u2611\\uFE0F|\\u2614\\uFE0F|\\u2615\\uFE0F|\\u261D\\uFE0F|\\u263A\\uFE0F|\\u2648\\uFE0F|\\u2649\\uFE0F|\\u264A\\uFE0F|\\u264B\\uFE0F|\\u264C\\uFE0F|\\u264D\\uFE0F|\\u264E\\uFE0F|\\u264F\\uFE0F|\\u2650\\uFE0F|\\u2651\\uFE0F|\\u2652\\uFE0F|\\u2653\\uFE0F|\\u2660\\uFE0F|\\u2663\\uFE0F|\\u2665\\uFE0F|\\u2666\\uFE0F|\\u2668\\uFE0F|\\u267B\\uFE0F|\\u267F\\uFE0F|\\u2693\\uFE0F|\\u26A0\\uFE0F|\\u26A1\\uFE0F|\\u26AA\\uFE0F|\\u26AB\\uFE0F|\\u26BD\\uFE0F|\\u26BE\\uFE0F|\\u26C4\\uFE0F|\\u26C5\\uFE0F|\\u26CE|\\u26D4\\uFE0F|\\u26EA\\uFE0F|\\u26F2\\uFE0F|\\u26F3\\uFE0F|\\u26F5\\uFE0F|\\u26FA\\uFE0F|\\u26FD\\uFE0F|\\u2702\\uFE0F|\\u2708\\uFE0F|\\u2709\\uFE0F|\\u270A|\\u270B|\\u270C\\uFE0F|\\u270F\\uFE0F|\\u2712\\uFE0F|\\u2714\\uFE0F|\\u2716\\uFE0F|\\u2733\\uFE0F|\\u2734\\uFE0F|\\u2744\\uFE0F|\\u2747\\uFE0F|\\u274C|\\u274E|\\u2757\\uFE0F|\\u2764\\uFE0F|\\u27A1\\uFE0F|\\u27B0|\\u27BF|\\u2934\\uFE0F|\\u2935\\uFE0F|\\u2B05\\uFE0F|\\u2B06\\uFE0F|\\u2B07\\uFE0F|\\u2B1B\\uFE0F|\\u2B1C\\uFE0F|\\u2B50\\uFE0F|\\u2B55\\uFE0F|\\u303D\\uFE0F|\\u3297\\uFE0F|\\u3299\\uFE0F|\\u2705|\\u2728|\\u2753|\\u2754|\\u2755|\\u2795|\\u2796|\\u2797|\\u3030)';
    ns.jsecapeMap = {
        "\u2049": "2049",
        "\u2122": "2122",
        "\u2139": "2139",
        "\u2194": "2194",
        "\u2195": "2195",
        "\u2196": "2196",
        "\u2197": "2197",
        "\u2198": "2198",
        "\u2199": "2199",
        "\u2600": "2600",
        "\u2601": "2601",
        "\u2611": "2611",
        "\u2614": "2614",
        "\u2615": "2615",
        "\u2648": "2648",
        "\u2649": "2649",
        "\u2650": "2650",
        "\u2651": "2651",
        "\u2652": "2652",
        "\u2653": "2653",
        "\u2660": "2660",
        "\u2663": "2663",
        "\u2665": "2665",
        "\u2666": "2666",
        "\u2668": "2668",
        "\u2693": "2693",
        "\u2702": "2702",
        "\u2705": "2705",
        "\u2708": "2708",
        "\u2709": "2709",
        "\u2712": "2712",
        "\u2714": "2714",
        "\u2716": "2716",
        "\u2728": "2728",
        "\u2733": "2733",
        "\u2734": "2734",
        "\u2744": "2744",
        "\u2747": "2747",
        "\u2753": "2753",
        "\u2754": "2754",
        "\u2755": "2755",
        "\u2757": "2757",
        "\u2764": "2764",
        "\u2795": "2795",
        "\u2796": "2796",
        "\u2797": "2797",
        "\u2934": "2934",
        "\u2935": "2935",
        "\u3030": "3030",
        "\u3297": "3297",
        "\u3299": "3299",
        "\uD83C\uDDFF\uD83C\uDDFC": "1F1FF-1F1FC",
        "\uD83C\uDDFF\uD83C\uDDF2": "1F1FF-1F1F2",
        "\uD83C\uDDFE\uD83C\uDDEA": "1F1FE-1F1EA",
        "\uD83C\uDDEA\uD83C\uDDED": "1F1EA-1F1ED",
        "\uD83C\uDDFC\uD83C\uDDEB": "1F1FC-1F1EB",
        "\uD83C\uDDFB\uD83C\uDDEA": "1F1FB-1F1EA",
        "\uD83C\uDDFB\uD83C\uDDE6": "1F1FB-1F1E6",
        "\uD83C\uDDFB\uD83C\uDDFA": "1F1FB-1F1FA",
        "\uD83C\uDDFA\uD83C\uDDFF": "1F1FA-1F1FF",
        "\uD83C\uDDFA\uD83C\uDDFE": "1F1FA-1F1FE",
        "\uD83C\uDDFA\uD83C\uDDE6": "1F1FA-1F1E6",
        "\uD83C\uDDFA\uD83C\uDDEC": "1F1FA-1F1EC",
        "\uD83C\uDDFB\uD83C\uDDEE": "1F1FB-1F1EE",
        "\uD83C\uDDF9\uD83C\uDDFB": "1F1F9-1F1FB",
        "\uD83C\uDDF9\uD83C\uDDF2": "1F1F9-1F1F2",
        "\uD83C\uDDF9\uD83C\uDDF3": "1F1F9-1F1F3",
        "\uD83C\uDDF9\uD83C\uDDF9": "1F1F9-1F1F9",
        "\uD83C\uDDF9\uD83C\uDDF4": "1F1F9-1F1F4",
        "\uD83C\uDDF9\uD83C\uDDEC": "1F1F9-1F1EC",
        "\uD83C\uDDF9\uD83C\uDDED": "1F1F9-1F1ED",
        "\uD83C\uDDF9\uD83C\uDDFF": "1F1F9-1F1FF",
        "\uD83C\uDDF9\uD83C\uDDEF": "1F1F9-1F1EF",
        "\uD83C\uDDF9\uD83C\uDDFC": "1F1F9-1F1FC",
        "\uD83C\uDDF8\uD83C\uDDFE": "1F1F8-1F1FE",
        "\uD83C\uDDF8\uD83C\uDDFF": "1F1F8-1F1FF",
        "\uD83C\uDDF8\uD83C\uDDF7": "1F1F8-1F1F7",
        "\uD83C\uDDF8\uD83C\uDDE9": "1F1F8-1F1E9",
        "\uD83C\uDDF1\uD83C\uDDF0": "1F1F1-1F1F0",
        "\uD83C\uDDF8\uD83C\uDDF4": "1F1F8-1F1F4",
        "\uD83C\uDDF8\uD83C\uDDE7": "1F1F8-1F1E7",
        "\uD83C\uDDF8\uD83C\uDDEE": "1F1F8-1F1EE",
        "\uD83C\uDDF8\uD83C\uDDF0": "1F1F8-1F1F0",
        "\uD83C\uDDF8\uD83C\uDDF1": "1F1F8-1F1F1",
        "\uD83C\uDDF8\uD83C\uDDE8": "1F1F8-1F1E8",
        "\uD83C\uDDF7\uD83C\uDDF8": "1F1F7-1F1F8",
        "\uD83C\uDDF8\uD83C\uDDF3": "1F1F8-1F1F3",
        "\uD83C\uDDF8\uD83C\uDDF9": "1F1F8-1F1F9",
        "\uD83C\uDDF8\uD83C\uDDF2": "1F1F8-1F1F2",
        "\uD83C\uDDFC\uD83C\uDDF8": "1F1FC-1F1F8",
        "\uD83C\uDDFB\uD83C\uDDE8": "1F1FB-1F1E8",
        "\uD83C\uDDF1\uD83C\uDDE8": "1F1F1-1F1E8",
        "\uD83C\uDDF0\uD83C\uDDF3": "1F1F0-1F1F3",
        "\uD83C\uDDF8\uD83C\uDDED": "1F1F8-1F1ED",
        "\uD83C\uDDF7\uD83C\uDDFC": "1F1F7-1F1FC",
        "\uD83C\uDDF7\uD83C\uDDF4": "1F1F7-1F1F4",
        "\uD83C\uDDF6\uD83C\uDDE6": "1F1F6-1F1E6",
        "\uD83C\uDDF5\uD83C\uDDEA": "1F1F5-1F1EA",
        "\uD83C\uDDF5\uD83C\uDDFE": "1F1F5-1F1FE",
        "\uD83C\uDDF5\uD83C\uDDEC": "1F1F5-1F1EC",
        "\uD83C\uDDF5\uD83C\uDDE6": "1F1F5-1F1E6",
        "\uD83C\uDDF5\uD83C\uDDF8": "1F1F5-1F1F8",
        "\uD83C\uDDF5\uD83C\uDDFC": "1F1F5-1F1FC",
        "\uD83C\uDDF5\uD83C\uDDF0": "1F1F5-1F1F0",
        "\uD83C\uDDF4\uD83C\uDDF2": "1F1F4-1F1F2",
        "\uD83C\uDDF0\uD83C\uDDF5": "1F1F0-1F1F5",
        "\uD83C\uDDF3\uD83C\uDDFA": "1F1F3-1F1FA",
        "\uD83C\uDDF3\uD83C\uDDEC": "1F1F3-1F1EC",
        "\uD83C\uDDF3\uD83C\uDDEA": "1F1F3-1F1EA",
        "\uD83C\uDDF3\uD83C\uDDEE": "1F1F3-1F1EE",
        "\uD83C\uDDF3\uD83C\uDDE8": "1F1F3-1F1E8",
        "\uD83C\uDDF3\uD83C\uDDF5": "1F1F3-1F1F5",
        "\uD83C\uDDF3\uD83C\uDDF7": "1F1F3-1F1F7",
        "\uD83C\uDDF3\uD83C\uDDE6": "1F1F3-1F1E6",
        "\uD83C\uDDF2\uD83C\uDDF2": "1F1F2-1F1F2",
        "\uD83C\uDDF2\uD83C\uDDFF": "1F1F2-1F1FF",
        "\uD83C\uDDF2\uD83C\uDDE6": "1F1F2-1F1E6",
        "\uD83C\uDDF2\uD83C\uDDF8": "1F1F2-1F1F8",
        "\uD83C\uDDF2\uD83C\uDDEA": "1F1F2-1F1EA",
        "\uD83C\uDDF2\uD83C\uDDF3": "1F1F2-1F1F3",
        "\uD83C\uDDF2\uD83C\uDDE8": "1F1F2-1F1E8",
        "\uD83C\uDDF2\uD83C\uDDE9": "1F1F2-1F1E9",
        "\uD83C\uDDEB\uD83C\uDDF2": "1F1EB-1F1F2",
        "\uD83C\uDDF2\uD83C\uDDFA": "1F1F2-1F1FA",
        "\uD83C\uDDF2\uD83C\uDDF7": "1F1F2-1F1F7",
        "\uD83C\uDDF2\uD83C\uDDED": "1F1F2-1F1ED",
        "\uD83C\uDDF2\uD83C\uDDF9": "1F1F2-1F1F9",
        "\uD83C\uDDF2\uD83C\uDDF1": "1F1F2-1F1F1",
        "\uD83C\uDDF2\uD83C\uDDFB": "1F1F2-1F1FB",
        "\uD83C\uDDF2\uD83C\uDDFC": "1F1F2-1F1FC",
        "\uD83C\uDDF2\uD83C\uDDEC": "1F1F2-1F1EC",
        "\uD83C\uDDF2\uD83C\uDDF0": "1F1F2-1F1F0",
        "\uD83C\uDDF1\uD83C\uDDFA": "1F1F1-1F1FA",
        "\uD83C\uDDF1\uD83C\uDDF9": "1F1F1-1F1F9",
        "\uD83C\uDDF1\uD83C\uDDEE": "1F1F1-1F1EE",
        "\uD83C\uDDF1\uD83C\uDDFE": "1F1F1-1F1FE",
        "\uD83C\uDDF1\uD83C\uDDF7": "1F1F1-1F1F7",
        "\uD83C\uDDF1\uD83C\uDDF8": "1F1F1-1F1F8",
        "\uD83C\uDDF1\uD83C\uDDE7": "1F1F1-1F1E7",
        "\uD83C\uDDF1\uD83C\uDDFB": "1F1F1-1F1FB",
        "\uD83C\uDDF1\uD83C\uDDE6": "1F1F1-1F1E6",
        "\uD83C\uDDF0\uD83C\uDDEC": "1F1F0-1F1EC",
        "\uD83C\uDDF0\uD83C\uDDFC": "1F1F0-1F1FC",
        "\uD83C\uDDFD\uD83C\uDDF0": "1F1FD-1F1F0",
        "\uD83C\uDDF0\uD83C\uDDEE": "1F1F0-1F1EE",
        "\uD83C\uDDF0\uD83C\uDDEA": "1F1F0-1F1EA",
        "\uD83C\uDDF0\uD83C\uDDFF": "1F1F0-1F1FF",
        "\uD83C\uDDEF\uD83C\uDDF4": "1F1EF-1F1F4",
        "\uD83C\uDDEF\uD83C\uDDEA": "1F1EF-1F1EA",
        "\uD83C\uDDEF\uD83C\uDDF2": "1F1EF-1F1F2",
        "\uD83C\uDDEE\uD83C\uDDF6": "1F1EE-1F1F6",
        "\uD83C\uDDEE\uD83C\uDDF7": "1F1EE-1F1F7",
        "\uD83C\uDDEE\uD83C\uDDF8": "1F1EE-1F1F8",
        "\uD83C\uDDED\uD83C\uDDFA": "1F1ED-1F1FA",
        "\uD83C\uDDED\uD83C\uDDF3": "1F1ED-1F1F3",
        "\uD83C\uDDED\uD83C\uDDF9": "1F1ED-1F1F9",
        "\uD83C\uDDEC\uD83C\uDDFE": "1F1EC-1F1FE",
        "\uD83C\uDDEC\uD83C\uDDFC": "1F1EC-1F1FC",
        "\uD83C\uDDEC\uD83C\uDDF3": "1F1EC-1F1F3",
        "\uD83C\uDDEC\uD83C\uDDF9": "1F1EC-1F1F9",
        "\uD83C\uDDEC\uD83C\uDDFA": "1F1EC-1F1FA",
        "\uD83C\uDDEC\uD83C\uDDE9": "1F1EC-1F1E9",
        "\uD83C\uDDEC\uD83C\uDDF1": "1F1EC-1F1F1",
        "\uD83C\uDDEC\uD83C\uDDF7": "1F1EC-1F1F7",
        "\uD83C\uDDEC\uD83C\uDDEE": "1F1EC-1F1EE",
        "\uD83C\uDDEC\uD83C\uDDED": "1F1EC-1F1ED",
        "\uD83C\uDDEC\uD83C\uDDEA": "1F1EC-1F1EA",
        "\uD83C\uDDEC\uD83C\uDDF2": "1F1EC-1F1F2",
        "\uD83C\uDDEC\uD83C\uDDE6": "1F1EC-1F1E6",
        "\uD83C\uDDF5\uD83C\uDDEB": "1F1F5-1F1EB",
        "\uD83C\uDDEB\uD83C\uDDEF": "1F1EB-1F1EF",
        "\uD83C\uDDEB\uD83C\uDDF4": "1F1EB-1F1F4",
        "\uD83C\uDDEB\uD83C\uDDF0": "1F1EB-1F1F0",
        "\uD83C\uDDEA\uD83C\uDDF9": "1F1EA-1F1F9",
        "\uD83C\uDDEA\uD83C\uDDEA": "1F1EA-1F1EA",
        "\uD83C\uDDEA\uD83C\uDDF7": "1F1EA-1F1F7",
        "\uD83C\uDDEC\uD83C\uDDF6": "1F1EC-1F1F6",
        "\uD83C\uDDF8\uD83C\uDDFB": "1F1F8-1F1FB",
        "\uD83C\uDDEA\uD83C\uDDEC": "1F1EA-1F1EC",
        "\uD83C\uDDEA\uD83C\uDDE8": "1F1EA-1F1E8",
        "\uD83C\uDDF9\uD83C\uDDF1": "1F1F9-1F1F1",
        "\uD83C\uDDE9\uD83C\uDDF4": "1F1E9-1F1F4",
        "\uD83C\uDDE9\uD83C\uDDF2": "1F1E9-1F1F2",
        "\uD83C\uDDE9\uD83C\uDDEF": "1F1E9-1F1EF",
        "\uD83C\uDDE8\uD83C\uDDFF": "1F1E8-1F1FF",
        "\uD83C\uDDE8\uD83C\uDDFE": "1F1E8-1F1FE",
        "\uD83C\uDDE8\uD83C\uDDFA": "1F1E8-1F1FA",
        "\uD83C\uDDED\uD83C\uDDF7": "1F1ED-1F1F7",
        "\uD83C\uDDE8\uD83C\uDDEE": "1F1E8-1F1EE",
        "\uD83C\uDDE8\uD83C\uDDF7": "1F1E8-1F1F7",
        "\uD83C\uDDF9\uD83C\uDDE9": "1F1F9-1F1E9",
        "\uD83C\uDDE8\uD83C\uDDEC": "1F1E8-1F1EC",
        "\uD83C\uDDE8\uD83C\uDDE9": "1F1E8-1F1E9",
        "\uD83C\uDDF0\uD83C\uDDF2": "1F1F0-1F1F2",
        "\uD83C\uDDE8\uD83C\uDDEB": "1F1E8-1F1EB",
        "\uD83C\uDDF0\uD83C\uDDFE": "1F1F0-1F1FE",
        "\uD83C\uDDE8\uD83C\uDDFB": "1F1E8-1F1FB",
        "\uD83C\uDDE8\uD83C\uDDF2": "1F1E8-1F1F2",
        "\uD83C\uDDF0\uD83C\uDDED": "1F1F0-1F1ED",
        "\uD83C\uDDE7\uD83C\uDDEE": "1F1E7-1F1EE",
        "\uD83C\uDDE7\uD83C\uDDEB": "1F1E7-1F1EB",
        "\uD83C\uDDE7\uD83C\uDDEC": "1F1E7-1F1EC",
        "\uD83C\uDDE7\uD83C\uDDF3": "1F1E7-1F1F3",
        "\uD83C\uDDE7\uD83C\uDDFC": "1F1E7-1F1FC",
        "\uD83C\uDDE7\uD83C\uDDE6": "1F1E7-1F1E6",
        "\uD83C\uDDE7\uD83C\uDDF4": "1F1E7-1F1F4",
        "\uD83C\uDDE7\uD83C\uDDF9": "1F1E7-1F1F9",
        "\uD83C\uDDE7\uD83C\uDDF2": "1F1E7-1F1F2",
        "\uD83C\uDDE7\uD83C\uDDEF": "1F1E7-1F1EF",
        "\uD83C\uDDE7\uD83C\uDDFF": "1F1E7-1F1FF",
        "\uD83C\uDDE7\uD83C\uDDFE": "1F1E7-1F1FE",
        "\uD83C\uDDE7\uD83C\uDDE7": "1F1E7-1F1E7",
        "\uD83C\uDDE7\uD83C\uDDE9": "1F1E7-1F1E9",
        "\uD83C\uDDE7\uD83C\uDDED": "1F1E7-1F1ED",
        "\uD83C\uDDE7\uD83C\uDDF8": "1F1E7-1F1F8",
        "\uD83C\uDDE6\uD83C\uDDFF": "1F1E6-1F1FF",
        "\uD83C\uDDE6\uD83C\uDDE8": "1F1E6-1F1E8",
        "\uD83C\uDDE6\uD83C\uDDFC": "1F1E6-1F1FC",
        "\uD83C\uDDE6\uD83C\uDDF2": "1F1E6-1F1F2",
        "\uD83C\uDDE6\uD83C\uDDF7": "1F1E6-1F1F7",
        "\uD83C\uDDE6\uD83C\uDDEC": "1F1E6-1F1EC",
        "\uD83C\uDDE6\uD83C\uDDEE": "1F1E6-1F1EE",
        "\uD83C\uDDE6\uD83C\uDDF4": "1F1E6-1F1F4",
        "\uD83C\uDDE6\uD83C\uDDE9": "1F1E6-1F1E9",
        "\uD83C\uDDE9\uD83C\uDDFF": "1F1E9-1F1FF",
        "\uD83C\uDDE6\uD83C\uDDF1": "1F1E6-1F1F1",
        "\uD83C\uDDE6\uD83C\uDDEB": "1F1E6-1F1EB",
        "\uD83C\uDDFB\uD83C\uDDF3": "1F1FB-1F1F3",
        "\uD83C\uDDE6\uD83C\uDDEA": "1F1E6-1F1EA",
        "\uD83C\uDDFA\uD83C\uDDF8": "1F1FA-1F1F8",
        "\uD83C\uDDEC\uD83C\uDDE7": "1F1EC-1F1E7",
        "\uD83C\uDDF9\uD83C\uDDF7": "1F1F9-1F1F7",
        "\uD83C\uDDE8\uD83C\uDDED": "1F1E8-1F1ED",
        "\uD83C\uDDF8\uD83C\uDDEA": "1F1F8-1F1EA",
        "\uD83C\uDDEA\uD83C\uDDF8": "1F1EA-1F1F8",
        "\uD83C\uDDFF\uD83C\uDDE6": "1F1FF-1F1E6",
        "\uD83C\uDDF8\uD83C\uDDEC": "1F1F8-1F1EC",
        "\uD83C\uDDF8\uD83C\uDDE6": "1F1F8-1F1E6",
        "\uD83C\uDDF7\uD83C\uDDFA": "1F1F7-1F1FA",
        "\uD83C\uDDF5\uD83C\uDDF7": "1F1F5-1F1F7",
        "\uD83C\uDDF5\uD83C\uDDF9": "1F1F5-1F1F9",
        "\uD83C\uDDF5\uD83C\uDDF1": "1F1F5-1F1F1",
        "\uD83C\uDDF5\uD83C\uDDED": "1F1F5-1F1ED",
        "\uD83C\uDDF3\uD83C\uDDF4": "1F1F3-1F1F4",
        "\uD83C\uDDF3\uD83C\uDDFF": "1F1F3-1F1FF",
        "\uD83C\uDDF3\uD83C\uDDF1": "1F1F3-1F1F1",
        "\uD83C\uDDF2\uD83C\uDDFD": "1F1F2-1F1FD",
        "\uD83C\uDDF2\uD83C\uDDFE": "1F1F2-1F1FE",
        "\uD83C\uDDF2\uD83C\uDDF4": "1F1F2-1F1F4",
        "\uD83C\uDDF0\uD83C\uDDF7": "1F1F0-1F1F7",
        "\uD83C\uDDEF\uD83C\uDDF5": "1F1EF-1F1F5",
        "\uD83C\uDDEE\uD83C\uDDF9": "1F1EE-1F1F9",
        "\uD83C\uDDEE\uD83C\uDDF1": "1F1EE-1F1F1",
        "\uD83C\uDDEE\uD83C\uDDEA": "1F1EE-1F1EA",
        "\uD83C\uDDEE\uD83C\uDDE9": "1F1EE-1F1E9",
        "\uD83C\uDDEE\uD83C\uDDF3": "1F1EE-1F1F3",
        "\uD83C\uDDED\uD83C\uDDF0": "1F1ED-1F1F0",
        "\uD83C\uDDE9\uD83C\uDDEA": "1F1E9-1F1EA",
        "\uD83C\uDDEB\uD83C\uDDF7": "1F1EB-1F1F7",
        "\uD83C\uDDEB\uD83C\uDDEE": "1F1EB-1F1EE",
        "\uD83C\uDDE9\uD83C\uDDF0": "1F1E9-1F1F0",
        "\uD83C\uDDE8\uD83C\uDDF4": "1F1E8-1F1F4",
        "\uD83C\uDDE8\uD83C\uDDF3": "1F1E8-1F1F3",
        "\uD83C\uDDE8\uD83C\uDDF1": "1F1E8-1F1F1",
        "\uD83C\uDDE8\uD83C\uDDE6": "1F1E8-1F1E6",
        "\uD83C\uDDE7\uD83C\uDDF7": "1F1E7-1F1F7",
        "\uD83C\uDDE7\uD83C\uDDEA": "1F1E7-1F1EA",
        "\uD83C\uDDE6\uD83C\uDDF9": "1F1E6-1F1F9",
        "\uD83C\uDDE6\uD83C\uDDFA": "1F1E6-1F1FA",
        "\uD83D\uDDFA": "1F5FA",
        "\uD83C\uDFEB": "1F3EB",
        "\uD83C\uDFEA": "1F3EA",
        "\u26EA\uFE0F": "26EA",
        "\u26EA": "26EA",
        "\uD83D\uDC92": "1F492",
        "\uD83C\uDFE9": "1F3E9",
        "\uD83C\uDFE8": "1F3E8",
        "\uD83C\uDFE6": "1F3E6",
        "\uD83C\uDFE5": "1F3E5",
        "\uD83C\uDFE4": "1F3E4",
        "\uD83C\uDFE3": "1F3E3",
        "\uD83C\uDFED": "1F3ED",
        "\uD83C\uDFEC": "1F3EC",
        "\uD83C\uDFE2": "1F3E2",
        "\uD83C\uDFD7": "1F3D7",
        "\uD83C\uDFDA": "1F3DA",
        "\uD83C\uDFE1": "1F3E1",
        "\uD83C\uDFD8": "1F3D8",
        "\uD83C\uDFE0": "1F3E0",
        "\uD83C\uDF09": "1F309",
        "\uD83C\uDF03": "1F303",
        "\uD83C\uDF06": "1F306",
        "\uD83C\uDF07": "1F307",
        "\uD83C\uDFD9": "1F3D9",
        "\uD83C\uDFDE": "1F3DE",
        "\uD83C\uDFDD": "1F3DD",
        "\uD83C\uDFDC": "1F3DC",
        "\uD83C\uDFD6": "1F3D6",
        "\uD83C\uDFD5": "1F3D5",
        "\uD83C\uDFD4": "1F3D4",
        "\uD83C\uDFDF": "1F3DF",
        "\uD83C\uDFDB": "1F3DB",
        "\uD83C\uDFEF": "1F3EF",
        "\uD83C\uDFF0": "1F3F0",
        "\u26F2\uFE0F": "26F2",
        "\u26F2": "26F2",
        "\uD83D\uDDFC": "1F5FC",
        "\uD83C\uDF01": "1F301",
        "\uD83D\uDDFF": "1F5FF",
        "\uD83D\uDDFD": "1F5FD",
        "\uD83D\uDECD": "1F6CD",
        "\uD83C\uDF7D": "1F37D",
        "\uD83D\uDECB": "1F6CB",
        "\uD83D\uDECF": "1F6CF",
        "\uD83D\uDECE": "1F6CE",
        "\uD83D\uDCB5": "1F4B5",
        "\uD83D\uDCB7": "1F4B7",
        "\uD83D\uDCB6": "1F4B6",
        "\uD83D\uDCB4": "1F4B4",
        "\uD83D\uDEC5": "1F6C5",
        "\uD83D\uDEC4": "1F6C4",
        "\uD83D\uDEC3": "1F6C3",
        "\uD83D\uDEC2": "1F6C2",
        "\uD83D\uDE9F": "1F69F",
        "\uD83D\uDEA0": "1F6A0",
        "\uD83D\uDEA1": "1F6A1",
        "\u26F5\uFE0F": "26F5",
        "\u26F5": "26F5",
        "\uD83D\uDEA4": "1F6A4",
        "\uD83D\uDEE5": "1F6E5",
        "\uD83D\uDEF3": "1F6F3",
        "\uD83D\uDEA2": "1F6A2",
        "\u2693\uFE0F": "2693",
        "\uD83D\uDCBA": "1F4BA",
        "\uD83D\uDEEC": "1F6EC",
        "\uD83D\uDEEB": "1F6EB",
        "\uD83D\uDEE9": "1F6E9",
        "\uD83D\uDEEA": "1F6EA",
        "\uD83D\uDEE6": "1F6E6",
        "\uD83D\uDEE8": "1F6E8",
        "\uD83D\uDEE7": "1F6E7",
        "\u2708\uFE0F": "2708",
        "\uD83D\uDE81": "1F681",
        "\uD83D\uDE80": "1F680",
        "\uD83D\uDEA5": "1F6A5",
        "\uD83D\uDEA6": "1F6A6",
        "\uD83D\uDEA7": "1F6A7",
        "\u26FD\uFE0F": "26FD",
        "\u26FD": "26FD",
        "\uD83D\uDE8F": "1F68F",
        "\uD83D\uDEE3": "1F6E3",
        "\uD83D\uDEB2": "1F6B2",
        "\uD83D\uDE9C": "1F69C",
        "\uD83D\uDE9B": "1F69B",
        "\uD83D\uDE9A": "1F69A",
        "\uD83D\uDE99": "1F699",
        "\uD83D\uDE98": "1F698",
        "\uD83D\uDE97": "1F697",
        "\uD83D\uDE96": "1F696",
        "\uD83D\uDE95": "1F695",
        "\uD83D\uDEA8": "1F6A8",
        "\uD83D\uDE94": "1F694",
        "\uD83D\uDE93": "1F693",
        "\uD83D\uDEF1": "1F6F1",
        "\uD83D\uDE92": "1F692",
        "\uD83D\uDE91": "1F691",
        "\uD83D\uDE90": "1F690",
        "\uD83D\uDE8E": "1F68E",
        "\uD83D\uDE8D": "1F68D",
        "\uD83D\uDE8C": "1F68C",
        "\uD83D\uDEE4": "1F6E4",
        "\uD83D\uDE8A": "1F68A",
        "\uD83D\uDE89": "1F689",
        "\uD83D\uDE88": "1F688",
        "\uD83D\uDE87": "1F687",
        "\uD83D\uDE86": "1F686",
        "\uD83D\uDE85": "1F685",
        "\uD83D\uDE84": "1F684",
        "\uD83D\uDE9D": "1F69D",
        "\uD83D\uDE8B": "1F68B",
        "\uD83D\uDEF2": "1F6F2",
        "\uD83D\uDE82": "1F682",
        "\uD83D\uDE9E": "1F69E",
        "\uD83D\uDE83": "1F683",
        "\uD83D\uDD67": "1F567",
        "\uD83D\uDD66": "1F566",
        "\uD83D\uDD65": "1F565",
        "\uD83D\uDD64": "1F564",
        "\uD83D\uDD63": "1F563",
        "\uD83D\uDD62": "1F562",
        "\uD83D\uDD61": "1F561",
        "\uD83D\uDD60": "1F560",
        "\uD83D\uDD5F": "1F55F",
        "\uD83D\uDD5E": "1F55E",
        "\uD83D\uDD5D": "1F55D",
        "\uD83D\uDD5C": "1F55C",
        "\uD83D\uDD5B": "1F55B",
        "\uD83D\uDD5A": "1F55A",
        "\uD83D\uDD59": "1F559",
        "\uD83D\uDD58": "1F558",
        "\uD83D\uDD57": "1F557",
        "\uD83D\uDD56": "1F556",
        "\uD83D\uDD55": "1F555",
        "\uD83D\uDD54": "1F554",
        "\uD83D\uDD53": "1F553",
        "\uD83D\uDD52": "1F552",
        "\uD83D\uDD51": "1F551",
        "\uD83D\uDD50": "1F550",
        "\uD83D\uDD33": "1F533",
        "\uD83D\uDD32": "1F532",
        "\u25FD\uFE0F": "25FD",
        "\u25FD": "25FD",
        "\u25FE\uFE0F": "25FE",
        "\u25FE": "25FE",
        "\u25FB\uFE0F": "25FB",
        "\u25FB": "25FB",
        "\u25FC\uFE0F": "25FC",
        "\u25FC": "25FC",
        "\u2B1C\uFE0F": "2B1C",
        "\u2B1C": "2B1C",
        "\u2B1B\uFE0F": "2B1B",
        "\u2B1B": "2B1B",
        "\u25AB\uFE0F": "25AB",
        "\u25AB": "25AB",
        "\u25AA\uFE0F": "25AA",
        "\u25AA": "25AA",
        "\uD83D\uDD37": "1F537",
        "\uD83D\uDD36": "1F536",
        "\uD83D\uDD39": "1F539",
        "\uD83D\uDD38": "1F538",
        "\uD83D\uDD3B": "1F53B",
        "\uD83D\uDD3A": "1F53A",
        "\uD83D\uDD35": "1F535",
        "\uD83D\uDD34": "1F534",
        "\uD83D\uDD18": "1F518",
        "\u26AB\uFE0F": "26AB",
        "\u26AB": "26AB",
        "\u26AA\uFE0F": "26AA",
        "\u26AA": "26AA",
        "\uD83D\uDDF5": "1F5F5",
        "\uD83D\uDDF4": "1F5F4",
        "\uD83D\uDDF9": "1F5F9",
        "\uD83D\uDDF8": "1F5F8",
        "\u2611\uFE0F": "2611",
        "\u2666\uFE0F": "2666",
        "\u2665\uFE0F": "2665",
        "\u2663\uFE0F": "2663",
        "\u2660\uFE0F": "2660",
        "\uD83D\uDCA0": "1F4A0",
        "\uD83D\uDCA2": "1F4A2",
        "\u267B\uFE0F": "267B",
        "\u267B": "267B",
        "\uD83C\uDFF6": "1F3F6",
        "\uD83C\uDFF5": "1F3F5",
        "\u2668\uFE0F": "2668",
        "\u26A0\uFE0F": "26A0",
        "\u26A0": "26A0",
        "\uD83D\uDD31": "1F531",
        "\uD83D\uDDF2": "1F5F2",
        "\uD83D\uDD30": "1F530",
        "\uD83D\uDD2F": "1F52F",
        "\u26CE": "26CE",
        "\uD83D\uDEC8": "1F6C8",
        "\u24C2\uFE0F": "24C2",
        "\u24C2": "24C2",
        "\uD83C\uDF00": "1F300",
        "\uD83D\uDD1C": "1F51C",
        "\uD83D\uDD1D": "1F51D",
        "\uD83D\uDD1B": "1F51B",
        "\uD83D\uDD19": "1F519",
        "\uD83D\uDD1A": "1F51A",
        "\uD83D\uDCAF": "1F4AF",
        "\u2B55\uFE0F": "2B55",
        "\u2B55": "2B55",
        "\u274C": "274C",
        "\uD83D\uDEC6": "1F6C6",
        "\u2049\uFE0F": "2049",
        "\u203C\uFE0F": "203C",
        "\u203C": "203C",
        "\u2757\uFE0F": "2757",
        "\u303D\uFE0F": "303D",
        "\u303D": "303D",
        "\u27BF": "27BF",
        "\u27B0": "27B0",
        "\uD83D\uDCB2": "1F4B2",
        "\uD83D\uDCB1": "1F4B1",
        "\u00AE": "00AE",
        "\u00A9": "00A9",
        "\uD83D\uDDD8": "1F5D8",
        "\uD83D\uDD03": "1F503",
        "\uD83D\uDDD9": "1F5D9",
        "\u2714\uFE0F": "2714",
        "\u2716\uFE0F": "2716",
        "\uD83D\uDD23": "1F523",
        "\uD83C\uDFA6": "1F3A6",
        "\uD83D\uDCF6": "1F4F6",
        "\u2139\uFE0F": "2139",
        "\uD83D\uDD20": "1F520",
        "\uD83D\uDD21": "1F521",
        "\uD83D\uDD24": "1F524",
        "\uD83D\uDD22": "1F522",
        "\uD83D\uDD1F": "1F51F",
        "9\uFE0F\u20E3": "0039-20E3",
        "9\u20E3": "0039-20E3",
        "8\uFE0F\u20E3": "0038-20E3",
        "8\u20E3": "0038-20E3",
        "7\uFE0F\u20E3": "0037-20E3",
        "7\u20E3": "0037-20E3",
        "6\uFE0F\u20E3": "0036-20E3",
        "6\u20E3": "0036-20E3",
        "5\uFE0F\u20E3": "0035-20E3",
        "5\u20E3": "0035-20E3",
        "4\uFE0F\u20E3": "0034-20E3",
        "4\u20E3": "0034-20E3",
        "3\uFE0F\u20E3": "0033-20E3",
        "3\u20E3": "0033-20E3",
        "2\uFE0F\u20E3": "0032-20E3",
        "2\u20E3": "0032-20E3",
        "1\uFE0F\u20E3": "0031-20E3",
        "1\u20E3": "0031-20E3",
        "0\uFE0F\u20E3": "0030-20E3",
        "0\u20E3": "0030-20E3",
        "#\uFE0F\u20E3": "0023-20E3",
        "#\u20E3": "0023-20E3",
        "\uD83D\uDD02": "1F502",
        "\uD83D\uDD01": "1F501",
        "\uD83D\uDD00": "1F500",
        "\u2935\uFE0F": "2935",
        "\u2934\uFE0F": "2934",
        "\u21A9\uFE0F": "21A9",
        "\u21A9": "21A9",
        "\u21AA\uFE0F": "21AA",
        "\u21AA": "21AA",
        "\uD83D\uDD04": "1F504",
        "\u2194\uFE0F": "2194",
        "\u2195\uFE0F": "2195",
        "\u2196\uFE0F": "2196",
        "\u2199\uFE0F": "2199",
        "\u2198\uFE0F": "2198",
        "\u2197\uFE0F": "2197",
        "\u2B07\uFE0F": "2B07",
        "\u2B07": "2B07",
        "\u2B06\uFE0F": "2B06",
        "\u2B06": "2B06",
        "\u2B05\uFE0F": "2B05",
        "\u2B05": "2B05",
        "\u27A1\uFE0F": "27A1",
        "\u27A1": "27A1",
        "\u23EC": "23EC",
        "\u23EB": "23EB",
        "\u23EA": "23EA",
        "\u23E9": "23E9",
        "\uD83D\uDD3D": "1F53D",
        "\uD83D\uDD3C": "1F53C",
        "\u25C0\uFE0F": "25C0",
        "\u25C0": "25C0",
        "\u25B6\uFE0F": "25B6",
        "\u25B6": "25B6",
        "\uD83D\uDEAE": "1F6AE",
        "\uD83D\uDEAD": "1F6AD",
        "\uD83D\uDEB0": "1F6B0",
        "\u267F\uFE0F": "267F",
        "\u267F": "267F",
        "\uD83D\uDEBC": "1F6BC",
        "\uD83D\uDECA": "1F6CA",
        "\uD83D\uDEC9": "1F6C9",
        "\uD83D\uDEBA": "1F6BA",
        "\uD83D\uDEB9": "1F6B9",
        "\uD83D\uDEBB": "1F6BB",
        "\u2653\uFE0F": "2653",
        "\u2652\uFE0F": "2652",
        "\u2651\uFE0F": "2651",
        "\u2650\uFE0F": "2650",
        "\u264F\uFE0F": "264F",
        "\u264F": "264F",
        "\u264E\uFE0F": "264E",
        "\u264E": "264E",
        "\u264D\uFE0F": "264D",
        "\u264D": "264D",
        "\u264C\uFE0F": "264C",
        "\u264C": "264C",
        "\u264B\uFE0F": "264B",
        "\u264B": "264B",
        "\u264A\uFE0F": "264A",
        "\u264A": "264A",
        "\u2649\uFE0F": "2649",
        "\u2648\uFE0F": "2648",
        "\uD83C\uDFE7": "1F3E7",
        "\uD83C\uDD99": "1F199",
        "\uD83C\uDD97": "1F197",
        "\uD83C\uDD96": "1F196",
        "\uD83C\uDD95": "1F195",
        "\uD83C\uDD93": "1F193",
        "\uD83C\uDD92": "1F192",
        "\uD83D\uDEBE": "1F6BE",
        "\uD83C\uDD7F\uFE0F": "1F17F",
        "\uD83C\uDD7F": "1F17F",
        "\uD83C\uDD94": "1F194",
        "\uD83C\uDD98": "1F198",
        "\uD83C\uDD7E": "1F17E",
        "\uD83C\uDD91": "1F191",
        "\uD83C\uDD8E": "1F18E",
        "\uD83C\uDD71": "1F171",
        "\uD83C\uDD70": "1F170",
        "\uD83C\uDD9A": "1F19A",
        "\uD83D\uDCF4": "1F4F4",
        "\uD83D\uDCF3": "1F4F3",
        "\u2734\uFE0F": "2734",
        "\u274E": "274E",
        "\u2733\uFE0F": "2733",
        "\u2747\uFE0F": "2747",
        "\uD83D\uDCB9": "1F4B9",
        "\uD83C\uDE2F\uFE0F": "1F22F",
        "\uD83C\uDE2F": "1F22F",
        "\uD83C\uDE01": "1F201",
        "\uD83C\uDE02": "1F202",
        "\uD83C\uDE33": "1F233",
        "\uD83C\uDE39": "1F239",
        "\uD83C\uDE37": "1F237",
        "\uD83C\uDE3A": "1F23A",
        "\uD83C\uDE38": "1F238",
        "\uD83C\uDE1A\uFE0F": "1F21A",
        "\uD83C\uDE1A": "1F21A",
        "\uD83C\uDE36": "1F236",
        "\uD83C\uDE32": "1F232",
        "\uD83C\uDE35": "1F235",
        "\uD83C\uDE34": "1F234",
        "\u3297\uFE0F": "3297",
        "\u3299\uFE0F": "3299",
        "\uD83D\uDCAE": "1F4AE",
        "\uD83C\uDE50": "1F250",
        "\uD83C\uDE51": "1F251",
        "\uD83D\uDD72": "1F572",
        "\uD83D\uDD1E": "1F51E",
        "\uD83D\uDCF5": "1F4F5",
        "\uD83D\uDEB1": "1F6B1",
        "\uD83D\uDEB3": "1F6B3",
        "\uD83D\uDEAF": "1F6AF",
        "\uD83D\uDEB7": "1F6B7",
        "\uD83D\uDCDB": "1F4DB",
        "\u26D4\uFE0F": "26D4",
        "\u26D4": "26D4",
        "\uD83D\uDEAB": "1F6AB",
        "\uD83D\uDEC7": "1F6C7",
        "\uD83D\uDECC": "1F6CC",
        "\uD83D\uDDE3": "1F5E3",
        "\uD83D\uDD0E": "1F50E",
        "\uD83D\uDD0D": "1F50D",
        "\uD83D\uDEE1": "1F6E1",
        "\uD83D\uDEB8": "1F6B8",
        "\uD83D\uDDF1": "1F5F1",
        "\uD83D\uDDF0": "1F5F0",
        "\uD83D\uDDEF": "1F5EF",
        "\uD83D\uDDEE": "1F5EE",
        "\uD83D\uDDED": "1F5ED",
        "\uD83D\uDDEC": "1F5EC",
        "\uD83D\uDDEB": "1F5EB",
        "\uD83D\uDDEA": "1F5EA",
        "\uD83D\uDDE9": "1F5E9",
        "\uD83D\uDDE8": "1F5E8",
        "\uD83D\uDCAC": "1F4AC",
        "\uD83D\uDCAD": "1F4AD",
        "\uD83D\uDD4A": "1F54A",
        "\uD83D\uDD49": "1F549",
        "\uD83D\uDD48": "1F548",
        "\uD83D\uDD47": "1F547",
        "\uD83D\uDD46": "1F546",
        "\uD83C\uDF9D": "1F39D",
        "\uD83C\uDF9C": "1F39C",
        "\uD83D\uDD6D": "1F56D",
        "\uD83D\uDD15": "1F515",
        "\uD83D\uDD14": "1F514",
        "\uD83D\uDCA4": "1F4A4",
        "\uD83D\uDD6C": "1F56C",
        "\uD83D\uDD6B": "1F56B",
        "\uD83D\uDD6A": "1F56A",
        "\uD83D\uDD69": "1F569",
        "\uD83D\uDD68": "1F568",
        "\uD83D\uDD07": "1F507",
        "\uD83D\uDD0A": "1F50A",
        "\uD83D\uDD09": "1F509",
        "\uD83D\uDD08": "1F508",
        "\uD83D\uDCE2": "1F4E2",
        "\uD83D\uDCE3": "1F4E3",
        "\uD83D\uDD13": "1F513",
        "\uD83D\uDD12": "1F512",
        "\uD83D\uDD10": "1F510",
        "\uD83D\uDD0F": "1F50F",
        "\uD83D\uDCDD": "1F4DD",
        "\uD83D\uDD8D": "1F58D",
        "\uD83D\uDD8C": "1F58C",
        "\uD83D\uDD8B": "1F58B",
        "\uD83D\uDD8A": "1F58A",
        "\uD83D\uDD89": "1F589",
        "\u270F\uFE0F": "270F",
        "\u270F": "270F",
        "\u2712\uFE0F": "2712",
        "\uD83D\uDDC4": "1F5C4",
        "\uD83D\uDCC2": "1F4C2",
        "\uD83D\uDCC1": "1F4C1",
        "\uD83D\uDDC1": "1F5C1",
        "\uD83D\uDDC0": "1F5C0",
        "\uD83D\uDD73": "1F573",
        "\uD83C\uDFF4": "1F3F4",
        "\uD83C\uDFF3": "1F3F3",
        "\uD83C\uDFF2": "1F3F2",
        "\uD83C\uDFF1": "1F3F1",
        "\uD83D\uDEA9": "1F6A9",
        "\uD83D\uDCCF": "1F4CF",
        "\uD83D\uDCCD": "1F4CD",
        "\uD83D\uDCD0": "1F4D0",
        "\u2702\uFE0F": "2702",
        "\uD83D\uDD88": "1F588",
        "\uD83D\uDCCC": "1F4CC",
        "\uD83D\uDD87": "1F587",
        "\uD83D\uDCCE": "1F4CE",
        "\uD83D\uDD17": "1F517",
        "\uD83D\uDDC3": "1F5C3",
        "\uD83D\uDDC2": "1F5C2",
        "\uD83D\uDCC7": "1F4C7",
        "\uD83D\uDCDA": "1F4DA",
        "\uD83D\uDCD9": "1F4D9",
        "\uD83D\uDCD8": "1F4D8",
        "\uD83D\uDCD7": "1F4D7",
        "\uD83D\uDCD5": "1F4D5",
        "\uD83D\uDCD2": "1F4D2",
        "\uD83D\uDCD4": "1F4D4",
        "\uD83D\uDCD3": "1F4D3",
        "\uD83D\uDCD6": "1F4D6",
        "\uD83D\uDD6E": "1F56E",
        "\uD83D\uDCCB": "1F4CB",
        "\uD83D\uDCDC": "1F4DC",
        "\uD83D\uDDBD": "1F5BD",
        "\uD83D\uDDBC": "1F5BC",
        "\uD83D\uDDBE": "1F5BE",
        "\uD83D\uDDDC": "1F5DC",
        "\uD83D\uDD06": "1F506",
        "\uD83D\uDD05": "1F505",
        "\uD83D\uDDF3": "1F5F3",
        "\uD83D\uDDD3": "1F5D3",
        "\uD83D\uDCC6": "1F4C6",
        "\uD83D\uDCC5": "1F4C5",
        "\uD83D\uDDE0": "1F5E0",
        "\uD83D\uDCCA": "1F4CA",
        "\uD83D\uDCC9": "1F4C9",
        "\uD83D\uDCC8": "1F4C8",
        "\uD83D\uDDD2": "1F5D2",
        "\uD83D\uDDCA": "1F5CA",
        "\uD83D\uDDC9": "1F5C9",
        "\uD83D\uDDC7": "1F5C7",
        "\uD83D\uDDC6": "1F5C6",
        "\uD83D\uDDD1": "1F5D1",
        "\uD83D\uDCD1": "1F4D1",
        "\uD83D\uDDD0": "1F5D0",
        "\uD83D\uDCC3": "1F4C3",
        "\uD83D\uDCC4": "1F4C4",
        "\uD83D\uDDCF": "1F5CF",
        "\uD83D\uDDB9": "1F5B9",
        "\uD83D\uDDCE": "1F5CE",
        "\uD83D\uDCEC": "1F4EC",
        "\uD83D\uDCED": "1F4ED",
        "\uD83D\uDCEB": "1F4EB",
        "\uD83D\uDCEA": "1F4EA",
        "\uD83D\uDCEE": "1F4EE",
        "\uD83D\uDCEF": "1F4EF",
        "\uD83D\uDCE6": "1F4E6",
        "\uD83D\uDCE4": "1F4E4",
        "\uD83D\uDCE5": "1F4E5",
        "\uD83D\uDCE7": "1F4E7",
        "\uD83D\uDCE8": "1F4E8",
        "\uD83D\uDCE9": "1F4E9",
        "\uD83D\uDD86": "1F586",
        "\uD83D\uDD85": "1F585",
        "\uD83D\uDD83": "1F583",
        "\uD83D\uDD82": "1F582",
        "\u2709\uFE0F": "2709",
        "\uD83D\uDDDD": "1F5DD",
        "\uD83D\uDD11": "1F511",
        "\uD83C\uDFF7": "1F3F7",
        "\uD83C\uDF21": "1F321",
        "\uD83D\uDDDE": "1F5DE",
        "\uD83D\uDCF0": "1F4F0",
        "\uD83D\uDD16": "1F516",
        "\uD83D\uDD2B": "1F52B",
        "\uD83D\uDD71": "1F571",
        "\uD83D\uDEAC": "1F6AC",
        "\uD83D\uDCA3": "1F4A3",
        "\uD83D\uDEE2": "1F6E2",
        "\uD83D\uDEE0": "1F6E0",
        "\uD83D\uDD28": "1F528",
        "\uD83D\uDD29": "1F529",
        "\uD83D\uDDE1": "1F5E1",
        "\uD83D\uDD2A": "1F52A",
        "\uD83D\uDD27": "1F527",
        "\uD83D\uDD2E": "1F52E",
        "\uD83D\uDD2D": "1F52D",
        "\uD83D\uDD2C": "1F52C",
        "\uD83D\uDC8A": "1F48A",
        "\uD83D\uDC89": "1F489",
        "\uD83D\uDC88": "1F488",
        "\uD83D\uDEBD": "1F6BD",
        "\uD83D\uDEC1": "1F6C1",
        "\uD83D\uDEBF": "1F6BF",
        "\uD83D\uDEAA": "1F6AA",
        "\uD83D\uDC56": "1F456",
        "\uD83D\uDC54": "1F454",
        "\uD83D\uDC55": "1F455",
        "\uD83D\uDC5A": "1F45A",
        "\uD83D\uDC58": "1F458",
        "\uD83D\uDC57": "1F457",
        "\uD83D\uDC59": "1F459",
        "\uD83D\uDC5F": "1F45F",
        "\uD83D\uDC5E": "1F45E",
        "\uD83D\uDC62": "1F462",
        "\uD83D\uDC60": "1F460",
        "\uD83D\uDC61": "1F461",
        "\uD83D\uDC52": "1F452",
        "\uD83D\uDD76": "1F576",
        "\uD83D\uDC53": "1F453",
        "\uD83D\uDC84": "1F484",
        "\uD83C\uDF92": "1F392",
        "\uD83D\uDCBC": "1F4BC",
        "\uD83D\uDC5C": "1F45C",
        "\uD83D\uDC5B": "1F45B",
        "\uD83D\uDC5D": "1F45D",
        "\uD83C\uDF02": "1F302",
        "\uD83D\uDC8E": "1F48E",
        "\uD83D\uDCB0": "1F4B0",
        "\uD83D\uDCB8": "1F4B8",
        "\uD83D\uDCB3": "1F4B3",
        "\uD83D\uDEF0": "1F6F0",
        "\uD83D\uDCE1": "1F4E1",
        "\uD83D\uDD6F": "1F56F",
        "\uD83D\uDD26": "1F526",
        "\uD83D\uDCA1": "1F4A1",
        "\uD83D\uDD0C": "1F50C",
        "\uD83D\uDD0B": "1F50B",
        "\uD83D\uDCFC": "1F4FC",
        "\uD83D\uDDB8": "1F5B8",
        "\uD83D\uDCC0": "1F4C0",
        "\uD83D\uDCBF": "1F4BF",
        "\uD83D\uDDB4": "1F5B4",
        "\uD83D\uDDAD": "1F5AD",
        "\uD83D\uDDAB": "1F5AB",
        "\uD83D\uDDAA": "1F5AA",
        "\uD83D\uDCBE": "1F4BE",
        "\uD83D\uDCBD": "1F4BD",
        "\uD83D\uDCE0": "1F4E0",
        "\uD83D\uDD81": "1F581",
        "\uD83D\uDD7F": "1F57F",
        "\uD83D\uDD7E": "1F57E",
        "\u260E\uFE0F": "260E",
        "\u260E": "260E",
        "\uD83D\uDD7B": "1F57B",
        "\uD83D\uDCDE": "1F4DE",
        "\uD83D\uDD79": "1F579",
        "\uD83D\uDCDF": "1F4DF",
        "\uD83D\uDCFE": "1F4FE",
        "\uD83D\uDCFB": "1F4FB",
        "\uD83C\uDF9B": "1F39B",
        "\uD83C\uDF9A": "1F39A",
        "\uD83C\uDF99": "1F399",
        "\uD83C\uDF98": "1F398",
        "\uD83D\uDCFA": "1F4FA",
        "\uD83D\uDCFD": "1F4FD",
        "\uD83C\uDFA5": "1F3A5",
        "\uD83D\uDCF9": "1F4F9",
        "\uD83D\uDCF8": "1F4F8",
        "\uD83D\uDCF7": "1F4F7",
        "\u231B\uFE0F": "231B",
        "\u231B": "231B",
        "\u23F3": "23F3",
        "\uD83D\uDD70": "1F570",
        "\u23F0": "23F0",
        "\uD83D\uDDA9": "1F5A9",
        "\uD83D\uDDD4": "1F5D4",
        "\uD83D\uDDA8": "1F5A8",
        "\uD83D\uDDA7": "1F5A7",
        "\uD83D\uDDA6": "1F5A6",
        "\uD83D\uDDB2": "1F5B2",
        "\uD83D\uDDAF": "1F5AF",
        "\uD83D\uDDAE": "1F5AE",
        "\uD83D\uDDB3": "1F5B3",
        "\uD83D\uDDA5": "1F5A5",
        "\uD83D\uDCBB": "1F4BB",
        "\uD83D\uDCF2": "1F4F2",
        "\uD83D\uDCF1": "1F4F1",
        "\u231A\uFE0F": "231A",
        "\u231A": "231A",
        "\uD83C\uDF7C": "1F37C",
        "\uD83C\uDF7B": "1F37B",
        "\uD83C\uDF7A": "1F37A",
        "\uD83C\uDF79": "1F379",
        "\uD83C\uDF78": "1F378",
        "\uD83C\uDF77": "1F377",
        "\uD83C\uDF76": "1F376",
        "\u2615\uFE0F": "2615",
        "\uD83C\uDF75": "1F375",
        "\uD83C\uDF74": "1F374",
        "\uD83C\uDF73": "1F373",
        "\uD83C\uDF72": "1F372",
        "\uD83C\uDF71": "1F371",
        "\uD83C\uDF70": "1F370",
        "\uD83C\uDF6F": "1F36F",
        "\uD83C\uDF6E": "1F36E",
        "\uD83C\uDF6D": "1F36D",
        "\uD83C\uDF6C": "1F36C",
        "\uD83C\uDF6B": "1F36B",
        "\uD83C\uDF6A": "1F36A",
        "\uD83C\uDF69": "1F369",
        "\uD83C\uDF68": "1F368",
        "\uD83C\uDF67": "1F367",
        "\uD83C\uDF66": "1F366",
        "\uD83C\uDF65": "1F365",
        "\uD83C\uDF64": "1F364",
        "\uD83C\uDF63": "1F363",
        "\uD83C\uDF62": "1F362",
        "\uD83C\uDF61": "1F361",
        "\uD83C\uDF5F": "1F35F",
        "\uD83C\uDF5E": "1F35E",
        "\uD83C\uDF5D": "1F35D",
        "\uD83C\uDF5C": "1F35C",
        "\uD83C\uDF5B": "1F35B",
        "\uD83C\uDF5A": "1F35A",
        "\uD83C\uDF59": "1F359",
        "\uD83C\uDF58": "1F358",
        "\uD83C\uDF57": "1F357",
        "\uD83C\uDF56": "1F356",
        "\uD83C\uDF55": "1F355",
        "\uD83C\uDF54": "1F354",
        "\uD83C\uDF53": "1F353",
        "\uD83C\uDF52": "1F352",
        "\uD83C\uDF51": "1F351",
        "\uD83C\uDF50": "1F350",
        "\uD83C\uDF4F": "1F34F",
        "\uD83C\uDF4E": "1F34E",
        "\uD83C\uDF4D": "1F34D",
        "\uD83C\uDF4C": "1F34C",
        "\uD83C\uDF4B": "1F34B",
        "\uD83C\uDF4A": "1F34A",
        "\uD83C\uDF49": "1F349",
        "\uD83C\uDF48": "1F348",
        "\uD83C\uDF47": "1F347",
        "\uD83C\uDF36": "1F336",
        "\uD83C\uDF60": "1F360",
        "\uD83C\uDF3D": "1F33D",
        "\uD83C\uDF46": "1F346",
        "\uD83C\uDF45": "1F345",
        "\uD83C\uDFA2": "1F3A2",
        "\uD83C\uDFA1": "1F3A1",
        "\uD83C\uDFA0": "1F3A0",
        "\uD83C\uDC04\uFE0F": "1F004",
        "\uD83C\uDC04": "1F004",
        "\uD83C\uDCCF": "1F0CF",
        "\uD83C\uDFB4": "1F3B4",
        "\uD83C\uDFAE": "1F3AE",
        "\uD83C\uDFB2": "1F3B2",
        "\uD83C\uDFB0": "1F3B0",
        "\uD83C\uDFB3": "1F3B3",
        "\uD83C\uDFB1": "1F3B1",
        "\uD83C\uDFAF": "1F3AF",
        "\uD83C\uDFA8": "1F3A8",
        "\uD83C\uDF9F": "1F39F",
        "\uD83C\uDF9E": "1F39E",
        "\uD83C\uDFAC": "1F3AC",
        "\uD83C\uDFAA": "1F3AA",
        "\uD83C\uDFA9": "1F3A9",
        "\uD83C\uDFAB": "1F3AB",
        "\uD83C\uDFAD": "1F3AD",
        "\uD83C\uDFA4": "1F3A4",
        "\uD83C\uDFA7": "1F3A7",
        "\uD83C\uDFBC": "1F3BC",
        "\uD83C\uDFB6": "1F3B6",
        "\uD83C\uDFB5": "1F3B5",
        "\uD83C\uDFBA": "1F3BA",
        "\uD83C\uDFB7": "1F3B7",
        "\uD83C\uDFBB": "1F3BB",
        "\uD83C\uDFB8": "1F3B8",
        "\uD83C\uDFB9": "1F3B9",
        "\uD83C\uDFC1": "1F3C1",
        "\uD83C\uDFBD": "1F3BD",
        "\uD83C\uDFC5": "1F3C5",
        "\uD83C\uDFC6": "1F3C6",
        "\u26F3\uFE0F": "26F3",
        "\u26F3": "26F3",
        "\uD83C\uDFC9": "1F3C9",
        "\uD83C\uDFBE": "1F3BE",
        "\u26BE\uFE0F": "26BE",
        "\u26BE": "26BE",
        "\uD83C\uDFC8": "1F3C8",
        "\uD83C\uDFC0": "1F3C0",
        "\u26BD\uFE0F": "26BD",
        "\u26BD": "26BD",
        "\uD83C\uDFA3": "1F3A3",
        "\u26FA\uFE0F": "26FA",
        "\u26FA": "26FA",
        "\uD83C\uDFC7": "1F3C7",
        "\uD83C\uDFCE": "1F3CE",
        "\uD83C\uDFCD": "1F3CD",
        "\uD83D\uDEB5": "1F6B5",
        "\uD83D\uDEB4": "1F6B4",
        "\u26C4\uFE0F": "26C4",
        "\u26C4": "26C4",
        "\uD83C\uDFBF": "1F3BF",
        "\uD83C\uDFC2": "1F3C2",
        "\uD83D\uDEC0": "1F6C0",
        "\uD83C\uDFC4": "1F3C4",
        "\uD83C\uDFCA": "1F3CA",
        "\uD83D\uDEA3": "1F6A3",
        "\uD83C\uDFCC": "1F3CC",
        "\uD83C\uDFCB": "1F3CB",
        "\uD83D\uDC83": "1F483",
        "\uD83D\uDEB6": "1F6B6",
        "\uD83C\uDFC3": "1F3C3",
        "\uD83D\uDC99": "1F499",
        "\uD83D\uDC9A": "1F49A",
        "\uD83D\uDC9B": "1F49B",
        "\uD83D\uDC9C": "1F49C",
        "\uD83D\uDC9F": "1F49F",
        "\uD83C\uDF94": "1F394",
        "\uD83D\uDC9D": "1F49D",
        "\uD83D\uDC98": "1F498",
        "\uD83D\uDC96": "1F496",
        "\uD83D\uDC97": "1F497",
        "\uD83D\uDC93": "1F493",
        "\uD83D\uDC9E": "1F49E",
        "\uD83D\uDC95": "1F495",
        "\uD83D\uDC8C": "1F48C",
        "\uD83D\uDC94": "1F494",
        "\u2764\uFE0F": "2764",
        "\uD83C\uDF95": "1F395",
        "\uD83D\uDC8D": "1F48D",
        "\uD83C\uDFEE": "1F3EE",
        "\uD83C\uDF8C": "1F38C",
        "\uD83C\uDF90": "1F390",
        "\uD83C\uDF8F": "1F38F",
        "\uD83C\uDF8E": "1F38E",
        "\uD83C\uDF96": "1F396",
        "\uD83C\uDF97": "1F397",
        "\uD83D\uDC51": "1F451",
        "\uD83C\uDF93": "1F393",
        "\uD83D\uDCA5": "1F4A5",
        "\uD83D\uDCAB": "1F4AB",
        "\uD83C\uDF88": "1F388",
        "\uD83C\uDF8A": "1F38A",
        "\uD83C\uDF89": "1F389",
        "\uD83C\uDF87": "1F387",
        "\uD83C\uDF86": "1F386",
        "\uD83C\uDF91": "1F391",
        "\uD83C\uDF8D": "1F38D",
        "\uD83C\uDF8B": "1F38B",
        "\uD83C\uDF84": "1F384",
        "\uD83C\uDF83": "1F383",
        "\uD83C\uDF82": "1F382",
        "\uD83C\uDF81": "1F381",
        "\uD83C\uDF80": "1F380",
        "\uD83C\uDF2C": "1F32C",
        "\uD83C\uDF1E": "1F31E",
        "\uD83C\uDF1C": "1F31C",
        "\uD83C\uDF1B": "1F31B",
        "\uD83C\uDF1D": "1F31D",
        "\uD83C\uDF1A": "1F31A",
        "\uD83C\uDF18": "1F318",
        "\uD83C\uDF17": "1F317",
        "\uD83C\uDF16": "1F316",
        "\uD83C\uDF15": "1F315",
        "\uD83C\uDF14": "1F314",
        "\uD83C\uDF13": "1F313",
        "\uD83C\uDF12": "1F312",
        "\uD83C\uDF11": "1F311",
        "\uD83C\uDF0F": "1F30F",
        "\uD83C\uDF0E": "1F30E",
        "\uD83C\uDF0D": "1F30D",
        "\uD83C\uDF10": "1F310",
        "\uD83D\uDDFE": "1F5FE",
        "\uD83D\uDDFB": "1F5FB",
        "\uD83C\uDF0C": "1F30C",
        "\uD83C\uDF0B": "1F30B",
        "\uD83C\uDF0A": "1F30A",
        "\uD83C\uDF08": "1F308",
        "\uD83C\uDF05": "1F305",
        "\uD83C\uDF04": "1F304",
        "\uD83C\uDF20": "1F320",
        "\u2B50\uFE0F": "2B50",
        "\u2B50": "2B50",
        "\uD83C\uDF1F": "1F31F",
        "\u2744\uFE0F": "2744",
        "\uD83D\uDCA8": "1F4A8",
        "\uD83C\uDF2B": "1F32B",
        "\u2614\uFE0F": "2614",
        "\uD83D\uDCA6": "1F4A6",
        "\uD83D\uDCA7": "1F4A7",
        "\uD83C\uDF2A": "1F32A",
        "\uD83C\uDF29": "1F329",
        "\uD83C\uDF28": "1F328",
        "\uD83C\uDF27": "1F327",
        "\u2601\uFE0F": "2601",
        "\u26C5\uFE0F": "26C5",
        "\u26C5": "26C5",
        "\u2600\uFE0F": "2600",
        "\uD83C\uDF19": "1F319",
        "\uD83D\uDD25": "1F525",
        "\u26A1\uFE0F": "26A1",
        "\u26A1": "26A1",
        "\uD83D\uDC3E": "1F43E",
        "\uD83D\uDD78": "1F578",
        "\uD83D\uDD77": "1F577",
        "\uD83D\uDC1E": "1F41E",
        "\uD83D\uDC1D": "1F41D",
        "\uD83D\uDC1C": "1F41C",
        "\uD83D\uDC1B": "1F41B",
        "\uD83D\uDC0C": "1F40C",
        "\uD83D\uDC1A": "1F41A",
        "\uD83D\uDC21": "1F421",
        "\uD83D\uDC20": "1F420",
        "\uD83D\uDC1F": "1F41F",
        "\uD83D\uDC19": "1F419",
        "\uD83D\uDC2C": "1F42C",
        "\uD83D\uDC33": "1F433",
        "\uD83D\uDC0B": "1F40B",
        "\uD83D\uDC38": "1F438",
        "\uD83D\uDC22": "1F422",
        "\uD83D\uDC0D": "1F40D",
        "\uD83D\uDC0A": "1F40A",
        "\uD83D\uDC32": "1F432",
        "\uD83D\uDC09": "1F409",
        "\uD83D\uDC12": "1F412",
        "\uD83D\uDE4A": "1F64A",
        "\uD83D\uDE49": "1F649",
        "\uD83D\uDE48": "1F648",
        "\uD83D\uDC35": "1F435",
        "\uD83D\uDC3C": "1F43C",
        "\uD83D\uDC28": "1F428",
        "\uD83D\uDC3B": "1F43B",
        "\uD83D\uDC3A": "1F43A",
        "\uD83D\uDC36": "1F436",
        "\uD83D\uDC29": "1F429",
        "\uD83D\uDC15": "1F415",
        "\uD83D\uDC3D": "1F43D",
        "\uD83D\uDC37": "1F437",
        "\uD83D\uDC16": "1F416",
        "\uD83D\uDC17": "1F417",
        "\uD83D\uDC2B": "1F42B",
        "\uD83D\uDC2A": "1F42A",
        "\uD83D\uDC18": "1F418",
        "\uD83D\uDC27": "1F427",
        "\uD83D\uDC26": "1F426",
        "\uD83D\uDC25": "1F425",
        "\uD83D\uDC23": "1F423",
        "\uD83D\uDC24": "1F424",
        "\uD83D\uDC14": "1F414",
        "\uD83D\uDC13": "1F413",
        "\uD83D\uDC10": "1F410",
        "\uD83D\uDC11": "1F411",
        "\uD83D\uDC0F": "1F40F",
        "\uD83D\uDC34": "1F434",
        "\uD83D\uDC0E": "1F40E",
        "\uD83D\uDC31": "1F431",
        "\uD83D\uDC08": "1F408",
        "\uD83D\uDC30": "1F430",
        "\uD83D\uDC07": "1F407",
        "\uD83D\uDC3F": "1F43F",
        "\uD83D\uDC2F": "1F42F",
        "\uD83D\uDC06": "1F406",
        "\uD83D\uDC05": "1F405",
        "\uD83D\uDC2E": "1F42E",
        "\uD83D\uDC04": "1F404",
        "\uD83D\uDC03": "1F403",
        "\uD83D\uDC02": "1F402",
        "\uD83D\uDC39": "1F439",
        "\uD83D\uDC2D": "1F42D",
        "\uD83D\uDC01": "1F401",
        "\uD83D\uDC00": "1F400",
        "\uD83C\uDF30": "1F330",
        "\uD83C\uDF44": "1F344",
        "\uD83C\uDF43": "1F343",
        "\uD83C\uDF42": "1F342",
        "\uD83C\uDF41": "1F341",
        "\uD83C\uDF40": "1F340",
        "\uD83C\uDF3F": "1F33F",
        "\uD83C\uDF3E": "1F33E",
        "\uD83D\uDC90": "1F490",
        "\uD83C\uDF3C": "1F33C",
        "\uD83C\uDF3B": "1F33B",
        "\uD83C\uDF3A": "1F33A",
        "\uD83C\uDF39": "1F339",
        "\uD83C\uDF38": "1F338",
        "\uD83C\uDF37": "1F337",
        "\uD83C\uDF35": "1F335",
        "\uD83C\uDF34": "1F334",
        "\uD83C\uDF33": "1F333",
        "\uD83C\uDF32": "1F332",
        "\uD83C\uDF31": "1F331",
        "\uD83D\uDE4F": "1F64F",
        "\uD83D\uDD9F": "1F59F",
        "\uD83D\uDD9E": "1F59E",
        "\uD83D\uDD99": "1F599",
        "\uD83D\uDD98": "1F598",
        "\uD83D\uDD97": "1F597",
        "\uD83D\uDD96": "1F596",
        "\uD83D\uDD95": "1F595",
        "\uD83D\uDD94": "1F594",
        "\uD83D\uDD93": "1F593",
        "\uD83D\uDD92": "1F592",
        "\uD83D\uDD91": "1F591",
        "\uD83D\uDD90": "1F590",
        "\uD83D\uDD8F": "1F58F",
        "\uD83D\uDD8E": "1F58E",
        "\uD83D\uDC50": "1F450",
        "\uD83D\uDCAA": "1F4AA",
        "\u270B": "270B",
        "\u270A": "270A",
        "\uD83D\uDC4A": "1F44A",
        "\u270C\uFE0F": "270C",
        "\u270C": "270C",
        "\uD83D\uDC4C": "1F44C",
        "\uD83D\uDC49": "1F449",
        "\uD83D\uDC48": "1F448",
        "\uD83D\uDC47": "1F447",
        "\uD83D\uDC46": "1F446",
        "\u261D\uFE0F": "261D",
        "\u261D": "261D",
        "\uD83D\uDC4E": "1F44E",
        "\uD83D\uDC4D": "1F44D",
        "\uD83D\uDC4B": "1F44B",
        "\uD83D\uDC85": "1F485",
        "\uD83D\uDC45": "1F445",
        "\uD83D\uDC8B": "1F48B",
        "\uD83D\uDDE2": "1F5E2",
        "\uD83D\uDC44": "1F444",
        "\uD83D\uDC43": "1F443",
        "\uD83D\uDC40": "1F440",
        "\uD83D\uDC41": "1F441",
        "\uD83D\uDC42": "1F442",
        "\uD83D\uDC4F": "1F44F",
        "\uD83D\uDE4C": "1F64C",
        "\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68": "1F468-2764-1F48B-1F468",
        "\uD83D\uDC68\u2764\uD83D\uDC8B\uD83D\uDC68": "1F468-2764-1F48B-1F468",
        "\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69": "1F469-2764-1F48B-1F469",
        "\uD83D\uDC69\u2764\uD83D\uDC8B\uD83D\uDC69": "1F469-2764-1F48B-1F469",
        "\uD83D\uDC8F": "1F48F",
        "\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC68": "1F468-2764-1F468",
        "\uD83D\uDC68\u2764\uD83D\uDC68": "1F468-2764-1F468",
        "\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC69": "1F469-2764-1F469",
        "\uD83D\uDC69\u2764\uD83D\uDC69": "1F469-2764-1F469",
        "\uD83D\uDC91": "1F491",
        "\uD83D\uDC87": "1F487",
        "\uD83D\uDC86": "1F486",
        "\uD83D\uDE4D": "1F64D",
        "\uD83D\uDE4E": "1F64E",
        "\uD83D\uDE4B": "1F64B",
        "\uD83D\uDE46": "1F646",
        "\uD83D\uDE45": "1F645",
        "\uD83D\uDC81": "1F481",
        "\uD83D\uDE47": "1F647",
        "\uD83D\uDC7E": "1F47E",
        "\uD83D\uDC7D": "1F47D",
        "\uD83D\uDC80": "1F480",
        "\uD83D\uDCA9": "1F4A9",
        "\uD83D\uDC7A": "1F47A",
        "\uD83D\uDC79": "1F479",
        "\uD83D\uDC7B": "1F47B",
        "\uD83C\uDF85": "1F385",
        "\uD83D\uDC7C": "1F47C",
        "\uD83D\uDC82": "1F482",
        "\uD83D\uDC78": "1F478",
        "\uD83D\uDC77": "1F477",
        "\uD83D\uDC6E": "1F46E",
        "\uD83D\uDC75": "1F475",
        "\uD83D\uDC74": "1F474",
        "\uD83D\uDC73": "1F473",
        "\uD83D\uDC72": "1F472",
        "\uD83D\uDC71": "1F471",
        "\uD83D\uDC70": "1F470",
        "\uD83D\uDC6F": "1F46F",
        "\uD83D\uDC6D": "1F46D",
        "\uD83D\uDC6C": "1F46C",
        "\uD83D\uDC6B": "1F46B",
        "\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67": "1F468-1F468-1F467-1F467",
        "\uD83D\uDC68\uD83D\uDC68\uD83D\uDC67\uD83D\uDC67": "1F468-1F468-1F467-1F467",
        "\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66": "1F468-1F468-1F466-1F466",
        "\uD83D\uDC68\uD83D\uDC68\uD83D\uDC66\uD83D\uDC66": "1F468-1F468-1F466-1F466",
        "\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67": "1F468-1F468-1F467",
        "\uD83D\uDC68\uD83D\uDC68\uD83D\uDC67\uD83D\uDC66": "1F468-1F468-1F467-1F466",
        "\uD83D\uDC68\uD83D\uDC68\uD83D\uDC67": "1F468-1F468-1F467",
        "\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66": "1F468-1F468-1F466",
        "\uD83D\uDC68\uD83D\uDC68\uD83D\uDC66": "1F468-1F468-1F466",
        "\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67": "1F469-1F469-1F467-1F467",
        "\uD83D\uDC69\uD83D\uDC69\uD83D\uDC67\uD83D\uDC67": "1F469-1F469-1F467-1F467",
        "\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66": "1F469-1F469-1F466-1F466",
        "\uD83D\uDC69\uD83D\uDC69\uD83D\uDC66\uD83D\uDC66": "1F469-1F469-1F466-1F466",
        "\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66": "1F469-1F469-1F467-1F466",
        "\uD83D\uDC69\uD83D\uDC69\uD83D\uDC67\uD83D\uDC66": "1F469-1F469-1F467-1F466",
        "\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67": "1F469-1F469-1F467",
        "\uD83D\uDC69\uD83D\uDC69\uD83D\uDC67": "1F469-1F469-1F467",
        "\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66": "1F469-1F469-1F466",
        "\uD83D\uDC69\uD83D\uDC69\uD83D\uDC66": "1F469-1F469-1F466",
        "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67": "1F468-1F469-1F467-1F467",
        "\uD83D\uDC68\uD83D\uDC69\uD83D\uDC67\uD83D\uDC67": "1F468-1F469-1F467-1F467",
        "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66": "1F468-1F469-1F466-1F466",
        "\uD83D\uDC68\uD83D\uDC69\uD83D\uDC66\uD83D\uDC66": "1F468-1F469-1F466-1F466",
        "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66": "1F468-1F469-1F467-1F466",
        "\uD83D\uDC68\uD83D\uDC69\uD83D\uDC67\uD83D\uDC66": "1F468-1F469-1F467-1F466",
        "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67": "1F468-1F469-1F467",
        "\uD83D\uDC68\uD83D\uDC69\uD83D\uDC67": "1F468-1F469-1F467",
        "\uD83D\uDC6A": "1F46A",
        "\uD83D\uDC69": "1F469",
        "\uD83D\uDC68": "1F468",
        "\uD83D\uDC67": "1F467",
        "\uD83D\uDC66": "1F466",
        "\uD83D\uDC76": "1F476",
        "\uD83D\uDD75": "1F575",
        "\uD83D\uDD74": "1F574",
        "\uD83D\uDC65": "1F465",
        "\uD83D\uDC64": "1F464",
        "\uD83D\uDC63": "1F463",
        "\uD83D\uDE40": "1F640",
        "\uD83D\uDE3F": "1F63F",
        "\uD83D\uDE3E": "1F63E",
        "\uD83D\uDE3D": "1F63D",
        "\uD83D\uDE3C": "1F63C",
        "\uD83D\uDE3B": "1F63B",
        "\uD83D\uDE3A": "1F63A",
        "\uD83D\uDE39": "1F639",
        "\uD83D\uDE38": "1F638",
        "\uD83D\uDE42": "1F642",
        "\uD83D\uDE41": "1F641",
        "\uD83D\uDE37": "1F637",
        "\uD83D\uDE36": "1F636",
        "\uD83D\uDE35": "1F635",
        "\uD83D\uDE34": "1F634",
        "\uD83D\uDE33": "1F633",
        "\uD83D\uDE32": "1F632",
        "\uD83D\uDE31": "1F631",
        "\uD83D\uDE30": "1F630",
        "\uD83D\uDE2F": "1F62F",
        "\uD83D\uDE2E": "1F62E",
        "\uD83D\uDE2D": "1F62D",
        "\uD83D\uDE2C": "1F62C",
        "\uD83D\uDE2B": "1F62B",
        "\uD83D\uDE2A": "1F62A",
        "\uD83D\uDE29": "1F629",
        "\uD83D\uDE28": "1F628",
        "\uD83D\uDE27": "1F627",
        "\uD83D\uDE26": "1F626",
        "\uD83D\uDE25": "1F625",
        "\uD83D\uDE24": "1F624",
        "\uD83D\uDE23": "1F623",
        "\uD83D\uDE22": "1F622",
        "\uD83D\uDE21": "1F621",
        "\uD83D\uDE20": "1F620",
        "\uD83D\uDE1F": "1F61F",
        "\uD83D\uDE1E": "1F61E",
        "\uD83D\uDE1D": "1F61D",
        "\uD83D\uDE1C": "1F61C",
        "\uD83D\uDE1B": "1F61B",
        "\uD83D\uDE1A": "1F61A",
        "\uD83D\uDE19": "1F619",
        "\uD83D\uDE18": "1F618",
        "\uD83D\uDE17": "1F617",
        "\uD83D\uDE16": "1F616",
        "\uD83D\uDE15": "1F615",
        "\uD83D\uDE14": "1F614",
        "\uD83D\uDE13": "1F613",
        "\uD83D\uDE12": "1F612",
        "\uD83D\uDE11": "1F611",
        "\uD83D\uDE10": "1F610",
        "\uD83D\uDE0F": "1F60F",
        "\uD83D\uDE0E": "1F60E",
        "\uD83D\uDE0D": "1F60D",
        "\uD83D\uDE0C": "1F60C",
        "\uD83D\uDE0B": "1F60B",
        "\u263A\uFE0F": "263A",
        "\u263A": "263A",
        "\uD83D\uDE0A": "1F60A",
        "\uD83D\uDE09": "1F609",
        "\uD83D\uDC7F": "1F47F",
        "\uD83D\uDE08": "1F608",
        "\uD83D\uDE07": "1F607",
        "\uD83D\uDE06": "1F606",
        "\uD83D\uDE05": "1F605",
        "\uD83D\uDE04": "1F604",
        "\uD83D\uDE03": "1F603",
        "\uD83D\uDE02": "1F602",
        "\uD83D\uDE01": "1F601",
        "\uD83D\uDE00": "1F600"
    };
    ns.imagePathPNG = '//cdn.jsdelivr.net/emojione/assets/png/';
    ns.imagePathSVG = '//cdn.jsdelivr.net/emojione/assets/svg/';
    ns.imagePathSVGSprites = './../assets/sprites/emojione.sprites.svg';
    ns.imageType = 'png'; // or svg
    ns.sprites = false; // if this is true then sprite markup will be used (if SVG image type is set then you must include the SVG sprite file locally)
    ns.unicodeAlt = true; // use the unicode char as the alt attribute (makes copy and pasting the resulting text better)
    ns.ascii = false; // change to true to convert ascii smileys
    ns.cacheBustParam = '?v=1.2.4'; // you can [optionally] modify this to force browsers to refresh their cache. it will be appended to the send of the filenames
    ns.toImage = function (str) {
        str = ns.unicodeToImage(str);
        str = ns.shortnameToImage(str);
        return str;
    };
    // Uses toShort to transform all unicode into a standard shortname
    // then transforms the shortname into unicode
    // This is done for standardization when converting several unicode types
    ns.unifyUnicode = function (str) {
        str = ns.toShort(str);
        str = ns.shortnameToUnicode(str);
        return str;
    };
    // Replace shortnames (:wink:) with Ascii equivalents ( ;^) )
    // Useful for systems that dont support unicode nor images
    ns.shortnameToAscii = function (str) {
        var unicode,
        // something to keep in mind here is that array flip will destroy
        // half of the ascii text "emojis" because the unicode numbers are duplicated
        // this is ok for what it's being used for
            unicodeToAscii = ns.objectFlip(ns.asciiList);
        str = str.replace(new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + ns.shortnames + ")", "gi"), function (shortname) {
            if ((typeof shortname === 'undefined') || (shortname === '') || (!(shortname in ns.emojioneList))) {
                // if the shortname doesnt exist just return the entire match
                return shortname;
            } else {
                unicode = ns.emojioneList[shortname][ns.emojioneList[shortname].length - 1].toLowerCase();
                if (typeof unicodeToAscii[unicode] !== 'undefined') {
                    return unicodeToAscii[unicode];
                } else {
                    return shortname;
                }
            }
        });
        return str;
    };
    // will output unicode from shortname
    // useful for sending emojis back to mobile devices
    ns.shortnameToUnicode = function (str) {
        // replace regular shortnames first
        var unicode;
        str = str.replace(new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + ns.shortnames + ")", "gi"), function (shortname) {
            if ((typeof shortname === 'undefined') || (shortname === '') || (!(shortname in ns.emojioneList))) {
                // if the shortname doesnt exist just return the entire match
                return shortname;
            }
            unicode = ns.emojioneList[shortname][ns.emojioneList[shortname].length - 1].toUpperCase();
            return ns.convert(unicode);
        });
        // if ascii smileys are turned on, then we'll replace them!
        if (ns.ascii) {
            str = str.replace(new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|((\\s|^)" + ns.asciiRegexp + "(?=\\s|$|[!,.?]))", "g"), function (entire, m1, m2, m3) {
                if ((typeof m3 === 'undefined') || (m3 === '') || (!(ns.unescapeHTML(m3) in ns.asciiList))) {
                    // if the shortname doesnt exist just return the entire match
                    return entire;
                }
                m3 = ns.unescapeHTML(m3);
                unicode = ns.asciiList[m3].toUpperCase();
                return m2 + ns.convert(unicode);
            });
        }
        return str;
    };
    ns.shortnameToImage = function (str) {
        // replace regular shortnames first
        var replaceWith, unicode, alt;
        str = str.replace(new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + ns.shortnames + ")", "gi"), function (shortname) {
            if ((typeof shortname === 'undefined') || (shortname === '') || (!(shortname in ns.emojioneList))) {
                // if the shortname doesnt exist just return the entire match
                return shortname;
            } else {
                unicode = ns.emojioneList[shortname][ns.emojioneList[shortname].length - 1].toUpperCase();
                // depending on the settings, we'll either add the native unicode as the alt tag, otherwise the shortname
                alt = (ns.unicodeAlt) ? ns.convert(unicode) : shortname;
                if (ns.imageType === 'png') {
                    if (ns.sprites) {
                        replaceWith = '<span class="emojione-' + unicode + '" title="' + shortname + '">' + alt + '</span>';
                    } else {
                        replaceWith = '<img class="emojione" alt="' + alt + '" src="' + ns.imagePathPNG + unicode + '.png' + ns.cacheBustParam + '"/>';
                    }
                } else {
                    // svg
                    if (ns.sprites) {
                        replaceWith = '<svg class="emojione"><description>' + alt + '</description><use xlink:href="' + ns.imagePathSVGSprites + '#emoji-' + unicode + '"></use></svg>';
                    } else {
                        replaceWith = '<object class="emojione" data="' + ns.imagePathSVG + unicode + '.svg' + ns.cacheBustParam + '" type="image/svg+xml" standby="' + alt + '">' + alt + '</object>';
                    }
                }
                return replaceWith;
            }
        });
        // if ascii smileys are turned on, then we'll replace them!
        if (ns.ascii) {
            str = str.replace(new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|((\\s|^)" + ns.asciiRegexp + "(?=\\s|$|[!,.?]))", "g"), function (entire, m1, m2, m3) {
                if ((typeof m3 === 'undefined') || (m3 === '') || (!(ns.unescapeHTML(m3) in ns.asciiList))) {
                    // if the shortname doesnt exist just return the entire match
                    return entire;
                }
                m3 = ns.unescapeHTML(m3);
                unicode = ns.asciiList[m3].toUpperCase();
                // depending on the settings, we'll either add the native unicode as the alt tag, otherwise the shortname
                alt = (ns.unicodeAlt) ? ns.convert(unicode) : ns.escapeHTML(m3);
                if (ns.imageType === 'png') {
                    if (ns.sprites) {
                        replaceWith = m2 + '<span class="emojione-' + unicode.toUpperCase() + '" title="' + ns.escapeHTML(m3) + '">' + alt + '</span>';
                    } else {
                        replaceWith = m2 + '<img class="emojione" alt="' + alt + '" src="' + ns.imagePathPNG + unicode + '.png' + ns.cacheBustParam + '"/>';
                    }
                } else {
                    // svg
                    if (ns.sprites) {
                        replaceWith = '<svg class="emojione"><description>' + alt + '</description><use xlink:href="' + ns.imagePathSVGSprites + '#emoji-' + unicode.toUpperCase() + '"></use></svg>';
                    } else {
                        replaceWith = m2 + '<object class="emojione" data="' + ns.imagePathSVG + unicode + '.svg' + ns.cacheBustParam + '" type="image/svg+xml" standby="' + alt + '">' + alt + '</object>';
                    }
                }
                return replaceWith;
            });
        }
        return str;
    };
    ns.unicodeToImage = function (str) {
        var replaceWith, unicode, alt;
        if ((!ns.unicodeAlt) || (ns.sprites)) {
            // if we are using the shortname as the alt tag then we need a reversed array to map unicode code point to shortnames
            var mappedUnicode = ns.mapShortToUnicode();
        }
        str = str.replace(new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + ns.unicodeRegexp + ")", "gi"), function (unicodeChar) {
            if ((typeof unicodeChar === 'undefined') || (unicodeChar === '') || (!(unicodeChar in ns.jsecapeMap))) {
                // if the unicodeChar doesnt exist just return the entire match
                return unicodeChar;
            } else {
                // get the unicode codepoint from the actual char
                unicode = ns.jsecapeMap[unicodeChar];
                // depending on the settings, we'll either add the native unicode as the alt tag, otherwise the shortname
                alt = (ns.unicodeAlt) ? ns.convert(unicode) : mappedUnicode[unicode];
                if (ns.imageType === 'png') {
                    if (ns.sprites) {
                        replaceWith = '<span class="emojione-' + unicode.toUpperCase() + '" title="' + mappedUnicode[unicode] + '">' + alt + '</span>';
                    } else {
                        replaceWith = '<img class="emojione" alt="' + alt + '" src="' + ns.imagePathPNG + unicode + '.png' + ns.cacheBustParam + '"/>';
                    }
                } else {
                    // svg
                    if (ns.sprites) {
                        replaceWith = '<svg class="emojione"><description>' + alt + '</description><use xlink:href="' + ns.imagePathSVGSprites + '#emoji-' + unicode.toUpperCase() + '"></use></svg>';
                    } else {
                        replaceWith = '<img class="emojione" alt="' + alt + '" src="' + ns.imagePathSVG + unicode + '.svg' + ns.cacheBustParam + '"/>';
                    }
                }
                return replaceWith;
            }
        });
        return str;
    };
    // super simple loop to replace all unicode emoji to shortnames
    // needs to be improved into one big replacement instead, for performance reasons
    ns.toShort = function (str) { // this is really just unicodeToShortname() but I opted for the shorthand name to match toImage()
        for (var shortcode in ns.emojioneList) {
            if (!ns.emojioneList.hasOwnProperty(shortcode)) {
                continue;
            }
            for (var i = 0, len = ns.emojioneList[shortcode].length; i < len; i++) {
                var unicode = ns.emojioneList[shortcode][i].toUpperCase();
                str = ns.replaceAll(str, ns.convert(unicode), shortcode);
            }
        }
        return str;
    };
    // for converting unicode code points and code pairs to their respective characters
    ns.convert = function (unicode) {
        if (unicode.indexOf("-") > -1) {
            var parts = [];
            var s = unicode.split('-');
            for (var i = 0; i < s.length; i++) {
                var part = parseInt(s[i], 16);
                if (part >= 0x10000 && part <= 0x10FFFF) {
                    var hi = Math.floor((part - 0x10000) / 0x400) + 0xD800;
                    var lo = ((part - 0x10000) % 0x400) + 0xDC00;
                    part = (String.fromCharCode(hi) + String.fromCharCode(lo));
                } else {
                    part = String.fromCharCode(part);
                }
                parts.push(part);
            }
            return parts.join('');
        } else {
            var s = parseInt(unicode, 16);
            if (s >= 0x10000 && s <= 0x10FFFF) {
                var hi = Math.floor((s - 0x10000) / 0x400) + 0xD800;
                var lo = ((s - 0x10000) % 0x400) + 0xDC00;
                return (String.fromCharCode(hi) + String.fromCharCode(lo));
            } else {
                return String.fromCharCode(s);
            }
        }
    };
    ns.escapeHTML = function (string) {
        var escaped = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&#039;'
        };
        return string.replace(/[&<>"']/g, function (match) {
            return escaped[match];
        });
    };
    ns.unescapeHTML = function (string) {
        var unescaped = {
            '&amp;': '&',
            '&#38;': '&',
            '&#x26;': '&',
            '&lt;': '<',
            '&#60;': '<',
            '&#x3C;': '<',
            '&gt;': '>',
            '&#62;': '>',
            '&#x3E;': '>',
            '&quot;': '"',
            '&#34;': '"',
            '&#x22;': '"',
            '&apos;': '\'',
            '&#39;': '\'',
            '&#x27;': '\''
        };
        return string.replace(/&(?:amp|#38|#x26|lt|#60|#x3C|gt|#62|#x3E|apos|#39|#x27|quot|#34|#x22);/ig, function (match) {
            return unescaped[match];
        });
    };
    ns.mapShortToUnicode = function () {
        var new_obj = {};
        for (var shortname in ns.emojioneList) {
            if (!ns.emojioneList.hasOwnProperty(shortname)) {
                continue;
            }
            for (var i = 0, len = ns.emojioneList[shortname].length; i < len; i++) {
                new_obj[ns.emojioneList[shortname][i].toUpperCase()] = shortname;
            }
        }
        return new_obj;
    };
    //reverse an object
    ns.objectFlip = function (obj) {
        var key, tmp_obj = {};
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                tmp_obj[obj[key]] = key;
            }
        }
        return tmp_obj;
    };
    ns.escapeRegExp = function (string) {
        return string.replace(/[-[\]{}()*+?.,;:&\\^$|#\s]/g, "\\$&");
    };
    ns.replaceAll = function (string, find, replaceWith) {
        var search = new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + find + ")", "gi");
        // callback prevents replacing anything inside of these common html tags as well as between an <object></object> tag
        var replace = function (entire, m1) {
            return ((typeof m1 === 'undefined') || (m1 === '')) ? entire : replaceWith;
        };
        return string.replace(search, replace);
    };
}(this.emojione = this.emojione || {}));
if (typeof module === "object") module.exports = this.emojione;
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

// emoji strategy for .textcomplete() (latest version available in our repo: emoji_strategy.json)
var emojiStrategy = {
    "grinning": {
        "unicode": "1F600",
        "shortname": ":grinning:",
        "aliases": "",
        "keywords": "grinning face face happy joy smile grin grinning smiling smile smiley"
    },
    "grin": {
        "unicode": "1F601",
        "shortname": ":grin:",
        "aliases": "",
        "keywords": "grinning face with smiling eyes face happy joy smile grin grinning smiling smile smiley"
    },
    "joy": {
        "unicode": "1F602",
        "shortname": ":joy:",
        "aliases": "",
        "keywords": "face with tears of joy cry face haha happy tears tears cry joy happy weep"
    },
    "smiley": {
        "unicode": "1F603",
        "shortname": ":smiley:",
        "aliases": "",
        "keywords": "smiling face with open mouth face haha happy joy smiling smile smiley"
    },
    "smile": {
        "unicode": "1F604",
        "shortname": ":smile:",
        "aliases": "",
        "keywords": "smiling face with open mouth and smiling eyes face funny haha happy joy laugh smile smiley smiling"
    },
    "sweat_smile": {
        "unicode": "1F605",
        "shortname": ":sweat_smile:",
        "aliases": "",
        "keywords": "smiling face with open mouth and cold sweat face happy hot smiling cold sweat perspiration"
    },
    "laughing": {
        "unicode": "1F606",
        "shortname": ":laughing:",
        "aliases": ":satisfied:",
        "keywords": "smiling face with open mouth and tightly-closed ey happy joy lol smiling laughing laugh"
    },
    "innocent": {
        "unicode": "1F607",
        "shortname": ":innocent:",
        "aliases": "",
        "keywords": "smiling face with halo angel face halo halo angel innocent ring circle heaven"
    },
    "smiling_imp": {
        "unicode": "1F608",
        "shortname": ":smiling_imp:",
        "aliases": "",
        "keywords": "smiling face with horns devil horns horns devil impish trouble"
    },
    "imp": {
        "unicode": "1F47F",
        "shortname": ":imp:",
        "aliases": "",
        "keywords": "imp angry devil evil horns cute devil"
    },
    "wink": {
        "unicode": "1F609",
        "shortname": ":wink:",
        "aliases": "",
        "keywords": "winking face face happy mischievous secret wink winking friendly joke"
    },
    "blush": {
        "unicode": "1F60A",
        "shortname": ":blush:",
        "aliases": "",
        "keywords": "smiling face with smiling eyes crush embarrassed face flushed happy shy smile smiling smile smiley"
    },
    "relaxed": {
        "unicode": "263A",
        "shortname": ":relaxed:",
        "aliases": "",
        "keywords": "white smiling face blush face happiness massage smile"
    },
    "yum": {
        "unicode": "1F60B",
        "shortname": ":yum:",
        "aliases": "",
        "keywords": "face savouring delicious food face happy joy smile tongue delicious savoring food eat yummy yum tasty savory"
    },
    "relieved": {
        "unicode": "1F60C",
        "shortname": ":relieved:",
        "aliases": "",
        "keywords": "relieved face face happiness massage phew relaxed relieved satisfied phew relief"
    },
    "heart_eyes": {
        "unicode": "1F60D",
        "shortname": ":heart_eyes:",
        "aliases": "",
        "keywords": "smiling face with heart-shaped eyes affection crush face infatuation like love valentines smiling heart lovestruck love flirt smile heart-shaped"
    },
    "sunglasses": {
        "unicode": "1F60E",
        "shortname": ":sunglasses:",
        "aliases": "",
        "keywords": "smiling face with sunglasses cool face smiling sunglasses sun glasses sunny cool smooth"
    },
    "smirk": {
        "unicode": "1F60F",
        "shortname": ":smirk:",
        "aliases": "",
        "keywords": "smirking face mean prank smile smug smirking smirk smug smile half-smile conceited"
    },
    "neutral_face": {
        "unicode": "1F610",
        "shortname": ":neutral_face:",
        "aliases": "",
        "keywords": "neutral face face indifference neutral objective impartial blank"
    },
    "expressionless": {
        "unicode": "1F611",
        "shortname": ":expressionless:",
        "aliases": "",
        "keywords": "expressionless face expressionless blank void vapid without expression face indifferent"
    },
    "unamused": {
        "unicode": "1F612",
        "shortname": ":unamused:",
        "aliases": "",
        "keywords": "unamused face bored face indifference serious straight face unamused not amused depressed unhappy disapprove lame"
    },
    "sweat": {
        "unicode": "1F613",
        "shortname": ":sweat:",
        "aliases": "",
        "keywords": "face with cold sweat cold sweat sick anxious worried clammy diaphoresis face hot"
    },
    "pensive": {
        "unicode": "1F614",
        "shortname": ":pensive:",
        "aliases": "",
        "keywords": "pensive face face okay sad pensive thoughtful think reflective wistful meditate serious"
    },
    "confused": {
        "unicode": "1F615",
        "shortname": ":confused:",
        "aliases": "",
        "keywords": "confused face confused confuse daze perplex puzzle indifference skeptical undecided uneasy hesitant"
    },
    "confounded": {
        "unicode": "1F616",
        "shortname": ":confounded:",
        "aliases": "",
        "keywords": "confounded face confused face sick unwell confound amaze perplex puzzle mystify"
    },
    "kissing": {
        "unicode": "1F617",
        "shortname": ":kissing:",
        "aliases": "",
        "keywords": "kissing face 3 face infatuation like love valentines kissing kiss pucker lips smooch"
    },
    "kissing_heart": {
        "unicode": "1F618",
        "shortname": ":kissing_heart:",
        "aliases": "",
        "keywords": "face throwing a kiss affection face infatuation kiss blowing kiss heart love lips like love valentines"
    },
    "kissing_smiling_eyes": {
        "unicode": "1F619",
        "shortname": ":kissing_smiling_eyes:",
        "aliases": "",
        "keywords": "kissing face with smiling eyes affection face infatuation valentines kissing kiss smile pucker lips smooch"
    },
    "kissing_closed_eyes": {
        "unicode": "1F61A",
        "shortname": ":kissing_closed_eyes:",
        "aliases": "",
        "keywords": "kissing face with closed eyes affection face infatuation like love valentines kissing kiss passion puckered heart love smooch"
    },
    "stuck_out_tongue": {
        "unicode": "1F61B",
        "shortname": ":stuck_out_tongue:",
        "aliases": "",
        "keywords": "face with stuck-out tongue childish face mischievous playful prank tongue silly playful cheeky"
    },
    "stuck_out_tongue_winking_eye": {
        "unicode": "1F61C",
        "shortname": ":stuck_out_tongue_winking_eye:",
        "aliases": "",
        "keywords": "face with stuck-out tongue and winking eye childish face mischievous playful prank tongue wink winking kidding silly playful crazy"
    },
    "stuck_out_tongue_closed_eyes": {
        "unicode": "1F61D",
        "shortname": ":stuck_out_tongue_closed_eyes:",
        "aliases": "",
        "keywords": "face with stuck-out tongue and tightly-closed eyes face mischievous playful prank tongue kidding silly playful ecstatic"
    },
    "disappointed": {
        "unicode": "1F61E",
        "shortname": ":disappointed:",
        "aliases": "",
        "keywords": "disappointed face disappointed disappoint frown depressed discouraged face sad upset"
    },
    "worried": {
        "unicode": "1F61F",
        "shortname": ":worried:",
        "aliases": "",
        "keywords": "worried face concern face nervous worried anxious distressed nervous tense"
    },
    "angry": {
        "unicode": "1F620",
        "shortname": ":angry:",
        "aliases": "",
        "keywords": "angry face angry livid mad vexed irritated annoyed face frustrated mad"
    },
    "rage": {
        "unicode": "1F621",
        "shortname": ":rage:",
        "aliases": "",
        "keywords": "pouting face angry despise hate mad pout anger rage irate"
    },
    "cry": {
        "unicode": "1F622",
        "shortname": ":cry:",
        "aliases": "",
        "keywords": "crying face face sad sad cry tear weep tears"
    },
    "persevere": {
        "unicode": "1F623",
        "shortname": ":persevere:",
        "aliases": "",
        "keywords": "persevering face endure persevere face no sick upset"
    },
    "triumph": {
        "unicode": "1F624",
        "shortname": ":triumph:",
        "aliases": "",
        "keywords": "face with look of triumph face gas phew triumph steam breath"
    },
    "disappointed_relieved": {
        "unicode": "1F625",
        "shortname": ":disappointed_relieved:",
        "aliases": "",
        "keywords": "disappointed but relieved face face nervous phew sweat disappoint relief"
    },
    "frowning": {
        "unicode": "1F626",
        "shortname": ":frowning:",
        "aliases": "",
        "keywords": "frowning face with open mouth aw face frown sad pout sulk glower"
    },
    "anguished": {
        "unicode": "1F627",
        "shortname": ":anguished:",
        "aliases": "",
        "keywords": "anguished face face nervous stunned pain anguish ouch misery distress grief"
    },
    "fearful": {
        "unicode": "1F628",
        "shortname": ":fearful:",
        "aliases": "",
        "keywords": "fearful face face nervous oops scared terrified fear fearful scared frightened"
    },
    "weary": {
        "unicode": "1F629",
        "shortname": ":weary:",
        "aliases": "",
        "keywords": "weary face face frustrated sad sleepy tired weary sleepy tired tiredness study finals school exhausted"
    },
    "sleepy": {
        "unicode": "1F62A",
        "shortname": ":sleepy:",
        "aliases": "",
        "keywords": "sleepy face face rest tired sleepy tired exhausted"
    },
    "tired_face": {
        "unicode": "1F62B",
        "shortname": ":tired_face:",
        "aliases": "",
        "keywords": "tired face face frustrated sick upset whine exhausted sleepy tired"
    },
    "grimacing": {
        "unicode": "1F62C",
        "shortname": ":grimacing:",
        "aliases": "",
        "keywords": "grimacing face face grimace teeth grimace disapprove pain"
    },
    "sob": {
        "unicode": "1F62D",
        "shortname": ":sob:",
        "aliases": "",
        "keywords": "loudly crying face cry face sad tears upset cry sob tears sad melancholy morn somber hurt"
    },
    "open_mouth": {
        "unicode": "1F62E",
        "shortname": ":open_mouth:",
        "aliases": "",
        "keywords": "face with open mouth face impressed mouth open jaw gapping surprise wow"
    },
    "hushed": {
        "unicode": "1F62F",
        "shortname": ":hushed:",
        "aliases": "",
        "keywords": "hushed face face woo quiet hush whisper silent"
    },
    "cold_sweat": {
        "unicode": "1F630",
        "shortname": ":cold_sweat:",
        "aliases": "",
        "keywords": "face with open mouth and cold sweat face nervous sweat exasperated frustrated"
    },
    "scream": {
        "unicode": "1F631",
        "shortname": ":scream:",
        "aliases": "",
        "keywords": "face screaming in fear face munch scream painting artist alien"
    },
    "astonished": {
        "unicode": "1F632",
        "shortname": ":astonished:",
        "aliases": "",
        "keywords": "astonished face face xox shocked surprise astonished"
    },
    "flushed": {
        "unicode": "1F633",
        "shortname": ":flushed:",
        "aliases": "",
        "keywords": "flushed face blush face flattered flush blush red pink cheeks shy"
    },
    "sleeping": {
        "unicode": "1F634",
        "shortname": ":sleeping:",
        "aliases": "",
        "keywords": "sleeping face face sleepy tired sleep sleepy sleeping snore"
    },
    "dizzy_face": {
        "unicode": "1F635",
        "shortname": ":dizzy_face:",
        "aliases": "",
        "keywords": "dizzy face dizzy drunk inebriated face spent unconscious xox"
    },
    "no_mouth": {
        "unicode": "1F636",
        "shortname": ":no_mouth:",
        "aliases": "",
        "keywords": "face without mouth face hellokitty mouth silent vapid"
    },
    "mask": {
        "unicode": "1F637",
        "shortname": ":mask:",
        "aliases": "",
        "keywords": "face with medical mask face ill sick sick virus flu medical mask"
    },
    "slight_frown": {
        "unicode": "1F641",
        "shortname": ":slight_frown:",
        "aliases": ":slightly_frowning_face:",
        "keywords": "slightly frowning face "
    },
    "slight_smile": {
        "unicode": "1F642",
        "shortname": ":slight_smile:",
        "aliases": ":slightly_smiling_face:",
        "keywords": "slightly smiling face "
    },
    "smile_cat": {
        "unicode": "1F638",
        "shortname": ":smile_cat:",
        "aliases": "",
        "keywords": "grinning cat face with smiling eyes animal cats cat smile grin grinning"
    },
    "joy_cat": {
        "unicode": "1F639",
        "shortname": ":joy_cat:",
        "aliases": "",
        "keywords": "cat face with tears of joy animal cats haha happy tears happy tears cry joy"
    },
    "smiley_cat": {
        "unicode": "1F63A",
        "shortname": ":smiley_cat:",
        "aliases": "",
        "keywords": "smiling cat face with open mouth animal cats happy smile smiley cat happy"
    },
    "heart_eyes_cat": {
        "unicode": "1F63B",
        "shortname": ":heart_eyes_cat:",
        "aliases": "",
        "keywords": "smiling cat face with heart-shaped eyes affection animal cats like love valentines lovestruck love heart"
    },
    "smirk_cat": {
        "unicode": "1F63C",
        "shortname": ":smirk_cat:",
        "aliases": "",
        "keywords": "cat face with wry smile animal cats smirk smirking wry confident confidence"
    },
    "kissing_cat": {
        "unicode": "1F63D",
        "shortname": ":kissing_cat:",
        "aliases": "",
        "keywords": "kissing cat face with closed eyes animal cats passion kiss puckered heart love"
    },
    "pouting_cat": {
        "unicode": "1F63E",
        "shortname": ":pouting_cat:",
        "aliases": "",
        "keywords": "pouting cat face animal cats pout annoyed miffed glower frown"
    },
    "crying_cat_face": {
        "unicode": "1F63F",
        "shortname": ":crying_cat_face:",
        "aliases": "",
        "keywords": "crying cat face animal cats sad tears weep cry cat sob tears sad melancholy morn somber hurt"
    },
    "scream_cat": {
        "unicode": "1F640",
        "shortname": ":scream_cat:",
        "aliases": "",
        "keywords": "weary cat face animal cats munch weary sleepy tired tiredness study finals school exhausted scream painting artist"
    },
    "footprints": {
        "unicode": "1F463",
        "shortname": ":footprints:",
        "aliases": "",
        "keywords": "footprints feet"
    },
    "bust_in_silhouette": {
        "unicode": "1F464",
        "shortname": ":bust_in_silhouette:",
        "aliases": "",
        "keywords": "bust in silhouette human man person user silhouette person user member account guest icon avatar profile me myself i"
    },
    "busts_in_silhouette": {
        "unicode": "1F465",
        "shortname": ":busts_in_silhouette:",
        "aliases": "",
        "keywords": "busts in silhouette group human man person team user silhouette silhouettes people user members accounts relationship shadow"
    },
    "levitate": {
        "unicode": "1F574",
        "shortname": ":levitate:",
        "aliases": ":man_in_business_suit_levitating:",
        "keywords": "man in business suit levitating "
    },
    "spy": {
        "unicode": "1F575",
        "shortname": ":spy:",
        "aliases": ":sleuth_or_spy:",
        "keywords": "sleuth or spy "
    },
    "baby": {
        "unicode": "1F476",
        "shortname": ":baby:",
        "aliases": "",
        "keywords": "baby boy child infant"
    },
    "boy": {
        "unicode": "1F466",
        "shortname": ":boy:",
        "aliases": "",
        "keywords": "boy guy male man"
    },
    "girl": {
        "unicode": "1F467",
        "shortname": ":girl:",
        "aliases": "",
        "keywords": "girl female woman"
    },
    "man": {
        "unicode": "1F468",
        "shortname": ":man:",
        "aliases": "",
        "keywords": "man classy dad father guy mustashe"
    },
    "woman": {
        "unicode": "1F469",
        "shortname": ":woman:",
        "aliases": "",
        "keywords": "woman female girls"
    },
    "family": {
        "unicode": "1F46A",
        "shortname": ":family:",
        "aliases": "",
        "keywords": "family child dad father home mom mother parents family mother father child girl boy group unit"
    },
    "family_mwg": {
        "unicode": "1F468-1F469-1F467",
        "shortname": ":family_mwg:",
        "aliases": "",
        "keywords": "family(man,woman,girl) "
    },
    "family_mwgb": {
        "unicode": "1F468-1F469-1F467-1F466",
        "shortname": ":family_mwgb:",
        "aliases": "",
        "keywords": "family(man,woman,girl,boy) "
    },
    "family_mwbb": {
        "unicode": "1F468-1F469-1F466-1F466",
        "shortname": ":family_mwbb:",
        "aliases": "",
        "keywords": "family(man,woman,boy,boy) "
    },
    "family_mwgg": {
        "unicode": "1F468-1F469-1F467-1F467",
        "shortname": ":family_mwgg:",
        "aliases": "",
        "keywords": "family(man,woman,girl,girl) "
    },
    "family_wwb": {
        "unicode": "1F469-1F469-1F466",
        "shortname": ":family_wwb:",
        "aliases": "",
        "keywords": "family(woman,woman,boy) "
    },
    "family_wwg": {
        "unicode": "1F469-1F469-1F467",
        "shortname": ":family_wwg:",
        "aliases": "",
        "keywords": "family(woman,woman,girl) "
    },
    "family_wwgb": {
        "unicode": "1F469-1F469-1F467-1F466",
        "shortname": ":family_wwgb:",
        "aliases": "",
        "keywords": "family(woman,woman,girl,boy) "
    },
    "family_wwbb": {
        "unicode": "1F469-1F469-1F466-1F466",
        "shortname": ":family_wwbb:",
        "aliases": "",
        "keywords": "family(woman,woman,boy,boy) "
    },
    "family_wwgg": {
        "unicode": "1F469-1F469-1F467-1F467",
        "shortname": ":family_wwgg:",
        "aliases": "",
        "keywords": "family(woman,woman,girl,girl) "
    },
    "family_mmb": {
        "unicode": "1F468-1F468-1F466",
        "shortname": ":family_mmb:",
        "aliases": "",
        "keywords": "family(man,man,boy) "
    },
    "family_mmg": {
        "unicode": "1F468-1F468-1F467",
        "shortname": ":family_mmg:",
        "aliases": "",
        "keywords": "family(man,man,girl) "
    },
    "family_mmgb": {
        "unicode": "1F468-1F468-1F467-1F466",
        "shortname": ":family_mmgb:",
        "aliases": "",
        "keywords": "family(man,man,girl,boy) "
    },
    "family_mmbb": {
        "unicode": "1F468-1F468-1F466-1F466",
        "shortname": ":family_mmbb:",
        "aliases": "",
        "keywords": "family(man,man,boy,boy) "
    },
    "family_mmgg": {
        "unicode": "1F468-1F468-1F467-1F467",
        "shortname": ":family_mmgg:",
        "aliases": "",
        "keywords": "family(man,man,girl,girl) "
    },
    "couple": {
        "unicode": "1F46B",
        "shortname": ":couple:",
        "aliases": "",
        "keywords": "man and woman holding hands affection date dating human like love marriage people valentines"
    },
    "two_men_holding_hands": {
        "unicode": "1F46C",
        "shortname": ":two_men_holding_hands:",
        "aliases": "",
        "keywords": "two men holding hands bromance couple friends like love men gay homosexual friends hands holding team unity"
    },
    "two_women_holding_hands": {
        "unicode": "1F46D",
        "shortname": ":two_women_holding_hands:",
        "aliases": "",
        "keywords": "two women holding hands couple female friends like love women hands girlfriends friends sisters mother daughter gay homosexual couple unity"
    },
    "dancers": {
        "unicode": "1F46F",
        "shortname": ":dancers:",
        "aliases": "",
        "keywords": "woman with bunny ears bunny female girls women dancing dancers showgirl playboy costume bunny cancan"
    },
    "bride_with_veil": {
        "unicode": "1F470",
        "shortname": ":bride_with_veil:",
        "aliases": "",
        "keywords": "bride with veil couple marriage wedding bride wedding planning veil gown dress engagement white"
    },
    "person_with_blond_hair": {
        "unicode": "1F471",
        "shortname": ":person_with_blond_hair:",
        "aliases": "",
        "keywords": "person with blond hair male man blonde young western westerner occidental"
    },
    "man_with_gua_pi_mao": {
        "unicode": "1F472",
        "shortname": ":man_with_gua_pi_mao:",
        "aliases": "",
        "keywords": "man with gua pi mao boy male skullcap chinese asian qing"
    },
    "man_with_turban": {
        "unicode": "1F473",
        "shortname": ":man_with_turban:",
        "aliases": "",
        "keywords": "man with turban male turban headdress headwear pagri india indian mummy wisdom peace"
    },
    "older_man": {
        "unicode": "1F474",
        "shortname": ":older_man:",
        "aliases": "",
        "keywords": "older man human male men"
    },
    "older_woman": {
        "unicode": "1F475",
        "shortname": ":older_woman:",
        "aliases": ":grandma:",
        "keywords": "older woman female girl women grandma grandmother"
    },
    "cop": {
        "unicode": "1F46E",
        "shortname": ":cop:",
        "aliases": "",
        "keywords": "police officer arrest enforcement law man police"
    },
    "construction_worker": {
        "unicode": "1F477",
        "shortname": ":construction_worker:",
        "aliases": "",
        "keywords": "construction worker human male man wip"
    },
    "princess": {
        "unicode": "1F478",
        "shortname": ":princess:",
        "aliases": "",
        "keywords": "princess blond crown female girl woman princess royal royalty king queen daughter disney high-maintenance"
    },
    "guardsman": {
        "unicode": "1F482",
        "shortname": ":guardsman:",
        "aliases": "",
        "keywords": "guardsman british gb male man uk guardsman guard bearskin hat british queen ceremonial military"
    },
    "angel": {
        "unicode": "1F47C",
        "shortname": ":angel:",
        "aliases": "",
        "keywords": "baby angel baby angel halo cupid wings halo heaven wings jesus"
    },
    "santa": {
        "unicode": "1F385",
        "shortname": ":santa:",
        "aliases": "",
        "keywords": "father christmas christmas father christmas festival male man xmas santa saint nick jolly ho ho ho north pole presents gifts naughty nice sleigh father christmas holiday"
    },
    "ghost": {
        "unicode": "1F47B",
        "shortname": ":ghost:",
        "aliases": "",
        "keywords": "ghost halloween"
    },
    "japanese_ogre": {
        "unicode": "1F479",
        "shortname": ":japanese_ogre:",
        "aliases": "",
        "keywords": "japanese ogre monster japanese oni demon troll ogre folklore monster devil mask theater horns teeth"
    },
    "japanese_goblin": {
        "unicode": "1F47A",
        "shortname": ":japanese_goblin:",
        "aliases": "",
        "keywords": "japanese goblin evil mask red japanese tengu supernatural avian demon goblin mask theater nose frown mustache anger frustration"
    },
    "poop": {
        "unicode": "1F4A9",
        "shortname": ":poop:",
        "aliases": ":shit: :hankey: :poo:",
        "keywords": "pile of poo poop shit shitface turd poo"
    },
    "skull": {
        "unicode": "1F480",
        "shortname": ":skull:",
        "aliases": ":skeleton:",
        "keywords": "skull dead skeleton dying"
    },
    "alien": {
        "unicode": "1F47D",
        "shortname": ":alien:",
        "aliases": "",
        "keywords": "extraterrestrial alien UFO paul alien ufo"
    },
    "space_invader": {
        "unicode": "1F47E",
        "shortname": ":space_invader:",
        "aliases": "",
        "keywords": "alien monster arcade game"
    },
    "bow": {
        "unicode": "1F647",
        "shortname": ":bow:",
        "aliases": "",
        "keywords": "person bowing deeply boy male man sorry bow respect curtsy bend"
    },
    "information_desk_person": {
        "unicode": "1F481",
        "shortname": ":information_desk_person:",
        "aliases": "",
        "keywords": "information desk person female girl human woman information help question answer sassy unimpressed attitude snarky"
    },
    "no_good": {
        "unicode": "1F645",
        "shortname": ":no_good:",
        "aliases": "",
        "keywords": "face with no good gesture female girl woman no stop nope don't not"
    },
    "ok_woman": {
        "unicode": "1F646",
        "shortname": ":ok_woman:",
        "aliases": "",
        "keywords": "face with ok gesture female girl human pink women yes ok okay accept"
    },
    "raising_hand": {
        "unicode": "1F64B",
        "shortname": ":raising_hand:",
        "aliases": "",
        "keywords": "happy person raising one hand female girl woman hand raise notice attention answer"
    },
    "person_with_pouting_face": {
        "unicode": "1F64E",
        "shortname": ":person_with_pouting_face:",
        "aliases": "",
        "keywords": "person with pouting face female girl woman pout sexy cute annoyed"
    },
    "person_frowning": {
        "unicode": "1F64D",
        "shortname": ":person_frowning:",
        "aliases": "",
        "keywords": "person frowning female girl woman dejected rejected sad frown"
    },
    "massage": {
        "unicode": "1F486",
        "shortname": ":massage:",
        "aliases": "",
        "keywords": "face massage female girl woman"
    },
    "haircut": {
        "unicode": "1F487",
        "shortname": ":haircut:",
        "aliases": "",
        "keywords": "haircut female girl woman"
    },
    "couple_with_heart": {
        "unicode": "1F491",
        "shortname": ":couple_with_heart:",
        "aliases": "",
        "keywords": "couple with heart affection dating human like love marriage valentines"
    },
    "couple_ww": {
        "unicode": "1F469-2764-1F469",
        "shortname": ":couple_ww:",
        "aliases": ":couple_with_heart_ww:",
        "keywords": "couple(woman,woman) "
    },
    "couple_mm": {
        "unicode": "1F468-2764-1F468",
        "shortname": ":couple_mm:",
        "aliases": ":couple_with_heart_mm:",
        "keywords": "couple(man,man) "
    },
    "couplekiss": {
        "unicode": "1F48F",
        "shortname": ":couplekiss:",
        "aliases": "",
        "keywords": "kiss dating like love marriage valentines"
    },
    "kiss_ww": {
        "unicode": "1F469-2764-1F48B-1F469",
        "shortname": ":kiss_ww:",
        "aliases": ":couplekiss_ww:",
        "keywords": "kiss(woman,woman) "
    },
    "kiss_mm": {
        "unicode": "1F468-2764-1F48B-1F468",
        "shortname": ":kiss_mm:",
        "aliases": ":couplekiss_mm:",
        "keywords": "kiss(man,man) "
    },
    "raised_hands": {
        "unicode": "1F64C",
        "shortname": ":raised_hands:",
        "aliases": "",
        "keywords": "person raising both hands in celebration gesture hooray winning woot yay banzai"
    },
    "clap": {
        "unicode": "1F44F",
        "shortname": ":clap:",
        "aliases": "",
        "keywords": "clapping hands sign applause congrats hands praise clapping appreciation approval sound encouragement enthusiasm"
    },
    "ear": {
        "unicode": "1F442",
        "shortname": ":ear:",
        "aliases": "",
        "keywords": "ear face hear listen sound"
    },
    "eye": {
        "unicode": "1F441",
        "shortname": ":eye:",
        "aliases": "",
        "keywords": "eye "
    },
    "eyes": {
        "unicode": "1F440",
        "shortname": ":eyes:",
        "aliases": "",
        "keywords": "eyes look peek stalk watch"
    },
    "nose": {
        "unicode": "1F443",
        "shortname": ":nose:",
        "aliases": "",
        "keywords": "nose smell sniff"
    },
    "lips": {
        "unicode": "1F444",
        "shortname": ":lips:",
        "aliases": "",
        "keywords": "mouth kiss mouth"
    },
    "lips2": {
        "unicode": "1F5E2",
        "shortname": ":lips2:",
        "aliases": "",
        "keywords": "lips "
    },
    "kiss": {
        "unicode": "1F48B",
        "shortname": ":kiss:",
        "aliases": "",
        "keywords": "kiss mark affection face like lips love valentines"
    },
    "tongue": {
        "unicode": "1F445",
        "shortname": ":tongue:",
        "aliases": "",
        "keywords": "tongue mouth playful tongue mouth taste buds food silly playful tease kiss french kiss lick tasty playfulness silliness intimacy"
    },
    "nail_care": {
        "unicode": "1F485",
        "shortname": ":nail_care:",
        "aliases": "",
        "keywords": "nail polish beauty manicure"
    },
    "wave": {
        "unicode": "1F44B",
        "shortname": ":wave:",
        "aliases": "",
        "keywords": "waving hand sign farewell gesture goodbye hands solong"
    },
    "thumbsup": {
        "unicode": "1F44D",
        "shortname": ":thumbsup:",
        "aliases": ":+1:",
        "keywords": "thumbs up sign cool hand like yes"
    },
    "thumbsdown": {
        "unicode": "1F44E",
        "shortname": ":thumbsdown:",
        "aliases": ":-1:",
        "keywords": "thumbs down sign hand no"
    },
    "point_up": {
        "unicode": "261D",
        "shortname": ":point_up:",
        "aliases": "",
        "keywords": "white up pointing index direction fingers hand"
    },
    "point_up_2": {
        "unicode": "1F446",
        "shortname": ":point_up_2:",
        "aliases": "",
        "keywords": "white up pointing backhand index direction fingers hand"
    },
    "point_down": {
        "unicode": "1F447",
        "shortname": ":point_down:",
        "aliases": "",
        "keywords": "white down pointing backhand index direction fingers hand"
    },
    "point_left": {
        "unicode": "1F448",
        "shortname": ":point_left:",
        "aliases": "",
        "keywords": "white left pointing backhand index direction fingers hand"
    },
    "point_right": {
        "unicode": "1F449",
        "shortname": ":point_right:",
        "aliases": "",
        "keywords": "white right pointing backhand index direction fingers hand"
    },
    "ok_hand": {
        "unicode": "1F44C",
        "shortname": ":ok_hand:",
        "aliases": "",
        "keywords": "ok hand sign fingers limbs perfect okay ok smoke smoking marijuana joint pot 420"
    },
    "v": {
        "unicode": "270C",
        "shortname": ":v:",
        "aliases": "",
        "keywords": "victory hand fingers hand ohyeah peace two victory"
    },
    "punch": {
        "unicode": "1F44A",
        "shortname": ":punch:",
        "aliases": "",
        "keywords": "fisted hand sign fist hand"
    },
    "fist": {
        "unicode": "270A",
        "shortname": ":fist:",
        "aliases": "",
        "keywords": "raised fist fingers grasp hand"
    },
    "raised_hand": {
        "unicode": "270B",
        "shortname": ":raised_hand:",
        "aliases": "",
        "keywords": "raised hand female girl woman"
    },
    "muscle": {
        "unicode": "1F4AA",
        "shortname": ":muscle:",
        "aliases": "",
        "keywords": "flexed biceps arm flex hand strong muscle bicep"
    },
    "open_hands": {
        "unicode": "1F450",
        "shortname": ":open_hands:",
        "aliases": "",
        "keywords": "open hands sign butterfly fingers"
    },
    "writing_hand": {
        "unicode": "1F58E",
        "shortname": ":writing_hand:",
        "aliases": ":left_writing_hand:",
        "keywords": "left writing hand "
    },
    "turned_ok_hand": {
        "unicode": "1F58F",
        "shortname": ":turned_ok_hand:",
        "aliases": ":turned_ok_hand_sign:",
        "keywords": "turned ok hand sign "
    },
    "hand_splayed": {
        "unicode": "1F590",
        "shortname": ":hand_splayed:",
        "aliases": ":raised_hand_with_fingers_splayed:",
        "keywords": "raised hand with fingers splayed "
    },
    "hand_splayed_reverse": {
        "unicode": "1F591",
        "shortname": ":hand_splayed_reverse:",
        "aliases": ":reversed_raised_hand_with_fingers_splayed:",
        "keywords": "reversed raised hand with fingers splayed "
    },
    "thumbs_up_reverse": {
        "unicode": "1F592",
        "shortname": ":thumbs_up_reverse:",
        "aliases": ":reversed_thumbs_up_sign:",
        "keywords": "reversed thumbs up sign "
    },
    "thumbs_down_reverse": {
        "unicode": "1F593",
        "shortname": ":thumbs_down_reverse:",
        "aliases": ":reversed_thumbs_down_sign:",
        "keywords": "reversed thumbs down sign "
    },
    "hand_victory": {
        "unicode": "1F594",
        "shortname": ":hand_victory:",
        "aliases": ":reversed_victory_hand:",
        "keywords": "reversed victory hand "
    },
    "middle_finger": {
        "unicode": "1F595",
        "shortname": ":middle_finger:",
        "aliases": ":reversed_hand_with_middle_finger_extended:",
        "keywords": "reversed hand with middle finger extended "
    },
    "vulcan": {
        "unicode": "1F596",
        "shortname": ":vulcan:",
        "aliases": ":raised_hand_with_part_between_middle_and_ring_fingers:",
        "keywords": "raised hand with part between middle and ring fingers "
    },
    "finger_pointing_down": {
        "unicode": "1F597",
        "shortname": ":finger_pointing_down:",
        "aliases": ":white_down_pointing_left_hand_index:",
        "keywords": "white down pointing left hand index "
    },
    "finger_pointing_left": {
        "unicode": "1F598",
        "shortname": ":finger_pointing_left:",
        "aliases": ":sideways_white_left_pointing_index:",
        "keywords": "sideways white left pointing index "
    },
    "finger_pointing_right": {
        "unicode": "1F599",
        "shortname": ":finger_pointing_right:",
        "aliases": ":sideways_white_right_pointing_index:",
        "keywords": "sideways white right pointing index "
    },
    "finger_pointing_up": {
        "unicode": "1F59E",
        "shortname": ":finger_pointing_up:",
        "aliases": ":sideways_white_up_pointing_index:",
        "keywords": "sideways white up pointing index "
    },
    "finger_pointing_down2": {
        "unicode": "1F59F",
        "shortname": ":finger_pointing_down2:",
        "aliases": ":sideways_white_down_pointing_index:",
        "keywords": "sideways white down pointing index "
    },
    "pray": {
        "unicode": "1F64F",
        "shortname": ":pray:",
        "aliases": "",
        "keywords": "person with folded hands highfive hope namaste please wish pray high five hands sorrow regret sorry"
    },
    "seedling": {
        "unicode": "1F331",
        "shortname": ":seedling:",
        "aliases": "",
        "keywords": "seedling grass lawn nature plant seedling plant new start grow"
    },
    "evergreen_tree": {
        "unicode": "1F332",
        "shortname": ":evergreen_tree:",
        "aliases": "",
        "keywords": "evergreen tree nature plant evergreen tree needles christmas"
    },
    "deciduous_tree": {
        "unicode": "1F333",
        "shortname": ":deciduous_tree:",
        "aliases": "",
        "keywords": "deciduous tree nature plant deciduous tree leaves fall color"
    },
    "palm_tree": {
        "unicode": "1F334",
        "shortname": ":palm_tree:",
        "aliases": "",
        "keywords": "palm tree nature plant vegetable palm tree coconuts fronds warm tropical"
    },
    "cactus": {
        "unicode": "1F335",
        "shortname": ":cactus:",
        "aliases": "",
        "keywords": "cactus nature plant vegetable cactus desert drought spike poke"
    },
    "tulip": {
        "unicode": "1F337",
        "shortname": ":tulip:",
        "aliases": "",
        "keywords": "tulip flowers nature plant tulip flower bulb spring easter"
    },
    "cherry_blossom": {
        "unicode": "1F338",
        "shortname": ":cherry_blossom:",
        "aliases": "",
        "keywords": "cherry blossom flower nature plant cherry blossom tree flower"
    },
    "rose": {
        "unicode": "1F339",
        "shortname": ":rose:",
        "aliases": "",
        "keywords": "rose flowers love valentines rose fragrant flower thorns love petals romance"
    },
    "hibiscus": {
        "unicode": "1F33A",
        "shortname": ":hibiscus:",
        "aliases": "",
        "keywords": "hibiscus flowers plant vegetable hibiscus flower warm"
    },
    "sunflower": {
        "unicode": "1F33B",
        "shortname": ":sunflower:",
        "aliases": "",
        "keywords": "sunflower nature plant sunflower sun flower seeds yellow"
    },
    "blossom": {
        "unicode": "1F33C",
        "shortname": ":blossom:",
        "aliases": "",
        "keywords": "blossom flowers nature yellow blossom daisy flower"
    },
    "bouquet": {
        "unicode": "1F490",
        "shortname": ":bouquet:",
        "aliases": "",
        "keywords": "bouquet flowers nature"
    },
    "ear_of_rice": {
        "unicode": "1F33E",
        "shortname": ":ear_of_rice:",
        "aliases": "",
        "keywords": "ear of rice nature plant ear rice food plant seed"
    },
    "herb": {
        "unicode": "1F33F",
        "shortname": ":herb:",
        "aliases": "",
        "keywords": "herb grass lawn medicine plant vegetable weed herb spice plant cook cooking"
    },
    "four_leaf_clover": {
        "unicode": "1F340",
        "shortname": ":four_leaf_clover:",
        "aliases": "",
        "keywords": "four leaf clover lucky nature plant vegetable clover four leaf luck irish saint patrick green"
    },
    "maple_leaf": {
        "unicode": "1F341",
        "shortname": ":maple_leaf:",
        "aliases": "",
        "keywords": "maple leaf canada nature plant vegetable maple leaf syrup canada tree"
    },
    "fallen_leaf": {
        "unicode": "1F342",
        "shortname": ":fallen_leaf:",
        "aliases": "",
        "keywords": "fallen leaf leaves nature plant vegetable leaf fall color deciduous autumn"
    },
    "leaves": {
        "unicode": "1F343",
        "shortname": ":leaves:",
        "aliases": "",
        "keywords": "leaf fluttering in wind grass lawn nature plant tree vegetable leaves leaf wind float fluttering"
    },
    "mushroom": {
        "unicode": "1F344",
        "shortname": ":mushroom:",
        "aliases": "",
        "keywords": "mushroom plant vegetable mushroom fungi food fungus"
    },
    "chestnut": {
        "unicode": "1F330",
        "shortname": ":chestnut:",
        "aliases": "",
        "keywords": "chestnut food squirrel chestnut roasted food tree"
    },
    "rat": {
        "unicode": "1F400",
        "shortname": ":rat:",
        "aliases": "",
        "keywords": "rat animal mouse rat rodent crooked snitch"
    },
    "mouse2": {
        "unicode": "1F401",
        "shortname": ":mouse2:",
        "aliases": "",
        "keywords": "mouse animal nature mouse mice rodent"
    },
    "mouse": {
        "unicode": "1F42D",
        "shortname": ":mouse:",
        "aliases": "",
        "keywords": "mouse face animal nature"
    },
    "hamster": {
        "unicode": "1F439",
        "shortname": ":hamster:",
        "aliases": "",
        "keywords": "hamster face animal nature"
    },
    "ox": {
        "unicode": "1F402",
        "shortname": ":ox:",
        "aliases": "",
        "keywords": "ox animal beef cow bull"
    },
    "water_buffalo": {
        "unicode": "1F403",
        "shortname": ":water_buffalo:",
        "aliases": "",
        "keywords": "water buffalo animal cow nature ox water buffalo asia bovine milk dairy"
    },
    "cow2": {
        "unicode": "1F404",
        "shortname": ":cow2:",
        "aliases": "",
        "keywords": "cow animal beef nature ox cow milk dairy beef bessie moo"
    },
    "cow": {
        "unicode": "1F42E",
        "shortname": ":cow:",
        "aliases": "",
        "keywords": "cow face animal beef ox"
    },
    "tiger2": {
        "unicode": "1F405",
        "shortname": ":tiger2:",
        "aliases": "",
        "keywords": "tiger animal nature tiger cat striped tony tigger hobs"
    },
    "leopard": {
        "unicode": "1F406",
        "shortname": ":leopard:",
        "aliases": "",
        "keywords": "leopard animal nature leopard cat spot spotted sexy"
    },
    "tiger": {
        "unicode": "1F42F",
        "shortname": ":tiger:",
        "aliases": "",
        "keywords": "tiger face animal"
    },
    "chipmunk": {
        "unicode": "1F43F",
        "shortname": ":chipmunk:",
        "aliases": "",
        "keywords": "chipmunk "
    },
    "rabbit2": {
        "unicode": "1F407",
        "shortname": ":rabbit2:",
        "aliases": "",
        "keywords": "rabbit animal nature rabbit bunny easter reproduction prolific"
    },
    "rabbit": {
        "unicode": "1F430",
        "shortname": ":rabbit:",
        "aliases": "",
        "keywords": "rabbit face animal nature"
    },
    "cat2": {
        "unicode": "1F408",
        "shortname": ":cat2:",
        "aliases": "",
        "keywords": "cat animal meow pet cat kitten meow"
    },
    "cat": {
        "unicode": "1F431",
        "shortname": ":cat:",
        "aliases": "",
        "keywords": "cat face animal meow"
    },
    "racehorse": {
        "unicode": "1F40E",
        "shortname": ":racehorse:",
        "aliases": "",
        "keywords": "horse animal gamble horse powerful draft calvary cowboy cowgirl mounted race ride gallop trot colt filly mare stallion gelding yearling thoroughbred pony"
    },
    "horse": {
        "unicode": "1F434",
        "shortname": ":horse:",
        "aliases": "",
        "keywords": "horse face animal brown"
    },
    "ram": {
        "unicode": "1F40F",
        "shortname": ":ram:",
        "aliases": "",
        "keywords": "ram animal nature sheep ram sheep male horn horns"
    },
    "sheep": {
        "unicode": "1F411",
        "shortname": ":sheep:",
        "aliases": "",
        "keywords": "sheep animal nature sheep wool flock follower ewe female lamb"
    },
    "goat": {
        "unicode": "1F410",
        "shortname": ":goat:",
        "aliases": "",
        "keywords": "goat animal nature goat sheep kid billy livestock"
    },
    "rooster": {
        "unicode": "1F413",
        "shortname": ":rooster:",
        "aliases": "",
        "keywords": "rooster animal chicken nature rooster cockerel cock male cock-a-doodle-doo crowing"
    },
    "chicken": {
        "unicode": "1F414",
        "shortname": ":chicken:",
        "aliases": "",
        "keywords": "chicken animal cluck chicken hen poultry livestock"
    },
    "baby_chick": {
        "unicode": "1F424",
        "shortname": ":baby_chick:",
        "aliases": "",
        "keywords": "baby chick animal chicken chick baby bird chicken young woman cute"
    },
    "hatching_chick": {
        "unicode": "1F423",
        "shortname": ":hatching_chick:",
        "aliases": "",
        "keywords": "hatching chick born chicken egg chick egg baby bird chicken young woman cute"
    },
    "hatched_chick": {
        "unicode": "1F425",
        "shortname": ":hatched_chick:",
        "aliases": "",
        "keywords": "front-facing baby chick baby chicken chick baby bird chicken young woman cute"
    },
    "bird": {
        "unicode": "1F426",
        "shortname": ":bird:",
        "aliases": "",
        "keywords": "bird animal fly nature tweet"
    },
    "penguin": {
        "unicode": "1F427",
        "shortname": ":penguin:",
        "aliases": "",
        "keywords": "penguin animal nature"
    },
    "elephant": {
        "unicode": "1F418",
        "shortname": ":elephant:",
        "aliases": "",
        "keywords": "elephant animal nature nose thailand"
    },
    "dromedary_camel": {
        "unicode": "1F42A",
        "shortname": ":dromedary_camel:",
        "aliases": "",
        "keywords": "dromedary camel animal desert hot dromedary camel hump desert middle east heat hot water hump day wednesday sex"
    },
    "camel": {
        "unicode": "1F42B",
        "shortname": ":camel:",
        "aliases": "",
        "keywords": "bactrian camel animal hot nature bactrian camel hump desert central asia heat hot water hump day wednesday sex"
    },
    "boar": {
        "unicode": "1F417",
        "shortname": ":boar:",
        "aliases": "",
        "keywords": "boar animal nature"
    },
    "pig2": {
        "unicode": "1F416",
        "shortname": ":pig2:",
        "aliases": "",
        "keywords": "pig animal nature pig piggy pork ham hog bacon oink slop livestock greed greedy"
    },
    "pig": {
        "unicode": "1F437",
        "shortname": ":pig:",
        "aliases": "",
        "keywords": "pig face animal oink"
    },
    "pig_nose": {
        "unicode": "1F43D",
        "shortname": ":pig_nose:",
        "aliases": "",
        "keywords": "pig nose animal oink pig nose snout food eat cute oink pink smell truffle"
    },
    "dog2": {
        "unicode": "1F415",
        "shortname": ":dog2:",
        "aliases": "",
        "keywords": "dog animal doge friend nature pet dog puppy pet friend woof bark fido"
    },
    "poodle": {
        "unicode": "1F429",
        "shortname": ":poodle:",
        "aliases": "",
        "keywords": "poodle 101 animal dog nature poodle dog clip showy sophisticated vain"
    },
    "dog": {
        "unicode": "1F436",
        "shortname": ":dog:",
        "aliases": "",
        "keywords": "dog face animal friend nature woof"
    },
    "wolf": {
        "unicode": "1F43A",
        "shortname": ":wolf:",
        "aliases": "",
        "keywords": "wolf face animal nature"
    },
    "bear": {
        "unicode": "1F43B",
        "shortname": ":bear:",
        "aliases": "",
        "keywords": "bear face animal nature"
    },
    "koala": {
        "unicode": "1F428",
        "shortname": ":koala:",
        "aliases": "",
        "keywords": "koala animal nature"
    },
    "panda_face": {
        "unicode": "1F43C",
        "shortname": ":panda_face:",
        "aliases": "",
        "keywords": "panda face animal nature panda bear face cub cute endearment friendship love bamboo china black white"
    },
    "monkey_face": {
        "unicode": "1F435",
        "shortname": ":monkey_face:",
        "aliases": "",
        "keywords": "monkey face animal nature"
    },
    "see_no_evil": {
        "unicode": "1F648",
        "shortname": ":see_no_evil:",
        "aliases": "",
        "keywords": "see-no-evil monkey animal monkey nature monkey see eyes vision sight mizaru"
    },
    "hear_no_evil": {
        "unicode": "1F649",
        "shortname": ":hear_no_evil:",
        "aliases": "",
        "keywords": "hear-no-evil monkey animal monkey monkey ears hear sound kikazaru"
    },
    "speak_no_evil": {
        "unicode": "1F64A",
        "shortname": ":speak_no_evil:",
        "aliases": "",
        "keywords": "speak-no-evil monkey animal monkey monkey mouth talk say words verbal verbalize oral iwazaru"
    },
    "monkey": {
        "unicode": "1F412",
        "shortname": ":monkey:",
        "aliases": "",
        "keywords": "monkey animal nature monkey primate banana silly"
    },
    "dragon": {
        "unicode": "1F409",
        "shortname": ":dragon:",
        "aliases": "",
        "keywords": "dragon animal chinese green myth nature dragon fire legendary myth"
    },
    "dragon_face": {
        "unicode": "1F432",
        "shortname": ":dragon_face:",
        "aliases": "",
        "keywords": "dragon face animal chinese green myth nature dragon head fire legendary myth"
    },
    "crocodile": {
        "unicode": "1F40A",
        "shortname": ":crocodile:",
        "aliases": "",
        "keywords": "crocodile animal nature crocodile croc alligator gator cranky"
    },
    "snake": {
        "unicode": "1F40D",
        "shortname": ":snake:",
        "aliases": "",
        "keywords": "snake animal evil"
    },
    "turtle": {
        "unicode": "1F422",
        "shortname": ":turtle:",
        "aliases": "",
        "keywords": "turtle animal slow turtle shell tortoise chelonian reptile slow snap steady"
    },
    "frog": {
        "unicode": "1F438",
        "shortname": ":frog:",
        "aliases": "",
        "keywords": "frog face animal nature"
    },
    "whale2": {
        "unicode": "1F40B",
        "shortname": ":whale2:",
        "aliases": "",
        "keywords": "whale animal nature ocean sea whale blubber bloated fat large massive"
    },
    "whale": {
        "unicode": "1F433",
        "shortname": ":whale:",
        "aliases": "",
        "keywords": "spouting whale animal nature ocean sea"
    },
    "dolphin": {
        "unicode": "1F42C",
        "shortname": ":dolphin:",
        "aliases": "",
        "keywords": "dolphin animal fins fish flipper nature ocean sea"
    },
    "octopus": {
        "unicode": "1F419",
        "shortname": ":octopus:",
        "aliases": "",
        "keywords": "octopus animal creature ocean sea"
    },
    "fish": {
        "unicode": "1F41F",
        "shortname": ":fish:",
        "aliases": "",
        "keywords": "fish animal food nature"
    },
    "tropical_fish": {
        "unicode": "1F420",
        "shortname": ":tropical_fish:",
        "aliases": "",
        "keywords": "tropical fish animal swim"
    },
    "blowfish": {
        "unicode": "1F421",
        "shortname": ":blowfish:",
        "aliases": "",
        "keywords": "blowfish food nature ocean sea blowfish pufferfish puffer ballonfish toadfish fugu fish sushi"
    },
    "shell": {
        "unicode": "1F41A",
        "shortname": ":shell:",
        "aliases": "",
        "keywords": "spiral shell beach nature sea shell spiral beach sand crab nautilus"
    },
    "snail": {
        "unicode": "1F40C",
        "shortname": ":snail:",
        "aliases": "",
        "keywords": "snail animal shell slow snail slow escargot french appetizer"
    },
    "bug": {
        "unicode": "1F41B",
        "shortname": ":bug:",
        "aliases": "",
        "keywords": "bug insect nature bug insect virus error"
    },
    "ant": {
        "unicode": "1F41C",
        "shortname": ":ant:",
        "aliases": "",
        "keywords": "ant animal insect ant queen insect team"
    },
    "bee": {
        "unicode": "1F41D",
        "shortname": ":bee:",
        "aliases": "",
        "keywords": "honeybee animal insect bee queen buzz flower pollen sting honey hive bumble pollination"
    },
    "beetle": {
        "unicode": "1F41E",
        "shortname": ":beetle:",
        "aliases": "",
        "keywords": "lady beetle insect nature lady bug ladybug ladybird beetle cow lady cow insect endearment"
    },
    "spider": {
        "unicode": "1F577",
        "shortname": ":spider:",
        "aliases": "",
        "keywords": "spider "
    },
    "spider_web": {
        "unicode": "1F578",
        "shortname": ":spider_web:",
        "aliases": "",
        "keywords": "spider_web "
    },
    "feet": {
        "unicode": "1F43E",
        "shortname": ":feet:",
        "aliases": "",
        "keywords": "paw prints animal cat dog footprints paw pet tracking paw prints mark imprints footsteps animal lion bear dog cat raccoon critter feet pawsteps"
    },
    "zap": {
        "unicode": "26A1",
        "shortname": ":zap:",
        "aliases": "",
        "keywords": "high voltage sign lightning bolt thunder weather"
    },
    "fire": {
        "unicode": "1F525",
        "shortname": ":fire:",
        "aliases": ":flame:",
        "keywords": "fire cook hot flame"
    },
    "crescent_moon": {
        "unicode": "1F319",
        "shortname": ":crescent_moon:",
        "aliases": "",
        "keywords": "crescent moon night moon crescent waxing sky night cheese phase"
    },
    "sunny": {
        "unicode": "2600",
        "shortname": ":sunny:",
        "aliases": "",
        "keywords": "black sun with rays brightness weather"
    },
    "partly_sunny": {
        "unicode": "26C5",
        "shortname": ":partly_sunny:",
        "aliases": "",
        "keywords": "sun behind cloud cloud morning nature weather"
    },
    "cloud": {
        "unicode": "2601",
        "shortname": ":cloud:",
        "aliases": "",
        "keywords": "cloud sky weather"
    },
    "cloud_rain": {
        "unicode": "1F327",
        "shortname": ":cloud_rain:",
        "aliases": ":cloud_with_rain:",
        "keywords": "cloud with rain "
    },
    "cloud_snow": {
        "unicode": "1F328",
        "shortname": ":cloud_snow:",
        "aliases": ":cloud_with_snow:",
        "keywords": "cloud with snow "
    },
    "cloud_lightning": {
        "unicode": "1F329",
        "shortname": ":cloud_lightning:",
        "aliases": ":cloud_with_lightning:",
        "keywords": "cloud with lightning "
    },
    "cloud_tornado": {
        "unicode": "1F32A",
        "shortname": ":cloud_tornado:",
        "aliases": ":cloud_with_tornado:",
        "keywords": "cloud with tornado "
    },
    "droplet": {
        "unicode": "1F4A7",
        "shortname": ":droplet:",
        "aliases": "",
        "keywords": "droplet drip faucet water drop droplet h20 water aqua tear sweat rain moisture wet moist spit"
    },
    "sweat_drops": {
        "unicode": "1F4A6",
        "shortname": ":sweat_drops:",
        "aliases": "",
        "keywords": "splashing sweat symbol water"
    },
    "umbrella": {
        "unicode": "2614",
        "shortname": ":umbrella:",
        "aliases": "",
        "keywords": "umbrella with rain drops rain weather"
    },
    "fog": {
        "unicode": "1F32B",
        "shortname": ":fog:",
        "aliases": "",
        "keywords": "fog "
    },
    "dash": {
        "unicode": "1F4A8",
        "shortname": ":dash:",
        "aliases": "",
        "keywords": "dash symbol air fast shoo wind"
    },
    "snowflake": {
        "unicode": "2744",
        "shortname": ":snowflake:",
        "aliases": "",
        "keywords": "snowflake christmas cold season weather winter xmas snowflake snow frozen droplet ice crystal cold chilly winter unique special below zero elsa"
    },
    "star2": {
        "unicode": "1F31F",
        "shortname": ":star2:",
        "aliases": "",
        "keywords": "glowing star night sparkle glow glowing star five points classic"
    },
    "star": {
        "unicode": "2B50",
        "shortname": ":star:",
        "aliases": "",
        "keywords": "white medium star night yellow"
    },
    "stars": {
        "unicode": "1F320",
        "shortname": ":stars:",
        "aliases": "",
        "keywords": "shooting star night photo shooting shoot star sky night comet meteoroid"
    },
    "sunrise_over_mountains": {
        "unicode": "1F304",
        "shortname": ":sunrise_over_mountains:",
        "aliases": "",
        "keywords": "sunrise over mountains photo vacation view sunrise sun morning mountain rural color sky"
    },
    "sunrise": {
        "unicode": "1F305",
        "shortname": ":sunrise:",
        "aliases": "",
        "keywords": "sunrise morning photo vacation view sunrise sun morning color sky"
    },
    "rainbow": {
        "unicode": "1F308",
        "shortname": ":rainbow:",
        "aliases": "",
        "keywords": "rainbow happy nature photo sky unicorn rainbow color pride diversity spectrum refract leprechaun gold"
    },
    "ocean": {
        "unicode": "1F30A",
        "shortname": ":ocean:",
        "aliases": "",
        "keywords": "water wave sea water wave ocean wave surf beach tide"
    },
    "volcano": {
        "unicode": "1F30B",
        "shortname": ":volcano:",
        "aliases": "",
        "keywords": "volcano nature photo volcano lava magma hot explode"
    },
    "milky_way": {
        "unicode": "1F30C",
        "shortname": ":milky_way:",
        "aliases": "",
        "keywords": "milky way photo space milky galaxy star stars planets space sky"
    },
    "mount_fuji": {
        "unicode": "1F5FB",
        "shortname": ":mount_fuji:",
        "aliases": "",
        "keywords": "mount fuji japan mountain nature photo"
    },
    "japan": {
        "unicode": "1F5FE",
        "shortname": ":japan:",
        "aliases": "",
        "keywords": "silhouette of japan nation"
    },
    "globe_with_meridians": {
        "unicode": "1F310",
        "shortname": ":globe_with_meridians:",
        "aliases": "",
        "keywords": "globe with meridians earth international world earth meridian globe space planet home"
    },
    "earth_africa": {
        "unicode": "1F30D",
        "shortname": ":earth_africa:",
        "aliases": "",
        "keywords": "earth globe europe-africa globe international world earth globe space planet africa europe home"
    },
    "earth_americas": {
        "unicode": "1F30E",
        "shortname": ":earth_americas:",
        "aliases": "",
        "keywords": "earth globe americas USA globe international world earth globe space planet north south america americas home"
    },
    "earth_asia": {
        "unicode": "1F30F",
        "shortname": ":earth_asia:",
        "aliases": "",
        "keywords": "earth globe asia-australia east globe international world earth globe space planet asia australia home"
    },
    "new_moon": {
        "unicode": "1F311",
        "shortname": ":new_moon:",
        "aliases": "",
        "keywords": "new moon symbol nature moon new sky night cheese phase"
    },
    "waxing_crescent_moon": {
        "unicode": "1F312",
        "shortname": ":waxing_crescent_moon:",
        "aliases": "",
        "keywords": "waxing crescent moon symbol nature moon waxing sky night cheese phase"
    },
    "first_quarter_moon": {
        "unicode": "1F313",
        "shortname": ":first_quarter_moon:",
        "aliases": "",
        "keywords": "first quarter moon symbol nature moon quarter first sky night cheese phase"
    },
    "waxing_gibbous_moon": {
        "unicode": "1F314",
        "shortname": ":waxing_gibbous_moon:",
        "aliases": "",
        "keywords": "waxing gibbous moon symbol nature"
    },
    "full_moon": {
        "unicode": "1F315",
        "shortname": ":full_moon:",
        "aliases": "",
        "keywords": "full moon symbol nature yellow moon full sky night cheese phase monster spooky werewolves twilight"
    },
    "waning_gibbous_moon": {
        "unicode": "1F316",
        "shortname": ":waning_gibbous_moon:",
        "aliases": "",
        "keywords": "waning gibbous moon symbol nature moon waning gibbous sky night cheese phase"
    },
    "last_quarter_moon": {
        "unicode": "1F317",
        "shortname": ":last_quarter_moon:",
        "aliases": "",
        "keywords": "last quarter moon symbol nature moon last quarter sky night cheese phase"
    },
    "waning_crescent_moon": {
        "unicode": "1F318",
        "shortname": ":waning_crescent_moon:",
        "aliases": "",
        "keywords": "waning crescent moon symbol nature moon crescent waning sky night cheese phase"
    },
    "new_moon_with_face": {
        "unicode": "1F31A",
        "shortname": ":new_moon_with_face:",
        "aliases": "",
        "keywords": "new moon with face nature moon new anthropomorphic face sky night cheese phase"
    },
    "full_moon_with_face": {
        "unicode": "1F31D",
        "shortname": ":full_moon_with_face:",
        "aliases": "",
        "keywords": "full moon with face night moon full anthropomorphic face sky night cheese phase spooky werewolves monsters"
    },
    "first_quarter_moon_with_face": {
        "unicode": "1F31B",
        "shortname": ":first_quarter_moon_with_face:",
        "aliases": "",
        "keywords": "first quarter moon with face nature moon first quarter anthropomorphic face sky night cheese phase"
    },
    "last_quarter_moon_with_face": {
        "unicode": "1F31C",
        "shortname": ":last_quarter_moon_with_face:",
        "aliases": "",
        "keywords": "last quarter moon with face nature moon last quarter anthropomorphic face sky night cheese phase"
    },
    "sun_with_face": {
        "unicode": "1F31E",
        "shortname": ":sun_with_face:",
        "aliases": "",
        "keywords": "sun with face morning sun anthropomorphic face sky"
    },
    "wind_blowing_face": {
        "unicode": "1F32C",
        "shortname": ":wind_blowing_face:",
        "aliases": "",
        "keywords": "wind blowing face "
    },
    "ribbon": {
        "unicode": "1F380",
        "shortname": ":ribbon:",
        "aliases": "",
        "keywords": "ribbon bowtie decoration girl pink ribbon lace wrap decorate"
    },
    "gift": {
        "unicode": "1F381",
        "shortname": ":gift:",
        "aliases": "",
        "keywords": "wrapped present birthday christmas present xmas gift present wrap package birthday wedding"
    },
    "birthday": {
        "unicode": "1F382",
        "shortname": ":birthday:",
        "aliases": "",
        "keywords": "birthday cake cake party birthday birth cake dessert wish celebrate"
    },
    "jack_o_lantern": {
        "unicode": "1F383",
        "shortname": ":jack_o_lantern:",
        "aliases": "",
        "keywords": "jack-o-lantern halloween jack-o-lantern pumpkin halloween holiday carve autumn fall october saints costume spooky horror scary scared dead"
    },
    "christmas_tree": {
        "unicode": "1F384",
        "shortname": ":christmas_tree:",
        "aliases": "",
        "keywords": "christmas tree celebration december festival vacation xmas christmas xmas santa holiday winter december santa evergreen ornaments jesus gifts presents"
    },
    "tanabata_tree": {
        "unicode": "1F38B",
        "shortname": ":tanabata_tree:",
        "aliases": "",
        "keywords": "tanabata tree nature plant tanabata tree festival star wish holiday"
    },
    "bamboo": {
        "unicode": "1F38D",
        "shortname": ":bamboo:",
        "aliases": "",
        "keywords": "pine decoration nature plant vegetable pine bamboo decoration new years spirits harvest prosperity longevity fortune luck welcome farming agriculture"
    },
    "rice_scene": {
        "unicode": "1F391",
        "shortname": ":rice_scene:",
        "aliases": "",
        "keywords": "moon viewing ceremony photo moon viewing observing otsukimi tsukimi rice scene festival autumn"
    },
    "fireworks": {
        "unicode": "1F386",
        "shortname": ":fireworks:",
        "aliases": "",
        "keywords": "fireworks carnival congratulations festival photo fireworks independence celebration explosion july 4th rocket sky idea excitement"
    },
    "sparkler": {
        "unicode": "1F387",
        "shortname": ":sparkler:",
        "aliases": "",
        "keywords": "firework sparkler night shine stars"
    },
    "tada": {
        "unicode": "1F389",
        "shortname": ":tada:",
        "aliases": "",
        "keywords": "party popper contulations party party popper tada celebration victory announcement climax congratulations"
    },
    "confetti_ball": {
        "unicode": "1F38A",
        "shortname": ":confetti_ball:",
        "aliases": "",
        "keywords": "confetti ball festival party party congratulations confetti ball celebrate win birthday new years wedding"
    },
    "balloon": {
        "unicode": "1F388",
        "shortname": ":balloon:",
        "aliases": "",
        "keywords": "balloon celebration party balloon birthday celebration helium gas children float"
    },
    "dizzy": {
        "unicode": "1F4AB",
        "shortname": ":dizzy:",
        "aliases": "",
        "keywords": "dizzy symbol shoot sparkle star dizzy drunk sick intoxicated squeans starburst star"
    },
    "sparkles": {
        "unicode": "2728",
        "shortname": ":sparkles:",
        "aliases": "",
        "keywords": "sparkles cool shine shiny stars"
    },
    "boom": {
        "unicode": "1F4A5",
        "shortname": ":boom:",
        "aliases": "",
        "keywords": "collision symbol bomb explode explosion boom bang collision fire emphasis wow bam"
    },
    "mortar_board": {
        "unicode": "1F393",
        "shortname": ":mortar_board:",
        "aliases": "",
        "keywords": "graduation cap cap college degree graduation hat school university graduation cap mortarboard academic education ceremony square tassel"
    },
    "crown": {
        "unicode": "1F451",
        "shortname": ":crown:",
        "aliases": "",
        "keywords": "crown king kod leader royalty"
    },
    "reminder_ribbon": {
        "unicode": "1F397",
        "shortname": ":reminder_ribbon:",
        "aliases": "",
        "keywords": "reminder ribbon "
    },
    "military_medal": {
        "unicode": "1F396",
        "shortname": ":military_medal:",
        "aliases": "",
        "keywords": "military medal "
    },
    "dolls": {
        "unicode": "1F38E",
        "shortname": ":dolls:",
        "aliases": "",
        "keywords": "japanese dolls japanese kimono toy dolls japan japanese day girls emperor empress pray blessing imperial family royal"
    },
    "flags": {
        "unicode": "1F38F",
        "shortname": ":flags:",
        "aliases": "",
        "keywords": "carp streamer banner carp fish japanese koinobori children kids boys celebration happiness carp streamers japanese holiday flags"
    },
    "wind_chime": {
        "unicode": "1F390",
        "shortname": ":wind_chime:",
        "aliases": "",
        "keywords": "wind chime ding nature wind chime bell f\u016brin instrument music spirits soothing protective spiritual sound"
    },
    "crossed_flags": {
        "unicode": "1F38C",
        "shortname": ":crossed_flags:",
        "aliases": "",
        "keywords": "crossed flags japan"
    },
    "izakaya_lantern": {
        "unicode": "1F3EE",
        "shortname": ":izakaya_lantern:",
        "aliases": "",
        "keywords": "izakaya lantern light izakaya lantern stay drink alcohol bar sake restaurant"
    },
    "ring": {
        "unicode": "1F48D",
        "shortname": ":ring:",
        "aliases": "",
        "keywords": "ring marriage propose valentines wedding"
    },
    "bouquet2": {
        "unicode": "1F395",
        "shortname": ":bouquet2:",
        "aliases": ":bouquet_of_flowers:",
        "keywords": "bouquet of flowers "
    },
    "heart": {
        "unicode": "2764",
        "shortname": ":heart:",
        "aliases": "",
        "keywords": "heavy black heart like love red pink black heart love passion romance intense desire death evil cold valentines"
    },
    "broken_heart": {
        "unicode": "1F494",
        "shortname": ":broken_heart:",
        "aliases": "",
        "keywords": "broken heart sad sorry"
    },
    "love_letter": {
        "unicode": "1F48C",
        "shortname": ":love_letter:",
        "aliases": "",
        "keywords": "love letter affection email envelope like valentines love letter kiss heart"
    },
    "two_hearts": {
        "unicode": "1F495",
        "shortname": ":two_hearts:",
        "aliases": "",
        "keywords": "two hearts affection like love valentines heart hearts two love emotion"
    },
    "revolving_hearts": {
        "unicode": "1F49E",
        "shortname": ":revolving_hearts:",
        "aliases": "",
        "keywords": "revolving hearts affection like love valentines heart hearts revolving moving circle multiple lovers"
    },
    "heartbeat": {
        "unicode": "1F493",
        "shortname": ":heartbeat:",
        "aliases": "",
        "keywords": "beating heart affection like love valentines"
    },
    "heartpulse": {
        "unicode": "1F497",
        "shortname": ":heartpulse:",
        "aliases": "",
        "keywords": "growing heart affection like love valentines"
    },
    "sparkling_heart": {
        "unicode": "1F496",
        "shortname": ":sparkling_heart:",
        "aliases": "",
        "keywords": "sparkling heart affection like love valentines"
    },
    "cupid": {
        "unicode": "1F498",
        "shortname": ":cupid:",
        "aliases": "",
        "keywords": "heart with arrow affection heart like love valentines"
    },
    "gift_heart": {
        "unicode": "1F49D",
        "shortname": ":gift_heart:",
        "aliases": "",
        "keywords": "heart with ribbon love valentines"
    },
    "heart_tip": {
        "unicode": "1F394",
        "shortname": ":heart_tip:",
        "aliases": ":heart_with_tip_on_the_left:",
        "keywords": "heart with tip on the left "
    },
    "heart_decoration": {
        "unicode": "1F49F",
        "shortname": ":heart_decoration:",
        "aliases": "",
        "keywords": "heart decoration like love purple-square"
    },
    "purple_heart": {
        "unicode": "1F49C",
        "shortname": ":purple_heart:",
        "aliases": "",
        "keywords": "purple heart affection like love valentines purple violet heart love sensitive understanding compassionate compassion duty honor royalty veteran sacrifice"
    },
    "yellow_heart": {
        "unicode": "1F49B",
        "shortname": ":yellow_heart:",
        "aliases": "",
        "keywords": "yellow heart affection like love valentines yellow gold heart love friendship happy happiness trust compassionate respectful honest caring selfless"
    },
    "green_heart": {
        "unicode": "1F49A",
        "shortname": ":green_heart:",
        "aliases": "",
        "keywords": "green heart affection like love valentines green heart love nature rebirth reborn jealous clingy envious possessive"
    },
    "blue_heart": {
        "unicode": "1F499",
        "shortname": ":blue_heart:",
        "aliases": "",
        "keywords": "blue heart affection like love valentines blue heart love stability truth loyalty trust"
    },
    "runner": {
        "unicode": "1F3C3",
        "shortname": ":runner:",
        "aliases": "",
        "keywords": "runner exercise man walking run runner jog exercise sprint race dash"
    },
    "walking": {
        "unicode": "1F6B6",
        "shortname": ":walking:",
        "aliases": "",
        "keywords": "pedestrian human man walk pedestrian stroll stride foot feet"
    },
    "dancer": {
        "unicode": "1F483",
        "shortname": ":dancer:",
        "aliases": "",
        "keywords": "dancer female fun girl woman dance dancer dress fancy boogy party celebrate ballet tango cha cha music"
    },
    "lifter": {
        "unicode": "1F3CB",
        "shortname": ":lifter:",
        "aliases": ":weight_lifter:",
        "keywords": "weight lifter "
    },
    "golfer": {
        "unicode": "1F3CC",
        "shortname": ":golfer:",
        "aliases": "",
        "keywords": "golfer "
    },
    "rowboat": {
        "unicode": "1F6A3",
        "shortname": ":rowboat:",
        "aliases": "",
        "keywords": "rowboat hobby ship sports water boat row oar paddle"
    },
    "swimmer": {
        "unicode": "1F3CA",
        "shortname": ":swimmer:",
        "aliases": "",
        "keywords": "swimmer sports swimmer swim water pool laps freestyle butterfly breaststroke backstroke"
    },
    "surfer": {
        "unicode": "1F3C4",
        "shortname": ":surfer:",
        "aliases": "",
        "keywords": "surfer ocean sea sports surfer surf wave ocean ride swell"
    },
    "bath": {
        "unicode": "1F6C0",
        "shortname": ":bath:",
        "aliases": "",
        "keywords": "bath clean shower bath tub basin wash bubble soak bathroom soap water clean shampoo lather water"
    },
    "snowboarder": {
        "unicode": "1F3C2",
        "shortname": ":snowboarder:",
        "aliases": "",
        "keywords": "snowboarder sports winter snow boarding sports freestyle halfpipe board mountain alpine winter"
    },
    "ski": {
        "unicode": "1F3BF",
        "shortname": ":ski:",
        "aliases": "",
        "keywords": "ski and ski boot cold sports winter ski downhill cross-country poles snow winter mountain alpine powder slalom freestyle"
    },
    "snowman": {
        "unicode": "26C4",
        "shortname": ":snowman:",
        "aliases": "",
        "keywords": "snowman without snow christmas cold season weather winter xmas"
    },
    "bicyclist": {
        "unicode": "1F6B4",
        "shortname": ":bicyclist:",
        "aliases": "",
        "keywords": "bicyclist bike exercise hipster sports bicyclist road bike pedal bicycle transportation"
    },
    "mountain_bicyclist": {
        "unicode": "1F6B5",
        "shortname": ":mountain_bicyclist:",
        "aliases": "",
        "keywords": "mountain bicyclist human sports transportation bicyclist mountain bike pedal bicycle transportation"
    },
    "motorcycle": {
        "unicode": "1F3CD",
        "shortname": ":motorcycle:",
        "aliases": ":racing_motorcycle:",
        "keywords": "racing motorcycle "
    },
    "race_car": {
        "unicode": "1F3CE",
        "shortname": ":race_car:",
        "aliases": ":racing_car:",
        "keywords": "racing car "
    },
    "horse_racing": {
        "unicode": "1F3C7",
        "shortname": ":horse_racing:",
        "aliases": "",
        "keywords": "horse racing animal betting competition horse race racing jockey triple crown"
    },
    "tent": {
        "unicode": "26FA",
        "shortname": ":tent:",
        "aliases": "",
        "keywords": "tent camp outdoors photo"
    },
    "fishing_pole_and_fish": {
        "unicode": "1F3A3",
        "shortname": ":fishing_pole_and_fish:",
        "aliases": "",
        "keywords": "fishing pole and fish food hobby fish fishing pole"
    },
    "soccer": {
        "unicode": "26BD",
        "shortname": ":soccer:",
        "aliases": "",
        "keywords": "soccer ball balls fifa football sports european football"
    },
    "basketball": {
        "unicode": "1F3C0",
        "shortname": ":basketball:",
        "aliases": "",
        "keywords": "basketball and hoop NBA balls sports basketball bball dribble hoop net swish rip city"
    },
    "football": {
        "unicode": "1F3C8",
        "shortname": ":football:",
        "aliases": "",
        "keywords": "american football NFL balls sports football ball sport america american"
    },
    "baseball": {
        "unicode": "26BE",
        "shortname": ":baseball:",
        "aliases": "",
        "keywords": "baseball MLB balls sports"
    },
    "tennis": {
        "unicode": "1F3BE",
        "shortname": ":tennis:",
        "aliases": "",
        "keywords": "tennis racquet and ball balls green sports tennis racket racquet ball game net court love"
    },
    "rugby_football": {
        "unicode": "1F3C9",
        "shortname": ":rugby_football:",
        "aliases": "",
        "keywords": "rugby football sports rugby football ball sport team england"
    },
    "golf": {
        "unicode": "26F3",
        "shortname": ":golf:",
        "aliases": "",
        "keywords": "flag in hole business sports"
    },
    "trophy": {
        "unicode": "1F3C6",
        "shortname": ":trophy:",
        "aliases": "",
        "keywords": "trophy award ceremony contest ftw place win trophy first show place win reward achievement medal"
    },
    "medal": {
        "unicode": "1F3C5",
        "shortname": ":medal:",
        "aliases": ":sports_medal:",
        "keywords": "sports medal "
    },
    "running_shirt_with_sash": {
        "unicode": "1F3BD",
        "shortname": ":running_shirt_with_sash:",
        "aliases": "",
        "keywords": "running shirt with sash pageant play running run shirt cloths compete sports"
    },
    "checkered_flag": {
        "unicode": "1F3C1",
        "shortname": ":checkered_flag:",
        "aliases": "",
        "keywords": "chequered flag contest finishline gokart rase checkered chequred race flag finish complete end"
    },
    "musical_keyboard": {
        "unicode": "1F3B9",
        "shortname": ":musical_keyboard:",
        "aliases": "",
        "keywords": "musical keyboard instrument piano music keyboard piano organ instrument electric"
    },
    "guitar": {
        "unicode": "1F3B8",
        "shortname": ":guitar:",
        "aliases": "",
        "keywords": "guitar instrument music guitar string music instrument jam rock acoustic electric"
    },
    "violin": {
        "unicode": "1F3BB",
        "shortname": ":violin:",
        "aliases": "",
        "keywords": "violin instrument music violin fiddle music instrument"
    },
    "saxophone": {
        "unicode": "1F3B7",
        "shortname": ":saxophone:",
        "aliases": "",
        "keywords": "saxophone instrument music saxophone sax music instrument woodwind"
    },
    "trumpet": {
        "unicode": "1F3BA",
        "shortname": ":trumpet:",
        "aliases": "",
        "keywords": "trumpet brass music trumpet brass music instrument"
    },
    "musical_note": {
        "unicode": "1F3B5",
        "shortname": ":musical_note:",
        "aliases": "",
        "keywords": "musical note score musical music note music sound"
    },
    "notes": {
        "unicode": "1F3B6",
        "shortname": ":notes:",
        "aliases": "",
        "keywords": "multiple musical notes music score musical music notes music sound melody"
    },
    "musical_score": {
        "unicode": "1F3BC",
        "shortname": ":musical_score:",
        "aliases": "",
        "keywords": "musical score clef treble music musical score clef g-clef stave staff"
    },
    "headphones": {
        "unicode": "1F3A7",
        "shortname": ":headphones:",
        "aliases": "",
        "keywords": "headphone gadgets music score headphone sound music ears beats buds audio listen"
    },
    "microphone": {
        "unicode": "1F3A4",
        "shortname": ":microphone:",
        "aliases": "",
        "keywords": "microphone PA music sound microphone mic audio sound voice karaoke"
    },
    "performing_arts": {
        "unicode": "1F3AD",
        "shortname": ":performing_arts:",
        "aliases": "",
        "keywords": "performing arts acting drama theater performing arts performance entertainment acting story mask masks"
    },
    "ticket": {
        "unicode": "1F3AB",
        "shortname": ":ticket:",
        "aliases": "",
        "keywords": "ticket concert event pass ticket show entertainment stub admission proof purchase"
    },
    "tophat": {
        "unicode": "1F3A9",
        "shortname": ":tophat:",
        "aliases": "",
        "keywords": "top hat classy gentleman magic top hat cap beaver high tall stove pipe chimney topper london period piece magic magician"
    },
    "circus_tent": {
        "unicode": "1F3AA",
        "shortname": ":circus_tent:",
        "aliases": "",
        "keywords": "circus tent carnival festival party circus tent event carnival big top canvas"
    },
    "clapper": {
        "unicode": "1F3AC",
        "shortname": ":clapper:",
        "aliases": "",
        "keywords": "clapper board film movie record clapper board clapboard movie film take"
    },
    "film_frames": {
        "unicode": "1F39E",
        "shortname": ":film_frames:",
        "aliases": "",
        "keywords": "film frames "
    },
    "tickets": {
        "unicode": "1F39F",
        "shortname": ":tickets:",
        "aliases": ":admission_tickets:",
        "keywords": "admission tickets "
    },
    "art": {
        "unicode": "1F3A8",
        "shortname": ":art:",
        "aliases": "",
        "keywords": "artist palette design draw paint artist palette art colors paint draw brush pastels oils"
    },
    "dart": {
        "unicode": "1F3AF",
        "shortname": ":dart:",
        "aliases": "",
        "keywords": "direct hit bar game direct hit bullseye dart archery game fletching arrow sport"
    },
    "8ball": {
        "unicode": "1F3B1",
        "shortname": ":8ball:",
        "aliases": "",
        "keywords": "billiards pool billiards eight ball pool pocket ball cue"
    },
    "bowling": {
        "unicode": "1F3B3",
        "shortname": ":bowling:",
        "aliases": "",
        "keywords": "bowling fun play sports bowl bowling ball pin strike spare game"
    },
    "slot_machine": {
        "unicode": "1F3B0",
        "shortname": ":slot_machine:",
        "aliases": "",
        "keywords": "slot machine bet gamble vegas slot machine gamble one-armed bandit slots luck"
    },
    "game_die": {
        "unicode": "1F3B2",
        "shortname": ":game_die:",
        "aliases": "",
        "keywords": "game die dice game die dice craps gamble play"
    },
    "video_game": {
        "unicode": "1F3AE",
        "shortname": ":video_game:",
        "aliases": "",
        "keywords": "video game PS4 console controller play video game console controller nintendo xbox playstation"
    },
    "flower_playing_cards": {
        "unicode": "1F3B4",
        "shortname": ":flower_playing_cards:",
        "aliases": "",
        "keywords": "flower playing cards playing card flower game august moon special"
    },
    "black_joker": {
        "unicode": "1F0CF",
        "shortname": ":black_joker:",
        "aliases": "",
        "keywords": "playing card black joker cards game poker"
    },
    "mahjong": {
        "unicode": "1F004",
        "shortname": ":mahjong:",
        "aliases": "",
        "keywords": "mahjong tile red dragon chinese game kanji"
    },
    "carousel_horse": {
        "unicode": "1F3A0",
        "shortname": ":carousel_horse:",
        "aliases": "",
        "keywords": "carousel horse carnival horse photo carousel horse amusement park ride entertainment park fair"
    },
    "ferris_wheel": {
        "unicode": "1F3A1",
        "shortname": ":ferris_wheel:",
        "aliases": "",
        "keywords": "ferris wheel carnival londoneye photo farris wheel amusement park fair ride entertainment"
    },
    "roller_coaster": {
        "unicode": "1F3A2",
        "shortname": ":roller_coaster:",
        "aliases": "",
        "keywords": "roller coaster carnival fun photo play playground roller coaster amusement park fair ride entertainment"
    },
    "tomato": {
        "unicode": "1F345",
        "shortname": ":tomato:",
        "aliases": "",
        "keywords": "tomato food fruit nature vegetable tomato fruit sauce italian"
    },
    "eggplant": {
        "unicode": "1F346",
        "shortname": ":eggplant:",
        "aliases": "",
        "keywords": "aubergine aubergine food nature vegetable eggplant aubergine fruit purple penis"
    },
    "corn": {
        "unicode": "1F33D",
        "shortname": ":corn:",
        "aliases": "",
        "keywords": "ear of maize food plant vegetable corn maize food iowa kernel popcorn husk yellow stalk cob ear"
    },
    "sweet_potato": {
        "unicode": "1F360",
        "shortname": ":sweet_potato:",
        "aliases": "",
        "keywords": "roasted sweet potato food nature sweet potato potassium roasted roast"
    },
    "hot_pepper": {
        "unicode": "1F336",
        "shortname": ":hot_pepper:",
        "aliases": "",
        "keywords": "hot pepper "
    },
    "grapes": {
        "unicode": "1F347",
        "shortname": ":grapes:",
        "aliases": "",
        "keywords": "grapes food fruit grapes wine vinegar fruit cluster vine"
    },
    "melon": {
        "unicode": "1F348",
        "shortname": ":melon:",
        "aliases": "",
        "keywords": "melon food fruit nature melon cantaloupe honeydew"
    },
    "watermelon": {
        "unicode": "1F349",
        "shortname": ":watermelon:",
        "aliases": "",
        "keywords": "watermelon food fruit melon watermelon summer fruit large"
    },
    "tangerine": {
        "unicode": "1F34A",
        "shortname": ":tangerine:",
        "aliases": "",
        "keywords": "tangerine food fruit nature tangerine citrus orange"
    },
    "lemon": {
        "unicode": "1F34B",
        "shortname": ":lemon:",
        "aliases": "",
        "keywords": "lemon fruit nature lemon yellow citrus"
    },
    "banana": {
        "unicode": "1F34C",
        "shortname": ":banana:",
        "aliases": "",
        "keywords": "banana food fruit banana peel bunch"
    },
    "pineapple": {
        "unicode": "1F34D",
        "shortname": ":pineapple:",
        "aliases": "",
        "keywords": "pineapple food fruit nature pineapple pina tropical flower"
    },
    "apple": {
        "unicode": "1F34E",
        "shortname": ":apple:",
        "aliases": "",
        "keywords": "red apple fruit mac apple fruit electronics red doctor teacher school core"
    },
    "green_apple": {
        "unicode": "1F34F",
        "shortname": ":green_apple:",
        "aliases": "",
        "keywords": "green apple fruit nature apple fruit green pie granny smith core"
    },
    "pear": {
        "unicode": "1F350",
        "shortname": ":pear:",
        "aliases": "",
        "keywords": "pear fruit nature pear fruit shape"
    },
    "peach": {
        "unicode": "1F351",
        "shortname": ":peach:",
        "aliases": "",
        "keywords": "peach food fruit nature peach fruit juicy pit"
    },
    "cherries": {
        "unicode": "1F352",
        "shortname": ":cherries:",
        "aliases": "",
        "keywords": "cherries food fruit cherry cherries tree fruit pit"
    },
    "strawberry": {
        "unicode": "1F353",
        "shortname": ":strawberry:",
        "aliases": "",
        "keywords": "strawberry food fruit nature strawberry short cake berry"
    },
    "hamburger": {
        "unicode": "1F354",
        "shortname": ":hamburger:",
        "aliases": "",
        "keywords": "hamburger food meat hamburger burger meat cow beef"
    },
    "pizza": {
        "unicode": "1F355",
        "shortname": ":pizza:",
        "aliases": "",
        "keywords": "slice of pizza food party pizza pie new york italian italy slice peperoni"
    },
    "meat_on_bone": {
        "unicode": "1F356",
        "shortname": ":meat_on_bone:",
        "aliases": "",
        "keywords": "meat on bone food good meat bone animal cooked"
    },
    "poultry_leg": {
        "unicode": "1F357",
        "shortname": ":poultry_leg:",
        "aliases": "",
        "keywords": "poultry leg food meat poultry leg chicken fried"
    },
    "rice_cracker": {
        "unicode": "1F358",
        "shortname": ":rice_cracker:",
        "aliases": "",
        "keywords": "rice cracker food japanese rice cracker seaweed food japanese"
    },
    "rice_ball": {
        "unicode": "1F359",
        "shortname": ":rice_ball:",
        "aliases": "",
        "keywords": "rice ball food japanese rice ball white nori seaweed japanese"
    },
    "rice": {
        "unicode": "1F35A",
        "shortname": ":rice:",
        "aliases": "",
        "keywords": "cooked rice food rice white grain food bowl"
    },
    "curry": {
        "unicode": "1F35B",
        "shortname": ":curry:",
        "aliases": "",
        "keywords": "curry and rice food hot indian spicy curry spice flavor food meal"
    },
    "ramen": {
        "unicode": "1F35C",
        "shortname": ":ramen:",
        "aliases": "",
        "keywords": "steaming bowl chipsticks food japanese noodle ramen noodles bowl steaming soup"
    },
    "spaghetti": {
        "unicode": "1F35D",
        "shortname": ":spaghetti:",
        "aliases": "",
        "keywords": "spaghetti food italian noodle spaghetti noodles tomato sauce italian"
    },
    "bread": {
        "unicode": "1F35E",
        "shortname": ":bread:",
        "aliases": "",
        "keywords": "bread breakfast food toast wheat bread loaf yeast"
    },
    "fries": {
        "unicode": "1F35F",
        "shortname": ":fries:",
        "aliases": "",
        "keywords": "french fries chips food fries french potato fry russet idaho"
    },
    "dango": {
        "unicode": "1F361",
        "shortname": ":dango:",
        "aliases": "",
        "keywords": "dango food dango japanese dumpling mochi balls skewer"
    },
    "oden": {
        "unicode": "1F362",
        "shortname": ":oden:",
        "aliases": "",
        "keywords": "oden food japanese oden seafood casserole stew"
    },
    "sushi": {
        "unicode": "1F363",
        "shortname": ":sushi:",
        "aliases": "",
        "keywords": "sushi food japanese sushi fish raw nigiri japanese"
    },
    "fried_shrimp": {
        "unicode": "1F364",
        "shortname": ":fried_shrimp:",
        "aliases": "",
        "keywords": "fried shrimp animal food shrimp fried seafood small fish"
    },
    "fish_cake": {
        "unicode": "1F365",
        "shortname": ":fish_cake:",
        "aliases": "",
        "keywords": "fish cake with swirl design food fish cake kamboko swirl ramen noodles naruto"
    },
    "icecream": {
        "unicode": "1F366",
        "shortname": ":icecream:",
        "aliases": "",
        "keywords": "soft ice cream desert food hot icecream ice cream dairy dessert cold soft serve cone yogurt"
    },
    "shaved_ice": {
        "unicode": "1F367",
        "shortname": ":shaved_ice:",
        "aliases": "",
        "keywords": "shaved ice desert hot shaved ice dessert treat syrup flavoring"
    },
    "ice_cream": {
        "unicode": "1F368",
        "shortname": ":ice_cream:",
        "aliases": "",
        "keywords": "ice cream desert food hot icecream ice cream dairy dessert cold soft serve cone waffle"
    },
    "doughnut": {
        "unicode": "1F369",
        "shortname": ":doughnut:",
        "aliases": "",
        "keywords": "doughnut desert food snack sweet doughnut donut pastry fried dessert breakfast police homer sweet"
    },
    "cookie": {
        "unicode": "1F36A",
        "shortname": ":cookie:",
        "aliases": "",
        "keywords": "cookie chocolate food oreo snack cookie dessert biscuit sweet chocolate"
    },
    "chocolate_bar": {
        "unicode": "1F36B",
        "shortname": ":chocolate_bar:",
        "aliases": "",
        "keywords": "chocolate bar desert food snack chocolate bar candy coca hershey's"
    },
    "candy": {
        "unicode": "1F36C",
        "shortname": ":candy:",
        "aliases": "",
        "keywords": "candy desert snack candy sugar sweet hard"
    },
    "lollipop": {
        "unicode": "1F36D",
        "shortname": ":lollipop:",
        "aliases": "",
        "keywords": "lollipop candy food snack sweet lollipop stick lick sweet sugar candy"
    },
    "custard": {
        "unicode": "1F36E",
        "shortname": ":custard:",
        "aliases": "",
        "keywords": "custard desert food custard cream rich butter dessert cr\u00e8me br\u00fbl\u00e9e french"
    },
    "honey_pot": {
        "unicode": "1F36F",
        "shortname": ":honey_pot:",
        "aliases": "",
        "keywords": "honey pot bees sweet honey pot bees pooh bear"
    },
    "cake": {
        "unicode": "1F370",
        "shortname": ":cake:",
        "aliases": "",
        "keywords": "shortcake desert food cake short dessert strawberry"
    },
    "bento": {
        "unicode": "1F371",
        "shortname": ":bento:",
        "aliases": "",
        "keywords": "bento box box food japanese bento japanese rice meal box obento convenient lunchbox"
    },
    "stew": {
        "unicode": "1F372",
        "shortname": ":stew:",
        "aliases": "",
        "keywords": "pot of food food meat stew hearty soup thick hot pot"
    },
    "egg": {
        "unicode": "1F373",
        "shortname": ":egg:",
        "aliases": "",
        "keywords": "cooking breakfast food egg fry pan flat cook frying cooking utensil"
    },
    "fork_and_knife": {
        "unicode": "1F374",
        "shortname": ":fork_and_knife:",
        "aliases": "",
        "keywords": "fork and knife cutlery kitchen fork knife restaurant meal food eat"
    },
    "tea": {
        "unicode": "1F375",
        "shortname": ":tea:",
        "aliases": "",
        "keywords": "teacup without handle bowl breakfast british drink green tea leaf drink teacup hot beverage"
    },
    "coffee": {
        "unicode": "2615",
        "shortname": ":coffee:",
        "aliases": "",
        "keywords": "hot beverage beverage cafe drink espresso"
    },
    "sake": {
        "unicode": "1F376",
        "shortname": ":sake:",
        "aliases": "",
        "keywords": "sake bottle and cup beverage drink drunk wine sake wine rice ferment alcohol japanese drink"
    },
    "wine_glass": {
        "unicode": "1F377",
        "shortname": ":wine_glass:",
        "aliases": "",
        "keywords": "wine glass alcohol beverage booze bottle drink drunk fermented glass grapes tasting wine winery"
    },
    "cocktail": {
        "unicode": "1F378",
        "shortname": ":cocktail:",
        "aliases": "",
        "keywords": "cocktail glass alcohol beverage drink drunk cocktail mixed drink alcohol glass martini bar"
    },
    "tropical_drink": {
        "unicode": "1F379",
        "shortname": ":tropical_drink:",
        "aliases": "",
        "keywords": "tropical drink beverage tropical drink mixed pineapple coconut pina fruit umbrella"
    },
    "beer": {
        "unicode": "1F37A",
        "shortname": ":beer:",
        "aliases": "",
        "keywords": "beer mug beverage drink drunk party pub relax beer hops mug barley malt yeast portland oregon brewery micro pint boot"
    },
    "beers": {
        "unicode": "1F37B",
        "shortname": ":beers:",
        "aliases": "",
        "keywords": "clinking beer mugs beverage drink drunk party pub relax beer beers cheers mug toast celebrate pub bar jolly hops clink"
    },
    "baby_bottle": {
        "unicode": "1F37C",
        "shortname": ":baby_bottle:",
        "aliases": "",
        "keywords": "baby bottle container food baby bottle milk mother nipple newborn formula"
    },
    "watch": {
        "unicode": "231A",
        "shortname": ":watch:",
        "aliases": "",
        "keywords": "watch accessories time"
    },
    "iphone": {
        "unicode": "1F4F1",
        "shortname": ":iphone:",
        "aliases": "",
        "keywords": "mobile phone apple dial gadgets technology"
    },
    "calling": {
        "unicode": "1F4F2",
        "shortname": ":calling:",
        "aliases": "",
        "keywords": "mobile phone with rightwards arrow at left incoming iphone"
    },
    "computer": {
        "unicode": "1F4BB",
        "shortname": ":computer:",
        "aliases": "",
        "keywords": "personal computer laptop tech"
    },
    "desktop": {
        "unicode": "1F5A5",
        "shortname": ":desktop:",
        "aliases": ":desktop_computer:",
        "keywords": "desktop computer "
    },
    "computer_old": {
        "unicode": "1F5B3",
        "shortname": ":computer_old:",
        "aliases": ":old_personal_computer:",
        "keywords": "old personal computer "
    },
    "keyboard": {
        "unicode": "1F5AE",
        "shortname": ":keyboard:",
        "aliases": ":wired_keyboard:",
        "keywords": "wired keyboard "
    },
    "mouse-one": {
        "unicode": "1F5AF",
        "shortname": ":mouse-one:",
        "aliases": ":one_button_mouse:",
        "keywords": "one button mouse "
    },
    "trackball": {
        "unicode": "1F5B2",
        "shortname": ":trackball:",
        "aliases": "",
        "keywords": "trackball "
    },
    "keyboard_mouse": {
        "unicode": "1F5A6",
        "shortname": ":keyboard_mouse:",
        "aliases": ":keyboard_and_mouse:",
        "keywords": "keyboard and mouse "
    },
    "network": {
        "unicode": "1F5A7",
        "shortname": ":network:",
        "aliases": ":three_networked_computers:",
        "keywords": "three networked computers "
    },
    "printer": {
        "unicode": "1F5A8",
        "shortname": ":printer:",
        "aliases": "",
        "keywords": "printer "
    },
    "desktop_window": {
        "unicode": "1F5D4",
        "shortname": ":desktop_window:",
        "aliases": "",
        "keywords": "desktop window "
    },
    "calculator": {
        "unicode": "1F5A9",
        "shortname": ":calculator:",
        "aliases": ":pocket calculator:",
        "keywords": "pocket calculator "
    },
    "alarm_clock": {
        "unicode": "23F0",
        "shortname": ":alarm_clock:",
        "aliases": "",
        "keywords": "alarm clock time wake"
    },
    "clock": {
        "unicode": "1F570",
        "shortname": ":clock:",
        "aliases": ":mantlepiece_clock:",
        "keywords": "mantlepiece clock time"
    },
    "hourglass_flowing_sand": {
        "unicode": "23F3",
        "shortname": ":hourglass_flowing_sand:",
        "aliases": "",
        "keywords": "hourglass with flowing sand countdown oldschool time"
    },
    "hourglass": {
        "unicode": "231B",
        "shortname": ":hourglass:",
        "aliases": "",
        "keywords": "hourglass clock oldschool time"
    },
    "camera": {
        "unicode": "1F4F7",
        "shortname": ":camera:",
        "aliases": "",
        "keywords": "camera gadgets photo"
    },
    "camera_with_flash": {
        "unicode": "1F4F8",
        "shortname": ":camera_with_flash:",
        "aliases": "",
        "keywords": "camera with flash photo"
    },
    "video_camera": {
        "unicode": "1F4F9",
        "shortname": ":video_camera:",
        "aliases": "",
        "keywords": "video camera film record"
    },
    "movie_camera": {
        "unicode": "1F3A5",
        "shortname": ":movie_camera:",
        "aliases": "",
        "keywords": "movie camera film record movie camera camcorder video motion picture"
    },
    "projector": {
        "unicode": "1F4FD",
        "shortname": ":projector:",
        "aliases": ":film_projector:",
        "keywords": "film projector movie video motion picture 8mm 16mm"
    },
    "tv": {
        "unicode": "1F4FA",
        "shortname": ":tv:",
        "aliases": "",
        "keywords": "television oldschool program show technology"
    },
    "keyboard_with_jacks": {
        "unicode": "1F398",
        "shortname": ":keyboard_with_jacks:",
        "aliases": ":musical_keyboard_with_jacks:",
        "keywords": "musical keyboard with jacks music instrument midi"
    },
    "microphone2": {
        "unicode": "1F399",
        "shortname": ":microphone2:",
        "aliases": ":studio_microphone:",
        "keywords": "studio microphone mic audio recording"
    },
    "level_slider": {
        "unicode": "1F39A",
        "shortname": ":level_slider:",
        "aliases": "",
        "keywords": "level slider controls"
    },
    "control_knobs": {
        "unicode": "1F39B",
        "shortname": ":control_knobs:",
        "aliases": "",
        "keywords": "control knobs dial"
    },
    "radio": {
        "unicode": "1F4FB",
        "shortname": ":radio:",
        "aliases": "",
        "keywords": "radio communication music podcast program"
    },
    "stereo": {
        "unicode": "1F4FE",
        "shortname": ":stereo:",
        "aliases": ":portable_stereo:",
        "keywords": "portable stereo communication music program boom box"
    },
    "pager": {
        "unicode": "1F4DF",
        "shortname": ":pager:",
        "aliases": "",
        "keywords": "pager bbcall oldschool"
    },
    "joystick": {
        "unicode": "1F579",
        "shortname": ":joystick:",
        "aliases": "",
        "keywords": "joystick games atari controller"
    },
    "telephone_receiver": {
        "unicode": "1F4DE",
        "shortname": ":telephone_receiver:",
        "aliases": "",
        "keywords": "telephone receiver communication dial technology"
    },
    "left_receiver": {
        "unicode": "1F57B",
        "shortname": ":left_receiver:",
        "aliases": ":left_hand_telephone_receiver:",
        "keywords": "left hand telephone receiver communication dial technology"
    },
    "telephone": {
        "unicode": "260E",
        "shortname": ":telephone:",
        "aliases": "",
        "keywords": "black telephone communication dial technology"
    },
    "telephone_white": {
        "unicode": "1F57E",
        "shortname": ":telephone_white:",
        "aliases": ":white_touchtone_telephone:",
        "keywords": "white touchtone telephone communication dial technology"
    },
    "telephone_black": {
        "unicode": "1F57F",
        "shortname": ":telephone_black:",
        "aliases": ":black_touchtone_telephone:",
        "keywords": "black touchtone telephone communication dial technology"
    },
    "flip_phone": {
        "unicode": "1F581",
        "shortname": ":flip_phone:",
        "aliases": ":clamshell_mobile_phone:",
        "keywords": "clamshell mobile phone cellphone"
    },
    "fax": {
        "unicode": "1F4E0",
        "shortname": ":fax:",
        "aliases": "",
        "keywords": "fax machine communication technology"
    },
    "minidisc": {
        "unicode": "1F4BD",
        "shortname": ":minidisc:",
        "aliases": "",
        "keywords": "minidisc data disc disk record technology"
    },
    "floppy_disk": {
        "unicode": "1F4BE",
        "shortname": ":floppy_disk:",
        "aliases": "",
        "keywords": "floppy disk oldschool save technology storage information computer drive megabyte"
    },
    "floppy_black": {
        "unicode": "1F5AA",
        "shortname": ":floppy_black:",
        "aliases": ":black_hard_shell_floppy_disk:",
        "keywords": "black hard shell floppy disk oldschool save technology storage information computer drive megabyte"
    },
    "floppy_white": {
        "unicode": "1F5AB",
        "shortname": ":floppy_white:",
        "aliases": ":white_hard_shell_floppy_disk:",
        "keywords": "white hard shell floppy disk oldschool save technology storage information computer drive megabyte"
    },
    "cartridge": {
        "unicode": "1F5AD",
        "shortname": ":cartridge:",
        "aliases": ":tape_cartridge:",
        "keywords": "tape cartridge oldschool save technology disk storage information computer drive megabyte"
    },
    "hard_disk": {
        "unicode": "1F5B4",
        "shortname": ":hard_disk:",
        "aliases": "",
        "keywords": "hard disk save technology storage information computer drive megabyte gigabyte hd"
    },
    "cd": {
        "unicode": "1F4BF",
        "shortname": ":cd:",
        "aliases": "",
        "keywords": "optical disc disc disk dvd technology"
    },
    "dvd": {
        "unicode": "1F4C0",
        "shortname": ":dvd:",
        "aliases": "",
        "keywords": "dvd cd disc disk"
    },
    "optical_disk": {
        "unicode": "1F5B8",
        "shortname": ":optical_disk:",
        "aliases": ":optical_disc_icon:",
        "keywords": "optical disc icon "
    },
    "vhs": {
        "unicode": "1F4FC",
        "shortname": ":vhs:",
        "aliases": "",
        "keywords": "videocassette oldschool record video"
    },
    "battery": {
        "unicode": "1F50B",
        "shortname": ":battery:",
        "aliases": "",
        "keywords": "battery energy power sustain"
    },
    "electric_plug": {
        "unicode": "1F50C",
        "shortname": ":electric_plug:",
        "aliases": "",
        "keywords": "electric plug charger power"
    },
    "bulb": {
        "unicode": "1F4A1",
        "shortname": ":bulb:",
        "aliases": "",
        "keywords": "electric light bulb electricity light idea bulb light"
    },
    "flashlight": {
        "unicode": "1F526",
        "shortname": ":flashlight:",
        "aliases": "",
        "keywords": "electric torch dark"
    },
    "candle": {
        "unicode": "1F56F",
        "shortname": ":candle:",
        "aliases": "",
        "keywords": "candle light wax"
    },
    "satellite": {
        "unicode": "1F4E1",
        "shortname": ":satellite:",
        "aliases": "",
        "keywords": "satellite antenna communication"
    },
    "satellite_orbital": {
        "unicode": "1F6F0",
        "shortname": ":satellite_orbital:",
        "aliases": "",
        "keywords": "satellite communication"
    },
    "credit_card": {
        "unicode": "1F4B3",
        "shortname": ":credit_card:",
        "aliases": "",
        "keywords": "credit card bill dollar money pay payment credit card loan purchase shopping mastercard visa american express wallet signature"
    },
    "money_with_wings": {
        "unicode": "1F4B8",
        "shortname": ":money_with_wings:",
        "aliases": "",
        "keywords": "money with wings bills dollar payment money wings easy spend work lost blown burned gift cash dollar"
    },
    "moneybag": {
        "unicode": "1F4B0",
        "shortname": ":moneybag:",
        "aliases": "",
        "keywords": "money bag coins dollar payment"
    },
    "gem": {
        "unicode": "1F48E",
        "shortname": ":gem:",
        "aliases": "",
        "keywords": "gem stone blue ruby"
    },
    "closed_umbrella": {
        "unicode": "1F302",
        "shortname": ":closed_umbrella:",
        "aliases": "",
        "keywords": "closed umbrella drizzle rain weather umbrella closed rain moisture protection sun ultraviolet uv"
    },
    "pouch": {
        "unicode": "1F45D",
        "shortname": ":pouch:",
        "aliases": "",
        "keywords": "pouch accessories bag pouch bag cosmetic packing grandma makeup"
    },
    "purse": {
        "unicode": "1F45B",
        "shortname": ":purse:",
        "aliases": "",
        "keywords": "purse accessories fashion money purse clutch bag handbag coin bag accessory money ladies shopping"
    },
    "handbag": {
        "unicode": "1F45C",
        "shortname": ":handbag:",
        "aliases": "",
        "keywords": "handbag accessories accessory bag fashion"
    },
    "briefcase": {
        "unicode": "1F4BC",
        "shortname": ":briefcase:",
        "aliases": "",
        "keywords": "briefcase business documents work"
    },
    "school_satchel": {
        "unicode": "1F392",
        "shortname": ":school_satchel:",
        "aliases": "",
        "keywords": "school satchel bag education student school satchel backpack bag packing pack hike education adventure travel sightsee"
    },
    "lipstick": {
        "unicode": "1F484",
        "shortname": ":lipstick:",
        "aliases": "",
        "keywords": "lipstick fashion female girl"
    },
    "eyeglasses": {
        "unicode": "1F453",
        "shortname": ":eyeglasses:",
        "aliases": "",
        "keywords": "eyeglasses accessories eyesight fashion eyeglasses spectacles eye sight nearsightedness myopia farsightedness hyperopia frames vision see blurry contacts"
    },
    "dark_sunglasses": {
        "unicode": "1F576",
        "shortname": ":dark_sunglasses:",
        "aliases": "",
        "keywords": "dark sunglasses shades"
    },
    "womans_hat": {
        "unicode": "1F452",
        "shortname": ":womans_hat:",
        "aliases": "",
        "keywords": "womans hat accessories fashion female"
    },
    "sandal": {
        "unicode": "1F461",
        "shortname": ":sandal:",
        "aliases": "",
        "keywords": "womans sandal fashion shoes"
    },
    "high_heel": {
        "unicode": "1F460",
        "shortname": ":high_heel:",
        "aliases": "",
        "keywords": "high-heeled shoe fashion female shoes"
    },
    "boot": {
        "unicode": "1F462",
        "shortname": ":boot:",
        "aliases": "",
        "keywords": "womans boots fashion shoes"
    },
    "mans_shoe": {
        "unicode": "1F45E",
        "shortname": ":mans_shoe:",
        "aliases": "",
        "keywords": "mans shoe fashion male"
    },
    "athletic_shoe": {
        "unicode": "1F45F",
        "shortname": ":athletic_shoe:",
        "aliases": "",
        "keywords": "athletic shoe shoes sports"
    },
    "bikini": {
        "unicode": "1F459",
        "shortname": ":bikini:",
        "aliases": "",
        "keywords": "bikini beach fashion female girl swimming woman"
    },
    "dress": {
        "unicode": "1F457",
        "shortname": ":dress:",
        "aliases": "",
        "keywords": "dress clothes fashion"
    },
    "kimono": {
        "unicode": "1F458",
        "shortname": ":kimono:",
        "aliases": "",
        "keywords": "kimono dress fashion female japanese women"
    },
    "womans_clothes": {
        "unicode": "1F45A",
        "shortname": ":womans_clothes:",
        "aliases": "",
        "keywords": "womans clothes fashion woman clothing clothes blouse shirt wardrobe breasts cleavage shopping shop dressing dressed"
    },
    "shirt": {
        "unicode": "1F455",
        "shortname": ":shirt:",
        "aliases": "",
        "keywords": "t-shirt cloth fashion"
    },
    "necktie": {
        "unicode": "1F454",
        "shortname": ":necktie:",
        "aliases": "",
        "keywords": "necktie cloth fashion formal shirt suitup"
    },
    "jeans": {
        "unicode": "1F456",
        "shortname": ":jeans:",
        "aliases": "",
        "keywords": "jeans fashion shopping jeans pants blue denim levi's levi designer work skinny"
    },
    "door": {
        "unicode": "1F6AA",
        "shortname": ":door:",
        "aliases": "",
        "keywords": "door entry exit house door doorway entrance enter exit entry"
    },
    "shower": {
        "unicode": "1F6BF",
        "shortname": ":shower:",
        "aliases": "",
        "keywords": "shower bath clean wash bathroom shower soap water clean shampoo lather"
    },
    "bathtub": {
        "unicode": "1F6C1",
        "shortname": ":bathtub:",
        "aliases": "",
        "keywords": "bathtub clean shower bath tub basin wash bubble soak bathroom soap water clean shampoo lather water"
    },
    "toilet": {
        "unicode": "1F6BD",
        "shortname": ":toilet:",
        "aliases": "",
        "keywords": "toilet restroom wc toilet bathroom throne porcelain waste flush plumbing"
    },
    "barber": {
        "unicode": "1F488",
        "shortname": ":barber:",
        "aliases": "",
        "keywords": "barber pole hair salon style"
    },
    "syringe": {
        "unicode": "1F489",
        "shortname": ":syringe:",
        "aliases": "",
        "keywords": "syringe blood drugs health hospital medicine needle"
    },
    "pill": {
        "unicode": "1F48A",
        "shortname": ":pill:",
        "aliases": "",
        "keywords": "pill health medicine"
    },
    "microscope": {
        "unicode": "1F52C",
        "shortname": ":microscope:",
        "aliases": "",
        "keywords": "microscope experiment laboratory zoomin"
    },
    "telescope": {
        "unicode": "1F52D",
        "shortname": ":telescope:",
        "aliases": "",
        "keywords": "telescope space stars"
    },
    "crystal_ball": {
        "unicode": "1F52E",
        "shortname": ":crystal_ball:",
        "aliases": "",
        "keywords": "crystal ball disco party"
    },
    "wrench": {
        "unicode": "1F527",
        "shortname": ":wrench:",
        "aliases": "",
        "keywords": "wrench diy ikea tools"
    },
    "knife": {
        "unicode": "1F52A",
        "shortname": ":knife:",
        "aliases": "",
        "keywords": "hocho blade"
    },
    "dagger": {
        "unicode": "1F5E1",
        "shortname": ":dagger:",
        "aliases": ":dagger_knife:",
        "keywords": "dagger knife blade"
    },
    "nut_and_bolt": {
        "unicode": "1F529",
        "shortname": ":nut_and_bolt:",
        "aliases": "",
        "keywords": "nut and bolt handy tools"
    },
    "hammer": {
        "unicode": "1F528",
        "shortname": ":hammer:",
        "aliases": "",
        "keywords": "hammer done judge law ruling tools verdict"
    },
    "tools": {
        "unicode": "1F6E0",
        "shortname": ":tools:",
        "aliases": ":hammer_and_wrench:",
        "keywords": "hammer and wrench "
    },
    "oil": {
        "unicode": "1F6E2",
        "shortname": ":oil:",
        "aliases": ":oil_drum:",
        "keywords": "oil drum petroleum"
    },
    "bomb": {
        "unicode": "1F4A3",
        "shortname": ":bomb:",
        "aliases": "",
        "keywords": "bomb boom explode"
    },
    "smoking": {
        "unicode": "1F6AC",
        "shortname": ":smoking:",
        "aliases": "",
        "keywords": "smoking symbol cigarette kills tobacco smoking cigarette smoke cancer lungs inhale tar nicotine"
    },
    "crossbones": {
        "unicode": "1F571",
        "shortname": ":crossbones:",
        "aliases": ":black_skull_and_crossbones:",
        "keywords": "black skull and crossbones poison danger death"
    },
    "gun": {
        "unicode": "1F52B",
        "shortname": ":gun:",
        "aliases": "",
        "keywords": "pistol violence weapon"
    },
    "bookmark": {
        "unicode": "1F516",
        "shortname": ":bookmark:",
        "aliases": "",
        "keywords": "bookmark favorite"
    },
    "newspaper": {
        "unicode": "1F4F0",
        "shortname": ":newspaper:",
        "aliases": "",
        "keywords": "newspaper headline press"
    },
    "newspaper2": {
        "unicode": "1F5DE",
        "shortname": ":newspaper2:",
        "aliases": ":rolled_up_newspaper:",
        "keywords": "rolled-up newspaper headline press"
    },
    "thermometer": {
        "unicode": "1F321",
        "shortname": ":thermometer:",
        "aliases": "",
        "keywords": "thermometer temperature"
    },
    "label": {
        "unicode": "1F3F7",
        "shortname": ":label:",
        "aliases": "",
        "keywords": "label tag"
    },
    "key": {
        "unicode": "1F511",
        "shortname": ":key:",
        "aliases": "",
        "keywords": "key door lock password"
    },
    "key2": {
        "unicode": "1F5DD",
        "shortname": ":key2:",
        "aliases": ":old_key:",
        "keywords": "old key door lock password skeleton"
    },
    "envelope": {
        "unicode": "2709",
        "shortname": ":envelope:",
        "aliases": "",
        "keywords": "envelope communication letter mail postal"
    },
    "envelope_back": {
        "unicode": "1F582",
        "shortname": ":envelope_back:",
        "aliases": ":back_of_envelope:",
        "keywords": "back of envelope "
    },
    "envelope_stamped": {
        "unicode": "1F583",
        "shortname": ":envelope_stamped:",
        "aliases": ":stamped_envelope:",
        "keywords": "stamped envelope "
    },
    "envelope_flying": {
        "unicode": "1F585",
        "shortname": ":envelope_flying:",
        "aliases": ":flying_envelope:",
        "keywords": "flying envelope "
    },
    "envelope_stamped_pen": {
        "unicode": "1F586",
        "shortname": ":envelope_stamped_pen:",
        "aliases": ":pen_over_stamped_envelope:",
        "keywords": "pen over stamped envelope "
    },
    "envelope_with_arrow": {
        "unicode": "1F4E9",
        "shortname": ":envelope_with_arrow:",
        "aliases": "",
        "keywords": "envelope with downwards arrow above email"
    },
    "incoming_envelope": {
        "unicode": "1F4E8",
        "shortname": ":incoming_envelope:",
        "aliases": "",
        "keywords": "incoming envelope email inbox"
    },
    "e-mail": {
        "unicode": "1F4E7",
        "shortname": ":e-mail:",
        "aliases": ":email:",
        "keywords": "e-mail symbol communication inbox"
    },
    "inbox_tray": {
        "unicode": "1F4E5",
        "shortname": ":inbox_tray:",
        "aliases": "",
        "keywords": "inbox tray documents email"
    },
    "outbox_tray": {
        "unicode": "1F4E4",
        "shortname": ":outbox_tray:",
        "aliases": "",
        "keywords": "outbox tray email inbox"
    },
    "package": {
        "unicode": "1F4E6",
        "shortname": ":package:",
        "aliases": "",
        "keywords": "package gift mail"
    },
    "postal_horn": {
        "unicode": "1F4EF",
        "shortname": ":postal_horn:",
        "aliases": "",
        "keywords": "postal horn instrument music"
    },
    "postbox": {
        "unicode": "1F4EE",
        "shortname": ":postbox:",
        "aliases": "",
        "keywords": "postbox email envelope letter"
    },
    "mailbox_closed": {
        "unicode": "1F4EA",
        "shortname": ":mailbox_closed:",
        "aliases": "",
        "keywords": "closed mailbox with lowered flag communication email inbox"
    },
    "mailbox": {
        "unicode": "1F4EB",
        "shortname": ":mailbox:",
        "aliases": "",
        "keywords": "closed mailbox with raised flag communication email inbox"
    },
    "mailbox_with_no_mail": {
        "unicode": "1F4ED",
        "shortname": ":mailbox_with_no_mail:",
        "aliases": "",
        "keywords": "open mailbox with lowered flag email inbox"
    },
    "mailbox_with_mail": {
        "unicode": "1F4EC",
        "shortname": ":mailbox_with_mail:",
        "aliases": "",
        "keywords": "open mailbox with raised flag communication email inbox"
    },
    "document": {
        "unicode": "1F5CE",
        "shortname": ":document:",
        "aliases": "",
        "keywords": "document "
    },
    "document_text": {
        "unicode": "1F5B9",
        "shortname": ":document_text:",
        "aliases": ":document_with_text:",
        "keywords": "document with text "
    },
    "page": {
        "unicode": "1F5CF",
        "shortname": ":page:",
        "aliases": "",
        "keywords": "page "
    },
    "page_facing_up": {
        "unicode": "1F4C4",
        "shortname": ":page_facing_up:",
        "aliases": "",
        "keywords": "page facing up documents"
    },
    "page_with_curl": {
        "unicode": "1F4C3",
        "shortname": ":page_with_curl:",
        "aliases": "",
        "keywords": "page with curl documents"
    },
    "pages": {
        "unicode": "1F5D0",
        "shortname": ":pages:",
        "aliases": "",
        "keywords": "pages "
    },
    "bookmark_tabs": {
        "unicode": "1F4D1",
        "shortname": ":bookmark_tabs:",
        "aliases": "",
        "keywords": "bookmark tabs favorite"
    },
    "wastebasket": {
        "unicode": "1F5D1",
        "shortname": ":wastebasket:",
        "aliases": "",
        "keywords": "wastebasket "
    },
    "note_empty": {
        "unicode": "1F5C6",
        "shortname": ":note_empty:",
        "aliases": ":empty_note_page:",
        "keywords": "empty note page "
    },
    "notepad_empty": {
        "unicode": "1F5C7",
        "shortname": ":notepad_empty:",
        "aliases": ":empty_note_pad:",
        "keywords": "empty note pad "
    },
    "note": {
        "unicode": "1F5C9",
        "shortname": ":note:",
        "aliases": ":note_page:",
        "keywords": "note page "
    },
    "notepad": {
        "unicode": "1F5CA",
        "shortname": ":notepad:",
        "aliases": ":note_pad:",
        "keywords": "note pad "
    },
    "notepad-spiral": {
        "unicode": "1F5D2",
        "shortname": ":notepad-spiral:",
        "aliases": ":spiral_note_pad:",
        "keywords": "spiral note pad "
    },
    "chart_with_upwards_trend": {
        "unicode": "1F4C8",
        "shortname": ":chart_with_upwards_trend:",
        "aliases": "",
        "keywords": "chart with upwards trend graph"
    },
    "chart_with_downwards_trend": {
        "unicode": "1F4C9",
        "shortname": ":chart_with_downwards_trend:",
        "aliases": "",
        "keywords": "chart with downwards trend graph"
    },
    "bar_chart": {
        "unicode": "1F4CA",
        "shortname": ":bar_chart:",
        "aliases": "",
        "keywords": "bar chart graph presentation stats"
    },
    "stock_chart": {
        "unicode": "1F5E0",
        "shortname": ":stock_chart:",
        "aliases": "",
        "keywords": "stock chart "
    },
    "date": {
        "unicode": "1F4C5",
        "shortname": ":date:",
        "aliases": "",
        "keywords": "calendar calendar schedule"
    },
    "calendar": {
        "unicode": "1F4C6",
        "shortname": ":calendar:",
        "aliases": "",
        "keywords": "tear-off calendar schedule"
    },
    "calendar_spiral": {
        "unicode": "1F5D3",
        "shortname": ":calendar_spiral:",
        "aliases": ":spiral_calendar_pad:",
        "keywords": "spiral calendar pad "
    },
    "ballot_box": {
        "unicode": "1F5F3",
        "shortname": ":ballot_box:",
        "aliases": ":ballot_box_with_ballot:",
        "keywords": "ballot box with ballot "
    },
    "low_brightness": {
        "unicode": "1F505",
        "shortname": ":low_brightness:",
        "aliases": "",
        "keywords": "low brightness symbol summer sun"
    },
    "high_brightness": {
        "unicode": "1F506",
        "shortname": ":high_brightness:",
        "aliases": "",
        "keywords": "high brightness symbol light summer sun"
    },
    "compression": {
        "unicode": "1F5DC",
        "shortname": ":compression:",
        "aliases": "",
        "keywords": "compression "
    },
    "frame_x": {
        "unicode": "1F5BE",
        "shortname": ":frame_x:",
        "aliases": ":frame_with_an_x:",
        "keywords": "frame with an x "
    },
    "frame_photo": {
        "unicode": "1F5BC",
        "shortname": ":frame_photo:",
        "aliases": ":frame_with_picture:",
        "keywords": "frame with picture "
    },
    "frame_tiles": {
        "unicode": "1F5BD",
        "shortname": ":frame_tiles:",
        "aliases": ":frame_with_tiles:",
        "keywords": "frame with tiles "
    },
    "scroll": {
        "unicode": "1F4DC",
        "shortname": ":scroll:",
        "aliases": "",
        "keywords": "scroll documents"
    },
    "clipboard": {
        "unicode": "1F4CB",
        "shortname": ":clipboard:",
        "aliases": "",
        "keywords": "clipboard documents stationery"
    },
    "book2": {
        "unicode": "1F56E",
        "shortname": ":book2:",
        "aliases": "",
        "keywords": "book "
    },
    "book": {
        "unicode": "1F4D6",
        "shortname": ":book:",
        "aliases": "",
        "keywords": "open book library literature"
    },
    "notebook": {
        "unicode": "1F4D3",
        "shortname": ":notebook:",
        "aliases": "",
        "keywords": "notebook notes paper record stationery"
    },
    "notebook_with_decorative_cover": {
        "unicode": "1F4D4",
        "shortname": ":notebook_with_decorative_cover:",
        "aliases": "",
        "keywords": "notebook with decorative cover classroom notes paper record"
    },
    "ledger": {
        "unicode": "1F4D2",
        "shortname": ":ledger:",
        "aliases": "",
        "keywords": "ledger notes paper"
    },
    "closed_book": {
        "unicode": "1F4D5",
        "shortname": ":closed_book:",
        "aliases": "",
        "keywords": "closed book knowledge library read"
    },
    "green_book": {
        "unicode": "1F4D7",
        "shortname": ":green_book:",
        "aliases": "",
        "keywords": "green book knowledge library read"
    },
    "blue_book": {
        "unicode": "1F4D8",
        "shortname": ":blue_book:",
        "aliases": "",
        "keywords": "blue book knowledge library read"
    },
    "orange_book": {
        "unicode": "1F4D9",
        "shortname": ":orange_book:",
        "aliases": "",
        "keywords": "orange book knowledge library read"
    },
    "books": {
        "unicode": "1F4DA",
        "shortname": ":books:",
        "aliases": "",
        "keywords": "books library literature"
    },
    "card_index": {
        "unicode": "1F4C7",
        "shortname": ":card_index:",
        "aliases": "",
        "keywords": "card index business stationery"
    },
    "dividers": {
        "unicode": "1F5C2",
        "shortname": ":dividers:",
        "aliases": ":card_index_dividers:",
        "keywords": "card index dividers "
    },
    "card_box": {
        "unicode": "1F5C3",
        "shortname": ":card_box:",
        "aliases": ":card_file_box:",
        "keywords": "card file box "
    },
    "link": {
        "unicode": "1F517",
        "shortname": ":link:",
        "aliases": "",
        "keywords": "link symbol rings url"
    },
    "paperclip": {
        "unicode": "1F4CE",
        "shortname": ":paperclip:",
        "aliases": "",
        "keywords": "paperclip documents stationery"
    },
    "paperclips": {
        "unicode": "1F587",
        "shortname": ":paperclips:",
        "aliases": ":linked_paperclips:",
        "keywords": "linked paperclips "
    },
    "pushpin": {
        "unicode": "1F4CC",
        "shortname": ":pushpin:",
        "aliases": "",
        "keywords": "pushpin stationery"
    },
    "pushpin_black": {
        "unicode": "1F588",
        "shortname": ":pushpin_black:",
        "aliases": "",
        "keywords": "black pushpin "
    },
    "scissors": {
        "unicode": "2702",
        "shortname": ":scissors:",
        "aliases": "",
        "keywords": "black scissors cut stationery"
    },
    "triangular_ruler": {
        "unicode": "1F4D0",
        "shortname": ":triangular_ruler:",
        "aliases": "",
        "keywords": "triangular ruler architect math sketch stationery"
    },
    "round_pushpin": {
        "unicode": "1F4CD",
        "shortname": ":round_pushpin:",
        "aliases": "",
        "keywords": "round pushpin stationery"
    },
    "straight_ruler": {
        "unicode": "1F4CF",
        "shortname": ":straight_ruler:",
        "aliases": "",
        "keywords": "straight ruler stationery"
    },
    "triangular_flag_on_post": {
        "unicode": "1F6A9",
        "shortname": ":triangular_flag_on_post:",
        "aliases": "",
        "keywords": "triangular flag on post triangle triangular flag golf post flagpole"
    },
    "pennant_white": {
        "unicode": "1F3F1",
        "shortname": ":pennant_white:",
        "aliases": ":white_pennant:",
        "keywords": "white pennant "
    },
    "pennant_black": {
        "unicode": "1F3F2",
        "shortname": ":pennant_black:",
        "aliases": ":black_pennant:",
        "keywords": "black pennant "
    },
    "flag_white": {
        "unicode": "1F3F3",
        "shortname": ":flag_white:",
        "aliases": ":waving_white_flag:",
        "keywords": "waving white flag "
    },
    "flag_black": {
        "unicode": "1F3F4",
        "shortname": ":flag_black:",
        "aliases": ":waving_black_flag:",
        "keywords": "waving black flag "
    },
    "hole": {
        "unicode": "1F573",
        "shortname": ":hole:",
        "aliases": "",
        "keywords": "hole "
    },
    "folder": {
        "unicode": "1F5C0",
        "shortname": ":folder:",
        "aliases": "",
        "keywords": "folder "
    },
    "folder_open": {
        "unicode": "1F5C1",
        "shortname": ":folder_open:",
        "aliases": ":open_folder:",
        "keywords": "open folder "
    },
    "file_folder": {
        "unicode": "1F4C1",
        "shortname": ":file_folder:",
        "aliases": "",
        "keywords": "file folder documents"
    },
    "open_file_folder": {
        "unicode": "1F4C2",
        "shortname": ":open_file_folder:",
        "aliases": "",
        "keywords": "open file folder documents load"
    },
    "file_cabinet": {
        "unicode": "1F5C4",
        "shortname": ":file_cabinet:",
        "aliases": "",
        "keywords": "file cabinet "
    },
    "black_nib": {
        "unicode": "2712",
        "shortname": ":black_nib:",
        "aliases": "",
        "keywords": "black nib pen stationery"
    },
    "pencil2": {
        "unicode": "270F",
        "shortname": ":pencil2:",
        "aliases": "",
        "keywords": "pencil paper stationery write"
    },
    "pencil3": {
        "unicode": "1F589",
        "shortname": ":pencil3:",
        "aliases": ":lower_left_pencil:",
        "keywords": "lower left pencil "
    },
    "pen_ballpoint": {
        "unicode": "1F58A",
        "shortname": ":pen_ballpoint:",
        "aliases": ":lower_left_ballpoint_pen:",
        "keywords": "lower left ballpoint pen "
    },
    "pen_fountain": {
        "unicode": "1F58B",
        "shortname": ":pen_fountain:",
        "aliases": ":lower_left_fountain_pen:",
        "keywords": "lower left fountain pen "
    },
    "paintbrush": {
        "unicode": "1F58C",
        "shortname": ":paintbrush:",
        "aliases": ":lower_left_paintbrush:",
        "keywords": "lower left paintbrush "
    },
    "crayon": {
        "unicode": "1F58D",
        "shortname": ":crayon:",
        "aliases": ":lower_left_crayon:",
        "keywords": "lower left crayon "
    },
    "pencil": {
        "unicode": "1F4DD",
        "shortname": ":pencil:",
        "aliases": "",
        "keywords": "memo documents paper station write"
    },
    "lock_with_ink_pen": {
        "unicode": "1F50F",
        "shortname": ":lock_with_ink_pen:",
        "aliases": "",
        "keywords": "lock with ink pen secret security"
    },
    "closed_lock_with_key": {
        "unicode": "1F510",
        "shortname": ":closed_lock_with_key:",
        "aliases": "",
        "keywords": "closed lock with key privacy security"
    },
    "lock": {
        "unicode": "1F512",
        "shortname": ":lock:",
        "aliases": "",
        "keywords": "lock password security"
    },
    "unlock": {
        "unicode": "1F513",
        "shortname": ":unlock:",
        "aliases": "",
        "keywords": "open lock privacy security"
    },
    "mega": {
        "unicode": "1F4E3",
        "shortname": ":mega:",
        "aliases": "",
        "keywords": "cheering megaphone sound speaker volume"
    },
    "loudspeaker": {
        "unicode": "1F4E2",
        "shortname": ":loudspeaker:",
        "aliases": "",
        "keywords": "public address loudspeaker sound volume"
    },
    "speaker": {
        "unicode": "1F508",
        "shortname": ":speaker:",
        "aliases": "",
        "keywords": "speaker sound listen hear noise"
    },
    "sound": {
        "unicode": "1F509",
        "shortname": ":sound:",
        "aliases": "",
        "keywords": "speaker with one sound wave speaker volume"
    },
    "loud_sound": {
        "unicode": "1F50A",
        "shortname": ":loud_sound:",
        "aliases": "",
        "keywords": "speaker with three sound waves "
    },
    "mute": {
        "unicode": "1F507",
        "shortname": ":mute:",
        "aliases": "",
        "keywords": "speaker with cancellation stroke sound volume"
    },
    "right_speaker": {
        "unicode": "1F568",
        "shortname": ":right_speaker:",
        "aliases": "",
        "keywords": "right speaker "
    },
    "right_speaker_one": {
        "unicode": "1F569",
        "shortname": ":right_speaker_one:",
        "aliases": ":right_speaker_with_one_sound_wave:",
        "keywords": "right speaker with one sound wave "
    },
    "right_speaker_three": {
        "unicode": "1F56A",
        "shortname": ":right_speaker_three:",
        "aliases": ":right_speaker_with_three_sound_waves:",
        "keywords": "right speaker with three sound waves "
    },
    "bullhorn": {
        "unicode": "1F56B",
        "shortname": ":bullhorn:",
        "aliases": "",
        "keywords": "bullhorn "
    },
    "bullhorn_waves": {
        "unicode": "1F56C",
        "shortname": ":bullhorn_waves:",
        "aliases": ":bullhorn_with_sound_waves:",
        "keywords": "bullhorn with sound waves "
    },
    "zzz": {
        "unicode": "1F4A4",
        "shortname": ":zzz:",
        "aliases": "",
        "keywords": "sleeping symbol sleepy tired"
    },
    "bell": {
        "unicode": "1F514",
        "shortname": ":bell:",
        "aliases": "",
        "keywords": "bell chime christmas notification sound xmas"
    },
    "no_bell": {
        "unicode": "1F515",
        "shortname": ":no_bell:",
        "aliases": "",
        "keywords": "bell with cancellation stroke mute sound volume"
    },
    "ringing_bell": {
        "unicode": "1F56D",
        "shortname": ":ringing_bell:",
        "aliases": "",
        "keywords": "ringing bell "
    },
    "ascending_notes": {
        "unicode": "1F39C",
        "shortname": ":ascending_notes:",
        "aliases": "",
        "keywords": "beamed ascending musical notes "
    },
    "descending_notes": {
        "unicode": "1F39D",
        "shortname": ":descending_notes:",
        "aliases": "",
        "keywords": "beamed descending musical notes "
    },
    "cross_white": {
        "unicode": "1F546",
        "shortname": ":cross_white:",
        "aliases": ":white_latin_cross:",
        "keywords": "white latin cross "
    },
    "cross_heavy": {
        "unicode": "1F547",
        "shortname": ":cross_heavy:",
        "aliases": ":heavy_latin_cross:",
        "keywords": "heavy latin cross "
    },
    "celtic_cross": {
        "unicode": "1F548",
        "shortname": ":celtic_cross:",
        "aliases": "",
        "keywords": "celtic cross "
    },
    "om_symbol": {
        "unicode": "1F549",
        "shortname": ":om_symbol:",
        "aliases": "",
        "keywords": "om symbol "
    },
    "dove": {
        "unicode": "1F54A",
        "shortname": ":dove:",
        "aliases": ":dove_of_peace:",
        "keywords": "dove of peace "
    },
    "thought_balloon": {
        "unicode": "1F4AD",
        "shortname": ":thought_balloon:",
        "aliases": "",
        "keywords": "thought balloon bubble cloud speech thought balloon comic think day dream wonder"
    },
    "speech_balloon": {
        "unicode": "1F4AC",
        "shortname": ":speech_balloon:",
        "aliases": "",
        "keywords": "speech balloon bubble words speech balloon talk conversation communication comic dialogue"
    },
    "speech_left": {
        "unicode": "1F5E8",
        "shortname": ":speech_left:",
        "aliases": ":left_speech_bubble:",
        "keywords": "left speech bubble "
    },
    "speech_right": {
        "unicode": "1F5E9",
        "shortname": ":speech_right:",
        "aliases": ":right_speech_bubble:",
        "keywords": "right speech bubble "
    },
    "speech_two": {
        "unicode": "1F5EA",
        "shortname": ":speech_two:",
        "aliases": ":two_speech_bubbles:",
        "keywords": "two speech bubbles "
    },
    "speech_three": {
        "unicode": "1F5EB",
        "shortname": ":speech_three:",
        "aliases": ":three_speech_bubbles:",
        "keywords": "three speech bubbles "
    },
    "thought_left": {
        "unicode": "1F5EC",
        "shortname": ":thought_left:",
        "aliases": ":left_thought_bubble:",
        "keywords": "left thought bubble "
    },
    "thought_right": {
        "unicode": "1F5ED",
        "shortname": ":thought_right:",
        "aliases": ":right_thought_bubble:",
        "keywords": "right thought bubble "
    },
    "anger_left": {
        "unicode": "1F5EE",
        "shortname": ":anger_left:",
        "aliases": ":left_anger_bubble:",
        "keywords": "left anger bubble "
    },
    "anger_right": {
        "unicode": "1F5EF",
        "shortname": ":anger_right:",
        "aliases": ":right_anger_bubble:",
        "keywords": "right anger bubble "
    },
    "mood_bubble": {
        "unicode": "1F5F0",
        "shortname": ":mood_bubble:",
        "aliases": "",
        "keywords": "mood bubble "
    },
    "mood_bubble_lightning": {
        "unicode": "1F5F1",
        "shortname": ":mood_bubble_lightning:",
        "aliases": ":lightning_mood_bubble:",
        "keywords": "lightning mood bubble "
    },
    "children_crossing": {
        "unicode": "1F6B8",
        "shortname": ":children_crossing:",
        "aliases": "",
        "keywords": "children crossing school children kids caution crossing street crosswalk slow"
    },
    "shield": {
        "unicode": "1F6E1",
        "shortname": ":shield:",
        "aliases": "",
        "keywords": "shield "
    },
    "mag": {
        "unicode": "1F50D",
        "shortname": ":mag:",
        "aliases": "",
        "keywords": "left-pointing magnifying glass search zoom detective investigator detail details"
    },
    "mag_right": {
        "unicode": "1F50E",
        "shortname": ":mag_right:",
        "aliases": "",
        "keywords": "right-pointing magnifying glass search zoom detective investigator detail details"
    },
    "speaking_head": {
        "unicode": "1F5E3",
        "shortname": ":speaking_head:",
        "aliases": ":speaking_head_in_silhouette:",
        "keywords": "speaking head in silhouette "
    },
    "sleeping_accommodation": {
        "unicode": "1F6CC",
        "shortname": ":sleeping_accommodation:",
        "aliases": "",
        "keywords": "sleeping accommodation "
    },
    "prohibited": {
        "unicode": "1F6C7",
        "shortname": ":prohibited:",
        "aliases": ":prohibited_sign:",
        "keywords": "prohibited sign "
    },
    "no_entry_sign": {
        "unicode": "1F6AB",
        "shortname": ":no_entry_sign:",
        "aliases": "",
        "keywords": "no entry sign denied disallow forbid limit stop no stop entry"
    },
    "no_entry": {
        "unicode": "26D4",
        "shortname": ":no_entry:",
        "aliases": "",
        "keywords": "no entry bad denied limit privacy security stop"
    },
    "name_badge": {
        "unicode": "1F4DB",
        "shortname": ":name_badge:",
        "aliases": "",
        "keywords": "name badge fire forbid"
    },
    "no_pedestrians": {
        "unicode": "1F6B7",
        "shortname": ":no_pedestrians:",
        "aliases": "",
        "keywords": "no pedestrians crossing rules walking no walk pedestrian stroll stride foot feet"
    },
    "do_not_litter": {
        "unicode": "1F6AF",
        "shortname": ":do_not_litter:",
        "aliases": "",
        "keywords": "do not litter symbol bin garbage trash litter garbage waste no can trash"
    },
    "no_bicycles": {
        "unicode": "1F6B3",
        "shortname": ":no_bicycles:",
        "aliases": "",
        "keywords": "no bicycles cyclist prohibited bicycle bike pedal no"
    },
    "non-potable_water": {
        "unicode": "1F6B1",
        "shortname": ":non-potable_water:",
        "aliases": "",
        "keywords": "non-potable water symbol drink faucet tap non-potable water not drinkable dirty gross aqua h20"
    },
    "no_mobile_phones": {
        "unicode": "1F4F5",
        "shortname": ":no_mobile_phones:",
        "aliases": "",
        "keywords": "no mobile phones iphone mute"
    },
    "underage": {
        "unicode": "1F51E",
        "shortname": ":underage:",
        "aliases": "",
        "keywords": "no one under eighteen symbol 18 drink night pub"
    },
    "piracy": {
        "unicode": "1F572",
        "shortname": ":piracy:",
        "aliases": ":no_piracy:",
        "keywords": "no piracy "
    },
    "accept": {
        "unicode": "1F251",
        "shortname": ":accept:",
        "aliases": "",
        "keywords": "circled ideograph accept agree chinese good kanji ok yes"
    },
    "ideograph_advantage": {
        "unicode": "1F250",
        "shortname": ":ideograph_advantage:",
        "aliases": "",
        "keywords": "circled ideograph advantage chinese get kanji obtain"
    },
    "white_flower": {
        "unicode": "1F4AE",
        "shortname": ":white_flower:",
        "aliases": "",
        "keywords": "white flower japanese white flower teacher school grade score brilliance intelligence homework student assignment praise"
    },
    "secret": {
        "unicode": "3299",
        "shortname": ":secret:",
        "aliases": "",
        "keywords": "circled ideograph secret privacy"
    },
    "congratulations": {
        "unicode": "3297",
        "shortname": ":congratulations:",
        "aliases": "",
        "keywords": "circled ideograph congratulation chinese japanese kanji"
    },
    "u5408": {
        "unicode": "1F234",
        "shortname": ":u5408:",
        "aliases": "",
        "keywords": "squared cjk unified ideograph-5408 chinese japanese join kanji"
    },
    "u6e80": {
        "unicode": "1F235",
        "shortname": ":u6e80:",
        "aliases": "",
        "keywords": "squared cjk unified ideograph-6e80 chinese full japanese kanji red-square"
    },
    "u7981": {
        "unicode": "1F232",
        "shortname": ":u7981:",
        "aliases": "",
        "keywords": "squared cjk unified ideograph-7981 chinese forbidden japanese kanji limit restricted"
    },
    "u6709": {
        "unicode": "1F236",
        "shortname": ":u6709:",
        "aliases": "",
        "keywords": "squared cjk unified ideograph-6709 chinese have kanji orange-square"
    },
    "u7121": {
        "unicode": "1F21A",
        "shortname": ":u7121:",
        "aliases": "",
        "keywords": "squared cjk unified ideograph-7121 chinese japanese kanji no nothing orange-square"
    },
    "u7533": {
        "unicode": "1F238",
        "shortname": ":u7533:",
        "aliases": "",
        "keywords": "squared cjk unified ideograph-7533 chinese japanese kanji"
    },
    "u55b6": {
        "unicode": "1F23A",
        "shortname": ":u55b6:",
        "aliases": "",
        "keywords": "squared cjk unified ideograph-55b6 japanese opening hours"
    },
    "u6708": {
        "unicode": "1F237",
        "shortname": ":u6708:",
        "aliases": "",
        "keywords": "squared cjk unified ideograph-6708 chinese japanese kanji moon orange-square"
    },
    "u5272": {
        "unicode": "1F239",
        "shortname": ":u5272:",
        "aliases": "",
        "keywords": "squared cjk unified ideograph-5272 chinese cut divide kanji pink"
    },
    "u7a7a": {
        "unicode": "1F233",
        "shortname": ":u7a7a:",
        "aliases": "",
        "keywords": "squared cjk unified ideograph-7a7a chinese empty japanese kanji"
    },
    "sa": {
        "unicode": "1F202",
        "shortname": ":sa:",
        "aliases": "",
        "keywords": "squared katakana sa blue-square japanese"
    },
    "koko": {
        "unicode": "1F201",
        "shortname": ":koko:",
        "aliases": "",
        "keywords": "squared katakana koko blue-square destination here japanese katakana"
    },
    "u6307": {
        "unicode": "1F22F",
        "shortname": ":u6307:",
        "aliases": "",
        "keywords": "squared cjk unified ideograph-6307 chinese green-square kanji point"
    },
    "chart": {
        "unicode": "1F4B9",
        "shortname": ":chart:",
        "aliases": "",
        "keywords": "chart with upwards trend and yen sign graph green-square"
    },
    "sparkle": {
        "unicode": "2747",
        "shortname": ":sparkle:",
        "aliases": "",
        "keywords": "sparkle green-square stars"
    },
    "eight_spoked_asterisk": {
        "unicode": "2733",
        "shortname": ":eight_spoked_asterisk:",
        "aliases": "",
        "keywords": "eight spoked asterisk green-square sparkle star"
    },
    "negative_squared_cross_mark": {
        "unicode": "274E",
        "shortname": ":negative_squared_cross_mark:",
        "aliases": "",
        "keywords": "negative squared cross mark deny green-square no x"
    },
    "white_check_mark": {
        "unicode": "2705",
        "shortname": ":white_check_mark:",
        "aliases": "",
        "keywords": "white heavy check mark agree green-square ok"
    },
    "eight_pointed_black_star": {
        "unicode": "2734",
        "shortname": ":eight_pointed_black_star:",
        "aliases": "",
        "keywords": "eight pointed black star "
    },
    "vibration_mode": {
        "unicode": "1F4F3",
        "shortname": ":vibration_mode:",
        "aliases": "",
        "keywords": "vibration mode orange-square phone"
    },
    "mobile_phone_off": {
        "unicode": "1F4F4",
        "shortname": ":mobile_phone_off:",
        "aliases": "",
        "keywords": "mobile phone off mute"
    },
    "vs": {
        "unicode": "1F19A",
        "shortname": ":vs:",
        "aliases": "",
        "keywords": "squared vs orange-square words"
    },
    "a": {
        "unicode": "1F170",
        "shortname": ":a:",
        "aliases": "",
        "keywords": "negative squared latin capital letter a alphabet letter red-square"
    },
    "b": {
        "unicode": "1F171",
        "shortname": ":b:",
        "aliases": "",
        "keywords": "negative squared latin capital letter b alphabet letter red-square"
    },
    "ab": {
        "unicode": "1F18E",
        "shortname": ":ab:",
        "aliases": "",
        "keywords": "negative squared ab alphabet red-square"
    },
    "cl": {
        "unicode": "1F191",
        "shortname": ":cl:",
        "aliases": "",
        "keywords": "squared cl alphabet red-square words"
    },
    "o2": {
        "unicode": "1F17E",
        "shortname": ":o2:",
        "aliases": "",
        "keywords": "negative squared latin capital letter o alphabet letter red-square"
    },
    "sos": {
        "unicode": "1F198",
        "shortname": ":sos:",
        "aliases": "",
        "keywords": "squared sos emergency help red-square words"
    },
    "id": {
        "unicode": "1F194",
        "shortname": ":id:",
        "aliases": "",
        "keywords": "squared id purple-square words"
    },
    "parking": {
        "unicode": "1F17F",
        "shortname": ":parking:",
        "aliases": "",
        "keywords": "negative squared latin capital letter p alphabet blue-square cars letter"
    },
    "wc": {
        "unicode": "1F6BE",
        "shortname": ":wc:",
        "aliases": "",
        "keywords": "water closet blue-square restroom toilet water closet toilet bathroom throne porcelain waste flush plumbing"
    },
    "cool": {
        "unicode": "1F192",
        "shortname": ":cool:",
        "aliases": "",
        "keywords": "squared cool blue-square words"
    },
    "free": {
        "unicode": "1F193",
        "shortname": ":free:",
        "aliases": "",
        "keywords": "squared free blue-square words"
    },
    "new": {
        "unicode": "1F195",
        "shortname": ":new:",
        "aliases": "",
        "keywords": "squared new blue-square"
    },
    "ng": {
        "unicode": "1F196",
        "shortname": ":ng:",
        "aliases": "",
        "keywords": "squared ng blue-square"
    },
    "ok": {
        "unicode": "1F197",
        "shortname": ":ok:",
        "aliases": "",
        "keywords": "squared ok agree blue-square good yes"
    },
    "up": {
        "unicode": "1F199",
        "shortname": ":up:",
        "aliases": "",
        "keywords": "squared up with exclamation mark blue-square"
    },
    "atm": {
        "unicode": "1F3E7",
        "shortname": ":atm:",
        "aliases": "",
        "keywords": "automated teller machine atm cash withdrawal money deposit financial bank adam payday bank blue-square cash money payment"
    },
    "aries": {
        "unicode": "2648",
        "shortname": ":aries:",
        "aliases": "",
        "keywords": "aries aries ram astrology greek constellation stars zodiac sign purple-square sign zodiac horoscope"
    },
    "taurus": {
        "unicode": "2649",
        "shortname": ":taurus:",
        "aliases": "",
        "keywords": "taurus purple-square sign taurus bull astrology greek constellation stars zodiac sign zodiac horoscope"
    },
    "gemini": {
        "unicode": "264A",
        "shortname": ":gemini:",
        "aliases": "",
        "keywords": "gemini gemini twins astrology greek constellation stars zodiac sign sign zodiac horoscope"
    },
    "cancer": {
        "unicode": "264B",
        "shortname": ":cancer:",
        "aliases": "",
        "keywords": "cancer cancer crab astrology greek constellation stars zodiac sign sign zodiac horoscope"
    },
    "leo": {
        "unicode": "264C",
        "shortname": ":leo:",
        "aliases": "",
        "keywords": "leo leo lion astrology greek constellation stars zodiac sign purple-square sign zodiac horoscope"
    },
    "virgo": {
        "unicode": "264D",
        "shortname": ":virgo:",
        "aliases": "",
        "keywords": "virgo sign virgo maiden astrology greek constellation stars zodiac sign zodiac horoscope"
    },
    "libra": {
        "unicode": "264E",
        "shortname": ":libra:",
        "aliases": "",
        "keywords": "libra libra scales astrology greek constellation stars zodiac sign purple-square sign zodiac horoscope"
    },
    "scorpius": {
        "unicode": "264F",
        "shortname": ":scorpius:",
        "aliases": "",
        "keywords": "scorpius scorpius scorpion scorpio astrology greek constellation stars zodiac sign sign zodiac horoscope"
    },
    "sagittarius": {
        "unicode": "2650",
        "shortname": ":sagittarius:",
        "aliases": "",
        "keywords": "sagittarius sagittarius centaur archer astrology greek constellation stars zodiac sign sign zodiac horoscope"
    },
    "capricorn": {
        "unicode": "2651",
        "shortname": ":capricorn:",
        "aliases": "",
        "keywords": "capricorn capricorn sea-goat goat-horned astrology greek constellation stars zodiac sign sign zodiac horoscope"
    },
    "aquarius": {
        "unicode": "2652",
        "shortname": ":aquarius:",
        "aliases": "",
        "keywords": "aquarius aquarius water bearer astrology greek constellation stars zodiac sign purple-square sign zodiac horoscope"
    },
    "pisces": {
        "unicode": "2653",
        "shortname": ":pisces:",
        "aliases": "",
        "keywords": "pisces pisces fish astrology greek constellation stars zodiac sign purple-square sign zodiac horoscope"
    },
    "restroom": {
        "unicode": "1F6BB",
        "shortname": ":restroom:",
        "aliases": "",
        "keywords": "restroom blue-square woman man unisex bathroom restroom sign shared toilet"
    },
    "mens": {
        "unicode": "1F6B9",
        "shortname": ":mens:",
        "aliases": "",
        "keywords": "mens symbol restroom toilet wc men bathroom restroom sign boy male avatar"
    },
    "womens": {
        "unicode": "1F6BA",
        "shortname": ":womens:",
        "aliases": "",
        "keywords": "womens symbol purple-square woman bathroom restroom sign girl female avatar"
    },
    "boys_symbol": {
        "unicode": "1F6C9",
        "shortname": ":boys_symbol:",
        "aliases": "",
        "keywords": "boys symbol "
    },
    "girls_symbol": {
        "unicode": "1F6CA",
        "shortname": ":girls_symbol:",
        "aliases": "",
        "keywords": "girls symbol "
    },
    "baby_symbol": {
        "unicode": "1F6BC",
        "shortname": ":baby_symbol:",
        "aliases": "",
        "keywords": "baby symbol child orange-square baby crawl newborn human diaper small babe"
    },
    "wheelchair": {
        "unicode": "267F",
        "shortname": ":wheelchair:",
        "aliases": "",
        "keywords": "wheelchair symbol blue-square disabled"
    },
    "potable_water": {
        "unicode": "1F6B0",
        "shortname": ":potable_water:",
        "aliases": "",
        "keywords": "potable water symbol blue-square cleaning faucet liquid restroom potable water drinkable pure clear clean aqua h20"
    },
    "no_smoking": {
        "unicode": "1F6AD",
        "shortname": ":no_smoking:",
        "aliases": "",
        "keywords": "no smoking symbol cigarette no smoking cigarette smoke cancer lungs inhale tar nicotine"
    },
    "put_litter_in_its_place": {
        "unicode": "1F6AE",
        "shortname": ":put_litter_in_its_place:",
        "aliases": "",
        "keywords": "put litter in its place symbol blue-square litter waste trash garbage receptacle can"
    },
    "arrow_forward": {
        "unicode": "25B6",
        "shortname": ":arrow_forward:",
        "aliases": "",
        "keywords": "black right-pointing triangle arrow blue-square"
    },
    "arrow_backward": {
        "unicode": "25C0",
        "shortname": ":arrow_backward:",
        "aliases": "",
        "keywords": "black left-pointing triangle arrow blue-square"
    },
    "arrow_up_small": {
        "unicode": "1F53C",
        "shortname": ":arrow_up_small:",
        "aliases": "",
        "keywords": "up-pointing small red triangle blue-square"
    },
    "arrow_down_small": {
        "unicode": "1F53D",
        "shortname": ":arrow_down_small:",
        "aliases": "",
        "keywords": "down-pointing small red triangle arrow blue-square"
    },
    "fast_forward": {
        "unicode": "23E9",
        "shortname": ":fast_forward:",
        "aliases": "",
        "keywords": "black right-pointing double triangle blue-square"
    },
    "rewind": {
        "unicode": "23EA",
        "shortname": ":rewind:",
        "aliases": "",
        "keywords": "black left-pointing double triangle blue-square play"
    },
    "arrow_double_up": {
        "unicode": "23EB",
        "shortname": ":arrow_double_up:",
        "aliases": "",
        "keywords": "black up-pointing double triangle arrow blue-square"
    },
    "arrow_double_down": {
        "unicode": "23EC",
        "shortname": ":arrow_double_down:",
        "aliases": "",
        "keywords": "black down-pointing double triangle arrow blue-square"
    },
    "arrow_right": {
        "unicode": "27A1",
        "shortname": ":arrow_right:",
        "aliases": "",
        "keywords": "black rightwards arrow blue-square next"
    },
    "arrow_left": {
        "unicode": "2B05",
        "shortname": ":arrow_left:",
        "aliases": "",
        "keywords": "leftwards black arrow arrow blue-square previous"
    },
    "arrow_up": {
        "unicode": "2B06",
        "shortname": ":arrow_up:",
        "aliases": "",
        "keywords": "upwards black arrow blue-square"
    },
    "arrow_down": {
        "unicode": "2B07",
        "shortname": ":arrow_down:",
        "aliases": "",
        "keywords": "downwards black arrow arrow blue-square"
    },
    "arrow_upper_right": {
        "unicode": "2197",
        "shortname": ":arrow_upper_right:",
        "aliases": "",
        "keywords": "north east arrow blue-square"
    },
    "arrow_lower_right": {
        "unicode": "2198",
        "shortname": ":arrow_lower_right:",
        "aliases": "",
        "keywords": "south east arrow arrow blue-square"
    },
    "arrow_lower_left": {
        "unicode": "2199",
        "shortname": ":arrow_lower_left:",
        "aliases": "",
        "keywords": "south west arrow arrow blue-square"
    },
    "arrow_upper_left": {
        "unicode": "2196",
        "shortname": ":arrow_upper_left:",
        "aliases": "",
        "keywords": "north west arrow blue-square"
    },
    "arrow_up_down": {
        "unicode": "2195",
        "shortname": ":arrow_up_down:",
        "aliases": "",
        "keywords": "up down arrow blue-square"
    },
    "left_right_arrow": {
        "unicode": "2194",
        "shortname": ":left_right_arrow:",
        "aliases": "",
        "keywords": "left right arrow shape"
    },
    "arrows_counterclockwise": {
        "unicode": "1F504",
        "shortname": ":arrows_counterclockwise:",
        "aliases": "",
        "keywords": "anticlockwise downwards and upwards open circle ar blue-square sync"
    },
    "arrow_right_hook": {
        "unicode": "21AA",
        "shortname": ":arrow_right_hook:",
        "aliases": "",
        "keywords": "rightwards arrow with hook blue-square"
    },
    "leftwards_arrow_with_hook": {
        "unicode": "21A9",
        "shortname": ":leftwards_arrow_with_hook:",
        "aliases": "",
        "keywords": "leftwards arrow with hook "
    },
    "arrow_heading_up": {
        "unicode": "2934",
        "shortname": ":arrow_heading_up:",
        "aliases": "",
        "keywords": "arrow pointing rightwards then curving upwards arrow blue-square"
    },
    "arrow_heading_down": {
        "unicode": "2935",
        "shortname": ":arrow_heading_down:",
        "aliases": "",
        "keywords": "arrow pointing rightwards then curving downwards arrow blue-square"
    },
    "twisted_rightwards_arrows": {
        "unicode": "1F500",
        "shortname": ":twisted_rightwards_arrows:",
        "aliases": "",
        "keywords": "twisted rightwards arrows blue-square"
    },
    "repeat": {
        "unicode": "1F501",
        "shortname": ":repeat:",
        "aliases": "",
        "keywords": "clockwise rightwards and leftwards open circle arr loop record"
    },
    "repeat_one": {
        "unicode": "1F502",
        "shortname": ":repeat_one:",
        "aliases": "",
        "keywords": "clockwise rightwards and leftwards open circle arr blue-square loop"
    },
    "hash": {
        "unicode": "0023-20E3",
        "shortname": ":hash:",
        "aliases": "",
        "keywords": "number sign symbol"
    },
    "zero": {
        "unicode": "0030-20E3",
        "shortname": ":zero:",
        "aliases": "",
        "keywords": "digit zero blue-square null numbers"
    },
    "one": {
        "unicode": "0031-20E3",
        "shortname": ":one:",
        "aliases": "",
        "keywords": "digit one 1 blue-square numbers"
    },
    "two": {
        "unicode": "0032-20E3",
        "shortname": ":two:",
        "aliases": "",
        "keywords": "digit two 2 blue-square numbers prime"
    },
    "three": {
        "unicode": "0033-20E3",
        "shortname": ":three:",
        "aliases": "",
        "keywords": "digit three 3 blue-square numbers prime"
    },
    "four": {
        "unicode": "0034-20E3",
        "shortname": ":four:",
        "aliases": "",
        "keywords": "digit four 4 blue-square numbers"
    },
    "five": {
        "unicode": "0035-20E3",
        "shortname": ":five:",
        "aliases": "",
        "keywords": "digit five blue-square numbers prime"
    },
    "six": {
        "unicode": "0036-20E3",
        "shortname": ":six:",
        "aliases": "",
        "keywords": "digit six 6 blue-square numbers"
    },
    "seven": {
        "unicode": "0037-20E3",
        "shortname": ":seven:",
        "aliases": "",
        "keywords": "digit seven 7 blue-square numbers prime"
    },
    "eight": {
        "unicode": "0038-20E3",
        "shortname": ":eight:",
        "aliases": "",
        "keywords": "digit eight 8 blue-square numbers"
    },
    "nine": {
        "unicode": "0039-20E3",
        "shortname": ":nine:",
        "aliases": "",
        "keywords": "digit nine 9 blue-square numbers"
    },
    "keycap_ten": {
        "unicode": "1F51F",
        "shortname": ":keycap_ten:",
        "aliases": "",
        "keywords": "keycap ten 10 blue-square numbers"
    },
    "1234": {
        "unicode": "1F522",
        "shortname": ":1234:",
        "aliases": "",
        "keywords": "input symbol for numbers blue-square numbers"
    },
    "abc": {
        "unicode": "1F524",
        "shortname": ":abc:",
        "aliases": "",
        "keywords": "input symbol for latin letters alphabet blue-square"
    },
    "abcd": {
        "unicode": "1F521",
        "shortname": ":abcd:",
        "aliases": "",
        "keywords": "input symbol for latin small letters alphabet blue-square"
    },
    "capital_abcd": {
        "unicode": "1F520",
        "shortname": ":capital_abcd:",
        "aliases": "",
        "keywords": "input symbol for latin capital letters alphabet blue-square words"
    },
    "information_source": {
        "unicode": "2139",
        "shortname": ":information_source:",
        "aliases": "",
        "keywords": "information source alphabet blue-square letter"
    },
    "signal_strength": {
        "unicode": "1F4F6",
        "shortname": ":signal_strength:",
        "aliases": "",
        "keywords": "antenna with bars blue-square"
    },
    "cinema": {
        "unicode": "1F3A6",
        "shortname": ":cinema:",
        "aliases": "",
        "keywords": "cinema blue-square film movie record cinema movie theater motion picture"
    },
    "symbols": {
        "unicode": "1F523",
        "shortname": ":symbols:",
        "aliases": "",
        "keywords": "input symbol for symbols blue-square"
    },
    "heavy_plus_sign": {
        "unicode": "2795",
        "shortname": ":heavy_plus_sign:",
        "aliases": "",
        "keywords": "heavy plus sign calculation math"
    },
    "heavy_minus_sign": {
        "unicode": "2796",
        "shortname": ":heavy_minus_sign:",
        "aliases": "",
        "keywords": "heavy minus sign calculation math"
    },
    "wavy_dash": {
        "unicode": "3030",
        "shortname": ":wavy_dash:",
        "aliases": "",
        "keywords": "wavy dash draw line"
    },
    "heavy_division_sign": {
        "unicode": "2797",
        "shortname": ":heavy_division_sign:",
        "aliases": "",
        "keywords": "heavy division sign calculation divide math"
    },
    "heavy_multiplication_x": {
        "unicode": "2716",
        "shortname": ":heavy_multiplication_x:",
        "aliases": "",
        "keywords": "heavy multiplication x calculation math"
    },
    "heavy_check_mark": {
        "unicode": "2714",
        "shortname": ":heavy_check_mark:",
        "aliases": "",
        "keywords": "heavy check mark nike ok"
    },
    "cancellation_x": {
        "unicode": "1F5D9",
        "shortname": ":cancellation_x:",
        "aliases": "",
        "keywords": "cancellation x cancel"
    },
    "arrows_clockwise": {
        "unicode": "1F503",
        "shortname": ":arrows_clockwise:",
        "aliases": "",
        "keywords": "clockwise downwards and upwards open circle arrows sync"
    },
    "clockwise_arrows": {
        "unicode": "1F5D8",
        "shortname": ":clockwise_arrows:",
        "aliases": ":clockwise_right_and_left_semicircle_arrows:",
        "keywords": "clockwise right and left semicircle arrows "
    },
    "tm": {
        "unicode": "2122",
        "shortname": ":tm:",
        "aliases": "",
        "keywords": "trade mark sign brand trademark"
    },
    "copyright": {
        "unicode": "00A9",
        "shortname": ":copyright:",
        "aliases": "",
        "keywords": "copyright sign ip license"
    },
    "registered": {
        "unicode": "00AE",
        "shortname": ":registered:",
        "aliases": "",
        "keywords": "registered sign alphabet circle"
    },
    "currency_exchange": {
        "unicode": "1F4B1",
        "shortname": ":currency_exchange:",
        "aliases": "",
        "keywords": "currency exchange dollar money travel"
    },
    "heavy_dollar_sign": {
        "unicode": "1F4B2",
        "shortname": ":heavy_dollar_sign:",
        "aliases": "",
        "keywords": "heavy dollar sign currency money payment dollar currency money cash sale purchase value"
    },
    "curly_loop": {
        "unicode": "27B0",
        "shortname": ":curly_loop:",
        "aliases": "",
        "keywords": "curly loop scribble"
    },
    "loop": {
        "unicode": "27BF",
        "shortname": ":loop:",
        "aliases": "",
        "keywords": "double curly loop curly"
    },
    "part_alternation_mark": {
        "unicode": "303D",
        "shortname": ":part_alternation_mark:",
        "aliases": "",
        "keywords": "part alternation mark graph sing song vocal music karaoke cue letter m japanese"
    },
    "exclamation": {
        "unicode": "2757",
        "shortname": ":exclamation:",
        "aliases": "",
        "keywords": "heavy exclamation mark symbol surprise"
    },
    "question": {
        "unicode": "2753",
        "shortname": ":question:",
        "aliases": "",
        "keywords": "black question mark ornament confused doubt"
    },
    "grey_exclamation": {
        "unicode": "2755",
        "shortname": ":grey_exclamation:",
        "aliases": "",
        "keywords": "white exclamation mark ornament surprise"
    },
    "grey_question": {
        "unicode": "2754",
        "shortname": ":grey_question:",
        "aliases": "",
        "keywords": "white question mark ornament doubts"
    },
    "bangbang": {
        "unicode": "203C",
        "shortname": ":bangbang:",
        "aliases": "",
        "keywords": "double exclamation mark exclamation surprise"
    },
    "interrobang": {
        "unicode": "2049",
        "shortname": ":interrobang:",
        "aliases": "",
        "keywords": "exclamation question mark punctuation surprise wat"
    },
    "triangle_round": {
        "unicode": "1F6C6",
        "shortname": ":triangle_round:",
        "aliases": ":triangle_with_rounded_corners:",
        "keywords": "triangle with rounded corners "
    },
    "x": {
        "unicode": "274C",
        "shortname": ":x:",
        "aliases": "",
        "keywords": "cross mark delete no remove"
    },
    "o": {
        "unicode": "2B55",
        "shortname": ":o:",
        "aliases": "",
        "keywords": "heavy large circle circle round"
    },
    "100": {
        "unicode": "1F4AF",
        "shortname": ":100:",
        "aliases": "",
        "keywords": "hundred points symbol numbers perfect score 100 percent a plus perfect school quiz score test exam"
    },
    "end": {
        "unicode": "1F51A",
        "shortname": ":end:",
        "aliases": "",
        "keywords": "end with leftwards arrow above arrow words"
    },
    "back": {
        "unicode": "1F519",
        "shortname": ":back:",
        "aliases": "",
        "keywords": "back with leftwards arrow above arrow"
    },
    "on": {
        "unicode": "1F51B",
        "shortname": ":on:",
        "aliases": "",
        "keywords": "on with exclamation mark with left right arrow abo arrow words"
    },
    "top": {
        "unicode": "1F51D",
        "shortname": ":top:",
        "aliases": "",
        "keywords": "top with upwards arrow above blue-square words"
    },
    "soon": {
        "unicode": "1F51C",
        "shortname": ":soon:",
        "aliases": "",
        "keywords": "soon with rightwards arrow above arrow words"
    },
    "cyclone": {
        "unicode": "1F300",
        "shortname": ":cyclone:",
        "aliases": "",
        "keywords": "cyclone blue cloud swirl weather cyclone hurricane typhoon storm ocean"
    },
    "m": {
        "unicode": "24C2",
        "shortname": ":m:",
        "aliases": "",
        "keywords": "circled latin capital letter m alphabet blue-circle letter"
    },
    "info": {
        "unicode": "1F6C8",
        "shortname": ":info:",
        "aliases": ":circled_information_source:",
        "keywords": "circled information source "
    },
    "ophiuchus": {
        "unicode": "26CE",
        "shortname": ":ophiuchus:",
        "aliases": "",
        "keywords": "ophiuchus ophiuchus serpent snake astrology greek constellation stars zodiac purple-square sign horoscope"
    },
    "six_pointed_star": {
        "unicode": "1F52F",
        "shortname": ":six_pointed_star:",
        "aliases": "",
        "keywords": "six pointed star with middle dot purple-square"
    },
    "beginner": {
        "unicode": "1F530",
        "shortname": ":beginner:",
        "aliases": "",
        "keywords": "japanese symbol for beginner badge shield"
    },
    "mood_lightning": {
        "unicode": "1F5F2",
        "shortname": ":mood_lightning:",
        "aliases": ":lightning_mood:",
        "keywords": "lightning mood "
    },
    "trident": {
        "unicode": "1F531",
        "shortname": ":trident:",
        "aliases": "",
        "keywords": "trident emblem spear weapon"
    },
    "warning": {
        "unicode": "26A0",
        "shortname": ":warning:",
        "aliases": "",
        "keywords": "warning sign exclamation wip"
    },
    "hotsprings": {
        "unicode": "2668",
        "shortname": ":hotsprings:",
        "aliases": "",
        "keywords": "hot springs bath relax warm"
    },
    "rosette": {
        "unicode": "1F3F5",
        "shortname": ":rosette:",
        "aliases": "",
        "keywords": "rosette "
    },
    "rosette_black": {
        "unicode": "1F3F6",
        "shortname": ":rosette_black:",
        "aliases": "",
        "keywords": "black rosette "
    },
    "recycle": {
        "unicode": "267B",
        "shortname": ":recycle:",
        "aliases": "",
        "keywords": "black universal recycling symbol arrow environment garbage trash"
    },
    "anger": {
        "unicode": "1F4A2",
        "shortname": ":anger:",
        "aliases": "",
        "keywords": "anger symbol anger angry mad"
    },
    "diamond_shape_with_a_dot_inside": {
        "unicode": "1F4A0",
        "shortname": ":diamond_shape_with_a_dot_inside:",
        "aliases": "",
        "keywords": "diamond shape with a dot inside diamond cute cuteness kawaii japanese glyph adorable"
    },
    "spades": {
        "unicode": "2660",
        "shortname": ":spades:",
        "aliases": "",
        "keywords": "black spade suit cards poker"
    },
    "clubs": {
        "unicode": "2663",
        "shortname": ":clubs:",
        "aliases": "",
        "keywords": "black club suit cards poker"
    },
    "hearts": {
        "unicode": "2665",
        "shortname": ":hearts:",
        "aliases": "",
        "keywords": "black heart suit cards poker"
    },
    "diamonds": {
        "unicode": "2666",
        "shortname": ":diamonds:",
        "aliases": "",
        "keywords": "black diamond suit cards poker"
    },
    "ballot_box_with_check": {
        "unicode": "2611",
        "shortname": ":ballot_box_with_check:",
        "aliases": "",
        "keywords": "ballot box with check agree ok"
    },
    "light_check_mark": {
        "unicode": "1F5F8",
        "shortname": ":light_check_mark:",
        "aliases": ":light_mark:",
        "keywords": "light check mark "
    },
    "ballot_box_check": {
        "unicode": "1F5F9",
        "shortname": ":ballot_box_check:",
        "aliases": ":ballot_box_with_bold_check:",
        "keywords": "ballot box with bold check "
    },
    "ballot_x": {
        "unicode": "1F5F4",
        "shortname": ":ballot_x:",
        "aliases": ":ballot_script_x:",
        "keywords": "ballot script x "
    },
    "ballot_box_x": {
        "unicode": "1F5F5",
        "shortname": ":ballot_box_x:",
        "aliases": ":ballot_box_with_script_x:",
        "keywords": "ballot box with script x "
    },
    "white_circle": {
        "unicode": "26AA",
        "shortname": ":white_circle:",
        "aliases": "",
        "keywords": "medium white circle shape"
    },
    "black_circle": {
        "unicode": "26AB",
        "shortname": ":black_circle:",
        "aliases": "",
        "keywords": "medium black circle shape"
    },
    "radio_button": {
        "unicode": "1F518",
        "shortname": ":radio_button:",
        "aliases": "",
        "keywords": "radio button input"
    },
    "red_circle": {
        "unicode": "1F534",
        "shortname": ":red_circle:",
        "aliases": "",
        "keywords": "large red circle shape"
    },
    "large_blue_circle": {
        "unicode": "1F535",
        "shortname": ":large_blue_circle:",
        "aliases": "",
        "keywords": "large blue circle "
    },
    "small_red_triangle": {
        "unicode": "1F53A",
        "shortname": ":small_red_triangle:",
        "aliases": "",
        "keywords": "up-pointing red triangle shape"
    },
    "small_red_triangle_down": {
        "unicode": "1F53B",
        "shortname": ":small_red_triangle_down:",
        "aliases": "",
        "keywords": "down-pointing red triangle shape"
    },
    "small_orange_diamond": {
        "unicode": "1F538",
        "shortname": ":small_orange_diamond:",
        "aliases": "",
        "keywords": "small orange diamond shape"
    },
    "small_blue_diamond": {
        "unicode": "1F539",
        "shortname": ":small_blue_diamond:",
        "aliases": "",
        "keywords": "small blue diamond shape"
    },
    "large_orange_diamond": {
        "unicode": "1F536",
        "shortname": ":large_orange_diamond:",
        "aliases": "",
        "keywords": "large orange diamond shape"
    },
    "large_blue_diamond": {
        "unicode": "1F537",
        "shortname": ":large_blue_diamond:",
        "aliases": "",
        "keywords": "large blue diamond shape"
    },
    "black_small_square": {
        "unicode": "25AA",
        "shortname": ":black_small_square:",
        "aliases": "",
        "keywords": "black small square "
    },
    "white_small_square": {
        "unicode": "25AB",
        "shortname": ":white_small_square:",
        "aliases": "",
        "keywords": "white small square shape"
    },
    "black_large_square": {
        "unicode": "2B1B",
        "shortname": ":black_large_square:",
        "aliases": "",
        "keywords": "black large square shape"
    },
    "white_large_square": {
        "unicode": "2B1C",
        "shortname": ":white_large_square:",
        "aliases": "",
        "keywords": "white large square shape"
    },
    "black_medium_square": {
        "unicode": "25FC",
        "shortname": ":black_medium_square:",
        "aliases": "",
        "keywords": "black medium square shape"
    },
    "white_medium_square": {
        "unicode": "25FB",
        "shortname": ":white_medium_square:",
        "aliases": "",
        "keywords": "white medium square shape"
    },
    "black_medium_small_square": {
        "unicode": "25FE",
        "shortname": ":black_medium_small_square:",
        "aliases": "",
        "keywords": "black medium small square "
    },
    "white_medium_small_square": {
        "unicode": "25FD",
        "shortname": ":white_medium_small_square:",
        "aliases": "",
        "keywords": "white medium small square shape"
    },
    "black_square_button": {
        "unicode": "1F532",
        "shortname": ":black_square_button:",
        "aliases": "",
        "keywords": "black square button frame"
    },
    "white_square_button": {
        "unicode": "1F533",
        "shortname": ":white_square_button:",
        "aliases": "",
        "keywords": "white square button shape"
    },
    "clock1": {
        "unicode": "1F550",
        "shortname": ":clock1:",
        "aliases": "",
        "keywords": "clock face one oclock clock time"
    },
    "clock2": {
        "unicode": "1F551",
        "shortname": ":clock2:",
        "aliases": "",
        "keywords": "clock face two oclock clock time"
    },
    "clock3": {
        "unicode": "1F552",
        "shortname": ":clock3:",
        "aliases": "",
        "keywords": "clock face three oclock clock time"
    },
    "clock4": {
        "unicode": "1F553",
        "shortname": ":clock4:",
        "aliases": "",
        "keywords": "clock face four oclock clock time"
    },
    "clock5": {
        "unicode": "1F554",
        "shortname": ":clock5:",
        "aliases": "",
        "keywords": "clock face five oclock clock time"
    },
    "clock6": {
        "unicode": "1F555",
        "shortname": ":clock6:",
        "aliases": "",
        "keywords": "clock face six oclock clock time"
    },
    "clock7": {
        "unicode": "1F556",
        "shortname": ":clock7:",
        "aliases": "",
        "keywords": "clock face seven oclock clock time"
    },
    "clock8": {
        "unicode": "1F557",
        "shortname": ":clock8:",
        "aliases": "",
        "keywords": "clock face eight oclock clock time"
    },
    "clock9": {
        "unicode": "1F558",
        "shortname": ":clock9:",
        "aliases": "",
        "keywords": "clock face nine oclock clock time"
    },
    "clock10": {
        "unicode": "1F559",
        "shortname": ":clock10:",
        "aliases": "",
        "keywords": "clock face ten oclock clock time"
    },
    "clock11": {
        "unicode": "1F55A",
        "shortname": ":clock11:",
        "aliases": "",
        "keywords": "clock face eleven oclock clock time"
    },
    "clock12": {
        "unicode": "1F55B",
        "shortname": ":clock12:",
        "aliases": "",
        "keywords": "clock face twelve oclock clock time"
    },
    "clock130": {
        "unicode": "1F55C",
        "shortname": ":clock130:",
        "aliases": "",
        "keywords": "clock face one-thirty clock time"
    },
    "clock230": {
        "unicode": "1F55D",
        "shortname": ":clock230:",
        "aliases": "",
        "keywords": "clock face two-thirty clock time"
    },
    "clock330": {
        "unicode": "1F55E",
        "shortname": ":clock330:",
        "aliases": "",
        "keywords": "clock face three-thirty clock time"
    },
    "clock430": {
        "unicode": "1F55F",
        "shortname": ":clock430:",
        "aliases": "",
        "keywords": "clock face four-thirty clock time"
    },
    "clock530": {
        "unicode": "1F560",
        "shortname": ":clock530:",
        "aliases": "",
        "keywords": "clock face five-thirty clock time"
    },
    "clock630": {
        "unicode": "1F561",
        "shortname": ":clock630:",
        "aliases": "",
        "keywords": "clock face six-thirty clock time"
    },
    "clock730": {
        "unicode": "1F562",
        "shortname": ":clock730:",
        "aliases": "",
        "keywords": "clock face seven-thirty clock time"
    },
    "clock830": {
        "unicode": "1F563",
        "shortname": ":clock830:",
        "aliases": "",
        "keywords": "clock face eight-thirty clock time"
    },
    "clock930": {
        "unicode": "1F564",
        "shortname": ":clock930:",
        "aliases": "",
        "keywords": "clock face nine-thirty clock time"
    },
    "clock1030": {
        "unicode": "1F565",
        "shortname": ":clock1030:",
        "aliases": "",
        "keywords": "clock face ten-thirty clock time"
    },
    "clock1130": {
        "unicode": "1F566",
        "shortname": ":clock1130:",
        "aliases": "",
        "keywords": "clock face eleven-thirty clock time"
    },
    "clock1230": {
        "unicode": "1F567",
        "shortname": ":clock1230:",
        "aliases": "",
        "keywords": "clock face twelve-thirty clock time"
    },
    "railway_car": {
        "unicode": "1F683",
        "shortname": ":railway_car:",
        "aliases": "",
        "keywords": "railway car transportation vehicle railway rail car coach train"
    },
    "mountain_railway": {
        "unicode": "1F69E",
        "shortname": ":mountain_railway:",
        "aliases": "",
        "keywords": "mountain railway transportation mountain railway rail train transport"
    },
    "steam_locomotive": {
        "unicode": "1F682",
        "shortname": ":steam_locomotive:",
        "aliases": "",
        "keywords": "steam locomotive train transportation vehicle locomotive steam train engine"
    },
    "train_diesel": {
        "unicode": "1F6F2",
        "shortname": ":train_diesel:",
        "aliases": ":diesel_locomotive:",
        "keywords": "diesel locomotive "
    },
    "train": {
        "unicode": "1F68B",
        "shortname": ":train:",
        "aliases": "",
        "keywords": "Tram Car tram rail"
    },
    "monorail": {
        "unicode": "1F69D",
        "shortname": ":monorail:",
        "aliases": "",
        "keywords": "monorail transportation vehicle train mono rail transport"
    },
    "bullettrain_side": {
        "unicode": "1F684",
        "shortname": ":bullettrain_side:",
        "aliases": "",
        "keywords": "high-speed train transportation vehicle train bullet rail"
    },
    "bullettrain_front": {
        "unicode": "1F685",
        "shortname": ":bullettrain_front:",
        "aliases": "",
        "keywords": "high-speed train with bullet nose transportation train bullet rail"
    },
    "train2": {
        "unicode": "1F686",
        "shortname": ":train2:",
        "aliases": "",
        "keywords": "train transportation vehicle train locomotive rail"
    },
    "metro": {
        "unicode": "1F687",
        "shortname": ":metro:",
        "aliases": "",
        "keywords": "metro blue-square mrt transportation tube underground metro subway underground train"
    },
    "light_rail": {
        "unicode": "1F688",
        "shortname": ":light_rail:",
        "aliases": "",
        "keywords": "light rail transportation vehicle train rail light"
    },
    "station": {
        "unicode": "1F689",
        "shortname": ":station:",
        "aliases": "",
        "keywords": "station public transportation vehicle station train subway"
    },
    "tram": {
        "unicode": "1F68A",
        "shortname": ":tram:",
        "aliases": "",
        "keywords": "tram transportation vehicle tram transportation transport"
    },
    "railway_track": {
        "unicode": "1F6E4",
        "shortname": ":railway_track:",
        "aliases": ":railroad_track:",
        "keywords": "railway track "
    },
    "bus": {
        "unicode": "1F68C",
        "shortname": ":bus:",
        "aliases": "",
        "keywords": "bus car transportation vehicle bus school city transportation public"
    },
    "oncoming_bus": {
        "unicode": "1F68D",
        "shortname": ":oncoming_bus:",
        "aliases": "",
        "keywords": "oncoming bus transportation vehicle bus school city transportation public"
    },
    "trolleybus": {
        "unicode": "1F68E",
        "shortname": ":trolleybus:",
        "aliases": "",
        "keywords": "trolleybus bart transportation vehicle trolley bus city transport transportation"
    },
    "minibus": {
        "unicode": "1F690",
        "shortname": ":minibus:",
        "aliases": "",
        "keywords": "minibus car transportation vehicle bus city transport transportation"
    },
    "ambulance": {
        "unicode": "1F691",
        "shortname": ":ambulance:",
        "aliases": "",
        "keywords": "ambulance 911 health ambulance emergency medical help assistance"
    },
    "fire_engine": {
        "unicode": "1F692",
        "shortname": ":fire_engine:",
        "aliases": "",
        "keywords": "fire engine cars transportation vehicle fire fighter engine truck emergency medical"
    },
    "fire_engine_oncoming": {
        "unicode": "1F6F1",
        "shortname": ":fire_engine_oncoming:",
        "aliases": ":oncoming_fire_engine:",
        "keywords": "oncoming fire engine "
    },
    "police_car": {
        "unicode": "1F693",
        "shortname": ":police_car:",
        "aliases": "",
        "keywords": "police car cars enforcement law transportation vehicle police car emergency ticket citation crime help officer"
    },
    "oncoming_police_car": {
        "unicode": "1F694",
        "shortname": ":oncoming_police_car:",
        "aliases": "",
        "keywords": "oncoming police car enforcement law vehicle police car emergency ticket citation crime help officer"
    },
    "rotating_light": {
        "unicode": "1F6A8",
        "shortname": ":rotating_light:",
        "aliases": "",
        "keywords": "police cars revolving light 911 ambulance emergency police light police emergency"
    },
    "taxi": {
        "unicode": "1F695",
        "shortname": ":taxi:",
        "aliases": "",
        "keywords": "taxi cars transportation uber vehicle taxi car automobile city transport service"
    },
    "oncoming_taxi": {
        "unicode": "1F696",
        "shortname": ":oncoming_taxi:",
        "aliases": "",
        "keywords": "oncoming taxi cars uber vehicle taxi car automobile city transport service"
    },
    "red_car": {
        "unicode": "1F697",
        "shortname": ":red_car:",
        "aliases": "",
        "keywords": "automobile transportation vehicle"
    },
    "oncoming_automobile": {
        "unicode": "1F698",
        "shortname": ":oncoming_automobile:",
        "aliases": "",
        "keywords": "oncoming automobile car transportation vehicle sedan car automobile"
    },
    "blue_car": {
        "unicode": "1F699",
        "shortname": ":blue_car:",
        "aliases": "",
        "keywords": "recreational vehicle car suv car wagon automobile"
    },
    "truck": {
        "unicode": "1F69A",
        "shortname": ":truck:",
        "aliases": "",
        "keywords": "delivery truck cars transportation truck delivery package"
    },
    "articulated_lorry": {
        "unicode": "1F69B",
        "shortname": ":articulated_lorry:",
        "aliases": "",
        "keywords": "articulated lorry cars transportation vehicle truck delivery semi lorry articulated"
    },
    "tractor": {
        "unicode": "1F69C",
        "shortname": ":tractor:",
        "aliases": "",
        "keywords": "tractor agriculture car farming vehicle tractor farm construction machine digger"
    },
    "bike": {
        "unicode": "1F6B2",
        "shortname": ":bike:",
        "aliases": "",
        "keywords": "bicycle bicycle exercise hipster sports bike pedal bicycle transportation"
    },
    "motorway": {
        "unicode": "1F6E3",
        "shortname": ":motorway:",
        "aliases": "",
        "keywords": "motorway "
    },
    "busstop": {
        "unicode": "1F68F",
        "shortname": ":busstop:",
        "aliases": "",
        "keywords": "bus stop transportation bus stop city transport transportation"
    },
    "fuelpump": {
        "unicode": "26FD",
        "shortname": ":fuelpump:",
        "aliases": "",
        "keywords": "fuel pump gas station petroleum"
    },
    "construction": {
        "unicode": "1F6A7",
        "shortname": ":construction:",
        "aliases": "",
        "keywords": "construction sign caution progress wip"
    },
    "vertical_traffic_light": {
        "unicode": "1F6A6",
        "shortname": ":vertical_traffic_light:",
        "aliases": "",
        "keywords": "vertical traffic light transportation traffic light stop go yield vertical"
    },
    "traffic_light": {
        "unicode": "1F6A5",
        "shortname": ":traffic_light:",
        "aliases": "",
        "keywords": "horizontal traffic light traffic transportation traffic light stop go yield horizontal"
    },
    "rocket": {
        "unicode": "1F680",
        "shortname": ":rocket:",
        "aliases": "",
        "keywords": "rocket launch ship staffmode rocket space spacecraft astronaut cosmonaut"
    },
    "helicopter": {
        "unicode": "1F681",
        "shortname": ":helicopter:",
        "aliases": "",
        "keywords": "helicopter transportation vehicle helicopter heli gyro gyrocopter"
    },
    "airplane": {
        "unicode": "2708",
        "shortname": ":airplane:",
        "aliases": "",
        "keywords": "airplane flight transportation vehicle airplane plane airport travel airlines fly jet jumbo boeing airbus"
    },
    "airplane_up": {
        "unicode": "1F6E7",
        "shortname": ":airplane_up:",
        "aliases": ":up_pointing_airplane:",
        "keywords": "up-pointing airplane "
    },
    "airplane_small_up": {
        "unicode": "1F6E8",
        "shortname": ":airplane_small_up:",
        "aliases": ":up_pointing_small_airplane:",
        "keywords": "up-pointing small airplane "
    },
    "jet_up": {
        "unicode": "1F6E6",
        "shortname": ":jet_up:",
        "aliases": ":up_pointing_military_airplane:",
        "keywords": "up-pointing military airplane "
    },
    "airplane_northeast": {
        "unicode": "1F6EA",
        "shortname": ":airplane_northeast:",
        "aliases": ":northeast_pointing_airplane:",
        "keywords": "northeast-pointing airplane "
    },
    "airplane_small": {
        "unicode": "1F6E9",
        "shortname": ":airplane_small:",
        "aliases": ":small_airplane:",
        "keywords": "small airplane "
    },
    "airplane_departure": {
        "unicode": "1F6EB",
        "shortname": ":airplane_departure:",
        "aliases": "",
        "keywords": "airplane departure "
    },
    "airplane_arriving": {
        "unicode": "1F6EC",
        "shortname": ":airplane_arriving:",
        "aliases": "",
        "keywords": "airplane arriving "
    },
    "seat": {
        "unicode": "1F4BA",
        "shortname": ":seat:",
        "aliases": "",
        "keywords": "seat sit"
    },
    "anchor": {
        "unicode": "2693",
        "shortname": ":anchor:",
        "aliases": "",
        "keywords": "anchor ferry ship anchor ship boat ocean harbor marina shipyard sailor tattoo"
    },
    "ship": {
        "unicode": "1F6A2",
        "shortname": ":ship:",
        "aliases": "",
        "keywords": "ship titanic transportation ferry ship boat"
    },
    "cruise_ship": {
        "unicode": "1F6F3",
        "shortname": ":cruise_ship:",
        "aliases": ":passenger_ship:",
        "keywords": "passenger ship "
    },
    "motorboat": {
        "unicode": "1F6E5",
        "shortname": ":motorboat:",
        "aliases": "",
        "keywords": "motorboat "
    },
    "speedboat": {
        "unicode": "1F6A4",
        "shortname": ":speedboat:",
        "aliases": "",
        "keywords": "speedboat ship transportation vehicle motor speed ski power boat"
    },
    "sailboat": {
        "unicode": "26F5",
        "shortname": ":sailboat:",
        "aliases": "",
        "keywords": "sailboat ship transportation"
    },
    "aerial_tramway": {
        "unicode": "1F6A1",
        "shortname": ":aerial_tramway:",
        "aliases": "",
        "keywords": "aerial tramway transportation vehicle aerial tram tramway cable transport"
    },
    "mountain_cableway": {
        "unicode": "1F6A0",
        "shortname": ":mountain_cableway:",
        "aliases": "",
        "keywords": "mountain cableway transportation vehicle mountain cable rail train railway"
    },
    "suspension_railway": {
        "unicode": "1F69F",
        "shortname": ":suspension_railway:",
        "aliases": "",
        "keywords": "suspension railway transportation vehicle suspension railway rail train transportation"
    },
    "passport_control": {
        "unicode": "1F6C2",
        "shortname": ":passport_control:",
        "aliases": "",
        "keywords": "passport control blue-square custom passport official travel control foreign identification"
    },
    "customs": {
        "unicode": "1F6C3",
        "shortname": ":customs:",
        "aliases": "",
        "keywords": "customs border passport customs travel foreign goods check authority government"
    },
    "baggage_claim": {
        "unicode": "1F6C4",
        "shortname": ":baggage_claim:",
        "aliases": "",
        "keywords": "baggage claim airport blue-square transport bag baggage luggage travel"
    },
    "left_luggage": {
        "unicode": "1F6C5",
        "shortname": ":left_luggage:",
        "aliases": "",
        "keywords": "left luggage blue-square travel bag baggage luggage travel"
    },
    "yen": {
        "unicode": "1F4B4",
        "shortname": ":yen:",
        "aliases": "",
        "keywords": "banknote with yen sign currency dollar japanese money yen japan japanese banknote money currency paper cash bill"
    },
    "euro": {
        "unicode": "1F4B6",
        "shortname": ":euro:",
        "aliases": "",
        "keywords": "banknote with euro sign currency dollar money euro europe banknote money currency paper cash bills"
    },
    "pound": {
        "unicode": "1F4B7",
        "shortname": ":pound:",
        "aliases": "",
        "keywords": "banknote with pound sign bills british currency england money sterling uk pound britain british banknote money currency paper cash bills"
    },
    "dollar": {
        "unicode": "1F4B5",
        "shortname": ":dollar:",
        "aliases": "",
        "keywords": "banknote with dollar sign bill currency money dollar united states canada australia banknote money currency paper cash bills"
    },
    "bellhop": {
        "unicode": "1F6CE",
        "shortname": ":bellhop:",
        "aliases": ":bellhop_bell:",
        "keywords": "bellhop bell "
    },
    "bed": {
        "unicode": "1F6CF",
        "shortname": ":bed:",
        "aliases": "",
        "keywords": "bed "
    },
    "couch": {
        "unicode": "1F6CB",
        "shortname": ":couch:",
        "aliases": ":couch_and_lamp:",
        "keywords": "couch and lamp "
    },
    "fork_knife_plate": {
        "unicode": "1F37D",
        "shortname": ":fork_knife_plate:",
        "aliases": ":fork_and_knife_with_plate:",
        "keywords": "fork and knife with plate "
    },
    "shopping_bags": {
        "unicode": "1F6CD",
        "shortname": ":shopping_bags:",
        "aliases": "",
        "keywords": "shopping bags "
    },
    "statue_of_liberty": {
        "unicode": "1F5FD",
        "shortname": ":statue_of_liberty:",
        "aliases": "",
        "keywords": "statue of liberty american newyork"
    },
    "moyai": {
        "unicode": "1F5FF",
        "shortname": ":moyai:",
        "aliases": "",
        "keywords": "moyai island stone"
    },
    "foggy": {
        "unicode": "1F301",
        "shortname": ":foggy:",
        "aliases": "",
        "keywords": "foggy mountain photo bridge weather fog foggy"
    },
    "tokyo_tower": {
        "unicode": "1F5FC",
        "shortname": ":tokyo_tower:",
        "aliases": "",
        "keywords": "tokyo tower japan photo"
    },
    "fountain": {
        "unicode": "26F2",
        "shortname": ":fountain:",
        "aliases": "",
        "keywords": "fountain photo"
    },
    "european_castle": {
        "unicode": "1F3F0",
        "shortname": ":european_castle:",
        "aliases": "",
        "keywords": "european castle building history royalty castle european residence royalty disneyland disney fort fortified moat tower princess prince lord king queen fortress nobel stronghold"
    },
    "japanese_castle": {
        "unicode": "1F3EF",
        "shortname": ":japanese_castle:",
        "aliases": "",
        "keywords": "japanese castle building photo castle japanese residence royalty fort fortified fortress"
    },
    "classical_building": {
        "unicode": "1F3DB",
        "shortname": ":classical_building:",
        "aliases": "",
        "keywords": "classical building "
    },
    "stadium": {
        "unicode": "1F3DF",
        "shortname": ":stadium:",
        "aliases": "",
        "keywords": "stadium "
    },
    "mountain_snow": {
        "unicode": "1F3D4",
        "shortname": ":mountain_snow:",
        "aliases": ":snow_capped_mountain:",
        "keywords": "snow capped mountain "
    },
    "camping": {
        "unicode": "1F3D5",
        "shortname": ":camping:",
        "aliases": "",
        "keywords": "camping "
    },
    "beach": {
        "unicode": "1F3D6",
        "shortname": ":beach:",
        "aliases": ":beach_with_umbrella:",
        "keywords": "beach with umbrella "
    },
    "desert": {
        "unicode": "1F3DC",
        "shortname": ":desert:",
        "aliases": "",
        "keywords": "desert "
    },
    "island": {
        "unicode": "1F3DD",
        "shortname": ":island:",
        "aliases": ":desert_island:",
        "keywords": "desert island "
    },
    "park": {
        "unicode": "1F3DE",
        "shortname": ":park:",
        "aliases": ":national_park:",
        "keywords": "national park "
    },
    "cityscape": {
        "unicode": "1F3D9",
        "shortname": ":cityscape:",
        "aliases": "",
        "keywords": "cityscape "
    },
    "city_sunset": {
        "unicode": "1F307",
        "shortname": ":city_sunset:",
        "aliases": ":city_sunrise:",
        "keywords": "sunset over buildings photo city scape sunrise dawn light morning metropolitan rise sun"
    },
    "city_dusk": {
        "unicode": "1F306",
        "shortname": ":city_dusk:",
        "aliases": "",
        "keywords": "cityscape at dusk photo city scape sunset dusk lights evening metropolitan night dark"
    },
    "night_with_stars": {
        "unicode": "1F303",
        "shortname": ":night_with_stars:",
        "aliases": "",
        "keywords": "night with stars night star cloudless evening planets space sky"
    },
    "bridge_at_night": {
        "unicode": "1F309",
        "shortname": ":bridge_at_night:",
        "aliases": "",
        "keywords": "bridge at night photo sanfrancisco bridge night water road evening suspension golden gate"
    },
    "house": {
        "unicode": "1F3E0",
        "shortname": ":house:",
        "aliases": "",
        "keywords": "house building building home house home residence dwelling mansion bungalow ranch craftsman"
    },
    "homes": {
        "unicode": "1F3D8",
        "shortname": ":homes:",
        "aliases": ":house_buildings:",
        "keywords": "house buildings "
    },
    "house_with_garden": {
        "unicode": "1F3E1",
        "shortname": ":house_with_garden:",
        "aliases": "",
        "keywords": "house with garden home nature plant"
    },
    "house_abandoned": {
        "unicode": "1F3DA",
        "shortname": ":house_abandoned:",
        "aliases": ":derelict_house_building:",
        "keywords": "derelict house building "
    },
    "contruction_site": {
        "unicode": "1F3D7",
        "shortname": ":contruction_site:",
        "aliases": ":building_construction:",
        "keywords": "building construction "
    },
    "office": {
        "unicode": "1F3E2",
        "shortname": ":office:",
        "aliases": "",
        "keywords": "office building building bureau work"
    },
    "department_store": {
        "unicode": "1F3EC",
        "shortname": ":department_store:",
        "aliases": "",
        "keywords": "department store building mall shopping department store retail sale merchandise"
    },
    "factory": {
        "unicode": "1F3ED",
        "shortname": ":factory:",
        "aliases": "",
        "keywords": "factory building"
    },
    "post_office": {
        "unicode": "1F3E3",
        "shortname": ":post_office:",
        "aliases": "",
        "keywords": "japanese post office building communication email"
    },
    "european_post_office": {
        "unicode": "1F3E4",
        "shortname": ":european_post_office:",
        "aliases": "",
        "keywords": "european post office building"
    },
    "hospital": {
        "unicode": "1F3E5",
        "shortname": ":hospital:",
        "aliases": "",
        "keywords": "hospital building doctor health surgery"
    },
    "bank": {
        "unicode": "1F3E6",
        "shortname": ":bank:",
        "aliases": "",
        "keywords": "bank building"
    },
    "hotel": {
        "unicode": "1F3E8",
        "shortname": ":hotel:",
        "aliases": "",
        "keywords": "hotel accomodation building checkin whotel hotel motel holiday inn hospital"
    },
    "love_hotel": {
        "unicode": "1F3E9",
        "shortname": ":love_hotel:",
        "aliases": "",
        "keywords": "love hotel affection dating like love hotel love sex romance leisure adultery prostitution hospital birth happy"
    },
    "wedding": {
        "unicode": "1F492",
        "shortname": ":wedding:",
        "aliases": "",
        "keywords": "wedding affection bride couple groom like love marriage"
    },
    "church": {
        "unicode": "26EA",
        "shortname": ":church:",
        "aliases": "",
        "keywords": "church building christ religion"
    },
    "convenience_store": {
        "unicode": "1F3EA",
        "shortname": ":convenience_store:",
        "aliases": "",
        "keywords": "convenience store building"
    },
    "school": {
        "unicode": "1F3EB",
        "shortname": ":school:",
        "aliases": "",
        "keywords": "school building school university elementary middle high college teach education"
    },
    "map": {
        "unicode": "1F5FA",
        "shortname": ":map:",
        "aliases": ":world_map:",
        "keywords": "world map "
    },
    "flag_au": {
        "unicode": "1F1E6-1F1FA",
        "shortname": ":flag_au:",
        "aliases": ":au:",
        "keywords": "australia country nation"
    },
    "flag_at": {
        "unicode": "1F1E6-1F1F9",
        "shortname": ":flag_at:",
        "aliases": ":at:",
        "keywords": "austria country nation österreich osterreich"
    },
    "flag_be": {
        "unicode": "1F1E7-1F1EA",
        "shortname": ":flag_be:",
        "aliases": ":be:",
        "keywords": "belgium country nation belgique belgie"
    },
    "flag_br": {
        "unicode": "1F1E7-1F1F7",
        "shortname": ":flag_br:",
        "aliases": ":br:",
        "keywords": "brazil country nation brasil"
    },
    "flag_ca": {
        "unicode": "1F1E8-1F1E6",
        "shortname": ":flag_ca:",
        "aliases": ":ca:",
        "keywords": "canada country nation"
    },
    "flag_cl": {
        "unicode": "1F1E8-1F1F1",
        "shortname": ":flag_cl:",
        "aliases": ":chile:",
        "keywords": "chile country nation"
    },
    "flag_cn": {
        "unicode": "1F1E8-1F1F3",
        "shortname": ":flag_cn:",
        "aliases": ":cn:",
        "keywords": "china china chinese prc zhong guo country nation"
    },
    "flag_co": {
        "unicode": "1F1E8-1F1F4",
        "shortname": ":flag_co:",
        "aliases": ":co:",
        "keywords": "colombia country nation"
    },
    "flag_dk": {
        "unicode": "1F1E9-1F1F0",
        "shortname": ":flag_dk:",
        "aliases": ":dk:",
        "keywords": "denmark country nation danmark"
    },
    "flag_fi": {
        "unicode": "1F1EB-1F1EE",
        "shortname": ":flag_fi:",
        "aliases": ":fi:",
        "keywords": "finland country nation suomen tasavalta"
    },
    "flag_fr": {
        "unicode": "1F1EB-1F1F7",
        "shortname": ":flag_fr:",
        "aliases": ":fr:",
        "keywords": "france banner flag france french nation country"
    },
    "flag_de": {
        "unicode": "1F1E9-1F1EA",
        "shortname": ":flag_de:",
        "aliases": ":de:",
        "keywords": "germany flag german nation deutschland country"
    },
    "flag_hk": {
        "unicode": "1F1ED-1F1F0",
        "shortname": ":flag_hk:",
        "aliases": ":hk:",
        "keywords": "hong kong country nation xianggang"
    },
    "flag_in": {
        "unicode": "1F1EE-1F1F3",
        "shortname": ":flag_in:",
        "aliases": ":in:",
        "keywords": "india country nation bharat"
    },
    "flag_id": {
        "unicode": "1F1EE-1F1E9",
        "shortname": ":flag_id:",
        "aliases": ":indonesia:",
        "keywords": "indonesia country nation"
    },
    "flag_ie": {
        "unicode": "1F1EE-1F1EA",
        "shortname": ":flag_ie:",
        "aliases": ":ie:",
        "keywords": "ireland country nation éire eire"
    },
    "flag_il": {
        "unicode": "1F1EE-1F1F1",
        "shortname": ":flag_il:",
        "aliases": ":il:",
        "keywords": "israel country nation yisra'el yisrael"
    },
    "flag_it": {
        "unicode": "1F1EE-1F1F9",
        "shortname": ":flag_it:",
        "aliases": ":it:",
        "keywords": "italy flag italy italia country nation"
    },
    "flag_jp": {
        "unicode": "1F1EF-1F1F5",
        "shortname": ":flag_jp:",
        "aliases": ":jp:",
        "keywords": "japan flag japan nation nippon country"
    },
    "flag_kr": {
        "unicode": "1F1F0-1F1F7",
        "shortname": ":flag_kr:",
        "aliases": ":kr:",
        "keywords": "korea flag korea nation country"
    },
    "flag_mo": {
        "unicode": "1F1F2-1F1F4",
        "shortname": ":flag_mo:",
        "aliases": ":mo:",
        "keywords": "macau country nation aomen"
    },
    "flag_my": {
        "unicode": "1F1F2-1F1FE",
        "shortname": ":flag_my:",
        "aliases": ":my:",
        "keywords": "malaysia country nation"
    },
    "flag_mx": {
        "unicode": "1F1F2-1F1FD",
        "shortname": ":flag_mx:",
        "aliases": ":mx:",
        "keywords": "mexico country nation"
    },
    "flag_nl": {
        "unicode": "1F1F3-1F1F1",
        "shortname": ":flag_nl:",
        "aliases": ":nl:",
        "keywords": "the netherlands country nation nederland holland"
    },
    "flag_nz": {
        "unicode": "1F1F3-1F1FF",
        "shortname": ":flag_nz:",
        "aliases": ":nz:",
        "keywords": "new zealand country nation aotearoa"
    },
    "flag_no": {
        "unicode": "1F1F3-1F1F4",
        "shortname": ":flag_no:",
        "aliases": ":no:",
        "keywords": "norway country nation norge"
    },
    "flag_ph": {
        "unicode": "1F1F5-1F1ED",
        "shortname": ":flag_ph:",
        "aliases": ":ph:",
        "keywords": "the philippines country nation pilipinas"
    },
    "flag_pl": {
        "unicode": "1F1F5-1F1F1",
        "shortname": ":flag_pl:",
        "aliases": ":pl:",
        "keywords": "poland country nation polska"
    },
    "flag_pt": {
        "unicode": "1F1F5-1F1F9",
        "shortname": ":flag_pt:",
        "aliases": ":pt:",
        "keywords": "portugal country nation"
    },
    "flag_pr": {
        "unicode": "1F1F5-1F1F7",
        "shortname": ":flag_pr:",
        "aliases": ":pr:",
        "keywords": "puerto rico country nation"
    },
    "flag_ru": {
        "unicode": "1F1F7-1F1FA",
        "shortname": ":flag_ru:",
        "aliases": ":ru:",
        "keywords": "russia banner flag nation russian country"
    },
    "flag_sa": {
        "unicode": "1F1F8-1F1E6",
        "shortname": ":flag_sa:",
        "aliases": ":saudiarabia: :saudi:",
        "keywords": "saudi arabia country nation al arabiyah as suudiyah"
    },
    "flag_sg": {
        "unicode": "1F1F8-1F1EC",
        "shortname": ":flag_sg:",
        "aliases": ":sg:",
        "keywords": "singapore country nation"
    },
    "flag_za": {
        "unicode": "1F1FF-1F1E6",
        "shortname": ":flag_za:",
        "aliases": ":za:",
        "keywords": "south africa country nation"
    },
    "flag_es": {
        "unicode": "1F1EA-1F1F8",
        "shortname": ":flag_es:",
        "aliases": ":es:",
        "keywords": "spain flag nation spain españa country espana"
    },
    "flag_se": {
        "unicode": "1F1F8-1F1EA",
        "shortname": ":flag_se:",
        "aliases": ":se:",
        "keywords": "sweden country nation sverige"
    },
    "flag_ch": {
        "unicode": "1F1E8-1F1ED",
        "shortname": ":flag_ch:",
        "aliases": ":ch:",
        "keywords": "switzerland country nation"
    },
    "flag_tr": {
        "unicode": "1F1F9-1F1F7",
        "shortname": ":flag_tr:",
        "aliases": ":tr:",
        "keywords": "turkey country nation turkiye"
    },
    "flag_gb": {
        "unicode": "1F1EC-1F1E7",
        "shortname": ":flag_gb:",
        "aliases": ":gb:",
        "keywords": "great britain UK banner britsh flag nation united kingdom england country"
    },
    "flag_us": {
        "unicode": "1F1FA-1F1F8",
        "shortname": ":flag_us:",
        "aliases": ":us:",
        "keywords": "united states american banner country flag nation usa united states of america america old glory"
    },
    "flag_ae": {
        "unicode": "1F1E6-1F1EA",
        "shortname": ":flag_ae:",
        "aliases": ":ae:",
        "keywords": "the united arab emirates country nation"
    },
    "flag_vn": {
        "unicode": "1F1FB-1F1F3",
        "shortname": ":flag_vn:",
        "aliases": ":vn:",
        "keywords": "vietnam country nation viet nam"
    },
    "flag_af": {
        "unicode": "1F1E6-1F1EB",
        "shortname": ":flag_af:",
        "aliases": ":af:",
        "keywords": "afghanistan country nation afghanestan"
    },
    "flag_al": {
        "unicode": "1F1E6-1F1F1",
        "shortname": ":flag_al:",
        "aliases": ":al:",
        "keywords": "albania country nation shqiperia"
    },
    "flag_dz": {
        "unicode": "1F1E9-1F1FF",
        "shortname": ":flag_dz:",
        "aliases": ":dz:",
        "keywords": "algeria country nation al jaza'ir al jazair"
    },
    "flag_ad": {
        "unicode": "1F1E6-1F1E9",
        "shortname": ":flag_ad:",
        "aliases": ":ad:",
        "keywords": "andorra country nation"
    },
    "flag_ao": {
        "unicode": "1F1E6-1F1F4",
        "shortname": ":flag_ao:",
        "aliases": ":ao:",
        "keywords": "angola country nation"
    },
    "flag_ai": {
        "unicode": "1F1E6-1F1EE",
        "shortname": ":flag_ai:",
        "aliases": ":ai:",
        "keywords": "anguilla country nation"
    },
    "flag_ag": {
        "unicode": "1F1E6-1F1EC",
        "shortname": ":flag_ag:",
        "aliases": ":ag:",
        "keywords": "antigua and barbuda country nation"
    },
    "flag_ar": {
        "unicode": "1F1E6-1F1F7",
        "shortname": ":flag_ar:",
        "aliases": ":ar:",
        "keywords": "argentina country nation"
    },
    "flag_am": {
        "unicode": "1F1E6-1F1F2",
        "shortname": ":flag_am:",
        "aliases": ":am:",
        "keywords": "armenia country nation hayastan"
    },
    "flag_aw": {
        "unicode": "1F1E6-1F1FC",
        "shortname": ":flag_aw:",
        "aliases": ":aw:",
        "keywords": "aruba country nation"
    },
    "flag_ac": {
        "unicode": "1F1E6-1F1E8",
        "shortname": ":flag_ac:",
        "aliases": ":ac:",
        "keywords": "ascension country nation"
    },
    "flag_az": {
        "unicode": "1F1E6-1F1FF",
        "shortname": ":flag_az:",
        "aliases": ":az:",
        "keywords": "azerbaijan country nation azarbaycan"
    },
    "flag_bs": {
        "unicode": "1F1E7-1F1F8",
        "shortname": ":flag_bs:",
        "aliases": ":bs:",
        "keywords": "the bahamas country nation"
    },
    "flag_bh": {
        "unicode": "1F1E7-1F1ED",
        "shortname": ":flag_bh:",
        "aliases": ":bh:",
        "keywords": "bahrain country nation al bahrayn"
    },
    "flag_bd": {
        "unicode": "1F1E7-1F1E9",
        "shortname": ":flag_bd:",
        "aliases": ":bd:",
        "keywords": "bangladesh country nation"
    },
    "flag_bb": {
        "unicode": "1F1E7-1F1E7",
        "shortname": ":flag_bb:",
        "aliases": ":bb:",
        "keywords": "barbados country nation"
    },
    "flag_by": {
        "unicode": "1F1E7-1F1FE",
        "shortname": ":flag_by:",
        "aliases": ":by:",
        "keywords": "belarus country nation byelarus"
    },
    "flag_bz": {
        "unicode": "1F1E7-1F1FF",
        "shortname": ":flag_bz:",
        "aliases": ":bz:",
        "keywords": "belize country nation"
    },
    "flag_bj": {
        "unicode": "1F1E7-1F1EF",
        "shortname": ":flag_bj:",
        "aliases": ":bj:",
        "keywords": "benin country nation"
    },
    "flag_bm": {
        "unicode": "1F1E7-1F1F2",
        "shortname": ":flag_bm:",
        "aliases": ":bm:",
        "keywords": "bermuda country nation"
    },
    "flag_bt": {
        "unicode": "1F1E7-1F1F9",
        "shortname": ":flag_bt:",
        "aliases": ":bt:",
        "keywords": "bhutan country nation"
    },
    "flag_bo": {
        "unicode": "1F1E7-1F1F4",
        "shortname": ":flag_bo:",
        "aliases": ":bo:",
        "keywords": "bolivia country nation"
    },
    "flag_ba": {
        "unicode": "1F1E7-1F1E6",
        "shortname": ":flag_ba:",
        "aliases": ":ba:",
        "keywords": "bosnia and herzegovina country nation bosna i hercegovina"
    },
    "flag_bw": {
        "unicode": "1F1E7-1F1FC",
        "shortname": ":flag_bw:",
        "aliases": ":bw:",
        "keywords": "botswana country nation"
    },
    "flag_bn": {
        "unicode": "1F1E7-1F1F3",
        "shortname": ":flag_bn:",
        "aliases": ":bn:",
        "keywords": "brunei country nation"
    },
    "flag_bg": {
        "unicode": "1F1E7-1F1EC",
        "shortname": ":flag_bg:",
        "aliases": ":bg:",
        "keywords": "bulgaria country nation"
    },
    "flag_bf": {
        "unicode": "1F1E7-1F1EB",
        "shortname": ":flag_bf:",
        "aliases": ":bf:",
        "keywords": "burkina faso country nation"
    },
    "flag_bi": {
        "unicode": "1F1E7-1F1EE",
        "shortname": ":flag_bi:",
        "aliases": ":bi:",
        "keywords": "burundi country nation"
    },
    "flag_kh": {
        "unicode": "1F1F0-1F1ED",
        "shortname": ":flag_kh:",
        "aliases": ":kh:",
        "keywords": "cambodia country nation kampuchea"
    },
    "flag_cm": {
        "unicode": "1F1E8-1F1F2",
        "shortname": ":flag_cm:",
        "aliases": ":cm:",
        "keywords": "cameroon country nation"
    },
    "flag_cv": {
        "unicode": "1F1E8-1F1FB",
        "shortname": ":flag_cv:",
        "aliases": ":cv:",
        "keywords": "cape verde country nation cabo verde"
    },
    "flag_ky": {
        "unicode": "1F1F0-1F1FE",
        "shortname": ":flag_ky:",
        "aliases": ":ky:",
        "keywords": "cayman islands country nation"
    },
    "flag_cf": {
        "unicode": "1F1E8-1F1EB",
        "shortname": ":flag_cf:",
        "aliases": ":cf:",
        "keywords": "central african republic country nation"
    },
    "flag_km": {
        "unicode": "1F1F0-1F1F2",
        "shortname": ":flag_km:",
        "aliases": ":km:",
        "keywords": "the comoros country nation"
    },
    "flag_cd": {
        "unicode": "1F1E8-1F1E9",
        "shortname": ":flag_cd:",
        "aliases": ":congo:",
        "keywords": "the democratic republic of the congo country nation république démocratique du congo republique democratique du congo"
    },
    "flag_cg": {
        "unicode": "1F1E8-1F1EC",
        "shortname": ":flag_cg:",
        "aliases": ":cg:",
        "keywords": "the republic of the congo country nation"
    },
    "flag_td": {
        "unicode": "1F1F9-1F1E9",
        "shortname": ":flag_td:",
        "aliases": ":td:",
        "keywords": "chad country nation tchad"
    },
    "flag_cr": {
        "unicode": "1F1E8-1F1F7",
        "shortname": ":flag_cr:",
        "aliases": ":cr:",
        "keywords": "costa rica country nation"
    },
    "flag_ci": {
        "unicode": "1F1E8-1F1EE",
        "shortname": ":flag_ci:",
        "aliases": ":ci:",
        "keywords": "cote d'ivoire country nation"
    },
    "flag_hr": {
        "unicode": "1F1ED-1F1F7",
        "shortname": ":flag_hr:",
        "aliases": ":hr:",
        "keywords": "croatia country nation hrvatska"
    },
    "flag_cu": {
        "unicode": "1F1E8-1F1FA",
        "shortname": ":flag_cu:",
        "aliases": ":cu:",
        "keywords": "cuba country nation"
    },
    "flag_cy": {
        "unicode": "1F1E8-1F1FE",
        "shortname": ":flag_cy:",
        "aliases": ":cy:",
        "keywords": "cyprus country nation kibris kypros"
    },
    "flag_cz": {
        "unicode": "1F1E8-1F1FF",
        "shortname": ":flag_cz:",
        "aliases": ":cz:",
        "keywords": "the czech republic country nation ceska republika"
    },
    "flag_dj": {
        "unicode": "1F1E9-1F1EF",
        "shortname": ":flag_dj:",
        "aliases": ":dj:",
        "keywords": "djibouti country nation"
    },
    "flag_dm": {
        "unicode": "1F1E9-1F1F2",
        "shortname": ":flag_dm:",
        "aliases": ":dm:",
        "keywords": "dominica country nation"
    },
    "flag_do": {
        "unicode": "1F1E9-1F1F4",
        "shortname": ":flag_do:",
        "aliases": ":do:",
        "keywords": "the dominican republic country nation"
    },
    "flag_tl": {
        "unicode": "1F1F9-1F1F1",
        "shortname": ":flag_tl:",
        "aliases": ":tl:",
        "keywords": "east timor country nation"
    },
    "flag_ec": {
        "unicode": "1F1EA-1F1E8",
        "shortname": ":flag_ec:",
        "aliases": ":ec:",
        "keywords": "ecuador country nation"
    },
    "flag_eg": {
        "unicode": "1F1EA-1F1EC",
        "shortname": ":flag_eg:",
        "aliases": ":eg:",
        "keywords": "egypt country nation misr"
    },
    "flag_sv": {
        "unicode": "1F1F8-1F1FB",
        "shortname": ":flag_sv:",
        "aliases": ":sv:",
        "keywords": "el salvador country nation"
    },
    "flag_gq": {
        "unicode": "1F1EC-1F1F6",
        "shortname": ":flag_gq:",
        "aliases": ":gq:",
        "keywords": "equatorial guinea country nation guinea ecuatorial"
    },
    "flag_er": {
        "unicode": "1F1EA-1F1F7",
        "shortname": ":flag_er:",
        "aliases": ":er:",
        "keywords": "eritrea country nation hagere ertra"
    },
    "flag_ee": {
        "unicode": "1F1EA-1F1EA",
        "shortname": ":flag_ee:",
        "aliases": ":ee:",
        "keywords": "estonia country nation eesti vabariik"
    },
    "flag_et": {
        "unicode": "1F1EA-1F1F9",
        "shortname": ":flag_et:",
        "aliases": ":et:",
        "keywords": "ethiopia country nation ityop'iya ityopiya"
    },
    "flag_fk": {
        "unicode": "1F1EB-1F1F0",
        "shortname": ":flag_fk:",
        "aliases": ":fk:",
        "keywords": "falkland islands country nation islas malvinas"
    },
    "flag_fo": {
        "unicode": "1F1EB-1F1F4",
        "shortname": ":flag_fo:",
        "aliases": ":fo:",
        "keywords": "faroe islands country nation foroyar"
    },
    "flag_fj": {
        "unicode": "1F1EB-1F1EF",
        "shortname": ":flag_fj:",
        "aliases": ":fj:",
        "keywords": "fiji country nation"
    },
    "flag_pf": {
        "unicode": "1F1F5-1F1EB",
        "shortname": ":flag_pf:",
        "aliases": ":pf:",
        "keywords": "french polynesia country nation polynésie française polynesie francaise"
    },
    "flag_ga": {
        "unicode": "1F1EC-1F1E6",
        "shortname": ":flag_ga:",
        "aliases": ":ga:",
        "keywords": "gabon country nation"
    },
    "flag_gm": {
        "unicode": "1F1EC-1F1F2",
        "shortname": ":flag_gm:",
        "aliases": ":gm:",
        "keywords": "the gambia country nation"
    },
    "flag_ge": {
        "unicode": "1F1EC-1F1EA",
        "shortname": ":flag_ge:",
        "aliases": ":ge:",
        "keywords": "georgia country nation sak'art'velo sakartvelo"
    },
    "flag_gh": {
        "unicode": "1F1EC-1F1ED",
        "shortname": ":flag_gh:",
        "aliases": ":gh:",
        "keywords": "ghana country nation"
    },
    "flag_gi": {
        "unicode": "1F1EC-1F1EE",
        "shortname": ":flag_gi:",
        "aliases": ":gi:",
        "keywords": "gibraltar country nation"
    },
    "flag_gr": {
        "unicode": "1F1EC-1F1F7",
        "shortname": ":flag_gr:",
        "aliases": ":gr:",
        "keywords": "greece country nation ellas ellada"
    },
    "flag_gl": {
        "unicode": "1F1EC-1F1F1",
        "shortname": ":flag_gl:",
        "aliases": ":gl:",
        "keywords": "greenland country nation kalaallit nunaat"
    },
    "flag_gd": {
        "unicode": "1F1EC-1F1E9",
        "shortname": ":flag_gd:",
        "aliases": ":gd:",
        "keywords": "grenada country nation"
    },
    "flag_gu": {
        "unicode": "1F1EC-1F1FA",
        "shortname": ":flag_gu:",
        "aliases": ":gu:",
        "keywords": "guam country nation"
    },
    "flag_gt": {
        "unicode": "1F1EC-1F1F9",
        "shortname": ":flag_gt:",
        "aliases": ":gt:",
        "keywords": "guatemala country nation"
    },
    "flag_gn": {
        "unicode": "1F1EC-1F1F3",
        "shortname": ":flag_gn:",
        "aliases": ":gn:",
        "keywords": "guinea country nation guinee"
    },
    "flag_gw": {
        "unicode": "1F1EC-1F1FC",
        "shortname": ":flag_gw:",
        "aliases": ":gw:",
        "keywords": "guinea-bissau country nation guine-bissau guine bissau"
    },
    "flag_gy": {
        "unicode": "1F1EC-1F1FE",
        "shortname": ":flag_gy:",
        "aliases": ":gy:",
        "keywords": "guyana country nation"
    },
    "flag_ht": {
        "unicode": "1F1ED-1F1F9",
        "shortname": ":flag_ht:",
        "aliases": ":ht:",
        "keywords": "haiti country nation"
    },
    "flag_hn": {
        "unicode": "1F1ED-1F1F3",
        "shortname": ":flag_hn:",
        "aliases": ":hn:",
        "keywords": "honduras country nation"
    },
    "flag_hu": {
        "unicode": "1F1ED-1F1FA",
        "shortname": ":flag_hu:",
        "aliases": ":hu:",
        "keywords": "hungary country nation magyarorszag"
    },
    "flag_is": {
        "unicode": "1F1EE-1F1F8",
        "shortname": ":flag_is:",
        "aliases": ":is:",
        "keywords": "iceland country nation lyoveldio island"
    },
    "flag_ir": {
        "unicode": "1F1EE-1F1F7",
        "shortname": ":flag_ir:",
        "aliases": ":ir:",
        "keywords": "iran country nation"
    },
    "flag_iq": {
        "unicode": "1F1EE-1F1F6",
        "shortname": ":flag_iq:",
        "aliases": ":iq:",
        "keywords": "iraq country nation"
    },
    "flag_jm": {
        "unicode": "1F1EF-1F1F2",
        "shortname": ":flag_jm:",
        "aliases": ":jm:",
        "keywords": "jamaica country nation"
    },
    "flag_je": {
        "unicode": "1F1EF-1F1EA",
        "shortname": ":flag_je:",
        "aliases": ":je:",
        "keywords": "jersey country nation"
    },
    "flag_jo": {
        "unicode": "1F1EF-1F1F4",
        "shortname": ":flag_jo:",
        "aliases": ":jo:",
        "keywords": "jordan country nation al urdun"
    },
    "flag_kz": {
        "unicode": "1F1F0-1F1FF",
        "shortname": ":flag_kz:",
        "aliases": ":kz:",
        "keywords": "kazakhstan country nation qazaqstan"
    },
    "flag_ke": {
        "unicode": "1F1F0-1F1EA",
        "shortname": ":flag_ke:",
        "aliases": ":ke:",
        "keywords": "kenya country nation"
    },
    "flag_ki": {
        "unicode": "1F1F0-1F1EE",
        "shortname": ":flag_ki:",
        "aliases": ":ki:",
        "keywords": "kiribati country nation kiribati kiribas"
    },
    "flag_xk": {
        "unicode": "1F1FD-1F1F0",
        "shortname": ":flag_xk:",
        "aliases": ":xk:",
        "keywords": "kosovo country nation"
    },
    "flag_kw": {
        "unicode": "1F1F0-1F1FC",
        "shortname": ":flag_kw:",
        "aliases": ":kw:",
        "keywords": "kuwait country nation al kuwayt"
    },
    "flag_kg": {
        "unicode": "1F1F0-1F1EC",
        "shortname": ":flag_kg:",
        "aliases": ":kg:",
        "keywords": "kyrgyzstan country nation kyrgyz respublikasy"
    },
    "flag_la": {
        "unicode": "1F1F1-1F1E6",
        "shortname": ":flag_la:",
        "aliases": ":la:",
        "keywords": "laos country nation"
    },
    "flag_lv": {
        "unicode": "1F1F1-1F1FB",
        "shortname": ":flag_lv:",
        "aliases": ":lv:",
        "keywords": "latvia country nation latvija"
    },
    "flag_lb": {
        "unicode": "1F1F1-1F1E7",
        "shortname": ":flag_lb:",
        "aliases": ":lb:",
        "keywords": "lebanon country nation lubnan"
    },
    "flag_ls": {
        "unicode": "1F1F1-1F1F8",
        "shortname": ":flag_ls:",
        "aliases": ":ls:",
        "keywords": "lesotho country nation"
    },
    "flag_lr": {
        "unicode": "1F1F1-1F1F7",
        "shortname": ":flag_lr:",
        "aliases": ":lr:",
        "keywords": "liberia country nation"
    },
    "flag_ly": {
        "unicode": "1F1F1-1F1FE",
        "shortname": ":flag_ly:",
        "aliases": ":ly:",
        "keywords": "libya country nation libiyah"
    },
    "flag_li": {
        "unicode": "1F1F1-1F1EE",
        "shortname": ":flag_li:",
        "aliases": ":li:",
        "keywords": "liechtenstein country nation"
    },
    "flag_lt": {
        "unicode": "1F1F1-1F1F9",
        "shortname": ":flag_lt:",
        "aliases": ":lt:",
        "keywords": "lithuania country nation lietuva"
    },
    "flag_lu": {
        "unicode": "1F1F1-1F1FA",
        "shortname": ":flag_lu:",
        "aliases": ":lu:",
        "keywords": "luxembourg country nation luxembourg letzebuerg"
    },
    "flag_mk": {
        "unicode": "1F1F2-1F1F0",
        "shortname": ":flag_mk:",
        "aliases": ":mk:",
        "keywords": "macedonia country nation"
    },
    "flag_mg": {
        "unicode": "1F1F2-1F1EC",
        "shortname": ":flag_mg:",
        "aliases": ":mg:",
        "keywords": "madagascar country nation"
    },
    "flag_mw": {
        "unicode": "1F1F2-1F1FC",
        "shortname": ":flag_mw:",
        "aliases": ":mw:",
        "keywords": "malawi country nation"
    },
    "flag_mv": {
        "unicode": "1F1F2-1F1FB",
        "shortname": ":flag_mv:",
        "aliases": ":mv:",
        "keywords": "maldives country nation dhivehi raajje"
    },
    "flag_ml": {
        "unicode": "1F1F2-1F1F1",
        "shortname": ":flag_ml:",
        "aliases": ":ml:",
        "keywords": "mali country nation"
    },
    "flag_mt": {
        "unicode": "1F1F2-1F1F9",
        "shortname": ":flag_mt:",
        "aliases": ":mt:",
        "keywords": "malta country nation"
    },
    "flag_mh": {
        "unicode": "1F1F2-1F1ED",
        "shortname": ":flag_mh:",
        "aliases": ":mh:",
        "keywords": "the marshall islands country nation"
    },
    "flag_mr": {
        "unicode": "1F1F2-1F1F7",
        "shortname": ":flag_mr:",
        "aliases": ":mr:",
        "keywords": "mauritania country nation muritaniyah"
    },
    "flag_mu": {
        "unicode": "1F1F2-1F1FA",
        "shortname": ":flag_mu:",
        "aliases": ":mu:",
        "keywords": "mauritius country nation"
    },
    "flag_fm": {
        "unicode": "1F1EB-1F1F2",
        "shortname": ":flag_fm:",
        "aliases": ":fm:",
        "keywords": "micronesia country nation"
    },
    "flag_md": {
        "unicode": "1F1F2-1F1E9",
        "shortname": ":flag_md:",
        "aliases": ":md:",
        "keywords": "moldova country nation"
    },
    "flag_mc": {
        "unicode": "1F1F2-1F1E8",
        "shortname": ":flag_mc:",
        "aliases": ":mc:",
        "keywords": "monaco country nation"
    },
    "flag_mn": {
        "unicode": "1F1F2-1F1F3",
        "shortname": ":flag_mn:",
        "aliases": ":mn:",
        "keywords": "mongolia country nation mongol uls"
    },
    "flag_me": {
        "unicode": "1F1F2-1F1EA",
        "shortname": ":flag_me:",
        "aliases": ":me:",
        "keywords": "montenegro country nation crna gora"
    },
    "flag_ms": {
        "unicode": "1F1F2-1F1F8",
        "shortname": ":flag_ms:",
        "aliases": ":ms:",
        "keywords": "montserrat country nation"
    },
    "flag_ma": {
        "unicode": "1F1F2-1F1E6",
        "shortname": ":flag_ma:",
        "aliases": ":ma:",
        "keywords": "morocco country nation al maghrib"
    },
    "flag_mz": {
        "unicode": "1F1F2-1F1FF",
        "shortname": ":flag_mz:",
        "aliases": ":mz:",
        "keywords": "mozambique country nation mocambique"
    },
    "flag_mm": {
        "unicode": "1F1F2-1F1F2",
        "shortname": ":flag_mm:",
        "aliases": ":mm:",
        "keywords": "myanmar country nation myanma naingngandaw"
    },
    "flag_na": {
        "unicode": "1F1F3-1F1E6",
        "shortname": ":flag_na:",
        "aliases": ":na:",
        "keywords": "namibia country nation"
    },
    "flag_nr": {
        "unicode": "1F1F3-1F1F7",
        "shortname": ":flag_nr:",
        "aliases": ":nr:",
        "keywords": "nauru country nation"
    },
    "flag_np": {
        "unicode": "1F1F3-1F1F5",
        "shortname": ":flag_np:",
        "aliases": ":np:",
        "keywords": "nepal country nation"
    },
    "flag_nc": {
        "unicode": "1F1F3-1F1E8",
        "shortname": ":flag_nc:",
        "aliases": ":nc:",
        "keywords": "new caledonia country nation nouvelle calédonie caledonie"
    },
    "flag_ni": {
        "unicode": "1F1F3-1F1EE",
        "shortname": ":flag_ni:",
        "aliases": ":ni:",
        "keywords": "nicaragua country nation"
    },
    "flag_ne": {
        "unicode": "1F1F3-1F1EA",
        "shortname": ":flag_ne:",
        "aliases": ":ne:",
        "keywords": "niger country nation"
    },
    "flag_ng": {
        "unicode": "1F1F3-1F1EC",
        "shortname": ":flag_ng:",
        "aliases": ":nigeria:",
        "keywords": "nigeria country nation"
    },
    "flag_nu": {
        "unicode": "1F1F3-1F1FA",
        "shortname": ":flag_nu:",
        "aliases": ":nu:",
        "keywords": "niue country nation"
    },
    "flag_kp": {
        "unicode": "1F1F0-1F1F5",
        "shortname": ":flag_kp:",
        "aliases": ":kp:",
        "keywords": "north korea country nation"
    },
    "flag_om": {
        "unicode": "1F1F4-1F1F2",
        "shortname": ":flag_om:",
        "aliases": ":om:",
        "keywords": "oman country nation saltanat uman"
    },
    "flag_pk": {
        "unicode": "1F1F5-1F1F0",
        "shortname": ":flag_pk:",
        "aliases": ":pk:",
        "keywords": "pakistan country nation"
    },
    "flag_pw": {
        "unicode": "1F1F5-1F1FC",
        "shortname": ":flag_pw:",
        "aliases": ":pw:",
        "keywords": "palau country nation belau"
    },
    "flag_ps": {
        "unicode": "1F1F5-1F1F8",
        "shortname": ":flag_ps:",
        "aliases": ":ps:",
        "keywords": "palestinian authority country nation"
    },
    "flag_pa": {
        "unicode": "1F1F5-1F1E6",
        "shortname": ":flag_pa:",
        "aliases": ":pa:",
        "keywords": "panama country nation"
    },
    "flag_pg": {
        "unicode": "1F1F5-1F1EC",
        "shortname": ":flag_pg:",
        "aliases": ":pg:",
        "keywords": "papua new guinea country nation papua niu gini"
    },
    "flag_py": {
        "unicode": "1F1F5-1F1FE",
        "shortname": ":flag_py:",
        "aliases": ":py:",
        "keywords": "paraguay country nation"
    },
    "flag_pe": {
        "unicode": "1F1F5-1F1EA",
        "shortname": ":flag_pe:",
        "aliases": ":pe:",
        "keywords": "peru country nation"
    },
    "flag_qa": {
        "unicode": "1F1F6-1F1E6",
        "shortname": ":flag_qa:",
        "aliases": ":qa:",
        "keywords": "qatar country nation dawlat qatar"
    },
    "flag_ro": {
        "unicode": "1F1F7-1F1F4",
        "shortname": ":flag_ro:",
        "aliases": ":ro:",
        "keywords": "romania country nation"
    },
    "flag_rw": {
        "unicode": "1F1F7-1F1FC",
        "shortname": ":flag_rw:",
        "aliases": ":rw:",
        "keywords": "rwanda country nation"
    },
    "flag_sh": {
        "unicode": "1F1F8-1F1ED",
        "shortname": ":flag_sh:",
        "aliases": ":sh:",
        "keywords": "saint helena country nation"
    },
    "flag_kn": {
        "unicode": "1F1F0-1F1F3",
        "shortname": ":flag_kn:",
        "aliases": ":kn:",
        "keywords": "saint kitts and nevis country nation  "
    },
    "flag_lc": {
        "unicode": "1F1F1-1F1E8",
        "shortname": ":flag_lc:",
        "aliases": ":lc:",
        "keywords": "saint lucia country nation"
    },
    "flag_vc": {
        "unicode": "1F1FB-1F1E8",
        "shortname": ":flag_vc:",
        "aliases": ":vc:",
        "keywords": "saint vincent and the grenadines country nation  "
    },
    "flag_ws": {
        "unicode": "1F1FC-1F1F8",
        "shortname": ":flag_ws:",
        "aliases": ":ws:",
        "keywords": "samoa country nation american samoa"
    },
    "flag_sm": {
        "unicode": "1F1F8-1F1F2",
        "shortname": ":flag_sm:",
        "aliases": ":sm:",
        "keywords": "san marino country nation"
    },
    "flag_st": {
        "unicode": "1F1F8-1F1F9",
        "shortname": ":flag_st:",
        "aliases": ":st:",
        "keywords": "sao tome and principe country nation sao tome e principe"
    },
    "flag_sn": {
        "unicode": "1F1F8-1F1F3",
        "shortname": ":flag_sn:",
        "aliases": ":sn:",
        "keywords": "senegal country nation"
    },
    "flag_rs": {
        "unicode": "1F1F7-1F1F8",
        "shortname": ":flag_rs:",
        "aliases": ":rs:",
        "keywords": "serbia country nation srbija"
    },
    "flag_sc": {
        "unicode": "1F1F8-1F1E8",
        "shortname": ":flag_sc:",
        "aliases": ":sc:",
        "keywords": "the seychelles country nation seychelles"
    },
    "flag_sl": {
        "unicode": "1F1F8-1F1F1",
        "shortname": ":flag_sl:",
        "aliases": ":sl:",
        "keywords": "sierra leone country nation"
    },
    "flag_sk": {
        "unicode": "1F1F8-1F1F0",
        "shortname": ":flag_sk:",
        "aliases": ":sk:",
        "keywords": "slovakia country nation"
    },
    "flag_si": {
        "unicode": "1F1F8-1F1EE",
        "shortname": ":flag_si:",
        "aliases": ":si:",
        "keywords": "slovenia country nation slovenija"
    },
    "flag_sb": {
        "unicode": "1F1F8-1F1E7",
        "shortname": ":flag_sb:",
        "aliases": ":sb:",
        "keywords": "the solomon islands country nation"
    },
    "flag_so": {
        "unicode": "1F1F8-1F1F4",
        "shortname": ":flag_so:",
        "aliases": ":so:",
        "keywords": "somalia country nation"
    },
    "flag_lk": {
        "unicode": "1F1F1-1F1F0",
        "shortname": ":flag_lk:",
        "aliases": ":lk:",
        "keywords": "sri lanka country nation"
    },
    "flag_sd": {
        "unicode": "1F1F8-1F1E9",
        "shortname": ":flag_sd:",
        "aliases": ":sd:",
        "keywords": "sudan country nation as-sudan"
    },
    "flag_sr": {
        "unicode": "1F1F8-1F1F7",
        "shortname": ":flag_sr:",
        "aliases": ":sr:",
        "keywords": "suriname country nation"
    },
    "flag_sz": {
        "unicode": "1F1F8-1F1FF",
        "shortname": ":flag_sz:",
        "aliases": ":sz:",
        "keywords": "swaziland country nation"
    },
    "flag_sy": {
        "unicode": "1F1F8-1F1FE",
        "shortname": ":flag_sy:",
        "aliases": ":sy:",
        "keywords": "syria country nation"
    },
    "flag_tw": {
        "unicode": "1F1F9-1F1FC",
        "shortname": ":flag_tw:",
        "aliases": ":tw:",
        "keywords": "the republic of china country nation"
    },
    "flag_tj": {
        "unicode": "1F1F9-1F1EF",
        "shortname": ":flag_tj:",
        "aliases": ":tj:",
        "keywords": "tajikistan country nation jumhurii tojikiston"
    },
    "flag_tz": {
        "unicode": "1F1F9-1F1FF",
        "shortname": ":flag_tz:",
        "aliases": ":tz:",
        "keywords": "tanzania country nation"
    },
    "flag_th": {
        "unicode": "1F1F9-1F1ED",
        "shortname": ":flag_th:",
        "aliases": ":th:",
        "keywords": "thailand country nation prathet thai"
    },
    "flag_tg": {
        "unicode": "1F1F9-1F1EC",
        "shortname": ":flag_tg:",
        "aliases": ":tg:",
        "keywords": "togo country nation republique togolaise"
    },
    "flag_to": {
        "unicode": "1F1F9-1F1F4",
        "shortname": ":flag_to:",
        "aliases": ":to:",
        "keywords": "tonga country nation"
    },
    "flag_tt": {
        "unicode": "1F1F9-1F1F9",
        "shortname": ":flag_tt:",
        "aliases": ":tt:",
        "keywords": "trinidad and tobago country nation"
    },
    "flag_tn": {
        "unicode": "1F1F9-1F1F3",
        "shortname": ":flag_tn:",
        "aliases": ":tn:",
        "keywords": "tunisia country nation tunis"
    },
    "flag_tm": {
        "unicode": "1F1F9-1F1F2",
        "shortname": ":flag_tm:",
        "aliases": ":turkmenistan:",
        "keywords": "turkmenistan country nation"
    },
    "flag_tv": {
        "unicode": "1F1F9-1F1FB",
        "shortname": ":flag_tv:",
        "aliases": ":tuvalu:",
        "keywords": "tuvalu country nation"
    },
    "flag_vi": {
        "unicode": "1F1FB-1F1EE",
        "shortname": ":flag_vi:",
        "aliases": ":vi:",
        "keywords": "u.s. virgin islands country nation"
    },
    "flag_ug": {
        "unicode": "1F1FA-1F1EC",
        "shortname": ":flag_ug:",
        "aliases": ":ug:",
        "keywords": "uganda country nation"
    },
    "flag_ua": {
        "unicode": "1F1FA-1F1E6",
        "shortname": ":flag_ua:",
        "aliases": ":ua:",
        "keywords": "ukraine country nation ukrayina"
    },
    "flag_uy": {
        "unicode": "1F1FA-1F1FE",
        "shortname": ":flag_uy:",
        "aliases": ":uy:",
        "keywords": "uruguay country nation"
    },
    "flag_uz": {
        "unicode": "1F1FA-1F1FF",
        "shortname": ":flag_uz:",
        "aliases": ":uz:",
        "keywords": "uzbekistan country nation uzbekiston respublikasi"
    },
    "flag_vu": {
        "unicode": "1F1FB-1F1FA",
        "shortname": ":flag_vu:",
        "aliases": ":vu:",
        "keywords": "vanuatu country nation"
    },
    "flag_va": {
        "unicode": "1F1FB-1F1E6",
        "shortname": ":flag_va:",
        "aliases": ":va:",
        "keywords": "the vatican city country nation"
    },
    "flag_ve": {
        "unicode": "1F1FB-1F1EA",
        "shortname": ":flag_ve:",
        "aliases": ":ve:",
        "keywords": "venezuela country nation"
    },
    "flag_wf": {
        "unicode": "1F1FC-1F1EB",
        "shortname": ":flag_wf:",
        "aliases": ":wf:",
        "keywords": "wallis and futuna country nation"
    },
    "flag_eh": {
        "unicode": "1F1EA-1F1ED",
        "shortname": ":flag_eh:",
        "aliases": ":eh:",
        "keywords": "western sahara country nation a\u1e63-\u1e62a\u1e25r\u0101\u2019 al-gharb\u012byah sahra gharbiyah"
    },
    "flag_ye": {
        "unicode": "1F1FE-1F1EA",
        "shortname": ":flag_ye:",
        "aliases": ":ye:",
        "keywords": "yemen country nation al yaman"
    },
    "flag_zm": {
        "unicode": "1F1FF-1F1F2",
        "shortname": ":flag_zm:",
        "aliases": ":zm:",
        "keywords": "zambia country nation"
    },
    "flag_zw": {
        "unicode": "1F1FF-1F1FC",
        "shortname": ":flag_zw:",
        "aliases": ":zw:",
        "keywords": "zimbabwe country nation"
    }
};
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

/*!
 * Parsley.js
 * Version 2.2.0-rc4 - built Thu, Oct 29th 2015, 4:25 pm
 * http://parsleyjs.org
 * Guillaume Potier - <guillaume@wisembly.com>
 * Marc-Andre Lafortune - <petroselinum@marc-andre.ca>
 * MIT Licensed
 */
// The source code below is generated by babel as
// Parsley is written in ECMAScript 6
//
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) : typeof define === 'function' && define.amd ? define(['jquery'], factory) : global.parsley = factory(global.jQuery);
})(this, function ($) {
    'use strict';
    var globalID = 1;
    var pastWarnings = {};
    var ParsleyUtils__ParsleyUtils = {
        // Parsley DOM-API
        // returns object from dom attributes and values
        attr: function attr($element, namespace, obj) {
            var i;
            var attribute;
            var attributes;
            var regex = new RegExp('^' + namespace, 'i');
            if ('undefined' === typeof obj) obj = {};
            else {
                // Clear all own properties. This won't affect prototype's values
                for (i in obj) {
                    if (obj.hasOwnProperty(i)) delete obj[i];
                }
            }
            if ('undefined' === typeof $element || 'undefined' === typeof $element[0]) return obj;
            attributes = $element[0].attributes;
            for (i = attributes.length; i--;) {
                attribute = attributes[i];
                if (attribute && attribute.specified && regex.test(attribute.name)) {
                    obj[this.camelize(attribute.name.slice(namespace.length))] = this.deserializeValue(attribute.value);
                }
            }
            return obj;
        },
        checkAttr: function checkAttr($element, namespace, _checkAttr) {
            return $element.is('[' + namespace + _checkAttr + ']');
        },
        setAttr: function setAttr($element, namespace, attr, value) {
            $element[0].setAttribute(this.dasherize(namespace + attr), String(value));
        },
        generateID: function generateID() {
            return '' + globalID++;
        },
        /** Third party functions **/
        // Zepto deserialize function
        deserializeValue: function deserializeValue(value) {
            var num;
            try {
                return value ? value == "true" || (value == "false" ? false : value == "null" ? null : !isNaN(num = Number(value)) ? num : /^[\[\{]/.test(value) ? $.parseJSON(value) : value) : value;
            } catch (e) {
                return value;
            }
        },
        // Zepto camelize function
        camelize: function camelize(str) {
            return str.replace(/-+(.)?/g, function (match, chr) {
                return chr ? chr.toUpperCase() : '';
            });
        },
        // Zepto dasherize function
        dasherize: function dasherize(str) {
            return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
        },
        warn: function warn() {
            if (window.console && 'function' === typeof window.console.warn) window.console.warn.apply(window.console, arguments);
        },
        warnOnce: function warnOnce(msg) {
            if (!pastWarnings[msg]) {
                pastWarnings[msg] = true;
                this.warn.apply(this, arguments);
            }
        },
        _resetWarnings: function _resetWarnings() {
            pastWarnings = {};
        },
        trimString: function trimString(string) {
            return string.replace(/^\s+|\s+$/g, '');
        },
        // Object.create polyfill, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill
        objectCreate: Object.create || (function () {
            var Object = function Object() {
            };
            return function (prototype) {
                if (arguments.length > 1) {
                    throw Error('Second argument not supported');
                }
                if (typeof prototype != 'object') {
                    throw TypeError('Argument must be an object');
                }
                Object.prototype = prototype;
                var result = new Object();
                Object.prototype = null;
                return result;
            };
        })()
    };
    var ParsleyUtils__default = ParsleyUtils__ParsleyUtils;
    // All these options could be overriden and specified directly in DOM using
    // `data-parsley-` default DOM-API
    // eg: `inputs` can be set in DOM using `data-parsley-inputs="input, textarea"`
    // eg: `data-parsley-stop-on-first-failing-constraint="false"`
    var ParsleyDefaults = {
        // ### General
        // Default data-namespace for DOM API
        namespace: 'data-parsley-',
        // Supported inputs by default
        inputs: 'input, textarea, select',
        // Excluded inputs by default
        excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden]',
        // Stop validating field on highest priority failing constraint
        priorityEnabled: true,
        // ### Field only
        // identifier used to group together inputs (e.g. radio buttons...)
        multiple: null,
        // identifier (or array of identifiers) used to validate only a select group of inputs
        group: null,
        // ### UI
        // Enable\Disable error messages
        uiEnabled: true,
        // Key events threshold before validation
        validationThreshold: 3,
        // Focused field on form validation error. 'first'|'last'|'none'
        focus: 'first',
        // `$.Event()` that will trigger validation. eg: `keyup`, `change`...
        trigger: false,
        // Class that would be added on every failing validation Parsley field
        errorClass: 'parsley-error',
        // Same for success validation
        successClass: 'parsley-success',
        // Return the `$element` that will receive these above success or error classes
        // Could also be (and given directly from DOM) a valid selector like `'#div'`
        classHandler: function classHandler(ParsleyField) {
        },
        // Return the `$element` where errors will be appended
        // Could also be (and given directly from DOM) a valid selector like `'#div'`
        errorsContainer: function errorsContainer(ParsleyField) {
        },
        // ul elem that would receive errors' list
        errorsWrapper: '<ul class="parsley-errors-list"></ul>',
        // li elem that would receive error message
        errorTemplate: '<li></li>'
    };
    var ParsleyAbstract = function ParsleyAbstract() {
    };
    ParsleyAbstract.prototype = {
        asyncSupport: true, // Deprecated
        actualizeOptions: function actualizeOptions() {
            ParsleyUtils__default.attr(this.$element, this.options.namespace, this.domOptions);
            if (this.parent && this.parent.actualizeOptions) this.parent.actualizeOptions();
            return this;
        },
        _resetOptions: function _resetOptions(initOptions) {
            this.domOptions = ParsleyUtils__default.objectCreate(this.parent.options);
            this.options = ParsleyUtils__default.objectCreate(this.domOptions);
            // Shallow copy of ownProperties of initOptions:
            for (var i in initOptions) {
                if (initOptions.hasOwnProperty(i)) this.options[i] = initOptions[i];
            }
            this.actualizeOptions();
        },
        _listeners: null,
        // Register a callback for the given event name.
        // Callback is called with context as the first argument and the `this`.
        // The context is the current parsley instance, or window.Parsley if global.
        // A return value of `false` will interrupt the calls
        on: function on(name, fn) {
            this._listeners = this._listeners || {};
            var queue = this._listeners[name] = this._listeners[name] || [];
            queue.push(fn);
            return this;
        },
        // Deprecated. Use `on` instead.
        subscribe: function subscribe(name, fn) {
            $.listenTo(this, name.toLowerCase(), fn);
        },
        // Unregister a callback (or all if none is given) for the given event name
        off: function off(name, fn) {
            var queue = this._listeners && this._listeners[name];
            if (queue) {
                if (!fn) {
                    delete this._listeners[name];
                } else {
                    for (var i = queue.length; i--;)
                        if (queue[i] === fn) queue.splice(i, 1);
                }
            }
            return this;
        },
        // Deprecated. Use `off`
        unsubscribe: function unsubscribe(name, fn) {
            $.unsubscribeTo(this, name.toLowerCase());
        },
        // Trigger an event of the given name.
        // A return value of `false` interrupts the callback chain.
        // Returns false if execution was interrupted.
        trigger: function trigger(name, target, extraArg) {
            target = target || this;
            var queue = this._listeners && this._listeners[name];
            var result;
            var parentResult;
            if (queue) {
                for (var i = queue.length; i--;) {
                    result = queue[i].call(target, target, extraArg);
                    if (result === false) return result;
                }
            }
            if (this.parent) {
                return this.parent.trigger(name, target, extraArg);
            }
            return true;
        },
        // Reset UI
        reset: function reset() {
            // Field case: just emit a reset event for UI
            if ('ParsleyForm' !== this.__class__) return this._trigger('reset');
            // Form case: emit a reset event for each field
            for (var i = 0; i < this.fields.length; i++) this.fields[i]._trigger('reset');
            this._trigger('reset');
        },
        // Destroy Parsley instance (+ UI)
        destroy: function destroy() {
            // Field case: emit destroy event to clean UI and then destroy stored instance
            if ('ParsleyForm' !== this.__class__) {
                this.$element.removeData('Parsley');
                this.$element.removeData('ParsleyFieldMultiple');
                this._trigger('destroy');
                return;
            }
            // Form case: destroy all its fields and then destroy stored instance
            for (var i = 0; i < this.fields.length; i++) this.fields[i].destroy();
            this.$element.removeData('Parsley');
            this._trigger('destroy');
        },
        asyncIsValid: function asyncIsValid() {
            ParsleyUtils__default.warnOnce("asyncIsValid is deprecated; please use whenIsValid instead");
            return this.whenValid.apply(this, arguments);
        },
        _findRelatedMultiple: function _findRelatedMultiple() {
            return this.parent.$element.find('[' + this.options.namespace + 'multiple="' + this.options.multiple + '"]');
        }
    };
    var requirementConverters = {
        string: function string(_string) {
            return _string;
        },
        integer: function integer(string) {
            if (isNaN(string)) throw 'Requirement is not an integer: "' + string + '"';
            return parseInt(string, 10);
        },
        number: function number(string) {
            if (isNaN(string)) throw 'Requirement is not a number: "' + string + '"';
            return parseFloat(string);
        },
        reference: function reference(string) {
            // Unused for now
            var result = $(string);
            if (result.length === 0) throw 'No such reference: "' + string + '"';
            return result;
        },
        boolean: function boolean(string) {
            return string !== 'false';
        },
        object: function object(string) {
            return ParsleyUtils__default.deserializeValue(string);
        },
        regexp: function regexp(_regexp) {
            var flags = '';
            // Test if RegExp is literal, if not, nothing to be done, otherwise, we need to isolate flags and pattern
            if (/^\/.*\/(?:[gimy]*)$/.test(_regexp)) {
                // Replace the regexp literal string with the first match group: ([gimy]*)
                // If no flag is present, this will be a blank string
                flags = _regexp.replace(/.*\/([gimy]*)$/, '$1');
                // Again, replace the regexp literal string with the first match group:
                // everything excluding the opening and closing slashes and the flags
                _regexp = _regexp.replace(new RegExp('^/(.*?)/' + flags + '$'), '$1');
            } else {
                // Anchor regexp:
                _regexp = '^' + _regexp + '$';
            }
            return new RegExp(_regexp, flags);
        }
    };
    var convertArrayRequirement = function convertArrayRequirement(string, length) {
        var m = string.match(/^\s*\[(.*)\]\s*$/);
        if (!m) throw 'Requirement is not an array: "' + string + '"';
        var values = m[1].split(',').map(ParsleyUtils__default.trimString);
        if (values.length !== length) throw 'Requirement has ' + values.length + ' values when ' + length + ' are needed';
        return values;
    };
    var convertRequirement = function convertRequirement(requirementType, string) {
        var converter = requirementConverters[requirementType || 'string'];
        if (!converter) throw 'Unknown requirement specification: "' + requirementType + '"';
        return converter(string);
    };
    var convertExtraOptionRequirement = function convertExtraOptionRequirement(requirementSpec, string, extraOptionReader) {
        var main = null;
        var extra = {};
        for (var key in requirementSpec) {
            if (key) {
                var value = extraOptionReader(key);
                if ('string' === typeof value) value = convertRequirement(requirementSpec[key], value);
                extra[key] = value;
            } else {
                main = convertRequirement(requirementSpec[key], string);
            }
        }
        return [main, extra];
    };
    // A Validator needs to implement the methods `validate` and `parseRequirements`
    var ParsleyValidator = function ParsleyValidator(spec) {
        $.extend(true, this, spec);
    };
    ParsleyValidator.prototype = {
        // Returns `true` iff the given `value` is valid according the given requirements.
        validate: function validate(value, requirementFirstArg) {
            if (this.fn) {
                // Legacy style validator
                if (arguments.length > 3) // If more args then value, requirement, instance...
                    requirementFirstArg = [].slice.call(arguments, 1, -1); // Skip first arg (value) and last (instance), combining the rest
                return this.fn.call(this, value, requirementFirstArg);
            }
            if ($.isArray(value)) {
                if (!this.validateMultiple) throw 'Validator `' + this.name + '` does not handle multiple values';
                return this.validateMultiple.apply(this, arguments);
            } else {
                if (this.validateNumber) {
                    if (isNaN(value)) return false;
                    arguments[0] = parseFloat(arguments[0]);
                    return this.validateNumber.apply(this, arguments);
                }
                if (this.validateString) {
                    return this.validateString.apply(this, arguments);
                }
                throw 'Validator `' + this.name + '` only handles multiple values';
            }
        },
        // Parses `requirements` into an array of arguments,
        // according to `this.requirementType`
        parseRequirements: function parseRequirements(requirements, extraOptionReader) {
            if ('string' !== typeof requirements) {
                // Assume requirement already parsed
                // but make sure we return an array
                return $.isArray(requirements) ? requirements : [requirements];
            }
            var type = this.requirementType;
            if ($.isArray(type)) {
                var values = convertArrayRequirement(requirements, type.length);
                for (var i = 0; i < values.length; i++) values[i] = convertRequirement(type[i], values[i]);
                return values;
            } else if ($.isPlainObject(type)) {
                return convertExtraOptionRequirement(type, requirements, extraOptionReader);
            } else {
                return [convertRequirement(type, requirements)];
            }
        },
        // Defaults:
        requirementType: 'string',
        priority: 2
    };
    var ParsleyValidatorRegistry = function ParsleyValidatorRegistry(validators, catalog) {
        this.__class__ = 'ParsleyValidatorRegistry';
        // Default Parsley locale is en
        this.locale = 'en';
        this.init(validators || {}, catalog || {});
    };
    var typeRegexes = {
        email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
        number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,
        integer: /^-?\d+$/,
        digits: /^\d+$/,
        alphanum: /^\w+$/i,
        url: new RegExp("^" +
                // protocol identifier
            "(?:(?:https?|ftp)://)?" + // ** mod: make scheme optional
                // user:pass authentication
            "(?:\\S+(?::\\S*)?@)?" + "(?:" +
                // IP address exclusion
                // private & local networks
                // "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +   // ** mod: allow local networks
                // "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +  // ** mod: allow local networks
                // "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +  // ** mod: allow local networks
                // IP address dotted notation octets
                // excludes loopback network 0.0.0.0
                // excludes reserved space >= 224.0.0.0
                // excludes network & broacast addresses
                // (first & last IP address of each class)
            "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" + "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" + "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" + "|" +
                // host name
            '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
                // domain name
            '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
                // TLD identifier
            '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' + ")" +
                // port number
            "(?::\\d{2,5})?" +
                // resource path
            "(?:/\\S*)?" + "$", 'i')
    };
    typeRegexes.range = typeRegexes.number;
    ParsleyValidatorRegistry.prototype = {
        init: function init(validators, catalog) {
            this.catalog = catalog;
            // Copy prototype's validators:
            this.validators = $.extend({}, this.validators);
            for (var name in validators) this.addValidator(name, validators[name].fn, validators[name].priority);
            window.Parsley.trigger('parsley:validator:init');
        },
        // Set new messages locale if we have dictionary loaded in ParsleyConfig.i18n
        setLocale: function setLocale(locale) {
            if ('undefined' === typeof this.catalog[locale]) throw new Error(locale + ' is not available in the catalog');
            this.locale = locale;
            return this;
        },
        // Add a new messages catalog for a given locale. Set locale for this catalog if set === `true`
        addCatalog: function addCatalog(locale, messages, set) {
            if ('object' === typeof messages) this.catalog[locale] = messages;
            if (true === set) return this.setLocale(locale);
            return this;
        },
        // Add a specific message for a given constraint in a given locale
        addMessage: function addMessage(locale, name, message) {
            if ('undefined' === typeof this.catalog[locale]) this.catalog[locale] = {};
            this.catalog[locale][name] = message;
            return this;
        },
        // Add messages for a given locale
        addMessages: function addMessages(locale, nameMessageObject) {
            for (var name in nameMessageObject) this.addMessage(locale, name, nameMessageObject[name]);
            return this;
        },
        // Add a new validator
        //
        //    addValidator('custom', {
        //        requirementType: ['integer', 'integer'],
        //        validateString: function(value, from, to) {},
        //        priority: 22,
        //        messages: {
        //          en: "Hey, that's no good",
        //          fr: "Aye aye, pas bon du tout",
        //        }
        //    })
        //
        // Old API was addValidator(name, function, priority)
        //
        addValidator: function addValidator(name, arg1, arg2) {
            if (this.validators[name]) ParsleyUtils__default.warn('Validator "' + name + '" is already defined.');
            else if (ParsleyDefaults.hasOwnProperty(name)) {
                ParsleyUtils__default.warn('"' + name + '" is a restricted keyword and is not a valid validator name.');
                return;
            }
            return this._setValidator.apply(this, arguments);
        },
        updateValidator: function updateValidator(name, arg1, arg2) {
            if (!this.validators[name]) {
                ParsleyUtils__default.warn('Validator "' + name + '" is not already defined.');
                return this.addValidator.apply(this, arguments);
            }
            return this._setValidator(this, arguments);
        },
        removeValidator: function removeValidator(name) {
            if (!this.validators[name]) ParsleyUtils__default.warn('Validator "' + name + '" is not defined.');
            delete this.validators[name];
            return this;
        },
        _setValidator: function _setValidator(name, validator, priority) {
            if ('object' !== typeof validator) {
                // Old style validator, with `fn` and `priority`
                validator = {
                    fn: validator,
                    priority: priority
                };
            }
            if (!validator.validate) {
                validator = new ParsleyValidator(validator);
            }
            this.validators[name] = validator;
            for (var locale in validator.messages || {}) this.addMessage(locale, name, validator.messages[locale]);
            return this;
        },
        getErrorMessage: function getErrorMessage(constraint) {
            var message;
            // Type constraints are a bit different, we have to match their requirements too to find right error message
            if ('type' === constraint.name) {
                var typeMessages = this.catalog[this.locale][constraint.name] || {};
                message = typeMessages[constraint.requirements];
            } else message = this.formatMessage(this.catalog[this.locale][constraint.name], constraint.requirements);
            return message || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage;
        },
        // Kind of light `sprintf()` implementation
        formatMessage: function formatMessage(string, parameters) {
            if ('object' === typeof parameters) {
                for (var i in parameters) string = this.formatMessage(string, parameters[i]);
                return string;
            }
            return 'string' === typeof string ? string.replace(new RegExp('%s', 'i'), parameters) : '';
        },
        // Here is the Parsley default validators list.
        // A validator is an object with the following key values:
        //  - priority: an integer
        //  - requirement: 'string' (default), 'integer', 'number', 'regexp' or an Array of these
        //  - validateString, validateMultiple, validateNumber: functions returning `true`, `false` or a promise
        // Alternatively, a validator can be a function that returns such an object
        //
        validators: {
            notblank: {
                validateString: function validateString(value) {
                    return (/\S/.test(value));
                },
                priority: 2
            },
            required: {
                validateMultiple: function validateMultiple(values) {
                    return values.length > 0;
                },
                validateString: function validateString(value) {
                    return (/\S/.test(value));
                },
                priority: 512
            },
            type: {
                validateString: function validateString(value, type) {
                    var regex = typeRegexes[type];
                    if (!regex) throw new Error('validator type `' + type + '` is not supported');
                    return regex.test(value);
                },
                priority: 256
            },
            pattern: {
                validateString: function validateString(value, regexp) {
                    return regexp.test(value);
                },
                requirementType: 'regexp',
                priority: 64
            },
            minlength: {
                validateString: function validateString(value, requirement) {
                    return value.length >= requirement;
                },
                requirementType: 'integer',
                priority: 30
            },
            maxlength: {
                validateString: function validateString(value, requirement) {
                    return value.length <= requirement;
                },
                requirementType: 'integer',
                priority: 30
            },
            length: {
                validateString: function validateString(value, min, max) {
                    return value.length >= min && value.length <= max;
                },
                requirementType: ['integer', 'integer'],
                priority: 30
            },
            mincheck: {
                validateMultiple: function validateMultiple(values, requirement) {
                    return values.length >= requirement;
                },
                requirementType: 'integer',
                priority: 30
            },
            maxcheck: {
                validateMultiple: function validateMultiple(values, requirement) {
                    return values.length <= requirement;
                },
                requirementType: 'integer',
                priority: 30
            },
            check: {
                validateMultiple: function validateMultiple(values, min, max) {
                    return values.length >= min && values.length <= max;
                },
                requirementType: ['integer', 'integer'],
                priority: 30
            },
            min: {
                validateNumber: function validateNumber(value, requirement) {
                    return value >= requirement;
                },
                requirementType: 'number',
                priority: 30
            },
            max: {
                validateNumber: function validateNumber(value, requirement) {
                    return value <= requirement;
                },
                requirementType: 'number',
                priority: 30
            },
            range: {
                validateNumber: function validateNumber(value, min, max) {
                    return value >= min && value <= max;
                },
                requirementType: ['number', 'number'],
                priority: 30
            },
            equalto: {
                validateString: function validateString(value, refOrValue) {
                    var $reference = $(refOrValue);
                    if ($reference.length) return value === $reference.val();
                    else return value === refOrValue;
                },
                priority: 256
            }
        }
    };
    var ParsleyUI = function ParsleyUI(options) {
        this.__class__ = 'ParsleyUI';
    };
    ParsleyUI.prototype = {
        listen: function listen() {
            var that = this;
            window.Parsley.on('form:init', function () {
                that.setupForm(this);
            }).on('field:init', function () {
                that.setupField(this);
            }).on('field:validated', function () {
                that.reflow(this);
            }).on('form:validated', function () {
                that.focus(this);
            }).on('field:reset', function () {
                that.reset(this);
            }).on('form:destroy', function () {
                that.destroy(this);
            }).on('field:destroy', function () {
                that.destroy(this);
            });
            return this;
        },
        reflow: function reflow(fieldInstance) {
            // If this field has not an active UI (case for multiples) don't bother doing something
            if ('undefined' === typeof fieldInstance._ui || false === fieldInstance._ui.active) return;
            // Diff between two validation results
            var diff = this._diff(fieldInstance.validationResult, fieldInstance._ui.lastValidationResult);
            // Then store current validation result for next reflow
            fieldInstance._ui.lastValidationResult = fieldInstance.validationResult;
            // Field have been validated at least once if here. Useful for binded key events...
            fieldInstance._ui.validatedOnce = true;
            // Handle valid / invalid / none field class
            this.manageStatusClass(fieldInstance);
            // Add, remove, updated errors messages
            this.manageErrorsMessages(fieldInstance, diff);
            // Triggers impl
            this.actualizeTriggers(fieldInstance);
            // If field is not valid for the first time, bind keyup trigger to ease UX and quickly inform user
            if ((diff.kept.length || diff.added.length) && true !== fieldInstance._ui.failedOnce) this.manageFailingFieldTrigger(fieldInstance);
        },
        // Returns an array of field's error message(s)
        getErrorsMessages: function getErrorsMessages(fieldInstance) {
            // No error message, field is valid
            if (true === fieldInstance.validationResult) return [];
            var messages = [];
            for (var i = 0; i < fieldInstance.validationResult.length; i++) messages.push(fieldInstance.validationResult[i].errorMessage || this._getErrorMessage(fieldInstance, fieldInstance.validationResult[i].assert));
            return messages;
        },
        manageStatusClass: function manageStatusClass(fieldInstance) {
            if (fieldInstance.hasConstraints() && fieldInstance.needsValidation() && true === fieldInstance.validationResult) this._successClass(fieldInstance);
            else if (fieldInstance.validationResult.length > 0) this._errorClass(fieldInstance);
            else this._resetClass(fieldInstance);
        },
        manageErrorsMessages: function manageErrorsMessages(fieldInstance, diff) {
            if ('undefined' !== typeof fieldInstance.options.errorsMessagesDisabled) return;
            // Case where we have errorMessage option that configure an unique field error message, regardless failing validators
            if ('undefined' !== typeof fieldInstance.options.errorMessage) {
                if (diff.added.length || diff.kept.length) {
                    this._insertErrorWrapper(fieldInstance);
                    if (0 === fieldInstance._ui.$errorsWrapper.find('.parsley-custom-error-message').length) fieldInstance._ui.$errorsWrapper.append($(fieldInstance.options.errorTemplate).addClass('parsley-custom-error-message'));
                    return fieldInstance._ui.$errorsWrapper.addClass('filled').find('.parsley-custom-error-message').html(fieldInstance.options.errorMessage);
                }
                return fieldInstance._ui.$errorsWrapper.removeClass('filled').find('.parsley-custom-error-message').remove();
            }
            // Show, hide, update failing constraints messages
            for (var i = 0; i < diff.removed.length; i++) this.removeError(fieldInstance, diff.removed[i].assert.name, true);
            for (i = 0; i < diff.added.length; i++) this.addError(fieldInstance, diff.added[i].assert.name, diff.added[i].errorMessage, diff.added[i].assert, true);
            for (i = 0; i < diff.kept.length; i++) this.updateError(fieldInstance, diff.kept[i].assert.name, diff.kept[i].errorMessage, diff.kept[i].assert, true);
        },
        // TODO: strange API here, intuitive for manual usage with addError(pslyInstance, 'foo', 'bar')
        // but a little bit complex for above internal usage, with forced undefined parameter...
        addError: function addError(fieldInstance, name, message, assert, doNotUpdateClass) {
            this._insertErrorWrapper(fieldInstance);
            fieldInstance._ui.$errorsWrapper.addClass('filled').append($(fieldInstance.options.errorTemplate).addClass('parsley-' + name).html(message || this._getErrorMessage(fieldInstance, assert)));
            if (true !== doNotUpdateClass) this._errorClass(fieldInstance);
        },
        // Same as above
        updateError: function updateError(fieldInstance, name, message, assert, doNotUpdateClass) {
            fieldInstance._ui.$errorsWrapper.addClass('filled').find('.parsley-' + name).html(message || this._getErrorMessage(fieldInstance, assert));
            if (true !== doNotUpdateClass) this._errorClass(fieldInstance);
        },
        // Same as above twice
        removeError: function removeError(fieldInstance, name, doNotUpdateClass) {
            fieldInstance._ui.$errorsWrapper.removeClass('filled').find('.parsley-' + name).remove();
            // edge case possible here: remove a standard Parsley error that is still failing in fieldInstance.validationResult
            // but highly improbable cuz' manually removing a well Parsley handled error makes no sense.
            if (true !== doNotUpdateClass) this.manageStatusClass(fieldInstance);
        },
        focus: function focus(formInstance) {
            formInstance._focusedField = null;
            if (true === formInstance.validationResult || 'none' === formInstance.options.focus) return null;
            for (var i = 0; i < formInstance.fields.length; i++) {
                var field = formInstance.fields[i];
                if (true !== field.validationResult && field.validationResult.length > 0 && 'undefined' === typeof field.options.noFocus) {
                    formInstance._focusedField = field.$element;
                    if ('first' === formInstance.options.focus) break;
                }
            }
            if (null === formInstance._focusedField) return null;
            return formInstance._focusedField.focus();
        },
        _getErrorMessage: function _getErrorMessage(fieldInstance, constraint) {
            var customConstraintErrorMessage = constraint.name + 'Message';
            if ('undefined' !== typeof fieldInstance.options[customConstraintErrorMessage]) return window.Parsley.formatMessage(fieldInstance.options[customConstraintErrorMessage], constraint.requirements);
            return window.Parsley.getErrorMessage(constraint);
        },
        _diff: function _diff(newResult, oldResult, deep) {
            var added = [];
            var kept = [];
            for (var i = 0; i < newResult.length; i++) {
                var found = false;
                for (var j = 0; j < oldResult.length; j++)
                    if (newResult[i].assert.name === oldResult[j].assert.name) {
                        found = true;
                        break;
                    }
                if (found) kept.push(newResult[i]);
                else added.push(newResult[i]);
            }
            return {
                kept: kept,
                added: added,
                removed: !deep ? this._diff(oldResult, newResult, true).added : []
            };
        },
        setupForm: function setupForm(formInstance) {
            formInstance.$element.on('submit.Parsley', false, $.proxy(formInstance.onSubmitValidate, formInstance));
            formInstance.$element.on('click.Parsley', 'input[type="submit"], button[type="submit"]', $.proxy(formInstance.onSubmitButton, formInstance));
            // UI could be disabled
            if (false === formInstance.options.uiEnabled) return;
            formInstance.$element.attr('novalidate', '');
        },
        setupField: function setupField(fieldInstance) {
            var _ui = {
                active: false
            };
            // UI could be disabled
            if (false === fieldInstance.options.uiEnabled) return;
            _ui.active = true;
            // Give field its Parsley id in DOM
            fieldInstance.$element.attr(fieldInstance.options.namespace + 'id', fieldInstance.__id__);
            /** Generate important UI elements and store them in fieldInstance **/
                // $errorClassHandler is the $element that woul have parsley-error and parsley-success classes
            _ui.$errorClassHandler = this._manageClassHandler(fieldInstance);
            // $errorsWrapper is a div that would contain the various field errors, it will be appended into $errorsContainer
            _ui.errorsWrapperId = 'parsley-id-' + (fieldInstance.options.multiple ? 'multiple-' + fieldInstance.options.multiple : fieldInstance.__id__);
            _ui.$errorsWrapper = $(fieldInstance.options.errorsWrapper).attr('id', _ui.errorsWrapperId);
            // ValidationResult UI storage to detect what have changed bwt two validations, and update DOM accordingly
            _ui.lastValidationResult = [];
            _ui.validatedOnce = false;
            _ui.validationInformationVisible = false;
            // Store it in fieldInstance for later
            fieldInstance._ui = _ui;
            // Bind triggers first time
            this.actualizeTriggers(fieldInstance);
        },
        // Determine which element will have `parsley-error` and `parsley-success` classes
        _manageClassHandler: function _manageClassHandler(fieldInstance) {
            // An element selector could be passed through DOM with `data-parsley-class-handler=#foo`
            if ('string' === typeof fieldInstance.options.classHandler && $(fieldInstance.options.classHandler).length) return $(fieldInstance.options.classHandler);
            // Class handled could also be determined by function given in Parsley options
            var $handler = fieldInstance.options.classHandler(fieldInstance);
            // If this function returned a valid existing DOM element, go for it
            if ('undefined' !== typeof $handler && $handler.length) return $handler;
            // Otherwise, if simple element (input, texatrea, select...) it will perfectly host the classes
            if (!fieldInstance.options.multiple || fieldInstance.$element.is('select')) return fieldInstance.$element;
            // But if multiple element (radio, checkbox), that would be their parent
            return fieldInstance.$element.parent();
        },
        _insertErrorWrapper: function _insertErrorWrapper(fieldInstance) {
            var $errorsContainer;
            // Nothing to do if already inserted
            if (0 !== fieldInstance._ui.$errorsWrapper.parent().length) return fieldInstance._ui.$errorsWrapper.parent();
            if ('string' === typeof fieldInstance.options.errorsContainer) {
                if ($(fieldInstance.options.errorsContainer).length) return $(fieldInstance.options.errorsContainer).append(fieldInstance._ui.$errorsWrapper);
                else ParsleyUtils__default.warn('The errors container `' + fieldInstance.options.errorsContainer + '` does not exist in DOM');
            } else if ('function' === typeof fieldInstance.options.errorsContainer) $errorsContainer = fieldInstance.options.errorsContainer(fieldInstance);
            if ('undefined' !== typeof $errorsContainer && $errorsContainer.length) return $errorsContainer.append(fieldInstance._ui.$errorsWrapper);
            var $from = fieldInstance.$element;
            if (fieldInstance.options.multiple) $from = $from.parent();
            return $from.after(fieldInstance._ui.$errorsWrapper);
        },
        actualizeTriggers: function actualizeTriggers(fieldInstance) {
            var $toBind = fieldInstance.$element;
            if (fieldInstance.options.multiple) $toBind = $('[' + fieldInstance.options.namespace + 'multiple="' + fieldInstance.options.multiple + '"]');
            // Remove Parsley events already binded on this field
            $toBind.off('.Parsley');
            // If no trigger is set, all good
            if (false === fieldInstance.options.trigger) return;
            var triggers = fieldInstance.options.trigger.replace(/^\s+/g, '').replace(/\s+$/g, '');
            if ('' === triggers) return;
            // Bind fieldInstance.eventValidate if exists (for parsley.ajax for example), ParsleyUI.eventValidate otherwise
            $toBind.on(triggers.split(' ').join('.Parsley ') + '.Parsley', $.proxy('function' === typeof fieldInstance.eventValidate ? fieldInstance.eventValidate : this.eventValidate, fieldInstance));
        },
        // Called through $.proxy with fieldInstance. `this` context is ParsleyField
        eventValidate: function eventValidate(event) {
            // For keyup, keypress, keydown... events that could be a little bit obstrusive
            // do not validate if val length < min threshold on first validation. Once field have been validated once and info
            // about success or failure have been displayed, always validate with this trigger to reflect every yalidation change.
            if (new RegExp('key').test(event.type))
                if (!this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold) return;
            this._ui.validatedOnce = true;
            this.validate();
        },
        manageFailingFieldTrigger: function manageFailingFieldTrigger(fieldInstance) {
            fieldInstance._ui.failedOnce = true;
            // Radio and checkboxes fields must bind every field multiple
            if (fieldInstance.options.multiple) $('[' + fieldInstance.options.namespace + 'multiple="' + fieldInstance.options.multiple + '"]').each(function () {
                if (!new RegExp('change', 'i').test($(this).parsley().options.trigger || '')) return $(this).on('change.ParsleyFailedOnce', false, $.proxy(fieldInstance.validate, fieldInstance));
            });
            // Select case
            if (fieldInstance.$element.is('select'))
                if (!new RegExp('change', 'i').test(fieldInstance.options.trigger || '')) return fieldInstance.$element.on('change.ParsleyFailedOnce', false, $.proxy(fieldInstance.validate, fieldInstance));
            // All other inputs fields
            if (!new RegExp('keyup', 'i').test(fieldInstance.options.trigger || '')) return fieldInstance.$element.on('keyup.ParsleyFailedOnce', false, $.proxy(fieldInstance.validate, fieldInstance));
        },
        reset: function reset(parsleyInstance) {
            // Reset all event listeners
            this.actualizeTriggers(parsleyInstance);
            parsleyInstance.$element.off('.ParsleyFailedOnce');
            // Nothing to do if UI never initialized for this field
            if ('undefined' === typeof parsleyInstance._ui) return;
            if ('ParsleyForm' === parsleyInstance.__class__) return;
            // Reset all errors' li
            parsleyInstance._ui.$errorsWrapper.removeClass('filled').children().remove();
            // Reset validation class
            this._resetClass(parsleyInstance);
            // Reset validation flags and last validation result
            parsleyInstance._ui.validatedOnce = false;
            parsleyInstance._ui.lastValidationResult = [];
            parsleyInstance._ui.validationInformationVisible = false;
            parsleyInstance._ui.failedOnce = false;
        },
        destroy: function destroy(parsleyInstance) {
            this.reset(parsleyInstance);
            if ('ParsleyForm' === parsleyInstance.__class__) return;
            if ('undefined' !== typeof parsleyInstance._ui) parsleyInstance._ui.$errorsWrapper.remove();
            delete parsleyInstance._ui;
        },
        _successClass: function _successClass(fieldInstance) {
            fieldInstance._ui.validationInformationVisible = true;
            fieldInstance._ui.$errorClassHandler.removeClass(fieldInstance.options.errorClass).addClass(fieldInstance.options.successClass);
        },
        _errorClass: function _errorClass(fieldInstance) {
            fieldInstance._ui.validationInformationVisible = true;
            fieldInstance._ui.$errorClassHandler.removeClass(fieldInstance.options.successClass).addClass(fieldInstance.options.errorClass);
        },
        _resetClass: function _resetClass(fieldInstance) {
            fieldInstance._ui.$errorClassHandler.removeClass(fieldInstance.options.successClass).removeClass(fieldInstance.options.errorClass);
        }
    };
    var ParsleyForm = function ParsleyForm(element, domOptions, options) {
        this.__class__ = 'ParsleyForm';
        this.__id__ = ParsleyUtils__default.generateID();
        this.$element = $(element);
        this.domOptions = domOptions;
        this.options = options;
        this.parent = window.Parsley;
        this.fields = [];
        this.validationResult = null;
    };
    var ParsleyForm__statusMapping = {
        pending: null,
        resolved: true,
        rejected: false
    };
    ParsleyForm.prototype = {
        onSubmitValidate: function onSubmitValidate(event) {
            var that = this;
            // This is a Parsley generated submit event, do not validate, do not prevent, simply exit and keep normal behavior
            if (true === event.parsley) return;
            // If we didn't come here through a submit button, use the first one in the form
            this._$submitSource = this._$submitSource || this.$element.find('input[type="submit"], button[type="submit"]').first();
            if (this._$submitSource.is('[formnovalidate]')) {
                this._$submitSource = null;
                return;
            }
            // Because some validations might be asynchroneous,
            // we cancel this submit and will fake it after validation.
            event.stopImmediatePropagation();
            event.preventDefault();
            this.whenValidate(undefined, undefined, event).done(function () {
                that._submit();
            }).always(function () {
                that._$submitSource = null;
            });
            return this;
        },
        onSubmitButton: function onSubmitButton(event) {
            this._$submitSource = $(event.target);
        },
        // internal
        // _submit submits the form, this time without going through the validations.
        // Care must be taken to "fake" the actual submit button being clicked.
        _submit: function _submit() {
            if (false === this._trigger('submit')) return;
            this.$element.find('.parsley_synthetic_submit_button').remove();
            // Add submit button's data
            if (this._$submitSource) {
                $('<input class="parsley_synthetic_submit_button" type="hidden">').attr('name', this._$submitSource.attr('name')).attr('value', this._$submitSource.attr('value')).appendTo(this.$element);
            }
            //
            this.$element.trigger($.extend($.Event('submit'), {
                parsley: true
            }));
        },
        // Performs validation on fields while triggering events.
        // @returns `true` if al validations succeeds, `false`
        // if a failure is immediately detected, or `null`
        // if dependant on a promise.
        // Prefer `whenValidate`.
        validate: function validate(group, force, event) {
            return ParsleyForm__statusMapping[this.whenValidate(group, force, event).state()];
        },
        whenValidate: function whenValidate(group, force, event) {
            var that = this;
            this.submitEvent = event;
            this.validationResult = true;
            // fire validate event to eventually modify things before very validation
            this._trigger('validate');
            // Refresh form DOM options and form's fields that could have changed
            this._refreshFields();
            var promises = this._withoutReactualizingFormOptions(function () {
                return $.map(this.fields, function (field) {
                    // do not validate a field if not the same as given validation group
                    if (!group || that._isFieldInGroup(field, group)) return field.whenValidate(force);
                });
            });
            var promiseBasedOnValidationResult = function promiseBasedOnValidationResult() {
                var r = $.Deferred();
                if (false === that.validationResult) r.reject();
                return r.resolve().promise();
            };
            return $.when.apply($, promises).done(function () {
                that._trigger('success');
            }).fail(function () {
                that.validationResult = false;
                that._trigger('error');
            }).always(function () {
                that._trigger('validated');
            }).pipe(promiseBasedOnValidationResult, promiseBasedOnValidationResult);
        },
        // Iterate over refreshed fields, and stop on first failure.
        // Returns `true` if all fields are valid, `false` if a failure is detected
        // or `null` if the result depends on an unresolved promise.
        // Prefer using `whenValid` instead.
        isValid: function isValid(group, force) {
            return ParsleyForm__statusMapping[this.whenValid(group, force).state()];
        },
        // Iterate over refreshed fields and validate them.
        // Returns a promise.
        // A validation that immediately fails will interrupt the validations.
        whenValid: function whenValid(group, force) {
            var that = this;
            this._refreshFields();
            var promises = this._withoutReactualizingFormOptions(function () {
                return $.map(this.fields, function (field) {
                    // do not validate a field if not the same as given validation group
                    if (!group || that._isFieldInGroup(field, group)) return field.whenValid(force);
                });
            });
            return $.when.apply($, promises);
        },
        _isFieldInGroup: function _isFieldInGroup(field, group) {
            if ($.isArray(field.options.group)) return -1 !== $.inArray(group, field.options.group);
            return field.options.group === group;
        },
        _refreshFields: function _refreshFields() {
            return this.actualizeOptions()._bindFields();
        },
        _bindFields: function _bindFields() {
            var self = this;
            var oldFields = this.fields;
            this.fields = [];
            this.fieldsMappedById = {};
            this._withoutReactualizingFormOptions(function () {
                this.$element.find(this.options.inputs).not(this.options.excluded).each(function () {
                    var fieldInstance = new window.Parsley.Factory(this, {}, self);
                    // Only add valid and not excluded `ParsleyField` and `ParsleyFieldMultiple` children
                    if (('ParsleyField' === fieldInstance.__class__ || 'ParsleyFieldMultiple' === fieldInstance.__class__) && true !== fieldInstance.options.excluded)
                        if ('undefined' === typeof self.fieldsMappedById[fieldInstance.__class__ + '-' + fieldInstance.__id__]) {
                            self.fieldsMappedById[fieldInstance.__class__ + '-' + fieldInstance.__id__] = fieldInstance;
                            self.fields.push(fieldInstance);
                        }
                });
                $(oldFields).not(self.fields).each(function () {
                    this._trigger('reset');
                });
            });
            return this;
        },
        // Internal only.
        // Looping on a form's fields to do validation or similar
        // will trigger reactualizing options on all of them, which
        // in turn will reactualize the form's options.
        // To avoid calling actualizeOptions so many times on the form
        // for nothing, _withoutReactualizingFormOptions temporarily disables
        // the method actualizeOptions on this form while `fn` is called.
        _withoutReactualizingFormOptions: function _withoutReactualizingFormOptions(fn) {
            var oldActualizeOptions = this.actualizeOptions;
            this.actualizeOptions = function () {
                return this;
            };
            var result = fn.call(this); // Keep the current `this`.
            this.actualizeOptions = oldActualizeOptions;
            return result;
        },
        // Internal only.
        // Shortcut to trigger an event
        // Returns true iff event is not interrupted and default not prevented.
        _trigger: function _trigger(eventName) {
            return this.trigger('form:' + eventName);
        }
    };
    var ConstraintFactory = function ConstraintFactory(parsleyField, name, requirements, priority, isDomConstraint) {
        if (!new RegExp('ParsleyField').test(parsleyField.__class__)) throw new Error('ParsleyField or ParsleyFieldMultiple instance expected');
        var validatorSpec = window.Parsley._validatorRegistry.validators[name];
        var validator = new ParsleyValidator(validatorSpec);
        $.extend(this, {
            validator: validator,
            name: name,
            requirements: requirements,
            priority: priority || parsleyField.options[name + 'Priority'] || validator.priority,
            isDomConstraint: true === isDomConstraint
        });
        this._parseRequirements(parsleyField.options);
    };
    var capitalize = function capitalize(str) {
        var cap = str[0].toUpperCase();
        return cap + str.slice(1);
    };
    ConstraintFactory.prototype = {
        validate: function validate(value, instance) {
            var args = this.requirementList.slice(0); // Make copy
            args.unshift(value);
            args.push(instance);
            return this.validator.validate.apply(this.validator, args);
        },
        _parseRequirements: function _parseRequirements(options) {
            var that = this;
            this.requirementList = this.validator.parseRequirements(this.requirements, function (key) {
                return options[that.name + capitalize(key)];
            });
        }
    };
    var ParsleyField = function ParsleyField(field, domOptions, options, parsleyFormInstance) {
        this.__class__ = 'ParsleyField';
        this.__id__ = ParsleyUtils__default.generateID();
        this.$element = $(field);
        // Set parent if we have one
        if ('undefined' !== typeof parsleyFormInstance) {
            this.parent = parsleyFormInstance;
        }
        this.options = options;
        this.domOptions = domOptions;
        // Initialize some properties
        this.constraints = [];
        this.constraintsByName = {};
        this.validationResult = [];
        // Bind constraints
        this._bindConstraints();
    };
    var parsley_field__statusMapping = {
        pending: null,
        resolved: true,
        rejected: false
    };
    ParsleyField.prototype = {
        // # Public API
        // Validate field and trigger some events for mainly `ParsleyUI`
        // @returns `true`, an array of the validators that failed, or
        // `null` if validation is not finished. Prefer using whenValidate
        validate: function validate(force) {
            var promise = this.whenValidate(force);
            switch (promise.state()) {
                case 'pending':
                    return null;
                case 'resolved':
                    return true;
                case 'rejected':
                    return this.validationResult;
            }
        },
        // Validate field and trigger some events for mainly `ParsleyUI`
        // @returns a promise that succeeds only when all validations do.
        whenValidate: function whenValidate(force) {
            var that = this;
            this.value = this.getValue();
            // Field Validate event. `this.value` could be altered for custom needs
            this._trigger('validate');
            return this.whenValid(force, this.value).done(function () {
                that._trigger('success');
            }).fail(function () {
                that._trigger('error');
            }).always(function () {
                that._trigger('validated');
            });
        },
        hasConstraints: function hasConstraints() {
            return 0 !== this.constraints.length;
        },
        // An empty optional field does not need validation
        needsValidation: function needsValidation(value) {
            if ('undefined' === typeof value) value = this.getValue();
            // If a field is empty and not required, it is valid
            // Except if `data-parsley-validate-if-empty` explicitely added, useful for some custom validators
            if (!value.length && !this._isRequired() && 'undefined' === typeof this.options.validateIfEmpty) return false;
            return true;
        },
        // Just validate field. Do not trigger any event.
        // Returns `true` iff all constraints pass, `false` if there are failures,
        // or `null` if the result can not be determined yet (depends on a promise)
        // See also `whenValid`.
        isValid: function isValid(force, value) {
            return parsley_field__statusMapping[this.whenValid(force, value).state()];
        },
        // Just validate field. Do not trigger any event.
        // @returns a promise that succeeds only when all validations do.
        // The argument `force` is optional, defaults to `false`.
        // The argument `value` is optional. If given, it will be validated instead of the value of the input.
        whenValid: function whenValid(force, value) {
            // Recompute options and rebind constraints to have latest changes
            this.refreshConstraints();
            this.validationResult = true;
            // A field without constraint is valid
            if (!this.hasConstraints()) return $.when();
            // Make `force` argument optional
            if ('boolean' !== typeof force && 'undefined' === typeof value) {
                value = force;
                force = false;
            }
            // Value could be passed as argument, needed to add more power to 'parsley:field:validate'
            if ('undefined' === typeof value || null === value) value = this.getValue();
            if (!this.needsValidation(value) && true !== force) return $.when();
            var groupedConstraints = this._getGroupedConstraints();
            var promises = [];
            var that = this;
            $.each(groupedConstraints, function (_, constraints) {
                // Process one group of constraints at a time, we validate the constraints
                // and combine the promises together.
                var promise = $.when.apply($, $.map(constraints, $.proxy(that, '_validateConstraint', value)));
                promises.push(promise);
                if (promise.state() === 'rejected') return false; // Interrupt processing if a group has already failed
            });
            return $.when.apply($, promises);
        },
        // @returns a promise
        _validateConstraint: function _validateConstraint(value, constraint) {
            var that = this;
            var result = constraint.validate(value, this);
            // Map false to a failed promise
            if (false === result) result = $.Deferred().reject();
            // Make sure we return a promise and that we record failures
            return $.when(result).fail(function (errorMessage) {
                if (true === that.validationResult) that.validationResult = [];
                that.validationResult.push({
                    assert: constraint,
                    errorMessage: 'string' === typeof errorMessage && errorMessage
                });
            });
        },
        // @returns Parsley field computed value that could be overrided or configured in DOM
        getValue: function getValue() {
            var value;
            // Value could be overriden in DOM or with explicit options
            if ('function' === typeof this.options.value) value = this.options.value(this);
            else if ('undefined' !== typeof this.options.value) value = this.options.value;
            else value = this.$element.val();
            // Handle wrong DOM or configurations
            if ('undefined' === typeof value || null === value) return '';
            return this._handleWhitespace(value);
        },
        // Actualize options that could have change since previous validation
        // Re-bind accordingly constraints (could be some new, removed or updated)
        refreshConstraints: function refreshConstraints() {
            return this.actualizeOptions()._bindConstraints();
        },
        /**
         * Add a new constraint to a field
         *
         * @param {String}   name
         * @param {Mixed}    requirements      optional
         * @param {Number}   priority          optional
         * @param {Boolean}  isDomConstraint   optional
         */
        addConstraint: function addConstraint(name, requirements, priority, isDomConstraint) {
            if (window.Parsley._validatorRegistry.validators[name]) {
                var constraint = new ConstraintFactory(this, name, requirements, priority, isDomConstraint);
                // if constraint already exist, delete it and push new version
                if ('undefined' !== this.constraintsByName[constraint.name]) this.removeConstraint(constraint.name);
                this.constraints.push(constraint);
                this.constraintsByName[constraint.name] = constraint;
            }
            return this;
        },
        // Remove a constraint
        removeConstraint: function removeConstraint(name) {
            for (var i = 0; i < this.constraints.length; i++)
                if (name === this.constraints[i].name) {
                    this.constraints.splice(i, 1);
                    break;
                }
            delete this.constraintsByName[name];
            return this;
        },
        // Update a constraint (Remove + re-add)
        updateConstraint: function updateConstraint(name, parameters, priority) {
            return this.removeConstraint(name).addConstraint(name, parameters, priority);
        },
        // # Internals
        // Internal only.
        // Bind constraints from config + options + DOM
        _bindConstraints: function _bindConstraints() {
            var constraints = [];
            var constraintsByName = {};
            // clean all existing DOM constraints to only keep javascript user constraints
            for (var i = 0; i < this.constraints.length; i++)
                if (false === this.constraints[i].isDomConstraint) {
                    constraints.push(this.constraints[i]);
                    constraintsByName[this.constraints[i].name] = this.constraints[i];
                }
            this.constraints = constraints;
            this.constraintsByName = constraintsByName;
            // then re-add Parsley DOM-API constraints
            for (var name in this.options) this.addConstraint(name, this.options[name], undefined, true);
            // finally, bind special HTML5 constraints
            return this._bindHtml5Constraints();
        },
        // Internal only.
        // Bind specific HTML5 constraints to be HTML5 compliant
        _bindHtml5Constraints: function _bindHtml5Constraints() {
            // html5 required
            if (this.$element.hasClass('required') || this.$element.attr('required')) this.addConstraint('required', true, undefined, true);
            // html5 pattern
            if ('string' === typeof this.$element.attr('pattern')) this.addConstraint('pattern', this.$element.attr('pattern'), undefined, true);
            // range
            if ('undefined' !== typeof this.$element.attr('min') && 'undefined' !== typeof this.$element.attr('max')) this.addConstraint('range', [this.$element.attr('min'), this.$element.attr('max')], undefined, true);
            // HTML5 min
            else if ('undefined' !== typeof this.$element.attr('min')) this.addConstraint('min', this.$element.attr('min'), undefined, true);
            // HTML5 max
            else if ('undefined' !== typeof this.$element.attr('max')) this.addConstraint('max', this.$element.attr('max'), undefined, true);
            // length
            if ('undefined' !== typeof this.$element.attr('minlength') && 'undefined' !== typeof this.$element.attr('maxlength')) this.addConstraint('length', [this.$element.attr('minlength'), this.$element.attr('maxlength')], undefined, true);
            // HTML5 minlength
            else if ('undefined' !== typeof this.$element.attr('minlength')) this.addConstraint('minlength', this.$element.attr('minlength'), undefined, true);
            // HTML5 maxlength
            else if ('undefined' !== typeof this.$element.attr('maxlength')) this.addConstraint('maxlength', this.$element.attr('maxlength'), undefined, true);
            // html5 types
            var type = this.$element.attr('type');
            if ('undefined' === typeof type) return this;
            // Small special case here for HTML5 number: integer validator if step attribute is undefined or an integer value, number otherwise
            if ('number' === type) {
                if ('undefined' === typeof this.$element.attr('step') || 0 === parseFloat(this.$element.attr('step')) % 1) {
                    return this.addConstraint('type', 'integer', undefined, true);
                } else {
                    return this.addConstraint('type', 'number', undefined, true);
                }
                // Regular other HTML5 supported types
            } else if (/^(email|url|range)$/i.test(type)) {
                return this.addConstraint('type', type, undefined, true);
            }
            return this;
        },
        // Internal only.
        // Field is required if have required constraint without `false` value
        _isRequired: function _isRequired() {
            if ('undefined' === typeof this.constraintsByName.required) return false;
            return false !== this.constraintsByName.required.requirements;
        },
        // Internal only.
        // Shortcut to trigger an event
        _trigger: function _trigger(eventName) {
            return this.trigger('field:' + eventName);
        },
        // Internal only
        // Handles whitespace in a value
        // Use `data-parsley-whitespace="squish"` to auto squish input value
        // Use `data-parsley-whitespace="trim"` to auto trim input value
        _handleWhitespace: function _handleWhitespace(value) {
            if (true === this.options.trimValue) ParsleyUtils__default.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"');
            if ('squish' === this.options.whitespace) value = value.replace(/\s{2,}/g, ' ');
            if ('trim' === this.options.whitespace || 'squish' === this.options.whitespace || true === this.options.trimValue) value = ParsleyUtils__default.trimString(value);
            return value;
        },
        // Internal only.
        // Returns the constraints, grouped by descending priority.
        // The result is thus an array of arrays of constraints.
        _getGroupedConstraints: function _getGroupedConstraints() {
            if (false === this.options.priorityEnabled) return [this.constraints];
            var groupedConstraints = [];
            var index = {};
            // Create array unique of priorities
            for (var i = 0; i < this.constraints.length; i++) {
                var p = this.constraints[i].priority;
                if (!index[p]) groupedConstraints.push(index[p] = []);
                index[p].push(this.constraints[i]);
            }
            // Sort them by priority DESC
            groupedConstraints.sort(function (a, b) {
                return b[0].priority - a[0].priority;
            });
            return groupedConstraints;
        }
    };
    var parsley_field = ParsleyField;
    var ParsleyMultiple = function ParsleyMultiple() {
        this.__class__ = 'ParsleyFieldMultiple';
    };
    ParsleyMultiple.prototype = {
        // Add new `$element` sibling for multiple field
        addElement: function addElement($element) {
            this.$elements.push($element);
            return this;
        },
        // See `ParsleyField.refreshConstraints()`
        refreshConstraints: function refreshConstraints() {
            var fieldConstraints;
            this.constraints = [];
            // Select multiple special treatment
            if (this.$element.is('select')) {
                this.actualizeOptions()._bindConstraints();
                return this;
            }
            // Gather all constraints for each input in the multiple group
            for (var i = 0; i < this.$elements.length; i++) {
                // Check if element have not been dynamically removed since last binding
                if (!$('html').has(this.$elements[i]).length) {
                    this.$elements.splice(i, 1);
                    continue;
                }
                fieldConstraints = this.$elements[i].data('ParsleyFieldMultiple').refreshConstraints().constraints;
                for (var j = 0; j < fieldConstraints.length; j++) this.addConstraint(fieldConstraints[j].name, fieldConstraints[j].requirements, fieldConstraints[j].priority, fieldConstraints[j].isDomConstraint);
            }
            return this;
        },
        // See `ParsleyField.getValue()`
        getValue: function getValue() {
            // Value could be overriden in DOM
            if ('undefined' !== typeof this.options.value) return this.options.value;
            // Radio input case
            if (this.$element.is('input[type=radio]')) return this._findRelatedMultiple().filter(':checked').val() || '';
            // checkbox input case
            if (this.$element.is('input[type=checkbox]')) {
                var values = [];
                this._findRelatedMultiple().filter(':checked').each(function () {
                    values.push($(this).val());
                });
                return values;
            }
            // Select multiple case
            if (this.$element.is('select') && null === this.$element.val()) return [];
            // Default case that should never happen
            return this.$element.val();
        },
        _init: function _init() {
            this.$elements = [this.$element];
            return this;
        }
    };
    var ParsleyFactory = function ParsleyFactory(element, options, parsleyFormInstance) {
        this.$element = $(element);
        // If the element has already been bound, returns its saved Parsley instance
        var savedparsleyFormInstance = this.$element.data('Parsley');
        if (savedparsleyFormInstance) {
            // If the saved instance has been bound without a ParsleyForm parent and there is one given in this call, add it
            if ('undefined' !== typeof parsleyFormInstance && savedparsleyFormInstance.parent === window.Parsley) {
                savedparsleyFormInstance.parent = parsleyFormInstance;
                savedparsleyFormInstance._resetOptions(savedparsleyFormInstance.options);
            }
            return savedparsleyFormInstance;
        }
        // Parsley must be instantiated with a DOM element or jQuery $element
        if (!this.$element.length) throw new Error('You must bind Parsley on an existing element.');
        if ('undefined' !== typeof parsleyFormInstance && 'ParsleyForm' !== parsleyFormInstance.__class__) throw new Error('Parent instance must be a ParsleyForm instance');
        this.parent = parsleyFormInstance || window.Parsley;
        return this.init(options);
    };
    ParsleyFactory.prototype = {
        init: function init(options) {
            this.__class__ = 'Parsley';
            this.__version__ = '@@version';
            this.__id__ = ParsleyUtils__default.generateID();
            // Pre-compute options
            this._resetOptions(options);
            // A ParsleyForm instance is obviously a `<form>` element but also every node that is not an input and has the `data-parsley-validate` attribute
            if (this.$element.is('form') || ParsleyUtils__default.checkAttr(this.$element, this.options.namespace, 'validate') && !this.$element.is(this.options.inputs)) return this.bind('parsleyForm');
            // Every other element is bound as a `ParsleyField` or `ParsleyFieldMultiple`
            return this.isMultiple() ? this.handleMultiple() : this.bind('parsleyField');
        },
        isMultiple: function isMultiple() {
            return this.$element.is('input[type=radio], input[type=checkbox]') || this.$element.is('select') && 'undefined' !== typeof this.$element.attr('multiple');
        },
        // Multiples fields are a real nightmare :(
        // Maybe some refactoring would be appreciated here...
        handleMultiple: function handleMultiple() {
            var that = this;
            var name;
            var multiple;
            var parsleyMultipleInstance;
            // Handle multiple name
            if (this.options.multiple); // We already have our 'multiple' identifier
            else if ('undefined' !== typeof this.$element.attr('name') && this.$element.attr('name').length) this.options.multiple = name = this.$element.attr('name');
            else if ('undefined' !== typeof this.$element.attr('id') && this.$element.attr('id').length) this.options.multiple = this.$element.attr('id');
            // Special select multiple input
            if (this.$element.is('select') && 'undefined' !== typeof this.$element.attr('multiple')) {
                this.options.multiple = this.options.multiple || this.__id__;
                return this.bind('parsleyFieldMultiple');
                // Else for radio / checkboxes, we need a `name` or `data-parsley-multiple` to properly bind it
            } else if (!this.options.multiple) {
                ParsleyUtils__default.warn('To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.', this.$element);
                return this;
            }
            // Remove special chars
            this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, '');
            // Add proper `data-parsley-multiple` to siblings if we have a valid multiple name
            if ('undefined' !== typeof name) {
                $('input[name="' + name + '"]').each(function () {
                    if ($(this).is('input[type=radio], input[type=checkbox]')) $(this).attr(that.options.namespace + 'multiple', that.options.multiple);
                });
            }
            // Check here if we don't already have a related multiple instance saved
            var $previouslyRelated = this._findRelatedMultiple();
            for (var i = 0; i < $previouslyRelated.length; i++) {
                parsleyMultipleInstance = $($previouslyRelated.get(i)).data('Parsley');
                if ('undefined' !== typeof parsleyMultipleInstance) {
                    if (!this.$element.data('ParsleyFieldMultiple')) {
                        parsleyMultipleInstance.addElement(this.$element);
                    }
                    break;
                }
            }
            // Create a secret ParsleyField instance for every multiple field. It will be stored in `data('ParsleyFieldMultiple')`
            // And will be useful later to access classic `ParsleyField` stuff while being in a `ParsleyFieldMultiple` instance
            this.bind('parsleyField', true);
            return parsleyMultipleInstance || this.bind('parsleyFieldMultiple');
        },
        // Return proper `ParsleyForm`, `ParsleyField` or `ParsleyFieldMultiple`
        bind: function bind(type, doNotStore) {
            var parsleyInstance;
            switch (type) {
                case 'parsleyForm':
                    parsleyInstance = $.extend(new ParsleyForm(this.$element, this.domOptions, this.options), window.ParsleyExtend)._bindFields();
                    break;
                case 'parsleyField':
                    parsleyInstance = $.extend(new parsley_field(this.$element, this.domOptions, this.options, this.parent), window.ParsleyExtend);
                    break;
                case 'parsleyFieldMultiple':
                    parsleyInstance = $.extend(new parsley_field(this.$element, this.domOptions, this.options, this.parent), new ParsleyMultiple(), window.ParsleyExtend)._init();
                    break;
                default:
                    throw new Error(type + 'is not a supported Parsley type');
            }
            if (this.options.multiple) ParsleyUtils__default.setAttr(this.$element, this.options.namespace, 'multiple', this.options.multiple);
            if ('undefined' !== typeof doNotStore) {
                this.$element.data('ParsleyFieldMultiple', parsleyInstance);
                return parsleyInstance;
            }
            // Store the freshly bound instance in a DOM element for later access using jQuery `data()`
            this.$element.data('Parsley', parsleyInstance);
            // Tell the world we have a new ParsleyForm or ParsleyField instance!
            parsleyInstance._trigger('init');
            return parsleyInstance;
        }
    };
    var vernums = $.fn.jquery.split('.');
    if (parseInt(vernums[0]) <= 1 && parseInt(vernums[1]) < 8) {
        throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
    }
    if (!vernums.forEach) {
        ParsleyUtils__default.warn('Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim');
    }
    // Inherit `on`, `off` & `trigger` to Parsley:
    var Parsley = $.extend(new ParsleyAbstract(), {
        $element: $(document),
        actualizeOptions: null,
        _resetOptions: null,
        Factory: ParsleyFactory,
        version: '@@version'
    });
    // Supplement ParsleyField and Form with ParsleyAbstract
    // This way, the constructors will have access to those methods
    $.extend(parsley_field.prototype, ParsleyAbstract.prototype);
    $.extend(ParsleyForm.prototype, ParsleyAbstract.prototype);
    // Inherit actualizeOptions and _resetOptions:
    $.extend(ParsleyFactory.prototype, ParsleyAbstract.prototype);
    // ### jQuery API
    // `$('.elem').parsley(options)` or `$('.elem').psly(options)`
    $.fn.parsley = $.fn.psly = function (options) {
        if (this.length > 1) {
            var instances = [];
            this.each(function () {
                instances.push($(this).parsley(options));
            });
            return instances;
        }
        // Return undefined if applied to non existing DOM element
        if (!$(this).length) {
            ParsleyUtils__default.warn('You must bind Parsley on an existing element.');
            return;
        }
        return new ParsleyFactory(this, options);
    };
    // ### ParsleyField and ParsleyForm extension
    // Ensure the extension is now defined if it wasn't previously
    if ('undefined' === typeof window.ParsleyExtend) window.ParsleyExtend = {};
    // ### Parsley config
    // Inherit from ParsleyDefault, and copy over any existing values
    Parsley.options = $.extend(ParsleyUtils__default.objectCreate(ParsleyDefaults), window.ParsleyConfig);
    window.ParsleyConfig = Parsley.options; // Old way of accessing global options
    // ### Globals
    window.Parsley = window.psly = Parsley;
    window.ParsleyUtils = ParsleyUtils__default;
    // ### Define methods that forward to the registry, and deprecate all access except through window.Parsley
    var registry = window.Parsley._validatorRegistry = new ParsleyValidatorRegistry(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
    window.ParsleyValidator = {};
    $.each('setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator'.split(' '), function (i, method) {
        window.Parsley[method] = $.proxy(registry, method);
        window.ParsleyValidator[method] = function () {
            ParsleyUtils__default.warnOnce('Accessing the method \'' + method + '\' through ParsleyValidator is deprecated. Simply call \'window.Parsley.' + method + '(...)\'');
            return window.Parsley[method].apply(window.Parsley, arguments);
        };
    });
    // ### ParsleyUI
    // UI is a separate class that only listens to some events and then modifies the DOM accordingly
    // Could be overriden by defining a `window.ParsleyConfig.ParsleyUI` appropriate class (with `listen()` method basically)
    window.ParsleyUI = 'function' === typeof window.ParsleyConfig.ParsleyUI ? new window.ParsleyConfig.ParsleyUI().listen() : new ParsleyUI().listen();
    // ### PARSLEY auto-binding
    // Prevent it by setting `ParsleyConfig.autoBind` to `false`
    if (false !== window.ParsleyConfig.autoBind) {
        $(function () {
            // Works only on `data-parsley-validate`.
            if ($('[data-parsley-validate]').length) $('[data-parsley-validate]').parsley();
        });
    }
    var o = $({});
    var deprecated = function deprecated() {
        ParsleyUtils__default.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley");
    };
    // Returns an event handler that calls `fn` with the arguments it expects
    function adapt(fn, context) {
        // Store to allow unbinding
        if (!fn.parsleyAdaptedCallback) {
            fn.parsleyAdaptedCallback = function () {
                var args = Array.prototype.slice.call(arguments, 0);
                args.unshift(this);
                fn.apply(context || o, args);
            };
        }
        return fn.parsleyAdaptedCallback;
    }

    var eventPrefix = 'parsley:';
    // Converts 'parsley:form:validate' into 'form:validate'
    function eventName(name) {
        if (name.lastIndexOf(eventPrefix, 0) === 0) return name.substr(eventPrefix.length);
        return name;
    }

    // $.listen is deprecated. Use Parsley.on instead.
    $.listen = function (name, callback) {
        var context;
        deprecated();
        if ('object' === typeof arguments[1] && 'function' === typeof arguments[2]) {
            context = arguments[1];
            callback = arguments[2];
        }
        if ('function' !== typeof callback) throw new Error('Wrong parameters');
        window.Parsley.on(eventName(name), adapt(callback, context));
    };
    $.listenTo = function (instance, name, fn) {
        deprecated();
        if (!(instance instanceof parsley_field) && !(instance instanceof ParsleyForm)) throw new Error('Must give Parsley instance');
        if ('string' !== typeof name || 'function' !== typeof fn) throw new Error('Wrong parameters');
        instance.on(eventName(name), adapt(fn));
    };
    $.unsubscribe = function (name, fn) {
        deprecated();
        if ('string' !== typeof name || 'function' !== typeof fn) throw new Error('Wrong arguments');
        window.Parsley.off(eventName(name), fn.parsleyAdaptedCallback);
    };
    $.unsubscribeTo = function (instance, name) {
        deprecated();
        if (!(instance instanceof parsley_field) && !(instance instanceof ParsleyForm)) throw new Error('Must give Parsley instance');
        instance.off(eventName(name));
    };
    $.unsubscribeAll = function (name) {
        deprecated();
        window.Parsley.off(eventName(name));
        $('form,input,textarea,select').each(function () {
            var instance = $(this).data('Parsley');
            if (instance) {
                instance.off(eventName(name));
            }
        });
    };
    // $.emit is deprecated. Use jQuery events instead.
    $.emit = function (name, instance) {
        deprecated();
        var instanceGiven = instance instanceof parsley_field || instance instanceof ParsleyForm;
        var args = Array.prototype.slice.call(arguments, instanceGiven ? 2 : 1);
        args.unshift(eventName(name));
        if (!instanceGiven) {
            instance = window.Parsley;
        }
        instance.trigger.apply(instance, args);
    };
    var pubsub = {};
    $.extend(true, Parsley, {
        asyncValidators: {
            'default': {
                fn: function fn(xhr) {
                    // By default, only status 2xx are deemed successful.
                    // Note: we use status instead of state() because responses with status 200
                    // but invalid messages (e.g. an empty body for content type set to JSON) will
                    // result in state() === 'rejected'.
                    return xhr.status >= 200 && xhr.status < 300;
                },
                url: false
            },
            reverse: {
                fn: function fn(xhr) {
                    // If reverse option is set, a failing ajax request is considered successful
                    return xhr.status < 200 || xhr.status >= 300;
                },
                url: false
            }
        },
        addAsyncValidator: function addAsyncValidator(name, fn, url, options) {
            Parsley.asyncValidators[name] = {
                fn: fn,
                url: url || false,
                options: options || {}
            };
            return this;
        },
        eventValidate: function eventValidate(event) {
            // For keyup, keypress, keydown.. events that could be a little bit obstrusive
            // do not validate if val length < min threshold on first validation. Once field have been validated once and info
            // about success or failure have been displayed, always validate with this trigger to reflect every yalidation change.
            if (new RegExp('key').test(event.type))
                if (!this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold) return;
            this._ui.validatedOnce = true;
            this.whenValidate();
        }
    });
    Parsley.addValidator('remote', {
        requirementType: {
            '': 'string',
            'validator': 'string',
            'reverse': 'boolean',
            'options': 'object'
        },
        validateString: function validateString(value, url, options, instance) {
            var data = {};
            var ajaxOptions;
            var csr;
            var validator = options.validator || (true === options.reverse ? 'reverse' : 'default');
            if ('undefined' === typeof Parsley.asyncValidators[validator]) throw new Error('Calling an undefined async validator: `' + validator + '`');
            url = Parsley.asyncValidators[validator].url || url;
            // Fill current value
            if (url.indexOf('{value}') > -1) {
                url = url.replace('{value}', encodeURIComponent(value));
            } else {
                data[instance.$element.attr('name') || instance.$element.attr('id')] = value;
            }
            // Merge options passed in from the function with the ones in the attribute
            var remoteOptions = $.extend(true, options.options || {}, Parsley.asyncValidators[validator].options);
            // All `$.ajax(options)` could be overridden or extended directly from DOM in `data-parsley-remote-options`
            ajaxOptions = $.extend(true, {}, {
                url: url,
                data: data,
                type: 'GET'
            }, remoteOptions);
            // Generate store key based on ajax options
            instance.trigger('field:ajaxoptions', instance, ajaxOptions);
            csr = $.param(ajaxOptions);
            // Initialise querry cache
            if ('undefined' === typeof Parsley._remoteCache) Parsley._remoteCache = {};
            // Try to retrieve stored xhr
            var xhr = Parsley._remoteCache[csr] = Parsley._remoteCache[csr] || $.ajax(ajaxOptions);
            var handleXhr = function handleXhr() {
                var result = Parsley.asyncValidators[validator].fn.call(instance, xhr, url, options);
                if (!result) // Map falsy results to rejected promise
                    result = $.Deferred().reject();
                return $.when(result);
            };
            return xhr.then(handleXhr, handleXhr);
        },
        priority: -1
    });
    Parsley.on('form:submit', function () {
        Parsley._remoteCache = {};
    });
    window.ParsleyExtend.addAsyncValidator = function () {
        ParsleyUtils.warnOnce('Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`');
        return Parsley.apply(Parsley.addAsyncValidator, arguments);
    };
    // This is bundled with the Parsley library
    Parsley.addMessages('en', {
        defaultMessage: "This value seems to be invalid.",
        type: {
            email: "This value should be a valid email.",
            url: "This value should be a valid url.",
            number: "This value should be a valid number.",
            integer: "This value should be a valid integer.",
            digits: "This value should be digits.",
            alphanum: "This value should be alphanumeric."
        },
        notblank: "This value should not be blank.",
        required: "This value is required.",
        pattern: "This value seems to be invalid.",
        min: "This value should be greater than or equal to %s.",
        max: "This value should be lower than or equal to %s.",
        range: "This value should be between %s and %s.",
        minlength: "This value is too short. It should have %s characters or more.",
        maxlength: "This value is too long. It should have %s characters or fewer.",
        length: "This value length is invalid. It should be between %s and %s characters long.",
        mincheck: "You must select at least %s choices.",
        maxcheck: "You must select %s choices or fewer.",
        check: "You must select between %s and %s choices.",
        equalto: "This value should be the same."
    });
    Parsley.setLocale('en');
    var parsley = Parsley;
    return parsley;
});
//# sourceMappingURL=parsley.js.map
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

// `window.ParsleyExtend`, like `ParsleyAbstract`, is inherited by `ParsleyField` and `ParsleyForm`
// That way, we could add new methods or redefine some for these both classes. In particular case
// We are adding async validation methods that returns promises, bind them properly to triggered
// Events like onkeyup when field is invalid or on form submit. These validation methods adds an
// Extra `remote` validator which could not be simply added like other `ParsleyExtra` validators
// Because returns promises instead of booleans.
(function($){

window.ParsleyExtend = window.ParsleyExtend || {};
window.ParsleyExtend = $.extend(true, window.ParsleyExtend, {
  asyncSupport: true,

  asyncValidators: {
    'default': {
      fn: function (xhr) {
        return 'resolved' === xhr.state();
      },
      url: false
    },
    reverse: {
      fn: function (xhr) {
        // If reverse option is set, a failing ajax request is considered successful
        return 'rejected' === xhr.state();
      },
      url: false
    }
  },

  addAsyncValidator: function (name, fn, url, options) {
    this.asyncValidators[name.toLowerCase()] = {
      fn: fn,
      url: url || false,
      options: options || {}
    };

    return this;
  },

  asyncValidate: function () {
    if ('ParsleyForm' === this.__class__)
      return this._asyncValidateForm.apply(this, arguments);

    return this._asyncValidateField.apply(this, arguments);
  },

  asyncIsValid: function () {
    if ('ParsleyField' === this.__class__)
      return this._asyncIsValidField.apply(this, arguments);

    return this._asyncIsValidForm.apply(this, arguments);
  },

  onSubmitValidate: function (event) {
    var that = this;

    // This is a Parsley generated submit event, do not validate, do not prevent, simply exit and keep normal behavior
    if (true === event.parsley)
      return;

    // Clone the event object
    this.submitEvent = $.extend(true, {}, event);

    // Prevent form submit and immediately stop its event propagation
    if (event instanceof $.Event) {
      event.stopImmediatePropagation();
      event.preventDefault();
    }

    return this._asyncValidateForm(undefined, event)
      .done(function () {
        // If user do not have prevented the event, re-submit form
        if (that._trigger('submit') && !that.submitEvent.isDefaultPrevented())
          that.$element.trigger($.extend($.Event('submit'), { parsley: true }));
      });
  },

  eventValidate: function (event) {
    // For keyup, keypress, keydown.. events that could be a little bit obstrusive
    // do not validate if val length < min threshold on first validation. Once field have been validated once and info
    // about success or failure have been displayed, always validate with this trigger to reflect every yalidation change.
    if (new RegExp('key').test(event.type))
      if (!this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold)
        return;

    this._ui.validatedOnce = true;
    this.asyncValidate();
  },

  // Returns Promise
  _asyncValidateForm: function (group, event) {
    var
      that = this,
      promises = [];

    this._refreshFields();

    this._trigger('validate');

    for (var i = 0; i < this.fields.length; i++) {

      // do not validate a field if not the same as given validation group
      if (group && group !== this.fields[i].options.group)
        continue;

      promises.push(this.fields[i]._asyncValidateField());
    }

    return $.when.apply($, promises)
      .done(function () {
        that._trigger('success');
      })
      .fail(function () {
        that._trigger('error');
      })
      .always(function () {
        that._trigger('validated');
      });
  },

  _asyncIsValidForm: function (group, force) {
    var promises = [];
    this._refreshFields();

    for (var i = 0; i < this.fields.length; i++) {

      // do not validate a field if not the same as given validation group
      if (group && group !== this.fields[i].options.group)
        continue;

      promises.push(this.fields[i]._asyncIsValidField(force));
    }

    return $.when.apply($, promises);
  },

  _asyncValidateField: function (force) {
    var that = this;

    this._trigger('validate');

    return this._asyncIsValidField(force)
      .done(function () {
        that._trigger('success');
      })
      .fail(function () {
        that._trigger('error');
      })
      .always(function () {
        that._trigger('validated');
      });
  },

  _asyncIsValidField: function (force, value) {
    var
      deferred = $.Deferred(),
      remoteConstraintIndex;

    // If regular isValid (matching regular constraints) returns `false`, no need to go further
    // Directly reject promise, do not run remote validator and save server load
    if (false === this.isValid(force, value))
      deferred.rejectWith(this);

    // If regular constraints are valid, and there is a remote validator registered, run it
    else if ('undefined' !== typeof this.constraintsByName.remote)
      this._remote(deferred);

    // Otherwise all is good, resolve promise
    else
      deferred.resolveWith(this);

    // Return promise
    return deferred.promise();
  },

  _remote: function (deferred) {
    var
      that = this,
      data = {},
      ajaxOptions,
      csr,
      validator = this.options.remoteValidator || (true === this.options.remoteReverse ? 'reverse' : 'default');

    validator = validator.toLowerCase();

    if ('undefined' === typeof this.asyncValidators[validator])
      throw new Error('Calling an undefined async validator: `' + validator + '`');

    // Fill data with current value
    data[this.$element.attr('name') || this.$element.attr('id')] = this.getValue();

    // Merge options passed in from the function with the ones in the attribute
    this.options.remoteOptions = $.extend(true, this.options.remoteOptions || {} , this.asyncValidators[validator].options);

    // All `$.ajax(options)` could be overridden or extended directly from DOM in `data-parsley-remote-options`
    ajaxOptions = $.extend(true, {}, {
      url: this.asyncValidators[validator].url || this.options.remote,
      data: data,
      type: 'GET'
    }, this.options.remoteOptions || {});

    // Generate store key based on ajax options
    csr = $.param(ajaxOptions);

    // Initialise querry cache
    if ('undefined' === typeof this._remoteCache)
      this._remoteCache = {};

    // Try to retrieve stored xhr
    if (!this._remoteCache[csr]) {
      // Prevent multi burst xhr queries
      if (this._xhr && 'pending' === this._xhr.state())
        this._xhr.abort();

      // Make ajax call
      this._xhr = $.ajax(ajaxOptions);

      // Store remote call result to avoid next calls with exact same parameters
      this._remoteCache[csr] = this._xhr;
    }

    this._remoteCache[csr]
      .done(function (data, textStatus, xhr) {
        that._handleRemoteResult(validator, xhr, deferred);
      })
      .fail(function (xhr, status, message) {
        // If we aborted the query, do not handle nothing for this value
        if ('abort' === status)
          return;

        that._handleRemoteResult(validator, xhr, deferred);
      });
  },

  _handleRemoteResult: function (validator, xhr, deferred) {
    // If true, simply resolve and exit
    if ('function' === typeof this.asyncValidators[validator].fn && this.asyncValidators[validator].fn.call(this, xhr)) {
      deferred.resolveWith(this);

      return;
    }

    // Else, create a proper remote validation Violation to trigger right UI
    this.validationResult = [
      new window.ParsleyValidator.Validator.Violation(
        this.constraintsByName.remote,
        this.getValue(),
        null
      )
    ];

    deferred.rejectWith(this);
  }
});

// Remote validator is just an always true sync validator with lowest (-1) priority possible
// It will be overloaded in `validateThroughValidator()` that will do the heavy async work
// This 'hack' is needed not to mess up too much with error messages and stuff in `ParsleyUI`
window.ParsleyConfig = window.ParsleyConfig || {};
window.ParsleyConfig.validators = window.ParsleyConfig.validators || {};
window.ParsleyConfig.validators.remote = {
  fn: function () {
    return true;
  },
  priority: -1
};

window.Parsley.on('form:submit', function () {
  this._remoteCache = {};
});

})(jQuery);

/*!
* Parsleyjs
* Guillaume Potier - <guillaume@wisembly.com>
* Version 2.1.2 - built Tue Jun 16 2015 10:32:01
* MIT Licensed
*
*/
!(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module depending on jQuery.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Register plugin with global jQuery object.
    factory(jQuery);
  }
}(function ($) {
  // small hack for requirejs if jquery is loaded through map and not path
  // see http://requirejs.org/docs/jquery.html
  if ('undefined' === typeof $ && 'undefined' !== typeof window.jQuery)
    $ = window.jQuery;
  var globalID = 1,
    pastWarnings = {};
  var ParsleyUtils = {
    // Parsley DOM-API
    // returns object from dom attributes and values
    attr: function ($element, namespace, obj) {
      var
        attribute, attributes,
        regex = new RegExp('^' + namespace, 'i');
      if ('undefined' === typeof obj)
        obj = {};
      else {
        // Clear all own properties. This won't affect prototype's values
        for (var i in obj) {
          if (obj.hasOwnProperty(i))
            delete obj[i];
        }
      }
      if ('undefined' === typeof $element || 'undefined' === typeof $element[0])
        return obj;
      attributes = $element[0].attributes;
      for (var i = attributes.length; i--; ) {
        attribute = attributes[i];
        if (attribute && attribute.specified && regex.test(attribute.name)) {
          obj[this.camelize(attribute.name.slice(namespace.length))] = this.deserializeValue(attribute.value);
        }
      }
      return obj;
    },
    checkAttr: function ($element, namespace, checkAttr) {
      return $element.is('[' + namespace + checkAttr + ']');
    },
    setAttr: function ($element, namespace, attr, value) {
      $element[0].setAttribute(this.dasherize(namespace + attr), String(value));
    },
    generateID: function () {
      return '' + globalID++;
    },
    /** Third party functions **/
    // Zepto deserialize function
    deserializeValue: function (value) {
      var num;
      try {
        return value ?
          value == "true" ||
          (value == "false" ? false :
          value == "null" ? null :
          !isNaN(num = Number(value)) ? num :
          /^[\[\{]/.test(value) ? $.parseJSON(value) :
          value)
          : value;
      } catch (e) { return value; }
    },
    // Zepto camelize function
    camelize: function (str) {
      return str.replace(/-+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
    },
    // Zepto dasherize function
    dasherize: function (str) {
      return str.replace(/::/g, '/')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
        .replace(/([a-z\d])([A-Z])/g, '$1_$2')
        .replace(/_/g, '-')
        .toLowerCase();
    },
    warn: function() {
      if (window.console && window.console.warn)
        window.console.warn.apply(window.console, arguments);
    },
    warnOnce: function(msg) {
      if (!pastWarnings[msg]) {
        pastWarnings[msg] = true;
        this.warn.apply(this, arguments);
      }
    },
    _resetWarnings: function() {
      pastWarnings = {};
    },
    // Object.create polyfill, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill
    objectCreate: Object.create || (function () {
      var Object = function () {};
      return function (prototype) {
        if (arguments.length > 1) {
          throw Error('Second argument not supported');
        }
        if (typeof prototype != 'object') {
          throw TypeError('Argument must be an object');
        }
        Object.prototype = prototype;
        var result = new Object();
        Object.prototype = null;
        return result;
      };
    })()
  };
// All these options could be overriden and specified directly in DOM using
// `data-parsley-` default DOM-API
// eg: `inputs` can be set in DOM using `data-parsley-inputs="input, textarea"`
// eg: `data-parsley-stop-on-first-failing-constraint="false"`

  var ParsleyDefaults = {
    // ### General
    // Default data-namespace for DOM API
    namespace: 'data-parsley-',
    // Supported inputs by default
    inputs: 'input, textarea, select',
    // Excluded inputs by default
    excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden]',
    // Stop validating field on highest priority failing constraint
    priorityEnabled: true,
    // ### Field only
    // identifier used to group together inputs (e.g. radio buttons...)
    multiple: null,
    // identifier (or array of identifiers) used to validate only a select group of inputs
    group: null,
    // ### UI
    // Enable\Disable error messages
    uiEnabled: true,
    // Key events threshold before validation
    validationThreshold: 3,
    // Focused field on form validation error. 'fist'|'last'|'none'
    focus: 'first',
    // `$.Event()` that will trigger validation. eg: `keyup`, `change`...
    trigger: false,
    // Class that would be added on every failing validation Parsley field
    errorClass: 'parsley-error',
    // Same for success validation
    successClass: 'parsley-success',
    // Return the `$element` that will receive these above success or error classes
    // Could also be (and given directly from DOM) a valid selector like `'#div'`
    classHandler: function (ParsleyField) {},
    // Return the `$element` where errors will be appended
    // Could also be (and given directly from DOM) a valid selector like `'#div'`
    errorsContainer: function (ParsleyField) {},
    // ul elem that would receive errors' list
    errorsWrapper: '<ul class="parsley-errors-list"></ul>',
    // li elem that would receive error message
    errorTemplate: '<li></li>'
  };

  var ParsleyAbstract = function () {};
  ParsleyAbstract.prototype = {
    asyncSupport: false,
    actualizeOptions: function () {
      ParsleyUtils.attr(this.$element, this.options.namespace, this.domOptions);
      if (this.parent && this.parent.actualizeOptions)
        this.parent.actualizeOptions();
      return this;
    },
    _resetOptions: function (initOptions) {
      this.domOptions = ParsleyUtils.objectCreate(this.parent.options);
      this.options = ParsleyUtils.objectCreate(this.domOptions);
      // Shallow copy of ownProperties of initOptions:
      for (var i in initOptions) {
        if (initOptions.hasOwnProperty(i))
          this.options[i] = initOptions[i];
      }
      this.actualizeOptions();
    },
    // ParsleyValidator validate proxy function . Could be replaced by third party scripts
    validateThroughValidator: function (value, constraints, priority) {
      return window.ParsleyValidator.validate(value, constraints, priority);
    },
    _listeners: null,
    // Register a callback for the given event name.
    // Callback is called with context as the first argument and the `this`.
    // The context is the current parsley instance, or window.Parsley if global.
    // A return value of `false` will interrupt the calls
    on: function (name, fn) {
      this._listeners = this._listeners || {};
      var queue = this._listeners[name] = this._listeners[name] || [];
      queue.push(fn);
      return this;
    },
    // Deprecated. Use `on` instead.
    subscribe: function(name, fn) {
      $.listenTo(this, name.toLowerCase(), fn);
    },
    // Unregister a callback (or all if none is given) for the given event name
    off: function (name, fn) {
      var queue = this._listeners && this._listeners[name];
      if (queue) {
        if (!fn) {
          delete this._listeners[name];
        } else {
          for(var i = queue.length; i--; )
            if (queue[i] === fn)
              queue.splice(i, 1);
        }
      }
      return this;
    },
    // Deprecated. Use `off`
    unsubscribe: function(name, fn) {
      $.unsubscribeTo(this, name.toLowerCase());
    },
    // Trigger an event of the given name.
    // A return value of `false` interrupts the callback chain.
    // Returns false if execution was interrupted.
    trigger: function (name, target) {
      target = target || this;
      var queue = this._listeners && this._listeners[name];
      var result, parentResult;
      if (queue) {
        for(var i = queue.length; i--; ) {
          result = queue[i].call(target, target);
          if (result === false) return result;
        }
      }
      if (this.parent) {
        return this.parent.trigger(name, target);
      }
      return true;
    },
    // Reset UI
    reset: function () {
      // Field case: just emit a reset event for UI
      if ('ParsleyForm' !== this.__class__)
        return this._trigger('reset');
      // Form case: emit a reset event for each field
      for (var i = 0; i < this.fields.length; i++)
        this.fields[i]._trigger('reset');
      this._trigger('reset');
    },
    // Destroy Parsley instance (+ UI)
    destroy: function () {
      // Field case: emit destroy event to clean UI and then destroy stored instance
      if ('ParsleyForm' !== this.__class__) {
        this.$element.removeData('Parsley');
        this.$element.removeData('ParsleyFieldMultiple');
        this._trigger('destroy');
        return;
      }
      // Form case: destroy all its fields and then destroy stored instance
      for (var i = 0; i < this.fields.length; i++)
        this.fields[i].destroy();
      this.$element.removeData('Parsley');
      this._trigger('destroy');
    },
    _findRelatedMultiple: function() {
      return this.parent.$element.find('[' + this.options.namespace + 'multiple="' + this.options.multiple +'"]');
    }
  };
/*!
* validator.js
* Guillaume Potier - <guillaume@wisembly.com>
* Version 1.0.1 - built Mon Aug 25 2014 16:10:10
* MIT Licensed
*
*/
var Validator = ( function ( ) {
  var exports = {};
  /**
  * Validator
  */
  var Validator = function ( options ) {
    this.__class__ = 'Validator';
    this.__version__ = '1.0.1';
    this.options = options || {};
    this.bindingKey = this.options.bindingKey || '_validatorjsConstraint';
  };
  Validator.prototype = {
    constructor: Validator,
    /*
    * Validate string: validate( string, Assert, string ) || validate( string, [ Assert, Assert ], [ string, string ] )
    * Validate object: validate( object, Constraint, string ) || validate( object, Constraint, [ string, string ] )
    * Validate binded object: validate( object, string ) || validate( object, [ string, string ] )
    */
    validate: function ( objectOrString, AssertsOrConstraintOrGroup, group ) {
      if ( 'string' !== typeof objectOrString && 'object' !== typeof objectOrString )
        throw new Error( 'You must validate an object or a string' );
      // string / array validation
      if ( 'string' === typeof objectOrString || _isArray(objectOrString) )
        return this._validateString( objectOrString, AssertsOrConstraintOrGroup, group );
      // binded object validation
      if ( this.isBinded( objectOrString ) )
        return this._validateBindedObject( objectOrString, AssertsOrConstraintOrGroup );
      // regular object validation
      return this._validateObject( objectOrString, AssertsOrConstraintOrGroup, group );
    },
    bind: function ( object, constraint ) {
      if ( 'object' !== typeof object )
        throw new Error( 'Must bind a Constraint to an object' );
      object[ this.bindingKey ] = new Constraint( constraint );
      return this;
    },
    unbind: function ( object ) {
      if ( 'undefined' === typeof object._validatorjsConstraint )
        return this;
      delete object[ this.bindingKey ];
      return this;
    },
    isBinded: function ( object ) {
      return 'undefined' !== typeof object[ this.bindingKey ];
    },
    getBinded: function ( object ) {
      return this.isBinded( object ) ? object[ this.bindingKey ] : null;
    },
    _validateString: function ( string, assert, group ) {
      var result, failures = [];
      if ( !_isArray( assert ) )
        assert = [ assert ];
      for ( var i = 0; i < assert.length; i++ ) {
        if ( ! ( assert[ i ] instanceof Assert) )
          throw new Error( 'You must give an Assert or an Asserts array to validate a string' );
        result = assert[ i ].check( string, group );
        if ( result instanceof Violation )
          failures.push( result );
      }
      return failures.length ? failures : true;
    },
    _validateObject: function ( object, constraint, group ) {
      if ( 'object' !== typeof constraint )
        throw new Error( 'You must give a constraint to validate an object' );
      if ( constraint instanceof Constraint )
        return constraint.check( object, group );
      return new Constraint( constraint ).check( object, group );
    },
    _validateBindedObject: function ( object, group ) {
      return object[ this.bindingKey ].check( object, group );
    }
  };
  Validator.errorCode = {
    must_be_a_string: 'must_be_a_string',
    must_be_an_array: 'must_be_an_array',
    must_be_a_number: 'must_be_a_number',
    must_be_a_string_or_array: 'must_be_a_string_or_array'
  };
  /**
  * Constraint
  */
  var Constraint = function ( data, options ) {
    this.__class__ = 'Constraint';
    this.options = options || {};
    this.nodes = {};
    if ( data ) {
      try {
        this._bootstrap( data );
      } catch ( err ) {
        throw new Error( 'Should give a valid mapping object to Constraint', err, data );
      }
    }
  };
  Constraint.prototype = {
    constructor: Constraint,
    check: function ( object, group ) {
      var result, failures = {};
      // check all constraint nodes.
      for ( var property in this.nodes ) {
        var isRequired = false;
        var constraint = this.get(property);
        var constraints = _isArray( constraint ) ? constraint : [constraint];
        for (var i = constraints.length - 1; i >= 0; i--) {
          if ( 'Required' === constraints[i].__class__ ) {
            isRequired = constraints[i].requiresValidation( group );
            continue;
          }
        }
        if ( ! this.has( property, object ) && ! this.options.strict && ! isRequired ) {
          continue;
        }
        try {
          if (! this.has( property, this.options.strict || isRequired ? object : undefined ) ) {
            // we trigger here a HaveProperty Assert violation to have uniform Violation object in the end
            new Assert().HaveProperty( property ).validate( object );
          }
          result = this._check( property, object[ property ], group );
          // check returned an array of Violations or an object mapping Violations
          if ( ( _isArray( result ) && result.length > 0 ) || ( !_isArray( result ) && !_isEmptyObject( result ) ) ) {
            failures[ property ] = result;
          }
        } catch ( violation ) {
          failures[ property ] = violation;
        }
      }
      return _isEmptyObject(failures) ? true : failures;
    },
    add: function ( node, object ) {
      if ( object instanceof Assert  || ( _isArray( object ) && object[ 0 ] instanceof Assert ) ) {
        this.nodes[ node ] = object;
        return this;
      }
      if ( 'object' === typeof object && !_isArray( object ) ) {
        this.nodes[ node ] = object instanceof Constraint ? object : new Constraint( object );
        return this;
      }
      throw new Error( 'Should give an Assert, an Asserts array, a Constraint', object );
    },
    has: function ( node, nodes ) {
      nodes = 'undefined' !== typeof nodes ? nodes : this.nodes;
      return 'undefined' !== typeof nodes[ node ];
    },
    get: function ( node, placeholder ) {
      return this.has( node ) ? this.nodes[ node ] : placeholder || null;
    },
    remove: function ( node ) {
      var _nodes = [];
      for ( var i in this.nodes )
        if ( i !== node )
          _nodes[ i ] = this.nodes[ i ];
      this.nodes = _nodes;
      return this;
    },
    _bootstrap: function ( data ) {
      if ( data instanceof Constraint )
        return this.nodes = data.nodes;
      for ( var node in data )
        this.add( node, data[ node ] );
    },
    _check: function ( node, value, group ) {
      // Assert
      if ( this.nodes[ node ] instanceof Assert )
        return this._checkAsserts( value, [ this.nodes[ node ] ], group );
      // Asserts
      if ( _isArray( this.nodes[ node ] ) )
        return this._checkAsserts( value, this.nodes[ node ], group );
      // Constraint -> check api
      if ( this.nodes[ node ] instanceof Constraint )
        return this.nodes[ node ].check( value, group );
      throw new Error( 'Invalid node', this.nodes[ node ] );
    },
    _checkAsserts: function ( value, asserts, group ) {
      var result, failures = [];
      for ( var i = 0; i < asserts.length; i++ ) {
        result = asserts[ i ].check( value, group );
        if ( 'undefined' !== typeof result && true !== result )
          failures.push( result );
        // Some asserts (Collection for example) could return an object
        // if ( result && ! ( result instanceof Violation ) )
        //   return result;
        //
        // // Vast assert majority return Violation
        // if ( result instanceof Violation )
        //   failures.push( result );
      }
      return failures;
    }
  };
  /**
  * Violation
  */
  var Violation = function ( assert, value, violation ) {
    this.__class__ = 'Violation';
    if ( ! ( assert instanceof Assert ) )
      throw new Error( 'Should give an assertion implementing the Assert interface' );
    this.assert = assert;
    this.value = value;
    if ( 'undefined' !== typeof violation )
      this.violation = violation;
  };
  Violation.prototype = {
    show: function () {
      var show =  {
        assert: this.assert.__class__,
        value: this.value
      };
      if ( this.violation )
        show.violation = this.violation;
      return show;
    },
    __toString: function () {
      if ( 'undefined' !== typeof this.violation )
        this.violation = '", ' + this.getViolation().constraint + ' expected was ' + this.getViolation().expected;
      return this.assert.__class__ + ' assert failed for "' + this.value + this.violation || '';
    },
    getViolation: function () {
      var constraint, expected;
      for ( constraint in this.violation )
        expected = this.violation[ constraint ];
      return { constraint: constraint, expected: expected };
    }
  };
  /**
  * Assert
  */
  var Assert = function ( group ) {
    this.__class__ = 'Assert';
    this.__parentClass__ = this.__class__;
    this.groups = [];
    if ( 'undefined' !== typeof group )
      this.addGroup( group );
  };
  Assert.prototype = {
    construct: Assert,
    requiresValidation: function ( group ) {
      if ( group && !this.hasGroup( group ) )
        return false;
      if ( !group && this.hasGroups() )
        return false;
      return true;
    },
    check: function ( value, group ) {
      if ( !this.requiresValidation( group ) )
        return;
      try {
        return this.validate( value, group );
      } catch ( violation ) {
        return violation;
      }
    },
    hasGroup: function ( group ) {
      if ( _isArray( group ) )
        return this.hasOneOf( group );
      // All Asserts respond to "Any" group
      if ( 'Any' === group )
        return true;
      // Asserts with no group also respond to "Default" group. Else return false
      if ( !this.hasGroups() )
        return 'Default' === group;
      return -1 !== this.groups.indexOf( group );
    },
    hasOneOf: function ( groups ) {
      for ( var i = 0; i < groups.length; i++ )
        if ( this.hasGroup( groups[ i ] ) )
          return true;
      return false;
    },
    hasGroups: function () {
      return this.groups.length > 0;
    },
    addGroup: function ( group ) {
      if ( _isArray( group ) )
        return this.addGroups( group );
      if ( !this.hasGroup( group ) )
        this.groups.push( group );
      return this;
    },
    removeGroup: function ( group ) {
      var _groups = [];
      for ( var i = 0; i < this.groups.length; i++ )
        if ( group !== this.groups[ i ] )
          _groups.push( this.groups[ i ] );
      this.groups = _groups;
      return this;
    },
    addGroups: function ( groups ) {
      for ( var i = 0; i < groups.length; i++ )
        this.addGroup( groups[ i ] );
      return this;
    },
    /**
    * Asserts definitions
    */
    HaveProperty: function ( node ) {
      this.__class__ = 'HaveProperty';
      this.node = node;
      this.validate = function ( object ) {
        if ( 'undefined' === typeof object[ this.node ] )
          throw new Violation( this, object, { value: this.node } );
        return true;
      };
      return this;
    },
    Blank: function () {
      this.__class__ = 'Blank';
      this.validate = function ( value ) {
        if ( 'string' !== typeof value )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_string } );
        if ( '' !== value.replace( /^\s+/g, '' ).replace( /\s+$/g, '' ) )
          throw new Violation( this, value );
        return true;
      };
      return this;
    },
    Callback: function ( fn ) {
      this.__class__ = 'Callback';
      this.arguments = Array.prototype.slice.call( arguments );
      if ( 1 === this.arguments.length )
        this.arguments = [];
      else
        this.arguments.splice( 0, 1 );
      if ( 'function' !== typeof fn )
        throw new Error( 'Callback must be instanciated with a function' );
      this.fn = fn;
      this.validate = function ( value ) {
        var result = this.fn.apply( this, [ value ].concat( this.arguments ) );
        if ( true !== result )
          throw new Violation( this, value, { result: result } );
        return true;
      };
      return this;
    },
    Choice: function ( list ) {
      this.__class__ = 'Choice';
      if ( !_isArray( list ) && 'function' !== typeof list )
        throw new Error( 'Choice must be instanciated with an array or a function' );
      this.list = list;
      this.validate = function ( value ) {
        var list = 'function' === typeof this.list ? this.list() : this.list;
        for ( var i = 0; i < list.length; i++ )
          if ( value === list[ i ] )
            return true;
        throw new Violation( this, value, { choices: list } );
      };
      return this;
    },
    Collection: function ( assertOrConstraint ) {
      this.__class__ = 'Collection';
      this.constraint = 'undefined' !== typeof assertOrConstraint ? (assertOrConstraint instanceof Assert ? assertOrConstraint : new Constraint( assertOrConstraint )) : false;
      this.validate = function ( collection, group ) {
        var result, validator = new Validator(), count = 0, failures = {}, groups = this.groups.length ? this.groups : group;
        if ( !_isArray( collection ) )
          throw new Violation( this, collection, { value: Validator.errorCode.must_be_an_array } );
        for ( var i = 0; i < collection.length; i++ ) {
          result = this.constraint ?
            validator.validate( collection[ i ], this.constraint, groups ) :
            validator.validate( collection[ i ], groups );
          if ( !_isEmptyObject( result ) )
            failures[ count ] = result;
          count++;
        }
        return !_isEmptyObject( failures ) ? failures : true;
      };
      return this;
    },
    Count: function ( count ) {
      this.__class__ = 'Count';
      this.count = count;
      this.validate = function ( array ) {
        if ( !_isArray( array ) )
          throw new Violation( this, array, { value: Validator.errorCode.must_be_an_array } );
        var count = 'function' === typeof this.count ? this.count( array ) : this.count;
        if ( isNaN( Number( count ) ) )
          throw new Error( 'Count must be a valid interger', count );
        if ( count !== array.length )
          throw new Violation( this, array, { count: count } );
        return true;
      };
      return this;
    },
    Email: function () {
      this.__class__ = 'Email';
      this.validate = function ( value ) {
        var regExp = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
        if ( 'string' !== typeof value )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_string } );
        if ( !regExp.test( value ) )
          throw new Violation( this, value );
        return true;
      };
      return this;
    },
    EqualTo: function ( reference ) {
      this.__class__ = 'EqualTo';
      if ( 'undefined' === typeof reference )
        throw new Error( 'EqualTo must be instanciated with a value or a function' );
      this.reference = reference;
      this.validate = function ( value ) {
        var reference = 'function' === typeof this.reference ? this.reference( value ) : this.reference;
        if ( reference !== value )
          throw new Violation( this, value, { value: reference } );
        return true;
      };
      return this;
    },
    GreaterThan: function ( threshold ) {
      this.__class__ = 'GreaterThan';
      if ( 'undefined' === typeof threshold )
        throw new Error( 'Should give a threshold value' );
      this.threshold = threshold;
      this.validate = function ( value ) {
        if ( '' === value || isNaN( Number( value ) ) )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_number } );
        if ( this.threshold >= value )
          throw new Violation( this, value, { threshold: this.threshold } );
        return true;
      };
      return this;
    },
    GreaterThanOrEqual: function ( threshold ) {
      this.__class__ = 'GreaterThanOrEqual';
      if ( 'undefined' === typeof threshold )
        throw new Error( 'Should give a threshold value' );
      this.threshold = threshold;
      this.validate = function ( value ) {
        if ( '' === value || isNaN( Number( value ) ) )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_number } );
        if ( this.threshold > value )
          throw new Violation( this, value, { threshold: this.threshold } );
        return true;
      };
      return this;
    },
    InstanceOf: function ( classRef ) {
      this.__class__ = 'InstanceOf';
      if ( 'undefined' === typeof classRef )
        throw new Error( 'InstanceOf must be instanciated with a value' );
      this.classRef = classRef;
      this.validate = function ( value ) {
        if ( true !== (value instanceof this.classRef) )
          throw new Violation( this, value, { classRef: this.classRef } );
        return true;
      };
      return this;
    },
    Length: function ( boundaries ) {
      this.__class__ = 'Length';
      if ( !boundaries.min && !boundaries.max )
        throw new Error( 'Lenth assert must be instanciated with a { min: x, max: y } object' );
      this.min = boundaries.min;
      this.max = boundaries.max;
      this.validate = function ( value ) {
        if ( 'string' !== typeof value && !_isArray( value ) )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_string_or_array } );
        if ( 'undefined' !== typeof this.min && this.min === this.max && value.length !== this.min )
          throw new Violation( this, value, { min: this.min, max: this.max } );
        if ( 'undefined' !== typeof this.max && value.length > this.max )
          throw new Violation( this, value, { max: this.max } );
        if ( 'undefined' !== typeof this.min && value.length < this.min )
          throw new Violation( this, value, { min: this.min } );
        return true;
      };
      return this;
    },
    LessThan: function ( threshold ) {
      this.__class__ = 'LessThan';
      if ( 'undefined' === typeof threshold )
        throw new Error( 'Should give a threshold value' );
      this.threshold = threshold;
      this.validate = function ( value ) {
        if ( '' === value || isNaN( Number( value ) ) )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_number } );
        if ( this.threshold <= value )
          throw new Violation( this, value, { threshold: this.threshold } );
        return true;
      };
      return this;
    },
    LessThanOrEqual: function ( threshold ) {
      this.__class__ = 'LessThanOrEqual';
      if ( 'undefined' === typeof threshold )
        throw new Error( 'Should give a threshold value' );
      this.threshold = threshold;
      this.validate = function ( value ) {
        if ( '' === value || isNaN( Number( value ) ) )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_number } );
        if ( this.threshold < value )
          throw new Violation( this, value, { threshold: this.threshold } );
        return true;
      };
      return this;
    },
    NotNull: function () {
      this.__class__ = 'NotNull';
      this.validate = function ( value ) {
        if ( null === value || 'undefined' === typeof value )
          throw new Violation( this, value );
        return true;
      };
      return this;
    },
    NotBlank: function () {
      this.__class__ = 'NotBlank';
      this.validate = function ( value ) {
        if ( 'string' !== typeof value )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_string } );
        if ( '' === value.replace( /^\s+/g, '' ).replace( /\s+$/g, '' ) )
          throw new Violation( this, value );
        return true;
      };
      return this;
    },
    Null: function () {
      this.__class__ = 'Null';
      this.validate = function ( value ) {
        if ( null !== value )
          throw new Violation( this, value );
        return true;
      };
      return this;
    },
    Range: function ( min, max ) {
      this.__class__ = 'Range';
      if ( 'undefined' === typeof min || 'undefined' === typeof max )
        throw new Error( 'Range assert expects min and max values' );
      this.min = min;
      this.max = max;
      this.validate = function ( value ) {
          try {
            // validate strings and objects with their Length
            if ( ( 'string' === typeof value && isNaN( Number( value ) ) ) || _isArray( value ) )
              new Assert().Length( { min: this.min, max: this.max } ).validate( value );
            // validate numbers with their value
            else
              new Assert().GreaterThanOrEqual( this.min ).validate( value ) && new Assert().LessThanOrEqual( this.max ).validate( value );
            return true;
          } catch ( violation ) {
            throw new Violation( this, value, violation.violation );
          }
        return true;
      };
      return this;
    },
    Regexp: function ( regexp, flag ) {
      this.__class__ = 'Regexp';
      if ( 'undefined' === typeof regexp )
        throw new Error( 'You must give a regexp' );
      this.regexp = regexp;
      this.flag = flag || '';
      this.validate = function ( value ) {
        if ( 'string' !== typeof value )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_string } );
        if ( !new RegExp( this.regexp, this.flag ).test( value ) )
          throw new Violation( this, value, { regexp: this.regexp, flag: this.flag } );
        return true;
      };
      return this;
    },
    Required: function () {
      this.__class__ = 'Required';
      this.validate = function ( value ) {
        if ( 'undefined' === typeof value )
          throw new Violation( this, value );
        try {
          if ( 'string' === typeof value )
            new Assert().NotNull().validate( value ) && new Assert().NotBlank().validate( value );
          else if ( true === _isArray( value ) )
            new Assert().Length( { min: 1 } ).validate( value );
        } catch ( violation ) {
          throw new Violation( this, value );
        }
        return true;
      };
      return this;
    },
    // Unique() or Unique ( { key: foo } )
    Unique: function ( object ) {
      this.__class__ = 'Unique';
      if ( 'object' === typeof object )
        this.key = object.key;
      this.validate = function ( array ) {
        var value, store = [];
        if ( !_isArray( array ) )
          throw new Violation( this, array, { value: Validator.errorCode.must_be_an_array } );
        for ( var i = 0; i < array.length; i++ ) {
          value = 'object' === typeof array[ i ] ? array[ i ][ this.key ] : array[ i ];
          if ( 'undefined' === typeof value )
            continue;
          if ( -1 !== store.indexOf( value ) )
            throw new Violation( this, array, { value: value } );
          store.push( value );
        }
        return true;
      };
      return this;
    }
  };
  // expose to the world these awesome classes
  exports.Assert = Assert;
  exports.Validator = Validator;
  exports.Violation = Violation;
  exports.Constraint = Constraint;
  /**
  * Some useful object prototypes / functions here
  */
  // IE8<= compatibility
  // https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
  if (!Array.prototype.indexOf)
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
        "use strict";
        if (this === null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n !== 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
  // Test if object is empty, useful for Constraint violations check
  var _isEmptyObject = function ( obj ) {
    for ( var property in obj )
      return false;
    return true;
  };
  var _isArray = function ( obj ) {
    return Object.prototype.toString.call( obj ) === '[object Array]';
  };
  // AMD export
  if ( typeof define === 'function' && define.amd ) {
    define( 'vendors/validator.js/dist/validator',[],function() {
      return exports;
    } );
  // commonjs export
  } else if ( typeof module !== 'undefined' && module.exports ) {
    module.exports = exports;
  // browser
  } else {
    window[ 'undefined' !== typeof validatorjs_ns ? validatorjs_ns : 'Validator' ] = exports;
  }

  return exports;
} )( );

  // This is needed for Browserify usage that requires Validator.js through module.exports
  Validator = 'undefined' !== typeof Validator ? Validator : ('undefined' !== typeof module ? module.exports : null);
  var ParsleyValidator = function (validators, catalog) {
    this.__class__ = 'ParsleyValidator';
    this.Validator = Validator;
    // Default Parsley locale is en
    this.locale = 'en';
    this.init(validators || {}, catalog || {});
  };
  ParsleyValidator.prototype = {
    init: function (validators, catalog) {
      this.catalog = catalog;
      // Copy prototype's validators:
      this.validators = $.extend({}, this.validators);
      for (var name in validators)
        this.addValidator(name, validators[name].fn, validators[name].priority, validators[name].requirementsTransformer);
      window.Parsley.trigger('parsley:validator:init');
    },
    // Set new messages locale if we have dictionary loaded in ParsleyConfig.i18n
    setLocale: function (locale) {
      if ('undefined' === typeof this.catalog[locale])
        throw new Error(locale + ' is not available in the catalog');
      this.locale = locale;
      return this;
    },
    // Add a new messages catalog for a given locale. Set locale for this catalog if set === `true`
    addCatalog: function (locale, messages, set) {
      if ('object' === typeof messages)
        this.catalog[locale] = messages;
      if (true === set)
        return this.setLocale(locale);
      return this;
    },
    // Add a specific message for a given constraint in a given locale
    addMessage: function (locale, name, message) {
      if ('undefined' === typeof this.catalog[locale])
        this.catalog[locale] = {};
      this.catalog[locale][name.toLowerCase()] = message;
      return this;
    },
    validate: function (value, constraints, priority) {
      return new this.Validator.Validator().validate.apply(new Validator.Validator(), arguments);
    },
    // Add a new validator
    addValidator: function (name, fn, priority, requirementsTransformer) {
      if (this.validators[name])
        ParsleyUtils.warn('Validator "' + name + '" is already defined.');
      else if (ParsleyDefaults.hasOwnProperty(name)) {
        ParsleyUtils.warn('"' + name + '" is a restricted keyword and is not a valid validator name.');
        return;
      };
      return this._setValidator(name, fn, priority, requirementsTransformer);
    },
    updateValidator: function (name, fn, priority, requirementsTransformer) {
      if (!this.validators[name]) {
        ParsleyUtils.warn('Validator "' + name + '" is not already defined.');
        return this.addValidator(name, fn, priority, requirementsTransformer);
      }
      return this._setValidator(name, fn, priority, requirementsTransformer);
    },
    removeValidator: function (name) {
      if (!this.validators[name])
        ParsleyUtils.warn('Validator "' + name + '" is not defined.');
      delete this.validators[name];
      return this;
    },
    _setValidator: function (name, fn, priority, requirementsTransformer) {
      this.validators[name] = function (requirements) {
        return $.extend(new Validator.Assert().Callback(fn, requirements), {
          priority: priority,
          requirementsTransformer: requirementsTransformer
        });
      };
      return this;
    },
    getErrorMessage: function (constraint) {
      var message;
      // Type constraints are a bit different, we have to match their requirements too to find right error message
      if ('type' === constraint.name) {
        var typeMessages = this.catalog[this.locale][constraint.name] || {};
        message = typeMessages[constraint.requirements];
      } else
        message = this.formatMessage(this.catalog[this.locale][constraint.name], constraint.requirements);
      return message || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage;
    },
    // Kind of light `sprintf()` implementation
    formatMessage: function (string, parameters) {
      if ('object' === typeof parameters) {
        for (var i in parameters)
          string = this.formatMessage(string, parameters[i]);
        return string;
      }
      return 'string' === typeof string ? string.replace(new RegExp('%s', 'i'), parameters) : '';
    },
    // Here is the Parsley default validators list.
    // This is basically Validatorjs validators, with different API for some of them
    // and a Parsley priority set
    validators: {
      notblank: function () {
        return $.extend(new Validator.Assert().NotBlank(), { priority: 2 });
      },
      required: function () {
        return $.extend(new Validator.Assert().Required(), { priority: 512 });
      },
      type: function (type) {
        var assert;
        switch (type) {
          case 'email':
            assert = new Validator.Assert().Email();
            break;
          // range type just ensure we have a number here
          case 'range':
          case 'number':
            assert = new Validator.Assert().Regexp('^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$');
            break;
          case 'integer':
            assert = new Validator.Assert().Regexp('^-?\\d+$');
            break;
          case 'digits':
            assert = new Validator.Assert().Regexp('^\\d+$');
            break;
          case 'alphanum':
            assert = new Validator.Assert().Regexp('^\\w+$', 'i');
            break;
          case 'url':
            // Thanks to https://gist.github.com/dperini/729294
            // Voted best validator in https://mathiasbynens.be/demo/url-regex
            // Modified to make scheme optional and allow local IPs
            assert = new Validator.Assert().Regexp(
              "^" +
                // protocol identifier
                "(?:(?:https?|ftp)://)?" + // ** mod: make scheme optional
                // user:pass authentication
                "(?:\\S+(?::\\S*)?@)?" +
                "(?:" +
                  // IP address exclusion
                  // private & local networks
                  // "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +   // ** mod: allow local networks
                  // "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +  // ** mod: allow local networks
                  // "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +  // ** mod: allow local networks
                  // IP address dotted notation octets
                  // excludes loopback network 0.0.0.0
                  // excludes reserved space >= 224.0.0.0
                  // excludes network & broacast addresses
                  // (first & last IP address of each class)
                  "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
                  "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
                  "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
                "|" +
                  // host name
                  "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
                  // domain name
                  "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
                  // TLD identifier
                  "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
                ")" +
                // port number
                "(?::\\d{2,5})?" +
                // resource path
                "(?:/\\S*)?" +
              "$", 'i');
            break;
          default:
            throw new Error('validator type `' + type + '` is not supported');
        }
        return $.extend(assert, { priority: 256 });
      },
      pattern: function (regexp) {
        var flags = '';
        // Test if RegExp is literal, if not, nothing to be done, otherwise, we need to isolate flags and pattern
        if (!!(/^\/.*\/(?:[gimy]*)$/.test(regexp))) {
          // Replace the regexp literal string with the first match group: ([gimy]*)
          // If no flag is present, this will be a blank string
          flags = regexp.replace(/.*\/([gimy]*)$/, '$1');
          // Again, replace the regexp literal string with the first match group:
          // everything excluding the opening and closing slashes and the flags
          regexp = regexp.replace(new RegExp('^/(.*?)/' + flags + '$'), '$1');
        }
        return $.extend(new Validator.Assert().Regexp(regexp, flags), { priority: 64 });
      },
      minlength: function (value) {
        return $.extend(new Validator.Assert().Length({ min: value }), {
          priority: 30,
          requirementsTransformer: function () {
            return 'string' === typeof value && !isNaN(value) ? parseInt(value, 10) : value;
          }
        });
      },
      maxlength: function (value) {
        return $.extend(new Validator.Assert().Length({ max: value }), {
          priority: 30,
          requirementsTransformer: function () {
            return 'string' === typeof value && !isNaN(value) ? parseInt(value, 10) : value;
          }
        });
      },
      length: function (array) {
        return $.extend(new Validator.Assert().Length({ min: array[0], max: array[1] }), { priority: 32 });
      },
      mincheck: function (length) {
        return this.minlength(length);
      },
      maxcheck: function (length) {
        return this.maxlength(length);
      },
      check: function (array) {
        return this.length(array);
      },
      min: function (value) {
        return $.extend(new Validator.Assert().GreaterThanOrEqual(value), {
          priority: 30,
          requirementsTransformer: function () {
            return 'string' === typeof value && !isNaN(value) ? parseInt(value, 10) : value;
          }
        });
      },
      max: function (value) {
        return $.extend(new Validator.Assert().LessThanOrEqual(value), {
          priority: 30,
          requirementsTransformer: function () {
            return 'string' === typeof value && !isNaN(value) ? parseInt(value, 10) : value;
          }
        });
      },
      range: function (array) {
        return $.extend(new Validator.Assert().Range(array[0], array[1]), {
          priority: 32,
          requirementsTransformer: function () {
            for (var i = 0; i < array.length; i++)
              array[i] = 'string' === typeof array[i] && !isNaN(array[i]) ? parseInt(array[i], 10) : array[i];
            return array;
          }
        });
      },
      equalto: function (value) {
        return $.extend(new Validator.Assert().EqualTo(value), {
          priority: 256,
          requirementsTransformer: function () {
            return $(value).length ? $(value).val() : value;
          }
        });
      }
    }
  };

  var ParsleyUI = function (options) {
    this.__class__ = 'ParsleyUI';
  };
  ParsleyUI.prototype = {
    listen: function () {
      var that = this;
      window.Parsley
      .on('form:init',       function () { that.setupForm (this); } )
      .on('field:init',      function () { that.setupField(this); } )
      .on('field:validated', function () { that.reflow    (this); } )
      .on('form:validated',  function () { that.focus     (this); } )
      .on('field:reset',     function () { that.reset     (this); } )
      .on('form:destroy',    function () { that.destroy   (this); } )
      .on('field:destroy',   function () { that.destroy   (this); } );
      return this;
    },
    reflow: function (fieldInstance) {
      // If this field has not an active UI (case for multiples) don't bother doing something
      if ('undefined' === typeof fieldInstance._ui || false === fieldInstance._ui.active)
        return;
      // Diff between two validation results
      var diff = this._diff(fieldInstance.validationResult, fieldInstance._ui.lastValidationResult);
      // Then store current validation result for next reflow
      fieldInstance._ui.lastValidationResult = fieldInstance.validationResult;
      // Field have been validated at least once if here. Useful for binded key events...
      fieldInstance._ui.validatedOnce = true;
      // Handle valid / invalid / none field class
      this.manageStatusClass(fieldInstance);
      // Add, remove, updated errors messages
      this.manageErrorsMessages(fieldInstance, diff);
      // Triggers impl
      this.actualizeTriggers(fieldInstance);
      // If field is not valid for the first time, bind keyup trigger to ease UX and quickly inform user
      if ((diff.kept.length || diff.added.length) && true !== fieldInstance._ui.failedOnce)
        this.manageFailingFieldTrigger(fieldInstance);
    },
    // Returns an array of field's error message(s)
    getErrorsMessages: function (fieldInstance) {
      // No error message, field is valid
      if (true === fieldInstance.validationResult)
        return [];
      var messages = [];
      for (var i = 0; i < fieldInstance.validationResult.length; i++)
        messages.push(this._getErrorMessage(fieldInstance, fieldInstance.validationResult[i].assert));
      return messages;
    },
    manageStatusClass: function (fieldInstance) {
      if (fieldInstance.hasConstraints() && fieldInstance.needsValidation() && true === fieldInstance.validationResult)
        this._successClass(fieldInstance);
      else if (fieldInstance.validationResult.length > 0)
        this._errorClass(fieldInstance);
      else
        this._resetClass(fieldInstance);
    },
    manageErrorsMessages: function (fieldInstance, diff) {
      if ('undefined' !== typeof fieldInstance.options.errorsMessagesDisabled)
        return;
      // Case where we have errorMessage option that configure an unique field error message, regardless failing validators
      if ('undefined' !== typeof fieldInstance.options.errorMessage) {
        if ((diff.added.length || diff.kept.length)) {
          this._insertErrorWrapper(fieldInstance);
          if (0 === fieldInstance._ui.$errorsWrapper.find('.parsley-custom-error-message').length)
            fieldInstance._ui.$errorsWrapper
              .append(
                $(fieldInstance.options.errorTemplate)
                .addClass('parsley-custom-error-message')
              );
          return fieldInstance._ui.$errorsWrapper
            .addClass('filled')
            .find('.parsley-custom-error-message')
            .html(fieldInstance.options.errorMessage);
        }
        return fieldInstance._ui.$errorsWrapper
          .removeClass('filled')
          .find('.parsley-custom-error-message')
          .remove();
      }
      // Show, hide, update failing constraints messages
      for (var i = 0; i < diff.removed.length; i++)
        this.removeError(fieldInstance, diff.removed[i].assert.name, true);
      for (i = 0; i < diff.added.length; i++)
        this.addError(fieldInstance, diff.added[i].assert.name, undefined, diff.added[i].assert, true);
      for (i = 0; i < diff.kept.length; i++)
        this.updateError(fieldInstance, diff.kept[i].assert.name, undefined, diff.kept[i].assert, true);
    },
    // TODO: strange API here, intuitive for manual usage with addError(pslyInstance, 'foo', 'bar')
    // but a little bit complex for above internal usage, with forced undefined parameter...
    addError: function (fieldInstance, name, message, assert, doNotUpdateClass) {
      this._insertErrorWrapper(fieldInstance);
      fieldInstance._ui.$errorsWrapper
        .addClass('filled')
        .append(
          $(fieldInstance.options.errorTemplate)
          .addClass('parsley-' + name)
          .html(message || this._getErrorMessage(fieldInstance, assert))
        );
      if (true !== doNotUpdateClass)
        this._errorClass(fieldInstance);
    },
    // Same as above
    updateError: function (fieldInstance, name, message, assert, doNotUpdateClass) {
      fieldInstance._ui.$errorsWrapper
        .addClass('filled')
        .find('.parsley-' + name)
        .html(message || this._getErrorMessage(fieldInstance, assert));
      if (true !== doNotUpdateClass)
        this._errorClass(fieldInstance);
    },
    // Same as above twice
    removeError: function (fieldInstance, name, doNotUpdateClass) {
      fieldInstance._ui.$errorsWrapper
        .removeClass('filled')
        .find('.parsley-' + name)
        .remove();
      // edge case possible here: remove a standard Parsley error that is still failing in fieldInstance.validationResult
      // but highly improbable cuz' manually removing a well Parsley handled error makes no sense.
      if (true !== doNotUpdateClass)
        this.manageStatusClass(fieldInstance);
    },
    focus: function (formInstance) {
      formInstance._focusedField = null;
      if (true === formInstance.validationResult || 'none' === formInstance.options.focus)
        return null;
      for (var i = 0; i < formInstance.fields.length; i++) {
        var field = formInstance.fields[i];
        if (true !== field.validationResult && field.validationResult.length > 0 && 'undefined' === typeof field.options.noFocus) {
          formInstance._focusedField = field.$element;
          if ('first' === formInstance.options.focus)
            break;
        }
      }
      if (null === formInstance._focusedField)
        return null;
      return formInstance._focusedField.focus();
    },
    _getErrorMessage: function (fieldInstance, constraint) {
      var customConstraintErrorMessage = constraint.name + 'Message';
      if ('undefined' !== typeof fieldInstance.options[customConstraintErrorMessage])
        return window.ParsleyValidator.formatMessage(fieldInstance.options[customConstraintErrorMessage], constraint.requirements);
      return window.ParsleyValidator.getErrorMessage(constraint);
    },
    _diff: function (newResult, oldResult, deep) {
      var
        added = [],
        kept = [];
      for (var i = 0; i < newResult.length; i++) {
        var found = false;
        for (var j = 0; j < oldResult.length; j++)
          if (newResult[i].assert.name === oldResult[j].assert.name) {
            found = true;
            break;
          }
        if (found)
          kept.push(newResult[i]);
        else
          added.push(newResult[i]);
      }
      return {
        kept: kept,
        added: added,
        removed: !deep ? this._diff(oldResult, newResult, true).added : []
      };
    },
    setupForm: function (formInstance) {
      formInstance.$element.on('submit.Parsley', false, $.proxy(formInstance.onSubmitValidate, formInstance));
      // UI could be disabled
      if (false === formInstance.options.uiEnabled)
        return;
      formInstance.$element.attr('novalidate', '');
    },
    setupField: function (fieldInstance) {
      var _ui = { active: false };
      // UI could be disabled
      if (false === fieldInstance.options.uiEnabled)
        return;
      _ui.active = true;
      // Give field its Parsley id in DOM
      fieldInstance.$element.attr(fieldInstance.options.namespace + 'id', fieldInstance.__id__);
      /** Generate important UI elements and store them in fieldInstance **/
      // $errorClassHandler is the $element that woul have parsley-error and parsley-success classes
      _ui.$errorClassHandler = this._manageClassHandler(fieldInstance);
      // $errorsWrapper is a div that would contain the various field errors, it will be appended into $errorsContainer
      _ui.errorsWrapperId = 'parsley-id-' + (fieldInstance.options.multiple ? 'multiple-' + fieldInstance.options.multiple : fieldInstance.__id__);
      _ui.$errorsWrapper = $(fieldInstance.options.errorsWrapper).attr('id', _ui.errorsWrapperId);
      // ValidationResult UI storage to detect what have changed bwt two validations, and update DOM accordingly
      _ui.lastValidationResult = [];
      _ui.validatedOnce = false;
      _ui.validationInformationVisible = false;
      // Store it in fieldInstance for later
      fieldInstance._ui = _ui;
      // Bind triggers first time
      this.actualizeTriggers(fieldInstance);
    },
    // Determine which element will have `parsley-error` and `parsley-success` classes
    _manageClassHandler: function (fieldInstance) {
      // An element selector could be passed through DOM with `data-parsley-class-handler=#foo`
      if ('string' === typeof fieldInstance.options.classHandler && $(fieldInstance.options.classHandler).length)
        return $(fieldInstance.options.classHandler);
      // Class handled could also be determined by function given in Parsley options
      var $handler = fieldInstance.options.classHandler(fieldInstance);
      // If this function returned a valid existing DOM element, go for it
      if ('undefined' !== typeof $handler && $handler.length)
        return $handler;
      // Otherwise, if simple element (input, texatrea, select...) it will perfectly host the classes
      if (!fieldInstance.options.multiple || fieldInstance.$element.is('select'))
        return fieldInstance.$element;
      // But if multiple element (radio, checkbox), that would be their parent
      return fieldInstance.$element.parent();
    },
    _insertErrorWrapper: function (fieldInstance) {
      var $errorsContainer;
      // Nothing to do if already inserted
      if (0 !== fieldInstance._ui.$errorsWrapper.parent().length)
        return fieldInstance._ui.$errorsWrapper.parent();
      if ('string' === typeof fieldInstance.options.errorsContainer) {
        if ($(fieldInstance.options.errorsContainer).length)
          return $(fieldInstance.options.errorsContainer).append(fieldInstance._ui.$errorsWrapper);
        else
          ParsleyUtils.warn('The errors container `' + fieldInstance.options.errorsContainer + '` does not exist in DOM');
      }
      else if ('function' === typeof fieldInstance.options.errorsContainer)
        $errorsContainer = fieldInstance.options.errorsContainer(fieldInstance);
      if ('undefined' !== typeof $errorsContainer && $errorsContainer.length)
        return $errorsContainer.append(fieldInstance._ui.$errorsWrapper);
      var $from = fieldInstance.$element;
      if (fieldInstance.options.multiple)
        $from = $from.parent();
      return $from.after(fieldInstance._ui.$errorsWrapper);
    },
    actualizeTriggers: function (fieldInstance) {
      var $toBind = fieldInstance.$element;
      if (fieldInstance.options.multiple)
        $toBind = $('[' + fieldInstance.options.namespace + 'multiple="' + fieldInstance.options.multiple + '"]');
      // Remove Parsley events already binded on this field
      $toBind.off('.Parsley');
      // If no trigger is set, all good
      if (false === fieldInstance.options.trigger)
        return;
      var triggers = fieldInstance.options.trigger.replace(/^\s+/g , '').replace(/\s+$/g , '');
      if ('' === triggers)
        return;
      // Bind fieldInstance.eventValidate if exists (for parsley.ajax for example), ParsleyUI.eventValidate otherwise
      $toBind.on(
        triggers.split(' ').join('.Parsley ') + '.Parsley',
        $.proxy('function' === typeof fieldInstance.eventValidate ? fieldInstance.eventValidate : this.eventValidate, fieldInstance));
    },
    // Called through $.proxy with fieldInstance. `this` context is ParsleyField
    eventValidate: function (event) {
      // For keyup, keypress, keydown... events that could be a little bit obstrusive
      // do not validate if val length < min threshold on first validation. Once field have been validated once and info
      // about success or failure have been displayed, always validate with this trigger to reflect every yalidation change.
      if (new RegExp('key').test(event.type))
        if (!this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold)
          return;
      this._ui.validatedOnce = true;
      this.validate();
    },
    manageFailingFieldTrigger: function (fieldInstance) {
      fieldInstance._ui.failedOnce = true;
      // Radio and checkboxes fields must bind every field multiple
      if (fieldInstance.options.multiple)
        $('[' + fieldInstance.options.namespace + 'multiple="' + fieldInstance.options.multiple + '"]').each(function () {
          if (!new RegExp('change', 'i').test($(this).parsley().options.trigger || ''))
            return $(this).on('change.ParsleyFailedOnce', false, $.proxy(fieldInstance.validate, fieldInstance));
        });
      // Select case
      if (fieldInstance.$element.is('select'))
        if (!new RegExp('change', 'i').test(fieldInstance.options.trigger || ''))
          return fieldInstance.$element.on('change.ParsleyFailedOnce', false, $.proxy(fieldInstance.validate, fieldInstance));
      // All other inputs fields
      if (!new RegExp('keyup', 'i').test(fieldInstance.options.trigger || ''))
        return fieldInstance.$element.on('keyup.ParsleyFailedOnce', false, $.proxy(fieldInstance.validate, fieldInstance));
    },
    reset: function (parsleyInstance) {
      // Reset all event listeners
      this.actualizeTriggers(parsleyInstance);
      parsleyInstance.$element.off('.ParsleyFailedOnce');
      // Nothing to do if UI never initialized for this field
      if ('undefined' === typeof parsleyInstance._ui)
        return;
      if ('ParsleyForm' === parsleyInstance.__class__)
        return;
      // Reset all errors' li
      parsleyInstance._ui.$errorsWrapper
        .removeClass('filled')
        .children()
        .remove();
      // Reset validation class
      this._resetClass(parsleyInstance);
      // Reset validation flags and last validation result
      parsleyInstance._ui.validatedOnce = false;
      parsleyInstance._ui.lastValidationResult = [];
      parsleyInstance._ui.validationInformationVisible = false;
      parsleyInstance._ui.failedOnce = false;
    },
    destroy: function (parsleyInstance) {
      this.reset(parsleyInstance);
      if ('ParsleyForm' === parsleyInstance.__class__)
        return;
      if ('undefined' !== typeof parsleyInstance._ui)
        parsleyInstance._ui.$errorsWrapper.remove();
      delete parsleyInstance._ui;
    },
    _successClass: function (fieldInstance) {
      fieldInstance._ui.validationInformationVisible = true;
      fieldInstance._ui.$errorClassHandler.removeClass(fieldInstance.options.errorClass).addClass(fieldInstance.options.successClass);
    },
    _errorClass: function (fieldInstance) {
      fieldInstance._ui.validationInformationVisible = true;
      fieldInstance._ui.$errorClassHandler.removeClass(fieldInstance.options.successClass).addClass(fieldInstance.options.errorClass);
    },
    _resetClass: function (fieldInstance) {
      fieldInstance._ui.$errorClassHandler.removeClass(fieldInstance.options.successClass).removeClass(fieldInstance.options.errorClass);
    }
  };

  var ParsleyForm = function (element, domOptions, options) {
    this.__class__ = 'ParsleyForm';
    this.__id__ = ParsleyUtils.generateID();
    this.$element = $(element);
    this.domOptions = domOptions;
    this.options = options;
    this.parent = window.Parsley;
    this.fields = [];
    this.validationResult = null;
  };
  ParsleyForm.prototype = {
    onSubmitValidate: function (event) {
      this.validate(undefined, undefined, event);
      // prevent form submission if validation fails
      if ((false === this.validationResult || !this._trigger('submit')) && event instanceof $.Event) {
        event.stopImmediatePropagation();
        event.preventDefault();
      }
      return this;
    },
    // @returns boolean
    validate: function (group, force, event) {
      this.submitEvent = event;
      this.validationResult = true;
      var fieldValidationResult = [];
      // fire validate event to eventually modify things before very validation
      this._trigger('validate');
      // Refresh form DOM options and form's fields that could have changed
      this._refreshFields();
      this._withoutReactualizingFormOptions(function(){
        // loop through fields to validate them one by one
        for (var i = 0; i < this.fields.length; i++) {
          // do not validate a field if not the same as given validation group
          if (group && !this._isFieldInGroup(this.fields[i], group))
            continue;
          fieldValidationResult = this.fields[i].validate(force);
          if (true !== fieldValidationResult && fieldValidationResult.length > 0 && this.validationResult)
            this.validationResult = false;
        }
      });
      this._trigger(this.validationResult ? 'success' : 'error');
      this._trigger('validated');
      return this.validationResult;
    },
    // Iterate over refreshed fields, and stop on first failure
    isValid: function (group, force) {
      this._refreshFields();
      return this._withoutReactualizingFormOptions(function(){
        for (var i = 0; i < this.fields.length; i++) {
          // do not validate a field if not the same as given validation group
          if (group && !this._isFieldInGroup(this.fields[i], group))
            continue;
          if (false === this.fields[i].isValid(force))
            return false;
        }
        return true;
      });
    },
    _isFieldInGroup: function (field, group) {
      if($.isArray(field.options.group))
        return -1 !== $.inArray(group, field.options.group);
      return field.options.group === group;
    },
    _refreshFields: function () {
      return this.actualizeOptions()._bindFields();
    },
    _bindFields: function () {
      var self = this,
        oldFields = this.fields;
      this.fields = [];
      this.fieldsMappedById = {};
      this._withoutReactualizingFormOptions(function(){
        this.$element
        .find(this.options.inputs)
        .not(this.options.excluded)
        .each(function () {
          var fieldInstance = new Parsley.Factory(this, {}, self);
          // Only add valid and not excluded `ParsleyField` and `ParsleyFieldMultiple` children
          if (('ParsleyField' === fieldInstance.__class__ || 'ParsleyFieldMultiple' === fieldInstance.__class__) && (true !== fieldInstance.options.excluded))
            if ('undefined' === typeof self.fieldsMappedById[fieldInstance.__class__ + '-' + fieldInstance.__id__]) {
              self.fieldsMappedById[fieldInstance.__class__ + '-' + fieldInstance.__id__] = fieldInstance;
              self.fields.push(fieldInstance);
            }
        });
        $(oldFields).not(self.fields).each(function () {
          this._trigger('reset');
        });
      });
      return this;
    },
    // Internal only.
    // Looping on a form's fields to do validation or similar
    // will trigger reactualizing options on all of them, which
    // in turn will reactualize the form's options.
    // To avoid calling actualizeOptions so many times on the form
    // for nothing, _withoutReactualizingFormOptions temporarily disables
    // the method actualizeOptions on this form while `fn` is called.
    _withoutReactualizingFormOptions: function (fn) {
      var oldActualizeOptions = this.actualizeOptions;
      this.actualizeOptions = function() { return this };
      var result = fn.call(this); // Keep the current `this`.
      this.actualizeOptions = oldActualizeOptions;
      return result;
    },
    // Internal only.
    // Shortcut to trigger an event
    // Returns true iff event is not interrupted and default not prevented.
    _trigger: function (eventName) {
      eventName = 'form:' + eventName;
      return this.trigger.apply(this, arguments);
    }
  };

  var ConstraintFactory = function (parsleyField, name, requirements, priority, isDomConstraint) {
    var assert = {};
    if (!new RegExp('ParsleyField').test(parsleyField.__class__))
      throw new Error('ParsleyField or ParsleyFieldMultiple instance expected');
    if ('function' === typeof window.ParsleyValidator.validators[name])
      assert = window.ParsleyValidator.validators[name](requirements);
    if ('Assert' !== assert.__parentClass__)
      throw new Error('Valid validator expected');
    var getPriority = function () {
      if ('undefined' !== typeof parsleyField.options[name + 'Priority'])
        return parsleyField.options[name + 'Priority'];
      return assert.priority || 2;
    };
    priority = priority || getPriority();
    // If validator have a requirementsTransformer, execute it
    if ('function' === typeof assert.requirementsTransformer) {
      requirements = assert.requirementsTransformer();
      // rebuild assert with new requirements
      assert = window.ParsleyValidator.validators[name](requirements);
    }
    return $.extend(assert, {
      name: name,
      requirements: requirements,
      priority: priority,
      groups: [priority],
      isDomConstraint: isDomConstraint || ParsleyUtils.checkAttr(parsleyField.$element, parsleyField.options.namespace, name)
    });
  };

  var ParsleyField = function (field, domOptions, options, parsleyFormInstance) {
    this.__class__ = 'ParsleyField';
    this.__id__ = ParsleyUtils.generateID();
    this.$element = $(field);
    // Set parent if we have one
    if ('undefined' !== typeof parsleyFormInstance) {
      this.parent = parsleyFormInstance;
    }
    this.options = options;
    this.domOptions = domOptions;
    // Initialize some properties
    this.constraints = [];
    this.constraintsByName = {};
    this.validationResult = [];
    // Bind constraints
    this._bindConstraints();
  };
  ParsleyField.prototype = {
    // # Public API
    // Validate field and trigger some events for mainly `ParsleyUI`
    // @returns validationResult:
    //  - `true` if field valid
    //  - `[Violation, [Violation...]]` if there were validation errors
    validate: function (force) {
      this.value = this.getValue();
      // Field Validate event. `this.value` could be altered for custom needs
      this._trigger('validate');
      this._trigger(this.isValid(force, this.value) ? 'success' : 'error');
      // Field validated event. `this.validationResult` could be altered for custom needs too
      this._trigger('validated');
      return this.validationResult;
    },
    hasConstraints: function () {
      return 0 !== this.constraints.length;
    },
    // An empty optional field does not need validation
    needsValidation: function (value) {
      if ('undefined' === typeof value)
        value = this.getValue();
      // If a field is empty and not required, it is valid
      // Except if `data-parsley-validate-if-empty` explicitely added, useful for some custom validators
      if (!value.length && !this._isRequired() && 'undefined' === typeof this.options.validateIfEmpty)
        return false;
      return true;
    },
    // Just validate field. Do not trigger any event
    //  - `false` if there are constraints and at least one of them failed
    //  - `true` in all other cases
    isValid: function (force, value) {
      // Recompute options and rebind constraints to have latest changes
      this.refreshConstraints();
      this.validationResult = true;
      // A field without constraint is valid
      if (!this.hasConstraints())
        return true;
      // Value could be passed as argument, needed to add more power to 'parsley:field:validate'
      if ('undefined' === typeof value || null === value)
        value = this.getValue();
      if (!this.needsValidation(value) && true !== force)
        return true;
      // If we want to validate field against all constraints, just call Validator and let it do the job
      var priorities = ['Any'];
      if (false !== this.options.priorityEnabled) {
        // Sort priorities to validate more important first
        priorities = this._getConstraintsSortedPriorities();
      }
      // Iterate over priorities one by one, and validate related asserts one by one
      for (var i = 0; i < priorities.length; i++)
        if (true !== (this.validationResult = this.validateThroughValidator(value, this.constraints, priorities[i])))
          return false;
      return true;
    },
    // @returns Parsley field computed value that could be overrided or configured in DOM
    getValue: function () {
      var value;
      // Value could be overriden in DOM or with explicit options
      if ('function' === typeof this.options.value)
        value = this.options.value(this);
      else if ('undefined' !== typeof this.options.value)
        value = this.options.value;
      else
        value = this.$element.val();
      // Handle wrong DOM or configurations
      if ('undefined' === typeof value || null === value)
        return '';
      // Use `data-parsley-trim-value="true"` to auto trim inputs entry
      if (true === this.options.trimValue)
        return value.replace(/^\s+|\s+$/g, '');
      return value;
    },
    // Actualize options that could have change since previous validation
    // Re-bind accordingly constraints (could be some new, removed or updated)
    refreshConstraints: function () {
      return this.actualizeOptions()._bindConstraints();
    },
    /**
    * Add a new constraint to a field
    *
    * @method addConstraint
    * @param {String}   name
    * @param {Mixed}    requirements      optional
    * @param {Number}   priority          optional
    * @param {Boolean}  isDomConstraint   optional
    */
    addConstraint: function (name, requirements, priority, isDomConstraint) {
      if ('function' === typeof window.ParsleyValidator.validators[name]) {
        var constraint = new ConstraintFactory(this, name, requirements, priority, isDomConstraint);
        // if constraint already exist, delete it and push new version
        if ('undefined' !== this.constraintsByName[constraint.name])
          this.removeConstraint(constraint.name);
        this.constraints.push(constraint);
        this.constraintsByName[constraint.name] = constraint;
      }
      return this;
    },
    // Remove a constraint
    removeConstraint: function (name) {
      for (var i = 0; i < this.constraints.length; i++)
        if (name === this.constraints[i].name) {
          this.constraints.splice(i, 1);
          break;
        }
      delete this.constraintsByName[name];
      return this;
    },
    // Update a constraint (Remove + re-add)
    updateConstraint: function (name, parameters, priority) {
      return this.removeConstraint(name)
        .addConstraint(name, parameters, priority);
    },
    // # Internals
    // Internal only.
    // Bind constraints from config + options + DOM
    _bindConstraints: function () {
      var constraints = [], constraintsByName = {};
      // clean all existing DOM constraints to only keep javascript user constraints
      for (var i = 0; i < this.constraints.length; i++)
        if (false === this.constraints[i].isDomConstraint) {
          constraints.push(this.constraints[i]);
          constraintsByName[this.constraints[i].name] = this.constraints[i];
        }
      this.constraints = constraints;
      this.constraintsByName = constraintsByName;
      // then re-add Parsley DOM-API constraints
      for (var name in this.options)
        this.addConstraint(name, this.options[name]);
      // finally, bind special HTML5 constraints
      return this._bindHtml5Constraints();
    },
    // Internal only.
    // Bind specific HTML5 constraints to be HTML5 compliant
    _bindHtml5Constraints: function () {
      // html5 required
      if (this.$element.hasClass('required') || this.$element.attr('required'))
        this.addConstraint('required', true, undefined, true);
      // html5 pattern
      if ('string' === typeof this.$element.attr('pattern'))
        this.addConstraint('pattern', this.$element.attr('pattern'), undefined, true);
      // range
      if ('undefined' !== typeof this.$element.attr('min') && 'undefined' !== typeof this.$element.attr('max'))
        this.addConstraint('range', [this.$element.attr('min'), this.$element.attr('max')], undefined, true);
      // HTML5 min
      else if ('undefined' !== typeof this.$element.attr('min'))
        this.addConstraint('min', this.$element.attr('min'), undefined, true);
      // HTML5 max
      else if ('undefined' !== typeof this.$element.attr('max'))
        this.addConstraint('max', this.$element.attr('max'), undefined, true);

      // length
      if ('undefined' !== typeof this.$element.attr('minlength') && 'undefined' !== typeof this.$element.attr('maxlength'))
        this.addConstraint('length', [this.$element.attr('minlength'), this.$element.attr('maxlength')], undefined, true);
      // HTML5 minlength
      else if ('undefined' !== typeof this.$element.attr('minlength'))
        this.addConstraint('minlength', this.$element.attr('minlength'), undefined, true);
      // HTML5 maxlength
      else if ('undefined' !== typeof this.$element.attr('maxlength'))
        this.addConstraint('maxlength', this.$element.attr('maxlength'), undefined, true);

      // html5 types
      var type = this.$element.attr('type');
      if ('undefined' === typeof type)
        return this;
      // Small special case here for HTML5 number: integer validator if step attribute is undefined or an integer value, number otherwise
      if ('number' === type) {
        if (('undefined' === typeof this.$element.attr('step')) || (0 === parseFloat(this.$element.attr('step')) % 1)) {
          return this.addConstraint('type', 'integer', undefined, true);
        } else {
          return this.addConstraint('type', 'number', undefined, true);
        }
      // Regular other HTML5 supported types
      } else if (/^(email|url|range)$/i.test(type)) {
        return this.addConstraint('type', type, undefined, true);
      }
      return this;
    },
    // Internal only.
    // Field is required if have required constraint without `false` value
    _isRequired: function () {
      if ('undefined' === typeof this.constraintsByName.required)
        return false;
      return false !== this.constraintsByName.required.requirements;
    },
    // Internal only.
    // Shortcut to trigger an event
    _trigger: function (eventName) {
      eventName = 'field:' + eventName;
      return this.trigger.apply(this, arguments);
    },
    // Internal only.
    // Sort constraints by priority DESC
    _getConstraintsSortedPriorities: function () {
      var priorities = [];
      // Create array unique of priorities
      for (var i = 0; i < this.constraints.length; i++)
        if (-1 === priorities.indexOf(this.constraints[i].priority))
          priorities.push(this.constraints[i].priority);
      // Sort them by priority DESC
      priorities.sort(function (a, b) { return b - a; });
      return priorities;
    }
  };

  var ParsleyMultiple = function () {
    this.__class__ = 'ParsleyFieldMultiple';
  };
  ParsleyMultiple.prototype = {
    // Add new `$element` sibling for multiple field
    addElement: function ($element) {
      this.$elements.push($element);
      return this;
    },
    // See `ParsleyField.refreshConstraints()`
    refreshConstraints: function () {
      var fieldConstraints;
      this.constraints = [];
      // Select multiple special treatment
      if (this.$element.is('select')) {
        this.actualizeOptions()._bindConstraints();
        return this;
      }
      // Gather all constraints for each input in the multiple group
      for (var i = 0; i < this.$elements.length; i++) {
        // Check if element have not been dynamically removed since last binding
        if (!$('html').has(this.$elements[i]).length) {
          this.$elements.splice(i, 1);
          continue;
        }
        fieldConstraints = this.$elements[i].data('ParsleyFieldMultiple').refreshConstraints().constraints;
        for (var j = 0; j < fieldConstraints.length; j++)
          this.addConstraint(fieldConstraints[j].name, fieldConstraints[j].requirements, fieldConstraints[j].priority, fieldConstraints[j].isDomConstraint);
      }
      return this;
    },
    // See `ParsleyField.getValue()`
    getValue: function () {
      // Value could be overriden in DOM
      if ('undefined' !== typeof this.options.value)
        return this.options.value;
      // Radio input case
      if (this.$element.is('input[type=radio]'))
        return this._findRelatedMultiple().filter(':checked').val() || '';
      // checkbox input case
      if (this.$element.is('input[type=checkbox]')) {
        var values = [];
        this._findRelatedMultiple().filter(':checked').each(function () {
          values.push($(this).val());
        });
        return values;
      }
      // Select multiple case
      if (this.$element.is('select') && null === this.$element.val())
        return [];
      // Default case that should never happen
      return this.$element.val();
    },
    _init: function () {
      this.$elements = [this.$element];
      return this;
    }
  };

  var ParsleyFactory = function (element, options, parsleyFormInstance) {
    this.$element = $(element);
    // If the element has already been bound, returns its saved Parsley instance
    var savedparsleyFormInstance = this.$element.data('Parsley');
    if (savedparsleyFormInstance) {
      // If the saved instance has been bound without a ParsleyForm parent and there is one given in this call, add it
      if ('undefined' !== typeof parsleyFormInstance && savedparsleyFormInstance.parent === window.Parsley) {
        savedparsleyFormInstance.parent = parsleyFormInstance;
        savedparsleyFormInstance._resetOptions(savedparsleyFormInstance.options);
      }
      return savedparsleyFormInstance;
    }
    // Parsley must be instantiated with a DOM element or jQuery $element
    if (!this.$element.length)
      throw new Error('You must bind Parsley on an existing element.');
    if ('undefined' !== typeof parsleyFormInstance && 'ParsleyForm' !== parsleyFormInstance.__class__)
      throw new Error('Parent instance must be a ParsleyForm instance');
    this.parent = parsleyFormInstance || window.Parsley;
    return this.init(options);
  };
  ParsleyFactory.prototype = {
    init: function (options) {
      this.__class__ = 'Parsley';
      this.__version__ = '2.1.2';
      this.__id__ = ParsleyUtils.generateID();
      // Pre-compute options
      this._resetOptions(options);
      // A ParsleyForm instance is obviously a `<form>` element but also every node that is not an input and has the `data-parsley-validate` attribute
      if (this.$element.is('form') || (ParsleyUtils.checkAttr(this.$element, this.options.namespace, 'validate') && !this.$element.is(this.options.inputs)))
        return this.bind('parsleyForm');
      // Every other element is bound as a `ParsleyField` or `ParsleyFieldMultiple`
      return this.isMultiple() ? this.handleMultiple() : this.bind('parsleyField');
    },
    isMultiple: function () {
      return (this.$element.is('input[type=radio], input[type=checkbox]')) || (this.$element.is('select') && 'undefined' !== typeof this.$element.attr('multiple'));
    },
    // Multiples fields are a real nightmare :(
    // Maybe some refactoring would be appreciated here...
    handleMultiple: function () {
      var
        that = this,
        name,
        multiple,
        parsleyMultipleInstance;
      // Handle multiple name
      if (this.options.multiple)
        ; // We already have our 'multiple' identifier
      else if ('undefined' !== typeof this.$element.attr('name') && this.$element.attr('name').length)
        this.options.multiple = name = this.$element.attr('name');
      else if ('undefined' !== typeof this.$element.attr('id') && this.$element.attr('id').length)
        this.options.multiple = this.$element.attr('id');
      // Special select multiple input
      if (this.$element.is('select') && 'undefined' !== typeof this.$element.attr('multiple')) {
        this.options.multiple = this.options.multiple || this.__id__;
        return this.bind('parsleyFieldMultiple');
      // Else for radio / checkboxes, we need a `name` or `data-parsley-multiple` to properly bind it
      } else if (!this.options.multiple) {
        ParsleyUtils.warn('To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.', this.$element);
        return this;
      }
      // Remove special chars
      this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, '');
      // Add proper `data-parsley-multiple` to siblings if we have a valid multiple name
      if ('undefined' !== typeof name) {
        $('input[name="' + name + '"]').each(function () {
          if ($(this).is('input[type=radio], input[type=checkbox]'))
            $(this).attr(that.options.namespace + 'multiple', that.options.multiple);
        });
      }
      // Check here if we don't already have a related multiple instance saved
      var $previouslyRelated = this._findRelatedMultiple();
      for (var i = 0; i < $previouslyRelated.length; i++) {
        parsleyMultipleInstance = $($previouslyRelated.get(i)).data('Parsley');
        if ('undefined' !== typeof parsleyMultipleInstance) {
          if (!this.$element.data('ParsleyFieldMultiple')) {
            parsleyMultipleInstance.addElement(this.$element);
          }
          break;
        }
      }
      // Create a secret ParsleyField instance for every multiple field. It will be stored in `data('ParsleyFieldMultiple')`
      // And will be useful later to access classic `ParsleyField` stuff while being in a `ParsleyFieldMultiple` instance
      this.bind('parsleyField', true);
      return parsleyMultipleInstance || this.bind('parsleyFieldMultiple');
    },
    // Return proper `ParsleyForm`, `ParsleyField` or `ParsleyFieldMultiple`
    bind: function (type, doNotStore) {
      var parsleyInstance;
      switch (type) {
        case 'parsleyForm':
          parsleyInstance = $.extend(
            new ParsleyForm(this.$element, this.domOptions, this.options),
            window.ParsleyExtend
          )._bindFields();
          break;
        case 'parsleyField':
          parsleyInstance = $.extend(
            new ParsleyField(this.$element, this.domOptions, this.options, this.parent),
            window.ParsleyExtend
          );
          break;
        case 'parsleyFieldMultiple':
          parsleyInstance = $.extend(
            new ParsleyField(this.$element, this.domOptions, this.options, this.parent),
            new ParsleyMultiple(),
            window.ParsleyExtend
          )._init();
          break;
        default:
          throw new Error(type + 'is not a supported Parsley type');
      }
      if (this.options.multiple)
        ParsleyUtils.setAttr(this.$element, this.options.namespace, 'multiple', this.options.multiple);
      if ('undefined' !== typeof doNotStore) {
        this.$element.data('ParsleyFieldMultiple', parsleyInstance);
        return parsleyInstance;
      }
       // Store the freshly bound instance in a DOM element for later access using jQuery `data()`
      this.$element.data('Parsley', parsleyInstance);
      // Tell the world we have a new ParsleyForm or ParsleyField instance!
      parsleyInstance._trigger('init');
      return parsleyInstance;
    }
  };

  var
    o = $({}),
    deprecated = function () {
      ParsleyUtils.warnOnce("Parsley's pubsub module is deprecated; use the corresponding jQuery event method instead");
    };
  // Returns an event handler that calls `fn` with the arguments it expects
  function adapt(fn, context) {
    // Store to allow unbinding
    if (!fn.parsleyAdaptedCallback) {
      fn.parsleyAdaptedCallback = function () {
        var args = Array.prototype.slice.call(arguments, 0);
        args.unshift(this);
        fn.apply(context || o, args);
      };
    }
    return fn.parsleyAdaptedCallback;
  }
  var eventPrefix = 'parsley:';
  // Converts 'parsley:form:validate' into 'form:validate'
  function eventName(name) {
    if (name.lastIndexOf(eventPrefix, 0) === 0)
      return name.substr(eventPrefix.length);
    return name;
  }
  // $.listen is deprecated. Use Parsley.on instead.
  $.listen = function (name, callback) {
    var context;
    deprecated();
    if ('object' === typeof arguments[1] && 'function' === typeof arguments[2]) {
      context = arguments[1];
      callback = arguments[2];
    }
    if ('function' !== typeof arguments[1])
      throw new Error('Wrong parameters');
    window.Parsley.on(eventName(name), adapt(callback, context));
  };
  $.listenTo = function (instance, name, fn) {
    deprecated();
    if (!(instance instanceof ParsleyField) && !(instance instanceof ParsleyForm))
      throw new Error('Must give Parsley instance');
    if ('string' !== typeof name || 'function' !== typeof fn)
      throw new Error('Wrong parameters');
    instance.on(eventName(name), adapt(fn));
  };
  $.unsubscribe = function (name, fn) {
    deprecated();
    if ('string' !== typeof name || 'function' !== typeof fn)
      throw new Error('Wrong arguments');
    window.Parsley.off(eventName(name), fn.parsleyAdaptedCallback);
  };
  $.unsubscribeTo = function (instance, name) {
    deprecated();
    if (!(instance instanceof ParsleyField) && !(instance instanceof ParsleyForm))
      throw new Error('Must give Parsley instance');
    instance.off(eventName(name));
  };
  $.unsubscribeAll = function (name) {
    deprecated();
    window.Parsley.off(eventName(name));
    $('form,input,textarea,select').each(function() {
      var instance = $(this).data('Parsley');
      if (instance) {
        instance.off(eventName(name));
      }
    });
  };
  // $.emit is deprecated. Use jQuery events instead.
  $.emit = function (name, instance) {
    deprecated();
    var instanceGiven = (instance instanceof ParsleyField) || (instance instanceof ParsleyForm);
    var args = Array.prototype.slice.call(arguments, instanceGiven ? 2 : 1);
    args.unshift(eventName(name));
    if (!instanceGiven) {
      instance = window.Parsley;
    }
    instance.trigger.apply(instance, args);
  };

// ParsleyConfig definition if not already set
window.ParsleyConfig = window.ParsleyConfig || {};
window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {};
// Define then the messages
window.ParsleyConfig.i18n.en = jQuery.extend(window.ParsleyConfig.i18n.en || {}, {
  defaultMessage: "This value seems to be invalid.",
  type: {
    email:        "This value should be a valid email.",
    url:          "This value should be a valid url.",
    number:       "This value should be a valid number.",
    integer:      "This value should be a valid integer.",
    digits:       "This value should be digits.",
    alphanum:     "This value should be alphanumeric."
  },
  notblank:       "This value should not be blank.",
  required:       "This value is required.",
  pattern:        "This value seems to be invalid.",
  min:            "This value should be greater than or equal to %s.",
  max:            "This value should be lower than or equal to %s.",
  range:          "This value should be between %s and %s.",
  minlength:      "This value is too short. It should have %s characters or more.",
  maxlength:      "This value is too long. It should have %s characters or fewer.",
  length:         "This value length is invalid. It should be between %s and %s characters long.",
  mincheck:       "You must select at least %s choices.",
  maxcheck:       "You must select %s choices or fewer.",
  check:          "You must select between %s and %s choices.",
  equalto:        "This value should be the same."
});
// If file is loaded after Parsley main file, auto-load locale
if ('undefined' !== typeof window.ParsleyValidator)
  window.ParsleyValidator.addCatalog('en', window.ParsleyConfig.i18n.en, true);

//     Parsley.js 2.1.2
//     http://parsleyjs.org
//     (c) 2012-2015 Guillaume Potier, Wisembly
//     Parsley may be freely distributed under the MIT license.

  // Inherit `on`, `off` & `trigger` to Parsley:
  var Parsley = $.extend(new ParsleyAbstract(), {
      $element: $(document),
      actualizeOptions: null,
      _resetOptions: null,
      Factory: ParsleyFactory,
      version: '2.1.2'
    });
  // Supplement ParsleyField and Form with ParsleyAbstract
  // This way, the constructors will have access to those methods
  $.extend(ParsleyField.prototype, ParsleyAbstract.prototype);
  $.extend(ParsleyForm.prototype, ParsleyAbstract.prototype);
  // Inherit actualizeOptions and _resetOptions:
  $.extend(ParsleyFactory.prototype, ParsleyAbstract.prototype);
  // ### jQuery API
  // `$('.elem').parsley(options)` or `$('.elem').psly(options)`
  $.fn.parsley = $.fn.psly = function (options) {
    if (this.length > 1) {
      var instances = [];
      this.each(function () {
        instances.push($(this).parsley(options));
      });
      return instances;
    }
    // Return undefined if applied to non existing DOM element
    if (!$(this).length) {
      ParsleyUtils.warn('You must bind Parsley on an existing element.');
      return;
    }
    return new ParsleyFactory(this, options);
  };
  // ### ParsleyField and ParsleyForm extension
  // Ensure the extension is now defined if it wasn't previously
  if ('undefined' === typeof window.ParsleyExtend)
    window.ParsleyExtend = {};
  // ### Parsley config
  // Inherit from ParsleyDefault, and copy over any existing values
  Parsley.options = $.extend(ParsleyUtils.objectCreate(ParsleyDefaults), window.ParsleyConfig);
  window.ParsleyConfig = Parsley.options; // Old way of accessing global options
  // ### Globals
  window.Parsley = window.psly = Parsley;
  window.ParsleyUtils = ParsleyUtils;
  window.ParsleyValidator = new ParsleyValidator(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
  // ### ParsleyUI
  // UI is a separate class that only listens to some events and then modifies the DOM accordingly
  // Could be overriden by defining a `window.ParsleyConfig.ParsleyUI` appropriate class (with `listen()` method basically)
  window.ParsleyUI = 'function' === typeof window.ParsleyConfig.ParsleyUI ?
    new window.ParsleyConfig.ParsleyUI().listen() : new ParsleyUI().listen();
  // ### PARSLEY auto-binding
  // Prevent it by setting `ParsleyConfig.autoBind` to `false`
  if (false !== window.ParsleyConfig.autoBind)
    $(function () {
      // Works only on `data-parsley-validate`.
      if ($('[data-parsley-validate]').length)
        $('[data-parsley-validate]').parsley();
    });
}));

//# sourceMappingURL=MotherOfBanter.js.map
