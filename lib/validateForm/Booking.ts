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
  startDate: yup
    .string()
    .required("Tanggal check-in wajib diisi")
    .test(
      "not-before-today",
      "Tanggal check-in tidak boleh kurang dari hari ini",
      function (value) {
        if (!value) return true;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const start = new Date(value);
        start.setHours(0, 0, 0, 0);

        return start >= today;
      },
    )
    .test(
      "not-more-than-1-year",
      "Tanggal check-in tidak boleh lebih dari 1 tahun dari hari ini",
      function (value) {
        if (!value) return true;

        const maxDate = new Date();
        maxDate.setFullYear(maxDate.getFullYear() + 1);
        maxDate.setHours(0, 0, 0, 0);

        const start = new Date(value);
        start.setHours(0, 0, 0, 0);

        return start <= maxDate;
      },
    ),

  endDate: yup
    .string()
    .required("Tanggal check-out wajib diisi")
    .test(
      "not-before-start",
      "Tanggal check-out tidak boleh sebelum tanggal check-in",
      function (value) {
        const { startDate } = this.parent;
        if (startDate && value) {
          const start = new Date(startDate);
          start.setHours(0, 0, 0, 0);

          const end = new Date(value);
          end.setHours(0, 0, 0, 0);

          return end >= start;
        }
        return true;
      },
    )
    .test(
      "not-same-day",
      "Check-out harus minimal 1 hari setelah check-in",
      function (value) {
        const { startDate } = this.parent;
        if (startDate && value) {
          const start = new Date(startDate);
          start.setHours(0, 0, 0, 0);

          const end = new Date(value);
          end.setHours(0, 0, 0, 0);

          return end > start;
        }
        return true;
      },
    ),
});

export default bookingValidate;
