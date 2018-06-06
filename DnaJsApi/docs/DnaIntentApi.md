# Swagger.DnaIntentApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDnaIntentDeleteApplication**](DnaIntentApi.md#deleteDnaIntentDeleteApplication) | **DELETE** /dna/intent/api/v1/delete-application | Delete Application
[**deleteDnaIntentDeleteApplicationSet**](DnaIntentApi.md#deleteDnaIntentDeleteApplicationSet) | **DELETE** /dna/intent/api/v1/delete-application-set | Delete Application Set
[**deleteDnaIntentDeleteSsid**](DnaIntentApi.md#deleteDnaIntentDeleteSsid) | **DELETE** /dna/intent/api/v1/delete-ssid/${deviceName}/${wirelessNetworkProfileName}/${ssidName}/${interfaceName} | Delete SSID
[**getDnaIntentApplicationCount**](DnaIntentApi.md#getDnaIntentApplicationCount) | **GET** /dna/intent/api/v1/application/count | Get Applications Count
[**getDnaIntentApplicationPolicy**](DnaIntentApi.md#getDnaIntentApplicationPolicy) | **GET** /dna/intent/api/v1/application-policy | Get Application Policies
[**getDnaIntentApplicationSetCount**](DnaIntentApi.md#getDnaIntentApplicationSetCount) | **GET** /dna/intent/api/v1/application-set/count | Get Application Sets Count
[**getDnaIntentApplicationSets**](DnaIntentApi.md#getDnaIntentApplicationSets) | **GET** /dna/intent/api/v1/application-sets | Get Application Sets
[**getDnaIntentApplications**](DnaIntentApi.md#getDnaIntentApplications) | **GET** /dna/intent/api/v1/applications | Get Applications
[**getDnaIntentClieDetail**](DnaIntentApi.md#getDnaIntentClieDetail) | **GET** /dna/intent/api/v1/client-detail | Client Detail
[**getDnaIntentClientHealth**](DnaIntentApi.md#getDnaIntentClientHealth) | **GET** /dna/intent/api/v1/client-health | Client Health
[**getDnaIntentNetworkDeviceDetail**](DnaIntentApi.md#getDnaIntentNetworkDeviceDetail) | **GET** /dna/intent/api/v1/network-device-detail | Network Device Detail
[**getDnaIntentNetworkHealth**](DnaIntentApi.md#getDnaIntentNetworkHealth) | **GET** /dna/intent/api/v1/network-health | Network Health
[**getDnaIntentSiteHierarchy**](DnaIntentApi.md#getDnaIntentSiteHierarchy) | **GET** /dna/intent/api/v1/site-hierarchy | Site Hierarchy
[**postDnaIntentCreateApplication**](DnaIntentApi.md#postDnaIntentCreateApplication) | **POST** /dna/intent/api/v1/create-application | Post Application
[**postDnaIntentCreateApplicationPolicy**](DnaIntentApi.md#postDnaIntentCreateApplicationPolicy) | **POST** /dna/intent/api/v1/create-application-policy | Post Application Policy Intent
[**postDnaIntentCreateApplicationSet**](DnaIntentApi.md#postDnaIntentCreateApplicationSet) | **POST** /dna/intent/api/v1/create-application-set | Post Application Set
[**postDnaIntentCreateSsid**](DnaIntentApi.md#postDnaIntentCreateSsid) | **POST** /dna/intent/api/v1/create-ssid | Create SSID
[**putDnaIntentUpdateApplication**](DnaIntentApi.md#putDnaIntentUpdateApplication) | **PUT** /dna/intent/api/v1/update-application | Edit Application


<a name="deleteDnaIntentDeleteApplication"></a>
# **deleteDnaIntentDeleteApplication**
> deleteDnaIntentDeleteApplication(applicationId, opts)

Delete Application

Invoke the API to delete a custom application

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var applicationId = ""; // String | 

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10 // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDnaIntentDeleteApplication(applicationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**|  | [default to ]
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDnaIntentDeleteApplicationSet"></a>
# **deleteDnaIntentDeleteApplicationSet**
> deleteDnaIntentDeleteApplicationSet(applicationSetId, opts)

Delete Application Set

Invoke the API to delete a custom application

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var applicationSetId = ""; // String | 

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10 // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDnaIntentDeleteApplicationSet(applicationSetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationSetId** | **String**|  | [default to ]
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDnaIntentDeleteSsid"></a>
# **deleteDnaIntentDeleteSsid**
> DeleteSSIDResponse deleteDnaIntentDeleteSsid(deviceName, wirelessNetworkProfileName, ssidName, interfaceName, opts)

Delete SSID

De-provision WLC, also removes wireless network profile, SSID and dynamic interface

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var deviceName = "deviceName_example"; // String | 

var wirelessNetworkProfileName = "wirelessNetworkProfileName_example"; // String | 

var ssidName = "ssidName_example"; // String | 

var interfaceName = "interfaceName_example"; // String | 

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10 // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDnaIntentDeleteSsid(deviceName, wirelessNetworkProfileName, ssidName, interfaceName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceName** | **String**|  | 
 **wirelessNetworkProfileName** | **String**|  | 
 **ssidName** | **String**|  | 
 **interfaceName** | **String**|  | 
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]

### Return type

[**DeleteSSIDResponse**](DeleteSSIDResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDnaIntentApplicationCount"></a>
# **getDnaIntentApplicationCount**
> getDnaIntentApplicationCount(count, opts)

Get Applications Count

Invoke the API to return the number of defined applications

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var count = "count_example"; // String | 

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10 // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDnaIntentApplicationCount(count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | **String**|  | 
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDnaIntentApplicationPolicy"></a>
# **getDnaIntentApplicationPolicy**
> getDnaIntentApplicationPolicy(opts)

Get Application Policies

Invoke the API to return all (or specific) application-policy(ies)

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10, // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
  'offset': 1, // Number | 
  'limit': 500, // Number | 
  'applicationPolicyNamespace': "" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDnaIntentApplicationPolicy(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]
 **offset** | **Number**|  | [optional] [default to 1]
 **limit** | **Number**|  | [optional] [default to 500]
 **applicationPolicyNamespace** | **String**|  | [optional] [default to ]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDnaIntentApplicationSetCount"></a>
# **getDnaIntentApplicationSetCount**
> getDnaIntentApplicationSetCount(count, opts)

Get Application Sets Count

Invoke the API to return the number of defined application sets

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var count = "count_example"; // String | 

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10 // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDnaIntentApplicationSetCount(count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | **String**|  | 
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDnaIntentApplicationSets"></a>
# **getDnaIntentApplicationSets**
> getDnaIntentApplicationSets(opts)

Get Application Sets

Invoke the API to return all (or specific) defined application-set(s)

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10, // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
  'offset': 1, // Number | 
  'limit': 500, // Number | 
  'applicationSetName': "" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDnaIntentApplicationSets(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]
 **offset** | **Number**|  | [optional] [default to 1]
 **limit** | **Number**|  | [optional] [default to 500]
 **applicationSetName** | **String**|  | [optional] [default to ]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDnaIntentApplications"></a>
# **getDnaIntentApplications**
> getDnaIntentApplications(opts)

Get Applications

Invoke the API to return the list of all (or specific) defined application(s)

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10, // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
  'offset': 1, // Number | 
  'limit': 500, // Number | 
  'applicationName': "" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDnaIntentApplications(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]
 **offset** | **Number**|  | [optional] [default to 1]
 **limit** | **Number**|  | [optional] [default to 500]
 **applicationName** | **String**|  | [optional] [default to ]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDnaIntentClieDetail"></a>
# **getDnaIntentClieDetail**
> ClientDetailResponse getDnaIntentClieDetail(timestamp, macAddress, opts)

Client Detail

Get Client Details for a single client

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var timestamp = ""; // String | timestamp

var macAddress = ""; // String | MAC Address of the client

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10 // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDnaIntentClieDetail(timestamp, macAddress, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timestamp** | **String**| timestamp | [default to ]
 **macAddress** | **String**| MAC Address of the client | [default to ]
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]

### Return type

[**ClientDetailResponse**](ClientDetailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDnaIntentClientHealth"></a>
# **getDnaIntentClientHealth**
> ClientHealthResponse getDnaIntentClientHealth(startTime, endTime, opts)

Client Health

Get overall Client Health along with beak down on categories of wired and wireless

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var startTime = ""; // String | Start Time

var endTime = ""; // String | End Time

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10 // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDnaIntentClientHealth(startTime, endTime, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | **String**| Start Time | [default to ]
 **endTime** | **String**| End Time | [default to ]
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]

### Return type

[**ClientHealthResponse**](ClientHealthResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDnaIntentNetworkDeviceDetail"></a>
# **getDnaIntentNetworkDeviceDetail**
> NetworkDeviceDetailResponse getDnaIntentNetworkDeviceDetail(opts)

Network Device Detail

Get Network Device Detail

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10, // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
  'timestamp': "", // String | timestamp
  'searchBy': "", // String | MAC Address or UUID or Name of the Device
  'identifier': "" // String | macAddress or uuid or nwDeviceName
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDnaIntentNetworkDeviceDetail(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]
 **timestamp** | **String**| timestamp | [optional] [default to ]
 **searchBy** | **String**| MAC Address or UUID or Name of the Device | [optional] [default to ]
 **identifier** | **String**| macAddress or uuid or nwDeviceName | [optional] [default to ]

### Return type

[**NetworkDeviceDetailResponse**](NetworkDeviceDetailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDnaIntentNetworkHealth"></a>
# **getDnaIntentNetworkHealth**
> getDnaIntentNetworkHealth(startTime, endTime, opts)

Network Health

Network Devices and their health by category

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var startTime = ""; // String | Start Time

var endTime = ""; // String | End Time

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10 // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDnaIntentNetworkHealth(startTime, endTime, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | **String**| Start Time | [default to ]
 **endTime** | **String**| End Time | [default to ]
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDnaIntentSiteHierarchy"></a>
# **getDnaIntentSiteHierarchy**
> SiteHierarchyResponse getDnaIntentSiteHierarchy(timestamp, opts)

Site Hierarchy

Site Hierarchy along with health Info

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var timestamp = ""; // String | Timestamp 

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10 // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDnaIntentSiteHierarchy(timestamp, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timestamp** | **String**| Timestamp  | [default to ]
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]

### Return type

[**SiteHierarchyResponse**](SiteHierarchyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDnaIntentCreateApplication"></a>
# **postDnaIntentCreateApplication**
> postDnaIntentCreateApplication(opts)

Post Application

Invoke the API to create a custom application

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10 // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postDnaIntentCreateApplication(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDnaIntentCreateApplicationPolicy"></a>
# **postDnaIntentCreateApplicationPolicy**
> postDnaIntentCreateApplicationPolicy(opts)

Post Application Policy Intent

Invoke the API to create, modify or delete an application-policy

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10 // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postDnaIntentCreateApplicationPolicy(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDnaIntentCreateApplicationSet"></a>
# **postDnaIntentCreateApplicationSet**
> postDnaIntentCreateApplicationSet(opts)

Post Application Set

Invoke the API to create a custom application set

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10 // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postDnaIntentCreateApplicationSet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDnaIntentCreateSsid"></a>
# **postDnaIntentCreateSsid**
> CreateSSIDResponse postDnaIntentCreateSsid(request, opts)

Create SSID

Creates non fabric enterprise SSID, dynamic interface, Wireless Network Profile and provisions WLC and AP

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var request = new Swagger.CreateSSIDRequest(); // CreateSSIDRequest | request

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10 // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postDnaIntentCreateSsid(request, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreateSSIDRequest**](CreateSSIDRequest.md)| request | 
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]

### Return type

[**CreateSSIDResponse**](CreateSSIDResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putDnaIntentUpdateApplication"></a>
# **putDnaIntentUpdateApplication**
> putDnaIntentUpdateApplication(opts)

Edit Application

Invoke the API to create a custom application

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.DnaIntentApi();

var opts = { 
  'runsync': false, // Boolean | Enable this parameter to execute the API and return a response synchronously
  'timeout': 10 // Number | During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putDnaIntentUpdateApplication(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runsync** | **Boolean**| Enable this parameter to execute the API and return a response synchronously | [optional] [default to false]
 **timeout** | **Number**| During synchronous execution, this defines the maximum time to wait for a response, before the API execution is terminated | [optional] [default to 10]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

