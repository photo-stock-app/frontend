start-dev:
	$(MAKE) down-dev
	docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml -p frontend-dev up --build

down-dev:
	docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml -p frontend-dev down --rmi local --volumes --remove-orphans


start-prod:
	$(MAKE) down-prod
	docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml -p frontend-prod up --build


down-prod:
	docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml -p frontend-prod down --rmi local --volumes --remove-orphans