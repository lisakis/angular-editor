/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Inject, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { AngularEditorService } from './angular-editor.service';
import { DOCUMENT } from '@angular/common';
var AngularEditorToolbarComponent = /** @class */ (function () {
    function AngularEditorToolbarComponent(r, editorService, er, doc) {
        this.r = r;
        this.editorService = editorService;
        this.er = er;
        this.doc = doc;
        this.htmlMode = false;
        this.linkSelected = false;
        this.block = 'default';
        this.fontName = 'Times New Roman';
        this.fontSize = '3';
        this.headings = [
            {
                label: 'Heading 1',
                value: 'h1',
            },
            {
                label: 'Heading 2',
                value: 'h2',
            },
            {
                label: 'Heading 3',
                value: 'h3',
            },
            {
                label: 'Heading 4',
                value: 'h4',
            },
            {
                label: 'Heading 5',
                value: 'h5',
            },
            {
                label: 'Heading 6',
                value: 'h6',
            },
            {
                label: 'Heading 7',
                value: 'h7',
            },
            {
                label: 'Paragraph',
                value: 'p',
            },
            {
                label: 'Predefined',
                value: 'pre'
            },
            {
                label: 'Standard',
                value: 'div'
            },
            {
                label: 'default',
                value: 'default'
            }
        ];
        this.fontSizes = [
            {
                label: '1',
                value: '1',
            },
            {
                label: '2',
                value: '2',
            },
            {
                label: '3',
                value: '3',
            },
            {
                label: '4',
                value: '4',
            },
            {
                label: '5',
                value: '5',
            },
            {
                label: '6',
                value: '6',
            },
            {
                label: '7',
                value: '7',
            }
        ];
        this.customClassId = '-1';
        this.customClassList = [{ label: '', value: '' }];
        // uploadUrl: string;
        this.tagMap = {
            BLOCKQUOTE: 'indent',
            A: 'link'
        };
        this.select = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'PRE', 'DIV'];
        this.buttons = ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'justifyLeft', 'justifyCenter',
            'justifyRight', 'justifyFull', 'indent', 'outdent', 'insertUnorderedList', 'insertOrderedList', 'link'];
        this.fonts = [{ label: '', value: '' }];
        this.execute = new EventEmitter();
    }
    Object.defineProperty(AngularEditorToolbarComponent.prototype, "customClasses", {
        set: /**
         * @param {?} classes
         * @return {?}
         */
        function (classes) {
            if (classes) {
                this._customClasses = classes;
                this.customClassList = this._customClasses.map((/**
                 * @param {?} x
                 * @param {?} i
                 * @return {?}
                 */
                function (x, i) { return ({ label: x.name, value: i.toString() }); }));
                this.customClassList.unshift({ label: 'Clear Class', value: '-1' });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularEditorToolbarComponent.prototype, "defaultFontName", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.fontName = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularEditorToolbarComponent.prototype, "defaultFontSize", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.fontSize = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularEditorToolbarComponent.prototype, "isLinkButtonDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.htmlMode || !Boolean(this.editorService.selectedText);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Trigger command from editor header buttons
     * @param command string from toolbar buttons
     */
    /**
     * Trigger command from editor header buttons
     * @param {?} command string from toolbar buttons
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.triggerCommand = /**
     * Trigger command from editor header buttons
     * @param {?} command string from toolbar buttons
     * @return {?}
     */
    function (command) {
        this.execute.emit(command);
    };
    /**
     * highlight editor buttons when cursor moved or positioning
     */
    /**
     * highlight editor buttons when cursor moved or positioning
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.triggerButtons = /**
     * highlight editor buttons when cursor moved or positioning
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.showToolbar) {
            return;
        }
        this.buttons.forEach((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            /** @type {?} */
            var result = _this.doc.queryCommandState(e);
            /** @type {?} */
            var elementById = _this.doc.getElementById(e + '-' + _this.id);
            if (result) {
                _this.r.addClass(elementById, 'active');
            }
            else {
                _this.r.removeClass(elementById, 'active');
            }
        }));
    };
    /**
     * trigger highlight editor buttons when cursor moved or positioning in block
     */
    /**
     * trigger highlight editor buttons when cursor moved or positioning in block
     * @param {?} nodes
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.triggerBlocks = /**
     * trigger highlight editor buttons when cursor moved or positioning in block
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        var _this = this;
        if (!this.showToolbar) {
            return;
        }
        this.linkSelected = nodes.findIndex((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.nodeName === 'A'; })) > -1;
        /** @type {?} */
        var found = false;
        this.select.forEach((/**
         * @param {?} y
         * @return {?}
         */
        function (y) {
            /** @type {?} */
            var node = nodes.find((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.nodeName === y; }));
            if (node !== undefined && y === node.nodeName) {
                if (found === false) {
                    _this.block = node.nodeName.toLowerCase();
                    found = true;
                }
            }
            else if (found === false) {
                _this.block = 'default';
            }
        }));
        found = false;
        if (this._customClasses) {
            this._customClasses.forEach((/**
             * @param {?} y
             * @param {?} index
             * @return {?}
             */
            function (y, index) {
                /** @type {?} */
                var node = nodes.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    if (x instanceof Element) {
                        return x.className === y.class;
                    }
                }));
                if (node !== undefined) {
                    if (found === false) {
                        _this.customClassId = index.toString();
                        found = true;
                    }
                }
                else if (found === false) {
                    _this.customClassId = '-1';
                }
            }));
        }
        Object.keys(this.tagMap).map((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            /** @type {?} */
            var elementById = _this.doc.getElementById(_this.tagMap[e] + '-' + _this.id);
            /** @type {?} */
            var node = nodes.find((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.nodeName === e; }));
            if (node !== undefined && e === node.nodeName) {
                _this.r.addClass(elementById, 'active');
            }
            else {
                _this.r.removeClass(elementById, 'active');
            }
        }));
        this.foreColour = this.doc.queryCommandValue('ForeColor');
        this.fontSize = this.doc.queryCommandValue('FontSize');
        this.fontName = this.doc.queryCommandValue('FontName').replace(/"/g, '');
        this.backColor = this.doc.queryCommandValue('backColor');
    };
    /**
     * insert URL link
     */
    /**
     * insert URL link
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.insertUrl = /**
     * insert URL link
     * @return {?}
     */
    function () {
        /** @type {?} */
        var url = 'https:\/\/';
        /** @type {?} */
        var selection = this.editorService.savedSelection;
        if (selection && selection.commonAncestorContainer.parentElement.nodeName === 'A') {
            /** @type {?} */
            var parent_1 = (/** @type {?} */ (selection.commonAncestorContainer.parentElement));
            if (parent_1.href !== '') {
                url = parent_1.href;
            }
        }
        url = prompt('Insert URL link', url);
        if (url && url !== '' && url !== 'https://') {
            this.editorService.createLink(url);
        }
    };
    /**
     * insert Video link
     */
    /**
     * insert Video link
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.insertVideo = /**
     * insert Video link
     * @return {?}
     */
    function () {
        this.execute.emit('');
        /** @type {?} */
        var url = prompt('Insert Video link', "https://");
        if (url && url !== '' && url !== "https://") {
            this.editorService.insertVideo(url);
        }
    };
    /** insert color */
    /**
     * insert color
     * @param {?} color
     * @param {?} where
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.insertColor = /**
     * insert color
     * @param {?} color
     * @param {?} where
     * @return {?}
     */
    function (color, where) {
        this.editorService.insertColor(color, where);
        this.execute.emit('');
    };
    /**
     * set font Name/family
     * @param foreColor string
     */
    /**
     * set font Name/family
     * @param {?} foreColor string
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.setFontName = /**
     * set font Name/family
     * @param {?} foreColor string
     * @return {?}
     */
    function (foreColor) {
        this.editorService.setFontName(foreColor);
        this.execute.emit('');
    };
    /**
     * set font Size
     * @param fontSize string
     */
    /**
     * set font Size
     * @param {?} fontSize string
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.setFontSize = /**
     * set font Size
     * @param {?} fontSize string
     * @return {?}
     */
    function (fontSize) {
        this.editorService.setFontSize(fontSize);
        this.execute.emit('');
    };
    /**
     * toggle editor mode (WYSIWYG or SOURCE)
     * @param m boolean
     */
    /**
     * toggle editor mode (WYSIWYG or SOURCE)
     * @param {?} m boolean
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.setEditorMode = /**
     * toggle editor mode (WYSIWYG or SOURCE)
     * @param {?} m boolean
     * @return {?}
     */
    function (m) {
        /** @type {?} */
        var toggleEditorModeButton = this.doc.getElementById('toggleEditorMode' + '-' + this.id);
        if (m) {
            this.r.addClass(toggleEditorModeButton, 'active');
        }
        else {
            this.r.removeClass(toggleEditorModeButton, 'active');
        }
        this.htmlMode = m;
    };
    /**
     * Upload image when file is selected
     */
    /**
     * Upload image when file is selected
     * @param {?} event
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.onFileChanged = /**
     * Upload image when file is selected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var file = event.target.files[0];
        if (file.type.includes('image/')) {
            if (this.upload) {
                this.upload(file).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) { return _this.watchUploadImage(response, event); }));
            }
            else if (this.uploadUrl) {
                this.editorService.uploadImage(file).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) { return _this.watchUploadImage(response, event); }));
            }
            else {
                /** @type {?} */
                var reader = new FileReader();
                reader.onload = (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    /** @type {?} */
                    var fr = (/** @type {?} */ (e.currentTarget));
                    _this.editorService.insertImage(fr.result.toString());
                });
                reader.readAsDataURL(file);
            }
        }
    };
    /**
     * @param {?} response
     * @param {?} event
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.watchUploadImage = /**
     * @param {?} response
     * @param {?} event
     * @return {?}
     */
    function (response, event) {
        var imageUrl = response.body.imageUrl;
        this.editorService.insertImage(imageUrl);
        event.srcElement.value = null;
    };
    /**
     * Set custom class
     */
    /**
     * Set custom class
     * @param {?} classId
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.setCustomClass = /**
     * Set custom class
     * @param {?} classId
     * @return {?}
     */
    function (classId) {
        if (classId === '-1') {
            this.execute.emit('clear');
        }
        else {
            this.editorService.createCustomClass(this._customClasses[+classId]);
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.isButtonHidden = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var e_1, _a;
        if (!name) {
            return false;
        }
        if (!(this.hiddenButtons instanceof Array)) {
            return false;
        }
        /** @type {?} */
        var result;
        try {
            for (var _b = tslib_1.__values(this.hiddenButtons), _c = _b.next(); !_c.done; _c = _b.next()) {
                var arr = _c.value;
                if (arr instanceof Array) {
                    result = arr.find((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return item === name; }));
                }
                if (result) {
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result !== undefined;
    };
    /**
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.execute.emit('focus');
        console.log('focused');
    };
    AngularEditorToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'angular-editor-toolbar',
                    template: "<div class=\"angular-editor-toolbar\" *ngIf=\"showToolbar\">\r\n  <div class=\"angular-editor-toolbar-set\">\r\n    <button type=\"button\" title=\"Undo\" class=\"angular-editor-button\" (click)=\"triggerCommand('undo')\"\r\n            [hidden]=\"isButtonHidden('undo')\" tabindex=\"-1\"><i\r\n      class='fa fa-undo'></i></button>\r\n    <button type=\"button\" title=\"Redo\" class=\"angular-editor-button\" (click)=\"triggerCommand('redo')\"\r\n            [hidden]=\"isButtonHidden('redo')\" tabindex=\"-1\"><i\r\n      class='fa fa-repeat'></i></button>\r\n  </div>\r\n  <div class=\"angular-editor-toolbar-set\">\r\n    <button [id]=\"'bold-'+id\" type=\"button\" title=\"Bold\" class=\"angular-editor-button\" (click)=\"triggerCommand('bold')\"\r\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('bold')\" tabindex=\"-1\"><i class='fa fa-bold'></i></button>\r\n    <button [id]=\"'italic-'+id\" type=\"button\" title=\"Italic\" class=\"angular-editor-button\"\r\n            (click)=\"triggerCommand('italic')\"\r\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('italic')\" tabindex=\"-1\"><i class='fa fa-italic'></i>\r\n    </button>\r\n    <button [id]=\"'underline-'+id\" type=\"button\" title=\"Underline\" class=\"angular-editor-button\"\r\n            (click)=\"triggerCommand('underline')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('underline')\"\r\n            tabindex=\"-1\"><i class='fa fa-underline'></i></button>\r\n    <button [id]=\"'strikeThrough-'+id\" type=\"button\" title=\"Strikethrough\" class=\"angular-editor-button\"\r\n            (click)=\"triggerCommand('strikeThrough')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('strikeThrough')\"\r\n            tabindex=\"-1\"><i class='fa fa-strikethrough'></i></button>\r\n    <button [id]=\"'subscript-'+id\" type=\"button\" title=\"Subscript\" class=\"angular-editor-button\"\r\n            (click)=\"triggerCommand('subscript')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('subscript')\"\r\n            tabindex=\"-1\"><i class='fa fa-subscript'></i></button>\r\n    <button [id]=\"'superscript-'+id\" type=\"button\" title=\"Superscript\" class=\"angular-editor-button\"\r\n            (click)=\"triggerCommand('superscript')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('superscript')\"\r\n            tabindex=\"-1\"><i class='fa fa-superscript'></i></button>\r\n  </div>\r\n  <div class=\"angular-editor-toolbar-set\">\r\n    <button [id]=\"'justifyLeft-'+id\" type=\"button\" title=\"Justify Left\" class=\"angular-editor-button\"\r\n            (click)=\"triggerCommand('justifyLeft')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyLeft')\"\r\n            tabindex=\"-1\"><i\r\n      class='fa fa-align-left'></i></button>\r\n    <button [id]=\"'justifyCenter-'+id\" type=\"button\" title=\"Justify Center\" class=\"angular-editor-button\"\r\n            (click)=\"triggerCommand('justifyCenter')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyCenter')\"\r\n            tabindex=\"-1\"><i\r\n      class='fa fa-align-center'></i></button>\r\n    <button [id]=\"'justifyRight-'+id\" type=\"button\" title=\"Justify Right\" class=\"angular-editor-button\"\r\n            (click)=\"triggerCommand('justifyRight')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyRight')\"\r\n            tabindex=\"-1\">\r\n      <i class='fa fa-align-right'></i></button>\r\n    <button [id]=\"'justifyFull-'+id\" type=\"button\" title=\"Justify Full\" class=\"angular-editor-button\"\r\n            (click)=\"triggerCommand('justifyFull')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyFull')\"\r\n            tabindex=\"-1\"><i\r\n      class='fa fa-align-justify'></i></button>\r\n  </div>\r\n  <div class=\"angular-editor-toolbar-set\">\r\n    <button [id]=\"'indent-'+id\" type=\"button\" title=\"Indent\" class=\"angular-editor-button\"\r\n            (click)=\"triggerCommand('indent')\"\r\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('indent')\" tabindex=\"-1\"><i\r\n      class='fa fa-indent'></i></button>\r\n    <button [id]=\"'outdent-'+id\" type=\"button\" title=\"Outdent\" class=\"angular-editor-button\"\r\n            (click)=\"triggerCommand('outdent')\"\r\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('outdent')\" tabindex=\"-1\"><i\r\n      class='fa fa-outdent'></i></button>\r\n  </div>\r\n  <div class=\"angular-editor-toolbar-set\">\r\n    <button [id]=\"'insertUnorderedList-'+id\" type=\"button\" title=\"Unordered List\" class=\"angular-editor-button\"\r\n            (click)=\"triggerCommand('insertUnorderedList')\" [disabled]=\"htmlMode\"\r\n            [hidden]=\"isButtonHidden('insertUnorderedList')\" tabindex=\"-1\"><i\r\n      class='fa fa-list-ul'></i></button>\r\n    <button [id]=\"'insertOrderedList-'+id\" type=\"button\" title=\"Ordered List\" class=\"angular-editor-button\"\r\n            (click)=\"triggerCommand('insertOrderedList')\" [disabled]=\"htmlMode\"\r\n            [hidden]=\"isButtonHidden('insertOrderedList')\" tabindex=\"-1\"><i\r\n      class='fa fa-list-ol'></i></button>\r\n  </div>\r\n  <div class=\"angular-editor-toolbar-set\">\r\n\r\n    <ae-select class=\"select-heading\" [options]=\"headings\"\r\n               [(ngModel)]=\"block\"\r\n               (change)=\"triggerCommand(block)\"\r\n               [disabled]=\"htmlMode\"\r\n               [hidden]=\"isButtonHidden('heading')\"\r\n               tabindex=\"-1\"></ae-select>\r\n  </div>\r\n  <div class=\"angular-editor-toolbar-set\">\r\n\r\n    <ae-select class=\"select-font\" [options]=\"fonts\"\r\n               [(ngModel)]=\"fontName\"\r\n               (change)=\"setFontName(fontName)\"\r\n               [disabled]=\"htmlMode\"\r\n               [hidden]=\"isButtonHidden('fontName')\"\r\n               tabindex=\"-1\"></ae-select>\r\n  </div>\r\n  <div class=\"angular-editor-toolbar-set\">\r\n\r\n    <ae-select class=\"select-font-size\" [options]=\"fontSizes\"\r\n               [(ngModel)]=\"fontSize\"\r\n               (change)=\"setFontSize(fontSize)\"\r\n               [disabled]=\"htmlMode\"\r\n               [hidden]=\"isButtonHidden('fontSize')\"\r\n               tabindex=\"-1\">\r\n    </ae-select>\r\n  </div>\r\n  <div class=\"angular-editor-toolbar-set\">\r\n    <input\r\n      style=\"display: none\"\r\n      type=\"color\" (change)=\"insertColor(fgInput.value, 'textColor')\"\r\n      #fgInput>\r\n    <button [id]=\"'foregroundColorPicker-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"focus(); ; fgInput.click()\"\r\n            title=\"Text Color\"\r\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('textColor')\" tabindex=\"-1\"><span\r\n      class=\"color-label foreground\"><i class=\"fa fa-font\"></i></span>\r\n    </button>\r\n    <input\r\n      style=\"display: none\"\r\n      type=\"color\" (change)=\"insertColor(bgInput.value, 'backgroundColor')\"\r\n      #bgInput>\r\n    <button [id]=\"'backgroundColorPicker-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"focus(); ; bgInput.click()\"\r\n            title=\"Background Color\"\r\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('backgroundColor')\" tabindex=\"-1\"><span\r\n      class=\"color-label background\"><i class=\"fa fa-font\"></i></span>\r\n    </button>\r\n  </div>\r\n  <div *ngIf=\"_customClasses\" class=\"angular-editor-toolbar-set\">\r\n    <ae-select class=\"select-custom-style\" [options]=\"customClassList\"\r\n               [(ngModel)]=\"customClassId\"\r\n               (change)=\"setCustomClass(customClassId)\"\r\n               [disabled]=\"htmlMode\"\r\n               [hidden]=\"isButtonHidden('customClasses')\"\r\n               tabindex=\"-1\"></ae-select>\r\n  </div>\r\n  <div class=\"angular-editor-toolbar-set\">\r\n    <button [id]=\"'link-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"insertUrl()\"\r\n            title=\"Insert Link\" [disabled]=\"isLinkButtonDisabled\" [hidden]=\"isButtonHidden('link')\" tabindex=\"-1\">\r\n      <i class=\"fa fa-link\"></i>\r\n    </button>\r\n    <button [id]=\"'unlink-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"triggerCommand('unlink')\"\r\n            title=\"Unlink\" [disabled]=\"htmlMode || !linkSelected\" [hidden]=\"isButtonHidden('unlink')\" tabindex=\"-1\">\r\n      <i class=\"fa fa-chain-broken\"></i>\r\n    </button>\r\n    <input\r\n      style=\"display: none\"\r\n      accept=\"image/*\"\r\n      type=\"file\" (change)=\"onFileChanged($event)\"\r\n      #fileInput>\r\n    <button [id]=\"'insertImage-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"focus(); fileInput.click()\"\r\n            title=\"Insert Image\"\r\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('insertImage')\" tabindex=\"-1\"><i class=\"fa fa-image\"></i>\r\n    </button>\r\n    <button [id]=\"'insertVideo-'+id\" type=\"button\" class=\"angular-editor-button\"\r\n            (click)=\"insertVideo()\" title=\"Insert Video\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('insertVideo')\"\r\n            tabindex=\"-1\"><i\r\n      class=\"fa fa-video-camera\"></i></button>\r\n    <button [id]=\"'insertHorizontalRule-'+id\" type=\"button\" title=\"Horizontal Line\" class=\"angular-editor-button\"\r\n            (click)=\"triggerCommand('insertHorizontalRule')\" [disabled]=\"htmlMode\"\r\n            [hidden]=\"isButtonHidden('insertHorizontalRule')\" tabindex=\"-1\"><i\r\n      class=\"fa fa-minus\"></i></button>\r\n  </div>\r\n  <div class=\"angular-editor-toolbar-set\">\r\n    <button [id]=\"'clearFormatting-'+id\" type=\"button\" title=\"Clear Formatting\" class=\"angular-editor-button\"\r\n            (click)=\"triggerCommand('removeFormat')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('removeFormat')\"\r\n            tabindex=\"-1\"><i class='fa fa-remove'></i>\r\n    </button>\r\n  </div>\r\n  <div class=\"angular-editor-toolbar-set\">\r\n    <button [id]=\"'toggleEditorMode-'+id\" type=\"button\" title=\"HTML Code\" class=\"angular-editor-button\"\r\n            (click)=\"triggerCommand('toggleEditorMode')\" [hidden]=\"isButtonHidden('toggleEditorMode')\" tabindex=\"-1\"><i\r\n      class='fa fa-code'></i></button>\r\n  </div>\r\n</div>\r\n",
                    styles: ["@charset \"UTF-8\";/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:2s linear infinite fa-spin;animation:2s linear infinite fa-spin}.fa-pulse{-webkit-animation:1s steps(8) infinite fa-spin;animation:1s steps(8) infinite fa-spin}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\uF000\"}.fa-music:before{content:\"\uF001\"}.fa-search:before{content:\"\uF002\"}.fa-envelope-o:before{content:\"\uF003\"}.fa-heart:before{content:\"\uF004\"}.fa-star:before{content:\"\uF005\"}.fa-star-o:before{content:\"\uF006\"}.fa-user:before{content:\"\uF007\"}.fa-film:before{content:\"\uF008\"}.fa-th-large:before{content:\"\uF009\"}.fa-th:before{content:\"\uF00A\"}.fa-th-list:before{content:\"\uF00B\"}.fa-check:before{content:\"\uF00C\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\uF00D\"}.fa-search-plus:before{content:\"\uF00E\"}.fa-search-minus:before{content:\"\uF010\"}.fa-power-off:before{content:\"\uF011\"}.fa-signal:before{content:\"\uF012\"}.fa-cog:before,.fa-gear:before{content:\"\uF013\"}.fa-trash-o:before{content:\"\uF014\"}.fa-home:before{content:\"\uF015\"}.fa-file-o:before{content:\"\uF016\"}.fa-clock-o:before{content:\"\uF017\"}.fa-road:before{content:\"\uF018\"}.fa-download:before{content:\"\uF019\"}.fa-arrow-circle-o-down:before{content:\"\uF01A\"}.fa-arrow-circle-o-up:before{content:\"\uF01B\"}.fa-inbox:before{content:\"\uF01C\"}.fa-play-circle-o:before{content:\"\uF01D\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\uF01E\"}.fa-refresh:before{content:\"\uF021\"}.fa-list-alt:before{content:\"\uF022\"}.fa-lock:before{content:\"\uF023\"}.fa-flag:before{content:\"\uF024\"}.fa-headphones:before{content:\"\uF025\"}.fa-volume-off:before{content:\"\uF026\"}.fa-volume-down:before{content:\"\uF027\"}.fa-volume-up:before{content:\"\uF028\"}.fa-qrcode:before{content:\"\uF029\"}.fa-barcode:before{content:\"\uF02A\"}.fa-tag:before{content:\"\uF02B\"}.fa-tags:before{content:\"\uF02C\"}.fa-book:before{content:\"\uF02D\"}.fa-bookmark:before{content:\"\uF02E\"}.fa-print:before{content:\"\uF02F\"}.fa-camera:before{content:\"\uF030\"}.fa-font:before{content:\"\uF031\"}.fa-bold:before{content:\"\uF032\"}.fa-italic:before{content:\"\uF033\"}.fa-text-height:before{content:\"\uF034\"}.fa-text-width:before{content:\"\uF035\"}.fa-align-left:before{content:\"\uF036\"}.fa-align-center:before{content:\"\uF037\"}.fa-align-right:before{content:\"\uF038\"}.fa-align-justify:before{content:\"\uF039\"}.fa-list:before{content:\"\uF03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\uF03B\"}.fa-indent:before{content:\"\uF03C\"}.fa-video-camera:before{content:\"\uF03D\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\uF03E\"}.fa-pencil:before{content:\"\uF040\"}.fa-map-marker:before{content:\"\uF041\"}.fa-adjust:before{content:\"\uF042\"}.fa-tint:before{content:\"\uF043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\uF044\"}.fa-share-square-o:before{content:\"\uF045\"}.fa-check-square-o:before{content:\"\uF046\"}.fa-arrows:before{content:\"\uF047\"}.fa-step-backward:before{content:\"\uF048\"}.fa-fast-backward:before{content:\"\uF049\"}.fa-backward:before{content:\"\uF04A\"}.fa-play:before{content:\"\uF04B\"}.fa-pause:before{content:\"\uF04C\"}.fa-stop:before{content:\"\uF04D\"}.fa-forward:before{content:\"\uF04E\"}.fa-fast-forward:before{content:\"\uF050\"}.fa-step-forward:before{content:\"\uF051\"}.fa-eject:before{content:\"\uF052\"}.fa-chevron-left:before{content:\"\uF053\"}.fa-chevron-right:before{content:\"\uF054\"}.fa-plus-circle:before{content:\"\uF055\"}.fa-minus-circle:before{content:\"\uF056\"}.fa-times-circle:before{content:\"\uF057\"}.fa-check-circle:before{content:\"\uF058\"}.fa-question-circle:before{content:\"\uF059\"}.fa-info-circle:before{content:\"\uF05A\"}.fa-crosshairs:before{content:\"\uF05B\"}.fa-times-circle-o:before{content:\"\uF05C\"}.fa-check-circle-o:before{content:\"\uF05D\"}.fa-ban:before{content:\"\uF05E\"}.fa-arrow-left:before{content:\"\uF060\"}.fa-arrow-right:before{content:\"\uF061\"}.fa-arrow-up:before{content:\"\uF062\"}.fa-arrow-down:before{content:\"\uF063\"}.fa-mail-forward:before,.fa-share:before{content:\"\uF064\"}.fa-expand:before{content:\"\uF065\"}.fa-compress:before{content:\"\uF066\"}.fa-plus:before{content:\"\uF067\"}.fa-minus:before{content:\"\uF068\"}.fa-asterisk:before{content:\"\uF069\"}.fa-exclamation-circle:before{content:\"\uF06A\"}.fa-gift:before{content:\"\uF06B\"}.fa-leaf:before{content:\"\uF06C\"}.fa-fire:before{content:\"\uF06D\"}.fa-eye:before{content:\"\uF06E\"}.fa-eye-slash:before{content:\"\uF070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\uF071\"}.fa-plane:before{content:\"\uF072\"}.fa-calendar:before{content:\"\uF073\"}.fa-random:before{content:\"\uF074\"}.fa-comment:before{content:\"\uF075\"}.fa-magnet:before{content:\"\uF076\"}.fa-chevron-up:before{content:\"\uF077\"}.fa-chevron-down:before{content:\"\uF078\"}.fa-retweet:before{content:\"\uF079\"}.fa-shopping-cart:before{content:\"\uF07A\"}.fa-folder:before{content:\"\uF07B\"}.fa-folder-open:before{content:\"\uF07C\"}.fa-arrows-v:before{content:\"\uF07D\"}.fa-arrows-h:before{content:\"\uF07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\uF080\"}.fa-twitter-square:before{content:\"\uF081\"}.fa-facebook-square:before{content:\"\uF082\"}.fa-camera-retro:before{content:\"\uF083\"}.fa-key:before{content:\"\uF084\"}.fa-cogs:before,.fa-gears:before{content:\"\uF085\"}.fa-comments:before{content:\"\uF086\"}.fa-thumbs-o-up:before{content:\"\uF087\"}.fa-thumbs-o-down:before{content:\"\uF088\"}.fa-star-half:before{content:\"\uF089\"}.fa-heart-o:before{content:\"\uF08A\"}.fa-sign-out:before{content:\"\uF08B\"}.fa-linkedin-square:before{content:\"\uF08C\"}.fa-thumb-tack:before{content:\"\uF08D\"}.fa-external-link:before{content:\"\uF08E\"}.fa-sign-in:before{content:\"\uF090\"}.fa-trophy:before{content:\"\uF091\"}.fa-github-square:before{content:\"\uF092\"}.fa-upload:before{content:\"\uF093\"}.fa-lemon-o:before{content:\"\uF094\"}.fa-phone:before{content:\"\uF095\"}.fa-square-o:before{content:\"\uF096\"}.fa-bookmark-o:before{content:\"\uF097\"}.fa-phone-square:before{content:\"\uF098\"}.fa-twitter:before{content:\"\uF099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\uF09A\"}.fa-github:before{content:\"\uF09B\"}.fa-unlock:before{content:\"\uF09C\"}.fa-credit-card:before{content:\"\uF09D\"}.fa-feed:before,.fa-rss:before{content:\"\uF09E\"}.fa-hdd-o:before{content:\"\uF0A0\"}.fa-bullhorn:before{content:\"\uF0A1\"}.fa-bell:before{content:\"\uF0F3\"}.fa-certificate:before{content:\"\uF0A3\"}.fa-hand-o-right:before{content:\"\uF0A4\"}.fa-hand-o-left:before{content:\"\uF0A5\"}.fa-hand-o-up:before{content:\"\uF0A6\"}.fa-hand-o-down:before{content:\"\uF0A7\"}.fa-arrow-circle-left:before{content:\"\uF0A8\"}.fa-arrow-circle-right:before{content:\"\uF0A9\"}.fa-arrow-circle-up:before{content:\"\uF0AA\"}.fa-arrow-circle-down:before{content:\"\uF0AB\"}.fa-globe:before{content:\"\uF0AC\"}.fa-wrench:before{content:\"\uF0AD\"}.fa-tasks:before{content:\"\uF0AE\"}.fa-filter:before{content:\"\uF0B0\"}.fa-briefcase:before{content:\"\uF0B1\"}.fa-arrows-alt:before{content:\"\uF0B2\"}.fa-group:before,.fa-users:before{content:\"\uF0C0\"}.fa-chain:before,.fa-link:before{content:\"\uF0C1\"}.fa-cloud:before{content:\"\uF0C2\"}.fa-flask:before{content:\"\uF0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\uF0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\uF0C5\"}.fa-paperclip:before{content:\"\uF0C6\"}.fa-floppy-o:before,.fa-save:before{content:\"\uF0C7\"}.fa-square:before{content:\"\uF0C8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\uF0C9\"}.fa-list-ul:before{content:\"\uF0CA\"}.fa-list-ol:before{content:\"\uF0CB\"}.fa-strikethrough:before{content:\"\uF0CC\"}.fa-underline:before{content:\"\uF0CD\"}.fa-table:before{content:\"\uF0CE\"}.fa-magic:before{content:\"\uF0D0\"}.fa-truck:before{content:\"\uF0D1\"}.fa-pinterest:before{content:\"\uF0D2\"}.fa-pinterest-square:before{content:\"\uF0D3\"}.fa-google-plus-square:before{content:\"\uF0D4\"}.fa-google-plus:before{content:\"\uF0D5\"}.fa-money:before{content:\"\uF0D6\"}.fa-caret-down:before{content:\"\uF0D7\"}.fa-caret-up:before{content:\"\uF0D8\"}.fa-caret-left:before{content:\"\uF0D9\"}.fa-caret-right:before{content:\"\uF0DA\"}.fa-columns:before{content:\"\uF0DB\"}.fa-sort:before,.fa-unsorted:before{content:\"\uF0DC\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\uF0DD\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\uF0DE\"}.fa-envelope:before{content:\"\uF0E0\"}.fa-linkedin:before{content:\"\uF0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\uF0E2\"}.fa-gavel:before,.fa-legal:before{content:\"\uF0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\uF0E4\"}.fa-comment-o:before{content:\"\uF0E5\"}.fa-comments-o:before{content:\"\uF0E6\"}.fa-bolt:before,.fa-flash:before{content:\"\uF0E7\"}.fa-sitemap:before{content:\"\uF0E8\"}.fa-umbrella:before{content:\"\uF0E9\"}.fa-clipboard:before,.fa-paste:before{content:\"\uF0EA\"}.fa-lightbulb-o:before{content:\"\uF0EB\"}.fa-exchange:before{content:\"\uF0EC\"}.fa-cloud-download:before{content:\"\uF0ED\"}.fa-cloud-upload:before{content:\"\uF0EE\"}.fa-user-md:before{content:\"\uF0F0\"}.fa-stethoscope:before{content:\"\uF0F1\"}.fa-suitcase:before{content:\"\uF0F2\"}.fa-bell-o:before{content:\"\uF0A2\"}.fa-coffee:before{content:\"\uF0F4\"}.fa-cutlery:before{content:\"\uF0F5\"}.fa-file-text-o:before{content:\"\uF0F6\"}.fa-building-o:before{content:\"\uF0F7\"}.fa-hospital-o:before{content:\"\uF0F8\"}.fa-ambulance:before{content:\"\uF0F9\"}.fa-medkit:before{content:\"\uF0FA\"}.fa-fighter-jet:before{content:\"\uF0FB\"}.fa-beer:before{content:\"\uF0FC\"}.fa-h-square:before{content:\"\uF0FD\"}.fa-plus-square:before{content:\"\uF0FE\"}.fa-angle-double-left:before{content:\"\uF100\"}.fa-angle-double-right:before{content:\"\uF101\"}.fa-angle-double-up:before{content:\"\uF102\"}.fa-angle-double-down:before{content:\"\uF103\"}.fa-angle-left:before{content:\"\uF104\"}.fa-angle-right:before{content:\"\uF105\"}.fa-angle-up:before{content:\"\uF106\"}.fa-angle-down:before{content:\"\uF107\"}.fa-desktop:before{content:\"\uF108\"}.fa-laptop:before{content:\"\uF109\"}.fa-tablet:before{content:\"\uF10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\uF10B\"}.fa-circle-o:before{content:\"\uF10C\"}.fa-quote-left:before{content:\"\uF10D\"}.fa-quote-right:before{content:\"\uF10E\"}.fa-spinner:before{content:\"\uF110\"}.fa-circle:before{content:\"\uF111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\uF112\"}.fa-github-alt:before{content:\"\uF113\"}.fa-folder-o:before{content:\"\uF114\"}.fa-folder-open-o:before{content:\"\uF115\"}.fa-smile-o:before{content:\"\uF118\"}.fa-frown-o:before{content:\"\uF119\"}.fa-meh-o:before{content:\"\uF11A\"}.fa-gamepad:before{content:\"\uF11B\"}.fa-keyboard-o:before{content:\"\uF11C\"}.fa-flag-o:before{content:\"\uF11D\"}.fa-flag-checkered:before{content:\"\uF11E\"}.fa-terminal:before{content:\"\uF120\"}.fa-code:before{content:\"\uF121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\uF122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\uF123\"}.fa-location-arrow:before{content:\"\uF124\"}.fa-crop:before{content:\"\uF125\"}.fa-code-fork:before{content:\"\uF126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\uF127\"}.fa-question:before{content:\"\uF128\"}.fa-info:before{content:\"\uF129\"}.fa-exclamation:before{content:\"\uF12A\"}.fa-superscript:before{content:\"\uF12B\"}.fa-subscript:before{content:\"\uF12C\"}.fa-eraser:before{content:\"\uF12D\"}.fa-puzzle-piece:before{content:\"\uF12E\"}.fa-microphone:before{content:\"\uF130\"}.fa-microphone-slash:before{content:\"\uF131\"}.fa-shield:before{content:\"\uF132\"}.fa-calendar-o:before{content:\"\uF133\"}.fa-fire-extinguisher:before{content:\"\uF134\"}.fa-rocket:before{content:\"\uF135\"}.fa-maxcdn:before{content:\"\uF136\"}.fa-chevron-circle-left:before{content:\"\uF137\"}.fa-chevron-circle-right:before{content:\"\uF138\"}.fa-chevron-circle-up:before{content:\"\uF139\"}.fa-chevron-circle-down:before{content:\"\uF13A\"}.fa-html5:before{content:\"\uF13B\"}.fa-css3:before{content:\"\uF13C\"}.fa-anchor:before{content:\"\uF13D\"}.fa-unlock-alt:before{content:\"\uF13E\"}.fa-bullseye:before{content:\"\uF140\"}.fa-ellipsis-h:before{content:\"\uF141\"}.fa-ellipsis-v:before{content:\"\uF142\"}.fa-rss-square:before{content:\"\uF143\"}.fa-play-circle:before{content:\"\uF144\"}.fa-ticket:before{content:\"\uF145\"}.fa-minus-square:before{content:\"\uF146\"}.fa-minus-square-o:before{content:\"\uF147\"}.fa-level-up:before{content:\"\uF148\"}.fa-level-down:before{content:\"\uF149\"}.fa-check-square:before{content:\"\uF14A\"}.fa-pencil-square:before{content:\"\uF14B\"}.fa-external-link-square:before{content:\"\uF14C\"}.fa-share-square:before{content:\"\uF14D\"}.fa-compass:before{content:\"\uF14E\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\uF150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\uF151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\uF152\"}.fa-eur:before,.fa-euro:before{content:\"\uF153\"}.fa-gbp:before{content:\"\uF154\"}.fa-dollar:before,.fa-usd:before{content:\"\uF155\"}.fa-inr:before,.fa-rupee:before{content:\"\uF156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\uF157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\uF158\"}.fa-krw:before,.fa-won:before{content:\"\uF159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\uF15A\"}.fa-file:before{content:\"\uF15B\"}.fa-file-text:before{content:\"\uF15C\"}.fa-sort-alpha-asc:before{content:\"\uF15D\"}.fa-sort-alpha-desc:before{content:\"\uF15E\"}.fa-sort-amount-asc:before{content:\"\uF160\"}.fa-sort-amount-desc:before{content:\"\uF161\"}.fa-sort-numeric-asc:before{content:\"\uF162\"}.fa-sort-numeric-desc:before{content:\"\uF163\"}.fa-thumbs-up:before{content:\"\uF164\"}.fa-thumbs-down:before{content:\"\uF165\"}.fa-youtube-square:before{content:\"\uF166\"}.fa-youtube:before{content:\"\uF167\"}.fa-xing:before{content:\"\uF168\"}.fa-xing-square:before{content:\"\uF169\"}.fa-youtube-play:before{content:\"\uF16A\"}.fa-dropbox:before{content:\"\uF16B\"}.fa-stack-overflow:before{content:\"\uF16C\"}.fa-instagram:before{content:\"\uF16D\"}.fa-flickr:before{content:\"\uF16E\"}.fa-adn:before{content:\"\uF170\"}.fa-bitbucket:before{content:\"\uF171\"}.fa-bitbucket-square:before{content:\"\uF172\"}.fa-tumblr:before{content:\"\uF173\"}.fa-tumblr-square:before{content:\"\uF174\"}.fa-long-arrow-down:before{content:\"\uF175\"}.fa-long-arrow-up:before{content:\"\uF176\"}.fa-long-arrow-left:before{content:\"\uF177\"}.fa-long-arrow-right:before{content:\"\uF178\"}.fa-apple:before{content:\"\uF179\"}.fa-windows:before{content:\"\uF17A\"}.fa-android:before{content:\"\uF17B\"}.fa-linux:before{content:\"\uF17C\"}.fa-dribbble:before{content:\"\uF17D\"}.fa-skype:before{content:\"\uF17E\"}.fa-foursquare:before{content:\"\uF180\"}.fa-trello:before{content:\"\uF181\"}.fa-female:before{content:\"\uF182\"}.fa-male:before{content:\"\uF183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\uF184\"}.fa-sun-o:before{content:\"\uF185\"}.fa-moon-o:before{content:\"\uF186\"}.fa-archive:before{content:\"\uF187\"}.fa-bug:before{content:\"\uF188\"}.fa-vk:before{content:\"\uF189\"}.fa-weibo:before{content:\"\uF18A\"}.fa-renren:before{content:\"\uF18B\"}.fa-pagelines:before{content:\"\uF18C\"}.fa-stack-exchange:before{content:\"\uF18D\"}.fa-arrow-circle-o-right:before{content:\"\uF18E\"}.fa-arrow-circle-o-left:before{content:\"\uF190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\uF191\"}.fa-dot-circle-o:before{content:\"\uF192\"}.fa-wheelchair:before{content:\"\uF193\"}.fa-vimeo-square:before{content:\"\uF194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\uF195\"}.fa-plus-square-o:before{content:\"\uF196\"}.fa-space-shuttle:before{content:\"\uF197\"}.fa-slack:before{content:\"\uF198\"}.fa-envelope-square:before{content:\"\uF199\"}.fa-wordpress:before{content:\"\uF19A\"}.fa-openid:before{content:\"\uF19B\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\uF19C\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\uF19D\"}.fa-yahoo:before{content:\"\uF19E\"}.fa-google:before{content:\"\uF1A0\"}.fa-reddit:before{content:\"\uF1A1\"}.fa-reddit-square:before{content:\"\uF1A2\"}.fa-stumbleupon-circle:before{content:\"\uF1A3\"}.fa-stumbleupon:before{content:\"\uF1A4\"}.fa-delicious:before{content:\"\uF1A5\"}.fa-digg:before{content:\"\uF1A6\"}.fa-pied-piper-pp:before{content:\"\uF1A7\"}.fa-pied-piper-alt:before{content:\"\uF1A8\"}.fa-drupal:before{content:\"\uF1A9\"}.fa-joomla:before{content:\"\uF1AA\"}.fa-language:before{content:\"\uF1AB\"}.fa-fax:before{content:\"\uF1AC\"}.fa-building:before{content:\"\uF1AD\"}.fa-child:before{content:\"\uF1AE\"}.fa-paw:before{content:\"\uF1B0\"}.fa-spoon:before{content:\"\uF1B1\"}.fa-cube:before{content:\"\uF1B2\"}.fa-cubes:before{content:\"\uF1B3\"}.fa-behance:before{content:\"\uF1B4\"}.fa-behance-square:before{content:\"\uF1B5\"}.fa-steam:before{content:\"\uF1B6\"}.fa-steam-square:before{content:\"\uF1B7\"}.fa-recycle:before{content:\"\uF1B8\"}.fa-automobile:before,.fa-car:before{content:\"\uF1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\uF1BA\"}.fa-tree:before{content:\"\uF1BB\"}.fa-spotify:before{content:\"\uF1BC\"}.fa-deviantart:before{content:\"\uF1BD\"}.fa-soundcloud:before{content:\"\uF1BE\"}.fa-database:before{content:\"\uF1C0\"}.fa-file-pdf-o:before{content:\"\uF1C1\"}.fa-file-word-o:before{content:\"\uF1C2\"}.fa-file-excel-o:before{content:\"\uF1C3\"}.fa-file-powerpoint-o:before{content:\"\uF1C4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\uF1C5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\uF1C6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\uF1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\uF1C8\"}.fa-file-code-o:before{content:\"\uF1C9\"}.fa-vine:before{content:\"\uF1CA\"}.fa-codepen:before{content:\"\uF1CB\"}.fa-jsfiddle:before{content:\"\uF1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\uF1CD\"}.fa-circle-o-notch:before{content:\"\uF1CE\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\uF1D0\"}.fa-empire:before,.fa-ge:before{content:\"\uF1D1\"}.fa-git-square:before{content:\"\uF1D2\"}.fa-git:before{content:\"\uF1D3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\uF1D4\"}.fa-tencent-weibo:before{content:\"\uF1D5\"}.fa-qq:before{content:\"\uF1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\uF1D7\"}.fa-paper-plane:before,.fa-send:before{content:\"\uF1D8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\uF1D9\"}.fa-history:before{content:\"\uF1DA\"}.fa-circle-thin:before{content:\"\uF1DB\"}.fa-header:before{content:\"\uF1DC\"}.fa-paragraph:before{content:\"\uF1DD\"}.fa-sliders:before{content:\"\uF1DE\"}.fa-share-alt:before{content:\"\uF1E0\"}.fa-share-alt-square:before{content:\"\uF1E1\"}.fa-bomb:before{content:\"\uF1E2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\uF1E3\"}.fa-tty:before{content:\"\uF1E4\"}.fa-binoculars:before{content:\"\uF1E5\"}.fa-plug:before{content:\"\uF1E6\"}.fa-slideshare:before{content:\"\uF1E7\"}.fa-twitch:before{content:\"\uF1E8\"}.fa-yelp:before{content:\"\uF1E9\"}.fa-newspaper-o:before{content:\"\uF1EA\"}.fa-wifi:before{content:\"\uF1EB\"}.fa-calculator:before{content:\"\uF1EC\"}.fa-paypal:before{content:\"\uF1ED\"}.fa-google-wallet:before{content:\"\uF1EE\"}.fa-cc-visa:before{content:\"\uF1F0\"}.fa-cc-mastercard:before{content:\"\uF1F1\"}.fa-cc-discover:before{content:\"\uF1F2\"}.fa-cc-amex:before{content:\"\uF1F3\"}.fa-cc-paypal:before{content:\"\uF1F4\"}.fa-cc-stripe:before{content:\"\uF1F5\"}.fa-bell-slash:before{content:\"\uF1F6\"}.fa-bell-slash-o:before{content:\"\uF1F7\"}.fa-trash:before{content:\"\uF1F8\"}.fa-copyright:before{content:\"\uF1F9\"}.fa-at:before{content:\"\uF1FA\"}.fa-eyedropper:before{content:\"\uF1FB\"}.fa-paint-brush:before{content:\"\uF1FC\"}.fa-birthday-cake:before{content:\"\uF1FD\"}.fa-area-chart:before{content:\"\uF1FE\"}.fa-pie-chart:before{content:\"\uF200\"}.fa-line-chart:before{content:\"\uF201\"}.fa-lastfm:before{content:\"\uF202\"}.fa-lastfm-square:before{content:\"\uF203\"}.fa-toggle-off:before{content:\"\uF204\"}.fa-toggle-on:before{content:\"\uF205\"}.fa-bicycle:before{content:\"\uF206\"}.fa-bus:before{content:\"\uF207\"}.fa-ioxhost:before{content:\"\uF208\"}.fa-angellist:before{content:\"\uF209\"}.fa-cc:before{content:\"\uF20A\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\uF20B\"}.fa-meanpath:before{content:\"\uF20C\"}.fa-buysellads:before{content:\"\uF20D\"}.fa-connectdevelop:before{content:\"\uF20E\"}.fa-dashcube:before{content:\"\uF210\"}.fa-forumbee:before{content:\"\uF211\"}.fa-leanpub:before{content:\"\uF212\"}.fa-sellsy:before{content:\"\uF213\"}.fa-shirtsinbulk:before{content:\"\uF214\"}.fa-simplybuilt:before{content:\"\uF215\"}.fa-skyatlas:before{content:\"\uF216\"}.fa-cart-plus:before{content:\"\uF217\"}.fa-cart-arrow-down:before{content:\"\uF218\"}.fa-diamond:before{content:\"\uF219\"}.fa-ship:before{content:\"\uF21A\"}.fa-user-secret:before{content:\"\uF21B\"}.fa-motorcycle:before{content:\"\uF21C\"}.fa-street-view:before{content:\"\uF21D\"}.fa-heartbeat:before{content:\"\uF21E\"}.fa-venus:before{content:\"\uF221\"}.fa-mars:before{content:\"\uF222\"}.fa-mercury:before{content:\"\uF223\"}.fa-intersex:before,.fa-transgender:before{content:\"\uF224\"}.fa-transgender-alt:before{content:\"\uF225\"}.fa-venus-double:before{content:\"\uF226\"}.fa-mars-double:before{content:\"\uF227\"}.fa-venus-mars:before{content:\"\uF228\"}.fa-mars-stroke:before{content:\"\uF229\"}.fa-mars-stroke-v:before{content:\"\uF22A\"}.fa-mars-stroke-h:before{content:\"\uF22B\"}.fa-neuter:before{content:\"\uF22C\"}.fa-genderless:before{content:\"\uF22D\"}.fa-facebook-official:before{content:\"\uF230\"}.fa-pinterest-p:before{content:\"\uF231\"}.fa-whatsapp:before{content:\"\uF232\"}.fa-server:before{content:\"\uF233\"}.fa-user-plus:before{content:\"\uF234\"}.fa-user-times:before{content:\"\uF235\"}.fa-bed:before,.fa-hotel:before{content:\"\uF236\"}.fa-viacoin:before{content:\"\uF237\"}.fa-train:before{content:\"\uF238\"}.fa-subway:before{content:\"\uF239\"}.fa-medium:before{content:\"\uF23A\"}.fa-y-combinator:before,.fa-yc:before{content:\"\uF23B\"}.fa-optin-monster:before{content:\"\uF23C\"}.fa-opencart:before{content:\"\uF23D\"}.fa-expeditedssl:before{content:\"\uF23E\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\uF240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\uF241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\uF242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\uF243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\uF244\"}.fa-mouse-pointer:before{content:\"\uF245\"}.fa-i-cursor:before{content:\"\uF246\"}.fa-object-group:before{content:\"\uF247\"}.fa-object-ungroup:before{content:\"\uF248\"}.fa-sticky-note:before{content:\"\uF249\"}.fa-sticky-note-o:before{content:\"\uF24A\"}.fa-cc-jcb:before{content:\"\uF24B\"}.fa-cc-diners-club:before{content:\"\uF24C\"}.fa-clone:before{content:\"\uF24D\"}.fa-balance-scale:before{content:\"\uF24E\"}.fa-hourglass-o:before{content:\"\uF250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\uF251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\uF252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\uF253\"}.fa-hourglass:before{content:\"\uF254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\uF255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\uF256\"}.fa-hand-scissors-o:before{content:\"\uF257\"}.fa-hand-lizard-o:before{content:\"\uF258\"}.fa-hand-spock-o:before{content:\"\uF259\"}.fa-hand-pointer-o:before{content:\"\uF25A\"}.fa-hand-peace-o:before{content:\"\uF25B\"}.fa-trademark:before{content:\"\uF25C\"}.fa-registered:before{content:\"\uF25D\"}.fa-creative-commons:before{content:\"\uF25E\"}.fa-gg:before{content:\"\uF260\"}.fa-gg-circle:before{content:\"\uF261\"}.fa-tripadvisor:before{content:\"\uF262\"}.fa-odnoklassniki:before{content:\"\uF263\"}.fa-odnoklassniki-square:before{content:\"\uF264\"}.fa-get-pocket:before{content:\"\uF265\"}.fa-wikipedia-w:before{content:\"\uF266\"}.fa-safari:before{content:\"\uF267\"}.fa-chrome:before{content:\"\uF268\"}.fa-firefox:before{content:\"\uF269\"}.fa-opera:before{content:\"\uF26A\"}.fa-internet-explorer:before{content:\"\uF26B\"}.fa-television:before,.fa-tv:before{content:\"\uF26C\"}.fa-contao:before{content:\"\uF26D\"}.fa-500px:before{content:\"\uF26E\"}.fa-amazon:before{content:\"\uF270\"}.fa-calendar-plus-o:before{content:\"\uF271\"}.fa-calendar-minus-o:before{content:\"\uF272\"}.fa-calendar-times-o:before{content:\"\uF273\"}.fa-calendar-check-o:before{content:\"\uF274\"}.fa-industry:before{content:\"\uF275\"}.fa-map-pin:before{content:\"\uF276\"}.fa-map-signs:before{content:\"\uF277\"}.fa-map-o:before{content:\"\uF278\"}.fa-map:before{content:\"\uF279\"}.fa-commenting:before{content:\"\uF27A\"}.fa-commenting-o:before{content:\"\uF27B\"}.fa-houzz:before{content:\"\uF27C\"}.fa-vimeo:before{content:\"\uF27D\"}.fa-black-tie:before{content:\"\uF27E\"}.fa-fonticons:before{content:\"\uF280\"}.fa-reddit-alien:before{content:\"\uF281\"}.fa-edge:before{content:\"\uF282\"}.fa-credit-card-alt:before{content:\"\uF283\"}.fa-codiepie:before{content:\"\uF284\"}.fa-modx:before{content:\"\uF285\"}.fa-fort-awesome:before{content:\"\uF286\"}.fa-usb:before{content:\"\uF287\"}.fa-product-hunt:before{content:\"\uF288\"}.fa-mixcloud:before{content:\"\uF289\"}.fa-scribd:before{content:\"\uF28A\"}.fa-pause-circle:before{content:\"\uF28B\"}.fa-pause-circle-o:before{content:\"\uF28C\"}.fa-stop-circle:before{content:\"\uF28D\"}.fa-stop-circle-o:before{content:\"\uF28E\"}.fa-shopping-bag:before{content:\"\uF290\"}.fa-shopping-basket:before{content:\"\uF291\"}.fa-hashtag:before{content:\"\uF292\"}.fa-bluetooth:before{content:\"\uF293\"}.fa-bluetooth-b:before{content:\"\uF294\"}.fa-percent:before{content:\"\uF295\"}.fa-gitlab:before{content:\"\uF296\"}.fa-wpbeginner:before{content:\"\uF297\"}.fa-wpforms:before{content:\"\uF298\"}.fa-envira:before{content:\"\uF299\"}.fa-universal-access:before{content:\"\uF29A\"}.fa-wheelchair-alt:before{content:\"\uF29B\"}.fa-question-circle-o:before{content:\"\uF29C\"}.fa-blind:before{content:\"\uF29D\"}.fa-audio-description:before{content:\"\uF29E\"}.fa-volume-control-phone:before{content:\"\uF2A0\"}.fa-braille:before{content:\"\uF2A1\"}.fa-assistive-listening-systems:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\uF2A3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\uF2A4\"}.fa-glide:before{content:\"\uF2A5\"}.fa-glide-g:before{content:\"\uF2A6\"}.fa-sign-language:before,.fa-signing:before{content:\"\uF2A7\"}.fa-low-vision:before{content:\"\uF2A8\"}.fa-viadeo:before{content:\"\uF2A9\"}.fa-viadeo-square:before{content:\"\uF2AA\"}.fa-snapchat:before{content:\"\uF2AB\"}.fa-snapchat-ghost:before{content:\"\uF2AC\"}.fa-snapchat-square:before{content:\"\uF2AD\"}.fa-pied-piper:before{content:\"\uF2AE\"}.fa-first-order:before{content:\"\uF2B0\"}.fa-yoast:before{content:\"\uF2B1\"}.fa-themeisle:before{content:\"\uF2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\uF2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\uF2B4\"}.fa-handshake-o:before{content:\"\uF2B5\"}.fa-envelope-open:before{content:\"\uF2B6\"}.fa-envelope-open-o:before{content:\"\uF2B7\"}.fa-linode:before{content:\"\uF2B8\"}.fa-address-book:before{content:\"\uF2B9\"}.fa-address-book-o:before{content:\"\uF2BA\"}.fa-address-card:before,.fa-vcard:before{content:\"\uF2BB\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\uF2BC\"}.fa-user-circle:before{content:\"\uF2BD\"}.fa-user-circle-o:before{content:\"\uF2BE\"}.fa-user-o:before{content:\"\uF2C0\"}.fa-id-badge:before{content:\"\uF2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\uF2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\uF2C3\"}.fa-quora:before{content:\"\uF2C4\"}.fa-free-code-camp:before{content:\"\uF2C5\"}.fa-telegram:before{content:\"\uF2C6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\uF2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\uF2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\uF2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\uF2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\uF2CB\"}.fa-shower:before{content:\"\uF2CC\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\uF2CD\"}.fa-podcast:before{content:\"\uF2CE\"}.fa-window-maximize:before{content:\"\uF2D0\"}.fa-window-minimize:before{content:\"\uF2D1\"}.fa-window-restore:before{content:\"\uF2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\uF2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\uF2D4\"}.fa-bandcamp:before{content:\"\uF2D5\"}.fa-grav:before{content:\"\uF2D6\"}.fa-etsy:before{content:\"\uF2D7\"}.fa-imdb:before{content:\"\uF2D8\"}.fa-ravelry:before{content:\"\uF2D9\"}.fa-eercast:before{content:\"\uF2DA\"}.fa-microchip:before{content:\"\uF2DB\"}.fa-snowflake-o:before{content:\"\uF2DC\"}.fa-superpowers:before{content:\"\uF2DD\"}.fa-wpexplorer:before{content:\"\uF2DE\"}.fa-meetup:before{content:\"\uF2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:rgba(255,255,255,.5)}.angular-editor-toolbar{font:100 .8rem/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:0;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*=\"display:none\"]):not([style*=\"display: none\"]),.select-button{display:inline-block}.select-button.disabled{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}"]
                }] }
    ];
    /** @nocollapse */
    AngularEditorToolbarComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: AngularEditorService },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    AngularEditorToolbarComponent.propDecorators = {
        id: [{ type: Input }],
        uploadUrl: [{ type: Input }],
        upload: [{ type: Input }],
        showToolbar: [{ type: Input }],
        fonts: [{ type: Input }],
        customClasses: [{ type: Input }],
        defaultFontName: [{ type: Input }],
        defaultFontSize: [{ type: Input }],
        hiddenButtons: [{ type: Input }],
        execute: [{ type: Output }],
        myInputFile: [{ type: ViewChild, args: ['fileInput', { static: true },] }]
    };
    return AngularEditorToolbarComponent;
}());
export { AngularEditorToolbarComponent };
if (false) {
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.htmlMode;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.linkSelected;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.block;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.fontName;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.fontSize;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.foreColour;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.backColor;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.headings;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.fontSizes;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.customClassId;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype._customClasses;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.customClassList;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.tagMap;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.select;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.buttons;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.id;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.uploadUrl;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.upload;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.showToolbar;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.fonts;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.hiddenButtons;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.execute;
    /** @type {?} */
    AngularEditorToolbarComponent.prototype.myInputFile;
    /**
     * @type {?}
     * @private
     */
    AngularEditorToolbarComponent.prototype.r;
    /**
     * @type {?}
     * @private
     */
    AngularEditorToolbarComponent.prototype.editorService;
    /**
     * @type {?}
     * @private
     */
    AngularEditorToolbarComponent.prototype.er;
    /**
     * @type {?}
     * @private
     */
    AngularEditorToolbarComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lZGl0b3ItdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa29sa292L2FuZ3VsYXItZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLG9CQUFvQixFQUFrQixNQUFNLDBCQUEwQixDQUFDO0FBRWhGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUt6QztJQW9KRSx1Q0FDVSxDQUFZLEVBQ1osYUFBbUMsRUFDbkMsRUFBYyxFQUNJLEdBQVE7UUFIMUIsTUFBQyxHQUFELENBQUMsQ0FBVztRQUNaLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ0ksUUFBRyxHQUFILEdBQUcsQ0FBSztRQWpKcEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUM3QixhQUFRLEdBQUcsR0FBRyxDQUFDO1FBSWYsYUFBUSxHQUFtQjtZQUN6QjtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixLQUFLLEVBQUUsSUFBSTthQUNaO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLElBQUk7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e0NvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5ndWxhckVkaXRvclNlcnZpY2UsIFVwbG9hZFJlc3BvbnNlIH0gZnJvbSAnLi9hbmd1bGFyLWVkaXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Q3VzdG9tQ2xhc3N9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IHtTZWxlY3RPcHRpb259IGZyb20gJy4vYWUtc2VsZWN0L2FlLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW5ndWxhci1lZGl0b3ItdG9vbGJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FuZ3VsYXItZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FuZ3VsYXItZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRWRpdG9yVG9vbGJhckNvbXBvbmVudCB7XHJcbiAgaHRtbE1vZGUgPSBmYWxzZTtcclxuICBsaW5rU2VsZWN0ZWQgPSBmYWxzZTtcclxuICBibG9jayA9ICdkZWZhdWx0JztcclxuICBmb250TmFtZSA9ICdUaW1lcyBOZXcgUm9tYW4nO1xyXG4gIGZvbnRTaXplID0gJzMnO1xyXG4gIGZvcmVDb2xvdXI7XHJcbiAgYmFja0NvbG9yO1xyXG5cclxuICBoZWFkaW5nczogU2VsZWN0T3B0aW9uW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnSGVhZGluZyAxJyxcclxuICAgICAgdmFsdWU6ICdoMScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogJ0hlYWRpbmcgMicsXHJcbiAgICAgIHZhbHVlOiAnaDInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6ICdIZWFkaW5nIDMnLFxyXG4gICAgICB2YWx1ZTogJ2gzJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnSGVhZGluZyA0JyxcclxuICAgICAgdmFsdWU6ICdoNCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogJ0hlYWRpbmcgNScsXHJcbiAgICAgIHZhbHVlOiAnaDUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6ICdIZWFkaW5nIDYnLFxyXG4gICAgICB2YWx1ZTogJ2g2JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnSGVhZGluZyA3JyxcclxuICAgICAgdmFsdWU6ICdoNycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogJ1BhcmFncmFwaCcsXHJcbiAgICAgIHZhbHVlOiAncCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogJ1ByZWRlZmluZWQnLFxyXG4gICAgICB2YWx1ZTogJ3ByZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnU3RhbmRhcmQnLFxyXG4gICAgICB2YWx1ZTogJ2RpdidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnZGVmYXVsdCcsXHJcbiAgICAgIHZhbHVlOiAnZGVmYXVsdCdcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBmb250U2l6ZXM6IFNlbGVjdE9wdGlvbltdID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogJzEnLFxyXG4gICAgICB2YWx1ZTogJzEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6ICcyJyxcclxuICAgICAgdmFsdWU6ICcyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnMycsXHJcbiAgICAgIHZhbHVlOiAnMycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogJzQnLFxyXG4gICAgICB2YWx1ZTogJzQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6ICc1JyxcclxuICAgICAgdmFsdWU6ICc1JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnNicsXHJcbiAgICAgIHZhbHVlOiAnNicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogJzcnLFxyXG4gICAgICB2YWx1ZTogJzcnLFxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGN1c3RvbUNsYXNzSWQgPSAnLTEnO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXHJcbiAgX2N1c3RvbUNsYXNzZXM6IEN1c3RvbUNsYXNzW107XHJcbiAgY3VzdG9tQ2xhc3NMaXN0OiBTZWxlY3RPcHRpb25bXSA9IFt7bGFiZWw6ICcnLCB2YWx1ZTogJyd9XTtcclxuICAvLyB1cGxvYWRVcmw6IHN0cmluZztcclxuXHJcbiAgdGFnTWFwID0ge1xyXG4gICAgQkxPQ0tRVU9URTogJ2luZGVudCcsXHJcbiAgICBBOiAnbGluaydcclxuICB9O1xyXG5cclxuICBzZWxlY3QgPSBbJ0gxJywgJ0gyJywgJ0gzJywgJ0g0JywgJ0g1JywgJ0g2JywgJ1AnLCAnUFJFJywgJ0RJViddO1xyXG5cclxuICBidXR0b25zID0gWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlVGhyb3VnaCcsICdzdWJzY3JpcHQnLCAnc3VwZXJzY3JpcHQnLCAnanVzdGlmeUxlZnQnLCAnanVzdGlmeUNlbnRlcicsXHJcbiAgICAnanVzdGlmeVJpZ2h0JywgJ2p1c3RpZnlGdWxsJywgJ2luZGVudCcsICdvdXRkZW50JywgJ2luc2VydFVub3JkZXJlZExpc3QnLCAnaW5zZXJ0T3JkZXJlZExpc3QnLCAnbGluayddO1xyXG5cclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHVwbG9hZFVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHVwbG9hZDogKGZpbGU6IEZpbGUpID0+IE9ic2VydmFibGU8SHR0cEV2ZW50PFVwbG9hZFJlc3BvbnNlPj47XHJcbiAgQElucHV0KCkgc2hvd1Rvb2xiYXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZm9udHM6IFNlbGVjdE9wdGlvbltdID0gW3tsYWJlbDogJycsIHZhbHVlOiAnJ31dO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjdXN0b21DbGFzc2VzKGNsYXNzZXM6IEN1c3RvbUNsYXNzW10pIHtcclxuICAgIGlmIChjbGFzc2VzKSB7XHJcbiAgICAgIHRoaXMuX2N1c3RvbUNsYXNzZXMgPSBjbGFzc2VzO1xyXG4gICAgICB0aGlzLmN1c3RvbUNsYXNzTGlzdCA9IHRoaXMuX2N1c3RvbUNsYXNzZXMubWFwKCh4LCBpKSA9PiAoe2xhYmVsOiB4Lm5hbWUsIHZhbHVlOiBpLnRvU3RyaW5nKCl9KSk7XHJcbiAgICAgIHRoaXMuY3VzdG9tQ2xhc3NMaXN0LnVuc2hpZnQoe2xhYmVsOiAnQ2xlYXIgQ2xhc3MnLCB2YWx1ZTogJy0xJ30pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGVmYXVsdEZvbnROYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLmZvbnROYW1lID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkZWZhdWx0Rm9udFNpemUodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZm9udFNpemUgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGhpZGRlbkJ1dHRvbnM6IHN0cmluZ1tdW107XHJcblxyXG4gIEBPdXRwdXQoKSBleGVjdXRlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdmaWxlSW5wdXQnLCB7c3RhdGljOiB0cnVlfSkgbXlJbnB1dEZpbGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNMaW5rQnV0dG9uRGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5odG1sTW9kZSB8fCAhQm9vbGVhbih0aGlzLmVkaXRvclNlcnZpY2Uuc2VsZWN0ZWRUZXh0KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVkaXRvclNlcnZpY2U6IEFuZ3VsYXJFZGl0b3JTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBlcjogRWxlbWVudFJlZixcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnlcclxuICApIHtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXIgY29tbWFuZCBmcm9tIGVkaXRvciBoZWFkZXIgYnV0dG9uc1xyXG4gICAqIEBwYXJhbSBjb21tYW5kIHN0cmluZyBmcm9tIHRvb2xiYXIgYnV0dG9uc1xyXG4gICAqL1xyXG4gIHRyaWdnZXJDb21tYW5kKGNvbW1hbmQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5leGVjdXRlLmVtaXQoY29tbWFuZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBoaWdobGlnaHQgZWRpdG9yIGJ1dHRvbnMgd2hlbiBjdXJzb3IgbW92ZWQgb3IgcG9zaXRpb25pbmdcclxuICAgKi9cclxuICB0cmlnZ2VyQnV0dG9ucygpIHtcclxuICAgIGlmICghdGhpcy5zaG93VG9vbGJhcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5kb2MucXVlcnlDb21tYW5kU3RhdGUoZSk7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRCeUlkID0gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQoZSArICctJyArIHRoaXMuaWQpO1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5yLmFkZENsYXNzKGVsZW1lbnRCeUlkLCAnYWN0aXZlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yLnJlbW92ZUNsYXNzKGVsZW1lbnRCeUlkLCAnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdHJpZ2dlciBoaWdobGlnaHQgZWRpdG9yIGJ1dHRvbnMgd2hlbiBjdXJzb3IgbW92ZWQgb3IgcG9zaXRpb25pbmcgaW4gYmxvY2tcclxuICAgKi9cclxuICB0cmlnZ2VyQmxvY2tzKG5vZGVzOiBOb2RlW10pIHtcclxuICAgIGlmICghdGhpcy5zaG93VG9vbGJhcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmxpbmtTZWxlY3RlZCA9IG5vZGVzLmZpbmRJbmRleCh4ID0+IHgubm9kZU5hbWUgPT09ICdBJykgPiAtMTtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZWxlY3QuZm9yRWFjaCh5ID0+IHtcclxuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzLmZpbmQoeCA9PiB4Lm5vZGVOYW1lID09PSB5KTtcclxuICAgICAgaWYgKG5vZGUgIT09IHVuZGVmaW5lZCAmJiB5ID09PSBub2RlLm5vZGVOYW1lKSB7XHJcbiAgICAgICAgaWYgKGZvdW5kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgdGhpcy5ibG9jayA9IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoZm91bmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5ibG9jayA9ICdkZWZhdWx0JztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm91bmQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLl9jdXN0b21DbGFzc2VzKSB7XHJcbiAgICAgIHRoaXMuX2N1c3RvbUNsYXNzZXMuZm9yRWFjaCgoeSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBub2RlID0gbm9kZXMuZmluZCh4ID0+IHtcclxuICAgICAgICAgIGlmICh4IGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4geC5jbGFzc05hbWUgPT09IHkuY2xhc3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG5vZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgaWYgKGZvdW5kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbUNsYXNzSWQgPSBpbmRleC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChmb3VuZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHRoaXMuY3VzdG9tQ2xhc3NJZCA9ICctMSc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnRhZ01hcCkubWFwKGUgPT4ge1xyXG4gICAgICBjb25zdCBlbGVtZW50QnlJZCA9IHRoaXMuZG9jLmdldEVsZW1lbnRCeUlkKHRoaXMudGFnTWFwW2VdICsgJy0nICsgdGhpcy5pZCk7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBub2Rlcy5maW5kKHggPT4geC5ub2RlTmFtZSA9PT0gZSk7XHJcbiAgICAgIGlmIChub2RlICE9PSB1bmRlZmluZWQgJiYgZSA9PT0gbm9kZS5ub2RlTmFtZSkge1xyXG4gICAgICAgIHRoaXMuci5hZGRDbGFzcyhlbGVtZW50QnlJZCwgJ2FjdGl2ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuci5yZW1vdmVDbGFzcyhlbGVtZW50QnlJZCwgJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmZvcmVDb2xvdXIgPSB0aGlzLmRvYy5xdWVyeUNvbW1hbmRWYWx1ZSgnRm9yZUNvbG9yJyk7XHJcbiAgICB0aGlzLmZvbnRTaXplID0gdGhpcy5kb2MucXVlcnlDb21tYW5kVmFsdWUoJ0ZvbnRTaXplJyk7XHJcbiAgICB0aGlzLmZvbnROYW1lID0gdGhpcy5kb2MucXVlcnlDb21tYW5kVmFsdWUoJ0ZvbnROYW1lJykucmVwbGFjZSgvXCIvZywgJycpO1xyXG4gICAgdGhpcy5iYWNrQ29sb3IgPSB0aGlzLmRvYy5xdWVyeUNvbW1hbmRWYWx1ZSgnYmFja0NvbG9yJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBpbnNlcnQgVVJMIGxpbmtcclxuICAgKi9cclxuICBpbnNlcnRVcmwoKSB7XHJcbiAgICBsZXQgdXJsID0gJ2h0dHBzOlxcL1xcLyc7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLmVkaXRvclNlcnZpY2Uuc2F2ZWRTZWxlY3Rpb247XHJcbiAgICBpZiAoc2VsZWN0aW9uICYmIHNlbGVjdGlvbi5jb21tb25BbmNlc3RvckNvbnRhaW5lci5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lID09PSAnQScpIHtcclxuICAgICAgY29uc3QgcGFyZW50ID0gc2VsZWN0aW9uLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLnBhcmVudEVsZW1lbnQgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XHJcbiAgICAgIGlmIChwYXJlbnQuaHJlZiAhPT0gJycpIHtcclxuICAgICAgICB1cmwgPSBwYXJlbnQuaHJlZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXJsID0gcHJvbXB0KCdJbnNlcnQgVVJMIGxpbmsnLCB1cmwpO1xyXG4gICAgaWYgKHVybCAmJiB1cmwgIT09ICcnICYmIHVybCAhPT0gJ2h0dHBzOi8vJykge1xyXG4gICAgICB0aGlzLmVkaXRvclNlcnZpY2UuY3JlYXRlTGluayh1cmwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaW5zZXJ0IFZpZGVvIGxpbmtcclxuICAgKi9cclxuICBpbnNlcnRWaWRlbygpIHtcclxuICAgIHRoaXMuZXhlY3V0ZS5lbWl0KCcnKTtcclxuICAgIGNvbnN0IHVybCA9IHByb21wdCgnSW5zZXJ0IFZpZGVvIGxpbmsnLCBgaHR0cHM6Ly9gKTtcclxuICAgIGlmICh1cmwgJiYgdXJsICE9PSAnJyAmJiB1cmwgIT09IGBodHRwczovL2ApIHtcclxuICAgICAgdGhpcy5lZGl0b3JTZXJ2aWNlLmluc2VydFZpZGVvKHVybCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogaW5zZXJ0IGNvbG9yICovXHJcbiAgaW5zZXJ0Q29sb3IoY29sb3I6IHN0cmluZywgd2hlcmU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZGl0b3JTZXJ2aWNlLmluc2VydENvbG9yKGNvbG9yLCB3aGVyZSk7XHJcbiAgICB0aGlzLmV4ZWN1dGUuZW1pdCgnJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzZXQgZm9udCBOYW1lL2ZhbWlseVxyXG4gICAqIEBwYXJhbSBmb3JlQ29sb3Igc3RyaW5nXHJcbiAgICovXHJcbiAgc2V0Rm9udE5hbWUoZm9yZUNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuZWRpdG9yU2VydmljZS5zZXRGb250TmFtZShmb3JlQ29sb3IpO1xyXG4gICAgdGhpcy5leGVjdXRlLmVtaXQoJycpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0IGZvbnQgU2l6ZVxyXG4gICAqIEBwYXJhbSBmb250U2l6ZSBzdHJpbmdcclxuICAgKi9cclxuICBzZXRGb250U2l6ZShmb250U2l6ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmVkaXRvclNlcnZpY2Uuc2V0Rm9udFNpemUoZm9udFNpemUpO1xyXG4gICAgdGhpcy5leGVjdXRlLmVtaXQoJycpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdG9nZ2xlIGVkaXRvciBtb2RlIChXWVNJV1lHIG9yIFNPVVJDRSlcclxuICAgKiBAcGFyYW0gbSBib29sZWFuXHJcbiAgICovXHJcbiAgc2V0RWRpdG9yTW9kZShtOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCB0b2dnbGVFZGl0b3JNb2RlQnV0dG9uID0gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZUVkaXRvck1vZGUnICsgJy0nICsgdGhpcy5pZCk7XHJcbiAgICBpZiAobSkge1xyXG4gICAgICB0aGlzLnIuYWRkQ2xhc3ModG9nZ2xlRWRpdG9yTW9kZUJ1dHRvbiwgJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yLnJlbW92ZUNsYXNzKHRvZ2dsZUVkaXRvck1vZGVCdXR0b24sICdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIHRoaXMuaHRtbE1vZGUgPSBtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBsb2FkIGltYWdlIHdoZW4gZmlsZSBpcyBzZWxlY3RlZFxyXG4gICAqL1xyXG4gIG9uRmlsZUNoYW5nZWQoZXZlbnQpIHtcclxuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBpZiAoZmlsZS50eXBlLmluY2x1ZGVzKCdpbWFnZS8nKSkge1xyXG4gICAgICBpZiAodGhpcy51cGxvYWQpIHtcclxuICAgICAgICB0aGlzLnVwbG9hZChmaWxlKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8VXBsb2FkUmVzcG9uc2U+KSA9PiB0aGlzLndhdGNoVXBsb2FkSW1hZ2UocmVzcG9uc2UsIGV2ZW50KSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy51cGxvYWRVcmwpIHtcclxuICAgICAgICB0aGlzLmVkaXRvclNlcnZpY2UudXBsb2FkSW1hZ2UoZmlsZSkuc3Vic2NyaWJlKChyZXNwb25zZTogSHR0cFJlc3BvbnNlPFVwbG9hZFJlc3BvbnNlPikgPT4gdGhpcy53YXRjaFVwbG9hZEltYWdlKHJlc3BvbnNlLCBldmVudCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBQcm9ncmVzc0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBmciA9IGUuY3VycmVudFRhcmdldCBhcyBGaWxlUmVhZGVyO1xyXG4gICAgICAgICAgdGhpcy5lZGl0b3JTZXJ2aWNlLmluc2VydEltYWdlKGZyLnJlc3VsdC50b1N0cmluZygpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3YXRjaFVwbG9hZEltYWdlKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8e2ltYWdlVXJsOiBzdHJpbmd9PiwgZXZlbnQpIHtcclxuICAgIGNvbnN0IHsgaW1hZ2VVcmwgfSA9IHJlc3BvbnNlLmJvZHk7XHJcbiAgICB0aGlzLmVkaXRvclNlcnZpY2UuaW5zZXJ0SW1hZ2UoaW1hZ2VVcmwpO1xyXG4gICAgZXZlbnQuc3JjRWxlbWVudC52YWx1ZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgY3VzdG9tIGNsYXNzXHJcbiAgICovXHJcbiAgc2V0Q3VzdG9tQ2xhc3MoY2xhc3NJZDogc3RyaW5nKSB7XHJcbiAgICBpZiAoY2xhc3NJZCA9PT0gJy0xJykge1xyXG4gICAgICB0aGlzLmV4ZWN1dGUuZW1pdCgnY2xlYXInKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWRpdG9yU2VydmljZS5jcmVhdGVDdXN0b21DbGFzcyh0aGlzLl9jdXN0b21DbGFzc2VzWytjbGFzc0lkXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0J1dHRvbkhpZGRlbihuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghbmFtZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoISh0aGlzLmhpZGRlbkJ1dHRvbnMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgZm9yIChjb25zdCBhcnIgb2YgdGhpcy5oaWRkZW5CdXR0b25zKSB7XHJcbiAgICAgIGlmIChhcnIgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIHJlc3VsdCA9IGFyci5maW5kKGl0ZW0gPT4gaXRlbSA9PT0gbmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0ICE9PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpIHtcclxuICAgIHRoaXMuZXhlY3V0ZS5lbWl0KCdmb2N1cycpO1xyXG4gICAgY29uc29sZS5sb2coJ2ZvY3VzZWQnKTtcclxuICB9XHJcbn1cclxuIl19