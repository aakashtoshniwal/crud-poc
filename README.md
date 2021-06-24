<!-- # crud-poc

To Start Vue application

1.Clone the git repository
2.Go to project folder path and do 'yarn install'
3.To up the application, run command 'yarn run serve'


To start backend API JSON server

npm install -g json-server


Create a db.json file with some data

Empty file to be maintained

{
  "posts": [
  ]
}

Sample file created at time of testing

 {
  "posts": [
    {
      "first_name": "akash",
      "last_name": "toshniwal",
      "emailId": "mail@gmail.com",
      "phone_number": "942-315-3356",
      "year_of_passing": "2014",
      "id": 1
    }
  ]
}


//Start JSON Server

Go to File path nd rum below command

json-server --watch db.json --> 