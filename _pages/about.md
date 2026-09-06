---
layout: about
title: About
permalink: /
subtitle: Tsinghua Ph.D. Student | Robot Learning, Computer Vision, and Intelligent Systems

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

在此基础上，我正将系统建模、控制与软硬件协同能力进一步迁移到**机器人学习、具身智能与视觉感知**。目前已完成计算机视觉边缘部署、模仿学习策略训练与评估、VLA 训练调试、ROS2 策略执行链路、三维感知及运动规划等项目实践，求职方向聚焦机器人算法与具身智能。

## 职业方向

- Robot Learning / Embodied AI
- Imitation Learning / Vision-Language-Action Models
- Vision-based Robot Control / Robot Manipulation
- Robot Perception, Policy Learning, and Runtime Systems

## 工程经历

### Goertek · Computer Vision / Algorithm Engineering Intern

面向智能设备交互场景，完成多人实时人体运动感知与身份识别系统的算法开发和 Windows 边缘端交付，覆盖需求分析、数据采集、算法设计、人工标注与评估、GPU 推理优化、身份绑定、通信接口和 Unity 集成。

- 使用 YOLO Pose 与 OpenCV 构建多人姿态和运动分析链路，设计 ROI / slot-based 感知流程与因果时序状态机
- 通过 FP16、时序微批处理、异步视频采集和几何一致预处理，在 RTX 3050 上实现约 30 FPS 的真实人员视频处理
- 在三人历史测试视频上完成 145 个真值事件的逐事件评估，匹配 141 个，事件匹配率约 97.2%
- 使用 YuNet 与 SFace 构建本地身份识别模块，并通过 UDP / OSC 对接 Unity 上位机

## 机器人算法实践

**策略学习与评估：** 在 ManiSkill 操作环境中训练并验证 Behavioral Cloning、Chunk BC 与 Diffusion Policy；围绕演示数据、动作分块和闭环 rollout 建立实验流程。

**VLA 与训练系统：** 使用 LeRobot、SmolVLA 与 LIBERO 开展基础训练、多 GPU 训练、checkpoint 对比、replanning 和成对评估，积累了模型/数据接口检查、显存与 CUDA 环境调试、实验复现经验。

**机器人软件与执行：** 在 ROS2 Jazzy 中搭建 Python policy node 与 C++ executor 协同链路，结合 MoveIt、ros2_control、KDL IK 和 Panda 仿真，将 20 Hz 策略输出衔接至 100 Hz 执行层。

**感知、控制与规划：** 完成点云感知、RGB 与 3D 表征对比、MuJoCo 闭环控制、策略延迟与异步执行实验，以及包含逆运动学、碰撞检测和轨迹执行的 waypoint planning。

## 技术能力

- **Languages:** Python, C++, MATLAB
- **Machine Learning & Vision:** PyTorch, OpenCV, YOLO Pose, computer vision, deep learning, 3D perception
- **Robot Learning:** imitation learning, behavior cloning, Diffusion Policy, action chunking, LeRobot, SmolVLA
- **Robotics:** ROS2, MoveIt, ros2_control, robot kinematics, motion planning
- **Simulation:** ManiSkill, MuJoCo, LIBERO
- **Systems:** Linux, Windows, Git, Docker, CUDA, DDP, DeepSpeed, remote GPU development, UDP / OSC

## 研究与系统基础

博士阶段的研究聚焦复杂惯性传感系统，而非直接以具身智能为研究对象。这段经历使我形成了对动态系统、传感不确定性、误差传播、系统辨识与调试、软硬件交互的系统性理解，也构成了我进入机器人感知、控制与策略部署方向的差异化基础。

目前正在继续探索 VLA、机器人基础模型、先进模仿学习、策略部署与 OpenPI / π0 系列方法。更完整的教育、经历、项目与技能信息请查看 [CV 页面]({{ '/cv/' | relative_url }}).
