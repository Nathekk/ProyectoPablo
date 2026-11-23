import "@emotion/react";
import type {AppTheme} from "./Theme.ts";

declare module "@emotion/react" {
    export interface Theme extends AppTheme {
    }
}