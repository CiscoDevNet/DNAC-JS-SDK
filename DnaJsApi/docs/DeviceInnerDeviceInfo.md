# Swagger.DeviceInnerDeviceInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aaaCredentials** | [**DeviceInnerDeviceInfoAaaCredentials**](DeviceInnerDeviceInfoAaaCredentials.md) |  | [optional] 
**addedOn** | **Number** |  | [optional] 
**addnMacAddrs** | **[String]** |  | [optional] 
**agentType** | **String** |  | [optional] 
**authStatus** | **String** |  | [optional] 
**authenticatedSudiSerialNo** | **String** |  | [optional] 
**capabilitiesSupported** | **[String]** |  | [optional] 
**cmState** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**deviceSudiSerialNos** | **[String]** |  | [optional] 
**deviceType** | **String** |  | [optional] 
**featuresSupported** | **[String]** |  | [optional] 
**fileSystemList** | [**[DeviceInnerDeviceInfoFileSystemList]**](DeviceInnerDeviceInfoFileSystemList.md) |  | [optional] 
**firstContact** | **Number** |  | [optional] 
**hostname** | **String** |  | [optional] 
**httpHeaders** | [**[ResetRequestConfigParameters]**](ResetRequestConfigParameters.md) |  | [optional] 
**imageFile** | **String** |  | [optional] 
**imageVersion** | **String** |  | [optional] 
**ipInterfaces** | [**[DeviceInnerDeviceInfoIpInterfaces]**](DeviceInnerDeviceInfoIpInterfaces.md) |  | [optional] 
**lastContact** | **Number** |  | [optional] 
**lastSyncTime** | **Number** |  | [optional] 
**lastUpdateOn** | **Number** |  | [optional] 
**location** | [**DeviceInnerDeviceInfoLocation**](DeviceInnerDeviceInfoLocation.md) |  | [optional] 
**macAddress** | **String** |  | [optional] 
**mode** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**neighborLinks** | [**[DeviceInnerDeviceInfoNeighborLinks]**](DeviceInnerDeviceInfoNeighborLinks.md) |  | [optional] 
**onbState** | **String** |  | [optional] 
**pid** | **String** |  | [optional] 
**pnpProfileList** | [**[DeviceInnerDeviceInfoPnpProfileList]**](DeviceInnerDeviceInfoPnpProfileList.md) |  | [optional] 
**preWorkflowCliOuputs** | [**[DeviceInnerDeviceInfoPreWorkflowCliOuputs]**](DeviceInnerDeviceInfoPreWorkflowCliOuputs.md) |  | [optional] 
**projectId** | **String** |  | [optional] 
**projectName** | **String** |  | [optional] 
**reloadRequested** | **Boolean** |  | [optional] 
**serialNumber** | **String** |  | [optional] 
**smartAccountId** | **String** |  | [optional] 
**source** | **String** |  | [optional] 
**stack** | **Boolean** |  | [optional] 
**stackInfo** | [**DeviceInnerDeviceInfoStackInfo**](DeviceInnerDeviceInfoStackInfo.md) |  | [optional] 
**state** | **String** |  | [optional] 
**sudiRequired** | **Boolean** |  | [optional] 
**tags** | **Object** |  | [optional] 
**userSudiSerialNos** | **[String]** |  | [optional] 
**virtualAccountId** | **String** |  | [optional] 
**workflowId** | **String** |  | [optional] 
**workflowName** | **String** |  | [optional] 


<a name="AgentTypeEnum"></a>
## Enum: AgentTypeEnum


* `POSIX` (value: `"POSIX"`)

* `IOS` (value: `"IOS"`)




<a name="CmStateEnum"></a>
## Enum: CmStateEnum


* `NotContacted` (value: `"NotContacted"`)

* `Contacted` (value: `"Contacted"`)

* `Disconnected` (value: `"Disconnected"`)

* `SecuringConnection` (value: `"SecuringConnection"`)

* `SecuredConnection` (value: `"SecuredConnection"`)

* `Authenticated` (value: `"Authenticated"`)

* `ErrorSecuringConnection` (value: `"ErrorSecuringConnection"`)

* `ErrorAuthenticating` (value: `"ErrorAuthenticating"`)




<a name="OnbStateEnum"></a>
## Enum: OnbStateEnum


* `NotContacted` (value: `"NotContacted"`)

* `Connecting` (value: `"Connecting"`)

* `ErrorSecuringConnection` (value: `"ErrorSecuringConnection"`)

* `ErrorAuthenticating` (value: `"ErrorAuthenticating"`)

* `Initializing` (value: `"Initializing"`)

* `Initialized` (value: `"Initialized"`)

* `ErrorInitializing` (value: `"ErrorInitializing"`)

* `ErrorSudiAuthorizing` (value: `"ErrorSudiAuthorizing"`)

* `ExecutingWorkflow` (value: `"ExecutingWorkflow"`)

* `ExecutedWorkflow` (value: `"ExecutedWorkflow"`)

* `ErrorExecutingWorkflow` (value: `"ErrorExecutingWorkflow"`)

* `ExecutingReset` (value: `"ExecutingReset"`)

* `ErrorExecutingReset` (value: `"ErrorExecutingReset"`)

* `Provisioned` (value: `"Provisioned"`)




<a name="StateEnum"></a>
## Enum: StateEnum


* `Unclaimed` (value: `"Unclaimed"`)

* `Planned` (value: `"Planned"`)

* `Onboarding` (value: `"Onboarding"`)

* `Provisioned` (value: `"Provisioned"`)

* `Error` (value: `"Error"`)

* `Deleted` (value: `"Deleted"`)




