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
    define(['ApiClient', 'model/SNMPvWriteCommunityDTOInner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SNMPvWriteCommunityDTOInner'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.SNMPvWriteCommunityDTO = factory(root.Swagger.ApiClient, root.Swagger.SNMPvWriteCommunityDTOInner);
  }
}(this, function(ApiClient, SNMPvWriteCommunityDTOInner) {
  'use strict';




  /**
   * The SNMPvWriteCommunityDTO model module.
   * @module model/SNMPvWriteCommunityDTO
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SNMPvWriteCommunityDTO</code>.
   * @alias module:model/SNMPvWriteCommunityDTO
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);

    return _this;
  };

  /**
   * Constructs a <code>SNMPvWriteCommunityDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SNMPvWriteCommunityDTO} obj Optional instance to populate.
   * @return {module:model/SNMPvWriteCommunityDTO} The populated <code>SNMPvWriteCommunityDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'SNMPvWriteCommunityDTOInner');

    }
    return obj;
  }




  return exports;
}));


