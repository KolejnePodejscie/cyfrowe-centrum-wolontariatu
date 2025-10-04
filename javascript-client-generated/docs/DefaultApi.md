# WolontariuszApi.DefaultApi

All URIs are relative to *https://virtserver.swaggerhub.com/kolejnepodejcie/reference/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlobs**](DefaultApi.md#getBlobs) | **GET** /blobs/{blobid} | Your GET endpoint
[**getEvenetsEventidTopicsTopicid**](DefaultApi.md#getEvenetsEventidTopicsTopicid) | **GET** /evenets/{eventid}/topics/{topicid} | Your GET endpoint
[**getEvents**](DefaultApi.md#getEvents) | **GET** /events | Your GET endpoint
[**getEventsEventid**](DefaultApi.md#getEventsEventid) | **GET** /events/{eventid} | Your GET endpoint
[**getEventsEventidQuestions**](DefaultApi.md#getEventsEventidQuestions) | **GET** /events/{eventid}/topics | Your GET endpoint
[**getEventsEventidTasks**](DefaultApi.md#getEventsEventidTasks) | **GET** /events/{eventid}/tasks | Your GET endpoint
[**getEventsEventidTasksTaskid**](DefaultApi.md#getEventsEventidTasksTaskid) | **GET** /events/{eventid}/tasks/{taskid} | Your GET endpoint
[**getEventsEventidUsers**](DefaultApi.md#getEventsEventidUsers) | **GET** /events/{eventid}/users | Your GET endpoint
[**getEventsEventidUsersUserid**](DefaultApi.md#getEventsEventidUsersUserid) | **GET** /events/{eventid}/users/{userid} | Your GET endpoint
[**getOrganisations**](DefaultApi.md#getOrganisations) | **GET** /organisations | Your GET endpoint
[**getUserUserid**](DefaultApi.md#getUserUserid) | **GET** /users/{userid} | Your GET endpoint
[**getUsers**](DefaultApi.md#getUsers) | **GET** /users | Your GET endpoint
[**postBlobs**](DefaultApi.md#postBlobs) | **POST** /blobs | Your POST endpoint
[**postEvents**](DefaultApi.md#postEvents) | **POST** /events | Your POST endpoint
[**postEventsEventidTasks**](DefaultApi.md#postEventsEventidTasks) | **POST** /events/{eventid}/tasks | Your POST endpoint
[**postEventsEventidTasksTaskidUsers**](DefaultApi.md#postEventsEventidTasksTaskidUsers) | **POST** /events/{eventid}/tasks/{taskid} | Your POST endpoint
[**postEventsEventidTopics**](DefaultApi.md#postEventsEventidTopics) | **POST** /events/{eventid}/topics | Your POST endpoint
[**postEventsEventidTopicsTopicidComments**](DefaultApi.md#postEventsEventidTopicsTopicidComments) | **POST** /events/{eventid}/topics/{topicid}/comments | Your POST endpoint
[**postEventsEventidUsersUseridTasks**](DefaultApi.md#postEventsEventidUsersUseridTasks) | **POST** /events/{eventid}/users/{userid} | Your POST endpoint
[**postOrganisations**](DefaultApi.md#postOrganisations) | **POST** /organisations | Your POST endpoint
[**putEventsEventid**](DefaultApi.md#putEventsEventid) | **PUT** /events/{eventid} | Your PUT endpoint
[**putEventsEventidUsers**](DefaultApi.md#putEventsEventidUsers) | **PUT** /events/{eventid}/users | Your PUT endpoint
[**putOrganisationsOrgid**](DefaultApi.md#putOrganisationsOrgid) | **PUT** /organisations/{orgid} | Your PUT endpoint
[**putUsersUserid**](DefaultApi.md#putUsersUserid) | **PUT** /users/{userid} | Your PUT endpoint

<a name="getBlobs"></a>
# **getBlobs**
> Object getBlobs(blobid)

Your GET endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let blobid = "blobid_example"; // String | 

apiInstance.getBlobs(blobid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blobid** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json

<a name="getEvenetsEventidTopicsTopicid"></a>
# **getEvenetsEventidTopicsTopicid**
> InlineResponse2002 getEvenetsEventidTopicsTopicid(eventid, topicid)

Your GET endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let eventid = "eventid_example"; // String | 
let topicid = "topicid_example"; // String | 

apiInstance.getEvenetsEventidTopicsTopicid(eventid, topicid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventid** | **String**|  | 
 **topicid** | **String**|  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEvents"></a>
# **getEvents**
> [Event] getEvents(opts)

Your GET endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let opts = { 
  'startDate': "startDate_example", // String | 
  'endDate': "endDate_example", // String | 
  'orgId': "orgId_example" // String | 
};
apiInstance.getEvents(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**|  | [optional] 
 **endDate** | **String**|  | [optional] 
 **orgId** | **String**|  | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventsEventid"></a>
# **getEventsEventid**
> EventForOrg getEventsEventid(eventid)

Your GET endpoint

Only event coordinator can access.

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let eventid = "eventid_example"; // String | 

apiInstance.getEventsEventid(eventid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventid** | **String**|  | 

### Return type

[**EventForOrg**](EventForOrg.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventsEventidQuestions"></a>
# **getEventsEventidQuestions**
> [Topic] getEventsEventidQuestions(eventid)

Your GET endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let eventid = "eventid_example"; // String | 

apiInstance.getEventsEventidQuestions(eventid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventid** | **String**|  | 

### Return type

[**[Topic]**](Topic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventsEventidTasks"></a>
# **getEventsEventidTasks**
> [Task] getEventsEventidTasks(eventid)

Your GET endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let eventid = "eventid_example"; // String | 

apiInstance.getEventsEventidTasks(eventid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventid** | **String**|  | 

### Return type

[**[Task]**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventsEventidTasksTaskid"></a>
# **getEventsEventidTasksTaskid**
> InlineResponse200 getEventsEventidTasksTaskid(eventid, taskid)

Your GET endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let eventid = "eventid_example"; // String | 
let taskid = "taskid_example"; // String | 

apiInstance.getEventsEventidTasksTaskid(eventid, taskid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventid** | **String**|  | 
 **taskid** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventsEventidUsers"></a>
# **getEventsEventidUsers**
> Object getEventsEventidUsers(eventid)

Your GET endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let eventid = "eventid_example"; // String | 

apiInstance.getEventsEventidUsers(eventid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventid** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventsEventidUsersUserid"></a>
# **getEventsEventidUsersUserid**
> InlineResponse2001 getEventsEventidUsersUserid(eventid, userid)

Your GET endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let eventid = "eventid_example"; // String | 
let userid = "userid_example"; // String | 

apiInstance.getEventsEventidUsersUserid(eventid, userid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventid** | **String**|  | 
 **userid** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganisations"></a>
# **getOrganisations**
> [Organisation] getOrganisations()

Your GET endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
apiInstance.getOrganisations((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Organisation]**](Organisation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserUserid"></a>
# **getUserUserid**
> User getUserUserid(userid)

Your GET endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let userid = "userid_example"; // String | 

apiInstance.getUserUserid(userid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> [Object] getUsers()

Your GET endpoint

Only for Krakows employe

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
apiInstance.getUsers((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postBlobs"></a>
# **postBlobs**
> &#x27;String&#x27; postBlobs(opts)

Your POST endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let opts = { 
  'body': null // Object | 
};
apiInstance.postBlobs(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)|  | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="postEvents"></a>
# **postEvents**
> &#x27;String&#x27; postEvents(opts)

Your POST endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let opts = { 
  'body': new WolontariuszApi.Event() // Event | 
};
apiInstance.postEvents(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Event**](Event.md)|  | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postEventsEventidTasks"></a>
# **postEventsEventidTasks**
> &#x27;String&#x27; postEventsEventidTasks(eventid, opts)

Your POST endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let eventid = "eventid_example"; // String | 
let opts = { 
  'body': new WolontariuszApi.Task() // Task | 
};
apiInstance.postEventsEventidTasks(eventid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventid** | **String**|  | 
 **body** | [**Task**](Task.md)|  | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postEventsEventidTasksTaskidUsers"></a>
# **postEventsEventidTasksTaskidUsers**
> postEventsEventidTasksTaskidUsers(eventid, taskid, opts)

Your POST endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let eventid = "eventid_example"; // String | 
let taskid = "taskid_example"; // String | 
let opts = { 
  'body': null // Object | 
};
apiInstance.postEventsEventidTasksTaskidUsers(eventid, taskid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventid** | **String**|  | 
 **taskid** | **String**|  | 
 **body** | [**Object**](Object.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postEventsEventidTopics"></a>
# **postEventsEventidTopics**
> &#x27;String&#x27; postEventsEventidTopics(eventid, opts)

Your POST endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let eventid = "eventid_example"; // String | 
let opts = { 
  'body': new WolontariuszApi.EventidTopicsBody() // EventidTopicsBody | 
};
apiInstance.postEventsEventidTopics(eventid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventid** | **String**|  | 
 **body** | [**EventidTopicsBody**](EventidTopicsBody.md)|  | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postEventsEventidTopicsTopicidComments"></a>
# **postEventsEventidTopicsTopicidComments**
> postEventsEventidTopicsTopicidComments(eventid, topicid, opts)

Your POST endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let eventid = "eventid_example"; // String | 
let topicid = "topicid_example"; // String | 
let opts = { 
  'body': "body_example" // String | 
};
apiInstance.postEventsEventidTopicsTopicidComments(eventid, topicid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventid** | **String**|  | 
 **topicid** | **String**|  | 
 **body** | [**String**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postEventsEventidUsersUseridTasks"></a>
# **postEventsEventidUsersUseridTasks**
> postEventsEventidUsersUseridTasks(eventid, userid, opts)

Your POST endpoint

This to remove.

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let eventid = "eventid_example"; // String | 
let userid = "userid_example"; // String | 
let opts = { 
  'body': null // Object | If null then future task else finished task.
};
apiInstance.postEventsEventidUsersUseridTasks(eventid, userid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventid** | **String**|  | 
 **userid** | **String**|  | 
 **body** | [**Object**](Object.md)| If null then future task else finished task. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postOrganisations"></a>
# **postOrganisations**
> &#x27;String&#x27; postOrganisations()

Your POST endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
apiInstance.postOrganisations((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putEventsEventid"></a>
# **putEventsEventid**
> putEventsEventid(eventid, opts)

Your PUT endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let eventid = "eventid_example"; // String | 
let opts = { 
  'body': null // Object | 
};
apiInstance.putEventsEventid(eventid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventid** | **String**|  | 
 **body** | [**Object**](Object.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putEventsEventidUsers"></a>
# **putEventsEventidUsers**
> putEventsEventidUsers(eventid, opts)

Your PUT endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let eventid = "eventid_example"; // String | 
let opts = { 
  'body': new WolontariuszApi.EventidUsersBody() // EventidUsersBody | 
};
apiInstance.putEventsEventidUsers(eventid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventid** | **String**|  | 
 **body** | [**EventidUsersBody**](EventidUsersBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="putOrganisationsOrgid"></a>
# **putOrganisationsOrgid**
> putOrganisationsOrgid(orgid, opts)

Your PUT endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let orgid = "orgid_example"; // String | 
let opts = { 
  'body': null // Object | 
};
apiInstance.putOrganisationsOrgid(orgid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **String**|  | 
 **body** | [**Object**](Object.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putUsersUserid"></a>
# **putUsersUserid**
> putUsersUserid(userid, opts)

Your PUT endpoint

### Example
```javascript
import {WolontariuszApi} from 'wolontariusz_api';

let apiInstance = new WolontariuszApi.DefaultApi();
let userid = "userid_example"; // String | 
let opts = { 
  'body': null // Object | 
};
apiInstance.putUsersUserid(userid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **String**|  | 
 **body** | [**Object**](Object.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

