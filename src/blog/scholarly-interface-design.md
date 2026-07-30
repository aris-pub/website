---
title: "A budding discipline around how science gets read and judged"
date: 2026-07-30
author: "Leo Torres"
description: "Scholarly publishing spent thirty years arguing about access. It has barely begun arguing about what readers do with the paper once they have it. At Aris we call that second argument scholarly interface design. Mike Morrison's community calls it ScienceUX. Either way it is becoming a field, and here is why it is worth your attention."
tags: ["essay", "scholarly-interface-design", "post-pdf"]
---

# A budding discipline around how science gets read and judged

<p style="font-size: 1.25em; color: #555; font-style: italic; margin-top: -0.5em; margin-bottom: 1.5em;">
Designing how research gets packaged, read, annotated, and transformed, on any screen, by
humans or AI agents, has become a field of its own. At Aris we call it scholarly interface
design, others call it ScienceUX.
</p>

*July 30, 2026 • Leo Torres*

## Why the field exists

Scholarly publishing has spent thirty years arguing about the distribution of research
artifacts (open access, paywalls, mandates, transformative agreements). It has barely
begun arguing about what the reader does with that artifact (paper, figures, data, code)
once they have it. That second argument is a discipline coming into focus. It exists in
practice, scattered across initiatives and venues, and it is beginning to name and organize itself.
At Aris we have been calling it **scholarly interface design**, others call it ScienceUX.

Three recent shifts make this argument urgent. Reading not only happens at a desk with a
printed page but also on phones during commutes, on a small screen on the couch, or
hurriedly between meetings. The journal's name no longer carries the weight it once did,
because AI is flooding every venue with similar-looking content and the conventional
markers of quality (impact factor, citation count, peer review) are eroding. AI agents
themselves are a growing share of who reads scholarly work, parsing, summarizing, and
surfacing it for human downstream consumers, which means the artifact has to serve them
too.

Examples of reader-facing innovations abound. Prominent publishers, including Nature, Science and arXiv,
ship HTML versions of papers. Curvenote and MyST build authoring stacks. Typst is
gaining ground as a modern LaTeX replacement. Research groups study how readers
consume scientific research. New protocols such as `atproto.science` provide a
decentralized infrastructure. Aris ships HTML-native scholarly publishing. Solutions
exist, and collectively they are starting to take shape as a new field of innovation.

## What it is

Scholarly interface design takes the surface between research artifact and reader as its
primary object. The discipline asks what the reader does between encountering the
artifact and judging it: what signals reach them about the work and its authors, which
signals get lost in transit, and what is carried from the author's research into the
reader's judgment and what is dropped.

