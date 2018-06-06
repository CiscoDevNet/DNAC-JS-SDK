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
    define(['ApiClient', 'model/HTTPReadCredentialDTOInner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HTTPReadCredentialDTOInner'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.DiscoveryNIO = factory(root.Swagger.ApiClient, root.Swagger.HTTPReadCredentialDTOInner);
  }
}(this, function(ApiClient, HTTPReadCredentialDTOInner) {
  'use strict';




  /**
   * The DiscoveryNIO model module.
   * @module model/DiscoveryNIO
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DiscoveryNIO</code>.
   * @alias module:model/DiscoveryNIO
   * @class
   */
  var exports = function() {
    var _this = this;





































  };

  /**
   * Constructs a <code>DiscoveryNIO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DiscoveryNIO} obj Optional instance to populate.
   * @return {module:model/DiscoveryNIO} The populated <code>DiscoveryNIO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('attributeInfo')) {
        obj['attributeInfo'] = ApiClient.convertToType(data['attributeInfo'], Object);
      }
      if (data.hasOwnProperty('cdpLevel')) {
        obj['cdpLevel'] = ApiClient.convertToType(data['cdpLevel'], 'Number');
      }
      if (data.hasOwnProperty('deviceIds')) {
        obj['deviceIds'] = ApiClient.convertToType(data['deviceIds'], 'String');
      }
      if (data.hasOwnProperty('discoveryCondition')) {
        obj['discoveryCondition'] = ApiClient.convertToType(data['discoveryCondition'], 'String');
      }
      if (data.hasOwnProperty('discoveryStatus')) {
        obj['discoveryStatus'] = ApiClient.convertToType(data['discoveryStatus'], 'String');
      }
      if (data.hasOwnProperty('discoveryType')) {
        obj['discoveryType'] = ApiClient.convertToType(data['discoveryType'], 'String');
      }
      if (data.hasOwnProperty('enablePasswordList')) {
        obj['enablePasswordList'] = ApiClient.convertToType(data['enablePasswordList'], 'String');
      }
      if (data.hasOwnProperty('globalCredentialIdList')) {
        obj['globalCredentialIdList'] = ApiClient.convertToType(data['globalCredentialIdList'], ['String']);
      }
      if (data.hasOwnProperty('httpReadCredential')) {
        obj['httpReadCredential'] = HTTPReadCredentialDTOInner.constructFromObject(data['httpReadCredential']);
      }
      if (data.hasOwnProperty('httpWriteCredential')) {
        obj['httpWriteCredential'] = HTTPReadCredentialDTOInner.constructFromObject(data['httpWriteCredential']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('ipAddressList')) {
        obj['ipAddressList'] = ApiClient.convertToType(data['ipAddressList'], 'String');
      }
      if (data.hasOwnProperty('ipFilterList')) {
        obj['ipFilterList'] = ApiClient.convertToType(data['ipFilterList'], 'String');
      }
      if (data.hasOwnProperty('isAutoCdp')) {
        obj['isAutoCdp'] = ApiClient.convertToType(data['isAutoCdp'], 'Boolean');
      }
      if (data.hasOwnProperty('lldpLevel')) {
        obj['lldpLevel'] = ApiClient.convertToType(data['lldpLevel'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('netconfPort')) {
        obj['netconfPort'] = ApiClient.convertToType(data['netconfPort'], 'String');
      }
      if (data.hasOwnProperty('numDevices')) {
        obj['numDevices'] = ApiClient.convertToType(data['numDevices'], 'Number');
      }
      if (data.hasOwnProperty('parentDiscoveryId')) {
        obj['parentDiscoveryId'] = ApiClient.convertToType(data['parentDiscoveryId'], 'String');
      }
      if (data.hasOwnProperty('passwordList')) {
        obj['passwordList'] = ApiClient.convertToType(data['passwordList'], 'String');
      }
      if (data.hasOwnProperty('preferredMgmtIPMethod')) {
        obj['preferredMgmtIPMethod'] = ApiClient.convertToType(data['preferredMgmtIPMethod'], 'String');
      }
      if (data.hasOwnProperty('protocolOrder')) {
        obj['protocolOrder'] = ApiClient.convertToType(data['protocolOrder'], 'String');
      }
      if (data.hasOwnProperty('retryCount')) {
        obj['retryCount'] = ApiClient.convertToType(data['retryCount'], 'Number');
      }
      if (data.hasOwnProperty('snmpAuthPassphrase')) {
        obj['snmpAuthPassphrase'] = ApiClient.convertToType(data['snmpAuthPassphrase'], 'String');
      }
      if (data.hasOwnProperty('snmpAuthProtocol')) {
        obj['snmpAuthProtocol'] = ApiClient.convertToType(data['snmpAuthProtocol'], 'String');
      }
      if (data.hasOwnProperty('snmpMode')) {
        obj['snmpMode'] = ApiClient.convertToType(data['snmpMode'], 'String');
      }
      if (data.hasOwnProperty('snmpPrivPassphrase')) {
        obj['snmpPrivPassphrase'] = ApiClient.convertToType(data['snmpPrivPassphrase'], 'String');
      }
      if (data.hasOwnProperty('snmpPrivProtocol')) {
        obj['snmpPrivProtocol'] = ApiClient.convertToType(data['snmpPrivProtocol'], 'String');
      }
      if (data.hasOwnProperty('snmpRoCommunity')) {
        obj['snmpRoCommunity'] = ApiClient.convertToType(data['snmpRoCommunity'], 'String');
      }
      if (data.hasOwnProperty('snmpRoCommunityDesc')) {
        obj['snmpRoCommunityDesc'] = ApiClient.convertToType(data['snmpRoCommunityDesc'], 'String');
      }
      if (data.hasOwnProperty('snmpRwCommunity')) {
        obj['snmpRwCommunity'] = ApiClient.convertToType(data['snmpRwCommunity'], 'String');
      }
      if (data.hasOwnProperty('snmpRwCommunityDesc')) {
        obj['snmpRwCommunityDesc'] = ApiClient.convertToType(data['snmpRwCommunityDesc'], 'String');
      }
      if (data.hasOwnProperty('snmpUserName')) {
        obj['snmpUserName'] = ApiClient.convertToType(data['snmpUserName'], 'String');
      }
      if (data.hasOwnProperty('timeOut')) {
        obj['timeOut'] = ApiClient.convertToType(data['timeOut'], 'Number');
      }
      if (data.hasOwnProperty('updateMgmtIp')) {
        obj['updateMgmtIp'] = ApiClient.convertToType(data['updateMgmtIp'], 'Boolean');
      }
      if (data.hasOwnProperty('userNameList')) {
        obj['userNameList'] = ApiClient.convertToType(data['userNameList'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Object} attributeInfo
   */
  exports.prototype['attributeInfo'] = undefined;
  /**
   * @member {Number} cdpLevel
   */
  exports.prototype['cdpLevel'] = undefined;
  /**
   * @member {String} deviceIds
   */
  exports.prototype['deviceIds'] = undefined;
  /**
   * @member {String} discoveryCondition
   */
  exports.prototype['discoveryCondition'] = undefined;
  /**
   * @member {String} discoveryStatus
   */
  exports.prototype['discoveryStatus'] = undefined;
  /**
   * @member {String} discoveryType
   */
  exports.prototype['discoveryType'] = undefined;
  /**
   * @member {String} enablePasswordList
   */
  exports.prototype['enablePasswordList'] = undefined;
  /**
   * @member {Array.<String>} globalCredentialIdList
   */
  exports.prototype['globalCredentialIdList'] = undefined;
  /**
   * @member {module:model/HTTPReadCredentialDTOInner} httpReadCredential
   */
  exports.prototype['httpReadCredential'] = undefined;
  /**
   * @member {module:model/HTTPReadCredentialDTOInner} httpWriteCredential
   */
  exports.prototype['httpWriteCredential'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} ipAddressList
   */
  exports.prototype['ipAddressList'] = undefined;
  /**
   * @member {String} ipFilterList
   */
  exports.prototype['ipFilterList'] = undefined;
  /**
   * @member {Boolean} isAutoCdp
   */
  exports.prototype['isAutoCdp'] = undefined;
  /**
   * @member {Number} lldpLevel
   */
  exports.prototype['lldpLevel'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} netconfPort
   */
  exports.prototype['netconfPort'] = undefined;
  /**
   * @member {Number} numDevices
   */
  exports.prototype['numDevices'] = undefined;
  /**
   * @member {String} parentDiscoveryId
   */
  exports.prototype['parentDiscoveryId'] = undefined;
  /**
   * @member {String} passwordList
   */
  exports.prototype['passwordList'] = undefined;
  /**
   * @member {String} preferredMgmtIPMethod
   */
  exports.prototype['preferredMgmtIPMethod'] = undefined;
  /**
   * @member {String} protocolOrder
   */
  exports.prototype['protocolOrder'] = undefined;
  /**
   * @member {Number} retryCount
   */
  exports.prototype['retryCount'] = undefined;
  /**
   * @member {String} snmpAuthPassphrase
   */
  exports.prototype['snmpAuthPassphrase'] = undefined;
  /**
   * @member {String} snmpAuthProtocol
   */
  exports.prototype['snmpAuthProtocol'] = undefined;
  /**
   * @member {String} snmpMode
   */
  exports.prototype['snmpMode'] = undefined;
  /**
   * @member {String} snmpPrivPassphrase
   */
  exports.prototype['snmpPrivPassphrase'] = undefined;
  /**
   * @member {String} snmpPrivProtocol
   */
  exports.prototype['snmpPrivProtocol'] = undefined;
  /**
   * @member {String} snmpRoCommunity
   */
  exports.prototype['snmpRoCommunity'] = undefined;
  /**
   * @member {String} snmpRoCommunityDesc
   */
  exports.prototype['snmpRoCommunityDesc'] = undefined;
  /**
   * @member {String} snmpRwCommunity
   */
  exports.prototype['snmpRwCommunity'] = undefined;
  /**
   * @member {String} snmpRwCommunityDesc
   */
  exports.prototype['snmpRwCommunityDesc'] = undefined;
  /**
   * @member {String} snmpUserName
   */
  exports.prototype['snmpUserName'] = undefined;
  /**
   * @member {Number} timeOut
   */
  exports.prototype['timeOut'] = undefined;
  /**
   * @member {Boolean} updateMgmtIp
   */
  exports.prototype['updateMgmtIp'] = undefined;
  /**
   * @member {String} userNameList
   */
  exports.prototype['userNameList'] = undefined;



  return exports;
}));

