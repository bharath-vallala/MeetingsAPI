
Meetings API
Routes explanation

Routes -->>

Register User -->>
This route is used to register the user (name , email , password , username, address are mandatory to pass )

Login User-->>
This route is for user Login (email and password are Mandatory) JWT token is sent as http cookie and also in response body for understanding purpose, JWT is used to validate the user in all the Routes
->>
Logout User-->>
This route invalidates the JWT cookie and makes the user Logout.
->>

Create Meeting-->>
This route is used to create a new Meeting with parameters like title , date time etc, no single user can have duplicate meetings 
Get all Meetings.
Used to get all the meetings created by the currently logged in user user info is extracted from JWT token.

Get Meetings by filters-->>

Get By TITLE: get meetings of currently logged in user by title name.
Get By Time : get meetings of currently logged in user by Time of the meeting
Get By Date: get meetings of currently logged in user by Date of the meeting.

Update Meetings by filters-->>

Update By TITLE: Update meetings of currently logged in user by title name.
Update By Time : Update meetings of currently logged in user by Time of the meeting.
Update By Date: Update meetings of currently logged in user by Date of the meeting.
Update Attendees of Meetings.
Add Attendee: add Attendee to certain meeting by user id and meeting id.
Remove Attendee : Remove Attendee to certain meeting by user id and meeting id.
Delete Meetings : delete meeting itself by given Meeting-Id  .

NOTES-->>
If needed to test the application please include the .env file and add the MONGOURL (mongodb url) and JWTSECREAT (any string) .
Please install all the npm package with command “npm install”.
Please pass all the required body parameters the application may not work as expected because extensive testing has not been done .

