Coveo.Ui.TemplateCache.registerTemplate("People", Coveo.Ui.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:75px\">\n      <img class=\"CoveoThumbnail\" data-no-thumbnail-class=\"coveo-sprites-people-no-thumbnail\">\n    </div>\n    <div class=\"coveo-result-cell\" style=\"\">\n      <a class=\"CoveoResultLink\">\n            </a>\n      <span class=\"CoveoFieldValue\" data-field=\"@sysworktitle\"></span>\n      <span class=\"CoveoFieldValue\" data-field=\"@syscompany\"></span>\n      <span class=\"CoveoQuickView\"></span>\n      <table class=\"CoveoFieldTable\" data-use-json-template-fields=\"true\">\n        <tr data-field=\"@sysworkemail\" data-caption=\"Email\"></tr>\n        <tr data-field=\"@sysworkphone\" data-caption=\"Work Phone\"></tr>\n        <tr data-field=\"@sysmobilephone\" data-caption=\"Mobile Phone\"></tr>\n        <tr data-field=\"@syshomephone\" data-caption=\"Home Phone\"></tr>\n      </table>\n    </div>\n  </div>\n</div>", "raw.sysfullname != undefined"), true, true)