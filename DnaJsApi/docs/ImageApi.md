# Swagger.ImageApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getImageImportation**](ImageApi.md#getImageImportation) | **GET** /api/v1/image/importation | Get image details with filter
[**postImageActivationDevice**](ImageApi.md#postImageActivationDevice) | **POST** /api/v1/image/activation/device | Trigger activation on a device
[**postImageDistribution**](ImageApi.md#postImageDistribution) | **POST** /api/v1/image/distribution | Trigger distribution of an image
[**postImageImportationSourceFile**](ImageApi.md#postImageImportationSourceFile) | **POST** /api/v1/image/importation/source/file | Import an image from local file system
[**postImageImportationSourceUrl**](ImageApi.md#postImageImportationSourceUrl) | **POST** /api/v1/image/importation/source/url | Trigger now or schedule import of an image from a URL


<a name="getImageImportation"></a>
# **getImageImportation**
> ImageInfoListResponse getImageImportation(opts)

Get image details with filter

Get image details based on filter criteria, use % for like operations. Example: filterByName &#x3D; cat3k%

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.ImageApi();

var opts = { 
  'imageUuid': "imageUuid_example", // String | imageUuid
  'name': "name_example", // String | name
  'family': "family_example", // String | family
  'applicationType': "applicationType_example", // String | applicationType
  'imageIntegrityStatus': "imageIntegrityStatus_example", // String | imageIntegrityStatus - FAILURE, UNKNOWN, VERIFIED
  'version': "version_example", // String | software Image Version
  'imageSeries': "imageSeries_example", // String | image Series
  'imageName': "imageName_example", // String | image Name
  'isTaggedGolden': true, // Boolean | is Tagged Golden
  'isCCORecommended': true, // Boolean | is recommended from cisco.com
  'isCCOLatest': true, // Boolean | is latest from cisco.com
  'createdTime': 56, // Number | time in milliseconds (epoch format)
  'imageSizeGreaterThan': 56, // Number | size in bytes
  'imageSizeLesserThan': 56, // Number | size in bytes
  'sortBy': "sortBy_example", // String | sort results by this field
  'sortOrder': "sortOrder_example", // String | sort order - 'asc' or 'des'. Default is asc
  'limit': 56, // Number | limit
  'offset': 56 // Number | offset
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getImageImportation(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageUuid** | **String**| imageUuid | [optional] 
 **name** | **String**| name | [optional] 
 **family** | **String**| family | [optional] 
 **applicationType** | **String**| applicationType | [optional] 
 **imageIntegrityStatus** | **String**| imageIntegrityStatus - FAILURE, UNKNOWN, VERIFIED | [optional] 
 **version** | **String**| software Image Version | [optional] 
 **imageSeries** | **String**| image Series | [optional] 
 **imageName** | **String**| image Name | [optional] 
 **isTaggedGolden** | **Boolean**| is Tagged Golden | [optional] 
 **isCCORecommended** | **Boolean**| is recommended from cisco.com | [optional] 
 **isCCOLatest** | **Boolean**| is latest from cisco.com | [optional] 
 **createdTime** | **Number**| time in milliseconds (epoch format) | [optional] 
 **imageSizeGreaterThan** | **Number**| size in bytes | [optional] 
 **imageSizeLesserThan** | **Number**| size in bytes | [optional] 
 **sortBy** | **String**| sort results by this field | [optional] 
 **sortOrder** | **String**| sort order - &#39;asc&#39; or &#39;des&#39;. Default is asc | [optional] 
 **limit** | **Number**| limit | [optional] 
 **offset** | **Number**| offset | [optional] 

### Return type

[**ImageInfoListResponse**](ImageInfoListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postImageActivationDevice"></a>
# **postImageActivationDevice**
> TaskIdResult postImageActivationDevice(request, opts)

Trigger activation on a device

Performs activation of an image on a given device.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.ImageApi();

var request = new Swagger.ActivateDTO(); // ActivateDTO | request

var opts = { 
  'clientType': "clientType_example", // String | Client-type (Optional)
  'clientUrl': "clientUrl_example", // String | Client-url (Optional)
  'scheduleValidate': true // Boolean | scheduleValidate, validates data before schedule (Optional)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postImageActivationDevice(request, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ActivateDTO**](ActivateDTO.md)| request | 
 **clientType** | **String**| Client-type (Optional) | [optional] 
 **clientUrl** | **String**| Client-url (Optional) | [optional] 
 **scheduleValidate** | **Boolean**| scheduleValidate, validates data before schedule (Optional) | [optional] 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postImageDistribution"></a>
# **postImageDistribution**
> TaskIdResult postImageDistribution(request)

Trigger distribution of an image

Performs distribution of an image to a given device.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.ImageApi();

var request = new Swagger.DistributeDTO(); // DistributeDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postImageDistribution(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**DistributeDTO**](DistributeDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postImageImportationSourceFile"></a>
# **postImageImportationSourceFile**
> TaskIdResult postImageImportationSourceFile(opts)

Import an image from local file system

Imports an image to SWIM image repository from local file system. The image files with extensions bin, img, tar, smu, pie, aes, iso, ova, tar_gz and qcow2 are supported. Set siteUuid as -1 to tag as golden image.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.ImageApi();

var opts = { 
  'isThirdParty': true, // Boolean | Third party Image check
  'thirdPartyVendor': "thirdPartyVendor_example", // String | Third Party Vendor
  'thirdPartyImageFamily': "thirdPartyImageFamily_example", // String | Third Party image family
  'thirdPartyApplicationType': "thirdPartyApplicationType_example" // String | Third Party Application Type
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postImageImportationSourceFile(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isThirdParty** | **Boolean**| Third party Image check | [optional] 
 **thirdPartyVendor** | **String**| Third Party Vendor | [optional] 
 **thirdPartyImageFamily** | **String**| Third Party image family | [optional] 
 **thirdPartyApplicationType** | **String**| Third Party Application Type | [optional] 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postImageImportationSourceUrl"></a>
# **postImageImportationSourceUrl**
> TaskIdResult postImageImportationSourceUrl(request, opts)

Trigger now or schedule import of an image from a URL

Imports an image to SWIM image repository, source is any ftp or http URL. The image files with extensions bin, img, tar, smu, pie, aes, iso, ova, tar_gz and qcow2 are supported. Set siteUuid as -1 to tag as golden image.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.ImageApi();

var request = new Swagger.ImageImportFromUrlDTO(); // ImageImportFromUrlDTO | request

var opts = { 
  'scheduleAt': "scheduleAt_example", // String | Epoch Time (The number of milli-seconds since January 1 1970 UTC) at which the distribution should be scheduled (Optional) 
  'scheduleDesc': "scheduleDesc_example", // String | Custom Description (Optional)
  'scheduleOrigin': "scheduleOrigin_example" // String | Originator of this call (Optional)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postImageImportationSourceUrl(request, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ImageImportFromUrlDTO**](ImageImportFromUrlDTO.md)| request | 
 **scheduleAt** | **String**| Epoch Time (The number of milli-seconds since January 1 1970 UTC) at which the distribution should be scheduled (Optional)  | [optional] 
 **scheduleDesc** | **String**| Custom Description (Optional) | [optional] 
 **scheduleOrigin** | **String**| Originator of this call (Optional) | [optional] 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

