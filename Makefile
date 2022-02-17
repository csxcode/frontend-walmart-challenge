docker-build:
	docker build -t frontend-walmart . && \
  docker run -d -it -p 8000:80 --name frontend-walmart frontend-walmart

docker-down:
	sudo docker rm -f frontend-walmart
