const config = {
  // ==== HOME PAGE ====
  homePage: {
    // Number of sentences displayed per slide
    sentencePerSlide: 2, // Adjust this to control how many sentences are shown per slide
    slides: [
      [
        "hiii bub",
        "ada yang tambah tua hari inii",
        // If you set `sentencePerSlide` to 2, the next text won't be visible
        "happy birthdayyy!",
      ],
      [
        "karena ada yang rewel gamau dikasih kado,",
        "kita rayain pake cara yang ribet",
      ],
      ["P.S ngebuat ini lebih SUSAH drpd ngasih kado, asli", "so enjoy!"],
      // You can add more slides or delete slides as needed
    ],
  },

  // ==== QUIZ PAGE ====
  quizPage: {
    // Color of the progress bar
    progressBarColor: "#4B5320",
    // Text labels for the quiz
    text: {
      questionLabel: "Question",
      ofLabel: "out of",
      scoreLabel: "Score:",
      yourScoreLabel: "Your score:",
      nextButtonText: "Go to next page",
    },
    // Quiz questions and answers
    questions: [
      {
        id: 1, // Unique ID for the question
        title: "Bangun tidur ku terus...?",
        correctAnswer: "duck", // Correct answer value (must match one of the options' `value`)
        options: [
          { value: "duck", label: "Tidur lagi" },
          { value: "dumplings", label: "C*li" },
          { value: "indomie", label: "Masak" },
          { value: "bakso", label: "Udud" },
        ],
      },
      {
        id: 2,
        title: "128√e980",
        description: "gabole nyontek google",
        correctAnswer: "i love u",
        options: [
          { value: "4", label: "4" },
          { value: "1382", label: "1382" },
          { value: "i love u", label: "i love u" },
          { value: "gatau", label: "gatau" },
        ],
      },
      {
        id: 3,
        title: "terakhir, kapan ulang tahun chef juna - 1 hari?",
        description: "kykny lu dah tau sih ini",
        correctAnswer: "jul-19",
        options: [
          { value: "jul-19", label: "July 19" },
          { value: "jul-20", label: "July 20" },
          { value: "aug-19", label: "August 19" },
          { value: "aug-20", label: "August 20" },
        ],
      },
      // You can add more questions here
    ],
    // GIF ANIMATION CONFIGURATION
    gifConfig: [
      {
        check: (score) => score >= 3, // If score is 3 or above, this GIF will be shown
        heading: "asik!!!!!!",
        gifName: "gif4.gif", // Name of the GIF file in `src/assets/gifs`
        style: "w-44", // Tailwind CSS class for styling the GIF
      },
      {
        check: (score) => score === 2, // If score is exactly 2, this GIF will be shown
        heading: "okelahh",
        gifName: "gif3.gif",
        style: "w-44",
      },
      {
        check: (score) => score === 1, // If score is exactly 1, this GIF will be shown
        heading: "cemen",
        gifName: "gif2.gif",
        style: "w-44",
      },
      {
        check: () => true, // Default case (if none of the above conditions are met)
        heading: "nathan bauu",
        gifName: "gif1.gif",
        style: "w-44",
      },
    ],
  },

  // ==== DRAWING PAGE ====
  drawingPage: {
    // Messages displayed on the drawing page
    messages: [
      "coba gambar 1 wish kamu tahun ini",
      "kali ini gambar kamu 5 thn lagi",
      "kalo punya 1M mau dipake apa?",
    ],
    // Colors available for drawing
    COLORS: ["#000000", "#FF7043", "#66BB6A", "#42A5F5", "#FFEE58"],
    // Text for the submit button
    text: {
      submitText: "submit",
      finalText: "nice babe",
      loading: "sending...",
    },
  },

  // ==== LETTER PAGE ====
  letterPage: {
    // Placeholder text for the letter input
    placeholder: {
      default: `sekarang coba tulis surat ke dirimu sendiri 1 tahun kedepan.`,
      emptyInput: "wish kamu, goals, vision, etc",
      success: "bubbbbb makasi suratnyaa",
      error: "failed to send the message. try it again!",
    },
    // Button text
    buttons: {
      sendMessage: "Send Message",
      clearText: "Clear",
      loading: "Sending...",
    },
    // API configuration for sending emails
    api: {
      baseURL: `https://4nathan-production.up.railway.app/`,
      // Configure this based on your development port (check server/app.js or .env.PORT) and update this to your live backend URL after deployment

      sendEmailEndpoint: "/send-email", // Endpoint for sending emails
    },
  },

  // ==== CLOSING PAGE ====
  closingPage: {
    // Final message displayed on the closing page
    message:
      "danke udah ikut 5 menit survey yang dibuat 5 hari 5 malam ini, sekarang cek gmail-mu ya",
    // GIF displayed on the closing page
    gifName: "closing.gif", // Name of the GIF file in `src/assets/gifs`
    style: "w-44", // Tailwind CSS class for styling the GIF
  },
};

export default config;
