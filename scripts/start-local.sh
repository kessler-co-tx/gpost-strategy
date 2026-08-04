#!/bin/zsh

set -euo pipefail

script_dir=${0:A:h}
project_dir=${script_dir:h}
preview_port=${1:-3000}
runtime_root="$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies"

cd "$project_dir"

if command -v pnpm >/dev/null 2>&1; then
  exec pnpm run dev -- --port "$preview_port"
fi

bundled_pnpm="$runtime_root/bin/fallback/pnpm"
bundled_node="$runtime_root/node/bin"

if [[ -x "$bundled_pnpm" && -x "$bundled_node/node" ]]; then
  export PATH="$bundled_node:$runtime_root/bin/fallback:$PATH"
  exec "$bundled_pnpm" run dev -- --port "$preview_port"
fi

print -u2 "pnpm was not found. Start this project through Codex in the ChatGPT desktop app, or install Node.js and pnpm first."
exit 1
