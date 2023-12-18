# Cohort-3-Reports 

## Installation

 Steps to Get CNN6 Reports Page running on a Windows Machine

### Preparations
* Press "Start" and search for Environmental Variables
* Select the "Edit the System Envirounmental Variables" options.
* Click on the "Environmental Variables" option on bottom right.
* You should see two selection boxes, Under the bottom one, click on the "New" button and add the following variables:
  * name: ```rules_api_url```, value: ```http://localhost:9004```.
  * name: ```layouts_api_url```, value: ```http://localhost:9003```.
  * name: ```sims_api_url```, value: ```http://localhost:9010```.

### Setup

1. Clone the Repository: ```git clone <SSH/HTTP>```.
2. Open the Repository in an IDE.
3. Open Terminal.
4. Run the command: ```bash 
  spring-boot:build-image
        ```.
5. Run the following command:
  ```bash
    docker run \
      -p 9005:9005 \
      -d \
      --name=reports \
      --env rules_api_url \
      --env layouts_api_url \
      --env sims_api_url \
      cohort-3-reports:latest
  ``` 
6. Run ```docker stop reports``` to stop the container
6. Open your browser and go to this [link](http://localhost:9005/) to access CNN6 Reports page

Enjoy analyzing your data with clarity and insight using the CNN6 Reports Page!

## Reports 
The application is to render reports and analytics on the Simulations runs. This application will leverage data visualizations through the User Interface. The user will be able to filter the data by specific Rulesets and Factory layouts. The report page contains a table of all the raw data that exists for the selected filters. Above the table, there should be multiple visualization charts that will provide quick insights into the data. The table and the charts should dynamically change as the filters are selected or deselected.

### Technologies:
- Java / SpringBoot / Rest Assured / Swagger
- Angular v15 / Typescript / Jasmine
- Selenium / Cucumber
- Docker / Jenkins
- Postgres / SQL
- Python
- Postman

### Team Members

- Deep Patel
- Brian Rogers
- Myesha White
- Elissa Price Willis

### Requirements:

- 1 Angular / TypeScript application
  - 1 Page for rendering a report.
    - The page should have a Ruleset filter.
    - The page should have a Factory layout filter.
    - The page should render the simulation run data in a table.
    - The page should render analytics in a visualization image.
- 1 Java / SpringBoot API
  - 1 GET endpoint to retrieve simulation-run data based on the filters.
  - 1 GET endpoint to retrieve all the Ruleset names.
    - Hint: this might already exist from another team….
  - 1 GET endpoint for retrieving all the Factory layout names. 
  - Hint: this might already exist from another team….
