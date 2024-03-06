---
title: "Pysoma - Cross platform pipeline management tool for small teams"
date: 2024-03-01T21:06:19-07:00
draft: false
summary: Pipeline tool developed in Python to unify project workflows on small teams accross win,mac, and linux for teams using houdini.
images:
    - "/images/pysoma/pysomaicon.png"
displaystyle: "grid"
layoutStyle: "masonry"
tags:
    - Houdini
    - Python
    - Linux
    - Pipeline
    - VFX
    - Film
weight: 1
---

[Pysoma Github](https://github.com/Skyemou5/Pysoma)

I developed this tool to help my senior project team finish a cinematic for the game we were working. Sadly the cinemati never finished, but this tool lives on.

This tool streamlines Houdini project management, addressing common challenges and inefficiencies in environment setup, project configuration, and management. Designed for Houdini users across various platforms, it ensures consistency and efficiency in project setups.

> The name Pysoma comes from Pyrosome. Very cool jellyfish like creatures that live as a colony that acts as a single creature. I thought the analogy was fun for working on creative projects and doing pipeline work so everyone can work together to make a project happen.

## Features

### Environment Initialization
Automatically configures the environment based on the operating system, ensuring seamless access and functionality of Houdini's modules.

### Command-Line Interface
A user-friendly command-line interface allows for easy interaction with the tool, enabling users to create, manage, and configure projects with simple commands.

### Project Management
- **Project Creation**: Create new projects in designated directories, with options for GUI interaction or current directory setup.
- **Project Listing & Modification**: View and modify existing projects, rescan directories, and clear project caches to maintain organization.
- **Project Initialization**: Initialize or reinitialize projects to apply standardized configurations and settings.

### Configuration Management
Utilizes YAML templates to standardize project configurations, promoting consistency and reliability across different systems and user environments.

### Project Interaction
Manage individual components, such as shots within a project, providing users with detailed control over their project's structure and settings.

## Usability
The tool's design focuses on simplicity and efficiency, offering a set of intuitive command-line options for comprehensive project management. For example, users can easily create a new project or list existing ones with straightforward commands.

In addition to built in command line arguments, there is also a simple user choice tree if you run the application without any arguments.

{{< image src="/images/pysoma/pysoma-decide-graph-01.png" alt="My Image" width="100%" >}}

{{< image src="/images/pysoma/decide-graph-02.png" alt="My Image" width="100%" >}}

{{< image src="/images/pysoma/decide-graph-03.png" alt="My Image" width="100%" >}}


{{< image src="/images/pysoma/pysoma-entry.png" alt="My Image" width="100%" >}}



## Technical Details
Developed using Python, this tool integrates with various operating systems, ensuring compatibility and flexibility. It leverages YAML for configuration templates and supports a range of Houdini-specific settings and customizations.

It was tricky solving the pathing issues for cross platform support (Mac, Windows, Linux). I used various libraries, notably *pathlib* to generalize my library functions to work for all systems. One of the main issues was the serialization of the datastructure into yaml, and figuring out how the user should interact with the yaml template files.

Additionally the script opens subshells depending on the OS in order to initialize the houdini shell enviornment and inject the enviornment variables and open the project correctly.

## Impact and Benefits
I had significant improvements in workflow efficiency and project consistency. The tool not only saves time but also ensures that project environments are reproducible and standardized, enhancing collaboration and portability. This tool allows easy use of asset libraries with in houdini files using enviornment variables like *$TEXTURE* and makes sure they work on each team members machine correctly regardless of OS. 

### Challenges
Python is not the most elegant language and it's easy to become trapped in dependency hell. In retrospect I would not choose python for the main part of this tool. I still haven't successfully made this tool easily packagable for users on any OS. But I learned so much from my journey with this.

I am currently working on a new version of this in Rust, it is in very early stages however.

## More Detail

```bash
# Create a new project
$ ./pysoma/app/main.py -pn /path/to/new/project
```

Below is the generated *help* from the pysoma tool:

```md
-------------------------PYSOMA-------------------------

positional arguments:
  {info,config,create-projects,add-projects,open-project,shots}
                        Commands
    info                display helpful information about the app and projects
    config              manage app and project configuration
    create-projects     Create new project(s)
    add-projects        Add new project(s)
    open-project        Open existing project
    shots               open or create shot folders

options:
  -h, --help            help for help if you need some help
  --version             show program's version number and exit

===================================================================================================
Subparser 'info'
usage: Pysoma [options] info [-h] [-d | -c]

--------------------Useful info about app and projects--------------------

options:
  -h, --help           show this help message and exit

info:
  -d, --documentation  opens documentation - TODO
  -c, --config         prints paths of config files

===================================================================================================

Subparser 'config'
usage: Pysoma [options] config [-h]
                               [-lp {names,more,path} | -rs | -cp | -tll | -I | -i | -dp | -pp | -mp MOVE_PROJECTS [MOVE_PROJECTS ...]]

--------------------Manage configuration--------------------

options:
  -h, --help            show this help message and exit

config:
  -lp {names,more,path}, --list-projects {names,more,path}
                        List currently cached projects
  -rs, --rescan-folders
                        rescan cached directories
  -cp, --clear-project-cache
                        clear project cache
  -tll, --toggle-load-last
                        toggle load-last config
  -I, --init-only       Forces ONLY the initialization step
  -i, --init            Forces initialization
  -dp, --default-project
                        sets the default project to open
  -pp, --prune-projects
                        checks saved projects to see if they exist and removes them if they don't
  -mp MOVE_PROJECTS [MOVE_PROJECTS ...], --move-projects MOVE_PROJECTS [MOVE_PROJECTS ...]
                        Moves named projects to new root path. !This will break you're project if you aren't using
                        env vars and relative paths!

===================================================================================================

Subparser 'create-projects'
usage: Pysoma [options] create-projects [-h] [-p PATH_PROJECT [PATH_PROJECT ...] | -g | -cwd CWD_PROJECT
                                        [CWD_PROJECT ...]]

--------------------Create new project(s) that don't exists yet--------------------

options:
  -h, --help            show this help message and exit

Create Project(s):
  -p PATH_PROJECT [PATH_PROJECT ...], --path PATH_PROJECT [PATH_PROJECT ...]
                        add project at input path(s), then include names of new projects to add to folder
  -g, --create_gui-project
                        create new project at location with gui
  -cwd CWD_PROJECT [CWD_PROJECT ...], --craete-cwd-project CWD_PROJECT [CWD_PROJECT ...]
                        create new project at current working directory

===================================================================================================

Subparser 'add-projects'
usage: Pysoma [options] add-projects [-h] [-p PATH_PROJECT [PATH_PROJECT ...] | -ui | -cn]

--------------------Add project(s) that already exists--------------------

options:
  -h, --help            show this help message and exit

Add Project(s):
  -p PATH_PROJECT [PATH_PROJECT ...], --path PATH_PROJECT [PATH_PROJECT ...]
                        add project at input path(s)
  -ui, --add_gui-project
                        create new project at location with gui
  -cn, --add_current-dir-project
                        create new project at current path

===================================================================================================

Subparser 'open-project'
usage: Pysoma [options] open-project [-h] [-n BY_NAME | -l | -pl]

--------------------Open a project saved in config--------------------

options:
  -h, --help            show this help message and exit

Open Project:
  -n BY_NAME, --by-name BY_NAME
                        opens project by name
  -l, --load-last       Load last opened file
  -pl, --open-project-list
                        load project from list of projects

===================================================================================================

Subparser 'shots'
usage: Pysoma [options] shots [-h] [-os [OPEN_SHOT] | -cs CREATE_SHOTS]

--------------------Open Or create shots in a project--------------------

options:
  -h, --help            show this help message and exit

shot:
  -os [OPEN_SHOT], --open-shot [OPEN_SHOT]
                        open shot for project
  -cs CREATE_SHOTS, --create-n-shots CREATE_SHOTS
                        create any number of shots

===================================================================================================
```
