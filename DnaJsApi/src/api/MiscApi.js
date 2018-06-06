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
    define(['ApiClient', 'model/FlowAnalysisRequest', 'model/FlowAnalysisRequestResultOutput', 'model/GenerateTokenRequest', 'model/GenerateTokenResponse', 'model/SystemPropertyListResult', 'model/SystemPropertyNameAndIntValueDTO', 'model/TaskIdResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FlowAnalysisRequest'), require('../model/FlowAnalysisRequestResultOutput'), require('../model/GenerateTokenRequest'), require('../model/GenerateTokenResponse'), require('../model/SystemPropertyListResult'), require('../model/SystemPropertyNameAndIntValueDTO'), require('../model/TaskIdResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.MiscApi = factory(root.Swagger.ApiClient, root.Swagger.FlowAnalysisRequest, root.Swagger.FlowAnalysisRequestResultOutput, root.Swagger.GenerateTokenRequest, root.Swagger.GenerateTokenResponse, root.Swagger.SystemPropertyListResult, root.Swagger.SystemPropertyNameAndIntValueDTO, root.Swagger.TaskIdResult);
  }
}(this, function(ApiClient, FlowAnalysisRequest, FlowAnalysisRequestResultOutput, GenerateTokenRequest, GenerateTokenResponse, SystemPropertyListResult, SystemPropertyNameAndIntValueDTO, TaskIdResult) {
  'use strict';

  /**
   * Misc service.
   * @module api/MiscApi
   * @version 1.0.0
   */

  /**
   * Constructs a new MiscApi. 
   * @alias module:api/MiscApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getSnmpProperty operation.
     * @callback module:api/MiscApi~getSnmpPropertyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SystemPropertyListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves SNMP properties
     * This method is used to get SNMP properties
     * @param {module:api/MiscApi~getSnmpPropertyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SystemPropertyListResult}
     */
    this.getSnmpProperty = function(callback) {
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
      var returnType = SystemPropertyListResult;

      return this.apiClient.callApi(
        '/api/v1/snmp-property', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postAuthToken operation.
     * @callback module:api/MiscApi~postAuthTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GenerateTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate Token
     * This method is used to generate token.
     * @param {module:model/GenerateTokenRequest} request request
     * @param {String} authorization &lt;username:password&gt; of 64 based encoded string
     * @param {module:api/MiscApi~postAuthTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GenerateTokenResponse}
     */
    this.postAuthToken = function(request, authorization, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling postAuthToken");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling postAuthToken");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GenerateTokenResponse;

      return this.apiClient.callApi(
        '/api/system/v1/auth/token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postFlowAnalysis operation.
     * @callback module:api/MiscApi~postFlowAnalysisCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FlowAnalysisRequestResultOutput} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiates a new flow analysis
     * Initiates a new flow analysis with periodic refresh and stat collection options. Returns a request id and a task id to get results and follow progress.
     * @param {module:model/FlowAnalysisRequest} request request
     * @param {module:api/MiscApi~postFlowAnalysisCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FlowAnalysisRequestResultOutput}
     */
    this.postFlowAnalysis = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling postFlowAnalysis");
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
      var returnType = FlowAnalysisRequestResultOutput;

      return this.apiClient.callApi(
        '/api/v1/flow-analysis', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postSnmpProperty operation.
     * @callback module:api/MiscApi~postSnmpPropertyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskIdResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates or updates SNMP properties
     * This method is used to add SNMP properties
     * @param {module:model/SystemPropertyNameAndIntValueDTO} request request
     * @param {module:api/MiscApi~postSnmpPropertyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskIdResult}
     */
    this.postSnmpProperty = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling postSnmpProperty");
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
        '/api/v1/snmp-property', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
