# Swagger.MiscApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSnmpProperty**](MiscApi.md#getSnmpProperty) | **GET** /api/v1/snmp-property | Retrieves SNMP properties
[**postAuthToken**](MiscApi.md#postAuthToken) | **POST** /api/system/v1/auth/token | Generate Token
[**postFlowAnalysis**](MiscApi.md#postFlowAnalysis) | **POST** /api/v1/flow-analysis | Initiates a new flow analysis
[**postSnmpProperty**](MiscApi.md#postSnmpProperty) | **POST** /api/v1/snmp-property | Creates or updates SNMP properties


<a name="getSnmpProperty"></a>
# **getSnmpProperty**
> SystemPropertyListResult getSnmpProperty()

Retrieves SNMP properties

This method is used to get SNMP properties

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.MiscApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSnmpProperty(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SystemPropertyListResult**](SystemPropertyListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postAuthToken"></a>
# **postAuthToken**
> GenerateTokenResponse postAuthToken(request, authorization)

Generate Token

This method is used to generate token.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.MiscApi();

var request = new Swagger.GenerateTokenRequest(); // GenerateTokenRequest | request

var authorization = "Basic YWRtaW46TWFnbGV2MTIz"; // String | <username:password> of 64 based encoded string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postAuthToken(request, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**GenerateTokenRequest**](GenerateTokenRequest.md)| request | 
 **authorization** | **String**| &lt;username:password&gt; of 64 based encoded string | [default to Basic YWRtaW46TWFnbGV2MTIz]

### Return type

[**GenerateTokenResponse**](GenerateTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postFlowAnalysis"></a>
# **postFlowAnalysis**
> FlowAnalysisRequestResultOutput postFlowAnalysis(request)

Initiates a new flow analysis

Initiates a new flow analysis with periodic refresh and stat collection options. Returns a request id and a task id to get results and follow progress.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.MiscApi();

var request = new Swagger.FlowAnalysisRequest(); // FlowAnalysisRequest | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postFlowAnalysis(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**FlowAnalysisRequest**](FlowAnalysisRequest.md)| request | 

### Return type

[**FlowAnalysisRequestResultOutput**](FlowAnalysisRequestResultOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postSnmpProperty"></a>
# **postSnmpProperty**
> TaskIdResult postSnmpProperty(request)

Creates or updates SNMP properties

This method is used to add SNMP properties

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.MiscApi();

var request = new Swagger.SystemPropertyNameAndIntValueDTO(); // SystemPropertyNameAndIntValueDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postSnmpProperty(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SystemPropertyNameAndIntValueDTO**](SystemPropertyNameAndIntValueDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

