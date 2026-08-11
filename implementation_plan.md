# Architectural Redesign Proposal - Youth Portal System (YPS)
*Based on the Official Technical Proposal & Terms of Reference (ToR) for PYCD, Ministry of Education & Skills Development, Royal Government of Bhutan.*

---

## 📌 Executive Architecture Summary

The redesigned architecture transforms the existing codebase into an enterprise-grade, module-driven platform fully aligned with the **12 Functional Modules**, **7 Stakeholder Roles**, **GovCloud Microservices Architecture**, and **Security & Innovation Mandates** specified in the Technical Proposal.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                 PRESENTATION LAYER                                     │
│  ┌───────────────────────┬───────────────────────┬─────────────────────────┬─────────┐ │
│  │   Public Youth Portal │   YC Manager Portal   │   PYCD / Admin Portal   │ Vol App │ │
│  └───────────────────────┴───────────────────────┴─────────────────────────┴─────────┘ │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                   API & ROUTING LAYER                                  │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │   Role-Based Routing (RBAC + ABAC)  •  NDI / DCRC Session Layer  • PWA Service   │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                12 FUNCTIONAL MODULE SERVICES                           │
│  ┌──────────────────────┬──────────────────────┬──────────────────────┬──────────────┐ │
│  │ 1. Youth Reg & YDI   │ 2. Member Transfer   │ 3. Volunteer Reg     │ 4. Activity  │ │
│  ├──────────────────────┼──────────────────────┼──────────────────────┼──────────────┤ │
│  │ 5. e-Certificates    │ 6. Programme Mgmt    │ 7-8. Prog Reporting  │ 9. Exposure  │ │
│  ├──────────────────────┼──────────────────────┼──────────────────────┼──────────────┤ │
│  │ 10. Special Support  │ 11. Feedback & Enc   │ 12. Enc Counselling  │ 7 Dashboards │ │
│  └──────────────────────┴──────────────────────┴──────────────────────┴──────────────┘ │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🏛️ 1. The 12 Functional Modules Redesign Plan

### **Module 1: Youth Registration & Service Management (DCRC & YDI)**
- **DCRC Census Integration**: Auto-populate verified youth profile data using Citizenship ID (CID) or Permit number.
- **Youth Registration Number (YRN)**: Unique system-generated identifier preserved across all 13 Youth Centres.
- **Youth Digital ID (YDI) QR Card**: Interactive SVG/Canvas QR membership card for instant check-in at any Youth Centre.
- **Age Rules**: Automatic status transition to `Youth Alumni` at age 25 via automated background monitoring.

### **Module 2: Member Transfer (YRN-Preserving Workflow)**
- Transfer youth records between any of the 13 Youth Centres (e.g., Thimphu YC to Paro YC).
- Locks historical service records under originating YC while allowing the receiving YC to manage new activities.

### **Module 3: Volunteer Registration & Management**
- Dual volunteer group types: **Centre-based** and **Y-PEER Network**.
- Rule engine enforcing maximum 2 active groups per volunteer with configurable age eligibility.
- Independent approval workflows for Centre Managers and Network Focal Points.

### **Module 4: Volunteer Activity Management**
- Hierarchical approval flow per ToR Section 4:
  - `President (YC Group)` ➔ Approved by `YC Manager` (Visible to YC Volunteers)
  - `Network Focal Point` ➔ Approved by `National Focal Point` (Visible to Network Volunteers)
  - `National Focal Point` ➔ Approved by `PYCD / HoD` (Visible to All Network Volunteers)
  - `YC Manager` ➔ Approved by `TEO / DEO` (Visible to YC Volunteers)
  - `PYCD` ➔ Approved by `HoD` (Visible to Selected Groups)
- Real-time capacity counter and auto-reminder alerts for pending approvals (>24h).

### **Module 5: e-Certificate Generation & Public QR Verifier**
- Auto-generate year-wise volunteer and programme completion certificates.
- Immutable certificate records with embedded QR codes linking to a **Public Certificate Verification Portal** (`/verify-certificate`).

