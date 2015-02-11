#LiVeTeX
Live, in browser Latex editor.

####To Do
 - Enable multiple sessions

####Buildpack Dependencies
https://github.com/ddollar/heroku-buildpack-multi
https://github.com/gulopine/heroku-buildpack-tex

####Heroku Settings
heroku config:add BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-multi.git --app livetex
