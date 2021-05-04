const customRowBackColor = [
  {
    when: (row) => row.Appr === "A",
    style: {
      backgroundColor: "#D8F2F0",
    },
  },
  {
    when: (row) => row.Appr === "R",
    style: {
      backgroundColor: "#FBE0E2",
    },
  },
  {
    when: (row) => row.Appr === "C",
    style: {
      backgroundColor: "#FFF0DC",
    },
  },
];

export default customRowBackColor;
