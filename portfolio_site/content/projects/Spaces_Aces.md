---
title: "Spaces Aces - Unity Game"
date: 2024-03-01T21:06:43-07:00
draft: false
images:
    - "/images/spaces-aces/menu-screen.jpg"
summary: This was my senior project at UVU. I worked on a team of 5 people to develop an MVP of an arena space dog-fighting game. Our team got first place at the Digital Media Showcase at UVU in 2022. I worked on pipeline optimisation, realtime FX, procedural systems, modeling, and shaders.
tags:
    - Houdini
    - Unity
    - Blender
    - Shaders
    - Pipeline
    - Game Dev
weight: 1
---

This was my senior project at UVU. I worked on a team of 5 people to develop an MVP of an arena space dog-fighting game. Our team got first place at the Digital Media Showcase at UVU in 2022. I worked on pipeline optimisation, realtime FX, procedural systems, modeling, and shaders.

> Read more from my team lead: 
[KookaNova: Educator, Developer of Space's Aces](https://www.skywardfm.com/post/kookanova-educator-spaces-aces)


{{< youtube 9FHQG70r39Q 800 450 0 1>}}


# Project Overview
## Project Name: Space Aces
### Description
Space Aces was a space arena dogfighting game developed during my senior year of college. The project provided a platform to apply and enhance my skills in various aspects of game development.

Concept art:

{{< imageGrid gridstyle="asymetric" gridsize="160px" gap="10px" >}}
  ![SA concept](/images/spaces-aces/vespid.jpg)
  ![SA concept](/images/spaces-aces/mine-location.jpg)
  ![SA concept](/images/spaces-aces/megani-dragonfly.jpg)
{{< /imageGrid >}}


# My Contributions
## Procedural Generation Systems
- Developed procedural generation systems for asteroids, leveraging algorithms to create diverse and dynamic in-game environments.

### Houdini Procedural Assets
- Utilized Houdini to design procedural shield meshes and object destruction systems, such as for spaceships, contributing to the game's realism and interactivity.

#### Asteroid Tool
- This tool was built in houdini to generate random asteroids for the game level.

{{< imageGrid gridstyle="asymetric" gridsize="160px" gap="10px" >}}
  ![SA concept](/images/spaces-aces/asteroid.jpg)
  ![SA concept](/images/spaces-aces/asteroid-graph.jpg)
{{< /imageGrid >}}

- This tool uses TOPS to chache wedges and then scatter them later.

{{< image src="/images/spaces-aces/asteroidtool.gif" alt="My Image" width="50%" >}}

- The scatter tool places the asteroids with random attributes such as scale and orientation in the game world.

{{< image src="/images/spaces-aces/asteroidfield.gif" alt="My Image" width="50%" >}}


## Cinematic Work
- I worked on a cinematic for the game that unfortunately never was able to be finished due to circumstances outside my control. However I'll share some of my work for that portion.

I modeled film fidelity assets in blender and houdini, often using houdini to ask procedural details like sci-fi paneling, greebles, and cabling.

{{< imageGrid gridstyle="asymetric" gridsize="200px" gap="10px" >}}
  ![spaces aces](/images/spaces-aces/cruiser-01.png)
  ![spaces aces](/images/spaces-aces/cruiser-02.png)
  ![spaces aces](/images/spaces-aces/cables.png)
  ![spaces aces](/images/spaces-aces/greebles-01.png)
  ![spaces aces](/images/spaces-aces/greebles-02.png)
  ![spaces aces](/images/spaces-aces/plating-01.png)
  ![spaces aces](/images/spaces-aces/prison-ship.png)
  ![spaces aces](/images/spaces-aces/prison-ship-02.png)
  ![spaces aces](/images/spaces-aces/prison-ship-engine.png)
{{< /imageGrid >}}

Below are some lookdev renders and early tests. We were setup to use Redshift to render the cinematic.

Planet render tests:

{{< imageGrid gridstyle="asymetric" gridsize="200px" gap="10px" >}}
  ![spaces aces](/images/spaces-aces/planet-01.png)
  ![spaces aces](/images/spaces-aces/planet-02.png) 
{{< /imageGrid >}}

Space Station:

{{< image src="/images/spaces-aces/space-station.jpg" alt="My Image" width="50%" >}}

### Python Project Management and Pipeline Tool (Pysoma)
- Initiated and developed a Python-based tool to streamline project management and pipeline processes, enhancing team efficiency and workflow.
- This tool was specifically for the cinematic and geared towards film work.
- You can find this tool on another page on my portfolio called *Pysoma*



## Unity Development
- Engaged extensively in Unity, focusing on real-time FX, FX graphs, and Shader Graph to create immersive engine thrusters and ship trails.
- Assisted in modeling, contributing to the visual aspect of the game's assets.

Engine FX were created using some houdini for basic mesh generation and then a combination of the Unity Shader Graph systems and Unity VFX graph for particle effects:

{{< imageGrid gridstyle="asymetric" gridsize="200px" gap="10px" >}}
  ![spaces aces](/images/spaces-aces/flam3.gif)
  ![spaces aces](/images/spaces-aces/sparks.gif) 
{{< /imageGrid >}}

I also developed tools to automatically generate destruction meshes and even animations from Houdini to be implimented in Unity:

{{< imageGrid gridstyle="asymetric" gridsize="200px" gap="10px" >}}
  ![spaces aces](/images/spaces-aces/explode.gif)
  ![spaces aces](/images/spaces-aces/explodee.gif) 
{{< /imageGrid >}}

Another challenging system was developing the shield tool. I made a procedural houdini tool to automatically generate a shield mesh for any ship. Then in unity I wrote a fragment shader to handle lasers from other ships shooting the shield and it's reaction and a charge up animation:

{{< youtube TGvoVH818Ck  800 450 0 1>}}

{{< youtube ajQJ52NUkGg  800 450 0 1>}}

I also introduced the team to trim sheet workflow which really helped our optimisation and general enviornment texturing workflow:

{{< image src="/images/spaces-aces/trim.jpg" alt="My Image" width="50%" >}}

# Skills and Technologies
- Procedural Generation: Developed algorithms and systems for generating game content dynamically.
- Python: Crafted a project management tool to automate and streamline workflow.
- Houdini: Used for creating procedural assets and effects.
- Unity: Extensive work on graphics, effects, and overall game mechanics.

# Challenges and Solutions
There were numerous challenges including project and team management, version control, and creating standards for the team to work with including code conventions, design patterns, and file management. 

# Impact and Outcomes
We ended up winning the digital media competition at UVU because of our hard work.It was incredibly rewarding to have a somewhat polished finish project.

# Reflections and Learnings
I learned a lot about working on a team and managing workflows, version control, and the importance of pipeline management on large projects. I also found it very rewarding to impliment procedural tools and systems for my other team members to use.

# More videos

Hangar screen:
{{< youtube tdh090qTJSQ  800 450 0 1>}}


Longer Gameplay video:
{{< youtube WHFOQpm87PQ  800 450 0 1>}}
