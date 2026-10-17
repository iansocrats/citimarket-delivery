# 🌸 CitiMarket Delivery (Nairobi, Kenya)

> **On-Demand & Scheduled Fresh Flower Logistics Platform with Double-Entry Accounting Engine**

CitiMarket Delivery digitizes the historic flower stalls at City Market (Muindi Mbingu St, Nairobi CBD), connecting them to consumers across Nairobi (Kilimani, Westlands, Karen, Upper Hill) via an insulated Boda Boda flower courier network.

---

## 🚀 Key System Features

1. **Consumer Gifting Workflow**:
   - Fresh Naivasha rose arrangements.
   - Handwritten calligraphy greeting card inscription preview.
   - Secret surprise delivery mode (*"Call sender, do not spoil surprise to recipient"*).
   - **Simulated Lipa na M-Pesa STK Push** with instant payment verification.

2. **City Market Florist Portal**:
   - Live order dispatch notifications.
   - Stem trimming and hydration in transport water vials.
   - Quality control pre-dispatch photo checkpoint (`#QC-8842`).

3. **Flower Courier App (Insulated Boda Boda)**:
   - Proximity gig matching.
   - Insulated humidity-controlled container verification.
   - Nairobi corridor route navigation and surprise handoff.

4. **Double-Entry General Ledger (Zero Leakage)**:
   - Cryptographically verifiable T-Accounts (Assets, Liabilities, Accounts Payable, Net Platform Take Rate).
   - Strict audit invariant: $\sum \text{Debits} \equiv \sum \text{Credits}$ ($\Delta = 0.00$).

5. **Engineering Architecture**:
   - **Spatial Indexing**: Uber H3 Resolution 8 Hexagons (`0x887a40660ffffff`).
   - **Operations Research**: Maximum-Weight Bipartite Dispatch Matching.
   - **Concurrency Control**: Atomic Redis distributed locks (`NX, EX=15s`) and Optimistic Concurrency Control (`version_id`).
   - **Distributed Transactions**: Saga Orchestration with automated M-Pesa compensating refunds.

---

## 🛠️ Local Development

Open `index.html` directly in your browser, or run a local static server:

```bash
npx serve .
```

---

## 🌐 Deployment

Deployed via Vercel and GitHub.
