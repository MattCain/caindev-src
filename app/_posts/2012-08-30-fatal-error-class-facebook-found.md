---
layout: post
title:  "Fatal error: Class Facebook not found in…"
date:   2012-08-30 17:05:55
---

After setting up a new development environment and trying to get a PHP project up and running that featured Facebook login, I was getting the following error:

`Fatal error: Class 'Facebook' not found in [File path]`

I was absolutely sure that when I included the Facebook PHP-sdk that I was getting the path to the facebook.php file right. After googling high and low, I eventually found out that the cause of the error was that *I was missing the php5-curl module*. I installed the module, restarted apache and the error disappeared.

It took me forever to find that out so hopefully I’ve saved you some time if you are getting this error!