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
  Beijing / Shanghai · <a href="mailto:xinyue4496@163.com">xinyue4496@163.com</a> · +86 18221784496
</p>

我是辛约（Yue Xin），清华大学精密仪器系直博生。本科就读于清华大学未央书院，接受了数理基础科学与测控技术与仪器双学位培养。我的研究训练始于复杂惯性传感系统，涵盖动力学建模、数值仿真、误差分析、参数校准、信号处理与实验平台联调。

在此基础上，我已围绕**机器人学习、具身智能与视觉感知**开展系统性的研究工程实践，覆盖计算机视觉边缘部署、模仿学习与动作分块、VLA 训练评估、ROS2 策略执行、三维感知、异步策略运行时和运动规划。求职方向聚焦 Robot Learning / Embodied AI Research Engineer 与机器人算法岗位。

## 职业方向

- Robot Learning / Embodied AI
- Visuomotor Policy Learning / Imitation Learning
- Vision-Language-Action Models / Robot Foundation Models
- Robot Perception, Manipulation, and Policy Runtime Systems

## 工程经历

### Goertek · Computer Vision Algorithm Engineering | Industry Practice

面向智能设备交互场景，完成多人实时人体运动感知与身份识别系统的算法开发和 Windows 边缘端交付，覆盖需求分析、数据采集、算法设计、人工标注与评估、GPU 推理优化、身份绑定、通信接口和 Unity 集成。

- 使用 YOLO Pose 与 OpenCV 构建多人姿态和运动分析链路，设计 ROI / slot-based 感知流程与因果时序状态机
- 通过 FP16、时序微批处理、异步视频采集和几何一致预处理，在 RTX 3050 上实现约 30 FPS 的真实人员视频处理
- 在三人历史测试视频上完成 145 个真值事件的逐事件评估，匹配 141 个，事件匹配率约 97.2%
- 使用 YuNet 与 SFace 构建本地身份识别模块，并通过 UDP / OSC 对接 Unity 上位机

## 机器人算法实践

**策略学习与闭环评估：** 围绕 ACT、Behavioral Cloning、Chunk BC 与 Diffusion Policy，完成演示数据检查、策略训练、动作分块、闭环 rollout、多种子对比和失败案例分析；重点关注训练损失与真实闭环成功率之间的差异。

**VLA 与训练系统：** 使用 LeRobot、SmolVLA、LIBERO 与 π0.5 相关工具链开展多 GPU 训练、官方闭环评估、checkpoint 对比、replanning、跨本体测试和失效诊断，积累了模型/数据/动作契约检查、显存与 CUDA 调试、随机性控制和实验复现经验。

**机器人软件与策略运行时：** 在 ROS2 Jazzy 中搭建 Python policy node 与 C++ executor 协同链路，结合 MoveIt、ros2_control、KDL IK 和 Panda 仿真，将 20 Hz 策略输出衔接至 100 Hz 执行层；进一步研究异步推理中的队列积压、动作陈旧度、最新样本语义和重规划时机。

**感知、控制与规划：** 完成基于度量几何的点云感知、RGB 与 3D 表征对比、多视角融合和标定扰动分析，并在 MuJoCo 等环境中开展闭环控制、逆运动学、碰撞检测、轨迹执行与规划失败分析。

## 技术能力

- **Languages:** Python, C++, MATLAB
- **Machine Learning & Vision:** PyTorch, OpenCV, YOLO Pose, deep learning, metric 3D perception, multi-view fusion
- **Robot Learning:** ACT, imitation learning, Behavioral Cloning, Diffusion Policy, action chunking, LeRobot, SmolVLA
- **Robotics:** ROS2, MoveIt, ros2_control, robot kinematics, motion planning
- **Simulation & Evaluation:** ManiSkill, MuJoCo, LIBERO, closed-loop rollout, controlled ablation, failure analysis
- **Systems:** Linux, Git, Docker, CUDA, DDP, DeepSpeed ZeRO, asynchronous inference, remote GPU development

## 研究与系统基础

博士阶段围绕复杂惯性传感系统开展的研究，使我形成了对动态系统、传感不确定性、误差传播、参数辨识、系统调试与软硬件交互的系统性理解。这些能力正在机器人感知、闭环控制、策略评估与运行时系统中形成可迁移的技术优势。

当前进一步关注 VLA 与机器人基础模型、跨本体泛化、恢复行为学习、策略时延与新鲜度、3D 表征鲁棒性，以及 OpenPI / π0 系列训练和部署方法。更完整的教育、经历、项目与技能信息请查看 [CV 页面]({{ '/cv/' | relative_url }}).
