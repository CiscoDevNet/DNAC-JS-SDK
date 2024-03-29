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
    root.Swagger.ClientDetailResponseResponseDetailOnboarding = factory(root.Swagger.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClientDetailResponseResponseDetailOnboarding model module.
   * @module model/ClientDetailResponseResponseDetailOnboarding
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ClientDetailResponseResponseDetailOnboarding</code>.
   * @alias module:model/ClientDetailResponseResponseDetailOnboarding
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>ClientDetailResponseResponseDetailOnboarding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientDetailResponseResponseDetailOnboarding} obj Optional instance to populate.
   * @return {module:model/ClientDetailResponseResponseDetailOnboarding} The populated <code>ClientDetailResponseResponseDetailOnboarding</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('averageRunDuration')) {
        obj['averageRunDuration'] = ApiClient.convertToType(data['averageRunDuration'], 'String');
      }
      if (data.hasOwnProperty('maxRunDuration')) {
        obj['maxRunDuration'] = ApiClient.convertToType(data['maxRunDuration'], 'String');
      }
      if (data.hasOwnProperty('averageAssocDuration')) {
        obj['averageAssocDuration'] = ApiClient.convertToType(data['averageAssocDuration'], 'String');
      }
      if (data.hasOwnProperty('maxAssocDuration')) {
        obj['maxAssocDuration'] = ApiClient.convertToType(data['maxAssocDuration'], 'String');
      }
      if (data.hasOwnProperty('averageAuthDuration')) {
        obj['averageAuthDuration'] = ApiClient.convertToType(data['averageAuthDuration'], 'String');
      }
      if (data.hasOwnProperty('maxAuthDuration')) {
        obj['maxAuthDuration'] = ApiClient.convertToType(data['maxAuthDuration'], 'String');
      }
      if (data.hasOwnProperty('averageDhcpDuration')) {
        obj['averageDhcpDuration'] = ApiClient.convertToType(data['averageDhcpDuration'], 'String');
      }
      if (data.hasOwnProperty('maxDhcpDuration')) {
        obj['maxDhcpDuration'] = ApiClient.convertToType(data['maxDhcpDuration'], 'String');
      }
      if (data.hasOwnProperty('aaaServerIp')) {
        obj['aaaServerIp'] = ApiClient.convertToType(data['aaaServerIp'], 'String');
      }
      if (data.hasOwnProperty('dhcpServerIp')) {
        obj['dhcpServerIp'] = ApiClient.convertToType(data['dhcpServerIp'], 'String');
      }
      if (data.hasOwnProperty('authDoneTime')) {
        obj['authDoneTime'] = ApiClient.convertToType(data['authDoneTime'], 'String');
      }
      if (data.hasOwnProperty('assocDoneTime')) {
        obj['assocDoneTime'] = ApiClient.convertToType(data['assocDoneTime'], 'String');
      }
      if (data.hasOwnProperty('dhcpDoneTime')) {
        obj['dhcpDoneTime'] = ApiClient.convertToType(data['dhcpDoneTime'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} averageRunDuration
   */
  exports.prototype['averageRunDuration'] = undefined;
  /**
   * @member {String} maxRunDuration
   */
  exports.prototype['maxRunDuration'] = undefined;
  /**
   * @member {String} averageAssocDuration
   */
  exports.prototype['averageAssocDuration'] = undefined;
  /**
   * @member {String} maxAssocDuration
   */
  exports.prototype['maxAssocDuration'] = undefined;
  /**
   * @member {String} averageAuthDuration
   */
  exports.prototype['averageAuthDuration'] = undefined;
  /**
   * @member {String} maxAuthDuration
   */
  exports.prototype['maxAuthDuration'] = undefined;
  /**
   * @member {String} averageDhcpDuration
   */
  exports.prototype['averageDhcpDuration'] = undefined;
  /**
   * @member {String} maxDhcpDuration
   */
  exports.prototype['maxDhcpDuration'] = undefined;
  /**
   * @member {String} aaaServerIp
   */
  exports.prototype['aaaServerIp'] = undefined;
  /**
   * @member {String} dhcpServerIp
   */
  exports.prototype['dhcpServerIp'] = undefined;
  /**
   * @member {String} authDoneTime
   */
  exports.prototype['authDoneTime'] = undefined;
  /**
   * @member {String} assocDoneTime
   */
  exports.prototype['assocDoneTime'] = undefined;
  /**
   * @member {String} dhcpDoneTime
   */
  exports.prototype['dhcpDoneTime'] = undefined;



  return exports;
}));


