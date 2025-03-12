# user sign-up

-API Endpoint (msg:User signup successfully )(/register)
-userController.register()
-register contoroller
1.email,password check
2.create bcrypt utility file (genhash,comapreHash)
3.payload.password =genHash(password)
4.userModel.create(payload)
5.email signup (email,notification)

# user login

-API endpoint(/login)
-usercontroller.login()
-login controller
1.email exist: isActive :true,
2.check email verification of user
3.email not verified,throw error
4.compare password hash with user password
5.if invalid, throw error
6.return true

# Email token generation

-API (/generate-otp-token)
1.email exist :isActive:true,
2.use crypto util,to create otp (truly random otp)
3.if not verified,generate otp
4.store the opt in user database

# Email Token verification

-API (/verify-email-token)
1.email exits:isActive:true
2.compare otp
3.if verified, update user database with isEmailVerified : true,otp:""
4.else token invalid

# User list API (admin)

-if user admin,show list of user
-if user is not admin,throw unauthorized error

-how?? By using JWT token by sebding JWT token throw headers.

User Email verification
-if email unverified

# user list (admin)

- find()
  -secure pass admin as sys role
  -select false

# user block (admin)

-blockUser method
-user findOne({\_id:id})
-use opposite of user isActive status
-user updateOne()

# user delete (admin)

-secure admin only
-user findOne()
-user deleteOne({\_id:id})

# user profile (admin, user)

-secureAPI()
-checkRole update for sysRole empty condition
-secure token only {name,email}
-token bcrypt
-use email to find user details (isActive:true,isEmailVerified;true)
-user ROle and pass it to checkRole
-user id =>req.currentUser
if get profile
req.headers => token(email,roles)

# get user details (admin)

# user password change (user)

# user password reset (admin)

# user forget password change (user,admin)

#
