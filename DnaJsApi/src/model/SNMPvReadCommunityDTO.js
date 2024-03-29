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
    root.Swagger.SNMPvReadCommunityDTO = factory(root.Swagger.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SNMPvReadCommunityDTO model module.
   * @module model/SNMPvReadCommunityDTO
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SNMPvReadCommunityDTO</code>.
   * @alias module:model/SNMPvReadCommunityDTO
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>SNMPvReadCommunityDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SNMPvReadCommunityDTO} obj Optional instance to populate.
   * @return {module:model/SNMPvReadCommunityDTO} The populated <code>SNMPvReadCommunityDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('comments')) {
        obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
      }
      if (data.hasOwnProperty('credentialType')) {
        obj['credentialType'] = ApiClient.convertToType(data['credentialType'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('instanceTenantId')) {
        obj['instanceTenantId'] = ApiClient.convertToType(data['instanceTenantId'], 'String');
      }
      if (data.hasOwnProperty('instanceUuid')) {
        obj['instanceUuid'] = ApiClient.convertToType(data['instanceUuid'], 'String');
      }
      if (data.hasOwnProperty('readCommunity')) {
        obj['readCommunity'] = ApiClient.convertToType(data['readCommunity'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} comments
   */
  exports.prototype['comments'] = undefined;
  /**
   * @member {module:model/SNMPvReadCommunityDTO.CredentialTypeEnum} credentialType
   */
  exports.prototype['credentialType'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} instanceTenantId
   */
  exports.prototype['instanceTenantId'] = undefined;
  /**
   * @member {String} instanceUuid
   */
  exports.prototype['instanceUuid'] = undefined;
  /**
   * @member {String} readCommunity
   */
  exports.prototype['readCommunity'] = undefined;


  /**
   * Allowed values for the <code>credentialType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CredentialTypeEnum = {
    /**
     * value: "GLOBAL"
     * @const
     */
    "GLOBAL": "GLOBAL",
    /**
     * value: "APP"
     * @const
     */
    "APP": "APP"  };


  return exports;
}));


