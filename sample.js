/* Sample File for Using the JS SDK */

/* Note: All callbacks are asynchronous in nature */

/* JS Wrapper and btoa requires */
var apiWrapper = require('./DnaJsApi/src/index');
var btoa = require('btoa');

/* Command Line Option Processing */
var nodeOptions = Object.freeze({"PROGRAM":0,
                                 "APPLICATION":1,
                                 "NAME":2,
                                 "USER":3,
                                 "PASSWORD":4});
var clusterName="";
var clusterUser="";
var clusterPassword="";

process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
    switch (index) {
        case nodeOptions.NAME:
            clusterName = val;
            break;
        case nodeOptions.USER:
            clusterUser = val;
            break;
        case nodeOptions.PASSWORD:
            clusterPassword = val;
            break;
    }
});

/* Create Client for using API */
var apiClient = new apiWrapper.ApiClient;
apiClient.enableCookies = false;
apiClient.basePath = "https://" + clusterName;

/* Use same client handle for authentication */
var authApi = new apiWrapper.MiscApi(apiClient);
var networkDeviceApi = new apiWrapper.NetworkDeviceApi(apiClient);

/* Frame header token for basic authentication username:password encoded in base64 format */
var tok = btoa(clusterUser + ":" + clusterPassword);

authApi.postAuthToken({}, "Basic " + tok , function(error, data, response) {
      var tokenCookie = response.body.Token;
      apiClient.defaultHeaders = {
          'X-AUTH-TOKEN': tokenCookie
        };
    /* API To retrieve network device count */
    networkDeviceApi.getNetworkDeviceCount(function(error, data, response) {
          console.log(response);
        });
    /* API To retrieve all network devices */
    networkDeviceApi.getNetworkDevice(null, function(error, data, response) {
          console.log(response);
        });
});
