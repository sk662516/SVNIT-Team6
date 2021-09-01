import "./App.css";
import Navbar from "./components/navbar";
import Charts from "./components/charts";
import History from "./components/history";
import Information from "./components/information";
import { useEffect, useState } from "react";
import { getCompanyData, getCompanyInfo } from "./services/company";
import updateHistory from "./services/history";
import Search from "./services/search";

function App() {
  const [company, setCompany] = useState();
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState();
  const [info, setInfo] = useState();

  useEffect(() => {
    updateHistory(company);
    setQuery("");
    setSearching(false);

    if (company) {
      getCompanyInfo(company).then((res) => setInfo(res));
    }
  }, [company]);

  useEffect(() => {
    Search(query).then((res) => {
      console.log(res);
      setResults(res);
    });
  }, [query]);

  return (
    <div className="App">
      <Navbar
        searching={searching}
        setSearching={setSearching}
        query={query}
        setQuery={setQuery}
      />
      <div className="container">
        {searching ? (
          <History
            setCompany={setCompany}
            type={query ? "Search Results" : "Recent Search"}
            data={results}
          />
        ) : null}
        {company ? (
          <div className="my-5">
            <h2 className="border-bottom pb-3 text-uppercase">{company}</h2>
            <div className="d-flex">
              <div className="col-9">
                <Charts company={company} />
              </div>
              <div className="col-3">
                <Information data={info} />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center my-5">
            <h2>Welcome To Dashboard</h2>
            <h5 className="fw-light text-muted">
              Dashboard provide you stock analysis
            </h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
