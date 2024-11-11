FROM python:3.9-alpine

WORKDIR /app

COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

COPY . /app

EXPOSE 5000

CMD ["sh", "-c", "python3 migrations/migrate.py && gunicorn -b 0.0.0.0:5000 app:app"]