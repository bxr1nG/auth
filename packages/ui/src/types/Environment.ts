import type ExtraField from "~/types/ExtraField";

type Environment = {
    ls_scope: string;
    default_context: string;
    extra_fields: Array<ExtraField>;
};

export default Environment;
