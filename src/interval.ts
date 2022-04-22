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
] as const;

export type TUnit = typeof UNITS[number];

const reValue = new RegExp(`^(\\d+)(${UNITS.join('|')})$`);

interface IInterval {
	(value: number, unit: TUnit): number;
	(value: `${number}${TUnit}`): number;

	s1: number;
	s2: number;
	s3: number;
	s4: number;
	s5: number;
	s10: number;
	s15: number;
	s20: number;
	s25: number;
	s30: number;
	m1: number;
	m2: number;
	m3: number;
	m4: number;
	m5: number;
	m10: number;
	m15: number;
	m20: number;
	m25: number;
	m30: number;
	h1: number;
	h2: number;
	h3: number;
	h4: number;
	h5: number;
	h6: number;
	h10: number;
	h12: number;
	h16: number;
	h20: number;
	d1: number;
	d2: number;
	d3: number;
	d4: number;
	d5: number;
	w1: number;
	d10: number;
	w2: number;
	d15: number;
	d20: number;
	d25: number;
	d30: number;
}

export const interval: IInterval = function interval(value: number | string, unit?: TUnit) {
	if (typeof value == 'string') {
		if (!reValue.test(value)) {
			throw SyntaxError('Invalid value format');
		}

		value = +RegExp.$1;
		unit = RegExp.$2 as TUnit;
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
} as any;

export default interval;

interval.s1 = interval(1, 's');
interval.s2 = interval(2, 's');
interval.s3 = interval(3, 's');
interval.s4 = interval(4, 's');
interval.s5 = interval(5, 's');
interval.s10 = interval(10, 's');
interval.s15 = interval(15, 's');
interval.s20 = interval(20, 's');
interval.s25 = interval(25, 's');
interval.s30 = interval(30, 's');
interval.m1 = interval(1, 'm');
interval.m2 = interval(2, 'm');
interval.m3 = interval(3, 'm');
interval.m4 = interval(4, 'm');
interval.m5 = interval(5, 'm');
interval.m10 = interval(10, 'm');
interval.m15 = interval(15, 'm');
interval.m20 = interval(20, 'm');
interval.m25 = interval(25, 'm');
interval.m30 = interval(30, 'm');
interval.h1 = interval(1, 'h');
interval.h2 = interval(2, 'h');
interval.h3 = interval(3, 'h');
interval.h4 = interval(4, 'h');
interval.h5 = interval(5, 'h');
interval.h6 = interval(6, 'h');
interval.h10 = interval(10, 'h');
interval.h12 = interval(12, 'h');
interval.h16 = interval(16, 'h');
interval.h20 = interval(20, 'h');
interval.d1 = interval(1, 'd');
interval.d2 = interval(2, 'd');
interval.d3 = interval(3, 'd');
interval.d4 = interval(4, 'd');
interval.d5 = interval(5, 'd');
interval.w1 = interval(1, 'w');
interval.d10 = interval(10, 'd');
interval.w2 = interval(2, 'w');
interval.d15 = interval(15, 'd');
interval.d20 = interval(20, 'd');
interval.d25 = interval(25, 'd');
interval.d30 = interval(30, 'd');
