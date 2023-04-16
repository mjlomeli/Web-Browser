from browsing.chrome.chrome import Chrome
import os
import unittest


class TestTable(unittest.TestCase):

    def setUp(self) -> None:
        path = os.getenv('CHROME_DRIVER')
        self.chrome = Chrome(chrome_driver_path=path)

    def tearDown(self) -> None:
        try:
            self.chrome.selenium.quit()
        except:
            pass

    def test_init(self):
        assert self.chrome.selenium is None

    def test_open(self):
        self.chrome.open()
        assert self.chrome.selenium is not None

    def test_change_window_width(self):
        self.chrome.change_window(width=600)
        self.chrome.open()
        size = self.chrome.selenium.get_window_size()
        width = size['width']
        assert width == 600

    def test_change_window_height(self):
        self.chrome.change_window(height=800)
        self.chrome.open()
        size = self.chrome.selenium.get_window_size()
        height = size['height']
        assert height == 800

    def test_change_window_position(self):
        self.chrome.change_window(pos_x=400, pos_y=500)
        self.chrome.open()
        position = self.chrome.selenium.get_window_position()
        x = position['x']
        y = position['y']
        assert x == 400
        assert y == 500

