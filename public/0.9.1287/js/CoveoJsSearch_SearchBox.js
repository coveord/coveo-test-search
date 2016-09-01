/*****************************************************************************
 * @license Copyright (c) 2005-2014, Coveo Solutions Inc.
 *****************************************************************************/
/*****************************************************************************
 * NOTE:
 *
 * We advise against directly modifying this file. Doing so will prevent you
 * from updating to later versions. Also, if you modify this file untold number
 * of kittens will die.
 *
 *****************************************************************************/
var secretFeatureVariable1309 = false; // needed so that tsc doesn't completely eliminates this file
var Coveo;
(function (Coveo) {
    Coveo.version = {
        "lib" : "0.9.1287.102",
        "product": "0.0.0.0",
        "supportedApiVersion": 2
    };
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        function l() {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            return Coveo.L10N.format.apply(this, arguments);
        }
        Ui.l = l;
        ;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
(function () {
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
        "QuickView": "Quick View",
        "ErrorReport": "Error Report",
        "OopsError": "Oops! Something went wrong on the server.",
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
        "GoToFullSearch": "Go to full search",
        "GoToEdition": "Go to edition",
        "RemoveContext": "Remove context",
        "BoxAttachToCase": "Attach to Case",
        "AttachToCase": "Attach to Case",
        "Attach": "Attach",
        "Detach": "Detach",
        "UserActionsNoVisitId": "There's no user actions attached to this case",
        "UserActionsErrorOccured": "An error occured while getting the user's actions",
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
        "objecttype_kbsolution": "Solution",
        "objecttype_kbknowledgearticle": "Knowledge Article",
        "objecttype_kbattachment": "Attachment",
        "sysfiletype_html": "HTML File",
        "sysfiletype_image": "Image",
        "sysfiletype_folder": "Folder",
        "sysfiletype_txt": "Text",
        "sysfiletype_zip": "Zip File",
        "sysfiletype_pdf": "PDF File",
        "sysfiletype_xml": "XML File",
        "sysfiletype_doc": "Word Document",
        "sysfiletype_xls": "Excel Document",
        "sysfiletype_ppt": "PowerPoint Document",
        "sysfiletype_video": "Video",
        "sysfiletype_saleforceuitem": "Salesforce",
        "sysfiletype_exchangemessage": "Message",
        "sysfiletype_exchangeappointment": "Appointment",
        "sysfiletype_exchangenote": "Note",
        "sysfiletype_exchangetask": "Task",
        "sysfiletype_exchangeperson": "Exchange user",
        "sysfiletype_activedirperson": "Active Directory user",
        "sysfiletype_exchangeactivity": "Activity",
        "sysfiletype_exchangecalendarmessage": "Calendar message",
        "sysfiletype_exchangedocument": "Exchange document",
        "sysfiletype_exchangerssfeed": "RSS Feed",
        "sysfiletype_exchangejunkmessage": "Junk email",
        "sysfiletype_exchangeofficecom": "Communications",
        "sysfiletype_lithiummessage": "Message",
        "sysfiletype_lithiumthread": "Thread",
        "sysfiletype_lithiumboard": "Board",
        "sysfiletype_lithiumcategory": "Category",
        "sysfiletype_lithiumcommunity": "Community",
        "sysfiletype_spportal": "Portal",
        "sysfiletype_spsite": "Site",
        "sysfiletype_spuserprofile": "SharePoint User",
        "sysfiletype_sparea": "Area",
        "sysfiletype_spannouncement": "Announcement",
        "sysfiletype_spannouncementlist": "Announcements",
        "sysfiletype_spcontact": "Contact",
        "sysfiletype_spcontactlist": "Contacts",
        "sysfiletype_spcustomlist": "Custom Lists",
        "sysfiletype_spdiscussionboard": "Discussion Board",
        "sysfiletype_spdiscussionboardlist": "Discussion Boards",
        "sysfiletype_spdocumentlibrarylist": "Document Library",
        "sysfiletype_spevent": "Event",
        "sysfiletype_speventlist": "Events",
        "sysfiletype_spformlibrarylist": "Form Library",
        "sysfiletype_spissue": "Issue",
        "sysfiletype_spissuelist": "Issues",
        "sysfiletype_splink": "Link",
        "sysfiletype_splinklist": "Links",
        "sysfiletype_sppicturelibrarylist": "Picture Library",
        "sysfiletype_spsurvey": "Survey",
        "sysfiletype_spsurveylist": "Surveys",
        "sysfiletype_sptask": "Task",
        "sysfiletype_sptasklist": "Tasks",
        "sysfiletype_spagenda": "Agenda",
        "sysfiletype_spagendalist": "Agendas",
        "sysfiletype_spattendee": "Attendee",
        "sysfiletype_spattendeelist": "Attendees",
        "sysfiletype_spcustomgridlist": "Custom Grids",
        "sysfiletype_spdecision": "Decision",
        "sysfiletype_spdecisionlist": "Decisions",
        "sysfiletype_spobjective": "Objective",
        "sysfiletype_spobjectivelist": "Objectives",
        "sysfiletype_sptextbox": "Textbox",
        "sysfiletype_sptextboxlist": "Textbox list",
        "sysfiletype_spthingstobring": "Thing To Bring",
        "sysfiletype_spthingstobringlist": "Things To Bring",
        "sysfiletype_sparealisting": "Area Listing",
        "sysfiletype_spmeetingserie": "Meeting series",
        "sysfiletype_spmeetingserielist": "Meeting Series List",
        "sysfiletype_spsitedirectory": "Site Directory Item",
        "sysfiletype_spsitedirectorylist": "Site Directory",
        "sysfiletype_spdatasource": "Data Source",
        "sysfiletype_spdatasourcelist": "Data Source List",
        "sysfiletype_splisttemplatecataloglist": "List Template Catalog List",
        "sysfiletype_spwebpartcataloglist": "WebPart catalog list",
        "sysfiletype_spwebtemplatecataloglist": "Web Template Catalog List",
        "sysfiletype_spworkspacepagelist": "Workspace Page List",
        "sysfiletype_spunknownlist": "Custom List",
        "sysfiletype_spadministratortask": "Administrator Task",
        "sysfiletype_spadministratortasklist": "Administrator Tasks",
        "sysfiletype_spareadocumentlibrarylist": "Area Document Library",
        "sysfiletype_spblogcategory": "Blog Category",
        "sysfiletype_spblogcategorylist": "Blog Category",
        "sysfiletype_spblogcomment": "Blog Comment",
        "sysfiletype_spblogcommentlist": "Blog Comments",
        "sysfiletype_spblogpost": "Blog Post",
        "sysfiletype_spblogpostlist": "Blog Posts",
        "sysfiletype_spdataconnectionlibrarylist": "Data Connection Library",
        "sysfiletype_spdistributiongroup": "Distribution Group",
        "sysfiletype_spdistributiongrouplist": "Distribution Groups",
        "sysfiletype_spipfslist": "InfoPath Form Servers",
        "sysfiletype_spkeyperformanceindicator": "Key Performance Indicator",
        "sysfiletype_spkeyperformanceindicatorlist": "Key Performance Indicators",
        "sysfiletype_splanguagesandtranslator": "Languages and Translator",
        "sysfiletype_splanguagesandtranslatorlist": "Languages and Translators",
        "sysfiletype_spmasterpagescataloglist": "Master Pages Library",
        "sysfiletype_spnocodeworkflowlibrarylist": "No Code Workflow Library",
        "sysfiletype_spprojecttask": "Project Task",
        "sysfiletype_spprojecttasklist": "Project Tasks",
        "sysfiletype_sppublishingpageslibrarylist": "Page Library",
        "sysfiletype_spreportdocumentlibrarylist": "Report Document Library",
        "sysfiletype_spreportlibrarylist": "Report Library",
        "sysfiletype_spslidelibrarylist": "Slide Library",
        "sysfiletype_sptab": "Tabs",
        "sysfiletype_sptablist": "Tabs List",
        "sysfiletype_sptranslationmanagementlibrarylist": "Translation Management Library",
        "sysfiletype_spuserinformation": "User Information",
        "sysfiletype_spuserinformationlist": "User Information List",
        "sysfiletype_spwikipagelibrarylist": "Wiki Page Library",
        "sysfiletype_spworkflowhistory": "Workflow History",
        "sysfiletype_spworkflowhistorylist": "Workflow Histories",
        "sysfiletype_spworkflowprocess": "Custom Workflow Process",
        "sysfiletype_spworkflowprocesslist": "Custom Workflow Processes",
        "sysfiletype_sppublishingimageslibrarylist": "Publishing Image Library",
        "sysfiletype_spcirculation": "Circulation",
        "sysfiletype_spcirculationlist": "Circulations",
        "sysfiletype_spdashboardslibrarylist": "Dashboard Library",
        "sysfiletype_spdataconnectionforperformancepointlibrarylist": "Data Connection for Performance Point Library",
        "sysfiletype_sphealthreport": "Health Report",
        "sysfiletype_sphealthreportlist": "Health Reports",
        "sysfiletype_sphealthrule": "Health Rule",
        "sysfiletype_sphealthrulelist": "Health Rules",
        "sysfiletype_spimedictionary": "IME Dictionary",
        "sysfiletype_spimedictionarylist": "IME Dictionaries",
        "sysfiletype_spperformancepointcontent": "Performance Point Content",
        "sysfiletype_spperformancepointcontentlist": "Performance Point Contents",
        "sysfiletype_spphonecallmemo": "Phone Call Memo",
        "sysfiletype_spphonecallmemolist": "Phone Call Memos",
        "sysfiletype_sprecordlibrarylist": "Record Library",
        "sysfiletype_spresource": "Resource",
        "sysfiletype_spresourcelist": "Resources",
        "sysfiletype_spprocessdiagramslibrarylist": "Process Diagram Library",
        "sysfiletype_spsitethemeslibrarylist": "Site Theme Library",
        "sysfiletype_spsolutionslibrarylist": "Solution Library",
        "sysfiletype_spwfpublibrarylist": "WFPUB Library",
        "sysfiletype_spwhereabout": "Whereabout",
        "sysfiletype_spwhereaboutlist": "Whereabouts",
        "sysfiletype_spdocumentlink": "Link to a Document",
        "sysfiletype_spdocumentset": "Document Set",
        "sysfiletype_spmicrofeedpost": "Microfeed Post",
        "sysfiletype_spmicrofeedlist": "Microfeed",
        "sysfiletype_splistfolder": "List Folder"
    };
    var locales = String["locales"] || (String["locales"] = {});
    locales["en"] = _.extend({}, locales["en"], dict);
    String["toLocaleString"].call(this, { "en": dict });
    String["locale"] = "en";
    String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture en-US
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */
(function (window, undefined) {
    var Globalize;
    if (typeof window["require"] !== "undefined" && typeof window["exports"] !== "undefined" && typeof window["module"] !== "undefined") {
        // Assume CommonJS
        Globalize = window["require"]("globalize");
    }
    else {
        // Global variable
        Globalize = window.Globalize;
    }
    Globalize.addCultureInfo("en-US", "default", {
        name: "en-US",
        englishName: "English (United States)"
    });
}(this));
var Coveo;
(function (Coveo) {
    var pluralRegex = /<pl>(((?!<\/pl>).)*)<\/pl>/g;
    var singularRegex = /<sn>(((?!<\/sn>).)*)<\/sn>/g;
    Coveo.L10N = {
        format: function (key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var value = key.toLocaleString();
            if (args.length > 0) {
                var last = Coveo._.last(args);
                if (Coveo._.isNumber(last)) {
                    args.pop();
                    value = Coveo.L10N.formatPlSn(value, last);
                }
                for (var arg in args) {
                    value = value.replace("{" + arg + "}", args[arg]);
                }
            }
            return value;
        },
        formatPlSn: function (value, count) {
            if (count > 1) {
                value = value.replace(pluralRegex, '$1').replace(singularRegex, '');
            }
            else {
                value = value.replace(pluralRegex, '').replace(singularRegex, '$1');
            }
            return value;
        }
    };
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
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
                    console.timeEnd("Execution time");
                    console.time("Execution time");
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
    })();
    Coveo.Logger = Logger;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
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
            Assert.check(Coveo.Utils.isUndefined(obj), 'Value should be undefined.');
        };
        Assert.isNotUndefined = function (obj) {
            Assert.check(!Coveo.Utils.isUndefined(obj), 'Value should not be undefined.');
        };
        Assert.isNull = function (obj) {
            Assert.check(Coveo.Utils.isNull(obj), 'Value should be null.');
        };
        Assert.isNotNull = function (obj) {
            Assert.check(!Coveo.Utils.isNull(obj), 'Value should not be null.');
        };
        Assert.exists = function (obj) {
            Assert.check(!Coveo.Utils.isNullOrUndefined(obj), 'Value should not be null or undefined');
        };
        Assert.doesNotExists = function (obj) {
            Assert.check(Coveo.Utils.isNullOrUndefined(obj), 'Value should be null or undefined');
        };
        Assert.isString = function (obj) {
            Assert.check(Coveo._.isString(obj), 'Value should be a string.');
        };
        Assert.stringStartsWith = function (str, start) {
            Assert.isNonEmptyString(str);
            Assert.isNonEmptyString(start);
            Assert.check(str.indexOf(start) == 0, 'Value should start with ' + start);
        };
        Assert.isNonEmptyString = function (str) {
            Assert.check(Coveo.Utils.isNonEmptyString(str), 'Value should be a non-empty string.');
        };
        Assert.isNumber = function (obj) {
            Assert.check(Coveo._.isNumber(obj), 'Value should be a number.');
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
        Assert.logger = new Coveo.Logger('Assert');
        Assert.failureHandler = function (message) {
            Assert.logger.error('Assertion Failed!', message);
            if (window['console'] && console.trace) {
                console.trace();
            }
            if (Coveo.Utils.isNonEmptyString(message)) {
                throw new PreconditionFailedException(message);
            }
            else {
                throw new PreconditionFailedException('Assertion Failed!');
            }
        };
        return Assert;
    })();
    Coveo.Assert = Assert;
    var PreconditionFailedException = (function () {
        function PreconditionFailedException(message) {
            this.message = message;
        }
        PreconditionFailedException.prototype.toString = function () {
            return this.message;
        };
        return PreconditionFailedException;
    })();
    Coveo.PreconditionFailedException = PreconditionFailedException;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    Coveo.$ = jQuery;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    Coveo._ = window["_"];
})(Coveo || (Coveo = {}));
//http://stackoverflow.com/a/2897510
Coveo.$.fn.getCursorPosition = function () {
    var input = this.get(0);
    if (!input)
        return; // No (input) element found
    if ('selectionStart' in input) {
        // Standard-compliant browsers
        return input.selectionStart;
    }
    else if (document.selection) {
        // IE
        input.focus();
        var sel = document.selection.createRange();
        var selLen = document.selection.createRange().text.length;
        sel.moveStart('character', -input.value.length);
        return sel.text.length - selLen;
    }
};
var Coveo;
(function (Coveo) {
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
            Coveo._.defer(function () {
                if (Defer.popOne())
                    Defer.arm();
            });
        };
        Defer.popOne = function () {
            if (Defer.functions.length > 0) {
                var fun = Defer.functions[0];
                Defer.functions = Coveo._.rest(Defer.functions);
                fun();
                return Defer.functions.length > 0;
            }
            else {
                return false;
            }
        };
        Defer.functions = [];
        return Defer;
    })();
    Coveo.Defer = Defer;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
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
    })();
    Coveo.Cache = Cache;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var FastClick = (function () {
        function FastClick(element, handler, distanceThreshold, timeThreshold) {
            if (distanceThreshold === void 0) { distanceThreshold = 10; }
            if (timeThreshold === void 0) { timeThreshold = 500; }
            this.element = element;
            this.handler = handler;
            this.distanceThreshold = distanceThreshold;
            this.timeThreshold = timeThreshold;
            if (element.hasClass(Coveo.Ui.Component.computeCssClassNameForType(Coveo.Ui.SearchInterface.ID))) {
                element.click(handler);
            }
            else {
                this.setTouchHandlers();
                this.preventMouseHandlers();
            }
        }
        FastClick.prototype.setTouchHandlers = function () {
            var _this = this;
            this.element.on("touchstart", function (e) { return _this.handleTouchStart(e); });
            this.element.on("touchmove", function (e) { return _this.handleTouchMove(e); });
        };
        FastClick.prototype.preventMouseHandlers = function () {
            this.element.on("mousedown", function (e) { return e.preventDefault(); });
            this.element.on("mouseup", function (e) { return e.preventDefault(); });
            this.element.on("click", function (e) { return e.preventDefault(); });
        };
        FastClick.prototype.handleTouchStart = function (startEvent) {
            var _this = this;
            // remove by apare because touch is use by the quickview zoom and stopPropagation on the touch is not required
            // startEvent.stopPropagation();
            this.reset();
            this.initStartVariables(startEvent);
            this.startTarget = startEvent.target;
            this.startElement = this.getStartElement();
            this.element.one("touchend", function (endEvent) { return _this.handleTouchEnd(endEvent); });
        };
        FastClick.prototype.handleTouchMove = function (e) {
            this.endX = e["originalEvent"] ? e["originalEvent"]["touches"][0].clientX : 0;
            this.endY = e["originalEvent"] ? e["originalEvent"]["touches"][0].clientY : 0;
            this.moved = true;
        };
        FastClick.prototype.handleTouchEnd = function (endEvent) {
            // remove by apare because touch is use by the quickview zoom and stopPropagation on the touch is not required
            // endEvent.stopPropagation();
            // Android will trigger a click before showCancelingOverlay is called rendering it useless
            // and unfocusing whatever element was selected (bad when you're auto focusing an input)
            this.preventGhostClickIfAndroid(endEvent);
            if (this.mustCallHandler(endEvent)) {
                this.hideIOSKeyboardIfNecessary(endEvent.target);
                if (!this.isGhostClick(endEvent)) {
                    Coveo.MobileUtils.showClickFeedback(this.element, 400);
                }
                /*  Warning, do not remove the following line. It's the only way we found to remove the
                *   300ms delay! It adds a div over the search for 400ms following the touchend event and
                *   this div catches the click after 300ms. */
                Coveo.MobileUtils.showClickCancelingOverlay(400);
                endEvent.clientX = this.startX;
                endEvent.clientY = this.startY;
                this.handler.call(this, endEvent);
            }
        };
        FastClick.prototype.isGhostClick = function (e) {
            return e["originalEvent"] ? false : true;
        };
        FastClick.prototype.initStartVariables = function (startEvent) {
            this.startTime = new Date().getTime();
            this.startX = startEvent["originalEvent"] ? startEvent["originalEvent"]["touches"][0].clientX : 0;
            this.startY = startEvent["originalEvent"] ? startEvent["originalEvent"]["touches"][0].clientY : 0;
            this.endX = this.startX;
            this.endY = this.startY;
        };
        FastClick.prototype.getStartElement = function () {
            return document.elementFromPoint(this.startX, this.startY);
        };
        FastClick.prototype.mustCallHandler = function (endEvent) {
            return !this.scrolled(endEvent) && !this.held();
        };
        FastClick.prototype.scrolled = function (endEvent) {
            var endTarget = endEvent.target;
            var diffX = Math.abs(this.endX - this.startX);
            var diffY = Math.abs(this.endY - this.startY);
            var endElement = document.elementFromPoint(this.endX, this.endY);
            return !((this.startElement == endElement) && (this.startTarget == endTarget) && (!this.moved || (diffX < this.distanceThreshold && diffY < this.distanceThreshold)));
        };
        FastClick.prototype.held = function () {
            this.endTime = new Date().getTime();
            var diffTime = this.endTime - this.startTime;
            return diffTime >= this.timeThreshold;
        };
        FastClick.prototype.reset = function () {
            this.startX = 0;
            this.startY = 0;
            this.endX = 0;
            this.endY = 0;
            this.startTime = 0;
            this.endTime = 0;
            this.moved = false;
        };
        FastClick.prototype.hideIOSKeyboardIfNecessary = function (target) {
            if (Coveo.DeviceUtils.isIos() && !Coveo.$(target).is('input[type=text]') && Coveo.$(document.activeElement).is('input[type=text]')) {
                Coveo.MobileUtils.hideIOSKeyboard(document.activeElement);
            }
        };
        FastClick.prototype.preventGhostClickIfAndroid = function (event) {
            if (Coveo.DeviceUtils.isAndroid()) {
                event.preventDefault();
            }
        };
        return FastClick;
    })();
    Coveo.FastClick = FastClick;
    Coveo.$.fn.fastClick = function (handler) {
        if (handler) {
            if (Coveo.DeviceUtils.isMobileDevice()) {
                var jqueryElement = Coveo.$(this);
                new FastClick(jqueryElement, handler);
                return jqueryElement;
            }
            else {
                // Provide a dummy href if the element is an hyperlink
                this.filter('a').data('href', this.filter('a').attr('href')).attr('href', 'javascript:');
                return this.click(handler);
            }
        }
        else {
            if (Coveo.DeviceUtils.isMobileDevice()) {
                this.trigger('touchstart');
                return this.trigger('touchend');
            }
            else {
                return this.click();
            }
        }
    };
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Utils;
    (function (Utils) {
        function isUndefined(obj) {
            return typeof obj == 'undefined';
        }
        Utils.isUndefined = isUndefined;
        function isNull(obj) {
            return obj === null;
        }
        Utils.isNull = isNull;
        function isNullOrUndefined(obj) {
            return Utils.isUndefined(obj) || Utils.isNull(obj);
        }
        Utils.isNullOrUndefined = isNullOrUndefined;
        function exists(obj) {
            return !Utils.isNullOrUndefined(obj);
        }
        Utils.exists = exists;
        function toNotNullString(str) {
            return Coveo._.isString(str) ? str : "";
        }
        Utils.toNotNullString = toNotNullString;
        function anyTypeToString(value) {
            return value ? value.toString() : '';
        }
        Utils.anyTypeToString = anyTypeToString;
        function isNullOrEmptyString(str) {
            return Utils.isNullOrUndefined(str) || !Utils.isNonEmptyString(str);
        }
        Utils.isNullOrEmptyString = isNullOrEmptyString;
        function isNonEmptyString(str) {
            return Coveo._.isString(str) && str !== '';
        }
        Utils.isNonEmptyString = isNonEmptyString;
        function isEmptyString(str) {
            return !isNonEmptyString(str);
        }
        Utils.isEmptyString = isEmptyString;
        function stringStartsWith(str, startWith) {
            return str.slice(0, startWith.length) == startWith;
        }
        Utils.stringStartsWith = stringStartsWith;
        function isNonEmptyArray(obj) {
            return Coveo._.isArray(obj) && obj.length > 0;
        }
        Utils.isNonEmptyArray = isNonEmptyArray;
        function isEmptyArray(obj) {
            return !Utils.isNonEmptyArray(obj);
        }
        Utils.isEmptyArray = isEmptyArray;
        function isHtmlElement(obj) {
            if (window["HTMLElement"] != undefined) {
                return obj instanceof HTMLElement;
            }
            else {
                return obj && obj.nodeType && obj.nodeType == 1;
            }
        }
        Utils.isHtmlElement = isHtmlElement;
        function parseIntIfNotUndefined(str) {
            if (Utils.isNonEmptyString(str)) {
                return parseInt(str, 10);
            }
            else {
                return undefined;
            }
        }
        Utils.parseIntIfNotUndefined = parseIntIfNotUndefined;
        function parseFloatIfNotUndefined(str) {
            if (Utils.isNonEmptyString(str)) {
                return parseFloat(str);
            }
            else {
                return undefined;
            }
        }
        Utils.parseFloatIfNotUndefined = parseFloatIfNotUndefined;
        function round(num, decimals) {
            return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
        }
        Utils.round = round;
        function parseBooleanIfNotUndefined(str) {
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
        }
        Utils.parseBooleanIfNotUndefined = parseBooleanIfNotUndefined;
        function trim(value) {
            if (value == null) {
                return null;
            }
            return value.replace(/^\s+|\s+$/g, '');
        }
        Utils.trim = trim;
        function encodeHTMLEntities(rawStr) {
            var ret = [];
            for (var i = rawStr.length - 1; i >= 0; i--) {
                ret.unshift(['&#', rawStr.charCodeAt(i), ';'].join(''));
            }
            return ret.join('');
        }
        Utils.encodeHTMLEntities = encodeHTMLEntities;
        function decodeHTMLEntities(rawString) {
            return rawString.replace(/&#(\d+);/g, function (match, dec) {
                return String.fromCharCode(dec);
            });
        }
        Utils.decodeHTMLEntities = decodeHTMLEntities;
        function arrayEqual(array1, array2, sameOrder) {
            if (sameOrder === void 0) { sameOrder = true; }
            if (sameOrder) {
                return Coveo._.isEqual(array1, array2);
            }
            else {
                var arrays = [array1, array2];
                return Coveo._.all(arrays, function (array) {
                    return array.length == arrays[0].length && Coveo._.difference(array, arrays[0]).length == 0;
                });
            }
        }
        Utils.arrayEqual = arrayEqual;
        function objectEqual(obj1, obj2) {
            return Coveo._.isEqual(obj1, obj2);
        }
        Utils.objectEqual = objectEqual;
        function isCoveoField(field) {
            return /^@[a-zA-Z0-9_]+$/.test(field);
        }
        Utils.isCoveoField = isCoveoField;
        function getCoveoFieldKey(field) {
            var g = field.match(/^@([a-zA-Z0-9]+)$/);
            Coveo.Assert.check(g != null, field + ' is not a vaild field');
            return g[1].toLowerCase();
        }
        Utils.getCoveoFieldKey = getCoveoFieldKey;
        function escapeRegexCharacter(str) {
            var ret = str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            return ret;
        }
        Utils.escapeRegexCharacter = escapeRegexCharacter;
        function throttle(func, wait, options, context, args) {
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
                if (!previous && options.leading === false)
                    previous = now;
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
        }
        Utils.throttle = throttle;
        function extendDeep(target, src) {
            var _this = this;
            var isArray = Coveo._.isArray(src);
            var toReturn = isArray && [] || {};
            if (isArray) {
                target = target || [];
                toReturn = toReturn["concat"](target);
                Coveo._.each(src, function (e, i, obj) {
                    if (typeof target[i] === 'undefined') {
                        toReturn[i] = e;
                    }
                    else if (typeof e === 'object') {
                        toReturn[i] = _this.extendDeep(target[i], e);
                    }
                    else {
                        if (target.indexOf(e) === -1) {
                            toReturn["push"](e);
                        }
                    }
                });
            }
            else {
                if (target && typeof target === 'object') {
                    Coveo._.each(Coveo._.keys(target), function (key) {
                        toReturn[key] = target[key];
                    });
                }
                Coveo._.each(Coveo._.keys(src), function (key) {
                    if (typeof src[key] !== 'object' || !src[key]) {
                        toReturn[key] = src[key];
                    }
                    else {
                        if (!target[key]) {
                            toReturn[key] = src[key];
                        }
                        else {
                            toReturn[key] = _this.extendDeep(target[key], src[key]);
                        }
                    }
                });
            }
            return toReturn;
        }
        Utils.extendDeep = extendDeep;
        function getQueryStringValue(key, queryString) {
            if (queryString === void 0) { queryString = window.location.search; }
            return queryString.replace(new RegExp("^(?:.*[&\\?]" + key.replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1");
        }
        Utils.getQueryStringValue = getQueryStringValue;
        function isValidUrl(str) {
            var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            return regexp.test(str);
        }
        Utils.isValidUrl = isValidUrl;
        function debounce(func, wait) {
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
        }
        Utils.debounce = debounce;
        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ')
                    c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0)
                    return c.substring(nameEQ.length, c.length);
            }
            return null;
        }
        Utils.readCookie = readCookie;
    })(Utils = Coveo.Utils || (Coveo.Utils = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var TimeSpan = (function () {
        function TimeSpan(milliseconds) {
            this.milliseconds = milliseconds;
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
        TimeSpan.fromDates = function (from, to) {
            Coveo.Assert.exists(from);
            Coveo.Assert.exists(to);
            return new TimeSpan(to.valueOf() - from.valueOf());
        };
        return TimeSpan;
    })();
    Coveo.TimeSpan = TimeSpan;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var DeviceUtils;
    (function (DeviceUtils) {
        //Not sure about this : In year 2033 who's to say that this list won't be 50 page long !
        var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        // Urls in Phonegap starts with file:///XXX_asset in android, file:///var/mobile in iOS,  file:///[....]CoreSimulator on IOS emulator
        var phonegap = /^file:\/\/\/.*_asset/i.test(document.URL) || /^file:\/\/\/.*var\/mobile/i.test(document.URL) || /^file:\/\/\/.*\/CoreSimulator/.test(document.URL);
        function getDeviceName() {
            var userAgent = navigator.userAgent;
            if (userAgent.match(/Android/i))
                return "Android";
            if (userAgent.match(/BlackBerry/i))
                return "BlackBerry";
            if (userAgent.match(/iPhone/i))
                return "iPhone";
            if (userAgent.match(/iPad/i))
                return "iPad";
            if (userAgent.match(/iPod/i))
                return "iPod";
            if (userAgent.match(/Opera Mini/i))
                return "Opera Mini";
            if (userAgent.match(/IEMobile/i))
                return "IE Mobile";
            if (userAgent.match(/Chrome/i))
                return "Chrome";
            if (userAgent.match(/MSIE/i) || userAgent.match(/Trident/i))
                return "IE";
            if (userAgent.match(/Opera/i))
                return "Opera";
            if (userAgent.match(/Firefox/i))
                return "Firefox";
            if (userAgent.match(/Safari/i))
                return "Safari";
            return "Others";
        }
        DeviceUtils.getDeviceName = getDeviceName;
        function isAndroid() {
            return getDeviceName() == "Android";
        }
        DeviceUtils.isAndroid = isAndroid;
        function isIos() {
            var deviceName = getDeviceName();
            return deviceName == "iPhone" || deviceName == "iPad" || deviceName == "iPod";
        }
        DeviceUtils.isIos = isIos;
        function isIE8or9() {
            var myNav = navigator.userAgent.toLowerCase();
            if (myNav.indexOf('msie') == -1)
                return false;
            return parseInt(myNav.split('msie')[1]) < 10;
        }
        DeviceUtils.isIE8or9 = isIE8or9;
        function isMobileDevice() {
            return mobile;
        }
        DeviceUtils.isMobileDevice = isMobileDevice;
        function isPhonegap() {
            return phonegap;
        }
        DeviceUtils.isPhonegap = isPhonegap;
        function isSmallScreenWidth() {
            return screen.width <= 480;
        }
        DeviceUtils.isSmallScreenWidth = isSmallScreenWidth;
        function isSmallScreenHeight() {
            return screen.height <= 640;
        }
        DeviceUtils.isSmallScreenHeight = isSmallScreenHeight;
    })(DeviceUtils = Coveo.DeviceUtils || (Coveo.DeviceUtils = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var QueryUtils = (function () {
        function QueryUtils() {
        }
        QueryUtils.createGuid = function () {
            return (typeof (crypto) != 'undefined' && typeof (crypto.getRandomValues) != 'undefined') ? QueryUtils.generateWithCrypto() : QueryUtils.generateWithRandom();
        };
        //This method is a fallback as it's generate a lot of collisions in Chrome.
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
                    ret = "0" + ret;
                }
                return ret;
            };
            return (S4(buf[0]) + S4(buf[1]) + "-" + S4(buf[2]) + "-" + S4(buf[3]) + "-" + S4(buf[4]) + "-" + S4(buf[5]) + S4(buf[6]) + S4(buf[7]));
        };
        QueryUtils.setStateObjectOnQueryResults = function (state, results) {
            QueryUtils.setPropertyOnResults(results, "state", state);
        };
        QueryUtils.setStateObjectOnQueryResult = function (state, result) {
            QueryUtils.setPropertyOnResult(result, "state", state);
        };
        QueryUtils.setIndexAndUidOnQueryResults = function (query, results, queryUid, pipeline, splitTestRun) {
            Coveo.Assert.exists(query);
            Coveo.Assert.exists(results);
            var index = query.firstResult;
            QueryUtils.setPropertyOnResults(results, "queryUid", queryUid);
            QueryUtils.setPropertyOnResults(results, "pipeline", pipeline);
            QueryUtils.setPropertyOnResults(results, "splitTestRun", splitTestRun);
            QueryUtils.setPropertyOnResults(results, "index", index, function () { return ++index; });
        };
        QueryUtils.setTermsToHighlightOnQueryResults = function (query, results) {
            QueryUtils.setPropertyOnResults(results, "termsToHighlight", results.termsToHighlight);
            QueryUtils.setPropertyOnResults(results, "phrasesToHighlight", results.phrasesToHighlight);
        };
        QueryUtils.splitFlags = function (flags, delimiter) {
            if (delimiter === void 0) { delimiter = ";"; }
            Coveo.Assert.exists(flags);
            return flags.split(delimiter);
        };
        QueryUtils.isAttachment = function (result) {
            return Coveo._.contains(QueryUtils.splitFlags(result.flags), "IsAttachment");
        };
        QueryUtils.containsAttachment = function (result) {
            return Coveo._.contains(QueryUtils.splitFlags(result.flags), "ContainsAttachment");
        };
        QueryUtils.hasHTMLVersion = function (result) {
            return Coveo._.contains(QueryUtils.splitFlags(result.flags), "HasHtmlVersion");
        };
        QueryUtils.hasThumbnail = function (result) {
            return Coveo._.contains(QueryUtils.splitFlags(result.flags), "HasThumbnail");
        };
        QueryUtils.quoteAndEscapeIfNeeded = function (str) {
            Coveo.Assert.isString(str);
            return QueryUtils.isAtomicString(str) || (QueryUtils.isRangeString(str) || QueryUtils.isRangeWithoutOuterBoundsString(str)) ? str : QueryUtils.quoteAndEscape(str);
        };
        QueryUtils.quoteAndEscape = function (str) {
            Coveo.Assert.isString(str);
            return '"' + QueryUtils.escapeString(str) + '"';
        };
        QueryUtils.escapeString = function (str) {
            Coveo.Assert.isString(str);
            return str.replace(/"/g, ' ');
        };
        QueryUtils.isAtomicString = function (str) {
            Coveo.Assert.isString(str);
            return /^\d+(\.\d+)?$|^[\d\w]+$/.test(str);
        };
        QueryUtils.isRangeString = function (str) {
            Coveo.Assert.isString(str);
            return /^\d+(\.\d+)?\.\.\d+(\.\d+)?$|^\d{4}\/\d{2}\/\d{2}@\d{2}:\d{2}:\d{2}\.\.\d{4}\/\d{2}\/\d{2}@\d{2}:\d{2}:\d{2}$/.test(str);
        };
        QueryUtils.isRangeWithoutOuterBoundsString = function (str) {
            Coveo.Assert.isString(str);
            return /^\d+(\.\d+)?$|^\d{4}\/\d{2}\/\d{2}@\d{2}:\d{2}:\d{2}$/.test(str);
        };
        QueryUtils.buildFieldExpression = function (field, operator, values) {
            Coveo.Assert.isNonEmptyString(field);
            Coveo.Assert.stringStartsWith(field, '@');
            Coveo.Assert.isNonEmptyString(operator);
            Coveo.Assert.isLargerOrEqualsThan(1, values.length);
            if (values.length == 1) {
                return field + operator + QueryUtils.quoteAndEscapeIfNeeded(values[0]);
            }
            else {
                return field + operator + '(' + Coveo._.map(values, function (str) { return QueryUtils.quoteAndEscapeIfNeeded(str); }).join(',') + ')';
            }
        };
        QueryUtils.buildFieldNotEqualExpression = function (field, values) {
            Coveo.Assert.isNonEmptyString(field);
            Coveo.Assert.stringStartsWith(field, '@');
            Coveo.Assert.isLargerOrEqualsThan(1, values.length);
            var filter;
            if (values.length == 1) {
                filter = field + "==" + QueryUtils.quoteAndEscapeIfNeeded(values[0]);
            }
            else {
                filter = field + "==" + '(' + Coveo._.map(values, function (str) { return QueryUtils.quoteAndEscapeIfNeeded(str); }).join(',') + ')';
            }
            return "(NOT " + filter + ")";
        };
        QueryUtils.mergeQueryString = function (url, queryString) {
            var queryStringPosition = url.indexOf("?");
            if (queryStringPosition != -1) {
                url += "&" + queryString;
            }
            else {
                url += "?" + queryString;
            }
            return url;
        };
        QueryUtils.mergePath = function (url, path) {
            var urlSplit = url.split("?");
            return urlSplit[0] + path + "?" + (urlSplit[1] || "");
        };
        QueryUtils.setPropertyOnResults = function (results, property, value, afterOneLoop) {
            Coveo._.each(results.results, function (result) {
                QueryUtils.setPropertyOnResult(result, property, value);
                value = afterOneLoop ? afterOneLoop() : value;
            });
        };
        QueryUtils.setPropertyOnResult = function (result, property, value) {
            result[property] = value;
            Coveo._.each(result.childResults, function (child) {
                child[property] = value;
            });
            if (!Coveo.Utils.isNullOrUndefined(result.parentResult)) {
                result.parentResult[property] = value;
            }
        };
        return QueryUtils;
    })();
    Coveo.QueryUtils = QueryUtils;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var StringUtils = (function () {
        function StringUtils() {
        }
        StringUtils.javascriptEncode = function (value) {
            Coveo.Assert.isString(value);
            value = value.replace(/\\/g, '\\\\');
            value = value.replace(/'/g, '\\\'');
            value = value.replace(/"/g, '\\"');
            return value;
        };
        StringUtils.htmlEncode = function (value) {
            Coveo.Assert.isString(value);
            return Coveo.$('<div/>').text(value).html();
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
            Coveo.Assert.isString(value);
            return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        };
        StringUtils.stringToRegex = function (value, ignoreAccent) {
            if (ignoreAccent === void 0) { ignoreAccent = false; }
            Coveo.Assert.isString(value);
            var encoded = StringUtils.regexEncode(value);
            if (ignoreAccent) {
                return Coveo._.map(encoded, function (char) {
                    var regexp = Coveo._.find(StringUtils.accented, function (regexp) { return char.match(regexp) != null; });
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
            Coveo.Assert.isString(value);
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
            return Coveo._.isEmpty(indexes) ? undefined : indexes;
        };
        StringUtils.encodeCarriageReturn = function (strToEncode) {
            Coveo.Assert.isString(strToEncode);
            return strToEncode.replace(/\n/g, "<br/>");
        };
        StringUtils.equalsCaseInsensitive = function (str1, str2) {
            return str1.toLowerCase() == str2.toLowerCase();
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
    })();
    Coveo.StringUtils = StringUtils;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var JQueryUtils;
    (function (JQueryUtils) {
        (function (VerticalAlignment) {
            VerticalAlignment[VerticalAlignment["top"] = 0] = "top";
            VerticalAlignment[VerticalAlignment["middle"] = 1] = "middle";
            VerticalAlignment[VerticalAlignment["bottom"] = 2] = "bottom";
            VerticalAlignment[VerticalAlignment["innerTop"] = 3] = "innerTop";
            VerticalAlignment[VerticalAlignment["innerBottom"] = 4] = "innerBottom";
        })(JQueryUtils.VerticalAlignment || (JQueryUtils.VerticalAlignment = {}));
        var VerticalAlignment = JQueryUtils.VerticalAlignment;
        (function (HorizontalAlignment) {
            HorizontalAlignment[HorizontalAlignment["left"] = 0] = "left";
            HorizontalAlignment[HorizontalAlignment["center"] = 1] = "center";
            HorizontalAlignment[HorizontalAlignment["right"] = 2] = "right";
            HorizontalAlignment[HorizontalAlignment["innerLeft"] = 3] = "innerLeft";
            HorizontalAlignment[HorizontalAlignment["innerRight"] = 4] = "innerRight";
        })(JQueryUtils.HorizontalAlignment || (JQueryUtils.HorizontalAlignment = {}));
        var HorizontalAlignment = JQueryUtils.HorizontalAlignment;
        function positionPopup(popUp, nextTo, appendTo, boundary, desiredPosition, checkForBoundary) {
            if (checkForBoundary === void 0) { checkForBoundary = 0; }
            popUp.appendTo(appendTo);
            desiredPosition.verticalOffset = desiredPosition.verticalOffset ? desiredPosition.verticalOffset : 0;
            desiredPosition.horizontalOffset = desiredPosition.horizontalOffset ? desiredPosition.horizontalOffset : 0;
            var popUpPosition = nextTo.offset();
            basicVerticalAlignment(popUpPosition, popUp, nextTo, desiredPosition);
            basicHorizontalAlignment(popUpPosition, popUp, nextTo, desiredPosition);
            finalAdjustement(popUp.offset(), popUpPosition, popUp, desiredPosition);
            var popUpBoundary = getBoundary(popUp);
            var boundaryPosition = getBoundary(boundary);
            if (checkForBoundary < 2) {
                var checkBoundary = checkForOutOfBoundary(popUpBoundary, boundaryPosition);
                if (checkBoundary.vertical != "ok" || checkBoundary.horizontal != "ok") {
                    var newDesiredPosition = alignInsideBoundary(desiredPosition, checkBoundary);
                    positionPopup(popUp, nextTo, appendTo, boundary, newDesiredPosition, checkForBoundary + 1);
                }
            }
        }
        JQueryUtils.positionPopup = positionPopup;
        function finalAdjustement(popUpOffSet, popUpPosition, popUp, desiredPosition) {
            var position = popUp.position();
            popUp.css({
                "position": "absolute",
                "top": (position.top + desiredPosition.verticalOffset) - (popUpOffSet.top - popUpPosition.top) + "px",
                "left": (position.left + desiredPosition.horizontalOffset) - (popUpOffSet.left - popUpPosition.left) + "px"
            });
        }
        function basicVerticalAlignment(popUpPosition, popUp, nextTo, desiredPosition) {
            switch (desiredPosition.vertical) {
                case 0 /* top */:
                    popUpPosition.top -= popUp.outerHeight();
                    break;
                case 2 /* bottom */:
                    popUpPosition.top += nextTo.outerHeight();
                    break;
                case 1 /* middle */:
                    popUpPosition.top -= popUp.outerHeight() / 3;
                case 3 /* innerTop */:
                    break;
                case 4 /* innerBottom */:
                    popUpPosition.top -= popUp.outerHeight() - nextTo.outerHeight();
                    break;
                default:
                    break;
            }
        }
        function basicHorizontalAlignment(popUpPosition, popUp, nextTo, desiredPosition) {
            switch (desiredPosition.horizontal) {
                case 0 /* left */:
                    popUpPosition.left -= popUp.outerWidth();
                    break;
                case 2 /* right */:
                    popUpPosition.left += nextTo.outerWidth();
                    break;
                case 1 /* center */:
                    popUpPosition.left += offSetToAlignCenter(popUp, nextTo);
                    break;
                case 3 /* innerLeft */:
                    break;
                case 4 /* innerRight */:
                    popUpPosition.left -= popUp.outerWidth() - nextTo.outerWidth();
                    break;
                default:
                    break;
            }
        }
        function alignInsideBoundary(oldPosition, checkBoundary) {
            var newDesiredPosition = oldPosition;
            if (checkBoundary.horizontal == "left") {
                newDesiredPosition.horizontal = 2 /* right */;
            }
            if (checkBoundary.horizontal == "right") {
                newDesiredPosition.horizontal = 0 /* left */;
            }
            if (checkBoundary.vertical == "top") {
                newDesiredPosition.vertical = 2 /* bottom */;
            }
            if (checkBoundary.vertical == "bottom") {
                newDesiredPosition.vertical = 0 /* top */;
            }
            return newDesiredPosition;
        }
        function offSetToAlignCenter(popUp, nextTo) {
            return (nextTo.outerWidth() - popUp.outerWidth()) / 2;
        }
        function getBoundary(element) {
            var boundaryOffset = element.offset();
            return {
                top: boundaryOffset.top,
                left: boundaryOffset.left,
                right: boundaryOffset.left + element.outerWidth(),
                bottom: boundaryOffset.top + element.outerHeight()
            };
        }
        function checkForOutOfBoundary(popUpBoundary, boundary) {
            var ret = {
                vertical: "ok",
                horizontal: "ok"
            };
            if (popUpBoundary.top < boundary.top) {
                ret.vertical = "top";
            }
            if (popUpBoundary.bottom > boundary.bottom) {
                ret.vertical = "bottom";
            }
            if (popUpBoundary.left < boundary.left) {
                ret.horizontal = "left";
            }
            if (popUpBoundary.right > boundary.right) {
                ret.horizontal = "right";
            }
            return ret;
        }
        function getPopUpCloseButton(captionForClose, captionForReminder) {
            return "<span class='coveo-close-button'>" + "<span class='coveo-icon coveo-sprites-quickView-close'></span>" + captionForClose + "</span>" + "<span class='coveo-pop-up-reminder' >" + captionForReminder + "</span>";
        }
        JQueryUtils.getPopUpCloseButton = getPopUpCloseButton;
        function getBasicLoadingAnimation() {
            var loadDotClass = 'coveo-loading-dot';
            return Coveo.$("" + "<div class='coveo-first-loading-animation' >" + "<div class='coveo-logo' ></div>" + "<div class='coveo-loading-container'>" + "<div class='" + loadDotClass + "' ></div>" + "<div class='" + loadDotClass + "' ></div>" + "<div class='" + loadDotClass + "' ></div>" + "<div class='" + loadDotClass + "' ></div>" + "</div>" + "</div>");
        }
        JQueryUtils.getBasicLoadingAnimation = getBasicLoadingAnimation;
        function getBasicLoadingDots() {
            var loadDotClass = 'coveo-loading-dot';
            return Coveo.$("" + "<div class='coveo-generic-loading-animation coveo-loading-animation'>" + "<div class='coveo-loading-container'>" + "<div class='" + loadDotClass + "' ></div>" + "<div class='" + loadDotClass + "' ></div>" + "<div class='" + loadDotClass + "' ></div>" + "<div class='" + loadDotClass + "' ></div>" + "</div>" + "</div>");
        }
        JQueryUtils.getBasicLoadingDots = getBasicLoadingDots;
        function getLoadingSpinner() {
            return Coveo.$('<div class="coveo-loading-spinner"/>');
        }
        JQueryUtils.getLoadingSpinner = getLoadingSpinner;
        function highlightElement(initialString, valueToSearch) {
            var regex = new RegExp(Coveo.Utils.escapeRegexCharacter(valueToSearch), "i");
            var firstChar = initialString.search(regex);
            var lastChar = firstChar + valueToSearch.length;
            return Coveo.StringUtils.htmlEncode(initialString.slice(0, firstChar)) + "<span class='coveo-highlight'>" + Coveo.StringUtils.htmlEncode(initialString.slice(firstChar, lastChar)) + "</span>" + Coveo.StringUtils.htmlEncode(initialString.slice(lastChar));
        }
        JQueryUtils.highlightElement = highlightElement;
        function findScrollingParent(element) {
            var currentElement = Coveo.$(element);
            while (!(currentElement.is(document)) && (currentElement.length != 0)) {
                if (isElementScrollable(currentElement)) {
                    if (!currentElement.is("body")) {
                        return currentElement.get(0);
                    }
                    return Coveo.$(window).get(0);
                }
                currentElement = currentElement.parent();
            }
            return Coveo.$(window).get(0);
        }
        JQueryUtils.findScrollingParent = findScrollingParent;
        function isElementScrollable(element) {
            return (element.css("overflow-y") == "scroll");
        }
        function htmlToDom(html) {
            var parsedHtml = Coveo.$('<div>').html(html);
            // If the template has a single root element, we return it directly. Otherwise
            // we'll have to wrap this thing in a div as ResultList expects a single element.
            if (parsedHtml.children().length == 1) {
                return parsedHtml.children().get(0);
            }
            return parsedHtml.get(0);
        }
        JQueryUtils.htmlToDom = htmlToDom;
        Coveo.$.fn.fastToggle = function (visible) {
            return this.css('display', visible ? '' : 'none');
        };
    })(JQueryUtils = Coveo.JQueryUtils || (Coveo.JQueryUtils = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var HashUtils = (function () {
        function HashUtils() {
        }
        HashUtils.getHash = function (w) {
            if (w === void 0) { w = window; }
            Coveo.Assert.exists(w);
            // window.location.hash returns the DECODED hash on Firefox (it's a well known bug),
            // so any & in values will be already unescaped. This breaks our value splitting.
            // The following trick works on all browsers.
            var ret = "#" + (w.location.href.split("#")[1] || "");
            return HashUtils.getAjaxcrawlableHash(ret);
        };
        HashUtils.getValue = function (value, toParse) {
            Coveo.Assert.isNonEmptyString(value);
            Coveo.Assert.exists(toParse);
            toParse = HashUtils.getAjaxcrawlableHash(toParse);
            var paramValue = HashUtils.getRawValue(value, toParse);
            if (paramValue != undefined) {
                paramValue = HashUtils.getValueDependingOnType(paramValue);
            }
            return paramValue;
        };
        HashUtils.encodeValues = function (values) {
            var hash = [];
            Coveo._.each(values, function (valueToEncode, key, obj) {
                var encodedValue = "";
                if (Coveo.Utils.isNonEmptyArray(valueToEncode)) {
                    encodedValue = HashUtils.encodeArray(valueToEncode);
                }
                else if (Coveo._.isObject(valueToEncode) && Coveo.Utils.isNonEmptyArray(Coveo._.keys(valueToEncode))) {
                    encodedValue = HashUtils.encodeObject(valueToEncode);
                }
                else {
                    encodedValue = encodeURIComponent(valueToEncode.toString());
                }
                if (encodedValue != "") {
                    hash.push(key + "=" + encodedValue);
                }
            });
            return hash.join('&');
        };
        HashUtils.getAjaxcrawlableHash = function (hash) {
            if (hash[1] != undefined && hash[1] == "!") {
                return hash.substring(0, 1) + hash.substring(2);
            }
            else {
                return hash;
            }
        };
        HashUtils.getRawValue = function (value, toParse) {
            Coveo.Assert.exists(value);
            Coveo.Assert.exists(toParse);
            Coveo.Assert.check(toParse.indexOf('#') == 0 || toParse == '');
            var toParseArray = toParse.substr(1).split("&");
            var paramPos = 0;
            var loop = true;
            var paramValue = undefined;
            while (loop) {
                var paramValuePair = toParseArray[paramPos].split("=");
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
            if (type == "object") {
                returnValue = HashUtils.decodeObject(paramValue);
            }
            else if (type == "array") {
                returnValue = HashUtils.decodeArray(paramValue);
            }
            else {
                returnValue = decodeURIComponent(paramValue);
            }
            return returnValue;
        };
        HashUtils.getValueType = function (paramValue) {
            if (HashUtils.isObject(paramValue)) {
                return "object";
            }
            else if (HashUtils.isArray(paramValue)) {
                return "array";
            }
            else {
                return "other";
            }
        };
        HashUtils.isArrayStartNotEncoded = function (value) {
            return value.substr(0, 1) == HashUtils.Delimiter.arrayStart;
        };
        HashUtils.isArrayStartEncoded = function (value) {
            return value.indexOf(encodeURIComponent(HashUtils.Delimiter.arrayStart)) == 0;
        };
        HashUtils.isArrayEndNotEncoded = function (value) {
            return value.substr(value.length - 1);
        };
        HashUtils.isArrayEndEncoded = function (value) {
            return value.indexOf(encodeURIComponent(HashUtils.Delimiter.arrayEnd)) == value.length - encodeURIComponent(HashUtils.Delimiter.arrayEnd).length;
        };
        HashUtils.isObjectStartNotEncoded = function (value) {
            return value.substr(0, 1) == HashUtils.Delimiter.objectStart;
        };
        HashUtils.isObjectStartEncoded = function (value) {
            return value.indexOf(encodeURIComponent(HashUtils.Delimiter.objectStart)) == 0;
        };
        HashUtils.isObjectEndNotEncoded = function (value) {
            return value.substr(value.length - 1) == HashUtils.Delimiter.objectEnd;
        };
        HashUtils.isObjectEndEncoded = function (value) {
            return value.indexOf(encodeURIComponent(HashUtils.Delimiter.objectEnd)) == value.length - encodeURIComponent(HashUtils.Delimiter.objectEnd).length;
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
            var arrayReturn = [];
            Coveo._.each(array, function (value) {
                arrayReturn.push(encodeURIComponent(value));
            });
            return HashUtils.Delimiter.arrayStart + arrayReturn.join(",") + HashUtils.Delimiter.arrayEnd;
        };
        HashUtils.encodeObject = function (obj) {
            var ret = HashUtils.Delimiter.objectStart;
            var retArray = [];
            Coveo._.each(obj, function (val, key, obj) {
                var retValue = "";
                retValue += "\"" + encodeURIComponent(key) + "\"" + " : ";
                if (Coveo._.isArray(val)) {
                    retValue += HashUtils.encodeArray(val);
                }
                else if (Coveo._.isObject(val)) {
                    retValue += HashUtils.encodeObject(val);
                }
                else {
                    if (Coveo._.isNumber(val) || Coveo._.isBoolean(val)) {
                        retValue += encodeURIComponent(val);
                    }
                    else {
                        retValue += "\"" + encodeURIComponent(val) + "\"";
                    }
                }
                retArray.push(retValue);
            });
            ret += retArray.join(" , ");
            return ret + HashUtils.Delimiter.objectEnd;
        };
        HashUtils.decodeObject = function (obj) {
            if (HashUtils.isObjectStartEncoded(obj) && HashUtils.isObjectEndEncoded(obj)) {
                obj = obj.replace(/encodeURIComponent(HashUtils.Delimiter.objectStart)/, HashUtils.Delimiter.objectStart);
                obj = obj.replace(encodeURIComponent(HashUtils.Delimiter.objectEnd), HashUtils.Delimiter.objectEnd);
            }
            return JSON.parse(decodeURIComponent(obj));
        };
        HashUtils.decodeArray = function (value) {
            if (HashUtils.isArrayStartEncoded(value) && HashUtils.isArrayEndEncoded(value)) {
                value = value.replace(encodeURIComponent(HashUtils.Delimiter.arrayStart), HashUtils.Delimiter.arrayStart);
                value = value.replace(encodeURIComponent(HashUtils.Delimiter.arrayEnd), HashUtils.Delimiter.arrayEnd);
            }
            value = value.substr(1);
            value = value.substr(0, value.length - 1);
            var array = value.split(",");
            return Coveo._.map(array, function (val) {
                return decodeURIComponent(val);
            });
        };
        HashUtils.Delimiter = {
            "objectStart": "{",
            "objectEnd": "}",
            "arrayStart": "[",
            "arrayEnd": "]",
            "objectStartRegExp": "^{",
            "objectEndRegExp": "}+$",
            "arrayStartRegExp": "^[",
            "arrayEndRegExp": "]+$"
        };
        return HashUtils;
    })();
    Coveo.HashUtils = HashUtils;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var MobileUtils;
    (function (MobileUtils) {
        var clickCancelingOverlay = Coveo.$(document.createElement('div')).addClass('coveo-click-canceling-overlay');
        function showClickCancelingOverlay(duration) {
            clickCancelingOverlay.addClass('active');
            setTimeout(function () {
                clickCancelingOverlay.removeClass('active');
            }, duration);
        }
        MobileUtils.showClickCancelingOverlay = showClickCancelingOverlay;
        function showClickFeedback(element, duration) {
            element.addClass('coveo-clicked');
            setTimeout(function () {
                element.removeClass('coveo-clicked');
            }, duration);
        }
        MobileUtils.showClickFeedback = showClickFeedback;
        function addToggleClassOnSearchInterface(direction, isPhonegap) {
            //TODO : This code should be changed to something sane.
            //Something event based, not arbitrary css rules
            if (isPhonegap === void 0) { isPhonegap = false; }
            var searchInterfaceClass = "." + Coveo.Ui.Component.computeCssClassNameForType(Coveo.Ui.SearchInterface.ID);
            Coveo.$(searchInterfaceClass + ",.coveo-glass").addClass('coveo-' + direction);
            Coveo.$(".coveo-glass").addClass('coveo-active-glass');
            if (isPhonegap && Coveo.DeviceUtils.getDeviceName() == "Android") {
                Coveo.$(document).on("backbutton", Coveo.$.proxy(MobileUtils.removeToggleClassOnSearchInterface, this, true));
            }
        }
        MobileUtils.addToggleClassOnSearchInterface = addToggleClassOnSearchInterface;
        function removeToggleClassOnSearchInterface(isPhonegap) {
            //TODO : This code should be changed to something sane.
            //Something event based, not arbitrary css rules
            if (isPhonegap === void 0) { isPhonegap = false; }
            var searchInterfaceClass = "." + Coveo.Ui.Component.computeCssClassNameForType(Coveo.Ui.SearchInterface.ID);
            Coveo.$(searchInterfaceClass + ",.coveo-glass").removeClass('coveo-slide-right').removeClass('coveo-slide-left').removeClass('coveo-active-glass').removeClass('coveo-active-glass-for-current-tab');
            Coveo.$('.coveo-tab-section').removeClass('coveo-opened-by-current-tab');
            var currentTabRef = Coveo.Ui.Component.getComponentRef("CurrentTab");
            if (currentTabRef) {
                var classForCurrentTab = "." + Coveo.Ui.Component.computeCssClassNameForType(currentTabRef.ID);
                Coveo.$(classForCurrentTab).removeClass("coveo-opening-tab-section");
            }
            if (isPhonegap && Coveo.DeviceUtils.getDeviceName() == "Android") {
                Coveo.$(document).off("backbutton");
            }
        }
        MobileUtils.removeToggleClassOnSearchInterface = removeToggleClassOnSearchInterface;
        function appendClickCancelingOverlay() {
            Coveo.$('.' + Coveo.Ui.Component.computeCssClassNameForType(Coveo.Ui.SearchInterface.ID)).append(clickCancelingOverlay);
        }
        function hideIOSKeyboard(activeElement) {
            Coveo.$(window).focus();
            Coveo.$(activeElement).blur();
        }
        MobileUtils.hideIOSKeyboard = hideIOSKeyboard;
        function hideIOSKeyboardOnWindowClick() {
            if (Coveo.DeviceUtils.isIos()) {
                Coveo.$(window).on('touchstart', function (e) {
                    if (!Coveo.$(e.target).is('input') && Coveo.$(document.activeElement).is('input')) {
                        MobileUtils.hideIOSKeyboard(document.activeElement);
                    }
                });
            }
        }
        function initMobileUtils() {
            if (Coveo.DeviceUtils.isMobileDevice()) {
                Coveo.$(function () { return appendClickCancelingOverlay(); });
                hideIOSKeyboardOnWindowClick();
            }
        }
        initMobileUtils();
    })(MobileUtils = Coveo.MobileUtils || (Coveo.MobileUtils = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var ColorUtils;
    (function (ColorUtils) {
        function hsvToRgb(h, s, v) {
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
        }
        ColorUtils.hsvToRgb = hsvToRgb;
        function rgbToHsv(r, g, b) {
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
        }
        ColorUtils.rgbToHsv = rgbToHsv;
    })(ColorUtils = Coveo.ColorUtils || (Coveo.ColorUtils = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Rest;
    (function (Rest) {
        var AjaxError = (function () {
            function AjaxError(message, status) {
                this.message = message;
                this.status = status;
                Coveo.Assert.exists(message);
                Coveo.Assert.exists(status);
                this.type = "Ajax Error (status: " + status + ")";
            }
            return AjaxError;
        })();
        Rest.AjaxError = AjaxError;
    })(Rest = Coveo.Rest || (Coveo.Rest = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Rest;
    (function (Rest) {
        var MissingAuthenticationError = (function () {
            function MissingAuthenticationError(provider) {
                this.provider = provider;
                this.isMissingAuthentication = true;
                this.type = this.message = "Missing Authentication (provider: " + provider + ")";
            }
            return MissingAuthenticationError;
        })();
        Rest.MissingAuthenticationError = MissingAuthenticationError;
    })(Rest = Coveo.Rest || (Coveo.Rest = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Rest;
    (function (Rest) {
        var QueryError = (function () {
            function QueryError(errorResponse) {
                this.status = errorResponse.statusCode;
                this.message = errorResponse.data.message;
                this.type = errorResponse.data.type;
                this.queryExecutionReport = errorResponse.data.executionReport;
                Coveo.Assert.isNumber(this.status);
                Coveo.Assert.isNonEmptyString(this.message);
                Coveo.Assert.isNonEmptyString(this.type);
            }
            return QueryError;
        })();
        Rest.QueryError = QueryError;
    })(Rest = Coveo.Rest || (Coveo.Rest = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Rest;
    (function (Rest) {
        var ACCESS_IS_DENIED = -2147024891;
        //In ie8, XMLHttpRequest has no status property, so let's use this enum instead
        var XMLHttpRequestStatus;
        (function (XMLHttpRequestStatus) {
            XMLHttpRequestStatus[XMLHttpRequestStatus["OPENED"] = XMLHttpRequest.OPENED || 1] = "OPENED";
            XMLHttpRequestStatus[XMLHttpRequestStatus["HEADERS_RECEIVED"] = XMLHttpRequest.HEADERS_RECEIVED || 2] = "HEADERS_RECEIVED";
            XMLHttpRequestStatus[XMLHttpRequestStatus["DONE"] = XMLHttpRequest.DONE || 4] = "DONE";
        })(XMLHttpRequestStatus || (XMLHttpRequestStatus = {}));
        var EndpointCaller = (function () {
            function EndpointCaller(options) {
                if (options === void 0) { options = {}; }
                this.options = options;
                this.useJsonp = false;
                this.logger = new Coveo.Logger(this);
            }
            EndpointCaller.prototype.call = function (params) {
                Coveo.Assert.isNonEmptyString(params.url);
                var requestInfo = {
                    url: params.url,
                    queryString: params.errorsAsSuccess ? params.queryString.concat(['errorsAsSuccess=1']) : params.queryString,
                    requestData: params.requestData,
                    deferred: Coveo.$.Deferred(),
                    begun: new Date(),
                    method: params.method
                };
                this.logger.trace('Performing REST request', requestInfo);
                var urlObject = EndpointCaller.parseURL(requestInfo.url);
                //In IE8, hostname and port return "" when we are on the same domain.
                var isLocalHost = (window.location.hostname === urlObject.hostname) || (urlObject.hostname === "");
                var currentPort = (window.location.port != "" ? window.location.port : (window.location.protocol == "https:" ? "443" : "80"));
                var isSamePort = currentPort == urlObject.port;
                var isCrossOrigin = !(isLocalHost && isSamePort);
                if (!this.useJsonp) {
                    if (this.isCORSSupported() || !isCrossOrigin) {
                        this.callUsingXMLHttpRequest(requestInfo, params.responseType);
                    }
                    else if (this.isXDomainRequestSupported()) {
                        this.callUsingXDomainRequest(requestInfo);
                    }
                    else {
                        this.callUsingAjaxJsonP(requestInfo);
                    }
                }
                else {
                    this.callUsingAjaxJsonP(requestInfo);
                }
                return requestInfo.deferred;
            };
            EndpointCaller.parseURL = function (url) {
                var urlObject = document.createElement('a');
                urlObject.href = url;
                return urlObject;
            };
            EndpointCaller.convertJsonToQueryString = function (json) {
                Coveo.Assert.exists(json);
                var result = [];
                Coveo._.each(json, function (value, key) {
                    if (value != null) {
                        if (Coveo._.isObject(value)) {
                            result.push(key + '=' + encodeURIComponent(JSON.stringify(value)));
                        }
                        else {
                            result.push(key + '=' + encodeURIComponent(value.toString()));
                        }
                    }
                });
                return result;
            };
            EndpointCaller.convertJsonToFormBody = function (json) {
                return EndpointCaller.convertJsonToQueryString(json).join('&');
            };
            EndpointCaller.prototype.callUsingXMLHttpRequest = function (requestInfo, responseType) {
                var _this = this;
                if (responseType === void 0) { responseType = "text"; }
                var xmlHttpRequest = new XMLHttpRequest();
                // Beware, most stuff must be set on the event that says the request is OPENED.
                // Otherwise it'll bork on some browsers. Gotta love standards.
                // This sent variable allowed to remove the second call of onreadystatechange with the state OPENED in IE11
                var sent = false;
                xmlHttpRequest.onreadystatechange = function (ev) {
                    if (xmlHttpRequest.readyState == XMLHttpRequestStatus.OPENED && !sent) {
                        sent = true;
                        // We have to enable withCredentials in order for CORS to work with basic & Windows & cookie authentication.
                        // We must NOT set it otherwise because it won't work if Access-Control-Allow-Credentials is not specified
                        // by the server (ex: cloud platform)
                        if (_this.options.anonymous === false) {
                            xmlHttpRequest.withCredentials = true;
                        }
                        // Set authentication depending on what we're using
                        if (_this.options.accessToken) {
                            xmlHttpRequest.setRequestHeader('Authorization', 'Bearer ' + _this.options.accessToken);
                        }
                        else if (_this.options.username && _this.options.password) {
                            xmlHttpRequest.setRequestHeader('Authorization', 'Basic ' + btoa(_this.options.username + ":" + _this.options.password));
                        }
                        // Under Phonegap, we must set this special http header that'll prevent the server
                        // from challenging us for Basic Authentication. This avoids a bug where Phonegap
                        // would simply deadlock trying to show a popup.
                        if (Coveo.DeviceUtils.isPhonegap()) {
                            xmlHttpRequest.setRequestHeader('Basic-Auth-Challenge-Client', 'Phonegap');
                        }
                        if (requestInfo.method == "GET") {
                            xmlHttpRequest.send();
                        }
                        else {
                            xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=\"UTF-8\"");
                            xmlHttpRequest.send(EndpointCaller.convertJsonToFormBody(requestInfo.requestData));
                        }
                    }
                    else if (xmlHttpRequest.readyState == XMLHttpRequestStatus.HEADERS_RECEIVED) {
                        var status = xmlHttpRequest.status;
                        if (_this.isSuccessHttpStatus(status)) {
                            xmlHttpRequest.responseType = responseType;
                        }
                        else {
                            xmlHttpRequest.responseType = "text";
                        }
                    }
                    else if (xmlHttpRequest.readyState == XMLHttpRequestStatus.DONE) {
                        var status = xmlHttpRequest.status;
                        var data;
                        if (responseType == "text") {
                            data = _this.tryParseResponseText(xmlHttpRequest.responseText, xmlHttpRequest.getResponseHeader("Content-Type"));
                        }
                        else {
                            data = xmlHttpRequest.response;
                            if (data == undefined) {
                                data = _this.tryParseResponseText(xmlHttpRequest.responseText, xmlHttpRequest.getResponseHeader("Content-Type"));
                            }
                        }
                        if (_this.isSuccessHttpStatus(status)) {
                            _this.handleSuccessfulResponseThatMightBeAnError(requestInfo, data);
                        }
                        else {
                            _this.handleError(requestInfo, xmlHttpRequest.status, undefined);
                        }
                    }
                };
                var queryString = requestInfo.queryString;
                if (requestInfo.method == "GET") {
                    queryString = queryString.concat(EndpointCaller.convertJsonToQueryString(requestInfo.requestData));
                }
                xmlHttpRequest.open(requestInfo.method, this.combineUrlAndQueryString(requestInfo.url, queryString));
            };
            EndpointCaller.prototype.callUsingXDomainRequest = function (requestInfo) {
                var _this = this;
                var queryString = requestInfo.queryString.concat([]);
                // XDomainRequest don't support including stuff in the header, so we must
                // put the access token in the query string if we have one.
                if (this.options.accessToken) {
                    queryString.push('access_token=' + encodeURIComponent(this.options.accessToken));
                }
                var xDomainRequest = new XDomainRequest();
                if (requestInfo.method == "GET") {
                    queryString = queryString.concat(EndpointCaller.convertJsonToQueryString(requestInfo.requestData));
                }
                xDomainRequest.open(requestInfo.method, this.combineUrlAndQueryString(requestInfo.url, queryString));
                xDomainRequest.onload = function () {
                    var data = _this.tryParseResponseText(xDomainRequest.responseText, xDomainRequest.contentType);
                    _this.handleSuccessfulResponseThatMightBeAnError(requestInfo, data);
                };
                xDomainRequest.onerror = function () {
                    var data = _this.tryParseResponseText(xDomainRequest.responseText, xDomainRequest.contentType);
                    _this.handleError(requestInfo, 0, data);
                };
                // We must set those functions otherwise it will sometime fail in IE
                xDomainRequest.ontimeout = function () { return _this.logger.error('Request timeout', xDomainRequest, requestInfo.requestData); };
                xDomainRequest.onprogress = function () { return _this.logger.trace('Request progress', xDomainRequest, requestInfo.requestData); };
                // We must open the request in a separate thread, for obscure reasons
                Coveo._.defer(function () {
                    if (requestInfo.method == "GET") {
                        xDomainRequest.send();
                    }
                    else {
                        xDomainRequest.send(EndpointCaller.convertJsonToFormBody(requestInfo.requestData));
                    }
                });
            };
            EndpointCaller.prototype.callUsingAjaxJsonP = function (requestInfo) {
                var _this = this;
                var queryString = requestInfo.queryString.concat(EndpointCaller.convertJsonToQueryString(requestInfo.requestData));
                // JSONP don't support including stuff in the header, so we must
                // put the access token in the query string if we have one.
                if (this.options.accessToken) {
                    queryString.push('access_token=' + encodeURIComponent(this.options.accessToken));
                }
                queryString.push('callback=?');
                Coveo.$.jsonp({
                    url: this.combineUrlAndQueryString(requestInfo.url, queryString),
                    success: function (data) { return _this.handleSuccessfulResponseThatMightBeAnError(requestInfo, data); },
                    error: function () { return _this.handleError(requestInfo, 0, undefined); }
                });
            };
            EndpointCaller.prototype.handleSuccessfulResponseThatMightBeAnError = function (requestInfo, data) {
                if (this.isErrorResponseBody(data)) {
                    this.handleError(requestInfo, data.statusCode, data);
                }
                else {
                    this.handleSuccess(requestInfo, data);
                }
            };
            EndpointCaller.prototype.handleSuccess = function (requestInfo, data) {
                var querySuccess = {
                    duration: Coveo.TimeSpan.fromDates(requestInfo.begun, new Date()).getMilliseconds(),
                    data: data
                };
                this.logger.trace('REST request successful', data, requestInfo);
                requestInfo.deferred.resolve(querySuccess);
            };
            EndpointCaller.prototype.handleError = function (requestInfo, status, data) {
                var queryError = {
                    statusCode: status,
                    data: data
                };
                this.logger.error('REST request failed', status, data, requestInfo);
                requestInfo.deferred.reject(queryError);
            };
            EndpointCaller.prototype.combineUrlAndQueryString = function (url, queryString) {
                return url + (queryString.length > 0 ? '?' + queryString.join('&') : '');
            };
            EndpointCaller.prototype.isXDomainRequestSupported = function () {
                return "XDomainRequest" in window;
            };
            EndpointCaller.prototype.isCORSSupported = function () {
                return "withCredentials" in new XMLHttpRequest();
            };
            EndpointCaller.prototype.isSuccessHttpStatus = function (status) {
                return status >= 200 && status < 300 || status === 304;
            };
            EndpointCaller.prototype.tryParseResponseText = function (json, contentType) {
                if (contentType != null && contentType.indexOf('application/json') != -1) {
                    if (Coveo.Utils.isNonEmptyString(json)) {
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
            return EndpointCaller;
        })();
        Rest.EndpointCaller = EndpointCaller;
    })(Rest = Coveo.Rest || (Coveo.Rest = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Rest;
    (function (Rest) {
        var DefaultSearchEndpointOptions = (function () {
            function DefaultSearchEndpointOptions() {
                this.queryStringArguments = {};
                this.anonymous = false;
                this.isOldRestAPI = false;
            }
            return DefaultSearchEndpointOptions;
        })();
        Rest.DefaultSearchEndpointOptions = DefaultSearchEndpointOptions;
        var SearchEndpoint = (function () {
            function SearchEndpoint(options) {
                this.options = options;
                this._batchListFieldValues = [];
                Coveo.Assert.exists(options);
                // For backward compatibility, we set anonymous to true when an access token
                // is specified on a page loaded through the filesystem. This causes withCredentials
                // to NOT be set, allowing those pages to work with non Windows/Basic/Cookie
                // authentication. If anonymous is explicitly set to false, we'll use withCredentials.
                var defaultOptions = new DefaultSearchEndpointOptions();
                defaultOptions.anonymous = window.location.href.indexOf('file://') == 0 && Coveo.Utils.isNonEmptyString(options.accessToken);
                this.options = Coveo.$.extend({}, defaultOptions, options);
                // Forward any debug=1 query argument to the REST API to ease debugging
                if (Coveo.Rest.SearchEndpoint.isDebugArgumentPresent()) {
                    this.options.queryStringArguments.debug = 1;
                }
                Coveo.$(window).on('beforeunload', Coveo.$.proxy(this.handleUnload, this));
                this.logger = new Coveo.Logger(this);
                this.createEndpointCaller();
            }
            SearchEndpoint.configureSampleEndpoint = function () {
                // This OAuth token points to the workgroup used for samples.
                // It contains a set of harmless content sources.
                SearchEndpoint.endpoints["default"] = new SearchEndpoint({
                    restUri: 'https://cloudplatform.coveo.com/rest/search',
                    accessToken: '52d806a2-0f64-4390-a3f2-e0f41a4a73ec'
                });
            };
            SearchEndpoint.configureCloudEndpoint = function (workgroup, token, uri, otherOptions) {
                if (uri === void 0) { uri = 'https://cloudplatform.coveo.com/rest/search'; }
                var merged = SearchEndpoint.mergeConfigOptions({
                    restUri: uri,
                    accessToken: token,
                    queryStringArguments: {
                        workgroup: workgroup
                    }
                }, otherOptions);
                SearchEndpoint.endpoints["default"] = new SearchEndpoint(SearchEndpoint.removeUndefinedConfigOption(merged));
            };
            SearchEndpoint.configureOnPremiseEndpoint = function (uri, token, otherOptions) {
                var merged = SearchEndpoint.mergeConfigOptions({
                    restUri: uri,
                    accessToken: token
                }, otherOptions);
                SearchEndpoint.endpoints["default"] = new SearchEndpoint(SearchEndpoint.removeUndefinedConfigOption(merged));
            };
            SearchEndpoint.removeUndefinedConfigOption = function (config) {
                Coveo._.each(Coveo._.keys(config), function (key) {
                    if (config[key] == undefined) {
                        delete config[key];
                    }
                });
                return config;
            };
            SearchEndpoint.mergeConfigOptions = function (first, second) {
                first = SearchEndpoint.removeUndefinedConfigOption(first);
                second = SearchEndpoint.removeUndefinedConfigOption(second);
                return Coveo.$.extend({}, first, second);
            };
            SearchEndpoint.prototype.reset = function () {
                this.createEndpointCaller();
            };
            SearchEndpoint.isDebugArgumentPresent = function () {
                return /[?&]debug=1([&]|$)/.test(window.location.search);
            };
            SearchEndpoint.prototype.handleUnload = function () {
                this.isRedirecting = true;
            };
            SearchEndpoint.prototype.getBaseUri = function () {
                return this.options.restUri;
            };
            SearchEndpoint.prototype.getAuthenticationProviderUri = function (provider, returnUri, message) {
                var uri = this.buildBaseUri('/login/' + provider) + '?';
                if (Coveo.Utils.isNonEmptyString(returnUri)) {
                    uri += 'redirectUri=' + encodeURIComponent(returnUri);
                }
                else if (Coveo.Utils.isNonEmptyString(message)) {
                    uri += 'message=' + encodeURIComponent(message);
                }
                return uri;
            };
            SearchEndpoint.prototype.isJsonp = function () {
                return this.caller.useJsonp;
            };
            SearchEndpoint.prototype.search = function (query, callOptions) {
                var _this = this;
                Coveo.Assert.exists(query);
                this.logger.info('Performing REST query', query);
                callOptions = Coveo._.extend({}, callOptions);
                var params = {
                    url: this.buildBaseUri('/'),
                    queryString: this.buildBaseQueryString(callOptions),
                    requestData: query,
                    errorsAsSuccess: true,
                    responseType: 'text',
                    method: 'POST'
                };
                var deferred = this.callWithErrorHandling(params);
                deferred.done(function (results) {
                    _this.logger.info('REST query successful', results, query);
                    // Version check
                    // If the SearchAPI doesn't give us any apiVersion info, we assume version 1 (before apiVersion was implemented)
                    if (results.apiVersion == null) {
                        results.apiVersion = 1;
                    }
                    if (results.apiVersion < Coveo.version.supportedApiVersion) {
                        _this.logger.error('Please update your REST Search API');
                    }
                    // If the server specified no search ID generated one using the client-side
                    // GUID generator. We prefer server generated guids to allow tracking a query
                    // all the way from the analytics to the logs.
                    if (Coveo.Utils.isNullOrEmptyString(results.searchUid)) {
                        results.searchUid = Coveo.QueryUtils.createGuid();
                    }
                    Coveo.QueryUtils.setIndexAndUidOnQueryResults(query, results, results.searchUid, results.pipeline, results.splitTestRun);
                    Coveo.QueryUtils.setTermsToHighlightOnQueryResults(query, results);
                });
                return deferred;
            };
            SearchEndpoint.prototype.getRawDataStream = function (documentUniqueId, dataStreamType, callOptions) {
                var _this = this;
                Coveo.Assert.exists(documentUniqueId);
                callOptions = Coveo._.extend({}, callOptions);
                var params = {
                    url: this.buildBaseUri('/datastream'),
                    queryString: this.buildViewAsHtmlQueryString(documentUniqueId, callOptions).concat(["dataStream=" + dataStreamType]),
                    requestData: {},
                    errorsAsSuccess: false,
                    method: 'GET',
                    responseType: 'arraybuffer'
                };
                var deferred = this.callWithErrorHandling(params);
                this.logger.info('Performing REST query for datastream ' + dataStreamType + ' on document uniqueID' + documentUniqueId);
                deferred.done(function (results) { return _this.logger.info('REST query successful', results, documentUniqueId); });
                return deferred;
            };
            SearchEndpoint.prototype.getDocumentText = function (documentUniqueID, callOptions) {
                callOptions = Coveo._.extend({}, callOptions);
                var params = {
                    url: this.buildBaseUri("/text"),
                    queryString: this.buildViewAsHtmlQueryString(documentUniqueID, callOptions),
                    method: "GET",
                    requestData: {},
                    responseType: "text",
                    errorsAsSuccess: true
                };
                return this.callWithErrorHandling(params);
            };
            SearchEndpoint.prototype.getDocumentHtml = function (documentUniqueID, callOptions) {
                callOptions = Coveo._.extend({}, callOptions);
                var params = {
                    url: this.buildBaseUri('/html'),
                    queryString: this.buildViewAsHtmlQueryString(documentUniqueID, callOptions),
                    method: "GET",
                    requestData: {},
                    responseType: "document",
                    errorsAsSuccess: false
                };
                return this.callWithErrorHandling(params);
            };
            SearchEndpoint.prototype.getViewAsHtmlUri = function (documentUniqueID, callOptions) {
                callOptions = Coveo._.extend({}, callOptions);
                return this.buildViewAsHtmlUri("/html", documentUniqueID, callOptions);
            };
            SearchEndpoint.prototype.getViewAsDatastreamUri = function (documentUniqueID, dataStreamType, callOptions) {
                callOptions = Coveo._.extend({}, callOptions);
                return this.buildViewAsHtmlUri("/datastream", documentUniqueID, callOptions) + '&dataStream=' + encodeURIComponent(dataStreamType);
            };
            SearchEndpoint.prototype.batchFieldValues = function (request, callOptions) {
                var _this = this;
                Coveo.Assert.exists(request);
                callOptions = Coveo._.extend({}, callOptions);
                this.logger.info('Listing field values', request);
                var deferred = Coveo.$.Deferred();
                var params = {
                    url: this.buildBaseUri('/values'),
                    queryString: this.buildBaseQueryString(callOptions),
                    method: "POST",
                    requestData: request,
                    errorsAsSuccess: true,
                    responseType: 'text'
                };
                this.callWithErrorHandling(params).done(function (data) { return deferred.resolve(data.values); }).fail(function (data, error) { return deferred.reject(null, error); });
                deferred.done(function (fieldValues) { return _this.logger.info('REST list field values successful', fieldValues, request); });
                return deferred;
            };
            SearchEndpoint.prototype.listFieldValues = function (request, callOptions) {
                var _this = this;
                Coveo.Assert.exists(request);
                callOptions = Coveo._.extend({}, callOptions);
                this.logger.info('Listing field values', request);
                var deferred = Coveo.$.Deferred();
                var params = {
                    url: this.buildBaseUri('/values'),
                    queryString: this.buildBaseQueryString(callOptions),
                    method: "POST",
                    requestData: request,
                    errorsAsSuccess: true,
                    responseType: 'text'
                };
                this.callWithErrorHandling(params).done(function (data) { return deferred.resolve(data.values); }).fail(function (data, error) { return deferred.reject(null, error); });
                deferred.done(function (fieldValues) { return _this.logger.info('REST list field values successful', fieldValues, request); });
                return deferred;
            };
            SearchEndpoint.prototype.listFields = function (callOptions) {
                callOptions = Coveo._.extend({}, callOptions);
                this.logger.info('Listing fields');
                var deferred = Coveo.$.Deferred();
                var params = {
                    url: this.buildBaseUri('/fields'),
                    queryString: this.buildBaseQueryString(callOptions),
                    requestData: {},
                    method: "GET",
                    responseType: "text",
                    errorsAsSuccess: true
                };
                this.callWithErrorHandling(params).done(function (data) { return deferred.resolve(data.fields); }).fail(function (data, error) { return deferred.reject(null, error); });
                return deferred;
            };
            SearchEndpoint.prototype.extensions = function (callOptions) {
                callOptions = Coveo._.extend({}, callOptions);
                this.logger.info('Listing extensions');
                var params = {
                    url: this.buildBaseUri('/extensions'),
                    queryString: this.buildBaseQueryString(callOptions),
                    requestData: {},
                    method: "GET",
                    responseType: "text",
                    errorsAsSuccess: true
                };
                return this.callWithErrorHandling(params);
            };
            SearchEndpoint.prototype.rateDocument = function (ratingRequest, callOptions) {
                callOptions = Coveo._.extend({}, callOptions);
                this.logger.info('Rating a document', ratingRequest);
                var deferred = Coveo.$.Deferred();
                var params = {
                    url: this.buildBaseUri('/rating'),
                    queryString: this.buildBaseQueryString(callOptions),
                    method: 'POST',
                    requestData: ratingRequest,
                    errorsAsSuccess: false,
                    responseType: "text"
                };
                this.callWithErrorHandling(params).done(function () { return deferred.resolve(true); }).fail(function () { return deferred.reject(false); });
                return deferred;
            };
            SearchEndpoint.prototype.tagDocument = function (taggingRequest, callOptions) {
                callOptions = Coveo._.extend({}, callOptions);
                this.logger.info('Tagging a document', taggingRequest);
                var deferred = Coveo.$.Deferred();
                var params = {
                    url: this.buildBaseUri('/tag'),
                    queryString: this.buildBaseQueryString(callOptions),
                    method: 'POST',
                    requestData: taggingRequest,
                    errorsAsSuccess: false,
                    responseType: "text"
                };
                this.callWithErrorHandling(params).done(function () { return deferred.resolve(true); }).fail(function () { return deferred.reject(false); });
                return deferred;
            };
            SearchEndpoint.prototype.createEndpointCaller = function () {
                this.caller = new Rest.EndpointCaller(this.options);
            };
            SearchEndpoint.prototype.buildBaseUri = function (path) {
                Coveo.Assert.isString(path);
                var uri = this.options.restUri;
                uri = this.removeTrailingSlash(uri);
                uri += path;
                if (this.options.isOldRestAPI) {
                    uri = this.addTrailingSlash(uri);
                }
                return uri;
            };
            SearchEndpoint.prototype.buildBaseQueryString = function (callOptions) {
                var queryString = [];
                for (var name in this.options.queryStringArguments) {
                    queryString.push(name + '=' + encodeURIComponent(this.options.queryStringArguments[name]));
                }
                if (Coveo._.isArray(callOptions.authentication) && callOptions.authentication.length != 0) {
                    queryString.push('authentication=' + callOptions.authentication.join(','));
                }
                return queryString;
            };
            SearchEndpoint.prototype.buildViewAsHtmlUri = function (path, documentUniqueID, callOptions) {
                Coveo.Assert.isNonEmptyString(documentUniqueID);
                var queryString = this.buildViewAsHtmlQueryString(documentUniqueID, callOptions);
                // Since those uri will be loaded in a frame or tab, we must include any
                // authentication token as a query string argument instead of relying on
                // endpoint caller for this.
                if (Coveo.Utils.isNonEmptyString(this.options.accessToken)) {
                    queryString.push('access_token=' + encodeURIComponent(this.options.accessToken));
                }
                var baseUri = this.buildBaseUri(path);
                return baseUri + '?' + queryString.join('&');
            };
            SearchEndpoint.prototype.buildViewAsHtmlQueryString = function (uniqueId, callOptions) {
                var queryString = this.buildBaseQueryString(callOptions);
                queryString.push("uniqueId=" + encodeURIComponent(uniqueId));
                // In an ideal parallel reality, the entire query used in the 'search' call is used here.
                // In this reality however, we must support GET calls (ex: GET /html) for CORS/JSONP/IE reasons.
                // Therefore, we cherry-pick parts of the query to include in a 'query string' instead of a body payload.
                if (callOptions.queryObject) {
                    // Little static check for the little price of added instructions.
                    callOptions.queryObject.q;
                    callOptions.queryObject.aq;
                    callOptions.queryObject.cq;
                    callOptions.queryObject.dq;
                    callOptions.queryObject.searchHub;
                    callOptions.queryObject.tab;
                    callOptions.queryObject.language;
                    callOptions.queryObject.pipeline;
                    callOptions.queryObject.lowercaseOperators;
                    Coveo._.each(["q", "aq", "cq", "dq", "searchHub", "tab", "language", "pipeline", "lowercaseOperators"], function (key) {
                        if (callOptions.queryObject[key]) {
                            queryString.push(key + "=" + encodeURIComponent(callOptions.queryObject[key]));
                        }
                    });
                }
                else if (callOptions.query) {
                    queryString.push("q=" + encodeURIComponent(callOptions.query));
                }
                if (callOptions.query || callOptions.queryObject) {
                    queryString.push('enableNavigation=true');
                }
                if (callOptions.requestedOutputSize) {
                    queryString.push("requestedOutputSize=" + encodeURIComponent(callOptions.requestedOutputSize.toString()));
                }
                if (callOptions.contentType) {
                    queryString.push("contentType=" + encodeURIComponent(callOptions.contentType));
                }
                return queryString;
            };
            SearchEndpoint.prototype.callWithErrorHandling = function (params) {
                var deferred = Coveo.$.Deferred();
                this.performOneCall(params, deferred, true);
                return deferred;
            };
            SearchEndpoint.prototype.performOneCall = function (params, outerDeferred, autoRenewToken) {
                var _this = this;
                this.caller.call(params).done(function (response) {
                    response.data.clientDuration = response.duration;
                    outerDeferred.resolve(response.data, params.requestData);
                }).fail(function (response) {
                    if (autoRenewToken && _this.canRenewAccessToken() && _this.isAccessTokenExpiredStatus(response.statusCode)) {
                        _this.renewAccessToken().done(function () { return _this.performOneCall(params, outerDeferred, false); }).fail(function () { return _this.handleErrorResponse(response, outerDeferred); });
                    }
                    else if (response.statusCode == 0 && _this.isRedirecting) {
                        //The page is getting redirected
                        Coveo._.defer(function () {
                            outerDeferred.resolve();
                        });
                    }
                    else {
                        _this.handleErrorResponse(response, outerDeferred);
                    }
                });
            };
            SearchEndpoint.prototype.handleErrorResponse = function (errorResponse, outerDeferred) {
                if (this.isMissingAuthenticationProviderStatus(errorResponse.statusCode)) {
                    outerDeferred.reject(null, new Rest.MissingAuthenticationError(errorResponse.data['provider']));
                }
                else if (errorResponse.data && errorResponse.data.message) {
                    outerDeferred.reject(null, new Rest.QueryError(errorResponse));
                }
                else {
                    outerDeferred.reject(null, new Rest.AjaxError("Request Error", errorResponse.statusCode));
                }
            };
            SearchEndpoint.prototype.canRenewAccessToken = function () {
                return Coveo.Utils.isNonEmptyString(this.options.accessToken) && Coveo._.isFunction(this.options.renewAccessToken);
            };
            SearchEndpoint.prototype.isAccessTokenExpiredStatus = function (status) {
                return status == 419;
            };
            SearchEndpoint.prototype.renewAccessToken = function () {
                var _this = this;
                this.logger.info("Renewing expired access token");
                return this.options.renewAccessToken().done(function (token) {
                    Coveo.Assert.isNonEmptyString(token);
                    _this.options.accessToken = token;
                    _this.createEndpointCaller();
                }).fail(function (e) {
                    _this.logger.error("Failed to renew access token", e);
                });
            };
            SearchEndpoint.prototype.isMissingAuthenticationProviderStatus = function (status) {
                return status == 402;
            };
            SearchEndpoint.prototype.addTrailingSlash = function (uri) {
                if (!this.hasTrailingSlash(uri)) {
                    uri += "/";
                }
                return uri;
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
            SearchEndpoint.endpoints = {};
            return SearchEndpoint;
        })();
        Rest.SearchEndpoint = SearchEndpoint;
    })(Rest = Coveo.Rest || (Coveo.Rest = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Rest;
    (function (Rest) {
        var SearchEndpointWithDefaultCallOptions = (function () {
            function SearchEndpointWithDefaultCallOptions(endpoint, callOptions) {
                this.endpoint = endpoint;
                this.callOptions = callOptions;
                this.options = endpoint.options;
            }
            SearchEndpointWithDefaultCallOptions.prototype.getBaseUri = function () {
                return this.endpoint.getBaseUri();
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
            SearchEndpointWithDefaultCallOptions.prototype.tagDocument = function (taggingRequest, callOptions) {
                return this.endpoint.tagDocument(taggingRequest, this.enrichCallOptions(taggingRequest));
            };
            SearchEndpointWithDefaultCallOptions.prototype.rateDocument = function (ratingRequest, callOptions) {
                return this.endpoint.rateDocument(ratingRequest, this.enrichCallOptions(callOptions));
            };
            SearchEndpointWithDefaultCallOptions.prototype.getRawDataStream = function (documentUniqueId, dataStreamType, callOptions) {
                return this.endpoint.getRawDataStream(documentUniqueId, dataStreamType, this.enrichCallOptions(callOptions));
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
            SearchEndpointWithDefaultCallOptions.prototype.enrichCallOptions = function (callOptions) {
                return Coveo._.extend({}, callOptions, this.callOptions);
            };
            return SearchEndpointWithDefaultCallOptions;
        })();
        Rest.SearchEndpointWithDefaultCallOptions = SearchEndpointWithDefaultCallOptions;
    })(Rest = Coveo.Rest || (Coveo.Rest = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var CoveoJQuery = (function () {
            function CoveoJQuery() {
            }
            CoveoJQuery.registerDefaultOptions = function (element, options) {
                var existing = Coveo.$(element).data('CoveoDefaultOptions') || {};
                var updated = Coveo.$.extend(true, {}, existing, options);
                Coveo.$(element).data('CoveoDefaultOptions', updated);
            };
            CoveoJQuery.resolveDefaultOptions = function (element, options) {
                var optionsForThisElement = Coveo.$(element).data('CoveoDefaultOptions');
                var optionsSoFar;
                if (Coveo.Utils.exists(optionsForThisElement)) {
                    optionsSoFar = Coveo.$.extend(true, {}, optionsForThisElement, options);
                }
                else {
                    optionsSoFar = options;
                }
                if (element.parentElement) {
                    return CoveoJQuery.resolveDefaultOptions(element.parentElement, optionsSoFar);
                }
                else {
                    return optionsSoFar;
                }
            };
            CoveoJQuery.registerAutoCreateComponent = function (componentClass) {
                Coveo.Assert.exists(componentClass);
                Coveo.Assert.exists(componentClass.ID);
                Coveo.Assert.doesNotExists(CoveoJQuery.autoCreateComponents[componentClass.ID]);
                Coveo.Assert.doesNotExists(CoveoJQuery.namedMethods[componentClass.ID]);
                CoveoJQuery.autoCreateComponents[componentClass.ID] = componentClass;
            };
            CoveoJQuery.isComponentClassIdRegistered = function (componentClassId) {
                return Coveo.Utils.exists(CoveoJQuery.autoCreateComponents[componentClassId]);
            };
            CoveoJQuery.getListOfRegistredComponents = function () {
                return Coveo._.keys(CoveoJQuery.autoCreateComponents);
            };
            CoveoJQuery.getRegistredComponent = function (name) {
                return CoveoJQuery.autoCreateComponents[name];
            };
            CoveoJQuery.initializeFramework = function (element, options, initSearchInterfaceFunction) {
                Coveo.Assert.exists(element);
                this.logger.info("Internal Coveo JQuery version", Coveo.$.fn.jquery);
                if (Coveo.DeviceUtils.isIE8or9())
                    Coveo.$('html').addClass('ie8or9');
                options = CoveoJQuery.resolveDefaultOptions(element, options);
                CoveoJQuery.performInitFunctionsOption(options, Coveo.Events.InitializationEvents.beforeInitialization);
                Coveo.$(element).trigger(Coveo.Events.InitializationEvents.beforeInitialization);
                initSearchInterfaceFunction(element, options);
                CoveoJQuery.initExternalComponents(element, options);
                CoveoJQuery.performInitFunctionsOption(options, Coveo.Events.InitializationEvents.afterComponentsInitialization);
                Coveo.$(element).trigger(Coveo.Events.InitializationEvents.afterComponentsInitialization);
                Coveo.$(element).trigger(Coveo.Events.InitializationEvents.restoreHistoryState);
                CoveoJQuery.performInitFunctionsOption(options, Coveo.Events.InitializationEvents.afterInitialization);
                Coveo.$(element).trigger(Coveo.Events.InitializationEvents.afterInitialization);
                var searchInterface = Ui.Component.get(element, Ui.SearchInterface);
                // Elements that have the coveo-hide-until-loaded class are hidden by default.
                // Now that we're loaded (and before the first query returns), we can remove
                // the class. Also, we add a class that gives the opportunity for an animation
                // to apply at startup, such as a fade-in that comes in by default.
                Coveo.$('.coveo-hide-until-loaded').removeClass('coveo-hide-until-loaded').addClass('coveo-show-after-loaded');
                if (searchInterface.options.autoTriggerQuery) {
                    Ui.CoveoJQuery.logFirstQueryCause(searchInterface);
                    Ui.Component.get(element, Coveo.Controllers.QueryController).executeQuery();
                }
            };
            CoveoJQuery.logFirstQueryCause = function (searchInterface) {
                var firstQueryCause = Coveo.HashUtils.getValue('firstQueryCause', Coveo.HashUtils.getHash());
                if (firstQueryCause != null) {
                    var meta = Coveo.HashUtils.getValue('firstQueryMeta', Coveo.HashUtils.getHash()) || {};
                    searchInterface.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList[firstQueryCause], meta);
                }
                else {
                    if (Coveo.Utils.isNonEmptyString(searchInterface.getBindings().queryStateModel.get('q'))) {
                        searchInterface.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.searchFromLink, {});
                    }
                    else {
                        searchInterface.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.interfaceLoad, {});
                    }
                }
            };
            CoveoJQuery.performInitFunctionsOption = function (options, event) {
                if (Coveo.Utils.exists(options)) {
                    CoveoJQuery.performFunctions(options[event]);
                }
            };
            CoveoJQuery.performPreInitFunctions = function (options) {
                if (Coveo.Utils.exists(options)) {
                    CoveoJQuery.performFunctions(options[Coveo.Events.InitializationEvents.beforeInitialization]);
                }
            };
            CoveoJQuery.performPostInitFunction = function (options) {
                if (Coveo.Utils.exists(options)) {
                    CoveoJQuery.performFunctions(options[Coveo.Events.InitializationEvents.afterInitialization]);
                }
            };
            CoveoJQuery.performFunctions = function (option) {
                if (Coveo.Utils.exists(option)) {
                    Coveo._.each(option, function (func) {
                        if (typeof func == "function") {
                            func();
                        }
                    });
                }
            };
            CoveoJQuery.initSearchInterface = function (element, options) {
                if (options === void 0) { options = {}; }
                options = CoveoJQuery.resolveDefaultOptions(element, options);
                var searchInterface = new Ui.SearchInterface(element, options.SearchInterface, options.Analytics);
                searchInterface.options.originalOptionsObject = options;
                var initParameters = { options: options, bindings: searchInterface.getBindings() };
                CoveoJQuery.automaticallyCreateComponentsInside(element, initParameters);
            };
            CoveoJQuery.initStandaloneSearchInterface = function (element, options) {
                if (options === void 0) { options = {}; }
                options = CoveoJQuery.resolveDefaultOptions(element, options);
                var searchInterface = new Ui.StandaloneSearchInterface(element, options.StandaloneSearchInterface, options.Analytics);
                searchInterface.options.originalOptionsObject = options;
                var initParameters = { options: options, bindings: searchInterface.getBindings() };
                CoveoJQuery.automaticallyCreateComponentsInside(element, initParameters);
            };
            CoveoJQuery.initBoxInterface = function (element, options, type, injectMarkup) {
                if (options === void 0) { options = {}; }
                if (type === void 0) { type = "Standard"; }
                if (injectMarkup === void 0) { injectMarkup = true; }
                options = CoveoJQuery.resolveDefaultOptions(element, options);
                var fromInitTypeToBoxReference = "Box";
                if (type != "Standard") {
                    fromInitTypeToBoxReference += "For" + type;
                }
                var boxRef = Coveo.Ui.Component.getComponentRef(fromInitTypeToBoxReference);
                if (boxRef) {
                    new Coveo.Logger(element).info('Initializing box of type ' + fromInitTypeToBoxReference);
                    var injectFunction = injectMarkup ? boxRef.getInjection : function () {
                    };
                    var box = new boxRef(element, options[fromInitTypeToBoxReference], options.Analytics, injectFunction, options);
                    box.options.originalOptionsObject = options;
                    var initParameters = { options: options, bindings: box.getBindings() };
                    CoveoJQuery.automaticallyCreateComponentsInside(element, initParameters);
                }
                else {
                    new Coveo.Logger(element).error("Trying to initialize box of type : " + fromInitTypeToBoxReference + " but not found in code (not compiled)!");
                    Coveo.Assert.fail('Cannot initialize unknown type of box');
                }
            };
            CoveoJQuery.initExternalComponents = function (element, options) {
                if (options && options["externalComponents"]) {
                    var searchInterface = Coveo.$(element).coveo(Coveo.Ui.SearchInterface);
                    var queryStateModel = Coveo.$(element).coveo(Coveo.Models.QueryStateModel);
                    var componentStateModel = Coveo.$(element).coveo(Coveo.Models.ComponentStateModel);
                    var queryController = Coveo.$(element).coveo(Coveo.Controllers.QueryController);
                    var componentOptionsModel = Coveo.$(element).coveo(Coveo.Models.ComponentOptionsModel);
                    var usageAnalytics = searchInterface.usageAnalytics;
                    Coveo.Assert.exists(searchInterface);
                    Coveo.Assert.exists(queryStateModel);
                    Coveo.Assert.exists(queryController);
                    Coveo.Assert.exists(componentStateModel);
                    Coveo.Assert.exists(usageAnalytics);
                    var initParameters = {
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
                    Coveo._.each(options["externalComponents"], function (externalComponent) {
                        var elementToInstantiate = externalComponent;
                        if (elementToInstantiate instanceof Coveo.$) {
                            elementToInstantiate = Coveo.$(elementToInstantiate).get(0);
                        }
                        if (Coveo.Utils.isHtmlElement(elementToInstantiate)) {
                            CoveoJQuery.automaticallyCreateComponentsInside(elementToInstantiate, initParameters);
                        }
                    });
                }
            };
            CoveoJQuery.automaticallyCreateComponentsInside = function (element, initParameters, ignore) {
                Coveo.Assert.exists(element);
                var codeToExecute = [];
                for (var componentClassId in CoveoJQuery.autoCreateComponents) {
                    if (!Coveo._.contains(ignore, componentClassId)) {
                        var componentClass = CoveoJQuery.autoCreateComponents[componentClassId];
                        var classname = Ui.Component.computeCssClassNameForType(componentClass.ID);
                        var elements = Coveo.$(element).find('.' + classname);
                        if (Coveo.$(element).hasClass(classname)) {
                            elements = elements.add(element);
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
                            //
                            // Oh, and the call to a separate function is to work around JavaScript
                            // shocking lack of block scope. One day it'll support the let keyword.
                            codeToExecute.push(CoveoJQuery.createFunctionThatInitializesComponentOnElements(elements, componentClassId, componentClass, initParameters));
                        }
                    }
                }
                // Now that all selectors are executed, let's really initialize the components.
                Coveo._.each(codeToExecute, function (code) { return code(); });
            };
            CoveoJQuery.createFunctionThatInitializesComponentOnElements = function (elements, componentClassId, componentClass, initParameters) {
                return function () {
                    elements.each(function (index, matchingElement) {
                        if (Ui.Component.get(matchingElement, componentClassId) == null) {
                            // If options were provided, lookup options for this component class and
                            // also for the element id. Merge them and pass those to the factory method.
                            var optionsToUse = undefined;
                            if (Coveo.Utils.exists(initParameters.options)) {
                                var optionsForComponentClass = initParameters.options[componentClassId];
                                var optionsForElementId = initParameters.options[matchingElement.id];
                                var initOptions = initParameters.options["initOptions"] ? initParameters.options["initOptions"][componentClassId] : {};
                                optionsToUse = Coveo.$.extend({}, optionsForComponentClass, optionsForElementId, initOptions);
                            }
                            var initParamToUse = Coveo.$.extend({}, initParameters, { options: optionsToUse });
                            CoveoJQuery.createComponentOfThisClassOnElement(componentClass.ID, matchingElement, initParamToUse);
                        }
                    });
                };
            };
            CoveoJQuery.createComponentOfThisClassOnElement = function (componentClassId, element, initParameters) {
                Coveo.Assert.isNonEmptyString(componentClassId);
                Coveo.Assert.exists(element);
                var componentClass = CoveoJQuery.autoCreateComponents[componentClassId];
                Coveo.Assert.exists(componentClass);
                var bindings = {};
                var options = {};
                var result = undefined;
                if (initParameters != undefined) {
                    Coveo._.each(initParameters.bindings, function (value, key) {
                        bindings[key] = value;
                    });
                    options = initParameters.options;
                    result = initParameters.result;
                }
                CoveoJQuery.logger.trace('Creating component of class ' + componentClassId, element, options);
                return new componentClass(element, options, bindings, result);
            };
            CoveoJQuery.registerNamedMethod = function (methodName, handler) {
                Coveo.Assert.isNonEmptyString(methodName);
                Coveo.Assert.doesNotExists(CoveoJQuery.autoCreateComponents[methodName]);
                Coveo.Assert.doesNotExists(CoveoJQuery.namedMethods[methodName]);
                Coveo.Assert.exists(handler);
                CoveoJQuery.namedMethods[methodName] = handler;
            };
            CoveoJQuery.isNamedMethodRegistered = function (methodName) {
                return Coveo.Utils.exists(CoveoJQuery.namedMethods[methodName]);
            };
            CoveoJQuery.dispatchNamedMethodCall = function (methodName, element, args) {
                Coveo.Assert.isNonEmptyString(methodName);
                Coveo.Assert.exists(element);
                var namedMethodHandler = CoveoJQuery.namedMethods[methodName];
                Coveo.Assert.exists(namedMethodHandler);
                CoveoJQuery.logger.trace('Dispatching named method call of ' + methodName, element, args);
                return namedMethodHandler.apply(null, [element].concat(args));
            };
            CoveoJQuery.isThereASingleComponentBoundToThisElement = function (element) {
                Coveo.Assert.exists(element);
                return Coveo.Utils.exists(Ui.Component.get(element));
            };
            CoveoJQuery.dispatchMethodCallOnBoundComponent = function (methodName, element, args) {
                Coveo.Assert.isNonEmptyString(methodName);
                Coveo.Assert.exists(element);
                var boundComponent = Ui.Component.get(element);
                Coveo.Assert.exists(boundComponent);
                var method = boundComponent[methodName];
                if (Coveo.Utils.exists(method)) {
                    return method.apply(boundComponent, args);
                }
                else {
                    Coveo.Assert.fail('No method named ' + methodName + ' exist on component ' + boundComponent.type);
                }
            };
            CoveoJQuery.dispatchNamedMethodCallOrComponentCreation = function (token, element, args) {
                Coveo.Assert.isNonEmptyString(token);
                Coveo.Assert.exists(element);
                if (CoveoJQuery.isNamedMethodRegistered(token)) {
                    return CoveoJQuery.dispatchNamedMethodCall(token, element, args);
                }
                else if (CoveoJQuery.isComponentClassIdRegistered(token)) {
                    return CoveoJQuery.createComponentOfThisClassOnElement(token, element, args[0]);
                }
                else if (CoveoJQuery.isThereASingleComponentBoundToThisElement(element)) {
                    return CoveoJQuery.dispatchMethodCallOnBoundComponent(token, element, args);
                }
                else {
                    Coveo.Assert.fail('No method or component named ' + token + ' are registered.');
                }
            };
            CoveoJQuery.monkeyPatchComponentMethod = function (methodName, element, handler) {
                Coveo.Assert.isNonEmptyString(methodName);
                Coveo.Assert.exists(handler);
                var componentClass;
                if (methodName.indexOf('.') > 0) {
                    var splitArg = methodName.split(".");
                    Coveo.Assert.check(splitArg.length == 2, "Invalid method name, correct syntax is CoveoComponent.methodName.");
                    componentClass = splitArg[0];
                    methodName = splitArg[1];
                }
                var boundComponent = Ui.Component.get(element, componentClass);
                Coveo.Assert.exists(boundComponent);
                Coveo.Assert.exists(boundComponent[methodName]);
                var originalMethodName = '__' + methodName;
                if (!Coveo.Utils.exists(boundComponent[originalMethodName])) {
                    boundComponent[originalMethodName] = boundComponent[methodName];
                }
                boundComponent[methodName] = handler;
            };
            CoveoJQuery.noConflict = function () {
                Coveo.$ = jQuery.noConflict(true);
                window["$"].fn.coveo = Coveo.$.fn.coveo;
            };
            CoveoJQuery.logger = new Coveo.Logger('JQuery');
            CoveoJQuery.autoCreateComponents = {};
            CoveoJQuery.namedMethods = {};
            return CoveoJQuery;
        })();
        Ui.CoveoJQuery = CoveoJQuery;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
$.fn.coveo = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    var returnValue;
    this.each(function (index, element) {
        var returnValueForThisElement;
        if (_.isString(args[0])) {
            var token = args[0];
            returnValueForThisElement = Coveo.Ui.CoveoJQuery.dispatchNamedMethodCallOrComponentCreation(token, element, args.slice(1));
        }
        else {
            // Invoking with no method name is a shortcut for the 'get' method (from Component).
            returnValueForThisElement = Coveo.Ui.CoveoJQuery.dispatchNamedMethodCall('get', element, args);
        }
        // Keep only the first return value we encounter
        returnValue = returnValue || returnValueForThisElement;
    });
    return returnValue;
};
Coveo.Ui.CoveoJQuery.registerNamedMethod('options', function (element, options) {
    if (options === void 0) { options = {}; }
    Coveo.Ui.CoveoJQuery.registerDefaultOptions(element, options);
});
Coveo.Ui.CoveoJQuery.registerNamedMethod('init', function (element, options) {
    if (options === void 0) { options = {}; }
    Coveo.Ui.CoveoJQuery.initializeFramework(element, options, function () {
        Coveo.Ui.CoveoJQuery.initSearchInterface(element, options);
    });
});
Coveo.Ui.CoveoJQuery.registerNamedMethod('initBox', function (element) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var type, options = {}, injectMarkup;
    //This means : initBox, no type (no injection) and no options
    if (args.length == 0) {
        type = "Standard";
        injectMarkup = false;
    }
    else if (args.length == 1) {
        //This mean a type (with injection) and no options
        if (typeof args[0] == "string") {
            type = args[0];
            injectMarkup = true;
        }
        else if (typeof args[0] == "object") {
            type = "Standard";
            injectMarkup = false;
            options = args[0];
        }
        else {
            Coveo.Assert.fail('Invalid parameters to init a box');
        }
    }
    else if (args.length == 2) {
        type = args[0];
        options = args[1];
        injectMarkup = true;
    }
    var merged = {};
    merged[type || "Container"] = _.extend({}, options.SearchInterface, options[type]);
    options = _.extend({}, options, merged);
    Coveo.Ui.CoveoJQuery.initializeFramework(element, options, function () {
        Coveo.Ui.CoveoJQuery.initBoxInterface(element, options, type, injectMarkup);
    });
});
Coveo.Ui.CoveoJQuery.registerNamedMethod('initSearchBox', function (element, searchPageUri, options) {
    if (options === void 0) { options = {}; }
    Coveo.Assert.isNonEmptyString(searchPageUri);
    var searchInterfaceOptions = {};
    searchInterfaceOptions.searchPageUri = searchPageUri;
    searchInterfaceOptions.autoTriggerQuery = false;
    searchInterfaceOptions.hideUntilFirstQuery = false;
    searchInterfaceOptions.enableHistory = false;
    options = _.extend({}, options, { StandaloneSearchInterface: searchInterfaceOptions });
    Coveo.Ui.CoveoJQuery.initializeFramework(element, options, function () {
        Coveo.Ui.CoveoJQuery.initStandaloneSearchInterface(element, options);
    });
});
Coveo.Ui.CoveoJQuery.registerNamedMethod('patch', function (element, methodName, handler) {
    Coveo.Ui.CoveoJQuery.monkeyPatchComponentMethod(methodName, element, handler);
});
Coveo.Ui.CoveoJQuery.registerNamedMethod('noConflict', function () {
    Coveo.Ui.CoveoJQuery.noConflict();
});
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var Component = (function () {
            function Component(element, type, bindings) {
                var _this = this;
                if (bindings === void 0) { bindings = {}; }
                this.element = element;
                this.type = type;
                this.disabled = false;
                this.bind = new Ui.ComponentEvents(this);
                Coveo.Assert.exists(element);
                Coveo.Assert.isNonEmptyString(type);
                Component.bindComponentToElement(this.element, this);
                this.logger = new Coveo.Logger(this);
                this.root = bindings.root || this.resolveRoot();
                this.queryStateModel = bindings.queryStateModel || this.resolveQueryStateModel();
                this.componentStateModel = bindings.componentStateModel || this.resolveComponentStateModel();
                this.queryController = bindings.queryController || this.resolveQueryController();
                this.searchInterface = bindings.searchInterface || this.resolveSearchInterface();
                this.usageAnalytics = bindings.usageAnalytics || this.resolveUA();
                this.componentOptionsModel = bindings.componentOptionsModel || this.resolveComponentOptionsModel();
                this.ensureDom = Coveo._.once(function () { return _this.createDom(); });
                if (this.searchInterface != null) {
                    this.searchInterface.attachComponent(type, this);
                }
            }
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
            Component.prototype.enable = function () {
                this.disabled = false;
            };
            Component.prototype.disable = function () {
                this.disabled = true;
            };
            Component.prototype.createDom = function () {
                // By default we do nothing
            };
            Component.prototype.resolveSearchInterface = function () {
                return Component.resolveBinding(this.element, Ui.SearchInterface);
            };
            Component.prototype.resolveRoot = function (defaultValue) {
                var resolvedSearchInterface = Component.resolveBinding(this.element, Ui.SearchInterface);
                return resolvedSearchInterface ? resolvedSearchInterface.element : defaultValue;
            };
            Component.prototype.resolveQueryController = function (defaultValue) {
                return Component.resolveBinding(this.element, Coveo.Controllers.QueryController) || defaultValue;
            };
            Component.prototype.resolveComponentStateModel = function (defaultValue) {
                return Component.resolveBinding(this.element, Coveo.Models.ComponentStateModel) || defaultValue;
            };
            Component.prototype.resolveQueryStateModel = function (defaultValue) {
                return Component.resolveBinding(this.element, Coveo.Models.QueryStateModel) || defaultValue;
            };
            Component.prototype.resolveComponentOptionsModel = function (defaultValue) {
                return Component.resolveBinding(this.element, Coveo.Models.ComponentOptionsModel) || defaultValue;
            };
            Component.prototype.resolveUA = function () {
                var searchInterface = this.resolveSearchInterface();
                return (searchInterface && searchInterface.usageAnalytics) ? searchInterface.usageAnalytics : new Ui.NoopAnalyticsClient();
            };
            Component.prototype.resolveResultElement = function () {
                return Coveo.$(this.element).closest('.CoveoResult');
            };
            Component.prototype.resolveResult = function () {
                // TODO: We need more generic binding but that'll do for now
                var resultElement = this.resolveResultElement();
                Coveo.Assert.check(resultElement.length == 1);
                return resultElement.data('CoveoResult');
            };
            Component.prototype.isInstanceOf = function (component) {
                return Component.getComponentRef(component) && this instanceof Coveo.Ui[component];
            };
            Component.getComponentRef = function (component) {
                return Coveo.Ui[component];
            };
            Component.get = function (element, componentClass, noThrow) {
                Coveo.Assert.exists(element);
                if (Coveo._.isString(componentClass)) {
                    return element[Component.computeMemberNameForType(componentClass)];
                }
                else if (Coveo.Utils.exists(componentClass)) {
                    Coveo.Assert.exists(componentClass.ID);
                    return element[Component.computeMemberNameForType(componentClass.ID)];
                }
                else {
                    // No class specified, but we support returning the bound component
                    // if there is exactly one.
                    var boundComponents = Component.getBoundComponentsForElement(element);
                    if (!noThrow) {
                        Coveo.Assert.check(boundComponents.length <= 1, 'More than one component is bound to this element. You need to specify the component type.');
                    }
                    return boundComponents[0];
                }
            };
            Component.bindComponentToElement = function (element, component) {
                Coveo.Assert.exists(element);
                Coveo.Assert.exists(component);
                Coveo.Assert.isNonEmptyString(component.type);
                element[Component.computeMemberNameForType(component.type)] = component;
                Coveo.$(element).addClass(Component.computeCssClassNameForType(component.type));
                Component.getBoundComponentsForElement(element).push(component);
            };
            Component.bindResultToElement = function (element, result) {
                Coveo.Assert.exists(element);
                Coveo.Assert.exists(result);
                Coveo.$(element).addClass('CoveoResult').data('CoveoResult', result);
                element['CoveoResult'] = result;
            };
            Component.resolveBinding = function (element, componentClass) {
                Coveo.Assert.exists(element);
                Coveo.Assert.exists(componentClass);
                Coveo.Assert.exists(componentClass.ID);
                var foundElement = Coveo.$(element).closest('.' + Component.computeCssClassNameForType(componentClass.ID));
                if (foundElement.length == 0) {
                    return undefined;
                }
                return foundElement.get(0)[Component.computeMemberNameForType(componentClass.ID)];
            };
            Component.computeCssClassNameForType = function (type) {
                Coveo.Assert.isNonEmptyString(type);
                return 'Coveo' + type;
            };
            Component.computeSelectorForType = function (type) {
                Coveo.Assert.isNonEmptyString(type);
                return '.' + Component.computeCssClassNameForType(type);
            };
            Component.computeMemberNameForType = function (type) {
                Coveo.Assert.isNonEmptyString(type);
                return 'Coveo' + type;
            };
            Component.pointElementsToDummyForm = function (selector) {
                selector.add(selector.find('*')).filter('input').attr('form', 'coveo-dummy-form');
            };
            Component.getBoundComponentsForElement = function (element) {
                Coveo.Assert.exists(element);
                if (element.CoveoBoundComponents == null) {
                    element.CoveoBoundComponents = [];
                }
                return element.CoveoBoundComponents;
            };
            return Component;
        })();
        Ui.Component = Component;
        Ui.CoveoJQuery.registerNamedMethod('get', function (element, componentClass) {
            Coveo.Assert.exists(element);
            return Component.get(element, componentClass);
        });
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var ComponentEvents = (function () {
            function ComponentEvents(owner) {
                this.owner = owner;
                Coveo.Assert.exists(owner);
            }
            ComponentEvents.prototype.on = function (selector, event, handler) {
                selector.on(event, this.wrapToCallIfEnabled(handler));
            };
            ComponentEvents.prototype.onRoot = function (event, handler) {
                this.on(Coveo.$(this.owner.root), event, handler);
            };
            ComponentEvents.prototype.fastClick = function (selector, handler) {
                selector.fastClick(this.wrapToCallIfEnabled(handler));
            };
            ComponentEvents.prototype.trigger = function (selector, event, args) {
                this.wrapToCallIfEnabled(function () {
                    selector.trigger(event, args);
                });
            };
            ComponentEvents.prototype.wrapToCallIfEnabled = function (func) {
                var _this = this;
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i - 0] = arguments[_i];
                    }
                    if (!_this.owner.disabled) {
                        return func.apply(_this.owner, args);
                    }
                };
            };
            return ComponentEvents;
        })();
        Ui.ComponentEvents = ComponentEvents;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var ComponentOptions;
        (function (ComponentOptions) {
            (function (Type) {
                Type[Type["BOOLEAN"] = 0] = "BOOLEAN";
                Type[Type["NUMBER"] = 1] = "NUMBER";
                Type[Type["STRING"] = 2] = "STRING";
                Type[Type["LOCALIZED_STRING"] = 3] = "LOCALIZED_STRING";
                Type[Type["LIST"] = 4] = "LIST";
                Type[Type["SELECTOR"] = 5] = "SELECTOR";
                Type[Type["CHILD_HTML_ELEMENT"] = 6] = "CHILD_HTML_ELEMENT";
                Type[Type["TEMPLATE"] = 7] = "TEMPLATE";
                Type[Type["FIELD"] = 8] = "FIELD";
                Type[Type["ICON"] = 9] = "ICON";
                Type[Type["OBJECT"] = 10] = "OBJECT";
                Type[Type["QUERY"] = 11] = "QUERY";
                Type[Type["HELPER"] = 12] = "HELPER";
                Type[Type["LONG_STRING"] = 13] = "LONG_STRING";
                Type[Type["JSON"] = 14] = "JSON";
                Type[Type["JAVASCRIPT"] = 15] = "JAVASCRIPT";
                Type[Type["NONE"] = 16] = "NONE";
            })(ComponentOptions.Type || (ComponentOptions.Type = {}));
            var Type = ComponentOptions.Type;
            function buildBooleanOption(optionArgs) {
                return buildOption(0 /* BOOLEAN */, loadBooleanOption, optionArgs);
            }
            ComponentOptions.buildBooleanOption = buildBooleanOption;
            function buildNumberOption(optionArgs) {
                return buildOption(1 /* NUMBER */, loadNumberOption, optionArgs);
            }
            ComponentOptions.buildNumberOption = buildNumberOption;
            function buildStringOption(optionArgs) {
                return buildOption(2 /* STRING */, loadStringOption, optionArgs);
            }
            ComponentOptions.buildStringOption = buildStringOption;
            function buildIconOption(optionArgs) {
                return buildOption(9 /* ICON */, loadStringOption, optionArgs);
            }
            ComponentOptions.buildIconOption = buildIconOption;
            function buildHelperOption(optionArgs) {
                return buildOption(12 /* HELPER */, loadStringOption, optionArgs);
            }
            ComponentOptions.buildHelperOption = buildHelperOption;
            function buildJsonOption(optionArgs) {
                return buildOption(14 /* JSON */, loadStringOption, optionArgs);
            }
            ComponentOptions.buildJsonOption = buildJsonOption;
            function buildLocalizedStringOption(optionArgs) {
                return buildOption(3 /* LOCALIZED_STRING */, loadLocalizedStringOption, optionArgs);
            }
            ComponentOptions.buildLocalizedStringOption = buildLocalizedStringOption;
            function buildFieldOption(optionArgs) {
                return buildOption(8 /* FIELD */, loadFieldOption, optionArgs);
            }
            ComponentOptions.buildFieldOption = buildFieldOption;
            function buildListOption(optionArgs) {
                return buildOption(4 /* LIST */, loadListOption, optionArgs);
            }
            ComponentOptions.buildListOption = buildListOption;
            function buildSelectorOption(optionArgs) {
                return buildOption(5 /* SELECTOR */, loadSelectorOption, optionArgs);
            }
            ComponentOptions.buildSelectorOption = buildSelectorOption;
            function buildChildHtmlElementOption(optionArgs) {
                return buildOption(6 /* CHILD_HTML_ELEMENT */, loadChildHtmlElementOption, optionArgs);
            }
            ComponentOptions.buildChildHtmlElementOption = buildChildHtmlElementOption;
            function buildTemplateOption(optionArgs) {
                return buildOption(7 /* TEMPLATE */, loadTemplateOption, optionArgs);
            }
            ComponentOptions.buildTemplateOption = buildTemplateOption;
            function buildCustomOption(converter, optionArgs) {
                var loadOption = function (element, name, option) {
                    var stringvalue = loadStringOption(element, name, option);
                    return converter(stringvalue);
                };
                return buildOption(2 /* STRING */, loadOption, optionArgs);
            }
            ComponentOptions.buildCustomOption = buildCustomOption;
            function buildCustomListOption(converter, optionArgs) {
                var loadOption = function (element, name, option) {
                    var stringvalue = loadListOption(element, name, option);
                    return converter(stringvalue);
                };
                return buildOption(4 /* LIST */, loadOption, optionArgs);
            }
            ComponentOptions.buildCustomListOption = buildCustomListOption;
            function buildObjectOption(optionArgs) {
                var loadOption = function (element, name, option) {
                    var keys = Coveo._.keys(optionArgs.subOptions);
                    var scopedOptions = {};
                    var scopedValues = {};
                    for (var i = 0; i < keys.length; i++) {
                        var key = keys[i];
                        var scopedkey = mergeCamelCase(name, key);
                        scopedOptions[scopedkey] = optionArgs.subOptions[key];
                    }
                    initOptions(element, scopedOptions, scopedValues);
                    var resultValues = {};
                    for (var i = 0; i < keys.length; i++) {
                        var key = keys[i];
                        var scopedkey = mergeCamelCase(name, key);
                        if (scopedValues[scopedkey] != null) {
                            resultValues[key] = scopedValues[scopedkey];
                        }
                    }
                    return Coveo._.keys(resultValues).length > 0 ? resultValues : null;
                };
                return buildOption(10 /* OBJECT */, loadOption, optionArgs);
            }
            ComponentOptions.buildObjectOption = buildObjectOption;
            function buildOption(type, load, optionArg) {
                if (optionArg === void 0) { optionArg = {}; }
                var option = optionArg;
                option.type = type;
                option.load = load;
                return option;
            }
            ComponentOptions.buildOption = buildOption;
            function attrNameFromName(name, optionArgs) {
                if (optionArgs && optionArgs.attrName) {
                    return optionArgs.attrName;
                }
                return 'data-' + camelCaseToHyphen(name);
            }
            ComponentOptions.attrNameFromName = attrNameFromName;
            function camelCaseToHyphen(name) {
                return name.replace(/([A-Z])/g, "-$1").toLowerCase();
            }
            ComponentOptions.camelCaseToHyphen = camelCaseToHyphen;
            function mergeCamelCase(parent, name) {
                return parent + name.substr(0, 1).toUpperCase() + name.substr(1);
            }
            ComponentOptions.mergeCamelCase = mergeCamelCase;
            function initComponentOptions(element, component, values) {
                return initOptions(element, component.options, values);
            }
            ComponentOptions.initComponentOptions = initComponentOptions;
            function initOptions(element, options, values) {
                if (values == null) {
                    values = {};
                }
                var names = Coveo._.keys(options);
                for (var i = 0; i < names.length; i++) {
                    var name = names[i];
                    var optionDefinition = options[name];
                    var attrName = optionDefinition.attrName || attrNameFromName(name, optionDefinition);
                    var value;
                    var loadFromAttribute = optionDefinition.load;
                    if (loadFromAttribute != null) {
                        value = loadFromAttribute(element, name, optionDefinition);
                    }
                    if (value == null && values[name] == undefined) {
                        if (optionDefinition.defaultValue != null) {
                            if (optionDefinition.type == 4 /* LIST */) {
                                value = Coveo._.extend([], optionDefinition.defaultValue);
                            }
                            else if (optionDefinition.type == 10 /* OBJECT */) {
                                value = Coveo._.extend({}, optionDefinition.defaultValue);
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
                        if (optionDefinition.type == 10 /* OBJECT */ && values[name] != null) {
                            values[name] = Coveo._.extend(values[name], value);
                        }
                        else {
                            values[name] = value;
                        }
                    }
                }
                for (var i = 0; i < names.length; i++) {
                    var name = names[i];
                    var optionDefinition = options[name];
                    if (optionDefinition.postProcessing) {
                        values[name] = optionDefinition.postProcessing(values[name], values);
                    }
                }
                return values;
            }
            ComponentOptions.initOptions = initOptions;
            function loadStringOption(element, name, option) {
                return Coveo.$(element).attr(attrNameFromName(name, option));
            }
            ComponentOptions.loadStringOption = loadStringOption;
            function loadFieldOption(element, name, option) {
                var field = loadStringOption(element, name, option);
                Coveo.Assert.check(!Coveo.Utils.isNonEmptyString(field) || Coveo.Utils.isCoveoField(field), field + ' is not a valid field');
                return field != null ? field.toLowerCase() : null;
            }
            ComponentOptions.loadFieldOption = loadFieldOption;
            var localizer = /([a-zA-Z\-]+)\s*:\s*(([^,]|,\s*(?!([a-zA-Z\-]+)\s*:))+)/g;
            function loadLocalizedStringOption(element, name, option) {
                var attributeValue = loadStringOption(element, name, option);
                var locale = String['locale'] || String['defaultLocale'];
                if (locale != null && attributeValue != null) {
                    var localeParts = locale.toLowerCase().split("-");
                    var locales = Coveo._.map(localeParts, function (part, i) { return localeParts.slice(0, i + 1).join("-"); });
                    var localizers = attributeValue.match(localizer);
                    if (localizers != null) {
                        for (var i = 0; i < localizers.length; i++) {
                            var groups = localizer.exec(localizers[i]);
                            if (groups != null) {
                                var lang = groups[1].toLowerCase();
                                if (Coveo._.contains(locales, lang)) {
                                    return groups[2].replace(/^\s+|\s+$/g, '');
                                }
                            }
                        }
                    }
                    return attributeValue != null ? attributeValue.toLocaleString() : null;
                }
                return attributeValue;
            }
            ComponentOptions.loadLocalizedStringOption = loadLocalizedStringOption;
            function loadNumberOption(element, name, option) {
                var attributeValue = loadStringOption(element, name, option);
                if (attributeValue == null) {
                    return null;
                }
                var numberValue = option.float === true ? Coveo.Utils.parseFloatIfNotUndefined(attributeValue) : Coveo.Utils.parseIntIfNotUndefined(attributeValue);
                if (option.min != null && option.min > numberValue) {
                    numberValue = option.min;
                }
                if (option.max != null && option.max < numberValue) {
                    numberValue = option.max;
                }
                return numberValue;
            }
            ComponentOptions.loadNumberOption = loadNumberOption;
            function loadBooleanOption(element, name, option) {
                return Coveo.Utils.parseBooleanIfNotUndefined(loadStringOption(element, name, option));
            }
            ComponentOptions.loadBooleanOption = loadBooleanOption;
            function loadListOption(element, name, option) {
                var separator = option.separator || /\s*,\s*/;
                var attributeValue = loadStringOption(element, name, option);
                return Coveo.Utils.isNonEmptyString(attributeValue) ? attributeValue.split(separator) : null;
            }
            ComponentOptions.loadListOption = loadListOption;
            function loadEnumOption(element, name, option, _enum) {
                var enumAsString = loadStringOption(element, name, option);
                return enumAsString != null ? _enum[enumAsString] : null;
            }
            ComponentOptions.loadEnumOption = loadEnumOption;
            function loadSelectorOption(element, name, option) {
                var attributeValue = loadStringOption(element, name, option);
                return Coveo.Utils.isNonEmptyString(attributeValue) ? Coveo.$(attributeValue).get(0) : null;
            }
            ComponentOptions.loadSelectorOption = loadSelectorOption;
            function loadChildHtmlElementOption(element, name, option) {
                var htmlElement;
                // Attribute: selector
                var selectorAttr = option.selectorAttr || attrNameFromName(name, option) + '-selector';
                var selector = Coveo.$(element).attr(selectorAttr);
                htmlElement = Coveo.$(selector).get(0);
                // Child
                if (htmlElement == null) {
                    var childSelector = option.childSelector;
                    if (childSelector == null) {
                        childSelector = '.' + name;
                    }
                    htmlElement = loadChildHtmlElementFromSelector(element, childSelector);
                }
                return htmlElement;
            }
            ComponentOptions.loadChildHtmlElementOption = loadChildHtmlElementOption;
            function loadChildHtmlElementFromSelector(element, selector) {
                Coveo.Assert.isNonEmptyString(selector);
                if (Coveo.$(element).is(selector)) {
                    return element;
                }
                var foundElement = Coveo.$(element).find(selector);
                return foundElement.length != 0 ? foundElement.get(0) : null;
            }
            ComponentOptions.loadChildHtmlElementFromSelector = loadChildHtmlElementFromSelector;
            function loadChildrenHtmlElementFromSelector(element, selector) {
                Coveo.Assert.isNonEmptyString(selector);
                return Coveo.$(element).find(selector).toArray();
            }
            ComponentOptions.loadChildrenHtmlElementFromSelector = loadChildrenHtmlElementFromSelector;
            function loadTemplateOption(element, name, option) {
                if (option.lazy) {
                    return new Ui.LazyTemplate(element, name, option);
                }
                var template;
                // Attribute: template selector
                var selectorAttr = option.selectorAttr || attrNameFromName(name, option) + '-selector';
                var selector = Coveo.$(element).attr(selectorAttr);
                var templateElement = Coveo.$(selector).get(0);
                if (templateElement != null) {
                    template = createResultTemplateFromElement(templateElement);
                }
                // Attribute: template id
                if (template == null) {
                    var idAttr = option.idAttr || attrNameFromName(name, option) + '-id';
                    var id = Coveo.$(element).attr(idAttr);
                    if (id != null) {
                        template = loadResultTemplateFromId(id);
                    }
                }
                // Child
                if (template == null) {
                    var childSelector = option.childSelector;
                    if (childSelector == null) {
                        childSelector = '.' + name.replace(/([A-Z])/g, "-$1").toLowerCase();
                    }
                    template = loadChildrenResultTemplateFromSelector(element, childSelector);
                }
                return template;
            }
            ComponentOptions.loadTemplateOption = loadTemplateOption;
            function loadResultTemplateFromId(templateId) {
                return Coveo.Utils.isNonEmptyString(templateId) ? Ui.TemplateCache.getTemplate(templateId) : null;
            }
            ComponentOptions.loadResultTemplateFromId = loadResultTemplateFromId;
            function loadChildrenResultTemplateFromSelector(element, selector) {
                var foundElements = loadChildrenHtmlElementFromSelector(element, selector);
                if (foundElements.length > 0) {
                    return new Ui.TemplateList(Coveo._.compact(Coveo._.map(foundElements, function (element) { return createResultTemplateFromElement(element); })));
                }
                return null;
            }
            ComponentOptions.loadChildrenResultTemplateFromSelector = loadChildrenResultTemplateFromSelector;
            function findParentScrolling(element) {
                var currentElement = Coveo.$(element);
                while (!(currentElement.is(document)) && (currentElement.length != 0)) {
                    if (isElementScrollable(currentElement)) {
                        if (!currentElement.is("body")) {
                            return currentElement.get(0);
                        }
                        return Coveo.$(window).get(0);
                    }
                    currentElement = currentElement.parent();
                }
                return Coveo.$(window).get(0);
            }
            ComponentOptions.findParentScrolling = findParentScrolling;
            function isElementScrollable(element) {
                return element.css("overflow-y") == "scroll";
            }
            ComponentOptions.isElementScrollable = isElementScrollable;
            function createResultTemplateFromElement(element) {
                Coveo.Assert.exists(element);
                var type = Coveo.$(element).attr('type');
                var mimeTypes = 'You must specify the type of template. Valid values are :' + ' ' + Ui.UnderscoreTemplate.mimeTypes.toString() + ' ' + Ui.JsRenderTemplate.mimeTypes.toString() + ' ' + Ui.HandlebarsTemplate.mimeTypes.toString() + ' ' + Ui.JsonTemplate.mimeTypes.toString() + ' ' + Ui.HtmlTemplate.mimeTypes.toString();
                Coveo.Assert.check(Coveo.Utils.isNonEmptyString(type), mimeTypes);
                if (Coveo._.indexOf(Ui.UnderscoreTemplate.mimeTypes, type) != -1) {
                    return Ui.UnderscoreTemplate.create(element);
                }
                else if (Coveo._.indexOf(Ui.JsRenderTemplate.mimeTypes, type) != -1) {
                    return Ui.JsRenderTemplate.create(element);
                }
                else if (Coveo._.indexOf(Ui.HandlebarsTemplate.mimeTypes, type) != -1) {
                    return Ui.HandlebarsTemplate.create(element);
                }
                else if (Coveo._.indexOf(Ui.JsonRenderTemplate.mimeTypes, type) != -1) {
                    return Ui.JsonRenderTemplate.create(element);
                }
                else if (Coveo._.indexOf(Ui.JsonTemplate.mimeTypes, type) != -1) {
                    return new Ui.JsonTemplate(element);
                }
                else if (Coveo._.indexOf(Ui.HtmlTemplate.mimeTypes, type) != -1) {
                    return new Ui.HtmlTemplate(element);
                }
                else {
                    Coveo.Assert.fail('Cannot guess template type from attribute: ' + type + '. Valid values are ' + mimeTypes);
                    return undefined;
                }
            }
            ComponentOptions.createResultTemplateFromElement = createResultTemplateFromElement;
        })(ComponentOptions = Ui.ComponentOptions || (Ui.ComponentOptions = {}));
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var QueryBuilder = (function () {
            function QueryBuilder() {
                this.expression = new Ui.ExpressionBuilder();
                this.advancedExpression = new Ui.ExpressionBuilder();
                this.constantExpression = new Ui.ExpressionBuilder();
                this.disjunctionExpression = new Ui.ExpressionBuilder();
                this.firstResult = 0;
                this.numberOfResults = 10;
                this.enableDidYouMean = false;
                this.enableDebug = false;
                this.sortCriteria = "relevancy";
                this.retrieveFirstSentences = true; // True by default because otherwise everyone stumbles on this
                this.queryUid = Coveo.QueryUtils.createGuid();
                this.queryFunctions = [];
                this.rankingFunctions = [];
                this.groupByRequests = [];
                this.enableDuplicateFiltering = false;
            }
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
                    fieldsToInclude: this.fieldsToInclude,
                    fieldsToExclude: this.fieldsToExclude,
                    enableDidYouMean: this.enableDidYouMean,
                    sortCriteria: this.sortCriteria,
                    sortField: this.sortField,
                    queryFunctions: this.queryFunctions,
                    rankingFunctions: this.rankingFunctions,
                    groupBy: this.groupByRequests,
                    retrieveFirstSentences: this.retrieveFirstSentences,
                    timezone: this.timezone,
                    enableDuplicateFiltering: this.enableDuplicateFiltering,
                    enableCollaborativeRating: this.enableCollaborativeRating,
                    debug: this.enableDebug,
                    context: this.context
                };
                return query;
            };
            QueryBuilder.prototype.computeCompleteExpression = function () {
                return this.computeCompleteExpressionParts().full;
            };
            QueryBuilder.prototype.computeCompleteExpressionParts = function () {
                var withoutConstant = Ui.ExpressionBuilder.merge(this.expression, this.advancedExpression);
                return {
                    full: Ui.ExpressionBuilder.mergeUsingOr(Ui.ExpressionBuilder.merge(withoutConstant, this.constantExpression), this.disjunctionExpression).build(),
                    withoutConstant: Ui.ExpressionBuilder.mergeUsingOr(withoutConstant, this.disjunctionExpression).build(),
                    constant: Ui.ExpressionBuilder.mergeUsingOr(this.constantExpression, this.disjunctionExpression).build()
                };
            };
            QueryBuilder.prototype.computeCompleteExpressionExcept = function (except) {
                return this.computeCompleteExpressionPartsExcept(except).full;
            };
            QueryBuilder.prototype.computeCompleteExpressionPartsExcept = function (except) {
                var withoutConstantAndExcept = Ui.ExpressionBuilder.merge(this.expression, this.advancedExpression);
                withoutConstantAndExcept.remove(except);
                return {
                    full: Ui.ExpressionBuilder.mergeUsingOr(Ui.ExpressionBuilder.merge(withoutConstantAndExcept, this.constantExpression), this.disjunctionExpression).build(),
                    withoutConstant: Ui.ExpressionBuilder.mergeUsingOr(withoutConstantAndExcept, this.disjunctionExpression).build(),
                    constant: Ui.ExpressionBuilder.mergeUsingOr(this.constantExpression, this.disjunctionExpression).build()
                };
            };
            QueryBuilder.prototype.addContextValue = function (key, value) {
                if (this.context == null) {
                    this.context = {};
                }
                this.context[key] = value;
            };
            QueryBuilder.prototype.addContext = function (values) {
                if (this.context == null) {
                    this.context = {};
                }
                Coveo._.extend(this.context, values);
            };
            return QueryBuilder;
        })();
        Ui.QueryBuilder = QueryBuilder;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var ExpressionBuilder = (function () {
            function ExpressionBuilder() {
                this.parts = []; // he he he
                this.wrapParts = true;
            }
            ExpressionBuilder.prototype.add = function (expression) {
                Coveo.Assert.isNonEmptyString(expression);
                this.parts.push(expression);
            };
            ExpressionBuilder.prototype.fromExpressionBuilder = function (expression) {
                this.parts = this.parts.concat(expression.parts);
            };
            ExpressionBuilder.prototype.addFieldExpression = function (field, operator, values) {
                Coveo.Assert.isNonEmptyString(field);
                Coveo.Assert.stringStartsWith(field, '@');
                Coveo.Assert.isNonEmptyString(operator);
                Coveo.Assert.isLargerOrEqualsThan(1, values.length);
                this.add(Coveo.QueryUtils.buildFieldExpression(field, operator, values));
            };
            ExpressionBuilder.prototype.addFieldNotEqualExpression = function (field, values) {
                Coveo.Assert.isNonEmptyString(field);
                Coveo.Assert.stringStartsWith(field, '@');
                Coveo.Assert.isLargerOrEqualsThan(1, values.length);
                this.add(Coveo.QueryUtils.buildFieldNotEqualExpression(field, values));
            };
            ExpressionBuilder.prototype.remove = function (expression) {
                Coveo.Assert.isNonEmptyString(expression);
                var index = Coveo._.indexOf(this.parts, expression);
                if (index != -1) {
                    this.parts.splice(Coveo._.indexOf(this.parts, expression), 1);
                }
            };
            ExpressionBuilder.prototype.isEmpty = function () {
                return this.parts.length == 0;
            };
            ExpressionBuilder.prototype.build = function () {
                if (this.parts.length == 0) {
                    return undefined;
                }
                else if (this.parts.length == 1) {
                    return this.parts[0];
                }
                else if (this.wrapParts) {
                    return '(' + this.parts.join(') (') + ')';
                }
                else {
                    return this.parts.join(' ');
                }
            };
            ExpressionBuilder.merge = function () {
                var builders = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    builders[_i - 0] = arguments[_i];
                }
                var merged = new ExpressionBuilder();
                Coveo._.each(builders, function (builder) {
                    merged.parts = merged.parts.concat(builder.parts);
                });
                return merged;
            };
            ExpressionBuilder.mergeUsingOr = function () {
                var builders = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    builders[_i - 0] = arguments[_i];
                }
                var nonEmpty = Coveo._.filter(builders, function (b) { return !b.isEmpty(); });
                var merged = new ExpressionBuilder();
                if (nonEmpty.length == 1) {
                    merged.parts = [].concat(nonEmpty[0].parts);
                }
                else if (nonEmpty.length > 1) {
                    var parts = Coveo._.map(nonEmpty, function (b) { return b.build(); });
                    merged.add('(' + parts.join(') OR (') + ')');
                }
                return merged;
            };
            return ExpressionBuilder;
        })();
        Ui.ExpressionBuilder = ExpressionBuilder;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var Template = (function () {
            function Template(dataToString, condition) {
                this.dataToString = dataToString;
                this.condition = condition;
                this.logger = new Coveo.Logger(this);
            }
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
                    var element = Coveo.JQueryUtils.htmlToDom(html);
                    this.logger.trace('Instantiated result template', object, element);
                    Coveo.$(element).data('template', this);
                    return element;
                }
                return null;
            };
            Template.prototype.toHtmlElement = function () {
                return null;
            };
            return Template;
        })();
        Ui.Template = Template;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var DefaultResultTemplate = (function (_super) {
            __extends(DefaultResultTemplate, _super);
            function DefaultResultTemplate() {
                _super.call(this);
            }
            DefaultResultTemplate.prototype.instantiateToString = function (queryResult) {
                Coveo.Assert.exists(queryResult);
                queryResult = Coveo._.extend({}, queryResult, Ui.UnderscoreTemplate.templateHelpers);
                var defaultTemplates = Coveo._.map(Ui.TemplateCache.getDefaultTemplates(), function (name) { return Ui.TemplateCache.getTemplate(name); });
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
                // If all else fails, use a hard-coded default template
                return Coveo._.template('<div>' + '<div class="coveo-title"><a class="CoveoResultLink"><%= title?highlight(title, titleHighlights):clickUri %></a></div>' + '<% if(excerpt){ %><div class="coveo-excerpt"><%= highlight(excerpt, excerptHighlights) %></div><% } %>' + '<table class="CoveoFieldTable"><%= templateFields() %></table>' + '</div>')(queryResult);
            };
            return DefaultResultTemplate;
        })(Ui.Template);
        Ui.DefaultResultTemplate = DefaultResultTemplate;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        Coveo._.templateSettings = {
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
                Coveo.Assert.exists(element);
                var templateString = Coveo.$(element).html();
                this.template = Coveo._.template(templateString);
                var condition = Coveo.$(element).data('condition');
                if (condition != null) {
                    this.condition = new Function('obj', 'with(obj||{}){return ' + condition + '}');
                }
                this.dataToString = function (object) {
                    var extended = Coveo._.extend({}, object, UnderscoreTemplate.templateHelpers);
                    return _this.template(extended);
                };
            }
            UnderscoreTemplate.prototype.toHtmlElement = function () {
                var script = document.createElement('script');
                Coveo.$(script).attr('type', Coveo._.first(UnderscoreTemplate.mimeTypes)).attr('data-condition', Coveo.$(this.element).data('condition')).text(this.element.innerHTML);
                return script;
            };
            UnderscoreTemplate.create = function (element) {
                Coveo.Assert.exists(element);
                return new UnderscoreTemplate(element);
            };
            UnderscoreTemplate.fromString = function (template, condition) {
                var script = document.createElement('script');
                script.text = template;
                if (condition != null) {
                    Coveo.$(script).attr('data-condition', condition);
                }
                return new UnderscoreTemplate(script);
            };
            UnderscoreTemplate.registerTemplateHelper = function (helperName, helper) {
                UnderscoreTemplate.templateHelpers[helperName] = helper;
            };
            UnderscoreTemplate.isLibraryAvailable = function () {
                return Coveo.Utils.exists(window['_']);
            };
            UnderscoreTemplate.templateHelpers = {};
            UnderscoreTemplate.mimeTypes = [
                'text/underscore',
                'text/underscore-template',
                'text/x-underscore',
                'text/x-underscore-template'
            ];
            return UnderscoreTemplate;
        })(Ui.Template);
        Ui.UnderscoreTemplate = UnderscoreTemplate;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var JsRenderTemplate = (function (_super) {
            __extends(JsRenderTemplate, _super);
            function JsRenderTemplate(element) {
                var _this = this;
                _super.call(this);
                this.element = element;
                Coveo.Assert.check(JsRenderTemplate.isLibraryAvailable(), 'The JsRender library must be loaded within the page');
                Coveo.Assert.exists(element);
                this.dataToString = function (object) { return Coveo.$(_this.element).render(object); };
                var condition = Coveo.$(element).data('condition');
                if (condition != null) {
                    this.condition = new Function('obj', 'with(obj||{}){return ' + condition + '}');
                }
            }
            JsRenderTemplate.create = function (element) {
                Coveo.Assert.exists(element);
                return new JsRenderTemplate(element);
            };
            JsRenderTemplate.isLibraryAvailable = function () {
                return Coveo.Utils.exists(Coveo.$['views']);
            };
            JsRenderTemplate.mimeTypes = [
                'text/jsrender',
                'text/jsrender-template',
                'text/x-jsrender',
                'text/x-jsrender-template'
            ];
            return JsRenderTemplate;
        })(Ui.Template);
        Ui.JsRenderTemplate = JsRenderTemplate;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var HandlebarsTemplate = (function (_super) {
            __extends(HandlebarsTemplate, _super);
            function HandlebarsTemplate(element) {
                _super.call(this);
                this.element = element;
                Coveo.Assert.check(HandlebarsTemplate.isLibraryAvailable(), 'The Handlebars library must be loaded within the page');
                Coveo.Assert.exists(element);
                var templateString = Coveo.$(element).html();
                this.dataToString = Handlebars.compile(templateString);
                var condition = Coveo.$(element).data('condition');
                if (condition != null) {
                    this.condition = new Function('obj', 'with(obj||{}){return ' + condition + '}');
                }
            }
            HandlebarsTemplate.create = function (element) {
                Coveo.Assert.exists(element);
                return new HandlebarsTemplate(element);
            };
            HandlebarsTemplate.isLibraryAvailable = function () {
                return Coveo.Utils.exists(window['Handlebars']);
            };
            HandlebarsTemplate.mimeTypes = [
                'text/handlebars',
                'text/handlebars-template',
                'text/x-handlebars',
                'text/x-handlebars-template'
            ];
            return HandlebarsTemplate;
        })(Ui.Template);
        Ui.HandlebarsTemplate = HandlebarsTemplate;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var HtmlTemplate = (function (_super) {
            __extends(HtmlTemplate, _super);
            function HtmlTemplate(element) {
                _super.call(this, function () {
                    return element.innerHTML;
                });
                this.element = element;
                var condition = Coveo.$(element).data('condition');
                if (condition != null) {
                    this.condition = new Function('obj', 'with(obj||{}){return ' + condition + '}');
                }
            }
            HtmlTemplate.prototype.toHtmlElement = function () {
                var script = document.createElement('script');
                Coveo.$(script).attr('type', Coveo._.first(HtmlTemplate.mimeTypes)).attr('data-condition', Coveo.$(this.element).data('condition')).text(this.element.innerHTML);
                return script;
            };
            HtmlTemplate.create = function (element) {
                Coveo.Assert.exists(element);
                return new HtmlTemplate(element);
            };
            HtmlTemplate.fromString = function (template, condition) {
                var script = document.createElement('script');
                script.text = template;
                if (condition != null) {
                    Coveo.$(script).attr('data-condition', condition);
                }
                return new HtmlTemplate(script);
            };
            HtmlTemplate.mimeTypes = [
                'text/html'
            ];
            return HtmlTemplate;
        })(Coveo.Ui.Template);
        Ui.HtmlTemplate = HtmlTemplate;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var TemplateCache = (function () {
            function TemplateCache() {
            }
            TemplateCache.registerTemplate = function (name, template, publicTemplate, defaultTemplate) {
                if (publicTemplate === void 0) { publicTemplate = true; }
                if (defaultTemplate === void 0) { defaultTemplate = false; }
                Coveo.Assert.isNonEmptyString(name);
                Coveo.Assert.exists(template);
                if (!(template instanceof Ui.Template)) {
                    template = new Ui.Template(template);
                }
                if (template.name == null) {
                    template.name = name;
                }
                TemplateCache.templates[name] = template;
                if (publicTemplate && !Coveo._.contains(TemplateCache.templateNames, name)) {
                    TemplateCache.templateNames.push(name);
                }
                if (defaultTemplate) {
                    TemplateCache.defaultTemplates[name] = template;
                }
            };
            TemplateCache.getTemplate = function (name) {
                Coveo.Assert.exists(TemplateCache.templates[name]);
                return TemplateCache.templates[name];
            };
            TemplateCache.getTemplates = function () {
                return TemplateCache.templates;
            };
            TemplateCache.getTemplateNames = function () {
                return TemplateCache.templateNames;
            };
            TemplateCache.getDefaultTemplates = function () {
                return Coveo._.keys(TemplateCache.defaultTemplates);
            };
            TemplateCache.getDefaultTemplate = function (name) {
                Coveo.Assert.exists(TemplateCache.defaultTemplates[name]);
                return TemplateCache.defaultTemplates[name];
            };
            TemplateCache.scanAndRegisterTemplates = function () {
                // Here we take care not to scan for templates for which the base library
                // is not available. Case in point: someone was using the JS UI on a page
                // that was also using Handlebars, but our code was initialized before
                // the Handlebars library (loaded through AMD).
                if (Ui.UnderscoreTemplate.isLibraryAvailable()) {
                    TemplateCache.scanAndRegisterUnderscoreTemplates();
                    TemplateCache.scanAndRegisterJsonTemplates();
                }
                if (Ui.JsRenderTemplate.isLibraryAvailable()) {
                    TemplateCache.scanAndRegisterJsRenderTemplates();
                    TemplateCache.scanAndRegisterJsonTemplates();
                }
                if (Ui.HandlebarsTemplate.isLibraryAvailable()) {
                    TemplateCache.scanAndRegisterHandlebarsTemplates();
                }
                TemplateCache.scanAndRegisterHtmlTemplates();
            };
            TemplateCache.scanAndRegisterUnderscoreTemplates = function () {
                Coveo._.each(Ui.UnderscoreTemplate.mimeTypes, function (type) {
                    Coveo.$("script[id][type='" + type + "']").each(function (index, elem) {
                        var template = new Ui.UnderscoreTemplate(elem);
                        TemplateCache.registerTemplate(Coveo.$(elem).attr('id'), template);
                    });
                });
            };
            TemplateCache.scanAndRegisterJsRenderTemplates = function () {
                Coveo._.each(Ui.JsRenderTemplate.mimeTypes, function (type) {
                    Coveo.$("script[id][type='" + type + "']").each(function (index, elem) {
                        var template = new Ui.JsRenderTemplate(elem);
                        TemplateCache.registerTemplate(Coveo.$(elem).attr('id'), template);
                    });
                });
            };
            TemplateCache.scanAndRegisterHandlebarsTemplates = function () {
                Coveo._.each(Ui.HandlebarsTemplate.mimeTypes, function (type) {
                    Coveo.$("script[id][type='" + type + "']").each(function (index, elem) {
                        var template = new Ui.HandlebarsTemplate(elem);
                        TemplateCache.registerTemplate(Coveo.$(elem).attr('id'), template);
                    });
                });
            };
            TemplateCache.scanAndRegisterJsonTemplates = function () {
                Coveo._.each(Ui.JsonTemplate.mimeTypes, function (type) {
                    Coveo.$("script[id][type='" + type + "']").each(function (index, elem) {
                        var template = new Ui.JsonTemplate(elem);
                        TemplateCache.registerTemplate(Coveo.$(elem).attr('id'), template);
                    });
                });
            };
            TemplateCache.scanAndRegisterHtmlTemplates = function () {
                Coveo._.each(Ui.HtmlTemplate.mimeTypes, function (type) {
                    Coveo.$("script[id][type='" + type + "']").each(function (index, elem) {
                        var template = new Ui.HtmlTemplate(elem);
                        TemplateCache.registerTemplate(Coveo.$(elem).attr('id'), template);
                    });
                });
            };
            TemplateCache.templates = {};
            TemplateCache.templateNames = [];
            TemplateCache.defaultTemplates = {};
            return TemplateCache;
        })();
        Ui.TemplateCache = TemplateCache;
        Coveo.$(function () {
            TemplateCache.scanAndRegisterTemplates();
        });
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var JsonRenderTemplate = (function (_super) {
            __extends(JsonRenderTemplate, _super);
            function JsonRenderTemplate(template) {
                _super.call(this);
                var jsonTemplate;
                if (Coveo.Utils.isHtmlElement(template)) {
                    Coveo.Assert.exists(template);
                    var templateString = Coveo.$(template).html();
                    if (Coveo.Utils.isNullOrEmptyString(templateString)) {
                        jsonTemplate = null;
                    }
                    else {
                        jsonTemplate = JSON.parse(templateString);
                    }
                }
                else if (template instanceof Object) {
                    jsonTemplate = template;
                }
                this.template = new Ui.JsRenderTemplate(Coveo.$(this.renderTemplate(jsonTemplate).result).get(0));
            }
            JsonRenderTemplate.prototype.instantiateToString = function (data) {
                return this.template.instantiateToString(data);
            };
            JsonRenderTemplate.prototype.instantiateToElement = function (data) {
                return this.template.instantiateToElement(data);
            };
            JsonRenderTemplate.prototype.renderTemplate = function (data) {
                if (data == null) {
                    data = { type: 'list', containers: [], leftContainers: [], rightContainers: [] };
                }
                if (data.type == 'list') {
                    var result = '<script type="text/x-jsrender"><div class="item result">';
                    if (data.leftContainers && data.leftContainers.length > 0) {
                        result += '<div style="float: left;">' + this.renderContainers(data.leftContainers) + '</div>';
                    }
                    if (data.rightContainers && data.rightContainers.length > 0) {
                        result += '<div style="float: right;">' + this.renderContainers(data.rightContainers) + '</div>';
                    }
                    if (data.containers.length > 0) {
                        result += '<div style="overflow: hidden;">' + this.renderContainers(data.containers) + '</div>';
                    }
                    result += '</div></script>';
                    return { result: result };
                }
                else {
                    var header = '<thead><tr>';
                    var result = '<script type="text/x-jsrender"><tr class="item result">';
                    for (var i = 0; i < data.containers.length; i++) {
                        var container = data.containers[i];
                        var width = this.cleanWidth(container.settings['width']);
                        header += '<th width="' + width + '">' + this.plainText(container.settings['header']) + '</th>';
                        var contents = [];
                        for (var j = 0; j < container.contents.length; j++) {
                            contents.push(this.renderContent(container.contents[j]));
                        }
                        result += '<td width="' + width + '">' + contents.join(' ') + '</td>';
                    }
                    header += '</tr></thead>';
                    result += '</tr></script>';
                    return { header: header, result: result };
                }
            };
            JsonRenderTemplate.prototype.renderContainers = function (containers) {
                var result = '';
                for (var i = 0; i < containers.length; i++) {
                    var container = containers[i];
                    var contents = [];
                    for (var j = 0; j < container.contents.length; j++) {
                        contents.push(this.renderContent(container.contents[j]));
                    }
                    result += '<div>' + contents.join(' ') + '</div>';
                }
                return result;
            };
            JsonRenderTemplate.prototype.renderContent = function (content) {
                if (content.type == 'field') {
                    return this.renderField(content);
                }
                else if (content.type == 'code') {
                    return this.renderCode(content);
                }
                else if (content.type == 'link') {
                    return this.renderLink(content);
                }
                else if (content.type == 'thumbnail') {
                    return this.renderThumbnail(content);
                }
                else if (content.type == 'badge') {
                    return this.renderBadge(content);
                }
                else if (content.type == 'quickview') {
                    return this.renderQuickView(content);
                }
                else if (content.type == 'custom_component') {
                    return this.renderCustomComponent(content);
                }
                else if (content.type == 'field_table') {
                    return this.renderFieldTable(content);
                }
                return '';
            };
            JsonRenderTemplate.prototype.renderField = function (data) {
                var content = '';
                var fieldName = this.cleanText(data.settings['name']);
                fieldName = this.lowercaseFirstLetter(fieldName);
                var container = 'span';
                var styleClass = fieldName.split('.');
                var attrs = {};
                var styles = {};
                switch (data.settings['renderAs']) {
                    case 'link':
                        var text = this.cleanText(data.settings['text']);
                        if (text == '') {
                            text = fieldName;
                        }
                        container = 'a';
                        attrs.href = '{{url:' + fieldName + '}}';
                        attrs['data-href'] = '{{>' + fieldName + '}}';
                        attrs.target = data.settings['sameTab'] != null && data.settings['sameTab'] == 'true' ? '_self' : '_blank';
                        var lowecasedText = this.lowercaseFirstLetter(text);
                        if (lowecasedText.indexOf('\'') >= 0) {
                            content = '{{>' + lowecasedText + '}}';
                        }
                        else {
                            content = '{{if ' + lowecasedText + 'Highlights}}{{:~highlight(' + lowecasedText + ', ' + lowecasedText + 'Highlights' + ')}}{{else}}{{>' + text + '}}{{/if}}';
                        }
                        styleClass.push('CoveoResultLink');
                        styleClass.push('coveo-link');
                        break;
                    case 'email':
                        if (data.settings['toHyperlinks'] == 'true') {
                            content = '{{:~email(' + fieldName + ')}}';
                        }
                        else {
                            content = '{{>' + fieldName + '}}';
                        }
                        styleClass.push('coveo-email');
                        break;
                    case 'date':
                        var format = data.settings['format'];
                        // Revise older format strings
                        if (format == 'dateToString') {
                            format = 'date';
                        }
                        if (format == 'timeToString') {
                            format = 'time';
                        }
                        if (format == 'dateTimeToString') {
                            format = 'dateTime';
                        }
                        if (format == 'emailDateTimeToString') {
                            format = 'emailDateTime';
                        }
                        if (format == null || (format != 'time' && format != 'dateTime' && format != 'emailDateTime')) {
                            format = 'date';
                        }
                        content = '{{>~' + format + '(' + fieldName + ')}}';
                        styleClass.push('coveo-date');
                        break;
                    default:
                        if (data.settings['emailList'] == 'true') {
                            content = '{{:~email(' + fieldName + ')}}';
                        }
                        else {
                            content = '{{if ' + fieldName + 'Highlights}}{{:~highlight(' + fieldName + ', ' + fieldName + 'Highlights' + ')}}{{else}}{{>' + fieldName + '}}{{/if}}';
                        }
                        break;
                }
                attrs['class'] = styleClass.join(' ');
                content = this.renderStyleSettings(data.settings, content, container, attrs);
                content = this.renderEllipsis(data.settings, content);
                if (data.settings['label'] != null && !data.settings['label'].match('^\\s*$')) {
                    content = '<span class="coveo-label">' + this.plainText(data.settings['label']) + '</span>' + content;
                }
                return '{{if ' + fieldName + '}}' + content + '{{/if}}';
            };
            JsonRenderTemplate.prototype.renderEllipsis = function (settings, content) {
                if (settings['ellipsis'] != null && settings['ellipsis'] == 'true') {
                    return '<div class="coveo-ellipsis">' + content + '</div>';
                }
                return content;
            };
            JsonRenderTemplate.prototype.renderStyleSettings = function (settings, content, container, attrs) {
                var styles = {};
                if (settings['color'] != null && settings['color'] != '') {
                    styles.color = this.cleanColor(settings['color']);
                }
                if (settings['bold'] != null && settings['bold'] == 'true') {
                    styles['font-weight'] = 'bold';
                }
                if (settings['italic'] != null && settings['italic'] == 'true') {
                    styles['font-style'] = 'italic';
                }
                if (settings['underline'] != null && settings['underline'] == 'true') {
                    styles['text-decoration'] = 'underline';
                }
                var attrsString = ' ';
                for (var key in attrs) {
                    attrsString += key + '="' + attrs[key] + '" ';
                }
                var stylesString = '';
                for (var key in styles) {
                    stylesString += key + ':' + styles[key] + ';';
                }
                return '<' + container + attrsString + 'style="' + stylesString + '">' + content + '</' + container + '>';
            };
            JsonRenderTemplate.prototype.renderCustomComponent = function (data) {
                var dom = '{{if ' + this.jsRenderEncode(data.settings['condition']) + '}}';
                dom += '     <span class="' + this.jsRenderEncode(data.settings['component']) + '" href="javascript:void(0);"></span>';
                dom += '{{/if}}';
                return dom;
            };
            JsonRenderTemplate.prototype.renderCode = function (data) {
                return '<span>{{html:' + this.jsRenderEncode(data.settings['value']) + '}}</span>';
            };
            JsonRenderTemplate.prototype.renderLink = function (data) {
                var url = this.jsRenderEncode(data.settings['value']);
                var text = this.jsRenderEncode(data.settings['text']);
                if (text == null || text == '') {
                    text = url;
                }
                text = this.lowercaseFirstLetter(text);
                var target = data.settings['sameTab'] != null && data.settings['sameTab'] == 'true' ? '_self' : '_blank';
                var content;
                if (text.indexOf('\'') >= 0) {
                    content = '{{>' + text + '}}';
                }
                else {
                    content = '{{if ' + text + 'Highlights}}{{:~highlight(' + text + ', ' + text + 'Highlights' + ')}}{{else}}{{html:' + text + '}}{{/if}}';
                }
                return '<a href="{{url:' + url + '}}" data-href="{{>' + url + '}}" target="' + target + '">' + content + '</a>';
            };
            JsonRenderTemplate.prototype.renderThumbnail = function (data) {
                var url = this.jsRenderEncode(data.settings['url']);
                return '<img class="coveo-sf-thumb" src="{{url:' + url + '}}" style="height: ' + data.settings['height'] + 'px"/>';
            };
            JsonRenderTemplate.prototype.renderBadge = function (data) {
                var value = this.jsRenderEncode(data.settings['fieldName']);
                var content = '{{html:' + value + '}}';
                content = this.renderStyleSettings(data.settings, content, 'span', { 'class': 'coveo-badge' });
                return '{{if ' + value + ' != undefined}}' + content + '{{/if}}';
            };
            JsonRenderTemplate.prototype.renderQuickView = function (data) {
                return '<div class="CoveoQuickView" data-title="{{html:' + this.jsRenderEncode(data.settings['title']) + '}}"><div class="CoveoQuickViewDocument"></div></div>';
            };
            JsonRenderTemplate.prototype.renderFieldTable = function (data) {
                var _this = this;
                var rows;
                try {
                    rows = JSON.parse(data.settings['rows']);
                }
                catch (e) {
                    rows = [];
                }
                return '<table class="CoveoFieldTable">' + Coveo._.map(rows, function (row) {
                    var attrs = [];
                    attrs.push('data-field="' + _this.jsRenderEncode(row.field) + '"');
                    if (row.caption) {
                        attrs.push('data-caption="' + _this.jsRenderEncode(row.caption) + '"');
                    }
                    return '<tr ' + attrs.join(' ') + '></tr>';
                }).join('') + '</div>';
            };
            JsonRenderTemplate.prototype.cleanText = function (text) {
                if (text == null) {
                    return '';
                }
                return text.replace(/[^A-Za-z0-9_\.]/g, '');
            };
            JsonRenderTemplate.prototype.lowercaseFirstLetter = function (text) {
                if (text && text.length > 0) {
                    return text.charAt(0).toLowerCase() + text.slice(1);
                }
                return '';
            };
            JsonRenderTemplate.prototype.cleanColor = function (color) {
                if (color == null) {
                    return '';
                }
                if (!color.match(/^#[0-9A-Fa-f]{3,6}$/) && !color.match(/^[a-z]+$/)) {
                    return '';
                }
                return color;
            };
            JsonRenderTemplate.prototype.cleanWidth = function (width) {
                if (width == null) {
                    return '';
                }
                if (!width.match(/^[0-9]{1,2}?%|[0-9]+$/)) {
                    return '';
                }
                return width;
            };
            JsonRenderTemplate.prototype.plainText = function (text) {
                return this.jsRenderEncode(this.htmlEncode(text));
            };
            JsonRenderTemplate.prototype.htmlEncode = function (text) {
                if (text == null) {
                    return '';
                }
                return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                ;
            };
            JsonRenderTemplate.prototype.jsRenderEncode = function (text) {
                if (text == null) {
                    return '';
                }
                // put a invisible charater between the }}
                return text.replace(/\}\}/g, '}\u0081}');
            };
            JsonRenderTemplate.create = function (element) {
                Coveo.Assert.exists(element);
                return new JsonRenderTemplate(element);
            };
            JsonRenderTemplate.isLibraryAvailable = function () {
                return Coveo.Utils.exists(window['TemplateEditorUtils']) && Ui.JsRenderTemplate.isLibraryAvailable();
            };
            JsonRenderTemplate.mimeTypes = [
                'text/json-template'
            ];
            return JsonRenderTemplate;
        })(Ui.Template);
        Ui.JsonRenderTemplate = JsonRenderTemplate;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var JsonTemplate = (function (_super) {
            __extends(JsonTemplate, _super);
            function JsonTemplate(element) {
                var _this = this;
                _super.call(this);
                this.element = element;
                this.options = Ui.ComponentOptions.initOptions(element, JsonTemplate.options);
                this.data = JSON.parse(element.innerHTML);
                var condition = this.options.condition;
                if (condition != null) {
                    this.condition = new Function('obj', 'with(obj||{}){return ' + condition + '}');
                }
                this.dataToString = function (object) {
                    var fields = object['fields'] || [];
                    if (_this.data['fields'] != null) {
                        object = Coveo._.extend({}, object, { fields: fields.concat(_this.data['fields']) });
                    }
                    return _this.options.template.instantiateToString(object, _this.condition == null);
                };
            }
            JsonTemplate.prototype.instantiateToElement = function (object, checkCondition) {
                if (checkCondition === void 0) { checkCondition = true; }
                var element = _super.prototype.instantiateToElement.call(this, object, checkCondition);
                if (element != null && this.data['fields'] != null) {
                    var fields = Coveo.$(element).data('fields') || [];
                    Coveo.$(element).data('fields', fields.concat(this.data['fields']));
                }
                return element;
            };
            JsonTemplate.prototype.toHtmlElement = function () {
                var script = document.createElement('script');
                Coveo.$(script).attr('type', Coveo._.first(JsonTemplate.mimeTypes)).attr('data-condition', this.options.condition).text(this.element.innerHTML);
                return script;
            };
            JsonTemplate.create = function (element) {
                Coveo.Assert.exists(element);
                return new JsonTemplate(element);
            };
            JsonTemplate.options = {
                template: Ui.ComponentOptions.buildTemplateOption({
                    lazy: true,
                    defaultFunction: function (element) { return new Ui.DefaultResultTemplate(); }
                }),
                condition: Ui.ComponentOptions.buildStringOption()
            };
            JsonTemplate.mimeTypes = [
                'application/json'
            ];
            return JsonTemplate;
        })(Coveo.Ui.Template);
        Ui.JsonTemplate = JsonTemplate;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var LazyTemplate = (function (_super) {
            __extends(LazyTemplate, _super);
            function LazyTemplate(element, attrName, option) {
                _super.call(this);
                this.element = element;
                this.attrName = attrName;
                this.option = option;
            }
            LazyTemplate.prototype.instantiateToString = function (object, checkCondition) {
                if (checkCondition === void 0) { checkCondition = true; }
                if (this.template === undefined) {
                    this.template = this.option.load(this.element, this.attrName, Coveo._.extend({}, this.option, { lazy: false }));
                    if (this.template == null) {
                        if (this.option.defaultValue != null) {
                            this.template = this.option.defaultValue;
                        }
                        else if (this.option.defaultFunction != null) {
                            this.template = this.option.defaultFunction(this.element);
                        }
                    }
                }
                if (this.template != null) {
                    return this.template.instantiateToString(object, checkCondition);
                }
                return null;
            };
            return LazyTemplate;
        })(Ui.Template);
        Ui.LazyTemplate = LazyTemplate;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
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
                return null;
            };
            TemplateList.prototype.instantiateToElement = function (object, checkCondition) {
                if (checkCondition === void 0) { checkCondition = true; }
                for (var i = 0; i < this.templates.length; i++) {
                    var element = this.templates[i].instantiateToElement(object, checkCondition);
                    if (element != null) {
                        return element;
                    }
                }
                return null;
            };
            return TemplateList;
        })(Ui.Template);
        Ui.TemplateList = TemplateList;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var TemplateHelpers = (function () {
            function TemplateHelpers() {
            }
            TemplateHelpers.registerFieldHelper = function (name, helper) {
                TemplateHelpers.fieldHelpers.push(name);
                TemplateHelpers.registerTemplateHelper(name, helper);
            };
            TemplateHelpers.registerTemplateHelper = function (name, helper) {
                Coveo.Assert.isNonEmptyString(name);
                Coveo.Assert.exists(helper);
                if (Ui.UnderscoreTemplate.isLibraryAvailable()) {
                    TemplateHelpers.registerTemplateHelperInUnderscore(name, helper);
                }
                if (Ui.JsRenderTemplate.isLibraryAvailable()) {
                    TemplateHelpers.registerTemplateHelperInJsRender(name, helper);
                }
                if (Ui.HandlebarsTemplate.isLibraryAvailable()) {
                    TemplateHelpers.registerTemplateHelperInHandlebars(name, helper);
                }
                TemplateHelpers.helpers[name] = helper;
            };
            TemplateHelpers.getHelper = function (name) {
                return TemplateHelpers.helpers[name];
            };
            TemplateHelpers.getHelpers = function () {
                return TemplateHelpers.helpers;
            };
            TemplateHelpers.registerTemplateHelperInJsRender = function (name, helper) {
                Coveo.Assert.isNonEmptyString(name);
                Coveo.Assert.exists(helper);
                // We must arrange for our helpers to be called with the data as 'this'
                var dict = {};
                dict[name] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i - 0] = arguments[_i];
                    }
                    return helper.apply(this.data, args);
                };
                Coveo.$.views.helpers(dict);
            };
            TemplateHelpers.registerTemplateHelperInHandlebars = function (name, helper) {
                Coveo.Assert.isNonEmptyString(name);
                Coveo.Assert.exists(helper);
                Coveo.Assert.check(Ui.HandlebarsTemplate.isLibraryAvailable());
                Handlebars.registerHelper(name, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i - 0] = arguments[_i];
                    }
                    // If the last argument is a "hash", we assume it's an option dictionary
                    // and we move the hash part to the top-level.
                    var lastArgument = args[args.length - 1];
                    if (Coveo._.isObject(lastArgument) && Coveo.Utils.exists(lastArgument.hash)) {
                        args[args.length - 1] = lastArgument.hash;
                    }
                    // We must use SafeString to prevent Handlebars from escaping the return value of our helpers.
                    return new Handlebars.SafeString(helper.apply(this, args));
                });
            };
            TemplateHelpers.registerTemplateHelperInUnderscore = function (name, helper) {
                Coveo.Assert.isNonEmptyString(name);
                Coveo.Assert.exists(helper);
                Coveo.Assert.check(Ui.UnderscoreTemplate.isLibraryAvailable());
                Ui.UnderscoreTemplate.registerTemplateHelper(name, helper);
            };
            TemplateHelpers.helpers = {};
            TemplateHelpers.fieldHelpers = [];
            return TemplateHelpers;
        })();
        Ui.TemplateHelpers = TemplateHelpers;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        Ui.AnalyticsActionCauseList = {
            interfaceLoad: {
                name: "interfaceLoad",
                type: 'interface'
            },
            interfaceChange: {
                name: "interfaceChange",
                type: 'interface',
                metaMap: { interfaceChangeTo: 1 }
            },
            contextRemove: {
                name: "contextRemove",
                type: 'misc',
                metaMap: { contextName: 1 }
            },
            didyoumeanAutomatic: {
                name: "didyoumeanAutomatic",
                type: 'misc'
            },
            didyoumeanClick: {
                name: "didyoumeanClick",
                type: 'misc'
            },
            resultsSort: {
                name: "resultsSort",
                type: 'misc',
                metaMap: { resultsSortBy: 1 }
            },
            searchboxSubmit: {
                name: "searchboxSubmit",
                type: 'search box'
            },
            searchboxClear: {
                name: "searchboxClear",
                type: 'search box'
            },
            searchboxAsYouType: {
                name: "searchboxAsYouType",
                type: 'search box'
            },
            breadcrumbFacet: {
                name: "breadcrumbFacet",
                type: 'breadcrumb',
                metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
            },
            breadcrumbResetAll: {
                name: "breadcrumbResetAll",
                type: 'breadcrumb'
            },
            documentTag: {
                name: "documentTag",
                type: 'document',
                metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
            },
            documentField: {
                name: "documentField",
                type: 'document',
                metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
            },
            documentQuickView: {
                name: "documentQuickView",
                type: 'document',
                metaMap: { documentTitle: 1, documentURL: 2 }
            },
            documentOpen: {
                name: 'documentOpen',
                type: 'document',
                metaMap: { documentTitle: 1, documentURL: 2 }
            },
            omniboxFacet: {
                name: 'omniboxFacet',
                type: 'omnibox',
                metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
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
            caseCreate: {
                name: "caseCreate",
                type: "case"
            },
            casecontextAdd: {
                name: "casecontextAdd",
                type: "casecontext",
                metaMap: { caseID: 5 }
            },
            casecontextRemove: {
                name: "casecontextRemove",
                type: "casecontext",
                metaMap: { caseID: 5 }
            },
            preferencesChange: {
                name: "preferencesChange",
                type: 'preferences',
                metaMap: { preferenceName: 1, preferenceType: 2 }
            },
            getUserHistory: {
                name: "getUserHistory",
                type: "userHistory"
            },
            caseAttach: {
                name: "caseAttach",
                type: 'case',
                metaMap: { documentTitle: 1, resultUriHash: 3, articleID: 4, caseID: 5 }
            },
            caseDetach: {
                name: "caseDetach",
                type: 'case',
                metaMap: { documentTitle: 1, resultUriHash: 3, articleID: 4, caseID: 5 }
            },
            customfiltersChange: {
                name: "customfiltersChange",
                type: 'customfilters',
                metaMap: { customFilterName: 1, customFilterType: 2, customFilterExpression: 3 }
            },
            pagerNumber: {
                name: "pagerNumber",
                type: "getMoreResults",
                metaMap: { "pagerNumber": 1 }
            },
            pagerNext: {
                name: "pagerNext",
                type: "getMoreResults",
                metaMap: { "pagerNumber": 1 }
            },
            pagerPrevious: {
                name: "pagerPrevious",
                type: "getMoreResults",
                metaMap: { "pagerNumber": 1 }
            },
            pagerScrolling: {
                name: "pagerScrolling",
                type: "getMoreResults"
            },
            searchFromLink: {
                name: 'searchFromLink',
                type: 'interface'
            },
            triggerQuery: {
                name: "triggerQuery",
                type: 'misc'
            },
            queryError: {
                name: "query",
                type: "errors",
                metaMap: { "query": 1, "aq": 2, "cq": 3, "dq": 4, "errorType": 5, "errorMessage": 6 }
            }
        };
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
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
                var deferred = Coveo.$.Deferred();
                deferred.resolve([]);
                return deferred;
            };
            NoopAnalyticsClient.prototype.getCurrentVisitId = function () {
                return Coveo.$.Deferred().resolve(null);
            };
            NoopAnalyticsClient.prototype.sendAllPendingEvents = function () {
            };
            NoopAnalyticsClient.prototype.warnAboutSearchEvent = function () {
            };
            return NoopAnalyticsClient;
        })();
        Ui.NoopAnalyticsClient = NoopAnalyticsClient;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Models;
    (function (Models) {
        var Model = (function (_super) {
            __extends(Model, _super);
            function Model(element, id, attributes, bindings) {
                _super.call(this, element, id, bindings);
                this.eventNameSpace = id;
                this.defaultAttributes = Coveo.$.extend(true, {}, this.defaultAttributes, attributes); //Copy to default attributes
                this.attributes = attributes;
                this.logger.debug("Creating model");
            }
            Model.prototype.set = function (attribute, value, options) {
                var toSet = {};
                toSet[attribute] = value;
                this.setMultiple(toSet, options);
            };
            Model.prototype.getAttributes = function () {
                var _this = this;
                var attributes = {};
                Coveo._.each(this.attributes, function (attribute, key) {
                    if (Coveo._.isObject(attribute)) {
                        if (!Coveo.Utils.objectEqual(attribute, _this.defaultAttributes[key])) {
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
                var changedAccumulator = [];
                Coveo._.each(toSet, function (value, attribute) {
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
                            changedAccumulator.push(attribute);
                        }
                    }
                });
                if (anythingChanged && (options == null || !options.silent)) {
                    Coveo._.each(changedAccumulator, function (chg) {
                        _this.attributeHasChangedEvent(chg);
                    });
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
                return this.eventNameSpace + ":" + event;
            };
            Model.prototype.attributesHasChangedEvent = function () {
                Coveo.$(this.element).trigger(this.getEventName(Model.eventTypes.change), this.createAttributesChangedArgument());
            };
            Model.prototype.attributeHasChangedEvent = function (attr) {
                Coveo.$(this.element).trigger(this.getEventName(Model.eventTypes.changeOne) + attr, this.createAttributeChangedArgument(attr));
            };
            Model.prototype.preprocessEvent = function (attributes) {
                Coveo.$(this.element).trigger(this.getEventName(Model.eventTypes.preprocess), attributes);
            };
            Model.prototype.modelWasResetEvent = function () {
                Coveo.$(this.element).trigger(this.getEventName(Model.eventTypes.reset), this.createModelChangedArgument());
            };
            Model.prototype.anyEvent = function () {
                Coveo.$(this.element).trigger(this.getEventName(Model.eventTypes.all), this.createModelChangedArgument());
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
                Coveo.Assert.check(Coveo._.has(this.attributes, attribute));
            };
            Model.prototype.validateType = function (attribute, value) {
                if (!Coveo.Utils.isNullOrUndefined(this.attributes[attribute]) && !Coveo.Utils.isUndefined(value)) {
                    if (Coveo._.isNumber(this.attributes[attribute])) {
                        Coveo.Assert.check(Coveo._.isNumber(value) && !isNaN(value), "Non-matching type");
                    }
                    else if (Coveo._.isBoolean(this.attributes[attribute])) {
                        Coveo.Assert.check(Coveo._.isBoolean(value) || Coveo.Utils.parseBooleanIfNotUndefined(value) !== undefined, "Non-matching type");
                    }
                    else {
                        if (!Coveo.Utils.isNullOrUndefined(this.defaultAttributes[attribute])) {
                            Coveo.Assert.check(typeof value === typeof this.defaultAttributes[attribute], "Non-matching type");
                        }
                    }
                }
            };
            Model.prototype.parseToCorrectType = function (attribute, value) {
                if (Coveo._.isNumber(this.attributes[attribute])) {
                    return parseInt(value, 10);
                }
                else if (Coveo._.isBoolean(this.attributes[attribute])) {
                    if (Coveo._.isBoolean(value)) {
                        return value;
                    }
                    else {
                        return Coveo.Utils.parseBooleanIfNotUndefined(value);
                    }
                }
                return value;
            };
            Model.prototype.checkIfAttributeChanged = function (attribute, newValue) {
                var oldValue = this.attributes[attribute];
                if (Coveo._.isNumber(oldValue) || Coveo._.isString(oldValue) || Coveo._.isBoolean(oldValue)) {
                    return oldValue !== newValue;
                }
                if (Coveo._.isArray(oldValue)) {
                    return !Coveo.Utils.arrayEqual(oldValue, newValue);
                }
                if (Coveo._.isObject(oldValue)) {
                    return !Coveo.Utils.objectEqual(oldValue, newValue);
                }
                return true;
            };
            //changeOne: is when one specific attribute change, change is when any attribute change
            Model.eventTypes = {
                preprocess: "preprocess",
                changeOne: "change:",
                change: "change",
                reset: "reset",
                all: "all"
            };
            return Model;
        })(Coveo.Ui.Component);
        Models.Model = Model;
    })(Models = Coveo.Models || (Coveo.Models = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Models;
    (function (Models) {
        var QueryStateModel = (function (_super) {
            __extends(QueryStateModel, _super);
            function QueryStateModel(element, attributes, bindings) {
                var merged = Coveo._.extend({}, QueryStateModel.defaultAttributes, attributes);
                _super.call(this, element, QueryStateModel.ID, merged, bindings);
            }
            QueryStateModel.getFacetId = function (id, include) {
                if (include === void 0) { include = true; }
                return 'f:' + id + (include ? '' : ':not');
            };
            QueryStateModel.getFacetOperator = function (id) {
                return 'f:' + id + ':operator';
            };
            QueryStateModel.getFacetLookupValue = function (id) {
                return QueryStateModel.getFacetId(id) + ":lookupvalues";
            };
            QueryStateModel.prototype.atLeastOneFacetIsActive = function () {
                return !Coveo._.isUndefined(Coveo._.find(this.attributes, function (value, key) {
                    return key.indexOf("f:") == 0 && Coveo.Utils.isNonEmptyArray(value) && key.indexOf(':range') < 0;
                }));
            };
            QueryStateModel.prototype.set = function (attribute, value, options) {
                this.validate(attribute, value);
                _super.prototype.set.call(this, attribute, value, options);
            };
            QueryStateModel.prototype.validate = function (attribute, value) {
                if (attribute == QueryStateModel.attributesEnum.first) {
                    Coveo.Assert.isLargerOrEqualsThan(0, value);
                }
            };
            QueryStateModel.ID = "state";
            QueryStateModel.defaultAttributes = {
                q: "",
                first: 0,
                t: "",
                hd: "",
                hq: "",
                sort: "",
                tg: ""
            };
            QueryStateModel.attributesEnum = {
                q: "q",
                first: "first",
                t: "t",
                sort: "sort",
                hd: "hd",
                hq: "hq",
                tg: "tg"
            };
            return QueryStateModel;
        })(Models.Model);
        Models.QueryStateModel = QueryStateModel;
        function setState(model, args) {
            Coveo.Assert.exists(model);
            if (args.length == 0 || args[0] == undefined) {
                // No args means return the model
                return model;
            }
            else if (args.length == 1 && Coveo.Utils.isNonEmptyString(args[0])) {
                // One string arg means retrieve value from model
                return model.get(args[0]);
            }
            else if (Coveo._.isObject(args[0])) {
                // One dictionary means set multiple values
                var toSet = args[0];
                var options = Coveo.$.extend({ customAttribute: true }, args[1]);
                return model.setMultiple(toSet, options);
            }
            else if (args.length > 1) {
                // Otherwise we're setting a value
                var name = args[0];
                var value = args[1];
                var options = Coveo.$.extend({ customAttribute: true }, args[2]);
                Coveo.Assert.isNonEmptyString(name);
                return model.set(name, value, options);
            }
        }
        Models.setState = setState;
        Coveo.Ui.CoveoJQuery.registerNamedMethod('state', function (element) {
            Coveo.Assert.exists(element);
            var model = Coveo.Ui.Component.resolveBinding(element, QueryStateModel);
            return setState(model, Coveo._.toArray(arguments).slice(1));
        });
    })(Models = Coveo.Models || (Coveo.Models = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Models;
    (function (Models) {
        var ComponentStateModel = (function (_super) {
            __extends(ComponentStateModel, _super);
            function ComponentStateModel(element, window_) {
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
            ComponentStateModel.ID = "ComponentState";
            return ComponentStateModel;
        })(Models.Model);
        Models.ComponentStateModel = ComponentStateModel;
    })(Models = Coveo.Models || (Coveo.Models = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Models;
    (function (Models) {
        var ComponentOptionsModel = (function (_super) {
            __extends(ComponentOptionsModel, _super);
            function ComponentOptionsModel(element, attributes, window_) {
                var merged = Coveo._.extend({}, ComponentOptionsModel.defaultAttributes, attributes);
                _super.call(this, element, ComponentOptionsModel.ID, merged);
            }
            ComponentOptionsModel.ID = "ComponentOptions";
            ComponentOptionsModel.defaultAttributes = {
                resultLink: undefined
            };
            ComponentOptionsModel.attributesEnum = {
                resultLink: "resultLink"
            };
            return ComponentOptionsModel;
        })(Models.Model);
        Models.ComponentOptionsModel = ComponentOptionsModel;
    })(Models = Coveo.Models || (Coveo.Models = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Controllers;
    (function (Controllers) {
        var HistoryController = (function (_super) {
            __extends(HistoryController, _super);
            function HistoryController(element, _window, model, queryController) {
                var _this = this;
                _super.call(this, element, HistoryController.ID);
                this._window = _window;
                this.model = model;
                this.queryController = queryController;
                this.ignoreNextHashChange = false;
                this.initialHashChange = false;
                this.willUpdateHash = false;
                this._window = this._window || window;
                this.model = model || this.resolveQueryStateModel();
                this.queryController = queryController || this.resolveQueryController();
                Coveo.Assert.exists(this.model);
                Coveo.Assert.exists(this.queryController);
                Coveo.$(this.element).on(Coveo.Events.InitializationEvents.restoreHistoryState, function () {
                    _this.logger.trace("Restore history state. Update model");
                    _this.updateModelFromHash();
                });
                Coveo.$(this.element).on(this.model.getEventName(Coveo.Models.Model.eventTypes.all), function () {
                    _this.logger.trace("Query model changed. Update hash");
                    _this.updateHashFromModel();
                });
                Coveo.$(this._window).on('hashchange', Coveo.$.proxy(this.handleHashChange, this));
            }
            HistoryController.prototype.handleHashChange = function () {
                this.logger.trace("History hash changed");
                if (this.ignoreNextHashChange) {
                    this.logger.trace("History hash change ignored");
                    this.ignoreNextHashChange = false;
                    return;
                }
                this.updateModelFromHash();
                this.queryController.executeQuery();
            };
            HistoryController.prototype.updateHashFromModel = function () {
                var _this = this;
                this.logger.trace("Model -> history hash");
                if (!this.willUpdateHash) {
                    Coveo.Defer.defer(function () {
                        var attributes = _this.model.getAttributes();
                        _this.setHashValues(attributes);
                        _this.logger.debug("Saving state to hash", attributes);
                        _this.willUpdateHash = false;
                    });
                    this.willUpdateHash = true;
                }
            };
            HistoryController.prototype.updateModelFromHash = function () {
                var _this = this;
                this.logger.trace("History hash -> model");
                var toSet = {};
                Coveo._.each(this.model.attributes, function (value, key, obj) {
                    var valToSet = _this.getHashValue(key);
                    if (valToSet == undefined) {
                        valToSet = _this.model.defaultAttributes[key];
                    }
                    toSet[key] = valToSet;
                });
                this.initialHashChange = true;
                this.model.setMultiple(toSet);
            };
            HistoryController.prototype.getHashValue = function (value) {
                Coveo.Assert.isNonEmptyString(value);
                return Coveo.HashUtils.getValue(value, Coveo.HashUtils.getHash(this._window));
            };
            HistoryController.prototype.setHashValues = function (values) {
                this.logger.trace("Update history hash");
                var hash = '#' + Coveo.HashUtils.encodeValues(values);
                this.ignoreNextHashChange = this._window.location.hash != hash;
                this.logger.trace("ignoreNextHashChange", this.ignoreNextHashChange);
                this.logger.trace("initialHashChange", this.initialHashChange);
                this.logger.trace("from", this._window.location.hash, "to", hash);
                if (this.initialHashChange) {
                    this.initialHashChange = false;
                    this._window.location.replace(hash);
                    this.logger.trace("History hash modified", hash);
                }
                else if (this.ignoreNextHashChange) {
                    this._window.location.hash = hash;
                    this.logger.trace("History hash created", hash);
                }
            };
            HistoryController.ID = 'HistoryController';
            return HistoryController;
        })(Coveo.Ui.Component);
        Controllers.HistoryController = HistoryController;
    })(Controllers = Coveo.Controllers || (Coveo.Controllers = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
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
            return "coveo-" + this.id;
        };
        return LocalStorageUtils;
    })();
    Coveo.LocalStorageUtils = LocalStorageUtils;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Controllers;
    (function (Controllers) {
        var LocalStorageHistoryController = (function (_super) {
            __extends(LocalStorageHistoryController, _super);
            function LocalStorageHistoryController(element, _window, model, queryController) {
                var _this = this;
                _super.call(this, element, LocalStorageHistoryController.ID);
                this._window = _window;
                this.model = model;
                this.queryController = queryController;
                if (!_window['localStorage']) {
                    new Coveo.Logger(element).info('No local storage available in current browser. LocalStorageHistoryController cannot initialize itself', this);
                }
                else {
                    this.storage = new Coveo.LocalStorageUtils(LocalStorageHistoryController.ID);
                    this.model = model || this.resolveQueryStateModel();
                    this.queryController = queryController || this.resolveQueryController();
                    Coveo.Assert.exists(this.model);
                    Coveo.Assert.exists(this.queryController);
                    Coveo.$(this.element).on(Coveo.Events.InitializationEvents.restoreHistoryState, function () { return _this.updateModelFromLocalStorage(); });
                    Coveo.$(this.element).on(this.model.getEventName(Coveo.Models.Model.eventTypes.all), function () { return _this.updateLocalStorageFromModel(); });
                }
            }
            LocalStorageHistoryController.prototype.updateLocalStorageFromModel = function () {
                var attributes = this.model.getAttributes();
                this.setStorageValues(attributes);
                this.logger.debug("Saving state to localstorage", attributes);
            };
            LocalStorageHistoryController.prototype.updateModelFromLocalStorage = function () {
                var _this = this;
                var toSet = {};
                var loadedFromStorage = this.storage.load();
                Coveo._.each(this.model.attributes, function (value, key, obj) {
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
        })(Coveo.Ui.Component);
        Controllers.LocalStorageHistoryController = LocalStorageHistoryController;
    })(Controllers = Coveo.Controllers || (Coveo.Controllers = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Controllers;
    (function (Controllers) {
        var DefaultQueryOptions = (function () {
            function DefaultQueryOptions() {
                this.searchAsYouType = false;
                this.closeModalBox = true;
                this.cancel = false;
            }
            return DefaultQueryOptions;
        })();
        var QueryController = (function (_super) {
            __extends(QueryController, _super);
            function QueryController(element, options) {
                _super.call(this, element, QueryController.ID);
                this.options = options;
                this.showingExecutingQueryAnimation = false;
                this.localStorage = new Coveo.LocalStorageUtils('lastQueryHash');
                Coveo.Assert.exists(element);
                Coveo.Assert.exists(options);
                this.firstQuery = true;
            }
            QueryController.prototype.setEndpoint = function (endpoint) {
                this.overrideEndpoint = endpoint;
                this.logger.debug('Endpoint set', endpoint);
            };
            QueryController.prototype.getEndpoint = function () {
                var endpoint = this.overrideEndpoint || this.options.endpoint;
                // We must wrap the endpoint in a decorator that'll add the call options
                // we obtain by firing the proper event. Those are used for authentication
                // providers, and I guess other stuff later on.
                return new Coveo.Rest.SearchEndpointWithDefaultCallOptions(endpoint, this.getCallOptions());
            };
            QueryController.prototype.getLastQuery = function () {
                return this.lastQuery || new Coveo.Ui.QueryBuilder().build();
            };
            // This field is exposed for components rendered in the results or on-demand which
            // need access to the entire query. For example, the QuickViewDocument need to pass
            // the entire query to the Search API. For other components, QueryStateModel or
            // listening to events like 'doneBuildingQuery' is the way to go.
            QueryController.prototype.getLastQueryHash = function () {
                if (this.lastQueryHash != null) {
                    return this.lastQueryHash;
                }
                this.loadLastQueryHash();
                return this.lastQueryHash || this.queryHash(new Coveo.Ui.QueryBuilder().build());
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
            QueryController.prototype.saveLastQuery = function () {
                this.localStorage.save({
                    expire: new Date().getTime() + 1000 * 60 * 30,
                    hash: this.lastQueryHash,
                    uid: this.lastSearchUid
                });
            };
            QueryController.prototype.executeQuery = function (options) {
                var _this = this;
                if (options == null) {
                    options = Coveo._.extend(new DefaultQueryOptions(), options);
                }
                if (options.closeModalBox) {
                    Coveo.ModalBox.close(true);
                }
                this.logger.debug('Executing new query', query);
                var options = Coveo._.extend(new DefaultQueryOptions(), options);
                this.cancelAnyCurrentPendingQuery();
                if (options.beforeExecuteQuery != null) {
                    options.beforeExecuteQuery();
                }
                if (!options.ignoreWarningSearchEvent) {
                    this.usageAnalytics.warnAboutSearchEvent();
                }
                this.showExecutingQueryAnimation();
                var deferred = Coveo.$.Deferred();
                this.currentPendingQuery = deferred;
                var dataToSendOnNewQuery = {
                    deferred: deferred,
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
                //The query was canceled
                if (!queryBuilder) {
                    return;
                }
                var query = queryBuilder.build();
                var endpointToUse = this.getEndpoint();
                var deferredFromEndpoint = endpointToUse.search(query);
                deferredFromEndpoint.done(function (queryResults) {
                    Coveo.Assert.exists(queryResults);
                    var firstQuery = _this.firstQuery;
                    if (_this.firstQuery) {
                        _this.firstQuery = false;
                    }
                    // If our deferred is no longer the current one, then the query
                    // has been cancel. We should do nothing here.
                    if (deferred !== _this.currentPendingQuery) {
                        return;
                    }
                    _this.logger.debug('Query results received', query, queryResults);
                    if ((!firstQuery || _this.searchInterface.options.enableHistory) && _this.keepLastSearchUid(query, queryResults)) {
                        queryResults.searchUid = _this.getLastSearchUid();
                        queryResults._reusedSearchUid = true;
                        Coveo.QueryUtils.setPropertyOnResults(queryResults, "queryUid", _this.getLastSearchUid());
                    }
                    else {
                        _this.lastSearchUid = queryResults.searchUid;
                    }
                    _this.lastQuery = query;
                    _this.lastQueryHash = _this.queryHash(query, queryResults);
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
                        _this.executeQuery().done(function (queryResults) {
                            deferred.resolve(queryResults);
                        }).fail(function (data, error) {
                            deferred.reject(data, error);
                        });
                    }
                    else {
                        _this.lastQueryBuilder = queryBuilder;
                        _this.currentPendingQuery.resolve(queryResults);
                        _this.currentPendingQuery = undefined;
                        var dataToSendOnSuccess = {
                            queryBuilder: queryBuilder,
                            query: query,
                            results: queryResults,
                            searchAsYouType: options.searchAsYouType
                        };
                        _this.querySuccessEvent(dataToSendOnSuccess);
                        Coveo.Defer.defer(function () {
                            _this.deferredQuerySuccessEvent(dataToSendOnSuccess);
                            _this.hideExecutingQueryAnimation();
                        });
                    }
                });
                deferredFromEndpoint.fail(function (data, error) {
                    // If our deferred is no longer the current one, then the query
                    // has been cancel. We should do nothing here.
                    if (deferred !== _this.currentPendingQuery) {
                        return;
                    }
                    _this.logger.error('Query triggered an error', query, error);
                    _this.currentPendingQuery.reject(error);
                    _this.currentPendingQuery = undefined;
                    var dataToSendOnError = {
                        queryBuilder: queryBuilder,
                        endpoint: endpointToUse,
                        query: query,
                        error: error,
                        searchAsYouType: options.searchAsYouType
                    };
                    _this.queryError(dataToSendOnError);
                    _this.hideExecutingQueryAnimation();
                });
                var dataToSendDuringQuery = {
                    queryBuilder: queryBuilder,
                    query: query,
                    deferred: deferred,
                    searchAsYouType: options.searchAsYouType
                };
                this.duringQueryEvent(dataToSendDuringQuery);
                return deferred;
            };
            QueryController.prototype.deferExecuteQuery = function (options) {
                var _this = this;
                this.showExecutingQueryAnimation();
                Coveo.Defer.defer(function () { return _this.executeQuery(options); });
            };
            QueryController.prototype.ensureCreatedQueryBuilder = function () {
                if (!this.createdOneQueryBuilder) {
                    this.createQueryBuilder(new DefaultQueryOptions());
                }
            };
            QueryController.prototype.fetchMore = function (count) {
                var _this = this;
                if (this.currentPendingQuery != undefined) {
                    return undefined;
                }
                var deferred = this.currentPendingQuery = Coveo.$.Deferred();
                var queryBuilder = new Coveo.Ui.QueryBuilder();
                this.continueLastQueryBuilder(queryBuilder, count);
                var query = queryBuilder.build();
                deferred = this.getEndpoint().search(query);
                var dataToSendDuringQuery = {
                    queryBuilder: queryBuilder,
                    query: query,
                    deferred: deferred,
                    searchAsYouType: false
                };
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.duringFetchMoreQuery, dataToSendDuringQuery);
                this.lastQueryBuilder = queryBuilder;
                this.lastQuery = query;
                deferred.done(function (results) {
                    // We re-use the search id from the initial search here, even though the
                    // server provided us with a new one. "Fetch mores" are considered to be
                    // the same query from an analytics point of view.
                    _this.currentPendingQuery = undefined;
                    var dataToSendOnPreprocessResult = {
                        queryBuilder: queryBuilder,
                        query: query,
                        results: results,
                        searchAsYouType: false
                    };
                    _this.preprocessResultsEvent(dataToSendOnPreprocessResult);
                    Coveo.QueryUtils.setIndexAndUidOnQueryResults(query, results, _this.getLastSearchUid(), results.pipeline, results.splitTestRun);
                    var dataToSendOnFetchMoreSuccess = {
                        query: query,
                        results: results,
                        queryBuilder: queryBuilder,
                        searchAsYouType: false
                    };
                    _this.fetchMoreSuccessEvent(dataToSendOnFetchMoreSuccess);
                });
                return deferred;
            };
            QueryController.prototype.isStandaloneSearchBox = function () {
                return Coveo.Utils.isNonEmptyString(this.options.searchPageUri);
            };
            QueryController.prototype.cancelQuery = function () {
                this.cancelAnyCurrentPendingQuery();
                this.hideExecutingQueryAnimation();
            };
            QueryController.prototype.continueLastQueryBuilder = function (queryBuilder, count) {
                Coveo.$.extend(queryBuilder, this.lastQueryBuilder);
                queryBuilder.firstResult = queryBuilder.firstResult + queryBuilder.numberOfResults;
                queryBuilder.numberOfResults = count;
            };
            QueryController.prototype.createQueryBuilder = function (options) {
                Coveo.Assert.exists(options);
                this.createdOneQueryBuilder = true;
                var queryBuilder = new Coveo.Ui.QueryBuilder();
                //Default values, components will probably override them if they exists
                queryBuilder.language = String['locale'];
                queryBuilder.firstResult = queryBuilder.firstResult || 0;
                queryBuilder.numberOfResults = this.options.resultsPerPage;
                queryBuilder.filterField = this.options.filterField;
                queryBuilder.excerptLength = this.options.excerptLength;
                queryBuilder.enableCollaborativeRating = this.options.enableCollaborativeRating;
                if (Coveo.Utils.isNonEmptyString(this.options.hiddenExpression)) {
                    queryBuilder.advancedExpression.add(this.options.hiddenExpression);
                }
                if (Coveo.Utils.isNonEmptyString(this.options.timezone)) {
                    queryBuilder.timezone = this.options.timezone;
                }
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
                return queryBuilder;
            };
            QueryController.prototype.cancelAnyCurrentPendingQuery = function () {
                if (Coveo.Utils.exists(this.currentPendingQuery)) {
                    this.logger.debug('Cancelling current pending query');
                    this.currentPendingQuery.reject();
                    this.currentPendingQuery = undefined;
                    return true;
                }
                return false;
            };
            QueryController.prototype.showExecutingQueryAnimation = function () {
                if (!this.showingExecutingQueryAnimation) {
                    Coveo.$(this.root).addClass('coveo-executing-query');
                    this.showingExecutingQueryAnimation = true;
                }
            };
            QueryController.prototype.hideExecutingQueryAnimation = function () {
                if (this.showingExecutingQueryAnimation) {
                    Coveo.$(this.root).removeClass('coveo-executing-query');
                    this.showingExecutingQueryAnimation = false;
                }
            };
            QueryController.prototype.keepLastSearchUid = function (query, queryResults) {
                return this.getLastQueryHash() == this.queryHash(query, queryResults);
            };
            QueryController.prototype.queryHash = function (query, queryResults) {
                var queryHash = JSON.stringify(Coveo._.omit(query, 'firstResult', 'groupBy', 'debug'));
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
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.buildingCallOptions, args);
                return args.options;
            };
            QueryController.prototype.newQueryEvent = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.newQuery, args);
            };
            QueryController.prototype.buildingQueryEvent = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.buildingQuery, args);
            };
            QueryController.prototype.doneBuildingQueryEvent = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.doneBuildingQuery, args);
            };
            QueryController.prototype.duringQueryEvent = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.duringQuery, args);
            };
            QueryController.prototype.querySuccessEvent = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.querySuccess, args);
            };
            QueryController.prototype.fetchMoreSuccessEvent = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.fetchMoreSuccess, args);
            };
            QueryController.prototype.deferredQuerySuccessEvent = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.deferredQuerySuccess, args);
            };
            QueryController.prototype.queryError = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.queryError, args);
            };
            QueryController.prototype.preprocessResultsEvent = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.preprocessResults, args);
            };
            QueryController.prototype.noResultEvent = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.noResults, args);
            };
            QueryController.ID = 'QueryController';
            return QueryController;
        })(Coveo.Ui.Component);
        Controllers.QueryController = QueryController;
        Coveo.Ui.CoveoJQuery.registerNamedMethod('executeQuery', function (element) {
            Coveo.Assert.exists(element);
            var queryController = Coveo.Ui.Component.resolveBinding(element, QueryController);
            Coveo.Assert.exists(queryController);
            queryController.executeQuery();
        });
    })(Controllers = Coveo.Controllers || (Coveo.Controllers = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Events;
    (function (Events) {
        var QueryEvents = (function () {
            function QueryEvents() {
            }
            QueryEvents.newQuery = "newQuery";
            QueryEvents.buildingQuery = "buildingQuery";
            QueryEvents.doneBuildingQuery = "doneBuildingQuery";
            QueryEvents.duringQuery = "duringQuery";
            QueryEvents.duringFetchMoreQuery = "duringFetchMoreQuery";
            QueryEvents.querySuccess = "querySuccess";
            QueryEvents.fetchMoreSuccess = "fetchMoreSuccess";
            QueryEvents.deferredQuerySuccess = "deferredQuerySuccess";
            QueryEvents.queryError = "queryError";
            QueryEvents.preprocessResults = "preprocessResults";
            QueryEvents.noResults = "noResults";
            QueryEvents.buildingCallOptions = "buildingCallOptions";
            return QueryEvents;
        })();
        Events.QueryEvents = QueryEvents;
    })(Events = Coveo.Events || (Coveo.Events = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Events;
    (function (Events) {
        var InitializationEvents = (function () {
            function InitializationEvents() {
            }
            InitializationEvents.beforeInitialization = "beforeInitialization";
            InitializationEvents.afterComponentsInitialization = "afterComponentsInitialization";
            InitializationEvents.restoreHistoryState = "restoreHistoryState";
            InitializationEvents.afterInitialization = "afterInitialization";
            return InitializationEvents;
        })();
        Events.InitializationEvents = InitializationEvents;
    })(Events = Coveo.Events || (Coveo.Events = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Events;
    (function (Events) {
        var ResultListEvents = (function () {
            function ResultListEvents() {
            }
            ResultListEvents.newResultsDisplayed = "newResultsDisplayed";
            ResultListEvents.newResultDisplayed = "newResultDisplayed";
            ResultListEvents.openQuickView = "openQuickView";
            return ResultListEvents;
        })();
        Events.ResultListEvents = ResultListEvents;
    })(Events = Coveo.Events || (Coveo.Events = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Events;
    (function (Events) {
        var ImageResultListEvents = (function () {
            function ImageResultListEvents() {
            }
            ImageResultListEvents.imageResultsLayoutComplete = "imageResultsLayoutComplete";
            return ImageResultListEvents;
        })();
        Events.ImageResultListEvents = ImageResultListEvents;
    })(Events = Coveo.Events || (Coveo.Events = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Events;
    (function (Events) {
        var UserActionEvents = (function () {
            function UserActionEvents() {
            }
            UserActionEvents.enterOnSearchBox = "enterOnSearchBox";
            UserActionEvents.quickViewLoaded = "quickViewLoaded";
            UserActionEvents.openQuickView = "openQuickView";
            return UserActionEvents;
        })();
        Events.UserActionEvents = UserActionEvents;
    })(Events = Coveo.Events || (Coveo.Events = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Events;
    (function (Events) {
        var PreferencesPanelEvents = (function () {
            function PreferencesPanelEvents() {
            }
            PreferencesPanelEvents.savePreferences = "savePreferences";
            PreferencesPanelEvents.exitPreferencesWithoutSave = "exitPreferencesWithoutSave";
            return PreferencesPanelEvents;
        })();
        Events.PreferencesPanelEvents = PreferencesPanelEvents;
    })(Events = Coveo.Events || (Coveo.Events = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var SearchInterface = (function (_super) {
            __extends(SearchInterface, _super);
            function SearchInterface(element, options, analyticsOptions, _window) {
                var _this = this;
                if (_window === void 0) { _window = window; }
                _super.call(this, element, SearchInterface.ID);
                this.element = element;
                this.options = options;
                this.analyticsOptions = analyticsOptions;
                this.options = Ui.ComponentOptions.initComponentOptions(element, SearchInterface, options);
                Coveo.Assert.exists(element);
                Coveo.Assert.exists(this.options);
                if (this.options.hideUntilFirstQuery) {
                    this.showAndHideFirstQueryAnimation();
                }
                this.root = element;
                this.usageAnalytics = this._initializeAnalytics();
                this.queryStateModel = new Coveo.Models.QueryStateModel(element);
                this.componentStateModel = new Coveo.Models.ComponentStateModel(element);
                this.componentOptionsModel = new Coveo.Models.ComponentOptionsModel(element);
                this.queryController = new Coveo.Controllers.QueryController(element, this.options);
                this.searchInterface = this;
                var eventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.preprocess);
                Coveo.$(this.element).on(eventName, function (e, args) { return _this.handlePreprocessQueryStateModel(args); });
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.buildingQuery, Coveo.$.proxy(this.handleBuildingQuery, this));
                if (this.options.enableHistory) {
                    if (!this.options.useLocalStorageForHistory) {
                        new Coveo.Controllers.HistoryController(element, _window, this.queryStateModel, this.queryController);
                    }
                    else {
                        new Coveo.Controllers.LocalStorageHistoryController(element, _window, this.queryStateModel, this.queryController);
                    }
                }
                else {
                    Coveo.$(this.element).on(Coveo.Events.InitializationEvents.restoreHistoryState, function () { return _this.queryStateModel.setMultiple(_this.queryStateModel.defaultAttributes); });
                }
                Coveo.$(this.element).css('display', 'block'); //shows the UI, since it's been hidden while loading
                this.setupDebugInfo();
            }
            SearchInterface.prototype._initializeAnalytics = function () {
                var analyticsRef = Ui.Component.getComponentRef("Analytics");
                if (analyticsRef) {
                    return analyticsRef.create(this.element, this.analyticsOptions);
                }
                return new Ui.NoopAnalyticsClient();
            };
            SearchInterface.prototype.setupDebugInfo = function () {
                var _this = this;
                if (this.options.enableDebugInfo) {
                    //Debug component might not be present in the source file : check for it first
                    var debugRef = Ui.Component.getComponentRef("Debug");
                    if (debugRef) {
                        setTimeout(function () { return new debugRef(_this.element); });
                    }
                    else {
                        this.logger.warn('Options to enable debug component was true, but not present in the Coveo object (not compiled)');
                    }
                }
            };
            SearchInterface.prototype.showAndHideFirstQueryAnimation = function () {
                var _this = this;
                this.displayFirstQueryWaitAnimation();
                // On first query success, wait for call stack to finish, then remove the animation
                Coveo.$(this.element).one(Coveo.Events.QueryEvents.querySuccess, function () {
                    Coveo._.defer(function () { return _this.hideFirstQueryWaitAnimation(); });
                });
                Coveo.$(this.element).on(Coveo.Events.QueryEvents.queryError, function () {
                    Coveo._.defer(function () { return _this.hideFirstQueryWaitAnimation(); });
                });
            };
            SearchInterface.prototype.displayFirstQueryWaitAnimation = function () {
                Coveo.$(this.options.firstLoadingAnimation).remove();
                Coveo.$(this.element).addClass('coveo-waiting-for-first-query');
                Coveo.$(this.element).append(this.options.firstLoadingAnimation);
            };
            SearchInterface.prototype.hideFirstQueryWaitAnimation = function () {
                Coveo.$(this.options.firstLoadingAnimation).remove();
                Coveo.$(this.element).removeClass('coveo-waiting-for-first-query');
            };
            SearchInterface.prototype.handlePreprocessQueryStateModel = function (args) {
                var tgFromModel = this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.tg);
                var tFromModel = this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.t);
                var tg = tgFromModel;
                var t = tFromModel;
                // if you want to set the tab group
                if (args.tg !== undefined) {
                    args.tg = this.getTabGroupId(args.tg);
                    if (tg != args.tg) {
                        args.t = args.t || Coveo.Models.QueryStateModel.defaultAttributes.t;
                        args.sort = args.sort || Coveo.Models.QueryStateModel.defaultAttributes.sort;
                        tg = args.tg;
                    }
                }
                if (args.t !== undefined) {
                    args.t = this.getTabId(tg, args.t);
                    if (t != args.t) {
                        args.sort = args.sort || Coveo.Models.QueryStateModel.defaultAttributes.sort;
                        t = args.t;
                    }
                }
                if (args.sort !== undefined) {
                    args.sort = this.getSort(t, args.sort);
                }
            };
            SearchInterface.prototype.getTabGroupId = function (tabGroupId) {
                var tabGroupRef = Ui.Component.getComponentRef("TabGroup");
                if (tabGroupRef) {
                    var tabGroups = this.searchInterface.components(tabGroupRef.ID);
                    // check if the tabgroup is correct
                    if (tabGroupId != Coveo.Models.QueryStateModel.defaultAttributes.tg && Coveo._.any(tabGroups, function (tabGroup) { return !tabGroup.disabled && tabGroupId == tabGroup.options.id; })) {
                        return tabGroupId;
                    }
                    // select the first tabGroup
                    if (tabGroups.length > 0) {
                        return tabGroups[0].options.id;
                    }
                }
                return Coveo.Models.QueryStateModel.defaultAttributes.tg;
            };
            SearchInterface.prototype.getTabId = function (tabGroupId, tabId) {
                var tabRef = Ui.Component.getComponentRef("Tab");
                var tabGroupRef = Ui.Component.getComponentRef("TabGroup");
                if (tabRef) {
                    var tabs = this.searchInterface.components(tabRef.ID);
                    if (tabGroupRef) {
                        // if has a tabGroup
                        if (tabGroupId != Coveo.Models.QueryStateModel.defaultAttributes.tg) {
                            var tabGroups = this.searchInterface.components(tabGroupRef.ID);
                            var tabGroup = Coveo._.find(tabGroups, function (tabGroup) { return tabGroupId == tabGroup.options.id; });
                            // check if the tabgroup contain this tab
                            if (tabId != Coveo.Models.QueryStateModel.defaultAttributes.t && Coveo._.any(tabs, function (tab) { return tabId == tab.options.uniqueId && tabGroup.isElementIncludedInTabGroup(tab.element); })) {
                                return tabId;
                            }
                            // select the first tab in the tabGroup
                            var tab = Coveo._.find(tabs, function (tab) { return tabGroup.isElementIncludedInTabGroup(tab.element); });
                            if (tab != null) {
                                return tab.options.uniqueId;
                            }
                            return Coveo.Models.QueryStateModel.defaultAttributes.t;
                        }
                    }
                    // check if the tab is correct
                    if (tabId != Coveo.Models.QueryStateModel.defaultAttributes.t && Coveo._.any(tabs, function (tab) { return tabId == tab.options.uniqueId; })) {
                        return tabId;
                    }
                    // select the first tab
                    if (tabs.length > 0) {
                        return tabs[0].options.uniqueId;
                    }
                }
                return Coveo.Models.QueryStateModel.defaultAttributes.t;
            };
            SearchInterface.prototype.getSort = function (tabId, sortId) {
                var sortRef = Ui.Component.getComponentRef("Sort");
                if (sortRef) {
                    var sorts = this.searchInterface.components(sortRef.ID);
                    // if has a selected tab
                    var tabRef = Ui.Component.getComponentRef("Tab");
                    if (tabRef) {
                        if (tabId != Coveo.Models.QueryStateModel.defaultAttributes.t) {
                            var tabs = this.searchInterface.components(tabRef.ID);
                            var tab = Coveo._.find(tabs, function (tab) { return tabId == tab.options.uniqueId; });
                            var sortCriteria = tab.options.sort;
                            // check if the tab contain this sort
                            if (sortId != Coveo.Models.QueryStateModel.defaultAttributes.sort && Coveo._.any(sorts, function (sort) { return tab.isElementIncludedInTab(sort.element) && sort.match(sortId); })) {
                                return sortId;
                            }
                            else if (sortCriteria != null) {
                                // if not and tab.options.sort is set apply it
                                return sortCriteria.toString();
                            }
                            // select the first sort in the tab
                            var sort = Coveo._.find(sorts, function (sort) { return tab.isElementIncludedInTab(sort.element); });
                            if (sort != null) {
                                return sort.options.sortCriteria[0].toString();
                            }
                            return Coveo.Models.QueryStateModel.defaultAttributes.sort;
                        }
                    }
                    // check if the sort is correct
                    if (sortId != Coveo.Models.QueryStateModel.defaultAttributes.sort && Coveo._.any(sorts, function (sort) { return sort.match(sortId); })) {
                        return sortId;
                    }
                    // select the first sort
                    if (sorts.length > 0) {
                        return sorts[0].options.sortCriteria[0].toString();
                    }
                }
                return Coveo.Models.QueryStateModel.defaultAttributes.sort;
            };
            SearchInterface.prototype.handleBuildingQuery = function (e, data) {
                if (this.options.enableDuplicateFiltering) {
                    data.queryBuilder.enableDuplicateFiltering = true;
                }
                if (this.options.pipeline != null) {
                    data.queryBuilder.pipeline = this.options.pipeline;
                }
            };
            SearchInterface.prototype.attachComponent = function (type, component) {
                this.components(type).push(component);
            };
            SearchInterface.prototype.detachComponent = function (type, component) {
                var components = this.components(type);
                var index = Coveo._.indexOf(components, component);
                if (index > -1) {
                    components.splice(index, 1);
                }
            };
            SearchInterface.prototype.components = function (type) {
                if (this.attachedComponents == null) {
                    this.attachedComponents = {};
                }
                if (!(type in this.attachedComponents)) {
                    this.attachedComponents[type] = [];
                }
                return this.attachedComponents[type];
            };
            SearchInterface.ID = 'SearchInterface';
            SearchInterface.options = {
                searchPageUri: Ui.ComponentOptions.buildStringOption(),
                enableHistory: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                resultsPerPage: Ui.ComponentOptions.buildNumberOption({ defaultValue: 10, min: 0 }),
                excerptLength: Ui.ComponentOptions.buildNumberOption({ defaultValue: 200, min: 0 }),
                hiddenExpression: Ui.ComponentOptions.buildStringOption({ defaultValue: '' }),
                filterField: Ui.ComponentOptions.buildStringOption({ defaultValue: '' }),
                hideUntilFirstQuery: Ui.ComponentOptions.buildBooleanOption({ defaultValue: true }),
                firstLoadingAnimation: Ui.ComponentOptions.buildChildHtmlElementOption({
                    childSelector: ".coveo-first-loading-animation",
                    defaultFunction: function () { return Coveo.JQueryUtils.getBasicLoadingAnimation().get(0); }
                }),
                autoTriggerQuery: Ui.ComponentOptions.buildBooleanOption({ defaultValue: true }),
                endpoint: Ui.ComponentOptions.buildCustomOption(function (endpoint) { return endpoint != null && endpoint in Coveo.Rest.SearchEndpoint.endpoints ? Coveo.Rest.SearchEndpoint.endpoints[endpoint] : null; }, { defaultFunction: function () { return Coveo.Rest.SearchEndpoint.endpoints['default']; } }),
                timezone: Ui.ComponentOptions.buildStringOption({ defaultFunction: function () { return jstz.determine().name(); } }),
                enableDebugInfo: Ui.ComponentOptions.buildBooleanOption({ defaultValue: true }),
                enableCollaborativeRating: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                useLocalStorageForHistory: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                enableDuplicateFiltering: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                pipeline: Ui.ComponentOptions.buildStringOption()
            };
            return SearchInterface;
        })(Ui.Component);
        Ui.SearchInterface = SearchInterface;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var StandaloneSearchInterface = (function (_super) {
            __extends(StandaloneSearchInterface, _super);
            function StandaloneSearchInterface(element, options, analyticsOptions, _window) {
                if (_window === void 0) { _window = window; }
                _super.call(this, element, Ui.ComponentOptions.initComponentOptions(element, StandaloneSearchInterface, options), analyticsOptions, _window);
                this.element = element;
                this.options = options;
                this.analyticsOptions = analyticsOptions;
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.newQuery, Coveo.$.proxy(this.handleRedirect, this));
            }
            StandaloneSearchInterface.prototype.handleRedirect = function (e, data) {
                var dataToSendOnBeforeRedirect = {
                    searchPageUri: this.options.searchPageUri,
                    cancel: false
                };
                Coveo.$(this.root).trigger(Coveo.Events.StandaloneSearchInterfaceEvents.beforeRedirect, dataToSendOnBeforeRedirect);
                if (dataToSendOnBeforeRedirect.cancel) {
                    return;
                }
                data.cancel = true;
                if (!this.searchBoxIsEmpty() || this.options.redirectIfEmpty) {
                    this.redirectToSearchPage(dataToSendOnBeforeRedirect.searchPageUri);
                }
            };
            StandaloneSearchInterface.prototype.redirectToSearchPage = function (searchPage) {
                var stateValues = this.queryStateModel.getAttributes();
                var UACauseBy = this.usageAnalytics.getCurrentEventCause();
                if (UACauseBy != null) {
                    stateValues['firstQueryCause'] = UACauseBy;
                }
                var UAMeta = this.usageAnalytics.getCurrentEventMeta();
                if (UAMeta != null) {
                    stateValues['firstQueryMeta'] = UAMeta;
                }
                window.location.href = searchPage + '#' + Coveo.HashUtils.encodeValues(stateValues);
            };
            StandaloneSearchInterface.prototype.searchBoxIsEmpty = function () {
                return Coveo.Utils.isEmptyString(this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.q));
            };
            StandaloneSearchInterface.ID = 'StandaloneSearchInterface';
            StandaloneSearchInterface.options = {
                redirectIfEmpty: Ui.ComponentOptions.buildBooleanOption({ defaultValue: true })
            };
            return StandaloneSearchInterface;
        })(Ui.SearchInterface);
        Ui.StandaloneSearchInterface = StandaloneSearchInterface;
        Ui.CoveoJQuery.registerAutoCreateComponent(StandaloneSearchInterface);
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Events;
    (function (Events) {
        var StandaloneSearchInterfaceEvents = (function () {
            function StandaloneSearchInterfaceEvents() {
            }
            StandaloneSearchInterfaceEvents.beforeRedirect = "beforeRedirect";
            return StandaloneSearchInterfaceEvents;
        })();
        Events.StandaloneSearchInterfaceEvents = StandaloneSearchInterfaceEvents;
    })(Events = Coveo.Events || (Coveo.Events = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
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
    })(Coveo.KEYBOARD || (Coveo.KEYBOARD = {}));
    var KEYBOARD = Coveo.KEYBOARD;
    var KeyboardUtils = (function () {
        function KeyboardUtils() {
        }
        KeyboardUtils.keysEqual = function (key, code) {
            if (!Coveo.Utils.isNullOrUndefined(key.keyCode)) {
                return key.keyCode == code;
            }
            else if (!Coveo.Utils.isNullOrUndefined(key.which)) {
                return key.which == code;
            }
            return false;
        };
        KeyboardUtils.isAllowedKeyForOmniBox = function (e) {
            var keycode = e.keyCode;
            var valid = (KeyboardUtils.isNumberKeyPushed(keycode)) || (keycode == 32 || keycode == 13) || (KeyboardUtils.isLetterKeyPushed(keycode)) || (keycode > 95 && keycode < 112) || (keycode > 185 && keycode < 193) || (keycode > 218 && keycode < 223) || (keycode == 8 /* BACKSPACE */ || keycode == 46 /* DELETE */) || (KeyboardUtils.isArrowKeyPushed(keycode));
            return valid;
        };
        KeyboardUtils.isAllowedKeyForSearchAsYouType = function (e) {
            return KeyboardUtils.isAllowedKeyForOmniBox(e) && !KeyboardUtils.isArrowKeyPushed(e.keyCode);
        };
        KeyboardUtils.isDeleteOrBackspace = function (e) {
            return KeyboardUtils.keysEqual(e, 8 /* BACKSPACE */) || KeyboardUtils.keysEqual(e, 46 /* DELETE */);
        };
        KeyboardUtils.isArrowKeyPushed = function (keycode) {
            return keycode == 37 /* LEFT_ARROW */ || keycode == 38 /* UP_ARROW */ || keycode == 39 /* RIGHT_ARROW */ || keycode == 40 /* DOWN_ARROW */;
        };
        KeyboardUtils.isNumberKeyPushed = function (keycode) {
            return keycode > 47 && keycode < 58;
        };
        KeyboardUtils.isLetterKeyPushed = function (keycode) {
            return keycode > 64 && keycode < 91;
        };
        return KeyboardUtils;
    })();
    Coveo.KeyboardUtils = KeyboardUtils;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var QueryBox = (function (_super) {
            __extends(QueryBox, _super);
            function QueryBox(element, options, bindings) {
                var _this = this;
                _super.call(this, element, QueryBox.ID, bindings);
                this.element = element;
                this.options = options;
                this.options = Ui.ComponentOptions.initComponentOptions(element, QueryBox, options);
                Ui.Component.pointElementsToDummyForm(Coveo.$(element));
                Coveo.$(element).change(function (event) {
                    _this._handleChange(event);
                });
                Coveo.$(element).keyup(function (event) {
                    _this._handleKeyUp(event);
                });
                var model = Coveo.Models;
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.buildingQuery, Coveo.$.proxy(this.handleBuildingQuery, this));
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.newQuery, Coveo.$.proxy(this._handleNewQuery, this));
                var eventName = this.queryStateModel.getEventName(model.Model.eventTypes.changeOne + model.QueryStateModel.attributesEnum.q);
                Coveo.$(this.queryStateModel.element).on(eventName, Coveo.$.proxy(this._handleQueryStateChanged, this));
                this._clearElement = Coveo.$("<span></span>").addClass('coveo-query-box-clear').hide();
                var clearElementIcon = Coveo.$("<span></span>").addClass('coveo-icon').appendTo(this._clearElement);
                this._clearElement.fastClick(function () {
                    _this.clear();
                    _this._hideClearElement();
                    _this.updateQueryState();
                    if (!Coveo.DeviceUtils.isMobileDevice()) {
                        Coveo.$(_this.element).focus();
                    }
                    // We do not want to redirect on clear on a standalone search box, as it creates a weird interaction.
                    if (!_this.queryController.isStandaloneSearchBox()) {
                        _this.queryController.deferExecuteQuery({ beforeExecuteQuery: function () { return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.searchboxClear, {}); } });
                    }
                });
                if (Coveo.DeviceUtils.isSmallScreenWidth()) {
                    Coveo.$(this.element).focus(function () {
                        Coveo.MobileUtils.removeToggleClassOnSearchInterface();
                    });
                }
                Coveo.$(this.element).after(this._clearElement);
                if (this.options.autoFocus) {
                    try {
                        Coveo.$(this.element).focus();
                    }
                    catch (e) {
                    }
                }
            }
            QueryBox.prototype.clear = function () {
                Coveo.$(this.element).val("");
                this.updateQueryState();
            };
            QueryBox.prototype.replace = function (searchValue, newValue) {
                Coveo.$(this.element).val(Coveo.$(this.element).val().replace(searchValue, newValue));
                this.updateQueryState();
            };
            QueryBox.prototype.replaceCurrentExpression = function (newValue) {
                this.replace(this.getCurrentQueryExpression(), newValue);
                this.updateQueryState();
            };
            QueryBox.prototype.clearCurrentExpression = function () {
                this.replace(this.getCurrentQueryExpression(), "");
                this.updateQueryState();
            };
            QueryBox.prototype.getCurrentQueryExpression = function () {
                var cursorPos = Coveo.$(this.element).getCursorPosition();
                var value = Coveo.$(this.element).val();
                var length = value.length;
                var start = cursorPos;
                var end = cursorPos;
                if (value[start] == " ") {
                    start--;
                }
                while (start > 0 && value[start] != " ") {
                    start--;
                }
                while (end < length && value[end] != " ") {
                    end++;
                }
                return value.substring(start, end);
            };
            QueryBox.prototype.insertAt = function (at, toInsert) {
                var oldValue = Coveo.$(this.element).val();
                var newValue = [oldValue.slice(0, at), toInsert, oldValue.slice(at)].join("");
                Coveo.$(this.element).val(newValue);
                this.updateQueryState();
            };
            QueryBox.prototype._handleChange = function (event) {
                this._addClearElement();
                this.updateQueryState();
                return undefined;
            };
            QueryBox.prototype._handleQueryStateChanged = function (e, data) {
                Coveo.Assert.exists(data);
                var q = data.value;
                Coveo.$(this.element).val(q);
                this._addClearElement();
            };
            QueryBox.prototype._handleKeyUp = function (event) {
                Coveo.Assert.exists(event);
                this._addClearElement();
                if (event.which == 13) {
                    this.logger.debug('Performing query because user pressed Enter');
                    this.updateQueryState();
                    this.enterOnSearchBox();
                    event.stopPropagation();
                    if (Coveo.DeviceUtils.isMobileDevice()) {
                        Coveo.$(this.element).blur();
                    }
                }
                else if (this.options.enableSearchAsYouType && Coveo.KeyboardUtils.isAllowedKeyForSearchAsYouType(event)) {
                    this.startNewSearchAsYouTypeTimeout();
                }
            };
            QueryBox.prototype._addClearElement = function () {
                if (Coveo.$(this.element).val() == "") {
                    this._hideClearElement();
                }
                else {
                    this._showClearElement();
                }
            };
            QueryBox.prototype._hideClearElement = function () {
                this._clearElement.hide();
            };
            QueryBox.prototype._showClearElement = function () {
                this._clearElement.show();
            };
            QueryBox.prototype.startNewSearchAsYouTypeTimeout = function () {
                var _this = this;
                this.cancelAnyPendingSearchAsYouTypeTimeout();
                this.searchAsYouTypeTimeout = setTimeout(function () {
                    _this.updateQueryState();
                    _this.triggerNewQuery(function () { return _this.usageAnalytics.logSearchAsYouType(Ui.AnalyticsActionCauseList.searchboxAsYouType, {}); }, true);
                }, this.options.searchAsYouTypeDelay);
            };
            QueryBox.prototype._handleNewQuery = function (e, data) {
                QueryBox.queryBoxIsAlreadyAddedToQuery = false;
            };
            QueryBox.prototype.handleBuildingQuery = function (e, data) {
                Coveo.Assert.exists(data);
                Coveo.Assert.exists(data.queryBuilder);
                this.updateQueryState();
                if (this.options.enableWildcards) {
                    data.queryBuilder.enableWildcards = true;
                }
                if (this.options.enableQuestionMarks) {
                    data.queryBuilder.enableQuestionMarks = true;
                }
                if (this.options.enableLowercaseOperators) {
                    data.queryBuilder.enableLowercaseOperators = true;
                }
                if (this.options.enablePartialMatch) {
                    data.queryBuilder.enablePartialMatch = true;
                    data.queryBuilder.partialMatchKeywords = this.options.partialMatchKeywords;
                    data.queryBuilder.partialMatchThreshold = this.options.partialMatchThreshold;
                }
                var query = Coveo.$(this.element).val();
                if (Coveo.Utils.isNonEmptyString(query) && !QueryBox.queryBoxIsAlreadyAddedToQuery) {
                    if (this.options.disableQuerySyntax) {
                        data.queryBuilder.expression.add("<@- " + query + " -@>");
                    }
                    else {
                        data.queryBuilder.expression.add(query);
                    }
                    this.logger.trace('Adding query to QueryBuilder', query);
                    QueryBox.queryBoxIsAlreadyAddedToQuery = true;
                }
            };
            QueryBox.prototype.enterOnSearchBox = function () {
                var _this = this;
                Coveo.$(this.element).trigger(Coveo.Events.UserActionEvents.enterOnSearchBox);
                this.triggerNewQuery(function () { return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.searchboxSubmit, {}); }, false);
            };
            QueryBox.prototype.triggerNewQuery = function (beforeExecuteQuery, searchAsYouType) {
                this.cancelAnyPendingSearchAsYouTypeTimeout();
                this.queryController.deferExecuteQuery({
                    beforeExecuteQuery: beforeExecuteQuery,
                    searchAsYouType: searchAsYouType
                });
            };
            QueryBox.prototype.updateQueryState = function () {
                var query = Coveo.$(this.element).val();
                this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.q, query);
            };
            QueryBox.prototype.cancelAnyPendingSearchAsYouTypeTimeout = function () {
                if (Coveo.Utils.exists(this.searchAsYouTypeTimeout)) {
                    clearTimeout(this.searchAsYouTypeTimeout);
                    this.searchAsYouTypeTimeout = undefined;
                }
            };
            QueryBox.ID = 'QueryBox';
            QueryBox.options = {
                enableSearchAsYouType: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                searchAsYouTypeDelay: Ui.ComponentOptions.buildNumberOption({ defaultValue: 500, min: 0 }),
                disableQuerySyntax: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                enableWildcards: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                enableQuestionMarks: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                enableLowercaseOperators: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                enablePartialMatch: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                partialMatchKeywords: Ui.ComponentOptions.buildNumberOption({ defaultValue: 5, min: 1 }),
                partialMatchThreshold: Ui.ComponentOptions.buildStringOption({ defaultValue: '50%' }),
                autoFocus: Ui.ComponentOptions.buildBooleanOption({ defaultValue: true })
            };
            QueryBox.queryBoxIsAlreadyAddedToQuery = false;
            return QueryBox;
        })(Coveo.Ui.Component);
        Ui.QueryBox = QueryBox;
        Coveo.Ui.CoveoJQuery.registerAutoCreateComponent(QueryBox);
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Events;
    (function (Events) {
        var OmniBoxEvents = (function () {
            function OmniBoxEvents() {
            }
            OmniBoxEvents.populateOmniBox = "populateOmniBox";
            OmniBoxEvents.openOmniBox = "openOmniBox";
            OmniBoxEvents.closeOmniBox = "closeOmniBox";
            return OmniBoxEvents;
        })();
        Events.OmniBoxEvents = OmniBoxEvents;
    })(Events = Coveo.Events || (Coveo.Events = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var OmniBox = (function (_super) {
            __extends(OmniBox, _super);
            function OmniBox(element, options, bindings) {
                var _this = this;
                _super.call(this, element, options, bindings);
                this.element = element;
                this.options = options;
                this.omniBoxHeaderSearchForTemplate = Coveo._.template("<div class='coveo-omnibox-selectable coveo-omnibox-section coveo-omnibox-header'>" + "<div class='coveo-text'>" + Ui.l("SearchFor", "<strong><%- data %></strong>") + "</div>" + "</div>");
                this.omniBoxIsOpen = false;
                this.isLoadingData = false;
                this.headerIsCurrentlyRendered = false;
                this.options = Ui.ComponentOptions.initComponentOptions(element, OmniBox, options);
                Coveo.$(element).keyup(function (event) { return _this._handleKeyUp(event); });
                this.renderOmniBoxDiv();
                this.omniBoxDiv.hide();
                this.prepareThrottledCall();
                Coveo.$("body").click(function (e) {
                    if (_this.omniBoxIsOpen && !Coveo.$.contains(_this.omniBoxDiv.get(0), Coveo.$(e.target).get(0))) {
                        _this.close();
                    }
                });
                var eventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.changeOne + Coveo.Models.QueryStateModel.attributesEnum.q);
                Coveo.$(this.queryStateModel.element).on(eventName, Coveo.$.proxy(this._handleQueryStateChanged, this));
                Coveo.$(window).on("resize", function () {
                    if (_this.omniBoxIsOpen) {
                        _this.setWidthOnOmniBoxDiv();
                    }
                });
            }
            OmniBox.prototype.close = function () {
                this.wasClosed = true;
                this.clearLastOmniBoxRows();
                Coveo.$(this.root).trigger(Coveo.Events.OmniBoxEvents.closeOmniBox);
                if (this.omniBoxDiv) {
                    this.omniBoxDiv.children().remove();
                    this.omniBoxDiv.hide();
                }
                this.clearLastOmniBoxRows();
                if (!Coveo.Utils.isNullOrUndefined(this.lastOmniBoxData)) {
                    this.rejectAllPendingDeferred(this.lastOmniBoxData);
                }
                this.resetOmniBoxInternalData();
                this.omniBoxIsOpen = false;
                this.removeSearchAnimation();
            };
            OmniBox.prototype.open = function () {
                this.wasClosed = false;
                if (Coveo.$(this.element).val() != "" && (this.options.omniBoxMinimumLetters == null || this.options.omniBoxMinimumLetters <= Coveo.$(this.element).val().length)) {
                    this.throttledCallForOmniBoxBody();
                    Coveo.$(this.root).trigger(Coveo.Events.OmniBoxEvents.openOmniBox);
                }
                else {
                    this.close();
                }
            };
            OmniBox.prototype.getDataForOmniboxBody = function () {
                this.addSearchAnimation();
                if (!this.isCurrentlyBeingRendered) {
                    var omniBoxRequestObject = this.buildOmniBoxRequestObject();
                    var data = this.requestOmniBoxData(omniBoxRequestObject);
                    this.processNewOmniBoxData(data);
                }
                else {
                    this.throttledCallForOmniBoxBody();
                }
            };
            OmniBox.prototype.buildOmniBoxRequestObject = function () {
                var _this = this;
                var currentQueryExpression = this.getCurrentQueryExpression();
                var ret = {
                    completeQueryExpression: {
                        word: Coveo.$(this.element).val(),
                        regex: this.getRegexToSearch()
                    },
                    currentQueryExpression: {
                        word: currentQueryExpression,
                        regex: this.getRegexToSearch(currentQueryExpression)
                    },
                    allQueryExpressions: this.getQueryExpressionBreakDown(),
                    cursorPosition: Coveo.$(this.element).getCursorPosition(),
                    clear: function () {
                        _this.clear();
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
                    closeOmniBox: function () {
                        _this.close();
                    }
                };
                return ret;
            };
            OmniBox.prototype.prepareThrottledCall = function () {
                this.throttledCallForOmniBoxBody = Coveo.Utils.throttle(this.getDataForOmniboxBody, this.options.omniBoxDelay, undefined, this);
            };
            OmniBox.prototype.requestOmniBoxData = function (dataToSearch) {
                Coveo.Assert.exists(dataToSearch);
                this.logger.info("Requesting omnibox data to all components");
                var eventArgs = Coveo.$.extend({ rows: [] }, dataToSearch);
                Coveo.$(this.root).trigger(Coveo.Events.OmniBoxEvents.populateOmniBox, eventArgs);
                return eventArgs;
            };
            OmniBox.prototype.getQueryExpressionBreakDown = function () {
                var _this = this;
                var ret = [];
                var queryWords = Coveo.$(this.element).val().split(" ");
                Coveo._.each(queryWords, function (word) {
                    ret.push({
                        word: word,
                        regex: _this.getRegexToSearch(word)
                    });
                });
                return ret;
            };
            OmniBox.prototype._handleNewQuery = function (e, data) {
                _super.prototype._handleNewQuery.call(this, e, data);
                if (this.omniBoxIsOpen) {
                    e.stopPropagation();
                }
            };
            OmniBox.prototype._handleKeyUp = function (event) {
                var _this = this;
                //block keyup event on QueryBox
                event.stopImmediatePropagation();
                var currentNumberOfLettersInOmniBox = Coveo.$(this.element).val().length;
                if (!Coveo.Utils.isNullOrUndefined(this.lastOmniBoxData) && !Coveo.Utils.isNullOrUndefined(this.lastNumberOfLettersInOmniBox) && Math.abs(currentNumberOfLettersInOmniBox - this.lastNumberOfLettersInOmniBox) > this.options.omniBoxChangeLimit) {
                    this.rejectAllPendingDeferred(this.lastOmniBoxData);
                    this.prepareThrottledCall();
                }
                if (Coveo.KeyboardUtils.keysEqual(event, 27 /* ESCAPE */) && this.omniBoxIsOpen) {
                    this.close();
                }
                else if (Coveo.KeyboardUtils.keysEqual(event, 13 /* ENTER */)) {
                    if (this.omniBoxIsOpen) {
                        this.selectionEvent();
                    }
                    else {
                        this.close();
                        this.triggerNewQuery(function () { return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.searchboxSubmit, {}); });
                    }
                }
                else if (Coveo.KeyboardUtils.isArrowKeyPushed(event.keyCode) && this.omniBoxIsOpen) {
                    this.navigationEvent(event);
                }
                else if (Coveo.KeyboardUtils.isAllowedKeyForOmniBox(event)) {
                    if (Coveo.$(this.element).val() == "") {
                        this.close();
                    }
                    else {
                        this.open();
                    }
                }
            };
            OmniBox.prototype._handleChange = function (event) {
                //block change event on QueryBox
                event.stopImmediatePropagation();
                return false;
            };
            OmniBox.prototype.handleHover = function (event) {
                var target = this.getCorrectTarget(event);
                if (target) {
                    this.toggleSelected(target);
                }
            };
            OmniBox.prototype.bindOmniBoxEvent = function () {
                this.bindHoverEvent();
            };
            OmniBox.prototype.bindHoverEvent = function () {
                var _this = this;
                Coveo.$(this.omniBoxDiv).find(".coveo-omnibox-selectable").hover(function (e) {
                    _this.handleHover(e);
                });
            };
            OmniBox.prototype.selectionEvent = function () {
                var _this = this;
                if (!this.isFirstValueSelected(this.findSelected())) {
                    this.keyBoardSelection();
                }
                else {
                    this.close();
                    this.triggerNewQuery(function () { return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.searchboxSubmit, {}); });
                }
            };
            OmniBox.prototype.navigationEvent = function (event) {
                var alreadySelected = this.findSelected();
                if (alreadySelected.length == 0) {
                    this.navigationEventWhenNoSelection(event);
                }
                else {
                    this.navigationEventWhenSelection(event, alreadySelected);
                }
            };
            OmniBox.prototype.navigationEventWhenNoSelection = function (event) {
                if (Coveo.KeyboardUtils.keysEqual(event, 40 /* DOWN_ARROW */)) {
                    this.findSelectable().first().addClass('coveo-omnibox-selected');
                }
                else {
                    return;
                }
            };
            OmniBox.prototype.navigationEventWhenSelection = function (event, alreadySelected) {
                if (!this.isLoadingData) {
                    switch (event.keyCode) {
                        case 38 /* UP_ARROW */:
                            if (!this.isFirstValueSelected(alreadySelected)) {
                                this.unselectValueInOmnibox(alreadySelected);
                                this.selectValueBeforeAlreadySelected(alreadySelected);
                            }
                            break;
                        case 40 /* DOWN_ARROW */:
                            if (!this.isLastValueSelected(alreadySelected)) {
                                this.unselectValueInOmnibox(alreadySelected);
                                this.selectValueAfterAlreadySelected(alreadySelected);
                            }
                            break;
                        default:
                            break;
                    }
                }
            };
            OmniBox.prototype.keyBoardSelection = function () {
                this.logger.trace("Selecting facet value because of omnibox selection");
                var selectedInOmnibox = this.findSelected();
                selectedInOmnibox.trigger('keyboardSelect');
                this.close();
            };
            OmniBox.prototype.triggerNewQuery = function (beforeExecuteQuery) {
                this.logger.info("Triggering new query because of omnibox selection");
                this.close();
                this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.q, Coveo.$(this.element).val());
                this.queryController.deferExecuteQuery({ beforeExecuteQuery: beforeExecuteQuery });
            };
            OmniBox.prototype.processNewOmniBoxData = function (data) {
                this.logger.trace('Processing omnibox data');
                this.isCurrentlyBeingRendered = true;
                this.numberOfPendingQueries = 0;
                this.renderOmniBoxBody(data);
                this.omniBoxIsOpen = true;
            };
            OmniBox.prototype.renderHeader = function () {
                this.buildHeader();
                this.setWidthOnOmniBoxDiv();
                this.omniBoxDiv.show();
                this.findSelectable().first().addClass('coveo-omnibox-selected');
                this.headerIsCurrentlyRendered = true;
            };
            OmniBox.prototype.renderOmniBoxDiv = function () {
                this.omniBoxDiv = Coveo.$("<div class='coveo-omnibox'></div>");
                Coveo.$(this.element).after(this.omniBoxDiv);
            };
            OmniBox.prototype.setWidthOnOmniBoxDiv = function () {
                this.omniBoxDiv.width(this.getWidth());
            };
            OmniBox.prototype.buildHeader = function () {
                var _this = this;
                if (this.omniBoxHeader != undefined) {
                    this.omniBoxHeader.remove();
                }
                this.omniBoxHeader = Coveo.$(this.omniBoxHeaderSearchForTemplate({ data: Coveo.$(this.element).val() }));
                this.omniBoxHeader.fastClick(function () {
                    _this.triggerNewQuery(function () { return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.searchboxSubmit, {}); });
                });
                this.omniBoxDiv.prepend(this.omniBoxHeader);
            };
            OmniBox.prototype.renderOmniBoxBody = function (data) {
                var _this = this;
                if (!this.wasClosed) {
                    this.omniBoxRows = [];
                    this.lastOmniBoxData = data;
                    this.lastNumberOfLettersInOmniBox = Coveo.$(this.element).val().length;
                    var atLeastOneRowCurrentlyExists = Coveo._.find(data.rows, function (row) {
                        return !Coveo.Utils.isNullOrUndefined(row.element);
                    });
                    Coveo._.each(data.rows, function (row) {
                        if (!Coveo.Utils.isNullOrUndefined(row.element)) {
                            _this.renderOmniBoxForOneElement(row);
                        }
                        else if (!Coveo.Utils.isNullOrUndefined(row.deferred)) {
                            _this.numberOfPendingQueries++;
                            _this.renderOmniBoxForOneElementDeferred(row);
                        }
                    });
                    if (this.numberOfPendingQueries == 0) {
                        this.allDeferredHaveArrived();
                    }
                    setTimeout(function () {
                        _this.rejectAllPendingDeferred(data);
                    }, this.options.omniBoxTimeout);
                }
                else {
                    this.close();
                }
            };
            OmniBox.prototype.rejectAllPendingDeferred = function (data) {
                Coveo._.each(data.rows, function (row) {
                    if (!Coveo.Utils.isNullOrUndefined(row.deferred)) {
                        row.deferred.reject();
                    }
                });
            };
            OmniBox.prototype.allDeferredHaveArrived = function () {
                this.appendOmniBoxSections();
                this.resetOmniBoxInternalData();
                this.removeSearchAnimation();
            };
            OmniBox.prototype.clearLastOmniBoxRows = function () {
                if (this.lastOmniBoxRows != undefined) {
                    Coveo._.each(this.lastOmniBoxRows, function (row) {
                        Coveo.$(row.element).remove();
                    });
                }
            };
            OmniBox.prototype.appendOmniBoxSections = function () {
                if (this.omniBoxRows.length > 0 && Coveo.$(this.element).val() != "") {
                    this.renderHeader();
                    this.clearLastOmniBoxRows();
                    this.omniBoxRows = Coveo._.sortBy(this.omniBoxRows, function (row) {
                        return row.zIndex;
                    }).reverse();
                    for (var i = 0; i < this.omniBoxRows.length; i++) {
                        this.omniBoxDiv.append(this.omniBoxRows[i].element);
                    }
                    this.bindOmniBoxEvent();
                    this.resetOmniBoxInternalData();
                }
                else {
                    this.close();
                }
            };
            OmniBox.prototype.resetOmniBoxInternalData = function () {
                this.lastOmniBoxRows = this.omniBoxRows;
                this.isCurrentlyBeingRendered = false;
                this.headerIsCurrentlyRendered = false;
            };
            OmniBox.prototype.renderOmniBoxForOneElement = function (row) {
                var zIndex = row.zIndex || -1;
                Coveo.$(row.element).addClass('coveo-omnibox-section');
                this.omniBoxRows.push({ zIndex: zIndex, element: row.element });
            };
            OmniBox.prototype.renderOmniBoxForOneElementDeferred = function (row) {
                var _this = this;
                row.deferred.done(function (resolved) {
                    if (!_this.headerIsCurrentlyRendered && resolved.element != undefined) {
                        _this.renderHeader();
                    }
                    _this.numberOfPendingQueries--;
                    if (!Coveo.Utils.isNullOrUndefined(resolved.element)) {
                        _this.renderOmniBoxForOneElement(resolved);
                    }
                    if (_this.numberOfPendingQueries == 0) {
                        _this.allDeferredHaveArrived();
                    }
                });
                row.deferred.fail(function () {
                    _this.numberOfPendingQueries--;
                    if (_this.numberOfPendingQueries == 0) {
                        _this.allDeferredHaveArrived();
                    }
                });
            };
            OmniBox.prototype.isFirstValueSelected = function (selected) {
                return selected.get(0) == this.findSelectable().first().get(0);
            };
            OmniBox.prototype.isLastValueSelected = function (selected) {
                return selected.get(0) == this.findSelectable().last().get(0);
            };
            OmniBox.prototype.unselectValueInOmnibox = function (alreadySelected) {
                alreadySelected.removeClass('coveo-omnibox-selected');
            };
            OmniBox.prototype.selectValueBeforeAlreadySelected = function (alreadySelected) {
                Coveo.$(this.findSelectable().get(this.findPosOfAlreadySelected(alreadySelected) - 1)).addClass('coveo-omnibox-selected');
            };
            OmniBox.prototype.selectValueAfterAlreadySelected = function (alreadySelected) {
                Coveo.$(this.findSelectable().get(this.findPosOfAlreadySelected(alreadySelected) + 1)).addClass('coveo-omnibox-selected');
            };
            OmniBox.prototype.findPosOfAlreadySelected = function (alreadySelected) {
                var alreadySelectedPos = -1;
                var allSelectable = this.findSelectable();
                Coveo._.find(allSelectable, function (selectable) {
                    alreadySelectedPos++;
                    return selectable == alreadySelected.get(0);
                });
                return alreadySelectedPos;
            };
            OmniBox.prototype.findSelectable = function () {
                return this.omniBoxDiv.find(".coveo-omnibox-selectable");
            };
            OmniBox.prototype.findSelected = function () {
                return this.findSelectable().closest(".coveo-omnibox-selected");
            };
            OmniBox.prototype.toggleSelected = function (newSelected) {
                this.omniBoxDiv.find(".coveo-omnibox-selected").removeClass('coveo-omnibox-selected');
                newSelected.addClass('coveo-omnibox-selected');
            };
            OmniBox.prototype.getWidth = function () {
                var elem = Coveo.$(this.element);
                return elem.outerWidth() + this.getSearchButtonWidth();
            };
            OmniBox.prototype.getSearchButtonWidth = function () {
                var searchBox = Coveo.$(this.element).closest("." + Ui.Component.computeCssClassNameForType(Ui.SearchBox.ID));
                if (searchBox.length != 0) {
                    var searchBoxComponent = searchBox.coveo(Ui.SearchBox);
                    if (searchBoxComponent.searchButton && Coveo.$(searchBoxComponent.searchButton.element).css('position') != 'absolute') {
                        return Coveo.$(searchBoxComponent.searchButton.element).outerWidth();
                    }
                }
                return 0;
            };
            OmniBox.prototype.getRegexToSearch = function (strValue) {
                if (strValue === void 0) { strValue = Coveo.$(this.element).val(); }
                return new RegExp(Coveo.Utils.escapeRegexCharacter(strValue), "i");
            };
            OmniBox.prototype.getCorrectTarget = function (event) {
                var target = Coveo.$(event.target);
                return target.closest(".coveo-omnibox-selectable");
            };
            OmniBox.prototype.addSearchAnimation = function () {
                this._hideClearElement();
                Coveo.$(this.element).addClass('coveo-loading');
                this.isLoadingData = true;
            };
            OmniBox.prototype.removeSearchAnimation = function () {
                Coveo.$(this.element).removeClass('coveo-loading');
                this._addClearElement();
                this.isLoadingData = false;
            };
            OmniBox.ID = 'OmniBox';
            OmniBox.options = {
                omniBoxDelay: Ui.ComponentOptions.buildNumberOption({ defaultValue: 500, min: 0 }),
                omniBoxTimeout: Ui.ComponentOptions.buildNumberOption({ defaultValue: 2000, min: 0 }),
                omniBoxChangeLimit: Ui.ComponentOptions.buildNumberOption({ defaultValue: 3, min: 1 }),
                omniBoxMinimumLetters: Ui.ComponentOptions.buildNumberOption({ defaultValue: 1, min: 1 })
            };
            OmniBox.parent = Ui.QueryBox;
            return OmniBox;
        })(Ui.QueryBox);
        Ui.OmniBox = OmniBox;
        Coveo.Ui.CoveoJQuery.registerAutoCreateComponent(OmniBox);
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
'';
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var SearchButton = (function (_super) {
            __extends(SearchButton, _super);
            function SearchButton(element, options, bindings) {
                _super.call(this, element, SearchButton.ID, bindings);
                this.element = element;
                this.options = options;
                this.bind.fastClick(Coveo.$(element), this.handleClick);
                // Provide a magnifier icon if element contains nothing
                if (Coveo.$.trim(Coveo.$(element).text()) == '') {
                    Coveo.$('<span/>').text(Ui.l("Search")).addClass('coveo-icon').appendTo(element);
                }
            }
            SearchButton.prototype.handleClick = function () {
                var _this = this;
                // Work around a bug in android where the blur event is not correctly triggered in the QueryBox class, on the input
                Coveo.$(this.root).find('.' + Ui.Component.computeCssClassNameForType(Ui.QueryBox.ID)).blur();
                this.logger.debug('Performing query following button click');
                this.queryController.deferExecuteQuery({ beforeExecuteQuery: function () { return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.searchboxSubmit, {}); } });
            };
            SearchButton.ID = 'SearchButton';
            return SearchButton;
        })(Ui.Component);
        Ui.SearchButton = SearchButton;
        Ui.CoveoJQuery.registerAutoCreateComponent(SearchButton);
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var SearchBox = (function (_super) {
            __extends(SearchBox, _super);
            function SearchBox(element, options, bindings) {
                _super.call(this, element, SearchBox.ID, bindings);
                this.element = element;
                this.options = options;
                this.options = Ui.ComponentOptions.initComponentOptions(element, SearchBox, options);
                this.searchButton = new Ui.SearchButton(Coveo.$('<a/>').appendTo(this.element).get(0), undefined, bindings);
                var stretch = Coveo.$('<div/>').appendTo(this.element);
                var tag = this.buildInputTag();
                tag.appendTo(stretch);
                if (this.options.activateOmniBox) {
                    this.options = Ui.ComponentOptions.initComponentOptions(element, Ui.OmniBox, this.options);
                    this.searchBox = new Ui.OmniBox(tag.get(0), this.options, bindings);
                }
                else {
                    this.searchBox = new Ui.QueryBox(tag.get(0), this.options, bindings);
                }
            }
            SearchBox.prototype.buildInputTag = function () {
                var _this = this;
                return Coveo.$('<input type="text" autocapitalize="off" autocorrect="off" />').blur(function (event) {
                    _this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.q, Coveo.$(event.target).val());
                });
            };
            SearchBox.ID = 'SearchBox';
            SearchBox.parent = Ui.OmniBox;
            SearchBox.options = {
                activateOmniBox: Ui.ComponentOptions.buildBooleanOption({
                    attrName: 'data-activate-omnibox',
                    defaultValue: false,
                    postProcessing: function (value, options) {
                        if (options.enableSearchAsYouType) {
                            if (value) {
                                new Coveo.Logger(document).warn("Cannot initialize omnibox and search as you type at the same time : Disabling omnibox functionnality");
                            }
                            return false;
                        }
                        return value;
                    }
                }),
                enableSearchAsYouType: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                searchAsYouTypeDelay: Ui.ComponentOptions.buildNumberOption({ defaultValue: 500, min: 0 }),
                disableQuerySyntax: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                enableWildcards: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                enableQuestionMarks: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                enableLowercaseOperators: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                enablePartialMatch: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                partialMatchKeywords: Ui.ComponentOptions.buildNumberOption({ defaultValue: 5, min: 1 }),
                partialMatchThreshold: Ui.ComponentOptions.buildStringOption({ defaultValue: '50%' }),
                autoFocus: Ui.ComponentOptions.buildBooleanOption({ defaultValue: true })
            };
            return SearchBox;
        })(Coveo.Ui.Component);
        Ui.SearchBox = SearchBox;
        Coveo.Ui.CoveoJQuery.registerAutoCreateComponent(SearchBox);
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Rest;
    (function (Rest) {
        var AnalyticsEndpoint = (function () {
            function AnalyticsEndpoint(options) {
                this.options = options;
                this.visitId = undefined;
                this.logger = new Coveo.Logger(this);
            }
            AnalyticsEndpoint.prototype.getVisitId = function (params) {
                var _this = this;
                var deferredResponse = Coveo.$.Deferred();
                if (this.visitId) {
                    deferredResponse.resolve(this.visitId);
                }
                else {
                    var url = Coveo.QueryUtils.mergePath(this.options.serviceUrl, '/rest/' + (AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION || AnalyticsEndpoint.DEFAULT_ANALYTICS_VERSION) + '/analytics/visit');
                    this.getFromService(url, params).done(function (response) {
                        _this.visitId = response.id;
                        deferredResponse.resolve(_this.visitId);
                    });
                }
                return deferredResponse;
            };
            AnalyticsEndpoint.prototype.sendSearchEvents = function (searchEvents) {
                var _this = this;
                if (searchEvents.length > 0) {
                    this.logger.info('Logging analytics search events', searchEvents);
                    this.sendEventToApi(searchEvents, 'searches', 'searchEvents').done(function (searchResponses) {
                        if (!Coveo.Utils.isNullOrUndefined(searchResponses)) {
                            _this.visitId = Coveo._.first(searchResponses.searchEventResponses).visitId;
                        }
                    });
                }
            };
            AnalyticsEndpoint.prototype.sendDocumentViewEvent = function (documentViewEvent) {
                var _this = this;
                Coveo.Assert.exists(documentViewEvent);
                this.logger.info('Logging analytics document view', documentViewEvent);
                this.sendEventToApi(documentViewEvent, 'click', 'clickEvent').done(function (eventResponse) {
                    if (!Coveo.Utils.isNullOrUndefined(eventResponse)) {
                        _this.visitId = eventResponse.visitId;
                    }
                });
            };
            AnalyticsEndpoint.prototype.sendCustomEvent = function (customEvent) {
                var _this = this;
                Coveo.Assert.exists(customEvent);
                this.logger.info('Logging analytics custom event', customEvent);
                this.sendEventToApi(customEvent, 'custom', 'customEvent').done(function (eventResponse) {
                    if (!Coveo.Utils.isNullOrUndefined(eventResponse)) {
                        _this.visitId = eventResponse.visitId;
                    }
                });
            };
            AnalyticsEndpoint.prototype.getTopQueries = function (params) {
                var url = Coveo.QueryUtils.mergePath(this.options.serviceUrl, "/rest/" + (AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION || AnalyticsEndpoint.DEFAULT_ANALYTICS_VERSION) + "/stats/topQueries");
                return this.getFromService(url, params);
            };
            AnalyticsEndpoint.prototype.sendEventToApi = function (data, path, paramName) {
                var _this = this;
                var url = Coveo.QueryUtils.mergePath(this.options.serviceUrl, '/rest/' + (AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION || AnalyticsEndpoint.DEFAULT_ANALYTICS_VERSION) + '/analytics/' + path);
                url = this.appendUrlParamSign(url);
                url += paramName + '=' + encodeURIComponent(JSON.stringify(data));
                if (this.options.token && this.options.token != "") {
                    url += "&access_token=" + encodeURIComponent(this.options.token);
                }
                // We use pendingRequest because we don't want to have 2 request to analytics at the same time.
                // Otherwise the cookie visitId won't be set correctly.
                if (AnalyticsEndpoint.pendingRequest == null) {
                    var pendingRequest = AnalyticsEndpoint.pendingRequest = Coveo.$.ajax({
                        url: url,
                        dataType: 'jsonp',
                        async: false
                    });
                    AnalyticsEndpoint.pendingRequest.done(function () {
                        AnalyticsEndpoint.pendingRequest = null;
                    });
                    return pendingRequest;
                }
                else {
                    // create a deferred proxy because we do not send the request right now
                    var deferred = Coveo.$.Deferred();
                    // when the current call is complete we retry to send the request,
                    // What ever the current call is successful or not
                    AnalyticsEndpoint.pendingRequest.always(function () {
                        // pass the result to the proxy deferred
                        _this.sendEventToApi(data, path, paramName).done(function (data) {
                            deferred.resolve(data);
                        }).fail(function (data) {
                            deferred.reject(data);
                        });
                    });
                    return deferred;
                }
            };
            AnalyticsEndpoint.prototype.appendUrlParamSign = function (url) {
                if (url.charAt(url.length - 1) == "?") {
                    return url;
                }
                else {
                    return url + "?";
                }
            };
            AnalyticsEndpoint.prototype.getFromService = function (url, params) {
                var paramsToSend = (this.options.token && this.options.token != "") ? Coveo.$.extend({ "access_token": this.options.token }, params) : params;
                return Coveo.$.ajax({
                    url: this.appendUrlParamSign(url) + this.buildQueryStringFromParam(paramsToSend),
                    dataType: 'jsonp'
                });
            };
            AnalyticsEndpoint.prototype.buildQueryStringFromParam = function (params) {
                var linked = Coveo._.map(Coveo._.pairs(params), function (pair) {
                    return pair[0] + "=" + encodeURIComponent(pair[1]);
                });
                return linked.join("&");
            };
            AnalyticsEndpoint.DEFAULT_ANALYTICS_URI = "https://usageanalytics.coveo.com";
            AnalyticsEndpoint.DEFAULT_ANALYTICS_VERSION = "v14";
            AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION = undefined;
            return AnalyticsEndpoint;
        })();
        Rest.AnalyticsEndpoint = AnalyticsEndpoint;
    })(Rest = Coveo.Rest || (Coveo.Rest = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var PendingSearchEvent = (function () {
            function PendingSearchEvent(_root, _endpoint, _templateSearchEvent, _sendToCloud) {
                this._root = _root;
                this._endpoint = _endpoint;
                this._templateSearchEvent = _templateSearchEvent;
                this._sendToCloud = _sendToCloud;
                this.searchDeferred = [];
                this.searchEvents = [];
                this.results = [];
                this._cancelled = false;
                this._finished = false;
                Coveo.Assert.exists(_root);
                Coveo.Assert.exists(_endpoint);
                Coveo.Assert.exists(_templateSearchEvent);
                this.handler = Coveo.$.proxy(this._handleDuringQuery, this);
                Coveo.$(_root).on(Coveo.Events.QueryEvents.duringQuery + ' ' + Coveo.Events.QueryEvents.duringFetchMoreQuery, this.handler);
            }
            PendingSearchEvent.prototype.getEventCause = function () {
                return this._templateSearchEvent.actionCause;
            };
            PendingSearchEvent.prototype.getEventMeta = function () {
                return this._templateSearchEvent.customData;
            };
            PendingSearchEvent.prototype.cancel = function () {
                this._stopRecording();
                this._cancelled = true;
            };
            PendingSearchEvent.prototype._handleDuringQuery = function (e, args) {
                var _this = this;
                Coveo.Assert.check(!this._finished);
                Coveo.Assert.check(!this._cancelled);
                // When synchronizing multiple search interfaces under a single search event
                // (think Salesforce boxes), we need to collect all search events and send them
                // in one single batch. So we gather all events until we idle out and then we
                // monitor those before sending the data.
                this.searchDeferred.push(args.deferred);
                // TODO: Maybe a better way to grab the search interface?
                var searchInterface = Ui.Component.get(e.target, Ui.SearchInterface);
                Coveo.Assert.exists(searchInterface);
                // TODO: Maybe a better way to grab the query controller?
                var queryController = Ui.Component.get(e.target, Coveo.Controllers.QueryController);
                Coveo.Assert.exists(queryController);
                args.deferred.done(function (queryResults) {
                    Coveo.Assert.exists(queryResults);
                    Coveo.Assert.check(!_this._finished);
                    if (queryResults._reusedSearchUid !== true) {
                        var searchEvent = Coveo._.extend({}, _this._templateSearchEvent);
                        _this.fillSearchEvent(searchEvent, searchInterface, args.query, queryResults);
                        _this.searchEvents.push(searchEvent);
                        _this.results.push(queryResults);
                    }
                }).always(function () {
                    var index = Coveo._.indexOf(_this.searchDeferred, args.deferred);
                    _this.searchDeferred.splice(index, 1);
                    if (_this.searchDeferred.length == 0) {
                        _this.flush();
                    }
                });
            };
            PendingSearchEvent.prototype._stopRecording = function () {
                if (this.handler) {
                    Coveo.$(this._root).off(Coveo.Events.QueryEvents.duringQuery + ' ' + Coveo.Events.QueryEvents.duringFetchMoreQuery, this.handler);
                    this.handler = undefined;
                }
            };
            PendingSearchEvent.prototype.flush = function () {
                var _this = this;
                if (!this._cancelled) {
                    this._stopRecording();
                    this._finished = true;
                    Coveo.Assert.check(this.searchEvents.length == this.results.length);
                    Coveo.Defer.defer(function () {
                        if (_this._sendToCloud) {
                            _this._endpoint.sendSearchEvents(_this.searchEvents);
                        }
                        var apiSearchEvents = Coveo._.map(_this.searchEvents, function (searchEvent) {
                            return Coveo.Rest.APIAnalyticsBuilder.convertSearchEventToAPI(searchEvent);
                        });
                        Coveo.$(_this._root).trigger(Coveo.Events.AnalyticsEvents.searchEvent, { searchEvents: apiSearchEvents });
                    });
                }
            };
            PendingSearchEvent.prototype.fillSearchEvent = function (searchEvent, searchInterface, query, queryResults) {
                Coveo.Assert.exists(searchEvent);
                Coveo.Assert.exists(searchInterface);
                Coveo.Assert.exists(query);
                Coveo.Assert.exists(queryResults);
                var currentQuery = searchInterface.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.q);
                searchEvent.queryPipeline = queryResults.pipeline;
                searchEvent.splitTestRunName = searchEvent.splitTestRunName || queryResults.splitTestRun;
                searchEvent.splitTestRunVersion = searchEvent.splitTestRunVersion || (queryResults.splitTestRun != undefined ? queryResults.pipeline : undefined);
                searchEvent.originLevel2 = searchEvent.originLevel2 || searchInterface.queryStateModel.get('t') || "default";
                searchEvent.queryText = currentQuery || query.q || ''; // do not log the query sent to the server if possible; it may contain added syntax depending on options
                searchEvent.advancedQuery = query.aq || '';
                searchEvent.didYouMean = query.enableDidYouMean;
                searchEvent.numberOfResults = queryResults.totalCount;
                searchEvent.responseTime = queryResults.duration;
                searchEvent.pageNumber = (query.firstResult / query.numberOfResults);
                searchEvent.resultsPerPage = query.numberOfResults;
                searchEvent.searchQueryUid = queryResults.searchUid;
                searchEvent.queryPipeline = queryResults.pipeline;
            };
            return PendingSearchEvent;
        })();
        Ui.PendingSearchEvent = PendingSearchEvent;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var PendingSearchAsYouTypeSearchEvent = (function (_super) {
            __extends(PendingSearchAsYouTypeSearchEvent, _super);
            function PendingSearchAsYouTypeSearchEvent(_root, _endpoint, _templateSearchEvent, _sendToCloud) {
                _super.call(this, _root, _endpoint, _templateSearchEvent, _sendToCloud);
                this._root = _root;
                this._endpoint = _endpoint;
                this._templateSearchEvent = _templateSearchEvent;
                this._sendToCloud = _sendToCloud;
                this.delayBeforeSending = 5000;
                this.armBatchDelay = 50;
                this.beforeUnloadHandler = Coveo.$.proxy(this.onWindowUnload, this);
                Coveo.$(window).on('beforeunload', this.beforeUnloadHandler);
            }
            PendingSearchAsYouTypeSearchEvent.prototype._handleDuringQuery = function (e, args) {
                var _this = this;
                this.toSendRightNow = function () {
                    if (!_this.isCancelledOrFinished()) {
                        _super.prototype._handleDuringQuery.call(_this, e, args);
                    }
                };
                Coveo._.delay(function () {
                    _this.toSendRightNow();
                }, this.delayBeforeSending);
            };
            PendingSearchAsYouTypeSearchEvent.prototype.sendRightNow = function () {
                if (this.toSendRightNow) {
                    this.toSendRightNow();
                }
            };
            PendingSearchAsYouTypeSearchEvent.prototype._stopRecording = function () {
                _super.prototype._stopRecording.call(this);
                if (this.beforeUnloadHandler) {
                    Coveo.$(window).off('beforeunload', this.beforeUnloadHandler);
                    this.beforeUnloadHandler = undefined;
                }
            };
            PendingSearchAsYouTypeSearchEvent.prototype.onWindowUnload = function () {
                if (!this.isCancelledOrFinished()) {
                    this.armBatchDelay = 0;
                    this.sendRightNow();
                }
            };
            PendingSearchAsYouTypeSearchEvent.prototype.isCancelledOrFinished = function () {
                if (!this._cancelled) {
                    if (this._finished) {
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
        })(Ui.PendingSearchEvent);
        Ui.PendingSearchAsYouTypeSearchEvent = PendingSearchAsYouTypeSearchEvent;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Events;
    (function (Events) {
        var AnalyticsEvents = (function () {
            function AnalyticsEvents() {
            }
            AnalyticsEvents.searchEvent = "analyticsSearchEvent";
            AnalyticsEvents.documentViewEvent = "analyticsDocumentViewEvent";
            AnalyticsEvents.customEvent = "analyticsCustomEvent";
            AnalyticsEvents.changeAnalyticsCustomData = "changeAnalyticsCustomData";
            return AnalyticsEvents;
        })();
        Events.AnalyticsEvents = AnalyticsEvents;
    })(Events = Coveo.Events || (Coveo.Events = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Rest;
    (function (Rest) {
        /*
         Decorates the Analytics Endpoint and triggers specific events for analytics
         */
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
        })();
        Rest.APIAnalyticsBuilder = APIAnalyticsBuilder;
    })(Rest = Coveo.Rest || (Coveo.Rest = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
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
                this.device = Coveo.DeviceUtils.getDeviceName();
                this.mobile = Coveo.DeviceUtils.isMobileDevice();
                Coveo.Assert.exists(endpoint);
                Coveo.Assert.exists(rootElement);
                Coveo.Assert.isNonEmptyString(this.language);
                Coveo.Assert.isNonEmptyString(this.device);
                Coveo.Assert.isNonEmptyString(this.originLevel1);
                this.logger = new Coveo.Logger(this);
            }
            LiveAnalyticsClient.prototype.isActivated = function () {
                return true;
            };
            LiveAnalyticsClient.prototype.getCurrentVisitId = function () {
                var param = {};
                var visitorCookie = Coveo.Utils.readCookie("visitor");
                if (visitorCookie) {
                    param['visitor'] = visitorCookie;
                }
                return this.endpoint.getVisitId(param);
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
            LiveAnalyticsClient.prototype.warnAboutSearchEvent = function () {
                if (Coveo._.isUndefined(this.pendingSearchEvent) && Coveo._.isUndefined(this.pendingSearchAsYouTypeSearchEvent)) {
                    this.logger.warn("A search was triggered, but no analytics event was logged. If you wish to have consistent analytics data, consider logging a search event using the methods provided by the framework", "https://developers.coveo.com/display/JsSearch/Analytics+Component");
                    if (window['console'] && console.trace) {
                        console.trace();
                    }
                }
            };
            LiveAnalyticsClient.prototype.pushCustomEvent = function (actionCause, metaObject, element) {
                var _this = this;
                var customEvent = this.buildCustomEvent(actionCause, metaObject, element);
                this.triggerChangeAnalyticsCustomData("CustomEvent", metaObject, customEvent);
                this.checkToSendAnyPendingSearchAsYouType(actionCause);
                Coveo.Defer.defer(function () {
                    if (_this.sendToCloud) {
                        _this.endpoint.sendCustomEvent(customEvent);
                    }
                    Coveo.$(_this.rootElement).trigger(Coveo.Events.AnalyticsEvents.customEvent, { customEvent: Coveo.Rest.APIAnalyticsBuilder.convertCustomEventToAPI(customEvent) });
                });
            };
            LiveAnalyticsClient.prototype.pushSearchEvent = function (actionCause, metaObject) {
                var _this = this;
                Coveo.Assert.exists(actionCause);
                if (this.pendingSearchEvent && this.pendingSearchEvent.getEventCause() !== actionCause.name) {
                    this.pendingSearchEvent._stopRecording();
                    this.pendingSearchEvent = null;
                }
                this.checkToSendAnyPendingSearchAsYouType(actionCause);
                if (!this.pendingSearchEvent) {
                    var searchEvent = this.buildSearchEvent(actionCause, metaObject);
                    this.triggerChangeAnalyticsCustomData("SearchEvent", metaObject, searchEvent);
                    var pendingSearchEvent = this.pendingSearchEvent = new Ui.PendingSearchEvent(this.rootElement, this.endpoint, searchEvent, this.sendToCloud);
                    Coveo.Defer.defer(function () {
                        // At this point all duringQuery events should have been fired, so we can forget
                        // about the pending search event. It'll finish processing automatically when
                        // all the deferred that were caught terminate.
                        _this.pendingSearchEvent = undefined;
                        pendingSearchEvent._stopRecording();
                    });
                }
            };
            LiveAnalyticsClient.prototype.checkToSendAnyPendingSearchAsYouType = function (actionCause) {
                if (this.eventIsNotRelatedToSearchBox(actionCause.name)) {
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
                this.pendingSearchAsYouTypeSearchEvent = new Ui.PendingSearchAsYouTypeSearchEvent(this.rootElement, this.endpoint, searchEvent, this.sendToCloud);
            };
            LiveAnalyticsClient.prototype.pushClickEvent = function (actionCause, metaObject, result, element) {
                var _this = this;
                var event = this.buildClickEvent(actionCause, metaObject, result, element);
                this.checkToSendAnyPendingSearchAsYouType(actionCause);
                this.triggerChangeAnalyticsCustomData("ClickEvent", metaObject, event);
                Coveo.Assert.isNonEmptyString(event.searchQueryUid);
                Coveo.Assert.isNonEmptyString(event.collectionName);
                Coveo.Assert.isNonEmptyString(event.sourceName);
                Coveo.Assert.isNumber(event.documentPosition);
                Coveo.Defer.defer(function () {
                    if (_this.sendToCloud) {
                        _this.endpoint.sendDocumentViewEvent(event);
                    }
                    Coveo.$(_this.rootElement).trigger(Coveo.Events.AnalyticsEvents.documentViewEvent, {
                        documentViewEvent: Coveo.Rest.APIAnalyticsBuilder.convertDocumentViewToAPI(event)
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
                    originLevel2: this.resolveActiveTabFromElement(this.rootElement),
                    customData: Coveo._.keys(metaObject).length > 0 ? metaObject : undefined,
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
                    documentUriHash: result.raw["sysurihash"],
                    documentUrl: result.clickUri,
                    documentTitle: result.title,
                    originLevel2: this.resolveActiveTabFromElement(element) || "default",
                    collectionName: result.raw['syscollection'],
                    sourceName: result.raw['syssource'],
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
                    originLevel2: this.resolveActiveTabFromElement(element) || "default",
                    responseTime: 0
                });
            };
            LiveAnalyticsClient.prototype.buildMetaObject = function (meta) {
                var build = Coveo._.extend({}, meta);
                build["JSUIVersion"] = Coveo.version.lib + ";" + Coveo.version.product;
                return build;
            };
            LiveAnalyticsClient.prototype.cancelAnyPendingSearchAsYouTypeEvent = function () {
                if (this.pendingSearchAsYouTypeSearchEvent) {
                    this.pendingSearchAsYouTypeSearchEvent.cancel();
                    this.pendingSearchAsYouTypeSearchEvent = undefined;
                }
            };
            LiveAnalyticsClient.prototype.resolveActiveTabFromElement = function (element) {
                Coveo.Assert.exists(element);
                var queryStateModel = this.resolveQueryStateModel(element);
                return (queryStateModel && queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.t));
            };
            LiveAnalyticsClient.prototype.resolveQueryStateModel = function (rootElement) {
                return Ui.Component.resolveBinding(rootElement, Coveo.Models.QueryStateModel);
            };
            LiveAnalyticsClient.prototype.eventIsNotRelatedToSearchBox = function (event) {
                return event !== Ui.AnalyticsActionCauseList.searchboxSubmit.name && event !== Ui.AnalyticsActionCauseList.searchboxClear.name;
            };
            LiveAnalyticsClient.prototype.triggerChangeAnalyticsCustomData = function (type, metaObject, event) {
                var changeableAnalyticsDataObject = {
                    language: event.language,
                    originLevel1: event.originLevel1,
                    originLevel2: event.originLevel2,
                    originLevel3: event.originLevel3
                };
                // This is for backward compatibility. Before the analytics were using either numbered
                // metas in metaDataAsNumber of later on named metas in metaDataAsString. Thus we still
                // provide those properties in a deprecated way. Below we're moving any data that's put
                // in them to the root.
                metaObject['metaDataAsString'] = {};
                metaObject['metaDataAsNumber'] = {};
                var args = Coveo.$.extend({}, {
                    type: type,
                    metaObject: metaObject
                }, changeableAnalyticsDataObject);
                Coveo.$(this.rootElement).trigger(Coveo.Events.AnalyticsEvents.changeAnalyticsCustomData, args);
                event.language = args.language;
                event.originLevel1 = args.originLevel1;
                event.originLevel2 = args.originLevel2;
                event.originLevel3 = args.originLevel3;
                event.customData = metaObject;
                // This is for backward compatibility. Before the analytics were using either numbered
                // metas in metaDataAsNumber of later on named metas in metaDataAsString. I'm now putting
                // them all at the root, and if I encounter the older properties I move them to the top
                // level after issuing a warning.
                var metaDataAsString = event.customData["metaDataAsString"];
                if (Coveo._.keys(metaDataAsString).length > 0) {
                    this.logger.warn("Using deprecated 'metaDataAsString' key to log custom analytics data. Custom meta should now be put at the root of the object.");
                    Coveo._.extend(event.customData, metaDataAsString);
                }
                delete event.customData["metaDataAsString"];
                var metaDataAsNumber = event.customData["metaDataAsNumber"];
                if (Coveo._.keys(metaDataAsNumber).length > 0) {
                    this.logger.warn("Using deprecated 'metaDataAsNumber' key to log custom analytics data. Custom meta should now be put at the root of the object.");
                    Coveo._.extend(event.customData, metaDataAsNumber);
                }
                delete event.customData["metaDataAsNumber"];
            };
            LiveAnalyticsClient.prototype.merge = function (first, second) {
                return Coveo.$.extend({}, first, second);
            };
            return LiveAnalyticsClient;
        })();
        Ui.LiveAnalyticsClient = LiveAnalyticsClient;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var MultiAnalyticsClient = (function () {
            function MultiAnalyticsClient(analyticsClients) {
                if (analyticsClients === void 0) { analyticsClients = []; }
                this.analyticsClients = analyticsClients;
                this.isContextual = false;
            }
            MultiAnalyticsClient.prototype.isActivated = function () {
                return Coveo._.some(this.analyticsClients, function (analyticsClient) { return analyticsClient.isActivated(); });
            };
            MultiAnalyticsClient.prototype.getCurrentEventCause = function () {
                return Coveo._.find(Coveo._.map(this.analyticsClients, function (analyticsClient) { return analyticsClient.getCurrentEventCause(); }), function (currentEventCause) { return currentEventCause != null; });
            };
            MultiAnalyticsClient.prototype.getCurrentEventMeta = function () {
                return Coveo._.find(Coveo._.map(this.analyticsClients, function (analyticsClient) { return analyticsClient.getCurrentEventMeta(); }), function (currentEventMeta) { return currentEventMeta != null; });
            };
            MultiAnalyticsClient.prototype.logSearchEvent = function (actionCause, meta) {
                Coveo._.each(this.analyticsClients, function (analyticsClient) { return analyticsClient.logSearchEvent(actionCause, meta); });
            };
            MultiAnalyticsClient.prototype.logSearchAsYouType = function (actionCause, meta) {
                Coveo._.each(this.analyticsClients, function (analyticsClient) { return analyticsClient.logSearchEvent(actionCause, meta); });
            };
            MultiAnalyticsClient.prototype.logClickEvent = function (actionCause, meta, result, element) {
                Coveo._.each(this.analyticsClients, function (analyticsClient) { return analyticsClient.logClickEvent(actionCause, meta, result, element); });
            };
            MultiAnalyticsClient.prototype.logCustomEvent = function (actionCause, meta, element) {
                Coveo._.each(this.analyticsClients, function (analyticsClient) { return analyticsClient.logCustomEvent(actionCause, meta, element); });
            };
            MultiAnalyticsClient.prototype.getTopQueries = function (params) {
                var _this = this;
                var deferer = Coveo.$.Deferred();
                var results = [];
                Coveo._.forEach(this.analyticsClients, function (analyticsClient, i) {
                    analyticsClient.getTopQueries(params).done(function (values) {
                        results[i] = values;
                        var complete = true;
                        for (var i = 0; i < _this.analyticsClients.length && complete; i++) {
                            complete = complete && results[i] != undefined;
                        }
                        if (complete) {
                            deferer.resolve(_this.mergeTopQueries(results, params.pageSize));
                        }
                    });
                });
                return deferer;
            };
            MultiAnalyticsClient.prototype.getCurrentVisitId = function () {
                return Coveo._.first(this.analyticsClients).getCurrentVisitId();
            };
            MultiAnalyticsClient.prototype.sendAllPendingEvents = function () {
                Coveo._.each(this.analyticsClients, function (analyticsClient) { return analyticsClient.sendAllPendingEvents(); });
            };
            MultiAnalyticsClient.prototype.warnAboutSearchEvent = function () {
                Coveo._.each(this.analyticsClients, function (analyticsClient) { return analyticsClient.warnAboutSearchEvent(); });
            };
            MultiAnalyticsClient.prototype.mergeTopQueries = function (values, pageSize) {
                var results = [];
                Coveo._.each(values, function (valuesToMerge) { return Coveo._.each(valuesToMerge, function (value) { return results.push(value); }); });
                results.length = Math.min(results.length, pageSize);
                return results;
            };
            return MultiAnalyticsClient;
        })();
        Ui.MultiAnalyticsClient = MultiAnalyticsClient;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
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
        var analyticsElement = Coveo.$(element).find("." + Coveo.Ui.Component.computeCssClassNameForType(Coveo.Ui.Analytics.ID));
        if (analyticsElement.length != 0) {
            return analyticsElement.coveo();
        }
        else {
            return undefined;
        }
    }
    // .coveo('logCustomEvent', actionCause: AnalyticsActionCause, meta);
    Coveo.Ui.CoveoJQuery.registerNamedMethod('logCustomEvent', function (element) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var client = getCoveoAnalyticsClient(element);
        if (client) {
            var actionCause = args[0];
            var meta = args[1];
            client.logCustomEvent(actionCause, meta, element);
        }
    });
    // .coveo('logSearchEvent', actionCause: AnalyticsActionCause, meta);
    Coveo.Ui.CoveoJQuery.registerNamedMethod('logSearchEvent', function (element) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var client = getCoveoAnalyticsClient(element);
        if (client) {
            var actionCause = args[0];
            var meta = args[1];
            client.logSearchEvent(actionCause, meta);
        }
    });
    // .coveo('logSearchAsYouTypeEvent', actionCause: AnalyticsActionCause, meta);
    Coveo.Ui.CoveoJQuery.registerNamedMethod('logSearchAsYouTypeEvent', function (element) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var client = getCoveoAnalyticsClient(element);
        if (client) {
            var actionCause = args[0];
            var meta = args[1];
            client.logSearchAsYouType(actionCause, meta);
        }
    });
    // .coveo('logClickEvent', actionCause: AnalyticsActionCause, meta, result: QueryResult);
    Coveo.Ui.CoveoJQuery.registerNamedMethod('logClickEvent', function (element) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var client = getCoveoAnalyticsClient(element);
        if (client) {
            var actionCause = args[0];
            var meta = args[1];
            var result = args[2];
            client.logClickEvent(actionCause, meta, result, element);
        }
    });
    // .coveo('logCustomEventVersion',version, event: Rest.CustomEvent);
    Coveo.Ui.CoveoJQuery.registerNamedMethod('logCustomEventVersion', function (element) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var client = getCoveoAnalyticsClient(element);
        if (client) {
            var clientLive = client;
            Coveo.Rest.AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION = args[0];
            clientLive.endpoint.sendCustomEvent(args[1]);
            Coveo.Rest.AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION = undefined;
        }
    });
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var Analytics = (function (_super) {
            __extends(Analytics, _super);
            function Analytics(element, options, bindings) {
                if (options === void 0) { options = {}; }
                _super.call(this, element, Analytics.ID, bindings);
                this.element = element;
                this.options = options;
                this.options = Ui.ComponentOptions.initComponentOptions(element, Analytics, options);
                if (this.options.token == null) {
                    var defaultEndpoint = Coveo.Rest.SearchEndpoint.endpoints['default'];
                    if (defaultEndpoint) {
                        this.options.token = defaultEndpoint.options.accessToken;
                    }
                }
                this.initializeAnalyticsClient();
                Coveo.Assert.exists(this.client);
                this.bind.onRoot(Coveo.Events.QueryEvents.buildingQuery, this.handleBuildingQuery);
                this.bind.onRoot(Coveo.Events.QueryEvents.queryError, this.handleQueryError);
            }
            Analytics.create = function (element, options) {
                var selector = Ui.Component.computeSelectorForType(Analytics.ID);
                var jqueryElement = Coveo.$(element);
                var found = jqueryElement.find(selector).add(jqueryElement.closest(selector));
                if (found.length == 1) {
                    return Analytics.getClient(found.get(0), options);
                }
                else if (found.length > 1) {
                    return new Ui.MultiAnalyticsClient(Coveo._.map(found, function (el) { return Analytics.getClient(el, options); }));
                }
                else {
                    return new Ui.NoopAnalyticsClient();
                }
            };
            Analytics.getClient = function (element, options) {
                // This check if an element is already initialized as an analytics component
                // If that's the case, return the client on that element.
                // Otherwise, init and return.
                var foundOnElement = Ui.Component.get(element, Analytics, true);
                if (foundOnElement instanceof Analytics) {
                    return foundOnElement.client;
                }
                else {
                    return new Analytics(element, options).client;
                }
            };
            Analytics.prototype.initializeAnalyticsEndpoint = function () {
                return new Coveo.Rest.AnalyticsEndpoint({
                    token: this.options.token,
                    serviceUrl: this.options.endpoint
                });
            };
            Analytics.prototype.initializeAnalyticsClient = function () {
                if (Coveo.Utils.isNonEmptyString(this.options.endpoint)) {
                    var endpoint = this.initializeAnalyticsEndpoint();
                    this.client = new Ui.LiveAnalyticsClient(endpoint, this.root || this.element, this.options.user, this.options.userDisplayName, this.options.anonymous, this.options.splitTestRunName, this.options.splitTestRunVersion, this.options.searchHub, this.options.sendToCloud);
                }
                else {
                    this.client = new Ui.NoopAnalyticsClient();
                }
            };
            Analytics.prototype.handleBuildingQuery = function (e, data) {
                Coveo.Assert.exists(data);
                data.queryBuilder.searchHub = this.options.searchHub;
            };
            Analytics.prototype.handleQueryError = function (e, data) {
                Coveo.Assert.exists(data);
                this.client.logCustomEvent(Ui.AnalyticsActionCauseList.queryError, {
                    query: data.query.q,
                    aq: data.query.aq,
                    cq: data.query.cq,
                    dq: data.query.dq,
                    errorType: data.error.type,
                    errorMessage: data.error.message
                }, Coveo.$(e.target)[0]);
            };
            Analytics.ID = 'Analytics';
            Analytics.options = {
                user: Ui.ComponentOptions.buildStringOption(),
                userDisplayName: Ui.ComponentOptions.buildStringOption(),
                token: Ui.ComponentOptions.buildStringOption(),
                endpoint: Ui.ComponentOptions.buildStringOption({ defaultValue: Coveo.Rest.AnalyticsEndpoint.DEFAULT_ANALYTICS_URI }),
                anonymous: Ui.ComponentOptions.buildBooleanOption({ defaultValue: false }),
                searchHub: Ui.ComponentOptions.buildStringOption({ defaultValue: 'default' }),
                splitTestRunName: Ui.ComponentOptions.buildStringOption(),
                splitTestRunVersion: Ui.ComponentOptions.buildStringOption(),
                sendToCloud: Ui.ComponentOptions.buildBooleanOption({ defaultValue: true })
            };
            return Analytics;
        })(Ui.Component);
        Ui.Analytics = Analytics;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var SuggestionForOmniBox = (function () {
            function SuggestionForOmniBox(structure, onSelect) {
                this.structure = structure;
                this.onSelect = onSelect;
            }
            SuggestionForOmniBox.prototype.buildOmniBoxElement = function (results, args) {
                var element;
                if (results.length != 0) {
                    element = Coveo.$("<div></div>");
                    var header = this.buildElementHeader();
                    element.append(header);
                    var rows = this.buildRowElements(results, args);
                    Coveo._.each(rows, function (row) {
                        element.append(row);
                    });
                }
                return element;
            };
            SuggestionForOmniBox.prototype.buildElementHeader = function () {
                return Coveo.$(this.structure.header.template({
                    headerTitle: this.structure.header.title
                }));
            };
            SuggestionForOmniBox.prototype.buildRowElements = function (results, args) {
                var _this = this;
                var ret = [];
                Coveo._.each(results, function (result) {
                    var row = Coveo.$(_this.structure.row({
                        rawValue: result.value,
                        data: Coveo.JQueryUtils.highlightElement(result.value, args.completeQueryExpression.word)
                    }));
                    row.fastClick(function () {
                        _this.onSelect.call(_this, result.value, args);
                    });
                    row.on("keyboardSelect", function () {
                        _this.onSelect.call(_this, result.value, args);
                    });
                    ret.push(row);
                });
                return ret;
            };
            return SuggestionForOmniBox;
        })();
        Ui.SuggestionForOmniBox = SuggestionForOmniBox;
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var TopFieldSuggestions = (function (_super) {
            __extends(TopFieldSuggestions, _super);
            function TopFieldSuggestions(element, options, bindings) {
                _super.call(this, element, TopFieldSuggestions.ID, bindings);
                this.options = options;
                this.topFieldElementHeaderTemplate = Coveo._.template("<div class='coveo-top-field-suggestion-header'>\
          <span class='coveo-icon-top-field'></span> \
          <span class='coveo-caption'><%= headerTitle %></span> \
        </div>");
                this.topFieldElementRowTemplate = Coveo._.template("<div class='coveo-omnibox-selectable coveo-top-field-suggestion-row'> \
          <%= data %> \
        </div>");
                // TODO remove on v1
                // this was really confusing but back in time, all the option need to be set in an object omniboxSuggestionOptions like this :
                // var option = { "omniboxSuggestionOptions": { "omniboxZIndex": 10 } };
                if ('omniboxSuggestionOptions' in this.options) {
                    this.options = Coveo._.extend(this.options, this.options['omniboxSuggestionOptions']);
                }
                this.options = Ui.ComponentOptions.initComponentOptions(element, TopFieldSuggestions, options);
                Coveo.Assert.check(Coveo.Utils.isCoveoField(this.options.field), this.options.field + ' is not a valid field');
                this.options.onSelect = this.options.onSelect || this.onRowSelection;
                var suggestionStructure = {
                    header: { template: this.topFieldElementHeaderTemplate, title: this.options.headerTitle },
                    row: this.topFieldElementRowTemplate
                };
                this.suggestionForOmniBox = new Ui.SuggestionForOmniBox(suggestionStructure, Coveo.$.proxy(this.options.onSelect, this));
                Coveo.$(this.root).on(Coveo.Events.OmniBoxEvents.populateOmniBox, Coveo.$.proxy(this.handlePopulateOmniBox, this));
            }
            TopFieldSuggestions.prototype.handlePopulateOmniBox = function (e, args) {
                var _this = this;
                Coveo.Assert.exists(args);
                if (!this.disabled) {
                    var valueToSearch = args.completeQueryExpression.word;
                    var deferred = Coveo.$.Deferred();
                    var searchDeferred = this.queryController.getEndpoint().listFieldValues(this.buildListFieldValueRequest(valueToSearch));
                    searchDeferred.done(function (results) {
                        var element = _this.suggestionForOmniBox.buildOmniBoxElement(results, args);
                        deferred.resolve({
                            element: element == undefined ? undefined : element.get(0),
                            zIndex: _this.options.omniboxZIndex
                        });
                    });
                    searchDeferred.fail(function () {
                        _this.resolveWithUndefined(deferred);
                    });
                    args.rows.push({
                        deferred: deferred
                    });
                }
            };
            TopFieldSuggestions.prototype.resolveWithUndefined = function (deferred) {
                deferred.resolve({
                    element: undefined
                });
            };
            TopFieldSuggestions.prototype.onRowSelection = function (value, args) {
                var _this = this;
                args.clear();
                args.closeOmniBox();
                this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.q, value);
                this.queryController.deferExecuteQuery({
                    beforeExecuteQuery: function () { return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.omniboxField, {}); }
                });
            };
            TopFieldSuggestions.prototype.buildListFieldValueRequest = function (valueToSearch) {
                return {
                    field: this.options.field,
                    ignoreAccents: true,
                    sortCriteria: 'occurrences',
                    maximumNumberOfValues: this.options.numberOfSuggestions,
                    patternType: "Wildcards",
                    pattern: "*" + valueToSearch + "*",
                    queryOverride: this.options.queryOverride
                };
            };
            TopFieldSuggestions.ID = "TopFieldSuggestions";
            TopFieldSuggestions.options = {
                field: Ui.ComponentOptions.buildFieldOption({ required: true }),
                queryOverride: Ui.ComponentOptions.buildStringOption({ defaultValue: '' }),
                omniboxZIndex: Ui.ComponentOptions.buildNumberOption({ defaultValue: 51, min: 0 }),
                headerTitle: Ui.ComponentOptions.buildLocalizedStringOption({ defaultValue: Ui.l("SuggestedResults") }),
                numberOfSuggestions: Ui.ComponentOptions.buildNumberOption({ defaultValue: 5, min: 1 })
            };
            return TopFieldSuggestions;
        })(Coveo.Ui.Component);
        Ui.TopFieldSuggestions = TopFieldSuggestions;
        Coveo.Ui.CoveoJQuery.registerAutoCreateComponent(TopFieldSuggestions);
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var TopAnalyticsSuggestions = (function (_super) {
            __extends(TopAnalyticsSuggestions, _super);
            function TopAnalyticsSuggestions(element, options, bindings) {
                var _this = this;
                _super.call(this, element, TopAnalyticsSuggestions.ID, bindings);
                this.options = options;
                this.partialQueries = [];
                this.lastSuggestions = [];
                this.topAnalyticsElementHeaderTemplate = Coveo._.template("<div class='coveo-top-analytics-suggestion-header'>\
          <span class='coveo-icon-top-analytics'></span> \
          <span class='coveo-caption'><%= headerTitle %></span> \
        </div>");
                this.topAnalyticsElementRowTemplate = Coveo._.template("<div class='coveo-omnibox-selectable coveo-top-analytics-suggestion-row'> \
          <%= data %> \
        </div>");
                this.resultsToBuildWith = [];
                // TODO remove on v1
                // this was really confusing but back in time, all the option need to be set in an object omniboxSuggestionOptions like this :
                // var option = { "omniboxSuggestionOptions": { "omniboxZIndex": 10 } };
                if ('omniboxSuggestionOptions' in this.options) {
                    this.options = Coveo._.extend(this.options, this.options['omniboxSuggestionOptions']);
                }
                Ui.ComponentOptions.initComponentOptions(element, TopAnalyticsSuggestions, this.options);
                this.options.onSelect = this.options.onSelect || this.onRowSelection;
                var suggestionStructure = {
                    header: { template: this.topAnalyticsElementHeaderTemplate, title: this.options.headerTitle },
                    row: this.topAnalyticsElementRowTemplate
                };
                this.suggestionForOmniBox = new Ui.SuggestionForOmniBox(suggestionStructure, Coveo.$.proxy(this.options.onSelect, this));
                Coveo.$(this.root).on(Coveo.Events.OmniBoxEvents.populateOmniBox, Coveo.$.proxy(this.handlePopulateOmnibox, this));
                this.bind.onRoot(Coveo.Events.QueryEvents.querySuccess, function () { return _this.partialQueries = []; });
            }
            TopAnalyticsSuggestions.prototype.handlePopulateOmnibox = function (e, args) {
                var _this = this;
                Coveo.Assert.exists(args);
                if (!this.disabled) {
                    var deferred = Coveo.$.Deferred();
                    var searchDeferred = this.usageAnalytics.getTopQueries({
                        pageSize: this.options.numberOfSuggestions,
                        queryText: args.completeQueryExpression.word
                    });
                    searchDeferred.done(function (results) {
                        _this.resultsToBuildWith = Coveo._.map(results, function (result) {
                            return {
                                value: result
                            };
                        });
                        _this.lastSuggestions = results;
                        if (!Coveo._.isEmpty(_this.resultsToBuildWith) && args.completeQueryExpression.word != '') {
                            _this.partialQueries.push(args.completeQueryExpression.word);
                        }
                        var element = _this.suggestionForOmniBox.buildOmniBoxElement(_this.resultsToBuildWith, args);
                        deferred.resolve({
                            element: element == undefined ? undefined : element.get(0),
                            zIndex: _this.options.omniboxZIndex
                        });
                    });
                    searchDeferred.fail(function () {
                        _this.resolveWithUndefined(deferred);
                    });
                    args.rows.push({ deferred: deferred });
                }
            };
            TopAnalyticsSuggestions.prototype.onRowSelection = function (value, args) {
                var _this = this;
                args.clear();
                args.closeOmniBox();
                this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.q, value);
                this.queryController.deferExecuteQuery({
                    beforeExecuteQuery: function () {
                        _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.omniboxAnalytics, {
                            partialQueries: _this.cleanCustomData(_this.partialQueries),
                            suggestionRanking: Coveo._.indexOf(Coveo._.pluck(_this.resultsToBuildWith, 'value'), value),
                            suggestions: _this.cleanCustomData(_this.lastSuggestions),
                            partialQuery: args.completeQueryExpression.word
                        });
                    }
                });
            };
            TopAnalyticsSuggestions.prototype.resolveWithUndefined = function (deferred) {
                deferred.resolve({
                    element: undefined
                });
            };
            TopAnalyticsSuggestions.prototype.cleanCustomData = function (toClean, rejectLength) {
                if (rejectLength === void 0) { rejectLength = 256; }
                // Filter out only consecutive values that are the identical
                toClean = Coveo._.filter(toClean, function (partial, pos, array) {
                    return pos === 0 || partial !== array[pos - 1];
                });
                // Custom dimensions cannot be an array in analytics service: Send a string joined by ; instead.
                // Need to replace ;
                toClean = Coveo._.map(toClean, function (partial) {
                    return partial.replace(/;/g, '');
                });
                // Reduce right to get the last X words that adds to less then rejectLength
                var reducedToRejectLengthOrLess = [];
                Coveo._.reduceRight(toClean, function (memo, partial) {
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
            TopAnalyticsSuggestions.ID = "TopAnalyticsSuggestions";
            TopAnalyticsSuggestions.options = {
                omniboxZIndex: Ui.ComponentOptions.buildNumberOption({ defaultValue: 52, min: 0 }),
                headerTitle: Ui.ComponentOptions.buildLocalizedStringOption({ defaultValue: Ui.l("SuggestedQueries") }),
                numberOfSuggestions: Ui.ComponentOptions.buildNumberOption({ defaultValue: 5, min: 1 })
            };
            return TopAnalyticsSuggestions;
        })(Coveo.Ui.Component);
        Ui.TopAnalyticsSuggestions = TopAnalyticsSuggestions;
        Coveo.Ui.CoveoJQuery.registerAutoCreateComponent(TopAnalyticsSuggestions);
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Ui;
    (function (Ui) {
        var Debug = (function (_super) {
            __extends(Debug, _super);
            function Debug(element, options, bindings) {
                var _this = this;
                _super.call(this, element, Debug.ID, bindings);
                this.element = element;
                this.options = options;
                this.options = Ui.ComponentOptions.initComponentOptions(element, Debug, options);
                Coveo.$(this.root).on(Coveo.Events.ResultListEvents.newResultsDisplayed, function () { return _this.handleNewResultsDisplayed(); });
                this.bind.onRoot(Coveo.Events.QueryEvents.querySuccess, function (e, args) { return _this.handleRootQuerySuccess(e, args); });
                Coveo.$(this.element).on(Coveo.Events.QueryEvents.duringQuery, function (e, args) { return _this.handleDuringQuery(e, args); });
                Coveo.$(this.element).on(Coveo.Events.QueryEvents.buildingQuery, function (e, args) { return _this.handleBuildingQuery(e, args); });
                Coveo.$(this.element).on(Coveo.Events.QueryEvents.querySuccess, function (e, args) { return _this.handleQuerySuccess(e, args); });
                Coveo.$(this.element).dblclick(function (e) { return _this.handleClick(e); });
            }
            Debug.prototype.handleNewResultsDisplayed = function () {
                var _this = this;
                Coveo.$(this.root).find('.CoveoResult').off('dblclick').dblclick(function (e) { return _this.handleResultDoubleClick(e); });
            };
            Debug.prototype.handleRootQuerySuccess = function (e, args) {
                this.results = {
                    clientDuration: args.results.clientDuration,
                    duration: args.results.duration,
                    indexDuration: args.results.indexDuration,
                    proxyDuration: args.results.proxyDuration
                };
            };
            Debug.prototype.handleBuildingQuery = function (e, args) {
                args.queryBuilder.enableDebug = this.options.enableDebug;
            };
            Debug.prototype.handleDuringQuery = function (e, args) {
                this.query = args.queryBuilder.build();
            };
            Debug.prototype.handleQuerySuccess = function (e, args) {
                var _this = this;
                var container = Coveo.$('<div/>').addClass('coveo-debug-info-container');
                if (this.options.enableDebug) {
                    var keys = Coveo._.keys(args.results).sort();
                    Coveo._.each(keys, function (key) {
                        var content = Coveo.$('<dl/>').addClass('coveo-debug-content').appendTo(container);
                        Coveo.$('<dt/>').addClass('coveo-debug-info-name coveo-text-selectable').text(key).appendTo(content);
                        if (Coveo._.isObject(args.results[key])) {
                            _this.buildObjectInfo(args.results[key], content, "info");
                            _this.buildCollapsable(content);
                        }
                        else {
                            Coveo.$('<dd/>').addClass('coveo-debug-info-value').append(_this.formatValue(args.results[key])).appendTo(content);
                        }
                    });
                }
                else {
                    var content = Coveo.$('<dl/>').addClass('coveo-debug-content').appendTo(container);
                    Coveo.$('<dt/>').addClass('coveo-debug-info-name coveo-text-selectable').text('Debug not enabled').appendTo(content);
                }
                Coveo.$('.coveo-debug-info-container').replaceWith(container);
            };
            Debug.prototype.handleClick = function (e) {
                var _this = this;
                if (Coveo.$(e.target).is('.coveo-text-selectable') && Coveo.$(this.element).find('.coveo-selectable-text-container').length == 0) {
                    var temp = Coveo.$(e.target).clone();
                    var container = temp.clone().text("").addClass('coveo-selectabletext-container');
                    var input = Coveo.$('<input readonly/>').width((temp.text().length + 1) * 8).addClass('coveo-text-selectable').val(temp.clone().children().remove().end().text()).on('fastClick blur click dblclick', function () {
                        Coveo.$('.coveo-selectabletext-container').replaceWith(temp).on('dblclick', function (f) { return _this.handleClick(f); });
                        if (temp.children().length > 0)
                            _this.buildCollapsable(temp.parent('.coveo-debug-content'));
                    });
                    input.appendTo(container);
                    Coveo.$(e.target).replaceWith(container);
                    input.select().focus();
                }
            };
            Debug.prototype.handleResultDoubleClick = function (e) {
                var _this = this;
                var resultLinkId = Ui.Component.computeCssClassNameForType(Coveo.Ui['ResultLink'].ID);
                var isResultLink = Coveo.$(e.target).hasClass(resultLinkId);
                if (e.altKey && !isResultLink) {
                    var result = Coveo.$(e.currentTarget).data('CoveoResult');
                    var element = this.buildResultInfo(result, this.query);
                    var modalbox = Coveo.ModalBox.open(element, { title: '', className: 'coveo-debug' });
                    Coveo.$(modalbox.wrapper.find('.coveo-title')).fastClick(function () { return modalbox.close(); });
                    Coveo.$(modalbox.overlay).fastClick(function () { return modalbox.close(); });
                    var searchBox = Coveo.$('<div/>').addClass('coveo-debug-search-box').on('click', function (e) {
                        e.stopPropagation();
                    }).appendTo(Coveo.$(modalbox.wrapper.children('.coveo-title')));
                    var debug = Coveo.$('<div>Enable query debug</div>').addClass('coveo-debug-title').appendTo(searchBox);
                    var debugCheck = Coveo.$('<input type="checkbox">').addClass('coveo-debug-checkbox').appendTo(debug);
                    this.buildSearchBox().appendTo(searchBox);
                    this.buildQueryDebug(debugCheck);
                    Coveo.$(document.body).keyup(function (e) {
                        if (e.keyCode == 27 /* ESCAPE */) {
                            modalbox.close();
                        }
                        Coveo.$(_this).unbind('keyup');
                    });
                    e.cancelBubble = true;
                    e.result = false;
                }
            };
            Debug.prototype.handleSearch = function (s) {
                Coveo.$('.coveo-debug-content').each(function (index) {
                    if (index != 0) {
                        if (Coveo.$(this).text().toLowerCase().indexOf(s.toLowerCase()) == -1) {
                            Coveo.$(this).closest('dl').hide();
                        }
                        else {
                            Coveo.$(this).find('dt').each(function () {
                                if (Coveo.$(this).text().toLowerCase().indexOf(s.toLowerCase()) != -1) {
                                    Coveo.$(this).html(Coveo.JQueryUtils.highlightElement(Coveo.$(this).text(), s));
                                }
                            });
                            Coveo.$(this).find('dd').each(function () {
                                if (Coveo.$(this).text().toLowerCase().indexOf(s.toLowerCase()) != -1) {
                                    Coveo.$(this).html(Coveo.JQueryUtils.highlightElement(Coveo.$(this).text(), s));
                                }
                            });
                            Coveo.$(this).show();
                        }
                    }
                });
            };
            Debug.prototype.buildResultInfo = function (result, query) {
                Coveo.Assert.exists(result);
                var box = Coveo.$('<div/>');
                Coveo.$('<div>Result link</div>').addClass('coveo-debug-title').appendTo(box);
                Coveo.$('<div/>').addClass('coveo-debug-content').append(this.formatValue(result.clickUri).text(result.title || result.uri)).appendTo(box);
                Coveo.$('<hr/>').appendTo(box);
                Coveo.$('<div>Query Duration</div>').addClass('coveo-debug-title').appendTo(box);
                Coveo.$('<div/>').addClass('coveo-debug-content').append(this.buildQueryDurations()).appendTo(box);
                Coveo.$('<hr/>').appendTo(box);
                Coveo.$('<div>Properties</div>').addClass('coveo-debug-title').appendTo(box);
                this.buildPropertyDebug(result).appendTo(box);
                Coveo.$('<hr/>').appendTo(box);
                Coveo.$('<div>Fields</div>').addClass('coveo-debug-title').appendTo(box);
                this.buildFieldDebug(result).appendTo(box);
                Coveo.$('<hr/>').appendTo(box);
                Coveo.$('<div>Ranking Info</div>').addClass('coveo-debug-title').appendTo(box);
                this.buildRankingInfo(result).appendTo(box);
                Coveo.$('<hr/>').appendTo(box);
                if (query) {
                    Coveo.$('<div>Query Info</div>').addClass('coveo-debug-title').appendTo(box);
                    this.buildQueryInfo(query).appendTo(box);
                    Coveo.$('<hr/>').appendTo(box);
                    Coveo.$('<div>Debug Advanced Info</div>').addClass('coveo-debug-title').appendTo(box);
                    Coveo.$('<dt/>').addClass('coveo-debug-info-name').text('Debug not enabled').appendTo(Coveo.$('<dl/>').addClass('coveo-debug-content').appendTo(Coveo.$('<div/>').addClass('coveo-debug-info-container').appendTo(box)));
                }
                return box;
            };
            Debug.prototype.buildQueryDurations = function () {
                var _this = this;
                var container = Coveo.$('<div/>').addClass('coveo-debug-duration-container');
                var ul = Coveo.$('<ul/>').appendTo(Coveo.$('<div/>').addClass('coveo-debug-duration-keys').appendTo(container));
                var colors = ['red', 'green', 'blue', '#FFB901'];
                var iterator = 0;
                var keys = Coveo._.keys(this.results);
                Coveo._.each(keys, function (value) {
                    if (isNaN(_this.results[value])) {
                        _this.results[value] = 0;
                    }
                    var li = Coveo.$('<li/>').addClass('coveo-debug-duration-key').appendTo(ul);
                    Coveo.$('<div/>').addClass('coveo-debug-duration-color').css('background-color', colors[iterator]).appendTo(li);
                    Coveo.$('<span/>').addClass('coveo-debug-duration-keyText').text(value + ' ' + _this.formatQueryDuration(_this.results[value])).appendTo(li);
                    Coveo.$('<div/>').addClass('coveo-clear').appendTo(li);
                    ++iterator;
                });
                Coveo.$('<div/>').addClass('coveo-clear').prependTo(container);
                this.buildQueryBars(colors).prependTo(container);
                return container;
            };
            Debug.prototype.buildQueryBars = function (colors) {
                var totalDuration = this.results["duration"] + this.results["clientDuration"] + this.results["proxyDuration"] + this.results["indexDuration"];
                var container = Coveo.$('<div/>').addClass('coveo-debug-duration-container');
                var iterator = 0;
                for (var value in this.results) {
                    var width = this.results[value] * 65 / totalDuration;
                    Coveo.$('<div/>').addClass('coveo-debug-duration-bar').css('width', width + 'vw').css('background-color', colors[iterator]).appendTo(container);
                    ++iterator;
                }
                return container;
            };
            Debug.prototype.buildPropertyDebug = function (result) {
                var _this = this;
                Coveo.Assert.exists(result);
                var container = Coveo.$('<div/>').addClass('coveo-property-container');
                var keys = Coveo._.keys(result).sort();
                Coveo._.each(keys, function (key) {
                    if (key == 'raw' || key[0] != key.toLowerCase()[0])
                        return;
                    var content = Coveo.$('<dl/>').addClass('coveo-debug-content').appendTo(container);
                    Coveo.$('<dt/>').addClass('coveo-debug-property-name coveo-text-selectable').text(key).appendTo(content);
                    if (Coveo._.isObject(result[key])) {
                        _this.buildObjectInfo(result[key], content, "property");
                        _this.buildCollapsable(content);
                    }
                    else {
                        Coveo.$('<dd/>').addClass('coveo-debug-property-value').append(_this.formatValue(result[key])).appendTo(content);
                    }
                });
                return container;
            };
            Debug.prototype.buildFieldDebug = function (result) {
                var _this = this;
                Coveo.Assert.exists(result);
                var container = Coveo.$('<div/>').addClass('coveo-field-container');
                var keys = Coveo._.keys(result.raw).sort();
                Coveo._.each(keys, function (key) {
                    var content = Coveo.$('<dl/>').addClass('coveo-debug-content').appendTo(container);
                    Coveo.$('<dt/>').addClass('coveo-debug-field-name coveo-text-selectable').text('@' + key).appendTo(content);
                    if (Coveo._.isObject(result[key])) {
                        _this.buildObjectInfo(result[key], content, "field");
                        _this.buildCollapsable(content);
                    }
                    else {
                        Coveo.$('<dd/>').addClass('coveo-debug-field-value').append(_this.formatValue(result.raw[key])).appendTo(content);
                    }
                });
                return container;
            };
            Debug.prototype.buildRankingInfo = function (result) {
                Coveo.Assert.exists(result);
                var container = Coveo.$('<div/>').addClass('coveo-ranking-container coveo-text-selectable');
                var content = Coveo.$('<dl/>').addClass('coveo-debug-content').appendTo(container);
                Coveo.$('<dt/>').addClass('coveo-debug-ranking-info-name coveo-text-selectable').text("Informations").appendTo(content);
                Coveo.$('<dd/>').addClass('coveo-debug-ranking-info-value').append(this.formatValue(result.rankingInfo)).appendTo(content);
                return container;
            };
            Debug.prototype.buildQueryInfo = function (query) {
                var _this = this;
                Coveo.Assert.exists(query);
                var container = Coveo.$('<div/>').addClass('coveo-query-container');
                var keys = Coveo._.keys(query).sort();
                Coveo._.each(keys, function (key) {
                    var content = Coveo.$('<dl/>').addClass('coveo-debug-content').appendTo(container);
                    Coveo.$('<dt/>').addClass('coveo-debug-query-name coveo-text-selectable').text(key).appendTo(content);
                    if (Coveo._.isObject(query[key])) {
                        _this.buildObjectInfo(query[key], content, "query");
                        _this.buildCollapsable(content);
                    }
                    else {
                        Coveo.$('<dd/>').addClass('coveo-debug-query-value').append(_this.formatValue(query[key])).appendTo(content);
                    }
                });
                return container;
            };
            Debug.prototype.buildObjectInfo = function (obj, parentContent, typeBuilding, constructedObjects) {
                var _this = this;
                if (!constructedObjects) {
                    constructedObjects = [];
                }
                if (Coveo._.contains(constructedObjects, obj)) {
                    return;
                }
                else {
                    constructedObjects.push(obj);
                }
                if (Coveo._.isNumber(obj) || Coveo._.isString(obj)) {
                    Coveo.$('<dd/>').addClass('coveo-debug-' + typeBuilding + '-value').append(this.formatValue(obj)).appendTo(parentContent);
                }
                else if (Coveo._.isArray(obj)) {
                    if (obj.length > 0) {
                        Coveo._.each(obj, function (o) {
                            _this.buildObjectInfo(o, parentContent, typeBuilding, constructedObjects);
                        });
                    }
                }
                else if (Coveo._.isObject(obj) && !Coveo._.isFunction(obj)) {
                    Coveo._.each(Coveo._.keys(obj), function (key) {
                        var content = Coveo.$('<dl/>').addClass('coveo-debug-content').appendTo(parentContent);
                        Coveo.$('<dt/>').addClass('coveo-debug-' + typeBuilding + '-name coveo-text-selectable').text(key).appendTo(content);
                        var val = _this.formatValue(_this.buildObjectInfo(obj[key], content, typeBuilding, constructedObjects));
                        Coveo.$('<dd/>').addClass('coveo-debug-' + typeBuilding + '-value').append(val).appendTo(content);
                    });
                    Coveo.$(parentContent).children('dl').hide();
                }
                return null;
            };
            Debug.prototype.buildSearchBox = function () {
                var _this = this;
                var searchBox = Coveo.$('<input type="search" placeholder="search in debug">').addClass('coveo-debug-search-input');
                searchBox.on('input', function () {
                    if (searchBox.val().length > 1) {
                        _this.handleSearch(searchBox.val());
                    }
                    if (searchBox.val().length == 0) {
                        Coveo.$(_this.element).find('dl').show();
                        Coveo.$(_this.element).find('.coveo-highlight').removeClass('coveo-highlight');
                    }
                });
                return searchBox;
            };
            Debug.prototype.buildQueryDebug = function (debugCheck) {
                var _this = this;
                debugCheck.change(function () {
                    if (debugCheck.is(':checked')) {
                        _this.options.enableDebug = true;
                    }
                    else {
                        _this.options.enableDebug = false;
                    }
                    _this.queryController.executeQuery({ closeModalBox: false });
                });
            };
            Debug.prototype.buildCollapsable = function (container) {
                var _this = this;
                if (container.children().hasClass('coveo-debug-content')) {
                    if (container.find('.coveo-icon').length == 0) {
                        Coveo.$('<span/>').addClass('coveo-icon').text('+').on('fastClick', function (e) {
                            e.stopPropagation();
                        }).prependTo(container.children('dt:first'));
                    }
                    container.find('.coveo-icon').fastClick(function (e) {
                        if (Coveo.$(e.target).text() == '+') {
                            Coveo.$(e.target).text('-');
                        }
                        else if (Coveo.$(e.target).text() == '-') {
                            Coveo.$(e.target).text('+');
                        }
                        container.children('dl').toggle();
                    });
                    Coveo._.each(container.children('.coveo-debug-content'), function (child) {
                        if (Coveo.$(child).children().hasClass('coveo-debug-content')) {
                            _this.buildCollapsable(Coveo.$(child));
                        }
                    });
                }
            };
            Debug.prototype.formatValue = function (value) {
                if (Coveo.Utils.isNonEmptyString(value)) {
                    if (Coveo.Utils.isValidUrl(value)) {
                        return Coveo.$('<a/>').attr('href', value).text(value);
                    }
                    return Coveo.$('<span/>').text(value.toString()).addClass('coveo-text-selectable');
                }
                else if (Coveo._.isBoolean(value)) {
                    return Coveo.$('<span/>').text(value.toString()).addClass('coveo-text-selectable');
                }
                else if (Coveo._.isNumber(value)) {
                    return Coveo.$('<span/>').text(value).addClass('coveo-text-selectable');
                }
            };
            Debug.prototype.formatQueryDuration = function (durationInMillis) {
                if (durationInMillis == undefined || isNaN(durationInMillis)) {
                    return Ui.l("Unavailable");
                }
                else {
                    var seconds = Math.max(durationInMillis / 1000, 0.00);
                    return Ui.l("Seconds", Globalize.format(seconds, 'n2'), seconds);
                }
            };
            Debug.ID = 'Debug';
            Debug.options = {
                enableDebug: Ui.ComponentOptions.buildBooleanOption({ defaultvalue: false })
            };
            return Debug;
        })(Ui.Component);
        Ui.Debug = Debug;
        Ui.CoveoJQuery.registerAutoCreateComponent(Debug);
    })(Ui = Coveo.Ui || (Coveo.Ui = {}));
})(Coveo || (Coveo = {}));
