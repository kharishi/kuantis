type En = {
  "homepage.title": string;
  "homepage.welcome": string;
  "homepage.time": string;
  "menu.home": string;
  "menu.services": string;
  "menu.contact-us": string;
  "menu.docs": string;
  "menu.blog": string;
  "menu.login": string;
  "login.title.sub": string;
  "login.form.button.login": string;
  "login.link.forgot-password": string;
  "hero.title": string;
  "hero.title2": string;
  "section.what-we-do": string;
  "hero.sub-title": string;
  "hero.button-action": string;
  "cta.button-action": string;
  "topbar.support": string;
}

type Id = En

type Translation = {
  en: En;
  id: Id;
}

const translation: Translation = {
  "id": {
    "homepage.title": "Kuantis.com",
    "homepage.welcome": "Hola, <strong>{{name}}</strong>",
    "homepage.time": "La hora actual es: {{time}}",
    "menu.home": "Beranda",
    "menu.services": "Layanan",
    "menu.contact-us": "Kontak",
    "menu.docs": "Dokumen",
    "menu.blog": "Blog",
    "menu.login": "Masuk",
    "login.title.sub": "Masukkan email dan password Anda untuk Masuk atau Daftar.",
    "login.form.button.login": "Masuk",
    "login.link.forgot-password": "Lupa Password?",
    "hero.title": "WEB . MOBILE . SOLUTION",
    "hero.title2": "Mitra Solusi Digital",
    "section.what-we-do": "WHAT WE DO",
    "hero.sub-title": "Kami siap membantu perjalanan perusahaan Anda untuk melakukan  Transformasi digital, melalui teknologi digital terkini dan teruji",
    // "hero.sub-title": "Pelajari Lebih Lanjut untuk mengetahui lebih detail mengapa kami berbeda dari yang lainnya.",
    "hero.button-action": "Lebih lanjut",
    "cta.button-action": "Hubungi Kami",
    "topbar.support": "Dukungan Cepat"
  },
  "en": {
    "homepage.title": "Hello, World!",
    "homepage.welcome": "Hi <strong>{{name}}</strong>, how are you?",
    "homepage.time": "The current time is: {{time}}",
    "menu.home": "Home",
    "menu.services": "Services",
    "menu.contact-us": "Contact",
    "menu.docs": "Docs",
    "menu.blog": "Blog",
    "menu.login": "Login",
    "login.title.sub": "Enter your account to sign In or sign Up.",
    "login.form.button.login": "Sign in",
    "login.link.forgot-password": "Forgot Password?",
    "hero.title": "WEB . MOBILE . SOLUTION",
    "hero.title2": "Digital Solutions Partner",
    "section.what-we-do": "APA YANG KAMI LAKUKAN",
    "hero.sub-title": "We are ready to help your company's journey to digital transformation, through the latest and proven digital technology",
    // "hero.sub-title": "Please \"Get Started\" to find out in more detail why our solutions are different from the others.",
    "hero.button-action": "How we help you ?",
    "cta.button-action": "Contact us",
    "topbar.support": "Support"
  }
};

export default translation
