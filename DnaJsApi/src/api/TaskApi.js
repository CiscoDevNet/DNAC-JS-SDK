/**
 * Swagger
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CountResult', 'model/TaskDTOListResponse', 'model/TaskDTOResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CountResult'), require('../model/TaskDTOListResponse'), require('../model/TaskDTOResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.TaskApi = factory(root.Swagger.ApiClient, root.Swagger.CountResult, root.Swagger.TaskDTOListResponse, root.Swagger.TaskDTOResponse);
  }
}(this, function(ApiClient, CountResult, TaskDTOListResponse, TaskDTOResponse) {
  'use strict';

  /**
   * Task service.
   * @module api/TaskApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TaskApi. 
   * @alias module:api/TaskApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getTask operation.
     * @callback module:api/TaskApi~getTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskDTOListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get filtered tasks
     * This method is used to retrieve task(s) based on various filters
     * @param {Object} opts Optional parameters
     * @param {String} opts.startTime This is the epoch start time from which tasks need to be fetched
     * @param {String} opts.endTime This is the epoch end time upto which audit records need to be fetched
     * @param {String} opts.data Fetch tasks that contains this data
     * @param {String} opts.errorCode Fetch tasks that have this error code
     * @param {String} opts.serviceType Fetch tasks with this service type
     * @param {String} opts.username Fetch tasks with this username
     * @param {String} opts.progress Fetch tasks that contains this progress
     * @param {String} opts.isError Fetch tasks ended as success or failure. Valid values: true, false
     * @param {String} opts.failureReason Fetch tasks that contains this failure reason
     * @param {String} opts.parentId Fetch tasks that have this parent Id
     * @param {String} opts.offset offset
     * @param {String} opts.limit limit
     * @param {String} opts.sortBy Sort results by this field
     * @param {String} opts.order Sort order - asc or dsc
     * @param {module:api/TaskApi~getTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskDTOListResponse}
     */
    this.getTask = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'startTime': opts['startTime'],
        'endTime': opts['endTime'],
        'data': opts['data'],
        'errorCode': opts['errorCode'],
        'serviceType': opts['serviceType'],
        'username': opts['username'],
        'progress': opts['progress'],
        'isError': opts['isError'],
        'failureReason': opts['failureReason'],
        'parentId': opts['parentId'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sortBy': opts['sortBy'],
        'order': opts['order'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskDTOListResponse;

      return this.apiClient.callApi(
        '/api/v1/task', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaskByTaskId operation.
     * @callback module:api/TaskApi~getTaskByTaskIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskDTOResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getTruststoreFileCount
     * This method is used to retrieve a task based on their id
     * @param {String} taskId UUID of the Task
     * @param {module:api/TaskApi~getTaskByTaskIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskDTOResponse}
     */
    this.getTaskByTaskId = function(taskId, callback) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling getTaskByTaskId");
      }


      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskDTOResponse;

      return this.apiClient.callApi(
        '/api/v1/task/${taskId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaskCount operation.
     * @callback module:api/TaskApi~getTaskCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get task count
     * This method is used to retrieve task count
     * @param {Object} opts Optional parameters
     * @param {String} opts.startTime This is the epoch start time from which tasks need to be fetched
     * @param {String} opts.endTime This is the epoch end time upto which audit records need to be fetched
     * @param {String} opts.data Fetch tasks that contains this data
     * @param {String} opts.errorCode Fetch tasks that have this error code
     * @param {String} opts.serviceType Fetch tasks with this service type
     * @param {String} opts.username Fetch tasks with this username
     * @param {String} opts.progress Fetch tasks that contains this progress
     * @param {String} opts.isError Fetch tasks ended as success or failure. Valid values: true, false
     * @param {String} opts.failureReason Fetch tasks that contains this failure reason
     * @param {String} opts.parentId Fetch tasks that have this parent Id
     * @param {module:api/TaskApi~getTaskCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CountResult}
     */
    this.getTaskCount = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'startTime': opts['startTime'],
        'endTime': opts['endTime'],
        'data': opts['data'],
        'errorCode': opts['errorCode'],
        'serviceType': opts['serviceType'],
        'username': opts['username'],
        'progress': opts['progress'],
        'isError': opts['isError'],
        'failureReason': opts['failureReason'],
        'parentId': opts['parentId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CountResult;

      return this.apiClient.callApi(
        '/api/v1/task/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaskOperationByOperationIdRange operation.
     * @callback module:api/TaskApi~getTaskOperationByOperationIdRangeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskDTOListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getTaskByOperationId
     * This method is used to find root tasks assoicated to an operationid 
     * @param {String} operationId operationId
     * @param {Number} offset Index, minimum value is 0
     * @param {Number} limit The maximum value of {limit} supported is 500. &lt;br/&gt; Base 1 indexing for {limit}, minimum value is 1
     * @param {module:api/TaskApi~getTaskOperationByOperationIdRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskDTOListResponse}
     */
    this.getTaskOperationByOperationIdRange = function(operationId, offset, limit, callback) {
      var postBody = null;

      // verify the required parameter 'operationId' is set
      if (operationId === undefined || operationId === null) {
        throw new Error("Missing the required parameter 'operationId' when calling getTaskOperationByOperationIdRange");
      }

      // verify the required parameter 'offset' is set
      if (offset === undefined || offset === null) {
        throw new Error("Missing the required parameter 'offset' when calling getTaskOperationByOperationIdRange");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getTaskOperationByOperationIdRange");
      }


      var pathParams = {
        'operationId': operationId,
        'offset': offset,
        'limit': limit
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskDTOListResponse;

      return this.apiClient.callApi(
        '/api/v1/task/operation/${operationId}/${offset}/${limit}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaskTreeByTaskId operation.
     * @callback module:api/TaskApi~getTaskTreeByTaskIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskDTOListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Task Tree
     * This method is used to retrieve a task with its children tasks based on their id
     * @param {String} taskId UUID of the Task
     * @param {module:api/TaskApi~getTaskTreeByTaskIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskDTOListResponse}
     */
    this.getTaskTreeByTaskId = function(taskId, callback) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling getTaskTreeByTaskId");
      }


      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskDTOListResponse;

      return this.apiClient.callApi(
        '/api/v1/task/${taskId}/tree', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));