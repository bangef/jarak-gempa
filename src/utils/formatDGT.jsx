export const formatDGT = (args) => {
	const formatCordinates = (string) => {
		return string.split(",");
	};

	const formatWaktu = (jam) => {
		return jam.split(" ")[0].split(":").join("");
	};

	const formatTanggal = (tanggal) => {
		const convertMonth = tanggal.split(" ")[1];
		const month = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"Mei",
			"Jun",
			"Jul",
			"Agu",
			"Sep",
			"Okt",
			"Nov",
			"Des",
		];
		const monthInNumber = month.findIndex((m) => m === convertMonth) + 1;
		return (
			tanggal.split(" ")[2] +
			(monthInNumber < 10 ? "0" + monthInNumber : monthInNumber) +
			tanggal.split(" ")[0]
		);
	};

	const formatImage = (tanggal, jam) => {
		const url = "https://data.bmkg.go.id/DataMKG/TEWS/";
		return url + tanggal + jam + ".mmi.jpg";
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
			image: formatImage(formatTanggal(el.Tanggal), formatWaktu(el.Jam)),
		};
	});
	return data;
};
