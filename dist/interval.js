"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interval30d = exports.interval15d = exports.interval2w = exports.interval10d = exports.interval1w = exports.interval5d = exports.interval4d = exports.interval3d = exports.interval2d = exports.interval1d = exports.interval12h = exports.interval10h = exports.interval6h = exports.interval5h = exports.interval4h = exports.interval3h = exports.interval2h = exports.interval1h = exports.interval30m = exports.interval25m = exports.interval20m = exports.interval15m = exports.interval10m = exports.interval5m = exports.interval4m = exports.interval3m = exports.interval2m = exports.interval1m = exports.interval30s = exports.interval25s = exports.interval20s = exports.interval15s = exports.interval10s = exports.interval5s = exports.interval4s = exports.interval3s = exports.interval2s = exports.interval1s = exports.interval = void 0;
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
function interval(value, unit) {
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
exports.interval = interval;
exports.interval1s = interval(1, 's');
exports.interval2s = interval(2, 's');
exports.interval3s = interval(3, 's');
exports.interval4s = interval(4, 's');
exports.interval5s = interval(5, 's');
exports.interval10s = interval(10, 's');
exports.interval15s = interval(15, 's');
exports.interval20s = interval(20, 's');
exports.interval25s = interval(25, 's');
exports.interval30s = interval(30, 's');
exports.interval1m = interval(1, 'm');
exports.interval2m = interval(2, 'm');
exports.interval3m = interval(3, 'm');
exports.interval4m = interval(4, 'm');
exports.interval5m = interval(5, 'm');
exports.interval10m = interval(10, 'm');
exports.interval15m = interval(15, 'm');
exports.interval20m = interval(20, 'm');
exports.interval25m = interval(25, 'm');
exports.interval30m = interval(30, 'm');
exports.interval1h = interval(1, 'h');
exports.interval2h = interval(2, 'h');
exports.interval3h = interval(3, 'h');
exports.interval4h = interval(4, 'h');
exports.interval5h = interval(5, 'h');
exports.interval6h = interval(6, 'h');
exports.interval10h = interval(10, 'h');
exports.interval12h = interval(12, 'h');
exports.interval1d = interval(1, 'd');
exports.interval2d = interval(2, 'd');
exports.interval3d = interval(3, 'd');
exports.interval4d = interval(4, 'd');
exports.interval5d = interval(5, 'd');
exports.interval1w = interval(1, 'w');
exports.interval10d = interval(10, 'd');
exports.interval2w = interval(2, 'w');
exports.interval15d = interval(15, 'd');
exports.interval30d = interval(30, 'd');
