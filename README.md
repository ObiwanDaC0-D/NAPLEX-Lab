# NAPLEX-Lab — Version 10.0

A local-first interactive pharmacy learning platform inspired by Wellness-Lab and Budhism-Psychology.

## New in Version 10 — Quality and Reliability
- Chromium browser smoke tests for landing/navigation, curriculum interactions, practice answers, memory queue, clinical reasoning and generated math scenarios.
- GitHub Actions installs Playwright and Chromium, then runs unit and browser tests on pushes and pull requests.
- Disabled submission controls before a selection or after an answer is recorded; accessible pressed state for practice choices; current-page navigation semantics.
- Safer review-question routing and backup-import handling for empty file selections.
- Improved mobile navigation, 44px touch targets, focus-visible styling and reduced-motion support.
- Browser tests are committed and configured, but must pass in CI before the release is considered verified.

## Preserved Version 9 — Personalized Learning Dashboard
- Fourteen-day activity visualization combining recorded question, math, clinical-case and curriculum attempts.
- Connected knowledge-map cards in Performance Analytics with direct links to study each concept.
- Curriculum concept spaced-review scheduling (1, 3, 7, 14, 30 days after successive correct checks; approximately one hour after an incorrect check).
- Memory Lab now shows due curriculum concepts as well as due question cards.
- Study Planner allocates available minutes across concept review, practice questions, calculation practice and reflection; suggests topics using recorded curriculum attempts.
- All schedules and prioritization are simple transparent heuristics; they do not estimate exam readiness or validated retention probabilities.
- New tests for activity aggregation, schedule intervals, study allocation and map references.

## Preserved Version 8 — Connected Learning and Review Registry
- Four Pharmacy Library views: Explore Modules, Knowledge Connections, Review Registry and Suggested Practice.
- Explicit cross-links among curriculum concepts, related Drug Atlas entries, and monitoring themes.
- Source-review registry for all ten curriculum modules; all are Review Needed with no assigned reviewer or verification date.
- Suggested practice ordering based on incomplete modules and recent incorrect knowledge checks. This is a heuristic, not validated mastery estimation.
- Additional tests validate graph references, review status, and practice prioritization.
- No new clinical claims are marked as verified; reference portals alone do not establish claim-level provenance.

## Preserved Version 7 — Pharmacotherapy Learning Pathways
- Five therapeutic learning pathways (cardiovascular, antithrombotic, diabetes, antimicrobials, and neuropsychiatric medication concepts) with ten expandable modules.
- Mechanism, safety/monitoring and class-comparison sections, plus one scored knowledge check per module.
- Search and pathway filtering, completion markers, local knowledge-check history and integration of ten new questions into the practice bank.
- Original curriculum content is preliminary and marked Review Needed; it is not a substitute for dated prescribing information, current guidelines or pharmacist review.
- Curriculum structure and practice-question integrity tests added.

## Preserved Version 6 — Clinical Reasoning Laboratory
- Six fictional, two-decision clinical reasoning cases: discharge medication reconciliation, changing renal function, anticoagulant duplication, allergy assessment, teach-back, and systems-based quality improvement.
- Sequential choices with explanations and case-level performance tracking in localStorage.
- Twelve original case-derived multiple-choice questions added to mixed practice, missed-question review and review scheduling.
- Validation tests for case structures, question IDs, and incorrect-answer feedback.
- All clinical content explicitly marked Review Needed: no independent pharmacist review or claim-by-claim guideline verification. Cases teach broad safety principles and do not offer patient-specific treatment or dosing.

## Preserved Version 5 — Adaptive Problem Generation
- Reproducible numerical scenario generation for all 11 calculation models at Foundation, Application and Challenge levels (two numerical configurations per topic/level).
- Switch between fixed practice exercises and generated scenarios; the existing adaptive topic selector remains optional.
- Difficulty level for generated scenarios follows recent topic-specific correctness and hint use.
- Topic-specific remediation guidance after incorrect answers.
- Additional tests check all 66 topic-level-variant combinations against the underlying math engine.
- Scenarios are curated parameter combinations, not unlimited random generation. Difficulty labels describe designed numerical complexity, not psychometrically calibrated challenge.

## Preserved Version 4 — Adaptive Calculation Mastery
- Optional adaptive practice selects the next existing question using a transparent, recent-accuracy and practice-count heuristic.
- Foundation, Application and Challenge labels summarize recent answer patterns; they do not yet change problem complexity.
- Interactive dimensional-analysis unit builder with four guided conversion-factor paths and immediate feedback.
- Practice attempts record whether a hint was used; historical attempts remain compatible.
- Automated tests for practice selection, levels and dimensional-analysis paths.
- No claims of validated psychometric mastery or examination-score prediction.

## Preserved Version 3 — Calculations Laboratory
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
- `src/adaptive-math.js`: adaptive heuristics and unit-builder exercises
- `src/scenario-generator.js`: deterministic generated numerical scenarios and remediation
- `src/clinical-cases.js`: original fictional clinical cases and practice questions
- `src/curriculum.js`: structured pharmacotherapy pathways and original knowledge checks
- `src/knowledge-map.js`: cross-topic links, review registry, and practice prioritization
- `src/learning-dashboard.js`: activity summaries, concept scheduling and daily study allocation
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
