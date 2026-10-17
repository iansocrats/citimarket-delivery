# 💬 CitiMarket Delivery — Daily Slack Standup Setup Guide

> **Target Schedule**: Every Workday at 8:30 AM EAT (Nairobi Time)  
> **Channel**: `#citimarket-standup`  
> **Bot Script**: `npm run standup`

---

## 1. Create the Slack Channel & Incoming Webhook (60 Seconds)

1. Open your team Slack workspace and create a public or private channel named:
   `#citimarket-standup`
2. Go to **[api.slack.com/apps](https://api.slack.com/apps)** and click **"Create New App"** $\to$ *"From Scratch"*.
   - App Name: `CitiMarket Standup Bot`
   - Workspace: Select your Slack workspace.
3. In the left sidebar, click **"Incoming Webhooks"** and toggle the switch to **ON**.
4. Click **"Add New Webhook to Workspace"** at the bottom:
   - Select `#citimarket-standup` as the channel $\to$ Click **Authorize**.
5. Copy your generated Webhook URL (format: `https://hooks.slack.com/services/T.../B.../X...`).

---

## 2. Test Live Dispatch Locally

Set your webhook URL in your terminal environment and run the standup script:

```bash
# On Linux / macOS / Bash:
export SLACK_WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"
npm run standup

# On Windows PowerShell:
$env:SLACK_WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"
npm run standup
```

### Visual Preview of Slack Message:
The script automatically builds a **Slack Block Kit** card with:
* 🌸 **Header**: *"CitiMarket Delivery — Daily Standup"*
* 📍 **Context**: *"Nairobi Operations | 17 Oct 2026 • 22:57 EAT | 56-Day Commercial Pilot Launch"*
* 📈 **Visual Progress Bar**: `[▓░░░░░░░░░] 0%` (Automatically updates as tickets are closed in `ROADMAP_TRACKER.md`)
* 🚀 **Recent Staging Commits**: Highlights code shipped in the last 24 hours.
* 📌 **Critical Path Tasks**: Shows the next 3 tasks on deck from the active sprint.
* 🛡️ **Quality Gates**: Confirms Ledger $\Delta = 0.00$ and Daraja Reconciler status.
* 🔘 **Interactive Buttons**: *"View GitHub Roadmap ↗"* and *"Open Live Prototype ↗"*.

---

## 3. Automating 8:30 AM Nairobi Broadcasts

To make the standup post automatically every morning without anyone touching a terminal:

### Option A: Free Slack Workflow Builder (Zero Code)
1. In Slack, click your workspace name $\to$ **Tools** $\to$ **Workflow Builder**.
2. Click **"Create Workflow"** $\to$ choose **"Scheduled date and time"**.
3. Schedule for: **Every Monday–Friday at 8:30 AM (Time zone: Nairobi)**.
4. Add step: **"Send a message"** to `#citimarket-standup` prompting team members with the 3 daily questions:
   - *1. What did you ship to staging yesterday?*
   - *2. What exact CIT-XXX ticket will you close today?*
   - *3. Any blockers with Safaricom Daraja, City Market stalls, or NTSA?*

### Option B: GitHub Actions / Server Cron
If you host on a Linux VPS or cloud server, add this line to your crontab (`crontab -e`):
```bash
# Runs at 05:30 UTC = 08:30 AM Nairobi Time Monday through Friday
30 5 * * 1-5 cd /path/to/citimarket-delivery && SLACK_WEBHOOK_URL="https://hooks.slack.com/services/..." npm run standup >> /var/log/standup.log 2>&1
```

### Option C: Geekbot Integration (Turnkey Slack App)
Install **[Geekbot](https://geekbot.com)** from the Slack App Directory:
- Set delivery time to 8:30 AM Africa/Nairobi.
- Geekbot DMs each engineer, collects their responses, and broadcasts a unified thread into `#citimarket-standup`.
