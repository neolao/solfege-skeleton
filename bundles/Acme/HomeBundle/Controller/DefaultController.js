var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ControllerAbstract = require('../../../../node_modules/solfegejs/lib/Component/Kernel/Controller/ControllerAbstract');

var DefaultController = (function (_super) {
    __extends(DefaultController, _super);
    function DefaultController() {
        _super.call(this);
    }
    DefaultController.prototype.indexAction = function (request, response) {
        var parameters = request.parameters;

        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end("Home\n" + parameters.first + ", " + parameters.second);
    };
    return DefaultController;
})(ControllerAbstract);


module.exports = DefaultController;

