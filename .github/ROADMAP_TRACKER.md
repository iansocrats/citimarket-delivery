# 🎯 CitiMarket Delivery — 56-Day Milestone & Sprint Tracking Board

> **Linear / GitHub Projects Import Sheet**  
> Use this file to populate your Kanban boards, Linear Cycles, and GitHub Milestones.

---

## 🏃 Sprint 1: Days 1–14 (Phases 0, 1, and 2A)

### Milestone 0: Environment & API Credentials (Days 1–3)
- [ ] **CIT-001**: Provision Cloud PostgreSQL 16 (PostGIS) & Redis 7 Cluster on staging. *(Owner: Backend Lead | Est: 2d)*
- [ ] **CIT-002**: Register Safaricom Daraja Developer Sandbox (C2B & B2C keys). *(Owner: Backend Lead | Est: 1d)*
- [ ] **CIT-003**: Register Africa's Talking account & reserve Nairobi VoIP number (`+254 20 ...`). *(Owner: Ground Ops | Est: 1d)*

### Milestone 1: Double-Entry Financial Bedrock & Daraja (Days 4–9)
- [ ] **CIT-101**: Implement PostgreSQL DDL for Chart of Accounts & Immutable Ledger. *(Owner: Backend Lead | Est: 2d)*
- [ ] **CIT-102**: Create database trigger enforcing $\sum \text{Debits} \equiv \sum \text{Credits}$ ($\Delta = 0.00$). *(Owner: Backend Lead | Est: 1d)*
- [ ] **CIT-103**: Implement Safaricom Daraja C2B STK Push client with Redis idempotency keys. *(Owner: Backend Lead | Est: 2d)*
- [ ] **CIT-104**: Implement Daraja B2C Instant Driver/Florist Payouts. *(Owner: Backend Lead | Est: 1d)*
- [ ] **CIT-105**: Deploy Daraja Active Polling Reconciliation Worker ($t \in [10s, 25s, 50s]$). *(Owner: Backend Lead | Est: 1d)*
- **GATE 1 CRITERIA**: 1,000 synthetic payments processed in sandbox with zero discrepancies.

### Milestone 2A: Order State Machine & Compensating Sagas (Days 10–14)
- [ ] **CIT-201**: Implement Order Finite State Machine (`DRAFT` $\to$ `ESCROW_LOCKED` $\to$ `DELIVERED`). *(Owner: Backend Lead | Est: 3d)*
- [ ] **CIT-202**: Implement Saga Compensating Actions (Automated M-Pesa B2C refund on cancellation). *(Owner: Backend Lead | Est: 2d)*

---

## 🏃 Sprint 2: Days 15–28 (Phases 2B, 3, and 4)

### Milestone 2B: Perishable Inventory & Pacing Engine (Days 15–16)
- [ ] **CIT-203**: Write Redis Lua atomic reservation script for floral inventory batches. *(Owner: Backend Lead | Est: 1d)*
- [ ] **CIT-204**: Implement Florist JIT prep countdown timer logic ($12\text{m} \to 0\text{m}$). *(Owner: Backend Lead | Est: 1d)*

### Milestone 3: Spatial Telemetry & Dispatch Matching (Days 17–23)
- [ ] **CIT-301**: Deploy WebSocket/gRPC ingestion gateway for courier GPS heartbeats. *(Owner: Backend Lead | Est: 2d)*
- [ ] **CIT-302**: Configure Redis 7 Geospatial cache (`active_couriers`) with 15-second TTL. *(Owner: Backend Lead | Est: 1d)*
- [ ] **CIT-303**: Set up Uber H3 Resolution 8 spatial partitioning (CBD, Kilimani, Westlands). *(Owner: Backend Lead | Est: 1d)*
- [ ] **CIT-304**: Implement Kuhn-Munkres (Hungarian) bipartite matching algorithm with JIT pacing penalties. *(Owner: Backend Lead | Est: 3d)*
- **GATE 2 CRITERIA**: 50 simulated couriers dynamically dispatched within 15ms compute latency.

