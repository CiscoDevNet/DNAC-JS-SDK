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
    define(['ApiClient', 'model/FunctionalCapabilityListResultResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FunctionalCapabilityListResultResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.FunctionalCapabilityListResult = factory(root.Swagger.ApiClient, root.Swagger.FunctionalCapabilityListResultResponse);
  }
}(this, function(ApiClient, FunctionalCapabilityListResultResponse) {
  'use strict';




  /**
   * The FunctionalCapabilityListResult model module.
   * @module model/FunctionalCapabilityListResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>FunctionalCapabilityListResult</code>.
   * @alias module:model/FunctionalCapabilityListResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>FunctionalCapabilityListResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FunctionalCapabilityListResult} obj Optional instance to populate.
   * @return {module:model/FunctionalCapabilityListResult} The populated <code>FunctionalCapabilityListResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('response')) {
        obj['response'] = ApiClient.convertToType(data['response'], [FunctionalCapabilityListResultResponse]);
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/FunctionalCapabilityListResultResponse>} response
   */
  exports.prototype['response'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;



  return exports;
}));


