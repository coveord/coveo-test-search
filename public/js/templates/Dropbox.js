Coveo.TemplateCache.registerTemplate("CardDropbox", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\">\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"width: 32px; vertical-align: middle;\">\n          <div class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\">\n          </div>\n        </div>\n        <div class=\"coveo-result-cell\" style=\"text-align:left; padding-left: 10px; vertical-align: middle;\">\n          <a class=\"CoveoResultLink\"></a>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:10px; padding-bottom:10px\">\n          <span class=\"CoveoFieldValue\"\n                data-field=\"@filetype\"\n                data-helper=\"translatedCaption\"\n                style=\"border: 1px solid #BCC3CA; border-radius: 3px; padding: 2px 10px;\n                       text-transform: uppercase; font-weight: bold; font-size: 9px\"></span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n          <div class=\"CoveoText\" data-value=\"Description\" data-weight=\"bold\"></div>\n          <span class=\"CoveoExcerpt\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\">\n          <div class=\"CoveoText\" data-value=\"Modified\" data-weight=\"bold\"></div>\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n          <span class=\"CoveoPrintableUri\">\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"CoveoCardActionBar\">\n    <div class=\"CoveoQuickview\"></div>\n    <div class=\"CoveoCardOverlay\" data-title=\"Details\" data-icon=\"search\">\n      <table class=\"CoveoFieldTable\" data-allow-minimization=\"false\">\n        <tbody>\n          <tr data-field=\"@author\" data-caption=\"Author\">\n          </tr>\n          <tr data-field=\"@source\" data-caption=\"Source\">\n          </tr>\n          <tr data-field=\"@language\" data-caption=\"Language\">\n          </tr>\n          <tr data-field=\"@dropboxrevision\" data-caption=\"Revision\">\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n",{"condition":null,"layout":"card","fieldsToMatch":[{"field":"connectortype","values":["DropboxCrawler"]}],"mobile":null,"role":null}),true, true)
Coveo.TemplateCache.registerTemplate("Dropbox", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-cell\" style=\"vertical-align: top;text-align:center;width:32px;\">\n    <span class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\"></span>\n    <div class=\"CoveoQuickview\"></div>\n  </div>\n  <div class=\"coveo-result-cell\" style=\"vertical-align: top;padding-left: 16px;\">\n    <div class=\"coveo-result-row\" style=\"margin-top:0;\">\n      <div class=\"coveo-result-cell\" style=\"vertical-align:top;font-size:16px;\">\n        <a class=\"CoveoResultLink\"></a>\n      </div>\n      <div class=\"coveo-result-cell\" style=\"width:120px;text-align:right;font-size:12px\">\n        <div class=\"coveo-result-row\">\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span>\n        </div>\n      </div>\n    </div>\n    <div class=\"coveo-result-row\" style=\"margin-top:10px;\">\n      <div class=\"coveo-result-cell\">\n        <span class=\"CoveoExcerpt\"></span>\n      </div>\n    </div>\n    <div class=\"coveo-result-row\" style=\"margin-top:10px;\">\n      <div class=\"coveo-result-cell\">\n        <span class=\"CoveoFieldValue\" data-field=\"@author\" data-text-caption=\"Author\" style=\"margin-right:30px;\"></span>\n        <span class=\"CoveoFieldValue\" data-field=\"@filetype\" data-text-caption=\"File\" style=\"margin-right:30px;\"></span>\n        <span class=\"CoveoFieldValue\" data-field=\"@language\" data-text-caption=\"Language\" style=\"margin-right:30px;\"></span>\n        <span class=\"CoveoFieldValue\" data-field=\"@size\" data-text-caption=\"Size\" data-helper=\"size\" style=\"margin-right:30px;\"></span>\n      </div>\n    </div>\n    <div class=\"coveo-result-row\" style=\"margin-top:10px;\">\n      <div class=\"coveo-result-cell\">\n        <div class=\"CoveoResultFolding\" data-result-template-id=\"Dropbox\"></div>\n      </div>\n    </div>\n    <div class=\"coveo-result-row\" style=\"margin-top:10px;\">\n      <div class=\"coveo-result-cell\">\n        <div class=\"CoveoPrintableUri\"></div>\n      </div>\n    </div>\n  </div>\n</div>",{"condition":null,"layout":"list","fieldsToMatch":[{"field":"connectortype","values":["DropboxCrawler"]}],"mobile":null,"role":null}),true, true)