import { PropsWithChildren } from "react";
import { I18nProviderClient } from "../../../locales/client";

export const Providers = (props  : PropsWithChildren<{ locale: string }>) => {
    return (
    <I18nProviderClient locale={props.locale}>
        {props.children}
        </I18nProviderClient>
        );
};