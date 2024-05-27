# Soasis Ecommerce Project

- This is a project for the final Application Development project at IUH to demonstrate our learning and understanding throughout the course. We chose to develop an ecommerce shopping website as it is a complex and flexible application which challenged our understanding of the technologies involved.

- The purpose of this project was to build a ecommerce project where vendor can register, add, edit/delete their shop product on their shop profile, receive orders from customers, see their total earnings and revenue payment, and also is for customers who can register, set their profile, search for their favorite products , order and purchase product from their favorite shops.

- A live demo can be found: Update when project completed
- Sceenshot: ![Screenshot_27-5-2024_181336_localhost](https://github.com/FuuToru/23_Ecommerce/assets/104120017/e3bfc165-8bb0-4589-83fd-74477b241a2e)


## Deployment

**_If you want to have data available in the database upon deployment, you need to have a `.env` file located in the `src/backend_api` directory. You can contact me via email at huutri231103@gmail.com to obtain the `.env` file. After that, follow the steps below._**

### Deploy without Docker
1. Download and install Git to your computer - see [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. Once you have installed Git, you will need to create a folder on your computer and then run the _git clone_ command. A demonstration of this code can be seen below:

```terminal
mkdir ecommerceApp
cd ecommerceApp
git clone https://github.com/FuuToru/23_Ecommerce
```
**_The following steps should all be performed while in the src folder of your git clone from step 2_**

3. Then git clone using the following terminal command:

```
cd src/backend_api
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
4. Then you add a new terminal command and using the following command:

```
cd src/frontend
npm start
```

5. The application will now be viewable at the following address:

```url
http://localhost:3000/
```
### Deploy with Docker

1. You will need to download and install [Docker Desktop](https://www.docker.com/get-started)

2. Download and install Git to your computer - see [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

3. Once you have installed Git, you will need to create a folder on your computer and then run the _git clone_ command. A demonstration of this code can be seen below:

```terminal
mkdir ecommerceApp
cd ecommerceApp
git clone https://github.com/FuuToru/23_Ecommerce
```
**_The following steps should all be performed while in the src folder of your git clone from step 2_**

5. Then git clone using the following terminal command:

```
cd src
docker compose up
```
6. The application will now be viewable at the following address:

```url
http://localhost:3000/
```

## Member Information

- Dang Huu Tri - 21109451
- Tran Ky - 21011801
- Le Thi Minh Trang - 21099921

## Responsibility

- Dang Huu Tri:
    - Backend Development
    - API Integration
    - UI/UX Design
    - Frontend Development

    
- Tran Ky:
    - Backend Development
    - API Integration
    - Database Management
    - Frontend Development

- Le Thi Minh Trang:
    - Quality Assurance
    - API Integration
    - Backend Development
    - Frontend Development


---
