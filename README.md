# NTD website

## Overview

* [Website structure](#website-structure)
* [Styling](#styling)
	* [Minifying stylesheets](#minifying-stylesheets)
* [Javascript](#javascript)
	* [Minifying JS files](#minifying-js-files)
* [Images and videos](#images-and-videos)
* [Include sections](#include-sections)
* [Plugins](#plugins)
* [Individual NTD pages](#individual-ntd-pages)
* [NTD researcher stories](#ntd-researcher-stories)
* [Seminars](#seminars)
* [Updating collaborator information](#updating-collaborator-information)
	* [Accessing simplemaps](#accessing-simplemaps)
	* [Making map modifications](#making-map-modifications)
	* [Adding a new city](#adding-a-new-city)
	* [Saving map modifications](#saving-map-modifications)
	* [Downloading modified map](#downloading-modified-map)
	* [Uploading modified map to live site](#uploading-modified-map-to-live-site)
	* [Map label formatting](#map-label-formatting)
	

## Website structure

The table below gives a brief description of the main landing pages for the site:

| File                       | Description                                                      |
| :-----------               | :--------------------                                            |
| `./index.html`             | home/landing page                                                |
| `./about.html`             | general information                                              |
| `./what.html`              | list of NTDS (see [Individual NTD pages](#individual-ntd-pages)) |
| `./where.html`             | Map of NTD collaborators (see [Updating collaborator information](#updating-collaborator-information)) |
| `./who.html`               | list of NTD researcher stories/blogs (see [NTD researcher stories](#ntd-researcher-stories))      |
| `./why.html`               | FAQs                                                             |
| `./gallery.html`           | responsive gallery of site images (see [Images and videos](#images-and-videos)) |
| `./seminar.html`           | seminar details (see [Seminars](#seminars))                      |
| `./includes/ntds/bacteria` | list of bacteria for what page (see [Individual NTD pages](#individual-ntd-pages))                              |
| `./includes/ntds/parasites`| list of parasites for what page (see [Individual NTD pages](#individual-ntd-pages))                            |

The table below contains the locations of the main components for the site:

| Type                   | Location                                                          |
| :------------------    | :--------------------                                             |
| Stylesheets (CSS)      | `./css` (see [Styling](#styling))                                 |
| Javascript (JS)        | `./js` (see [Javascript](#javascript))                            |
| Images                 | `./img` (see [Images and videos](#images-and-videos))             |
| Videos                 | `./videos` (see [Images and videos](#images-and-videos))          |
| Includes               | `./includes` (see [Include sections](#include-sections))          |
| Plugins                | `./plugins` (see [plugins](#plugins))                             |
| Individual NTD pages   | `./ntds` (see [Individual NTD pages](#individual-ntd-pages))      |
| NTD researcher stories | `./blogs` (see [NTD researcher stories](#ntd-researcher-stories)) |


## Styling

The site comes from a template.  Original stylesheets which have extra styles that are not used in the site (but may be in future) can be found in `css/original`.  Both `style.css` and `color-option1.css` are reduced versions of the original css files and should only contain styles relevant to the current site.

The main stylesheets used by the site are:

* `./css/style.min.css` (see [Minifying stylesheets](#minifying-stylesheets)) 
* `./css/color-option1.min.css` (see [Minifying stylesheets](#minifying-stylesheets)) 
* `./css/fonts.css`

Some of the plugins that the site uses have their own stylesheets which can be found in `./plugins`. 

*N.B. The Font Awesome (`./plugins/font-awesome`) stylesheet has been reduced to contain only the icons used by the site. Any new icons will need to be added to this stylesheet.*

### Minifying stylesheets

The two main stylesheets have been minified to help with SEO. When doing style updates, both the expanded and minified stylesheets will need to be modified. Add changes to the expanded stylesheet first. Then, copy the code into a minifier (e.g.  [https://cssminifier.com/](https://cssminifier.com/)) to get the reduced file.  **NEVER update the minified file only**.

## Javascript

Javascript (JS) has been split into separate files to aid loading times and SEO.  The main JS files used by the site are:

* `./js/custom.min.js` - JS used across the site
* `./js/faq.js` - JS used for accordian on Who page
* `./js/homepage-banner.js` - JS used for homepage banner 
* `./js/homepage-counter.js` - JS used for homepage counter

### Minifying JS files

As with the stylesheet, the main JS file has been minified. When doing JS updates, both the expanded and minified JS files will need to be modified. Add changes to the expanded JS file first. Then, copy the code into a minifier (e.g.  [https://www.minifier.org/](https://www.minifier.org/)) to get the reduced file.  **NEVER update the minified file only**. 

## Images and videos

## Include sections

## Plugins

## Individual NTD pages

## NTD researcher stories

## Seminars





## Updating collaborator information

Collaborator information is shown as labels in the map found on the [Where](www.neglectedtropicaldisease.org/where.html) page.  

There is a Google Sheets table [here](https://docs.google.com/spreadsheets/d/11rIyKeM7BPmYhSUbeNetJRGo0pA2l2G6Ze6l5PxU0UQ) which contains the latest information. If you don't have access, please ask Jacqui (jm15), Victoria (vo1), or Nancy (neh) to share it with you. Add your changes here before generating the new map.  If you don't, your changes may be lost.

### Accessing simplemaps

* Go to [simplemaps](https://simplemaps.com/)
* Click on **"World Map"** in the top menu and select **"Customize Online"**
* Click on **"Options"** and select **"Register Purchase"**
* Enter the **order number** (see Jacqui Keane) in the text box and click **"Submit"**. You should now see **"Licensed"** next to the Options button.
* Click on **"Options"** and select **"View Order Details"**
* The current map is *World Map (Bnl3ZB7A)*. Click **"View"**

### Making map modifications

* Go to the **"Locations"** tab.
* Update map data
  * **Option 1: Update existing collaborator details (no new city)**:- These updates are done in the "Description" column.  See [map label formatting](#map-label-formatting) for more information.
  * **Option 2: Update existing collaborator details (new city)**:- Remove the existing collaborator details from the "Description" column. Add new city with the collaborator details by following the instructions for [adding a new location](#adding-a-new-city).
  * **Option 3: Add a new collaborator to an existing city**:- These updates are done in the "Description" column.  See [map label formatting](#map-label-formatting) for more information.
  * **Option 4: Add a new collaborator to a new city**:- Add new city with the collaborator details by following the instructions [adding a new location](#adding-a-new-city).

### Adding a new city

Where collaborators have moved to a new research center or a new collaborator has been added where there is no city pin on the map, a new location will need to be added.

* Add the name of the city in the Name column at the bottom of the table. 
* Click **"Import Lat/Lng from City/Address"**. This should update the  Lat and Lng columns.
* Add the collaborator details in the **"Description"** column (see instructions for [description formatting](#description-format)).

You can check your changes on the map above as it updates in real time.

### Saving map modifications

If you don't save the edits you have just made, you're going to have to do them all over again next time you want to update something on the map. So...YOU **MUST** SAVE YOUR CHANGES!!!

*  Go to the **"Code"** tab and click **"Save Mapdata and Reload Map"**

### Downloading modified map

* Go to the **"Finish"** tab.
* Click on **"Download Map (.zip)"**
* Uncompress the folder, you will only need to upload **mapdata.js**.

### Uploading modified map to live site
 
* Follow the instructions for forking the NTD website repository and creating a branch.
* On your branch, overwrite the **mapdata.js** in `plugins/simplemaps` with the **mapdata.js** file you just downloaded
* Follow the instructions for merging your changes.
* Follow the instructions for uploading your changes to the live site.

### Map label formatting

Collaborators are grouped by **city**. Each city has a Lat/Lng value associated with it which determines the position of the marker that is visible on the map. The "Description" column contains the collaborator information.

#### HTML formatting

The description uses HTML to style the content. The following HTML tags are used:

* `<strong></strong>` :- makes text between tags **bold**
* `<em></em>` :- makes text between tags *italic*
* `<br />` :- adds a new line

See [here](https://www.w3schools.com/tags/ref_byfunc.asp) for more information on HTML tags and their format/function.

#### Description format

The description for each marker has the following format:

| Fields              | Format                |
| :------------------ | :-------------------- |
| Collaborator name   | **Bold** (`<strong>`) |
| Institute           | **Normal**            |
| Project description | **Italic**            |

This has to be entered in a single line with line breaks between fields e.g.:

`<strong>Collaborator name</strong><br />Institute<br /><em>Project description</em>` 

And will look like:

**Collaborator name**  
Institute  
*Project description*  

Add a line break between collaborators e.g.:

`<strong>Collaborator name</strong><br />Institute<br /><em>Project description</em><br /><br /><strong>Collaborator name</strong><br />Institute<br /><em>Project description</em>`

And will look like:

**City**  
**Collaborator name**  
Institute  
*Project description*  

**Collaborator name**  
Institute  
*Project description*  

#### Cities with multiple markers

Some cities have been split into multiple rows as there were too many for the formatting to withstand. Each marker can only be associated with up to 4 collaborators. One example is London which has 11 collaborators. 

Split the collaborators logically by institution where possible. You can't put 3 markers with a "City" of London as the markers would overlap. To get around this, use more specific locations with enough distance between them e.g. Kew Gardens and Stratford.

You can use the instructions for [adding a new city](#adding-a-new-city). Instead of using a city (e.g. London), use the specific location (e.g. Kew Gardens) in the City/Address field to calculate the Lat/Lng values.  You can then set the Name field to London.

#### Default settings (DO NOT UPDATE!)

| **Setting** | **Value** |
| ----------- | --------- |
| Color       | #bd002f   |
| Size        | 25        |
| Type        | marker    |    
| Opacity     | 0.8       |
