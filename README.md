
# My Personal Portfolio 🚀

Welcome to my personal portfolio! This repository contains my professional website, where I present my background, work experience, education, technical skills, selected projects, and contact information. The site is designed to offer a clear overview of my profile and is published with **GitHub Pages**.

🔗 **Live website:** [https://pedromc11.github.io/](https://pedromc11.github.io/)  
💼 **LinkedIn:** [Pedro Mena Castellanos](https://es.linkedin.com/in/pedro-mena-castellanos-795063243)  
💻 **GitHub:** [pedromc11](https://github.com/pedromc11)

---

## About This Portfolio ✨

This project is a lightweight, responsive, bilingual personal portfolio. The main page is available in Spanish, and an English version is provided in the `/en` directory.

The website is organised into the following sections:

- **About Me:** Professional introduction and areas of interest.
- **Experience & Education:** Professional experience and academic background.
- **Skills & Technologies:** Programming languages, development tools, databases, QA/testing technologies, and professional competencies.
- **Projects:** Selected software development and IoT projects, with links to their repositories where available.
- **Certifications:** Professional training and certifications listed on the website.
- **Contact:** Email and professional profile links.

---

## Technologies & Tools Used 🛠️

The website is built with standard front-end web technologies and does not require a framework, package manager, or build process.

- **HTML5:** Semantic page structure, content, navigation, and metadata.
- **CSS3:** Visual design, layout, responsive breakpoints, light/dark themes, transitions, and accessibility-focused states.
- **JavaScript (ES6+):** Client-side interactions, including the mobile navigation menu and theme switcher. The script uses browser APIs such as `localStorage` to remember the selected theme when available.
- **Google Fonts:** Manrope and DM Mono typography, loaded through Google Fonts.
- **Schema.org / JSON-LD:** Structured `Person` data to help search engines understand the portfolio owner and related professional profiles.
- **GitHub Pages:** Static website hosting and deployment directly from this repository.

No external JavaScript framework or CSS library is required. Icons and decorative symbols are rendered using text characters and emoji; Font Awesome is not a project dependency.

---

## Project Structure 📁

```text
.
├── index.html          # Spanish home page and main portfolio content
├── en/
│   └── index.html      # English version of the portfolio
├── css/
│   └── style.css       # Global styles, responsive layout, and themes
├── js/
│   └── site.js         # Navigation menu and light/dark theme interactions
├── images/
│   ├── profile.jpg     # Profile photograph
│   ├── name.jpg        # Site image / icon asset
│   ├── cajarural.jpg   # Caja Rural image asset
│   ├── uclm.png        # UCLM image asset
│   ├── zennio.png      # Zennio image asset
│   └── ...             # Additional image assets
├── robots.txt          # Search-engine crawling instructions
├── sitemap.xml         # Sitemap for the public website
└── README.md           # Project documentation
```

---

## Main Features 📱

- **Responsive design:** Layout adapts to mobile phones, tablets, laptops, and desktop screens.
- **Bilingual content:** Spanish home page and English version, with language alternate links.
- **Mobile navigation:** Collapsible navigation menu on smaller screens.
- **Light and dark themes:** Theme switcher with the selected preference saved in the browser when storage is available.
- **Accessible interactions:** Semantic HTML, descriptive image alternative text, keyboard-visible focus states, a skip-to-content link, and reduced-motion support.
- **Optimised assets and loading:** Local CSS, JavaScript, and image assets; the main profile image is prioritised for loading.

---

## SEO & Sharing 🔎

The project includes a set of technical SEO and social-sharing elements:

- Page titles, descriptions, author information, and indexing directives.
- Canonical URL declarations.
- `hreflang` alternate links for Spanish and English, plus an `x-default` declaration.
- Open Graph metadata for link previews and a Twitter summary card.
- Schema.org `Person` structured data in JSON-LD format.
- `robots.txt` and an XML sitemap.
- Semantic HTML structure, descriptive headings, and image alternative text.

These elements provide search engines and social platforms with useful information about the site. They do not guarantee indexing, rich results, or a particular search ranking.

---

## Setup and Local Usage 🚀

You can view the portfolio locally without installing dependencies or running a build command.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/pedromc11/pedromc11.github.io.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd pedromc11.github.io
   ```

3. **Open the website:** Open `index.html` in a web browser. To view the English version, open `en/index.html`.

For a more representative local test, run the files through a simple local web server so root-relative asset paths (such as `/css/style.css` and `/images/profile.jpg`) resolve as they do on the hosted site.

---

## Deployment with GitHub Pages 🌐

This repository is configured as a GitHub Pages user site. To publish updates:

1. Push or commit the website files to the `main` branch of `pedromc11/pedromc11.github.io`.
2. In the repository, open **Settings → Pages**.
3. Check that GitHub Pages is configured to deploy from the `main` branch and the repository root (`/`).
4. Wait for the deployment to finish, then visit [https://pedromc11.github.io/](https://pedromc11.github.io/).

When changing the domain or deployment location, remember to update the canonical URLs, alternate-language URLs, Open Graph URLs, structured data, and `sitemap.xml` so they point to the correct public address.

---

## Customisation ✏️

- **Portfolio text and sections:** Edit `index.html` and `en/index.html`.
- **Design and responsive behaviour:** Edit `css/style.css`.
- **Interactive behaviour:** Edit `js/site.js`.
- **Photographs and logos:** Replace or add files in `images/`, keeping the paths used by the HTML in sync.
- **Search metadata:** Review the `<head>` elements in both HTML files, as well as `robots.txt` and `sitemap.xml`, whenever the public content or site URL changes.

Keep the Spanish and English versions aligned when updating experience, projects, skills, or contact details.

---

## Contact Me 📧

For professional opportunities, collaborations, or questions, feel free to get in touch:

- **Email:** [pedromceuropa@gmail.com](mailto:pedromceuropa@gmail.com)
- **LinkedIn:** [Pedro Mena Castellanos](https://es.linkedin.com/in/pedro-mena-castellanos-795063243)
- **GitHub:** [pedromc11](https://github.com/pedromc11)

---

Thank you for visiting my portfolio!
