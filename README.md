# Yue Xin — Robotics and Embodied AI Portfolio

Source repository for [iconssss.github.io](https://iconssss.github.io), my professional portfolio and online CV for robot learning, embodied AI, and robot algorithm opportunities.

I am a direct Ph.D. student in the Department of Precision Instrument at Tsinghua University. My background combines physics, mathematics, control, complex sensing-system modeling, and experimental engineering. My current work spans visuomotor policy learning, VLA training and evaluation, computer vision, metric 3D perception, latency-aware robot systems, ROS2 policy execution, and motion planning.

## Site Content

- **About:** concise professional positioning, engineering evidence, robotics practice, and research background
- **CV:** detailed education, experience, selected technical projects, skills, current focus, and honors

## Local Development

This site is built with Jekyll and deployed through GitHub Actions to GitHub Pages.

```bash
docker compose pull
docker compose up
```

The local site is available at `http://localhost:8080`.

Before committing content changes:

```bash
npx prettier . --write
docker compose up --build
```

## Deployment

Commits pushed to the `main` branch trigger the deployment workflow. The generated site is published to the `gh-pages` branch and served at [iconssss.github.io](https://iconssss.github.io).

## Theme and License

The site is based on the open-source [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme and has been customized for this portfolio. Theme code remains available under the MIT License; see [LICENSE](LICENSE).
