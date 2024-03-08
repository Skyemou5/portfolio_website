---
title: "Ratchet and Clank Scene"
date: 2024-03-01T21:15:17-07:00
draft: False
images:
    - "/images/ratchet-and-clank/ratchet-clank-screen.png"
tags:
    - Unity
    - 3D Modeling
    - Blender
    - CSharp
    - Game Dev
summary: Recreation of a scene from Ratchet and Clank as close as possible in Unity. Various tools like Blender, Unity, Substance were used to acoomplish this.
weight: 2
---

{{< youtube lDjLKo46BX8  800 450 0 1>}}


## Overview
This project involved a detailed recreation of a scene from the beloved Ratchet and Clank game, meticulously built from the ground up. Leveraging the capabilities of Unity, Blender, Substance Designer, and Substance Painter, this endeavor showcases a blend of technical precision and creative artistry in 3D modeling, texturing, animation, lighting, and post-processing.

Reference image from original game:

{{< image src="/images/ratchet-and-clank/ratchet-reference.jpg" alt="My Image" width="100%" >}}

## Tools Used
- **Unity:** Served as the primary platform for scene assembly, animation, lighting, and post-processing, integrating various elements into a cohesive and dynamic environment.
- **Blender:** Used for intricate 3D modeling, employing sophisticated instancing methods and UV mapping techniques to optimize asset creation and ensure visual fidelity.
- **Substance Designer & Painter:** Key in crafting and applying high-quality textures to the meshes, these tools enabled the addition of intricate details and realistic materials to the scene.

### Modeling
I primarily used Blender to model the assets for this project. Several techniques were important in this project:
- Instancing
- Appending Files
- Extensive use of Mirror Modifier
- UV Stacking


{{< youtube 3yZ52-wNiuo 800 450 0 1>}}


Tower Meshes and UVs:
{{< imageGrid gridstyle="masonry" gridsize="200px" gap="10px" >}}
  ![spaces aces](/images/ratchet-and-clank/tower-01-mesh.png)
  ![spaces aces](/images/ratchet-and-clank/tower-01-uv.png)
{{< /imageGrid >}}
{{< imageGrid gridstyle="masonry" gridsize="200px" gap="10px" >}}
  ![spaces aces](/images/ratchet-and-clank/tower-02-mesh.png)
  ![spaces aces](/images/ratchet-and-clank/tower-02-uv.png)
{{< /imageGrid >}}
{{< imageGrid gridstyle="masonry" gridsize="200px" gap="10px" >}}
  ![spaces aces](/images/ratchet-and-clank/tower-03-mesh.png)
  ![spaces aces](/images/ratchet-and-clank/tower-04-uvis.png)
  ![spaces aces](/images/ratchet-and-clank/tower-03-uv.png)
{{< /imageGrid >}}
{{< imageGrid gridstyle="masonry" gridsize="200px" gap="10px" >}}
  ![spaces aces](/images/ratchet-and-clank/tower-06-mesh-02.png)
  ![spaces aces](/images/ratchet-and-clank/tower-06-uv.png)
{{< /imageGrid >}}
{{< imageGrid gridstyle="masonry" gridsize="200px" gap="10px" >}}
  ![spaces aces](/images/ratchet-and-clank/platform-mesh.png)
  ![spaces aces](/images/ratchet-and-clank/bridge.png)
{{< /imageGrid >}}

Taxi Mesh and UVs:

{{< imageGrid gridstyle="masonry" gridsize="200px" gap="10px" >}}
  ![spaces aces](/images/ratchet-and-clank/taxi-wire.png)
  ![spaces aces](/images/ratchet-and-clank/taxi-uv-project.png)
  ![spaces aces](/images/ratchet-and-clank/taxi-uv.png)
{{< /imageGrid >}}

My pipeline for this was Blender to Unity with fbx, including the camera, because this was mostly a static scene in unity I could set everything up in Blender first then export:

{{< imageGrid gridstyle="symmetric-four" gridsize="200px" gap="10px" >}}
  ![spaces aces](/images/ratchet-and-clank/main-scene-blender.png)
  ![spaces aces](/images/ratchet-and-clank/main-scene-blender-02.png)
  ![spaces aces](/images/ratchet-and-clank/main-scene-blender-camera.png)
  ![spaces aces](/images/ratchet-and-clank/main-scene-outliner.png)
{{< /imageGrid >}}

As you can see from the outliner image there are a lot of collections. The workflow went as follows:
- create building in separate file with correct UVs and Vertex Colors.
- Append file to main-scene file.
- Instance the appended file to layout the scene.

With this workflow I was able to use the same materials for each object without having to bring in the whole scene into substance. This also saved a lot of memory because of the instancing.

Then This was exported into unity and all the materials, lighting, animation and post-processing set up there.

{{< youtube -HgehbrJBaw 800 450 0 1>}}

## Challenges Faced
- Recreating iconic elements with high fidelity to the original game while ensuring optimal performance.
- Implementing advanced texturing techniques to achieve the game's unique aesthetic style.
- Balancing lighting and post-processing effects to capture the mood and atmosphere of the original scene.

## Solutions
- Utilized Blender's advanced modeling features to accurately model the scene, focusing on efficient instancing and UV mapping to maintain performance.
- Leveraged Substance Designer's procedural capabilities and Substance Painter's detailed texturing tools to mimic the game's textures and materials closely.
- Carefully adjusted Unity's lighting and post-processing settings to emulate the original scene's ambiance, enhancing the overall immersion and visual appeal.

## Outcome
The final product is a highly detailed and faithful recreation of the Ratchet and Clank game scene, demonstrating a deep understanding of various software tools and techniques. This project not only showcases technical 3D modeling and texturing skills but also highlights the ability to capture and recreate the essence of a dynamic game environment.

