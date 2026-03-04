---
title: "One thousand and ten years of the Recurse Center"
date: 2026-03-04
author: "Leo Torres"
description: "Ten years ago, I started my batch at the Recurse Center. I've been putting off my return statement for a decade. So I had my robot interview me instead."
tags: ["personal", "recurse-center", "learning"]
---

<style>
.post-content p {
    margin-bottom: 1.2em;
}

.post-content hr {
    border: none;
    border-top: 1px solid var(--border-light);
    margin: 2.5em 0;
}

.post-content hr.thick {
    border-top-width: 2px;
}

.q {
    font-family: var(--font-sans);
    font-size: 0.85em;
    font-weight: 600;
    font-style: normal;
    color: var(--text-tertiary);
    letter-spacing: 0.01em;
    line-height: 1.5;
    margin-top: 3em;
    margin-bottom: 0.75em;
    padding-left: 1em;
    border-left: 2px solid var(--accent);
}

hr.thick + .q {
    margin-top: 0.5em;
}

.aphorisms {
    margin: 2em 0;
    padding: 0;
    border-left: 2px solid var(--border-light);
    padding-left: 1em;
}

.aphorisms p {
    font-family: var(--font-serif);
    font-size: 1.05em;
    color: var(--text-secondary);
    margin: 0;
    padding: 0.2em 0;
    line-height: 1.6;
}

.aphorisms p::before {
    content: "•  ";
    color: var(--text-tertiary);
}

.footnotes {
    font-size: 0.85em;
    color: var(--text-secondary);
    line-height: 1.6;
}

.footnotes p {
    margin-bottom: 0.5em;
}

.fn {
    position: relative;
    font-size: 0.75em;
    vertical-align: super;
    line-height: 0;
    text-decoration: none;
    color: var(--accent);
    cursor: pointer;
}

.fn .fn-tooltip {
    display: none;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.6em 0.9em;
    background: var(--text-primary);
    color: var(--bg-primary);
    font-size: 1.15rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 4px;
    white-space: normal;
    width: max-content;
    max-width: 320px;
    z-index: 10;
    pointer-events: none;
    margin-bottom: 6px;
}

.fn:hover .fn-tooltip,
.fn:focus .fn-tooltip,
.fn:focus-within .fn-tooltip {
    display: block;
}
</style>

# One thousand and ten<a id="ref1" href="#fn1" class="fn" aria-label="Footnote 1" aria-describedby="tip1">1<span id="tip1" class="fn-tooltip" role="tooltip">Or ten years, if you prefer decimal (1010<sub>2</sub> = 10<sub>10</sub>).</span></a> years of the Recurse Center<span style="color: #AD71F2; font-size: 1.5em;">.</span>

*March 4, 2026 • Leo Torres*

Ten years ago, I started my batch at the Recurse Center, a free, self-directed
programming retreat in New York where curious programmers go to recharge and grow. It's
a tradition at RC to write a "return statement" when your batch ends: a reflection on
what you did, what you learned, and what changed. I've been putting mine off for a
decade. Life simply got in the way, and the longer I waited the more daunting it became.
So I thought I'd have my robot interview me instead.<a id="ref2" href="#fn2" class="fn" aria-label="Footnote 2" aria-describedby="tip2">2<span id="tip2" class="fn-tooltip" role="tooltip">This interview was conducted by Claude (Anthropic) and edited for clarity and structure. The words and meaning are entirely the author's.</span></a> Whether this reflects the state of
the tech industry in 2026, or simply the deterioration of my attention span, is for you
to decide.

<hr class="thick">

<p class="q">What brought you to RC in 2016?</p>

I was between undergrad and grad school, I was trying to build/study/work on my own and
it simply wasn't working. My brother had attended RC two years earlier. He said
impossibly positive things about it: the kindness, the enthusiasm, the smartness of the
people there. I was skeptical, but turns out he wasn't exaggerating.

<p class="q">What did you plan to work on?</p>

I had a few things in mind. I'm a mathematician, and I was about to start a PhD in
network science, so I wanted to explore graph visualization techniques. Another thing I
was really excited about was learning category theory from a computer science
perspective: functors, applicative functors, monads, the whole Haskell track. I already
had one way of thinking about these concepts, and I wanted to see them through a
completely different lens.

<p class="q">And is that what you ended up doing?</p>

Of course not. It's quite common at RC for people to change their entire direction
mid-batch. I did spend time with Haskell and type theory, and it was genuinely fun. But
I also ended up building an agent-based simulation of the Milgram small-world experiment
with a couple of other Recursers. Not the one about obedience, but the one where a
letter addressed to a stranger gets passed from person to person through social
networks. Except instead of people, we used little computer agents. That was right up my
alley, given what I was about to start at grad school.

I also did a lot of data structures and algorithms work and interview prep, which was
great, even though I wasn't immediately looking for an interview. And then, maybe the
most surprising thing, after roughly ten years of programming, I built my first website.
A decade of writing code and I had intentionally stayed away from web development,
mostly due to the bad things I heard about JavaScript in 03-05 (way before ES6). At RC I
made a personal site, contributed to open source projects I used to create my site, and
discovered a whole side of programming I'd been ignoring.

