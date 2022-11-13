const URL = "https://query2.finance.yahoo.com/v8/finance/chart/%5EGSPC";

async function getStockData() {
  try {
    const res = await axios.get(URL);
    console.log(res.data);
  } catch (error) {
    console.log("OH NOOOO");
    console.log(error);
  }
}

export { getStockData };
