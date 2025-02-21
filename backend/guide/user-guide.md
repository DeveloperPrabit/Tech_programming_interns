
#user sign-up

#user login 
-input => req.body =>email,password
 -if email and password doesn't match =>throw error
 -output =>jwt token 

 #User list API (admin)
 -if user admin,show list of user
 -if user is not  admin,throw unauthorized error

 -how?? By using JWT token by sebding JWT token throw headers.
 