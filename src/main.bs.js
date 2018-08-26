// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Json = require("@glennsl/bs-json/src/Json.bs.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Layout = require("./Layout.bs.js");
var Students = require("./students");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Server = require("react-dom/server");

function classes(json) {
  return /* record */[
          /* class04 */Json_decode.field("class04", (function (param) {
                  return Json_decode.array(Json_decode.string, param);
                }), json),
          /* class05 */Json_decode.field("class05", (function (param) {
                  return Json_decode.array(Json_decode.string, param);
                }), json),
          /* class06 */Json_decode.field("class06", (function (param) {
                  return Json_decode.array(Json_decode.string, param);
                }), json),
          /* class07 */Json_decode.field("class07", (function (param) {
                  return Json_decode.array(Json_decode.string, param);
                }), json),
          /* mentors */Json_decode.field("mentors", (function (param) {
                  return Json_decode.array(Json_decode.string, param);
                }), json),
          /* operations */Json_decode.field("operations", (function (param) {
                  return Json_decode.array(Json_decode.string, param);
                }), json)
        ];
}

var Decode = /* module */[/* classes */classes];

function renderStudents(type_, students) {
  return React.createElement("table", {
              className: "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp"
            }, React.createElement("tbody", undefined, $$Array.map((function (name) {
                        return React.createElement("tr", undefined, React.createElement("td", {
                                        className: "mdl-data-table__cell--non-numeric"
                                      }, React.createElement("h4", {
                                            style: {
                                              margin: "0px"
                                            }
                                          }, name)), React.createElement("td", undefined, React.createElement("a", {
                                            className: "mdl-button mdl-js-button mdl-button--raised mdl-button--colored",
                                            href: "/print?name=" + (name + ("&type=" + type_))
                                          }, "Print")));
                      }), students)));
}

var component = ReasonReact.statelessComponent("App");

function make(students, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return ReasonReact.element(undefined, undefined, Layout.make(/* array */[
                              React.createElement("h2", undefined, "Class 04"),
                              React.createElement("div", undefined, renderStudents("Class 04", students[/* class04 */0])),
                              React.createElement("h2", undefined, "Class 05"),
                              React.createElement("div", undefined, renderStudents("Class 05", students[/* class05 */1])),
                              React.createElement("h2", undefined, "Class 06"),
                              React.createElement("div", undefined, renderStudents("Class 06", students[/* class06 */2])),
                              React.createElement("h2", undefined, "Class 07"),
                              React.createElement("div", undefined, renderStudents("Class 07", students[/* class07 */3])),
                              React.createElement("h2", undefined, "Mentors"),
                              React.createElement("div", undefined, renderStudents("Mentor", students[/* mentors */4])),
                              React.createElement("h2", undefined, "Core"),
                              React.createElement("div", undefined, renderStudents("Core", students[/* operations */5])),
                              React.createElement("h2", undefined, "Print custom name"),
                              React.createElement("form", {
                                    className: "mdl-color--white mdl-shadow--2dp mdl-grid  ",
                                    action: "/print"
                                  }, React.createElement("div", {
                                        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
                                      }, React.createElement("input", {
                                            className: "mdl-textfield__input",
                                            name: "name",
                                            type: "text"
                                          }), React.createElement("label", {
                                            className: "mdl-textfield__label",
                                            htmlFor: "name"
                                          }, "Name")), React.createElement("div", {
                                        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
                                      }, React.createElement("input", {
                                            className: "mdl-textfield__input",
                                            name: "type",
                                            type: "text"
                                          }), React.createElement("label", {
                                            className: "mdl-textfield__label",
                                            htmlFor: "type"
                                          }, "Type")), React.createElement("button", {
                                        className: "mdl-button mdl-js-button mdl-button--raised mdl-button--colored",
                                        type: "submit"
                                      }, "Print"))
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

function output() {
  var students = classes(Json.parseOrRaise(Students));
  return Server.renderToString(ReasonReact.element(undefined, undefined, make(students, /* array */[])));
}

exports.Decode = Decode;
exports.renderStudents = renderStudents;
exports.component = component;
exports.make = make;
exports.output = output;
/* component Not a pure module */
