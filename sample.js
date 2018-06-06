var apiWrapper = require('./DnaJsApi/src/index');
var btoa = require('btoa');

var nodeOptions = Object.freeze({"PROGRAM":0,
                                 "APPLICATION":1,
                                 "NAME":2,
                                 "USER":3,
                                 "PASSWORD":4});

console.log(nodeOptions.PROGRAM);

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

var apiClient = new apiWrapper.ApiClient;
var defaultApi = new apiWrapper.NetworkDeviceApi(apiClient);

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
       defaultApi.getNetworkDeviceCount(function(error, data, response) {
           console.log(response);
       });
       defaultApi.getNetworkDevice(null, function(error, data, response) {
           console.log(error);
           console.log(response);
       });
  });

