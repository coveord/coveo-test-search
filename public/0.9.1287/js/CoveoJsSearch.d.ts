/// <reference path="../core/lib/jquery.d.ts" />
/// <reference path="../core/lib/underscore.d.ts" />
/// <reference path="../core/lib/globalize.d.ts" />
/// <reference path="../core/lib/handlebars.d.ts" />
/// <reference path="../core/lib/jsrender.d.ts" />
/// <reference path="../core/lib/ModalBox.d.ts" />
/// <reference path="../core/lib/jquery.jsonp.d.ts" />
/// <reference path="../core/lib/jstz.d.ts" />
/// <reference path="../core/lib/d3.d.ts" />
/// <reference path="../core/lib/phonegap.d.ts" />
/// <reference path="../core/lib/JsonTemplate.d.ts" />
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
declare var secretFeatureVariable1309: boolean;
declare module Coveo {
    var version: {
        "lib": string;
        "product": string;
        "supportedApiVersion": number;
    };
}
declare module Coveo.Ui {
    function l(str: "Unknown"): any;
    function l(str: "And"): any;
    function l(str: "Authenticating", param0: string): any;
    function l(str: "Clear", param0: string): any;
    function l(str: "CompleteQuery"): any;
    function l(str: "Exclude", param0: string): any;
    function l(str: "EnterTag"): any;
    function l(str: "Next"): any;
    function l(str: "Last"): any;
    function l(str: "Link"): any;
    function l(str: "Or"): any;
    function l(str: "Previous"): any;
    function l(str: "QueryDidntMatchAnyDocuments"): any;
    function l(str: "QueryException", param0: string): any;
    function l(str: "Me"): any;
    function l(str: "Remove"): any;
    function l(str: "Search"): any;
    function l(str: "SearchFor", param0: string): any;
    function l(str: "ShareQuery"): any;
    function l(str: "Preferences"): any;
    function l(str: "LinkOpeningSettings"): any;
    function l(str: "Reauthenticate", param0: string): any;
    function l(str: "ResultsFilteringExpression"): any;
    function l(str: "FiltersInYourPreferences"): any;
    function l(str: "Create"): any;
    function l(str: "SearchIn", param0: string): any;
    function l(str: "Seconds", param0: string, count: number): any;
    function l(str: "ShowingResultsOf", param0: string, param1: string, param2: string, count: number): any;
    function l(str: "SwitchTo", param0: string): any;
    function l(str: "Unexclude", param0: string): any;
    function l(str: "ClearAllFilters"): any;
    function l(str: "SkipLogin"): any;
    function l(str: "LoginInProgress"): any;
    function l(str: "Login"): any;
    function l(str: "GetStarted"): any;
    function l(str: "More"): any;
    function l(str: "Less"): any;
    function l(str: "Settings"): any;
    function l(str: "Score"): any;
    function l(str: "ScoreDescription"): any;
    function l(str: "Occurrences"): any;
    function l(str: "OccurrencesDescription"): any;
    function l(str: "Label"): any;
    function l(str: "Of"): any;
    function l(str: "LabelDescription"): any;
    function l(str: "Value"): any;
    function l(str: "ValueDescription"): any;
    function l(str: "AlphaAscending"): any;
    function l(str: "AlphaDescending"): any;
    function l(str: "ChiSquare"): any;
    function l(str: "Nosort"): any;
    function l(str: "RelativeFrequency"): any;
    function l(str: "RelativeFrequencyDescription"): any;
    function l(str: "DateDistribution"): any;
    function l(str: "Custom"): any;
    function l(str: "CustomDescription"): any;
    function l(str: "ComputedField"): any;
    function l(str: "Ascending"): any;
    function l(str: "Descending"): any;
    function l(str: "noResultFor", param0: string): any;
    function l(str: "autoCorrectedQueryTo", param0: string): any;
    function l(str: "didYouMean", param0: string): any;
    function l(str: "SuggestedResults"): any;
    function l(str: "SuggestedQueries"): any;
    function l(str: "MostRelevantItems"): any;
    function l(str: "AllItems"): any;
    function l(str: "ShowLess"): any;
    function l(str: "ShowMore"): any;
    function l(str: "HideFacet"): any;
    function l(str: "ShowFacet"): any;
    function l(str: "AndOthers", param0: string, count: number): any;
    function l(str: "Others", param0: string, count: number): any;
    function l(str: "MostRelevantPosts"): any;
    function l(str: "CompleteThread"): any;
    function l(str: "ShowCompleteThread"): any;
    function l(str: "ShowOnlyTopMatchingPosts"): any;
    function l(str: "MostRelevantReplies"): any;
    function l(str: "AllConversation"): any;
    function l(str: "ShowAllConversation"): any;
    function l(str: "ShowAllReplies"): any;
    function l(str: "ShowOnlyMostRelevantReplies"): any;
    function l(str: "Close"): any;
    function l(str: "Open"): any;
    function l(str: "OpenInOutlookWhenPossible"): any;
    function l(str: "AlwaysOpenInNewWindow"): any;
    function l(str: "QuickView"): any;
    function l(str: "ErrorReport"): any;
    function l(str: "OopsError"): any;
    function l(str: "ProblemPersists"): any;
    function l(str: "GoBack"): any;
    function l(str: "Reset"): any;
    function l(str: "Retry"): any;
    function l(str: "MoreInfo"): any;
    function l(str: "Username"): any;
    function l(str: "Password"): any;
    function l(str: "PostedBy"): any;
    function l(str: "CannotConnect"): any;
    function l(str: "BadUserPass"): any;
    function l(str: "PleaseEnterYourCredentials", param0: string): any;
    function l(str: "PleaseEnterYourSearchPage"): any;
    function l(str: "Collapse"): any;
    function l(str: "Collapsable"): any;
    function l(str: "Expand"): any;
    function l(str: "Today"): any;
    function l(str: "Yesterday"): any;
    function l(str: "Tomorrow"): any;
    function l(str: "Duration", param0: string): any;
    function l(str: "IndexDuration", param0: string): any;
    function l(str: "ProxyDuration", param0: string): any;
    function l(str: "ClientDuration", param0: string): any;
    function l(str: "Unavailable"): any;
    function l(str: "Reply"): any;
    function l(str: "ReplyAll"): any;
    function l(str: "Forward"): any;
    function l(str: "From"): any;
    function l(str: "Caption"): any;
    function l(str: "Expression"): any;
    function l(str: "Tab"): any;
    function l(str: "Tabs"): any;
    function l(str: "EnterExpressionName"): any;
    function l(str: "EnterExpressionToFilterWith"): any;
    function l(str: "SelectTab"): any;
    function l(str: "SelectAll"): any;
    function l(str: "PageUrl"): any;
    function l(str: "ErrorSavingToDevice"): any;
    function l(str: "ErrorReadingFromDevice"): any;
    function l(str: "AppIntro"): any;
    function l(str: "TryDemo"): any;
    function l(str: "ContactUs"): any;
    function l(str: "NewToCoveo"): any;
    function l(str: "LetUsHelpGetStarted"): any;
    function l(str: "LikesThis", param0: string, count: number): any;
    function l(str: "CannotConnectSearchPage"): any;
    function l(str: "AreYouSureDeleteFilter", param0: string, param1: string): any;
    function l(str: "OnlineHelp"): any;
    function l(str: "Done"): any;
    function l(str: "SaveFacetState"): any;
    function l(str: "ClearFacetState"): any;
    function l(str: "DisplayingTheOnlyMessage"): any;
    function l(str: "NoNetworkConnection"): any;
    function l(str: "UnknownConnection"): any;
    function l(str: "EthernetConnection"): any;
    function l(str: "WiFi"): any;
    function l(str: "CELL"): any;
    function l(str: "CELL_2G"): any;
    function l(str: "CELL_3G"): any;
    function l(str: "CELL_4G"): any;
    function l(str: "Relevance"): any;
    function l(str: "Date"): any;
    function l(str: "Amount"): any;
    function l(str: "QueryExceptionNoException"): any;
    function l(str: "QueryExceptionInvalidSyntax"): any;
    function l(str: "QueryExceptionInvalidCustomField"): any;
    function l(str: "QueryExceptionInvalidDate"): any;
    function l(str: "QueryExceptionInvalidExactPhrase"): any;
    function l(str: "QueryExceptionInvalidDateOp"): any;
    function l(str: "QueryExceptionInvalidNear"): any;
    function l(str: "QueryExceptionInvalidWeightedNear"): any;
    function l(str: "QueryExceptionInvalidTerm"): any;
    function l(str: "QueryExceptionTooManyTerms"): any;
    function l(str: "QueryExceptionWildcardTooGeneral"): any;
    function l(str: "QueryExceptionInvalidSortField"): any;
    function l(str: "QueryExceptionInvalidSmallStringOp"): any;
    function l(str: "QueryExceptionRequestedResultsMax"): any;
    function l(str: "QueryExceptionAggregatedMirrorDead"): any;
    function l(str: "QueryExceptionAggregatedMirrorQueryTimeOut"): any;
    function l(str: "QueryExceptionAggregatedMirrorInvalidBuildNumber"): any;
    function l(str: "QueryExceptionAggregatedMirrorCannotConnect"): any;
    function l(str: "QueryExceptionNotEnoughLeadingCharsWildcard"): any;
    function l(str: "QueryExceptionSecurityInverterNotFound"): any;
    function l(str: "QueryExceptionSecurityInverterAccessDenied"): any;
    function l(str: "QueryExceptionAggregatedMirrorCannotImpersonate"): any;
    function l(str: "QueryExceptionUnexpected"): any;
    function l(str: "QueryExceptionAccessDenied"): any;
    function l(str: "QueryExceptionSuperUserTokenInvalid"): any;
    function l(str: "QueryExceptionSuperUserTokenExpired"): any;
    function l(str: "QueryExceptionLicenseQueriesExpired"): any;
    function l(str: "QueryExceptionLicenseSuperUserTokenNotSupported"): any;
    function l(str: "QueryExceptionInvalidSession"): any;
    function l(str: "QueryExceptionInvalidDocument"): any;
    function l(str: "QueryExceptionSearchDisabled"): any;
    function l(str: "FileType"): any;
    function l(str: "ShowAttachment"): any;
    function l(str: "OnFeed", param0: string): any;
    function l(str: "Author"): any;
    function l(str: "NoTitle"): any;
    function l(str: "CurrentSelections"): any;
    function l(str: "AllContent"): any;
    function l(str: "CancelLastAction"): any;
    function l(str: "SearchTips"): any;
    function l(str: "CheckSpelling"): any;
    function l(str: "TryUsingFewerKeywords"): any;
    function l(str: "SelectFewerFilters"): any;
    function l(str: "Document"): any;
    function l(str: "Time"): any;
    function l(str: "StartDate"): any;
    function l(str: "StartTime"): any;
    function l(str: "DurationTitle"): any;
    function l(str: "UserQuery"): any;
    function l(str: "ShowUserActions"): any;
    function l(str: "NoData"): any;
    function l(str: "EventType"): any;
    function l(str: "GoToFullSearch"): any;
    function l(str: "GoToEdition"): any;
    function l(str: "RemoveContext"): any;
    function l(str: "BoxAttachToCase"): any;
    function l(str: "AttachToCase"): any;
    function l(str: "Attach"): any;
    function l(str: "Detach"): any;
    function l(str: "UserActionsNoVisitId"): any;
    function l(str: "UserActionsErrorOccured"): any;
    function l(str: "objecttype_people"): any;
    function l(str: "objecttype_message"): any;
    function l(str: "objecttype_feed"): any;
    function l(str: "objecttype_thread"): any;
    function l(str: "objecttype_file"): any;
    function l(str: "objecttype_board"): any;
    function l(str: "objecttype_category"): any;
    function l(str: "objecttype_account"): any;
    function l(str: "objecttype_campaign"): any;
    function l(str: "objecttype_case"): any;
    function l(str: "objecttype_contact"): any;
    function l(str: "objecttype_contract"): any;
    function l(str: "objecttype_event"): any;
    function l(str: "objecttype_lead"): any;
    function l(str: "objecttype_solution"): any;
    function l(str: "objecttype_task"): any;
    function l(str: "objecttype_user"): any;
    function l(str: "objecttype_attachment"): any;
    function l(str: "objecttype_casecomment"): any;
    function l(str: "objecttype_opportunity"): any;
    function l(str: "objecttype_feeditem"): any;
    function l(str: "objecttype_feedcomment"): any;
    function l(str: "objecttype_note"): any;
    function l(str: "objecttype_product"): any;
    function l(str: "objecttype_partner"): any;
    function l(str: "objecttype_kbdocumentation"): any;
    function l(str: "objecttype_kbsolution"): any;
    function l(str: "objecttype_kbknowledgearticle"): any;
    function l(str: "objecttype_kbattachment"): any;
    function l(str: "sysfiletype_html"): any;
    function l(str: "sysfiletype_image"): any;
    function l(str: "sysfiletype_folder"): any;
    function l(str: "sysfiletype_txt"): any;
    function l(str: "sysfiletype_zip"): any;
    function l(str: "sysfiletype_pdf"): any;
    function l(str: "sysfiletype_xml"): any;
    function l(str: "sysfiletype_doc"): any;
    function l(str: "sysfiletype_xls"): any;
    function l(str: "sysfiletype_ppt"): any;
    function l(str: "sysfiletype_video"): any;
    function l(str: "sysfiletype_saleforceuitem"): any;
    function l(str: "sysfiletype_exchangemessage"): any;
    function l(str: "sysfiletype_exchangeappointment"): any;
    function l(str: "sysfiletype_exchangenote"): any;
    function l(str: "sysfiletype_exchangetask"): any;
    function l(str: "sysfiletype_exchangeperson"): any;
    function l(str: "sysfiletype_activedirperson"): any;
    function l(str: "sysfiletype_exchangeactivity"): any;
    function l(str: "sysfiletype_exchangecalendarmessage"): any;
    function l(str: "sysfiletype_exchangedocument"): any;
    function l(str: "sysfiletype_exchangerssfeed"): any;
    function l(str: "sysfiletype_exchangejunkmessage"): any;
    function l(str: "sysfiletype_exchangeofficecom"): any;
    function l(str: "sysfiletype_lithiummessage"): any;
    function l(str: "sysfiletype_lithiumthread"): any;
    function l(str: "sysfiletype_lithiumboard"): any;
    function l(str: "sysfiletype_lithiumcategory"): any;
    function l(str: "sysfiletype_lithiumcommunity"): any;
    function l(str: "sysfiletype_spportal"): any;
    function l(str: "sysfiletype_spsite"): any;
    function l(str: "sysfiletype_spuserprofile"): any;
    function l(str: "sysfiletype_sparea"): any;
    function l(str: "sysfiletype_spannouncement"): any;
    function l(str: "sysfiletype_spannouncementlist"): any;
    function l(str: "sysfiletype_spcontact"): any;
    function l(str: "sysfiletype_spcontactlist"): any;
    function l(str: "sysfiletype_spcustomlist"): any;
    function l(str: "sysfiletype_spdiscussionboard"): any;
    function l(str: "sysfiletype_spdiscussionboardlist"): any;
    function l(str: "sysfiletype_spdocumentlibrarylist"): any;
    function l(str: "sysfiletype_spevent"): any;
    function l(str: "sysfiletype_speventlist"): any;
    function l(str: "sysfiletype_spformlibrarylist"): any;
    function l(str: "sysfiletype_spissue"): any;
    function l(str: "sysfiletype_spissuelist"): any;
    function l(str: "sysfiletype_splink"): any;
    function l(str: "sysfiletype_splinklist"): any;
    function l(str: "sysfiletype_sppicturelibrarylist"): any;
    function l(str: "sysfiletype_spsurvey"): any;
    function l(str: "sysfiletype_spsurveylist"): any;
    function l(str: "sysfiletype_sptask"): any;
    function l(str: "sysfiletype_sptasklist"): any;
    function l(str: "sysfiletype_spagenda"): any;
    function l(str: "sysfiletype_spagendalist"): any;
    function l(str: "sysfiletype_spattendee"): any;
    function l(str: "sysfiletype_spattendeelist"): any;
    function l(str: "sysfiletype_spcustomgridlist"): any;
    function l(str: "sysfiletype_spdecision"): any;
    function l(str: "sysfiletype_spdecisionlist"): any;
    function l(str: "sysfiletype_spobjective"): any;
    function l(str: "sysfiletype_spobjectivelist"): any;
    function l(str: "sysfiletype_sptextbox"): any;
    function l(str: "sysfiletype_sptextboxlist"): any;
    function l(str: "sysfiletype_spthingstobring"): any;
    function l(str: "sysfiletype_spthingstobringlist"): any;
    function l(str: "sysfiletype_sparealisting"): any;
    function l(str: "sysfiletype_spmeetingserie"): any;
    function l(str: "sysfiletype_spmeetingserielist"): any;
    function l(str: "sysfiletype_spsitedirectory"): any;
    function l(str: "sysfiletype_spsitedirectorylist"): any;
    function l(str: "sysfiletype_spdatasource"): any;
    function l(str: "sysfiletype_spdatasourcelist"): any;
    function l(str: "sysfiletype_splisttemplatecataloglist"): any;
    function l(str: "sysfiletype_spwebpartcataloglist"): any;
    function l(str: "sysfiletype_spwebtemplatecataloglist"): any;
    function l(str: "sysfiletype_spworkspacepagelist"): any;
    function l(str: "sysfiletype_spunknownlist"): any;
    function l(str: "sysfiletype_spadministratortask"): any;
    function l(str: "sysfiletype_spadministratortasklist"): any;
    function l(str: "sysfiletype_spareadocumentlibrarylist"): any;
    function l(str: "sysfiletype_spblogcategory"): any;
    function l(str: "sysfiletype_spblogcategorylist"): any;
    function l(str: "sysfiletype_spblogcomment"): any;
    function l(str: "sysfiletype_spblogcommentlist"): any;
    function l(str: "sysfiletype_spblogpost"): any;
    function l(str: "sysfiletype_spblogpostlist"): any;
    function l(str: "sysfiletype_spdataconnectionlibrarylist"): any;
    function l(str: "sysfiletype_spdistributiongroup"): any;
    function l(str: "sysfiletype_spdistributiongrouplist"): any;
    function l(str: "sysfiletype_spipfslist"): any;
    function l(str: "sysfiletype_spkeyperformanceindicator"): any;
    function l(str: "sysfiletype_spkeyperformanceindicatorlist"): any;
    function l(str: "sysfiletype_splanguagesandtranslator"): any;
    function l(str: "sysfiletype_splanguagesandtranslatorlist"): any;
    function l(str: "sysfiletype_spmasterpagescataloglist"): any;
    function l(str: "sysfiletype_spnocodeworkflowlibrarylist"): any;
    function l(str: "sysfiletype_spprojecttask"): any;
    function l(str: "sysfiletype_spprojecttasklist"): any;
    function l(str: "sysfiletype_sppublishingpageslibrarylist"): any;
    function l(str: "sysfiletype_spreportdocumentlibrarylist"): any;
    function l(str: "sysfiletype_spreportlibrarylist"): any;
    function l(str: "sysfiletype_spslidelibrarylist"): any;
    function l(str: "sysfiletype_sptab"): any;
    function l(str: "sysfiletype_sptablist"): any;
    function l(str: "sysfiletype_sptranslationmanagementlibrarylist"): any;
    function l(str: "sysfiletype_spuserinformation"): any;
    function l(str: "sysfiletype_spuserinformationlist"): any;
    function l(str: "sysfiletype_spwikipagelibrarylist"): any;
    function l(str: "sysfiletype_spworkflowhistory"): any;
    function l(str: "sysfiletype_spworkflowhistorylist"): any;
    function l(str: "sysfiletype_spworkflowprocess"): any;
    function l(str: "sysfiletype_spworkflowprocesslist"): any;
    function l(str: "sysfiletype_sppublishingimageslibrarylist"): any;
    function l(str: "sysfiletype_spcirculation"): any;
    function l(str: "sysfiletype_spcirculationlist"): any;
    function l(str: "sysfiletype_spdashboardslibrarylist"): any;
    function l(str: "sysfiletype_spdataconnectionforperformancepointlibrarylist"): any;
    function l(str: "sysfiletype_sphealthreport"): any;
    function l(str: "sysfiletype_sphealthreportlist"): any;
    function l(str: "sysfiletype_sphealthrule"): any;
    function l(str: "sysfiletype_sphealthrulelist"): any;
    function l(str: "sysfiletype_spimedictionary"): any;
    function l(str: "sysfiletype_spimedictionarylist"): any;
    function l(str: "sysfiletype_spperformancepointcontent"): any;
    function l(str: "sysfiletype_spperformancepointcontentlist"): any;
    function l(str: "sysfiletype_spphonecallmemo"): any;
    function l(str: "sysfiletype_spphonecallmemolist"): any;
    function l(str: "sysfiletype_sprecordlibrarylist"): any;
    function l(str: "sysfiletype_spresource"): any;
    function l(str: "sysfiletype_spresourcelist"): any;
    function l(str: "sysfiletype_spprocessdiagramslibrarylist"): any;
    function l(str: "sysfiletype_spsitethemeslibrarylist"): any;
    function l(str: "sysfiletype_spsolutionslibrarylist"): any;
    function l(str: "sysfiletype_spwfpublibrarylist"): any;
    function l(str: "sysfiletype_spwhereabout"): any;
    function l(str: "sysfiletype_spwhereaboutlist"): any;
    function l(str: "sysfiletype_spdocumentlink"): any;
    function l(str: "sysfiletype_spdocumentset"): any;
    function l(str: "sysfiletype_spmicrofeedpost"): any;
    function l(str: "sysfiletype_spmicrofeedlist"): any;
    function l(str: "sysfiletype_splistfolder"): any;
    function l(...params: any[]): any;
}
interface String {
    toLocaleString(): string;
}
declare module Coveo {
    var L10N: {
        format: (key: string, ...args: any[]) => string;
        formatPlSn: (value: string, count: number) => string;
    };
}
declare module Coveo {
    class Logger {
        private owner;
        static TRACE: number;
        static DEBUG: number;
        static INFO: number;
        static WARN: number;
        static ERROR: number;
        static NOTHING: number;
        static level: number;
        static executionTime: boolean;
        constructor(owner: any);
        trace(...stuff: any[]): void;
        debug(...stuff: any[]): void;
        info(...stuff: any[]): void;
        warn(...stuff: any[]): void;
        error(...stuff: any[]): void;
        private log(level, stuff);
        static enable(): void;
        static disable(): void;
    }
}
declare module Coveo {
    class Assert {
        private static logger;
        static failureHandler: (message?: string) => void;
        static fail(message?: string): void;
        static check(condition: boolean, message?: string): void;
        static isUndefined(obj: any): void;
        static isNotUndefined(obj: any): void;
        static isNull(obj: any): void;
        static isNotNull(obj: any): void;
        static exists(obj: any): void;
        static doesNotExists(obj: any): void;
        static isString(obj: any): void;
        static stringStartsWith(str: string, start: string): void;
        static isNonEmptyString(str: string): void;
        static isNumber(obj: any): void;
        static isLargerThan(expected: number, actual: number): void;
        static isLargerOrEqualsThan(expected: number, actual: number): void;
        static isSmallerThan(expected: number, actual: number): void;
        static isSmallerOrEqualsThan(expected: number, actual: number): void;
    }
    class PreconditionFailedException {
        message: string;
        constructor(message: string);
        toString(): string;
    }
}
declare module Coveo {
    var $: JQueryStatic;
}
declare module Coveo {
    var _: UnderscoreStatic;
}
interface JQueryStatic {
    proxy<T1, R>(func: (arg1: T1) => R, context: any): (arg1: T1) => R;
    proxy<T1, T2, R>(func: (arg1: T1, arg2: T2) => R, context: any): (arg1: T1, arg2: T2) => R;
    proxy<T1, T2, T3, R>(func: (arg1: T1, arg2: T2, arg3: T3) => R, context: any): (arg1: T1, arg2: T2, arg3: T3) => R;
    proxy<T1, T2, T3, T4, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => R, context: any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => R;
    proxy<T1, T2, T3, T4, T5, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => R, context: any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => R;
}
interface JQuery {
    on<T1>(events: string, handler: (JQueryEventObject, arg1: T1) => any): any;
    on<T1, T2>(events: string, handler: (JQueryEventObject, arg1: T1, arg2: T2) => any): any;
    on<T1, T2, T3>(events: string, handler: (JQueryEventObject, arg1: T1, arg2: T2, arg3: T2) => any): any;
    on<T1, T2, T3, T4>(events: string, handler: (JQueryEventObject, arg1: T1, arg2: T2, arg3: T2, arg4: T4) => any): any;
    on<T1, T2, T3, T4, T5>(events: string, handler: (JQueryEventObject, arg1: T1, arg2: T2, arg3: T2, arg4: T4, arg5: T5) => any): any;
    one<T1>(events: string, handler: (JQueryEventObject, arg1: T1) => any): any;
    one<T1, T2>(events: string, handler: (JQueryEventObject, arg1: T1, arg2: T2) => any): any;
    one<T1, T2, T3>(events: string, handler: (JQueryEventObject, arg1: T1, arg2: T2, arg3: T2) => any): any;
    one<T1, T2, T3, T4>(events: string, handler: (JQueryEventObject, arg1: T1, arg2: T2, arg3: T2, arg4: T4) => any): any;
    one<T1, T2, T3, T4, T5>(events: string, handler: (JQueryEventObject, arg1: T1, arg2: T2, arg3: T2, arg4: T4, arg5: T5) => any): any;
    focusin(): any;
    focusout(): any;
    off<T1>(events: string, selector: string, handler: (e: JQueryEventObject, arg1: T1) => any): any;
}
interface JQuery {
    getCursorPosition(): number;
    fastClick(): JQuery;
    fastClick(handler: (e: JQueryEventObject) => any): JQuery;
    fastToggle(visible: boolean): JQuery;
    coveo(): Coveo.Ui.Component;
    coveo(method: string): any;
    coveo(method: string, arg1: any): any;
    coveo(method: string, arg1: any, arg2: any): any;
    coveo(method: string, arg1: any, arg2: any, arg3: any): any;
    coveo(method: string, arg1: any, arg2: any, arg3: any, arg4: any): any;
    coveo(method: string, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any): any;
    coveo(componentClass?: any): Coveo.Ui.Component;
    coveo(method: 'init'): any;
    coveo(method: 'patch', methodName?: any, handler?: (...args: any[]) => any): any;
}
declare module Coveo {
    class Defer {
        private static functions;
        static defer(code: () => void): void;
        static flush(): void;
        private static arm();
        private static popOne();
    }
}
declare module Coveo {
    class Cache<Type> {
        onEmpty: () => Type;
        constructor(onEmpty?: () => Type);
        private cache;
        get(): Type;
        push(value: Type): void;
    }
}
declare module Coveo {
    class FastClick {
        element: JQuery;
        handler: (any) => any;
        distanceThreshold: number;
        timeThreshold: number;
        private startX;
        private startY;
        private endX;
        private endY;
        private startTime;
        private endTime;
        private startTarget;
        private startElement;
        private moved;
        constructor(element: JQuery, handler: (any) => any, distanceThreshold?: number, timeThreshold?: number);
        private setTouchHandlers();
        private preventMouseHandlers();
        private handleTouchStart(startEvent);
        private handleTouchMove(e);
        private handleTouchEnd(endEvent);
        private isGhostClick(e);
        private initStartVariables(startEvent);
        private getStartElement();
        private mustCallHandler(endEvent);
        private scrolled(endEvent);
        private held();
        private reset();
        private hideIOSKeyboardIfNecessary(target);
        private preventGhostClickIfAndroid(event);
    }
}
declare module Coveo.Utils {
    function isUndefined(obj: any): boolean;
    function isNull(obj: any): boolean;
    function isNullOrUndefined(obj: any): boolean;
    function exists(obj: any): boolean;
    function toNotNullString(str: string): string;
    function anyTypeToString(value: any): string;
    function isNullOrEmptyString(str: string): boolean;
    function isNonEmptyString(str: string): boolean;
    function isEmptyString(str: string): boolean;
    function stringStartsWith(str: string, startWith: string): boolean;
    function isNonEmptyArray(obj: any): boolean;
    function isEmptyArray(obj: any): boolean;
    function isHtmlElement(obj: any): boolean;
    function parseIntIfNotUndefined(str: string): number;
    function parseFloatIfNotUndefined(str: string): number;
    function round(num: number, decimals: number): number;
    function parseBooleanIfNotUndefined(str: string): boolean;
    function trim(value: string): string;
    function encodeHTMLEntities(rawStr: string): string;
    function decodeHTMLEntities(rawString: string): string;
    function arrayEqual(array1: any[], array2: any[], sameOrder?: boolean): boolean;
    function objectEqual(obj1: Object, obj2: Object): boolean;
    function isCoveoField(field: string): boolean;
    function getCoveoFieldKey(field: string): string;
    function escapeRegexCharacter(str: string): string;
    function throttle(func: any, wait: any, options?: {
        leading?: boolean;
        trailing?: boolean;
    }, context?: any, args?: any): () => any;
    function extendDeep(target: any, src: any): {};
    function getQueryStringValue(key: any, queryString?: string): string;
    function isValidUrl(str: string): boolean;
    function debounce(func: Function, wait: number): (...args: any[]) => void;
    function readCookie(name: string): string;
}
declare module Coveo {
    class TimeSpan {
        private milliseconds;
        constructor(milliseconds: number);
        getMilliseconds(): number;
        getSeconds(): number;
        getMinutes(): number;
        getHours(): number;
        getDays(): number;
        getWeeks(): number;
        static fromDates(from: Date, to: Date): TimeSpan;
    }
}
declare module Coveo.DeviceUtils {
    function getDeviceName(): string;
    function isAndroid(): boolean;
    function isIos(): boolean;
    function isIE8or9(): boolean;
    function isMobileDevice(): boolean;
    function isPhonegap(): boolean;
    function isSmallScreenWidth(): boolean;
    function isSmallScreenHeight(): boolean;
}
declare var crypto: Crypto;
declare module Coveo {
    class QueryUtils {
        static createGuid(): string;
        static generateWithRandom(): string;
        static generateWithCrypto(): string;
        static setStateObjectOnQueryResults(state: any, results: Rest.QueryResults): void;
        static setStateObjectOnQueryResult(state: any, result: Rest.QueryResult): void;
        static setIndexAndUidOnQueryResults(query: Rest.Query, results: Rest.QueryResults, queryUid: string, pipeline: string, splitTestRun: string): void;
        static setTermsToHighlightOnQueryResults(query: Rest.Query, results: Rest.QueryResults): void;
        static splitFlags(flags: string, delimiter?: string): string[];
        static isAttachment(result: Rest.QueryResult): boolean;
        static containsAttachment(result: Rest.QueryResult): boolean;
        static hasHTMLVersion(result: Rest.QueryResult): boolean;
        static hasThumbnail(result: Rest.QueryResult): boolean;
        static quoteAndEscapeIfNeeded(str: string): string;
        static quoteAndEscape(str: string): string;
        static escapeString(str: string): string;
        static isAtomicString(str: string): boolean;
        static isRangeString(str: string): boolean;
        static isRangeWithoutOuterBoundsString(str: string): boolean;
        static buildFieldExpression(field: string, operator: string, values: string[]): string;
        static buildFieldNotEqualExpression(field: string, values: string[]): string;
        static mergeQueryString(url: string, queryString: string): string;
        static mergePath(url: string, path: string): string;
        static setPropertyOnResults(results: Rest.QueryResults, property: string, value: any, afterOneLoop?: () => any): void;
        static setPropertyOnResult(result: Rest.QueryResult, property: string, value: any): void;
    }
}
declare module Coveo {
    class StringUtils {
        static javascriptEncode(value: string): string;
        static htmlEncode(value: string): string;
        static splice(value: string, index: number, remove: number, toAdd: string): string;
        static removeMiddle(value: string, length: number, toAdd: string): string;
        static regexEncode(value: string): string;
        static stringToRegex(value: string, ignoreAccent?: boolean): string;
        static wildcardsToRegex(value: string, ignoreAccent?: boolean): string;
        static getHighlights(strToSearch: string, regexToFind: RegExp, dataHighlightGroupTerm: string): Rest.Highlight[];
        static encodeCarriageReturn(strToEncode: string): string;
        static equalsCaseInsensitive(str1: string, str2: string): boolean;
        static accented: {
            [letter: string]: RegExp;
        };
    }
}
declare module Coveo.JQueryUtils {
    interface PopUpPosition {
        vertical: VerticalAlignment;
        horizontal: HorizontalAlignment;
        verticalOffset?: number;
        horizontalOffset?: number;
    }
    enum VerticalAlignment {
        top = 0,
        middle = 1,
        bottom = 2,
        innerTop = 3,
        innerBottom = 4,
    }
    enum HorizontalAlignment {
        left = 0,
        center = 1,
        right = 2,
        innerLeft = 3,
        innerRight = 4,
    }
    function positionPopup(popUp: JQuery, nextTo: JQuery, appendTo: JQuery, boundary: JQuery, desiredPosition: PopUpPosition, checkForBoundary?: number): void;
    function getPopUpCloseButton(captionForClose: string, captionForReminder: string): string;
    function getBasicLoadingAnimation(): JQuery;
    function getBasicLoadingDots(): JQuery;
    function getLoadingSpinner(): JQuery;
    function highlightElement(initialString: string, valueToSearch: string): string;
    function findScrollingParent(element: HTMLElement): HTMLElement;
    function htmlToDom(html: string): Node;
}
declare module Coveo {
    class HashUtils {
        private static Delimiter;
        static getHash(w?: Window): string;
        static getValue(value: string, toParse: string): any;
        static encodeValues(values: {}): string;
        private static getAjaxcrawlableHash(hash);
        private static getRawValue(value, toParse);
        private static getValueDependingOnType(paramValue);
        private static getValueType(paramValue);
        private static isArrayStartNotEncoded(value);
        private static isArrayStartEncoded(value);
        private static isArrayEndNotEncoded(value);
        private static isArrayEndEncoded(value);
        private static isObjectStartNotEncoded(value);
        private static isObjectStartEncoded(value);
        private static isObjectEndNotEncoded(value);
        private static isObjectEndEncoded(value);
        private static isObject(value);
        private static isArray(value);
        static encodeArray(array: string[]): string;
        static encodeObject(obj: Object): string;
        private static decodeObject(obj);
        private static decodeArray(value);
    }
}
declare module Coveo.MobileUtils {
    function showClickCancelingOverlay(duration: number): void;
    function showClickFeedback(element: JQuery, duration: number): void;
    function addToggleClassOnSearchInterface(direction: string, isPhonegap?: boolean): void;
    function removeToggleClassOnSearchInterface(isPhonegap?: boolean): void;
    function hideIOSKeyboard(activeElement: any): void;
}
declare module Coveo.ColorUtils {
    function hsvToRgb(h: any, s: any, v: any): number[];
    function rgbToHsv(r: any, g: any, b: any): any[];
}
declare module Coveo.Rest {
    interface EndpointError {
        message: string;
        type: string;
    }
}
declare module Coveo.Rest {
    class AjaxError implements EndpointError {
        message: string;
        status: number;
        type: any;
        constructor(message: string, status: number);
    }
}
declare module Coveo.Rest {
    class MissingAuthenticationError implements EndpointError {
        provider: string;
        type: string;
        message: string;
        isMissingAuthentication: boolean;
        constructor(provider: string);
    }
}
declare module Coveo.Rest {
    interface UserIdentity {
        name: string;
        provider: string;
        type: string;
    }
}
declare module Coveo.Rest {
    interface ComputedFieldRequest {
        field: string;
        operation: string;
    }
}
declare module Coveo.Rest {
    interface Extension {
        name: string;
        argumentNames: string[];
    }
}
declare module Coveo.Rest {
    interface FieldDescription {
        type: string;
        name: string;
        description: string;
        defaultValue: string;
        fieldType: string;
        fieldSourceType: string;
        includeInQuery: boolean;
        includeInResults: boolean;
        groupByField: boolean;
        splitGroupByField: boolean;
        sortByField: boolean;
    }
}
declare module Coveo.Rest {
    interface FieldValue {
        value: string;
        lookupValue?: string;
        numberOfResults: number;
        computedFieldResults?: number[];
    }
}
declare module Coveo.Rest {
    interface GroupByRequest {
        field: string;
        lookupField?: string;
        sortCriteria?: string;
        maximumNumberOfValues?: number;
        injectionDepth?: number;
        queryOverride?: string;
        constantQueryOverride?: string;
        allowedValues?: string[];
        computedFields?: ComputedFieldRequest[];
        rangeValues?: RangeValue[];
        generateAutomaticRanges?: boolean;
        completeFacetWithStandardValues?: boolean;
    }
}
declare module Coveo.Rest {
    interface GroupByValue extends FieldValue {
        value: string;
        lookupValue?: string;
        numberOfResults: number;
        score: number;
        computedFieldResults?: number[];
    }
}
declare module Coveo.Rest {
    interface Highlight {
        offset: number;
        length: number;
        dataHighlightGroup?: number;
        dataHighlightGroupTerm?: string;
    }
}
declare module Coveo.Rest {
    interface GroupByResult {
        field: string;
        values: GroupByValue[];
        globalComputedFieldResults?: number[];
    }
}
declare module Coveo.Rest {
    interface ListFieldsResult {
        fields: FieldDescription[];
    }
}
declare module Coveo.Rest {
    interface ListFieldValuesRequest {
        field: string;
        lookupField?: string;
        ignoreAccents?: boolean;
        sortCriteria?: string;
        maximumNumberOfValues?: number;
        queryOverride?: string;
        constantQueryOverride?: string;
        pattern?: string;
        patternType?: string;
    }
}
declare module Coveo.Rest {
    interface Query {
        q: string;
        aq?: string;
        cq?: string;
        dq?: string;
        searchHub?: string;
        tab?: string;
        language?: string;
        pipeline?: string;
        wildcards?: boolean;
        questionMark?: boolean;
        lowercaseOperators?: boolean;
        partialMatch?: boolean;
        partialMatchKeywords?: number;
        partialMatchThreshold?: string;
        firstResult?: number;
        numberOfResults?: number;
        sortCriteria?: string;
        sortField?: string;
        filterField?: string;
        filterFieldRange?: number;
        fieldsToInclude?: string[];
        fieldsToExclude?: string[];
        excerptLength?: number;
        retrieveFirstSentences?: boolean;
        enableDidYouMean?: boolean;
        queryFunctions?: Rest.QueryFunction[];
        rankingFunctions?: Rest.RankingFunction[];
        groupBy?: GroupByRequest[];
        debug?: boolean;
        timezone?: string;
        enableDuplicateFiltering?: boolean;
        enableCollaborativeRating?: boolean;
        context?: {
            [name: string]: any;
        };
    }
}
declare module Coveo.Rest {
    interface QueryCorrection {
        correctedQuery: string;
        wordCorrections: WordCorrection[];
    }
    interface WordCorrection {
        offset: number;
        length: number;
        originalWord: string;
        correctedWord: string;
    }
}
declare module Coveo.Rest {
    class QueryError implements EndpointError {
        status: number;
        message: string;
        type: string;
        queryExecutionReport: any;
        constructor(errorResponse: ErrorResponse);
    }
}
declare module Coveo.Rest {
    interface QueryException {
        code: string;
        context: string;
    }
}
declare module Coveo.Rest {
    interface QueryResult {
        title: string;
        titleHighlights: Highlight[];
        uri: string;
        printableUri: string;
        printableUriHighlights: Highlight[];
        clickUri: string;
        uniqueId: string;
        excerpt: string;
        excerptHighlights: Highlight[];
        firstSentences: string;
        firstSentencesHighlights: Highlight[];
        hasHtmlVersion: boolean;
        hasMobileHtmlVersion: boolean;
        flags: string;
        summary: string;
        summaryHighlights: Highlight[];
        rankingInfo: string;
        rating?: number;
        raw: any;
        parentResult?: QueryResult;
        childResults: QueryResult[];
        termsToHighlight?: {
            [originalTerm: string]: string[];
        };
        phrasesToHighlight: {
            [phrase: string]: {
                [originalTerm: string]: string[];
            };
        };
        rankingModifier?: string;
        index?: number;
        queryUid?: string;
        pipeline?: string;
        splitTestRun?: string;
        moreResults?: () => JQueryDeferred<QueryResult[]>;
        totalNumberOfChildResults?: number;
        attachments?: QueryResult[];
        state: {
            [attribute: string]: any;
        };
        orphan?: boolean;
        fields?: {
            [name: string]: any;
        };
    }
}
declare module Coveo.Rest {
    interface QueryResults {
        error?: {
            message: string;
            type: string;
            executionReport: any;
        };
        executionReport?: any;
        basicExpression?: string;
        advancedExpression?: string;
        constantExpression?: string;
        userIdentities?: UserIdentity[];
        rankingExpressions?: RankingExpression[];
        totalCount: number;
        duration: number;
        indexDuration: number;
        proxyDuration?: number;
        clientDuration: number;
        searchUid?: string;
        pipeline?: string;
        apiVersion?: number;
        splitTestRun?: string;
        exception?: QueryException;
        results: QueryResult[];
        groupByResults: GroupByResult[];
        queryCorrections: QueryCorrection[];
        termsToHighlight: {
            [originalTerm: string]: string[];
        };
        phrasesToHighlight: {
            [originalTerm: string]: string[];
        };
        triggers: Trigger[];
        _folded: boolean;
        _reusedSearchUid?: boolean;
    }
}
declare module Coveo.Rest {
    interface RangeValue {
        start?: any;
        end?: any;
        label?: string;
        endInclusive?: boolean;
    }
}
declare module Coveo.Rest {
    interface RankingExpression {
        expression: string;
        modifier: string;
    }
}
declare module Coveo.Rest {
    interface EndpointCallParameters {
        url: string;
        queryString: string[];
        requestData: any;
        method: string;
        responseType: string;
        errorsAsSuccess: boolean;
    }
    interface Response<T> {
        data?: any;
    }
    interface SuccessResponse<T> extends Response<T> {
        duration: number;
        data: T;
    }
    interface ErrorResponse extends Response<any> {
        statusCode: number;
        data?: {
            message?: string;
            type?: string;
            executionReport?: string;
            [key: string]: any;
        };
    }
    interface EndpointCallerOptions {
        anonymous?: boolean;
        accessToken?: string;
        username?: string;
        password?: string;
    }
    class EndpointCaller {
        options: EndpointCallerOptions;
        logger: Logger;
        useJsonp: boolean;
        constructor(options?: EndpointCallerOptions);
        call<T>(params: EndpointCallParameters): JQueryPromise<Response<T>>;
        static parseURL(url: string): HTMLAnchorElement;
        static convertJsonToQueryString(json: {
            [key: string]: any;
        }): string[];
        static convertJsonToFormBody(json: {
            [key: string]: any;
        }): string;
        private callUsingXMLHttpRequest<T>(requestInfo, responseType?);
        private callUsingXDomainRequest<T>(requestInfo);
        private callUsingAjaxJsonP<T>(requestInfo);
        private handleSuccessfulResponseThatMightBeAnError<T>(requestInfo, data);
        private handleSuccess<T>(requestInfo, data);
        private handleError<T>(requestInfo, status, data);
        private combineUrlAndQueryString(url, queryString);
        private isXDomainRequestSupported();
        private isCORSSupported();
        private isSuccessHttpStatus(status);
        private tryParseResponseText(json, contentType);
        private isErrorResponseBody(data);
    }
}
declare module Coveo.Rest {
    interface SearchEndpointOptions extends EndpointCallerOptions {
        restUri?: string;
        queryStringArguments?: any;
        anonymous?: boolean;
        accessToken?: string;
        renewAccessToken?: () => JQueryPromise<string>;
        username?: string;
        password?: string;
        isOldRestAPI?: boolean;
    }
    interface EndpointCallOptions {
        authentication?: string[];
    }
    interface ViewAsHtmlOptions extends EndpointCallOptions {
        query?: string;
        queryObject?: Query;
        requestedOutputSize?: number;
        contentType?: string;
    }
    interface SearchEndpointInterface {
        options: SearchEndpointOptions;
        getBaseUri(): string;
        getAuthenticationProviderUri(provider: string, returnUri: string, message: string): string;
        isJsonp(): boolean;
        search(query: Query, callOptions?: EndpointCallOptions): JQueryDeferred<QueryResults>;
        getRawDataStream(documentUniqueId: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<ArrayBuffer>;
        getDocumentText(documentUniqueID: string, callOptions?: EndpointCallOptions): JQueryDeferred<string>;
        getDocumentHtml(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<HTMLDocument>;
        getViewAsHtmlUri(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): string;
        getViewAsDatastreamUri(documentUniqueID: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): string;
        listFieldValues(request: ListFieldValuesRequest, callOptions?: EndpointCallOptions): JQueryDeferred<FieldValue[]>;
        listFields(callOptions?: EndpointCallOptions): JQueryDeferred<FieldDescription[]>;
        tagDocument(taggingRequest: TaggingRequest, callOptions?: EndpointCallOptions): JQueryDeferred<boolean>;
        rateDocument(ratingRequest: RatingRequest, callOptions?: EndpointCallOptions): JQueryDeferred<boolean>;
    }
}
declare module Coveo.Rest {
    class DefaultSearchEndpointOptions implements SearchEndpointOptions {
        restUri: string;
        queryStringArguments: {};
        anonymous: boolean;
        accessToken: string;
        renewAccessToken: () => JQueryPromise<string>;
        username: string;
        password: string;
        isOldRestAPI: boolean;
    }
    class SearchEndpoint implements SearchEndpointInterface {
        options: SearchEndpointOptions;
        static endpoints: {
            [endpoint: string]: SearchEndpoint;
        };
        static configureSampleEndpoint(): void;
        static configureCloudEndpoint(workgroup?: string, token?: string, uri?: string, otherOptions?: SearchEndpointOptions): void;
        static configureOnPremiseEndpoint(uri: string, token?: string, otherOptions?: SearchEndpointOptions): void;
        static removeUndefinedConfigOption(config: SearchEndpointOptions): SearchEndpointOptions;
        static mergeConfigOptions(first: SearchEndpointOptions, second: SearchEndpointOptions): SearchEndpointOptions;
        logger: Logger;
        isRedirecting: boolean;
        private caller;
        constructor(options?: SearchEndpointOptions);
        reset(): void;
        private static isDebugArgumentPresent();
        private handleUnload();
        getBaseUri(): string;
        getAuthenticationProviderUri(provider: string, returnUri: string, message: string): string;
        isJsonp(): boolean;
        search(query: Query, callOptions?: EndpointCallOptions): JQueryDeferred<QueryResults>;
        getRawDataStream(documentUniqueId: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<ArrayBuffer>;
        getDocumentText(documentUniqueID: string, callOptions?: EndpointCallOptions): JQueryDeferred<string>;
        getDocumentHtml(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<HTMLDocument>;
        getViewAsHtmlUri(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): string;
        getViewAsDatastreamUri(documentUniqueID: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): string;
        private _batchListFieldValues;
        batchFieldValues(request: ListFieldValuesRequest, callOptions?: EndpointCallOptions): JQueryDeferred<FieldValue[]>;
        listFieldValues(request: ListFieldValuesRequest, callOptions?: EndpointCallOptions): JQueryDeferred<FieldValue[]>;
        listFields(callOptions?: EndpointCallOptions): JQueryDeferred<FieldDescription[]>;
        extensions(callOptions?: EndpointCallOptions): JQueryDeferred<Extension[]>;
        rateDocument(ratingRequest: RatingRequest, callOptions?: EndpointCallOptions): JQueryDeferred<boolean>;
        tagDocument(taggingRequest: TaggingRequest, callOptions?: EndpointCallOptions): JQueryDeferred<boolean>;
        private createEndpointCaller();
        private buildBaseUri(path);
        private buildBaseQueryString(callOptions?);
        private buildViewAsHtmlUri(path, documentUniqueID, callOptions?);
        private buildViewAsHtmlQueryString(uniqueId, callOptions?);
        private callWithErrorHandling<T>(params);
        private performOneCall<T>(params, outerDeferred, autoRenewToken);
        private handleErrorResponse<T>(errorResponse, outerDeferred);
        private canRenewAccessToken();
        private isAccessTokenExpiredStatus(status);
        private renewAccessToken();
        private isMissingAuthenticationProviderStatus(status);
        private addTrailingSlash(uri);
        private removeTrailingSlash(uri);
        private hasTrailingSlash(uri);
    }
}
declare module Coveo.Rest {
    class SearchEndpointWithDefaultCallOptions implements SearchEndpointInterface {
        private endpoint;
        private callOptions;
        options: SearchEndpointOptions;
        constructor(endpoint: SearchEndpointInterface, callOptions?: EndpointCallOptions);
        getBaseUri(): string;
        getAuthenticationProviderUri(provider: string, returnUri: string, message: string): string;
        isJsonp(): boolean;
        search(query: Query, callOptions?: EndpointCallOptions): JQueryDeferred<QueryResults>;
        tagDocument(taggingRequest: TaggingRequest, callOptions?: EndpointCallOptions): JQueryDeferred<boolean>;
        rateDocument(ratingRequest: RatingRequest, callOptions?: EndpointCallOptions): JQueryDeferred<boolean>;
        getRawDataStream(documentUniqueId: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<ArrayBuffer>;
        getDocumentText(documentUniqueID: string, callOptions?: EndpointCallOptions): JQueryDeferred<string>;
        getDocumentHtml(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<HTMLDocument>;
        getViewAsHtmlUri(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): string;
        getViewAsDatastreamUri(documentUniqueID: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): string;
        listFieldValues(request: ListFieldValuesRequest, callOptions?: EndpointCallOptions): JQueryDeferred<FieldValue[]>;
        listFields(callOptions?: EndpointCallOptions): JQueryDeferred<FieldDescription[]>;
        private enrichCallOptions<T>(callOptions?);
    }
}
declare module Coveo.Rest {
    interface GenericParam {
        [paramName: string]: any;
    }
}
declare module Coveo.Rest {
    interface AnalyticsEvent {
        actionCause: string;
        actionType: string;
        username?: string;
        userDisplayName?: string;
        anonymous?: boolean;
        device: string;
        originLevel1: string;
        originLevel2: string;
        originLevel3?: string;
        language: string;
        responseTime: number;
        userAgent?: string;
        userGroups?: string;
        customData?: {
            [key: string]: string;
        };
    }
}
declare module Coveo.Rest {
    interface ClickEvent extends AnalyticsEvent {
        searchQueryUid: string;
        queryPipeline: string;
        splitTestRunName: string;
        splitTestRunVersion: string;
        documentUri: string;
        documentUriHash: string;
        documentUrl: string;
        documentTitle: string;
        collectionName: string;
        sourceName: string;
        documentPosition: number;
        viewMethod: string;
        rankingModifier: string;
    }
}
declare module Coveo.Rest {
    interface APICustomEvent {
        language: string;
        device: string;
        searchInterface: string;
        searchHub: string;
        responseTime: number;
        actionType: string;
        actionCause: string;
        customMetadatas: {
            [name: string]: string;
        };
    }
}
declare module Coveo.Rest {
    interface APIDocumentViewEvent {
        language: string;
        device: string;
        searchInterface: string;
        searchHub: string;
        responseTime: number;
        searchQueryUid: string;
        title: string;
        documentUrl: string;
        documentUri: string;
        documentUriHash: string;
        viewMethod: string;
        actionCause: string;
        queryPipeline: string;
        splitTestRunName: string;
        splitTestRunVersion: string;
        collectionName: string;
        sourceName: string;
        documentPosition: number;
        customMetadatas: {
            [name: string]: string;
        };
    }
}
declare module Coveo.Rest {
    interface APISearchEvent {
        language: string;
        device: string;
        searchInterface: string;
        searchHub: string;
        responseTime: number;
        customMetadatas: {
            [name: string]: string;
        };
        queryText: string;
        advancedQuery: string;
        didYouMean: boolean;
        numberOfResults: number;
        resultsPerPage: number;
        pageNumber: number;
        type: string;
        actionCause: string;
        queryPipeline: string;
        splitTestRunName: string;
        splitTestRunVersion: string;
        searchQueryUid: string;
    }
}
declare module Coveo.Rest {
    interface APIAnalyticsFacet {
        name: string;
        fieldName: string;
        sort: string;
        mode: string;
        selections: Rest.APIAnalyticsFacetSelection[];
    }
}
declare module Coveo.Rest {
    interface APIAnalyticsSearchEventsResponse {
        searchEventResponses: APIAnalyticsEventResponse[];
    }
}
declare module Coveo.Rest {
    interface APIAnalyticsVisitResponse {
        id: string;
    }
}
declare module Coveo.Rest {
    interface APIAnalyticsEventResponse {
        visitId: string;
    }
}
declare module Coveo.Rest {
    interface APIAnalyticsFacetSelection {
        entryName: string;
        status: string;
    }
}
declare module Coveo.Rest {
    interface SearchEvent extends AnalyticsEvent {
        searchQueryUid: string;
        queryPipeline: string;
        splitTestRunName: string;
        splitTestRunVersion: string;
        mobile?: boolean;
        queryText: string;
        numberOfResults: number;
        responseTime: number;
        resultsPerPage: number;
        pageNumber: number;
        advancedQuery: string;
        didYouMean: boolean;
        contextual: boolean;
    }
}
declare module Coveo.Rest {
    interface TopQueries extends GenericParam {
        pageSize: number;
        queryText: string;
    }
}
declare module Coveo.Rest {
    interface CustomEvent extends AnalyticsEvent {
        eventType: string;
        eventValue: string;
    }
}
declare module Coveo.Rest {
    interface QueryFunction {
        "function": string;
        fieldName: string;
    }
}
declare module Coveo.Rest {
    interface RankingFunction {
        expression: string;
        normalizeWeight: boolean;
    }
}
declare module Coveo.Rest {
    interface TaggingRequest {
        fieldName: string;
        fieldValue: string;
        doAdd: boolean;
        uniqueId: string;
    }
}
declare module Coveo {
    interface Trigger {
        type: string;
        content: any;
    }
}
declare module Coveo.Rest {
    interface RatingRequest {
        uniqueId: string;
        rating: string;
    }
}
declare module Coveo.Ui {
    interface InitializationParameters {
        options: any;
        result?: Rest.QueryResult;
        bindings: Ui.ComponentBindings;
    }
    class CoveoJQuery {
        private static logger;
        private static autoCreateComponents;
        private static namedMethods;
        static registerDefaultOptions(element: HTMLElement, options: {}): void;
        private static resolveDefaultOptions(element, options);
        static registerAutoCreateComponent(componentClass: ComponentClass): void;
        static isComponentClassIdRegistered(componentClassId: string): boolean;
        static getListOfRegistredComponents(): string[];
        static getRegistredComponent(name: string): ComponentClass;
        static initializeFramework(element: HTMLElement, options?: any, initSearchInterfaceFunction?: (...args: any[]) => void): void;
        private static logFirstQueryCause(searchInterface);
        private static performInitFunctionsOption(options, event);
        private static performPreInitFunctions(options);
        private static performPostInitFunction(options);
        private static performFunctions(option);
        static initSearchInterface(element: HTMLElement, options?: any): void;
        static initStandaloneSearchInterface(element: HTMLElement, options?: any): void;
        static initBoxInterface(element: HTMLElement, options?: any, type?: string, injectMarkup?: boolean): void;
        private static initExternalComponents(element, options?);
        static automaticallyCreateComponentsInside(element: HTMLElement, initParameters: InitializationParameters, ignore?: string[]): void;
        private static createFunctionThatInitializesComponentOnElements(elements, componentClassId, componentClass, initParameters);
        static createComponentOfThisClassOnElement(componentClassId: string, element: HTMLElement, initParameters?: InitializationParameters): Component;
        static registerNamedMethod(methodName: string, handler: (element: HTMLElement, ...args: any[]) => any): void;
        static isNamedMethodRegistered(methodName: string): boolean;
        static dispatchNamedMethodCall(methodName: string, element: HTMLElement, args: any[]): any;
        static isThereASingleComponentBoundToThisElement(element: HTMLElement): boolean;
        static dispatchMethodCallOnBoundComponent(methodName: string, element: HTMLElement, args: any[]): any;
        static dispatchNamedMethodCallOrComponentCreation(token: string, element: HTMLElement, args: any[]): any;
        static monkeyPatchComponentMethod(methodName: string, element: HTMLElement, handler: (...args: any[]) => any): void;
        static noConflict(): void;
    }
}
declare module Coveo.Ui {
    interface ComponentClass {
        ID: string;
        new (element: HTMLElement, options: any, bindings: ComponentBindings, ...args: any[]): Component;
        options?: any;
        parent?: ComponentClass;
    }
    interface ComponentBindings {
        root?: HTMLElement;
        queryStateModel?: Models.QueryStateModel;
        componentStateModel?: Models.ComponentStateModel;
        queryController?: Controllers.QueryController;
        searchInterface?: SearchInterface;
        usageAnalytics?: AnalyticsClient;
        componentOptionsModel?: Models.ComponentOptionsModel;
    }
    interface ResultsComponentBindings extends ComponentBindings {
        resultElement: HTMLElement;
    }
    class Component implements ComponentBindings {
        element: HTMLElement;
        type: string;
        logger: Logger;
        disabled: boolean;
        bind: ComponentEvents;
        root: HTMLElement;
        queryStateModel: Models.QueryStateModel;
        componentStateModel: Models.ComponentStateModel;
        queryController: Controllers.QueryController;
        searchInterface: SearchInterface;
        usageAnalytics: AnalyticsClient;
        componentOptionsModel: Models.ComponentOptionsModel;
        ensureDom: Function;
        constructor(element: HTMLElement, type: string, bindings?: ComponentBindings);
        getBindings(): ComponentBindings;
        enable(): void;
        disable(): void;
        createDom(): void;
        resolveSearchInterface(): SearchInterface;
        resolveRoot(defaultValue?: HTMLElement): HTMLElement;
        resolveQueryController(defaultValue?: Controllers.QueryController): Controllers.QueryController;
        resolveComponentStateModel(defaultValue?: Models.ComponentStateModel): Models.ComponentStateModel;
        resolveQueryStateModel(defaultValue?: Models.QueryStateModel): Models.QueryStateModel;
        resolveComponentOptionsModel(defaultValue?: Models.ComponentOptionsModel): Models.ComponentOptionsModel;
        resolveUA(): AnalyticsClient;
        resolveResultElement(): JQuery;
        resolveResult(): Rest.QueryResult;
        isInstanceOf(component: string): boolean;
        static getComponentRef(component: string): any;
        static get(element: HTMLElement, componentClass?: any, noThrow?: boolean): Component;
        static bindComponentToElement(element: HTMLElement, component: Component): void;
        static bindResultToElement(element: HTMLElement, result: Rest.QueryResult): void;
        static resolveBinding(element: HTMLElement, componentClass: any): Component;
        static computeCssClassNameForType(type: string): string;
        static computeSelectorForType(type: string): string;
        static computeMemberNameForType(type: string): string;
        static pointElementsToDummyForm(selector: JQuery): void;
        private static getBoundComponentsForElement(element);
    }
}
interface JQuery {
    coveo(method: 'get', componentClass?: any): Coveo.Ui.Component;
}
declare module Coveo.Ui {
    class ComponentEvents {
        owner: Component;
        constructor(owner: Component);
        on(selector: JQuery, event: string, handler: Function): void;
        onRoot<T>(event: string, handler: (e: JQueryEventObject, args: T) => any): void;
        fastClick(selector: JQuery, handler: (e: JQueryEventObject) => any): void;
        trigger(selector: JQuery, event: string, args?: Object): void;
        private wrapToCallIfEnabled(func);
    }
}
declare module Coveo.Ui.ComponentOptions {
    interface LoadOption<T> {
        (element: HTMLElement, name: string, option: Option<T>): T;
    }
    interface PostProcessing<T> {
        (value: T, options: any): T;
    }
    interface Option<T> extends OptionArgs<T> {
        type?: Type;
        load?: LoadOption<T>;
    }
    interface OptionArgs<T> {
        defaultValue?: T;
        defaultFunction?: (element: HTMLElement) => T;
        required?: boolean;
        postProcessing?: PostProcessing<T>;
        attrName?: string;
    }
    interface NumberOption extends Option<number>, NumberOptionArgs {
    }
    interface NumberOptionArgs extends OptionArgs<number> {
        min?: number;
        max?: number;
        float?: boolean;
    }
    interface ListOption extends Option<string[]>, ListOptionArgs {
    }
    interface ListOptionArgs extends OptionArgs<string[]> {
        separator?: RegExp;
        values?: any;
    }
    interface ChildHtmlElementOption extends Option<HTMLElement>, ChildHtmlElementOptionArgs {
    }
    interface ChildHtmlElementOptionArgs extends OptionArgs<HTMLElement> {
        selectorAttr?: string;
        childSelector?: string;
    }
    interface TemplateOption extends Option<Template>, TemplateOptionArgs {
    }
    interface TemplateOptionArgs extends OptionArgs<Template> {
        selectorAttr?: string;
        childSelector?: string;
        idAttr?: string;
        lazy?: boolean;
    }
    interface FieldOption extends Option<string>, FieldOptionArgs {
    }
    interface FieldOptionArgs extends OptionArgs<string> {
        groupByField?: boolean;
        includeInResults?: boolean;
        sortByField?: boolean;
        splitGroupByField?: boolean;
        match?: (field: Rest.FieldDescription) => boolean;
    }
    interface ObjectOption extends Option<{
        [key: string]: any;
    }>, ObjectOptionArgs {
    }
    interface ObjectOptionArgs extends OptionArgs<{
        [key: string]: any;
    }> {
        subOptions: {
            [key: string]: Option<any>;
        };
    }
    enum Type {
        BOOLEAN = 0,
        NUMBER = 1,
        STRING = 2,
        LOCALIZED_STRING = 3,
        LIST = 4,
        SELECTOR = 5,
        CHILD_HTML_ELEMENT = 6,
        TEMPLATE = 7,
        FIELD = 8,
        ICON = 9,
        OBJECT = 10,
        QUERY = 11,
        HELPER = 12,
        LONG_STRING = 13,
        JSON = 14,
        JAVASCRIPT = 15,
        NONE = 16,
    }
    function buildBooleanOption(optionArgs?: OptionArgs<boolean>): boolean;
    function buildNumberOption(optionArgs?: NumberOptionArgs): number;
    function buildStringOption(optionArgs?: OptionArgs<string>): string;
    function buildIconOption(optionArgs?: OptionArgs<string>): string;
    function buildHelperOption(optionArgs?: OptionArgs<string>): string;
    function buildJsonOption(optionArgs?: OptionArgs<string>): string;
    function buildLocalizedStringOption(optionArgs?: OptionArgs<string>): string;
    function buildFieldOption(optionArgs?: FieldOptionArgs): string;
    function buildListOption(optionArgs?: ListOptionArgs): string[];
    function buildSelectorOption(optionArgs?: OptionArgs<HTMLElement>): HTMLElement;
    function buildChildHtmlElementOption(optionArgs?: ChildHtmlElementOptionArgs): HTMLElement;
    function buildTemplateOption(optionArgs?: TemplateOptionArgs): Template;
    function buildCustomOption<T>(converter: (value: string) => T, optionArgs?: OptionArgs<T>): T;
    function buildCustomListOption<T>(converter: (value: string[]) => T, optionArgs?: ListOptionArgs): T;
    function buildObjectOption(optionArgs?: ObjectOptionArgs): any;
    function buildOption<T>(type: Type, load: LoadOption<T>, optionArg?: OptionArgs<T>): T;
    function attrNameFromName(name: string, optionArgs?: OptionArgs<any>): string;
    function camelCaseToHyphen(name: string): string;
    function mergeCamelCase(parent: string, name: string): string;
    function initComponentOptions(element: HTMLElement, component: ComponentClass, values?: any): any;
    function initOptions(element: HTMLElement, options: {
        [name: string]: Option<any>;
    }, values?: any): any;
    function loadStringOption(element: HTMLElement, name: string, option: Option<any>): string;
    function loadFieldOption(element: HTMLElement, name: string, option: Option<any>): string;
    function loadLocalizedStringOption(element: HTMLElement, name: string, option: Option<any>): string;
    function loadNumberOption(element: HTMLElement, name: string, option: NumberOption): number;
    function loadBooleanOption(element: HTMLElement, name: string, option: Option<any>): boolean;
    function loadListOption(element: HTMLElement, name: string, option: ListOption): string[];
    function loadEnumOption(element: HTMLElement, name: string, option: Option<any>, _enum: any): number;
    function loadSelectorOption(element: HTMLElement, name: string, option: Option<any>): HTMLElement;
    function loadChildHtmlElementOption(element: HTMLElement, name: string, option: ChildHtmlElementOption): HTMLElement;
    function loadChildHtmlElementFromSelector(element: HTMLElement, selector: string): HTMLElement;
    function loadChildrenHtmlElementFromSelector(element: HTMLElement, selector: string): HTMLElement[];
    function loadTemplateOption(element: HTMLElement, name: string, option: TemplateOption): Coveo.Ui.Template;
    function loadResultTemplateFromId(templateId: string): Coveo.Ui.Template;
    function loadChildrenResultTemplateFromSelector(element: HTMLElement, selector: string): Coveo.Ui.Template;
    function findParentScrolling(element: HTMLElement): HTMLElement;
    function isElementScrollable(element: JQuery): boolean;
    function createResultTemplateFromElement(element: HTMLElement): Template;
}
declare module Coveo.Ui {
    interface QueryBuilderExpression {
        full?: string;
        withoutConstant?: string;
        constant?: string;
    }
    class QueryBuilder {
        expression: ExpressionBuilder;
        advancedExpression: ExpressionBuilder;
        constantExpression: ExpressionBuilder;
        disjunctionExpression: ExpressionBuilder;
        searchHub: string;
        tab: string;
        language: string;
        pipeline: string;
        enableWildcards: boolean;
        enableQuestionMarks: boolean;
        enableLowercaseOperators: boolean;
        enablePartialMatch: boolean;
        partialMatchKeywords: number;
        partialMatchThreshold: string;
        firstResult: number;
        numberOfResults: number;
        excerptLength: number;
        filterField: string;
        filterFieldRange: number;
        parentField: string;
        childField: string;
        fieldsToInclude: string[];
        fieldsToExclude: string[];
        enableDidYouMean: boolean;
        enableDebug: boolean;
        enableCollaborativeRating: boolean;
        sortCriteria: string;
        sortField: string;
        retrieveFirstSentences: boolean;
        timezone: string;
        queryUid: string;
        queryFunctions: Rest.QueryFunction[];
        rankingFunctions: Rest.RankingFunction[];
        groupByRequests: Rest.GroupByRequest[];
        enableDuplicateFiltering: boolean;
        context: {
            [key: string]: any;
        };
        build(): Rest.Query;
        computeCompleteExpression(): string;
        computeCompleteExpressionParts(): QueryBuilderExpression;
        computeCompleteExpressionExcept(except: string): string;
        computeCompleteExpressionPartsExcept(except: string): QueryBuilderExpression;
        addContextValue(key: string, value: any): void;
        addContext(values: {
            [key: string]: any;
        }): void;
    }
}
declare module Coveo.Ui {
    class ExpressionBuilder {
        private parts;
        wrapParts: boolean;
        add(expression: string): void;
        fromExpressionBuilder(expression: ExpressionBuilder): void;
        addFieldExpression(field: string, operator: string, values: string[]): void;
        addFieldNotEqualExpression(field: string, values: string[]): void;
        remove(expression: string): void;
        isEmpty(): boolean;
        build(): string;
        static merge(...builders: ExpressionBuilder[]): ExpressionBuilder;
        static mergeUsingOr(...builders: ExpressionBuilder[]): ExpressionBuilder;
    }
}
declare module Coveo.Ui {
    class Template {
        dataToString: (object?: any) => string;
        condition: Function;
        private logger;
        constructor(dataToString?: (object?: any) => string, condition?: Function);
        instantiateToString(object?: any, checkCondition?: boolean): string;
        instantiateToElement(object?: any, checkCondition?: boolean): HTMLElement;
        toHtmlElement(): HTMLElement;
    }
}
declare module Coveo.Ui {
    class DefaultResultTemplate extends Template {
        constructor();
        instantiateToString(queryResult?: Rest.QueryResult): string;
    }
}
declare module Coveo.Ui {
    class UnderscoreTemplate extends Template {
        element: HTMLElement;
        private template;
        static templateHelpers: {
            [templateName: string]: TemplateHelperFunction;
        };
        static mimeTypes: string[];
        constructor(element: HTMLElement);
        toHtmlElement(): HTMLElement;
        static create(element: HTMLElement): UnderscoreTemplate;
        static fromString(template: string, condition?: string): UnderscoreTemplate;
        static registerTemplateHelper(helperName: string, helper: TemplateHelperFunction): void;
        static isLibraryAvailable(): boolean;
    }
}
declare module Coveo.Ui {
    class JsRenderTemplate extends Template {
        element: HTMLElement;
        static mimeTypes: string[];
        constructor(element: HTMLElement);
        static create(element: HTMLElement): JsRenderTemplate;
        static isLibraryAvailable(): boolean;
    }
}
declare module Coveo.Ui {
    class HandlebarsTemplate extends Template {
        element: HTMLElement;
        static mimeTypes: string[];
        constructor(element: HTMLElement);
        static create(element: HTMLElement): HandlebarsTemplate;
        static isLibraryAvailable(): boolean;
    }
}
declare module Coveo.Ui {
    class HtmlTemplate extends Coveo.Ui.Template {
        element: HTMLElement;
        static mimeTypes: string[];
        constructor(element: HTMLElement);
        toHtmlElement(): HTMLElement;
        static create(element: HTMLElement): HtmlTemplate;
        static fromString(template: string, condition?: string): HtmlTemplate;
    }
}
declare module Coveo.Ui {
    class TemplateCache {
        private static templates;
        private static templateNames;
        private static defaultTemplates;
        static registerTemplate(name: string, template: Template, publicTemplate?: boolean, defaultTemplate?: boolean): any;
        static registerTemplate(name: string, template: (data: {}) => string, publicTemplate?: boolean, defaultTemplate?: boolean): any;
        static getTemplate(name: string): Template;
        static getTemplates(): {
            [templateName: string]: Template;
        };
        static getTemplateNames(): string[];
        static getDefaultTemplates(): string[];
        static getDefaultTemplate(name: string): Template;
        static scanAndRegisterTemplates(): void;
        private static scanAndRegisterUnderscoreTemplates();
        private static scanAndRegisterJsRenderTemplates();
        private static scanAndRegisterHandlebarsTemplates();
        private static scanAndRegisterJsonTemplates();
        private static scanAndRegisterHtmlTemplates();
    }
}
declare module Coveo.Ui {
    class JsonRenderTemplate extends Template {
        private template;
        static mimeTypes: string[];
        constructor(template: Element);
        constructor(template: Utils.JsonTemplate.TemplateData);
        instantiateToString(data?: any): string;
        instantiateToElement(data?: any): HTMLElement;
        private renderTemplate(data);
        private renderContainers(containers);
        private renderContent(content);
        private renderField(data);
        private renderEllipsis(settings, content);
        private renderStyleSettings(settings, content, container, attrs);
        private renderCustomComponent(data);
        private renderCode(data);
        private renderLink(data);
        private renderThumbnail(data);
        private renderBadge(data);
        private renderQuickView(data);
        private renderFieldTable(data);
        private cleanText(text);
        private lowercaseFirstLetter(text);
        private cleanColor(color);
        private cleanWidth(width);
        private plainText(text);
        private htmlEncode(text);
        private jsRenderEncode(text);
        static create(element: HTMLElement): JsonRenderTemplate;
        static isLibraryAvailable(): boolean;
    }
}
declare module Coveo.Ui {
    interface JsonTemplateOption {
        template: Template;
        condition?: string;
    }
    class JsonTemplate extends Coveo.Ui.Template {
        element: HTMLElement;
        static options: {
            template: Template;
            condition: string;
        };
        static mimeTypes: string[];
        data: any;
        options: JsonTemplateOption;
        constructor(element: HTMLElement);
        instantiateToElement(object?: any, checkCondition?: boolean): HTMLElement;
        toHtmlElement(): HTMLElement;
        static create(element: HTMLElement): JsonTemplate;
    }
}
declare module Coveo.Ui {
    class LazyTemplate extends Template {
        private element;
        private attrName;
        private option;
        private template;
        constructor(element: HTMLElement, attrName: string, option: ComponentOptions.TemplateOption);
        instantiateToString(object?: any, checkCondition?: boolean): string;
    }
}
declare module Coveo.Ui {
    class TemplateList extends Template {
        private templates;
        constructor(templates: Template[]);
        instantiateToString(object?: any, checkCondition?: boolean): string;
        instantiateToElement(object?: any, checkCondition?: boolean): HTMLElement;
    }
}
declare module Coveo.Ui {
    interface TemplateHelperFunction {
        (...args: any[]): string;
    }
    class TemplateHelpers {
        private static helpers;
        static fieldHelpers: string[];
        static registerFieldHelper<T1>(name: string, helper: (value: string, options?: any) => string): void;
        static registerTemplateHelper<T1>(name: string, helper: (arg1: T1) => string): any;
        static registerTemplateHelper<T1, T2>(name: string, helper: (arg1: T1, arg2: T2) => string): any;
        static registerTemplateHelper<T1, T2, T3>(name: string, helper: (arg1: T1, arg2: T2, arg3: T3) => string): any;
        static registerTemplateHelper<T1, T2, T3, T4>(name: string, helper: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => string): any;
        static registerTemplateHelper<T1, T2, T3, T4, T5>(name: string, helper: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => string): any;
        static getHelper(name: string): TemplateHelperFunction;
        static getHelpers(): {
            [templateName: string]: TemplateHelperFunction;
        };
        private static registerTemplateHelperInJsRender(name, helper);
        private static registerTemplateHelperInHandlebars(name, helper);
        private static registerTemplateHelperInUnderscore(name, helper);
    }
}
declare module Coveo.Ui {
    interface AnalyticsCustomData {
        [key: string]: string;
    }
    interface AnalyticsClient {
        isContextual: boolean;
        isActivated(): boolean;
        getCurrentEventCause(): string;
        getCurrentEventMeta(): {
            [key: string]: any;
        };
        logSearchEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        logSearchAsYouType<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        logClickEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, result: Rest.QueryResult, element: HTMLElement): void;
        logCustomEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, element: HTMLElement): void;
        getTopQueries(params: Rest.TopQueries): JQueryPromise<string[]>;
        getCurrentVisitId(): JQueryPromise<string>;
        sendAllPendingEvents(): void;
        warnAboutSearchEvent(): void;
    }
}
declare module Coveo.Ui {
    interface AnalyticsActionCause {
        name: string;
        type: string;
        metaMap?: {
            [name: string]: number;
        };
    }
    interface AnalyticsNoMeta {
    }
    interface AnalyticsInterfaceChange {
        interfaceChangeTo: string;
    }
    interface AnalyticsContextAddMeta {
        contextName: string;
    }
    interface AnalyticsContextRemoveMeta {
        contextName: string;
    }
    interface AnalyticsResultsSortMeta {
        resultsSortBy: string;
    }
    interface AnalyticsDocumentViewMeta {
    }
    interface AnalyticsFacetMeta {
        facetId: string;
        facetValue?: string;
        facetTitle: string;
    }
    interface AnalyticsQueryErrorMeta {
        query: string;
        aq: string;
        cq: string;
        dq: string;
        errorType: string;
        errorMessage: string;
    }
    interface AnalyticsTopSuggestionMeta {
        partialQueries: string;
        partialQuery: string;
        suggestionRanking: number;
        suggestions: string;
    }
    interface AnalyticsFacetSliderChangeMeta {
        facetId: string;
        facetRangeStart: any;
        facetRangeEnd: any;
    }
    interface AnalyticsFacetGraphSelectedMeta extends AnalyticsFacetSliderChangeMeta {
    }
    interface AnalyticsFacetOperatorMeta extends AnalyticsFacetMeta {
        facetOperatorBefore: string;
        facetOperatorAfter: string;
    }
    interface AnalyticsPreferencesChangeMeta {
        preferenceName: string;
        preferenceType: string;
    }
    interface AnalyticsCustomFiltersChangeMeta {
        customFilterName: string;
        customFilterType: string;
        customFilterExpression: string;
    }
    interface AnalyticsCaseAttachMeta {
        resultUriHash: string;
        articleID: string;
        caseID: string;
    }
    interface AnalyticsCaseContextAddMeta {
        caseID: string;
    }
    interface AnalyticsCaseContextRemoveMeta {
        caseID: string;
    }
    interface AnalyticsCaseDetachMeta extends AnalyticsCaseAttachMeta {
    }
    interface AnalyticsPagerMeta {
        pagerNumber: number;
    }
    var AnalyticsActionCauseList: {
        interfaceLoad: AnalyticsActionCause;
        interfaceChange: AnalyticsActionCause;
        contextRemove: AnalyticsActionCause;
        didyoumeanAutomatic: AnalyticsActionCause;
        didyoumeanClick: AnalyticsActionCause;
        resultsSort: AnalyticsActionCause;
        searchboxSubmit: AnalyticsActionCause;
        searchboxClear: AnalyticsActionCause;
        searchboxAsYouType: AnalyticsActionCause;
        breadcrumbFacet: AnalyticsActionCause;
        breadcrumbResetAll: AnalyticsActionCause;
        documentTag: AnalyticsActionCause;
        documentField: AnalyticsActionCause;
        documentQuickView: AnalyticsActionCause;
        documentOpen: AnalyticsActionCause;
        omniboxFacet: AnalyticsActionCause;
        omniboxAnalytics: AnalyticsActionCause;
        omniboxField: AnalyticsActionCause;
        facetClearAll: AnalyticsActionCause;
        facetSearch: AnalyticsActionCause;
        facetToggle: AnalyticsActionCause;
        facetRangeSlider: AnalyticsActionCause;
        facetRangeGraph: AnalyticsActionCause;
        facetSelect: AnalyticsActionCause;
        facetSelectAll: AnalyticsActionCause;
        facetDeselect: AnalyticsActionCause;
        facetExclude: AnalyticsActionCause;
        facetUnexclude: AnalyticsActionCause;
        errorBack: AnalyticsActionCause;
        errorClearQuery: AnalyticsActionCause;
        errorRetry: AnalyticsActionCause;
        noResultsBack: AnalyticsActionCause;
        expandToFullUI: AnalyticsActionCause;
        caseCreate: AnalyticsActionCause;
        casecontextAdd: AnalyticsActionCause;
        casecontextRemove: AnalyticsActionCause;
        preferencesChange: AnalyticsActionCause;
        getUserHistory: AnalyticsActionCause;
        caseAttach: AnalyticsActionCause;
        caseDetach: AnalyticsActionCause;
        customfiltersChange: AnalyticsActionCause;
        pagerNumber: AnalyticsActionCause;
        pagerNext: AnalyticsActionCause;
        pagerPrevious: AnalyticsActionCause;
        pagerScrolling: AnalyticsActionCause;
        searchFromLink: AnalyticsActionCause;
        triggerQuery: AnalyticsActionCause;
        queryError: AnalyticsActionCause;
    };
}
declare module Coveo.Ui {
    class NoopAnalyticsClient implements AnalyticsClient {
        isContextual: boolean;
        isActivated(): boolean;
        getCurrentEventCause(): string;
        getCurrentEventMeta(): {
            [key: string]: any;
        };
        logSearchEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        logSearchAsYouType<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        logClickEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, result?: Rest.QueryResult, element?: HTMLElement): void;
        logCustomEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, element?: HTMLElement): void;
        getTopQueries(params: Rest.TopQueries): JQueryDeferred<string[]>;
        getCurrentVisitId(): JQueryPromise<string>;
        sendAllPendingEvents(): void;
        warnAboutSearchEvent(): void;
    }
}
declare module Coveo.Models {
    interface ModelSetOptions {
        silent?: boolean;
        customAttribute?: boolean;
        validateType?: boolean;
    }
    interface AttributeChangedEventArg {
        attribute: string;
        value: any;
    }
    interface AttributesChangedEventArg {
        attributes: {};
    }
    interface ModelChangedEventArg {
        model: Model;
    }
    class Model extends Ui.Component {
        attributes: {
            [key: string]: any;
        };
        defaultAttributes: {
            [key: string]: any;
        };
        private eventNameSpace;
        static eventTypes: {
            preprocess: string;
            changeOne: string;
            change: string;
            reset: string;
            all: string;
        };
        constructor(element: HTMLElement, id: string, attributes: {
            [key: string]: any;
        }, bindings?: Ui.ComponentBindings);
        set(attribute: string, value: any, options?: ModelSetOptions): void;
        getAttributes(): {
            [key: string]: any;
        };
        setMultiple(toSet: {
            [key: string]: any;
        }, options?: ModelSetOptions): void;
        setNewDefault(attribute: string, value: any, options?: ModelSetOptions): void;
        setDefault(attribute: string, options?: ModelSetOptions): void;
        get(attribute?: string): any;
        getDefault(attribute?: string): any;
        reset(): void;
        registerNewAttribute(attribute: string, defaultValue: any): void;
        getEventName(event: string): string;
        private attributesHasChangedEvent();
        private attributeHasChangedEvent(attr);
        private preprocessEvent(attributes);
        private modelWasResetEvent();
        private anyEvent();
        private createAttributeChangedArgument(attribute);
        private createAttributesChangedArgument();
        private createModelChangedArgument();
        private checkIfAttributeExists(attribute);
        private validateType(attribute, value);
        private parseToCorrectType(attribute, value);
        private checkIfAttributeChanged(attribute, newValue);
    }
}
declare module Coveo.Models {
    interface QueryStateAttributes {
        q: string;
        first: number;
        t: string;
        tg: string;
        sort: string;
        hd: string;
        hq: string;
    }
    interface QueryStateIncludedAttribute {
        title: string;
        included: string[];
    }
    interface QueryStateExcludedAttribute {
        title: string;
        excluded: string[];
    }
    class QueryStateModel extends Model {
        static ID: string;
        static defaultAttributes: QueryStateAttributes;
        static attributesEnum: {
            q: string;
            first: string;
            t: string;
            sort: string;
            hd: string;
            hq: string;
            tg: string;
        };
        static getFacetId(id: string, include?: boolean): string;
        static getFacetOperator(id: string): string;
        static getFacetLookupValue(id: string): string;
        constructor(element: HTMLElement, attributes?: QueryStateAttributes, bindings?: Ui.ComponentBindings);
        atLeastOneFacetIsActive(): boolean;
        set(attribute: string, value: any, options?: ModelSetOptions): void;
        private validate(attribute, value);
    }
    function setState(model: Model, args: any[]): any;
}
interface JQuery {
    coveo(method: 'state'): Coveo.Models.QueryStateModel;
    coveo(method: 'state', name: string): any;
    coveo(method: 'state', name: string, value: any, options?: Coveo.Models.ModelSetOptions): any;
    coveo(method: 'state', values: {}, options?: Coveo.Models.ModelSetOptions): any;
}
declare module Coveo.Models {
    class ComponentStateModel extends Model {
        static ID: string;
        constructor(element: HTMLElement, window_?: any);
        registerComponent(componentId: string, component: Ui.Component): void;
    }
}
declare module Coveo.Models {
    interface ComponentOptionsAttributes {
        resultLink: any;
    }
    class ComponentOptionsModel extends Model {
        static ID: string;
        static defaultAttributes: ComponentOptionsAttributes;
        static attributesEnum: {
            resultLink: string;
        };
        constructor(element: HTMLElement, attributes?: ComponentOptionsAttributes, window_?: any);
    }
}
declare module Coveo.Controllers {
    class HistoryController extends Ui.Component {
        _window: Window;
        model: Models.Model;
        queryController: Controllers.QueryController;
        static ID: string;
        private ignoreNextHashChange;
        private initialHashChange;
        private willUpdateHash;
        constructor(element: HTMLElement, _window?: Window, model?: Models.Model, queryController?: Controllers.QueryController);
        private handleHashChange();
        private updateHashFromModel();
        private updateModelFromHash();
        private getHashValue(value);
        setHashValues(values: {}): void;
    }
}
declare module Coveo {
    class LocalStorageUtils<T> {
        id: string;
        constructor(id: string);
        save(data: T): void;
        load(): T;
        remove(key?: string): void;
        private getLocalStorageKey();
    }
}
declare module Coveo.Controllers {
    class LocalStorageHistoryController extends Ui.Component {
        _window: Window;
        model: Models.Model;
        queryController: Controllers.QueryController;
        static ID: string;
        storage: LocalStorageUtils<{
            [key: string]: any;
        }>;
        constructor(element: HTMLElement, _window?: Window, model?: Models.Model, queryController?: Controllers.QueryController);
        private updateLocalStorageFromModel();
        private updateModelFromLocalStorage();
        setStorageValues(values: {
            [key: string]: any;
        }): void;
    }
}
declare module Coveo.Controllers {
    interface QueryOptions {
        ignoreWarningSearchEvent?: boolean;
        searchAsYouType?: boolean;
        beforeExecuteQuery?: () => void;
        closeModalBox?: boolean;
        cancel?: boolean;
        origin?: Ui.Component;
    }
    class QueryController extends Ui.Component {
        options: Ui.SearchInterfaceOptions;
        static ID: string;
        private currentPendingQuery;
        private lastQueryBuilder;
        private lastQueryHash;
        private lastQuery;
        private lastSearchUid;
        private firstQuery;
        private createdOneQueryBuilder;
        private showingExecutingQueryAnimation;
        private overrideEndpoint;
        private localStorage;
        constructor(element: HTMLElement, options: Ui.SearchInterfaceOptions);
        setEndpoint(endpoint: Rest.SearchEndpoint): void;
        getEndpoint(): Rest.SearchEndpointInterface;
        getLastQuery(): Rest.Query;
        getLastQueryHash(): string;
        private getLastSearchUid();
        private loadLastQueryHash();
        saveLastQuery(): void;
        executeQuery(options?: QueryOptions): JQueryDeferred<Rest.QueryResults>;
        deferExecuteQuery(options?: QueryOptions): void;
        ensureCreatedQueryBuilder(): void;
        fetchMore(count: number): JQueryDeferred<Rest.QueryResults>;
        isStandaloneSearchBox(): boolean;
        cancelQuery(): void;
        private continueLastQueryBuilder(queryBuilder, count);
        private createQueryBuilder(options);
        private cancelAnyCurrentPendingQuery();
        private showExecutingQueryAnimation();
        private hideExecutingQueryAnimation();
        private keepLastSearchUid(query, queryResults);
        private queryHash(query, queryResults?);
        private getCallOptions();
        private newQueryEvent(args);
        private buildingQueryEvent(args);
        private doneBuildingQueryEvent(args);
        private duringQueryEvent(args);
        private querySuccessEvent(args);
        private fetchMoreSuccessEvent(args);
        private deferredQuerySuccessEvent(args);
        private queryError(args);
        private preprocessResultsEvent(args);
        private noResultEvent(args);
    }
}
interface JQuery {
    coveo(method: 'executeQuery'): any;
}
declare module Coveo.Events {
    interface NewQueryEventArgs {
        deferred: JQueryDeferred<any>;
        searchAsYouType: boolean;
        cancel: boolean;
        origin?: Ui.Component;
    }
    interface BuildingQueryEventArgs {
        queryBuilder: Ui.QueryBuilder;
        searchAsYouType: boolean;
        cancel: boolean;
    }
    interface DoneBuildingQueryEventArgs {
        queryBuilder: Ui.QueryBuilder;
        searchAsYouType: boolean;
        cancel: boolean;
    }
    interface DuringQueryEventArgs {
        queryBuilder: Ui.QueryBuilder;
        query: Rest.Query;
        deferred: JQueryDeferred<any>;
        searchAsYouType: boolean;
    }
    interface QuerySuccessEventArgs {
        query: Rest.Query;
        results: Rest.QueryResults;
        queryBuilder: Ui.QueryBuilder;
        searchAsYouType: boolean;
    }
    interface FetchMoreSuccessEventArgs {
        query: Rest.Query;
        results: Rest.QueryResults;
        queryBuilder: Ui.QueryBuilder;
        searchAsYouType: boolean;
    }
    interface QueryErrorEventArgs {
        queryBuilder: Ui.QueryBuilder;
        endpoint: Rest.SearchEndpointInterface;
        query: Rest.Query;
        error: Rest.EndpointError;
        searchAsYouType: boolean;
    }
    interface PreprocessResultsEventArgs {
        queryBuilder: Ui.QueryBuilder;
        query: Rest.Query;
        results: Rest.QueryResults;
        searchAsYouType: boolean;
    }
    interface NoResultsEventArgs {
        queryBuilder: Ui.QueryBuilder;
        query: Rest.Query;
        results: Rest.QueryResults;
        searchAsYouType: boolean;
        retryTheQuery: boolean;
    }
    interface BuildingCallOptionsEventArgs {
        options: Rest.EndpointCallOptions;
    }
    class QueryEvents {
        static newQuery: string;
        static buildingQuery: string;
        static doneBuildingQuery: string;
        static duringQuery: string;
        static duringFetchMoreQuery: string;
        static querySuccess: string;
        static fetchMoreSuccess: string;
        static deferredQuerySuccess: string;
        static queryError: string;
        static preprocessResults: string;
        static noResults: string;
        static buildingCallOptions: string;
    }
}
interface JQuery {
    on(events: string, handler: (e: JQueryEventObject, args: {}) => any): any;
    on(events: 'newQuery', handler: (e: JQueryEventObject, args: Coveo.Events.NewQueryEventArgs) => any): any;
    on(events: 'buildingQuery', handler: (e: JQueryEventObject, args: Coveo.Events.BuildingQueryEventArgs) => any): any;
    on(events: 'doneBuildingQuery', handler: (e: JQueryEventObject, args: Coveo.Events.DoneBuildingQueryEventArgs) => any): any;
    on(events: 'duringQuery', handler: (e: JQueryEventObject, args: Coveo.Events.DuringQueryEventArgs) => any): any;
    on(events: 'duringFetchMoreQuery', handler: (e: JQueryEventObject, args: Coveo.Events.DuringQueryEventArgs) => any): any;
    on(events: 'querySuccess', handler: (e: JQueryEventObject, args: Coveo.Events.QuerySuccessEventArgs) => any): any;
    on(events: 'fetchMoreSuccess', handler: (e: JQueryEventObject, args: Coveo.Events.FetchMoreSuccessEventArgs) => any): any;
    on(events: 'queryError', handler: (e: JQueryEventObject, args: Coveo.Events.QueryErrorEventArgs) => any): any;
    on(events: 'preprocessResults', handler: (e: JQueryEventObject, args: Coveo.Events.PreprocessResultsEventArgs) => any): any;
    on(events: 'noResults', handler: (e: JQueryEventObject, args: Coveo.Events.NoResultsEventArgs) => any): any;
    on(events: 'buildingCallOptions', handler: (e: JQueryEventObject, args: Coveo.Events.BuildingCallOptionsEventArgs) => any): any;
}
declare module Coveo.Events {
    interface BeforeInitializationEventArgs {
    }
    interface AfterInitializationEventArgs {
    }
    class InitializationEvents {
        static beforeInitialization: string;
        static afterComponentsInitialization: string;
        static restoreHistoryState: string;
        static afterInitialization: string;
    }
}
declare module Coveo.Events {
    interface DisplayedNewResultEventArgs {
        result: Rest.QueryResult;
        item: HTMLElement;
    }
    interface DisplayedNewResultsEventArgs {
    }
    interface OpenQuickViewEventArgs {
    }
    class ResultListEvents {
        static newResultsDisplayed: string;
        static newResultDisplayed: string;
        static openQuickView: string;
    }
}
declare module Coveo.Events {
    interface CompletedImageResultsLayoutEventArgs {
    }
    class ImageResultListEvents {
        static imageResultsLayoutComplete: string;
    }
}
declare module Coveo.Events {
    interface EnterOnSearchBoxEventArgs {
        expression: string;
    }
    interface QuickViewLoadedEventArgs {
        duration: number;
    }
    interface OpenQuickViewEventArgs {
        termsToHighlight: Array<string>;
    }
    class UserActionEvents {
        static enterOnSearchBox: string;
        static quickViewLoaded: string;
        static openQuickView: string;
    }
}
declare module Coveo.Events {
    interface SavePreferencesEventArgs {
    }
    class PreferencesPanelEvents {
        static savePreferences: string;
        static exitPreferencesWithoutSave: string;
    }
}
declare module Coveo.Ui {
    interface SearchInterfaceOptions {
        searchPageUri?: string;
        enableHistory?: boolean;
        useLocalStorageForHistory?: boolean;
        resultsPerPage?: number;
        excerptLength?: number;
        hiddenExpression?: string;
        filterField?: string;
        hideUntilFirstQuery?: boolean;
        firstLoadingAnimation?: HTMLElement;
        autoTriggerQuery?: boolean;
        initOptions?: any;
        endpoint?: Rest.SearchEndpoint;
        timezone?: string;
        enableDebugInfo?: boolean;
        originalOptionsObject?: any;
        enableCollaborativeRating?: boolean;
        enableDuplicateFiltering?: boolean;
        pipeline?: string;
    }
    class SearchInterface extends Component {
        element: HTMLElement;
        options: SearchInterfaceOptions;
        analyticsOptions: any;
        static ID: string;
        static options: SearchInterfaceOptions;
        private attachedComponents;
        constructor(element: HTMLElement, options?: SearchInterfaceOptions, analyticsOptions?: any, _window?: Window);
        _initializeAnalytics(): AnalyticsClient;
        private setupDebugInfo();
        private showAndHideFirstQueryAnimation();
        private displayFirstQueryWaitAnimation();
        private hideFirstQueryWaitAnimation();
        private handlePreprocessQueryStateModel(args);
        private getTabGroupId(tabGroupId);
        private getTabId(tabGroupId, tabId);
        private getSort(tabId, sortId);
        private handleBuildingQuery(e, data);
        attachComponent(type: string, component: Component): void;
        detachComponent(type: string, component: Component): void;
        components<T>(type: string): T[];
    }
}
declare module Coveo.Ui {
    interface StandaloneSearchInterfaceOptions extends SearchInterfaceOptions {
        redirectIfEmpty?: boolean;
    }
    class StandaloneSearchInterface extends SearchInterface {
        element: HTMLElement;
        options: StandaloneSearchInterfaceOptions;
        analyticsOptions: any;
        static ID: string;
        static options: StandaloneSearchInterfaceOptions;
        constructor(element: HTMLElement, options?: StandaloneSearchInterfaceOptions, analyticsOptions?: any, _window?: Window);
        handleRedirect(e: JQueryEventObject, data: Events.NewQueryEventArgs): void;
        redirectToSearchPage(searchPage: string): void;
        private searchBoxIsEmpty();
    }
}
declare module Coveo.Events {
    interface BeforeRedirectEventArgs {
        searchPageUri: string;
        cancel: boolean;
    }
    class StandaloneSearchInterfaceEvents {
        static beforeRedirect: string;
    }
}
declare module Coveo.Ui {
    interface AggregateOptions {
        field?: string;
        operation?: string;
        format?: string;
    }
    class Aggregate extends Component {
        element: HTMLElement;
        options: AggregateOptions;
        static ID: string;
        static options: AggregateOptions;
        private index;
        constructor(element: HTMLElement, options?: AggregateOptions, bindings?: ComponentBindings);
        private handleBuildingQuery(e, args);
        private handleQuerySuccess(e, args);
    }
}
declare module Coveo.Rest {
    interface AnalyticsOptions {
        token: string;
        serviceUrl: string;
    }
    class AnalyticsEndpoint {
        options: AnalyticsOptions;
        logger: Logger;
        static DEFAULT_ANALYTICS_URI: string;
        static DEFAULT_ANALYTICS_VERSION: string;
        static CUSTOM_ANALYTICS_VERSION: any;
        visitId: string;
        static pendingRequest: JQueryPromise<any>;
        constructor(options: AnalyticsOptions);
        getVisitId(params: Rest.GenericParam): JQueryPromise<string>;
        sendSearchEvents(searchEvents: Rest.SearchEvent[]): void;
        sendDocumentViewEvent(documentViewEvent: Rest.ClickEvent): void;
        sendCustomEvent(customEvent: Rest.CustomEvent): void;
        getTopQueries(params: Rest.TopQueries): JQueryPromise<string[]>;
        private sendEventToApi<D, R>(data, path, paramName);
        private appendUrlParamSign(url);
        private getFromService<T>(url, params);
        private buildQueryStringFromParam(params);
    }
}
declare module Coveo.Ui {
    class PendingSearchEvent {
        _root: HTMLElement;
        _endpoint: Rest.AnalyticsEndpoint;
        _templateSearchEvent: Rest.SearchEvent;
        _sendToCloud: boolean;
        private handler;
        private searchDeferred;
        private searchEvents;
        private results;
        _cancelled: boolean;
        _finished: boolean;
        constructor(_root: HTMLElement, _endpoint: Rest.AnalyticsEndpoint, _templateSearchEvent: Rest.SearchEvent, _sendToCloud: boolean);
        getEventCause(): string;
        getEventMeta(): {
            [key: string]: string;
        };
        cancel(): void;
        _handleDuringQuery(e: JQueryEventObject, args: Events.DuringQueryEventArgs): void;
        _stopRecording(): void;
        private flush();
        private fillSearchEvent(searchEvent, searchInterface, query, queryResults);
    }
}
declare module Coveo.Ui {
    class PendingSearchAsYouTypeSearchEvent extends PendingSearchEvent {
        _root: HTMLElement;
        _endpoint: Rest.AnalyticsEndpoint;
        _templateSearchEvent: Rest.SearchEvent;
        _sendToCloud: any;
        delayBeforeSending: number;
        private beforeUnloadHandler;
        private armBatchDelay;
        private toSendRightNow;
        constructor(_root: HTMLElement, _endpoint: Rest.AnalyticsEndpoint, _templateSearchEvent: Rest.SearchEvent, _sendToCloud: any);
        _handleDuringQuery(e: JQueryEventObject, args: Events.DuringQueryEventArgs): void;
        sendRightNow(): void;
        _stopRecording(): void;
        private onWindowUnload();
        private isCancelledOrFinished();
    }
}
declare module Coveo.Events {
    interface AnalyticsSearchEventsArgs {
        searchEvents: Rest.APISearchEvent[];
    }
    interface AnalyticsDocumentViewEventArgs {
        documentViewEvent: Rest.APIDocumentViewEvent;
    }
    interface AnalyticsCustomEventArgs {
        customEvent: Rest.APICustomEvent;
    }
    interface ChangeAnalyticsCustomDataEventArgs extends ChangeableAnalyticsDataObject {
        type: string;
        metaObject: ChangeableAnalyticsMetaObject;
    }
    interface ChangeableAnalyticsMetaObject {
        [name: string]: string;
    }
    interface ChangeableAnalyticsDataObject {
        originLevel1: string;
        originLevel2: string;
        originLevel3: string;
        language: string;
    }
    class AnalyticsEvents {
        static searchEvent: string;
        static documentViewEvent: string;
        static customEvent: string;
        static changeAnalyticsCustomData: string;
    }
}
declare module Coveo.Rest {
    class APIAnalyticsBuilder {
        static convertSearchEventToAPI(searchEvent: SearchEvent): APISearchEvent;
        static convertDocumentViewToAPI(documentView: ClickEvent): APIDocumentViewEvent;
        static convertCustomEventToAPI(customEvent: CustomEvent): APICustomEvent;
    }
}
declare module Coveo.Ui {
    class LiveAnalyticsClient implements AnalyticsClient {
        endpoint: Rest.AnalyticsEndpoint;
        rootElement: HTMLElement;
        userId: string;
        userDisplayName: string;
        anonymous: boolean;
        splitTestRunName: string;
        splitTestRunVersion: string;
        originLevel1: string;
        sendToCloud: boolean;
        isContextual: boolean;
        private language;
        private device;
        private mobile;
        private pendingSearchEvent;
        private pendingSearchAsYouTypeSearchEvent;
        private logger;
        constructor(endpoint: Rest.AnalyticsEndpoint, rootElement: HTMLElement, userId: string, userDisplayName: string, anonymous: boolean, splitTestRunName: string, splitTestRunVersion: string, originLevel1: string, sendToCloud: boolean);
        isActivated(): boolean;
        getCurrentVisitId(): JQueryPromise<string>;
        getCurrentEventCause(): string;
        getCurrentEventMeta(): {
            [key: string]: string;
        };
        logSearchEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        logSearchAsYouType<TMeta>(actionCause: AnalyticsActionCause, meta?: TMeta): void;
        logClickEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, result: Rest.QueryResult, element: HTMLElement): void;
        logCustomEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, element: HTMLElement): void;
        getTopQueries(params: Rest.TopQueries): JQueryPromise<string[]>;
        sendAllPendingEvents(): void;
        warnAboutSearchEvent(): void;
        private pushCustomEvent(actionCause, metaObject, element?);
        private pushSearchEvent(actionCause, metaObject);
        private checkToSendAnyPendingSearchAsYouType(actionCause);
        private pushSearchAsYouTypeEvent(actionCause, metaObject);
        private pushClickEvent(actionCause, metaObject, result, element);
        private buildAnalyticsEvent(actionCause, metaObject);
        private buildSearchEvent(actionCause, metaObject);
        private buildClickEvent(actionCause, metaObject, result, element);
        private buildCustomEvent(actionCause, metaObject, element);
        private buildMetaObject<TMeta>(meta);
        private cancelAnyPendingSearchAsYouTypeEvent();
        private resolveActiveTabFromElement(element);
        private resolveQueryStateModel(rootElement);
        private eventIsNotRelatedToSearchBox(event);
        private triggerChangeAnalyticsCustomData(type, metaObject, event);
        private merge<T>(first, second);
    }
}
declare module Coveo.Ui {
    class MultiAnalyticsClient implements AnalyticsClient {
        private analyticsClients;
        isContextual: boolean;
        constructor(analyticsClients?: AnalyticsClient[]);
        isActivated(): boolean;
        getCurrentEventCause(): string;
        getCurrentEventMeta(): {
            [key: string]: any;
        };
        logSearchEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        logSearchAsYouType<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        logClickEvent<TMeta>(actionCause: AnalyticsActionCause, meta?: TMeta, result?: Rest.QueryResult, element?: HTMLElement): void;
        logCustomEvent<TMeta>(actionCause: AnalyticsActionCause, meta?: TMeta, element?: HTMLElement): void;
        getTopQueries(params: Rest.TopQueries): JQueryPromise<string[]>;
        getCurrentVisitId(): JQueryPromise<string>;
        sendAllPendingEvents(): void;
        warnAboutSearchEvent(): void;
        private mergeTopQueries(values, pageSize);
    }
}
declare module Coveo {
}
declare module Coveo.Ui {
    interface AnalyticsOptions {
        user?: string;
        userDisplayName?: string;
        token?: string;
        endpoint?: string;
        anonymous?: boolean;
        searchHub?: string;
        splitTestRunName?: string;
        splitTestRunVersion?: string;
        sendToCloud?: boolean;
    }
    class Analytics extends Component {
        element: HTMLElement;
        options: AnalyticsOptions;
        static ID: string;
        static options: AnalyticsOptions;
        client: AnalyticsClient;
        constructor(element: HTMLElement, options?: AnalyticsOptions, bindings?: ComponentBindings);
        static create(element: HTMLElement, options: AnalyticsOptions): AnalyticsClient;
        private static getClient(element, options);
        protected initializeAnalyticsEndpoint(): Rest.AnalyticsEndpoint;
        private initializeAnalyticsClient();
        private handleBuildingQuery(e, data);
        private handleQueryError(e, data);
    }
}
declare module Coveo.Ui {
    interface Menu extends Component {
        getCssClass: () => string;
        getMenuItems: () => MenuItem[];
    }
    interface MenuItem {
        text: string;
        onOpen: () => void;
        onClose: () => void;
    }
}
declare module Coveo.Ui {
    interface AuthenticationProviderOptions {
        name?: string;
        caption?: string;
        useIFrame?: boolean;
        showIFrame?: boolean;
    }
    class AuthenticationProvider extends Component implements Menu {
        element: HTMLElement;
        options: AuthenticationProviderOptions;
        static ID: string;
        static options: AuthenticationProviderOptions;
        constructor(element: HTMLElement, options?: AuthenticationProviderOptions, bindings?: ComponentBindings);
        getCssClass(): string;
        getMenuItems(): MenuItem[];
        private handleBuildingCallOptions(e, args);
        private handleQueryError(e, args);
        private authenticateWithProvider();
        private redirectToAuthenticationProvider();
        private useIFrameToAuthenticate();
        private createPopupForWaitMessage(iframe);
        private createPopupForVisibleIFrame(iframe);
        private getAuthenticationProviderUriForRedirect();
        private getAuthenticationProviderUriForIFrame();
    }
}
declare module Coveo.Ui {
    interface BreadcrumbItem {
        element: HTMLElement;
    }
    interface BreadcrumbOptions {
    }
}
declare module Coveo.Events {
    interface PopulateBreadcrumbEventArgs {
        breadcrumbs: Ui.BreadcrumbItem[];
    }
    interface ClearBreadcrumbEventArgs {
    }
    class BreadcrumbEvents {
        static populateBreadcrumb: string;
        static clearBreadcrumb: string;
        static redrawBreadcrumb: string;
    }
}
declare module Coveo.Ui {
    class Breadcrumb extends Component {
        element: HTMLElement;
        options: BreadcrumbOptions;
        static ID: string;
        static options: BreadcrumbOptions;
        private lastBreadcrumbs;
        constructor(element: HTMLElement, options?: BreadcrumbOptions, bindings?: ComponentBindings);
        private drawBreadcrumb(breadcrumbs);
        private redrawBreadcrumb();
        private handleDeferredQuerySuccess();
        private handleAfterInitialization();
        private getBreadcrumbs();
        private clearBreadcrumbs();
    }
}
declare module Coveo.Ui {
    class SortCriteria {
        sort: string;
        direction: string;
        private static validSorts;
        private static sortsNeedingDirection;
        private static validDirections;
        constructor(sort: string, direction?: string);
        putInQueryBuilder(queryBuilder: QueryBuilder): void;
        getValueFromResult(result: Rest.QueryResult): any;
        toString(): string;
        equals(criteria: SortCriteria): boolean;
        static parse(criteria: string): SortCriteria;
        private static sortIsField(criteria);
        private static sortNeedsDirection(sort);
    }
}
declare module Coveo.Ui {
    interface TabOptions {
        expression?: string;
        constant?: boolean;
        uniqueId?: string;
        icon?: string;
        caption?: string;
        sort?: string;
        endpoint?: Rest.SearchEndpoint;
        enableDuplicateFiltering?: boolean;
        pipeline?: string;
    }
    class Tab extends Component {
        element: HTMLElement;
        options: TabOptions;
        static ID: string;
        static options: TabOptions;
        iconTemplate: (...data: any[]) => string;
        tabTemplate: (...data: any[]) => string;
        private isFirstQuery;
        constructor(element: HTMLElement, options?: TabOptions, bindings?: ComponentBindings);
        select(): void;
        private handleClick(e);
        private render();
        private handleBuildingQuery(e, data);
        private handleQueryStateChanged(e, data);
        private isSelected();
        private showAndHideAppropriateElements();
        isElementIncludedInTab(element: HTMLElement): boolean;
        private splitListOfTabs(value);
        private toggleAllComponentsUnder(element, enable);
        enable(): void;
        disable(): void;
    }
}
declare module Coveo.Ui {
    interface CurrentTabOptions {
        tabSectionToOpen: string;
    }
    class CurrentTab extends Component {
        element: HTMLElement;
        options: CurrentTabOptions;
        static ID: string;
        static options: CurrentTabOptions;
        constructor(element: HTMLElement, options?: CurrentTabOptions, bindings?: ComponentBindings);
        private handleTabChange();
    }
}
declare module Coveo.Ui {
    interface DebugOptions {
        enableDebug?: boolean;
    }
    class Debug extends Component {
        element: HTMLElement;
        options: DebugOptions;
        static ID: string;
        static options: DebugOptions;
        private results;
        private query;
        constructor(element: HTMLElement, options?: DebugOptions, bindings?: ComponentBindings);
        private handleNewResultsDisplayed();
        private handleRootQuerySuccess(e, args);
        private handleBuildingQuery(e, args);
        private handleDuringQuery(e, args);
        private handleQuerySuccess(e, args);
        private handleClick(e);
        private handleResultDoubleClick(e);
        private handleSearch(s);
        private buildResultInfo(result, query);
        private buildQueryDurations();
        private buildQueryBars(colors);
        private buildPropertyDebug(result);
        private buildFieldDebug(result);
        private buildRankingInfo(result);
        private buildQueryInfo(query);
        private buildObjectInfo(obj, parentContent, typeBuilding, constructedObjects?);
        private buildSearchBox();
        private buildQueryDebug(debugCheck);
        private buildCollapsable(container);
        private formatValue(value);
        private formatQueryDuration(durationInMillis);
    }
}
declare module Coveo.Ui {
    interface DidYouMeanOptions {
        enableAutoCorrection?: boolean;
    }
    class DidYouMean extends Component {
        element: HTMLElement;
        options: DidYouMeanOptions;
        bindings: ComponentBindings;
        static ID: string;
        static options: DidYouMeanOptions;
        private hideNext;
        constructor(element: HTMLElement, options?: DidYouMeanOptions, bindings?: ComponentBindings);
        private handleNewQuery();
        private handlePrepareQueryBuilder(e, data);
        private handleNoResults(e, data);
        private handleProcessNewQueryResults(e, data);
        private buildCorrectedSentence(correction);
        private doQueryWithCorrectedTerm(correctedTerm);
    }
}
declare module Coveo {
    interface StatusBarPhonegapPlugin {
        overlaysWebView(toggle: boolean): void;
        styleDefault(): void;
        styleLightContent(): void;
        styleBlackTranslucent(): void;
        styleBlackOpaque(): void;
        backgroundColorByName(name: string): void;
        backgroundColorByHexString(hexColor: string): void;
        hide(): void;
        show(): void;
    }
    interface EmailComposerPhonegapPlugin_0_8_1 {
        open: (opener: EmailComposerPhonegapPlugin_0_8_1_opener_object) => void;
    }
    interface EmailComposerPhonegapPlugin_0_8_1_opener_object {
        to?: string[];
        cc?: string[];
        bcc?: string[];
        attachments?: string[];
        subject?: string;
        body?: string;
        isHtml?: boolean;
    }
    interface NetworkNetworkInformationPhonegapPluginState_0_2_7 {
        UNKNOWN: number;
        ETHERNET: number;
        WIFI: number;
        CELL_2G: number;
        CELL_3G: number;
        CELL_4G: number;
        CELL: number;
        NONE: number;
    }
    interface NetworkInformationPhonegapPlugin_0_2_7 {
        type: any;
    }
    interface PhonegapIonicKeyboard_1_0_3 {
        hideKeyboardAccessoryBar(boolean: any): void;
        close(): void;
        show(): void;
        disableScroll(boolean: any): void;
    }
}
interface Window {
    Connection: Coveo.NetworkNetworkInformationPhonegapPluginState_0_2_7;
    plugins: any;
    plugin: {
        email?: Coveo.EmailComposerPhonegapPlugin_0_8_1;
    };
    cordova: {
        plugins: {
            Keyboard?: Coveo.PhonegapIonicKeyboard_1_0_3;
        };
    };
}
declare module Coveo.Ui {
    interface ErrorReportOptions {
        popUp: boolean;
        showDetailedError: boolean;
    }
    class ErrorReport extends Component {
        element: HTMLElement;
        options: ErrorReportOptions;
        static ID: string;
        static options: ErrorReportOptions;
        private message;
        private closePopup;
        constructor(element: HTMLElement, options?: ErrorReportOptions, bindings?: ComponentBindings);
        private setErrorTitle();
        private buildPrevious();
        private buildClear();
        private buildRetry();
        private handleNewQuery();
        private handleQueryError(e, data);
    }
}
declare module Coveo.Ui {
    class Excerpt extends Component {
        element: HTMLElement;
        options: any;
        bindings: ComponentBindings;
        result: Rest.QueryResult;
        static ID: string;
        constructor(element: HTMLElement, options?: any, bindings?: ComponentBindings, result?: Rest.QueryResult);
    }
}
declare module Coveo.Ui {
    class FacetValue {
        value: string;
        lookupValue: string;
        occurrences: number;
        computedField: number;
        delta: number;
        score: number;
        selected: boolean;
        excluded: boolean;
        waitingForDelta: boolean;
        reset(): void;
        updateCountsFromNewValue(newValue: FacetValue): void;
        cloneWithZeroOccurrences(): FacetValue;
        cloneWithDelta(count: number, delta: number): FacetValue;
        getFormattedCount(): string;
        getFormattedComputedField(format: string): any;
        static create(value: any): FacetValue;
        static createFromValue(value: string): FacetValue;
        static createFromGroupByValue(groupByValue: Rest.GroupByValue): FacetValue;
        static createFromFieldValue(fieldValue: Rest.FieldValue): FacetValue;
    }
    class FacetValues {
        private values;
        constructor(groupByResult?: Rest.GroupByResult);
        add(facetValue: FacetValue): void;
        remove(value: string): void;
        size(): number;
        isEmpty(): boolean;
        at(index: number): FacetValue;
        get(value: string): FacetValue;
        contains(value: string): boolean;
        getAll(): FacetValue[];
        getSelected(): FacetValue[];
        getExcluded(): FacetValue[];
        hasSelectedOrExcludedValues(): boolean;
        reset(): void;
        importActiveValuesFromOtherList(other: FacetValues): void;
        updateCountsFromNewValues(newValues: FacetValues): void;
        updateDeltaWithFilteredFacetValues(filtered: FacetValues): void;
        mergeWithUnfilteredFacetValues(unfiltered: FacetValues): void;
        sortValuesDependingOnStatus(excludeLastIndex?: number): void;
    }
}
declare module Coveo.Ui.FileTypes {
    interface FileTypeInfo {
        icon: string;
        caption: string;
    }
    function get(result: Rest.QueryResult): FileTypeInfo;
    function getObjectType(objecttype: string): FileTypeInfo;
    function getSysFileType(sysfiletype: string): FileTypeInfo;
    function getSysFileTypeCaptions(): {};
}
declare module Coveo.Ui.FacetUtils {
    function getRegexToUseForFacetSearch(value: string, ignoreAccent: boolean): RegExp;
    function getValuesToUseForSearchInFacet(original: string, facet: Facet): string[];
    function buildFacetSearchPattern(values: string[]): string;
    function needAnotherFacetSearch(currentSearchLength: number, newSearchLength: number, oldSearchLength: number, desiredSearchLength: number): boolean;
    function addNoStateCssClassToFacetValues(facet: Facet, container: JQuery): void;
    function tryToGetTranslatedCaption(field: string, value: string): string;
    function clipCaptionsToAvoidOverflowingTheirContainer(facet: Facet, forceClip?: boolean): void;
}
declare module Coveo.Controllers {
    class FacetQueryController {
        facet: Ui.Facet;
        private expressionToUseForFacetSearch;
        private constantExpressionToUseForFacetSearch;
        lastGroupByRequestIndex: number;
        constructor(facet: Ui.Facet);
        prepareForNewQuery(): void;
        computeOurFilterExpression(): string;
        putGroupByIntoQueryBuilder(queryBuilder: Ui.QueryBuilder): void;
        searchInFacet(numberOfValuesToRequest: number, valuesToSearch: string[], ignoreAccents?: boolean): JQueryDeferred<Rest.FieldValue[]>;
        searchInFacetWithLookupField(numberOfValuesToRequest: number, valuesToSearch: string[], ignoreAccents?: boolean): JQueryDeferred<Rest.QueryResults>;
        recursiveFacetSearch(valueToCheckAgainst: string, numberOfValuesToRequest: number, oldLength?: number, returnDeferred?: JQueryDeferred<Rest.FieldValue[]>): JQueryDeferred<Rest.FieldValue[]>;
        fetchMore(): JQueryDeferred<Rest.QueryResults>;
        searchInFacetToUpdateDelta(facetValues: Ui.FacetValue[]): JQueryDeferred<Rest.QueryResults>;
        private createSearchDeferer(query);
        private createListFieldDeferer(request);
        private buildSearchQueryForFacetWithLookupField(valuesToSearch);
        private buildListFieldValuesRequest(numberOfResult, pattern?, ignoreAccents?, queryOverride?);
        private buildGroupByQuery(allowedValues?);
        _createGroupByAllowedValues(): string[];
        private getAllowedValuesFromSelected();
        private createGroupByQueryOverride(queryBuilder);
        _createBasicGroupByRequest(allowedValues?: string[], addComputedField?: boolean): Rest.GroupByRequest;
        private checkForFacetSearchValuesToRemove(fieldValues, valueToCheckAgainst);
        private static makeFacetSearchPattern(values);
    }
}
declare module Coveo {
    enum KEYBOARD {
        BACKSPACE = 8,
        TAB = 9,
        ENTER = 13,
        SHIFT = 16,
        CTRL = 17,
        ALT = 18,
        ESCAPE = 27,
        SPACEBAR = 32,
        PAGE_UP = 33,
        PAGE_DOWN = 34,
        HOME = 36,
        LEFT_ARROW = 37,
        UP_ARROW = 38,
        RIGHT_ARROW = 39,
        DOWN_ARROW = 40,
        INSERT = 45,
        DELETE = 46,
    }
    class KeyboardUtils {
        static keysEqual(key: any, code: any): boolean;
        static isAllowedKeyForOmniBox(e: KeyboardEvent): boolean;
        static isAllowedKeyForSearchAsYouType(e: KeyboardEvent): boolean;
        static isDeleteOrBackspace(e: KeyboardEvent): boolean;
        static isArrowKeyPushed(keycode: number): boolean;
        static isNumberKeyPushed(keycode: number): boolean;
        static isLetterKeyPushed(keycode: number): boolean;
    }
}
declare module Coveo.Ui {
    class FacetSearch {
        facet: Facet;
        facetSearchValuesListKlass: FacetSearchValuesListKlass;
        private search;
        private magnifier;
        private wait;
        private clearIcon;
        private clear;
        private middle;
        private input;
        private searchResults;
        private facetSearchTimeout;
        private showingFacetSearchWaitAnimation;
        private facetSearchDeferred;
        private searchTemplate;
        private magnifierTemplate;
        private waitTemplate;
        private clearIconTemplate;
        private clearTemplate;
        private middleTemplate;
        private inputTemplate;
        private searchResultsTemplate;
        constructor(facet: Facet, facetSearchValuesListKlass: FacetSearchValuesListKlass);
        build(): JQuery;
        positionSearchResults(): void;
        completelyDismissSearch(): void;
        private buildBaseSearch();
        private buildSearchMobile();
        private handleFacetSearchKeyUp(event);
        private handleFacetSearchFocus(e);
        private handleFacetSearchBlur();
        private handleFacetSearchClear();
        private showOrHideClearElement(isEmpty);
        private handleKeyboardNavigation(event, isEmpty);
        private keyboardNavigationEnterPressed(event, isEmpty);
        private keyboardNavigationDeletePressed(event);
        private triggerNewFacetSearch(numberOfValuesInFacetSearch?, oldLength?);
        private startNewSearchTimeout();
        private cancelAnyPendingSearchOperation();
        _processNewFacetSearchResults(fieldValues: Rest.FieldValue[]): void;
        private rebuildSearchResults(fieldValues);
        private showSearchResultsElement();
        private hideSearchResultsElement();
        private highlightCurrentQueryWithinSearchResults();
        private makeFirstSearchResultTheCurrentOne();
        private makeCurrentResult(result);
        private moveCurrentResultDown();
        private moveCurrentResultUp();
        private getSelectables(target?);
        private performSelectActionOnCurrentSearchResult();
        private performExcludeActionOnCurrentSearchResult();
        private getValueInInputForFacetSearch();
        private selectAllValuesMatchingSearch();
        private showFacetSearchWaitingAnimation();
        private hideFacetSearchWaitingAnimation();
    }
}
declare module Coveo.Ui {
    interface FacetSortDescription {
        label: string;
        directionToggle: boolean;
        description: string;
        name: string;
        relatedSort?: string;
    }
    class FacetSort {
        facet: Facet;
        static availableSorts: {
            [name: string]: FacetSortDescription;
        };
        enabledSorts: FacetSortDescription[];
        activeSort: FacetSortDescription;
        customSortDirection: string;
        constructor(sorts: string[], facet: Facet);
        private removeEnabledSortsBasedOnFacetType();
        reorderValues(facetValues: FacetValue[]): FacetValue[];
        private reorderValuesWithCustomOrder(facetValues);
    }
}
declare module Coveo.Ui {
    interface FacetState {
        included: string[];
        excluded: string[];
        operator: string;
    }
    class FacetSettings extends FacetSort {
        facet: Facet;
        loadedFromSettings: {
            [attribute: string]: any;
        };
        private facetSettingsIconTemplate;
        private facetSettingsButtonTemplate;
        private facetSettingsPopupTemplate;
        private facetSettingsSectionTemplate;
        private facetSettingsSectionIconTemplate;
        private facetSettingsItemsTemplate;
        private facetSettingsItemTemplate;
        private facetStateLocalStorage;
        private includedStateAttribute;
        private excludedStateAttribute;
        private operatorStateAttribute;
        private settingsPopup;
        private settingsIcon;
        private settingsButton;
        private directionSection;
        private saveStateSection;
        private clearStateSection;
        private hideSection;
        private showSection;
        private customSortDirectionChange;
        private enabledSortsIgnoreRenderBecauseOfPairs;
        constructor(sorts: string[], facet: Facet);
        build(): JQuery;
        loadSavedState(): void;
        private buildSortSection();
        private buildSortSectionItems();
        private closePopupAndUpdateSort();
        private closePopup();
        private buildDirectionSection();
        private buildSaveStateSection();
        private buildClearStateSection();
        private buildHideSection();
        private buildShowSection();
        private handleClickSettingsButtons(event, sortSection?);
        private handleClickSortButton(e, enabledSort);
        private handleDirectionClick(e, direction);
        private handleSaveStateClick(e);
        private handleClearStateClick(e);
        private handleMouseEventOnButton(sortSection);
        private activateDirectionSection();
        private disableDirectionSection();
        private getItems(section);
        private unselectSection(section);
        private selectItem(item);
        private unselectItem(item);
        private getPopupAlignment();
        private filterDuplicateForRendering();
        private hasDuplicate(first, second);
    }
}
declare module Coveo.Ui {
    class FacetValuesList {
        facet: Facet;
        facetValueElementKlass: FacetValueElementKlass;
        private valueList;
        private valueContainer;
        constructor(facet: Facet, facetValueElementKlass: FacetValueElementKlass);
        build(): JQuery;
        get(value: FacetValue): ValueElement;
        get(value: string): ValueElement;
        select(value: FacetValue): ValueElement;
        select(value: string): ValueElement;
        unselect(value: FacetValue): ValueElement;
        unselect(value: string): ValueElement;
        exclude(value: FacetValue): ValueElement;
        exclude(value: string): ValueElement;
        unExclude(value: FacetValue): ValueElement;
        unExclude(value: string): ValueElement;
        toggleSelect(value: FacetValue): ValueElement;
        toggleSelect(value: string): ValueElement;
        toggleExclude(value: FacetValue): ValueElement;
        toggleExclude(value: string): ValueElement;
        rebuild(numberOfValues: number): void;
        _getValuesToBuildWith(): FacetValue[];
        private facetValueShouldBeRemoved(facetValue);
        private ensureFacetValueIsInList(value);
        private addNoStateCssClassToFacetValues();
    }
}
declare module Coveo.Ui {
    interface ValueElementKlass {
        new (facet: Facet, facetValue: FacetValue): ValueElement;
    }
    interface FacetValueElementKlass {
        new (facet: Facet, facetValue: FacetValue, displayNextTime?: boolean): FacetValueElement;
    }
    interface ValueElementEventsBinding {
        displayNextTime: boolean;
        pinFacet: boolean;
        omniboxObject?: PopulateOmniBoxObject;
    }
    class ValueElement {
        facet: Facet;
        facetValue: FacetValue;
        listElement: JQuery;
        label: JQuery;
        checkbox: JQuery;
        stylishCheckbox: JQuery;
        valueCaption: JQuery;
        valueCount: JQuery;
        icon: JQuery;
        excludeIcon: JQuery;
        computedField: JQuery;
        private isOmnibox;
        constructor(facet: Facet, facetValue: FacetValue);
        build(): ValueElement;
        bindEvent(eventBindings: ValueElementEventsBinding): void;
        select(): void;
        unselect(): void;
        exclude(): void;
        unexclude(): void;
        _buildExcludeIcon(): JQuery;
        _buildValueComputedField(): JQuery;
        _buildValueCheckbox(): JQuery;
        _buildValueStylishCheckbox(): JQuery;
        _buildValueIcon(): JQuery;
        _getValueIcon(): string;
        _buildValueIconFromSprite(): JQuery;
        _buildValueCaption(): JQuery;
        _buildValueCount(): JQuery;
        _handleSelectValue(eventBindings: ValueElementEventsBinding): void;
        _handleExcludeClick(eventBindings: ValueElementEventsBinding): void;
        _handleEventForExcludedValueElement(eventBindings: ValueElementEventsBinding): void;
        _handleEventForValueElement(eventBindings: ValueElementEventsBinding): void;
        _handleEventForCheckboxChange(eventBindings: ValueElementEventsBinding): void;
        _omniBoxCloseEvent(eventArg: PopulateOmniBoxObject): void;
        _setCssClassOnListValueElement(): void;
        private getAnalyticsFacetMeta();
    }
}
declare module Coveo.Ui {
    class FacetValueElement extends ValueElement {
        facet: Facet;
        facetValue: FacetValue;
        keepDisplayedValueNextTime: boolean;
        private firstQuery;
        constructor(facet: Facet, facetValue: FacetValue, keepDisplayedValueNextTime: boolean);
        bindEvent(): void;
    }
}
declare module Coveo.Ui {
    interface OmniBoxValueElementKlass {
        new (facet: Facet, facetValue: FacetValue, eventArg: PopulateOmniBoxObject): OmniBoxValueElement;
    }
    class OmniBoxValueElement extends ValueElement {
        facet: Facet;
        facetValue: FacetValue;
        eventArg: PopulateOmniBoxObject;
        constructor(facet: Facet, facetValue: FacetValue, eventArg: PopulateOmniBoxObject);
        bindEvent(): void;
    }
}
declare module Coveo.Ui {
    interface FacetSearchValuesListKlass {
        new (facet: Facet, facetValueElementKlass: FacetValueElementKlass): FacetSearchValuesList;
    }
    class FacetSearchValuesList {
        facet: Facet;
        facetValueElementKlass: FacetValueElementKlass;
        constructor(facet: Facet, facetValueElementKlass: FacetValueElementKlass);
        build(facetValues: FacetValue[]): JQuery;
    }
}
declare module Coveo.Ui {
    interface BreadcrumbValueElementKlass {
        new (facet: Facet, facetValue: FacetValue): BreadcrumbValueElement;
    }
    class BreadcrumbValueElement {
        facet: Facet;
        facetValue: FacetValue;
        constructor(facet: Facet, facetValue: FacetValue);
        build(tooltip?: boolean): JQuery;
        getBreadcrumbTooltip(): string;
    }
}
declare module Coveo.Ui {
    class BreadcrumbValueList {
        facet: Facet;
        facetValues: FacetValue[];
        breadcrumbValueElementKlass: BreadcrumbValueElementKlass;
        private expanded;
        private collapsed;
        private elem;
        private valueContainer;
        constructor(facet: Facet, facetValues: FacetValue[], breadcrumbValueElementKlass: BreadcrumbValueElementKlass);
        build(): JQuery;
        private buildExpanded();
        private buildCollapsed();
        private setExpandedAndCollapsed();
    }
}
declare module Coveo.Ui {
    class OmniboxValuesList {
        facet: Facet;
        facetValues: FacetValue[];
        omniboxObject: PopulateOmniBoxObject;
        omniBoxValueElementKlass: OmniBoxValueElementKlass;
        constructor(facet: Facet, facetValues: FacetValue[], omniboxObject: PopulateOmniBoxObject, omniBoxValueElementKlass: OmniBoxValueElementKlass);
        build(): JQuery;
        private buildOmniBoxForOneRow(facetValue, omniboxObject);
        private buildFinalOmniBoxElement(rows);
        private buildOmniBoxHeader();
        private highlightOmniBoxMatch(orignalStr, regex, valueToSearch);
        private omniBoxCloseEvent(eventArg);
    }
}
declare module Coveo.Ui {
    interface PopulateOmniBoxObject {
        completeQueryExpression: PopulateOmniBoxQueryExpression;
        currentQueryExpression: PopulateOmniBoxQueryExpression;
        allQueryExpressions: PopulateOmniBoxQueryExpression[];
        cursorPosition: number;
        clear(): void;
        clearCurrentExpression(): void;
        replace(searchValue: string, newValue: string): void;
        replaceCurrentExpression(newValue: string): void;
        insertAt(at: number, toInsert: string): void;
        closeOmniBox(): void;
    }
    interface PopulateOmniBoxQueryExpression {
        word: string;
        regex: RegExp;
    }
    interface OmniBoxData extends PopulateOmniBoxObject {
        rows: OmniBoxDataRow[];
    }
    interface OmniBoxDataRow {
        zIndex?: number;
        element?: HTMLElement;
        deferred?: JQueryDeferred<OmniBoxDataRow>;
    }
}
declare module Coveo.Events {
    interface PopulateOmniBoxEventArgs extends Ui.OmniBoxData {
    }
    interface PopulateOmniBoxEventRow extends Ui.OmniBoxDataRow {
    }
    interface CloseOmniBoxEventArgs {
    }
    class OmniBoxEvents {
        static populateOmniBox: string;
        static openOmniBox: string;
        static closeOmniBox: string;
    }
}
declare module Coveo.Ui {
    interface FacetOptionsFacetValue {
        (facetValue: FacetValue): string;
    }
    interface FacetOptions {
        title?: string;
        field?: string;
        isMultiValueField?: boolean;
        numberOfValues?: number;
        pageSize?: number;
        sortCriteria?: string;
        availableSorts?: string[];
        injectionDepth?: number;
        showIcon?: boolean;
        useAnd?: boolean;
        enableCollapse?: boolean;
        allowTogglingOperator?: boolean;
        enableMoreLess?: boolean;
        valueCaption?: any;
        lookupField?: string;
        enableFacetSearch?: boolean;
        facetSearchDelay?: number;
        facetSearchIgnoreAccents?: boolean;
        numberOfValuesInFacetSearch?: number;
        includeInBreadcrumb?: boolean;
        includeInOmniBox?: boolean;
        numberOfValuesInOmniBox?: number;
        numberOfValuesInBreadcrumb?: number;
        uniqueId?: string;
        computedField?: string;
        computedFieldOperation?: string;
        computedFieldFormat?: string;
        computedFieldCaption?: string;
        preservePosition?: boolean;
        scrollContainer?: HTMLElement;
        paddingContainer?: HTMLElement;
        customSort?: string[];
        enableSettings?: boolean;
        enableSettingsFacetState?: boolean;
        allowedValues?: string[];
        headerIcon?: string;
        valueIcon?: FacetOptionsFacetValue;
        additionalFilter?: string;
        dependsOn?: string;
    }
    class Facet extends Coveo.Ui.Component {
        element: HTMLElement;
        options: FacetOptions;
        static ID: string;
        static omniboxIndex: number;
        static options: FacetOptions;
        facetQueryController: Controllers.FacetQueryController;
        keepDisplayedValuesNextTime: boolean;
        values: FacetValues;
        currentPage: number;
        numberOfValues: number;
        firstQuery: boolean;
        facetSearch: FacetSearch;
        facetSettings: FacetSettings;
        facetSort: FacetSort;
        facetValuesList: FacetValuesList;
        _omniboxZIndex: any;
        _moreElement: JQuery;
        _lessElement: JQuery;
        private valueContainer;
        private settingsPopup;
        private headerElement;
        private operatorElement;
        _eraserElement: JQuery;
        private collapseElement;
        private excludeElement;
        private footerElement;
        private canFetchMore;
        private nbAvailableValues;
        private showingWaitAnimation;
        private pinnedViewportPosition;
        private pinnedTopSpace;
        private pinnedBottomSpace;
        private componentStateId;
        private includedAttributeId;
        private excludedAttributeId;
        private operatorAttributeId;
        private lookupValueAttributeId;
        private listenToQueryStateChange;
        constructor(element: HTMLElement, options: FacetOptions, bindings?: ComponentBindings, facetClassId?: string);
        createDom(): void;
        selectValue(value: FacetValue): void;
        selectValue(value: string): void;
        selectMultipleValues(values: FacetValue[]): void;
        selectMultipleValues(values: string[]): void;
        deselectValue(value: FacetValue): void;
        deselectValue(value: string): void;
        deselectMultipleValues(values: FacetValue[]): void;
        deselectMultipleValues(values: string[]): void;
        excludeValue(value: FacetValue): void;
        excludeValue(value: string): void;
        excludeMultipleValues(values: FacetValue[]): void;
        excludeMultipleValues(values: string[]): void;
        unexcludeValue(value: FacetValue): void;
        unexcludeValue(value: string): void;
        unexcludeMultipleValues(values: FacetValue[]): void;
        unexcludeMultipleValues(values: string[]): void;
        toggleSelectValue(value: FacetValue): void;
        toggleSelectValue(value: string): void;
        toggleExcludeValue(value: FacetValue): void;
        toggleExcludeValue(value: string): void;
        getDisplayedValues(): string[];
        getSelectedValues(): string[];
        getExcludedValues(): string[];
        reset(): void;
        switchToAnd(): void;
        getEndpoint(): Rest.SearchEndpointInterface;
        switchToOr(): void;
        updateSort(criteria: string): void;
        collapseFacet(): void;
        expandFacet(): void;
        unfadeInactiveValuesInMainList(): void;
        fadeInactiveValuesInMainList(delay: number): void;
        showWaitingAnimation(): void;
        hideWaitingAnimation(): void;
        processFacetSearchAllResultsSelected(facetValues: FacetValue[]): void;
        pinFacetPosition(): void;
        getValueCaption(facetValue: Rest.FieldValue): string;
        getValueCaption(facetValue: FacetValue): string;
        enable(): void;
        disable(): void;
        triggerNewQuery(beforeExecuteQuery?: () => void): void;
        _checkForComputedFieldAndSort(): void;
        _checkForValueCaptionType(): void;
        _checkForCustomSort(): void;
        _initQueryEvents(): void;
        _initQueryStateEvents(): void;
        _initComponentStateEvents(): void;
        _initOmniBoxEvents(): void;
        _initBreadCrumbEvents(): void;
        _initBottomAndTopSpacer(): void;
        _initFacetQueryController(): void;
        _initFacetValuesList(): void;
        _initFacetSearch(): void;
        _updateIncludedQueryStateModel(): void;
        _facetValueHasChanged(): void;
        _updateExcludedQueryStateModel(): void;
        _updateOperatorQueryStateModel(): void;
        _updateLookupValueQueryStateModel(): void;
        _handleQueryStateChangedOperator(operator: string): void;
        _handleQueryStateChangedIncluded(includedChanged: any): void;
        _handleQueryStateChangedExcluded(excludedChanged: any): void;
        _handleLookupvalueChanged(lookupFieldChanged: {
            [value: string]: string;
        }): void;
        _handleQueryStateChanged(e: JQueryEventObject, data: Models.AttributesChangedEventArg): void;
        _handlePopulateOmnibox(e: JQueryEventObject, data: Events.PopulateOmniBoxEventArgs): void;
        _handleOmniBoxWithStaticValue(eventArg: Events.PopulateOmniBoxEventArgs): void;
        _handleOmniBoxWithSearchInFacet(eventArg: Events.PopulateOmniBoxEventArgs): void;
        _handleDuringQuery(): void;
        _handleBuildingQuery(e: JQueryEventObject, data: Events.BuildingQueryEventArgs): void;
        _handleDoneBuildingQuery(e: JQueryEventObject, data: Events.DoneBuildingQueryEventArgs): void;
        _handleDeferredQuerySuccess(e: JQueryEventObject, data: Events.QuerySuccessEventArgs): void;
        _handlePopulateBreadcrumb(e: JQueryEventObject, args: Events.PopulateBreadcrumbEventArgs): void;
        _handleClearBreadcrumb(e: JQueryEventObject, args: Events.ClearBreadcrumbEventArgs): void;
        _processNewGroupByResults(groupByResult: Rest.GroupByResult): void;
        _updateValues(facetValues: FacetValues): void;
        _ensureFacetValueIsInList(facetValue: FacetValue): void;
        _isAnyValueCurrentlyDisplayed(): boolean;
        _handleOperatorClick(): void;
        _handleEraserClick(): void;
        _updateQueryStateModel(): void;
        _buildFacetContent(): void;
        _buildHeader(): JQuery;
        _buildIcon(): JQuery;
        _buildWaitAnimation(): JQuery;
        _buildCollapse(): JQuery;
        _buildExpand(): JQuery;
        _buildTitle(): JQuery;
        _buildOperatorToggle(): JQuery;
        _rebuildOperatorToggle(): void;
        _buildEraser(): JQuery;
        protected updateNumberOfValues(): void;
        private getMinimumNumberOfValuesToDisplay();
        _rebuildValueElements(): void;
        _updateMoreLess(): void;
        _buildFooter(): JQuery;
        _buildMore(): JQuery;
        _handleClickMore(): void;
        _triggerMoreQuery(): void;
        _triggerUpdateDeltaQuery(facetValues: FacetValue[]): void;
        _triggerCheckDependingFacets(trigerredByClick: boolean): void;
        private _enableDependingFacet(facet);
        _disableDependingFacet(facet: JQuery): void;
        _buildLess(): JQuery;
        _handleClickLess(): void;
        _unpinFacetPosition(): void;
        _isFacetPinned(): boolean;
        _ensurePinnedFacetHasntMoved(): void;
        _updateAppearanceDependingOnState(): void;
        private updateVisibilityBasedOnDependsOn();
        private doesParentFacetHasSelectedValue();
    }
}
declare module Coveo.Ui {
    interface SliderGraphData {
        start: any;
        y: number;
        end: any;
        isDate?: boolean;
    }
    interface SliderOptions {
        start?: any;
        end?: any;
        excludeOuterBounds?: boolean;
        steps?: number;
        getSteps?: (start: number, end: number) => number[];
        rangeSlider?: boolean;
        displayAsValue?: {
            unitSign?: string;
            separator?: string;
        };
        displayAsPercent?: {
            separator?: string;
        };
        valueCaption?: (values: number[]) => string;
        percentCaption?: (percent: number[]) => string;
        dateFormat?: string;
        document?: Document;
        graph?: {
            steps?: number;
            animationDuration?: number;
            margin?: {
                top?: number;
                bottom?: number;
                left?: number;
                right?: number;
            };
        };
        dateField?: boolean;
        rounded?: number;
    }
    class Slider {
        element: JQuery;
        options: SliderOptions;
        steps: number[];
        currentValues: number[];
        private sliderButton;
        private sliderRange;
        private sliderLine;
        private sliderCaption;
        private sliderGraph;
        constructor(element: JQuery, options: SliderOptions);
        onMoving(): void;
        initializeState(values?: number[]): void;
        getPosition(): number[];
        getPercentPosition(): number[];
        getValues(): any[];
        getCaptionFromValue(values: number[]): string;
        getCaption(): string;
        setValues(values: number[]): void;
        drawGraph(data?: SliderGraphData[]): void;
        private displayCaption();
        private buildSteps();
    }
    class SliderButton {
        slider: Slider;
        private which;
        leftBoundary: number;
        rightBoundary: number;
        element: JQuery;
        private currentPos;
        private startPositionX;
        private isMouseDown;
        private lastElementLeft;
        private origUserSelect;
        private origCursor;
        private origZIndex;
        private eventMouseDown;
        private eventMouseMove;
        private eventMouseUp;
        constructor(slider: Slider, which: number);
        build(): JQuery;
        toBeginning(): void;
        toEnd(): void;
        setValue(value: number): void;
        getPosition(): number;
        getPercent(position?: number): number;
        getValue(): any;
        fromValueToPercent(value: number): number;
        fromPositionToValue(position: number): any;
        fromValueToPosition(value: number): number;
        private bindEvents();
        private handleStartSlide(e);
        private handleMoving(e);
        private handleEndSlide(e);
        private handleButtonNearEnd();
        private getMousePosition(e);
        private updatePosition(e);
        private snapToStep(spanX);
    }
}
declare module Coveo {
    class Options {
        merge<T>(provided: T): T;
        mergeDeep<T>(provided: T): T;
    }
}
declare module Coveo {
    interface DateToStringOptions {
        now?: Date;
        useTodayYesterdayAndTomorrow?: boolean;
        useWeekdayIfThisWeek?: boolean;
        omitYearIfCurrentOne?: boolean;
        useLongDateFormat?: boolean;
        includeTimeIfToday?: boolean;
        includeTimeIfThisWeek?: boolean;
        alwaysIncludeTime?: boolean;
        predefinedFormat?: string;
    }
    class DateUtils {
        static convertFromJsonDateIfNeeded(date: string): Date;
        static convertFromJsonDateIfNeeded(date: number): Date;
        static convertFromJsonDateIfNeeded(date: Date): Date;
        static keepOnlyDatePart(date: Date): Date;
        static offsetDateByDays(date: Date, offset: number): Date;
        static dateToString(date: Date, options?: DateToStringOptions): string;
        static timeToString(date: Date, options?: DateToStringOptions): string;
        static dateTimeToString(date: Date, options?: DateToStringOptions): string;
        static monthToString(month: number): string;
        static isValid(date: any): boolean;
        static timeBetween(from: Date, to: Date): string;
    }
}
declare module Coveo.Controllers {
    class FacetRangeQueryController extends FacetQueryController {
        facet: Ui.FacetRange;
        graphGroupByQueriesIndex: number;
        private rangeValuesForGraphToUse;
        constructor(facet: Ui.FacetRange);
        putGroupByIntoQueryBuilder(queryBuilder: Ui.QueryBuilder): void;
        _createBasicGroupByRequest(allowedValues?: string[], addComputedField?: boolean): Rest.GroupByRequest;
        _createGroupByAllowedValues(): string[];
        computeOurFilterExpression(boundary?: number[]): string;
        private handleQuerySuccess(e, args);
        private addFilterExpressionWithOuterBoundsIncluded(start, end, builder);
        private addFilterExpressionWithOuterBoundsExcluded(start, end, builder);
        private buildGroupByQueryForSlider(groupByQuery);
        private buildGroupByQueryForAutomaticRanges(groupByQuery);
        private buildGroupByQueryForPredefinedRanges(groupByQuery);
        private putGroupByForGraphIntoQueryBuilder(queryBuilder);
        private putGroupByForSliderIntoQueryBuilder(queryBuilder);
        private createRangeValuesForGraph(basicRangeRequest);
        private usePrebuiltRange(basicRangeRequest);
        private buildRange(basicRangeRequest);
        private buildGroupByQueryForSelectedAndExcludedValues(groupByQuery);
        private getISOFormat(value);
        private getFilterDateFormat(rawValue);
        private getBrowserCompatibleFormat(value);
    }
}
declare module Coveo.Events {
    interface StartSlideEventArgs {
        slider: Ui.Slider;
        button: Ui.SliderButton;
    }
    interface DuringSlideEventArgs {
        slider: Ui.Slider;
        button: Ui.SliderButton;
    }
    interface EndSlideEventArgs {
        slider: Ui.Slider;
        button: Ui.SliderButton;
    }
    interface GraphValueSelectedArgs {
        start: any;
        end: any;
        value: any;
    }
    class SliderEvents {
        static startSlide: string;
        static duringSlide: string;
        static endSlide: string;
        static graphValueSelected: string;
    }
}
declare module Coveo.FeatureDetectionUtils {
    function supportSVG(): boolean;
}
declare module Coveo.Ui {
    interface FacetRangeSliderOptions extends SliderOptions {
        queryOverride: string;
    }
    interface FacetRangeOptions extends FacetOptions {
        ranges?: Rest.RangeValue[];
        dateField?: boolean;
        slider?: FacetRangeSliderOptions;
    }
    class FacetRange extends Facet {
        element: HTMLElement;
        static ID: string;
        static parent: typeof Facet;
        static options: FacetRangeOptions;
        options: FacetRangeOptions;
        startOfSlider: number;
        endOfSlider: number;
        initialStartOfSlider: number;
        initialEndOfSlider: number;
        facetQueryController: Controllers.FacetRangeQueryController;
        private generatedRanges;
        private slider;
        private rangeQueryStateAttribute;
        private isEmpty;
        private rangeFromUrlState;
        constructor(element: HTMLElement, options: FacetRangeOptions, bindings?: ComponentBindings);
        reset(): void;
        getSelectedValues(): string[];
        getValueCaption(facetValue: any): string;
        _initFacetValuesList(): void;
        _handlePopulateBreadcrumb(e: JQueryEventObject, args: Events.PopulateBreadcrumbEventArgs): void;
        getSliderBoundaryForQuery(): any[];
        private handleNoresults();
        private sliderIsActive();
        private buildBreadcrumbFacetSlider();
        private initSlider();
        _initQueryStateEvents(): void;
        private handleRangeQueryStateChanged(e, args);
        private setRangeStateSliderStillNotCreated(e, args);
        private buildSlider();
        _initFacetQueryController(): void;
        _handleBuildingQuery(e: JQueryEventObject, data: Events.BuildingQueryEventArgs): void;
        _processNewGroupByResults(groupByResult: Rest.GroupByResult): void;
        _handleDeferredQuerySuccess(e: JQueryEventObject, data: Events.QuerySuccessEventArgs): void;
        _facetValueShouldBeRemoved(facetValue: FacetValue): boolean;
        _rebuildValueElements(): void;
        private handleEndSlide(e, args);
        private handleDuringSlide(e, args);
        private handleGraphValueSelected(e, args);
        private updateQueryState(values?, silent?);
        private copyValues(values);
        private updateFacetStyle();
        private renderToSliderGraph(data);
        _updateAppearanceDependingOnState(): void;
        private generateBoundary();
        private generateBoundaryFromSlider();
        private generateBoundaryFromState();
        private setupSliderIfNeeded(data);
        private verifySetup();
        private setupSliderStateVariables();
        private alreadySetBoundary();
        private trySetSliderBoundaryFromOptions();
        private trySetSliderBoundaryFromState();
        private trySetSliderBoundaryFromQueryResult(data);
        private setupInitialSliderStateStart(value);
        private setupInitialSliderStateEnd(value);
        private hasASlider();
        private hasAGraph();
    }
}
declare module Coveo.Ui {
    interface FieldValueOptions {
        field?: string;
        facet?: string;
        htmlValue?: boolean;
        helper?: string;
        helperOptions?: string;
        splitValues?: boolean;
    }
    interface AnalyticsFieldValueMeta {
        facetId: string;
        facetValue?: string;
        facetTitle?: string;
    }
    class FieldValue extends Component {
        element: HTMLElement;
        options: FieldValueOptions;
        result: Rest.QueryResult;
        static ID: string;
        static options: FieldValueOptions;
        private evaluatedHelperOptions;
        constructor(element: HTMLElement, options?: FieldValueOptions, bindings?: ComponentBindings, result?: Rest.QueryResult, fieldValueClassId?: string);
        getValue(): any;
        private getHelperOptions();
        renderOneValue(value: string): JQuery;
        private bindEventOnValue(element, value);
    }
}
declare module Coveo.Ui {
    interface BadgeOptions extends FieldValueOptions {
        colors: string;
    }
    class Badge extends FieldValue {
        options: BadgeOptions;
        static ID: string;
        static options: BadgeOptions;
        static parent: typeof FieldValue;
        private defaultColor;
        private colors;
        constructor(element: HTMLElement, options?: BadgeOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        getColor(value: string): string;
        static parseColors(colorsOption: string): {
            defaultColor: string;
            valueColors: {
                [key: string]: string;
            };
        };
        renderOneValue(value: string): JQuery;
    }
}
declare module Coveo.Ui {
    interface FieldTableOptions {
        useJsonTemplateFields?: boolean;
    }
    class FieldTable extends Component {
        element: HTMLElement;
        options: FieldTableOptions;
        static ID: string;
        static options: FieldTableOptions;
        constructor(element: HTMLElement, options?: FieldTableOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
    }
    interface ValueRowOptions extends FieldValueOptions {
        caption?: string;
    }
}
declare module Coveo.Ui {
    interface FileTypeIconOptions {
        fileTypeToUse?: string;
        classToUse?: string;
    }
    class FileTypeIcon extends Component {
        element: HTMLElement;
        options: FileTypeIconOptions;
        result: Rest.QueryResult;
        static ID: string;
        static options: FileTypeIconOptions;
        constructor(element: HTMLElement, options?: FileTypeIconOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        static createFileTypeIcon(result: Rest.QueryResult, options?: FileTypeIconOptions, element?: JQuery): JQuery;
    }
}
declare module Coveo.Ui {
    interface FoldingOptions {
        field?: string;
        childField?: string;
        parentField?: string;
        range?: number;
        rearrange?: SortCriteria;
        enableExpand?: boolean;
        expandExpression?: string;
        maximumExpandedResults?: number;
        /**
         * Manage folding for each results individually
         */
        getResult?: (result: Rest.QueryResult) => Rest.QueryResult;
        /**
         * Manage folding of all more results
         */
        getMoreResults?: (results: Rest.QueryResult[]) => Rest.QueryResult[];
    }
    class Folding extends Ui.Component {
        element: HTMLElement;
        options: FoldingOptions;
        static ID: string;
        static options: FoldingOptions;
        /**
         * Convert ResultNode to QueryResult
         */
        private static resultNodeToQueryResult(resultNode);
        /**
         * Find the node in trees
         */
        private static findUniqueId(resultNodes, uniqueId);
        /**
         * From a list of results, return a list of results and their attachments
         * We use parentResult to build a tree of result
         */
        static foldWithParent(queryResults: Rest.QueryResult[]): Rest.QueryResult[];
        /**
         * 99.9% of the folding case will be alright with those default functions.
         * Otherwise use the options getResult and getMoreResults
         */
        static defaultGetResult(result: Rest.QueryResult): Rest.QueryResult;
        static defaultGetMoreResults(results: Rest.QueryResult[]): Rest.QueryResult[];
        constructor(element: HTMLElement, options: FoldingOptions, bindings?: ComponentBindings);
        private handleBuildingQuery(e, data);
        private handlepreprocessResults(e, data);
        private addLoadMoreHandler(results, originalQuery);
        private moreResults(result, originalQuery);
        private handlePreprocessMoreResults(queryResults);
    }
}
declare module Coveo.Ui {
    class FoldingForThread extends Folding {
        element: HTMLElement;
        options: FoldingOptions;
        static ID: string;
        constructor(element: HTMLElement, options: FoldingOptions, bindings?: ComponentBindings);
    }
}
declare module Coveo.Ui {
    interface HiddenQueryOptions {
    }
    class HiddenQuery extends Component {
        element: HTMLElement;
        options: HiddenQueryOptions;
        static ID: string;
        static options: HiddenQueryOptions;
        constructor(element: HTMLElement, options?: HiddenQueryOptions, bindings?: ComponentBindings);
        private handleBuildingQuery(e, data);
        private handleUpdateUi(e, data);
        private updatePanel(descriptionHtml);
        private clearHiddenQuery();
    }
}
declare module Coveo.Controllers {
    class HierarchicalFacetQueryController extends FacetQueryController {
        facet: Ui.HierarchicalFacet;
        private lastGroupByIndexForCountOf;
        lastGroupByForCountOf: Rest.GroupByResult;
        constructor(facet: Ui.HierarchicalFacet);
        _createBasicGroupByRequest(): Rest.GroupByRequest;
    }
}
declare module Coveo.Ui {
    class HierarchicalFacetValueElement extends FacetValueElement {
        facet: HierarchicalFacet;
        facetValue: FacetValue;
        keepDisplayedValueNextTime: boolean;
        constructor(facet: HierarchicalFacet, facetValue: FacetValue, keepDisplayedValueNextTime: boolean);
        build(): ValueElement;
        private buildXOfYCountText(currentCount);
    }
}
declare module Coveo.Ui {
    class HierarchicalFacetValuesList extends FacetValuesList {
        facet: HierarchicalFacet;
        facetValueElementKlass: FacetValueElementKlass;
        hierarchyFacetValues: FacetValue[];
        constructor(facet: HierarchicalFacet, facetValueElementKlass: FacetValueElementKlass);
        _getValuesToBuildWith(): FacetValue[];
    }
}
declare module Coveo.Ui {
    class OmniboxHierarchicalValueElement extends OmniBoxValueElement {
        facet: HierarchicalFacet;
        facetValue: FacetValue;
        eventArg: PopulateOmniBoxObject;
        constructor(facet: HierarchicalFacet, facetValue: FacetValue, eventArg: PopulateOmniBoxObject);
        _handleSelectValue(eventBindings: ValueElementEventsBinding): void;
        _handleExcludeClick(eventBindings: ValueElementEventsBinding): void;
    }
}
declare module Coveo.Ui {
    class OmniboxHierarchicalValuesList extends OmniboxValuesList {
        facet: HierarchicalFacet;
        facetValues: FacetValue[];
        omniboxObject: PopulateOmniBoxObject;
        constructor(facet: HierarchicalFacet, facetValues: FacetValue[], omniboxObject: PopulateOmniBoxObject);
    }
}
declare module Coveo.Ui {
    class HierarchicalBreadcrumbValueElement extends BreadcrumbValueElement {
        facet: HierarchicalFacet;
        facetValue: FacetValue;
        constructor(facet: HierarchicalFacet, facetValue: FacetValue);
        build(): JQuery;
    }
}
declare module Coveo.Ui {
    class HierarchicalBreadcrumbValuesList extends BreadcrumbValueList {
        facet: HierarchicalFacet;
        facetValues: FacetValue[];
        valueHierarchy: {
            [facetValue: string]: ValueHierarchy;
        };
        constructor(facet: HierarchicalFacet, facetValues: FacetValue[], valueHierarchy: {
            [facetValue: string]: ValueHierarchy;
        });
    }
}
declare module Coveo.Ui {
    class HierarchicalFacetSearchValueElement extends FacetValueElement {
        facet: HierarchicalFacet;
        facetValue: FacetValue;
        keepDisplayedValueNextTime: boolean;
        constructor(facet: HierarchicalFacet, facetValue: FacetValue, keepDisplayedValueNextTime: boolean);
        _handleSelectValue(eventBindings: ValueElementEventsBinding): void;
        _handleExcludeClick(eventBindings: ValueElementEventsBinding): void;
    }
}
declare module Coveo.Ui {
    class HierarchicalFacetSearchValuesList extends FacetSearchValuesList {
        facet: Facet;
        constructor(facet: Facet);
    }
}
declare module Coveo.Ui {
    interface HierarchicalFacetOptions extends FacetOptions {
        delimitingCharacter?: string;
        levelStart?: number;
        levelEnd?: number;
        marginByLevel?: number;
    }
    interface ValueHierarchy {
        childs?: ValueHierarchy[];
        parent?: ValueHierarchy;
        originalPosition?: number;
        facetValue: FacetValue;
        level: number;
        keepOpened: boolean;
        hasChildSelected: boolean;
    }
    class HierarchicalFacet extends Facet {
        element: HTMLElement;
        bindings: ComponentBindings;
        static ID: string;
        static options: HierarchicalFacetOptions;
        options: HierarchicalFacetOptions;
        facetValuesList: HierarchicalFacetValuesList;
        numberOfValuesToShow: number;
        facetQueryController: Controllers.HierarchicalFacetQueryController;
        private valueHierarchy;
        private originalPosition;
        private firstPlacement;
        private originalNumberOfValuesToShow;
        private topLevelHierarchy;
        private correctLevels;
        constructor(element: HTMLElement, options: HierarchicalFacetOptions, bindings: ComponentBindings);
        selectValue(value: FacetValue, selectChilds?: boolean): void;
        selectValue(value: string, selectChilds?: boolean): void;
        selectMultipleValues(values: FacetValue[], selectChilds?: boolean): void;
        selectMultipleValues(values: string[], selectChilds?: boolean): void;
        deselectValue(value: FacetValue, deselectChilds?: boolean): void;
        deselectValue(value: string, deselectChilds?: boolean): void;
        excludeValue(value: FacetValue, excludeChilds?: boolean): void;
        excludeValue(value: string, excludeChilds?: boolean): void;
        unexcludeValue(value: FacetValue, unexludeChilds?: boolean): void;
        unexcludeValue(value: string, unexludeChilds?: boolean): void;
        deselectMultipleValues(values: FacetValue[], deselectChilds?: boolean): void;
        deselectMultipleValues(values: string[], deselectChilds?: boolean): void;
        toggleSelectValue(value: FacetValue): void;
        toggleSelectValue(value: string): void;
        toggleExcludeValue(value: FacetValue): void;
        toggleExcludeValue(value: string): void;
        getValueCaption(facetValue: Rest.FieldValue): string;
        getValueCaption(facetValue: FacetValue): string;
        _facetValueHasChanged(): void;
        getDisplayedValues(): string[];
        updateSort(criteria: string): void;
        open(value: FacetValue): any;
        open(value: ValueHierarchy): any;
        close(value: FacetValue): any;
        close(value: ValueHierarchy): any;
        getLevel(value: FacetValue): number;
        reset(): void;
        _initFacetQueryController(): void;
        _initFacetSearch(): void;
        _handleDeferredQuerySuccess(e: JQueryEventObject, data: Events.QuerySuccessEventArgs): void;
        _handlePopulateBreadcrumb(e: JQueryEventObject, args: Events.PopulateBreadcrumbEventArgs): void;
        _handleOmniBoxWithStaticValue(eventArg: Events.PopulateOmniBoxEventArgs): void;
        _rebuildValueElements(): void;
        _initFacetValuesList(): void;
        _updateMoreLess(): void;
        _handleClickMore(): void;
        _handleClickLess(): void;
        protected updateNumberOfValues(): void;
        private ensureValueHierarchyExists(facetValues);
        private crop();
        private placeChildsUnderTheirParent(hierarchy, hierarchyElement);
        private addCssClassToParentAndChilds(hierarchy, hierarchyElement);
        private buildParentChildRelationship();
        private setValueListContent();
        private createHierarchy(valuesToBuildWith);
        private processHierarchy(facetValues?);
        private setInHierarchy(flatHierarchy);
        private getParent(value);
        private getSelf(value);
        private showFacetValue(value);
        private hideFacetValue(value);
        private hideChilds(children);
        private showChilds(children);
        private hideParent(parent);
        private showParent(parent);
        private selectChilds(parent, children);
        private deselectChilds(parent, children);
        private excludeChilds(children);
        private unexcludeChilds(children);
        private selectParent(parent);
        private deselectParent(parent);
        private flagParentForSelection(valueHierarchy);
        private unflagParentForSelection(valueHierarchy);
        private getValueFromHierarchy(value);
        private getFacetValueFromHierarchy(value);
        private getLookupOrValue(value);
        private getElementFromFacetValueList(value);
        private getFromFacetValueList(value);
    }
}
declare module Coveo {
    interface AnchorUtilsOptions {
        text?: string;
        target?: string;
        class?: string;
    }
    interface ImageUtilsOptions {
        alt?: string;
        height?: string;
        width?: string;
    }
    class HTMLUtils {
        static buildAttributeString(options: any): string;
    }
    class AnchorUtils {
        static buildAnchor(href: string, options?: AnchorUtilsOptions): string;
    }
    class ImageUtils {
        static buildImage(src?: string, options?: ImageUtilsOptions): string;
        static selectImageFromResult(result: Rest.QueryResult): JQuery;
        static buildImageWithDirectSrcAttribute(endpoint: Rest.SearchEndpoint, result: Rest.QueryResult): void;
        static buildImageWithBase64SrcAttribute(endpoint: Rest.SearchEndpoint, result: Rest.QueryResult): void;
        static buildImageFromResult(result: Rest.QueryResult, endpoint: Rest.SearchEndpoint, options?: ImageUtilsOptions): string;
    }
}
declare module Coveo {
    class EmailUtils {
        static splitSemicolonSeparatedListOfEmailAddresses(addresses: string): string[];
        static emailAddressesToHyperlinks(addresses: string[], companyDomain?: string, me?: string, lengthLimit?: number, truncateName?: boolean): string;
        static buildEmailAddressesAndOthers(excessHyperLinks: string[]): string;
        static parseEmail(email: string): string[];
    }
}
declare module Coveo {
    interface CurrencyToStringOptions {
        decimals?: number;
        symbol?: string;
    }
    class CurrencyUtils {
        static currencyToString(value: number, options?: CurrencyToStringOptions): string;
    }
}
declare module Coveo {
    class Hole {
        begin: number;
        size: number;
        replacementSize: number;
        constructor(begin: number, size: number, replacementSize: number);
    }
    class StringAndHoles {
        value: string;
        holes: Hole[];
        static SHORTEN_END: string;
        static WORD_SHORTER: number;
        static replace(str: string, find: string, replace: string): StringAndHoles;
        static shortenPath(uriOrig: string, length: number): StringAndHoles;
        static shortenString(toShortenOrig: string, length: number, toAppend: string): StringAndHoles;
        static shortenUri(uri: string, length: number): StringAndHoles;
    }
    class HighlightUtils {
        static highlightString(content: string, highlights: Rest.Highlight[], holes: Hole[], cssClass: string): string;
        static buildHighlightedString(content: string, highlights: Rest.Highlight[], holes: Hole[], cssClass: string): string;
    }
    function highlightString(value: string, search: string): string;
}
declare module Coveo {
    interface StreamHighlightOptions {
        cssClass?: string;
        regexFlags?: string;
    }
    function highlightStreamHTML(stream: string, termsToHighlight: {
        [originalTerm: string]: string[];
    }, phrasesToHighlight: {
        [phrase: string]: {
            [originalTerm: string]: string[];
        };
    }, options?: StreamHighlightOptions): string;
    function highlightStreamText(stream: string, termsToHighlight: {
        [originalTerm: string]: string[];
    }, phrasesToHighlight: {
        [phrase: string]: {
            [originalTerm: string]: string[];
        };
    }, options?: StreamHighlightOptions): string;
}
declare module Coveo {
    class ChatterUtils {
        static buildURI(objectURI: string, objectId: string, newObjectId: string): string;
    }
}
declare module Coveo.Ui {
}
declare module Coveo.Ui {
    interface ResultListOptions {
        resultContainer?: HTMLElement;
        resultTemplate?: Template;
        resultOptions?: {};
        waitAnimationContainer?: HTMLElement;
        enableInfiniteScroll?: boolean;
        infiniteScrollPageSize?: number;
        infiniteScrollContainer?: HTMLElement;
        waitAnimation?: string;
        mobileScrollContainer?: HTMLElement;
        showInfiniteScrollWaitingAnimation?: boolean;
    }
    class ResultList extends Component {
        element: HTMLElement;
        options: ResultListOptions;
        bindings: ComponentBindings;
        static ID: string;
        static options: ResultListOptions;
        private currentlyDisplayedResults;
        private fetchingMoreResults;
        private reachedTheEndOfResults;
        private resetList;
        private pageChanged;
        constructor(element: HTMLElement, options?: ResultListOptions, bindings?: ComponentBindings, elementClassId?: string);
        private handlePageChanged();
        handleNewQuery(): void;
        displayMoreResults(count: number, triggeredByUser: boolean): void;
        _triggerNewResultDisplayed(result: Rest.QueryResult, resultElement: HTMLElement): void;
        _buildResults(results: Rest.QueryResults): void;
        _instantiateTemplateForResult(result: Rest.QueryResult): HTMLElement;
        _autoCreateComponentsInsideResult(element: HTMLElement, result: Rest.QueryResult): void;
        private handleDuringQuery();
        private handleProcessNewQueryResults(e, data);
        private handleScrollOfResultList(event?);
        isCurrentlyFetchingMoreResults(): boolean;
        private isScrollingOfResultListAlmostAtTheBottom();
        private isScrollAtBottomForWindowElement();
        private isScrollAtBottomForHtmlElement();
        hasPotentiallyMoreResultsToDisplay(): boolean;
        private cancelFetchingMoreResultsIfNeeded();
        private showOrHideElementsDependingOnState(hasQuery, hasResults);
        private showWaitingAnimation();
        private hideWaitingAnimation();
        private showWaitingAnimationForInfiniteScrolling();
        private hideWaitingAnimationForInfiniteScrolling();
    }
}
declare module Coveo.Ui {
    interface ImageResultListOptions extends ResultListOptions {
        layoutType?: string;
        heightThreshold?: number;
        columnWidth?: number;
    }
    class ImageResultList extends ResultList {
        element: HTMLElement;
        options: ImageResultListOptions;
        static ID: string;
        static rowLayoutTypeStr: string;
        static columnLayoutTypeStr: string;
        static options: ImageResultListOptions;
        private columnResultsArray;
        private imagesInCurrentRow;
        private imagesLoaded;
        private resultIndex;
        private lastRowHeight;
        constructor(element: HTMLElement, options?: ImageResultListOptions, bindings?: ComponentBindings, elementClassId?: string);
        private getResultsElement();
        private getResultsElementImages();
        private getResultsContainerDiv();
        private bindWindowResizeEvent();
        private handleProcessNewResultsDisplayed();
        private addTransitionAllToElement(element);
        private retrieveLayoutMethod();
        private onImageProxy(callback);
        private getHorizontalMargin(element);
        private getVerticalMargin(element);
        private setupColumns();
        private positionColumns(colWidth, margin);
        private setResultsContainerHeight(height);
        private setupRows();
        private getCurrentRowHeight(results, containerWidth);
        private getImageDimensionsFromResult(result);
        private setCurrentRowImagesDimensions(images, height, top);
        private adjustNumberOfResults();
    }
}
declare module Coveo {
    class AjaxUtils<T> {
        static ajaxBasicAuth<T>(type: string, url: string, username: string, password: string, doneCallback: (data: T) => void, failCallBack?: (data: T) => void): void;
        static getBasicAuthBase64(username: string, password: string): string;
    }
}
declare module Coveo.Ui {
    class LoginCredentials {
        loginPanel: Login;
        private credentialContainer;
        private loginUser;
        private loginPassword;
        private userInputTemplate;
        private passwordInputTemplate;
        private containerTemplate;
        constructor(loginPanel: Login);
        buildDom(): void;
        show(): void;
        getUser(): string;
        setUser(user: string): void;
        getPassword(): string;
        setPassword(password: string): void;
        validate(): JQueryDeferred<{}>;
        submit(allValidationPassed: JQueryDeferred<boolean>): JQueryDeferred<{}>;
        private getLocalStorageKeyUser();
        private getLocalStorageKeyPassword();
        private getPasswordFromInput();
        private getUserFromInput();
        private handleInputKeypress(e);
    }
}
declare module Coveo {
    class PhonegapFileAccess {
        filename: string;
        flags: Flags;
        _success: (data: string) => void;
        _error: (error: any) => void;
        constructor(filename: string, flags: Flags);
        done(success: (data: string) => void): PhonegapFileAccess;
        fail(error: (error: any) => void): PhonegapFileAccess;
        tryAccess(): void;
        _onGotFileEntry(fileEntry: FileEntry): void;
        private tryGetFilesystem();
        _gotFileSystem(fileSystem: FileSystem): void;
        private onError(error);
    }
    class PhonegapFileReader extends PhonegapFileAccess {
        constructor(filename: string);
        read(): PhonegapFileReader;
        _onGotFileEntry(fileEntry: FileEntry): void;
        private gotFileEntry(fileEntry);
        gotFile(file: File): void;
    }
    class PhonegapFileWriter extends PhonegapFileAccess {
        append: boolean;
        private content;
        constructor(filename: string, append?: boolean);
        write(content: string): PhonegapFileWriter;
        _onGotFileEntry(fileEntry: FileEntry): void;
        private gotFileWriter(writer);
    }
}
declare module Coveo.Ui {
    class LoginPageSettings {
        loginPanel: Login;
        private pageSettings;
        private pageSettingsInputTemplate;
        constructor(loginPanel: Login);
        buildDom(): void;
        getPageSettingsUrl(): string;
        setPageSettingsUrl(pageUrl: string): void;
        submit(allValidationPassed: JQueryDeferred<boolean>): JQueryDeferred<{}>;
        validate(allValidationPassed: JQueryDeferred<boolean>): JQueryDeferred<{}>;
        private getLocalStorageKeyPageUrl();
        private getSearchApiRootUrl();
        private handleInputKeypress(e);
        private loadFromInterfaceEditorUrl(url);
        private tryToWriteFileToDisc(allValidationPassed, deferredToReturn, writeDocument?);
        private tryToReadFileFomDisc(allValidationPassed, deferredToReturn, writeDocument?);
        private writeDocumentContent(content);
        private appendMissingLoginComponentIfNeeded();
        private configureNewEndpoints();
        private initNewSearchInterface();
    }
}
declare module Coveo.Ui {
    interface LoginOptions {
        id?: string;
        caption?: string;
        autoTriggerQuery?: boolean;
        requireLogin?: boolean;
        requirePageSettings?: boolean;
    }
    class Login extends Component {
        element: HTMLElement;
        options: LoginOptions;
        static ID: string;
        static options: LoginOptions;
        pageSettings: LoginPageSettings;
        credentials: LoginCredentials;
        isHidden: boolean;
        container: JQuery;
        private loadingAnimation;
        private submitButton;
        private logo;
        private errorMessage;
        private caption;
        combined: JQuery;
        private errorMessageTemplate;
        private captionTemplate;
        private tabButtonTemplate;
        private containerTemplate;
        private submitButtonTemplate;
        private combinedTemplate;
        private logoTemplate;
        constructor(element: HTMLElement, options?: LoginOptions, bindings?: ComponentBindings, loginId?: string);
        getPageSettingsUrl(): string;
        setPageSettingsUrl(url: string): void;
        getUser(): string;
        setUser(user: string): void;
        getPassword(): string;
        setPassword(password: string): void;
        setErrorMessage(msg: string): void;
        resetErrorMessage(): void;
        createDom(): void;
        getOrCreateContainer(): JQuery;
        getOrCreateCombined(): JQuery;
        hide(): void;
        hideAndExecuteQuery(): void;
        validate(): void;
        submit(): void;
        isAccessDeniedError(error: Rest.EndpointError): boolean;
        private baseValidationEvent(methodToGather, onSuccess);
        private show();
        private handleBackButton();
        private handleQueryError(e, args);
        private updateEndpointWithCredentials();
        private buildTabButton();
    }
}
declare module Coveo.Ui {
    interface QueryBoxOptions {
        enableSearchAsYouType?: boolean;
        searchAsYouTypeDelay?: number;
        disableQuerySyntax?: boolean;
        enableWildcards?: boolean;
        enableQuestionMarks?: boolean;
        enableLowercaseOperators?: boolean;
        enablePartialMatch?: boolean;
        partialMatchKeywords?: number;
        partialMatchThreshold?: string;
        autoFocus?: boolean;
    }
}
declare module Coveo.Ui {
    interface OmniBoxOptions extends QueryBoxOptions {
        omniBoxDelay?: number;
        omniBoxTimeout?: number;
        omniBoxChangeLimit?: number;
        omniBoxMinimumLetters?: number;
    }
}
declare module Coveo.Ui {
    class QueryBox extends Coveo.Ui.Component {
        element: HTMLElement;
        options: QueryBoxOptions;
        static ID: string;
        static options: QueryBoxOptions;
        private searchAsYouTypeTimeout;
        _clearElement: JQuery;
        constructor(element: HTMLElement, options: QueryBoxOptions, bindings?: ComponentBindings);
        clear(): void;
        replace(searchValue: string, newValue: string): void;
        replaceCurrentExpression(newValue: string): void;
        clearCurrentExpression(): void;
        getCurrentQueryExpression(): any;
        insertAt(at: number, toInsert: string): void;
        _handleChange(event: JQueryEventObject): boolean;
        _handleQueryStateChanged(e: JQueryEventObject, data: Models.AttributeChangedEventArg): void;
        _handleKeyUp(event: KeyboardEvent): void;
        _addClearElement(): void;
        _hideClearElement(): void;
        _showClearElement(): void;
        private startNewSearchAsYouTypeTimeout();
        static queryBoxIsAlreadyAddedToQuery: boolean;
        _handleNewQuery(e: JQueryEventObject, data: Events.NewQueryEventArgs): void;
        private handleBuildingQuery(e, data);
        enterOnSearchBox(): void;
        triggerNewQuery(beforeExecuteQuery: () => void, searchAsYouType: boolean): void;
        private updateQueryState();
        private cancelAnyPendingSearchAsYouTypeTimeout();
    }
}
declare module Coveo.Ui {
    interface SearchButtonOptions {
    }
    class SearchButton extends Component {
        element: HTMLElement;
        options: SearchButtonOptions;
        static ID: string;
        constructor(element: HTMLElement, options?: SearchButtonOptions, bindings?: ComponentBindings);
        private handleClick();
    }
}
declare module Coveo.Ui {
    interface SearchBoxOptions extends OmniBoxOptions {
        activateOmniBox?: boolean;
        enableSearchAsYouType?: boolean;
        searchAsYouTypeDelay?: number;
        disableQuerySyntax?: boolean;
        enableWildcards?: boolean;
        enableQuestionMarks?: boolean;
        enableLowercaseOperators?: boolean;
        enablePartialMatch?: boolean;
        partialMatchKeywords?: number;
        partialMatchThreshold?: string;
        autoFocus?: boolean;
    }
    class SearchBox extends Coveo.Ui.Component {
        element: HTMLElement;
        options: SearchBoxOptions;
        static ID: string;
        static parent: typeof OmniBox;
        static options: OmniBoxOptions;
        searchButton: SearchButton;
        searchBox: QueryBox;
        constructor(element: HTMLElement, options?: SearchBoxOptions, bindings?: ComponentBindings);
        private buildInputTag();
    }
}
declare module Coveo.Ui {
    class OmniBox extends QueryBox {
        element: HTMLElement;
        options: OmniBoxOptions;
        static ID: string;
        static options: OmniBoxOptions;
        static parent: ComponentClass;
        private omniBoxHeaderSearchForTemplate;
        private omniBoxIsOpen;
        private omniBoxDiv;
        private numberOfPendingQueries;
        private omniBoxHeader;
        private lastOmniBoxRows;
        private lastOmniBoxData;
        private omniBoxRows;
        private isCurrentlyBeingRendered;
        private isLoadingData;
        private throttledCallForOmniBoxBody;
        private lastNumberOfLettersInOmniBox;
        private headerIsCurrentlyRendered;
        private wasClosed;
        constructor(element: HTMLElement, options: OmniBoxOptions, bindings?: ComponentBindings);
        close(): void;
        open(): void;
        private getDataForOmniboxBody();
        private buildOmniBoxRequestObject();
        private prepareThrottledCall();
        private requestOmniBoxData(dataToSearch);
        private getQueryExpressionBreakDown();
        _handleNewQuery(e: JQueryEventObject, data: Events.NewQueryEventArgs): void;
        _handleKeyUp(event: KeyboardEvent): void;
        _handleChange(event: JQueryEventObject): boolean;
        private handleHover(event);
        private bindOmniBoxEvent();
        private bindHoverEvent();
        private selectionEvent();
        private navigationEvent(event);
        private navigationEventWhenNoSelection(event);
        private navigationEventWhenSelection(event, alreadySelected);
        private keyBoardSelection();
        triggerNewQuery(beforeExecuteQuery: () => void): void;
        private processNewOmniBoxData(data);
        private renderHeader();
        private renderOmniBoxDiv();
        private setWidthOnOmniBoxDiv();
        private buildHeader();
        private renderOmniBoxBody(data);
        private rejectAllPendingDeferred(data);
        private allDeferredHaveArrived();
        private clearLastOmniBoxRows();
        private appendOmniBoxSections();
        private resetOmniBoxInternalData();
        private renderOmniBoxForOneElement(row);
        private renderOmniBoxForOneElementDeferred(row);
        private isFirstValueSelected(selected);
        private isLastValueSelected(selected);
        private unselectValueInOmnibox(alreadySelected);
        private selectValueBeforeAlreadySelected(alreadySelected);
        private selectValueAfterAlreadySelected(alreadySelected);
        private findPosOfAlreadySelected(alreadySelected);
        private findSelectable();
        private findSelected();
        private toggleSelected(newSelected);
        private getWidth();
        private getSearchButtonWidth();
        private getRegexToSearch(strValue?);
        private getCorrectTarget(event);
        private addSearchAnimation();
        private removeSearchAnimation();
    }
}
declare module Coveo.Ui {
    interface SuggestionForOmniBoxOptionsOnSelect {
        (value: string, args: Events.PopulateOmniBoxEventArgs): void;
    }
    interface SuggestionForOmniBoxOptions {
        omniboxZIndex?: number;
        headerTitle?: string;
        onSelect?: SuggestionForOmniBoxOptionsOnSelect;
        numberOfSuggestions?: number;
    }
    interface SuggestionForOmniBoxTemplate {
        header: {
            template: (...args: any[]) => string;
            title: string;
        };
        row: (...args: any[]) => string;
    }
    interface SuggestionForOmniBoxResult {
        value: string;
    }
    class SuggestionForOmniBox {
        structure: SuggestionForOmniBoxTemplate;
        onSelect: (value: string, args: Events.PopulateOmniBoxEventArgs) => void;
        constructor(structure: SuggestionForOmniBoxTemplate, onSelect: (value: string, args: Events.PopulateOmniBoxEventArgs) => void);
        buildOmniBoxElement(results: SuggestionForOmniBoxResult[], args: Events.PopulateOmniBoxEventArgs): JQuery;
        private buildElementHeader();
        private buildRowElements(results, args);
    }
}
declare module Coveo.Ui {
    interface OmniBoxResultListOptions extends ResultListOptions {
        omniboxZIndex?: number;
        onSelect?: (result: Rest.QueryResult, resultElement: JQuery, omniboxObject: Events.PopulateOmniBoxEventArgs) => void;
        headerTitle?: string;
        queryOverride?: string;
    }
    class OmniBoxResultList extends ResultList {
        element: HTMLElement;
        options: OmniBoxResultListOptions;
        bindings: ComponentBindings;
        static ID: string;
        static options: OmniBoxResultListOptions;
        private lastOmniboxRequest;
        private suggestionForOmniBox;
        constructor(element: HTMLElement, options?: OmniBoxResultListOptions, bindings?: ComponentBindings);
        _buildResults(results: Rest.QueryResults): void;
        private setupOptions();
        private handlePopulateOmniBox(e, args);
        private handleQueryOverride(e, args);
        private onRowSelection(result, resultElement, omniboxObject);
    }
}
declare module Coveo.Ui {
    interface PagerOptions {
        numberOfPages?: number;
        navigationButton?: boolean;
    }
    class Pager extends Component {
        element: HTMLElement;
        options: PagerOptions;
        static ID: string;
        static options: PagerOptions;
        currentPage: number;
        private listenToQueryStateChange;
        private ignoreNextQuerySuccess;
        private list;
        private listItemTemplate;
        private listItemValueTemplate;
        private navigationButtonTemplate;
        private needToReset;
        constructor(element: HTMLElement, options?: PagerOptions, bindings?: ComponentBindings);
        setPage(pageNumber: number, analyticCause?: AnalyticsActionCause): void;
        previousPage(): void;
        nextPage(): void;
        private handleNewQuery(e, data);
        private updateQueryStateModel(attrValue);
        private handleQueryError(e, data);
        private handleQuerySuccess(e, data);
        private handleNoResults(e, data);
        private reset();
        private handleBuildingQuery(e, data);
        private computePagerBoundary(firstResult, totalCount);
        private renderNavigationButton(pagerBoundary, list);
        private handleQueryStateModelChanged(e, data);
        private handleClickPage(pageNumber);
        private handleClickPrevious();
        private handleClickNext();
        private fromFirstResultsToPageNumber(firstResult);
        private getFirstResultNumber(pageNumber?);
        private getQueryEventArgs();
    }
}
declare module Coveo.Ui {
    interface PreferencePanelInputToBuild {
        label: string;
        placeholder?: string;
        tab?: string[];
        expression?: string;
        otherAttribute?: string;
    }
    class PreferencesPanelBoxInput {
        private boxInputToBuild;
        private nameOfInput;
        private type;
        inputs: {
            [label: string]: JQuery;
        };
        private inputTemplate;
        constructor(boxInputToBuild: PreferencePanelInputToBuild[], nameOfInput: string, type: string);
        build(): JQuery;
        select(toSelect: string): void;
        unselect(toUnselect: string): void;
        getSelected(): any;
        getSelecteds(): any[];
    }
    class PreferencesPanelRadioInput extends PreferencesPanelBoxInput {
        private radioElementToBuild;
        private name;
        constructor(radioElementToBuild: PreferencePanelInputToBuild[], name: string);
    }
    class PreferencesPanelCheckboxInput extends PreferencesPanelBoxInput {
        private checkboxElementToBuild;
        name: string;
        constructor(checkboxElementToBuild: PreferencePanelInputToBuild[], name: string);
        build(): JQuery;
    }
    class PreferencesPanelTextInput {
        textElementToBuild: PreferencePanelInputToBuild[];
        name: string;
        inputs: {
            [label: string]: JQuery;
        };
        inputTemplate: (...data: any[]) => string;
        constructor(textElementToBuild: PreferencePanelInputToBuild[], name: string);
        build(): JQuery;
        getValues(): any[];
        setValue(input: string, value: string): void;
        reset(): void;
        private getInput(input);
    }
    class PreferencesPanelTextAreaInput extends PreferencesPanelTextInput {
        inputTemplate: (...data: any[]) => string;
        build(): JQuery;
    }
    class PreferencePanelMultiSelectInput {
        private toBuild;
        options: string[];
        name: string;
        private textInput;
        private select;
        constructor(toBuild: PreferencePanelInputToBuild, options: string[], name: string);
        build(): JQuery;
        getValues(): any;
        setValues(values: string[]): void;
        reset(): void;
    }
}
declare module Coveo.Ui {
    interface PreferencesPanelOptions {
    }
    class PreferencesPanel extends Component implements Menu {
        element: HTMLElement;
        options: PreferencesPanelOptions;
        static ID: string;
        static options: PreferencesPanelOptions;
        constructor(element: HTMLElement, options: PreferencesPanelOptions, bindings?: ComponentBindings);
        getCssClass(): string;
        getMenuItems(): {
            text: any;
            onOpen: () => void;
            onClose: () => void;
        }[];
        open(): void;
        close(): void;
        save(): void;
        closeWithoutSave(): void;
        private buildCloseButton();
        private buildTitle();
    }
}
declare module Coveo.Ui.PhonegapUtils {
    function bindOpenLinkInPhonegap(element: HTMLElement, uri: string): void;
    function openInPhonegap(uri: string): void;
}
declare module Coveo.Ui {
    interface PrintableUriOptions {
    }
    class PrintableUri extends Component {
        element: HTMLElement;
        options: PrintableUriOptions;
        result: Rest.QueryResult;
        static ID: string;
        static options: PrintableUriOptions;
        private uri;
        constructor(element: HTMLElement, options: PrintableUriOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        renderParentsXml(element: HTMLElement, parentsXml: string): void;
        renderUri(element: HTMLElement, result?: Rest.QueryResult): void;
        buildSeperator(): HTMLSpanElement;
        buildEllipsis(): HTMLSpanElement;
        buildHtmlToken(name: string, uri: string): HTMLAnchorElement;
        private bindLogOpenDocument(link);
    }
}
declare module Coveo.Ui {
    interface QueryDurationOptions {
    }
    class QueryDuration extends Component {
        element: HTMLElement;
        options: QueryDurationOptions;
        static ID: string;
        static options: QueryDurationOptions;
        private textContainer;
        constructor(element: HTMLElement, options?: QueryDurationOptions, bindings?: ComponentBindings);
        private handleQuerySuccess(e, data);
        private formatQueryDuration(durationInMillis);
    }
}
declare module Coveo.Ui {
    interface QuerySummaryOptions {
        enableSearchTips?: boolean;
    }
    class QuerySummary extends Component {
        element: HTMLElement;
        options: QuerySummaryOptions;
        static ID: string;
        static options: QuerySummaryOptions;
        private textContainer;
        constructor(element: HTMLElement, options?: QuerySummaryOptions, bindings?: ComponentBindings);
        private handleQuerySuccess(e, data);
        private displayInfoOnNoResults();
    }
}
declare module Coveo {
    class EmailActionsUtils {
        static buildMailToString(options: Ui.MailToOptions): string;
        static buildMailToParametersString(subject: string, cc: string, bcc: string, body: string, mailTo: string): string;
        static getShortenBody(body: string, mailTo: string): string;
        static buildMailToParameter(name: string, param: string): string;
        static shortenString(str: string, maxLength: number, encodeShortenBodyIndication?: boolean): string;
        static appendShortenBodyToMailToString(mailTo: string, body: string): string;
        static removeCurrentUserEmailFromString(currentUserEmail: string, str: string): string;
        static buildReplyMailToFromResult(result: Rest.QueryResult, currentUserEmail: string): Ui.MailTo;
        static buildReplyAllMailToFromResult(result: Rest.QueryResult, currentUserEmail: string): Ui.MailTo;
        static buildForwardMailToFromResult(result: Rest.QueryResult, currentUserEmail: string): Ui.MailTo;
        static encodeMailToBody(body: string): string;
    }
}
declare module Coveo.Ui {
    interface MailToOptions {
        currentUserEmail?: string;
        originalFrom?: string;
        to?: string;
        subject?: string;
        cc?: string;
        bcc?: string;
        body?: string;
        bodyIsHTML?: boolean;
    }
    class DefaultMailToOptions extends Options implements MailToOptions {
        currentUserEmail: string;
        originalFrom: string;
        to: string;
        subject: string;
        cc: string;
        bcc: string;
        body: string;
        bodyIsHTML: boolean;
    }
    class MailTo {
        options: MailToOptions;
        private value;
        private toArray;
        private ccArray;
        private bccArray;
        private body;
        private bodyHeader;
        static enter: string;
        static shortenBodyIndicator: string;
        static maxLength: number;
        static phonegapMaxLength: number;
        constructor(options?: MailToOptions);
        private removeCurrentUserFromParameters();
        private setRecipientsArrays();
        open(): void;
        private getEmailOpenerObject(shortenBody);
        private ensureValueIsSet();
        private setValue();
        private setValueBody();
        setMailToBodyFromText(text?: string): void;
        private valueBodyIsSet();
        bodyIsSet(): boolean;
    }
}
declare module Coveo.Ui {
    interface EmailActionsOptions {
        currentUserEmail?: string;
        reply?: boolean;
        replyAll?: boolean;
        forward?: boolean;
    }
    class EmailActions extends Coveo.Ui.Component {
        element: HTMLElement;
        options: EmailActionsOptions;
        private result;
        static ID: string;
        static options: EmailActionsOptions;
        private reply;
        private replyAll;
        private forward;
        loadingAnimation: JQuery;
        constructor(element: HTMLElement, options: EmailActionsOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        private createAndAppendEmailActions();
        private appendWaitingAnimation();
    }
}
declare module Coveo.Ui {
    interface EmailActionOptions {
        type: string;
        currentUserEmail?: string;
    }
    class EmailAction extends Coveo.Ui.Component {
        element: HTMLElement;
        private actions;
        options: EmailActionOptions;
        private result;
        static ID: string;
        static options: EmailActionOptions;
        static forward: string;
        static reply: string;
        static replyAll: string;
        private mailTo;
        constructor(element: HTMLElement, actions: EmailActions, options?: EmailActionOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        private showWaitingAnimation();
        private hideWaitingAnimation();
        private setMailToFromResult();
        private appendBodyToMailTo(callback);
        private doneRetrieveBody(res, callback);
        private openMailTo();
    }
}
declare module Coveo.Ui {
    interface QuickViewDocumentOptions {
        maximumDocumentSize?: number;
        allowedZoom?: boolean;
        minimumZoom?: number;
        maximumZoom?: number;
    }
    class QuickViewDocument extends Component {
        element: HTMLElement;
        options: QuickViewDocumentOptions;
        result: Rest.QueryResult;
        static ID: string;
        static options: QuickViewDocumentOptions;
        private iframe;
        private header;
        private termsToHighlightWereModified;
        private keywordsState;
        constructor(element: HTMLElement, options?: QuickViewDocumentOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        createDom(): void;
        open(): void;
        private renderHTMLDocument(iframe, html);
        private renderErrorReport(iframe);
        private writeToIFrame(iframe, content);
        private writeToIFrame(iframe, content);
        private bindOpenIframeLinksInPhonegap(iframe);
        private wrapPreElementsInIframe(iframe);
        private triggerQuickviewLoaded(beforeLoad);
        computeHighlights(window: Window): string[];
        private getHighlightIdParts(element);
        private getHighlightInnerText(element);
        private getHightlightEmbeddedWordIdParts(element);
        private resolveOriginalTermFromHighlight(highlight);
        private buildWordButton(wordState, window);
        private navigate(state, backward, window);
        private buildHeader();
        private buildIFrame();
        private getScrollingElement(iframeWindow);
        private isNewQuickViewDocument(iframeWindow);
        private handleTermsToHighlight(termsToHighlight, queryObject);
        private checkIfTermsToHighlightWereModified(termsToHighlight);
        private getSaturatedColor(color);
    }
}
declare module Coveo.Ui {
    class DefaultQuickViewTemplate extends Template {
        constructor();
        instantiateToString(queryResult?: Rest.QueryResult): string;
    }
}
declare module Coveo.Ui {
    interface QuickViewOptions {
        title?: string;
        showDate?: boolean;
        contentTemplate?: Template;
        showLoadingAnimation?: boolean;
        loadingAnimation?: HTMLElement;
    }
    class QuickView extends Component {
        element: HTMLElement;
        options: QuickViewOptions;
        bindings: ResultsComponentBindings;
        result: Rest.QueryResult;
        static ID: string;
        static quickViewLinkTemplate: (...data: any[]) => string;
        static options: QuickViewOptions;
        dialogBoxContent: JQuery;
        private link;
        private modalbox;
        constructor(element: HTMLElement, options?: QuickViewOptions, bindings?: ResultsComponentBindings, result?: Rest.QueryResult);
        open(): void;
        close(): void;
        private createLinkAndAppendItToDom(result);
        private bindClick(result);
        private bindQuickViewEvents(openerObject);
        private animateAndOpen();
        private createModalBox(openerObject);
        private prepareOpenQuickViewObject();
        private prepareQuickViewContent(loadingAnimation);
        private resizeIFrame();
        private getQuickViewHeader();
        private bindEscape();
    }
}
declare module Coveo.Ui {
    class DefaultResultAttachmentTemplate extends Template {
        constructor();
        instantiateToString(queryResult?: Rest.QueryResult): string;
    }
}
declare module Coveo.Ui {
    interface ResultAttachmentsOptions {
        resultTemplate?: Template;
        subResultTemplate?: Template;
        maximumAttachmentLevel?: number;
    }
    class ResultAttachments extends Component {
        element: HTMLElement;
        options: ResultAttachmentsOptions;
        bindings: ComponentBindings;
        attachmentLevel: number;
        static ID: string;
        static options: ResultAttachmentsOptions;
        private attachments;
        constructor(element: HTMLElement, options?: ResultAttachmentsOptions, bindings?: ComponentBindings, result?: Rest.QueryResult, attachmentLevel?: number);
        private renderAttachments();
        private attachmentHasSubAttachment(attachment);
        private autoCreateComponentsInsideResult(element, result);
    }
}
declare module Coveo.Ui {
    class DefaultFoldingTemplate extends Template {
        constructor();
        instantiateToString(queryResult?: Rest.QueryResult): string;
    }
}
declare module Coveo.Ui {
    interface ResultFoldingOptions {
        resultTemplate: Template;
        normalCaption: string;
        expandedCaption: string;
        moreCaption: string;
        lessCaption: string;
        oneResultCaption: string;
    }
    class ResultFolding extends Ui.Component {
        element: HTMLElement;
        options: ResultFoldingOptions;
        result: Rest.QueryResult;
        static ID: string;
        static options: ResultFoldingOptions;
        private normalCaption;
        private expandedCaption;
        private onlyOneMessageCaption;
        private results;
        private showMore;
        private showLess;
        private waitAnimation;
        private moreResultsDeferred;
        private showingMoreResults;
        constructor(element: HTMLElement, options?: ResultFoldingOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        showMoreResults(): void;
        showLessResults(): void;
        private buildElements();
        private buildHeader();
        private buildResults();
        private buildFooter();
        private updateElementVisibility(subResultsLength?);
        private scrollToResultElement();
        private displayThoseResults(results);
        private renderChildResult(childResult);
        private autoCreateComponentsInsideResult(element, result);
        private cancelAnyPendingShowMore();
    }
}
declare module Coveo.Ui {
    interface ResultLinkOptions {
        onClick?: (e: JQueryEventObject, result: Rest.QueryResult) => any;
        field?: string;
        openInOutlook?: boolean;
        openQuickview?: boolean;
        alwaysOpenInNewWindow?: boolean;
    }
}
declare module Coveo.OSUtils {
    enum NAME {
        WINDOWS = 0,
        MACOSX = 1,
        UNIX = 2,
        LINUX = 3,
        UNKNOWN = 4,
    }
    function get(nav?: Navigator): any;
}
declare module Coveo.Ui {
    class ResultLink extends Component {
        element: HTMLElement;
        options: ResultLinkOptions;
        bindings: ResultsComponentBindings;
        result: Rest.QueryResult;
        os: OSUtils.NAME;
        static ID: string;
        static options: ResultLinkOptions;
        constructor(element: HTMLElement, options?: ResultLinkOptions, bindings?: ResultsComponentBindings, result?: Rest.QueryResult, os?: OSUtils.NAME);
        protected bindEventToOpen(): boolean;
        private bindOnClickIfNotUndefined();
        private bindOpenQuickViewIfNotUndefined();
        private openLinkThatIsNotAnAnchor();
        private setHrefIfNotAlready();
        private bindPhonegapClick();
        private logOpenDocument();
        private getResultUri();
        private elementIsAnAnchor();
        private setField();
        private hasOutlookField();
        private isUriThatMustBeOpenedInQuickView();
        private shouldBeOpenedInQuickView();
    }
}
declare module Coveo.Ui {
    interface ResultFilterPreference {
        selected?: boolean;
        custom?: boolean;
        tab?: string[];
        caption: string;
        expression: string;
    }
    interface ResultsFiltersPreferencesOptions {
        filters?: {
            [caption: string]: {
                expression: string;
                tab?: string[];
            };
        };
        includeInBreadcrumb?: boolean;
        showAdvancedFilters?: boolean;
    }
    class ResultsFiltersPreferences extends Component {
        element: HTMLElement;
        options: ResultsFiltersPreferencesOptions;
        bindings: ComponentBindings;
        static ID: string;
        static options: ResultsFiltersPreferencesOptions;
        preferences: {
            [caption: string]: ResultFilterPreference;
        };
        private preferencePanelLocalStorage;
        private preferencePanel;
        private preferenceContainer;
        private preferencePanelCheckboxInput;
        private advancedFilters;
        private advancedFiltersBuilder;
        private advancedFiltersTextInputCaption;
        private advancedFiltersTextInputExpression;
        private advancedFiltersTabSelect;
        private advancedFilterFormValidate;
        constructor(element: HTMLElement, options: ResultsFiltersPreferencesOptions, bindings: ComponentBindings);
        createDom(): void;
        save(): void;
        exitWithoutSave(): void;
        private bindPreferencePanelEvent();
        private bindBreadcrumbEvent();
        private bindQueryEvent();
        private handleBuildingQuery(e, args);
        private handlePopulateBreadcrumb(e, args);
        private handleClearBreadcrumb(e, args);
        private buildTitle();
        private buildAdvancedFilters();
        private buildAdvancedFilterInput();
        private buildAdvancedFilterFormValidate();
        private getAdvancedFiltersTextInputToBuild();
        private getAllTabs();
        private getPreferencesBoxInputToBuild();
        private buildCheckboxesInput();
        private buildDeleteAdvancedFilter();
        private buildEditAdvancedFilter();
        private buildBreadcrumb(filter);
        private confirmDelete(filter, filterElement);
        private editElement(filter, filterElement);
        private populateEditSection(toPopulate?);
        private deleteFilterPreference(filter, filterElement);
        private openAdvancedFilterSectionOrSaveFilters();
        private validateAndSaveAdvancedFilter(e);
        private fromPreferencesToCheckboxInput();
        private fromCheckboxInputToPreferences();
        private getDormantFilters();
        private getActiveFilters();
        private getInactiveFilters();
        private getActiveTab();
        private filterIsInActiveTab(filter, tab);
        private getFilterElementByCaption(caption);
        private fromResultsFilterOptionToResultsPreferenceInterface(filters?);
        private mergeLocalPreferencesWithStaticPreferences();
        private fromFilterToAnalyticsEvent(filter, type);
    }
}
declare module Coveo.Ui {
    interface ResultsPreferencesOptions {
        showOpenInOutlook?: boolean;
        showOpenInNewWindow?: boolean;
    }
    class ResultsPreferences extends Component {
        element: HTMLElement;
        options: ResultsPreferencesOptions;
        bindings: ComponentBindings;
        static ID: string;
        static options: ResultsPreferencesOptions;
        preferences: ResultLinkOptions;
        private preferencePanelLocalStorage;
        private preferencePanel;
        private preferencePanelCheckboxInput;
        constructor(element: HTMLElement, options: ResultsPreferencesOptions, bindings: ComponentBindings);
        save(): void;
        exitWithoutSave(): void;
        private updateComponentOptionsModel();
        private buildTitle();
        private buildCheckboxesInput();
        private fromCheckboxInputToPreferences();
        private fromPreferencesToCheckboxInput();
        private fromPreferenceChangeEventToUsageAnalyticsLog(e);
    }
}
declare module Coveo.Ui {
    interface ResultTaggingOptions {
        field: string;
        suggestBoxSize?: number;
        autoCompleteTimer?: number;
    }
    interface AnalyticsResultTaggingMeta {
        facetId: string;
        facetValue?: string;
        facetTitle?: string;
    }
    class ResultTagging extends Component {
        element: HTMLElement;
        options: ResultTaggingOptions;
        result: Rest.QueryResult;
        os: OSUtils.NAME;
        static ID: string;
        static options: ResultTaggingOptions;
        static AUTO_COMPLETE_CLASS: string;
        private autoCompleteZone;
        private textBox;
        private autoCompletePopup;
        private tagZone;
        private tags;
        constructor(element: HTMLElement, options?: ResultTaggingOptions, bindings?: ComponentBindings, result?: Rest.QueryResult, os?: OSUtils.NAME);
        private buildExistingTags();
        private buildTagIcon();
        private focusOnTextBox();
        private buildTagValue(tagValue);
        private buildShortenedTagWithTitle(tagValue);
        private buildTextBox();
        private buildAddIcon();
        private buildClearIcon();
        private bindFacetEventOnValue(element, value);
        private clearPopup();
        private showPopup();
        private populateSuggestions();
        private manageAutocompleteAutoHide();
        /**
         Exclude tags that are already on the result (Since we can tag with the same value twice)
         **/
        private buildRegEx(searchTerm);
        private buildTermToExclude(term);
        private manageUpDownEnter(code);
        private computeNextIndex(code, selectableArray);
        private buildSelectableValue(lookupValue);
        private doRemoveTag(element, tagValue);
        private doAddTagWithValue(tagValue);
        private doAddSingleTagValue(tagValue);
        private doAddTag();
    }
}
declare module Coveo.Ui {
    interface SettingsOptions {
        includeInMenu: string[];
        menuDelay: number;
    }
    class Settings extends Component {
        element: HTMLElement;
        options: SettingsOptions;
        static ID: string;
        static options: SettingsOptions;
        private menu;
        private settingsButton;
        constructor(element: HTMLElement, options: SettingsOptions, bindings?: ComponentBindings);
        init(): void;
        private buildMenu();
        private buildSection(menuData);
        private buildLine(text, onOpen, otherMenu, otherMenuItems);
        private toggleMenu();
        private getPopupPositioning();
    }
}
declare module Coveo.Ui {
    interface ShareQueryOptions {
    }
    class ShareQuery extends Component implements Menu {
        element: HTMLElement;
        options: ShareQueryOptions;
        static ID: string;
        static options: ShareQueryOptions;
        dialogBoxContent: JQuery;
        private linkToThisQuery;
        private completeQuery;
        constructor(element: HTMLElement, options: ShareQueryOptions, bindings?: ComponentBindings);
        open(): void;
        close(): void;
        getCssClass(): string;
        getMenuItems(): MenuItem[];
        private handleProcessNewQueryResults(e, data);
        private outputIfNotNull(value);
        private buildContent();
        private buildTextBoxWithLabel(label, input);
        static create(element: HTMLElement, options?: ShareQueryOptions, root?: HTMLElement): ShareQuery;
    }
}
declare module Coveo.Ui {
    interface SortOptions {
        sortCriteria?: SortCriteria[];
        caption?: string;
    }
    class Sort extends Component {
        element: HTMLElement;
        options: SortOptions;
        static ID: string;
        static options: SortOptions;
        private currentCriteria;
        constructor(element: HTMLElement, options?: SortOptions, bindings?: ComponentBindings);
        select(direction?: string, silent?: boolean): void;
        disable(): void;
        enable(): void;
        getCurrentCriteria(): SortCriteria;
        private handleQueryStateChanged(e, data);
        private handleBuildingQuery(e, data);
        private handleQuerySuccess(e, data);
        private handleClick();
        private isToggle();
        private isSelected();
        private updateAppearance();
        match(sortId: string): boolean;
    }
}
declare module Coveo.Ui {
    interface StandaloneLoginOptions extends LoginOptions {
        requirePageSettings?: boolean;
        includeDemoSection?: boolean;
    }
    class StandaloneLogin extends Login {
        element: HTMLElement;
        options: StandaloneLoginOptions;
        static ID: string;
        private demoContainer;
        private newToCoveoSection;
        private demoCoveoSection;
        static options: StandaloneLoginOptions;
        constructor(element: HTMLElement, options?: StandaloneLoginOptions, bindings?: ComponentBindings);
        getOrCreateContainerForDemo(): JQuery;
        private buildAllDemo();
        private buildDemoSection();
        private buildNewToCoveoSection();
        private showDemoSection();
        private hideDemoSection();
    }
}
declare module Coveo.Ui {
    class StandaloneResult {
        searchInterface: SearchInterface;
        result: Rest.QueryResult;
        element: HTMLElement;
        constructor(searchInterface: SearchInterface, resultTemplate: Template, result: Rest.QueryResult);
        private initialize();
    }
}
declare module Coveo.Ui {
    interface TemplateLoaderOptions {
        template: Template;
        condition?: String;
    }
    class TemplateLoader extends Component {
        element: HTMLElement;
        options: TemplateLoaderOptions;
        bindings: ComponentBindings;
        result: Rest.QueryResult;
        static ID: string;
        static options: TemplateLoaderOptions;
        constructor(element: HTMLElement, options?: TemplateLoaderOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        private initialize();
    }
}
declare module Coveo.Ui {
    interface TabGroupMenuOptions {
        menuDelay?: number;
    }
    class TabGroupMenu extends Component {
        options: TabGroupMenuOptions;
        static ID: string;
        static options: TabGroupMenuOptions;
        private menuItems;
        private activeMenuItem;
        private menuItemsContainer;
        private activeMenuItemDisplay;
        private menuIsOpen;
        private menuItemsContainerTemplate;
        private activeMenuItemTemplate;
        private activeMenuItemIconTemplate;
        private activeMenuItemCaptionTemplate;
        constructor(element: HTMLElement, options?: TabGroupMenuOptions, bindings?: ComponentBindings);
        open(): void;
        close(): void;
        private handleClick(e);
        private handleClickOnMenuItem(e);
        private handleClickOnMenu();
        private handleMouseLeave(e);
        private handleAfterInitialization();
        private handleQueryStateChange(e, args);
        private initMenuItems();
        private initQueryStateEvents();
        private initMiscEvents();
        private renderDisplayActiveMenuItem();
        private renderMenu();
        private selectMenuItem(menuItem);
        private getItemInMenuById(id);
        private getItemInMenuByElement(element);
        private getInactiveMenuItems();
        private getItemMenuClass();
        private getCorrectTarget(e);
        private targetIsAMenuItem(e);
    }
}
declare module Coveo.Ui {
    interface TabGroupOptions {
        id?: string;
        icon?: string;
        expression?: string;
    }
    class TabGroup extends Component {
        options: TabGroupOptions;
        static ID: string;
        static options: TabGroupOptions;
        private title;
        private isSelected;
        private iconTemplate;
        constructor(element: HTMLElement, options?: TabGroupOptions, bindings?: ComponentBindings);
        select(): void;
        getTitle(): string;
        getIcon(): string;
        getId(): string;
        private actionOnSelect();
        private actionOnUnSelect();
        private updateQueryStateModel();
        private initQueryEvents();
        private initQueryStateEvents();
        private handleBuildingQueryEvents(e, args, foo);
        private handleQueryStateChange(e, args);
        private hideTabsNotInThisGroup();
        private getAllVisibleTab();
        private getAllTabs();
        isElementIncludedInTabGroup(element: HTMLElement): boolean;
    }
}
declare module Coveo.Ui {
    interface ToggleButtonOptions {
        toggleClass?: string;
        target: string;
        activateGlass?: boolean;
    }
    class ToggleButton extends Component {
        element: HTMLElement;
        options: ToggleButtonOptions;
        static ID: string;
        static options: ToggleButtonOptions;
        private classToToggle;
        private target;
        private activateGlass;
        constructor(element: HTMLElement, options?: ToggleButtonOptions, bindings?: ComponentBindings);
        private handleClick();
        private handleTabChanged();
        private addToggleClass();
        private removeToggleClass();
        private getGlass();
        private buildGlass();
    }
}
declare module Coveo.Ui {
    interface TopAnalyticsSuggestionsOptions extends SuggestionForOmniBoxOptions {
    }
    class TopAnalyticsSuggestions extends Coveo.Ui.Component {
        options: TopAnalyticsSuggestionsOptions;
        static ID: string;
        static options: TopAnalyticsSuggestionsOptions;
        private suggestionForOmniBox;
        private partialQueries;
        private lastSuggestions;
        private topAnalyticsElementHeaderTemplate;
        private topAnalyticsElementRowTemplate;
        constructor(element: HTMLElement, options: TopAnalyticsSuggestionsOptions, bindings?: ComponentBindings);
        private resultsToBuildWith;
        private handlePopulateOmnibox(e, args);
        private onRowSelection(value, args);
        private resolveWithUndefined(deferred);
        private cleanCustomData(toClean, rejectLength?);
    }
}
declare module Coveo.Ui {
    interface TopFieldSuggestionsOptions extends SuggestionForOmniBoxOptions {
        field?: string;
        queryOverride?: string;
    }
    class TopFieldSuggestions extends Coveo.Ui.Component {
        options: TopFieldSuggestionsOptions;
        static ID: string;
        static options: TopFieldSuggestionsOptions;
        private suggestionForOmniBox;
        private topFieldElementHeaderTemplate;
        private topFieldElementRowTemplate;
        constructor(element: HTMLElement, options: TopFieldSuggestionsOptions, bindings?: ComponentBindings);
        private handlePopulateOmniBox(e, args);
        private resolveWithUndefined(deferred);
        private onRowSelection(value, args);
        private buildListFieldValueRequest(valueToSearch);
    }
}
declare module Coveo.Ui {
    interface TriggersOptions {
    }
    class Triggers extends Component {
        element: HTMLElement;
        options: TriggersOptions;
        bindings: ComponentBindings;
        _window: Window;
        static ID: string;
        static options: TriggersOptions;
        constructor(element: HTMLElement, options?: TriggersOptions, bindings?: ComponentBindings, _window?: Window);
        private handleProcessNewQueryResults(e, data);
        private executeTriggers(Triggers, type, func, single?);
    }
}
declare module Coveo.Ui {
    interface ChatterPostedByOption {
        enablePostedOn: boolean;
        useFromInstead: boolean;
    }
    class ChatterPostedBy extends Coveo.Ui.Component {
        element: HTMLElement;
        options: ChatterPostedByOption;
        bindings: ComponentBindings;
        result: Rest.QueryResult;
        static ID: string;
        static options: ChatterPostedByOption;
        constructor(element: HTMLElement, options?: ChatterPostedByOption, bindings?: ComponentBindings, result?: Rest.QueryResult);
    }
}
declare module Coveo.Ui {
    interface ChatterLikedByOption {
        nbLikesToRender: number;
    }
    class ChatterLikedBy extends Coveo.Ui.Component {
        element: HTMLElement;
        options: ChatterLikedByOption;
        bindings: ComponentBindings;
        result: Rest.QueryResult;
        static ID: string;
        static options: ChatterLikedByOption;
        constructor(element: HTMLElement, options?: ChatterLikedByOption, bindings?: ComponentBindings, result?: Rest.QueryResult);
        private renderLikesList(element, result, likeNames, likeIds, nbLikesToRender);
        private renderLikeLink(result, likeName, likeId);
    }
}
declare module Coveo.Ui {
    interface ChatterTopicOption {
    }
    class ChatterTopic extends Coveo.Ui.Component {
        element: HTMLElement;
        options: ChatterTopicOption;
        bindings: ComponentBindings;
        result: Rest.QueryResult;
        static ID: string;
        constructor(element: HTMLElement, options?: ChatterTopicOption, bindings?: ComponentBindings, result?: Rest.QueryResult);
    }
}
declare module Coveo.Ui {
    interface ChatterPostAttachmentOption {
    }
    class ChatterPostAttachment extends Coveo.Ui.Component {
        element: HTMLElement;
        options: ChatterPostAttachmentOption;
        bindings: ComponentBindings;
        result: Rest.QueryResult;
        static ID: string;
        constructor(element: HTMLElement, options?: ChatterPostAttachmentOption, bindings?: ComponentBindings, result?: Rest.QueryResult);
    }
}
declare module Coveo.Ui {
    interface ThumbnailOptions {
        noThumbnailClass?: string;
    }
    class Thumbnail extends Component {
        element: HTMLElement;
        options: ThumbnailOptions;
        bindings: ComponentBindings;
        result: Rest.QueryResult;
        static ID: string;
        static options: ThumbnailOptions;
        constructor(element: HTMLElement, options?: ThumbnailOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        private buildThumbnailImage();
        private buildImageWithDirectSrcAttribute(endpoint);
        private buildImageWithBase64SrcAttribute(endpoint);
        private setEmptyThumbnailClass();
    }
}
declare module Coveo.Ui {
    enum RatingValues {
        Undefined = 0,
        Lowest = 1,
        Low = 2,
        Average = 3,
        Good = 4,
        Best = 5,
    }
    interface ResultRatingOptions {
    }
    class ResultRating extends Coveo.Ui.Component {
        element: HTMLElement;
        options: ResultRatingOptions;
        bindings: ComponentBindings;
        result: Rest.QueryResult;
        static ID: string;
        constructor(element: HTMLElement, options?: ResultRatingOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        private renderComponent(element, rating);
        private renderStars(element, isChecked, value);
        rateDocument(rating: RatingValues): void;
    }
}
declare module Coveo.Ui {
    interface TextOptions {
        value?: string;
    }
    class Text extends Component {
        element: HTMLElement;
        options: TextOptions;
        static ID: string;
        static options: SortOptions;
        constructor(element: HTMLElement, options?: TextOptions, bindings?: ComponentBindings);
    }
}
declare var userActionsHandler: Coveo.Ui.UserActionsHandler;
declare module Coveo.Ui {
    interface UserActionsOptions {
        filters?: string[];
        showButton?: boolean;
        enableBindOnBox?: boolean;
    }
    interface APIAnalyticsEvent {
        type: string;
        dateTime: number;
        eventMetadata: any;
    }
    interface APIAnalyticsSession {
        events: APIAnalyticsEvent[];
        numberOfEvents: number;
        visitId: string;
    }
    interface APIAnalyticsVisitResponse {
        visits: APIAnalyticsSession[];
        totalNumberOfVisits: number;
        message?: string;
        type?: string;
    }
    interface UserActionsHandler {
        getDataFromUA: (callback: any) => any;
    }
    class UserActions extends Component {
        element: HTMLElement;
        options: UserActionsOptions;
        bindings: ComponentBindings;
        static ID: string;
        static DEFAULT_FILTERS: string[];
        static options: UserActionsOptions;
        private eventListBox;
        private loadingBox;
        private handler;
        constructor(element: HTMLElement, options?: UserActionsOptions, bindings?: ComponentBindings);
        setHandler(handler: UserActionsHandler): void;
        setFilters(filters: string[]): void;
        private render();
        open(): void;
        toggle(): void;
        close(): void;
        private renderEvents(visits);
        private renderPlaceholder();
        private renderEvent(event);
        private renderField(fieldTitle, fieldValue);
        private renderLinkField(fieldTitle, fieldValue, fieldLink);
        private renderHeaderBox(session);
        private renderButton();
    }
}
declare var attachToCaseHandler: Coveo.Ui.AttachToCaseHandler;
declare var attachToCaseInitDefer: any;
declare var attachToCaseInitDefer_LEGACY: any;
declare module Coveo.Ui {
    interface AttachToCaseHandler {
        attachedResults: {
            [name: string]: string;
        };
        attachToCase: (result: Rest.QueryResult) => boolean;
        detachFromCase: (attachToCaseId: string, resultHash: string, kbId: string) => boolean;
        caseId: string;
    }
    interface AttachToCaseOptions {
    }
    class AttachToCase extends Component {
        element: HTMLElement;
        options: AttachToCaseOptions;
        result: Rest.QueryResult;
        static ID: string;
        constructor(element: HTMLElement, options?: AttachToCaseOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        private buildAttachToCaseButton();
        isAttached(): boolean;
        attachToCase(): void;
    }
}
