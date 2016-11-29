(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Coveo__temporary"] = factory();
	else
		root["Coveo__temporary"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(2));
	__export(__webpack_require__(28));
	__export(__webpack_require__(34));
	__export(__webpack_require__(37));
	__export(__webpack_require__(52));
	__export(__webpack_require__(72));
	__export(__webpack_require__(88));
	__export(__webpack_require__(92));
	__export(__webpack_require__(120));
	var Analytics_1 = __webpack_require__(112);
	exports.Analytics = Analytics_1.Analytics;
	var AnalyticsSuggestions_1 = __webpack_require__(221);
	exports.AnalyticsSuggestions = AnalyticsSuggestions_1.AnalyticsSuggestions;
	var FieldSuggestions_1 = __webpack_require__(222);
	exports.FieldSuggestions = FieldSuggestions_1.FieldSuggestions;
	var Omnibox_1 = __webpack_require__(134);
	exports.Omnibox = Omnibox_1.Omnibox;
	var Querybox_1 = __webpack_require__(130);
	exports.Querybox = Querybox_1.Querybox;
	var SearchButton_1 = __webpack_require__(132);
	exports.SearchButton = SearchButton_1.SearchButton;
	var Searchbox_1 = __webpack_require__(133);
	exports.Searchbox = Searchbox_1.Searchbox;
	var SwapVar_1 = __webpack_require__(371);
	SwapVar_1.swapVar(this);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var DefaultLanguage_1 = __webpack_require__(3);
	DefaultLanguage_1.defaultLanguage();
	var DefaultLanguage_2 = __webpack_require__(3);
	exports.setLanguageAfterPageLoaded = DefaultLanguage_2.setLanguageAfterPageLoaded;
	var PromisesShim_1 = __webpack_require__(5);
	PromisesShim_1.shim();
	var CustomEventPolyfill_1 = __webpack_require__(9);
	CustomEventPolyfill_1.customEventPolyfill();
	// MISC
	var Version_1 = __webpack_require__(10);
	exports.version = Version_1.version;
	var SearchEndpoint_1 = __webpack_require__(11);
	exports.SearchEndpoint = SearchEndpoint_1.SearchEndpoint;
	__export(__webpack_require__(24));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Globalize = __webpack_require__(4);
	var merge = function (obj1, obj2) {
	    var obj3 = {};
	    for (var attrname in obj1) {
	        obj3[attrname] = obj1[attrname];
	    }
	    for (var attrname in obj2) {
	        obj3[attrname] = obj2[attrname];
	    }
	    return obj3;
	};
	var dict = {
	    "Unknown": "Unknown",
	    "And": "AND",
	    "Authenticating": "Authenticating {0}...",
	    "Clear": "Clear {0}",
	    "CompleteQuery": "Complete Query",
	    "Exclude": "Exclude {0}",
	    "EnterTag": "Add Tag",
	    "Next": "Next",
	    "Last": "Last",
	    "Link": "Link",
	    "Or": "OR",
	    "Previous": "Previous",
	    "QueryDidntMatchAnyDocuments": "Your query did not match any documents.",
	    "QueryException": "Your query has an error: {0}.",
	    "Me": "Me",
	    "Remove": "Remove",
	    "Search": "Search",
	    "SearchFor": "Search for {0}",
	    "ShareQuery": "Share Query",
	    "Preferences": "Preferences",
	    "LinkOpeningSettings": "Link Opening Settings",
	    "Reauthenticate": "Reauthenticate {0}",
	    "ResultsFilteringExpression": "Results Filtering Expressions",
	    "FiltersInYourPreferences": "Filters in your preferences",
	    "Create": "Create",
	    "SearchIn": "Search in {0}",
	    "Seconds": "in {0} second<pl>s</pl>",
	    "ShowingResultsOf": "Result<pl>s</pl> {0}<pl>-{1}</pl> of {2}",
	    "SwitchTo": "Switch to {0}",
	    "Unexclude": "Unexclude {0}",
	    "ClearAllFilters": "Clear All Filters",
	    "SkipLogin": "Skip login",
	    "LoginInProgress": "Login in progress, please wait ...",
	    "Login": "Log In",
	    "GetStarted": "Get Started",
	    "More": "More",
	    "NMore": "{0} more...",
	    "Less": "Fewer",
	    "Settings": "Settings",
	    "Score": "Score",
	    "ScoreDescription": "The score is computed from the number of occurrences as well as from the position in the result set.",
	    "Occurrences": "Occurrences",
	    "OccurrencesDescription": "Sort by number of occurrences, with values having the highest number appearing first.",
	    "Label": "Label",
	    "Of": "of",
	    "LabelDescription": "Sort alphabetically on the field values.",
	    "Value": "Value",
	    "ValueDescription": "Sort on the values of the first computed field",
	    "AlphaAscending": "Value Ascending",
	    "AlphaDescending": "Value Descending",
	    "ChiSquare": "Chi Square",
	    "Nosort": "No Sort",
	    "RelativeFrequency": "Relative Frequency",
	    "RelativeFrequencyDescription": "Sort based on the relative frequency of values. Less common values will appear higher.",
	    "DateDistribution": "Date distribution",
	    "Custom": "Custom",
	    "CustomDescription": "Sort based on a custom order",
	    "ComputedField": "Computed Field",
	    "Ascending": "Ascending",
	    "Descending": "Descending",
	    "noResultFor": "No results for {0}",
	    "autoCorrectedQueryTo": "Query was automatically corrected to {0}",
	    "didYouMean": "Did you mean: {0}",
	    "SuggestedResults": "Suggested Results",
	    "SuggestedQueries": "Suggested Queries",
	    "MostRelevantItems": "Most relevant items:",
	    "AllItems": "All items:",
	    "ShowLess": "Show less",
	    "ShowMore": "Show more",
	    "HideFacet": "Hide Facet",
	    "ShowFacet": "Show Facet",
	    "AndOthers": "and {0} other<pl>s</pl>",
	    "Others": "{0} other<pl>s</pl>",
	    "MostRelevantPosts": "Most Relevant Posts:",
	    "CompleteThread": "Complete Thread:",
	    "ShowCompleteThread": "Show Complete Thread",
	    "ShowOnlyTopMatchingPosts": "Show Only Top Matching Posts",
	    "MostRelevantReplies": "Most Relevant Replies:",
	    "AllConversation": "All Conversation:",
	    "ShowAllConversation": "Show All Conversation",
	    "ShowAllReplies": "Show All Replies",
	    "ShowOnlyMostRelevantReplies": "Show Only Most Relevant Replies",
	    "Close": "Close",
	    "Open": "Open",
	    "OpenInOutlookWhenPossible": "Open in Outlook (when possible)",
	    "AlwaysOpenInNewWindow": "Always open results in new window",
	    "Quickview": "Quick View",
	    "NoQuickview": "The Quick View for this document is unavailable",
	    "ErrorReport": "Error Report",
	    "OopsError": "Something went wrong.",
	    "ProblemPersists": "If the problem persists contact the administrator.",
	    "GoBack": "Go Back",
	    "Reset": "Reset",
	    "Retry": "Retry",
	    "MoreInfo": "More Information",
	    "Username": "Username",
	    "Password": "Password",
	    "PostedBy": "Posted by",
	    "CannotConnect": "Cannot connect to the server address.",
	    "BadUserPass": "Password does not match with username.",
	    "PleaseEnterYourCredentials": "Please enter your credentials for {0}.",
	    "PleaseEnterYourSearchPage": "Please enter your search page URL",
	    "Collapse": "Collapse",
	    "Collapsable": "Collapsible",
	    "Expand": "Expand",
	    "Today": "Today",
	    "Yesterday": "Yesterday",
	    "Tomorrow": "Tomorrow",
	    "Duration": "Duration: {0}",
	    "IndexDuration": "Index Duration: {0}",
	    "ProxyDuration": "Proxy Duration: {0}",
	    "ClientDuration": "Client Duration: {0}",
	    "Unavailable": "Unavailable",
	    "Reply": "Reply",
	    "ReplyAll": "Reply All",
	    "Forward": "Forward",
	    "From": "From",
	    "Caption": "Caption",
	    "Expression": "Expression",
	    "Tab": "Tab",
	    "Tabs": "Tabs",
	    "EnterExpressionName": "Enter expression name",
	    "EnterExpressionToFilterWith": "Enter expression to filter results with",
	    "SelectTab": "Select Tab",
	    "SelectAll": "Select All",
	    "PageUrl": "Search page URL",
	    "ErrorSavingToDevice": "Error while saving the information to your device",
	    "ErrorReadingFromDevice": "Error while reading the information from your device",
	    "AppIntro": "Speak with a product specialist who can answer your questions about Coveo and help you decide which Coveo solution is right for you. Or, try a live demo !",
	    "TryDemo": "Try the demo",
	    "ContactUs": "Contact us",
	    "NewToCoveo": "New to Coveo?",
	    "LetUsHelpGetStarted": "Let us help you get started",
	    "LikesThis": "{0} like<sn>s</sn> this.",
	    "CannotConnectSearchPage": "Cannot connect to your search page",
	    "AreYouSureDeleteFilter": "Are you sure you want to delete the filter {0} with the expression {1}",
	    "OnlineHelp": "Online Help",
	    "Done": "Done",
	    "SaveFacetState": "Save this facet state",
	    "ClearFacetState": "Clear facet state",
	    "DisplayingTheOnlyMessage": "Displaying the only message in this conversation",
	    "NoNetworkConnection": "No network connection",
	    "UnknownConnection": "Unknown connection",
	    "EthernetConnection": "Ethernet connection",
	    "WiFi": "WiFi connection",
	    "CELL": "Cellular connection",
	    "CELL_2G": "Cellular 2G connection",
	    "CELL_3G": "Cellular 3G connection",
	    "CELL_4G": "Cellular 4G connection",
	    "Relevance": "Relevance",
	    "Date": "Date",
	    "Amount": "Amount",
	    "QueryExceptionNoException": "No exception",
	    "QueryExceptionInvalidSyntax": "Invalid syntax",
	    "QueryExceptionInvalidCustomField": "Invalid custom field",
	    "QueryExceptionInvalidDate": "Invalid date",
	    "QueryExceptionInvalidExactPhrase": "Invalid exact phrase",
	    "QueryExceptionInvalidDateOp": "Invalid date operator",
	    "QueryExceptionInvalidNear": "Invalid NEAR operator",
	    "QueryExceptionInvalidWeightedNear": "Invalid weighted NEAR",
	    "QueryExceptionInvalidTerm": "Invalid term",
	    "QueryExceptionTooManyTerms": "Too many terms",
	    "QueryExceptionWildcardTooGeneral": "Wildcard too general",
	    "QueryExceptionInvalidSortField": "Invalid sort field",
	    "QueryExceptionInvalidSmallStringOp": "Invalid small string operator",
	    "QueryExceptionRequestedResultsMax": "Requested results maximum",
	    "QueryExceptionAggregatedMirrorDead": "Aggregated mirror is offline",
	    "QueryExceptionAggregatedMirrorQueryTimeOut": "Aggregated mirror query timeout",
	    "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Aggregated mirror invalid build number",
	    "QueryExceptionAggregatedMirrorCannotConnect": "Aggregated mirror cannot connect",
	    "QueryExceptionNotEnoughLeadingCharsWildcard": "Not enough leading character wildcard",
	    "QueryExceptionSecurityInverterNotFound": "Security inverter not found",
	    "QueryExceptionSecurityInverterAccessDenied": "Security inverter access denied",
	    "QueryExceptionAggregatedMirrorCannotImpersonate": "Aggregated mirror cannot impersonate",
	    "QueryExceptionUnexpected": "Unexpected",
	    "QueryExceptionAccessDenied": "Access denied",
	    "QueryExceptionSuperUserTokenInvalid": "Super user token invalid",
	    "QueryExceptionSuperUserTokenExpired": "Super user token is expired",
	    "QueryExceptionLicenseQueriesExpired": "Queries license expired",
	    "QueryExceptionLicenseSuperUserTokenNotSupported": "License super user token not supported",
	    "QueryExceptionInvalidSession": "Invalid session",
	    "QueryExceptionInvalidDocument": "Invalid document",
	    "QueryExceptionSearchDisabled": "Search disabled",
	    "FileType": "File type",
	    "ShowAttachment": "Show attachment",
	    "OnFeed": "on {0}'s feed.",
	    "Author": "Author",
	    "NoTitle": "No title",
	    "CurrentSelections": "Current selections",
	    "AllContent": "All content",
	    "CancelLastAction": "Cancel last action",
	    "SearchTips": "Search tips",
	    "CheckSpelling": "Check the spelling of your keywords.",
	    "TryUsingFewerKeywords": "Try using fewer, different or more general keywords.",
	    "SelectFewerFilters": "Select fewer filters to broaden your search.",
	    "Document": "Document",
	    "Time": "Time",
	    "StartDate": "Start Date",
	    "StartTime": "Start Time",
	    "DurationTitle": "Duration",
	    "UserQuery": "User query",
	    "ShowUserActions": "Show User Actions",
	    "NoData": "No data available",
	    "EventType": "Event type",
	    "GoToFullSearch": "Full search",
	    "GoToEdition": "Customize Panel",
	    "RemoveContext": "Remove context",
	    "BoxAttachToCase": "Attach to case",
	    "AttachToCase": "Attach to case",
	    "Attach": "Attach",
	    "Attached": "Attached",
	    "Detach": "Detach",
	    "Details": "Details",
	    "AdditionalFilters": "Additional filters",
	    "SelectNonContextualSearch": "Remove the context from the current record to broaden your search",
	    "CopyPasteToSupport": "Copy paste this message to Coveo Support team for more information.",
	    "FollowQueryDescription": "Alert me for changes to the search results of this query.",
	    "SearchAlerts_Panel": "Manage Alerts",
	    "SearchAlerts_PanelDescription": "View and manage your search alerts.",
	    "SearchAlerts_PanelNoSearchAlerts": "You have no subscriptions.",
	    "SearchAlerts_Fail": "The Search Alerts service is currently unavailable.",
	    "SearchAlerts_Type": "Type",
	    "SearchAlerts_Content": "Content",
	    "SearchAlerts_Actions": "Action",
	    "EmptyQuery": "&lt;empty&gt;",
	    "SearchAlerts_Type_followQuery": "Query",
	    "SearchAlerts_Type_followDocument": "Item",
	    "SearchAlerts_unFollowing": "Stop Following",
	    "SearchAlerts_follow": "Follow",
	    "SearchAlerts_followed": "Followed",
	    "SearchAlerts_followQuery": "Follow Query",
	    "Subscription_StopFollowingQuery": "Stop Following Query",
	    "SearchAlerts_Frequency": "When",
	    "SubscriptionsManageSubscriptions": "Manage Alerts",
	    "SubscriptionsMessageFollowQuery": "You will receive alerts when the query <b>{0}</b> returns new or updated items.",
	    "SubscriptionsMessageFollow": "You will receive alerts for changes to the item <b>{0}</b>.",
	    "Expiration": "Expiration",
	    "Monthly": "Monthly",
	    "Daily": "Daily",
	    "Monday": "Monday",
	    "Tuesday": "Tuesday",
	    "Wednesday": "Wednesday",
	    "Thursday": "Thursday",
	    "Friday": "Friday",
	    "Saturday": "Saturday",
	    "Sunday": "Sunday",
	    "StartTypingCaseForSuggestions": "Describe your problem to see possible solutions",
	    "ExportToExcel": "Export to Excel",
	    "ExportToExcelDescription": "Export search results to Excel",
	    "CaseCreationNoResults": "No recommended solutions were found",
	    "SortBy": "Sort by",
	    "BoxCreateArticle": "Create Article",
	    "Facets": "Facets",
	    "AdvancedSearch": "Advanced Search",
	    "Keywords": "Keywords",
	    "AllTheseWords": "All these words",
	    "ExactPhrase": "This exact phrase",
	    "AnyOfTheseWords": "Any of these words",
	    "NoneOfTheseWords": "None of these words",
	    "Anytime": "Anytime",
	    "InTheLast": "In the last",
	    "Days": "days",
	    "Months": "months",
	    "Between": "Between",
	    "Language": "Language",
	    "Size": "Size",
	    "AtLeast": "at least",
	    "AtMost": "at most",
	    "Contains": "contains",
	    "DoesNotContain": "does not contain",
	    "Matches": "matches",
	    "Bytes": "bytes",
	    "objecttype_people": "People",
	    "objecttype_message": "Message",
	    "objecttype_feed": "RSS Feed",
	    "objecttype_thread": "Thread",
	    "objecttype_file": "File",
	    "objecttype_board": "",
	    "objecttype_category": "",
	    "objecttype_account": "Account",
	    "objecttype_campaign": "Campaign",
	    "objecttype_case": "Case",
	    "objecttype_contact": "Contact",
	    "objecttype_contract": "Contract",
	    "objecttype_event": "Event",
	    "objecttype_lead": "Lead",
	    "objecttype_solution": "Solution",
	    "objecttype_task": "Task",
	    "objecttype_user": "User",
	    "objecttype_attachment": "Attachment",
	    "objecttype_casecomment": "Case Comment",
	    "objecttype_opportunity": "Opportunity",
	    "objecttype_feeditem": "Chatter",
	    "objecttype_feedcomment": "Chatter",
	    "objecttype_note": "Note",
	    "objecttype_product": "Product",
	    "objecttype_partner": "Partner",
	    "objecttype_kbdocumentation": "Documentation",
	    "objecttype_kbtechnicalarticle": "Documentation",
	    "objecttype_kbsolution": "Solution",
	    "objecttype_kbknowledgearticle": "Knowledge Article",
	    "objecttype_kbattachment": "Attachment",
	    "filetype_html": "HTML File",
	    "filetype_wiki": "Wiki",
	    "filetype_webscraperwebpage": "Web page",
	    "filetype_image": "Image",
	    "filetype_folder": "Folder",
	    "filetype_txt": "Text",
	    "filetype_zip": "Zip File",
	    "filetype_pdf": "PDF File",
	    "filetype_xml": "XML File",
	    "filetype_doc": "Document",
	    "filetype_xls": "Spreadsheet Document",
	    "filetype_ppt": "Presentation Document",
	    "filetype_video": "Video",
	    "filetype_youtube": "YouTube video",
	    "filetype_saleforceitem": "Salesforce",
	    "filetype_exchangemessage": "Message",
	    "filetype_exchangeappointment": "Appointment",
	    "filetype_exchangenote": "Note",
	    "filetype_exchangetask": "Task",
	    "filetype_exchangeperson": "Exchange user",
	    "filetype_activedirperson": "Active Directory user",
	    "filetype_exchangeactivity": "Activity",
	    "filetype_exchangecalendarmessage": "Calendar message",
	    "filetype_exchangedocument": "Exchange document",
	    "filetype_exchangerssfeed": "RSS Feed",
	    "filetype_exchangejunkmessage": "Junk email",
	    "filetype_exchangeofficecom": "Communications",
	    "filetype_lithiummessage": "Message",
	    "filetype_lithiumthread": "Thread",
	    "filetype_lithiumboard": "Board",
	    "filetype_lithiumcategory": "Category",
	    "filetype_lithiumcommunity": "Community",
	    "filetype_spportal": "Portal",
	    "filetype_spsite": "Site",
	    "filetype_spuserprofile": "SharePoint User",
	    "filetype_sparea": "Area",
	    "filetype_spannouncement": "Announcement",
	    "filetype_spannouncementlist": "Announcements",
	    "filetype_spcontact": "Contact",
	    "filetype_spcontactlist": "Contacts",
	    "filetype_spcustomlist": "Custom Lists",
	    "filetype_spdiscussionboard": "Discussion Board",
	    "filetype_spdiscussionboardlist": "Discussion Boards",
	    "filetype_spdocumentlibrarylist": "Document Library",
	    "filetype_spevent": "Event",
	    "filetype_speventlist": "Events",
	    "filetype_spformlibrarylist": "Form Library",
	    "filetype_spissue": "Issue",
	    "filetype_spissuelist": "Issues",
	    "filetype_splink": "Link",
	    "filetype_splinklist": "Links",
	    "filetype_sppicturelibrarylist": "Picture Library",
	    "filetype_spsurvey": "Survey",
	    "filetype_spsurveylist": "Surveys",
	    "filetype_sptask": "Task",
	    "filetype_sptasklist": "Tasks",
	    "filetype_spagenda": "Agenda",
	    "filetype_spagendalist": "Agendas",
	    "filetype_spattendee": "Attendee",
	    "filetype_spattendeelist": "Attendees",
	    "filetype_spcustomgridlist": "Custom Grids",
	    "filetype_spdecision": "Decision",
	    "filetype_spdecisionlist": "Decisions",
	    "filetype_spobjective": "Objective",
	    "filetype_spobjectivelist": "Objectives",
	    "filetype_sptextbox": "Textbox",
	    "filetype_sptextboxlist": "Textbox list",
	    "filetype_spthingstobring": "Thing To Bring",
	    "filetype_spthingstobringlist": "Things To Bring",
	    "filetype_sparealisting": "Area Listing",
	    "filetype_spmeetingserie": "Meeting series",
	    "filetype_spmeetingserielist": "Meeting Series List",
	    "filetype_spsitedirectory": "Site Directory Item",
	    "filetype_spsitedirectorylist": "Site Directory",
	    "filetype_spdatasource": "Data Source",
	    "filetype_spdatasourcelist": "Data Source List",
	    "filetype_splisttemplatecataloglist": "List Template Catalog List",
	    "filetype_spwebpartcataloglist": "WebPart catalog list",
	    "filetype_spwebtemplatecataloglist": "Web Template Catalog List",
	    "filetype_spworkspacepagelist": "Workspace Page List",
	    "filetype_spunknownlist": "Custom List",
	    "filetype_spadministratortask": "Administrator Task",
	    "filetype_spadministratortasklist": "Administrator Tasks",
	    "filetype_spareadocumentlibrarylist": "Area Document Library",
	    "filetype_spblogcategory": "Blog Category",
	    "filetype_spblogcategorylist": "Blog Category",
	    "filetype_spblogcomment": "Blog Comment",
	    "filetype_spblogcommentlist": "Blog Comments",
	    "filetype_spblogpost": "Blog Post",
	    "filetype_spblogpostlist": "Blog Posts",
	    "filetype_spdataconnectionlibrarylist": "Data Connection Library",
	    "filetype_spdistributiongroup": "Distribution Group",
	    "filetype_spdistributiongrouplist": "Distribution Groups",
	    "filetype_spipfslist": "InfoPath Form Servers",
	    "filetype_spkeyperformanceindicator": "Key Performance Indicator",
	    "filetype_spkeyperformanceindicatorlist": "Key Performance Indicators",
	    "filetype_splanguagesandtranslator": "Languages and Translator",
	    "filetype_splanguagesandtranslatorlist": "Languages and Translators",
	    "filetype_spmasterpagescataloglist": "Master Pages Library",
	    "filetype_spnocodeworkflowlibrarylist": "No Code Workflow Library",
	    "filetype_spprojecttask": "Project Task",
	    "filetype_spprojecttasklist": "Project Tasks",
	    "filetype_sppublishingpageslibrarylist": "Page Library",
	    "filetype_spreportdocumentlibrarylist": "Report Document Library",
	    "filetype_spreportlibrarylist": "Report Library",
	    "filetype_spslidelibrarylist": "Slide Library",
	    "filetype_sptab": "Tabs",
	    "filetype_sptablist": "Tabs List",
	    "filetype_sptranslationmanagementlibrarylist": "Translation Management Library",
	    "filetype_spuserinformation": "User Information",
	    "filetype_spuserinformationlist": "User Information List",
	    "filetype_spwikipagelibrarylist": "Wiki Page Library",
	    "filetype_spworkflowhistory": "Workflow History",
	    "filetype_spworkflowhistorylist": "Workflow Histories",
	    "filetype_spworkflowprocess": "Custom Workflow Process",
	    "filetype_spworkflowprocesslist": "Custom Workflow Processes",
	    "filetype_sppublishingimageslibrarylist": "Publishing Image Library",
	    "filetype_spcirculation": "Circulation",
	    "filetype_spcirculationlist": "Circulations",
	    "filetype_spdashboardslibrarylist": "Dashboard Library",
	    "filetype_spdataconnectionforperformancepointlibrarylist": "Data Connection for Performance Point Library",
	    "filetype_sphealthreport": "Health Report",
	    "filetype_sphealthreportlist": "Health Reports",
	    "filetype_sphealthrule": "Health Rule",
	    "filetype_sphealthrulelist": "Health Rules",
	    "filetype_spimedictionary": "IME Dictionary",
	    "filetype_spimedictionarylist": "IME Dictionaries",
	    "filetype_spperformancepointcontent": "Performance Point Content",
	    "filetype_spperformancepointcontentlist": "Performance Point Contents",
	    "filetype_spphonecallmemo": "Phone Call Memo",
	    "filetype_spphonecallmemolist": "Phone Call Memos",
	    "filetype_sprecordlibrarylist": "Record Library",
	    "filetype_spresource": "Resource",
	    "filetype_spresourcelist": "Resources",
	    "filetype_spprocessdiagramslibrarylist": "Process Diagram Library",
	    "filetype_spsitethemeslibrarylist": "Site Theme Library",
	    "filetype_spsolutionslibrarylist": "Solution Library",
	    "filetype_spwfpublibrarylist": "WFPUB Library",
	    "filetype_spwhereabout": "Whereabout",
	    "filetype_spwhereaboutlist": "Whereabouts",
	    "filetype_spdocumentlink": "Link to a Document",
	    "filetype_spdocumentset": "Document Set",
	    "filetype_spmicrofeedpost": "Microfeed Post",
	    "filetype_spmicrofeedlist": "Microfeed",
	    "filetype_splistfolder": "List Folder",
	    "filetype_youtubevideo": "YouTube video",
	    "filetype_youtubeplaylistitem": "YouTube playlist item",
	};
	function defaultLanguage() {
	    if (window['$'] != undefined && window['$'].fn != undefined && window['$'].fn.jquery != undefined) {
	        $(function () {
	            var locales = String["locales"] || (String["locales"] = {});
	            locales["en"] = merge(locales["en"], dict);
	            String["toLocaleString"].call(this, { "en": dict });
	            String["locale"] = "en";
	            String["defaultLocale"] = "en";
	            Globalize.culture("en");
	        });
	    }
	    else {
	        document.addEventListener('DOMContentLoaded', function (event) {
	            var locales = String["locales"] || (String["locales"] = {});
	            locales["en"] = merge(locales["en"], dict);
	            String["toLocaleString"].call(this, { "en": dict });
	            String["locale"] = "en";
	            String["defaultLocale"] = "en";
	            Globalize.culture("en");
	        });
	    }
	}
	exports.defaultLanguage = defaultLanguage;
	function setLanguageAfterPageLoaded() {
	    var locales = String["locales"] || (String["locales"] = {});
	    locales["en"] = merge(locales["en"], dict);
	    String["toLocaleString"].call(this, { "en": dict });
	    String["locale"] = "en";
	    String["defaultLocale"] = "en";
	    Globalize.culture("en");
	}
	exports.setLanguageAfterPageLoaded = setLanguageAfterPageLoaded;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*! globalize - v0.1.1 - 2013-04-30
	* https://github.com/jquery/globalize
	* Copyright 2013 ; Licensed MIT */
	var Globalize = (function(e,r){var t,n,a,s,u,l,i,c,o,f,d,p,h,g,b,m,y,M,v,k,z,F,A,x;t=function(e){return new t.prototype.init(e)}, true?module.exports=t:e.Globalize=t,t.cultures={},t.prototype={constructor:t,init:function(e){return this.cultures=t.cultures,this.cultureSelector=e,this}},t.prototype.init.prototype=t.prototype,t.cultures["default"]={name:"en",englishName:"English",nativeName:"English",isRTL:!1,language:"en",numberFormat:{pattern:["-n"],decimals:2,",":",",".":".",groupSizes:[3],"+":"+","-":"-",NaN:"NaN",negativeInfinity:"-Infinity",positiveInfinity:"Infinity",percent:{pattern:["-n %","n %"],decimals:2,groupSizes:[3],",":",",".":".",symbol:"%"},currency:{pattern:["($n)","$n"],decimals:2,groupSizes:[3],",":",",".":".",symbol:"$"}},calendars:{standard:{name:"Gregorian_USEnglish","/":"/",":":":",firstDay:0,days:{names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],namesAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],namesShort:["Su","Mo","Tu","We","Th","Fr","Sa"]},months:{names:["January","February","March","April","May","June","July","August","September","October","November","December",""],namesAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},AM:["AM","am","AM"],PM:["PM","pm","PM"],eras:[{name:"A.D.",start:null,offset:0}],twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}}},messages:{}},t.cultures["default"].calendar=t.cultures["default"].calendars.standard,t.cultures.en=t.cultures["default"],t.cultureSelector="en",n=/^0x[a-f0-9]+$/i,a=/^[+\-]?infinity$/i,s=/^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/,u=/^\s+|\s+$/g,l=function(e,r){if(e.indexOf)return e.indexOf(r);for(var t=0,n=e.length;n>t;t++)if(e[t]===r)return t;return-1},i=function(e,r){return e.substr(e.length-r.length)===r},c=function(){var e,t,n,a,s,u,l=arguments[0]||{},i=1,p=arguments.length,h=!1;for("boolean"==typeof l&&(h=l,l=arguments[1]||{},i=2),"object"==typeof l||f(l)||(l={});p>i;i++)if(null!=(e=arguments[i]))for(t in e)n=l[t],a=e[t],l!==a&&(h&&a&&(d(a)||(s=o(a)))?(s?(s=!1,u=n&&o(n)?n:[]):u=n&&d(n)?n:{},l[t]=c(h,u,a)):a!==r&&(l[t]=a));return l},o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},f=function(e){return"[object Function]"===Object.prototype.toString.call(e)},d=function(e){return"[object Object]"===Object.prototype.toString.call(e)},p=function(e,r){return 0===e.indexOf(r)},h=function(e){return(e+"").replace(u,"")},g=function(e){return isNaN(e)?0/0:Math[0>e?"ceil":"floor"](e)},b=function(e,r,t){var n;for(n=e.length;r>n;n+=1)e=t?"0"+e:e+"0";return e},m=function(e,r){for(var t=0,n=!1,a=0,s=e.length;s>a;a++){var u=e.charAt(a);switch(u){case"'":n?r.push("'"):t++,n=!1;break;case"\\":n&&r.push("\\"),n=!n;break;default:r.push(u),n=!1}}return t},y=function(e,r){r=r||"F";var t,n=e.patterns,a=r.length;if(1===a){if(t=n[r],!t)throw"Invalid date format string '"+r+"'.";r=t}else 2===a&&"%"===r.charAt(0)&&(r=r.charAt(1));return r},M=function(e,r,t){function n(e,r){var t,n=e+"";return r>1&&r>n.length?(t=v[r-2]+n,t.substr(t.length-r,r)):t=n}function a(){return h||g?h:(h=A.test(r),g=!0,h)}function s(e,r){if(b)return b[r];switch(r){case 0:return e.getFullYear();case 1:return e.getMonth();case 2:return e.getDate();default:throw"Invalid part value "+r}}var u,l=t.calendar,i=l.convert;if(!r||!r.length||"i"===r){if(t&&t.name.length)if(i)u=M(e,l.patterns.F,t);else{var c=new Date(e.getTime()),o=z(e,l.eras);c.setFullYear(F(e,l,o)),u=c.toLocaleString()}else u=""+e;return u}var f=l.eras,d="s"===r;r=y(l,r),u=[];var p,h,g,b,v=["0","00","000"],A=/([^d]|^)(d|dd)([^d]|$)/g,x=0,I=k();for(!d&&i&&(b=i.fromGregorian(e));;){var S=I.lastIndex,w=I.exec(r),C=r.slice(S,w?w.index:r.length);if(x+=m(C,u),!w)break;if(x%2)u.push(w[0]);else{var D=w[0],H=D.length;switch(D){case"ddd":case"dddd":var O=3===H?l.days.namesAbbr:l.days.names;u.push(O[e.getDay()]);break;case"d":case"dd":h=!0,u.push(n(s(e,2),H));break;case"MMM":case"MMMM":var N=s(e,1);u.push(l.monthsGenitive&&a()?l.monthsGenitive[3===H?"namesAbbr":"names"][N]:l.months[3===H?"namesAbbr":"names"][N]);break;case"M":case"MM":u.push(n(s(e,1)+1,H));break;case"y":case"yy":case"yyyy":N=b?b[0]:F(e,l,z(e,f),d),4>H&&(N%=100),u.push(n(N,H));break;case"h":case"hh":p=e.getHours()%12,0===p&&(p=12),u.push(n(p,H));break;case"H":case"HH":u.push(n(e.getHours(),H));break;case"m":case"mm":u.push(n(e.getMinutes(),H));break;case"s":case"ss":u.push(n(e.getSeconds(),H));break;case"t":case"tt":N=12>e.getHours()?l.AM?l.AM[0]:" ":l.PM?l.PM[0]:" ",u.push(1===H?N.charAt(0):N);break;case"f":case"ff":case"fff":u.push(n(e.getMilliseconds(),3).substr(0,H));break;case"z":case"zz":p=e.getTimezoneOffset()/60,u.push((0>=p?"+":"-")+n(Math.floor(Math.abs(p)),H));break;case"zzz":p=e.getTimezoneOffset()/60,u.push((0>=p?"+":"-")+n(Math.floor(Math.abs(p)),2)+":"+n(Math.abs(e.getTimezoneOffset()%60),2));break;case"g":case"gg":l.eras&&u.push(l.eras[z(e,f)].name);break;case"/":u.push(l["/"]);break;default:throw"Invalid date format pattern '"+D+"'."}}}return u.join("")},function(){var e;e=function(e,r,t){var n=t.groupSizes,a=n[0],s=1,u=Math.pow(10,r),l=Math.round(e*u)/u;isFinite(l)||(l=e),e=l;var i=e+"",c="",o=i.split(/e/i),f=o.length>1?parseInt(o[1],10):0;i=o[0],o=i.split("."),i=o[0],c=o.length>1?o[1]:"",f>0?(c=b(c,f,!1),i+=c.slice(0,f),c=c.substr(f)):0>f&&(f=-f,i=b(i,f+1,!0),c=i.slice(-f,i.length)+c,i=i.slice(0,-f)),c=r>0?t["."]+(c.length>r?c.slice(0,r):b(c,r)):"";for(var d=i.length-1,p=t[","],h="";d>=0;){if(0===a||a>d)return i.slice(0,d+1)+(h.length?p+h+c:c);h=i.slice(d-a+1,d+1)+(h.length?p+h:""),d-=a,n.length>s&&(a=n[s],s++)}return i.slice(0,d+1)+p+h+c},v=function(r,t,n){if(!isFinite(r))return 1/0===r?n.numberFormat.positiveInfinity:r===-1/0?n.numberFormat.negativeInfinity:n.numberFormat.NaN;if(!t||"i"===t)return n.name.length?r.toLocaleString():""+r;t=t||"D";var a,s=n.numberFormat,u=Math.abs(r),l=-1;t.length>1&&(l=parseInt(t.slice(1),10));var i,c=t.charAt(0).toUpperCase();switch(c){case"D":a="n",u=g(u),-1!==l&&(u=b(""+u,l,!0)),0>r&&(u="-"+u);break;case"N":i=s;case"C":i=i||s.currency;case"P":i=i||s.percent,a=0>r?i.pattern[0]:i.pattern[1]||"n",-1===l&&(l=i.decimals),u=e(u*("P"===c?100:1),l,i);break;default:throw"Bad number format specifier: "+c}for(var o=/n|\$|-|%/g,f="";;){var d=o.lastIndex,p=o.exec(a);if(f+=a.slice(d,p?p.index:a.length),!p)break;switch(p[0]){case"n":f+=u;break;case"$":f+=s.currency.symbol;break;case"-":/[1-9]/.test(u)&&(f+=s["-"]);break;case"%":f+=s.percent.symbol}}return f}}(),k=function(){return/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g},z=function(e,r){if(!r)return 0;for(var t,n=e.getTime(),a=0,s=r.length;s>a;a++)if(t=r[a].start,null===t||n>=t)return a;return 0},F=function(e,r,t,n){var a=e.getFullYear();return!n&&r.eras&&(a-=r.eras[t].offset),a},function(){var e,r,t,n,a,s,u;e=function(e,r){if(100>r){var t=new Date,n=z(t),a=F(t,e,n),s=e.twoDigitYearMax;s="string"==typeof s?(new Date).getFullYear()%100+parseInt(s,10):s,r+=a-a%100,r>s&&(r-=100)}return r},r=function(e,r,t){var n,a=e.days,i=e._upperDays;return i||(e._upperDays=i=[u(a.names),u(a.namesAbbr),u(a.namesShort)]),r=s(r),t?(n=l(i[1],r),-1===n&&(n=l(i[2],r))):n=l(i[0],r),n},t=function(e,r,t){var n=e.months,a=e.monthsGenitive||e.months,i=e._upperMonths,c=e._upperMonthsGen;i||(e._upperMonths=i=[u(n.names),u(n.namesAbbr)],e._upperMonthsGen=c=[u(a.names),u(a.namesAbbr)]),r=s(r);var o=l(t?i[1]:i[0],r);return 0>o&&(o=l(t?c[1]:c[0],r)),o},n=function(e,r){var t=e._parseRegExp;if(t){var n=t[r];if(n)return n}else e._parseRegExp=t={};for(var a,s=y(e,r).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1"),u=["^"],l=[],i=0,c=0,o=k();null!==(a=o.exec(s));){var f=s.slice(i,a.index);if(i=o.lastIndex,c+=m(f,u),c%2)u.push(a[0]);else{var d,p=a[0],h=p.length;switch(p){case"dddd":case"ddd":case"MMMM":case"MMM":case"gg":case"g":d="(\\D+)";break;case"tt":case"t":d="(\\D*)";break;case"yyyy":case"fff":case"ff":case"f":d="(\\d{"+h+"})";break;case"dd":case"d":case"MM":case"M":case"yy":case"y":case"HH":case"H":case"hh":case"h":case"mm":case"m":case"ss":case"s":d="(\\d\\d?)";break;case"zzz":d="([+-]?\\d\\d?:\\d{2})";break;case"zz":case"z":d="([+-]?\\d\\d?)";break;case"/":d="(\\/)";break;default:throw"Invalid date format pattern '"+p+"'."}d&&u.push(d),l.push(a[0])}}m(s.slice(i),u),u.push("$");var g=u.join("").replace(/\s+/g,"\\s+"),b={regExp:g,groups:l};return t[r]=b},a=function(e,r,t){return r>e||e>t},s=function(e){return e.split("\u00a0").join(" ").toUpperCase()},u=function(e){for(var r=[],t=0,n=e.length;n>t;t++)r[t]=s(e[t]);return r},A=function(s,u,l){s=h(s);var i=l.calendar,c=n(i,u),o=RegExp(c.regExp).exec(s);if(null===o)return null;for(var f,d=c.groups,g=null,b=null,m=null,y=null,M=null,v=0,k=0,z=0,F=0,A=null,x=!1,I=0,S=d.length;S>I;I++){var w=o[I+1];if(w){var C=d[I],D=C.length,H=parseInt(w,10);switch(C){case"dd":case"d":if(y=H,a(y,1,31))return null;break;case"MMM":case"MMMM":if(m=t(i,w,3===D),a(m,0,11))return null;break;case"M":case"MM":if(m=H-1,a(m,0,11))return null;break;case"y":case"yy":case"yyyy":if(b=4>D?e(i,H):H,a(b,0,9999))return null;break;case"h":case"hh":if(v=H,12===v&&(v=0),a(v,0,11))return null;break;case"H":case"HH":if(v=H,a(v,0,23))return null;break;case"m":case"mm":if(k=H,a(k,0,59))return null;break;case"s":case"ss":if(z=H,a(z,0,59))return null;break;case"tt":case"t":if(x=i.PM&&(w===i.PM[0]||w===i.PM[1]||w===i.PM[2]),!x&&(!i.AM||w!==i.AM[0]&&w!==i.AM[1]&&w!==i.AM[2]))return null;break;case"f":case"ff":case"fff":if(F=H*Math.pow(10,3-D),a(F,0,999))return null;break;case"ddd":case"dddd":if(M=r(i,w,3===D),a(M,0,6))return null;break;case"zzz":var O=w.split(/:/);if(2!==O.length)return null;if(f=parseInt(O[0],10),a(f,-12,13))return null;var N=parseInt(O[1],10);if(a(N,0,59))return null;A=60*f+(p(w,"-")?-N:N);break;case"z":case"zz":if(f=H,a(f,-12,13))return null;A=60*f;break;case"g":case"gg":var T=w;if(!T||!i.eras)return null;T=h(T.toLowerCase());for(var j=0,$=i.eras.length;$>j;j++)if(T===i.eras[j].name.toLowerCase()){g=j;break}if(null===g)return null}}}var P,G=new Date,E=i.convert;if(P=E?E.fromGregorian(G)[0]:G.getFullYear(),null===b?b=P:i.eras&&(b+=i.eras[g||0].offset),null===m&&(m=0),null===y&&(y=1),E){if(G=E.toGregorian(b,m,y),null===G)return null}else{if(G.setFullYear(b,m,y),G.getDate()!==y)return null;if(null!==M&&G.getDay()!==M)return null}if(x&&12>v&&(v+=12),G.setHours(v,k,z,F),null!==A){var Y=G.getMinutes()-(A+G.getTimezoneOffset());G.setHours(G.getHours()+parseInt(Y/60,10),Y%60)}return G}}(),x=function(e,r,t){var n,a=r["-"],s=r["+"];switch(t){case"n -":a=" "+a,s=" "+s;case"n-":i(e,a)?n=["-",e.substr(0,e.length-a.length)]:i(e,s)&&(n=["+",e.substr(0,e.length-s.length)]);break;case"- n":a+=" ",s+=" ";case"-n":p(e,a)?n=["-",e.substr(a.length)]:p(e,s)&&(n=["+",e.substr(s.length)]);break;case"(n)":p(e,"(")&&i(e,")")&&(n=["-",e.substr(1,e.length-2)])}return n||["",e]},t.prototype.findClosestCulture=function(e){return t.findClosestCulture.call(this,e)},t.prototype.format=function(e,r,n){return t.format.call(this,e,r,n)},t.prototype.localize=function(e,r){return t.localize.call(this,e,r)},t.prototype.parseInt=function(e,r,n){return t.parseInt.call(this,e,r,n)},t.prototype.parseFloat=function(e,r,n){return t.parseFloat.call(this,e,r,n)},t.prototype.culture=function(e){return t.culture.call(this,e)},t.addCultureInfo=function(e,r,t){var n={},a=!1;"string"!=typeof e?(t=e,e=this.culture().name,n=this.cultures[e]):"string"!=typeof r?(t=r,a=null==this.cultures[e],n=this.cultures[e]||this.cultures["default"]):(a=!0,n=this.cultures[r]),this.cultures[e]=c(!0,{},n,t),a&&(this.cultures[e].calendar=this.cultures[e].calendars.standard)},t.findClosestCulture=function(e){var r;if(!e)return this.findClosestCulture(this.cultureSelector)||this.cultures["default"];if("string"==typeof e&&(e=e.split(",")),o(e)){var t,n,a=this.cultures,s=e,u=s.length,l=[];for(n=0;u>n;n++){e=h(s[n]);var i,c=e.split(";");t=h(c[0]),1===c.length?i=1:(e=h(c[1]),0===e.indexOf("q=")?(e=e.substr(2),i=parseFloat(e),i=isNaN(i)?0:i):i=1),l.push({lang:t,pri:i})}for(l.sort(function(e,r){return e.pri<r.pri?1:e.pri>r.pri?-1:0}),n=0;u>n;n++)if(t=l[n].lang,r=a[t])return r;for(n=0;u>n;n++)for(t=l[n].lang;;){var f=t.lastIndexOf("-");if(-1===f)break;if(t=t.substr(0,f),r=a[t])return r}for(n=0;u>n;n++){t=l[n].lang;for(var d in a){var p=a[d];if(p.language===t)return p}}}else if("object"==typeof e)return e;return r||null},t.format=function(e,r,t){var n=this.findClosestCulture(t);return e instanceof Date?e=M(e,r,n):"number"==typeof e&&(e=v(e,r,n)),e},t.localize=function(e,r){return this.findClosestCulture(r).messages[e]||this.cultures["default"].messages[e]},t.parseDate=function(e,r,t){t=this.findClosestCulture(t);var n,a,s;if(r){if("string"==typeof r&&(r=[r]),r.length)for(var u=0,l=r.length;l>u;u++){var i=r[u];if(i&&(n=A(e,i,t)))break}}else{s=t.calendar.patterns;for(a in s)if(n=A(e,s[a],t))break}return n||null},t.parseInt=function(e,r,n){return g(t.parseFloat(e,r,n))},t.parseFloat=function(e,r,t){"number"!=typeof r&&(t=r,r=10);var u=this.findClosestCulture(t),l=0/0,i=u.numberFormat;if(e.indexOf(u.numberFormat.currency.symbol)>-1&&(e=e.replace(u.numberFormat.currency.symbol,""),e=e.replace(u.numberFormat.currency["."],u.numberFormat["."])),e.indexOf(u.numberFormat.percent.symbol)>-1&&(e=e.replace(u.numberFormat.percent.symbol,"")),e=e.replace(/ /g,""),a.test(e))l=parseFloat(e);else if(!r&&n.test(e))l=parseInt(e,16);else{var c=x(e,i,i.pattern[0]),o=c[0],f=c[1];""===o&&"(n)"!==i.pattern[0]&&(c=x(e,i,"(n)"),o=c[0],f=c[1]),""===o&&"-n"!==i.pattern[0]&&(c=x(e,i,"-n"),o=c[0],f=c[1]),o=o||"+";var d,p,h=f.indexOf("e");0>h&&(h=f.indexOf("E")),0>h?(p=f,d=null):(p=f.substr(0,h),d=f.substr(h+1));var g,b,m=i["."],y=p.indexOf(m);0>y?(g=p,b=null):(g=p.substr(0,y),b=p.substr(y+m.length));var M=i[","];g=g.split(M).join("");var v=M.replace(/\u00A0/g," ");M!==v&&(g=g.split(v).join(""));var k=o+g;if(null!==b&&(k+="."+b),null!==d){var z=x(d,i,"-n");k+="e"+(z[0]||"+")+z[1]}s.test(k)&&(l=parseFloat(k))}return l},t.culture=function(e){return e!==r&&(this.cultureSelector=e),this.findClosestCulture(e)||this.cultures["default"]}; return Globalize;}(this));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var es6_promise_1 = __webpack_require__(6);
	function shim() {
	    es6_promise_1.Promise.prototype['finally'] = function finallyPolyfill(callback) {
	        var constructor = this.constructor;
	        return this.then(function (value) {
	            return constructor.resolve(callback()).then(function () {
	                return value;
	            });
	        }, function (reason) {
	            return constructor.resolve(callback()).then(function () {
	                throw reason;
	            });
	        });
	    };
	    var rethrowError = function (self) {
	        self.then(null, function (err) {
	            setTimeout(function () {
	                throw err;
	            }, 0);
	        });
	    };
	    if (typeof es6_promise_1.Promise.prototype['done'] !== 'function') {
	        es6_promise_1.Promise.prototype['done'] = function (onFulfilled, onRejected) {
	            var self = arguments.length ? this.then.apply(this, arguments) : this;
	            rethrowError(self);
	            return this;
	        };
	    }
	    if (typeof es6_promise_1.Promise.prototype['fail'] !== 'function') {
	        es6_promise_1.Promise.prototype['fail'] = function (onFulfilled, onRejected) {
	            var self = arguments.length ? this.catch.apply(this, arguments) : this;
	            rethrowError(self);
	            return this;
	        };
	    }
	}
	exports.shim = shim;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   3.3.1
	 */
	
	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ES6Promise = factory());
	}(this, (function () { 'use strict';
	
	function objectOrFunction(x) {
	  return typeof x === 'function' || typeof x === 'object' && x !== null;
	}
	
	function isFunction(x) {
	  return typeof x === 'function';
	}
	
	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	} else {
	  _isArray = Array.isArray;
	}
	
	var isArray = _isArray;
	
	var len = 0;
	var vertxNext = undefined;
	var customSchedulerFn = undefined;
	
	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};
	
	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}
	
	function setAsap(asapFn) {
	  asap = asapFn;
	}
	
	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';
	
	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	
	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}
	
	// vertx
	function useVertxTimer() {
	  return function () {
	    vertxNext(flush);
	  };
	}
	
	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });
	
	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}
	
	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}
	
	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}
	
	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];
	
	    callback(arg);
	
	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }
	
	  len = 0;
	}
	
	function attemptVertx() {
	  try {
	    var r = require;
	    var vertx = __webpack_require__(8);
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}
	
	var scheduleFlush = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}
	
	function then(onFulfillment, onRejection) {
	  var _arguments = arguments;
	
	  var parent = this;
	
	  var child = new this.constructor(noop);
	
	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }
	
	  var _state = parent._state;
	
	  if (_state) {
	    (function () {
	      var callback = _arguments[_state - 1];
	      asap(function () {
	        return invokeCallback(_state, child, callback, parent._result);
	      });
	    })();
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }
	
	  return child;
	}
	
	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.resolve(1);
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve(object) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }
	
	  var promise = new Constructor(noop);
	  _resolve(promise, object);
	  return promise;
	}
	
	var PROMISE_ID = Math.random().toString(36).substring(16);
	
	function noop() {}
	
	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	
	var GET_THEN_ERROR = new ErrorObject();
	
	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}
	
	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}
	
	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    GET_THEN_ERROR.error = error;
	    return GET_THEN_ERROR;
	  }
	}
	
	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}
	
	function handleForeignThenable(promise, thenable, then) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        _resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	
	      _reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	    if (!sealed && error) {
	      sealed = true;
	      _reject(promise, error);
	    }
	  }, promise);
	}
	
	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    _reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return _resolve(promise, value);
	    }, function (reason) {
	      return _reject(promise, reason);
	    });
	  }
	}
	
	function handleMaybeThenable(promise, maybeThenable, then$$) {
	  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$ === GET_THEN_ERROR) {
	      _reject(promise, GET_THEN_ERROR.error);
	    } else if (then$$ === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$)) {
	      handleForeignThenable(promise, maybeThenable, then$$);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}
	
	function _resolve(promise, value) {
	  if (promise === value) {
	    _reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}
	
	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }
	
	  publish(promise);
	}
	
	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	
	  promise._result = value;
	  promise._state = FULFILLED;
	
	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}
	
	function _reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;
	
	  asap(publishRejection, promise);
	}
	
	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;
	
	  parent._onerror = null;
	
	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;
	
	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}
	
	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;
	
	  if (subscribers.length === 0) {
	    return;
	  }
	
	  var child = undefined,
	      callback = undefined,
	      detail = promise._result;
	
	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];
	
	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }
	
	  promise._subscribers.length = 0;
	}
	
	function ErrorObject() {
	  this.error = null;
	}
	
	var TRY_CATCH_ERROR = new ErrorObject();
	
	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}
	
	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = undefined,
	      error = undefined,
	      succeeded = undefined,
	      failed = undefined;
	
	  if (hasCallback) {
	    value = tryCatch(callback, detail);
	
	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value = null;
	    } else {
	      succeeded = true;
	    }
	
	    if (promise === value) {
	      _reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }
	
	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	}
	
	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      _resolve(promise, value);
	    }, function rejectPromise(reason) {
	      _reject(promise, reason);
	    });
	  } catch (e) {
	    _reject(promise, e);
	  }
	}
	
	var id = 0;
	function nextId() {
	  return id++;
	}
	
	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}
	
	function Enumerator(Constructor, input) {
	  this._instanceConstructor = Constructor;
	  this.promise = new Constructor(noop);
	
	  if (!this.promise[PROMISE_ID]) {
	    makePromise(this.promise);
	  }
	
	  if (isArray(input)) {
	    this._input = input;
	    this.length = input.length;
	    this._remaining = input.length;
	
	    this._result = new Array(this.length);
	
	    if (this.length === 0) {
	      fulfill(this.promise, this._result);
	    } else {
	      this.length = this.length || 0;
	      this._enumerate();
	      if (this._remaining === 0) {
	        fulfill(this.promise, this._result);
	      }
	    }
	  } else {
	    _reject(this.promise, validationError());
	  }
	}
	
	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	};
	
	Enumerator.prototype._enumerate = function () {
	  var length = this.length;
	  var _input = this._input;
	
	  for (var i = 0; this._state === PENDING && i < length; i++) {
	    this._eachEntry(_input[i], i);
	  }
	};
	
	Enumerator.prototype._eachEntry = function (entry, i) {
	  var c = this._instanceConstructor;
	  var resolve$$ = c.resolve;
	
	  if (resolve$$ === resolve) {
	    var _then = getThen(entry);
	
	    if (_then === then && entry._state !== PENDING) {
	      this._settledAt(entry._state, i, entry._result);
	    } else if (typeof _then !== 'function') {
	      this._remaining--;
	      this._result[i] = entry;
	    } else if (c === Promise) {
	      var promise = new c(noop);
	      handleMaybeThenable(promise, entry, _then);
	      this._willSettleAt(promise, i);
	    } else {
	      this._willSettleAt(new c(function (resolve$$) {
	        return resolve$$(entry);
	      }), i);
	    }
	  } else {
	    this._willSettleAt(resolve$$(entry), i);
	  }
	};
	
	Enumerator.prototype._settledAt = function (state, i, value) {
	  var promise = this.promise;
	
	  if (promise._state === PENDING) {
	    this._remaining--;
	
	    if (state === REJECTED) {
	      _reject(promise, value);
	    } else {
	      this._result[i] = value;
	    }
	  }
	
	  if (this._remaining === 0) {
	    fulfill(promise, this._result);
	  }
	};
	
	Enumerator.prototype._willSettleAt = function (promise, i) {
	  var enumerator = this;
	
	  subscribe(promise, undefined, function (value) {
	    return enumerator._settledAt(FULFILLED, i, value);
	  }, function (reason) {
	    return enumerator._settledAt(REJECTED, i, reason);
	  });
	};
	
	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```
	
	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```
	
	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}
	
	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.
	
	  Example:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```
	
	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```
	
	  An example real-world use case is implementing timeouts:
	
	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```
	
	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}
	
	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  _reject(promise, reason);
	  return promise;
	}
	
	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}
	
	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}
	
	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.
	
	  Terminology
	  -----------
	
	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.
	
	  A promise can be in one of three states: pending, fulfilled, or rejected.
	
	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.
	
	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.
	
	
	  Basic Usage:
	  ------------
	
	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);
	
	    // on failure
	    reject(reason);
	  });
	
	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Advanced Usage:
	  ---------------
	
	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.
	
	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();
	
	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();
	
	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }
	
	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Unlike callbacks, promises are great composable primitives.
	
	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON
	
	    return values;
	  });
	  ```
	
	  @class Promise
	  @param {function} resolver
	  Useful for tooling.
	  @constructor
	*/
	function Promise(resolver) {
	  this[PROMISE_ID] = nextId();
	  this._result = this._state = undefined;
	  this._subscribers = [];
	
	  if (noop !== resolver) {
	    typeof resolver !== 'function' && needsResolver();
	    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	  }
	}
	
	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve;
	Promise.reject = reject;
	Promise._setScheduler = setScheduler;
	Promise._setAsap = setAsap;
	Promise._asap = asap;
	
	Promise.prototype = {
	  constructor: Promise,
	
	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we're unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfilled
	    @param {Function} onRejected
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,
	
	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn't find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': function _catch(onRejection) {
	    return this.then(null, onRejection);
	  }
	};
	
	function polyfill() {
	    var local = undefined;
	
	    if (typeof global !== 'undefined') {
	        local = global;
	    } else if (typeof self !== 'undefined') {
	        local = self;
	    } else {
	        try {
	            local = Function('return this')();
	        } catch (e) {
	            throw new Error('polyfill failed because global object is unavailable in this environment');
	        }
	    }
	
	    var P = local.Promise;
	
	    if (P) {
	        var promiseToString = null;
	        try {
	            promiseToString = Object.prototype.toString.call(P.resolve());
	        } catch (e) {
	            // silently ignored
	        }
	
	        if (promiseToString === '[object Promise]' && !P.cast) {
	            return;
	        }
	    }
	
	    local.Promise = Promise;
	}
	
	polyfill();
	// Strange compat..
	Promise.polyfill = polyfill;
	Promise.Promise = Promise;
	
	return Promise;
	
	})));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 8 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	// CustomEvent polyfill from MDN
	// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
	function customEventPolyfill() {
	    // window.CustomEvent is missing from the definitions
	    if (typeof window.CustomEvent === 'function') {
	        return;
	    }
	    var CustomEvent = function (event, params) {
	        params = params || { bubbles: false, cancelable: false, detail: undefined };
	        var customEvent = document.createEvent('CustomEvent');
	        customEvent.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	        return customEvent;
	    };
	    // window.Event is specific to IE
	    CustomEvent.prototype = window.Event.prototype;
	    window.CustomEvent = CustomEvent;
	}
	exports.customEventPolyfill = customEventPolyfill;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	exports.version = {
	    'lib': '1.1550.7',
	    'product': '1.1550.7',
	    'supportedApiVersion': 2
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var EndpointCaller_1 = __webpack_require__(14);
	var Logger_1 = __webpack_require__(15);
	var Assert_1 = __webpack_require__(16);
	var Version_1 = __webpack_require__(10);
	var AjaxError_1 = __webpack_require__(20);
	var MissingAuthenticationError_1 = __webpack_require__(21);
	var QueryUtils_1 = __webpack_require__(22);
	var QueryError_1 = __webpack_require__(23);
	var Utils_1 = __webpack_require__(17);
	var es6_promise_1 = __webpack_require__(6);
	var DefaultSearchEndpointOptions = (function () {
	    function DefaultSearchEndpointOptions() {
	        this.version = 'v2';
	        this.queryStringArguments = {};
	        this.anonymous = false;
	        this.isGuestUser = false;
	    }
	    return DefaultSearchEndpointOptions;
	}());
	exports.DefaultSearchEndpointOptions = DefaultSearchEndpointOptions;
	/**
	 * A search endpoint allows to execute letious actions against the Coveo Search API and index.<br/>
	 * For example, you can search, list field values, get the quickview content for a document, etc.<br/>
	 * Any actions that you execute using this class will not trigger a full query cycle for the Coveo components.<br/>
	 * This is because this class will not trigger any query events directly.<br/>
	 * If you wish to execute a query that all components will react to (and trigger the corresponding query events), use the {@link QueryController}
	 */
	var SearchEndpoint = (function () {
	    /**
	     * Create a new SearchEndpoint.<br/>
	     * Will use a set of sane default options, and merge them with the options parameter.<br/>
	     * Will create an {@link EndpointCaller} and use it to communicate with the endpoint internally
	     * @param options
	     */
	    function SearchEndpoint(options) {
	        var _this = this;
	        this.options = options;
	        Assert_1.Assert.exists(options);
	        Assert_1.Assert.exists(options.restUri);
	        // For backward compatibility, we set anonymous to true when an access token
	        // is specified on a page loaded through the filesystem. This causes withCredentials
	        // to NOT be set, allowing those pages to work with non Windows/Basic/Cookie
	        // authentication. If anonymous is explicitly set to false, we'll use withCredentials.
	        var defaultOptions = new DefaultSearchEndpointOptions();
	        defaultOptions.anonymous = window.location.href.indexOf('file://') == 0 && Utils_1.Utils.isNonEmptyString(options.accessToken);
	        this.options = _.extend({}, defaultOptions, options);
	        // Forward any debug=1 query argument to the REST API to ease debugging
	        if (SearchEndpoint.isDebugArgumentPresent()) {
	            this.options.queryStringArguments['debug'] = 1;
	        }
	        this.onUnload = function () {
	            _this.handleUnload();
	        };
	        window.addEventListener('beforeunload', this.onUnload);
	        this.logger = new Logger_1.Logger(this);
	        this.createEndpointCaller();
	    }
	    /**
	     * Configure an endpoint that will point to a Coveo Cloud index, which contains a set of public sources with no security on them.<br/>
	     * Used for demo purposes and ease of setup.
	     * @param otherOptions A set of additional options to use when configuring this endpoint
	     */
	    SearchEndpoint.configureSampleEndpoint = function (otherOptions) {
	        if (SearchEndpoint.isUseLocalArgumentPresent()) {
	            // This is a handy flag to quickly test a local search API and alerts
	            SearchEndpoint.endpoints['default'] = new SearchEndpoint(_.extend({
	                restUri: 'http://localhost:8100/rest/search',
	                searchAlertsUri: 'http://localhost:8088/rest/search/alerts/'
	            }, otherOptions));
	        }
	        else {
	            // This OAuth token points to the organization used for samples.
	            // It contains a set of harmless content sources.
	            SearchEndpoint.endpoints['default'] = new SearchEndpoint(_.extend({
	                restUri: 'https://cloudplatform.coveo.com/rest/search',
	                accessToken: '52d806a2-0f64-4390-a3f2-e0f41a4a73ec'
	            }, otherOptions));
	        }
	    };
	    /**
	     * Configure an endpoint that will point to a Coveo Cloud index V2, which contains a set of public sources with no security on them.<br/>
	     * Used for demo purposes and ease of setup.
	     * @param otherOptions A set of additional options to use when configuring this endpoint
	     */
	    SearchEndpoint.configureSampleEndpointV2 = function (optionsOPtions) {
	        SearchEndpoint.endpoints['default'] = new SearchEndpoint(_.extend({
	            restUri: 'https://platform.cloud.coveo.com/rest/search',
	            accessToken: 'xx564559b1-0045-48e1-953c-3addd1ee4457',
	            queryStringArguments: {
	                organizationID: 'searchuisamples'
	            }
	        }));
	    };
	    /**
	     * Configure an endpoint to a Coveo Cloud index.
	     * @param organization The organization id of your Coveo cloud index
	     * @param token The token to use to execute query. If null, you will most probably need to login when querying.
	     * @param uri The uri of your cloud Search API. By default, will point to the production environment
	     * @param otherOptions A set of additional options to use when configuring this endpoint
	     */
	    SearchEndpoint.configureCloudEndpoint = function (organization, token, uri, otherOptions) {
	        if (uri === void 0) { uri = 'https://cloudplatform.coveo.com/rest/search'; }
	        var options = {
	            restUri: uri,
	            accessToken: token,
	            queryStringArguments: { organizationId: organization }
	        };
	        var merged = SearchEndpoint.mergeConfigOptions(options, otherOptions);
	        SearchEndpoint.endpoints['default'] = new SearchEndpoint(SearchEndpoint.removeUndefinedConfigOption(merged));
	    };
	    SearchEndpoint.configureCloudV2Endpoint = function (organization, token, uri, otherOptions) {
	        if (uri === void 0) { uri = 'https://platform.cloud.coveo.com/rest/search'; }
	        return SearchEndpoint.configureCloudEndpoint(organization, token, uri, otherOptions);
	    };
	    /**
	     * Configure an endpoint to a Coveo on premise index.
	     * @param uri The uri of your Coveo Search API endpoint. eg : http://myserver:8080/rest/search
	     * @param token The token to use to execute query. If null, you will most probably need to login when querying (unless the search api is configured using advanced auth options, like windows auth or claims)
	     * @param otherOptions A set of additional options to use when configuring this endpoint
	     */
	    SearchEndpoint.configureOnPremiseEndpoint = function (uri, token, otherOptions) {
	        var merged = SearchEndpoint.mergeConfigOptions({
	            restUri: uri,
	            accessToken: token
	        }, otherOptions);
	        SearchEndpoint.endpoints['default'] = new SearchEndpoint(SearchEndpoint.removeUndefinedConfigOption(merged));
	    };
	    SearchEndpoint.removeUndefinedConfigOption = function (config) {
	        _.each(_.keys(config), function (key) {
	            if (config[key] == undefined) {
	                delete config[key];
	            }
	        });
	        return config;
	    };
	    SearchEndpoint.mergeConfigOptions = function (first, second) {
	        first = SearchEndpoint.removeUndefinedConfigOption(first);
	        second = SearchEndpoint.removeUndefinedConfigOption(second);
	        return _.extend({}, first, second);
	    };
	    SearchEndpoint.prototype.reset = function () {
	        this.createEndpointCaller();
	    };
	    /**
	     * Set a function which will allow external code to modify all endpoint call parameters before they are sent by the browser.
	     *
	     * Used in very specific scenario where the network infrastructure require special request headers to be added or removed, for example.
	     * @param requestModifier
	     */
	    SearchEndpoint.prototype.setRequestModifier = function (requestModifier) {
	        this.caller.options.requestModifier = requestModifier;
	    };
	    /**
	     * Return the base uri of the endpoint to perform search
	     * @returns {string}
	     */
	    SearchEndpoint.prototype.getBaseUri = function () {
	        return this.buildBaseUri('');
	    };
	    /**
	     * Return the base uri of the endpoint for search alert
	     * @returns {string}
	     */
	    SearchEndpoint.prototype.getBaseAlertsUri = function () {
	        return this.buildSearchAlertsUri('');
	    };
	    /**
	     * Get the uri that can be used to authenticate against the given provider
	     * @param provider The provider name
	     * @param returnUri The uri at which to return after the authentication is completed
	     * @param message The message for authentication
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {string}
	     */
	    SearchEndpoint.prototype.getAuthenticationProviderUri = function (provider, returnUri, message, callOptions, callParams) {
	        var queryString = this.buildBaseQueryString(callOptions);
	        callParams.queryString = callParams.queryString.concat(queryString);
	        callParams.url += provider + '?';
	        if (Utils_1.Utils.isNonEmptyString(returnUri)) {
	            callParams.url += 'redirectUri=' + encodeURIComponent(returnUri) + '&';
	        }
	        else if (Utils_1.Utils.isNonEmptyString(message)) {
	            callParams.url += 'message=' + encodeURIComponent(message) + '&';
	        }
	        callParams.url += callParams.queryString.join('&');
	        return callParams.url;
	    };
	    /**
	     * is the search endpoint using jsonp internally to communicate with Search API
	     * @returns {boolean}
	     */
	    SearchEndpoint.prototype.isJsonp = function () {
	        return this.caller.useJsonp;
	    };
	    /**
	     * Perform a search on the index and returns a Promise of {@link IQueryResults}.<br/>
	     * Will modify the query results slightly, by adding additional information on each results (an id, the state object, etc.)
	     * @param query The query to execute. Typically, the query object is built using a {@link QueryBuilder}
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {Promise<IQueryResults>}
	     */
	    SearchEndpoint.prototype.search = function (query, callOptions, callParams) {
	        var _this = this;
	        Assert_1.Assert.exists(query);
	        callParams.requestData = query;
	        this.logger.info('Performing REST query', query);
	        return this.performOneCall(callParams, callOptions).then(function (results) {
	            _this.logger.info('REST query successful', results, query);
	            // Version check
	            // If the SearchAPI doesn't give us any apiVersion info, we assume version 1 (before apiVersion was implemented)
	            if (results.apiVersion == null) {
	                results.apiVersion = 1;
	            }
	            if (results.apiVersion < Version_1.version.supportedApiVersion) {
	                _this.logger.error('Please update your REST Search API');
	            }
	            // If the server specified no search ID generated one using the client-side
	            // GUID generator. We prefer server generated guids to allow tracking a query
	            // all the way from the analytics to the logs.
	            if (Utils_1.Utils.isNullOrEmptyString(results.searchUid)) {
	                results.searchUid = QueryUtils_1.QueryUtils.createGuid();
	            }
	            QueryUtils_1.QueryUtils.setIndexAndUidOnQueryResults(query, results, results.searchUid, results.pipeline, results.splitTestRun);
	            QueryUtils_1.QueryUtils.setTermsToHighlightOnQueryResults(query, results);
	            return results;
	        });
	    };
	    /**
	     * Get a link/uri to download a set of results, for a given query, to an xlsx format.<br/>
	     * Note : This does not download automatically the documents, merely provide an url at which to download them.
	     * @param query The query for which to get the xlsx documents
	     * @param numberOfResults The number of results that should be downloaded
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {string}
	     */
	    SearchEndpoint.prototype.getExportToExcelLink = function (query, numberOfResults, callOptions, callParams) {
	        var queryString = this.buildBaseQueryString(callOptions);
	        callParams.queryString = callParams.queryString.concat(queryString);
	        queryString = this.buildCompleteQueryString(null, query);
	        callParams.queryString = callParams.queryString.concat(queryString);
	        if (numberOfResults != null) {
	            callParams.queryString.push('numberOfResults=' + numberOfResults);
	        }
	        callParams.queryString.push('format=xlsx');
	        return callParams.url + '?' + callParams.queryString.join('&');
	    };
	    /**
	     * Get the raw datastream for a given document. This is typically used to get a thumbnail for a document.<br/>
	     * Return an array buffer : <br/>
	     * eg : let rawBinary = String.fromCharCode.apply(null, new Uint8Array(response));<br/>
	     * img.setAttribute('src', 'data:image/png;base64,' + btoa(rawBinary));
	     * @param documentUniqueId Typically the {@link IQueryResult.uniqueId} on each result
	     * @param dataStreamType Normally : '$Thumbnail'
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {Promise<TResult>|Promise<U>}
	     */
	    SearchEndpoint.prototype.getRawDataStream = function (documentUniqueId, dataStreamType, callOptions, callParams) {
	        var _this = this;
	        Assert_1.Assert.exists(documentUniqueId);
	        var queryString = this.buildViewAsHtmlQueryString(documentUniqueId, callOptions);
	        callParams.queryString = callParams.queryString.concat(queryString);
	        this.logger.info('Performing REST query for datastream ' + dataStreamType + ' on document uniqueID' + documentUniqueId);
	        callParams.queryString.push('dataStream=' + dataStreamType);
	        return this.performOneCall(callParams).then(function (results) {
	            _this.logger.info('REST query successful', results, documentUniqueId);
	            return results;
	        });
	    };
	    /**
	     * Return an url that will allow to see the datastream for a given document. This is typically used to get a thumbnail for a document.<br/>
	     * @param documentUniqueID Typically the {@link IQueryResult.uniqueId} on each result
	     * @param dataStreamType Normally : '$Thumbnail'
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {string}
	     */
	    SearchEndpoint.prototype.getViewAsDatastreamUri = function (documentUniqueID, dataStreamType, callOptions, callParams) {
	        callOptions = _.extend({}, callOptions);
	        var queryString = this.buildBaseQueryString(callOptions);
	        callParams.queryString = callParams.queryString.concat(queryString);
	        queryString = this.buildViewAsHtmlQueryString(documentUniqueID, callOptions);
	        callParams.queryString = callParams.queryString.concat(queryString);
	        queryString = this.buildCompleteQueryString(callOptions.query, callOptions.queryObject);
	        callParams.queryString = callParams.queryString.concat(queryString);
	        return callParams.url + '?' + callParams.queryString.join('&') + '&dataStream=' + encodeURIComponent(dataStreamType);
	    };
	    /**
	     * Return a single document, using it's uniqueId
	     * @param documentUniqueID Typically the {@link IQueryResult.uniqueId} on each result
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {Promise<IQueryResult>}
	     */
	    SearchEndpoint.prototype.getDocument = function (documentUniqueID, callOptions, callParams) {
	        var queryString = this.buildViewAsHtmlQueryString(documentUniqueID, callOptions);
	        callParams.queryString = callParams.queryString.concat(queryString);
	        return this.performOneCall(callParams);
	    };
	    /**
	     * Return the content for a single document, as text.<br/>
	     * Think : quickview
	     * @param documentUniqueID Typically the {@link IQueryResult.uniqueId} on each result
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {Promise<string>}
	     */
	    SearchEndpoint.prototype.getDocumentText = function (documentUniqueID, callOptions, callParams) {
	        var queryString = this.buildViewAsHtmlQueryString(documentUniqueID, callOptions);
	        callParams.queryString = callParams.queryString.concat(queryString);
	        return this.performOneCall(callParams)
	            .then(function (data) {
	            return data.content;
	        });
	    };
	    /**
	     * Return the content for a single document, as an HTMLDocument.<br/>
	     * Think : quickview
	     * @param documentUniqueID Typically the {@link IQueryResult.uniqueId} on each result
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {Promise<HTMLDocument>}
	     */
	    SearchEndpoint.prototype.getDocumentHtml = function (documentUniqueID, callOptions, callParams) {
	        callOptions = _.extend({}, callOptions);
	        var queryString = this.buildViewAsHtmlQueryString(documentUniqueID, callOptions);
	        callParams.queryString = callParams.queryString.concat(queryString);
	        callParams.requestData = callOptions.queryObject || { q: callOptions.query };
	        return this.performOneCall(callParams);
	    };
	    /**
	     * Return an url that will allow to see a single document content, as HTML.<br/>
	     * Think : quickview
	     * @param documentUniqueID Typically the {@link IQueryResult.uniqueId} on each result
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {string}
	     */
	    SearchEndpoint.prototype.getViewAsHtmlUri = function (documentUniqueID, callOptions, callParams) {
	        var queryString = this.buildBaseQueryString(callOptions);
	        callParams.queryString = callParams.queryString.concat(queryString);
	        queryString = this.buildViewAsHtmlQueryString(documentUniqueID, callOptions);
	        callParams.queryString = callParams.queryString.concat(queryString);
	        callParams.queryString = _.uniq(callParams.queryString);
	        return callParams.url + '?' + callParams.queryString.join('&');
	    };
	    SearchEndpoint.prototype.batchFieldValues = function (request, callOptions, callParams) {
	        var _this = this;
	        Assert_1.Assert.exists(request);
	        return this.performOneCall(callParams)
	            .then(function (data) {
	            _this.logger.info('REST list field values successful', data.values, request);
	            return data.values;
	        });
	    };
	    /**
	     * List the possible values for a given request
	     * @param request The request for which to list the possible field values
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {Promise<TResult>|Promise<U>}
	     */
	    SearchEndpoint.prototype.listFieldValues = function (request, callOptions, callParams) {
	        var _this = this;
	        Assert_1.Assert.exists(request);
	        callParams.requestData = request;
	        this.logger.info('Listing field values', request);
	        return this.performOneCall(callParams)
	            .then(function (data) {
	            _this.logger.info('REST list field values successful', data.values, request);
	            return data.values;
	        });
	    };
	    /**
	     * List all fields for the index, and return an array of their description
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {Promise<TResult>|Promise<U>}
	     */
	    SearchEndpoint.prototype.listFields = function (callOptions, callParams) {
	        this.logger.info('Listing fields');
	        return this.performOneCall(callParams).then(function (data) {
	            return data.fields;
	        });
	    };
	    /**
	     * List all available query extensions for the search endpoint
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {Promise<IExtension[]>}
	     */
	    SearchEndpoint.prototype.extensions = function (callOptions, callParams) {
	        this.logger.info('Listing extensions');
	        return this.performOneCall(callParams);
	    };
	    /**
	     * Allow to rate a single document in the index (granted that collaborative rating is enabled on your index)
	     * @param ratingRequest Document id and rating
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {Promise<boolean>|Promise<T>}
	     */
	    SearchEndpoint.prototype.rateDocument = function (ratingRequest, callOptions, callParams) {
	        this.logger.info('Rating a document', ratingRequest);
	        callParams.requestData = ratingRequest;
	        return this.performOneCall(callParams).then(function () {
	            return true;
	        });
	    };
	    /**
	     * Allow to tag a single document
	     * @param taggingRequest Document id and tag action to perform
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {Promise<boolean>|Promise<T>}
	     */
	    SearchEndpoint.prototype.tagDocument = function (taggingRequest, callOptions, callParams) {
	        this.logger.info('Tagging a document', taggingRequest);
	        callParams.requestData = taggingRequest;
	        return this.performOneCall(callParams).then(function () {
	            return true;
	        });
	    };
	    /**
	     * Return a list of reveal query suggestions, based on the given request
	     * @param request query and number of suggestions to return
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {Promise<IRevealQuerySuggestResponse>}
	     */
	    SearchEndpoint.prototype.getRevealQuerySuggest = function (request, callOptions, callParams) {
	        this.logger.info('Get Reveal Query Suggest', request);
	        callParams.requestData = request;
	        return this.performOneCall(callParams);
	    };
	    /**
	     * Allow to follow a document or a query on the search alerts service
	     * @param request
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {Promise<ISubscription>}
	     */
	    SearchEndpoint.prototype.follow = function (request, callOptions, callParams) {
	        callParams.requestData = request;
	        this.logger.info('Following a document or a query', request);
	        return this.performOneCall(callParams);
	    };
	    /**
	     * Return a Promise of array of current subscriptions
	     * @param page The page of the subsctiptions
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {any}
	     */
	    SearchEndpoint.prototype.listSubscriptions = function (page, callOptions, callParams) {
	        var _this = this;
	        if (this.options.isGuestUser) {
	            return new es6_promise_1.Promise(function (resolve, reject) {
	                reject();
	            });
	        }
	        if (this.currentListSubscriptions == null) {
	            callParams.queryString.push('page=' + (page || 0));
	            this.currentListSubscriptions = this.performOneCall(callParams);
	            this.currentListSubscriptions.then(function (data) {
	                _this.currentListSubscriptions = null;
	                return data;
	            }).catch(function (e) {
	                // Trap 503 error, as the listSubscription call is called on every page initialization
	                // to check for current subscriptions. By default, the search alert service is not enabled for most organization
	                // Don't want to pollute the console with un-needed noise and confusion
	                if (e.status != 503) {
	                    throw e;
	                }
	            });
	        }
	        return this.currentListSubscriptions;
	    };
	    /**
	     * Update a subscription with new parameters
	     * @param subscription The subscription to update with new parameters
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {Promise<ISubscription>}
	     */
	    SearchEndpoint.prototype.updateSubscription = function (subscription, callOptions, callParams) {
	        callParams.requestData = subscription;
	        this.logger.info('Updating a subscription', subscription);
	        callParams.url += subscription.id;
	        return this.performOneCall(callParams);
	    };
	    /**
	     * Delete a subscription
	     * @param subscription The subscription to delete
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {Promise<ISubscription>}
	     */
	    SearchEndpoint.prototype.deleteSubscription = function (subscription, callOptions, callParams) {
	        callParams.url += subscription.id;
	        return this.performOneCall(callParams);
	    };
	    SearchEndpoint.prototype.logError = function (sentryLog, callOptions, callParams) {
	        callParams.requestData = sentryLog;
	        return this.performOneCall(callParams, callOptions)
	            .then(function () {
	            return true;
	        })
	            .catch(function () {
	            return false;
	        });
	    };
	    SearchEndpoint.prototype.nuke = function () {
	        window.removeEventListener('beforeunload', this.onUnload);
	    };
	    SearchEndpoint.prototype.createEndpointCaller = function () {
	        this.caller = new EndpointCaller_1.EndpointCaller(this.options);
	    };
	    SearchEndpoint.isDebugArgumentPresent = function () {
	        return /[?&]debug=1([&]|$)/.test(window.location.search);
	    };
	    SearchEndpoint.isUseLocalArgumentPresent = function () {
	        return /[?&]useLocal=1([&]|$)/.test(window.location.search);
	    };
	    SearchEndpoint.prototype.handleUnload = function () {
	        this.isRedirecting = true;
	    };
	    SearchEndpoint.prototype.buildBaseUri = function (path) {
	        Assert_1.Assert.isString(path);
	        var uri = this.options.restUri;
	        uri = this.removeTrailingSlash(uri);
	        if (Utils_1.Utils.isNonEmptyString(this.options.version)) {
	            uri += '/' + this.options.version;
	        }
	        uri += path;
	        return uri;
	    };
	    SearchEndpoint.prototype.buildSearchAlertsUri = function (path) {
	        Assert_1.Assert.isString(path);
	        var uri = this.options.searchAlertsUri || this.options.restUri + '/alerts';
	        if (uri == null) {
	            return null;
	        }
	        uri = this.removeTrailingSlash(uri);
	        uri += path;
	        return uri;
	    };
	    // see https://github.com/palantir/tslint/issues/1421
	    // tslint:disable-next-line:no-unused-variable
	    SearchEndpoint.prototype.buildAccessToken = function (tokenKey) {
	        var queryString = [];
	        if (Utils_1.Utils.isNonEmptyString(this.options.accessToken)) {
	            queryString.push(tokenKey + '=' + encodeURIComponent(this.options.accessToken));
	        }
	        return queryString;
	    };
	    SearchEndpoint.prototype.buildBaseQueryString = function (callOptions) {
	        callOptions = _.extend({}, callOptions);
	        var queryString = [];
	        for (var name_1 in this.options.queryStringArguments) {
	            queryString.push(name_1 + '=' + encodeURIComponent(this.options.queryStringArguments[name_1]));
	        }
	        if (callOptions && _.isArray(callOptions.authentication) && callOptions.authentication.length != 0) {
	            queryString.push('authentication=' + callOptions.authentication.join(','));
	        }
	        return queryString;
	    };
	    SearchEndpoint.prototype.buildCompleteQueryString = function (query, queryObject) {
	        // In an ideal parallel reality, the entire query used in the 'search' call is used here.
	        // In this reality however, we must support GET calls (ex: GET /html) for CORS/JSONP/IE reasons.
	        // Therefore, we cherry-pick parts of the query to include in a 'query string' instead of a body payload.
	        var queryString = [];
	        if (queryObject) {
	            _.each(['q', 'aq', 'cq', 'dq', 'searchHub', 'tab', 'language', 'pipeline', 'lowercaseOperators'], function (key) {
	                if (queryObject[key]) {
	                    queryString.push(key + '=' + encodeURIComponent(queryObject[key]));
	                }
	            });
	            _.each(queryObject.context, function (value, key) {
	                queryString.push('context[' + key + ']=' + encodeURIComponent(value));
	            });
	        }
	        else if (query) {
	            queryString.push('q=' + encodeURIComponent(query));
	        }
	        return queryString;
	    };
	    SearchEndpoint.prototype.buildViewAsHtmlQueryString = function (uniqueId, callOptions) {
	        callOptions = _.extend({}, callOptions);
	        var queryString = this.buildBaseQueryString(callOptions);
	        queryString.push('uniqueId=' + encodeURIComponent(uniqueId));
	        if (callOptions.query || callOptions.queryObject) {
	            queryString.push('enableNavigation=true');
	        }
	        if (callOptions.requestedOutputSize) {
	            queryString.push('requestedOutputSize=' + encodeURIComponent(callOptions.requestedOutputSize.toString()));
	        }
	        if (callOptions.contentType) {
	            queryString.push('contentType=' + encodeURIComponent(callOptions.contentType));
	        }
	        return queryString;
	    };
	    SearchEndpoint.prototype.performOneCall = function (params, callOptions, autoRenewToken) {
	        var _this = this;
	        if (autoRenewToken === void 0) { autoRenewToken = true; }
	        var queryString = this.buildBaseQueryString(callOptions);
	        params.queryString = params.queryString.concat(queryString);
	        params.queryString = _.uniq(params.queryString);
	        return this.caller.call(params)
	            .then(function (response) {
	            if (response.data && response.data.clientDuration) {
	                response.data.clientDuration = response.duration;
	            }
	            return response.data;
	        }).catch(function (error) {
	            if (autoRenewToken && _this.canRenewAccessToken() && _this.isAccessTokenExpiredStatus(error.statusCode)) {
	                _this.renewAccessToken()
	                    .then(function () {
	                    return _this.performOneCall(params, callOptions, autoRenewToken);
	                })
	                    .catch(function () {
	                    return es6_promise_1.Promise.reject(_this.handleErrorResponse(error));
	                });
	            }
	            else if (error.statusCode == 0 && _this.isRedirecting) {
	                // The page is getting redirected
	                // Set timeout on return with empty string, since it does not really matter
	                _.defer(function () {
	                    return '';
	                });
	            }
	            else {
	                return es6_promise_1.Promise.reject(_this.handleErrorResponse(error));
	            }
	        });
	    };
	    SearchEndpoint.prototype.handleErrorResponse = function (errorResponse) {
	        if (this.isMissingAuthenticationProviderStatus(errorResponse.statusCode)) {
	            return new MissingAuthenticationError_1.MissingAuthenticationError(errorResponse.data['provider']);
	        }
	        else if (errorResponse.data && errorResponse.data.message && errorResponse.data.type) {
	            return new QueryError_1.QueryError(errorResponse);
	        }
	        else if (errorResponse.data && errorResponse.data.message) {
	            return new AjaxError_1.AjaxError("Request Error : " + errorResponse.data.message, errorResponse.statusCode);
	        }
	        else {
	            return new AjaxError_1.AjaxError('Request Error', errorResponse.statusCode);
	        }
	    };
	    SearchEndpoint.prototype.canRenewAccessToken = function () {
	        return Utils_1.Utils.isNonEmptyString(this.options.accessToken) && _.isFunction(this.options.renewAccessToken);
	    };
	    SearchEndpoint.prototype.renewAccessToken = function () {
	        var _this = this;
	        this.logger.info('Renewing expired access token');
	        return this.options.renewAccessToken().then(function (token) {
	            Assert_1.Assert.isNonEmptyString(token);
	            _this.options.accessToken = token;
	            _this.createEndpointCaller();
	            return token;
	        })
	            .catch(function (e) {
	            _this.logger.error('Failed to renew access token', e);
	            return e;
	        });
	    };
	    SearchEndpoint.prototype.removeTrailingSlash = function (uri) {
	        if (this.hasTrailingSlash(uri)) {
	            uri = uri.substr(0, uri.length - 1);
	        }
	        return uri;
	    };
	    SearchEndpoint.prototype.hasTrailingSlash = function (uri) {
	        return uri.charAt(uri.length - 1) == '/';
	    };
	    SearchEndpoint.prototype.isMissingAuthenticationProviderStatus = function (status) {
	        return status == 402;
	    };
	    SearchEndpoint.prototype.isAccessTokenExpiredStatus = function (status) {
	        return status == 419;
	    };
	    /**
	     * A map of all the initialized endpoint.<br/>
	     * eg : Coveo.SearchEndpoint.endpoints['default'] will return the default endpoint that was created at initialization
	     * @type {{}}
	     */
	    SearchEndpoint.endpoints = {};
	    __decorate([
	        path('/login/'),
	        accessTokenInUrl()
	    ], SearchEndpoint.prototype, "getAuthenticationProviderUri", null);
	    __decorate([
	        path('/'),
	        method('POST'),
	        responseType('text')
	    ], SearchEndpoint.prototype, "search", null);
	    __decorate([
	        path('/'),
	        accessTokenInUrl()
	    ], SearchEndpoint.prototype, "getExportToExcelLink", null);
	    __decorate([
	        path('/datastream'),
	        accessTokenInUrl(),
	        method('GET'),
	        responseType('arraybuffer')
	    ], SearchEndpoint.prototype, "getRawDataStream", null);
	    __decorate([
	        path('/datastream'),
	        accessTokenInUrl()
	    ], SearchEndpoint.prototype, "getViewAsDatastreamUri", null);
	    __decorate([
	        path('/document'),
	        method('GET'),
	        responseType('text')
	    ], SearchEndpoint.prototype, "getDocument", null);
	    __decorate([
	        path('/text'),
	        method('GET'),
	        responseType('text')
	    ], SearchEndpoint.prototype, "getDocumentText", null);
	    __decorate([
	        path('/html'),
	        method('POST'),
	        responseType('document')
	    ], SearchEndpoint.prototype, "getDocumentHtml", null);
	    __decorate([
	        path('/html'),
	        accessTokenInUrl()
	    ], SearchEndpoint.prototype, "getViewAsHtmlUri", null);
	    __decorate([
	        path('/values'),
	        method('POST'),
	        responseType('text')
	    ], SearchEndpoint.prototype, "batchFieldValues", null);
	    __decorate([
	        path('/values'),
	        method('POST'),
	        responseType('text')
	    ], SearchEndpoint.prototype, "listFieldValues", null);
	    __decorate([
	        path('/fields'),
	        method('GET'),
	        responseType('text')
	    ], SearchEndpoint.prototype, "listFields", null);
	    __decorate([
	        path('/extensions'),
	        method('GET'),
	        responseType('text')
	    ], SearchEndpoint.prototype, "extensions", null);
	    __decorate([
	        path('/rating'),
	        method('POST'),
	        responseType('text')
	    ], SearchEndpoint.prototype, "rateDocument", null);
	    __decorate([
	        path('/tag'),
	        method('POST'),
	        responseType('text')
	    ], SearchEndpoint.prototype, "tagDocument", null);
	    __decorate([
	        path('/querySuggest'),
	        method('GET'),
	        responseType('text')
	    ], SearchEndpoint.prototype, "getRevealQuerySuggest", null);
	    __decorate([
	        alertsPath('/subscriptions'),
	        accessTokenInUrl('accessToken'),
	        method('POST'),
	        requestDataType('application/json'),
	        responseType('text')
	    ], SearchEndpoint.prototype, "follow", null);
	    __decorate([
	        alertsPath('/subscriptions'),
	        accessTokenInUrl('accessToken'),
	        method('GET'),
	        requestDataType('application/json'),
	        responseType('text')
	    ], SearchEndpoint.prototype, "listSubscriptions", null);
	    __decorate([
	        alertsPath('/subscriptions/'),
	        accessTokenInUrl('accessToken'),
	        method('PUT'),
	        requestDataType('application/json'),
	        responseType('text')
	    ], SearchEndpoint.prototype, "updateSubscription", null);
	    __decorate([
	        alertsPath('/subscriptions/'),
	        accessTokenInUrl('accessToken'),
	        method('DELETE'),
	        requestDataType('application/json'),
	        responseType('text')
	    ], SearchEndpoint.prototype, "deleteSubscription", null);
	    __decorate([
	        path('/log'),
	        method('POST')
	    ], SearchEndpoint.prototype, "logError", null);
	    return SearchEndpoint;
	}());
	exports.SearchEndpoint = SearchEndpoint;
	/**
	 * It's taken for granted that methods using decorators have :
	 * {@link IEndpointCallOptions} as their second to last parameter
	 * {@link IEndpointCallParameters} as their last parameter
	 * The default parameters for each member of the injected {@link IEndpointCallParameters} are the following:
	 * url: '',
	 * queryString: [],
	 * requestData: {},
	 * requestDataType: undefined,
	 * method: '',
	 * responseType: '',
	 * errorsAsSuccess: false
	 */
	/**
	 * Add the base url
	 * @param path The path to append to the url
	 */
	function path(path) {
	    return function (target, key, descriptor) {
	        var originalMethod = descriptor.value;
	        var nbParams = target[key].prototype.constructor.length;
	        descriptor.value = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            var uri = this.buildBaseUri(path);
	            if (args[nbParams - 1]) {
	                args[nbParams - 1].url = uri;
	            }
	            else {
	                var params = {
	                    url: uri,
	                    queryString: [],
	                    requestData: {},
	                    method: '',
	                    responseType: '',
	                    errorsAsSuccess: false
	                };
	                args[nbParams - 1] = params;
	            }
	            var result = originalMethod.apply(this, args);
	            return result;
	        };
	        return descriptor;
	    };
	}
	/**
	 * Add the alert url
	 * @param path The path to append to the url
	 */
	function alertsPath(path) {
	    return function (target, key, descriptor) {
	        var originalMethod = descriptor.value;
	        var nbParams = target[key].prototype.constructor.length;
	        descriptor.value = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            var uri = this.buildSearchAlertsUri(path);
	            if (args[nbParams - 1]) {
	                args[nbParams - 1].url = uri;
	            }
	            else {
	                var params = {
	                    url: uri,
	                    queryString: [],
	                    requestData: {},
	                    method: '',
	                    responseType: '',
	                    errorsAsSuccess: false
	                };
	                args[nbParams - 1] = params;
	            }
	            var result = originalMethod.apply(this, args);
	            return result;
	        };
	        return descriptor;
	    };
	}
	/**
	 * Set the request data type
	 * @param type The type to set
	 */
	function requestDataType(type) {
	    return function (target, key, descriptor) {
	        var originalMethod = descriptor.value;
	        var nbParams = target[key].prototype.constructor.length;
	        descriptor.value = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            if (args[nbParams - 1]) {
	                args[nbParams - 1].requestDataType = type;
	            }
	            else {
	                var params = {
	                    url: '',
	                    queryString: [],
	                    requestData: {},
	                    requestDataType: type,
	                    method: '',
	                    responseType: '',
	                    errorsAsSuccess: false
	                };
	                args[nbParams - 1] = params;
	            }
	            var result = originalMethod.apply(this, args);
	            return result;
	        };
	        return descriptor;
	    };
	}
	/**
	 * Set the request data type
	 * @param met The type to set
	 */
	function method(met) {
	    return function (target, key, descriptor) {
	        var originalMethod = descriptor.value;
	        var nbParams = target[key].prototype.constructor.length;
	        descriptor.value = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            if (args[nbParams - 1]) {
	                args[nbParams - 1].method = met;
	            }
	            else {
	                var params = {
	                    url: '',
	                    queryString: [],
	                    requestData: {},
	                    method: met,
	                    responseType: '',
	                    errorsAsSuccess: false
	                };
	                args[nbParams - 1] = params;
	            }
	            var result = originalMethod.apply(this, args);
	            return result;
	        };
	        return descriptor;
	    };
	}
	/**
	 * Set the response type
	 * @param resp The response type to set
	 */
	function responseType(resp) {
	    return function (target, key, descriptor) {
	        var originalMethod = descriptor.value;
	        var nbParams = target[key].prototype.constructor.length;
	        descriptor.value = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            if (args[nbParams - 1]) {
	                args[nbParams - 1].responseType = resp;
	            }
	            else {
	                var params = {
	                    url: '',
	                    queryString: [],
	                    requestData: {},
	                    method: '',
	                    responseType: resp,
	                    errorsAsSuccess: false
	                };
	                args[nbParams - 1] = params;
	            }
	            var result = originalMethod.apply(this, args);
	            return result;
	        };
	        return descriptor;
	    };
	}
	/**
	 * Add the accessToken to the query string arguments
	 */
	function accessTokenInUrl(tokenKey) {
	    if (tokenKey === void 0) { tokenKey = 'access_token'; }
	    return function (target, key, descriptor) {
	        var originalMethod = descriptor.value;
	        var nbParams = target[key].prototype.constructor.length;
	        descriptor.value = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            var queryString = this.buildAccessToken(tokenKey);
	            if (args[nbParams - 1]) {
	                args[nbParams - 1].queryString = args[nbParams - 1].queryString.concat(queryString);
	            }
	            else {
	                var params = {
	                    url: '',
	                    queryString: queryString,
	                    requestData: {},
	                    method: '',
	                    responseType: '',
	                    errorsAsSuccess: false
	                };
	                args[nbParams - 1] = params;
	            }
	            var result = originalMethod.apply(this, args);
	            return result;
	        };
	        return descriptor;
	    };
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)}; true?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"=="function"&&__webpack_require__(13)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return m}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}).call(this);
	


/***/ },
/* 13 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Logger_1 = __webpack_require__(15);
	var Assert_1 = __webpack_require__(16);
	var TimeSpanUtils_1 = __webpack_require__(18);
	var DeviceUtils_1 = __webpack_require__(19);
	var Utils_1 = __webpack_require__(17);
	var es6_promise_1 = __webpack_require__(6);
	// In ie8, XMLHttpRequest has no status property, so let's use this enum instead
	var XMLHttpRequestStatus;
	(function (XMLHttpRequestStatus) {
	    XMLHttpRequestStatus[XMLHttpRequestStatus["OPENED"] = XMLHttpRequest.OPENED || 1] = "OPENED";
	    XMLHttpRequestStatus[XMLHttpRequestStatus["HEADERS_RECEIVED"] = XMLHttpRequest.HEADERS_RECEIVED || 2] = "HEADERS_RECEIVED";
	    XMLHttpRequestStatus[XMLHttpRequestStatus["DONE"] = XMLHttpRequest.DONE || 4] = "DONE";
	})(XMLHttpRequestStatus || (XMLHttpRequestStatus = {}));
	/**
	 * This class is in charge of calling an endpoint (eg: a {@link SearchEndpoint}).
	 *
	 * This means it's only uses to execute an XMLHttpRequest (for example), massage the response and check if there are errors.
	 *
	 * Will execute the call and return a Promise.
	 *
	 * Call using one of those options :
	 *
	 * * XMLHttpRequest for recent browser that support CORS, or if the endpoint is on the same origin.
	 * * XDomainRequest for older IE browser that do not support CORS.
	 * * Jsonp if all else fails, or is explicitly enabled.
	 */
	var EndpointCaller = (function () {
	    /**
	     * Create a new EndpointCaller.
	     * @param options Specify the authentication that will be used for this endpoint. Not needed if the endpoint is public and has no authentication
	     */
	    function EndpointCaller(options) {
	        if (options === void 0) { options = {}; }
	        this.options = options;
	        /**
	         * Set this property to true to enable Jsonp call to the endpoint.<br/>
	         * Be aware that jsonp is "easier" to setup endpoint wise, but has a lot of drawback and limitation for the client code.<br/>
	         * Default to false.
	         * @type {boolean}
	         */
	        this.useJsonp = false;
	        this.logger = new Logger_1.Logger(this);
	    }
	    /**
	     * Generic call to the endpoint using the provided {@link IEndpointCallParameters}.<br/>
	     * Internally, will decide which method to use to call the endpoint :<br/>
	     * -- XMLHttpRequest for recent browser that support CORS, or if the endpoint is on the same origin.<br/>
	     * -- XDomainRequest for older IE browser that do not support CORS.<br/>
	     * -- Jsonp if all else fails, or is explicitly enabled.
	     * @param params The parameters to use for the call
	     * @returns {any} A promise of the given type
	     */
	    EndpointCaller.prototype.call = function (params) {
	        var requestInfo = {
	            url: params.url,
	            queryString: params.errorsAsSuccess ? params.queryString.concat(['errorsAsSuccess=1']) : params.queryString,
	            requestData: params.requestData,
	            requestDataType: params.requestDataType || 'application/x-www-form-urlencoded; charset="UTF-8"',
	            begun: new Date(),
	            method: params.method
	        };
	        requestInfo.headers = this.buildRequestHeaders(requestInfo);
	        if (_.isFunction(this.options.requestModifier)) {
	            requestInfo = this.options.requestModifier(requestInfo);
	        }
	        this.logger.trace('Performing REST request', requestInfo);
	        var urlObject = this.parseURL(requestInfo.url);
	        // In IE8, hostname and port return "" when we are on the same domain.
	        var isLocalHost = (window.location.hostname === urlObject.hostname) || (urlObject.hostname === '');
	        var currentPort = (window.location.port != '' ? window.location.port : (window.location.protocol == 'https:' ? '443' : '80'));
	        var isSamePort = currentPort == urlObject.port;
	        var isCrossOrigin = !(isLocalHost && isSamePort);
	        if (!this.useJsonp) {
	            if (this.isCORSSupported() || !isCrossOrigin) {
	                return this.callUsingXMLHttpRequest(requestInfo, params.responseType);
	            }
	            else if (this.isXDomainRequestSupported()) {
	                return this.callUsingXDomainRequest(requestInfo);
	            }
	            else {
	                return this.callUsingAjaxJsonP(requestInfo);
	            }
	        }
	        else {
	            return this.callUsingAjaxJsonP(requestInfo);
	        }
	    };
	    /**
	     * Call the endpoint using XMLHttpRequest. Used internally by {@link EndpointCaller.call}.<br/>
	     * Will try internally to handle error if it can.<br/>
	     * Promise will otherwise fail with the error type.
	     * @param requestInfo The info about the request
	     * @param responseType The responseType. Default to text. https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
	     * @returns {Promise<T>|Promise}
	     */
	    EndpointCaller.prototype.callUsingXMLHttpRequest = function (requestInfo, responseType) {
	        var _this = this;
	        if (responseType === void 0) { responseType = 'text'; }
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            var xmlHttpRequest = new XMLHttpRequest();
	            // Beware, most stuff must be set on the event that says the request is OPENED.
	            // Otherwise it'll bork on some browsers. Gotta love standards.
	            // This sent variable allowed to remove the second call of onreadystatechange with the state OPENED in IE11
	            var sent = false;
	            xmlHttpRequest.onreadystatechange = function (ev) {
	                if (xmlHttpRequest.readyState == XMLHttpRequestStatus.OPENED && !sent) {
	                    sent = true;
	                    xmlHttpRequest.withCredentials = true;
	                    _.each(requestInfo.headers, function (headerValue, headerKey) {
	                        xmlHttpRequest.setRequestHeader(headerKey, headerValue);
	                    });
	                    if (requestInfo.method == 'GET') {
	                        xmlHttpRequest.send();
	                    }
	                    else if (requestInfo.requestDataType.indexOf('application/json') === 0) {
	                        xmlHttpRequest.send(JSON.stringify(requestInfo.requestData));
	                    }
	                    else {
	                        xmlHttpRequest.send(_this.convertJsonToFormBody(requestInfo.requestData));
	                    }
	                }
	                else if (xmlHttpRequest.readyState == XMLHttpRequestStatus.HEADERS_RECEIVED) {
	                    var status = xmlHttpRequest.status;
	                    if (_this.isSuccessHttpStatus(status)) {
	                        xmlHttpRequest.responseType = responseType;
	                    }
	                    else {
	                        xmlHttpRequest.responseType = 'text';
	                    }
	                }
	                else if (xmlHttpRequest.readyState == XMLHttpRequestStatus.DONE) {
	                    var status = xmlHttpRequest.status;
	                    var data;
	                    switch (responseType) {
	                        case 'json':
	                            data = xmlHttpRequest.response;
	                            // Work around a bug in IE11 where responseType jsonis not supported : the response comes back as a plain string
	                            // Force the json parse manually
	                            if (responseType == 'json' && DeviceUtils_1.DeviceUtils.getDeviceName() == 'IE') {
	                                try {
	                                    data = JSON.parse(data);
	                                }
	                                catch (e) {
	                                }
	                            }
	                            break;
	                        case 'text':
	                            data = _this.tryParseResponseText(xmlHttpRequest.responseText, xmlHttpRequest.getResponseHeader('Content-Type'));
	                            break;
	                        default:
	                            data = xmlHttpRequest.response;
	                            break;
	                    }
	                    if (data == undefined) {
	                        data = _this.tryParseResponseText(xmlHttpRequest.responseText, xmlHttpRequest.getResponseHeader('Content-Type'));
	                    }
	                    if (_this.isSuccessHttpStatus(status)) {
	                        _this.handleSuccessfulResponseThatMightBeAnError(requestInfo, data, resolve, reject);
	                    }
	                    else {
	                        _this.handleError(requestInfo, xmlHttpRequest.status, data, reject);
	                    }
	                }
	            };
	            var queryString = requestInfo.queryString;
	            if (requestInfo.method == 'GET') {
	                queryString = queryString.concat(_this.convertJsonToQueryString(requestInfo.requestData));
	            }
	            xmlHttpRequest.open(requestInfo.method, _this.combineUrlAndQueryString(requestInfo.url, queryString));
	        });
	    };
	    /**
	     * Call the endpoint using XDomainRequest https://msdn.microsoft.com/en-us/library/cc288060(v=vs.85).aspx<br/>
	     * Used for IE8/9
	     * @param requestInfo The info about the request
	     * @returns {Promise<T>|Promise}
	     */
	    EndpointCaller.prototype.callUsingXDomainRequest = function (requestInfo) {
	        var _this = this;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            var queryString = requestInfo.queryString.concat([]);
	            // XDomainRequest don't support including stuff in the header, so we must
	            // put the access token in the query string if we have one.
	            if (_this.options.accessToken) {
	                queryString.push('access_token=' + encodeURIComponent(_this.options.accessToken));
	            }
	            var xDomainRequest = new XDomainRequest();
	            if (requestInfo.method == 'GET') {
	                queryString = queryString.concat(_this.convertJsonToQueryString(requestInfo.requestData));
	            }
	            xDomainRequest.open(requestInfo.method, _this.combineUrlAndQueryString(requestInfo.url, queryString));
	            xDomainRequest.onload = function () {
	                var data = _this.tryParseResponseText(xDomainRequest.responseText, xDomainRequest.contentType);
	                _this.handleSuccessfulResponseThatMightBeAnError(requestInfo, data, resolve, reject);
	            };
	            xDomainRequest.onerror = function () {
	                var data = _this.tryParseResponseText(xDomainRequest.responseText, xDomainRequest.contentType);
	                _this.handleError(requestInfo, 0, data, reject);
	            };
	            // We must set those functions otherwise it will sometime fail in IE
	            xDomainRequest.ontimeout = function () { return _this.logger.error('Request timeout', xDomainRequest, requestInfo.requestData); };
	            xDomainRequest.onprogress = function () { return _this.logger.trace('Request progress', xDomainRequest, requestInfo.requestData); };
	            // We must open the request in a separate thread, for obscure reasons
	            _.defer(function () {
	                if (requestInfo.method == 'GET') {
	                    xDomainRequest.send();
	                }
	                else {
	                    xDomainRequest.send(_this.convertJsonToFormBody(requestInfo.requestData));
	                }
	            });
	        });
	    };
	    /**
	     * Call the endpoint using Jsonp https://en.wikipedia.org/wiki/JSONP<br/>
	     * Should be used for dev only, or for very special setup as using jsonp has a lot of drawbacks.
	     * @param requestInfo The info about the request
	     * @returns {Promise<T>|Promise}
	     */
	    EndpointCaller.prototype.callUsingAjaxJsonP = function (requestInfo) {
	        var _this = this;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            var queryString = requestInfo.queryString.concat(_this.convertJsonToQueryString(requestInfo.requestData));
	            // JSONP don't support including stuff in the header, so we must
	            // put the access token in the query string if we have one.
	            if (_this.options.accessToken) {
	                queryString.push('access_token=' + encodeURIComponent(_this.options.accessToken));
	            }
	            queryString.push('callback=?');
	            $['jsonp']({
	                url: _this.combineUrlAndQueryString(requestInfo.url, queryString),
	                success: function (data) { return _this.handleSuccessfulResponseThatMightBeAnError(requestInfo, data, resolve, reject); },
	                error: function () { return _this.handleError(requestInfo, 0, undefined, reject); }
	            });
	        });
	    };
	    EndpointCaller.prototype.parseURL = function (url) {
	        var urlObject = document.createElement('a');
	        urlObject.href = url;
	        return urlObject;
	    };
	    EndpointCaller.prototype.convertJsonToQueryString = function (json) {
	        Assert_1.Assert.exists(json);
	        var result = [];
	        _.each(json, function (value, key) {
	            if (value != null) {
	                if (_.isObject(value)) {
	                    result.push(key + '=' + encodeURIComponent(JSON.stringify(value)));
	                }
	                else {
	                    result.push(key + '=' + encodeURIComponent(value.toString()));
	                }
	            }
	        });
	        return result;
	    };
	    EndpointCaller.prototype.convertJsonToFormBody = function (json) {
	        return this.convertJsonToQueryString(json).join('&');
	    };
	    EndpointCaller.prototype.handleSuccessfulResponseThatMightBeAnError = function (requestInfo, data, success, error) {
	        if (this.isErrorResponseBody(data)) {
	            this.handleError(requestInfo, data.statusCode, data, error);
	        }
	        else {
	            this.handleSuccess(requestInfo, data, success);
	        }
	    };
	    EndpointCaller.prototype.handleSuccess = function (requestInfo, data, success) {
	        var querySuccess = {
	            duration: TimeSpanUtils_1.TimeSpan.fromDates(requestInfo.begun, new Date()).getMilliseconds(),
	            data: data
	        };
	        this.logger.trace('REST request successful', data, requestInfo);
	        success(querySuccess);
	    };
	    EndpointCaller.prototype.handleError = function (requestInfo, status, data, error) {
	        var queryError = {
	            statusCode: status,
	            data: data
	        };
	        this.logger.error('REST request failed', status, data, requestInfo);
	        error(queryError);
	    };
	    EndpointCaller.prototype.combineUrlAndQueryString = function (url, queryString) {
	        var questionMark = '?';
	        if (url.match(/\?$/)) {
	            questionMark = '';
	        }
	        return url + (queryString.length > 0 ? questionMark + queryString.join('&') : '');
	    };
	    EndpointCaller.prototype.isXDomainRequestSupported = function () {
	        return 'XDomainRequest' in window;
	    };
	    EndpointCaller.prototype.isCORSSupported = function () {
	        return 'withCredentials' in new XMLHttpRequest();
	    };
	    EndpointCaller.prototype.isSuccessHttpStatus = function (status) {
	        return status >= 200 && status < 300 || status === 304;
	    };
	    EndpointCaller.prototype.tryParseResponseText = function (json, contentType) {
	        if (contentType != null && contentType.indexOf('application/json') != -1) {
	            if (Utils_1.Utils.isNonEmptyString(json)) {
	                try {
	                    return JSON.parse(json);
	                }
	                catch (ex) {
	                    return undefined;
	                }
	            }
	            else {
	                return undefined;
	            }
	        }
	        else {
	            return json;
	        }
	    };
	    EndpointCaller.prototype.isErrorResponseBody = function (data) {
	        if (data && data.statusCode) {
	            return !this.isSuccessHttpStatus(data.statusCode);
	        }
	        else {
	            return false;
	        }
	    };
	    EndpointCaller.prototype.buildRequestHeaders = function (requestInfo) {
	        var headers = {};
	        if (this.options.accessToken) {
	            headers['Authorization'] = "Bearer " + this.options.accessToken;
	        }
	        else if (this.options.username && this.options.password) {
	            headers['Authorization'] = "Basic " + btoa(this.options.username + ':' + this.options.password);
	        }
	        if (requestInfo.method == 'GET') {
	            return headers;
	        }
	        if (requestInfo.requestDataType.indexOf('application/json') === 0) {
	            headers['Content-Type'] = 'application/json; charset="UTF-8"';
	        }
	        else {
	            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset="UTF-8"';
	        }
	        return headers;
	    };
	    return EndpointCaller;
	}());
	exports.EndpointCaller = EndpointCaller;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	// Ensure that we're not going to get console is undefined error in IE8-9
	if (!window['console']) {
	    console = {
	        log: function () {
	        },
	        debug: function () {
	        },
	        info: function () {
	        },
	        warn: function () {
	        },
	        error: function () {
	        },
	        assert: function () {
	        },
	        clear: function () {
	        },
	        count: function () {
	        },
	        dir: function () {
	        },
	        dirxml: function () {
	        },
	        group: function () {
	        },
	        groupCollapsed: function () {
	        },
	        groupEnd: function () {
	        },
	        msIsIndependentlyComposed: function (element) {
	        },
	        profile: function () {
	        },
	        profileEnd: function () {
	        },
	        select: function () {
	        },
	        time: function () {
	        },
	        timeEnd: function () {
	        },
	        trace: function () {
	        }
	    };
	}
	var Logger = (function () {
	    function Logger(owner) {
	        this.owner = owner;
	    }
	    Logger.prototype.trace = function () {
	        var stuff = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            stuff[_i - 0] = arguments[_i];
	        }
	        if (Logger.level <= Logger.TRACE) {
	            this.log('TRACE', stuff);
	        }
	    };
	    Logger.prototype.debug = function () {
	        var stuff = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            stuff[_i - 0] = arguments[_i];
	        }
	        if (Logger.level <= Logger.DEBUG) {
	            this.log('DEBUG', stuff);
	        }
	    };
	    Logger.prototype.info = function () {
	        var stuff = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            stuff[_i - 0] = arguments[_i];
	        }
	        if (Logger.level <= Logger.INFO) {
	            this.log('INFO', stuff);
	        }
	    };
	    Logger.prototype.warn = function () {
	        var stuff = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            stuff[_i - 0] = arguments[_i];
	        }
	        if (Logger.level <= Logger.WARN) {
	            this.log('WARN', stuff);
	        }
	    };
	    Logger.prototype.error = function () {
	        var stuff = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            stuff[_i - 0] = arguments[_i];
	        }
	        if (Logger.level <= Logger.ERROR) {
	            this.log('ERROR', stuff);
	        }
	    };
	    Logger.prototype.log = function (level, stuff) {
	        if (window['console'] && console.log) {
	            console.log([level, this.owner].concat(stuff));
	            if (Logger.executionTime) {
	                console.timeEnd('Execution time');
	                console.time('Execution time');
	            }
	        }
	    };
	    Logger.enable = function () {
	        Logger.level = Logger.TRACE;
	    };
	    Logger.disable = function () {
	        Logger.level = Logger.NOTHING;
	    };
	    Logger.TRACE = 1;
	    Logger.DEBUG = 2;
	    Logger.INFO = 3;
	    Logger.WARN = 4;
	    Logger.ERROR = 5;
	    Logger.NOTHING = 6;
	    Logger.level = Logger.INFO;
	    Logger.executionTime = false;
	    return Logger;
	}());
	exports.Logger = Logger;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Logger_1 = __webpack_require__(15);
	var Utils_1 = __webpack_require__(17);
	var Assert = (function () {
	    function Assert() {
	    }
	    Assert.fail = function (message) {
	        Assert.failureHandler(message);
	    };
	    Assert.check = function (condition, message) {
	        if (!condition) {
	            Assert.fail(message);
	        }
	    };
	    Assert.isUndefined = function (obj) {
	        Assert.check(Utils_1.Utils.isUndefined(obj), 'Value should be undefined.');
	    };
	    Assert.isNotUndefined = function (obj) {
	        Assert.check(!Utils_1.Utils.isUndefined(obj), 'Value should not be undefined.');
	    };
	    Assert.isNull = function (obj) {
	        Assert.check(Utils_1.Utils.isNull(obj), 'Value should be null.');
	    };
	    Assert.isNotNull = function (obj) {
	        Assert.check(!Utils_1.Utils.isNull(obj), 'Value should not be null.');
	    };
	    Assert.exists = function (obj) {
	        Assert.check(!Utils_1.Utils.isNullOrUndefined(obj), 'Value should not be null or undefined');
	    };
	    Assert.doesNotExists = function (obj) {
	        Assert.check(Utils_1.Utils.isNullOrUndefined(obj), 'Value should be null or undefined');
	    };
	    Assert.isString = function (obj) {
	        Assert.check(_.isString(obj), 'Value should be a string.');
	    };
	    Assert.stringStartsWith = function (str, start) {
	        Assert.isNonEmptyString(str);
	        Assert.isNonEmptyString(start);
	        Assert.check(str.indexOf(start) == 0, 'Value should start with ' + start);
	    };
	    Assert.isNonEmptyString = function (str) {
	        Assert.check(Utils_1.Utils.isNonEmptyString(str), 'Value should be a non-empty string.');
	    };
	    Assert.isNumber = function (obj) {
	        Assert.check(_.isNumber(obj), 'Value should be a number.');
	    };
	    Assert.isLargerThan = function (expected, actual) {
	        Assert.check(actual > expected, 'Value ' + actual + ' should be larger than ' + expected);
	    };
	    Assert.isLargerOrEqualsThan = function (expected, actual) {
	        Assert.check(actual >= expected, 'Value ' + actual + ' should be larger or equal than ' + expected);
	    };
	    Assert.isSmallerThan = function (expected, actual) {
	        Assert.check(actual < expected, 'Value ' + actual + ' should be smaller than ' + expected);
	    };
	    Assert.isSmallerOrEqualsThan = function (expected, actual) {
	        Assert.check(actual <= expected, 'Value ' + actual + ' should be smaller or equal than ' + expected);
	    };
	    Assert.logger = new Logger_1.Logger('Assert');
	    Assert.failureHandler = function (message) {
	        Assert.logger.error('Assertion Failed!', message);
	        if (window['console'] && console.trace) {
	            console.trace();
	        }
	        if (Utils_1.Utils.isNonEmptyString(message)) {
	            throw new PreconditionFailedException(message);
	        }
	        else {
	            throw new PreconditionFailedException('Assertion Failed!');
	        }
	    };
	    return Assert;
	}());
	exports.Assert = Assert;
	var PreconditionFailedException = (function () {
	    function PreconditionFailedException(message) {
	        this.message = message;
	    }
	    PreconditionFailedException.prototype.toString = function () {
	        return this.message;
	    };
	    return PreconditionFailedException;
	}());
	exports.PreconditionFailedException = PreconditionFailedException;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var isCoveoFieldRegex = /^@[a-zA-Z0-9_\.]+$/;
	var Utils = (function () {
	    function Utils() {
	    }
	    Utils.isUndefined = function (obj) {
	        return typeof obj == 'undefined';
	    };
	    Utils.isNull = function (obj) {
	        return obj === null;
	    };
	    Utils.isNullOrUndefined = function (obj) {
	        return Utils.isUndefined(obj) || Utils.isNull(obj);
	    };
	    Utils.exists = function (obj) {
	        return !Utils.isNullOrUndefined(obj);
	    };
	    Utils.toNotNullString = function (str) {
	        return _.isString(str) ? str : '';
	    };
	    Utils.anyTypeToString = function (value) {
	        return value ? value.toString() : '';
	    };
	    Utils.isNullOrEmptyString = function (str) {
	        return Utils.isNullOrUndefined(str) || !Utils.isNonEmptyString(str);
	    };
	    Utils.isNonEmptyString = function (str) {
	        return _.isString(str) && str !== '';
	    };
	    Utils.isEmptyString = function (str) {
	        return !Utils.isNonEmptyString(str);
	    };
	    Utils.stringStartsWith = function (str, startWith) {
	        return str.slice(0, startWith.length) == startWith;
	    };
	    Utils.isNonEmptyArray = function (obj) {
	        return _.isArray(obj) && obj.length > 0;
	    };
	    Utils.isEmptyArray = function (obj) {
	        return !Utils.isNonEmptyArray(obj);
	    };
	    Utils.isHtmlElement = function (obj) {
	        if (window['HTMLElement'] != undefined) {
	            return obj instanceof HTMLElement;
	        }
	        else {
	            return obj && obj.nodeType && obj.nodeType == 1;
	        }
	    };
	    Utils.parseIntIfNotUndefined = function (str) {
	        if (Utils.isNonEmptyString(str)) {
	            return parseInt(str, 10);
	        }
	        else {
	            return undefined;
	        }
	    };
	    Utils.parseFloatIfNotUndefined = function (str) {
	        if (Utils.isNonEmptyString(str)) {
	            return parseFloat(str);
	        }
	        else {
	            return undefined;
	        }
	    };
	    Utils.round = function (num, decimals) {
	        return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
	    };
	    Utils.parseBooleanIfNotUndefined = function (str) {
	        if (Utils.isNonEmptyString(str)) {
	            switch (str.toLowerCase()) {
	                case 'true':
	                case '1':
	                case 'yes':
	                    return true;
	                case 'false':
	                case '0':
	                case 'no':
	                    return false;
	                default:
	                    return undefined;
	            }
	        }
	        else {
	            return undefined;
	        }
	    };
	    Utils.trim = function (value) {
	        if (value == null) {
	            return null;
	        }
	        return value.replace(/^\s+|\s+$/g, '');
	    };
	    Utils.encodeHTMLEntities = function (rawStr) {
	        var ret = [];
	        for (var i = rawStr.length - 1; i >= 0; i--) {
	            if (/^[a-z0-9]/i.test(rawStr[i])) {
	                ret.unshift(rawStr[i]);
	            }
	            else {
	                ret.unshift(['&#', rawStr.charCodeAt(i), ';'].join(''));
	            }
	        }
	        return ret.join('');
	    };
	    Utils.decodeHTMLEntities = function (rawString) {
	        return rawString.replace(/&#(\d+);/g, function (match, dec) {
	            return String.fromCharCode(dec);
	        });
	    };
	    Utils.arrayEqual = function (array1, array2, sameOrder) {
	        if (sameOrder === void 0) { sameOrder = true; }
	        if (sameOrder) {
	            return _.isEqual(array1, array2);
	        }
	        else {
	            var arrays_1 = [array1, array2];
	            return _.all(arrays_1, function (array) {
	                return array.length == arrays_1[0].length && _.difference(array, arrays_1[0]).length == 0;
	            });
	        }
	    };
	    Utils.objectEqual = function (obj1, obj2) {
	        return _.isEqual(obj1, obj2);
	    };
	    Utils.isCoveoField = function (field) {
	        return isCoveoFieldRegex.test(field);
	    };
	    Utils.escapeRegexCharacter = function (str) {
	        var ret = str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	        return ret;
	    };
	    Utils.getCaseInsensitiveProperty = function (object, name) {
	        // First try using a fast case-sensitive lookup
	        var value = object[name];
	        // Then try a fast case-sensitive lookup with lowercase name
	        if (value == null) {
	            var lowerCaseName_1 = name.toLowerCase();
	            value = object[lowerCaseName_1];
	            // Then try a slow scanning of all the properties
	            if (value == null) {
	                var matchingKey = _.find(_.keys(object), function (key) { return key.toLowerCase() == lowerCaseName_1; });
	                if (matchingKey != null) {
	                    value = object[matchingKey];
	                }
	            }
	        }
	        return value;
	    };
	    Utils.getFieldValue = function (result, name) {
	        // Be as forgiving as possible about the field name, since we expect
	        // user provided values.
	        if (name == null) {
	            return undefined;
	        }
	        name = Utils.trim(name);
	        if (name[0] == '@') {
	            name = name.substr(1);
	        }
	        if (name == '') {
	            return undefined;
	        }
	        // At this point the name should be well formed
	        if (!Utils.isCoveoField('@' + name)) {
	            throw "Not a valid field : " + name;
	        }
	        // Handle namespace field values of the form sf.Foo.Bar
	        var parts = name.split('.').reverse();
	        var obj = result.raw;
	        while (parts.length > 1) {
	            obj = Utils.getCaseInsensitiveProperty(obj, parts.pop());
	            if (Utils.isUndefined(obj)) {
	                return undefined;
	            }
	        }
	        var value = Utils.getCaseInsensitiveProperty(obj, parts[0]);
	        // If still nothing, look at the root of the result
	        if (value == null) {
	            value = Utils.getCaseInsensitiveProperty(result, name);
	        }
	        return value;
	    };
	    Utils.throttle = function (func, wait, options, context, args) {
	        if (options === void 0) { options = {}; }
	        var result;
	        var timeout = null;
	        var previous = 0;
	        var later = function () {
	            previous = options.leading === false ? 0 : new Date().getTime();
	            timeout = null;
	            result = func.apply(context, args);
	        };
	        return function () {
	            var now = new Date().getTime();
	            if (!previous && options.leading === false) {
	                previous = now;
	            }
	            var remaining = wait - (now - previous);
	            context = this;
	            args = arguments;
	            if (remaining <= 0) {
	                clearTimeout(timeout);
	                timeout = null;
	                previous = now;
	                result = func.apply(context, args);
	            }
	            else if (!timeout && options.trailing !== false) {
	                timeout = setTimeout(later, remaining);
	            }
	            return result;
	        };
	    };
	    Utils.extendDeep = function (target, src) {
	        if (!target) {
	            target = {};
	        }
	        var isArray = _.isArray(src);
	        var toReturn = isArray && [] || {};
	        if (isArray) {
	            target = target || [];
	            toReturn = toReturn['concat'](target);
	            _.each(src, function (e, i, obj) {
	                if (typeof target[i] === 'undefined') {
	                    toReturn[i] = e;
	                }
	                else if (typeof e === 'object') {
	                    toReturn[i] = Utils.extendDeep(target[i], e);
	                }
	                else {
	                    if (target.indexOf(e) === -1) {
	                        toReturn['push'](e);
	                    }
	                }
	            });
	        }
	        else {
	            if (target && typeof target === 'object') {
	                _.each(_.keys(target), function (key) {
	                    toReturn[key] = target[key];
	                });
	            }
	            _.each(_.keys(src), function (key) {
	                if (typeof src[key] !== 'object' || !src[key]) {
	                    toReturn[key] = src[key];
	                }
	                else {
	                    if (!target[key]) {
	                        toReturn[key] = src[key];
	                    }
	                    else {
	                        toReturn[key] = Utils.extendDeep(target[key], src[key]);
	                    }
	                }
	            });
	        }
	        return toReturn;
	    };
	    Utils.getQueryStringValue = function (key, queryString) {
	        if (queryString === void 0) { queryString = window.location.search; }
	        return queryString.replace(new RegExp('^(?:.*[&\\?]' + key.replace(/[\.\+\*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1');
	    };
	    Utils.isValidUrl = function (str) {
	        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
	        return regexp.test(str);
	    };
	    Utils.debounce = function (func, wait) {
	        var timeout;
	        var stackTraceTimeout;
	        return function () {
	            var _this = this;
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            if (timeout == null) {
	                timeout = setTimeout(function () {
	                    timeout = null;
	                }, wait);
	                stackTraceTimeout = setTimeout(function () {
	                    func.apply(_this, args);
	                    stackTraceTimeout = null;
	                });
	            }
	            else if (stackTraceTimeout == null) {
	                clearTimeout(timeout);
	                timeout = setTimeout(function () {
	                    func.apply(_this, args);
	                    timeout = null;
	                }, wait);
	            }
	        };
	    };
	    Utils.readCookie = function (name) {
	        var nameEQ = name + '=';
	        var ca = document.cookie.split(';');
	        for (var i = 0; i < ca.length; i++) {
	            var c = ca[i];
	            while (c.charAt(0) == ' ') {
	                c = c.substring(1, c.length);
	            }
	            if (c.indexOf(nameEQ) == 0) {
	                return c.substring(nameEQ.length, c.length);
	            }
	        }
	        return null;
	    };
	    Utils.toDashCase = function (camelCased) {
	        return camelCased.replace(/([a-z][A-Z])/g, function (g) { return g[0] + '-' + g[1].toLowerCase(); });
	    };
	    // Based on http://stackoverflow.com/a/8412989
	    Utils.parseXml = function (xml) {
	        if (typeof DOMParser != 'undefined') {
	            return (new DOMParser()).parseFromString(xml, 'text/xml');
	        }
	        else if (typeof ActiveXObject != 'undefined' && new ActiveXObject('Microsoft.XMLDOM')) {
	            var xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
	            xmlDoc.async = 'false';
	            xmlDoc.loadXML(xml);
	            return xmlDoc;
	        }
	        else {
	            throw new Error('No XML parser found');
	        }
	    };
	    Utils.copyObject = function (target, src) {
	        var _this = this;
	        _.each(_.keys(src), function (key) {
	            if (typeof src[key] !== 'object' || !src[key]) {
	                target[key] = src[key];
	            }
	            else if (!target[key]) {
	                target[key] = src[key];
	            }
	            else {
	                _this.copyObject(target[key], src[key]);
	            }
	        });
	    };
	    Utils.copyObjectAttributes = function (target, src, attributes) {
	        var _this = this;
	        _.each(_.keys(src), function (key) {
	            if (_.contains(attributes, key)) {
	                if (typeof src[key] !== 'object' || !src[key]) {
	                    target[key] = src[key];
	                }
	                else if (!target[key]) {
	                    target[key] = src[key];
	                }
	                else {
	                    _this.copyObject(target[key], src[key]);
	                }
	            }
	        });
	    };
	    return Utils;
	}());
	exports.Utils = Utils;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Assert_1 = __webpack_require__(16);
	var TimeSpan = (function () {
	    function TimeSpan(time, isMilliseconds) {
	        if (isMilliseconds === void 0) { isMilliseconds = true; }
	        if (isMilliseconds) {
	            this.milliseconds = time;
	        }
	        else {
	            this.milliseconds = time * 1000;
	        }
	    }
	    TimeSpan.prototype.getMilliseconds = function () {
	        return this.milliseconds;
	    };
	    TimeSpan.prototype.getSeconds = function () {
	        return this.getMilliseconds() / 1000;
	    };
	    TimeSpan.prototype.getMinutes = function () {
	        return this.getSeconds() / 60;
	    };
	    TimeSpan.prototype.getHours = function () {
	        return this.getMinutes() / 60;
	    };
	    TimeSpan.prototype.getDays = function () {
	        return this.getHours() / 24;
	    };
	    TimeSpan.prototype.getWeeks = function () {
	        return this.getDays() / 7;
	    };
	    TimeSpan.prototype.getHHMMSS = function () {
	        var hours = Math.floor(this.getHours());
	        var minutes = Math.floor(this.getMinutes()) % 60;
	        var seconds = Math.floor(this.getSeconds()) % 60;
	        var hoursString, minutesString, secondsString;
	        if (hours == 0) {
	            hoursString = '';
	        }
	        else {
	            hoursString = hours < 10 ? '0' + hours.toString() : hours.toString();
	        }
	        minutesString = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
	        secondsString = seconds < 10 ? '0' + seconds.toString() : seconds.toString();
	        var hhmmss = (hoursString != '' ? hoursString + ':' : '') + minutesString + ':' + secondsString;
	        return hhmmss;
	    };
	    TimeSpan.fromDates = function (from, to) {
	        Assert_1.Assert.exists(from);
	        Assert_1.Assert.exists(to);
	        return new TimeSpan(to.valueOf() - from.valueOf());
	    };
	    return TimeSpan;
	}());
	exports.TimeSpan = TimeSpan;


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	// Not sure about this : In year 2033 who's to say that this list won't be 50 pages long !
	var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	var DeviceUtils = (function () {
	    function DeviceUtils() {
	    }
	    DeviceUtils.getDeviceName = function () {
	        var userAgent = navigator.userAgent;
	        if (userAgent.match(/Android/i)) {
	            return 'Android';
	        }
	        if (userAgent.match(/BlackBerry/i)) {
	            return 'BlackBerry';
	        }
	        if (userAgent.match(/iPhone/i)) {
	            return 'iPhone';
	        }
	        if (userAgent.match(/iPad/i)) {
	            return 'iPad';
	        }
	        if (userAgent.match(/iPod/i)) {
	            return 'iPod';
	        }
	        if (userAgent.match(/Opera Mini/i)) {
	            return 'Opera Mini';
	        }
	        if (userAgent.match(/IEMobile/i)) {
	            return 'IE Mobile';
	        }
	        if (userAgent.match(/Chrome/i)) {
	            return 'Chrome';
	        }
	        if (userAgent.match(/MSIE/i) || userAgent.match(/Trident/i)) {
	            return 'IE';
	        }
	        if (userAgent.match(/Opera/i)) {
	            return 'Opera';
	        }
	        if (userAgent.match(/Firefox/i)) {
	            return 'Firefox';
	        }
	        if (userAgent.match(/Safari/i)) {
	            return 'Safari';
	        }
	        return 'Others';
	    };
	    DeviceUtils.isAndroid = function () {
	        return DeviceUtils.getDeviceName() == 'Android';
	    };
	    DeviceUtils.isIos = function () {
	        var deviceName = DeviceUtils.getDeviceName();
	        return deviceName == 'iPhone' || deviceName == 'iPad' || deviceName == 'iPod';
	    };
	    DeviceUtils.isIE8or9 = function () {
	        var myNav = navigator.userAgent.toLowerCase();
	        if (myNav.indexOf('msie') == -1) {
	            return false;
	        }
	        return parseInt(myNav.split('msie')[1]) < 10;
	    };
	    DeviceUtils.isMobileDevice = function () {
	        return mobile;
	    };
	    DeviceUtils.isSmallScreenWidth = function () {
	        if (window['clientWidth'] != null && window['clientWidth'] <= 480) {
	            return true;
	        }
	        return document.body.clientWidth <= 480;
	    };
	    DeviceUtils.isSmallScreenHeight = function () {
	        return document.body.clientHeight <= 640;
	    };
	    return DeviceUtils;
	}());
	exports.DeviceUtils = DeviceUtils;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Assert_1 = __webpack_require__(16);
	var AjaxError = (function () {
	    function AjaxError(message, status) {
	        this.message = message;
	        this.status = status;
	        Assert_1.Assert.exists(message);
	        Assert_1.Assert.exists(status);
	        this.name = this.type = 'Ajax Error (status: ' + status + ')';
	    }
	    return AjaxError;
	}());
	exports.AjaxError = AjaxError;


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	var MissingAuthenticationError = (function () {
	    function MissingAuthenticationError(provider) {
	        this.provider = provider;
	        this.isMissingAuthentication = true;
	        this.name = this.type = this.message = "Missing Authentication (provider: " + provider + ")";
	    }
	    return MissingAuthenticationError;
	}());
	exports.MissingAuthenticationError = MissingAuthenticationError;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Assert_1 = __webpack_require__(16);
	var Utils_1 = __webpack_require__(17);
	var QueryUtils = (function () {
	    function QueryUtils() {
	    }
	    QueryUtils.createGuid = function () {
	        return (typeof (crypto) != 'undefined' && typeof (crypto.getRandomValues) != 'undefined') ? QueryUtils.generateWithCrypto() : QueryUtils.generateWithRandom();
	    };
	    // This method is a fallback as it's generate a lot of collisions in Chrome.
	    QueryUtils.generateWithRandom = function () {
	        // http://stackoverflow.com/a/2117523
	        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	            return v.toString(16);
	        });
	    };
	    QueryUtils.generateWithCrypto = function () {
	        var buf = new Uint16Array(8);
	        crypto.getRandomValues(buf);
	        var S4 = function (num) {
	            var ret = num.toString(16);
	            while (ret.length < 4) {
	                ret = '0' + ret;
	            }
	            return ret;
	        };
	        return (S4(buf[0]) + S4(buf[1]) + '-' + S4(buf[2]) + '-' + S4(buf[3]) + '-' + S4(buf[4]) + '-' + S4(buf[5]) + S4(buf[6]) + S4(buf[7]));
	    };
	    QueryUtils.setStateObjectOnQueryResults = function (state, results) {
	        QueryUtils.setPropertyOnResults(results, 'state', state);
	    };
	    QueryUtils.setStateObjectOnQueryResult = function (state, result) {
	        QueryUtils.setPropertyOnResult(result, 'state', state);
	    };
	    QueryUtils.setIndexAndUidOnQueryResults = function (query, results, queryUid, pipeline, splitTestRun) {
	        Assert_1.Assert.exists(query);
	        Assert_1.Assert.exists(results);
	        var index = query.firstResult;
	        QueryUtils.setPropertyOnResults(results, 'queryUid', queryUid);
	        QueryUtils.setPropertyOnResults(results, 'pipeline', pipeline);
	        QueryUtils.setPropertyOnResults(results, 'splitTestRun', splitTestRun);
	        QueryUtils.setPropertyOnResults(results, 'index', index, function () { return ++index; });
	    };
	    QueryUtils.setTermsToHighlightOnQueryResults = function (query, results) {
	        QueryUtils.setPropertyOnResults(results, 'termsToHighlight', results.termsToHighlight);
	        QueryUtils.setPropertyOnResults(results, 'phrasesToHighlight', results.phrasesToHighlight);
	    };
	    QueryUtils.splitFlags = function (flags, delimiter) {
	        if (delimiter === void 0) { delimiter = ';'; }
	        Assert_1.Assert.exists(flags);
	        return flags.split(delimiter);
	    };
	    QueryUtils.isAttachment = function (result) {
	        return _.contains(QueryUtils.splitFlags(result.flags), 'IsAttachment');
	    };
	    QueryUtils.containsAttachment = function (result) {
	        return _.contains(QueryUtils.splitFlags(result.flags), 'ContainsAttachment');
	    };
	    QueryUtils.hasHTMLVersion = function (result) {
	        return _.contains(QueryUtils.splitFlags(result.flags), 'HasHtmlVersion');
	    };
	    QueryUtils.hasThumbnail = function (result) {
	        return _.contains(QueryUtils.splitFlags(result.flags), 'HasThumbnail');
	    };
	    QueryUtils.hasExcerpt = function (result) {
	        return result.excerpt != undefined && result.excerpt != '';
	    };
	    QueryUtils.quoteAndEscapeIfNeeded = function (str) {
	        Assert_1.Assert.isString(str);
	        return QueryUtils.isAtomicString(str) || (QueryUtils.isRangeString(str) || QueryUtils.isRangeWithoutOuterBoundsString(str)) ? str : QueryUtils.quoteAndEscape(str);
	    };
	    QueryUtils.quoteAndEscape = function (str) {
	        Assert_1.Assert.isString(str);
	        return "\"" + QueryUtils.escapeString(str) + "\"";
	    };
	    QueryUtils.escapeString = function (str) {
	        Assert_1.Assert.isString(str);
	        return str.replace(/"/g, ' ');
	    };
	    QueryUtils.isAtomicString = function (str) {
	        Assert_1.Assert.isString(str);
	        return /^\d+(\.\d+)?$|^[\d\w]+$/.test(str);
	    };
	    QueryUtils.isRangeString = function (str) {
	        Assert_1.Assert.isString(str);
	        return /^\d+(\.\d+)?\.\.\d+(\.\d+)?$|^\d{4}\/\d{2}\/\d{2}@\d{2}:\d{2}:\d{2}\.\.\d{4}\/\d{2}\/\d{2}@\d{2}:\d{2}:\d{2}$/.test(str);
	    };
	    QueryUtils.isRangeWithoutOuterBoundsString = function (str) {
	        Assert_1.Assert.isString(str);
	        return /^\d+(\.\d+)?$|^\d{4}\/\d{2}\/\d{2}@\d{2}:\d{2}:\d{2}$/.test(str);
	    };
	    QueryUtils.buildFieldExpression = function (field, operator, values) {
	        Assert_1.Assert.isNonEmptyString(field);
	        Assert_1.Assert.stringStartsWith(field, '@');
	        Assert_1.Assert.isNonEmptyString(operator);
	        Assert_1.Assert.isLargerOrEqualsThan(1, values.length);
	        if (values.length == 1) {
	            return field + operator + QueryUtils.quoteAndEscapeIfNeeded(values[0]);
	        }
	        else {
	            return field + operator + '(' + _.map(values, function (str) { return QueryUtils.quoteAndEscapeIfNeeded(str); }).join(',') + ')';
	        }
	    };
	    QueryUtils.buildFieldNotEqualExpression = function (field, values) {
	        Assert_1.Assert.isNonEmptyString(field);
	        Assert_1.Assert.stringStartsWith(field, '@');
	        Assert_1.Assert.isLargerOrEqualsThan(1, values.length);
	        var filter;
	        if (values.length == 1) {
	            filter = field + '==' + QueryUtils.quoteAndEscapeIfNeeded(values[0]);
	        }
	        else {
	            filter = field + '==' + '(' + _.map(values, function (str) { return QueryUtils.quoteAndEscapeIfNeeded(str); }).join(',') + ')';
	        }
	        return '(NOT ' + filter + ')';
	    };
	    QueryUtils.mergeQueryString = function (url, queryString) {
	        var queryStringPosition = url.indexOf('?');
	        if (queryStringPosition != -1) {
	            url += '&' + queryString;
	        }
	        else {
	            url += '?' + queryString;
	        }
	        return url;
	    };
	    QueryUtils.mergePath = function (url, path) {
	        var urlSplit = url.split('?');
	        return urlSplit[0] + path + '?' + (urlSplit[1] || '');
	    };
	    QueryUtils.setPropertyOnResults = function (results, property, value, afterOneLoop) {
	        _.each(results.results, function (result) {
	            QueryUtils.setPropertyOnResult(result, property, value);
	            value = afterOneLoop ? afterOneLoop() : value;
	        });
	    };
	    QueryUtils.setPropertyOnResult = function (result, property, value) {
	        result[property] = value;
	        _.each(result.childResults, function (child) {
	            child[property] = value;
	        });
	        if (!Utils_1.Utils.isNullOrUndefined(result.parentResult)) {
	            result.parentResult[property] = value;
	        }
	    };
	    // http://stackoverflow.com/a/11582513
	    QueryUtils.getUrlParameter = function (name) {
	        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ''])[1].replace(/\+/g, '%20')) || null;
	    };
	    QueryUtils.isStratusAgnosticField = function (fieldToVerify, fieldToMatch) {
	        var checkForSystem = /^(@?)(sys)?(.*)/i;
	        var matchFieldToVerify = checkForSystem.exec(fieldToVerify);
	        var matchFieldToMatch = checkForSystem.exec(fieldToMatch);
	        if (matchFieldToVerify && matchFieldToMatch) {
	            return (matchFieldToVerify[1] + matchFieldToVerify[3]).toLowerCase() == (matchFieldToMatch[1] + matchFieldToMatch[3]).toLowerCase();
	        }
	        return false;
	    };
	    return QueryUtils;
	}());
	exports.QueryUtils = QueryUtils;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Assert_1 = __webpack_require__(16);
	var QueryError = (function () {
	    function QueryError(errorResponse) {
	        this.status = errorResponse.statusCode;
	        this.message = errorResponse.data.message;
	        this.name = this.type = errorResponse.data.type;
	        this.queryExecutionReport = errorResponse.data.executionReport;
	        Assert_1.Assert.isNumber(this.status);
	        Assert_1.Assert.isNonEmptyString(this.message);
	        Assert_1.Assert.isNonEmptyString(this.type);
	    }
	    return QueryError;
	}());
	exports.QueryError = QueryError;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	exports.ModalBox = __webpack_require__(25);
	exports.MagicBox = __webpack_require__(26);
	exports.LocaleString = __webpack_require__(27);


/***/ },
/* 25 */
/***/ function(module, exports) {

	var Coveo;!function(e){var o;!function(e){function o(e,o){void 0===o&&(o={});var n=o.body||document.body;n.className?n.className.indexOf("coveo-modalBox-opened")==-1&&(n.className+=" coveo-modalBox-opened"):n.className="coveo-modalBox-opened";var c=document.createElement("div");c.className="coveo-modalBox",n.appendChild(c),o.fullscreen===!0&&(c.className+=" coveo-fullscreen");var d=document.createElement("div");d.className="coveo-overlay",c.appendChild(d);var s=document.createElement("div");if(s.className="coveo-wrapper",c.appendChild(s),null!=o.title){var r=document.createElement("div");r.className="coveo-title",s.appendChild(r),r.innerHTML=o.title,o.titleClose===!0&&r.addEventListener("click",function(){return v()})}e.className+=" coveo-body",s.appendChild(e);var i,v=function(e,t){void 0===e&&(e=0),void 0===t&&(t=!1);var d=null==o.validation||o.validation(e);if(d!==!1||t){c.parentElement&&c.parentElement.removeChild(c);var s=l.indexOf(v);return s>=0&&l.splice(s,1),null==n.querySelector(".coveo-modalBox")&&a(n,"coveo-modalBox-opened"),!0}return!1},u=function(e,o){var n=document.createElement("div");n.className="coveo-button",n.textContent=e,n.addEventListener("click",function(){return v(o)}),i.appendChild(n)};return null!=o.buttons&&(i=document.createElement("div"),i.className="coveo-buttons",s.appendChild(i),o.buttons&t.OK&&u("Ok",t.OK),o.buttons&t.APPLY&&u("Apply",t.APPLY),o.buttons&t.YES&&u("Yes",t.YES),o.buttons&t.NO&&u("No",t.NO),o.buttons&t.CANCEL&&u("Cancel",t.CANCEL)),l.push(v),o.overlayClose===!0&&d.addEventListener("click",function(e){return v()}),null!=o.className&&(c.className+=" "+o.className),{modalBox:c,overlay:d,wrapper:s,buttons:i,content:e,close:v}}function n(e){void 0===e&&(e=!1);for(var o=0;l.length>o;){var n=l[o](0,e);n||o++}}function a(e,o){e.className=e.className.replace(new RegExp("(^|\\s)"+o+"(\\s|\\b)","g"),"$1")}!function(e){e[e.OK=1]="OK",e[e.APPLY=2]="APPLY",e[e.YES=4]="YES",e[e.NO=8]="NO",e[e.CANCEL=16]="CANCEL"}(e.BUTTON||(e.BUTTON={}));var t=e.BUTTON,l=[];e.open=o,e.close=n}(o=e.ModalBox||(e.ModalBox={}))}(Coveo||(Coveo={}));
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = Coveo.ModalBox;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var __extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},Coveo;!function(t){var e;!function(t){var e=function(){function e(t,e,n){var s=this;this.expression=e,this.input=n,_.isString(t)?this.value=t:_.isArray(t)&&(this.subResults=t,_.forEach(this.subResults,function(t){t.parent=s}))}return e.prototype.isSuccess=function(){return null!=this.value||null!=this.subResults&&_.all(this.subResults,function(t){return t.isSuccess()})},e.prototype.path=function(t){var e=null!=this.parent&&this.parent!=t?this.parent.path(t):[];return e.push(this),e},e.prototype.findParent=function(t){for(var e=this,n=_.isString(t)?function(e){return t==e.expression.id}:t;null!=e&&!n(e);)e=e.parent;return e},e.prototype.find=function(t){var e=_.isString(t)?function(e){return t==e.expression.id}:t;if(e(this))return this;if(this.subResults)for(var n=0;n<this.subResults.length;n++){var s=this.subResults[n].find(e);if(s)return s}return null},e.prototype.findAll=function(t){var e=[],n=_.isString(t)?function(e){return t==e.expression.id}:t;return n(this)&&e.push(this),this.subResults&&(e=_.reduce(this.subResults,function(t,e){return t.concat(e.findAll(n))},e)),e},e.prototype.resultAt=function(t,e){if(t<0||t>this.getLength())return[];if(null!=e){if(_.isString(e)){if(e==this.expression.id)return[this]}else if(e(this))return[this]}else{var n=null==this.value&&null==this.subResults?this.input:this.value;if(null!=n)return[this]}if(null!=this.subResults){for(var s=[],i=0;i<this.subResults.length;i++){var o=this.subResults[i];if(s=s.concat(o.resultAt(t,e)),t-=o.getLength(),t<0)break}return s}return[]},e.prototype.getExpect=function(){return null==this.value&&null==this.subResults?[this]:null!=this.subResults?_.reduce(this.subResults,function(t,e){return t.concat(e.getExpect())},[]):[]},e.prototype.getBestExpect=function(){var t=this.getExpect(),e=_.groupBy(t,function(t){return t.input}),n=_.last(_.keys(e).sort(function(t,e){return e.length-t.length})),s=e[n],e=_.groupBy(s,function(t){return t.expression.id});return _.map(e,function(t){return _.chain(t).map(function(t){return{path:t.path().length,result:t}}).sortBy("path").pluck("result").first().value()})},e.prototype.getHumanReadableExpect=function(){var t=this.getBestExpect(),e=t.length>0?_.last(t).input:"";return"Expected "+_.map(t,function(t){return t.getHumanReadable()}).join(" or ")+" but "+(e.length>0?JSON.stringify(e[0]):"end of input")+" found."},e.prototype.before=function(){if(null==this.parent)return"";var t=_.indexOf(this.parent.subResults,this);return this.parent.before()+_.chain(this.parent.subResults).first(t).map(function(t){return t.toString()}).join("").value()},e.prototype.after=function(){if(null==this.parent)return"";var t=_.indexOf(this.parent.subResults,this);return _.chain(this.parent.subResults).last(this.parent.subResults.length-t-1).map(function(t){return t.toString()}).join("").value()+this.parent.after()},e.prototype.getLength=function(){return null!=this.value?this.value.length:null!=this.subResults?_.reduce(this.subResults,function(t,e){return t+e.getLength()},0):this.input.length},e.prototype.toHtmlElement=function(){var t=document.createElement("span"),e=null!=this.expression?this.expression.id:null;if(null!=e){var n=document.createAttribute("data-id");n.value=e,t.setAttributeNode(n)}var s=document.createAttribute("data-success");if(s.value=this.isSuccess().toString(),t.setAttributeNode(s),null!=this.value){t.appendChild(document.createTextNode(this.value));var i=document.createAttribute("data-value");i.value=this.value,t.setAttributeNode(i)}else if(null!=this.subResults)_.each(this.subResults,function(e){t.appendChild(e.toHtmlElement())});else{t.appendChild(document.createTextNode(this.input));var o=document.createAttribute("data-input");o.value=this.input,t.setAttributeNode(o),t.className="magic-box-error"+(this.input.length>0?"":" magic-box-error-empty")}return t.result=this,t},e.prototype.clean=function(t){if(null!=t||!this.isSuccess()){t=t||_.last(this.getBestExpect()).path(this);var n=_.first(t);if(null!=n){var s=_.indexOf(this.subResults,n),i=s==-1?[]:_.map(_.first(this.subResults,s),function(t){return t.clean()});return i.push(n.clean(_.rest(t))),new e(i,this.expression,this.input)}return new e(null,this.expression,this.input)}return null!=this.value?new e(this.value,this.expression,this.input):null!=this.subResults?new e(_.map(this.subResults,function(t){return t.clean()}),this.expression,this.input):void 0},e.prototype.clone=function(){return null!=this.value?new e(this.value,this.expression,this.input):null!=this.subResults?new e(_.map(this.subResults,function(t){return t.clone()}),this.expression,this.input):new e(null,this.expression,this.input)},e.prototype.toString=function(){return null!=this.value?this.value:null!=this.subResults?_.map(this.subResults,function(t){return t.toString()}).join(""):this.input},e.prototype.getHumanReadable=function(){return this.expression instanceof t.ExpressionConstant?JSON.stringify(this.expression.value):this.expression.id},e}();t.Result=e}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e=function(e){function n(n){e.call(this,[n],t.ExpressionEndOfInput,n.input);var s=new t.Result(null,t.ExpressionEndOfInput,n.input.substr(n.getLength()));s.parent=this,this.subResults.push(s)}return __extends(n,e),n}(t.Result);t.EndOfInputResult=e}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e=function(e){function n(t,n,s,i){var o=this;e.call(this,null!=t?[t]:null,n,s),this.result=t,this.expression=n,this.input=s,this.failAttempt=i,_.forEach(this.failAttempt,function(t){t.parent=o})}return __extends(n,e),n.prototype.getExpect=function(){var t=this,e=[];return null!=this.result&&(e=this.result.getExpect()),e=_.reduce(this.failAttempt,function(t,e){return t.concat(e.getExpect())},e),e.length>0&&_.all(e,function(e){return e.input==t.input})?[this]:e},n.prototype.clean=function(e){if(null!=e||!this.isSuccess()){e=_.rest(e||_.last(this.getBestExpect()).path(this));var n=_.first(e);return null==n?new t.Result(null,this.expression,this.input):new t.Result([n.clean(_.rest(e))],this.expression,this.input)}return new t.Result(_.map(this.result.subResults,function(t){return t.clean()}),this.expression,this.input)},n}(t.Result);t.OptionResult=e}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e=function(e){function n(t,n,s,i){e.call(this,t,n,s),this.results=t,this.expression=n,this.input=s,_.last(t)!=i&&(this.failAttempt=i,null!=this.failAttempt&&(this.failAttempt.parent=this))}return __extends(n,e),n.prototype.getExpect=function(){var t=e.prototype.getExpect.call(this);return null!=this.failAttempt?t.concat(this.failAttempt.getExpect()):t},n.prototype.clean=function(n){if(null!=this.failAttempt&&(null!=n||!this.isSuccess())){n=n||_.last(this.getBestExpect()).path(this);var s=_.first(n);if(null!=s&&s==this.failAttempt){var i=_.last(this.subResults),o=_.map(null!=i&&i.isSuccess()?this.subResults:_.initial(this.subResults),function(t){return t.clean()});return o.push(s.clean(_.rest(n))),new t.Result(o,this.expression,this.input)}}return e.prototype.clean.call(this,n)},n}(t.Result);t.RefResult=e}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e=function(){function e(t,e){this.value=t,this.id=e}return e.prototype.parse=function(e,n){var s=0==e.indexOf(this.value),i=new t.Result(s?this.value:null,this,e);return s&&n&&e.length>this.value.length?new t.EndOfInputResult(i):i},e.prototype.toString=function(){return this.value},e}();t.ExpressionConstant=e}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){t.ExpressionEndOfInput={id:"end of input",parse:null}}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e=function(){function t(t,e,n){this.func=t,this.id=e,this.grammar=n}return t.prototype.parse=function(t,e){return this.func(t,e,this)},t.prototype.toString=function(){return this.id},t}();t.ExpressionFunction=e}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e=function(){function e(t,e){if(this.parts=t,this.id=e,0==t.length)throw JSON.stringify(e)+" should have at least 1 parts"}return e.prototype.parse=function(e,n){for(var s,i=[],o=e,r=0;r<this.parts.length;r++){var u=this.parts[r];if(s=u.parse(o,n&&r==this.parts.length-1),i.push(s),!s.isSuccess())break;o=o.substr(s.getLength())}return new t.Result(i,this,e)},e.prototype.toString=function(){return this.id},e}();t.ExpressionList=e}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e=function(){function e(t,e){this.parts=t,this.id=e}return e.prototype.parse=function(e,n){for(var s=[],i=0;i<this.parts.length;i++){var o=this.parts[i].parse(e,n);if(o.isSuccess())return new t.OptionResult(o,this,e,s);s.push(o)}return new t.OptionResult(null,this,e,s)},e.prototype.toString=function(){return this.id},e}();t.ExpressionOptions=e}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e=function(){function e(t,e,n,s){this.ref=t,this.occurrence=e,this.id=n,this.grammar=s}return e.prototype.parse=function(t,e){var n=this.grammar.getExpression(this.ref);if(null==n)throw"Expression not found:"+this.ref;return"?"==this.occurrence||null==this.occurrence?this.parseOnce(t,e,n):this.parseMany(t,e,n)},e.prototype.parseOnce=function(e,n,s){var i=s.parse(e,n),o=i.isSuccess();return o||"?"!=this.occurrence?new t.RefResult([i],this,e,o?null:i):n?0==e.length?new t.RefResult([],this,e,i):_.all(i.getBestExpect(),function(e){return e.expression==t.ExpressionEndOfInput})?new t.RefResult([new t.Result(null,t.ExpressionEndOfInput,e)],this,e,i):i:new t.RefResult([],this,e,null)},e.prototype.parseMany=function(e,n,s){var i,o,r=[],u=e;do i=s.parse(u,!1),o=i.isSuccess(),o&&(r.push(i),u=u.substr(i.getLength()));while(o&&i.input!=u);var a=_.isNumber(this.occurrence)?this.occurrence:"+"==this.occurrence?1:0;if(r.length<a)r.push(i);else if(n)if(r.length>0){var l=_.last(r);i=s.parse(l.input,!0),i.isSuccess()?r[r.length-1]=i:(r.push(new t.Result(null,t.ExpressionEndOfInput,l.input.substr(l.getLength()))),i=s.parse(l.input.substr(l.getLength()),!0))}else if(0!=e.length){var c=new t.Result(null,t.ExpressionEndOfInput,e);return new t.RefResult([c],this,e,i)}return new t.RefResult(r,this,e,i)},e.prototype.toString=function(){return this.id},e}();t.ExpressionRef=e}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e=function(){function e(t,e,n){this.value=t,this.id=e}return e.prototype.parse=function(e,n){var s=e.match(this.value);null!=s&&0!=s.index&&(s=null);var i=new t.Result(null!=s?s[0]:null,this,e);return i.isSuccess()&&n&&e.length>i.value.length?new t.EndOfInputResult(i):i},e.prototype.toString=function(){return this.id},e}();t.ExpressionRegExp=e}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e=function(){function e(e,n){void 0===n&&(n={}),this.expressions={},this.start=new t.ExpressionRef(e,null,"start",this),this.addExpressions(n)}return e.prototype.addExpressions=function(t){var e=this;_.each(t,function(t,n){e.addExpression(n,t)})},e.prototype.addExpression=function(t,n){if(t in this.expressions)throw"Grammar already contain the id:"+t;this.expressions[t]=e.buildExpression(n,t,this)},e.prototype.getExpression=function(t){return this.expressions[t]},e.prototype.parse=function(t){return this.start.parse(t,!0)},e.buildExpression=function(e,n,s){var i=typeof e;if("undefined"==i)throw"Invalid Expression: "+e;if(_.isString(e))return this.buildStringExpression(e,n,s);if(_.isArray(e))return new t.ExpressionOptions(_.map(e,function(e,i){return new t.ExpressionRef(e,null,n+"_"+i,s)}),n);if(_.isRegExp(e))return new t.ExpressionRegExp(e,n,s);if(_.isFunction(e))return new t.ExpressionFunction(e,n,s);throw"Invalid Expression: "+e},e.buildStringExpression=function(n,s,i){var o=e.stringMatch(n,e.spliter),r=_.map(o,function(e,n){if(e[1]){var o=e[1],r=e[3]?Number(e[3]):e[2]||null;return new t.ExpressionRef(o,r,s+"_"+n,i)}return new t.ExpressionConstant(e[4],s+"_"+n)});if(1==r.length){var u=r[0];return u.id=s,u}return new t.ExpressionList(r,s)},e.stringMatch=function(t,e){for(var n,s=[],i=new RegExp(e.source,"g");null!==(n=i.exec(t));)s.push(n);return s},e.spliter=/\[(\w+)(\*|\+|\?|\{([1-9][0-9]*)\})?\]|(.[^\[]*)/,e}();t.Grammar=e}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e=function(){function e(t,e,n){this.element=t,this.onchange=e,this.magicBox=n,this.hasFocus=!1,this.underlay=document.createElement("div"),this.underlay.className="magic-box-underlay",t.appendChild(this.underlay),this.highlightContainer=document.createElement("span"),this.highlightContainer.className="magic-box-highlight-container",this.underlay.appendChild(this.highlightContainer),this.ghostTextContainer=document.createElement("span"),this.ghostTextContainer.className="magic-box-ghost-text",this.underlay.appendChild(this.ghostTextContainer),this.input=document.createElement("input"),this.input.spellcheck=!1,this.input.setAttribute("form","coveo-dummy-form"),t.appendChild(this.input),this.setupHandler()}return e.prototype.updateInput=function(){this.input.value!=this.result.input&&(this.input.value=this.result.input)},e.prototype.updateHighlight=function(){this.highlightContainer.innerHTML="",this.highlightContainer.appendChild(this.result.toHtmlElement())},e.prototype.updateWordCompletion=function(){this.ghostTextContainer.innerHTML="",null!=this.wordCompletion&&this.ghostTextContainer.appendChild(document.createTextNode(this.wordCompletion.substr(this.result.input.length)))},e.prototype.updateScroll=function(e){var n=this;void 0===e&&(e=!0);var s=function(){n.underlay.clientWidth<n.underlay.scrollWidth&&(n.underlay.style.visibility="hidden",n.underlay.scrollLeft=n.input.scrollLeft,n.underlay.scrollTop=n.input.scrollTop,n.underlay.style.visibility="visible"),n.updateScrollDefer=null,n.hasFocus&&n.updateScroll()};e?null==this.updateScrollDefer&&(this.updateScrollDefer=t.requestAnimationFrame(s)):s()},e.prototype.setResult=function(t,e){this.result=t,this.updateInput(),this.updateHighlight(),_.isUndefined(e)&&null!=this.wordCompletion&&0==this.wordCompletion.indexOf(this.result.input)?this.updateWordCompletion():this.setWordCompletion(e),this.updateScroll()},e.prototype.setWordCompletion=function(t){null!=t&&0!=t.toLowerCase().indexOf(this.result.input.toLowerCase())&&(t=null),this.wordCompletion=t,this.updateWordCompletion(),this.updateScroll()},e.prototype.setCursor=function(t){if(this.input.focus(),this.input.createTextRange){var e=this.input.createTextRange();e.move("character",t),e.select()}else null!=this.input.selectionStart&&(this.input.focus(),this.input.setSelectionRange(t,t))},e.prototype.getCursor=function(){return this.input.selectionStart},e.prototype.setupHandler=function(){var t=this;this.input.onblur=function(){t.hasFocus=!1,setTimeout(function(){t.hasFocus||t.onblur&&t.onblur()},300),t.updateScroll()},this.input.onfocus=function(){t.hasFocus||(t.hasFocus=!0,t.updateScroll(),t.onfocus&&t.onfocus())},this.input.onkeydown=function(e){t.keydown(e)},this.input.onkeyup=function(e){t.keyup(e)},this.input.onclick=function(){t.onchangecursor()},this.input.select=function(){t.onchangecursor()},this.input.oncut=function(){setTimeout(function(){t.onInputChange()})},this.input.onpaste=function(){setTimeout(function(){t.onInputChange()})}},e.prototype.focus=function(){var t=this;this.hasFocus=!0,setTimeout(function(){t.input.focus()})},e.prototype.blur=function(){this.hasFocus&&this.input.blur()},e.prototype.keydown=function(e){var n=this;switch(e.keyCode||e.which){case 9:this.magicBox.hasSuggestions()&&e.preventDefault();break;default:e.stopPropagation(),null==this.onkeydown||this.onkeydown(e.keyCode||e.which)?t.requestAnimationFrame(function(){n.onInputChange()}):e.preventDefault()}},e.prototype.keyup=function(t){switch(t.keyCode||t.which){case 9:this.tabPress();break;case 37:case 39:this.onchangecursor();break;default:null==this.onkeydown||this.onkeyup(t.keyCode||t.which)?this.onInputChange():t.preventDefault()}},e.prototype.tabPress=function(){null!=this.wordCompletion&&(this.input.value=this.wordCompletion,this.ontabpress&&this.ontabpress(),this.onchange(this.wordCompletion,!0))},e.prototype.onInputChange=function(){this.result.input!=this.input.value&&this.onchange(this.input.value,!1)},e.prototype.getValue=function(){return this.input.value},e.prototype.getWordCompletion=function(){return this.wordCompletion},e}();t.InputManager=e}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e=function(){function e(e,n){var s=this;this.element=e,this.options=_.defaults(n,{selectableClass:"magic-box-suggestion",selectedClass:"magic-box-selected"}),void 0==this.options.timeout&&(this.options.timeout=500),this.hasSuggestions=!1,this.element.onmouseover=function(e){if(t.$$(e.target).hasClass(s.options.selectableClass)){for(var n=s.element.getElementsByClassName(s.options.selectedClass),i=0;i<n.length;i++){var o=n.item(i);t.$$(o).removeClass(s.options.selectedClass)}t.$$(e.target).addClass(s.options.selectedClass)}},this.element.onmouseout=function(e){t.$$(e.target).hasClass(s.options.selectableClass)&&t.$$(e.target).removeClass(s.options.selectedClass)}}return e.prototype.moveDown=function(){var e=this.element.getElementsByClassName(this.options.selectedClass).item(0),n=this.element.getElementsByClassName(this.options.selectableClass),s=-1;if(null!=e){t.$$(e).removeClass(this.options.selectedClass);for(var i=0;i<n.length;i++)if(e==n.item(i)){s=i;break}s=s==-1?0:s+1}else s=0;return e=n.item(s),null!=e&&t.$$(e).addClass(this.options.selectedClass),e&&e.suggestion},e.prototype.moveUp=function(){var e=this.element.getElementsByClassName(this.options.selectedClass).item(0),n=this.element.getElementsByClassName(this.options.selectableClass),s=-1;if(null!=e){t.$$(e).removeClass(this.options.selectedClass);for(var i=0;i<n.length;i++)if(e==n.item(i)){s=i;break}s=s==-1?n.length-1:s-1}else s=n.length-1;return e=n.item(s),null!=e&&t.$$(e).addClass(this.options.selectedClass),e&&e.suggestion},e.prototype.select=function(){var e=this.element.getElementsByClassName(this.options.selectedClass).item(0);return null!=e&&t.$$(e).trigger("keyboardSelect"),e},e.prototype.mergeSuggestions=function(t,e){var n,s=this,i=[];t=_.compact(t);var o=this.pendingSuggestion=new Promise(function(e,r){_.each(t,function(t){var e=!1;setTimeout(function(){e=!0},s.options.timeout),t.then(function(t){!e&&t&&(i=i.concat(t))})});var u=function(){n&&clearTimeout(n),0==i.length?e([]):o==s.pendingSuggestion||null==s.pendingSuggestion?e(i.sort(function(t,e){return e.index-t.index})):r("new request queued")};0==t.length&&u(),void 0==t&&u(),n=setTimeout(function(){u()},s.options.timeout),Promise.all(t).then(function(){return u()})});o.then(function(t){return e&&e(t),s.updateSuggestions(t),t})["catch"](function(){return null})},e.prototype.updateSuggestions=function(e){var n=this;this.element.innerHTML="",this.element.className="magic-box-suggestions",_.each(e,function(e){var s=e.dom;if(s){t.$$(s).removeClass(n.options.selectedClass);var i=t.$$(s).find("."+n.options.selectableClass);t.$$(i).removeClass(n.options.selectedClass)}else{if(s=document.createElement("div"),s.className="magic-box-suggestion",null!=e.html)s.innerHTML=e.html;else if(null!=e.text)s.appendChild(document.createTextNode(e.text));else if(null!=e.separator){s.className="magic-box-suggestion-seperator";var o=document.createElement("div");o.className="magic-box-suggestion-seperator-label",o.appendChild(document.createTextNode(e.separator)),s.appendChild(o)}t.$$(s).on("click",function(){e.onSelect()}),t.$$(s).on("keyboardSelect",function(){e.onSelect()}),t.$$(s).addClass(n.options.selectableClass)}s.suggestion=e,n.element.appendChild(s)}),e.length>0?(t.$$(this.element).addClass("magic-box-hasSuggestion"),this.hasSuggestions=!0):(t.$$(this.element).removeClass("magic-box-hasSuggestion"),this.hasSuggestions=!1)},e}();t.SuggestionsManager=e}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e;!function(e){function n(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function s(t,e,s,o,r){if(void 0===s&&(s=!1),void 0===o&&(o="magic-box-hightlight"),void 0===r&&(r=""),0==e.length)return t;var u=n(e),a="("+u+")|(.*?(?="+u+")|.+)",l=new RegExp(a,s?"gi":"g");return t.replace(l,function(t,e,n){return i(null!=e?o:r,t)})}var i=function(t,e){return'<span class="'+t+'">'+_.escape(e)+"</span>"};e.highlightText=s;var o=function(){function e(t){this.el=t}return e.prototype.text=function(t){return t?void(void 0!=this.el.innerText?this.el.innerText=t:void 0!=this.el.textContent&&(this.el.textContent=t)):this.el.innerText||this.el.textContent},e.prototype.nodeListToArray=function(t){for(var e=t.length,n=new Array(e);e--;)n[e]=t.item(e);return n},e.prototype.empty=function(){for(;this.el.firstChild;)this.el.removeChild(this.el.firstChild)},e.prototype.show=function(){this.el.style.display="visible"},e.prototype.hide=function(){this.el.style.display="none"},e.prototype.toggle=function(t){void 0===t?"visible"==this.el.style.display?this.hide():this.show():t?this.show():this.hide()},e.prototype.find=function(t){return this.el.querySelector(t)},e.prototype.is=function(t){return this.el.tagName.toLowerCase()==t.toLowerCase()||(!("."!=t[0]||!this.hasClass(t.substr(1)))||"#"==t[0]&&this.el.getAttribute("id")==t.substr(1))},e.prototype.closest=function(e){for(var n=this.el,s=!1;!s&&(t.$$(n).hasClass(e)&&(s=!0),"body"!=n.tagName.toLowerCase())&&null!=n.parentElement;)s||(n=n.parentElement);if(s)return n},e.prototype.findAll=function(t){return this.nodeListToArray(this.el.querySelectorAll(t))},e.prototype.findClass=function(t){return"getElementsByClassName"in this.el?this.nodeListToArray(this.el.getElementsByClassName(t)):this.nodeListToArray(this.el.querySelectorAll("."+t))},e.prototype.findId=function(t){return document.getElementById(t)},e.prototype.addClass=function(t){this.hasClass(t)||(this.el.className?this.el.className+=" "+t:this.el.className=t)},e.prototype.removeClass=function(t){this.el.className=this.el.className.replace(new RegExp("(^|\\s)"+t+"(\\s|\\b)","g"),"$1")},e.prototype.toggleClass=function(t,e){e?this.addClass(t):this.removeClass(t)},e.prototype.getClass=function(){return this.el.className.match(e.CLASS_NAME_REGEX)||[]},e.prototype.hasClass=function(t){return _.contains(this.getClass(),t)},e.prototype.detach=function(){this.el.parentElement&&this.el.parentElement.removeChild(this.el)},e.prototype.on=function(t,n){var s=this;if(_.isArray(t))_.each(t,function(t){s.on(t,n)});else{var i=this.getJQuery();if(i)i(this.el).on(t,n);else if(this.el.addEventListener){var o=function(t){n(t,t.detail)};e.handlers.push({eventHandle:n,fn:o}),this.el.addEventListener(t,o,!1)}else this.el.on&&this.el.on("on"+t,n)}},e.prototype.one=function(t,e){var n=this;if(_.isArray(t))_.each(t,function(t){n.one(t,e)});else{var s=function(i){return n.off(t,s),e(i)};this.on(t,s)}},e.prototype.off=function(t,n){var s=this;if(_.isArray(t))_.each(t,function(t){s.off(t,n)});else{var i=this.getJQuery();if(i)i(this.el).off(t,n);else if(this.el.removeEventListener){var o=0,r=_.find(e.handlers,function(t,e){if(t.eventHandle==n)return o=e,!0});r&&(this.el.removeEventListener(t,r.fn,!1),e.handlers.splice(o,1))}else this.el.off&&this.el.off("on"+t,n)}},e.prototype.trigger=function(t,e){var n=this.getJQuery();if(n)n(this.el).trigger(t,e);else if(void 0!==CustomEvent){var s=new CustomEvent(t,{detail:e,bubbles:!0});this.el.dispatchEvent(s)}},e.prototype.isEmpty=function(){return e.ONLY_WHITE_SPACE_REGEX.test(this.el.innerHTML)},e.prototype.isDescendant=function(t){for(var e=this.el.parentNode;null!=e;){if(e==t)return!0;e=e.parentNode}return!1},e.prototype.getJQuery=function(){return void 0!=window.jQuery&&window.jQuery},e.CLASS_NAME_REGEX=/-?[_a-zA-Z]+[_a-zA-Z0-9-]*/g,e.ONLY_WHITE_SPACE_REGEX=/^\s*$/,e.handlers=[],e}();e.Dom=o}(e=t.Utils||(t.Utils={}))}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){t.$$=function(e){return new t.Utils.Dom(e)}}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e;!function(e){function n(t,e,n,s){_.each(s.expressions,function(e){_.contains(t,e)||t.push(e)}),_.each(s.basicExpressions,function(t){_.contains(e,t)||e.push(t)}),_.each(s.grammars,function(t,e){if(e in n){if(!_.isArray(n[e])||!_.isArray(t))throw _.each(t,function(t){n[e].push(t)}),"Can not merge "+e+"("+new String(t)+" => "+new String(n[e])+")";_.each(t,function(t){n[e].push(t)})}else n[e]=t})}function s(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];for(var s=[],i=[],o={Start:["Expressions","Empty"],Expressions:"[OptionalSpaces][Expression][ExpressionsList*][OptionalSpaces]",ExpressionsList:"[Spaces][Expression]",Expression:s,BasicExpression:i,OptionalSpaces:/ */,Spaces:/ +/,Empty:/(?!.)/},r=0;r<t.length;r++)n(s,i,o,t[r]),_.each(t[r].include,function(e){_.contains(t,e)||t.push(e)});return s.push("BasicExpression"),{start:"Start",expressions:o}}function i(){for(var e=[],n=0;n<arguments.length;n++)e[n-0]=arguments[n];var i=s.apply(this,e);return new t.Grammar(i.start,i.expressions)}e.Expressions=s,e.ExpressionsGrammar=i}(e=t.Grammars||(t.Grammars={}))}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e;!function(e){e.notWordStart=" ()[],$@'\"",e.notInWord=" ()[],:",e.Basic={basicExpressions:["Word","DoubleQuoted"],grammars:{DoubleQuoted:'"[NotDoubleQuote]"',NotDoubleQuote:/[^"]*/,SingleQuoted:"'[NotSingleQuote]'",NotSingleQuote:/[^']*/,Number:/[0-9]+/,Word:function(n,s,i){var o=new RegExp("[^"+e.notWordStart.replace(/(.)/g,"\\$1")+"][^"+e.notInWord.replace(/(.)/g,"\\$1")+"]*"),r=n.match(o);null!=r&&0!=r.index&&(r=null);var u=new t.Result(null!=r?r[0]:null,i,n);return u.isSuccess()&&s&&n.length>u.value.length?new t.EndOfInputResult(u):u}}}}(e=t.Grammars||(t.Grammars={}))}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e;!function(t){t.SubExpression={basicExpressions:["SubExpression"],grammars:{SubExpression:"([Expressions])"}}}(e=t.Grammars||(t.Grammars={}))}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e;!function(t){t.Date={grammars:{Date:"[DateYear]/[DateMonth]/[DateDay]",DateYear:/([0-9]{4})/,DateMonth:/(1[0-2]|0?[1-9])/,DateDay:/([1-2][0-9]|3[0-1]|0?[1-9])/,DateRange:"[Date][Spaces?]..[Spaces?][Date]",DateRelative:["DateRelativeNegative","DateRelativeTerm"],DateRelativeTerm:/now|today|yesterday/,DateRelativeNegative:"[DateRelativeTerm][DateRelativeNegativeRef]",DateRelativeNegativeRef:/([\-\+][0-9]+(s|m|h|d|mo|y))/},include:[t.Basic]}}(e=t.Grammars||(t.Grammars={}))}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e;!function(t){t.Field={basicExpressions:["FieldSimpleQuery","FieldQuery","Field"],grammars:{FieldQuery:"[Field][OptionalSpaces][FieldQueryOperation]",FieldQueryOperation:["FieldQueryValue","FieldQueryNumeric"],FieldQueryValue:"[FieldOperator][OptionalSpaces][FieldValue]",FieldQueryNumeric:"[FieldOperatorNumeric][OptionalSpaces][FieldValueNumeric]",FieldSimpleQuery:"[FieldName]:[OptionalSpaces][FieldValue]",Field:"@[FieldName]",FieldName:/[a-zA-Z][a-zA-Z0-9\.\_]*/,FieldOperator:/==|=|<>/,FieldOperatorNumeric:/<=|>=|<|>/,FieldValue:["DateRange","NumberRange","DateRelative","Date","Number","FieldValueList","FieldValueString"],FieldValueNumeric:["DateRelative","Date","Number"],FieldValueString:["DoubleQuoted","FieldValueNotQuoted"],FieldValueList:"([FieldValueString][FieldValueStringList*])",FieldValueStringList:"[FieldValueSeparator][FieldValueString]",FieldValueSeparator:/ *, */,FieldValueNotQuoted:/[^ \(\),]+/,NumberRange:"[Number][Spaces?]..[Spaces?][Number]"},include:[t.Date,t.Basic]}}(e=t.Grammars||(t.Grammars={}))}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e;!function(t){t.QueryExtension={basicExpressions:["QueryExtension"],grammars:{QueryExtension:"$[QueryExtensionName]([QueryExtensionArguments])",QueryExtensionName:/\w+/,QueryExtensionArguments:"[QueryExtensionArgumentList*][QueryExtensionArgument]",QueryExtensionArgumentList:"[QueryExtensionArgument][Spaces?],[Spaces?]",QueryExtensionArgument:"[QueryExtensionArgumentName]:[Spaces?][QueryExtensionArgumentValue]",QueryExtensionArgumentName:/\w+/,QueryExtensionArgumentValue:["SingleQuoted","Expressions"]},include:[t.Basic]}}(e=t.Grammars||(t.Grammars={}))}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e;!function(t){t.NestedQuery={basicExpressions:["NestedQuery"],grammars:{NestedQuery:"[[NestedField][OptionalSpaces][Expressions]]",NestedField:"[[Field]]",FieldValue:["NestedQuery"]},include:[t.Field]}}(e=t.Grammars||(t.Grammars={}))}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){var e;!function(t){t.Complete={include:[t.NestedQuery,t.QueryExtension,t.SubExpression,t.Field,t.Basic]}}(e=t.Grammars||(t.Grammars={}))}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));var Coveo;!function(t){var e;!function(t){function e(t,e,n){return new s(t,e,n)}function n(t){return"requestAnimationFrame"in window?window.requestAnimationFrame(t):setTimeout(t)}var s=function(){function e(e,n,s){var i=this;void 0===s&&(s={}),this.element=e,this.grammar=n,this.options=s,this.lastSuggestions=[],_.isUndefined(this.options.inline)&&(this.options.inline=!1),t.$$(e).addClass("magic-box"),this.options.inline&&t.$$(e).addClass("magic-box-inline"),this.result=this.grammar.parse(""),this.displayedResult=this.result.clean(),this.clearDom=document.createElement("div"),this.clearDom.className="magic-box-clear",this.element.appendChild(this.clearDom);var o=document.createElement("div");o.className="magic-box-icon",this.clearDom.appendChild(o);var r=document.createElement("div");r.className="magic-box-input",e.appendChild(r),this.inputManager=new t.InputManager(r,function(t,e){e?(i.setText(t),i.onselect&&i.onselect(i.getFirstSuggestionText())):(i.setText(t),i.showSuggestion(),i.onchange&&i.onchange())},this),this.inputManager.ontabpress=function(){i.ontabpress&&i.ontabpress()},this.inputManager.setResult(this.displayedResult);var u=document.createElement("div");u.className="magic-box-suggestions",this.element.appendChild(u),this.suggestionsManager=new t.SuggestionsManager(u,{selectableClass:this.options.selectableSuggestionClass,selectedClass:this.options.selectedSuggestionClass,timeout:this.options.suggestionTimeout}),this.setupHandler()}return e.prototype.getResult=function(){return this.result},e.prototype.getDisplayedResult=function(){return this.displayedResult},e.prototype.setText=function(e){t.$$(this.element).toggleClass("magic-box-notEmpty",e.length>0),this.result=this.grammar.parse(e),this.displayedResult=this.result.clean(),this.inputManager.setResult(this.displayedResult)},e.prototype.setCursor=function(t){this.inputManager.setCursor(t)},e.prototype.getCursor=function(){return this.inputManager.getCursor()},e.prototype.resultAtCursor=function(t){return this.displayedResult.resultAt(this.getCursor(),t)},e.prototype.setupHandler=function(){var e=this;this.inputManager.onblur=function(){t.$$(e.element).removeClass("magic-box-hasFocus"),e.onblur&&e.onblur(),e.options.inline||e.clearSuggestion()},this.inputManager.onfocus=function(){t.$$(e.element).addClass("magic-box-hasFocus"),e.showSuggestion(),e.onfocus&&e.onfocus();
	},this.inputManager.onkeydown=function(t){if(38==t||40==t)return!1;if(13==t){var n=e.suggestionsManager.select();return null==n&&e.onsubmit&&e.onsubmit(),!1}return 27==t&&e.clearSuggestion(),!0},this.inputManager.onchangecursor=function(){e.showSuggestion()},this.inputManager.onkeyup=function(t){if(38==t)e.onmove&&e.onmove(),e.focusOnSuggestion(e.suggestionsManager.moveUp()),e.onchange&&e.onchange();else{if(40!=t)return!0;e.onmove&&e.onmove(),e.focusOnSuggestion(e.suggestionsManager.moveDown()),e.onchange&&e.onchange()}return!1},this.clearDom.onclick=function(){e.clear()}},e.prototype.showSuggestion=function(){var t=this;this.suggestionsManager.mergeSuggestions(null!=this.getSuggestions?this.getSuggestions():[],function(e){t.updateSuggestion(e)})},e.prototype.updateSuggestion=function(t){var e=this;this.lastSuggestions=t;var n=this.getFirstSuggestionText();this.inputManager.setWordCompletion(n&&n.text),this.onsuggestions&&this.onsuggestions(t),_.each(t,function(t){null==t.onSelect&&null!=t.text&&(t.onSelect=function(){e.setText(t.text),e.onselect&&e.onselect(t)})})},e.prototype.focus=function(){t.$$(this.element).addClass("magic-box-hasFocus"),this.inputManager.focus()},e.prototype.blur=function(){this.inputManager.blur()},e.prototype.clearSuggestion=function(){var t=this;this.suggestionsManager.mergeSuggestions([],function(e){t.updateSuggestion(e)}),this.inputManager.setWordCompletion(null)},e.prototype.focusOnSuggestion=function(t){null==t||null==t.text?(t=this.getFirstSuggestionText(),this.inputManager.setResult(this.displayedResult,t&&t.text)):this.inputManager.setResult(this.grammar.parse(t.text).clean(),t.text)},e.prototype.getFirstSuggestionText=function(){return _.find(this.lastSuggestions,function(t){return null!=t.text})},e.prototype.getText=function(){return this.inputManager.getValue()},e.prototype.getWordCompletion=function(){return this.inputManager.getWordCompletion()},e.prototype.clear=function(){this.setText(""),this.showSuggestion(),this.focus(),this.onclear&&this.onclear()},e.prototype.hasSuggestions=function(){return this.suggestionsManager.hasSuggestions},e}();t.Instance=s,t.create=e,t.requestAnimationFrame=n}(e=t.MagicBox||(t.MagicBox={}))}(Coveo||(Coveo={}));
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = Coveo.MagicBox;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 27 */
/***/ function(module, exports) {

	!function(){"use strict";var t,e,n="undefined",r="string",i=self.navigator,o=String,a=Object.prototype.hasOwnProperty,l={},u={},s=!1,f=!0,c=/^\s*application\/(?:vnd\.oftn\.|x-)?l10n\+json\s*(?:$|;)/i,p="locale",g="defaultLocale",h="toLocaleString",y="toLowerCase",v=Array.prototype.indexOf||function(t){for(var e=this.length,n=0;e>n;n++)if(n in this&&this[n]===t)return n;return-1},d=function(e){var n=new t;return n.open("GET",e,s),n.send(null),200!==n.status?(setTimeout(function(){var t=new Error("Unable to load localization data: "+e);throw t.name="Localization Error",t},0),{}):JSON.parse(n.responseText)},m=o[h]=function(t){if(arguments.length>0&&"number"!=typeof t)if(typeof t===r)m(d(t));else if(t===s)u={};else{var e,n,i;for(e in t)if(a.call(t,e)){if(n=t[e],e=e[y](),e in u&&n!==s||(u[e]={}),n===s)continue;if(typeof n===r){if(0!==o[p][y]().indexOf(e)){e in l||(l[e]=[]),l[e].push(n);continue}n=d(n)}for(i in n)a.call(n,i)&&(u[e][i]=n[i])}}return Function.prototype[h].apply(o,arguments)},w=function(t){for(var e,n=l[t],r=0,i=n.length;i>r;r++)e={},e[t]=d(n[r]),m(e);delete l[t]},b=o.prototype[h]=function(){var t,n=e,r=o[n?g:p],i=r[y]().split("-"),a=i.length,c=this.valueOf();e=s;do if(t=i.slice(0,a).join("-"),t in l&&w(t),t in u&&c in u[t])return u[t][c];while(a-->1);return!n&&o[g]?(e=f,b.call(c)):c};if(typeof XMLHttpRequest===n&&typeof ActiveXObject!==n){var L=ActiveXObject;t=function(){try{return new L("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new L("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new L("Msxml2.XMLHTTP")}catch(n){}throw new Error("XMLHttpRequest not supported by this browser.")}}else t=XMLHttpRequest;if(o[g]=o[g]||"",o[p]=i&&(i.language||i.userLanguage)||"",typeof document!==n)for(var T,M=document.getElementsByTagName("link"),O=M.length;O--;){var X=M[O],x=(X.getAttribute("rel")||"")[y]().split(/\s+/);c.test(X.type)&&(-1!==v.call(x,"localizations")?m(X.getAttribute("href")):-1!==v.call(x,"localization")&&(T={},T[(X.getAttribute("hreflang")||"")[y]()]=X.getAttribute("href"),m(T)))}}();
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = window.String.toLocaleString;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Assert_1 = __webpack_require__(16);
	exports.Assert = Assert_1.Assert;
	var Cache_1 = __webpack_require__(29);
	exports.Cache = Cache_1.Cache;
	var Defer_1 = __webpack_require__(30);
	exports.Defer = Defer_1.Defer;
	var L10N_1 = __webpack_require__(31);
	exports.L10N = L10N_1.L10N;
	var Logger_1 = __webpack_require__(15);
	exports.Logger = Logger_1.Logger;
	var Options_1 = __webpack_require__(32);
	exports.Options = Options_1.Options;
	var Strings_1 = __webpack_require__(33);
	exports.l = Strings_1.l;


/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	var Cache = (function () {
	    function Cache(onEmpty) {
	        this.onEmpty = onEmpty;
	        this.cache = [];
	    }
	    Cache.prototype.get = function () {
	        if (this.cache.length == 0) {
	            return this.onEmpty();
	        }
	        else {
	            return this.cache.pop();
	        }
	    };
	    Cache.prototype.push = function (value) {
	        this.cache.push(value);
	    };
	    return Cache;
	}());
	exports.Cache = Cache;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Defer = (function () {
	    function Defer() {
	    }
	    Defer.defer = function (code) {
	        Defer.functions.push(code);
	        Defer.arm();
	    };
	    Defer.flush = function () {
	        while (Defer.popOne()) {
	        }
	    };
	    Defer.arm = function () {
	        _.defer(function () {
	            if (Defer.popOne()) {
	                Defer.arm();
	            }
	        });
	    };
	    Defer.popOne = function () {
	        if (Defer.functions.length > 0) {
	            var fun = Defer.functions[0];
	            Defer.functions = _.rest(Defer.functions);
	            fun();
	            return Defer.functions.length > 0;
	        }
	        else {
	            return false;
	        }
	    };
	    Defer.functions = [];
	    return Defer;
	}());
	exports.Defer = Defer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var ExternalModulesShim_1 = __webpack_require__(24);
	String.toLocaleString = ExternalModulesShim_1.LocaleString;
	var pluralRegex = /<pl>(((?!<\/pl>).)*)<\/pl>/g;
	var singularRegex = /<sn>(((?!<\/sn>).)*)<\/sn>/g;
	exports.L10N = {
	    format: function (key) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var value = key.toLocaleString();
	        if (args.length > 0) {
	            var last = _.last(args);
	            // Last argument is either the count or a boolean forcing plural (true) or singular (false)
	            if (_.isBoolean(last) || _.isNumber(last)) {
	                args.pop();
	                value = exports.L10N.formatPlSn(value, last);
	            }
	            _.each(args, function (arg, i) { return value = value.replace("{" + i + "}", arg); });
	        }
	        return value;
	    },
	    formatPlSn: function (value, count) {
	        var isPlural = _.isBoolean(count) ? count : count > 1;
	        if (isPlural) {
	            value = value.replace(pluralRegex, '$1').replace(singularRegex, '');
	        }
	        else {
	            value = value.replace(pluralRegex, '').replace(singularRegex, '$1');
	        }
	        return value;
	    }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Utils_1 = __webpack_require__(17);
	var Options = (function () {
	    function Options() {
	    }
	    Options.prototype.merge = function (provided) {
	        return _.extend({}, this, provided);
	    };
	    Options.prototype.mergeDeep = function (provided) {
	        return _.extend({}, Utils_1.Utils.extendDeep(this, provided));
	    };
	    return Options;
	}());
	exports.Options = Options;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var L10N_1 = __webpack_require__(31);
	function l() {
	    var params = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        params[_i - 0] = arguments[_i];
	    }
	    return L10N_1.L10N.format.apply(this, arguments);
	}
	exports.l = l;
	;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AnalyticsEndpoint_1 = __webpack_require__(35);
	exports.AnalyticsEndpoint = AnalyticsEndpoint_1.AnalyticsEndpoint;
	var EndpointCaller_1 = __webpack_require__(14);
	exports.EndpointCaller = EndpointCaller_1.EndpointCaller;
	var QueryError_1 = __webpack_require__(23);
	exports.QueryError = QueryError_1.QueryError;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Logger_1 = __webpack_require__(15);
	var EndpointCaller_1 = __webpack_require__(14);
	var Assert_1 = __webpack_require__(16);
	var QueryUtils_1 = __webpack_require__(22);
	var CookieUtils_1 = __webpack_require__(36);
	var es6_promise_1 = __webpack_require__(6);
	var AnalyticsEndpoint = (function () {
	    function AnalyticsEndpoint(options) {
	        this.options = options;
	        this.logger = new Logger_1.Logger(this);
	        var endpointCallerOptions = {
	            accessToken: (this.options.token && this.options.token != '') ? this.options.token : null
	        };
	        this.endpointCaller = new EndpointCaller_1.EndpointCaller(endpointCallerOptions);
	        this.organization = options.organization;
	    }
	    AnalyticsEndpoint.prototype.getCurrentVisitId = function () {
	        return this.visitId;
	    };
	    AnalyticsEndpoint.prototype.getCurrentVisitIdPromise = function () {
	        var _this = this;
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            if (_this.getCurrentVisitId()) {
	                resolve(_this.getCurrentVisitId());
	            }
	            else {
	                var url = _this.buildAnalyticsUrl('/analytics/visit');
	                _this.getFromService(url, {})
	                    .then(function (response) {
	                    _this.visitId = response.id;
	                    resolve(_this.visitId);
	                })
	                    .catch(function (response) {
	                    reject(response);
	                });
	            }
	        });
	    };
	    AnalyticsEndpoint.prototype.sendSearchEvents = function (searchEvents) {
	        if (searchEvents.length > 0) {
	            this.logger.info('Logging analytics search events', searchEvents);
	            return this.sendToService(searchEvents, 'searches', 'searchEvents');
	        }
	    };
	    AnalyticsEndpoint.prototype.sendDocumentViewEvent = function (documentViewEvent) {
	        Assert_1.Assert.exists(documentViewEvent);
	        this.logger.info('Logging analytics document view', documentViewEvent);
	        return this.sendToService(documentViewEvent, 'click', 'clickEvent');
	    };
	    AnalyticsEndpoint.prototype.sendCustomEvent = function (customEvent) {
	        Assert_1.Assert.exists(customEvent);
	        this.logger.info('Logging analytics custom event', customEvent);
	        return this.sendToService(customEvent, 'custom', 'customEvent');
	    };
	    AnalyticsEndpoint.prototype.getTopQueries = function (params) {
	        var url = this.buildAnalyticsUrl('/stats/topQueries');
	        return this.getFromService(url, params);
	    };
	    AnalyticsEndpoint.prototype.sendToService = function (data, path, paramName) {
	        var _this = this;
	        var url = QueryUtils_1.QueryUtils.mergePath(this.options.serviceUrl, '/rest/' + (AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION || AnalyticsEndpoint.DEFAULT_ANALYTICS_VERSION) + '/analytics/' + path);
	        var queryString = [];
	        if (this.organization) {
	            queryString.push('org=' + this.organization);
	        }
	        if (CookieUtils_1.Cookie.get('visitorId')) {
	            queryString.push('visitor=' + encodeURIComponent(CookieUtils_1.Cookie.get('visitorId')));
	        }
	        // We use pendingRequest because we don't want to have 2 request to analytics at the same time.
	        // Otherwise the cookie visitId won't be set correctly.
	        if (AnalyticsEndpoint.pendingRequest == null) {
	            AnalyticsEndpoint.pendingRequest = this.endpointCaller.call({
	                errorsAsSuccess: false,
	                method: 'POST',
	                queryString: queryString,
	                requestData: data,
	                url: url,
	                responseType: 'text',
	                requestDataType: 'application/json'
	            }).then(function (res) {
	                return _this.handleAnalyticsEventResponse(res.data);
	            }).finally(function () {
	                AnalyticsEndpoint.pendingRequest = null;
	            });
	            return AnalyticsEndpoint.pendingRequest;
	        }
	        else {
	            return AnalyticsEndpoint.pendingRequest.finally(function () {
	                return _this.sendToService(data, path, paramName);
	            });
	        }
	    };
	    AnalyticsEndpoint.prototype.getFromService = function (url, params) {
	        var paramsToSend = (this.options.token && this.options.token != '') ? _.extend({ 'access_token': this.options.token }, params) : params;
	        return this.endpointCaller.call({
	            errorsAsSuccess: false,
	            method: 'GET',
	            queryString: this.options.organization ? ['org=' + encodeURIComponent(this.options.organization)] : [],
	            requestData: paramsToSend,
	            responseType: 'json',
	            url: url
	        }).then(function (res) {
	            return res.data;
	        });
	    };
	    AnalyticsEndpoint.prototype.handleAnalyticsEventResponse = function (response) {
	        var visitId;
	        var visitorId;
	        if (response['visitId']) {
	            visitId = response['visitId'];
	            visitorId = response['visitorId'];
	        }
	        else if (response['searchEventResponses']) {
	            visitId = _.first(response['searchEventResponses']).visitId;
	            visitorId = _.first(response['searchEventResponses']).visitorId;
	        }
	        if (visitId) {
	            this.visitId = visitId;
	        }
	        if (visitorId) {
	            CookieUtils_1.Cookie.set('visitorId', visitorId, AnalyticsEndpoint.VISITOR_COOKIE_TIME);
	        }
	        return response;
	    };
	    AnalyticsEndpoint.prototype.buildAnalyticsUrl = function (path) {
	        return this.options.serviceUrl + '/rest/' + (AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION || AnalyticsEndpoint.DEFAULT_ANALYTICS_VERSION) + path;
	    };
	    AnalyticsEndpoint.DEFAULT_ANALYTICS_URI = 'https://usageanalytics.coveo.com';
	    AnalyticsEndpoint.DEFAULT_ANALYTICS_VERSION = 'v15';
	    AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION = undefined;
	    AnalyticsEndpoint.VISITOR_COOKIE_TIME = 10000 * 24 * 60 * 60 * 1000;
	    return AnalyticsEndpoint;
	}());
	exports.AnalyticsEndpoint = AnalyticsEndpoint;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	// Code originally taken from : https://developers.livechatinc.com/blog/setting-cookies-to-subdomains-in-javascript/
	var Cookie = (function () {
	    function Cookie() {
	    }
	    Cookie.set = function (name, value, expiration) {
	        var domain, domainParts, date, expires, host;
	        if (expiration) {
	            date = new Date();
	            date.setTime(date.getTime() + expiration);
	            expires = '; expires=' + date.toGMTString();
	        }
	        else {
	            expires = '';
	        }
	        host = location.hostname;
	        if (host.split('.').length === 1) {
	            // no '.' in a domain - it's localhost or something similar
	            document.cookie = this.prefix + name + '=' + value + expires + '; path=/';
	        }
	        else {
	            // Remember the cookie on all subdomains.
	            //
	            // Start with trying to set cookie to the top domain.
	            // (example: if user is on foo.com, try to set
	            //  cookie to domain '.com')
	            //
	            // If the cookie will not be set, it means '.com'
	            // is a top level domain and we need to
	            // set the cookie to '.foo.com'
	            domainParts = host.split('.');
	            domainParts.shift();
	            domain = '.' + domainParts.join('.');
	            document.cookie = this.prefix + name + '=' + value + expires + '; path=/; domain=' + domain;
	            // check if cookie was successfuly set to the given domain
	            // (otherwise it was a Top-Level Domain)
	            if (Cookie.get(name) == null || Cookie.get(name) != value) {
	                // append '.' to current domain
	                domain = '.' + host;
	                document.cookie = this.prefix + name + '=' + value + expires + '; path=/; domain=' + domain;
	            }
	        }
	    };
	    Cookie.get = function (name) {
	        var nameEQ = this.prefix + name + '=';
	        var ca = document.cookie.split(';');
	        for (var i = 0; i < ca.length; i++) {
	            var c = ca[i];
	            while (c.charAt(0) == ' ') {
	                c = c.substring(1, c.length);
	            }
	            if (c.indexOf(nameEQ) == 0) {
	                return c.substring(nameEQ.length, c.length);
	            }
	        }
	        return null;
	    };
	    Cookie.erase = function (name) {
	        Cookie.set(name, '', -1);
	    };
	    Cookie.prefix = 'coveo_';
	    return Cookie;
	}());
	exports.Cookie = Cookie;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AdvancedSearchEvents_1 = __webpack_require__(38);
	exports.AdvancedSearchEvents = AdvancedSearchEvents_1.AdvancedSearchEvents;
	var AnalyticsEvents_1 = __webpack_require__(39);
	exports.AnalyticsEvents = AnalyticsEvents_1.AnalyticsEvents;
	var BreadcrumbEvents_1 = __webpack_require__(40);
	exports.BreadcrumbEvents = BreadcrumbEvents_1.BreadcrumbEvents;
	var DebugEvents_1 = __webpack_require__(41);
	exports.DebugEvents = DebugEvents_1.DebugEvents;
	var ImageResultListEvents_1 = __webpack_require__(42);
	exports.ImageResultListEvents = ImageResultListEvents_1.ImageResultListEvents;
	var InitializationEvents_1 = __webpack_require__(43);
	exports.InitializationEvents = InitializationEvents_1.InitializationEvents;
	var OmniboxEvents_1 = __webpack_require__(44);
	exports.OmniboxEvents = OmniboxEvents_1.OmniboxEvents;
	var PreferencesPanelEvents_1 = __webpack_require__(45);
	exports.PreferencesPanelEvents = PreferencesPanelEvents_1.PreferencesPanelEvents;
	var QueryEvents_1 = __webpack_require__(46);
	exports.QueryEvents = QueryEvents_1.QueryEvents;
	var ResultListEvents_1 = __webpack_require__(47);
	exports.ResultListEvents = ResultListEvents_1.ResultListEvents;
	var SearchAlertEvents_1 = __webpack_require__(48);
	exports.SearchAlertsEvents = SearchAlertEvents_1.SearchAlertsEvents;
	var SettingsEvents_1 = __webpack_require__(49);
	exports.SettingsEvents = SettingsEvents_1.SettingsEvents;
	var SliderEvents_1 = __webpack_require__(50);
	exports.SliderEvents = SliderEvents_1.SliderEvents;
	var StandaloneSearchInterfaceEvents_1 = __webpack_require__(51);
	exports.StandaloneSearchInterfaceEvents = StandaloneSearchInterfaceEvents_1.StandaloneSearchInterfaceEvents;


/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * This static class is there to contains the different string definition for all the events related to the {@link AdvancedSearch} component.
	 */
	var AdvancedSearchEvents = (function () {
	    function AdvancedSearchEvents() {
	    }
	    /**
	     * Triggered when the advanced search component is being built.
	     *
	     * Allows external code to add new sections in the advanced search panel.
	     *
	     * All handlers bound will receive {@link IBuildingAdvancedSearchEventArgs} as an argument
	     * @type {string}
	     */
	    AdvancedSearchEvents.buildingAdvancedSearch = 'buildingAdvancedSearch';
	    AdvancedSearchEvents.executeAdvancedSearch = 'executeAdvancedSearch';
	    return AdvancedSearchEvents;
	}());
	exports.AdvancedSearchEvents = AdvancedSearchEvents;


/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	var AnalyticsEvents = (function () {
	    function AnalyticsEvents() {
	    }
	    AnalyticsEvents.searchEvent = 'analyticsSearchEvent';
	    AnalyticsEvents.documentViewEvent = 'analyticsDocumentViewEvent';
	    AnalyticsEvents.customEvent = 'analyticsCustomEvent';
	    AnalyticsEvents.changeAnalyticsCustomData = 'changeAnalyticsCustomData';
	    return AnalyticsEvents;
	}());
	exports.AnalyticsEvents = AnalyticsEvents;


/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * This static class is there to contains the different string definition for all the events related to {@link Breadcrumb}.
	 */
	var BreadcrumbEvents = (function () {
	    function BreadcrumbEvents() {
	    }
	    /**
	     * Triggered when the breadcrumb needs to update its content. External code can use this event to provide bits of HTML that should be included in the breadcrumb.
	     *
	     * All handlers bound to this event will receive a {@link IPopulateBreadcrumbEventArgs} as an argument.
	     */
	    BreadcrumbEvents.populateBreadcrumb = 'populateBreadcrumb';
	    /**
	     * Triggered when the user clicks the Clear All button in the breadcrumb. When this event is raised, every filter that is included in the breadcrumb should be removed.
	     *
	     * This event does not provide custom event data.
	     */
	    BreadcrumbEvents.clearBreadcrumb = 'clearBreadcrumb';
	    BreadcrumbEvents.redrawBreadcrumb = 'redrawBreadcrumb';
	    return BreadcrumbEvents;
	}());
	exports.BreadcrumbEvents = BreadcrumbEvents;


/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	var DebugEvents = (function () {
	    function DebugEvents() {
	    }
	    DebugEvents.showDebugPanel = 'showDebugPanel';
	    return DebugEvents;
	}());
	exports.DebugEvents = DebugEvents;


/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	var ImageResultListEvents = (function () {
	    function ImageResultListEvents() {
	    }
	    ImageResultListEvents.imageResultsLayoutComplete = 'imageResultsLayoutComplete';
	    return ImageResultListEvents;
	}());
	exports.ImageResultListEvents = ImageResultListEvents;


/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * This static class is there to contain the different string definitions for all the events related to initialization.
	 *
	 * Note that these events will only be triggered when the {@link init} function is called.
	 *
	 * This means these events are normally called only once when the search interface is initialized.
	 */
	var InitializationEvents = (function () {
	    function InitializationEvents() {
	    }
	    /**
	     * This event is triggered right before each components inside the search interface get initialized (eg: Before the constructor of each component is executed).
	     *
	     * The string value is `beforeInitialization`.
	     * @type {string}
	     */
	    InitializationEvents.beforeInitialization = 'beforeInitialization';
	    /**
	     * Triggered after the components are initialized (eg: After the constructor of each component is executed)
	     * but before their state is set from the hash portion of the URL (e.g., http://mysearchinterface#q=myQuery ).
	     *
	     * This is also before the first query is launched (if the {@link SearchInterface.options.autoTriggerQuery} is `true`).
	     *
	     * The string value is `afterComponentsInitialization`.
	     * @type {string}
	     */
	    InitializationEvents.afterComponentsInitialization = 'afterComponentsInitialization';
	    /**
	     * Triggered right before the state from the URL (e.g., http://mysearchinterface#q=myQuery ) gets applied in the interface.
	     *
	     * This will typically only be useful if the {@link SearchInterface.options.enableHistory} is set to `true`.
	     *
	     * The string value is `restoreHistoryState`.
	     * @type {string}
	     */
	    InitializationEvents.restoreHistoryState = 'restoreHistoryState';
	    /**
	     * Triggered right after the UI is fully initialized.
	     *
	     * Concretely this means that the constructor of each component has been executed, and that the state coming for the URL (e.g., http://mysearchinterface#q=myquery) has been applied.
	     *
	     * It is triggered *before* the first query is launched, and if the {@link SearchInterface.options.autoTriggerQuery} is `true`.
	     *
	     * The string value is `afterInitialization`.
	     * @type {string}
	     */
	    InitializationEvents.afterInitialization = 'afterInitialization';
	    /**
	     * This is triggered when the UI needs to be dynamically removed so that components can unbind any internal handlers they might have set globally on the window or the document.
	     *
	     * After this event has been executed, the search interface can be dynamically removed and all handlers can be considered cleanly removed.
	     *
	     * The string value is `nuke`.
	     * @type {string}
	     */
	    InitializationEvents.nuke = 'nuke';
	    return InitializationEvents;
	}());
	exports.InitializationEvents = InitializationEvents;


/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	var OmniboxEvents = (function () {
	    function OmniboxEvents() {
	    }
	    OmniboxEvents.populateOmnibox = 'populateOmnibox';
	    OmniboxEvents.openOmnibox = 'openOmnibox';
	    OmniboxEvents.closeOmnibox = 'closeOmnibox';
	    OmniboxEvents.populateOmniboxSuggestions = 'populateOmniboxSuggestions';
	    OmniboxEvents.omniboxPreprocessResultForQuery = 'omniboxPreprocessResultForQuery';
	    return OmniboxEvents;
	}());
	exports.OmniboxEvents = OmniboxEvents;


/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	var PreferencesPanelEvents = (function () {
	    function PreferencesPanelEvents() {
	    }
	    PreferencesPanelEvents.savePreferences = 'savePreferences';
	    PreferencesPanelEvents.exitPreferencesWithoutSave = 'exitPreferencesWithoutSave';
	    return PreferencesPanelEvents;
	}());
	exports.PreferencesPanelEvents = PreferencesPanelEvents;


/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * This static class is there to contains the different string definition for all the events related to query.
	 *
	 * Note that these events will only be triggered when the {@link QueryController.executeQuery} method is used, either directly or by using {@link executeQuery}
	 */
	var QueryEvents = (function () {
	    function QueryEvents() {
	    }
	    /**
	     * Triggered when a new query is launched.
	     *
	     * All bound handlers will receive {@link INewQueryEventArgs} as an argument.
	     *
	     * The string value is `newQuery`.
	     * @type {string}
	     */
	    QueryEvents.newQuery = 'newQuery';
	    /**
	     * Triggered when the query is being built.
	     *
	     * This is typically where all components will contribute their part to the {@link IQuery} using the {@link QueryBuilder}.
	     *
	     * All bound handlers will receive {@link IBuildingQueryEventArgs} as an argument.
	     *
	     * The string value is `buildingQuery`.
	     * @type {string}
	     */
	    QueryEvents.buildingQuery = 'buildingQuery';
	    /**
	     * Triggered when the query is done being built.
	     *
	     * This is typically where the facet will add it's {@link IGroupByRequest} to the {@link IQuery}.
	     *
	     * All bound handlers will receive {@link IDoneBuildingQueryEventArgs} as an argument.
	     *
	     * The string value is `doneBuildingQuery`.
	     * @type {string}
	     */
	    QueryEvents.doneBuildingQuery = 'doneBuildingQuery';
	    /**
	     * Triggered when the query is being executed on the Search API.
	     *
	     * All bound handlers will receive {@link IDuringQueryEventArgs} as an argument.
	     *
	     * The string value is `duringQuery`.
	     * @type {string}
	     */
	    QueryEvents.duringQuery = 'duringQuery';
	    /**
	     * Triggered when more results are being fetched on the Search API (think : infinite scrolling, or pager).
	     *
	     * All bound handlers will receive {@link IDuringQueryEventArgs} as an argument.
	     *
	     * The string value is `duringFetchMoreQuery`.
	     * @type {string}
	     */
	    QueryEvents.duringFetchMoreQuery = 'duringFetchMoreQuery';
	    /**
	     * Triggered when a query successfully returns from the Search API.
	     *
	     * All bound handlers will receive {@link IQuerySuccessEventArgs} as an argument.
	     *
	     * The string value is `querySuccess`.
	     * @type {string}
	     */
	    QueryEvents.querySuccess = 'querySuccess';
	    /**
	     * Triggered when a more results were successfully returned from the Search API. (think : infinite scrolling, or pager).
	     *
	     * All bound handlers will receive {@link IFetchMoreSuccessEventArgs} as an argument.
	     *
	     * The string value is `fetchMoreSuccess`.
	     * @type {string}
	     */
	    QueryEvents.fetchMoreSuccess = 'fetchMoreSuccess';
	    /**
	     * Triggered after the main query success event has finished executing.
	     *
	     * This is typically where facets will process the {@link IGroupByResult} and render themselves.
	     *
	     * All bound handlers will receive {@link IQuerySuccessEventArgs} as an argument.
	     *
	     * The string value is `deferredQuerySuccess`.
	     * @type {string}
	     */
	    QueryEvents.deferredQuerySuccess = 'deferredQuerySuccess';
	    /**
	     * Triggered when there was an error executing a query on the Search API.
	     *
	     * All bound handlers will receive {@link IQueryErrorEventArgs} as an argument.
	     *
	     * The string value is `queryError`.
	     * @type {string}
	     */
	    QueryEvents.queryError = 'queryError';
	    /**
	     * Triggered before the {@link QueryEvents.querySuccess} event.
	     *
	     * This allows external code to modify the results before rendering them.
	     *
	     * For example, the {@link Folding} component might use this event to construct a coherent parent child relationship between query results.
	     *
	     * All bound handlers will receive {@link IPreprocessResultsEventArgs} as an argument.
	     *
	     * The string value is `preprocessResults`.
	     * @type {string}
	     */
	    QueryEvents.preprocessResults = 'preprocessResults';
	    /**
	     * Triggered before the {@link QueryEvents.fetchMoreSuccess} event.
	     *
	     * This allows external code to modify the results before rendering them.
	     *
	     * For example, the {@link Folding} component might use this event to construct a coherent parent child relationship between query results.
	     *
	     * All bound handlers will receive {@link IPreprocessResultsEventArgs} as an argument.
	     *
	     * The string value is `preprocessMoreResults`.
	     * @type {string}
	     */
	    QueryEvents.preprocessMoreResults = 'preprocessMoreResults';
	    /**
	     * Triggered when there is no result for a particular query.
	     *
	     * All bound handlers will receive {@link INoResultsEventArgs} as an argument.
	     *
	     * The string value is `noResults`.
	     * @type {string}
	     */
	    QueryEvents.noResults = 'noResults';
	    QueryEvents.buildingCallOptions = 'buildingCallOptions';
	    return QueryEvents;
	}());
	exports.QueryEvents = QueryEvents;


/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	var ResultListEvents = (function () {
	    function ResultListEvents() {
	    }
	    ResultListEvents.newResultsDisplayed = 'newResultsDisplayed';
	    ResultListEvents.newResultDisplayed = 'newResultDisplayed';
	    ResultListEvents.openQuickview = 'openQuickview';
	    return ResultListEvents;
	}());
	exports.ResultListEvents = ResultListEvents;


/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	var SearchAlertsEvents = (function () {
	    function SearchAlertsEvents() {
	    }
	    SearchAlertsEvents.searchAlertsCreated = 'searchAlertsCreated';
	    SearchAlertsEvents.searchAlertsDeleted = 'searchAlertsDeleted';
	    SearchAlertsEvents.searchAlertsFail = 'searchAlertsFail';
	    SearchAlertsEvents.searchAlertsPopulateMessage = 'searchAlertsPopulateMessage';
	    return SearchAlertsEvents;
	}());
	exports.SearchAlertsEvents = SearchAlertsEvents;


/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	var SettingsEvents = (function () {
	    function SettingsEvents() {
	    }
	    SettingsEvents.settingsPopulateMenu = 'settingsPopulateMenu';
	    return SettingsEvents;
	}());
	exports.SettingsEvents = SettingsEvents;


/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	var SliderEvents = (function () {
	    function SliderEvents() {
	    }
	    SliderEvents.startSlide = 'startSlide';
	    SliderEvents.duringSlide = 'duringSlide';
	    SliderEvents.endSlide = 'endSlide';
	    SliderEvents.graphValueSelected = 'graphValueSelected';
	    return SliderEvents;
	}());
	exports.SliderEvents = SliderEvents;


/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	var StandaloneSearchInterfaceEvents = (function () {
	    function StandaloneSearchInterfaceEvents() {
	    }
	    StandaloneSearchInterfaceEvents.beforeRedirect = 'beforeRedirect';
	    return StandaloneSearchInterfaceEvents;
	}());
	exports.StandaloneSearchInterfaceEvents = StandaloneSearchInterfaceEvents;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ColorUtils_1 = __webpack_require__(53);
	exports.ColorUtils = ColorUtils_1.ColorUtils;
	var CookieUtils_1 = __webpack_require__(36);
	exports.Cookie = CookieUtils_1.Cookie;
	var CurrencyUtils_1 = __webpack_require__(54);
	exports.CurrencyUtils = CurrencyUtils_1.CurrencyUtils;
	var DateUtils_1 = __webpack_require__(55);
	exports.DateUtils = DateUtils_1.DateUtils;
	var DeviceUtils_1 = __webpack_require__(19);
	exports.DeviceUtils = DeviceUtils_1.DeviceUtils;
	var Dom_1 = __webpack_require__(56);
	exports.Dom = Dom_1.Dom;
	exports.$$ = Dom_1.$$;
	var DomUtils_1 = __webpack_require__(58);
	exports.DomUtils = DomUtils_1.DomUtils;
	var EmailActionsUtils_1 = __webpack_require__(61);
	exports.EmailActionsUtils = EmailActionsUtils_1.EmailActionsUtils;
	var EmailUtils_1 = __webpack_require__(62);
	exports.EmailUtils = EmailUtils_1.EmailUtils;
	var FeatureDetectionUtils_1 = __webpack_require__(63);
	exports.FeatureDetectionUtils = FeatureDetectionUtils_1.FeatureDetectionUtils;
	var HashUtils_1 = __webpack_require__(64);
	exports.HashUtils = HashUtils_1.HashUtils;
	var HighlightUtils_1 = __webpack_require__(65);
	exports.HighlightUtils = HighlightUtils_1.HighlightUtils;
	exports.StringAndHoles = HighlightUtils_1.StringAndHoles;
	var HtmlUtils_1 = __webpack_require__(66);
	exports.HTMLUtils = HtmlUtils_1.HTMLUtils;
	var KeyboardUtils_1 = __webpack_require__(67);
	exports.KEYBOARD = KeyboardUtils_1.KEYBOARD;
	exports.KeyboardUtils = KeyboardUtils_1.KeyboardUtils;
	var LocalStorageUtils_1 = __webpack_require__(68);
	exports.LocalStorageUtils = LocalStorageUtils_1.LocalStorageUtils;
	var OSUtils_1 = __webpack_require__(69);
	exports.OSUtils = OSUtils_1.OSUtils;
	exports.OS_NAME = OSUtils_1.OS_NAME;
	var PopupUtils_1 = __webpack_require__(70);
	exports.PopupUtils = PopupUtils_1.PopupUtils;
	var QueryUtils_1 = __webpack_require__(22);
	exports.QueryUtils = QueryUtils_1.QueryUtils;
	var StreamHighlightUtils_1 = __webpack_require__(71);
	exports.StreamHighlightUtils = StreamHighlightUtils_1.StreamHighlightUtils;
	var StringUtils_1 = __webpack_require__(60);
	exports.StringUtils = StringUtils_1.StringUtils;
	var TimeSpanUtils_1 = __webpack_require__(18);
	exports.TimeSpan = TimeSpanUtils_1.TimeSpan;
	var Utils_1 = __webpack_require__(17);
	exports.Utils = Utils_1.Utils;


/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";
	var ColorUtils = (function () {
	    function ColorUtils() {
	    }
	    ColorUtils.hsvToRgb = function (h, s, v) {
	        var r, g, b;
	        var i = Math.floor(h * 6);
	        var f = h * 6 - i;
	        var p = v * (1 - s);
	        var q = v * (1 - f * s);
	        var t = v * (1 - (1 - f) * s);
	        switch (i % 6) {
	            case 0:
	                r = v, g = t, b = p;
	                break;
	            case 1:
	                r = q, g = v, b = p;
	                break;
	            case 2:
	                r = p, g = v, b = t;
	                break;
	            case 3:
	                r = p, g = q, b = v;
	                break;
	            case 4:
	                r = t, g = p, b = v;
	                break;
	            case 5:
	                r = v, g = p, b = q;
	                break;
	        }
	        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
	    };
	    ColorUtils.rgbToHsv = function (r, g, b) {
	        r = r / 255, g = g / 255, b = b / 255;
	        var max = Math.max(r, g, b), min = Math.min(r, g, b);
	        var h, s, v = max;
	        var d = max - min;
	        s = max == 0 ? 0 : d / max;
	        if (max == min) {
	            h = 0; // achromatic
	        }
	        else {
	            switch (max) {
	                case r:
	                    h = (g - b) / d + (g < b ? 6 : 0);
	                    break;
	                case g:
	                    h = (b - r) / d + 2;
	                    break;
	                case b:
	                    h = (r - g) / d + 4;
	                    break;
	            }
	            h /= 6;
	        }
	        return [h, s, v];
	    };
	    return ColorUtils;
	}());
	exports.ColorUtils = ColorUtils;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Assert_1 = __webpack_require__(16);
	var Options_1 = __webpack_require__(32);
	var Utils_1 = __webpack_require__(17);
	var Globalize = __webpack_require__(4);
	var DefaultCurrencyToStringOptions = (function (_super) {
	    __extends(DefaultCurrencyToStringOptions, _super);
	    function DefaultCurrencyToStringOptions() {
	        _super.apply(this, arguments);
	        this.decimals = 0;
	    }
	    return DefaultCurrencyToStringOptions;
	}(Options_1.Options));
	var CurrencyUtils = (function () {
	    function CurrencyUtils() {
	    }
	    CurrencyUtils.currencyToString = function (value, options) {
	        if (Utils_1.Utils.isNullOrUndefined(value)) {
	            return '';
	        }
	        value = Number(value);
	        Assert_1.Assert.isNumber(value);
	        options = new DefaultCurrencyToStringOptions().merge(options);
	        var currency = Globalize.culture().numberFormat.currency;
	        var backup = currency.symbol;
	        if (Utils_1.Utils.isNonEmptyString(options.symbol)) {
	            currency.symbol = options.symbol;
	        }
	        var str = Globalize.format(value, 'c' + options.decimals.toString());
	        currency.symbol = backup;
	        return str;
	    };
	    return CurrencyUtils;
	}());
	exports.CurrencyUtils = CurrencyUtils;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Options_1 = __webpack_require__(32);
	var Utils_1 = __webpack_require__(17);
	var Strings_1 = __webpack_require__(33);
	var TimeSpanUtils_1 = __webpack_require__(18);
	var Globalize = __webpack_require__(4);
	var DefaultDateToStringOptions = (function (_super) {
	    __extends(DefaultDateToStringOptions, _super);
	    function DefaultDateToStringOptions() {
	        _super.apply(this, arguments);
	        this.now = new Date();
	        this.useTodayYesterdayAndTomorrow = true;
	        this.useWeekdayIfThisWeek = true;
	        this.omitYearIfCurrentOne = true;
	        this.useLongDateFormat = false;
	        this.includeTimeIfToday = true;
	        this.includeTimeIfThisWeek = true;
	        this.alwaysIncludeTime = false;
	        this.predefinedFormat = undefined;
	    }
	    return DefaultDateToStringOptions;
	}(Options_1.Options));
	var DateUtils = (function () {
	    function DateUtils() {
	    }
	    DateUtils.convertFromJsonDateIfNeeded = function (date) {
	        if (_.isDate(date)) {
	            return date;
	        }
	        else if (date !== null && !isNaN(Number(date))) {
	            return new Date(Number(date));
	        }
	        else if (_.isString(date)) {
	            return new Date(date.replace('@', ' '));
	        }
	        else {
	            return undefined;
	        }
	    };
	    DateUtils.dateForQuery = function (date) {
	        return date.getFullYear() + '/' + DateUtils.padNumber((date.getMonth() + 1).toString()) + '/' + DateUtils.padNumber(date.getDate().toString());
	    };
	    DateUtils.padNumber = function (num, length) {
	        if (length === void 0) { length = 2; }
	        while (num.length < length) {
	            num = '0' + num;
	        }
	        return num;
	    };
	    DateUtils.keepOnlyDatePart = function (date) {
	        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
	    };
	    DateUtils.offsetDateByDays = function (date, offset) {
	        var newDate = new Date(date.valueOf());
	        newDate.setDate(newDate.getDate() + offset);
	        return newDate;
	    };
	    DateUtils.dateToString = function (d, options) {
	        if (Utils_1.Utils.isNullOrUndefined(d)) {
	            return '';
	        }
	        options = new DefaultDateToStringOptions().merge(options);
	        var dateOnly = DateUtils.keepOnlyDatePart(d);
	        if (options.predefinedFormat) {
	            return Globalize.format(dateOnly, options.predefinedFormat);
	        }
	        var today = DateUtils.keepOnlyDatePart(options.now);
	        if (options.useTodayYesterdayAndTomorrow) {
	            if (dateOnly.valueOf() == today.valueOf()) {
	                return Strings_1.l('Today');
	            }
	            var tomorrow = DateUtils.offsetDateByDays(today, 1);
	            if (dateOnly.valueOf() == tomorrow.valueOf()) {
	                return Strings_1.l('Tomorrow');
	            }
	            var yesterday = DateUtils.offsetDateByDays(today, -1);
	            if (dateOnly.valueOf() == yesterday.valueOf()) {
	                return Strings_1.l('Yesterday');
	            }
	        }
	        var isThisWeek = Math.abs(TimeSpanUtils_1.TimeSpan.fromDates(dateOnly, today).getDays()) < 7;
	        if (options.useWeekdayIfThisWeek && isThisWeek) {
	            if (dateOnly.valueOf() > today.valueOf()) {
	                return Strings_1.l('Next') + ' ' + Globalize.format(dateOnly, 'dddd');
	            }
	            else {
	                return Strings_1.l('Last') + ' ' + Globalize.format(dateOnly, 'dddd');
	            }
	        }
	        if (options.omitYearIfCurrentOne && dateOnly.getFullYear() === today.getFullYear()) {
	            return Globalize.format(dateOnly, 'M');
	        }
	        if (options.useLongDateFormat) {
	            return Globalize.format(dateOnly, 'D');
	        }
	        return Globalize.format(dateOnly, 'd');
	    };
	    DateUtils.timeToString = function (date, options) {
	        if (Utils_1.Utils.isNullOrUndefined(date)) {
	            return '';
	        }
	        return Globalize.format(date, 't');
	    };
	    DateUtils.dateTimeToString = function (date, options) {
	        if (Utils_1.Utils.isNullOrUndefined(date)) {
	            return '';
	        }
	        options = new DefaultDateToStringOptions().merge(options);
	        var today = DateUtils.keepOnlyDatePart(options.now);
	        var isThisWeek = Math.abs(TimeSpanUtils_1.TimeSpan.fromDates(date, today).getDays()) < 7;
	        var datePart = DateUtils.dateToString(date, options);
	        var dateWithoutTime = DateUtils.keepOnlyDatePart(date);
	        if (options.alwaysIncludeTime || (options.includeTimeIfThisWeek && isThisWeek) || (options.includeTimeIfToday && dateWithoutTime.valueOf() == today.valueOf())) {
	            return datePart + ', ' + DateUtils.timeToString(date);
	        }
	        else {
	            return datePart;
	        }
	    };
	    DateUtils.monthToString = function (month) {
	        var date = new Date(1980, month);
	        return Globalize.format(date, 'MMMM');
	    };
	    DateUtils.isValid = function (date) {
	        if (date instanceof Date) {
	            return !isNaN(date.getTime());
	        }
	        return false;
	    };
	    DateUtils.timeBetween = function (from, to) {
	        if (Utils_1.Utils.isNullOrUndefined(from) || Utils_1.Utils.isNullOrUndefined(to)) {
	            return '';
	        }
	        return ('0' + ((to.getTime() - from.getTime()) / (1000 * 60 * 60)).toFixed()).slice(-2) +
	            ':' + ('0' + ((to.getTime() - from.getTime()) % (1000 * 60 * 60) / (1000 * 60)).toFixed()).slice(-2) +
	            ':' + ('0' + ((to.getTime() - from.getTime()) % (1000 * 60) / (1000)).toFixed()).slice(-2);
	    };
	    return DateUtils;
	}());
	exports.DateUtils = DateUtils;
	// Shim for IE8 Date.toISOString
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
	if (!Date.prototype.toISOString) {
	    (function () {
	        function pad(nber) {
	            if (nber < 10) {
	                return '0' + nber;
	            }
	            return nber;
	        }
	        Date.prototype.toISOString = function () {
	            return this.getUTCFullYear() +
	                '-' + pad(this.getUTCMonth() + 1) +
	                '-' + pad(this.getUTCDate()) +
	                'T' + pad(this.getUTCHours()) +
	                ':' + pad(this.getUTCMinutes()) +
	                ':' + pad(this.getUTCSeconds()) +
	                '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
	                'Z';
	        };
	    }());
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Utils_1 = __webpack_require__(17);
	var JQueryutils_1 = __webpack_require__(57);
	var Assert_1 = __webpack_require__(16);
	var Logger_1 = __webpack_require__(15);
	/**
	 * This is essentially an helper class for dom manipulation.<br/>
	 * This is intended to provide some basic functionality normally offered by jQuery.<br/>
	 * To minimize the multiple jQuery conflict we have while integrating in various system, we implemented the very small subset that the framework needs.<br/>
	 * See {@link $$}, which is a function that wraps this class constructor, for less verbose code.
	 */
	var Dom = (function () {
	    /**
	     * Create a new Dom object with the given HTMLElement
	     * @param el The HTMLElement to wrap in a Dom object
	     */
	    function Dom(el) {
	        Assert_1.Assert.exists(el);
	        this.el = el;
	    }
	    /**
	     * Helper function to quickly create an HTMLElement
	     * @param type The type of the element (e.g. div, span)
	     * @param props The props (id, className, attributes) of the element<br/>
	     * Can be either specified in dashed-case strings ('my-attribute') or camelCased keys (myAttribute),
	     * the latter of which will automatically get replaced to dash-case.
	     * @param innerHTML The contents of the new HTMLElement, either in string form or as another HTMLElement
	     */
	    Dom.createElement = function (type, props) {
	        var children = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            children[_i - 2] = arguments[_i];
	        }
	        var elem = document.createElement(type);
	        for (var key in props) {
	            if (key === 'className') {
	                elem.className = props['className'];
	            }
	            else {
	                var attr = key.indexOf('-') !== -1 ? key : Utils_1.Utils.toDashCase(key);
	                elem.setAttribute(attr, props[key]);
	            }
	        }
	        _.each(children, function (child) {
	            if (child instanceof HTMLElement) {
	                elem.appendChild(child);
	            }
	            else if (_.isString(child)) {
	                elem.innerHTML += child;
	            }
	            else if (child instanceof Dom) {
	                elem.appendChild(child.el);
	            }
	        });
	        return elem;
	    };
	    /**
	     * Adds the element to the children of the current element
	     * @param element The element to append
	     * @returns {string}
	     */
	    Dom.prototype.append = function (element) {
	        this.el.appendChild(element);
	    };
	    /**
	     * Get the css value of the specified property.<br/>
	     * @param property The property
	     * @returns {string}
	     */
	    Dom.prototype.css = function (property) {
	        if (this.el.style[property]) {
	            return this.el.style[property];
	        }
	        return window.getComputedStyle(this.el).getPropertyValue(property);
	    };
	    /**
	     * Get or set the text content of the HTMLElement.<br/>
	     * @param txt Optional. If given, this will set the text content of the element. If not, will return the text content.
	     * @returns {string}
	     */
	    Dom.prototype.text = function (txt) {
	        if (Utils_1.Utils.isUndefined(txt)) {
	            return this.el.innerText || this.el.textContent;
	        }
	        else {
	            if (this.el.innerText != undefined) {
	                this.el.innerText = txt;
	            }
	            else if (this.el.textContent != undefined) {
	                this.el.textContent = txt;
	            }
	        }
	    };
	    /**
	     * Performant way to transform a NodeList to an array of HTMLElement, for manipulation<br/>
	     * http://jsperf.com/nodelist-to-array/72
	     * @param nodeList a {NodeList} to convert to an array
	     * @returns {HTMLElement[]}
	     */
	    Dom.prototype.nodeListToArray = function (nodeList) {
	        var i = nodeList.length;
	        var arr = new Array(i);
	        while (i--) {
	            arr[i] = nodeList.item(i);
	        }
	        return arr;
	    };
	    /**
	     * Empty (remove all child) from the element;
	     */
	    Dom.prototype.empty = function () {
	        while (this.el.firstChild) {
	            this.el.removeChild(this.el.firstChild);
	        }
	    };
	    /**
	     * Empty the element and all childs from the dom;
	     */
	    Dom.prototype.remove = function () {
	        this.el.parentNode.removeChild(this.el);
	    };
	    /**
	     * Show the element;
	     */
	    Dom.prototype.show = function () {
	        this.el.style.display = 'block';
	    };
	    /**
	     * Hide the element;
	     */
	    Dom.prototype.hide = function () {
	        this.el.style.display = 'none';
	    };
	    /**
	     * Toggle the element visibility.<br/>
	     * Optional visible parameter, if specified will set the element visibility
	     * @param visible Optional parameter to display or hide the element
	     */
	    Dom.prototype.toggle = function (visible) {
	        if (visible === undefined) {
	            if (this.el.style.display == 'block') {
	                this.hide();
	            }
	            else {
	                this.show();
	            }
	        }
	        else {
	            if (visible) {
	                this.show();
	            }
	            else {
	                this.hide();
	            }
	        }
	    };
	    /**
	     * Returns the value of the specified attribute.
	     * @param name The name of the attribute
	     */
	    Dom.prototype.getAttribute = function (name) {
	        return this.el.getAttribute(name);
	    };
	    /**
	     * Sets the value of the specified attribute.
	     * @param name The name of the attribute
	     * @param value The value to set
	     */
	    Dom.prototype.setAttribute = function (name, value) {
	        this.el.setAttribute(name, value);
	    };
	    /**
	     * Find a child element, given a CSS selector
	     * @param selector A CSS selector, can be a .className or #id
	     * @returns {HTMLElement}
	     */
	    Dom.prototype.find = function (selector) {
	        return this.el.querySelector(selector);
	    };
	    /**
	     * Check if the element match the selector.<br/>
	     * The selector can be a class, an id or a tag.<br/>
	     * Eg : .is('.foo') or .is('#foo') or .is('div').
	     */
	    Dom.prototype.is = function (selector) {
	        if (this.el.tagName.toLowerCase() == selector.toLowerCase()) {
	            return true;
	        }
	        if (selector[0] == '.') {
	            if (this.hasClass(selector.substr(1))) {
	                return true;
	            }
	        }
	        if (selector[0] == '#') {
	            if (this.el.getAttribute('id') == selector.substr(1)) {
	                return true;
	            }
	        }
	        return false;
	    };
	    /**
	     * Get the first element that matches the classname by testing the element itself and traversing up through its ancestors in the DOM tree.
	     *
	     * Stops at the body of the document
	     * @param className A CSS classname
	     */
	    Dom.prototype.closest = function (className) {
	        return this.traverseAncestorForClass(this.el, className);
	    };
	    /**
	     * Get the first element that matches the classname by testing the element itself and traversing up through its ancestors in the DOM tree.
	     *
	     * Stops at the body of the document
	     * @returns {any}
	     */
	    Dom.prototype.parent = function (className) {
	        if (this.el.parentElement == undefined) {
	            return undefined;
	        }
	        return this.traverseAncestorForClass(this.el.parentElement, className);
	    };
	    /**
	     *  Get all the ancestors of the current element that match the given className
	     *
	     *  Return an empty array if none found.
	     * @param className
	     * @returns {HTMLElement[]}
	     */
	    Dom.prototype.parents = function (className) {
	        var parentsFound = [];
	        var parentFound = this.parent(className);
	        while (parentFound) {
	            parentsFound.push(parentFound);
	            parentFound = new Dom(parentFound).parent(className);
	        }
	        return parentsFound;
	    };
	    /**
	     * Return all children
	     * @returns {HTMLElement[]}
	     */
	    Dom.prototype.children = function () {
	        return this.nodeListToArray(this.el.children);
	    };
	    /**
	     * Return all siblings
	     * @returns {HTMLElement[]}
	     */
	    Dom.prototype.siblings = function (selector) {
	        var sibs = [];
	        var currentElement = this.el.parentNode.firstChild;
	        for (; currentElement; currentElement = currentElement.nextSibling) {
	            if (currentElement != this.el) {
	                if (this.matches(currentElement, selector) || !selector) {
	                    sibs.push(currentElement);
	                }
	            }
	        }
	        return sibs;
	    };
	    Dom.prototype.matches = function (element, selector) {
	        var all = document.querySelectorAll(selector);
	        for (var i = 0; i < all.length; i++) {
	            if (all[i] === element) {
	                return true;
	            }
	        }
	        return false;
	    };
	    /**
	     * Find all children that match the given CSS selector
	     * @param selector A CSS selector, can be a .className
	     * @returns {HTMLElement[]}
	     */
	    Dom.prototype.findAll = function (selector) {
	        return this.nodeListToArray(this.el.querySelectorAll(selector));
	    };
	    /**
	     * Find the child elements using a className
	     * @param className Class of the childs elements to find
	     * @returns {HTMLElement[]}
	     */
	    Dom.prototype.findClass = function (className) {
	        if ('getElementsByClassName' in this.el) {
	            return this.nodeListToArray(this.el.getElementsByClassName(className));
	        }
	        // For ie 8
	        return this.nodeListToArray(this.el.querySelectorAll('.' + className));
	    };
	    /**
	     * Find an element using an ID
	     * @param id ID of the element to find
	     * @returns {HTMLElement}
	     */
	    Dom.prototype.findId = function (id) {
	        return document.getElementById(id);
	    };
	    Dom.prototype.addClass = function (className) {
	        var _this = this;
	        if (_.isArray(className)) {
	            _.each(className, function (name) {
	                _this.addClass(name);
	            });
	        }
	        else {
	            if (!this.hasClass(className)) {
	                if (this.el.className) {
	                    this.el.className += ' ' + className;
	                }
	                else {
	                    this.el.className = className;
	                }
	            }
	        }
	    };
	    /**
	     * Remove the class on the element. Works even if the element does not possess the class.
	     * @param className Classname to remove on the the element
	     */
	    Dom.prototype.removeClass = function (className) {
	        this.el.className = this.el.className.replace(new RegExp("(^|\\s)" + className + "(\\s|\\b)", 'g'), '$1').trim();
	    };
	    /**
	     * Toggle the class on the element.
	     * @param className Classname to toggle
	     * @swtch If true, add the class regardless and if false, remove the class
	     */
	    Dom.prototype.toggleClass = function (className, swtch) {
	        if (Utils_1.Utils.isNullOrUndefined(swtch)) {
	            if (this.hasClass(className)) {
	                this.removeClass(className);
	            }
	            else {
	                this.addClass(className);
	            }
	        }
	        else {
	            if (swtch) {
	                this.addClass(className);
	            }
	            else {
	                this.removeClass(className);
	            }
	        }
	    };
	    /**
	     * Sets the inner html of the element
	     * @param html The html to set
	     */
	    Dom.prototype.setHtml = function (html) {
	        this.el.innerHTML = html;
	    };
	    /**
	     * Return an array with all the classname on the element. Empty array if the element has not classname
	     * @returns {any|Array}
	     */
	    Dom.prototype.getClass = function () {
	        return this.el.className.match(Dom.CLASS_NAME_REGEX) || [];
	    };
	    /**
	     * Check if the element has the given class name
	     * @param className Classname to verify
	     * @returns {boolean}
	     */
	    Dom.prototype.hasClass = function (className) {
	        return _.contains(this.getClass(), className);
	    };
	    /**
	     * Detach the element from the DOM.
	     */
	    Dom.prototype.detach = function () {
	        this.el.parentElement && this.el.parentElement.removeChild(this.el);
	    };
	    /**
	     * Insert the current node after the given reference node
	     * @param refNode
	     */
	    Dom.prototype.insertAfter = function (refNode) {
	        refNode.parentNode && refNode.parentNode.insertBefore(this.el, refNode.nextSibling);
	    };
	    /**
	     * Insert the current node before the given reference node
	     * @param refNode
	     */
	    Dom.prototype.insertBefore = function (refNode) {
	        refNode.parentNode && refNode.parentNode.insertBefore(this.el, refNode);
	    };
	    /**
	     * Insert the given node as the first child of the current node
	     * @param toPrepend
	     */
	    Dom.prototype.prepend = function (toPrepend) {
	        if (this.el.firstChild) {
	            new Dom(toPrepend).insertBefore(this.el.firstChild);
	        }
	        else {
	            this.el.appendChild(toPrepend);
	        }
	    };
	    Dom.prototype.on = function (type, eventHandle) {
	        var _this = this;
	        if (_.isArray(type)) {
	            _.each(type, function (t) {
	                _this.on(t, eventHandle);
	            });
	        }
	        else {
	            var jq = JQueryutils_1.JQueryUtils.getJQuery();
	            if (jq) {
	                jq(this.el).on(type, eventHandle);
	            }
	            else if (this.el.addEventListener) {
	                var fn = function (e) {
	                    eventHandle(e, e.detail);
	                };
	                Dom.handlers.push({
	                    eventHandle: eventHandle,
	                    fn: fn
	                });
	                this.el.addEventListener(type, fn, false);
	            }
	            else if (this.el['on']) {
	                this.el['on']('on' + type, eventHandle);
	            }
	        }
	    };
	    Dom.prototype.one = function (type, eventHandle) {
	        var _this = this;
	        if (_.isArray(type)) {
	            _.each(type, function (t) {
	                _this.one(t, eventHandle);
	            });
	        }
	        else {
	            var once = function (e, args) {
	                _this.off(type, once);
	                return eventHandle(e, args);
	            };
	            this.on(type, once);
	        }
	    };
	    Dom.prototype.off = function (type, eventHandle) {
	        var _this = this;
	        if (_.isArray(type)) {
	            _.each(type, function (t) {
	                _this.off(t, eventHandle);
	            });
	        }
	        else {
	            var jq = JQueryutils_1.JQueryUtils.getJQuery();
	            if (jq) {
	                jq(this.el).off(type, eventHandle);
	            }
	            else if (this.el.removeEventListener) {
	                var idx = 0;
	                var found = _.find(Dom.handlers, function (handlerObj, i) {
	                    if (handlerObj.eventHandle == eventHandle) {
	                        idx = i;
	                        return true;
	                    }
	                });
	                if (found) {
	                    this.el.removeEventListener(type, found.fn, false);
	                    Dom.handlers.splice(idx, 1);
	                }
	            }
	            else if (this.el['off']) {
	                this.el['off']('on' + type, eventHandle);
	            }
	        }
	    };
	    /**
	     * Trigger an event on the element.
	     * @param type The event type to trigger
	     * @param data
	     */
	    Dom.prototype.trigger = function (type, data) {
	        var jq = JQueryutils_1.JQueryUtils.getJQuery();
	        if (jq) {
	            jq(this.el).trigger(type, data);
	        }
	        else if (CustomEvent !== undefined) {
	            var event = new CustomEvent(type, { detail: data, bubbles: true });
	            this.el.dispatchEvent(event);
	        }
	        else {
	            // TODO Support for older browser ?
	            new Logger_1.Logger(this).error('CANNOT TRIGGER EVENT FOR OLDER BROWSER');
	        }
	    };
	    /**
	     * Check if the element is "empty" (has no innerHTML content). Whitespace is considered empty</br>
	     * @returns {boolean}
	     */
	    Dom.prototype.isEmpty = function () {
	        return Dom.ONLY_WHITE_SPACE_REGEX.test(this.el.innerHTML);
	    };
	    /**
	     * Check if the element is a descendant of parent
	     * @param other
	     */
	    Dom.prototype.isDescendant = function (parent) {
	        var node = this.el.parentNode;
	        while (node != null) {
	            if (node == parent) {
	                return true;
	            }
	            node = node.parentNode;
	        }
	        return false;
	    };
	    /**
	     * Replace the current element with the other element, then detach the current element
	     * @param otherElem
	     */
	    Dom.prototype.replaceWith = function (otherElem) {
	        var parent = this.el.parentNode;
	        if (parent) {
	            new Dom(otherElem).insertAfter(this.el);
	        }
	        this.detach();
	    };
	    // based on http://api.jquery.com/position/
	    /**
	     * Return the position relative to the offset parent.
	     */
	    Dom.prototype.position = function () {
	        var offsetParent = this.offsetParent();
	        var parentOffset = { top: 0, left: 0 };
	        var offset = this.offset();
	        if (!$$(offsetParent).is('html')) {
	            parentOffset = $$(offsetParent).offset();
	        }
	        var borderTopWidth = parseInt($$(offsetParent).css('borderTopWidth'));
	        var borderLeftWidth = parseInt($$(offsetParent).css('borderLeftWidth'));
	        borderTopWidth = isNaN(borderTopWidth) ? 0 : borderTopWidth;
	        borderLeftWidth = isNaN(borderLeftWidth) ? 0 : borderLeftWidth;
	        parentOffset = {
	            top: parentOffset.top + borderTopWidth,
	            left: parentOffset.left + borderLeftWidth
	        };
	        var marginTop = parseInt(this.css('marginTop'));
	        var marginLeft = parseInt(this.css('marginLeft'));
	        marginTop = isNaN(marginTop) ? 0 : marginTop;
	        marginLeft = isNaN(marginLeft) ? 0 : marginLeft;
	        return {
	            top: offset.top - parentOffset.top - marginTop,
	            left: offset.left - parentOffset.left - marginLeft
	        };
	    };
	    // based on https://api.jquery.com/offsetParent/
	    /**
	     * Returns the offset parent. The offset parent is the closest parent that is positioned.
	     * An element is positioned when its position property is not 'static', which is the default.
	     */
	    Dom.prototype.offsetParent = function () {
	        var offsetParent = this.el.offsetParent;
	        while (offsetParent instanceof HTMLElement && $$(offsetParent).css('position') === 'static') {
	            // Will break out if it stumbles upon an non-HTMLElement and return documentElement
	            offsetParent = offsetParent.offsetParent;
	        }
	        if (!(offsetParent instanceof HTMLElement)) {
	            return document.documentElement;
	        }
	        return offsetParent;
	    };
	    // based on http://api.jquery.com/offset/
	    /**
	     * Return the position relative to the document.
	     */
	    Dom.prototype.offset = function () {
	        // In <=IE11, calling getBoundingClientRect on a disconnected node throws an error
	        if (!this.el.getClientRects().length) {
	            return { top: 0, left: 0 };
	        }
	        var rect = this.el.getBoundingClientRect();
	        if (rect.width || rect.height) {
	            var doc = this.el.ownerDocument;
	            var docElem = doc.documentElement;
	            return {
	                top: rect.top + window.pageYOffset - docElem.clientTop,
	                left: rect.left + window.pageXOffset - docElem.clientLeft
	            };
	        }
	        return rect;
	    };
	    /**
	     * Returns the offset width of the element
	     */
	    Dom.prototype.width = function () {
	        return this.el.offsetWidth;
	    };
	    /**
	     * Returns the offset height of the element
	     */
	    Dom.prototype.height = function () {
	        return this.el.offsetHeight;
	    };
	    Dom.prototype.traverseAncestorForClass = function (current, className) {
	        if (current === void 0) { current = this.el; }
	        if (className.indexOf('.') == 0) {
	            className = className.substr(1);
	        }
	        var found = false;
	        while (!found) {
	            if ($$(current).hasClass(className)) {
	                found = true;
	            }
	            if (current.tagName.toLowerCase() == 'body') {
	                break;
	            }
	            if (current.parentElement == null) {
	                break;
	            }
	            if (!found) {
	                current = current.parentElement;
	            }
	        }
	        if (found) {
	            return current;
	        }
	        return undefined;
	    };
	    Dom.CLASS_NAME_REGEX = /-?[_a-zA-Z]+[_a-zA-Z0-9-]*/g;
	    Dom.ONLY_WHITE_SPACE_REGEX = /^\s*$/;
	    Dom.handlers = [];
	    return Dom;
	}());
	exports.Dom = Dom;
	var Win = (function () {
	    function Win(win) {
	        this.win = win;
	    }
	    Win.prototype.height = function () {
	        return this.win.innerHeight;
	    };
	    Win.prototype.width = function () {
	        return this.win.innerWidth;
	    };
	    return Win;
	}());
	exports.Win = Win;
	var Doc = (function () {
	    function Doc(doc) {
	        this.doc = doc;
	    }
	    Doc.prototype.height = function () {
	        var body = this.doc.body;
	        return Math.max(body.scrollHeight, body.offsetHeight);
	    };
	    Doc.prototype.width = function () {
	        var body = this.doc.body;
	        return Math.max(body.scrollWidth, body.offsetWidth);
	    };
	    return Doc;
	}());
	exports.Doc = Doc;
	function $$() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i - 0] = arguments[_i];
	    }
	    if (args.length === 1 && args[0] instanceof Dom) {
	        return args[0];
	    }
	    else if (args.length === 1 && (!_.isString(args[0]))) {
	        return new Dom(args[0]);
	    }
	    else {
	        return new Dom(Dom.createElement.apply(Dom, args));
	    }
	}
	exports.$$ = $$;
	function htmlToDom(html) {
	    var parsedHtml = document.createElement('div');
	    parsedHtml.innerHTML = html;
	    // If the template has a single root element, we return it directly. Otherwise
	    // we'll have to wrap this thing in a div as ResultList expects a single element.
	    if (parsedHtml.children.length == 1) {
	        return parsedHtml.children.item(0);
	    }
	    return parsedHtml;
	}
	exports.htmlToDom = htmlToDom;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";
	var JQueryUtils = (function () {
	    function JQueryUtils() {
	    }
	    JQueryUtils.getJQuery = function () {
	        if (window && window['Coveo'] && window['Coveo']['$']) {
	            return window['Coveo']['$'];
	        }
	        return false;
	    };
	    JQueryUtils.isInstanceOfJQuery = function (obj) {
	        var jq = this.getJQuery();
	        if (jq) {
	            return obj instanceof jq;
	        }
	        return false;
	    };
	    JQueryUtils.isInstanceOfJqueryEvent = function (obj) {
	        var jq = this.getJQuery();
	        if (jq) {
	            return obj instanceof jq.Event;
	        }
	        return false;
	    };
	    return JQueryUtils;
	}());
	exports.JQueryUtils = JQueryUtils;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Dom_1 = __webpack_require__(56);
	var DateUtils_1 = __webpack_require__(55);
	var FileTypes_1 = __webpack_require__(59);
	var Utils_1 = __webpack_require__(17);
	var StringUtils_1 = __webpack_require__(60);
	var DomUtils = (function () {
	    function DomUtils() {
	    }
	    DomUtils.getPopUpCloseButton = function (captionForClose, captionForReminder) {
	        var container = document.createElement('span');
	        var closeButton = document.createElement('span');
	        Dom_1.$$(closeButton).addClass('coveo-close-button');
	        container.appendChild(closeButton);
	        var iconClose = document.createElement('span');
	        Dom_1.$$(iconClose).addClass('coveo-icon');
	        Dom_1.$$(iconClose).addClass('coveo-sprites-quickview-close');
	        closeButton.appendChild(iconClose);
	        Dom_1.$$(closeButton).text(captionForClose);
	        var closeReminder = document.createElement('span');
	        Dom_1.$$(closeReminder).addClass('coveo-pop-up-reminder');
	        Dom_1.$$(closeReminder).text(captionForReminder);
	        container.appendChild(closeReminder);
	        return container.outerHTML;
	    };
	    DomUtils.getBasicLoadingAnimation = function () {
	        var loadDotClass = 'coveo-loading-dot';
	        var dom = document.createElement('div');
	        dom.className = 'coveo-first-loading-animation';
	        dom.innerHTML = "<div class='coveo-logo' ></div>\n    <div class='coveo-loading-container'>\n      <div class='" + loadDotClass + "'></div>\n      <div class='" + loadDotClass + "'></div>\n      <div class='" + loadDotClass + "'></div>\n      <div class='" + loadDotClass + "'></div>\n    </div>";
	        return dom;
	    };
	    DomUtils.highlightElement = function (initialString, valueToSearch) {
	        var regex = new RegExp(Utils_1.Utils.escapeRegexCharacter(valueToSearch), 'i');
	        var firstChar = initialString.search(regex);
	        var lastChar = firstChar + valueToSearch.length;
	        return StringUtils_1.StringUtils.htmlEncode(initialString.slice(0, firstChar)) + "<span class='coveo-highlight'>" + StringUtils_1.StringUtils.htmlEncode(initialString.slice(firstChar, lastChar)) + "</span>" + StringUtils_1.StringUtils.htmlEncode(initialString.slice(lastChar));
	    };
	    DomUtils.getLoadingSpinner = function () {
	        var loading = Dom_1.$$('div');
	        loading.addClass('coveo-loading-spinner');
	        return loading.el;
	    };
	    DomUtils.getModalBoxHeader = function (title) {
	        var header = Dom_1.$$('div');
	        header.el.innerHTML = "<div class='coveo-modalbox-right-header'>\n        <span class='coveo-modalbox-close-button'>\n          <span class='coveo-icon coveo-sprites-common-clear'></span>\n        </span>\n      </div>\n      <div class='coveo-modalbox-left-header'>\n        <span class='coveo-modalbox-pop-up-reminder'> " + (title || '') + "</span>\n      </div>";
	        return header;
	    };
	    DomUtils.getQuickviewHeader = function (result, options, bindings) {
	        var date = '';
	        if (options.showDate) {
	            date = DateUtils_1.DateUtils.dateTimeToString(new Date(result.raw.date));
	        }
	        var fileType = FileTypes_1.FileTypes.get(result);
	        var header = Dom_1.$$('div');
	        header.el.innerHTML = "<div class='coveo-quickview-right-header'>\n        <span class='coveo-quickview-time'>" + date + "</span>\n        <span class='coveo-quickview-close-button'>\n          <span class='coveo-icon coveo-sprites-common-clear'></span>\n        </span>\n      </div>\n      <div class='coveo-quickview-left-header'>\n        <span class='coveo-quickview-icon coveo-small " + fileType.icon + "'></span>\n        <span class='coveo-quickview-pop-up-reminder'> " + (options.title || '') + "</span>\n      </div>";
	        new Coveo[Coveo['Salesforce'] ? 'SalesforceResultLink' : 'ResultLink'](header.find('.coveo-quickview-pop-up-reminder'), undefined, bindings, result);
	        return header;
	    };
	    return DomUtils;
	}());
	exports.DomUtils = DomUtils;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Utils_1 = __webpack_require__(17);
	var Strings_1 = __webpack_require__(33);
	var Assert_1 = __webpack_require__(16);
	// On-demand mapping of file types to captions. Used by facets, but I don't
	// really like this. Maybe a dedicated filetype facet would be better? Hmm...
	var fileTypeCaptions;
	var FileTypes = (function () {
	    function FileTypes() {
	    }
	    FileTypes.get = function (result) {
	        var objecttype = result.raw.objecttype;
	        var filetype = result.raw.filetype;
	        // When @objecttype is File we fallback on @filetype for icons and such
	        if (Utils_1.Utils.isNonEmptyString(objecttype) && objecttype.toLowerCase() != 'file') {
	            return FileTypes.getObjectType(objecttype);
	        }
	        else if (Utils_1.Utils.isNonEmptyString(filetype)) {
	            return FileTypes.getFileType(filetype);
	        }
	        else {
	            return {
	                // This will render a default icon. Really it should not happen.
	                icon: 'coveo-icon filetype',
	                caption: Strings_1.l('Unknown')
	            };
	        }
	    };
	    FileTypes.getObjectType = function (objecttype) {
	        // We must use lowercase filetypes because that's how the CSS classes
	        // are generated (they are case sensitive, alas).
	        objecttype = objecttype.toLowerCase();
	        // Most object types have a set of localized strings in the main dictionary
	        var localizedString = Strings_1.l('objecttype_' + objecttype);
	        return {
	            'icon': 'coveo-icon objecttype ' + objecttype,
	            caption: localizedString != 'objecttype_' + objecttype ? localizedString : objecttype
	        };
	    };
	    FileTypes.getFileType = function (filetype) {
	        // We must use lowercase filetypes because that's how the CSS classes
	        // are generated (they are case sensitive, alas).
	        filetype = filetype.toLowerCase();
	        // Sometimes, filetype begins with a period (typically means the index has
	        // no idea and uses the file extension as a filetype).
	        if (filetype[0] == '.') {
	            filetype = filetype.substring(1);
	        }
	        // Most filetypes have a set of localized strings in the main dictionary
	        var localizedString = Strings_1.l('filetype_' + filetype);
	        return {
	            'icon': 'coveo-icon filetype ' + filetype,
	            caption: localizedString != 'filetype_' + filetype ? localizedString : filetype
	        };
	    };
	    FileTypes.getFileTypeCaptions = function () {
	        if (fileTypeCaptions == undefined) {
	            fileTypeCaptions = {};
	            var strings = String['locales'][String['locale'].toLowerCase()];
	            Assert_1.Assert.isNotUndefined(strings);
	            _.each(_.keys(strings), function (key) {
	                if (key.indexOf('filetype_') == 0) {
	                    fileTypeCaptions[key.substr('filetype_'.length)] = key.toLocaleString();
	                }
	                else if (key.indexOf('objecttype_') == 0) {
	                    fileTypeCaptions[key.substr('objecttype_'.length)] = key.toLocaleString();
	                }
	            });
	        }
	        return fileTypeCaptions;
	    };
	    return FileTypes;
	}());
	exports.FileTypes = FileTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Assert_1 = __webpack_require__(16);
	var Dom_1 = __webpack_require__(56);
	var StringUtils = (function () {
	    function StringUtils() {
	    }
	    StringUtils.javascriptEncode = function (value) {
	        Assert_1.Assert.isString(value);
	        value = value.replace(/\\/g, '\\\\');
	        value = value.replace(/'/g, '\\\'');
	        value = value.replace(/"/g, '\\"');
	        return value;
	    };
	    StringUtils.htmlEncode = function (value) {
	        Assert_1.Assert.isString(value);
	        var div = Dom_1.$$('div');
	        div.text(value);
	        return div.el.innerHTML;
	    };
	    StringUtils.splice = function (value, index, remove, toAdd) {
	        return value.slice(0, index) + toAdd + value.slice(index + Math.abs(remove));
	    };
	    StringUtils.removeMiddle = function (value, length, toAdd) {
	        if (value.length < length) {
	            return value;
	        }
	        var toRemove = value.length - length;
	        var index = Math.floor(length / 2);
	        return StringUtils.splice(value, index, toRemove, toAdd);
	    };
	    StringUtils.regexEncode = function (value) {
	        Assert_1.Assert.isString(value);
	        return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
	    };
	    StringUtils.stringToRegex = function (value, ignoreAccent) {
	        if (ignoreAccent === void 0) { ignoreAccent = false; }
	        Assert_1.Assert.isString(value);
	        var encoded = StringUtils.regexEncode(value);
	        if (ignoreAccent) {
	            return _.map(encoded, function (char) {
	                var regexp = _.find(StringUtils.accented, function (regexp) { return char.match(regexp) != null; });
	                if (regexp) {
	                    return regexp.source;
	                }
	                return char;
	            }).join('');
	        }
	        return encoded;
	    };
	    StringUtils.wildcardsToRegex = function (value, ignoreAccent) {
	        if (ignoreAccent === void 0) { ignoreAccent = false; }
	        Assert_1.Assert.isString(value);
	        var encoded = StringUtils.stringToRegex(value, ignoreAccent);
	        encoded = encoded.replace(/\\\*/, '.*');
	        encoded = encoded.replace(/\\\?/, '.');
	        return encoded;
	    };
	    StringUtils.getHighlights = function (strToSearch, regexToFind, dataHighlightGroupTerm) {
	        var match, indexes = [];
	        while (match = regexToFind.exec(strToSearch)) {
	            var desiredMatch = match[2];
	            var undesiredMatch = match[1];
	            var offset = match.index + undesiredMatch.length;
	            indexes.push({ offset: offset, length: desiredMatch.length, dataHighlightGroupTerm: dataHighlightGroupTerm });
	            if (!regexToFind.global) {
	                break;
	            }
	        }
	        return _.isEmpty(indexes) ? undefined : indexes;
	    };
	    StringUtils.encodeCarriageReturn = function (strToEncode) {
	        Assert_1.Assert.isString(strToEncode);
	        return strToEncode.replace(/\n/g, '<br/>');
	    };
	    StringUtils.equalsCaseInsensitive = function (str1, str2) {
	        return str1.toLowerCase() == str2.toLowerCase();
	    };
	    StringUtils.match = function (value, regex) {
	        var results = [];
	        var arr;
	        while ((arr = regex.exec(value)) !== null) {
	            results.push(arr);
	        }
	        return results;
	    };
	    StringUtils.hashCode = function (str) {
	        var hash = 0;
	        var len = str.length;
	        for (var i = 0; i < len; i++) {
	            var char = str.charCodeAt(i);
	            hash = ((hash << 5) - hash) + char;
	            hash = hash & hash; // Convert to 32bit integer
	        }
	        return hash.toString(16);
	    };
	    // http://stackoverflow.com/a/25575009
	    StringUtils.removePunctuation = function (str) {
	        var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#\$%&\(\)\*\+,\-\.\/:;<=>\?@\[\]\^_`\{\|\}~]/g;
	        var spaceRE = /\s+/g;
	        return str.replace(punctRE, '').replace(spaceRE, ' ');
	    };
	    StringUtils.accented = {
	        'A': /[Aa\xaa\xc0-\xc5\xe0-\xe5\u0100-\u0105\u01cd\u01ce\u0200-\u0203\u0226\u0227\u1d2c\u1d43\u1e00\u1e01\u1e9a\u1ea0-\u1ea3\u2090\u2100\u2101\u213b\u249c\u24b6\u24d0\u3371-\u3374\u3380-\u3384\u3388\u3389\u33a9-\u33af\u33c2\u33ca\u33df\u33ff\uff21\uff41]/g,
	        'B': /[Bb\u1d2e\u1d47\u1e02-\u1e07\u212c\u249d\u24b7\u24d1\u3374\u3385-\u3387\u33c3\u33c8\u33d4\u33dd\uff22\uff42]/g,
	        'C': /[Cc\xc7\xe7\u0106-\u010d\u1d9c\u2100\u2102\u2103\u2105\u2106\u212d\u216d\u217d\u249e\u24b8\u24d2\u3376\u3388\u3389\u339d\u33a0\u33a4\u33c4-\u33c7\uff23\uff43]/g,
	        'D': /[Dd\u010e\u010f\u01c4-\u01c6\u01f1-\u01f3\u1d30\u1d48\u1e0a-\u1e13\u2145\u2146\u216e\u217e\u249f\u24b9\u24d3\u32cf\u3372\u3377-\u3379\u3397\u33ad-\u33af\u33c5\u33c8\uff24\uff44]/g,
	        'E': /[Ee\xc8-\xcb\xe8-\xeb\u0112-\u011b\u0204-\u0207\u0228\u0229\u1d31\u1d49\u1e18-\u1e1b\u1eb8-\u1ebd\u2091\u2121\u212f\u2130\u2147\u24a0\u24ba\u24d4\u3250\u32cd\u32ce\uff25\uff45]/g,
	        'F': /[Ff\u1da0\u1e1e\u1e1f\u2109\u2131\u213b\u24a1\u24bb\u24d5\u338a-\u338c\u3399\ufb00-\ufb04\uff26\uff46]/g,
	        'G': /[Gg\u011c-\u0123\u01e6\u01e7\u01f4\u01f5\u1d33\u1d4d\u1e20\u1e21\u210a\u24a2\u24bc\u24d6\u32cc\u32cd\u3387\u338d-\u338f\u3393\u33ac\u33c6\u33c9\u33d2\u33ff\uff27\uff47]/g,
	        'H': /[Hh\u0124\u0125\u021e\u021f\u02b0\u1d34\u1e22-\u1e2b\u1e96\u210b-\u210e\u24a3\u24bd\u24d7\u32cc\u3371\u3390-\u3394\u33ca\u33cb\u33d7\uff28\uff48]/g,
	        'I': /[Ii\xcc-\xcf\xec-\xef\u0128-\u0130\u0132\u0133\u01cf\u01d0\u0208-\u020b\u1d35\u1d62\u1e2c\u1e2d\u1ec8-\u1ecb\u2071\u2110\u2111\u2139\u2148\u2160-\u2163\u2165-\u2168\u216a\u216b\u2170-\u2173\u2175-\u2178\u217a\u217b\u24a4\u24be\u24d8\u337a\u33cc\u33d5\ufb01\ufb03\uff29\uff49]/g,
	        'J': /[Jj\u0132-\u0135\u01c7-\u01cc\u01f0\u02b2\u1d36\u2149\u24a5\u24bf\u24d9\u2c7c\uff2a\uff4a]/g,
	        'K': /[Kk\u0136\u0137\u01e8\u01e9\u1d37\u1d4f\u1e30-\u1e35\u212a\u24a6\u24c0\u24da\u3384\u3385\u3389\u338f\u3391\u3398\u339e\u33a2\u33a6\u33aa\u33b8\u33be\u33c0\u33c6\u33cd-\u33cf\uff2b\uff4b]/g,
	        'L': /[Ll\u0139-\u0140\u01c7-\u01c9\u02e1\u1d38\u1e36\u1e37\u1e3a-\u1e3d\u2112\u2113\u2121\u216c\u217c\u24a7\u24c1\u24db\u32cf\u3388\u3389\u33d0-\u33d3\u33d5\u33d6\u33ff\ufb02\ufb04\uff2c\uff4c]/g,
	        'M': /[Mm\u1d39\u1d50\u1e3e-\u1e43\u2120\u2122\u2133\u216f\u217f\u24a8\u24c2\u24dc\u3377-\u3379\u3383\u3386\u338e\u3392\u3396\u3399-\u33a8\u33ab\u33b3\u33b7\u33b9\u33bd\u33bf\u33c1\u33c2\u33ce\u33d0\u33d4-\u33d6\u33d8\u33d9\u33de\u33df\uff2d\uff4d]/g,
	        'N': /[Nn\xd1\xf1\u0143-\u0149\u01ca-\u01cc\u01f8\u01f9\u1d3a\u1e44-\u1e4b\u207f\u2115\u2116\u24a9\u24c3\u24dd\u3381\u338b\u339a\u33b1\u33b5\u33bb\u33cc\u33d1\uff2e\uff4e]/g,
	        'O': /[Oo\xba\xd2-\xd6\xf2-\xf6\u014c-\u0151\u01a0\u01a1\u01d1\u01d2\u01ea\u01eb\u020c-\u020f\u022e\u022f\u1d3c\u1d52\u1ecc-\u1ecf\u2092\u2105\u2116\u2134\u24aa\u24c4\u24de\u3375\u33c7\u33d2\u33d6\uff2f\uff4f]/g,
	        'P': /[Pp\u1d3e\u1d56\u1e54-\u1e57\u2119\u24ab\u24c5\u24df\u3250\u3371\u3376\u3380\u338a\u33a9-\u33ac\u33b0\u33b4\u33ba\u33cb\u33d7-\u33da\uff30\uff50]/g,
	        'Q': /[Qq\u211a\u24ac\u24c6\u24e0\u33c3\uff31\uff51]/g,
	        'R': /[Rr\u0154-\u0159\u0210-\u0213\u02b3\u1d3f\u1d63\u1e58-\u1e5b\u1e5e\u1e5f\u20a8\u211b-\u211d\u24ad\u24c7\u24e1\u32cd\u3374\u33ad-\u33af\u33da\u33db\uff32\uff52]/g,
	        'S': /[Ss\u015a-\u0161\u017f\u0218\u0219\u02e2\u1e60-\u1e63\u20a8\u2101\u2120\u24ae\u24c8\u24e2\u33a7\u33a8\u33ae-\u33b3\u33db\u33dc\ufb06\uff33\uff53]/g,
	        'T': /[Tt\u0162-\u0165\u021a\u021b\u1d40\u1d57\u1e6a-\u1e71\u1e97\u2121\u2122\u24af\u24c9\u24e3\u3250\u32cf\u3394\u33cf\ufb05\ufb06\uff34\uff54]/g,
	        'U': /[Uu\xd9-\xdc\xf9-\xfc\u0168-\u0173\u01af\u01b0\u01d3\u01d4\u0214-\u0217\u1d41\u1d58\u1d64\u1e72-\u1e77\u1ee4-\u1ee7\u2106\u24b0\u24ca\u24e4\u3373\u337a\uff35\uff55]/g,
	        'V': /[Vv\u1d5b\u1d65\u1e7c-\u1e7f\u2163-\u2167\u2173-\u2177\u24b1\u24cb\u24e5\u2c7d\u32ce\u3375\u33b4-\u33b9\u33dc\u33de\uff36\uff56]/g,
	        'W': /[Ww\u0174\u0175\u02b7\u1d42\u1e80-\u1e89\u1e98\u24b2\u24cc\u24e6\u33ba-\u33bf\u33dd\uff37\uff57]/g,
	        'X': /[Xx\u02e3\u1e8a-\u1e8d\u2093\u213b\u2168-\u216b\u2178-\u217b\u24b3\u24cd\u24e7\u33d3\uff38\uff58]/g,
	        'Y': /[Yy\xdd\xfd\xff\u0176-\u0178\u0232\u0233\u02b8\u1e8e\u1e8f\u1e99\u1ef2-\u1ef9\u24b4\u24ce\u24e8\u33c9\uff39\uff59]/g,
	        'Z': /[Zz\u0179-\u017e\u01f1-\u01f3\u1dbb\u1e90-\u1e95\u2124\u2128\u24b5\u24cf\u24e9\u3390-\u3394\uff3a\uff5a]/g
	    };
	    return StringUtils;
	}());
	exports.StringUtils = StringUtils;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Strings_1 = __webpack_require__(33);
	var EmailActionsUtils = (function () {
	    function EmailActionsUtils() {
	    }
	    EmailActionsUtils.buildMailToString = function (options) {
	        var mailTo = options.to ? 'mailto:' + encodeURIComponent(options.to) : 'mailto:';
	        var parameters = EmailActionsUtils.buildMailToParametersString(options.subject, options.cc, options.bcc, options.body, mailTo);
	        if (parameters) {
	            mailTo += '?' + parameters;
	        }
	        return mailTo;
	    };
	    EmailActionsUtils.buildMailToParametersString = function (subject, cc, bcc, body, mailTo) {
	        var parametersArray = [];
	        if (subject) {
	            parametersArray.push(EmailActionsUtils.buildMailToParameter('subject', subject));
	        }
	        if (cc) {
	            parametersArray.push(EmailActionsUtils.buildMailToParameter('cc', cc));
	        }
	        if (bcc) {
	            parametersArray.push(EmailActionsUtils.buildMailToParameter('bcc', bcc));
	        }
	        if (body) {
	            var shortenBody = EmailActionsUtils.getShortenBody(body, mailTo + '?' + parametersArray.join('&'));
	            if (shortenBody) {
	                parametersArray.push(EmailActionsUtils.buildMailToParameter('body', shortenBody));
	            }
	        }
	        return parametersArray.join('&');
	    };
	    EmailActionsUtils.getShortenBody = function (body, mailTo) {
	        var shortenBody = body;
	        if (mailTo.length < MailTo.maxLength) {
	            var maxBodyLength = MailTo.maxLength - mailTo.length - '&body='.length;
	            shortenBody = EmailActionsUtils.shortenString(body, maxBodyLength);
	        }
	        return shortenBody;
	    };
	    EmailActionsUtils.buildMailToParameter = function (name, param) {
	        return param ? encodeURIComponent(name) + '=' + encodeURIComponent(param) : '';
	    };
	    EmailActionsUtils.shortenString = function (str, maxLength, encodeShortenBodyIndication) {
	        if (encodeShortenBodyIndication === void 0) { encodeShortenBodyIndication = false; }
	        /* There is a size limit on mailto url,
	         * Depending on the browser, the mailto will not open if too large. */
	        var shortenBodyIndicator = encodeShortenBodyIndication ? encodeURIComponent(MailTo.shortenBodyIndicator) : MailTo.shortenBodyIndicator;
	        maxLength = maxLength - MailTo.shortenBodyIndicator.length;
	        var sliced = str.length > maxLength ? true : false;
	        var shortenStr = str.substring(0, maxLength);
	        shortenStr += sliced ? shortenBodyIndicator : '';
	        return shortenStr;
	    };
	    EmailActionsUtils.appendShortenBodyToMailToString = function (mailTo, body) {
	        var shortenBody = EmailActionsUtils.getShortenBody(body, mailTo);
	        return mailTo.indexOf('?') >= 0 ? mailTo + '&body=' + shortenBody : mailTo + '?body=' + shortenBody;
	    };
	    EmailActionsUtils.removeCurrentUserEmailFromString = function (currentUserEmail, str) {
	        if (str && currentUserEmail) {
	            return _.filter(str.split(';'), function (email) {
	                return email.indexOf(currentUserEmail) == -1;
	            }).join(';');
	        }
	        else {
	            return str;
	        }
	    };
	    EmailActionsUtils.buildReplyMailToFromResult = function (result, currentUserEmail) {
	        return new MailTo({
	            currentUserEmail: currentUserEmail,
	            originalFrom: result.raw.from,
	            to: result.raw.from,
	            subject: result.raw.conversationsubject,
	        });
	    };
	    EmailActionsUtils.buildReplyAllMailToFromResult = function (result, currentUserEmail) {
	        return new MailTo({
	            currentUserEmail: currentUserEmail,
	            originalFrom: result.raw.from,
	            to: result.raw.from + ';' + result.raw.to,
	            subject: result.raw.conversationsubject,
	            cc: result.raw.cc,
	        });
	    };
	    EmailActionsUtils.buildForwardMailToFromResult = function (result, currentUserEmail) {
	        return new MailTo({
	            currentUserEmail: currentUserEmail,
	            originalFrom: result.raw.from,
	            subject: result.raw.conversationsubject,
	        });
	    };
	    EmailActionsUtils.encodeMailToBody = function (body) {
	        var linesArray = body.split('\n');
	        _.each(linesArray, function (line, index) {
	            linesArray[index] = encodeURIComponent(linesArray[index]);
	        });
	        return linesArray.join(MailTo.enter);
	    };
	    return EmailActionsUtils;
	}());
	exports.EmailActionsUtils = EmailActionsUtils;
	var DefaultMailToOptions = (function () {
	    function DefaultMailToOptions() {
	        this.currentUserEmail = '';
	        this.originalFrom = '';
	        this.to = '';
	        this.subject = '';
	        this.cc = '';
	        this.bcc = '';
	        this.body = '';
	    }
	    return DefaultMailToOptions;
	}());
	exports.DefaultMailToOptions = DefaultMailToOptions;
	var MailTo = (function () {
	    function MailTo(options) {
	        this.options = options;
	        this.bodyHeader = '';
	        this.options = _.extend(new DefaultMailToOptions(), options);
	        this.removeCurrentUserFromParameters();
	        if (this.options.originalFrom) {
	            this.bodyHeader = this.options.bodyIsHTML ? '<p><br/><br/><br/>' + Strings_1.l('From') + ': ' + this.options.originalFrom + '<hr></p>' :
	                '\n\n\n' + Strings_1.l('From') + ': ' + this.options.originalFrom + '\n_________________________________\n';
	        }
	    }
	    MailTo.prototype.removeCurrentUserFromParameters = function () {
	        this.options.to = EmailActionsUtils.removeCurrentUserEmailFromString(this.options.currentUserEmail, this.options.to);
	        this.options.cc = EmailActionsUtils.removeCurrentUserEmailFromString(this.options.currentUserEmail, this.options.cc);
	        this.options.bcc = EmailActionsUtils.removeCurrentUserEmailFromString(this.options.currentUserEmail, this.options.bcc);
	    };
	    MailTo.prototype.open = function () {
	        this.ensureValueIsSet();
	        window.location.href = this.value;
	    };
	    MailTo.prototype.ensureValueIsSet = function () {
	        if (!this.value) {
	            this.setValue();
	        }
	        else if (!this.valueBodyIsSet()) {
	            this.setValueBody();
	        }
	    };
	    MailTo.prototype.setValue = function () {
	        this.value = EmailActionsUtils.buildMailToString(this.options);
	        if (this.value && !this.valueBodyIsSet()) {
	            this.setValueBody();
	        }
	    };
	    MailTo.prototype.setValueBody = function () {
	        this.value = EmailActionsUtils.appendShortenBodyToMailToString(this.value, this.body);
	    };
	    MailTo.prototype.setMailToBodyFromText = function (text) {
	        if (text === void 0) { text = ''; }
	        this.body = text;
	    };
	    MailTo.prototype.valueBodyIsSet = function () {
	        return this.value.indexOf('body=') >= 0;
	    };
	    MailTo.prototype.bodyIsSet = function () {
	        return this.body ? true : false;
	    };
	    MailTo.enter = '%0D%0A'; // \r\n
	    MailTo.shortenBodyIndicator = '\r\n\r\n...';
	    // Arbitrary numbers :
	    MailTo.maxLength = 1000;
	    return MailTo;
	}());
	exports.MailTo = MailTo;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Utils_1 = __webpack_require__(17);
	var Strings_1 = __webpack_require__(33);
	var EmailUtils = (function () {
	    function EmailUtils() {
	    }
	    EmailUtils.splitSemicolonSeparatedListOfEmailAddresses = function (addresses) {
	        var addressesAsList = addresses.split(/\s*;\s*/);
	        return _.filter(addressesAsList, function (s) {
	            return Utils_1.Utils.exists(s) && Utils_1.Utils.isNonEmptyString(Utils_1.Utils.trim(s));
	        });
	    };
	    EmailUtils.emailAddressesToHyperlinks = function (addresses, companyDomain, me, lengthLimit, truncateName) {
	        if (lengthLimit === void 0) { lengthLimit = 2; }
	        if (truncateName === void 0) { truncateName = false; }
	        addresses = _.filter(addresses, function (s) {
	            return Utils_1.Utils.exists(s) && Utils_1.Utils.isNonEmptyString(Utils_1.Utils.trim(s));
	        });
	        var hyperlinks = _.map(addresses, function (item) {
	            var emailArray = EmailUtils.parseEmail(item);
	            var email = emailArray[1];
	            var name = emailArray[0];
	            if (Utils_1.Utils.exists(me) && email == me) {
	                name = Strings_1.l('Me');
	            }
	            if (truncateName) {
	                var split = name.split(' ');
	                if (!Utils_1.Utils.isNullOrUndefined(split[1])) {
	                    name = split[0] + ' ' + split[1].substring(0, 1) + '.';
	                }
	            }
	            var domainIndex = email.indexOf('@') >= 0 ? email.indexOf('@') + 1 : 0;
	            var domain = email.substr(domainIndex);
	            if (Utils_1.Utils.exists(companyDomain) && domain != companyDomain) {
	                name += ' (' + domain + ')';
	            }
	            return '<a title="' + item.replace(/'/g, '&quot;') + 'href="mailto:' + encodeURI(email) + '">' + name + '</a>';
	        });
	        var excess = hyperlinks.length - lengthLimit;
	        var andOthers = excess > 0 ? EmailUtils.buildEmailAddressesAndOthers(_.last(hyperlinks, excess)) : '';
	        return _.first(hyperlinks, lengthLimit).join(', ') + andOthers;
	    };
	    EmailUtils.buildEmailAddressesAndOthers = function (excessHyperLinks) {
	        return '<span class="coveo-emails-excess-collapsed coveo-active" onclick="Coveo.TemplateHelpers.getHelper(\'excessEmailToggle\')(this);"> ' + Strings_1.l('AndOthers', excessHyperLinks.length.toString(), excessHyperLinks.length) + '</span>' +
	            '<span class="coveo-emails-excess-expanded"> , ' + excessHyperLinks.join(' , ') + '</span>';
	    };
	    EmailUtils.parseEmail = function (email) {
	        var name;
	        var match = email.match(/^\s*(.*)\s+<(.*)>$/);
	        if (match != null) {
	            name = match[1];
	            if (/^'.*'|'.*'$/.test(name)) {
	                name = name.substr(1, name.length - 2);
	            }
	            email = match[2];
	        }
	        else {
	            name = email;
	            email = email;
	        }
	        return [name, email];
	    };
	    return EmailUtils;
	}());
	exports.EmailUtils = EmailUtils;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";
	var FeatureDetectionUtils = (function () {
	    function FeatureDetectionUtils() {
	    }
	    FeatureDetectionUtils.supportSVG = function () {
	        return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');
	    };
	    return FeatureDetectionUtils;
	}());
	exports.FeatureDetectionUtils = FeatureDetectionUtils;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Assert_1 = __webpack_require__(16);
	var Utils_1 = __webpack_require__(17);
	var HashUtils = (function () {
	    function HashUtils() {
	    }
	    HashUtils.getHash = function (w) {
	        if (w === void 0) { w = window; }
	        Assert_1.Assert.exists(w);
	        // window.location.hash returns the DECODED hash on Firefox (it's a well known bug),
	        // so any & in values will be already unescaped. This breaks our value splitting.
	        // The following trick works on all browsers.
	        var ret = '#' + (w.location.href.split('#')[1] || '');
	        return HashUtils.getAjaxcrawlableHash(ret);
	    };
	    HashUtils.getValue = function (value, toParse) {
	        Assert_1.Assert.isNonEmptyString(value);
	        Assert_1.Assert.exists(toParse);
	        toParse = HashUtils.getAjaxcrawlableHash(toParse);
	        var paramValue = HashUtils.getRawValue(value, toParse);
	        if (paramValue != undefined) {
	            paramValue = HashUtils.getValueDependingOnType(paramValue);
	        }
	        return paramValue;
	    };
	    HashUtils.encodeValues = function (values) {
	        var hash = [];
	        _.each(values, function (valueToEncode, key, obj) {
	            var encodedValue = '';
	            if (Utils_1.Utils.isNonEmptyArray(valueToEncode)) {
	                encodedValue = HashUtils.encodeArray(valueToEncode);
	            }
	            else if (_.isObject(valueToEncode) && Utils_1.Utils.isNonEmptyArray(_.keys(valueToEncode))) {
	                encodedValue = HashUtils.encodeObject(valueToEncode);
	            }
	            else {
	                encodedValue = encodeURIComponent(valueToEncode.toString());
	            }
	            if (encodedValue != '') {
	                hash.push(key + '=' + encodedValue);
	            }
	        });
	        return hash.join('&');
	    };
	    HashUtils.getAjaxcrawlableHash = function (hash) {
	        if (hash[1] != undefined && hash[1] == '!') {
	            return hash.substring(0, 1) + hash.substring(2);
	        }
	        else {
	            return hash;
	        }
	    };
	    HashUtils.getRawValue = function (value, toParse) {
	        Assert_1.Assert.exists(value);
	        Assert_1.Assert.exists(toParse);
	        Assert_1.Assert.check(toParse.indexOf('#') == 0 || toParse == '');
	        var toParseArray = toParse.substr(1).split('&');
	        var paramPos = 0;
	        var loop = true;
	        var paramValue = undefined;
	        while (loop) {
	            var paramValuePair = toParseArray[paramPos].split('=');
	            if (paramValuePair[0] == value) {
	                loop = false;
	                paramValue = paramValuePair[1];
	            }
	            else {
	                paramPos++;
	                if (paramPos >= toParseArray.length) {
	                    paramPos = undefined;
	                    loop = false;
	                }
	            }
	        }
	        return paramValue;
	    };
	    HashUtils.getValueDependingOnType = function (paramValue) {
	        var type = HashUtils.getValueType(paramValue);
	        var returnValue;
	        if (type == 'object') {
	            returnValue = HashUtils.decodeObject(paramValue);
	        }
	        else if (type == 'array') {
	            returnValue = HashUtils.decodeArray(paramValue);
	        }
	        else {
	            returnValue = decodeURIComponent(paramValue);
	        }
	        return returnValue;
	    };
	    HashUtils.getValueType = function (paramValue) {
	        if (HashUtils.isObject(paramValue)) {
	            return 'object';
	        }
	        else if (HashUtils.isArray(paramValue)) {
	            return 'array';
	        }
	        else {
	            return 'other';
	        }
	    };
	    HashUtils.isArrayStartNotEncoded = function (value) {
	        return value.substr(0, 1) == HashUtils.DELIMITER.arrayStart;
	    };
	    HashUtils.isArrayStartEncoded = function (value) {
	        return value.indexOf(encodeURIComponent(HashUtils.DELIMITER.arrayStart)) == 0;
	    };
	    HashUtils.isArrayEndNotEncoded = function (value) {
	        return value.substr(value.length - 1);
	    };
	    HashUtils.isArrayEndEncoded = function (value) {
	        return value.indexOf(encodeURIComponent(HashUtils.DELIMITER.arrayEnd)) == value.length - encodeURIComponent(HashUtils.DELIMITER.arrayEnd).length;
	    };
	    HashUtils.isObjectStartNotEncoded = function (value) {
	        return value.substr(0, 1) == HashUtils.DELIMITER.objectStart;
	    };
	    HashUtils.isObjectStartEncoded = function (value) {
	        return value.indexOf(encodeURIComponent(HashUtils.DELIMITER.objectStart)) == 0;
	    };
	    HashUtils.isObjectEndNotEncoded = function (value) {
	        return value.substr(value.length - 1) == HashUtils.DELIMITER.objectEnd;
	    };
	    HashUtils.isObjectEndEncoded = function (value) {
	        return value.indexOf(encodeURIComponent(HashUtils.DELIMITER.objectEnd)) == value.length - encodeURIComponent(HashUtils.DELIMITER.objectEnd).length;
	    };
	    HashUtils.isObject = function (value) {
	        var isObjectStart = HashUtils.isObjectStartNotEncoded(value) || HashUtils.isObjectStartEncoded(value);
	        var isObjectEnd = HashUtils.isObjectEndNotEncoded(value) || HashUtils.isObjectEndEncoded(value);
	        return isObjectStart && isObjectEnd;
	    };
	    HashUtils.isArray = function (value) {
	        var isArrayStart = HashUtils.isArrayStartNotEncoded(value) || HashUtils.isArrayStartEncoded(value);
	        var isArrayEnd = HashUtils.isArrayEndNotEncoded(value) || HashUtils.isArrayEndEncoded(value);
	        return isArrayStart && isArrayEnd;
	    };
	    HashUtils.encodeArray = function (array) {
	        var arrayReturn = _.map(array, function (value) {
	            return encodeURIComponent(value);
	        });
	        return HashUtils.DELIMITER.arrayStart + arrayReturn.join(',') + HashUtils.DELIMITER.arrayEnd;
	    };
	    HashUtils.encodeObject = function (obj) {
	        var _this = this;
	        var retArray = _.map(obj, function (val, key, obj) {
	            return "\"" + encodeURIComponent(key) + "\":" + _this.encodeValue(val);
	        });
	        return HashUtils.DELIMITER.objectStart + retArray.join(' , ') + HashUtils.DELIMITER.objectEnd;
	    };
	    HashUtils.encodeValue = function (val) {
	        var encodedValue = '';
	        if (_.isArray(val)) {
	            encodedValue = HashUtils.encodeArray(val);
	        }
	        else if (_.isObject(val)) {
	            encodedValue = HashUtils.encodeObject(val);
	        }
	        else if (_.isNumber(val) || _.isBoolean(val)) {
	            encodedValue = encodeURIComponent(val);
	        }
	        else {
	            encodedValue = '"' + encodeURIComponent(val) + '"';
	        }
	        return encodedValue;
	    };
	    HashUtils.decodeObject = function (obj) {
	        if (HashUtils.isObjectStartEncoded(obj) && HashUtils.isObjectEndEncoded(obj)) {
	            obj = obj.replace(/encodeURIComponent(HashUtils.Delimiter.objectStart)/, HashUtils.DELIMITER.objectStart);
	            obj = obj.replace(encodeURIComponent(HashUtils.DELIMITER.objectEnd), HashUtils.DELIMITER.objectEnd);
	        }
	        return JSON.parse(decodeURIComponent(obj));
	    };
	    HashUtils.decodeArray = function (value) {
	        if (HashUtils.isArrayStartEncoded(value) && HashUtils.isArrayEndEncoded(value)) {
	            value = value.replace(encodeURIComponent(HashUtils.DELIMITER.arrayStart), HashUtils.DELIMITER.arrayStart);
	            value = value.replace(encodeURIComponent(HashUtils.DELIMITER.arrayEnd), HashUtils.DELIMITER.arrayEnd);
	        }
	        value = value.substr(1);
	        value = value.substr(0, value.length - 1);
	        var array = value.split(',');
	        return _.map(array, function (val) {
	            return decodeURIComponent(val);
	        });
	    };
	    HashUtils.DELIMITER = {
	        'objectStart': '{',
	        'objectEnd': '}',
	        'arrayStart': '[',
	        'arrayEnd': ']',
	        'objectStartRegExp': '^{',
	        'objectEndRegExp': '}+$',
	        'arrayStartRegExp': '^[',
	        'arrayEndRegExp': ']+$'
	    };
	    return HashUtils;
	}());
	exports.HashUtils = HashUtils;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Utils_1 = __webpack_require__(17);
	var Assert_1 = __webpack_require__(16);
	var StringAndHoles = (function () {
	    function StringAndHoles() {
	    }
	    StringAndHoles.replace = function (str, find, replace) {
	        var strAndHoles = new StringAndHoles();
	        if (Utils_1.Utils.isNullOrEmptyString(str)) {
	            return strAndHoles;
	        }
	        var index = str.lastIndexOf(find);
	        if (index == -1) {
	            strAndHoles.value = str;
	            return strAndHoles;
	        }
	        var holes = [];
	        while (index >= 0) {
	            var hole = {
	                begin: index,
	                size: find.length,
	                replacementSize: replace.length
	            };
	            holes.push(hole);
	            str = str.slice(0, index) + replace + str.slice(index + find.length);
	            index = str.lastIndexOf(find);
	        }
	        strAndHoles.holes = holes;
	        strAndHoles.value = str;
	        return strAndHoles;
	    };
	    /**
	     * Shorten the passed path intelligently (path-aware).
	     * Works with *local paths* and *network paths*
	     * @param uriOrig The path to shorten
	     * @param length The length to which the path will be shortened.
	     */
	    StringAndHoles.shortenPath = function (uriOrig, length) {
	        var uri = uriOrig;
	        var strAndHoles = new StringAndHoles();
	        if (Utils_1.Utils.isNullOrEmptyString(uri) || (uri.length <= length)) {
	            strAndHoles.value = uri;
	            return strAndHoles;
	        }
	        var holes = [];
	        var first = -1;
	        if (Utils_1.Utils.stringStartsWith(uri, '\\\\')) {
	            first = uri.indexOf('\\', first + 2);
	        }
	        else {
	            first = uri.indexOf('\\');
	        }
	        if (first !== -1) {
	            var removed = 0;
	            var next = uri.indexOf('\\', first + 1);
	            while (next !== -1 && uri.length - removed + StringAndHoles.SHORTEN_END.length > length) {
	                removed = next - first - 1;
	                next = uri.indexOf('\\', next + 1);
	            }
	            if (removed > 0) {
	                uri = uri.slice(0, first + 1) + StringAndHoles.SHORTEN_END + uri.slice(removed);
	                var hole = {
	                    begin: first + 1,
	                    size: removed - StringAndHoles.SHORTEN_END.length,
	                    replacementSize: StringAndHoles.SHORTEN_END.length
	                };
	                holes.push(hole);
	            }
	        }
	        if (uri.length > length) {
	            var over = uri.length - length + StringAndHoles.SHORTEN_END.length;
	            var start = uri.length - over;
	            uri = uri.slice(0, start) + StringAndHoles.SHORTEN_END;
	            var hole = {
	                begin: start,
	                size: over,
	                replacementSize: StringAndHoles.SHORTEN_END.length
	            };
	            holes.push(hole);
	        }
	        strAndHoles.holes = holes;
	        strAndHoles.value = uri;
	        return strAndHoles;
	    };
	    /**
	     * Shorten the passed string.
	     * @param toShortenOrig The string to shorten
	     * @param length The length to which the string will be shortened.
	     * @param toAppend The string to append at the end (usually, it is set to '...')
	     */
	    StringAndHoles.shortenString = function (toShortenOrig, length, toAppend) {
	        if (length === void 0) { length = 200; }
	        var toShorten = toShortenOrig;
	        toAppend = Utils_1.Utils.toNotNullString(toAppend);
	        var strAndHoles = new StringAndHoles();
	        if (Utils_1.Utils.isNullOrEmptyString(toShorten) || length <= toAppend.length) {
	            strAndHoles.value = toShorten;
	            return strAndHoles;
	        }
	        if (toShorten.length <= length) {
	            strAndHoles.value = toShorten;
	            return strAndHoles;
	        }
	        var str = toShorten;
	        length = length - toAppend.length;
	        str = str.slice(0, length);
	        if (toShorten.charAt(str.length) !== ' ') {
	            var pos = str.lastIndexOf(' ');
	            if (pos !== -1 && str.length - pos < StringAndHoles.WORD_SHORTER) {
	                str = str.slice(0, pos);
	            }
	        }
	        var holes = [];
	        holes[0] = {
	            begin: str.length,
	            size: toShorten.length - str.length,
	            replacementSize: toAppend.length
	        };
	        str += toAppend;
	        strAndHoles.value = str;
	        strAndHoles.holes = holes;
	        return strAndHoles;
	    };
	    /**
	     * Shorten the passed URI intelligently (path-aware).
	     * @param toShortenOrig The URI to shorten
	     * @param length The length to which the URI will be shortened.
	     */
	    StringAndHoles.shortenUri = function (uri, length) {
	        var strAndHoles = new StringAndHoles();
	        if (Utils_1.Utils.isNullOrEmptyString(uri) || (uri.length <= length)) {
	            strAndHoles.value = uri;
	            return strAndHoles;
	        }
	        var holes = [];
	        var first = uri.indexOf('//');
	        if (first !== -1) {
	            first = uri.indexOf('/', first + 2);
	        }
	        if (first !== -1) {
	            var removed = 0;
	            var next = uri.indexOf('/', first + 1);
	            while (next !== -1 && uri.length - removed + StringAndHoles.SHORTEN_END.length > length) {
	                removed = next - first - 1;
	                next = uri.indexOf('/', next + 1);
	            }
	            if (removed > 0) {
	                uri = uri.slice(0, first + 1) + StringAndHoles.SHORTEN_END + uri.slice(first + 1 + removed);
	                var hole = {
	                    begin: first + 1,
	                    size: removed,
	                    replacementSize: StringAndHoles.SHORTEN_END.length
	                };
	                holes.push(hole);
	            }
	        }
	        if (uri.length > length) {
	            var over = uri.length - length + StringAndHoles.SHORTEN_END.length;
	            var start = uri.length - over;
	            uri = uri.slice(0, start) + StringAndHoles.SHORTEN_END;
	            var hole = {
	                begin: start,
	                size: over,
	                replacementSize: StringAndHoles.SHORTEN_END.length
	            };
	            holes.push(hole);
	        }
	        strAndHoles.holes = holes;
	        strAndHoles.value = uri;
	        return strAndHoles;
	    };
	    StringAndHoles.SHORTEN_END = '...';
	    StringAndHoles.WORD_SHORTER = 10;
	    return StringAndHoles;
	}());
	exports.StringAndHoles = StringAndHoles;
	var HighlightUtils = (function () {
	    function HighlightUtils() {
	    }
	    /**
	     * Highlight the passed string using specified highlights and holes.
	     * @param content The string to highlight items in.
	     * @param highlights The highlighted positions to highlight in the string.
	     * @param holes Possible holes which are used to skip highlighting.
	     * @param cssClass The css class to use on the highlighting `span`.
	     */
	    HighlightUtils.highlightString = function (content, highlights, holes, cssClass) {
	        Assert_1.Assert.isNotUndefined(highlights);
	        Assert_1.Assert.isNotNull(highlights);
	        Assert_1.Assert.isNonEmptyString(cssClass);
	        if (Utils_1.Utils.isNullOrEmptyString(content)) {
	            return content;
	        }
	        var last = 0;
	        var maxIndex = content.length;
	        var highlighted = '';
	        for (var i = 0; i < highlights.length; i++) {
	            var highlight = highlights[i];
	            var start = highlight.offset;
	            var end = start + highlight.length;
	            if (holes !== null) {
	                var skip = false;
	                for (var j = 0; j < holes.length; j++) {
	                    var hole = holes[j];
	                    var holeBegin = hole.begin;
	                    var holeEnd = holeBegin + hole.size;
	                    if (start < holeBegin && end >= holeBegin && end < holeEnd) {
	                        end = holeBegin;
	                    }
	                    else if (start >= holeBegin && end < holeEnd) {
	                        skip = true;
	                        break;
	                    }
	                    else if (start >= holeBegin && start < holeEnd && end >= holeEnd) {
	                        start = holeBegin + hole.replacementSize;
	                        end -= hole.size - hole.replacementSize;
	                    }
	                    else if (start < holeBegin && end >= holeEnd) {
	                        end -= hole.size - hole.replacementSize;
	                    }
	                    else if (start >= holeEnd) {
	                        var offset = hole.size - hole.replacementSize;
	                        start -= offset;
	                        end -= offset;
	                    }
	                }
	                if (skip || start === end) {
	                    continue;
	                }
	            }
	            if (end > maxIndex) {
	                break;
	            }
	            highlighted += _.escape(content.slice(last, start));
	            highlighted += "<span class=\"" + cssClass + "\"";
	            if (highlight.dataHighlightGroup) {
	                highlighted += " data-highlight-group=\"" + highlight.dataHighlightGroup.toString() + "\"";
	            }
	            if (highlight.dataHighlightGroupTerm) {
	                highlighted += " data-highlight-group-term=\"" + highlight.dataHighlightGroupTerm + "\"";
	            }
	            highlighted += '>';
	            highlighted += _.escape(content.slice(start, end));
	            highlighted += '</span>';
	            last = end;
	        }
	        if (last != maxIndex) {
	            highlighted += _.escape(content.slice(last));
	        }
	        return highlighted;
	    };
	    return HighlightUtils;
	}());
	exports.HighlightUtils = HighlightUtils;
	function highlightString(value, search) {
	    var hightlightTemplate = _.template('<% var i = 0; var lowercaseValue = value.toLowerCase(); while(i < value.length) { %>' +
	        '<% var index = lowercaseValue.indexOf(search, i); if(index != -1) { %>' +
	        '<% if(i != index){ %> <span><%- value.substr(i, index) %></span><% } %>' +
	        '<span class="coveo-hightlight"><%- value.substr(index, search.length) %></span>' +
	        '<% i = index + search.length %></span>' +
	        '<% } else { %>' +
	        '<span><%- value.substr(i) %></span>' +
	        '<% i = value.length; %>' +
	        '<% } %>' +
	        '<% } %>');
	    if (_.isEmpty(search)) {
	        return value;
	    }
	    return hightlightTemplate({ value: value, search: search.toLowerCase() });
	}
	exports.highlightString = highlightString;
	;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var DeviceUtils_1 = __webpack_require__(19);
	var HTMLUtils = (function () {
	    function HTMLUtils() {
	    }
	    HTMLUtils.buildAttributeString = function (options) {
	        var ret = [];
	        _.each(options, function (val, key, obj) {
	            if (val != undefined) {
	                ret.push(key + '=' + JSON.stringify(val.toString()));
	            }
	        });
	        return ret.join(' ');
	    };
	    return HTMLUtils;
	}());
	exports.HTMLUtils = HTMLUtils;
	var AnchorUtils = (function () {
	    function AnchorUtils() {
	    }
	    AnchorUtils.buildAnchor = function (href, options) {
	        var text;
	        if (!options || !options.text) {
	            text = href;
	        }
	        else {
	            text = options.text;
	            options.text = undefined;
	        }
	        return "<a href='" + href + " " + HTMLUtils.buildAttributeString(options) + " '>" + text + "</a>";
	    };
	    return AnchorUtils;
	}());
	exports.AnchorUtils = AnchorUtils;
	var ImageUtils = (function () {
	    function ImageUtils() {
	    }
	    ImageUtils.buildImage = function (src, options) {
	        var ret = '<img ';
	        ret += src ? "src='" + src + "' " : '';
	        ret += HTMLUtils.buildAttributeString(options) + '/>';
	        return ret;
	    };
	    ImageUtils.selectImageFromResult = function (result) {
	        return document.querySelector("img[data-coveo-uri-hash=" + result.raw['urihash'] + "]");
	    };
	    ImageUtils.buildImageWithDirectSrcAttribute = function (endpoint, result) {
	        var image = new Image();
	        var dataStreamUri = endpoint.getViewAsDatastreamUri(result.uniqueId, '$Thumbnail$', { contentType: 'image/png' });
	        image.onload = function () {
	            ImageUtils.selectImageFromResult(result).setAttribute('src', dataStreamUri);
	        };
	        image.src = dataStreamUri;
	    };
	    ImageUtils.buildImageWithBase64SrcAttribute = function (endpoint, result) {
	        endpoint.getRawDataStream(result.uniqueId, '$Thumbnail$')
	            .then(function (response) {
	            var rawBinary = String.fromCharCode.apply(null, new Uint8Array(response));
	            ImageUtils.selectImageFromResult(result).setAttribute('src', 'data:image/png;base64, ' + btoa(rawBinary));
	        })
	            .catch(function () {
	            ImageUtils.selectImageFromResult(result).remove();
	        });
	    };
	    ImageUtils.buildImageFromResult = function (result, endpoint, options) {
	        options = options ? options : {};
	        var img = ImageUtils.buildImage(undefined, _.extend(options, { 'data-coveo-uri-hash': result.raw['urihash'] }));
	        if (endpoint.isJsonp() || DeviceUtils_1.DeviceUtils.isIE8or9()) {
	            // For jsonp and IE8-9 (XDomain) we can't GET/POST for binary data. We are limited to only setting the src attribute directly on the img.
	            ImageUtils.buildImageWithDirectSrcAttribute(endpoint, result);
	        }
	        else {
	            // Base 64 img allows us to GET/POST the image as raw binary, so that we can also pass the credential of the user
	            // Useful for phonegap.
	            ImageUtils.buildImageWithBase64SrcAttribute(endpoint, result);
	        }
	        return img;
	    };
	    return ImageUtils;
	}());
	exports.ImageUtils = ImageUtils;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Utils_1 = __webpack_require__(17);
	(function (KEYBOARD) {
	    KEYBOARD[KEYBOARD["BACKSPACE"] = 8] = "BACKSPACE";
	    KEYBOARD[KEYBOARD["TAB"] = 9] = "TAB";
	    KEYBOARD[KEYBOARD["ENTER"] = 13] = "ENTER";
	    KEYBOARD[KEYBOARD["SHIFT"] = 16] = "SHIFT";
	    KEYBOARD[KEYBOARD["CTRL"] = 17] = "CTRL";
	    KEYBOARD[KEYBOARD["ALT"] = 18] = "ALT";
	    KEYBOARD[KEYBOARD["ESCAPE"] = 27] = "ESCAPE";
	    KEYBOARD[KEYBOARD["SPACEBAR"] = 32] = "SPACEBAR";
	    KEYBOARD[KEYBOARD["PAGE_UP"] = 33] = "PAGE_UP";
	    KEYBOARD[KEYBOARD["PAGE_DOWN"] = 34] = "PAGE_DOWN";
	    KEYBOARD[KEYBOARD["HOME"] = 36] = "HOME";
	    KEYBOARD[KEYBOARD["LEFT_ARROW"] = 37] = "LEFT_ARROW";
	    KEYBOARD[KEYBOARD["UP_ARROW"] = 38] = "UP_ARROW";
	    KEYBOARD[KEYBOARD["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
	    KEYBOARD[KEYBOARD["DOWN_ARROW"] = 40] = "DOWN_ARROW";
	    KEYBOARD[KEYBOARD["INSERT"] = 45] = "INSERT";
	    KEYBOARD[KEYBOARD["DELETE"] = 46] = "DELETE";
	})(exports.KEYBOARD || (exports.KEYBOARD = {}));
	var KEYBOARD = exports.KEYBOARD;
	var KeyboardUtils = (function () {
	    function KeyboardUtils() {
	    }
	    KeyboardUtils.keysEqual = function (key, code) {
	        if (!Utils_1.Utils.isNullOrUndefined(key.keyCode)) {
	            return key.keyCode == code;
	        }
	        else if (!Utils_1.Utils.isNullOrUndefined(key.which)) {
	            return key.which == code;
	        }
	        return false;
	    };
	    KeyboardUtils.isAllowedKeyForOmnibox = function (e) {
	        var keycode = e.keyCode;
	        var valid = (KeyboardUtils.isNumberKeyPushed(keycode)) ||
	            (keycode == 32 || keycode == 13) ||
	            (KeyboardUtils.isLetterKeyPushed(keycode)) ||
	            (keycode > 95 && keycode < 112) ||
	            (keycode > 185 && keycode < 193) ||
	            (keycode > 218 && keycode < 223) ||
	            (keycode == KEYBOARD.BACKSPACE || keycode == KEYBOARD.DELETE) ||
	            (KeyboardUtils.isArrowKeyPushed(keycode));
	        return valid;
	    };
	    KeyboardUtils.isAllowedKeyForSearchAsYouType = function (e) {
	        return KeyboardUtils.isAllowedKeyForOmnibox(e) && !KeyboardUtils.isArrowKeyPushed(e.keyCode);
	    };
	    KeyboardUtils.isDeleteOrBackspace = function (e) {
	        return KeyboardUtils.keysEqual(e, KEYBOARD.BACKSPACE) || KeyboardUtils.keysEqual(e, KEYBOARD.DELETE);
	    };
	    KeyboardUtils.isArrowKeyPushed = function (keycode) {
	        return keycode == KEYBOARD.LEFT_ARROW ||
	            keycode == KEYBOARD.UP_ARROW ||
	            keycode == KEYBOARD.RIGHT_ARROW ||
	            keycode == KEYBOARD.DOWN_ARROW;
	    };
	    KeyboardUtils.isNumberKeyPushed = function (keycode) {
	        return keycode > 47 && keycode < 58;
	    };
	    KeyboardUtils.isLetterKeyPushed = function (keycode) {
	        return keycode > 64 && keycode < 91;
	    };
	    // Return a keyboard event listener that only executes the function if certain keys are pressed.
	    KeyboardUtils.keypressAction = function (keyCode, action) {
	        return function (e) {
	            var data = [];
	            for (var _i = 1; _i < arguments.length; _i++) {
	                data[_i - 1] = arguments[_i];
	            }
	            var eventCode = (e.charCode || e.keyCode);
	            if (_.isArray(keyCode) && _.contains(keyCode, eventCode)) {
	                action(e);
	            }
	            else if (eventCode === keyCode) {
	                action(e);
	            }
	            return false;
	        };
	    };
	    return KeyboardUtils;
	}());
	exports.KeyboardUtils = KeyboardUtils;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";
	var localStorage = window.localStorage;
	var LocalStorageUtils = (function () {
	    function LocalStorageUtils(id) {
	        this.id = id;
	    }
	    LocalStorageUtils.prototype.save = function (data) {
	        try {
	            if (localStorage != null) {
	                localStorage.setItem(this.getLocalStorageKey(), JSON.stringify(data));
	            }
	        }
	        catch (error) {
	        }
	    };
	    LocalStorageUtils.prototype.load = function () {
	        try {
	            if (localStorage == null) {
	                return null;
	            }
	            var value = localStorage.getItem(this.getLocalStorageKey());
	            return value && JSON.parse(value);
	        }
	        catch (error) {
	            return null;
	        }
	    };
	    LocalStorageUtils.prototype.remove = function (key) {
	        try {
	            if (localStorage != null) {
	                if (key == undefined) {
	                    localStorage.removeItem(this.getLocalStorageKey());
	                }
	                else {
	                    var oldObj = this.load();
	                    delete oldObj[key];
	                    this.save(oldObj);
	                }
	            }
	        }
	        catch (error) {
	        }
	    };
	    LocalStorageUtils.prototype.getLocalStorageKey = function () {
	        return 'coveo-' + this.id;
	    };
	    return LocalStorageUtils;
	}());
	exports.LocalStorageUtils = LocalStorageUtils;


/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";
	(function (OS_NAME) {
	    OS_NAME[OS_NAME["WINDOWS"] = 0] = "WINDOWS";
	    OS_NAME[OS_NAME["MACOSX"] = 1] = "MACOSX";
	    OS_NAME[OS_NAME["UNIX"] = 2] = "UNIX";
	    OS_NAME[OS_NAME["LINUX"] = 3] = "LINUX";
	    OS_NAME[OS_NAME["UNKNOWN"] = 4] = "UNKNOWN";
	})(exports.OS_NAME || (exports.OS_NAME = {}));
	var OS_NAME = exports.OS_NAME;
	var OSUtils = (function () {
	    function OSUtils() {
	    }
	    OSUtils.get = function (nav) {
	        if (nav === void 0) { nav = navigator; }
	        var osName;
	        if (nav.appVersion.indexOf('Win') != -1) {
	            osName = OS_NAME.WINDOWS;
	        }
	        else if (nav.appVersion.indexOf('Mac') != -1) {
	            osName = OS_NAME.MACOSX;
	        }
	        else if (nav.appVersion.indexOf('X11') != -1) {
	            osName = OS_NAME.UNIX;
	        }
	        else if (nav.appVersion.indexOf('Linux') != -1) {
	            osName = OS_NAME.LINUX;
	        }
	        else {
	            osName = OS_NAME.UNKNOWN;
	        }
	        return osName;
	    };
	    return OSUtils;
	}());
	exports.OSUtils = OSUtils;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Dom_1 = __webpack_require__(56);
	(function (VerticalAlignment) {
	    VerticalAlignment[VerticalAlignment["TOP"] = 0] = "TOP";
	    VerticalAlignment[VerticalAlignment["MIDDLE"] = 1] = "MIDDLE";
	    VerticalAlignment[VerticalAlignment["BOTTOM"] = 2] = "BOTTOM";
	    VerticalAlignment[VerticalAlignment["INNERTOP"] = 3] = "INNERTOP";
	    VerticalAlignment[VerticalAlignment["INNERBOTTOM"] = 4] = "INNERBOTTOM";
	})(exports.VerticalAlignment || (exports.VerticalAlignment = {}));
	var VerticalAlignment = exports.VerticalAlignment;
	(function (HorizontalAlignment) {
	    HorizontalAlignment[HorizontalAlignment["LEFT"] = 0] = "LEFT";
	    HorizontalAlignment[HorizontalAlignment["CENTER"] = 1] = "CENTER";
	    HorizontalAlignment[HorizontalAlignment["RIGHT"] = 2] = "RIGHT";
	    HorizontalAlignment[HorizontalAlignment["INNERLEFT"] = 3] = "INNERLEFT";
	    HorizontalAlignment[HorizontalAlignment["INNERRIGHT"] = 4] = "INNERRIGHT";
	})(exports.HorizontalAlignment || (exports.HorizontalAlignment = {}));
	var HorizontalAlignment = exports.HorizontalAlignment;
	var PopupUtils = (function () {
	    function PopupUtils() {
	    }
	    PopupUtils.positionPopup = function (popUp, nextTo, boundary, desiredPosition, appendTo, checkForBoundary) {
	        if (checkForBoundary === void 0) { checkForBoundary = 0; }
	        popUp.style.position = 'absolute';
	        if (appendTo) {
	            Dom_1.$$(appendTo).append(popUp);
	        }
	        desiredPosition.verticalOffset = desiredPosition.verticalOffset ? desiredPosition.verticalOffset : 0;
	        desiredPosition.horizontalOffset = desiredPosition.horizontalOffset ? desiredPosition.horizontalOffset : 0;
	        var popUpPosition = Dom_1.$$(nextTo).offset();
	        PopupUtils.basicVerticalAlignment(popUpPosition, popUp, nextTo, desiredPosition);
	        PopupUtils.basicHorizontalAlignment(popUpPosition, popUp, nextTo, desiredPosition);
	        PopupUtils.finalAdjustement(Dom_1.$$(popUp).offset(), popUpPosition, popUp, desiredPosition);
	        var popUpBoundary = PopupUtils.getBoundary(popUp);
	        var boundaryPosition = PopupUtils.getBoundary(boundary);
	        if (checkForBoundary < 2) {
	            var checkBoundary = PopupUtils.checkForOutOfBoundary(popUpBoundary, boundaryPosition);
	            if (checkBoundary.horizontal != 'ok' && desiredPosition.horizontalClip === true) {
	                var width = popUp.offsetWidth;
	                if (popUpBoundary.left < boundaryPosition.left) {
	                    width -= boundaryPosition.left - popUpBoundary.left;
	                }
	                if (popUpBoundary.right > boundaryPosition.right) {
	                    width -= popUpBoundary.right - boundaryPosition.right;
	                }
	                popUp.style.width = width + 'px';
	                checkBoundary.horizontal = 'ok';
	            }
	            if (checkBoundary.vertical != 'ok' || checkBoundary.horizontal != 'ok') {
	                var newDesiredPosition = PopupUtils.alignInsideBoundary(desiredPosition, checkBoundary);
	                PopupUtils.positionPopup(popUp, nextTo, boundary, newDesiredPosition, appendTo, checkForBoundary + 1);
	            }
	        }
	    };
	    PopupUtils.finalAdjustement = function (popUpOffSet, popUpPosition, popUp, desiredPosition) {
	        var position = Dom_1.$$(popUp).position();
	        popUp.style.top = (position.top + desiredPosition.verticalOffset) - (popUpOffSet.top - popUpPosition.top) + 'px';
	        popUp.style.left = (position.left + desiredPosition.horizontalOffset) - (popUpOffSet.left - popUpPosition.left) + 'px';
	    };
	    PopupUtils.basicVerticalAlignment = function (popUpPosition, popUp, nextTo, desiredPosition) {
	        switch (desiredPosition.vertical) {
	            case VerticalAlignment.TOP:
	                popUpPosition.top -= popUp.offsetHeight;
	                break;
	            case VerticalAlignment.BOTTOM:
	                popUpPosition.top += nextTo.offsetHeight;
	                break;
	            case VerticalAlignment.MIDDLE:
	                popUpPosition.top -= popUp.offsetHeight / 3;
	            case VerticalAlignment.INNERTOP:
	                break; // Nothing to do, it's the default alignment normally
	            case VerticalAlignment.INNERBOTTOM:
	                popUpPosition.top -= popUp.offsetHeight - nextTo.offsetHeight;
	                break;
	            default:
	                break;
	        }
	    };
	    PopupUtils.basicHorizontalAlignment = function (popUpPosition, popUp, nextTo, desiredPosition) {
	        switch (desiredPosition.horizontal) {
	            case HorizontalAlignment.LEFT:
	                popUpPosition.left -= popUp.offsetWidth;
	                break;
	            case HorizontalAlignment.RIGHT:
	                popUpPosition.left += nextTo.offsetWidth;
	                break;
	            case HorizontalAlignment.CENTER:
	                popUpPosition.left += PopupUtils.offSetToAlignCenter(popUp, nextTo);
	                break;
	            case HorizontalAlignment.INNERLEFT:
	                break; // Nothing to do, it's the default alignment normally
	            case HorizontalAlignment.INNERRIGHT:
	                popUpPosition.left -= popUp.offsetWidth - nextTo.offsetWidth;
	                break;
	            default:
	                break;
	        }
	    };
	    PopupUtils.alignInsideBoundary = function (oldPosition, checkBoundary) {
	        var newDesiredPosition = oldPosition;
	        if (checkBoundary.horizontal == 'left') {
	            newDesiredPosition.horizontal = HorizontalAlignment.RIGHT;
	        }
	        if (checkBoundary.horizontal == 'right') {
	            newDesiredPosition.horizontal = HorizontalAlignment.LEFT;
	        }
	        if (checkBoundary.vertical == 'top') {
	            newDesiredPosition.vertical = VerticalAlignment.BOTTOM;
	        }
	        if (checkBoundary.vertical == 'bottom') {
	            newDesiredPosition.vertical = VerticalAlignment.TOP;
	        }
	        return newDesiredPosition;
	    };
	    PopupUtils.offSetToAlignCenter = function (popUp, nextTo) {
	        return (nextTo.offsetWidth - popUp.offsetWidth) / 2;
	    };
	    PopupUtils.getBoundary = function (element) {
	        var boundaryOffset = Dom_1.$$(element).offset();
	        var toAddVertically;
	        if (element.tagName.toLowerCase() == 'body') {
	            toAddVertically = Math.max(element.scrollHeight, element.offsetHeight);
	        }
	        else if (element.tagName.toLowerCase() == 'html') {
	            toAddVertically = Math.max(element.clientHeight, element.scrollHeight, element.offsetHeight);
	        }
	        else {
	            toAddVertically = element.offsetHeight;
	        }
	        return {
	            top: boundaryOffset.top,
	            left: boundaryOffset.left,
	            right: boundaryOffset.left + element.offsetWidth,
	            bottom: boundaryOffset.top + toAddVertically
	        };
	    };
	    PopupUtils.checkForOutOfBoundary = function (popUpBoundary, boundary) {
	        var ret = {
	            vertical: 'ok',
	            horizontal: 'ok'
	        };
	        if (popUpBoundary.top < boundary.top) {
	            ret.vertical = 'top';
	        }
	        if (popUpBoundary.bottom > boundary.bottom) {
	            ret.vertical = 'bottom';
	        }
	        if (popUpBoundary.left < boundary.left) {
	            ret.horizontal = 'left';
	        }
	        if (popUpBoundary.right > boundary.right) {
	            ret.horizontal = 'right';
	        }
	        return ret;
	    };
	    return PopupUtils;
	}());
	exports.PopupUtils = PopupUtils;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Options_1 = __webpack_require__(32);
	var HighlightUtils_1 = __webpack_require__(65);
	var StringUtils_1 = __webpack_require__(60);
	var Utils_1 = __webpack_require__(17);
	var Dom_1 = __webpack_require__(56);
	// \u2011: http://graphemica.com/%E2%80%91
	var nonWordBoundary = '[\\.\\-\\u2011\\s~=,.\\|\\/:\'`’;_()!?]';
	var regexStart = '(' + nonWordBoundary + '|^)(';
	var DefaultStreamHighlightOptions = (function (_super) {
	    __extends(DefaultStreamHighlightOptions, _super);
	    function DefaultStreamHighlightOptions(cssClass, shorten, regexFlags) {
	        if (cssClass === void 0) { cssClass = 'coveo-highlight'; }
	        if (shorten === void 0) { shorten = 0; }
	        if (regexFlags === void 0) { regexFlags = 'gi'; }
	        _super.call(this);
	        this.cssClass = cssClass;
	        this.shorten = shorten;
	        this.regexFlags = regexFlags;
	    }
	    return DefaultStreamHighlightOptions;
	}(Options_1.Options));
	var StreamHighlightUtils = (function () {
	    function StreamHighlightUtils() {
	    }
	    StreamHighlightUtils.highlightStreamHTML = function (stream, termsToHighlight, phrasesToHighlight, options) {
	        var opts = new DefaultStreamHighlightOptions().merge(options);
	        var container = createStreamHTMLContainer(stream);
	        _.each(Dom_1.$$(container).findAll('*'), function (elem, i) {
	            var text = Dom_1.$$(elem).text();
	            elem.innerHTML = HighlightUtils_1.HighlightUtils.highlightString(text, getRestHighlightsForAllTerms(text, termsToHighlight, phrasesToHighlight, opts), [], opts.cssClass);
	        });
	        return container.innerHTML;
	    };
	    StreamHighlightUtils.highlightStreamText = function (stream, termsToHighlight, phrasesToHighlight, options) {
	        var opts = new DefaultStreamHighlightOptions().merge(options);
	        return HighlightUtils_1.HighlightUtils.highlightString(stream, getRestHighlightsForAllTerms(stream, termsToHighlight, phrasesToHighlight, opts), [], opts.cssClass);
	    };
	    return StreamHighlightUtils;
	}());
	exports.StreamHighlightUtils = StreamHighlightUtils;
	function getRestHighlightsForAllTerms(toHighlight, termsToHighlight, phrasesToHighlight, opts) {
	    var indexes = [];
	    var sortedTerms = _.keys(termsToHighlight).sort(termsSorting);
	    _.each(sortedTerms, function (term) {
	        var termsToIterate = _.compact([term].concat(termsToHighlight[term]).sort(termsSorting));
	        var regex = regexStart;
	        regex += termsToIterate.join('|') + ')(?=(?:' + nonWordBoundary + '|$)+)';
	        var indexesFound = StringUtils_1.StringUtils.getHighlights(toHighlight, new RegExp(regex, opts.regexFlags), term);
	        if (indexesFound != undefined && Utils_1.Utils.isNonEmptyArray(indexesFound)) {
	            indexes.push(indexesFound);
	        }
	    });
	    _.each(phrasesToHighlight, function (phrase, origPhrase) {
	        var split = origPhrase.split(' ');
	        var regex = regexStart;
	        _.each(split, function (origWord, i) {
	            regex += '(?:' + [origWord].concat(phrase[origWord]).join('|') + ')';
	            if (i == split.length - 1) {
	                regex += '(?=';
	            }
	            regex += nonWordBoundary;
	            if (i == split.length - 1) {
	                regex += ')';
	            }
	            if (i != split.length - 1) {
	                regex += '+';
	            }
	        });
	        regex += ')';
	        var indexesFound = StringUtils_1.StringUtils.getHighlights(toHighlight, new RegExp(regex, opts.regexFlags), origPhrase);
	        if (indexesFound != undefined && Utils_1.Utils.isNonEmptyArray(indexesFound)) {
	            indexes.push(indexesFound);
	        }
	    });
	    return _.chain(indexes)
	        .flatten()
	        .compact()
	        .uniq(function (highlight) {
	        return highlight.offset;
	    })
	        .sortBy(function (highlight) {
	        return highlight.offset;
	    })
	        .map(function (highlight) {
	        var keysFromTerms = _.keys(termsToHighlight);
	        var keysFromPhrases = _.keys(phrasesToHighlight);
	        var keys = keysFromTerms.concat(keysFromPhrases);
	        var group = _.indexOf(keys, highlight.dataHighlightGroupTerm) + 1;
	        return _.extend(highlight, { dataHighlightGroup: group });
	    })
	        .value();
	}
	function termsSorting(first, second) {
	    return first.length - second.length;
	}
	function createStreamHTMLContainer(stream) {
	    var container = Dom_1.$$('div').el;
	    container.innerHTML = stream;
	    return container;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueryController_1 = __webpack_require__(73);
	exports.QueryController = QueryController_1.QueryController;
	var FacetQueryController_1 = __webpack_require__(79);
	exports.FacetQueryController = FacetQueryController_1.FacetQueryController;
	var FacetRangeQueryController_1 = __webpack_require__(82);
	exports.FacetRangeQueryController = FacetRangeQueryController_1.FacetRangeQueryController;
	var FacetSliderQueryController_1 = __webpack_require__(83);
	exports.FacetSliderQueryController = FacetSliderQueryController_1.FacetSliderQueryController;
	var HierarchicalFacetQueryController_1 = __webpack_require__(84);
	exports.HierarchicalFacetQueryController = HierarchicalFacetQueryController_1.HierarchicalFacetQueryController;
	var HistoryController_1 = __webpack_require__(85);
	exports.HistoryController = HistoryController_1.HistoryController;
	var LocalStorageHistoryController_1 = __webpack_require__(87);
	exports.LocalStorageHistoryController = LocalStorageHistoryController_1.LocalStorageHistoryController;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RootComponent_1 = __webpack_require__(74);
	var QueryBuilder_1 = __webpack_require__(76);
	var LocalStorageUtils_1 = __webpack_require__(68);
	var Assert_1 = __webpack_require__(16);
	var SearchEndpointWithDefaultCallOptions_1 = __webpack_require__(78);
	var QueryEvents_1 = __webpack_require__(46);
	var QueryUtils_1 = __webpack_require__(22);
	var Defer_1 = __webpack_require__(30);
	var Dom_1 = __webpack_require__(56);
	var Utils_1 = __webpack_require__(17);
	var es6_promise_1 = __webpack_require__(6);
	var BaseComponent_1 = __webpack_require__(75);
	var ExternalModulesShim_1 = __webpack_require__(24);
	var DefaultQueryOptions = (function () {
	    function DefaultQueryOptions() {
	        this.searchAsYouType = false;
	        this.closeModalBox = true;
	        this.cancel = false;
	        this.logInActionsHistory = false;
	    }
	    return DefaultQueryOptions;
	}());
	/**
	 * This class is automatically instantiated and bound to the root of your search interface when you initialize the framework.<br/>
	 * It is essentially a singleton that wraps the access to the {@link SearchEndpoint} endpoint to execute query, and is in charge of triggering the different query events.<br/>
	 * This is what every component of the framework uses internally to execute query or access the endpoint.<br/>
	 * When calling <code>Coveo.executeQuery</code> this class is used.
	 */
	var QueryController = (function (_super) {
	    __extends(QueryController, _super);
	    /**
	     * Create a new query controller
	     * @param element
	     * @param options
	     */
	    function QueryController(element, options, usageAnalytics, searchInterface) {
	        _super.call(this, element, QueryController.ID);
	        this.options = options;
	        this.usageAnalytics = usageAnalytics;
	        this.searchInterface = searchInterface;
	        this.showingExecutingQueryAnimation = false;
	        this.localStorage = new LocalStorageUtils_1.LocalStorageUtils('lastQueryHash');
	        Assert_1.Assert.exists(element);
	        Assert_1.Assert.exists(options);
	        this.firstQuery = true;
	    }
	    /**
	     * Set the {@link SearchEndpoint} that the query controller should use to execute query
	     * @param endpoint
	     */
	    QueryController.prototype.setEndpoint = function (endpoint) {
	        this.overrideEndpoint = endpoint;
	        this.logger.debug('Endpoint set', endpoint);
	    };
	    /**
	     * Get the {@link SearchEndpoint} that is currently used by the query controller to execute query
	     * @returns {SearchEndpoint}
	     */
	    QueryController.prototype.getEndpoint = function () {
	        var endpoint = this.overrideEndpoint || this.options.endpoint;
	        // We must wrap the endpoint in a decorator that'll add the call options
	        // we obtain by firing the proper event. Those are used for authentication
	        // providers, and I guess other stuff later on.
	        return new SearchEndpointWithDefaultCallOptions_1.SearchEndpointWithDefaultCallOptions(endpoint, this.getCallOptions());
	    };
	    /**
	     * Return the last query that was performed by the query controller
	     * @returns {IQuery|Query}
	     */
	    QueryController.prototype.getLastQuery = function () {
	        return this.lastQuery || new QueryBuilder_1.QueryBuilder().build();
	    };
	    /**
	     * Execute a query and return a Promise of IQueryResults.<br/>
	     * This will execute the normal query flow, triggering all the necessary query events (newQuery <br/>
	     * All components present in the interface will act accordingly (modify the query and render results if needed).
	     * @param options
	     * @returns {Promise<IQueryResults>}
	     */
	    QueryController.prototype.executeQuery = function (options) {
	        var _this = this;
	        options = _.extend(new DefaultQueryOptions(), options);
	        if (options.closeModalBox) {
	            ExternalModulesShim_1.ModalBox.close(true);
	        }
	        this.logger.debug('Executing new query');
	        this.cancelAnyCurrentPendingQuery();
	        if (options.beforeExecuteQuery != null) {
	            options.beforeExecuteQuery();
	        }
	        if (!options.ignoreWarningSearchEvent) {
	            this.usageAnalytics.warnAboutSearchEvent();
	        }
	        this.showExecutingQueryAnimation();
	        var dataToSendOnNewQuery = {
	            searchAsYouType: options.searchAsYouType,
	            cancel: options.cancel,
	            origin: options.origin
	        };
	        this.newQueryEvent(dataToSendOnNewQuery);
	        if (dataToSendOnNewQuery.cancel) {
	            this.cancelQuery();
	            return;
	        }
	        var queryBuilder = this.createQueryBuilder(options);
	        // The query was canceled
	        if (!queryBuilder) {
	            return;
	        }
	        var query = queryBuilder.build();
	        if (options.logInActionsHistory) {
	            this.logQueryInActionsHistory(query, options.isFirstQuery);
	        }
	        var endpointToUse = this.getEndpoint();
	        var promise = this.currentPendingQuery = endpointToUse.search(query);
	        promise.then(function (queryResults) {
	            Assert_1.Assert.exists(queryResults);
	            var firstQuery = _this.firstQuery;
	            if (_this.firstQuery) {
	                _this.firstQuery = false;
	            }
	            // If our promise is no longer the current one, then the query
	            // has been cancel. We should do nothing here.
	            if (promise !== _this.currentPendingQuery) {
	                return;
	            }
	            _this.logger.debug('Query results received', query, queryResults);
	            var enableHistory = _this.searchInterface && _this.searchInterface.options && _this.searchInterface.options.enableHistory;
	            if ((!firstQuery || enableHistory) && _this.keepLastSearchUid(query, queryResults)) {
	                queryResults.searchUid = _this.getLastSearchUid();
	                queryResults._reusedSearchUid = true;
	                QueryUtils_1.QueryUtils.setPropertyOnResults(queryResults, 'queryUid', _this.getLastSearchUid());
	            }
	            else {
	                _this.lastQueryHash = _this.queryHash(query, queryResults);
	                _this.lastSearchUid = queryResults.searchUid;
	            }
	            _this.lastQuery = query;
	            _this.lastQueryResults = queryResults;
	            _this.currentError = null;
	            var dataToSendOnPreprocessResult = {
	                queryBuilder: queryBuilder,
	                query: query,
	                results: queryResults,
	                searchAsYouType: options.searchAsYouType
	            };
	            _this.preprocessResultsEvent(dataToSendOnPreprocessResult);
	            var dataToSendOnNoResult = {
	                queryBuilder: queryBuilder,
	                query: query,
	                results: queryResults,
	                searchAsYouType: options.searchAsYouType,
	                retryTheQuery: false
	            };
	            if (queryResults.results.length == 0) {
	                _this.noResultEvent(dataToSendOnNoResult);
	            }
	            if (dataToSendOnNoResult.retryTheQuery) {
	                // When retrying the query, we must forward the results to the deferred we
	                // initially returned, in case someone is listening on it.
	                return _this.executeQuery();
	            }
	            else {
	                _this.lastQueryBuilder = queryBuilder;
	                _this.currentPendingQuery = undefined;
	                var dataToSendOnSuccess_1 = {
	                    queryBuilder: queryBuilder,
	                    query: query,
	                    results: queryResults,
	                    searchAsYouType: options.searchAsYouType
	                };
	                _this.querySuccessEvent(dataToSendOnSuccess_1);
	                Defer_1.Defer.defer(function () {
	                    _this.deferredQuerySuccessEvent(dataToSendOnSuccess_1);
	                    _this.hideExecutingQueryAnimation();
	                });
	                return queryResults;
	            }
	        }).catch(function (error) {
	            // If our deferred is no longer the current one, then the query
	            // has been cancel. We should do nothing here.
	            if (promise !== _this.currentPendingQuery) {
	                return;
	            }
	            _this.logger.error('Query triggered an error', query, error);
	            // this.currentPendingQuery.reject(error);
	            _this.currentPendingQuery = undefined;
	            var dataToSendOnError = {
	                queryBuilder: queryBuilder,
	                endpoint: endpointToUse,
	                query: query,
	                error: error,
	                searchAsYouType: options.searchAsYouType
	            };
	            _this.lastQuery = query;
	            _this.lastQueryResults = null;
	            _this.currentError = error;
	            _this.queryError(dataToSendOnError);
	            _this.hideExecutingQueryAnimation();
	        });
	        var dataToSendDuringQuery = {
	            queryBuilder: queryBuilder,
	            query: query,
	            searchAsYouType: options.searchAsYouType,
	            promise: promise
	        };
	        this.duringQueryEvent(dataToSendDuringQuery);
	        return this.currentPendingQuery;
	    };
	    /**
	     * Using the same parameters as the last successful query, fetch another batch of results. Particularly useful for infinite scrolling, for example.
	     * @param count
	     * @returns {any}
	     */
	    QueryController.prototype.fetchMore = function (count) {
	        var _this = this;
	        if (this.currentPendingQuery != undefined) {
	            return undefined;
	        }
	        // Send all pending events (think : search as you type)
	        // This allows us to get the real search id for the results when the query returns
	        this.usageAnalytics.sendAllPendingEvents();
	        var queryBuilder = new QueryBuilder_1.QueryBuilder();
	        this.continueLastQueryBuilder(queryBuilder, count);
	        var query = queryBuilder.build();
	        var endpointToUse = this.getEndpoint();
	        var promise = this.currentPendingQuery = endpointToUse.search(query);
	        var dataToSendDuringQuery = {
	            queryBuilder: queryBuilder,
	            query: query,
	            searchAsYouType: false,
	            promise: promise
	        };
	        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.duringFetchMoreQuery, dataToSendDuringQuery);
	        this.lastQueryBuilder = queryBuilder;
	        this.lastQuery = query;
	        promise.then(function (results) {
	            // We re-use the search id from the initial search here, even though the
	            // server provided us with a new one. 'Fetch mores' are considered to be
	            // the same query from an analytics point of view.
	            _this.currentPendingQuery = undefined;
	            if (_this.lastQueryResults == null) {
	                _this.lastQueryResults = results;
	            }
	            else {
	                _.forEach(results.results, function (result) {
	                    _this.lastQueryResults.results.push(result);
	                });
	            }
	            var dataToSendOnPreprocessResult = {
	                queryBuilder: queryBuilder,
	                query: query,
	                results: results,
	                searchAsYouType: false
	            };
	            _this.preprocessResultsEvent(dataToSendOnPreprocessResult);
	            QueryUtils_1.QueryUtils.setIndexAndUidOnQueryResults(query, results, _this.getLastSearchUid(), results.pipeline, results.splitTestRun);
	            var dataToSendOnFetchMoreSuccess = {
	                query: query,
	                results: results,
	                queryBuilder: queryBuilder,
	                searchAsYouType: false
	            };
	            _this.fetchMoreSuccessEvent(dataToSendOnFetchMoreSuccess);
	        });
	        return this.currentPendingQuery;
	    };
	    /**
	     * Cancel any pending query
	     */
	    QueryController.prototype.cancelQuery = function () {
	        this.cancelAnyCurrentPendingQuery();
	        this.hideExecutingQueryAnimation();
	    };
	    QueryController.prototype.deferExecuteQuery = function (options) {
	        var _this = this;
	        this.showExecutingQueryAnimation();
	        Defer_1.Defer.defer(function () { return _this.executeQuery(options); });
	    };
	    QueryController.prototype.ensureCreatedQueryBuilder = function () {
	        if (!this.createdOneQueryBuilder) {
	            this.createQueryBuilder(new DefaultQueryOptions());
	        }
	    };
	    QueryController.prototype.createQueryBuilder = function (options) {
	        Assert_1.Assert.exists(options);
	        this.createdOneQueryBuilder = true;
	        var queryBuilder = new QueryBuilder_1.QueryBuilder();
	        // Default values, components will probably override them if they exists
	        queryBuilder.language = String['locale'];
	        queryBuilder.firstResult = queryBuilder.firstResult || 0;
	        // Allow outside code to customize the query builder. We provide two events,
	        // to allow someone to have a peep at the query builder after the first phase
	        // and add some stuff depending on what was put in there. The facets are using
	        // this mechanism to generate query overrides.
	        var dataToSendDuringBuildingQuery = {
	            queryBuilder: queryBuilder,
	            searchAsYouType: options.searchAsYouType,
	            cancel: options.cancel
	        };
	        this.buildingQueryEvent(dataToSendDuringBuildingQuery);
	        var dataToSendDuringDoneBuildingQuery = {
	            queryBuilder: queryBuilder,
	            searchAsYouType: options.searchAsYouType,
	            cancel: options.cancel
	        };
	        this.doneBuildingQueryEvent(dataToSendDuringDoneBuildingQuery);
	        if (dataToSendDuringBuildingQuery.cancel || dataToSendDuringDoneBuildingQuery.cancel) {
	            this.cancelQuery();
	            return;
	        }
	        var pipeline = this.getPipelineInUrl();
	        if (pipeline) {
	            queryBuilder.pipeline = pipeline;
	        }
	        return queryBuilder;
	    };
	    QueryController.prototype.isStandaloneSearchbox = function () {
	        return Utils_1.Utils.isNonEmptyString(this.options.searchPageUri);
	    };
	    QueryController.prototype.saveLastQuery = function () {
	        this.localStorage.save({
	            expire: new Date().getTime() + 1000 * 60 * 30,
	            hash: this.lastQueryHash,
	            uid: this.lastSearchUid
	        });
	    };
	    // This field is exposed for components rendered in the results or on-demand which
	    // need access to the entire query. For example, the QuickviewDocument need to pass
	    // the entire query to the Search API. For other components, QueryStateModel or
	    // listening to events like 'doneBuildingQuery' is the way to go.
	    QueryController.prototype.getLastQueryHash = function () {
	        if (this.lastQueryHash != null) {
	            return this.lastQueryHash;
	        }
	        this.loadLastQueryHash();
	        return this.lastQueryHash || this.queryHash(new QueryBuilder_1.QueryBuilder().build());
	    };
	    QueryController.prototype.getLastSearchUid = function () {
	        if (this.lastSearchUid != null) {
	            return this.lastSearchUid;
	        }
	        this.loadLastQueryHash();
	        return this.lastSearchUid;
	    };
	    QueryController.prototype.loadLastQueryHash = function () {
	        var lastQuery = this.localStorage.load();
	        if (lastQuery != null && new Date().getTime() <= lastQuery.expire) {
	            this.lastQueryHash = lastQuery.hash;
	            this.lastSearchUid = lastQuery.uid;
	            this.localStorage.remove();
	        }
	    };
	    QueryController.prototype.continueLastQueryBuilder = function (queryBuilder, count) {
	        _.extend(queryBuilder, this.lastQueryBuilder);
	        queryBuilder.firstResult = queryBuilder.firstResult + queryBuilder.numberOfResults;
	        queryBuilder.numberOfResults = count;
	    };
	    QueryController.prototype.getPipelineInUrl = function () {
	        return QueryUtils_1.QueryUtils.getUrlParameter('pipeline');
	    };
	    QueryController.prototype.cancelAnyCurrentPendingQuery = function () {
	        if (Utils_1.Utils.exists(this.currentPendingQuery)) {
	            this.logger.debug('Cancelling current pending query');
	            es6_promise_1.Promise.reject(this.currentPendingQuery);
	            this.currentPendingQuery = undefined;
	            return true;
	        }
	        return false;
	    };
	    QueryController.prototype.showExecutingQueryAnimation = function () {
	        if (!this.showingExecutingQueryAnimation) {
	            Dom_1.$$(this.element).addClass('coveo-executing-query');
	            this.showingExecutingQueryAnimation = true;
	        }
	    };
	    QueryController.prototype.hideExecutingQueryAnimation = function () {
	        if (this.showingExecutingQueryAnimation) {
	            Dom_1.$$(this.element).removeClass('coveo-executing-query');
	            this.showingExecutingQueryAnimation = false;
	        }
	    };
	    QueryController.prototype.keepLastSearchUid = function (query, queryResults) {
	        return this.getLastQueryHash() == this.queryHash(query, queryResults);
	    };
	    QueryController.prototype.queryHash = function (query, queryResults) {
	        var queryHash = JSON.stringify(_.omit(query, 'firstResult', 'groupBy', 'debug'));
	        if (queryResults != null) {
	            queryHash += queryResults.pipeline;
	        }
	        return queryHash;
	    };
	    QueryController.prototype.getCallOptions = function () {
	        var args = {
	            options: {
	                authentication: []
	            }
	        };
	        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.buildingCallOptions, args);
	        return args.options;
	    };
	    QueryController.prototype.newQueryEvent = function (args) {
	        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.newQuery, args);
	    };
	    QueryController.prototype.buildingQueryEvent = function (args) {
	        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.buildingQuery, args);
	    };
	    QueryController.prototype.doneBuildingQueryEvent = function (args) {
	        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.doneBuildingQuery, args);
	    };
	    QueryController.prototype.duringQueryEvent = function (args) {
	        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.duringQuery, args);
	    };
	    QueryController.prototype.querySuccessEvent = function (args) {
	        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.querySuccess, args);
	    };
	    QueryController.prototype.fetchMoreSuccessEvent = function (args) {
	        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.fetchMoreSuccess, args);
	    };
	    QueryController.prototype.deferredQuerySuccessEvent = function (args) {
	        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.deferredQuerySuccess, args);
	    };
	    QueryController.prototype.queryError = function (args) {
	        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.queryError, args);
	    };
	    QueryController.prototype.preprocessResultsEvent = function (args) {
	        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.preprocessResults, args);
	    };
	    QueryController.prototype.noResultEvent = function (args) {
	        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.noResults, args);
	    };
	    QueryController.prototype.debugInfo = function () {
	        var _this = this;
	        var info = {
	            'query': this.lastQuery,
	        };
	        if (this.lastQueryResults != null) {
	            info.queryDuration = function () { return _this.buildQueryDurationSection(_this.lastQueryResults); };
	            info.results = function () { return _.omit(_this.lastQueryResults, 'results'); };
	        }
	        if (this.currentError != null) {
	            info.error = function () { return _this.currentError; };
	        }
	        return info;
	    };
	    QueryController.prototype.buildQueryDurationSection = function (queryResults) {
	        var dom = Dom_1.Dom.createElement('div', { className: 'coveo-debug-queryDuration' });
	        var graph = Dom_1.Dom.createElement('div', { className: 'coveo-debug-durations' });
	        var debugRef = BaseComponent_1.BaseComponent.getComponentRef('Debug');
	        dom.appendChild(graph);
	        _.forEach(debugRef.durationKeys, function (key) {
	            var duration = queryResults[key];
	            if (duration != null) {
	                graph.appendChild(Dom_1.Dom.createElement('div', {
	                    className: 'coveo-debug-duration',
	                    style: "width:" + duration + "px",
	                    'data-id': key
	                }));
	                var legend = Dom_1.Dom.createElement('div', { className: 'coveo-debug-duration-legend', 'data-id': key });
	                dom.appendChild(legend);
	                var keyDom = Dom_1.Dom.createElement('span', { className: 'coveo-debug-duration-label' });
	                keyDom.appendChild(document.createTextNode(key));
	                legend.appendChild(keyDom);
	                var durationDom = Dom_1.Dom.createElement('span', { className: 'coveo-debug-duration-value' });
	                durationDom.appendChild(document.createTextNode(duration));
	                legend.appendChild(durationDom);
	            }
	        });
	        return dom;
	    };
	    QueryController.prototype.logQueryInActionsHistory = function (query, isFirstQuery) {
	        if (typeof coveoanalytics != 'undefined') {
	            var store = new coveoanalytics.history.HistoryStore();
	            var queryElement = {
	                name: 'Query',
	                value: query.q,
	                time: JSON.stringify(new Date())
	            };
	            store.addElement(queryElement);
	        }
	    };
	    QueryController.ID = 'QueryController';
	    return QueryController;
	}(RootComponent_1.RootComponent));
	exports.QueryController = QueryController;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var BaseComponent_1 = __webpack_require__(75);
	var RootComponent = (function (_super) {
	    __extends(RootComponent, _super);
	    function RootComponent(element, type) {
	        _super.call(this, element, type);
	        this.element = element;
	        this.type = type;
	    }
	    return RootComponent;
	}(BaseComponent_1.BaseComponent));
	exports.RootComponent = RootComponent;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Assert_1 = __webpack_require__(16);
	var Dom_1 = __webpack_require__(56);
	var DebugEvents_1 = __webpack_require__(41);
	var Logger_1 = __webpack_require__(15);
	/**
	 * Every component in the framework ultimately inherits from this base component class.
	 */
	var BaseComponent = (function () {
	    function BaseComponent(element, type) {
	        this.element = element;
	        this.type = type;
	        /**
	         * A disabled component will not participate in the query, or listen to {@link ComponentEvents}.
	         * @type {boolean}
	         */
	        this.disabled = false;
	        Assert_1.Assert.exists(element);
	        Assert_1.Assert.isNonEmptyString(type);
	        this.logger = new Logger_1.Logger(this);
	        this.initDebugInfo();
	        BaseComponent.bindComponentToElement(element, this);
	    }
	    /**
	     * Return the debug info about this component.
	     * @returns {any}
	     */
	    BaseComponent.prototype.debugInfo = function () {
	        var info = {};
	        info[this['constructor']['ID']] = this;
	        return info;
	    };
	    /**
	     * Disable the component.
	     * Normally this means that the component will not execute handlers for the framework events (query events, for example).
	     * Component are enabled by default on creation.
	     */
	    BaseComponent.prototype.disable = function () {
	        this.disabled = true;
	    };
	    /**
	     * Enable the component.
	     * Normally this means that the component will execute handlers for the framework events (query events, for example).
	     * Components are enabled by default on creation.
	     */
	    BaseComponent.prototype.enable = function () {
	        this.disabled = false;
	    };
	    BaseComponent.prototype.initDebugInfo = function () {
	        Dom_1.$$(this.element).on('doubleclick', function (e) {
	            if (e.altKey) {
	                var debugInfo = this.debugInfo();
	                if (debugInfo != null) {
	                    $(this.root).trigger(DebugEvents_1.DebugEvents.showDebugPanel, this.debugInfo());
	                }
	            }
	        });
	    };
	    BaseComponent.bindComponentToElement = function (element, component) {
	        Assert_1.Assert.exists(element);
	        Assert_1.Assert.exists(component);
	        Assert_1.Assert.isNonEmptyString(component.type);
	        element[BaseComponent.computeCssClassNameForType(component.type)] = component;
	        Dom_1.$$(element).addClass(BaseComponent.computeCssClassNameForType(component.type));
	        BaseComponent.getBoundComponentsForElement(element).push(component);
	    };
	    BaseComponent.computeCssClassName = function (componentClass) {
	        return componentClass['className'] ? componentClass['className'] : componentClass['className'] = BaseComponent.computeCssClassNameForType(componentClass['ID']);
	    };
	    BaseComponent.computeCssClassNameForType = function (type) {
	        Assert_1.Assert.isNonEmptyString(type);
	        return 'Coveo' + type;
	    };
	    BaseComponent.computeSelectorForType = function (type) {
	        Assert_1.Assert.isNonEmptyString(type);
	        return '.' + BaseComponent.computeCssClassNameForType(type);
	    };
	    BaseComponent.getBoundComponentsForElement = function (element) {
	        Assert_1.Assert.exists(element);
	        if (element.CoveoBoundComponents == null) {
	            element.CoveoBoundComponents = [];
	        }
	        return element.CoveoBoundComponents;
	    };
	    BaseComponent.getComponentRef = function (component) {
	        return Coveo[component];
	    };
	    return BaseComponent;
	}());
	exports.BaseComponent = BaseComponent;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var ExpressionBuilder_1 = __webpack_require__(77);
	var QueryUtils_1 = __webpack_require__(22);
	/**
	 * The QueryBuilder is used to build a {@link IQuery} that will be able to be executed using the Search API.<br/>
	 * The class exposes several members and methods that help components and external code to build up the final query that is sent to the Search API.<br/>
	 */
	var QueryBuilder = (function () {
	    function QueryBuilder() {
	        /**
	         * Used to build the basic part of the query expression.<br/>
	         * This part typically consists of user-entered content such as query keywords, etc.
	         * @type {Coveo.ExpressionBuilder}
	         */
	        this.expression = new ExpressionBuilder_1.ExpressionBuilder();
	        /**
	         * Used to build the advanced part of the query expression.<br/>
	         * This part is typically formed of filter expressions generated by components such as facets, external code, etc.
	         * @type {Coveo.ExpressionBuilder}
	         */
	        this.advancedExpression = new ExpressionBuilder_1.ExpressionBuilder();
	        /**
	         * Used to build the advanced part of the query expression.<br/>
	         * This part is similar to `advancedExpression`, but its content is interpreted as a constant expression by the index and it takes advantage of special caching features.
	         * @type {Coveo.ExpressionBuilder}
	         */
	        this.constantExpression = new ExpressionBuilder_1.ExpressionBuilder();
	        /**
	         * Used to build the disjunctive part of the query expression.<br/>
	         * When present, this part is evaluated separately from the other expressions and the matching results are merged to those matching expressions, `advancedExpression` and `constantExpression`.<br/>
	         * The final boolean expression for the query is thus (basic advanced constant) OR (disjunction).
	         * @type {Coveo.ExpressionBuilder}
	         */
	        this.disjunctionExpression = new ExpressionBuilder_1.ExpressionBuilder();
	        /**
	         * Whether to disable the special query syntax such as field references for the basic query expression (parameter q).
	         * It is equivalent to a No syntax block applied to the basic query expression.
	         * If not specified, the parameter defaults to false.
	         */
	        this.disableQuerySyntax = false;
	        /**
	         * This is the 0-based index of the first result to return.<br/>
	         * If not specified, this parameter defaults to 0.
	         */
	        this.firstResult = 0;
	        /**
	         * This is the number of results to return, starting from {@link IQuery.firstResult}.<br/>
	         * If not specified, this parameter defaults to 10.
	         */
	        this.numberOfResults = 10;
	        this.requiredFields = [];
	        this.includeRequiredFields = false;
	        /**
	         * Whether to enable query corrections on this query (see {@link DidYouMean}).
	         */
	        this.enableDidYouMean = false;
	        /**
	         * Whether to enable debug info on the query.<br/>
	         * This will return additional information on the resulting JSON response from the Search API.<br/>
	         * Mostly: execution report (a detailed breakdown of the parsed and executed query).
	         */
	        this.enableDebug = false;
	        /**
	         * This specifies the sort criterion(s) to use to sort results. If not specified, this parameter defaults to relevancy.<br/>
	         * Possible values are : <br/>
	         * -- relevancy :  This uses all the configured ranking weights as well as any specified ranking expressions to rank results.<br/>
	         * -- dateascending / datedescending Sort using the value of the `@date` field, which is typically the last modification date of an item in the index.<br/>
	         * -- qre : Sort using only the weights applied through ranking expressions. This is much like using `relevancy` except that automatic weights based on keyword proximity etc, are not computed.<br/>
	         * -- nosort : Do not sort the results. The order in which items are returned is essentially random.<br/>
	         * -- @field ascending / @field descending Sort using the value of a custom field.
	         */
	        this.sortCriteria = 'relevancy';
	        this.retrieveFirstSentences = true;
	        this.queryUid = QueryUtils_1.QueryUtils.createGuid();
	        /**
	         * This specifies an array of Query Function operation that will be executed on the results.
	         */
	        this.queryFunctions = [];
	        /**
	         * This specifies an array of Ranking Function operations that will be executed on the results.
	         */
	        this.rankingFunctions = [];
	        /**
	         * This specifies an array of Group By operations that can be performed on the query results to extract facets.
	         */
	        this.groupByRequests = [];
	        this.enableDuplicateFiltering = false;
	    }
	    /**
	     * Build the current content or state of the query builder and return a {@link IQuery}.<br/>
	     * build can be called multiple times on the same QueryBuilder.
	     * @returns {IQuery}
	     */
	    QueryBuilder.prototype.build = function () {
	        var query = {
	            q: this.expression.build(),
	            aq: this.advancedExpression.build(),
	            cq: this.constantExpression.build(),
	            dq: this.disjunctionExpression.build(),
	            searchHub: this.searchHub,
	            tab: this.tab,
	            language: this.language,
	            pipeline: this.pipeline,
	            maximumAge: this.maximumAge,
	            wildcards: this.enableWildcards,
	            questionMark: this.enableQuestionMarks,
	            lowercaseOperators: this.enableLowercaseOperators,
	            partialMatch: this.enablePartialMatch,
	            partialMatchKeywords: this.partialMatchKeywords,
	            partialMatchThreshold: this.partialMatchThreshold,
	            firstResult: this.firstResult,
	            numberOfResults: this.numberOfResults,
	            excerptLength: this.excerptLength,
	            filterField: this.filterField,
	            filterFieldRange: this.filterFieldRange,
	            parentField: this.parentField,
	            childField: this.childField,
	            fieldsToInclude: this.computeFieldsToInclude(),
	            fieldsToExclude: this.fieldsToExclude,
	            enableDidYouMean: this.enableDidYouMean,
	            sortCriteria: this.sortCriteria,
	            sortField: this.sortField,
	            queryFunctions: this.queryFunctions,
	            rankingFunctions: this.rankingFunctions,
	            groupBy: this.groupByRequests,
	            retrieveFirstSentences: this.retrieveFirstSentences,
	            timezone: this.timezone,
	            disableQuerySyntax: this.disableQuerySyntax,
	            enableDuplicateFiltering: this.enableDuplicateFiltering,
	            enableCollaborativeRating: this.enableCollaborativeRating,
	            debug: this.enableDebug,
	            context: this.context,
	            actionsHistory: this.actionsHistory,
	            recommendation: this.recommendation
	        };
	        return query;
	    };
	    /**
	     * Return only the expression(s) part(s) of the query, as a string.<br/>
	     * This means the basic, advanced and constant part in a complete expression {@link IQuery.q}, {@link IQuery.aq}, {@link IQuery.cq}.
	     * @returns {string}
	     */
	    QueryBuilder.prototype.computeCompleteExpression = function () {
	        return this.computeCompleteExpressionParts().full;
	    };
	    /**
	     * Return only the expression(s) part(s) of the query, as an object.
	     * @returns {{full: string, withoutConstant: string, constant: string}}
	     */
	    QueryBuilder.prototype.computeCompleteExpressionParts = function () {
	        var withoutConstant = ExpressionBuilder_1.ExpressionBuilder.merge(this.expression, this.advancedExpression);
	        return {
	            full: ExpressionBuilder_1.ExpressionBuilder.mergeUsingOr(ExpressionBuilder_1.ExpressionBuilder.merge(withoutConstant, this.constantExpression), this.disjunctionExpression).build(),
	            withoutConstant: ExpressionBuilder_1.ExpressionBuilder.mergeUsingOr(withoutConstant, this.disjunctionExpression).build(),
	            basic: ExpressionBuilder_1.ExpressionBuilder.mergeUsingOr(this.expression, this.disjunctionExpression).build(),
	            advanced: ExpressionBuilder_1.ExpressionBuilder.mergeUsingOr(this.advancedExpression, this.disjunctionExpression).build(),
	            constant: ExpressionBuilder_1.ExpressionBuilder.mergeUsingOr(this.constantExpression, this.disjunctionExpression).build()
	        };
	    };
	    /**
	     * Return only the expression(s) part(s) of the query, as a string, except the given expression.<br/>
	     * This is used by {@link Facet}, to build their group by request with query override.
	     * @param except
	     * @returns {string}
	     */
	    QueryBuilder.prototype.computeCompleteExpressionExcept = function (except) {
	        return this.computeCompleteExpressionPartsExcept(except).full;
	    };
	    /**
	     * Return only the expression(s) part(s) of the query, as an object, except the given expression.<br/>
	     * This is used by {@link Facet}, to build their group by request with query override.
	     * @param except
	     * @returns {{full: string, withoutConstant: string, constant: string}}
	     */
	    QueryBuilder.prototype.computeCompleteExpressionPartsExcept = function (except) {
	        var withoutConstantAndExcept = ExpressionBuilder_1.ExpressionBuilder.merge(this.expression, this.advancedExpression);
	        withoutConstantAndExcept.remove(except);
	        var basicAndExcept = new ExpressionBuilder_1.ExpressionBuilder();
	        basicAndExcept.fromExpressionBuilder(this.expression);
	        basicAndExcept.remove(except);
	        var advancedAndExcept = new ExpressionBuilder_1.ExpressionBuilder();
	        advancedAndExcept.fromExpressionBuilder(this.advancedExpression);
	        advancedAndExcept.remove(except);
	        return {
	            full: ExpressionBuilder_1.ExpressionBuilder.mergeUsingOr(ExpressionBuilder_1.ExpressionBuilder.merge(withoutConstantAndExcept, this.constantExpression), this.disjunctionExpression).build(),
	            withoutConstant: ExpressionBuilder_1.ExpressionBuilder.mergeUsingOr(withoutConstantAndExcept, this.disjunctionExpression).build(),
	            basic: ExpressionBuilder_1.ExpressionBuilder.mergeUsingOr(basicAndExcept, this.disjunctionExpression).build(),
	            advanced: ExpressionBuilder_1.ExpressionBuilder.mergeUsingOr(advancedAndExcept, this.disjunctionExpression).build(),
	            constant: ExpressionBuilder_1.ExpressionBuilder.mergeUsingOr(this.constantExpression, this.disjunctionExpression).build()
	        };
	    };
	    /**
	     * Add fields to specifically include when the results return.<br/>
	     * This can be used to accelerate the execution time of every query, as there is much less data to process if you whitelist specific fields.
	     * @param fields
	     */
	    QueryBuilder.prototype.addFieldsToInclude = function (fields) {
	        this.fieldsToInclude = _.uniq((this.fieldsToInclude || []).concat(fields));
	    };
	    QueryBuilder.prototype.addRequiredFields = function (fields) {
	        this.requiredFields = _.uniq(this.requiredFields.concat(fields));
	    };
	    /**
	     * Add fields to specifically exclude when the results return.<br/>
	     * This can be used to accelerate the execution time of every query, as there is much less data to process if you blacklist specific fields.
	     * @param fields
	     */
	    QueryBuilder.prototype.addFieldsToExclude = function (fields) {
	        this.fieldsToExclude = _.uniq((this.fieldsToInclude || []).concat(fields));
	    };
	    QueryBuilder.prototype.computeFieldsToInclude = function () {
	        if (this.includeRequiredFields || this.fieldsToInclude != null) {
	            return this.requiredFields.concat(this.fieldsToInclude || []);
	        }
	        else {
	            return null;
	        }
	    };
	    /**
	     * Add a single context key->value pair to the query.<br/>
	     * This is used by the Query pipeline in the Coveo platform.
	     * @param key
	     * @param value
	     */
	    QueryBuilder.prototype.addContextValue = function (key, value) {
	        if (this.context == null) {
	            this.context = {};
	        }
	        this.context[key] = value;
	    };
	    /**
	     * Add a context object to the query.<br/>
	     * This can contain multiple key->value.<br/>
	     * This is used by the Query pipeline in the Coveo platform.
	     * @param values
	     */
	    QueryBuilder.prototype.addContext = function (values) {
	        if (this.context == null) {
	            this.context = {};
	        }
	        _.extend(this.context, values);
	    };
	    return QueryBuilder;
	}());
	exports.QueryBuilder = QueryBuilder;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Assert_1 = __webpack_require__(16);
	var QueryUtils_1 = __webpack_require__(22);
	/**
	 * An `ExpressionBuilder` that is mostly used by the {@link QueryBuilder}.<br/>
	 * It is used to build a single query expression.<br/>
	 * It allows combining multiple expression parts into a single string and provides utilities to generate common expression parts.
	 */
	var ExpressionBuilder = (function () {
	    function ExpressionBuilder() {
	        this.parts = []; // he he he
	        this.wrapParts = true;
	    }
	    /**
	     * Add a new part to the expression.
	     * @param expression
	     */
	    ExpressionBuilder.prototype.add = function (expression) {
	        Assert_1.Assert.isNonEmptyString(expression);
	        this.parts.push(expression);
	    };
	    /**
	     * Take another `ExpressionBuilder`, and copy it.
	     * @param expression
	     */
	    ExpressionBuilder.prototype.fromExpressionBuilder = function (expression) {
	        this.parts = this.parts.concat(expression.parts);
	    };
	    /**
	     * Add a new part to the expression, but specific for field values<br/>
	     * eg @field=(value1,value2,value3).
	     * @param field The field for which to create an expression (e.g.: @foo).
	     * @param operator The operator to use e.g.: = (equal) == (strict equal) <> (not equal).
	     * @param values The values to put in the expression.
	     */
	    ExpressionBuilder.prototype.addFieldExpression = function (field, operator, values) {
	        Assert_1.Assert.isNonEmptyString(field);
	        Assert_1.Assert.stringStartsWith(field, '@');
	        Assert_1.Assert.isNonEmptyString(operator);
	        Assert_1.Assert.isLargerOrEqualsThan(1, values.length);
	        this.add(QueryUtils_1.QueryUtils.buildFieldExpression(field, operator, values));
	    };
	    /**
	     * Add a new part to the expression, but specific for field values<br/>
	     * eg : NOT @field==(value1, value2, value3).
	     * @param field The field for which to create an expression (e.g.: @foo)
	     * @param values The values to put in the expression.
	     */
	    ExpressionBuilder.prototype.addFieldNotEqualExpression = function (field, values) {
	        Assert_1.Assert.isNonEmptyString(field);
	        Assert_1.Assert.stringStartsWith(field, '@');
	        Assert_1.Assert.isLargerOrEqualsThan(1, values.length);
	        this.add(QueryUtils_1.QueryUtils.buildFieldNotEqualExpression(field, values));
	    };
	    /**
	     * Removes an expression from the builder.
	     * @param expression
	     */
	    ExpressionBuilder.prototype.remove = function (expression) {
	        Assert_1.Assert.isNonEmptyString(expression);
	        var index = _.indexOf(this.parts, expression);
	        if (index != -1) {
	            this.parts.splice(_.indexOf(this.parts, expression), 1);
	        }
	    };
	    /**
	     * Checks if the builder is currently empty.
	     * @returns {boolean}
	     */
	    ExpressionBuilder.prototype.isEmpty = function () {
	        return this.parts.length == 0;
	    };
	    /**
	     * Builds the expression string by combining all the parts together.<br/>
	     * @param exp expression to join the different parts, default to a space.
	     * @returns {any}
	     */
	    ExpressionBuilder.prototype.build = function (exp) {
	        if (exp === void 0) { exp = ' '; }
	        if (this.parts.length == 0) {
	            return undefined;
	        }
	        else if (this.parts.length == 1) {
	            return this.parts[0];
	        }
	        else if (this.wrapParts) {
	            return '(' + this.parts.join(')' + exp + '(') + ')';
	        }
	        else {
	            return this.parts.join(exp);
	        }
	    };
	    /**
	     * Merges several `ExpressionBuilder` together.
	     * @param builders Builders that should be merged.
	     * @returns {Coveo.ExpressionBuilder}
	     */
	    ExpressionBuilder.merge = function () {
	        var builders = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            builders[_i - 0] = arguments[_i];
	        }
	        var merged = new ExpressionBuilder();
	        _.each(builders, function (builder) {
	            merged.parts = merged.parts.concat(builder.parts);
	        });
	        return merged;
	    };
	    /**
	     * Merges several `ExpressionBuilder` together, using the OR operator.
	     * @param builders Builders that should be merged.
	     * @returns {Coveo.ExpressionBuilder}
	     */
	    ExpressionBuilder.mergeUsingOr = function () {
	        var builders = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            builders[_i - 0] = arguments[_i];
	        }
	        var nonEmpty = _.filter(builders, function (b) { return !b.isEmpty(); });
	        var merged = new ExpressionBuilder();
	        if (nonEmpty.length == 1) {
	            merged.parts = [].concat(nonEmpty[0].parts);
	        }
	        else if (nonEmpty.length > 1) {
	            var parts = _.map(nonEmpty, function (b) { return b.build(); });
	            merged.add('(' + parts.join(') OR (') + ')');
	        }
	        return merged;
	    };
	    return ExpressionBuilder;
	}());
	exports.ExpressionBuilder = ExpressionBuilder;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var SearchEndpointWithDefaultCallOptions = (function () {
	    function SearchEndpointWithDefaultCallOptions(endpoint, callOptions) {
	        this.endpoint = endpoint;
	        this.callOptions = callOptions;
	        this.options = endpoint.options;
	    }
	    SearchEndpointWithDefaultCallOptions.prototype.getBaseUri = function () {
	        return this.endpoint.getBaseUri();
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.getBaseAlertsUri = function () {
	        return this.endpoint.getBaseAlertsUri();
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.getAuthenticationProviderUri = function (provider, returnUri, message) {
	        return this.endpoint.getAuthenticationProviderUri(provider, returnUri, message);
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.isJsonp = function () {
	        return this.endpoint.isJsonp();
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.search = function (query, callOptions) {
	        return this.endpoint.search(query, this.enrichCallOptions(callOptions));
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.getExportToExcelLink = function (query, numberOfResults, callOptions) {
	        return this.endpoint.getExportToExcelLink(query, numberOfResults, this.enrichCallOptions(callOptions));
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.tagDocument = function (taggingRequest, callOptions) {
	        return this.endpoint.tagDocument(taggingRequest, this.enrichCallOptions(taggingRequest));
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.getRevealQuerySuggest = function (request, callOptions) {
	        return this.endpoint.getRevealQuerySuggest(request, this.enrichCallOptions(callOptions));
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.rateDocument = function (ratingRequest, callOptions) {
	        return this.endpoint.rateDocument(ratingRequest, this.enrichCallOptions(callOptions));
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.getRawDataStream = function (documentUniqueId, dataStreamType, callOptions) {
	        return this.endpoint.getRawDataStream(documentUniqueId, dataStreamType, this.enrichCallOptions(callOptions));
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.getDocument = function (documentUniqueId, callOptions) {
	        return this.endpoint.getDocument(documentUniqueId, this.enrichCallOptions(callOptions));
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.getDocumentText = function (documentUniqueID, callOptions) {
	        return this.endpoint.getDocumentText(documentUniqueID, this.enrichCallOptions(callOptions));
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.getDocumentHtml = function (documentUniqueID, callOptions) {
	        return this.endpoint.getDocumentHtml(documentUniqueID, this.enrichCallOptions(callOptions));
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.getViewAsHtmlUri = function (documentUniqueID, callOptions) {
	        return this.endpoint.getViewAsHtmlUri(documentUniqueID, this.enrichCallOptions(callOptions));
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.getViewAsDatastreamUri = function (documentUniqueID, dataStreamType, callOptions) {
	        return this.endpoint.getViewAsDatastreamUri(documentUniqueID, dataStreamType, this.enrichCallOptions(callOptions));
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.listFieldValues = function (request, callOptions) {
	        return this.endpoint.listFieldValues(request, this.enrichCallOptions(callOptions));
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.listFields = function (callOptions) {
	        return this.endpoint.listFields(this.enrichCallOptions(callOptions));
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.extensions = function (callOptions) {
	        return this.endpoint.extensions(this.enrichCallOptions(callOptions));
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.follow = function (request) {
	        return this.endpoint.follow(request);
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.listSubscriptions = function (page) {
	        return this.endpoint.listSubscriptions(page);
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.updateSubscription = function (subscription) {
	        return this.endpoint.updateSubscription(subscription);
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.deleteSubscription = function (subscription) {
	        return this.endpoint.deleteSubscription(subscription);
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.logError = function (sentryLog) {
	        return this.endpoint.logError(sentryLog);
	    };
	    SearchEndpointWithDefaultCallOptions.prototype.enrichCallOptions = function (callOptions) {
	        return _.extend({}, callOptions, this.callOptions);
	    };
	    return SearchEndpointWithDefaultCallOptions;
	}());
	exports.SearchEndpointWithDefaultCallOptions = SearchEndpointWithDefaultCallOptions;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {/// <reference path='../ui/Facet/Facet.ts' />
	"use strict";
	var ExpressionBuilder_1 = __webpack_require__(77);
	var Utils_1 = __webpack_require__(17);
	var FacetSearchParameters_1 = __webpack_require__(80);
	var Assert_1 = __webpack_require__(16);
	var FacetUtils_1 = __webpack_require__(81);
	var FacetQueryController = (function () {
	    function FacetQueryController(facet) {
	        this.facet = facet;
	    }
	    /**
	     * Reset the expression for the facet search, used when a new query is triggered
	     */
	    FacetQueryController.prototype.prepareForNewQuery = function () {
	        this.lastGroupByRequestIndex = undefined;
	        this.expressionToUseForFacetSearch = undefined;
	        this.constantExpressionToUseForFacetSearch = undefined;
	    };
	    /**
	     * Compute the filter expression that the facet need to output for the query
	     * @returns {string}
	     */
	    FacetQueryController.prototype.computeOurFilterExpression = function () {
	        var _this = this;
	        var builder = new ExpressionBuilder_1.ExpressionBuilder();
	        var selected = this.facet.values.getSelected();
	        if (selected.length > 0) {
	            if (this.facet.options.useAnd) {
	                _.each(selected, function (value) {
	                    builder.addFieldExpression(_this.facet.options.field, '==', [value.value]);
	                });
	            }
	            else {
	                builder.addFieldExpression(this.facet.options.field, '==', _.map(selected, function (value) { return value.value; }));
	            }
	        }
	        var excluded = this.facet.values.getExcluded();
	        if (excluded.length > 0) {
	            builder.addFieldNotEqualExpression(this.facet.options.field, _.map(excluded, function (value) { return value.value; }));
	        }
	        if (Utils_1.Utils.isNonEmptyString(this.facet.options.additionalFilter)) {
	            builder.add(this.facet.options.additionalFilter);
	        }
	        return builder.build();
	    };
	    /**
	     * Build the group by request for the facet, and insert it in the query builder
	     * @param queryBuilder
	     */
	    FacetQueryController.prototype.putGroupByIntoQueryBuilder = function (queryBuilder) {
	        Assert_1.Assert.exists(queryBuilder);
	        var allowedValues = this.createGroupByAllowedValues();
	        var groupByRequest = this.createBasicGroupByRequest(allowedValues);
	        var queryOverrideObject = this.createGroupByQueryOverride(queryBuilder);
	        if (!Utils_1.Utils.isNullOrUndefined(queryOverrideObject)) {
	            groupByRequest.queryOverride = queryOverrideObject.basic;
	            groupByRequest.advancedQueryOverride = queryOverrideObject.advanced;
	            groupByRequest.constantQueryOverride = queryOverrideObject.constant;
	            this.expressionToUseForFacetSearch = queryOverrideObject.withoutConstant;
	            this.constantExpressionToUseForFacetSearch = queryOverrideObject.constant;
	        }
	        else {
	            var parts = queryBuilder.computeCompleteExpressionParts();
	            this.expressionToUseForFacetSearch = parts.withoutConstant;
	            if (this.expressionToUseForFacetSearch == null) {
	                this.expressionToUseForFacetSearch = '@uri';
	            }
	            this.constantExpressionToUseForFacetSearch = parts.constant;
	        }
	        this.lastGroupByRequestIndex = queryBuilder.groupByRequests.length;
	        this.lastGroupByRequest = groupByRequest;
	        queryBuilder.groupByRequests.push(groupByRequest);
	    };
	    /**
	     * Search inside the facet, using a group by request
	     * @param params
	     * @param oldLength Optional params, used by the search method to call itself recursively to fetch all required values
	     * @returns {Promise|Promise<T>}
	     */
	    FacetQueryController.prototype.search = function (params, oldLength) {
	        var _this = this;
	        if (oldLength === void 0) { oldLength = params.nbResults; }
	        return new Promise(function (resolve, reject) {
	            var onResult = function (fieldValues) {
	                var newLength = fieldValues.length;
	                fieldValues = _this.checkForFacetSearchValuesToRemove(fieldValues, params.valueToSearch);
	                if (FacetUtils_1.FacetUtils.needAnotherFacetSearch(fieldValues.length, newLength, oldLength, 5)) {
	                    // This means that we removed enough values from the returned one that we need to perform a new search with more values requested.
	                    params.nbResults += 5;
	                    return _this.search(params, fieldValues.length);
	                }
	                else {
	                    resolve(fieldValues);
	                }
	            };
	            _this.facet.getEndpoint().search(params.getQuery())
	                .then(function (queryResults) {
	                if (_this.facet.searchInterface.isNewDesign()) {
	                    // params.getQuery() will generate a query for all excluded values + some new values
	                    // there is no clean way to do a group by and remove some values
	                    // so instead we request more values than we need, and crop all the one we don't want
	                    var valuesCropped_1 = [];
	                    if (queryResults.groupByResults && queryResults.groupByResults[0]) {
	                        _.each(queryResults.groupByResults[0].values, function (v) {
	                            if (v.lookupValue) {
	                                if (!_.contains(params.alwaysExclude, v.lookupValue.toLowerCase())) {
	                                    valuesCropped_1.push(v);
	                                }
	                            }
	                            else {
	                                if (!_.contains(params.alwaysExclude, v.value.toLowerCase())) {
	                                    valuesCropped_1.push(v);
	                                }
	                            }
	                        });
	                    }
	                    onResult(_.first(valuesCropped_1, params.nbResults));
	                }
	                else {
	                    resolve(queryResults.groupByResults[0].values);
	                }
	            })
	                .catch(function (error) {
	                reject(error);
	            });
	        });
	    };
	    FacetQueryController.prototype.fetchMore = function (numberOfValuesToFetch) {
	        var params = new FacetSearchParameters_1.FacetSearchParameters(this.facet);
	        params.alwaysInclude = this.facet.options.allowedValues || _.pluck(this.facet.values.getAll(), 'value');
	        params.nbResults = numberOfValuesToFetch;
	        return this.facet.getEndpoint().search(params.getQuery());
	    };
	    FacetQueryController.prototype.searchInFacetToUpdateDelta = function (facetValues) {
	        var params = new FacetSearchParameters_1.FacetSearchParameters(this.facet);
	        var query = params.getQuery();
	        query.aq = this.computeOurFilterExpression();
	        _.each(facetValues, function (facetValue) {
	            facetValue.waitingForDelta = true;
	        });
	        query.groupBy = [this.createBasicGroupByRequest(_.map(facetValues, function (facetValue) { return facetValue.value; }))];
	        query.groupBy[0].completeFacetWithStandardValues = false;
	        return this.facet.getEndpoint().search(query);
	    };
	    FacetQueryController.prototype.createGroupByAllowedValues = function () {
	        // if you want to keep displayed values next time, take all current values as allowed values
	        // otherwise take only the selected value
	        if (this.facet.options.allowedValues != undefined) {
	            return this.facet.options.allowedValues;
	        }
	        else if (this.facet.options.customSort != undefined) {
	            // If there is a custom sort, we still need to add selectedValues to the group by
	            // Filter out duplicates with a lower case comparison on the value
	            var toCompare_1 = _.map(this.facet.options.customSort, function (val) {
	                return val.toLowerCase();
	            });
	            var filtered = _.filter(this.getAllowedValuesFromSelected(), function (value) {
	                return !_.contains(toCompare_1, value.toLowerCase());
	            });
	            return this.facet.options.customSort.concat(filtered);
	        }
	        else {
	            return this.getAllowedValuesFromSelected();
	        }
	    };
	    FacetQueryController.prototype.getAllowedValuesFromSelected = function () {
	        var toMap = [];
	        if (this.facet.options.useAnd || !this.facet.keepDisplayedValuesNextTime) {
	            var selected = this.facet.values.getSelected();
	            if (selected.length == 0) {
	                return undefined;
	            }
	            toMap = this.facet.values.getSelected();
	        }
	        else {
	            toMap = this.facet.values.getAll();
	        }
	        return _.map(toMap, function (facetValue) { return facetValue.value; });
	    };
	    FacetQueryController.prototype.createGroupByQueryOverride = function (queryBuilder) {
	        var additionalFilter = this.facet.options.additionalFilter ? this.facet.options.additionalFilter : '';
	        var queryOverrideObject = undefined;
	        if (this.facet.options.useAnd) {
	            if (Utils_1.Utils.isNonEmptyString(additionalFilter)) {
	                queryOverrideObject = queryBuilder.computeCompleteExpressionParts();
	                if (Utils_1.Utils.isEmptyString(queryOverrideObject.basic)) {
	                    queryOverrideObject.basic = '@uri';
	                }
	            }
	        }
	        else {
	            if (this.facet.values.hasSelectedOrExcludedValues()) {
	                queryOverrideObject = queryBuilder.computeCompleteExpressionPartsExcept(this.computeOurFilterExpression());
	                if (Utils_1.Utils.isEmptyString(queryOverrideObject.basic)) {
	                    queryOverrideObject.basic = '@uri';
	                }
	            }
	            else {
	                if (Utils_1.Utils.isNonEmptyString(additionalFilter)) {
	                    queryOverrideObject = queryBuilder.computeCompleteExpressionParts();
	                    if (Utils_1.Utils.isEmptyString(queryOverrideObject.basic)) {
	                        queryOverrideObject.basic = '@uri';
	                    }
	                }
	            }
	        }
	        if (queryOverrideObject) {
	            if (Utils_1.Utils.isNonEmptyString(additionalFilter)) {
	                queryOverrideObject.constant = queryOverrideObject.constant ? queryOverrideObject.constant + ' ' + additionalFilter : additionalFilter;
	            }
	        }
	        _.each(_.keys(queryOverrideObject), function (k) {
	            if (Utils_1.Utils.isEmptyString(queryOverrideObject[k]) || Utils_1.Utils.isNullOrUndefined(queryOverrideObject[k])) {
	                delete queryOverrideObject[k];
	            }
	        });
	        if (_.keys(queryOverrideObject).length == 0) {
	            queryOverrideObject = undefined;
	        }
	        return queryOverrideObject;
	    };
	    FacetQueryController.prototype.createBasicGroupByRequest = function (allowedValues, addComputedField) {
	        if (addComputedField === void 0) { addComputedField = true; }
	        var nbOfRequestedValues = this.facet.numberOfValues;
	        if (this.facet.options.customSort != null) {
	            var usedValues = _.union(_.map(this.facet.values.getSelected(), function (facetValue) { return facetValue.value; }), _.map(this.facet.values.getExcluded(), function (facetValue) { return facetValue.value; }), this.facet.options.customSort);
	            nbOfRequestedValues = Math.max(nbOfRequestedValues, usedValues.length);
	        }
	        var groupByRequest = {
	            field: this.facet.options.field,
	            maximumNumberOfValues: nbOfRequestedValues + (this.facet.options.enableMoreLess ? 1 : 0),
	            sortCriteria: this.facet.options.sortCriteria,
	            injectionDepth: this.facet.options.injectionDepth,
	            completeFacetWithStandardValues: this.facet.options.allowedValues == undefined ? true : false
	        };
	        if (this.facet.options.lookupField) {
	            groupByRequest.lookupField = this.facet.options.lookupField;
	        }
	        if (allowedValues != null) {
	            groupByRequest.allowedValues = allowedValues;
	        }
	        if (addComputedField && Utils_1.Utils.isNonEmptyString(this.facet.options.computedField)) {
	            groupByRequest.computedFields = [{
	                    field: this.facet.options.computedField,
	                    operation: this.facet.options.computedFieldOperation
	                }];
	        }
	        return groupByRequest;
	    };
	    FacetQueryController.prototype.checkForFacetSearchValuesToRemove = function (fieldValues, valueToCheckAgainst) {
	        var _this = this;
	        var regex = FacetUtils_1.FacetUtils.getRegexToUseForFacetSearch(valueToCheckAgainst, this.facet.options.facetSearchIgnoreAccents);
	        return _.filter(fieldValues, function (fieldValue) {
	            var isAllowed = _.isEmpty(_this.facet.options.allowedValues) ||
	                _.contains(_this.facet.options.allowedValues, fieldValue.value);
	            var value = _this.facet.getValueCaption(fieldValue);
	            return isAllowed && regex.test(value);
	        });
	    };
	    return FacetQueryController;
	}());
	exports.FacetQueryController = FacetQueryController;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {/// <reference path="Facet.ts" />
	"use strict";
	var Utils_1 = __webpack_require__(17);
	var FacetUtils_1 = __webpack_require__(81);
	var QueryBuilder_1 = __webpack_require__(76);
	var Dom_1 = __webpack_require__(56);
	var FacetSearchParameters = (function () {
	    function FacetSearchParameters(facet) {
	        this.facet = facet;
	        this.valueToSearch = '';
	        this.alwaysInclude = [];
	        this.alwaysExclude = [];
	        this.sortCriteria = 'occurrences';
	        this.fetchMore = false;
	        this.nbResults = facet.options.numberOfValuesInFacetSearch;
	        this.ignoreAccents = facet.options.facetSearchIgnoreAccents;
	        this.searchEvenIfEmpty = facet.searchInterface.isNewDesign();
	    }
	    FacetSearchParameters.prototype.setValueToSearch = function (value) {
	        this.valueToSearch = value;
	        if (Utils_1.Utils.isNonEmptyString(value)) {
	            this.alwaysInclude = this.alwaysInclude.concat(FacetUtils_1.FacetUtils.getValuesToUseForSearchInFacet(this.valueToSearch, this.facet));
	        }
	        return this;
	    };
	    FacetSearchParameters.prototype.excludeCurrentlyDisplayedValuesInSearch = function (searchResults) {
	        var _this = this;
	        _.each(this.getCurrentlyShowedValueInSearch(searchResults), function (v) {
	            var expandedValues = FacetUtils_1.FacetUtils.getValuesToUseForSearchInFacet(v, _this.facet);
	            _.each(expandedValues, function (expanded) {
	                _this.alwaysExclude.push(expanded);
	            });
	        });
	        _.each(this.facet.getDisplayedFacetValues(), function (v) {
	            var expandedValues = FacetUtils_1.FacetUtils.getValuesToUseForSearchInFacet(v.value, _this.facet);
	            _.each(expandedValues, function (expanded) {
	                _this.alwaysExclude.push(expanded);
	            });
	        });
	    };
	    FacetSearchParameters.prototype.getGroupByRequest = function () {
	        this.lowerCaseAll();
	        var nbResults = this.nbResults;
	        if (this.facet.searchInterface.isNewDesign()) {
	            nbResults += this.alwaysExclude.length;
	        }
	        var typedByUser = [];
	        if (this.valueToSearch) {
	            typedByUser = ['*' + this.valueToSearch + '*'];
	        }
	        var request = {
	            allowedValues: typedByUser.concat(this.alwaysInclude).concat(this.alwaysExclude),
	            maximumNumberOfValues: nbResults,
	            completeFacetWithStandardValues: this.facet.options.lookupField ? false : true,
	            field: this.facet.options.field,
	            sortCriteria: this.facet.options.sortCriteria || this.sortCriteria,
	            injectionDepth: this.facet.options.injectionDepth,
	        };
	        if (this.facet.options.lookupField) {
	            request.lookupField = this.facet.options.lookupField;
	        }
	        if (this.facet.options.computedField) {
	            request.computedFields = [{
	                    field: this.facet.options.computedField,
	                    operation: this.facet.options.computedFieldOperation
	                }];
	        }
	        return request;
	    };
	    FacetSearchParameters.prototype.getQuery = function () {
	        var lastQuery = _.clone(this.facet.queryController.getLastQuery());
	        if (!lastQuery) {
	            // There should normally always be a last query available
	            // If not, just create en empty one.
	            lastQuery = new QueryBuilder_1.QueryBuilder().build();
	        }
	        lastQuery.q = this.facet.facetQueryController.expressionToUseForFacetSearch;
	        lastQuery.cq = this.facet.facetQueryController.constantExpressionToUseForFacetSearch;
	        lastQuery.aq = null;
	        lastQuery.enableDidYouMean = false;
	        lastQuery.firstResult = 0;
	        lastQuery.numberOfResults = 0;
	        lastQuery.fieldsToInclude = [];
	        lastQuery.groupBy = [this.getGroupByRequest()];
	        return lastQuery;
	    };
	    FacetSearchParameters.prototype.getCurrentlyShowedValueInSearch = function (searchResults) {
	        return _.map(Dom_1.$$(searchResults).findAll('.coveo-facet-value-caption'), function (val) {
	            return Dom_1.$$(val).text();
	        });
	    };
	    FacetSearchParameters.prototype.lowerCaseAll = function () {
	        this.alwaysExclude = _.chain(this.alwaysExclude)
	            .map(function (v) {
	            return v.toLowerCase();
	        })
	            .uniq()
	            .value();
	        this.alwaysInclude = _.chain(this.alwaysInclude)
	            .map(function (v) {
	            return v.toLowerCase();
	        })
	            .uniq()
	            .value();
	    };
	    return FacetSearchParameters;
	}());
	exports.FacetSearchParameters = FacetSearchParameters;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var StringUtils_1 = __webpack_require__(60);
	var QueryUtils_1 = __webpack_require__(22);
	var FileTypes_1 = __webpack_require__(59);
	var DateUtils_1 = __webpack_require__(55);
	var Utils_1 = __webpack_require__(17);
	var Dom_1 = __webpack_require__(56);
	var FacetUtils = (function () {
	    function FacetUtils() {
	    }
	    FacetUtils.getRegexToUseForFacetSearch = function (value, ignoreAccent) {
	        return new RegExp(StringUtils_1.StringUtils.stringToRegex(value, ignoreAccent), 'i');
	    };
	    FacetUtils.getValuesToUseForSearchInFacet = function (original, facet) {
	        var ret = [original];
	        var regex = this.getRegexToUseForFacetSearch(original, facet.options.facetSearchIgnoreAccents);
	        if (facet.options.valueCaption) {
	            _.chain(facet.options.valueCaption)
	                .pairs()
	                .filter(function (pair) {
	                return regex.test(pair[1]);
	            })
	                .each(function (match) {
	                ret.push(match[0]);
	            });
	            if (QueryUtils_1.QueryUtils.isStratusAgnosticField(facet.options.field, '@objecttype') || QueryUtils_1.QueryUtils.isStratusAgnosticField(facet.options.field, '@filetype')) {
	                _.each(FileTypes_1.FileTypes.getFileTypeCaptions(), function (value, key) {
	                    if (!(key in facet.options.valueCaption) && regex.test(value)) {
	                        ret.push(key);
	                    }
	                });
	            }
	        }
	        else if (QueryUtils_1.QueryUtils.isStratusAgnosticField(facet.options.field, '@objecttype') || QueryUtils_1.QueryUtils.isStratusAgnosticField(facet.options.field, '@filetype')) {
	            _.each(_.filter(_.pairs(FileTypes_1.FileTypes.getFileTypeCaptions()), function (pair) {
	                return regex.test(pair[1]);
	            }), function (match) {
	                ret.push(match[0]);
	            });
	        }
	        else if (QueryUtils_1.QueryUtils.isStratusAgnosticField(facet.options.field, '@month')) {
	            _.each(_.range(1, 13), function (month) {
	                if (regex.test(DateUtils_1.DateUtils.monthToString(month - 1))) {
	                    ret.push(('0' + month.toString()).substr(-2));
	                }
	            });
	        }
	        return ret;
	    };
	    FacetUtils.buildFacetSearchPattern = function (values) {
	        values = _.map(values, function (value) {
	            return Utils_1.Utils.escapeRegexCharacter(value);
	        });
	        values[0] = '.*' + values[0] + '.*';
	        return values.join('|');
	    };
	    FacetUtils.needAnotherFacetSearch = function (currentSearchLength, newSearchLength, oldSearchLength, desiredSearchLength) {
	        // Something was removed (currentSearch < newSearch)
	        // && we might want to display more facet search result(currentSearch < desiredSearch)
	        // && the new query returned more stuff than the old one so there's still more results(currentSearchLength > oldLength)
	        return currentSearchLength < newSearchLength && currentSearchLength < desiredSearchLength && currentSearchLength > oldSearchLength;
	    };
	    FacetUtils.addNoStateCssClassToFacetValues = function (facet, container) {
	        // This takes care of adding the correct css class on each facet value checkbox (empty white box) if at least one value is selected in that facet
	        if (facet.values.getSelected().length != 0) {
	            var noStates = Dom_1.$$(container).findAll('li:not(.coveo-selected)');
	            _.each(noStates, function (noState) {
	                Dom_1.$$(noState).addClass('coveo-no-state');
	            });
	        }
	    };
	    FacetUtils.tryToGetTranslatedCaption = function (field, value) {
	        var found;
	        if (QueryUtils_1.QueryUtils.isStratusAgnosticField(field.toLowerCase(), '@filetype')) {
	            found = FileTypes_1.FileTypes.getFileTypeCaptions()[value.toLowerCase()];
	        }
	        else if (QueryUtils_1.QueryUtils.isStratusAgnosticField(field.toLowerCase(), '@month')) {
	            try {
	                var month = parseInt(value);
	                found = DateUtils_1.DateUtils.monthToString(month - 1);
	            }
	            catch (ex) {
	            }
	        }
	        return found != undefined && Utils_1.Utils.isNonEmptyString(found) ? found : value;
	    };
	    FacetUtils.clipCaptionsToAvoidOverflowingTheirContainer = function (facet, forceClip) {
	        // in new design, we don't need this : use flexbox instead (sorry IE user)
	        if (facet.getBindings && facet.getBindings().searchInterface && facet.getBindings().searchInterface.isNewDesign()) {
	            return;
	        }
	        if (!(Coveo.HierarchicalFacet && facet instanceof Coveo.HierarchicalFacet) || forceClip) {
	            facet.logger.trace('Clipping captions');
	            // force facet to show to calculate width
	            Dom_1.$$(facet.element).show();
	            var element = facet.element;
	            var captions = Dom_1.$$(element).findAll('.coveo-facet-value-caption');
	            for (var i = 0; i < captions.length; i++) {
	                if (captions[i].style.width != '') {
	                    captions[i].style.width = '';
	                }
	            }
	            var labels = Dom_1.$$(element).findAll('.coveo-facet-value-label-wrapper');
	            var labelsMaxWidth = [];
	            for (var i = 0; i < labels.length; i++) {
	                var label = labels[i];
	                var caption = Dom_1.$$(label).find('.coveo-facet-value-caption');
	                var labelWidth = label.scrollWidth;
	                var labelVisibleWidth = label.clientWidth;
	                var captionWidth = caption.scrollWidth;
	                var crop = Math.max(0, labelWidth - labelVisibleWidth);
	                if (crop) {
	                    labelsMaxWidth.push({
	                        element: caption,
	                        width: captionWidth,
	                        crop: crop,
	                        label: label
	                    });
	                }
	            }
	            // remove the specific css class
	            element.style.display = '';
	            for (var i = 0; i < labelsMaxWidth.length; i++) {
	                var labelMaxWidth = labelsMaxWidth[i];
	                labelMaxWidth.element.style.width = labelMaxWidth.width - labelMaxWidth.crop + 'px';
	                if (labelMaxWidth.crop > 0) {
	                    labelMaxWidth.label.setAttribute('title', Dom_1.$$(labelMaxWidth.element).text());
	                }
	                else {
	                    labelMaxWidth.label.setAttribute('title', null);
	                }
	            }
	        }
	    };
	    return FacetUtils;
	}());
	exports.FacetUtils = FacetUtils;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../ui/FacetRange/FacetRange.ts" />
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FacetQueryController_1 = __webpack_require__(79);
	var Utils_1 = __webpack_require__(17);
	var FacetRangeQueryController = (function (_super) {
	    __extends(FacetRangeQueryController, _super);
	    function FacetRangeQueryController(facet) {
	        _super.call(this, facet);
	        this.facet = facet;
	    }
	    FacetRangeQueryController.prototype.createBasicGroupByRequest = function (allowedValues, addComputedField) {
	        if (addComputedField === void 0) { addComputedField = true; }
	        var groupByQuery = _super.prototype.createBasicGroupByRequest.call(this, null, addComputedField);
	        groupByQuery.allowedValues = undefined;
	        if (Utils_1.Utils.isNonEmptyArray(this.facet.options.ranges)) {
	            groupByQuery = this.buildGroupByQueryForPredefinedRanges(groupByQuery);
	        }
	        else {
	            groupByQuery = this.buildGroupByQueryForAutomaticRanges(groupByQuery);
	        }
	        return groupByQuery;
	    };
	    FacetRangeQueryController.prototype.createGroupByAllowedValues = function () {
	        return undefined;
	    };
	    FacetRangeQueryController.prototype.buildGroupByQueryForAutomaticRanges = function (groupByQuery) {
	        groupByQuery.generateAutomaticRanges = true;
	        return groupByQuery;
	    };
	    FacetRangeQueryController.prototype.buildGroupByQueryForPredefinedRanges = function (groupByQuery) {
	        groupByQuery.rangeValues = this.facet.options.ranges;
	        groupByQuery.maximumNumberOfValues = this.facet.options.ranges.length;
	        return groupByQuery;
	    };
	    return FacetRangeQueryController;
	}(FacetQueryController_1.FacetQueryController));
	exports.FacetRangeQueryController = FacetRangeQueryController;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {/// <reference path="../ui/FacetSlider/FacetSlider.ts" />
	"use strict";
	var QueryEvents_1 = __webpack_require__(46);
	var ExpressionBuilder_1 = __webpack_require__(77);
	var DateUtils_1 = __webpack_require__(55);
	var FacetSliderQueryController = (function () {
	    function FacetSliderQueryController(facet) {
	        var _this = this;
	        this.facet = facet;
	        this.facet.bind.onRootElement(QueryEvents_1.QueryEvents.querySuccess, function (args) { return _this.handleQuerySuccess(args); });
	    }
	    FacetSliderQueryController.prototype.prepareForNewQuery = function () {
	        this.lastGroupByRequestIndex = undefined;
	    };
	    FacetSliderQueryController.prototype.putGroupByIntoQueryBuilder = function (queryBuilder) {
	        if (this.facet.options.graph) {
	            this.putGroupByForGraphIntoQueryBuilder(queryBuilder);
	        }
	        this.putGroupByForSliderIntoQueryBuilder(queryBuilder);
	    };
	    FacetSliderQueryController.prototype.createBasicGroupByRequest = function (allowedValues, addComputedField) {
	        if (addComputedField === void 0) { addComputedField = true; }
	        var groupByQuery = {
	            field: this.facet.options.field,
	            completeFacetWithStandardValues: true
	        };
	        groupByQuery.allowedValues = undefined;
	        if (this.facet.options.graph) {
	            groupByQuery = this.buildGroupByQueryForSlider(groupByQuery);
	        }
	        else {
	            groupByQuery = this.buildGroupByQueryForAutomaticRanges(groupByQuery);
	        }
	        return groupByQuery;
	    };
	    FacetSliderQueryController.prototype.computeOurFilterExpression = function (boundary) {
	        if (boundary === void 0) { boundary = [this.facet.startOfSlider, this.facet.endOfSlider]; }
	        var builder = new ExpressionBuilder_1.ExpressionBuilder();
	        if (boundary[0] != undefined && boundary[1] != undefined) {
	            if (this.facet.options.excludeOuterBounds) {
	                this.addFilterExpressionWithOuterBoundsExcluded(boundary[0], boundary[1], builder);
	            }
	            else {
	                this.addFilterExpressionWithOuterBoundsIncluded(boundary[0], boundary[1], builder);
	            }
	        }
	        return builder.build();
	    };
	    FacetSliderQueryController.prototype.handleQuerySuccess = function (args) {
	        var _this = this;
	        if (this.facet.options && this.facet.options.graph && this.rangeValuesForGraphToUse == undefined) {
	            this.rangeValuesForGraphToUse = [];
	            var rawValues = args.results.groupByResults[this.graphGroupByQueriesIndex].values;
	            _.each(rawValues, function (rawValue) {
	                var rawSplit = rawValue.value.split('..');
	                _this.rangeValuesForGraphToUse.push({
	                    start: _this.facet.options.dateField ? _this.getISOFormat(rawSplit[0].replace('@', ' ')) : parseInt(rawSplit[0], 10),
	                    end: _this.facet.options.dateField ? _this.getISOFormat(rawSplit[1].replace('@', ' ')) : parseInt(rawSplit[1], 10)
	                });
	            });
	        }
	    };
	    FacetSliderQueryController.prototype.addFilterExpressionWithOuterBoundsIncluded = function (start, end, builder) {
	        if (start != this.facet.options.start || end != this.facet.options.end) {
	            if (this.facet.options.dateField) {
	                start = this.getFilterDateFormat(start);
	                end = this.getFilterDateFormat(end);
	            }
	            builder.addFieldExpression(this.facet.options.field, '==', [start + '..' + end]);
	        }
	    };
	    FacetSliderQueryController.prototype.addFilterExpressionWithOuterBoundsExcluded = function (start, end, builder) {
	        var startCompare = this.facet.options.start;
	        var endCompare = this.facet.options.end;
	        var startCompared = start;
	        var endCompared = end;
	        if (this.facet.options.dateField) {
	            startCompared = this.getFilterDateFormat(start);
	            endCompared = this.getFilterDateFormat(end);
	            startCompare = this.getFilterDateFormat(startCompare);
	            endCompare = this.getFilterDateFormat(endCompare);
	        }
	        else {
	            startCompared += '';
	            endCompared += '';
	            startCompare += '';
	            endCompare += '';
	        }
	        if (startCompared != startCompare && endCompared == endCompare) {
	            builder.addFieldExpression(this.facet.options.field, '>=', [startCompared]);
	        }
	        else if (startCompared == startCompare && endCompared != endCompare) {
	            builder.addFieldExpression(this.facet.options.field, '<=', [endCompared]);
	        }
	        else {
	            this.addFilterExpressionWithOuterBoundsIncluded(start, end, builder);
	        }
	    };
	    FacetSliderQueryController.prototype.buildGroupByQueryForSlider = function (groupByQuery) {
	        if (this.facet.options.start != undefined && this.facet.options.end != undefined) {
	            var start = this.facet.options.start;
	            var end = this.facet.options.end;
	            if (this.facet.options.dateField || this.facet.options.dateField) {
	                start = this.getISOFormat(start);
	                end = this.getISOFormat(end);
	            }
	            groupByQuery.rangeValues = [{
	                    start: start,
	                    end: end,
	                    endInclusive: true,
	                    label: 'Slider'
	                }];
	            return groupByQuery;
	        }
	        else {
	            return this.buildGroupByQueryForAutomaticRanges(groupByQuery);
	        }
	    };
	    FacetSliderQueryController.prototype.buildGroupByQueryForAutomaticRanges = function (groupByQuery) {
	        groupByQuery.generateAutomaticRanges = true;
	        return groupByQuery;
	    };
	    FacetSliderQueryController.prototype.putGroupByForGraphIntoQueryBuilder = function (queryBuilder) {
	        this.graphGroupByQueriesIndex = queryBuilder.groupByRequests.length;
	        var basicGroupByRequestForGraph = this.createBasicGroupByRequest();
	        if (basicGroupByRequestForGraph.rangeValues) {
	            var basicRangeRequest = basicGroupByRequestForGraph.rangeValues[0];
	            basicGroupByRequestForGraph.rangeValues = this.createRangeValuesForGraph(basicRangeRequest);
	        }
	        var filter = this.computeOurFilterExpression(this.facet.getSliderBoundaryForQuery());
	        if (filter != undefined) {
	            var queryOverrideObject = queryBuilder.computeCompleteExpressionPartsExcept(filter);
	            basicGroupByRequestForGraph.queryOverride = queryOverrideObject.basic;
	            basicGroupByRequestForGraph.advancedQueryOverride = queryOverrideObject.advanced;
	            basicGroupByRequestForGraph.constantQueryOverride = queryOverrideObject.constant;
	            if (basicGroupByRequestForGraph.queryOverride == undefined) {
	                basicGroupByRequestForGraph.queryOverride = this.facet.options.queryOverride || '@uri';
	            }
	            else {
	                basicGroupByRequestForGraph.queryOverride += (this.facet.options.queryOverride ? ' ' + this.facet.options.queryOverride : '');
	            }
	        }
	        else if (this.facet.options.queryOverride != null) {
	            var completeExpression = queryBuilder.computeCompleteExpression();
	            basicGroupByRequestForGraph.queryOverride = (completeExpression != null ? completeExpression + ' ' : '') + this.facet.options.queryOverride;
	        }
	        basicGroupByRequestForGraph.sortCriteria = 'nosort';
	        basicGroupByRequestForGraph.maximumNumberOfValues = this.facet.options.graph.steps;
	        queryBuilder.groupByRequests.push(basicGroupByRequestForGraph);
	    };
	    FacetSliderQueryController.prototype.putGroupByForSliderIntoQueryBuilder = function (queryBuilder) {
	        this.lastGroupByRequestIndex = queryBuilder.groupByRequests.length;
	        var basicGroupByRequestForSlider = this.createBasicGroupByRequest();
	        basicGroupByRequestForSlider.maximumNumberOfValues = this.facet.options.graph != null ? this.facet.options.graph.steps || 1 : 1;
	        basicGroupByRequestForSlider.queryOverride = this.facet.options.queryOverride || '@uri';
	        basicGroupByRequestForSlider.sortCriteria = 'nosort';
	        basicGroupByRequestForSlider.generateAutomaticRanges = true;
	        basicGroupByRequestForSlider.rangeValues = undefined;
	        queryBuilder.groupByRequests.push(basicGroupByRequestForSlider);
	    };
	    FacetSliderQueryController.prototype.createRangeValuesForGraph = function (basicRangeRequest) {
	        if (this.facet.options.graph.steps == undefined) {
	            this.facet.options.graph.steps = 10;
	        }
	        if (this.facet.options.dateField && isNaN(this.facet.options.start)) {
	            this.facet.options.start = new Date(this.facet.options.start).getTime();
	        }
	        if (this.facet.options.dateField && isNaN(this.facet.options.end)) {
	            this.facet.options.end = new Date(this.facet.options.end).getTime();
	        }
	        if (this.rangeValuesForGraphToUse != undefined) {
	            return this.usePrebuiltRange(basicRangeRequest);
	        }
	        else {
	            return this.buildRange(basicRangeRequest);
	        }
	    };
	    FacetSliderQueryController.prototype.usePrebuiltRange = function (basicRangeRequest) {
	        return _.map(this.rangeValuesForGraphToUse, function (value) {
	            return {
	                start: value.start,
	                end: value.end,
	                endInclusive: basicRangeRequest.endInclusive,
	                label: basicRangeRequest.label
	            };
	        });
	    };
	    FacetSliderQueryController.prototype.buildRange = function (basicRangeRequest) {
	        var _this = this;
	        var start = this.facet.options.start;
	        var oneStep = (this.facet.options.end - this.facet.options.start) / this.facet.options.graph.steps;
	        return _.map(_.range(0, this.facet.options.graph.steps, 1), function (step) {
	            var newStart = start + (step * oneStep);
	            var newEnd = start + ((step + 1) * oneStep);
	            if (_this.facet.options.dateField) {
	                newStart = _this.getISOFormat(newStart);
	                newEnd = _this.getISOFormat(newEnd);
	            }
	            return {
	                endInclusive: basicRangeRequest.endInclusive,
	                label: basicRangeRequest.label,
	                start: newStart,
	                end: newEnd
	            };
	        });
	    };
	    FacetSliderQueryController.prototype.getISOFormat = function (value) {
	        if (value) {
	            if (!isNaN(value)) {
	                value = Number(value);
	            }
	            var date = new Date(value);
	            if (!DateUtils_1.DateUtils.isValid(date)) {
	                date = new Date(this.getBrowserCompatibleFormat(value));
	                if (!DateUtils_1.DateUtils.isValid(date)) {
	                    // If we get here, we'll probably get an error further down the line when querying the index anyway ...
	                    this.facet.logger.error('Cannot parse this date format.', value, new Date(value));
	                    return undefined;
	                }
	            }
	            return date.toISOString();
	        }
	        else {
	            return undefined;
	        }
	    };
	    FacetSliderQueryController.prototype.getFilterDateFormat = function (rawValue) {
	        if (rawValue) {
	            return this.getISOFormat(rawValue).replace('T', '@').replace('.000Z', '').replace(/-/g, '/');
	        }
	        else {
	            return undefined;
	        }
	    };
	    FacetSliderQueryController.prototype.getBrowserCompatibleFormat = function (value) {
	        return value.replace('@', 'T').replace(/\//g, '-');
	    };
	    return FacetSliderQueryController;
	}());
	exports.FacetSliderQueryController = FacetSliderQueryController;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../ui/HierarchicalFacet/HierarchicalFacet.ts" />
	/// <reference path="./FacetQueryController.ts" />
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FacetQueryController_1 = __webpack_require__(79);
	var HierarchicalFacetQueryController = (function (_super) {
	    __extends(HierarchicalFacetQueryController, _super);
	    function HierarchicalFacetQueryController(facet) {
	        _super.call(this, facet);
	        this.facet = facet;
	    }
	    return HierarchicalFacetQueryController;
	}(FacetQueryController_1.FacetQueryController));
	exports.HierarchicalFacetQueryController = HierarchicalFacetQueryController;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Assert_1 = __webpack_require__(16);
	var Model_1 = __webpack_require__(86);
	var InitializationEvents_1 = __webpack_require__(43);
	var Dom_1 = __webpack_require__(56);
	var HashUtils_1 = __webpack_require__(64);
	var Defer_1 = __webpack_require__(30);
	var RootComponent_1 = __webpack_require__(74);
	/**
	 * This component is instantiated automatically by the framework on the root if the {@link SearchInterface}.<br/>
	 * When the {@link SearchInterface.options.enableHistory} option is set to true, this component is instantiated.<br/>
	 * It's only job is to apply changes in the {@link QueryStateModel} to the hash in the URL, and vice versa.<br/>
	 * This component does *not* hold the state of the interface, it only represent it in the URL.
	 */
	var HistoryController = (function (_super) {
	    __extends(HistoryController, _super);
	    /**
	     * Create a new history controller
	     * @param element
	     * @param windoh For mock / test purpose.
	     * @param model
	     * @param queryController
	     */
	    function HistoryController(element, windoh, model, queryController) {
	        var _this = this;
	        _super.call(this, element, HistoryController.ID);
	        this.windoh = windoh;
	        this.model = model;
	        this.queryController = queryController;
	        this.ignoreNextHashChange = false;
	        this.initialHashChange = false;
	        this.willUpdateHash = false;
	        this.windoh = this.windoh || window;
	        Assert_1.Assert.exists(this.model);
	        Assert_1.Assert.exists(this.queryController);
	        Dom_1.$$(this.element).on(InitializationEvents_1.InitializationEvents.restoreHistoryState, function () {
	            _this.logger.trace('Restore history state. Update model');
	            _this.updateModelFromHash();
	        });
	        Dom_1.$$(this.element).on(this.model.getEventName(Model_1.Model.eventTypes.all), function () {
	            _this.logger.trace('Query model changed. Update hash');
	            _this.updateHashFromModel();
	        });
	        this.hashchange = function () {
	            _this.handleHashChange();
	        };
	        this.windoh.addEventListener('hashchange', this.hashchange);
	        Dom_1.$$(this.element).on(InitializationEvents_1.InitializationEvents.nuke, function () { return _this.handleNuke(); });
	    }
	    /**
	     * Set the given map of key value in the hash of the URL
	     * @param values
	     */
	    HistoryController.prototype.setHashValues = function (values) {
	        this.logger.trace('Update history hash');
	        var hash = '#' + HashUtils_1.HashUtils.encodeValues(values);
	        this.ignoreNextHashChange = this.windoh.location.hash != hash;
	        this.logger.trace('ignoreNextHashChange', this.ignoreNextHashChange);
	        this.logger.trace('initialHashChange', this.initialHashChange);
	        this.logger.trace('from', this.windoh.location.hash, 'to', hash);
	        if (this.initialHashChange) {
	            this.initialHashChange = false;
	            this.windoh.location.replace(hash);
	            this.logger.trace('History hash modified', hash);
	        }
	        else if (this.ignoreNextHashChange) {
	            this.windoh.location.hash = hash;
	            this.logger.trace('History hash created', hash);
	        }
	    };
	    HistoryController.prototype.handleNuke = function () {
	        this.windoh.removeEventListener('hashchange', this.hashchange);
	    };
	    HistoryController.prototype.handleHashChange = function () {
	        this.logger.trace('History hash changed');
	        if (this.ignoreNextHashChange) {
	            this.logger.trace('History hash change ignored');
	            this.ignoreNextHashChange = false;
	            return;
	        }
	        var diff = this.updateModelFromHash();
	        if (_.difference(diff, HistoryController.attributesThatDoNotTriggerQuery).length > 0) {
	            this.queryController.executeQuery();
	        }
	    };
	    HistoryController.prototype.updateHashFromModel = function () {
	        var _this = this;
	        this.logger.trace('Model -> history hash');
	        if (!this.willUpdateHash) {
	            Defer_1.Defer.defer(function () {
	                var attributes = _this.model.getAttributes();
	                _this.setHashValues(attributes);
	                _this.logger.debug('Saving state to hash', attributes);
	                _this.willUpdateHash = false;
	            });
	            this.willUpdateHash = true;
	        }
	    };
	    HistoryController.prototype.updateModelFromHash = function () {
	        var _this = this;
	        this.logger.trace('History hash -> model');
	        var toSet = {};
	        var diff = [];
	        _.each(this.model.attributes, function (value, key, obj) {
	            var valToSet = _this.getHashValue(key);
	            if (valToSet == undefined) {
	                valToSet = _this.model.defaultAttributes[key];
	            }
	            toSet[key] = valToSet;
	            if (_this.model.get(key) != valToSet) {
	                diff.push(key);
	            }
	        });
	        this.initialHashChange = true;
	        this.model.setMultiple(toSet);
	        return diff;
	    };
	    HistoryController.prototype.getHashValue = function (value) {
	        Assert_1.Assert.isNonEmptyString(value);
	        return HashUtils_1.HashUtils.getValue(value, HashUtils_1.HashUtils.getHash(this.windoh));
	    };
	    HistoryController.prototype.debugInfo = function () {
	        return {
	            'state': this.model.getAttributes()
	        };
	    };
	    HistoryController.ID = 'HistoryController';
	    HistoryController.attributesThatDoNotTriggerQuery = ['quickview'];
	    return HistoryController;
	}(RootComponent_1.RootComponent));
	exports.HistoryController = HistoryController;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Dom_1 = __webpack_require__(56);
	var Assert_1 = __webpack_require__(16);
	var Utils_1 = __webpack_require__(17);
	var BaseComponent_1 = __webpack_require__(75);
	exports.MODEL_EVENTS = {
	    PREPROCESS: 'preprocess',
	    CHANGE_ONE: 'change:',
	    CHANGE: 'change',
	    RESET: 'reset',
	    ALL: 'all'
	};
	/**
	 * A model is basically a key -> value store that trigger letious javascript event when one of the value for each of it's key changes.<br/>
	 * This is a class that is meant to be extended : the most important one probably being the {@link QueryStateModel}<br/>
	 * Component set values in this key -> value store, and listen to event triggered to react accordingly.<br/>
	 */
	var Model = (function (_super) {
	    __extends(Model, _super);
	    function Model(element, id, attributes) {
	        _super.call(this, element, id);
	        this.eventNameSpace = id;
	        this.defaultAttributes = Utils_1.Utils.extendDeep(this.defaultAttributes, attributes);
	        this.attributes = attributes;
	        this.logger.debug('Creating model');
	    }
	    Model.prototype.set = function (attribute, value, options) {
	        var toSet = {};
	        toSet[attribute] = value;
	        this.setMultiple(toSet, options);
	    };
	    Model.prototype.getAttributes = function () {
	        var _this = this;
	        var attributes = {};
	        _.each(this.attributes, function (attribute, key) {
	            if (_.isObject(attribute)) {
	                if (!Utils_1.Utils.objectEqual(attribute, _this.defaultAttributes[key])) {
	                    attributes[key] = attribute;
	                }
	            }
	            else if (attribute != _this.defaultAttributes[key]) {
	                attributes[key] = attribute;
	            }
	        });
	        return attributes;
	    };
	    Model.prototype.setMultiple = function (toSet, options) {
	        var _this = this;
	        var anythingChanged = false;
	        this.preprocessEvent(toSet);
	        _.each(toSet, function (value, attribute) {
	            if (!options || !options.customAttribute) {
	                _this.checkIfAttributeExists(attribute);
	            }
	            value = _this.parseToCorrectType(attribute, value);
	            if (!options || options.validateType) {
	                _this.validateType(attribute, value);
	            }
	            if (_this.checkIfAttributeChanged(attribute, value)) {
	                _this.attributes[attribute] = value;
	                anythingChanged = true;
	                if (options == null || !options.silent) {
	                    _this.attributeHasChangedEvent(attribute);
	                }
	            }
	        });
	        if (anythingChanged && (options == null || !options.silent)) {
	            this.attributesHasChangedEvent();
	            this.anyEvent();
	        }
	    };
	    Model.prototype.setNewDefault = function (attribute, value, options) {
	        if (!options || !options.customAttribute) {
	            this.checkIfAttributeExists(attribute);
	        }
	        this.defaultAttributes[attribute] = value;
	    };
	    Model.prototype.setDefault = function (attribute, options) {
	        this.set(attribute, this.defaultAttributes[attribute]);
	    };
	    Model.prototype.get = function (attribute) {
	        if (attribute == undefined) {
	            return this.attributes;
	        }
	        else {
	            return this.attributes[attribute];
	        }
	    };
	    Model.prototype.getDefault = function (attribute) {
	        if (attribute == undefined) {
	            return this.defaultAttributes;
	        }
	        else {
	            return this.defaultAttributes[attribute];
	        }
	    };
	    Model.prototype.reset = function () {
	        this.setMultiple(this.defaultAttributes);
	        this.modelWasResetEvent();
	    };
	    Model.prototype.registerNewAttribute = function (attribute, defaultValue) {
	        this.defaultAttributes[attribute] = defaultValue;
	        this.attributes[attribute] = defaultValue;
	    };
	    Model.prototype.getEventName = function (event) {
	        return this.eventNameSpace + ':' + event;
	    };
	    Model.prototype.attributesHasChangedEvent = function () {
	        Dom_1.$$(this.element).trigger(this.getEventName(Model.eventTypes.change), this.createAttributesChangedArgument());
	    };
	    Model.prototype.attributeHasChangedEvent = function (attr) {
	        Dom_1.$$(this.element).trigger(this.getEventName(Model.eventTypes.changeOne) + attr, this.createAttributeChangedArgument(attr));
	    };
	    Model.prototype.preprocessEvent = function (attributes) {
	        Dom_1.$$(this.element).trigger(this.getEventName(Model.eventTypes.preprocess), attributes);
	    };
	    Model.prototype.modelWasResetEvent = function () {
	        Dom_1.$$(this.element).trigger(this.getEventName(Model.eventTypes.reset), this.createModelChangedArgument());
	    };
	    Model.prototype.anyEvent = function () {
	        Dom_1.$$(this.element).trigger(this.getEventName(Model.eventTypes.all), this.createModelChangedArgument());
	    };
	    Model.prototype.createAttributeChangedArgument = function (attribute) {
	        return { attribute: attribute, value: this.attributes[attribute] };
	    };
	    Model.prototype.createAttributesChangedArgument = function () {
	        return { attributes: this.attributes };
	    };
	    Model.prototype.createModelChangedArgument = function () {
	        return { model: this };
	    };
	    Model.prototype.checkIfAttributeExists = function (attribute) {
	        Assert_1.Assert.check(_.has(this.attributes, attribute));
	    };
	    Model.prototype.validateType = function (attribute, value) {
	        if (!Utils_1.Utils.isNullOrUndefined(this.attributes[attribute]) && !Utils_1.Utils.isUndefined(value)) {
	            if (_.isNumber(this.attributes[attribute])) {
	                Assert_1.Assert.check(_.isNumber(value) && !isNaN(value), 'Non-matching type');
	            }
	            else if (_.isBoolean(this.attributes[attribute])) {
	                Assert_1.Assert.check(_.isBoolean(value) || Utils_1.Utils.parseBooleanIfNotUndefined(value) !== undefined, 'Non-matching type');
	            }
	            else {
	                if (!Utils_1.Utils.isNullOrUndefined(this.defaultAttributes[attribute])) {
	                    Assert_1.Assert.check(typeof value === typeof this.defaultAttributes[attribute], 'Non-matching type');
	                }
	            }
	        }
	    };
	    Model.prototype.parseToCorrectType = function (attribute, value) {
	        if (_.isNumber(this.attributes[attribute])) {
	            return parseInt(value, 10);
	        }
	        else if (_.isBoolean(this.attributes[attribute])) {
	            if (_.isBoolean(value)) {
	                return value;
	            }
	            else {
	                return Utils_1.Utils.parseBooleanIfNotUndefined(value);
	            }
	        }
	        return value;
	    };
	    Model.prototype.checkIfAttributeChanged = function (attribute, newValue) {
	        var oldValue = this.attributes[attribute];
	        if (_.isNumber(oldValue) || _.isString(oldValue) || _.isBoolean(oldValue)) {
	            return oldValue !== newValue;
	        }
	        if (_.isArray(oldValue)) {
	            return !Utils_1.Utils.arrayEqual(oldValue, newValue);
	        }
	        if (_.isObject(oldValue)) {
	            return !Utils_1.Utils.objectEqual(oldValue, newValue);
	        }
	        return true;
	    };
	    Model.prototype.debugInfo = function () {
	        return null;
	    };
	    // changeOne: is when one specific attribute change, change is when any attribute change
	    /**
	     * The event type that can be triggered :<br/>
	     * -- preprocess -> triggered before a value is set on an attribute, to allow to modify it before it's set.<br/>
	     * -- changeOne -> triggered when a single value change.
	     * @type {{preprocess: string, changeOne: string, change: string, reset: string, all: string}}
	     */
	    Model.eventTypes = {
	        preprocess: 'preprocess',
	        changeOne: 'change:',
	        change: 'change',
	        reset: 'reset',
	        all: 'all'
	    };
	    return Model;
	}(BaseComponent_1.BaseComponent));
	exports.Model = Model;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var LocalStorageUtils_1 = __webpack_require__(68);
	var Model_1 = __webpack_require__(86);
	var Logger_1 = __webpack_require__(15);
	var Assert_1 = __webpack_require__(16);
	var InitializationEvents_1 = __webpack_require__(43);
	var RootComponent_1 = __webpack_require__(74);
	var Dom_1 = __webpack_require__(56);
	/**
	 * This component acts like the {@link HistoryController} excepts that is saves the {@link QueryStateModel} in the local storage.<br/>
	 * This will not allow 'back' and 'forward' navigation in the history, like the standard {@link HistoryController} allows. Instead, it load the query state only on page load.<br/>
	 * To enable this component, you should set the {@link SearchInterface.options.useLocalStorageForHistory} as well as the {@link SearchInterface.options.enableHistory} options to true.
	 */
	var LocalStorageHistoryController = (function (_super) {
	    __extends(LocalStorageHistoryController, _super);
	    /**
	     * Create a new LocalStorageHistoryController instance
	     * @param element
	     * @param windoh For mock purpose
	     * @param model
	     * @param queryController
	     */
	    function LocalStorageHistoryController(element, windoh, model, queryController) {
	        var _this = this;
	        _super.call(this, element, LocalStorageHistoryController.ID);
	        this.windoh = windoh;
	        this.model = model;
	        this.queryController = queryController;
	        this.omit = [];
	        if (!windoh['localStorage']) {
	            new Logger_1.Logger(element).info('No local storage available in current browser. LocalStorageHistoryController cannot initialize itself', this);
	        }
	        else {
	            this.storage = new LocalStorageUtils_1.LocalStorageUtils(LocalStorageHistoryController.ID);
	            Assert_1.Assert.exists(this.model);
	            Assert_1.Assert.exists(this.queryController);
	            Dom_1.$$(this.element).on(InitializationEvents_1.InitializationEvents.restoreHistoryState, function () { return _this.updateModelFromLocalStorage(); });
	            Dom_1.$$(this.element).on(this.model.getEventName(Model_1.Model.eventTypes.all), function () { return _this.updateLocalStorageFromModel(); });
	        }
	    }
	    /**
	     * Specifies an array of attributes from the query state model that should not be persisted in the local storage
	     * @param attributes
	     */
	    LocalStorageHistoryController.prototype.withoutThoseAttribute = function (attributes) {
	        this.omit = attributes;
	    };
	    LocalStorageHistoryController.prototype.updateLocalStorageFromModel = function () {
	        var attributes = _.omit(this.model.getAttributes(), this.omit);
	        this.setStorageValues(attributes);
	        this.logger.debug('Saving state to localstorage', attributes);
	    };
	    LocalStorageHistoryController.prototype.updateModelFromLocalStorage = function () {
	        var _this = this;
	        var toSet = {};
	        var loadedFromStorage = this.storage.load();
	        _.each(this.model.attributes, function (value, key, obj) {
	            var valToSet = loadedFromStorage ? loadedFromStorage[key] : undefined;
	            if (valToSet == undefined) {
	                valToSet = _this.model.defaultAttributes[key];
	            }
	            toSet[key] = valToSet;
	        });
	        this.model.setMultiple(toSet);
	    };
	    LocalStorageHistoryController.prototype.setStorageValues = function (values) {
	        this.storage.save(values);
	    };
	    LocalStorageHistoryController.ID = 'LocalStorageHistoryController';
	    return LocalStorageHistoryController;
	}(RootComponent_1.RootComponent));
	exports.LocalStorageHistoryController = LocalStorageHistoryController;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Model_1 = __webpack_require__(86);
	exports.Model = Model_1.Model;
	var QueryStateModel_1 = __webpack_require__(89);
	exports.QueryStateModel = QueryStateModel_1.QueryStateModel;
	var ComponentOptionsModel_1 = __webpack_require__(90);
	exports.ComponentOptionsModel = ComponentOptionsModel_1.ComponentOptionsModel;
	var ComponentStateModel_1 = __webpack_require__(91);
	exports.ComponentStateModel = ComponentStateModel_1.ComponentStateModel;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Model_1 = __webpack_require__(86);
	var Assert_1 = __webpack_require__(16);
	var Utils_1 = __webpack_require__(17);
	exports.QUERY_STATE_ATTRIBUTES = {
	    Q: 'q',
	    FIRST: 'first',
	    T: 't',
	    TG: 'tg',
	    SORT: 'sort',
	    HD: 'hd',
	    HQ: 'hq',
	    QUICKVIEW: 'quickview'
	};
	/**
	 * The QueryStateModel is a key->value store of the state of every component that can affect a query.<br/>
	 * Component set values in this key -> value store, and listen to event triggered to react accordingly.<br/>
	 * For example, when a query is launched, the searchbox will set the 'q' attribute, the pager will set the 'first' attribute, etc.<br/>
	 * At the same time, this class will trigger the associated event when a value is modified.<br/>
	 * eg : The user change the content of the searchbox, and submit a query. This will trigger the following events :<br/>
	 * -- state:change:q (because the value of 'q' changed)</br>
	 * -- state:change (because at least one value changed in the query state)<br/>
	 * Component or external code could hook handler on those events : document.addEventListener('state:change:q', handler);<br/>
	 * See : {@link Model}, as all the relevant method are exposed in the base class.<br/>
	 * Optionally, the state can be persisted to the query string to allow browser history management : See {@link HistoryController}
	 */
	var QueryStateModel = (function (_super) {
	    __extends(QueryStateModel, _super);
	    /**
	     * Create a new QueryState
	     * @param element
	     * @param attributes
	     * @param bindings
	     */
	    function QueryStateModel(element, attributes) {
	        var merged = _.extend({}, QueryStateModel.defaultAttributes, attributes);
	        _super.call(this, element, QueryStateModel.ID, merged);
	    }
	    QueryStateModel.getFacetId = function (id, include) {
	        if (include === void 0) { include = true; }
	        return 'f:' + id + (include ? '' : ':not');
	    };
	    QueryStateModel.getFacetOperator = function (id) {
	        return 'f:' + id + ':operator';
	    };
	    QueryStateModel.getFacetLookupValue = function (id) {
	        return QueryStateModel.getFacetId(id) + ':lookupvalues';
	    };
	    /**
	     * Determine if at least one facet is currently active in the interface (this means that a facet has selected or excluded values)
	     * @returns {boolean}
	     */
	    QueryStateModel.prototype.atLeastOneFacetIsActive = function () {
	        return !_.isUndefined(_.find(this.attributes, function (value, key) {
	            return key.indexOf('f:') == 0 && Utils_1.Utils.isNonEmptyArray(value) && key.indexOf(':range') < 0;
	        }));
	    };
	    QueryStateModel.prototype.set = function (attribute, value, options) {
	        this.validate(attribute, value);
	        _super.prototype.set.call(this, attribute, value, options);
	    };
	    QueryStateModel.prototype.validate = function (attribute, value) {
	        if (attribute == QueryStateModel.attributesEnum.first) {
	            Assert_1.Assert.isLargerOrEqualsThan(0, value);
	        }
	    };
	    QueryStateModel.ID = 'state';
	    QueryStateModel.defaultAttributes = {
	        q: '',
	        first: 0,
	        t: '',
	        hd: '',
	        hq: '',
	        sort: '',
	        tg: '',
	        quickview: ''
	    };
	    QueryStateModel.attributesEnum = {
	        q: 'q',
	        first: 'first',
	        t: 't',
	        sort: 'sort',
	        hd: 'hd',
	        hq: 'hq',
	        tg: 'tg',
	        quickview: 'quickview'
	    };
	    return QueryStateModel;
	}(Model_1.Model));
	exports.QueryStateModel = QueryStateModel;
	function setState(model, args) {
	    Assert_1.Assert.exists(model);
	    if (args.length == 0 || args[0] == undefined) {
	        // No args means return the model
	        return model;
	    }
	    else if (args.length == 1 && Utils_1.Utils.isNonEmptyString(args[0])) {
	        // One string arg means retrieve value from model
	        return model.get(args[0]);
	    }
	    else if (_.isObject(args[0])) {
	        // One dictionary means set multiple values
	        var toSet = args[0];
	        var options = _.extend({ customAttribute: true }, args[1]);
	        return model.setMultiple(toSet, options);
	    }
	    else if (args.length > 1) {
	        // Otherwise we're setting a value
	        var name_1 = args[0];
	        var value = args[1];
	        var options = _.extend({ customAttribute: true }, args[2]);
	        Assert_1.Assert.isNonEmptyString(name_1);
	        return model.set(name_1, value, options);
	    }
	}
	exports.setState = setState;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Model_1 = __webpack_require__(86);
	var ComponentOptionsModel = (function (_super) {
	    __extends(ComponentOptionsModel, _super);
	    function ComponentOptionsModel(element, attributes) {
	        var merged = _.extend({}, ComponentOptionsModel.defaultAttributes, attributes);
	        _super.call(this, element, ComponentOptionsModel.ID, merged);
	    }
	    ComponentOptionsModel.ID = 'ComponentOptions';
	    ComponentOptionsModel.defaultAttributes = {
	        resultLink: undefined,
	        searchHub: undefined
	    };
	    ComponentOptionsModel.attributesEnum = {
	        resultLink: 'resultLink',
	        searchHub: 'searchHub'
	    };
	    return ComponentOptionsModel;
	}(Model_1.Model));
	exports.ComponentOptionsModel = ComponentOptionsModel;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Model_1 = __webpack_require__(86);
	var ComponentStateModel = (function (_super) {
	    __extends(ComponentStateModel, _super);
	    function ComponentStateModel(element) {
	        _super.call(this, element, ComponentStateModel.ID, {});
	    }
	    ComponentStateModel.prototype.registerComponent = function (componentId, component) {
	        var currentAttribute = this.attributes[componentId];
	        if (currentAttribute == undefined) {
	            this.attributes[componentId] = [component];
	        }
	        else {
	            this.attributes[componentId].push(component);
	        }
	    };
	    ComponentStateModel.ID = 'ComponentState';
	    return ComponentStateModel;
	}(Model_1.Model));
	exports.ComponentStateModel = ComponentStateModel;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(93));
	var ComponentOptions_1 = __webpack_require__(97);
	exports.ComponentOptions = ComponentOptions_1.ComponentOptions;
	exports.ComponentOptionsType = ComponentOptions_1.ComponentOptionsType;
	var Component_1 = __webpack_require__(95);
	exports.Component = Component_1.Component;
	var BaseComponent_1 = __webpack_require__(75);
	exports.BaseComponent = BaseComponent_1.BaseComponent;
	var RootComponent_1 = __webpack_require__(74);
	exports.RootComponent = RootComponent_1.RootComponent;
	var QueryBuilder_1 = __webpack_require__(76);
	exports.QueryBuilder = QueryBuilder_1.QueryBuilder;
	var ExpressionBuilder_1 = __webpack_require__(77);
	exports.ExpressionBuilder = ExpressionBuilder_1.ExpressionBuilder;
	// Export Initialization under both name, for legacy reason and old code in the wild that
	// reference the old CoveoJQuery module
	var Initialization_1 = __webpack_require__(94);
	exports.Initialization = Initialization_1.Initialization;
	var Initialization_2 = __webpack_require__(94);
	exports.CoveoJQuery = Initialization_2.Initialization;
	var CoveoJQuery_1 = __webpack_require__(119);
	exports.initCoveoJQuery = CoveoJQuery_1.initCoveoJQuery;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Initialization_1 = __webpack_require__(94);
	var Assert_1 = __webpack_require__(16);
	var QueryController_1 = __webpack_require__(73);
	var QueryStateModel_1 = __webpack_require__(89);
	var Analytics_1 = __webpack_require__(112);
	var InitializationEvents_1 = __webpack_require__(43);
	var Dom_1 = __webpack_require__(56);
	var Component_1 = __webpack_require__(95);
	/**
	 * Initialize the framework with a basic search interface. Calls {@link Initialization.initSearchInterface}.<br/>
	 * If using the jQuery extension, this is called using <code>$('#root').coveo('init');</code>.
	 * @param element The root of the interface to initialize.
	 * @param options JSON options for the framework (e.g.: <code>{Searchbox : {enableSearchAsYouType : true}}</code>).
	 */
	function init(element, options) {
	    if (options === void 0) { options = {}; }
	    Initialization_1.Initialization.initializeFramework(element, options, function () {
	        Initialization_1.Initialization.initSearchInterface(element, options);
	    });
	}
	exports.init = init;
	Initialization_1.Initialization.registerNamedMethod('init', function (element, options) {
	    if (options === void 0) { options = {}; }
	    init(element, options);
	});
	/**
	 * Initialize the framework with a standalone search box. Calls {@link Initialize.initStandaloneSearchInterface}.<br/>
	 * If using the jQuery extension, this is called using <code>$('#root').coveo('initSearchbox');</code>.
	 * @param element The root of the interface to initialize.
	 * @param searchPageUri The search page on which to redirect when there is a query.
	 * @param options JSON options for the framework (e.g.: <code>{Searchbox : {enableSearchAsYouType : true}}</code>).
	 */
	function initSearchbox(element, searchPageUri, options) {
	    if (options === void 0) { options = {}; }
	    Assert_1.Assert.isNonEmptyString(searchPageUri);
	    var searchInterfaceOptions = {};
	    searchInterfaceOptions.searchPageUri = searchPageUri;
	    searchInterfaceOptions.autoTriggerQuery = false;
	    searchInterfaceOptions.hideUntilFirstQuery = false;
	    searchInterfaceOptions.enableHistory = false;
	    options = _.extend({}, options, { StandaloneSearchInterface: searchInterfaceOptions });
	    Initialization_1.Initialization.initializeFramework(element, options, function () {
	        Initialization_1.Initialization.initStandaloneSearchInterface(element, options);
	    });
	}
	exports.initSearchbox = initSearchbox;
	Initialization_1.Initialization.registerNamedMethod('initSearchbox', function (element, searchPageUri, options) {
	    if (options === void 0) { options = {}; }
	    initSearchbox(element, searchPageUri, options);
	});
	/**
	 * Initialize the framework with a recommendation interface. Calls {@link Initialization.initRecommendationInterface}.<br/>
	 * If using the jQuery extension, this is called using <code>$('#root').coveo('initRecommendation');</code>.
	 * @param element The root of the interface to initialize.
	 * @param mainSearchInterface The search interface to link with the recommendation interface (see {@link Recommendation}).
	 * @param userContext The user context to pass with the query generated in the recommendation interface (see {@link Recommendation}).
	 * @param options JSON options for the framework (e.g.: <code>{Searchbox : {enableSearchAsYouType: true}}</code>).
	 */
	function initRecommendation(element, mainSearchInterface, userContext, options) {
	    if (options === void 0) { options = {}; }
	    var recommendationOptions = {};
	    recommendationOptions.mainSearchInterface = mainSearchInterface;
	    recommendationOptions.userContext = JSON.stringify(userContext);
	    recommendationOptions.enableHistory = false;
	    options = _.extend({}, options, { Recommendation: recommendationOptions });
	    Initialization_1.Initialization.initializeFramework(element, options, function () {
	        Initialization_1.Initialization.initRecommendationInterface(element, options);
	    });
	}
	exports.initRecommendation = initRecommendation;
	Initialization_1.Initialization.registerNamedMethod('initRecommendation', function (element, mainSearchInterface, userContext, options) {
	    if (userContext === void 0) { userContext = {}; }
	    if (options === void 0) { options = {}; }
	    initRecommendation(element, mainSearchInterface, userContext, options);
	});
	/**
	 * Execute a standard query. Active component in the interface will react to events/ push data in the query / handle the query success or failure as needed.<br/>
	 * It triggers a standard query flow for which the standard component will perform their expected behavior.<br/>
	 * If you wish to only perform a query on the index to retrieve results (without the component reacting), look into {@link SearchInterface} instead.<br/>
	 * Calling this method is the same as calling {@link QueryController.executeQuery}.
	 * @param element The root of the interface to initialize.
	 */
	function executeQuery(element) {
	    Assert_1.Assert.exists(element);
	    var queryController = Component_1.Component.resolveBinding(element, QueryController_1.QueryController);
	    Assert_1.Assert.exists(queryController);
	    return queryController.executeQuery();
	}
	exports.executeQuery = executeQuery;
	Initialization_1.Initialization.registerNamedMethod('executeQuery', function (element) {
	    return executeQuery(element);
	});
	/**
	 * Perform operation on the state ({@link QueryStateModel} of the interface.<br/>
	 * Get the complete {@link QueryStateModel} object: <code>Coveo.state(element)</code><br/>.
	 * Get an attribute from the {@link QueryStateModel}: <code>Coveo.state(element, 'q')</code> Can be any attribute.<br/>
	 * Set an attribute on the {@link QueryStateModel}: <code>Coveo.state(element, 'q', 'foobar')</code>. Can be any attribute.<br/>
	 * Set multiple attribute on the {@link QueryStateModel}: <code>Coveo.state(element, {'q' : 'foobar' , sort : 'relevancy'})</code>. Can be any attribute.<br/>
	 * If using the jQuery extension, this is called using <code>$('#root').coveo('state');</code>.
	 * @param element The root of the interface for which to access the {@link QueryStateModel}.
	 * @param args
	 * @returns {any}
	 */
	function state(element) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    Assert_1.Assert.exists(element);
	    var model = Component_1.Component.resolveBinding(element, QueryStateModel_1.QueryStateModel);
	    return QueryStateModel_1.setState(model, args);
	}
	exports.state = state;
	Initialization_1.Initialization.registerNamedMethod('state', function (element) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    if (args.length != 0) {
	        return state.apply(undefined, [element].concat(args));
	    }
	    else {
	        return state.apply(undefined, [element]);
	    }
	});
	/**
	 * Get the component bound on the given `HTMLElement`.
	 * @param element The `HTMLElement` for which to get the component instance.
	 * @param componentClass If multiple components are bound to a single `HTMLElement`, you need to specify which components you wish to get.
	 * @param noThrow By default, the GET method will throw if there is no component bound, or if there are multiple component and no `componentClass` is specified. This deletes the error if set to true.
	 * @returns {Component}
	 */
	function get(element, componentClass, noThrow) {
	    Assert_1.Assert.exists(element);
	    return Component_1.Component.get(element, componentClass, noThrow);
	}
	exports.get = get;
	Initialization_1.Initialization.registerNamedMethod('get', function (element, componentClass, noThrow) {
	    return get(element, componentClass, noThrow);
	});
	function result(element, noThrow) {
	    Assert_1.Assert.exists(element);
	    return Component_1.Component.getResult(element, noThrow);
	}
	exports.result = result;
	Initialization_1.Initialization.registerNamedMethod('result', function (element, noThrow) {
	    return result(element, noThrow);
	});
	function getCoveoAnalyticsClient(element) {
	    var analytics = getCoveoAnalytics(element);
	    if (analytics) {
	        return analytics.client;
	    }
	    else {
	        return undefined;
	    }
	}
	function getCoveoAnalytics(element) {
	    var analyticsElement = Dom_1.$$(element).find('.' + Component_1.Component.computeCssClassName(Analytics_1.Analytics));
	    if (analyticsElement) {
	        return Component_1.Component.get(analyticsElement);
	    }
	    else {
	        return undefined;
	    }
	}
	/**
	 * Log a custom event on the Coveo Usage Analytics service.
	 * @param element The root of the interface for which to log analytics events.
	 * @param customEventCause The cause of the event.
	 * @param metadata The metadata associated with the event (JSON key value).
	 */
	function logCustomEvent(element, customEventCause, metadata) {
	    var client = getCoveoAnalyticsClient(element);
	    if (client) {
	        client.logCustomEvent(customEventCause, metadata, element);
	    }
	}
	exports.logCustomEvent = logCustomEvent;
	Initialization_1.Initialization.registerNamedMethod('logCustomEvent', function (element, customEventCause, metadata) {
	    logCustomEvent(element, customEventCause, metadata);
	});
	/**
	 * Log a `SearchEvent` on the Coveo Usage Analytics service.
	 * @param element The root of the interface for which to log analytics events.
	 * @param searchEventCause The cause of the event.
	 * @param metadata The metadata associated with the event (JSON key value).
	 */
	function logSearchEvent(element, searchEventCause, metadata) {
	    var client = getCoveoAnalyticsClient(element);
	    if (client) {
	        client.logSearchEvent(searchEventCause, metadata);
	    }
	}
	exports.logSearchEvent = logSearchEvent;
	Initialization_1.Initialization.registerNamedMethod('logSearchEvent', function (element, searchEventCause, metadata) {
	    logSearchEvent(element, searchEventCause, metadata);
	});
	/**
	 * Log a `SearchAsYouTypeEvent` on the Coveo Usage Analytics service.<br/>
	 * It is a bit different from a standard search event, as it will wait 5 seconds before sending the final `SearchAsYouType` event.
	 * @param element The root of the interface for which to log analytics events.
	 * @param searchAsYouTypeEventCause The cause of the event.
	 * @param metadata The metadata associated with the event (JSON key value).
	 */
	function logSearchAsYouTypeEvent(element, searchAsYouTypeEventCause, metadata) {
	    var client = getCoveoAnalyticsClient(element);
	    if (client) {
	        client.logSearchAsYouType(searchAsYouTypeEventCause, metadata);
	    }
	}
	exports.logSearchAsYouTypeEvent = logSearchAsYouTypeEvent;
	Initialization_1.Initialization.registerNamedMethod('logSearchAsYouTypeEvent', function (element, searchAsYouTypeEventCause, metadata) {
	    logSearchAsYouTypeEvent(element, searchAsYouTypeEventCause, metadata);
	});
	/**
	 * Log a `ClickEvent` on the Coveo Usage Analytics service.
	 * @param element The root of the interface for which to log analytics events.
	 * @param clickEventCause The cause of the event.
	 * @param metadata The metadata associated with the event (JSON key value).
	 * @param result The result that was clicked.
	 */
	function logClickEvent(element, clickEventCause, metadata, result) {
	    var client = getCoveoAnalyticsClient(element);
	    if (client) {
	        client.logClickEvent(clickEventCause, metadata, result, element);
	    }
	}
	exports.logClickEvent = logClickEvent;
	Initialization_1.Initialization.registerNamedMethod('logClickEvent', function (element, clickEventCause, metadata, result) {
	    logClickEvent(element, clickEventCause, metadata, result);
	});
	/**
	 * Pass options to the framework, before it is initialized ({@link init}).<br/>
	 * All the options passed with this calls will be merged together on initialization.
	 * @param element The root of the interface for which you wish to set options.
	 * @param optionsToSet JSON options for the framework (e.g.: <code>{Searchbox : {enableSearchAsYouType: true}}</code>).
	 */
	function options(element, optionsToSet) {
	    if (optionsToSet === void 0) { optionsToSet = {}; }
	    Initialization_1.Initialization.registerDefaultOptions(element, optionsToSet);
	}
	exports.options = options;
	Initialization_1.Initialization.registerNamedMethod('options', function (element, optionsToSet) {
	    if (optionsToSet === void 0) { optionsToSet = {}; }
	    options(element, optionsToSet);
	});
	/**
	 * Patch the given `methodName` on an instance of a component bound to an `HTMLElement` with a new handler.
	 * @param element
	 * @param methodName
	 * @param handler
	 */
	function patch(element, methodName, handler) {
	    Initialization_1.Initialization.monkeyPatchComponentMethod(methodName, element, handler);
	}
	exports.patch = patch;
	Initialization_1.Initialization.registerNamedMethod('patch', function (element, methodName, handler) {
	    patch(element, methodName, handler);
	});
	function initBox(element) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    var type, options = {}, injectMarkup;
	    // This means : initBox, no type (no injection) and no options
	    if (args.length == 0) {
	        type = 'Standard';
	        injectMarkup = false;
	    }
	    else if (args.length == 1) {
	        // This mean a type (with injection) and no options
	        if (typeof args[0] == 'string') {
	            type = args[0];
	            injectMarkup = true;
	        }
	        else if (typeof args[0] == 'object') {
	            type = 'Standard';
	            injectMarkup = false;
	            options = args[0];
	        }
	        else {
	            Assert_1.Assert.fail('Invalid parameters to init a box');
	        }
	    }
	    else if (args.length == 2) {
	        type = args[0];
	        options = args[1];
	        injectMarkup = true;
	    }
	    var merged = {};
	    merged[type || 'Container'] = _.extend({}, options.SearchInterface, options[type]);
	    options = _.extend({}, options, merged);
	    Initialization_1.Initialization.initializeFramework(element, options, function () {
	        Initialization_1.Initialization.initBoxInterface(element, options, type, injectMarkup);
	    });
	}
	exports.initBox = initBox;
	Initialization_1.Initialization.registerNamedMethod('initBox', function (element) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    initBox(element, args);
	});
	function nuke(element) {
	    Dom_1.$$(element).trigger(InitializationEvents_1.InitializationEvents.nuke);
	}
	exports.nuke = nuke;
	Initialization_1.Initialization.registerNamedMethod('nuke', function (element) {
	    nuke(element);
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Logger_1 = __webpack_require__(15);
	var Component_1 = __webpack_require__(95);
	var Utils_1 = __webpack_require__(17);
	var Assert_1 = __webpack_require__(16);
	var Dom_1 = __webpack_require__(56);
	var InitializationEvents_1 = __webpack_require__(43);
	var SearchInterface_1 = __webpack_require__(96);
	var QueryController_1 = __webpack_require__(73);
	var HashUtils_1 = __webpack_require__(64);
	var QueryStateModel_1 = __webpack_require__(89);
	var ComponentStateModel_1 = __webpack_require__(91);
	var ComponentOptionsModel_1 = __webpack_require__(90);
	var AnalyticsActionListMeta_1 = __webpack_require__(109);
	var Recommendation_1 = __webpack_require__(110);
	/**
	 * The main purpose of this class is to initialize the framework (a.k.a the code executed when calling `Coveo.init`).<br/>
	 * It's also in charge or registering the available components, as well as the method that we expost to the global Coveo scope.<br/>
	 * For example, the `Coveo.executeQuery` function will be registed in this class by the {@link QueryController}.
	 */
	var Initialization = (function () {
	    function Initialization() {
	    }
	    /**
	     * Register a new set of options for a given element.<br/>
	     * When the element is eventually initialized as a component, those options will be used / merged to create the final option set to use for this component.<br/>
	     * Note that this function should not normally be called directly, but instead using the global `Coveo.options` function
	     * @param element
	     * @param options
	     */
	    Initialization.registerDefaultOptions = function (element, options) {
	        var existing = element['CoveoDefaultOptions'] || {};
	        var updated = Utils_1.Utils.extendDeep(existing, options);
	        element['CoveoDefaultOptions'] = updated;
	    };
	    Initialization.resolveDefaultOptions = function (element, options) {
	        var optionsForThisElement = element['CoveoDefaultOptions'];
	        var optionsSoFar;
	        if (Utils_1.Utils.exists(optionsForThisElement)) {
	            optionsSoFar = Utils_1.Utils.extendDeep(optionsForThisElement, options);
	        }
	        else {
	            optionsSoFar = options;
	        }
	        if (element.parentElement) {
	            return Initialization.resolveDefaultOptions(element.parentElement, optionsSoFar);
	        }
	        else {
	            return optionsSoFar;
	        }
	    };
	    /**
	     * Register a new Component to be recognized by the framework.<br/>
	     * This essentially mean that when we call `Coveo.init`, the Initialization class will scan the DOM for known component (which have registed themselves with this call) and create a new component on each element.
	     * @param componentClass
	     */
	    Initialization.registerAutoCreateComponent = function (componentClass) {
	        Assert_1.Assert.exists(componentClass);
	        Assert_1.Assert.exists(componentClass.ID);
	        Assert_1.Assert.doesNotExists(Initialization.autoCreateComponents[componentClass.ID]);
	        Assert_1.Assert.doesNotExists(Initialization.namedMethods[componentClass.ID]);
	        Initialization.autoCreateComponents[componentClass.ID] = componentClass;
	    };
	    /**
	     * Check if a component is already registed, using it's ID (e.g. : 'Facet').
	     * @param componentClassId
	     * @returns {boolean}
	     */
	    Initialization.isComponentClassIdRegistered = function (componentClassId) {
	        return Utils_1.Utils.exists(Initialization.autoCreateComponents[componentClassId]);
	    };
	    /**
	     * Return the list of all known components (the list of ID for each component).
	     * @returns {string[]}
	     */
	    Initialization.getListOfRegisteredComponents = function () {
	        return _.keys(Initialization.autoCreateComponents);
	    };
	    /**
	     * Return the component class definition, using it's ID (e.g. : 'CoveoFacet').
	     * @param name
	     * @returns {IComponentDefinition}
	     */
	    Initialization.getRegisteredComponent = function (name) {
	        return Initialization.autoCreateComponents[name];
	    };
	    /**
	     * Initialize the framework. Note that this function should not normally be called directly, but instead using a globally registered function (e.g.: Coveo.init), or {@link Initialization.initSearchInterface} or {@link Initialization.initStandaloneSearchInterface} <br/>
	     * (e.g. : `Coveo.init` or `Coveo.initSearchbox`).
	     * @param element The element on which to initialize the interface.
	     * @param options The options for all components (eg: {Searchbox : {enableSearchAsYouType : true}}).
	     * @param initSearchInterfaceFunction The function to execute to create the {@link SearchInterface} component. Different init call will create different {@link SearchInterface}.
	     */
	    Initialization.initializeFramework = function (element, options, initSearchInterfaceFunction) {
	        Assert_1.Assert.exists(element);
	        var alreadyInitialized = Component_1.Component.get(element, QueryController_1.QueryController, true);
	        if (alreadyInitialized) {
	            this.logger.error('This DOM element has already been initialized as a search interface, skipping initialization', element);
	            return;
	        }
	        options = Initialization.resolveDefaultOptions(element, options);
	        Initialization.performInitFunctionsOption(options, InitializationEvents_1.InitializationEvents.beforeInitialization);
	        Dom_1.$$(element).trigger(InitializationEvents_1.InitializationEvents.beforeInitialization);
	        initSearchInterfaceFunction(element, options);
	        Initialization.initExternalComponents(element, options);
	        Initialization.performInitFunctionsOption(options, InitializationEvents_1.InitializationEvents.afterComponentsInitialization);
	        Dom_1.$$(element).trigger(InitializationEvents_1.InitializationEvents.afterComponentsInitialization);
	        Dom_1.$$(element).trigger(InitializationEvents_1.InitializationEvents.restoreHistoryState);
	        Initialization.performInitFunctionsOption(options, InitializationEvents_1.InitializationEvents.afterInitialization);
	        Dom_1.$$(element).trigger(InitializationEvents_1.InitializationEvents.afterInitialization);
	        var searchInterface = Component_1.Component.get(element, SearchInterface_1.SearchInterface);
	        // Elements that have the coveo-hide-until-loaded class are hidden by default.
	        // Now that we're loaded (and before the first query returns), we can remove
	        // the class. Also, we add a class that gives the opportunity for an animation
	        // to apply at startup, such as a fade-in that comes in by default.
	        var elemsHidden = Dom_1.$$(element).findAll('.coveo-hide-until-loaded');
	        _.each(elemsHidden, function (e) {
	            Dom_1.$$(e).removeClass('coveo-hide-until-loaded');
	            Dom_1.$$(e).addClass('coveo-show-after-loaded');
	        });
	        if (searchInterface.options.autoTriggerQuery) {
	            Initialization.logFirstQueryCause(searchInterface);
	            Component_1.Component.get(element, QueryController_1.QueryController).executeQuery({
	                logInActionsHistory: searchInterface instanceof Recommendation_1.Recommendation ? false : true,
	                isFirstQuery: true
	            });
	        }
	    };
	    /**
	     * Create a new standard search interface. This is the function executed when calling `Coveo.init`.
	     * @param element
	     * @param options
	     */
	    Initialization.initSearchInterface = function (element, options) {
	        if (options === void 0) { options = {}; }
	        options = Initialization.resolveDefaultOptions(element, options);
	        var searchInterface = new SearchInterface_1.SearchInterface(element, options.SearchInterface, options.Analytics);
	        searchInterface.options.originalOptionsObject = options;
	        var initParameters = { options: options, bindings: searchInterface.getBindings() };
	        Initialization.automaticallyCreateComponentsInside(element, initParameters);
	    };
	    /**
	     * Create a new standalone search interface (standalone search box). This is the function executed when calling `Coveo.initSearchbox`.
	     * @param element
	     * @param options
	     */
	    Initialization.initStandaloneSearchInterface = function (element, options) {
	        if (options === void 0) { options = {}; }
	        options = Initialization.resolveDefaultOptions(element, options);
	        // Set trigger query on clear to false for standalone search interface automatically
	        // Take care of not overriding any options that could have been set by external code.
	        if (!options.Querybox) {
	            options.Querybox = {};
	        }
	        if (!options.Omnibox) {
	            options.Omnibox = {};
	        }
	        if (!options.Searchbox) {
	            options.Searchbox = {};
	        }
	        if (!options.Querybox.triggerQueryOnClear || !options.Omnibox.triggerQueryOnClear || !options.Searchbox.triggerOnQueryClear) {
	            options.Querybox.triggerQueryOnClear = false;
	            options.Omnibox.triggerQueryOnClear = false;
	            options.Searchbox.triggerQueryOnClear = false;
	        }
	        var searchInterface = new SearchInterface_1.StandaloneSearchInterface(element, options.StandaloneSearchInterface, options.Analytics);
	        searchInterface.options.originalOptionsObject = options;
	        var initParameters = { options: options, bindings: searchInterface.getBindings() };
	        Initialization.automaticallyCreateComponentsInside(element, initParameters);
	    };
	    /**
	     * Create a new recommendation search interface. This is the function executed when calling `Coveo.initRecommendation`.
	     * @param element
	     * @param options
	     */
	    Initialization.initRecommendationInterface = function (element, options) {
	        if (options === void 0) { options = {}; }
	        options = Initialization.resolveDefaultOptions(element, options);
	        // Since a recommendation interface inherits from a search interface, we need to merge those if passed on init
	        var optionsForRecommendation = _.extend({}, options.SearchInterface, options.Recommendation);
	        var recommendation = new window['Coveo']['Recommendation'](element, optionsForRecommendation, options.Analytics);
	        recommendation.options.originalOptionsObject = options;
	        var initParameters = { options: options, bindings: recommendation.getBindings() };
	        Initialization.automaticallyCreateComponentsInside(element, initParameters);
	    };
	    /**
	     * Scan the element and all its children for known components. Initialize every known component found.
	     * @param element The element for which to scan it's children.
	     * @param initParameters Needed parameters to initialize all the children components.
	     * @param ignore An optional list of component ID to ignore and skip when scanning for known components.
	     */
	    Initialization.automaticallyCreateComponentsInside = function (element, initParameters, ignore) {
	        Assert_1.Assert.exists(element);
	        var codeToExecute = [];
	        for (var componentClassId in Initialization.autoCreateComponents) {
	            if (!_.contains(ignore, componentClassId)) {
	                var componentClass = Initialization.autoCreateComponents[componentClassId];
	                var classname = Component_1.Component.computeCssClassName(componentClass);
	                var elements = Dom_1.$$(element).findAll('.' + classname);
	                if (Dom_1.$$(element).hasClass(classname)) {
	                    elements.push(element);
	                }
	                if (elements.length != 0) {
	                    // Queue the code that will scan the now resolved selector to after we've
	                    // finished evaluating all selectors. This ensures that if a component
	                    // constructor adds child components under his tags, those won't get auto-
	                    // initialize by this invocation of this method. Components inserting child
	                    // components are responsible of invoking this method again if they want
	                    // child components to be auto-initialized.
	                    //
	                    // Explanation: If we don't do that, child components for which selector have
	                    // already been evaluated won't be initialized, whereas those that are next
	                    // in the list will be.
	                    codeToExecute.push(Initialization.createFunctionThatInitializesComponentOnElements(elements, componentClassId, componentClass, initParameters));
	                }
	            }
	        }
	        // Now that all selectors are executed, let's really initialize the components.
	        _.each(codeToExecute, function (code) { return code(); });
	    };
	    /**
	     * Create a new component on the given element.
	     * @param componentClassId The ID of the component to initialize (e.g. : 'CoveoFacet').
	     * @param element The HTMLElement on which to initialize.
	     * @param initParameters Needed parameters to initialize the component.
	     * @returns {Component}
	     */
	    Initialization.createComponentOfThisClassOnElement = function (componentClassId, element, initParameters) {
	        Assert_1.Assert.isNonEmptyString(componentClassId);
	        Assert_1.Assert.exists(element);
	        var componentClass = Initialization.autoCreateComponents[componentClassId];
	        Assert_1.Assert.exists(componentClass);
	        var bindings = {};
	        var options = {};
	        var result = undefined;
	        if (initParameters != undefined) {
	            _.each(initParameters.bindings, function (value, key) {
	                bindings[key] = value;
	            });
	            options = initParameters.options;
	            result = initParameters.result;
	        }
	        Initialization.logger.trace('Creating component of class ' + componentClassId, element, options);
	        return new componentClass(element, options, bindings, result);
	    };
	    /**
	     * Register a new globally available method in the Coveo namespace (e.g.: `Coveo.init`).
	     * @param methodName The method name to register.
	     * @param handler The function to execute when the method is called.
	     */
	    Initialization.registerNamedMethod = function (methodName, handler) {
	        Assert_1.Assert.isNonEmptyString(methodName);
	        Assert_1.Assert.doesNotExists(Initialization.autoCreateComponents[methodName]);
	        Assert_1.Assert.doesNotExists(Initialization.namedMethods[methodName]);
	        Assert_1.Assert.exists(handler);
	        Initialization.namedMethods[methodName] = handler;
	    };
	    /**
	     * Check if the method is already registed.
	     * @param methodName
	     * @returns {boolean}
	     */
	    Initialization.isNamedMethodRegistered = function (methodName) {
	        return Utils_1.Utils.exists(Initialization.namedMethods[methodName]);
	    };
	    /**
	     * 'Monkey patch' (replace the function with a new one) a given method on a component instance.
	     * @param methodName
	     * @param element
	     * @param handler
	     */
	    Initialization.monkeyPatchComponentMethod = function (methodName, element, handler) {
	        Assert_1.Assert.isNonEmptyString(methodName);
	        Assert_1.Assert.exists(handler);
	        var componentClass;
	        if (methodName.indexOf('.') > 0) {
	            var splitArg = methodName.split('.');
	            Assert_1.Assert.check(splitArg.length == 2, 'Invalid method name, correct syntax is CoveoComponent.methodName.');
	            componentClass = splitArg[0];
	            methodName = splitArg[1];
	        }
	        var boundComponent = Component_1.Component.get(element, componentClass);
	        Assert_1.Assert.exists(boundComponent);
	        Assert_1.Assert.exists(boundComponent[methodName]);
	        var originalMethodName = '__' + methodName;
	        if (!Utils_1.Utils.exists(boundComponent[originalMethodName])) {
	            boundComponent[originalMethodName] = boundComponent[methodName];
	        }
	        boundComponent[methodName] = handler;
	    };
	    Initialization.initBoxInterface = function (element, options, type, injectMarkup) {
	        if (options === void 0) { options = {}; }
	        if (type === void 0) { type = 'Standard'; }
	        if (injectMarkup === void 0) { injectMarkup = true; }
	        options = Initialization.resolveDefaultOptions(element, options);
	        var fromInitTypeToBoxReference = 'Box';
	        if (type != 'Standard') {
	            fromInitTypeToBoxReference += 'For' + type;
	        }
	        var boxRef = Component_1.Component.getComponentRef(fromInitTypeToBoxReference);
	        if (boxRef) {
	            new Logger_1.Logger(element).info('Initializing box of type ' + fromInitTypeToBoxReference);
	            var injectFunction = injectMarkup ? boxRef.getInjection : function () {
	            };
	            var box = new boxRef(element, options[fromInitTypeToBoxReference], options.Analytics, injectFunction, options);
	            box.options.originalOptionsObject = options;
	            var initParameters = { options: options, bindings: box.getBindings() };
	            Initialization.automaticallyCreateComponentsInside(element, initParameters);
	        }
	        else {
	            new Logger_1.Logger(element).error('Trying to initialize box of type : ' + fromInitTypeToBoxReference + ' but not found in code (not compiled)!');
	            Assert_1.Assert.fail('Cannot initialize unknown type of box');
	        }
	    };
	    Initialization.dispatchNamedMethodCall = function (methodName, element, args) {
	        Assert_1.Assert.isNonEmptyString(methodName);
	        Assert_1.Assert.exists(element);
	        var namedMethodHandler = Initialization.namedMethods[methodName];
	        Assert_1.Assert.exists(namedMethodHandler);
	        Initialization.logger.trace('Dispatching named method call of ' + methodName, element, args);
	        if (args.length != 0) {
	            return namedMethodHandler.apply(null, [element].concat(args));
	        }
	        else {
	            return namedMethodHandler.apply(null, [element]);
	        }
	    };
	    Initialization.dispatchNamedMethodCallOrComponentCreation = function (token, element, args) {
	        Assert_1.Assert.isNonEmptyString(token);
	        Assert_1.Assert.exists(element);
	        if (Initialization.isNamedMethodRegistered(token)) {
	            return Initialization.dispatchNamedMethodCall(token, element, args);
	        }
	        else if (Initialization.isComponentClassIdRegistered(token)) {
	            return Initialization.createComponentOfThisClassOnElement(token, element, args[0]);
	        }
	        else if (Initialization.isThereASingleComponentBoundToThisElement(element)) {
	            return Initialization.dispatchMethodCallOnBoundComponent(token, element, args);
	        }
	        else {
	            Assert_1.Assert.fail('No method or component named ' + token + ' are registered.');
	        }
	    };
	    Initialization.isSearchFromLink = function (searchInterface) {
	        return Utils_1.Utils.isNonEmptyString(searchInterface.getBindings().queryStateModel.get('q'));
	    };
	    Initialization.isThereASingleComponentBoundToThisElement = function (element) {
	        Assert_1.Assert.exists(element);
	        return Utils_1.Utils.exists(Component_1.Component.get(element));
	    };
	    Initialization.dispatchMethodCallOnBoundComponent = function (methodName, element, args) {
	        Assert_1.Assert.isNonEmptyString(methodName);
	        Assert_1.Assert.exists(element);
	        var boundComponent = Component_1.Component.get(element);
	        Assert_1.Assert.exists(boundComponent);
	        var method = boundComponent[methodName];
	        if (Utils_1.Utils.exists(method)) {
	            return method.apply(boundComponent, args);
	        }
	        else {
	            Assert_1.Assert.fail('No method named ' + methodName + ' exist on component ' + boundComponent.type);
	        }
	    };
	    Initialization.logFirstQueryCause = function (searchInterface) {
	        var firstQueryCause = HashUtils_1.HashUtils.getValue('firstQueryCause', HashUtils_1.HashUtils.getHash());
	        if (firstQueryCause != null) {
	            var meta = HashUtils_1.HashUtils.getValue('firstQueryMeta', HashUtils_1.HashUtils.getHash()) || {};
	            searchInterface.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList[firstQueryCause], meta);
	        }
	        else {
	            if (Initialization.isSearchFromLink(searchInterface)) {
	                searchInterface.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.searchFromLink, {});
	            }
	            else {
	                searchInterface.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.interfaceLoad, {});
	            }
	        }
	    };
	    Initialization.performInitFunctionsOption = function (options, event) {
	        if (Utils_1.Utils.exists(options)) {
	            Initialization.performFunctions(options[event]);
	        }
	    };
	    Initialization.performFunctions = function (option) {
	        if (Utils_1.Utils.exists(option)) {
	            _.each(option, function (func) {
	                if (typeof func == 'function') {
	                    func();
	                }
	            });
	        }
	    };
	    Initialization.initExternalComponents = function (element, options) {
	        if (options && options['externalComponents']) {
	            var searchInterface = Component_1.Component.get(element, SearchInterface_1.SearchInterface);
	            var queryStateModel = Component_1.Component.get(element, QueryStateModel_1.QueryStateModel);
	            var componentStateModel = Component_1.Component.get(element, ComponentStateModel_1.ComponentStateModel);
	            var queryController = Component_1.Component.get(element, QueryController_1.QueryController);
	            var componentOptionsModel = Component_1.Component.get(element, ComponentOptionsModel_1.ComponentOptionsModel);
	            var usageAnalytics = searchInterface.usageAnalytics;
	            Assert_1.Assert.exists(searchInterface);
	            Assert_1.Assert.exists(queryStateModel);
	            Assert_1.Assert.exists(queryController);
	            Assert_1.Assert.exists(componentStateModel);
	            Assert_1.Assert.exists(usageAnalytics);
	            var initParameters_1 = {
	                options: options,
	                bindings: {
	                    searchInterface: searchInterface,
	                    queryStateModel: queryStateModel,
	                    queryController: queryController,
	                    usageAnalytics: usageAnalytics,
	                    componentStateModel: componentStateModel,
	                    componentOptionsModel: componentOptionsModel,
	                    root: element
	                }
	            };
	            _.each(options['externalComponents'], function (externalComponent) {
	                var elementToInstantiate = externalComponent;
	                if (Utils_1.Utils.isHtmlElement(elementToInstantiate)) {
	                    Initialization.automaticallyCreateComponentsInside(elementToInstantiate, initParameters_1);
	                }
	            });
	        }
	    };
	    Initialization.createFunctionThatInitializesComponentOnElements = function (elements, componentClassId, componentClass, initParameters) {
	        return function () {
	            _.each(elements, function (matchingElement) {
	                if (Component_1.Component.get(matchingElement, componentClassId) == null) {
	                    // If options were provided, lookup options for this component class and
	                    // also for the element id. Merge them and pass those to the factory method.
	                    var optionsToUse = undefined;
	                    if (Utils_1.Utils.exists(initParameters.options)) {
	                        var optionsForComponentClass = initParameters.options[componentClassId];
	                        var optionsForElementId = initParameters.options[matchingElement.id];
	                        var initOptions = initParameters.options['initOptions'] ? initParameters.options['initOptions'][componentClassId] : {};
	                        optionsToUse = Utils_1.Utils.extendDeep(optionsForElementId, initOptions);
	                        optionsToUse = Utils_1.Utils.extendDeep(optionsForComponentClass, optionsToUse);
	                    }
	                    var initParamToUse = _.extend({}, initParameters, { options: optionsToUse });
	                    Initialization.createComponentOfThisClassOnElement(componentClass['ID'], matchingElement, initParamToUse);
	                }
	            });
	        };
	    };
	    Initialization.logger = new Logger_1.Logger('Initialization');
	    Initialization.autoCreateComponents = {};
	    Initialization.namedMethods = {};
	    return Initialization;
	}());
	exports.Initialization = Initialization;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Assert_1 = __webpack_require__(16);
	var Utils_1 = __webpack_require__(17);
	var JQueryutils_1 = __webpack_require__(57);
	var Dom_1 = __webpack_require__(56);
	var QueryStateModel_1 = __webpack_require__(89);
	var ComponentStateModel_1 = __webpack_require__(91);
	var ComponentOptionsModel_1 = __webpack_require__(90);
	var QueryController_1 = __webpack_require__(73);
	var SearchInterface_1 = __webpack_require__(96);
	var NoopAnalyticsClient_1 = __webpack_require__(104);
	var BaseComponent_1 = __webpack_require__(75);
	/**
	 * The base class for every component in the framework.
	 */
	var Component = (function (_super) {
	    __extends(Component, _super);
	    /**
	     * Create a new Component. Resolve all {@link IComponentBindings} if not provided.<br/>
	     * Create a new Logger for this component.
	     * Attach the component to the {@link SearchInterface}.<br/>
	     * @param element The HTMLElement on which to create the component. Used to bind data on the element.
	     * @param type The unique identifier for this component. See : {@link IComponentDefinition.ID}. Used to generate the unique Coveo CSS class associated with every component.
	     * @param bindings The environment for every component. Optional, but omitting to provide one will impact performance.
	     */
	    function Component(element, type, bindings) {
	        var _this = this;
	        if (bindings === void 0) { bindings = {}; }
	        _super.call(this, element, type);
	        this.element = element;
	        this.type = type;
	        /**
	         * Allows the component to bind events and execute them only when it is enabled.
	         * @type {Coveo.ComponentEvents}
	         */
	        this.bind = new ComponentEvents(this);
	        this.root = bindings.root || this.resolveRoot();
	        this.queryStateModel = bindings.queryStateModel || this.resolveQueryStateModel();
	        this.componentStateModel = bindings.componentStateModel || this.resolveComponentStateModel();
	        this.queryController = bindings.queryController || this.resolveQueryController();
	        this.searchInterface = bindings.searchInterface || this.resolveSearchInterface();
	        this.usageAnalytics = bindings.usageAnalytics || this.resolveUA();
	        this.componentOptionsModel = bindings.componentOptionsModel || this.resolveComponentOptionsModel();
	        this.ensureDom = _.once(function () { return _this.createDom(); });
	        if (this.searchInterface != null) {
	            this.searchInterface.attachComponent(type, this);
	        }
	    }
	    /**
	     * Return the bindings, or environment, for the current component.
	     * @returns {IComponentBindings}
	     */
	    Component.prototype.getBindings = function () {
	        return {
	            root: this.root,
	            queryStateModel: this.queryStateModel,
	            queryController: this.queryController,
	            searchInterface: this.searchInterface,
	            componentStateModel: this.componentStateModel,
	            componentOptionsModel: this.componentOptionsModel,
	            usageAnalytics: this.usageAnalytics
	        };
	    };
	    Component.prototype.createDom = function () {
	        // By default we do nothing
	    };
	    Component.prototype.resolveSearchInterface = function () {
	        return Component.resolveBinding(this.element, SearchInterface_1.SearchInterface);
	    };
	    Component.prototype.resolveRoot = function () {
	        var resolvedSearchInterface = Component.resolveBinding(this.element, SearchInterface_1.SearchInterface);
	        return resolvedSearchInterface ? resolvedSearchInterface.element : undefined;
	    };
	    Component.prototype.resolveQueryController = function () {
	        return Component.resolveBinding(this.element, QueryController_1.QueryController);
	    };
	    Component.prototype.resolveComponentStateModel = function () {
	        return Component.resolveBinding(this.element, ComponentStateModel_1.ComponentStateModel);
	    };
	    Component.prototype.resolveQueryStateModel = function () {
	        return Component.resolveBinding(this.element, QueryStateModel_1.QueryStateModel);
	    };
	    Component.prototype.resolveComponentOptionsModel = function () {
	        return Component.resolveBinding(this.element, ComponentOptionsModel_1.ComponentOptionsModel);
	    };
	    Component.prototype.resolveUA = function () {
	        var searchInterface = this.resolveSearchInterface();
	        return (searchInterface && searchInterface.usageAnalytics) ? searchInterface.usageAnalytics : new NoopAnalyticsClient_1.NoopAnalyticsClient();
	    };
	    Component.prototype.resolveResult = function () {
	        return Component.getResult(this.element);
	    };
	    /**
	     * Get the bound component to the given HTMLElement. Throws an assert if the HTMLElement has no component bound, unless using the noThrow argument.<br/>
	     * If there is multiple component bound to the current HTMLElement, you must specify the component class.
	     * @param element HTMLElement for which to get the bound component.
	     * @param componentClass Optional component class. If the HTMLElement has multiple components bound, you must specify which one you are targeting.
	     * @param noThrow Boolean option to tell the method to not throw on error.
	     * @returns {Component}
	     */
	    Component.get = function (element, componentClass, noThrow) {
	        Assert_1.Assert.exists(element);
	        if (_.isString(componentClass)) {
	            return element[Component.computeCssClassNameForType(componentClass)];
	        }
	        else if (Utils_1.Utils.exists(componentClass)) {
	            Assert_1.Assert.exists(componentClass.ID);
	            return element[Component.computeCssClassNameForType(componentClass.ID)];
	        }
	        else {
	            // No class specified, but we support returning the bound component
	            // if there is exactly one.
	            var boundComponents = BaseComponent_1.BaseComponent.getBoundComponentsForElement(element);
	            if (!noThrow) {
	                Assert_1.Assert.check(boundComponents.length <= 1, 'More than one component is bound to this element. You need to specify the component type.');
	            }
	            return boundComponents[0];
	        }
	    };
	    Component.getResult = function (element, noThrow) {
	        if (noThrow === void 0) { noThrow = false; }
	        var resultElement = Dom_1.$$(element).closest('.CoveoResult');
	        Assert_1.Assert.check(noThrow || resultElement != undefined);
	        return resultElement['CoveoResult'];
	    };
	    Component.bindResultToElement = function (element, result) {
	        Assert_1.Assert.exists(element);
	        Assert_1.Assert.exists(result);
	        Dom_1.$$(element).addClass('CoveoResult');
	        element['CoveoResult'] = result;
	    };
	    Component.resolveBinding = function (element, componentClass) {
	        Assert_1.Assert.exists(element);
	        Assert_1.Assert.exists(componentClass);
	        Assert_1.Assert.exists(componentClass.ID);
	        // first, look down
	        var found;
	        if (Dom_1.$$(element).is('.' + Component.computeCssClassNameForType(componentClass.ID))) {
	            found = element;
	        }
	        else {
	            var findDown = Dom_1.$$(element).findClass(Component.computeCssClassNameForType(componentClass.ID));
	            if (!findDown || findDown.length == 0) {
	                var findUp = Dom_1.$$(element).closest(Component.computeCssClassNameForType(componentClass.ID));
	                if (findUp) {
	                    found = findUp;
	                }
	            }
	            else {
	                found = findDown;
	            }
	        }
	        if (found) {
	            return found[Component.computeCssClassNameForType(componentClass.ID)];
	        }
	        else {
	            return undefined;
	        }
	    };
	    Component.pointElementsToDummyForm = function (element) {
	        var inputs = Dom_1.$$(element).is('input') ? [element] : [];
	        inputs = inputs.concat(Dom_1.$$(element).findAll('input'));
	        _.each(_.compact(inputs), function (input) {
	            input.setAttribute('form', 'coveo-dummy-form');
	        });
	    };
	    return Component;
	}(BaseComponent_1.BaseComponent));
	exports.Component = Component;
	/**
	 * Used by the various Coveo Component to trigger and bind event.<br/>
	 * It adds a small logic to execute handler or triggers only when the component is "enabled".<br/>
	 * A component is disabled by calling {Component.disable}<br/>
	 * Typically, a component is disabled when it is not active in the current {Tab}.<br/>
	 * It can also be disabled by external code.<br/>
	 * The class serves as a way to not execute handler on component that are invisible and inactive in the query.
	 */
	var ComponentEvents = (function () {
	    /**
	     * Create a new `ComponentEvents` for the given {@link Component}.
	     * @param owner The {@link Component} which owns those events handler and trigger.
	     */
	    function ComponentEvents(owner) {
	        this.owner = owner;
	        Assert_1.Assert.exists(owner);
	    }
	    ComponentEvents.prototype.on = function (arg, event, handler) {
	        if (!JQueryutils_1.JQueryUtils.getJQuery() || !JQueryutils_1.JQueryUtils.isInstanceOfJQuery(arg)) {
	            var htmlEl = arg;
	            Dom_1.$$(htmlEl).on(event, this.wrapToCallIfEnabled(handler));
	        }
	        else {
	            var jq = arg;
	            jq.on(event, this.wrapToCallIfEnabled(handler));
	        }
	    };
	    ComponentEvents.prototype.one = function (arg, event, handler) {
	        if (arg instanceof HTMLElement) {
	            var htmlEl = arg;
	            Dom_1.$$(htmlEl).one(event, this.wrapToCallIfEnabled(handler));
	        }
	        else {
	            var jq = arg;
	            jq.one(event, this.wrapToCallIfEnabled(handler));
	        }
	    };
	    /**
	     * Bind on the "root" of the Component. The root is typically the {@link SearchInterface}.<br/>
	     * Bind an event using native javascript code.
	     * @param event The event for which to register an handler.
	     * @param handler The function to execute when the event is triggered.
	     */
	    ComponentEvents.prototype.onRootElement = function (event, handler) {
	        this.on(this.owner.root, event, handler);
	    };
	    /**
	     * Bind on the "root" of the Component. The root is typically the {@link SearchInterface}.<br/>
	     * Bind an event using native javascript code.
	     * The handler will execute only ONE time.
	     * @param event The event for which to register an handler.
	     * @param handler The function to execute when the event is triggered.
	     */
	    ComponentEvents.prototype.oneRootElement = function (event, handler) {
	        this.one(this.owner.root, event, handler);
	    };
	    /**
	     * Bind an event related specially to the query state model.<br/>
	     * This will build the correct string event and execute the handler only if the component is activated.
	     * @param eventType The event type for which to register an event.
	     * @param attribute The attribute for which to register an event.
	     * @param handler The handler to execute when the query state event is triggered.
	     */
	    ComponentEvents.prototype.onQueryState = function (eventType, attribute, handler) {
	        this.onRootElement(this.getQueryStateEventName(eventType, attribute), handler);
	    };
	    /**
	     * Bind an event related specially to the query state model.<br/>
	     * This will build the correct string event and execute the handler only if the component is activated.<br/>
	     * Will execute only once.
	     * @param eventType The event type for which to register an event.
	     * @param attribute The attribute for which to register an event.
	     * @param handler The handler to execute when the query state event is triggered.
	     */
	    ComponentEvents.prototype.oneQueryState = function (eventType, attribute, handler) {
	        this.oneRootElement(this.getQueryStateEventName(eventType, attribute), handler);
	    };
	    ComponentEvents.prototype.trigger = function (arg, event, args) {
	        this.wrapToCallIfEnabled(function () {
	            if (arg instanceof HTMLElement) {
	                var htmlEl = arg;
	                Dom_1.$$(htmlEl).trigger(event, args);
	            }
	            else {
	                var jq = arg;
	                jq.trigger(event, args);
	            }
	        })(args);
	    };
	    /**
	     * Execute the function only if the component is enabled.
	     * @param func The function to execute if the component is enabled.
	     * @returns {function(...[any]): *}
	     */
	    ComponentEvents.prototype.wrapToCallIfEnabled = function (func) {
	        var _this = this;
	        return function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            if (!_this.owner.disabled) {
	                if (args && args[0] instanceof CustomEvent) {
	                    if (args[0].detail) {
	                        args = [args[0].detail];
	                    }
	                }
	                else if (args && JQueryutils_1.JQueryUtils.isInstanceOfJqueryEvent(args[0])) {
	                    if (args[1] != undefined) {
	                        args = [args[1]];
	                    }
	                    else {
	                        args = [];
	                    }
	                }
	                return func.apply(_this.owner, args);
	            }
	        };
	    };
	    ComponentEvents.prototype.getQueryStateEventName = function (eventType, attribute) {
	        var evtName;
	        if (eventType && attribute) {
	            evtName = this.owner.queryStateModel.getEventName(eventType + attribute);
	        }
	        else {
	            evtName = this.owner.queryStateModel.getEventName(eventType);
	        }
	        return evtName;
	    };
	    return ComponentEvents;
	}());
	exports.ComponentEvents = ComponentEvents;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SearchEndpoint_1 = __webpack_require__(11);
	var ComponentOptions_1 = __webpack_require__(97);
	var DeviceUtils_1 = __webpack_require__(19);
	var Dom_1 = __webpack_require__(56);
	var DomUtils_1 = __webpack_require__(58);
	var Assert_1 = __webpack_require__(16);
	var QueryStateModel_1 = __webpack_require__(89);
	var ComponentStateModel_1 = __webpack_require__(91);
	var ComponentOptionsModel_1 = __webpack_require__(90);
	var QueryController_1 = __webpack_require__(73);
	var Model_1 = __webpack_require__(86);
	var QueryEvents_1 = __webpack_require__(46);
	var StandaloneSearchInterfaceEvents_1 = __webpack_require__(51);
	var HistoryController_1 = __webpack_require__(85);
	var LocalStorageHistoryController_1 = __webpack_require__(87);
	var InitializationEvents_1 = __webpack_require__(43);
	var NoopAnalyticsClient_1 = __webpack_require__(104);
	var Utils_1 = __webpack_require__(17);
	var RootComponent_1 = __webpack_require__(74);
	var BaseComponent_1 = __webpack_require__(75);
	var Debug_1 = __webpack_require__(105);
	var HashUtils_1 = __webpack_require__(64);
	var FastClick = __webpack_require__(106);
	var timezone = __webpack_require__(107);
	var SentryLogger_1 = __webpack_require__(108);
	/**
	 * This component is the root and main component of your search interface.<br/>
	 * You should place every other component inside this component.<br/>
	 * It is also on this component that you call the initialization function.<br/>
	 * Since this component is the root of your Search UI, it is recommended that you give it a unique HTML id attribute in order to reference it easily.
	 */
	var SearchInterface = (function (_super) {
	    __extends(SearchInterface, _super);
	    /**
	     * Create a new search interface. Initialize letious singleton for the interface (eg : Usage analytic, query controller, state model, etc.)<br/>
	     * Bind event related to the query.<br/>
	     * Will hide and show the loading animation, if activated.<br/>
	     * @param element The `HTMLElement` on which the element will be instantiated. This cannot be an `HTMLInputElement` for technical reasons.
	     * @param options The options for the querybox.
	     * @param analyticsOptions The options for the analytics component. Since the analytics component is normally global, it needs to be passed at initialization of the whole interface.
	     * @param _window The window object for the search interface. Used for unit tests, which can pass a mock. Default is the global window object.
	     */
	    function SearchInterface(element, options, analyticsOptions, _window) {
	        var _this = this;
	        if (_window === void 0) { _window = window; }
	        _super.call(this, element, SearchInterface.ID);
	        this.element = element;
	        this.options = options;
	        this.analyticsOptions = analyticsOptions;
	        this.isNewDesignAttribute = false;
	        if (DeviceUtils_1.DeviceUtils.isMobileDevice()) {
	            Dom_1.$$(document.body).addClass('coveo-mobile-device');
	        }
	        FastClick.attach(element);
	        this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, SearchInterface, options);
	        Assert_1.Assert.exists(element);
	        Assert_1.Assert.exists(this.options);
	        if (this.options.hideUntilFirstQuery) {
	            this.showAndHideFirstQueryAnimation();
	        }
	        this.root = element;
	        this.queryStateModel = new QueryStateModel_1.QueryStateModel(element);
	        this.componentStateModel = new ComponentStateModel_1.ComponentStateModel(element);
	        this.componentOptionsModel = new ComponentOptionsModel_1.ComponentOptionsModel(element);
	        this.usageAnalytics = this.initializeAnalytics();
	        this.queryController = new QueryController_1.QueryController(element, this.options, this.usageAnalytics, this);
	        new SentryLogger_1.SentryLogger(this.queryController);
	        var eventName = this.queryStateModel.getEventName(Model_1.Model.eventTypes.preprocess);
	        Dom_1.$$(this.element).on(eventName, function (e, args) { return _this.handlePreprocessQueryStateModel(args); });
	        Dom_1.$$(this.element).on(QueryEvents_1.QueryEvents.buildingQuery, function (e, args) { return _this.handleBuildingQuery(args); });
	        Dom_1.$$(this.element).on(QueryEvents_1.QueryEvents.querySuccess, function (e, args) { return _this.handleQuerySuccess(args); });
	        Dom_1.$$(this.element).on(QueryEvents_1.QueryEvents.queryError, function (e, args) { return _this.handleQueryError(args); });
	        if (this.options.enableHistory) {
	            if (!this.options.useLocalStorageForHistory) {
	                new HistoryController_1.HistoryController(element, _window, this.queryStateModel, this.queryController);
	            }
	            else {
	                new LocalStorageHistoryController_1.LocalStorageHistoryController(element, _window, this.queryStateModel, this.queryController);
	            }
	        }
	        else {
	            Dom_1.$$(this.element).on(InitializationEvents_1.InitializationEvents.restoreHistoryState, function () { return _this.queryStateModel.setMultiple(_this.queryStateModel.defaultAttributes); });
	        }
	        var eventNameQuickview = this.queryStateModel.getEventName(Model_1.Model.eventTypes.changeOne + QueryStateModel_1.QueryStateModel.attributesEnum.quickview);
	        Dom_1.$$(this.element).on(eventNameQuickview, function (e, args) { return _this.handleQuickviewChanged(args); });
	        // shows the UI, since it's been hidden while loading
	        this.element.style.display = element.style.display || 'block';
	        this.setupDebugInfo();
	        this.isNewDesignAttribute = this.root.getAttribute('data-design') == 'new';
	    }
	    /**
	     * Display the first query animation.<br/>
	     * This is normally the Coveo logo with a CSS animation (which can be customized with options or CSS).
	     */
	    SearchInterface.prototype.showWaitAnimation = function () {
	        Dom_1.$$(this.options.firstLoadingAnimation).detach();
	        Dom_1.$$(this.element).addClass('coveo-waiting-for-first-query');
	        this.element.appendChild(this.options.firstLoadingAnimation);
	    };
	    /**
	     * Hide the first query animation.<br/>
	     * This is normally the Coveo logo with a CSS animation (which can be customized with options or CSS).
	     */
	    SearchInterface.prototype.hideWaitAnimation = function () {
	        Dom_1.$$(this.options.firstLoadingAnimation).detach();
	        Dom_1.$$(this.element).removeClass('coveo-waiting-for-first-query');
	    };
	    /**
	     * Attach a component to the interface. This allows the interface to easily list and traverse its component.
	     * @param type Normally a unique identifier without the Coveo prefix (e.g.: CoveoFacet -> Facet, CoveoPager -> Pager, CoveoQuerybox -> Querybox, etc.)
	     * @param component The component instance to attach.
	     */
	    SearchInterface.prototype.attachComponent = function (type, component) {
	        this.getComponents(type).push(component);
	    };
	    /**
	     * Detach a component from the interface.
	     * @param type Normally a unique identifier without the Coveo prefix (e.g.: CoveoFacet -> Facet, CoveoPager -> Pager, CoveoQuerybox -> Querybox, etc.)
	     * @param component The component instance to detach.
	     */
	    SearchInterface.prototype.detachComponent = function (type, component) {
	        var components = this.getComponents(type);
	        var index = _.indexOf(components, component);
	        if (index > -1) {
	            components.splice(index, 1);
	        }
	    };
	    /**
	     * Return the bindings, or environment, for the current component
	     * @returns {IComponentBindings}
	     */
	    SearchInterface.prototype.getBindings = function () {
	        return {
	            root: this.root,
	            queryStateModel: this.queryStateModel,
	            queryController: this.queryController,
	            searchInterface: this,
	            componentStateModel: this.componentStateModel,
	            componentOptionsModel: this.componentOptionsModel,
	            usageAnalytics: this.usageAnalytics
	        };
	    };
	    /**
	     * Get all the components for a given type
	     * @param type Normally a unique identifier without the Coveo prefix (e.g.: CoveoFacet -> Facet, CoveoPager -> Pager, CoveoQuerybox -> Querybox, etc.)
	     */
	    SearchInterface.prototype.getComponents = function (type) {
	        if (this.attachedComponents == null) {
	            this.attachedComponents = {};
	        }
	        if (!(type in this.attachedComponents)) {
	            this.attachedComponents[type] = [];
	        }
	        return this.attachedComponents[type];
	    };
	    /**
	     * Determines whether the interface is using the new design.<br/>
	     * This changes the rendering of multiple components.
	     */
	    SearchInterface.prototype.isNewDesign = function () {
	        return this.isNewDesignAttribute;
	    };
	    SearchInterface.prototype.initializeAnalytics = function () {
	        var analyticsRef = BaseComponent_1.BaseComponent.getComponentRef('Analytics');
	        if (analyticsRef) {
	            return analyticsRef.create(this.element, this.analyticsOptions);
	        }
	        return new NoopAnalyticsClient_1.NoopAnalyticsClient();
	    };
	    SearchInterface.prototype.setupDebugInfo = function () {
	        var _this = this;
	        if (this.options.enableDebugInfo) {
	            setTimeout(function () { return new Debug_1.Debug(_this.element, _this.queryController); });
	        }
	    };
	    SearchInterface.prototype.showAndHideFirstQueryAnimation = function () {
	        var _this = this;
	        this.showWaitAnimation();
	        // On first query success or error, wait for call stack to finish, then remove the animation
	        Dom_1.$$(this.element).one(QueryEvents_1.QueryEvents.querySuccess, function () {
	            _.defer(function () { return _this.hideWaitAnimation(); });
	        });
	        Dom_1.$$(this.element).one(QueryEvents_1.QueryEvents.queryError, function () {
	            _.defer(function () { return _this.hideWaitAnimation(); });
	        });
	    };
	    SearchInterface.prototype.handlePreprocessQueryStateModel = function (args) {
	        var tgFromModel = this.queryStateModel.get(QueryStateModel_1.QueryStateModel.attributesEnum.tg);
	        var tFromModel = this.queryStateModel.get(QueryStateModel_1.QueryStateModel.attributesEnum.t);
	        var tg = tgFromModel;
	        var t = tFromModel;
	        // if you want to set the tab group
	        if (args.tg !== undefined) {
	            args.tg = this.getTabGroupId(args.tg);
	            if (tg != args.tg) {
	                args.t = args.t || QueryStateModel_1.QueryStateModel.defaultAttributes.t;
	                args.sort = args.sort || QueryStateModel_1.QueryStateModel.defaultAttributes.sort;
	                tg = args.tg;
	            }
	        }
	        if (args.t !== undefined) {
	            args.t = this.getTabId(tg, args.t);
	            if (t != args.t) {
	                args.sort = args.sort || QueryStateModel_1.QueryStateModel.defaultAttributes.sort;
	                t = args.t;
	            }
	        }
	        if (args.sort !== undefined) {
	            args.sort = this.getSort(t, args.sort);
	        }
	        if (args.quickview !== undefined) {
	            args.quickview = this.getQuickview(args.quickview);
	        }
	    };
	    SearchInterface.prototype.getTabGroupId = function (tabGroupId) {
	        var tabGroupRef = BaseComponent_1.BaseComponent.getComponentRef('TabGroup');
	        if (tabGroupRef) {
	            var tabGroups = this.getComponents(tabGroupRef.ID);
	            // check if the tabgroup is correct
	            if (tabGroupId != QueryStateModel_1.QueryStateModel.defaultAttributes.tg && _.any(tabGroups, function (tabGroup) { return !tabGroup.disabled && tabGroupId == tabGroup.options.id; })) {
	                return tabGroupId;
	            }
	            // select the first tabGroup
	            if (tabGroups.length > 0) {
	                return tabGroups[0].options.id;
	            }
	        }
	        return QueryStateModel_1.QueryStateModel.defaultAttributes.tg;
	    };
	    SearchInterface.prototype.getTabId = function (tabGroupId, tabId) {
	        var tabRef = BaseComponent_1.BaseComponent.getComponentRef('Tab');
	        var tabGroupRef = BaseComponent_1.BaseComponent.getComponentRef('TabGroup');
	        if (tabRef) {
	            var tabs = this.getComponents(tabRef.ID);
	            if (tabGroupRef) {
	                // if has a tabGroup
	                if (tabGroupId != QueryStateModel_1.QueryStateModel.defaultAttributes.tg) {
	                    var tabGroups = this.getComponents(tabGroupRef.ID);
	                    var tabGroup_1 = _.find(tabGroups, function (tabGroup) { return tabGroupId == tabGroup.options.id; });
	                    // check if the tabgroup contain this tab
	                    if (tabId != QueryStateModel_1.QueryStateModel.defaultAttributes.t && _.any(tabs, function (tab) { return tabId == tab.options.id && tabGroup_1.isElementIncludedInTabGroup(tab.element); })) {
	                        return tabId;
	                    }
	                    // select the first tab in the tabGroup
	                    var tab = _.find(tabs, function (tab) { return tabGroup_1.isElementIncludedInTabGroup(tab.element); });
	                    if (tab != null) {
	                        return tab.options.id;
	                    }
	                    return QueryStateModel_1.QueryStateModel.defaultAttributes.t;
	                }
	            }
	            // check if the tab is correct
	            if (tabId != QueryStateModel_1.QueryStateModel.defaultAttributes.t && _.any(tabs, function (tab) { return tabId == tab.options.id; })) {
	                return tabId;
	            }
	            // select the first tab
	            if (tabs.length > 0) {
	                return tabs[0].options.id;
	            }
	        }
	        return QueryStateModel_1.QueryStateModel.defaultAttributes.t;
	    };
	    SearchInterface.prototype.getSort = function (tabId, sortId) {
	        var sortRef = BaseComponent_1.BaseComponent.getComponentRef('Sort');
	        if (sortRef) {
	            var sorts = this.getComponents(sortRef.ID);
	            // if has a selected tab
	            var tabRef = BaseComponent_1.BaseComponent.getComponentRef('Tab');
	            if (tabRef) {
	                if (tabId != QueryStateModel_1.QueryStateModel.defaultAttributes.t) {
	                    var tabs = this.getComponents(tabRef.ID);
	                    var tab_1 = _.find(tabs, function (tab) { return tabId == tab.options.id; });
	                    var sortCriteria = tab_1.options.sort;
	                    // check if the tab contain this sort
	                    if (sortId != QueryStateModel_1.QueryStateModel.defaultAttributes.sort && _.any(sorts, function (sort) { return tab_1.isElementIncludedInTab(sort.element) && sort.match(sortId); })) {
	                        return sortId;
	                    }
	                    else if (sortCriteria != null) {
	                        // if not and tab.options.sort is set apply it
	                        return sortCriteria.toString();
	                    }
	                    // select the first sort in the tab
	                    var sort = _.find(sorts, function (sort) { return tab_1.isElementIncludedInTab(sort.element); });
	                    if (sort != null) {
	                        return sort.options.sortCriteria[0].toString();
	                    }
	                    return QueryStateModel_1.QueryStateModel.defaultAttributes.sort;
	                }
	            }
	            // check if the sort is correct
	            if (sortId != QueryStateModel_1.QueryStateModel.defaultAttributes.sort && _.any(sorts, function (sort) { return sort.match(sortId); })) {
	                return sortId;
	            }
	            // select the first sort
	            if (sorts.length > 0) {
	                return sorts[0].options.sortCriteria[0].toString();
	            }
	        }
	        return QueryStateModel_1.QueryStateModel.defaultAttributes.sort;
	    };
	    SearchInterface.prototype.getQuickview = function (quickviewId) {
	        var quickviewRef = BaseComponent_1.BaseComponent.getComponentRef('Quickview');
	        if (quickviewRef) {
	            var quickviews = this.getComponents(quickviewRef.ID);
	            if (_.any(quickviews, function (quickview) { return quickview.getHashId() == quickviewId; })) {
	                return quickviewId;
	            }
	        }
	        return QueryStateModel_1.QueryStateModel.defaultAttributes.quickview;
	    };
	    SearchInterface.prototype.handleQuickviewChanged = function (args) {
	        var quickviewRef = BaseComponent_1.BaseComponent.getComponentRef('Quickview');
	        if (quickviewRef) {
	            var quickviews = this.getComponents(quickviewRef.ID);
	            if (args.value != '') {
	                var quickviewsPartition = _.partition(quickviews, function (quickview) { return quickview.getHashId() == args.value; });
	                if (quickviewsPartition[0].length != 0) {
	                    _.first(quickviewsPartition[0]).open();
	                    _.forEach(_.tail(quickviewsPartition[0]), function (quickview) { return quickview.close(); });
	                }
	                _.forEach(quickviewsPartition[1], function (quickview) { return quickview.close(); });
	            }
	            else {
	                _.forEach(quickviews, function (quickview) {
	                    quickview.close();
	                });
	            }
	        }
	    };
	    SearchInterface.prototype.handleBuildingQuery = function (data) {
	        if (this.options.enableDuplicateFiltering) {
	            data.queryBuilder.enableDuplicateFiltering = true;
	        }
	        if (!Utils_1.Utils.isNullOrUndefined(this.options.pipeline)) {
	            data.queryBuilder.pipeline = this.options.pipeline;
	        }
	        if (!Utils_1.Utils.isNullOrUndefined(this.options.maximumAge)) {
	            data.queryBuilder.maximumAge = this.options.maximumAge;
	        }
	        if (!Utils_1.Utils.isNullOrUndefined(this.options.resultsPerPage)) {
	            data.queryBuilder.numberOfResults = this.options.resultsPerPage;
	        }
	        if (!Utils_1.Utils.isNullOrUndefined(this.options.excerptLength)) {
	            data.queryBuilder.excerptLength = this.options.excerptLength;
	        }
	        if (Utils_1.Utils.isNonEmptyString(this.options.expression)) {
	            data.queryBuilder.advancedExpression.add(this.options.expression);
	        }
	        if (Utils_1.Utils.isNonEmptyString(this.options.filterField)) {
	            data.queryBuilder.filterField = this.options.filterField;
	        }
	        if (Utils_1.Utils.isNonEmptyString(this.options.timezone)) {
	            data.queryBuilder.timezone = this.options.timezone;
	        }
	        data.queryBuilder.enableCollaborativeRating = this.options.enableCollaborativeRating;
	        data.queryBuilder.enableDuplicateFiltering = this.options.enableDuplicateFiltering;
	    };
	    SearchInterface.prototype.handleQuerySuccess = function (data) {
	        var noResults = data.results.results.length == 0;
	        this.toggleSectionState('coveo-no-results', noResults);
	        var resultsHeader = Dom_1.$$(this.element).find('.coveo-results-header');
	        if (resultsHeader) {
	            Dom_1.$$(resultsHeader).removeClass('coveo-query-error');
	        }
	    };
	    SearchInterface.prototype.handleQueryError = function (data) {
	        this.toggleSectionState('coveo-no-results');
	        var resultsHeader = Dom_1.$$(this.element).find('.coveo-results-header');
	        if (resultsHeader) {
	            Dom_1.$$(resultsHeader).addClass('coveo-query-error');
	        }
	    };
	    SearchInterface.prototype.toggleSectionState = function (cssClass, toggle) {
	        var _this = this;
	        if (toggle === void 0) { toggle = true; }
	        var facetSection = Dom_1.$$(this.element).find('.coveo-facet-column');
	        var resultsSection = Dom_1.$$(this.element).find('.coveo-results-column');
	        var resultsHeader = Dom_1.$$(this.element).find('.coveo-results-header');
	        var facetSearchs = Dom_1.$$(this.element).findAll('.coveo-facet-search-results');
	        if (facetSection) {
	            Dom_1.$$(facetSection).toggleClass(cssClass, toggle && !this.queryStateModel.atLeastOneFacetIsActive());
	        }
	        if (resultsSection) {
	            Dom_1.$$(resultsSection).toggleClass(cssClass, toggle && !this.queryStateModel.atLeastOneFacetIsActive());
	        }
	        if (resultsHeader) {
	            Dom_1.$$(resultsHeader).toggleClass(cssClass, toggle && !this.queryStateModel.atLeastOneFacetIsActive());
	        }
	        if (facetSearchs && facetSearchs.length > 0) {
	            _.each(facetSearchs, function (facetSearch) {
	                Dom_1.$$(facetSearch).toggleClass(cssClass, toggle && !_this.queryStateModel.atLeastOneFacetIsActive());
	            });
	        }
	    };
	    SearchInterface.ID = 'SearchInterface';
	    /**
	     * The options for the search interface
	     * @componentOptions
	     */
	    SearchInterface.options = {
	        /**
	         * Specifies whether your search interface allows users to navigate in the search history using the browser back/forward buttons.<br/>
	         * When enabled, the search interface saves the state of the current query in the hash portion of the URL.<br/>
	         * For example #q=foobar.<br/>
	         * The default value is `false`.
	         */
	        enableHistory: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
	        /**
	         * Specifies whether the UI should use an automatic responsive mode (eg : The tab(s) and facet(s) being placed automatically under the search box)<br/>
	         * This can be disabled for design reasons, if it does not fit with the implementation needs.<br/>
	         * The default value is `true`
	         */
	        enableAutomaticResponsiveMode: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }),
	        /**
	         * Specifies that you wish to use the local storage of the browser to store the state of the interface.<br/>
	         * This can be used for very specific purpose, and only if you know what you are doing.<br/>
	         * Default value is `false`.
	         */
	        useLocalStorageForHistory: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
	        /**
	         * Specifies the number of results that each page displays.<br/>
	         * Default is 10.
	         */
	        resultsPerPage: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 10, min: 0 }),
	        /**
	         * Specifies the number of characters of the excerpt to get at query time and display for each query result.<br/>
	         * This setting is global and can not be modified on a per result basis.<br/>
	         * The default value is 200.
	         */
	        excerptLength: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 200, min: 0 }),
	        /**
	         * Specifies an expression to add to each query.<br/>
	         * This should be use if you wish to add a global filter for your whole search interface that applies for all tabs.<br/>
	         * Do not use this for security concern ... (It is JavaScript after all).<br/>
	         * By default none is added.
	         */
	        expression: ComponentOptions_1.ComponentOptions.buildStringOption({ defaultValue: '' }),
	        /**
	         * Specifies the name of a field to use as a custom filter when executing the query (also referred to as 'folding').<br/>
	         * Setting this option causes the index to return only one result having any particular value inside the filter field. Any other matching result is 'folded' inside the childResults member of each JSON query result.<br/>
	         * This feature is typically used with threaded conversations to include only one top-level result per conversation. Thus, the field specified in this option typically is a value unique to each thread that is shared by all items (e.g.: posts, emails, etc.) in the thread.<br/>
	         * This is obviously an advanced feature. Instead, look into using the {@link Folding} component, which covers a lot of different use cases.<br/>
	         * By default none is added
	         */
	        filterField: ComponentOptions_1.ComponentOptions.buildStringOption({ defaultValue: '' }),
	        /**
	         * Specifies whether the interface should display a loading animation before the first query has completed successfully.<br/>
	         * Note that if you set autoTriggerQuery to false, this means that the loading animation will not go away automatically.<br/>
	         * Default is true.
	         */
	        hideUntilFirstQuery: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }),
	        /**
	         * Specifies the animation that you wish to use for your interface.<br/>
	         * This can be a selector or an element that matches the correct CSS class.<br/>
	         * Eg : firstLoadingAnimation : '.CustomFirstLoadingAnimation' / data-first-loading-animation='.CustomFirstLoadingAnimation'.</br>
	         * Eg : &lt;element class='CoveoSearchInterface'&gt;&lt;element class='coveo-first-loading-animation'/&gt;&lt;/element&gt;<br/>
	         * By default, this will be a Coveo CSS animation (which can also be customized with CSS).
	         */
	        firstLoadingAnimation: ComponentOptions_1.ComponentOptions.buildChildHtmlElementOption({
	            childSelector: '.coveo-first-loading-animation',
	            defaultFunction: function () { return DomUtils_1.DomUtils.getBasicLoadingAnimation(); }
	        }),
	        /**
	         * Specifies whether the init function should trigger the first query automatically when the page is loaded.<br/>
	         * Note that if you set this to false, then the hideUntilFirstQuery option still applies. This means that the animation will still show until a query is triggered.<br/>
	         * Default is `true`.
	         */
	        autoTriggerQuery: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }),
	        endpoint: ComponentOptions_1.ComponentOptions.buildCustomOption(function (endpoint) { return endpoint != null && endpoint in SearchEndpoint_1.SearchEndpoint.endpoints ? SearchEndpoint_1.SearchEndpoint.endpoints[endpoint] : null; }, { defaultFunction: function () { return SearchEndpoint_1.SearchEndpoint.endpoints['default']; } }),
	        /**
	         * Specifies the timezone in which the search interface is loaded. This allows the index to recognize some special query syntax.<br/>
	         * This must be an IANA zone info key (aka the Olson time zone database). For example : 'America/New_York'.<br/>
	         * By default, we use a library that tries to detect the timezone automatically.<br/>
	         */
	        timezone: ComponentOptions_1.ComponentOptions.buildStringOption({ defaultFunction: function () { return timezone.jstz.determine().name(); } }),
	        /**
	         * Specifies whether to enable the feature that allows users to ALT + double click on any results to get the Debug page with a detailed view of all the properties and fields for a given result.<br/>
	         * This has no security concern (as all those informations are visible to users through the browser developer console or by calling the Coveo API directly).<br/>
	         * The default value is `true`.
	         */
	        enableDebugInfo: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }),
	        /**
	         * Specifies whether to enable the collaborative rating for the index and and include the user rating on each results to the normal index ranking.<br/>
	         * If activated, this option can be leveraged with the {@link ResultRating} component.<br/>
	         * The default value is `false`.
	         */
	        enableCollaborativeRating: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
	        /**
	         * Specifies whether to filter duplicates on the search results.<br/>
	         * When true, duplicates do not appear in search results, but they however are included in facet counts, which can be sometimes confusing for the users. This is a limitation of the index.<br/>
	         * Example: The user narrows a query to one document that has a duplicate. Only one document appears in search results, but the facet count is 2.<br/>
	         * The default value is `false`.
	         */
	        enableDuplicateFiltering: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
	        /**
	         * Specifies the name of the query pipeline to use for the queries. If not specified, the default value is default, which means the default query pipeline will be used.<br/>
	         * You can use this parameter when your index is in a Coveo Cloud organization where you created pipelines (see https://onlinehelp.coveo.com/en/cloud/creating_and_managing_query_pipelines.htm).<br/>
	         * Default value is 'default'.
	         */
	        pipeline: ComponentOptions_1.ComponentOptions.buildStringOption(),
	        /**
	         * Specifies the maximum age in milliseconds that cached query results can have in order to be used (instead of performing a new query on the index).<br/>
	         * If cached results are available but are older than the specified age, a new query will be performed on the index.<br/>
	         * On high-volume public web sites, having a larger maximum age can greatly improve query response time at the cost of result freshness.<br/>
	         * By default, the Coveo Search API will determine the cache length. This typically takes 15 minutes.
	         */
	        maximumAge: ComponentOptions_1.ComponentOptions.buildNumberOption(),
	        /**
	         * Specifies the search page you wish to navigate to when instantiating a standalone search box interface.<br/>
	         * By default this is undefined, meaning the search interface will not redirect.
	         */
	        searchPageUri: ComponentOptions_1.ComponentOptions.buildStringOption()
	    };
	    SearchInterface.SMALL_INTERFACE_CLASS_NAME = 'coveo-small-search-interface';
	    return SearchInterface;
	}(RootComponent_1.RootComponent));
	exports.SearchInterface = SearchInterface;
	var StandaloneSearchInterface = (function (_super) {
	    __extends(StandaloneSearchInterface, _super);
	    function StandaloneSearchInterface(element, options, analyticsOptions, _window) {
	        var _this = this;
	        if (_window === void 0) { _window = window; }
	        _super.call(this, element, ComponentOptions_1.ComponentOptions.initComponentOptions(element, StandaloneSearchInterface, options), analyticsOptions, _window);
	        this.element = element;
	        this.options = options;
	        this.analyticsOptions = analyticsOptions;
	        Dom_1.$$(this.root).on(QueryEvents_1.QueryEvents.newQuery, function (e, args) { return _this.handleRedirect(e, args); });
	    }
	    StandaloneSearchInterface.prototype.handleRedirect = function (e, data) {
	        var dataToSendOnBeforeRedirect = {
	            searchPageUri: this.options.searchPageUri,
	            cancel: false
	        };
	        Dom_1.$$(this.root).trigger(StandaloneSearchInterfaceEvents_1.StandaloneSearchInterfaceEvents.beforeRedirect, dataToSendOnBeforeRedirect);
	        if (dataToSendOnBeforeRedirect.cancel) {
	            return;
	        }
	        data.cancel = true;
	        if (!this.searchboxIsEmpty() || this.options.redirectIfEmpty) {
	            this.redirectToSearchPage(dataToSendOnBeforeRedirect.searchPageUri);
	        }
	    };
	    StandaloneSearchInterface.prototype.redirectToSearchPage = function (searchPage) {
	        var stateValues = this.queryStateModel.getAttributes();
	        var uaCausedBy = this.usageAnalytics.getCurrentEventCause();
	        if (uaCausedBy != null) {
	            stateValues['firstQueryCause'] = uaCausedBy;
	        }
	        var uaMeta = this.usageAnalytics.getCurrentEventMeta();
	        if (uaMeta != null) {
	            stateValues['firstQueryMeta'] = uaMeta;
	        }
	        window.location.href = searchPage + '#' + HashUtils_1.HashUtils.encodeValues(stateValues);
	    };
	    StandaloneSearchInterface.prototype.searchboxIsEmpty = function () {
	        return Utils_1.Utils.isEmptyString(this.queryStateModel.get(QueryStateModel_1.QueryStateModel.attributesEnum.q));
	    };
	    StandaloneSearchInterface.ID = 'StandaloneSearchInterface';
	    StandaloneSearchInterface.options = {
	        redirectIfEmpty: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true })
	    };
	    return StandaloneSearchInterface;
	}(SearchInterface));
	exports.StandaloneSearchInterface = StandaloneSearchInterface;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Assert_1 = __webpack_require__(16);
	var Logger_1 = __webpack_require__(15);
	var Dom_1 = __webpack_require__(56);
	var TemplateCache_1 = __webpack_require__(98);
	var TemplateList_1 = __webpack_require__(102);
	var UnderscoreTemplate_1 = __webpack_require__(100);
	var HtmlTemplate_1 = __webpack_require__(101);
	var Utils_1 = __webpack_require__(17);
	var Strings_1 = __webpack_require__(33);
	(function (ComponentOptionsType) {
	    ComponentOptionsType[ComponentOptionsType["BOOLEAN"] = 0] = "BOOLEAN";
	    ComponentOptionsType[ComponentOptionsType["NUMBER"] = 1] = "NUMBER";
	    ComponentOptionsType[ComponentOptionsType["STRING"] = 2] = "STRING";
	    ComponentOptionsType[ComponentOptionsType["LOCALIZED_STRING"] = 3] = "LOCALIZED_STRING";
	    ComponentOptionsType[ComponentOptionsType["LIST"] = 4] = "LIST";
	    ComponentOptionsType[ComponentOptionsType["SELECTOR"] = 5] = "SELECTOR";
	    ComponentOptionsType[ComponentOptionsType["CHILD_HTML_ELEMENT"] = 6] = "CHILD_HTML_ELEMENT";
	    ComponentOptionsType[ComponentOptionsType["TEMPLATE"] = 7] = "TEMPLATE";
	    ComponentOptionsType[ComponentOptionsType["FIELD"] = 8] = "FIELD";
	    ComponentOptionsType[ComponentOptionsType["FIELDS"] = 9] = "FIELDS";
	    ComponentOptionsType[ComponentOptionsType["ICON"] = 10] = "ICON";
	    ComponentOptionsType[ComponentOptionsType["OBJECT"] = 11] = "OBJECT";
	    ComponentOptionsType[ComponentOptionsType["QUERY"] = 12] = "QUERY";
	    ComponentOptionsType[ComponentOptionsType["HELPER"] = 13] = "HELPER";
	    ComponentOptionsType[ComponentOptionsType["LONG_STRING"] = 14] = "LONG_STRING";
	    ComponentOptionsType[ComponentOptionsType["JSON"] = 15] = "JSON";
	    ComponentOptionsType[ComponentOptionsType["JAVASCRIPT"] = 16] = "JAVASCRIPT";
	    ComponentOptionsType[ComponentOptionsType["NONE"] = 17] = "NONE";
	})(exports.ComponentOptionsType || (exports.ComponentOptionsType = {}));
	var ComponentOptionsType = exports.ComponentOptionsType;
	var camelCaseToHyphenRegex = /([A-Z])|\W+(\w)/g;
	var fieldsSeperator = /\s*,\s*/;
	var localizer = /([a-zA-Z\-]+)\s*:\s*(([^,]|,\s*(?!([a-zA-Z\-]+)\s*:))+)/g;
	var ComponentOptions = (function () {
	    function ComponentOptions() {
	    }
	    ComponentOptions.buildBooleanOption = function (optionArgs) {
	        return ComponentOptions.buildOption(ComponentOptionsType.BOOLEAN, ComponentOptions.loadBooleanOption, optionArgs);
	    };
	    ComponentOptions.buildNumberOption = function (optionArgs) {
	        return ComponentOptions.buildOption(ComponentOptionsType.NUMBER, ComponentOptions.loadNumberOption, optionArgs);
	    };
	    ComponentOptions.buildStringOption = function (optionArgs) {
	        return ComponentOptions.buildOption(ComponentOptionsType.STRING, ComponentOptions.loadStringOption, optionArgs);
	    };
	    ComponentOptions.buildIconOption = function (optionArgs) {
	        return ComponentOptions.buildOption(ComponentOptionsType.ICON, ComponentOptions.loadStringOption, optionArgs);
	    };
	    ComponentOptions.buildHelperOption = function (optionArgs) {
	        return ComponentOptions.buildOption(ComponentOptionsType.HELPER, ComponentOptions.loadStringOption, optionArgs);
	    };
	    ComponentOptions.buildJsonOption = function (optionArgs) {
	        return ComponentOptions.buildOption(ComponentOptionsType.JSON, ComponentOptions.loadStringOption, optionArgs);
	    };
	    ComponentOptions.buildLocalizedStringOption = function (optionArgs) {
	        return ComponentOptions.buildOption(ComponentOptionsType.LOCALIZED_STRING, ComponentOptions.loadLocalizedStringOption, optionArgs);
	    };
	    ComponentOptions.buildFieldOption = function (optionArgs) {
	        return ComponentOptions.buildOption(ComponentOptionsType.FIELD, ComponentOptions.loadFieldOption, optionArgs);
	    };
	    ComponentOptions.buildFieldsOption = function (optionArgs) {
	        return ComponentOptions.buildOption(ComponentOptionsType.FIELDS, ComponentOptions.loadFieldsOption, optionArgs);
	    };
	    ComponentOptions.buildListOption = function (optionArgs) {
	        return ComponentOptions.buildOption(ComponentOptionsType.LIST, ComponentOptions.loadListOption, optionArgs);
	    };
	    ComponentOptions.buildSelectorOption = function (optionArgs) {
	        return ComponentOptions.buildOption(ComponentOptionsType.SELECTOR, ComponentOptions.loadSelectorOption, optionArgs);
	    };
	    ComponentOptions.buildChildHtmlElementOption = function (optionArgs) {
	        return ComponentOptions.buildOption(ComponentOptionsType.CHILD_HTML_ELEMENT, ComponentOptions.loadChildHtmlElementOption, optionArgs);
	    };
	    ComponentOptions.buildTemplateOption = function (optionArgs) {
	        return ComponentOptions.buildOption(ComponentOptionsType.TEMPLATE, ComponentOptions.loadTemplateOption, optionArgs);
	    };
	    ComponentOptions.buildCustomOption = function (converter, optionArgs) {
	        var loadOption = function (element, name, option) {
	            var stringvalue = ComponentOptions.loadStringOption(element, name, option);
	            if (!Utils_1.Utils.isNullOrEmptyString(stringvalue)) {
	                return converter(stringvalue);
	            }
	        };
	        return ComponentOptions.buildOption(ComponentOptionsType.STRING, loadOption, optionArgs);
	    };
	    ComponentOptions.buildCustomListOption = function (converter, optionArgs) {
	        var loadOption = function (element, name, option) {
	            var stringvalue = ComponentOptions.loadListOption(element, name, option);
	            return converter(stringvalue);
	        };
	        return ComponentOptions.buildOption(ComponentOptionsType.LIST, loadOption, optionArgs);
	    };
	    ComponentOptions.buildObjectOption = function (optionArgs) {
	        var loadOption = function (element, name, option) {
	            var keys = _.keys(optionArgs.subOptions);
	            var scopedOptions = {};
	            var scopedValues = {};
	            for (var i = 0; i < keys.length; i++) {
	                var key = keys[i];
	                var scopedkey = ComponentOptions.mergeCamelCase(name, key);
	                scopedOptions[scopedkey] = optionArgs.subOptions[key];
	            }
	            ComponentOptions.initOptions(element, scopedOptions, scopedValues);
	            var resultValues = {};
	            var resultFound = false;
	            for (var i = 0; i < keys.length; i++) {
	                var key = keys[i];
	                var scopedkey = ComponentOptions.mergeCamelCase(name, key);
	                if (scopedValues[scopedkey] != null) {
	                    resultValues[key] = scopedValues[scopedkey];
	                    resultFound = true;
	                }
	            }
	            return resultFound ? resultValues : null;
	        };
	        return ComponentOptions.buildOption(ComponentOptionsType.OBJECT, loadOption, optionArgs);
	    };
	    ComponentOptions.buildOption = function (type, load, optionArg) {
	        if (optionArg === void 0) { optionArg = {}; }
	        var option = optionArg;
	        option.type = type;
	        option.load = load;
	        return option;
	    };
	    ComponentOptions.attrNameFromName = function (name, optionArgs) {
	        if (optionArgs && optionArgs.attrName) {
	            return optionArgs.attrName;
	        }
	        if (name) {
	            return 'data-' + ComponentOptions.camelCaseToHyphen(name);
	        }
	        return name;
	    };
	    ComponentOptions.camelCaseToHyphen = function (name) {
	        return name.replace(camelCaseToHyphenRegex, '-$1$2').toLowerCase();
	    };
	    ComponentOptions.mergeCamelCase = function (parent, name) {
	        return parent + name.substr(0, 1).toUpperCase() + name.substr(1);
	    };
	    ComponentOptions.initComponentOptions = function (element, component, values) {
	        return ComponentOptions.initOptions(element, component.options, values, component.ID);
	    };
	    ComponentOptions.initOptions = function (element, options, values, componentID) {
	        var logger = new Logger_1.Logger(this);
	        if (values == null) {
	            values = {};
	        }
	        var names = _.keys(options);
	        for (var i = 0; i < names.length; i++) {
	            var name_1 = names[i];
	            var optionDefinition = options[name_1];
	            var value = void 0;
	            var loadFromAttribute = optionDefinition.load;
	            if (loadFromAttribute != null) {
	                value = loadFromAttribute(element, name_1, optionDefinition);
	                if (value && optionDefinition.deprecated) {
	                    logger.warn(componentID + '.' + name_1 + ' : ' + optionDefinition.deprecated);
	                }
	            }
	            if (Utils_1.Utils.isNullOrUndefined(value) && values[name_1] != undefined) {
	                value = values[name_1];
	            }
	            if (value == null && values[name_1] == undefined) {
	                if (optionDefinition.defaultValue != null) {
	                    if (optionDefinition.type == ComponentOptionsType.LIST) {
	                        value = _.extend([], optionDefinition.defaultValue);
	                    }
	                    else if (optionDefinition.type == ComponentOptionsType.OBJECT) {
	                        value = _.extend({}, optionDefinition.defaultValue);
	                    }
	                    else {
	                        value = optionDefinition.defaultValue;
	                    }
	                }
	                else if (optionDefinition.defaultFunction != null) {
	                    value = optionDefinition.defaultFunction(element);
	                }
	            }
	            if (value != null) {
	                if (optionDefinition.validator) {
	                    var isValid = optionDefinition.validator(value);
	                    if (!isValid) {
	                        logger.warn(componentID + " ." + name_1 + " has invalid value :  " + value);
	                        if (optionDefinition.required) {
	                            logger.error(componentID + " ." + name_1 + " is required and has an invalid value : " + value + ". ***THIS COMPONENT WILL NOT WORK***");
	                        }
	                        delete values[name_1];
	                        continue;
	                    }
	                }
	                if (optionDefinition.type == ComponentOptionsType.OBJECT && values[name_1] != null) {
	                    values[name_1] = _.extend(values[name_1], value);
	                }
	                else if (optionDefinition.type == ComponentOptionsType.LOCALIZED_STRING) {
	                    values[name_1] = Strings_1.l(value);
	                }
	                else {
	                    values[name_1] = value;
	                }
	            }
	        }
	        for (var i = 0; i < names.length; i++) {
	            var name_2 = names[i];
	            var optionDefinition = options[name_2];
	            if (optionDefinition.postProcessing) {
	                values[name_2] = optionDefinition.postProcessing(values[name_2], values);
	            }
	        }
	        return values;
	    };
	    ComponentOptions.loadStringOption = function (element, name, option) {
	        return element.getAttribute(ComponentOptions.attrNameFromName(name, option)) || ComponentOptions.getAttributeFromAlias(element, option);
	    };
	    ComponentOptions.loadFieldOption = function (element, name, option) {
	        var field = ComponentOptions.loadStringOption(element, name, option);
	        Assert_1.Assert.check(!Utils_1.Utils.isNonEmptyString(field) || Utils_1.Utils.isCoveoField(field), field + ' is not a valid field');
	        return field;
	    };
	    ComponentOptions.loadFieldsOption = function (element, name, option) {
	        var fieldsAttr = ComponentOptions.loadStringOption(element, name, option);
	        if (fieldsAttr == null) {
	            return null;
	        }
	        var fields = fieldsAttr.split(fieldsSeperator);
	        _.each(fields, function (field) {
	            Assert_1.Assert.check(Utils_1.Utils.isCoveoField(field), field + ' is not a valid field');
	        });
	        return fields;
	    };
	    ComponentOptions.loadLocalizedStringOption = function (element, name, option) {
	        var attributeValue = ComponentOptions.loadStringOption(element, name, option);
	        var locale = String['locale'] || String['defaultLocale'];
	        if (locale != null && attributeValue != null) {
	            var localeParts_1 = locale.toLowerCase().split('-');
	            var locales = _.map(localeParts_1, function (part, i) { return localeParts_1.slice(0, i + 1).join('-'); });
	            var localizers = attributeValue.match(localizer);
	            if (localizers != null) {
	                for (var i = 0; i < localizers.length; i++) {
	                    var groups = localizer.exec(localizers[i]);
	                    if (groups != null) {
	                        var lang = groups[1].toLowerCase();
	                        if (_.contains(locales, lang)) {
	                            return groups[2].replace(/^\s+|\s+$/g, '');
	                        }
	                    }
	                }
	            }
	            return attributeValue != null ? attributeValue.toLocaleString() : null;
	        }
	        return attributeValue;
	    };
	    ComponentOptions.loadNumberOption = function (element, name, option) {
	        var attributeValue = ComponentOptions.loadStringOption(element, name, option);
	        if (attributeValue == null) {
	            return null;
	        }
	        var numberValue = option.float === true ? Utils_1.Utils.parseFloatIfNotUndefined(attributeValue) : Utils_1.Utils.parseIntIfNotUndefined(attributeValue);
	        if (option.min != null && option.min > numberValue) {
	            numberValue = option.min;
	        }
	        if (option.max != null && option.max < numberValue) {
	            numberValue = option.max;
	        }
	        return numberValue;
	    };
	    ComponentOptions.loadBooleanOption = function (element, name, option) {
	        return Utils_1.Utils.parseBooleanIfNotUndefined(ComponentOptions.loadStringOption(element, name, option));
	    };
	    ComponentOptions.loadListOption = function (element, name, option) {
	        var separator = option.separator || /\s*,\s*/;
	        var attributeValue = ComponentOptions.loadStringOption(element, name, option);
	        return Utils_1.Utils.isNonEmptyString(attributeValue) ? attributeValue.split(separator) : null;
	    };
	    ComponentOptions.loadEnumOption = function (element, name, option, _enum) {
	        var enumAsString = ComponentOptions.loadStringOption(element, name, option);
	        return enumAsString != null ? _enum[enumAsString] : null;
	    };
	    ComponentOptions.loadSelectorOption = function (element, name, option, doc) {
	        if (doc === void 0) { doc = document; }
	        var attributeValue = ComponentOptions.loadStringOption(element, name, option);
	        return Utils_1.Utils.isNonEmptyString(attributeValue) ? doc.querySelector(attributeValue) : null;
	    };
	    ComponentOptions.loadChildHtmlElementOption = function (element, name, option, doc) {
	        if (doc === void 0) { doc = document; }
	        var htmlElement;
	        // Attribute: selector
	        var selectorAttr = option.selectorAttr || ComponentOptions.attrNameFromName(name, option) + '-selector';
	        var selector = element.getAttribute(selectorAttr) || ComponentOptions.getAttributeFromAlias(element, option);
	        if (selector != null) {
	            htmlElement = doc.body.querySelector(selector);
	        }
	        // Child
	        if (htmlElement == null) {
	            var childSelector = option.childSelector;
	            if (childSelector == null) {
	                childSelector = '.' + name;
	            }
	            htmlElement = ComponentOptions.loadChildHtmlElementFromSelector(element, childSelector);
	        }
	        return htmlElement;
	    };
	    ComponentOptions.loadChildHtmlElementFromSelector = function (element, selector) {
	        Assert_1.Assert.isNonEmptyString(selector);
	        if (Dom_1.$$(element).is(selector)) {
	            return element;
	        }
	        return Dom_1.$$(element).find(selector);
	    };
	    ComponentOptions.loadChildrenHtmlElementFromSelector = function (element, selector) {
	        Assert_1.Assert.isNonEmptyString(selector);
	        return Dom_1.$$(element).findAll(selector);
	    };
	    ComponentOptions.loadTemplateOption = function (element, name, option, doc) {
	        if (doc === void 0) { doc = document; }
	        var template;
	        // Attribute: template selector
	        var selectorAttr = option.selectorAttr || ComponentOptions.attrNameFromName(name, option) + '-selector';
	        var selector = element.getAttribute(selectorAttr) || ComponentOptions.getAttributeFromAlias(element, option);
	        if (selector != null) {
	            var templateElement = doc.querySelector(selector);
	            if (templateElement != null) {
	                template = ComponentOptions.createResultTemplateFromElement(templateElement);
	            }
	        }
	        // Attribute: template id
	        if (template == null) {
	            var idAttr = option.idAttr || ComponentOptions.attrNameFromName(name, option) + '-id';
	            var id = element.getAttribute(idAttr) || ComponentOptions.getAttributeFromAlias(element, option);
	            if (id != null) {
	                template = ComponentOptions.loadResultTemplateFromId(id);
	            }
	        }
	        // Child
	        if (template == null) {
	            var childSelector = option.childSelector;
	            if (childSelector == null) {
	                childSelector = '.' + name.replace(/([A-Z])/g, '-$1').toLowerCase();
	            }
	            template = ComponentOptions.loadChildrenResultTemplateFromSelector(element, childSelector);
	        }
	        return template;
	    };
	    ComponentOptions.loadResultTemplateFromId = function (templateId) {
	        return Utils_1.Utils.isNonEmptyString(templateId) ? TemplateCache_1.TemplateCache.getTemplate(templateId) : null;
	    };
	    ComponentOptions.loadChildrenResultTemplateFromSelector = function (element, selector) {
	        var foundElements = ComponentOptions.loadChildrenHtmlElementFromSelector(element, selector);
	        if (foundElements.length > 0) {
	            return new TemplateList_1.TemplateList(_.compact(_.map(foundElements, function (element) { return ComponentOptions.createResultTemplateFromElement(element); })));
	        }
	        return null;
	    };
	    ComponentOptions.findParentScrolling = function (element, doc) {
	        if (doc === void 0) { doc = document; }
	        while (element != doc && element != null) {
	            if (ComponentOptions.isElementScrollable(element)) {
	                if (element.tagName.toLowerCase() !== 'body') {
	                    return element;
	                }
	                return window;
	            }
	            element = element.parentElement;
	        }
	        return window;
	    };
	    ComponentOptions.isElementScrollable = function (element) {
	        return Dom_1.$$(element).css('overflow-y') == 'scroll' || element.style.overflowY == 'scroll';
	    };
	    ComponentOptions.getAttributeFromAlias = function (element, option) {
	        if (option.alias) {
	            return element.getAttribute(ComponentOptions.attrNameFromName(option.alias));
	        }
	    };
	    ComponentOptions.createResultTemplateFromElement = function (element) {
	        Assert_1.Assert.exists(element);
	        var type = element.getAttribute('type');
	        var mimeTypes = 'You must specify the type of template. Valid values are :' +
	            ' ' + UnderscoreTemplate_1.UnderscoreTemplate.mimeTypes.toString() +
	            ' ' + HtmlTemplate_1.HtmlTemplate.mimeTypes.toString();
	        Assert_1.Assert.check(Utils_1.Utils.isNonEmptyString(type), mimeTypes);
	        if (_.indexOf(UnderscoreTemplate_1.UnderscoreTemplate.mimeTypes, type) != -1) {
	            return UnderscoreTemplate_1.UnderscoreTemplate.create(element);
	        }
	        else if (_.indexOf(HtmlTemplate_1.HtmlTemplate.mimeTypes, type) != -1) {
	            return new HtmlTemplate_1.HtmlTemplate(element);
	        }
	        else {
	            Assert_1.Assert.fail('Cannot guess template type from attribute: ' + type + '. Valid values are ' + mimeTypes);
	            return undefined;
	        }
	    };
	    return ComponentOptions;
	}());
	exports.ComponentOptions = ComponentOptions;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Template_1 = __webpack_require__(99);
	var Assert_1 = __webpack_require__(16);
	var UnderscoreTemplate_1 = __webpack_require__(100);
	var HtmlTemplate_1 = __webpack_require__(101);
	/**
	 * Holds a reference to all template available in the framework
	 */
	var TemplateCache = (function () {
	    function TemplateCache() {
	    }
	    /**
	     * Register a new template in the framework, which will be available to render any results.
	     * @param name
	     * @param template
	     * @param publicTemplate
	     * @param defaultTemplate
	     */
	    TemplateCache.registerTemplate = function (name, template, publicTemplate, defaultTemplate) {
	        if (publicTemplate === void 0) { publicTemplate = true; }
	        if (defaultTemplate === void 0) { defaultTemplate = false; }
	        Assert_1.Assert.isNonEmptyString(name);
	        Assert_1.Assert.exists(template);
	        if (!(template instanceof Template_1.Template)) {
	            template = new Template_1.Template(template);
	        }
	        if (template.name == null) {
	            template.name = name;
	        }
	        TemplateCache.templates[name] = template;
	        if (publicTemplate && !_.contains(TemplateCache.templateNames, name)) {
	            TemplateCache.templateNames.push(name);
	        }
	        if (defaultTemplate) {
	            TemplateCache.defaultTemplates[name] = template;
	        }
	    };
	    /**
	     * Return a template by its name/ID.
	     * @param name
	     * @returns {Template}
	     */
	    TemplateCache.getTemplate = function (name) {
	        Assert_1.Assert.exists(TemplateCache.templates[name]);
	        return TemplateCache.templates[name];
	    };
	    /**
	     * Get all templates currently registered in the framework.
	     * @returns {{}}
	     */
	    TemplateCache.getTemplates = function () {
	        return TemplateCache.templates;
	    };
	    /**
	     * Get all templates name currently registered in the framework.
	     * @returns {string[]}
	     */
	    TemplateCache.getTemplateNames = function () {
	        return TemplateCache.templateNames;
	    };
	    /**
	     * Get all the "default" templates in the framework.
	     * @returns {string[]}
	     */
	    TemplateCache.getDefaultTemplates = function () {
	        return _.keys(TemplateCache.defaultTemplates);
	    };
	    TemplateCache.getDefaultTemplate = function (name) {
	        Assert_1.Assert.exists(TemplateCache.defaultTemplates[name]);
	        return TemplateCache.defaultTemplates[name];
	    };
	    TemplateCache.scanAndRegisterTemplates = function () {
	        // Here we take care not to scan for templates for which the base library
	        // is not available. Case in point: someone was using the JS UI on a page
	        // that was also using Handlebars, but our code was initialized before
	        // the Handlebars library (loaded through AMD).
	        if (UnderscoreTemplate_1.UnderscoreTemplate.isLibraryAvailable()) {
	            TemplateCache.scanAndRegisterUnderscoreTemplates();
	        }
	        TemplateCache.scanAndRegisterHtmlTemplates();
	    };
	    TemplateCache.scanAndRegisterUnderscoreTemplates = function () {
	        _.each(UnderscoreTemplate_1.UnderscoreTemplate.mimeTypes, function (type) {
	            var scriptList = document.querySelectorAll("script[id][type='" + type + "']");
	            var i = scriptList.length;
	            var arr = new Array(i);
	            while (i--) {
	                arr[i] = scriptList.item(i);
	            }
	            _.each(arr, function (elem) {
	                var template = new UnderscoreTemplate_1.UnderscoreTemplate(elem);
	                TemplateCache.registerTemplate(elem.getAttribute('id'), template);
	            });
	        });
	    };
	    TemplateCache.scanAndRegisterHtmlTemplates = function () {
	        _.each(HtmlTemplate_1.HtmlTemplate.mimeTypes, function (type) {
	            var scriptList = document.querySelectorAll("script[id][type='" + type + "']");
	            var i = scriptList.length;
	            var arr = new Array(i);
	            while (i--) {
	                arr[i] = scriptList.item(i);
	            }
	            _.each(arr, function (elem) {
	                var template = new HtmlTemplate_1.HtmlTemplate(elem);
	                TemplateCache.registerTemplate(elem.getAttribute('id'), template);
	            });
	        });
	    };
	    TemplateCache.templates = {};
	    TemplateCache.templateNames = [];
	    TemplateCache.defaultTemplates = {};
	    return TemplateCache;
	}());
	exports.TemplateCache = TemplateCache;
	document.addEventListener('DOMContentLoaded', function () {
	    TemplateCache.scanAndRegisterTemplates();
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Logger_1 = __webpack_require__(15);
	var StringUtils_1 = __webpack_require__(60);
	var Initialization_1 = __webpack_require__(94);
	var Dom_1 = __webpack_require__(56);
	var BaseComponent_1 = __webpack_require__(75);
	var Template = (function () {
	    function Template(dataToString, condition) {
	        this.dataToString = dataToString;
	        this.condition = condition;
	        this.logger = new Logger_1.Logger(this);
	    }
	    Template.getFieldFromString = function (text) {
	        var fields = _.map(StringUtils_1.StringUtils.match(text, /(?:(?!\b@)@([a-z0-9]+(?:\.[a-z0-9]+)*\b))|\braw.([a-z0-9]+)|\braw\['([^']+)'\]|\braw\['([^']+)'\]/gi), function (field) {
	            return field[1] || field[2] || field[3] || field[4] || null;
	        });
	        _.each(Initialization_1.Initialization.getListOfRegisteredComponents(), function (componentId) {
	            var componentFields = Initialization_1.Initialization.getRegisteredComponent(componentId).fields;
	            if (componentFields != null && text.indexOf(BaseComponent_1.BaseComponent.computeCssClassNameForType(componentId)) != -1) {
	                fields = fields.concat(componentFields);
	            }
	        });
	        return fields;
	    };
	    Template.prototype.instantiateToString = function (object, checkCondition) {
	        if (checkCondition === void 0) { checkCondition = true; }
	        if (this.dataToString && (!checkCondition || this.condition == null || this.condition(object))) {
	            return this.dataToString(object);
	        }
	        return null;
	    };
	    Template.prototype.instantiateToElement = function (object, checkCondition) {
	        if (checkCondition === void 0) { checkCondition = true; }
	        var html = this.instantiateToString(object, checkCondition);
	        if (html != null) {
	            var element = Dom_1.htmlToDom(html);
	            this.logger.trace('Instantiated result template', object, element);
	            element['template'] = this;
	            return element;
	        }
	        return null;
	    };
	    Template.prototype.toHtmlElement = function () {
	        return null;
	    };
	    Template.prototype.getFields = function () {
	        return [];
	    };
	    Template.prototype.getType = function () {
	        return 'Template';
	    };
	    return Template;
	}());
	exports.Template = Template;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Template_1 = __webpack_require__(99);
	var Assert_1 = __webpack_require__(16);
	var ComponentOptions_1 = __webpack_require__(97);
	var Utils_1 = __webpack_require__(17);
	var Dom_1 = __webpack_require__(56);
	_.templateSettings = {
	    evaluate: /(?:<%|{{)([\s\S]+?)(?:%>|}})/g,
	    interpolate: /(?:<%|{{)=([\s\S]+?)(?:%>|}})/g,
	    escape: /(?:<%|{{)-([\s\S]+?)(?:%>|}})/g
	};
	var UnderscoreTemplate = (function (_super) {
	    __extends(UnderscoreTemplate, _super);
	    function UnderscoreTemplate(element) {
	        var _this = this;
	        _super.call(this);
	        this.element = element;
	        Assert_1.Assert.exists(element);
	        var templateString = element.innerHTML;
	        this.template = _.template(templateString);
	        var condition = Dom_1.$$(element).getAttribute('data-condition');
	        if (condition != null) {
	            this.condition = new Function('obj', 'with(obj||{}){return ' + condition + '}');
	        }
	        this.dataToString = function (object) {
	            var extended = _.extend({}, object, UnderscoreTemplate.templateHelpers);
	            return _this.template(extended);
	        };
	        this.fields = Template_1.Template.getFieldFromString(templateString + ' ' + condition);
	        var additionalFields = ComponentOptions_1.ComponentOptions.loadFieldsOption(element, 'fields', { includeInResults: true });
	        if (additionalFields != null) {
	            // remove the @
	            this.fields = this.fields.concat(_.map(additionalFields, function (field) { return field.substr(1); }));
	        }
	    }
	    UnderscoreTemplate.prototype.toHtmlElement = function () {
	        var script = Dom_1.$$('script');
	        script.setAttribute('type', _.first(UnderscoreTemplate.mimeTypes));
	        script.setAttribute('data-condition', $(this.element).data('condition'));
	        script.text(this.element.innerHTML);
	        return script.el;
	    };
	    UnderscoreTemplate.prototype.getType = function () {
	        return 'UnderscoreTemplate';
	    };
	    UnderscoreTemplate.create = function (element) {
	        Assert_1.Assert.exists(element);
	        return new UnderscoreTemplate(element);
	    };
	    UnderscoreTemplate.fromString = function (template, condition) {
	        var script = document.createElement('script');
	        script.text = template;
	        if (condition != null) {
	            Dom_1.$$(script).setAttribute('data-condition', condition);
	        }
	        Dom_1.$$(script).setAttribute('type', UnderscoreTemplate.mimeTypes[0]);
	        return new UnderscoreTemplate(script);
	    };
	    UnderscoreTemplate.prototype.getFields = function () {
	        return this.fields;
	    };
	    UnderscoreTemplate.registerTemplateHelper = function (helperName, helper) {
	        UnderscoreTemplate.templateHelpers[helperName] = helper;
	    };
	    UnderscoreTemplate.isLibraryAvailable = function () {
	        return Utils_1.Utils.exists(window['_']);
	    };
	    UnderscoreTemplate.templateHelpers = {};
	    UnderscoreTemplate.mimeTypes = [
	        'text/underscore',
	        'text/underscore-template',
	        'text/x-underscore',
	        'text/x-underscore-template'
	    ];
	    return UnderscoreTemplate;
	}(Template_1.Template));
	exports.UnderscoreTemplate = UnderscoreTemplate;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Template_1 = __webpack_require__(99);
	var ComponentOptions_1 = __webpack_require__(97);
	var Assert_1 = __webpack_require__(16);
	var Dom_1 = __webpack_require__(56);
	var HtmlTemplate = (function (_super) {
	    __extends(HtmlTemplate, _super);
	    function HtmlTemplate(element) {
	        _super.call(this, function () {
	            return element.innerHTML;
	        });
	        this.element = element;
	        var condition = Dom_1.$$(element).getAttribute('data-condition');
	        if (condition != null) {
	            // Allows to add quotes in data-condition on the templates
	            condition = condition.toString().replace(/&quot;/g, '"');
	            this.condition = new Function('obj', 'with(obj||{}){return ' + condition + '}');
	        }
	        this.fields = Template_1.Template.getFieldFromString(element.innerHTML + ' ' + condition);
	        var additionalFields = ComponentOptions_1.ComponentOptions.loadFieldsOption(element, 'fields', { includeInResults: true });
	        if (additionalFields != null) {
	            // remove the @
	            this.fields = this.fields.concat(_.map(additionalFields, function (field) { return field.substr(1); }));
	        }
	    }
	    HtmlTemplate.prototype.toHtmlElement = function () {
	        var script = Dom_1.$$('script');
	        script.setAttribute('type', _.first(HtmlTemplate.mimeTypes));
	        script.setAttribute('data-condition', Dom_1.$$(this.element).getAttribute('data-condition'));
	        script.text(this.element.innerHTML);
	        return script.el;
	    };
	    HtmlTemplate.prototype.getType = function () {
	        return 'HtmlTemplate';
	    };
	    HtmlTemplate.prototype.getFields = function () {
	        return this.fields;
	    };
	    HtmlTemplate.create = function (element) {
	        Assert_1.Assert.exists(element);
	        return new HtmlTemplate(element);
	    };
	    HtmlTemplate.fromString = function (template, condition) {
	        var script = document.createElement('script');
	        script.text = template;
	        if (condition != null) {
	            Dom_1.$$(script).setAttribute('data-condition', condition);
	        }
	        Dom_1.$$(script).setAttribute('type', HtmlTemplate.mimeTypes[0]);
	        return new HtmlTemplate(script);
	    };
	    HtmlTemplate.mimeTypes = [
	        'text/html'
	    ];
	    return HtmlTemplate;
	}(Template_1.Template));
	exports.HtmlTemplate = HtmlTemplate;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Template_1 = __webpack_require__(99);
	var DefaultResultTemplate_1 = __webpack_require__(103);
	var TemplateList = (function (_super) {
	    __extends(TemplateList, _super);
	    function TemplateList(templates) {
	        _super.call(this);
	        this.templates = templates;
	    }
	    TemplateList.prototype.instantiateToString = function (object, checkCondition) {
	        for (var i = 0; i < this.templates.length; i++) {
	            var result = this.templates[i].instantiateToString(object, checkCondition);
	            if (result != null) {
	                return result;
	            }
	        }
	        return new DefaultResultTemplate_1.DefaultResultTemplate().instantiateToString(object);
	    };
	    TemplateList.prototype.instantiateToElement = function (object, checkCondition) {
	        if (checkCondition === void 0) { checkCondition = true; }
	        for (var i = 0; i < this.templates.length; i++) {
	            var element = this.templates[i].instantiateToElement(object, checkCondition);
	            if (element != null) {
	                return element;
	            }
	        }
	        return new DefaultResultTemplate_1.DefaultResultTemplate().instantiateToElement(object);
	    };
	    TemplateList.prototype.getFields = function () {
	        return _.reduce(this.templates, function (fields, template) { return fields.concat(template.getFields()); }, []);
	    };
	    TemplateList.prototype.getType = function () {
	        return 'TemplateList';
	    };
	    return TemplateList;
	}(Template_1.Template));
	exports.TemplateList = TemplateList;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Template_1 = __webpack_require__(99);
	var UnderscoreTemplate_1 = __webpack_require__(100);
	var TemplateCache_1 = __webpack_require__(98);
	var Assert_1 = __webpack_require__(16);
	var DefaultResultTemplate = (function (_super) {
	    __extends(DefaultResultTemplate, _super);
	    function DefaultResultTemplate() {
	        _super.call(this);
	    }
	    DefaultResultTemplate.prototype.instantiateToString = function (queryResult) {
	        Assert_1.Assert.exists(queryResult);
	        queryResult = _.extend({}, queryResult, UnderscoreTemplate_1.UnderscoreTemplate.templateHelpers);
	        var defaultTemplates = _.map(TemplateCache_1.TemplateCache.getDefaultTemplates(), function (name) { return TemplateCache_1.TemplateCache.getTemplate(name); });
	        // We want to put templates with conditions first
	        defaultTemplates.sort(function (a, b) {
	            if (a.condition == null && b.condition != null) {
	                return 1;
	            }
	            else if (a.condition != null && b.condition == null) {
	                return -1;
	            }
	            return 0;
	        });
	        for (var i = 0; i < defaultTemplates.length; i++) {
	            var result = defaultTemplates[i].instantiateToString(queryResult);
	            if (result != null) {
	                return result;
	            }
	        }
	        return _.template('<div>' +
	            '<div class="coveo-title"><a class="CoveoResultLink"><%= title?Coveo.TemplateHelpers.getHelper("highlight").call(title, titleHighlights):clickUri %></a></div>' +
	            '<% if(excerpt){ %><div class="coveo-excerpt"><%= Coveo.TemplateHelpers.getHelper("highlight").call(excerpt, excerptHighlights) %></div><% } %>' +
	            '<table class="CoveoFieldTable"><%= Coveo.TemplateHelpers.getHelper("highlight").call() %></table>' +
	            '</div>')(queryResult);
	    };
	    DefaultResultTemplate.prototype.instantiateToElement = function (queryResult) {
	        var div = document.createElement('div');
	        div.innerHTML = this.instantiateToString(queryResult);
	        return div;
	    };
	    DefaultResultTemplate.prototype.getFields = function () {
	        var defaultTemplates = _.map(TemplateCache_1.TemplateCache.getDefaultTemplates(), function (name) { return TemplateCache_1.TemplateCache.getTemplate(name); });
	        return _.flatten(_.map(defaultTemplates, function (template) { return template.getFields(); }));
	    };
	    DefaultResultTemplate.prototype.getType = function () {
	        return 'DefaultResultTemplate';
	    };
	    return DefaultResultTemplate;
	}(Template_1.Template));
	exports.DefaultResultTemplate = DefaultResultTemplate;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var es6_promise_1 = __webpack_require__(6);
	var NoopAnalyticsClient = (function () {
	    function NoopAnalyticsClient() {
	        this.isContextual = false;
	    }
	    NoopAnalyticsClient.prototype.isActivated = function () {
	        return false;
	    };
	    NoopAnalyticsClient.prototype.getCurrentEventCause = function () {
	        return null;
	    };
	    NoopAnalyticsClient.prototype.getCurrentEventMeta = function () {
	        return {};
	    };
	    NoopAnalyticsClient.prototype.logSearchEvent = function (actionCause, meta) {
	    };
	    NoopAnalyticsClient.prototype.logSearchAsYouType = function (actionCause, meta) {
	    };
	    NoopAnalyticsClient.prototype.logClickEvent = function (actionCause, meta, result, element) {
	    };
	    NoopAnalyticsClient.prototype.logCustomEvent = function (actionCause, meta, element) {
	    };
	    NoopAnalyticsClient.prototype.getTopQueries = function (params) {
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            resolve([]);
	        });
	    };
	    NoopAnalyticsClient.prototype.getCurrentVisitIdPromise = function () {
	        return new es6_promise_1.Promise(function (resolve, reject) {
	            resolve(null);
	        });
	    };
	    NoopAnalyticsClient.prototype.getCurrentVisitId = function () {
	        return null;
	    };
	    NoopAnalyticsClient.prototype.sendAllPendingEvents = function () {
	    };
	    NoopAnalyticsClient.prototype.cancelAllPendingEvents = function () {
	    };
	    NoopAnalyticsClient.prototype.warnAboutSearchEvent = function () {
	    };
	    NoopAnalyticsClient.prototype.getPendingSearchEvent = function () {
	        return null;
	    };
	    return NoopAnalyticsClient;
	}());
	exports.NoopAnalyticsClient = NoopAnalyticsClient;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../../node_modules/modal-box/bin/ModalBox.d.ts" />
	var ComponentOptions_1 = __webpack_require__(97);
	var LocalStorageUtils_1 = __webpack_require__(68);
	var QueryEvents_1 = __webpack_require__(46);
	var ResultListEvents_1 = __webpack_require__(47);
	var DebugEvents_1 = __webpack_require__(41);
	var Dom_1 = __webpack_require__(56);
	var StringUtils_1 = __webpack_require__(60);
	var SearchEndpoint_1 = __webpack_require__(11);
	var Template_1 = __webpack_require__(99);
	var es6_promise_1 = __webpack_require__(6);
	var RootComponent_1 = __webpack_require__(74);
	var BaseComponent_1 = __webpack_require__(75);
	var ExternalModulesShim_1 = __webpack_require__(24);
	var Globalize = __webpack_require__(4);
	var KeyboardUtils_1 = __webpack_require__(67);
	var InitializationEvents_1 = __webpack_require__(43);
	var Debug = (function (_super) {
	    __extends(Debug, _super);
	    function Debug(element, queryController, options, modalBox) {
	        var _this = this;
	        if (modalBox === void 0) { modalBox = ExternalModulesShim_1.ModalBox; }
	        _super.call(this, element, Debug.ID);
	        this.element = element;
	        this.queryController = queryController;
	        this.options = options;
	        this.modalBox = modalBox;
	        this.debug = false;
	        this.highlightRecommendation = false;
	        this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, Debug, options);
	        Dom_1.$$(this.element).on(QueryEvents_1.QueryEvents.buildingQuery, function (e, args) {
	            args.queryBuilder.enableDebug = _this.debug || args.queryBuilder.enableDebug;
	        });
	        Dom_1.$$(this.element).on(ResultListEvents_1.ResultListEvents.newResultDisplayed, function (e, args) { return _this.handleNewResultDisplayed(args); });
	        Dom_1.$$(this.element).on(DebugEvents_1.DebugEvents.showDebugPanel, function (e, args) {
	            _this.handleShowDebugPanel(args);
	        });
	        Dom_1.$$(this.element).on(InitializationEvents_1.InitializationEvents.nuke, function () {
	            _this.unbindEscapeEvent();
	        });
	        this.localStorageDebug = new LocalStorageUtils_1.LocalStorageUtils('DebugPanel');
	        this.collapsedSections = this.localStorageDebug.load() || [];
	    }
	    Debug.prototype.showDebugPanel = function (builder) {
	        var _this = this;
	        var build = builder();
	        var modalbox = this.modalBox.open(build.body, {
	            title: '',
	            className: 'coveo-debug',
	            titleClose: true,
	            overlayClose: true,
	            validation: function () {
	                _this.unbindEscapeEvent();
	                return true;
	            }
	        });
	        this.bindEscapeEvent();
	        var title = Dom_1.$$(modalbox.wrapper).find('.coveo-title');
	        var search = this.buildSearchBox(build.body);
	        var downloadLink = Dom_1.$$('a', { download: 'debug.json', 'href': this.downloadHref(build.json) }, 'Download');
	        var bodyBuilder = function (results) {
	            var build = builder();
	            downloadLink.el.setAttribute('href', _this.downloadHref(build.json));
	            return build.body;
	        };
	        title.appendChild(this.buildEnabledHighlightRecommendation());
	        title.appendChild(this.buildEnableDebugCheckbox(build.body, search, bodyBuilder));
	        title.appendChild(search);
	        title.appendChild(downloadLink.el);
	    };
	    Debug.prototype.handleEscapeEvent = function (e) {
	        if (e.keyCode == KeyboardUtils_1.KEYBOARD.ESCAPE) {
	            if (this.modalBox) {
	                this.modalBox.close();
	            }
	        }
	    };
	    Debug.prototype.bindEscapeEvent = function () {
	        this.boundEscapeKey = this.handleEscapeEvent.bind(this);
	        Dom_1.$$(document.body).on('keyup', this.boundEscapeKey);
	    };
	    Debug.prototype.unbindEscapeEvent = function () {
	        if (this.boundEscapeKey) {
	            Dom_1.$$(document.body).off('keyup', this.boundEscapeKey);
	        }
	        this.boundEscapeKey = null;
	    };
	    Debug.prototype.handleShowDebugPanel = function (info) {
	        var _this = this;
	        if (this.stackDebug == null) {
	            setTimeout(function () {
	                var stackDebug = _this.stackDebug;
	                _this.showDebugPanel(function () { return _this.buildStackPanel(stackDebug); });
	                _this.stackDebug = null;
	            });
	            this.stackDebug = {};
	        }
	        _.extend(this.stackDebug, info);
	    };
	    Debug.prototype.handleNewResultDisplayed = function (args) {
	        var _this = this;
	        if (args.item != null) {
	            if (this.highlightRecommendation && args.result.isRecommendation) {
	                Dom_1.$$(args.item).addClass('coveo-is-recommendation');
	            }
	            Dom_1.$$(args.item).on('dblclick', function (e) {
	                _this.handleResultDoubleClick(e, args);
	            });
	        }
	    };
	    Debug.prototype.handleResultDoubleClick = function (e, args) {
	        var _this = this;
	        if (e.altKey) {
	            var index_1 = args.result.index;
	            var findResult_1 = function (results) { return results != null ? _.find(results.results, function (result) { return result.index == index_1; }) : args.result; };
	            var template = args.item['template'];
	            var debugPanel = {
	                result: findResult_1,
	                fields: function (results) { return _this.buildFieldsSection(findResult_1(results)); },
	                rankingInfo: function (results) { return _this.buildRankingInfoSection(findResult_1(results)); },
	                template: this.templateToJson(template),
	            };
	            this.handleShowDebugPanel(debugPanel);
	        }
	    };
	    Debug.prototype.downloadHref = function (info) {
	        return 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(info));
	    };
	    Debug.prototype.buildStackPanel = function (stackDebug, results) {
	        var _this = this;
	        var body = Dom_1.Dom.createElement('div', { className: 'coveo-debug' });
	        var keys = _.pairs(_.keys(stackDebug));
	        keys = keys.sort(function (a, b) {
	            var indexA = _.indexOf(Debug.customOrder, a[1]);
	            var indexB = _.indexOf(Debug.customOrder, b[1]);
	            if (indexA != -1 && indexB != -1) {
	                return indexA - indexB;
	            }
	            if (indexA != -1) {
	                return -1;
	            }
	            if (indexB != -1) {
	                return 1;
	            }
	            return a[0] - b[0];
	        });
	        var json = {};
	        _.forEach(keys, function (key) {
	            var section = _this.buildSection(key[1]);
	            var build = _this.buildStackPanelSection(stackDebug[key[1]], results);
	            section.container.appendChild(build.section);
	            if (build.json != null) {
	                json[key[1]] = build.json;
	            }
	            body.appendChild(section.dom);
	        });
	        return { body: body, json: json };
	    };
	    Debug.prototype.buildStackPanelSection = function (value, results) {
	        if (value instanceof HTMLElement) {
	            return { section: value };
	        }
	        else if (_.isFunction(value)) {
	            return this.buildStackPanelSection(value(results), results);
	        }
	        var json = this.toJson(value);
	        return { section: this.buildProperty(json), json: json };
	    };
	    Debug.prototype.buildSearchBox = function (body) {
	        var _this = this;
	        var dom = Dom_1.Dom.createElement('div', { className: 'coveo-debug-search' }, '<input type=\'text\'/>');
	        dom.onclick = function (e) {
	            e.stopPropagation();
	        };
	        var lastSearch = '';
	        var input = dom.querySelector('input');
	        input.setAttribute('placeholder', 'Search in debug');
	        input.onkeyup = function (e) {
	            if (e == null || e.keyCode == 13) {
	                var value = input.value.toLowerCase();
	                if (lastSearch != value) {
	                    lastSearch = value;
	                    _this.search(value, body);
	                }
	            }
	        };
	        input.onchange = function () {
	            var value = input.value.toLowerCase();
	            if (lastSearch != value) {
	                lastSearch = value;
	                _this.search(value, body);
	            }
	        };
	        return dom;
	    };
	    Debug.prototype.search = function (value, body) {
	        var _this = this;
	        if (_.isEmpty(value)) {
	            Dom_1.$$(body).findAll('.coveo-search-match, .coveo-search-submatch').forEach(function (el) {
	                Dom_1.$$(el).removeClass('coveo-search-match, coveo-search-submatch');
	            });
	            Dom_1.$$(body).removeClass('coveo-searching');
	        }
	        else {
	            Dom_1.$$(body).addClass('coveo-searching-loading');
	            setTimeout(function () {
	                var rootProperties = Dom_1.$$(body).findAll('.coveo-section .coveo-section-container > .coveo-property');
	                _.each(rootProperties, function (element) {
	                    _this.findInProperty(element, value);
	                });
	                Dom_1.$$(body).addClass('coveo-searching');
	                Dom_1.$$(body).removeClass('coveo-searching-loading');
	            });
	        }
	    };
	    Debug.prototype.findInProperty = function (element, value) {
	        var _this = this;
	        var jElement = Dom_1.$$(element);
	        var match = element['label'].indexOf(value) != -1;
	        if (match) {
	            this.highlightSearch(element['labelDom'], value);
	        }
	        else {
	            this.removeHighlightSearch(element['labelDom']);
	        }
	        if (jElement.hasClass('coveo-property-object')) {
	            jElement.toggleClass('coveo-search-match', match);
	            var children = element['buildKeys']();
	            var submatch_1 = false;
	            _.each(children, function (child) {
	                submatch_1 = _this.findInProperty(child, value) || submatch_1;
	            });
	            jElement.toggleClass('coveo-search-submatch', submatch_1);
	            return match || submatch_1;
	        }
	        else {
	            if (element['value'].indexOf(value) != -1) {
	                this.highlightSearch(element['valueDom'], value);
	                match = true;
	            }
	            else {
	                this.removeHighlightSearch(element['valueDom']);
	            }
	            jElement.toggleClass('coveo-search-match', match);
	        }
	        return match;
	    };
	    Debug.prototype.buildEnableDebugCheckbox = function (body, search, bodyBuilder) {
	        var _this = this;
	        var dom = Dom_1.Dom.createElement('div', { className: 'coveo-enabled-debug' }, '<label>Enable query debug <input type=\'checkbox\'/></label>');
	        Dom_1.$$(dom).on('click', function (e) {
	            e.stopPropagation();
	        });
	        var checkbox = Dom_1.$$(dom).find('input');
	        if (this.debug) {
	            checkbox.setAttribute('checked', 'checked');
	        }
	        checkbox.onchange = function () {
	            _this.debug = !_this.debug;
	            Dom_1.$$(_this.element).one(QueryEvents_1.QueryEvents.querySuccess + ' ' + QueryEvents_1.QueryEvents.queryError, function (e, args) {
	                Dom_1.$$(body).removeClass('coveo-debug-loading');
	                Dom_1.$$(body).empty();
	                Dom_1.$$(bodyBuilder(args.results)).children().forEach(function (child) {
	                    body.appendChild(child);
	                });
	            });
	            _this.queryController.executeQuery({ closeModalBox: false });
	            Dom_1.$$(body).addClass('coveo-debug-loading');
	            var input = search.querySelector('input');
	            input.value = '';
	            input.onkeyup(null);
	        };
	        return dom;
	    };
	    Debug.prototype.buildEnabledHighlightRecommendation = function () {
	        var _this = this;
	        var dom = Dom_1.Dom.createElement('div', { className: 'coveo-enabled-highlight-recommendation' }, '<label>Highlight recommendation <input type=\'checkbox\'/></label>');
	        dom.onclick = function (e) {
	            e.stopPropagation();
	        };
	        var checkbox = Dom_1.$$(dom).find('input');
	        if (this.highlightRecommendation) {
	            checkbox.setAttribute('checked', 'checked');
	        }
	        checkbox.onchange = function () {
	            _this.highlightRecommendation = !_this.highlightRecommendation;
	            _this.queryController.executeQuery({ closeModalBox: false });
	        };
	        return dom;
	    };
	    Debug.prototype.buildSection = function (id) {
	        var _this = this;
	        var dom = Dom_1.Dom.createElement('div', { className: 'coveo-section coveo-' + id + '-section' });
	        var header = Dom_1.Dom.createElement('div', { className: 'coveo-section-header' });
	        Dom_1.$$(header).text(id);
	        dom.appendChild(header);
	        var container = Dom_1.Dom.createElement('div', { className: 'coveo-section-container' });
	        dom.appendChild(container);
	        if (_.contains(this.collapsedSections, id)) {
	            Dom_1.$$(dom).addClass('coveo-debug-collapsed');
	        }
	        header.onclick = function () {
	            Dom_1.$$(dom).toggleClass('coveo-debug-collapsed');
	            if (_.contains(_this.collapsedSections, id)) {
	                _this.collapsedSections = _.without(_this.collapsedSections, id);
	            }
	            else {
	                _this.collapsedSections.push(id);
	            }
	            _this.localStorageDebug.save(_this.collapsedSections);
	        };
	        return {
	            dom: dom,
	            header: header,
	            container: container
	        };
	    };
	    Debug.prototype.fetchFields = function () {
	        var _this = this;
	        if (this.fields == null) {
	            return this.queryController.getEndpoint().listFields().then(function (fields) {
	                _this.fields = {};
	                fields.forEach(function (field) {
	                    _this.fields[field.name] = field;
	                });
	                return _this.fields;
	            });
	        }
	        else {
	            return es6_promise_1.Promise.resolve(this.fields);
	        }
	    };
	    Debug.prototype.buildFieldsSection = function (result) {
	        return this.fetchFields()
	            .then(function (fieldDescriptions) {
	            var fields = {};
	            _.each(result.raw, function (value, key) {
	                var fieldDescription = fieldDescriptions['@' + key];
	                if (fieldDescription == null && key.match(/^sys/)) {
	                    fieldDescription = fieldDescriptions['@' + key.substr(3)];
	                }
	                if (fieldDescription == null) {
	                    fields['@' + key] = value;
	                }
	                else if (fieldDescription.fieldType == 'Date') {
	                    fields['@' + key] = new Date(value);
	                }
	                else if (fieldDescription.splitGroupByField) {
	                    fields['@' + key] = value.split(/\s*;\s*/);
	                }
	                else {
	                    fields['@' + key] = value;
	                }
	            });
	            return fields;
	        });
	    };
	    Debug.prototype.buildRankingInfoSection = function (result) {
	        return result.rankingInfo && this.parseRankingInfo(result.rankingInfo);
	    };
	    Debug.prototype.parseRankingInfo = function (value) {
	        var _this = this;
	        var rankingInfo = {};
	        var infos = value.match(/^(?:Document weights:\n((?:.)*?)\n)?\n(?:Terms weights:\n((?:.|\n)*))?Total weight: ([0-9]+)$/);
	        if (infos[1] != null) {
	            rankingInfo['Document weights'] = this.parseWeights(infos[1]);
	        }
	        if (infos[2] != null) {
	            var terms = StringUtils_1.StringUtils.match(infos[2], /((?:[^:]+: [0-9]+, [0-9]+; )+)\n((?:\w+: [0-9]+; )+)/g);
	            rankingInfo['Terms weights'] = _.object(_.map(terms, function (term) {
	                var words = _.object(_.map(StringUtils_1.StringUtils.match(term[1], /([^:]+): ([0-9]+), ([0-9]+); /g), function (word) {
	                    return [
	                        word[1],
	                        {
	                            Correlation: Number(word[2]),
	                            'TF-IDF': Number(word[3]),
	                        }
	                    ];
	                }));
	                var weights = _this.parseWeights(term[2]);
	                return [
	                    _.keys(words).join(', '),
	                    {
	                        terms: words,
	                        Weights: weights
	                    }];
	            }));
	        }
	        rankingInfo['Total weight'] = Number(infos[3]);
	        return rankingInfo;
	    };
	    Debug.prototype.parseWeights = function (value) {
	        var listOfWeight = value.match(/(\w+(?:\s\w+)*): ([-0-9]+)/g);
	        return _.object(_.map(listOfWeight, function (weight) {
	            var weightGroup = weight.match(/^(\w+(?:\s\w+)*): ([-0-9]+)$/);
	            return [weightGroup[1], Number(weightGroup[2])];
	        }));
	    };
	    Debug.prototype.buildProperty = function (value, label) {
	        if (value instanceof es6_promise_1.Promise) {
	            return this.buildPromise(value, label);
	        }
	        else if ((_.isArray(value) || (_.isObject(value))) && !_.isString(value)) {
	            return this.buildObjectProperty(value, label);
	        }
	        else {
	            return this.buildBasicProperty(value, label);
	        }
	    };
	    Debug.prototype.buildPromise = function (promise, label) {
	        var _this = this;
	        var dom = document.createElement('div');
	        dom.className = 'coveo-property coveo-property-promise';
	        promise.then(function (value) {
	            var resolvedDom = _this.buildProperty(value, label);
	            Dom_1.$$(dom).replaceWith(resolvedDom);
	        });
	        return dom;
	    };
	    Debug.prototype.buildObjectProperty = function (object, label) {
	        var _this = this;
	        var dom = document.createElement('div');
	        dom.className = 'coveo-property coveo-property-object';
	        var valueContainer = document.createElement('div');
	        valueContainer.className = 'coveo-property-value';
	        var keys = _.keys(object);
	        if (!_.isArray(object)) {
	            keys.sort();
	        }
	        var children;
	        var buildKeys = function () {
	            if (children == null) {
	                children = [];
	                _.each(keys, function (key) {
	                    var property = _this.buildProperty(object[key], key);
	                    if (property != null) {
	                        children.push(property);
	                        valueContainer.appendChild(property);
	                    }
	                });
	            }
	            return children;
	        };
	        dom['buildKeys'] = buildKeys;
	        if (label != null) {
	            var labelDom = document.createElement('div');
	            labelDom.className = 'coveo-property-label';
	            labelDom.appendChild(document.createTextNode(label));
	            dom['labelDom'] = labelDom;
	            dom.appendChild(labelDom);
	            if (keys.length != 0) {
	                dom.className += ' coveo-collapsible';
	                labelDom.onclick = function () {
	                    buildKeys();
	                    var className = dom.className.split(/\s+/);
	                    if (_.contains(className, 'coveo-expanded')) {
	                        className = _.without(className, 'coveo-expanded');
	                    }
	                    else {
	                        className.push('coveo-expanded');
	                    }
	                    dom.className = className.join(' ');
	                };
	            }
	        }
	        else {
	            buildKeys();
	        }
	        if (keys.length == 0) {
	            var className = _.without(dom.className.split(/\s+/), 'coveo-property-object');
	            className.push('coveo-property-basic');
	            dom.className = className.join(' ');
	            if (_.isArray(object)) {
	                valueContainer.innerHTML = '[]';
	            }
	            else {
	                valueContainer.innerHTML = '{}';
	            }
	            dom['value'] = '';
	        }
	        dom['label'] = label != null ? label.toLowerCase() : '';
	        dom.appendChild(valueContainer);
	        return dom;
	    };
	    Debug.prototype.buildBasicProperty = function (value, label) {
	        var _this = this;
	        var dom = document.createElement('div');
	        dom.className = 'coveo-property coveo-property-basic';
	        if (label != null) {
	            var labelDom = document.createElement('div');
	            labelDom.className = 'coveo-property-label';
	            labelDom.appendChild(document.createTextNode(label));
	            dom.appendChild(labelDom);
	            dom['labelDom'] = labelDom;
	        }
	        var stringValue = value != null ? value.toString() : String(value);
	        if (value != null && value['ref'] != null) {
	            value = value['ref'];
	        }
	        var valueDom = document.createElement('div');
	        valueDom.appendChild(document.createTextNode(stringValue));
	        valueDom.ondblclick = function () {
	            _this.selectElementText(valueDom);
	        };
	        dom.appendChild(valueDom);
	        dom['valueDom'] = valueDom;
	        var className = ['coveo-property-value'];
	        if (_.isString(value)) {
	            className.push('coveo-property-value-string');
	        }
	        if (_.isNull(value) || _.isUndefined(value)) {
	            className.push('coveo-property-value-null');
	        }
	        if (_.isNumber(value)) {
	            className.push('coveo-property-value-number');
	        }
	        if (_.isBoolean(value)) {
	            className.push('coveo-property-value-boolean');
	        }
	        if (_.isDate(value)) {
	            className.push('coveo-property-value-date');
	        }
	        if (_.isObject(value)) {
	            className.push('coveo-property-value-object');
	        }
	        if (_.isArray(value)) {
	            className.push('coveo-property-value-array');
	        }
	        valueDom.className = className.join(' ');
	        dom['label'] = label != null ? label.toLowerCase() : '';
	        dom['value'] = stringValue.toLowerCase();
	        return dom;
	    };
	    Debug.prototype.toJson = function (value, depth, done) {
	        var _this = this;
	        if (depth === void 0) { depth = 0; }
	        if (done === void 0) { done = []; }
	        if (value instanceof BaseComponent_1.BaseComponent || value instanceof SearchEndpoint_1.SearchEndpoint) {
	            return this.componentToJson(value, depth);
	        }
	        if (value instanceof HTMLElement) {
	            return this.htmlToJson(value);
	        }
	        if (value instanceof Template_1.Template) {
	            return this.templateToJson(value);
	        }
	        if (value instanceof es6_promise_1.Promise) {
	            return value.then(function (value) {
	                return _this.toJson(value, depth, done);
	            });
	        }
	        if (value == window) {
	            return this.toJsonRef(value);
	        }
	        if (_.isArray(value) || _.isObject(value)) {
	            if (_.contains(done, value)) {
	                return this.toJsonRef(value, '< RECURSIVE >');
	            }
	            else if (depth >= Debug.maxDepth) {
	                return this.toJsonRef(value);
	            }
	            else if (_.isArray(value)) {
	                return _.map(value, function (subValue, key) { return _this.toJson(subValue, depth + 1, done.concat([value])); });
	            }
	            else if (_.isDate(value)) {
	                return this.toJsonRef(value, Globalize.format(value, 'F'));
	            }
	            else {
	                var result_1 = {};
	                _.each(value, function (subValue, key) {
	                    result_1[key] = _this.toJson(subValue, depth + 1, done.concat([value]));
	                });
	                result_1['ref'];
	                return result_1;
	            }
	        }
	        return value;
	    };
	    Debug.prototype.toJsonRef = function (value, stringValue) {
	        stringValue = new String(stringValue || value);
	        stringValue['ref'] = value;
	        return stringValue;
	    };
	    Debug.prototype.componentToJson = function (value, depth) {
	        if (depth === void 0) { depth = 0; }
	        var options = _.keys(value['options']);
	        if (options.length > 0) {
	            return this.toJson(value['options'], depth);
	        }
	        else {
	            return this.toJsonRef(value['options'], new String('No options'));
	        }
	    };
	    Debug.prototype.htmlToJson = function (value) {
	        if (value == null) {
	            return undefined;
	        }
	        return {
	            tagName: value.tagName,
	            id: value.id,
	            classList: value.className.split(/\s+/)
	        };
	    };
	    Debug.prototype.templateToJson = function (template) {
	        if (template == null) {
	            return null;
	        }
	        var element = template['element'];
	        var templateObject = {
	            type: template.getType(),
	        };
	        if (element != null) {
	            templateObject.id = element.id;
	            templateObject.condition = element.attributes['data-condition'];
	            templateObject.content = element.innerText;
	        }
	        return templateObject;
	    };
	    Debug.prototype.selectElementText = function (el) {
	        if (window.getSelection && document.createRange) {
	            var selection = window.getSelection();
	            var range = document.createRange();
	            range.selectNodeContents(el);
	            selection.removeAllRanges();
	            selection.addRange(range);
	        }
	        else if ('createTextRange' in document.body) {
	            var textRange = document.body['createTextRange']();
	            textRange.moveToElementText(el);
	            textRange.select();
	        }
	    };
	    Debug.prototype.highlightSearch = function (element, search) {
	        if (element != null) {
	            var match = element.innerText.split(new RegExp('(?=' + StringUtils_1.StringUtils.regexEncode(search) + ')', 'gi'));
	            element.innerHTML = '';
	            match.forEach(function (value) {
	                var regex = new RegExp('(' + StringUtils_1.StringUtils.regexEncode(search) + ')', 'i');
	                var group = value.match(regex);
	                var span;
	                if (group != null) {
	                    span = Dom_1.Dom.createElement('span', { className: 'coveo-debug-highlight' });
	                    span.appendChild(document.createTextNode(group[1]));
	                    element.appendChild(span);
	                    span = Dom_1.Dom.createElement('span');
	                    span.appendChild(document.createTextNode(value.substr(group[1].length)));
	                    element.appendChild(span);
	                }
	                else {
	                    span = Dom_1.Dom.createElement('span');
	                    span.appendChild(document.createTextNode(value));
	                    element.appendChild(span);
	                }
	            });
	        }
	    };
	    Debug.prototype.removeHighlightSearch = function (element) {
	        if (element != null) {
	            element.innerHTML = element.innerText;
	        }
	    };
	    Debug.prototype.debugInfo = function () {
	        return null;
	    };
	    Debug.ID = 'Debug';
	    Debug.options = {
	        enableDebug: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false })
	    };
	    Debug.customOrder = ['error', 'queryDuration', 'result', 'fields', 'rankingInfo', 'template', 'query', 'results', 'state'];
	    Debug.durationKeys = ['indexDuration', 'proxyDuration', 'clientDuration', 'duration'];
	    Debug.maxDepth = 10;
	    return Debug;
	}(RootComponent_1.RootComponent));
	exports.Debug = Debug;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";function t(e,o){function i(t,e){return function(){return t.apply(e,arguments)}}var r;if(o=o||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=o.touchBoundary||10,this.layer=e,this.tapDelay=o.tapDelay||200,this.tapTimeout=o.tapTimeout||700,!t.notNeeded(e)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],c=this,s=0,u=a.length;u>s;s++)c[a[s]]=i(c[a[s]],c);n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(e,t,n,o)}),"function"==typeof e.onclick&&(r=e.onclick,e.addEventListener("click",function(t){r(t)},!1),e.onclick=null)}}var e=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!e,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,i=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),r=o&&/OS [6-7]_\d/.test(navigator.userAgent),a=navigator.userAgent.indexOf("BB10")>0;t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(o&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;o&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,r;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],o){if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n?!0:!1},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,a,c,s,u,l=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,a=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,r&&(u=t.changedTouches[0],l=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),c=l.tagName.toLowerCase(),"label"===c){if(e=this.findControl(l)){if(this.focus(l),n)return!1;l=e}}else if(this.needsFocus(l))return t.timeStamp-a>100||o&&window.top!==window&&"input"===c?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,t),o&&"select"===c||(this.targetElement=null,t.preventDefault()),!1);return o&&!i&&(s=l.fastClickScrollParent,s&&s.fastClickLastScrollTop!==s.scrollTop)?!0:(this.needsClick(l)||(t.preventDefault(),this.sendClick(l,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable?!this.needsClick(this.targetElement)||this.cancelNextClick?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0:!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,o,i,r;if("undefined"==typeof window.ontouchstart)return!0;if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(o>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(a&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction?!0:(r=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],r>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===t.style.touchAction||"manipulation"===t.style.touchAction?!0:!1)},t.attach=function(e,n){return new t(e,n)}, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return t}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}();

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	(function(e){var t=function(){"use strict";var e="s",n=2011,r=function(e){var t=-e.getTimezoneOffset();return t!==null?t:0},i=function(e,t,n){var r=new Date;return e!==undefined&&r.setFullYear(e),r.setDate(n),r.setMonth(t),r},s=function(e){return r(i(e,0,2))},o=function(e){return r(i(e,5,2))},u=function(e){var t=e.getMonth()>7?o(e.getFullYear()):s(e.getFullYear()),n=r(e);return t-n!==0},a=function(){var t=s(n),r=o(n),i=t-r;return i<0?t+",1":i>0?r+",1,"+e:t+",0"},f=function(){var e=a();return new t.TimeZone(t.olson.timezones[e])},l=function(e){var t=new Date(2010,6,15,1,0,0,0),n={"America/Denver":new Date(2011,2,13,3,0,0,0),"America/Mazatlan":new Date(2011,3,3,3,0,0,0),"America/Chicago":new Date(2011,2,13,3,0,0,0),"America/Mexico_City":new Date(2011,3,3,3,0,0,0),"America/Asuncion":new Date(2012,9,7,3,0,0,0),"America/Santiago":new Date(2012,9,3,3,0,0,0),"America/Campo_Grande":new Date(2012,9,21,5,0,0,0),"America/Montevideo":new Date(2011,9,2,3,0,0,0),"America/Sao_Paulo":new Date(2011,9,16,5,0,0,0),"America/Los_Angeles":new Date(2011,2,13,8,0,0,0),"America/Santa_Isabel":new Date(2011,3,5,8,0,0,0),"America/Havana":new Date(2012,2,10,2,0,0,0),"America/New_York":new Date(2012,2,10,7,0,0,0),"Asia/Beirut":new Date(2011,2,27,1,0,0,0),"Europe/Helsinki":new Date(2011,2,27,4,0,0,0),"Europe/Istanbul":new Date(2011,2,28,5,0,0,0),"Asia/Damascus":new Date(2011,3,1,2,0,0,0),"Asia/Jerusalem":new Date(2011,3,1,6,0,0,0),"Asia/Gaza":new Date(2009,2,28,0,30,0,0),"Africa/Cairo":new Date(2009,3,25,0,30,0,0),"Pacific/Auckland":new Date(2011,8,26,7,0,0,0),"Pacific/Fiji":new Date(2010,10,29,23,0,0,0),"America/Halifax":new Date(2011,2,13,6,0,0,0),"America/Goose_Bay":new Date(2011,2,13,2,1,0,0),"America/Miquelon":new Date(2011,2,13,5,0,0,0),"America/Godthab":new Date(2011,2,27,1,0,0,0),"Europe/Moscow":t,"Asia/Yekaterinburg":t,"Asia/Omsk":t,"Asia/Krasnoyarsk":t,"Asia/Irkutsk":t,"Asia/Yakutsk":t,"Asia/Vladivostok":t,"Asia/Kamchatka":t,"Europe/Minsk":t,"Pacific/Apia":new Date(2010,10,1,1,0,0,0),"Australia/Perth":new Date(2008,10,1,1,0,0,0)};return n[e]};return{determine:f,date_is_dst:u,dst_start_for:l}}();t.TimeZone=function(e){"use strict";var n={"America/Denver":["America/Denver","America/Mazatlan"],"America/Chicago":["America/Chicago","America/Mexico_City"],"America/Santiago":["America/Santiago","America/Asuncion","America/Campo_Grande"],"America/Montevideo":["America/Montevideo","America/Sao_Paulo"],"Asia/Beirut":["Asia/Beirut","Europe/Helsinki","Europe/Istanbul","Asia/Damascus","Asia/Jerusalem","Asia/Gaza"],"Pacific/Auckland":["Pacific/Auckland","Pacific/Fiji"],"America/Los_Angeles":["America/Los_Angeles","America/Santa_Isabel"],"America/New_York":["America/Havana","America/New_York"],"America/Halifax":["America/Goose_Bay","America/Halifax"],"America/Godthab":["America/Miquelon","America/Godthab"],"Asia/Dubai":["Europe/Moscow"],"Asia/Dhaka":["Asia/Yekaterinburg"],"Asia/Jakarta":["Asia/Omsk"],"Asia/Shanghai":["Asia/Krasnoyarsk","Australia/Perth"],"Asia/Tokyo":["Asia/Irkutsk"],"Australia/Brisbane":["Asia/Yakutsk"],"Pacific/Noumea":["Asia/Vladivostok"],"Pacific/Tarawa":["Asia/Kamchatka"],"Pacific/Tongatapu":["Pacific/Apia"],"Africa/Johannesburg":["Asia/Gaza","Africa/Cairo"],"Asia/Baghdad":["Europe/Minsk"]},r=e,i=function(){var e=n[r],i=e.length,s=0,o=e[0];for(;s<i;s+=1){o=e[s];if(t.date_is_dst(t.dst_start_for(o))){r=o;return}}},s=function(){return typeof n[r]!="undefined"};return s()&&i(),{name:function(){return r}}},t.olson={},t.olson.timezones={"-720,0":"Pacific/Majuro","-660,0":"Pacific/Pago_Pago","-600,1":"America/Adak","-600,0":"Pacific/Honolulu","-570,0":"Pacific/Marquesas","-540,0":"Pacific/Gambier","-540,1":"America/Anchorage","-480,1":"America/Los_Angeles","-480,0":"Pacific/Pitcairn","-420,0":"America/Phoenix","-420,1":"America/Denver","-360,0":"America/Guatemala","-360,1":"America/Chicago","-360,1,s":"Pacific/Easter","-300,0":"America/Bogota","-300,1":"America/New_York","-270,0":"America/Caracas","-240,1":"America/Halifax","-240,0":"America/Santo_Domingo","-240,1,s":"America/Santiago","-210,1":"America/St_Johns","-180,1":"America/Godthab","-180,0":"America/Argentina/Buenos_Aires","-180,1,s":"America/Montevideo","-120,0":"America/Noronha","-120,1":"America/Noronha","-60,1":"Atlantic/Azores","-60,0":"Atlantic/Cape_Verde","0,0":"UTC","0,1":"Europe/London","60,1":"Europe/Berlin","60,0":"Africa/Lagos","60,1,s":"Africa/Windhoek","120,1":"Asia/Beirut","120,0":"Africa/Johannesburg","180,0":"Asia/Baghdad","180,1":"Europe/Moscow","210,1":"Asia/Tehran","240,0":"Asia/Dubai","240,1":"Asia/Baku","270,0":"Asia/Kabul","300,1":"Asia/Yekaterinburg","300,0":"Asia/Karachi","330,0":"Asia/Kolkata","345,0":"Asia/Kathmandu","360,0":"Asia/Dhaka","360,1":"Asia/Omsk","390,0":"Asia/Rangoon","420,1":"Asia/Krasnoyarsk","420,0":"Asia/Jakarta","480,0":"Asia/Shanghai","480,1":"Asia/Irkutsk","525,0":"Australia/Eucla","525,1,s":"Australia/Eucla","540,1":"Asia/Yakutsk","540,0":"Asia/Tokyo","570,0":"Australia/Darwin","570,1,s":"Australia/Adelaide","600,0":"Australia/Brisbane","600,1":"Asia/Vladivostok","600,1,s":"Australia/Sydney","630,1,s":"Australia/Lord_Howe","660,1":"Asia/Kamchatka","660,0":"Pacific/Noumea","690,0":"Pacific/Norfolk","720,1,s":"Pacific/Auckland","720,0":"Pacific/Tarawa","765,1,s":"Pacific/Chatham","780,0":"Pacific/Tongatapu","780,1,s":"Pacific/Apia","840,0":"Pacific/Kiritimati"}, true?exports.jstz=t:e.jstz=t})(this);

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Logger_1 = __webpack_require__(15);
	var DeviceUtils_1 = __webpack_require__(19);
	var SentryLogger = (function () {
	    function SentryLogger(queryController, windoh) {
	        if (windoh === void 0) { windoh = window; }
	        this.queryController = queryController;
	        this.windoh = windoh;
	        this.logger = new Logger_1.Logger(this);
	        this.bindErrorHandler();
	    }
	    SentryLogger.prototype.bindErrorHandler = function () {
	        var _this = this;
	        // take care of not overriding any existing onerror handler that might be already present in the page.
	        var oldHandler = this.windoh.onerror;
	        if (_.isFunction(oldHandler)) {
	            this.windoh.onerror = function () {
	                var args = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    args[_i - 0] = arguments[_i];
	                }
	                oldHandler.apply(oldHandler, args);
	                _this.handleError.apply(_this, args);
	            };
	        }
	        else {
	            this.windoh.onerror = this.handleError.bind(this);
	        }
	    };
	    SentryLogger.prototype.handleError = function (message, filename, lineno, colno, error) {
	        // try not to log irrelevant errors ...
	        if (!filename.toLowerCase().match(/coveo/) || this.windoh.location.host.toLowerCase().match(/localhost/)) {
	            return;
	        }
	        var errorInfo = {
	            message: message,
	            filename: filename,
	            line: lineno,
	            column: colno,
	            error: error.toString(),
	            errorStack: error['stack'],
	            device: DeviceUtils_1.DeviceUtils.getDeviceName()
	        };
	        var sentryLog = {
	            level: 'DEBUG',
	            title: this.windoh.location.href,
	            message: JSON.stringify(errorInfo)
	        };
	        this.queryController.getEndpoint().logError(sentryLog);
	    };
	    return SentryLogger;
	}());
	exports.SentryLogger = SentryLogger;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 109 */
/***/ function(module, exports) {

	"use strict";
	exports.analyticsActionCauseList = {
	    interfaceLoad: {
	        name: 'interfaceLoad',
	        type: 'interface'
	    },
	    interfaceChange: {
	        name: 'interfaceChange',
	        type: 'interface',
	        metaMap: { interfaceChangeTo: 1 }
	    },
	    contextRemove: {
	        name: 'contextRemove',
	        type: 'misc',
	        metaMap: { contextName: 1 }
	    },
	    didyoumeanAutomatic: {
	        name: 'didyoumeanAutomatic',
	        type: 'misc'
	    },
	    didyoumeanClick: {
	        name: 'didyoumeanClick',
	        type: 'misc'
	    },
	    resultsSort: {
	        name: 'resultsSort',
	        type: 'misc',
	        metaMap: { resultsSortBy: 1 }
	    },
	    searchboxSubmit: {
	        name: 'searchboxSubmit',
	        type: 'search box'
	    },
	    searchboxClear: {
	        name: 'searchboxClear',
	        type: 'search box'
	    },
	    searchboxAsYouType: {
	        name: 'searchboxAsYouType',
	        type: 'search box'
	    },
	    breadcrumbFacet: {
	        name: 'breadcrumbFacet',
	        type: 'breadcrumb',
	        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
	    },
	    breadcrumbResetAll: {
	        name: 'breadcrumbResetAll',
	        type: 'breadcrumb',
	    },
	    documentTag: {
	        name: 'documentTag',
	        type: 'document',
	        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
	    },
	    documentField: {
	        name: 'documentField',
	        type: 'document',
	        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
	    },
	    documentQuickview: {
	        name: 'documentQuickview',
	        type: 'document',
	        metaMap: { documentTitle: 1, documentURL: 2 }
	    },
	    documentOpen: {
	        name: 'documentOpen',
	        type: 'document',
	        metaMap: { documentTitle: 1, documentURL: 2 }
	    },
	    omniboxFacetSelect: {
	        name: 'omniboxFacetSelect',
	        type: 'omnibox',
	        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
	    },
	    omniboxFacetExclude: {
	        name: 'omniboxFacetExclude',
	        type: 'omnibox',
	        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
	    },
	    omniboxFacetDeselect: {
	        name: 'omniboxFacetDeselect',
	        type: 'omnibox',
	        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
	    },
	    omniboxFacetUnexclude: {
	        name: 'omniboxFacetUnexclude',
	        type: 'omnibox',
	        metaMap: { faceId: 1, facetValue: 2, facetTitle: 3 }
	    },
	    omniboxAnalytics: {
	        name: 'omniboxAnalytics',
	        type: 'omnibox',
	        metaMap: {
	            partialQuery: 1,
	            suggestionRanking: 2,
	            partialQueries: 3,
	            suggestions: 4
	        }
	    },
	    omniboxField: {
	        name: 'omniboxField',
	        type: 'omnibox'
	    },
	    facetClearAll: {
	        name: 'facetClearAll',
	        type: 'facet',
	        metaMap: { facetId: 1 }
	    },
	    facetSearch: {
	        name: 'facetSearch',
	        type: 'facet',
	        metaMap: { facetId: 1 }
	    },
	    facetToggle: {
	        name: 'facetToggle',
	        type: 'facet',
	        metaMap: { facetId: 1, facetOperatorBefore: 2, facetOperatorAfter: 3 }
	    },
	    facetRangeSlider: {
	        name: 'facetRangeSlider',
	        type: 'facet',
	        metaMap: { facetId: 1, facetRangeStart: 2, facetRangeEnd: 3 }
	    },
	    facetRangeGraph: {
	        name: 'facetRangeGraph',
	        type: 'facet',
	        metaMap: { facetId: 1, facetRangeStart: 2, facetRangeEnd: 3 }
	    },
	    facetSelect: {
	        name: 'facetSelect',
	        type: 'facet',
	        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
	    },
	    facetSelectAll: {
	        name: 'facetSelectAll',
	        type: 'facet',
	        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
	    },
	    facetDeselect: {
	        name: 'facetDeselect',
	        type: 'facet',
	        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
	    },
	    facetExclude: {
	        name: 'facetExclude',
	        type: 'facet',
	        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
	    },
	    facetUnexclude: {
	        name: 'facetUnexclude',
	        type: 'facet',
	        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
	    },
	    errorBack: {
	        name: 'errorBack',
	        type: 'errors'
	    },
	    errorClearQuery: {
	        name: 'errorClearQuery',
	        type: 'errors'
	    },
	    errorRetry: {
	        name: 'errorRetry',
	        type: 'errors'
	    },
	    noResultsBack: {
	        name: 'noResultsBack',
	        type: 'noResults'
	    },
	    expandToFullUI: {
	        name: 'expandToFullUI',
	        type: 'interface'
	    },
	    caseCreationInputChange: {
	        name: 'inputChange',
	        type: 'caseCreation'
	    },
	    caseCreationSubmitButton: {
	        name: 'submitButton',
	        type: 'caseCreation'
	    },
	    caseCreationCancelButton: {
	        name: 'cancelButton',
	        type: 'caseCreation'
	    },
	    caseCreationUnloadPage: {
	        name: 'unloadPage',
	        type: 'caseCreation'
	    },
	    casecontextAdd: {
	        name: 'casecontextAdd',
	        type: 'casecontext',
	        metaMap: { caseID: 5 }
	    },
	    casecontextRemove: {
	        name: 'casecontextRemove',
	        type: 'casecontext',
	        metaMap: { caseID: 5 }
	    },
	    preferencesChange: {
	        name: 'preferencesChange',
	        type: 'preferences',
	        metaMap: { preferenceName: 1, preferenceType: 2 }
	    },
	    getUserHistory: {
	        name: 'getUserHistory',
	        type: 'userHistory'
	    },
	    userActionDocumentClick: {
	        name: 'userActionDocumentClick',
	        type: 'userHistory'
	    },
	    caseAttach: {
	        name: 'caseAttach',
	        type: 'case',
	        metaMap: { documentTitle: 1, resultUriHash: 3, articleID: 4, caseID: 5 }
	    },
	    caseDetach: {
	        name: 'caseDetach',
	        type: 'case',
	        metaMap: { documentTitle: 1, resultUriHash: 3, articleID: 4, caseID: 5 }
	    },
	    customfiltersChange: {
	        name: 'customfiltersChange',
	        type: 'customfilters',
	        metaMap: { customFilterName: 1, customFilterType: 2, customFilterExpression: 3 }
	    },
	    pagerNumber: {
	        name: 'pagerNumber',
	        type: 'getMoreResults',
	        metaMap: { 'pagerNumber': 1 }
	    },
	    pagerNext: {
	        name: 'pagerNext',
	        type: 'getMoreResults',
	        metaMap: { 'pagerNumber': 1 }
	    },
	    pagerPrevious: {
	        name: 'pagerPrevious',
	        type: 'getMoreResults',
	        metaMap: { 'pagerNumber': 1 }
	    },
	    pagerScrolling: {
	        name: 'pagerScrolling',
	        type: 'getMoreResults'
	    },
	    pagerResize: {
	        name: 'pagerResize',
	        type: 'getMoreResults'
	    },
	    searchFromLink: {
	        name: 'searchFromLink',
	        type: 'interface'
	    },
	    triggerNotify: {
	        name: 'notify',
	        type: 'queryPipelineTriggers'
	    },
	    triggerExecute: {
	        name: 'execute',
	        type: 'queryPipelineTriggers'
	    },
	    triggerQuery: {
	        name: 'query',
	        type: 'queryPipelineTriggers'
	    },
	    triggerRedirect: {
	        name: 'redirect',
	        type: 'queryPipelineTriggers'
	    },
	    queryError: {
	        name: 'query',
	        type: 'errors',
	        metaMap: { 'query': 1, 'aq': 2, 'cq': 3, 'dq': 4, 'errorType': 5, 'errorMessage': 6 }
	    },
	    exportToExcel: {
	        name: 'exportToExcel',
	        type: 'misc'
	    },
	    recommendation: {
	        name: 'recommendation',
	        type: 'recommendation'
	    },
	    recommendationInterfaceLoad: {
	        name: 'recommendationInterfaceLoad',
	        type: 'recommendation'
	    },
	    recommendationOpen: {
	        name: 'recommendationOpen',
	        type: 'recommendation'
	    },
	    advancedSearch: {
	        name: 'advancedSearch',
	        type: 'advancedSearch'
	    }
	};


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SearchInterface_1 = __webpack_require__(96);
	var ComponentOptions_1 = __webpack_require__(97);
	var QueryEvents_1 = __webpack_require__(46);
	var OmniboxEvents_1 = __webpack_require__(44);
	var ResultListEvents_1 = __webpack_require__(47);
	var SettingsEvents_1 = __webpack_require__(49);
	var PreferencesPanelEvents_1 = __webpack_require__(45);
	var AnalyticsEvents_1 = __webpack_require__(39);
	var AnalyticsActionListMeta_1 = __webpack_require__(109);
	var BreadcrumbEvents_1 = __webpack_require__(40);
	var QuickviewEvents_1 = __webpack_require__(111);
	var QueryStateModel_1 = __webpack_require__(89);
	var Model_1 = __webpack_require__(86);
	var Utils_1 = __webpack_require__(17);
	var Dom_1 = __webpack_require__(56);
	/**
	 * This component is a {@link SearchInterface} that will display recommendations based on the user history.
	 * To get recommendations, the page view script must also be included in the page. View: https://github.com/coveo/coveo.analytics.js
	 * This component listens when the main search interface generates a query and it generates another to get the recommendations at the same time.
	 *
	 * This component can be included in another SearchInterface, but you need to initialize the recommendation component with Coveo('initRecommendation'), before
	 * the parent SearchInterface.
	 */
	var Recommendation = (function (_super) {
	    __extends(Recommendation, _super);
	    function Recommendation(element, options, analyticsOptions, _window) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        if (analyticsOptions === void 0) { analyticsOptions = {}; }
	        if (_window === void 0) { _window = window; }
	        _super.call(this, element, ComponentOptions_1.ComponentOptions.initComponentOptions(element, Recommendation, options), analyticsOptions, _window);
	        this.element = element;
	        this.options = options;
	        this.analyticsOptions = analyticsOptions;
	        if (!this.options.id) {
	            this.generateDefaultId();
	        }
	        if (this.options.mainSearchInterface) {
	            this.bindToMainSearchInterface();
	        }
	        Dom_1.$$(this.element).on(QueryEvents_1.QueryEvents.buildingQuery, function (e, args) { return _this.handleRecommendationBuildingQuery(args); });
	        Dom_1.$$(this.element).on(QueryEvents_1.QueryEvents.querySuccess, function (e, args) { return _this.handleRecommendationQuerySuccess(args); });
	        Dom_1.$$(this.element).on(QueryEvents_1.QueryEvents.noResults, function (e, args) {
	            if (_this.options.hideIfNoResults) {
	                _this.hide();
	            }
	        });
	        Dom_1.$$(this.element).on(QueryEvents_1.QueryEvents.queryError, function (e, args) { return _this.hide(); });
	        // This is done to allow the component to be included in another search interface without triggering the parent events.
	        this.preventEventPropagation();
	    }
	    Recommendation.prototype.getId = function () {
	        return this.options.id;
	    };
	    Recommendation.prototype.hide = function () {
	        this.displayStyle = this.element.style.display;
	        Dom_1.$$(this.element).hide();
	    };
	    Recommendation.prototype.show = function () {
	        if (!this.displayStyle) {
	            this.displayStyle = this.element.style.display;
	        }
	        this.element.style.display = this.displayStyle;
	    };
	    Recommendation.prototype.bindToMainSearchInterface = function () {
	        var _this = this;
	        Dom_1.$$(this.options.mainSearchInterface).on(QueryEvents_1.QueryEvents.querySuccess, function (e, args) {
	            _this.mainInterfaceQuery = args;
	            _this.mainQuerySearchUID = args.results.searchUid;
	            _this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.recommendation, {});
	            _this.queryController.executeQuery();
	        });
	    };
	    Recommendation.prototype.handleRecommendationBuildingQuery = function (data) {
	        this.modifyQueryForRecommendation(data);
	        this.addRecommendationInfoInQuery(data);
	    };
	    Recommendation.prototype.handleRecommendationQuerySuccess = function (data) {
	        if (this.options.hideIfNoResults) {
	            if (data.results.totalCount === 0) {
	                this.hide();
	            }
	            else {
	                this.show();
	            }
	        }
	    };
	    Recommendation.prototype.modifyQueryForRecommendation = function (data) {
	        if (this.mainInterfaceQuery) {
	            Utils_1.Utils.copyObjectAttributes(data.queryBuilder, this.mainInterfaceQuery.queryBuilder, this.options.optionsToUse);
	        }
	    };
	    Recommendation.prototype.addRecommendationInfoInQuery = function (data) {
	        if (!_.isEmpty(this.options.userContext)) {
	            data.queryBuilder.addContext(JSON.parse(this.options.userContext));
	        }
	        if (this.options.sendActionsHistory) {
	            data.queryBuilder.actionsHistory = this.getHistory();
	        }
	        data.queryBuilder.recommendation = this.options.id;
	    };
	    Recommendation.prototype.getHistory = function () {
	        if (typeof coveoanalytics != 'undefined') {
	            var store = new coveoanalytics.history.HistoryStore();
	            return JSON.stringify(store.getHistory());
	        }
	        else {
	            return '[]';
	        }
	    };
	    Recommendation.prototype.preventEventPropagation = function () {
	        this.preventEventPropagationOn(QueryEvents_1.QueryEvents);
	        this.preventEventPropagationOn(OmniboxEvents_1.OmniboxEvents);
	        this.preventEventPropagationOn(ResultListEvents_1.ResultListEvents);
	        this.preventEventPropagationOn(SettingsEvents_1.SettingsEvents);
	        this.preventEventPropagationOn(PreferencesPanelEvents_1.PreferencesPanelEvents);
	        this.preventEventPropagationOn(AnalyticsEvents_1.AnalyticsEvents);
	        this.preventEventPropagationOn(BreadcrumbEvents_1.BreadcrumbEvents);
	        this.preventEventPropagationOn(QuickviewEvents_1.QuickviewEvents);
	        this.preventEventPropagationOn(this.getAllModelEvents());
	    };
	    Recommendation.prototype.preventEventPropagationOn = function (eventType, eventName) {
	        if (eventName === void 0) { eventName = function (event) { return event; }; }
	        for (var event_1 in eventType) {
	            Dom_1.$$(this.root).on(eventName(event_1), function (e) { return e.stopPropagation(); });
	        }
	    };
	    Recommendation.prototype.getAllModelEvents = function () {
	        var _this = this;
	        var events = {};
	        _.each(_.values(Model_1.Model.eventTypes), function (event) {
	            _.each(_.values(QueryStateModel_1.QUERY_STATE_ATTRIBUTES), function (attribute) {
	                var eventName = _this.getBindings().queryStateModel.getEventName(event + attribute);
	                events[eventName] = eventName;
	            });
	        });
	        return events;
	    };
	    Recommendation.prototype.generateDefaultId = function () {
	        var id = 'Recommendation';
	        if (Recommendation.NEXT_ID !== 1) {
	            this.logger.warn('Generating another recommendation default id', 'Consider configuring a human friendly / meaningful id for this interface');
	            id = id + '_' + Recommendation.NEXT_ID;
	        }
	        Recommendation.NEXT_ID++;
	        this.options.id = id;
	    };
	    Recommendation.ID = 'Recommendation';
	    Recommendation.NEXT_ID = 1;
	    /**
	     * The options for the recommendation component
	     * @componentOptions
	     */
	    Recommendation.options = {
	        /**
	         * Specifies the main {@link SearchInterface} to listen to.
	         */
	        mainSearchInterface: ComponentOptions_1.ComponentOptions.buildSelectorOption(),
	        /**
	         * Specifies the user context to send to Coveo analytics.
	         * It will be sent with the query alongside the user history to get the recommendations.
	         */
	        userContext: ComponentOptions_1.ComponentOptions.buildJsonOption(),
	        /**
	         * Specifies the id of the interface.
	         * It is used by the analytics to know which recommendation interface was selected.
	         * The default value is "Recommendation" for the first one and "Recommendation_{number}" where {number} depends on the number of recommendation interface with default ids in the page for the others.
	         */
	        id: ComponentOptions_1.ComponentOptions.buildStringOption(),
	        /**
	         * Specifies which options from the main {@link QueryBuilder} to use in the triggered query.
	         * Ex: <code data-options-to-use="expression, advancedExpression"></code> would add the expression and the advanced expression parts from the main query in the triggered query.
	         * The default value is undefined.
	         */
	        optionsToUse: ComponentOptions_1.ComponentOptions.buildListOption({ defaultValue: ['expression'] }),
	        /**
	         * Specifies whether or not to send the actions history along with the triggered query.
	         * Disabling this option means this component won't be able to get Reveal recommendations.
	         * However, it could be useful to display side results in a search page.
	         * The default value is true.
	         */
	        sendActionsHistory: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }),
	        /**
	         * Hides the component if there a no results / recommendations.
	         * The default value is false.
	         */
	        hideIfNoResults: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true })
	    };
	    return Recommendation;
	}(SearchInterface_1.SearchInterface));
	exports.Recommendation = Recommendation;
	// We do not register the Recommendation component since it is done with .coveo('initRecommendation')
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 111 */
/***/ function(module, exports) {

	"use strict";
	var QuickviewEvents = (function () {
	    function QuickviewEvents() {
	    }
	    QuickviewEvents.quickviewLoaded = 'quickviewLoaded';
	    QuickviewEvents.openQuickview = 'openQuickview';
	    return QuickviewEvents;
	}());
	exports.QuickviewEvents = QuickviewEvents;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Component_1 = __webpack_require__(95);
	var ComponentOptions_1 = __webpack_require__(97);
	var AnalyticsEndpoint_1 = __webpack_require__(35);
	var SearchEndpoint_1 = __webpack_require__(11);
	var Assert_1 = __webpack_require__(16);
	var QueryEvents_1 = __webpack_require__(46);
	var ComponentOptionsModel_1 = __webpack_require__(90);
	var Dom_1 = __webpack_require__(56);
	var Model_1 = __webpack_require__(86);
	var Utils_1 = __webpack_require__(17);
	var NoopAnalyticsClient_1 = __webpack_require__(104);
	var LiveAnalyticsClient_1 = __webpack_require__(113);
	var MultiAnalyticsClient_1 = __webpack_require__(117);
	var AnalyticsActionListMeta_1 = __webpack_require__(109);
	var SearchInterface_1 = __webpack_require__(96);
	var Recommendation_1 = __webpack_require__(110);
	var RecommendationAnalyticsClient_1 = __webpack_require__(118);
	/**
	 * This component logs all user actions performed in the search interface and sends them to a REST web service exposed through the Coveo Cloud platform.<br/>
	 * You can use data to evaluate how users are interacting with the search interface, improve relevance and produce analytics dashboards in the Coveo platform.
	 *
	 * # Send Custom Events
	 * In some scenarios, you want to send custom data to the Coveo Cloud analytics (see [Coveo Cloud Usage Analytics](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=89)). The Coveo JavaScript Search Framework offers helpers to communicate with the Coveo Analytics REST API, so you do not have to write code to call the API directly.
	 *
	 * 1. First, you need to craft your custom event cause and meta.<br/>**NB: The event names must be unique.**
	 * ```
	 *   // customEventType allows to regroup similar event types together when doing reporting (e.g., search box).
	 *   var customEventCause = {name: 'customEventName', type:'customEventType'};
	 *   var metadata = {key1: "value1", key2:"value2"};
	 * ```
	 *
	 * 2. Send your custom event.
	 * ```
	 *   Coveo.logCustomEvent(document.querySelector('#search'), customEventCause, metadata);
	 *      // OR (using the jquery extension)
	 *   $('#search').coveo('logCustomEvent', customEventCause, metadata);
	 * ```
	 *
	 * 3. Send your custom search event<br/>**NB: If you want to log a `searchEvent`, be sure to always call the helper before you call `executeQuery`.**
	 * ```
	 * function myCustomButtonWasClicked() {
	 *      Coveo.logSearchEvent(document.querySelector('#search'), customEventCause, metadata);
	 *      Coveo.executeQuery(document.querySelector('#search'));
	 *      // OR (using the jquery extension)
	 *      $('#search').coveo('logSearchEvent', customEventCause, metadata);
	 *      $('#search').coveo('executeQuery');
	 * }
	 * ```
	 *
	 * 4. Send a custom `searchAsYouType` event<br/>**NB: If you want to log a `searchAsYouTypeEvent`, be sure to always call the helper before you call `executeQuery`.**
	 * ```
	 * function myCustomButtonWasClicked() {
	 *      Coveo.logSearchAsYouTypeEvent(document.querySelector('#search'), customEventCause, metadata);
	 *      Coveo.executeQuery(document.querySelector('#search'));
	 *      // OR (using the jquery extension)
	 *      $('#search').coveo('logSearchAsYouTypeEvent', customEventCause, metadata);
	 *      $('#search').coveo('executeQuery');
	 * }
	 * ```
	 *
	 * 5. Send a custom click event.
	 * ```
	 * Coveo.logClickEvent(document.querySelector('#search'), customEventCause, metadata, result);
	 * // OR (using the jQuery extension)
	 * $('#search').coveo('logClickEvent', customEventCause, metadata, result);
	 * ```
	 */
	var Analytics = (function (_super) {
	    __extends(Analytics, _super);
	    /**
	     * Create a new Analytics component. Create the {@link IAnalyticsClient}.
	     * @param element The HTMLElement on which the component will be instantiated.
	     * @param options The options for the Analytics.
	     * @param bindings The bindings that the component requires to function normally. If not set, it will automatically resolve them (with slower execution time).
	     */
	    function Analytics(element, options, bindings) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        _super.call(this, element, Analytics.ID, bindings);
	        this.element = element;
	        this.options = options;
	        this.bindings = bindings;
	        this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, Analytics, options);
	        this.retrieveInfoFromDefaultSearchEndpoint();
	        this.initializeAnalyticsClient();
	        Assert_1.Assert.exists(this.client);
	        this.bind.onRootElement(QueryEvents_1.QueryEvents.buildingQuery, function (data) { return _this.handleBuildingQuery(data); });
	        this.bind.onRootElement(QueryEvents_1.QueryEvents.queryError, function (data) { return _this.handleQueryError(data); });
	        // Analytics component is a bit special: It can be higher in the dom tree than the search interface
	        // Need to resolve down to find the componentOptionsModel if we need to.
	        if (!this.componentOptionsModel) {
	            var cmpOptionElement = Dom_1.$$(element).find('.' + Component_1.Component.computeCssClassName(ComponentOptionsModel_1.ComponentOptionsModel));
	            if (cmpOptionElement) {
	                this.componentOptionsModel = cmpOptionElement[Component_1.Component.computeCssClassName(ComponentOptionsModel_1.ComponentOptionsModel)];
	            }
	        }
	        if (this.componentOptionsModel) {
	            this.componentOptionsModel.set(ComponentOptionsModel_1.ComponentOptionsModel.attributesEnum.searchHub, this.options.searchHub);
	            var event_1 = this.componentOptionsModel.getEventName(Model_1.Model.eventTypes.changeOne + ComponentOptionsModel_1.ComponentOptionsModel.attributesEnum.searchHub);
	            this.bind.onRootElement(event_1, function (args) { return _this.handleSearchHubChanged(args); });
	        }
	    }
	    /**
	     * Log a search event on the service, using a cause and a meta object.<br/>
	     * Note that the event will be sent on the service when a query successfully return, not immediately after calling this method.<br/>
	     * Normally, this should be called using the following "format": <br/>
	     * usageAnalytics.logSearchEvent<SomeMeta>({name : 'foo', type : 'bar'}, <SomeMeta>{'key':'value'});<br/>
	     * this.queryController.executeQuery();<br/>
	     * This will queue up an analytics search event. Then the query is executed. The search event will be sent to the service when the query is successfully completed.<br/>
	     * @param actionCause
	     * @param meta Can be an empty object ( {} ).
	     */
	    Analytics.prototype.logSearchEvent = function (actionCause, meta) {
	        this.client.logSearchEvent(actionCause, meta);
	    };
	    /**
	     * Log a search as you type event on the service, using a cause and a meta object.<br/>
	     * This is extremely similar to a search event, except that search as you type, by definition, will be frequently called.<br/>
	     * The `PendingSearchAsYouTypeEvent` will take care of logging only the "relevant" last event: After 5 seconds of no event logged, or after another search event is triggered somewhere else in the interface.<br/>
	     * This is to ensure that we do not needlessly log every single partial query, which would make the reporting very confusing.
	     * @param actionCause
	     * @param meta Can be an empty object ( {} ).
	     */
	    Analytics.prototype.logSearchAsYouType = function (actionCause, meta) {
	        this.client.logSearchAsYouType(actionCause, meta);
	    };
	    /**
	     * Log a custom event on the service. A custom event can be used to create customized report, or to track events which are not queries or document views.
	     * @param actionCause
	     * @param meta
	     * @param element The HTMLElement that was interacted with for this custom event.
	     */
	    Analytics.prototype.logCustomEvent = function (actionCause, meta, element) {
	        if (element === void 0) { element = this.element; }
	        this.client.logCustomEvent(actionCause, meta, element);
	    };
	    /**
	     * Log a click event. A click event can be understood as a document view.<br/>
	     * eg : Clicking on a result link of opening a quickview.<br/>
	     * This event will be logged immediately on the service.
	     * @param actionCause
	     * @param meta Can be an empty object ( {} ).
	     * @param result The result that was clicked.
	     * @param element The HTMLElement that was clicked in the interface.
	     */
	    Analytics.prototype.logClickEvent = function (actionCause, meta, result, element) {
	        if (element === void 0) { element = this.element; }
	        this.client.logClickEvent(actionCause, meta, result, element);
	    };
	    Analytics.prototype.initializeAnalyticsEndpoint = function () {
	        return new AnalyticsEndpoint_1.AnalyticsEndpoint({
	            token: this.options.token,
	            serviceUrl: this.options.endpoint,
	            organization: this.options.organization
	        });
	    };
	    Analytics.prototype.initializeAnalyticsClient = function () {
	        if (Utils_1.Utils.isNonEmptyString(this.options.endpoint)) {
	            var endpoint = this.initializeAnalyticsEndpoint();
	            var elementToInitializeClient = void 0;
	            if (this.root && this.element) {
	                if (this.root.contains(this.element)) {
	                    elementToInitializeClient = this.root;
	                }
	                else {
	                    elementToInitializeClient = this.element;
	                }
	            }
	            var isRecommendation = Dom_1.$$(this.root).hasClass(Component_1.Component.computeCssClassName(Recommendation_1.Recommendation));
	            this.instantiateAnalyticsClient(endpoint, elementToInitializeClient, isRecommendation);
	        }
	        else {
	            this.client = new NoopAnalyticsClient_1.NoopAnalyticsClient();
	        }
	    };
	    Analytics.prototype.instantiateAnalyticsClient = function (endpoint, elementToInitializeClient, isRecommendation) {
	        if (isRecommendation) {
	            this.client = new RecommendationAnalyticsClient_1.RecommendationAnalyticsClient(endpoint, elementToInitializeClient, this.options.user, this.options.userDisplayName, this.options.anonymous, this.options.splitTestRunName, this.options.splitTestRunVersion, this.options.searchHub, this.options.sendToCloud, this.getBindings());
	        }
	        else {
	            this.client = new LiveAnalyticsClient_1.LiveAnalyticsClient(endpoint, elementToInitializeClient, this.options.user, this.options.userDisplayName, this.options.anonymous, this.options.splitTestRunName, this.options.splitTestRunVersion, this.options.searchHub, this.options.sendToCloud);
	        }
	    };
	    Analytics.prototype.retrieveInfoFromDefaultSearchEndpoint = function () {
	        var defaultEndpoint = SearchEndpoint_1.SearchEndpoint.endpoints['default'];
	        if (this.options.token == null && defaultEndpoint) {
	            this.options.token = defaultEndpoint.options.accessToken;
	        }
	        if (!this.options.organization && defaultEndpoint) {
	            this.options.organization = defaultEndpoint.options.queryStringArguments['workgroup'];
	        }
	    };
	    Analytics.prototype.handleBuildingQuery = function (data) {
	        Assert_1.Assert.exists(data);
	        data.queryBuilder.searchHub = this.options.searchHub;
	    };
	    Analytics.prototype.handleSearchHubChanged = function (data) {
	        this.options.searchHub = data.value;
	    };
	    Analytics.prototype.handleQueryError = function (data) {
	        Assert_1.Assert.exists(data);
	        this.client.logCustomEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.queryError, {
	            query: data.query.q,
	            aq: data.query.aq,
	            cq: data.query.cq,
	            dq: data.query.dq,
	            errorType: data.error.type,
	            errorMessage: data.error.message
	        }, this.element);
	    };
	    Analytics.create = function (element, options, bindings) {
	        var selector = Component_1.Component.computeSelectorForType(Analytics.ID);
	        var found = [];
	        found = found.concat(Dom_1.$$(element).findAll(selector));
	        if (!(Component_1.Component.get(element, SearchInterface_1.SearchInterface) instanceof Recommendation_1.Recommendation)) {
	            found = this.ignoreElementsInsideRecommendationInterface(found);
	        }
	        found.push(Dom_1.$$(element).closest(Component_1.Component.computeCssClassName(Analytics)));
	        if (Dom_1.$$(element).is(selector)) {
	            found.push(element);
	        }
	        found = _.compact(found);
	        if (found.length == 1) {
	            return Analytics.getClient(found[0], options, bindings);
	        }
	        else if (found.length > 1) {
	            return new MultiAnalyticsClient_1.MultiAnalyticsClient(_.map(found, function (el) { return Analytics.getClient(el, options, bindings); }));
	        }
	        else {
	            return new NoopAnalyticsClient_1.NoopAnalyticsClient();
	        }
	    };
	    Analytics.ignoreElementsInsideRecommendationInterface = function (found) {
	        return _.filter(found, function (element) {
	            return Dom_1.$$(element).closest(Component_1.Component.computeCssClassName(Recommendation_1.Recommendation)) === undefined;
	        });
	    };
	    Analytics.getClient = function (element, options, bindings) {
	        // This check if an element is already initialized as an analytics component.
	        // If that's the case, return the client on that element.
	        // Otherwise, init and return.
	        var foundOnElement = Component_1.Component.get(element, Analytics, true);
	        if (foundOnElement instanceof Analytics) {
	            return foundOnElement.client;
	        }
	        else {
	            return new Analytics(element, options, bindings).client;
	        }
	    };
	    Analytics.ID = 'Analytics';
	    // NOTE: The default values for some of those options (`organization`, `endpoint`, `searchHub`) can be
	    // overridden by generated code when using hosted search pages.
	    /**
	     * Options for the component
	     * @componentOptions
	     */
	    Analytics.options = {
	        /**
	         * Specifies the name of the user for usage analytics logs.
	         */
	        user: ComponentOptions_1.ComponentOptions.buildStringOption(),
	        /**
	         * Specifies the name of the user display name for usage analytics logs.
	         */
	        userDisplayName: ComponentOptions_1.ComponentOptions.buildStringOption(),
	        /**
	         * Specifies the token used to gain access the analytics endpoint.<br/>
	         * This attribute is optional, the component will use the search token by default.
	         */
	        token: ComponentOptions_1.ComponentOptions.buildStringOption(),
	        /**
	         * Specifies the URL of the analytics logger for rare cases where it is different from the default usage analytics Coveo Cloud endpoint (https://usageanalytics.coveo.com).
	         */
	        endpoint: ComponentOptions_1.ComponentOptions.buildStringOption({ defaultValue: AnalyticsEndpoint_1.AnalyticsEndpoint.DEFAULT_ANALYTICS_URI }),
	        /**
	         * Specifies whether the search user identities are converted in a unique hash in the logged analytics data to prevent analytics reviewers and managers to identify who performs which queries.<br/>
	         * When enabled, the Coveo Analytics Platform can still properly identify sessions made by anonymous users, versus ones from users that are authenticated in some way with the site containing the search page.<br/>
	         * The default value is `false`.
	         */
	        anonymous: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
	        /**
	         * Sets the Search Hub dimension on the search events.<br/>
	         * The Search Hub dimension is typically a name that refers to a specific search page. For example, one could use the CommunitySite value to refer to a search page on a company's public community site.<br/>
	         * The default value is default.
	         */
	        searchHub: ComponentOptions_1.ComponentOptions.buildStringOption({ defaultValue: 'default' }),
	        /**
	         * Specifies the name of the split test run that the search page is a part of.<br/>
	         * This dimension can be used to perform A/B testing using different search page layouts and features, inside the Coveo Query pipeline.<br/>
	         * By default, this value is not specified and no split test run name is reported to the Coveo Analytics Platform.
	         */
	        splitTestRunName: ComponentOptions_1.ComponentOptions.buildStringOption(),
	        /**
	         * Specifies the version name for the page when a split test run is active.<br/>
	         * When reporting on A/B testing analytics data, this value specifies the test run version name that has been presented to the user.<br/>
	         * By default, this value is not specified.
	         */
	        splitTestRunVersion: ComponentOptions_1.ComponentOptions.buildStringOption(),
	        sendToCloud: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }),
	        /**
	         * Specifies the organization bound to the access token. This is necessary when using an access token because it can be associated with more than organization.
	         * If this parameter is not specified, it will fallback on the organization used for the search endpoint.
	         */
	        organization: ComponentOptions_1.ComponentOptions.buildStringOption()
	    };
	    return Analytics;
	}(Component_1.Component));
	exports.Analytics = Analytics;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var DeviceUtils_1 = __webpack_require__(19);
	var PendingSearchEvent_1 = __webpack_require__(114);
	var PendingSearchAsYouTypeSearchEvent_1 = __webpack_require__(116);
	var Assert_1 = __webpack_require__(16);
	var Logger_1 = __webpack_require__(15);
	var AnalyticsActionListMeta_1 = __webpack_require__(109);
	var Defer_1 = __webpack_require__(30);
	var Dom_1 = __webpack_require__(56);
	var AnalyticsEvents_1 = __webpack_require__(39);
	var APIAnalyticsBuilder_1 = __webpack_require__(115);
	var QueryStateModel_1 = __webpack_require__(89);
	var Component_1 = __webpack_require__(95);
	var Version_1 = __webpack_require__(10);
	var LiveAnalyticsClient = (function () {
	    function LiveAnalyticsClient(endpoint, rootElement, userId, userDisplayName, anonymous, splitTestRunName, splitTestRunVersion, originLevel1, sendToCloud) {
	        this.endpoint = endpoint;
	        this.rootElement = rootElement;
	        this.userId = userId;
	        this.userDisplayName = userDisplayName;
	        this.anonymous = anonymous;
	        this.splitTestRunName = splitTestRunName;
	        this.splitTestRunVersion = splitTestRunVersion;
	        this.originLevel1 = originLevel1;
	        this.sendToCloud = sendToCloud;
	        this.isContextual = false;
	        this.language = String['locale'];
	        this.device = DeviceUtils_1.DeviceUtils.getDeviceName();
	        this.mobile = DeviceUtils_1.DeviceUtils.isMobileDevice();
	        Assert_1.Assert.exists(endpoint);
	        Assert_1.Assert.exists(rootElement);
	        Assert_1.Assert.isNonEmptyString(this.language);
	        Assert_1.Assert.isNonEmptyString(this.device);
	        Assert_1.Assert.isNonEmptyString(this.originLevel1);
	        this.logger = new Logger_1.Logger(this);
	    }
	    LiveAnalyticsClient.prototype.isActivated = function () {
	        return true;
	    };
	    LiveAnalyticsClient.prototype.getCurrentVisitId = function () {
	        return this.endpoint.getCurrentVisitId();
	    };
	    LiveAnalyticsClient.prototype.getCurrentVisitIdPromise = function () {
	        return this.endpoint.getCurrentVisitIdPromise();
	    };
	    LiveAnalyticsClient.prototype.getCurrentEventCause = function () {
	        if (this.pendingSearchEvent != null) {
	            return this.pendingSearchEvent.getEventCause();
	        }
	        if (this.pendingSearchAsYouTypeSearchEvent != null) {
	            return this.pendingSearchAsYouTypeSearchEvent.getEventCause();
	        }
	        return null;
	    };
	    LiveAnalyticsClient.prototype.getCurrentEventMeta = function () {
	        if (this.pendingSearchEvent != null) {
	            return this.pendingSearchEvent.getEventMeta();
	        }
	        if (this.pendingSearchAsYouTypeSearchEvent != null) {
	            return this.pendingSearchAsYouTypeSearchEvent.getEventMeta();
	        }
	        return null;
	    };
	    LiveAnalyticsClient.prototype.logSearchEvent = function (actionCause, meta) {
	        var metaObject = this.buildMetaObject(meta);
	        this.pushSearchEvent(actionCause, metaObject);
	    };
	    LiveAnalyticsClient.prototype.logSearchAsYouType = function (actionCause, meta) {
	        var metaObject = this.buildMetaObject(meta);
	        this.pushSearchAsYouTypeEvent(actionCause, metaObject);
	    };
	    LiveAnalyticsClient.prototype.logClickEvent = function (actionCause, meta, result, element) {
	        var metaObject = this.buildMetaObject(meta);
	        this.pushClickEvent(actionCause, metaObject, result, element);
	    };
	    LiveAnalyticsClient.prototype.logCustomEvent = function (actionCause, meta, element) {
	        var metaObject = this.buildMetaObject(meta);
	        this.pushCustomEvent(actionCause, metaObject, element);
	    };
	    LiveAnalyticsClient.prototype.getTopQueries = function (params) {
	        return this.endpoint.getTopQueries(params);
	    };
	    LiveAnalyticsClient.prototype.sendAllPendingEvents = function () {
	        if (this.pendingSearchAsYouTypeSearchEvent) {
	            this.pendingSearchAsYouTypeSearchEvent.sendRightNow();
	        }
	    };
	    LiveAnalyticsClient.prototype.cancelAllPendingEvents = function () {
	        if (this.pendingSearchAsYouTypeSearchEvent) {
	            this.pendingSearchAsYouTypeSearchEvent.cancel();
	            this.pendingSearchAsYouTypeSearchEvent = null;
	        }
	        if (this.pendingSearchEvent) {
	            this.pendingSearchEvent.cancel();
	            this.pendingSearchEvent = null;
	        }
	    };
	    LiveAnalyticsClient.prototype.getPendingSearchEvent = function () {
	        if (this.pendingSearchEvent) {
	            return this.pendingSearchEvent;
	        }
	        else if (this.pendingSearchAsYouTypeSearchEvent) {
	            return this.pendingSearchAsYouTypeSearchEvent;
	        }
	        return null;
	    };
	    LiveAnalyticsClient.prototype.warnAboutSearchEvent = function () {
	        if (_.isUndefined(this.pendingSearchEvent) && _.isUndefined(this.pendingSearchAsYouTypeSearchEvent)) {
	            this.logger.warn('A search was triggered, but no analytics event was logged. If you wish to have consistent analytics data, consider logging a search event using the methods provided by the framework', 'https://developers.coveo.com/x/TwA5');
	            if (window['console'] && console.trace) {
	                console.trace();
	            }
	        }
	    };
	    LiveAnalyticsClient.prototype.pushCustomEvent = function (actionCause, metaObject, element) {
	        var _this = this;
	        var customEvent = this.buildCustomEvent(actionCause, metaObject, element);
	        this.triggerChangeAnalyticsCustomData('CustomEvent', metaObject, customEvent);
	        this.checkToSendAnyPendingSearchAsYouType(actionCause);
	        Defer_1.Defer.defer(function () {
	            if (_this.sendToCloud) {
	                _this.endpoint.sendCustomEvent(customEvent);
	            }
	            Dom_1.$$(_this.rootElement).trigger(AnalyticsEvents_1.AnalyticsEvents.customEvent, { customEvent: APIAnalyticsBuilder_1.APIAnalyticsBuilder.convertCustomEventToAPI(customEvent) });
	        });
	    };
	    LiveAnalyticsClient.prototype.pushSearchEvent = function (actionCause, metaObject) {
	        var _this = this;
	        Assert_1.Assert.exists(actionCause);
	        if (this.pendingSearchEvent && this.pendingSearchEvent.getEventCause() !== actionCause.name) {
	            this.pendingSearchEvent.stopRecording();
	            this.pendingSearchEvent = null;
	        }
	        this.checkToSendAnyPendingSearchAsYouType(actionCause);
	        if (!this.pendingSearchEvent) {
	            var searchEvent = this.buildSearchEvent(actionCause, metaObject);
	            this.triggerChangeAnalyticsCustomData('SearchEvent', metaObject, searchEvent);
	            var pendingSearchEvent = this.pendingSearchEvent = new PendingSearchEvent_1.PendingSearchEvent(this.rootElement, this.endpoint, searchEvent, this.sendToCloud);
	            Defer_1.Defer.defer(function () {
	                // At this point all `duringQuery` events should have been fired, so we can forget
	                // about the pending search event. It will finish processing automatically when
	                // all the deferred that were caught terminate.
	                _this.pendingSearchEvent = undefined;
	                pendingSearchEvent.stopRecording();
	            });
	        }
	    };
	    LiveAnalyticsClient.prototype.checkToSendAnyPendingSearchAsYouType = function (actionCause) {
	        if (this.eventIsNotRelatedToSearchbox(actionCause.name)) {
	            this.sendAllPendingEvents();
	        }
	        else {
	            this.cancelAnyPendingSearchAsYouTypeEvent();
	        }
	    };
	    LiveAnalyticsClient.prototype.pushSearchAsYouTypeEvent = function (actionCause, metaObject) {
	        this.cancelAnyPendingSearchAsYouTypeEvent();
	        var searchEvent = this.buildSearchEvent(actionCause, metaObject);
	        this.triggerChangeAnalyticsCustomData('SearchEvent', metaObject, searchEvent);
	        this.pendingSearchAsYouTypeSearchEvent = new PendingSearchAsYouTypeSearchEvent_1.PendingSearchAsYouTypeSearchEvent(this.rootElement, this.endpoint, searchEvent, this.sendToCloud);
	    };
	    LiveAnalyticsClient.prototype.pushClickEvent = function (actionCause, metaObject, result, element) {
	        var _this = this;
	        var event = this.buildClickEvent(actionCause, metaObject, result, element);
	        this.checkToSendAnyPendingSearchAsYouType(actionCause);
	        this.triggerChangeAnalyticsCustomData('ClickEvent', metaObject, event, { resultData: result });
	        Assert_1.Assert.isNonEmptyString(event.searchQueryUid);
	        Assert_1.Assert.isNonEmptyString(event.collectionName);
	        Assert_1.Assert.isNonEmptyString(event.sourceName);
	        Assert_1.Assert.isNumber(event.documentPosition);
	        Defer_1.Defer.defer(function () {
	            if (_this.sendToCloud) {
	                _this.endpoint.sendDocumentViewEvent(event);
	            }
	            Dom_1.$$(_this.rootElement).trigger(AnalyticsEvents_1.AnalyticsEvents.documentViewEvent, {
	                documentViewEvent: APIAnalyticsBuilder_1.APIAnalyticsBuilder.convertDocumentViewToAPI(event)
	            });
	        });
	    };
	    LiveAnalyticsClient.prototype.buildAnalyticsEvent = function (actionCause, metaObject) {
	        return {
	            actionCause: actionCause.name,
	            actionType: actionCause.type,
	            username: this.userId,
	            userDisplayName: this.userDisplayName,
	            anonymous: this.anonymous,
	            device: this.device,
	            mobile: this.mobile,
	            language: this.language,
	            responseTime: undefined,
	            originLevel1: this.originLevel1,
	            originLevel2: this.getOriginLevel2(this.rootElement),
	            originLevel3: document.referrer,
	            customData: _.keys(metaObject).length > 0 ? metaObject : undefined,
	            userAgent: navigator.userAgent
	        };
	    };
	    LiveAnalyticsClient.prototype.buildSearchEvent = function (actionCause, metaObject) {
	        return this.merge(this.buildAnalyticsEvent(actionCause, metaObject), {
	            searchQueryUid: undefined,
	            pipeline: undefined,
	            splitTestRunName: this.splitTestRunName,
	            splitTestRunVersion: this.splitTestRunVersion,
	            queryText: undefined,
	            advancedQuery: undefined,
	            results: undefined,
	            resultsPerPage: undefined,
	            pageNumber: undefined,
	            didYouMean: undefined,
	            facets: undefined,
	            contextual: this.isContextual
	        });
	    };
	    LiveAnalyticsClient.prototype.buildClickEvent = function (actionCause, metaObject, result, element) {
	        return this.merge(this.buildAnalyticsEvent(actionCause, metaObject), {
	            searchQueryUid: result.queryUid,
	            queryPipeline: result.pipeline,
	            splitTestRunName: this.splitTestRunName || result.splitTestRun,
	            splitTestRunVersion: this.splitTestRunVersion || (result.splitTestRun != undefined ? result.pipeline : undefined),
	            documentUri: result.uri,
	            documentUriHash: result.raw['urihash'],
	            documentUrl: result.clickUri,
	            documentTitle: result.title,
	            documentCategory: result.raw['objecttype'],
	            originLevel2: this.getOriginLevel2(element),
	            collectionName: result.raw['collection'],
	            sourceName: result.raw['source'],
	            documentPosition: result.index + 1,
	            responseTime: 0,
	            viewMethod: actionCause.name,
	            rankingModifier: result.rankingModifier
	        });
	    };
	    LiveAnalyticsClient.prototype.buildCustomEvent = function (actionCause, metaObject, element) {
	        return this.merge(this.buildAnalyticsEvent(actionCause, metaObject), {
	            eventType: actionCause.type,
	            eventValue: actionCause.name,
	            originLevel2: this.getOriginLevel2(element),
	            responseTime: 0
	        });
	    };
	    LiveAnalyticsClient.prototype.getOriginLevel2 = function (element) {
	        return this.resolveActiveTabFromElement(element) || 'default';
	    };
	    LiveAnalyticsClient.prototype.buildMetaObject = function (meta) {
	        var build = _.extend({}, meta);
	        build['JSUIVersion'] = Version_1.version.lib + ';' + Version_1.version.product;
	        return build;
	    };
	    LiveAnalyticsClient.prototype.cancelAnyPendingSearchAsYouTypeEvent = function () {
	        if (this.pendingSearchAsYouTypeSearchEvent) {
	            this.pendingSearchAsYouTypeSearchEvent.cancel();
	            this.pendingSearchAsYouTypeSearchEvent = undefined;
	        }
	    };
	    LiveAnalyticsClient.prototype.resolveActiveTabFromElement = function (element) {
	        Assert_1.Assert.exists(element);
	        var queryStateModel = this.resolveQueryStateModel(element);
	        return (queryStateModel && queryStateModel.get(QueryStateModel_1.QueryStateModel.attributesEnum.t));
	    };
	    LiveAnalyticsClient.prototype.resolveQueryStateModel = function (rootElement) {
	        return Component_1.Component.resolveBinding(rootElement, QueryStateModel_1.QueryStateModel);
	    };
	    LiveAnalyticsClient.prototype.eventIsNotRelatedToSearchbox = function (event) {
	        return event !== AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxSubmit.name && event !== AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxClear.name;
	    };
	    LiveAnalyticsClient.prototype.triggerChangeAnalyticsCustomData = function (type, metaObject, event, data) {
	        var changeableAnalyticsDataObject = {
	            language: event.language,
	            originLevel1: event.originLevel1,
	            originLevel2: event.originLevel2,
	            originLevel3: event.originLevel3
	        };
	        // This is for backward compatibility. Before the analytics were using either numbered
	        // metas in `metaDataAsNumber` of later on named metas in `metaDataAsString`. Thus we still
	        // provide those properties in a deprecated way. Below we are moving any data that put
	        // in them to the root.
	        metaObject['metaDataAsString'] = {};
	        metaObject['metaDataAsNumber'] = {};
	        var args = _.extend({}, {
	            type: type,
	            metaObject: metaObject,
	            actionType: event.actionType,
	            actionCause: event.actionCause
	        }, changeableAnalyticsDataObject);
	        Dom_1.$$(this.rootElement).trigger(AnalyticsEvents_1.AnalyticsEvents.changeAnalyticsCustomData, args);
	        event.language = args.language;
	        event.originLevel1 = args.originLevel1;
	        event.originLevel2 = args.originLevel2;
	        event.originLevel3 = args.originLevel3;
	        event.customData = metaObject;
	        // This is for backward compatibility. Before the analytics were using either numbered
	        // metas in `metaDataAsNumber` of later on named metas in `metaDataAsString`. We are now putting
	        // them all at the root, and if I encounter the older properties I move them to the top
	        // level after issuing a warning.
	        var metaDataAsString = event.customData['metaDataAsString'];
	        if (_.keys(metaDataAsString).length > 0) {
	            this.logger.warn('Using deprecated \'metaDataAsString\' key to log custom analytics data. Custom meta should now be put at the root of the object.');
	            _.extend(event.customData, metaDataAsString);
	        }
	        delete event.customData['metaDataAsString'];
	        var metaDataAsNumber = event.customData['metaDataAsNumber'];
	        if (_.keys(metaDataAsNumber).length > 0) {
	            this.logger.warn('Using deprecated \'metaDataAsNumber\' key to log custom analytics data. Custom meta should now be put at the root of the object.');
	            _.extend(event.customData, metaDataAsNumber);
	        }
	        delete event.customData['metaDataAsNumber'];
	    };
	    LiveAnalyticsClient.prototype.merge = function (first, second) {
	        return _.extend({}, first, second);
	    };
	    return LiveAnalyticsClient;
	}());
	exports.LiveAnalyticsClient = LiveAnalyticsClient;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var QueryEvents_1 = __webpack_require__(46);
	var Assert_1 = __webpack_require__(16);
	var Dom_1 = __webpack_require__(56);
	var SearchInterface_1 = __webpack_require__(96);
	var Component_1 = __webpack_require__(95);
	var QueryController_1 = __webpack_require__(73);
	var Defer_1 = __webpack_require__(30);
	var APIAnalyticsBuilder_1 = __webpack_require__(115);
	var AnalyticsEvents_1 = __webpack_require__(39);
	var AnalyticsActionListMeta_1 = __webpack_require__(109);
	var QueryStateModel_1 = __webpack_require__(89);
	var PendingSearchEvent = (function () {
	    function PendingSearchEvent(root, endpoint, templateSearchEvent, sendToCloud) {
	        var _this = this;
	        this.root = root;
	        this.endpoint = endpoint;
	        this.templateSearchEvent = templateSearchEvent;
	        this.sendToCloud = sendToCloud;
	        this.searchPromises = [];
	        this.results = [];
	        this.cancelled = false;
	        this.finished = false;
	        this.searchEvents = [];
	        Assert_1.Assert.exists(root);
	        Assert_1.Assert.exists(endpoint);
	        Assert_1.Assert.exists(templateSearchEvent);
	        this.handler = function (evt, arg) {
	            _this.handleDuringQuery(evt, arg);
	        };
	        Dom_1.$$(root).on(QueryEvents_1.QueryEvents.duringQuery, this.handler);
	    }
	    PendingSearchEvent.prototype.getEventCause = function () {
	        return this.templateSearchEvent.actionCause;
	    };
	    PendingSearchEvent.prototype.getEventMeta = function () {
	        return this.templateSearchEvent.customData;
	    };
	    PendingSearchEvent.prototype.cancel = function () {
	        this.stopRecording();
	        this.cancelled = true;
	    };
	    PendingSearchEvent.prototype.handleDuringQuery = function (evt, args) {
	        var _this = this;
	        Assert_1.Assert.check(!this.finished);
	        Assert_1.Assert.check(!this.cancelled);
	        // When synchronizing multiple search interfaces under a single search event
	        // (think Salesforce boxes), we need to collect all search events and send them
	        // in one single batch. So we gather all events until we idle out and then we
	        // monitor those before sending the data.
	        this.searchPromises.push(args.promise);
	        // TODO: Maybe a better way to grab the search interface?
	        var eventTarget;
	        eventTarget = evt.target;
	        var searchInterface = Component_1.Component.get(eventTarget, SearchInterface_1.SearchInterface);
	        Assert_1.Assert.exists(searchInterface);
	        // TODO: Maybe a better way to grab the query controller?
	        var queryController = Component_1.Component.get(eventTarget, QueryController_1.QueryController);
	        Assert_1.Assert.exists(queryController);
	        args.promise.then(function (queryResults) {
	            Assert_1.Assert.exists(queryResults);
	            Assert_1.Assert.check(!_this.finished);
	            if (queryResults._reusedSearchUid !== true || _this.templateSearchEvent.actionCause == AnalyticsActionListMeta_1.analyticsActionCauseList.recommendation.name) {
	                var searchEvent = _.extend({}, _this.templateSearchEvent);
	                _this.fillSearchEvent(searchEvent, searchInterface, args.query, queryResults);
	                _this.searchEvents.push(searchEvent);
	                _this.results.push(queryResults);
	                return queryResults;
	            }
	        }).finally(function () {
	            var index = _.indexOf(_this.searchPromises, args.promise);
	            _this.searchPromises.splice(index, 1);
	            if (_this.searchPromises.length == 0) {
	                _this.flush();
	            }
	        });
	    };
	    PendingSearchEvent.prototype.stopRecording = function () {
	        if (this.handler) {
	            Dom_1.$$(this.root).off(QueryEvents_1.QueryEvents.duringQuery, this.handler);
	            Dom_1.$$(this.root).off(QueryEvents_1.QueryEvents.duringFetchMoreQuery, this.handler);
	            this.handler = null;
	        }
	    };
	    PendingSearchEvent.prototype.flush = function () {
	        var _this = this;
	        if (!this.cancelled) {
	            this.stopRecording();
	            this.finished = true;
	            Assert_1.Assert.check(this.searchEvents.length == this.results.length);
	            Defer_1.Defer.defer(function () {
	                if (_this.sendToCloud) {
	                    _this.endpoint.sendSearchEvents(_this.searchEvents);
	                }
	                var apiSearchEvents = _.map(_this.searchEvents, function (searchEvent) {
	                    return APIAnalyticsBuilder_1.APIAnalyticsBuilder.convertSearchEventToAPI(searchEvent);
	                });
	                Dom_1.$$(_this.root).trigger(AnalyticsEvents_1.AnalyticsEvents.searchEvent, { searchEvents: apiSearchEvents });
	            });
	        }
	    };
	    PendingSearchEvent.prototype.fillSearchEvent = function (searchEvent, searchInterface, query, queryResults) {
	        Assert_1.Assert.exists(searchEvent);
	        Assert_1.Assert.exists(searchInterface);
	        Assert_1.Assert.exists(query);
	        Assert_1.Assert.exists(queryResults);
	        var currentQuery = searchInterface.queryStateModel.get(QueryStateModel_1.QueryStateModel.attributesEnum.q);
	        searchEvent.queryPipeline = queryResults.pipeline;
	        searchEvent.splitTestRunName = searchEvent.splitTestRunName || queryResults.splitTestRun;
	        searchEvent.splitTestRunVersion = searchEvent.splitTestRunVersion || (queryResults.splitTestRun != undefined ? queryResults.pipeline : undefined);
	        searchEvent.originLevel2 = searchEvent.originLevel2 || searchInterface.queryStateModel.get('t') || 'default';
	        searchEvent.queryText = currentQuery || query.q || ''; // do not log the query sent to the server if possible; it may contain added syntax depending on options
	        searchEvent.advancedQuery = query.aq || '';
	        searchEvent.didYouMean = query.enableDidYouMean;
	        searchEvent.numberOfResults = queryResults.totalCount;
	        searchEvent.responseTime = queryResults.duration;
	        searchEvent.pageNumber = (query.firstResult / query.numberOfResults);
	        searchEvent.resultsPerPage = query.numberOfResults;
	        searchEvent.searchQueryUid = queryResults.searchUid;
	        searchEvent.queryPipeline = queryResults.pipeline;
	        // The context_${key} format is important for the Analytics backend
	        // This is what they use to recognize a custom data that will be used internally by other coveo's service.
	        // In this case, Reveal will be the consumer of this information.
	        if (query.context != undefined) {
	            _.each(query.context, function (value, key) {
	                searchEvent.customData[("context_" + key)] = value;
	            });
	        }
	    };
	    return PendingSearchEvent;
	}());
	exports.PendingSearchEvent = PendingSearchEvent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 115 */
/***/ function(module, exports) {

	"use strict";
	var APIAnalyticsBuilder = (function () {
	    function APIAnalyticsBuilder() {
	    }
	    APIAnalyticsBuilder.convertSearchEventToAPI = function (searchEvent) {
	        var apiSearchEvent = {
	            advancedQuery: searchEvent.advancedQuery,
	            customMetadatas: searchEvent.customData,
	            device: searchEvent.device,
	            didYouMean: searchEvent.didYouMean,
	            language: searchEvent.language,
	            pageNumber: searchEvent.pageNumber,
	            queryText: searchEvent.queryText,
	            responseTime: searchEvent.responseTime,
	            numberOfResults: searchEvent.numberOfResults,
	            resultsPerPage: searchEvent.resultsPerPage,
	            searchHub: searchEvent.originLevel1,
	            searchInterface: searchEvent.originLevel2,
	            searchQueryUid: searchEvent.searchQueryUid,
	            type: searchEvent.actionType,
	            actionCause: searchEvent.actionCause,
	            queryPipeline: searchEvent.queryPipeline,
	            splitTestRunName: searchEvent.splitTestRunName,
	            splitTestRunVersion: searchEvent.splitTestRunVersion
	        };
	        return apiSearchEvent;
	    };
	    APIAnalyticsBuilder.convertDocumentViewToAPI = function (documentView) {
	        var apiDocumentView = {
	            collectionName: documentView.collectionName,
	            device: documentView.device,
	            documentPosition: documentView.documentPosition,
	            title: documentView.documentTitle,
	            documentUrl: documentView.documentUrl,
	            documentUri: documentView.documentUri,
	            documentUriHash: documentView.documentUriHash,
	            language: documentView.language,
	            responseTime: documentView.responseTime,
	            searchHub: documentView.originLevel1,
	            searchInterface: documentView.originLevel2,
	            searchQueryUid: documentView.searchQueryUid,
	            sourceName: documentView.sourceName,
	            viewMethod: documentView.viewMethod,
	            customMetadatas: documentView.customData,
	            actionCause: documentView.actionCause,
	            queryPipeline: documentView.queryPipeline,
	            splitTestRunName: documentView.splitTestRunName,
	            splitTestRunVersion: documentView.splitTestRunVersion
	        };
	        return apiDocumentView;
	    };
	    APIAnalyticsBuilder.convertCustomEventToAPI = function (customEvent) {
	        var apiCustomEvent = {
	            actionCause: customEvent.actionCause,
	            actionType: customEvent.actionType,
	            device: customEvent.device,
	            language: customEvent.language,
	            responseTime: customEvent.responseTime,
	            searchHub: customEvent.originLevel1,
	            searchInterface: customEvent.originLevel2,
	            customMetadatas: customEvent.customData
	        };
	        return apiCustomEvent;
	    };
	    return APIAnalyticsBuilder;
	}());
	exports.APIAnalyticsBuilder = APIAnalyticsBuilder;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var PendingSearchEvent_1 = __webpack_require__(114);
	var Dom_1 = __webpack_require__(56);
	var InitializationEvents_1 = __webpack_require__(43);
	var _ = __webpack_require__(12);
	var PendingSearchAsYouTypeSearchEvent = (function (_super) {
	    __extends(PendingSearchAsYouTypeSearchEvent, _super);
	    function PendingSearchAsYouTypeSearchEvent(root, endpoint, templateSearchEvent, sendToCloud) {
	        var _this = this;
	        _super.call(this, root, endpoint, templateSearchEvent, sendToCloud);
	        this.root = root;
	        this.endpoint = endpoint;
	        this.templateSearchEvent = templateSearchEvent;
	        this.sendToCloud = sendToCloud;
	        this.delayBeforeSending = 5000;
	        this.armBatchDelay = 50;
	        this.beforeUnloadHandler = function () {
	            _this.onWindowUnload();
	        };
	        window.addEventListener('beforeunload', this.beforeUnloadHandler);
	        Dom_1.$$(root).on(InitializationEvents_1.InitializationEvents.nuke, function () { return _this.handleNuke(); });
	    }
	    PendingSearchAsYouTypeSearchEvent.prototype.handleDuringQuery = function (e, args) {
	        var _this = this;
	        var event = _.clone(e);
	        this.beforeResolve = new Promise(function (resolve) {
	            _this.toSendRightNow = function () {
	                if (!_this.isCancelledOrFinished()) {
	                    resolve(_this);
	                    _super.prototype.handleDuringQuery.call(_this, event, args);
	                }
	            };
	            _.delay(function () {
	                _this.toSendRightNow();
	            }, _this.delayBeforeSending);
	        });
	    };
	    PendingSearchAsYouTypeSearchEvent.prototype.sendRightNow = function () {
	        if (this.toSendRightNow) {
	            this.toSendRightNow();
	        }
	    };
	    PendingSearchAsYouTypeSearchEvent.prototype.modifyCustomData = function (key, newData) {
	        _.each(this.searchEvents, function (searchEvent) {
	            searchEvent.customData[key] = newData;
	        });
	        if (!this.templateSearchEvent.customData) {
	            this.templateSearchEvent.customData = {};
	        }
	        this.templateSearchEvent.customData[key] = newData;
	    };
	    PendingSearchAsYouTypeSearchEvent.prototype.modifyEventCause = function (newCause) {
	        _.each(this.searchEvents, function (searchEvent) {
	            searchEvent.actionCause = newCause.name;
	            searchEvent.actionType = newCause.type;
	        });
	        this.templateSearchEvent.actionCause = newCause.name;
	        this.templateSearchEvent.actionType = newCause.type;
	    };
	    PendingSearchAsYouTypeSearchEvent.prototype.stopRecording = function () {
	        _super.prototype.stopRecording.call(this);
	        if (this.beforeUnloadHandler) {
	            window.removeEventListener('beforeunload', this.beforeUnloadHandler);
	            this.beforeUnloadHandler = undefined;
	        }
	    };
	    PendingSearchAsYouTypeSearchEvent.prototype.handleNuke = function () {
	        window.removeEventListener('beforeunload', this.beforeUnloadHandler);
	    };
	    PendingSearchAsYouTypeSearchEvent.prototype.onWindowUnload = function () {
	        if (!this.isCancelledOrFinished()) {
	            this.armBatchDelay = 0;
	            this.sendRightNow();
	        }
	    };
	    PendingSearchAsYouTypeSearchEvent.prototype.isCancelledOrFinished = function () {
	        if (!this.cancelled) {
	            if (this.finished) {
	                this.cancel();
	                return true;
	            }
	            else {
	                return false;
	            }
	        }
	        else {
	            return true;
	        }
	    };
	    return PendingSearchAsYouTypeSearchEvent;
	}(PendingSearchEvent_1.PendingSearchEvent));
	exports.PendingSearchAsYouTypeSearchEvent = PendingSearchAsYouTypeSearchEvent;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var MultiAnalyticsClient = (function () {
	    function MultiAnalyticsClient(analyticsClients) {
	        if (analyticsClients === void 0) { analyticsClients = []; }
	        this.analyticsClients = analyticsClients;
	        this.isContextual = false;
	    }
	    MultiAnalyticsClient.prototype.isActivated = function () {
	        return _.some(this.analyticsClients, function (analyticsClient) { return analyticsClient.isActivated(); });
	    };
	    MultiAnalyticsClient.prototype.getCurrentEventCause = function () {
	        return _.find(_.map(this.analyticsClients, function (analyticsClient) { return analyticsClient.getCurrentEventCause(); }), function (currentEventCause) { return currentEventCause != null; });
	    };
	    MultiAnalyticsClient.prototype.getCurrentEventMeta = function () {
	        return _.find(_.map(this.analyticsClients, function (analyticsClient) { return analyticsClient.getCurrentEventMeta(); }), function (currentEventMeta) { return currentEventMeta != null; });
	    };
	    MultiAnalyticsClient.prototype.logSearchEvent = function (actionCause, meta) {
	        _.each(this.analyticsClients, function (analyticsClient) { return analyticsClient.logSearchEvent(actionCause, meta); });
	    };
	    MultiAnalyticsClient.prototype.logSearchAsYouType = function (actionCause, meta) {
	        _.each(this.analyticsClients, function (analyticsClient) { return analyticsClient.logSearchEvent(actionCause, meta); });
	    };
	    MultiAnalyticsClient.prototype.logClickEvent = function (actionCause, meta, result, element) {
	        _.each(this.analyticsClients, function (analyticsClient) { return analyticsClient.logClickEvent(actionCause, meta, result, element); });
	    };
	    MultiAnalyticsClient.prototype.logCustomEvent = function (actionCause, meta, element) {
	        _.each(this.analyticsClients, function (analyticsClient) { return analyticsClient.logCustomEvent(actionCause, meta, element); });
	    };
	    MultiAnalyticsClient.prototype.getTopQueries = function (params) {
	        var _this = this;
	        return Promise.all(_.map(this.analyticsClients, function (client) {
	            return client.getTopQueries(params);
	        }))
	            .then(function (values) {
	            return _this.mergeTopQueries(values, params.pageSize);
	        });
	    };
	    MultiAnalyticsClient.prototype.getCurrentVisitIdPromise = function () {
	        return _.first(this.analyticsClients).getCurrentVisitIdPromise();
	    };
	    MultiAnalyticsClient.prototype.getCurrentVisitId = function () {
	        return _.first(this.analyticsClients).getCurrentVisitId();
	    };
	    MultiAnalyticsClient.prototype.sendAllPendingEvents = function () {
	        _.each(this.analyticsClients, function (analyticsClient) { return analyticsClient.sendAllPendingEvents(); });
	    };
	    MultiAnalyticsClient.prototype.warnAboutSearchEvent = function () {
	        _.each(this.analyticsClients, function (analyticsClient) { return analyticsClient.warnAboutSearchEvent(); });
	    };
	    MultiAnalyticsClient.prototype.cancelAllPendingEvents = function () {
	        _.each(this.analyticsClients, function (analyticsClient) { return analyticsClient.cancelAllPendingEvents(); });
	    };
	    MultiAnalyticsClient.prototype.getPendingSearchEvent = function () {
	        return _.first(this.analyticsClients).getPendingSearchEvent();
	    };
	    MultiAnalyticsClient.prototype.mergeTopQueries = function (values, pageSize) {
	        if (pageSize === void 0) { pageSize = 5; }
	        return _.chain(values)
	            .flatten()
	            .first(pageSize)
	            .value();
	    };
	    return MultiAnalyticsClient;
	}());
	exports.MultiAnalyticsClient = MultiAnalyticsClient;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var LiveAnalyticsClient_1 = __webpack_require__(113);
	var AnalyticsActionListMeta_1 = __webpack_require__(109);
	var Component_1 = __webpack_require__(95);
	var SearchInterface_1 = __webpack_require__(96);
	var RecommendationAnalyticsClient = (function (_super) {
	    __extends(RecommendationAnalyticsClient, _super);
	    function RecommendationAnalyticsClient(endpoint, rootElement, userId, userDisplayName, anonymous, splitTestRunName, splitTestRunVersion, originLevel1, sendToCloud, bindings) {
	        _super.call(this, endpoint, rootElement, userId, userDisplayName, anonymous, splitTestRunName, splitTestRunVersion, originLevel1, sendToCloud);
	        this.endpoint = endpoint;
	        this.rootElement = rootElement;
	        this.userId = userId;
	        this.userDisplayName = userDisplayName;
	        this.anonymous = anonymous;
	        this.splitTestRunName = splitTestRunName;
	        this.splitTestRunVersion = splitTestRunVersion;
	        this.originLevel1 = originLevel1;
	        this.sendToCloud = sendToCloud;
	        this.bindings = bindings;
	        this.recommendation = this.bindings.searchInterface;
	    }
	    RecommendationAnalyticsClient.prototype.logSearchEvent = function (actionCause, meta) {
	        if (actionCause == AnalyticsActionListMeta_1.analyticsActionCauseList.interfaceLoad) {
	            actionCause = AnalyticsActionListMeta_1.analyticsActionCauseList.recommendationInterfaceLoad;
	        }
	        _super.prototype.logSearchEvent.call(this, actionCause, meta);
	    };
	    RecommendationAnalyticsClient.prototype.logClickEvent = function (actionCause, meta, result, element) {
	        if (actionCause == AnalyticsActionListMeta_1.analyticsActionCauseList.documentOpen) {
	            actionCause = AnalyticsActionListMeta_1.analyticsActionCauseList.recommendationOpen;
	        }
	        _super.prototype.logClickEvent.call(this, actionCause, meta, result, element);
	        if (this.recommendation.mainQuerySearchUID) {
	            // We log a second click associated with the main interface query to tell the analytics that the query was a success.
	            var mainInterface = Component_1.Component.get(this.recommendation.options.mainSearchInterface, SearchInterface_1.SearchInterface);
	            result.queryUid = this.recommendation.mainQuerySearchUID;
	            mainInterface.usageAnalytics.logClickEvent(actionCause, meta, result, element);
	        }
	    };
	    RecommendationAnalyticsClient.prototype.getOriginLevel2 = function (element) {
	        return this.recommendation.getId();
	    };
	    return RecommendationAnalyticsClient;
	}(LiveAnalyticsClient_1.LiveAnalyticsClient));
	exports.RecommendationAnalyticsClient = RecommendationAnalyticsClient;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Initialization_1 = __webpack_require__(94);
	if (!initCoveoJQuery()) {
	    // Adding a check in case jQuery was added after the jsSearch
	    // Since this event listener is registered before the Coveo.init call, JQuery should always be initiated before the Coveo.init call  
	    document.addEventListener('DOMContentLoaded', function () {
	        initCoveoJQuery();
	    });
	}
	function initCoveoJQuery() {
	    if (!jQueryIsDefined()) {
	        return false;
	    }
	    exports.jQueryInstance = getJQuery();
	    if (window['Coveo'] == undefined) {
	        window['Coveo'] = {};
	    }
	    if (window['Coveo']['$'] == undefined) {
	        window['Coveo']['$'] = exports.jQueryInstance;
	    }
	    exports.jQueryInstance.fn.coveo = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        var returnValue;
	        this.each(function (index, element) {
	            var returnValueForThisElement;
	            if (_.isString(args[0])) {
	                var token = args[0];
	                returnValueForThisElement = Initialization_1.Initialization.dispatchNamedMethodCallOrComponentCreation(token, element, args.slice(1));
	            }
	            else {
	                // Invoking with no method name is a shortcut for the 'get' method (from Component).
	                returnValueForThisElement = Initialization_1.Initialization.dispatchNamedMethodCall('get', element, args);
	            }
	            // Keep only the first return value we encounter
	            returnValue = returnValue || returnValueForThisElement;
	        });
	        return returnValue;
	    };
	    return true;
	}
	exports.initCoveoJQuery = initCoveoJQuery;
	function jQueryIsDefined() {
	    return jQueryDefinedOnWindow() || jQueryDefinedOnCoveoObject();
	}
	exports.jQueryIsDefined = jQueryIsDefined;
	function jQueryDefinedOnCoveoObject() {
	    return window['Coveo'] != undefined && window['Coveo']['$'] != undefined;
	}
	function jQueryDefinedOnWindow() {
	    return window['$'] != undefined && window['$'].fn != undefined && window['$'].fn.jquery != undefined;
	}
	function getJQuery() {
	    var jQueryInstance;
	    if (window['$']) {
	        jQueryInstance = window['$'];
	    }
	    else {
	        jQueryInstance = window['Coveo']['$'];
	    }
	    return jQueryInstance;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var TemplateHelpers_1 = __webpack_require__(121);
	exports.TemplateHelpers = TemplateHelpers_1.TemplateHelpers;
	var TemplateCache_1 = __webpack_require__(98);
	exports.TemplateCache = TemplateCache_1.TemplateCache;
	var HtmlTemplate_1 = __webpack_require__(101);
	exports.HtmlTemplate = HtmlTemplate_1.HtmlTemplate;
	var UnderscoreTemplate_1 = __webpack_require__(100);
	exports.UnderscoreTemplate = UnderscoreTemplate_1.UnderscoreTemplate;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Assert_1 = __webpack_require__(16);
	var UnderscoreTemplate_1 = __webpack_require__(100);
	var Utils_1 = __webpack_require__(17);
	/**
	 * Allow to register and return template helpers (essentially: Utility functions that can be executed in the context of a template to render complex elements).
	 */
	var TemplateHelpers = (function () {
	    function TemplateHelpers() {
	    }
	    TemplateHelpers.registerFieldHelper = function (name, helper) {
	        TemplateHelpers.fieldHelpers.push(name);
	        TemplateHelpers.registerTemplateHelper(name, helper);
	    };
	    /**
	     * Register a new helper in the framework, that will be available inside all templates execution context.
	     * @param name
	     * @param helper
	     */
	    TemplateHelpers.registerTemplateHelper = function (name, helper) {
	        Assert_1.Assert.isNonEmptyString(name);
	        Assert_1.Assert.exists(helper);
	        TemplateHelpers.registerTemplateHelperInUnderscore(name, helper);
	        TemplateHelpers.helpers[name] = helper;
	    };
	    /**
	     * Return a template helper function
	     * @param name
	     * @returns {any}
	     */
	    TemplateHelpers.getHelper = function (name) {
	        return Utils_1.Utils.getCaseInsensitiveProperty(TemplateHelpers.helpers, name);
	    };
	    /**
	     * Get all available helpers
	     * @returns {{}}
	     */
	    TemplateHelpers.getHelpers = function () {
	        return TemplateHelpers.helpers;
	    };
	    TemplateHelpers.registerTemplateHelperInUnderscore = function (name, helper) {
	        Assert_1.Assert.isNonEmptyString(name);
	        Assert_1.Assert.exists(helper);
	        UnderscoreTemplate_1.UnderscoreTemplate.registerTemplateHelper(name, helper);
	    };
	    TemplateHelpers.helpers = {};
	    TemplateHelpers.fieldHelpers = [];
	    return TemplateHelpers;
	}());
	exports.TemplateHelpers = TemplateHelpers;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var TemplateHelpers_1 = __webpack_require__(121);
	var ComponentOptions_1 = __webpack_require__(97);
	var HighlightUtils_1 = __webpack_require__(65);
	var DateUtils_1 = __webpack_require__(55);
	var CurrencyUtils_1 = __webpack_require__(54);
	var HtmlUtils_1 = __webpack_require__(66);
	var Icon_1 = __webpack_require__(123);
	var Utils_1 = __webpack_require__(17);
	var StringUtils_1 = __webpack_require__(60);
	var TimeSpanUtils_1 = __webpack_require__(18);
	var EmailUtils_1 = __webpack_require__(62);
	var QueryUtils_1 = __webpack_require__(22);
	var DeviceUtils_1 = __webpack_require__(19);
	var TemplateCache_1 = __webpack_require__(98);
	var Dom_1 = __webpack_require__(56);
	var SearchEndpoint_1 = __webpack_require__(11);
	var ResultList_1 = __webpack_require__(127);
	var StreamHighlightUtils_1 = __webpack_require__(71);
	var Globalize = __webpack_require__(4);
	var Quickview_1 = __webpack_require__(124);
	var CoreHelpers = (function () {
	    function CoreHelpers() {
	    }
	    /**
	     * For backward compatibility reason, the "global" template helper should be available under the
	     * coveo namespace.
	     * @param scope
	     */
	    CoreHelpers.exportAllHelpersGlobally = function (scope) {
	        _.each(TemplateHelpers_1.TemplateHelpers.getHelpers(), function (helper, name) {
	            if (scope[name] == undefined) {
	                scope[name] = helper;
	            }
	        });
	    };
	    return CoreHelpers;
	}());
	exports.CoreHelpers = CoreHelpers;
	TemplateHelpers_1.TemplateHelpers.registerFieldHelper('javascriptEncode', function (value) {
	    return Utils_1.Utils.exists(value) ? StringUtils_1.StringUtils.javascriptEncode(value) : undefined;
	});
	TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('shorten', function (content, length, highlights, cssClass) {
	    var strAndHoles = HighlightUtils_1.StringAndHoles.shortenString(content, length, '...');
	    if (Utils_1.Utils.exists(highlights)) {
	        return HighlightUtils_1.HighlightUtils.highlightString(strAndHoles.value, highlights, strAndHoles.holes, cssClass || 'highlight');
	    }
	    else {
	        return strAndHoles.value;
	    }
	});
	TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('shortenPath', function (content, length, highlights, cssClass) {
	    var strAndHoles = HighlightUtils_1.StringAndHoles.shortenPath(content, length);
	    if (Utils_1.Utils.exists(highlights)) {
	        return HighlightUtils_1.HighlightUtils.highlightString(strAndHoles.value, highlights, strAndHoles.holes, cssClass || 'highlight');
	    }
	    else {
	        return strAndHoles.value;
	    }
	});
	TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('shortenUri', function (content, length, highlights, cssClass) {
	    var strAndHoles = HighlightUtils_1.StringAndHoles.shortenUri(content, length);
	    if (Utils_1.Utils.exists(highlights)) {
	        return HighlightUtils_1.HighlightUtils.highlightString(strAndHoles.value, highlights, strAndHoles.holes, cssClass || 'highlight');
	    }
	    else {
	        return strAndHoles.value;
	    }
	});
	TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('highlight', function (content, highlights, cssClass) {
	    if (Utils_1.Utils.exists(content)) {
	        if (Utils_1.Utils.exists(highlights)) {
	            return HighlightUtils_1.HighlightUtils.highlightString(content, highlights, null, cssClass || 'highlight');
	        }
	        else {
	            return content;
	        }
	    }
	    else {
	        return undefined;
	    }
	});
	TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('highlightStreamText', function (content, termsToHighlight, phrasesToHighlight, opts) {
	    if (termsToHighlight === void 0) { termsToHighlight = resolveTermsToHighlight(); }
	    if (phrasesToHighlight === void 0) { phrasesToHighlight = resolvePhrasesToHighlight(); }
	    if (Utils_1.Utils.exists(content) && Utils_1.Utils.exists(termsToHighlight) && Utils_1.Utils.exists(phrasesToHighlight)) {
	        if (Utils_1.Utils.isNonEmptyArray(_.keys(termsToHighlight)) || Utils_1.Utils.isNonEmptyArray(_.keys(phrasesToHighlight))) {
	            return StreamHighlightUtils_1.StreamHighlightUtils.highlightStreamText(content, termsToHighlight, phrasesToHighlight, opts);
	        }
	        else {
	            return content;
	        }
	    }
	    else {
	        return undefined;
	    }
	});
	TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('highlightStreamHTML', function (content, termsToHighlight, phrasesToHighlight, opts) {
	    if (termsToHighlight === void 0) { termsToHighlight = resolveTermsToHighlight(); }
	    if (phrasesToHighlight === void 0) { phrasesToHighlight = resolvePhrasesToHighlight(); }
	    if (Utils_1.Utils.exists(content) && Utils_1.Utils.exists(termsToHighlight) && Utils_1.Utils.exists(phrasesToHighlight)) {
	        if (Utils_1.Utils.isNonEmptyArray(termsToHighlight)) {
	            return StreamHighlightUtils_1.StreamHighlightUtils.highlightStreamHTML(content, termsToHighlight, phrasesToHighlight, opts);
	        }
	        else {
	            return content;
	        }
	    }
	    else {
	        return undefined;
	    }
	});
	TemplateHelpers_1.TemplateHelpers.registerFieldHelper('number', function (value, options) {
	    var numberValue = Number(value);
	    if (Utils_1.Utils.exists(value)) {
	        if (_.isString(options)) {
	            return StringUtils_1.StringUtils.htmlEncode(Globalize.format(numberValue, options));
	        }
	        else {
	            return StringUtils_1.StringUtils.htmlEncode(numberValue.toString());
	        }
	    }
	    else {
	        return undefined;
	    }
	});
	TemplateHelpers_1.TemplateHelpers.registerFieldHelper('date', function (value, options) {
	    return DateUtils_1.DateUtils.dateToString(DateUtils_1.DateUtils.convertFromJsonDateIfNeeded(value), options);
	});
	TemplateHelpers_1.TemplateHelpers.registerFieldHelper('time', function (value, options) {
	    return DateUtils_1.DateUtils.timeToString(DateUtils_1.DateUtils.convertFromJsonDateIfNeeded(value), options);
	});
	TemplateHelpers_1.TemplateHelpers.registerFieldHelper('dateTime', function (value, options) {
	    return DateUtils_1.DateUtils.dateTimeToString(DateUtils_1.DateUtils.convertFromJsonDateIfNeeded(value), options);
	});
	TemplateHelpers_1.TemplateHelpers.registerFieldHelper('emailDateTime', function (value, options) {
	    var defaultOptions = {};
	    defaultOptions.includeTimeIfThisWeek = true;
	    var optionsToUse = _.extend(options, defaultOptions);
	    return value ? DateUtils_1.DateUtils.dateTimeToString(DateUtils_1.DateUtils.convertFromJsonDateIfNeeded(value), optionsToUse) : undefined;
	});
	TemplateHelpers_1.TemplateHelpers.registerFieldHelper('currency', function (value, options) {
	    return CurrencyUtils_1.CurrencyUtils.currencyToString(value, options);
	});
	TemplateHelpers_1.TemplateHelpers.registerFieldHelper('timeSpan', function (value, options) {
	    if (options === void 0) { options = { isMilliseconds: false }; }
	    return new TimeSpanUtils_1.TimeSpan(value, options.isMilliseconds).getHHMMSS();
	});
	TemplateHelpers_1.TemplateHelpers.registerFieldHelper('email', function (value) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    // support old arguments (value: any, companyDomain: string, me: string, lengthLimit = 2, truncateName = false)
	    var companyDomain;
	    var me;
	    var lengthLimit;
	    var truncateName;
	    if (_.isObject(args[0])) {
	        companyDomain = args[0]['companyDomain'];
	        me = args[0]['me'];
	        lengthLimit = args[0]['lengthLimit'];
	        truncateName = args[0]['truncateName'];
	    }
	    else {
	        companyDomain = args[0];
	        me = args[1];
	        lengthLimit = args[2];
	        truncateName = args[3];
	    }
	    if (lengthLimit == undefined) {
	        lengthLimit = 2;
	    }
	    if (truncateName == undefined) {
	        truncateName = false;
	    }
	    if (_.isString(value)) {
	        var listOfAddresses = EmailUtils_1.EmailUtils.splitSemicolonSeparatedListOfEmailAddresses(value);
	        return EmailUtils_1.EmailUtils.emailAddressesToHyperlinks(listOfAddresses, companyDomain, me, lengthLimit, truncateName);
	    }
	    else if (_.isArray(value)) {
	        return EmailUtils_1.EmailUtils.emailAddressesToHyperlinks(value, companyDomain, me, lengthLimit, truncateName);
	    }
	    else {
	        return undefined;
	    }
	});
	TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('excessEmailToggle', function (target) {
	    Dom_1.$$(target).removeClass('coveo-active');
	    if (Dom_1.$$(target).hasClass('coveo-emails-excess-collapsed')) {
	        _.each(Dom_1.$$(target).siblings('.coveo-emails-excess-expanded'), function (sibling) {
	            Dom_1.$$(sibling).addClass('coveo-active');
	        });
	    }
	    else if (Dom_1.$$(target).hasClass('coveo-hide-expanded')) {
	        Dom_1.$$(target.parentElement).addClass('coveo-inactive');
	        _.each(Dom_1.$$(target.parentElement).siblings('.coveo-emails-excess-collapsed'), function (sibling) {
	            Dom_1.$$(sibling).addClass('coveo-active');
	        });
	    }
	    return undefined;
	});
	TemplateHelpers_1.TemplateHelpers.registerFieldHelper('anchor', function (href, options) {
	    return HtmlUtils_1.AnchorUtils.buildAnchor(href, options);
	});
	TemplateHelpers_1.TemplateHelpers.registerFieldHelper('image', function (src, options) {
	    return HtmlUtils_1.ImageUtils.buildImage(src, options);
	});
	TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('thumbnail', function (result, endpoint, options) {
	    if (result === void 0) { result = resolveQueryResult(); }
	    if (endpoint === void 0) { endpoint = 'default'; }
	    if (QueryUtils_1.QueryUtils.hasThumbnail(result)) {
	        return HtmlUtils_1.ImageUtils.buildImageFromResult(result, SearchEndpoint_1.SearchEndpoint.endpoints[endpoint], options);
	    }
	});
	TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('fromFileTypeToIcon', function (result, options) {
	    if (result === void 0) { result = resolveQueryResult(); }
	    if (options === void 0) { options = {}; }
	    return Icon_1.Icon.createIcon(result, options).outerHTML;
	});
	TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('attrEncode', function (value) {
	    return ('' + value) /* Forces the conversion to string. */
	        .replace(/&/g, '&amp;') /* This MUST be the 1st replacement. */
	        .replace(/'/g, '&apos;') /* The 4 other predefined entities, required. */
	        .replace(/'/g, '&quot;')
	        .replace(/</g, '&lt;')
	        .replace(/>/g, '&gt;');
	});
	TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('templateFields', function (result) {
	    if (result === void 0) { result = resolveQueryResult(); }
	    var rows = [];
	    if (result.fields != null) {
	        _.forEach(result.fields, function (tableField) {
	            var tr = Dom_1.$$('tr');
	            _.forEach(tableField, function (value, key) {
	                if (_.isObject(value)) {
	                    tr.setAttribute(ComponentOptions_1.ComponentOptions.attrNameFromName(key), JSON.stringify(value));
	                }
	                else {
	                    tr.setAttribute(ComponentOptions_1.ComponentOptions.attrNameFromName(key), value);
	                }
	            });
	            return rows.push(tr.el.outerHTML);
	        });
	    }
	    return rows.join('');
	});
	TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('loadTemplates', function (templatesToLoad, once) {
	    if (once === void 0) { once = true; }
	    var ret = '';
	    var data = resolveQueryResult();
	    var atLeastOneWasLoaded = false;
	    var toLoad = templatesToLoad;
	    var defaultTmpl;
	    _.each(templatesToLoad, function (value, key, obj) {
	        if (value == 'default') {
	            defaultTmpl = key;
	        }
	    });
	    if (defaultTmpl != undefined) {
	        toLoad = _.omit(templatesToLoad, defaultTmpl);
	    }
	    _.each(toLoad, function (condition, id, obj) {
	        if (!atLeastOneWasLoaded || !once) {
	            atLeastOneWasLoaded = atLeastOneWasLoaded || condition;
	            ret += TemplateHelpers_1.TemplateHelpers.getHelper('loadTemplate')(id, condition, data);
	        }
	    });
	    if (!atLeastOneWasLoaded && defaultTmpl != undefined) {
	        ret += TemplateHelpers_1.TemplateHelpers.getHelper('loadTemplate')(defaultTmpl, true, data);
	    }
	    return ret;
	});
	var byteMeasure = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
	TemplateHelpers_1.TemplateHelpers.registerFieldHelper('size', function (value, options) {
	    var size = Number(value);
	    var presision = (options != null && options.presision != null ? options.presision : 2);
	    var base = (options != null && options.base != null ? options.base : 0);
	    while (size > 1024 && base + 1 < byteMeasure.length) {
	        size /= 1024;
	        base++;
	    }
	    size = Math.floor(size * Math.pow(10, presision)) / Math.pow(10, presision);
	    return size + ' ' + byteMeasure[base];
	});
	TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('loadTemplate', function (id, condition, data) {
	    if (condition === void 0) { condition = true; }
	    if (Utils_1.Utils.isNullOrUndefined(data)) {
	        data = resolveQueryResult();
	    }
	    if (condition) {
	        return TemplateCache_1.TemplateCache.getTemplate(id).instantiateToString(data, false);
	    }
	    return '';
	});
	TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('encodeCarriageReturn', function (data) {
	    if (Utils_1.Utils.isNullOrUndefined(data)) {
	        return undefined;
	    }
	    else {
	        return StringUtils_1.StringUtils.encodeCarriageReturn(data);
	    }
	});
	TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('isMobileDevice', function () {
	    return DeviceUtils_1.DeviceUtils.isMobileDevice() ? DeviceUtils_1.DeviceUtils.getDeviceName() : null;
	});
	function resolveQueryResult() {
	    return ResultList_1.ResultList.resultCurrentlyBeingRendered || Quickview_1.Quickview.resultCurrentlyBeingRendered;
	}
	function resolveTermsToHighlight() {
	    var currentQueryResult = resolveQueryResult();
	    if (currentQueryResult) {
	        return currentQueryResult.termsToHighlight;
	    }
	}
	function resolvePhrasesToHighlight() {
	    var currentQueryResult = resolveQueryResult();
	    if (currentQueryResult) {
	        return currentQueryResult.phrasesToHighlight;
	    }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Component_1 = __webpack_require__(95);
	var ComponentOptions_1 = __webpack_require__(97);
	var Assert_1 = __webpack_require__(16);
	var QueryUtils_1 = __webpack_require__(22);
	var Initialization_1 = __webpack_require__(94);
	var Utils_1 = __webpack_require__(17);
	var FileTypes_1 = __webpack_require__(59);
	var Quickview_1 = __webpack_require__(124);
	var Dom_1 = __webpack_require__(56);
	/**
	 * An icon component is a Result template component which outputs the corresponding icon for a given filetype. It uses the
	 * available icons in the framework, and if no suitable one are found, it fallback on a generic icon.
	 */
	var Icon = (function (_super) {
	    __extends(Icon, _super);
	    /**
	     * Create a new Icon component
	     * @param element
	     * @param options
	     * @param bindings
	     * @param result
	     */
	    function Icon(element, options, bindings, result) {
	        _super.call(this, element, Icon.ID, bindings);
	        this.element = element;
	        this.options = options;
	        this.result = result;
	        this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, Icon, options);
	        this.result = this.result || this.resolveResult();
	        Assert_1.Assert.exists(this.result);
	        var possibleInternalQuickview = Dom_1.$$(this.element).find('.' + Component_1.Component.computeCssClassNameForType(Quickview_1.Quickview.ID));
	        if (!Utils_1.Utils.isNullOrUndefined(possibleInternalQuickview) && QueryUtils_1.QueryUtils.hasHTMLVersion(this.result)) {
	            Dom_1.$$(this.element).addClass('coveo-with-quickview');
	            Dom_1.$$(this.element).on('click', function () {
	                var qv = Component_1.Component.get(possibleInternalQuickview);
	                qv.open();
	            });
	        }
	        Icon.createIcon(this.result, this.options, element, bindings);
	    }
	    Icon.createIcon = function (result, options, element, bindings) {
	        if (options === void 0) { options = {}; }
	        if (element === void 0) { element = Dom_1.$$('div').el; }
	        var info = FileTypes_1.FileTypes.get(result);
	        info = Icon.preprocessIconInfo(options, info);
	        Dom_1.$$(element).toggleClass('coveo-small', options.small === true);
	        if (options.value != undefined) {
	            if (options.small === true) {
	                if (options.value.indexOf('-small') == -1) {
	                    info.icon += '-small';
	                }
	            }
	            if (options.small === false) {
	                if (options.value.indexOf('-small') != -1) {
	                    info.icon = info.icon.replace('-small', '');
	                }
	            }
	        }
	        Dom_1.$$(element).addClass(info.icon);
	        element.setAttribute('title', info.caption);
	        if (Icon.shouldDisplayLabel(options, bindings)) {
	            element.appendChild(Dom_1.$$('span', {
	                className: 'coveo-icon-caption-overlay'
	            }, info.caption).el);
	            Dom_1.$$(element).addClass('coveo-icon-with-caption-overlay');
	        }
	        return element;
	    };
	    Icon.shouldDisplayLabel = function (options, bindings) {
	        // Display only in new design.
	        // If withLabel is explicitely set to false, the label will never display
	        // If withLabel is explicitely set to true, the label will always display
	        // If withLabel is set to default value (not a hard true or false), the label will display based on ./core/filetypes/**.json
	        // with the property shouldDisplayLabel set on each file type/ objecttype
	        // In this case, the generated css will take care of outputting the correct css to display : block
	        return bindings && bindings.searchInterface.isNewDesign() && options.withLabel !== false;
	    };
	    Icon.preprocessIconInfo = function (options, info) {
	        if (options.labelValue != null) {
	            info.caption = options.labelValue;
	        }
	        if (options.value != null) {
	            info.icon = 'coveo-icon ' + options.value;
	        }
	        if (info.caption == null) {
	            info.caption = '';
	        }
	        if (info.icon == null) {
	            info.icon = 'coveo-icon coveo-sprites-custom';
	        }
	        return info;
	    };
	    Icon.ID = 'Icon';
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    Icon.options = {
	        /**
	         * Setting this value will tell the `Icon` component to output this value as its CSS class, instead of the auto-selected one.<br/>
	         * Default is `undefined`, and the framework will determine an icon from the result filetype.
	         */
	        value: ComponentOptions_1.ComponentOptions.buildIconOption(),
	        /**
	         * Setting this value to true will output the smaller version of the auto-generated icon.<br/>
	         * Default is `false`.
	         */
	        small: ComponentOptions_1.ComponentOptions.buildBooleanOption(),
	        /**
	         * Setting this to true will force the caption/label to appear.<br/>
	         * Setting this to false will force the caption/label to never appear.<br/>
	         * Default value is `undefined`, and the framework will determine if a label needs to be displayed.
	         */
	        withLabel: ComponentOptions_1.ComponentOptions.buildBooleanOption(),
	        /**
	         * Setting this option allow to set the label that should be displayed.<br/>
	         * Default value is `undefined`, and the framework will determine the label that will be displayed.
	         */
	        labelValue: ComponentOptions_1.ComponentOptions.buildLocalizedStringOption()
	    };
	    Icon.fields = [
	        'objecttype',
	        'filetype',
	    ];
	    return Icon;
	}(Component_1.Component));
	exports.Icon = Icon;
	Initialization_1.Initialization.registerAutoCreateComponent(Icon);


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Component_1 = __webpack_require__(95);
	var ComponentOptions_1 = __webpack_require__(97);
	var DomUtils_1 = __webpack_require__(58);
	var DeviceUtils_1 = __webpack_require__(19);
	var Dom_1 = __webpack_require__(56);
	var DefaultQuickviewTemplate_1 = __webpack_require__(125);
	var ResultListEvents_1 = __webpack_require__(47);
	var StringUtils_1 = __webpack_require__(60);
	var QuickviewDocument_1 = __webpack_require__(126);
	var QueryStateModel_1 = __webpack_require__(89);
	var QuickviewEvents_1 = __webpack_require__(111);
	var Initialization_1 = __webpack_require__(94);
	var KeyboardUtils_1 = __webpack_require__(67);
	var ExternalModulesShim_1 = __webpack_require__(24);
	/**
	 * This component is meant to exist within a result template.
	 * It allows to create a button/link inside the result list that opens a modal box for a given result.
	 *
	 * Most of the time, this component will reference a {@link QuickviewDocument} in its content template.
	 *
	 * # Choosing what to display for the Quickview
	 * The Quick View uses any HTML structure you put inside its tag and uses that as the content of the dialog box. This content can thus be any element you decide, using your CSS and your structure.
	 *
	 * > Example
	 * > You can change the appearance of the Quick View link by adding HTML inside the body of the div.
	 * > You can change the content of the Quick View link by specifying a template ID.
	 *
	 * ```html
	 * <!-- This would change the appearance of the quickview button itself in the result. -->
	 * <div class="CoveoQuickview" data-template-id="TemplateId">
	 *   <span>Click here for Quickview</span>
	 * </div>
	 *
	 * <!-- This would modify the content of the quickview when it is opened in the modal box -->
	 * <script class='result-template' type='text/underscore' id='TemplateId' >
	 *   <div>
	 *     <span>This is the content that will be displayed when you open the Quick View. You can also include any other Coveo components.</span>
	 *     <table class="CoveoFieldTable">
	 *       <tr data-field="@liboardshorttitle" data-caption="Board" />
	 *       <tr data-field="@licategoryshorttitle" data-caption="Category" />
	 *       <tr data-field="@sysauthor" data-caption="Author" />
	 *     </table>
	 *   </div>
	 * </script>
	 *
	 * <!-- Note that this is all optional: Just including a <div class='CoveoQuickview'></div> will do the job most of the time, and will include a default template and default button appearance -->
	 * ```
	 */
	var Quickview = (function (_super) {
	    __extends(Quickview, _super);
	    function Quickview(element, options, bindings, result, ModalBox) {
	        var _this = this;
	        if (ModalBox === void 0) { ModalBox = ExternalModulesShim_1.ModalBox; }
	        _super.call(this, element, Quickview.ID, bindings);
	        this.element = element;
	        this.options = options;
	        this.bindings = bindings;
	        this.result = result;
	        this.ModalBox = ModalBox;
	        this.bindedHandleEscapeEvent = this.handleEscapeEvent.bind(this);
	        this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, Quickview, options);
	        if (this.options.contentTemplate == null) {
	            this.options.contentTemplate = new DefaultQuickviewTemplate_1.DefaultQuickviewTemplate();
	        }
	        // If there is no content inside the Quickview div,
	        // we need to add something that will show up in the result template itself
	        if (/^\s*$/.test(this.element.innerHTML)) {
	            var iconForQuickview = Dom_1.$$('div');
	            iconForQuickview.addClass('coveo-icon-for-quickview');
	            if (this.searchInterface.isNewDesign()) {
	                var captionForQuickview = Dom_1.$$('div', { className: 'coveo-caption-for-quickview', tabindex: 0 }, 'Quickview'.toLocaleString()).el;
	                var div = Dom_1.$$('div');
	                div.append(iconForQuickview.el);
	                div.append(captionForQuickview);
	                Dom_1.$$(this.element).append(div.el);
	            }
	            else {
	                iconForQuickview.text('Quickview'.toLocaleString());
	                Dom_1.$$(this.element).append(iconForQuickview.el);
	            }
	        }
	        this.bindClick(result);
	        if (this.bindings.resultElement) {
	            this.bind.on(this.bindings.resultElement, ResultListEvents_1.ResultListEvents.openQuickview, function () { return _this.open(); });
	        }
	    }
	    /**
	     * Open the quickview
	     */
	    Quickview.prototype.open = function () {
	        if (this.modalbox == null) {
	            // To prevent the keyboard from opening on mobile if the search bar has focus
	            Quickview.resultCurrentlyBeingRendered = this.result;
	            Dom_1.$$(document.activeElement).trigger('blur');
	            var openerObject = this.prepareOpenQuickviewObject();
	            this.createModalBox(openerObject);
	            this.bindQuickviewEvents(openerObject);
	            this.animateAndOpen();
	            this.queryStateModel.set(QueryStateModel_1.QueryStateModel.attributesEnum.quickview, this.getHashId());
	            Quickview.resultCurrentlyBeingRendered = null;
	        }
	    };
	    /**
	     * Close the quickview
	     */
	    Quickview.prototype.close = function () {
	        if (this.modalbox != null) {
	            this.modalbox.close();
	            this.modalbox = null;
	            Dom_1.$$(document.body).off('keyup', this.bindedHandleEscapeEvent);
	        }
	    };
	    Quickview.prototype.getHashId = function () {
	        return this.result.queryUid + '.' + this.result.index + '.' + StringUtils_1.StringUtils.hashCode(this.result.uniqueId);
	    };
	    Quickview.prototype.bindClick = function (result) {
	        var _this = this;
	        if (typeof result.hasHtmlVersion == 'undefined' || result.hasHtmlVersion || this.options.alwaysShow) {
	            var clickAction = function () { return _this.open(); };
	            Dom_1.$$(this.element).on('click', clickAction);
	            this.bind.on(this.element, 'keyup', KeyboardUtils_1.KeyboardUtils.keypressAction(KeyboardUtils_1.KEYBOARD.ENTER, clickAction));
	        }
	        else {
	            this.element.style.display = 'none';
	        }
	    };
	    Quickview.prototype.bindQuickviewEvents = function (openerObject) {
	        var _this = this;
	        var closeButton = Dom_1.$$(this.modalbox.wrapper).find('.coveo-quickview-close-button');
	        Dom_1.$$(closeButton).on('click', function () {
	            _this.closeQuickview();
	            _this.close();
	        });
	        Dom_1.$$(this.modalbox.overlay).on('click', function () {
	            _this.closeQuickview();
	        });
	        Dom_1.$$(this.modalbox.content).on(QuickviewEvents_1.QuickviewEvents.quickviewLoaded, function () {
	            Dom_1.$$(openerObject.loadingAnimation).remove();
	            _this.bindIFrameEscape();
	        });
	        this.bindEscape();
	    };
	    Quickview.prototype.animateAndOpen = function () {
	        var _this = this;
	        var animationDuration = this.modalbox.wrapper.style.animationDuration;
	        var quickviewDocument = Dom_1.$$(this.modalbox.modalBox).find('.' + Component_1.Component.computeCssClassName(QuickviewDocument_1.QuickviewDocument));
	        if (quickviewDocument) {
	            if (animationDuration) {
	                var duration = /^(.+)(ms|s)$/.exec(animationDuration);
	                var durationMs = Number(duration[1]) * (duration[2] == 's' ? 1000 : 1);
	                // open the QuickviewDocument
	                setTimeout(function () {
	                    if (_this.modalbox != null) {
	                        Initialization_1.Initialization.dispatchNamedMethodCallOrComponentCreation('open', quickviewDocument, null);
	                    }
	                }, durationMs);
	            }
	            else {
	                Initialization_1.Initialization.dispatchNamedMethodCallOrComponentCreation('open', quickviewDocument, null);
	            }
	        }
	    };
	    Quickview.prototype.createModalBox = function (openerObject) {
	        var computedModalBoxContent = Dom_1.$$('div');
	        computedModalBoxContent.append(openerObject.content.el);
	        this.modalbox = this.ModalBox.open(computedModalBoxContent.el, {
	            title: DomUtils_1.DomUtils.getQuickviewHeader(this.result, {
	                showDate: this.options.showDate,
	                title: this.options.title
	            }, this.bindings).el.outerHTML,
	            className: 'coveo-quick-view',
	            validation: function () { return true; },
	            body: this.element.ownerDocument.body
	        });
	        this.setQuickviewSize();
	    };
	    Quickview.prototype.prepareOpenQuickviewObject = function () {
	        var loadingAnimation = this.options.loadingAnimation;
	        return {
	            loadingAnimation: loadingAnimation,
	            content: this.prepareQuickviewContent(loadingAnimation)
	        };
	    };
	    Quickview.prototype.prepareQuickviewContent = function (loadingAnimation) {
	        var content = Dom_1.$$(this.options.contentTemplate.instantiateToElement(this.result));
	        var initOptions = this.searchInterface.options;
	        var initParameters = {
	            options: initOptions,
	            bindings: this.getBindings(),
	            result: this.result
	        };
	        Initialization_1.Initialization.automaticallyCreateComponentsInside(content.el, initParameters);
	        if (content.find('.' + Component_1.Component.computeCssClassName(QuickviewDocument_1.QuickviewDocument)) != undefined && this.options.enableLoadingAnimation) {
	            content.prepend(loadingAnimation);
	        }
	        return content;
	    };
	    Quickview.prototype.bindEscape = function () {
	        Dom_1.$$(document.body).on('keyup', this.bindedHandleEscapeEvent);
	    };
	    Quickview.prototype.bindIFrameEscape = function () {
	        var quickviewDocument = Dom_1.$$(this.modalbox.content).find('.' + Component_1.Component.computeCssClassName(QuickviewDocument_1.QuickviewDocument));
	        quickviewDocument = Dom_1.$$(quickviewDocument).find('iframe');
	        var body = quickviewDocument.contentWindow.document.body;
	        Dom_1.$$(body).on('keyup', this.bindedHandleEscapeEvent);
	    };
	    Quickview.prototype.closeQuickview = function () {
	        this.queryStateModel.set(QueryStateModel_1.QueryStateModel.attributesEnum.quickview, '');
	    };
	    Quickview.prototype.setQuickviewSize = function () {
	        var wrapper = Dom_1.$$(Dom_1.$$(this.modalbox.modalBox).find('.coveo-wrapper'));
	        wrapper.el.style.width = this.options.size;
	        wrapper.el.style.height = this.options.size;
	        wrapper.el.style.maxWidth = this.options.size;
	        wrapper.el.style.maxHeight = this.options.size;
	    };
	    Quickview.prototype.handleEscapeEvent = function (e) {
	        if (e.keyCode == KeyboardUtils_1.KEYBOARD.ESCAPE) {
	            this.closeQuickview();
	            this.close();
	        }
	    };
	    Quickview.ID = 'Quickview';
	    Quickview.fields = [
	        'urihash',
	        'collection',
	        'source',
	        'author' // analytics
	    ];
	    /**
	     * @componentOptions
	     */
	    Quickview.options = {
	        /**
	         * Specifies whether the quickview is always shown, even when the index body for a document is empty.<br/>
	         * In such cases, the {@link Quickview.options.contentTemplate} specifies what appears in the quickview.<br/>
	         * If there is no quickview for the document, you *MUST* specify a contentTemplate otherwise the component will throw an error when opened.
	         */
	        alwaysShow: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
	        /**
	         * Specifies the title of your choice that appears at the top of the Quick View modal window.
	         */
	        title: ComponentOptions_1.ComponentOptions.buildStringOption(),
	        /**
	         * Specifies whether to show the document date in the Quick View modal window header.<br/>
	         * The default value is `true`.
	         */
	        showDate: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }),
	        enableLoadingAnimation: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }),
	        /**
	         * Specifies the template to use to present the Quick View content in the modal window.<br/>
	         * e.g.: <br/>
	         *     <div class="CoveoQuickview" data-template-id="TemplateId"></div>
	         *     <div class="CoveoQuickview" data-template-selector=".templateSelector"></div>
	         */
	        contentTemplate: ComponentOptions_1.ComponentOptions.buildTemplateOption({
	            selectorAttr: 'data-template-selector',
	            idAttr: 'data-template-id'
	        }),
	        loadingAnimation: ComponentOptions_1.ComponentOptions.buildOption(ComponentOptions_1.ComponentOptionsType.NONE, function (element) {
	            var loadingAnimationSelector = element.getAttribute('data-loading-animation-selector');
	            if (loadingAnimationSelector != null) {
	                var loadingAnimation = Dom_1.$$(document.documentElement).find(loadingAnimationSelector);
	                if (loadingAnimation != null) {
	                    Dom_1.$$(loadingAnimation).detach();
	                    return loadingAnimation;
	                }
	            }
	            var id = element.getAttribute('data-loading-animation-template-id');
	            if (id != null) {
	                var loadingAnimationTemplate = ComponentOptions_1.ComponentOptions.loadResultTemplateFromId(id);
	                if (loadingAnimationTemplate) {
	                    return loadingAnimationTemplate.instantiateToElement({});
	                }
	            }
	            return DomUtils_1.DomUtils.getBasicLoadingAnimation();
	        }),
	        /**
	         * Specifies the Quick View modal window size (width and height) relative to the full window.<br/>
	         * The default value is 95% on a desktop and 100% on a mobile device.
	         */
	        size: ComponentOptions_1.ComponentOptions.buildStringOption({ defaultValue: DeviceUtils_1.DeviceUtils.isMobileDevice() ? '100%' : '95%' })
	    };
	    Quickview.resultCurrentlyBeingRendered = null;
	    return Quickview;
	}(Component_1.Component));
	exports.Quickview = Quickview;
	Initialization_1.Initialization.registerAutoCreateComponent(Quickview);


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Template_1 = __webpack_require__(99);
	var DefaultQuickviewTemplate = (function (_super) {
	    __extends(DefaultQuickviewTemplate, _super);
	    function DefaultQuickviewTemplate() {
	        _super.call(this);
	    }
	    DefaultQuickviewTemplate.prototype.instantiateToString = function (queryResult) {
	        return '<div class="coveo-quick-view-full-height"><div class="CoveoQuickviewDocument"></div></div>';
	    };
	    return DefaultQuickviewTemplate;
	}(Template_1.Template));
	exports.DefaultQuickviewTemplate = DefaultQuickviewTemplate;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Component_1 = __webpack_require__(95);
	var ComponentOptions_1 = __webpack_require__(97);
	var AnalyticsActionListMeta_1 = __webpack_require__(109);
	var Assert_1 = __webpack_require__(16);
	var Dom_1 = __webpack_require__(56);
	var QuickviewEvents_1 = __webpack_require__(111);
	var DeviceUtils_1 = __webpack_require__(19);
	var Utils_1 = __webpack_require__(17);
	var ColorUtils_1 = __webpack_require__(53);
	var Initialization_1 = __webpack_require__(94);
	var Strings_1 = __webpack_require__(33);
	var HIGHLIGHT_PREFIX = 'CoveoHighlight';
	/**
	 * The QuickviewDocument component is meant to exist within Result Templates, more specifically inside a {@link Quickview} component.
	 * The sole purpose of this component is to include an iframe which will load the correct HTML version of the current document.
	 * By default, this component is included in the default template for a {@link Quickview} component.
	 */
	var QuickviewDocument = (function (_super) {
	    __extends(QuickviewDocument, _super);
	    /**
	     * Create a new instance of the component
	     * @param element
	     * @param options
	     * @param bindings
	     * @param result
	     */
	    function QuickviewDocument(element, options, bindings, result) {
	        _super.call(this, element, QuickviewDocument.ID, bindings);
	        this.element = element;
	        this.options = options;
	        this.result = result;
	        this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, QuickviewDocument, options);
	        this.result = result || this.resolveResult();
	        this.termsToHighlightWereModified = false;
	        Assert_1.Assert.exists(this.result);
	    }
	    QuickviewDocument.prototype.createDom = function () {
	        var container = Dom_1.$$('div');
	        container.addClass('coveo-quickview-document');
	        this.element.appendChild(container.el);
	        this.header = this.buildHeader();
	        this.iframe = this.buildIFrame();
	        container.append(this.header.el);
	        container.append(this.iframe.el);
	    };
	    QuickviewDocument.prototype.open = function () {
	        var _this = this;
	        this.ensureDom();
	        var documentURL = Dom_1.$$(this.element).getAttribute('href');
	        if (documentURL == undefined || documentURL == '') {
	            documentURL = this.result.clickUri;
	        }
	        this.usageAnalytics.logClickEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.documentQuickview, {
	            author: this.result.raw.author,
	            documentURL: documentURL,
	            documentTitle: this.result.title
	        }, this.result, this.queryController.element);
	        var beforeLoad = (new Date()).getTime();
	        var iframe = this.iframe.find('iframe');
	        iframe.src = 'about:blank';
	        var endpoint = this.queryController.getEndpoint();
	        var termsToHighlight = _.keys(this.result.termsToHighlight);
	        var dataToSendOnOpenQuickView = {
	            termsToHighlight: termsToHighlight
	        };
	        Dom_1.$$(this.element).trigger(QuickviewEvents_1.QuickviewEvents.openQuickview, dataToSendOnOpenQuickView);
	        this.checkIfTermsToHighlightWereModified(dataToSendOnOpenQuickView.termsToHighlight);
	        var queryObject = _.extend({}, this.getBindings().queryController.getLastQuery());
	        if (this.termsToHighlightWereModified) {
	            this.handleTermsToHighlight(dataToSendOnOpenQuickView.termsToHighlight, queryObject);
	        }
	        var callOptions = {
	            queryObject: queryObject,
	            requestedOutputSize: this.options.maximumDocumentSize
	        };
	        endpoint.getDocumentHtml(this.result.uniqueId, callOptions)
	            .then(function (html) {
	            // If the contentDocument is null at this point it means that the Quick View
	            // was closed before we've finished loading it. In this case do nothing.
	            if (iframe.contentDocument == null) {
	                return;
	            }
	            _this.renderHTMLDocument(iframe, html);
	            _this.triggerQuickviewLoaded(beforeLoad);
	        })
	            .catch(function (error) {
	            // If the contentDocument is null at this point it means that the Quick View
	            // was closed before we've finished loading it. In this case do nothing.
	            if (iframe.contentDocument == null) {
	                return;
	            }
	            if (error.status != 0) {
	                _this.renderErrorReport(iframe, error.status);
	                _this.triggerQuickviewLoaded(beforeLoad);
	            }
	            else {
	                iframe.onload = function () {
	                    _this.triggerQuickviewLoaded(beforeLoad);
	                };
	                iframe.src = endpoint.getViewAsHtmlUri(_this.result.uniqueId, callOptions);
	            }
	        });
	    };
	    QuickviewDocument.prototype.renderHTMLDocument = function (iframe, html) {
	        var _this = this;
	        iframe.onload = function () {
	            _this.computeHighlights(iframe.contentWindow);
	            // Remove white border for new Quickview
	            if (_this.isNewQuickviewDocument(iframe.contentWindow)) {
	                var body = Dom_1.$$(_this.element).closest('.coveo-body');
	                body.style.padding = '0';
	                var header = Dom_1.$$(_this.element).find('.coveo-quickview-header');
	                header.style.paddingTop = '10';
	                header.style.paddingLeft = '10';
	            }
	            if (Dom_1.$$(_this.element).find('.coveo-quickview-header').innerHTML == '') {
	                Dom_1.$$(_this.element).find('.coveo-quickview-header').style.display = 'none';
	            }
	        };
	        this.writeToIFrame(iframe, html);
	        this.wrapPreElementsInIframe(iframe);
	    };
	    QuickviewDocument.prototype.renderErrorReport = function (iframe, errorStatus) {
	        var errorString = '';
	        if (errorStatus == 400) {
	            errorString = 'NoQuickview';
	        }
	        else {
	            errorString = 'OopsError';
	        }
	        var errorMessage = "<html><body style='font-family: Arimo, 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-text-size-adjust: none;' >" + Strings_1.l(errorString) + " </body></html>";
	        this.writeToIFrame(iframe, errorMessage);
	    };
	    QuickviewDocument.prototype.writeToIFrame = function (iframe, content) {
	        var toWrite = content;
	        // This sucks because we can't do instanceof HTMLDocument
	        // lib.d.ts declare HTMLDocument as an interface, not an actual object
	        if (typeof content == 'object') {
	            toWrite = content.getElementsByTagName('html')[0].outerHTML;
	        }
	        iframe.contentWindow.document.open();
	        iframe.contentWindow.document.write(toWrite);
	        iframe.contentWindow.document.close();
	    };
	    QuickviewDocument.prototype.wrapPreElementsInIframe = function (iframe) {
	        try {
	            var style = document.createElement('style');
	            style.type = 'text/css';
	            // This CSS forces <pre> tags used in some emails to wrap by default
	            var cssText = 'html pre { white-space: pre-wrap; white-space: -moz-pre-wrap; white-space: -pre-wrap; white-space: -o-pre-wrap; word-wrap: break-word; }';
	            // Some people react strongly when presented with their browser's default font, so let's fix that
	            cssText += 'body, html { font-family: Arimo, \'Helvetica Neue\', Helvetica, Arial, sans-serif; -webkit-text-size-adjust: none; }';
	            if (DeviceUtils_1.DeviceUtils.isIos()) {
	                // Safari on iOS forces resize iframes to fit their content, even if an explicit size
	                // is set on the iframe. Isn't that great? By chance there is a trick around it: by
	                // setting a very small size on the body and instead using min-* to set the size to
	                // 100% we're able to trick Safari from thinking it must expand the iframe. Amazed.
	                // The 'scrolling' part is required otherwise the hack doesn't work.
	                //
	                // http://stackoverflow.com/questions/23083462/how-to-get-an-iframe-to-be-responsive-in-ios-safari
	                cssText += 'body, html { height: 1px !important; min-height: 100%; overflow: scroll; }';
	                Dom_1.$$(iframe).setAttribute('scrolling', 'no');
	                // Some content is cropped on iOs if a margin is present
	                // We remove it and add one on the iframe wrapper.
	                cssText += 'body, html {margin: auto}';
	                iframe.parentElement.style.margin = '0 0 5px 5px';
	                // While we're on the topic of iOS Safari: This magic trick prevents iOS from NOT
	                // displaying the content of the iframe. If we don't do this, you'll see the body
	                // of the iframe ONLY when viewing the page in the tab switcher.  Isn't that *magical*?
	                iframe.style.position = 'relative';
	            }
	            if ('styleSheet' in style) {
	                style['styleSheet'].cssText = cssText;
	            }
	            else {
	                style.appendChild(document.createTextNode(cssText));
	            }
	            var head = iframe.contentWindow.document.head;
	            head.appendChild(style);
	        }
	        catch (e) {
	        }
	    };
	    QuickviewDocument.prototype.triggerQuickviewLoaded = function (beforeLoad) {
	        var afterLoad = (new Date()).getTime();
	        var eventArgs = { duration: afterLoad - beforeLoad };
	        Dom_1.$$(this.element).trigger(QuickviewEvents_1.QuickviewEvents.quickviewLoaded, eventArgs);
	    };
	    // An highlighted term looks like:
	    //
	    //     <span id='CoveoHighlight:X.Y.Z'>a</span>
	    //
	    // The id has 3 components:
	    // - X: the term
	    // - Y: the term occurence
	    // - Z: the term part
	    //
	    // For the 'Z' component, if the term 'foo bar' is found in multiple elements, we will see:
	    //
	    //     <span id='CoveoHighlight:1.1.1'>foo</span>
	    //     <span id='CoveoHighlight:1.1.2'>bar</span>
	    //
	    // Highlighted words can overlap, which looks like:
	    //
	    //     <span id='CoveoHighlight:1.Y.Z'>
	    //         a
	    //         <coveotaggedword id='CoveoHighlight:2.Y.Z'>b</coveotaggedword>
	    //     </span>
	    //     <span id='CoveoHighlight:2.Y.Z'>c</span>
	    //
	    // In the previous example, the words 'ab' and 'bc' are highlighted.
	    //
	    // One thing important to note is that the id of all 'coveotaggedword' for
	    // the same word AND the first 'span' for that word will have the same id.
	    //
	    // Example:
	    //
	    //     <span id='CoveoHighlight:1.1.1'>
	    //         a
	    //         <coveotaggedword id='CoveoHighlight:2.1.1'>b</coveotaggedword>
	    //     </span>
	    //     <span id='CoveoHighlight:1.1.2'>
	    //         c
	    //         <coveotaggedword id='CoveoHighlight:2.1.1'>d</coveotaggedword>
	    //     </span>
	    //     <span id='CoveoHighlight:2.1.1'>e</span>
	    //     <span id='CoveoHighlight:2.1.2'>f</span>
	    //
	    // In the previous example, the words 'abcd' and 'bcdef' are highlighted.
	    //
	    // This method is public for testing purposes.
	    QuickviewDocument.prototype.computeHighlights = function (window) {
	        var _this = this;
	        Dom_1.$$(this.header).empty();
	        this.keywordsState = [];
	        var words = {};
	        var highlightsCount = 0;
	        _.each(Dom_1.$$(window.document.body).findAll('[id^="' + HIGHLIGHT_PREFIX + '"]'), function (element, index) {
	            var idParts = _this.getHighlightIdParts(element);
	            if (idParts) {
	                var idIndexPart = idParts[1]; // X
	                var idOccurencePart = parseInt(idParts[2], 10); // Y
	                var idTermPart = parseInt(idParts[3], 10); // Z in <span id='CoveoHighlight:X.Y.Z'>a</span>
	                var word = words[idIndexPart];
	                // The 'idTermPart' check is to circumvent a bug from the index
	                // where an highlight of an empty string start with an idTermPart > 1.
	                if (word == null && idTermPart == 1) {
	                    words[idIndexPart] = word = {
	                        text: _this.getHighlightInnerText(element),
	                        count: 1,
	                        index: parseInt(idIndexPart, 10),
	                        // Here I try to be clever.
	                        // An overlaping word:
	                        // 1) always start with a 'coveotaggedword' element.
	                        // 2) then other 'coveotaggedword' elements may follow
	                        // 3) then a 'span' element may follow.
	                        //
	                        // All 1), 2) and 3) will have the same id so I consider them as
	                        // a whole having the id 0 instead of 1.
	                        termsCount: element.nodeName.toLowerCase() == 'coveotaggedword' ? 0 : 1,
	                        element: element,
	                        occurence: idOccurencePart
	                    };
	                }
	                else if (word) {
	                    if (word.occurence == idOccurencePart) {
	                        if (element.nodeName.toLowerCase() == 'coveotaggedword') {
	                            word.text += _this.getHighlightInnerText(element);
	                        }
	                        else if (word.termsCount < idTermPart) {
	                            word.text += _this.getHighlightInnerText(element);
	                            word.termsCount += 1;
	                        }
	                    }
	                    word.count = Math.max(word.count, idOccurencePart);
	                    highlightsCount += 1;
	                }
	                // See the method description to understand why this code let us
	                // create the word 'bcdef' instead of 'bdef'.
	                if (word && word.occurence == idOccurencePart && element.nodeName.toLowerCase() == 'span') {
	                    var embeddedWordParts = _this.getHightlightEmbeddedWordIdParts(element);
	                    var embeddedWord = embeddedWordParts ? words[embeddedWordParts[1]] : null;
	                    if (embeddedWord && embeddedWord.occurence == parseInt(embeddedWordParts[2], 10)) {
	                        embeddedWord.text += element.childNodes[0].nodeValue || ''; // only immediate text without children.
	                    }
	                }
	            }
	        });
	        if (highlightsCount == 0) {
	            this.header.el.style.minHeight = '0';
	        }
	        var resolvedWords = [];
	        _.each(words, function (word) {
	            // When possible, take care to find the original term from the query instead of the
	            // first highlighted version we encounter. This relies on a recent feature by the
	            // Search API, but will fallback properly on older versions.
	            word.text = _this.resolveOriginalTermFromHighlight(word.text);
	            var state = {
	                word: word,
	                color: word.element.style.backgroundColor,
	                currentIndex: 0,
	                index: word.index
	            };
	            _this.keywordsState.push(state);
	            Dom_1.$$(_this.header).append(_this.buildWordButton(state, window));
	            resolvedWords.push(word.text);
	        });
	        return resolvedWords;
	    };
	    QuickviewDocument.prototype.getHighlightIdParts = function (element) {
	        var parts = element
	            .id
	            .substr(HIGHLIGHT_PREFIX.length + 1)
	            .match(/^([0-9]+)\.([0-9]+)\.([0-9]+)$/);
	        return (parts && parts.length > 3) ? parts : null;
	    };
	    QuickviewDocument.prototype.getHighlightInnerText = function (element) {
	        if (element.nodeName.toLowerCase() == 'coveotaggedword') {
	            // only immediate text without children.
	            return element.childNodes.length >= 1 ? (element.childNodes.item(0).textContent || '') : '';
	        }
	        else {
	            return element.textContent || '';
	        }
	    };
	    QuickviewDocument.prototype.getHightlightEmbeddedWordIdParts = function (element) {
	        var embedded = element.getElementsByTagName('coveotaggedword')[0];
	        return embedded ? this.getHighlightIdParts(embedded) : null;
	    };
	    QuickviewDocument.prototype.resolveOriginalTermFromHighlight = function (highlight) {
	        var _this = this;
	        var found = highlight;
	        // Beware, terms to highlight is only set by recent search APIs.
	        if (this.result.termsToHighlight) {
	            // We look for the term expansion and we'll return the corresponding
	            // original term is one is found.
	            found = _.find(_.keys(this.result.termsToHighlight), function (originalTerm) {
	                // The expansions do NOT include the original term (makes sense), so be sure to check
	                // the original term for a match too.
	                return (originalTerm.toLowerCase() == highlight.toLowerCase()) ||
	                    (_.find(_this.result.termsToHighlight[originalTerm], function (expansion) { return expansion.toLowerCase() == highlight.toLowerCase(); }) != undefined);
	            }) || found;
	        }
	        return found;
	    };
	    QuickviewDocument.prototype.buildWordButton = function (wordState, window) {
	        var _this = this;
	        var wordHtml = Dom_1.$$('span');
	        wordHtml.addClass('coveo-term-for-quickview');
	        var quickviewName = Dom_1.$$('span');
	        quickviewName.addClass('coveo-term-for-quickview-name');
	        quickviewName.setHtml(wordState.word.text);
	        quickviewName.on('click', function () {
	            _this.navigate(wordState, false, window);
	        });
	        wordHtml.append(quickviewName.el);
	        var quickviewUpArrow = Dom_1.$$('span');
	        quickviewUpArrow.addClass('coveo-term-for-quickview-up-arrow');
	        var quickviewUpArrowIcon = Dom_1.$$('span');
	        quickviewUpArrowIcon.addClass('coveo-term-for-quickview-up-arrow-icon');
	        quickviewUpArrow.append(quickviewUpArrowIcon.el);
	        quickviewUpArrow.on('click', function () {
	            _this.navigate(wordState, true, window);
	        });
	        wordHtml.append(quickviewUpArrow.el);
	        var quickviewDownArrow = Dom_1.$$('span');
	        quickviewDownArrow.addClass('coveo-term-for-quickview-down-arrow');
	        var quickviewDownArrowIcon = Dom_1.$$('span');
	        quickviewDownArrowIcon.addClass('coveo-term-for-quickview-down-arrow-icon');
	        quickviewDownArrow.append(quickviewDownArrowIcon.el);
	        quickviewDownArrow.on('click', function () {
	            _this.navigate(wordState, false, window);
	        });
	        wordHtml.append(quickviewDownArrow.el);
	        wordHtml.el.style.backgroundColor = wordState.color;
	        wordHtml.el.style.borderColor = this.getSaturatedColor(wordState.color);
	        quickviewDownArrow.el.style.borderColor = this.getSaturatedColor(wordState.color);
	        return wordHtml.el;
	    };
	    QuickviewDocument.prototype.navigate = function (state, backward, window) {
	        var fromIndex = state.currentIndex;
	        var toIndex;
	        if (!backward) {
	            toIndex = fromIndex == state.word.count ? 1 : fromIndex + 1;
	        }
	        else {
	            toIndex = fromIndex <= 1 ? state.word.count : fromIndex - 1;
	        }
	        var scroll = this.getScrollingElement(window);
	        // Un-highlight any currently selected element
	        var current = Dom_1.$$(scroll).find('[id^="' + HIGHLIGHT_PREFIX + ':' + state.word.index + '.' + fromIndex + '"]');
	        if (current) {
	            current.style.border = '';
	        }
	        // Find and highlight the new element.
	        var element = Dom_1.$$(window.document.body).find('[id^="' + HIGHLIGHT_PREFIX + ':' + state.word.index + '.' + toIndex + '"]');
	        element.style.border = '1px dotted #333';
	        state.currentIndex = toIndex;
	        // pdf2html docs hide the non-visible frames by default, to speed up browsers.
	        // But this prevents keyword navigation from working so we must force show it. This
	        // is done by adding the 'opened' class to it (defined by pdf2html).
	        if (this.isNewQuickviewDocument(window)) {
	            var pdf = Dom_1.$$(element).closest('.pc');
	            Dom_1.$$(pdf).addClass('opened');
	        }
	        // pdf2html docs hide the non-visible frames by default, to speed up browsers.
	        // Hack for now: the new Quick View is far too complex to manually scroll
	        // to the content, so SCREW IT and use good ol' scrollIntoView. I'm planning
	        // on a page-based quick view in an upcoming hackaton anyway :)
	        //
	        // Also, mobile devices have troubles with the animation.
	        if (this.isNewQuickviewDocument(window) || DeviceUtils_1.DeviceUtils.isMobileDevice()) {
	            element.scrollIntoView();
	            // iOS on Safari might scroll the whole modal box body when we do this,
	            // so give it a nudge in the right direction.
	            var body = this.iframe.closest('.coveo-body');
	            body.scrollLeft = 0;
	            body.scrollTop = 0;
	            return;
	        }
	        // For other quick views we use a nicer animation that centers the keyword
	        this.animateScroll(scroll, element.offsetLeft - scroll.clientWidth / 2 + Dom_1.$$(element).width() / 2, element.offsetTop - scroll.clientHeight / 2 + Dom_1.$$(element).height() / 2);
	        this.animateScroll(this.iframe.el, element.offsetLeft - this.iframe.width() / 2 + Dom_1.$$(element).width() / 2, element.offsetTop - this.iframe.height() / 2 + Dom_1.$$(element).height() / 2);
	    };
	    QuickviewDocument.prototype.buildHeader = function () {
	        var header = Dom_1.$$('div');
	        header.addClass('coveo-quickview-header');
	        return header;
	    };
	    QuickviewDocument.prototype.buildIFrame = function () {
	        var iFrame = Dom_1.$$('iframe');
	        iFrame.setAttribute('sandbox', 'allow-same-origin');
	        var iFrameWrapper = Dom_1.$$('div');
	        iFrameWrapper.addClass('coveo-iframeWrapper');
	        iFrameWrapper.el.appendChild(iFrame.el);
	        return iFrameWrapper;
	    };
	    QuickviewDocument.prototype.getScrollingElement = function (iframeWindow) {
	        var found;
	        if (this.isNewQuickviewDocument(iframeWindow)) {
	            // 'New' quick views have a #page-container element generated by the pdf2html thing.
	            // This is the element we want to scroll on.
	            found = Dom_1.$$(iframeWindow.document.body).find('#page-container');
	        }
	        // If all else fails, we use the body
	        if (!found) {
	            found = Dom_1.$$(iframeWindow.document.body).el;
	        }
	        return found;
	    };
	    QuickviewDocument.prototype.isNewQuickviewDocument = function (iframeWindow) {
	        var meta = Dom_1.$$(iframeWindow.document.head).find('meta[name=\'generator\']');
	        return meta && meta.getAttribute('content') == 'pdf2htmlEX';
	    };
	    QuickviewDocument.prototype.handleTermsToHighlight = function (termsToHighlight, queryObject) {
	        var _this = this;
	        for (var term in this.result.termsToHighlight) {
	            delete this.result.termsToHighlight[term];
	        }
	        var query = '';
	        _.each(termsToHighlight, function (term) {
	            query += term + ' ';
	            _this.result.termsToHighlight[term] = new Array(term);
	        });
	        query = query.substring(0, query.length - 1);
	        queryObject.q = query;
	    };
	    QuickviewDocument.prototype.checkIfTermsToHighlightWereModified = function (termsToHighlight) {
	        if (!Utils_1.Utils.arrayEqual(termsToHighlight, _.keys(this.result.termsToHighlight))) {
	            this.termsToHighlightWereModified = true;
	        }
	    };
	    QuickviewDocument.prototype.getSaturatedColor = function (color) {
	        var r = parseInt(color.substring(4, 7));
	        var g = parseInt(color.substring(9, 12));
	        var b = parseInt(color.substring(14, 17));
	        var hsv = ColorUtils_1.ColorUtils.rgbToHsv(r, g, b);
	        hsv[1] *= 2;
	        if (hsv[1] > 1) {
	            hsv[1] = 1;
	        }
	        var rgb = ColorUtils_1.ColorUtils.hsvToRgb(hsv[0], hsv[1], hsv[2]);
	        return 'rgb(' + rgb[0].toString() + ', ' + rgb[1].toString() + ', ' + rgb[2].toString() + ')';
	    };
	    QuickviewDocument.prototype.animateScroll = function (scroll, scrollLeftValue, scrollTopValue, duration) {
	        if (duration === void 0) { duration = 100; }
	        var leftStep = Math.round((scrollLeftValue - scroll.scrollLeft) / duration);
	        var topStep = Math.round((scrollTopValue - scroll.scrollTop) / duration);
	        var interval = setInterval(function () {
	            if (duration != 0) {
	                scroll.scrollLeft += leftStep;
	                scroll.scrollTop += topStep;
	                duration -= 1;
	            }
	            else {
	                clearInterval(interval);
	            }
	        }, 1);
	    };
	    QuickviewDocument.ID = 'QuickviewDocument';
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    QuickviewDocument.options = {
	        /**
	         * Specifies the maximum document size (the preview) that should be returned by the index.
	         *
	         * By default its value is 0, and the whole preview is returned.
	         */
	        maximumDocumentSize: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 0, min: 0 }),
	    };
	    return QuickviewDocument;
	}(Component_1.Component));
	exports.QuickviewDocument = QuickviewDocument;
	Initialization_1.Initialization.registerAutoCreateComponent(QuickviewDocument);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var DefaultResultTemplate_1 = __webpack_require__(103);
	var Component_1 = __webpack_require__(95);
	var ComponentOptions_1 = __webpack_require__(97);
	var Assert_1 = __webpack_require__(16);
	var QueryEvents_1 = __webpack_require__(46);
	var Model_1 = __webpack_require__(86);
	var QueryStateModel_1 = __webpack_require__(89);
	var QueryUtils_1 = __webpack_require__(22);
	var Dom_1 = __webpack_require__(56);
	var AnalyticsActionListMeta_1 = __webpack_require__(109);
	var Initialization_1 = __webpack_require__(94);
	var Defer_1 = __webpack_require__(30);
	var DeviceUtils_1 = __webpack_require__(19);
	var ResultListEvents_1 = __webpack_require__(47);
	var Utils_1 = __webpack_require__(17);
	var DomUtils_1 = __webpack_require__(58);
	var Recommendation_1 = __webpack_require__(110);
	var DefaultRecommendationTemplate_1 = __webpack_require__(128);
	/**
	 * This component is responsible for displaying the results of the current query using one or more result templates.<br/>
	 * It supports many additional features such as infinite scrolling.
	 *
	 * # Examples / samples
	 * This contains some quick example. Refer to result templates on developers.coveo.com for more information.
	 *
	 * ```html
	 * <!-- A very simple result list with a single underscore template.
	 * The template has no condition : It will load for all results.
	 * Every results will show the same template. -->
	 *
	 * <div class="CoveoResultList">
	 *   <script class="result-template" type="text/underscore" id='MyDefaultTemplate'>
	 *     <div>
	 *       <a class='CoveoResultLink'>Hey, click on this ! <%- title %></a>
	 *     </div>
	 *   </script>
	 * </div>
	 *
	 * <!-- 2 different template in the same result list : The first template has a condition attribute, the second one does not.
	 *
	 * The first condition will be evaluated against each result. If a result match this condition (in this case if the result.raw.objecttype property in the JSON equals MyObjectType) then the template will be rendered and the next template won't be rendered or evaluated for this result. -->
	 *
	 * If the result does not match the first template, the next one will be evaluated. Since the second one has no condition, it is always considered "true" and will load as a fallback.
	 *
	 * This process will repeat for each result that was returned by the query to the index. -->
	 *
	 * <div class="CoveoResultList">
	 *   <script class="result-template" type="text/underscore" data-condition='raw.objecttype==MyObjectType' id='MyObjectTypeTemplate'>
	 *     <div>
	 *       <a class='CoveoResultLink'>Hey, click on this ! <%- title %></a>
	 *       <div class='CoveoExcerpt'></div>
	 *       <span>This is a result for the type : <%- raw.objecttype %></span>
	 *     </div>
	 *   </script>
	 *
	 *   <script class="result-template" type="text/underscore">
	 *     <div>
	 *       <a class='CoveoResultLink'>Hey, click on this ! <%- title %></a>
	 *     </div>
	 *   </script>
	 * </div>
	 *
	 * <!-- 2 different template in the same result list : Both have a data-condition attribute.
	 *
	 * Same as before : the condition will be evaluated against all results.
	 *
	 * Since there is no "default" template with no condition specified, the framework will fallback on the default templates included in the framework if no template match a given result. This is to ensure that all results get rendered -->
	 *
	 * <div class="CoveoResultList">
	 *   <script class="result-template" type="text/underscore" data-condition='raw.objecttype==MyObjectType' id='MyObjectTypeTemplate'>
	 *     <div>
	 *       <a class='CoveoResultLink'>Hey, click on this ! <%- title %></a>
	 *       <div class='CoveoExcerpt'></div>
	 *       <span>This is a result for the type : <%- raw.objecttype %></span>
	 *      </div>
	 *   </script>
	 *
	 *   <script class="result-template" type="text/underscore" data-condition='raw.objecttype==MySecondObjectType' id='MySecondObjectTypeTemplate'>
	 *     <div>
	 *       <span class='CoveoIcon'></span>
	 *       <a class='CoveoResultLink'></a>
	 *     </div>
	 *     <div class='CoveoExcerpt'></div>
	 *     <div class='CoveoPrintableUri'></div>
	 *   </script>
	 * </div>
	 * ```
	 */
	var ResultList = (function (_super) {
	    __extends(ResultList, _super);
	    /**
	     * Create a new ResultList.<br/>
	     * Bind various event related to queries (eg : on querySuccess -> renderResults)<br/>
	     * Bind scroll event if infinite scrolling is enabled.
	     * @param element The HTMLElement on which the element will be instantiated.
	     * @param options The options for the ResultList.
	     * @param bindings The bindings that the component requires to function normally. If not set, will automatically resolve them (With slower execution time)
	     * @param elementClassId The class that this component should instantiate. By default this will be CoveoResultList. This is used by component that extends the base ResultList
	     */
	    function ResultList(element, options, bindings, elementClassId) {
	        var _this = this;
	        if (elementClassId === void 0) { elementClassId = ResultList.ID; }
	        _super.call(this, element, elementClassId, bindings);
	        this.element = element;
	        this.options = options;
	        this.bindings = bindings;
	        this.currentlyDisplayedResults = [];
	        this.reachedTheEndOfResults = false;
	        this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, ResultList, options);
	        Assert_1.Assert.exists(element);
	        Assert_1.Assert.exists(this.options);
	        Assert_1.Assert.exists(this.options.resultContainer);
	        Assert_1.Assert.exists(this.options.resultTemplate);
	        Assert_1.Assert.exists(this.options.waitAnimationContainer);
	        Assert_1.Assert.exists(this.options.infiniteScrollContainer);
	        this.showOrHideElementsDependingOnState(false, false);
	        this.bind.onRootElement(QueryEvents_1.QueryEvents.newQuery, function (args) { return _this.handleNewQuery(); });
	        this.bind.onRootElement(QueryEvents_1.QueryEvents.buildingQuery, function (args) { return _this.handleBuildingQuery(args); });
	        this.bind.onRootElement(QueryEvents_1.QueryEvents.querySuccess, function (args) { return _this.handleQuerySuccess(args); });
	        this.bind.onRootElement(QueryEvents_1.QueryEvents.duringQuery, function (args) { return _this.handleDuringQuery(); });
	        this.bind.onRootElement(QueryEvents_1.QueryEvents.queryError, function (args) { return _this.handleQueryError(); });
	        if (this.options.enableInfiniteScroll) {
	            this.bind.on(this.options.infiniteScrollContainer, 'scroll', function (e) { return _this.handleScrollOfResultList(); });
	        }
	        this.bind.onQueryState(Model_1.MODEL_EVENTS.CHANGE_ONE, QueryStateModel_1.QUERY_STATE_ATTRIBUTES.FIRST, function () { return _this.handlePageChanged(); });
	    }
	    /**
	     * Empty the current result list content and append the given array of HTMLElement.<br/>
	     * Can append to existing elements in the result list, or replace them.<br/>
	     * Triggers the newResultDiplayed and newResultsDisplayed event
	     * @param resultsElement
	     * @param append
	     */
	    ResultList.prototype.renderResults = function (resultsElement, append) {
	        var _this = this;
	        if (append === void 0) { append = false; }
	        if (!append) {
	            this.options.resultContainer.innerHTML = '';
	        }
	        _.each(resultsElement, function (resultElement) {
	            _this.options.resultContainer.appendChild(resultElement);
	            _this.triggerNewResultDisplayed(Component_1.Component.getResult(resultElement), resultElement);
	        });
	        this.triggerNewResultsDisplayed();
	    };
	    /**
	     * Build and return an array of HTMLElement with the given result set.
	     * @param results
	     */
	    ResultList.prototype.buildResults = function (results) {
	        var _this = this;
	        var res = [];
	        _.each(results.results, function (result) {
	            var resultElement = _this.buildResult(result);
	            if (resultElement != null) {
	                res.push(resultElement);
	            }
	        });
	        ResultList.resultCurrentlyBeingRendered = null;
	        return res;
	    };
	    /**
	     * Build and return an HTMLElement for the given result.
	     * @param result
	     * @returns {HTMLElement}
	     */
	    ResultList.prototype.buildResult = function (result) {
	        Assert_1.Assert.exists(result);
	        QueryUtils_1.QueryUtils.setStateObjectOnQueryResult(this.queryStateModel.get(), result);
	        ResultList.resultCurrentlyBeingRendered = result;
	        var resultElement = this.options.resultTemplate.instantiateToElement(result);
	        if (resultElement != null) {
	            Component_1.Component.bindResultToElement(resultElement, result);
	        }
	        this.autoCreateComponentsInsideResult(resultElement, result);
	        return resultElement;
	    };
	    /**
	     * Execute a query to fetch new results. After the query is done, render those new results.<br/>
	     * Assert that there is actually more results to display by checking that the last query returned as many results as requested.<br/>
	     * Assert that the result list is not currently fetching results
	     * @param count The number of results to fetch and display
	     */
	    ResultList.prototype.displayMoreResults = function (count) {
	        var _this = this;
	        Assert_1.Assert.isLargerOrEqualsThan(1, count);
	        if (this.isCurrentlyFetchingMoreResults()) {
	            this.logger.warn('Ignoring request to display more results since we\'re already doing so');
	            return;
	        }
	        if (!this.hasPotentiallyMoreResultsToDisplay()) {
	            this.logger.warn('Ignoring request to display more results since we know there aren\'t more to display');
	            return;
	        }
	        if (this.options.enableInfiniteScrollWaitingAnimation) {
	            this.showWaitingAnimationForInfiniteScrolling();
	        }
	        this.fetchingMoreResults = this.queryController.fetchMore(count);
	        this.fetchingMoreResults.then(function (data) {
	            Assert_1.Assert.exists(data);
	            _this.usageAnalytics.logCustomEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.pagerScrolling, {}, _this.element);
	            var results = data.results;
	            _this.reachedTheEndOfResults = count > data.results.length;
	            _this.renderResults(_this.buildResults(data), true);
	            _.each(results, function (result) {
	                _this.currentlyDisplayedResults.push(result);
	            });
	            _this.triggerNewResultsDisplayed();
	        });
	        this.fetchingMoreResults.then(function () {
	            _this.hideWaitingAnimationForInfiniteScrolling();
	            _this.fetchingMoreResults = undefined;
	            Defer_1.Defer.defer(function () { return _this.handleScrollOfResultList(); });
	        });
	    };
	    /**
	     * Get the list of currently displayed result
	     * @returns {IQueryResult[]}
	     */
	    ResultList.prototype.getDisplayedResults = function () {
	        return this.currentlyDisplayedResults;
	    };
	    /**
	     * Get the list of currently displayed result HTMLElement
	     * @returns {HTMLElement[]}
	     */
	    ResultList.prototype.getDisplayedResultsElements = function () {
	        return Dom_1.$$(this.options.resultContainer).findAll('.CoveoResult');
	    };
	    ResultList.prototype.autoCreateComponentsInsideResult = function (element, result) {
	        Assert_1.Assert.exists(element);
	        var initOptions = this.searchInterface.options.originalOptionsObject;
	        var resultComponentBindings = _.extend({}, this.getBindings(), {
	            resultElement: element
	        });
	        var initParameters = {
	            options: initOptions,
	            bindings: resultComponentBindings,
	            result: result
	        };
	        Initialization_1.Initialization.automaticallyCreateComponentsInside(element, initParameters);
	    };
	    ResultList.prototype.triggerNewResultDisplayed = function (result, resultElement) {
	        var args = {
	            result: result,
	            item: resultElement
	        };
	        Dom_1.$$(this.element).trigger(ResultListEvents_1.ResultListEvents.newResultDisplayed, args);
	    };
	    ResultList.prototype.triggerNewResultsDisplayed = function () {
	        Dom_1.$$(this.element).trigger(ResultListEvents_1.ResultListEvents.newResultsDisplayed, {});
	    };
	    ResultList.prototype.handleDuringQuery = function () {
	        this.logger.trace('Emptying the result container');
	        this.cancelFetchingMoreResultsIfNeeded();
	        this.showWaitingAnimation();
	        this.showOrHideElementsDependingOnState(false, false);
	    };
	    ResultList.prototype.handleQueryError = function () {
	        this.hideWaitingAnimation();
	        Dom_1.$$(this.options.resultContainer).empty();
	        this.currentlyDisplayedResults = [];
	    };
	    ResultList.prototype.handleQuerySuccess = function (data) {
	        Assert_1.Assert.exists(data);
	        Assert_1.Assert.exists(data.results);
	        Dom_1.$$(this.element).toggle(!this.disabled);
	        if (!this.disabled) {
	            var results = data.results;
	            this.logger.trace('Received query results from new query', results);
	            this.hideWaitingAnimation();
	            ResultList.resultCurrentlyBeingRendered = undefined;
	            this.currentlyDisplayedResults = [];
	            this.renderResults(this.buildResults(data.results));
	            this.currentlyDisplayedResults = results.results;
	            this.reachedTheEndOfResults = false;
	            this.showOrHideElementsDependingOnState(true, this.currentlyDisplayedResults.length != 0);
	            if (this.options.enableInfiniteScroll && results.results.length == data.queryBuilder.numberOfResults) {
	                // This will check right away if we need to add more results to make the scroll container full & scrolling.
	                this.handleScrollOfResultList();
	            }
	            if (DeviceUtils_1.DeviceUtils.isMobileDevice() && this.options.mobileScrollContainer != undefined) {
	                this.options.mobileScrollContainer.scrollTop = 0;
	            }
	        }
	    };
	    ResultList.prototype.handleScrollOfResultList = function () {
	        if (this.isCurrentlyFetchingMoreResults() || !this.options.enableInfiniteScroll) {
	            return;
	        }
	        if (this.isScrollingOfResultListAlmostAtTheBottom() && this.hasPotentiallyMoreResultsToDisplay()) {
	            this.displayMoreResults(this.options.infiniteScrollPageSize);
	        }
	    };
	    ResultList.prototype.handlePageChanged = function () {
	        var _this = this;
	        this.bind.oneRootElement(QueryEvents_1.QueryEvents.querySuccess, function () {
	            if (_this.options.infiniteScrollContainer instanceof Window) {
	                var win = _this.options.infiniteScrollContainer;
	                win.scrollTo(0, 0);
	            }
	            else {
	                var el = _this.options.infiniteScrollContainer;
	                if (el.scrollIntoView) {
	                    el.scrollIntoView();
	                }
	            }
	        });
	    };
	    ResultList.prototype.handleNewQuery = function () {
	        Dom_1.$$(this.element).show();
	        ResultList.resultCurrentlyBeingRendered = undefined;
	    };
	    ResultList.prototype.handleBuildingQuery = function (args) {
	        if (this.options.fieldsToInclude != null) {
	            // remove the @
	            args.queryBuilder.addFieldsToInclude(_.map(this.options.fieldsToInclude, function (field) { return field.substr(1); }));
	        }
	        if (this.options.autoSelectFieldsToInclude) {
	            args.queryBuilder.addRequiredFields(this.getAutoSelectedFieldsToInclude());
	            args.queryBuilder.includeRequiredFields = true;
	        }
	    };
	    ResultList.prototype.getAutoSelectedFieldsToInclude = function () {
	        return _.chain(this.options.resultTemplate.getFields())
	            .compact()
	            .unique()
	            .value();
	    };
	    ResultList.prototype.isCurrentlyFetchingMoreResults = function () {
	        return Utils_1.Utils.exists(this.fetchingMoreResults);
	    };
	    ResultList.prototype.isScrollingOfResultListAlmostAtTheBottom = function () {
	        // this is in a try catch because the unit test fail otherwise (Window does not exist for phantom js in the console)
	        var isWindow;
	        try {
	            isWindow = this.options.infiniteScrollContainer instanceof Window;
	        }
	        catch (e) {
	            isWindow = false;
	        }
	        return isWindow ? this.isScrollAtBottomForWindowElement() : this.isScrollAtBottomForHtmlElement();
	    };
	    ResultList.prototype.isScrollAtBottomForWindowElement = function () {
	        var windowHeight = new Dom_1.Win(window).height();
	        var scrollTop = window.scrollY;
	        var bodyHeight = new Dom_1.Doc(document).height();
	        return bodyHeight - (windowHeight + scrollTop) < windowHeight / 2;
	    };
	    ResultList.prototype.isScrollAtBottomForHtmlElement = function () {
	        var el = this.options.infiniteScrollContainer;
	        var elementHeight = el.clientHeight;
	        var scrollHeight = el.scrollHeight;
	        var bottomPosition = el.scrollTop + elementHeight;
	        return (scrollHeight - bottomPosition) < elementHeight / 2;
	    };
	    ResultList.prototype.hasPotentiallyMoreResultsToDisplay = function () {
	        return this.currentlyDisplayedResults.length > 0 && !this.reachedTheEndOfResults;
	    };
	    ResultList.prototype.cancelFetchingMoreResultsIfNeeded = function () {
	        if (this.isCurrentlyFetchingMoreResults()) {
	            this.logger.trace('Cancelling fetching more results');
	            Promise.reject(this.fetchingMoreResults);
	            this.fetchingMoreResults = undefined;
	        }
	    };
	    ResultList.prototype.showOrHideElementsDependingOnState = function (hasQuery, hasResults) {
	        var showIfQuery = Dom_1.$$(this.element).findAll('.coveo-show-if-query');
	        var showIfNoQuery = Dom_1.$$(this.element).findAll('.coveo-show-if-no-query');
	        var showIfResults = Dom_1.$$(this.element).findAll('.coveo-show-if-results');
	        var showIfNoResults = Dom_1.$$(this.element).findAll('.coveo-show-if-no-results');
	        _.each(showIfQuery, function (s) {
	            Dom_1.$$(s).toggle(hasQuery);
	        });
	        _.each(showIfNoQuery, function (s) {
	            Dom_1.$$(s).toggle(!hasQuery);
	        });
	        _.each(showIfResults, function (s) {
	            Dom_1.$$(s).toggle(hasQuery && hasResults);
	        });
	        _.each(showIfNoResults, function (s) {
	            Dom_1.$$(s).toggle(hasQuery && !hasResults);
	        });
	    };
	    ResultList.prototype.showWaitingAnimation = function () {
	        switch (this.options.waitAnimation.toLowerCase()) {
	            case 'fade':
	                Dom_1.$$(this.options.waitAnimationContainer).addClass('coveo-fade-out');
	                break;
	            case 'spinner':
	                _.each(this.options.resultContainer.children, function (child) {
	                    Dom_1.$$(child).hide();
	                });
	                if (Dom_1.$$(this.options.waitAnimationContainer).find('.coveo-wait-animation') == undefined) {
	                    this.options.waitAnimationContainer.appendChild(DomUtils_1.DomUtils.getBasicLoadingAnimation());
	                }
	                break;
	        }
	    };
	    ResultList.prototype.hideWaitingAnimation = function () {
	        switch (this.options.waitAnimation.toLowerCase()) {
	            case 'fade':
	                Dom_1.$$(this.options.waitAnimationContainer).removeClass('coveo-fade-out');
	                break;
	            case 'spinner':
	                var spinner = Dom_1.$$(this.options.waitAnimationContainer).find('.coveo-loading-spinner');
	                if (spinner) {
	                    Dom_1.$$(spinner).detach();
	                }
	                break;
	        }
	    };
	    ResultList.prototype.showWaitingAnimationForInfiniteScrolling = function () {
	        this.options.waitAnimationContainer.appendChild(DomUtils_1.DomUtils.getLoadingSpinner());
	    };
	    ResultList.prototype.hideWaitingAnimationForInfiniteScrolling = function () {
	        var spinner = Dom_1.$$(this.options.waitAnimationContainer).find('.coveo-loading-spinner');
	        if (spinner) {
	            Dom_1.$$(spinner).detach();
	        }
	    };
	    ResultList.getDefaultTemplate = function (e) {
	        var component = Component_1.Component.get(e);
	        if (component.searchInterface instanceof Recommendation_1.Recommendation) {
	            return new DefaultRecommendationTemplate_1.DefaultRecommendationTemplate();
	        }
	        return new DefaultResultTemplate_1.DefaultResultTemplate();
	    };
	    ResultList.ID = 'ResultList';
	    /**
	     * The options for the ResultList
	     * @componentOptions
	     */
	    ResultList.options = {
	        /**
	         * Specifies the element within which the rendered templates for results are inserted.<br/>
	         * The content of this element is cleared when a new query is performed. If this option is not specified, a &lt;div&gt; element will by dynamically created in javascript and appended to the result list and used as a result container.<br/>
	         * You can change the container by specifying it's selector: Eg  data-result-container-selector="#someCssSelector"
	         */
	        resultContainer: ComponentOptions_1.ComponentOptions.buildChildHtmlElementOption({
	            defaultFunction: function (element) {
	                var d = document.createElement('div');
	                element.appendChild(d);
	                return d;
	            }
	        }),
	        resultTemplate: ComponentOptions_1.ComponentOptions.buildTemplateOption({ defaultFunction: ResultList.getDefaultTemplate }),
	        /**
	         * Specifies the type of animation to display while waiting for a new query to finish executing.<br/>
	         * Possible values are :<br/>
	         * 'fade' : Fades out the currently displayed results while the query is executing.<br/>
	         * 'spinner' : Shows a spinning animation while the query is executing.<br/>
	         * 'none' : Use no animation during queries.<br/>
	         * Default value is 'none'
	         */
	        waitAnimation: ComponentOptions_1.ComponentOptions.buildStringOption({ defaultValue: 'none' }),
	        /**
	         * Specifies the element inside which an animation is displayed while waiting for a new query to finish executing.<br/>
	         * You can change this by specifying a css selector.<br/>
	         * Eg : data-wait-animation-container-selector="#someCssSelector"
	         * By default, the animation appears in the the resultContainer.
	         */
	        waitAnimationContainer: ComponentOptions_1.ComponentOptions.buildChildHtmlElementOption({ postProcessing: function (value, options) { return value || options.resultContainer; } }),
	        /**
	         * Specifies whether the ResultList automatically retrieves an additional page of results and appends them to those already being displayed whenever the user scrolls to the end of the infiniteScrollContainer.<br/>
	         * The waitAnimation will be displayed while additional results are fetched.<br/>
	         * Default value is false
	         */
	        enableInfiniteScroll: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
	        /**
	         * When infiniteScroll is enabled, specifies the number of additional results that are fetched when the user scrolls to the bottom of the infiniteScrollContainer.<br/>
	         * Default value is 10
	         */
	        infiniteScrollPageSize: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 10, min: 1, depend: 'enableInfiniteScroll' }),
	        /**
	         * When infinite scrolling is enabled, specifies the element whose scrolling is monitored to trigger fetching of additional results.<br/>
	         * By default, the framework will try to find the first scrolling parent it encounter, starting from the ResultList itself<br/>
	         * This also means that if it encounter no parent that are scrollable (in css this means having overflow-y: scroll), then the window itself will be the scroll container
	         */
	        infiniteScrollContainer: ComponentOptions_1.ComponentOptions.buildChildHtmlElementOption({ depend: 'enableInfiniteScroll', defaultFunction: function (element) { return ComponentOptions_1.ComponentOptions.findParentScrolling(element); } }),
	        /**
	         * Specifies if the wait animation should be displayed when a query is being performed using infinite scroll.<br/>
	         * Default value is true
	         */
	        enableInfiniteScrollWaitingAnimation: ComponentOptions_1.ComponentOptions.buildBooleanOption({ depend: 'enableInfiniteScroll', defaultValue: true }),
	        mobileScrollContainer: ComponentOptions_1.ComponentOptions.buildSelectorOption({ defaultFunction: function () { return document.querySelector('.coveo-results-column'); } }),
	        /**
	         * Specifies a list of fields to include in the query.<br/>
	         * This is to ensure that fields that are not needed for the UI to function are not sent by the search API.<br/>
	         * By default, this list is empty.<br/>
	         * Note that this option has an interaction with autoSelectFieldsToInclude
	         */
	        fieldsToInclude: ComponentOptions_1.ComponentOptions.buildFieldsOption({ includeInResults: true }),
	        /**
	         * Specifies that the result list should scan it's template and discover which field it will need to render every results.<br/>
	         * This is to ensure that fields that are not needed for the UI to function are not sent by the search API.<br/>
	         * Default value is false.<br/>
	         * NB: Many interface created by the interface editor will actually explicitly set this option to true.
	         */
	        autoSelectFieldsToInclude: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false })
	    };
	    ResultList.resultCurrentlyBeingRendered = null;
	    return ResultList;
	}(Component_1.Component));
	exports.ResultList = ResultList;
	Initialization_1.Initialization.registerAutoCreateComponent(ResultList);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Template_1 = __webpack_require__(99);
	var DefaultRecommendationTemplate = (function (_super) {
	    __extends(DefaultRecommendationTemplate, _super);
	    function DefaultRecommendationTemplate() {
	        _super.apply(this, arguments);
	    }
	    DefaultRecommendationTemplate.prototype.instantiateToString = function (object) {
	        var template = "<div class=\"coveo-result-frame\">\n        <div class=\"coveo-result-row\">\n          <div class=\"coveo-result-cell\" style=\"width:40px;text-align:center;vertical-align:middle;\">\n            <span class=\"CoveoIcon\" data-small=\"true\">\n            </span>\n          </div>\n          <div class=\"coveo-result-cell\" style=\"padding:0 0 3px 5px;vertical-align:middle\">\n            <div class=\"coveo-result-row\">\n              <div class=\"coveo-result-cell\" style=\"font-size:10pt;\">\n                <a class=\"CoveoResultLink\" style=\"display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis\">\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>";
	        return template;
	    };
	    DefaultRecommendationTemplate.prototype.instantiateToElement = function (object) {
	        var div = document.createElement('div');
	        div.innerHTML = this.instantiateToString(object);
	        return div;
	    };
	    return DefaultRecommendationTemplate;
	}(Template_1.Template));
	exports.DefaultRecommendationTemplate = DefaultRecommendationTemplate;


/***/ },
/* 129 */,
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Initialization_1 = __webpack_require__(94);
	var Component_1 = __webpack_require__(95);
	var ComponentOptions_1 = __webpack_require__(97);
	var QueryEvents_1 = __webpack_require__(46);
	var Model_1 = __webpack_require__(86);
	var QueryStateModel_1 = __webpack_require__(89);
	var StandaloneSearchInterfaceEvents_1 = __webpack_require__(51);
	var AnalyticsActionListMeta_1 = __webpack_require__(109);
	var Dom_1 = __webpack_require__(56);
	var Assert_1 = __webpack_require__(16);
	var QueryboxQueryParameters_1 = __webpack_require__(131);
	/**
	 * A component that allows a user to enter a query inside an input.<br/>
	 * The component will trigger a query when submitted (the 'Enter' keypress) and log the proper analytics data.<br/>
	 * It must be instantiated on a div (and not directly on an input element): This is for styling purpose (ghost type ahead, for example).
	 */
	var Querybox = (function (_super) {
	    __extends(Querybox, _super);
	    /**
	     * Create a new Querybox.<br/>
	     * Create a new Coveo.Magicbox instance and wrap magic box method (on blur, on submit etc).<br/>
	     * Bind event on buildingQuery and on redirection (for standalone box).
	     * @param element The `HTMLElement` on which the element will be instantiated. This cannot be an `HTMLInputElement` for technical reasons.
	     * @param options The options for the querybox.
	     * @param bindings The bindings that the component requires to function normally. If not set, will automatically resolve them (with slower execution time).
	     */
	    function Querybox(element, options, bindings) {
	        var _this = this;
	        _super.call(this, element, Querybox.ID, bindings);
	        this.element = element;
	        this.options = options;
	        this.bindings = bindings;
	        if (element instanceof HTMLInputElement) {
	            this.logger.error('QueryBox can\'t be use on a HTMLInputElement');
	        }
	        this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, Querybox, options);
	        this.magicBox = Coveo.MagicBox.create(element, new Coveo.MagicBox.Grammar('Query', {
	            Query: '[Term*][Spaces?]',
	            Term: '[Spaces?][Word]',
	            Spaces: / +/,
	            Word: /[^ ]+/
	        }), {
	            inline: true
	        });
	        this.bind.onRootElement(QueryEvents_1.QueryEvents.buildingQuery, function (args) { return _this.handleBuildingQuery(args); });
	        this.bind.onRootElement(StandaloneSearchInterfaceEvents_1.StandaloneSearchInterfaceEvents.beforeRedirect, function () { return _this.updateQueryState(); });
	        this.bind.onQueryState(Model_1.MODEL_EVENTS.CHANGE_ONE, QueryStateModel_1.QUERY_STATE_ATTRIBUTES.Q, function (args) { return _this.handleQueryStateChanged(args); });
	        if (this.options.enableSearchAsYouType) {
	            Dom_1.$$(this.element).addClass('coveo-search-as-you-type');
	            this.magicBox.onchange = function () {
	                _this.searchAsYouType();
	            };
	        }
	        this.magicBox.onsubmit = function () {
	            _this.submit();
	        };
	        this.magicBox.onblur = function () {
	            _this.updateQueryState();
	        };
	        this.magicBox.onclear = function () {
	            _this.updateQueryState();
	            if (_this.options.triggerQueryOnClear) {
	                _this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxClear, {});
	                _this.triggerNewQuery(false);
	            }
	        };
	        if (this.options.autoFocus) {
	            this.magicBox.focus();
	        }
	    }
	    /**
	     * Trigger a query. The current input content will be added to the query.<br/>
	     * If the content of the input has not changed since the last submit, no new query will be triggered.
	     */
	    Querybox.prototype.submit = function () {
	        this.magicBox.clearSuggestion();
	        this.updateQueryState();
	        this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxSubmit, {});
	        this.triggerNewQuery(false);
	    };
	    /**
	     * Set the content of the input
	     * @param text The string to set in the input
	     */
	    Querybox.prototype.setText = function (text) {
	        this.magicBox.setText(text);
	        this.updateQueryState();
	    };
	    /**
	     * Clear the content of the input
	     */
	    Querybox.prototype.clear = function () {
	        this.magicBox.clear();
	    };
	    /**
	     * Get the current content of the input
	     * @returns {string}
	     */
	    Querybox.prototype.getText = function () {
	        return this.magicBox.getText();
	    };
	    Querybox.prototype.getResult = function () {
	        return this.magicBox.getResult();
	    };
	    Querybox.prototype.getDisplayedResult = function () {
	        return this.magicBox.getDisplayedResult();
	    };
	    Querybox.prototype.getCursor = function () {
	        return this.magicBox.getCursor();
	    };
	    Querybox.prototype.resultAtCursor = function (match) {
	        return this.magicBox.resultAtCursor(match);
	    };
	    Querybox.prototype.handleBuildingQuery = function (args) {
	        Assert_1.Assert.exists(args);
	        Assert_1.Assert.exists(args.queryBuilder);
	        this.updateQueryState();
	        this.lastQuery = this.magicBox.getText();
	        new QueryboxQueryParameters_1.QueryboxQueryParameters(this.options).addParameters(args.queryBuilder, this.lastQuery);
	    };
	    Querybox.prototype.triggerNewQuery = function (searchAsYouType) {
	        clearTimeout(this.searchAsYouTypeTimeout);
	        var text = this.magicBox.getText();
	        if (this.lastQuery != text && text != null) {
	            this.lastQuery = text;
	            this.queryController.executeQuery({
	                searchAsYouType: searchAsYouType,
	                logInActionsHistory: true
	            });
	        }
	    };
	    Querybox.prototype.updateQueryState = function () {
	        this.queryStateModel.set(QueryStateModel_1.QueryStateModel.attributesEnum.q, this.magicBox.getText());
	    };
	    Querybox.prototype.handleQueryStateChanged = function (args) {
	        Assert_1.Assert.exists(args);
	        var q = args.value;
	        if (q != this.magicBox.getText()) {
	            this.magicBox.setText(q);
	        }
	    };
	    Querybox.prototype.searchAsYouType = function () {
	        var _this = this;
	        clearTimeout(this.searchAsYouTypeTimeout);
	        this.searchAsYouTypeTimeout = setTimeout(function () {
	            _this.usageAnalytics.logSearchAsYouType(AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxAsYouType, {});
	            _this.triggerNewQuery(true);
	        }, this.options.searchAsYouTypeDelay);
	    };
	    Querybox.ID = 'Querybox';
	    /**
	     * The options for the Querybox.
	     * @componentOptions
	     */
	    Querybox.options = {
	        /**
	         * Specify if search as you type should be enabled.<br/>
	         * Default to `false`.
	         */
	        enableSearchAsYouType: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
	        /**
	         * If `enableSearchAsYouType` is enabled, this option specify the delay (in ms) between a keypress and a query being triggered<br/>
	         * Default to 500 ms.
	         */
	        searchAsYouTypeDelay: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 500, min: 0 }),
	        /**
	         * Specifies whether the Coveo Platform does try to interpret special query syntax such as field references in the query entered through the query box.<br/>
	         * The default value is `true`.
	         */
	        enableQuerySyntax: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }),
	        /**
	         * Specifies whether the Coveo Platform expands keywords containing wildcard characters (*) to the possible matching keywords to broaden the query.<br/>
	         * The default value is `false`.
	         */
	        enableWildcards: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
	        /**
	         * Specifies whether the Coveo Platform expands keywords containing question mark characters (?) to the possible matching keywords to broaden the query.<br/>
	         * The default value is `false`.
	         */
	        enableQuestionMarks: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
	        /**
	         * If true, the or and and keywords in the query box will be treated as boolean operators for the query when they are typed in lowercase.<br/>
	         * This applies for all operators<br/>
	         * Default value is `false`.
	         */
	        enableLowercaseOperators: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
	        /**
	         * Specifies whether a query containing a large number of keywords (see partialMatchKeywords) is automatically converted to a partial match expression in order to match documents containing only a subset of the keywords (see partialMatchThreshold for defining the subset).<br/>
	         * The default value is `false`.
	         */
	        enablePartialMatch: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
	        /**
	         * When partial match is enabled, specifies the minimum number of keywords that must be present in the query to activate the partial match.<br/>
	         * The default value is 5.
	         */
	        partialMatchKeywords: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 5, min: 1 }),
	        /**
	         * When partial match is enabled, specifies either an absolute or percentage value indicating the minimum number of keywords a document must contain in order to match the query.<br/>
	         * The default value is 50%.
	         */
	        partialMatchThreshold: ComponentOptions_1.ComponentOptions.buildStringOption({ defaultValue: '50%' }),
	        /**
	         * Specifies whether or not to trigger a query when the searchbox is cleared.
	         * The default value is `true`.
	         */
	        triggerQueryOnClear: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }),
	        /**
	         *  Specifies a placeholder for input.
	         */
	        placeholder: ComponentOptions_1.ComponentOptions.buildStringOption(),
	        /**
	         * Specifies whether the `QueryBox` gets the focus and is selected on initialization.
	         * The default value is `true`.
	         */
	        autoFocus: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true })
	    };
	    return Querybox;
	}(Component_1.Component));
	exports.Querybox = Querybox;
	Initialization_1.Initialization.registerAutoCreateComponent(Querybox);


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var QueryboxQueryParameters = (function () {
	    function QueryboxQueryParameters(options) {
	        this.options = options;
	    }
	    QueryboxQueryParameters.prototype.addParameters = function (queryBuilder, lastQuery) {
	        if (this.options.enableWildcards) {
	            queryBuilder.enableWildcards = true;
	        }
	        if (this.options.enableQuestionMarks) {
	            queryBuilder.enableQuestionMarks = true;
	        }
	        if (this.options.enableLowercaseOperators) {
	            queryBuilder.enableLowercaseOperators = true;
	        }
	        if (!_.isEmpty(lastQuery)) {
	            queryBuilder.disableQuerySyntax = !this.options.enableQuerySyntax;
	            queryBuilder.expression.add(lastQuery);
	            if (this.options.enablePartialMatch) {
	                queryBuilder.enablePartialMatch = this.options.enablePartialMatch;
	                if (this.options.partialMatchKeywords) {
	                    queryBuilder.partialMatchKeywords = this.options.partialMatchKeywords;
	                }
	                if (this.options.partialMatchThreshold) {
	                    queryBuilder.partialMatchThreshold = this.options.partialMatchThreshold;
	                }
	            }
	        }
	    };
	    return QueryboxQueryParameters;
	}());
	exports.QueryboxQueryParameters = QueryboxQueryParameters;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Component_1 = __webpack_require__(95);
	var Utils_1 = __webpack_require__(17);
	var Dom_1 = __webpack_require__(56);
	var Strings_1 = __webpack_require__(33);
	var AnalyticsActionListMeta_1 = __webpack_require__(109);
	var Initialization_1 = __webpack_require__(94);
	/**
	 * A component that allows user to trigger a query by clicking on it.<br/>
	 * This component will instantiate on an element and add a search icon.<br/>
	 * It will also sends an analytics event to the Coveo platform when clicked.
	 */
	var SearchButton = (function (_super) {
	    __extends(SearchButton, _super);
	    /**
	     * Create a new SearchButton on the given element with the given options.
	     * Bind a click event on the element
	     * Adds a search icon on the element
	     * @param element
	     * @param options
	     * @param bindings
	     */
	    function SearchButton(element, options, bindings) {
	        var _this = this;
	        _super.call(this, element, SearchButton.ID, bindings);
	        this.element = element;
	        this.options = options;
	        this.bind.on(element, 'click', function () { return _this.handleClick(); });
	        // Provide a magnifier icon if element contains nothing
	        if (Utils_1.Utils.trim(Dom_1.$$(this.element).text()) == '') {
	            element.innerHTML = '<span class=\'coveo-icon\'>' + Strings_1.l('Search') + '</span>';
	        }
	    }
	    /**
	     * Trigger the click handler
	     */
	    SearchButton.prototype.click = function () {
	        this.handleClick();
	    };
	    SearchButton.prototype.handleClick = function () {
	        this.logger.debug('Performing query following button click');
	        this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxSubmit, {});
	        this.queryController.executeQuery();
	    };
	    SearchButton.ID = 'SearchButton';
	    SearchButton.options = {};
	    return SearchButton;
	}(Component_1.Component));
	exports.SearchButton = SearchButton;
	Initialization_1.Initialization.registerAutoCreateComponent(SearchButton);


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Component_1 = __webpack_require__(95);
	var Omnibox_1 = __webpack_require__(134);
	var ComponentOptions_1 = __webpack_require__(97);
	var SearchButton_1 = __webpack_require__(132);
	var Querybox_1 = __webpack_require__(130);
	var Dom_1 = __webpack_require__(56);
	var Initialization_1 = __webpack_require__(94);
	/**
	 * This component is mostly used for simplicity purpose because it creates 2 components that are very frequently used together.<br/>
	 * This component attaches itself to a div and takes care of instantiating a {@link Querybox} component or a {@link Omnibox} component, depending on the options.<br/>
	 * Add a {@link SearchButton} component if desired, and appends them to the same div.
	 */
	var Searchbox = (function (_super) {
	    __extends(Searchbox, _super);
	    /**
	     * Create a new Searchbox<br/>
	     * Create a new Coveo.Magicbox instance and wrap magic box method (on blur, on submit etc).<br/>
	     * Bind event on `buildingQuery` and on redirection (for standalone box).
	     * @param element The `HTMLElement` on which the element will be instantiated. This cannot be an `HTMLInputElement` for technical reason
	     * @param options The options for the component. Will be merged with the options from the component set directly on the `HTMLElement`.
	     * @param bindings The bindings that the component requires to function normally. If not set, will automatically resolve them (with slower execution time).
	     */
	    function Searchbox(element, options, bindings) {
	        _super.call(this, element, Searchbox.ID, bindings);
	        this.element = element;
	        this.options = options;
	        this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, Searchbox, options);
	        if (this.options.inline) {
	            Dom_1.$$(element).addClass('coveo-inline');
	        }
	        if (this.options.addSearchButton) {
	            var anchor = document.createElement('a');
	            this.element.appendChild(anchor);
	            this.searchButton = new SearchButton_1.SearchButton(anchor, undefined, bindings);
	        }
	        var div = document.createElement('div');
	        this.element.appendChild(div);
	        if (this.options.enableOmnibox) {
	            this.searchbox = new Omnibox_1.Omnibox(div, this.options, bindings);
	        }
	        else {
	            this.searchbox = new Querybox_1.Querybox(div, this.options, bindings);
	        }
	    }
	    Searchbox.ID = 'Searchbox';
	    Searchbox.parent = Omnibox_1.Omnibox;
	    /**
	     * Possible options for the {@link Searchbox}
	     * @componentOptions
	     */
	    Searchbox.options = {
	        /**
	         * Specifies whether the search box instantiates a {@link SearchButton}.<br/>
	         * Default value is `true`.
	         */
	        addSearchButton: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }),
	        /**
	         * Specifies whether the search box instantiates a {@link Omnibox} component.<br/>
	         * Otherwise, the search box instantiates a {@link Querybox} component.<br/>
	         * Default value is `false`.
	         */
	        enableOmnibox: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false })
	    };
	    return Searchbox;
	}(Component_1.Component));
	exports.Searchbox = Searchbox;
	Searchbox.options = _.extend({}, Searchbox.options, Omnibox_1.Omnibox.options, Querybox_1.Querybox.options);
	// Only parse omnibox option if omnibox is enabled
	_.each(Searchbox.options, function (value, key) {
	    if (key in Omnibox_1.Omnibox.options && !(key in Querybox_1.Querybox.options)) {
	        Searchbox.options[key] = _.extend({ depend: 'enableOmnibox' }, value);
	    }
	});
	Initialization_1.Initialization.registerAutoCreateComponent(Searchbox);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Component_1 = __webpack_require__(95);
	var ComponentOptions_1 = __webpack_require__(97);
	var QueryEvents_1 = __webpack_require__(46);
	var StandaloneSearchInterfaceEvents_1 = __webpack_require__(51);
	var Model_1 = __webpack_require__(86);
	var QueryStateModel_1 = __webpack_require__(89);
	var AnalyticsActionListMeta_1 = __webpack_require__(109);
	var OmniboxEvents_1 = __webpack_require__(44);
	var Dom_1 = __webpack_require__(56);
	var Assert_1 = __webpack_require__(16);
	var QueryStateModel_2 = __webpack_require__(89);
	var Initialization_1 = __webpack_require__(94);
	var Querybox_1 = __webpack_require__(130);
	var FieldAddon_1 = __webpack_require__(135);
	var QueryExtensionAddon_1 = __webpack_require__(136);
	var RevealQuerySuggestAddon_1 = __webpack_require__(137);
	var OldOmniboxAddon_1 = __webpack_require__(138);
	var QueryboxQueryParameters_1 = __webpack_require__(131);
	var PendingSearchAsYouTypeSearchEvent_1 = __webpack_require__(116);
	var Utils_1 = __webpack_require__(17);
	var ExternalModulesShim_1 = __webpack_require__(24);
	var MINIMUM_EXECUTABLE_CONFIDENCE = 0.8;
	/**
	 * This component is very similar to the simpler {@link Querybox} component and support all the same options/behavior except for the search-as-you-type feature.<br/>
	 * In addition, it takes care of adding a type-ahead capability. The type-ahead and the suggestions it displays are customizable and extensible by any custom component.<br/>
	 * The type-ahead is configurable by activating addon which are provided OOTB (facets, analytics suggestions, Reveal suggestions, and advanced Coveo syntax suggestions).<br/>
	 * It is also possible for external code to provide suggestions.
	 */
	var Omnibox = (function (_super) {
	    __extends(Omnibox, _super);
	    /**
	     * Create a new omnibox with, enable required addons, and bind events on letious query events.
	     */
	    function Omnibox(element, options, bindings) {
	        var _this = this;
	        _super.call(this, element, Omnibox.ID, bindings);
	        this.element = element;
	        this.options = options;
	        this.partialQueries = [];
	        this.lastSuggestions = [];
	        this.movedOnce = false;
	        this.skipRevealAutoSuggest = false;
	        this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, Omnibox, options);
	        var grammar;
	        if (this.options.enableQuerySyntax) {
	            grammar = ExternalModulesShim_1.MagicBox.Grammars.Expressions(ExternalModulesShim_1.MagicBox.Grammars.Complete);
	            if (this.options.enableFieldAddon) {
	                new FieldAddon_1.FieldAddon(this);
	            }
	            if (this.options.fieldAlias != null) {
	                this.options.listOfFields = this.options.listOfFields || [];
	                this.options.listOfFields = this.options.listOfFields.concat(_.keys(this.options.fieldAlias));
	            }
	            if (this.options.enableQueryExtensionAddon) {
	                new QueryExtensionAddon_1.QueryExtensionAddon(this);
	            }
	        }
	        else {
	            grammar = { start: 'Any', expressions: { Any: /.*/ } };
	        }
	        if (this.options.enableRevealQuerySuggestAddon) {
	            new RevealQuerySuggestAddon_1.RevealQuerySuggestAddon(this);
	        }
	        new OldOmniboxAddon_1.OldOmniboxAddon(this);
	        if (this.options.grammar != null) {
	            grammar = this.options.grammar(grammar);
	        }
	        this.magicBox = ExternalModulesShim_1.MagicBox.create(element, new ExternalModulesShim_1.MagicBox.Grammar(grammar.start, grammar.expressions), {
	            inline: this.options.inline,
	            selectableSuggestionClass: 'coveo-omnibox-selectable',
	            selectedSuggestionClass: 'coveo-omnibox-selected',
	            suggestionTimeout: this.options.omniboxTimeout
	        });
	        this.bind.onRootElement(QueryEvents_1.QueryEvents.buildingQuery, function (args) { return _this.handleBuildingQuery(args); });
	        this.bind.onRootElement(StandaloneSearchInterfaceEvents_1.StandaloneSearchInterfaceEvents.beforeRedirect, function () { return _this.handleBeforeRedirect(); });
	        this.bind.onRootElement(QueryEvents_1.QueryEvents.querySuccess, function () { return _this.handleQuerySuccess(); });
	        this.bind.onQueryState(Model_1.MODEL_EVENTS.CHANGE_ONE, QueryStateModel_1.QUERY_STATE_ATTRIBUTES.Q, function (args) { return _this.handleQueryStateChanged(args); });
	        if (this.isRevealAutoSuggestion()) {
	            this.bind.onRootElement(QueryEvents_1.QueryEvents.duringQuery, function (args) { return _this.handleDuringQuery(args); });
	        }
	        this.setupMagicBox();
	    }
	    /**
	     * Trigger a query. The current input content will be added to the query.<br/>
	     * If the content of the input has not changed since the last submit, no new query will be triggered.
	     */
	    Omnibox.prototype.submit = function () {
	        var _this = this;
	        this.magicBox.clearSuggestion();
	        this.updateQueryState();
	        this.triggerNewQuery(false, function () {
	            _this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxSubmit, {});
	        });
	    };
	    /**
	     * Get the current content of the input
	     * @returns {string}
	     */
	    Omnibox.prototype.getText = function () {
	        return this.magicBox.getText();
	    };
	    /**
	     * Set the content of the input
	     * @param text The string to set in the input
	     */
	    Omnibox.prototype.setText = function (text) {
	        this.magicBox.setText(text);
	        this.updateQueryState();
	    };
	    /**
	     * Clear the content of the input
	     */
	    Omnibox.prototype.clear = function () {
	        this.magicBox.clear();
	    };
	    /**
	     * Get the `HTMLInputElement` of the omnibox
	     */
	    Omnibox.prototype.getInput = function () {
	        return this.magicBox.element.querySelector('input');
	    };
	    Omnibox.prototype.getResult = function () {
	        return this.magicBox.getResult();
	    };
	    Omnibox.prototype.getDisplayedResult = function () {
	        return this.magicBox.getDisplayedResult();
	    };
	    Omnibox.prototype.getCursor = function () {
	        return this.magicBox.getCursor();
	    };
	    Omnibox.prototype.resultAtCursor = function (match) {
	        return this.magicBox.resultAtCursor(match);
	    };
	    Omnibox.prototype.setupMagicBox = function () {
	        var _this = this;
	        this.magicBox.onmove = function () {
	            // We assume that once the user has moved it's selection, it becomes an explicit omnibox analytics event
	            if (_this.isRevealAutoSuggestion()) {
	                _this.modifyEventTo = AnalyticsActionListMeta_1.analyticsActionCauseList.omniboxAnalytics;
	            }
	            _this.movedOnce = true;
	        };
	        this.magicBox.onfocus = function () {
	            if (_this.isRevealAutoSuggestion()) {
	                // This flag is used to block the automatic query when the UI is loaded with a query (#q=foo)
	                // and then the input is focused. We want to block that query, even if it match the suggestion
	                // Only when there is an actual change in the input (user typing something) is when we want the automatic query to kick in
	                _this.skipRevealAutoSuggest = true;
	            }
	        };
	        this.magicBox.onsuggestions = function (suggestions) {
	            // If text is empty, this can mean that user selected text from the search box
	            // and hit "delete" : Reset the partial queries in this case
	            if (Utils_1.Utils.isEmptyString(_this.getText())) {
	                _this.partialQueries = [];
	            }
	            _this.movedOnce = false;
	            _this.lastSuggestions = suggestions;
	            if (_this.isRevealAutoSuggestion() && !_this.skipRevealAutoSuggest) {
	                _this.searchAsYouType();
	            }
	        };
	        if (this.options.enableSearchAsYouType) {
	            Dom_1.$$(this.element).addClass('coveo-magicbox-search-as-you-type');
	        }
	        this.magicBox.onchange = function () {
	            _this.skipRevealAutoSuggest = false;
	            var text = _this.getText();
	            if (text != undefined && text != '') {
	                if (_this.isRevealAutoSuggestion()) {
	                    if (_this.movedOnce) {
	                        _this.searchAsYouType(true);
	                    }
	                }
	                else if (_this.options.enableSearchAsYouType) {
	                    _this.searchAsYouType(true);
	                }
	            }
	            else {
	                _this.clear();
	            }
	        };
	        if (this.options.placeholder) {
	            this.magicBox.element.querySelector('input').placeholder = this.options.placeholder;
	        }
	        this.magicBox.onsubmit = function () {
	            _this.magicBox.clearSuggestion();
	            _this.updateQueryState();
	            _this.triggerNewQuery(false, function () {
	                _this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxSubmit, {});
	            });
	        };
	        this.magicBox.onselect = function (suggestion) {
	            var index = _.indexOf(_this.lastSuggestions, suggestion);
	            var suggestions = _.map(_this.lastSuggestions, function (suggestion) { return suggestion.text; });
	            _this.magicBox.clearSuggestion();
	            _this.updateQueryState();
	            // A bit tricky here : When it's reveal auto suggestions
	            // the mouse selection and keyboard selection acts differently :
	            // keyboard selection will automatically do the query (which will log a search as you type event -> further modified by this.modifyEventTo if needed)
	            // mouse selection will not "auto" send the query.
	            // the movedOnce variable detect the keyboard movement, and is used to differentiate mouse vs keyboard
	            if (!_this.isRevealAutoSuggestion()) {
	                _this.usageAnalytics.cancelAllPendingEvents();
	                _this.triggerNewQuery(false, function () {
	                    _this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.omniboxAnalytics, _this.buildCustomDataForPartialQueries(index, suggestions));
	                });
	            }
	            else if (_this.isRevealAutoSuggestion() && _this.movedOnce) {
	                _this.handleRevealAutoSuggestionWithKeyboard(index, suggestions);
	            }
	            else if (_this.isRevealAutoSuggestion() && !_this.movedOnce) {
	                _this.handleRevealAutoSuggestionsWithMouse(index, suggestions);
	            }
	            // Consider a selection like a reset of the partial queries (it's the end of a suggestion pattern)
	            if (_this.isRevealAutoSuggestion()) {
	                _this.partialQueries = [];
	            }
	        };
	        this.magicBox.onblur = function () {
	            if (_this.options.enableSearchAsYouType && !_this.options.inline) {
	                _this.setText(_this.lastQuery);
	            }
	            else {
	                _this.updateQueryState();
	            }
	            if (_this.isRevealAutoSuggestion()) {
	                _this.usageAnalytics.sendAllPendingEvents();
	            }
	        };
	        this.magicBox.onclear = function () {
	            _this.updateQueryState();
	            if (_this.options.triggerQueryOnClear) {
	                _this.triggerNewQuery(false, function () {
	                    _this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxClear, {});
	                });
	            }
	        };
	        if (this.options.autoFocus) {
	            this.magicBox.focus();
	        }
	        this.magicBox.getSuggestions = function () { return _this.handleSuggestions(); };
	    };
	    Omnibox.prototype.handleRevealAutoSuggestionWithKeyboard = function (index, suggestions) {
	        var _this = this;
	        if (this.searchAsYouTypeTimeout) {
	            // Here, there is currently a search as you typed queued up :
	            // Think : user typed very quickly, then very quickly selected a suggestion (without waiting for the search as you type)
	            // Cancel the search as you type query, then immediately do the query with the selection (+analytics event with the selection)
	            this.usageAnalytics.cancelAllPendingEvents();
	            clearTimeout(this.searchAsYouTypeTimeout);
	            this.searchAsYouTypeTimeout = undefined;
	            this.triggerNewQuery(false, function () {
	                _this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.omniboxAnalytics, _this.buildCustomDataForPartialQueries(index, suggestions));
	            });
	        }
	        else {
	            // Here, the search as you type query has returned, but the analytics event has not ye been sent.
	            // Think : user typed slowly, the query returned, and then the user selected a suggestion.
	            // Since the analytics event has not yet been sent (search as you type event have a 5 sec delay)
	            // modify the pending event, then send the newly modified analytics event immediately.
	            this.modifyEventTo = AnalyticsActionListMeta_1.analyticsActionCauseList.omniboxAnalytics;
	            this.modifyCustomDataOnPending(index, suggestions);
	            this.usageAnalytics.sendAllPendingEvents();
	        }
	    };
	    Omnibox.prototype.handleRevealAutoSuggestionsWithMouse = function (index, suggestions) {
	        var _this = this;
	        if (this.searchAsYouTypeTimeout || index != 0) {
	            // Here : the user either very quickly chose the first suggestion, and the search as you type is still queued up.
	            // OR
	            // the user chose something different then the first suggestion.
	            // Remove the search as you type if it's there, and do the query with the suggestion directly.
	            this.clearSearchAsYouType();
	            this.usageAnalytics.cancelAllPendingEvents();
	            this.triggerNewQuery(false, function () {
	                _this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.omniboxAnalytics, _this.buildCustomDataForPartialQueries(index, suggestions));
	            });
	        }
	        else {
	            // Here : the user either very slowly chose a suggestion, and there is no search as you typed queued up
	            // AND
	            // the user chose the first suggestion.
	            // this means the query is already returned, but the analytics event is still queued up.
	            // modify the analytics event, and send it.
	            this.modifyEventTo = AnalyticsActionListMeta_1.analyticsActionCauseList.omniboxAnalytics;
	            this.modifyCustomDataOnPending(index, suggestions);
	            this.usageAnalytics.sendAllPendingEvents();
	        }
	    };
	    Omnibox.prototype.modifyCustomDataOnPending = function (index, suggestions) {
	        var pendingEvt = this.usageAnalytics.getPendingSearchEvent();
	        if (pendingEvt instanceof PendingSearchAsYouTypeSearchEvent_1.PendingSearchAsYouTypeSearchEvent) {
	            var newCustomData_1 = this.buildCustomDataForPartialQueries(index, suggestions);
	            _.each(_.keys(newCustomData_1), function (k) {
	                pendingEvt.modifyCustomData(k, newCustomData_1[k]);
	            });
	        }
	    };
	    Omnibox.prototype.buildCustomDataForPartialQueries = function (index, suggestions) {
	        return {
	            partialQueries: this.cleanCustomData(this.partialQueries),
	            suggestionRanking: index,
	            suggestions: this.cleanCustomData(suggestions),
	            partialQuery: _.last(this.partialQueries)
	        };
	    };
	    Omnibox.prototype.cleanCustomData = function (toClean, rejectLength) {
	        if (rejectLength === void 0) { rejectLength = 256; }
	        // Filter out only consecutive values that are the identical
	        toClean = _.filter(toClean, function (partial, pos, array) {
	            return pos === 0 || partial !== array[pos - 1];
	        });
	        // Custom dimensions cannot be an array in analytics service: Send a string joined by ; instead.
	        // Need to replace ;
	        toClean = _.map(toClean, function (partial) {
	            return partial.replace(/;/g, '');
	        });
	        // Reduce right to get the last X words that adds to less then rejectLength
	        var reducedToRejectLengthOrLess = [];
	        _.reduceRight(toClean, function (memo, partial) {
	            var totalSoFar = memo + partial.length;
	            if (totalSoFar <= rejectLength) {
	                reducedToRejectLengthOrLess.push(partial);
	            }
	            return totalSoFar;
	        }, 0);
	        toClean = reducedToRejectLengthOrLess.reverse();
	        var ret = toClean.join(';');
	        // analytics service can store max 256 char in a custom event
	        // if we're over that, call cleanup again with an arbitrary 10 less char accepted
	        if (ret.length >= 256) {
	            return this.cleanCustomData(toClean, rejectLength - 10);
	        }
	        return toClean.join(';');
	    };
	    Omnibox.prototype.handleSuggestions = function () {
	        var suggestionsEventArgs = {
	            suggestions: [],
	            omnibox: this
	        };
	        this.bind.trigger(this.element, OmniboxEvents_1.OmniboxEvents.populateOmniboxSuggestions, suggestionsEventArgs);
	        var text = this.getText();
	        if (!Utils_1.Utils.isNullOrEmptyString(text)) {
	            this.partialQueries.push(text);
	        }
	        return suggestionsEventArgs.suggestions;
	    };
	    Omnibox.prototype.handleBeforeRedirect = function () {
	        this.updateQueryState();
	    };
	    Omnibox.prototype.handleBuildingQuery = function (data) {
	        var _this = this;
	        Assert_1.Assert.exists(data);
	        Assert_1.Assert.exists(data.queryBuilder);
	        this.updateQueryState();
	        this.lastQuery = this.getQuery(data.searchAsYouType);
	        var result = this.lastQuery == this.magicBox.getDisplayedResult().input ? this.magicBox.getDisplayedResult().clone() : this.magicBox.grammar.parse(this.lastQuery).clean();
	        var preprocessResultForQueryArgs = {
	            result: result
	        };
	        if (this.options.enableQuerySyntax) {
	            var notQuotedValues = preprocessResultForQueryArgs.result.findAll('FieldValueNotQuoted');
	            _.each(notQuotedValues, function (value) { return value.value = '"' + value.value.replace(/"|\u00A0/g, ' ') + '"'; });
	            if (this.options.fieldAlias) {
	                var fieldNames = preprocessResultForQueryArgs.result.findAll(function (result) { return result.expression.id == 'FieldName' && result.isSuccess(); });
	                _.each(fieldNames, function (result) {
	                    var alias = _.find(_.keys(_this.options.fieldAlias), function (alias) { return alias.toLowerCase() == result.value.toLowerCase(); });
	                    if (alias != null) {
	                        result.value = _this.options.fieldAlias[alias];
	                    }
	                });
	            }
	        }
	        this.bind.trigger(this.element, OmniboxEvents_1.OmniboxEvents.omniboxPreprocessResultForQuery, preprocessResultForQueryArgs);
	        var query = preprocessResultForQueryArgs.result.toString();
	        new QueryboxQueryParameters_1.QueryboxQueryParameters(this.options).addParameters(data.queryBuilder, query);
	    };
	    Omnibox.prototype.triggerNewQuery = function (searchAsYouType, analyticsEvent) {
	        clearTimeout(this.searchAsYouTypeTimeout);
	        var text = this.getQuery(searchAsYouType);
	        if (this.shouldExecuteQuery(searchAsYouType)) {
	            this.lastQuery = text;
	            analyticsEvent();
	            this.queryController.executeQuery({
	                searchAsYouType: searchAsYouType,
	                logInActionsHistory: true
	            });
	        }
	    };
	    Omnibox.prototype.getQuery = function (searchAsYouType) {
	        var query;
	        if (searchAsYouType) {
	            query = this.magicBox.getWordCompletion();
	            if (query == null && this.lastSuggestions != null && this.lastSuggestions.length > 0) {
	                var textSuggestion = _.find(this.lastSuggestions, function (suggestion) { return suggestion.text != null; });
	                if (textSuggestion != null) {
	                    query = textSuggestion.text;
	                }
	            }
	        }
	        return query || this.magicBox.getText();
	    };
	    Omnibox.prototype.updateQueryState = function () {
	        this.queryStateModel.set(QueryStateModel_2.QueryStateModel.attributesEnum.q, this.magicBox.getText());
	    };
	    Omnibox.prototype.handleQueryStateChanged = function (args) {
	        Assert_1.Assert.exists(args);
	        var q = args.value;
	        if (q != this.magicBox.getText()) {
	            this.magicBox.setText(q);
	        }
	    };
	    Omnibox.prototype.handleQuerySuccess = function () {
	        if (!this.isRevealAutoSuggestion()) {
	            this.partialQueries = [];
	        }
	    };
	    Omnibox.prototype.handleDuringQuery = function (args) {
	        var _this = this;
	        // When the query results returns ... (args.promise)
	        args.promise.then(function () {
	            // Get a handle on a pending search as you type (those events are delayed, not sent instantly)
	            var pendingEvent = _this.usageAnalytics.getPendingSearchEvent();
	            if (pendingEvent instanceof PendingSearchAsYouTypeSearchEvent_1.PendingSearchAsYouTypeSearchEvent) {
	                pendingEvent.beforeResolve.then(function (evt) {
	                    // Check if we need to modify the event type beforeResolving it
	                    args.promise.then(function () {
	                        if (_this.modifyEventTo) {
	                            evt.modifyEventCause(_this.modifyEventTo);
	                            _this.modifyEventTo = null;
	                        }
	                    });
	                });
	            }
	        });
	    };
	    Omnibox.prototype.searchAsYouType = function (forceExecuteQuery) {
	        var _this = this;
	        if (forceExecuteQuery === void 0) { forceExecuteQuery = false; }
	        this.clearSearchAsYouType();
	        if (this.shouldExecuteQuery(true)) {
	            this.searchAsYouTypeTimeout = setTimeout(function () {
	                if (_this.suggestionShouldTriggerQuery() || forceExecuteQuery) {
	                    var suggestions_1 = _.map(_this.lastSuggestions, function (suggestion) { return suggestion.text; });
	                    var index_1 = _.indexOf(suggestions_1, _this.magicBox.getWordCompletion());
	                    _this.triggerNewQuery(true, function () {
	                        _this.usageAnalytics.logSearchAsYouType(AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxAsYouType, _this.buildCustomDataForPartialQueries(index_1, suggestions_1));
	                    });
	                    _this.clearSearchAsYouType();
	                }
	            }, this.options.searchAsYouTypeDelay);
	        }
	    };
	    Omnibox.prototype.isRevealAutoSuggestion = function () {
	        return this.options.enableSearchAsYouType && this.options.enableRevealQuerySuggestAddon;
	    };
	    Omnibox.prototype.shouldExecuteQuery = function (searchAsYouType) {
	        var text = this.getQuery(searchAsYouType);
	        return this.lastQuery != text && text != null;
	    };
	    Omnibox.prototype.suggestionShouldTriggerQuery = function (suggestions) {
	        if (suggestions === void 0) { suggestions = this.lastSuggestions; }
	        if (this.shouldExecuteQuery(true)) {
	            if (suggestions && suggestions[0]) {
	                var suggestion = suggestions[0];
	                // If we have access to a confidence level, return true if we are equal or above the minimum confidence level.
	                if (suggestion && suggestion.executableConfidence != undefined) {
	                    return suggestion.executableConfidence >= MINIMUM_EXECUTABLE_CONFIDENCE;
	                }
	                // If we don't have access to a confidence level, return true only if it "starts with" the content of the search box
	                if (suggestion.text && suggestion.text.indexOf(this.magicBox.getText()) == 0) {
	                    return true;
	                }
	            }
	        }
	        return false;
	    };
	    Omnibox.prototype.clearSearchAsYouType = function () {
	        clearTimeout(this.searchAsYouTypeTimeout);
	        this.searchAsYouTypeTimeout = undefined;
	    };
	    Omnibox.ID = 'Omnibox';
	    /**
	     * The options for the omnibox
	     * @componentOptions
	     */
	    Omnibox.options = {
	        /**
	         * Specifies that suggestions appearing in the omnibox should push the result down, instead of appearing over the results.<br/>
	         * Activate this as well a `SearchAsYouType` + Reveal suggestions for a cool effect!<br/>
	         * Default value is false
	         */
	        inline: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
	        /**
	         * Specifies whether a new query is automatically triggered whenever the user types new text inside the query box.<br/>
	         * Activate this as well a inline + Reveal suggestions for a cool effect!<br/>
	         * The default is `false`.
	         */
	        enableSearchAsYouType: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
	        /**
	         * When search as you type is enabled, specifies the delay in milliseconds before a new query is triggered when the user types new text inside the query box.<br/>
	         * The default value is 2000 milliseconds.
	         */
	        searchAsYouTypeDelay: ComponentOptions_1.ComponentOptions.buildNumberOption({
	            defaultValue: 2000,
	            min: 0,
	            depend: 'enableSearchAsYouType'
	        }),
	        /**
	         * Specifies whether the field addon should be enabled.<br/>
	         * The field addon allows the search box to highlight and complete field syntax.<br/>
	         * Default value is `false`.
	         *
	         * > Example:
	         * > You want to filter on a file type. You start typing @sysf and matching fields are proposed. You select the @sysfiletype suggestion, enter = and the available matching file types are proposed.
	         */
	        enableFieldAddon: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false, depend: 'enableQuerySyntax' }),
	        enableSimpleFieldAddon: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false, depend: 'enableFieldAddon' }),
	        listOfFields: ComponentOptions_1.ComponentOptions.buildFieldsOption({ depend: 'enableFieldAddon' }),
	        /**
	         * Specifies whether the Reveal query suggestions should be enabled.<br/>
	         * This implies that your integration has a proper Reveal integration configured.<br/>
	         * Default value is `false`.
	         */
	        enableRevealQuerySuggestAddon: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false, alias: 'enableTopQueryAddon' }),
	        /**
	         * Specifies whether the query extension addon should be enabled.<br/>
	         * This allows the omnibox to complete the syntax for query extensions.<br/>
	         * Default value is `false`.
	         */
	        enableQueryExtensionAddon: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false, depend: 'enableQuerySyntax' }),
	        /**
	         * Specifies a placeholder for input
	         */
	        placeholder: ComponentOptions_1.ComponentOptions.buildStringOption(),
	        /**
	         * Specifies a timeout before rejecting suggestions in the omnibox.<br/>
	         * Default value is 2000 (2 seconds).
	         */
	        omniboxTimeout: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 2000 })
	    };
	    return Omnibox;
	}(Component_1.Component));
	exports.Omnibox = Omnibox;
	Omnibox.options = _.extend({}, Omnibox.options, Querybox_1.Querybox.options);
	Initialization_1.Initialization.registerAutoCreateComponent(Omnibox);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var OmniboxEvents_1 = __webpack_require__(44);
	var ExternalModulesShim_1 = __webpack_require__(24);
	var FieldAddon = (function () {
	    function FieldAddon(omnibox) {
	        var _this = this;
	        this.omnibox = omnibox;
	        this.cache = {};
	        this.omnibox.bind.on(this.omnibox.element, OmniboxEvents_1.OmniboxEvents.populateOmniboxSuggestions, function (args) {
	            args.suggestions.push(_this.getSuggestion());
	        });
	    }
	    FieldAddon.prototype.getSuggestion = function () {
	        var _this = this;
	        var hash = this.getHash();
	        if (hash == null) {
	            return null;
	        }
	        var hashString = this.hashToString(hash);
	        if (this.cache[hashString] != null) {
	            return this.hashValueToSuggestion(hash, this.cache[hashString]);
	        }
	        var values;
	        if (hash.type == 'FieldName') {
	            values = this.fieldNames(hash.current);
	        }
	        if (hash.type == 'FieldValue') {
	            values = this.fieldValues(hash.field, hash.current);
	        }
	        if (hash.type == 'SimpleFieldName') {
	            values = this.simpleFieldNames(hash.current);
	        }
	        this.cache[hashString] = values;
	        values.catch(function () {
	            delete _this.cache[hashString];
	        });
	        return this.hashValueToSuggestion(hash, values);
	    };
	    FieldAddon.prototype.getHash = function () {
	        var fieldName = _.last(this.omnibox.resultAtCursor('FieldName'));
	        if (fieldName != null) {
	            fieldName = fieldName.findParent('Field') || fieldName;
	            var currentField = fieldName.toString();
	            var before = fieldName.before();
	            var after = fieldName.after();
	            return { type: 'FieldName', current: currentField, before: before, after: after };
	        }
	        var fieldValue = _.last(this.omnibox.resultAtCursor('FieldValue'));
	        if (fieldValue) {
	            var fieldQuery = fieldValue.findParent('FieldQuery') || (this.omnibox.options.enableSimpleFieldAddon && fieldValue.findParent('FieldSimpleQuery'));
	            if (fieldQuery) {
	                var field = fieldQuery.find('FieldName').toString();
	                if (this.omnibox.options.fieldAlias) {
	                    if (field in this.omnibox.options.fieldAlias) {
	                        field = this.omnibox.options.fieldAlias[field];
	                    }
	                }
	                var value = fieldValue.toString();
	                var before = fieldValue.before();
	                var after = fieldValue.after();
	                return { type: 'FieldValue', field: field, current: value, before: before, after: after };
	            }
	        }
	        if (this.omnibox.options.enableSimpleFieldAddon) {
	            var word = _.last(this.omnibox.resultAtCursor('Word'));
	            if (word != null) {
	                var currentField = word.toString();
	                var before = word.before();
	                var after = word.after();
	                return { type: 'SimpleFieldName', current: currentField, before: before, after: after };
	            }
	        }
	    };
	    FieldAddon.prototype.hashToString = function (hash) {
	        if (hash == null) {
	            return null;
	        }
	        return hash.type + hash.current + (hash.field || '');
	    };
	    FieldAddon.prototype.hashValueToSuggestion = function (hash, promise) {
	        return promise.then(function (values) {
	            var suggestions = _.map(values, function (value, i) {
	                return {
	                    text: hash.before + (hash.current.toLowerCase().indexOf(value.toLowerCase()) == 0 ? hash.current + value.substr(hash.current.length) : value) + hash.after,
	                    html: ExternalModulesShim_1.MagicBox.Utils.highlightText(value, hash.current, true),
	                    index: FieldAddon.INDEX - i / values.length
	                };
	            });
	            return suggestions;
	        });
	    };
	    FieldAddon.prototype.getFields = function () {
	        var _this = this;
	        if (this.fields == null) {
	            this.fields = new Promise(function (resolve, reject) {
	                if (_this.omnibox.options.listOfFields != null) {
	                    resolve(_this.omnibox.options.listOfFields);
	                }
	                else {
	                    var promise = _this.omnibox.queryController.getEndpoint().listFields();
	                    promise.then(function (fieldDescriptions) {
	                        var fieldNames = _.chain(fieldDescriptions)
	                            .filter(function (fieldDescription) { return fieldDescription.includeInQuery && fieldDescription.groupByField; })
	                            .map(function (fieldDescription) { return fieldDescription.name.substr(1); })
	                            .value();
	                        resolve(fieldNames);
	                    }).catch(function () {
	                        reject();
	                    });
	                }
	            });
	        }
	        return this.fields;
	    };
	    FieldAddon.prototype.fieldNames = function (current) {
	        var withAt = current.length > 0 && current[0] == '@';
	        var fieldName = withAt ? current.substr(1) : current;
	        var fieldNameLC = fieldName.toLowerCase();
	        return this.getFields().then(function (fields) {
	            var matchFields = _.chain(fields)
	                .map(function (field) {
	                return {
	                    index: field.toLowerCase().indexOf(fieldNameLC),
	                    field: withAt ? field : '@' + field
	                };
	            })
	                .filter(function (field) {
	                return field.index != -1 && field.field.length > current.length;
	            })
	                .sortBy('index')
	                .map(function (field) { return field.field; })
	                .value();
	            matchFields = _.first(matchFields, 5);
	            return matchFields;
	        });
	    };
	    FieldAddon.prototype.fieldValues = function (field, current) {
	        return this.omnibox.queryController.getEndpoint().listFieldValues({
	            pattern: '.*' + current + '.*',
	            patternType: 'RegularExpression',
	            sortCriteria: 'occurrences',
	            field: '@' + field,
	            maximumNumberOfValues: 5
	        }).then(function (values) {
	            return _.chain(values)
	                .map(function (value) {
	                return {
	                    index: value.value.toLowerCase().indexOf(current),
	                    value: value.value
	                };
	            })
	                .filter(function (value) {
	                return value.value.length > current.length;
	            })
	                .sortBy('index')
	                .map(function (value) {
	                return value.value.replace(/ /g, '\u00A0');
	            })
	                .value();
	        });
	    };
	    FieldAddon.prototype.simpleFieldNames = function (current) {
	        var fieldName = current;
	        var fieldNameLC = fieldName.toLowerCase();
	        return this.getFields().then(function (fields) {
	            var matchFields = _.chain(fields)
	                .map(function (field) {
	                return {
	                    index: field.toLowerCase().indexOf(fieldNameLC),
	                    field: field + ':'
	                };
	            })
	                .filter(function (field) {
	                return field.index != -1 && field.field.length > current.length;
	            })
	                .sortBy('index')
	                .map(function (field) { return field.field; })
	                .value();
	            matchFields = _.first(matchFields, 5);
	            return matchFields;
	        });
	    };
	    FieldAddon.INDEX = 64;
	    return FieldAddon;
	}());
	exports.FieldAddon = FieldAddon;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	///<reference path='Omnibox.ts'/>
	var OmniboxEvents_1 = __webpack_require__(44);
	var ExternalModulesShim_1 = __webpack_require__(24);
	var QueryExtensionAddon = (function () {
	    function QueryExtensionAddon(omnibox) {
	        var _this = this;
	        this.omnibox = omnibox;
	        this.cache = {};
	        this.omnibox.bind.on(this.omnibox.element, OmniboxEvents_1.OmniboxEvents.populateOmniboxSuggestions, function (args) {
	            args.suggestions.push(_this.getSuggestion());
	        });
	    }
	    QueryExtensionAddon.prototype.getSuggestion = function () {
	        var _this = this;
	        var hash = this.getHash(this.omnibox.magicBox);
	        if (hash == null) {
	            return null;
	        }
	        var hashString = this.hashToString(hash);
	        if (this.cache[hashString] != null) {
	            return this.hashValueToSuggestion(hash, this.cache[hashString]);
	        }
	        var values = (hash.type == 'QueryExtensionName' ? this.names(hash.current) : this.attributeNames(hash.name, hash.current, hash.used));
	        this.cache[hashString] = values;
	        values.catch(function () {
	            delete _this.cache[hashString];
	        });
	        return this.hashValueToSuggestion(hash, values);
	    };
	    QueryExtensionAddon.prototype.getHash = function (magicBox) {
	        var queryExtension = _.last(magicBox.resultAtCursor('QueryExtension'));
	        if (queryExtension != null) {
	            var queryExtensionArgumentResults = queryExtension.findAll('QueryExtensionArgument');
	            var current = _.last(magicBox.resultAtCursor('QueryExtensionName'));
	            if (current != null) {
	                return {
	                    type: 'QueryExtensionName',
	                    current: current.toString(),
	                    before: current.before(),
	                    after: current.after()
	                };
	            }
	            current = _.last(magicBox.resultAtCursor('QueryExtensionArgumentName'));
	            if (current != null) {
	                var used = _.chain(queryExtensionArgumentResults)
	                    .map(function (result) {
	                    var name = result.find('QueryExtensionArgumentName');
	                    return name && name.toString();
	                })
	                    .compact()
	                    .value();
	                var name = queryExtension.find('QueryExtensionName').toString();
	                return {
	                    type: 'QueryExtensionArgumentName',
	                    current: current.toString(),
	                    before: current.before(),
	                    after: current.after(),
	                    name: name,
	                    used: used
	                };
	            }
	        }
	        return null;
	    };
	    QueryExtensionAddon.prototype.hashToString = function (hash) {
	        if (hash == null) {
	            return null;
	        }
	        return [hash.type, hash.current, (hash.name || ''), (hash.used ? hash.used.join() : '')].join();
	    };
	    QueryExtensionAddon.prototype.hashValueToSuggestion = function (hash, promise) {
	        return promise.then(function (values) {
	            var suggestions = _.map(values, function (value, i) {
	                return {
	                    html: ExternalModulesShim_1.MagicBox.Utils.highlightText(value, hash.current, true),
	                    text: hash.before + value + hash.after,
	                    index: QueryExtensionAddon.INDEX - i / values.length
	                };
	            });
	            return suggestions;
	        });
	    };
	    QueryExtensionAddon.prototype.getExtensions = function () {
	        if (this.extensions == null) {
	            this.extensions = this.omnibox.queryController.getEndpoint().extensions();
	        }
	        return this.extensions;
	    };
	    QueryExtensionAddon.prototype.names = function (current) {
	        var extensionName = current.toLowerCase();
	        return this.getExtensions().then(function (extensions) {
	            var matchExtensions = _.chain(extensions)
	                .map(function (extension) {
	                return {
	                    index: extension.name.toLowerCase().indexOf(extensionName),
	                    extension: extension.name
	                };
	            })
	                .filter(function (extension) {
	                return extension.index != -1 && extension.extension.length > extensionName.length;
	            })
	                .sortBy('index')
	                .pluck('extension')
	                .value();
	            matchExtensions = _.first(matchExtensions, 5);
	            return matchExtensions;
	        });
	    };
	    QueryExtensionAddon.prototype.attributeNames = function (name, current, used) {
	        return this.getExtensions().then(function (extensions) {
	            var extension = _.find(extensions, function (extension) { return extension.name == name; });
	            if (extension == null) {
	                return [];
	            }
	            else {
	                return _.filter(_.difference(extension.argumentNames, used), function (argumentName) { return argumentName.indexOf(current) == 0; });
	            }
	        });
	    };
	    QueryExtensionAddon.prototype.hash = function () {
	        return;
	    };
	    QueryExtensionAddon.INDEX = 62;
	    return QueryExtensionAddon;
	}());
	exports.QueryExtensionAddon = QueryExtensionAddon;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Dom_1 = __webpack_require__(56);
	var ComponentOptionsModel_1 = __webpack_require__(90);
	var OmniboxEvents_1 = __webpack_require__(44);
	var StringUtils_1 = __webpack_require__(60);
	var RevealQuerySuggestAddon = (function () {
	    function RevealQuerySuggestAddon(omnibox) {
	        var _this = this;
	        this.omnibox = omnibox;
	        this.cache = {};
	        Dom_1.$$(this.omnibox.element).on(OmniboxEvents_1.OmniboxEvents.populateOmniboxSuggestions, function (e, args) {
	            args.suggestions.push(_this.getSuggestion());
	        });
	    }
	    RevealQuerySuggestAddon.suggestiontHtml = function (suggestion) {
	        return suggestion.highlighted.replace(/\[(.*?)\]|\{(.*?)\}|\((.*?)\)/g, function (part, notMatched, matched, corrected) {
	            var className = '';
	            if (matched) {
	                className = 'coveo-omnibox-hightlight';
	            }
	            if (corrected) {
	                className = 'coveo-omnibox-hightlight2';
	            }
	            return RevealQuerySuggestAddon.suggestiontHtmlTemplate({
	                className: className,
	                text: notMatched || matched || corrected
	            });
	        });
	    };
	    RevealQuerySuggestAddon.isPartialMatch = function (suggestion) {
	        // groups : 1=notMatched, 2=matched, 3=corrected
	        var parts = StringUtils_1.StringUtils.match(suggestion.highlighted, /\[(.*?)\]|\{(.*?)\}|\((.*?)\)/g);
	        var firstFail = _.find(parts, function (part) { return part[1] != null; });
	        // if no fail found, this is a partial or a full match
	        if (firstFail == null) {
	            return true;
	        }
	        // if all right parts are notMatched, the right parts is autocomplete
	        return _.every(_.last(parts, _.indexOf(parts, firstFail) - parts.length), function (part) { return part[1] != null; });
	    };
	    RevealQuerySuggestAddon.prototype.getSuggestion = function () {
	        var _this = this;
	        var text = this.omnibox.magicBox.getText();
	        if (text.length == 0) {
	            return null;
	        }
	        if (this.cache[text] != null) {
	            return this.cache[text];
	        }
	        var promise = this.getRevealQuerySuggest(text);
	        this.cache[text] = promise;
	        promise.catch(function () {
	            delete _this.cache[text];
	        });
	        return this.cache[text];
	    };
	    RevealQuerySuggestAddon.prototype.getRevealQuerySuggest = function (text) {
	        var payload = { q: text }, language = String['locale'], searchHub = this.omnibox.getBindings().componentOptionsModel.get(ComponentOptionsModel_1.ComponentOptionsModel.attributesEnum.searchHub), pipeline = this.omnibox.getBindings().searchInterface.options.pipeline;
	        if (language) {
	            payload.language = language;
	        }
	        if (searchHub) {
	            payload.searchHub = searchHub;
	        }
	        if (pipeline) {
	            payload.pipeline = pipeline;
	        }
	        return this.omnibox.queryController.getEndpoint()
	            .getRevealQuerySuggest(payload)
	            .then(function (result) {
	            var completions = result.completions;
	            var results = _.map(completions, function (completion, i) {
	                return {
	                    html: RevealQuerySuggestAddon.suggestiontHtml(completion),
	                    text: completion.expression,
	                    index: RevealQuerySuggestAddon.INDEX - i / completions.length,
	                    partial: RevealQuerySuggestAddon.isPartialMatch(completion),
	                    executableConfidence: completion.executableConfidence
	                };
	            });
	            return results;
	        });
	    };
	    RevealQuerySuggestAddon.INDEX = 60;
	    RevealQuerySuggestAddon.suggestiontHtmlTemplate = _.template('<span<%= className? \' class="\'+className+\'"\':\'\' %>><%- text %></span>');
	    return RevealQuerySuggestAddon;
	}());
	exports.RevealQuerySuggestAddon = RevealQuerySuggestAddon;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var OmniboxEvents_1 = __webpack_require__(44);
	var Dom_1 = __webpack_require__(56);
	var Utils_1 = __webpack_require__(17);
	var OldOmniboxAddon = (function () {
	    function OldOmniboxAddon(omnibox) {
	        var _this = this;
	        this.omnibox = omnibox;
	        this.omnibox.bind.on(this.omnibox.element, OmniboxEvents_1.OmniboxEvents.populateOmniboxSuggestions, function (args) {
	            _.each(_this.getSuggestion(), function (suggestion) {
	                args.suggestions.push(suggestion);
	            });
	        });
	    }
	    OldOmniboxAddon.prototype.getSuggestion = function () {
	        var text = this.omnibox.magicBox.getText();
	        if (text.length == 0) {
	            return null;
	        }
	        if (this.lastQuery == text) {
	            return this.lastSuggestions;
	        }
	        this.lastQuery = text;
	        var eventArgs = this.buildPopulateOmniboxEventArgs();
	        Dom_1.$$(this.omnibox.element).trigger(OmniboxEvents_1.OmniboxEvents.populateOmnibox, eventArgs);
	        return this.lastSuggestions = this.rowsToSuggestions(eventArgs.rows);
	    };
	    OldOmniboxAddon.prototype.getCurrentQueryExpression = function () {
	        var cursorPos = this.omnibox.getCursor();
	        var value = this.omnibox.getText();
	        var length = value.length;
	        var start = cursorPos;
	        var end = cursorPos;
	        if (value[start] == ' ') {
	            start--;
	        }
	        while (start > 0 && value[start] != ' ') {
	            start--;
	        }
	        while (end < length && value[end] != ' ') {
	            end++;
	        }
	        return value.substring(start, end);
	    };
	    OldOmniboxAddon.prototype.getRegexToSearch = function (strValue) {
	        if (strValue == null) {
	            strValue = this.omnibox.getText();
	        }
	        return new RegExp(Utils_1.Utils.escapeRegexCharacter(strValue), 'i');
	    };
	    OldOmniboxAddon.prototype.getQueryExpressionBreakDown = function () {
	        var _this = this;
	        var ret = [];
	        var queryWords = this.omnibox.getText().split(' ');
	        _.each(queryWords, function (word) {
	            ret.push({
	                word: word,
	                regex: _this.getRegexToSearch(word)
	            });
	        });
	        return ret;
	    };
	    OldOmniboxAddon.prototype.replace = function (searchValue, newValue) {
	        this.omnibox.setText(this.omnibox.getText().replace(searchValue, newValue));
	    };
	    OldOmniboxAddon.prototype.clearCurrentExpression = function () {
	        this.replace(this.getCurrentQueryExpression(), '');
	    };
	    OldOmniboxAddon.prototype.insertAt = function (at, toInsert) {
	        var oldValue = this.omnibox.getText();
	        var newValue = [oldValue.slice(0, at), toInsert, oldValue.slice(at)].join('');
	        this.omnibox.setText(newValue);
	    };
	    OldOmniboxAddon.prototype.replaceCurrentExpression = function (newValue) {
	        this.replace(this.getCurrentQueryExpression(), newValue);
	    };
	    OldOmniboxAddon.prototype.buildPopulateOmniboxEventArgs = function () {
	        var _this = this;
	        var currentQueryExpression = this.getCurrentQueryExpression();
	        var ret = {
	            rows: [],
	            completeQueryExpression: {
	                word: this.omnibox.getText(),
	                regex: this.getRegexToSearch()
	            },
	            currentQueryExpression: {
	                word: currentQueryExpression,
	                regex: this.getRegexToSearch(currentQueryExpression)
	            },
	            allQueryExpressions: this.getQueryExpressionBreakDown(),
	            cursorPosition: this.omnibox.getCursor(),
	            clear: function () {
	                _this.omnibox.clear();
	            },
	            clearCurrentExpression: function () {
	                _this.clearCurrentExpression();
	            },
	            replace: function (searchValue, newValue) {
	                _this.replace(searchValue, newValue);
	            },
	            replaceCurrentExpression: function (newValue) {
	                _this.replaceCurrentExpression(newValue);
	            },
	            insertAt: function (at, toInsert) {
	                _this.insertAt(at, toInsert);
	            },
	            closeOmnibox: function () {
	                _this.omnibox.magicBox.blur();
	            }
	        };
	        return ret;
	    };
	    OldOmniboxAddon.prototype.rowsToSuggestions = function (rows) {
	        return _.map(rows, function (row) {
	            if (!Utils_1.Utils.isNullOrUndefined(row.element)) {
	                return new Promise(function (resolve) {
	                    resolve([{
	                            dom: row.element,
	                            index: row.zIndex
	                        }]);
	                });
	            }
	            else if (!Utils_1.Utils.isNullOrUndefined(row.deferred)) {
	                return new Promise(function (resolve) {
	                    row.deferred.then(function (row) {
	                        if (row.element != null) {
	                            resolve([{
	                                    dom: row.element,
	                                    index: row.zIndex
	                                }]);
	                        }
	                        else {
	                            resolve(null);
	                        }
	                    });
	                });
	            }
	            return null;
	        });
	    };
	    return OldOmniboxAddon;
	}());
	exports.OldOmniboxAddon = OldOmniboxAddon;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var DomUtils_1 = __webpack_require__(58);
	var Dom_1 = __webpack_require__(56);
	var SuggestionForOmnibox = (function () {
	    function SuggestionForOmnibox(structure, onSelect) {
	        this.structure = structure;
	        this.onSelect = onSelect;
	    }
	    SuggestionForOmnibox.prototype.buildOmniboxElement = function (results, args) {
	        var element;
	        if (results.length != 0) {
	            element = Dom_1.$$('div').el;
	            if (this.structure.header) {
	                var header = this.buildElementHeader();
	                element.appendChild(header);
	            }
	            var rows = this.buildRowElements(results, args);
	            _.each(rows, function (row) {
	                element.appendChild(row);
	            });
	        }
	        return element;
	    };
	    SuggestionForOmnibox.prototype.buildElementHeader = function () {
	        return Dom_1.$$('div', undefined, this.structure.header.template({
	            headerTitle: this.structure.header.title
	        })).el;
	    };
	    SuggestionForOmnibox.prototype.buildRowElements = function (results, args) {
	        var _this = this;
	        var ret = [];
	        _.each(results, function (result) {
	            var row = Dom_1.$$('div', undefined, _this.structure.row({
	                rawValue: result.value,
	                data: DomUtils_1.DomUtils.highlightElement(result.value, args.completeQueryExpression.word)
	            })).el;
	            Dom_1.$$(row).on('click', function () {
	                _this.onSelect.call(_this, result.value, args);
	            });
	            Dom_1.$$(row).on('keyboardSelect', function () {
	                _this.onSelect.call(_this, result.value, args);
	            });
	            ret.push(row);
	        });
	        return ret;
	    };
	    return SuggestionForOmnibox;
	}());
	exports.SuggestionForOmnibox = SuggestionForOmnibox;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SuggestionForOmnibox_1 = __webpack_require__(220);
	var ComponentOptions_1 = __webpack_require__(97);
	var Component_1 = __webpack_require__(95);
	var Assert_1 = __webpack_require__(16);
	var OmniboxEvents_1 = __webpack_require__(44);
	var QueryEvents_1 = __webpack_require__(46);
	var Strings_1 = __webpack_require__(33);
	var QueryStateModel_1 = __webpack_require__(89);
	var AnalyticsActionListMeta_1 = __webpack_require__(109);
	var Initialization_1 = __webpack_require__(94);
	var Dom_1 = __webpack_require__(56);
	/**
	 * This component is used to provide query suggestions based on the most commonly logged queries by a Coveo Analytics service.
	 * In order to provide relevant suggestions, they are shown in order of successful document views: thus, queries resulting in no clicks from users or that require refinements are not suggested if better options exist.
	 * These suggestions appear in the Omnibox Component. This component is thus highly related to the {@link Analytics} Component.
	 * While a user is typing in a query box, he will be able to see and select the most commonly used queries.
	 */
	var AnalyticsSuggestions = (function (_super) {
	    __extends(AnalyticsSuggestions, _super);
	    function AnalyticsSuggestions(element, options, bindings) {
	        var _this = this;
	        _super.call(this, element, AnalyticsSuggestions.ID, bindings);
	        this.options = options;
	        this.partialQueries = [];
	        this.lastSuggestions = [];
	        this.resultsToBuildWith = [];
	        if (this.options && 'omniboxSuggestionOptions' in this.options) {
	            this.options = _.extend(this.options, this.options['omniboxSuggestionOptions']);
	        }
	        this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, AnalyticsSuggestions, this.options);
	        var rowTemplate = _.template("<div class='magic-box-suggestion coveo-omnibox-selectable coveo-top-analytics-suggestion-row'><%= data %></div>");
	        this.options.onSelect = this.options.onSelect || this.onRowSelection;
	        var suggestionStructure;
	        if (this.searchInterface.isNewDesign()) {
	            suggestionStructure = {
	                row: rowTemplate
	            };
	        }
	        else {
	            var headerTemplate = _.template("<div class='coveo-top-analytics-suggestion-header'><span class='coveo-icon-top-analytics'></span><span class='coveo-caption'><%= headerTitle %></span></div>");
	            suggestionStructure = {
	                header: { template: headerTemplate, title: this.options.headerTitle },
	                row: rowTemplate
	            };
	        }
	        this.suggestionForOmnibox = new SuggestionForOmnibox_1.SuggestionForOmnibox(suggestionStructure, function (value, args) {
	            _this.options.onSelect.call(_this, value, args);
	        });
	        this.bind.onRootElement(OmniboxEvents_1.OmniboxEvents.populateOmnibox, function (args) { return _this.handlePopulateOmnibox(args); });
	        this.bind.onRootElement(QueryEvents_1.QueryEvents.querySuccess, function () { return _this.partialQueries = []; });
	    }
	    AnalyticsSuggestions.prototype.selectSuggestion = function (suggestion) {
	        if (this.currentlyDisplayedSuggestions) {
	            if (isNaN(suggestion)) {
	                if (this.currentlyDisplayedSuggestions[suggestion]) {
	                    Dom_1.$$(this.currentlyDisplayedSuggestions[suggestion].element).trigger('click');
	                }
	            }
	            else {
	                var currentlySuggested = _.findWhere(this.currentlyDisplayedSuggestions, { pos: suggestion });
	                if (currentlySuggested) {
	                    Dom_1.$$(currentlySuggested.element).trigger('click');
	                }
	            }
	        }
	    };
	    AnalyticsSuggestions.prototype.handlePopulateOmnibox = function (args) {
	        var _this = this;
	        Assert_1.Assert.exists(args);
	        var promise = new Promise(function (resolve, reject) {
	            var searchPromise = _this.usageAnalytics.getTopQueries({
	                pageSize: _this.options.numberOfSuggestions,
	                queryText: args.completeQueryExpression.word
	            });
	            searchPromise.then(function (results) {
	                _this.resultsToBuildWith = _.map(results, function (result) {
	                    return {
	                        value: result
	                    };
	                });
	                _this.lastSuggestions = results;
	                if (!_.isEmpty(_this.resultsToBuildWith) && args.completeQueryExpression.word != '') {
	                    _this.partialQueries.push(args.completeQueryExpression.word);
	                }
	                var element = _this.suggestionForOmnibox.buildOmniboxElement(_this.resultsToBuildWith, args);
	                _this.currentlyDisplayedSuggestions = {};
	                _.map(Dom_1.$$(element).findAll('.coveo-omnibox-selectable'), function (selectable, i) {
	                    _this.currentlyDisplayedSuggestions[Dom_1.$$(selectable).text()] = {
	                        element: selectable,
	                        pos: i
	                    };
	                });
	                resolve({
	                    element: element,
	                    zIndex: _this.options.omniboxZIndex
	                });
	            });
	            searchPromise.catch(function () {
	                resolve({
	                    element: undefined
	                });
	            });
	        });
	        args.rows.push({ deferred: promise });
	    };
	    AnalyticsSuggestions.prototype.onRowSelection = function (value, args) {
	        args.clear();
	        args.closeOmnibox();
	        this.queryStateModel.set(QueryStateModel_1.QueryStateModel.attributesEnum.q, value);
	        this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.omniboxAnalytics, {
	            partialQueries: this.cleanCustomData(this.partialQueries),
	            suggestionRanking: _.indexOf(_.pluck(this.resultsToBuildWith, 'value'), value),
	            suggestions: this.cleanCustomData(this.lastSuggestions),
	            partialQuery: args.completeQueryExpression.word
	        });
	        this.queryController.executeQuery();
	    };
	    AnalyticsSuggestions.prototype.cleanCustomData = function (toClean, rejectLength) {
	        if (rejectLength === void 0) { rejectLength = 256; }
	        // Filter out only consecutive values that are the identical
	        toClean = _.filter(toClean, function (partial, pos, array) {
	            return pos === 0 || partial !== array[pos - 1];
	        });
	        // Custom dimensions cannot be an array in analytics service: Send a string joined by ; instead.
	        // Need to replace ;
	        toClean = _.map(toClean, function (partial) {
	            return partial.replace(/;/g, '');
	        });
	        // Reduce right to get the last X words that adds to less then rejectLength
	        var reducedToRejectLengthOrLess = [];
	        _.reduceRight(toClean, function (memo, partial) {
	            var totalSoFar = memo + partial.length;
	            if (totalSoFar <= rejectLength) {
	                reducedToRejectLengthOrLess.push(partial);
	            }
	            return totalSoFar;
	        }, 0);
	        toClean = reducedToRejectLengthOrLess.reverse();
	        var ret = toClean.join(';');
	        // analytics service can store max 256 char in a custom event
	        // if we're over that, call cleanup again with an arbitrary 10 less char accepted
	        if (ret.length >= 256) {
	            return this.cleanCustomData(toClean, rejectLength - 10);
	        }
	        return toClean.join(';');
	    };
	    AnalyticsSuggestions.ID = 'AnalyticsSuggestions';
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    AnalyticsSuggestions.options = {
	        /**
	         * The index at which the suggestions should render in the omnibox. Higher value = placed first.<br/>
	         * The default value is `52`.
	         */
	        omniboxZIndex: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 52, min: 0 }),
	        /**
	         * Specifies the title in the Omnibox for this group of suggestions. This option is not available when using the Lightning Friendly Theme, which is the default design.
	         */
	        headerTitle: ComponentOptions_1.ComponentOptions.buildLocalizedStringOption({ defaultValue: Strings_1.l('SuggestedQueries') }),
	        /**
	         * The number of suggestions that should be requested and displayed in the omnibox.<br/>
	         * The default value is `5`.
	         */
	        numberOfSuggestions: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 5, min: 1 })
	    };
	    return AnalyticsSuggestions;
	}(Component_1.Component));
	exports.AnalyticsSuggestions = AnalyticsSuggestions;
	Initialization_1.Initialization.registerAutoCreateComponent(AnalyticsSuggestions);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SuggestionForOmnibox_1 = __webpack_require__(220);
	var Component_1 = __webpack_require__(95);
	var ComponentOptions_1 = __webpack_require__(97);
	var Assert_1 = __webpack_require__(16);
	var Utils_1 = __webpack_require__(17);
	var OmniboxEvents_1 = __webpack_require__(44);
	var QueryStateModel_1 = __webpack_require__(89);
	var Initialization_1 = __webpack_require__(94);
	var AnalyticsActionListMeta_1 = __webpack_require__(109);
	var Strings_1 = __webpack_require__(33);
	var Dom_1 = __webpack_require__(56);
	/**
	 * This component provides query suggestions based on a particular facet field.
	 * For example, this can be used to provide auto-complete suggestions when you type in document titles.
	 */
	var FieldSuggestions = (function (_super) {
	    __extends(FieldSuggestions, _super);
	    /**
	     * Create a new `FieldSuggestions` component
	     * @param element
	     * @param options
	     * @param bindings
	     */
	    function FieldSuggestions(element, options, bindings) {
	        var _this = this;
	        _super.call(this, element, FieldSuggestions.ID, bindings);
	        this.options = options;
	        if (this.options && 'omniboxSuggestionOptions' in this.options) {
	            this.options = _.extend(this.options, this.options['omniboxSuggestionOptions']);
	        }
	        this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, FieldSuggestions, options);
	        Assert_1.Assert.check(Utils_1.Utils.isCoveoField(this.options.field), this.options.field + ' is not a valid field');
	        this.options.onSelect = this.options.onSelect || this.onRowSelection;
	        var rowTemplate = _.template("<div class='magic-box-suggestion coveo-omnibox-selectable coveo-top-field-suggestion-row'><%= data %></div>");
	        var suggestionStructure;
	        if (this.searchInterface.isNewDesign()) {
	            suggestionStructure = {
	                row: rowTemplate
	            };
	        }
	        else {
	            var headerTemplate = _.template("<div class='coveo-top-field-suggestion-header'><span class='coveo-icon-top-field'></span><span class='coveo-caption'><%= headerTitle %></span></div>");
	            suggestionStructure = {
	                header: { template: headerTemplate, title: this.options.headerTitle },
	                row: rowTemplate
	            };
	        }
	        this.suggestionForOmnibox = new SuggestionForOmnibox_1.SuggestionForOmnibox(suggestionStructure, function (value, args) {
	            _this.options.onSelect.call(_this, value, args);
	        });
	        this.bind.onRootElement(OmniboxEvents_1.OmniboxEvents.populateOmnibox, function (args) { return _this.handlePopulateOmnibox(args); });
	    }
	    FieldSuggestions.prototype.selectSuggestion = function (suggestion) {
	        if (this.currentlyDisplayedSuggestions) {
	            if (isNaN(suggestion)) {
	                if (this.currentlyDisplayedSuggestions[suggestion]) {
	                    Dom_1.$$(this.currentlyDisplayedSuggestions[suggestion].element).trigger('click');
	                }
	            }
	            else {
	                var currentlySuggested = _.findWhere(this.currentlyDisplayedSuggestions, { pos: suggestion });
	                if (currentlySuggested) {
	                    Dom_1.$$(currentlySuggested.element).trigger('click');
	                }
	            }
	        }
	    };
	    FieldSuggestions.prototype.handlePopulateOmnibox = function (args) {
	        var _this = this;
	        Assert_1.Assert.exists(args);
	        var valueToSearch = args.completeQueryExpression.word;
	        var promise = new Promise(function (resolve) {
	            _this.queryController.getEndpoint().listFieldValues(_this.buildListFieldValueRequest(valueToSearch)).then(function (results) {
	                var element = _this.suggestionForOmnibox.buildOmniboxElement(results, args);
	                _this.currentlyDisplayedSuggestions = {};
	                _.map(Dom_1.$$(element).findAll('.coveo-omnibox-selectable'), function (selectable, i) {
	                    _this.currentlyDisplayedSuggestions[Dom_1.$$(selectable).text()] = {
	                        element: selectable,
	                        pos: i
	                    };
	                });
	                resolve({
	                    element: element,
	                    zIndex: _this.options.omniboxZIndex
	                });
	            }).catch(function () {
	                resolve({
	                    element: undefined
	                });
	            });
	        });
	        args.rows.push({
	            deferred: promise
	        });
	    };
	    FieldSuggestions.prototype.onRowSelection = function (value, args) {
	        args.clear();
	        args.closeOmnibox();
	        this.queryStateModel.set(QueryStateModel_1.QueryStateModel.attributesEnum.q, value);
	        this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.omniboxField, {});
	        this.queryController.executeQuery();
	    };
	    FieldSuggestions.prototype.buildListFieldValueRequest = function (valueToSearch) {
	        return {
	            field: this.options.field,
	            ignoreAccents: true,
	            sortCriteria: 'occurrences',
	            maximumNumberOfValues: this.options.numberOfSuggestions,
	            patternType: 'Wildcards',
	            pattern: '*' + valueToSearch + '*',
	            queryOverride: this.options.queryOverride
	        };
	    };
	    FieldSuggestions.ID = 'FieldSuggestions';
	    /**
	     * @componentOptions
	     */
	    FieldSuggestions.options = {
	        /**
	         * Specifies the field from which suggestions are provided.<br/>
	         * This is a required option.
	         */
	        field: ComponentOptions_1.ComponentOptions.buildFieldOption({ required: true }),
	        /**
	         * Specifies a query override (any query expression) which should be applied when retrieving suggestions.
	         */
	        queryOverride: ComponentOptions_1.ComponentOptions.buildStringOption({ defaultValue: '' }),
	        /**
	         * Specifies the position at which the suggestions should render when there are multiple suggestions providers. (eg : {@link Facet} or {@link AnalyticsSuggestions}).<br/>
	         * The default value is 51.
	         */
	        omniboxZIndex: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 51, min: 0 }),
	        /**
	         * Specifies the title in the Omnibox for this group of suggestions. This option is not available when using the Lightning Friendly Theme, which is the default design.
	         */
	        headerTitle: ComponentOptions_1.ComponentOptions.buildLocalizedStringOption({ defaultValue: Strings_1.l('SuggestedResults') }),
	        /**
	         * Specifies the number of suggestions that should be rendered in the omnibox.<br/>
	         * Default value is 5.
	         */
	        numberOfSuggestions: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 5, min: 1 }),
	        /**
	         * The event handler function to execute when a value is selected in the Omnibox. By default, the query box text is replaced by what was selected and a new query is executed. You can however replace this default text by providing a callback function to execute when the value is selected.
	         * For example:
	         *
	         * ```
	         * Coveo.init(document.querySelector('#search'), {
	         *    FieldSuggestions : {
	         *      omniboxSuggestionOptions : {
	         *        onSelect : function(valueSelected, populateOmniBoxEventArgs){
	         *          // Do something special when a value is selected.
	         *          // You receive the selected value as the first argument, and the Omnibox object as the second parameter.
	         *        }
	         *      }
	         *    }
	         * })
	         *
	         * // OR using the jQuery extension
	         *
	         * $('#mySearch').coveo('init', {
	         *    FieldSuggestions : {
	         *      omniboxSuggestionOptions : {
	         *        onSelect : function(valueSelected, populateOmniBoxEventArgs){
	         *          // Do something special when a value is selected.
	         *          // You receive the selected value as the first argument, and the Omnibox object as the second parameter.
	         *        }
	         *      }
	         *    }
	         * })
	         * ```
	         */
	        onSelect: ComponentOptions_1.ComponentOptions.buildCustomOption(function () {
	            return null;
	        })
	    };
	    return FieldSuggestions;
	}(Component_1.Component));
	exports.FieldSuggestions = FieldSuggestions;
	Initialization_1.Initialization.registerAutoCreateComponent(FieldSuggestions);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var CoreHelpers_1 = __webpack_require__(122);
	// Webpack output a library target with a temporary name.
	// This is to allow end user to put CoveoJsSearch.Dependencie.js before or after the main CoveoJsSearch.js, without breaking
	// This code swap the current module to the "real" Coveo variable.
	function swapVar(scope) {
	    if (window['Coveo'] == undefined) {
	        window['Coveo'] = scope;
	    }
	    else {
	        _.each(_.keys(scope), function (k) {
	            window['Coveo'][k] = scope[k];
	        });
	    }
	    CoreHelpers_1.CoreHelpers.exportAllHelpersGlobally(window['Coveo']);
	    if (window['__extends'] == undefined) {
	        var __extends = function (d, b) {
	            for (var p in b) {
	                if (b.hasOwnProperty(p)) {
	                    d[p] = b[p];
	                }
	            }
	            function __() {
	                this.constructor = d;
	            }
	            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	        };
	        window['__extends'] = __extends;
	    }
	}
	exports.swapVar = swapVar;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=CoveoJsSearch.Searchbox.js.map