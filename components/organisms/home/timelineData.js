const timelineData = {
  importantDates: [
    // date hari penting
    new Date("2025-08-01"),
    new Date("2025-08-14"),
    new Date("2025-08-25"),
    new Date("2025-08-31"),
    new Date("2025-09-07"),
    new Date("2025-09-08"),
    new Date("2025-09-27"),
  ],
  modalContent: {
    "2025-08-01": {
      date: new Date("2025-08-01").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Pendaftaran",
      description: "Pendaftaran gelombang 1",
    },
    "2025-08-14": {
      date: new Date("2025-08-14").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Pendafataran",
      description: "Pendaftaran gelombang 2",
    },
    "2025-08-25": {
      date: new Date("2025-08-25").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Pendaftaran",
      description: "Extra Time Pendaftaran",
    },
    "2025-08-31": {
      date: new Date("2025-08-31").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Awal pengumpulan",
      description: "Teknikal meeting & Awal pengumpulan submission",
    },
    "2025-09-07": {
      date: new Date("2025-09-07").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Akhir pengumpulan",
      description: "Tahap akhir pengumpulan submission",
    },
    "2025-09-08": {
      date: new Date("2025-09-08").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Penjurian",
      description: "",
    },
    "2025-09-27": {
      date: new Date("2025-09-27").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Seminar & Awarding",
      description: "Pengumuman pemenang",
    },
  },
};

// start day & finish

export const startDate = new Date("2025-07-25");
export const endDate = new Date("2025-10-05");

export default timelineData;
