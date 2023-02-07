import type { AlertColor } from "@mui/material/Alert";

import React, { createContext, useState, ReactNode } from "react";

const ALERT_TIME = 5000;
const initialState = {
    text: "",
    type: "" as AlertColor | ""
};

const AlertContext = createContext({
    ...initialState,
    setAlert: (text: string, type: AlertColor | "") => {
        console.info(text, type);
    }
});

type AlertProviderProps = {
    children: ReactNode;
};

export const AlertProvider: React.FC<AlertProviderProps> = (props) => {
    const { children } = props;
    const [text, setText] = useState("");
    const [type, setType] = useState<AlertColor | "">("");

    const setAlert = (text: string, type: AlertColor | "") => {
        setText(text);
        setType(type);

        setTimeout(() => {
            setText("");
            setType("");
        }, ALERT_TIME);
    };

    return (
        <AlertContext.Provider
            value={{
                text,
                type,
                setAlert
            }}
        >
            {children}
        </AlertContext.Provider>
    );
};

export default AlertContext;
