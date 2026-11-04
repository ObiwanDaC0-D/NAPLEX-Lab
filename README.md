# NAPLEX-Lab — Version 1.0

A local-first, interactive pharmacy learning application inspired by Wellness-Lab and Budhism-Psychology.

## Working features
- Responsive midnight-blue application, Explore default landing page, eleven navigable sections.
- Six introductory expandable pharmacy lessons spanning five high-level NAPLEX domains.
- Eight original multiple-choice practice questions with feedback, error review and local performance history.
- Five functional calculation tools: half-life, absolute risk reduction, number needed to treat, infusion rate and illustrative Cockcroft–Gault.
- Fictional medication reconciliation reasoning exercise.
- Local progress tracking, heuristic review scheduling, study-date settings and domain-level accuracy analytics.
- JSON backup/import, official reference links and automated basic validation tests.

## Known limitations
This is a foundational release, not the complete master specification. A comprehensive verified competency map, pharmacist-reviewed medication monographs, full clinical case engine, large question bank, adaptive tutor and full-length examination simulator are **not implemented**. Drug Atlas and Exam Simulator clearly communicate this status. The top-level blueprint is provisional pending documented re-verification for the intended exam date. Educational clinical summaries are not independently pharmacist-reviewed and must not guide patient care. Practice accuracy is not an official NAPLEX score or passing probability.

## Running
Use a static HTTP server (ES modules do not reliably run from file://):

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000. Run tests with `npm test` using Node 22 or newer.

## GitHub Pages
In **Settings → Pages**, select **Deploy from a branch**, branch **main**, folder **/(root)**.

## Architecture
- `index.html`: application shell
- `styles.css`: responsive design and accessible controls
- `src/data.js`: learning content, questions, calculation templates, high-level domains
- `src/app.js`: navigation, assessments, calculators, persistence, backups and analytics
- `tests/validation.test.mjs`: content integrity and numerical regression tests
- `.github/workflows/tests.yml`: automated Node tests

## Privacy
Learning history uses unencrypted browser localStorage. No cross-device synchronization. JSON backups are unencrypted. Do not enter real patient information.

## Priorities for v2
Document and verify NABP subcompetencies; establish a dated clinical source registry and pharmacist-review workflow; expand validated question/calculation coverage; build sourced medication monographs; strengthen adaptive retrieval and clinical cases.

Not affiliated with NABP. Educational use only.
