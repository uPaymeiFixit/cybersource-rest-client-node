/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.38
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse400', 'model/InlineResponse403', 'model/InlineResponse409', 'model/InlineResponse410', 'model/InlineResponse412', 'model/InlineResponse424', 'model/InlineResponse500', 'model/PatchCustomerShippingAddressRequest', 'model/PostCustomerShippingAddressRequest', 'model/ShippingAddressListForCustomer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse400'), require('../model/InlineResponse403'), require('../model/InlineResponse409'), require('../model/InlineResponse410'), require('../model/InlineResponse412'), require('../model/InlineResponse424'), require('../model/InlineResponse500'), require('../model/PatchCustomerShippingAddressRequest'), require('../model/PostCustomerShippingAddressRequest'), require('../model/ShippingAddressListForCustomer'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CustomerShippingAddressApi = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse400, root.CyberSource.InlineResponse403, root.CyberSource.InlineResponse409, root.CyberSource.InlineResponse410, root.CyberSource.InlineResponse412, root.CyberSource.InlineResponse424, root.CyberSource.InlineResponse500, root.CyberSource.PatchCustomerShippingAddressRequest, root.CyberSource.PostCustomerShippingAddressRequest, root.CyberSource.ShippingAddressListForCustomer);
  }
}(this, function(ApiClient, InlineResponse400, InlineResponse403, InlineResponse409, InlineResponse410, InlineResponse412, InlineResponse424, InlineResponse500, PatchCustomerShippingAddressRequest, PostCustomerShippingAddressRequest, ShippingAddressListForCustomer) {
  'use strict';

  /**
   * CustomerShippingAddress service.
   * @module api/CustomerShippingAddressApi
   * @version 0.0.1
   */

  /**
   * Constructs a new CustomerShippingAddressApi. 
   * @alias module:api/CustomerShippingAddressApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the deleteCustomerShippingAddress operation.
     * @callback module:api/CustomerShippingAddressApi~deleteCustomerShippingAddressCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Customer Shipping Address
     * |  |  |  | | --- | --- | --- | |**Customer Shipping Address**<br>A Customer Shipping Address represents tokenized customer shipping information.<br>A [Customer](#token-management_customer_create-a-customer) can have [one or more Shipping Addresses](#token-management_customer-shipping-address_list-shipping-addresses-for-a-customer), with one allocated as the Customers default for use in payments.|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Deleting a Customers Shipping Address**<br>Your system can use this API to delete an existing Shipping Address for a Customer.<br>If a customer has more than one Shipping Address then the default Shipping Address cannot be deleted without first selecting a [new default Shipping Address](#token-management_customer-shipping-address_update-a-customer-shipping-address_samplerequests-dropdown_make-customer-shipping-address-the-default_liveconsole-tab-request-body). 
     * @param {String} customerId The Id of a Customer.
     * @param {String} shippingAddressId The Id of a shipping address.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The Id of a profile containing user specific TMS configuration.
     * @param {module:api/CustomerShippingAddressApi~deleteCustomerShippingAddressCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCustomerShippingAddress = function(customerId, shippingAddressId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('DELETE' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling deleteCustomerShippingAddress");
      }

      // verify the required parameter 'shippingAddressId' is set
      if (shippingAddressId === undefined || shippingAddressId === null) {
        throw new Error("Missing the required parameter 'shippingAddressId' when calling deleteCustomerShippingAddress");
      }


      var pathParams = {
        'customerId': customerId,
        'shippingAddressId': shippingAddressId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tms/v2/customers/{customerId}/shipping-addresses/{shippingAddressId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerShippingAddress operation.
     * @callback module:api/CustomerShippingAddressApi~getCustomerShippingAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostCustomerShippingAddressRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Customer Shipping Address
     * |  |  |  | | --- | --- | --- | |**Customer Shipping Address**<br>A Customer Shipping Address represents tokenized customer shipping information.<br>A [Customer](#token-management_customer_create-a-customer) can have [one or more Shipping Addresses](#token-management_customer-shipping-address_list-shipping-addresses-for-a-customer), with one allocated as the Customers default for use in payments.|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Retrieving a Customer Shipping Address**<br>Your system can use this API to retrieve an existing Shipping Address for a Customer.<br>To perform a payment with a particular Shipping Address simply specify the [Shipping Address Id in the payments request](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-using-tokens_authorization-with-customer-payment-instrument-and-shipping-address-token-id_liveconsole-tab-request-body). 
     * @param {String} customerId The Id of a Customer.
     * @param {String} shippingAddressId The Id of a shipping address.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The Id of a profile containing user specific TMS configuration.
     * @param {module:api/CustomerShippingAddressApi~getCustomerShippingAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostCustomerShippingAddressRequest}
     */
    this.getCustomerShippingAddress = function(customerId, shippingAddressId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerShippingAddress");
      }

      // verify the required parameter 'shippingAddressId' is set
      if (shippingAddressId === undefined || shippingAddressId === null) {
        throw new Error("Missing the required parameter 'shippingAddressId' when calling getCustomerShippingAddress");
      }


      var pathParams = {
        'customerId': customerId,
        'shippingAddressId': shippingAddressId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = PostCustomerShippingAddressRequest;

      return this.apiClient.callApi(
        '/tms/v2/customers/{customerId}/shipping-addresses/{shippingAddressId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerShippingAddressesList operation.
     * @callback module:api/CustomerShippingAddressApi~getCustomerShippingAddressesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShippingAddressListForCustomer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Shipping Addresses for a Customer
     * |  |  |  | | --- | --- | --- | |**Customer Shipping Address**<br>A Customer Shipping Address represents tokenized customer shipping information.<br>A [Customer](#token-management_customer_create-a-customer) can have [one or more Shipping Addresses](#token-management_customer-shipping-address_list-shipping-addresses-for-a-customer), with one allocated as the Customers default for use in payments.|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Retrieving all Customer Shipping Addresses**<br>Your system can use this API to retrieve all existing Shipping Addresses for a Customer. 
     * @param {String} customerId The Id of a Customer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The Id of a profile containing user specific TMS configuration.
     * @param {Number} opts.offset Starting record in zero-based dataset that should be returned as the first object in the array. Default is 0. (default to 0)
     * @param {Number} opts.limit The maximum number that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100. (default to 20)
     * @param {module:api/CustomerShippingAddressApi~getCustomerShippingAddressesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShippingAddressListForCustomer}
     */
    this.getCustomerShippingAddressesList = function(customerId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerShippingAddressesList");
      }


      var pathParams = {
        'customerId': customerId
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = ShippingAddressListForCustomer;

      return this.apiClient.callApi(
        '/tms/v2/customers/{customerId}/shipping-addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchCustomersShippingAddress operation.
     * @callback module:api/CustomerShippingAddressApi~patchCustomersShippingAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PatchCustomerShippingAddressRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Customer Shipping Address
     * |  |  |  | | --- | --- | --- | |**Customer Shipping Address**<br>A Customer Shipping Address represents tokenized customer shipping information.<br>A [Customer](#token-management_customer_create-a-customer) can have [one or more Shipping Addresses](#token-management_customer-shipping-address_list-shipping-addresses-for-a-customer), with one allocated as the Customers default for use in payments.|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Updating a Customers Shipping Address**<br>Your system can use this API to update an existing Shipping Addresses for a Customer, including selecting a [default Shipping Address](#token-management_customer-shipping-address_update-a-customer-shipping-address_samplerequests-dropdown_make-customer-shipping-address-the-default_liveconsole-tab-request-body) for use in payments. 
     * @param {String} customerId The Id of a Customer.
     * @param {String} shippingAddressId The Id of a shipping address.
     * @param {module:model/PatchCustomerShippingAddressRequest} patchCustomerShippingAddressRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The Id of a profile containing user specific TMS configuration.
     * @param {String} opts.ifMatch Contains an ETag value from a GET request to make the request conditional.
     * @param {module:api/CustomerShippingAddressApi~patchCustomersShippingAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PatchCustomerShippingAddressRequest}
     */
    this.patchCustomersShippingAddress = function(customerId, shippingAddressId, patchCustomerShippingAddressRequest, opts, callback) {
      opts = opts || {};
      var postBody = patchCustomerShippingAddressRequest;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling patchCustomersShippingAddress");
      }

      // verify the required parameter 'shippingAddressId' is set
      if (shippingAddressId === undefined || shippingAddressId === null) {
        throw new Error("Missing the required parameter 'shippingAddressId' when calling patchCustomersShippingAddress");
      }

      // verify the required parameter 'patchCustomerShippingAddressRequest' is set
      if (patchCustomerShippingAddressRequest === undefined || patchCustomerShippingAddressRequest === null) {
        throw new Error("Missing the required parameter 'patchCustomerShippingAddressRequest' when calling patchCustomersShippingAddress");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/PatchCustomerShippingAddressRequest', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
        'customerId': customerId,
        'shippingAddressId': shippingAddressId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId'],
        'if-match': opts['ifMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = PatchCustomerShippingAddressRequest;

      return this.apiClient.callApi(
        '/tms/v2/customers/{customerId}/shipping-addresses/{shippingAddressId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postCustomerShippingAddress operation.
     * @callback module:api/CustomerShippingAddressApi~postCustomerShippingAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostCustomerShippingAddressRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Customer Shipping Address
     * |  |  |  | | --- | --- | --- | |**Customer Shipping Address**<br>A Customer Shipping Address represents tokenized customer shipping information.<br>A [Customer](#token-management_customer_create-a-customer) can have [one or more Shipping Addresses](#token-management_customer-shipping-address_list-shipping-addresses-for-a-customer), with one allocated as the Customers default for use in payments.|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Creating a Customer Shipping Address**<br>Your system can use this API to create an existing Customers default or non default Shipping Address.<br>You can also create additional Customer Shipping Addresses via the [Payments API](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-with-token-create_authorization-create-default-payment-instrument-shipping-address-for-existing-customer_liveconsole-tab-request-body). 
     * @param {String} customerId The Id of a Customer.
     * @param {module:model/PostCustomerShippingAddressRequest} postCustomerShippingAddressRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The Id of a profile containing user specific TMS configuration.
     * @param {module:api/CustomerShippingAddressApi~postCustomerShippingAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostCustomerShippingAddressRequest}
     */
    this.postCustomerShippingAddress = function(customerId, postCustomerShippingAddressRequest, opts, callback) {
      opts = opts || {};
      var postBody = postCustomerShippingAddressRequest;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling postCustomerShippingAddress");
      }

      // verify the required parameter 'postCustomerShippingAddressRequest' is set
      if (postCustomerShippingAddressRequest === undefined || postCustomerShippingAddressRequest === null) {
        throw new Error("Missing the required parameter 'postCustomerShippingAddressRequest' when calling postCustomerShippingAddress");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/PostCustomerShippingAddressRequest', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
        'customerId': customerId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = PostCustomerShippingAddressRequest;

      return this.apiClient.callApi(
        '/tms/v2/customers/{customerId}/shipping-addresses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
