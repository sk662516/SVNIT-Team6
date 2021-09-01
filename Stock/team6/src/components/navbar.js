import React from "react";

export default function Navbar(props) {
  return (
    <nav style={{ height: "55px" }} className="navbar bg-primary text-light">
      <div className="container">
        {props.searching ? (
          <form className="d-flex m-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={props.query}
              onChange={(e) => props.setQuery(e.target.value)}
            />
            <button
              onClick={() => props.setSearching(false)}
              className="btn btn-outline-light text-light"
              type="submit"
            >
              Close
            </button>
          </form>
        ) : (
          <div className="d-flex justify-content-between w-100 align-items-center">
            <span className="fs-3 fw-bold">Dashboard</span>
            <button
              className="btn btn-outline-light text-light"
              onClick={() => props.setSearching(true)}
            >
              Search
            </button>
            <a href="/api/logout" className="btn btn-outline-light text-light">
              {" "}
              Logout
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
