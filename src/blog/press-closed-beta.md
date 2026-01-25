---
title: "Press Closed Beta: Building an HTML Archive"
date: 2026-01-25
author: "Leo Torres"
description: "Starting a small closed beta for Press, our HTML-native preprint server. Building in the open, learning from friends, preparing for a public launch later this year."
tags: ["press", "beta", "building-in-public", "preprints"]
---

# Press Closed Beta: Building an HTML Archive<span style="color: #AD71F2; font-size: 1.5em;">.</span>

*January 25, 2026 • Leo Torres*

I'm starting a closed beta for Press today with five to eight friends who've agreed to
upload their research, break things, and tell me what's confusing. This isn't a launch,
just validation. I need to know if this solves a real problem or if I'm just building
something I personally want.

## The Problem

You've published an interactive paper. Where does the HTML version go?

Your personal website breaks when you switch institutions. GitHub Pages disappears if
you delete the repo. University hosting evaporates when you graduate. The result is that
most interactive research either never gets shared or gets flattened into a PDF, losing
the visualizations, the responsive text, the semantic structure that makes it actually
work on the web.

Preprint servers solved this problem for PDFs decades ago. They provide permanent URLs,
DOIs, and the infrastructure to ensure links don't break. **Press does the same thing
for HTML.**

## What It Actually Is

Upload HTML from whatever tool you use (Quarto, Typst, Jupyter, hand-written HTML) and
get a permanent URL with version tracking. Think arXiv, but for documents designed for
screens instead of paper.

Most research gets consumed on screens now, not printed. PDFs force browsers to emulate
a print format instead of using what the web does well: responsive layouts, interactive
elements, semantic structure, accessibility. It's 2026... we can do better.

Press doesn't replace your authoring workflow. It just gives the HTML you're already
creating a permanent home.

## What Makes It Different

We accept any HTML that follows basic web standards. No prescribed format, no new markup
language to learn. If it renders in a browser, it works.

The server handles permanent storage, version control, and archival. You keep full
ownership and everything is exportable. We're building infrastructure, not a walled
garden.

Core publishing will always be free and community-owned. We might add premium features
later (custom domains, advanced analytics), but the fundamental mission of permanent,
accessible HTML archiving will stay free.

## Where Things Stand

The interface is functional but rough. There are bugs and the documentation is minimal,
but beta testers can sign up, upload documents, preview them, and publish to permanent
URLs. The basics work and everything else needs polish.

This closed beta is about learning, not promoting. I need to know if researchers will
actually use this for real work or just kick the tires out of curiosity.

## What Happens Next

If the beta goes well (people publish papers and say they'd use it again), I'll spend
the next twelve weeks bootstrapping content instead of building features. That means
publishing my own work, reaching out to Quarto and Typst communities where HTML research
already exists, and inviting researchers whose work deserves HTML treatment. The goal is
50+ papers before a public launch.

Why 50 papers? Because empty archives are useless. Nobody publishes to an empty preprint
server and nobody reads archives with no papers. Bootstrapping content is just how these
platforms get started. ArXiv's founders published the first 400 papers themselves back
in 1991.

Public launch is realistically twelve weeks away or more. This is the long game.

## Building in the Open

I'm sharing this update now because I believe researchers deserve to see how these tools
develop, including all the rough edges. Too many projects appear fully formed and claim
to solve everything, which isn't honest and researchers can tell.

Press is early and rough. It might fail. But the problem is real. We're losing valuable
interactive work to format compromises because we lack the infrastructure to preserve it
properly.

If you're interested in following the development, you can star the [GitHub
repo](https://github.com/aris-pub/press), join our [Zulip
community](https://aris-pub.zulipchat.com/), or check back here for updates. I'll share
what I learn from the beta, what works and what doesn't, and how we're adapting based on
what people actually need.

The public launch announcement will come when we're ready.

<div style="text-align: center; margin: 4rem 0;">
  <img src="/brand/logos/aris/aris-logo-64.svg" alt="Aris" style="width: 64px; height: 64px; opacity: 0.4;" />
</div>

*Scroll Press is part of Aris, an organization building modern research tools supported
by community donations and academic grants. Learn more at [aris.pub](https://aris.pub).*
