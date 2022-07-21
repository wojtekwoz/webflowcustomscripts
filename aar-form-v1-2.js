
/*Upgraded Advanced Form code. Credits to: Alex Iglesias - https://webflow.com/alexiglesias*/

(function ()
{
	function oa(a)
	{
		Object.defineProperty(a, "__esModule",
		{
			value: true
		})
	}
	var M = this;
	var j = {};

	function pa(e, t)
	{
		var r;
		if ("undefined" == typeof Symbol || null == e[Symbol.iterator])
		{
			if (Array.isArray(e) || (r = qa(e)) || t && e && "number" == typeof e.length)
			{
				r && (e = r);
				var o = 0,
					n = function () {};
				return {
					s: n,
					n: function ()
					{
						return o >= e.length ?
						{
							done: !0
						} :
						{
							done: !1,
							value: e[o++]
						}
					},
					e: function (e)
					{
						throw e
					},
					f: n
				}
			}
			throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}
		var $, l = !0,
			i = !1;
		return {
			s: function ()
			{
				r = e[Symbol.iterator]()
			},
			n: function ()
			{
				var e = r.next();
				return l = e.done, e
			},
			e: function (e)
			{
				i = !0, $ = e
			},
			f: function ()
			{
				try
				{
					l || null == r.return || r.return()
				}
				finally
				{
					if (i) throw $
				}
			}
		}
	}

	function qa(e, t)
	{
		if (e)
		{
			if ("string" == typeof e) return ca(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ca(e, t) : void 0
		}
	}

	function ca(e, t)
	{
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
		return o
	}
	Object.defineProperty(j, "__esModule",
	{
		value: !0
	});
	var G = (N = void 0, R = j.isFormElement = N, U = j.isVisible = R, V = j.getDistanceFromTop = U, O = j.convertToString = V, j.validateEmail = O);
	j.findTextNode = G;
	var N = function (e)
	{
		return e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement
	};
	j.isFormElement = N;
	var R = function (e)
	{
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	};
	j.isVisible = R;
	var U = function (e)
	{
		var t = e,
			r = 0;
		if (t.offsetParent)
			do {
				r += t.offsetTop, t = t.offsetParent instanceof HTMLElement ? t.offsetParent : null
			} while (t);
		return r >= 0 ? r : 0
	};
	j.getDistanceFromTop = U;
	var V = function (e)
	{
		return "string" == typeof e ? e : "number" == typeof e ? e.toString() : e ? "true" : "false"
	};
	j.convertToString = V;
	var O = function (e)
	{
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
	};
	j.validateEmail = O, G = function (e)
	{
		var t, r, o = pa(e.childNodes);
		try
		{
			for (o.s(); !(r = o.n()).done;)
			{
				var n = r.value;
				if (n.childNodes.length && (t = G(n)), n.nodeType == Node.TEXT_NODE && (t = n), t) break
			}
		}
		catch ($)
		{
			o.e($)
		}
		finally
		{
			o.f()
		}
		return t
	}, j.findTextNode = G;
	var X = {};

	function ra(e, t)
	{
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function da(e, t)
	{
		for (var i = 0; i < t.length; i++)
		{
			var r = t[i];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}

	function sa(e, t, i)
	{
		return t && da(e.prototype, t), i && da(e, i), e
	}
	Object.defineProperty(X, "__esModule",
	{
		value: !0
	});
	var ta = function ()
		{
			function e(t)
			{
				ra(this, e), this.view = t, this.currentStep = 0, this.alertShown = !1, this.view = t, this.init()
			}
			return sa(e, [
			{
				key: "init",
				value: function ()
				{
					this.view.setMaskHeight(this.currentStep), this.view.disableElement(this.view.back), this.view.setButtonText(this.currentStep), this.view.setStepsDisplay(this.currentStep), this.view.createHiddenForm(), this.setAlert(), this.setEvents()
				}
			},
			{
				key: "setEvents",
				value: function ()
				{
					var e = this,
						t = function (t)
						{
							e.navClick(t)
						},
						i = function (t)
						{
							e.handleInput(t)
						};
					this.view.next.addEventListener("click", function ()
					{
						e.nextClick()
					}), this.view.back && this.view.back.addEventListener("click", function ()
					{
						e.backClick()
					}), this.view.navLinks.forEach(function (e)
					{
						e.addEventListener("click", t)
					}), this.view.inputs.forEach(function (e)
					{
						e.addEventListener("input", i)
					}), this.view.form.addEventListener("submit", function (t)
					{
						e.handleSubmit()
					}), this.view.sendHiddenForm && this.view.rightArrow.addEventListener("click", function t()
					{
						e.currentStep === e.view.hiddenFormStep && (e.view.submitHiddenForm(), e.view.rightArrow.removeEventListener("click", t))
					})
				}
			},
			{
				key: "nextClick",
				value: function ()
				{
					this.checkRequiredInputs() ? (this.currentStep++, 1 === this.currentStep && this.view.enableElement(this.view.back), this.currentStep === this.view.steps.length ? this.view.submitForm() : (this.view.goNext(), this.view.setMaskHeight(this.currentStep), this.view.setButtonText(this.currentStep), this.view.setStepsDisplay(this.currentStep)), this.hideAlert(), this.view.scrollTop()) : this.showAlert()
				}
			},
			{
				key: "backClick",
				value: function ()
				{
					var e = this.currentStep - 1;
					e < 0 || (this.view.goBack(), this.view.setMaskHeight(e), this.view.setButtonText(e), this.view.setStepsDisplay(e), this.hideAlert(), this.view.scrollTop(), this.currentStep = e, 0 === this.currentStep && this.view.disableElement(this.view.back))
				}
			},
			{
				key: "navClick",
				value: function (e)
				{
					var t = e.currentTarget;
					if (t instanceof HTMLElement)
					{
						var i = +t.dataset.msfNav - 1;
						i < this.currentStep && (this.view.sliderDots[i].click(), this.currentStep = i, this.view.setMaskHeight(this.currentStep), this.view.setButtonText(this.currentStep), 0 === this.currentStep && this.view.disableElement(this.view.back))
					}
				}
			},
			{
				key: "handleInput",
				value: function (e)
				{
					var t = e.currentTarget;
					if (N(t))
					{
						var i = "-";
						switch (t.type)
						{
						case "checkbox":
							if (!(t instanceof HTMLInputElement)) break;
							i = t.checked;
							var r = t.parentElement;
							if (!r) break;
							var n = r.querySelector(".w-checkbox-input");
							t.checked && n && this.view.removeWarningClass(n);
							break;
						case "radio":
							var s = this.view.form.querySelector("input[name=\"".concat(t.name, "\"]:checked"));
							if (!(s instanceof HTMLInputElement)) break;
							i = s.value;
							var a = t.parentElement;
							if (!a) break;
							var v = a.querySelector(".w-radio-input");
							v && this.view.removeWarningClass(v);
							break;
						default:
							if (!t.value) break;
							if ("email" === t.type && !O(t.value)) break;
							i = t.value, this.view.removeWarningClass(t);
						}
						this.view.setValues(t, i)
					}
				}
			},
			{
				key: "checkRequiredInputs",
				value: function ()
				{
					var e = this,
						t = this.view.getInputs(this.currentStep).filter(function (e)
						{
							return e.required && R(e)
						}),
						i = 0;
					return t.forEach(function (t)
					{
						switch (t.type)
						{
						case "checkbox":
							if (t.checkValidity())
							{
								i++;
								break
							}
							var r = t.parentElement;
							if (!r) break;
							var n = r.querySelector(".w-checkbox-input");
							n && e.view.addWarningClass(n);
							break;
						case "radio":
							if (t.checkValidity())
							{
								i++;
								break
							}
							var s = t.parentElement;
							if (!s) break;
							var a = s.querySelector(".w-radio-input");
							a && e.view.addWarningClass(a);
							break;
						default:
							if (!t.checkValidity() || "email" === t.type && !O(t.value))
							{
								e.view.addWarningClass(t);
								break
							}
							i++;
						}
					}), i === t.length
				}
			},
			{
				key: "setAlert",
				value: function ()
				{
					this.view.alertInteraction || this.view.hideElement(this.view.alert, !0)
				}
			},
			{
				key: "showAlert",
				value: function ()
				{
					this.alertShown || (this.view.showAlert(), this.alertShown = !0)
				}
			},
			{
				key: "hideAlert",
				value: function ()
				{
					this.alertShown && (this.view.hideAlert(), this.alertShown = !1)
				}
			},
			{
				key: "observeSubmitText",
				value: function ()
				{
					var e = this,
						t = this.view.submitButton;
					new MutationObserver(function (i)
					{
						i.forEach(function (i)
						{
							"attributes" === i.type && "value" === i.attributeName && (e.view.next.textContent = t.value)
						})
					}).observe(this.view.submitButton,
					{
						attributes: !0
					})
				}
			},
			{
				key: "handleSubmit",
				value: function ()
				{
					this.view.disableButtons(), this.view.hideButtons()
				}
			}]), e
		}(),
		ua = ta;
	X.default = ua;
	var Y = {};

	function va(e, t)
	{
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function ea(e, t)
	{
		for (var i = 0; i < t.length; i++)
		{
			var n = t[i];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function wa(e, t, i)
	{
		return t && ea(e.prototype, t), i && ea(e, i), e
	}
	Object.defineProperty(Y, "__esModule",
	{
		value: !0
	});
	var xa = function ()
		{
			function e(t)
			{
				var i, n = t.alertSelector,
					r = t.alertText,
					o = t.backSelector,
					s = t.backText,
					a = t.completedPercentageSelector,
					l = t.currentStepSelector,
					c = t.formSelector,
					d = t.hiddeButtonsOnSubmit,
					h = void 0 === d || d,
					u = t.hiddenFormStep,
					f = void 0 === u ? 1 : u,
					m = t.nextSelector,
					y = t.nextText,
					v = t.scrollTopOnStepChange,
					p = void 0 !== v && v,
					w = t.sendHiddenForm,
					b = void 0 !== w && w,
					$ = t.warningClass;
				va(this, e);
				var E = document.querySelector(c);
				if (!E) throw new Error("No form was found with the selector ".concat(c));
				this.form = E;
				var k = document.querySelector(m);
				if (!k) throw new Error("No next button was found with the selector ".concat(m));
				if (this.next = k, o)
				{
					var x = document.querySelector(o);
					if (!x) throw new Error("No back button was found with the selector ".concat(o));
					this.back = x
				}
				if (n)
				{
					var S = document.querySelector(n);
					if (!S) throw new Error("No alert element was found with the selector ".concat(n));
					this.alert = S
				}
				var g = E.querySelector("input[type=\"submit\"]");
				if (!g) throw new Error("No next button was found with the selector ".concat(m));
				if (this.submitButton = g, l)
				{
					var H = document.querySelector(l);
					if (!H) throw new Error("No current step display element was found with the selector ".concat(l));
					this.currentStepDisplay = H
				}
				if (a)
				{
					var q = document.querySelector(a);
					if (!q) throw new Error("No completed percentage display element was found with the selector ".concat(a));
					this.completedPercentageDisplay = q
				}
				var T = E.querySelector(".w-slider");
				if (!T) throw new Error("No slider found inside the form, please add one.");
				this.slider = T;
				var C = T.querySelector(".w-slider-mask");
				if (!C) throw new Error("No mask found inside the slider!");
				this.mask = C, this.steps = T.querySelectorAll(".w-slide");
				var F = T.querySelector(".w-slider-arrow-right");
				if (!F) throw new Error("No right arrow found inside the slider!");
				this.rightArrow = F;
				var A = T.querySelector(".w-slider-arrow-left");
				if (!A) throw new Error("No left arrow found inside the slider!");
				this.leftArrow = A, this.sliderDots = T.querySelectorAll(".w-slider-dot"), this.navLinks = document.querySelectorAll("[data-msf-nav]"), this.nextText = y || this.next.textContent || "Next", this.backText = s, this.submitText = this.submitButton.value, this.warningClass = $, this.alertText = r, this.alertInteraction = null === (i = this.alert) || void 0 === i ? void 0 : i.querySelector("[data-msf=\"alert\"]"), this.scrollTopOnStepChange = p, this.hiddeButtonsOnSubmit = h, this.sendHiddenForm = b, this.hiddenFormStep = f >= 1 ? f : 1, this.inputs = this.getInputs()
			}
			return wa(e, [
			{
				key: "setMaskHeight",
				value: function (e)
				{
					this.mask.style.height = "", this.mask.style.height = "".concat(this.steps[e].offsetHeight, "px")
				}
			},
			{
				key: "getInputs",
				value: function (e)
				{
					var t = "number" == typeof e ? this.steps[e].querySelectorAll("input, select, textarea") : this.form.querySelectorAll("input, select, textarea");
					return Array.from(t)
				}
			},
			{
				key: "setButtonText",
				value: function (e)
				{
					var t = this,
						i = function (i)
						{
							var n = "back" === i ? t.back : t.next;
							if (n)
							{
								var r = G(n),
									o = "back" === i ? t.backText : t.nextText;
								if (r && Array.isArray(o) && o.length > 0)
									for (var s = function (t)
										{
											var i = o.findIndex(function (i)
											{
												return +i.step - 1 == e - t
											});
											if (i >= 0) return r.textContent = o[i].text, "break"
										}, a = 0; a <= e; a++)
									{
										if ("break" === s(a)) break
									}
							}
						};
					i("back");
					var n = G(this.next);
					n && e === this.steps.length - 1 ? n.textContent = this.submitText : n && "string" == typeof this.nextText && e === this.steps.length - 2 ? n.textContent = this.nextText : i("next")
				}
			},
			{
				key: "goNext",
				value: function ()
				{
					this.rightArrow.click()
				}
			},
			{
				key: "goBack",
				value: function ()
				{
					this.leftArrow.click()
				}
			},
			{
				key: "submitForm",
				value: function ()
				{
					this.submitButton.click()
				}
			},
			{
				key: "submitHiddenForm",
				value: function ()
				{
					this.sendHiddenForm && this.hiddenSubmitButton.click()
				}
			},
			{
				key: "addWarningClass",
				value: function (e)
				{
					this.warningClass && e.classList.add(this.warningClass)
				}
			},
			{
				key: "removeWarningClass",
				value: function (e)
				{
					this.warningClass && e.classList.remove(this.warningClass)
				}
			},
			{
				key: "hideElement",
				value: function (e)
				{
					var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					if (e)
					{
						var i = getComputedStyle(e);
						if ("all 0s ease 0s" === i.transition && (e.style.transition = "opacity 0.2s ease"), t && "none" !== i.display)
						{
							e.addEventListener("transitionend", function t()
							{
								e.style.display = "none", e.removeEventListener("transitionend", t)
							})
						}
						e.style.opacity = "0", this.disableElement(e)
					}
				}
			},
			{
				key: "showElement",
				value: function (e)
				{
					var t = this,
						i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					e && (i && (e.style.display = "block"), requestAnimationFrame(function ()
					{
						e.style.opacity = "", t.enableElement(e)
					}))
				}
			},
			{
				key: "disableElement",
				value: function (e)
				{
					e && (e.style.pointerEvents = "none")
				}
			},
			{
				key: "enableElement",
				value: function (e)
				{
					e && (e.style.pointerEvents = "")
				}
			},
			{
				key: "disableButtons",
				value: function ()
				{
					var e = this;
					this.disableElement(this.next), this.disableElement(this.back), this.navLinks.forEach(function (t)
					{
						return e.disableElement(t)
					})
				}
			},
			{
				key: "hideButtons",
				value: function ()
				{
					this.hiddeButtonsOnSubmit && (this.hideElement(this.next), this.back && this.hideElement(this.back))
				}
			},
			{
				key: "showAlert",
				value: function ()
				{
					this.alertText && alert(this.alertText), this.alert && (this.alertInteraction ? this.alertInteraction.click() : this.showElement(this.alert, !0))
				}
			},
			{
				key: "hideAlert",
				value: function ()
				{
					this.alert && (this.alertInteraction ? this.alertInteraction.click() : this.hideElement(this.alert, !0))
				}
			},
			{
				key: "scrollTop",
				value: function ()
				{
					this.scrollTopOnStepChange && window.scrollTo(
					{
						top: U(this.form),
						behavior: "smooth"
					})
				}
			},
			{
				key: "setValues",
				value: function (e, t)
				{
					t = V(t);
					var i = document.querySelector("[data-msf-value=\"".concat(e.id, "\"]")) || document.querySelector("[data-msf-value=\"".concat(e.name, "\"]"));
					if (i && (i.textContent = t), e.matches("[data-msf=\"hidden\"]"))
					{
						var n = this.hiddenForm.querySelector("#hidden-".concat(e.id));
						n instanceof HTMLInputElement && (n.value = t)
					}
				}
			},
			{
				key: "setStepsDisplay",
				value: function (e)
				{
					this.currentStepDisplay && (this.currentStepDisplay.textContent = ((e + 1)-1).toString()), this.completedPercentageDisplay && (this.completedPercentageDisplay.textContent = "".concat(Math.round(e / (this.steps.length - 1) * 100), "%"))
				}
			},
			{
				key: "createHiddenForm",
				value: function ()
				{
					var e, t = this;
					if (this.sendHiddenForm)
					{
						var i = this.form.parentElement;
						if (i) i.insertAdjacentHTML("afterend", "\n    <div class=\"w-form\" style=\"display: none;\">\n        <form id=\"msf-hidden-form\" name=\"MSF Hidden Form\" data-name=\"MSF Hidden Form\">\n            <input type=\"submit\" value=\"Submit\" data-wait=\"Please wait...\" />\n        </form>\n    </div>\n    "), this.hiddenForm = i.parentElement ? i.parentElement.querySelector("#msf-hidden-form") : document.querySelector("#msf-hidden-form"), this.hiddenSubmitButton = this.hiddenForm.querySelector("input[type=\"submit\"]"), this.form.querySelectorAll("[data-msf=\"hidden\"]").forEach(function (e)
						{
							var i = N(e) ? e : e.querySelector("input, select, textarea");
							if (i && !t.hiddenForm.querySelector("#hidden-".concat(e.id)))
							{
								var n = "<input type=\"hidden\" id=\"hidden-".concat(i.id, "\" name=\"").concat(i.name, "\" data-name=\"").concat(i.name, "\" />");
								t.hiddenForm.insertAdjacentHTML("beforeend", n)
							}
						}), window.Webflow && window.Webflow.destroy(), window.Webflow && window.Webflow.ready(), window.Webflow && (null === (e = window.Webflow.require("ix2")) || void 0 === e || e.init())
					}
				}
			}]), e
		}(),
		ya = xa;
	Y.default = ya;
	var I = {};

	function za($, e)
	{
		if (!($ instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	var fa = I && I.__importDefault || function ($)
	{
		return $ && $.__esModule ? $ :
		{
			default: $
		}
	};
	Object.defineProperty(I, "__esModule",
	{
		value: !0
	});
	var Aa = fa(X),
		Ba = fa(Y),
		Ca = function $(e)
		{
			za(this, $), this.view = new Ba.default(e), this.controller = new Aa.default(this.view)
		},
		Da = Ca;
	I.default = Da;
	var Z = {};
	oa(Z);

	function _(t)
	{
		var e = typeof t;
		return null != t && ("object" == e || "function" == e)
	}
	var Ea = "object" == typeof M && M && M.Object === Object && M;
	var Fa = "object" == typeof self && self && self.Object === Object && self,
		ga = Ea || Fa || Function("return this")();
	var aa = function ()
	{
		return ga.Date.now()
	};
	var Ga = /\s/;

	function Ha(t)
	{
		for (var e = t.length; e-- && Ga.test(t.charAt(e)););
		return e
	}
	var Ia = /^\s+/;

	function Ja(r)
	{
		return r ? r.slice(0, Ha(r) + 1).replace(Ia, "") : r
	}
	var P = ga.Symbol;
	var ha = Object.prototype,
		Ka = ha.hasOwnProperty,
		La = ha.toString,
		J = P ? P.toStringTag : void 0;

	function Ma($)
	{
		var r = Ka.call($, J),
			t = $[J];
		try
		{
			$[J] = void 0;
			var n = !0
		}
		catch (o)
		{}
		var a = La.call($);
		return n && (r ? $[J] = t : delete $[J]), a
	}
	var Na = Object.prototype,
		Oa = Na.toString;

	function Pa(t)
	{
		return Oa.call(t)
	}
	var Qa = "[object Null]",
		Ra = "[object Undefined]",
		ia = P ? P.toStringTag : void 0;

	function Sa($)
	{
		return null == $ ? void 0 === $ ? Ra : Qa : ia && ia in Object($) ? Ma($) : Pa($)
	}

	function Ta(t)
	{
		return null != t && "object" == typeof t
	}
	var Ua = "[object Symbol]";

	function Va($)
	{
		return "symbol" == typeof $ || Ta($) && Sa($) == Ua
	}
	var ja = NaN,
		Wa = /^[-+]0x[0-9a-f]+$/i,
		Xa = /^0b[01]+$/i,
		Ya = /^0o[0-7]+$/i,
		Za = parseInt;

	function ka($)
	{
		if ("number" == typeof $) return $;
		if (Va($)) return ja;
		if (_($))
		{
			var r = "function" == typeof $.valueOf ? $.valueOf() : $;
			$ = _(r) ? r + "" : r
		}
		if ("string" != typeof $) return 0 === $ ? $ : +$;
		$ = Ja($);
		var e = Xa.test($);
		return e || Ya.test($) ? Za($.slice(2), e ? 2 : 8) : Wa.test($) ? ja : +$
	}
	var $a = "Expected a function",
		_a = Math.max,
		ab = Math.min;

	function bb(o, r, t)
	{
		var i, e, n, $, a, u, v = 0,
			c = !1,
			f = !1,
			y = !0;
		if ("function" != typeof o) throw new TypeError($a);

		function W(r)
		{
			var t = i,
				n = e;
			return i = e = void 0, v = r, $ = o.apply(n, t)
		}

		function m(o)
		{
			var t = o - u;
			return void 0 === u || t >= r || t < 0 || f && o - v >= n
		}

		function A()
		{
			var o = aa();
			if (m(o)) return p(o);
			a = setTimeout(A, function (o)
			{
				var t = r - (o - u);
				return f ? ab(t, n - (o - v)) : t
			}(o))
		}

		function p(o)
		{
			return a = void 0, y && i ? W(o) : (i = e = void 0, $)
		}

		function d()
		{
			var o = aa(),
				t = m(o);
			if (i = arguments, e = this, u = o, t)
			{
				if (void 0 === a) return function (o)
				{
					return v = o, a = setTimeout(A, r), c ? W(o) : $
				}(u);
				if (f) return clearTimeout(a), a = setTimeout(A, r), W(u)
			}
			return void 0 === a && (a = setTimeout(A, r)), $
		}
		return r = ka(r) || 0, _(t) && (c = !!t.leading, n = (f = "maxWait" in t) ? _a(ka(t.maxWait) || 0, r) : n, y = "trailing" in t ? !!t.trailing : y), d.cancel = function ()
		{
			void 0 !== a && clearTimeout(a), v = 0, i = u = e = a = void 0
		}, d.flush = function ()
		{
			return void 0 === a ? $ : p(aa())
		}, d
	}
	Z.default = bb;
	var z = {};
	Object.defineProperty(z, "__esModule",
	{
		value: !0
	});
	var Q = (K = void 0, B = z.isFormElement = K, ba = z.throwError = B, z.isVisible = ba);
	z.convertToString = Q;
	var K = function (e)
	{
		return e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement
	};
	z.isFormElement = K;
	var B = function (e, r)
	{
		switch (r)
		{
		case "wrong-selector":
			throw new Error("The element with a selector ".concat(e, " has not been found. Please, check if you've set it correctly."));
		case "no-parent":
			throw new Error("The element with a selector ".concat(e, " hasn't got any parent with the [data-logic=\"parent\"] attibute."));
		case "wrong-action":
			throw new Error("No action (or wrong action name) has been provided for the ".concat(e, " selector."));
		case "wrong-operator":
			throw new Error("The operator of the selector ".concat(e, " is not valid."));
		}
	};
	z.throwError = B;
	var ba = function (e)
	{
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	};
	z.isVisible = ba, Q = function (e)
	{
		return "string" == typeof e ? e : "number" == typeof e ? e.toString() : e ? "true" : "false"
	}, z.convertToString = Q;
	var L = {};

	function cb(e, r)
	{
		var t;
		if ("undefined" == typeof Symbol || null == e[Symbol.iterator])
		{
			if (Array.isArray(e) || (t = db(e)) || r && e && "number" == typeof e.length)
			{
				t && (e = t);
				var a = 0,
					n = function () {};
				return {
					s: n,
					n: function ()
					{
						return a >= e.length ?
						{
							done: !0
						} :
						{
							done: !1,
							value: e[a++]
						}
					},
					e: function (e)
					{
						throw e
					},
					f: n
				}
			}
			throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}
		var i, o = !0,
			u = !1;
		return {
			s: function ()
			{
				t = e[Symbol.iterator]()
			},
			n: function ()
			{
				var e = t.next();
				return o = e.done, e
			},
			e: function (e)
			{
				u = !0, i = e
			},
			f: function ()
			{
				try
				{
					o || null == t.return || t.return()
				}
				finally
				{
					if (u) throw i
				}
			}
		}
	}

	function db(e, r)
	{
		if (e)
		{
			if ("string" == typeof e) return la(e, r);
			var t = Object.prototype.toString.call(e).slice(8, -1);
			return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? la(e, r) : void 0
		}
	}

	function la(e, r)
	{
		(null == r || r > e.length) && (r = e.length);
		for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
		return a
	}

	function eb(e, r)
	{
		if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
	}

	function ma(e, r)
	{
		for (var t = 0; t < r.length; t++)
		{
			var a = r[t];
			a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
		}
	}

	function fb(e, r, t)
	{
		return r && ma(e.prototype, r), t && ma(e, t), e
	}
	var gb = L && L.__importDefault || function (e)
	{
		return e && e.__esModule ? e :
		{
			default: e
		}
	};
	Object.defineProperty(L, "__esModule",
	{
		value: !0
	});
	var hb = gb(Z),
		ib = function ()
		{
			function e(r)
			{
				eb(this, e), this.logicList = [], this.submitHiddenInputs = !1, this.checkConditionsOnLoad = !0, Object.assign(this, r), this.store = [], this.init()
			}
			return fb(e, [
			{
				key: "init",
				value: function ()
				{
					var e = this;
					this.logicList.forEach(function (r)
					{
						e.addEvents(r), r.actions.forEach(function (r)
						{
							e.storeInputData(r.selector, r.action)
						})
					})
				}
			},
			{
				key: "addEvents",
				value: function (e)
				{
					var r = this;
					e.conditions.forEach(function (t)
					{
						var a = document.querySelector(t.selector);
						if (K(a))
						{
							var n = "radio" === a.type ? Array.from(document.querySelectorAll("input[name=\"".concat(a.name, "\"]"))) : [a];
							r.checkConditionsOnLoad && r.checkConditions(e);
							var i = hb.default(r.checkConditions.bind(r), 200),
								o = ["email", "number", "password", "search", "tel", "text", "textarea", "url"];
							n.forEach(function (t)
							{
								t.addEventListener("input", function ()
								{
									o.includes(a.type) ? i(e) : r.checkConditions(e)
								})
							})
						}
						else B(t.selector, "wrong-selector")
					})
				}
			},
			{
				key: "storeInputData",
				value: function (e, r)
				{
					var t = this;
					if ("custom" !== r)
					{
						var a = document.querySelector(e);
						if (a instanceof HTMLElement) this.getTargets(a).forEach(function (e)
						{
							var r = {
								element: e,
								required: e.required,
								disabled: e.disabled
							}; - 1 === t.store.findIndex(function (r)
							{
								return r.element === e
							}) && t.store.push(r)
						});
						else B(e, "wrong-selector")
					}
				}
			},
			{
				key: "checkConditions",
				value: function (e)
				{
					var r, t = this,
						a = e.conditions,
						n = e.operator,
						i = void 0 === n ? "and" : n,
						o = e.actions,
						u = !1,
						c = cb(a);
					try
					{
						for (c.s(); !(r = c.n()).done;)
						{
							var s = r.value,
								l = document.querySelector(s.selector);
							if (!K(l)) return void B(s.selector, "wrong-selector");
							var d = "";
							switch (l.type)
							{
							case "checkbox":
								d = Q(l.checked);
								break;
							case "radio":
								var $ = document.querySelector("input[name=\"".concat(l.name, "\"]:checked"));
								$ instanceof HTMLInputElement && (d = $.value);
								break;
							default:
								d = l.value;
							}
							var f = Q(s.value);
							switch (s.operator)
							{
							case "equal":
								u = d === f;
								break;
							case "not-equal":
								u = d !== f;
								break;
							case "contain":
								u = !!d.includes(f);
								break;
							case "not-contain":
								u = !d.includes(f);
								break;
							case "greater":
								u = +d > +f;
								break;
							case "greater-equal":
								u = +d >= +f;
								break;
							case "less":
								u = +d < +f;
								break;
							case "less-equal":
								u = +d <= +f;
								break;
							case "empty":
								u = 0 === d.length;
								break;
							case "filled":
								u = d.length > 0;
								break;
							default:
								B(s.selector, "wrong-operator");
							}
							if ("and" === i && !u) break;
							if ("or" === i && u) break
						}
					}
					catch (v)
					{
						c.e(v)
					}
					finally
					{
						c.f()
					}
					u && o.forEach(function (e)
					{
						t.triggerAction(e)
					})
				}
			},
			{
				key: "triggerAction",
				value: function (e)
				{
					var r = this,
						t = e.selector,
						a = e.action,
						n = e.clear,
						i = void 0 !== n && n,
						o = document.querySelector(t);
					if (o instanceof HTMLElement)
					{
						if ("custom" !== a)
						{
							var u = this.getTargets(o),
								c = !1;
							u.forEach(function (e)
							{
								var n = r.getStoredData(e),
									u = n.required,
									s = n.disabled,
									l = ba(e);
								switch (c || (c = r.triggerInteraction(o, a)), a)
								{
								case "show":
									r.showInput(e, o, c, u, s);
									break;
								case "hide":
									r.hideInput(e, o, c);
									break;
								case "enable":
									r.enableInput(e, l);
									break;
								case "disable":
									r.disableInput(e, l);
									break;
								case "require":
									r.requireInput(e, l);
									break;
								case "unrequire":
									r.unrequireInput(e, l);
									break;
								default:
									B(t, "wrong-action");
								}
								i && r.clearInput(e)
							})
						}
						else this.triggerInteraction(o, a);
					}
					else B(t, "wrong-selector")
				}
			},
			{
				key: "showInput",
				value: function (e, r, t, a, n)
				{
					t || (r.style.display = "block"), e.required = a, e.disabled = n
				}
			},
			{
				key: "hideInput",
				value: function (e, r, t)
				{
					t || (r.style.display = "none"), this.submitHiddenInputs || (e.disabled = !0), e.required = !1
				}
			},
			{
				key: "enableInput",
				value: function (e, r)
				{
					r && (e.disabled = !1), this.updateStoredData(e, "disabled", !1)
				}
			},
			{
				key: "disableInput",
				value: function (e, r)
				{
					r && (e.disabled = !0), this.updateStoredData(e, "disabled", !0)
				}
			},
			{
				key: "requireInput",
				value: function (e, r)
				{
					r && (e.required = !0), this.updateStoredData(e, "required", !0)
				}
			},
			{
				key: "unrequireInput",
				value: function (e, r)
				{
					r && (e.required = !1), this.updateStoredData(e, "required", !1)
				}
			},
			{
				key: "getTargets",
				value: function (e)
				{
					return K(e) ? [e] : Array.from(e.querySelectorAll("input, select, textarea"))
				}
			},
			{
				key: "triggerInteraction",
				value: function (e, r)
				{
					var t = "custom" === r ? e : e.querySelector(":scope > [data-logic=\"".concat(r, "\"]"));
					return t instanceof HTMLElement && (t.click(), !0)
				}
			},
			{
				key: "clearInput",
				value: function (e)
				{
					"checkbox" === e.type || "radio" === e.type ? e.checked = !1 : e.value = ""
				}
			},
			{
				key: "updateStoredData",
				value: function (e, r, t)
				{
					var a = this.store.findIndex(function (r)
					{
						return r.element === e
					});
					a > -1 && (this.store[a][r] = t)
				}
			},
			{
				key: "getStoredData",
				value: function (e)
				{
					return this.store.find(function (r)
					{
						return r.element === e
					})
				}
			}]), e
		}(),
		jb = ib;
	L.default = jb;
	var D = {},
		na = D && D.__importDefault || function ($)
		{
			return $ && $.__esModule ? $ :
			{
				default: $
			}
		};
	Object.defineProperty(D, "__esModule",
	{
		value: !0
	});
	var kb = na(I),
		lb = na(L);
	D = {
		MSF: kb.default,
		Logic: lb.default
	};
	if (typeof exports === "object" && typeof module !== "undefined")
	{
		module.exports = D
	}
	else if (typeof define === "function" && define.amd)
	{
		define(function ()
		{
			return D
		})
	}
	else
	{
		this["AWF"] = D
	}
})();
