---
title: "Houdini Waterfall Simulation"
date: 2024-03-01T21:08:18-07:00
draft: false
images:
    - "/images/waterfall/waterfall.png"
weight: 4
summary: This was a project I did while at UVU to learn fluid simulations in Houdini in addition to rendering and compositing.
tags:
    - Houdini
    - Simulation
    - Rendering
    - Redshift
    - Compositing
    - Fusion
---

Final Video:

{{< youtube 1rbfkeWYUyY 800 450 0 1>}}  

Still render:

{{< imageGrid gridstyle="asymetric" gridsize="100px" gap="10px" >}}
  ![waterfall viewport](/images/waterfall/waterfall.png)
{{< /imageGrid >}}

## Project Overview
This project showcases a realistic waterfall simulation, meticulously crafted in Houdini and rendered using Redshift. The final composition was achieved in Fusion, part of DaVinci Resolve, where detailed color grading added the finishing touches to this visually stunning piece. This project represents a significant milestone in my learning journey with Houdini, focusing on complex simulation workflows, material setup, and rendering techniques.

## Tools Used
- Houdini: Simulation
- Redshift: Rendering
- DaVinci Resolve (Fusion): Compositing and Color Grading
- EXR: Image Format for Render Passes

## Project Details

### Simulation in Houdini
- **Description:** The simulation utilized Houdini's DOP network to create the fluid dynamics of the waterfall. The process involved learning general simulation workflows, including mesh caching and fine-tuning fluid simulations.
- **Skills Learned:** Gained expertise in Houdini's simulation tools, understanding the nuances of fluid dynamics, and optimizing simulation settings for realistic results.
- **Challenges:** Initially struggled with the simulation scale, affecting times and resolution, requiring iterative adjustments to achieve the desired high-resolution outcome for film.

Waterfall and rocks in Houdini's viewport mid simuation:

{{< imageGrid gridstyle="asymetric" gridsize="160px" gap="10px" >}}
  ![waterfall viewport](/images/waterfall/waterfall-viewport-01.jpg)
  ![waterfall viewport](/images/waterfall/waterfall-viewport-02.jpg)
{{< /imageGrid >}}

Houdni node graphs:

{{< imageGrid gridstyle="asymetric" gridsize="160px" gap="10px" >}}
  ![obj level graph](/images/waterfall/waterfall-graph-01.jpg)
  ![geo graph](/images/waterfall/waterfall-graph-02.jpg)
{{< /imageGrid >}}

### Cliff Generation in Houdini
- **Description:** Cliffs surrounding the waterfall were generated using Signed Distance Fields (SDFs) in Houdini, enhanced with dicing and displacement along with high-resolution textures in the Redshift material.
- **Skills Learned:** Developed skills in procedural terrain generation and integrating these with rendering techniques to create realistic environments.
- **Challenges:** Faced challenges in achieving the right level of detail and realism, requiring multiple iterations and fine-tuning.

### Rendering with Redshift
- **Description:** The scene was rendered in Redshift, using EXRs with render passes to capture detailed data for post-processing. This stage involved setting up materials specifically designed for fluid rendering to capture the waterfall's essence realistically.
- **Skills Learned:** Advanced understanding of Redshift's rendering capabilities and how to effectively use render passes to facilitate detailed compositing.
- **Challenges:** Encountered and resolved issues during render time, necessitating multiple rendering iterations to perfect the visual output.

{{< imageGrid gridstyle="asymetric" gridsize="300px" gap="10px" >}}
  ![redshift material nodes](/images/waterfall/waterfall-redshift-materials.jpg)
  ![test-render](/images/waterfall/waterfall-rock-render.jpg)
  ![waterfall viewport](/images/waterfall/waterfall.png)
  ![waterfall viewport](/images/waterfall/waterfall-previs-render.png)
{{< /imageGrid >}}

### Compositing in DaVinci Resolve's Fusion
- **Description:** In Fusion, additional elements like mist and a rainbow were composited to enhance the scene's realism. Extra motion blur was added to increase the sense of movement in the waterfall.
- **Skills Learned:** Enhanced skills in compositing by adding atmospheric effects and integrating them seamlessly with the base render.
- **Challenges:** The compositing required a delicate balance to maintain realism while adding artistic enhancements.

### Color Grading in DaVinci Resolve
- **Description:** Color grading played a crucial role in finalizing the look of the clip, setting the mood, and enhancing the realism of the simulation.
- **Skills Learned:** Developed a deeper understanding of color theory and grading techniques to enhance visual storytelling.
- **Challenges:** The challenge was to apply color grading that complements the scene without overpowering the inherent details and realism of the simulation.

{{< imageGrid gridstyle="asymetric" gridsize="160px" gap="10px" >}}
  ![redshift material nodes](/images/waterfall/waterfall-resolve.jpg)
{{< /imageGrid >}}

## Challenges
- This project was an intense learning experience, dealing with complex simulation and rendering workflows. It required persistence and problem-solving to overcome the various technical challenges encountered along the way.

## Outcome
The result is a brief yet breathtakingly realistic waterfall clip that showcases my ability to handle complex visual effects workflows, from simulation to final color grading. This project not only pushed my technical abilities but also allowed me to develop a more artistic eye for detail, composition, and color.

