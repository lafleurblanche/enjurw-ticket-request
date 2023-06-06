/**
 * API送信サンプル
 * @param {RequestInfo} url - 通信APIURL
 * @param {any} requestData - 要求情報
 */
async function FetcherPostCerinthe(url: RequestInfo, requestData: any) {

  const method = "POST";
  const body = JSON.stringify(requestData);
  console.log(body);
  const headers = {
    'Content-Type': 'application/json'
  };
  try {
    const res = await fetch(url, {method, headers, body})
    const json = await res.json();
    console.log("json: ", json);
    return json;
  } catch (e) {
    throw e;
  }
}

export default FetcherPostCerinthe;
