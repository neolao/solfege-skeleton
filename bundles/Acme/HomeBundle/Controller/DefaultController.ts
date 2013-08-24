import ControllerAbstract = module('../../../../node_modules/solfegejs/lib/Component/Kernel/Controller/ControllerAbstract');

/**
 * The default controller of the home bundle
 *
 * @namespace Acme.HomeBundle.Controller
 * @class DefaultController
 * @constructor
 */
class DefaultController extends ControllerAbstract
{
    /**
     * Constructor
     */
    constructor()
    {
        super();
    }

    /**
     * Default action
     */
    public indexAction(request, response)
    {
        var parameters = request.parameters;

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end("Home\n" + parameters.first + ", " + parameters.second);
    }
}

export = DefaultController;