import unittest

from Api.BlogApi import BlogApi


class BlogApiTest(unittest.TestCase):
    def addBlogContent_AllParameterFilled_Response200(self):
        #arrange
        blogApi = BlogApi()
        #act

        #assert
        self.assertEqual(True, False)  # add assertion here


if __name__ == '__main__':
    unittest.main()
