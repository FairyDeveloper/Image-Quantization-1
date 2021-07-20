/*
var data = [
	50.0000, 2.6772, -79.7751, 50.0000, 0.0000, -82.7485, 2.0425,
	50.0000, 3.1571, -77.2803, 50.0000, 0.0000, -82.7485, 2.8615,
	50.0000, 2.8361, -74.0200, 50.0000, 0.0000, -82.7485, 3.4412,
	50.0000, -1.3802, -84.2814, 50.0000, 0.0000, -82.7485, 1.0000,
	50.0000, -1.1848, -84.8006, 50.0000, 0.0000, -82.7485, 1.0000,
	50.0000, -0.9009, -85.5211, 50.0000, 0.0000, -82.7485, 1.0000,
	50.0000, 0.0000, 0.0000, 50.0000, -1.0000, 2.0000, 2.3669,
	50.0000, -1.0000, 2.0000, 50.0000, 0.0000, 0.0000, 2.3669,
	50.0000, 2.4900, -0.0010, 50.0000, -2.4900, 0.0009, 7.1792,
	50.0000, 2.4900, -0.0010, 50.0000, -2.4900, 0.0010, 7.1792,
	50.0000, 2.4900, -0.0010, 50.0000, -2.4900, 0.0011, 7.2195,
	50.0000, 2.4900, -0.0010, 50.0000, -2.4900, 0.0012, 7.2195,
	50.0000, -0.0010, 2.4900, 50.0000, 0.0009, -2.4900, 4.8045,
	50.0000, -0.0010, 2.4900, 50.0000, 0.0010, -2.4900, 4.8045,
	50.0000, -0.0010, 2.4900, 50.0000, 0.0011, -2.4900, 4.7461,
	50.0000, 2.5000, 0.0000, 50.0000, 0.0000, -2.5000, 4.3065,
	50.0000, 2.5000, 0.0000, 73.0000, 25.0000, -18.0000, 27.1492,
	50.0000, 2.5000, 0.0000, 61.0000, -5.0000, 29.0000, 22.8977,
	50.0000, 2.5000, 0.0000, 56.0000, -27.0000, -3.0000, 31.9030,
	50.0000, 2.5000, 0.0000, 58.0000, 24.0000, 15.0000, 19.4535,
	50.0000, 2.5000, 0.0000, 50.0000, 3.1736, 0.5854, 1.0000,
	50.0000, 2.5000, 0.0000, 50.0000, 3.2972, 0.0000, 1.0000,
	50.0000, 2.5000, 0.0000, 50.0000, 1.8634, 0.5757, 1.0000,
	50.0000, 2.5000, 0.0000, 50.0000, 3.2592, 0.3350, 1.0000,
	60.2574, -34.0099, 36.2677, 60.4626, -34.1751, 39.4387, 1.2644,
	63.0109, -31.0961, -5.8663, 62.8187, -29.7946, -4.0864, 1.2630,
	61.2901, 3.7196, -5.3901, 61.4292, 2.2480, -4.9620, 1.8731,
	35.0831, -44.1164, 3.7933, 35.0232, -40.0716, 1.5901, 1.8645,
	22.7233, 20.0904, -46.6940, 23.0331, 14.9730, -42.5619, 2.0373,
	36.4612, 47.8580, 18.3852, 36.2715, 50.5065, 21.2231, 1.4146,
	90.8027, -2.0831, 1.4410, 91.1528, -1.6435, 0.0447, 1.4441,
	90.9257, -0.5406, -0.9208, 88.6381, -0.8985, -0.7239, 1.5381,
	6.7747, -0.2908, -2.4247, 5.8714, -0.0985, -2.2286, 0.6377,
	2.0776, 0.0795, -1.1350, 0.9033, -0.0636, -0.5514, 0.9082
];
*/

/**
 * Test data taken from the paper "The CIEDE2000 Color-Difference Formula:
 * Implementation Notes, Supplementary Test Data, and Mathematical Observations"
 * by Gaurav Sharma, Wencheng Wu and Edul N. Dalal.
 */
