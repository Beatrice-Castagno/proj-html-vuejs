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
    socialList: [
     {
       socialIcon: "fab fa-facebook-f"
     },
     {
       socialIcon: "fab fa-twitter"
     },
     {
       socialIcon: "fab fa-instagram"
     },
     {
        socialIcon: "fab fa-youtube"
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
    cardTreatments: [
      {
        image: "src/img/card-main/Layer-1-new-400x440.jpg",
        name: "Hydroterapy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        image: "src/img/card-main/Layer-2-new-400x440.jpg",
        name: "Massage",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        image: "src/img/card-main/Layer-3-new-400x440.jpg",
        name: "Aromatherapy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        image: "src/img/card-main/Layer-4-new-400x440.jpg",
        name: "Heat Therapy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        image: "src/img/card-main/Layer-5-new-400x440.jpg",
        name: "Skin Care",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        image: "src/img/card-main/Layer-6-new-400x440.jpg",
        name: "Spa Days",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        image: "src/img/card-main/layer8-new-400x440.jpg",
        name: "Beauty Treatments",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        image: "src/img/card-main/Layer-7-new-400x440.jpg",
        name: "Residential",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
    ],
    boxOffer: [
      {
        discount: "25%",
        typoOffert: "Special Offer",
      },
    ],
  },
  methods: {

  }
});
