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
    define(['ApiClient', 'model/ClientDetailResponseResponseConnectionInfo', 'model/ClientDetailResponseResponseDetail', 'model/ClientDetailResponseResponseTopology'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClientDetailResponseResponseConnectionInfo'), require('./ClientDetailResponseResponseDetail'), require('./ClientDetailResponseResponseTopology'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.ClientDetailResponseResponse = factory(root.Swagger.ApiClient, root.Swagger.ClientDetailResponseResponseConnectionInfo, root.Swagger.ClientDetailResponseResponseDetail, root.Swagger.ClientDetailResponseResponseTopology);
  }
}(this, function(ApiClient, ClientDetailResponseResponseConnectionInfo, ClientDetailResponseResponseDetail, ClientDetailResponseResponseTopology) {
  'use strict';




  /**
   * The ClientDetailResponseResponse model module.
   * @module model/ClientDetailResponseResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ClientDetailResponseResponse</code>.
   * @alias module:model/ClientDetailResponseResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ClientDetailResponseResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientDetailResponseResponse} obj Optional instance to populate.
   * @return {module:model/ClientDetailResponseResponse} The populated <code>ClientDetailResponseResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('detail')) {
        obj['detail'] = ClientDetailResponseResponseDetail.constructFromObject(data['detail']);
      }
      if (data.hasOwnProperty('connectionInfo')) {
        obj['connectionInfo'] = ClientDetailResponseResponseConnectionInfo.constructFromObject(data['connectionInfo']);
      }
      if (data.hasOwnProperty('topology')) {
        obj['topology'] = ClientDetailResponseResponseTopology.constructFromObject(data['topology']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ClientDetailResponseResponseDetail} detail
   */
  exports.prototype['detail'] = undefined;
  /**
   * @member {module:model/ClientDetailResponseResponseConnectionInfo} connectionInfo
   */
  exports.prototype['connectionInfo'] = undefined;
  /**
   * @member {module:model/ClientDetailResponseResponseTopology} topology
   */
  exports.prototype['topology'] = undefined;



  return exports;
}));

