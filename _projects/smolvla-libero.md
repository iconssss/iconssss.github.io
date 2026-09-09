---
layout: page
title: SmolVLA Fine-Tuning & Closed-Loop Evaluation
description: 100K-update VLA adaptation and an audited 400-episode LIBERO benchmark
img: assets/img/projects/smolvla-libero.svg
importance: 1
category: featured
---

I completed an end-to-end SmolVLA reproduction on one RTX 4090, from pinned
pretrained-policy initialization and runtime-contract validation to a frozen
100K-update checkpoint and 400 closed-loop LIBERO rollouts.

{% include figure.liquid loading="eager" path="assets/img/projects/smolvla-libero.svg" title="SmolVLA fine-tuning and 400-episode closed-loop evaluation" class="img-fluid rounded z-depth-1" %}

## Impact

- **71.5% endpoint success (286/400)** across all four LIBERO suites
- **100,000 optimizer updates / 6.4M sample presentations** on one RTX 4090
- **40 tasks × 10 fixed-init episodes**, with native success predicates
- Strict checkpoint reload: **0 missing, unexpected, or shape-mismatched keys**
- Complete evidence chain: machine-readable results, logs, frozen configs, and
  400 rollout videos

The strongest suite reached 82% success; Long remained the clearest failure
boundary at 46%. The result is deliberately scoped to a single-seed simulated
benchmark—not SOTA, a multi-seed significance claim, or real-robot deployment.

## Representative rollouts

<div class="row">
  <div class="col-md-6 mb-3">
    <video controls muted playsinline preload="metadata" style="width: 100%; border-radius: 0.4rem;">
      <source src="{{ '/assets/video/projects/smolvla-spatial-success.mp4' | relative_url }}" type="video/mp4">
    </video>
    <small>Spatial task 0 — successful episode</small>
  </div>
  <div class="col-md-6 mb-3">
    <video controls muted playsinline preload="metadata" style="width: 100%; border-radius: 0.4rem;">
      <source src="{{ '/assets/video/projects/smolvla-long-success.mp4' | relative_url }}" type="video/mp4">
    </video>
    <small>Long-horizon task 1 — successful episode</small>
  </div>
</div>

[Code, protocol, and full evidence](https://github.com/iconssss/project201-smolvla-libero)
