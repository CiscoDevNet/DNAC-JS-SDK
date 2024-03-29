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
    define(['ApiClient', 'model/CountResult', 'model/DiscoveryJobNIOListResult', 'model/DiscoveryNIO', 'model/DiscoveryNIOListResult', 'model/DiscoveryNIOResult', 'model/InventoryRequest', 'model/NetworkDeviceNIOListResult', 'model/SuccessResultList', 'model/TaskIdResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CountResult'), require('../model/DiscoveryJobNIOListResult'), require('../model/DiscoveryNIO'), require('../model/DiscoveryNIOListResult'), require('../model/DiscoveryNIOResult'), require('../model/InventoryRequest'), require('../model/NetworkDeviceNIOListResult'), require('../model/SuccessResultList'), require('../model/TaskIdResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.DiscoveryApi = factory(root.Swagger.ApiClient, root.Swagger.CountResult, root.Swagger.DiscoveryJobNIOListResult, root.Swagger.DiscoveryNIO, root.Swagger.DiscoveryNIOListResult, root.Swagger.DiscoveryNIOResult, root.Swagger.InventoryRequest, root.Swagger.NetworkDeviceNIOListResult, root.Swagger.SuccessResultList, root.Swagger.TaskIdResult);
  }
}(this, function(ApiClient, CountResult, DiscoveryJobNIOListResult, DiscoveryNIO, DiscoveryNIOListResult, DiscoveryNIOResult, InventoryRequest, NetworkDeviceNIOListResult, SuccessResultList, TaskIdResult) {
  'use strict';

  /**
   * Discovery service.
   * @module api/DiscoveryApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DiscoveryApi. 
   * @alias module:api/DiscoveryApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteDiscovery operation.
     * @callback module:api/DiscoveryApi~deleteDiscoveryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskIdResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes all discovery
     * Stops all the discoveries and removes them
     * @param {module:api/DiscoveryApi~deleteDiscoveryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskIdResult}
     */
    this.deleteDiscovery = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = TaskIdResult;

      return this.apiClient.callApi(
        '/api/v1/discovery', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDiscoveryById operation.
     * @callback module:api/DiscoveryApi~deleteDiscoveryByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskIdResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the discovery specified by id
     * Stops the discovery for the given ID and removes it
     * @param {String} id Discovery ID
     * @param {module:api/DiscoveryApi~deleteDiscoveryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskIdResult}
     */
    this.deleteDiscoveryById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDiscoveryById");
      }


      var pathParams = {
        'id': id
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
      var returnType = TaskIdResult;

      return this.apiClient.callApi(
        '/api/v1/discovery/${id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDiscoveryRange operation.
     * @callback module:api/DiscoveryApi~deleteDiscoveryRangeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskIdResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the discovery in the given range
     * Stops discovery for the given range and removes them
     * @param {Number} startIndex Start index
     * @param {Number} recordsToDelete Number of records to delete
     * @param {module:api/DiscoveryApi~deleteDiscoveryRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskIdResult}
     */
    this.deleteDiscoveryRange = function(startIndex, recordsToDelete, callback) {
      var postBody = null;

      // verify the required parameter 'startIndex' is set
      if (startIndex === undefined || startIndex === null) {
        throw new Error("Missing the required parameter 'startIndex' when calling deleteDiscoveryRange");
      }

      // verify the required parameter 'recordsToDelete' is set
      if (recordsToDelete === undefined || recordsToDelete === null) {
        throw new Error("Missing the required parameter 'recordsToDelete' when calling deleteDiscoveryRange");
      }


      var pathParams = {
        'startIndex': startIndex,
        'recordsToDelete': recordsToDelete
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
      var returnType = TaskIdResult;

      return this.apiClient.callApi(
        '/api/v1/discovery/${startIndex}/${recordsToDelete}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDiscoveryAutoCompleteById operation.
     * @callback module:api/DiscoveryApi~getDiscoveryAutoCompleteByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResultList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve autoComplete values from a discovery based on id
     * Gets the autoComplete values from a discovery job
     * @param {String} id id
     * @param {Object} opts Optional parameters
     * @param {String} opts.taskId taskId
     * @param {String} opts.ipAddress ipAddress
     * @param {String} opts.pingStatus pingStatus
     * @param {String} opts.snmpStatus snmpStatus
     * @param {String} opts.cliStatus cliStatus
     * @param {String} opts.netconfStatus netconfStatus
     * @param {String} opts.httpStatus httpStatus
     * @param {module:api/DiscoveryApi~getDiscoveryAutoCompleteByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResultList}
     */
    this.getDiscoveryAutoCompleteById = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDiscoveryAutoCompleteById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'taskId': opts['taskId'],
        'ipAddress': opts['ipAddress'],
        'pingStatus': opts['pingStatus'],
        'snmpStatus': opts['snmpStatus'],
        'cliStatus': opts['cliStatus'],
        'netconfStatus': opts['netconfStatus'],
        'httpStatus': opts['httpStatus'],
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
      var returnType = SuccessResultList;

      return this.apiClient.callApi(
        '/api/v1/discovery/${id}/autoComplete', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDiscoveryById operation.
     * @callback module:api/DiscoveryApi~getDiscoveryByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DiscoveryNIOResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the discovery specified by id
     * Gets discovery by ID
     * @param {String} id Discovery ID
     * @param {module:api/DiscoveryApi~getDiscoveryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DiscoveryNIOResult}
     */
    this.getDiscoveryById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDiscoveryById");
      }


      var pathParams = {
        'id': id
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
      var returnType = DiscoveryNIOResult;

      return this.apiClient.callApi(
        '/api/v1/discovery/${id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDiscoveryCount operation.
     * @callback module:api/DiscoveryApi~getDiscoveryCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the number of discoveries
     * Gets the count of all available discovery jobs
     * @param {module:api/DiscoveryApi~getDiscoveryCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CountResult}
     */
    this.getDiscoveryCount = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = CountResult;

      return this.apiClient.callApi(
        '/api/v1/discovery/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDiscoveryJob operation.
     * @callback module:api/DiscoveryApi~getDiscoveryJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DiscoveryJobNIOListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the list of discovery jobs for the given IP
     * Gets the list of discovery jobs for the given IP
     * @param {String} ipAddress ipAddress
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.name name
     * @param {module:api/DiscoveryApi~getDiscoveryJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DiscoveryJobNIOListResult}
     */
    this.getDiscoveryJob = function(ipAddress, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ipAddress' is set
      if (ipAddress === undefined || ipAddress === null) {
        throw new Error("Missing the required parameter 'ipAddress' when calling getDiscoveryJob");
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'ipAddress': ipAddress,
        'name': opts['name'],
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
      var returnType = DiscoveryJobNIOListResult;

      return this.apiClient.callApi(
        '/api/v1/discovery/job', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDiscoveryJobById operation.
     * @callback module:api/DiscoveryApi~getDiscoveryJobByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DiscoveryJobNIOListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves list of discovery jobs for the specified discovery id
     * Gets the list of discovery jobs for the given id. The result can optionally be filtered based on IP
     * @param {String} id Discovery ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.ipAddress ipAddress
     * @param {module:api/DiscoveryApi~getDiscoveryJobByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DiscoveryJobNIOListResult}
     */
    this.getDiscoveryJobById = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDiscoveryJobById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'ipAddress': opts['ipAddress'],
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
      var returnType = DiscoveryJobNIOListResult;

      return this.apiClient.callApi(
        '/api/v1/discovery/${id}/job', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDiscoveryNetworkDeviceByIdRange operation.
     * @callback module:api/DiscoveryApi~getDiscoveryNetworkDeviceByIdRangeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NetworkDeviceNIOListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the range of network devices discovered for the given discovery
     * Gets the network devices discovered for the given discovery and for the given range. The maximum number of records that could be retrieved is 500
     * @param {String} id Discovery ID
     * @param {Number} startIndex Start index
     * @param {Number} recordsToReturn Number of records to return
     * @param {Object} opts Optional parameters
     * @param {String} opts.taskId taskId
     * @param {module:api/DiscoveryApi~getDiscoveryNetworkDeviceByIdRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NetworkDeviceNIOListResult}
     */
    this.getDiscoveryNetworkDeviceByIdRange = function(id, startIndex, recordsToReturn, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDiscoveryNetworkDeviceByIdRange");
      }

      // verify the required parameter 'startIndex' is set
      if (startIndex === undefined || startIndex === null) {
        throw new Error("Missing the required parameter 'startIndex' when calling getDiscoveryNetworkDeviceByIdRange");
      }

      // verify the required parameter 'recordsToReturn' is set
      if (recordsToReturn === undefined || recordsToReturn === null) {
        throw new Error("Missing the required parameter 'recordsToReturn' when calling getDiscoveryNetworkDeviceByIdRange");
      }


      var pathParams = {
        'id': id,
        'startIndex': startIndex,
        'recordsToReturn': recordsToReturn
      };
      var queryParams = {
        'taskId': opts['taskId'],
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
      var returnType = NetworkDeviceNIOListResult;

      return this.apiClient.callApi(
        '/api/v1/discovery/${id}/network-device/${startIndex}/${recordsToReturn}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDiscoveryNetworkDeviceCountById operation.
     * @callback module:api/DiscoveryApi~getDiscoveryNetworkDeviceCountByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the number of network devices discovered in the discovery specified by id
     * Gets the count of network devices discovered in the given discovery
     * @param {String} id Discovery ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.taskId taskId
     * @param {module:api/DiscoveryApi~getDiscoveryNetworkDeviceCountByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CountResult}
     */
    this.getDiscoveryNetworkDeviceCountById = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDiscoveryNetworkDeviceCountById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'taskId': opts['taskId'],
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
        '/api/v1/discovery/${id}/network-device/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDiscoveryNetworkNetworkDeviceById operation.
     * @callback module:api/DiscoveryApi~getDiscoveryNetworkNetworkDeviceByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NetworkDeviceNIOListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the network devices discovered in the discovery specified by id
     * Gets the network devices discovered for the given discovery
     * @param {String} id id
     * @param {Object} opts Optional parameters
     * @param {String} opts.taskId taskId
     * @param {module:api/DiscoveryApi~getDiscoveryNetworkNetworkDeviceByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NetworkDeviceNIOListResult}
     */
    this.getDiscoveryNetworkNetworkDeviceById = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDiscoveryNetworkNetworkDeviceById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'taskId': opts['taskId'],
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
      var returnType = NetworkDeviceNIOListResult;

      return this.apiClient.callApi(
        '/api/v1/discovery/${id}/network-device', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDiscoveryRange operation.
     * @callback module:api/DiscoveryApi~getDiscoveryRangeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DiscoveryNIOListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the discovery in the given range
     * Gets the discovery for the range specified
     * @param {Number} startIndex Start index
     * @param {Number} recordsToReturn Number of records to return
     * @param {module:api/DiscoveryApi~getDiscoveryRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DiscoveryNIOListResult}
     */
    this.getDiscoveryRange = function(startIndex, recordsToReturn, callback) {
      var postBody = null;

      // verify the required parameter 'startIndex' is set
      if (startIndex === undefined || startIndex === null) {
        throw new Error("Missing the required parameter 'startIndex' when calling getDiscoveryRange");
      }

      // verify the required parameter 'recordsToReturn' is set
      if (recordsToReturn === undefined || recordsToReturn === null) {
        throw new Error("Missing the required parameter 'recordsToReturn' when calling getDiscoveryRange");
      }


      var pathParams = {
        'startIndex': startIndex,
        'recordsToReturn': recordsToReturn
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
      var returnType = DiscoveryNIOListResult;

      return this.apiClient.callApi(
        '/api/v1/discovery/${startIndex}/${recordsToReturn}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDiscoverySummaryById operation.
     * @callback module:api/DiscoveryApi~getDiscoverySummaryByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve network devices from a discovery on given filters
     * Gets the network devices from a discovery job based on given filters
     * @param {String} id id
     * @param {Object} opts Optional parameters
     * @param {String} opts.taskId taskId
     * @param {String} opts.sortBy sortBy
     * @param {String} opts.sortOrder sortOrder
     * @param {Array.<String>} opts.ipAddress ipAddress
     * @param {Array.<String>} opts.pingStatus pingStatus
     * @param {Array.<String>} opts.snmpStatus snmpStatus
     * @param {Array.<String>} opts.cliStatus cliStatus
     * @param {Array.<String>} opts.netconfStatus netconfStatus
     * @param {Array.<String>} opts.httpStatus httpStatus
     * @param {module:api/DiscoveryApi~getDiscoverySummaryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CountResult}
     */
    this.getDiscoverySummaryById = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDiscoverySummaryById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'taskId': opts['taskId'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
      };
      var collectionQueryParams = {
        'ipAddress': {
          value: opts['ipAddress'],
          collectionFormat: 'csv'
        },
        'pingStatus': {
          value: opts['pingStatus'],
          collectionFormat: 'csv'
        },
        'snmpStatus': {
          value: opts['snmpStatus'],
          collectionFormat: 'csv'
        },
        'cliStatus': {
          value: opts['cliStatus'],
          collectionFormat: 'csv'
        },
        'netconfStatus': {
          value: opts['netconfStatus'],
          collectionFormat: 'csv'
        },
        'httpStatus': {
          value: opts['httpStatus'],
          collectionFormat: 'csv'
        },
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
        '/api/v1/discovery/${id}/summary', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postDiscovery operation.
     * @callback module:api/DiscoveryApi~postDiscoveryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskIdResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Starts a new discovery process and returns a task-id
     * Initiates discovery with the given parameters
     * @param {module:model/InventoryRequest} request request
     * @param {module:api/DiscoveryApi~postDiscoveryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskIdResult}
     */
    this.postDiscovery = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling postDiscovery");
      }


      var pathParams = {
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
      var returnType = TaskIdResult;

      return this.apiClient.callApi(
        '/api/v1/discovery', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putDiscovery operation.
     * @callback module:api/DiscoveryApi~putDiscoveryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskIdResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an existing discovery specified by id - only for starting/stopping the discovery
     * Stops or starts an existing discovery
     * @param {module:model/DiscoveryNIO} request request
     * @param {module:api/DiscoveryApi~putDiscoveryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskIdResult}
     */
    this.putDiscovery = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling putDiscovery");
      }


      var pathParams = {
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
      var returnType = TaskIdResult;

      return this.apiClient.callApi(
        '/api/v1/discovery', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
