---
title: "Scholarly Interface Design"
date: 2026-08-01
author: "Leo Torres"
description: "Scholarly publishing has spent thirty years arguing about access. It has barely begun arguing about what readers do with the artifact once they have it. That second argument is the missing discipline. An essay naming it."
tags: ["essay", "scholarly-interface-design", "post-pdf"]
---

# Scholarly Interface Design<span style="color: #AD71F2; font-size: 1.5em;">.</span>

<p style="font-size: 1.25em; color: #555; font-style: italic; margin-top: -0.5em; margin-bottom: 1.5em;">Designing how scientific research is read, on phones, by AI agents, alongside data and code, has become a field. It still has no name.</p>

*August 1, 2026 • Leo Torres*

## Why the field exists

Scholarly publishing has spent thirty years arguing about the distribution of research
artifacts (open access, paywalls, mandates, transformative agreements). It has barely
begun arguing about what the reader does with that artifact (paper, figures, data, code)
once they have it. That second argument is the missing discipline. It exists in
practice, scattered across initiatives and venues, without a name common to this work.
At Aris we have been calling it **scholarly interface design**.

Three shifts make the second argument urgent. Reading no longer happens at a desk with a
printed page but on phones in commutes, in beds, between meetings. The journal's name no
longer carries the weight it once did, because AI is flooding every venue with
similar-looking content and the conventional markers of quality (impact factor, citation
count, peer review) are eroding. AI agents themselves are a growing share of who reads
scholarly work, parsing, summarizing, and surfacing it for human downstream consumers,
which means the artifact has to serve them too.

Examples of this work abound. Nature and arXiv ship HTML versions of papers. Curvenote
and MyST build authoring stacks. Typst just shipped support for variable fonts. The
University of Washington's Interactive Data Lab studies what readers do. atproto.science
prototypes a decentralized substrate. Aris ships HTML-native scholarly publishing.
Solutions exist, the discipline does not.

## What it is

Scholarly interface design takes the artifact-reader surface as its primary object. The
discipline asks what the reader does between encountering the artifact and judging it:
what signals reach them about the work and its authors, which signals get lost in
transit, and what the substrate (the format and infrastructure carrying the artifact:
HTML, semantic markup, federated records, archival storage) carries from research into
judgment and what it drops. The working space of the discipline runs across substrate,
vocabulary, methods, and venues.

