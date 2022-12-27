const API_KEY = process.env.API_KEY

export default {
    business: {
      title: "Business",
      url: `/top-headlines?country=in&category=business&apiKey=${API_KEY}`,
    },
    entertainment: {
      title: "Entertainment",
      url: `/top-headlines?country=in&category=entertainment&apiKey=${API_KEY}`,
    },
    general: {
        title: "General",
        url: `/top-headlines?country=in&category=general&apiKey=${API_KEY}`,
      },
      health: {
        title: "Health",
        url: `/top-headlines?country=in&category=health&apiKey=${API_KEY}`,
      },
      science: {
        title: "Science",
        url: `/top-headlines?country=in&category=science&apiKey=${API_KEY}`,
      },
      sports: {
        title: "Sports",
        url: `/top-headlines?country=in&category=sports&apiKey=${API_KEY}`,
      },
      technology: {
        title: "Technology",
        url: `/top-headlines?country=in&category=technology&apiKey=${API_KEY}`,
      },
}