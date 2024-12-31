import * as React from "react";
class MyPropsList extends React.Component {
  render() {
    const { itms } = this.props;
    return (
      <ul>
        {itms.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    );
  }
}
export default MyPropsList;

// import * as React from "react";
// class MyPropButton extends React.Component {
//   render() {
//     const { xyz, abc } = this.props;
//     return <button disabled={xyz}>{abc}</button>;
//   }
// }
// export default MyPropButton;
