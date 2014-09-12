---
layout: post
title:  "Thoughts on Jekyll"
date:   2014-03-12 16:31:55
---

I finally got around to making a new personal site (the one you're on now!) and decided to move from Wordpress to [Jekyll](http://jekyllrb.com), as I felt like trying something new and Jekyll has had a good bit of buzz around it since it launched.

I elected to use the [yeoman](http://yoeman.io) generator [generator-jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb) to scaffold out my new Jekyll install as it came with loads of familiar tools, like grunt and all my favourite grunt modules (Sass, rev, autoprefixer, usemin, imagemin, uglify, etc.)

I had kind of expected things to be a bit more complicated than they actually were, so it was nice to take a look around in the source files of the new project and see that everything was pretty straight forward. It's all just HTML with some Liquid templating thrown in to take care of the dynamic stuff, like includes and looping through post data. As I'm already familiar with Handlebars templates, Liquid wasn't much of a jump.

I set to work on making a new home page which is just a regular HTML page, and then made a seperate 'Blog' page for my blog postings to be listed on. The default blog listing is totally boring and is literally just a list of titles and dates of postings, I wanted to make things a little nicer and look a bit more like a user would expect from a blog by adding in an exerpt and making the title more prominent and the date less so. No problems so far.

I then thought that I would quite like some pagination for this page, and that's when I hit my first (but thankfully only!) stumbling block. At the time of writing, only your index page can make use of pagination, so if you've decided you want to list your blogs posts somewhere that isn't your index page, like me, then you can't use pagination. There doesn't appear to be any technical reason why this limit is in place. There was an issue about this in the tracker on Github where almost everyone agreed this should be fixed, and then it seems as though nothing was done. Odd. Oh well, not a huge deal, but I hope to see that fixed soon. Onwards.

It didn't take long to get everything looking the way I wanted it, probably significantly less time than if I had gone the Wordpress route. I started migrating articles from my old Wordpress site and soon found that I really didn't miss the Wordpress editor, and that I didn't mind writing markdown in Sublime Text at all. With a couple of extra Sublime Text packages (spell checking and markdown preview) it's a pretty good editing experience.

Once I'd done that I migrated the disqus comments over as well but it caused rendering issues with a parent element that had a border-radius thanks to a bug in Chrome so I decided to go without for now.

Part of the hype around Jekyll comes from the ability to host your site on Github Pages, and seeing a chance to get some extra green squares on my pitiful Github activity chart I chose to follow suit and found it a totally painless experience. The Github documents on the topic feel a bit like they're sending you around in circles and repeating themselves but the information is all there. Setting up a custom domain was simple too.

I've got to say so far I'm pretty glad I went for Jekyll and would highly reccomend it to any developer that's looking for a simple blogging platform. A very positive experience overall. <i class="fa fa-thumbs-up"></i>