# red-onionring.js
red-onionring.js is an [onionring.js](https://allium.house/garden/onionring/) fork with additional features:
- Customizable index widget that includes three options:
    - simple: unordered list of sites
    - advanced: list of sites including title, description, owner, and badge
    - badge: grid of badges (buttons, stamps, icons, etc)
- Option to alphabetically sort the webring and index page list
- Displaying the onionring widget on the index site shows separate text that can be modified
- The index widget displays a sites counter (how many sites in the webring)

### To Do
- Make a flag for sites counter so that it's optional
- Separate alphabetical sorting for the ring widget and index
- Separate text on index site without requiring the index site to be included in the ring
- Write up a "How To Use" tutorial
- General code and commenting clean up

## How To Use red-onionring.js

**WIP**

### Webring Manager:
1. Upload the files to your preferred web server.
2. Optional: Create a page for the Webring, then include the following code on the page where you would like the Webring list. Do not forget to change the script src to the url you uploaded the files to:
```
<div id='index'>
    <script type="text/javascript" src="scriptURL/red-onionring-variables.js"></script>
    <script type="text/javascript" src="scriptURL/red-onionring-index.js"></script>
</div>
```
3. Edit `red-onionring-variables.js`:
    - fill out the list of sites for each member: full url (including https), site title, site owner, and url to site badge (full url is required, anything else may optionally be an empty string: '')
    - `ringName` is the name of your webring and will show up as "part of the ringName webring"
    - `ringID` should be a uniquely identifiable variable to prevent conflict if someone is part of multiple webrings.
4. In `onionring.css`, change #webringid to the ringID you set, not forgetting the #. (Ex. #ringID)

### Everyone who's part of the webring:
1. Paste the following code where you want the webring widget to display on your site. Make sure when handing this code to the webring members, the src is the full url to where the files are hosted.
```
<div id='webringid'>
    <script type="text/javascript" src="scriptURL/red-onionring-variables.js"></script>
    <script type="text/javascript" src="scriptURL/red-onionring-widget.js"></script>
</div>
```
2. Paste the following script between `<head></head>` on the pages the widget lives. Like the previous step, the src must have the full url to where the files are hosted:
```<link rel="stylesheet" href="scriptURL/red-onionring.css">```

## [onionring.js](https://allium.house/garden/onionring/)
> Original instructions on how to use onionring.js are on the [allium.house website](https://allium.house/garden/onionring/). allium.house was previously garlic.garden.
> 
> onionring.js is made up of four files: 
> - onionring-widget.js 
> - onionring-index.js
> - onionring-variables.js 
> - onionring.css
>
> it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
>
> it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24
