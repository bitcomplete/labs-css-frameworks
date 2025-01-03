/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 * 
 * This bundle contains the following third-party dependencies:
 * 
 * flatpickr:
 * 
 flatpickr v4.6.1, @license MIT
 * 
 * lit-element:
 * 
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * 
 * lit-html:
 * 
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * 
 * @lit/reactive-element:
 * 
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * 
 * @carbon/layout:
 * 
 * Copyright IBM Corp. 2018, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * Also refer to the following links for the license of other third-party dependencies:
 * 
 * https://www.npmjs.com/package/@carbon/icons
 * https://www.npmjs.com/package/lit
 * https://www.npmjs.com/package/lodash-es
 */

 function t(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var i = 0, r = new Array(e); i < e; i++)
      r[i] = t[i];
  return r
}
function e(e) {
  return function(t) {
      if (Array.isArray(t))
          return t
  }(e) || function(t) {
      if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
          return Array.from(t)
  }(e) || function(e, i) {
      if (e) {
          if ("string" == typeof e)
              return t(e, i);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name),
          "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, i) : void 0
      }
  }(e) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}
function i(t) {
  return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
  }
  : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  }
  ,
  i(t)
}
function r(t) {
  var e = function(t, e) {
      if ("object" !== i(t) || null === t)
          return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" !== i(n))
              return n;
          throw new TypeError("@@toPrimitive must return a primitive value.")
      }
      return ("string" === e ? String : Number)(t)
  }(t, "string");
  return "symbol" === i(e) ? e : String(e)
}
function n(t, e, i, r) {
  var n = s();
  if (r)
      for (var h = 0; h < r.length; h++)
          n = r[h](n);
  var d = e((function(t) {
      n.initializeInstanceElements(t, u.elements)
  }
  ), i)
    , u = n.decorateClass(function(t) {
      for (var e = [], i = function(t) {
          return "method" === t.kind && t.key === s.key && t.placement === s.placement
      }, r = 0; r < t.length; r++) {
          var n, s = t[r];
          if ("method" === s.kind && (n = e.find(i)))
              if (c(s.descriptor) || c(n.descriptor)) {
                  if (a(s) || a(n))
                      throw new ReferenceError("Duplicated methods (" + s.key + ") can't be decorated.");
                  n.descriptor = s.descriptor
              } else {
                  if (a(s)) {
                      if (a(n))
                          throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + s.key + ").");
                      n.decorators = s.decorators
                  }
                  l(s, n)
              }
          else
              e.push(s)
      }
      return e
  }(d.d.map(o)), t);
  return n.initializeClassElements(d.F, u.elements),
  n.runClassFinishers(d.F, u.finishers)
}
function s() {
  s = function() {
      return t
  }
  ;
  var t = {
      elementsDefinitionOrder: [["method"], ["field"]],
      initializeInstanceElements: function(t, e) {
          ["method", "field"].forEach((function(i) {
              e.forEach((function(e) {
                  e.kind === i && "own" === e.placement && this.defineClassElement(t, e)
              }
              ), this)
          }
          ), this)
      },
      initializeClassElements: function(t, e) {
          var i = t.prototype;
          ["method", "field"].forEach((function(r) {
              e.forEach((function(e) {
                  var n = e.placement;
                  if (e.kind === r && ("static" === n || "prototype" === n)) {
                      var s = "static" === n ? t : i;
                      this.defineClassElement(s, e)
                  }
              }
              ), this)
          }
          ), this)
      },
      defineClassElement: function(t, e) {
          var i = e.descriptor;
          if ("field" === e.kind) {
              var r = e.initializer;
              i = {
                  enumerable: i.enumerable,
                  writable: i.writable,
                  configurable: i.configurable,
                  value: void 0 === r ? void 0 : r.call(t)
              }
          }
          Object.defineProperty(t, e.key, i)
      },
      decorateClass: function(t, e) {
          var i = []
            , r = []
            , n = {
              static: [],
              prototype: [],
              own: []
          };
          if (t.forEach((function(t) {
              this.addElementPlacement(t, n)
          }
          ), this),
          t.forEach((function(t) {
              if (!a(t))
                  return i.push(t);
              var e = this.decorateElement(t, n);
              i.push(e.element),
              i.push.apply(i, e.extras),
              r.push.apply(r, e.finishers)
          }
          ), this),
          !e)
              return {
                  elements: i,
                  finishers: r
              };
          var s = this.decorateConstructor(i, e);
          return r.push.apply(r, s.finishers),
          s.finishers = r,
          s
      },
      addElementPlacement: function(t, e, i) {
          var r = e[t.placement];
          if (!i && -1 !== r.indexOf(t.key))
              throw new TypeError("Duplicated element (" + t.key + ")");
          r.push(t.key)
      },
      decorateElement: function(t, e) {
          for (var i = [], r = [], n = t.decorators, s = n.length - 1; s >= 0; s--) {
              var o = e[t.placement];
              o.splice(o.indexOf(t.key), 1);
              var l = this.fromElementDescriptor(t)
                , a = this.toElementFinisherExtras((0,
              n[s])(l) || l);
              t = a.element,
              this.addElementPlacement(t, e),
              a.finisher && r.push(a.finisher);
              var c = a.extras;
              if (c) {
                  for (var h = 0; h < c.length; h++)
                      this.addElementPlacement(c[h], e);
                  i.push.apply(i, c)
              }
          }
          return {
              element: t,
              finishers: r,
              extras: i
          }
      },
      decorateConstructor: function(t, e) {
          for (var i = [], r = e.length - 1; r >= 0; r--) {
              var n = this.fromClassDescriptor(t)
                , s = this.toClassDescriptor((0,
              e[r])(n) || n);
              if (void 0 !== s.finisher && i.push(s.finisher),
              void 0 !== s.elements) {
                  t = s.elements;
                  for (var o = 0; o < t.length - 1; o++)
                      for (var l = o + 1; l < t.length; l++)
                          if (t[o].key === t[l].key && t[o].placement === t[l].placement)
                              throw new TypeError("Duplicated element (" + t[o].key + ")")
              }
          }
          return {
              elements: t,
              finishers: i
          }
      },
      fromElementDescriptor: function(t) {
          var e = {
              kind: t.kind,
              key: t.key,
              placement: t.placement,
              descriptor: t.descriptor
          };
          return Object.defineProperty(e, Symbol.toStringTag, {
              value: "Descriptor",
              configurable: !0
          }),
          "field" === t.kind && (e.initializer = t.initializer),
          e
      },
      toElementDescriptors: function(t) {
          if (void 0 !== t)
              return e(t).map((function(t) {
                  var e = this.toElementDescriptor(t);
                  return this.disallowProperty(t, "finisher", "An element descriptor"),
                  this.disallowProperty(t, "extras", "An element descriptor"),
                  e
              }
              ), this)
      },
      toElementDescriptor: function(t) {
          var e = String(t.kind);
          if ("method" !== e && "field" !== e)
              throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' + e + '"');
          var i = r(t.key)
            , n = String(t.placement);
          if ("static" !== n && "prototype" !== n && "own" !== n)
              throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' + n + '"');
          var s = t.descriptor;
          this.disallowProperty(t, "elements", "An element descriptor");
          var o = {
              kind: e,
              key: i,
              placement: n,
              descriptor: Object.assign({}, s)
          };
          return "field" !== e ? this.disallowProperty(t, "initializer", "A method descriptor") : (this.disallowProperty(s, "get", "The property descriptor of a field descriptor"),
          this.disallowProperty(s, "set", "The property descriptor of a field descriptor"),
          this.disallowProperty(s, "value", "The property descriptor of a field descriptor"),
          o.initializer = t.initializer),
          o
      },
      toElementFinisherExtras: function(t) {
          return {
              element: this.toElementDescriptor(t),
              finisher: h(t, "finisher"),
              extras: this.toElementDescriptors(t.extras)
          }
      },
      fromClassDescriptor: function(t) {
          var e = {
              kind: "class",
              elements: t.map(this.fromElementDescriptor, this)
          };
          return Object.defineProperty(e, Symbol.toStringTag, {
              value: "Descriptor",
              configurable: !0
          }),
          e
      },
      toClassDescriptor: function(t) {
          var e = String(t.kind);
          if ("class" !== e)
              throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' + e + '"');
          this.disallowProperty(t, "key", "A class descriptor"),
          this.disallowProperty(t, "placement", "A class descriptor"),
          this.disallowProperty(t, "descriptor", "A class descriptor"),
          this.disallowProperty(t, "initializer", "A class descriptor"),
          this.disallowProperty(t, "extras", "A class descriptor");
          var i = h(t, "finisher");
          return {
              elements: this.toElementDescriptors(t.elements),
              finisher: i
          }
      },
      runClassFinishers: function(t, e) {
          for (var i = 0; i < e.length; i++) {
              var r = (0,
              e[i])(t);
              if (void 0 !== r) {
                  if ("function" != typeof r)
                      throw new TypeError("Finishers must return a constructor.");
                  t = r
              }
          }
          return t
      },
      disallowProperty: function(t, e, i) {
          if (void 0 !== t[e])
              throw new TypeError(i + " can't have a ." + e + " property.")
      }
  };
  return t
}
function o(t) {
  var e, i = r(t.key);
  "method" === t.kind ? e = {
      value: t.value,
      writable: !0,
      configurable: !0,
      enumerable: !1
  } : "get" === t.kind ? e = {
      get: t.value,
      configurable: !0,
      enumerable: !1
  } : "set" === t.kind ? e = {
      set: t.value,
      configurable: !0,
      enumerable: !1
  } : "field" === t.kind && (e = {
      configurable: !0,
      writable: !0,
      enumerable: !0
  });
  var n = {
      kind: "field" === t.kind ? "field" : "method",
      key: i,
      placement: t.static ? "static" : "field" === t.kind ? "own" : "prototype",
      descriptor: e
  };
  return t.decorators && (n.decorators = t.decorators),
  "field" === t.kind && (n.initializer = t.value),
  n
}
function l(t, e) {
  void 0 !== t.descriptor.get ? e.descriptor.get = t.descriptor.get : e.descriptor.set = t.descriptor.set
}
function a(t) {
  return t.decorators && t.decorators.length
}
function c(t) {
  return void 0 !== t && !(void 0 === t.value && void 0 === t.writable)
}
function h(t, e) {
  var i = t[e];
  if (void 0 !== i && "function" != typeof i)
      throw new TypeError("Expected '" + e + "' to be a function");
  return i
}
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const d = window
, u = d.ShadowRoot && (void 0 === d.ShadyCSS || d.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
, p = Symbol()
, f = new WeakMap;
class v {
  constructor(t, e, i) {
      if (this._$cssResult$ = !0,
      i !== p)
          throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t,
      this.t = e
  }
  get styleSheet() {
      let t = this.o;
      const e = this.t;
      if (u && void 0 === t) {
          const i = void 0 !== e && 1 === e.length;
          i && (t = f.get(e)),
          void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText),
          i && f.set(e, t))
      }
      return t
  }
  toString() {
      return this.cssText
  }
}
const m = (t, ...e) => {
  const i = 1 === t.length ? t[0] : e.reduce(( (e, i, r) => e + (t => {
      if (!0 === t._$cssResult$)
          return t.cssText;
      if ("number" == typeof t)
          return t;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
  }
  )(i) + t[r + 1]), t[0]);
  return new v(i,t,p)
}
, $ = u ? t => t : t => t instanceof CSSStyleSheet ? (t => {
  let e = "";
  for (const i of t.cssRules)
      e += i.cssText;
  return (t => new v("string" == typeof t ? t : t + "",void 0,p))(e)
}
)(t) : t /**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;
var y;
const _ = window
, b = _.trustedTypes
, g = b ? b.emptyScript : ""
, A = _.reactiveElementPolyfillSupport
, E = {
  toAttribute(t, e) {
      switch (e) {
      case Boolean:
          t = t ? g : null;
          break;
      case Object:
      case Array:
          t = null == t ? t : JSON.stringify(t)
      }
      return t
  },
  fromAttribute(t, e) {
      let i = t;
      switch (e) {
      case Boolean:
          i = null !== t;
          break;
      case Number:
          i = null === t ? null : Number(t);
          break;
      case Object:
      case Array:
          try {
              i = JSON.parse(t)
          } catch (t) {
              i = null
          }
      }
      return i
  }
}
, w = (t, e) => e !== t && (e == e || t == t)
, S = {
  attribute: !0,
  type: String,
  converter: E,
  reflect: !1,
  hasChanged: w
}
, C = "finalized";
class k extends HTMLElement {
  constructor() {
      super(),
      this._$Ei = new Map,
      this.isUpdatePending = !1,
      this.hasUpdated = !1,
      this._$El = null,
      this._$Eu()
  }
  static addInitializer(t) {
      var e;
      this.finalize(),
      (null !== (e = this.h) && void 0 !== e ? e : this.h = []).push(t)
  }
  static get observedAttributes() {
      this.finalize();
      const t = [];
      return this.elementProperties.forEach(( (e, i) => {
          const r = this._$Ep(i, e);
          void 0 !== r && (this._$Ev.set(r, i),
          t.push(r))
      }
      )),
      t
  }
  static createProperty(t, e=S) {
      if (e.state && (e.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, e),
      !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
          const i = "symbol" == typeof t ? Symbol() : "__" + t
            , r = this.getPropertyDescriptor(t, i, e);
          void 0 !== r && Object.defineProperty(this.prototype, t, r)
      }
  }
  static getPropertyDescriptor(t, e, i) {
      return {
          get() {
              return this[e]
          },
          set(r) {
              const n = this[t];
              this[e] = r,
              this.requestUpdate(t, n, i)
          },
          configurable: !0,
          enumerable: !0
      }
  }
  static getPropertyOptions(t) {
      return this.elementProperties.get(t) || S
  }
  static finalize() {
      if (this.hasOwnProperty(C))
          return !1;
      this[C] = !0;
      const t = Object.getPrototypeOf(this);
      if (t.finalize(),
      void 0 !== t.h && (this.h = [...t.h]),
      this.elementProperties = new Map(t.elementProperties),
      this._$Ev = new Map,
      this.hasOwnProperty("properties")) {
          const t = this.properties
            , e = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
          for (const i of e)
              this.createProperty(i, t[i])
      }
      return this.elementStyles = this.finalizeStyles(this.styles),
      !0
  }
  static finalizeStyles(t) {
      const e = [];
      if (Array.isArray(t)) {
          const i = new Set(t.flat(1 / 0).reverse());
          for (const t of i)
              e.unshift($(t))
      } else
          void 0 !== t && e.push($(t));
      return e
  }
  static _$Ep(t, e) {
      const i = e.attribute;
      return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0
  }
  _$Eu() {
      var t;
      this._$E_ = new Promise((t => this.enableUpdating = t)),
      this._$AL = new Map,
      this._$Eg(),
      this.requestUpdate(),
      null === (t = this.constructor.h) || void 0 === t || t.forEach((t => t(this)))
  }
  addController(t) {
      var e, i;
      (null !== (e = this._$ES) && void 0 !== e ? e : this._$ES = []).push(t),
      void 0 !== this.renderRoot && this.isConnected && (null === (i = t.hostConnected) || void 0 === i || i.call(t))
  }
  removeController(t) {
      var e;
      null === (e = this._$ES) || void 0 === e || e.splice(this._$ES.indexOf(t) >>> 0, 1)
  }
  _$Eg() {
      this.constructor.elementProperties.forEach(( (t, e) => {
          this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]),
          delete this[e])
      }
      ))
  }
  createRenderRoot() {
      var t;
      const e = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
      return ( (t, e) => {
          u ? t.adoptedStyleSheets = e.map((t => t instanceof CSSStyleSheet ? t : t.styleSheet)) : e.forEach((e => {
              const i = document.createElement("style")
                , r = d.litNonce;
              void 0 !== r && i.setAttribute("nonce", r),
              i.textContent = e.cssText,
              t.appendChild(i)
          }
          ))
      }
      )(e, this.constructor.elementStyles),
      e
  }
  connectedCallback() {
      var t;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      null === (t = this._$ES) || void 0 === t || t.forEach((t => {
          var e;
          return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t)
      }
      ))
  }
  enableUpdating(t) {}
  disconnectedCallback() {
      var t;
      null === (t = this._$ES) || void 0 === t || t.forEach((t => {
          var e;
          return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t)
      }
      ))
  }
  attributeChangedCallback(t, e, i) {
      this._$AK(t, i)
  }
  _$EO(t, e, i=S) {
      var r;
      const n = this.constructor._$Ep(t, i);
      if (void 0 !== n && !0 === i.reflect) {
          const s = (void 0 !== (null === (r = i.converter) || void 0 === r ? void 0 : r.toAttribute) ? i.converter : E).toAttribute(e, i.type);
          this._$El = t,
          null == s ? this.removeAttribute(n) : this.setAttribute(n, s),
          this._$El = null
      }
  }
  _$AK(t, e) {
      var i;
      const r = this.constructor
        , n = r._$Ev.get(t);
      if (void 0 !== n && this._$El !== n) {
          const t = r.getPropertyOptions(n)
            , s = "function" == typeof t.converter ? {
              fromAttribute: t.converter
          } : void 0 !== (null === (i = t.converter) || void 0 === i ? void 0 : i.fromAttribute) ? t.converter : E;
          this._$El = n,
          this[n] = s.fromAttribute(e, t.type),
          this._$El = null
      }
  }
  requestUpdate(t, e, i) {
      let r = !0;
      void 0 !== t && (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || w)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e),
      !0 === i.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map),
      this._$EC.set(t, i))) : r = !1),
      !this.isUpdatePending && r && (this._$E_ = this._$Ej())
  }
  async _$Ej() {
      this.isUpdatePending = !0;
      try {
          await this._$E_
      } catch (t) {
          Promise.reject(t)
      }
      const t = this.scheduleUpdate();
      return null != t && await t,
      !this.isUpdatePending
  }
  scheduleUpdate() {
      return this.performUpdate()
  }
  performUpdate() {
      var t;
      if (!this.isUpdatePending)
          return;
      this.hasUpdated,
      this._$Ei && (this._$Ei.forEach(( (t, e) => this[e] = t)),
      this._$Ei = void 0);
      let e = !1;
      const i = this._$AL;
      try {
          e = this.shouldUpdate(i),
          e ? (this.willUpdate(i),
          null === (t = this._$ES) || void 0 === t || t.forEach((t => {
              var e;
              return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t)
          }
          )),
          this.update(i)) : this._$Ek()
      } catch (t) {
          throw e = !1,
          this._$Ek(),
          t
      }
      e && this._$AE(i)
  }
  willUpdate(t) {}
  _$AE(t) {
      var e;
      null === (e = this._$ES) || void 0 === e || e.forEach((t => {
          var e;
          return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t)
      }
      )),
      this.hasUpdated || (this.hasUpdated = !0,
      this.firstUpdated(t)),
      this.updated(t)
  }
  _$Ek() {
      this._$AL = new Map,
      this.isUpdatePending = !1
  }
  get updateComplete() {
      return this.getUpdateComplete()
  }
  getUpdateComplete() {
      return this._$E_
  }
  shouldUpdate(t) {
      return !0
  }
  update(t) {
      void 0 !== this._$EC && (this._$EC.forEach(( (t, e) => this._$EO(e, this[e], t))),
      this._$EC = void 0),
      this._$Ek()
  }
  updated(t) {}
  firstUpdated(t) {}
}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var x;
k[C] = !0,
k.elementProperties = new Map,
k.elementStyles = [],
k.shadowRootOptions = {
  mode: "open"
},
null == A || A({
  ReactiveElement: k
}),
(null !== (y = _.reactiveElementVersions) && void 0 !== y ? y : _.reactiveElementVersions = []).push("1.6.3");
const P = window
, T = P.trustedTypes
, U = T ? T.createPolicy("lit-html", {
  createHTML: t => t
}) : void 0
, O = "$lit$"
, H = `lit$${(Math.random() + "").slice(9)}$`
, N = "?" + H
, D = `<${N}>`
, R = document
, M = () => R.createComment("")
, z = t => null === t || "object" != typeof t && "function" != typeof t
, j = Array.isArray
, I = "[ \t\n\f\r]"
, L = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
, B = /-->/g
, V = />/g
, F = RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g")
, W = /'/g
, q = /"/g
, J = /^(?:script|style|textarea|title)$/i
, K = t => (e, ...i) => ({
  _$litType$: t,
  strings: e,
  values: i
})
, Z = K(1)
, G = K(2)
, Q = Symbol.for("lit-noChange")
, X = Symbol.for("lit-nothing")
, Y = new WeakMap
, tt = R.createTreeWalker(R, 129, null, !1);
function et(t, e) {
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
  return void 0 !== U ? U.createHTML(e) : e
}
const it = (t, e) => {
  const i = t.length - 1
    , r = [];
  let n, s = 2 === e ? "<svg>" : "", o = L;
  for (let e = 0; e < i; e++) {
      const i = t[e];
      let l, a, c = -1, h = 0;
      for (; h < i.length && (o.lastIndex = h,
      a = o.exec(i),
      null !== a); )
          h = o.lastIndex,
          o === L ? "!--" === a[1] ? o = B : void 0 !== a[1] ? o = V : void 0 !== a[2] ? (J.test(a[2]) && (n = RegExp("</" + a[2], "g")),
          o = F) : void 0 !== a[3] && (o = F) : o === F ? ">" === a[0] ? (o = null != n ? n : L,
          c = -1) : void 0 === a[1] ? c = -2 : (c = o.lastIndex - a[2].length,
          l = a[1],
          o = void 0 === a[3] ? F : '"' === a[3] ? q : W) : o === q || o === W ? o = F : o === B || o === V ? o = L : (o = F,
          n = void 0);
      const d = o === F && t[e + 1].startsWith("/>") ? " " : "";
      s += o === L ? i + D : c >= 0 ? (r.push(l),
      i.slice(0, c) + O + i.slice(c) + H + d) : i + H + (-2 === c ? (r.push(void 0),
      e) : d)
  }
  return [et(t, s + (t[i] || "<?>") + (2 === e ? "</svg>" : "")), r]
}
;
class rt {
  constructor({strings: t, _$litType$: e}, i) {
      let r;
      this.parts = [];
      let n = 0
        , s = 0;
      const o = t.length - 1
        , l = this.parts
        , [a,c] = it(t, e);
      if (this.el = rt.createElement(a, i),
      tt.currentNode = this.el.content,
      2 === e) {
          const t = this.el.content
            , e = t.firstChild;
          e.remove(),
          t.append(...e.childNodes)
      }
      for (; null !== (r = tt.nextNode()) && l.length < o; ) {
          if (1 === r.nodeType) {
              if (r.hasAttributes()) {
                  const t = [];
                  for (const e of r.getAttributeNames())
                      if (e.endsWith(O) || e.startsWith(H)) {
                          const i = c[s++];
                          if (t.push(e),
                          void 0 !== i) {
                              const t = r.getAttribute(i.toLowerCase() + O).split(H)
                                , e = /([.?@])?(.*)/.exec(i);
                              l.push({
                                  type: 1,
                                  index: n,
                                  name: e[2],
                                  strings: t,
                                  ctor: "." === e[1] ? at : "?" === e[1] ? ht : "@" === e[1] ? dt : lt
                              })
                          } else
                              l.push({
                                  type: 6,
                                  index: n
                              })
                      }
                  for (const e of t)
                      r.removeAttribute(e)
              }
              if (J.test(r.tagName)) {
                  const t = r.textContent.split(H)
                    , e = t.length - 1;
                  if (e > 0) {
                      r.textContent = T ? T.emptyScript : "";
                      for (let i = 0; i < e; i++)
                          r.append(t[i], M()),
                          tt.nextNode(),
                          l.push({
                              type: 2,
                              index: ++n
                          });
                      r.append(t[e], M())
                  }
              }
          } else if (8 === r.nodeType)
              if (r.data === N)
                  l.push({
                      type: 2,
                      index: n
                  });
              else {
                  let t = -1;
                  for (; -1 !== (t = r.data.indexOf(H, t + 1)); )
                      l.push({
                          type: 7,
                          index: n
                      }),
                      t += H.length - 1
              }
          n++
      }
  }
  static createElement(t, e) {
      const i = R.createElement("template");
      return i.innerHTML = t,
      i
  }
}
function nt(t, e, i=t, r) {
  var n, s, o, l;
  if (e === Q)
      return e;
  let a = void 0 !== r ? null === (n = i._$Co) || void 0 === n ? void 0 : n[r] : i._$Cl;
  const c = z(e) ? void 0 : e._$litDirective$;
  return (null == a ? void 0 : a.constructor) !== c && (null === (s = null == a ? void 0 : a._$AO) || void 0 === s || s.call(a, !1),
  void 0 === c ? a = void 0 : (a = new c(t),
  a._$AT(t, i, r)),
  void 0 !== r ? (null !== (o = (l = i)._$Co) && void 0 !== o ? o : l._$Co = [])[r] = a : i._$Cl = a),
  void 0 !== a && (e = nt(t, a._$AS(t, e.values), a, r)),
  e
}
class st {
  constructor(t, e) {
      this._$AV = [],
      this._$AN = void 0,
      this._$AD = t,
      this._$AM = e
  }
  get parentNode() {
      return this._$AM.parentNode
  }
  get _$AU() {
      return this._$AM._$AU
  }
  u(t) {
      var e;
      const {el: {content: i}, parts: r} = this._$AD
        , n = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : R).importNode(i, !0);
      tt.currentNode = n;
      let s = tt.nextNode()
        , o = 0
        , l = 0
        , a = r[0];
      for (; void 0 !== a; ) {
          if (o === a.index) {
              let e;
              2 === a.type ? e = new ot(s,s.nextSibling,this,t) : 1 === a.type ? e = new a.ctor(s,a.name,a.strings,this,t) : 6 === a.type && (e = new ut(s,this,t)),
              this._$AV.push(e),
              a = r[++l]
          }
          o !== (null == a ? void 0 : a.index) && (s = tt.nextNode(),
          o++)
      }
      return tt.currentNode = R,
      n
  }
  v(t) {
      let e = 0;
      for (const i of this._$AV)
          void 0 !== i && (void 0 !== i.strings ? (i._$AI(t, i, e),
          e += i.strings.length - 2) : i._$AI(t[e])),
          e++
  }
}
class ot {
  constructor(t, e, i, r) {
      var n;
      this.type = 2,
      this._$AH = X,
      this._$AN = void 0,
      this._$AA = t,
      this._$AB = e,
      this._$AM = i,
      this.options = r,
      this._$Cp = null === (n = null == r ? void 0 : r.isConnected) || void 0 === n || n
  }
  get _$AU() {
      var t, e;
      return null !== (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== e ? e : this._$Cp
  }
  get parentNode() {
      let t = this._$AA.parentNode;
      const e = this._$AM;
      return void 0 !== e && 11 === (null == t ? void 0 : t.nodeType) && (t = e.parentNode),
      t
  }
  get startNode() {
      return this._$AA
  }
  get endNode() {
      return this._$AB
  }
  _$AI(t, e=this) {
      t = nt(this, t, e),
      z(t) ? t === X || null == t || "" === t ? (this._$AH !== X && this._$AR(),
      this._$AH = X) : t !== this._$AH && t !== Q && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : (t => j(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]))(t) ? this.T(t) : this._(t)
  }
  k(t) {
      return this._$AA.parentNode.insertBefore(t, this._$AB)
  }
  $(t) {
      this._$AH !== t && (this._$AR(),
      this._$AH = this.k(t))
  }
  _(t) {
      this._$AH !== X && z(this._$AH) ? this._$AA.nextSibling.data = t : this.$(R.createTextNode(t)),
      this._$AH = t
  }
  g(t) {
      var e;
      const {values: i, _$litType$: r} = t
        , n = "number" == typeof r ? this._$AC(t) : (void 0 === r.el && (r.el = rt.createElement(et(r.h, r.h[0]), this.options)),
      r);
      if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === n)
          this._$AH.v(i);
      else {
          const t = new st(n,this)
            , e = t.u(this.options);
          t.v(i),
          this.$(e),
          this._$AH = t
      }
  }
  _$AC(t) {
      let e = Y.get(t.strings);
      return void 0 === e && Y.set(t.strings, e = new rt(t)),
      e
  }
  T(t) {
      j(this._$AH) || (this._$AH = [],
      this._$AR());
      const e = this._$AH;
      let i, r = 0;
      for (const n of t)
          r === e.length ? e.push(i = new ot(this.k(M()),this.k(M()),this,this.options)) : i = e[r],
          i._$AI(n),
          r++;
      r < e.length && (this._$AR(i && i._$AB.nextSibling, r),
      e.length = r)
  }
  _$AR(t=this._$AA.nextSibling, e) {
      var i;
      for (null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, e); t && t !== this._$AB; ) {
          const e = t.nextSibling;
          t.remove(),
          t = e
      }
  }
  setConnected(t) {
      var e;
      void 0 === this._$AM && (this._$Cp = t,
      null === (e = this._$AP) || void 0 === e || e.call(this, t))
  }
}
class lt {
  constructor(t, e, i, r, n) {
      this.type = 1,
      this._$AH = X,
      this._$AN = void 0,
      this.element = t,
      this.name = e,
      this._$AM = r,
      this.options = n,
      i.length > 2 || "" !== i[0] || "" !== i[1] ? (this._$AH = Array(i.length - 1).fill(new String),
      this.strings = i) : this._$AH = X
  }
  get tagName() {
      return this.element.tagName
  }
  get _$AU() {
      return this._$AM._$AU
  }
  _$AI(t, e=this, i, r) {
      const n = this.strings;
      let s = !1;
      if (void 0 === n)
          t = nt(this, t, e, 0),
          s = !z(t) || t !== this._$AH && t !== Q,
          s && (this._$AH = t);
      else {
          const r = t;
          let o, l;
          for (t = n[0],
          o = 0; o < n.length - 1; o++)
              l = nt(this, r[i + o], e, o),
              l === Q && (l = this._$AH[o]),
              s || (s = !z(l) || l !== this._$AH[o]),
              l === X ? t = X : t !== X && (t += (null != l ? l : "") + n[o + 1]),
              this._$AH[o] = l
      }
      s && !r && this.j(t)
  }
  j(t) {
      t === X ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
  }
}
class at extends lt {
  constructor() {
      super(...arguments),
      this.type = 3
  }
  j(t) {
      this.element[this.name] = t === X ? void 0 : t
  }
}
const ct = T ? T.emptyScript : "";
class ht extends lt {
  constructor() {
      super(...arguments),
      this.type = 4
  }
  j(t) {
      t && t !== X ? this.element.setAttribute(this.name, ct) : this.element.removeAttribute(this.name)
  }
}
class dt extends lt {
  constructor(t, e, i, r, n) {
      super(t, e, i, r, n),
      this.type = 5
  }
  _$AI(t, e=this) {
      var i;
      if ((t = null !== (i = nt(this, t, e, 0)) && void 0 !== i ? i : X) === Q)
          return;
      const r = this._$AH
        , n = t === X && r !== X || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive
        , s = t !== X && (r === X || n);
      n && this.element.removeEventListener(this.name, this, r),
      s && this.element.addEventListener(this.name, this, t),
      this._$AH = t
  }
  handleEvent(t) {
      var e, i;
      "function" == typeof this._$AH ? this._$AH.call(null !== (i = null === (e = this.options) || void 0 === e ? void 0 : e.host) && void 0 !== i ? i : this.element, t) : this._$AH.handleEvent(t)
  }
}
class ut {
  constructor(t, e, i) {
      this.element = t,
      this.type = 6,
      this._$AN = void 0,
      this._$AM = e,
      this.options = i
  }
  get _$AU() {
      return this._$AM._$AU
  }
  _$AI(t) {
      nt(this, t)
  }
}
const pt = P.litHtmlPolyfillSupport;
null == pt || pt(rt, ot),
(null !== (x = P.litHtmlVersions) && void 0 !== x ? x : P.litHtmlVersions = []).push("2.8.0");
const ft = (t, e, i) => {
  var r, n;
  const s = null !== (r = null == i ? void 0 : i.renderBefore) && void 0 !== r ? r : e;
  let o = s._$litPart$;
  if (void 0 === o) {
      const t = null !== (n = null == i ? void 0 : i.renderBefore) && void 0 !== n ? n : null;
      s._$litPart$ = o = new ot(e.insertBefore(M(), t),t,void 0,null != i ? i : {})
  }
  return o._$AI(t),
  o
  /**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
}
;
var vt, mt;
class $t extends k {
  constructor() {
      super(...arguments),
      this.renderOptions = {
          host: this
      },
      this._$Do = void 0
  }
  createRenderRoot() {
      var t, e;
      const i = super.createRenderRoot();
      return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild),
      i
  }
  update(t) {
      const e = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      this._$Do = ft(e, this.renderRoot, this.renderOptions)
  }
  connectedCallback() {
      var t;
      super.connectedCallback(),
      null === (t = this._$Do) || void 0 === t || t.setConnected(!0)
  }
  disconnectedCallback() {
      var t;
      super.disconnectedCallback(),
      null === (t = this._$Do) || void 0 === t || t.setConnected(!1)
  }
  render() {
      return Q
  }
}
$t.finalized = !0,
$t._$litElement$ = !0,
null === (vt = globalThis.litElementHydrateSupport) || void 0 === vt || vt.call(globalThis, {
  LitElement: $t
});
const yt = globalThis.litElementPolyfillSupport;
null == yt || yt({
  LitElement: $t
}),
(null !== (mt = globalThis.litElementVersions) && void 0 !== mt ? mt : globalThis.litElementVersions = []).push("3.3.3");
/**
* @license
*
* Copyright IBM Corp. 2019, 2023
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
*/
const _t = "cds"
, bt = `\n  a[href], area[href], input:not([disabled]):not([tabindex='-1']),\n  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),\n  textarea:not([disabled]):not([tabindex='-1']),\n  iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true],\n  ${_t}-accordion-item,\n  ${_t}-button,\n  ${_t}-breadcrumb-link,\n  ${_t}-checkbox,\n  ${_t}-code-snippet,\n  ${_t}-combo-box,\n  ${_t}-content-switcher-item,\n  ${_t}-copy-button,\n  ${_t}-table-header-row,\n  ${_t}-table-row,\n  ${_t}-table-toolbar-search,\n  ${_t}-date-picker-input,\n  ${_t}-dropdown,\n  ${_t}-input,\n  ${_t}-link,\n  ${_t}-number-input,\n  ${_t}-modal,\n  ${_t}-modal-close-button,\n  ${_t}-multi-select,\n  ${_t}-inline-notification,\n  ${_t}-toast-notification,\n  ${_t}-overflow-menu,\n  ${_t}-overflow-menu-item,\n  ${_t}-page-sizes-select,\n  ${_t}-pages-select,\n  ${_t}-progress-step,\n  ${_t}-radio-button,\n  ${_t}-search,\n  ${_t}-slider,\n  ${_t}-slider-input,\n  ${_t}-structured-list,\n  ${_t}-tab,\n  ${_t}-filter-tag,\n  ${_t}-textarea,\n  ${_t}-clickable-tile,\n  ${_t}-expandable-tile,\n  ${_t}-radio-tile,\n  ${_t}-selectable-tile,\n  ${_t}-toggle,\n  ${_t}-tooltip,\n  ${_t}-tooltip-definition,\n  ${_t}-tooltip-icon,\n  ${_t}-header-menu,\n  ${_t}-header-menu-button,\n  ${_t}-header-menu-item,\n  ${_t}-header-name,\n  ${_t}-header-nav-item,\n  ${_t}-side-nav-link,\n  ${_t}-side-nav-menu,\n  ${_t}-side-nav-menu-item\n`;
export {X as A, ft as D, Q as T, n as _, bt as a, G as b, r as c, m as i, _t as p, $t as s, Z as x};
