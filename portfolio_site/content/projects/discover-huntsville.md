---
title: "Discover Huntsville - AR App developed at Trideum"
date: 2024-03-01T21:08:01-07:00
summary: Discover Huntsville is an AR app I helped create as a tech artist and programmer. I created procedural assets in houdini for the AR experience, designed NPR shaders, and coded in C# using Unity. Additionally I participated in planning and communication between teams and gave presentations and updates during meetings.
draft: false
tags:
    - Houdini
    - Shaders
    - 3D Modeling
    - Pipeline
    - Unity
    - Game Dev
    - Surfacing
    - Programming
images:
    - "/images/dshv/app-06.png"
    - "/images/dshv/rocket2.png"
showInList: true
displayStyle: "grid"
layoutStyle: "masonry"
weight: 0
---

> The app is now available on appstores


## Project Overview
Discover Huntsville is an app developed during my internship with Trideum. The application serves as a tourist guide, helping users explore the city of Huntsville, Alabama, and connect with local art and businesses.

## Overall Contributions
During my internship, I held roles as a 3D Generalist, Technical Artist, and Programmer. My contributions were pivotal in various aspects of the project, including 3D content generation, pipeline optimization, and programming major components of the app.

## Technologies Used
The project utilized several technologies, including:
- Unity
- Mapbox
- Maya
- Blender
- Houdini

## Background
My selection for this internship was influenced by my role in a previous group project overseen by Trideum. My ability to connect technologies, develop pipelines, and optimize workflows proved instrumental in my success at UVU and as a team member at Trideum.

## Specific Contributions
### 3D Content Generation with Houdini, Maya, and Blender
- Generated 3D content using Houdini and Maya, enriching the app with visually appealing assets.

#### Plants generated with Houdini for virtual koi pond

##### Lilly

For this plant I used cable physics to set the stems, UV packing to pack the geometry of the lillypads and some clever vex to connect the cables.

{{< imageGrid gridstyle="asymetric" gridsize="160px" gap="10px" >}}
  ![DSHV app](/images/dshv/lilly-mesh.png)
  ![DSHV app](/images/dshv/uv-pack-lilly.png)
{{< /imageGrid >}}



{{< image src="/images/dshv/lilly-network.png" alt="My Image" width="50%" >}}

##### Waterweed

To generate waterweed, I created a top segment, and a midsegment. These were then duplicated along a spline and rotated randomly creating the appearance of the final plant.

{{< imageGrid gridstyle="masonry" gridsize="150px" gap="10px" >}}
  ![DSHV app](/images/dshv/waterweed-01.png)
  ![DSHV app](/images/dshv/waterweed-section-01.png)
  ![DSHV app](/images/dshv/waterweed-section-02.png)
{{< /imageGrid >}}

{{< imageGrid gridstyle="masonry" gridsize="150px" gap="10px" >}}
  ![DSHV app](/images/dshv/waterweed-network-01.png)
  ![DSHV app](/images/dshv/waterweed-network-02.png)
{{< /imageGrid >}}

Cluster Generator - Uses a TOP network to automate randomizing parameters and saving cached versions out, then picking from that cache to instance to the cluster.

{{< imageGrid gridstyle="masonry" gridsize="150px" gap="10px" >}}
  ![DSHV app](/images/dshv/waterweed-network-03.png)
  ![DSHV app](/images/dshv/waterweed-cluster-generator.png)
{{< /imageGrid >}}

##### Lotus

This used simple petal generation and deformations with some math to form it into a lotus.

{{< imageGrid gridstyle="masonry" gridsize="150px" gap="10px" >}}
  ![DSHV app](/images/dshv/lotus-mesh.png)
  ![DSHV app](/images/dshv/lotus-network.png)
{{< /imageGrid >}}

#### Koi Pond

This was a central feature of one of the AR games. It involved finding a wall with street art of Koi fish and then a Koi pond would appear on the wall and you could design your own fish to put in the pond.

