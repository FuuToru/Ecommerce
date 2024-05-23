# Dockerfile
FROM python

# Cài đặt g++ và các gói phụ thuộc khác
RUN apt-get update && apt-get install -y \
    g++ \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip

COPY ./requirements.txt . 

RUN pip install -r requirements.txt

COPY . /app
WORKDIR /app

COPY ./entrypoint.sh . 

ENTRYPOINT [ "sh","/app/entrypoint.sh" ]
