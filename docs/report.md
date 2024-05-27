## 1. PLAN
- Step 1: Research the topic and related issues (tools, languages, etc.).
    + Learn about e-commerce platforms, frameworks, and technologies commonly used for building online stores.
    + Explore different programming languages suitable for web development, such as HTML, CSS, JavaScript, React JS, Restful API, Django, etc.
    + Investigate databases and data management systems like MySQL, PostgreSQL, etc.
- Step 2: Analyze design and database architecture.
    + Define the requirements and functionalities of the e-commerce website, considering both user and admin perspectives.
    + Design the database schema to store information about products, users, orders, reviews, etc.
    + Plan the user interface and layout to ensure a user-friendly shopping experience.
    + Determine the technologies and frameworks to be used for frontend and backend development.
- Step 3: Proceed with developing the Minimum Viable Product (MVP).
    + Set up the development environment, including necessary tools and frameworks.
    + Implement basic features such as user authentication, product listing, cart management, and checkout process.
    + Build the admin dashboard for managing stores, products, users, and orders.
    + Test the MVP to ensure functionality and usability.
- Step 4: Test and enhance features (if necessary).
    + Conduct thorough testing to identify and fix any bugs or issues.
    + Gather feedback from users and stakeholders to improve the user experience and add new features.
    + Enhance security measures to protect against potential threats and vulnerabilities.
    + Continuously monitor and optimize the website's performance for better scalability and responsiveness.

### 1.2 DESCRIBE THE TOPIC IDEA
- The topic focuses on building an e-commerce website that caters to the online shopping needs of consumers. The website provides a convenient and secure shopping experience, helping manage merchandise, orders, and more...
- Users taget: Admin and users (Vendors and buyers).
    + Administrator: Administrators have full control over the platform. They manage user accounts, oversee store operations, handle product approvals, and access comprehensive analytics for decision-making.
    + Seller: post and manage products, manage stores, manage orders, view reviews, view statistics, and report on inventory.
    + Buyers: search, buy products, manage shopping cart, pay online, view and review products.


### 1.3 MINIMUM VIABLE PRODUCT
- Minimum Viable Product (MVP) is an e-commerce platform designed to facilitate online transactions. The MVP caters to two main user groups: administrators and users, including both Vendors and buyers.
-For administrators, the MVP offers robust tools for managing and monitoring the platform's operations. Admins can oversee multiple stores, manage user accounts, and track order quantities through comprehensive statistical analysis.
- Vendors privileges, have access to features enabling them to list and manage their products efficiently. They can create storefronts, add and update product listings, manage orders, and view customer reviews. Additionally, Vendors can generate reports on inventory levels to maintain adequate stock levels.
- Buyers, on the other hand, benefit from a user-friendly interface that simplifies the shopping experience. They can search for products, add items to their carts, proceed to secure online payments, and manage their orders. Furthermore, buyers have the option to view product reviews and provide feedback based on their experiences.


### 1.4 COMPLETE PRODUCT
- Completed product is a robust e-commerce platform. With a focus on user experience and functionality, our platform serves the needs of both administrators and users, including Vendors and buyers.
## 2. ANALYSIS

### 2.1 Introduction

#### 2.1.1. Purpose

The purpose of our project is to create an e-commerce platform. We aim to provide a seamless and secure online marketplace where both buyers and Vendors can engage in transactions with confidence and convenience. With a user-friendly interface, comprehensive features, and robust security measures, our platform strives to enhance the online shopping experience for electronic enthusiasts while facilitating efficient and effective business operations for Vendors.

#### 2.1.2 Scope

- Scope and Target Users:
    + Administrators can manage stores, user accounts, and view comprehensive analytics.
    + Vendors are equipped to list products, manage inventory, process orders, and interact with customers.
    + Buyers enjoy a seamless shopping experience, with features like product search, cart management, and secure online payment.
- Subsystems:
    + The application comprises several subsystems, including:
    + User Management System: Handles authentication, authorization, and user profile management.
    + Product Management System: Facilitates product listing, categorization, and inventory control.
    + Order Management System: Manages orders, payments, and shipping.
    + Analytics and Reporting System: Provides insights into sales, user behavior, and inventory.
