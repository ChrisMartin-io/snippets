# Below is an excerpt of code from my web app, r13 Resource (http://r13.chrismartin.io). This is a python function that is called once an hour via Heroku Scheduler

# It first sends a get requeat for the curriculum site at Rithm School ( our bootcamp ), and runs BeautifulSoup which is a Python library to begin parsing the list of pages available

# next it re-creates the database which allows for the data to populate in the order that Rithm specifies (it's not always chronological or alphabetical but arranged by subject)

# next it iterates over the 'soup' to find links 

# then it iterates of the links to parse out ones that aren't needed (those that are zip files)

# once parsed it populates the database which the site menu populates from, with both title and url

# thanks for reading!!


@manager.command
def get_all_exercises():

    response = requests.get('http://curric.rithmschool.com/r13/exercises/')
    soup = BeautifulSoup(response.text)
    links = []

    # Drop Exercise table
    engine = create_engine(ProductionConfig.SQLALCHEMY_DATABASE_URI)
    Exercise.__table__.drop(engine)
    db.create_all()

    # Set up current exercises to test for duplicates
    current_exercises = []
    for exercise in Exercise.query.all():
        current_exercises.append(exercise.title)

    # Search soup for links
    for link in soup.find_all('a'):
        links.append(link.get('href'))

    for link in links:
        if 'zip' in link:
            continue

        response = requests.get(
            'http://curric.rithmschool.com/r13/exercises/' + link)
        soup = BeautifulSoup(response.text)
        if (soup.title is None):
            continue
        if (soup.title.string == 'Rithm Curriculum'):
            continue
        else:
            new_exercise = Exercise(
                title=link,
                url='http://curric.rithmschool.com/r13/exercises/' + link)
            db.session.add(new_exercise)

    db.session.commit()