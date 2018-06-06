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
    define(['ApiClient', 'model/PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisPorts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisPorts'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingPorts = factory(root.Swagger.ApiClient, root.Swagger.PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisPorts);
  }
}(this, function(ApiClient, PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisPorts) {
  'use strict';




  /**
   * The PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingPorts model module.
   * @module model/PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingPorts
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingPorts</code>.
   * @alias module:model/PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingPorts
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingPorts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingPorts} obj Optional instance to populate.
   * @return {module:model/PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingPorts} The populated <code>PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingPorts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ports')) {
        obj['ports'] = ApiClient.convertToType(data['ports'], [PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisPorts]);
      }
      if (data.hasOwnProperty('protocol')) {
        obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisPorts>} ports
   */
  exports.prototype['ports'] = undefined;
  /**
   * @member {String} protocol
   */
  exports.prototype['protocol'] = undefined;



  return exports;
}));

