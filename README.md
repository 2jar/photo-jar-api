# Photo Jar API

## Introduction

Welcome to Photo Jar! Use this SPA to store and view images to and from the AWS S3 cloud. This app was developed by the Github organization 2JAR, a General Assembly Software Engineering Immersive team in Boston, MA.

**2JAR Development Team:**
+ Jesse Kasumba: (https://github.com/juliojesse25)
+ Jonathan Lee Marcus: (https://github.com/zzyyfff)
+ Alessandra Sangurima: (https://github.com/asangurima)
+ Rob Guempel: (https://github.com/rogu2)

The team was presented the challenge to create a full-stack app for authenticated users to upload images, modify image titles and tags, and delete their own images. This app is intended for a friendly community of photosharing enthusiasts, and under this principle all users can see all photos, however, they can only modify and delete images they own themselves.

This project is born out of the Software Engineering Immersive course at General Assembly Boston (formerly the WDI, Web Development Immersive) and is the client side of our first full-stack team project.

+ Client site: https://2jar.github.io/photo-jar-client/
+ Client repo: https://github.com/2jar/photo-jar-client
+ Server site: https://obscure-eyrie-53470.herokuapp.com/
+ Server repo: https://github.com/2jar/photo-jar-api

## Getting Started
Simply go to https://2jar.github.io/photo-jar-client/, sign up, sign in, and posting images!

## Technologies used
Server Side
+ AWS S3
+ Express JS
+ Node JS
+ Mongoose
+ MongoDB
+ Passport
+ Body-Parser
+ Multer

Client Side
+ HTML
+ CSS + SASS
+ Javascript + jQuery + AJAX
+ Handlebars
+ Bootstrap
+ EXIF-JS
+ Google Maps API

## Getting involved
Interested in playing with the code or contributing? Read on.

#### Installing
+ Fork and clone the respository locally
+ Navigate to the respository locally and run npm install
+ To test locally, run nodemon server.js
+ You will also need to set up the Photo Jar client. See further installation instructions on its repo: https://github.com/2jar/photo-jar-client

#### ERD
Link: https://imgur.com/W9kH3UF

## API Routes
| Verb   | URI Pattern              | Controller#Action     |
|--------|--------------------------|-----------------------|
| POST   | `/sign-up`               | `users#signup`        |
| POST   | `/sign-in`               | `users#signin`        |
| DELETE | `/sign-out`              | `users#signout`       |
| PATCH  | `/change-password`       | `users#changepw`      |
| GET    | `/images`                | `images#index`        |
| GET    | `/images/:id`            | `images#show`         |
| POST   | `/images`                | `images#create`       |
| DELETE | `/images/:id`            | `images#destroy`      |
| PATCH  | `/images/:id`            | `images#update`       |



## Planning and Development and Process
The team was provided 3 days to create a full-stack image handling app. Given the time limitation, establishing communciation norms was essential. Each day the team held standups in the morning and afternoon (as needed) to review progress, identify blockers, and establish next steps. That workflow can generally be summarized as follows:
+ Set communication norms for git commits/push/pulls.
+ Set communciation norms for standup and retrospectives.
+ Review pull requests together and merge on validation. Request changes if changes are required.
+ Draft wireframes and agree on general development direction.
+ Prioritize user-stories.
+ Agree upon ERD.
+ Develop basic html skeleton for form fields on front end.
+ Develop and curl-test authentication routes on server-side and client side.
+ Deploy to remote development branch (git hub) with authentication functioning (both api and client repos).
+ Develop and curl test resource routes (aside from 'post')
+ Integrate with AWS SDK on API and test images return to front end.
+ Set up handlebars to render images dynamically.
+ User testing and error finding
+ Style front end to improve aesthetics.
+ Deploy to production and continue testing.
+ Continue styling & draft readme.
+ Commence stretch goals on new feature branches.

When a functional element doesn't work as exepcted, our strategy is to break down the element into smaller parts, testing to make sure each is functioning as expected. In Javascript, this might involve using console.log() or debugger, while in HTML/CSS this might involve adding a high-contrast, dashed border around a misbehaving element, and, for API usage, it might involve confirming functionality via a curl script or analyzing feedback in the Network tab of the browser development tools. In all situations, We carefully follow the logical sequence of events and make sure we understand what is going on.

When one of us exhausted our individual ability to debug a situation, we discuss as a team so as to not lose significant time in our development process.

Finally, if an answer hasn't been found, we create a showcase of the problem, including example code, the steps to reproduce the problem, and what we've attempted so far, and we use this to ask for help from colleagues and the community of programers.

## Client Wireframe
Link: https://imgur.com/kVIVsjR

## User Stories
+ As an unregistered user, I would like to sign up with email and password.
+ As a registered user, I would like to sign in with email and password.
+ As a signed in user, I would like to change password.
+ As a signed in user, I would like to sign out.
+ As a signed in user, I would like to upload an image to AWS.
+ As a signed in user, I would like to update the meta-data of my image on AWS.
+ As a signed in user, I would like to see the name of all images on AWS.
+ As a signed in user, I would like to see the thumbnail of all images on AWS.
+ As a signed in user, I would like to delete the reference of my image from the database.
+ As a signed in user, I would like to see the following meta-data for any image:
- date created/uploaded
- date modified
- owner (user who uploaded the image)
- tag

#### Reach Goal(s)
+ "collaborators" can be chosen; they have permission to read from and write to images.
+ As a signed in user, I would like to download images from AWS.

#### Team User Stories:
+ As a user, I would like the app to function properly on my mobile device.
+ As a front-end developer, I would like to have RESTful routes.

## Unsolved Problems & Future Direction
- Accessibility standardization for form fields
- Allow users to add tags to images which they do not own.
- Allow users to sort by date.
- Auto sign-in on sign-up.
- Social Sharing
- Image ranking
- Aesthetic and interactive redesign with a trained UX/UI designer.

## License
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact asangurima@gmail.com, jonathan.marcus@gmail.com, juliojesse25@gmail.com, and rguempel@gmail.com.

## Acknowledgments
Special thanks to Jennifer Meade, Erica Salling, Ben Jenkins, Toni Langley, Jordan Allain, Caleb Pearce, Danny Kirschner, Naida Rosenberger, GA WDI-30, and everyone at General Assembly Boston.