### **Module 6–8: Programme Management, Reporting & e-Certificates**
- End-to-end lifecycle: Creation ➔ Registration window ➔ Capacity check (Yellow/Red limits) ➔ Delivery ➔ Reporting.
- System-prefilled completion reports submitted digitally to PYCD and TEO/DEO.
- Automatic e-Certificate generation for programmes lasting 3+ days.

### **Module 9: Achievement Recording (International Exposure)**
- Structured taxonomy for international exposure (exchanges, training, workshops, conferences, competitions).
- Manual recording by PYCD Focal with read-only visibility for YC Managers.

### **Module 10: Additional Initiatives & Support**
- Special interventions: Counselling, guidance, and referral records for registered and non-registered youth (fetched via DCRC API).

### **Module 11: Feedback Management & Critical Incident Reporting**
- Three feedback tiers: General, Programme-specific, and **Critical Incident Reporting** (bullying, harassment, safety).
- Unique QR code per Youth Centre.
- **Encryption**: End-to-end encrypted anonymous submission option for Critical Incidents with sentiment analysis dashboard for PYCD.

### **Module 12: Counselling Booking (AES-256 Encrypted)**
- Discreet, privacy-first booking via QR code or direct link.
- **Privacy Design**: No personal details stored in plaintext — submissions encrypted with AES-256, revealing only the contact number to the YC Manager.

---

## 👥 2. 7 Role-Based Dashboards & Data Scopes

| Role | Role Title | Key Functions | Data Scope | Proposed Dashboard Route |
| :--- | :--- | :--- | :--- | :--- |
| 1. **HOD** | HoD / Director | Strategic oversight, national KPIs, policy dashboards | All 13 YCs, National | `/dashboard/director` |
| 2. **PYCD** | PYCD Focal | Super Admin, system config, national data, volunteer oversight | All YCs + Networks | `/dashboard/pycd-admin` |
| 3. **TEO** | TEO / DEO | Jurisdiction supervisor, approve regional activities | Thromde / Dzongkhag | `/dashboard/teo-deo` |
| 4. **YCM** | YC Manager | Register youth, manage programmes/volunteers, reports | Own YC only | `/dashboard/yc-manager` |
| 5. **NFP** | National Focal Point | Network coordinator, oversee all Y-PEER networks | All Y-PEER networks | `/dashboard/national-focal` |
| 6. **NET** | Network Focal Point | Network manager, approve volunteers & group activities | Own network | `/dashboard/network-focal` |
| 7. **YTH** | Youth / Volunteers | End users, register, join programmes, track hours & e-Certs | Own profile/activities | `/dashboard/youth` |

---

## 💡 3. Key Innovations Beyond ToR Requirements

1. **Youth Digital ID (YDI) QR Card**: Scannable digital card for instant check-in at any Youth Centre.
2. **Public Certificate Verification Portal (`/verify-certificate`)**: Third parties (employers, universities) verify e-certificates instantly without contacting PYCD.
3. **Offline PWA Capabilities**: Service worker caching and background data sync for rural Youth Centres with intermittent internet connectivity.
4. **Gamification & Milestone Badges**: Volunteer leaderboards and digital badges for 50h, 100h, 200h milestones.
5. **AES-256 Privacy Architecture**: Encrypted counselling and critical incident submissions.

---

## ❓ User Review & Decision Points Required

Before proceeding with code modifications, please review and confirm:

1. **Architecture Layout**: Do you approve creating a modular directory structure under `src/modules/` (e.g. `src/modules/registration`, `src/modules/volunteers`, `src/modules/certificates`, `src/modules/counselling`)?
2. **Dashboards**: Should each of the 7 roles have a dedicated dashboard page with distinct UI layouts tailored to their Data Scope?
3. **Public Verifier**: Should we add the Public e-Certificate QR Verification page (`/verify-certificate/:certId`)?

> [!IMPORTANT]
> No code changes will be made until you review and approve this proposed architectural design.
