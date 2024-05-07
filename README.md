# Cheeseria

## Features

- Display a selection of cheeses with pictures, price per kilo, and cheese color.
- Calculator to show the total price based on the selected cheese and weight.
- Backend API for managing cheese data.

## PLEASE READ

Due to restrictions on web requests from my local machine, a proxy was necessary for the creation of the product.
To enable the proxy for testing purposes, visit https://cors-anywhere.herokuapp.com/corsdemo.
Then click to activate it and reload the application

## To run VIA docker

Firstly to create the docker file use:
`docker build -t react-app:dev . `
With the docker instance open

Then to run the Docker file execute:
`docker run -p 5173:5173 react-app:dev`

## Possible Structure of a Docker Multi Stage Build

Begin by setting up the Docker environment and creating the Docker image. Then, define the Dockerfile with stages for each step of the build process, such as fetching data, creating the application, and generating the final image. Proceed by executing these stages: fetching the data and building the API, followed by building the application, and finally creating the final image.

Once the final image is ready, further refine it in preparation for deployment, including testing and any necessary adjustments. Following this, deploy the application. Additionally, it is advisable to establish a monitoring and maintenance procedure to ensure continued safety and success of the application.
