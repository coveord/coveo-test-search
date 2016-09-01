var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../lib/jquery.d.ts"/>
var Coveo;
(function (Coveo) {
    var _window = window;
    Coveo.$(window).on('mousemove', function (e) { return Draggable.mousemove(e); });
    Coveo.$(window).on('mouseup', function (e) { return Draggable.mouseup(e); });
    Coveo.$(window.document).data('offset', { top: 0, left: 0 });
    var Delay = (function () {
        function Delay() {
        }
        Delay.call = function (callback, delay) {
            if (Delay.callback == null) {
                Delay.time = new Date().getTime() + delay;
                Delay.callback = callback;
                Delay.timeout = setTimeout(Delay.run, delay);
            }
        };
        Delay.run = function () {
            if (Delay.callback != null && Delay.time != null && Delay.time <= new Date().getTime()) {
                clearTimeout(this.timeout);
                Delay.callback();
                Delay.callback = null;
                Delay.time = null;
                return true;
            }
            else {
                return false;
            }
        };
        Delay.cancel = function () {
            clearTimeout(this.timeout);
            Delay.callback = null;
            Delay.time = null;
        };
        return Delay;
    })();
    var Draggable = (function () {
        function Draggable(element, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            this.element = element;
            this.options = options;
            if (options.includeMargin == null) {
                options.includeMargin = false;
            }
            this.element.addClass('coveo-draggable').mousedown(function (e) {
                if (e.which == 1) {
                    Delay.call(function () { return _this.mousedown(e); }, 300);
                }
            });
            this.placeholder = Coveo.$('<div class="coveo-placeholder"/>');
        }
        Draggable.mousemove = function (position) {
            if (!Delay.run() && Draggable.current != null) {
                Draggable.current.mousemove(position);
            }
        };
        Draggable.mouseup = function (position) {
            Delay.cancel();
            if (Draggable.current != null) {
                Draggable.current.mouseup(position);
            }
        };
        Draggable.prototype.createDragElement = function () {
            var width = this.element.outerWidth(this.options.includeMargin);
            var height = this.element.outerHeight(this.options.includeMargin);
            var clone = this.element.clone().appendTo(this.element.get(0).ownerDocument.body).outerWidth(width).outerHeight(height).addClass('coveo-drag').css('position', 'fixed');
            this.element.addClass('coveo-dragging-origin');
            return clone;
        };
        Draggable.prototype.createOffset = function (position) {
            var mouseOffset = this.element.offset();
            mouseOffset.left -= position.clientX;
            mouseOffset.top -= position.clientY;
            mouseOffset.left -= this.element.get(0).ownerDocument.body.scrollLeft;
            mouseOffset.top -= this.element.get(0).ownerDocument.body.scrollTop;
            return mouseOffset;
        };
        Draggable.prototype.removeDragElement = function () {
            this.dragElement.detach();
            this.element.removeClass('coveo-dragging-origin');
        };
        Draggable.prototype.dropElement = function () {
            return this.element;
        };
        Draggable.prototype.mousedown = function (position) {
            var _this = this;
            if (Draggable.current == null) {
                Draggable.current = this;
                Coveo.$('body').addClass('coveo-dragging');
                Coveo.$(_window.document).find('iframe').each(function (i, e) {
                    Coveo.$(e.contentDocument.body).addClass('coveo-dragging');
                });
                Draggable.mouseOffset = this.createOffset(position);
                this.dragElement = this.createDragElement();
                Coveo.$.each(Droppable.droppables, function (i, droppable) {
                    try {
                        droppable.element.toggleClass('coveo-droppable', droppable.accept(_this.element));
                    }
                    catch (e) {
                    }
                });
                var offset = Coveo.$(this.element.get(0).ownerDocument).data('offset');
                if (offset != null) {
                    position = {
                        clientX: position.clientX + offset.left,
                        clientY: position.clientY + offset.top
                    };
                }
                this.mousemove(position);
            }
        };
        Draggable.prototype.mousemove = function (position) {
            var droppableCurrent = Droppable.current;
            var dragPosition = Draggable.centerOfDrag(position);
            this.setDragElementPosition(position);
            this.dragElement.css('display', 'none');
            var droppable = Droppable.current = Droppable.find(this.element, dragPosition);
            this.dragElement.css('display', '');
            if (droppable != null) {
                this.placeholder.appendTo(droppable.element);
                droppable.element.addClass('coveo-drop');
                this.placeholder.css({ 'max-width': '', 'max-height': '' });
                if (this.placeholder.css('max-width') == 'none') {
                    this.placeholder.css('max-width', this.dragElement.outerWidth());
                }
                if (this.placeholder.css('max-height') == 'none') {
                    this.placeholder.css('max-height', this.dragElement.outerHeight());
                }
                this.placeholder.detach();
                var element = droppable.elementAfter(dragPosition);
                if (element != null) {
                    this.placeholder.insertBefore(element);
                }
                else {
                    this.placeholder.appendTo(droppable.element);
                }
            }
            else {
                this.placeholder.detach();
            }
            this.dragElement.toggleClass('coveo-active', droppable != null);
            if (droppableCurrent != null && droppableCurrent != Droppable.current) {
                try {
                    droppableCurrent.element.removeClass('coveo-drop');
                }
                catch (e) {
                }
            }
        };
        Draggable.prototype.mouseup = function (position) {
            if (Droppable.current != null) {
                Droppable.current.element.removeClass('coveo-drop');
            }
            var dragPosition = Draggable.centerOfDrag(position);
            Coveo.$('body').removeClass('coveo-dragging');
            Coveo.$(_window.document).find('iframe').each(function (i, e) {
                Coveo.$(e.contentDocument.body).removeClass('coveo-dragging');
            });
            this.dragElement.removeClass('coveo-drag');
            this.dragElement.css('display', 'none');
            var droppable = Droppable.find(this.element, dragPosition);
            this.dragElement.css('display', '');
            this.placeholder.detach();
            if (droppable != null) {
                var element = droppable.elementAfter(dragPosition);
                this.dropIn(droppable, element);
            }
            this.removeDragElement();
            this.dragElement = null;
            Coveo.$.each(Droppable.droppables, function (i, droppable) {
                try {
                    droppable.element.removeClass('coveo-droppable');
                }
                catch (e) {
                }
            });
            Draggable.current = null;
        };
        Draggable.prototype.dropIn = function (droppable, before) {
            var dropElement = this.dropElement();
            if (before != null) {
                dropElement.insertBefore(before);
            }
            else {
                dropElement.appendTo(droppable.element);
            }
            droppable.element.trigger('childChange', this);
        };
        Draggable.prototype.setDragElementPosition = function (position) {
            if (this.dragElement.parent().length == 0) {
                this.dragElement.insertAfter(this.element);
            }
            var cursorDocumentOffset = Coveo.$(this.dragElement.get(0).ownerDocument).data('offset');
            var relativePosition = {
                clientX: position.clientX - cursorDocumentOffset.left,
                clientY: position.clientY - cursorDocumentOffset.top
            };
            this.dragElement.css({
                position: 'fixed',
                top: relativePosition.clientY + Draggable.mouseOffset.top,
                left: relativePosition.clientX + Draggable.mouseOffset.left,
                zIndex: 100000
            });
        };
        Draggable.centerOfDrag = function (position) {
            var dragElement = Draggable.current.dragElement;
            return {
                clientX: position.clientX + Draggable.mouseOffset.left + dragElement.outerWidth() / 2,
                clientY: position.clientY + Draggable.mouseOffset.top + dragElement.outerHeight() / 2
            };
        };
        return Draggable;
    })();
    Coveo.Draggable = Draggable;
    var Clonable = (function (_super) {
        __extends(Clonable, _super);
        function Clonable() {
            _super.apply(this, arguments);
        }
        Clonable.prototype.createDragElement = function () {
            var clone = this.element.clone().addClass('coveo-drag');
            this.element.addClass('coveo-cloning');
            clone.css('position', 'fixed').appendTo(this.element.get(0).ownerDocument.body);
            return clone;
        };
        Clonable.prototype.createOffset = function () {
            return {
                left: this.element.outerWidth() / -2,
                top: this.element.outerHeight() / -2
            };
        };
        Clonable.prototype.removeDragElement = function () {
            this.element.removeClass('coveo-cloning');
            this.dragElement.detach();
        };
        Clonable.prototype.dropElement = function () {
            return this.element.clone();
        };
        return Clonable;
    })(Draggable);
    Coveo.Clonable = Clonable;
    var Droppable = (function () {
        function Droppable(element, accept) {
            if (accept === void 0) { accept = function (element) { return true; }; }
            this.element = element;
            this.accept = accept;
            this.element.data('CoveoDroppable', this);
            Droppable.droppables.push(this);
        }
        Droppable.elementFromPoint = function (position, _document) {
            if (_document === void 0) { _document = _window.document; }
            var element = _document.elementFromPoint(position.clientX, position.clientY);
            if (element != null) {
                if (element.tagName == 'IFRAME') {
                    var offset = Coveo.$(element).offset();
                    if (offset != null) {
                        return Droppable.elementFromPoint({
                            clientX: position.clientX - offset.left,
                            clientY: position.clientY - offset.top
                        }, element.contentDocument);
                    }
                }
            }
            return element;
        };
        Droppable.find = function (element, position, _document) {
            if (_document === void 0) { _document = _window.document; }
            var elementFromPoint = Droppable.elementFromPoint(position);
            if (elementFromPoint != null) {
                var over = Coveo.$(elementFromPoint);
                while (!over.is('html')) {
                    var droppable = over.data('CoveoDroppable');
                    if (droppable != null && droppable.accept(element)) {
                        return droppable;
                        break;
                    }
                    over = over.parent();
                }
            }
            return null;
        };
        Droppable.prototype.elementAfter = function (position) {
            var closestAfter;
            var squareDistance = Number.POSITIVE_INFINITY;
            var fakePlaceholder = Draggable.current.placeholder.clone(true, true);
            var dragOffset = this.getCenterOffset(Draggable.current.dragElement);
            var children = Coveo.$(this.element).children();
            for (var i = 0; i < children.length; i++) {
                var child = children.get(i);
                if (child != Draggable.current.placeholder.get(0)) {
                    fakePlaceholder.insertBefore(child);
                    var phOffset = this.getCenterOffset(fakePlaceholder);
                    var distance = this.squareDistance(phOffset, dragOffset);
                    if (distance < squareDistance) {
                        squareDistance = distance;
                        closestAfter = Coveo.$(child);
                    }
                }
            }
            if (closestAfter != null) {
                fakePlaceholder.appendTo(this.element);
                var phOffset = this.getCenterOffset(fakePlaceholder);
                var distance = this.squareDistance(phOffset, dragOffset);
                if (distance < squareDistance) {
                    closestAfter = null;
                }
            }
            fakePlaceholder.detach();
            return closestAfter;
        };
        Droppable.prototype.getCenterOffset = function (element) {
            var offset = element.offset();
            offset.left += element.width() / 2;
            offset.top += element.height() / 2;
            var ownerDocumentOffset = Coveo.$(element.get(0).ownerDocument).data('offset');
            if (ownerDocumentOffset != null) {
                offset.left += ownerDocumentOffset.left;
                offset.top += ownerDocumentOffset.top;
            }
            offset.top -= element.get(0).ownerDocument.body.scrollTop;
            offset.left -= element.get(0).ownerDocument.body.scrollLeft;
            return offset;
        };
        Droppable.prototype.squareDistance = function (a, b) {
            return Math.pow(a.left - b.left, 2) + Math.pow(a.top - b.top, 2);
        };
        Droppable.droppables = [];
        return Droppable;
    })();
    Coveo.Droppable = Droppable;
})(Coveo || (Coveo = {}));
