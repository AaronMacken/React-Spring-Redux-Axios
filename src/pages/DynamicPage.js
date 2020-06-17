import React from "react";
import PropTypes from "prop-types";

export default function DynamicPage({ match }) {
  const returnContent = match.params.id ? <div>{match.params.id}</div> : <div>No Prop passed</div>;
  return <div>{returnContent}</div>;
}

DynamicPage.propTypes = {
  match: PropTypes.object.isRequired,
};
