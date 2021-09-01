export default async function updateHistory(company) {
  if (company) {
    const data = await fetch("http://localhost:8000/api/history-details");

    const res = await data.json();
    const result = res.info.map((search) => search.history);

    if (!result.includes(company)) {
      var formdata = new FormData();

      formdata.append("history", company);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      const res = await fetch(
        "http://localhost:8000/api/add-history",
        requestOptions
      );

      return true;
    }
  }
}
export async function clearHistory() {
  await fetch("http://localhost:8000/api/clear-history")
  return;
}
