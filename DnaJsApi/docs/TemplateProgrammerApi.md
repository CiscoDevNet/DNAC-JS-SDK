# Swagger.TemplateProgrammerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTemplateProgrammerProjectByProjectId**](TemplateProgrammerApi.md#deleteTemplateProgrammerProjectByProjectId) | **DELETE** /api/v1/template-programmer/project/${projectId} | Deletes the project
[**deleteTemplateProgrammerTemplateByTemplateId**](TemplateProgrammerApi.md#deleteTemplateProgrammerTemplateByTemplateId) | **DELETE** /api/v1/template-programmer/template/${templateId} | Deletes the template
[**getTemplateProgrammerProject**](TemplateProgrammerApi.md#getTemplateProgrammerProject) | **GET** /api/v1/template-programmer/project | Gets a list of projects
[**getTemplateProgrammerTemplate**](TemplateProgrammerApi.md#getTemplateProgrammerTemplate) | **GET** /api/v1/template-programmer/template | Gets the templates available depending on the criteria
[**getTemplateProgrammerTemplateDeployStatusByDeploymentId**](TemplateProgrammerApi.md#getTemplateProgrammerTemplateDeployStatusByDeploymentId) | **GET** /api/v1/template-programmer/template/deploy/status/${deploymentId} | Status of template deployment
[**getTemplateProgrammerTemplateVersionByTempleteId**](TemplateProgrammerApi.md#getTemplateProgrammerTemplateVersionByTempleteId) | **GET** /api/v1/template-programmer/template/version/${templateId} | Gets all the versions of a given template
[**postTemplateProgrammerProject**](TemplateProgrammerApi.md#postTemplateProgrammerProject) | **POST** /api/v1/template-programmer/project | Create Project
[**postTemplateProgrammerProjectTemplateByProjectId**](TemplateProgrammerApi.md#postTemplateProgrammerProjectTemplateByProjectId) | **POST** /api/v1/template-programmer/project/${projectId}/template | Create Template
[**postTemplateProgrammerTemplateDeploy**](TemplateProgrammerApi.md#postTemplateProgrammerTemplateDeploy) | **POST** /api/v1/template-programmer/template/deploy | Deploy Template
[**postTemplateProgrammerTemplateVersion**](TemplateProgrammerApi.md#postTemplateProgrammerTemplateVersion) | **POST** /api/v1/template-programmer/template/version | Version Template
[**putTemplateProgrammerProject**](TemplateProgrammerApi.md#putTemplateProgrammerProject) | **PUT** /api/v1/template-programmer/project | Update Project
[**putTemplateProgrammerTemplate**](TemplateProgrammerApi.md#putTemplateProgrammerTemplate) | **PUT** /api/v1/template-programmer/template | Update Template
[**putTemplateProgrammerTemplatePreview**](TemplateProgrammerApi.md#putTemplateProgrammerTemplatePreview) | **PUT** /api/v1/template-programmer/template/preview | Preview Template
[**templateProgrammerTemplateByTemplateId**](TemplateProgrammerApi.md#templateProgrammerTemplateByTemplateId) | **GET** /api/v1/template-programmer/template/${templateId} | Gets details of a given template


<a name="deleteTemplateProgrammerProjectByProjectId"></a>
# **deleteTemplateProgrammerProjectByProjectId**
> TaskIdResult deleteTemplateProgrammerProjectByProjectId(projectId)

Deletes the project

Deletes the project

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TemplateProgrammerApi();

var projectId = "projectId_example"; // String | projectId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteTemplateProgrammerProjectByProjectId(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| projectId | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTemplateProgrammerTemplateByTemplateId"></a>
# **deleteTemplateProgrammerTemplateByTemplateId**
> TaskIdResult deleteTemplateProgrammerTemplateByTemplateId(templateId)

Deletes the template

Deletes the template

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TemplateProgrammerApi();

var templateId = "templateId_example"; // String | templateId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteTemplateProgrammerTemplateByTemplateId(templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**| templateId | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTemplateProgrammerProject"></a>
# **getTemplateProgrammerProject**
> CollectionProjectDTO getTemplateProgrammerProject(opts)

Gets a list of projects

List the projects

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TemplateProgrammerApi();

var opts = { 
  'name': "name_example" // String | Name of project to be searched
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTemplateProgrammerProject(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of project to be searched | [optional] 

### Return type

[**CollectionProjectDTO**](CollectionProjectDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTemplateProgrammerTemplate"></a>
# **getTemplateProgrammerTemplate**
> CollectionTemplateInfo getTemplateProgrammerTemplate(opts)

Gets the templates available depending on the criteria

Gets the templates available depending on the criteria

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TemplateProgrammerApi();

var opts = { 
  'projectId': "projectId_example", // String | projectId
  'softwareType': "softwareType_example", // String | softwareType
  'softwareVersion': "softwareVersion_example", // String | softwareVersion
  'productFamily': "productFamily_example", // String | productFamily
  'productSeries': "productSeries_example", // String | productSeries
  'productType': "productType_example", // String | productType
  'includeHead': true, // Boolean | includeHead
  'filterConflictingTemplates': true // Boolean | filterConflictingTemplates
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTemplateProgrammerTemplate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| projectId | [optional] 
 **softwareType** | **String**| softwareType | [optional] 
 **softwareVersion** | **String**| softwareVersion | [optional] 
 **productFamily** | **String**| productFamily | [optional] 
 **productSeries** | **String**| productSeries | [optional] 
 **productType** | **String**| productType | [optional] 
 **includeHead** | **Boolean**| includeHead | [optional] 
 **filterConflictingTemplates** | **Boolean**| filterConflictingTemplates | [optional] 

### Return type

[**CollectionTemplateInfo**](CollectionTemplateInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTemplateProgrammerTemplateDeployStatusByDeploymentId"></a>
# **getTemplateProgrammerTemplateDeployStatusByDeploymentId**
> TemplateDeploymentStatusDTO getTemplateProgrammerTemplateDeployStatusByDeploymentId(deploymentId)

Status of template deployment

API to retrieve the status of template deployment.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TemplateProgrammerApi();

var deploymentId = "deploymentId_example"; // String | deploymentId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTemplateProgrammerTemplateDeployStatusByDeploymentId(deploymentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentId** | **String**| deploymentId | 

### Return type

[**TemplateDeploymentStatusDTO**](TemplateDeploymentStatusDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTemplateProgrammerTemplateVersionByTempleteId"></a>
# **getTemplateProgrammerTemplateVersionByTempleteId**
> CollectionTemplateInfo getTemplateProgrammerTemplateVersionByTempleteId(templateId)

Gets all the versions of a given template

Get all the versions of template

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TemplateProgrammerApi();

var templateId = "templateId_example"; // String | templateId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTemplateProgrammerTemplateVersionByTempleteId(templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**| templateId | 

### Return type

[**CollectionTemplateInfo**](CollectionTemplateInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTemplateProgrammerProject"></a>
# **postTemplateProgrammerProject**
> TaskIdResult postTemplateProgrammerProject(request)

Create Project

This API is used to create a new project.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TemplateProgrammerApi();

var request = new Swagger.ProjectDTO(); // ProjectDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postTemplateProgrammerProject(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ProjectDTO**](ProjectDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTemplateProgrammerProjectTemplateByProjectId"></a>
# **postTemplateProgrammerProjectTemplateByProjectId**
> TaskIdResult postTemplateProgrammerProjectTemplateByProjectId(request, projectId)

Create Template

API to create a template.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TemplateProgrammerApi();

var request = new Swagger.TemplateDTO(); // TemplateDTO | request

var projectId = "projectId_example"; // String | projectId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postTemplateProgrammerProjectTemplateByProjectId(request, projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**TemplateDTO**](TemplateDTO.md)| request | 
 **projectId** | **String**| projectId | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTemplateProgrammerTemplateDeploy"></a>
# **postTemplateProgrammerTemplateDeploy**
> TemplateDeploymentStatusDTO postTemplateProgrammerTemplateDeploy(request)

Deploy Template

API to deploy a template.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TemplateProgrammerApi();

var request = new Swagger.TemplateDeploymentInfo(); // TemplateDeploymentInfo | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postTemplateProgrammerTemplateDeploy(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**TemplateDeploymentInfo**](TemplateDeploymentInfo.md)| request | 

### Return type

[**TemplateDeploymentStatusDTO**](TemplateDeploymentStatusDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTemplateProgrammerTemplateVersion"></a>
# **postTemplateProgrammerTemplateVersion**
> TaskIdResult postTemplateProgrammerTemplateVersion(request)

Version Template

API to version the current contents of the template.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TemplateProgrammerApi();

var request = new Swagger.TemplateVersionRequestDTO(); // TemplateVersionRequestDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postTemplateProgrammerTemplateVersion(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**TemplateVersionRequestDTO**](TemplateVersionRequestDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putTemplateProgrammerProject"></a>
# **putTemplateProgrammerProject**
> TaskIdResult putTemplateProgrammerProject(request)

Update Project

This API is used to update an existing project.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TemplateProgrammerApi();

var request = new Swagger.ProjectDTO(); // ProjectDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putTemplateProgrammerProject(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ProjectDTO**](ProjectDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putTemplateProgrammerTemplate"></a>
# **putTemplateProgrammerTemplate**
> TaskIdResult putTemplateProgrammerTemplate(request)

Update Template

API to update a template.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TemplateProgrammerApi();

var request = new Swagger.TemplateDTO(); // TemplateDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putTemplateProgrammerTemplate(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**TemplateDTO**](TemplateDTO.md)| request | 

### Return type

[**TaskIdResult**](TaskIdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putTemplateProgrammerTemplatePreview"></a>
# **putTemplateProgrammerTemplatePreview**
> TemplatePreviewResponseDTO putTemplateProgrammerTemplatePreview(request)

Preview Template

API to preview a template.

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TemplateProgrammerApi();

var request = new Swagger.TemplatePreviewRequestDTO(); // TemplatePreviewRequestDTO | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putTemplateProgrammerTemplatePreview(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**TemplatePreviewRequestDTO**](TemplatePreviewRequestDTO.md)| request | 

### Return type

[**TemplatePreviewResponseDTO**](TemplatePreviewResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="templateProgrammerTemplateByTemplateId"></a>
# **templateProgrammerTemplateByTemplateId**
> TemplateDTO templateProgrammerTemplateByTemplateId(templateId)

Gets details of a given template

Details of the template

### Example
```javascript
var Swagger = require('swagger');

var apiInstance = new Swagger.TemplateProgrammerApi();

var templateId = "templateId_example"; // String | templateId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templateProgrammerTemplateByTemplateId(templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**| templateId | 

### Return type

[**TemplateDTO**](TemplateDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

