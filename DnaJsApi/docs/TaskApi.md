# Swagger.TaskApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTask**](TaskApi.md#getTask) | **GET** /api/v1/task | Get filtered tasks
[**getTaskByTaskId**](TaskApi.md#getTaskByTaskId) | **GET** /api/v1/task/${taskId} | getTruststoreFileCount
[**getTaskCount**](TaskApi.md#getTaskCount) | **GET** /api/v1/task/count | Get task count
[**getTaskOperationByOperationIdRange**](TaskApi.md#getTaskOperationByOperationIdRange) | **GET** /api/v1/task/operation/${operationId}/${offset}/${limit} | getTaskByOperationId
[**getTaskTreeByTaskId**](TaskApi.md#getTaskTreeByTaskId) | **GET** /api/v1/task/${taskId}/tree | Get Task Tree


<a name="getTask"></a>
# **getTask**
> TaskDTOListResponse getTask(opts)

Get filtered tasks

This method is used to retrieve task(s) based on various filters

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TaskApi();

var opts = { 
  'startTime': "startTime_example", // String | This is the epoch start time from which tasks need to be fetched
  'endTime': "endTime_example", // String | This is the epoch end time upto which audit records need to be fetched
  'data': "data_example", // String | Fetch tasks that contains this data
  'errorCode': "errorCode_example", // String | Fetch tasks that have this error code
  'serviceType': "serviceType_example", // String | Fetch tasks with this service type
  'username': "username_example", // String | Fetch tasks with this username
  'progress': "progress_example", // String | Fetch tasks that contains this progress
  'isError': "isError_example", // String | Fetch tasks ended as success or failure. Valid values: true, false
  'failureReason': "failureReason_example", // String | Fetch tasks that contains this failure reason
  'parentId': "parentId_example", // String | Fetch tasks that have this parent Id
  'offset': "offset_example", // String | offset
  'limit': "limit_example", // String | limit
  'sortBy': "sortBy_example", // String | Sort results by this field
  'order': "order_example" // String | Sort order - asc or dsc
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTask(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | **String**| This is the epoch start time from which tasks need to be fetched | [optional] 
 **endTime** | **String**| This is the epoch end time upto which audit records need to be fetched | [optional] 
 **data** | **String**| Fetch tasks that contains this data | [optional] 
 **errorCode** | **String**| Fetch tasks that have this error code | [optional] 
 **serviceType** | **String**| Fetch tasks with this service type | [optional] 
 **username** | **String**| Fetch tasks with this username | [optional] 
 **progress** | **String**| Fetch tasks that contains this progress | [optional] 
 **isError** | **String**| Fetch tasks ended as success or failure. Valid values: true, false | [optional] 
 **failureReason** | **String**| Fetch tasks that contains this failure reason | [optional] 
 **parentId** | **String**| Fetch tasks that have this parent Id | [optional] 
 **offset** | **String**| offset | [optional] 
 **limit** | **String**| limit | [optional] 
 **sortBy** | **String**| Sort results by this field | [optional] 
 **order** | **String**| Sort order - asc or dsc | [optional] 

### Return type

[**TaskDTOListResponse**](TaskDTOListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaskByTaskId"></a>
# **getTaskByTaskId**
> TaskDTOResponse getTaskByTaskId(taskId)

getTruststoreFileCount

This method is used to retrieve a task based on their id

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TaskApi();

var taskId = "taskId_example"; // String | UUID of the Task


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaskByTaskId(taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| UUID of the Task | 

### Return type

[**TaskDTOResponse**](TaskDTOResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaskCount"></a>
# **getTaskCount**
> CountResult getTaskCount(opts)

Get task count

This method is used to retrieve task count

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TaskApi();

var opts = { 
  'startTime': "startTime_example", // String | This is the epoch start time from which tasks need to be fetched
  'endTime': "endTime_example", // String | This is the epoch end time upto which audit records need to be fetched
  'data': "data_example", // String | Fetch tasks that contains this data
  'errorCode': "errorCode_example", // String | Fetch tasks that have this error code
  'serviceType': "serviceType_example", // String | Fetch tasks with this service type
  'username': "username_example", // String | Fetch tasks with this username
  'progress': "progress_example", // String | Fetch tasks that contains this progress
  'isError': "isError_example", // String | Fetch tasks ended as success or failure. Valid values: true, false
  'failureReason': "failureReason_example", // String | Fetch tasks that contains this failure reason
  'parentId': "parentId_example" // String | Fetch tasks that have this parent Id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaskCount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | **String**| This is the epoch start time from which tasks need to be fetched | [optional] 
 **endTime** | **String**| This is the epoch end time upto which audit records need to be fetched | [optional] 
 **data** | **String**| Fetch tasks that contains this data | [optional] 
 **errorCode** | **String**| Fetch tasks that have this error code | [optional] 
 **serviceType** | **String**| Fetch tasks with this service type | [optional] 
 **username** | **String**| Fetch tasks with this username | [optional] 
 **progress** | **String**| Fetch tasks that contains this progress | [optional] 
 **isError** | **String**| Fetch tasks ended as success or failure. Valid values: true, false | [optional] 
 **failureReason** | **String**| Fetch tasks that contains this failure reason | [optional] 
 **parentId** | **String**| Fetch tasks that have this parent Id | [optional] 

### Return type

[**CountResult**](CountResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaskOperationByOperationIdRange"></a>
# **getTaskOperationByOperationIdRange**
> TaskDTOListResponse getTaskOperationByOperationIdRange(operationId, offset, limit)

getTaskByOperationId

This method is used to find root tasks assoicated to an operationid 

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TaskApi();

var operationId = "operationId_example"; // String | operationId

var offset = 56; // Number | Index, minimum value is 0

var limit = 56; // Number | The maximum value of {limit} supported is 500. <br/> Base 1 indexing for {limit}, minimum value is 1


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaskOperationByOperationIdRange(operationId, offset, limit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operationId** | **String**| operationId | 
 **offset** | **Number**| Index, minimum value is 0 | 
 **limit** | **Number**| The maximum value of {limit} supported is 500. &lt;br/&gt; Base 1 indexing for {limit}, minimum value is 1 | 

### Return type

[**TaskDTOListResponse**](TaskDTOListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaskTreeByTaskId"></a>
# **getTaskTreeByTaskId**
> TaskDTOListResponse getTaskTreeByTaskId(taskId)

Get Task Tree

This method is used to retrieve a task with its children tasks based on their id

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TaskApi();

var taskId = "taskId_example"; // String | UUID of the Task


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaskTreeByTaskId(taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| UUID of the Task | 

### Return type

[**TaskDTOListResponse**](TaskDTOListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

