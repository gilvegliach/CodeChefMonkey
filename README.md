# Description
CodeChefMonkey is a userscript that inserts the link of a practice problem in the page of the related contest problem. 
The link is inserted in the bottom panel, the same that has links to the editorial and author. The link is built according to
the instructions of [this post](https://discuss.codechef.com/questions/12771/how-can-i-submit-solutions-to-previous-contests/45701).

<img src="/screenshot.png" width="400">

## How to install
1. Install the Chrome Extension [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
   or equivalent for other browsers.
2. Click [here](https://github.com/gilvegliach/CodeChefMonkey/raw/master/CodeChefMonkey.user.js) and install. Alternatively, copy and paste the content of CodeChefMonkey.user.js in Tampermonkey.

## Issues
Sometimes the link is not inserted. In this case try to reload the page. I don't know the root cause of this behavior but 
feel free to send a pull request if you figure it out.
