/// <reference path="CoveoJQueryVersion.ts" />
var Coveo;
(function (Coveo) {
    var ModalBox;
    (function (ModalBox) {
        (function (BUTTON) {
            BUTTON[BUTTON["OK"] = 1] = "OK";
            BUTTON[BUTTON["APPLY"] = 2] = "APPLY";
            BUTTON[BUTTON["YES"] = 4] = "YES";
            BUTTON[BUTTON["NO"] = 8] = "NO";
            BUTTON[BUTTON["CANCEL"] = 16] = "CANCEL";
        })(ModalBox.BUTTON || (ModalBox.BUTTON = {}));
        var BUTTON = ModalBox.BUTTON;
        var closeFunctions = [];
        function open(content, options) {
            if (options === void 0) { options = {}; }
            var body = options.body || document.body;
            Coveo.$(body).addClass('coveo-modalBox-opened');
            var modalBox = Coveo.$('<div class="coveo-modalBox" />').appendTo(body);
            if (options.fullscreen === true) {
                modalBox.addClass('coveo-fullscreen');
            }
            var overlay = Coveo.$('<div class="coveo-overlay" />').appendTo(modalBox);
            var wrapper = Coveo.$('<div class="coveo-wrapper" />').appendTo(modalBox);
            if (options.title != null) {
                var title = Coveo.$('<div class="coveo-title" />').html(options.title).appendTo(wrapper);
                if (options.titleClose === true) {
                    title.click(function () { return close(); });
                }
            }
            if (content.length > 1) {
                content = Coveo.$('<div />').append(content);
            }
            wrapper.append(content.addClass('coveo-body'));
            var close = function (button, forceClose) {
                if (button === void 0) { button = 0; }
                if (forceClose === void 0) { forceClose = false; }
                var valid = options.validation == null || options.validation(button);
                if (valid !== false || forceClose) {
                    modalBox.detach();
                    var index = Coveo.$.inArray(close, closeFunctions);
                    if (index >= 0) {
                        closeFunctions.splice(index, 1);
                    }
                    if (Coveo.$(body).find('.coveo-modalBox').length == 0) {
                        Coveo.$(body).removeClass('coveo-modalBox-opened');
                    }
                    return true;
                }
                return false;
            };
            var buttonsContainer;
            if (options.buttons != null) {
                var buttonClick = function (button) { return function () { return close(button); }; };
                buttonsContainer = Coveo.$('<div class="coveo-buttons" />').appendTo(wrapper);
                if (options.buttons & 1 /* OK */) {
                    Coveo.$('<div class="coveo-button">Ok</div>').click(buttonClick(1 /* OK */)).appendTo(buttonsContainer);
                }
                if (options.buttons & 2 /* APPLY */) {
                    Coveo.$('<div class="coveo-button">Apply</div>').click(buttonClick(2 /* APPLY */)).appendTo(buttonsContainer);
                }
                if (options.buttons & 4 /* YES */) {
                    Coveo.$('<div class="coveo-button">Yes</div>').click(buttonClick(4 /* YES */)).appendTo(buttonsContainer);
                }
                if (options.buttons & 8 /* NO */) {
                    Coveo.$('<div class="coveo-button">No</div>').click(buttonClick(8 /* NO */)).appendTo(buttonsContainer);
                }
                if (options.buttons & 16 /* CANCEL */) {
                    Coveo.$('<div class="coveo-button">Cancel</div>').click(buttonClick(16 /* CANCEL */)).appendTo(buttonsContainer);
                }
            }
            closeFunctions.push(close);
            if (options.overlayClose === true) {
                overlay.click(function () { return close(); });
            }
            if (options.className != null) {
                modalBox.addClass(options.className);
            }
            return {
                modalBox: modalBox,
                overlay: overlay,
                wrapper: wrapper,
                buttons: buttonsContainer,
                content: content,
                close: close
            };
        }
        ModalBox.open = open;
        function close(forceClose) {
            if (forceClose === void 0) { forceClose = false; }
            var i = 0;
            while (closeFunctions.length > i) {
                var closed = closeFunctions[i](0, forceClose);
                if (!closed) {
                    i++;
                }
            }
        }
        ModalBox.close = close;
    })(ModalBox = Coveo.ModalBox || (Coveo.ModalBox = {}));
})(Coveo || (Coveo = {}));
