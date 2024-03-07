---
title: "Mograph Loops"
date: 2024-03-06T20:54:01-07:00
draft: false
images:
    - "/images/mograph/rainbow-pyramid.png"
summary: Loopable motion graphics shots. 
tags:
    - Houdini
    - Blender
    - Render
    - Eevee
    - Redshift
    - Cycles
    - Animation
    - Motion Graphics
    - VFX
    - Compositing
weight: 9
---

A collection of some of looping motion graphics clips I've made over the years. They may or may not get their own entries someday.

> If the loops don't work correctly - right click on the youtube videos and select loop, then they should play correctly :)

---

## Tetrahedron Rainbow

I used houdini to generate the recursive subd shapes on the tetrahedron, then I split it into segments. I then used some fun math and a houdini library called MOPs (motion operators - it tries to simplify motion graphics workflows ). I used a gradient weight on each segment to determine the offset of the animaton. Then I exported the alembic to blender and shaded and rendered it in eevee, the shading was fun, I used some fun math to make those color bands. 

{{< youtube V29MgOUO2rg 800 450 0 1>}}

---

## Screw Animation Loop

This was all Blender and rendered in Eevee. 

{{< youtube R7H2Imk8i1w 800 450 0 1>}}

---

## Abstract Loop - Blender Octane

{{< youtube NqdwNA0i3-Q 800 450 0 1>}}

---

## Recursive V

This was all Houdini. I used UV packing on the geometry of the Vs to fit them into another V, then I used some MOPs operators to drive roation and shader change.

{{< youtube vof_K9zLpkw 800 450 0 1>}}

---

## Recursion

{{< youtube VtaCPL_EEro 800 450 0 1>}}

---

## Recursive Subd Animation

Playing with recursion is fun. In this one I animated the recursive subdivision. I tried to go for an alien artifact feel.

{{< youtube TQ1rOlKFGrk 800 450 0 1>}}

---
