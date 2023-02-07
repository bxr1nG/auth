export {};

declare global {
    interface Window {
        toggleDevtools: () => void;
    }

    declare module "*.scss" {
        const content: Record<string, string>;
        export default content;
    }
}
