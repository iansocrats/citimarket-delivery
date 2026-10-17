# 🌸 CitiMarket Delivery (Nairobi, Kenya)

> **On-Demand Hyperlocal Flower Logistics & Fintech Platform — Powered by Grab Superapp Architecture ([grab.com/sg](https://www.grab.com/sg/))**

CitiMarket Delivery digitizes the historic flower stalls at City Market (Muindi Mbingu St, Nairobi CBD), connecting them to consumers and corporate accounts across Nairobi (Kilimani, Westlands, Karen, Upper Hill) via a multi-tier vehicle fleet and an immutable double-entry ledger.

---

## 🟢 Grab Superapp Playbook Adaptation ([grab.com/sg](https://www.grab.com/sg/))

| Grab Singapore Pillar | CitiMarket Delivery Adaptation | Underlying Technology |
| :--- | :--- | :--- |
| **GrabExpress (Bike & Van)** | **Multi-Vehicle Fleet**: Boda Boda (KSh 350) & Cool-Van (18°C AC, KSh 1,200) | Bipartite Matching + Fleet Constraints |
| **GrabExpress Saver** | **Saver Batched Routes**: 4-hour window (-35% discount, KSh 220) | Vehicle Routing Problem with Time Windows (VRPTW) |
| **GrabMerchant App** | **Florist Workshop POS & Pacing**: JIT courier dispatch (12m prep sync) | Dynamic Queue Pacing (cuts stall curb wait by 68%) |
| **GrabPay / GrabFin** | **Lipa na M-Pesa Escrow & Instant Driver Cash-Out**: 1-click B2C payout | Safaricom Daraja B2C API + Double-Entry Merkle Ledger |
| **Grab Safety Shield** | **Masked VoIP, 4-Digit PIN & CitiFresh™ 48h Guarantee**: Transit protection | Virtual Proxy Gateway + Photo Proof of Delivery (POD) |

---

## 🚀 Key System Features

1. **GrabExpress™ Fleet Selector**:
   - 🛵 **Express Bike (Boda Boda)**: Fastest navigation through Nairobi traffic for single bouquets (KSh 350).
   - 🚐 **Cool-Van (Climate-Controlled 18°C)**: Refrigerated van for multi-tier wedding centerpieces and delicate orchids (KSh 1,200).
   - 📦 **Saver Batch (VRPTW Route Optimization)**: Consolidates deliveries along the Ngong Rd corridor for a 35% discount (KSh 220).

2. **Consumer Gifting Experience**:
   - Fresh Naivasha rose arrangements with handwritten card inscription.
   - Secret surprise delivery mode (*"Call sender, do not spoil surprise to recipient"*).
   - **Payment Choice**: Lipa na M-Pesa STK Push or CitiMarket Stored Wallet (GrabPay style) with FlowerPoints loyalty rewards.
   - **Grab Safety Shield**: Number masking (encrypted VoIP proxy) and Recipient Live Web Tracking (`citimarket.ke/track/CMD-8842`) requiring zero app installation.

3. **City Market Florist Workshop (GrabMerchant)**:
   - Dynamic prep-time pacing ($T_{dispatch} = T_{ready} - ETA_{courier}$) preventing curb congestion.
   - Quality control pre-dispatch photo checkpoint (`#QC-8842`) and stem water-vial hydration.

4. **Courier Partner App (Grab Driver)**:
   - Proximity gig matching and atomic gig reservation via Redis Redlock (`NX, EX=15s`).
   - **Daily Micro-Liquidity**: Instant 1-click cash-out from courier wallet to Safaricom M-Pesa phone number via B2C API.
   - **Proof of Delivery (POD)**: Recipient 4-digit SMS PIN verification (`8842`) + geotagged photo proof.

5. **Double-Entry General Ledger (Zero Leakage)**:
   - Cryptographically verifiable Merkle SHA-256 hash-chained journal blocks.
   - Fixed-point integer minor units (cents) eliminating IEEE-754 floating-point drift.
   - Strict audit invariant: $\sum \text{Debits} \equiv \sum \text{Credits}$ ($\Delta = 0.00$).

---

## 🛠️ Local Development

Open `index.html` directly in your browser, or run a local static server:

```bash
npx serve .
```

---

## 🌐 Live Prototype

- **Live URL**: [https://iansocrats.github.io/citimarket-delivery/](https://iansocrats.github.io/citimarket-delivery/)
- **Repository**: [https://github.com/iansocrats/citimarket-delivery](https://github.com/iansocrats/citimarket-delivery)
