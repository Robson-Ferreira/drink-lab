import * as api from '../services/api';

export function request(functionRequest) {
    return new Promise((resolve, reject) => {
      functionRequest
        .then(request => {
          resolve(request);
        })
        .catch(error => {
          reject(error.response);
        });
    });
}

export { api };