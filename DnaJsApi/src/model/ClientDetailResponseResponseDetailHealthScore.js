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
    root.Swagger.ClientDetailResponseResponseDetailHealthScore = factory(root.Swagger.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClientDetailResponseResponseDetailHealthScore model module.
   * @module model/ClientDetailResponseResponseDetailHealthScore
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ClientDetailResponseResponseDetailHealthScore</code>.
   * @alias module:model/ClientDetailResponseResponseDetailHealthScore
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ClientDetailResponseResponseDetailHealthScore</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientDetailResponseResponseDetailHealthScore} obj Optional instance to populate.
   * @return {module:model/ClientDetailResponseResponseDetailHealthScore} The populated <code>ClientDetailResponseResponseDetailHealthScore</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('healthType')) {
        obj['healthType'] = ApiClient.convertToType(data['healthType'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} healthType
   */
  exports.prototype['healthType'] = undefined;
  /**
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * @member {String} score
   */
  exports.prototype['score'] = undefined;



  return exports;
}));


