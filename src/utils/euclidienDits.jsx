export const euclideanDist = (lat1, long1, lat2, long2) => {
	return Math.floor(
		Math.sqrt(Math.pow(lat1 - lat2, 2) + Math.pow(long1 - long2, 2)) * 111.319
	);
};
