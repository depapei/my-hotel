export const fnConvertToRupiah = (value: number) => {
  const rupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Mengatur desimal (0 berarti tidak ada desimal)
    maximumFractionDigits: 0,
  }).format(value);

  return rupiah;
};

export default fnConvertToRupiah;
