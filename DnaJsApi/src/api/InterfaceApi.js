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
    define(['ApiClient', 'model/CountResult', 'model/DeviceIfListResult', 'model/DeviceIfResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CountResult'), require('../model/DeviceIfListResult'), require('../model/DeviceIfResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.InterfaceApi = factory(root.Swagger.ApiClient, root.Swagger.CountResult, root.Swagger.DeviceIfListResult, root.Swagger.DeviceIfResult);
  }
}(this, function(ApiClient, CountResult, DeviceIfListResult, DeviceIfResult) {
  'use strict';

  /**
   * Interface service.
   * @module api/InterfaceApi
   * @version 1.0.0
   */

  /**
   * Constructs a new InterfaceApi. 
   * @alias module:api/InterfaceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getInterface operation.
     * @callback module:api/InterfaceApi~getInterfaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceIfListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves all interfaces
     * Gets all available interfaces with a maximum limit of 500
     * @param {module:api/InterfaceApi~getInterfaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceIfListResult}
     */
    this.getInterface = function(callback) {
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
      var returnType = DeviceIfListResult;

      return this.apiClient.callApi(
        '/api/v1/interface', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInterfaceById operation.
     * @callback module:api/InterfaceApi~getInterfaceByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceIfResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves interface by ID
     * Gets the interface for the given interface ID
     * @param {String} id Interface ID
     * @param {module:api/InterfaceApi~getInterfaceByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceIfResult}
     */
    this.getInterfaceById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getInterfaceById");
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
      var returnType = DeviceIfResult;

      return this.apiClient.callApi(
        '/api/v1/interface/${id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInterfaceCount operation.
     * @callback module:api/InterfaceApi~getInterfaceCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves interface count
     * Gets the count of interfaces for all devices
     * @param {module:api/InterfaceApi~getInterfaceCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CountResult}
     */
    this.getInterfaceCount = function(callback) {
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
        '/api/v1/interface/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInterfaceIpAddressByIpAddress operation.
     * @callback module:api/InterfaceApi~getInterfaceIpAddressByIpAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceIfListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves interfaces by IP address
     * Gets list of interfaces with the given IP address
     * @param {String} ipAddress IP address of the interface
     * @param {module:api/InterfaceApi~getInterfaceIpAddressByIpAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceIfListResult}
     */
    this.getInterfaceIpAddressByIpAddress = function(ipAddress, callback) {
      var postBody = null;

      // verify the required parameter 'ipAddress' is set
      if (ipAddress === undefined || ipAddress === null) {
        throw new Error("Missing the required parameter 'ipAddress' when calling getInterfaceIpAddressByIpAddress");
      }


      var pathParams = {
        'ipAddress': ipAddress
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
      var returnType = DeviceIfListResult;

      return this.apiClient.callApi(
        '/api/v1/interface/ip-address/${ipAddress}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInterfaceIsis operation.
     * @callback module:api/InterfaceApi~getInterfaceIsisCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceIfListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves ISIS interfaces
     * Gets the interfaces that has ISIS enabled
     * @param {module:api/InterfaceApi~getInterfaceIsisCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceIfListResult}
     */
    this.getInterfaceIsis = function(callback) {
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
      var returnType = DeviceIfListResult;

      return this.apiClient.callApi(
        '/api/v1/interface/isis', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInterfaceNetworkDeviceByDeviceId operation.
     * @callback module:api/InterfaceApi~getInterfaceNetworkDeviceByDeviceIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceIfListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves device interfaces
     * Gets list of interfaces for the given device
     * @param {String} deviceId Device ID
     * @param {module:api/InterfaceApi~getInterfaceNetworkDeviceByDeviceIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceIfListResult}
     */
    this.getInterfaceNetworkDeviceByDeviceId = function(deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling getInterfaceNetworkDeviceByDeviceId");
      }


      var pathParams = {
        'deviceId': deviceId
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
      var returnType = DeviceIfListResult;

      return this.apiClient.callApi(
        '/api/v1/interface/network-device/${deviceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInterfaceNetworkDeviceCountByDeviceId operation.
     * @callback module:api/InterfaceApi~getInterfaceNetworkDeviceCountByDeviceIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves device interface count
     * Gets the interface count for the given device
     * @param {String} deviceId Device ID
     * @param {module:api/InterfaceApi~getInterfaceNetworkDeviceCountByDeviceIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CountResult}
     */
    this.getInterfaceNetworkDeviceCountByDeviceId = function(deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling getInterfaceNetworkDeviceCountByDeviceId");
      }


      var pathParams = {
        'deviceId': deviceId
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
        '/api/v1/interface/network-device/${deviceId}/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInterfaceNetworkDeviceInterfaceNameByDeviceId operation.
     * @callback module:api/InterfaceApi~getInterfaceNetworkDeviceInterfaceNameByDeviceIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceIfResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves interface for the given device and interface name
     * Gets the interface for the given device ID and for the given interface name
     * @param {String} deviceId Device ID
     * @param {String} name Interface name
     * @param {module:api/InterfaceApi~getInterfaceNetworkDeviceInterfaceNameByDeviceIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceIfResult}
     */
    this.getInterfaceNetworkDeviceInterfaceNameByDeviceId = function(deviceId, name, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling getInterfaceNetworkDeviceInterfaceNameByDeviceId");
      }

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getInterfaceNetworkDeviceInterfaceNameByDeviceId");
      }


      var pathParams = {
        'deviceId': deviceId
      };
      var queryParams = {
        'name': name,
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
      var returnType = DeviceIfResult;

      return this.apiClient.callApi(
        '/api/v1/interface/network-device/${deviceId}/interface-name', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInterfaceOspf operation.
     * @callback module:api/InterfaceApi~getInterfaceOspfCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceIfListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves OSPF interfaces
     * Gets the interfaces that has OSPF enabled
     * @param {module:api/InterfaceApi~getInterfaceOspfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceIfListResult}
     */
    this.getInterfaceOspf = function(callback) {
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
      var returnType = DeviceIfListResult;

      return this.apiClient.callApi(
        '/api/v1/interface/ospf', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkDeviceByDeviceIdRange operation.
     * @callback module:api/InterfaceApi~getNetworkDeviceByDeviceIdRangeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceIfListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves device interfaces in the given range
     * Gets the list of interfaces for the device for the specified range
     * @param {String} deviceId Device ID
     * @param {Number} startIndex Start index
     * @param {Number} recordsToReturn Number of records to return
     * @param {module:api/InterfaceApi~getNetworkDeviceByDeviceIdRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceIfListResult}
     */
    this.getNetworkDeviceByDeviceIdRange = function(deviceId, startIndex, recordsToReturn, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling getNetworkDeviceByDeviceIdRange");
      }

      // verify the required parameter 'startIndex' is set
      if (startIndex === undefined || startIndex === null) {
        throw new Error("Missing the required parameter 'startIndex' when calling getNetworkDeviceByDeviceIdRange");
      }

      // verify the required parameter 'recordsToReturn' is set
      if (recordsToReturn === undefined || recordsToReturn === null) {
        throw new Error("Missing the required parameter 'recordsToReturn' when calling getNetworkDeviceByDeviceIdRange");
      }


      var pathParams = {
        'deviceId': deviceId,
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
      var returnType = DeviceIfListResult;

      return this.apiClient.callApi(
        '/api/v1/interface/network-device/${deviceId}/${startIndex}/${recordsToReturn}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
