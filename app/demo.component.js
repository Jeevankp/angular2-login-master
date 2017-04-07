System.register(['angular2/core', 'angular2-file-drop'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular2_file_drop_1;
    var PartiesUpload;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_file_drop_1_1) {
                angular2_file_drop_1 = angular2_file_drop_1_1;
            }],
        execute: function() {
            PartiesUpload = (function () {
                function PartiesUpload() {
                    this.fileIsOver = false;
                    this.options = {
                        readAs: 'ArrayBuffer'
                    };
                }
                PartiesUpload.prototype.fileOver = function (fileIsOver) {
                    this.fileIsOver = fileIsOver;
                };
                PartiesUpload.prototype.onFileDrop = function (file) {
                    console.log('Got file!');
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], PartiesUpload.prototype, "options", void 0);
                PartiesUpload = __decorate([
                    core_1.Component({
                        selector: 'upload',
                        template: "\n    <div fileDrop\n      [ngClass]=\"{'file-is-over': fileIsOver}\"\n      [options]=\"options\"\n      (fileOver)=\"fileOver($event)\"\n      (onFileDrop)=\"onFileDrop($event)\">\n      Drop file here\n    </div>\n  ",
                        directives: [angular2_file_drop_1.FileDropDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PartiesUpload);
                return PartiesUpload;
            }());
            exports_1("PartiesUpload", PartiesUpload);
        }
    }
});
//# sourceMappingURL=demo.component.js.map