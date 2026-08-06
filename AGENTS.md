# AGENTS.md

## Overview

Serverless "What is my IP?" service (Serverless Framework v3, AWS). Two Lambda functions in `handler.js` behind an HTTP API in `serverless.yml`. All dependencies are devDependencies; the Lambda bundle is dependency-free.

## Commands

- Install: `pnpm install`
- Local dev server: `pnpm exec serverless offline`
- Deploy: `pnpm exec serverless deploy` (default stage `dev`) or `pnpm exec serverless deploy --stage prod`
- Lint: `pnpm exec eslint .` (no npm script exists; flat config via `neostandard` in `eslint.config.js` — StandardJS style, no semicolons)
- Tests: **none exist**. The `test` script just echoes an error and exits 1. Don't rely on it.

## Gotchas

- Endpoints are `httpApi` events (not REST API). The client IP is at `event.requestContext.http.sourceIp`, NOT `event.requestContext.identity.sourceIp`.
- Handlers return raw Lambda-style `{statusCode, headers, body}` objects; no wrapper libs are used.
- `serverless.yml` sets `package.exclude: node_modules/**` — correct, since the runtime has no deps.
- `handler.js` line 1 is `'use-strict'` (a no-op string, strict mode is off). Don't assume strict mode when reading the file.
- `.serverless/` holds deploy artifacts (zip + CloudFormation templates); it's gitignored and regenerated on each deploy.
- `pnpm-workspace.yaml` `overrides` pin `glob` → `^11.0.1` and `cron-parser` → `^5.7.0`, and route `node-domexception` to a local stub in `.stubs/node-domexception/`. These silence pnpm deprecation warnings for dev-only transitive deps of `serverless`/`serverless-offline` (both are at latest; there is no upstream fix). pnpm 11 ignores `overrides` in `package.json`, so they live here. Don't remove the overrides or the stub, and don't bump `glob`/`cron-parser` past the override while those parents still pin old ranges.
