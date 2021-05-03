import {createContext} from 'react';
const SIDEBAR_STATUS = "sbstatus"

// SIDEBAR CONTEXT =======================================
const SidebarContext = createContext();

const initialState = {
    status: "retracted"
};

const reducer = (state, action) => {
    switch (action) {
        case "swap":
            const stat = (state.status === "retracted" ? "extended" : "retracted")
            window.localStorage.setItem(SIDEBAR_STATUS, stat)
            return { status: stat };
        default:
            return { status: "retracted" };
    }
}

function init(initialState) {
    try {
        const item = window.localStorage.getItem(SIDEBAR_STATUS);
        return item ? { status: item } : initialState;
    } catch (error) {
        console.log(error);
        return initialState;
    }
}
// SIDEBAR CONTEXT END ===================================


export { SidebarContext, initialState, reducer, init }

