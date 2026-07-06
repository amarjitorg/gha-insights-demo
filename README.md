# gha-insights-demo

A small sample Node.js app used to generate **GitHub Actions** runs so you can
explore **Actions Insights** (workflow run counts, durations, and success rates).

## What's here

- `src/math.js` — a tiny math utility module
- `src/index.js` — a demo entrypoint that prints some results
- `test/math.test.js` — unit tests using Node's built-in test runner
- `.github/workflows/ci.yml` — CI workflow: **lint → test (Node 18/20/22 matrix) → build**

## Local usage

```bash
npm run lint
npm test
npm start
```

## Insights

Head to the repo's **Insights → Actions** tab to see run trends over time.
Re-run the `CI` workflow (Actions tab → CI → *Run workflow*) to add more data points.
