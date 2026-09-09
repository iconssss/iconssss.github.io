// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Professional CV covering robotics, computer vision, research, engineering experience, and technical projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-selected-projects",
          title: "Selected Projects",
          description: "Selected robot learning and embodied AI projects with reproducible evidence.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-latency-aware-robot-policy-runtime",
          title: 'Latency-Aware Robot Policy Runtime',
          description: "Freshness-aware scheduling for asynchronous learned control",
          section: "Projects",handler: () => {
              window.location.href = "/projects/latency-aware-runtime/";
            },},{id: "projects-metric-3d-visuomotor-learning",
          title: 'Metric 3D Visuomotor Learning',
          description: "Low-data control, viewpoint robustness, and multi-view recovery",
          section: "Projects",handler: () => {
              window.location.href = "/projects/metric-3d-perception/";
            },},{id: "projects-smolvla-fine-tuning-amp-closed-loop-evaluation",
          title: 'SmolVLA Fine-Tuning &amp;amp; Closed-Loop Evaluation',
          description: "100K-update VLA adaptation and an audited 400-episode LIBERO benchmark",
          section: "Projects",handler: () => {
              window.location.href = "/projects/smolvla-libero/";
            },},{id: "projects-reliable-vla-fine-tuning-amp-evaluation",
          title: 'Reliable VLA Fine-Tuning &amp;amp; Evaluation',
          description: "4-GPU SmolVLA training and RNG-controlled LIBERO evaluation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vla-evaluation/";
            },},{id: "projects-xr-1-vla-temporal-alignment",
          title: 'XR-1 VLA Temporal Alignment',
          description: "Testing whether action-prefix conditioning provides latency robustness",
          section: "Projects",handler: () => {
              window.location.href = "/projects/xr1-temporal-alignment/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%69%6E%79%75%65%34%34%39%36@%31%36%33.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
