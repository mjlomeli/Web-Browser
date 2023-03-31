# Python Web Driver


A Python based SDK for web automation using [Selenium](https://www.selenium.dev/).


# Overview

To use this application you must have any of the following browsers installed:
- Chrome
- Firefox
- Edge
- Opera


# [Wiki - Full documentation](https://github.com/mjlomeli/Web-Driver/wiki)
### Table of contents
#### 1. [Introduction](https://github.com/mjlomeli/Web-Driver/wiki#introduction)
   > Shows how to get access to your API key.
#### 2. [Getting Started](https://github.com/mjlomeli/Web-Driver/wiki/Getting-Started)
   > Shows how to log in to the client and use the basic code interface
#### 3. [Services](https://github.com/mjlomeli/Web-Driver/wiki/Services)
   > Data provided outside of the game server. Like server status, user id, and auto extension plan.
#### 4. [GameServer](https://github.com/mjlomeli/Web-Driver/wiki/GameServer)
   > Data directly related to the game server. This includes the player list, game settings, etc.

<br />

# Installation
In your terminal install the WebDriver package with pip.

```shell
pip install WebDriver
```

<br />

# Browser Drivers

Choose the driver from one of the browsers you have installed:
- Chrome
- Firefox
- Opera
- Edge

## Chrome
### Download the Chrome Driver
Locate your Chrome browser version. Open the menu list on Chrome and navigate 
down to the `Help` option. Then click on `About Google Chrome`. In the example 
below, the driver to download is version `111`.

> Chrome is up-to-date.
> 
> Version 111.#.####.### (Official Build) (64-bit)

Navigate over to [ChromeDriver](https://chromedriver.chromium.org/downloads) and download
the driver which compliments your browser.


## Environment Variables 
Place the Chrome Driver somewhere accessible by your project. Copy the path location of
the Chrome Driver.

### Windows PC
Open the system properties in the control panel. At the bottom right, click on 
`Environments Variables...`. A new window should pop up.

Create a new `User variable`:
- **Variable Name**: CHROME_DRIVER
- **Variable Value**: C:/YOUR_CHROME_DRIVER_PATH


### Mac PC - Bash
Open the terminal and open the bash profile.
```shell
vi ~/.bash_profile
```

Write into the editor:
```shell
export CHROME_DRIVER=./YOUR_CHROME_DRIVER_PATH
```


## Example
Starting the WebDriver.

```python
from webdriver import Driver
from webdriver.chrome import Chrome
import os

chrome = Chrome(os.getenv('CHROME_DRIVER'))
driver = Driver(chrome)
driver.get('https://www.google.com')


# Must quit chrome before quitting the application
# else the driver will remain hanging until PC reboot.
chrome.quit()
```



