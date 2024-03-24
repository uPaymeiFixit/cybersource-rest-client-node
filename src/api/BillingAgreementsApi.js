/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateBillingAgreement', 'model/IntimateBillingAgreement', 'model/ModifyBillingAgreement', 'model/PtsV2CreateBillingAgreementPost201Response', 'model/PtsV2CreateBillingAgreementPost400Response', 'model/PtsV2CreateBillingAgreementPost502Response', 'model/PtsV2CreditsPost201Response1', 'model/PtsV2ModifyBillingAgreementPost201Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateBillingAgreement'), require('../model/IntimateBillingAgreement'), require('../model/ModifyBillingAgreement'), require('../model/PtsV2CreateBillingAgreementPost201Response'), require('../model/PtsV2CreateBillingAgreementPost400Response'), require('../model/PtsV2CreateBillingAgreementPost502Response'), require('../model/PtsV2CreditsPost201Response1'), require('../model/PtsV2ModifyBillingAgreementPost201Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.BillingAgreementsApi = factory(root.CyberSource.ApiClient, root.CyberSource.CreateBillingAgreement, root.CyberSource.IntimateBillingAgreement, root.CyberSource.ModifyBillingAgreement, root.CyberSource.PtsV2CreateBillingAgreementPost201Response, root.CyberSource.PtsV2CreateBillingAgreementPost400Response, root.CyberSource.PtsV2CreateBillingAgreementPost502Response, root.CyberSource.PtsV2CreditsPost201Response1, root.CyberSource.PtsV2ModifyBillingAgreementPost201Response);
  }
}(this, function(ApiClient, CreateBillingAgreement, IntimateBillingAgreement, ModifyBillingAgreement, PtsV2CreateBillingAgreementPost201Response, PtsV2CreateBillingAgreementPost400Response, PtsV2CreateBillingAgreementPost502Response, PtsV2CreditsPost201Response1, PtsV2ModifyBillingAgreementPost201Response) {
  'use strict';

  /**
   * BillingAgreements service.
   * @module api/BillingAgreementsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new BillingAgreementsApi. 
   * @alias module:api/BillingAgreementsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the billingAgreementsDeRegistration operation.
     * @callback module:api/BillingAgreementsApi~billingAgreementsDeRegistrationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2ModifyBillingAgreementPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify a Billing Agreement
     * #### Standing Instruction: Standing Instruction with or without Token.  #### Revoke Mandate: When you revoke a mandate, any pending direct debits linked to that mandate are canceled. No notifications are sent. When you revoke a mandate with no pending direct debits, the Bacs scheme or customer&#39;s bank notify you of any subsequent direct debit events. When you revoke a mandate, you cannot send a direct debit request using the mandate ID. Customer payments cannot be made against a revoked mandate. You can revoke a mandate when the customer:   - Requests that you revoke the mandate.   - Closes their account with you. Possible revoke mandate status values -   - Revoked—the revoke mandate request was successfully processed.   - Failed—the revoke mandate request was not accepted.  #### Update Mandate: In most cases, the account details of an existing mandate cannot be updated in the Bacs schema, except by creating a new mandate. However, some very limited customer information, like name and address, can be updated to the mandate without needing to revoke it first  #### Mandate Status: After the customer signs the mandate, request that the mandate status service verify the mandate status. Possible mandate status values:   - Active—the mandate is successfully created. A direct debit can be sent for this mandate ID.   - Pending—a pending mandate means the mandate is not yet signed.   - Failed—the customer did not authenticate.   - Expired—the deadline to create the mandate passed.   - Revoked—the mandate is cancelled.  #### Paypal Billing Agreement:  A billing agreement is set up between PayPal and your customer. When you collect the details of a customer&#39;s billing agreement, you are able to bill that customer without requiring an authorization for each payment.  You can bill the customer at the same time you process their PayPal Express checkout order, which simplifies your business processes. 
     * @param {module:model/ModifyBillingAgreement} modifyBillingAgreement 
     * @param {String} id ID for de-registration or cancellation of Billing Agreement
     * @param {module:api/BillingAgreementsApi~billingAgreementsDeRegistrationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2ModifyBillingAgreementPost201Response}
     */
    this.billingAgreementsDeRegistration = function(modifyBillingAgreement, id, callback) {
      var postBody = modifyBillingAgreement;

      // verify the required parameter 'modifyBillingAgreement' is set
      if (modifyBillingAgreement === undefined || modifyBillingAgreement === null) {
        throw new Error("Missing the required parameter 'modifyBillingAgreement' when calling billingAgreementsDeRegistration");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling billingAgreementsDeRegistration");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/ModifyBillingAgreement', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = PtsV2ModifyBillingAgreementPost201Response;

      return this.apiClient.callApi(
        '/pts/v2/billing-agreements/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the billingAgreementsIntimation operation.
     * @callback module:api/BillingAgreementsApi~billingAgreementsIntimationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2CreditsPost201Response1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Standing Instruction intimation
     * Standing Instruction with or without Token.
     * @param {module:model/IntimateBillingAgreement} intimateBillingAgreement 
     * @param {String} id ID for intimation of Billing Agreement
     * @param {module:api/BillingAgreementsApi~billingAgreementsIntimationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2CreditsPost201Response1}
     */
    this.billingAgreementsIntimation = function(intimateBillingAgreement, id, callback) {
      var postBody = intimateBillingAgreement;

      // verify the required parameter 'intimateBillingAgreement' is set
      if (intimateBillingAgreement === undefined || intimateBillingAgreement === null) {
        throw new Error("Missing the required parameter 'intimateBillingAgreement' when calling billingAgreementsIntimation");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling billingAgreementsIntimation");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/IntimateBillingAgreement', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = PtsV2CreditsPost201Response1;

      return this.apiClient.callApi(
        '/pts/v2/billing-agreements/{id}/intimations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the billingAgreementsRegistration operation.
     * @callback module:api/BillingAgreementsApi~billingAgreementsRegistrationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2CreateBillingAgreementPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Billing Agreement
     * #### Standing Instruction: Standing Instruction with or without Token. Transaction amount in case First payment is coming along with registration. Only 2 decimal places allowed  #### Create Mandate: You can create a mandate through the direct debit mandate flow. Possible create mandate status values:   - Pending—the create mandate request was successfully processed.   - Failed—the create mandate request was not accepted.  #### Import Mandate: In the Bacs scheme, a mandate is created with a status of active. Direct debit collections can be made against it immediately. You can import a mandate to the CyberSource database when:   - You have existing customers with signed, active mandates   - You manage mandates outside of CyberSource.  When you import an existing mandate to the CyberSource database, provide a unique value for the mandate ID or the request results in an error. If an import mandate request is not accepted, the import mandate status value is failed. 
     * @param {module:model/CreateBillingAgreement} createBillingAgreement 
     * @param {module:api/BillingAgreementsApi~billingAgreementsRegistrationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2CreateBillingAgreementPost201Response}
     */
    this.billingAgreementsRegistration = function(createBillingAgreement, callback) {
      var postBody = createBillingAgreement;

      // verify the required parameter 'createBillingAgreement' is set
      if (createBillingAgreement === undefined || createBillingAgreement === null) {
        throw new Error("Missing the required parameter 'createBillingAgreement' when calling billingAgreementsRegistration");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/CreateBillingAgreement', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = PtsV2CreateBillingAgreementPost201Response;

      return this.apiClient.callApi(
        '/pts/v2/billing-agreements', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
