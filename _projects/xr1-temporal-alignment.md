---
layout: page
title: XR-1 VLA Temporal Alignment
description: Testing whether action-prefix conditioning provides latency robustness
img: assets/img/projects/xr1-prefix.svg
importance: 4
category: featured
---

I audited the native action-prefix path of the 5.1B-parameter XR-1 VLA and built
a causal temporal-counterfactual benchmark using self-generated old-plan
prefixes.

{% include figure.liquid loading="eager" path="assets/img/projects/xr1-prefix.svg" title="XR-1 temporal alignment study" class="img-fluid rounded z-depth-1" %}

## Impact

- **190 formal generations across 4×RTX 4090**
- Measured **288 ms mean / 318 ms p95** generation latency
- Demonstrated that self-prefix conditioning worsened right-arm handoff error
  at medium and large phase offsets
- Established selective post-training feasibility for **675M parameters**

This is a real-model systems study, not a physical-robot task-success claim. Its
conclusion is a useful boundary: native prefix support alone does not guarantee
asynchronous latency robustness.

[Code and full evidence](https://github.com/iconssss/project07-xr1-vla-temporal-alignment)
