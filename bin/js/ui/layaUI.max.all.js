var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var GameInfoUI = (function (_super) {
        __extends(GameInfoUI, _super);
        function GameInfoUI() {
            _super.call(this);
        }
        GameInfoUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameInfoUI.uiView);
        };
        GameInfoUI.uiView = { "type": "View", "props": { "width": 480, "height": 852 }, "child": [{ "type": "Button", "props": { "y": 13, "x": 407, "var": "pauseBtn", "stateNum": "1", "skin": "war/btn_pause.png" } }, { "type": "Label", "props": { "y": 15, "x": 20, "width": 70, "var": "hpLabel", "text": "HP: 10", "overflow": "visible", "height": 20, "fontSize": 18, "font": "Apple Chancery", "color": "#010101", "bold": true, "align": "left" } }, { "type": "Label", "props": { "y": 40, "x": 20, "width": 80, "var": "levelLabel", "text": "Level: 50", "overflow": "visible", "height": 20, "fontSize": 18, "font": "Apple Chancery", "color": "#050000", "bold": true, "align": "left" } }, { "type": "Label", "props": { "y": 65, "x": 20, "width": 100, "var": "scoreLabel", "text": "Score: 100", "overflow": "visible", "height": 20, "fontSize": 18, "font": "Apple Chancery", "color": "#040405", "bold": true, "align": "left" } }, { "type": "Button", "props": { "width": 291, "var": "restartBtn", "stateNum": "1", "skin": "war/btn_restart.png", "labelSize": 30, "labelPadding": "-20", "labelFont": "Apple Chancery", "labelColors": "#000000", "labelBold": true, "labelAlign": "center", "label": "232", "height": 256, "centerY": 0, "centerX": 0 } }, { "type": "Button", "props": { "var": "continueBtn", "stateNum": "1", "skin": "war/btn_continue.png", "centerY": 0, "centerX": 0 } }, { "type": "Button", "props": { "var": "startBtn", "stateNum": "1", "skin": "war/btn_start.png", "centerY": 0, "centerX": 0 } }, { "type": "Image", "props": { "var": "title", "skin": "war/title.png", "centerY": -80, "centerX": 0 } }] };
        return GameInfoUI;
    }(View));
    ui.GameInfoUI = GameInfoUI;
})(ui || (ui = {}));
var ui;
(function (ui) {
    var test;
    (function (test) {
        var TestPageUI = (function (_super) {
            __extends(TestPageUI, _super);
            function TestPageUI() {
                _super.call(this);
            }
            TestPageUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.test.TestPageUI.uiView);
            };
            TestPageUI.uiView = { "type": "View", "child": [{ "props": { "x": 0, "y": 0, "skin": "comp/bg.png", "sizeGrid": "30,4,4,4", "width": 600, "height": 400 }, "type": "Image" }, { "props": { "x": 41, "y": 56, "skin": "comp/button.png", "label": "点我赋值", "width": 150, "height": 37, "sizeGrid": "4,4,4,4", "var": "btn" }, "type": "Button" }, { "props": { "x": 401, "y": 56, "skin": "comp/clip_num.png", "clipX": 10, "var": "clip" }, "type": "Clip" }, { "props": { "x": 220, "y": 143, "skin": "comp/combobox.png", "labels": "select1,select2,selecte3", "selectedIndex": 1, "sizeGrid": "4,20,4,4", "width": 200, "height": 23, "var": "combobox" }, "type": "ComboBox" }, { "props": { "x": 220, "y": 96, "skin": "comp/tab.png", "labels": "tab1,tab2,tab3", "var": "tab" }, "type": "Tab" }, { "props": { "x": 259, "y": 223, "skin": "comp/vscroll.png", "height": 150 }, "type": "VScrollBar" }, { "props": { "x": 224, "y": 223, "skin": "comp/vslider.png", "height": 150 }, "type": "VSlider" }, { "type": "List", "child": [{ "type": "Box", "child": [{ "props": { "skin": "comp/label.png", "text": "this is a list", "x": 26, "y": 5, "width": 78, "height": 20, "fontSize": 14, "name": "label" }, "type": "Label" }, { "props": { "x": 0, "y": 2, "skin": "comp/clip_num.png", "clipX": 10, "name": "clip" }, "type": "Clip" }], "props": { "name": "render", "x": 0, "y": 0, "width": 112, "height": 30 } }], "props": { "x": 452, "y": 68, "width": 128, "height": 299, "vScrollBarSkin": "comp/vscroll.png", "repeatX": 1, "var": "list" } }, { "props": { "x": 563, "y": 4, "skin": "comp/btn_close.png", "name": "close" }, "type": "Button" }, { "props": { "x": 41, "y": 112, "skin": "comp/button.png", "label": "点我赋值", "width": 150, "height": 66, "sizeGrid": "4,4,4,4", "labelSize": 30, "labelBold": true, "var": "btn2" }, "type": "Button" }, { "props": { "x": 220, "y": 188, "skin": "comp/checkbox.png", "label": "checkBox1", "var": "check" }, "type": "CheckBox" }, { "props": { "x": 220, "y": 61, "skin": "comp/radiogroup.png", "labels": "radio1,radio2,radio3", "var": "radio" }, "type": "RadioGroup" }, { "type": "Panel", "child": [{ "props": { "skin": "comp/image.png" }, "type": "Image" }], "props": { "x": 299, "y": 223, "width": 127, "height": 150, "vScrollBarSkin": "comp/vscroll.png" } }, { "props": { "x": 326, "y": 188, "skin": "comp/checkbox.png", "label": "checkBox2", "labelColors": "#ff0000" }, "type": "CheckBox" }, { "type": "Box", "child": [{ "props": { "y": 70, "skin": "comp/progress.png", "width": 150, "height": 14, "sizeGrid": "4,4,4,4", "name": "progress" }, "type": "ProgressBar" }, { "props": { "y": 103, "skin": "comp/label.png", "text": "This is a Label", "width": 137, "height": 26, "fontSize": 20, "name": "label" }, "type": "Label" }, { "props": { "y": 148, "skin": "comp/textinput.png", "text": "textinput", "width": 150, "name": "input" }, "type": "TextInput" }, { "props": { "skin": "comp/hslider.png", "width": 150, "name": "slider" }, "type": "HSlider" }, { "props": { "y": 34, "skin": "comp/hscroll.png", "width": 150, "name": "scroll" }, "type": "HScrollBar" }], "props": { "x": 41, "y": 197, "var": "box" } }], "props": { "width": 600, "height": 400 } };
            return TestPageUI;
        }(View));
        test.TestPageUI = TestPageUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map