export const data = [
	{
		Lab1     : {
			L : 50,
			a : 2.6772,
			b : -79.7751,
		},
		Lab2     : {
			L : 50,
			a : 0,
			b : -82.7485,
		},
		distance : 2.0425
	},
	{
		Lab1     : {
			L : 50,
			a : 3.1571,
			b : -77.2803,
		},
		Lab2     : {
			L : 50,
			a : 0,
			b : -82.7485,
		},
		distance : 2.8615
	},
	{
		Lab1     : {
			L : 50,
			a : 2.8361,
			b : -74.02,
		},
		Lab2     : {
			L : 50,
			a : 0,
			b : -82.7485,
		},
		distance : 3.4412
	},
	{
		Lab1     : {
			L : 50,
			a : -1.3802,
			b : -84.2814,
		},
		Lab2     : {
			L : 50,
			a : 0,
			b : -82.7485,
		},
		distance : 1
	},
	{
		Lab1     : {
			L : 50,
			a : -1.1848,
			b : -84.8006,
		},
		Lab2     : {
			L : 50,
			a : 0,
			b : -82.7485,
		},
		distance : 1
	},
	{
		Lab1     : {
			L : 50,
			a : -0.9009,
			b : -85.5211,
		},
		Lab2     : {
			L : 50,
			a : 0,
			b : -82.7485,
		},
		distance : 1
	},
	{
		Lab1     : {
			L : 50,
			a : 0,
			b : 0,
		},
		Lab2     : {
			L : 50,
			a : -1,
			b : 2,
		},
		distance : 2.3669
	},
	{
		Lab1     : {
			L : 50,
			a : -1,
			b : 2,
		},
		Lab2     : {
			L : 50,
			a : 0,
			b : 0,
		},
		distance : 2.3669
	},
	{
		Lab1     : {
			L : 50,
			a : 2.49,
			b : -0.001,
		},
		Lab2     : {
			L : 50,
			a : -2.49,
			b : 0.0009,
		},
		distance : 7.1792
	},
	{
		Lab1     : {
			L : 50,
			a : 2.49,
			b : -0.001,
		},
		Lab2     : {
			L : 50,
			a : -2.49,
			b : 0.001,
		},
		distance : 7.1792
	},
	{
		Lab1     : {
			L : 50,
			a : 2.49,
			b : -0.001,
		},
		Lab2     : {
			L : 50,
			a : -2.49,
			b : 0.0011,
		},
		distance : 7.2195
	},
	{
		Lab1     : {
			L : 50,
			a : 2.49,
			b : -0.001,
		},
		Lab2     : {
			L : 50,
			a : -2.49,
			b : 0.0012,
		},
		distance : 7.2195
	},
	{
		Lab1     : {
			L : 50,
			a : -0.001,
			b : 2.49,
		},
		Lab2     : {
			L : 50,
			a : 0.0009,
			b : -2.49,
		},
		distance : 4.8045
	},
	{
		Lab1     : {
			L : 50,
			a : -0.001,
			b : 2.49,
		},
		Lab2     : {
			L : 50,
			a : 0.001,
			b : -2.49,
		},
		distance : 4.8045
	},
	{
		Lab1     : {
			L : 50,
			a : -0.001,
			b : 2.49,
		},
		Lab2     : {
			L : 50,
			a : 0.0011,
			b : -2.49,
		},
		distance : 4.7461
	},
	{
		Lab1     : {
			L : 50,
			a : 2.5,
			b : 0,
		},
		Lab2     : {
			L : 50,
			a : 0,
			b : -2.5,
		},
		distance : 4.3065
	},
	{
		Lab1     : {
			L : 50,
			a : 2.5,
			b : 0,
		},
		Lab2     : {
			L : 73,
			a : 25,
			b : -18,
		},
		distance : 27.1492
	},
	{
		Lab1     : {
			L : 50,
			a : 2.5,
			b : 0,
		},
		Lab2     : {
			L : 61,
			a : -5,
			b : 29,
		},
		distance : 22.8977
	},
	{
		Lab1     : {
			L : 50,
			a : 2.5,
			b : 0,
		},
		Lab2     : {
			L : 56,
			a : -27,
			b : -3,
		},
		distance : 31.903
	},
	{
		Lab1     : {
			L : 50,
			a : 2.5,
			b : 0,
		},
		Lab2     : {
			L : 58,
			a : 24,
			b : 15,
		},
		distance : 19.4535
	},
	{
		Lab1     : {
			L : 50,
			a : 2.5,
			b : 0,
		},
		Lab2     : {
			L : 50,
			a : 3.1736,
			b : 0.5854,
		},
		distance : 1
	},
	{
		Lab1     : {
			L : 50,
			a : 2.5,
			b : 0,
		},
		Lab2     : {
			L : 50,
			a : 3.2972,
			b : 0,
		},
		distance : 1
	},
	{
		Lab1     : {
			L : 50,
			a : 2.5,
			b : 0,
		},
		Lab2     : {
			L : 50,
			a : 1.8634,
			b : 0.5757,
		},
		distance : 1
	},
	{
		Lab1     : {
			L : 50,
			a : 2.5,
			b : 0,
		},
		Lab2     : {
			L : 50,
			a : 3.2592,
			b : 0.335,
		},
		distance : 1
	},
	{
		Lab1     : {
			L : 60.2574,
			a : -34.0099,
			b : 36.2677,
		},
		Lab2     : {
			L : 60.4626,
			a : -34.1751,
			b : 39.4387,
		},
		distance : 1.2644
	},
	{
		Lab1     : {
			L : 63.0109,
			a : -31.0961,
			b : -5.8663,
		},
		Lab2     : {
			L : 62.8187,
			a : -29.7946,
			b : -4.0864,
		},
		distance : 1.263
	},
	{
		Lab1     : {
			L : 61.2901,
			a : 3.7196,
			b : -5.3901,
		},
		Lab2     : {
			L : 61.4292,
			a : 2.248,
			b : -4.962,
		},
		distance : 1.8731
	},
	{
		Lab1     : {
			L : 35.0831,
			a : -44.1164,
			b : 3.7933,
		},
		Lab2     : {
			L : 35.0232,
			a : -40.0716,
			b : 1.5901,
		},
		distance : 1.8645
	},
	{
		Lab1     : {
			L : 22.7233,
			a : 20.0904,
			b : -46.694,
		},
		Lab2     : {
			L : 23.0331,
			a : 14.973,
			b : -42.5619,
		},
		distance : 2.0373
	},
	{
		Lab1     : {
			L : 36.4612,
			a : 47.858,
			b : 18.3852,
		},
		Lab2     : {
			L : 36.2715,
			a : 50.5065,
			b : 21.2231,
		},
		distance : 1.4146
	},
	{
		Lab1     : {
			L : 90.8027,
			a : -2.0831,
			b : 1.441,
		},
		Lab2     : {
			L : 91.1528,
			a : -1.6435,
			b : 0.0447,
		},
		distance : 1.4441
	},
	{
		Lab1     : {
			L : 90.9257,
			a : -0.5406,
			b : -0.9208,
		},
		Lab2     : {
			L : 88.6381,
			a : -0.8985,
			b : -0.7239,
		},
		distance : 1.5381
	},
	{
		Lab1     : {
			L : 6.7747,
			a : -0.2908,
			b : -2.4247,
		},
		Lab2     : {
			L : 5.8714,
			a : -0.0985,
			b : -2.2286,
		},
		distance : 0.6377
	},
	{
		Lab1     : {
			L : 2.0776,
			a : 0.0795,
			b : -1.135,
		},
		Lab2     : {
			L : 0.9033,
			a : -0.0636,
			b : -0.5514,
		},
		distance : 0.9082
	}
];

