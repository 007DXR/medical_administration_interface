docker stop management
docker rm management
docker rmi mang
docker build -t  mang . 
docker run --name=management -p 8080:80 -d mang