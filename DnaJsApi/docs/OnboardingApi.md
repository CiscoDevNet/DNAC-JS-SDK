# Swagger.OnboardingApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOnboardingPnpDeviceById**](OnboardingApi.md#deleteOnboardingPnpDeviceById) | **DELETE** /api/v1/onboarding/pnp-device/${id} | Delete Device
[**deleteOnboardingPnpSettingsVacct**](OnboardingApi.md#deleteOnboardingPnpSettingsVacct) | **DELETE** /api/v1/onboarding/pnp-settings/vacct | Deregister Virtual Account
[**deleteOnboardingPnpWorkflowById**](OnboardingApi.md#deleteOnboardingPnpWorkflowById) | **DELETE** /api/v1/onboarding/pnp-workflow/${id} | Delete Workflow
[**getOnboardingPnpDevice**](OnboardingApi.md#getOnboardingPnpDevice) | **GET** /api/v1/onboarding/pnp-device | List devices
[**getOnboardingPnpDeviceById**](OnboardingApi.md#getOnboardingPnpDeviceById) | **GET** /api/v1/onboarding/pnp-device/${id} | Get Device by ID
[**getOnboardingPnpDeviceCcount**](OnboardingApi.md#getOnboardingPnpDeviceCcount) | **GET** /api/v1/onboarding/pnp-device/count | Get Device Count
[**getOnboardingPnpDeviceDashboardCount**](OnboardingApi.md#getOnboardingPnpDeviceDashboardCount) | **GET** /api/v1/onboarding/pnp-device/dashboard/count | Get Categorized Device Count
[**getOnboardingPnpDeviceHistory**](OnboardingApi.md#getOnboardingPnpDeviceHistory) | **GET** /api/v1/onboarding/pnp-device/history | Get Device History
[**getOnboardingPnpDeviceSacctVacctSyncResultByDomainAndName**](OnboardingApi.md#getOnboardingPnpDeviceSacctVacctSyncResultByDomainAndName) | **GET** /api/v1/onboarding/pnp-device/sacct/${domain}/vacct/${name}/sync-result | Get Sync Result for Virtual Account
[**getOnboardingPnpSettings**](OnboardingApi.md#getOnboardingPnpSettings) | **GET** /api/v1/onboarding/pnp-settings | View Settings
[**getOnboardingPnpSettingsSacct**](OnboardingApi.md#getOnboardingPnpSettingsSacct) | **GET** /api/v1/onboarding/pnp-settings/sacct | Get Smart Account List
[**getOnboardingPnpSettingsSacctVacctByDomain**](OnboardingApi.md#getOnboardingPnpSettingsSacctVacctByDomain) | **GET** /api/v1/onboarding/pnp-settings/sacct/${domain}/vacct | Get Virtual Account List
[**getOnboardingPnpWorkflow**](OnboardingApi.md#getOnboardingPnpWorkflow) | **GET** /api/v1/onboarding/pnp-workflow | List Workflows
[**getOnboardingPnpWorkflowById**](OnboardingApi.md#getOnboardingPnpWorkflowById) | **GET** /api/v1/onboarding/pnp-workflow/${id} | Get Workflow
[**getOnboardingPnpWorkflowCount**](OnboardingApi.md#getOnboardingPnpWorkflowCount) | **GET** /api/v1/onboarding/pnp-workflow/count | Get Workflow Count
[**postOnboardingPnpDevice**](OnboardingApi.md#postOnboardingPnpDevice) | **POST** /api/v1/onboarding/pnp-device | Create Device
[**postOnboardingPnpDeviceClaim**](OnboardingApi.md#postOnboardingPnpDeviceClaim) | **POST** /api/v1/onboarding/pnp-device/claim | Claim Device(s)
[**postOnboardingPnpDeviceImport**](OnboardingApi.md#postOnboardingPnpDeviceImport) | **POST** /api/v1/onboarding/pnp-device/import | Import Many Devices
[**postOnboardingPnpDeviceProvision**](OnboardingApi.md#postOnboardingPnpDeviceProvision) | **POST** /api/v1/onboarding/pnp-device/provision | Provision Device
[**postOnboardingPnpDeviceReset**](OnboardingApi.md#postOnboardingPnpDeviceReset) | **POST** /api/v1/onboarding/pnp-device/reset | Reset Device
[**postOnboardingPnpDeviceUnclaim**](OnboardingApi.md#postOnboardingPnpDeviceUnclaim) | **POST** /api/v1/onboarding/pnp-device/unclaim | Un-Claim Device
[**postOnboardingPnpDeviceVacctSync**](OnboardingApi.md#postOnboardingPnpDeviceVacctSync) | **POST** /api/v1/onboarding/pnp-device/vacct-sync | Sync Virtual Account Devices
[**postOnboardingPnpSettingsSavacct**](OnboardingApi.md#postOnboardingPnpSettingsSavacct) | **POST** /api/v1/onboarding/pnp-settings/savacct | Add Virtual Account
[**postOnboardingPnpWorkflow**](OnboardingApi.md#postOnboardingPnpWorkflow) | **POST** /api/v1/onboarding/pnp-workflow | Create Workflow
[**putOnboardingPnpDeviceById**](OnboardingApi.md#putOnboardingPnpDeviceById) | **PUT** /api/v1/onboarding/pnp-device/${id} | Update Device
[**putOnboardingPnpSettings**](OnboardingApi.md#putOnboardingPnpSettings) | **PUT** /api/v1/onboarding/pnp-settings | Update Settings
[**putOnboardingPnpSettingsSavacct**](OnboardingApi.md#putOnboardingPnpSettingsSavacct) | **PUT** /api/v1/onboarding/pnp-settings/savacct | Edit PnP Server Profile
[**putOnboardingPnpWorkflowById**](OnboardingApi.md#putOnboardingPnpWorkflowById) | **PUT** /api/v1/onboarding/pnp-workflow/${id} | Update Workflow


<a name="deleteOnboardingPnpDeviceById"></a>
# **deleteOnboardingPnpDeviceById**
> DeleteDeviceResponse deleteOnboardingPnpDeviceById(id)

Delete Device

This API is used to delete the specified device from the database.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteOnboardingPnpDeviceById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

[**DeleteDeviceResponse**](DeleteDeviceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOnboardingPnpSettingsVacct"></a>
# **deleteOnboardingPnpSettingsVacct**
> DeregisterVirtualAccountResponse deleteOnboardingPnpSettingsVacct(domain, name)

Deregister Virtual Account

This API is used to deregister the specified smart account &amp; virtual account info and the associated device information from the PnP System &amp; database. The devices associated with the deregistered virtual account are removed from the PnP database as well. The deregistered smart &amp; virtual account info is returned in the response.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var domain = "domain_example"; // String | Smart Account Domain

var name = "name_example"; // String | Virtual Account Name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteOnboardingPnpSettingsVacct(domain, name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**| Smart Account Domain | 
 **name** | **String**| Virtual Account Name | 

### Return type

[**DeregisterVirtualAccountResponse**](DeregisterVirtualAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOnboardingPnpWorkflowById"></a>
# **deleteOnboardingPnpWorkflowById**
> DeleteWorkflowResponse deleteOnboardingPnpWorkflowById(id)

Delete Workflow

Delete a workflow given its id

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteOnboardingPnpWorkflowById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

[**DeleteWorkflowResponse**](DeleteWorkflowResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOnboardingPnpDevice"></a>
# **getOnboardingPnpDevice**
> ListDevicesResponse getOnboardingPnpDevice(opts)

List devices

This API is used to get the list of devices that match the provided filter. Pagination and sorting are also supported. If a limit is not specified, it will default to return 50 devices.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var opts = { 
  'limit': 56, // Number | Limits number of results
  'offset': 56, // Number | Index of first result
  'sort': ["sort_example"], // [String] | Comma seperated list of fields to sort on
  'sortOrder': "sortOrder_example", // String | Sort Order Ascending (asc) or Descending (des)
  'serialNumber': ["serialNumber_example"], // [String] | Device Serial Number
  'state': ["state_example"], // [String] | Device State
  'onbState': ["onbState_example"], // [String] | Device Onboarding State
  'cmState': ["cmState_example"], // [String] | Device Connection Manager State
  'name': ["name_example"], // [String] | Device Name
  'pid': ["pid_example"], // [String] | Device ProductId
  'source': ["source_example"], // [String] | Device Source
  'projectId': ["projectId_example"], // [String] | Device Project Id
  'workflowId': ["workflowId_example"], // [String] | Device Workflow Id
  'projectName': ["projectName_example"], // [String] | Device Project Name
  'workflowName': ["workflowName_example"], // [String] | Device Workflow Name
  'smartAccountId': ["smartAccountId_example"], // [String] | Device Smart Account
  'virtualAccountId': ["virtualAccountId_example"], // [String] | Device Virtual Account
  'lastContact': true // Boolean | Device Has Contacted lastContact > 0
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnboardingPnpDevice(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Limits number of results | [optional] 
 **offset** | **Number**| Index of first result | [optional] 
 **sort** | [**[String]**](String.md)| Comma seperated list of fields to sort on | [optional] 
 **sortOrder** | **String**| Sort Order Ascending (asc) or Descending (des) | [optional] 
 **serialNumber** | [**[String]**](String.md)| Device Serial Number | [optional] 
 **state** | [**[String]**](String.md)| Device State | [optional] 
 **onbState** | [**[String]**](String.md)| Device Onboarding State | [optional] 
 **cmState** | [**[String]**](String.md)| Device Connection Manager State | [optional] 
 **name** | [**[String]**](String.md)| Device Name | [optional] 
 **pid** | [**[String]**](String.md)| Device ProductId | [optional] 
 **source** | [**[String]**](String.md)| Device Source | [optional] 
 **projectId** | [**[String]**](String.md)| Device Project Id | [optional] 
 **workflowId** | [**[String]**](String.md)| Device Workflow Id | [optional] 
 **projectName** | [**[String]**](String.md)| Device Project Name | [optional] 
 **workflowName** | [**[String]**](String.md)| Device Workflow Name | [optional] 
 **smartAccountId** | [**[String]**](String.md)| Device Smart Account | [optional] 
 **virtualAccountId** | [**[String]**](String.md)| Device Virtual Account | [optional] 
 **lastContact** | **Boolean**| Device Has Contacted lastContact &gt; 0 | [optional] 

### Return type

[**ListDevicesResponse**](ListDevicesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOnboardingPnpDeviceById"></a>
# **getOnboardingPnpDeviceById**
> GetDeviceByIDResponse getOnboardingPnpDeviceById(id)

Get Device by ID

Get device details of the device with input device id

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnboardingPnpDeviceById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

[**GetDeviceByIDResponse**](GetDeviceByIDResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOnboardingPnpDeviceCcount"></a>
# **getOnboardingPnpDeviceCcount**
> GetDeviceCountResponse getOnboardingPnpDeviceCcount(opts)

Get Device Count

This API is used to get the number of the devices matching provided filters. This is useful for pageination.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var opts = { 
  'serialNumber': ["serialNumber_example"], // [String] | Device Serial Number
  'state': ["state_example"], // [String] | Device State
  'onbState': ["onbState_example"], // [String] | Device Onboarding State
  'cmState': ["cmState_example"], // [String] | Device Connection Manager State
  'name': ["name_example"], // [String] | Device Name
  'pid': ["pid_example"], // [String] | Device ProductId
  'source': ["source_example"], // [String] | Device Source
  'projectId': ["projectId_example"], // [String] | Device Project Id
  'workflowId': ["workflowId_example"], // [String] | Device Workflow Id
  'projectName': ["projectName_example"], // [String] | Device Project Name
  'workflowName': ["workflowName_example"], // [String] | Device Workflow Name
  'smartAccountId': ["smartAccountId_example"], // [String] | Device Smart Account
  'virtualAccountId': ["virtualAccountId_example"], // [String] | Device Virtual Account
  'lastContact': true // Boolean | Device Has Contacted lastContact > 0
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnboardingPnpDeviceCcount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serialNumber** | [**[String]**](String.md)| Device Serial Number | [optional] 
 **state** | [**[String]**](String.md)| Device State | [optional] 
 **onbState** | [**[String]**](String.md)| Device Onboarding State | [optional] 
 **cmState** | [**[String]**](String.md)| Device Connection Manager State | [optional] 
 **name** | [**[String]**](String.md)| Device Name | [optional] 
 **pid** | [**[String]**](String.md)| Device ProductId | [optional] 
 **source** | [**[String]**](String.md)| Device Source | [optional] 
 **projectId** | [**[String]**](String.md)| Device Project Id | [optional] 
 **workflowId** | [**[String]**](String.md)| Device Workflow Id | [optional] 
 **projectName** | [**[String]**](String.md)| Device Project Name | [optional] 
 **workflowName** | [**[String]**](String.md)| Device Workflow Name | [optional] 
 **smartAccountId** | [**[String]**](String.md)| Device Smart Account | [optional] 
 **virtualAccountId** | [**[String]**](String.md)| Device Virtual Account | [optional] 
 **lastContact** | **Boolean**| Device Has Contacted lastContact &gt; 0 | [optional] 

### Return type

[**GetDeviceCountResponse**](GetDeviceCountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOnboardingPnpDeviceDashboardCount"></a>
# **getOnboardingPnpDeviceDashboardCount**
> GetCategorizedDeviceCountResponse getOnboardingPnpDeviceDashboardCount(category)

Get Categorized Device Count

Get Categorized Device Count

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var category = "category_example"; // String | Valid Values: state, errorState, onbState or source


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnboardingPnpDeviceDashboardCount(category, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**| Valid Values: state, errorState, onbState or source | 

### Return type

[**GetCategorizedDeviceCountResponse**](GetCategorizedDeviceCountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOnboardingPnpDeviceHistory"></a>
# **getOnboardingPnpDeviceHistory**
> GetDeviceHistoryResponse getOnboardingPnpDeviceHistory(serialNumber, opts)

Get Device History

Retrieves history for a specific device. Serial Number is a required parameter

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var serialNumber = "serialNumber_example"; // String | Device Serial Number

var opts = { 
  'sort': ["sort_example"], // [String] | Comma seperated list of fields to sort on
  'sortOrder': "sortOrder_example" // String | Sort Order Ascending (asc) or Descending (des)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnboardingPnpDeviceHistory(serialNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serialNumber** | **String**| Device Serial Number | 
 **sort** | [**[String]**](String.md)| Comma seperated list of fields to sort on | [optional] 
 **sortOrder** | **String**| Sort Order Ascending (asc) or Descending (des) | [optional] 

### Return type

[**GetDeviceHistoryResponse**](GetDeviceHistoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOnboardingPnpDeviceSacctVacctSyncResultByDomainAndName"></a>
# **getOnboardingPnpDeviceSacctVacctSyncResultByDomainAndName**
> GetSyncResultForVirtualAccountResponse getOnboardingPnpDeviceSacctVacctSyncResultByDomainAndName(domain, name)

Get Sync Result for Virtual Account

This API is used to get the device sync info from the given smart account &amp; virtual account with the PnP database. The SAVAMapping object which has the list of devices synced since the last sync is returned in the response.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var domain = "domain_example"; // String | Smart Account Domain

var name = "name_example"; // String | Virtual Account Name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnboardingPnpDeviceSacctVacctSyncResultByDomainAndName(domain, name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**| Smart Account Domain | 
 **name** | **String**| Virtual Account Name | 

### Return type

[**GetSyncResultForVirtualAccountResponse**](GetSyncResultForVirtualAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOnboardingPnpSettings"></a>
# **getOnboardingPnpSettings**
> ViewSettingsResponse getOnboardingPnpSettings()

View Settings

Get this user&#39;s list of global PnP settings

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnboardingPnpSettings(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ViewSettingsResponse**](ViewSettingsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOnboardingPnpSettingsSacct"></a>
# **getOnboardingPnpSettingsSacct**
> GetSmartAccountListResponse getOnboardingPnpSettingsSacct()

Get Smart Account List

This API is used to get list of Smart Accounts. The list of smart account domains is returned in the response.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnboardingPnpSettingsSacct(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetSmartAccountListResponse**](GetSmartAccountListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOnboardingPnpSettingsSacctVacctByDomain"></a>
# **getOnboardingPnpSettingsSacctVacctByDomain**
> GetVirtualAccountListResponse getOnboardingPnpSettingsSacctVacctByDomain(domain)

Get Virtual Account List

This API is used to get list of Virtual Accounts associated with the specified Smart Account. The list of virtual account names is returned in the response.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var domain = "domain_example"; // String | Smart Account Domain


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnboardingPnpSettingsSacctVacctByDomain(domain, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**| Smart Account Domain | 

### Return type

[**GetVirtualAccountListResponse**](GetVirtualAccountListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOnboardingPnpWorkflow"></a>
# **getOnboardingPnpWorkflow**
> ListWorkflowsResponse getOnboardingPnpWorkflow(opts)

List Workflows

This API is used to get the list of workflows that match the provided filter. Pagination and sorting are also supported. If a limit is not specified, it will default to return 50 workflows.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var opts = { 
  'limit': 56, // Number | Limits number of results
  'offset': 56, // Number | Index of first result
  'sort': ["sort_example"], // [String] | Comma seperated lost of fields to sort on
  'sortOrder': "sortOrder_example", // String | Sort Order Ascending (asc) or Descending (des)
  'type': ["type_example"], // [String] | Workflow Type
  'name': ["name_example"] // [String] | Workflow Name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnboardingPnpWorkflow(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Limits number of results | [optional] 
 **offset** | **Number**| Index of first result | [optional] 
 **sort** | [**[String]**](String.md)| Comma seperated lost of fields to sort on | [optional] 
 **sortOrder** | **String**| Sort Order Ascending (asc) or Descending (des) | [optional] 
 **type** | [**[String]**](String.md)| Workflow Type | [optional] 
 **name** | [**[String]**](String.md)| Workflow Name | [optional] 

### Return type

[**ListWorkflowsResponse**](ListWorkflowsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOnboardingPnpWorkflowById"></a>
# **getOnboardingPnpWorkflowById**
> GetWorkflowResponse getOnboardingPnpWorkflowById(id)

Get Workflow

Get a workflow given its id

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnboardingPnpWorkflowById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

[**GetWorkflowResponse**](GetWorkflowResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOnboardingPnpWorkflowCount"></a>
# **getOnboardingPnpWorkflowCount**
> GetWorkflowCountResponse getOnboardingPnpWorkflowCount(opts)

Get Workflow Count

This API is used to get the number of the workflows.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var opts = { 
  'name': ["name_example"] // [String] | Workflow Name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnboardingPnpWorkflowCount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**[String]**](String.md)| Workflow Name | [optional] 

### Return type

[**GetWorkflowCountResponse**](GetWorkflowCountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postOnboardingPnpDevice"></a>
# **postOnboardingPnpDevice**
> CreateDeviceResponse postOnboardingPnpDevice(request)

Create Device

This API is used to add a Planned device to the PnP database. A Planned device is a device that the customer has bought and/or is planning to manage.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var request = new Swagger.Device(); // Device | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postOnboardingPnpDevice(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Device**](Device.md)| request | 

### Return type

[**CreateDeviceResponse**](CreateDeviceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postOnboardingPnpDeviceClaim"></a>
# **postOnboardingPnpDeviceClaim**
> ClaimDevicesResponse postOnboardingPnpDeviceClaim(request)

Claim Device(s)

This API is used to assign a project &amp; workflow (i.e. claim) one of more devices.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var request = new Swagger.ClaimDeviceRequest(); // ClaimDeviceRequest | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postOnboardingPnpDeviceClaim(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ClaimDeviceRequest**](ClaimDeviceRequest.md)| request | 

### Return type

[**ClaimDevicesResponse**](ClaimDevicesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postOnboardingPnpDeviceImport"></a>
# **postOnboardingPnpDeviceImport**
> ImportManyDevicesResponse postOnboardingPnpDeviceImport(request)

Import Many Devices

This API is used to import a list of Planned devices to the PnP database. A Planned device is a device that the customer has bought and/or is planning to manage.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var request = new Swagger.Device(); // Device | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postOnboardingPnpDeviceImport(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Device**](Device.md)| request | 

### Return type

[**ImportManyDevicesResponse**](ImportManyDevicesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postOnboardingPnpDeviceProvision"></a>
# **postOnboardingPnpDeviceProvision**
> ProvisionDeviceResponse postOnboardingPnpDeviceProvision(request)

Provision Device

This API is used push one or more devices to Provisoned state and add them to inventory.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var request = new Swagger.PushProvisionRequest(); // PushProvisionRequest | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postOnboardingPnpDeviceProvision(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**PushProvisionRequest**](PushProvisionRequest.md)| request | 

### Return type

[**ProvisionDeviceResponse**](ProvisionDeviceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postOnboardingPnpDeviceReset"></a>
# **postOnboardingPnpDeviceReset**
> ResetDeviceResponse postOnboardingPnpDeviceReset(request)

Reset Device

This API is used to recover a device from a Workflow Execution Error state.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var request = new Swagger.ResetRequest(); // ResetRequest | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postOnboardingPnpDeviceReset(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ResetRequest**](ResetRequest.md)| request | 

### Return type

[**ResetDeviceResponse**](ResetDeviceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postOnboardingPnpDeviceUnclaim"></a>
# **postOnboardingPnpDeviceUnclaim**
> UnClaimDeviceResponse postOnboardingPnpDeviceUnclaim(request)

Un-Claim Device

This API is used to unassign the project and workflow from one or more device.A device can only be unclaimed if it has not begun provisioning.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var request = new Swagger.UnclaimRequest(); // UnclaimRequest | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postOnboardingPnpDeviceUnclaim(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**UnclaimRequest**](UnclaimRequest.md)| request | 

### Return type

[**UnClaimDeviceResponse**](UnClaimDeviceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postOnboardingPnpDeviceVacctSync"></a>
# **postOnboardingPnpDeviceVacctSync**
> SyncVirtualAccountDevicesResponse postOnboardingPnpDeviceVacctSync(request)

Sync Virtual Account Devices

This API is used to sync the device info from the given smart account &amp; virtual account with the PnP database. The list of synced devices is returned in the response.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var request = new Swagger.SAVAMapping(); // SAVAMapping | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postOnboardingPnpDeviceVacctSync(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SAVAMapping**](SAVAMapping.md)| request | 

### Return type

[**SyncVirtualAccountDevicesResponse**](SyncVirtualAccountDevicesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postOnboardingPnpSettingsSavacct"></a>
# **postOnboardingPnpSettingsSavacct**
> AddVirtualAccountResponse postOnboardingPnpSettingsSavacct(request)

Add Virtual Account

This API is used to register a Smart Account, Virtual Account and the relevant server profile info with the PnP System &amp; database. The devices present in the registered virtual account are synced with the PnP database as well. The new profile is returned in the response.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var request = new Swagger.SAVAMapping(); // SAVAMapping | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postOnboardingPnpSettingsSavacct(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SAVAMapping**](SAVAMapping.md)| request | 

### Return type

[**AddVirtualAccountResponse**](AddVirtualAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postOnboardingPnpWorkflow"></a>
# **postOnboardingPnpWorkflow**
> CreateWorkflowResponse postOnboardingPnpWorkflow(request)

Create Workflow

This API is used to add a PnP Workflow along with the relevant tasks in the workflow into the PnP database.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var request = new Swagger.Workflow(); // Workflow | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postOnboardingPnpWorkflow(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Workflow**](Workflow.md)| request | 

### Return type

[**CreateWorkflowResponse**](CreateWorkflowResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putOnboardingPnpDeviceById"></a>
# **putOnboardingPnpDeviceById**
> UpdateDeviceResponse putOnboardingPnpDeviceById(request, id)

Update Device

This API is used to update device details of a device that exists in the PnP database.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var request = new Swagger.Device(); // Device | request

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putOnboardingPnpDeviceById(request, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Device**](Device.md)| request | 
 **id** | **String**| id | 

### Return type

[**UpdateDeviceResponse**](UpdateDeviceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putOnboardingPnpSettings"></a>
# **putOnboardingPnpSettings**
> UpdateSettingsResponse putOnboardingPnpSettings(request)

Update Settings

Change this user&#39;s list of global PnP settings

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var request = new Swagger.Settings(); // Settings | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putOnboardingPnpSettings(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Settings**](Settings.md)| request | 

### Return type

[**UpdateSettingsResponse**](UpdateSettingsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putOnboardingPnpSettingsSavacct"></a>
# **putOnboardingPnpSettingsSavacct**
> EditPnPServerProfileResponse putOnboardingPnpSettingsSavacct(request)

Edit PnP Server Profile

This API is used to edit the PnP Server profile in a registered Virtual Account in the PnP database.The edited smart &amp; virtual account info is returned in the response.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var request = new Swagger.SAVAMapping(); // SAVAMapping | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putOnboardingPnpSettingsSavacct(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SAVAMapping**](SAVAMapping.md)| request | 

### Return type

[**EditPnPServerProfileResponse**](EditPnPServerProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putOnboardingPnpWorkflowById"></a>
# **putOnboardingPnpWorkflowById**
> UpdateWorkflowResponse putOnboardingPnpWorkflowById(request, id)

Update Workflow

Update an existing workflow

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.OnboardingApi();

var request = new Swagger.Workflow(); // Workflow | request

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putOnboardingPnpWorkflowById(request, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Workflow**](Workflow.md)| request | 
 **id** | **String**| id | 

### Return type

[**UpdateWorkflowResponse**](UpdateWorkflowResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

