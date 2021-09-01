import React from "react";

export default function Information(props) {
  return props.data ? (
    <div>
      <h4 className="text-bold border-bottom pb-1">About</h4>
      <div className="border-bottom py-2">
        <span className="fw-bold">Symbol: </span>
        <span>{props.data.symbol}</span>
      </div>
      <div className="border-bottom py-2">
        <span className="fw-bold">CEO: </span>
        <span>{props.data.CEO}</span>
      </div>
      <div className="border-bottom py-2">
        <span className="fw-bold">Website: </span>
        <span>{props.data.website}</span>
      </div>
      <div className="border-bottom py-2">
        <span className="fw-bold">Description: </span>
        <br />
        <span>{props.data.description}</span>
      </div>
      <div className="border-bottom py-2">
        <span className="fw-bold">Country: </span>
        <span>{props.data.country}</span>
      </div>
    </div>
  ) : null;
}
