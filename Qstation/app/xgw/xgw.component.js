"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by jlch on 16/9/20.
 */
var core_1 = require('@angular/core');
var xgw_service_1 = require('./xgw.service');
var XGWComponent = (function () {
    //xgws:any
    function XGWComponent(xgws) {
        this.xgws = xgws;
    }
    XGWComponent.prototype.ngOnInit = function () {
        this.items_info = this.xgws.get_all_info();
        //console.log(this.items_info)
    };
    XGWComponent = __decorate([
        core_1.Component({
            selector: 'my-xgw',
            templateUrl: 'app/xgw/xgw.component.html',
            styleUrls: ['app/xgw/xgw.component.css'],
        }), 
        __metadata('design:paramtypes', [xgw_service_1.xgw_service])
    ], XGWComponent);
    return XGWComponent;
}());
exports.XGWComponent = XGWComponent;
//# sourceMappingURL=xgw.component.js.map