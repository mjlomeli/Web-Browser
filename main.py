from webdriver.chrome import Chrome
from webdriver import Driver
import os
from webdriver.gamepad import Gamepad


def main(driver: Driver):
    driver.get('https://gamepad-tester.com/')
    #gamepad = Gamepad(driver)




if __name__ == '__main__':
    c = Chrome(os.getenv('CHROME_DRIVER'))
    c.change_window(pos_x=500, width=1300, height=1000)
    try:
        d = Driver(c)
        main(d)
        input("Press enter to quit")
        c.quit()
    except Exception as e:
        c.quit()
        raise e
