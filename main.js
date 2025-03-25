
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



`)
}
