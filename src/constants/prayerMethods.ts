export const PRAYER_METHODS = {
	1: "University of Islamic Sciences, Karachi",
	2: "Islamic Society of North America",
	3: "Muslim World League",
	4: "Umm Al-Qura University, Makkah",
	5: "Egyptian General Authority of Survey",
	7: "Institute of Geophysics, Tehran",
	8: "Gulf Region",
	9: "Kuwait",
	10: "Qatar",
	11: "MUIS, Singapore",
	12: "UOIF, France",
	13: "Diyanet, Turkey",
	14: "Russia",
	15: "Moonsighting Committee Worldwide",
	16: "Dubai (experimental)",
	17: "JAKIM, Malaysia",
	18: "Tunisia",
	19: "Algeria",
	20: "KEMENAG, Indonesia",
	21: "Morocco",
	22: "Lisbon, Portugal",
	23: "Jordan",
} as const;

export type MethodKey = keyof typeof PRAYER_METHODS;
export type MethodName = (typeof PRAYER_METHODS)[MethodKey];
