import { boolish } from "getenv";
import { ConfigPlugin } from "@expo/config-plugins";

import { withXCodeExtensionTargets } from "./ios/withXCodeExtensionTargets";

class Env {
    /** Enable prebuild for TV */
    get EXPO_TV() {
        return boolish('EXPO_TV', false);
    }
}

const env = new Env();

export function isTVEnabled(params: WithExtensionProps): boolean {
    return env.EXPO_TV || (params?.isTV ?? false);
}

const withNoEffect: ConfigPlugin<WithExtensionProps> = (config) => {
    console.log("Detected TV version. No WatchOS - Widget Changes will be made.")
    return config;
};

const withAppConfigs: ConfigPlugin<WithExtensionProps> = (config, options) => {
    const isTV = isTVEnabled(options);

    if(isTV) {
        return withNoEffect(config, options)
    }

    config = withXCodeExtensionTargets(config, options);
    return config;
};

export default withAppConfigs;
