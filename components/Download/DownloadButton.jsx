import React from "react";
import ReactTooltip from "react-tooltip";

const DownloadButton = (props) => {
  const { name, description } = props;
  const tipName = name + "-tooltip";

  return (
    <div className="row align-items-center data-download-button">
      <div className="col d-flex mr-auto">
        <button className="btn btn-primary">
          <i className="pe-7s-download" />
          {name}
        </button>
        <div className="col align-self-center">
          <i
            data-tip
            data-effect="solid"
            data-place="right"
            data-for={tipName}
            className="pe-7s-info"
          />
        </div>
      </div>
      <ReactTooltip id={tipName} aria-haspopup="true">
        <div className="button-tooltip">
          <p>{description}</p>
        </div>
      </ReactTooltip>
    </div>
  );
};

export default DownloadButton;
