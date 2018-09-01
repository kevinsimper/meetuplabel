let component = ReasonReact.statelessComponent("Layout");

let make = children => {
  ...component,
  render: self =>
    <html>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://code.getmdl.io/1.3.0/material.blue-pink.min.css"
        />
        <script src="https://code.getmdl.io/1.3.0/material.min.js" />
      </head>
      <body>
        <div
          className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">
                {ReasonReact.string("NameTags")}
              </span>
              <div className="mdl-layout-spacer" />
              <nav className="mdl-navigation mdl-layout--large-screen-only">
                <a className="mdl-navigation__link" href="/">
                  {ReasonReact.string("Frontpage")}
                </a>
                <a className="mdl-navigation__link" href="/config">
                  {ReasonReact.string("Config")}
                </a>
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">
              {ReasonReact.string("Categories")}
            </span>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="/#class04">
                {ReasonReact.string("Class 04")}
              </a>
              <a className="mdl-navigation__link" href="/#class05">
                {ReasonReact.string("Class 05")}
              </a>
              <a className="mdl-navigation__link" href="/#class06">
                {ReasonReact.string("Class 06")}
              </a>
              <a className="mdl-navigation__link" href="/#class07">
                {ReasonReact.string("Class 07")}
              </a>
              <a className="mdl-navigation__link" href="/#mentors">
                {ReasonReact.string("Mentors")}
              </a>
              <a className="mdl-navigation__link" href="/#core">
                {ReasonReact.string("Core")}
              </a>
              <a className="mdl-navigation__link" href="/#printself">
                {ReasonReact.string("Print Self")}
              </a>
            </nav>
          </div>
          <main className="mdl-layout__content mdl-color--grey-100">
            <div
              className="page-content"
              style={ReactDOMRe.Style.make(~padding="8px", ())}>
              <div style={ReactDOMRe.Style.make(~padding="20px", ())}>
                ...children
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>,
};
