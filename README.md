# Qiyue Dai — Personal website

A responsive academic homepage with a dark default theme, a light theme, selected publications, dated news, and contact links.

Website: https://daiqiyue.github.io/

## GitHub Pages

The website is plain HTML, CSS, and JavaScript with no build step, package installation, or external font dependency. Enable **Settings → Pages → Deploy from a branch → main → / (root)**. The `.nojekyll` file keeps the site static.

## Edit content

- Edit `index.html` for the biography, publications, News, and contact information.
- Each publication has an author list with contribution notes, a figure, a summary, links, and BibTeX. Keep each paper's stable anchor when updating News.
- Layout and colors are in `assets/site.css`. Theme preferences, figure enlargement, and publication detail controls are in `assets/site.js`.
- The profile picture is the [public GitHub avatar](https://github.com/daiqiyue).
- The WA-LQR thumbnail is [Figure 1](https://arxiv.org/html/2607.14943v1/teaser.png) by Hong, Skifstad, Dai, Chan, and Chou. The LA-LQR thumbnail is a crop of the method diagram in [Figure 1](https://arxiv.org/html/2606.04775v1/front_fig_v2.png) by Hong, Chan, Dai, Skifstad, and Chou. Both images are resized and encoded as WebP under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

## Local preview

From this directory, run `python3 -m http.server 8765`, then visit http://localhost:8765.

## Content sources

Public professional background: https://github.com/daiqiyue

Paper metadata and summaries were checked against the original arXiv records on October 28, 2026:

- https://arxiv.org/abs/2607.14943 — submitted July 16, 2026.
- https://arxiv.org/abs/2606.04775 — submitted June 3, 2026.

The public academic email is listed in the papers. Both entries are presented as preprints; no conference acceptance is claimed. Equal contribution markers follow the author annotations in the original papers: Jihoon Hong and Julian Skifstad for WA-LQR; Alice Chan and Qiyue Dai for LA-LQR.
