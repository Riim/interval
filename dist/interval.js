const UNITS = [
    's',
    'second',
    'seconds',
    'm',
    'minute',
    'minutes',
    'h',
    'hour',
    'hours',
    'd',
    'day',
    'days',
    'w',
    'weak',
    'weaks'
];
const reValue = new RegExp(`^(\\d+)(${UNITS.join('|')})$`);
export function interval(value, unit) {
    if (typeof value == 'string') {
        if (!reValue.test(value)) {
            throw SyntaxError('Invalid value format');
        }
        value = +RegExp.$1;
        unit = RegExp.$2;
    }
    switch (unit) {
        case 's':
        case 'second':
        case 'seconds': {
            return 1000 * value;
        }
        case 'm':
        case 'minute':
        case 'minutes': {
            return 1000 * 60 * value;
        }
        case 'h':
        case 'hour':
        case 'hours': {
            return 1000 * 60 * 60 * value;
        }
        case 'd':
        case 'day':
        case 'days': {
            return 1000 * 60 * 60 * 24 * value;
        }
        case 'w':
        case 'weak':
        case 'weaks': {
            return 1000 * 60 * 60 * 24 * 7 * value;
        }
    }
    return value;
}
export const interval1s = interval(1, 's');
export const interval2s = interval(2, 's');
export const interval3s = interval(3, 's');
export const interval4s = interval(4, 's');
export const interval5s = interval(5, 's');
export const interval10s = interval(10, 's');
export const interval15s = interval(15, 's');
export const interval20s = interval(20, 's');
export const interval25s = interval(25, 's');
export const interval30s = interval(30, 's');
export const interval1m = interval(1, 'm');
export const interval2m = interval(2, 'm');
export const interval3m = interval(3, 'm');
export const interval4m = interval(4, 'm');
export const interval5m = interval(5, 'm');
export const interval10m = interval(10, 'm');
export const interval15m = interval(15, 'm');
export const interval20m = interval(20, 'm');
export const interval25m = interval(25, 'm');
export const interval30m = interval(30, 'm');
export const interval1h = interval(1, 'h');
export const interval2h = interval(2, 'h');
export const interval3h = interval(3, 'h');
export const interval4h = interval(4, 'h');
export const interval5h = interval(5, 'h');
export const interval6h = interval(6, 'h');
export const interval10h = interval(10, 'h');
export const interval12h = interval(12, 'h');
export const interval1d = interval(1, 'd');
export const interval2d = interval(2, 'd');
export const interval3d = interval(3, 'd');
export const interval4d = interval(4, 'd');
export const interval5d = interval(5, 'd');
export const interval1w = interval(1, 'w');
export const interval10d = interval(10, 'd');
export const interval2w = interval(2, 'w');
export const interval15d = interval(15, 'd');
export const interval30d = interval(30, 'd');
