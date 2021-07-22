/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isDefined } from '../utils';
/**
 * @record
 */
export function SelectOption() { }
if (false) {
    /** @type {?} */
    SelectOption.prototype.label;
    /** @type {?} */
    SelectOption.prototype.value;
}
var AeSelectComponent = /** @class */ (function () {
    function AeSelectComponent(elRef, r) {
        this.elRef = elRef;
        this.r = r;
        this.options = [];
        this.disabled = false;
        this.optionId = 0;
        this.opened = false;
        this.hidden = 'inline-block';
        // tslint:disable-next-line:no-output-native no-output-rename
        this.changeEvent = new EventEmitter();
        this.onChange = (/**
         * @return {?}
         */
        function () {
        });
        this.onTouched = (/**
         * @return {?}
         */
        function () {
        });
    }
    Object.defineProperty(AeSelectComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectedOption && this.selectedOption.hasOwnProperty('label') ? this.selectedOption.label : 'Select';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AeSelectComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectedOption.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AeSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selectedOption = this.options[0];
        if (isDefined(this.isHidden) && this.isHidden) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    AeSelectComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.hidden = 'none';
    };
    /**
     * @param {?} option
     * @param {?} event
     * @return {?}
     */
    AeSelectComponent.prototype.optionSelect = /**
     * @param {?} option
     * @param {?} event
     * @return {?}
     */
    function (option, event) {
        event.stopPropagation();
        this.setValue(option.value);
        this.onChange(this.selectedOption.value);
        this.changeEvent.emit(this.selectedOption.value);
        this.onTouched();
        this.opened = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AeSelectComponent.prototype.toggleOpen = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // event.stopPropagation();
        if (this.disabled) {
            return;
        }
        this.opened = !this.opened;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AeSelectComponent.prototype.onClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.elRef.nativeElement.contains($event.target)) {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    AeSelectComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.opened = false;
    };
    Object.defineProperty(AeSelectComponent.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.opened;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    AeSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value || typeof value !== 'string') {
            return;
        }
        this.setValue(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AeSelectComponent.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = 0;
        /** @type {?} */
        var selectedEl = this.options.find((/**
         * @param {?} el
         * @param {?} i
         * @return {?}
         */
        function (el, i) {
            index = i;
            return el.value === value;
        }));
        if (selectedEl) {
            this.selectedOption = selectedEl;
            this.optionId = index;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AeSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AeSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    AeSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.labelButton.nativeElement.disabled = isDisabled;
        /** @type {?} */
        var div = this.labelButton.nativeElement;
        /** @type {?} */
        var action = isDisabled ? 'addClass' : 'removeClass';
        this.r[action](div, 'disabled');
        this.disabled = isDisabled;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AeSelectComponent.prototype.handleKeyDown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.opened) {
            return;
        }
        // console.log($event.key);
        // if (KeyCode[$event.key]) {
        switch ($event.key) {
            case 'ArrowDown':
                this._handleArrowDown($event);
                break;
            case 'ArrowUp':
                this._handleArrowUp($event);
                break;
            case 'Space':
                this._handleSpace($event);
                break;
            case 'Enter':
                this._handleEnter($event);
                break;
            case 'Tab':
                this._handleTab($event);
                break;
            case 'Escape':
                this.close();
                $event.preventDefault();
                break;
            case 'Backspace':
                this._handleBackspace();
                break;
        }
        // } else if ($event.key && $event.key.length === 1) {
        // this._keyPress$.next($event.key.toLocaleLowerCase());
        // }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AeSelectComponent.prototype._handleArrowDown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.optionId < this.options.length - 1) {
            this.optionId++;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AeSelectComponent.prototype._handleArrowUp = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.optionId >= 1) {
            this.optionId--;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AeSelectComponent.prototype._handleSpace = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AeSelectComponent.prototype._handleEnter = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.optionSelect(this.options[this.optionId], $event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AeSelectComponent.prototype._handleTab = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
    };
    /**
     * @return {?}
     */
    AeSelectComponent.prototype._handleBackspace = /**
     * @return {?}
     */
    function () {
    };
    AeSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ae-select',
                    template: "<span class=\"ae-font ae-picker\" [ngClass]=\"{'ae-expanded':isOpen}\">\r\n  <button [tabIndex]=\"-1\" #labelButton tabindex=\"0\" type=\"button\" role=\"button\" class=\"ae-picker-label\" (click)=\"toggleOpen($event);\">{{label}}\r\n    <svg viewBox=\"0 0 18 18\">\r\n     <!-- <use x=\"0\" y=\"0\" xlink:href=\"../assets/icons.svg#hom\"></use>-->\r\n      <polygon class=\"ae-stroke\" points=\"7 11 9 13 11 11 7 11\"></polygon>\r\n      <polygon class=\"ae-stroke\" points=\"7 7 9 5 11 7 7 7\"></polygon>\r\n    </svg>\r\n  </button>\r\n  <span class=\"ae-picker-options\">\r\n    <button tabindex=\"-1\" type=\"button\" role=\"button\" class=\"ae-picker-item\"\r\n          *ngFor=\"let item of options; let i = index\"\r\n          [ngClass]=\"{'selected': item.value === value, 'focused': i === optionId}\"\r\n          (click)=\"optionSelect(item, $event)\">\r\n          {{item.label}}\r\n    </button>\r\n    <span class=\"dropdown-item\" *ngIf=\"!options.length\">No items for select</span>\r\n  </span>\r\n</span>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return AeSelectComponent; })),
                            multi: true,
                        }
                    ],
                    styles: [".ae-font.ae-picker{color:#444;display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-font .ae-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:10px;position:relative;width:100%;line-height:26px;vertical-align:middle;font-size:85%;text-align:left;background-color:#fff;min-width:2rem;float:left;border:1px solid #ddd;text-overflow:clip;overflow:hidden;white-space:nowrap}.ae-font .ae-picker-label:before{content:\"\";position:absolute;right:0;top:0;width:20px;height:100%;background:-webkit-gradient(linear,left top,right top,from(white),to(#fff));background:linear-gradient(to right,#fff,#fff 100%)}.ae-font .ae-picker-label:focus{outline:0}.ae-font .ae-picker-label:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.ae-font .ae-picker-label:hover:before{background:-webkit-gradient(linear,left top,right top,color-stop(100%,#f5f5f5),to(#fff));background:linear-gradient(to right,#f5f5f5 100%,#fff 100%)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-font .ae-picker-label:disabled:before{background:-webkit-gradient(linear,left top,right top,color-stop(100%,#f5f5f5),to(#fff));background:linear-gradient(to right,#f5f5f5 100%,#fff 100%)}.ae-font .ae-picker-label svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:rgba(0,0,0,.2) 0 2px 8px}.ae-font .ae-picker-options .ae-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-font .ae-picker-options .ae-picker-item.selected{color:#06c;background-color:#fff4c2}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label,.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{display:block;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}"]
                }] }
    ];
    /** @nocollapse */
    AeSelectComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    AeSelectComponent.propDecorators = {
        options: [{ type: Input }],
        isHidden: [{ type: Input, args: ['hidden',] }],
        hidden: [{ type: HostBinding, args: ['style.display',] }],
        changeEvent: [{ type: Output, args: ['change',] }],
        labelButton: [{ type: ViewChild, args: ['labelButton', { static: true },] }],
        onClick: [{ type: HostListener, args: ['document:click', ['$event'],] }],
        handleKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return AeSelectComponent;
}());
export { AeSelectComponent };
if (false) {
    /** @type {?} */
    AeSelectComponent.prototype.options;
    /** @type {?} */
    AeSelectComponent.prototype.isHidden;
    /** @type {?} */
    AeSelectComponent.prototype.selectedOption;
    /** @type {?} */
    AeSelectComponent.prototype.disabled;
    /** @type {?} */
    AeSelectComponent.prototype.optionId;
    /** @type {?} */
    AeSelectComponent.prototype.opened;
    /** @type {?} */
    AeSelectComponent.prototype.hidden;
    /** @type {?} */
    AeSelectComponent.prototype.changeEvent;
    /** @type {?} */
    AeSelectComponent.prototype.labelButton;
    /** @type {?} */
    AeSelectComponent.prototype.onChange;
    /** @type {?} */
    AeSelectComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    AeSelectComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    AeSelectComponent.prototype.r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWUtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brb2xrb3YvYW5ndWxhci1lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvYWUtc2VsZWN0L2FlLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQUUsV0FBVyxFQUN2QixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFVBQVUsQ0FBQzs7OztBQUVuQyxrQ0FHQzs7O0lBRkMsNkJBQWM7O0lBQ2QsNkJBQWM7O0FBR2hCO0lBdUNFLDJCQUFvQixLQUFpQixFQUNqQixDQUFZO1FBRFosVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixNQUFDLEdBQUQsQ0FBQyxDQUFXO1FBMUJ2QixZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUt0QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFNYixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBTWUsV0FBTSxHQUFHLGNBQWMsQ0FBQzs7UUFHcEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBc0VuRCxhQUFROzs7UUFBUTtRQUNoQixDQUFDLEVBQUE7UUFDRCxjQUFTOzs7UUFBUTtRQUNqQixDQUFDLEVBQUE7SUFuRUUsQ0FBQztJQW5CSixzQkFBSSxvQ0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxD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U0FBUzs7OzBCQTBCUixLQUFLOzJCQUVMLEtBQUssU0FBQyxRQUFRO3lCQWdCZCxXQUFXLFNBQUMsZUFBZTs4QkFHM0IsTUFBTSxTQUFDLFFBQVE7OEJBRWYsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7MEJBa0N2QyxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0NBdUR6QyxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQStEckMsd0JBQUM7Q0FBQSxBQTdMRCxJQTZMQztTQWhMWSxpQkFBaUI7OztJQUM1QixvQ0FBc0M7O0lBRXRDLHFDQUFtQzs7SUFFbkMsMkNBQTZCOztJQUM3QixxQ0FBaUI7O0lBQ2pCLHFDQUFhOztJQU1iLG1DQUFlOztJQU1mLG1DQUFzRDs7SUFHdEQsd0NBQW1EOztJQUVuRCx3Q0FBa0U7O0lBb0VsRSxxQ0FDQzs7SUFDRCxzQ0FDQzs7Ozs7SUFyRVcsa0NBQXlCOzs7OztJQUN6Qiw4QkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEF0dHJpYnV0ZSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZiwgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge2lzRGVmaW5lZH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RPcHRpb24ge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZS1zZWxlY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FlLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBZVNlbGVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFlU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgQElucHV0KCkgb3B0aW9uczogU2VsZWN0T3B0aW9uW10gPSBbXTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCdoaWRkZW4nKSBpc0hpZGRlbjogYm9vbGVhbjtcclxuXHJcbiAgc2VsZWN0ZWRPcHRpb246IFNlbGVjdE9wdGlvbjtcclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIG9wdGlvbklkID0gMDtcclxuXHJcbiAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbiAmJiB0aGlzLnNlbGVjdGVkT3B0aW9uLmhhc093blByb3BlcnR5KCdsYWJlbCcpID8gdGhpcy5zZWxlY3RlZE9wdGlvbi5sYWJlbCA6ICdTZWxlY3QnO1xyXG4gIH1cclxuXHJcbiAgb3BlbmVkID0gZmFsc2U7XHJcblxyXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb24udmFsdWU7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBoaWRkZW4gPSAnaW5saW5lLWJsb2NrJztcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmUgbm8tb3V0cHV0LXJlbmFtZVxyXG4gIEBPdXRwdXQoJ2NoYW5nZScpIGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdsYWJlbEJ1dHRvbicsIHtzdGF0aWM6IHRydWV9KSBsYWJlbEJ1dHRvbjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIHI6IFJlbmRlcmVyMixcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMub3B0aW9uc1swXTtcclxuICAgIGlmIChpc0RlZmluZWQodGhpcy5pc0hpZGRlbikgJiYgdGhpcy5pc0hpZGRlbikge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZGUoKSB7XHJcbiAgICB0aGlzLmhpZGRlbiA9ICdub25lJztcclxuICB9XHJcblxyXG4gIG9wdGlvblNlbGVjdChvcHRpb246IFNlbGVjdE9wdGlvbiwgZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5zZXRWYWx1ZShvcHRpb24udmFsdWUpO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcclxuICAgIHRoaXMuY2hhbmdlRXZlbnQuZW1pdCh0aGlzLnNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlT3BlbihldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICBvbkNsaWNrKCRldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoJGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm9wZW5lZDtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWUpIHtcclxuICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlKHZhbHVlKSB7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRFbCA9IHRoaXMub3B0aW9ucy5maW5kKChlbCwgaSkgPT4ge1xyXG4gICAgICBpbmRleCA9IGk7XHJcbiAgICAgIHJldHVybiBlbC52YWx1ZSA9PT0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGlmIChzZWxlY3RlZEVsKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3RlZEVsO1xyXG4gICAgICB0aGlzLm9wdGlvbklkID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZTogYW55ID0gKCkgPT4ge1xyXG4gIH1cclxuICBvblRvdWNoZWQ6IGFueSA9ICgpID0+IHtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuKSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmxhYmVsQnV0dG9uLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgY29uc3QgZGl2ID0gdGhpcy5sYWJlbEJ1dHRvbi5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgYWN0aW9uID0gaXNEaXNhYmxlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnO1xyXG4gICAgdGhpcy5yW2FjdGlvbl0oZGl2LCAnZGlzYWJsZWQnKTtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlS2V5RG93bigkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5vcGVuZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJGV2ZW50LmtleSk7XHJcbiAgICAvLyBpZiAoS2V5Q29kZVskZXZlbnQua2V5XSkge1xyXG4gICAgc3dpdGNoICgkZXZlbnQua2V5KSB7XHJcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XHJcbiAgICAgICAgdGhpcy5faGFuZGxlQXJyb3dEb3duKCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxyXG4gICAgICAgIHRoaXMuX2hhbmRsZUFycm93VXAoJGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnU3BhY2UnOlxyXG4gICAgICAgIHRoaXMuX2hhbmRsZVNwYWNlKCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0VudGVyJzpcclxuICAgICAgICB0aGlzLl9oYW5kbGVFbnRlcigkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdUYWInOlxyXG4gICAgICAgIHRoaXMuX2hhbmRsZVRhYigkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdFc2NhcGUnOlxyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQmFja3NwYWNlJzpcclxuICAgICAgICB0aGlzLl9oYW5kbGVCYWNrc3BhY2UoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIC8vIH0gZWxzZSBpZiAoJGV2ZW50LmtleSAmJiAkZXZlbnQua2V5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgLy8gdGhpcy5fa2V5UHJlc3MkLm5leHQoJGV2ZW50LmtleS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIF9oYW5kbGVBcnJvd0Rvd24oJGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25JZCA8IHRoaXMub3B0aW9ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uSWQrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9oYW5kbGVBcnJvd1VwKCRldmVudCkge1xyXG4gICAgaWYgKHRoaXMub3B0aW9uSWQgPj0gMSkge1xyXG4gICAgICB0aGlzLm9wdGlvbklkLS07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlU3BhY2UoJGV2ZW50KSB7XHJcblxyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUVudGVyKCRldmVudCkge1xyXG4gICAgdGhpcy5vcHRpb25TZWxlY3QodGhpcy5vcHRpb25zW3RoaXMub3B0aW9uSWRdLCAkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVRhYigkZXZlbnQpIHtcclxuXHJcbiAgfVxyXG5cclxuICBfaGFuZGxlQmFja3NwYWNlKCkge1xyXG5cclxuICB9XHJcbn1cclxuIl19