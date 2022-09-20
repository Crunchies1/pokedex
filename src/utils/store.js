import {createContext, useState} from 'react';
const SIDEBAR_STATUS = "sbstatus"
const DARK_STATUS = "darkstatus"

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

const DarkContext = createContext("");

const darkInitialState = {
    status: ""
};

const darkReducer = (state, action) => {
    switch (action) {
        case "swap":
            const stat = (state.status === "dark" ? "" : "dark")
            window.localStorage.setItem(DARK_STATUS, stat)
            return { status: stat };
        default:
            return { status: "" };
    }
}

function darkInit(darkInitialState) {
    try {
        const item = window.localStorage.getItem(DARK_STATUS);
        return item ? { status: item } : darkInitialState;
    } catch (error) {
        console.log(error);
        return darkInitialState;
    }
}

const FilterContext = createContext([]);
    
function FilterProvider({ children }) {
    const [filters, setFilters] = useState([]);

    return (
        <FilterContext.Provider value={{ filters, setFilters }}>
            {children}
        </FilterContext.Provider>
    );
}

export { SidebarContext, FilterContext, FilterProvider, DarkContext, 
    initialState, reducer, init, darkInitialState, darkReducer, darkInit }

