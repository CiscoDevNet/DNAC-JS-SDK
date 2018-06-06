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
    root.Swagger.DeleteSSIDResponse = factory(root.Swagger.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeleteSSIDResponse model module.
   * @module model/DeleteSSIDResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeleteSSIDResponse</code>.
   * @alias module:model/DeleteSSIDResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DeleteSSIDResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteSSIDResponse} obj Optional instance to populate.
   * @return {module:model/DeleteSSIDResponse} The populated <code>DeleteSSIDResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('isError')) {
        obj['isError'] = ApiClient.convertToType(data['isError'], 'Boolean');
      }
      if (data.hasOwnProperty('failureReason')) {
        obj['failureReason'] = ApiClient.convertToType(data['failureReason'], 'String');
      }
      if (data.hasOwnProperty('successMessage')) {
        obj['successMessage'] = ApiClient.convertToType(data['successMessage'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} isError
   */
  exports.prototype['isError'] = undefined;
  /**
   * @member {String} failureReason
   */
  exports.prototype['failureReason'] = undefined;
  /**
   * @member {String} successMessage
   */
  exports.prototype['successMessage'] = undefined;



  return exports;
}));

