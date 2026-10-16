# Dependency disposition — author proposal, 17 October 2026

The initial npm audit reports 11 affected dependency nodes from three underlying advisories. Exact machine evidence belongs to the private run receipt.

| Advisory / affected nodes | Change and reachability |
| --- | --- |
| GHSA-238p-pmpm-9mq7: KaTeX, react-katex | Pin KaTeX 0.18.2, the first patched release, and override the wrapper's nested KaTeX to the same version. Mathematics rendering needs regression verification. |
| GHSA-rj75-hqrm-r3gf: postcss-selector-parser, postcss-nested | Override selector parser to patched 7.1.6. Tailwind CSS generation/build is checked. |
| GHSA-vfj7-8cjw-p6xm: braces and propagated chokidar, micromatch, fast-glob, tailwindcss, globby, gh-pages | Remove the unused legacy gh-pages dependency and manual Pages script. Five affected nodes remain in Tailwind's development dependency graph. No upstream braces patch is listed. |

The remaining path processes repository-owned glob patterns during build/dev. The production service serves static artifacts; no braces package or glob execution is shipped in browser runtime. Tailwind's content patterns are fixed in the repository; lesson input and localStorage do not become build glob patterns. A malicious source change could nevertheless target build availability. This is a concrete reduced-reachability assessment, not a blanket waiver or independent risk acceptance.

Migrating Tailwind to a new major solely to silence the advisory would expand visual regression scope. The author proposes retaining the pinned v3 toolchain for this candidate and requiring an independent security/release disposition. Do not call audit clean: five high entries remain. No `audit --force`, global configuration change or new infrastructure was used.

Node range is made explicit (24–26); CI remains Node24. Current development host is Node26. Local Node24 replay is a separate verification step before release if available.

Primary advisories: [braces](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm), [selector parser](https://github.com/advisories/GHSA-rj75-hqrm-r3gf), [KaTeX](https://github.com/advisories/GHSA-238p-pmpm-9mq7).
