FROM squidfunk/mkdocs-material
RUN pip install mkdocs-macros-plugin
RUN pip install mkdocs-glightbox
RUN pip install mkdocs-video
RUN pip install mkdocs-autorefs
RUN pip install markdown-include
