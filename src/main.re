[@bs.module] external students: string = "./students";
type classes = {
  class04: array(string),
  class05: array(string),
  class06: array(string),
};

module Decode = {
  let classes = json =>
    Json.Decode.{
      class04: json |> field("class04", array(string)),
      class05: json |> field("class05", array(string)),
      class06: json |> field("class06", array(string)),
    };
};

let renderStudents = students =>
  ReasonReact.array(
    Array.map(
      name =>
        <div>
          {ReasonReact.string(name)}
          <a href={"/print?name=" ++ name} className="print">
            {ReasonReact.string("Print")}
          </a>
        </div>,
      students,
    ),
  );

let component = ReasonReact.statelessComponent("App");

let make = (~students, _children) => {
  ...component,
  render: self =>
    <div>
      <h1> {ReasonReact.string("Nametags")} </h1>
      <h2> {ReasonReact.string("Class 04")} </h2>
      <div> {renderStudents(students.class04)} </div>
      <h2> {ReasonReact.string("Class 05")} </h2>
      <div> {renderStudents(students.class05)} </div>
      <h2> {ReasonReact.string("Class 06")} </h2>
      <div> {renderStudents(students.class06)} </div>
      <h2> {ReasonReact.string("Print custom name")} </h2>
      <form action="/print">
        <input type_="text" name="name" />
        <button> {ReasonReact.string("Print")} </button>
      </form>
    </div>,
};

let output = () => {
  let students = students |> Json.parseOrRaise |> Decode.classes;
  ReactDOMServerRe.renderToString(
    ReasonReact.element(make(~students, [||])),
  );
};
