var app = new Vue ({
  el: "#app",
  data: {
    icons: [
      {
        pathIcon: "fas fa-sign-language",
        text: "Massages"
      },
      {
        pathIcon: "far fa-smile",
        text: "Therapy"
      },
      {
        pathIcon: "fas fa-heart",
        text: "Relaxing"
      },
      {
        pathIcon: "far fa-moon",
        text: "Meditation"
      },
      {
        pathIcon: "far fa-snowflake",
        text: "Natural Beauty"
      }
    ],
    showAddOption: false,
    chooseTreatments: [
      {
        name: "Oil Massage",
        show: false,
        optionAdd: {
          price: "$62",
          time: "For 2 Hours",
          description: "Lorem ipsum dolor sit amet ipsum dolor"
        }
      },
      {
        name: "Manicure",
        show: false,
        optionAdd: {
          price: "$55",
          time: "",
          description: "Lorem ipsum dolor sit amet ipsum dolor sit amet"
        }
      },
      {
        name: "Aroma Therapy",
        show: false,
        optionAdd: {
          price: "$75",
          time: "For 1 Hours",
          description: "Lorem ipsum dolor sit amet"
        }
      }
    ],
  },
  methods: {
    // showOption: function(element) {
    // 	element.show = !element.show;
    // },
  }
});
