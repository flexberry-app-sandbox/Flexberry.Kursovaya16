docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya16-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya16-java/app ../../..
