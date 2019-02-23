import superagent from 'superagent';

export const createRequest = (apiConfig) => {
  const {method, baseUrl, path, query, headers = {}, body} = apiConfig;
  const url = baseUrl + path;
  const superAgentInstance = superagent[method.toLowerCase()](url)
    .query(query)
    .set(headers)
    .send(body);

  const promise = new Promise((resolve, reject) => {
    superAgentInstance.end((error, response) => {
      if (error) {
        return reject(response || {error});
      }
      return resolve(response);
    });
  });
  return promise;
};

export default createRequest;
