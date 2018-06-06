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
    define(['ApiClient', 'model/DiscoveryJobNIOListResultResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DiscoveryJobNIOListResultResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.DiscoveryJobNIOListResult = factory(root.Swagger.ApiClient, root.Swagger.DiscoveryJobNIOListResultResponse);
  }
}(this, function(ApiClient, DiscoveryJobNIOListResultResponse) {
  'use strict';




  /**
   * The DiscoveryJobNIOListResult model module.
   * @module model/DiscoveryJobNIOListResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DiscoveryJobNIOListResult</code>.
   * @alias module:model/DiscoveryJobNIOListResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DiscoveryJobNIOListResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DiscoveryJobNIOListResult} obj Optional instance to populate.
   * @return {module:model/DiscoveryJobNIOListResult} The populated <code>DiscoveryJobNIOListResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('response')) {
        obj['response'] = ApiClient.convertToType(data['response'], [DiscoveryJobNIOListResultResponse]);
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/DiscoveryJobNIOListResultResponse>} response
   */
  exports.prototype['response'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;



  return exports;
}));


