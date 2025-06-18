# INSTRUCTIONS.md

## 🧠 Project Overview

**ColorGrade.io** is an AI-native photo/video color grading platform. It lets users describe a visual mood (e.g., “make this feel like a calm scene from Euphoria”) and receive instant cinematic LUTs and edits. Think **color.io** + **Cursor** + **CapCut** + **ChatGPT** — all merged into one seamless editor.

---

## 💡 Core Value Proposition

> Natural language prompts → Cinematic results  
> AI-enhanced grading for videos & photos  
> Instant preview, comparison, customization, and export  

---

## 🧰 Tech Stack

- **Frontend**: Next.js / React  
- **Backend**: Node.js or Python API (OpenAI/Claude integration)  
- **Color Engine**: Custom image/video LUT transformer  
- **Auth**: Supabase  
- **Payments**: Stripe (usage-based & tiered subs)  
- **Hosting**: Vercel / Railway / Cloudflare  
- **AI Models**: GPT-4 / Claude for prompt parsing  
- **Image Engine**: OpenCV / PIL / ffmpeg for processing  
- **UI Reference**: Cursor + CapCut + color.io  
- **Comparison & Preview Engine**: Swipe or side-by-side view  

---

## 🧭 Dashboard Layout

### 1. **Hero Toolbar (Top)**
- Brand: ColorGrade.io
- Quick actions: Upload → Prompt → Generate
- Search: Find previous projects
- Account: Plan, Billing, Logout

---

### 2. **Editor Workspace (Center)**

#### Left Panel – Original / Upload
- Upload photo or video (up to 4K)
- Auto-detect faces (for TikTok-style "tap face to edit" overlays)
- Drag & drop files or paste frame

#### Middle Panel – AI Prompt Console
- Prompt input (e.g., "like Blade Runner, neon noir")
- Option to use reference image or LUT
- Model: Claude or GPT-4 powered parsing
- Render button triggers output

#### Right Panel – Result / Adjust
- Color-graded preview
- Swipe vs. original or toggle view
- Adjust sliders: intensity, contrast, hue, etc.
- Download .cube (LUT) or final media

---

### 3. **Prompt vs. Result Mode**
- Inspired by TikTok trend ("The prompt vs the result")
- Overlay text on video/photo
- Tap to reveal “Prompt: X” and “Result:”
- Optional sound sync or voiceover
- Share/export for socials

---

## 🔥 Feature Set

### 🌈 Color Grading
- Natural language → Cinematic grade
- Prompt with tone, mood, film reference, time of day
- Export LUT (.cube), PNG/JPG, or video (MP4)
- Mobile support coming (PWA-ready)

### 📸 AI Portrait Remix
- Take uploaded portrait
- Click face → Prompt → Rework into surreal or abstract art
- Inspired by new TikTok trend using ChatGPT + image models
- Optional: fine-tune, re-roll, customize

### 🎞️ Video Support
- Upload short video (<= 60 sec for free users)
- Prompt-based color grading
- LUT applied across frames
- Optional: auto-split by scenes

### 🛠️ Prompt Tuner
- Recent prompt history
- Tone templates: cinematic, nostalgic, high-contrast, horror, etc.
- Reference image → extract LUT from image

---

## 💸 Pricing Model

- **Free Tier**
  - 10 prompts/mo
  - Max 1080p, watermark

- **Pro** – $20/mo
  - 250 prompts/mo
  - 4K, no watermark
  - Access to Prompt vs. Result

- **Elite** – $49/mo
  - 1000 prompts/mo
  - Bulk exports, batch grading
  - Commercial rights

- **Usage Based Option**
  - $0.10/prompt (overage)
  - Stripe Metered Billing fallback

---

## 🧪 Feature Ideas (Future)

- Real-time grading for webcam feed
- TikTok plug-in for native editing
- Public prompt feed (like Midjourney explore)
- Collaborator/feedback mode
- LUT Marketplace

---

## 🎨 Style & Aesthetic

- Inspired by Notion, Potion, and Cursor
- Dark mode default: slate blacks, purple + green accents
- Font: Inter or Satoshi (clean, premium)
- Smooth animations: fade, slide, scale
- Mobile responsive

---

## ✨ Reference Tools

| Tool         | Purpose                          |
|--------------|----------------------------------|
| Color.io     | Grading UX, tone control         |
| CapCut       | Video editing & social trends    |
| Cursor       | Prompt-based AI dev experience   |
| ChatGPT      | Prompt parsing & interface style |
| Kling.ai     | Portrait remixes                 |

---

## 🔄 Flow Example

> Upload frame →  
> “Make this look like a rainy Tokyo night scene in a thriller” →  
> Get LUT + graded preview →  
> Adjust →  
> Download or share

---

## 🛠 Developer To-Dos

- [ ] Build UI layout with Tailwind (cursor + color.io inspired)
- [ ] Connect OpenAI/Claude prompt parsing
- [ ] Build LUT generator (or wrapper for color grading model)
- [ ] Add swipe/toggle comparison view
- [ ] Stripe usage tracking
- [ ] Upload system with face detection (portrait remixer)
- [ ] Export .cube files
- [ ] Social sharing overlay system

---

## 📦 File Structure Suggestion

