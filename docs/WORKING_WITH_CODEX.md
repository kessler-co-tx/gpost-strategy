# Working on the GPOST Strategy Site

This guide is the durable handoff for starting a new Codex or ChatGPT Work thread.

## Current setup

- The approved public site is published from `main` at https://kessler-co-tx.github.io/gpost-strategy/.
- Experimental work stays local until Joe explicitly approves a push.
- The local preview runs at http://localhost:3000/ and displays whichever branch is currently checked out.
- The homepage is separated into section components so focused changes can avoid unrelated sections.

## Start a terminal session

From macOS Terminal:

```bash
cd /Users/joekessler/.codex/.chatgpt-projects/g-p-6a6cc3a7e9b08191acc7061bab03042e/gpost-strategy
/Applications/ChatGPT.app/Contents/Resources/codex
```

Codex automatically reads `AGENTS.md` when it starts from this repository. A useful opening request is:

```text
Work only on the dark-brand exploration branch. Keep the public site unchanged, start localhost:3000, and stop before any push.
```

To launch the desktop app from the same directory instead:

```bash
/Applications/ChatGPT.app/Contents/Resources/codex app .
```

## Choose a work area

```bash
git switch chore/section-components
git switch explore/dark-brand-icons
git switch improve/mobile-responsive
```

Ask Codex to check `git status` before switching when a branch contains unfinished changes. Do not move unfinished changes between branches without reviewing them.

## Start the local site

```bash
./scripts/start-local.sh
```

Then open http://localhost:3000/. Keep that terminal window open while reviewing the site. Press `Control-C` in that terminal when you want to stop the local server.

## Recommended review cycle

1. Name the branch and the exact section or outcome.
2. Tell Codex what must remain unchanged.
3. Ask Codex to implement locally and show the localhost preview.
4. Review and request revisions on the same branch.
5. When satisfied, explicitly approve committing and pushing.
6. Review the pull request before merging into `main` and publishing.

## Prompt examples

Focused section work:

```text
On a new local branch, work only on the Payments section. Preserve all other sections and shared styles unless you explain why a shared change is needed. Show me localhost:3000 and do not push.
```

Dark-strategy brand exploration:

```text
Switch to explore/dark-brand-icons. Create three icon directions in a local comparison page. Do not overwrite the current GPOST assets, change light mode, or push anything.
```

Site-wide mobile work:

```text
Switch to improve/mobile-responsive. Audit the complete site at phone and tablet widths while preserving desktop. Show the local result and stop before pushing.
```

## ChatGPT Work versus Codex

- Use Codex CLI or Codex in the desktop app for hands-on repository changes, branching, local previews, builds, and code review.
- Use ChatGPT Work for research, strategy development, content drafting, asset planning, and other multi-step deliverables that may feed into the site.
- When a task needs local repository files or localhost, choose local work rather than cloud work.
