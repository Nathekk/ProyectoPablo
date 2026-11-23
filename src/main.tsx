import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router';
import {ThemeProvider} from "@emotion/react";

import App from './App.tsx'
import {theme} from "./theme/theme.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
</StrictMode>,
)