The name "scholarly interface design" is one of several candidates already in
circulation. The [AAAI Bridge on AI for Scholarly Communication](https://sites.google.com/view/ai4sc)
uses "AI4SC" to foreground the AI dimension. Heer's group at the
[University of Washington's Interactive Data Lab](https://idl.cs.washington.edu) (UW IDL)
writes about "augmented scholarly communication," foregrounding
augmentation. [Distill](https://distill.pub) and its heirs
([transformer-circuits.pub](https://transformer-circuits.pub),
[Bartosz Ciechanowski](https://ciechanow.ski)) speak of "interactive scientific
publishing," foregrounding the artifact's medium. "Scholarly interface design" foregrounds the surface
itself as a design object. Multiple names for the same object are themselves the
discipline-naming move in progress: the candidates overlap in scope, diverge in emphasis,
and converge on the work. Aris uses "scholarly interface design" because surface-as-
design-object is the most generative starting point, the framing that pulls the other
emphases (AI, augmentation, medium) toward a single coherent discipline rather than
toward three parallel sub-fields.

## The work

What comes after PDF? The field exists because that question has stopped being
hypothetical. Every group named in this essay has begun answering it. Their answers
diverge, but the questions they share are recognizable:

- **What comes after PDF?** If the publishable scholarly artifact is no longer a
  printable document, what shape does it take?
- **Who owns the artifact?** When the format is HTML or interactive, what does
  ownership mean: the server, the license, the source repository, the hash?
- **How do readers know what to trust?** When AI floods the substrate with
  similar-looking content, what signals survive?
- **How does the artifact stay accessible across decades?** PDFs survive on hard
  drives. React applications do not.
- **How does the format serve both human and AI readers?** Semantic markup,
  machine-readable metadata, attribution chains.
- **What do readers actually do with the artifact?** Where they look, what they skim,
  what they trust on first read.

These are open questions in the sense that the field's groups have proposed answers,
but no answer has crossed cluster boundaries to become a consensus.

## The people doing it

The field does not look like a field yet. It looks like practitioners scattered across
initiatives. Read by venue and method, the work falls into separable clusters, and no
shared vocabulary connects them across cluster boundaries.

### The clusters

The strongest reader-augmentation work runs out of [Ai2](https://allenai.org) and the
University of Washington.
[Semantic Reader](https://www.semanticscholar.org/product/semantic-reader), developed
across Ai2, UW, and Berkeley, has shipped a series of prototype interfaces and run
extensive user studies. Its production features (TLDR citation cards, skimming
highlights, term tooltips) are scholarly interface design without that name. Living
Papers at UW IDL extends the same work into the artifact itself. At UC Berkeley,
[Marti Hearst](https://people.ischool.berkeley.edu/~hearst/)'s group at the School of
Information works the same problem from a different angle, having shipped
[ScholarPhi](https://scholarphi.org) (definition tooltips, equation diagrams) and Paper
Plain (medical-paper approachability). The AAAI Bridge on AI for Scholarly
Communication, the inaugural year of which was 2025, is the first formal academic venue
for the discipline.

Authoring tools form a second cluster, converging on executable research (code,
narrative, and dataset bundled as one executable artifact) as the publishable unit.
[Quarto](https://quarto.org) (Posit) is accelerating, recently shipping `llms.txt`
support and PDF/UA accessibility commitments. [MyST](https://mystmd.org) and Jupyter
Book 2 ([Curvenote](https://curvenote.com)) presented at SciPy 2025 and convened the
Continuous Science Foundation in Banff in May 2025, the most coordinated coalition in the
field. [Stencila v2](https://stencila.io), Astera-funded and full-time, powers the
[eLife](https://elifesciences.org) Executable Research Article pipeline and GigaScience.
[Typst](https://typst.app), the Rust-based typesetting system, takes a different bet:
high-quality typography for PDF output, with
[variable font support shipped in version 0.15](https://typst.app/blog/2026/typst-0.15)
(June 2026). [Manubot](https://manubot.org) is in quiet maintenance. Authorea, acquired by Wiley,
now operates as their "Under Review" backend.

The space around reading and annotating papers is in flux. [PubPub](https://www.pubpub.org),
hosted by the [Knowledge Futures Group](https://www.knowledgefutures.org), announced in
June 2025 that the centrally-hosted platform shuts down at the end of 2025 with legacy
support sunset in December 2026. KFG itself is contracting because of funding shifts.
[Hypothes.is](https://web.hypothes.is) is losing institutional ground (Cornell announced
a 2025 transition to Perusall). The
[Journal of Open Source Software (JOSS)](https://joss.theoj.org) remains stable.
[microPublication Biology](https://www.micropublication.org) at Caltech is doing real
single-figure-unit artifact work. [Nanopublications](http://nanopub.org), niche but real,
ran a tutorial at the Extended Semantic Web Conference in 2025 (Tobias Kuhn).

Discovery is the field's noisiest area, with multiple tools taking different bets on
what the reader needs to evaluate after a search returns. [Elicit](https://elicit.com),
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
Communication" report. [Kotahi Foundation](https://kotahi.community) spun out of
[Coko](https://coko.foundation) in January 2025 (Adam Hyde CEO) on the
production-workflow side. Coko retains Ketida as a book platform with a Mellon renewal.

Decentralized publishing tools are emerging, betting that AT Protocol's identity model
and typed schemas can carry scholarly metadata in ways ActivityPub cannot. The
[atproto.science](https://atproto.science) community, founded in early 2025 by Ronen
Tamari ([Cosmik](https://www.cosmik.network)/[Semble](https://semble.so)), Torsten Goerke
(TU Dresden), and Barry Prendergast, held the first ATScience conference in Vancouver in
March 2026. Sixteen-plus projects sit in the ecosystem, with
[Chive](https://chive.pub) running decentralized preprints out of U. Rochester under
Aaron White, [Lanyards](https://lanyards.app) building researcher profiles, Semble
handling curation, [Paperstars](https://paperstars.org) running post-publication review,
and Margin.at and Seams.so doing annotation.

The rhetorical precedent for the discipline-naming move itself is Distill, founded in
2017 by a group of ML researchers including Chris Olah. Distill established that
interactive scientific publishing could function as a peer-reviewed, citable, archivable
venue. Distill went dormant in 2021, but its formal apparatus survives.
Transformer-circuits.pub at Anthropic (Olah and successors, monthly Circuits Updates,
the March 2025 circuit-tracing release with an open-sourced interactive
attribution-graph explorer) is the strongest active institutional Distill-heir. Sam
Rose, who joined ngrok in September 2025, publishes high-profile LLM visual explainers
in the Distill-heir tradition. Individual practitioners like Bartosz Ciechanowski and
[Andy Matuschak](https://andymatuschak.org) operate at the intersection of craft and
discipline, while adjacent
contributors work at related crosswalks: Tobias Kuhn on nanopublications, Carl Bergstrom
on evaluation reform, and Daniel Mietchen on Wikipedia-civic-infrastructure connections.

Each cluster has its own venue, vocabulary, and reading list. None of them shares these
things across cluster boundaries, but they all have aligned objectives: to transform
what scholars share, how they share it, and what happens after the reader picks it up.

### Two field-shaping efforts

Two groups have accumulated work substantive enough to shape what the discipline
becomes.

The most coordinated coalition is Curvenote, MyST, and the Continuous Science
Foundation. Rowan Cockett convened CSF in Banff in May 2025, bringing together the people building
authoring tools for science around a shared production-grade rendering and publishing
stack, with MyST Markdown and Jupyter Book 2 as the technical center and Curvenote
providing hosting, rendering, and integration with traditional publishing flows. The
coalition's commitment is to executable research as the publishable unit: code,
narrative, dataset, and rendered artifact as one publication. Cockett keynoted ATScience
in March 2026, a sign that the coalition is willing to engage decentralized substrates
as collaborators. Curvenote's June 2026 brand communications claim the phrase "post-PDF" for themselves. The structural bet underneath is that React-app substrates owned
by the platform, integrated with the authoring tools, are the right path to durable
publishable research artifacts. The bet is that platforms can host the substrate
credibly enough that researchers adopt them at scale.

Stencila under Nokome Bentley is the field's longest sustained effort to build
publishing software that actually runs in real journals, funded by the
[Astera Institute](https://astera.org) and full-time, built on Rust, CRDTs
(conflict-free replicated data types for real-time collaboration), and LLM-assisted
tooling. Stencila v2 powers the [eLife](https://elifesciences.org) Executable Research
Article pipeline and runs behind [GigaScience](https://academic.oup.com/gigascience)'s
publication flow (GigaScience is an open-data journal published by Oxford University
Press). The commitment is the same executable-research bet as Curvenote's, but the
technical choices differ: Bentley's work pursues open formats, content-addressable
records (each record retrieved by a hash of its contents rather than by a server URL,
so the artifact survives platform changes), and durability across infrastructure
changes. Stencila treats publishing software as a multi-decade infrastructure problem
rather than a feature roadmap. The methods are production: ship the software, integrate
it with real journals, instrument what readers do, fix what doesn't work. Stencila is
the discipline operating at journal scale: publishing software integrated with eLife and
GigaScience, exposed to real readers and real editorial workflows.

## The answers, and where they diverge

These practitioners are doing one discipline. They publish in different venues, use
different vocabularies, run different methods, and sit in different institutional
buildings. The discipline is recognizable in retrospect by the moves they are making,
not by the organizations they sit in.

Where they diverge is on a choice that mostly happens in the background: what kind of
underlying format and hosting scholarly artifacts should live on. The options range from
PDFs served from a publisher, to React applications served from a platform, to semantic
HTML that can be hosted anywhere, to federated records distributed across protocols.
Each of these (call it the substrate) determines who owns the artifact, who can preserve
it without depending on a platform, and who can be held accountable for the work over
time. "Post-PDF publishing" is becoming a common phrase, but these underlying questions
are largely unclaimed, which makes substrate the question the discipline organizes
around.

Three concrete answers to the discipline's question are visible in 2026. They differ on
the substrate question the field has not yet asked.

One of the three is Aris's own. The substrate question is clearest when answers are
compared side by side.

### PLOS Knowledge Stack (publisher-side answer)

In June 2026, Alison Mudditt (PLOS CEO) and [PLOS](https://plos.org) published "Beyond the Article, Beyond the APC" (the Article Processing Charge, the fee authors pay to publish open-access), a
public report distilling eighteen months of research and development backed by the
Gordon and Betty Moore Foundation and the Robert Wood Johnson Foundation, with economic
analysis by the research consulting firm Technopolis Group and approximately 650
researcher user-centered design interviews. The Knowledge Stack is the
substrate-side architecture: a structured, open, machine-readable record that connects
articles, preprints, data, code, and protocols with attribution and provenance, designed
to answer AI-mediated questions about origin, authorship, and dependencies.

The framing PLOS lands on is "checkability," not validation. Full validation of data and
code at scale is infeasible. Checkability signals transparency to allow calibrated
trust. The empirical finding worth holding: "disconnected repository links are routinely
ignored, even when underlying data is well-documented." Context and narrative, on this
finding, are the mechanisms by which research outputs become usable.

PLOS's substrate bet is that a reformed journal article, supplemented by an open
machine-readable record, is enough to deliver durability, accountability, and
machine-readability without leaving the journal model. The substrate runs
through the journal model. The publisher remains the integration point. The work is
honest, the research base is real, and the move is the publisher-side response to the
same question the rest of the field is asking. The discipline benefits from having an
explicit publisher-side answer to compare against.

### openRxiv Constellation (federated answer)

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
for the interactive reading experience, with the underlying preprint corpus in
openRxiv's archives. The substrate bet is that federation across multiple partners
produces the discipline's answer faster than any single substrate could. The
Cockett-Teal working sessions at the Chan Zuckerberg Initiative's Open Science 2025
conference articulated requirements for
"executable research" that include "exposing what can be shared (parameters,
environment, code context, figure lineage) in structured, machine-readable ways" and
"fine-grained attribution so contributors, tool builders, and methods authors actually
get visible credit."

The Constellation is the federated answer to scholarly interface design's question, with
its substrate a meaningful divergence from publisher-owned and researcher-owned
alternatives. The federation amplifies reach, while the substrate choice constrains
durability.

### ARCH 1.0 (substrate-floor answer)

[ARCH 1.0](https://aris.pub/arch/1.0/), published in June 2026, is the substrate-floor answer. The Accessible Research
Charter for Hypertext specifies what a durable, accessible, archivable web-native
research document looks like: semantic HTML, no JavaScript framework dependencies,
named-author accountability, content-addressable storage (the artifact identified by a
hash of its content, not by a server URL), durability across the publishing
infrastructure of the next decade. The substrate commitment is that the
publishable artifact must outlast the platform that hosts it.

ARCH is open and freely implementable, and its bet is that durability and accountability
live in the format rather than in the hosting infrastructure. The cost is on rendering: an
ARCH-compliant document does not run the kind of JavaScript-driven interactivity that
single-page web applications use. ARCH is one answer to the substrate question, and whether the field
adopts ARCH, adopts something else, or arrives at the answer through
convergence is open.

The three exhibits together (publisher-side, federated, substrate floor) do not exhaust
the discipline. They demonstrate that the discipline is real and has objects of study at
different layers.

## What's still missing, and what's next

The field has practitioners, conferences, and methods. It does not yet have a field. The
work missing is unglamorous: a shared vocabulary, a name researchers in different
clusters can use to introduce themselves to one another, venues that publish across
cluster boundaries, review venues that treat scholarly interface design work as the
legitimate object it is, training programs that produce people who go on to work in the
field rather than discovering it after twenty years in HCI or library science.

Vocabulary work matters first because shared vocabulary is the precondition for
everything else. Todd Carpenter, Executive Director of [NISO](https://www.niso.org) (the National Information Standards Organization), published in June 2026 a vocabulary piece
distinguishing attribution, provenance, citation, and reference: terms scholarly
interface design now has a reason to adopt rigorously. Mudditt's "checkability" contributes vocabulary for
talking about trust signals from the publisher-reform side, Heer's user-study
methodology supplies an empirical vocabulary, and the Distill tradition contributes
vocabulary for treating an interactive article as a citable scholarly object. Pulling these threads into one named
discipline gives practitioners across the clusters a shared vocabulary.

Venues come second. AAAI Bridge AI4SC is the inaugural academic-side venue, ATScience
2026 is the inaugural decentralized-protocol venue, and the CSF Banff gathering is the
inaugural authoring-tools coalition venue. The Knowledge Futures Group transition leaves
a vacuum in the open-source publishing-platform niche. The discipline needs venues that
publish across these silos, not yet another sub-specialist gathering. A venue that
publishes work from three or four of these clusters in the same proceedings would
establish that they are one discipline. No such venue exists yet.

Training programs are the long horizon. There are no graduate programs in scholarly
interface design today, but PhD students at UW IDL work on what is recognizably the
discipline, MyST contributors learn it on the job, and research software engineers pick
it up by inference. A training program (undergraduate, graduate, or
industry) that named the discipline would produce people who could enter it without
rediscovering it. That is the durable contribution.

These needs are coalition work, not individual work. They require practitioners agreeing
they are in one discipline. Naming the discipline is the start.

Scholarly interface design is the discipline that asks what the artifact carries from
research into judgment and what it drops. It has practitioners and artifacts, but no
single name common to them, and scholarly interface design is one candidate for that
name.

The discipline exists, even if its practitioners have not yet agreed they are in one
discipline. The work missing is the agreement rather than the discipline itself, and a
shared name is what makes the agreement easier.

---

<style>
.refs { font-size: 0.85em; color: #444; margin-top: 3em; }
.refs h2 { font-size: 1.1em; font-weight: 600; margin: 0 0 1em 0; color: #222; letter-spacing: 0.02em; text-transform: uppercase; }
.refs p { margin: 1em 0 0.2em 0; font-size: 0.95em; font-weight: 600; color: #222; }
.refs ul { margin: 0 0 0.5em 0; padding-left: 1.2em; }
.refs li { margin: 0.15em 0; padding: 0; line-height: 1.4; }
</style>

<div class="refs" markdown="1">

## References

**Examples cited in the opener**
- [Nature](https://www.nature.com), [arXiv](https://arxiv.org), [ar5iv (arXiv HTML)](https://ar5iv.labs.arxiv.org)
- [Curvenote](https://curvenote.com), [MyST Markdown](https://mystmd.org)
- [Typst](https://typst.app), [Typst 0.15 release notes (variable fonts)](https://typst.app/blog/2026/typst-0.15)
- [University of Washington Interactive Data Lab](https://idl.cs.washington.edu)
- [atproto.science](https://atproto.science)
- [Aris](https://aris.pub)

**Field map**
- Reader-augmentation: [Semantic Reader](https://www.semanticscholar.org/product/semantic-reader), [Living Papers (UW IDL)](https://idl.cs.washington.edu)
- AAAI Bridge AI4SC: [2025 inaugural edition](https://sites.google.com/view/ai4sc/edition/ai4sc-AAAI2025), [2026 edition](https://sites.google.com/view/ai4sc/edition/ai4sc-2026-40th-aaai)
- Authoring stacks: [Quarto](https://quarto.org), [MyST](https://mystmd.org), [Stencila](https://stencila.io), [Typst](https://typst.app), [Manubot](https://manubot.org)
- Artifact-and-reading: [PubPub](https://www.pubpub.org), [Knowledge Futures Group](https://www.knowledgefutures.org), [Hypothes.is](https://web.hypothes.is), [Journal of Open Source Software](https://joss.theoj.org), [microPublication Biology](https://www.micropublication.org), [Nanopublications](http://nanopub.org)
- Discovery: [Elicit](https://elicit.com), [Undermind](https://undermind.ai), [Consensus](https://consensus.app), [Scite](https://scite.ai), [SciSpace](https://scispace.com), [ResearchHub](https://www.researchhub.com), [Center for Open Science](https://www.cos.io)
- Format and structure: [Octopus](https://www.octopus.ac), [Kotahi Foundation](https://kotahi.community), [Coko](https://coko.foundation)
- Decentralized: [atproto.science](https://atproto.science) ecosystem including [Chive](https://chive.pub), [Lanyards](https://lanyards.app), [Semble](https://semble.so), [Paperstars](https://paperstars.org)
- Distill heirs: [Distill](https://distill.pub), [transformer-circuits.pub](https://transformer-circuits.pub), [Bartosz Ciechanowski](https://ciechanow.ski), [Andy Matuschak](https://andymatuschak.org)

**Exhibits**
- [PLOS](https://plos.org) Knowledge Stack, "Beyond the Article, Beyond the APC" (June 2026)
- [openRxiv](https://www.openrxiv.org) Constellation (June 2026)
- [ARCH 1.0 specification](https://aris.pub/arch/1.0/)

**Vocabulary work**
- [NISO](https://www.niso.org), Carpenter on attribution/provenance/citation/reference (June 2026)

</div>

