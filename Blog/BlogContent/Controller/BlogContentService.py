import inject

from Blog.BlogContent.Model.BlogContentRepo import BlogContentRepo


class BlogContentService:

	repo: BlogContentRepo = BlogContentRepo()
