---
layout: about
title: About
permalink: /
subtitle: Tsinghua Ph.D. Student | Robot Learning, Embodied AI, and Intelligent Systems

profile:
  align: right
  image: xinyue-profile.jpg
  image_circular: true # crops the image to make it circular

selected_papers: false
social: false

announcements:
  enabled: false
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

<p style="margin-top: -0.35rem; margin-bottom: 1.5rem; font-size: 1rem; letter-spacing: 0.01em;">
  Beijing / Shanghai · <a href="mailto:xinyue4496@163.com">xinyue4496@163.com</a> ·
  <a href="{{ '/cv/' | relative_url }}">CV</a> ·
  <a href="https://github.com/iconssss">GitHub</a>
</p>

我是辛约（Yue Xin），清华大学精密仪器系直博生，求职方向聚焦 **Robot Learning / Embodied AI Research Engineer** 与机器人算法岗位。

我的核心能力是把机器人学习从训练脚本推进到**可信的闭环结果与可部署系统**：完成 VLA 微调和大规模 rollout，验证模型/数据/动作契约，处理 checkpoint、随机性与时序问题，并用严格实验定位失败边界。数理、控制与复杂惯性传感系统训练，使我尤其重视动态过程、误差传播、校准和软硬件接口。

## Selected Work

<div class="row">
  <div class="col-md-4 mb-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">SmolVLA Closed-Loop</h5>
        <p class="card-text"><strong>100K updates · 71.5%</strong><br>单张 RTX 4090 微调，并在 40 个 LIBERO 任务、400 回合中完成冻结评测。</p>
        <a href="{{ '/projects/smolvla-libero/' | relative_url }}">查看项目 →</a>
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Latency-Aware Runtime</h5>
        <p class="card-text"><strong>1.24 s → 150 ms p95 age</strong><br>保持约 20 Hz 控制并将成功率从 20% 恢复到 100%。</p>
        <a href="{{ '/projects/latency-aware-runtime/' | relative_url }}">查看项目 →</a>
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Metric 3D Visuomotor Learning</h5>
        <p class="card-text"><strong>50 demos · 95% success</strong><br>多视角融合将强遮挡性能从 3.3% 恢复到 100%。</p>
        <a href="{{ '/projects/metric-3d-perception/' | relative_url }}">查看项目 →</a>
      </div>
    </div>
  </div>
</div>

其他 VLA 系统工作包括 [4-GPU SmolVLA 训练与 RNG-controlled evaluation]({{ '/projects/vla-evaluation/' | relative_url }})，以及 [5.1B XR-1 action-prefix temporal alignment study]({{ '/projects/xr1-temporal-alignment/' | relative_url }})。前者实现 3.82× DDP 加速并定位随机策略评测混淆；后者用 190 次真实模型 generation 验证原生 prefix API 不会自动带来时延鲁棒性。

## Engineering Experience

在歌尔行业实践中，我完成多人实时运动感知与身份识别系统的算法开发和 Windows 边缘端交付：使用 YOLO Pose、OpenCV、YuNet 和 SFace，结合 FP16、时序微批处理和异步采集，在 RTX 3050 上实现约 30 FPS；三人历史视频的 145 个真值事件中匹配 141 个，并通过 UDP/OSC 对接 Unity。

## Technical Focus

- **Robot learning:** imitation learning, action chunking, Diffusion Policy, LeRobot, SmolVLA
- **Evaluation:** closed-loop rollout, paired experiments, RNG control, failure attribution
- **Perception & control:** metric 3D, multi-view fusion, calibration, kinematics, motion planning
- **Systems:** PyTorch, CUDA/DDP, ROS2, C++, MuJoCo, ManiSkill, LIBERO, Linux

更完整的教育、科研经历、项目证据与技术栈见 [CV]({{ '/cv/' | relative_url }}) 和 [Projects]({{ '/projects/' | relative_url }})。
