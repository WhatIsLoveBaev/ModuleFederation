import React, { ReactNode, Suspense } from 'react';
import { MuiThemeProvider } from 'common/theme';
import { BrowserRouter } from 'react-router-dom';


interface IProps {
    children: ReactNode;
}


export const RootLayout = ({ children }: IProps) => {


    return (
        <Suspense fallback='loading...'>
            <BrowserRouter>
                <MuiThemeProvider>
                    <div style={{ display: 'flex', maxWidth: '500px', gap: '12px' }}>
                        <div style={{ width: '20px', backgroundColor: '#000', height: '20px' }}>1</div>
                        <div style={{ width: '20px', backgroundColor: '#000', height: '20px' }}>1</div>
                        <div style={{ width: '20px', backgroundColor: '#000', height: '20px' }}>1</div>
                        <div style={{ width: '20px', backgroundColor: '#000', height: '20px' }}>1</div>
                        <div style={{ width: '20px', backgroundColor: '#000', height: '20px' }}>1</div>
                        <div style={{ width: '20px', backgroundColor: '#000', height: '20px' }}>1</div>
                        <div style={{ width: '20px', backgroundColor: '#000', height: '20px' }}>1</div>
                    </div>
                    {children}
                </MuiThemeProvider>
            </BrowserRouter>
        </Suspense>
    );
};