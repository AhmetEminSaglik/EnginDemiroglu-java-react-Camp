import { createRoutesFromChildren } from "react-router-dom";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

export function configureStore() {
    return createRoutesFromChildren(rootReducer, devToolsEnhancer())
}