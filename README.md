# NAPLEX-Lab — Version 3.0

A local-first interactive pharmacy learning platform inspired by Wellness-Lab and Budhism-Psychology.

## New in Version 3 — Calculations Laboratory
- 11 pure, testable mathematical models: dilution, dose-to-volume, weight-based arithmetic, infusion pump rate, gravity drip rate, percent w/v, alligation, half-life, conceptual loading dose, absolute risk reduction and number needed to treat.
- Guided input forms with dimensional-analysis steps, units, assumptions, and explicit invalid-input handling.
- 12 original arithmetic exercises with hints, answer checking and worked explanations.
- Local calculation-attempt history and model-level performance analytics.
- Additional Node tests for arithmetic accuracy, model constraints, educational notes and exercise consistency.
- Educational models only; no patient-specific dose guidance.

## Preserved Version 2 — Drug Atlas
- 12 structured educational medication concepts covering cardiovascular care, anticoagulation, diabetes, psychiatry, infectious diseases, pulmonology and gastroenterology.
- Search by generic name, example brand, therapeutic class or indication.
- Therapeutic-area filtering, expandable mechanisms, safety/counseling explanations and comparison of up to three medications.
- Visible **Review Needed** status on every entry. No entry is independently clinically verified; dose tables are deliberately withheld.
- Direct links to FDA Drugs@FDA and DailyMed portals for manual reference checking.

## Preserved Version 1 features
- Explore default landing page, responsive dark navigation, six expandable introductory lessons.
- Eight original practice questions, answer feedback and error review.
- Five functional educational calculators.
- One fictional medication reconciliation exercise.
- Local progress, heuristic review scheduling, study settings, analytics and JSON backup/import.

## Important clinical limitations
**This is educational software, not a drug reference for patient care.** Medication content is original educational synthesis, not pharmacist-reviewed or checked claim-by-claim against current product-specific labeling. Uses and safety lists are illustrative and incomplete. Do not infer dosing, substitution, or patient-specific recommendations. The high-level NAPLEX competency map still requires documented confirmation against the applicable NABP outline. The question bank is too small for a credible 225-question simulation; no official scoring or passing probability is presented.

## Run and test
Use Node 22+ for tests: `npm test`. To run locally: `python3 -m http.server 8000`, then visit http://localhost:8000.

## Deploy
In GitHub repository **Settings → Pages**, select **Deploy from a branch**, **main**, **/(root)**.

## Files
- `index.html` and `styles.css`: application shell and design
- `src/app.js`: navigation, learning tools and Drug Atlas interface
- `src/data.js`: introductory lessons, questions and calculation models
- `src/drugs.js`: structured, explicitly unverified educational medication concepts
- `src/math-lab.js`: pure mathematical models and guided exercise dataset
- `tests/`: numerical and content-integrity tests
- `.github/workflows/tests.yml`: Node test workflow

## Privacy
Progress is in unencrypted localStorage and does not sync across devices. JSON backups are unencrypted. Do not enter real patient information.

## Next priorities
1. Document official NABP subcompetencies and content-version dates.
2. Add source-specific citations and clinical review records for each drug claim.
3. Expand reviewed original questions, with more varied calculation cases and difficulty progression.
4. Build interactive drug-class sorting and stronger adaptive memory practice.
5. Add case simulations and a full-length exam only when reviewed content is sufficient.

Not affiliated with NABP.
