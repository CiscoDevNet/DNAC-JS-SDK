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
    root.Swagger.TopologyResultResponseCustomParam = factory(root.Swagger.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TopologyResultResponseCustomParam model module.
   * @module model/TopologyResultResponseCustomParam
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TopologyResultResponseCustomParam</code>.
   * @alias module:model/TopologyResultResponseCustomParam
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>TopologyResultResponseCustomParam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TopologyResultResponseCustomParam} obj Optional instance to populate.
   * @return {module:model/TopologyResultResponseCustomParam} The populated <code>TopologyResultResponseCustomParam</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('parentNodeId')) {
        obj['parentNodeId'] = ApiClient.convertToType(data['parentNodeId'], 'String');
      }
      if (data.hasOwnProperty('x')) {
        obj['x'] = ApiClient.convertToType(data['x'], 'Number');
      }
      if (data.hasOwnProperty('y')) {
        obj['y'] = ApiClient.convertToType(data['y'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * @member {String} parentNodeId
   */
  exports.prototype['parentNodeId'] = undefined;
  /**
   * @member {Number} x
   */
  exports.prototype['x'] = undefined;
  /**
   * @member {Number} y
   */
  exports.prototype['y'] = undefined;



  return exports;
}));


