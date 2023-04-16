# Python Web Browser Driver


A Python based SDK for web automation using [Selenium](https://www.selenium.dev/).

## License
[![License](https://img.shields.io/badge/License-MIT-blue)](https://github.com/mjlomeli/jcp/blob/main/LICENSE)
[![issues - cards](https://img.shields.io/github/issues/mjlomeli/Web-Driver)](https://github.com/mjlomeli/jcp/issues)

Released under [MIT](/LICENSE) by [@Mauricio](https://github.com/mjlomeli/jcp/blob/main/LICENSE).

**Email** : [Mauricio](mailto:developer.mauricio.jr.lomeli@gmail.com)

# Overview

To use this application you must have any of the following browsers installed:

[![Chrome - Compatible](https://img.shields.io/badge/Chrome-Compatible-2ea44f?style=for-the-badge&logo=google+chrome)](https://www.google.com/chrome/)

[![firefox - Compatible (minor artifacts)](https://img.shields.io/badge/firefox-Compatible-2ea44f?style=for-the-badge&logo=firefox)](https://www.mozilla.org/)

[![opera - Compatible](https://img.shields.io/badge/opera-Compatible-2ea44f?style=for-the-badge&logo=opera&logoColor=red)](https://www.opera.com/)

[![edge - Compatible](https://img.shields.io/badge/edge-Compatible-2ea44f?style=for-the-badge&logo=microsoft+edge&logoColor=blue)](https://www.microsoft.com/)



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
In your terminal install the `Web-Browser` package with pip.

```shell
pip install browserdriver
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


### MacOS - Bash
Open the terminal and open the bash profile.
```shell
vi ~/.bash_profile
```

Write into the editor:
```shell
export CHROME_DRIVER=./YOUR_CHROME_DRIVER_PATH
```


## Example
Starting the `Web-Browser` package.

```python
from web_browser import Driver
from web_browser.chrome import Chrome
import os

chrome = Chrome(os.getenv('CHROME_DRIVER'))
driver = Driver(chrome)
driver.get('https://www.google.com')


# Must quit chrome before quitting the application
# else the driver will remain hanging until PC reboot.
chrome.quit()
```



