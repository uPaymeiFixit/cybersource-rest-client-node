# CyberSource.Ptsv2paymentsOrderInformationAmountDetailsSurcharge

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | The surcharge amount is included in the total transaction amount but is passed in a separate field to the issuer and acquirer for tracking. The issuer can provide information about the surcharge amount to the customer.  If the amount is positive, then it is a debit for the customer. If the amount is negative, then it is a credit for the customer.  **NOTE**: This field is supported only for CyberSource through VisaNet (CtV) for Payouts. For CtV, the maximum string length is 8.  #### PIN debit Surcharge amount that you are charging the customer for this transaction. If you include a surcharge amount in the request, you must also include the surcharge amount in the value for `orderInformation.amountDetails.totalAmount`.  Optional field for transactions that use PIN debit credit or PIN debit purchase.  | [optional] 
**description** | **String** | Merchant-defined field for describing the surcharge amount. | [optional] 


