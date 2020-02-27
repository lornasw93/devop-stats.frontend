function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<body>\r\n<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n</body>-->\r\n\r\n<body>\r\n    <router-outlet></router-outlet>\r\n</body>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/builds/builds.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/builds/builds.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesBuildsBuildsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button (click)=\"goBack();\" class=\"btn btn-outline-secondary\">Go Back</button>\r\n\r\n<div class=\"page-header\">\r\n  <h1>Builds</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <ag-grid-angular style=\"width: 100%; height: 500px\"\r\n                     class=\"ag-theme-material\"\r\n                     [rowData]=\"rowData\"\r\n                     [columnDefs]=\"columnDefs\"\r\n                     (gridReady)=\"onGridReady($event)\">\r\n    </ag-grid-angular>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <h2>By Month</h2>\r\n\r\n    <ngx-charts-line-chart [view]=\"view\"\r\n                           [scheme]=\"colorScheme\"\r\n                           [legend]=\"legend\"\r\n                           [showXAxisLabel]=\"showXAxisLabel\"\r\n                           [showYAxisLabel]=\"showYAxisLabel\"\r\n                           [xAxis]=\"xAxis\"\r\n                           [yAxis]=\"yAxis\"\r\n                           [xAxisLabel]=\"xAxisLabel\"\r\n                           [yAxisLabel]=\"yAxisLabel\"\r\n                           [timeline]=\"timeline\"\r\n                           [results]=\"seriesByMonth\">\r\n    </ngx-charts-line-chart>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!--<h2>By Request</h2>\r\n\r\n    <ngx-charts-pie-chart [legend]=\"true\"\r\n                          [explodeSlices]=\"false\"\r\n                          [labels]=\"true\"\r\n                          [doughnut]=\"false\"\r\n                          [results]=\"seriesByRequest\">\r\n    </ngx-charts-pie-chart>\r\n\r\n    <h2>By Result</h2>\r\n\r\n    <ngx-charts-pie-chart [view]=\"view\"\r\n                           [scheme]=\"colorScheme\"\r\n                           [legend]=\"legend\"\r\n                           [results]=\"seriesByResult\">\r\n    </ngx-charts-pie-chart>-->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/commits/commits.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/commits/commits.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesCommitsCommitsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>commits works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/count-desc/count-desc.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/count-desc/count-desc.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesCountDescCountDescComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col .count\" [ngClass]=\"className\" *ngIf=\"count > 0\">\r\n  <div class=\"text-value-xl\">{{count}}</div>\r\n  <div class=\"text-uppercase text-muted small\">{{description}}</div>\r\n</div>\r\n<div class=\"vr\"></div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">\r\n\r\n      <fa-icon [icon]=\"faChartBar\"></fa-icon>\r\n      DevOp Stats\r\n    </h1>\r\n    <p class=\"lead\">\r\n      Providing useful stats by combining typical everyday queries using Azure DevOps REST API\r\n    </p>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"areProjectsLoading; else loaded\">\r\n  <p class=\"text-center\">\r\n    <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\r\n    Loading projects...\r\n  </p>\r\n</div>\r\n<ng-template #loaded>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\" *ngFor=\"let project of projects\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n\r\n\r\n\r\n\r\n            <h2 class=\"card-title text-center\">\r\n              {{project.name}}\r\n\r\n              <a [routerLink]=\"['/project/', project.id]\" routerLinkActive=\"active\">\r\n                <fa-icon [icon]=\"faEllipsisH\"></fa-icon>\r\n              </a>\r\n            </h2>\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <p class=\"card-subtitle mb-2 text-muted\">{{project.description}}</p>\r\n\r\n            <div *ngIf=\"project.buildCounts != null\">\r\n              <div class=\"card-text\">\r\n                <div class=\"card border-primary mb-3\">\r\n                  <div class=\"card-header border-primary-bottom content-center\">\r\n                    <i class=\"fab icon text-white my-4 display-4\"></i>Builds\r\n\r\n                    <a [routerLink]=\"['/builds/', project.id]\" routerLinkActive=\"active\">\r\n                      <fa-icon [icon]=\"faEllipsisH\"></fa-icon>\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"card-body row text-center\">\r\n                    <app-count-desc [count]=\"project.buildCounts.buildInProgressCount\" [className]=\"{'in-progress': true}\" description=\"in progress\"></app-count-desc>\r\n                    <app-count-desc [count]=\"project.buildCounts.buildCancelledCount\" [className]=\"{'not-active': true}\" description=\"cancelled\"></app-count-desc>\r\n                    <app-count-desc [count]=\"project.buildCounts.buildFailedCount\" [className]=\"{'not-active': true}\" description=\"failed\"></app-count-desc>\r\n                    <app-count-desc [count]=\"project.buildCounts.buildSucceededCount\" [className]=\"{'is-complete': true}\" description=\"succeeded\"></app-count-desc>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"project.deploymentCounts != null\">\r\n              <div class=\"card-text\">\r\n                <div class=\"card border-primary mb-3\">\r\n                  <div class=\"card-header border-primary-bottom content-center\">\r\n                    <i class=\"fab icon text-white my-4 display-4\"></i>Releases\r\n\r\n                    <a [routerLink]=\"['/releases/', project.id]\" routerLinkActive=\"active\">\r\n                      <fa-icon [icon]=\"faEllipsisH\"></fa-icon>\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"card-body row text-center\">\r\n                    <app-count-desc [count]=\"project.deploymentCounts.inProgressCount\" [className]=\"{'in-progress': true}\" description=\"in progress\"></app-count-desc>\r\n                    <app-count-desc [count]=\"project.deploymentCounts.notDeployedCount\" [className]=\"{'not-active': true}\" description=\"not deployed\"></app-count-desc>\r\n                    <app-count-desc [count]=\"project.deploymentCounts.failedCount\" [className]=\"{'not-active': true}\" description=\"failed\"></app-count-desc>\r\n                    <app-count-desc [count]=\"project.deploymentCounts.succeededCount\" [className]=\"{'is-complete': true}\" description=\"succeeded\"></app-count-desc>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-text\">\r\n              <div class=\"card border-primary mb-3\">\r\n                <div class=\"card-header border-primary-bottom content-center\">\r\n                  <i class=\"fab icon text-white my-4 display-4\"></i>Test\r\n\r\n                  <a [routerLink]=\"['/releases/', project.id]\" routerLinkActive=\"active\">\r\n                    <fa-icon [icon]=\"faEllipsisH\"></fa-icon>\r\n                  </a>\r\n                </div>\r\n                <div class=\"card-body row text-center\">\r\n                  <app-count-desc [count]=\"project.testRunCount\" [className]=\"\" description=\"runs\"></app-count-desc>\r\n                  <app-count-desc [count]=\"project.testPlanCount\" [className]=\"\" description=\"plans\"></app-count-desc>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-text\">\r\n              <div class=\"card border-primary mb-3\">\r\n                <div class=\"card-header border-primary-bottom content-center\">\r\n                  <i class=\"fab icon text-white my-4 display-4\"></i>\r\n                  Repo\r\n\r\n                  <a [routerLink]=\"['/sprints/', project.id]\" routerLinkActive=\"active\">\r\n                    <fa-icon [icon]=\"faEllipsisH\"></fa-icon>\r\n                  </a>\r\n                </div>\r\n                <div class=\"card-body row text-center\">\r\n                  <div class=\"col\">\r\n                    <div class=\"text-value-xl\">{{project.repoCount}}</div>\r\n                    <div class=\"text-uppercase text-muted small\">repos</div>\r\n                  </div>\r\n                  <div class=\"vr\"></div>\r\n                  <div class=\"col\">\r\n                    <div class=\"text-value-xl\">{{project.teamCount}}</div>\r\n                    <div class=\"text-uppercase text-muted small\">teams</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"project.pullRequestCounts != null\">\r\n              <div class=\"card-text\">\r\n                <div class=\"card border-primary mb-3\">\r\n                  <div class=\"card-header border-primary-bottom content-center\">\r\n                    <i class=\"fab icon text-white my-4 display-4\"></i>\r\n                    Pull Requests\r\n\r\n                    <a [routerLink]=\"['/pull-requests/', project.id]\" routerLinkActive=\"active\">\r\n                      <fa-icon [icon]=\"faEllipsisH\"></fa-icon>\r\n                    </a>\r\n\r\n                    {{\r\n                    getA(project.id, project.defaultTeam.id)\r\n                    }}\r\n                  </div>\r\n                  <div class=\"card-body row text-center\">\r\n                    <div class=\"col\">\r\n                      <div class=\"text-value-xl\">{{project.pullRequestCounts.noVote}}</div>\r\n                      <div class=\"text-uppercase text-muted small\">no vote</div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <div class=\"text-value-xl\">{{project.pullRequestCounts.notSetCount}}</div>\r\n                      <div class=\"text-uppercase text-muted small\">not set</div>\r\n                    </div>\r\n                    <div class=\"vr\"></div>\r\n                    <div class=\"col\" [ngClass]=\"{'in-progress': (project.pullRequestCounts.activeCount > 0)}\">\r\n                      <div class=\"text-value-xl\">{{project.pullRequestCounts.activeCount}}</div>\r\n                      <div class=\"text-uppercase text-muted small\">active</div>\r\n                    </div>\r\n\r\n                    <app-count-desc [count]=\"project.pullRequestCounts.approved\" [className]=\"\" description=\"approved\"></app-count-desc>\r\n                    <app-count-desc [count]=\"project.pullRequestCounts.approvedWithSuggestions\" [className]=\"\" description=\"approved w/s\"></app-count-desc>\r\n                    <app-count-desc [count]=\"project.pullRequestCounts.waitingForAuthor\" [className]=\"\" description=\"waiting\"></app-count-desc>\r\n                    <app-count-desc [count]=\"project.pullRequestCounts.rejected\" [className]=\"{'not-active': true}\" description=\"rejected\"></app-count-desc>\r\n                    <app-count-desc [count]=\"project.pullRequestCounts.abandonedCount\" [className]=\"{'not-active': true}\" description=\"abandoned\"></app-count-desc>\r\n                    <app-count-desc [count]=\"project.pullRequestCounts.completedCount\" [className]=\"{'is-complete': true}\" description=\"completed\"></app-count-desc>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/nav-menu/nav-menu.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/nav-menu/nav-menu.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesNavMenuNavMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\r\n  <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">DevOp Stats</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-label=\"Toggle navigation\" [attr.aria-expanded]=\"isExpanded\" (click)=\"toggle()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n           [ngClass]=\"{ show: isExpanded }\">\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/wiki']\">Wiki</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/boards']\">Boards</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/repos']\">Repos</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/pipelines']\">Pipelines</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/test-plans']\">Test Plans</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/project/project.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/project/project.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjectProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">{{project.name}}</h1>\r\n    <p class=\"lead\">\r\n      {{project.description}}\r\n\r\n      Team: {{project.defaultTeam.name}}\r\n    </p>\r\n    <button (click)=\"goBack();\" class=\"btn btn-primary\">Go Back</button>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"areReposLoading; else loaded\">\r\n  <p class=\"text-center\">\r\n    <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\r\n    Loading project...\r\n  </p>\r\n</div>\r\n<ng-template #loaded>\r\n  <div class=\"container-fluid\">\r\n\r\n    <h2>Sprints</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\" *ngFor=\"let sprint of sprints\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <h2 class=\"card-title text-center\">{{sprint.name}}</h2>\r\n            <div class=\"card-text\">\r\n              <div class=\"card border-primary mb-3\">\r\n                <div class=\"card-header border-primary-bottom content-center\">\r\n                  <i class=\"fab icon text-white my-4 display-4\"></i>\r\n                  <a href=\"{{sprint.url}}\" target=\"_blank\">{{sprint.path}}</a>\r\n                </div>\r\n                <div class=\"card-body row text-center\">\r\n                  <div class=\"col\" [ngClass]=\"{'in-progress': (sprint.attributes.timeFrame==='current')}\">\r\n                    <div class=\"text-value-xl\">{{sprint.attributes.timeFrame}}</div>\r\n                    <div class=\"text-uppercase text-muted small\">timeframe</div>\r\n                  </div>\r\n                  <div class=\"vr\"></div>\r\n                  <div class=\"col\">\r\n                    <div class=\"text-value-xl\">{{datePipe.transform(sprint.attributes.startDate, 'dd/MM/yy')}}</div>\r\n                    <div class=\"text-uppercase text-muted small\">start</div>\r\n                  </div>\r\n                  <div class=\"vr\"></div>\r\n                  <div class=\"col\">\r\n                    <div class=\"text-value-xl\">{{datePipe.transform(sprint.attributes.finishDate, 'dd/MM/yy')}}</div>\r\n                    <div class=\"text-uppercase text-muted small\">finish</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <h2>Repos</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\" *ngFor=\"let repo of repos\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <h2 class=\"card-title text-center\">{{repo.name}}</h2>\r\n            <div class=\"card-text\">\r\n              <div class=\"card border-primary mb-3\">\r\n                <div class=\"card-header border-primary-bottom content-center\">\r\n                  <i class=\"fab icon text-white my-4 display-4\"></i>Sprint\r\n                </div>\r\n                <div class=\"card-body row text-center\">\r\n                  <div class=\"col\">\r\n                    <div class=\"text-value-xl\">0</div>\r\n                    <div class=\"text-uppercase text-muted small\">current</div>\r\n                  </div>\r\n                  <div class=\"vr\"></div>\r\n                  <div class=\"col\">\r\n                    <div class=\"text-value-xl\">0</div>\r\n                    <div class=\"text-uppercase text-muted small\">past</div>\r\n                  </div>\r\n                  <div class=\"vr\"></div>\r\n                  <div class=\"col\">\r\n                    <div class=\"text-value-xl\">0</div>\r\n                    <div class=\"text-uppercase text-muted small\">time left</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-text\">\r\n              <div class=\"card border-primary mb-3\">\r\n                <div class=\"card-header border-primary-bottom content-center\">\r\n                  <i class=\"fab icon text-white my-4 display-4\"></i>Work Items\r\n                </div>\r\n                <div class=\"card-body row text-center\">\r\n                  <div class=\"col\">\r\n                    <div class=\"text-value-xl\">0</div>\r\n                    <div class=\"text-uppercase text-muted small\">active</div>\r\n                  </div>\r\n                  <div class=\"vr\"></div>\r\n                  <div class=\"col\">\r\n                    <div class=\"text-value-xl\">0</div>\r\n                    <div class=\"text-uppercase text-muted small\">unassigned</div>\r\n                  </div>\r\n                  <div class=\"vr\"></div>\r\n                  <div class=\"col\">\r\n                    <div class=\"text-value-xl\">0</div>\r\n                    <div class=\"text-uppercase text-muted small\">resolved</div>\r\n                  </div>\r\n                  <div class=\"vr\"></div>\r\n                  <div class=\"col\">\r\n                    <div class=\"text-value-xl\">0</div>\r\n                    <div class=\"text-uppercase text-muted small\">closed</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pull-requests/pull-requests.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pull-requests/pull-requests.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPullRequestsPullRequestsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>pull-requests works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/releases/releases.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/releases/releases.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesReleasesReleasesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button (click)=\"goBack();\" class=\"btn btn-outline-secondary\">Go Back</button>\r\n\r\n<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">Releases</h1>\r\n    <p class=\"lead\"> \r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <ag-grid-angular style=\"width: 100%; height: 400px\"\r\n                     class=\"ag-theme-material\"\r\n                     [rowData]=\"rowData\"\r\n                     [columnDefs]=\"columnDefs\"\r\n                     <!--[rowSelection]=\"rowSelection\"-->\r\n                     (gridReady)=\"onGridReady($event)\"></ag-grid-angular>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <h5>By Month</h5>\r\n\r\n    <ngx-charts-line-chart [view]=\"view\"\r\n                           [scheme]=\"colorScheme\"\r\n                           [legend]=\"legend\"\r\n                           [showXAxisLabel]=\"showXAxisLabel\"\r\n                           [showYAxisLabel]=\"showYAxisLabel\"\r\n                           [xAxis]=\"xAxis\"\r\n                           [yAxis]=\"yAxis\"\r\n                           [xAxisLabel]=\"xAxisLabel\"\r\n                           [yAxisLabel]=\"yAxisLabel\"\r\n                           [timeline]=\"timeline\"\r\n                           [results]=\"seriesByMonth\">\r\n    </ngx-charts-line-chart>\r\n  </div>\r\n</div>\r\n\r\n<!--<h5>By Request</h5>\r\n\r\n  <ngx-charts-pie-chart [legend]=\"true\"\r\n                        [explodeSlices]=\"false\"\r\n                        [labels]=\"true\"\r\n                        [doughnut]=\"false\"\r\n                        [results]=\"seriesByRequest\">\r\n  </ngx-charts-pie-chart>\r\n\r\n  <h5>By Result</h5>\r\n\r\n  <ngx-charts-pie-chart [view]=\"view\"\r\n                        [scheme]=\"colorScheme\"\r\n                        [legend]=\"legend\"\r\n                        [results]=\"seriesByResult\">\r\n  </ngx-charts-pie-chart>-->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sprint/sprint.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sprint/sprint.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesSprintSprintComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>sprint works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/test-plans/test-plans.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/test-plans/test-plans.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTestPlansTestPlansComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>test-plans works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wiki/wiki.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wiki/wiki.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesWikiWikiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>wiki works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/work-items/work-items.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/work-items/work-items.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesWorkItemsWorkItemsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>work-items works!</p>\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'app';
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/main.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./modules/home/home.component */
    "./src/app/modules/home/home.component.ts");
    /* harmony import */


    var _modules_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./modules/nav-menu/nav-menu.component */
    "./src/app/modules/nav-menu/nav-menu.component.ts");
    /* harmony import */


    var _modules_wiki_wiki_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./modules/wiki/wiki.component */
    "./src/app/modules/wiki/wiki.component.ts");
    /* harmony import */


    var _modules_test_plans_test_plans_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./modules/test-plans/test-plans.component */
    "./src/app/modules/test-plans/test-plans.component.ts");
    /* harmony import */


    var _modules_project_project_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./modules/project/project.component */
    "./src/app/modules/project/project.component.ts");
    /* harmony import */


    var _modules_builds_builds_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./modules/builds/builds.component */
    "./src/app/modules/builds/builds.component.ts");
    /* harmony import */


    var _modules_releases_releases_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./modules/releases/releases.component */
    "./src/app/modules/releases/releases.component.ts");
    /* harmony import */


    var _modules_pull_requests_pull_requests_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./modules/pull-requests/pull-requests.component */
    "./src/app/modules/pull-requests/pull-requests.component.ts");
    /* harmony import */


    var _modules_work_items_work_items_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./modules/work-items/work-items.component */
    "./src/app/modules/work-items/work-items.component.ts");
    /* harmony import */


    var _modules_commits_commits_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./modules/commits/commits.component */
    "./src/app/modules/commits/commits.component.ts");
    /* harmony import */


    var _modules_sprint_sprint_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./modules/sprint/sprint.component */
    "./src/app/modules/sprint/sprint.component.ts");
    /* harmony import */


    var _modules_count_desc_count_desc_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./modules/count-desc/count-desc.component */
    "./src/app/modules/count-desc/count-desc.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: 'home',
      component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
    }, {
      path: 'project/:id',
      component: _modules_project_project_component__WEBPACK_IMPORTED_MODULE_15__["ProjectComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'builds/:projectId',
      component: _modules_builds_builds_component__WEBPACK_IMPORTED_MODULE_16__["BuildsComponent"]
    }, {
      path: 'releases/:projectId',
      component: _modules_releases_releases_component__WEBPACK_IMPORTED_MODULE_17__["ReleasesComponent"]
    }, {
      path: 'pullrequests/:projectId',
      component: _modules_pull_requests_pull_requests_component__WEBPACK_IMPORTED_MODULE_18__["PullRequestsComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _modules_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_12__["NavMenuComponent"], _modules_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _modules_wiki_wiki_component__WEBPACK_IMPORTED_MODULE_13__["WikiComponent"], _modules_test_plans_test_plans_component__WEBPACK_IMPORTED_MODULE_14__["TestPlansComponent"], _modules_builds_builds_component__WEBPACK_IMPORTED_MODULE_16__["BuildsComponent"], _modules_releases_releases_component__WEBPACK_IMPORTED_MODULE_17__["ReleasesComponent"], _modules_project_project_component__WEBPACK_IMPORTED_MODULE_15__["ProjectComponent"], _modules_pull_requests_pull_requests_component__WEBPACK_IMPORTED_MODULE_18__["PullRequestsComponent"], _modules_commits_commits_component__WEBPACK_IMPORTED_MODULE_20__["CommitsComponent"], _modules_sprint_sprint_component__WEBPACK_IMPORTED_MODULE_21__["SprintComponent"], _modules_work_items_work_items_component__WEBPACK_IMPORTED_MODULE_19__["WorkItemsComponent"], _modules_count_desc_count_desc_component__WEBPACK_IMPORTED_MODULE_22__["CountDescComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"].withComponents([]), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__["NgxChartsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__["NgxChartsModule"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/modules/builds/builds.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/modules/builds/builds.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesBuildsBuildsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYnVpbGRzL2J1aWxkcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/builds/builds.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/modules/builds/builds.component.ts ***!
    \****************************************************/

  /*! exports provided: BuildsComponent */

  /***/
  function srcAppModulesBuildsBuildsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuildsComponent", function () {
      return BuildsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _core_services_pipelines_builds_builds_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/services/pipelines/builds/builds.service */
    "./src/core/services/pipelines/builds/builds.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var BuildsComponent =
    /*#__PURE__*/
    function () {
      //private rowSelection;
      function BuildsComponent(buildsService, datePipe, route, location) {
        var _this = this;

        _classCallCheck(this, BuildsComponent);

        this.buildsService = buildsService;
        this.datePipe = datePipe;
        this.route = route;
        this.location = location;
        this.view = [700, 400];
        this.legend = true;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Month';
        this.yAxisLabel = 'Count';
        this.timeline = true;
        this.colorScheme = {
          domain: ['#5AA454']
        };
        this.columnDefs = [{
          headerName: 'Build Number',
          field: 'buildNumber'
        }, {
          headerName: 'Status',
          field: 'result',
          cellStyle: function cellStyle(params) {
            if (params.value === 'succeeded') {
              return {
                color: 'white',
                backgroundColor: 'green'
              };
            } else if (params.value === 'failed') {
              return {
                color: 'white',
                backgroundColor: 'red'
              };
            } else {
              return null;
            }
          }
        }, {
          headerName: 'Requested For',
          field: 'requestedFor.displayName'
        }, {
          headerName: 'Queue Time',
          field: 'queueTime',
          cellRenderer: function cellRenderer(data) {
            return data.value ? _this.datePipe.transform(data.value, 'dd/MM/yy HH:mm') : data.value;
          }
        }, {
          headerName: 'Start Time',
          field: 'startTime',
          cellRenderer: function cellRenderer(data) {
            return data.value ? _this.datePipe.transform(data.value, 'dd/MM/yy HH:mm') : data.value;
          }
        }, {
          headerName: 'Finish Time',
          field: 'finishTime',
          cellRenderer: function cellRenderer(data) {
            return data.value ? _this.datePipe.transform(data.value, 'dd/MM/yy HH:mm') : data.value;
          }
        }]; //this.rowSelection = "single";

        this.projectId = this.route.snapshot.params['projectId'];
      }

      _createClass(BuildsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "setData",
        value: function setData() {
          var _this2 = this;

          this.buildsService.getBuilds('fpmcore').subscribe(function (data) {
            _this2.rowData = data.result.value;
          }); //this.buildsService.getBuildsCount('fpmcore').subscribe((data: any) => {
          //  this.count = data.result.count;
          //});

          this.buildsService.getBuildsByMonthChart('fpmcore').subscribe(function (data) {
            _this2.seriesByMonth = [data];
          });
          this.buildsService.getBuildsByRequestChart('fpmcore').subscribe(function (data) {
            _this2.seriesByRequest = [data];
          });
          this.buildsService.getBuildsByResultChart('fpmcore').subscribe(function (data) {
            _this2.seriesByResult = [data];
          });
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          this.gridApi.sizeColumnsToFit();
        }
      }]);

      return BuildsComponent;
    }();

    BuildsComponent.ctorParameters = function () {
      return [{
        type: _core_services_pipelines_builds_builds_service__WEBPACK_IMPORTED_MODULE_2__["BuildsService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
      }];
    };

    BuildsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-builds',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./builds.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/builds/builds.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./builds.component.css */
      "./src/app/modules/builds/builds.component.css")).default]
    }), __metadata("design:paramtypes", [_core_services_pipelines_builds_builds_service__WEBPACK_IMPORTED_MODULE_2__["BuildsService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])], BuildsComponent);
    /***/
  },

  /***/
  "./src/app/modules/commits/commits.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/modules/commits/commits.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesCommitsCommitsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbWl0cy9jb21taXRzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/commits/commits.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/commits/commits.component.ts ***!
    \******************************************************/

  /*! exports provided: CommitsComponent */

  /***/
  function srcAppModulesCommitsCommitsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommitsComponent", function () {
      return CommitsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CommitsComponent =
    /*#__PURE__*/
    function () {
      function CommitsComponent() {
        _classCallCheck(this, CommitsComponent);
      }

      _createClass(CommitsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CommitsComponent;
    }();

    CommitsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-commits',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./commits.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/commits/commits.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./commits.component.css */
      "./src/app/modules/commits/commits.component.css")).default]
    }), __metadata("design:paramtypes", [])], CommitsComponent);
    /***/
  },

  /***/
  "./src/app/modules/count-desc/count-desc.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/modules/count-desc/count-desc.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesCountDescCountDescComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291bnQtZGVzYy9jb3VudC1kZXNjLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/count-desc/count-desc.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/count-desc/count-desc.component.ts ***!
    \************************************************************/

  /*! exports provided: CountDescComponent */

  /***/
  function srcAppModulesCountDescCountDescComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountDescComponent", function () {
      return CountDescComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CountDescComponent =
    /*#__PURE__*/
    function () {
      function CountDescComponent() {
        _classCallCheck(this, CountDescComponent);
      }

      _createClass(CountDescComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CountDescComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], CountDescComponent.prototype, "count", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], CountDescComponent.prototype, "className", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], CountDescComponent.prototype, "description", void 0);

    CountDescComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-count-desc',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./count-desc.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/count-desc/count-desc.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./count-desc.component.css */
      "./src/app/modules/count-desc/count-desc.component.css")).default]
    }), __metadata("design:paramtypes", [])], CountDescComponent);
    /***/
  },

  /***/
  "./src/app/modules/home/home.component.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/home/home.component.ts ***!
    \************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppModulesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_project_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../core/services/project/project.service */
    "./src/core/services/project/project.service.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(projectService) {
        _classCallCheck(this, HomeComponent);

        this.projectService = projectService;
        this.faSpinner = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSpinner"];
        this.faEllipsisH = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEllipsisH"];
        this.faChartBar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChartBar"];
        this.areProjectsLoading = true;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.projectService.getProjects().subscribe(function (data) {
            _this3.projects = data;
          }).add(function () {
            _this3.areProjectsLoading = false;
          });
        }
      }, {
        key: "getA",
        value: function getA(projectId, teamId) {
          var _this4 = this;

          this.projectService.getCurrentSprint(projectId, teamId).subscribe(function (data) {
            _this4.currentSprint = data.result;
            alert("g");
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _core_services_project_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]
      }];
    };

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-home',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html")).default
    }), __metadata("design:paramtypes", [_core_services_project_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/modules/nav-menu/nav-menu.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/modules/nav-menu/nav-menu.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesNavMenuNavMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLm5hdmJhci1icmFuZCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcblxyXG5odG1sIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYm94LXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/nav-menu/nav-menu.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/nav-menu/nav-menu.component.ts ***!
    \********************************************************/

  /*! exports provided: NavMenuComponent */

  /***/
  function srcAppModulesNavMenuNavMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
      return NavMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NavMenuComponent =
    /*#__PURE__*/
    function () {
      function NavMenuComponent() {
        _classCallCheck(this, NavMenuComponent);

        this.isExpanded = false;
      }

      _createClass(NavMenuComponent, [{
        key: "collapse",
        value: function collapse() {
          this.isExpanded = false;
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isExpanded = !this.isExpanded;
        }
      }]);

      return NavMenuComponent;
    }();

    NavMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-nav-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./nav-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/nav-menu/nav-menu.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./nav-menu.component.css */
      "./src/app/modules/nav-menu/nav-menu.component.css")).default]
    })], NavMenuComponent);
    /***/
  },

  /***/
  "./src/app/modules/project/project.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/modules/project/project.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjectProjectComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/project/project.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/project/project.component.ts ***!
    \******************************************************/

  /*! exports provided: ProjectComponent */

  /***/
  function srcAppModulesProjectProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
      return ProjectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_services_project_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/services/project/project.service */
    "./src/core/services/project/project.service.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ProjectComponent =
    /*#__PURE__*/
    function () {
      function ProjectComponent(activatedRoute, projectService, location, datePipe) {
        _classCallCheck(this, ProjectComponent);

        this.activatedRoute = activatedRoute;
        this.projectService = projectService;
        this.location = location;
        this.datePipe = datePipe;
        this.faSpinner = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSpinner"];
        this.areReposLoading = true;
        this.projectId = this.activatedRoute.snapshot.params.id;
      }

      _createClass(ProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.projectService.getRepos(this.projectId).subscribe(function (data) {
            _this5.repos = data.result.value;
          }).add(function () {
            _this5.areReposLoading = false;
          });
          this.projectService.getProject(this.projectId).subscribe(function (data) {
            _this5.project = data.result;

            _this5.projectService.getSprints(_this5.projectId, _this5.project.defaultTeam.id).subscribe(function (data) {
              _this5.sprints = data.result.value;
            });
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }]);

      return ProjectComponent;
    }();

    ProjectComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _core_services_project_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]
      }];
    };

    ProjectComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-project',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/project/project.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./project.component.css */
      "./src/app/modules/project/project.component.css")).default]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core_services_project_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])], ProjectComponent);
    /***/
  },

  /***/
  "./src/app/modules/pull-requests/pull-requests.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/pull-requests/pull-requests.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPullRequestsPullRequestsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVsbC1yZXF1ZXN0cy9wdWxsLXJlcXVlc3RzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/pull-requests/pull-requests.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/pull-requests/pull-requests.component.ts ***!
    \******************************************************************/

  /*! exports provided: PullRequestsComponent */

  /***/
  function srcAppModulesPullRequestsPullRequestsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PullRequestsComponent", function () {
      return PullRequestsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PullRequestsComponent =
    /*#__PURE__*/
    function () {
      function PullRequestsComponent() {
        _classCallCheck(this, PullRequestsComponent);
      }

      _createClass(PullRequestsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PullRequestsComponent;
    }();

    PullRequestsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-pull-requests',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./pull-requests.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pull-requests/pull-requests.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./pull-requests.component.css */
      "./src/app/modules/pull-requests/pull-requests.component.css")).default]
    }), __metadata("design:paramtypes", [])], PullRequestsComponent);
    /***/
  },

  /***/
  "./src/app/modules/releases/releases.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/modules/releases/releases.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesReleasesReleasesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVsZWFzZXMvcmVsZWFzZXMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/releases/releases.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/releases/releases.component.ts ***!
    \********************************************************/

  /*! exports provided: ReleasesComponent */

  /***/
  function srcAppModulesReleasesReleasesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReleasesComponent", function () {
      return ReleasesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _core_services_pipelines_releases_releases_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/services/pipelines/releases/releases.service */
    "./src/core/services/pipelines/releases/releases.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ReleasesComponent =
    /*#__PURE__*/
    function () {
      function ReleasesComponent(releasesService, datePipe, route, location) {
        var _this6 = this;

        _classCallCheck(this, ReleasesComponent);

        this.releasesService = releasesService;
        this.datePipe = datePipe;
        this.route = route;
        this.location = location;
        this.view = [700, 400];
        this.legend = true;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Month';
        this.yAxisLabel = 'Count';
        this.timeline = true;
        this.colorScheme = {
          domain: ['#5AA454']
        };
        this.columnDefs = [{
          headerName: 'Id',
          field: 'id'
        }, {
          headerName: 'Name',
          field: 'name'
        }, {
          headerName: 'Status',
          field: 'status'
        }, {
          headerName: 'Created By',
          field: 'createdBy.displayName'
        }, {
          headerName: 'Created On',
          field: 'createdOn',
          cellRenderer: function cellRenderer(data) {
            return data.value ? _this6.datePipe.transform(data.value, 'dd/MM/yy HH:mm') : data.value;
          }
        }, {
          headerName: 'Variables',
          field: 'variables'
        }, {
          headerName: 'Environments',
          field: 'environments'
        }, {
          headerName: 'Url',
          field: 'url',
          cellRenderer: function cellRenderer(params) {
            return "<a href=\"".concat(params.value, "\" target=\"_blank\">Link</a>");
          }
        }]; // this.rowSelection = "single";

        this.projectId = this.route.snapshot.params['projectId'];
      }

      _createClass(ReleasesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "setData",
        value: function setData() {
          var _this7 = this;

          this.releasesService.getReleases('fpmcore').subscribe(function (data) {
            _this7.rowData = data.result.value;
          }); //this.releasesService.getReleasesCount('fpmcore').subscribe((data: any) => {
          //  this.count = data.result.count;
          //});

          this.releasesService.getReleasesByMonthChart('fpmcore').subscribe(function (data) {
            _this7.seriesByMonth = [data];
          });
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          this.gridApi.sizeColumnsToFit();
        }
      }]);

      return ReleasesComponent;
    }();

    ReleasesComponent.ctorParameters = function () {
      return [{
        type: _core_services_pipelines_releases_releases_service__WEBPACK_IMPORTED_MODULE_2__["ReleasesService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
      }];
    };

    ReleasesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-releases',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./releases.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/releases/releases.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./releases.component.css */
      "./src/app/modules/releases/releases.component.css")).default]
    }), __metadata("design:paramtypes", [_core_services_pipelines_releases_releases_service__WEBPACK_IMPORTED_MODULE_2__["ReleasesService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])], ReleasesComponent);
    /***/
  },

  /***/
  "./src/app/modules/sprint/sprint.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/modules/sprint/sprint.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesSprintSprintComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3ByaW50L3NwcmludC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/sprint/sprint.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/modules/sprint/sprint.component.ts ***!
    \****************************************************/

  /*! exports provided: SprintComponent */

  /***/
  function srcAppModulesSprintSprintComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SprintComponent", function () {
      return SprintComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SprintComponent =
    /*#__PURE__*/
    function () {
      function SprintComponent() {
        _classCallCheck(this, SprintComponent);
      }

      _createClass(SprintComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SprintComponent;
    }();

    SprintComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-sprint',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sprint.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sprint/sprint.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./sprint.component.css */
      "./src/app/modules/sprint/sprint.component.css")).default]
    }), __metadata("design:paramtypes", [])], SprintComponent);
    /***/
  },

  /***/
  "./src/app/modules/test-plans/test-plans.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/modules/test-plans/test-plans.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTestPlansTestPlansComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVzdC1wbGFucy90ZXN0LXBsYW5zLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/test-plans/test-plans.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/test-plans/test-plans.component.ts ***!
    \************************************************************/

  /*! exports provided: TestPlansComponent */

  /***/
  function srcAppModulesTestPlansTestPlansComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestPlansComponent", function () {
      return TestPlansComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var TestPlansComponent =
    /*#__PURE__*/
    function () {
      function TestPlansComponent() {
        _classCallCheck(this, TestPlansComponent);
      }

      _createClass(TestPlansComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestPlansComponent;
    }();

    TestPlansComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-test-plans',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./test-plans.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/test-plans/test-plans.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./test-plans.component.css */
      "./src/app/modules/test-plans/test-plans.component.css")).default]
    }), __metadata("design:paramtypes", [])], TestPlansComponent);
    /***/
  },

  /***/
  "./src/app/modules/wiki/wiki.component.css":
  /*!*************************************************!*\
    !*** ./src/app/modules/wiki/wiki.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesWikiWikiComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lraS93aWtpLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/wiki/wiki.component.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/wiki/wiki.component.ts ***!
    \************************************************/

  /*! exports provided: WikiComponent */

  /***/
  function srcAppModulesWikiWikiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WikiComponent", function () {
      return WikiComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var WikiComponent =
    /*#__PURE__*/
    function () {
      function WikiComponent() {
        _classCallCheck(this, WikiComponent);
      }

      _createClass(WikiComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WikiComponent;
    }();

    WikiComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-wiki',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./wiki.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wiki/wiki.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./wiki.component.css */
      "./src/app/modules/wiki/wiki.component.css")).default]
    }), __metadata("design:paramtypes", [])], WikiComponent);
    /***/
  },

  /***/
  "./src/app/modules/work-items/work-items.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/modules/work-items/work-items.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesWorkItemsWorkItemsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd29yay1pdGVtcy93b3JrLWl0ZW1zLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/work-items/work-items.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/work-items/work-items.component.ts ***!
    \************************************************************/

  /*! exports provided: WorkItemsComponent */

  /***/
  function srcAppModulesWorkItemsWorkItemsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkItemsComponent", function () {
      return WorkItemsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var WorkItemsComponent =
    /*#__PURE__*/
    function () {
      function WorkItemsComponent() {
        _classCallCheck(this, WorkItemsComponent);
      }

      _createClass(WorkItemsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WorkItemsComponent;
    }();

    WorkItemsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-work-items',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./work-items.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/work-items/work-items.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./work-items.component.css */
      "./src/app/modules/work-items/work-items.component.css")).default]
    }), __metadata("design:paramtypes", [])], WorkItemsComponent);
    /***/
  },

  /***/
  "./src/core/services/base.api.service.ts":
  /*!***********************************************!*\
    !*** ./src/core/services/base.api.service.ts ***!
    \***********************************************/

  /*! exports provided: BaseApiService */

  /***/
  function srcCoreServicesBaseApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseApiService", function () {
      return BaseApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var BaseApiService =
    /*#__PURE__*/
    function () {
      function BaseApiService(httpClient) {
        _classCallCheck(this, BaseApiService);

        this.httpClient = httpClient;
        this.baseUrl = 'https://localhost:44352/api';
      }

      _createClass(BaseApiService, [{
        key: "get",
        value: function get(url) {
          console.log("GET: ".concat(url));
          return this.httpClient.get("".concat(this.baseUrl, "/").concat(url));
        }
      }, {
        key: "getAll",
        value: function getAll(url) {
          console.log("GET ALL: ".concat(url));
          return this.httpClient.get("".concat(this.baseUrl, "/").concat(url));
        }
      }, {
        key: "getCount",
        value: function getCount(url) {
          console.log("GET COUNT: ".concat(url));
          return this.httpClient.get("".concat(this.baseUrl, "/").concat(url));
        }
      }, {
        key: "getChart",
        value: function getChart(url) {
          console.log("GET CHART: ".concat(url));
          return this.httpClient.get("".concat(this.baseUrl, "/").concat(url));
        }
      }]);

      return BaseApiService;
    }();

    BaseApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    BaseApiService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], BaseApiService);
    /***/
  },

  /***/
  "./src/core/services/pipelines/builds/builds.service.ts":
  /*!**************************************************************!*\
    !*** ./src/core/services/pipelines/builds/builds.service.ts ***!
    \**************************************************************/

  /*! exports provided: BuildsService */

  /***/
  function srcCoreServicesPipelinesBuildsBuildsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuildsService", function () {
      return BuildsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../base.api.service */
    "./src/core/services/base.api.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var BuildsService =
    /*#__PURE__*/
    function (_base_api_service__WE) {
      _inherits(BuildsService, _base_api_service__WE);

      function BuildsService(http) {
        var _this8;

        _classCallCheck(this, BuildsService);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(BuildsService).call(this, http));
        _this8.http = http;
        _this8.resourceName = 'pipelines/builds';
        return _this8;
      }

      _createClass(BuildsService, [{
        key: "getBuild",
        value: function getBuild(project) {
          return this.get("".concat(this.resourceName, "?project=").concat(project));
        }
      }, {
        key: "getBuilds",
        value: function getBuilds(project) {
          return this.getAll("".concat(this.resourceName, "?project=").concat(project));
        }
      }, {
        key: "getBuildsCount",
        value: function getBuildsCount(project) {
          return this.getCount("".concat(this.resourceName, "/count?project=").concat(project));
        }
      }, {
        key: "getBuildsByMonthChart",
        value: function getBuildsByMonthChart(project) {
          return this.getChart("".concat(this.resourceName, "/chart/byMonth/").concat(project));
        }
      }, {
        key: "getBuildsByRequestChart",
        value: function getBuildsByRequestChart(project) {
          return this.getChart("".concat(this.resourceName, "/chart/byRequest/").concat(project));
        }
      }, {
        key: "getBuildsByResultChart",
        value: function getBuildsByResultChart(project) {
          return this.getChart("".concat(this.resourceName, "/chart/byResult/").concat(project));
        }
      }]);

      return BuildsService;
    }(_base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"]);

    BuildsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    BuildsService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], BuildsService);
    /***/
  },

  /***/
  "./src/core/services/pipelines/releases/releases.service.ts":
  /*!******************************************************************!*\
    !*** ./src/core/services/pipelines/releases/releases.service.ts ***!
    \******************************************************************/

  /*! exports provided: ReleasesService */

  /***/
  function srcCoreServicesPipelinesReleasesReleasesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReleasesService", function () {
      return ReleasesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../base.api.service */
    "./src/core/services/base.api.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ReleasesService =
    /*#__PURE__*/
    function (_base_api_service__WE2) {
      _inherits(ReleasesService, _base_api_service__WE2);

      function ReleasesService(http) {
        var _this9;

        _classCallCheck(this, ReleasesService);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(ReleasesService).call(this, http));
        _this9.http = http;
        _this9.resourceName = 'pipelines/releases';
        return _this9;
      }

      _createClass(ReleasesService, [{
        key: "getRelease",
        value: function getRelease(project) {
          return this.get("".concat(this.resourceName, "?project=").concat(project));
        }
      }, {
        key: "getReleases",
        value: function getReleases(project) {
          return this.getAll("".concat(this.resourceName, "?project=").concat(project));
        }
      }, {
        key: "getReleasesCount",
        value: function getReleasesCount(project) {
          return this.getCount("".concat(this.resourceName, "/count?project=").concat(project));
        }
      }, {
        key: "getReleasesByMonthChart",
        value: function getReleasesByMonthChart(project) {
          return this.getChart("".concat(this.resourceName, "/chart/byMonth/").concat(project));
        }
      }, {
        key: "getReleasesByRequestChart",
        value: function getReleasesByRequestChart(project) {
          return this.getChart("".concat(this.resourceName, "/chart/byRequest/").concat(project));
        }
      }, {
        key: "getReleasesByResultChart",
        value: function getReleasesByResultChart(project) {
          return this.getChart("".concat(this.resourceName, "/chart/byResult/").concat(project));
        }
      }]);

      return ReleasesService;
    }(_base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"]);

    ReleasesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ReleasesService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ReleasesService);
    /***/
  },

  /***/
  "./src/core/services/project/project.service.ts":
  /*!******************************************************!*\
    !*** ./src/core/services/project/project.service.ts ***!
    \******************************************************/

  /*! exports provided: ProjectService */

  /***/
  function srcCoreServicesProjectProjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
      return ProjectService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base.api.service */
    "./src/core/services/base.api.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ProjectService =
    /*#__PURE__*/
    function (_base_api_service__WE3) {
      _inherits(ProjectService, _base_api_service__WE3);

      function ProjectService(http) {
        var _this10;

        _classCallCheck(this, ProjectService);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(ProjectService).call(this, http));
        _this10.http = http;
        return _this10;
      }

      _createClass(ProjectService, [{
        key: "getProject",
        value: function getProject(project) {
          return this.get("projects/".concat(project));
        }
      }, {
        key: "getProjectsCount",
        value: function getProjectsCount() {
          return this.getCount("projects/count");
        }
      }, {
        key: "getProjects",
        value: function getProjects() {
          return this.getAll("projects");
        }
      }, {
        key: "getRepos",
        value: function getRepos(project) {
          return this.getAll("repos/repos?project=".concat(project));
        }
      }, {
        key: "getSprints",
        value: function getSprints(project, team) {
          return this.getAll("boards/sprint/".concat(project, "/").concat(team));
        }
      }, {
        key: "getCurrentSprint",
        value: function getCurrentSprint(project, team) {
          return this.get("boards/sprint/currentSprint?project=".concat(project, "&team=").concat(team));
        }
      }, {
        key: "getPullRequestVotes",
        value: function getPullRequestVotes(project, repo) {
          return this.getAll("projects/PullRequestByVote?project=".concat(project, "&repositoryId=").concat(repo));
        }
      }]);

      return ProjectService;
    }(_base_api_service__WEBPACK_IMPORTED_MODULE_2__["BaseApiService"]);

    ProjectService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ProjectService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ProjectService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! exports provided: getBaseUrl */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }

    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\lorna.watson\Desktop\DevAnalytics.Frontend\DevAnalytics.Frontend\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map