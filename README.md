<p align="center">
  <img src="https://user-images.githubusercontent.com/82081817/184133754-b1eb21a9-9ec0-44ee-ad1d-b0f2c00c032a.png" width="50%" />
</p>
<h3 align="center">
	View The Website <a href='https://untroddenapp.netlify.app/'>here</a>
</h3>


## Contents

[The Project Brief](#The-Project-Brief)
<br>
[The-Team](#The-Team)
<br>
[Our App and it's Features](#Our-App-and-its-Features)
<br>
[The Journey](#The-Journey)
<br>
[Tech Stack](#Tech-Stack)
<br>
[Stretch Goals](#Stretch-Goals)

## The Team

- Tom Booth [Github](https://github.com/Plume93) | [LinkedIn](https://www.linkedin.com/in/tom-booth-software-dev/)
- Kieran Gill [Github](https://github.com/KieranWebDev) | [LinkedIn](https://www.linkedin.com/in/kieran-gill/)
- Dan Hawkesford [Github](https://github.com/dhawkesford/) | [LinkedIn](https://www.linkedin.com/in/daniel-hawkesford/)
- Glyn Knight [Github](https://github.com/GLYNKNIGHT) | [LinkedIn](https://www.linkedin.com/in/glyn-knight/)
- Karim Mallah [Github](https://github.com/kmallah) | [LinkedIn](https://www.linkedin.com/in/kmallah/)



# The Project Brief

Untrodden is the result of the Final project set during the School of Code Bootcamp. We were given four weeks to come up with a working product that met the criteria specified in the project brief.

The project brief which was to solve a real world problem and put users at the center of the project.

# Our App and its Features

We settled on solving the problem of the increased cost of living and travel costs combined with restricted freedom of movement by building a site that highlights unique and not so well known beauty spots in the United Kingdom; The key aspect being that it is free and community-based so people can share their own unique loations with the general community. 

<div id="image-table">
    <table>
	    <tr>
    	    <td style="padding:10px">
        	    <img src="https://user-images.githubusercontent.com/82081817/184818554-7cea4aaa-54b4-44fc-8c8a-3c48575a167f.PNG" width="100%"/>
      	    </td>
            <td style="padding:10px">
            	<img src="https://user-images.githubusercontent.com/82081817/184134868-0ea946b6-5f7a-4603-a216-4fbb78c51a09.png" width="100%"/>
            </td>
        </tr>
         <tr>
    	    <td style="padding:10px">
        	    <img src="https://user-images.githubusercontent.com/82081817/184818570-9da7f427-1912-4a31-b1c2-f0be65806319.PNG" width="100%"/>
      	    </td>
            <td style="padding:10px">
            	<img src="https://user-images.githubusercontent.com/82081817/184818577-332bf766-b361-44a7-b16b-8b11204ac85d.PNG" width="100%"/>
            </td>
    </table>
</div>

## Features:

- A descriptive landing page explaining the app and welcoming users to the site
- A sticky navigation bar with links to other pages on the site, as well as the app's logo which redirects to the main Locations page
- Authentication using the Auth0 API
- Locations page:
    - A list of cards detailing each location, each of which links to a page with more information about that location
    - An interactive map with markers for each location, which can be clicked to show a popup with that location's name and a link to its page
    - A filter bar, with options for filtering by region, category or a site's amenities, or any combination thereof
    - A search box for searching for a location by name
- More Info page:
    - Detailed information about each location
    - An option for submitting a form to report any issues about the location, which is sent to the admins' email inbox
    - Options for editing and deleting the page if the user is the location's author
- Add Location page:
    - A form for submitting a new location to the site (only permitted if a user is logged in)
    - Includes form validation and an option for uploading an image of the location to Cloudinary
- Completely mobile responsive

# The Journey: 
## What we learned, the challenges we faced and how we overcame them

- How to work efficiently in a large Agile team, making sure that everyone is heard whilst also ensuring that tasks get completed on time. We managed to maintain a healthy team atmosphere throughout the project, being respectful and working efficiently whilst maintaining an atmosphere of fun and playfulness. It was a great experience and we are all sad to see it end.

- During planning week we found that we would spend a lot of time ideating on a particular idea and getting caught up in smaller details. Thus, we decided to give ourselves time limits for different ideation phases, in order to ensure that we progressed effectively.

- We decided to push ourselves out of our comfort zones a bit and build our app with Nextjs. After researching the pros and cons of the Framework we decided it was more suited to the app we wanted to create, than what we were familiar with.(standard React). Nextjs offers server-side rendering and built in routing out of the box, making our app easily scalable and also optimised the performance for the user over standalone react.

- We quickly fell into a daily routine consisting of morning standups and quick end of day retrospectives. Working this way allowed us to pivot quickly and make changes to our plan as and when needed. Along with this we got into the habit of doing daily merges and regular deploys. This allowed us to solve small bite sized problems regularly, rather than giant stress inducing problems at the end of each week.

- We incorporated several pieces of new technology into our apps that we hadn't used before, such as Mapbox, Cloudinary, AuthO, Material UI and React Hook form. Although, they each came with their own challenges, we managed to persevere, work together and integrate them successfully into our apps. We learned that not all docs are created equal but me managed to navigate them none the less.

- Then we learned The benefits of user feedback. After the second week of development we sent out user feedback and the responses were invaluable. Users pointed out some bugs we had missed and also improvements that could be made in our UI/UX. Although this resulted in us having to ditch some of the code we wrote, we remembered the importance of not getting attached to ideas and focused on the users needs.

- Our final and probably most stressful/ painful lesson was How to navigate Github and avoid merging disasters! After this project we all feel much more comfortable with the various features of git, such as merging, branching and conflict resolution, after hours spent doing just that.	
For a more in depth and complete journey from ideation to completion, watch our final presentation here.

We created our own designs, you can find the links to them below:
- [Ideation board](https://jamboard.google.com/d/1lsXeeJTVmYh1VJCgCAojFYTQxRpDGyqBr-EigMhBPno/edit?usp=sharing)
- [Low-Fidelity Wireframes](https://miro.com/app/board/uXjVOkLFgCE=/?share_link_id=588061726593)
- [High-Fidelity Wireframes](https://www.figma.com/file/Wa6jdblUvjxNHAfYXDnrf8/Untrodden-High-Fidelity-Fireframe?node-id=0%3A1)
- [Component Tree](https://miro.com/app/board/uXjVOkbsGTE=/?share_link_id=816367154564)

For a more in depth and complete journey from ideation to completion, you can watch our final presentation [here](https://youtu.be/6_H7FDGS9Ig).

# Tech Stack

<p align="center">
  <img src="https://user-images.githubusercontent.com/82081817/184824668-e40b04cf-1f45-412d-9ad7-9c8062087d76.PNG" width="80%" />
</p>

# Stretch Goals

### 1 more week:

Admin access to edit or delete all locations. This will allow the admin to take action on any reports they get emailed.
Feature to allow hovering over a card and highlighting the marker on the map.
Autofill address using Google API.
Live location on app.

### 2 more weeks:

User Dashboard, with features such as wishlist locations and visited locations.
A ratings feature.

### 4 more weeks:

Adding gamification features: Users can get badges for writing detailed and accurate descriptions, visiting a certain number of locations and for giving reviews.
