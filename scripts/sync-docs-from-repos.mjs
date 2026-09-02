#!/usr/bin/env bun
/**
 * Sync website docs from local science and superintelligence repos.
 *
 * Usage:
 *   bun scripts/sync-docs-from-repos.mjs
 *   SCIENCE_ROOT="F:/Development/science" SUPERINTELLIGENCE_ROOT="F:/Development/superintelligence" bun scripts/sync-docs-from-repos.mjs
 */

import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEBSITE_ROOT = path.resolve(__dirname, "..");

const SCIENCE_ROOT = process.env.SCIENCE_ROOT ?? "F:/Development/science";
const SUPERINTELLIGENCE_ROOT =
  process.env.SUPERINTELLIGENCE_ROOT ?? "F:/Development/superintelligence";

const SCIENCE_DEST = path.join(WEBSITE_ROOT, "src/content/docs/science");
const SUPERINTELLIGENCE_DEST = path.join(WEBSITE_ROOT, "src/content/docs/superintelligence");

/** Explicit website doc paths to keep in sync even if missing locally. */
const SCIENCE_MANIFEST = [
  "CGM_Paper.md",
  "CGM_Program.md",
  "Findings/Analysis_3D_6DOF_Proof.md",
  "Findings/Analysis_48_States.md",
  "Findings/Analysis_Alignment.md",
  "Findings/Analysis_Axiomatization.md",
  "Findings/Analysis_Balance_Index.md",
  "Findings/Analysis_BH_Aperture.md",
  "Findings/Analysis_BH_Universe.md",
  "Findings/Analysis_Capacity_Concepts.md",
  "Findings/Analysis_CGM_Units.md",
  "Findings/Analysis_CMB.md",
  "Findings/Analysis_Energy_Scales.md",
  "Findings/Analysis_Fine_Structure.md",
  "Findings/Analysis_Geometric_Coherence.md",
  "Findings/Analysis_GFE.md",
  "Findings/Analysis_Gravity_Note.md",
  "Findings/Analysis_Higgs.md",
  "Findings/Analysis_Hilbert_Space_Representation.md",
  "Findings/Analysis_hQVM_CGM_Trestleboard.md",
  "Findings/Analysis_hQVM_Cohomology.md",
  "Findings/Analysis_hQVM_Percolation.md",
  "Findings/Analysis_hQVM_Wavefunction.md",
  "Findings/Analysis_Kompaneyets.md",
  "Findings/Analysis_Measurement.md",
  "Findings/Analysis_Motion.md",
  "Findings/Analysis_Quantum_Gravity.md",
];

const SUPERINTELLIGENCE_MANIFEST = [
  "Gyroscopic_ASI_Foundations.md",
  "Gyroscopic_ASI_Implications.md",
  "Gyroscopic_ASI_SDK_Holographic_Web.md",
  "Gyroscopic_ASI_SDK_Network.md",
  "Gyroscopic_ASI_SDK_Strategic_Significance_Brief.md",
  "programs/AIR_Brief.md",
  "programs/AIR_Logistics.md",
  "programs/AIR_Moments_Economy_Specs.md",
  "programs/AIR_Moments_Economy_Whitepaper.md",
  "programs/AIR_Moments_Genealogies_Specs.md",
  "programs/AIR_Moments_Wallet.md",
  "programs/Computational_Climate_Control_Brief.md",
  "reports/hQVM_Climate_Tests_Report.md",
  "reports/hQVM_Features_Report.md",
  "reports/hQVM_Tests_Performance_Report.md",
  "reports/hQVM_Tests_Report_1.md",
  "reports/hQVM_Tests_Report_2.md",
  "reports/Measurement_Tests_Report.md",
  "reports/Moments_Tests_Report.md",
  "reports/Physics_Tests_Report.md",
  "specs/Gyroscopic_ASI_Physical_Substrate_Specs.md",
  "specs/Gyroscopic_ASI_Runtime_Specs.md",
  "specs/hQVM_QuBEC_Holography.md",
  "specs/hQVM_QuBEC_Theory.md",
  "specs/hQVM_SDK_Quantum_Computing.md",
  "specs/hQVM_Specs_Formalism.md",
];

/** @type {{ copied: string[]; missing: string[]; errors: { dest: string; message: string }[] }} */
const summary = { copied: [], missing: [], errors: [] };

function ensureDir(dir) {
  mkdirSync(dir, { recursive: true });
}

