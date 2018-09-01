let component = ReasonReact.statelessComponent("ConfigPage");

let make = (~event, ~chromebook, _children) => {
  ...component,
  render: self =>
    <div>
      <Layout>
        <h2> {ReasonReact.string("Config")} </h2>
        <form
          action="/config/save"
          className="mdl-color--white mdl-shadow--2dp"
          style={ReactDOMRe.Style.make(~padding="20px", ())}>
          <div
            className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input
              className="mdl-textfield__input"
              type_="text"
              name="event"
              value=event
            />
            <label className="mdl-textfield__label" htmlFor="event">
              {ReasonReact.string("Event Name")}
            </label>
          </div>
          <div>
            <label
              className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
              htmlFor="chromebook">
              <input
                type_="checkbox"
                id="chromebook"
                name="chromebook"
                className="mdl-checkbox__input"
                checked=chromebook
              />
              <span className="mdl-checkbox__label">
                {ReasonReact.string("Chromebook")}
              </span>
            </label>
          </div>
          <div>
            <button
              className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
              type_="submit">
              {ReasonReact.string("Save")}
            </button>
          </div>
        </form>
      </Layout>
    </div>,
};

let render = config => {
  let chromeProp = config##chromebook == "on" ? true : false;
  ReactDOMServerRe.renderToString(
    ReasonReact.element(
      make(~event=config##event, ~chromebook=chromeProp, [||]),
    ),
  );
};