- Intended Document Audience:
    This document is intended for developers, project managers, and stakeholders involved in the development and deployment of the e-commerce platform. It serves as a comprehensive guide outlining the application's features, scope, target audience, and subsystems.

### 2.2 Requirement Analysis

#### 2.2.1 Actors Specifications

- Administrator: Administrators have full control over the platform. They manage user accounts, oversee store operations, handle product approvals, and access comprehensive analytics for decision-making.
- Vendor: Vendors are users who list their products on the platform. They manage their product inventory, process orders, interact with buyers, and view sales analytics to improve their store's performance.
- Buyer: Buyers are the end-users of the platform. They browse products, add items to their cart, make purchases through secure payment methods, and provide feedback on their shopping experience.
- Guest: Guests are unregistered users who can browse products and explore the platform. However, they need to create an account to make a purchase or access personalized features.
- Payment Gateway: This external system handles all payment transactions securely. It processes payments from buyers and transfers the funds to sellers, ensuring financial security and trust.
- Shipping Service: An external service provider responsible for the delivery of products from sellers to buyers. It offers various shipping options and tracks orders until delivery.

#### 2.2.2 Specifications Use-cases

- List of use-cases:
    - UC01: Login (Users (Administrators, Vendors, Buyers) authenticate themselves to access their respective dashboard and functionalities)
    - UC02: Analytics (Administrators and Sellers access various analytics and reports to make informed decisions about their operations and sales)
    - UC03: Post Listings (Vendors post details about their products, including descriptions, prices, and images, to make them available for purchase)
    - UC04: Purchase Product (Buyers select products, add them to their cart, and proceed through the checkout process to complete their purchase)
    - UC05: Manage Inventory (Vendors update their product listings, manage stock levels, and adjust pricing and product details)
    - UC06: Review Product (Buyers provide feedback and rate their purchased products, contributing to the product's overall rating and reviews)
- List use-cases by actor: (NOTE: if these functions are performed differently in each actor then specify the different parts)
    - Administrator:
        - UC01: Login - Access administrative dashboard.
        - UC02: Analytics - View platform-wide analytics and reports.
    - Vendor:
        - UC01: Login - Access seller dashboard.
        - UC02: Analytics - View sales and product performance analytics.
        - UC03: Post Listings - List new products for sale.
        - UC05: Manage Inventory - Update and manage product listings.
    - Buyer:
        - UC01: Login - Access buyer profile and history.
        - UC04: Purchase Product - Buy products through the platform.
        - UC06: Review Product - Leave feedback on purchased products.
These use-cases outline the interactions between the actors and the system, highlighting the functionalities available to each actor type. Differences in functionalities across actors are specified to clarify the unique actions they can perform within the system.
## 3. DESIGN

### 3.1. Activity Diagram
  - VendorActivity Diagram
![vendorActivity Diagram](https://github.com/FuuToru/23_Ecommerce/assets/128732306/46e6a5d9-f604-48ad-a7b3-428f042a730a)
  - CustomerActivity Diagram
![customerActivity Diagram](https://github.com/FuuToru/23_Ecommerce/assets/128732306/09c3e2b1-3e42-40b6-a130-c62be5fe5f3f)
  - AdminActivity Diagram
![adminActivity Diagram](https://github.com/FuuToru/23_Ecommerce/assets/128732306/c7e39983-b2f7-4286-be0a-972de23f82f1)

### 3.2. ER Diagram
![image](https://github.com/FuuToru/23_Ecommerce/assets/128732306/2e4bd8de-9ea8-41d0-84ac-08d0c7586fcb)


### 3.3. Database Diagram

Sơ đồ trên Hệ quản trị CSDL
![Database Diagram](https://github.com/FuuToru/23_Ecommerce/assets/128732306/55c9b6a2-8143-4bcd-9e5d-d33086e1b5ff)


### 3.4. Screen flow

Sơ đồ phân luồng màn hình ứng dụng

![Sơ đồ luồng màn hinh](./images/screen-flow.png)
## 4. EXPERIMENTS

### 4.1. Technologies Used

- Front-end
    - react,html,css
- Back-end
    - django,django rest framework, 
- Extensions
    - docker, aws, postgresql, draw.io, dbdiagram.io

### 4.2. Application interface

- Home page:
![Screenshot_27-5-2024_181336_localhost](https://github.com/FuuToru/23_Ecommerce/assets/104120017/40759fc1-2090-40ff-a579-7bb497beee61)
- Register page:
![Screenshot_27-5-2024_181648_localhost](https://github.com/FuuToru/23_Ecommerce/assets/104120017/32547530-92c8-43da-8545-a9f1c7701089)
- Login page:
![image](https://github.com/FuuToru/23_Ecommerce/assets/104120017/7bc5cbd5-0104-4bf3-8d0d-050258791f78)
- All product page:
![image](https://github.com/FuuToru/23_Ecommerce/assets/104120017/d826ac68-abb7-4ec4-a818-adf39dbd1ac2)
- All category page:
![image](https://github.com/FuuToru/23_Ecommerce/assets/104120017/b15cbe2e-5640-4501-ad35-9cddd8da292b)
- Product detail page:
![image](https://github.com/FuuToru/23_Ecommerce/assets/104120017/c743bb37-e4fb-45ea-9227-a41243a580bb)
- Category detail page:
![image](https://github.com/FuuToru/23_Ecommerce/assets/104120017/6e44756d-f13e-4897-940f-6b6e0dfe0d8d)

### 4.3. Result

- Achievements: Completed MVP product
    - Customers can view any product on the website, search for products, add product reviews, add to cart, and proceed to checkout.
    - Vendors can add and delete products, view order statistics, and see product reviews.
    - Administrators can view overall statistics of the website such as the number of customers, sellers, and orders.
- Incomplete:
    - The payment feature is still under research due to the lack of resources for testing.
    - The search function is not yet optimal and is still under development, as it cannot perform comprehensive product searches.
- Future development directions for the website:
    - Add the category and admin page features. Currently, these functions are not available, and administrators have to add them directly through the database.
    - Find methods to transfer data faster, especially image data.
    - Optimize the database.
    - Improve the product search functionality.
    - Add new features such as interactions between sellers and buyers, applying discount codes for products, etc.
## 5. Work Logs

### 5.1 Assignment

- Kỳ:
    - Code login and register for customer and vendor
    - Build the database and deploy it on Docker
    - Implement vendor functions
    - Write the report and create diagrams
- Trang:
    - Code vendor functions
    - Implement Add to Cart for customer
    - Code the admin page
    - Write the report and slides
- Trí:
    - Code front-end for basic pages
    - Build the database and deploy it on Docker
    - Add data
    - Test the website
    - Write the report and create the demo video

### 5.2 Work dairy

- Week 10/04 - 18/04:
    - Tasks:
        - Topic Analysis: Kỳ, Trang, Trí
        - Database Construction: Kỳ, Trí
        - Report Slide Preparation: Trang, Trí
    - Issues:
        - Scope of the topic not yet determined
- Week 19/04 - 28/04:
    - Tasks:
        - Reevaluate and properly define the topic direction: Kỳ, Trang, Trí
        - Begin structuring the project framework: Trí, Kỳ, Trang
        - Add basic pages (All Product, ...): Trí
    - Issues:
        - Difficulties with front-end and back-end coding
- Week 29/04 - 10/05:
    - Tasks:
        - Front-end coding for product, category, customer, vendor pages: Trí
        - Front-end and back-end coding for Add to Cart: Trang
        - Back-end coding for vendor and customer registration and login: Kỳ
    - Issues:
        - Many challenges in back-end coding for login and registration
- Week 11/05 - 24/05:
    - Tasks:
        - Add data to the database for testing, customer profile update: Trí
        - Implement additional vendor functions: Trang, Kỳ
    - Issues:
        - Some difficulties in adding product functions for the vendor
- Week 25/05 - 27/05:
    - Tasks:
        - Code the admin page: Trang
        - Build the database on Supabase, Docker: Trí, Kỳ
        - Review and finalize the website: Trang, Trí, Kỳ
        - Write the report, create diagrams: Trang, Trí, Kỳ
...
## 6. References

- [1] Multivendor-Ecommerce-Website-in-Django-Django-REST-Framework-and-ReactJs [LINK](https://github.com/codeartisanlab/Multivendor-Ecommerce-Website-in-Django-Django-REST-Framework-and-ReactJsk)
- [2] django-ecommerce-1 [LINK](https://github.com/Code-Institute-Submissions/django-ecommerce-1)