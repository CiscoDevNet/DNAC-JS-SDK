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
    define(['ApiClient', 'model/ClientHealthResponseResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClientHealthResponseResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.ClientHealthResponse = factory(root.Swagger.ApiClient, root.Swagger.ClientHealthResponseResponse);
  }
}(this, function(ApiClient, ClientHealthResponseResponse) {
  'use strict';




  /**
   * The ClientHealthResponse model module.
   * @module model/ClientHealthResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ClientHealthResponse</code>.
   * @alias module:model/ClientHealthResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ClientHealthResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientHealthResponse} obj Optional instance to populate.
   * @return {module:model/ClientHealthResponse} The populated <code>ClientHealthResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('response')) {
        obj['response'] = ApiClient.convertToType(data['response'], [ClientHealthResponseResponse]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ClientHealthResponseResponse>} response
   */
  exports.prototype['response'] = undefined;



  return exports;
}));

