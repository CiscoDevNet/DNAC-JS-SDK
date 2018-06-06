# Swagger.SNMPvCredentialDTOInner

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authPassword** | **String** |  | [optional] 
**authType** | **String** |  | [optional] 
**comments** | **String** |  | [optional] 
**credentialType** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**instanceTenantId** | **String** |  | [optional] 
**instanceUuid** | **String** |  | [optional] 
**privacyPassword** | **String** |  | [optional] 
**privacyType** | **String** |  | [optional] 
**snmpMode** | **String** |  | [optional] 
**username** | **String** |  | [optional] 


<a name="AuthTypeEnum"></a>
## Enum: AuthTypeEnum


* `SHA` (value: `"SHA"`)

* `MD5` (value: `"MD5"`)




<a name="CredentialTypeEnum"></a>
## Enum: CredentialTypeEnum


* `GLOBAL` (value: `"GLOBAL"`)

* `APP` (value: `"APP"`)




<a name="PrivacyTypeEnum"></a>
## Enum: PrivacyTypeEnum


* `DES` (value: `"DES"`)

* `AES128` (value: `"AES128"`)




<a name="SnmpModeEnum"></a>
## Enum: SnmpModeEnum


* `AUTHPRIV` (value: `"AUTHPRIV"`)

* `AUTHNOPRIV` (value: `"AUTHNOPRIV"`)

* `NOAUTHNOPRIV` (value: `"NOAUTHNOPRIV"`)




