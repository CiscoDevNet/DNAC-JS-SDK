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
    define(['ApiClient', 'model/PathResponseResultResponseEgressPhysicalInterfaceAclAnalysis', 'model/PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics', 'model/PathResponseResultResponseEgressPhysicalInterfacePathOverlayInfo', 'model/PathResponseResultResponseEgressPhysicalInterfaceQosStatistics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PathResponseResultResponseEgressPhysicalInterfaceAclAnalysis'), require('./PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics'), require('./PathResponseResultResponseEgressPhysicalInterfacePathOverlayInfo'), require('./PathResponseResultResponseEgressPhysicalInterfaceQosStatistics'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.PathResponseResultResponseEgressPhysicalInterface = factory(root.Swagger.ApiClient, root.Swagger.PathResponseResultResponseEgressPhysicalInterfaceAclAnalysis, root.Swagger.PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics, root.Swagger.PathResponseResultResponseEgressPhysicalInterfacePathOverlayInfo, root.Swagger.PathResponseResultResponseEgressPhysicalInterfaceQosStatistics);
  }
}(this, function(ApiClient, PathResponseResultResponseEgressPhysicalInterfaceAclAnalysis, PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics, PathResponseResultResponseEgressPhysicalInterfacePathOverlayInfo, PathResponseResultResponseEgressPhysicalInterfaceQosStatistics) {
  'use strict';




  /**
   * The PathResponseResultResponseEgressPhysicalInterface model module.
   * @module model/PathResponseResultResponseEgressPhysicalInterface
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PathResponseResultResponseEgressPhysicalInterface</code>.
   * @alias module:model/PathResponseResultResponseEgressPhysicalInterface
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>PathResponseResultResponseEgressPhysicalInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PathResponseResultResponseEgressPhysicalInterface} obj Optional instance to populate.
   * @return {module:model/PathResponseResultResponseEgressPhysicalInterface} The populated <code>PathResponseResultResponseEgressPhysicalInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('aclAnalysis')) {
        obj['aclAnalysis'] = PathResponseResultResponseEgressPhysicalInterfaceAclAnalysis.constructFromObject(data['aclAnalysis']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('interfaceStatistics')) {
        obj['interfaceStatistics'] = PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics.constructFromObject(data['interfaceStatistics']);
      }
      if (data.hasOwnProperty('interfaceStatsCollection')) {
        obj['interfaceStatsCollection'] = ApiClient.convertToType(data['interfaceStatsCollection'], 'String');
      }
      if (data.hasOwnProperty('interfaceStatsCollectionFailureReason')) {
        obj['interfaceStatsCollectionFailureReason'] = ApiClient.convertToType(data['interfaceStatsCollectionFailureReason'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('pathOverlayInfo')) {
        obj['pathOverlayInfo'] = ApiClient.convertToType(data['pathOverlayInfo'], [PathResponseResultResponseEgressPhysicalInterfacePathOverlayInfo]);
      }
      if (data.hasOwnProperty('qosStatistics')) {
        obj['qosStatistics'] = ApiClient.convertToType(data['qosStatistics'], [PathResponseResultResponseEgressPhysicalInterfaceQosStatistics]);
      }
      if (data.hasOwnProperty('qosStatsCollection')) {
        obj['qosStatsCollection'] = ApiClient.convertToType(data['qosStatsCollection'], 'String');
      }
      if (data.hasOwnProperty('qosStatsCollectionFailureReason')) {
        obj['qosStatsCollectionFailureReason'] = ApiClient.convertToType(data['qosStatsCollectionFailureReason'], 'String');
      }
      if (data.hasOwnProperty('usedVlan')) {
        obj['usedVlan'] = ApiClient.convertToType(data['usedVlan'], 'String');
      }
      if (data.hasOwnProperty('vrfName')) {
        obj['vrfName'] = ApiClient.convertToType(data['vrfName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PathResponseResultResponseEgressPhysicalInterfaceAclAnalysis} aclAnalysis
   */
  exports.prototype['aclAnalysis'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/PathResponseResultResponseEgressPhysicalInterfaceInterfaceStatistics} interfaceStatistics
   */
  exports.prototype['interfaceStatistics'] = undefined;
  /**
   * @member {String} interfaceStatsCollection
   */
  exports.prototype['interfaceStatsCollection'] = undefined;
  /**
   * @member {String} interfaceStatsCollectionFailureReason
   */
  exports.prototype['interfaceStatsCollectionFailureReason'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/PathResponseResultResponseEgressPhysicalInterfacePathOverlayInfo>} pathOverlayInfo
   */
  exports.prototype['pathOverlayInfo'] = undefined;
  /**
   * @member {Array.<module:model/PathResponseResultResponseEgressPhysicalInterfaceQosStatistics>} qosStatistics
   */
  exports.prototype['qosStatistics'] = undefined;
  /**
   * @member {String} qosStatsCollection
   */
  exports.prototype['qosStatsCollection'] = undefined;
  /**
   * @member {String} qosStatsCollectionFailureReason
   */
  exports.prototype['qosStatsCollectionFailureReason'] = undefined;
  /**
   * @member {String} usedVlan
   */
  exports.prototype['usedVlan'] = undefined;
  /**
   * @member {String} vrfName
   */
  exports.prototype['vrfName'] = undefined;



  return exports;
}));


