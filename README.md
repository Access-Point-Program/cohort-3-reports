# Cohort-3-Reports Installation
Steps to Get CNN6 Reports Page running on a Windows Machine

1. Clone the Repository: ```git clone <SSH/HTTP>```.
2. Open the Repository in an IDE.
3. Open Terminal.
4. Install dependencies: ```npm i``` and ```npm i @angular/cli```
5. Generate Resources: ```./mvnw generate-resources```
5. Start the Api: ```ApiApplication.java``` from your IDE. 
6. Open your browser and go to this [link](http://localhost:9005/) to access CNN6 Reports page
7. (Optional) If you want to see our beautiful charts, Run: ```npm run mock:rulesets``` in a new terminal to see the charts come to life. 

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
