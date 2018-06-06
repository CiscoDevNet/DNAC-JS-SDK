# Swagger.DiscoveryApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDiscovery**](DiscoveryApi.md#deleteDiscovery) | **DELETE** /api/v1/discovery | Deletes all discovery
[**deleteDiscoveryById**](DiscoveryApi.md#deleteDiscoveryById) | **DELETE** /api/v1/discovery/${id} | Deletes the discovery specified by id
[**deleteDiscoveryRange**](DiscoveryApi.md#deleteDiscoveryRange) | **DELETE** /api/v1/discovery/${startIndex}/${recordsToDelete} | Deletes the discovery in the given range
[**getDiscoveryAutoCompleteById**](DiscoveryApi.md#getDiscoveryAutoCompleteById) | **GET** /api/v1/discovery/${id}/autoComplete | Retrieve autoComplete values from a discovery based on id
[**getDiscoveryById**](DiscoveryApi.md#getDiscoveryById) | **GET** /api/v1/discovery/${id} | Retrieves the discovery specified by id
[**getDiscoveryCount**](DiscoveryApi.md#getDiscoveryCount) | **GET** /api/v1/discovery/count | Retrieves the number of discoveries
[**getDiscoveryJob**](DiscoveryApi.md#getDiscoveryJob) | **GET** /api/v1/discovery/job | Retrieves the list of discovery jobs for the given IP
[**getDiscoveryJobById**](DiscoveryApi.md#getDiscoveryJobById) | **GET** /api/v1/discovery/${id}/job | Retrieves list of discovery jobs for the specified discovery id
[**getDiscoveryNetworkDeviceByIdRange**](DiscoveryApi.md#getDiscoveryNetworkDeviceByIdRange) | **GET** /api/v1/discovery/${id}/network-device/${startIndex}/${recordsToReturn} | Retrieves the range of network devices discovered for the given discovery
[**getDiscoveryNetworkDeviceCountById**](DiscoveryApi.md#getDiscoveryNetworkDeviceCountById) | **GET** /api/v1/discovery/${id}/network-device/count | Retrieves the number of network devices discovered in the discovery specified by id
[**getDiscoveryNetworkNetworkDeviceById**](DiscoveryApi.md#getDiscoveryNetworkNetworkDeviceById) | **GET** /api/v1/discovery/${id}/network-device | Retrieves the network devices discovered in the discovery specified by id
[**getDiscoveryRange**](DiscoveryApi.md#getDiscoveryRange) | **GET** /api/v1/discovery/${startIndex}/${recordsToReturn} | Retrieves the discovery in the given range
[**getDiscoverySummaryById**](DiscoveryApi.md#getDiscoverySummaryById) | **GET** /api/v1/discovery/${id}/summary | Retrieve network devices from a discovery on given filters
[**postDiscovery**](DiscoveryApi.md#postDiscovery) | **POST** /api/v1/discovery | Starts a new discovery process and returns a task-id
[**putDiscovery**](DiscoveryApi.md#putDiscovery) | **PUT** /api/v1/discovery | Updates an existing discovery specified by id - only for starting/stopping the discovery


<a name="deleteDiscovery"></a>
# **deleteDiscovery**
> TaskIdResult deleteDiscovery()

Deletes all discovery

Stops all the discoveries and removes them

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DiscoveryApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDiscovery(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDiscoveryById"></a>
# **deleteDiscoveryById**
> TaskIdResult deleteDiscoveryById(id)

Deletes the discovery specified by id

Stops the discovery for the given ID and removes it

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DiscoveryApi();

var id = "id_example"; // String | Discovery ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDiscoveryById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Discovery ID | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDiscoveryRange"></a>
# **deleteDiscoveryRange**
> TaskIdResult deleteDiscoveryRange(startIndex, recordsToDelete)

Deletes the discovery in the given range

Stops discovery for the given range and removes them

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DiscoveryApi();

var startIndex = 56; // Number | Start index

var recordsToDelete = 56; // Number | Number of records to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDiscoveryRange(startIndex, recordsToDelete, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startIndex** | **Number**| Start index | 
 **recordsToDelete** | **Number**| Number of records to delete | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiscoveryAutoCompleteById"></a>
# **getDiscoveryAutoCompleteById**
> SuccessResultList getDiscoveryAutoCompleteById(id, opts)

Retrieve autoComplete values from a discovery based on id

Gets the autoComplete values from a discovery job

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DiscoveryApi();

var id = "id_example"; // String | id

var opts = { 
  'taskId': "taskId_example", // String | taskId
  'ipAddress': "ipAddress_example", // String | ipAddress
  'pingStatus': "pingStatus_example", // String | pingStatus
  'snmpStatus': "snmpStatus_example", // String | snmpStatus
  'cliStatus': "cliStatus_example", // String | cliStatus
  'netconfStatus': "netconfStatus_example", // String | netconfStatus
  'httpStatus': "httpStatus_example" // String | httpStatus
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiscoveryAutoCompleteById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **taskId** | **String**| taskId | [optional] 
 **ipAddress** | **String**| ipAddress | [optional] 
 **pingStatus** | **String**| pingStatus | [optional] 
 **snmpStatus** | **String**| snmpStatus | [optional] 
 **cliStatus** | **String**| cliStatus | [optional] 
 **netconfStatus** | **String**| netconfStatus | [optional] 
 **httpStatus** | **String**| httpStatus | [optional] 

### Return type

[**SuccessResultList**](SuccessResultList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiscoveryById"></a>
# **getDiscoveryById**
> DiscoveryNIOResult getDiscoveryById(id)

Retrieves the discovery specified by id

Gets discovery by ID

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DiscoveryApi();

var id = "id_example"; // String | Discovery ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiscoveryById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Discovery ID | 

### Return type

[**DiscoveryNIOResult**](DiscoveryNIOResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiscoveryCount"></a>
# **getDiscoveryCount**
> CountResult getDiscoveryCount()

Retrieves the number of discoveries

Gets the count of all available discovery jobs

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DiscoveryApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiscoveryCount(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CountResult**](CountResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiscoveryJob"></a>
# **getDiscoveryJob**
> DiscoveryJobNIOListResult getDiscoveryJob(ipAddress, opts)

Retrieves the list of discovery jobs for the given IP

Gets the list of discovery jobs for the given IP

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DiscoveryApi();

var ipAddress = "ipAddress_example"; // String | ipAddress

var opts = { 
  'offset': 56, // Number | offset
  'limit': 56, // Number | limit
  'name': "name_example" // String | name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiscoveryJob(ipAddress, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipAddress** | **String**| ipAddress | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **name** | **String**| name | [optional] 

### Return type

[**DiscoveryJobNIOListResult**](DiscoveryJobNIOListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiscoveryJobById"></a>
# **getDiscoveryJobById**
> DiscoveryJobNIOListResult getDiscoveryJobById(id, opts)

Retrieves list of discovery jobs for the specified discovery id

Gets the list of discovery jobs for the given id. The result can optionally be filtered based on IP

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DiscoveryApi();

var id = "id_example"; // String | Discovery ID

var opts = { 
  'offset': 56, // Number | offset
  'limit': 56, // Number | limit
  'ipAddress': "ipAddress_example" // String | ipAddress
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiscoveryJobById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Discovery ID | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **ipAddress** | **String**| ipAddress | [optional] 

### Return type

[**DiscoveryJobNIOListResult**](DiscoveryJobNIOListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiscoveryNetworkDeviceByIdRange"></a>
# **getDiscoveryNetworkDeviceByIdRange**
> NetworkDeviceNIOListResult getDiscoveryNetworkDeviceByIdRange(id, startIndex, recordsToReturn, opts)

Retrieves the range of network devices discovered for the given discovery

Gets the network devices discovered for the given discovery and for the given range. The maximum number of records that could be retrieved is 500

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DiscoveryApi();

var id = "id_example"; // String | Discovery ID

var startIndex = 56; // Number | Start index

var recordsToReturn = 56; // Number | Number of records to return

var opts = { 
  'taskId': "taskId_example" // String | taskId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiscoveryNetworkDeviceByIdRange(id, startIndex, recordsToReturn, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Discovery ID | 
 **startIndex** | **Number**| Start index | 
 **recordsToReturn** | **Number**| Number of records to return | 
 **taskId** | **String**| taskId | [optional] 

### Return type

[**NetworkDeviceNIOListResult**](NetworkDeviceNIOListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiscoveryNetworkDeviceCountById"></a>
# **getDiscoveryNetworkDeviceCountById**
> CountResult getDiscoveryNetworkDeviceCountById(id, opts)

Retrieves the number of network devices discovered in the discovery specified by id

Gets the count of network devices discovered in the given discovery

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DiscoveryApi();

var id = "id_example"; // String | Discovery ID

var opts = { 
  'taskId': "taskId_example" // String | taskId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiscoveryNetworkDeviceCountById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Discovery ID | 
 **taskId** | **String**| taskId | [optional] 

### Return type

[**CountResult**](CountResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiscoveryNetworkNetworkDeviceById"></a>
# **getDiscoveryNetworkNetworkDeviceById**
> NetworkDeviceNIOListResult getDiscoveryNetworkNetworkDeviceById(id, opts)

Retrieves the network devices discovered in the discovery specified by id

Gets the network devices discovered for the given discovery

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DiscoveryApi();

var id = "id_example"; // String | id

var opts = { 
  'taskId': "taskId_example" // String | taskId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiscoveryNetworkNetworkDeviceById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **taskId** | **String**| taskId | [optional] 

### Return type

[**NetworkDeviceNIOListResult**](NetworkDeviceNIOListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiscoveryRange"></a>
# **getDiscoveryRange**
> DiscoveryNIOListResult getDiscoveryRange(startIndex, recordsToReturn)

Retrieves the discovery in the given range

Gets the discovery for the range specified

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DiscoveryApi();

var startIndex = 56; // Number | Start index

var recordsToReturn = 56; // Number | Number of records to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiscoveryRange(startIndex, recordsToReturn, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startIndex** | **Number**| Start index | 
 **recordsToReturn** | **Number**| Number of records to return | 

### Return type

[**DiscoveryNIOListResult**](DiscoveryNIOListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiscoverySummaryById"></a>
# **getDiscoverySummaryById**
> CountResult getDiscoverySummaryById(id, opts)

Retrieve network devices from a discovery on given filters

Gets the network devices from a discovery job based on given filters

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DiscoveryApi();

var id = "id_example"; // String | id

var opts = { 
  'taskId': "taskId_example", // String | taskId
  'sortBy': "sortBy_example", // String | sortBy
  'sortOrder': "sortOrder_example", // String | sortOrder
  'ipAddress': ["ipAddress_example"], // [String] | ipAddress
  'pingStatus': ["pingStatus_example"], // [String] | pingStatus
  'snmpStatus': ["snmpStatus_example"], // [String] | snmpStatus
  'cliStatus': ["cliStatus_example"], // [String] | cliStatus
  'netconfStatus': ["netconfStatus_example"], // [String] | netconfStatus
  'httpStatus': ["httpStatus_example"] // [String] | httpStatus
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiscoverySummaryById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **taskId** | **String**| taskId | [optional] 
 **sortBy** | **String**| sortBy | [optional] 
 **sortOrder** | **String**| sortOrder | [optional] 
 **ipAddress** | [**[String]**](String.md)| ipAddress | [optional] 
 **pingStatus** | [**[String]**](String.md)| pingStatus | [optional] 
 **snmpStatus** | [**[String]**](String.md)| snmpStatus | [optional] 
 **cliStatus** | [**[String]**](String.md)| cliStatus | [optional] 
 **netconfStatus** | [**[String]**](String.md)| netconfStatus | [optional] 
 **httpStatus** | [**[String]**](String.md)| httpStatus | [optional] 

### Return type

[**CountResult**](CountResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDiscovery"></a>
# **postDiscovery**
> TaskIdResult postDiscovery(request)

Starts a new discovery process and returns a task-id

Initiates discovery with the given parameters

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DiscoveryApi();

var request = new Swagger.InventoryRequest(); // InventoryRequest | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postDiscovery(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**InventoryRequest**](InventoryRequest.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putDiscovery"></a>
# **putDiscovery**
> TaskIdResult putDiscovery(request)

Updates an existing discovery specified by id - only for starting/stopping the discovery

Stops or starts an existing discovery

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DiscoveryApi();

var request = new Swagger.DiscoveryNIO(); // DiscoveryNIO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putDiscovery(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**DiscoveryNIO**](DiscoveryNIO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

