# Hou-Smart Client

![alt text](https://github.com/ju-zp/Hou-Smart_client/blob/master/public/Screenshot.png 'controller')

### Introduction

A React frontend used to interact with [Hou-Smart Server](https://github.com/ju-zp/Hou-Smart_server) and [Hou-Smart Hardware](https://github.com/ju-zp/Hou-Smart_hardware). This project focuses on intergration of IoT into the browser. Bcrypt is used for authentication of users. Upon logging in the user is redirected to the controller page. This is used to controller Arduino hardware running on an express server. Providing that users have the same hardware connected at the correct pins, they have the ability to switch an RGB LED on and off, set colors for the LED and save them to their particular account. They are also able to get their current temperature displayed on the LCD screen. Information about the hardware can be found in the link above. 

A user can then navigate to their dashboard via the menu in the navbar. From within the dashboard they can edit the name of their home environment and also the name of boards. The home is meant to represent an actual home, and the boards are meant to represent rooms within the home. They can check the status of the hardware connected to the board, e.i. LED is on/off. More users can be added from the dashboard and is the only way to add new users, more details on the server can be found from the link above. 

Users also have the ability to monitor the temperature of the environment which is displayed in a graph. They can see the temperature of the environment for the last 15 minutes and for the last hour. There is also a weather section which uses Dark Sky API and gets information about the current weather and displays it to the user. 

### Technologies

* React
* Redux
* Victory
* Material-UI
* Dark Sky API
