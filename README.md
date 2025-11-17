# ISPM Dashboard - Identity Security & Governance

A comprehensive Identity Security Posture Management dashboard with 27 production-ready widgets across 8 categories.

## Features

- 🔐 User Access Review (UAR) - Campaign monitoring & reviewer analytics
- ⚡ Birthright Provisioning - Automated provisioning & SoD detection
- 🔄 Reconciliation & Hygiene - Orphan detection & access cleanup
- 🔌 Integrations - Connector health & API monitoring
- 🛡️ Identity Hygiene - MFA coverage & shadow accounts
- ⚠️ Risk & Threat Intelligence - Anomaly detection & breach monitoring
- 📊 Operational Health - ROI tracking & job execution
- 📦 Application Insights - Risk analysis & entitlement usage

## Quick Start

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Deploy to Vercel

#### Option 1: Using Vercel CLI (Fastest)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Follow the prompts. Your dashboard will be live in ~2 minutes!

#### Option 2: Using Vercel Dashboard

1. Push this code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your dashboard is live.

#### Option 3: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18 + Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (optimized)

## Widget Categories

1. **User Access Review** (4 widgets)
   - UAR Completion Status
   - High-Risk Access Pending Review
   - Reviewer Performance Score
   - Approvals vs Rejections Trend

2. **Birthright Provisioning** (4 widgets)
   - Birthright Access Accuracy
   - Joiner Provisioning SLA
   - SoD Conflicts Detection
   - Policy Evaluation Failures

3. **Reconciliation & Hygiene** (5 widgets)
   - Orphan Accounts by Source
   - Privileged Orphan Accounts
   - Entitlement Drift
   - Dormant Accounts
   - Reconciliation Failure Trend

4. **Integrations & Connectors** (3 widgets)
   - Connector Health Status
   - Provisioning API Errors
   - Application Onboarding Tracker

5. **Identity Hygiene** (4 widgets)
   - Overall Hygiene Score
   - MFA Coverage
   - Shadow Accounts
   - Entitlement Rationalization

6. **Risk & Threat Intelligence** (3 widgets)
   - Identity Risk Scores
   - Anomalous Location Logins
   - Compromised Password Detection

7. **Operational Health** (2 widgets)
   - Automation ROI
   - Job Execution Failures

8. **Application Insights** (2 widgets)
   - High-Risk Application Summary
   - Entitlements Assigned vs Used

## Configuration

All sample data is currently hardcoded in the component. To connect to your backend:

1. Replace the data objects in `app/page.tsx` with API calls
2. Add environment variables in `.env.local`
3. Implement data fetching with `fetch` or your preferred library

## License

MIT
# ispm-widget-library
