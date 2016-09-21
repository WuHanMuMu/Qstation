"use strict";
var router_1 = require('@angular/router');
var rmyz_component_1 = require('./rmyz.component');
var gn_component_1 = require('./gn.component');
var xgwRoutes = [
    { path: '', redirectTo: '/rmyz', pathMatch: 'full' },
    { path: 'gn', component: gn_component_1.gn_component },
    { path: 'rmyz', component: rmyz_component_1.rmyz_component }
];
exports.xgwRouting = router_1.RouterModule.forChild(xgwRoutes);
//# sourceMappingURL=xgw.routing.js.map