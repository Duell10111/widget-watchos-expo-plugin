declare module "xcode";

type IosExtensionTargetType = "watch" | "widget" | "complication";

type IosExtensionTarget = {
    type: IosExtensionTargetType;
    bundleId: string;
    companionAppBundleId?: string;
    name: string;
    displayName?: string;
    sourceDir: string;
    sourceFiles: string[];
    entitlementsFile?: string;
    frameworks: string[];
    buildConfigOverrides?: Record<string, string>
};

type WithExtensionProps = {
    isTV?: boolean;
    devTeamId: string;
    targets: IosExtensionTarget[];
};