function walkMarkdownFiles(dir) {
  /** @type {string[]} */
  const files = [];

  if (!existsSync(dir)) return files;

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Resolve a science doc source. Science repo is preferred; superintelligence is fallback.
 * @param {string} relPath relative to src/content/docs/science (e.g. Findings/Foo.md)
 */
function resolveScienceSource(relPath) {
  const fileName = path.basename(relPath);
  const candidates = [
  path.join(SCIENCE_ROOT, "docs", relPath),
  path.join(SCIENCE_ROOT, "docs", fileName),
  path.join(SUPERINTELLIGENCE_ROOT, "docs", "references", fileName),
  path.join(SUPERINTELLIGENCE_ROOT, "docs", "notes", "CGM_Physics", relPath),
  path.join(SUPERINTELLIGENCE_ROOT, "docs", "notes", "CGM_Physics", "Findings", fileName),
  ];

  for (const candidate of candidates) {
    if (existsSync(candidate) && statSync(candidate).isFile()) {
      return candidate;
    }
  }

  return null;
}

/**
 * @param {string} source
 * @param {string} dest
 */
function copyDoc(source, dest) {
  try {
    ensureDir(path.dirname(dest));
    copyFileSync(source, dest);
    summary.copied.push(`${path.relative(WEBSITE_ROOT, dest)} <= ${source}`);
  } catch (error) {
    summary.errors.push({
      dest: path.relative(WEBSITE_ROOT, dest),
      message: error instanceof Error ? error.message : String(error),
    });
  }
}

function syncScienceDocs() {
  const destFiles = new Set([
    ...walkMarkdownFiles(SCIENCE_DEST),
    ...SCIENCE_MANIFEST.map((rel) => path.join(SCIENCE_DEST, rel)),
  ]);

  for (const destFile of destFiles) {
    const relPath = path.relative(SCIENCE_DEST, destFile).replaceAll("\\", "/");
    const source = resolveScienceSource(relPath);

    if (!source) {
      summary.missing.push(relPath);
      continue;
    }

    copyDoc(source, destFile);
  }
}

function syncSuperintelligenceDocs() {
  const destFiles = new Set([
    ...walkMarkdownFiles(SUPERINTELLIGENCE_DEST),
    ...SUPERINTELLIGENCE_MANIFEST.map((rel) => path.join(SUPERINTELLIGENCE_DEST, rel)),
  ]);

  for (const destFile of destFiles) {
    const relPath = path.relative(SUPERINTELLIGENCE_DEST, destFile).replaceAll("\\", "/");
    const source = path.join(SUPERINTELLIGENCE_ROOT, "docs", relPath);

    if (!existsSync(source) || !statSync(source).isFile()) {
      summary.missing.push(`superintelligence/${relPath}`);
      continue;
    }

    copyDoc(source, destFile);
  }
}

function printSummary() {
  console.log("Sync docs from repos");
  console.log(`  science:           ${SCIENCE_ROOT}`);
  console.log(`  superintelligence: ${SUPERINTELLIGENCE_ROOT}`);
  console.log(`  website:           ${WEBSITE_ROOT}`);
  console.log("");

  console.log(`Copied: ${summary.copied.length}`);
  for (const line of summary.copied) {
    console.log(`  + ${line}`);
  }

  if (summary.missing.length > 0) {
    console.log(`\nMissing source: ${summary.missing.length}`);
    for (const rel of summary.missing) {
      console.log(`  ? ${rel}`);
    }
  }

  if (summary.errors.length > 0) {
    console.log(`\nErrors: ${summary.errors.length}`);
    for (const err of summary.errors) {
      console.log(`  ! ${err.dest}: ${err.message}`);
    }
  }

  console.log("");
  if (summary.errors.length > 0) {
    process.exitCode = 1;
  } else if (summary.missing.length > 0) {
    process.exitCode = 2;
  }
}

function main() {
  if (!existsSync(SCIENCE_ROOT)) {
    console.error(`Science repo not found: ${SCIENCE_ROOT}`);
    process.exit(1);
  }

  if (!existsSync(SUPERINTELLIGENCE_ROOT)) {
    console.error(`Superintelligence repo not found: ${SUPERINTELLIGENCE_ROOT}`);
    process.exit(1);
  }

  syncScienceDocs();
  syncSuperintelligenceDocs();
  printSummary();
}

main();
