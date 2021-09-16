import React, {
    ComponentProps,
    ComponentType,
    JSXElementConstructor,
    Suspense,
} from 'react';
import { ThemeTypeProvider } from 'theme';



export const WithCurrentTheme = <T, P>(
    Component: ComponentType<P>
) => (props: P) => {
    return (
        <ThemeTypeProvider>
            <Component {...props as ComponentProps<JSXElementConstructor<any>>} />
        </ThemeTypeProvider>
    );
};
