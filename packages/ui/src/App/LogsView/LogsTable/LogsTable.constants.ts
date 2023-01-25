import theme from "~/theme";

export const sx = {
    whiteBackground: {
        backgroundColor: theme.palette.common.white
    },
    clientSelectControl: {
        alignSelf: "flex-end",
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none"
        }
    },
    clientSelect: {
        boxShadow: "none",
        ".MuiOutlinedInput-notchedOutline": { border: 0 }
    }
};
