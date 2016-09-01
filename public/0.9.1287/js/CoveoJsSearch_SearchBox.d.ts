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
