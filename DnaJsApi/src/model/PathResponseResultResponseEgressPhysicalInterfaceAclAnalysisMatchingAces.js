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
    define(['ApiClient', 'model/PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingPorts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingPorts'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingAces = factory(root.Swagger.ApiClient, root.Swagger.PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingPorts);
  }
}(this, function(ApiClient, PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingPorts) {
  'use strict';




  /**
   * The PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingAces model module.
   * @module model/PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingAces
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingAces</code>.
   * @alias module:model/PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingAces
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingAces</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingAces} obj Optional instance to populate.
   * @return {module:model/PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingAces} The populated <code>PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingAces</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ace')) {
        obj['ace'] = ApiClient.convertToType(data['ace'], 'String');
      }
      if (data.hasOwnProperty('matchingPorts')) {
        obj['matchingPorts'] = ApiClient.convertToType(data['matchingPorts'], [PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingPorts]);
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ace
   */
  exports.prototype['ace'] = undefined;
  /**
   * @member {Array.<module:model/PathResponseResultResponseEgressPhysicalInterfaceAclAnalysisMatchingPorts>} matchingPorts
   */
  exports.prototype['matchingPorts'] = undefined;
  /**
   * @member {String} result
   */
  exports.prototype['result'] = undefined;



  return exports;
}));


