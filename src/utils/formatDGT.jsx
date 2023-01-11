export const formatDGT = (args) => {
	const formatCordinates = (string) => {
		return string.split(",");
	};
	const data = args.map((el) => {
		return {
			coordinates: formatCordinates(el.Coordinates),
			tanggal: el.Tanggal,
			jam: el.Jam,
			magnitude: el.Magnitude,
			dirasakan: el.Dirasakan,
			kedalaman: el.Kedalaman,
			wilayah: el.Wilayah,
		};
	});
	return data;
};
