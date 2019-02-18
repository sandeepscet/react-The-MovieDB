export function buildUrl(api_key, base, path, params) {
  params = {
    ...params,
    api_key
  };
  const pathWithParans = Object.keys(params)
    .map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
    })
    .join('&');

  return base + path + '?' + pathWithParans;
}
