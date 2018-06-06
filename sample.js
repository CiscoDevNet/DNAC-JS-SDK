/* Sample File for Using the JS SDK */


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

/* Authentication with DNAC */
var apiClient = new apiWrapper.ApiClient;
var networkDeviceApi = new apiWrapper.NetworkDeviceApi(apiClient);

apiClient.enableCookies = false;
apiClient.basePath = "https://" + clusterName;

var authTypes = [];
var contentTypes = [];
var accepts = [];

var tok = btoa(clusterUser + ":" + clusterPassword);

var pathParams = {};
var queryParams = {};
var collectionQueryParams = {};
var headerParams = {
  'Authorization': "Basic " + tok 
};
var formParams = {};
var postBody = null;
var authNames = [];
var contentTypes = ['application/json'];
var accepts = [];
var returnType = apiWrapper.GenerateTokenResponse;
var tokenCookie;

apiClient.callApi(
  '/api/system/v1/auth/token', 'POST',
  pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
  authTypes, contentTypes, accepts, returnType, function(error, data, response) {
       console.log(response.body.Token);
       tokenCookie = response.body.Token;
       console.log(tokenCookie);
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

