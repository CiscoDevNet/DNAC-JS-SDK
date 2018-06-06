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
    root.Swagger.PathResponseResultResponseEgressPhysicalInterfaceVxlanInfo = factory(root.Swagger.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PathResponseResultResponseEgressPhysicalInterfaceVxlanInfo model module.
   * @module model/PathResponseResultResponseEgressPhysicalInterfaceVxlanInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PathResponseResultResponseEgressPhysicalInterfaceVxlanInfo</code>.
   * @alias module:model/PathResponseResultResponseEgressPhysicalInterfaceVxlanInfo
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PathResponseResultResponseEgressPhysicalInterfaceVxlanInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PathResponseResultResponseEgressPhysicalInterfaceVxlanInfo} obj Optional instance to populate.
   * @return {module:model/PathResponseResultResponseEgressPhysicalInterfaceVxlanInfo} The populated <code>PathResponseResultResponseEgressPhysicalInterfaceVxlanInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dscp')) {
        obj['dscp'] = ApiClient.convertToType(data['dscp'], 'String');
      }
      if (data.hasOwnProperty('vnid')) {
        obj['vnid'] = ApiClient.convertToType(data['vnid'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} dscp
   */
  exports.prototype['dscp'] = undefined;
  /**
   * @member {String} vnid
   */
  exports.prototype['vnid'] = undefined;



  return exports;
}));


