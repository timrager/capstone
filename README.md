# Reservation App for Bed & Breakfast (demo of full CRUD)

## Technology Used
  * Front End
    * React for user interface
    * Redux for global state management
    * Tailwind CSS for layout/design
  * Back End
    * Node.js / Express for route management, request/response handling
    * MongoDB / Mongoose for handing data
    * bcryptjs for storing hashed passwords
    * passport/passport-jwt to handle authentication
    * jsonwebtoken for authorization



## User Stories
As a User, I want to...
  * ...learn more about the B&B's location
  * ...learn more about each room, including more pictures, amenities, etc.
  * ...be able to book a reservation for a room, by date(s)
  * ...be able to cancel my reservation
  * ...be able to view all my reservations

As a B&B Owner:
  * ...be able to create/edit/delete Users
  * ...see all reservations
  * ...see all Users and their associated reservations
  * ...be able to book any reservation for any user
  * ...be able to cancel any reservation for any user


## Wireframes / Concepts
  * [Initial concepts](Concepts.pdf)


## Schedule
Task | Estimate | Complete By
--- | --- | ---
**Planning** | - | -
Build Wireframes / Concept | 1 Day | Th July 23
Build User Stores | 2 Hours | Th July 23
Build Schedule | 2 Hours | Th July 23
**Back-End** | - | - 
Set up MongoDB with:
Define and build API (Server, Controller, Model) | 2 Hours | Fri July 24
Build User DB | 2 Hours | Fri July 24
Build Rooms DB | 2 Hours | Fri July 24
Build CRUD functionality for User | 2 Hours | Sat July 25 
Build CRUD functionality for Reservations | 2 Hours | Sat July 25
Build User Authentication Back-End | 4 Hours | Sat July 25
**Front-End** | - | - 
Build Login Page | 2 Hours | Sun July 26
Build Sign-Up Page | 4 Hours | Sun July 26
Build User Profile Page | 1 Day | Mon July 27
Build Main Page | 1 Day | Tue July 28
Build Room Modals | 4 Hours | Wed July 29
Build Reservation Modal | 4 Hours | Wed July 29
Add Styling | 3 Days | Sat Aug 1
Testing | 1 Day | Sun Aug 2


## Future Update Roadmap
  * Implement dashboard page to review user's info
  * Implement admin page to manage users and reservations
  * Prevent multiple bookings on a room
  * Create more detailed room pages
  * Allow for eCommerce-type checkout
  * Add more form validation
