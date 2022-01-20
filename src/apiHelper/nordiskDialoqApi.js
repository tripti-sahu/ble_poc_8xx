
const HttpClient = loadLibrary("HttpClient").httpClient;

class Utils{
    ToANSIString (data) {
        var ansiString = "";
        if (Array.isArray(data)) {
            for(var i = 0; i < data.length; ++i) {
                if(typeof(data[i] === "number")) {
                    ansiString += String.fromCharCode(data[i]);
                    if(data[i] === 0) {
                        break;
                    }
                } else {
                    throw new TypeError("ToANSIString(): array element is not a number");
                }
            }
            return ansiString;
        } else {
            throw new TypeError("ToANSIString(): function argument should be an array");
        }
    }
}

class NordiskDialoqRequestHelper {
    constructor() {
        this.SendCustomRequest = this.SendCustomRequest.bind(this);
        this.SetUserCredentials = this.SetUserCredentials.bind(this);
        this.GetUserCredentials = this.GetUserCredentials.bind(this);
        this.userCredentials = {
            userId : "w584jbm3",
            userPassword : "QyJvdVxv"
        }
    }
    
    ProcessRequest(opts, headers, respType) {
        let isSuccess = false;
        let attemptNumber = 0;
        let response = null;
        console.log(`inside Process Request 1`)
        do {
            if (attemptNumber > 0) {
                console.log(`Request retry #${attemptNumber}...`);
            }
            
            response = this._processRequest(opts, headers, respType);

            if (!response.error) {
                isSuccess = true;
            }
            attemptNumber++;
        } while (!isSuccess && attemptNumber < 4);

        return response;
    }
    
    _processRequest(opts, headers, respType) {
        console.log(`inside _Process Request 2`)

        console.log('Request path: ' + opts.url.path);
        let resp = {};
        let responseHeaders = {
            ContentLength : null,
            ContentType : null
        };
        // opts.receiveTimeout = 120000;

        this._internetConnection = new HttpClient(opts, null);
        this._internetConnection.Request(
            function (err, code, data, respHeaders) {
                if (err) {
                    console.log('Request executed with error: ' + err);
                    resp.error = true;
                    return 0;
                }
                else {
                    console.log(`inside Internet Connection 3`)

                    resp.statusCode = code;
                    console.log(`Status Code: ${code}`);
                    console.log("Response stringify: " + JSON.stringify(resp));
                    if (code !== 204) {
                        resp.headers = [`content-length:${respHeaders.ContentLength}`, `content-type:${respHeaders.ContentType}`];
                    }
                    if (data && data.length > 0) {
                        let utils = new Utils();
                        console.log(`Data: ${data}`)
                        resp.body = utils.ToANSIString(data);
                        console.log(`data ${data}`)
                        console.log(`resp ${resp}`)
                        console.log(`resp ${resp.body}`)
                        console.log(`responser ${respHeaders}`)
                        console.log(`response body ${respHeaders.body}`)
                        // resp.body = data;
                    }
                    
                    console.log("Response stringify: " + JSON.stringify(resp));

                    resp.error = false;

                    return 0;
                }
            },
            headers.join('\r\n'),
            respType,
            false,
            responseHeaders
        );

    
        return resp;
    }

    generateAndProcessRequest(opt, method, path, body, authNeeded) {
        let httpConfig = {
            header: [`x-api-key:${opt.apiKey}`],
            options: {
                url: {
                    hostname: opt.baseHost,
                    port: opt.port
                },
            },
            responseType: 'application/json' // TODO set proper value "string"?
        }

        if (body) {
            httpConfig.header.push('content-type:application/json');
            httpConfig.options.body = JSON.stringify(body);
        };

        if (authNeeded) {
            let credentials = this.GetUserCredentials();
            let credentialsStr = `${credentials.nutrinoId}:${credentials.nutrinoPassword}`;
            // httpConfig.header.push(`authorization:Basic ${utils.encode(credentialsStr)}`); // base64 encode
        };
        httpConfig.options.method = method;
        httpConfig.options.url.path = opt.basePath + path;
        console.log(`httpConfig ${httpConfig}`);
        console.log(`httpConfig ${httpConfig.header}`);
        console.log(`httpConfig ${httpConfig.responseType}`);
        console.log(`opt ${opt}`);
        console.log(`method ${method}`);
        console.log(`path ${path}`);
        console.log(`body ${body}`);
        console.log(`authNeeded ${authNeeded}`);
        return this.ProcessRequest(httpConfig.options, httpConfig.header, httpConfig.responseType);
    }

    SendRequest(stepComment, ...args) {
        let thisObj = this;
        let result;
        Step(stepComment, function() {
            result = thisObj.generateAndProcessRequest(...args);
        });
        return result;
    }

    SendCustomRequest(...args) {
        return this.SendRequest("Send custom request to doses", ...args);
    }

    SetUserCredentials(id, password) {
        this.userCredentials.nutrinoId = id;
        this.userCredentials.nutrinoPassword = password;
    }

    GetUserCredentials() {
        return this.userCredentials;
    }
}

class Dose {
    constructor(requestHelper) {
        this.doseConfigs = {
            // basePath : "/index.php",
            // baseHost : "raspberrypi.local",
            basePath : "/v1",
            baseHost : "127.0.0.1",
            port : "5002",
            apiKey : ""
        };
        this.requestHelper = requestHelper;
    }

    Reconfigure(config) {
        this.doseConfigs = config;
    }

    ActivateBle( ) {
        return this.requestHelper.SendRequest(
            "Log dose",
            this.doseConfigs,
            'GET',
            `/ble-activate`,
            undefined,
            false
        );
    };

    LogDoses( bodyObj) {
        return this.requestHelper.SendRequest(
            "Log dose",
            this.doseConfigs,
            'POST',
            `/doses`,
            bodyObj,
            false
        );
    };

    DeleteDoses() {
        return this.requestHelper.SendRequest(
            "Delete doses",
            this.doseConfigs,
            'DELETE',
            `/doses`,
            undefined,
            false
        );
    }
   
    AddDoses(bodyObj) {
        return this.requestHelper.SendRequest(
            "Add Doses",
            this.doseConfigs,
            'PUT',
            `/doses`,
            bodyObj,
            false
        );
    };

    ReplaceDoses(bodyObj) {
        console.log(`bodyOBJ ${bodyObj}`)
        return this.requestHelper.SendRequest(
            "Replace Doses",
            this.doseConfigs,
            'POST',
            // ``,
            `/doses`,
            bodyObj,
            false
        );
    }

}
library.init = function () {
    let nordiskDialoqRequestHelper = new NordiskDialoqRequestHelper();
    let DoseObj = new Dose(nordiskDialoqRequestHelper);
    
    Object.defineProperty(exports,"Dose",{
        configurable: false,
        get: function() {
           return DoseObj;
        }
    });
  
}