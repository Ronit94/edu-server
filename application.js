"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducareServerApplication = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const rest_explorer_1 = require("@loopback/rest-explorer");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const jwt_strategy_1 = require("./authentication-strategies/jwt-strategy");
const key_1 = require("./key");
const sequence_1 = require("./sequence");
const hash_password_bcryptjs_1 = require("./services/hash.password.bcryptjs");
const jwt_service_1 = require("./services/jwt-service");
class EducareServerApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        this.setUpBindings();
        authentication_1.registerAuthenticationStrategy(this, jwt_strategy_1.JWTAuthenticationStrategy);
        this.component(authentication_1.AuthenticationComponent);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
    setUpBindings() {
        // Bind package.json to the application context
        this.bind(key_1.TokenServiceBindings.TOKEN_SECRET).to(key_1.TokenServiceConstants.TOKEN_SECRET_VALUE);
        this.bind(key_1.TokenServiceBindings.TOKEN_EXPIRES_IN).to(key_1.TokenServiceConstants.TOKEN_EXPIRES_IN_VALUE);
        this.bind(key_1.TokenServiceBindings.TOKEN_SERVICE).toClass(jwt_service_1.JWTService);
        // // Bind bcrypt hash services
        this.bind(key_1.PasswordHasherBindings.ROUNDS).to(10);
        this.bind(key_1.PasswordHasherBindings.PASSWORD_HASHER).toClass(hash_password_bcryptjs_1.BcryptHasher);
        //this.bind(UserServiceBindings.USER_SERVICE).toClass(MyUserService);
    }
}
exports.EducareServerApplication = EducareServerApplication;
//# sourceMappingURL=application.js.map