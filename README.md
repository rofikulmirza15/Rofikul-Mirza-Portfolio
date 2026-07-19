# Rofikul Mirza — Portfolio Site

A dark-themed UI/UX designer portfolio built with React + Vite + Tailwind CSS.

## Run it locally

1. Unzip the project and open a terminal in the folder.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the dev server:
   ```
   npm run dev
   ```
4. Open the printed local URL (usually `http://localhost:5173`) in your browser.

## Project structure

```
portfolio-site/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx          # React entry point
    ├── index.css         # Tailwind + global styles/animations
    ├── App.jsx           # Composes all sections
    └── components/
        ├── Navbar.jsx        # Top nav, logo, theme toggle, CTA
        ├── SocialSidebar.jsx # Left vertical social rail
        ├── Hero.jsx          # Headline, stats, photo, floating cards
        └── Projects.jsx      # Featured projects grid
```

## What's next (sections still to build)

The reference design has more sections below the fold: About, Services,
Skills, Experience, Blog, Contact, and Footer. Follow the same pattern —
one component per section, added into `App.jsx` in order — and I can
build any of these next if you'd like.

## Adding your own photo

1. Put your image file in `src/assets/` (e.g. `src/assets/my-photo.jpg`).
2. In `src/components/Hero.jsx`, replace:
   ```jsx
   src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=600&h=750&fit=crop"
   ```
   with an import at the top of the file:
   ```jsx
   import myPhoto from '../assets/my-photo.jpg'
   ```
   and then use `src={myPhoto}` on the `<img>` tag.

The photo already has two effects applied (see `.photo-frame` in `src/index.css`):
- **Fade + slide in** when the page loads.
- **Tilt toward your cursor** on hover (mouse-move handler in `Hero.jsx`).

Both respect `prefers-reduced-motion` for accessibility.

## Voiceover

The "Hear my intro" button under the photo uses the browser's built-in
**Web Speech API** to read your bio aloud — no audio file, no recording,
no extra dependencies. The script lives in `src/voiceoverScript.js`; edit
the text there any time and the spoken version updates automatically.

It **auto-plays ~0.8s after the page loads**, using a slightly slower
rate, lower pitch, and reduced volume for a softer tone (tweak `rate` /
`pitch` / `volume` in `VoiceIntro.jsx` to taste).

**Browser autoplay note**: some browsers (notably Chrome) block any
audio — including speech synthesis — from playing automatically until
the visitor has clicked/interacted with the page at least once. If
auto-play doesn't fire the very first time you load it, that's why;
clicking the "Hear my intro" button always works regardless.

Browser voice quality varies (Chrome/Edge tend to sound best). If you'd
rather use a real recorded voice later:

1. Record yourself reading `VOICEOVER_SCRIPT.md`, save as `src/assets/voiceover.mp3`.
2. In `src/components/VoiceIntro.jsx`, replace the `SpeechSynthesisUtterance`
   logic with a simple `<audio>` element pointing at the file, e.g.:
   ```jsx
   import voiceoverFile from '../assets/voiceover.mp3'
   // <audio ref={audioRef} src={voiceoverFile} />, then audioRef.current.play()
   ```

## Customizing

- **Colors**: edit `tailwind.config.js` → `theme.extend.colors` (`red.accent`, `blue.accent`, `bg`, `panel`, `border`).
- **Copy**: edit the text directly inside each component in `src/components/`.
- **Your photo**: replace the `src` URL in `Hero.jsx` with your own image path (e.g. put a file in `src/assets/` and import it).
- **Projects**: edit the `PROJECTS` array at the top of `Projects.jsx` — add/remove objects to add/remove cards.
