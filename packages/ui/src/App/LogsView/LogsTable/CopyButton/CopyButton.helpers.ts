async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
        return await navigator.clipboard.writeText(text);
    } else {
        return document.execCommand("copy", true, text);
    }
}

export const handleCopyClick = (
    copyText: string,
    setOpen: (state: boolean) => void
) => {
    copyTextToClipboard(copyText)
        .then(() => {
            setTimeout(() => {
                setOpen(false);
            }, 1000);
        })
        .catch((err) => {
            console.error(err);
        });
};
