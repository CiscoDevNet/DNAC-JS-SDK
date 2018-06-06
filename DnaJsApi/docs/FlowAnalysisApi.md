# Swagger.FlowAnalysisApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteFlowAnalysisByFlowAnalysisId**](FlowAnalysisApi.md#deleteFlowAnalysisByFlowAnalysisId) | **DELETE** /api/v1/flow-analysis/${flowAnalysisId} | Deletes a flow analysis request
[**getFlowAnalysis**](FlowAnalysisApi.md#getFlowAnalysis) | **GET** /api/v1/flow-analysis | Retrieves a summary of all flow analyses stored
[**getFlowAnalysisByFlowAnalysisId**](FlowAnalysisApi.md#getFlowAnalysisByFlowAnalysisId) | **GET** /api/v1/flow-analysis/${flowAnalysisId} | Retrieves result of a previously requested flow analysis


<a name="deleteFlowAnalysisByFlowAnalysisId"></a>
# **deleteFlowAnalysisByFlowAnalysisId**
> TaskIdResult deleteFlowAnalysisByFlowAnalysisId(flowAnalysisId)

Deletes a flow analysis request

Deletes a flow analysis request by its id

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.FlowAnalysisApi();

var flowAnalysisId = "flowAnalysisId_example"; // String | Flow analysis request id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteFlowAnalysisByFlowAnalysisId(flowAnalysisId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flowAnalysisId** | **String**| Flow analysis request id | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFlowAnalysis"></a>
# **getFlowAnalysis**
> FlowAnalysisListOutput getFlowAnalysis(opts)

Retrieves a summary of all flow analyses stored

Retrieves a summary of all flow analyses stored. Filters the results by given parameters.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.FlowAnalysisApi();

var opts = { 
  'periodicRefresh': true, // Boolean | Is analysis periodically refreshed?
  'sourceIP': "sourceIP_example", // String | Source IP address
  'destIP': "destIP_example", // String | Destination IP adress
  'sourcePort': "sourcePort_example", // String | Source port
  'destPort': "destPort_example", // String | Destination port
  'gtCreateTime': "gtCreateTime_example", // String | Analyses requested after this time
  'ltCreateTime': "ltCreateTime_example", // String | Analyses requested before this time
  'protocol': "protocol_example", // String | Protocol
  'status': "status_example", // String | Status
  'taskId': "taskId_example", // String | Task ID
  'lastUpdateTime': "lastUpdateTime_example", // String | Last update time
  'limit': "limit_example", // String | Number of resources returned
  'offset': "offset_example", // String | Start index of resources returned (1-based)
  'order': "order_example", // String | Order by this field
  'sortBy': "sortBy_example" // String | Sort by this field
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFlowAnalysis(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **periodicRefresh** | **Boolean**| Is analysis periodically refreshed? | [optional] 
 **sourceIP** | **String**| Source IP address | [optional] 
 **destIP** | **String**| Destination IP adress | [optional] 
 **sourcePort** | **String**| Source port | [optional] 
 **destPort** | **String**| Destination port | [optional] 
 **gtCreateTime** | **String**| Analyses requested after this time | [optional] 
 **ltCreateTime** | **String**| Analyses requested before this time | [optional] 
 **protocol** | **String**| Protocol | [optional] 
 **status** | **String**| Status | [optional] 
 **taskId** | **String**| Task ID | [optional] 
 **lastUpdateTime** | **String**| Last update time | [optional] 
 **limit** | **String**| Number of resources returned | [optional] 
 **offset** | **String**| Start index of resources returned (1-based) | [optional] 
 **order** | **String**| Order by this field | [optional] 
 **sortBy** | **String**| Sort by this field | [optional] 

### Return type

[**FlowAnalysisListOutput**](FlowAnalysisListOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFlowAnalysisByFlowAnalysisId"></a>
# **getFlowAnalysisByFlowAnalysisId**
> PathResponseResult getFlowAnalysisByFlowAnalysisId(flowAnalysisId)

Retrieves result of a previously requested flow analysis

Retrieves result of a previously requested flow analysis by its Flow Analysis id

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.FlowAnalysisApi();

var flowAnalysisId = "flowAnalysisId_example"; // String | Flow analysis request id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFlowAnalysisByFlowAnalysisId(flowAnalysisId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flowAnalysisId** | **String**| Flow analysis request id | 

### Return type

[**PathResponseResult**](PathResponseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

