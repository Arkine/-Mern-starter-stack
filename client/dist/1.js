(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/components/form/Form.js":
/*!*************************************!*\
  !*** ./src/components/form/Form.js ***!
  \*************************************/
/*! exports provided: default, FormConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormConsumer", function() { return FormConsumer; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _FormContexts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormContexts */ "./src/components/form/FormContexts.js");













var Container = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].form.withConfig({
  displayName: "Form__Container",
  componentId: "sc-2hlf3m-0"
})(["border-radius:4px;padding:1rem;"]);

var Form =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Form, _React$Component);

  function Form(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Form);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Form).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this)), "handleFieldChange", function (e) {
      _this.updateField(e.target.name, e.target.value);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this)), "updateField", function (field, val) {
      _this.setState({
        fields: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.state.fields, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()({}, field, val))
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this)), "onSubmit", function (e) {
      e.preventDefault();

      var isValid = _this.validate();

      var _this$state = _this.state,
          errors = _this$state.errors,
          values = _this$state.values;

      _this.props.onSubmit({
        errors: errors,
        values: values
      }, e);
    });

    _this.state = {
      errors: {},
      values: {}
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Form, [{
    key: "validate",
    value: function validate() {
      var errors = this.props.validator(this.state.values); // If there are errors

      if (errors.length) {
        this.setState({
          errors: errors
        });
        return false;
      }

      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onSubmit = _this$props.onSubmit,
          rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["onSubmit"]);

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_FormContexts__WEBPACK_IMPORTED_MODULE_12__["ValuesContext"].Provider, {
        value: this.state.values
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_FormContexts__WEBPACK_IMPORTED_MODULE_12__["ErrorsContext"].Provider, {
        value: this.state.errors
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_FormContexts__WEBPACK_IMPORTED_MODULE_12__["SetValueContext"].Provider, {
        value: this.updateField
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Container, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        onSubmit: this.onSubmit
      }, rest), this.props.children))));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);


var FormConsumer = function FormConsumer(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_FormContexts__WEBPACK_IMPORTED_MODULE_12__["ErrorsContext"].Consumer, null, function (errors) {
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_FormContexts__WEBPACK_IMPORTED_MODULE_12__["ValuesContext"].Consumer, null, function (values) {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_FormContexts__WEBPACK_IMPORTED_MODULE_12__["SetValueContext"].Consumer, null, function (setValue) {
        return children({
          errors: errors,
          values: values,
          setValue: setValue
        });
      });
    });
  });
};

/***/ }),

/***/ "./src/components/form/FormContexts.js":
/*!*********************************************!*\
  !*** ./src/components/form/FormContexts.js ***!
  \*********************************************/
/*! exports provided: ValuesContext, ErrorsContext, SetValueContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesContext", function() { return ValuesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsContext", function() { return ErrorsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetValueContext", function() { return SetValueContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ValuesContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var ErrorsContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var SetValueContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(function () {});


/***/ }),

/***/ "./src/components/form/FormGroup.js":
/*!******************************************!*\
  !*** ./src/components/form/FormGroup.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FormGroup",
  componentId: "sc-1pzjd0u-0"
})(["margin-bottom:1rem;"]));

/***/ }),

/***/ "./src/components/form/FormLabel.js":
/*!******************************************!*\
  !*** ./src/components/form/FormLabel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label.withConfig({
  displayName: "FormLabel",
  componentId: "aqsoui-0"
})([""]));

/***/ }),

/***/ "./src/components/form/TextInput.js":
/*!******************************************!*\
  !*** ./src/components/form/TextInput.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextInput; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Form */ "./src/components/form/Form.js");









var Container = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "TextInput__Container",
  componentId: "sc-1trozwn-0"
})([""]);
Container.Error = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].span.withConfig({
  displayName: "TextInput__Error",
  componentId: "sc-1trozwn-1"
})(["padding:0.25rem;background-color:", ";color:#fff;"], function (props) {
  return props.theme.colors.error;
});
Container.Input = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].input.withConfig({
  displayName: "TextInput__Input",
  componentId: "sc-1trozwn-2"
})(["border:1px solid ", ";"], function (props) {
  return props.err ? props.theme.colors.error : props.theme.colors.gray;
});

var TextInput =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TextInput, _React$PureComponent);

  function TextInput() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TextInput);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(TextInput).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TextInput, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_8__["FormConsumer"], null, function (_ref) {
        var errors = _ref.errors,
            values = _ref.values,
            setValue = _ref.setValue;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Container.Input, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          value: values[_this.props.name],
          onChange: function onChange(e) {
            e.preventDefault();
            setValue(_this.props.name, e.target.value);
          }
        }, _this.props)), errors[_this.props.name] && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Container.Error, null, errors[_this.props.name]));
      });
    }
  }]);

  return TextInput;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);



/***/ }),

/***/ "./src/components/form/index.js":
/*!**************************************!*\
  !*** ./src/components/form/index.js ***!
  \**************************************/
/*! exports provided: Form, FormGroup, TextInput, FormLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./src/components/form/Form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormGroup */ "./src/components/form/FormGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return _FormGroup__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextInput */ "./src/components/form/TextInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return _TextInput__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormLabel */ "./src/components/form/FormLabel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormLabel", function() { return _FormLabel__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./src/views/Signup/Signup.js":
/*!************************************!*\
  !*** ./src/views/Signup/Signup.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SignupStyled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignupStyled */ "./src/views/Signup/SignupStyled.js");
/* harmony import */ var app_components_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/components/form */ "./src/components/form/index.js");









var Signup =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Signup, _React$PureComponent);

  function Signup() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Signup);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Signup).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Signup, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_SignupStyled__WEBPACK_IMPORTED_MODULE_6__["Container"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Signup"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(app_components_form__WEBPACK_IMPORTED_MODULE_7__["Form"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(app_components_form__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(app_components_form__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
        htmlFor: "username"
      }, "Username"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(app_components_form__WEBPACK_IMPORTED_MODULE_7__["TextInput"], {
        type: "text",
        name: "username"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(app_components_form__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
        htmlFor: "password"
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(app_components_form__WEBPACK_IMPORTED_MODULE_7__["TextInput"], {
        type: "password",
        name: "password"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(app_components_form__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
        htmlFor: "confirm-password"
      }, "confirm-password"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(app_components_form__WEBPACK_IMPORTED_MODULE_7__["TextInput"], {
        type: "password",
        name: "confirm-password"
      }))));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);



/***/ }),

/***/ "./src/views/Signup/SignupStyled.js":
/*!******************************************!*\
  !*** ./src/views/Signup/SignupStyled.js ***!
  \******************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "SignupStyled__Container",
  componentId: "sc-1czvypl-0"
})([""]);

/***/ }),

/***/ "./src/views/Signup/index.js":
/*!***********************************!*\
  !*** ./src/views/Signup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signup */ "./src/views/Signup/Signup.js");

/* harmony default export */ __webpack_exports__["default"] = (_Signup__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=1.js.map