import { StompConfig } from './stomp.config';
import { Observable } from 'rxjs/Observable';
/**
 * An injected class which grabs the application
 * config variables (e.g. STOMP credentials)
 * for the user application.
 *
 * You will need to subclass this and pass an instance using Dependency Injection
 * mechanism of Angular. See README and samples for ideas on how to implement.
 *
 * @type StompConfigService
 */
export declare class StompConfigService {
    /** Constructor */
    constructor();
    /** Implement this method in your derived class.
     * See README and samples for ideas on how to implement.
     */
    get(): Observable<StompConfig>;
}