---
title: "What Is Software Worth When Anyone Can Build It?"
date: 2026-03-09
author: "Leo Torres"
description: "AI has made code nearly free to produce. Two things remain that no model can generate: how software feels to use, and the trust people build inside it over time."
tags: ["ai", "open-source", "trust", "research", "philosophy"]
---

# What Is Software Worth When Anyone Can Build It?<span style="color: #AD71F2; font-size: 1.5em;">.</span>

*March 9, 2026 • Leo Torres*

We've been watching AI agents produce in hours what used to take us weeks. Features that
once required deep expertise are now a prompt away, and the cost of producing code is
dropping fast. Not to zero, not yet, but the trend is clear enough to take seriously. If
features get cheaper with each generation of models, then features alone aren't what
makes a tool worth using.

What remains is the judgment about what to build and what to leave out. That's a product
decision, not an engineering task. The hard questions aren't "can we build collaborative
editing" but "should we, and if so, what kind, for whom, at the cost of what else." AI
compresses the time between deciding and shipping, it doesn't compress the deciding.

Beyond that product judgment, two other things remain that can't be AI-generated.

## How it feels to use

Beyond the wireframes and design systems, there is something harder to pin down: the
texture of actually using the tool, how it fits into the life of the specific person at
the keyboard.

For Aris, this means that researchers read papers on phones, write in fragmented time,
and carry years of muscle memory from LaTeX and arXiv. Those facts have design
consequences. It's why we care about how a paper reads on a small screen, and about the
three seconds between clicking "publish" and getting a URL. The judgment about which of
these details matter, and how much to invest in each requires being embedded in the
community you serve. Those are the moments where trust forms or doesn't.

An AI can suggest "make it work on mobile" or "reduce time to publish." Those are
reasonable suggestions and you can find them in any product advice blog. What it can't
do is sit in a lab meeting where a postdoc pulls up a paper on her phone and watches the
figures break, or notice that a collaborator stopped using your tool because the upload
flow assumed they had a finished manuscript when they actually had a rough draft and a
deadline. The difference between a good product decision and a generic one is almost
always that kind of context, and it comes from being there, not from training data.

## Social capital

The value of near-free software also lies in what the software enables people to do with
each other. arXiv isn't valuable because of its codebase. It's valuable because of the
thirty years of papers, citations, and trust that researchers deposited into it.

The same is true for any scholarly infrastructure. Every time a researcher puts their
name on a paper, they're making a claim about their own credibility. Every time someone
writes a review, they're investing time and judgment into someone else's work. Every
citation is a small act of trust, a researcher saying "I staked a piece of my own
reputation on this being sound." Over years, these individual acts of accountability
accumulate into something real: social capital. A web of named people connected by
elusive, but observable, acts of professional judgment.

This is the thing that actually matters about scholarly infrastructure, and it's the thing
that can't be reproduced by building a feature-equivalent alternative. You can copy code.
You can replicate a feature set. You can't replicate the thousands of researchers who
chose to put their names on things in a particular place, or the years of reviews and
discussions and citation relationships that grew up around their work. That history of
human investment is what makes the infrastructure credible, and it only accumulates
through time and trust.

That accumulated trust is also what's under pressure right now. The volume of
AI-generated content is increasing fast, and the mechanisms we've relied on to decide
what's trustworthy weren't built for this kind of scale. No software will solve that
problem by policing what's real and what's generated, because that's a losing game. But
software can be designed to make the human parts of science more visible: named human
authors accountable for their claims, persistent reviews attached to the work instead of
hidden in anonymous inboxes, version histories that show how ideas evolved, and
permanent URLs that let you point to a specific claim by a specific person at a specific
time. None of that requires AI detection or watermarking or enforcement. It requires
making human judgment legible, so that when you decide to trust something, you can see
who's standing behind it.

## What we build

The software we make at Aris is open source and licensed liberally. Anyone can take the
code, run their own instance, and build on it. That's intentional, because the code was
never the point.

Press, our preprint archive, is where this starts: permanent URLs, named authorship,
version history, DOIs. Every paper has a researcher who is responsible for it. Over
time, we're designing toward infrastructure where reviews are persistent and attributed,
where a paper's full history is part of the permanent record. Each of these is a design
decision about what the software incentivizes: visible accountability, persistent
judgment, named authorship.

When creating software is nearly free, the value of a tool isn't the tool itself. It's
the experience of using it and the social capital that users build with it over time.
The infrastructure doesn't create trust. It makes trust observable.
