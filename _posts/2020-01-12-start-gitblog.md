---
title: GitBlog 시작하기
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
last_modified_at: '2018-03-20 16:01:04 -0400'
categories:
- Jekyll
toc: true
toc_label: 목차
---

기존에 하던 블로그의 모바일 구간에서 깨지는 이슈를 수정하고 디자인적인 아쉬움을 보완하고자 새롭게 GitBlog를 세팅하면서 겪었던 어려움과 해결방안을 서술해보겠습니다.

## Step 1: Remove Theme Files 

Remove `_includes`, `_layouts`, `_sass`, `assets` folders and files within. You won't need these anymore as they're bundled in the theme.

If you customized any of these then leave them alone and only remove the untouched ones. If setup correctly your modified versions should act as [overrides](http://jekyllrb.com/docs/themes/#overriding-theme-defaults) to the versions bundled with the theme.

## Step 2: Update `Gemfile`

Replace `gem "github-pages` or `gem "jekyll"` with `gem "jekyll", "~> 3.3.0"`. You'll need the latest version of Jekyll[^update-jekyll] for Minimal Mistakes to work and load all of the /assets/ properly.

[^update-jekyll]: You could also run `bundle update jekyll` to update Jekyll.

Add the Minimal Mistakes theme gem: 

```ruby
gem "minimal-mistakes-jekyll"
```

When finished your `Gemfile` should look something like this:

```ruby
source "https://rubygems.org"

gem "jekyll", "~> 3.3.0"
gem "minimal-mistakes-jekyll"
```

## Step 3: Run Bundler

Run `bundle install` (or `bundle update` if you're updating an existing repo) to install/update Jekyll and the theme.

## Step 4: Install the Theme

Add `theme: "minimal-mistakes-jekyll"` to your `_config.yml` file.

If you're migrating from an existing Minimal Mistakes site you shouldn't have to change anything else after this. If it's a new site consult then docs to [properly config]({{ "/docs/configuration/" | relative_url }}).

**Please Note:** Paths for image headers, overlays, teasers, [galleries]({{ "/docs/helpers/#gallery" | relative_url }}), and [feature rows]({{ "/docs/helpers/#feature-row" | relative_url }}) have changed and now require a full path. Instead of just `image: filename.jpg` you'll need to use the full path eg: `image: assets/images/filename.jpg`. The preferred location is now `assets/images` but can be placed elsewhere or external hosted. This all applies for image references in `_config.yml` and `author.yml` as well.
{: .notice--danger}

## Step 5: `jekyll new` Tweaks

If this is a new site be sure to add the following files to `_data/` and customize as you see fit. There is currently no way of bundling them in with the theme, so be sure to consult the docs on how to properly use both.

- [`_data/ui-text.yml`](https://github.com/mmistakes/minimal-mistakes/blob/master/_data/ui-text.yml) - UI text [documentation]({{ "/docs/ui-text/" | relative_url }})
- [`_data/navigation.yml`](https://github.com/mmistakes/minimal-mistakes/blob/master/_data/navigation.yml) - navigation [documentation]({{ "/docs/navigation/" | relative_url }})

You'll also need to: 

- Replace `<site root>/index.html` with a modified [Minimal Mistakes `index.html`](https://github.com/mmistakes/minimal-mistakes/blob/master/index.html).
- Change `layout: post` in `_posts/0000-00-00-welcome-to-jekyll.markdown` to `layout: single`.
- Remove `about.md`, or at the very least change `layout: page` to `layout: single` and remove references to `icon-github.html` (or [copy to your `_includes`](https://github.com/jekyll/minima/tree/master/_includes) if using).

---

That's it! If all goes well running `bundle exec jekyll serve` should spin-up your site. If you encounter any bumps please file an issue on GitHub and make sure to indicate you're testing the pre-release Ruby gem version.

[File an issue](https://github.com/mmistakes/minimal-mistakes/issues/new){: .btn .btn--info .btn--large}

Thanks!