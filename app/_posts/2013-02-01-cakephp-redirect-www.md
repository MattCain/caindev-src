---
layout: post
title:  "CakePHP: Redirect to WWW subdomain from non-WWW requests"
date:   2013-02-01 17:05:55
---

Google and other search engines will think that www.domain.com and domain.com are two different sites. For SEO purposes you will need to make one of them redirect to the other.

Most websites choose to use the WWW subdomain rather than the naked domain as using the naked domain can throw up some difficult issues if your site gets big, [read more here](http://www.yes-www.org/why-use-www/).

To implement this redirect in CakePHP, you need to open up the .htaccess file in the top level directory of your site and replace it completely with the following (change ‘domain.com’ to your own domain obviously!)

{% highlight apache linenos %}
Options +FollowSymLinks
RewriteEngine On
RewriteCond %{HTTP_HOST} ^domain\.com [NC]
RewriteRule ^(.*)$ http://www.domain.com%{REQUEST_URI} [R=301,L]
 
RewriteRule ^$ app/webroot/    [L]
RewriteRule (.*) app/webroot/$1 [L]
{% endhighlight %}

And that’s it! This will redirect all non-WWW requests to the WWW version, even if a user goes straight to a page on your site like domain.com/news, it’ll redirect to www.domain.com/news.

Hope that helps!