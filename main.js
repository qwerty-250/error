
function prop(){
  navigator.clipboard.writeText(`
Prototype evaluation: 
This document aims to demonstrate and evaluate how well does the Prototype developed for Rolsa Technology meets the requirements that were requested by them. Also, the content used, and the feedback gathered from the technical and non-technical surveys are considered.
1.Effectiveness of the assets and content
 1.1 Assets Suitability:
	During the development of the prototype a combination of placeholder text , embedded videos , links to external websites and also images were used in order to simulate how the final project will look in the future, or at least what to expect before the final draft.
In the home page, I used a background image that contains a peaceful nature landscape, which aligns perfectly, in my opinion, with the companies’ interest in green energy products. In the advice page, I have used an external link which redirects the user to a page with tips and information for reducing the carbon footprint along with an appropriate video which can help the user to dig deeper into the subject and gain more knowledge on how to reduce their carbon footprint. In the advice page there are also some paragraphs which are meant to contain information on how the user can reduce their carbon footprint. For these helpful paragraphs I have used placeholder text so I can simulate how the potential final draft may look. Moving on, on the products page there are images for each product displayed on the page along with information about them and with two links which can redirect the user on a website which contains more green energy products, and another website that includes general information about green energy products. Furthermore, on the account page the only placeholder element is a temporary/general , unisex profile picture next to the personal information about the user. For now, this image is just a placeholder, but in the future an option to dynamically change it may be included to provide the user with a better experience.
The content used is suitable and aligns within the requirements requested by Rolsa Technology. Nevertheless, even if there are some elements that are now represented by placeholders, and perhaps, look off or irrelevant to the Prototype , their purpose is just to simulate where the actual text and images are going to look or where they ll be positioned on the page.


1.2. Validity of the sources used.
	Each source that was used in order to gather different images , links or videos , was doubled checked to prevent  the use of the malicious ones and make sure the prototype will still be safe , fast and secure. Also, while looking for these different elements listed above , I made sure to include only the ones which are not protected by copyright and are free to use. By doing this, we are avoiding any legal issues that may rise. For example, if I was to pick an image for this prototype that was protected by copyright and decide to still use it in in the final form of the project, the risk of getting entangled with legal issues that may result in financial damage is high, and of course no wanted in any shape or form. 
When looking out for images, websites or videos, I was trying to use trustworthy sources such as “Unsplah”, which is a popular website that provides high quality images that are copyright free. Moving on, when I was looking for videos, I mainly used “YouTube” and checked their description to make sure that it was not protected by copyright. Moreover, if I couldn’t find a specific image on Unsplah or any other websites of this kind, I went on Google, and used the advanced search and filter out the images  that were not copyright free. Nevertheless, before choosing the external websites, I made sure they are trustworthy by reading reviews, checking their trustpilot score if available and overall inspecting them manually for any kind of element that may rise suspicion or unprofessionalism , such as inconsistent design layout , or invalid links and images. 
Also , I made sure these assets are relevant to the page that are going to be used in. 

1.3 Legal Implications
	During the development, I tried to make the Prototype so it will adhere to laws, legislations and regulations such as the GDPR or the Data protection act, to keep the user’s data safe and secure.  These are the methods used:
	-Password hashing, this refers to the process of converting the initial password into a random combination of strings, numbers and special characters when saving it into the database. By doing this we enhance the layer of security, due to the fact that is way harder for any kind of person with malicious intent to break the password since it is unreadable and lengthy. 
	-Hiding the password input. When the user has to input his password , either in the login or registration form , the input field hides the password in order to keep it safe and reduce the risk of shoulder surfing for example.

-Cleaning inputs. Cleaning the inputs refers to the process of using complex algorithms that prevent SQL injections that can affect the security and safety of the data. For example, when completing an input field, let’s say the username one, a malicious user can actually write malicious SQL code in order to retrieve sensitive data which again, is extremely dangerous. This is where ,the process of cleansing the inputs comes into play because it blocks this ability of writing malicious code into the inputs fields/boxes. 
-Cookie simulation. A cookie pop up , which for now is not functional , is made in order to simulate how the cookie function is actually  going to work in the future stages of the project.

While security was a very important part during the development, this prototype does not contain terms and conditions. I decided it is not that important to include a policy for terms and conditions for now and focus on the more general security aspects and the functionalities required.
Ethical implications:
During the development, a wider range of users were considered, for example users that may suffer from different disabilities (eye impairments for example) , or users that are accessing the prototype from a different device compared to a PC (for examples phones or tablets). To accommodate them I included the following features and functionalities:
-	Accesibility features: First, is the dark mode which can be accessed in the navbar by simply toggling to on and off. When it’s one the color scheme of the website converts into a darker one with higher contrasts which makes the content more easy to read for different people with eye impairments, or simply people who are not able to sustain bright colors and lights. When it’s off, it comes back to the default, light version. Secondly, are the font adjuster buttons that are available on the account page. To use this feature, you can choose whether you’d like to increase or decrease the font size by pressing the representative button. Nevertheless, every image contains alt text which refers to a brief explanation of that image that can be used with a text to speech bot in order to help people that may suffer from blindness understand the image and also help regular users understand what was that image about if it’s not available anymore.
-	Responsive design. When the screen’s width gets smaller, (phones , or tables), the design of the website changes so it can fit the respective screen dimension. Moreover, the navbar will contain a hamburger menu that can be toggled on and off. When it’s on you can see the buttons that redirects the users to the different pages.
2. Evaluation of project outcomes: 
2.1 Evaluation of my prototype: 
Ultimately, I believe that the prototype I have produced meets the requirements set by Rolsa Technologies. Some elements, not a lot , were a bit different in the end compared to how I explained them in the proposal, but in the end they still achieve the same goals.
Function Requirements:
Down below you will be able to see every functional requirement detailed , and how I was able to achieve it.
1.	Advice page: For the advice page I have simply created a layout made up by a couple of elements that will store advice on how to reduce the carbon footprint , and also a link to an external website which provides even more information, and also an embedded video which can also help the user visualize and get a deeper understanding of the subject.
2.	Appointment booking. On the appointment page , I have created an appointment page that contains an appointment form , where the user has to input all of the data needed , such as appointment title, phone number or location and then submit it. After submission the appointment will appear in the appointment list in the right hand side of the screen , and also saved in the data base.
3.	Green energy products. I feel like this requirement is subjective , and very easy to interpreted different by a lot of people. The way I interpreted and built it , was to gather top 6 most popular green energy products on the market right now , and display them on the page along with information about them. Also I have used two links , one who redirects the user to a website with a lot of information about green energy products , and another one which redirects the user to a website with  different green energy products compared to the ones that were displayed on the page , for more diversity and the freedom of exploring more products in this field
… bla bla
Non function requirements:
Security: I have implemented password hashing,password strength checker and ,input cleansing in order to enhance the layer of security
Scalibility: The website’s design is responsive and it applies to a wider range of devices such as , phones, tablets, laptops etc
Accesibility 
User acceptance criteria:
In the proposal I have simulated some user experiences/stories to help with developing the prototype. These experiences are simply different actions that the users are going to do while using the prototype. Every single user experience simulation helped in developing a prototype which provides a modern user experience, and it meets the standards.
User experience story 1. Concerned about creating an account , which the I have successfully implemented in the prototype.
User experience story 2. Concerned about how to use the carbon footprint calculator. This function have been successfully implemented in the Prototype. I also added some meaningful examples ,so the user will be able to understand better how the calculator works.

User experience story 3. Concerned about making an appointment. This final simulation I have used , again was successfully implemented in the Prototype allowing the users to simply book appointments and provide a lot of meaningful information about it.

Future improvements.
Regarding the future improvements, they are plenty and in order to understand what needs to be improved in the first place I have used different tools and methods. One of the most obvious methods , was to use a feedback gathering platform , like Microsoft Forms where I was able to create two different surveys, one technical  and another one, non-technical. Both sides helped me a lot , in understanding what needs and what can be improved in the future development stages of the project. Besides the feedback gathered, I am also self-aware of what improvements can be made since I have focused more on the main functionalities and the main aspects for security. 
The first and the most obvious improvement that comes to my mind is the design. A clean, eye-catching design, filled with animation and all sort of transitions makes a website instantly more recognizable. A website  that feels smooth , looks clean and moves fast , is hard to forget. In this prototype , I went for more of a old-school, simple yet effective design rather then a modern one. I focused on the design’s responsiveness and readability rather than adding a lot of transitions or animations. This aspect can be improved in the future and will definitely help a lot in brining or making more people to stay on the website.
Another improvement, is regarding the security aspect. While I made sure to implement authentication system which is safe and secure , it still can be improved by using a more modern approach. The approach is called JWT token authentication , where the user receives a unique token that is saved in the local storage every single time where he logs in. By doing this , we are removing the need of keeping up a session and simply store the data in a unique token for the users since these tokens are stateless. (this improvement was suggested by a technical respondent) 













`)
}