<p class="q">You mentioned your brother described RC in impossibly positive terms. Did it live up to that?</p>

It exceeded it. RC was the first time in my life where I felt like I truly belonged.
That's not a small thing to say, and I do not say it lightly. It marked a before and
after in my career.

<p class="q">What created that feeling?</p>

All of it: the self-directed structure, the people, the social rules. But what emerged
from all of it was a sense of excitement about serendipity. RC is the kind of place
where you just bump into cool shit and learn without effort. You can be pushing yourself
to your limits, or you can be hanging out in the kitchen chilling, and in either case
you're learning at an accelerated pace. At RC, learning just happens to you.

One of my favorite things were the feelings check-ins. There's this emotional
infrastructure at RC, completely organically organized by attendees, not by employees,
that people don't talk about enough. It's not incidental to the experience, it's what
makes the whole thing work. People are there to learn, and learn together. That involves
feelings: of frustration, of achievement, of being lost, and thankfully, during my batch
someone had the genius idea to get people in a room and talk about all these feelings.

<p class="q">What did you learn at RC?</p>

One of the main skills I learned at RC was to simply *do things*. It sounds obvious but
I'd say most budding developers<a id="ref3" href="#fn3" class="fn" aria-label="Footnote 3" aria-describedby="tip3">3<span id="tip3" class="fn-tooltip" role="tooltip">Or maybe just me, who knows.</span></a> have a stage where they frequently get stuck making
a decision between approaches A and B. I think one of the main reasons is that at that
early stage, writing code is time-consuming and costly, so a lot of effort is put into
deciding the right approach first and then making the effort to implement it. At RC, I
moved beyond that stage when I realized that sometimes the only way to decide between A
and B is to actually implement both A and B and decide after the fact. This requires a
level of comfort with writing code that I did not have when I arrived at RC, but I had
in spades toward the end of my batch. The secret was obvious in retrospect: just write
code 5-7 days a week for 6-12 hours every day, in a completely self-directed way with no
deadlines, just for the fun of it, and you'll ~~magically~~ become better at it. Whod'a
thunk, amirite? RC gave me that.

<p class="q">So you left RC in 2016. Why are we only having this conversation now?</p>

Choose your poison: life got in the way, I never really had a blog, I'm lazy, or some
combination of all three. But seriously, 2025 was the single worst year of my life. 2026
is starting out well, and I'm trying to close things that have been open too long.
Writing my return statement was one of them.

But here's the thing: I never really left. Since 2016, I have participated (or eh...
lurked) on RC's Zulip pretty much every single day. It's my place. It's my people. It's
a place where I want to be.

<p class="q">A decade of near-daily Zulip. That's a stronger return statement than most people's actual return statements.</p>

I also became an admissions interviewer, one of my Zulip threads was featured in the
sorta-monthly alumni newsletter, and I got a job through RC's career services. So RC has
been woven into pretty much every phase of my life since 2016: as a participant, a
contributor, a community member, a gatekeeper, and a beneficiary.

<p class="q">When you interviewed applicants, what do you look for?</p>

People who get visibly, physically excited when they talk about programming, regardless
of where they are in their journey, or what their thoughts are on the latest tech, trend
or fad.

<p class="q">Did you have that when you applied?</p>

I think I always had it, but I was shy about it. But RC encouraged it. RC is a place
where that kind of enthusiasm is normal, not weird. It's celebrated, even.

<p class="q">What would you say to someone thinking about applying?</p>

Look, robot, no offense but this interview is nowhere near doing justice to how
important RC was for me. RC changed how I orient myself in socio-technical spaces
(which, in this day and age, is almost *all* spaces).

I tend to distill life lessons into short metaphors (much like programming distills real
problems into [aspirationally] succinct code), and each one of these reminds me of my
time there:

<div class="aphorisms">
<p><em>If you're the smartest person in the room, you're in the wrong room.</em></p>
<p><em>Climb a mountain, build a path behind you.</em></p>
<p><em>Strive to be the thoughtful voice, not the loudest.</em></p>
<p><em>Before being really good at something, you must really suck at it first.</em></p>
</div>

My time at RC was instrumental in arriving at these lessons. That's what I'd say to someone thinking about applying today: just do it.

<p class="q">Any unfinished business?</p>

I still want to do a second batch.

---

If you've been thinking about applying to the Recurse Center, do it. And if you're an
alum who never wrote your return statement, it's not too late. Trust me.

*RC changed how I think about learning. That thinking is visible in what I'm building now, but that's a different blog post.*

<hr class="thick">

<div class="footnotes" role="doc-endnotes" aria-label="Footnotes">

<p id="fn1">1. Or ten years, if you prefer decimal (1010<sub>2</sub> = 10<sub>10</sub>). <a href="#ref1" aria-label="Back to reference 1">↩</a></p>

<p id="fn2">2. This interview was conducted by Claude (Anthropic) and edited for clarity and structure. The words and meaning are entirely the author's. <a href="#ref2" aria-label="Back to reference 2">↩</a></p>

<p id="fn3">3. Or maybe just me, who knows. <a href="#ref3" aria-label="Back to reference 3">↩</a></p>

</div>
