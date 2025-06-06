const timelineData = {
  importantDates: [
    // date hari penting
    new Date("2025-08-19"),
    new Date("2025-09-01"),
    new Date("2025-09-08"),
    new Date("2025-09-15"),
    new Date("2025-09-30"),
    new Date("2025-10-01"),
    new Date("2025-10-05"),
  ],
  modalContent: {
    "2025-08-19": {
      date: new Date("2025-08-19").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Pendaftaran",
      description: "Pendaftaran gelombang 1",
    },
    "2025-09-01": {
      date: new Date("2025-09-01").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Pendafataran",
      description: "Pendaftaran gelombang 2",
    },
    "2025-09-08": {
      date: new Date("2025-09-08").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Webinar",
      description: "Pelaksanaan webinar",
    },
    "2025-09-15": {
      date: new Date("2025-09-15").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Awal pengumpulan",
      description: "Teknikal meeting & Awal pengumpulan submission",
    },
    "2025-09-30": {
      date: new Date("2025-09-30").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Akhir pengumpulan",
      description: "Tahap akhir pengumpulan submission",
    },
    "2025-10-01": {
      date: new Date("2025-10-01").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Penjurian",
      description: "",
    },
    "2025-10-05": {
      date: new Date("2025-10-05").toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      title: "Awarding",
      description: "Pengumuman pemenang",
    },
  },
};

// start day & finish

export const startDate = new Date("2025-08-05");
export const endDate = new Date("2025-10-05");

export default timelineData;
