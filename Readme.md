[![Coveralls – test coverage
](https://img.shields.io/coveralls/studio-b12/keyword-popularity.svg?style=flat-square)
](https://coveralls.io/r/studio-b12/keyword-popularity)
 [![Travis – build status
](https://img.shields.io/travis/studio-b12/keyword-popularity/master.svg?style=flat-square)
](https://travis-ci.org/studio-b12/keyword-popularity)
 [![David – status of dependencies
](https://img.shields.io/david/studio-b12/keyword-popularity.svg?style=flat-square)
](https://david-dm.org/studio-b12/keyword-popularity)
 [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square)
](https://github.com/airbnb/javascript)




<div                                                         id="/">&nbsp;</div>

keyword-popularity
==================

**Get the number of npm packages with a certain keyword.**




<p align="center"><a
  title="Graphic by the great Justin Mezzell"
  href="http://justinmezzell.tumblr.com/post/75051971263"
  >
  <br/>
  <br/>
  <img
    src="Readme/Stopwatch.gif"
    width="400"
    height="300"
  />
  <br/>
  <br/>
</a></p>




<div                                             id="/installation">&nbsp;</div>

Installation
------------

```sh
# Globally for a user:
npm install --global keyword-popularity

# …or locally for a project:
npm install --save-dev keyword-popularity
```




<div                                                    id="/usage">&nbsp;</div>

Usage
-----

<!-- @doxie.inject start -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->
  SYNOPSIS

    Usage: keyword-popularity ...<keyword>
       or: keyword-popularity (-h|--help)


  OPTIONS

    -h  --help   Print a short synopsis (-h) or this help text (--help)


  EXAMPLES

    $ keyword-popularity  cli  tool  cli-tool
    KEYWORD    POPULARITY
    cli        2422
    tool       497
    cli-tool   0
<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end -->



<div                                                  id="/license">&nbsp;</div>

<div                                                  id="/license">&nbsp;</div>

License
-------

[MIT][] © [Studio B12 GmbH][]

[MIT]:              ./License.md
[Studio B12 GmbH]:  http://studio-b12.de
