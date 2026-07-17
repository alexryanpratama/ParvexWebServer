export default {
  async fetch(request) {
    const url = new URL(request.url);

    const response = await fetch(
      "http://node.anya.papaloid.com:2013" + url.pathname + url.search,
      {
        method: request.method,
        headers: request.headers,
        body: request.body
      }
    );

    return response;
  }
}