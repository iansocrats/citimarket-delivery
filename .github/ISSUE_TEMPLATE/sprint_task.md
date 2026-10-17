---
name: Sprint Task / Milestone Issue
about: Track an implementation task for the 56-day CitiMarket Delivery roadmap
title: "[CIT-XXX]: "
labels: ["sprint-task", "phase-1"]
assignees: ''
---

### 📌 Task Overview
**Phase**: [e.g. Phase 1: Financial Bedrock & Daraja]  
**Component**: [e.g. Double-Entry General Ledger]  
**Estimated Effort**: [e.g. 2 Days]  

---

### 🎯 Objective & Description
<!-- Provide a concise description of what needs to be engineered -->

---

### ✅ Definition of Done (DoD)
- [ ] Code implemented and passing local test suite (`npm test`).
- [ ] Zero floating-point math violations (integer cents used).
- [ ] Database triggers enforce $\sum \text{Debits} \equiv \sum \text{Credits}$ ($\Delta = 0.00$).
- [ ] Documented in architecture specifications.
- [ ] PR reviewed and merged to `main` via automated GitHub Actions gatekeeper.

---

### ⚠️ Known Risks & Blockers
<!-- Any external dependency issues with Safaricom Daraja, Africa's Talking, or hardware -->
