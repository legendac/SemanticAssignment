#Assignment 4 for the Semantic Web course

This assignment shows hosting my Stardog on a set of user-created ontologies. It shows the difference between queries with and without Reasoning (Inferencing).


### Requirements

To get this thing up and running on a local machine, you need the following:

* Python 2.7
* Virtualenv (`pip install virtualenv`)
* Setup the virtualenv in the directory of this repository (`virtualenv .`)
* Activate the virtualenv (`source bin/activate` on linux-like systems)
* Install the necessary packages (install using `pip install -r requirements.txt`)
* A recent Stardog installation
	* The script assumes a Stardog database with the name 'tutorial' running at <http://localhost:5820/tutorial> (security disabled).
	* The database should have resoning enabled, and "SameAs" reasoning should be set to "Full".
	* If you want to use a different name or location (i.e. not running on localhost, port 5820) you need to set the `TUTORIAL_REPOSITORY` variable in `src/tutorial.py`

Once everything is ready:

<In Terminal or Command Prompt>
* start your Stardog server with `stardog-admin server start --disable-security`,
	<Stardog Config>
	* visit Stardog running at <http://localhost:5820>
	* create a new database and name it "myDB", set "Reasoning Type" to 'SL', "SameAs Reasoning" to 'FULL'.
	* upload 'AmsBurger-merged3.owl' from the Ontology folder

* change dir into the `src` directory, and
* run `python tutorial.py`.

The web app is then running at <http://localhost:5000> .



Adapted from <https://github.com/RinkeHoekstra/sw2015-tutorial>
Kudos to Rinke Hoekstra for his assistance along the way.

