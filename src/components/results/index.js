import React from "react";
import "./result.scss";

class Results extends React.Component {
  render() {
    return (
      <section>
        <pre>
          {this.props.result
            ? JSON.stringify(this.props.result, undefined, 2)
            : null}
        </pre>
      </section>
    );
  }
}

export default Results;
