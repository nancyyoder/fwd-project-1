# Milestone 1

For my project I am going to create an information infographic/web experience about the role of bees in pollination and the outcome of this process. I have always been very passionate about saving the bees and dedicated many high school presentations and projects to this topic. It is my go to topic when I am initially unsure of what to focus on, and I never find a lack of passion when researching and communicating the importance of bees. For this web experience, I want to focus on educating children and keeping my explanation simple yet fun and interactive. Part of the reason my audience is children is because it will be much easier to focus on explaining the big picture of pollination in an infographic/web experience rather than the smaller more scientific aspect. Additionally, my graphic design style caters more toward children as I use fun colors, large blocky shapes, and expressive faces. My whole life I have doodled bees wearing little red sneakers (a testament to my obsession with bees) and therefore the bee in this infographic will be wearing sneakers.

# Try to find a picture of a past sketch

My infographic will allow the user to play the role of the bee and bring pollen from one flower to another and watch more flowers grow. They will be instructed on how to complete the process and will not be able to move on unless they follow the steps. Their cursor will be connected to the bee, therefore where ever they move their cursor is where the bee will fly.

This wireframe, made on Adobe Illustrator is a low fidelity mockup of the page set up of my infographic. I want the site to be super minimal, highlighting primary colors, and giving the essence of a children’s book. One flower will already have 4 larger pollen dots that when clicked on will be transferred to the bee who will fly over to the other flower and click on it to transfer the pollen. Once the pollen is successfully transferred the new flowers will grow. The text at the top of the screen will give the user instructions such as “Click on the left flower to collect its pollen”.

![Wireframe I created for this project](beeWireframe.png)

This project is not possible without the implementation of JavaScript. I will use multiple event listeners to react on screen clicks, html changes, and mouse movements. Because this web experience will be entirely interactive, it will not move on until the user takes action. JavaScript will be used to make this infographic possible, which I would claim is a pretty significant enhancement.

In my research for this project I have referenced multiple source about pollination and bees. I have mainly been looking at sources intended for kids to exemplify the type of communication my infographic will take on. 

[https://www.coolkidfacts.com/pollination-for-kids/](https://www.coolkidfacts.com/pollination-for-kids/)

[https://www.keepingbackyardbees.com/the-role-of-nectar-honey-and-pollen-in-the-hive/](https://www.keepingbackyardbees.com/the-role-of-nectar-honey-and-pollen-in-the-hive/)

[https://www.ypsilibrary.org/2020/06/bees/](https://www.ypsilibrary.org/2020/06/bees/)


I will also be look scouring the web during my coding process to find all things JavaScript. I have worked with JavaScript but never to this scale, where the JavaScript will be tracking coordinates and triggering objects to move around the screen.

My plan for making this website responsive is to shorten the blue space in the middle of the flowers for different screen sizes. On a large screen the flowers will be farther apart and the user will have to move the mouse farther. However, on a smaller screen the flowers will be smaller and a lot closer together so they are able to fit on the screen.

My specific goals are listed below in list format: 
- Prototyping/proof of concept
    - image following the mouse
    - animation triggered by JavaScript
    - text instructions only moving forward once user has complete an action.
- MVP (Minimum Viable Product)
    - bee is the cursor
    - when you click on the first flower the dots that represent pollen disappear
    - when you click on the second flower the dots appear
    - one dot at a time (3-4) or not one at a time (that is a decision I have to make)
    - text at the top with instructions → based on the step the user is on
    - once four dots are on the second flower, more flowers grow from its roots
    - call to action at the end
        - save the bees or we won’t have any flowers! (or other necessary plants)
    - restart button
- Stretch goals
    - bee moves directions based on the direction the mouse is moving
    - zoom in on the first flower to show the dots close up
    - zoom in second flower to describe the male and female parts of the flower
    - smooth transitions on these screen changes
    - roots animation showing them connecting when more flowers grow