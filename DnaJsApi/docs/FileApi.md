# Swagger.FileApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFileByFileId**](FileApi.md#getFileByFileId) | **GET** /api/v1/file/${fileId} | Downloads a file referred by the fileId
[**getFileNamespace**](FileApi.md#getFileNamespace) | **GET** /api/v1/file/namespace | Returns list of available namespaces
[**getFileNamespaceByNameSpace**](FileApi.md#getFileNamespaceByNameSpace) | **GET** /api/v1/file/namespace/${nameSpace} | Returns list of files under a specific namespace


<a name="getFileByFileId"></a>
# **getFileByFileId**
> DownloadsAFileReferredByTheFileIdResponse getFileByFileId(fileId)

Downloads a file referred by the fileId

This method is used to download a file referred by the fileId

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.FileApi();

var fileId = "fileId_example"; // String | File Identification number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFileByFileId(fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**| File Identification number | 

### Return type

[**DownloadsAFileReferredByTheFileIdResponse**](DownloadsAFileReferredByTheFileIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFileNamespace"></a>
# **getFileNamespace**
> NameSpaceListResult getFileNamespace()

Returns list of available namespaces

This method is used to obtain a list of available namespaces

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.FileApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFileNamespace(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**NameSpaceListResult**](NameSpaceListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFileNamespaceByNameSpace"></a>
# **getFileNamespaceByNameSpace**
> FileObjectListResult getFileNamespaceByNameSpace(nameSpace)

Returns list of files under a specific namespace

This method is used to obtain a list of files under a specific namespace

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.FileApi();

var nameSpace = "nameSpace_example"; // String | A listing of fileId's


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFileNamespaceByNameSpace(nameSpace, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nameSpace** | **String**| A listing of fileId&#39;s | 

### Return type

[**FileObjectListResult**](FileObjectListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

