export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css", "~/assets/css/style.css"],
  modules: ["@nuxtjs/tailwindcss"],
  typescript: {
    strict: true,
  },
  tailwindcss: {
    configPath: "~/tailwind.config.js",
  },
  app: {
    head: {
      title: "QTIM Articles",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "QTIM Articles" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
