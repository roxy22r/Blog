import numbers
import string


class Blog:
	id: numbers
	title: string = ''
	content: string = ''

	def __init__(self, title: string, content: string):
		self.title = title
		self.content = content

	def getTitle(self):
		return self.title

	def getContent(self):
		return self.content
