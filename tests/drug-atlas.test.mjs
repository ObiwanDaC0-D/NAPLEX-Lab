import test from "node:test";import assert from "node:assert/strict";import {drugs,atlasSources} from "../src/drugs.js";
test("drug identifiers and generic names are unique",()=>{assert.equal(new Set(drugs.map(d=>d.id)).size,drugs.length);assert.equal(new Set(drugs.map(d=>d.generic)).size,drugs.length)});
test("all educational drug entries disclose review status and have substantive fields",()=>{for(const d of drugs){assert.equal(d.status,"Review Needed");assert.ok(d.generic.length>2);assert.ok(d.mechanism.length>30);assert.ok(d.safety.length>=2);assert.ok(d.counsel.length>20);assert.ok(d.uses.length>=1);assert.ok(d.contrast.length>15)}});
test("reference portals use HTTPS",()=>{for(const s of atlasSources)assert.ok(s.url.startsWith("https://"))});
