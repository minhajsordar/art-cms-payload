# Step 1: Install Docker (for Ubuntu/Debian example)
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install docker-ce
sudo systemctl start docker
sudo systemctl enable docker

# Step 2: Pull PostgreSQL Docker image
docker pull postgres:latest

# Step 3: Run PostgreSQL container
docker run --name postgres-container -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -p 5432:5432 -d postgres:latest

# Step 4: Verify PostgreSQL container is running
docker ps

# Step 5: Connect to PostgreSQL (replace with your values)
psql -h localhost -U myuser -d mydb
psql -h localhost -U postgres -d postgres
psql -h localhost -p 5432 -U postgres


# Step 6: To check logs of the running container
docker logs -f postgres-container

# Step 7: Stop, Start, or Restart the container
docker stop postgres-container
docker start postgres-container
docker restart postgres-container

# Step 8: Clean up (Remove container and image)
docker rm -f postgres-container
docker rmi postgres:latest



docker run --name payloaddb --restart always -p 5432:5432 -v payloaddb:/var/lib/postgresql/data -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=postgres -d postgres

# Start PostgreSQL 
docker start payloaddb