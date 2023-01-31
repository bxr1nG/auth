import theme from "~/theme";

export const sx = {
    accordion: {
        backgroundColor: "transparent",
        boxShadow: "none",
        "&::before": {
            display: "none"
        }
    },
    accordionSummary: {
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: 0
    },
    accordionDetails: {
        padding: 0,
        borderTop: `1px solid ${theme.palette.divider}`,
        paddingTop: "1.5rem"
    }
};
