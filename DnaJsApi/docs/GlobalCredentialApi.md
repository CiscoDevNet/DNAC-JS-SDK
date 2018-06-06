# Swagger.GlobalCredentialApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteGlobalCredentialByGlobalCredentialId**](GlobalCredentialApi.md#deleteGlobalCredentialByGlobalCredentialId) | **DELETE** /api/v1/global-credential/${globalCredentialId} | Retrieves global credential by ID
[**getGlobalCredential**](GlobalCredentialApi.md#getGlobalCredential) | **GET** /api/v1/global-credential | Retrieves global credential for the given credential sub type
[**getGlobalCredentialById**](GlobalCredentialApi.md#getGlobalCredentialById) | **GET** /api/v1/global-credential/${id} | Retrieves credential sub type for the given credential Id
[**postGlobalCredentialCli**](GlobalCredentialApi.md#postGlobalCredentialCli) | **POST** /api/v1/global-credential/cli | Creates global CLI credential
[**postGlobalCredentialHttpRead**](GlobalCredentialApi.md#postGlobalCredentialHttpRead) | **POST** /api/v1/global-credential/http-read | Creates global HTTP read credentials
[**postGlobalCredentialHttpWrite**](GlobalCredentialApi.md#postGlobalCredentialHttpWrite) | **POST** /api/v1/global-credential/http-write | Creates global HTTP write credentials
[**postGlobalCredentialNetconf**](GlobalCredentialApi.md#postGlobalCredentialNetconf) | **POST** /api/v1/global-credential/netconf | Creates global netconf credential
[**postGlobalCredentialSnmpv2ReadCommunity**](GlobalCredentialApi.md#postGlobalCredentialSnmpv2ReadCommunity) | **POST** /api/v1/global-credential/snmpv2-read-community | Creates global SNMP read community
[**postGlobalCredentialSnmpv2WriteCommunity**](GlobalCredentialApi.md#postGlobalCredentialSnmpv2WriteCommunity) | **POST** /api/v1/global-credential/snmpv2-write-community | Creates global SNMP write community
[**postGlobalCredentialSnmpv3**](GlobalCredentialApi.md#postGlobalCredentialSnmpv3) | **POST** /api/v1/global-credential/snmpv3 | Creates global SNMPv3 credential
[**putGlobalCredentialByGlobalCredentialId**](GlobalCredentialApi.md#putGlobalCredentialByGlobalCredentialId) | **PUT** /api/v1/global-credential/${globalCredentialId} | Update global credential for network devices in site(s)
[**putGlobalCredentialCli**](GlobalCredentialApi.md#putGlobalCredentialCli) | **PUT** /api/v1/global-credential/cli | Updates global CLI credential
[**putGlobalCredentialHttpRead**](GlobalCredentialApi.md#putGlobalCredentialHttpRead) | **PUT** /api/v1/global-credential/http-read | Updates global HTTP Read credential
[**putGlobalCredentialHttpWrite**](GlobalCredentialApi.md#putGlobalCredentialHttpWrite) | **PUT** /api/v1/global-credential/http-write | Updates global HTTP Write credential
[**putGlobalCredentialNetconf**](GlobalCredentialApi.md#putGlobalCredentialNetconf) | **PUT** /api/v1/global-credential/netconf | Updates global netconf credential
[**putGlobalCredentialSnmpv2ReadCommunity**](GlobalCredentialApi.md#putGlobalCredentialSnmpv2ReadCommunity) | **PUT** /api/v1/global-credential/snmpv2-read-community | Updates global SNMP read community
[**putGlobalCredentialSnmpv2WriteCommunity**](GlobalCredentialApi.md#putGlobalCredentialSnmpv2WriteCommunity) | **PUT** /api/v1/global-credential/snmpv2-write-community | Updates global SNMP write community
[**putGlobalCredentialSnmpv3**](GlobalCredentialApi.md#putGlobalCredentialSnmpv3) | **PUT** /api/v1/global-credential/snmpv3 | Updates global SNMPv3 credential


<a name="deleteGlobalCredentialByGlobalCredentialId"></a>
# **deleteGlobalCredentialByGlobalCredentialId**
> TaskIdResult deleteGlobalCredentialByGlobalCredentialId(globalCredentialId)

Retrieves global credential by ID

This method is used to delete global credential for the given ID

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var globalCredentialId = "globalCredentialId_example"; // String | ID of global-credential


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteGlobalCredentialByGlobalCredentialId(globalCredentialId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **globalCredentialId** | **String**| ID of global-credential | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGlobalCredential"></a>
# **getGlobalCredential**
> GlobalCredentialListResult getGlobalCredential(opts)

Retrieves global credential for the given credential sub type

This method is used to get global credential for the given credential sub type

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var opts = { 
  'credentialSubType': "credentialSubType_example", // String | Credential type as CLI / SNMPV2_READ_COMMUNITY / SNMPV2_WRITE_COMMUNITY / SNMPV3 / HTTP_WRITE / HTTP_READ / NETCONF
  'sortBy': "sortBy_example", // String | sortBy
  'order': "order_example" // String | order
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGlobalCredential(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialSubType** | **String**| Credential type as CLI / SNMPV2_READ_COMMUNITY / SNMPV2_WRITE_COMMUNITY / SNMPV3 / HTTP_WRITE / HTTP_READ / NETCONF | [optional] 
 **sortBy** | **String**| sortBy | [optional] 
 **order** | **String**| order | [optional] 

### Return type

[**GlobalCredentialListResult**](GlobalCredentialListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGlobalCredentialById"></a>
# **getGlobalCredentialById**
> GlobalCredentialSubTypeResult getGlobalCredentialById(id)

Retrieves credential sub type for the given credential Id

This method is used to get credential sub type for the given Id

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var id = "id_example"; // String | Global Credential ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGlobalCredentialById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Global Credential ID | 

### Return type

[**GlobalCredentialSubTypeResult**](GlobalCredentialSubTypeResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postGlobalCredentialCli"></a>
# **postGlobalCredentialCli**
> TaskIdResult postGlobalCredentialCli(request)

Creates global CLI credential

This method is used to add global CLI credential

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var request = new Swagger.CLICredentialDTO(); // CLICredentialDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postGlobalCredentialCli(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CLICredentialDTO**](CLICredentialDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postGlobalCredentialHttpRead"></a>
# **postGlobalCredentialHttpRead**
> TaskIdResult postGlobalCredentialHttpRead(request)

Creates global HTTP read credentials

This method is used to add HTTP read credentials

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var request = new Swagger.HTTPReadCredentialDTO(); // HTTPReadCredentialDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postGlobalCredentialHttpRead(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**HTTPReadCredentialDTO**](HTTPReadCredentialDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postGlobalCredentialHttpWrite"></a>
# **postGlobalCredentialHttpWrite**
> TaskIdResult postGlobalCredentialHttpWrite(request)

Creates global HTTP write credentials

This method is used to add global HTTP write credentials

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var request = new Swagger.HTTPWriteCredentialDTO(); // HTTPWriteCredentialDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postGlobalCredentialHttpWrite(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**HTTPWriteCredentialDTO**](HTTPWriteCredentialDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postGlobalCredentialNetconf"></a>
# **postGlobalCredentialNetconf**
> TaskIdResult postGlobalCredentialNetconf(request)

Creates global netconf credential

This method is used to add global netconf credential

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var request = new Swagger.NetconfCredentialDTO(); // NetconfCredentialDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postGlobalCredentialNetconf(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**NetconfCredentialDTO**](NetconfCredentialDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postGlobalCredentialSnmpv2ReadCommunity"></a>
# **postGlobalCredentialSnmpv2ReadCommunity**
> TaskIdResult postGlobalCredentialSnmpv2ReadCommunity(request)

Creates global SNMP read community

This method is used to add global SNMP read community

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var request = new Swagger.SNMPvReadCommunityDTO(); // SNMPvReadCommunityDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postGlobalCredentialSnmpv2ReadCommunity(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SNMPvReadCommunityDTO**](SNMPvReadCommunityDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postGlobalCredentialSnmpv2WriteCommunity"></a>
# **postGlobalCredentialSnmpv2WriteCommunity**
> TaskIdResult postGlobalCredentialSnmpv2WriteCommunity(request)

Creates global SNMP write community

This method is used to add global SNMP write community

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var request = new Swagger.SNMPvWriteCommunityDTO(); // SNMPvWriteCommunityDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postGlobalCredentialSnmpv2WriteCommunity(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SNMPvWriteCommunityDTO**](SNMPvWriteCommunityDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postGlobalCredentialSnmpv3"></a>
# **postGlobalCredentialSnmpv3**
> TaskIdResult postGlobalCredentialSnmpv3(request)

Creates global SNMPv3 credential

This method is used to add global SNMPv3 credential

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var request = new Swagger.SNMPvCredentialDTO(); // SNMPvCredentialDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postGlobalCredentialSnmpv3(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SNMPvCredentialDTO**](SNMPvCredentialDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putGlobalCredentialByGlobalCredentialId"></a>
# **putGlobalCredentialByGlobalCredentialId**
> TaskIdResult putGlobalCredentialByGlobalCredentialId(request, globalCredentialId)

Update global credential for network devices in site(s)

Update global credential for network devices in site(s)

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var request = new Swagger.SitesInfoDTO(); // SitesInfoDTO | request

var globalCredentialId = "globalCredentialId_example"; // String | Global credential Uuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putGlobalCredentialByGlobalCredentialId(request, globalCredentialId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SitesInfoDTO**](SitesInfoDTO.md)| request | 
 **globalCredentialId** | **String**| Global credential Uuid | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putGlobalCredentialCli"></a>
# **putGlobalCredentialCli**
> TaskIdResult putGlobalCredentialCli(request)

Updates global CLI credential

This method is used to update global CLI credential

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var request = new Swagger.CLICredentialDTO(); // CLICredentialDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putGlobalCredentialCli(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CLICredentialDTO**](CLICredentialDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putGlobalCredentialHttpRead"></a>
# **putGlobalCredentialHttpRead**
> TaskIdResult putGlobalCredentialHttpRead(request)

Updates global HTTP Read credential

This method is used to update global HTTP Read credential

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var request = new Swagger.HTTPReadCredentialDTO(); // HTTPReadCredentialDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putGlobalCredentialHttpRead(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**HTTPReadCredentialDTO**](HTTPReadCredentialDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putGlobalCredentialHttpWrite"></a>
# **putGlobalCredentialHttpWrite**
> TaskIdResult putGlobalCredentialHttpWrite(request)

Updates global HTTP Write credential

This method is used to update global HTTP Write credential

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var request = new Swagger.HTTPWriteCredentialDTO(); // HTTPWriteCredentialDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putGlobalCredentialHttpWrite(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**HTTPWriteCredentialDTO**](HTTPWriteCredentialDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putGlobalCredentialNetconf"></a>
# **putGlobalCredentialNetconf**
> TaskIdResult putGlobalCredentialNetconf(request)

Updates global netconf credential

This method is used to update global netconf credential

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var request = new Swagger.NetconfCredentialDTO(); // NetconfCredentialDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putGlobalCredentialNetconf(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**NetconfCredentialDTO**](NetconfCredentialDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putGlobalCredentialSnmpv2ReadCommunity"></a>
# **putGlobalCredentialSnmpv2ReadCommunity**
> TaskIdResult putGlobalCredentialSnmpv2ReadCommunity(request)

Updates global SNMP read community

This method is used to update global SNMP read community

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var request = new Swagger.SNMPvReadCommunityDTO(); // SNMPvReadCommunityDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putGlobalCredentialSnmpv2ReadCommunity(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SNMPvReadCommunityDTO**](SNMPvReadCommunityDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putGlobalCredentialSnmpv2WriteCommunity"></a>
# **putGlobalCredentialSnmpv2WriteCommunity**
> TaskIdResult putGlobalCredentialSnmpv2WriteCommunity(request)

Updates global SNMP write community

This method is used to update global SNMP write community

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var request = new Swagger.SNMPvWriteCommunityDTO(); // SNMPvWriteCommunityDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putGlobalCredentialSnmpv2WriteCommunity(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SNMPvWriteCommunityDTO**](SNMPvWriteCommunityDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putGlobalCredentialSnmpv3"></a>
# **putGlobalCredentialSnmpv3**
> TaskIdResult putGlobalCredentialSnmpv3(request)

Updates global SNMPv3 credential

This method is used to update global SNMPv3 credential

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.GlobalCredentialApi();

var request = new Swagger.SNMPvCredentialDTO(); // SNMPvCredentialDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putGlobalCredentialSnmpv3(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SNMPvCredentialDTO**](SNMPvCredentialDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

