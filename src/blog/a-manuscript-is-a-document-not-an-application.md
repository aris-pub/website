---
title: "A Manuscript Is a Document, Not an Application"
date: 2026-06-09
author: "Leo Torres"
description: "ARCH 1.0 is the charter we hold our own products to. It defines what a research manuscript on the web has to do to be semantic, accessible, durable, and readable without JavaScript."
tags: ["arch", "standards", "html", "research-publishing"]
draft: false
---

# A Manuscript Is a Document, Not an Application<span style="color: #AD71F2; font-size: 1.5em;">.</span>

*June 9, 2026 • Leo Torres*

I spent a decade writing research papers, and for most of that decade the format they
ended up in was not a question I had to think about. You wrote in LaTeX, compiled to
PDF, uploaded the PDF to arXiv, and the rest of the system took the file from there. The
research I read now, I read on a phone or a laptop on a train with the wifi flickering,
almost never in print. The PDF was designed for a different reading life than the one I
actually have, and the gap between those two things has been getting wider for as long
as I have been in research.

Building Aris meant I had to decide what a research manuscript on the web should be at
the level of structure, before any question of typography or which authoring tool
produced it. Not what it should look like, but what it should do, including how it marks
up its sections and figures and citations, what has to be present in the HTML the server
sends versus what a script is allowed to add, and what a reader gets when they save the
file and open it five years later on a machine that has never heard of the server it
came from.

In February I wrote those answers down as a charter called ARCH, the Accessible Research
Charter for Hypertext. All building happening at Aris ever since has been held to that
standard, and it has yielded more clarity than I was originally expecting. This post is
the public version of ARCH 1.0, including what it asks for, what it deliberately does
not, and the position inside it sharp enough to be worth stating outright.

## What ARCH says

ARCH is the **Accessible Research Charter for Hypertext**. It defines what a research
manuscript on the web has to do, organized around four requirements.

**Semantic HTML.** The manuscript body sits in an `<article>` element, sections are
`<section>` elements with a strict heading hierarchy, figures use `<figure>` and
`<figcaption>`, and tables use `<table>` with `<thead>`, `<tbody>`, and `<caption>`.
Math is represented in the source as LaTeX, MathML, or equivalent semantic markup, so
the scholarly content persists whether or not a renderer runs. Bibliography entries are
list items with stable `id` attributes, and in-text citations are real `<a>` links that
resolve to them. The point of these rules is to use the standard the rest of the web
settled on decades ago, instead of inventing a private one for research.

**Content in the source.** Every claim that carries scholarly weight has to be present
in the HTML that the server sends. Text, figures, tables, equations, captions,
citations, and references all arrive over the network as part of the document, rather
than being injected by a script after page load or assembled in the browser from a JSON
payload. If an interactive widget conveys a finding, a static representation of that
finding sits next to it in the source.

**Readable with JavaScript off.** Open the document with scripts disabled and the full
manuscript renders, including prose, math, figures, tables, citations, and references.
JavaScript is allowed for progressive enhancement (interactive figures, theme toggles,
navigation aids, zoom), but it is not allowed to be the only path to the scholarship.
The reason is that the scholarly record demands the strongest archival guarantee
available, and HTML plus CSS alone provide it.

**Durable offline.** A reader who saves the page can open it five years later on a
machine that has never heard of the server it came from, and read it. No required CDN
round-trips, no required network calls for core content, and pinned versions for any
external library that does get used. Everything load-critical sits inside
standards-compliant HTML5, CSS3, and ECMAScript 2015 or later.

There is more to the charter, including responsive design, dark mode, print stylesheets,
ARIA, contrast ratios, motion preferences, footnote semantics, and cross-reference
resolution, but the four above are the structural floor.

## What ARCH is and isn't

ARCH is a charter for output. It describes what the rendered HTML document has to do,
and it says nothing about how that HTML gets produced. Aris uses an authoring pipeline
called RSM, which is one such tool. Quarto, Typst, Pandoc, MyST, and hand-written HTML
can all produce ARCH-compliant output. The pipeline is the author's choice, and ARCH
governs what the reader receives.

ARCH does not evaluate research. It says nothing about whether the science is good, the
statistics defensible, or the claims novel. That work belongs to peer review and to
readers. A document can be fully ARCH-compliant and still report bad science.
Conformance is a statement about the structure and behavior of the document, not the
truth of its contents.

ARCH does not prescribe how a manuscript looks, so two ARCH-compliant papers can use
completely different typography, color palettes, layouts, and visual identity.

ARCH 1.0 focuses on the single-document manuscript. Versioned manuscripts,
multi-document collections, executable notebooks, packaged supplementary data, and
discipline-specific semantic environments are deliberately out of scope for this
version, and are candidates for future revisions.

## What ARCH refuses

Section 4.2 of the charter takes a position worth stating plainly. Web application
frameworks like React, Vue, Angular, and Svelte should not be used to build research
manuscripts. This is not a verdict on those frameworks as tools, since they are
well-engineered and appropriate for the things they were designed for. The reason ARCH
refuses them follows directly from the earlier requirements.

Section 2.1 says core content must be present in the HTML source, and Section 4.1 says
the document must be fully readable with JavaScript disabled. Component-based reactive
frameworks are architected around hydration, where the HTML payload served from the
network is a shell and the document's content is constructed at runtime by JavaScript
executing in the browser. Server-side rendering and static pre-rendering can produce
HTML that looks complete at first paint, but the source-of-truth remains the framework's
component tree, the rendered HTML is an opaque compilation output regenerated whenever
the components change, and the document remains coupled to the framework's runtime for
any interactive behavior.

An ARCH-compliant manuscript's source-of-truth has to be the HTML document itself, with
JavaScript layered on as optional progressive enhancement. A document whose
source-of-truth is a React component tree is not an HTML document, it is a JavaScript
application that compiles to HTML, and the distinction matters when the question is how
this artifact behaves in twenty years, on a device the author never tested against, for
a reader who has the page but not the runtime.

ARCH does not refuse interactivity, and interactive figures, explorable explanations,
and embedded visualizations are all permitted and encouraged. What ARCH refuses is the
architectural inversion where the document is downstream of the application instead of
the other way around.

## Why publish now

I have been holding ARCH internally since February, and four months of building against
it has been enough to convince me the document is more useful in the open than in a
drawer. A working document is not a charter, since a charter is something other people
can read, argue with, and hold you to.

The state of web-native scholarly publishing right now is that implementation choices
are being made every week, by serious people, without a public specification anyone can
point to as the standard. That is how every prior format war played out, and the result
tended to be whatever happened to get traction first rather than whatever was right. A
written charter gives implementers a target to build against, gives readers a concrete
reference when a document fails them, and gives critics a fixed surface to push back on
instead of a moving set of product decisions.

If a requirement in ARCH is wrong, say so and say why. A missing requirement should be
proposed with the reasoning behind it. A pipeline that already produces output meeting
the MUST list is conformant regardless of what tooling sits upstream. The version number
is 1.0 because I expect ARCH to change, and I would rather it change in public against
real objections from people who have to live with it than keep refining it alone.

The full text of ARCH 1.0 is at [aris.pub/arch/1.0/](https://aris.pub/arch/1.0/).
