[@bs.module] external students: string = "./students";
type classes = {
  class04: array(string),
  class05: array(string),
  class06: array(string),
  class07: array(string),
  mentors: array(string),
  operations: array(string),
};

module Decode = {
  let classes = json =>
    Json.Decode.{
      class04: json |> field("class04", array(string)),
      class05: json |> field("class05", array(string)),
      class06: json |> field("class06", array(string)),
      class07: json |> field("class07", array(string)),
      mentors: json |> field("mentors", array(string)),
      operations: json |> field("operations", array(string)),
    };
};

let renderStudents = students =>
  <table
    className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
    <tbody>
      {
        ReasonReact.array(
          Array.map(
            name =>
              <tr>
                <td className="mdl-data-table__cell--non-numeric">
                  <h4 style={ReactDOMRe.Style.make(~margin="0px", ())}>
                    {ReasonReact.string(name)}
                  </h4>
                </td>
                <td>
                  <a
                    href={"/print?name=" ++ name}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                    {ReasonReact.string("Print")}
                  </a>
                </td>
              </tr>,
            students,
          ),
        )
      }
    </tbody>
  </table>;

let component = ReasonReact.statelessComponent("App");

let make = (~students, _children) => {
  ...component,
  render: self =>
    <Layout>
      <h2> {ReasonReact.string("Class 04")} </h2>
      <div> {renderStudents(students.class04)} </div>
      <h2> {ReasonReact.string("Class 05")} </h2>
      <div> {renderStudents(students.class05)} </div>
      <h2> {ReasonReact.string("Class 06")} </h2>
      <div> {renderStudents(students.class06)} </div>
      <h2> {ReasonReact.string("Class 07")} </h2>
      <div> {renderStudents(students.class07)} </div>
      <h2> {ReasonReact.string("Mentors")} </h2>
      <div> {renderStudents(students.mentors)} </div>
      <h2> {ReasonReact.string("Operations")} </h2>
      <div> {renderStudents(students.operations)} </div>
      <h2> {ReasonReact.string("Print custom name")} </h2>
      <form
        action="/print"
        className="mdl-color--white mdl-shadow--2dp mdl-grid  ">
        <div
          className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type_="text" name="name" />
          <label className="mdl-textfield__label" htmlFor="name">
            {ReasonReact.string("Name")}
          </label>
        </div>
        <button
          className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
          type_="submit">
          {ReasonReact.string("Print")}
        </button>
      </form>
    </Layout>,
};

let output = () => {
  let students = students |> Json.parseOrRaise |> Decode.classes;
  ReactDOMServerRe.renderToString(
    ReasonReact.element(make(~students, [||])),
  );
};
