---
title: "Vellum Cloth Simulation in Houdini"
date: 2024-03-01T21:14:13-07:00
draft: false
images:
    - "/images/vellum-01/vellum-many-02.jpg"
summary: Experiments in Vellum Simulation in houdini.
tags:
    - Houdini
    - Motion Graphics
    - Simulation
    - Redshift
    - Rendering
    - Procedural
weight: 5
---

> My detailed notes on these experiments are in my [Second Brain](https://notes.mzmr.xyz/tags/vellum/).

## Project Overview
This project focused on utilizing the Vellum cloth simulation system in Houdini. The primary objectives included learning how to control constraints on the cloth for better art direction and understanding how to make Vellum objects interact with other elements in the scene. The project explored two scenarios: one involving a cloth being pulled invisibly through the air, and the other depicting a group of Vellum balls squeezing through holes.

## Process Details
- **Vellum Cloth Simulation:**
  - **Constraint Control:** Explored techniques for controlling constraints on the cloth to achieve desired deformations and behaviors. This involved adjusting parameters such as stiffness, bend resistance, and stretchiness to fine-tune the cloth's movements and interactions.
  - **Art Direction:** Experimented with various artistic approaches to guide the behavior of the cloth simulation, such as creating wind forces or applying external forces to mimic specific actions or environmental conditions.
- **Interactions with Other Objects:**
  - **Cloth Dynamics:** Explored methods for making Vellum objects interact with other elements in the scene, such as colliding with surfaces or being affected by external forces. This included scenarios where the cloth was pulled through the air or interacted with obstacles in the environment.
  - **Simulation Accuracy:** Ensured the accuracy and realism of the cloth interactions by adjusting collision parameters, refining the simulation resolution, and optimizing collision geometries for efficient computation.

### Experiments in vellum:

{{< imageGrid gridstyle="asymetric" gridsize="250px" gap="10px" >}}
  ![SA concept](/images/vellum-01/baloon1.gif)
  ![SA concept](/images/vellum-01/belt1.gif)
  ![SA concept](/images/vellum-01/circle2.gif)
  ![SA concept](/images/vellum-01/hairybelt.gif)
  ![SA concept](/images/vellum-01/holes.gif)
  ![SA concept](/images/vellum-01/vellumactivate.gif)
  ![SA concept](/images/vellum-01/vellumtest.gif)
{{< /imageGrid >}}


## Challenges and Solutions
- **Constraint Management:** Managing constraints on the cloth to achieve desired behaviors while avoiding instability or unrealistic deformations posed a significant challenge. Solutions involved iteratively adjusting constraint parameters and experimenting with different simulation setups to achieve the desired results.
- **Interaction Realism:** Ensuring realistic interactions between the Vellum objects and the environment required careful consideration of collision settings, object properties, and simulation parameters. Solutions included refining collision geometries, adjusting friction properties, and fine-tuning simulation forces to produce convincing interactions.
  
## Outcome
The project resulted in visually compelling simulations showcasing the capabilities of the Vellum cloth simulation system in Houdini. Through experimentation and iterative refinement, the simulations effectively demonstrated controlled cloth deformations and realistic interactions with other objects in the scene.

## Gallery

### Vellum Direction Experiements:

{{< youtube 0L09az2Subk 800 450 0 1>}}

### Abstract Vellum Setup:

{{< youtube YS_Hxo1DD_U 800 450 0 1>}}

### Render Stills:
{{< imageGrid gridstyle="asymetric" gridsize="250px" gap="10px" >}}
  ![SA concept](/images/vellum-01/vellum-many-01.jpg)
  ![SA concept](/images/vellum-01/vellum-many-02.jpg)
  ![SA concept](/images/vellum-01/vellum-many-03.jpg)
{{< /imageGrid >}}

