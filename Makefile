start-dev:
	$(MAKE) down-dev
	docker-compose -f docker-compose.dev.yml  -p frontend-dev up --build

restart-dev:
	#docker context use default
	#$(MAKE) down-dev#
	docker-compose -f docker-compose.dev.yml -p frontend-dev restart
down-dev:
	docker-compose -f docker-compose.dev.yml -p frontend-dev down --rmi local --volumes --remove-orphans