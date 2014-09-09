---
layout: post
title:  "Sporcle 1-100 minefield cheat!"
date:   2013-07-10 17:05:55
---


This [Sporcle 1-100 minefield game](http://www.sporcle.com/games/RobPro/1-100-click-me) is seemingly impossible, I can hardly reach 30-40 before I run out of time. If you’re fed up of trying and want to see this game crumble before you, you can easily cheat though.

Hit the big green ‘Play’ button to start the game, then open up your browser’s Javascript Console. This is done differently depending on which browser you use but it’ll probably be under ‘Developer tools’ or ‘Tools’ or something like that in the menu.

Once you’ve got the Javascript Console open copy and paste the following code snippet into the console and hit return.

{% highlight javascript %}
for(var i = 0; i < 100; i++) {
    jQuery('#border'+i+' .answer').click();
}
{% endhighlight %}

This piece of javascript finds each number’s button in the right order and then clicks it, this happens almost immediately!

Here’s hoping Sporcle don’t change their code to stop this from working! Happy cheating lol.