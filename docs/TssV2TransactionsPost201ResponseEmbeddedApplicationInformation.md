# CyberSource.TssV2TransactionsPost201ResponseEmbeddedApplicationInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reasonCode** | **String** | Indicates the reason why a request succeeded or failed and possible action to take if a request fails.  For details, see the appendix of reason codes in the documentation for the relevant payment method.  | [optional] 
**rCode** | **String** | Indicates whether the service request was successful. Possible values:  - `-1`: An error occurred. - `0`: The request was declined. - `1`: The request was successful.  | [optional] 
**rFlag** | **String** | One-word description of the result of the application.  | [optional] 
**applications** | [**[TssV2TransactionsPost201ResponseEmbeddedApplicationInformationApplications]**](TssV2TransactionsPost201ResponseEmbeddedApplicationInformationApplications.md) |  | [optional] 
**returnCode** | **Number** | The description for this field is not available. | [optional] 