I created the plants as mentioned earler and all the rest of it as well.

{{< image src="/images/dshv/rocket2.png" alt="Koi Pond" width="100%" >}}

> The stylized shaders were also a big part of my work here in Unity.

{{< imageGrid gridstyle="masonry" gridsize="150px" gap="10px" >}}
  ![DSHV app](/images/dshv/rocket_tank_01.png)
  ![DSHV app](/images/dshv/rocket_tank_02.png)
{{< /imageGrid >}}

##### Rocket

I modeled all the rocket pieces in Houdini. That let me make quick changes and iterations and it was easier to add vertex data that I could use in the shader I created in Unity.

{{< imageGrid gridstyle="masonry" gridsize="150px" gap="10px" >}}
  ![DSHV app](/images/dshv/rocket-mesh.png)
  ![DSHV app](/images/dshv/rocket-network.png)
{{< /imageGrid >}}

##### Enviornment of Koi pond

I created several system to generate meshes and rocks for the koi pond. This included the creative use of noise, and remeshing to create the walls, and TOP networks to create random copies of objects.

Backdrop rock wall:

{{< imageGrid gridstyle="masonry" gridsize="200px" gap="10px" >}}
  ![DSHV app](/images/dshv/cliff-mesh.png)
  ![DSHV app](/images/dshv/cliff-network-full.png)
{{< /imageGrid >}}

Ground:

{{< imageGrid gridstyle="masonry" gridsize="200px" gap="10px" >}}
  ![DSHV app](/images/dshv/floor-mesh.png)
  ![DSHV app](/images/dshv/floor-network.png)
{{< /imageGrid >}}

Rocks:

{{< imageGrid gridstyle="masonry" gridsize="250px" gap="10px" >}}
  ![DSHV app](/images/dshv/rock.png)
  ![DSHV app](/images/dshv/rock-network.png)
  ![DSHV app](/images/dshv/rock-network-02.png)
  ![DSHV app](/images/dshv/rock-upper-network.png)
{{< /imageGrid >}}

Scattering the Rocks:

{{< imageGrid gridstyle="masonry" gridsize="200px" gap="10px" >}}
  ![DSHV app](/images/dshv/rocks-placed.png)
  ![DSHV app](/images/dshv/scatter-tool.png)
{{< /imageGrid >}}

### Pipeline Optimization
- Developed efficient pipelines to streamline the development process, ensuring smooth workflows and timely delivery of assets.
- Specifically extending Unity's packaging system in order to more easily modularise the project and make it easier for the team to work on separate components without conflicts.
- Created design documents that covered code conventions, design, conventions, file structure, and name conventions.

### Programming in C#
- Utilized C# programming to build major components of the app, enhancing its functionality and user experience.
- One of my main contributions was working on a custom UI layer that would work more like a conventional mobile app. I learned how to better use some of the more advanced features of C# like generics.
- I also helped to implement the Mapbox Api into unity, which took some considerable reworking for it to work for our use-case.

{{< imageGrid gridstyle="masonry" gridsize="150px" gap="10px" >}}
  ![DSHV app](/images/dshv/app-01.png)
  ![DSHV app](/images/dshv/app-02.png)
  ![DSHV app](/images/dshv/app-03.png)
  ![DSHV app](/images/dshv/app-04.png)
  ![DSHV app](/images/dshv/app-05.png)
  ![DSHV app](/images/dshv/app-06.png)
{{< /imageGrid >}}


### Shader Development
- Created custom shaders to add visual depth and flair to the app's 3D experiences.
- This involved code and using a shader-graph in order to create the shaders.
- I learned a great deal about GPU call stacks, and performance.

(Ufortunately I no longer have access to the project and wasn't able to document visually what work I did here.)

## Achievements & Impact
The Discover Huntsville app achieved significant milestones and positively impacted users by providing an immersive and informative experience of the city.





