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
    define(['ApiClient', 'model/ClientDetailResponseResponseTopologyLinks', 'model/ClientDetailResponseResponseTopologyNodes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClientDetailResponseResponseTopologyLinks'), require('./ClientDetailResponseResponseTopologyNodes'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.ClientDetailResponseResponseTopology = factory(root.Swagger.ApiClient, root.Swagger.ClientDetailResponseResponseTopologyLinks, root.Swagger.ClientDetailResponseResponseTopologyNodes);
  }
}(this, function(ApiClient, ClientDetailResponseResponseTopologyLinks, ClientDetailResponseResponseTopologyNodes) {
  'use strict';




  /**
   * The ClientDetailResponseResponseTopology model module.
   * @module model/ClientDetailResponseResponseTopology
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ClientDetailResponseResponseTopology</code>.
   * @alias module:model/ClientDetailResponseResponseTopology
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ClientDetailResponseResponseTopology</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientDetailResponseResponseTopology} obj Optional instance to populate.
   * @return {module:model/ClientDetailResponseResponseTopology} The populated <code>ClientDetailResponseResponseTopology</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('nodes')) {
        obj['nodes'] = ApiClient.convertToType(data['nodes'], [ClientDetailResponseResponseTopologyNodes]);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], [ClientDetailResponseResponseTopologyLinks]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ClientDetailResponseResponseTopologyNodes>} nodes
   */
  exports.prototype['nodes'] = undefined;
  /**
   * @member {Array.<module:model/ClientDetailResponseResponseTopologyLinks>} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


