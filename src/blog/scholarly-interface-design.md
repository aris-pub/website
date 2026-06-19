---
title: "Scholarly Interface Design"
date: 2026-08-01
author: "Leo Torres"
description: "Scholarly publishing has spent thirty years arguing about access. It has barely begun arguing about what readers do with the artifact once they have it. That second argument is the missing discipline. An essay naming it."
tags: ["essay", "scholarly-interface-design", "post-pdf"]
---

# Scholarly Interface Design<span style="color: #AD71F2; font-size: 1.5em;">.</span>

<p style="font-size: 1.25em; color: #555; font-style: italic; margin-top: -0.5em; margin-bottom: 1.5em;">
Designing how scientific research is packaged, distributed, read, annotated, and
transformed, whether it is on desktops or on phones, by humans or AI agents, standalone
or alongside data and code, has become a field of work with rapid and active innovation.
It still has no name.
</p>

*August 1, 2026 • Leo Torres*

## Why the field exists

Scholarly publishing has spent thirty years arguing about the distribution of research
artifacts (open access, paywalls, mandates, transformative agreements). It has barely
begun arguing about what the reader does with that artifact (paper, figures, data, code)
once they have it. That second argument is the missing discipline. It exists in
practice, scattered across initiatives and venues, without a name common to this work.
At Aris we have been calling it **scholarly interface design**.

Three shifts make the second argument urgent. Reading not only happens at a desk with a
printed page but also on phones during commutes, on a small screen on the couch, or
hurriedly between meetings. The journal's name no longer carries the weight it once did,
because AI is flooding every venue with similar-looking content and the conventional
markers of quality (impact factor, citation count, peer review) are eroding. AI agents
themselves are a growing share of who reads scholarly work, parsing, summarizing, and
surfacing it for human downstream consumers, which means the artifact has to serve them
too.

Examples of this work abound. Prominent publishers, including Nature, Science and arXiv,
ship HTML versions of papers. Curvenote and MyST build authoring stacks. Typst is
gaining ground as a modern LaTeX replacement. Research groups study how readers
consume scientific research. New protocols such as `atproto.science` provide a
decentralized infrastructure. Aris ships HTML-native scholarly publishing. Solutions
exist, and collectively they are starting to take shape as a new field of innovation.

## What it is

Scholarly interface design takes the surface between research artifact and reader as its
primary object. The discipline asks what the reader does between encountering the
artifact and judging it: what signals reach them about the work and its authors, which
signals get lost in transit, and what the substrate (the format and infrastructure
carrying the artifact: HTML, semantic markup, federated records, archival storage)
carries from research into judgment and what it drops. The working space of the
discipline runs across substrate, vocabulary, methods, and venues.