The name "scholarly interface design" is one of several candidates already in
circulation. The [AAAI Bridge on AI for Scholarly
Communication](https://sites.google.com/view/ai4sc) uses "AI4SC" to emphasize the AI
dimension. The University of Washington's [Interactive Data
Lab](https://idl.cs.washington.edu) (UW IDL) writes about "augmented scholarly
communication," emphasizing augmentation. [Distill](https://distill.pub) and its heirs
([transformer-circuits.pub](https://transformer-circuits.pub), [Bartosz
Ciechanowski](https://ciechanow.ski)) speak of "interactive scientific publishing,"
emphasizing the artifact's digital medium. Mike Morrison, creator of the viral [#betterposter](https://www.youtube.com/watch?v=1RwJbhkCA58) movement, runs [ScienceUX](https://scienceux.org/), a journal and community that names the field ["Science UX"](https://www.youtube.com/watch?v=XVM86B8VNz0) and emphasizes usability and design craft. "Scholarly interface design" emphasizes
the surface itself as a design object. These names overlap in scope but emphasize
different things. Aris uses "scholarly interface design" because that framing fits how
Aris approaches the work: by focusing on the interface as the goal unto itself.

## The work

For the last few decades, scientific dissemination has occurred mainly by sharing PDF
files. "Post-PDF publishing" is becoming a common phrase. *What comes after PDF?* The question is not new, but it has stopped being
hypothetical, and a cluster of related open questions is forming around it:

- **What comes after PDF?** If the publishable scholarly artifact is no longer a
  printable document, what shape does it take?
- **Who owns the artifact?** A PDF belongs to whoever has the file. For HTML or
  interactive content, ownership becomes a tangle of server hosting, licensing, and
  source control.
- **How do readers know what to trust?** When AI floods the literature with
  research-shaped generated artifacts, what signals survive?
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
[variable font support](https://typst.app/blog/2026/typst-0.15). Authorea was acquired by Wiley and
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
from the formal-publishing side. Curvenote's newly released [OXA](https://oxa.dev) (Open Exchange Architecture) format publishes science as modular, connected components (narrative, data, and code) rather than one flat document. [Kotahi Foundation](https://kotahi.community) spun out of
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
[Transformer-circuits.pub](https://transformer-circuits.pub) from Anthropic (Olah and successors) is an active institutional Distill-heir. [Sam Rose](https://samwho.dev), who
joined ngrok in September 2025, publishes LLM visual explainers in the same tradition.
Bartosz Ciechanowski and [Andy Matuschak](https://andymatuschak.org) publish individual
explainers.

Each cluster tends to have its own venue, vocabulary, and reading list, though some
practitioners move across boundaries, they all in one way or another work on the design
and innovation of the artifact-reader surface.

## The answers, and where they diverge

Across these venues, vocabularies, methods, and institutions, much of the
work overlaps. The shared moves are visible even when the labels differ.

Where they diverge: what kind of underlying format and hosting
scholarly artifacts should live on. The options range from
PDFs served from a publisher, to React applications served from a platform, to semantic
HTML that can be hosted anywhere, to federated records distributed across protocols.
Each of these (call it the base layer) determines who owns the artifact, who can preserve
it without depending on a platform, and who can be held accountable for the work over
time. The base layer question
gets less explicit discussion.

Three projects are working different angles of this. They take different base layer bets,
and one of the three is Aris's own.

### PLOS Knowledge Stack (modern-journal base layer)

In May 2026, Alison Mudditt (PLOS CEO) and [PLOS](https://plos.org) published ["Beyond the Article, Beyond the APC"](https://scholarlykitchen.sspnet.org/2026/05/28/beyond-the-article-beyond-the-apc-what-we-learned-from-18-months-of-rd/) (the Article Processing Charge, the fee authors pay to publish open-access), a
public report distilling eighteen months of research and development backed by the
Gordon and Betty Moore Foundation and the Robert Wood Johnson Foundation, consisting of ~650
researcher user-centered design interviews. The Knowledge Stack architecture is a structured, open, machine-readable record that connects
articles, preprints, data, code, and protocols with attribution and provenance, designed
to answer AI-mediated questions about origin, authorship, and dependencies.

The framing PLOS lands on is "checkability," not validation. Full validation of data and
code at scale is infeasible. Checkability signals transparency to allow calibrated
trust. One of the report's findings: "disconnected repository links are routinely ignored, even
when underlying data is well-documented." Context and narrative, on PLOS's reading, are
the mechanisms by which research outputs become usable.

PLOS's base layer bet is that a reformed journal article, supplemented by an open
machine-readable record, is enough to deliver durability, accountability, and
machine-readability without leaving the journal model. This proposal relies on the
journal model, with the publisher as the integration point. It is the modern-journal base layer, responding to questions also being worked on from other angles.

### openRxiv Constellation (federated-platform base layer)

In June 2026, Tracy Teal (openRxiv CEO) and [openRxiv](https://www.openrxiv.org) announced the
Constellation initiative: preprints as nodes connected to datasets, protocols, reviews,
registered reports, and partner services. Partner services already named in the launch include
[PREreview](https://prereview.org) (open peer review), [PCI](https://peercommunityin.org)
(Peer Community In, community-led peer review), eLife,
[SciScore](https://sciscore.com) (automated reproducibility scoring),
[Dryad](https://datadryad.org) (a long-running research data repository), and Curvenote. The architecture is a
federation: openRxiv supplies the corpus and identity layer (preprints, persistent
identifiers, accountability), and partner services supply the additional structured
objects connected to each preprint.

The technical base layer is a React application stack hosted on Curvenote infrastructure
for the interactive reading experience ([Curvenote Reader, launched June
2026](https://connect.medrxiv.org/news/2026/06/11/curvenote_reader_launch)), with the
underlying preprint corpus in openRxiv's archives. The base layer bet is that federation across multiple partners can
move faster than any single base layer could.

The Constellation diverges from publisher-owned and researcher-owned alternatives.
Federation across partners offers broader reach. The base layer choice (React on
Curvenote infrastructure) makes different tradeoffs on long-term durability than
open-format alternatives.

### ARCH 1.0 (open-durable-format base layer)

[ARCH 1.0](https://aris.pub/arch/1.0/), published in June 2026, is the open-durable-format
base layer. The Accessible Research Charter for Hypertext specifies what a durable,
accessible, archivable web-native research document looks like, with restrictions
oriented around two goals: archival durability across decades and the integrity of the
scholarly content itself. The specification requires semantic HTML for the scholarly
content, named-author accountability, content-addressable storage (the artifact
identified by a hash of its content, not by a server URL), and durability across the
publishing infrastructure of the next decade. The base layer commitment is that the
publishable artifact must outlast the platform that hosts it.

ARCH is open and freely implementable, and its bet is that durability and accountability
live in the format rather than in the hosting infrastructure. The specification requires
the scholarly content of the artifact to be present in plain HTML, with JavaScript
features layered as progressive enhancement. In practice the interactive features, live
visualizations, runnable code cells, real-time data exploration, are layered on top of a
plain-HTML rendering of the scholarly content rather than being the only way to reach
it. An ARCH-compliant document can be just as interactive as one served via Curvenote or
Stencila. What it rules out is content that exists only inside a runtime, with no
durable form underneath. That is the real tradeoff. ARCH is one answer to the
base layer question, and whether the field adopts ARCH, adopts something else, or
arrives at the answer through convergence is open.

These three approaches do not exhaust the field. They cover three different perspectives
(modern-journal, federated-platform, open-durable-format) at which the work is happening.

## The institutional half, and what it isn't doing

Alongside the design and base layer work, a parallel effort is under way to reform the
institutional conditions around scholarly research: incentives, policies, standards
coordination, funder mandates, society partnerships. On June 29, 2026, ICOR
([Incentivizing Collaborative Open Research](https://incentivizingopen.org)) convened
Public Meeting #11, spun out from the National Academies' Roundtable on Aligning
Incentives for Open Science. The room brought together the editorial leadership of
arXiv, bioRxiv, PLOS, F1000, Crossref, and the Continuous Science Foundation, alongside
library, funder, and metascience voices. The Action Collaborative laid out five
workstreams: research assembly, record of versions, verification and trust signals,
review, and curation and synthesis. The Open Exchange Architecture
([OXA](https://oxa.dev)), Rowan Cockett's Curvenote-adjacent open interchange AST, was
announced as running behind openRxiv's translation of all 560,000+ bioRxiv and medRxiv
preprints. NISO approved a Working Group on Trust Markers. PLOS declared "Beyond the
APC" as a strategic pillar.

The ICOR conversation is doing work scholarly interface design does not. It is the
institutional half of the same field: coalition-building, incentive reform, standards
governance, ecosystem coordination. Naming that half separately makes the design half
easier to see. Scholarly interface design does not compete with the ICOR agenda. It is
the design-side complement to it, working on the artifact itself where the institutional
effort works on policy and governance.

Two threads the institutional half is not engaging with are exactly the threads that
make the design half urgent. The convening said almost nothing about AI as a reader. Yet
AI systems are increasingly the first, and sometimes the only, reader a scholarly
artifact meets: retrieval-augmented systems consume preprints, agents summarize methods
for downstream users, tools compose citations from artifacts they never render. The
design surface has to serve that reader alongside the human one. It said almost nothing
about mathematics either, which sits at an unusual angle to the reforms: the field has
arXiv's base layer advantage but has not yet been part of the interface-and-format
conversation that life sciences are running. Both threads mark territory the design half
needs to make its own.

## What's still missing, and what's next

The field has practitioners, conferences, methods, and now the beginnings of its own communities and names, but not yet a unified discipline that spans the clusters.
The work still ahead is unglamorous: a shared vocabulary, a common frame the separate camps recognize, and
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
2026 is the inaugural decentralized-protocol venue
([atproto.science](https://atproto.science)), and the CSF Banff gathering is the
inaugural authoring-tools coalition venue, and [ScienceUX](https://scienceux.org/) is a
standing journal and community for the design-craft side. The Knowledge Futures Group
transition leaves a vacuum in the open-source publishing-platform niche. The field needs
venues that publish across these silos. A venue that runs work from three or four of
these clusters in the same proceedings would make the cross-cluster overlap visible. No
such venue exists yet.

Scholarly interface design is Aris's name for what is happening across these
initiatives. The work is real and the discipline is forming now. What is still missing
is agreement across the clusters, worth building toward whatever shape it ends up taking.

Aris's bet is that durability and accountability belong in the open format itself, not in
the platform that hosts it. [ARCH 1.0](https://aris.pub/arch/1.0/) is that format,
[Press](https://press.aris.pub) is the archive built on it, and
[RSM Studio](https://rsm.studio) is the first editor that produces compliant documents,
though other implementations are possible and encouraged. The point is
that scholarly work should outlast the platforms that host it, ours included.
