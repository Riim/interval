"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interval = void 0;
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
exports.interval = function interval(value, unit) {
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
};
exports.default = exports.interval;
exports.interval.s1 = (0, exports.interval)(1, 's');
exports.interval.s2 = (0, exports.interval)(2, 's');
exports.interval.s3 = (0, exports.interval)(3, 's');
exports.interval.s4 = (0, exports.interval)(4, 's');
exports.interval.s5 = (0, exports.interval)(5, 's');
exports.interval.s10 = (0, exports.interval)(10, 's');
exports.interval.s15 = (0, exports.interval)(15, 's');
exports.interval.s20 = (0, exports.interval)(20, 's');
exports.interval.s25 = (0, exports.interval)(25, 's');
exports.interval.s30 = (0, exports.interval)(30, 's');
exports.interval.m1 = (0, exports.interval)(1, 'm');
exports.interval.m2 = (0, exports.interval)(2, 'm');
exports.interval.m3 = (0, exports.interval)(3, 'm');
exports.interval.m4 = (0, exports.interval)(4, 'm');
exports.interval.m5 = (0, exports.interval)(5, 'm');
exports.interval.m10 = (0, exports.interval)(10, 'm');
exports.interval.m15 = (0, exports.interval)(15, 'm');
exports.interval.m20 = (0, exports.interval)(20, 'm');
exports.interval.m25 = (0, exports.interval)(25, 'm');
exports.interval.m30 = (0, exports.interval)(30, 'm');
exports.interval.h1 = (0, exports.interval)(1, 'h');
exports.interval.h2 = (0, exports.interval)(2, 'h');
exports.interval.h3 = (0, exports.interval)(3, 'h');
exports.interval.h4 = (0, exports.interval)(4, 'h');
exports.interval.h5 = (0, exports.interval)(5, 'h');
exports.interval.h6 = (0, exports.interval)(6, 'h');
exports.interval.h10 = (0, exports.interval)(10, 'h');
exports.interval.h12 = (0, exports.interval)(12, 'h');
exports.interval.h16 = (0, exports.interval)(16, 'h');
exports.interval.h20 = (0, exports.interval)(20, 'h');
exports.interval.d1 = (0, exports.interval)(1, 'd');
exports.interval.d2 = (0, exports.interval)(2, 'd');
exports.interval.d3 = (0, exports.interval)(3, 'd');
exports.interval.d4 = (0, exports.interval)(4, 'd');
exports.interval.d5 = (0, exports.interval)(5, 'd');
exports.interval.w1 = (0, exports.interval)(1, 'w');
exports.interval.d10 = (0, exports.interval)(10, 'd');
exports.interval.w2 = (0, exports.interval)(2, 'w');
exports.interval.d15 = (0, exports.interval)(15, 'd');
exports.interval.d20 = (0, exports.interval)(20, 'd');
exports.interval.d25 = (0, exports.interval)(25, 'd');
exports.interval.d30 = (0, exports.interval)(30, 'd');
