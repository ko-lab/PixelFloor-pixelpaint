# Pixel Paint - Web interface for painting the LED floor

A webinterface that allows o draw on the LED floor. 
Built with Vue CLI. It uses Websockets to send MQTT commands that change the floor colors.

## How to deploy

Run vue build and store the content of the `dist` folder on the 
LED-floor Paspberry PI, in directory `~/pixelpaint/frontend`.

## Usage

The interface is served from the LED florr Pi in the Wifi. It is not accessible from outside.
To start Pixel Paint, the corresponding MQTT client must be started. 
Currently, the easiest way to do this is to send `/floor paint` to the Telegrambot.
The bot will try to start the MQTT listener and return a link to Pixel Paint (the IP address of the Pi)
