# NTD website

## Overview

* [Updating collaborator information](#modifying-collaborator-information)
	* [Accessing simplemaps](#accessing-simplemaps)
	* [Making map modifications](#making-map-modifications)
	* [Adding a new city](#adding-a-new-city)
	* [Saving map modifications](#saving-map-modifications)
	* [Downloading modified map](#downloading-modified-map)
	* [Uploading modified map to live site](#uploading-modified-map-to-live-site)
	* [Map label formatting](#map-label-formatting)

## Modifying collaborator information

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

You can use the instructions below for [adding a new location](#adding-a-new-location-to-the-map). Instead of using a city (e.g. London), use the specific location (e.g. Kew Gardens) in the City/Address field to calculate the Lat/Lng values.  You can then set the Name field to London.

#### Default settings (DO NOT UPDATE!)

| **Setting** | **Value** |
| ----------- | --------- |
| Color       | #bd002f   |
| Size        | 25        |
| Type        | marker    |    
| Opacity     | 0.8       |
