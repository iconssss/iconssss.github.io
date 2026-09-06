---
layout: page
title: Latency-Aware Robot Policy Runtime
description: Freshness-aware scheduling for asynchronous learned control
img: assets/img/projects/latency-runtime.svg
importance: 2
category: featured
---

I built an asynchronous learned-policy runtime that tracks every action back to
its source observation and compares synchronous, FIFO, and latest-only
scheduling semantics.

{% include figure.liquid loading="eager" path="assets/img/projects/latency-runtime.svg" title="Latency-aware policy runtime" class="img-fluid rounded z-depth-1" %}

## Impact

On MuJoCo Reacher with 100 ms policy latency, FIFO and LATEST both maintained
about 20.4 Hz control. FIFO nevertheless accumulated 1.24 s p95 action age and
reached only 20% success. LATEST reduced p95 action age to 150 ms and restored
100% success while keeping the same control rate.

The project demonstrates why throughput alone is not a sufficient deployment
metric for closed-loop robot policies.

[Code and full evidence](https://github.com/iconssss/project09-latency-aware-robot-policy-runtime)
