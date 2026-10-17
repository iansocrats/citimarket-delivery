# 🤖 CitiMarket Delivery — Daily Asynchronous Standup & Escalation Protocol

> **Target Schedule**: 8:30 AM EAT (Nairobi Time) Every Monday–Friday  
> **Channels**: Slack (`#citimarket-standup`) / Discord / Telegram  
> **Bot Integration**: Geekbot / Standuply / CitiMarket CLI Bot (`npm run standup`)

---

## 1. The 3 Mandatory Daily Questions

Every team member posts their update asynchronously before 8:30 AM EAT:

### Question 1: What did you ship to staging in the last 24 hours?
* *Bad Answer*: "Worked on payments."
* *Good Answer*: "Completed CIT-103. Tested STK push with Safaricom Sandbox; PR #14 merged to staging with passing ledger invariants."

### Question 2: What exact ticket from ROADMAP_TRACKER.md will you close today?
* *Bad Answer*: "Working on the backend."
* *Good Answer*: "Closing CIT-104 (Daraja B2C Instant Driver Payout). Target: execute 10 automated disbursements."

### Question 3: Are there any blockers (Safaricom, City Market Stalls, Hardware, NTSA)?
* *Bad Answer*: "None."
* *Good Answer*: "BLOCKER: Africa's Talking Nairobi VoIP shortcode approval is pending regulatory paperwork. Need Ground Ops Lead to verify business permit."

---

## 2. Automated Daily Progress Reporter (`npm run standup`)

To automate reporting, the team uses `scripts/daily_standup_bot.js`:
- Calculates current Day ($X$ of 56) and active Phase.
- Analyzes git commits over the last 24 hours.
- Scans `.github/ROADMAP_TRACKER.md` for closed vs. pending tickets.
- Detects tasks exceeding day estimates and flags them as **AT RISK**.
- Formats a clean markdown payload ready to post to Slack/Discord/Telegram webhooks.

---

## 3. Blocker Escalation SLA Matrix

| Blocker Type | Trigger Threshold | Escalation Action |
| :--- | :--- | :--- |
| **Safaricom Daraja API Timeout** | $> 4\text{ hours}$ unable to receive STK push | Switch local dev to `npm run mock:server` and file ticket with Safaricom Developer Support. |
| **Code Review / PR Bottleneck** | PR open $> 6\text{ hours}$ without review | Lead engineer pings reviewer; blocks starting new tasks until PR is merged. |
| **City Market Stallholder Friction** | Stallholder hesitates on tablet mount | Ground Ops Lead visits Muindi Mbingu St in person with physical mockup and cash deposit guarantee. |
| **Financial Invariant Failure ($\Delta \ne 0$)** | Any failure in `npm test` | **CODE RED**: All PR merges frozen immediately until accounting trigger is restored. |
