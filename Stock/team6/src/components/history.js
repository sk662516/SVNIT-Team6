import React from "react";
import { clearHistory } from "../services/history";

export default function History(props) {
  const handleClick = () => {
    clearHistory().catch(err=>console.log(err))
  }
  return (
    <div style={{height:"75px"}}>
      <div className="d-flex justify-content-between">

        <h4 className="my-2">{props.type}</h4>
      <button className='btn' onClick={handleClick}>Clear History</button>
      </div>
      <div className="d-flex flex-wrap">
        {props.data ? (
          props.data.length > 0 ? (
            props.data.map((search) => (
              <h5 key={search}>
                <span
                  onClick={() => props.setCompany(search)}
                  style={{ cursor: "pointer" }}
                  className="badge rounded-pill bg-secondary mx-2"
                >
                  {search}
                </span>
              </h5>
            ))
          ) : (
            <p className="text-muted">No recent search data availbale</p>
          )
        ) : null}
      </div>
    </div>
  );
}
