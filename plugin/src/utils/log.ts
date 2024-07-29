const debug = require('debug')(
    'expo:widget-watchos-expo-plugin',
) as typeof console.log;

export function verboseLog(
    message: string,
    options?: {
        params?: WithExtensionProps;
        platform?: 'android' | 'ios';
        property?: string;
    },
) {
    const tokens = [message];
    options?.property && tokens.unshift(options?.property);
    options?.platform && tokens.unshift(options?.platform);
    debug(tokens.join(': '));
}
