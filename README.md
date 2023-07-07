# Planner-App

## Here's How MyCustomWidget is designed:
The MyCustomWidget is designed to provide real-time weather information to users based on their location. It utilizes the OpenWeatherMap API to fetch the weather data. The widget is implemented as a React component and can be easily integrated into any React application.

Here's a step-by-step breakdown of how the Weather Widget works:

-> When the component mounts, it initializes the necessary state variables, including weatherData, loading, error, and location.

-> The useEffect hook is used to fetch the weather data. It first checks if the browser supports geolocation using the navigator.geolocation object.

-> If geolocation is supported, the getCurrentPosition method is called to obtain the user's device location coordinates (latitude and longitude).

-> Once the location coordinates are obtained, the fetchWeatherData function is called. It makes an HTTP GET request to the OpenWeatherMap API, passing the coordinates and the API key as query parameters.

-> Upon receiving the weather data response, it is stored in the weatherData state variable. The data contains information such as the current weather conditions, temperature, humidity, and more.

-> The widget renders different UI elements based on the state variables. While the weather data is being fetched, it displays a loading message. If there's an error during the fetch process, it shows an error message. If the weather data is not available, it displays a message stating the inability to fetch the data.

-> If the weather data is successfully fetched, it renders the weather information on the screen. This includes the weather description, an icon representing the weather condition, temperature, "feels like" temperature, and humidity.

-> The widget also includes an input field for users to enter their desired location. However, in this implementation, it is not enabled. If you want to enable location input, you can modify the code to handle user input for the location and use it to fetch weather data accordingly.

-> To keep the weather data up-to-date, the widget sets up a periodic fetch using a setInterval function. In this implementation, it fetches data every 10 minutes. Adjust the interval as needed for your application.

## Screenshot of the Planner app with the implementation of MyCustomWidget:
![image](https://github.com/codingis4noobs2/Planner-App/assets/87560178/01a5a0c0-4359-479b-b807-36cb9ce7d6c5)

## How To Use this on your machine:

1. You can use: [Planner App](https://crackie-hakz-planner-app.web.app/) it's hosted online using Firebase.

2. Other way you can clone this repo into your machine and manually run it.
