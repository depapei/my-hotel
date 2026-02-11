import * as yup from "yup";

const bookingValidate = yup.object({
  guestName: yup
    .string()
    .matches(
      /^[a-zA-Z\s.,'-]+$/,
      "Nama hanya boleh berisi huruf, spasi, dan tanda baca",
    )
    .min(3, "Nama minimal 3 huruf!")
    .max(50, "Nama maksimal 50 huruf!")
    .required("Nama panggilan wajib diisi"),
  roomName: yup.string().required("Nama Ruangan wajib diisi"),
  roomId: yup.string().required(),

  start: yup.string().required(),
  end: yup.string().required(),
  startDate: yup.string().required("Tanggal check-in wajib diisi"),
  endDate: yup
    .string()
    .required("Tanggal check-out wajib diisi")
    .test(
      "is-greater",
      "Tanggal selesai tidak boleh lebih awal dari tanggal mulai",
      function (value) {
        const { startDate } = this.parent;
        if (startDate && value) {
          const start = new Date(startDate);
          const end = new Date(value);
          return end >= start;
        }
        return true;
      },
    ),
});

export default bookingValidate;
