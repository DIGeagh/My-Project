Project Proposal: Image Compression Algorithm
Project Name and Tagline:
Project Name: Image Compression Master
Tagline: "Efficient Image Compression for Enhanced Web Performance"
Team Members:
Darlington Gavi: Lead Developer
Role: Responsible for the algorithm's implementation, optimisation, and testing.
Member X: Research Specialist
Role: Conducting research on image compression techniques and providing guidance.
Member Y: User Experience (UX) Designer
Role: designing a user-friendly interface for the compression tool.
Roles Explanation:
Darlington, with his programming skills, will lead the development of the compression algorithm.
Member X, with research expertise, will ensure the algorithm uses the latest techniques.
Member Y will create an intuitive user interface to make the tool accessible to all users.
Technologies:
Programming Languages: Python and C++
Libraries: OpenCV for image processing
Development Tools: Git for version control
Testing: Python testing frameworks (e.g., unittest)
Documentation: Sphinx for code documentation
Technology Decision Rationale:
Python is chosen for rapid development and C++ for optimisation.
OpenCV provides robust image processing capabilities.
Git ensures code collaboration and version control.
Python testing frameworks for code reliability
Sphinx for well-documented code and usage instructions.
Challenge Statement:
Most websites require minimal image sizes for optimisation. However, the size of images taken by smartphones and cameras has increased, creating the need for image compression. The Image Compression Master project aims to develop an image compression algorithm that significantly reduces the size of images without sacrificing quality. The project will not focus on video compression or audio compression. It will benefit web developers and online services by optimising image loading times, ultimately improving web performance.
Target Users: Web developers, content creators, online platforms, and anyone looking to optimise image file sizes for faster loading.
Risks:
Technical Risks:
Risk: Algorithm may not achieve desired compression ratio.
Safeguard: Extensive testing and optimisation phases.
Non-Technical Risks:
Risk: Lack of user adoption.
Safeguard: Conduct user surveys and gather feedback.
Infrastructure:
Branching and Merging:
We'll use the Gitflow branching model for feature development, testing, and releases.
Deployment:
Continuous integration and automated testing for reliable deployments.
Data Population:
Use publicly available image datasets for testing and demonstration.
Testing:
Automated unit tests for code reliability.
Existing Solutions:
Existing solutions like JPEG and PNG compression formats provide image compression, but there's always room for innovation. Image Compression Master aims to offer an alternative solution that achieves higher compression rates while maintaining quality. It's important to offer more choices to users.
The currently available platforms provide compression, but the image quality is significantly reduced in the process. Hence, the aim of Image Compression Master would be to reduce size and retain quality
Timeline and Milestones:
Week 1: Research and literature review
Week 2: Algorithm Design and Initial Implementation
Week 3: Testing and Optimisation
Week 4: User interface design and integration
Week 5: Final testing, documentation, and project completion
Budget:
The project budget is minimal as it primarily involves software development and open-source tools.
Conclusion:
The Image Compression Master project, led by Darlington Gavi, aims to create a cutting-edge image compression algorithm to enhance web performance. The team has outlined the technologies, risks, and development process to ensure a successful outcome.

Image Compression Master: MVP Specification
2. Architecture

3. APIs and Methods
Web Client to Web Server Communication
/api/compress_image
POST: Initiates the image compression process.
Parameters:
image_data: Base64-encoded image data.
compression_level: Integer (1-10) indicating the desired compression level.
Response: JSON object containing the compressed image data.
Client-Accessible Functions/Methods
CompressionManager.compress_image(image_data: str, compression_level: int) -> str
Initiates the image compression process.
Parameters:
image_data: Base64-encoded image data.
compression_level: Integer (1-10) indicating the desired compression level.
Returns: Base64-encoded compressed image data.
CompressionManager.get_supported_formats() -> List[str]
Retrieves a list of supported image formats for compression.
Returns: List of strings representing supported image formats.
3rd Party APIs
OpenWeatherMap API
Endpoint: https://api.openweathermap.org/data/2.5/weather
Methods:
GET: Retrieves current weather information for a specific location.
Parameters:
lat: Latitude of the location.
lon: Longitude of the location.
appid: API key for authentication.
Response: JSON object containing weather details.
Unsplash API
Endpoint: https://api.unsplash.com/photos/random
Methods:
GET: Retrieves a random high-quality image from Unsplash.
Parameters:
client_id: API key for authentication.
Response: JSON object containing image details.
Google Cloud Vision API
Endpoint: https://vision.googleapis.com/v1/images:annotate
Methods:
POST: Analyzes and extracts information from images.
Parameters:
image: Base64-encoded image data.
features: List of features to extract (e.g., labels, text).
Response: JSON object containing analysis results.
4. Data Modelling
 
5. User Stories
Here are 3-5 user stories for your Image Compression Master MVP:
As a web developer, I want to upload high-resolution images and compress them with different levels, so that I can optimize the loading times of images on my website without compromising quality.
Acceptance Criteria:
Image upload functionality is available.
Compression levels are adjustable.
Compressed images maintain an acceptable level of quality.
As a content creator, I want a user-friendly interface for image compression, so that I can efficiently use the compression tool without extensive training.
Acceptance Criteria:
The interface is intuitive and easy to navigate.
Clear instructions or tooltips are provided for each feature.
Minimal learning curve for using the compression tool.
As an online platform, I want to reduce storage space for user-uploaded images, so that I can optimize server performance and reduce hosting costs.
Acceptance Criteria:
The compression algorithm significantly reduces the file size of images.
Compressed images maintain an acceptable level of quality for display.
As a user with limited technical knowledge, I want the compression tool to automatically handle optimal settings, so that I don't have to understand complex parameters for image compression.
Acceptance Criteria:
The tool provides default settings for compression.
Users can choose automatic compression without adjusting detailed settings.
As a web performance enthusiast, I want the compressed images to load quickly on various devices and network conditions, so that I can ensure a seamless user experience for my website visitors.
Acceptance Criteria:
Compressed images load efficiently on different devices (desktop, mobile).
The tool provides a noticeable improvement in image loading times.
Pitfalls to Avoid:
Being Too Vague: User stories should be specific and focused on a particular feature or functionality.
Assuming Solutions: Focus on the user's needs rather than specifying how a solution should be implemented.
Ignoring Acceptance Criteria: Clearly define the criteria for a user story to be considered complete.
Overloading Stories: Keep user stories small and manageable. If a story becomes too complex, consider breaking it down into smaller stories.
6. Mockups
 
https://share.balsamiq.com/c/oq3p21nG3nV9WHhtMn5QtK.png

 



