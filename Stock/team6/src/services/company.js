export async function getCompanyData(company) {
  var formdata = new FormData();
  
  formdata.append("from", "null");
  formdata.append("to", "null");
  formdata.append("symbol", company);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const res = await fetch("http://localhost:8000/api/filter", requestOptions);
  const data = await res.json()
  console.log(data)
  return data.data;
}
export async function getCompanyInfo(company) {
  const url =
    "https://cloud.iexapis.com/stable/stock/" +
    company +
    "/company/quote?token=pk_7b5d7f3300d343af9d1fd122c3a77e82";
  
  const res = await fetch(url);
  const data = await res.json();

  return data;
}
