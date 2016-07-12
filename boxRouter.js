"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var fs = require('fs');
var _ = require('underscore');
var router_1 = require('./router');
var page = _.template(fs.readFileSync(__dirname + '/page.ejs', { encoding: 'utf8' }));
var editPage = fs.readFileSync(__dirname + '/edit/box.html', { encoding: 'utf8' });
var JsSearchRouter = (function (_super) {
    __extends(JsSearchRouter, _super);
    function JsSearchRouter() {
        _super.call(this, 'box');
        this.record = {
            "assetid": null,
            "lastmodifiedbyid": "005i0000001PxLvAAK",
            "user__userid": "005i0000001PxLvAAK",
            "suppliedname": null,
            "user__lastname": "Lamothe",
            "engineeringreqnumber__c": "765876",
            "casenumber": "00001000",
            "lastvieweddate": "2014-12-08T18:40:29.000Z",
            "ownerid": "005i0000001PxLvAAK",
            "createddate": "2013-10-28T14:33:44.000Z",
            "user__usertype": "Standard",
            "product__c": "GC5040",
            "origin": "Phone",
            "user__firstname": "Olivier",
            "hascommentsunreadbyowner": false,
            "suppliedphone": null,
            "user__username": "olamothe@44demo.com",
            "isescalated": false,
            "status": "Closed",
            "user__userroleid": null,
            "potentialliability__c": "No",
            "user__name": "Olivier Lamothe",
            "accountid": "001i000000SYuLdAAL",
            "suppliedcompany": null,
            "systemmodstamp": "2013-10-28T14:33:44.000Z",
            "user__language": "en_US",
            "isdeleted": false,
            "priority": "High",
            "description": null,
            "user__profile": "00ei00000019garAAA",
            "user__useremail": "olamothe@coveo.com",
            "id": "500i0000004BhTYAA0",
            "lastmodifieddate": "2013-10-28T14:33:44.000Z",
            "createdbyid": "005i0000001PxLvAAK",
            "contactid": "003i000000PDWasAAH",
            "type": "Electrical",
            "closeddate": "2012-09-09T18:59:51.000Z",
            "suppliedemail": null,
            "parentid": null,
            "slaviolation__c": "No",
            "hasselfservicecomments": false,
            "subject": "Starting generator after electrical failure it's nice",
            "reason": "Equipment Complexity",
            "isclosed": true,
            "user__locale": "en_CA"
        };
        this.coveoFieldNames = ["@sfemaildomainnames", "@concepts", "@from", "@participants", "@sfaccount", "@sfamountconverted", "@sfcasenumber", "@sfclosequarter", "@sfcountry", "@sfindustry", "@sfshippingcity", "@sfshippingstate", "@sfstagename", "@sfstatus", "@title", "@workemail", "@uri"];
        this.fieldLabels = {
            "AssetId": "Asset ID",
            "SuppliedCompany": "Company",
            "Id": "Case ID",
            "ContactId": "Contact ID",
            "IsDeleted": "Deleted",
            "HasCommentsUnreadByOwner": "New Self-Service Comment",
            "CreatedDate": "Created Date",
            "CreatedById": "Created By ID",
            "AccountId": "Account ID",
            "SuppliedEmail": "Email Address",
            "olamothecoveo__PotentialLiability__c": "Potential Liability",
            "Status": "Status",
            "Priority": "Priority",
            "ClosedDate": "Closed Date",
            "Subject": "Subject",
            "LastModifiedById": "Last Modified By ID",
            "Description": "Description",
            "Reason": "Case Reason",
            "CaseNumber": "Case Number",
            "olamothecoveo__EngineeringReqNumber__c": "Engineering Req Number",
            "olamothecoveo__Product__c": "Product",
            "SystemModstamp": "System Modstamp",
            "olamothecoveo__SLAViolation__c": "SLA Violation",
            "IsClosed": "Closed",
            "IsEscalated": "Escalated",
            "HasSelfServiceComments": "Self-Service Commented",
            "SuppliedName": "Name",
            "Origin": "Case Origin",
            "SuppliedPhone": "Phone",
            "LastModifiedDate": "Last Modified Date",
            "OwnerId": "Owner ID",
            "Type": "Case Type",
            "ParentId": "Parent Case ID"
        };
        this.extensions = [{
                "name": "join",
                "argumentNames": ["fromResultSet", "toResultSet", "fromField", "toField", "field", "fromAggregateConditions", "maximumValues"]
            }, { "name": "sum", "argumentNames": ["resultSet", "field"] }, {
                "name": "aggregate",
                "argumentNames": ["resultSet", "field", "operation"]
            }, { "name": "average", "argumentNames": ["resultSet", "field"] }, {
                "name": "minimum",
                "argumentNames": ["resultSet", "field"]
            }, { "name": "maximum", "argumentNames": ["resultSet", "field"] }, {
                "name": "queryRankingExpression",
                "argumentNames": ["expression", "modifier"]
            }, { "name": "resultsOfType", "argumentNames": ["name"] }, {
                "name": "valuesOfField",
                "argumentNames": ["resultSet", "field", "aggregateConditions", "maximum", "sortOrder"]
            }, { "name": "keepMatchingValues", "argumentNames": ["regex", "values"] }, {
                "name": "removeMatchingValues",
                "argumentNames": ["regex", "values"]
            }, { "name": "removeEmptyValues", "argumentNames": ["values"] }, {
                "name": "removeDuplicateValues",
                "argumentNames": ["values"]
            }, {
                "name": "replaceInValues",
                "argumentNames": ["regex", "replacement", "values", "removeNonMatchingValues", "removeEmptyValues", "removeDuplicateValues"]
            }, { "name": "mergeValues", "argumentNames": ["first", "second"] }, {
                "name": "valuesToResultSet",
                "argumentNames": ["values", "field"]
            }, { "name": "joinOnValues", "argumentNames": ["resultSet", "field", "values"] }, {
                "name": "filterJoin",
                "argumentNames": ["localResultSet", "externalResultSet", "localField", "externalField", "field", "aggregateConditions", "maximumValues"]
            }, {
                "name": "correlateListOfValues",
                "argumentNames": ["values", "field", "modifier", "useFullText", "forceOneMatch"]
            }, {
                "name": "correlateResultSet",
                "argumentNames": ["resultSet", "fromField", "toField", "field", "maximumValues", "sortOrder", "modifier", "useFullText", "forceOneMatch"]
            }, { "name": "correlateUsingIdf", "argumentNames": ["keywords", "forceOneMatch"] }, {
                "name": "extractEmailAddresses",
                "argumentNames": ["values"]
            }, { "name": "extractEmailDomains", "argumentNames": ["values"] }, {
                "name": "emailsExchangedWithThoseAddresses",
                "argumentNames": ["addresses"]
            }, {
                "name": "participantsForThoseEmails",
                "argumentNames": ["emails", "sortBy", "maximum"]
            }, { "name": "personsWithThoseEmailAddresses", "argumentNames": ["addresses"] }, {
                "name": "SalesforceCase_SimilarCases",
                "argumentNames": ["caseNumber", "subject"]
            }, {
                "name": "SalesforceCase_SimilarCases_ProductFamily",
                "argumentNames": ["caseNumber", "subject", "productFamily"]
            }, {
                "name": "SalesforceCase_RelatedSolutions",
                "argumentNames": ["caseNumber", "subject"]
            }, {
                "name": "SalesforceCase_RelatedProblems",
                "argumentNames": ["caseNumber", "subject"]
            }, {
                "name": "SalesforceCase_RelatedExperts",
                "argumentNames": ["caseNumber", "subject"]
            }, {
                "name": "SalesforceCase_SimilarCasesByExpert",
                "argumentNames": ["caseNumber", "subject", "expert"]
            }, {
                "name": "itemsRelatedToCase",
                "argumentNames": ["caseNumber", "subject"]
            }, {
                "name": "itemsRelatedToCaseWithProductFamily",
                "argumentNames": ["caseNumber", "subject", "productFamily"]
            }, { "name": "documentsWithSimilarConcepts", "argumentNames": ["resultSet"] }];
    }
    JsSearchRouter.prototype.getHead = function () {
        return "  <script src=\"./box/js/CoveoJsSearch.Dependencies.js\"></script>\n  <script src=\"./box/js/CoveoJsSearch_Box.js\"></script>\n  <script src=\"./box/js/templates/templatesBoxNew.js\"></script>\n  <script src=\"./interfaceEditor/js/cultures/en.js\"></script>\n  <script src=\"./box/js/cultures/InterfaceEditor.en.js\"></script>\n  <link rel=\"stylesheet\" href=\"./box/css/CoveoBoxNew.css\"/>\n  <script>\n    Coveo.Salesforce.fullPageUri = 'http://ces.corp.coveo.com/js';\n    Coveo.context = Coveo.Salesforce.record = " + JSON.stringify(this.record) + ";\n    Coveo.Salesforce.fieldLabels = " + JSON.stringify(this.fieldLabels) + ";\n    Coveo.Salesforce.coveoFieldNames = " + JSON.stringify(this.coveoFieldNames) + ";\n    Coveo.Salesforce.extensions = " + JSON.stringify(this.extensions) + ";\n    Coveo.Salesforce.knowledgeArticleInfos = " + JSON.stringify({ isKnowlegdeEnabled: false }) + ";\n    Coveo.Salesforce.type = 'case';\n    $(function () {\n      Coveo.SearchEndpoint.configureSampleEndpoint();\n      $('.CoveoBox').coveo('initBox', {\n        BoxEditLink : {\n          uri : './edit'\n        }\n      })\n    })\n  </script>";
    };
    JsSearchRouter.prototype.getBody = function () {
        return fs.readFileSync(__dirname + '/../target/box/package/DefaultSalesforceBox.html', { encoding: 'utf8' }).replace(/\[\[tag\]\]/g, 'div');
    };
    JsSearchRouter.prototype.getRepositories = function () {
        // use require each time otherwise you will have to reload the server to se the updated repositories
        return require('../target/box/package/repositories.json');
    };
    JsSearchRouter.prototype.getEditPage = function () {
        return editPage;
    };
    return JsSearchRouter;
}(router_1["default"]));
exports.__esModule = true;
exports["default"] = JsSearchRouter;
