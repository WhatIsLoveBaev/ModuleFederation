import React, {
    useState,
    useMemo,
    ReactNode,
    createContext,
    Dispatch,
    SetStateAction,
} from 'react';


interface IProps {
    children: ReactNode;
}

export enum THEME_TYPE {
    LIGHT = 'light',
    DARK = 'dark',
}

interface IContext {
    themeType: THEME_TYPE;
    setThemeType: Dispatch<SetStateAction<THEME_TYPE>>;
}

export const ThemeContext = createContext<IContext>({} as IContext);

export const ThemeTypeProvider = ({ children }: IProps) => {
    const [themeType, setThemeType] = useState(THEME_TYPE.LIGHT);

    const value = useMemo(() => ({
        themeType,
        setThemeType
    }), [themeType]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};