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
    root.Swagger.SAVAMappingProfile = factory(root.Swagger.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SAVAMappingProfile model module.
   * @module model/SAVAMappingProfile
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SAVAMappingProfile</code>.
   * @alias module:model/SAVAMappingProfile
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>SAVAMappingProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SAVAMappingProfile} obj Optional instance to populate.
   * @return {module:model/SAVAMappingProfile} The populated <code>SAVAMappingProfile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('addressFqdn')) {
        obj['addressFqdn'] = ApiClient.convertToType(data['addressFqdn'], 'String');
      }
      if (data.hasOwnProperty('addressIpV4')) {
        obj['addressIpV4'] = ApiClient.convertToType(data['addressIpV4'], 'String');
      }
      if (data.hasOwnProperty('cert')) {
        obj['cert'] = ApiClient.convertToType(data['cert'], 'String');
      }
      if (data.hasOwnProperty('makeDefault')) {
        obj['makeDefault'] = ApiClient.convertToType(data['makeDefault'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'Number');
      }
      if (data.hasOwnProperty('profileId')) {
        obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
      }
      if (data.hasOwnProperty('proxy')) {
        obj['proxy'] = ApiClient.convertToType(data['proxy'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} addressFqdn
   */
  exports.prototype['addressFqdn'] = undefined;
  /**
   * @member {String} addressIpV4
   */
  exports.prototype['addressIpV4'] = undefined;
  /**
   * @member {String} cert
   */
  exports.prototype['cert'] = undefined;
  /**
   * @member {Boolean} makeDefault
   */
  exports.prototype['makeDefault'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} port
   */
  exports.prototype['port'] = undefined;
  /**
   * @member {String} profileId
   */
  exports.prototype['profileId'] = undefined;
  /**
   * @member {Boolean} proxy
   */
  exports.prototype['proxy'] = undefined;



  return exports;
}));


