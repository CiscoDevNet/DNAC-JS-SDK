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
    define(['ApiClient', 'model/TemplateDTODeviceTypes', 'model/TemplateDTORollbackTemplateParams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TemplateDTODeviceTypes'), require('./TemplateDTORollbackTemplateParams'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.TemplateDTO = factory(root.Swagger.ApiClient, root.Swagger.TemplateDTODeviceTypes, root.Swagger.TemplateDTORollbackTemplateParams);
  }
}(this, function(ApiClient, TemplateDTODeviceTypes, TemplateDTORollbackTemplateParams) {
  'use strict';




  /**
   * The TemplateDTO model module.
   * @module model/TemplateDTO
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TemplateDTO</code>.
   * @alias module:model/TemplateDTO
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>TemplateDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateDTO} obj Optional instance to populate.
   * @return {module:model/TemplateDTO} The populated <code>TemplateDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('author')) {
        obj['author'] = ApiClient.convertToType(data['author'], 'String');
      }
      if (data.hasOwnProperty('createTime')) {
        obj['createTime'] = ApiClient.convertToType(data['createTime'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('deviceTypes')) {
        obj['deviceTypes'] = ApiClient.convertToType(data['deviceTypes'], [TemplateDTODeviceTypes]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('lastUpdateTime')) {
        obj['lastUpdateTime'] = ApiClient.convertToType(data['lastUpdateTime'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('parentTemplateId')) {
        obj['parentTemplateId'] = ApiClient.convertToType(data['parentTemplateId'], 'String');
      }
      if (data.hasOwnProperty('projectId')) {
        obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
      }
      if (data.hasOwnProperty('projectName')) {
        obj['projectName'] = ApiClient.convertToType(data['projectName'], 'String');
      }
      if (data.hasOwnProperty('rollbackTemplateContent')) {
        obj['rollbackTemplateContent'] = ApiClient.convertToType(data['rollbackTemplateContent'], 'String');
      }
      if (data.hasOwnProperty('rollbackTemplateParams')) {
        obj['rollbackTemplateParams'] = ApiClient.convertToType(data['rollbackTemplateParams'], [TemplateDTORollbackTemplateParams]);
      }
      if (data.hasOwnProperty('softwareType')) {
        obj['softwareType'] = ApiClient.convertToType(data['softwareType'], 'String');
      }
      if (data.hasOwnProperty('softwareVariant')) {
        obj['softwareVariant'] = ApiClient.convertToType(data['softwareVariant'], 'String');
      }
      if (data.hasOwnProperty('softwareVersion')) {
        obj['softwareVersion'] = ApiClient.convertToType(data['softwareVersion'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('templateContent')) {
        obj['templateContent'] = ApiClient.convertToType(data['templateContent'], 'String');
      }
      if (data.hasOwnProperty('templateParams')) {
        obj['templateParams'] = ApiClient.convertToType(data['templateParams'], [TemplateDTORollbackTemplateParams]);
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} author
   */
  exports.prototype['author'] = undefined;
  /**
   * @member {Number} createTime
   */
  exports.prototype['createTime'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Array.<module:model/TemplateDTODeviceTypes>} deviceTypes
   */
  exports.prototype['deviceTypes'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} lastUpdateTime
   */
  exports.prototype['lastUpdateTime'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} parentTemplateId
   */
  exports.prototype['parentTemplateId'] = undefined;
  /**
   * @member {String} projectId
   */
  exports.prototype['projectId'] = undefined;
  /**
   * @member {String} projectName
   */
  exports.prototype['projectName'] = undefined;
  /**
   * @member {String} rollbackTemplateContent
   */
  exports.prototype['rollbackTemplateContent'] = undefined;
  /**
   * @member {Array.<module:model/TemplateDTORollbackTemplateParams>} rollbackTemplateParams
   */
  exports.prototype['rollbackTemplateParams'] = undefined;
  /**
   * @member {String} softwareType
   */
  exports.prototype['softwareType'] = undefined;
  /**
   * @member {String} softwareVariant
   */
  exports.prototype['softwareVariant'] = undefined;
  /**
   * @member {String} softwareVersion
   */
  exports.prototype['softwareVersion'] = undefined;
  /**
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {String} templateContent
   */
  exports.prototype['templateContent'] = undefined;
  /**
   * @member {Array.<module:model/TemplateDTORollbackTemplateParams>} templateParams
   */
  exports.prototype['templateParams'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;



  return exports;
}));


