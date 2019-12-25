import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler.
 */
@Injectable({
    providedIn: 'root',
})
export class ApiService {

    public url: string = 'http://localhost:3000'; // set this url if you want to reach another endpoint

    constructor(public http: HttpClient) {
        // NOTHING LEFT TO DO
    }

    /**
     * Performs a GET-request to specified endpoint with specified params and request options
     * @method post
     * @param  endpoint endpoint of URI
     * @param  params   params of the request
     * @param  reqOpts  request options (headers, ...)
     * @return          Observable
     */
    public get(endpoint: string, params?: any, reqOpts?: any): any {
        if (!reqOpts) {
            reqOpts = {
                params: new HttpParams()
            };
        }

        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new HttpParams();
            for (const k in params) {
                if (params.hasOwnProperty(k)) {
                    reqOpts.params = reqOpts.params.set(k, params[k]);
                }
            }
        }
        console.log("endpoint called", endpoint);

        return this.http.get(endpoint, reqOpts);
    }

    /**
     * Performs a POST-request to specified endpoint with specified body and request options
     * @method post
     * @param  endpoint endpoint of URI
     * @param  body     body of the request
     * @param  reqOpts  request options (headers, ...)
     * @return          Observable
     */
    public post(endpoint: string, body: any, reqOpts?: any): any {
        console.log("endpoint called", endpoint);

        return this.http.post(endpoint, body, reqOpts);
    }

    /**
      * Performs a PUT-request to specified endpoint with specified body and request options
      * @method post
      * @param  endpoint endpoint of URI
      * @param  body     body of the request
      * @param  reqOpts  request options (headers, ...)
      * @return          Observable
     */
    public put(endpoint: string, body: any, reqOpts?: any): any {
        return this.http.put(endpoint, body, reqOpts);
    }

    /**
      * Performs a DELETE-request to specified endpoint with specified request options
      * @method post
      * @param  endpoint endpoint of URI
      * @param  body     body of the request
      * @param  reqOpts  request options (headers, ...)
      * @return          Observable
     */
    public delete(endpoint: string, reqOpts?: any): any {
        return this.http.delete(endpoint, reqOpts);
    }

    /**
      * Performs a PATCH-request to specified endpoint with specified body and request options
      * @method post
      * @param  endpoint endpoint of URI
      * @param  body     body of the request
      * @param  reqOpts  request options (headers, ...)
      * @return          Observable
     */
    public patch(endpoint: string, body: any, reqOpts?: any): any {
        return this.http.put(endpoint, body, reqOpts);
    }
}