The name "scholarly interface design" is one of several candidates already in
circulation. The [AAAI Bridge on AI for Scholarly
Communication](https://sites.google.com/view/ai4sc) uses "AI4SC" to foreground the AI
dimension. The University of Washington's [Interactive Data
Lab](https://idl.cs.washington.edu) (UW IDL) writes about "augmented scholarly
communication," foregrounding augmentation. [Distill](https://distill.pub) and its heirs
([transformer-circuits.pub](https://transformer-circuits.pub), [Bartosz
Ciechanowski](https://ciechanow.ski)) speak of "interactive scientific publishing,"
foregrounding the artifact's digital medium. "Scholarly interface design" foregrounds
the surface itself as a design object. These names overlap in scope but emphasize
different things. Aris uses "scholarly interface design" because that framing fits how
Aris approaches the work: by focusing on the interface as the goal unto itself.

## The work

For the last few decades, scientific dissemination has occurred mainly by sharing PDF
files. *What comes after PDF?* The question is not new, but it has stopped being
hypothetical, and a cluster of related open questions is forming around it:

- **What comes after PDF?** If the publishable scholarly artifact is no longer a
  printable document, what shape does it take?
- **Who owns the artifact?** A PDF belongs to whoever has the file. For HTML or
  interactive content, ownership becomes a tangle of server hosting, licensing, and
  source control.
- **How do readers know what to trust?** When AI floods the literature with
  research-shaped generated content, what signals survive?
- **How does the artifact stay accessible across decades?** A PDF on a hard drive opens
  10 years later. A React application depends on build tools, npm packages, and browser
  runtime behavior that may not exist or behave the same way 10 years later.
- **How does the format serve human and AI readers?** Semantic markup, machine-readable
  metadata, attribution chains.
- **How does it carry reproducibility, integrity, and accountability signals?** Code and
  data availability, named-author attribution, version history.
- **What do readers actually do with the artifact?** Where they look, what they skim,
  what they trust on first read.

## The people doing it

The work is happening across many independent initiatives, each with its own venue,
vocabulary, and reading list. Read by venue and method, it falls into recognizable
clusters.

### The clusters

Major reader-augmentation work runs out of [Ai2](https://allenai.org) and the
University of Washington. [Semantic
Reader](https://www.semanticscholar.org/product/semantic-reader), developed across Ai2,
UW, and Berkeley, has shipped a series of prototype interfaces and run extensive user
studies. Its production features include citation cards, skimming highlights, and
term tooltips. Living Papers at UW IDL, led by Jeff Heer, extends this work into the artifact itself.
Heer's group has been publishing on scholarly-reading interfaces at UIST and CHI for
years. At UC Berkeley, [Marti Hearst](https://people.ischool.berkeley.edu/~hearst/)'s
group at the School of Information has shipped
[ScholarPhi](https://scholarphi.org) (definition tooltips, equation diagrams) and Paper
Plain (making medical papers more approachable for non-experts). The AAAI Bridge on AI
for Scholarly Communication, inaugural in 2025, is the first formal academic venue
specifically dedicated to AI in scholarly communication.

Authoring tools form a second cluster, often centered on executable research (code,
narrative, and dataset bundled as one executable artifact) as the publishable unit.
[Quarto](https://quarto.org) (Posit) is accelerating, recently shipping `llms.txt`
support and PDF/UA accessibility commitments. [MyST](https://mystmd.org) and Jupyter
Book 2 ([Curvenote](https://curvenote.com)) presented at SciPy 2025 and convened the
Continuous Science Foundation in Banff in May 2025. [Stencila v2](https://stencila.io), Astera-funded and full-time, powers the
[eLife](https://elifesciences.org) Executable Research Article pipeline and GigaScience.
[Typst](https://typst.app), the Rust-based typesetting system, takes a different bet:
high-quality typography for PDF output, with
[variable font support shipped in version 0.15](https://typst.app/blog/2026/typst-0.15)
(June 2026). [Manubot](https://manubot.org) remains operational. Authorea was acquired by Wiley and
now powers their "Under Review" backend.

The space around reading and annotating papers is in flux. [PubPub](https://www.pubpub.org),
hosted by the [Knowledge Futures Group](https://www.knowledgefutures.org), announced in
June 2025 that the centrally-hosted platform shuts down at the end of 2025 with legacy
support sunset in December 2026. KFG itself is contracting because of funding shifts.
[Hypothes.is](https://web.hypothes.is) saw Cornell transition to Perusall in 2025. The
[Journal of Open Source Software (JOSS)](https://joss.theoj.org) continues to operate.
[microPublication Biology](https://www.micropublication.org) at Caltech publishes
single-figure-unit artifacts. [Nanopublications](http://nanopub.org) ran a tutorial at
the Extended Semantic Web Conference in 2025 (Tobias Kuhn). [Semble](https://semble.so),
built on AT Protocol by [Cosmik](https://www.cosmik.network), is the decentralized-protocol
entry in this space: readers save links as cards into collections, with planned
collaborative collections and a browser extension. It sits on the curation side rather
than the annotation side, but in the same gap PubPub leaves behind.

Discovery has many active tools, each taking a different bet on what the reader needs to
evaluate after a search returns. [Elicit](https://elicit.com),
[Undermind](https://undermind.ai), [Consensus](https://consensus.app),
[Scite](https://scite.ai), and [SciSpace](https://scispace.com) each frame the
post-search interface differently. PaperOrchestra (Google Cloud AI Research, 2025)
experiments with experimental-log-to-manuscript pipelines.
[ResearchHub](https://www.researchhub.com) runs a crypto-incentivized peer review
experiment, partnered with the [Center for Open Science](https://www.cos.io) on the
Lifecycle Journal in January 2025. The [Open Research Knowledge Graph](https://orkg.org)
at [TIB Hannover](https://www.tib.eu), led by Sören Auer, takes a different approach:
machine-actionable representation of scholarly contributions, with TIB also organizing
the AAAI Bridge AI4SC venue.

A smaller cluster works on rethinking the paper's format and structure.
[Octopus](https://www.octopus.ac) has been active under Alex Freeman, now Principal of
Hertford College at Oxford and co-author of the July 2025 "Innovating Scholarly
Communication" report. [Discourse Graphs](https://discoursegraphs.com) is a practice for
representing scholarly claims and evidence as composable nodes, with tooling that runs
inside personal-knowledge-management platforms (Roam Research, Obsidian). It approaches
the structure question from the reader and note-taking side, where Octopus approaches it
from the formal-publishing side. [Kotahi Foundation](https://kotahi.community) spun out of
[Coko](https://coko.foundation) in January 2025 (Adam Hyde CEO) on the
production-workflow side. Coko retains Ketida as a book platform with a Mellon renewal.

Decentralized publishing tools are emerging on AT Protocol, which offers a different
identity model and typed schemas than ActivityPub. The
[atproto.science](https://atproto.science) community, founded in early 2025 by Ronen
Tamari ([Cosmik](https://www.cosmik.network)/[Semble](https://semble.so)), Torsten Goerke
(TU Dresden), and Barry Prendergast, held the first ATScience conference in Vancouver in
March 2026. Sixteen-plus projects sit in the ecosystem, with
[Chive](https://chive.pub) running decentralized preprints out of U. Rochester under
Aaron White, [Lanyards](https://lanyards.app) building researcher profiles, Semble
handling curation, [Paperstars](https://paperstars.org) running post-publication review,
and Margin.at and Seams.so doing annotation.

Distill, founded in 2017 by a group of ML researchers including Chris Olah, established
that interactive scientific publishing could function as a peer-reviewed, citable,
archivable venue. Distill went dormant in 2021, but its formal apparatus survives.
Transformer-circuits.pub at Anthropic (Olah and successors, monthly Circuits Updates,
the March 2025 circuit-tracing release with an open-sourced interactive
attribution-graph explorer) is an active institutional Distill-heir. Sam Rose, who
joined ngrok in September 2025, publishes LLM visual explainers in the same tradition.
Bartosz Ciechanowski and [Andy Matuschak](https://andymatuschak.org) publish individual
explainers.

Each cluster tends to have its own venue, vocabulary, and reading list, though some
practitioners move across boundaries (Cockett keynoted ATScience, Carpenter at NISO
publishes for the whole field, the AI4SC Bridge convenes participants from multiple
clusters).

### Two long-running efforts

Two groups have been working in this space for years, at significant scale and with
sustained funding.

Curvenote, MyST, and the Continuous Science Foundation form one of the more coordinated
efforts. Rowan Cockett convened CSF in Banff in May 2025, bringing together the people building
authoring tools for science around a shared production-grade rendering and publishing
stack, MyST Markdown and Jupyter Book 2 form the technical center, with Curvenote providing
hosting, rendering, and integration with traditional publishing flows. Their work
centers on executable research as the publishable unit: code, narrative, dataset, and
rendered artifact as one publication. Cockett keynoted ATScience
in March 2026. The technical approach is React-application substrates owned by the
platform, integrated with the authoring tools. The premise: platforms can host the
substrate credibly enough that researchers adopt them at scale.

Stencila under Nokome Bentley has been working in this space for years, building
publishing software that runs in real journals. Funded by the
[Astera Institute](https://astera.org) and full-time, it is built on Rust, CRDTs
(conflict-free replicated data types for real-time collaboration), and LLM-assisted
tooling. Stencila v2 powers the [eLife](https://elifesciences.org) Executable Research
Article pipeline and runs behind [GigaScience](https://academic.oup.com/gigascience)'s
publication flow. Stencila pursues the same executable-research direction as Curvenote,
but with different technical choices: open formats, content-addressable records, and
durability across infrastructure changes. Stencila's framing is publishing software as a
multi-decade infrastructure problem.

## The answers, and where they diverge

Across these venues, vocabularies, methods, and institutional buildings, much of the
work overlaps. The shared moves are visible even when the labels differ.

Where they diverge is a less-visible choice: what kind of underlying format and hosting
scholarly artifacts should live on. The options range from
PDFs served from a publisher, to React applications served from a platform, to semantic
HTML that can be hosted anywhere, to federated records distributed across protocols.
Each of these (call it the substrate) determines who owns the artifact, who can preserve
it without depending on a platform, and who can be held accountable for the work over
time. "Post-PDF publishing" is becoming a common phrase. The underlying substrate question
gets less explicit discussion.

Three projects are working different angles of this. They take different substrate bets,
and one of the three is Aris's own. Comparing the three side by side makes the bets
clearest.

### PLOS Knowledge Stack (modern-journal substrate)

In May 2026, Alison Mudditt (PLOS CEO) and [PLOS](https://plos.org) published ["Beyond the Article, Beyond the APC"](https://scholarlykitchen.sspnet.org/2026/05/28/beyond-the-article-beyond-the-apc-what-we-learned-from-18-months-of-rd/) (the Article Processing Charge, the fee authors pay to publish open-access), a
public report distilling eighteen months of research and development backed by the
Gordon and Betty Moore Foundation and the Robert Wood Johnson Foundation, with economic
analysis by the research consulting firm Technopolis Group and approximately 650
researcher user-centered design interviews. The Knowledge Stack is the
substrate-side architecture: a structured, open, machine-readable record that connects
articles, preprints, data, code, and protocols with attribution and provenance, designed
to answer AI-mediated questions about origin, authorship, and dependencies.

The framing PLOS lands on is "checkability," not validation. Full validation of data and
code at scale is infeasible. Checkability signals transparency to allow calibrated
trust. One of the report's findings: "disconnected repository links are routinely ignored, even
when underlying data is well-documented." Context and narrative, on PLOS's reading, are
the mechanisms by which research outputs become usable.

PLOS's substrate bet is that a reformed journal article, supplemented by an open
machine-readable record, is enough to deliver durability, accountability, and
machine-readability without leaving the journal model. The substrate runs through the
journal model, with the publisher as the integration point. It is the modern-journal substrate, responding to questions also being worked on from other angles.

### openRxiv Constellation (federated-platform substrate)

In June 2026, Tracy Teal (openRxiv CEO) and [openRxiv](https://www.openrxiv.org) announced the
Constellation initiative: preprints as nodes connected to datasets, protocols, reviews,
registered reports (a peer-review format where the methodology is reviewed before
results are collected), and partner services. Partner services already named in the launch include
[PREreview](https://prereview.org) (open peer review), [PCI](https://peercommunityin.org)
(Peer Community In, community-led peer review), eLife,
[SciScore](https://sciscore.com) (automated reproducibility scoring),
[Dryad](https://datadryad.org) (a long-running research data repository), and Curvenote. The architecture is a
federation: openRxiv supplies the corpus and identity layer (preprints, persistent
identifiers, accountability), and partner services supply the additional structured
objects connected to each preprint.

The technical substrate is a React application stack hosted on Curvenote infrastructure
for the interactive reading experience ([Curvenote Reader, launched June
2026](https://connect.medrxiv.org/news/2026/06/11/curvenote_reader_launch)), with the
underlying preprint corpus in openRxiv's archives. The substrate bet is that federation across multiple partners can
move faster than any single substrate could.

The Constellation diverges from publisher-owned and researcher-owned alternatives.
Federation across partners offers broader reach. The substrate choice (React on
Curvenote infrastructure) makes different tradeoffs on long-term durability than
open-format alternatives.

### ARCH 1.0 (open-durable-format substrate)

[ARCH 1.0](https://aris.pub/arch/1.0/), published in June 2026, is the open-durable-format
substrate. The Accessible Research Charter for Hypertext specifies what a durable,
accessible, archivable web-native research document looks like, with restrictions
oriented around two goals: archival durability across decades and the integrity of the
scholarly content itself. The specification requires semantic HTML for the scholarly
content, named-author accountability, content-addressable storage (the artifact
identified by a hash of its content, not by a server URL), and durability across the
publishing infrastructure of the next decade. The substrate commitment is that the
publishable artifact must outlast the platform that hosts it.

ARCH is open and freely implementable, and its bet is that durability and accountability
live in the format rather than in the hosting infrastructure. The specification requires
the scholarly content of the artifact to be present in plain HTML, with JavaScript
features layered as progressive enhancement. In practice this means ARCH gives up the
kind of fully interactive artifacts that Curvenote and Stencila can deliver: live
visualizations, runnable code cells, real-time data exploration that requires the
runtime. That is a real tradeoff. ARCH is one answer to the substrate
question, and whether the field adopts ARCH, adopts something else, or arrives at the
answer through convergence is open.

These three approaches do not exhaust the field. They cover three different layers
(modern-journal, federated-platform, open-durable-format) at which the work is happening.

## What's still missing, and what's next

The field has practitioners, conferences, and methods, but not yet a unified discipline.
The missing work is unglamorous: a shared vocabulary, a common name for the work, and
gathering places (whether academic conferences, community workshops, or open-source
convenings) where practitioners from across these clusters can meet and engage with each
other's work.

Vocabulary work matters first because shared vocabulary is the precondition for
everything else. Todd Carpenter, Executive Director of [NISO](https://www.niso.org) (the National Information Standards Organization), published in June 2026 [a vocabulary piece distinguishing attribution, provenance, citation, and reference](https://scholarlykitchen.sspnet.org/2026/06/17/attribution-provenance-reference-citation-and-ai-for-research-applications-understanding-the-differences/): terms scholarly
interface design now has a reason to adopt rigorously. Mudditt's "checkability" contributes vocabulary for talking about trust signals from
the publisher-reform side, Heer's user-study methodology supplies an empirical
vocabulary, and the Distill tradition contributes vocabulary for treating an interactive
article as a citable scholarly object. Bringing these vocabularies together would give
practitioners a common language.

Venues come second. AAAI Bridge AI4SC is the inaugural academic-side venue, ATScience
2026 is the inaugural decentralized-protocol venue ([atproto.science](https://atproto.science)), and the CSF Banff gathering is the
inaugural authoring-tools coalition venue. The Knowledge Futures Group transition leaves
a vacuum in the open-source publishing-platform niche. The field needs venues that publish
across these silos. A venue that runs work from three or four of these clusters in the
same proceedings would make the cross-cluster overlap visible. No such venue exists yet.

These needs are coalition work, not individual work. Naming the field is one start.

Scholarly interface design is one candidate name for what is happening across these
initiatives. The work is real. What is missing is the agreement, and a shared name is
the wedge.

Aris's bet is that the format itself carries durability.
[ARCH 1.0](https://aris.pub/arch/1.0/) is the spec, [Press](https://press.aris.pub) is
the archive built to it, and [RSM Studio](https://rsm.studio) is the editor that
produces it. The whole stack assumes scholarly work should outlast the platforms that
host it, including ours.
