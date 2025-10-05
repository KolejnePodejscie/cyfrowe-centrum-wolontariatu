from faker import Faker
import random
fake = Faker()


# Generate Users
class User:
    def __init__(self):
        self.id = fake.uuid4()
        self.displayName = fake.safe_color_name()
        self.description = fake.sentence()
        self.email = fake.email()

# Generate Organisations
class Organisation:
    def __init__(self):
        self.id = fake.uuid4()
        self.name = fake.safe_color_name()
        self.description = fake.sentence()
        self.isverified = 1
        self.contactinfo = fake.sentence()

# Generate Managers
class OrganisationManager:
    def __init__(self, orgs, users):
        self.organisationid = orgs[random.randrange(0, len(orgs))].id
        self.managerid = users[random.randrange(0, len(users))].id

# Generate Events for Orgs
class Event:
    def __init__(self, org):
        self.id = fake.uuid4()
        self.title = fake.sentence()
        self.latitude = float(random.randrange(50000,51210))/1000.0
        self.longitude = float(random.randrange(19810, 20073))/1000.0
        self.organisationid = orgs[random.randrange(0, len(orgs))].id

# Generate Task for Events
class EventTask:
    def __init__(self, events):
        self.id = fake.uuid4()
        self.eventid = events[random.randrange(0, len(events))].id
        self.description = fake.sentence()
        self.goal = fake.sentence()

# Generate Connect user to task
class UserTasks:
    def __init__(self, eventtasks, users):
        self.taskid = eventtasks[random.randrange(0, len(eventtasks))].id
        self.volountereid =  users[random.randrange(0, len(eventtasks))].id

class EventVolonteer:
    def __init__(self, events, users):
        self.eventid = events[random.randrange(0, len(events))].id
        self.volunteerid = users[random.randrange(0, len(eventtasks))].id

# gen users
users = []
for _ in range(100):
    users.append(User())

orgs = []
for _ in range(5):
    orgs.append(Organisation())

orgmanagers = []
for _ in range(20):
    orgmanagers.append(OrganisationManager(orgs, users))

events = []
for _ in range(20):
    events.append(Event(orgs))

eventtasks = []
for _ in range(100):
    eventtasks.append(EventTask(events))

usertasks = []
for _ in range(600):
    usertasks.append(UserTasks(eventtasks, users))
eventvolounters = []
for _ in range(200):
    eventvolounters.append(EventVolonteer(events, users))


# user_f = open("insert_users.sql", "w")
# for user in users:
#     user_f.write("INSERT INTO users(id, displayName, description, email, isadmin) VALUES (\'" + str(user.id) + "\', \'" + str(user.displayName) + "\', \'" + str(user.description) + "\', \'" + str(user.email) + "\', true);\n")
# user_f.close()

# org_f = open("insert_orgs.sql", "w")
# for org in orgs:
#     org_f.write("INSERT INTO organisations(id, name, description, isVerified, contactinfo) VALUES (\'" + str(org.id) + "\', \'" + str(org.name) + "\', \'" + str(org.description) + "\', true, \'" + str(org.contactinfo) +"\');\n")
# org_f.close()

# orgman_f = open("insert_managers.sql", "w")
# for orgman in orgmanagers:
#     orgman_f.write("INSERT INTO oragnisationmanagers(organisationId, managerId) VALUES (\'" + str(orgman.organisationid) + "\', \'" + str(orgman.managerid) + "\');\n")

# event_f = open("insert_events.sql", "w")
# for event in events:
#     event_f.write("INSERT INTO events(id, title, latitude, longitude, organisationid) VALUES (\'" + event.id + "\',\'" + event.title + "\'," + str(event.latitude) + "," + str(event.longitude) + ", \'" + event.organisationid + "\'); \n")

# eventtask_f = open("insert_event_task.sql", "w")
# for task in eventtasks:
#     eventtask_f.write("INSERT INTO eventtasks(id, eventid, description, goal) VALUES (\'" + task.id +"\', \'" + task.eventid + "\', \'" + task.description + "\', \'" + task.goal + "\'); \n")

# usertask_f = open("insert_user_task.sql", "w")
# for usertask in usertasks:
#     usertask_f.write("INSERT INTO taskassignment(taskid, volounteerid) VALUES (\'" + str(usertask.taskid) + "\', \'" + str(usertask.volountereid) + "\');\n" )

# eventvolounter_f = open("insert_event_volounter.sql", "w")
# for eventv in eventvolounters:
#     eventvolounter_f.write("INSERT INTO eventvolunteer(eventid, volunteerid, isaccepted) VALUES (\'" + eventv.eventid + "\', \'" + eventv.volunteerid + "\', true);\n")




# CONCATINATED 
migrations_f = open("index.sql", "w")
for user in users:
    migrations_f.write("INSERT INTO users(id, displayName, description, email, isadmin) VALUES (\'" + str(user.id) + "\', \'" + str(user.displayName) + "\', \'" + str(user.description) + "\', \'" + str(user.email) + "\', true) ON CONFLICT DO NOTHING;\n")

for org in orgs:
    migrations_f.write("INSERT INTO organisations(id, name, description, isVerified, contactinfo) VALUES (\'" + str(org.id) + "\', \'" + str(org.name) + "\', \'" + str(org.description) + "\', true, \'" + str(org.contactinfo) +"\') ON CONFLICT DO NOTHING;\n")


for orgman in orgmanagers:
    migrations_f.write("INSERT INTO oragnisationmanagers(organisationId, managerId) VALUES (\'" + str(orgman.organisationid) + "\', \'" + str(orgman.managerid) + "\') ON CONFLICT DO NOTHING;\n")

for event in events:
    migrations_f.write("INSERT INTO events(id, title, latitude, longitude, organisationid) VALUES (\'" + event.id + "\',\'" + event.title + "\'," + str(event.latitude) + "," + str(event.longitude) + ", \'" + event.organisationid + "\') ON CONFLICT DO NOTHING; \n")

for task in eventtasks:
    migrations_f.write("INSERT INTO eventtasks(id, eventid, description, goal) VALUES (\'" + task.id +"\', \'" + task.eventid + "\', \'" + task.description + "\', \'" + task.goal + "\') ON CONFLICT DO NOTHING; \n")

for usertask in usertasks:
    migrations_f.write("INSERT INTO taskassignment(taskid, volounteerid) VALUES (\'" + str(usertask.taskid) + "\', \'" + str(usertask.volountereid) + "\') ON CONFLICT DO NOTHING;\n" )

for eventv in eventvolounters:
    migrations_f.write("INSERT INTO eventvolunteer(eventid, volunteerid, isaccepted) VALUES (\'" + eventv.eventid + "\', \'" + eventv.volunteerid + "\', true) ON CONFLICT DO NOTHING;\n")

