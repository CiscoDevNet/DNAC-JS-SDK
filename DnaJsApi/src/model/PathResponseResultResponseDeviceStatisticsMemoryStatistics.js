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
    root.Swagger.PathResponseResultResponseDeviceStatisticsMemoryStatistics = factory(root.Swagger.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PathResponseResultResponseDeviceStatisticsMemoryStatistics model module.
   * @module model/PathResponseResultResponseDeviceStatisticsMemoryStatistics
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PathResponseResultResponseDeviceStatisticsMemoryStatistics</code>.
   * @alias module:model/PathResponseResultResponseDeviceStatisticsMemoryStatistics
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PathResponseResultResponseDeviceStatisticsMemoryStatistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PathResponseResultResponseDeviceStatisticsMemoryStatistics} obj Optional instance to populate.
   * @return {module:model/PathResponseResultResponseDeviceStatisticsMemoryStatistics} The populated <code>PathResponseResultResponseDeviceStatisticsMemoryStatistics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('memoryUsage')) {
        obj['memoryUsage'] = ApiClient.convertToType(data['memoryUsage'], 'Number');
      }
      if (data.hasOwnProperty('refreshedAt')) {
        obj['refreshedAt'] = ApiClient.convertToType(data['refreshedAt'], 'Number');
      }
      if (data.hasOwnProperty('totalMemory')) {
        obj['totalMemory'] = ApiClient.convertToType(data['totalMemory'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} memoryUsage
   */
  exports.prototype['memoryUsage'] = undefined;
  /**
   * @member {Number} refreshedAt
   */
  exports.prototype['refreshedAt'] = undefined;
  /**
   * @member {Number} totalMemory
   */
  exports.prototype['totalMemory'] = undefined;



  return exports;
}));

