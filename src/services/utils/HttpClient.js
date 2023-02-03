import ApiError from "../../errors/ApiError";

class HttpClient {
    constructor(baseUrl)
    {
        this.baseUrl = baseUrl;
    }

    get(path,options)
    {
      return this.makeResquest(path, {
        method: "GET",
        headers:options.headers,
        signal: options?.signal,
    });
    }

    post(path,options)
    {
        return this.makeResquest(path, {
            method: 'POST',
            body: options?.body,
            headers: options?.headers,
            signal: options?.signal,
        });
      
    }

    put(path,options)
    {
        return this.makeResquest(path, {
            method: 'PUT',
            body: options?.body,
            headers: options?.headers,
        });
    }

    delete(path)
    {
        return this.makeResquest(path, {
            method: 'DELETE',
        });
    }
      

    async makeResquest(path, options)
    {
        const headers = new Headers();

        if(options.body)
        {
            headers.append('Content-Type', 'application/json')
        }

        if(options.headers)
        {
            Object.entries(options.headers).forEach(([name, value]) =>{
                headers.append(name, value);
            })
        }

        const response = await fetch(`${this.baseUrl}${path}`,{
            method: options.method,
            body: JSON.stringify(options.body),
            headers,
            signal : options.signal,
        });

        const contentType = response.headers.get('Content-Type');
        
        const body = contentType?.includes("application/json") && await response.json();

        if(response.ok)
        {
         return body;

        }
             
        throw new ApiError(response,body);
    }

  
}

export default HttpClient;