# Swagger.NetworkDeviceApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteNetworkDeviceById**](NetworkDeviceApi.md#deleteNetworkDeviceById) | **DELETE** /api/v1/network-device/${id} | Delete network device by ID
[**getNetworkDevice**](NetworkDeviceApi.md#getNetworkDevice) | **GET** /api/v1/network-device | Retrieves all network devices
[**getNetworkDeviceAutocomplete**](NetworkDeviceApi.md#getNetworkDeviceAutocomplete) | **GET** /api/v1/network-device/autocomplete | Retrieves all network devices
[**getNetworkDeviceBriefById**](NetworkDeviceApi.md#getNetworkDeviceBriefById) | **GET** /api/v1/network-device/${id}/brief | Retrieves network device brief by ID
[**getNetworkDeviceById**](NetworkDeviceApi.md#getNetworkDeviceById) | **GET** /api/v1/network-device/${id} | Retrieves network device by ID
[**getNetworkDeviceCollectionScheduleById**](NetworkDeviceApi.md#getNetworkDeviceCollectionScheduleById) | **GET** /api/v1/network-device/${id}/collection-schedule | Retrieves the collection interval specified by device ID
[**getNetworkDeviceCollectionScheduleGlobal**](NetworkDeviceApi.md#getNetworkDeviceCollectionScheduleGlobal) | **GET** /api/v1/network-device/collection-schedule/global | Retrieves the collection interval of all devices
[**getNetworkDeviceConfig**](NetworkDeviceApi.md#getNetworkDeviceConfig) | **GET** /api/v1/network-device/config | Retrieves device config list
[**getNetworkDeviceConfigByNetworkDeviceId**](NetworkDeviceApi.md#getNetworkDeviceConfigByNetworkDeviceId) | **GET** /api/v1/network-device/${networkDeviceId}/config | Retrieves device config
[**getNetworkDeviceConfigCount**](NetworkDeviceApi.md#getNetworkDeviceConfigCount) | **GET** /api/v1/network-device/config/count | Retrieves config count
[**getNetworkDeviceCount**](NetworkDeviceApi.md#getNetworkDeviceCount) | **GET** /api/v1/network-device/count | Retrieves network device count
[**getNetworkDeviceFunctionalCapability**](NetworkDeviceApi.md#getNetworkDeviceFunctionalCapability) | **GET** /api/v1/network-device/functional-capability | Retrieves all functional-capability of devices
[**getNetworkDeviceFunctionalCapabilityById**](NetworkDeviceApi.md#getNetworkDeviceFunctionalCapabilityById) | **GET** /api/v1/network-device/functional-capability/${id} | Gets the functional capability by id
[**getNetworkDeviceFunctionalCcapabilityAutocomplete**](NetworkDeviceApi.md#getNetworkDeviceFunctionalCcapabilityAutocomplete) | **GET** /api/v1/network-device/functional-capability/autocomplete | Retrieve the values of given fields
[**getNetworkDeviceIpAddressByIpAddress**](NetworkDeviceApi.md#getNetworkDeviceIpAddressByIpAddress) | **GET** /api/v1/network-device/ip-address/${ipAddress} | Retrieves network device by IP address
[**getNetworkDeviceMerakiOrganizationById**](NetworkDeviceApi.md#getNetworkDeviceMerakiOrganizationById) | **GET** /api/v1/network-device/${id}/meraki-organization | Get the organizations chosen while adding the meraki dashboard
[**getNetworkDeviceModule**](NetworkDeviceApi.md#getNetworkDeviceModule) | **GET** /api/v1/network-device/module | Gives all the modules associated with given device id
[**getNetworkDeviceModuleById**](NetworkDeviceApi.md#getNetworkDeviceModuleById) | **GET** /api/v1/network-device/module/${id} | Gives Module info by its id
[**getNetworkDeviceModuleCount**](NetworkDeviceApi.md#getNetworkDeviceModuleCount) | **GET** /api/v1/network-device/module/count | Gives total number of Modules
[**getNetworkDevicePollerCliLegitReads**](NetworkDeviceApi.md#getNetworkDevicePollerCliLegitReads) | **GET** /api/v1/network-device-poller/cli/legit-reads | Get all keywords of CLIs accepted by command runner
[**getNetworkDeviceRange**](NetworkDeviceApi.md#getNetworkDeviceRange) | **GET** /api/v1/network-device/${startIndex}/${recordsToReturn} | Retrieves network device by range
[**getNetworkDeviceSerialNumberBySerialNumber**](NetworkDeviceApi.md#getNetworkDeviceSerialNumberBySerialNumber) | **GET** /api/v1/network-device/serial-number/${serialNumber} | Retrieves network device by serial number
[**getNetworkDeviceTenantinfoMacaddress**](NetworkDeviceApi.md#getNetworkDeviceTenantinfoMacaddress) | **GET** /api/v1/network-device/tenantinfo/macaddress | Updates certificate validation status and returns tenantId
[**getNetworkDeviceVlanById**](NetworkDeviceApi.md#getNetworkDeviceVlanById) | **GET** /api/v1/network-device/${id}/vlan | Retrieves list of VLAN data that are associated with interface for a device
[**getNetworkDeviceWirelessInfoById**](NetworkDeviceApi.md#getNetworkDeviceWirelessInfoById) | **GET** /api/v1/network-device/${id}/wireless-info | Retrieves wireless lan conrtoller info by Device ID
[**postNetworkDevice**](NetworkDeviceApi.md#postNetworkDevice) | **POST** /api/v1/network-device | Network device POST api
[**postNetworkDeviceFile**](NetworkDeviceApi.md#postNetworkDeviceFile) | **POST** /api/v1/network-device/file | Export network-device to file
[**postNetworkDevicePollerCliReadRequest**](NetworkDeviceApi.md#postNetworkDevicePollerCliReadRequest) | **POST** /api/v1/network-device-poller/cli/read-request | Run read-only commands on devices to get their real-time configuration
[**putNetworkDevice**](NetworkDeviceApi.md#putNetworkDevice) | **PUT** /api/v1/network-device | Network device sync api
[**putNetworkDeviceBrief**](NetworkDeviceApi.md#putNetworkDeviceBrief) | **PUT** /api/v1/network-device/brief | Updates network device role
[**putNetworkDeviceSync**](NetworkDeviceApi.md#putNetworkDeviceSync) | **PUT** /api/v1/network-device/sync | Network device sync api


<a name="deleteNetworkDeviceById"></a>
# **deleteNetworkDeviceById**
> TaskIdResult deleteNetworkDeviceById(id, opts)

Delete network device by ID

Removes the network device for the given ID

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var id = "id_example"; // String | Device ID

var opts = { 
  'isForceDelete': true // Boolean | isForceDelete
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteNetworkDeviceById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Device ID | 
 **isForceDelete** | **Boolean**| isForceDelete | [optional] 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDevice"></a>
# **getNetworkDevice**
> NetworkDeviceListResult getNetworkDevice(opts)

Retrieves all network devices

Gets the list of first 500 network devices sorted lexicographically based on host name. It can be filtered using management IP address, mac address, hostname and location name. If id param is provided, it will be returning the list of network-devices for the given id&#39;s and other request params will be ignored. In case of autocomplete request, returns the list of specified attributes.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var opts = { 
  'hostname': ["hostname_example"], // [String] | hostname
  'managementIpAddress': ["managementIpAddress_example"], // [String] | managementIpAddress
  'macAddress': ["macAddress_example"], // [String] | macAddress
  'locationName': ["locationName_example"], // [String] | locationName
  'serialNumber': ["serialNumber_example"], // [String] | serialNumber
  'location': ["location_example"], // [String] | location
  'family': ["family_example"], // [String] | family
  'type': ["type_example"], // [String] | type
  'series': ["series_example"], // [String] | series
  'collectionStatus': ["collectionStatus_example"], // [String] | collectionStatus
  'collectionInterval': ["collectionInterval_example"], // [String] | collectionInterval
  'notSyncedForMinutes': ["notSyncedForMinutes_example"], // [String] | notSyncedForMinutes
  'errorCode': ["errorCode_example"], // [String] | errorCode
  'errorDescription': ["errorDescription_example"], // [String] | errorDescription
  'softwareVersion': ["softwareVersion_example"], // [String] | softwareVersion
  'softwareType': ["softwareType_example"], // [String] | softwareType
  'platformId': ["platformId_example"], // [String] | platformId
  'role': ["role_example"], // [String] | role
  'reachabilityStatus': ["reachabilityStatus_example"], // [String] | reachabilityStatus
  'upTime': ["upTime_example"], // [String] | upTime
  'associatedWlcIp': ["associatedWlcIp_example"], // [String] | associatedWlcIp
  'licenseName': ["licenseName_example"], // [String] | licenseName
  'licenseType': ["licenseType_example"], // [String] | licenseType
  'licenseStatus': ["licenseStatus_example"], // [String] | licenseStatus
  'modulename': ["modulename_example"], // [String] | moduleName
  'moduleequpimenttype': ["moduleequpimenttype_example"], // [String] | moduleEqupimentType
  'moduleservicestate': ["moduleservicestate_example"], // [String] | moduleServiceState
  'modulevendorequipmenttype': ["modulevendorequipmenttype_example"], // [String] | moduleVendorEquipmentType
  'modulepartnumber': ["modulepartnumber_example"], // [String] | modulePartNumber
  'moduleoperationstatecode': ["moduleoperationstatecode_example"], // [String] | moduleOperationStateCode
  'id': "id_example" // String | Accepts comma separated id's and return list of network-devices for the given id's. If invalid or not-found id's are provided, null entry will be returned in the list.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDevice(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hostname** | [**[String]**](String.md)| hostname | [optional] 
 **managementIpAddress** | [**[String]**](String.md)| managementIpAddress | [optional] 
 **macAddress** | [**[String]**](String.md)| macAddress | [optional] 
 **locationName** | [**[String]**](String.md)| locationName | [optional] 
 **serialNumber** | [**[String]**](String.md)| serialNumber | [optional] 
 **location** | [**[String]**](String.md)| location | [optional] 
 **family** | [**[String]**](String.md)| family | [optional] 
 **type** | [**[String]**](String.md)| type | [optional] 
 **series** | [**[String]**](String.md)| series | [optional] 
 **collectionStatus** | [**[String]**](String.md)| collectionStatus | [optional] 
 **collectionInterval** | [**[String]**](String.md)| collectionInterval | [optional] 
 **notSyncedForMinutes** | [**[String]**](String.md)| notSyncedForMinutes | [optional] 
 **errorCode** | [**[String]**](String.md)| errorCode | [optional] 
 **errorDescription** | [**[String]**](String.md)| errorDescription | [optional] 
 **softwareVersion** | [**[String]**](String.md)| softwareVersion | [optional] 
 **softwareType** | [**[String]**](String.md)| softwareType | [optional] 
 **platformId** | [**[String]**](String.md)| platformId | [optional] 
 **role** | [**[String]**](String.md)| role | [optional] 
 **reachabilityStatus** | [**[String]**](String.md)| reachabilityStatus | [optional] 
 **upTime** | [**[String]**](String.md)| upTime | [optional] 
 **associatedWlcIp** | [**[String]**](String.md)| associatedWlcIp | [optional] 
 **licenseName** | [**[String]**](String.md)| licenseName | [optional] 
 **licenseType** | [**[String]**](String.md)| licenseType | [optional] 
 **licenseStatus** | [**[String]**](String.md)| licenseStatus | [optional] 
 **modulename** | [**[String]**](String.md)| moduleName | [optional] 
 **moduleequpimenttype** | [**[String]**](String.md)| moduleEqupimentType | [optional] 
 **moduleservicestate** | [**[String]**](String.md)| moduleServiceState | [optional] 
 **modulevendorequipmenttype** | [**[String]**](String.md)| moduleVendorEquipmentType | [optional] 
 **modulepartnumber** | [**[String]**](String.md)| modulePartNumber | [optional] 
 **moduleoperationstatecode** | [**[String]**](String.md)| moduleOperationStateCode | [optional] 
 **id** | **String**| Accepts comma separated id&#39;s and return list of network-devices for the given id&#39;s. If invalid or not-found id&#39;s are provided, null entry will be returned in the list. | [optional] 

### Return type

[**NetworkDeviceListResult**](NetworkDeviceListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceAutocomplete"></a>
# **getNetworkDeviceAutocomplete**
> RetrievesAllNetworkDevicesResponse getNetworkDeviceAutocomplete(opts)

Retrieves all network devices

Gets the list of first 500 network devices sorted lexicographically based on host name. It can be filtered using management IP address, mac address, hostname and location name. If id param is provided, it will be returning the list of network-devices for the given id&#39;s and other request params will be ignored. In case of autocomplete request, returns the list of specified attributes.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var opts = { 
  'vrfName': "vrfName_example", // String | vrfName
  'managementIpAddress': "managementIpAddress_example", // String | managementIpAddress
  'hostname': "hostname_example", // String | hostname
  'macAddress': "macAddress_example", // String | macAddress
  'family': "family_example", // String | family
  'collectionStatus': "collectionStatus_example", // String | collectionStatus
  'collectionInterval': "collectionInterval_example", // String | collectionInterval
  'softwareVersion': "softwareVersion_example", // String | softwareVersion
  'softwareType': "softwareType_example", // String | softwareType
  'reachabilityStatus': "reachabilityStatus_example", // String | reachabilityStatus
  'reachabilityFailureReason': "reachabilityFailureReason_example", // String | reachabilityFailureReason
  'errorCode': "errorCode_example", // String | errorCode
  'platformId': "platformId_example", // String | platformId
  'series': "series_example", // String | series
  'type': "type_example", // String | type
  'serialNumber': "serialNumber_example", // String | serialNumber
  'upTime': "upTime_example", // String | upTime
  'role': "role_example", // String | role
  'roleSource': "roleSource_example", // String | roleSource
  'associatedWlcIp': "associatedWlcIp_example", // String | associatedWlcIp
  'offset': "offset_example", // String | offset
  'limit': "limit_example" // String | limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceAutocomplete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vrfName** | **String**| vrfName | [optional] 
 **managementIpAddress** | **String**| managementIpAddress | [optional] 
 **hostname** | **String**| hostname | [optional] 
 **macAddress** | **String**| macAddress | [optional] 
 **family** | **String**| family | [optional] 
 **collectionStatus** | **String**| collectionStatus | [optional] 
 **collectionInterval** | **String**| collectionInterval | [optional] 
 **softwareVersion** | **String**| softwareVersion | [optional] 
 **softwareType** | **String**| softwareType | [optional] 
 **reachabilityStatus** | **String**| reachabilityStatus | [optional] 
 **reachabilityFailureReason** | **String**| reachabilityFailureReason | [optional] 
 **errorCode** | **String**| errorCode | [optional] 
 **platformId** | **String**| platformId | [optional] 
 **series** | **String**| series | [optional] 
 **type** | **String**| type | [optional] 
 **serialNumber** | **String**| serialNumber | [optional] 
 **upTime** | **String**| upTime | [optional] 
 **role** | **String**| role | [optional] 
 **roleSource** | **String**| roleSource | [optional] 
 **associatedWlcIp** | **String**| associatedWlcIp | [optional] 
 **offset** | **String**| offset | [optional] 
 **limit** | **String**| limit | [optional] 

### Return type

[**RetrievesAllNetworkDevicesResponse**](RetrievesAllNetworkDevicesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceBriefById"></a>
# **getNetworkDeviceBriefById**
> NetworkDeviceBriefNIOResult getNetworkDeviceBriefById(id)

Retrieves network device brief by ID

Gets brief network device info such as hostname, management IP address for the given device ID

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var id = "id_example"; // String | Device ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceBriefById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Device ID | 

### Return type

[**NetworkDeviceBriefNIOResult**](NetworkDeviceBriefNIOResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceById"></a>
# **getNetworkDeviceById**
> NetworkDeviceResult getNetworkDeviceById(id)

Retrieves network device by ID

Gets the network device for the given device ID

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var id = "id_example"; // String | Device ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Device ID | 

### Return type

[**NetworkDeviceResult**](NetworkDeviceResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceCollectionScheduleById"></a>
# **getNetworkDeviceCollectionScheduleById**
> CountResult getNetworkDeviceCollectionScheduleById(id)

Retrieves the collection interval specified by device ID

Retrieves collection interval by device id

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var id = "id_example"; // String | Device ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceCollectionScheduleById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Device ID | 

### Return type

[**CountResult**](CountResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceCollectionScheduleGlobal"></a>
# **getNetworkDeviceCollectionScheduleGlobal**
> CountResult getNetworkDeviceCollectionScheduleGlobal()

Retrieves the collection interval of all devices

Retrieves collection interval of all devices

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceCollectionScheduleGlobal(callback);
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

<a name="getNetworkDeviceConfig"></a>
# **getNetworkDeviceConfig**
> RawCliInfoNIOListResult getNetworkDeviceConfig()

Retrieves device config list

Gets the config for all devices

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceConfig(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RawCliInfoNIOListResult**](RawCliInfoNIOListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceConfigByNetworkDeviceId"></a>
# **getNetworkDeviceConfigByNetworkDeviceId**
> SuccessResult getNetworkDeviceConfigByNetworkDeviceId(networkDeviceId)

Retrieves device config

Gets the device config by device ID

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var networkDeviceId = "networkDeviceId_example"; // String | networkDeviceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceConfigByNetworkDeviceId(networkDeviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkDeviceId** | **String**| networkDeviceId | 

### Return type

[**SuccessResult**](SuccessResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceConfigCount"></a>
# **getNetworkDeviceConfigCount**
> CountResult getNetworkDeviceConfigCount()

Retrieves config count

Gets the count of device configs

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceConfigCount(callback);
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

<a name="getNetworkDeviceCount"></a>
# **getNetworkDeviceCount**
> CountResult getNetworkDeviceCount()

Retrieves network device count

Gets the count of network devices filtered by management IP address, mac address, hostname and location name

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceCount(callback);
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

<a name="getNetworkDeviceFunctionalCapability"></a>
# **getNetworkDeviceFunctionalCapability**
> FunctionalCapabilityListResult getNetworkDeviceFunctionalCapability(opts)

Retrieves all functional-capability of devices

Gets the functional-capability for given devices

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var opts = { 
  'deviceId': "deviceId_example", // String | Accepts comma separated deviceid's and return list of functional-capabilities for the given id's. If invalid or not-found id's are provided, null entry will be returned in the list.
  'functionName': ["functionName_example"] // [String] | functionName
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceFunctionalCapability(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| Accepts comma separated deviceid&#39;s and return list of functional-capabilities for the given id&#39;s. If invalid or not-found id&#39;s are provided, null entry will be returned in the list. | [optional] 
 **functionName** | [**[String]**](String.md)| functionName | [optional] 

### Return type

[**FunctionalCapabilityListResult**](FunctionalCapabilityListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceFunctionalCapabilityById"></a>
# **getNetworkDeviceFunctionalCapabilityById**
> FunctionalCapabilityResult getNetworkDeviceFunctionalCapabilityById(id)

Gets the functional capability by id

Retrieve functional capability with given id

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var id = "id_example"; // String | Device ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceFunctionalCapabilityById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Device ID | 

### Return type

[**FunctionalCapabilityResult**](FunctionalCapabilityResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceFunctionalCcapabilityAutocomplete"></a>
# **getNetworkDeviceFunctionalCcapabilityAutocomplete**
> SuccessResultList getNetworkDeviceFunctionalCcapabilityAutocomplete(opts)

Retrieve the values of given fields

Gets the field values based on given filter

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var opts = { 
  'functionName': ["functionName_example"] // [String] | functionName
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceFunctionalCcapabilityAutocomplete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionName** | [**[String]**](String.md)| functionName | [optional] 

### Return type

[**SuccessResultList**](SuccessResultList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceIpAddressByIpAddress"></a>
# **getNetworkDeviceIpAddressByIpAddress**
> NetworkDeviceResult getNetworkDeviceIpAddressByIpAddress(ipAddress)

Retrieves network device by IP address

Gets the network device with the given IP address

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var ipAddress = "ipAddress_example"; // String | Device IP address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceIpAddressByIpAddress(ipAddress, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipAddress** | **String**| Device IP address | 

### Return type

[**NetworkDeviceResult**](NetworkDeviceResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceMerakiOrganizationById"></a>
# **getNetworkDeviceMerakiOrganizationById**
> SuccessResultList getNetworkDeviceMerakiOrganizationById(id)

Get the organizations chosen while adding the meraki dashboard

This method is used to get the selected organizations for the meraki dashboard

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceMerakiOrganizationById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

[**SuccessResultList**](SuccessResultList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceModule"></a>
# **getNetworkDeviceModule**
> ModuleListResult getNetworkDeviceModule(deviceId, opts)

Gives all the modules associated with given device id

Get modules of the given device id

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var deviceId = "deviceId_example"; // String | deviceId

var opts = { 
  'limit': "limit_example", // String | limit
  'offset': "offset_example", // String | offset
  'nameList': ["nameList_example"], // [String] | nameList
  'vendorEquipmentTypeList': ["vendorEquipmentTypeList_example"], // [String] | vendorEquipmentTypeList
  'partNumberList': ["partNumberList_example"], // [String] | partNumberList
  'operationalStateCodeList': ["operationalStateCodeList_example"] // [String] | operationalStateCodeList
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceModule(deviceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **limit** | **String**| limit | [optional] 
 **offset** | **String**| offset | [optional] 
 **nameList** | [**[String]**](String.md)| nameList | [optional] 
 **vendorEquipmentTypeList** | [**[String]**](String.md)| vendorEquipmentTypeList | [optional] 
 **partNumberList** | [**[String]**](String.md)| partNumberList | [optional] 
 **operationalStateCodeList** | [**[String]**](String.md)| operationalStateCodeList | [optional] 

### Return type

[**ModuleListResult**](ModuleListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceModuleById"></a>
# **getNetworkDeviceModuleById**
> ModuleResult getNetworkDeviceModuleById(id)

Gives Module info by its id

Get module by id

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceModuleById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

[**ModuleResult**](ModuleResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceModuleCount"></a>
# **getNetworkDeviceModuleCount**
> CountResult getNetworkDeviceModuleCount(deviceId, opts)

Gives total number of Modules

Get Module Count

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var deviceId = "deviceId_example"; // String | deviceId

var opts = { 
  'nameList': ["nameList_example"], // [String] | nameList
  'vendorEquipmentTypeList': ["vendorEquipmentTypeList_example"], // [String] | vendorEquipmentTypeList
  'partNumberList': ["partNumberList_example"], // [String] | partNumberList
  'operationalStateCodeList': ["operationalStateCodeList_example"] // [String] | operationalStateCodeList
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceModuleCount(deviceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **nameList** | [**[String]**](String.md)| nameList | [optional] 
 **vendorEquipmentTypeList** | [**[String]**](String.md)| vendorEquipmentTypeList | [optional] 
 **partNumberList** | [**[String]**](String.md)| partNumberList | [optional] 
 **operationalStateCodeList** | [**[String]**](String.md)| operationalStateCodeList | [optional] 

### Return type

[**CountResult**](CountResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDevicePollerCliLegitReads"></a>
# **getNetworkDevicePollerCliLegitReads**
> LegitCliKeyResult getNetworkDevicePollerCliLegitReads()

Get all keywords of CLIs accepted by command runner

Get valid keywords

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDevicePollerCliLegitReads(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**LegitCliKeyResult**](LegitCliKeyResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceRange"></a>
# **getNetworkDeviceRange**
> NetworkDeviceListResult getNetworkDeviceRange(startIndex, recordsToReturn)

Retrieves network device by range

Gets the list of network devices for the given range

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var startIndex = 56; // Number | Start index

var recordsToReturn = 56; // Number | Number of records to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceRange(startIndex, recordsToReturn, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startIndex** | **Number**| Start index | 
 **recordsToReturn** | **Number**| Number of records to return | 

### Return type

[**NetworkDeviceListResult**](NetworkDeviceListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceSerialNumberBySerialNumber"></a>
# **getNetworkDeviceSerialNumberBySerialNumber**
> NetworkDeviceResult getNetworkDeviceSerialNumberBySerialNumber(serialNumber)

Retrieves network device by serial number

Gets the network device with the given serial number

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var serialNumber = "serialNumber_example"; // String | Device serial number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceSerialNumberBySerialNumber(serialNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serialNumber** | **String**| Device serial number | 

### Return type

[**NetworkDeviceResult**](NetworkDeviceResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceTenantinfoMacaddress"></a>
# **getNetworkDeviceTenantinfoMacaddress**
> RegisterNetworkDeviceResult getNetworkDeviceTenantinfoMacaddress(opts)

Updates certificate validation status and returns tenantId

Registers a device for WSA notification

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var opts = { 
  'serialNumber': "serialNumber_example", // String | Serial number of the device
  'macaddress': "macaddress_example" // String | Mac addres of the device
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceTenantinfoMacaddress(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serialNumber** | **String**| Serial number of the device | [optional] 
 **macaddress** | **String**| Mac addres of the device | [optional] 

### Return type

[**RegisterNetworkDeviceResult**](RegisterNetworkDeviceResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceVlanById"></a>
# **getNetworkDeviceVlanById**
> VlanListResult getNetworkDeviceVlanById(id, opts)

Retrieves list of VLAN data that are associated with interface for a device

getDeviceVLANData

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var id = "id_example"; // String | deviceUUID

var opts = { 
  'interfaceType': "interfaceType_example" // String | Vlan assocaited with sub-interface
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceVlanById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| deviceUUID | 
 **interfaceType** | **String**| Vlan assocaited with sub-interface | [optional] 

### Return type

[**VlanListResult**](VlanListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkDeviceWirelessInfoById"></a>
# **getNetworkDeviceWirelessInfoById**
> WirelessInfoResult getNetworkDeviceWirelessInfoById(id)

Retrieves wireless lan conrtoller info by Device ID

Gets the wireless lan controller info using the given device ID

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var id = "id_example"; // String | Device ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkDeviceWirelessInfoById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Device ID | 

### Return type

[**WirelessInfoResult**](WirelessInfoResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postNetworkDevice"></a>
# **postNetworkDevice**
> TaskIdResult postNetworkDevice(request)

Network device POST api

Adds the device with given credential

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var request = new Swagger.InventoryDeviceInfo(); // InventoryDeviceInfo | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postNetworkDevice(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**InventoryDeviceInfo**](InventoryDeviceInfo.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postNetworkDeviceFile"></a>
# **postNetworkDeviceFile**
> TaskIdResult postNetworkDeviceFile(request)

Export network-device to file

Export the selected network-device to a file

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var request = new Swagger.ExportDeviceDTO(); // ExportDeviceDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postNetworkDeviceFile(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ExportDeviceDTO**](ExportDeviceDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postNetworkDevicePollerCliReadRequest"></a>
# **postNetworkDevicePollerCliReadRequest**
> TaskIdResult postNetworkDevicePollerCliReadRequest(request)

Run read-only commands on devices to get their real-time configuration

Submit request for read-only CLIs

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var request = new Swagger.CommandRunnerDTO(); // CommandRunnerDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postNetworkDevicePollerCliReadRequest(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CommandRunnerDTO**](CommandRunnerDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putNetworkDevice"></a>
# **putNetworkDevice**
> TaskIdResult putNetworkDevice(request)

Network device sync api

Sync the devices provided as input

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var request = new Swagger.InventoryDeviceInfo(); // InventoryDeviceInfo | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putNetworkDevice(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**InventoryDeviceInfo**](InventoryDeviceInfo.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putNetworkDeviceBrief"></a>
# **putNetworkDeviceBrief**
> TaskIdResult putNetworkDeviceBrief(request)

Updates network device role

Updates the role of the device as access, core, distribution, border router

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var request = new Swagger.NetworkDeviceBriefNIO(); // NetworkDeviceBriefNIO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putNetworkDeviceBrief(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**NetworkDeviceBriefNIO**](NetworkDeviceBriefNIO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putNetworkDeviceSync"></a>
# **putNetworkDeviceSync**
> TaskIdResult putNetworkDeviceSync(request, opts)

Network device sync api

Sync&#39;s the devices. If forceSync param is false (default) then the sync would run in normal priority thread. If forceSync param is true then the sync would run in high priority thread if avaiable, else the sync will fail. Result can be seen in the child task of each device

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.NetworkDeviceApi();

var request = new Swagger.NetworkDeviceSyncApiRequest(); // NetworkDeviceSyncApiRequest | request

var opts = { 
  'forceSync': true // Boolean | forceSync
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putNetworkDeviceSync(request, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**NetworkDeviceSyncApiRequest**](NetworkDeviceSyncApiRequest.md)| request | 
 **forceSync** | **Boolean**| forceSync | [optional] 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

