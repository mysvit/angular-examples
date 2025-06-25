import { Component, Type } from '@angular/core'


interface CustomComponentWrapperOptions extends Omit<Component, 'providers'> {
    runtimeMetadata?: { [key: string]: any };
}

/**
 * A helper function to create standardized and dynamically-configurable @Component metadata.
 * This is where the 'dynamic' provider is defined via useFactory.
 */
export function MyCustomComponentWrapper(options: CustomComponentWrapperOptions) {
    const {runtimeMetadata, ...rest} = options

    // This is the actual decorator that gets returned by the factory.
    // It will apply the @Component decorator to the target class.
    return <T extends Type<any>>(target: T) => {
        // 1. **Apply the @Component decorator internally**
        // This part effectively "overrides" the need to put @Component directly on the class.
        // However, it's still Angular's @Component being used under the hood.
        Component({
            ...rest
        })(target) // Apply the Component decorator to the target class
    }
}


