# Qiyue Dai — Personal website

A warm, responsive academic homepage with English/Chinese switching, a personal introduction, research interests, two paper announcements, and contact links.

Website: https://daiqiyue.github.io/

## GitHub Pages

The website is plain HTML, CSS, and JavaScript with no build step, package installation, or external font dependency. Enable **Settings → Pages → Deploy from a branch → main → / (root)**. The `.nojekyll` file keeps the site static.

## Edit content

- Edit `index.html` to update the introduction, contact information, and News.
- Bilingual text uses `data-en` and `data-zh`. Update both attributes and the initial English text.
- Add news by copying an `article.news-entry`, updating the title, author list, ISO date, links, short summary, and BibTeX. Keep entries newest first.
- Styling is in the `<style>` block. The main colors are defined in `:root`.
- The botanical illustration is original inline SVG. The favicon is in `assets/`.

## Local preview

From this directory, run `python3 -m http.server 8765`, then visit http://localhost:8765.

## Content sources

Public professional background: https://github.com/daiqiyue

Paper metadata and summaries were checked against the original arXiv records on October 28, 2026:

- https://arxiv.org/abs/2607.14943 — submitted July 16, 2026.
- https://arxiv.org/abs/2606.04775 — submitted June 3, 2026.

The public academic email is listed in the papers. Both entries are presented as preprints; no conference acceptance is claimed. Equal contribution markers follow the author annotations in the original papers: Jihoon Hong and Julian Skifstad for WA-LQR; Alice Chan and Qiyue Dai for LA-LQR.
