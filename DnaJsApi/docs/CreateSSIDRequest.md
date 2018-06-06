# Swagger.CreateSSIDRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interfaceName** | **String** |  | [optional] 
**vlanId** | **Number** |  | [optional] 
**ssidName** | **String** |  | [optional] 
**wlanType** | **String** |  | [optional] 
**authenticationType** | **String** |  | [optional] 
**authenticationServer** | **String** |  | [optional] 
**passpharse** | **String** |  | [optional] 
**trafficType** | **String** |  | [optional] 
**radioPolicy** | **String** |  | [optional] 
**fastTransition** | **String** |  | [optional] 
**enableFastlane** | **Boolean** |  | [optional] 
**enableMACFilering** | **Boolean** |  | [optional] 
**enableBroadcastSSID** | **Boolean** |  | [optional] 
**enableWLANBandSelection** | **Boolean** |  | [optional] 
**wirelessNetworkProfileName** | **String** |  | [optional] 
**sitesNameHierarchyToMapTheProfile** | **String** |  | [optional] 
**deviceName** | **String** |  | [optional] 
**siteNameHierarchyToMapDevicePhysicalLocation** | **String** |  | [optional] 
**managedAPLocations** | **String** |  | [optional] 
**interfaceIPAddress** | **String** |  | [optional] 
**interfaceNetMaskInCIDRFormat** | **String** |  | [optional] 
**interfaceGatewayIPAddress** | **String** |  | [optional] 
**interfaceLAGPortNumber** | **Number** |  | [optional] 
**siteNameHierarchyToMapAPPhysicalLocation** | **String** |  | [optional] 
**apNames** | **String** |  | [optional] 
**rfProfile** | **String** |  | [optional] 


<a name="AuthenticationTypeEnum"></a>
## Enum: AuthenticationTypeEnum


* `wpa2_enterprise` (value: `"wpa2_enterprise"`)

* `wpa2_personal` (value: `"wpa2_personal"`)

* `open` (value: `"open"`)




<a name="TrafficTypeEnum"></a>
## Enum: TrafficTypeEnum


* `voicedata` (value: `"voicedata"`)

* `data` (value: `"data"`)




<a name="RadioPolicyEnum"></a>
## Enum: RadioPolicyEnum


* `0` (value: `"0"`)

* `1` (value: `"1"`)




<a name="FastTransitionEnum"></a>
## Enum: FastTransitionEnum


* `ADAPTIVE` (value: `"ADAPTIVE"`)

* `ENABLE` (value: `"ENABLE"`)

* `DISABLE` (value: `"DISABLE"`)




<a name="RfProfileEnum"></a>
## Enum: RfProfileEnum


* `LOW` (value: `"LOW"`)

* `TYPICAL` (value: `"TYPICAL"`)

* `HIGH` (value: `"HIGH"`)




