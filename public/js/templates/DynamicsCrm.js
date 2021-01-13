Coveo.TemplateCache.registerTemplate("CardDynamicsCrm", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame coveo-email-result\">\r\n  <div class=\"coveo-result-row\" style=\"margin-bottom: 20px\">\r\n    <div class=\"coveo-result-cell\" style=\"width:32px; vertical-align:middle; flex-grow:0\">\r\n      <span class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\"></span>\r\n    </div>\r\n    <div class=\"coveo-result-cell\" style=\"padding-left: 10px; vertical-align: middle;\" role=\"heading\" aria-level=\"2\">\r\n      <a class=\"CoveoResultLink\"></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\r\n      <div class=\"CoveoText\" data-value=\"Description\" data-weight=\"bold\"></div>\r\n      <span class=\"CoveoExcerpt\">\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\">\r\n      <div class=\"CoveoText\" data-value=\"Modified\" data-weight=\"bold\"></div>\r\n      <div class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"emailDateTime\" data-helper-options-always-include-time=\"true\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\">\r\n      <div class=\"CoveoMissingTerms\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"CoveoCardActionBar\">\r\n    <div class=\"CoveoQuickview\"></div>\r\n    <div class=\"CoveoCardOverlay\" data-title=\"Details\" data-icon=\"search\">\r\n      <table class=\"CoveoFieldTable\" data-allow-minimization=\"false\">\r\n        <tbody>\r\n          <tr data-field=\"@dyname\" data-caption=\"Name\">\r\n          </tr>\r\n          <tr data-field=\"@dytotalamount\" data-caption=\"Total\" data-helper=\"currency\">\r\n          </tr>\r\n          <tr data-field=\"@dystatuscodestring\" data-caption=\"Status\">\r\n          </tr>\r\n          <tr data-field=\"@dycustomeridstring\" data-caption=\"Customer\">\r\n          </tr>\r\n          <tr data-field=\"@dyjobtitle\" data-caption=\"Work title\">\r\n          </tr>\r\n          <tr data-field=\"@dyemailaddress1\" data-caption=\"Email\" data-helper=\"email\" data-html-value=\"true\">\r\n          </tr>\r\n          <tr data-field=\"@dytelephone1\" data-caption=\"Phone\">\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>",{"condition":null,"layout":"card","fieldsToMatch":[{"field":"dycoveoid"}],"mobile":null,"role":null}),true, true)
Coveo.TemplateCache.registerTemplate("DynamicsCrm", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\r\n  <div class=\"coveo-result-cell\" style=\"vertical-align:top;text-align:center;width:32px;\">\r\n    <span class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\"></span>\r\n    <div class=\"CoveoQuickview\"></div>\r\n  </div>\r\n  <div class=\"coveo-result-cell\" style=\"vertical-align: top;padding-left: 16px;\">\r\n    <div class=\"coveo-result-row\" style=\"margin-top:0;\">\r\n      <div class=\"coveo-result-cell\" style=\"vertical-align:top;font-size:16px;\" role=\"heading\" aria-level=\"2\">\r\n        <a class=\"CoveoResultLink\"></a>\r\n      </div>\r\n      <div class=\"coveo-result-cell\" style=\"width:120px;text-align:right;font-size:12px\">\r\n        <div class=\"coveo-result-row\">\r\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"coveo-result-row\" style=\"margin-top:10px;\">\r\n      <div class=\"coveo-result-cell\">\r\n        <span class=\"CoveoExcerpt\"></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"coveo-result-row\" style=\"margin-top:10px;\">\r\n      <div class=\"coveo-result-cell\">\r\n        <span class=\"CoveoFieldValue\" data-field=\"@dytotalamount\" data-text-caption=\"Total\" data-helper=\"currency\" style=\"margin-right:30px;\"></span>\r\n        <span class=\"CoveoFieldValue\" data-field=\"@dystatuscodestring\" data-text-caption=\"Status\" style=\"margin-right:30px;\"></span>\r\n        <span class=\"CoveoFieldValue\" data-field=\"@dycustomeridstring\" data-text-caption=\"Customer\" style=\"margin-right:30px;\"></span>\r\n        <span class=\"CoveoFieldValue\" data-field=\"@dyjobtitle\" data-text-caption=\"Work title\" style=\"margin-right:30px;\"></span>\r\n        <span class=\"CoveoFieldValue\" data-field=\"@dyemailaddress1\" data-text-caption=\"Email\" data-helper=\"email\" data-html-value=\"true\"\r\n          style=\"margin-right:30px;\"></span>\r\n        <span class=\"CoveoFieldValue\" data-field=\"@dytelephone1\" data-text-caption=\"Phone\" style=\"margin-right:30px;\"></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"coveo-result-row\" style=\"margin-top:10px;\">\r\n      <div class=\"coveo-result-cell\">\r\n        <table class=\"CoveoFieldTable\" data-minimized-by-default=\"true\">\r\n          <tbody>\r\n            <tr data-field=\"@sfpricec\" data-caption=\"Price\" data-helper=\"currency\"></tr>\r\n            <tr data-field=\"@sfopportunityamountconverted\" data-caption=\"Total\" data-helper=\"currency\"></tr>\r\n            <tr data-field=\"@sfopportunitylicensingstotalcconverted\" data-caption=\"License\" data-helper=\"currency\"></tr>\r\n            <tr data-field=\"@sfopportunityamountsupportcconverted\" data-caption=\"Support\" data-helper=\"currency\"></tr>\r\n            <tr data-field=\"@sfopportunityconsultingstotalcconverted\" data-caption=\"PS\" data-helper=\"currency\"></tr>\r\n            <tr data-field=\"@sfopportunitystagename\" data-caption=\"Stage\"></tr>\r\n            <tr data-field=\"@sfopportunitydealtypec\" data-caption=\"Deal Type\"></tr>\r\n            <tr data-field=\"@sfopportunitycompetitionc\" data-caption=\"Competition\" data-split-values=\"true\"></tr>\r\n            <tr data-field=\"@sfibdusername\" data-caption=\"ISR\"></tr>\r\n            <tr data-field=\"@sfopportunityregionc\" data-caption=\"Region\"></tr>\r\n            <tr data-field=\"@sfleadsource\" data-caption=\"Lead Source\"></tr>\r\n            <tr data-field=\"@sfleadstatus\" data-caption=\"Lead status\"></tr>\r\n            <tr data-field=\"@worktitle\" data-caption=\"Work title\"></tr>\r\n            <tr data-field=\"@sfemail\" data-caption=\"Email\" data-helper=\"email\" data-html-value=\"true\"></tr>\r\n            <tr data-field=\"@sfcontactphone\" data-caption=\"Phone\"></tr>\r\n            <tr data-field=\"@sfbillingcountry\" data-caption=\"Billing country\"></tr>\r\n            <tr data-field=\"@sfbillingcity\" data-caption=\"Billing city\"></tr>\r\n            <tr data-field=\"@sfmailingcountry\" data-caption=\"Mailing country\"></tr>\r\n            <tr data-field=\"@sfmailingcity\" data-caption=\"Mailing city\"></tr>\r\n            <tr data-field=\"@sffoldername\" data-caption=\"Folder\"></tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"coveo-result-row\" style=\"margin-top:10px;\">\r\n      <div class=\"coveo-result-cell\">\r\n        <div class=\"CoveoPrintableUri\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"coveo-result-row\">\r\n      <div class=\"coveo-result-cell\">\r\n        <div class=\"CoveoMissingTerms\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",{"condition":null,"layout":"list","fieldsToMatch":[{"field":"dycoveoid"}],"mobile":null,"role":null}),true, true)