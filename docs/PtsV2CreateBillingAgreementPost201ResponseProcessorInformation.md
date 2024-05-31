# CyberSource.PtsV2CreateBillingAgreementPost201ResponseProcessorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalCode** | **String** | Authorization code. Returned only when the processor returns this value.  The length of this value depends on your processor.  Returned by authorization service.  #### PIN debit Authorization code that is returned by the processor.  Returned by PIN debit credit.  #### Elavon Encrypted Account Number Program The returned value is OFFLINE.  #### TSYS Acquiring Solutions The returned value for a successful zero amount authorization is 000000.  | [optional] 
**responseCode** | **String** | For most processors, this is the error message sent directly from the bank. Returned only when the processor returns this value.  **Important** Do not use this field to evaluate the result of the authorization. #### SEPA/BACS Response code from the processor. Possible values: 00000–99999. See Appendix C, \"Reason Codes and Processor Response Codes,\" on page 42.  #### PIN debit Response value that is returned by the processor or bank. **Important** Do not use this field to evaluate the results of the transaction request.  Returned by PIN debit credit, PIN debit purchase, and PIN debit reversal.  #### AIBMS If this value is `08`, you can accept the transaction if the customer provides you with identification.  #### Atos This value is the response code sent from Atos and it might also include the response code from the bank. Format: `aa,bb` with the two values separated by a comma and where: - `aa` is the two-digit error message from Atos. - `bb` is the optional two-digit error message from the bank.  #### Comercio Latino This value is the status code and the error or response code received from the processor separated by a colon. Format: [status code]:E[error code] or [status code]:R[response code] Example `2:R06`  #### JCN Gateway Processor-defined detail error code. The associated response category code is in the `processorInformation.responseCategoryCode` field. String (3)  | [optional] 
**transactionId** | **String** | Transaction ID assigned by the processor.  | [optional] 
**responseDetails** | **String** | Response code indicating that creating the agreement failed  | [optional] 
**reasonCode** | **String** | Numeric value corresponding to the result of the request.  | [optional] 

