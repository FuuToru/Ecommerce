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
