"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyStyle = void 0;
function applyStyle(node, options) {
    var style = node.style;
    if (options.backgroundColor) {
        style.backgroundColor = options.backgroundColor;
    }
    if (options.width) {
        style.width = "".concat(options.width, "px");
    }
    if (options.height) {
        style.height = "".concat(options.height, "px");
    }
    var manual = options.style;
    if (manual != null) {
        Object.keys(manual).forEach(function (key) {
            style[key] = manual[key];
        });
    }
    var ele = node.querySelectorAll('.visible-element');
    ele.forEach(function (sub) { return sub.setAttribute('style', 'display:flex'); });
    return node;
}
exports.applyStyle = applyStyle;
//# sourceMappingURL=apply-style.js.map