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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.SystemPropertyListResultResponse = factory(root.Swagger.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SystemPropertyListResultResponse model module.
   * @module model/SystemPropertyListResultResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SystemPropertyListResultResponse</code>.
   * @alias module:model/SystemPropertyListResultResponse
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>SystemPropertyListResultResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SystemPropertyListResultResponse} obj Optional instance to populate.
   * @return {module:model/SystemPropertyListResultResponse} The populated <code>SystemPropertyListResultResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('instanceTenantId')) {
        obj['instanceTenantId'] = ApiClient.convertToType(data['instanceTenantId'], 'String');
      }
      if (data.hasOwnProperty('instanceUuid')) {
        obj['instanceUuid'] = ApiClient.convertToType(data['instanceUuid'], 'String');
      }
      if (data.hasOwnProperty('intValue')) {
        obj['intValue'] = ApiClient.convertToType(data['intValue'], 'Number');
      }
      if (data.hasOwnProperty('systemPropertyName')) {
        obj['systemPropertyName'] = ApiClient.convertToType(data['systemPropertyName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} instanceTenantId
   */
  exports.prototype['instanceTenantId'] = undefined;
  /**
   * @member {String} instanceUuid
   */
  exports.prototype['instanceUuid'] = undefined;
  /**
   * @member {Number} intValue
   */
  exports.prototype['intValue'] = undefined;
  /**
   * @member {String} systemPropertyName
   */
  exports.prototype['systemPropertyName'] = undefined;



  return exports;
}));


