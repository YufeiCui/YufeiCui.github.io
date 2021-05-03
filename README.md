# Yufei's Home - Enabled by Jekyll

## Jekyll Documentation

Jekyll usage documentation at [jekyllrb.com](https://jekyllrb.com/)

You can find the source code for Minima at GitHub:
[jekyll][jekyll-organization] /
[minima](https://github.com/jekyll/minima)

You can find the source code for Jekyll at GitHub:
[jekyll](https://github.com/jekyll/jekyll) / 
[jekyll-organization][jekyll-organization]

[jekyll-organization]: https://github.com/jekyll

## Notes

- `_config.yml` is where the configurations are set for the entire project.
- `_pages` is the directory for storing the markdown/HTML files that will be used for each page.
- `_content` is where the raw contents (e.g., pdfs, images, etc) are stored.
- `_data` is where the config for each page resides.
- `_includes` is where you can create custom templates that will override the default manima template.
    - Use `gem info minima` to find implementation detail of the manima theme.
- `_scss` is where custom styling can be specified. 
Changes from this is reflected when `styles.css` is imported. This connection is made in `_includes/head.html`.