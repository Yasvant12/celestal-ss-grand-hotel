# Hotel Celestial Casa — Deployment & Operations Guide

A step-by-step technical deployment guide for deploying the Celestal SS Grand Hotel website to Vercel with GitHub version control and Web3Forms enquiry delivery.

---

## 1. Prerequisites
- **Node.js**: Version 20.x or 22.x LTS installed.
- **Package Manager**: `npm` (v10+).
- **Git**: Installed and configured with your GitHub account.
- **Vercel Account**: Linked with GitHub.
- **Web3Forms Account**: Create an access key at [web3forms.com](https://web3forms.com) and configure the hotel's recipient email address for that key.

---

## 2. Local Environment Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-org>/hotel-celestial-casa.git
   cd hotel-celestial-casa
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a local configuration file `.env.local` by copying `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Set the Web3Forms access key in `.env.local`:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
   ```
   The access key is used by the browser because Web3Forms is a frontend integration. Configure the destination hotel email in the Web3Forms account; do not add a recipient address to the client payload.

4. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Execute production build test**:
   ```bash
   npm run build
   ```

---

## 3. GitHub Repository Configuration

1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Phase 1 architecture and project setup"
   ```

2. Link remote repository:
   ```bash
   git remote add origin https://github.com/<your-account>/hotel-celestial-casa.git
   git branch -M main
   git push -u origin main
   ```

---

## 4. Vercel Deployment

1. **Import Project**:
   - Go to [vercel.com](https://vercel.com) and click **"Add New..."** -> **"Project"**.
   - Select your GitHub repository (`hotel-celestial-casa`).
2. **Framework Preset**: Next.js (automatically detected).
3. **Environment Variables**:
   Add the following production environment variables under **Settings > Environment Variables**:
   - `NEXT_PUBLIC_SITE_URL`: `https://celestialcasa.in`
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`: The access key from the Web3Forms account configured with the hotel's recipient email.
4. **Deploy**:
   Click **Deploy**. Vercel will build the project using Next.js Turbopack/Webpack and publish it to the global edge network.

---

## 5. Domain & DNS Configuration

To bind `celestialcasa.in` to Vercel:
1. In Vercel Project Settings, navigate to **Domains**.
2. Enter `celestialcasa.in` and `www.celestialcasa.in`.
3. Update your DNS records at your domain registrar (e.g. GoDaddy, Namecheap, Cloudflare):

| Type | Name | Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | Auto / 3600 |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Auto / 3600 |

SSL certificates are automatically issued and renewed by Vercel via Let's Encrypt.

---

## 6. Email Deliverability (SPF & DKIM for Resend)
To ensure enquiry notifications never land in spam:
1. In the Resend Dashboard, add the domain `celestialcasa.in`.
2. Add the generated DNS records:
   - **TXT (SPF)**: `v=spf1 include:amazonses.com ~all`
   - **TXT (DKIM)**: Provided by Resend
   - **TXT (DMARC)**: `v=DMARC1; p=none;`
3. Verify DNS status in the Resend dashboard.
