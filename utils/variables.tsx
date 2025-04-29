export const carouselSettings = {
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  speed: 2000,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  loop: true,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1760,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1460,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

export const MySliderSettings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  arrows: true,
  centerMode: true,
  centerPadding: "400px",

  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,

        centerPadding: "400px",
      },
    },
    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,

        centerPadding: "350px",
      },
    },
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,

        centerPadding: "300px",
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,

        centerPadding: "250px",
      },
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,

        centerPadding: "200px",
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,

        centerPadding: "170px",
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,

        centerPadding: "230px",
      },
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,

        centerPadding: "200px",
      },
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,

        centerPadding: "170px",
      },
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,

        centerPadding: "130px",
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,

        centerPadding: "170px",
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
        centerMode: false,
        centerPadding: "0",
      },
    },
  ],
};

export const TestimonialSettings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 2000,
  arrows: true,
  autoplay: false,
  centerMode: true,
  centerPadding: "10px",
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1760,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1460,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// utils/variables.js

// Optional: A helper function to create URL-friendly slugs from text
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

export const service = [
  {
    text: "Web Page Creation",
    href: `/services/${slugify("Web Page Creation")}`,
  },
  { text: "Custom Software", href: `/services/${slugify("Custom Software")}` },
  { text: "Automization", href: `/services/${slugify("Automization")}` },
  {
    text: "Database Management",
    href: `/services/${slugify("Database Management")}`,
  },
];

export const company = [
  { text: "About", href: `/company/${slugify("About")}` },
  { text: "Meet the Team", href: `/company/${slugify("Meet the Team")}` },
  { text: "Accounts Review", href: `/company/${slugify("Accounts Review")}` },
];

export const helping = [
  // Keeping the href as you had it for Contact
  { text: "Contact", href: "/contact-me" },
];

// export const legal = [
//   { text: "Accessibility", href: `/legal/${slugify("Accessibility")}` },
//   { text: "Returns Policy", href: `/legal/${slugify("Returns Policy")}` },
//   { text: "Refund Policy", href: `/legal/${slugify("Refund Policy")}` },
//   { text: "Hiring Statistics", href: `/legal/${slugify("Hiring Statistics")}` },
// ];
