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
    define(['ApiClient', 'model/ClientHealthResponseScoreDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClientHealthResponseScoreDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.ClientHealthResponseResponse = factory(root.Swagger.ApiClient, root.Swagger.ClientHealthResponseScoreDetail);
  }
}(this, function(ApiClient, ClientHealthResponseScoreDetail) {
  'use strict';




  /**
   * The ClientHealthResponseResponse model module.
   * @module model/ClientHealthResponseResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ClientHealthResponseResponse</code>.
   * @alias module:model/ClientHealthResponseResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ClientHealthResponseResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientHealthResponseResponse} obj Optional instance to populate.
   * @return {module:model/ClientHealthResponseResponse} The populated <code>ClientHealthResponseResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('siteId')) {
        obj['siteId'] = ApiClient.convertToType(data['siteId'], 'String');
      }
      if (data.hasOwnProperty('scoreDetail')) {
        obj['scoreDetail'] = ApiClient.convertToType(data['scoreDetail'], [ClientHealthResponseScoreDetail]);
      }
    }
    return obj;
  }

  /**
   * @member {String} siteId
   */
  exports.prototype['siteId'] = undefined;
  /**
   * @member {Array.<module:model/ClientHealthResponseScoreDetail>} scoreDetail
   */
  exports.prototype['scoreDetail'] = undefined;



  return exports;
}));

