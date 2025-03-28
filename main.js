
function prop(){
  navigator.clipboard.writeText(`


Rolsa Technologies Website Prototype Commentary
Version 1 – PHP, CSS, and Basic JavaScript
In the first version of the website, I focused on building the layout and core components using PHP and CSS. My goal was to create a clean and modular code structure by breaking it into smaller, reusable chunks, making the project easier to manage, debug, and scale.
The project structure features dedicated folders for reusable components like the navbar and footer to ensure consistency across all pages. Each page has its own CSS file stored in a dedicated folder, while a main CSS file handles general styling rules, including the color palette for light and dark modes. I included basic JavaScript functionality that dynamically generates content on the Products page by pulling data from a JSON file containing details about popular green energy products.
All pages are fully responsive, ensuring that the website adapts smoothly to different screen sizes, offering an optimal user experience on both desktop and mobile devices.
Key Features Developed:
•	Home page with welcome message and introductory information
•	Functional navbar and footer displayed consistently across all pages
•	Products page dynamically generated using JavaScript and JSON data
•	Responsive design with modular CSS structure
Version 2 – Enhanced with JavaScript Features
In the second iteration, I introduced more advanced JavaScript functionality to improve the website's interactivity and user experience.
The Carbon Footprint Calculator allows users to input their daily energy consumption to calculate their carbon footprint, with results displayed on the Account page. This data is saved in localStorage so users can revisit the website without losing their progress. I also implemented a Daily Energy Tracker that monitors the user's energy usage and resets automatically after 24 hours.
A dark mode toggle was added to the navbar, with the website remembering the user's theme preference using localStorage. The Appointments page was improved with a form for scheduling appointments and a dynamically updated list displaying all appointments. Users can delete expired or unwanted appointments using a delete button.

Key Enhancements:
•	LocalStorage integration for data persistence
•	Dynamic appointment scheduling with a delete option
•	Dark mode toggle with saved preferences
Version 3 – PHP-Driven Authentication and User-Specific Content
In the final version, I integrated PHP logic to add essential authentication features and display content dynamically based on the user's login status.
I implemented a comprehensive user authentication system with login, registration, and logout functionality handled by PHP. This logic is structured in a dedicated Registration_Auth folder to keep the authentication code modular and organized. SQL injection prevention techniques ensure security during data handling, while error handling and validation check for missing or incorrect inputs.
The Appointments page now displays a message prompting users to log in if they're not authenticated. Once logged in, they can view, schedule, and delete appointments. The Account page displays user-specific information including name, email, and stored energy usage data, with direct access to the Carbon Footprint Calculator and Daily Energy Tracker.
Navigation was improved with a logout button in the navbar, allowing users to easily end their session. Basic sanitization was added to protect against vulnerabilities.
Key Final Features:
•	Full authentication system with login, registration, and logout
•	User-specific content displayed on the Account and Appointments pages
•	SQL injection protection and error handling
•	Modular code structure with dedicated folders
Final Prototype Overview
The final version offers a fully functional and interactive experience. The Home Page welcomes users with a brief overview of Rolsa Technologies. The Appointments Page displays available appointments, allows scheduling and deletion, and prompts users to log in if not authenticated. The Advice Page offers tips on reducing carbon footprints with relevant images and external links. The Products Page lists green energy products with details and "Learn More" links. The Account Page displays user information and contains the Calculator and Tracker tools.
The entire website features a dark mode toggle that saves user preferences and uses a modular code structure with separated folders for components, scripts, and authentication logic. PHP handles secure user authentication while JavaScript powers dynamic features, and localStorage ensures data persistence across sessions.
Future Improvements:
•	User Profiles with editable information and preferences
•	Data Visualization with charts for energy usage data
•	API Integration for real-time green energy data
•	Advanced Accessibility Features including keyboard navigation



est: Description of 
the test 
Test data to be 
used (if 
required) 
Expected outcome Actual outcome Comments and intended 
actions 
Solution(if there was an error)

atsets: Link What is it being used for? Date exampl

future imprv:  Changes from the initial design and future improvements such as JWT token authentication.

All content that features on this prototype including external links, images, embedded videos etc are 
placeholder and not final. Some of this content may require licencing if used for the final product, or 
could be replaced with Health Advice Group’s own content. 

This prototype was developed using an Agile approach. Development was separated into sprints 
where each major development milestone was saved as a new version. The development hurdles 
and successes in each version were then used to inform the development process in the following 
sprint, which would result in another new version. There are a total of 4 versions of this prototype, 
which are specified below. 
All content that features on this prototype including external links, images, embedded videos etc are 
placeholder and not final. Some of this content may require licencing if used for the final product, or 
could be replaced with Health Advice Group’s own content. 

Do Functional Requirements And non functional requirements: For example on the last version the validation is not functional. Or responsive design
Do a change log with some changes
Explain why are you using local storage for the carbon calculator and also the daily energy 


Critical Evaluation and Future Improvements
Project Overview
The Rolsa Technologies prototype successfully achieves its core functional requirements, providing a comprehensive platform for green energy tracking and user engagement. While the current version offers a solid foundation, several areas present opportunities for significant enhancement and innovation.
Feature Improvements and Future Development
1. Carbon Footprint Calculator
Current State:

Basic input-driven CO2 consumption calculation
Text-based output with emoji annotations
Simple user interface

Proposed Improvements:
The Carbon Footprint Calculator represents a prime opportunity for transformative enhancement. By implementing advanced data visualization techniques, the feature can evolve from a simple calculation tool to an interactive insights platform. The proposed improvements focus on creating comprehensive graphical representations that not only display CO2 consumption but also provide contextual understanding of environmental impact.
Interactive charts will allow users to explore their carbon footprint from multiple perspectives, showing trends, comparisons, and potential improvement areas. Personalized insights will transform raw data into actionable recommendations, empowering users to make more environmentally conscious decisions. The goal is to move beyond mere number reporting to creating a meaningful, engaging user experience that motivates sustainable behavior.
Visualization Mockup:
[INSERT MOCKUP OF PROPOSED CARBON FOOTPRINT CHARTS]
2. Energy Tracker
Current State:

Daily energy consumption tracking
Basic logging of energy usage

Proposed Improvements:
The Energy Tracker's future development centers on providing comprehensive time-based tracking that offers deeper insights into energy consumption patterns. By expanding from daily tracking to weekly, monthly, and yearly comparisons, users will gain a more holistic understanding of their energy usage. Advanced analytics will introduce intelligent pattern recognition, identifying trends and potential areas for energy conservation.
The enhanced tracker will go beyond simple data logging, transforming into a proactive tool for sustainable living. Personalized recommendations will help users understand their energy consumption context, suggesting practical steps to reduce their environmental footprint. Visualization will play a crucial role, making complex energy data intuitive and actionable.
Visualization Concept:
[INSERT MOCKUP OF WEEKLY/MONTHLY ENERGY CONSUMPTION CHARTS]
3. Appointments Management
Current State:

Basic appointment input and storage
Simple list display
Manual deletion functionality

Proposed Improvements:
The Appointments Management system will evolve into an intelligent lifecycle management platform. By introducing automated notification systems and advanced tracking mechanisms, the feature will become more than just a simple list. Automatic expiration alerts and intelligent deletion workflows will streamline user interactions, reducing manual management efforts.
The proposed system will incorporate a sophisticated confirmation workflow, allowing seamless tracking of appointment statuses. Users will receive timely notifications about upcoming or expired appointments, creating a more proactive and user-friendly experience. The goal is to transform appointment management from a passive recording tool to an active, helpful assistant.
User Flow Diagram:
[INSERT DIAGRAM OF PROPOSED APPOINTMENT MANAGEMENT WORKFLOW]
4. Products Page
Current State:

Static list of green energy products
Placeholder external links
Basic product information display

Proposed Improvements:
The Products Page will transition from a static information display to a dynamic, market-driven content platform. By implementing an intelligent research algorithm, the page will automatically update with the latest green energy product trends. This approach ensures that users always have access to current, relevant information about innovative green energy solutions.
Enhanced product presentations will provide comprehensive insights, moving beyond basic descriptions to offer comparative analyses and real-time market information. The goal is to create an educational resource that not only informs but also guides users in making sustainable technology choices.
Product Page Concept:
[INSERT MOCKUP OF ENHANCED PRODUCT INFORMATION PAGE]
5. Authentication System
Current State:

Basic login/registration functionality
Standard validation techniques
Simple error handling

Proposed Improvements:
The authentication system will be reimagined with a focus on advanced security and user experience. Implementing JSON Web Token (JWT) authentication will provide a more robust, dynamic security approach. The new system will go beyond traditional login mechanisms, incorporating enhanced multi-factor authentication and comprehensive security protocols.
Improved error handling will transform technical security measures into user-friendly interactions. Detailed, informative error messages will guide users, while backend logging will provide robust security monitoring. The authentication system will become a seamless, intelligent gateway that protects user data while maintaining an intuitive user experience.

Additional Elements 
There are some features that are not Functional or Non-functional requirements that were explored 
during development but did not have enough time to fully realise. This includes: - 
Confirm Password – shown in designs and in earlier prototype versions, but did not function. 
Was removed as it was no longer necessary. - - - - 
Footer – design choice that was left out due to time constraints. 
Register feedback – the login page featured feedback such as ‘currently logged in as’, the 
register page does not. 
W3C Validation – all pages were checked in the W3C validator, but the Weather and Advice 
pages had their CSS styles affected when declaring the DOCTYPE. As a result, these are the 
only pages without these declarations. 
Terms and Conditions and cookie approval – whilst cookies are not collected on this site, I 
did make a mock-up terms and conditions notice on the register page. With more time, this 
could include a tick box or alert system to have greater user interactivity with these features




Screen shots of the whole website 




This carbon footprint calculator estimates your yearly CO2 emissions based on driving, electricity usage, and diet. It calculates car emissions by multiplying your weekly mileage by 52 (weeks in a year) and then by **0.411 kg of CO2 per mile**. For electricity, it multiplies your monthly consumption by 12 (months in a year) and then by **0.233 kg of CO2 per kWh**. It also adds a fixed amount of CO2 based on your diet: **1,500 kg** for vegans, **2,000 kg** for vegetarians, and **3,300 kg** for meat-based diets. Finally, it combines all these values to estimate your total annual carbon footprint.



add video on advice 
`)
}
