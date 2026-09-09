---
layout: page
title: Reliable VLA Fine-Tuning & Evaluation
description: 4-GPU SmolVLA training and RNG-controlled LIBERO evaluation
img: assets/img/projects/vla-evaluation.svg
importance: 4
category: featured
---

I built an end-to-end SmolVLA pipeline that validates the native LIBERO data
contract, trains with 4-GPU DDP, evaluates through the official closed-loop
protocol, and makes stochastic checkpoint comparisons attributable.

{% include figure.liquid loading="eager" path="assets/img/projects/vla-evaluation.svg" title="Reliable VLA fine-tuning and evaluation" class="img-fluid rounded z-depth-1" %}

## Impact

- **3.82× DDP speedup** on 4×RTX 4090 at matched per-GPU batch
- **1,693 episodes / 273,465 frames / 40 LIBERO tasks**
- Identified a flow-matching RNG confound that changed the apparent direction
  of checkpoint scaling
- Rebuilt the comparison with identical environment starts and per-episode
  policy-noise streams

The controlled 5K→20K result was 2/30→4/30. I report this as a weak positive
signal rather than a high-performing-policy claim; the main contribution is a
training and evaluation workflow whose conclusions can be trusted.

[Code and full evidence](https://github.com/iconssss/multi-gpu-vla-finetune-libero)
