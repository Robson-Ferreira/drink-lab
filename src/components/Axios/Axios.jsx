import { useState, useEffect } from 'react'
import axios from 'axios';

import { getParams } from '../../util/apiUtils';
import ApiEndpoints from '../../util/apiEndpoints';

const Axios = ({ 
    onError, 
    onSuccess, 
    run,
    ...props 
}) => {

    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const initialize = () => {
            submitAsync();
        };
        if (run) {
            initialize();
        }
    }, [JSON.stringify(run)]);
  
    const submitAsync = async () => {
        await submit({});
    };
  
    const error = error => {
        if (onError) {
            onError(error?.response || {});
        } else {
            throw error;
        }
    };
  
    const success = ({ data }) => {
        if (onSuccess) {
            onSuccess(data);
        }
        setResponse(data);
    };
  
    const submit = async data => {
        const { body } = data || {};
        if (body) props = { ...props, body };
        try {
            setLoading(true);
            const response = (await http({ ...props })) || {};
            success(response);
        } catch (err) {
            error(err);
        }
        setLoading(false);
    };
  
    const { children = null } = props;
  
    if (typeof children === 'function') {
        return children({
            submit,
            loading,
            response,
        });
    } else {
        return children;
    }
};

const http = async ({
    api,
    body,
    params,
    method = 'get',
  }) => {
    const urlBase = process.env.REACT_APP_API_URL;
  
    let { url } = ApiEndpoints.endpoints[api] || {};
    url = `${urlBase}${getParams(url, params)}`;
  
    try {
        const response = await axios({
            url,
            method,
            data: body
        });
        return response;
    } catch (error) {
      throw error;
    }
};

export { http }
export default Axios;
