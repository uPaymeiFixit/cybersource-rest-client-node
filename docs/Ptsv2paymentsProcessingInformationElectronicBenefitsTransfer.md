# CyberSource.Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **String** | Flag that specifies the category for the EBT transaction.  Possible values: - `CASH`: Cash benefits, which can be used to purchase any item at a participating retailer, as well as to obtain cash-back or make a cash withdrawal from a participating ATM. - `FOOD`: Food stamp benefits, which can be used only to purchase food items authorized by the USDA SNAP program.  #### PIN debit Required field for EBT transactions that use PIN debit credit or PIN debit purchase; otherwise, not used.  | [optional] 
**voucherSerialNumber** | **String** | The serial number printed on the EBT voucher.  #### PIN debit Required field for EBT voucher transactions that use PIN debit purchase; otherwise, not used.  | [optional] 


