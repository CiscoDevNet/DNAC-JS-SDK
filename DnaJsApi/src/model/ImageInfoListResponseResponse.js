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
    define(['ApiClient', 'model/ImageInfoListResponseApplicableDevicesForImage', 'model/ImageInfoListResponseProfileInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ImageInfoListResponseApplicableDevicesForImage'), require('./ImageInfoListResponseProfileInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Swagger) {
      root.Swagger = {};
    }
    root.Swagger.ImageInfoListResponseResponse = factory(root.Swagger.ApiClient, root.Swagger.ImageInfoListResponseApplicableDevicesForImage, root.Swagger.ImageInfoListResponseProfileInfo);
  }
}(this, function(ApiClient, ImageInfoListResponseApplicableDevicesForImage, ImageInfoListResponseProfileInfo) {
  'use strict';




  /**
   * The ImageInfoListResponseResponse model module.
   * @module model/ImageInfoListResponseResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ImageInfoListResponseResponse</code>.
   * @alias module:model/ImageInfoListResponseResponse
   * @class
   */
  var exports = function() {
    var _this = this;























  };

  /**
   * Constructs a <code>ImageInfoListResponseResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageInfoListResponseResponse} obj Optional instance to populate.
   * @return {module:model/ImageInfoListResponseResponse} The populated <code>ImageInfoListResponseResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('applicableDevicesForImage')) {
        obj['applicableDevicesForImage'] = ApiClient.convertToType(data['applicableDevicesForImage'], [ImageInfoListResponseApplicableDevicesForImage]);
      }
      if (data.hasOwnProperty('applicationType')) {
        obj['applicationType'] = ApiClient.convertToType(data['applicationType'], 'String');
      }
      if (data.hasOwnProperty('createdTime')) {
        obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'String');
      }
      if (data.hasOwnProperty('extendedAttributes')) {
        obj['extendedAttributes'] = ApiClient.convertToType(data['extendedAttributes'], Object);
      }
      if (data.hasOwnProperty('family')) {
        obj['family'] = ApiClient.convertToType(data['family'], 'String');
      }
      if (data.hasOwnProperty('feature')) {
        obj['feature'] = ApiClient.convertToType(data['feature'], 'String');
      }
      if (data.hasOwnProperty('fileServiceId')) {
        obj['fileServiceId'] = ApiClient.convertToType(data['fileServiceId'], 'String');
      }
      if (data.hasOwnProperty('fileSize')) {
        obj['fileSize'] = ApiClient.convertToType(data['fileSize'], 'String');
      }
      if (data.hasOwnProperty('imageIntegrityStatus')) {
        obj['imageIntegrityStatus'] = ApiClient.convertToType(data['imageIntegrityStatus'], 'String');
      }
      if (data.hasOwnProperty('imageName')) {
        obj['imageName'] = ApiClient.convertToType(data['imageName'], 'String');
      }
      if (data.hasOwnProperty('imageSeries')) {
        obj['imageSeries'] = ApiClient.convertToType(data['imageSeries'], ['String']);
      }
      if (data.hasOwnProperty('imageSource')) {
        obj['imageSource'] = ApiClient.convertToType(data['imageSource'], 'String');
      }
      if (data.hasOwnProperty('imageType')) {
        obj['imageType'] = ApiClient.convertToType(data['imageType'], 'String');
      }
      if (data.hasOwnProperty('imageUuid')) {
        obj['imageUuid'] = ApiClient.convertToType(data['imageUuid'], 'String');
      }
      if (data.hasOwnProperty('importSourceType')) {
        obj['importSourceType'] = ApiClient.convertToType(data['importSourceType'], 'String');
      }
      if (data.hasOwnProperty('isTaggedGolden')) {
        obj['isTaggedGolden'] = ApiClient.convertToType(data['isTaggedGolden'], 'Boolean');
      }
      if (data.hasOwnProperty('md5Checksum')) {
        obj['md5Checksum'] = ApiClient.convertToType(data['md5Checksum'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('profileInfo')) {
        obj['profileInfo'] = ApiClient.convertToType(data['profileInfo'], [ImageInfoListResponseProfileInfo]);
      }
      if (data.hasOwnProperty('shaCheckSum')) {
        obj['shaCheckSum'] = ApiClient.convertToType(data['shaCheckSum'], 'String');
      }
      if (data.hasOwnProperty('vendor')) {
        obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ImageInfoListResponseApplicableDevicesForImage>} applicableDevicesForImage
   */
  exports.prototype['applicableDevicesForImage'] = undefined;
  /**
   * @member {String} applicationType
   */
  exports.prototype['applicationType'] = undefined;
  /**
   * @member {String} createdTime
   */
  exports.prototype['createdTime'] = undefined;
  /**
   * @member {Object} extendedAttributes
   */
  exports.prototype['extendedAttributes'] = undefined;
  /**
   * @member {String} family
   */
  exports.prototype['family'] = undefined;
  /**
   * @member {String} feature
   */
  exports.prototype['feature'] = undefined;
  /**
   * @member {String} fileServiceId
   */
  exports.prototype['fileServiceId'] = undefined;
  /**
   * @member {String} fileSize
   */
  exports.prototype['fileSize'] = undefined;
  /**
   * @member {String} imageIntegrityStatus
   */
  exports.prototype['imageIntegrityStatus'] = undefined;
  /**
   * @member {String} imageName
   */
  exports.prototype['imageName'] = undefined;
  /**
   * @member {Array.<String>} imageSeries
   */
  exports.prototype['imageSeries'] = undefined;
  /**
   * @member {String} imageSource
   */
  exports.prototype['imageSource'] = undefined;
  /**
   * @member {String} imageType
   */
  exports.prototype['imageType'] = undefined;
  /**
   * @member {String} imageUuid
   */
  exports.prototype['imageUuid'] = undefined;
  /**
   * @member {module:model/ImageInfoListResponseResponse.ImportSourceTypeEnum} importSourceType
   */
  exports.prototype['importSourceType'] = undefined;
  /**
   * @member {Boolean} isTaggedGolden
   */
  exports.prototype['isTaggedGolden'] = undefined;
  /**
   * @member {String} md5Checksum
   */
  exports.prototype['md5Checksum'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/ImageInfoListResponseProfileInfo>} profileInfo
   */
  exports.prototype['profileInfo'] = undefined;
  /**
   * @member {String} shaCheckSum
   */
  exports.prototype['shaCheckSum'] = undefined;
  /**
   * @member {String} vendor
   */
  exports.prototype['vendor'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;


  /**
   * Allowed values for the <code>importSourceType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ImportSourceTypeEnum = {
    /**
     * value: "DEVICE"
     * @const
     */
    "DEVICE": "DEVICE",
    /**
     * value: "REMOTEURL"
     * @const
     */
    "REMOTEURL": "REMOTEURL",
    /**
     * value: "CCO"
     * @const
     */
    "CCO": "CCO",
    /**
     * value: "FILESYSTEM"
     * @const
     */
    "FILESYSTEM": "FILESYSTEM"  };


  return exports;
}));


