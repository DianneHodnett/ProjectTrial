
Notes: 

https://github.com/graphcool/prisma



=====================================================================================
Location of Instructions: https://github.com/graphcool/prisma

.........................................................................
.....[Instructions Executed on TERMINAL].................................
.........................................................................

       // INSIDE OF THE FOLDER WHERE I WANT TO CREATE A NEW CLUSTER

    Edxael: npm install -g prisma
/home/edxael/.nvm/versions/node/v8.11.1/bin/prisma -> /home/edxael/.nvm/versions/node/v8.11.1/lib/node_modules/prisma/dist/index.js

> prisma@1.7.1 postinstall /home/edxael/.nvm/versions/node/v8.11.1/lib/node_modules/prisma
> prisma init-prisma || echo ""

npm WARN ajv-keywords@3.1.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.2 (node_modules/prisma/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ prisma@1.7.1
added 26 packages, updated 18 packages and moved 1 package in 14.676s

    Edxael: prisma init
? Connect to your database, set up a new one or use existing Prisma server? sandbox-us1                
Free development server on Prisma Cloud (incl. database)
? How do you want to call your service? prismaTest2
? To which stage do you want to deploy? dev
Created 2 new files:                                                                          

  prisma.yml           Prisma service definition
  datamodel.graphql    GraphQL SDL-based datamodel (foundation for database)
  

You now can run $ prisma deploy to deploy your database service.

    Edxael: code .



    Edxael: prisma deploy
Creating stage dev for service prismaTest2 ✔
Deploying service `prismaTest2` to stage `dev` to server `prisma-us1` 254ms

Changes:

  User (Type)
  + Created type `User`
  + Created field `id` of type `GraphQLID!`
  + Created field `name` of type `String!`
  + Created field `updatedAt` of type `DateTime!`
  + Created field `createdAt` of type `DateTime!`

Applying changes 711ms

Your Prisma GraphQL database endpoint is live:

  HTTP:  https://us1.prisma.sh/public-gossamerhealer-739/prismaTest2/dev
  WS:    wss://us1.prisma.sh/public-gossamerhealer-739/prismaTest2/dev


    Edxael: 

.............................................................

.............................................................


This is the code that I Got:




===========================================================
MUTATION TO CREATE A USER

mutation{
  createUser(data: { name: "Koda Kumi" }){
    id
    name
  }
}

===========================================================


{
  "data": {
    "createUser": {
      "id": "cjgg4hwd595kf0b25u0mpek00",
      "name": "Koda Kumi"
    }
  }
}