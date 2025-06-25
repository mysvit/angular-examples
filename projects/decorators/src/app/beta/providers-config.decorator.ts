import { ChangeDetectionStrategy, Component, isDevMode, Type } from '@angular/core'
import { CommonModule }                                        from '@angular/common'
import { FormsModule }                        from '@angular/forms'


interface FeatureComponentOptions extends Omit<Component, 'selector' | 'standalone' | 'changeDetection' | 'imports'> {
    // We'll enforce a selector prefix, so remove it from the Omit and add it back if needed
    featureSelector: string; // The specific part of the selector for this feature
    extraImports?: any[]; // For component-specific additional imports
}

export function featureComponent(options: FeatureComponentOptions): Component {
    const defaultImports = [
        CommonModule,
        FormsModule
    ]

    return {
        selector: `app-${options.featureSelector}`, // Enforce 'app-' prefix
        changeDetection: ChangeDetectionStrategy.OnPush,
        standalone: true, // Always standalone for this pattern
        imports: [...defaultImports, ...(options.extraImports || [])], // Merge imports
        ...options // Spread the rest of the options (templateUrl, styleUrls, etc.)
    }
}

// This is our custom class decorator factory
export function WithFeatureAnalytics() {
    return <T extends Type<any>>(target: T) => {
        console.log(target)
        // Only apply analytics in non-production mode or specific environments
        if (!isDevMode()) { // Or check environment.production
            return target;
        }

        // Save original lifecycle hooks if they exist
        const originalOnInit = target.prototype.ngOnInit;
        const originalOnDestroy = target.prototype.ngOnDestroy;

        // Enhance the ngOnInit lifecycle hook
        target.prototype.ngOnInit = function(...args: any[]) {
            // console.log(`[Analytics] Feature '${target.name}' (Selector: ${target['__decorator_metadata__']?.[0]?.selector || 'unknown'}) initialized.`);
            // Call the original ngOnInit if it exists
            if (originalOnInit) {
                originalOnInit.apply(this, args);
            }
        };

        // Enhance the ngOnDestroy lifecycle hook
        target.prototype.ngOnDestroy = function(...args: any[]) {
            // console.log(`[Analytics] Feature '${target.name}' (Selector: ${target['__decorator_metadata__']?.[0]?.selector || 'unknown'}) destroyed.`);
            // Call the original ngOnDestroy if it exists
            if (originalOnDestroy) {
                originalOnDestroy.apply(this, args);
            }
        };

        // Return the modified class
        return target;
    };
}

// import { Component, Directive, Type } from '@angular/core'
//
//
// @Directive()
// export class BaseThemedComponent {
// }
//
// export function ThemedComponent<T extends Type<BaseThemedComponent>>() {
//     // Return the actual decorator function
//     return (target: T) => {
//         // Define the new (extended) component metadata
//         const extendedMetadata: Component = {
//             styles: `p{color:red}`
//         }
//
//         // Apply the new metadata using the @Component decorator
//         Component(extendedMetadata)(target) // This is how you apply a decorator programmatically
//
//         // Add a property to the prototype for the theme title
//         // Object.defineProperty(target.prototype, 'themeTitle', {
//         //     value: `${target.name.replace(/Component$/, '')} Themed`, // Derive title from component name
//         //     writable: true,
//         //     configurable: true
//         // });
//
//         // Optionally inject the service into the prototype if needed
//         // This is more complex and usually handled better by component's constructor or
//         // through providers. For demonstration:
//         // const originalConstructor = target.prototype.constructor;
//         // target.prototype.constructor = function(...args: any[]) {
//         //     originalConstructor.apply(this, args);
//         //     // This part is tricky as DI happens before constructor.
//         //     // A better approach is to let the component's constructor inject it.
//         // };
//
//         return target // Return the modified class
//     }
// }
//
// // import { Component, ComponentDecorator, Provider } from '@angular/core'
// //
// // interface ConfigurableComponentMetadata extends Omit<Component, 'standalone'> {
// //     // Custom properties for our decorator
// //     // configType: 'no' | 'with'
// //     imports?: any[]
// // }
// //
// // /**
// //  * A custom Angular Component Decorator factory that dynamically sets its 'providers' array
// //  * based on the parameters passed to the decorator.
// //  *
// //  * @param metadata The metadata for the component, including configuration for providers.
// //  */
// // export function ConfigurableComponent(metadata: ConfigurableComponentMetadata): ComponentDecorator {
// //
// //     let specificProviders: Provider[] = []
// //
// //     // switch (metadata.configType) {
// //     //     case 'with':
// //     //         specificProviders.push({provide: CounterService, useClass: CounterService})
// //     //         break
// //     //     default:
// //     //         console.warn(`Unknown configType: ${metadata.configType}. Defaulting to DefaultConfigService.`)
// //     //         break
// //     // }
// //
// //     // Merge the provided metadata with defaults
// //     const mergedMetadata: Component = {
// //         ...metadata,
// //         standalone: true
// //     }
// //     // providers: [...specificProviders] // Merge dynamic providers
// //
// //     // Return the standard @Component decorator
// //     return Component(mergedMetadata)
// // }