### Milestone 4: Trust, Safety & VoIP Number Masking (Days 24–28)
- [ ] **CIT-401**: Build Africa's Talking voice bridge webhook (proxying numbers via `+254 20 ...`). *(Owner: Backend Lead | Est: 2d)*
- [ ] **CIT-402**: Implement Secret Surprise Gifting protocol (withholding recipient data until geofence). *(Owner: Backend Lead | Est: 1d)*
- [ ] **CIT-403**: Implement Salted Hash Offline PIN generator ($H = \text{SHA256}(\text{PIN} + \text{Salt})$). *(Owner: Backend Lead | Est: 2d)*
- **GATE 3 CRITERIA**: Voice proxy dials without revealing raw caller ID; offline PIN verified cryptographically.

---

## 🏃 Sprint 3: Days 29–44 (Phase 5: The Edge Applications)

### Milestone 5A: Consumer Gifting Web PWA (Days 29–33)
- [ ] **CIT-501**: Build stem catalog & customizable bouquet builder in Next.js. *(Owner: Frontend Lead | Est: 2d)*
- [ ] **CIT-502**: Live handwritten calligraphy card inscription preview. *(Owner: Frontend Lead | Est: 1d)*
- [ ] **CIT-503**: Lipa na M-Pesa STK checkout trigger & live delivery map tracking. *(Owner: Frontend Lead | Est: 2d)*

### Milestone 5B: City Market Florist Workshop Tablet (Days 34–37)
- [ ] **CIT-504**: High-decibel audio alarm chime (`STREAM_ALARM`) on incoming orders. *(Owner: Frontend Lead | Est: 1d)*
- [ ] **CIT-505**: Florist JIT prep countdown visualizer. *(Owner: Frontend Lead | Est: 1d)*
- [ ] **CIT-506**: Camera Quality-Control upload (#QC-8842) with on-device WebP compression. *(Owner: Frontend Lead | Est: 2d)*

### Milestone 5C: Courier Partner Android APK (Days 38–44)
- [ ] **CIT-507**: Android ForegroundService with `START_STICKY` for reliable background GPS. *(Owner: Mobile Lead | Est: 2d)*
- [ ] **CIT-508**: Local-First SQLite Outbox for zero-latency offline commits. *(Owner: Mobile Lead | Est: 2d)*
- [ ] **CIT-509**: Offline Salted Hash PIN verifier keypad. *(Owner: Mobile Lead | Est: 1d)*
- [ ] **CIT-510**: Protobuf binary telemetry encoder (24 bytes per ping). *(Owner: Mobile Lead | Est: 1d)*
- [ ] **CIT-511**: 1-click **"⚡ Instant Cash-Out to M-Pesa"** B2C trigger. *(Owner: Mobile Lead | Est: 1d)*
- **GATE 4 CRITERIA**: Complete live order test from Customer PWA $\to$ Florist Tablet $\to$ Courier APK.

---

## 🏃 Sprint 4: Days 45–56 (Phase 6: Ground Pilot & Launch)

### Milestone 6A: Chaos & Failure Testing (Days 45–48)
- [ ] **CIT-601**: Simulate basement network dropouts, 50% packet drops, and delayed M-Pesa callbacks. *(Owner: QA / All | Est: 2d)*
- [ ] **CIT-602**: Fuzz test double-entry ledger under 10,000 concurrent mutations ($\Delta = 0$). *(Owner: Backend Lead | Est: 2d)*

### Milestone 6B: City Market Ground Alpha (Days 49–56)
- [ ] **CIT-603**: Onboard 2 verified stallholders at City Market; install mounted Android tablets. *(Owner: Ground Ops | Est: 2d)*
- [ ] **CIT-604**: Equip 3 Boda Boda riders with insulated backpacks and stem hydration phials. *(Owner: Ground Ops | Est: 2d)*
- [ ] **CIT-605**: Execute **25 live commercial flower gift deliveries** across Kilimani, Westlands, and Upper Hill. *(Owner: Team | Est: 4d)*
- **GATE 5 CRITERIA**: 25 deliveries completed with 100% on-time rate ($< 45\text{m}$), 0 wilted returns, and instant M-Pesa driver payouts.
