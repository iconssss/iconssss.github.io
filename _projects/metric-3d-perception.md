---
layout: page
title: Metric 3D Visuomotor Learning
description: Low-data control, viewpoint robustness, and multi-view recovery
img: assets/img/projects/metric-3d.svg
importance: 3
category: featured
---

I built a calibrated RGB-D→world-frame point-cloud pipeline and a compact
PointNet policy for closed-loop Panda reaching, then mapped both its advantages
and its calibration failure boundaries.

{% include figure.liquid loading="eager" path="assets/img/projects/metric-3d.svg" title="Metric 3D visuomotor learning" class="img-fluid rounded z-depth-1" %}

## Impact

- **95% closed-loop success with 50 demonstrations**
- **96.7–100% success across 0–45° camera movement**
- Two-view fusion restored strong-occlusion performance from **3.3% to 100%**
  with no policy retraining
- Quantified collapse under depth and extrinsic calibration error

The result is scoped to contact-free reach with calibrated RGB-D and
ground-truth segmentation; it is not presented as a universal 3D-over-RGB
claim.

[Code and full evidence](https://github.com/iconssss/project08-3d-embodied-perception)
