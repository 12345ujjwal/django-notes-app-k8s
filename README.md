# Simple Notes App for Skill Nebula Community
This is a simple notes app built with React and Django.

## Requirements
1. Python 3.9
2. Node.js
3. React

## Installation
1. Clone the repository
```
git clone https://github.com/12345ujjwal/django-notes-app-k8s.git
```

2. Build the app
```
cd django-notes-app-k8s
docker build -t notes-app .
```

3. Run the app
```
docker run -d -p 8000:8000 notes-app:latest
```

## Nginx

Install Nginx reverse proxy to make this application available

`sudo apt-get update`
`sudo apt install nginx`

1. Install Docker compose plugin
   ```
   sudo apt update
   sudo apt install docker-compose
   ```

2. ```
   docker compose up
   ```
