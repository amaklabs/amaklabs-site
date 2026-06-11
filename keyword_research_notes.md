# SEO-AEO Keyword Research Report

This document outlines the keyword research findings, difficulty tiers, AEO question queries, cannibalization checks, and content production map tailored for the AMAKLABS target audience (CTOs, founders, and product managers).

---

## 🎯 Target Persona & Intent
- **Audience**: CTOs, Operations Directors, SaaS Founders, and VPs of Engineering.
- **Intent**: High commercial and conversational intent. Users searching for ways to automate manual operational bottlenecks, build high-performance web products, or ship cross-platform mobile apps.
- **AEO Focus**: Gain citation authority inside AI reasoning engines (Perplexity, ChatGPT Search, Gemini, Claude) by answering core technical, cost-benefit, and architectural queries.

---

## 1. Core Seed Keywords

1. **"custom AI agents"** (Primary commercial term for workflow automation)
2. **"SaaS platform development agency"** (Primary commercial term for custom web applications)
3. **"offline-first mobile app sync"** (High-intent niche technical term for mobile development)
4. **"enterprise workflow automation agency"** (B2B organizational search query)

---

## 2. Keyword Difficulty Tiers

We categorise targeted keywords into difficulty tiers based on search landscape competitiveness and domain authority requirements:

### Tier 1 (Low-to-Moderate Difficulty: KD <40) — Target First
*Target these keywords immediately through cluster articles, subpages, and initial blog entries.*

- **"custom AI workflows for business"** | Vol: 250/mo | Difficulty: 28 | Intent: Commercial
- **"offline-first mobile database sync"** | Vol: 100/mo | Difficulty: 24 | Intent: Informational/Commercial
- **"Next.js SaaS development agency"** | Vol: 150/mo | Difficulty: 35 | Intent: Transactional
- **"AI automation for legacy databases"** | Vol: 90/mo | Difficulty: 22 | Intent: Commercial
- **"cross platform app development cost efficiency"** | Vol: 120/mo | Difficulty: 31 | Intent: Commercial

### Tier 2 (Medium Difficulty: KD 40–60) — Build Toward
*Target these as pillar pages and advanced blog topics once Tier 1 authority is established.*

- **"custom AI agent agency"** | Vol: 450/mo | Difficulty: 48 | Intent: Commercial/Transactional
- **"React SaaS platform development"** | Vol: 300/mo | Difficulty: 45 | Intent: Commercial
- **"custom mobile app development proposal"** | Vol: 200/mo | Difficulty: 52 | Intent: Transactional
- **"autonomous operations for B2B"** | Vol: 150/mo | Difficulty: 42 | Intent: Informational

### Tier 3 (High Difficulty: KD >60) — Long-Term Goals
*Highly competitive keywords requiring substantial authority and backlinks to rank organically.*

- **"AI automation agency"** | Vol: 2.2K/mo | Difficulty: 68 | Intent: Commercial
- **"custom software development"** | Vol: 9.8K/mo | Difficulty: 78 | Intent: Transactional
- **"mobile app development"** | Vol: 12.1K/mo | Difficulty: 82 | Intent: Transactional

---

## 3. AEO Question Queries

To gain visibility in AI answer cards and "People Also Ask" structures, target these conversational queries using specific structured elements:

| AEO Question Keyword | Target Answer Format | Target Page / Article |
| :--- | :--- | :--- |
| **"What is the difference between standard workflow tools and autonomous agents?"** | **Comparison Table** | `/blog/shift-to-autonomous-ai-agents-enterprise-workflows` |
| **"How does offline-first database sync work in mobile apps?"** | **Numbered Steps** | `/blog/offline-first-mobile-architecture` (Proposed) |
| **"What is the best rendering architecture for SaaS platforms?"** | **Comparison Table** | `/blog/choosing-frontend-architecture-saas-platforms` |
| **"How do you prevent AI model hallucinations in database operations?"** | **Definition + Bullets** | `/ai-workflows` |
| **"What are the benefits of cross-platform mobile apps vs native apps?"** | **Definition Sentence** | `/mobile-apps` |

---

## 4. Cannibalization Checks

To prevent internal pages from competing against each other in search results, we enforce strict URL ownership:

- **Conflict**: "custom AI agents" vs "custom AI workflows"
  - *Risk*: Multiple landing/blog pages ranking for similar B2B AI queries, diluting search signals.
  - *Resolution*: `/ai-workflows` owns high-intent agency service queries (e.g., "custom AI workflows for business"). `/blog/shift-to-autonomous-ai-agents-enterprise-workflows` owns educational/informational queries (e.g., "how autonomous AI agents work").
- **Conflict**: "SaaS platform development" vs "React SaaS development"
  - *Risk*: Both the `/web-dev` services page and the choosing-frontend blog post trying to rank for generic SaaS developer queries.
  - *Resolution*: `/web-dev` owns commercial/transactional terms (e.g., "SaaS platform development agency"). `/blog/choosing-frontend-architecture-saas-platforms` owns comparative/framework decisions (e.g., "best frontend rendering architecture for SaaS").

---

## 5. Content Production Map

Recommended content mapping and production order for Tier 1 and Tier 2 terms:

```mermaid
graph TD
    subgraph Phase 1: High-Intent Tier 1 Wins
        T1_1["/ai-workflows (AEO FAQ Optimization)"]
        T1_2["/web-dev (AEO Rendering Tables)"]
        T1_3["/mobile-apps (AEO Offline Sync sections)"]
    end

    subgraph Phase 2: Topical Authority Blogs
        B1["Blog: Shift to Autonomous Agents (AI Workflows)"]
        B2["Blog: Choosing SaaS Frontend (Web Dev)"]
        B3["Blog: Offline-First Mobile Architectures (Mobile Apps)"]
    end

    subgraph Phase 3: Conversational Backlinks
        C1["Dashboard: Live Blog Publishing Portal"]
        C2["External Case Studies & Whitepapers"]
    end

    Phase 1 --> Phase 2
    Phase 2 --> Phase 3
```

### Next Content Targets:
1. **Pillar Blog Post**: *How to Implement Offline-First Syncing in Flutter/React Native Applications*
   - *Target Keyword*: `offline-first mobile database sync`
   - *AEO Query*: "How does offline-first database sync work in mobile apps?" (Answer format: 4-step list).
2. **Cluster Article**: *Connecting Legacy Postgres Databases to Custom AI Agent Systems*
   - *Target Keyword*: `AI automation for legacy databases`
   - *AEO Query*: "How do AI agents connect securely to legacy databases?" (Answer format: bullet points).
