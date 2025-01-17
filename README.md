Docker Commands README
This README file provides a list of useful Docker commands and their explanations for managing Docker containers and images.

1. List Running Containers
Command:

bash
Copy
docker ps
Description: Lists all the currently running containers. Shows details like container ID, name, image, ports, and status.

2. List All Containers (Running + Stopped)
Command:

bash
Copy
docker ps -a
Description: Lists all containers on your system, including those that are stopped. Provides information like container ID, status, image, and the command used.

3. List Container IDs Only
Command:

bash
Copy
docker ps -aq
Description: Lists only the container IDs of all containers (running or stopped).

4. List Images
Command:

bash
Copy
docker images
Description: Lists all the Docker images on your system, showing details like the image name, tag, image ID, creation time, and size.

5. List Images with Custom Formatting
Command:

bash
Copy
docker images --format "{{.Repository}}:{{.Tag}} - {{.ID}}"
Description: Lists Docker images in a custom format, showing the repository name, tag, and image ID.

6. List Dangling Images (Unused Images)
Command:

bash
Copy
docker images -f "dangling=true"
Description: Lists dangling images — images that are not associated with any container and are not used anymore.

7. Stop a Running Container
Command:

bash
Copy
docker stop <container_name_or_id>
Description: Stops the running container with the specified name or ID.

8. Remove a Stopped Container
Command:

bash
Copy
docker rm <container_name_or_id>
Description: Removes a stopped container from the system.

9. Force Remove a Container
Command:

bash
Copy
docker rm -f <container_name_or_id>
Description: Forces the removal of a container, even if it is running or has issues.

10. Remove a Docker Image
Command:

bash
Copy
docker rmi <image_id_or_name>
Description: Removes a Docker image from the system by its ID or name.

11. Force Remove a Docker Image
Command:

bash
Copy
docker rmi -f <image_id_or_name>
Description: Forces the removal of a Docker image, even if it is being used by any containers.

12. Run a Docker Container (Example with Node.js app)
Command:

bash
Copy
docker run -v "C:/path/to/your/project:/app" -p 8080:8080 -it --name <container_name> <image_name>
Description: Runs a container with the specified image, mapping the host project directory to the container's /app directory and exposing port 8080.

-v: Mounts a volume (host directory to container directory).
-p: Maps ports (host port to container port).
-it: Interactive terminal (for running applications like Node.js).
--name: Specifies a custom name for the container.
13. Check Running Processes in a Container
Command:

bash
Copy
docker top <container_name_or_id>
Description: Shows the processes running inside the container.

14. View Container Logs
Command:

bash
Copy
docker logs <container_name_or_id>
Description: Displays the logs of a specific container, which can be helpful for debugging.

15. Get Detailed Information About a Container
Command:

bash
Copy
docker inspect <container_name_or_id>
Description: Provides detailed information about a container, including its configuration, network settings, and more.

16. Show Resource Usage of Containers
Command:

bash
Copy
docker stats <container_name_or_id>
Description: Displays live resource usage statistics (CPU, memory, network, etc.) of running containers.

17. Remove All Stopped Containers
Command:

bash
Copy
docker container prune
Description: Removes all stopped containers from the system.

18. Remove All Unused Images
Command:

bash
Copy
docker image prune
Description: Removes unused images that are not associated with any containers.